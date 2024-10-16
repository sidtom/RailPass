import React, { useState } from 'react';
import { AgGridReact } from 'ag-grid-react'; // React Data Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the Data Grid
import { stationsKerala } from '../../../data/stations';
import { Stations } from '../../../interfaces/stations';
import Title from '../../reusableComponents/titleComponent';
import { useNavigate } from 'react-router-dom';


const Home = () => {
  const navigate = useNavigate();
  // Row Data: The data to be displayed.
  const [rowData] = useState<Stations[]>(stationsKerala);

  // Column Definitions: Defines the columns to be displayed.
  const [colDefs] = useState<any>([
    { field: "Name", filter: true, flex: 5 ,floatingFilter: true ,
      cellRenderer: (params:any) => {
      return (
          <span
              style={{ cursor: 'pointer', color: 'blue' }}
              onClick={() => handleCellClick(params.value)}
          >
              {params.value}
          </span>
      );
  }},
    { field: "Code", filter: true,flex :5,floatingFilter: true },
  ]);

  const handleCellClick = (id:any) => {
    navigate(`/timing/${id}`);
};

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
      />
    </div>
    </>

  );
  }
  
  export default Home;