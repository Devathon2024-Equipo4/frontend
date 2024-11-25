import { useState } from "react";
import CardElf from "@/components/elf-registry/CardElf";
import DialogElf from "@/components/elf-registry/DialogElf";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { Hint } from "@/components/Hint";
import ButtonBack from "@/components/ButtonBack";

const ElfRegistryPage = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const handleDialog = () => {
    setOpen(true);
  };

  return (
    <div className="w-full min-h-[calc(100vh-64px)] bg-gray pt-10 pb-10 px-10 sm:px-30 lg:px-40  font-DynaPuff">
      <h1 className="text-stiletto text-6xl font-MountainsOfChristmas pt-10 text-center font-bold">
        {t("elf.title")}
      </h1>
      
      <ButtonBack />
      <div className="flex items-center justify-center">
        <Hint label={t("elf.buttonDialogHint")} side="top" align="end">
          <Button
            onClick={handleDialog}
            className="bg-donJuan border-donJuan border hover:border-white hover:bg-donJuan/50   tracking-wider px-6 py-4 h-12 rounded-lg text-white text-xl shadow-lg" 
          >
            {t("elf.buttonDialog")}
          </Button>
        </Hint>

        
      </div>
      <DialogElf open={open} setOpen={setOpen} className="align-end" />
      <CardElf />
    </div>
  );
};

export default ElfRegistryPage;
