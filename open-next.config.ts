import { defineCloudflareConfig } from '@opennextjs/cloudflare';
import r2IncrementalCache from '@opennextjs/cloudflare/overrides/incremental-cache/r2-incremental-cache';
import { withRegionalCache } from '@opennextjs/cloudflare/overrides/incremental-cache/regional-cache';

/*
  The cache is R2, because something revalidates: the blog's Medium feed is
  fetched again once a day (`actions/rssJson.ts`), so a read-only cache (the
  Worker's static assets) would fetch it on every visit. R2 lives in one
  region; the regional cache keeps what was read in the data center that
  serves the request, as OpenNext recommends for a site that revalidates
  (https://opennext.js.org/cloudflare/perf). Cache interception answers a
  prerendered page before the Next server loads.
*/
export default defineCloudflareConfig({
  incrementalCache: withRegionalCache(r2IncrementalCache, {
    mode: 'long-lived'
  }),
  enableCacheInterception: true
});
