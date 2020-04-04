import { Component, h, State, Prop, Element, Watch } from '@stencil/core';

@Component({
  tag: 'md-preview',
  styleUrl: 'md-preview.css',
  shadow: true
})
export class Preview {
  @Element() el: HTMLElement;

  @State() copied: boolean;

  @Prop() md: () => void;

  constructor() {
    this.copied = false;
  }

  @Watch('md')
  onGenerateMd() {
    this.copied = false;
  }

  copyToClipboard(): void {
    let copyText = this.el.shadowRoot.getElementById("preview");
    let textArea = document.createElement("textarea");
    textArea.value = copyText.textContent;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("Copy");
    textArea.remove();

    this.copied = true;
    console.log('copy to clipboard');
  }

  render() {
    return (
      <div class="preview">
        <p>Your Markdown string:</p>&nbsp;
        <button onClick={() => this.copyToClipboard()}>&#10002; Copy to clipboard</button>&nbsp;
        {this.copied && <span>&#10003; Copied</span>}
        <pre>
          <code id="preview">{this.md()}</code>
        </pre>
      </div>
    );
  }

}
