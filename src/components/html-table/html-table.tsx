import { Component, h, Prop } from '@stencil/core';

import { Table } from '../../types';

@Component({
  tag: 'html-table',
  styleUrl: 'html-table.css',
  shadow: true
})
export class HtmlTable {
  @Prop() table: Table;

  generateMarkdown() {}

  render() {
    const { tableHeaders, currentTable } = this.table;
    return ([
      <div class="container">
        <div class="table-header">
          <h3>Your HTML table</h3>
          <m-button click={() => this.generateMarkdown()} text="Generate Markdown" />
        </div>
        
        <table>
          <thead>
            {tableHeaders.map((header: string) => <th><b>{header}</b></th>)}
          </thead>
          <tbody>
            {currentTable.map((row: string[]) => {
              return (
                <tr>
                  {row.map((cell: string) => <td>{cell}</td>)}
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    ]);
  }

}
