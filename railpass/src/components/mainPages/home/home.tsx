import React, { useState } from 'react';
import { AgGridReact } from 'ag-grid-react'; // React Data Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the Data Grid
import { stationsKerala } from '../../../data/stations';
import { Stations } from '../../../interfaces/stations';
import Title from '../../reusableComponents/titleComponent';
import { useNavigate } from 'react-router-dom';
import './home.css';
import { getTrainsBetweenStations } from '../../../services/requests';
import { getAdjacentStationCodes } from '../../../services/utils';

const Home = () => {
  const navigate = useNavigate();
  // Row Data: The data to be displayed.
  const [rowData] = useState<Stations[]>(stationsKerala);
  const [trainData, setTrainData] = useState({});
  // Column Definitions: Defines the columns to be displayed.
  const [colDefs] = useState<any>([
    { field: "Name", filter: true, flex: 5 ,floatingFilter: true},
    { field: "Code", filter: true,flex :5,floatingFilter: true },
  ]);

  const handleCellClick = (id:any) => {
    navigate(`/timing/${id}`);
};

const onRowClicked =(e:any)=>{
handleCellClick(e.data.Code);
const {fromStationCode, toStationCode} = getAdjacentStationCodes(e.data.Code);
getTrainsBetweenStations(fromStationCode,toStationCode);
}
  const pagination = true;
const paginationPageSize = 20;
  
  return (
    <>
    <Title title='Select the station nearest to your crossing' />
    <div
      className="ag-theme-quartz"
      style={{ height: '100%', width: '100%',textAlign:"center"}}
    >
      <AgGridReact
        rowData={rowData}
        pagination={pagination}
        paginationPageSize={paginationPageSize}
        columnDefs={colDefs}
        onRowClicked={onRowClicked}
      />
    </div>
    </>

  );
  }
  
  export default Home;