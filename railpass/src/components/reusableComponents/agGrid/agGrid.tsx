import { AgGridReact } from "ag-grid-react"; // React Data Grid Component

const Grid = (props:any)=> {
  return (
    <AgGridReact
          rowData={props.rowData}
          pagination={props.pagination}
          paginationPageSize={props.paginationPageSize}
          columnDefs={props.columnDefs}
          onRowClicked={props.onRowClicked}
        />
  )
}

export default Grid;