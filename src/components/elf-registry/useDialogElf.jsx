import { useCreateElf } from "@/hooks/elves/useCreateElf";
import { useGetElves } from "@/hooks/elves/useGetElves";
import { useUpdateStatus } from "@/hooks/elves/useUpdateStatus";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { toast } from "sonner";

export const useDialogElf = () => {
  const { t } = useTranslation();
  const { mutate: createElf, isPending: isCreateElf } = useCreateElf();
  const { mutate: updateElf, isPending: isUpdateElf } = useUpdateStatus();
  const { fetchElves } = useGetElves();

  const nameRef = useRef(null);
  const ageRef = useRef(null);
  const addressRef = useRef(null);
  const statureRef = useRef(null);
  const genderRef = useRef(null);
  const emailRef = useRef(null);

  const resetForm = () => {
    nameRef.current.value = '';
    ageRef.current.value = '';
    addressRef.current.value = '';
    statureRef.current.value = '';
    genderRef.current.value = 'MALE';
    emailRef.current.value = '';
  };

  const handleSubmit = async (e, elfId = null) => {
    e.preventDefault();
    const data = {
      id: elfId,
      name: nameRef.current.value,
      age: ageRef.current.value,
      address: addressRef.current.value,
      stature: statureRef.current.value,
      gender: genderRef.current.value,
      email: emailRef.current.value,
    };

    const operation = elfId ? updateElf : createElf;

    await operation(data, {
      onSuccess: () => {
        const message = elfId
          ? t("Elfo actualizado con exito")
          : t("elf.elfRegistered");
        toast.success(message);
        resetForm();
        fetchElves();
      },
      onError: () => {
        const errorMessage = elfId
          ? t("Error al actualizar el elfo")
          : t("Error al crear el elfo");
        toast.error(errorMessage);
      },
    });
  };

  return { handleSubmit, isCreateElf, isUpdateElf, nameRef, ageRef, addressRef, statureRef, genderRef, emailRef };
};