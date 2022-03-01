import { BuildContext } from "../Utils/Context";
import { View } from "../Utils/View";
import '../css/components/row.css'
export interface RowProps {
    children: View[],

}

export class Row extends View implements RowProps {
    children: View[];

    constructor({children = []}: RowProps) {
        super();
        this.children = children;
        this.build()
    }

    render(context: BuildContext): HTMLElement {
        let div: HTMLDivElement = document.createElement("div");
        let renderedChildren = this.children.map(child => child.render(context));
        div.className = "row row-direction--row"
        div.append(...renderedChildren)
        return div;
    }
}