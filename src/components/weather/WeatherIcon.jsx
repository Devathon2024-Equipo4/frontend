import Cloudy from "./icons/Cloudy";
import Rainy from "./icons/Rainy";
import CloudyWithSun from "./icons/CloudyWithSun";
import CloudyWithLightning from "./icons/CloudyWithLightning";
import CloudyWithMoon from "./icons/CloudyWithMoon";
import CloudyWithRainLightning from "./icons/CloudyWithRainLightning";
import Sunny from "./icons/Sunny";
import SunnyWithWind from "./icons/SunnyWithWind";
import Snowy from "./icons/Snowy";
import ClearNight from "./icons/ClearNight";
import Overcast from "./icons/Overcast";
import Mist from "./icons/Mist";
import PartialCloudyDay from "./icons/PartialCloudyDay";
import Sleet from "./icons/Sleet";
import Hail from "./icons/Hail";
import Fog from "./icons/Fog";
import Drizzle from "./icons/Drizzle";
import SnowFlake from "./icons/SnowFlake";
import ThunderStorm from "./icons/ThunderStorm";
import ThunderStormSnow from "./icons/ThunderStormSnow";
import ThunderStormRain from "./icons/ThunderStormRain";

const iconMap = {
  1000: Sunny,
  1003: PartialCloudyDay,
  1006: Cloudy,
  1009: Overcast,
  1030: Mist,
  1063: Rainy,
  1066: Snowy,
  1069: Sleet,
  1072: Hail,
  1087: CloudyWithRainLightning,
  1114: Snowy,
  1117: Snowy,
  1135: Fog,
  1147: Fog,
  1150: Drizzle,
  1153: Drizzle,
  1168: Drizzle,
  1171: Drizzle,
  1180: CloudyWithLightning,
  1183: CloudyWithLightning,
  1186: Rainy,
  1189: Rainy,
  1192: Rainy,
  1195: Rainy,
  1198: Snowy,
  1201: Snowy,
  1204: Sleet,
  1207: Sleet,
  1210: Snowy,
  1213: Snowy,
  1216: Snowy,
  1219: Snowy,
  1222: Snowy,
  1225: Snowy,
  1237: Snowy,
  1240: CloudyWithRainLightning,
  1243: CloudyWithRainLightning,
  1246: CloudyWithRainLightning,
  1249: Sleet,
  1252: Sleet,
  1255: SnowFlake,
  1258: SnowFlake,
  1261: SnowFlake,
  1264: SnowFlake,
  1273: ThunderStormRain,
  1276: ThunderStormRain,
  1279: ThunderStormSnow,
  1282: ThunderStormSnow,
};

const WeatherIcon = ({code}) => {
  if (typeof code !== 'number') {
    throw new Error('El prop "code" debe ser un número');
  }

  const IconComponent = iconMap[code] || null;

  return (
    <div className="bg-gradient-to-b from-skyLight to-skyDark w-20 h-20 p-2 flex items-center justify-center rounded-sm">
      {IconComponent ? <IconComponent /> : <p>Icono no disponible</p>}
    </div>
  );
};

export default WeatherIcon;
