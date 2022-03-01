import { Colors } from "../styles/Colors";
import { FontStyle } from "../styles/Font";
import {FontWeight} from '../styles/FontWeight';
import { BuildContext } from "../Utils/Context";
import { View } from "../Utils/View";


export interface TextSpanProps {
    text: string,
    style?: FontStyle
}

const defaultProps: TextSpanProps = {
    text: "",
    style : {
        color: Colors.Black,
        fontWeight: FontWeight.Bold,
        family: "initial"
    }
}

export class TextSpan extends View implements TextSpanProps {

    text: string
    style?: FontStyle

    constructor({text, style} : TextSpanProps) {
        super();
        this.text = text || defaultProps.text ;
        this.style = {...defaultProps.style, ...style};
        this.build()
    }


    render(context: BuildContext): HTMLElement {
         let content: HTMLSpanElement = document.createElement("span");
         let textHTML: Text = document.createTextNode(this.text);

         content.append(
            textHTML
         );

         content.className = context.cssClassNames!;
         content.style.color = this.style!.color!;
         content.style.fontWeight = FontWeight[this.style!.fontWeight!];
         content.style.fontFamily = this.style!.family!;

        return content;
    }
}