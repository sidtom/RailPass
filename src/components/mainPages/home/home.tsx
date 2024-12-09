import React, { useState } from "react";
import { Grid } from "../../reusableComponents/agGrid";
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the Data Grid
import { ColDef } from "ag-grid-community";
import { stationsKerala } from "../../../data/stations";
import { Stations } from "../../../interfaces/stations";
import Title from "../../reusableComponents/titleComponent";
import { useNavigate } from "react-router-dom";
import "./home.css";
import Divider from '@mui/material/Divider';

const Home = () => {
  const navigate = useNavigate();
  const [rowData] = useState<Stations[]>(stationsKerala);
  const [colDefs] = useState<ColDef[]>([
    { field: "Name", filter: true, flex: 5, floatingFilter: true },
    { field: "Code", filter: true, flex: 5, floatingFilter: true },
  ]);

  const onRowClicked = (e: any) => {
    navigate(`/timing/${e.data.Code}`);
  };
  const pagination = true;
  const paginationPageSize = 20;

  return (
    <>
      <Title title="Select the station nearest to your crossing" />
      <Divider/>
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
