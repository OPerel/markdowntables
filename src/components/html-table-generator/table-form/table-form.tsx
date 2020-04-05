import { Component, h, Prop, State, Event, EventEmitter, Watch, Element } from '@stencil/core';

import { Table } from '../../../types';

@Component({
  tag: 'table-form',
  styleUrl: 'table-form.css',
  shadow: true
})
export class Form {
  @Element() form: HTMLElement;

  @State() _tableHeaders: string[];
  @State() _currentTable: string[][];
  @State() _matrix: { columns: number, rows: number };
  
  @Prop() table: Table;

  @Event() editTable: EventEmitter;

  constructor() {
    this._matrix = { columns: this.table.columns, rows: this.table.rows };
    this._tableHeaders = this.tableHeaderSkeleton();
    this._currentTable = this.tableBodySkeleton();
  }

  @Watch('table')
  changeMatrix(newValue: Table, oldValue: Table) {
    this._matrix = { columns: newValue.columns, rows: newValue.rows };
    if (newValue.columns !== oldValue.columns) {
      if (newValue.columns > oldValue.columns) {
        this._tableHeaders = [ ...this._tableHeaders, '' ]
        this._currentTable = this._currentTable.map((row: string[]): string[] => {
          return [ ...row, '' ]
        });
      }
      else if (newValue.columns < oldValue.columns) {
        this._tableHeaders = this._tableHeaders.slice(0, -1);
        this._currentTable = this._currentTable.map((row: string[]): string[] => {
          return row.slice(0, -1);
        });
      }
    }
    else if (newValue.rows !== oldValue.rows) {
      if (newValue.rows > oldValue.rows) {
        this._currentTable = [ ...this._currentTable, Array.from(Array(this._matrix.columns)).map(_ => '') ];
      }
      else if (newValue.rows < oldValue.rows) {
        this._currentTable = this._currentTable.slice(0, -1);
      }
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
      columns: this._matrix.columns,
      rows: this._matrix.rows,
      tableHeaders: this._tableHeaders,
      currentTable: this._currentTable
    })
  }

  scrollForm(): void {
    console.log('toggle')
    this.form.shadowRoot.querySelector('table').classList.toggle('scroll-form')
  }

  render() {
    return ([
      <table>
        <thead>
          <th>Headers</th>
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
                <td>Row #{rowIndex + 1}</td>
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

      <m-button btnClick={() => this.submitTable()} text="Generate Markdown" />,

      <p>
        <input type="checkbox" onClick={() => this.scrollForm()} />
        Scroll form horizontally
      </p>
    ]);
  }

}
