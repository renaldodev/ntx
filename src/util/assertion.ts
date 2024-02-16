export const isObject = (value: unknown): value is Record<string, unknown> =>
  typeof value === "object" && value !== null;

export const isEmptyObject = (obj: unknown) => {
  if (!isObject(obj)) return true;
  return Object.keys(obj).length === 0;
};
