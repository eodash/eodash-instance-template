/**
 *  @type {import("@eodash/eodash").InternalComponentWidget}
 **/
export default {
  id: Symbol(),
  title: "Container",
  type: "internal",
  layout: { x: 4, y: 8, w: 4, h: 4 },
  widget: {
    // an internal widget that supports holding multiple widgets in one panel
    // provided by `@eodash/eodash`
    name: "WidgetsContainer",
    properties: {
      /** @type {Omit<import("@eodash/eodash").Widget,"layout">[]} */
      widgets: [
        // web component defined in `src/elements/reset-zoom.js`
        // registered in the window and assigned a tag name using `widgets.constructorProp`
        // https://eodash.github.io/eodash/widgets/webcomponent-widgets.html#registering-web-components-in-eodash
        {
          id: "reset zoom",
          title: "Reset Zoom",
          type: "web-component",
          widget: {
            link: new URL("./elements/reset-zoom.js", import.meta.url).href,
            constructorProp: "ResetZoomBtn",
            tagName: "reset-zoom",
            properties: {
              to: 3,
            },
          },
        },
        {
          id: Symbol(),
          title: "Date Picker",
          type: "internal",
          widget: {
            name: "EodashDatePicker",
          },
        },
      ],
    },
  },
};
