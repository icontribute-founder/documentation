function getDocItems(names, type) {
    return names.map((e) => {
        return {
            label: e,
            id: `firebase/${type}/${e}`,
            type: "doc",
        };
    });
}

const classes = getDocItems(
    ["Authentication", "OpportunityCollection"],
    "classes"
);

const interfaces = getDocItems(["Event", "EventQuery"], "interfaces");

const enums = getDocItems(
    ["EventCategory", "EventType", "HostingType"],
    "enums"
);

module.exports = {
    docs: [
        { label: "Overview", id: "overview", type: "doc" },
        {
            label: "Firebase Wrapper",
            type: "category",
            items: [
                {
                    label: "Getting Started",
                    id: "firebase/start",
                    type: "doc",
                },
                ...classes,
                {
                    label: "Models",
                    type: "category",
                    items: interfaces,
                },
                {
                    label: "Enums",
                    type: "category",
                    items: enums,
                },
            ],
        },
    ],
};
