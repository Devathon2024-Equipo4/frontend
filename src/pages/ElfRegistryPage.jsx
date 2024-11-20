import { useState } from "react";
import CardElf from "@/components/elf-registry/CardElf";
import DialogElf from "@/components/elf-registry/DialogElf";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

const ElfRegistryPage = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const handleDialog = () => {
    setOpen(true);
  };

  return (
    <div className="w-full min-h-[calc(100vh-64px)] bg-gray pt-10 pb-10 px-10 sm:px-30 lg:px-40 flex flex-col justify-center items-center">
      <h1 className="text-stiletto text-3xl font-MountainsOfChristmas pt-10 text-center">
        {t("elf.title")}
      </h1>
      <div className="w-full flex flex-col items-end">
        <Button onClick={handleDialog} className="bg-green-600 hover:bg-green-700">{t("elf.buttonDialog")}</Button>
        <DialogElf open={open} setOpen={setOpen} className="align-end" />
      </div>
      <CardElf />
    </div>
  );
};

export default ElfRegistryPage;
