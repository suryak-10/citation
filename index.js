const Cite = require('citation-js');
const { ieee } = require('./csl/ieee');
const { chicagoFullNote } = require('./csl/chicagoFullNote');
const apa = require('./csl/apa');

let config = Cite.plugins.config.get('@csl')
config.templates.add("style", apa);
config.templates.add("chicagoFullNote", chicagoFullNote);

const safeHtmlFormatter = ({ value, format }) => {
    if (format == 'NormalToSafe') {
        return value.replaceAll('<', '‹').replaceAll('>', '›');
    } else {
        return value.replaceAll('‹', '<').replaceAll('›', '>');
    }
}

const data1 = [
    {
        id: "Q23571040",
        type: "article-journal",
        title: "<title>Correlation of the Base Strengths of Amines 1</title>",
        DOI: "10.1021/ja01577a030",
        author: [
            {
                given: "H. K.",
                family: "Hall"
            },
        ],
        issued: { "date-parts": [[1957, 1, 1]] },
        "container-title": "Journal of the American Chemical Society",
        volume: "79",
        issue: "20",
        page: "5441-5444"
    }
];

const data2 = {
    "label": "18. ",
    "author": [
        {
            "given": "L., ",
            "family": "Horn, "
        },
        {
            "given": "S.",
            "family": "Nevill, "
        }
    ],
    "surname": "Nevill, ",
    "given": "S.",
    "x": "and ",
    "year": "(2006). ",
    "title": "This is surya's title",
    "source": "Profile of undergraduates in U.S. Postsecondary education Institutions: 2003–04: With a Special Analysis of Community College Students (NCES 2006-184). ",
    "publisher-name": "National  Center for Education Statistics, U.S. Department of Education: ",
    "publisher-loc": "Washington, DC:",
    "publisher": "National  Center for Education Statistics, U.S. Department of Education: ",
    "publisher-place": "Washington, DC:",
    "container-title": "html",
    issued: { "date-parts": [[1957, 1, 1]] },
    "label": '[12]',
    "type": "bill",
    "organizer": ["Collab"],
}

const data3 = {
    "type": "article",
    "container-title": "City of Seattle, SEA Department of Neighborhoods, City of Seattle will transfer Fire Station 6 to community. Front Porch. ",
    "title": "https://frontporceh.seadttle.gov/2020/06/12/city-of-seattle-will-transfer-fire-station-6-to-community/",
    "issued": {
        "date-parts": [
            [
                2020
            ]
        ]
    },
    "author": [],
    "original-publisher-place": "original-place"
}

const data4 = {
    "type": "article-journal",
    "author": [
        {
            "family": "Aulagnier",
            "given": "P."
        }
    ],
    "title": "Birth of a body: Origin of a history.",
    "container-title": "International article-journal of Psychoanaly",
    "volume": "96",
    "issue": "5",
    "page": "1371-1401",
    "issued": [
        {
            "date-parts": [
                "2015"
            ]
        }
    ]
}



const reference1 = new Cite(data4);

const output = reference1.format("bibliography", {
    template: 'chicagoFullNote',
    format: 'text',
})

console.log({ output });

// console.log(safeHtmlFormatter({value:output, format: 'SafeToNormal'}));

