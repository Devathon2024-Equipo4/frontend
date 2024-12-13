import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Hint } from "../Hint";
import { useDialogElf } from "./useDialogElf";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

const DialogEdit = ({ open, setOpen, elf }) => {
  const { t } = useTranslation();
  const {
    handleSubmit,
    isCreateElf,
    isUpdateElf,
    nameRef,
    ageRef,
    addressRef,
    statureRef,
    genderRef,
    emailRef,
  } = useDialogElf();

  const [formData, setFormData] = useState({
    name: "",
    age: "",
    address: "",
    stature: "",
    gender: "MALE",
    email: "",
  });

  useEffect(() => {
    if (elf) {
      setFormData({
        name: elf.name || "",
        age: elf.age || "",
        address: elf.address || "",
        stature: elf.stature || "",
        gender: elf.gender || "MALE",
        email: elf.email || "",
      });
    }
  }, [elf]);

  const handleSave = (e) => {
    handleSubmit(e, elf?.id);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-lg text-stiletto font-DynaPuff tracking-wider">
            {elf ? t("Editar elfo") : t("elf.createElf")}
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSave}>
          <div className="flex flex-col space-y-3 w-full mb-4">
            <Label className="font-DynaPuff">{t("elf.name")}</Label>
            <Input
              ref={nameRef}
              defaultValue={formData.name}
              disabled={isCreateElf}
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
                ref={ageRef}
                defaultValue={formData.age}
                disabled={isCreateElf}
                placeholder={t("elf.agePlaceholder")}
                min="1"
                className="w-full text-xs font-DynaPuff"
                type="number"
                required
              />
            </div>
            <div className="flex flex-col space-y-2 w-full mb-4">
              <Label className="font-DynaPuff">{t("elf.stature")}</Label>
              <Input
                ref={statureRef}
                defaultValue={formData.stature}
                disabled={isCreateElf}
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
              ref={genderRef}
              defaultValue={formData.gender}
              disabled={isCreateElf}
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
              ref={addressRef}
              defaultValue={formData.address}
              disabled={isCreateElf}
              placeholder={t("elf.addressPlaceholder")}
              className="w-full text-xs font-DynaPuff"
              type="text"
              required
            />
          </div>
          <div className="flex flex-col space-y-2 w-full mb-4">
            <Label className="font-DynaPuff">{t("elf.email")}</Label>
            <Input
              ref={emailRef}
              defaultValue={formData.email}
              disabled={isCreateElf}
              placeholder={t("elf.emailPlaceholder")}
              className="w-full text-xs font-DynaPuff"
              type="email"
              required
            />
          </div>
          <div className="flex items-center justify-center space-x-4">
            <Button
              disabled={isCreateElf || isUpdateElf}
              className="font-DynaPuff tracking-wider"
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
      </DialogContent>
    </Dialog>
  );
};

export default DialogEdit;
