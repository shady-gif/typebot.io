import type { ImgHTMLAttributes } from "react";

const logoStyle = {
  height: "32px",
  width: "auto",
  objectFit: "contain",
} satisfies ImgHTMLAttributes<HTMLImageElement>["style"];

export const TypebotLogo = ({
  alt = "Leads by Shadyy",
  style,
  ...props
}: ImgHTMLAttributes<HTMLImageElement>) => (
  <img
    src="/images/shadyy-leads-logo.png"
    alt={alt}
    style={{ ...logoStyle, ...style }}
    {...props}
  />
);

export const TypebotLogoFull = ({
  alt = "Leads by Shadyy",
  style,
  ...props
}: ImgHTMLAttributes<HTMLImageElement>) => (
  <img
    src="/images/shadyy-leads-logo.png"
    alt={alt}
    style={{ height: "36px", width: "auto", objectFit: "contain", ...style }}
    {...props}
  />
);
