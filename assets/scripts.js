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

document.addEventListener("DOMContentLoaded", function() {
    const BREAKPOINTS = [
        { device: "desktop", query: "(min-width: 1001px) {size}px" },
        { device: "tablet", query: "(min-width: 651px) and (max-width: 1000px) {size}px" },
        { device: "mobile", query: "(max-width: 650px) {size}px" }
    ];

    document.querySelectorAll('.adaptive-picture').forEach(picture => {
        const sizes = picture.getAttribute('data-sizes').split(',');
        const srcsetTemplate = picture.getAttribute('data-srcset');
        const imgData = picture.getAttribute('data-img').split(',');
        
        const imgClass = imgData[0];
        const imgUrl = imgData[1];
        const imgAlt = imgData[2];
        const imgWidth = imgData[3];
        const imgHeight = imgData[4];
        const imgLazy = imgData[5] || 'auto'; 

        let source = document.createElement('source');
        source.type = 'image/webp';
        source.srcset = BREAKPOINTS.map((b, i) => srcsetTemplate.replace('{device}', b.device) + ' ' + sizes[i] + 'w').join(', ');
        source.sizes = BREAKPOINTS.map((b, i) => b.query.replace('{size}', sizes[i])).join(', ');

        picture.appendChild(source);
        
        let img = document.createElement('img');
        img.className = imgClass.trim() ? imgClass : "";
        img.src = imgUrl;
        img.alt = imgAlt;
        img.width = imgWidth;
        img.height = imgHeight;
        img.loading = imgLazy;

        picture.appendChild(img);
    });
});


function loadFont() {
  var link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = 'https://fonts.googleapis.com/css2?family=Inter&family=Spectral:ital,wght@0,400;1,300;1,400;1,800&display=swap';
  document.head.appendChild(link);
}

window.onload = loadFont;
