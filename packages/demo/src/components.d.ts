/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';
import {
  MatchResults,
} from '@stencil/router';

export namespace Components {
  interface AppHome {}
  interface AppNav {}
  interface AppProfile {
    'match': MatchResults;
  }
  interface AppRoot {}
  interface UtilGrid {
    'items': any[];
    'map': (v: any, i: number) => any;
    'width': number;
  }
  interface UtilThemer {
    'active': boolean;
    'thumbScale': number;
    'thumbSize': number;
    'url': string;
  }
}

declare global {


  interface HTMLAppHomeElement extends Components.AppHome, HTMLStencilElement {}
  var HTMLAppHomeElement: {
    prototype: HTMLAppHomeElement;
    new (): HTMLAppHomeElement;
  };

  interface HTMLAppNavElement extends Components.AppNav, HTMLStencilElement {}
  var HTMLAppNavElement: {
    prototype: HTMLAppNavElement;
    new (): HTMLAppNavElement;
  };

  interface HTMLAppProfileElement extends Components.AppProfile, HTMLStencilElement {}
  var HTMLAppProfileElement: {
    prototype: HTMLAppProfileElement;
    new (): HTMLAppProfileElement;
  };

  interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {}
  var HTMLAppRootElement: {
    prototype: HTMLAppRootElement;
    new (): HTMLAppRootElement;
  };

  interface HTMLUtilGridElement extends Components.UtilGrid, HTMLStencilElement {}
  var HTMLUtilGridElement: {
    prototype: HTMLUtilGridElement;
    new (): HTMLUtilGridElement;
  };

  interface HTMLUtilThemerElement extends Components.UtilThemer, HTMLStencilElement {}
  var HTMLUtilThemerElement: {
    prototype: HTMLUtilThemerElement;
    new (): HTMLUtilThemerElement;
  };
  interface HTMLElementTagNameMap {
    'app-home': HTMLAppHomeElement;
    'app-nav': HTMLAppNavElement;
    'app-profile': HTMLAppProfileElement;
    'app-root': HTMLAppRootElement;
    'util-grid': HTMLUtilGridElement;
    'util-themer': HTMLUtilThemerElement;
  }
}

declare namespace LocalJSX {
  interface AppHome {}
  interface AppNav {
    'onChangeName'?: (event: CustomEvent<string>) => void;
  }
  interface AppProfile {
    'match'?: MatchResults;
  }
  interface AppRoot {}
  interface UtilGrid {
    'items'?: any[];
    'map'?: (v: any, i: number) => any;
    'width'?: number;
  }
  interface UtilThemer {
    'active'?: boolean;
    'onCloseThemer'?: (event: CustomEvent<void>) => void;
    'onSelectTheme'?: (event: CustomEvent<string>) => void;
    'thumbScale'?: number;
    'thumbSize'?: number;
    'url'?: string;
  }

  interface IntrinsicElements {
    'app-home': AppHome;
    'app-nav': AppNav;
    'app-profile': AppProfile;
    'app-root': AppRoot;
    'util-grid': UtilGrid;
    'util-themer': UtilThemer;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'app-home': LocalJSX.AppHome & JSXBase.HTMLAttributes<HTMLAppHomeElement>;
      'app-nav': LocalJSX.AppNav & JSXBase.HTMLAttributes<HTMLAppNavElement>;
      'app-profile': LocalJSX.AppProfile & JSXBase.HTMLAttributes<HTMLAppProfileElement>;
      'app-root': LocalJSX.AppRoot & JSXBase.HTMLAttributes<HTMLAppRootElement>;
      'util-grid': LocalJSX.UtilGrid & JSXBase.HTMLAttributes<HTMLUtilGridElement>;
      'util-themer': LocalJSX.UtilThemer & JSXBase.HTMLAttributes<HTMLUtilThemerElement>;
    }
  }
}


