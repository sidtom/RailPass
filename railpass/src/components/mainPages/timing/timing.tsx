import React, { useState } from "react";
import { useParams, useLocation } from "react-router-dom";
// import { extractTrainData } from "../../../services/utils";
import { Grid } from "../../reusableComponents/agGrid";
import { filterTrainsByArrival } from "../../../services/utils";

const Timing = () => {
  // const { stationName } = useParams();

  const location = useLocation();
  const trainData = location.state?.data;
  const trainsWithinThreeHourse = filterTrainsByArrival(trainData);
  // const extractedTrainData = extractTrainData(trainData);
  const [rowData] = useState(trainsWithinThreeHourse);
  const [colDefs] = useState<any>([
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
      <Grid rowData={rowData} pagination={false} columnDefs={colDefs} />
    </div>
  );
};
export default Timing;
