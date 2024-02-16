export function RHError({ error }: { error: string }) {
  return <span style={{ color: "red", marginLeft: 5 }}>{error}</span>;
}
