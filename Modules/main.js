export function returnHtmlDocName() {
    return location.pathname.split("/").pop();
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


