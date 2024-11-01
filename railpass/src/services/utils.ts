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