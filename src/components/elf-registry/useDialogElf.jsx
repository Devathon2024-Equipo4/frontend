import { useCreateElf } from "@/hooks/elves/useCreateElf";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { toast } from "sonner";

export const useDialogElf = () => {
  const { t } = useTranslation();
  const { mutate: createElf, isPending: isCreateElf } = useCreateElf();

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      name: nameRef.current.value,
      age: ageRef.current.value,
      address: addressRef.current.value,
      stature: statureRef.current.value,
      gender: genderRef.current.value,
      email: emailRef.current.value,
    };

    await createElf(data, {
      onSuccess: () => {
        toast.success(t("elf.elfRegistered"));
        resetForm();
      },
      onError: () => {
        toast.error(t("Error al crear el elfo"));
      },
    });
  };

  return { handleSubmit, isCreateElf,  nameRef, ageRef, addressRef, statureRef, genderRef, emailRef };
};