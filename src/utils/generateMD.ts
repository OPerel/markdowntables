import { Table } from '../types';

export class MdStringGenerator {
  private table: Table;

  constructor(table: Table) {
    this.table = table; 
  }

  public getMdString(): string {
    const { tableHeaders, currentTable } = this.table;

  // init string
  let mdString = '';

  // add headers row
  tableHeaders.forEach((header: string, colIdx: number) => {
    mdString += `${this.formatedCell(header, colIdx)}`;
  });

  mdString += '|\n';

  // hyphens for headers
  tableHeaders.forEach((_, colIdx: number) => {
    const l = this.getLongestValInCol(colIdx);
    mdString += l > 0 ? `| ${Array.from(Array(l)).map(_ => '-').join('')} ` : `| --- `;
  });

  mdString += '|\n';

  // iterate over rows
  currentTable.forEach((row: string[]) => {

    // iterate over cols in row
    row.forEach((col: string, colIdx: number) => {
      mdString += `${this.formatedCell(col, colIdx)}`;
    });

    // end each row with a pipe and a new line
    mdString += '|\n';
  });

  return mdString;
  }

  private formatedCell = (value: string, colIndex: number): string => {
    const colWidth = this.getLongestValInCol(colIndex);
    const marginLength = colWidth - value.length;

    if (colWidth && value.length) {
      const valMargin = Array.from(Array(Math.floor(marginLength / 2))).map(_ => ' ').join('');
      if (marginLength % 2 !== 0) {
        return `| ${valMargin + value + valMargin}  `;
      }
      return `| ${valMargin + value + valMargin} `;
    }

    if (colWidth) {
      return `| ${Array.from(Array(colWidth)).map(_ => ' ').join('')} `;
    }

    return '|     ';
  }

  private getLongestValInCol = (colIndex: number): number => {
    let longest: number = this.table.tableHeaders[colIndex].length;

    this.table.currentTable.forEach((row: string[]) => {
      const l = row[colIndex].length;
      longest = l > longest ? l : longest
    });
    return longest;
  }

}

