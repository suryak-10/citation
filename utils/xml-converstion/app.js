let xml1 = `<?xml version="1.0" encoding="utf-8"?>
<style xmlns="http://purl.org/net/xbiblio/csl" class="in-text" version="1.0"
    demote-non-dropping-particle="sort-only">
    <info>
        <title>IEEE</title>
        <id>http://www.zotero.org/styles/ieee</id>
        <link href="http://www.zotero.org/styles/ieee" rel="self" />
        <!-- <link
        href="https://ieeeauthorcenter.ieee.org/wp-content/uploads/IEEE-Reference-Guide.pdf"
        rel="documentation"/> - 2018 guidelines -->
        <link
            href="http://journals.ieeeauthorcenter.ieee.org/wp-content/uploads/sites/7/IEEE_Reference_Guide.pdf"
            rel="documentation" />
        <link
            href="https://journals.ieeeauthorcenter.ieee.org/your-role-in-article-production/ieee-editorial-style-manual/"
            rel="documentation" />
        <author>
            <name>Michael Berkowitz</name>
            <email>mberkowi@gmu.edu</email>
        </author>
        <contributor>
            <name>Julian Onions</name>
            <email>julian.onions@gmail.com</email>
        </contributor>
        <contributor>
            <name>Rintze Zelle</name>
            <uri>http://twitter.com/rintzezelle</uri>
        </contributor>
        <contributor>
            <name>Stephen Frank</name>
            <uri>http://www.zotero.org/sfrank</uri>
        </contributor>
        <contributor>
            <name>Sebastian Karcher</name>
        </contributor>
        <contributor>
            <name>Giuseppe Silano</name>
            <email>g.silano89@gmail.com</email>
            <uri>http://giuseppesilano.net</uri>
        </contributor>
        <contributor>
            <name>Patrick O'Brien</name>
        </contributor>
        <contributor>
            <name>Brenton M. Wiernik</name>
        </contributor>
        <contributor>
            <name>Oliver Couch</name>
            <email>oliver.couch@gmail.com</email>
        </contributor>
        <category citation-format="numeric" />
        <category field="engineering" />
        <category field="generic-base" />
        <summary>IEEE style as per the 2021 guidelines, V 01.29.2021.</summary>
        <updated>2023-04-18T00:52:46+10:00</updated>
        <rights license="http://creativecommons.org/licenses/by-sa/3.0/">This work is licensed under
            a Creative Commons Attribution-ShareAlike 3.0 License</rights>
    </info>
    <locale xml:lang="en">
        <date form="text">
            <date-part name="month" form="short" suffix=" " />
            <date-part name="day" form="numeric-leading-zeros" suffix=", " />
            <date-part name="year" />
        </date>
        <terms>
            <term name="chapter" form="short">ch.</term>
            <term name="presented at">presented at the</term>
            <term name="available at">available</term>
        </terms>
    </locale>
    <!-- Macros -->
    <macro name="status">
        <choose>
            <if variable="page issue volume" match="none">
                <text variable="status" text-case="capitalize-first" suffix="" font-weight="bold" />
            </if>
        </choose>
    </macro>
    <macro name="edition">
        <choose>
            <if
                type="bill book chapter graphic legal_case legislation motion_picture paper-conference report song"
                match="any">
                <choose>
                    <if is-numeric="edition">
                        <group delimiter=" ">
                            <number variable="edition" form="ordinal" />
                            <text term="edition" form="short" />
                        </group>
                    </if>
                    <else>
                        <text variable="edition" text-case="capitalize-first" suffix="." />
                    </else>
                </choose>
            </if>
        </choose>
    </macro>
    <macro name="issued">
        <choose>
            <if type="article-journal report" match="any">
                <date variable="issued">
                    <date-part name="month" form="short" suffix=" " />
                    <date-part name="year" form="long" />
                </date>
            </if>
            <else-if type="bill book chapter graphic legal_case legislation song thesis" match="any">
                <date variable="issued">
                    <date-part name="year" form="long" />
                </date>
            </else-if>
            <else-if type="paper-conference" match="any">
                <date variable="issued">
                    <date-part name="month" form="short" />
                    <date-part name="year" prefix=" " />
                </date>
            </else-if>
            <else-if type="motion_picture" match="any">
                <date variable="issued" form="text" prefix="(" suffix=")" />
            </else-if>
            <else>
                <date variable="issued" form="text" />
            </else>
        </choose>
    </macro>
    <macro name="author">
        <names variable="author">
            <name and="text" et-al-min="7" et-al-use-first="1" initialize-with=". " />
            <label form="short" prefix=", " text-case="capitalize-first" />
            <et-al font-style="italic" />
            <substitute>
                <names variable="editor" />
                <names variable="translator" />
            </substitute>
        </names>
    </macro>
    <macro name="editor">
        <names variable="editor">
            <name initialize-with=". " delimiter=", " and="text" />
            <label form="short" prefix=", " text-case="capitalize-first" />
        </names>
    </macro>
    <macro name="locators">
        <group delimiter=", ">
            <text macro="edition" />
            <group delimiter=" ">
                <text term="volume" form="short" />
                <number variable="volume" form="numeric" />
            </group>
            <group delimiter=" ">
                <number variable="number-of-volumes" form="numeric" />
                <text term="volume" form="short" plural="true" />
            </group>
            <group delimiter=" ">
                <text term="issue" form="short" />
                <number variable="issue" form="numeric" />
            </group>
        </group>
    </macro>
    <macro name="title">
        <choose>
            <if type="bill book graphic legal_case legislation motion_picture song" match="any">
                <text variable="title" font-style="italic" />
            </if>
            <else>
                <text variable="title" quotes="true" />
            </else>
        </choose>
    </macro>
    <macro name="publisher">
        <choose>
            <if
                type="bill book chapter graphic legal_case legislation motion_picture paper-conference song"
                match="any">
                <group delimiter=": ">
                    <text variable="publisher-place" data-name="publisher-place" />
                    <text variable="publisher" />
                </group>
            </if>
            <else>
                <group delimiter=", ">
                    <text variable="publisher" />
                    <text variable="publisher-place" data-name="publisher-place" />
                </group>
            </else>
        </choose>
    </macro>
    <macro name="event">
        <choose>
            <!-- Published Conference Paper -->
            <if type="paper-conference speech" match="any">
                <choose>
                    <if variable="container-title" match="any">
                        <group delimiter=" ">
                            <text term="in" />
                            <text variable="container-title" font-style="italic" />
                        </group>
                    </if>
                    <!-- Unpublished Conference Paper -->
                    <else>
                        <group delimiter=" ">
                            <text term="presented at" />
                            <text variable="event" />
                        </group>
                    </else>
                </choose>
            </if>
        </choose>
    </macro>
    <macro name="access">
        <choose>
            <if type="webpage post post-weblog" match="any">
                <!-- https://url.com/ (accessed Mon. DD, YYYY). -->
                <choose>
                    <if variable="URL">
                        <group prefix=" " delimiter=" ">
                            <text variable="URL" />
                            <group delimiter=" " prefix="(" suffix=").">
                                <text term="accessed" />
                                <date variable="accessed" form="text" />
                            </group>
                        </group>
                    </if>
                </choose>
            </if>
            <else-if match="any" variable="DOI">
                <!-- doi: 10.1000/xyz123. -->
                <text variable="DOI" prefix=" doi: " suffix="." />
            </else-if>
            <else-if variable="URL">
                <!-- Accessed: Mon. DD, YYYY. [Medium]. Available: https://URL.com/ -->
                <group delimiter=". " prefix=" " suffix=". ">
                    <!-- Accessed: Mon. DD, YYYY. -->
                    <group delimiter=": ">
                        <text term="accessed" text-case="capitalize-first" />
                        <date variable="accessed" form="text" />
                    </group>
                    <!-- [Online Video]. -->
                    <group prefix="[" suffix="]" delimiter=" ">
                        <choose>
                            <if variable="medium" match="any">
                                <text variable="medium" text-case="capitalize-first" />
                            </if>
                            <else>
                                <text term="online" text-case="capitalize-first" />
                                <choose>
                                    <if type="motion_picture">
                                        <text term="video" text-case="capitalize-first" />
                                    </if>
                                </choose>
                            </else>
                        </choose>
                    </group>
                </group>
                <!-- Available: https://URL.com/ -->
                <group delimiter=": " prefix=" ">
                    <text term="available at" text-case="capitalize-first" />
                    <text variable="URL" />
                </group>
            </else-if>
        </choose>
    </macro>
    <macro name="page">
        <choose>
            <if type="article-journal" variable="number" match="all">
                <group delimiter=" ">
                    <text value="Art." />
                    <text term="issue" form="short" />
                    <text variable="number" />
                </group>
            </if>
            <else>
                <group delimiter=" ">
                    <label variable="page" form="short" />
                    <text variable="page" />
                </group>
            </else>
        </choose>
    </macro>
    <macro name="citation-locator">
        <group delimiter=" ">
            <choose>
                <if locator="page">
                    <label variable="locator" form="short" />
                </if>
                <else>
                    <label variable="locator" form="short" text-case="capitalize-first" />
                </else>
            </choose>
            <text variable="locator" />
        </group>
    </macro>
    <macro name="geographic-location">
        <group delimiter=", " suffix=".">
            <choose>
                <if variable="publisher-place" data-name="publisher-place">
                    <text variable="publisher-place" data-name="publisher-place" text-case="title" />
                </if>
                <else-if variable="event-place">
                    <text variable="event-place" text-case="title" />
                </else-if>
            </choose>
        </group>
    </macro>
    <!-- Series -->
    <macro name="collection">
        <choose>
            <if variable="collection-title" match="any">
                <text term="in" suffix=" " />
                <group delimiter=", " suffix=". ">
                    <text variable="collection-title" />
                    <text variable="collection-number" prefix="no. " />
                    <text variable="volume" prefix="vol. " />
                </group>
            </if>
        </choose>
    </macro>
    <!-- Citation -->
    <citation collapse="citation-number">
        <sort>
            <key variable="citation-number" />
        </sort>
        <layout delimiter=", ">
            <group prefix="[" suffix="]" delimiter=", ">
                <text variable="citation-number" />
                <text macro="citation-locator" />
            </group>
        </layout>
    </citation>
    <!-- Bibliography -->
    <bibliography entry-spacing="0" second-field-align="flush">
        <layout>
            <!-- Citation Number -->
            <text variable="citation-number" prefix="[" suffix="]" />
            <!-- Author(s) -->
            <text macro="author" suffix=", " />
            <!-- Rest of Citation -->
            <choose>
                <!-- Specific Formats -->
                <if type="article-journal">
                    <group delimiter=", ">
                        <text macro="title" />
                        <text variable="container-title" font-style="italic" form="short" />
                        <text macro="locators" />
                        <text macro="page" />
                        <text macro="issued" />
                        <text macro="status" />
                    </group>
                    <choose>
                        <if variable="URL DOI" match="none">
                            <text value="." />
                        </if>
                        <else>
                            <text value="," />
                        </else>
                    </choose>
                    <text macro="access" />
                </if>
                <else-if type="paper-conference speech" match="any">
                    <group delimiter=", " suffix=", ">
                        <text macro="title" />
                        <text macro="event" />
                        <text macro="editor" />
                    </group>
                    <text macro="collection" />
                    <group delimiter=", " suffix=".">
                        <text macro="publisher" />
                        <text macro="issued" />
                        <text macro="page" />
                        <text macro="status" />
                    </group>
                    <text macro="access" />
                </else-if>
                <else-if type="chapter">
                    <group delimiter=", " suffix=", ">
                        <text macro="title" />
                        <group delimiter=" ">
                            <text term="in" suffix=" " />
                            <text variable="container-title" font-style="italic" />
                        </group>
                    </group>
                    <text macro="editor" suffix=", " />
                    <text macro="edition" />
                    <text macro="collection" />
                    <group delimiter=", " suffix=".">
                        <text macro="publisher" />
                        <text macro="issued" />
                        <text macro="page" />
                    </group>
                    <text macro="access" />
                </else-if>
                <else-if type="report">
                    <group delimiter=", " suffix=".">
                        <text macro="title" />
                        <text macro="publisher" />
                        <group delimiter=" ">
                            <text variable="genre" />
                            <text variable="number" />
                        </group>
                        <text macro="issued" />
                    </group>
                    <text macro="access" />
                </else-if>
                <else-if type="thesis">
                    <group delimiter=", " suffix=".">
                        <text macro="title" />
                        <text variable="genre" />
                        <text macro="publisher" />
                        <text macro="issued" />
                    </group>
                    <text macro="access" />
                </else-if>
                <else-if type="webpage post-weblog post" match="any">
                    <group delimiter=", " suffix=".">
                        <text macro="title" />
                        <text variable="container-title" font-style="italic" />
                        <text macro="issued" />
                    </group>
                    <text macro="access" />
                </else-if>
                <else-if type="patent">
                    <group delimiter=", ">
                        <text macro="title" />
                        <text variable="number" />
                        <text macro="issued" />
                    </group>
                    <text macro="access" />
                </else-if>
                <!-- Online Video -->
                <else-if type="motion_picture">
                    <text macro="geographic-location" suffix=". " />
                    <group delimiter=", " suffix=".">
                        <text macro="title" />
                        <text macro="issued" />
                    </group>
                    <text macro="access" />
                </else-if>
                <!-- Generic/Fallback Formats -->
                <else-if type="bill book graphic legal_case legislation report song" match="any">
                    <group delimiter=", " suffix=". ">
                        <text macro="title" />
                        <text macro="locators" />
                    </group>
                    <text macro="collection" />
                    <group delimiter=", " suffix=".">
                        <text macro="publisher" />
                        <text macro="issued" />
                        <text macro="page" />
                    </group>
                    <text macro="access" />
                </else-if>
                <else-if
                    type="article-magazine article-newspaper broadcast interview manuscript map patent personal_communication song speech thesis webpage"
                    match="any">
                    <group delimiter=", " suffix=".">
                        <text macro="title" />
                        <text variable="container-title" font-style="italic" />
                        <text macro="locators" />
                        <text macro="publisher" />
                        <text macro="page" />
                        <text macro="issued" />
                    </group>
                    <text macro="access" />
                </else-if>
                <else>
                    <group delimiter=", " suffix=". ">
                        <text macro="title" />
                        <text variable="container-title" font-style="italic" />
                        <text macro="locators" />
                    </group>
                    <text macro="collection" />
                    <group delimiter=", " suffix=".">
                        <text macro="publisher" />
                        <text macro="page" />
                        <text macro="issued" />
                    </group>
                    <text macro="access" />
                </else>
            </choose>
        </layout>
    </bibliography>
</style>
    `

