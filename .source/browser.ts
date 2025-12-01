// @ts-nocheck
import { browser } from 'fumadocs-mdx/runtime/browser';
import type * as Config from '../src/lib/source.config';

const create = browser<typeof Config, import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
  DocData: {
  }
}>();
const browserCollections = {
  docs: create.doc("docs", {"index.mdx": () => import("../content/docs/index.mdx?collection=docs"), "minecraft/index.mdx": () => import("../content/docs/minecraft/index.mdx?collection=docs"), "nextjs/deploy.mdx": () => import("../content/docs/nextjs/deploy.mdx?collection=docs"), "nextjs/quick-started-nextjs.mdx": () => import("../content/docs/nextjs/quick-started-nextjs.mdx?collection=docs"), }),
};
export default browserCollections;