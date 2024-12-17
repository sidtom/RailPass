import React, { useEffect, useState } from "react";
import { Grid } from "../../reusableComponents/agGrid";
import { ColDef } from "ag-grid-community";
import { useParams } from "react-router-dom";
import { getLiveStatus } from "../../../services/requests";
import { Loader } from "../../reusableComponents/loader";
import Title from "../../reusableComponents/titleComponent";
import Divider from "@mui/material/Divider";

const LiveStatus = () => {
  const { trainNo } = useParams();
  const [rowData, setRowData] = useState<any[]>([]); // State for row data array
  const [responseMessage, setResponseMessage] = useState("Pending");
  useEffect(() => {
    const fetchLiveStatus = async () => {
      if (trainNo) {
        const response = await getLiveStatus(trainNo);
        // Transform data to an array for the grid

        if (response.message === "Success") {
          setRowData([
            {
              trainNo: response.data.train_number,
              trainName: response.data.train_name,
              runDays: response.data.run_days,
              delay: response.data.delay,
            },
          ]);
        } else {
          setRowData([]); // Set empty array if no success
        }
        setResponseMessage(response.message);
      }
    };
    fetchLiveStatus(); // Fetch data on component mount
  }, [trainNo]); // Re-run only if trainNo changes

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
      field: "runDays",
      headerName: "Run Days",
      filter: true,
      flex: 3,
      floatingFilter: true,
    },
    {
      field: "delay",
      headerName: "Delay",
      filter: true,
      flex: 3,
      floatingFilter: true,
    },
  ]);

  return (
    <>
      <Title title="Live status of selected train" />
      <Divider />
      <div
        className="ag-theme-quartz"
        style={{ height: "100%", width: "100%", textAlign: "center" }}
      >
        {responseMessage === "Success" ? ( // Check if data exists before rendering Grid
          <Grid rowData={rowData} pagination={false} columnDefs={colDefs} />
        ) : (
          <Loader /> // Fallback for loading state
        )}
      </div>
    </>
  );
};

export default LiveStatus;
