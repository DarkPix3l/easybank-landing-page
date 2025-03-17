# Frontend Mentor - Easybank landing page

![Design preview for the Easybank landing page coding challenge](./design/desktop-preview.jpg)


This project is a solution for a responsive landing page, designed to look as close to the provided design as possible. The goal was to ensure an optimal layout for various screen sizes and provide smooth, interactive hover states for all clickable elements.

---

## Features & Objectives

- **Responsive Layout**: The landing page adjusts its layout dynamically depending on the user’s screen size, ensuring an optimal viewing experience across mobile, tablet, and desktop devices.
- **Interactive Hover States**: All interactive elements on the page, such as buttons, links, and menus, have hover states to enhance the user experience.
- **Mobile Menu Animation**: JavaScript was used to animate the mobile navigation menu, providing a smooth transition when the menu is opened and closed.
- 
---
## Links

- [Live Review](https://fm-easybank-landing-page.netlify.app/)
- [Frontend Mentor Solution Page]()

---

## Technologies Used

- **HTML5 semantic**
- **CSS**
- **CSS Flexbox**
- **CSS Grid**
- **JavaScript**
- **CSS Hover Effects**

---

## What I've leaned or revisited

Read more about header and nav for semantic.

Difference Between overflow: hidden; and overflow: clip;
overflow: hidden:
Hides content that overflows the container.
Still calculates the overflowing content in the layout (even though it’s hidden).
Can cause issues with scrolling, fixed positioning, and interactions.

overflow: clip:
Also hides the overflowing content.
Does NOT calculate the hidden content in the layout.
Prevents layout shifts and weird rendering issues.

Obtaining a perfect round border:
```css
border-radius: calc(infinity * 1px);
```

Getting the social network icons to change color on hover (working solution):
```css
.socials img:hover {
	filter: invert(42%) sepia(93%) saturate(1352%) hue-rotate(104deg)
	brightness(89%) contrast(119%);
}
```

Trying to achieve a fluid resize of the phone images in the hero section without setting different sizes for each breakpoint:

```css
width: clamp(255px, 90%, 417px);
```

Understand and be able to navigate page content while using assistive technology.

Automated Accessibility Testing tools and
- **Keyboard Navigation Test**
- **Zoom & Responsive Testing**: ensuring that the text remains readable at 200% zoom. Test on different screen sizes and orientations.
- **Color Contrast**: good to know, but in this case I did not have control over design choices.

#### and more:

- **CSS Positioning & Z-Index**: Understanding how to properly manage layering and positioning in CSS helped solve several layout issues.
- **Performance Optimization**: I learned how small tweaks like lazy loading and preload strategies can significantly improve user experience.

---

## Mobile & Desktop Media Queries

The mobile version of the website was handled by creating two helper classes to manage mobile and desktop visibility of the header menu:

```css
.mobile {
  display: none;
}

.desktop {
  display: inherit;
}

```

This approach ensured that elements are shown or hidden based on the screen size without relying on JavaScript.

---

## Layout & Design Considerations

### Responsive Layout

The page layout was designed to adjust dynamically across various screen sizes:

- **Mobile Layout**: The mobile layout stacks content vertically, ensuring that all elements are properly spaced. The navigation bar becomes a hamburger menu to save space, which is animated using JavaScript for smooth transitions.
- **Tablet Layout**: At tablet sizes, the layout switches to a more balanced form, adjusting the spacing and re-positioning elements for an optimal experience.
- **Desktop Layout**: On larger screens, the layout expands horizontally with additional spacing and content arranged in a multi-column layout.

I used Flexbox and CSS Grid to ensure the content adapts seamlessly and is flexible for various screen sizes.

### Hover States

For interactivity, I ensured that all clickable elements on the page (buttons, links, etc.) have hover states:

- **Buttons**: Buttons background change color becoming slightly brighter when hovered over.
- **Footer links and icons**:  change color becoming green. 
- **Navigation**: The navigation links have a border bottom effect with a gradient when hovered.

### Mobile Menu Animation

Here’s an example of how the mobile menu animation was implemented:

```js
const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobile-menu");
const bg = document.querySelector(".overmenu");
const mobileMenuLinks = document.querySelectorAll(".mobile-menu a");

  

hamburger.addEventListener("click", () => {
//mobileMenu.classList.toggle('fadeIn', 'slideIn'); ERROR: classList just takes 1 class at the time.
	mobileMenu.classList.toggle("slideIn");
	mobileMenu.classList.toggle("fadeIn");
	bg.classList.toggle("fadeIn");
});

  
//close the menu when clicking on each link
mobileMenuLinks.forEach((element) => {

	element.addEventListener("click", () => {
	mobileMenu.classList.remove("slideIn", "fadeIn");
	bg.classList.remove("fadeIn");
	});
});

```

It's really basic.
Just two functions: one for toggling the menu open and closed by adding/removing the right classes, and another for automatically closing it when clicking on each link. I wanted the background to fade in, while the menu itself fades in and slides.
**the DOM `.toggle()` method eliminates the need for an `if` statement when adding or removing a class dynamically. instead using .add or .remove.**

```css
.overmenu {
height: 100vh;
width: 100%;
position: fixed; /* changed to fixed because will make the menu appear at a fixed position relative to the viewport */
z-index: 3;
background: linear-gradient(
180deg,
rgba(45, 49, 77, 1) 0%,
rgba(0, 212, 255, 0) 100%
);
opacity: 0;
visibility: hidden;
transition: all 0.3s ease-in-out;
}

.mobile-menu {
width: 80%;
max-width: 415px;
margin: 0 auto;
padding: 50px;
display: flex;
flex-direction: column;
align-items: center;
gap: 15px;
border-radius: 10px;
background-color: var(--White);
opacity: 0;
visibility: hidden;
transform: translateY(-90px);
transition: all 0.5s ease-in-out;

}

.slideIn {
transform: translateY(150px);
}

.fadeIn {
opacity: 1;
visibility: visible;
}

```

---

## Accessibility Improvements

During the development process, some accessibility improvements were made to ensure the website was usable for all users:

1. **Keyboard Navigation Testing**: Ensured all interactive elements (links, buttons, modals) were navigable using the keyboard (Tab, Shift+Tab, Enter, Space).

Automated accessibility testing was performed using **Google Lighthouse**, and manual tests were conducted to address specific issues like missing ARIA labels and interactive elements.

---

## Performance Optimization

### Image Optimization

One of the things that slightly slowed down the website was images without fixed sizes. However, I needed them to be 100% so they could remain flexible within the parent container. In the end, I chose:

1. **Lazy Loading**: Implemented lazy loading for images using the `loading="lazy"` attribute to defer image loading until they are needed, thus reducing initial page load time.
2. **Responsive Images with `srcset`**: Used the `srcset` attribute to provide different image sizes depending on the device's screen size.

### Eliminate Render-Blocking Resources

I resolved the issue of render-blocking resources by preloading Google Fonts with **onload fallback** and **noscript** support for better performance.

### Largest Contentful Paint Optimization

To improve the website's Core Web Vitals, specifically the Largest Contentful Paint (LCP), I preloaded the most significant images on the page and optimized their delivery.

---

## Final Thoughts

This landing page design challenge focused on creating a visually appealing, responsive, and interactive website using minimal tools. It was a small one-page project that allowed me to explore various aspects of web development. There is certainly room for improvement.
I could, for example, add a function to close the menu when the user clicks anywhere outside of it in the viewport. 😊


## Useful resources

I just remembered that I stumbled upon an article a few weeks ago about debugging z-index issues using the browser dev tools.
https://www.webscope.io/blog/z-index-not-working-debug-it-the-modern-way
