import { Component, h, Prop } from '@stencil/core';

import { Table } from '../../types';

@Component({
  tag: 'html-table-generator',
  styleUrl: 'html-table-generator.css',
  shadow: true
})
export class TableGenerator {
  @Prop() table: Table;

  constructor() {}

  render() {
    // console.log('gen table: ', this.table)
    const { columns, rows } = this.table;
    return ([
      <init-generator matrix={{ columns, rows }} />,

      <div class="editor">
        
        <div class="editor-header">
          <h3>Edit your table&nbsp;</h3>
          <span>&nbsp;Columns: {columns}, Rows: {rows}</span>
        </div>

        <table-form table={this.table} />
      
      </div>
    ]);
  }

}
