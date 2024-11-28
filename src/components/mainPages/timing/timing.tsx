import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Grid } from "../../reusableComponents/agGrid";
import {
  filterTrainsByArrivalTime,
  removeDuplicateTrains,
} from "../../../services/utils";
import { ColDef } from "ag-grid-community";
import { getTrainsByStation } from "../../../services/requests";
import { Loader } from "../../reusableComponents/loader";

const Timing = () => {
  const { stationName } = useParams();
  const [rowData, setRowData] = useState<any[]>([]); // State for row data array
  const [responseMessage, setResponseMessage] = useState(false);
  const navigate = useNavigate();
  const onRowClicked = async (e: any) => {
    navigate(`/liveStatus/${e.data.trainNo}`);
  };

  useEffect(() => {
    const getTimings = async () => {
      if (stationName) {
        let trainsByStationData = await getTrainsByStation(stationName);
        if (trainsByStationData.status === true) {
          let transformedData = await removeDuplicateTrains(
            trainsByStationData.data.passing
          );
          const filteredTrains = await filterTrainsByArrivalTime(transformedData);
          setRowData(filteredTrains);
          setResponseMessage(trainsByStationData.status);
        }
      }
    };
    getTimings();
  }, [stationName]);

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
      {responseMessage === true ? ( // Check if data exists before rendering Grid
        <Grid
          rowData={rowData}
          pagination={false}
          columnDefs={colDefs}
          onRowClicked={onRowClicked}
        />
      ) : (
        <Loader /> // Fallback for loading state
      )}
    </div>
  );
};
export default Timing;
