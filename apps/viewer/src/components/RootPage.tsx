export const RootPage = ({ dashboardUrl }: { dashboardUrl: string }) => (
  <div
    style={{
      height: "100dvh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
    }}
  >
    <div>
      <h1 style={{ fontWeight: "bold", fontSize: "30px" }}>
        Welcome to Leads
      </h1>
      <p>
        Leads helps you create and integrate lead capture conversations into
        websites and chat platforms like WhatsApp.
      </p>
      <p>
        Go to the <a href={dashboardUrl}>dashboard</a>.
      </p>
      <p>Copyright Shadyy</p>
    </div>
  </div>
);
