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
  @Prop() close: () => void;

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

  handleChange() {}

  render() {
    // console.log('gen table: ', this.table)
    // console.log('gen has matrix: ', this.hasMatrix)
    const { columns, rows } = this.table.matrix;
    return (
      <div class="editor">
        
        <h2>Edit your table&nbsp;</h2>
        {this.hasMatrix && <span>&nbsp;Columns: {columns}, Rows: {rows}</span>}
        
        {!this.hasMatrix && <init-generator />}
        
        {this.hasMatrix &&
          <table-form
            _matrix={this.table.matrix}
            table={this.hasTable ? this.table : null}
          />
        }
        
        <button onClick={() => this.close()}>Close</button>
      
      </div>
    );
  }

}
