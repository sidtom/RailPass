import React, { useEffect, useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Grid } from "../../reusableComponents/agGrid";
import {
  filterTrainsByArrivalTime,
  removeDuplicateTrains,
} from "../../../services/utils";
import { ColDef } from "ag-grid-community";
import { getTrainsByStation } from "../../../services/requests";
import { Loader } from "../../reusableComponents/loader";
import { appContext } from "../../../context/context";
import Title from "../../reusableComponents/titleComponent";
import Divider from "@mui/material/Divider";

const Timing = () => {
  const { stationCode, setStationCode, timingData, setTimingData } =
    useContext(appContext);
  const [loading, setLoading] = useState(true);
  const { stationName } = useParams();
  const navigate = useNavigate();

  const onRowClicked = async (e: any) => {
    navigate(`/liveStatus/${e.data.trainNo}`);
  };

  useEffect(() => {
    const getTimings = async () => {
      setLoading(true); // Set loading before API call
      if (stationName) {
        let trainsByStationData = await getTrainsByStation(stationName);
        if (trainsByStationData.status === true) {
          let transformedData = await removeDuplicateTrains(
            trainsByStationData.data.passing
          );
          const filteredTrains = await filterTrainsByArrivalTime(
            transformedData
          );
          setTimingData(filteredTrains); // Update context data
          setStationCode(stationName); // Update context stationCode
        }
      }
      setLoading(false); // Set loading after API call
    };

    // Only fetch timings if the stationCode has changed or timingData is empty
    if (!timingData.length || stationCode !== stationName) {
      getTimings();
    } else {
      setLoading(false); // No need to fetch; stop loading
    }
  }, [stationCode, stationName, timingData, setTimingData, setStationCode]);

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
    <>
      <Title title="Trains which might be near the selected station" />
      <Divider />
      <div
        className="ag-theme-quartz"
        style={{ height: "100%", width: "100%", textAlign: "center" }}
      >
        {!loading ? ( // Check if data exists before rendering Grid
          <Grid
            rowData={timingData}
            pagination={false}
            columnDefs={colDefs}
            onRowClicked={onRowClicked}
          />
        ) : (
          <Loader /> // Fallback for loading state
        )}
      </div>
    </>
  );
};

export default Timing;
