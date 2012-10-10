exports.blocks = [
    {
        "name": "b-page"
    },
    {
        "name": "b-wrap"
    },
    {
        "name": "b-controls",
        "elems": [
            {
                "name": "layout"
            },
            {
                "name": "item",
                "mods": [
                    {
                        "name": "action",
                        "vals": [
                            "search",
                            "import",
                            "export",
                            "add",
                            "hide"
                        ]
                    }
                ]
            }
        ],
        "mods": [
            {
                "name": "mode",
                "vals": [
                    "inner"
                ]
            }
        ]
    },
    {
        "name": "b-lectorium"
    },
    {
        "name": "b-lec-date",
        "mods": [
            {
                "name": "pass",
                "vals": [
                    "true"
                ]
            }
        ],
        "elems": [
            {
                "name": "title"
            }
        ]
    },
    {
        "name": "b-lecture",
        "elems": [
            {
                "name": "time"
            },
            {
                "name": "title"
            },
            {
                "name": "lecturer"
            },
            {
                "name": "thesis-list"
            },
            {
                "name": "thesis"
            }
        ],
        "mods": [
            {
                "name": "recent",
                "vals": [
                    "true"
                ]
            }
        ]
    },
    {
        "name": "b-user-link"
    },
    {
        "name": "b-panel",
        "mods": [
            {
                "name": "visible",
                "vals": [
                    "false"
                ]
            }
        ]
    },
    {
        "name": "b-imexport",
        "mods": [
            {
                "name": "mode",
                "vals": [
                    "import",
                    "export"
                ]
            }
        ]
    },
    {
        "name": "b-edit"
    }
];
