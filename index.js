const Cite = require('citation-js')

Cite.plugins.add('ref', {
    output: {
        type: (...args) => console.log(args)
    }
})


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
    "source": "Profile of undergraduates in U.S. Postsecondary education Institutions: 2003–04: With a Special Analysis of Community College Students (NCES 2006-184). ",
    "publisher-name": "National  Center for Education Statistics, U.S. Department of Education: ",
    "publisher-loc": "Washington, DC:",
    "publisher": "National  Center for Education Statistics, U.S. Department of Education: ",
    "publisher-place": "Washington, DC:",
    "container-title": "html",
    "issued": {
        "date-parts": [
            {
                "year": 2006,
                "day": 10,
                "month": 10
            }
        ]
    },
    "label": '[12]',
}

const reference = new Cite(data1);

const output = reference.format("bibliography", {
    template: 'apa',
    format: 'html',
})

console.log(output)