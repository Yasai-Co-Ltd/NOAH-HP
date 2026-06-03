import { ASSET_BG_VARS } from "@/lib/asset-bg-vars";
import { asset } from "@/lib/asset";

/**
 * Renders a `<style>` block that defines CSS custom properties for every
 * background image referenced by sub-page CSS modules. Each variable holds
 * a `url(...)` value with basePath applied, so CSS files can reference them
 * via `var(--bg-xxx)` and stay basePath-agnostic.
 */
export function AssetBackgroundStyles() {
  const css =
    ":root{" +
    Object.entries(ASSET_BG_VARS)
      .map(([varName, path]) => `${varName}:url(${asset(path)});`)
      .join("") +
    "}";

  return <style dangerouslySetInnerHTML={{ __html: css }} />;
}
