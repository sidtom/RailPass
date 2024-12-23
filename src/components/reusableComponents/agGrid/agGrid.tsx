import { AgGridReact } from "ag-grid-react"; // React Data Grid Component
import { GridProps } from "../../../interfaces/grid";

const Grid = (props:GridProps)=> {
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