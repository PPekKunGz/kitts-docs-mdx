// @ts-nocheck
import * as __fd_glob_11 from "../content/docs/minecraft/mods/waypoint-warp.mdx?collection=docs"
import * as __fd_glob_10 from "../content/docs/minecraft/bedrock/bds-setup-guide.mdx?collection=docs"
import * as __fd_glob_9 from "../content/docs/topup/truemoney-voucher.mdx?collection=docs"
import * as __fd_glob_8 from "../content/docs/minecraft/index.mdx?collection=docs"
import * as __fd_glob_7 from "../content/docs/nextjs/quick-started-nextjs.mdx?collection=docs"
import * as __fd_glob_6 from "../content/docs/nextjs/deploy.mdx?collection=docs"
import * as __fd_glob_5 from "../content/docs/index.mdx?collection=docs"
import { default as __fd_glob_4 } from "../content/docs/minecraft/mods/meta.json?collection=docs"
import { default as __fd_glob_3 } from "../content/docs/minecraft/bedrock/meta.json?collection=docs"
import { default as __fd_glob_2 } from "../content/docs/topup/meta.json?collection=docs"
import { default as __fd_glob_1 } from "../content/docs/minecraft/meta.json?collection=docs"
import { default as __fd_glob_0 } from "../content/docs/nextjs/meta.json?collection=docs"
import { server } from 'fumadocs-mdx/runtime/server';
import type * as Config from '../src/lib/source.config';

const create = server<typeof Config, import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
  DocData: {
  }
}>({"doc":{"passthroughs":["extractedReferences"]}});

export const docs = await create.docs("docs", "content/docs", {"nextjs/meta.json": __fd_glob_0, "minecraft/meta.json": __fd_glob_1, "topup/meta.json": __fd_glob_2, "minecraft/bedrock/meta.json": __fd_glob_3, "minecraft/mods/meta.json": __fd_glob_4, }, {"index.mdx": __fd_glob_5, "nextjs/deploy.mdx": __fd_glob_6, "nextjs/quick-started-nextjs.mdx": __fd_glob_7, "minecraft/index.mdx": __fd_glob_8, "topup/truemoney-voucher.mdx": __fd_glob_9, "minecraft/bedrock/bds-setup-guide.mdx": __fd_glob_10, "minecraft/mods/waypoint-warp.mdx": __fd_glob_11, });