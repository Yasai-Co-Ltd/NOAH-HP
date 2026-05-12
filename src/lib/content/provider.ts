import type { FindParams, NewsItem, Project, Service } from "./types";

/**
 * Abstract content provider. Implementations:
 *   - StaticProvider (current): local TS modules
 *   - WordPressProvider (future): WPGraphQL / REST
 *
 * Consumers (page / section components) should depend only on this interface.
 */
export interface ContentProvider {
  findServices(params?: FindParams): Promise<Service[]>;
  findProjects(params?: FindParams): Promise<Project[]>;
  findNews(params?: FindParams): Promise<NewsItem[]>;
}
