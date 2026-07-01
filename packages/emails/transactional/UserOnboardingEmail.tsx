import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Link,
  Preview,
  Text,
} from "@react-email/components";
import { render } from "@react-email/render";
import type { ComponentProps } from "react";
import * as React from "react";
import { bodyText, container, footerText, main } from "./styles";

void React;

interface Props {
  unsubscribeUrl?: string;
}

export const UserOnboardingEmail = ({ unsubscribeUrl }: Props) => (
  <Html>
    <Head />
    <Preview>Welcome to Leads!</Preview>
    <Body style={main}>
      <Container
        align="left"
        style={{
          ...container,
          margin: "0",
          maxWidth: "100%",
          textAlign: "left",
        }}
      >
        <Text style={bodyText}>
          Hi,
          <br />
          <br />
          Thanks for trying out Leads.
          <br />
          <br />
          Leads is built to make it easy to create beautiful, engaging lead
          capture conversations.
          <br />
          <br />
          It gives you the freedom to create the right bots for your business
          while keeping the builder simple to use.
          <br />
          <br />
          Watch this quick 5-minute overview video to get started:
          <br />
          <Link href="https://www.youtube.com/watch?v=jp3ggg_42-M">
            https://www.youtube.com/watch?v=jp3ggg_42-M
          </Link>
          <br />
          <br />
          See you soon!
          <br />
          <br />
          Shadyy.
        </Text>
        <Hr />
        {unsubscribeUrl ? (
          <Text style={{ ...footerText, marginTop: "24px" }}>
            <Link href={unsubscribeUrl}>Click here to unsubscribe</Link>
          </Text>
        ) : null}
      </Container>
    </Body>
  </Html>
);

UserOnboardingEmail.PreviewProps = {
  unsubscribeUrl: "https://shadyy.local/emails/unsubscribe",
} satisfies Props;

export default UserOnboardingEmail;

export const renderUserOnboardingEmail = async (
  props: ComponentProps<typeof UserOnboardingEmail>,
) => render(<UserOnboardingEmail {...props} />);
