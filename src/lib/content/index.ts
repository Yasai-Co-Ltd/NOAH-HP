import type { ContentProvider } from "./provider";
import { staticProvider } from "./providers/static";

function resolveProvider(): ContentProvider {
  const source = process.env.CONTENT_SOURCE ?? "static";

  switch (source) {
    case "wordpress":
      // Falls through to static until src/lib/content/providers/wordpress.ts is implemented.
      return staticProvider;
    case "static":
    default:
      return staticProvider;
  }
}

export const content: ContentProvider = resolveProvider();

export type { ContentProvider } from "./provider";
export type { FindParams, NewsItem, Project, Service } from "./types";
