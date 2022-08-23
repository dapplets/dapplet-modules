export const addMedia = (img: string) => {
    const imgTag = document.createElement("img");
    imgTag.src = img;
    imgTag.style.position = "relative";
    imgTag.style.objectFit = "cover";
    imgTag.style.width = "auto";
    imgTag.style.height = "auto";
    imgTag.style.margin = "inherit";
    return imgTag;
}

const addAuthorRetweetImage = (authorImg: string) => {
    const imgAuthorRetweet = document.createElement("img");
    imgAuthorRetweet.src = authorImg;
    imgAuthorRetweet.style.position = "relative";
    imgAuthorRetweet.style.objectFit = "cover";
    imgAuthorRetweet.style.width = "20px";
    imgAuthorRetweet.style.height = "20px";
    imgAuthorRetweet.style.borderRadius = "50%";
    imgAuthorRetweet.style.marginRight = "10px";
    return imgAuthorRetweet;
};

const addAuthorRetweetName = (authorFullname: string, color: string) => {
    const container = document.createElement("span");
    container.style.position = "inherit";
    container.style.width = "inherit";
    container.style.maxWidth = "max-content";
    container.style.minWidth = "min-content";
    container.style.color = color;
    container.style.background = "inherit";
    container.style.fontSize = "15px";
    container.style.fontWeight = "700";
    container.style.textAlign = "inherit";
    container.style.fontFamily = "TwitterChirp";
    container.style.marginRight = "10px";
    container.textContent = authorFullname;
    return container;
}

const addAuthorRetweetUserName = (authorUsername: string) => {
    if (authorUsername) {
        const container = document.createElement("span");
        container.style.position = "inherit";
        container.style.marginRight = "10px";
        container.style.width = "inherit";
        container.style.maxWidth = "max-content";
        container.style.color = "rgb(83, 100, 113)";
        container.style.background = "inherit";
        container.style.fontSize = "15px";
        container.style.fontWeight = "400";
        container.style.textAlign = "inherit";
        container.style.fontFamily = "TwitterChirp";
        container.textContent = "@" + authorUsername;
        return container;
    }
}

const addRetweetDate = (date: string, color: string) => {
    if (date) {
        const container = document.createElement("span");
        container.style.position = "inherit";
        container.style.width = "inherit";
        container.style.maxWidth = "inherit";
        container.style.color = color;
        container.style.background = "inherit";
        container.style.fontSize = "15px";
        container.style.fontWeight = "400";
        container.style.textAlign = "inherit";
        container.style.fontFamily = "TwitterChirp";
        container.textContent = date;
        return container;
    }
}

export const addInnerText = (text: string, color: string) => {
    if (text) {
        const container = document.createElement("div");
        container.style.position = "inherit";
        container.style.width = "inherit";
        container.style.maxWidth = "inherit";
        container.style.color = color;
        container.style.background = "inherit";
        container.style.padding = "10px 0px";
        container.style.fontSize = "inherit";
        container.style.fontWeight = "inherit";
        container.style.textAlign = "inherit";
        container.style.fontFamily = "TwitterChirp";
        container.textContent = text;
        return container;
    }
}

export const addRecoveredInfo = () => {
    const label = document.createElement("span");
    label.style.display ='inline-block';
    label.style.width ='6px';
    label.style.height ='6px';
    label.style.background = '#D7422E';
    label.style.borderRadius ='50%';
    label.style.marginLeft = '4px';
    label.style.marginBottom = '1px';
    const container = document.createElement("div");
    container.style.position = "inherit";
    container.style.width = "inherit";
    container.style.maxWidth = "inherit";
    container.style.color = '#2F8ECD';
    container.style.background = "inherit";
    container.style.padding = "10px 0px";
    container.style.fontSize = "inherit";
    container.style.fontWeight = "inherit";
    container.style.textAlign = "inherit";
    container.style.fontFamily = "TwitterChirp";
    container.textContent = 'Recovered from IPFS';
    container.appendChild(label)
    return container;
}

export const addRetweetInfo = (
    authorImg: string,
    authorFullname: string,
    authorUsername: string,
    date: string,
    color: string
) => {
    const container = document.createElement("div");
    container.id = `text-${Math.trunc(Math.random() * 1_000_000_000)}`;
    container.style.position = "relative";
    container.style.width = "97%";
    container.style.bottom = "0";
    container.style.zIndex = "50000";
    container.style.marginTop = "12px";
    container.style.display = "flex";
    if (authorImg) container.appendChild(addAuthorRetweetImage(authorImg));
    if (authorFullname) container.appendChild(addAuthorRetweetName(authorFullname, color));
    if (authorUsername)
        container.appendChild(addAuthorRetweetUserName(authorUsername));
    if (date) container.appendChild(addRetweetDate(date, color));
    return container;
}
