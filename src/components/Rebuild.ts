import { BuildContext } from "../Utils/Context";
import { EmptyView, View } from "../Utils/View";
import {S} from 's-js'
export interface RebuildProps {
    child: View,
    state: S,
}

export class Rebuild extends View implements RebuildProps {
    child: View;
    state: S;

    constructor({child, state}: RebuildProps) {
        super();
        this.child = child;
        this.state = state;

        this.build()
    }

    render(context: BuildContext): HTMLElement {
        let div: HTMLDivElement = document.createElement("div");
        div.appendChild(this.child.render(context))
        this.state(() => console.log('Hello World'))
        return div;
    }
}