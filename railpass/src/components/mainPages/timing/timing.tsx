import React, { useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { extractTrainData } from "../../../services/utils";
import { Grid } from "../../reusableComponents/agGrid";

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
      <Grid rowData={rowData} pagination={false} columnDefs={colDefs} />
    </div>
  );
};
export default Timing;
