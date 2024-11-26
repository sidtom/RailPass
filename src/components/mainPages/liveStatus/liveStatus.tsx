import React, { useEffect, useState } from "react";
import { Grid } from "../../reusableComponents/agGrid";
import { ColDef } from "ag-grid-community";
import { useParams } from "react-router-dom";
import { getLiveStatus } from "../../../services/requests";

const LiveStatus = () => {
  const { trainNo } = useParams();
  const [liveStatus, setLiveStatus] = useState<any>([]); // Initialize as an empty array
  const [rowData, setRowData] = useState<any[]>([]); // State for row data array
  const getLiveStatusHelper = async () => {
    if (trainNo) {
      const data = await getLiveStatus(trainNo); // Await API call
      return data || []; // Ensure fallback to an empty array if no data
    }
    return [];
  };

  useEffect(() => {
    const fetchLiveStatus = async () => {
      const response = await getLiveStatusHelper();
      setLiveStatus(response); // Set resolved data

      // Transform data to an array for the grid

      if (response.message === "Success") {
        setRowData([
          {
            trainNo: response.data.train_number,
            trainName: response.data.train_name,
            delay: response.data.delay,
          },
        ]);
      } else {
        setRowData([]); // Set empty array if no success
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
      field: "delay",
      headerName: "Delay",
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
      {liveStatus.message === "Success" ? ( // Check if data exists before rendering Grid
        <Grid rowData={rowData} pagination={false} columnDefs={colDefs} />
      ) : (
        <p>Loading data...</p> // Fallback for loading state
      )}
    </div>
  );
};

export default LiveStatus;
