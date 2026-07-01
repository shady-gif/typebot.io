export const TypebotLogo = ({
  alt = "Leads by Shadyy",
  style,
  ...props
}: React.ImgHTMLAttributes<HTMLImageElement>) => (
  <img
    src="/images/shadyy-leads-logo.png"
    alt={alt}
    style={{
      height: "32px",
      width: "auto",
      objectFit: "contain",
      ...style,
    }}
    {...props}
  />
);
