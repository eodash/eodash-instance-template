import { mdiViewDashboard } from "@mdi/js";

/** @type {import("@eodash/eodash").SingleTemplate} */
export default {
  gap: 16,
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
      properties: {
        enableCompare: true,
      },
    },
  },
  widgets: [
    {
      id: Symbol(),
      type: "internal",
      title: "Tools",
      layout: { x: 0, y: 0, w: 3, h: 1 },
      widget: {
        name: "EodashTools",
        properties: {
          layoutTarget: "light",
          layoutIcon: mdiViewDashboard,
          itemFilterConfig: {
            resultType: "cards",
            subTitleProperty: "subtitle",
            imageProperty: "thumbnail",
            aggregateResults: "collection_group",
            style: {
              "--form-flex-direction": "row",
            },
          },
        },
      },
    },
    {
      id: Symbol(),
      type: "internal",
      title: "Layers",
      layout: { x: 0, y: 1, w: 3, h: 6 },
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
              layout: { x: 9, y: 0, w: 3, h: 6 },
              type: "internal",
              widget: {
                name: "EodashStacInfo",
                properties: {
                  showIndicatorsBtn: false,
                  showLayoutSwitcher: false,
                },
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
              layout: { x: 5, y: 8, w: 2, h: 4 },
              title: "Date",
              widget: {
                name: "EodashDatePicker",
                properties: {
                  hintText: `<b>Hint:</b> closest available date is displayed <br />
                                on map (see Analysis Layers)`,
                },
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
              layout: { x: 8, y: 0, w: 1, h: 2 },
              title: "Buttons",
              type: "internal",
              widget: {
                name: "EodashMapBtns",
              },
            }
          : null;
      },
    },
    {
      defineWidget: (selectedSTAC) =>
        selectedSTAC?.links.some((l) => l.rel === "service")
          ? {
              id: Symbol(),
              type: "internal",
              title: "Processes",
              layout: { x: 0, y: 7, w: 3, h: 5 },
              widget: {
                name: "EodashProcess",
              },
            }
          : null,
    },
  ],
};
