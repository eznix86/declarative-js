import { BuildContext } from "../Utils/Context";
import { EmptyView, View } from "../Utils/View";
import '../css/components/center.css'
export interface CenterProps {
    child: View,
}

export class Center extends View implements CenterProps {
    child: View;

    constructor({child}: CenterProps) {
        super();
        this.child = child;
        this.build()
    }

    render(context: BuildContext): HTMLElement {
        let div: HTMLDivElement = document.createElement("div");
        div.className = "center"
        div.appendChild(this.child.render(context))
        return div;
    }
}