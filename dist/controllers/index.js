"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.twitter = exports.tiktok = void 0;
const urls_1 = require("../constants/urls");
const regexes_1 = require("../constants/regexes");
const tiktok = (message) => {
    const matchesArray = Array.from(message.matchAll(regexes_1.tiktokRegex));
    const tiktokVideoIds = [];
    if (!matchesArray)
        return;
    for (const match of matchesArray) {
        const [fullUrl, videoId] = match;
        const urlContainsVideoRegex = /\/video\//;
        const videoParam = "@proxifysocials/video/";
        if (urlContainsVideoRegex.test(videoId)) {
            tiktokVideoIds.push(urls_1.proxitok + videoId);
        }
        else {
            tiktokVideoIds.push(urls_1.proxitok + videoParam + videoId);
        }
    }
    const formattedString = tiktokVideoIds.map((url) => url).join("\n\n");
    return formattedString;
};
exports.tiktok = tiktok;
const twitter = (message) => {
    const nitterUrls = [];
    const matches = message.match(regexes_1.twitterRegex);
    if (matches) {
        for (const match of matches) {
            nitterUrls.push(match.replace(urls_1.twitterUrl, urls_1.nitter));
        }
    }
    const formattedString = nitterUrls.map((url) => url).join("\n\n");
    return formattedString;
};
exports.twitter = twitter;
