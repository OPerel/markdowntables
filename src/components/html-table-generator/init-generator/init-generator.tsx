/**
 * TODOs:
 * entering numbers directly in init inputs doesnt work 
 */

import { Component, h, Prop, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'init-generator',
  styleUrl: 'init-generator.css',
  shadow: true
})
export class Generator {
  @Prop({ mutable: true }) matrix: { columns: number, rows: number };

  @Event() setMatrix: EventEmitter;

  setColumns(e: Event): void {
    const value = Number((e.target as HTMLInputElement).value);
    if (this.validateMatrix(value)) {
      this.matrix.columns = value;
      const { columns, rows } = this.matrix;
      this.setMatrix.emit({ columns, rows });
    }
  }

  setRows(e: Event): void {
    const value = Number((e.target as HTMLInputElement).value);
    if (this.validateMatrix(value)) {
      this.matrix.rows = value;
      const { columns, rows } = this.matrix;
      this.setMatrix.emit({ columns, rows });
    }
  }

  validateMatrix(value: number): boolean | void {
    if (value < 1 || value === undefined) {
      alert('Table matrix must consist of positive numbers only! Please try again');
      throw new Error('Invalid input');
    }
    return true;
  }

  render() {
    const { columns, rows } = this.matrix;
    return (
      <form>
        <label>
          # of columns: &nbsp;
          <input type="number" value={columns} onInput={(e) => this.setColumns(e)} />
        </label>

        <label>
          # of rows: &nbsp;
          <input type="number" value={rows} onInput={(e) => this.setRows(e)} />
        </label>
      </form>
    );
  }

}
