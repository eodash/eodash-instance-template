let handleMoveEnd = null;
/**
 * @type {(states:import("@eodash/eodash").EodashStore["states"])
 * =>import("@eodash/eodash").BackgroundWidget}
 * */
export default ({ mapInstance }) => ({
  id: Symbol(),
  widget: {
    link: () => import("@eox/map"),
    properties: {
      class: "fill-height fill-width overflow-none",
      center: [15, 48],
      layers: [{ type: "Tile", source: { type: "OSM" } }],
    },
    tagName: "eox-map",
    onMounted(el, _, router) {
      /** @type {any} */ (el).zoom = router.currentRoute.value.query["z"];
      mapInstance.value = /** @type {any} */ (el).map;
    },
  },
  type: "web-component",
});
