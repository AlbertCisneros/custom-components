import { Component, h } from "@stencil/core";

@Component({
    tag: "ui-checkbox",
    styleUrl: "./ui-checkbox.scss"
})
export class UiCheckboxMolecules {

    render() {
        return  <div class="checkbox-container">
                    <label><slot></slot></label>
                    <input type="checkbox"></input>
                </div>
    }
}