let parser = new DOMParser();
xmlDoc = parser.parseFromString(xml1, 'application/xml');


// const texts = [...xmlDoc.querySelectorAll('text[variable], date-part, date, names')]
// // const texts = [...xmlDoc.querySelectorAll('*')]
// // console.log(texts)
// texts.forEach(el => {
//     const attr = {
//         tag: '',
//         prefix: el.getAttribute('prefix') || '',
//         suffix: el.getAttribute('suffix') || '',
//     }
//     const tagName = el.tagName;
//     if (tagName == 'text' || tagName == 'date') {
//         attr.tag = el.getAttribute('variable') || el.getAttribute('macro');
//     } else if (tagName == 'date-part') {
//         console.log(el.getAttribute('name'));
//         attr.tag = el.getAttribute('name');
//     } else if (tagName == 'names') {
//         let variable = el.getAttribute('variable');
//         console.log({ variable });
//         el.querySelectorAll('name').forEach(nameEl => {
//             nameEl
//             nameEl.setAttribute('prefix', `‹r-${variable}›` + attr.prefix);
//             nameEl.setAttribute('suffix', attr.suffix + `‹/r-${variable}›`);
//         });
//         attr.tag = variable + 's';
//     }
//     el.setAttribute('prefix', `‹r-${attr.tag}›` + attr.prefix);
//     el.setAttribute('suffix', attr.suffix + `‹/r-${attr.tag}›`);
//     console.log(el.tagName);
// });

