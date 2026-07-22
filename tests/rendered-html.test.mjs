import assert from "node:assert/strict";
import { readFile, readdir } from "node:fs/promises";
import test from "node:test";

const previewRoot = new URL("../app/_sites-preview/", import.meta.url);

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the J Angels landing page", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(
    html,
    /<title>J Angels Carpet Cleaning \| San Diego Carpet Cleaning Service<\/title>/,
  );
  assert.match(html, /Cleaner carpets, fresher couches, easier move-outs\./);
  assert.match(html, /Tell us what needs cleaning\./);
  assert.match(html, /See the kind of refresh you can expect\./);
  assert.match(html, /Check the public Yelp profile before you book\./);
  assert.match(html, /See our current Yelp reviews and work photos\./);
  assert.match(html, /Help us build our Google reviews\./);
  assert.match(html, /Google category/);
  assert.match(html, /Carpet cleaning service/);
  assert.match(html, /Area served/);
  assert.match(html, /San Diego/);
  assert.match(html, /Opens at 9 AM/);
  assert.match(html, /tel:\+18586632079/);
  assert.match(html, /https:\/\/g\.page\/r\/CfDY5ewbKTjBEAE\/review/);
  assert.match(html, /https:\/\/www\.yelp\.com\/biz\/j-angel-s-carpet-cleaning-san-diego/);
  assert.doesNotMatch(html, /Building your site|react-loading-skeleton|codex-preview/i);
});

test("keeps SEO and business details aligned with the public profile", async () => {
  const [page, layout, packageJson] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
  ]);

  assert.match(page, /const businessCategory = "Carpet cleaning service"/);
  assert.match(page, /const primaryServiceArea = "San Diego"/);
  assert.match(page, /const quoteHours = "Opens at 9 AM"/);
  assert.match(page, /J Angels Carpet Cleaning provides residential carpet cleaning/);
  assert.match(page, /See our current Yelp reviews and work photos/);
  assert.match(page, /Help us build our Google reviews/);
  assert.match(layout, /"@type": \["LocalBusiness", "CleaningService"\]/);
  assert.match(layout, /knowsAbout/);
  assert.match(layout, /Pet stain and odor cleaning/);
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);

  assert.deepEqual(await readdir(previewRoot), []);
});
