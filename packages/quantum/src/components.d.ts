/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface QuantumConsumer {
        "mapper": (val: any) => string;
        "name": string;
    }
    interface QuantumFetch {
    }
    interface QuantumProvider {
        "name": string;
        "value": any;
    }
}
declare global {
    interface HTMLQuantumConsumerElement extends Components.QuantumConsumer, HTMLStencilElement {
    }
    var HTMLQuantumConsumerElement: {
        prototype: HTMLQuantumConsumerElement;
        new (): HTMLQuantumConsumerElement;
    };
    interface HTMLQuantumFetchElement extends Components.QuantumFetch, HTMLStencilElement {
    }
    var HTMLQuantumFetchElement: {
        prototype: HTMLQuantumFetchElement;
        new (): HTMLQuantumFetchElement;
    };
    interface HTMLQuantumProviderElement extends Components.QuantumProvider, HTMLStencilElement {
    }
    var HTMLQuantumProviderElement: {
        prototype: HTMLQuantumProviderElement;
        new (): HTMLQuantumProviderElement;
    };
    interface HTMLElementTagNameMap {
        "quantum-consumer": HTMLQuantumConsumerElement;
        "quantum-fetch": HTMLQuantumFetchElement;
        "quantum-provider": HTMLQuantumProviderElement;
    }
}
declare namespace LocalJSX {
    interface QuantumConsumer {
        "mapper"?: (val: any) => string;
        "name": string;
    }
    interface QuantumFetch {
    }
    interface QuantumProvider {
        "name": string;
        "value"?: any;
    }
    interface IntrinsicElements {
        "quantum-consumer": QuantumConsumer;
        "quantum-fetch": QuantumFetch;
        "quantum-provider": QuantumProvider;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "quantum-consumer": LocalJSX.QuantumConsumer & JSXBase.HTMLAttributes<HTMLQuantumConsumerElement>;
            "quantum-fetch": LocalJSX.QuantumFetch & JSXBase.HTMLAttributes<HTMLQuantumFetchElement>;
            "quantum-provider": LocalJSX.QuantumProvider & JSXBase.HTMLAttributes<HTMLQuantumProviderElement>;
        }
    }
}
