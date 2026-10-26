import index from "@/content/assets.generated.json";

export type AssetId = keyof typeof index;

export function asset(id: AssetId) {
  const { src, width, height } = index[id];
  return { src, width, height };
}
