import { Component, h, Prop, State, Event, EventEmitter } from '@stencil/core';

import { Table } from '../../../types';

@Component({
  tag: 'table-form',
  styleUrl: 'table-form.css',
  shadow: true
})
export class Form {
  @State() _tableHeaders: string[];
  @State() _currentTable: string[][];
  
  @Prop() _matrix?: { columns: number, rows: number };
  @Prop() table?: Table;

  @Event() editTable: EventEmitter;

  constructor() {
    if (this.table) {
      console.log('editing existing table: ', this.table);
      this._tableHeaders = this.table.tableHeaders;
      this._currentTable = this.table.currentTable;
      this._matrix = this.table.matrix;
    } else {
      console.log('starting new table');
      this._tableHeaders = this.tableHeaderSkeleton();
      this._currentTable = this.tableBodySkeleton();
    }
  }

  tableHeaderSkeleton(): string[] {
    return Array.from(Array(this._matrix.columns)).map(_ => '');
  }

  tableBodySkeleton(): string[][] {
    return Array.from(Array(this._matrix.rows)).map(_ => {
      return Array.from(Array(this._matrix.columns)).map(_ => '');
    });
  }

  handleHeadersInput(e: Event, thIndex: number): void  {
    this._tableHeaders[thIndex] = (e.target as HTMLInputElement).value;
  }

  handleBodyInput(e: Event, rowIndex: number, colIndex: number): void {
    this._currentTable[rowIndex][colIndex] = (e.target as HTMLInputElement).value;
  }

  submitTable(): void {
    this.editTable.emit({
      matrix: this._matrix,
      tableHeaders: this._tableHeaders,
      currentTable: this._currentTable
    })
  }

  render() {
    return ([
      <table>

        <thead>
          <th>#</th>
          {this._tableHeaders.map((header: string, thIndex: number) => {
            return (
              <th>
                <input
                  type="text"
                  value={header}
                  onInput={e => this.handleHeadersInput(e, thIndex)}
                />
              </th>
            )
          })}
        </thead>

        <tbody>
          {this._currentTable.map((row: string[], rowIndex: number) => {
            return (
              <tr>
                <td>{rowIndex}</td>
                {row.map((tableCell: string, colIndex: number) => {
                  return (
                    <td>
                      <input
                        type="text"
                        value={tableCell}
                        onInput={e => this.handleBodyInput(e, rowIndex, colIndex)}
                      />
                    </td>
                  )
                })}
              </tr>
            )
          })}
        </tbody>

      </table>,
      <m-button click={() => this.submitTable()} text="Submit Table!" />
    ]);
  }

}
