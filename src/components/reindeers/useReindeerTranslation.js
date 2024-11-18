import { useTranslation } from "react-i18next";

export const useReindeerTranslation = () => {
  const { t } = useTranslation();
  const getTranslatedCondition = (description) => {
    switch (description) {
      case "the left leader before the arrival of Rudolph":
        return t("reindeer.theLeftLeaderBeforeTheArrivalOfRudolph");
      case "the right leader before Rudolph's arrival.":
        return t("reindeer.theRightLeaderBeforeRudolphsArrival");
      case "current leader of the Christmas reindeer":
        return t("reindeer.currentLeaderOfTheChristmasReindeer");
      case "The most beautiful of the reindeer and possessing great endurance":
        return t("reindeer.theMostBeautifulOfTheReindeerAndPossessingGreatEndurance");
      case "considered the most beautiful, and of great resistance":
        return t("reindeer.theMostBeautifulOfTheReindeerAndPossessingGreatEndurance2");
      case "the reindeer in charge of spreading the happiness and wonder that Santa Claus brings.":
        return t("reindeer.theReindeerInChargeOfSpreadingTheHappinessAndWonderThatSantaClausBrings");
      case "the reindeer in charge of spreading the love and joy that Santa Claus brings.":
        return t("reindeer.theReindeerInChargeOfSpreadingTheLoveAndJoyThatSantaClausBrings");
      case "the reindeer that represents the spirit of thunder.":
        return t("reindeer.theReindeerThatRepresentsTheSpiritOfThunder");
      case "the reindeer that represents the spirit of lightning.":
        return t("reindeer.theReindeerThatRepresentsTheSpiritOfLightning");
      default:
        return description; 
    }
  };
  
  return { getTranslatedCondition };
};