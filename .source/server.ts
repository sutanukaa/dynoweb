// @ts-nocheck
import * as __fd_glob_13 from "../content/docs/suggestions.mdx?collection=docs"
import * as __fd_glob_12 from "../content/docs/smartnudge.mdx?collection=docs"
import * as __fd_glob_11 from "../content/docs/replays.mdx?collection=docs"
import * as __fd_glob_10 from "../content/docs/overview.mdx?collection=docs"
import * as __fd_glob_9 from "../content/docs/journeys.mdx?collection=docs"
import * as __fd_glob_8 from "../content/docs/index.mdx?collection=docs"
import * as __fd_glob_7 from "../content/docs/heatmaps.mdx?collection=docs"
import * as __fd_glob_6 from "../content/docs/getting-started.mdx?collection=docs"
import * as __fd_glob_5 from "../content/docs/experiments.mdx?collection=docs"
import * as __fd_glob_4 from "../content/docs/dynoagent.mdx?collection=docs"
import * as __fd_glob_3 from "../content/docs/dashboard.mdx?collection=docs"
import * as __fd_glob_2 from "../content/docs/conversions.mdx?collection=docs"
import * as __fd_glob_1 from "../content/docs/cart-overview.mdx?collection=docs"
import { default as __fd_glob_0 } from "../content/docs/meta.json?collection=docs"
import { server } from 'fumadocs-mdx/runtime/server';
import type * as Config from '../source.config';

const create = server<typeof Config, import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
  DocData: {
  }
}>({"doc":{"passthroughs":["extractedReferences"]}});

export const docs = await create.docs("docs", "content/docs", {"meta.json": __fd_glob_0, }, {"cart-overview.mdx": __fd_glob_1, "conversions.mdx": __fd_glob_2, "dashboard.mdx": __fd_glob_3, "dynoagent.mdx": __fd_glob_4, "experiments.mdx": __fd_glob_5, "getting-started.mdx": __fd_glob_6, "heatmaps.mdx": __fd_glob_7, "index.mdx": __fd_glob_8, "journeys.mdx": __fd_glob_9, "overview.mdx": __fd_glob_10, "replays.mdx": __fd_glob_11, "smartnudge.mdx": __fd_glob_12, "suggestions.mdx": __fd_glob_13, });