import { Component, Prop, h } from "@stencil/core";

@Component({
    tag: "ui-icon",
    styleUrl: "./ui-icon.scss"
})
export class UiIconAtom {

    @Prop() name: string = "";
    @Prop() color: string = "";
    @Prop() size: string = "";

    render(){
        return <i class={this.getClassName()} style={this.setSizeStyle()}></i>
    }

    private setSizeStyle(): any{
        return {
            "font-size": this.size
        };
    }

    private getClassName():string{
        let className = `icon-${this.name}`
        if(this.color) className = `${className} ${this.color}`
        return className;
    }

}