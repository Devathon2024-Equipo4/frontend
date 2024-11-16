import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useState } from "react";


export const useConfirm = ({ title, message }) => {
  const [promise, setPromise] = useState(null);
  const confirm = () =>
    new Promise((resolve, _reject) => {
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
      <Dialog open={promise !== null}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
            <DialogDescription>{message}</DialogDescription>
          </DialogHeader>
          <DialogFooter className="pt-2 ">
            <Button variant="outline" onClick={handleCancel}>
              Cancel
            </Button>
            <Button onClick={handleConfirm}>Confirm</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );

  return [confirmDialog, confirm];
}