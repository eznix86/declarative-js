import { EmptyView, View } from "./View";

export interface BuildContext {
    cssClassNames?: string,
    parent: View,
}

export class EmptyContext implements BuildContext {
    parent: View;
    cssClassNames?: string = "";
}
