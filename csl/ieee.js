const ieee = `<?xml version="1.0" encoding="utf-8"?><style xmlns="http://purl.org/net/xbiblio/csl" class="in-text" version="1.0" demote-non-dropping-particle="sort-only">
<info>
    <title>IEEE</title>
    <id>http://www.zotero.org/styles/ieee</id>
    <link href="http://www.zotero.org/styles/ieee" rel="self"/>
    <!-- <link
    href="https://ieeeauthorcenter.ieee.org/wp-content/uploads/IEEE-Reference-Guide.pdf"
    rel="documentation"/> - 2018 guidelines -->
    <link href="http://journals.ieeeauthorcenter.ieee.org/wp-content/uploads/sites/7/IEEE_Reference_Guide.pdf" rel="documentation"/>
    <link href="https://journals.ieeeauthorcenter.ieee.org/your-role-in-article-production/ieee-editorial-style-manual/" rel="documentation"/>
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
    <category citation-format="numeric"/>
    <category field="engineering"/>
    <category field="generic-base"/>
    <summary>IEEE style as per the 2021 guidelines, V 01.29.2021.</summary>
    <updated>2023-04-18T00:52:46+10:00</updated>
    <rights license="http://creativecommons.org/licenses/by-sa/3.0/">This work is licensed under
        a Creative Commons Attribution-ShareAlike 3.0 License</rights>
</info>
<locale xml:lang="en">
    <date form="text" prefix="‹r-null›" suffix="‹/r-null›">
        <date-part name="month" form="short" suffix=" ‹/r-month›" prefix="‹r-month›"/>
        <date-part name="day" form="numeric-leading-zeros" suffix=", ‹/r-day›" prefix="‹r-day›"/>
        <date-part name="year" prefix="‹r-year›" suffix="‹/r-year›"/>
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
            <text variable="status" text-case="capitalize-first" suffix="‹/r-status›" font-weight="bold" prefix="‹r-status›"/>
        </if>
    </choose>
</macro>
<macro name="edition">
    <choose>
        <if type="bill book chapter graphic legal_case legislation motion_picture paper-conference report song" match="any">
            <choose>
                <if is-numeric="edition">
                    <group delimiter=" ">
                        <number variable="edition" form="ordinal"/>
                        <text term="edition" form="short"/>
                    </group>
                </if>
                <else>
                    <text variable="edition" text-case="capitalize-first" suffix=".‹/r-edition›" prefix="‹r-edition›"/>
                </else>
            </choose>
        </if>
    </choose>
</macro>
<macro name="issued">
    <choose>
        <if type="article-journal report" match="any">
            <date variable="issued" prefix="‹r-issued›" suffix="‹/r-issued›">
                <date-part name="month" form="short" suffix=" ‹/r-month›" prefix="‹r-month›"/>
                <date-part name="year" form="long" prefix="‹r-year›" suffix="‹/r-year›"/>
            </date>
        </if>
        <else-if type="bill book chapter graphic legal_case legislation song thesis" match="any">
            <date variable="issued" prefix="‹r-issued›" suffix="‹/r-issued›">
                <date-part name="year" form="long" prefix="‹r-year›" suffix="‹/r-year›"/>
            </date>
        </else-if>
        <else-if type="paper-conference" match="any">
            <date variable="issued" prefix="‹r-issued›" suffix="‹/r-issued›">
                <date-part name="month" form="short" prefix="‹r-month›" suffix="‹/r-month›"/>
                <date-part name="year" prefix="‹r-year› " suffix="‹/r-year›"/>
            </date>
        </else-if>
        <else-if type="motion_picture" match="any">
            <date variable="issued" form="text" prefix="‹r-issued›(" suffix=")‹/r-issued›"/>
        </else-if>
        <else>
            <date variable="issued" form="text" prefix="‹r-issued›" suffix="‹/r-issued›"/>
        </else>
    </choose>
</macro>
<macro name="author">
    <names variable="author" prefix="‹r-authors›" suffix="‹/r-authors›">
        <name and="text" et-al-min="7" et-al-use-first="1" initialize-with=". " prefix="‹r-author›" suffix="‹/r-author›"/>
        <label form="short" prefix=", " text-case="capitalize-first"/>
        <et-al font-style="italic"/>
        <substitute>
            <names variable="editor" prefix="‹r-editors›" suffix="‹/r-editors›"/>
            <names variable="translator" prefix="‹r-translators›" suffix="‹/r-translators›"/>
        </substitute>
    </names>
</macro>
<macro name="editor">
    <names variable="editor" prefix="‹r-editors›" suffix="‹/r-editors›">
        <name initialize-with=". " delimiter=", " and="text" prefix="‹r-editor›" suffix="‹/r-editor›"/>
        <label form="short" prefix=", " text-case="capitalize-first"/>
    </names>
</macro>
<macro name="locators">
    <group delimiter=", ">
        <text macro="edition"/>
        <group delimiter=" ">
            <text term="volume" form="short"/>
            <number variable="volume" form="numeric"/>
        </group>
        <group delimiter=" ">
            <number variable="number-of-volumes" form="numeric"/>
            <text term="volume" form="short" plural="true"/>
        </group>
        <group delimiter=" ">
            <text term="issue" form="short"/>
            <number variable="issue" form="numeric"/>
        </group>
    </group>
</macro>
<macro name="title">
    <choose>
        <if type="bill book graphic legal_case legislation motion_picture song" match="any">
            <text variable="title" font-style="italic" prefix="‹r-title›" suffix="‹/r-title›"/>
        </if>
        <else>
            <text variable="title" quotes="true" prefix="‹r-title›" suffix="‹/r-title›"/>
        </else>
    </choose>
</macro>
<macro name="publisher">
    <choose>
        <if type="bill book chapter graphic legal_case legislation motion_picture paper-conference song" match="any">
            <group delimiter=": ">
                <text variable="publisher-place" data-name="publisher-place" prefix="‹r-publisher-place›" suffix="‹/r-publisher-place›"/>
                <text variable="publisher" prefix="‹r-publisher›" suffix="‹/r-publisher›"/>
            </group>
        </if>
        <else>
            <group delimiter=", ">
                <text variable="publisher" prefix="‹r-publisher›" suffix="‹/r-publisher›"/>
                <text variable="publisher-place" data-name="publisher-place" prefix="‹r-publisher-place›" suffix="‹/r-publisher-place›"/>
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
                        <text term="in"/>
                        <text variable="container-title" font-style="italic" prefix="‹r-container-title›" suffix="‹/r-container-title›"/>
                    </group>
                </if>
                <!-- Unpublished Conference Paper -->
                <else>
                    <group delimiter=" ">
                        <text term="presented at"/>
                        <text variable="event" prefix="‹r-event›" suffix="‹/r-event›"/>
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
                        <text variable="URL" prefix="‹r-URL›" suffix="‹/r-URL›"/>
                        <group delimiter=" " prefix="(" suffix=").">
                            <text term="accessed"/>
                            <date variable="accessed" form="text" prefix="‹r-accessed›" suffix="‹/r-accessed›"/>
                        </group>
                    </group>
                </if>
            </choose>
        </if>
        <else-if match="any" variable="DOI">
            <!-- doi: 10.1000/xyz123. -->
            <text variable="DOI" prefix="‹r-DOI› doi: " suffix=".‹/r-DOI›"/>
        </else-if>
        <else-if variable="URL">
            <!-- Accessed: Mon. DD, YYYY. [Medium]. Available: https://URL.com/ -->
            <group delimiter=". " prefix=" " suffix=". ">
                <!-- Accessed: Mon. DD, YYYY. -->
                <group delimiter=": ">
                    <text term="accessed" text-case="capitalize-first"/>
                    <date variable="accessed" form="text" prefix="‹r-accessed›" suffix="‹/r-accessed›"/>
                </group>
                <!-- [Online Video]. -->
                <group prefix="[" suffix="]" delimiter=" ">
                    <choose>
                        <if variable="medium" match="any">
                            <text variable="medium" text-case="capitalize-first" prefix="‹r-medium›" suffix="‹/r-medium›"/>
                        </if>
                        <else>
                            <text term="online" text-case="capitalize-first"/>
                            <choose>
                                <if type="motion_picture">
                                    <text term="video" text-case="capitalize-first"/>
                                </if>
                            </choose>
                        </else>
                    </choose>
                </group>
            </group>
            <!-- Available: https://URL.com/ -->
            <group delimiter=": " prefix=" ">
                <text term="available at" text-case="capitalize-first"/>
                <text variable="URL" prefix="‹r-URL›" suffix="‹/r-URL›"/>
            </group>
        </else-if>
    </choose>
</macro>
<macro name="page">
    <choose>
        <if type="article-journal" variable="number" match="all">
            <group delimiter=" ">
                <text value="Art."/>
                <text term="issue" form="short"/>
                <text variable="number" prefix="‹r-number›" suffix="‹/r-number›"/>
            </group>
        </if>
        <else>
            <group delimiter=" ">
                <label variable="page" form="short"/>
                <text variable="page" prefix="‹r-page›" suffix="‹/r-page›"/>
            </group>
        </else>
    </choose>
</macro>
<macro name="citation-locator">
    <group delimiter=" ">
        <choose>
            <if locator="page">
                <label variable="locator" form="short"/>
            </if>
            <else>
                <label variable="locator" form="short" text-case="capitalize-first"/>
            </else>
        </choose>
        <text variable="locator" prefix="‹r-locator›" suffix="‹/r-locator›"/>
    </group>
</macro>
<macro name="geographic-location">
    <group delimiter=", " suffix=".">
        <choose>
            <if variable="publisher-place" data-name="publisher-place">
                <text variable="publisher-place" data-name="publisher-place" text-case="title" prefix="‹r-publisher-place›" suffix="‹/r-publisher-place›"/>
            </if>
            <else-if variable="event-place">
                <text variable="event-place" text-case="title" prefix="‹r-event-place›" suffix="‹/r-event-place›"/>
            </else-if>
        </choose>
    </group>
</macro>
<!-- Series -->
<macro name="collection">
    <choose>
        <if variable="collection-title" match="any">
            <text term="in" suffix=" "/>
            <group delimiter=", " suffix=". ">
                <text variable="collection-title" prefix="‹r-collection-title›" suffix="‹/r-collection-title›"/>
                <text variable="collection-number" prefix="‹r-collection-number›no. " suffix="‹/r-collection-number›"/>
                <text variable="volume" prefix="‹r-volume›vol. " suffix="‹/r-volume›"/>
            </group>
        </if>
    </choose>
</macro>
<!-- Citation -->
<citation collapse="citation-number">
    <sort>
        <key variable="citation-number"/>
    </sort>
    <layout delimiter=", ">
        <group prefix="[" suffix="]" delimiter=", ">
            <text variable="citation-number" prefix="‹r-citation-number›" suffix="‹/r-citation-number›"/>
            <text macro="citation-locator"/>
        </group>
    </layout>
</citation>
<!-- Bibliography -->
<bibliography entry-spacing="0" second-field-align="flush">
    <layout>
        <!-- Citation Number -->
        <text variable="citation-number" prefix="‹r-citation-number›[" suffix="]‹/r-citation-number›"/>
        <!-- Author(s) -->
        <text macro="author" suffix=", "/>
        <!-- Rest of Citation -->
        <choose>
            <!-- Specific Formats -->
            <if type="article-journal">
                <group delimiter=", ">
                    <text macro="title"/>
                    <text variable="container-title" font-style="italic" form="short" prefix="‹r-container-title›" suffix="‹/r-container-title›"/>
                    <text macro="locators"/>
                    <text macro="page"/>
                    <text macro="issued"/>
                    <text macro="status"/>
                </group>
                <choose>
                    <if variable="URL DOI" match="none">
                        <text value="."/>
                    </if>
                    <else>
                        <text value=","/>
                    </else>
                </choose>
                <text macro="access"/>
            </if>
            <else-if type="paper-conference speech" match="any">
                <group delimiter=", " suffix=", ">
                    <text macro="title"/>
                    <text macro="event"/>
                    <text macro="editor"/>
                </group>
                <text macro="collection"/>
                <group delimiter=", " suffix=".">
                    <text macro="publisher"/>
                    <text macro="issued"/>
                    <text macro="page"/>
                    <text macro="status"/>
                </group>
                <text macro="access"/>
            </else-if>
            <else-if type="chapter">
                <group delimiter=", " suffix=", ">
                    <text macro="title"/>
                    <group delimiter=" ">
                        <text term="in" suffix=" "/>
                        <text variable="container-title" font-style="italic" prefix="‹r-container-title›" suffix="‹/r-container-title›"/>
                    </group>
                </group>
                <text macro="editor" suffix=", "/>
                <text macro="edition"/>
                <text macro="collection"/>
                <group delimiter=", " suffix=".">
                    <text macro="publisher"/>
                    <text macro="issued"/>
                    <text macro="page"/>
                </group>
                <text macro="access"/>
            </else-if>
            <else-if type="report">
                <group delimiter=", " suffix=".">
                    <text macro="title"/>
                    <text macro="publisher"/>
                    <group delimiter=" ">
                        <text variable="genre" prefix="‹r-genre›" suffix="‹/r-genre›"/>
                        <text variable="number" prefix="‹r-number›" suffix="‹/r-number›"/>
                    </group>
                    <text macro="issued"/>
                </group>
                <text macro="access"/>
            </else-if>
            <else-if type="thesis">
                <group delimiter=", " suffix=".">
                    <text macro="title"/>
                    <text variable="genre" prefix="‹r-genre›" suffix="‹/r-genre›"/>
                    <text macro="publisher"/>
                    <text macro="issued"/>
                </group>
                <text macro="access"/>
            </else-if>
            <else-if type="webpage post-weblog post" match="any">
                <group delimiter=", " suffix=".">
                    <text macro="title"/>
                    <text variable="container-title" font-style="italic" prefix="‹r-container-title›" suffix="‹/r-container-title›"/>
                    <text macro="issued"/>
                </group>
                <text macro="access"/>
            </else-if>
            <else-if type="patent">
                <group delimiter=", ">
                    <text macro="title"/>
                    <text variable="number" prefix="‹r-number›" suffix="‹/r-number›"/>
                    <text macro="issued"/>
                </group>
                <text macro="access"/>
            </else-if>
            <!-- Online Video -->
            <else-if type="motion_picture">
                <text macro="geographic-location" suffix=". "/>
                <group delimiter=", " suffix=".">
                    <text macro="title"/>
                    <text macro="issued"/>
                </group>
                <text macro="access"/>
            </else-if>
            <!-- Generic/Fallback Formats -->
            <else-if type="bill book graphic legal_case legislation report song" match="any">
                <group delimiter=", " suffix=". ">
                    <text macro="title"/>
                    <text macro="locators"/>
                </group>
                <text macro="collection"/>
                <group delimiter=", " suffix=".">
                    <text macro="publisher"/>
                    <text macro="issued"/>
                    <text macro="page"/>
                </group>
                <text macro="access"/>
            </else-if>
            <else-if type="article-magazine article-newspaper broadcast interview manuscript map patent personal_communication song speech thesis webpage" match="any">
                <group delimiter=", " suffix=".">
                    <text macro="title"/>
                    <text variable="container-title" font-style="italic" prefix="‹r-container-title›" suffix="‹/r-container-title›"/>
                    <text macro="locators"/>
                    <text macro="publisher"/>
                    <text macro="page"/>
                    <text macro="issued"/>
                </group>
                <text macro="access"/>
            </else-if>
            <else>
                <group delimiter=", " suffix=". ">
                    <text macro="title"/>
                    <text variable="container-title" font-style="italic" prefix="‹r-container-title›" suffix="‹/r-container-title›"/>
                    <text macro="locators"/>
                </group>
                <text macro="collection"/>
                <group delimiter=", " suffix=".">
                    <text macro="publisher"/>
                    <text macro="page"/>
                    <text macro="issued"/>
                </group>
                <text macro="access"/>
            </else>
        </choose>
    </layout>
</bibliography>
</style>`

module.exports = { ieee }