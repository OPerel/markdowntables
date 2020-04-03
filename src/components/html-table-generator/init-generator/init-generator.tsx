import { Component, h, State, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'init-generator',
  styleUrl: 'init-generator.css',
  shadow: true
})
export class Generator {
  @State() columns: number;
  @State() rows: number;

  @Event() setMatrix: EventEmitter;

  setColumns(e: Event) {
    this.columns = Number((e.target as HTMLInputElement).value)
  }

  setRows(e: Event) {
    this.rows = Number((e.target as HTMLInputElement).value)
  }

  onSubmit(): void {
    // e.preventDefault();
    const { columns, rows } = this;
    if (columns < 1 || rows < 1 || columns === undefined || rows === undefined) {
      alert('Table matrix must consist of positive numbers only! Please try again');
      throw new Error('Invalid input');
    }
    this.setMatrix.emit({ columns, rows })
  }

  render() {
    return (
      <form>
        <label>
          Eneter # of columns:
          <input type="number" value={this.columns} onInput={(e) => this.setColumns(e)} required />
        </label>

        <label>
          Enetr # of rows:
          <input type="number" value={this.rows} onInput={(e) => this.setRows(e)} required />
        </label>
        
        <m-button click={() => this.onSubmit()} text="Submit" />
        {/* <input type="submit" value="Submit" onClick={(e: Event) => this.onSubmit(e)} /> */}
      </form>
    );
  }

}
