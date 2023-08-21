$(document).ready(function () {
  $(".gallery").mauGallery({
    columns: {
      xs: 1,
      sm: 2,
      md: 3,
      lg: 3,
      xl: 3,
    },
    lightBox: true,
    lightboxId: "myAwesomeLightbox",
    showTags: true,
    tagsPosition: "top",
  });
});

window.addEventListener("load", function () {
  setTimeout(() => {
    const sources = document.querySelectorAll("source[data-srcset]");
    sources.forEach((source) => {
      source.setAttribute("srcset", source.getAttribute("data-srcset"));
    });

    const img = document.querySelector("img[data-src]");
    img.setAttribute("src", img.getAttribute("data-src"));

    sources.forEach((source) => {
      source.removeAttribute("data-srcset");
    });
    img.removeAttribute("data-src");
  }, 1000);
});
