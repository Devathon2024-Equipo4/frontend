import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
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
      <Dialog open={promise !== null} onClose={handleClose}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
            <DialogDescription>{message}</DialogDescription>
            
          </DialogHeader>
          <DialogFooter className="pt-2 ">
            <Button variant="outline" onClick={handleCancel}>
              {t("useConfirm.cancel")}
            </Button>
            <Button onClick={handleConfirm}>{t("useConfirm.confirm")}</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );

  return [confirmDialog, confirm];
}