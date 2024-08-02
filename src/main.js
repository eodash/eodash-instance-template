import { reactive } from "vue";
import { store } from "@eodash/eodash";

export const eodash = reactive({
  id: "template-id",
  stacEndpoint:
    "https://eodashcatalog.eox.at/test-style/trilateral/catalog.json",
  brand: {
    name: "Dashboard",
    font: {
      family: "Poppins",
    },
    logo: "/logo.png",
    footerText:"eodash instance template",
    theme: {
      colors: {
        primary: "#004170",
        secondary: "#004170",
        background: "#fff",
        surface: "#fff",
      },
    },
  },
  template: {
    loading: {
      id: Symbol(),
      type: "web-component",
      widget: {
        // https://uiball.com/ldrs/
        link: "https://cdn.jsdelivr.net/npm/ldrs/dist/auto/mirage.js",
        tagName: "l-mirage",
        properties: {
          class: "align-self-center justify-self-center",
          size: "120",
          speed: "2.5",
          color: "#004170",
        },
      },
    },
    background: {
      id: Symbol(),
      type: "internal",
      widget: {
        name: "EodashMap",
      },
    },
    widgets: [
      {
        id: Symbol(),
        type: "internal",
        title: "Indicators",
        layout: { x: 0, y: 0, w: 3, h: 6 },
        widget: {
          name: "EodashItemFilter",
          properties: {
            aggregateResults: false,
          },
        },
      },
      {
        id: Symbol(),
        type: "internal",
        title: "Layer Control",
        layout: { x: 0, y: 6, w: 3, h: 6 },
        widget: {
          name: "EodashLayerControl",
        },
      },
      {
        defineWidget: (selectedSTAC) => {
          return selectedSTAC
            ? {
                id: "Information",
                title: "Information",
                layout: { x: 9, y: 0, w: 3, h: 12 },
                type: "web-component",
                widget: {
                  link: async () => await import("@eox/stacinfo"),
                  properties: {
                    for: store.states.currentUrl,
                    allowHtml: "true",
                    header: '["title"]',
                    tags: '["themes"]',
                    subheader: "[]",
                    properties: '["satellite","sensor","agency","extent"]',
                    featured: '["description","providers","assets","links"]',
                    footer: '["sci:citation"]',
                  },
                  tagName: "eox-stacinfo",
                },
              }
            : null;
        },
      },
      {
        defineWidget: (selectedSTAC) => {
          return selectedSTAC
            ? {
                id: "Datepicker",
                type: "internal",
                layout: { x: 5, y: 10, w: 1, h: 1 },
                title: "Datepicker",
                widget: {
                  name: "EodashDatePicker",
                },
              }
            : null;
        },
      },
      {
        defineWidget: (selected) => {
          return selected
            ? {
                id: "Buttons",
                layout: { x: 8, y: 0, w: 1, h: 1 },
                title: "Buttons",
                type: "internal",
                widget: {
                  name: "EodashMapBtns",
                },
              }
            : null;
        },
      },
    ],
  },
});

export default eodash;