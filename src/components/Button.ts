import { BuildContext } from "../Utils/Context";
import { View } from "../Utils/View";
import { TextSpan } from "./Text";


export interface ButtonProps {
    text: TextSpan,
    onClick?: Function
}

const defaultProps : ButtonProps = {
    text: new TextSpan({
        text: ""
    }),
    onClick: () => {}
}

export class Button extends View implements ButtonProps {
    text: TextSpan
    onClick?: Function;

    constructor({text, onClick}: ButtonProps = defaultProps) {
        super();
        this.text = text;
        this.onClick = onClick
        this.build()
    }


    render(context: BuildContext): HTMLElement {
        let button: HTMLButtonElement = document.createElement("button");
        let text = this.text.render(context);
        button.addEventListener("click", (e) => this.onClick(e));
        button.appendChild(text)
        return button;
    }
}