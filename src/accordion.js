class Accordion {
  constructor({ headerClass, contentClass }) {
    this.contentClass = contentClass;
    this.headers = document.querySelectorAll(headerClass);
    this.contentContainers = document.querySelectorAll(contentClass);

    this.headers.forEach((header) => {
      header.addEventListener("click", (e) => {
        const clickedHeader = e.currentTarget;
        this.collapseItems(clickedHeader);
      });
    });
  }

  expand(header) {
    if (!header.nextSibling) return;

    const accordionItem = header.parentElement;

    const iconEle = accordionItem.querySelector(".Item__Header__IndicateIcon");
    iconEle.innerText = "-";

    const contentContainer = accordionItem.querySelector(this.contentClass);
    accordionItem.classList.add("-Active");
    // eslint-disable-next-line operator-linebreak
    const containerHeight =
      contentContainer.querySelector(".Item__Content").offsetHeight;
    contentContainer.style.maxHeight = `${containerHeight}px`;
  }

  // eslint-disable-next-line
  collapse(header) {
    const accordionItem = header.parentElement;
    const iconEle = accordionItem.querySelector(".Item__Header__IndicateIcon");
    iconEle.innerText = "+";

    const contentContainer = accordionItem.querySelector(
      ".Item__ContentContainer"
    );

    accordionItem.classList.remove("-Active");
    contentContainer.style.maxHeight = null;
  }

  collapseItems(clickedHeader) {
    this.headers.forEach((header) => {
      if (!header.nextSibling) return;

      const accordionItem = header.parentElement;
      if (
        // eslint-disable-next-line
        header === clickedHeader &&
        !accordionItem.classList.contains("-Active")
      ) {
        this.expand(header);
      } else {
        this.collapse(header);
      }
    });
  }

  collapseAll() {
    this.headers.forEach((header) => {
      if (!header.nextSibling) return;
      this.collapse(header);
    });
  }
}

module.exports = Accordion;
