import { stationsKerala } from "../data/stations";

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

export function extractTrainData (trainData: any) {
    const extractedTrainData = trainData.data.map(
      (train: {
        from_sta: any;
        to_sta: any;
        train_number: any;
        train_name: any;
        from_station_name: any;
        to_station_name: any;
      }) => ({
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

  export function removeDuplicateTrains(trains: any[]) {
    const uniqueTrains: any[] = [];
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