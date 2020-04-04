import { Component, h, State, Listen } from '@stencil/core';

import { Table } from '../../types';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: true
})
export class AppRoot {
  @State() table: Table;

  constructor() {
    this.table = {
      columns: 3,
      rows: 5,
      tableHeaders: [],
      currentTable: []
    };
    console.log('Init empty table: ', this.table);
  }

  @Listen('editTable')
  setTableContent(e: CustomEvent): void {
    console.log('table edited: ', e.detail);
    this.table = { ...this.table, ...e.detail };
  }

  @Listen('setMatrix')
  setTableMatrix(e: CustomEvent) {
    console.log('set matrix: ', e.detail);
    this.table = {  ...this.table, ...e.detail };
  }

  render() {
    // console.log('root table: ', this.table)
    return ([
      <header>
        <h1>Markdown Table Generator</h1>
      </header>,

      <main class="container">
        <html-table-generator table={this.table} />
      </main>
    ]);
  }
}
