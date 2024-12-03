import { useTranslation } from "react-i18next";

export const useElfTranslation = () => {
  const { t } = useTranslation();
  const getStatus = (status) => {
    switch (status) {
      case "HIRED":
        return t("elf.hired");
      case "FIRED":
        return t("elf.fired");
      
      default:
        return status; 
    }
  };
  const getGender = (gender) => {
    switch (gender) {
      case "MALE":
        return t("elf.genderMale");
      case "FEMALE":
        return t("elf.genderFemale");
      default:
        return gender; 
    }
  };
  
  return { getStatus, getGender  };
};