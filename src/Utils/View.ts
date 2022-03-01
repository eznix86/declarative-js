import { BuildContext, EmptyContext } from "./Context";


export abstract class View {
    context: BuildContext

    build() {
        this.context = new EmptyContext();
        this.context.parent = this;
        this.onMount(this.context)
    }

    onMount(context?: BuildContext) {
        this.render(context);
    }

    abstract render(context?: BuildContext) : HTMLElement;
}

export class EmptyView extends View {

    constructor() {
        super();
        this.build()
    }

    render(_: BuildContext): HTMLElement {
        return document.createElement("empty");
    }
}

export const defaultContext: BuildContext = {
    cssClassNames: "",
    parent: null
}