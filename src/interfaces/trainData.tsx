export interface TrainData {
    from_sta: string;
    to_sta: string;
    train_number: string;
    train_name: string;
    from_station_name: string;
    to_station_name: string;
}

export interface Train {
    trainNo: string;
    trainName: string;
    arrivalTime: string; // Format: "HH:mm"
    departureTime: string; // Format: "HH:mm"
    classes: any[]; // You can specify the type if known
  }