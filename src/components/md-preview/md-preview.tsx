import { Component, h, Prop, Element } from '@stencil/core';

@Component({
  tag: 'md-preview',
  styleUrl: 'md-preview.css',
  shadow: true
})
export class Preview {
  @Element() el: HTMLElement;
  @Prop() md: () => void;

  copyToClipboard(): void {
    let copyText = this.el.shadowRoot.getElementById("preview");
    let textArea = document.createElement("textarea");
    textArea.value = copyText.textContent;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("Copy");
    textArea.remove();
  }

  render() {
    return (
      <div>
        <span>Your Markdown string:</span>&nbsp;
        <button onClick={() => this.copyToClipboard()}>Copy to clipboard</button>
        <pre>
          <code id="preview">{this.md()}</code>
        </pre>
      </div>
    );
  }

}
