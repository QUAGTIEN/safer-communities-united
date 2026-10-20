import manifest from "./assets.generated.json";

// URL bindings only. Immutable maps must use their direct public PNG URLs;
// never pass them through a resizing/encoding pipeline or object-fit:cover.
export const mapAssets = manifest.maps;
export const demoPhotoAssets = manifest.photos;
export const illustrativeDocumentAssets = manifest.illustrativeDocuments;
export const screenshotVisualAssets = manifest.screenshotVisuals;

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