// let xmlSerializer = new XMLSerializer();
// const finalXml = xmlSerializer.serializeToString(xmlDoc);
// console.log(finalXml);

const xml2 = `<div id="output-container"><r-citation-number><page>1</page>.</r-citation-number> <r-family>Centurión, </r-family> <r-given>D</r-given>, <r-family>Cobos-Puc, </r-family> <r-given>LE</r-given>, <r-family>Ramírez-Rosas, </r-family> <r-given>MB</r-given>, <r-family>Gómez-Díaz, </r-family> <r-given>B</r-given>, <r-family>Sánchez-López, </r-family> <r-given>A</r-given>, <r-family>Villalón, </r-family> <r-given>CM</r-given>. <r-title><r-r-title>Pithed rat model for searching vasoactive drugs and studying the modulation of the sympathetic and non- adrenergic non-cholinergic outflow. </r-r-title></r-title>. <r-container-r-title>Models in Neuropharmacology .</r-container-r-title> Published online <r-issued><date-parts>2009</date-parts></r-issued><r-page>:pps. 91-97.</r-page>.
</div>`

let doc = null

const removeParentTags = ({ xml }) => {
    const xmlDoc = new DOMParser().parseFromString(xml, 'application/xml');
    doc = xmlDoc;
    console.log(xmlDoc);
    let out = '';
    function loopParent(targetParent){
        targetParent.forEach(element => {
            if(element.childElementCount){
                loopParent(element.childNodes);
            }else{
                // console.log(element.childElementCount);
                out +=  element.nodeType == 3 ?element.textContent : element.outerHTML
                console.log(element.nodeType, element);
            }
        });
    }
    const targetParent = xmlDoc.childNodes[0].childNodes; 
    loopParent(targetParent);
    console.log(out);
}   

removeParentTags({ xml: xml2 })