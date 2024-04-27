import { newSpecPage } from "@stencil/core/testing";
import { UiTitleAtom } from "./ui-title";


describe("ui-title",()=>{
    it("#should render with default values",async ()=>{
        const { root } =  await newSpecPage({
            components:[UiTitleAtom],
            html: `<ui-title></ui-title>`
        });
    
        expect(root.shadowRoot).toEqualHtml(`
            <h1 class='ui-title ui-title--primary ui-title--bold ui-title--lg'>
                <slot></slot>
            </h1>                            
        `)
    })

    it("#should render with customized values",async ()=>{
        const { root } =  await newSpecPage({
            components:[UiTitleAtom],
            html: `<ui-title size="md" family="regular" color="secondary"></ui-title>`
        });
    
        expect(root.shadowRoot).toEqualHtml(`  
            <h2 class='ui-title ui-title--secondary ui-title--regular ui-title--md'>
                <slot></slot>
            </h2>             
        `)
    })
})
