import { useGetWeather } from "@/hooks/weather/useGetWeather";
import { Loader } from "lucide-react";
import { TriangleAlertIcon } from "lucide-react";
import { Card, CardContent, CardTitle } from "../ui/card";
import WeatherIcon from "./WeatherIcon";
import { WindIcon } from "lucide-react";
import { EyeIcon } from "lucide-react";
import { DropletIcon } from "lucide-react";
import { Cloud } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useWeatherTranslation } from './useWeatherTranslation';

export const Weather = () => {
  const { isLoading, isError, weather, fetchWeather } = useGetWeather();
  const {t} = useTranslation();
  const { getTranslatedCondition } = useWeatherTranslation();

  if (isLoading) {
    return (
      <div className=" flex flex-col items-center justify-center">
        <Loader className="animate-spin size-5 text-muted-foreground  " />
      </div>
    );
  }

  if (isError) {
    return (
      <div className=" flex flex-col items-center justify-center">
        <TriangleAlertIcon className="size-5 text-red-500" />
        {isError}
      </div>
    );
  }

  return (
    <div className="w-full h-full flex flex-col justify-center items-center mt-4">
      <div className="text-center">
        <Card className="bg-[rgba(255,255,255,0.25)] backdrop-blur-[10px] shadow-lg p-4 ">
          <CardTitle>
            <div className="flex items-center justify-between">
              <div className="flex flex-col items-start">
                <span className="text-md">{weather[0].name}</span>
                <span className="text-sm">{getTranslatedCondition(weather[1].condition.text)}</span>
              </div>

              <WeatherIcon code={weather[1].condition.code} />
            </div>
          </CardTitle>
          <CardContent>
            <div className="flex flex-col space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex flex-col items-start ">
                  <span className="text-lg">{t('Wind')}</span>
                  <div className="flex items-center">
                    <WindIcon className="size-8" />
                    <span className="text-md">{weather[1].wind_kph} kph/</span>
                    <span className="text-md">{weather[1].wind_mph} mph</span>
                  </div>
                </div>
                <div className="flex flex-col items-start ">
                  <span className="text-lg">{t('Visibility')}</span>
                  <div className="flex items-center">
                    <EyeIcon className="size-8" />
                    <span className="text-md">{weather[1].vis_km} km/</span>
                    <span className="text-md">
                      {weather[1].vis_miles} miles
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between space-x-6">
                <div className="flex flex-col items-start ">
                  <div className="flex items-center">
                    <DropletIcon className="size-8" />
                    <span className="text-lg mr-2">{t('Humidity')}</span>
                    <span className="text-md">{weather[1].humidity}%</span>
                  </div>
                </div>
                <div className="flex flex-col items-start ">
                  <div className="flex items-center">
                    <Cloud className="size-8 mr-2" />
                    <span className="text-md mr-2">{t('Cloud')}</span>
                    <span className="text-md">{weather[1].cloud}</span>
                  </div>
                </div>
                <span className="text-4xl">{weather[1].temp_c} °C</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
