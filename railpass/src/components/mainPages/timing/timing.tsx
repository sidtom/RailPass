import { AgGridReact } from "ag-grid-react";
import React, { useState } from "react";
import { useParams, useLocation } from "react-router-dom";

const extractTrainData = (trainData: any) => {
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

const Timing = () => {
  // const { stationName } = useParams();

  const location = useLocation();
  const trainData = location.state?.data;
  const extractedTrainData = extractTrainData(trainData);
  const [rowData] = useState(extractedTrainData);
  const [colDefs] = useState<any>([
    {
      field: "train_number",
      headerName: "Train Number",
      filter: true,
      flex: 2,
      floatingFilter: true,
    },
    {
      field: "train_name",
      headerName: "Train Name",
      filter: true,
      flex: 4,
      floatingFilter: true,
    },
    {
      field: "from_station",
      headerName: "From Station",
      filter: true,
      flex: 3,
      floatingFilter: true,
    },
    {
      field: "to_station",
      headerName: "To Station",
      filter: true,
      flex: 3,
      floatingFilter: true,
    },
    {
      field: "departure_time",
      headerName: "Departure Time",
      filter: true,
      flex: 2,
      floatingFilter: true,
    },
    {
      field: "arrival_time",
      headerName: "Arrival Time",
      filter: true,
      flex: 2,
      floatingFilter: true,
    },
  ]);
  return (
    <div
      className="ag-theme-quartz"
      style={{ height: "100%", width: "100%", textAlign: "center" }}
    >
      <AgGridReact rowData={rowData} pagination={false} columnDefs={colDefs} />
    </div>
  );
};
export default Timing;
