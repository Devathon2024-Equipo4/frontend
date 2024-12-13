import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Hint } from "../Hint";
import { useDialogElf } from "./useDialogElf";
import { useTranslation } from "react-i18next";

const DialogElf = ({ open, setOpen }) => {
  const { t } = useTranslation();
  const { handleSubmit, isCreateElf,  nameRef, ageRef, addressRef, statureRef, genderRef, emailRef } = useDialogElf();
  

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-lg text-stiletto font-DynaPuff tracking-wider ">
            {t("elf.dialogTitle")}
          </DialogTitle>
        </DialogHeader>
        <div className="flex flex-col space-y-4 w-full">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col space-y-3 w-full mb-4">
              <Label className="font-DynaPuff">{t("elf.name")}</Label>
              <Input
                disabled={isCreateElf}
                ref={nameRef}
                placeholder={t("elf.namePlaceholder")}
                className="w-full text-xs font-DynaPuff"
                type="text"
                required
              />
            </div>
            <div className="flex w-full space-x-4">
              <div className="flex flex-col space-y-2 w-full mb-4">
                <Label className="font-DynaPuff">{t("elf.age")}</Label>
                <Input
                  disabled={isCreateElf}
                  ref={ageRef}
                  placeholder={t("elf.agePlaceholder")}
                  min="1"
                  className="w.-full text-xs font-DynaPuff"
                  type="number"
                  required
                />
              </div>
              <div className="flex flex-col space-y-2 w-full mb-4">
                <Label className="font-DynaPuff">{t("elf.stature")}</Label>
                <Input
                  disabled={isCreateElf}
                  ref={statureRef}
                  placeholder={t("elf.staturePlaceholder")}
                  min="20"
                  max="300"
                  className="w-full text-xs font-DynaPuff"
                  type="number"
                  required
                />
              </div>
            </div>
            <div className="flex flex-col space-y-2 w-full mb-4">
              <label className="font-DynaPuff text-sm font-medium">Gender</label>
              <select
                disabled={isCreateElf}
                ref={genderRef}
                className="w-full border border-gray-300 rounded-md p-2 text-sm font-DynaPuff"
              >
                <option className="text-xs font-DynaPuff" value="MALE">
                  {t("elf.genderMale")}
                </option>
                <option className="text-xs font-DynaPuff" value="FEMALE">
                  {t("elf.genderFemale")}
                </option>
              </select>
            </div>
            <div className="flex flex-col space-y-2 w-full mb-4">
              <Label className="font-DynaPuff">{t("elf.address")}</Label>
              <Input
                disabled={isCreateElf}
                ref={addressRef}
                placeholder={t("elf.addressPlaceholder")}
                className="w-full text-xs font-DynaPuff"
                type="text"
                required
              />
            </div>
            <div className="flex flex-col space-y-2 w-full mb-6">
              <Label className="font-DynaPuff">{t("elf.email")}</Label>
              <Input
                disabled={isCreateElf}
                type="email"
                ref={emailRef}
                placeholder={t("elf.emailPlaceholder")}
                className="w-full text-xs font-DynaPuff"
                required
              />
            </div>
            <div className="flex items-center justify-center space-x-4">
              <Button
                disabled={isCreateElf}
                className=" font-DynaPuff tracking-wider"
                type="submit"
              >
                {t("elf.save")}
              </Button>
              <Hint label={t("elf.closeHint")} side="top" align="end">
              <Button
                variant="outline"
                onClick={() => setOpen(false)}
                className="font-DynaPuff tracking-wider"
              >
                {t("elf.close")}
              </Button>
              </Hint>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};
export default DialogElf;
