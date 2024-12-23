export interface GridProps {
    rowData: Record<string, any>[]; // Array of objects representing rows
    pagination: boolean;
    paginationPageSize?: number;
    columnDefs: Array<any>; // Specify more detailed column definition type if known
    onRowClicked?: (event: any) => void; // Specify a more precise event type if available
  }