import { BuildContext } from "../Utils/Context";
import { EmptyView, View } from "../Utils/View";


export interface ScaffoldProps {
    body: View,
}

export class Scaffold extends View implements ScaffoldProps {
    body: View

    constructor({body}: ScaffoldProps) {
        super();
        this.body = body;
        this.build()
    }

    render(context: BuildContext): HTMLElement {
        let div: HTMLDivElement = document.createElement("div");
        let body = this.body.render(context);
        div.appendChild(body)
        return div;
    }
}