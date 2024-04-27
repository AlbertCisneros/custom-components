/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface MyComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
    interface UiButton {
        "disabled": boolean;
        "size": "lg" | "md" | "sm";
        "tier": "primary" | "secondary" | "text";
    }
    interface UiCheckbox {
    }
    interface UiInput {
        "label": string;
        "size": "lg" | "md" | "sm";
        "type": "text" | "password";
    }
    interface UiParagraph {
        "color": "primary" | "secondary" | "text";
        "family": "bold" | "regular";
        "size": "lg" | "md" | "sm";
    }
    interface UiTitle {
        "color": "primary" | "secondary" | "text";
        "family": "bold" | "regular";
        "size": "lg" | "md" | "sm";
    }
}
export interface UiButtonCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLUiButtonElement;
}
declare global {
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLUiButtonElementEventMap {
        "ctrlClick": any;
    }
    interface HTMLUiButtonElement extends Components.UiButton, HTMLStencilElement {
        addEventListener<K extends keyof HTMLUiButtonElementEventMap>(type: K, listener: (this: HTMLUiButtonElement, ev: UiButtonCustomEvent<HTMLUiButtonElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLUiButtonElementEventMap>(type: K, listener: (this: HTMLUiButtonElement, ev: UiButtonCustomEvent<HTMLUiButtonElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLUiButtonElement: {
        prototype: HTMLUiButtonElement;
        new (): HTMLUiButtonElement;
    };
    interface HTMLUiCheckboxElement extends Components.UiCheckbox, HTMLStencilElement {
    }
    var HTMLUiCheckboxElement: {
        prototype: HTMLUiCheckboxElement;
        new (): HTMLUiCheckboxElement;
    };
    interface HTMLUiInputElement extends Components.UiInput, HTMLStencilElement {
    }
    var HTMLUiInputElement: {
        prototype: HTMLUiInputElement;
        new (): HTMLUiInputElement;
    };
    interface HTMLUiParagraphElement extends Components.UiParagraph, HTMLStencilElement {
    }
    var HTMLUiParagraphElement: {
        prototype: HTMLUiParagraphElement;
        new (): HTMLUiParagraphElement;
    };
    interface HTMLUiTitleElement extends Components.UiTitle, HTMLStencilElement {
    }
    var HTMLUiTitleElement: {
        prototype: HTMLUiTitleElement;
        new (): HTMLUiTitleElement;
    };
    interface HTMLElementTagNameMap {
        "my-component": HTMLMyComponentElement;
        "ui-button": HTMLUiButtonElement;
        "ui-checkbox": HTMLUiCheckboxElement;
        "ui-input": HTMLUiInputElement;
        "ui-paragraph": HTMLUiParagraphElement;
        "ui-title": HTMLUiTitleElement;
    }
}
declare namespace LocalJSX {
    interface MyComponent {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface UiButton {
        "disabled"?: boolean;
        "onCtrlClick"?: (event: UiButtonCustomEvent<any>) => void;
        "size"?: "lg" | "md" | "sm";
        "tier"?: "primary" | "secondary" | "text";
    }
    interface UiCheckbox {
    }
    interface UiInput {
        "label"?: string;
        "size"?: "lg" | "md" | "sm";
        "type"?: "text" | "password";
    }
    interface UiParagraph {
        "color"?: "primary" | "secondary" | "text";
        "family"?: "bold" | "regular";
        "size"?: "lg" | "md" | "sm";
    }
    interface UiTitle {
        "color"?: "primary" | "secondary" | "text";
        "family"?: "bold" | "regular";
        "size"?: "lg" | "md" | "sm";
    }
    interface IntrinsicElements {
        "my-component": MyComponent;
        "ui-button": UiButton;
        "ui-checkbox": UiCheckbox;
        "ui-input": UiInput;
        "ui-paragraph": UiParagraph;
        "ui-title": UiTitle;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
            "ui-button": LocalJSX.UiButton & JSXBase.HTMLAttributes<HTMLUiButtonElement>;
            "ui-checkbox": LocalJSX.UiCheckbox & JSXBase.HTMLAttributes<HTMLUiCheckboxElement>;
            "ui-input": LocalJSX.UiInput & JSXBase.HTMLAttributes<HTMLUiInputElement>;
            "ui-paragraph": LocalJSX.UiParagraph & JSXBase.HTMLAttributes<HTMLUiParagraphElement>;
            "ui-title": LocalJSX.UiTitle & JSXBase.HTMLAttributes<HTMLUiTitleElement>;
        }
    }
}