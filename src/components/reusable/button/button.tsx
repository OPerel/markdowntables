import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'm-button',
  styleUrl: 'button.css',
  shadow: true
})
export class Button {
  @Prop() click: () => void;
  @Prop() text: string;
  @Prop() styles: any;

  render() {
    return (
    <button onClick={() => this.click()} style={{ ...this.styles }}>{this.text}</button>
    );
  }

}
