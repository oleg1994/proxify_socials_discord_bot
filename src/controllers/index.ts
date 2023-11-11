import { proxitok, nitter } from "../constants/urls";
import { tiktokRegex, twitterRegex } from "../constants/regexes";

const tiktok = (message: string): string | void => {
  const matchesArray = Array.from(message.matchAll(tiktokRegex));
  const tiktokVideoIds = [];
  if (!matchesArray) return;
  for (const match of matchesArray) {
    const [, videoId] = match; //extracts second element from the match
    tiktokVideoIds.push(videoId);
  }
  const formattedString = tiktokVideoIds.map((videoId) => proxitok + videoId).join("\n\n");
  return formattedString;
};

const twitter = (message: string): string | void => {
  const nitterUrls = [];
  const matches = message.match(twitterRegex);

  if (matches) {
    for (const match of matches) {
      nitterUrls.push(match.replace("twitter.com", nitter));
    }
  }

  const formattedString = nitterUrls.map((url) => url).join("\n\n");
  return formattedString;
};

export { tiktok, twitter };
