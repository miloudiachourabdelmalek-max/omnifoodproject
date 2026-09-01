# Omnifood

A responsive food-delivery landing page built as a frontend development project. The goal of the project was to practice building a complete modern website using **HTML, CSS, and JavaScript**, with a focus on responsive layouts, reusable components, interactivity, and basic performance optimization.

## 🛠️ Technologies

* HTML5
* CSS3
* JavaScript (ES6+)
* Flexbox
* CSS Grid
* Responsive Design
* Media Queries
* DOM Manipulation
* Intersection Observer API
* Google Fonts
* Ionicons

## 📚 Concepts Practiced

### HTML

* Semantic HTML and page structure
* Headers, navigation, sections, and footer
* Forms and form controls
* Links and internal navigation
* Images and `alt` attributes
* Labels and basic accessibility
* Meta viewport configuration

### CSS

* CSS Box Model
* `box-sizing`
* Flexbox layouts
* CSS Grid layouts
* Grid columns, rows, gaps, and `fr` units
* Positioning: `relative`, `absolute`, `fixed`, and `sticky`
* Typography and font systems
* Colors and reusable design variables
* Spacing systems
* Borders, border-radius, and shadows
* Transitions and transforms
* Pseudo-classes such as `:hover`, `:focus`, `:active`, `:link`, and `:visited`
* Pseudo-elements such as `::before` and `::after`
* Relative units such as `rem`, `em`, `%`, `fr`, `vh`, and `vw`

### Responsive Design

The website was designed to adapt to different screen sizes, including desktops, tablets, and mobile devices.

Practiced:

* Media queries
* Responsive breakpoints
* Changing grid structures at different screen sizes
* Responsive typography
* Responsive images
* Mobile navigation
* Adapting spacing and layouts for smaller screens

### JavaScript

JavaScript was used to add interactive behavior to the website.

Practiced:

* DOM selection with `querySelector()` and `querySelectorAll()`
* Event listeners
* DOM manipulation
* `classList.add()`, `remove()`, and `toggle()`
* Mobile navigation functionality
* Smooth scrolling
* Managing UI states with CSS classes

### Intersection Observer API

Used the **Intersection Observer API**, a browser Web API, to detect when the hero section enters or leaves the viewport.

This was used to implement the **sticky navigation**:

```text
Hero visible
    ↓
Normal navigation

Hero leaves viewport
    ↓
Add "sticky" class
    ↓
Fixed navigation appears
```

This provided experience with browser APIs and scroll-based UI behavior without manually checking the scroll position on every scroll event.

### 🖼️ Images & Performance

Practiced basic image optimization and learned the difference between **image dimensions** and **file size**.

The project focused on:

* Resizing images when their original dimensions were unnecessarily large
* Compressing images to reduce file size
* Understanding how oversized images can increase download time
* Using appropriately sized images for different display areas
* Understanding the importance of image optimization for responsive websites

## 🎯 What I Learned

This project helped me understand how the main frontend technologies work together:

```text
HTML
→ Structure

CSS
→ Design & Layout

Flexbox / Grid
→ Responsive Layouts

JavaScript
→ Interactivity

DOM & Browser APIs
→ Dynamic UI Behavior

Responsive Design
→ Different Screen Sizes

Image Optimization
→ Better Performance
```

It also gave me practical experience organizing a complete frontend project with reusable CSS classes, responsive breakpoints, interactive navigation, and JavaScript-driven UI states.
