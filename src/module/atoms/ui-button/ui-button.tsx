import { Component, Prop, h, Event, EventEmitter, Listen } from "@stencil/core";

@Component({
    tag: "ui-button",
    styleUrl: "./ui-button.scss"
})
export class UiButtonAtom {

    @Prop() size: "lg" | "md" | "sm" = "md";
    @Prop() tier: "primary" | "secondary" | "text" = "primary";
    @Prop() disabled: boolean = false;
    @Prop() fullwidth: boolean = false;

    @Event() ctrlClick: EventEmitter<any>;

    render() {
        return <button class={this.getClassName()} disabled={this.disabled}>
            <p><slot></slot></p>
        </button>
    }

    @Listen('click', { capture: true })
    handleClick(event) {
        console.log('click');
        this.ctrlClick.emit(event);
    }

    private getClassName() {
        let className = `ui-btn ui-btn--${this.tier} ui-btn--${this.size}`;
        if (this.fullwidth) className = `${className} full-width`;
        if (this.disabled) className = `${className} disabled`;

        return className;
    }


}