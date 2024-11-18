import { stationsKerala } from "../data/stations";
import { Train, TrainData } from "../interfaces/trainData";

export function getAdjacentStationCodes(stationCode:string) {
    const index = stationsKerala.findIndex(station => station.Code === stationCode);
    
    if (index === -1) {
        return { fromStationCode: null, toStationCode: null }; // Station not found
    }
    
    // Get previous and next station codes if they exist
    const fromStationCode = index > 0 ? stationsKerala[index - 1].Code : null;
    const toStationCode = index < stationsKerala.length - 1 ? stationsKerala[index + 1].Code : null;

    return { fromStationCode, toStationCode };
}

export const formattedDate =()=>  {
  const today = new Date();
  return `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
}

export function extractTrainData (trainData: TrainData[]) {
    const extractedTrainData = trainData.map(
      (train: TrainData) => ({
        train_number: train.train_number,
        train_name: train.train_name,
        from_station: train.from_station_name,
        to_station: train.to_station_name,
        departure_time: train.from_sta,
        arrival_time: train.to_sta,
      })
    );
    return extractedTrainData;
  };

  export function removeDuplicateTrains(trains: Train[]) {
    const uniqueTrains: Train[] = [];
    const seenTrains = new Set();
    trains.forEach(train => {
        // Create a unique key based on train number, arrival, and departure times
        const trainKey = `${train.trainNo}-${train.arrivalTime}-${train.departureTime}`;
        
        // Check if the trainKey is already seen; if not, add to uniqueTrains and mark it as seen
        if (!seenTrains.has(trainKey)) {
            uniqueTrains.push(train);
            seenTrains.add(trainKey);
        }
    });

    return uniqueTrains;
}

export const filterTrainsByArrivalTime = (trains:Train[]) => {
  const currentTime = new Date();
  return trains
    .filter((train: Train) => {
      const [hours, minutes] = train.arrivalTime.split(':').map(Number);
      const arrivalDate = new Date();
      arrivalDate.setHours(hours, minutes, 0, 0); // Set time based on arrivalTime

      return arrivalDate > currentTime;
    })
    .sort((a, b) => {
      const [aHours, aMinutes] = a.arrivalTime.split(':').map(Number);
      const [bHours, bMinutes] = b.arrivalTime.split(':').map(Number);

      // Compare based on hours and minutes
      if (aHours !== bHours) return aHours - bHours;
      return aMinutes - bMinutes;
    });
};