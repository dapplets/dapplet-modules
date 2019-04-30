import { setupMessageListener } from "chrome-extension-message-wrapper";

async function bgFetchText(url : string) : Promise<string> {
    const response = await fetch(url);
    const text = await response.text();

    // const x = await import('http://');

    return text;
};

chrome.runtime.onMessage.addListener(
    setupMessageListener({
        bgFetchText
    })
);