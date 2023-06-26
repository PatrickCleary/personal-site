import TM_Header from "../Images/TM_Case_Study_Header_Photo.png";
import MobileAccess from "../Images/MobileAccessScreenshot.png";
import LandingComparison from "../Images/LandingComparison.png";
import Homescreen from "../Images/homescreen2.png";
import OverTime from "../Images/OverTime.png";
import Median from "../Images/median.png";

export const transit = [
  { type: "h", text: "TransitMatters Data Dashboards" },
  {
    type: "custom",
    content: (
      <p className="pt-4">
        TransitMatters is a public transit advocacy group based in Boston. I
        joined them as a volunteer software engineer, then began doing design
        for a project to revamp their dashboards.
        <br />
        <br />
        <a
          style={{ color: "white", textDecorationStyle: "solid" }}
          href="https://dashboard-v4-beta.labs.transitmatters.org"
        >
          View the dashboard here
        </a>
      </p>
    ),
  },
  { type: "p", text: `Some new designs:` },
  { type: "img", location: TM_Header },
  {
    type: "h",
    text: `Research`,
  },
  {
    type: "custom",
    content: (
      <p>
        Before I started the designs, I wanted to get a sense for how the
        dashboards were being used and what goals we had for the new version.
        Luckily I had some great sources available to me:
      </p>
    ),
  },
  {
    type: "list",
    text: [`Tweets`, `User analytics`, `Stakeholders (org. members)`],
  },
  {
    type: "custom",
    content: (
      <p style={{ marginTop: "2rem", textAlign: "left", width: "100%" }}>
        Through these sources I was able to come to some key insights:
      </p>
    ),
  },
  {
    type: "custom",
    content: (
      <p style={{ fontSize: "1.25rem", marginTop: "4rem" }}>
        <b>Mobile First</b>
      </p>
    ),
  },
  {
    type: "custom",
    content: (
      <div
        style={{
          marginTop: "2rem",
          display: "flex",
          flexDirection: "column",
          rowGap: "2rem",
        }}
      >
        <p>
          Talking to some organization members, I learned they wanted to improve
          the mobile experience for the site. I decided to get data on what
          percentage of our users were on mobile.
        </p>
        <p>
          It was <b>55%</b>.
        </p>
        <p>
          This made it clear the site should be designed with a mobile device in
          mind.
        </p>
      </div>
    ),
  },

  {
    type: "custom",
    content: (
      <p style={{ fontSize: "1.25rem", marginTop: "4rem" }}>
        <b>Data Immediacy</b>
      </p>
    ),
  },
  {
    type: "custom",
    content: (
      <div
        style={{
          paddingTop: "2rem",
          display: "flex",
          flexDirection: "column",
          rowGap: "1rem",
        }}
      >
        <p style={{ fontSize: "1.125rem" }}>
          From the user analytics, I determined the homepage was the most
          frequently visited page at just over <b>10%</b> of total views. The
          homepage (below) confronted the user with a series of inputs required
          to gather data. No analysis or visuals would be shown until the form
          was complete.
        </p>
        <img
          style={{ padding: ".5rem" }}
          src={Homescreen}
          width={"80%"}
          alt={"The old homescreen"}
        />
        <p>
          This is not a pleasant experience for new users. A person who stumbles
          upon the site without a goal in mind is unlikely to find something of
          interest. I wanted all pages to have engaging content to spark
          interest.
        </p>
      </div>
    ),
  },
  {
    type: "custom",
    content: (
      <p style={{ fontSize: "1.25rem", marginTop: "4rem" }}>
        <b>Packaged Analysis</b>
      </p>
    ),
  },
  {
    type: "custom",
    content: (
      <div
        style={{
          paddingTop: "2rem",
          rowGap: "2rem",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <p>
          I looked through approximately 60 tweets which referenced the
          dashboards. Almost every tweet highlighted a graph with one of the
          following patterns:
        </p>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <p>1. A drastic change in a particular metric over time</p>
          <img
            style={{ padding: ".5rem" }}
            src={OverTime}
            width={"50%"}
            alt={"Tweet with change in metric"}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <p>2. A graph with a median/average outside the norm.</p>
          <img
            style={{ padding: ".5rem" }}
            src={Median}
            width={"50%"}
            alt={"Tweet displaying high median"}
          />
        </div>
        <p>
          The second item was most interesting, because users <i>wanted</i> to
          share an aggregate data point (median) but were forced to use a graph
          to convey this.
        </p>
      </div>
    ),
  },

  { type: "h", text: "Design" },

  {
    type: "custom",
    content: (
      <p style={{ fontSize: "1.25rem", marginTop: "4rem" }}>
        <b>Homepage</b>
      </p>
    ),
  },
  {
    type: "custom",
    content: (
      <div
        style={{
          paddingTop: "2rem",
          rowGap: "2rem",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <p>
          My first priority was to reduce the amount of searching a user needed
          to do to find valuable information. This meant redesigning the
          homepage.
        </p>
        <img
          style={{ padding: ".5rem" }}
          src={LandingComparison}
          width={"75%"}
          alt={"Before and after homepage"}
        />
        <p>
          The new homepage presents users with data they'll find interesting,
          rather than asking them to search for it.
        </p>
      </div>
    ),
  },
  {
    type: "custom",
    content: (
      <p style={{ fontSize: "1.25rem", marginTop: "4rem" }}>
        <b>Packaged Analysis + Screenshots</b>
      </p>
    ),
  },
  {
    type: "custom",
    content: (
      <div
        style={{
          paddingTop: "2rem",
          rowGap: "2rem",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <p>
          As I discovered in my research, I wanted to add summary statistics to
          the dashboards. I also wanted to improve the layout so that a
          screenshot is both aesthetically pleasing and contains all relevant
          information.
        </p>
        <p>
          Below is a picture an organization member shared of higher than normal
          headways. On the right, is what this screenshot would look like today.
        </p>
        <img
          style={{ padding: ".5rem" }}
          src={MobileAccess}
          width={"75%"}
          alt={"Before and after headways"}
        />
        <p>
          Many of our visitors are drawn to the dashboards from screenshots like
          these. Making the screens simpler and more aesthetically pleasing is
          key to attracting more users.
        </p>
      </div>
    ),
  },

  { type: "h", text: "Results and Next Steps" },
  {
    type: "p",
    text: `I shared my designs with the organization, and they were enthralled. We immediately began development.`,
  },
  {
    type: "p",
    text: "My role has shifted as the project gains traction. Originally, as we began development I was writing a lot of code. Since then, two fantastic frontend engineers have jumped on, so I have turned my focus to other tasks:",
  },
  {
    type: "list",
    text: [
      "Facilitate collaboration for smooth execution and to prevent blockers.",
      "Seek out assistance from org. members for tasks such as DNS setup and CI/CD.",
      "Organize meetings between frontend and backend.",
      "Gather feedback, share progress, communicate with leadership, etc.",
      "Update designs as we gather feedback",
    ],
  },
  {
    type: "p",
    text: "The project has been a massive learning opportunity for me, and opened my eyes to what I love doing. I learned that designing user-focused products is something I care deeply about, and have endless motivation to do. This is the motivation behind my current goal of finding a job in product or UX design",
  },
  {
    type: "custom",
    content: (
      <a href="https://dashboard-v4-beta.labs.transitmatters.org/red">
        <div
          style={{
            backgroundColor: "white",
            paddingLeft: "1rem",
            paddingRight: "1rem",
            paddingTop: ".5rem",
            paddingBottom: ".5rem",
            borderRadius: ".5rem",
          }}
        >
          <p style={{ color: "#0a0a0a" }}>Check out our progress</p>
        </div>
      </a>
    ),
  },

  {
    type: "links",
    githubLink:
      "https://github.com/transitmatters/t-performance-dash/tree/dashboard-v4",
    figmaLink:
      "https://www.figma.com/file/bLBzzBX3r6tG2CoS6vWglD/Dashboard---V4?node-id=1%3A55&t=ci7douClyjtiNNaG-1",
  },
];
