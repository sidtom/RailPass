import React, { useState, useMemo, useEffect } from "react";
import { AgGridReact } from "ag-grid-react"; // React Data Grid Component
import { Grid } from "../../reusableComponents/agGrid";
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the Data Grid
import { stationsKerala } from "../../../data/stations";
import { Stations } from "../../../interfaces/stations";
import Title from "../../reusableComponents/titleComponent";
import { useNavigate } from "react-router-dom";
import "./home.css";
import { getTrainsBetweenStations } from "../../../services/requests";
import { mockTrainsBetweenFunction } from "../../../services/mockApis";
import { getAdjacentStationCodes } from "../../../services/utils";

const Home = () => {
  const navigate = useNavigate();
  // Row Data: The data to be displayed.
  const [rowData] = useState<Stations[]>(stationsKerala);
  const [trainData, setTrainData] = useState<any>();
  const [selectedStation, setSelectedStation] = useState('');
  // Column Definitions: Defines the columns to be displayed.
  const [colDefs] = useState<any>([
    { field: "Name", filter: true, flex: 5, floatingFilter: true },
    { field: "Code", filter: true, flex: 5, floatingFilter: true },
  ]);

  useEffect(() => {
    if (trainData && selectedStation) {
      handleCellClick(selectedStation);
    }
  }, [trainData,selectedStation]);

  const handleCellClick = (stationCode:any) => {
    navigate(`/timing/${stationCode}`, { state: { data: trainData } });
  };

  const formattedDate = useMemo(() => {
    const today = new Date();
    return `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
  }, []); // empty dependency array, so it only runs once on mount

  const onRowClicked = async (e: any) => {
    const { fromStationCode, toStationCode } = getAdjacentStationCodes(
      e.data.Code
    );
    let trainsBetweenData = await mockTrainsBetweenFunction();
    setTrainData(trainsBetweenData);
    setSelectedStation(e.data.Code);
    // getTrainsBetweenStations(fromStationCode, toStationCode, formattedDate);
  };
  const pagination = true;
  const paginationPageSize = 20;

  return (
    <>
      <Title title="Select the station nearest to your crossing" />
      <div
        className="ag-theme-quartz"
        style={{ height: "100%", width: "100%", textAlign: "center" }}
      >
        <Grid
          rowData={rowData}
          pagination={pagination}
          paginationPageSize={paginationPageSize}
          columnDefs={colDefs}
          onRowClicked={onRowClicked}
        />
      </div>
    </>
  );
};

export default Home;
