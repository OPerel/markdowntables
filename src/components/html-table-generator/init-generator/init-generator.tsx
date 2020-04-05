import { Component, h, Prop, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'init-generator',
  styleUrl: 'init-generator.css',
  shadow: true
})
export class Generator {
  @Prop({ mutable: true }) matrix: { columns: number, rows: number };

  @Event() setMatrix: EventEmitter;


  addColumn(): void {
    this.matrix.columns++;
    const { columns, rows } = this.matrix;
    this.setMatrix.emit({ columns, rows });
  }

  deleteColumn(): void {
    try {
      if (this.validateMatrix(this.matrix.columns - 1)) {
        this.matrix.columns--;
        const { columns, rows } = this.matrix;
        this.setMatrix.emit({ columns, rows });
      }
    } catch (err) {
      console.warn('Cannot delete column: ', err);
    }
  }

  addRows(): void {
    this.matrix.rows++;
    const { columns, rows } = this.matrix;
    this.setMatrix.emit({ columns, rows });
  }

  deleteRows(): void {
    try {
      if (this.validateMatrix(this.matrix.rows - 1)) {
        this.matrix.rows--;
        const { columns, rows } = this.matrix;
        this.setMatrix.emit({ columns, rows });
      }
    } catch (err) {
      console.warn('Cannot delete row: ', err);
    }
  }

  validateMatrix(value: number): boolean | void {
    if (value < 1) {
      alert('Table matrix must consist of positive numbers only.');
      throw Error(`Invalid input: ${value}`);
    }
    return true;
  }

  render() {
    const btnStyles = { fontSize: '1.5rem', padding: '0% 2%' };
    return (
      <form>
        <label>
          <span># of columns: &nbsp;</span>
          <m-button btnClick={() => this.addColumn()} text="+" styles={btnStyles} />
          &nbsp;
          <m-button btnClick={() => this.deleteColumn()} text="&minus;" styles={btnStyles} />
        </label>

        <label>
          # of rows: &nbsp;
          <m-button btnClick={() => this.addRows()} text="+" styles={btnStyles} />
          &nbsp;
          <m-button btnClick={() => this.deleteRows()} text="&minus;" styles={btnStyles} />
        </label>
      </form>
    );
  }

}
