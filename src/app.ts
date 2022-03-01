import { BuildContext, EmptyContext } from "./Utils/Context";
import { View } from "./Utils/View";

export interface AppProps {
    view: View,
    element: Element,
}
export class App extends View implements AppProps {
    view: View;
    element: Element;

    constructor(view: View, element: Element) {
        super();
        this.view = view;
        this.element = element;
        this.build();
    }

    render(context: BuildContext): HTMLElement {
        this.element.innerHTML = "";
        this.element.appendChild(this.view.render(context));
        return;
    }
}