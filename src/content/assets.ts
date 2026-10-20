import manifest from "./assets.generated.json";

// URL bindings only. Immutable maps must use their direct public PNG URLs;
// never pass them through a resizing/encoding pipeline or object-fit:cover.
const assetUrl = (publicPath: string) => `${process.env.NEXT_PUBLIC_BASE_PATH || ""}${publicPath}`;
export const mapAssets = manifest.maps.map((asset) => ({ ...asset, publicPath: assetUrl(asset.publicPath) }));
export const demoPhotoAssets = manifest.photos.map((asset) => ({ ...asset, publicPath: asset.publicPath ? assetUrl(asset.publicPath) : null }));
export const illustrativeDocumentAssets = manifest.illustrativeDocuments.map((asset) => ({ ...asset, publicPath: assetUrl(asset.publicPath) }));
export const screenshotVisualAssets = manifest.screenshotVisuals.map((asset) => ({ ...asset, publicPath: assetUrl(asset.publicPath) }));

export function getMap(assetId: string) {
  const map = mapAssets.find((item) => item.id === assetId);
  if (!map) throw new Error(`Unknown blueprint map: ${assetId}`);
  return map;
}

export function getDemoPhoto(slotId: string) {
  const photo = demoPhotoAssets.find((item) => item.id === slotId);
  if (!photo) throw new Error(`Unknown blueprint photo slot: ${slotId}`);
  return photo;
}
