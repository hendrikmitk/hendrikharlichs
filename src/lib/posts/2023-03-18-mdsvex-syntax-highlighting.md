---
title: Syntax highlighting with MDSveX
created: 2023-03-18
updated:
summary: Check out MDSveX's built-in syntax highlighting. This article will give you an idea of how to dress up your code snippets.
draft: false
---

MDSveX has automatic, built-in syntax highlighting with Prism.js. Just include the language name after the triple backticks, like so:

```css
/* Your CSS here */
```

And that will render just like so:

```css
.my-css-class {
	color: #ffd100;
	box-sizing: border-box;
}
```

Here's how you'd do JavaScript:

````
\```js
// You can use js or javascript for the language
\```
````

Highlighted code sample:

```js
const invertNumberInRange = (num, range) => {
	return range - num;
};

invertNumberInRange(25, 100); // 75
```

You can use TypeScript as well:

```ts
const invertNumberInRange = (num: number, range: number): number => {
	return range - num;
};

invertNumberInRange(25, 100); // 75
```

Of course, mdsvex supports Svelte highlighting, too:

```svelte
<script>
	import myComponent from '$lib/components/myComponent.svelte';

	export let myProp = undefined;
</script>

<div>
	<MyComponent prop={myProp}>
</div>
```
