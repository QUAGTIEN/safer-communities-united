import register from "../../docs/source-register.json";

// Use only destinations supplied in the blueprint. The register's access status
// does not certify a claim, reproduce a dated GIS snapshot or prove a URL broken.
export function getBlueprintSource(id: string) {
  const source = register.sources.find((item) => item.id === id);
  if (!source) throw new Error(`Unknown blueprint source: ${id}`);
  return source;
}
