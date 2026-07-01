import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Text,
} from "@react-email/components";
import { render } from "@react-email/render";
import type { ComponentProps } from "react";
import * as React from "react";
import { sendEmail } from "../helpers/sendEmail";
import { Logo } from "./components/Logo";
import {
  container,
  footerText,
  hr,
  main,
  paragraph,
  primaryButton,
} from "./styles";

void React;

interface Props {
  workspaceName: string;
  typebotName: string;
  url: string;
  hostEmail: string;
  guestEmail: string;
}

export const GuestInvitationEmail = ({
  workspaceName,
  typebotName,
  url,
  hostEmail,
  guestEmail,
}: Props) => {
  return (
    <Html>
      <Head />
      <Body style={main}>
        <Container style={container}>
          <Logo />
          <Text style={paragraph}>
            You have been invited by {hostEmail} to collaborate on his lead bot{" "}
            <strong>{typebotName}</strong>.
            <br />
            <br />
            From now on you will see this lead bot in your dashboard under his
            workspace &quot;{workspaceName}&quot; 👍
            <br />
            <br />
            Make sure to log in as <i>{guestEmail}</i>.
          </Text>

          <Button href={url} style={primaryButton}>
            Go to lead bot
          </Button>

          <Hr style={hr} />
          <Text style={footerText}>Leads - Copyright Shadyy</Text>
        </Container>
      </Body>
    </Html>
  );
};

GuestInvitationEmail.PreviewProps = {
  workspaceName: "My Workspace",
  typebotName: "My lead bot",
  url: "https://shadyy.local",
  hostEmail: "host@shadyy.local",
  guestEmail: "guest@shadyy.local",
} as Props;

export default GuestInvitationEmail;

export const sendGuestInvitationEmail = async (
  props: ComponentProps<typeof GuestInvitationEmail>,
) =>
  sendEmail({
    to: props.guestEmail,
    subject: `You've been invited to collaborate`,
    html: await render(<GuestInvitationEmail {...props} />),
    replyTo: props.hostEmail,
  });
