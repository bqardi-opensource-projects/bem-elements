# BEM Elements

Create HTML elements (blocks) from JavaScript that follow the BEM architecture (**B**lock, **E**lement, **M**odifier).

- Create the main **Block** HTML element.
- Append **Element**'s to the Block HTML element.
- Add multiple **Modifier**'s to both Block's and Element's.
- Manipulate **Modifier**'s (add, remove and toggle).

## Import:

JavaScript:
```javascript
import bem from "https://unpkg.com/bem-elements";
```

## Usage:

JavaScript:
```javascript
// Creating the BLOCK (html element):
// First argument is the HTML tag name, second is the BLOCK name 
var btn = bem("button", "btn");

// Setting a MODIFIER:
btn.addModifier("blue");

// Add the ELEMENT (html element) as a child of btn:
// First argument is the HTML tag name, second is the ELEMENT name 
var btnImage = btn.addElement("img", "image");

// You can also set MODIFIER's on ELEMENT's:
btnImage.addModifier("large");

// And because it's an img, we need to manually insert src and alt,
// on the htmlElement of btnImage:
btnImage.htmlElement.src = "./path/to/file";
btnImage.htmlElement.alt = "My personal image";
```
*Since `btn` and `btnImage` are objects containing information about the BLOCK/ELEMENT we need to get the html element from that object to manipuate it in the DOM like so: `btn.htmlElement` or `btnImage.htmlElement`.*

The above JavaScript code will output this HTML:

html:
```html
<button class="btn btn--blue">
    <img class="btn__image btn__image--large" src="./path/to/file" alt="My personal image">
</button>
```

provided that you have appended the `btn` to an actual element on your page:

html:
```html
<div id="root"></div>
```

JavaScript:
```javascript
var root = document.getElementById("root");
root.appendChild(btn.htmlElement);
```
*Remember the `btn.htmlElement` from earlier? We can't append an object to an HTML element `root.appendChild(btn);` so we need the htmlElement from the object `root.appendChild(btn.htmlElement);` for it to work properly.*

*If you get this error in the console:*
```diff
- Uncaught TypeError: Failed to execute 'appendChild'
- on 'Node': parameter 1 is not of type 'Node'.
```
*it propably means that you are trying to append the object and not the HTML element!*

## Other features

### Removing a MODIFIER:
JavaScript:
```javascript
btn.removeModifier("blue");
```
HTML:
```html
<!-- Before -->
<button class="btn btn--blue">
    ...
</button>

<!-- After -->
<button class="btn">
    ...
</button>
```

### Toggle a MODIFIER:
JavaScript:
```javascript
btn.toggleModifier("blue");
```
HTML:
```html
<!-- Toggled on -->
<button class="btn btn--blue">
    ...
</button>

<!-- Toggled off -->
<button class="btn">
    ...
</button>
```

### Changing the naming scheme:
To change the underscores and dashes (in the common BEM naming scheme), you need to define them as third and fourth parameter when creating the BLOCK:
```javascript
var btn = bem("button", "Btn", "", "_");
var btnImage = btn.addElement("img", "Image");
```
Will output this HTML:
```html
<button class="Btn Btn_Blue">
    <img class="BtnImage BtnImage_Large">
</button>
```

## Note!

In that ultra rare case you should accidentally create an ELEMENT that already exists (*that will never happen, right?*), an error is thrown and the ELEMENT will not be created!

If, for some reason, no parameters are passed, when creating a BLOCK, an HTML element `<div class="undefined"></div>` is created.

If no parameters are passed, when creating an ELEMENT, an HTML element `<div class="[block-name]__undefined"></div>` is created.