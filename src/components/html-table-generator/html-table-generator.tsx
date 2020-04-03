import { Component, h, State, Prop, Listen } from '@stencil/core';

import { Table } from '../../types';

@Component({
  tag: 'html-table-generator',
  styleUrl: 'html-table-generator.css',
  shadow: true
})
export class TableGenerator {
  @State() hasTable: boolean;
  @State() hasMatrix: boolean;

  @Prop({ mutable: true }) table?: Table;

  @Listen('setMatrix')
  initTable(e: CustomEvent) {
    console.log('initTable: ', e.detail);
    this.table = { matrix: e.detail, currentTable: [], tableHeaders: [] }
    this.hasMatrix = true;
  }

  constructor() {
    this.hasTable = this.table ? true : false;
    this.hasMatrix = this.table ? true : false;
    if (!this.hasTable) {
      this.table = {
        matrix: {
          columns: 0,
          rows: 0,
        },
        tableHeaders: [],
        currentTable: []
      };
    }
  }

  render() {
    // console.log('gen table: ', this.table)
    const { columns, rows } = this.table.matrix;
    return (
      <div class="editor">
        
        <div class="editor-header">
          <h3>Edit your table&nbsp;</h3>
          {this.hasMatrix && <span>&nbsp;Columns: {columns}, Rows: {rows}</span>}
        </div>
        
        {!this.hasMatrix && <init-generator />}
        
        {this.hasMatrix &&
          <table-form
            _matrix={this.table.matrix}
            table={this.hasTable ? this.table : null}
          />
        }
      
      </div>
    );
  }

}
