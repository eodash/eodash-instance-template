export class ResetZoomBtn extends HTMLElement {
  /**
   * defines the current zoom.
   * triggers a rerender when a value is set
   */
  #currentZoom = {
    _timeout: undefined,
    renderEl: () => {
      this.render();
      const btn = this.shadowRoot.querySelector("button");
      if (btn) {
        btn.onclick = this.#onBtnClick;
      }
    },
    _value: 0,
    get value() {
      return this._value;
    },
    set value(val) {
      this._value = val;
      clearTimeout(this._timeout);
      this._timeout = setTimeout(() => {
        this.renderEl();
      });
    },
  };

  /** map element selector */
  for = "eox-map";
  /** the desired value to reset the zoom to */
  to = 4;

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
    /**
     * updates the current zoom value from URLSearchParams
     * @param {string} query
     */
    const updateCurrentZoom = (query) => {
      const searchParams = new URLSearchParams(query);
      this.#currentZoom.value = Number(searchParams.get("z"));
    };

    // updating pushState function to watch the url query
    // and update the current zoom
    const pushState = history.pushState;
    window.history.pushState = function (...args) {
      updateCurrentZoom(/** @type {string} */ (args?.[2]));
      return pushState.apply(window.history, arguments);
    };
  }

  // reset zoom on click
  #onBtnClick = (e) => {
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set("z", this.to.toString() ?? "");
    window.history.pushState(null, "", `?${searchParams}`);
    const map = document.querySelector(this.for);
    //@ts-expect-error eox-map attribute
    map.zoom = this.to;
  };

  static get observedAttributes() {
    return ["to"];
  }

  attributeChangedCallback(name, _oldValue, newValue) {
    this[name] = newValue;
  }

  render() {
    return (this.shadowRoot.innerHTML = `
    <style>
        :host {
        width: 100%;
        height: 100%
        }
    </style>

      <h2 class="text"> your current zoom is ${this.#currentZoom.value} </h2>
      <button id="reset"> reset zoom </button>
        `);
  }
}
