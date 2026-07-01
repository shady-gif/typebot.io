import { Img } from "@react-email/components";
import { env } from "@typebot.io/env";
import * as React from "react";

void React;

export const Logo = () => (
  <Img
    src={`${env.NEXTAUTH_URL}/images/logo.png`}
    width="140"
    height="53"
    alt="Leads by Shadyy"
    style={{
      margin: "24px 0",
      objectFit: "contain",
    }}
  />
);
