// @ts-nocheck
import { default as __fd_glob_5 } from "../content/docs/nextjs/meta.json?collection=docs"
import { default as __fd_glob_4 } from "../content/docs/minecraft/meta.json?collection=docs"
import * as __fd_glob_3 from "../content/docs/nextjs/quick-started-nextjs.mdx?collection=docs"
import * as __fd_glob_2 from "../content/docs/nextjs/deploy.mdx?collection=docs"
import * as __fd_glob_1 from "../content/docs/minecraft/index.mdx?collection=docs"
import * as __fd_glob_0 from "../content/docs/index.mdx?collection=docs"
import { server } from 'fumadocs-mdx/runtime/server';
import type * as Config from '../src/lib/source.config';

const create = server<typeof Config, import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
  DocData: {
  }
}>({"doc":{"passthroughs":["extractedReferences"]}});

export const docs = await create.docs("docs", "content/docs", {"minecraft/meta.json": __fd_glob_4, "nextjs/meta.json": __fd_glob_5, }, {"index.mdx": __fd_glob_0, "minecraft/index.mdx": __fd_glob_1, "nextjs/deploy.mdx": __fd_glob_2, "nextjs/quick-started-nextjs.mdx": __fd_glob_3, });