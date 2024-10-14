import React, { useMemo, useState } from 'react';
import { AgGridReact } from 'ag-grid-react'; // React Data Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the Data Grid
import { stationsKerala } from '../../data/stations';
import { Stations } from '../interfaces/stations';



const Home = () => {

  // Row Data: The data to be displayed.
  const [rowData] = useState<Stations[]>(stationsKerala);

  // Column Definitions: Defines the columns to be displayed.
  const [colDefs] = useState<any>([
    { field: "Name", filter: true, flex: 5 ,floatingFilter: true},
    { field: "Code", filter: true,flex :5,floatingFilter: true },
  ]);
  
  const rowSelection = useMemo<any>(() => { 
    return {
        mode: 'singleRow',
      };
  }, []);

  const pagination = true;
const paginationPageSize = 20;
  
  return (
    <div
      className="ag-theme-quartz" // applying the Data Grid theme
      style={{ height: 900, width: '100%',textAlign:"center"}} // the Data Grid will fill the size of the parent container
    >
      <AgGridReact
        rowData={rowData}
        pagination={pagination}
        paginationPageSize={paginationPageSize}
        columnDefs={colDefs}
        rowSelection={rowSelection}
      />
    </div>
  );
  }
  
  export default Home;