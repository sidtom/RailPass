import React, { useState } from "react";
import { Grid } from "../../reusableComponents/agGrid";
import { ColDef } from "ag-grid-community";
import { useParams } from "react-router-dom";

const LiveStatus = () => {
  const {trainNo} = useParams();
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
      <Grid rowData={{}} pagination={false} columnDefs={colDefs} />
    </div>
  );
}

export default LiveStatus;