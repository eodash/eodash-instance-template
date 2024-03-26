import { createEodash } from "@eodash/eodash";
import tools from "./tools";
import basedOnWms from "./basedOnWms";
import container from "./container";
import backgroundMap from "./backgroundMap";

export default createEodash((store) => ({
  id: "template-id",
  stacEndpoint:
    "https://eurodatacube.github.io/eodash-catalog/RACE/catalog.json",
  routes: [],
  brand: {
    name: "Dashboard",
    font: {
      family: "Poppins",
    },
    theme: {
      colors: {
        primary: "#880808",
        secondary: "#AA4A44",
        background: "#d3d3d3",
        surface: "#d3d3d3",
      },
    },
  },
  template: {
    gap: 6,
    background: {
      id: Symbol(),
      type: "internal",
      widget: {
        name: "EodashMap",
      },
    }, // backgroundMap(store.states),
    widgets: [
      tools,
      {
        id: Symbol(),
        layout: { x: 5, y: 0, h: 6, w: 2 },
        title: "Date Picker",
        type: "internal",
        widget: {
          name: "EodashDatePicker",
        },
      },
      basedOnWms(store.states),
      container(store.states),
    ],
  },
}));
