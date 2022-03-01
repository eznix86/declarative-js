DECLARATIVE JS
==============


This was an example to create a declarative javascript, like SwiftUI, Flutter and JetPack Compose.

It is purely written in Typescript, unfortunately the State Management is not completed yet.

But you can check out the code at `example/index.ts`and `index.html`

### Blog Post

[https://dev.to/theartechnology/why-not-try-declarative-coding-for-the-web-4dck](https://dev.to/theartechnology/why-not-try-declarative-coding-for-the-web-4dck)

### How to run.

- Clone the project and
- `cd declarative-js`
- `npm install`
- `npm run dev`


### What I mean by declarative ?

For those who don't want to bother with css and html. You can expressively write components
rapidly and autocompletion of your IDE will help you a lot.

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


How can we style a component ?

```js
// Inside a component you will have all that you need, and it is self documented
// Your IDE will help you :)
TextSpan({
    text: "Hello",
    style: {
        fontWeight: FontWeight.Regular
    },
}),

```

Perhaps my approach is wrong, so, if it is, open an issue and let's sort things out.
