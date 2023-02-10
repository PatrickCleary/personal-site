import TM_Header from "../Images/TM_Case_Study_Header_Photo.png";
import MobileAccess from "../Images/MobileAccessScreenshot.png";
import TMControls from "../Images/TMControlsScreenshots.png";
import LandingComparison from "../Images/LandingComparison.png";
import Homescreen from "../Images/homescreen.png";
import OverTime from "../Images/OverTime.png";
import Median from "../Images/median.png";

export const transit = [
  { type: "h", text: "TransitMatters Data Dashboards" },
  {
    type: "custom",
    content: (
      <p>
        TransitMatters is a public transit advocacy group based in Boston. I
        joined them as a volunteer software engineer, then began doing design
        for a project to revamp their dashboards. I designed the updated version
        of their dashboards, which are in development{" "}
        <a
          style={{ color: "white" }}
          href="https://dashboard-v4-beta.labs.transitmatters.org/red"
        >
          here.
        </a>
      </p>
    ),
  },
  { type: "p", text: `The new designs:` },
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
        dashboards were being used and what goals we had for the the new
        version. Luckily I had some great sources available to me:
      </p>
    ),
  },
  {
    type: "list",
    text: [
      `User analytics`,
      `Stakeholders (org. members)`,
      `Tweets referencing dashboards`,
    ],
  },
  {
    type: "custom",
    content: (
      <p style={{ marginTop: "2rem" }}>
        My research gave me some key insights:
      </p>
    ),
  },
  {
    type: "custom",
    content: (
      <p style={{ fontSize: "1.25rem", marginTop: "2rem" }}>
        <b>Mobile First</b>
      </p>
    ),
  },
  {
    type: "custom",
    content: (
      <>
        <p>
          Talking to some organization members, I learned they wanted to improve
          the mobile experience for the site. I decided to get data on what
          percentage of our users were on mobile.
        </p>
        <p style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          It was <b>55%</b>.
        </p>
        <p>
          I suspected that number would be even higher if the site was easier to
          use on mobile. This made it clear the site should be designed with a
          mobile device in mind.
        </p>
      </>
    ),
  },

  {
    type: "custom",
    content: (
      <p style={{ fontSize: "1.25rem", marginTop: "2rem" }}>
        <b>Data Immediacy</b>
      </p>
    ),
  },
  {
    type: "custom",
    content: (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          rowGap: "1rem",
        }}
      >
        <p style={{ paddingTop: "2rem", fontSize: "1.125rem" }}>
          From the user analytics, I determined the homepage was the most
          frequently visited page at just over <b>10%</b> of total views. The
          homepage (below) confronted the user with a series of inputs required
          to gather data. No analysis or visuals would be shown until the form
          was complete.
        </p>
        <img
          style={{ padding: ".5rem" }}
          src={Homescreen}
          width={"50%"}
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
      <p style={{ fontSize: "1.25rem", marginTop: "2rem" }}>
        <b>Packaged Analysis</b>
      </p>
    ),
  },
  {
    type: "custom",
    content: (
      <div
        style={{
          paddingTop: "1rem",
          rowGap: "1rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <p>
          I looked through approximately 60 tweets which referenced the
          dashboards. Almost every tweet highlighted a graph with one of the
          following patterns:
        </p>
        <p>1. A drastic change in a particular metric over time</p>
        <img
          style={{ padding: ".5rem" }}
          src={OverTime}
          width={"50%"}
          alt={"Tweet with change in metric"}
        />
        <p>2. A graph with a median/average outside the norm.</p>
        <img
          style={{ padding: ".5rem" }}
          src={Median}
          width={"50%"}
          alt={"Tweet displaying high median"}
        />
      </div>
    ),
  },

  {
    type: "custom",
    content: (
      <p>
        The second item was most interesting, because users <i>wanted</i> to
        share an aggregate data point (median) but were forced to use a graph to
        convey this.
      </p>
    ),
  },

  { type: "h", text: "What I Did" },
  {
    type: "p",
    text: "I created a mock-up in Figma to address the issues I had discovered in my research.",
  },
  {
    type: "custom",
    content: (
      <p style={{ fontSize: "1.25rem", marginTop: "2rem" }}>
        <b>Redesigned Homepage</b>
      </p>
    ),
  },
  {
    type: "p",
    text: "My first priority was to reduce the amount of searching a user needed to do to find valuable information. This meant redesigning the homepage.",
  },
  { type: "img", location: LandingComparison, width: "120%", caption: " " },

  {
    type: "p",
    text: "The key to this homepage was a new user would be prevented with ideas for what they might want to find.",
  },
  {
    type: "custom",
    content: (
      <p style={{ fontSize: "1.25rem", marginTop: "2rem" }}>
        <b>Packaged Analysis + Screenshots</b>
      </p>
    ),
  },

  {
    type: "p",
    text: `As I discovered in my research, I wanted to add summary statistics to the dashboards. I also wanted to improve the layout so that a screenshot is both aesthetically pleasing and contains all relevant information.`,
  },
  {
    type: "p",
    text: `Below is a picture an organization member shared of higher than normal headways. On the right, is what this screenshot would look like today.`,
  },
  {
    type: "img",
    location: MobileAccess,
    width: "120%",
  },
  {
    type: "custom",
    content: (
      <p style={{ fontSize: "1.25rem", marginTop: "2rem" }}>
        <b>Other Design Chocies</b>
      </p>
    ),
  },
  {
    type: "list",
    text: [
      `Modular: I went for a widget-based approach. Members of the organization are constantly working on new data visualizations and new data analyses. Everything can be moved and adjusted easily to account for this.`,
      `Consolidation: The organization has 4 unique websites. This design focused on only one, but integrates aspects of the other pages. The goal is to consolidate all the pages into this dashboard.`,
    ],
  },

  { type: "h", text: "Results" },
  {
    type: "p",
    text: `I shared my designs with the organization, and they were very enthused. We immediately began development.`,
  },
  {
    type: "p",
    text: `As the work has progressed we have received more input from stakeholders and users and adjusted the designs as we go. We also have used tailwind components for an easier developer experience, so some of the UI has changed.`,
  },
  {
    type: "custom",
    content: (
      <p>
        You can see the current progress{" "}
        <a
          style={{ color: "white" }}
          href="https://dashboard-v4-beta.labs.transitmatters.org/red"
        >
          here.
        </a>
      </p>
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
