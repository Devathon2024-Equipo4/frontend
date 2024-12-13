import { useTranslation } from 'react-i18next';

export const useWeatherTranslation = () => {
  const { t } = useTranslation();

  const getTranslatedCondition = (condition) => {
    switch (condition) {
      case 'Partly cloudy':
        return t('partlyCloudy');
      case 'Sunny':
        return t('Sunny');
      case 'Rainy':
        return t('Rainy');
      case 'Cloudy':
        return t('Cloudy');
      case 'Clear':
        return t('Clear');
      case 'Overcast':
        return t('Overcast');
      case 'Mist':
        return t('Mist');
      case 'Patchy rain possible':
        return t('patchyRainPossible');
      case 'Patchy snow possible':
        return t('patchySnowPossible')
      case 'Patchy sleet possible':
        return t('patchySleetPossible')
      case 'Patchy freezing drizzle possible':
        return t('patchyFreezinDrizzlePossible')
      case 'Thundery outbreaks possible':
        return t('thunderyOutbreaksPossible')
      case 'Blowing snow':
        return t('blowingSnow')
      case 'Blizzard':
        return t('Blizzard')
      case 'Fog':
        return t('Fog')
      case 'Freezing fog':
        return t('freezinFog')
      case 'Patchy light drizzle':
        return t('patchyLightDrizzle')
      case 'Light drizzle':
        return t('lightDrizzle')
      case 'Freezing drizzle':
        return t('freezingDrizzle')
      case 'Heavy freezing drizzle':
        return t('heavyFreezingDrizzle')
      case 'Patchy light rain':
        return t('patchyLightRain')
      case 'Light rain':
        return t('lightRain')
      case 'Moderate rain at times':
        return t('moderateRainAtTimes')
      case 'Moderate rain':
        return t('moderateRain')
      case 'Heavy rain at times':
        return t('heavyRainAtTimes')
      case 'Heavy rain':  
        return t('heavyRain')
      case 'Light freezing rain':
        return t('lightFreezingRain')
      case 'Moderate or heavy freezing rain':
        return t('moderateOrHeavyFreezingRain')
      case 'Light sleet':
        return t('lightSleet')
      case 'Moderate or heavy sleet':
        return t('moderateOrHeavySleet')
      case 'Patchy light snow':
        return t('patchyLightSnow')
      case 'Light snow':
        return t('lightSnow')
      case 'Patchy moderate snow':
        return t('patchyModerateSnow')
      case 'Moderate snow':
        return t('moderateSnow')
      case 'Patchy heavy snow':
        return t('patchyHeavySnow')
      case 'Heavy snow':
        return t('heavySnow')
      case 'Ice pellets':
        return t('icePellets')
      case 'Light rain shower':
        return t('lightRainShower')
      case 'Moderate or heavy rain shower':
        return t('moderateOrHeavyRainShower')
      case 'Torrential rain shower':  
        return t('torrentialRainShower')
      case 'Light sleet showers':
        return t('lightSleetShowers')
      case 'Moderate or heavy sleet showers':
        return t('moderateOrHeavySleetShowers')
      case 'Light snow showers':
        return t('lightSnowShowers')
      case 'Moderate or heavy snow showers':
        return t('moderateOrHeavySnowShowers')
      case 'Light showers of ice pellets':
        return t('lightShowersOfIcePellets')
      case 'Moderate or heavy showers of ice pellets':
        return t('moderateOrHeavyShowersOfIcePellets')
      case 'Patchy light rain with thunder':
        return t('patchyLightRainWithThunder')
      case 'Moderate or heavy rain with thunder':
        return t('moderateOrHeavyRainWithThunder')
      case 'Patchy light snow with thunder':
        return t('patchyLightSnowWithThunder')
      case 'Moderate or heavy snow with thunder':
        return t('moderateOrHeavySnowWithThunder')
      default:
        return condition; 
    }
  };

  return { getTranslatedCondition };
};