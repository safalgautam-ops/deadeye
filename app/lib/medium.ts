import { fetchPublic } from "./fetch-public";

const FEED_URL = "https://medium.com/feed/@safalgautam";

// Tags on nearly every post; they say nothing about the specific writeup.
const GENERIC_TAGS = new Set(["cybersecurity", "security", "hacking", "tools", "programming", "memories"]);

export type Writeup = {
  title: string;
  url: string;
  publishedAt: Date;
  publication: string;
  tags: string[];
};

const ENTITIES: Record<string, string> = { "&amp;": "&", "&lt;": "<", "&gt;": ">", "&quot;": '"', "&#39;": "'" };

function text(raw: string | undefined) {
  return (raw ?? "")
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1")
    .replace(/&(amp|lt|gt|quot|#39);/g, (entity) => ENTITIES[entity])
    .trim();
}

function tag(item: string, name: string) {
  return item.match(new RegExp(`<${name}>([\\s\\S]*?)</${name}>`))?.[1];
}

function toWriteup(item: string): Writeup {
  const url = new URL(text(tag(item, "link")));
  url.search = "";

  const tags = [...item.matchAll(/<category>([\s\S]*?)<\/category>/g)]
    .map(([, value]) => text(value))
    .filter((value) => !GENERIC_TAGS.has(value))
    .slice(0, 2)
    .map((value) => value.replaceAll("-", " "));

  return {
    title: text(tag(item, "title")),
    url: url.toString(),
    publishedAt: new Date(text(tag(item, "pubDate"))),
    publication: url.hostname === "infosecwriteups.com" ? "InfoSec Write-ups" : "Medium",
    tags,
  };
}

export async function getWriteups(limit: number): Promise<Writeup[]> {
  const response = await fetchPublic(FEED_URL, "writeups");
  if (!response) return [];

  const xml = await response.text();
  return [...xml.matchAll(/<item>([\s\S]*?)<\/item>/g)].slice(0, limit).map(([, item]) => toWriteup(item));
}
