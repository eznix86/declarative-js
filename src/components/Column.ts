import { BuildContext } from "../Utils/Context";
import { View } from "../Utils/View";
import '../css/components/column.css'
export interface ColumnProps {
    children: View[],

}

export class Column extends View implements ColumnProps {
    children: View[];

    constructor({children = []}: ColumnProps) {
        super();
        this.children = children;
        this.build()
    }

    render(context: BuildContext): HTMLElement {
        let div: HTMLDivElement = document.createElement("div");
        let renderedChildren = this.children.map(child => child.render(context));
        div.className = "column column-direction--column"
        div.append(...renderedChildren)
        return div;
    }
}