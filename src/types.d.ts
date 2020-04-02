export interface Table {
  matrix: {
    columns: number;
    rows: number
  };
  tableHeaders: string[];
  currentTable: string[][];
}