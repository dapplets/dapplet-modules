import { Position } from "./types";

export const addMedia = (
    {
        img,
        video,
        width
    }: {
        img?: string,
        video?: string,
        width?: string
    }
) => {
    if (img) {
        const imgTag = document.createElement('img');
        imgTag.src = img;
        imgTag.style.width = width ?? '100%';
        imgTag.style.position = 'relative';
        imgTag.style.objectFit = 'cover';
        return imgTag;
    } else if (video) {
        const videoTag = document.createElement('video');
        videoTag.src = video;
        videoTag.autoplay = true;
        videoTag.muted = true;
        videoTag.loop = true;
        videoTag.style.width = width ?? '100%';
        return videoTag;
    }
}

export const addText = (
    {
        position,
        color,
        textBackground,
        text
    }: {
        position: Position,
        color: string,
        textBackground: string,
        text: string
    }
) => {
    const container = document.createElement('div');
    container.style.position = 'absolute';
    container.style.width = 'fit-content';
    container.style.maxWidth = '80%';
    container.style.left = '50%';
    switch (position) {
        case Position.Center:
            container.style.top = '50%';
            break;
        case Position.Top:
            container.style.top = '10%';
            break;
        case Position.Bottom:
            container.style.bottom = '10%';
            break;
    }
    container.style.transform = 'translateX(-50%)';
    container.style.borderRadius = '10px';
    container.style.color = color;
    container.style.background = textBackground;
    container.style.padding = '10px 30px';
    container.style.fontSize = '1.20rem';
    container.style.fontWeight = 'bold';
    container.style.textAlign = 'center';
    container.textContent = text;
    return container;
};
