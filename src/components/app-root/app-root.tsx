import { Component, h, State, Listen } from '@stencil/core';

import { Table } from '../../types';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: true
})
export class AppRoot {
  @State() table: Table;
  @State() showTableGenerator: boolean;

  @Listen('editTable')
  setTableContent(e: CustomEvent): void {
    console.log('table edited: ', e.detail);
    this.table = e.detail;
    this.toggleTableGenerator(false);
  }

  constructor() {
    this.showTableGenerator = false;
  }

  toggleTableGenerator = (set: boolean): void => {
    this.showTableGenerator = set;
  }

  render() {
    return (
      <div>
        <header>
          <h1>Table Generator</h1>
        </header>

        <main>
          <h2>Create a table:</h2>
          <button onClick={() => this.toggleTableGenerator(true)}>
            {this.table ? 'Edit table' : 'Click to start a table'}
          </button>
          {
            this.showTableGenerator
              ? <html-table-generator
                  close={() => this.toggleTableGenerator(false)}
                  table={this.table}
                />
              : null  
          }
        </main>
      </div>
    );
  }
}
