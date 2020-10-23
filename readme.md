# BEM Elements

Create HTML elements (blocks) from JavaScript that follow the BEM architecture (**B**lock **E**lement **M**odifier).

- Create the main **Block** HTML element
- Append **Element**'s to the Block HTML element.
- Add multiple **Modifier**'s to both Block's and Element's.
- Manipulate **Modifier**'s (add, remove and toggle)

### Import:

##### JavaScript:
```javascript
import bem from "https://unpkg.com/@bqardi/bem-elements@1.1.0/index.js";
```

### Usage:

##### JavaScript:
```javascript
// Creating the BLOCK html element:
var btn = bem("button", "btn");

// Setting a MODIFIER:
btn.addModifier("blue");

// Add ELEMENT as a child:
var btnImage = btn.addElement("img", "image");

// You can also set MODIFIER's on ELEMENT's:
btnImage.addModifier("large");

// And because it's an img, we need to manually insert src and alt:
btnImage.src = "./path/to/file";
btnImage.alt = "My personal image";
```

The above JavaScript code will output this HTML:

##### html:
```html
<button class="btn btn--blue">
    <img class="btn__image btn__image--large" src="./path/to/file" alt="My personal image">
</button>
```

provided that you have appended the `btn` to an actual element on your page:

##### html:
```html
<div id="root"></div>
```

##### JavaScript:
```javascript
var root = document.getElementById("root");
root.appendChild(btn);
```

### Other features

#### Removing a MODIFIER:
##### JavaScript:
```javascript
btn.removeModifier("blue");
```
##### HTML:
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

#### Toggle a MODIFIER:
##### JavaScript:
```javascript
btn.toggleModifier("blue");
```
##### HTML:
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

#### Changing the naming scheme:
To change the underscores and dashes (in the common BEM naming scheme), you need to define them as third and fourth parameter when creating the BLOCK:
##### JavaScript:
```javascript
var btn = bem("button", "Btn", "", "_");
var btnImage = btn.addElement("img", "Image");
```
Will output this HTML:
##### HTML:
```html
<button class="Btn Btn_Blue">
    <img class="BtnImage BtnImage_Large">
</button>
```

### NOTE!

In that ultra rare case you should accidentally create an ELEMENT that already exists (*that will never happen, right?*), an error is thrown and the ELEMENT will not be created!