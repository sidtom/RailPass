import { METHODS } from "http";
import {
  trainsBetweenStationsURL,
  apiKey,
  trainsByStationURL,
  liveTrainStatusURL,
} from "../config/url";
export const getTrainsBetweenStations = async (
  fromStationCode: string,
  toStationCode: string,
  formattedDate: string
) => {
  const queryParams = new URLSearchParams({
    fromStationCode: fromStationCode,
    toStationCode: toStationCode,
    dateOfJourney: formattedDate,
  });

  const response = await fetch(`${trainsBetweenStationsURL}?${queryParams}`, {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": `${apiKey}`,
      "X-RapidAPI-Host": "irctc1.p.rapidapi.com",
    },
  });

  if (response.ok) {
    const data = await response.json();
  } else {
    console.error("Error fetching data:", response.status, response.statusText);
  }
};

export const getTrainsByStation = async (stationCode: string) => {
  const queryParams = new URLSearchParams({
    stationCode: stationCode,
  });

  const response = await fetch(`${trainsByStationURL}?${queryParams}`, {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": `${apiKey}`,
      "X-RapidAPI-Host": "irctc1.p.rapidapi.com",
    },
  });

  if (response.ok) {
    const data = await response.json();
    return data;
  } else {
    console.error("Error fetching data:", response.status, response.statusText);
  }
};

export const getLiveStatus = async (trainNo: string) => {
  const queryParams = new URLSearchParams({
    trainNo: trainNo,
  });

  const response = await fetch(`${liveTrainStatusURL}?${queryParams}`, {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": `${apiKey}`,
      "X-RapidAPI-Host": "irctc1.p.rapidapi.com",
    },
  });

  if (response.ok) {
    const data = await response.json();
    return data;
  } else {
    console.error("Error fetching data:", response.status, response.statusText);
  }
};
