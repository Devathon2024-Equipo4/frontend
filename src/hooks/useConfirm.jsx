import { AlertDialog, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useTranslation } from "react-i18next";


export const useConfirm = ({ title, message }) => {
  const {t} = useTranslation();
  const [promise, setPromise] = useState(null);
  const confirm = () =>
    new Promise((resolve) => {
      setPromise({ resolve });
    });

    const handleClose = () => {
      setPromise(null);
    };

    const handleCancel = () => {
      promise?.resolve(false);
      handleClose();
    };

    const handleConfirm = () => {
      promise?.resolve(true);
      handleClose();
    };

    const confirmDialog = () => (
      <AlertDialog open={promise !== null} >
        <AlertDialogContent hideClose>
          <AlertDialogHeader>
            <AlertDialogTitle>{title}</AlertDialogTitle>
            <AlertDialogDescription>{message}</AlertDialogDescription>
            
          </AlertDialogHeader>
          <AlertDialogFooter className="pt-2 ">
            <Button variant="outline" onClick={handleCancel}>
              {t("useConfirm.cancel")}
            </Button>
            <Button onClick={handleConfirm}>{t("useConfirm.confirm")}</Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    );

  return [confirmDialog, confirm];
}