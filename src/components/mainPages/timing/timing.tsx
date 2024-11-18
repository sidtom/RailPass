import React, { useState } from "react";
import { useParams, useLocation } from "react-router-dom";
// import { extractTrainData } from "../../../services/utils";
import { Grid } from "../../reusableComponents/agGrid";
import { filterTrainsByArrivalTime } from "../../../services/utils";
import { ColDef } from "ag-grid-community";

const Timing = () => {
  // const { stationName } = useParams();

  const location = useLocation();
  const trainData = location.state?.data;
  const filteredTrains = filterTrainsByArrivalTime(trainData);
  const [colDefs] = useState<ColDef[]>([
    {
      field: "trainNo",
      headerName: "Train Number",
      filter: true,
      flex: 2,
      floatingFilter: true,
    },
    {
      field: "trainName",
      headerName: "Train Name",
      filter: true,
      flex: 4,
      floatingFilter: true,
    },
    {
      field: "arrivalTime",
      headerName: "Arrival Time",
      filter: true,
      flex: 3,
      floatingFilter: true,
    },
    {
      field: "departureTime",
      headerName: "Departure Time",
      filter: true,
      flex: 3,
      floatingFilter: true,
    },
  ]);
  return (
    <div
      className="ag-theme-quartz"
      style={{ height: "100%", width: "100%", textAlign: "center" }}
    >
      <Grid rowData={filteredTrains} pagination={false} columnDefs={colDefs} />
    </div>
  );
};
export default Timing;
