import { createEodash, store } from "@eodash/eodash";
import information from "./information";
import container from "./container";

export default createEodash({
  id: "template-id",
  stacEndpoint:
    "https://eurodatacube.github.io/eodash-catalog/RACE/catalog.json",
  // https://eodash.github.io/eodash/branding.html
  brand: {
    name: "Dashboard",
    font: {
      family: "Poppins",
      link: new URL("./assets/poppins.css", import.meta.url).href,
    },
    logo: "/logo.png",
    errorMessage:
      "something went wrong, please contact demo@email.com if the issue persists",
    footerText: "eodash instance template",
    theme: {
      colors: {
        primary: "#004170",
        secondary: "#004170",
        background: "#fff",
        surface: "#eee",
      },
    },
  },
  template: {
    // gap size between widgets
    gap: 0,
    // internal widget provided by `@eodash/eodash`
    // https://eodash.github.io/eodash/widgets/internal-widgets.html#using-eodash-provided-internal-widgets
    background: {
      type: "internal",
      id: Symbol(),
      widget: {
        name: "EodashMap",
      },
    },
    // web component as a loader animation widget,
    // imported and registered from a CDN
    loading: {
      id: Symbol(),
      type: "web-component",
      widget: {
        // https://uiball.com/ldrs/
        link: "https://cdn.jsdelivr.net/npm/ldrs/dist/auto/mirage.js",
        tagName: "l-mirage",
        properties: {
          // using vuetify utility classes to center the loader
          // https://vuetifyjs.com/en/styles/display/#display
          class: "align-self-center justify-self-center",
          size: "120",
          speed: "2.5",
          color: "#004170",
        },
      },
    },
    widgets: [
      information,

      container,
      // custom internal widget
      // checkout `src/widgets/List.vue`
      // https://eodash.github.io/eodash/widgets/internal-widgets.html#creating-your-own-internal-widget
      {
        id: Symbol(),
        title: "Tools",
        layout: { x: 0, y: 0, w: 3, h: 12 },
        widget: {
          name: "List",
          properties: {
            // props of the custom component
            outlined: false,
          },
        },
        type: "internal",
      },
      {
        defineWidget: (selected) => {
          return selected
            ? {
                id: "layercontrol",
                layout: { x: 9, y: 8, w: 3, h: 4 },
                title: "Layer Control",
                type: "internal",
                widget: {
                  name: "EodashLayerControl",
                },
              }
            : null;
        },
      },
      {
        id: "mapbtns",
        layout: { x: 3, y: 0, w: 1, h: 2 },
        title: "Map Buttons",
        type: "internal",
        widget: {
          name: "EodashMapBtns",
        },
      },
    ],
  },
});
