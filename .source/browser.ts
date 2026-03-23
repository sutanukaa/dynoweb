// @ts-nocheck
import { browser } from 'fumadocs-mdx/runtime/browser';
import type * as Config from '../source.config';

const create = browser<typeof Config, import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
  DocData: {
  }
}>();
const browserCollections = {
  docs: create.doc("docs", {"cart-overview.mdx": () => import("../content/docs/cart-overview.mdx?collection=docs"), "conversions.mdx": () => import("../content/docs/conversions.mdx?collection=docs"), "dashboard.mdx": () => import("../content/docs/dashboard.mdx?collection=docs"), "dynoagent.mdx": () => import("../content/docs/dynoagent.mdx?collection=docs"), "experiments.mdx": () => import("../content/docs/experiments.mdx?collection=docs"), "getting-started.mdx": () => import("../content/docs/getting-started.mdx?collection=docs"), "heatmaps.mdx": () => import("../content/docs/heatmaps.mdx?collection=docs"), "index.mdx": () => import("../content/docs/index.mdx?collection=docs"), "journeys.mdx": () => import("../content/docs/journeys.mdx?collection=docs"), "overview.mdx": () => import("../content/docs/overview.mdx?collection=docs"), "replays.mdx": () => import("../content/docs/replays.mdx?collection=docs"), "suggestions.mdx": () => import("../content/docs/suggestions.mdx?collection=docs"), }),
};
export default browserCollections;