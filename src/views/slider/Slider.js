export default class Slider {
  constructor(parent, slides = ["revenue", "impresions", "visits"]) {
    this.node = document.getElementById(parent);
    // create slider
    const slider = document.createElement("div");
    slider.id = "slider";
    this.node.appendChild(slider);
    // create slider-wrapper
    const sliderWrapper = document.createElement("div");
    sliderWrapper.id = "slider-wrapper";
    slider.appendChild(sliderWrapper);
    // create slider-nav
    const sliderNav = document.createElement("div");
    sliderNav.id = "slider-nav";
    this.node.appendChild(sliderNav);
    // create nav-buttons for each slide
    slides.forEach((slide, ix) => {
      const slideLink = document.createElement("a");
      slideLink.href = "#";
      slideLink.setAttribute("data-slide", `${ix}`);
      slideLink.setAttribute("class", ix === 0 && "current");
      sliderNav.appendChild(slideLink);
    });
    this.init(slides);
  }
}

Slider.prototype = {
  init: function() {
    this.links = this.node.querySelectorAll("#slider-nav a");
    this.wrapper = this.node.querySelector("#slider-wrapper");
    this.wrapper.style.left = "calc((100vw - 400px) / -4)";
    this.links.forEach(link => this.slide(link));
    return this.wrapper;
  },

  slide: function(element) {
    var self = this;
    element.addEventListener(
      "click",
      function(e) {
        e.preventDefault();
        var a = this;
        self.setCurrentLink(a);
        var index = parseInt(a.getAttribute("data-slide"), 10) + 1;
        var currentSlide = document.querySelector(
          ".slide:nth-child(" + index + ")"
        );
        self.wrapper.style.left = "-" + currentSlide.offsetLeft + "px";
      },
      false
    );
  },
  setCurrentLink: function(link) {
    var parent = link.parentNode;
    var a = parent.querySelectorAll("a");

    link.className = "current";

    for (var j = 0; j < a.length; ++j) {
      var cur = a[j];
      if (cur !== link) {
        cur.className = "";
      }
    }
  }
};
