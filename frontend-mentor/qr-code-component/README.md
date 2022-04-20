# Frontend Mentor - QR code component solution

This is a solution to the [QR code component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/qr-code-component-iux_sIO_H). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### Screenshot

![](./screenshot.png)

### Links

- Solution URL: [QR Code Component](https://mckensis.github.io/qr-code-component/index.html)
- Live Site URL: [My projects](https://mckensis.github.io)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox

### What I learned

I learned how to use flexbox to align the body of the page to the center both vertically and horizontally. I also used what I had learned from MDN's 'Learn web development' course to ensure all margins and padding matched the design template provided.

I also used Firefox's built in developer tools to debug my page when the margins and padding were not acting as I had expected.

Here is the code below which I used to ensure the QR code / body of the page was always centered vertically & horizontally.

```css
  html {
      height: 100%;
      display: flex; /* Flex active to enable easy vertical & horizontal centering of the page body */
      align-items: center;
      justify-content: center;
      font-size: 10px; /* Font size set to 10px to enable easy use of rem units */
  }
```

### Continued development

I will continue learning with the MDN course and carry on with the Frontend Mentor's challenges to strengthen my knowledge with HTML, CSS, and eventually Javascript.

### Useful resources

- [Firefox Developer Tools](https://firefox-source-docs.mozilla.org/devtools-user/index.html) - This helped me with debugging my page as I created it.
- [MDN Flexbox](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox) This also helped me with flexbox.

## Author

- Website - [Aidan Mckenzie](https://mckensis.github.io)
- Frontend Mentor - [@mckensis](https://www.frontendmentor.io/profile/mckensis)
- Github - [@mckensis](https://www.github.com/mckensis)

## Acknowledgments

MDN Learn Web Development website
Firefox Developer Tools
W3Schools website
