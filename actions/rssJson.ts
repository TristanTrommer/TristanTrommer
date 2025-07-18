'use server';

import {XMLParser} from 'fast-xml-parser';

export interface IRSS {
  title: string;
  description: string;
  link: string;
  image: string;
  categories: string[];
  items: IRSSItem[];
}

export interface IRSSItem {
  id: string;
  title: string;
  description: string;
  link: string;
  author: string;
  published: number;
  created: number;
  categories: string[];
  content: string;
  enclosures: string[];

  [key: string]: any;
}

export const rssJson = async () => {
  const response = await fetch('https://medium.com/feed/@tristantrommer', {cache: 'no-store'});
  const data = await response.text();

  const xmlParser = new XMLParser({
    attributeNamePrefix: '',
    textNodeName: '$text',
    ignoreAttributes: false,
    cdataPropName: '$cdata',
    preserveOrder: false,
  });

  const result = xmlParser.parse(data);

  let channel = result.rss?.channel ?? result.feed;
  if (Array.isArray(channel)) channel = channel[0];

  const getTextContent = (node: { $text: any; $cdata: any; }) => node?.$text ?? node?.$cdata ?? node ?? '';

  const json: IRSS = {
    title: getTextContent(channel?.title),
    description: getTextContent(channel?.description),
    link: getTextContent(channel?.link?.href ?? channel?.link),
    image: channel?.image?.url ?? channel?.['itunes:image']?.href ?? '',
    categories: [],
    items: [],
  };

  // Handle channel categories
  if (channel?.category) {
    if (Array.isArray(channel.category)) {
      json.categories = channel.category.map((cat: { $text: any; $cdata: any; }) => getTextContent(cat));
    } else {
      json.categories = [getTextContent(channel.category)];
    }
  }

  const items = Array.isArray(channel?.item) ? channel.item : [channel.item];

  for (const val of items) {
    if (!val) continue;

    let itemCategories = [];
    if (val?.category) {
      if (Array.isArray(val.category)) {
        itemCategories = val.category.map((cat: { $text: any; $cdata: any; }) => getTextContent(cat));
      } else {
        itemCategories = [getTextContent(val.category)];
      }
    }

    const obj: IRSSItem = {
      id: getTextContent(val?.guid),
      title: getTextContent(val?.title),
      description: getTextContent(val?.description),
      link: getTextContent(val?.link?.href ?? val?.link),
      author: getTextContent(val?.author?.name ?? val?.['dc:creator']),
      published: Date.parse(getTextContent(val?.pubDate ?? val?.published ?? val?.created)) || Date.now(),
      created: Date.parse(getTextContent(val?.updated ?? val?.['atom:updated'] ?? val?.pubDate ?? val?.created)) || Date.now(),
      categories: itemCategories,
      content: '',
      enclosures: [],
    };

    if (val['content:encoded']) {
      obj.content = getTextContent(val['content:encoded']);
    } else if (val.description) {
      obj.content = getTextContent(val.description);
    }

    if (val?.enclosure) {
      if (Array.isArray(val.enclosure)) {
        obj.enclosures = val.enclosure.map((enc: { url: any; }) => enc?.url ?? '');
      } else {
        obj.enclosures = [val.enclosure?.url ?? ''];
      }
    }

    [
      'content:encoded',
      'podcast:transcript',
      'itunes:summary',
      'itunes:author',
      'itunes:explicit',
      'itunes:duration',
      'itunes:season',
      'itunes:episode',
      'itunes:episodeType',
      'itunes:image',
    ].forEach((s) => {
      if (val[s]) obj[s.replace(':', '_')] = getTextContent(val[s]);
    });

    if (val['media:thumbnail'] || val['media:content']) {
      const mediaElement = val['media:thumbnail'] || val['media:content'];
      if (mediaElement) {
        obj.enclosures.push(mediaElement?.url ?? '');
      }
    }

    if (val['media:group']) {
      const mediaGroup = val['media:group'];
      if (mediaGroup['media:title']) {
        obj.title = getTextContent(mediaGroup['media:title']);
      }
      if (mediaGroup['media:description']) {
        obj.description = getTextContent(mediaGroup['media:description']);
      }
      if (mediaGroup['media:thumbnail']) {
        obj.enclosures.push(mediaGroup['media:thumbnail']?.url ?? '');
      }
    }

    json.items.push(obj);
  }

  return json;
};