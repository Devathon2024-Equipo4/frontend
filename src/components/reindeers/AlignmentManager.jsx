import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { toast } from "sonner";
import { Loader } from "lucide-react";
import { TriangleAlertIcon } from "lucide-react";
import reindeerStore from "@/stores/reindeerStore";
import { useConfirm } from "@/hooks/useConfirm";
import { useGetAlignments } from "@/hooks/alignment/useGetAlignments";
import { useCreateAlignment } from "@/hooks/alignment/useCreateAlignment";
import { useCreateAlignmentRelation } from "@/hooks/alignment/useCreateAlignmentRelation";
import { useGetAlignmentRelation } from "@/hooks/alignment/useGetAlignmentRelation";
import { useRemoveAlignmentRelation } from "@/hooks/alignment/useRemoveAlignmentRelation";
import { useRemoveAlignment } from "@/hooks/alignment/useRemoveAlignment";
import { useUpdateAlignmentRelation } from "@/hooks/alignment/useUpdateAlignmentRelation";
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { useUpdateAlignment } from "@/hooks/alignment/useUpdateAlignment";

export const AlignmentManager = () => {
  const { t } = useTranslation();
  const reindeers = reindeerStore((state) => state.reindeers);
  const {
    isLoading: isLoadingAlignments,
    Error: ErrorAlignments,
    alignments,
    fetchAlignments,
  } = useGetAlignments();
  const {
    isLoading: isLoadingAlignmentRelation,
    Error: ErrorAlignmentRelation,
    fetchAlignmentRelation,
  } = useGetAlignmentRelation();
  const [ConfirmDialog, confirm] = useConfirm({
    title: t("useConfirm.areYouSure"),
    message: t("useConfirm.thisWillRemoveTheAlignmentAndAllItsData"),
  });
  const [name, setName] = useState("");
  const [editOpen, setEditOpen] = useState(false);
  const [value, setValue] = useState("");
  const { mutate: createAlignment, isPending: isCreateAlignment } =
    useCreateAlignment();
  const {
    mutate: createAlignmentRelation,
    isPending: isCreateAlignmentRelation,
  } = useCreateAlignmentRelation();
  const {
    mutate: removeAlignmentRelation,
    isPending: isRemoveAlignmentRelation,
  } = useRemoveAlignmentRelation();
  const { mutate: removeAlignment, isPending: isRemoveAlignment } =
    useRemoveAlignment();
  const {
    mutate: updateAlignmentRelation,
    isPending: isUpdateAlignmentRelation,
  } = useUpdateAlignmentRelation();
  const { mutate: updateAlignment, isPending: isUpdateAlignment } =
    useUpdateAlignment();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await createAlignment(
      { name },
      {
        onSuccess: () => {
          toast.success(t("alignment.alignmentCreated"));
          fetchAlignments();
          setName("");
        },
        onError: () => {
          toast.error("Error al crear la alineación");
        },
      }
    );
  };

  const handleSaveAlignmentRelation = async (alignmentId) => {
    const data = reindeers.map((reindeer) => ({
      order: reindeer.order,
      alignmentId: alignmentId,
      reindeerId: reindeer.id,
    }));

    await updateAlignmentRelation(
      { data },
      {
        onSuccess: () => {
          toast.success(t("alignment.alignmentCreated"));
          fetchAlignments();
        },
        onError: () => {
          toast.error("Error al crear la alineación");
        },
      }
    );
  };

  const handleGetAlignmentsRelation = async (alignmentId) => {
    await fetchAlignmentRelation(alignmentId);
  };

  const handleRemove = async (alignmentId) => {
    const ok = await confirm();
    if (!ok) {
      return;
    }
    try {
      await removeAlignmentRelation(
        { id: alignmentId },
        {
          onSuccess: async () => {
            await handleRemoveAlignment(alignmentId);
          },
          onError: () => {
            toast.error("Error al eliminar la alineación en la relacion");
          },
        }
      );
    } catch (error) {
      toast.error("Error al eliminar la alineación en la relacion");
    }
  };

  const handleRemoveAlignment = async (alignmentId) => {
    try {
      await removeAlignment(
        { id: alignmentId },
        {
          onSuccess: () => {
            toast.success(t("alignment.alignmentRemoved"));
            fetchAlignments();
          },
          onError: () => {
            toast.error("Error al eliminar la alineación en la base de datos");
          },
        }
      );
    } catch (error) {
      toast.error("Error al eliminar la alineación en la base de datos");
    }
  };

  const handleUpdateAlignment = async (id) => {
    try {
      const data = { id, name: value };
      await updateAlignment(
        { data },
        {
          onSuccess: () => {
            toast.success(t("alignment.alignmentUpdated"));
            setEditOpen(false);
            fetchAlignments();  
          },
          onError: () => {
            toast.error("Error al actualizar la alineación");
          },
        }
      );
    } catch (error) {
      toast.error("Error al actualizar la alineación");
    }
  };

  if (isLoadingAlignments || isLoadingAlignmentRelation) {
    return (
      <div className=" flex flex-col items-center justify-center">
        <Loader className="animate-spin size-5 text-muted-foreground  " />
      </div>
    );
  }

  if (ErrorAlignments || ErrorAlignmentRelation) {
    return (
      <div className=" flex flex-col items-center justify-center">
        <TriangleAlertIcon className="size-5 text-red-500" />
        {Error}
      </div>
    );
  }

  return (
    <>
      <ConfirmDialog />
      <div className="flex flex-col space-y-4">
        <h2>{t("alignment.alignmentManager")}</h2>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <Input
            disabled={isCreateAlignment}
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={t("alignment.enterName")}
          />

          <Button type="submit">{t("alignment.save")}</Button>
        </form>
        <ul>
          {alignments.map((alignment) => (
            <li
              key={alignment.id}
              className="flex items-center gap-x-2 space-y-2"
            >
              <span
                className="cursor-pointer text-2xl"
                onClick={() => handleGetAlignmentsRelation(alignment.id)}
              >
                {alignment.name}
              </span>
              <Dialog open={editOpen} onOpenChange={setEditOpen}>
                <DialogTrigger asChild>
                  <div className="px-4 py-2 bg-white rounded-lg border cursor-pointer hover:bg-gray-50">
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-[#1264a3]  font-semibold">
                        Edit
                      </p>
                    </div>
                   
                  </div>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>{t("alignment.renameThisAlignment")}</DialogTitle>
                  </DialogHeader>
                  <form className="space-y-4 " onSubmit={(e) => {e.preventDefault();handleUpdateAlignment(alignment.id)}}>
                    <Input
                      value={value}
                      disabled={false}
                      onChange={(e) => setValue(e.target.value)}
                      placeholder={t("alignment.enterName")}
                      type="text"
                      className="w-full"
                      required
                      autoFocus
                      maxLength={30}
                      minLength={3}
                    />
                    <DialogFooter>
                      <DialogClose asChild>
                        <Button
                          variant="outline"
                          disabled={false}
                        >
                          Cancel
                        </Button>
                      </DialogClose>
                      <Button disabled={false} type="submit">
                        Save
                      </Button>
                    </DialogFooter>
                  </form>
                </DialogContent>
              </Dialog>
              <Button
                onClick={() => handleRemove(alignment.id)}
                variant="outline"
              >
                Delete
              </Button>
              <Button onClick={() => handleSaveAlignmentRelation(alignment.id)}>
                {t("alignment.saveAlignment")}
              </Button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
