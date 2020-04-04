import { Table } from '../types';

export default (table: Table): string => {
  const { tableHeaders, currentTable } = table;

  // init string
  let mdString = '|';

  // add headers row
  tableHeaders.forEach((header: string) => {
    mdString += header.length ? ` ${header} |` : ` ${Array.from(Array(3)).map(_ => ' ').join('')} |`;
  });

  mdString += '\n';

  // hyphens for headers
  tableHeaders.forEach((h: string) => {
    mdString += h.length ? `| ${h.split('').map(_ => '-').join('')} ` : `| --- `;
  });

  mdString += '|\n';

  // iterate over rows
  currentTable.forEach((row: string[]) => {

    // iterate over cols in row
    row.forEach((col: string, colIdx: number) => {
      mdString += col.length ? `| ${col} ` : `|     `;
    });

    // end each row with a pipe and a new line
    mdString += '|\n';
  });

  return mdString;
} 