import { App } from "../src/app";
import { Button } from "../src/components/Button";
import { Center } from "../src/components/Center";
import { Column } from "../src/components/Column";
import { Row } from "../src/components/Row";
import { Scaffold } from "../src/components/Scaffold";
import { TextSpan } from "../src/components/Text";
import { FontWeight } from "../src/styles/FontWeight";


import S from 's-js'
import { Rebuild } from "../src/components/Rebuild";
const counter = S.data(0);

let scaffold = new Scaffold({
    body: new Center({
        child: new Column({
            children: [
                new TextSpan({
                    text: "Counter App",
                    style: {
                        color: 'red',
                        fontWeight: FontWeight.Bold,
                    }
                }),
                new Rebuild({
                    state: S,
                    child: new TextSpan({
                        text: `${counter()}`,
                        style: {
                            color: 'red',
                            fontWeight: FontWeight.Regular,
                        }
                    })
                }),
                new Row({
                    children: [
                        new Button({
                            text: new TextSpan({
                                text: "Click Me!!",
                                style: {
                                    fontWeight: FontWeight.Regular
                                },
                            }),
                            onClick: () => {
                                counter(counter() + 1)
                            }
                        })
                    ]
                })
            ]
        })
    })
});


// S(() => console.log(counter()))

let element = document.getElementById("app");

let app = new App(scaffold, element);
