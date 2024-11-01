import { trainsBetweenStationsURL, apiKey } from "../config/url";
export const getTrainsBetweenStations = async (fromStationCode:any,toStationCode:any ) =>{
    const queryParams = new URLSearchParams({
      fromStationCode: fromStationCode,
      toStationCode: toStationCode,
      dateOfJourney: '2024-11-4'
    });
  
    const response = await fetch(`${trainsBetweenStationsURL}?${queryParams}`, {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': `${apiKey}`,
        'X-RapidAPI-Host': 'irctc1.p.rapidapi.com'
      }
    });
  
    if (response.ok) {
      const data = await response.json();
      console.log(data);
    } else {
      console.error('Error fetching data:', response.status, response.statusText);
    }
  }