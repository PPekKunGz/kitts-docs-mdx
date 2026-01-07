// @ts-nocheck
import { browser } from 'fumadocs-mdx/runtime/browser';
import type * as Config from '../src/lib/source.config';

const create = browser<typeof Config, import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
  DocData: {
  }
}>();
const browserCollections = {
  docs: create.doc("docs", {"index.mdx": () => import("../content/docs/index.mdx?collection=docs"), "minecraft/index.mdx": () => import("../content/docs/minecraft/index.mdx?collection=docs"), "nextjs/deploy.mdx": () => import("../content/docs/nextjs/deploy.mdx?collection=docs"), "nextjs/quick-started-nextjs.mdx": () => import("../content/docs/nextjs/quick-started-nextjs.mdx?collection=docs"), "topup/truemoney-voucher.mdx": () => import("../content/docs/topup/truemoney-voucher.mdx?collection=docs"), "hosting/minecraft-tunnel.mdx": () => import("../content/docs/hosting/minecraft-tunnel.mdx?collection=docs"), "minecraft/bedrock/bds-setup-guide.mdx": () => import("../content/docs/minecraft/bedrock/bds-setup-guide.mdx?collection=docs"), "minecraft/mods/waypoint-warp.mdx": () => import("../content/docs/minecraft/mods/waypoint-warp.mdx?collection=docs"), }),
};
export default browserCollections;