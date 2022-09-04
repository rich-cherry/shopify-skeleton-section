customElements.get('COMPONENT-NAME') || customElements.define('COMPONENT-NAME',
  class extends HTMLElement {
    constructor() {
      super()
    }
    connectedCallback() { }

  }
)
