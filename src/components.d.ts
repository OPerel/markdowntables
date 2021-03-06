/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';
import {
  Table,
} from './types';

export namespace Components {
  interface AppRoot {}
  interface HtmlTableGenerator {
    'table': Table;
  }
  interface InitGenerator {
    'matrix': { columns: number, rows: number };
  }
  interface MButton {
    'btnClick': () => void;
    'styles': any;
    'text': string;
  }
  interface MdPreview {
    'md': () => void;
  }
  interface TableForm {
    'table': Table;
  }
}

declare global {


  interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {}
  var HTMLAppRootElement: {
    prototype: HTMLAppRootElement;
    new (): HTMLAppRootElement;
  };

  interface HTMLHtmlTableGeneratorElement extends Components.HtmlTableGenerator, HTMLStencilElement {}
  var HTMLHtmlTableGeneratorElement: {
    prototype: HTMLHtmlTableGeneratorElement;
    new (): HTMLHtmlTableGeneratorElement;
  };

  interface HTMLInitGeneratorElement extends Components.InitGenerator, HTMLStencilElement {}
  var HTMLInitGeneratorElement: {
    prototype: HTMLInitGeneratorElement;
    new (): HTMLInitGeneratorElement;
  };

  interface HTMLMButtonElement extends Components.MButton, HTMLStencilElement {}
  var HTMLMButtonElement: {
    prototype: HTMLMButtonElement;
    new (): HTMLMButtonElement;
  };

  interface HTMLMdPreviewElement extends Components.MdPreview, HTMLStencilElement {}
  var HTMLMdPreviewElement: {
    prototype: HTMLMdPreviewElement;
    new (): HTMLMdPreviewElement;
  };

  interface HTMLTableFormElement extends Components.TableForm, HTMLStencilElement {}
  var HTMLTableFormElement: {
    prototype: HTMLTableFormElement;
    new (): HTMLTableFormElement;
  };
  interface HTMLElementTagNameMap {
    'app-root': HTMLAppRootElement;
    'html-table-generator': HTMLHtmlTableGeneratorElement;
    'init-generator': HTMLInitGeneratorElement;
    'm-button': HTMLMButtonElement;
    'md-preview': HTMLMdPreviewElement;
    'table-form': HTMLTableFormElement;
  }
}

declare namespace LocalJSX {
  interface AppRoot {}
  interface HtmlTableGenerator {
    'table'?: Table;
  }
  interface InitGenerator {
    'matrix'?: { columns: number, rows: number };
    'onSetMatrix'?: (event: CustomEvent<any>) => void;
  }
  interface MButton {
    'btnClick'?: () => void;
    'styles'?: any;
    'text'?: string;
  }
  interface MdPreview {
    'md'?: () => void;
  }
  interface TableForm {
    'onEditTable'?: (event: CustomEvent<any>) => void;
    'table'?: Table;
  }

  interface IntrinsicElements {
    'app-root': AppRoot;
    'html-table-generator': HtmlTableGenerator;
    'init-generator': InitGenerator;
    'm-button': MButton;
    'md-preview': MdPreview;
    'table-form': TableForm;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'app-root': LocalJSX.AppRoot & JSXBase.HTMLAttributes<HTMLAppRootElement>;
      'html-table-generator': LocalJSX.HtmlTableGenerator & JSXBase.HTMLAttributes<HTMLHtmlTableGeneratorElement>;
      'init-generator': LocalJSX.InitGenerator & JSXBase.HTMLAttributes<HTMLInitGeneratorElement>;
      'm-button': LocalJSX.MButton & JSXBase.HTMLAttributes<HTMLMButtonElement>;
      'md-preview': LocalJSX.MdPreview & JSXBase.HTMLAttributes<HTMLMdPreviewElement>;
      'table-form': LocalJSX.TableForm & JSXBase.HTMLAttributes<HTMLTableFormElement>;
    }
  }
}


