import { useGetAlignments } from "@/hooks/alignment/useGetAlignments";
import { useState } from "react";
import { Input } from "../ui/input";
import { useTranslation } from "react-i18next";
import { Button } from "../ui/button";
import { toast } from "sonner";
import { useCreateAlignment } from "@/hooks/alignment/useCreateAlignment";
import { Loader } from "lucide-react";
import { TriangleAlertIcon } from "lucide-react";
import reindeerStore from "@/stores/reindeerStore";
import { useCreateAlignmentRelation } from "@/hooks/alignment/useCreateAlignmentRelation";
import { useGetAlignmentRelation } from "@/hooks/alignment/useGetAlignmentRelation";
import { useConfirm } from "@/hooks/useConfirm";

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
  const [ConfirmDialog, confirm] = useConfirm({ title:  t('useConfirm.areYouSure'), message: t('useConfirm.thisWillRemoveTheAlignmentAndAllItsData') });
  const [name, setName] = useState("");
  const { mutate: createAlignment, isPending: isCreateAlignment } =
    useCreateAlignment();
  const {
    mutate: createAlignmentRelation,
    isPending: isCreateAlignmentRelation,
  } = useCreateAlignmentRelation();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await createAlignment(
      { name },
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

  const handleCreateAlignmentRelation = async (alignmentId) => {
    const data = reindeers.map((reindeer) => ({
      order: reindeer.order,
      alignmentId: alignmentId,
      reindeerId: reindeer.id,
    }));

    await createAlignmentRelation(
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
    /*await removeAlignment({ id: alignmentId }, {
      onSuccess: () => {
        toast.success(t("alignment.alignmentRemoved"));
        fetchAlignments();
      },
      onError: () => {
        toast.error("Error al eliminar la alineación");
      },
    });*/
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
            <li key={alignment.id} className="flex items-center gap-x-2">
              <span
                className="cursor-pointer text-2xl"
                onClick={() => handleGetAlignmentsRelation(alignment.id)}
              >
                {alignment.name}
              </span>
              <Button onClick={() => handleEdit(alignment)} variant="outline">
                Edit
              </Button>
              <Button
                onClick={() => handleRemove(alignment.id)}
                variant="outline"
              >
                Delete
              </Button>
              <Button
                onClick={() => handleCreateAlignmentRelation(alignment.id)}
              >
                {t("alignment.saveAlignment")}
              </Button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
