export default class Slider {
  constructor(parent) {
    this.node = document.getElementById(parent);
    this.containers = [];
  }

  init(slides) {
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
    slides.forEach((slide, ix) => {
      // create contianer for each slide
      let container = document.createElement("div");
      container.id = slide;
      container.className = `chart-container slide ${slide}`;
      sliderWrapper.appendChild(container);
      this.containers[slide] = container;
      // create nav-buttons for each slide
      let slideLink = document.createElement("a");
      slideLink.href = "#";
      slideLink.setAttribute("data-slide", `${ix}`);
      slideLink.setAttribute("class", ix === 0 && "current");
      sliderNav.appendChild(slideLink);
    });

    this.links = this.node.querySelectorAll("#slider-nav a");
    this.wrapper = this.node.querySelector("#slider-wrapper");
    this.wrapper.style.left = "calc((100vw - 400px) / -4)";
    this.links.forEach(link => this.slide(link));
    return this.containers;
  }

  slide(element) {
    const self = this;
    element.addEventListener(
      "click",
      function(e) {
        e.preventDefault();
        const a = this;
        self.setCurrentLink(a);
        const index = parseInt(a.getAttribute("data-slide"), 10) + 1;
        const currentSlide = document.querySelector(
          ".slide:nth-child(" + index + ")"
        );
        self.wrapper.style.left = "-" + currentSlide.offsetLeft + "px";
      },
      false
    );
  }

  setCurrentLink(link) {
    // add current class to link
    link.className = "current";
    // empty other links class names
    const links = link.parentNode.querySelectorAll("a");
    links.forEach(l => {
      if (l !== link) {
        l.className = "";
      }
    });
  }
}
