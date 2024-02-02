const { currentUrl, mapInstace } = window.eodashStore.states
const stacStore = window.eodashStore.stac.useSTAcStore()

export default {
    id: 'template-id',
    stacEndpoint: 'https://eurodatacube.github.io/eodash-catalog/RACE/catalog.json',
    routes: [{ title: 'External', to: 'https://google.com' }, { title: 'Welcome', to: '/' }],
    brand: {
        font: {
            family: "Poppins",
        },
        name: "Dashboard",
        shortName: 'dashboard',
        logo: new URL('/logo.png', import.meta.url).href,
        theme: {
            colors: {
                primary: '#880808',
                secondary: "#AA4A44",
                background: '#d3d3d3',
                surface: "#d3d3d3"
            }
        }
    },
    template: {
        background: {
            module: {
                src: new URL('/wms-layer-images/index.html', import.meta.url).href,
            },
            type: 'iframe'
        },
        modules: [
            {
                title: "container",
                layout: { "x": 0, "y": 0, "w": 3, "h": 8 },
                module: {
                    name: 'ModulesContainer',
                    props: {
                        modules: [
                            {
                                title: 'Reset Map Zoom',
                                module: {
                                    link: new URL('/reset-zoom-btn/ResetZoom.LvPDZn5n.js', import.meta.url).href,
                                    properties: {
                                        to: 4,
                                        map: mapInstace
                                    },
                                    tagName: 'reset-zoom-btn'
                                },
                                type: 'web-component'
                            },
                            {
                                title: 'Information',
                                module: {
                                    link: '@eox/stacinfo',
                                    node_module: true,
                                    properties: {
                                        for: currentUrl,
                                        allowHtml: "true",
                                        styleOverride: "#properties li > .value {font-weight: normal !important;}",
                                        header: "[]",
                                        subheader: "[]",
                                        properties: '["description"]',
                                        featured: "[]",
                                        footer: "[]"
                                    },
                                    tagName: 'eox-stacinfo'
                                },
                                type: 'web-component'
                            }
                        ]
                    }
                },
                type: 'internal'
            },
            {
                title: 'Tools',
                layout: { "x": 9, "y": 0, "w": 3, "h": 12 },
                module: {
                    link: '@eox/itemfilter',
                    node_module: true,
                    properties: {
                        config: {
                            onSelect:async (item)=>{
                                await stacStore.loadSelectedSTAC(item.href)
                            },
                            titleProperty: "title",
                            filterProperties: [
                                {
                                    keys: ["title", "themes"],
                                    title: "Search",
                                    type: "text",
                                    expanded: true,
                                },
                                {
                                    key: "themes",
                                    title: "Theme",
                                    type: "multiselect",
                                    featured: true
                                },
                            ],
                            aggregateResults: "themes",
                            enableHighlighting: true,
                        }
                    },
                    onMounted: async (el, store) => {
                        el.apply(store?.stac);
                    },
                    tagName: 'eox-itemfilter'
                },
                type: 'web-component'
            },
            {
                title: 'Map',
                layout: { "x": 0, "y": 8, "w": 5, "h": 4 },
                module: {
                    name: 'Map',
                },
                type: 'internal'
            },
            {
                title: 'Reset Map Zoom',
                layout: { "x": 5, "y": 10, "w": 4, "h": 2 },
                module: {
                    link: new URL('/reset-zoom-btn/ResetZoom.LvPDZn5n.js', import.meta.url).href,
                    properties: {
                        to: 4,
                        map: mapInstace
                    },
                    tagName: 'reset-zoom-btn'
                },
                type: 'web-component'
            },
        ]
    }
}