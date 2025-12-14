export function returnHtmlDocName(ExcludeExtension) {
    let docName = location.pathname.split("/").pop();

    if (ExcludeExtension != null && ExcludeExtension == true) {
        docName = docName.split(".")[0]
    }
    return docName;
};

export function openFile(link, newTab) {
    const newA = document.createElement("a");
    newA.href = link;
    
    if (newTab) {
        newA.target = "_blank";
    }
    document.body.appendChild(newA);
    newA.click();
    document.body.removeChild(newA);
};

async function fetchDataFromLinkmain(url, DataType) {
    let newData = await fetch(url)
    .then(response => response[DataType]())

    return newData
};

export async function fetchDataFromLink(url, DataType) {
    return await fetchDataFromLinkmain(url, DataType)
};

export function setFontSize(Element, fontSize) {
    let retrivedFontSize = Element.getAttribute("cTS");
    
    if (fontSize == null && retrivedFontSize != null) {
        fontSize = retrivedFontSize;
    }else if (fontSize == null && retrivedFontSize == null) {
        fontSize = "25px";
    };

    Element.style.fontSize = fontSize;
};

export function entryObjectIntoEntryTable(givenObject) {
    const entryArray = Object.entries(givenObject);

    let entryTable = {};

    for (const key in entryArray) {
        const value = entryArray[key];

        entryTable[value[0]] = value[1]
    };

    return entryTable;
};


