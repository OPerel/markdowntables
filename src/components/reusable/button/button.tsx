import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'm-button',
  styleUrl: 'button.css',
  shadow: true
})
export class Button {
  @Prop() click: () => void;
  @Prop() text: string;

  render() {
    return (
    <button onClick={() => this.click()}>{this.text}</button>
    );
  }

}
