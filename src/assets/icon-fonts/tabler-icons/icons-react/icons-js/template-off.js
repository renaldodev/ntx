import * as React from "react";

function IconTemplateOff({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-template-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/template-off"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M8 4h11a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-7m-4 0h-3a1 1 0 0 1 -1 -1v-2c0 -.271 .108 -.517 .283 -.697" /><rect x={4} y={12} width={6} height={8} rx={1} /><path d="M16 12h4" /><path d="M14 16h2" /><path d="M14 20h6" /><path d="M3 3l18 18" /></svg>;
}

export default IconTemplateOff;