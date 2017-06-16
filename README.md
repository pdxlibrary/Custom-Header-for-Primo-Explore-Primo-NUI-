# Custom Header for Primo Explore (Primo NUI)

This repository includes the JS and CSS need to add a custom header to the top of each page in the Ex Libris Primo Explore library catalog.

## Installation

To add a custom header to Primo, you will need to update the custom.js and custom1.css files of the UI theme for a particular view in the Primo Back Office (PBO).

### custom.js

The necessary code can be copied from the custom.js file in the js folder of this repository. To edit the HTML for the custom header, the following line, at the top of the custom.js file, needs to be changed to contain the HTML you wish to display:

```js

var custom_header_template = "<div>CUSTOM HEADER GOES HERE</div>";

```

### custom1.css

The necessary code can be copied from the custom1.css file in the css folder of this repository. The current design of Primo makes some assumptions about the design at the top of the page and uses absolution positioning for some elements. After adding a custom header, some adjustments need to be made to work around these assumptions.

```css

/* header */
.custom-header {}


/* turn off fly to fav pin animation */
.pinDummy.animating{animation:none !important;}

```
