console.log("salam a jma3a");
const h1 = document.querySelector(".heading-primary");

const yearEl = document.querySelector(".year");

yearEl.textContent = new Date().getFullYear();

const x = document.querySelector(".btn-mobile-nav");
const header = document.querySelector(".header");

x.addEventListener("click", function () {
  header.classList.toggle("nav-open");
});

const alllinks = document.querySelectorAll("a:link");
alllinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (href.startsWith("#")) {
      const sectionEL = document.querySelector(href);
      sectionEL.scrollIntoView({ behavior: "smooth" });
      header.classList.remove("nav-open");
    }
  });
});

// window.addEventListener("scroll", function () {
//   const section = document.querySelector(".section-featured");
//   const rect = section.getBoundingClientRect();

//   if (rect.top <= 0) {
//     header.classList.add("sticky");
//   } else {
//     header.classList.remove("sticky");
//   }
// });
const sectionhero = document.querySelector(".section-hero");
const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);
    const section = document.querySelector(".section-hero");
    if (!ent.isIntersecting) {
      header.classList.add("sticky");
      section.classList.add("stickyy");
    } else {
      header.classList.remove("sticky");
      section.classList.remove("stickyy");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  },
);
obs.observe(sectionhero);
