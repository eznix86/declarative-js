DECLARATIVE JS
==============


This was an example to create a declarative javascript, like SwiftUI, Flutter and JetPack Compose.

It is purely written in Typescript, unfortunately the State Management is not completed yet.

But you can check out the code at `example/index.ts`and `index.html`


### How to run.

- Clone the project and
- `cd declarative-js`
- `npm install`
- `npm run dev`


### What I mean by declarative ?

For those who doesn't want to bother with css and class. You can expressively write components
rapidly and autocompletion of typescript will help you a lot.

Writing declaratively:

```md
- Components are available
- Everyone use the existing ones
- Extend Existing Components with built-in style
- Easier to read
```

In a case you want a list:

Just do:

````js
Column({
    children: [
        Items(),
        Items(),
        Items(),
    ]
})
````

What if you want to create a scrollable/stackable/clickable elements ?

In declarative everything is a sort of `function` you can call.

`Scroll({ children: [] })`, `Stack({ children: [] })`, `Button()` and so on...





