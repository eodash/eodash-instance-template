import { createEodash } from "@eodash/eodash";
import information from "./information";
import container from "./container";

export default createEodash({
  id: "template-id",
  stacEndpoint:
    "https://eurodatacube.github.io/eodash-catalog/RACE/catalog.json",
  brand: {
    name: "Dashboard",
    font: {
      family: "Poppins",
    },
    logo: "/logo.png",
    errorMessage:"something went wrong, please contact demo@email.com if the issue persists", 
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
    gap: 6,
    background: {
      type: "internal",
      id: Symbol(),
      widget: {
        name: "EodashMap",
      },
    },
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
    widgets: [
      information,
      container,
      {
        id: Symbol(),
        title: "Tools",
        layout: { x: 0, y: 0, w: 3, h: 12 },
        widget: {
          name: "List",
        },
        type: "internal",
      },
      {
        id: Symbol(),
        layout: { x: 4, y: 0, h: 4, w: 4 },
        title: "Date Picker",
        type: "internal",
        widget: {
          name: "EodashDatePicker",
        },
      },
    ],
  },
});
