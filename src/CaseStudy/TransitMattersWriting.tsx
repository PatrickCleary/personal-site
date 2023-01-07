import TM_Header from "../Images/TM_Case_Study_Header_Photo.png";
import MobileAccess from "../Images/MobileAccessScreenshot.png";

export const content = [
  { type: "h", text: "TransitMatters Data Dashboards" },
  {
    type: "p",
    text: `I joined TransitMatters - a public transit advocacy group in October, after hearing about their work through the Boston Globe. They were receiving publicity for their data dashboards, a tool that provides data about the conditions of the Massachusetts Bay Transportation Authority (MBTA) system.`,
  },
  {
    type: "p",
    text: `I started out by doing software development for them, and I learned that they were working on a new version of their data dashboards. They had goals of improving usability, making it more mobile friendly, and supplying better information. They had lots of ideas, but needed someone to get it started with a design. I had some experience with that, so I decided to give it a shot. It turned out to be just what they needed, and now we are working on the development.`,
  },
  { type: "p", text: `Here's a few pictures:` },
  { type: "img", location: TM_Header },
  {
    type: "p",
    text: `Working with the group, I realized there was a central theme to the hopes for the new data dashboard: Make it appeal to the everyday commuter (without losing functionality).`,
  },
  {
    type: "p",
    text: "Working on the design, I came to three main issues to solve for that goal.",
  },
  {
    type: "list",
    text: [
      "Mobile Access",
      "Require less background knowledge",
      "Provide useful daily information upfront",
    ],
  },
  { type: "h", text: "Mobile Access" },
  {
    type: "p",
    text: "The group had discussed improving the mobile experience for a while, but I was curious. How many of our users were accessing the site on mobile? I looked at the statistics, and it turns out it's more than 50%. The site hadn't been designed originally with a mobile-first mentality, and the experience was less than stellar.",
  },
  {
    type: "p",
    text: "One of the major use cases for the dashboards, and a big source of new users is sharing. There are often screenshots posted on Twitter which receive attention and draw new users, and these screenshots are often from a mobile device. With the new design, I wanted to make screenshots as aesthetically pleasing, and easy to understand as possible.",
  },
  {
    type: "p",
    text: `Here's a comparison of a screenshot from before and after the redesign.`,
  },
  {
    type: "img",
    location: MobileAccess,
    caption: ``,
  },
  {
    type: "p",
    text: `The purpose of this screenshot was to share the median headway for the day, a frequently shared metric. In the old design, the user would need to interpret that from the graphs. Understanding the graphs might be quite confusing to someone who has not seen this before. In my design, I wanted to prioritze the aggregated statistics we most often use, and add widgets right at the top of the page with that information. That way the user doesn't have to search for the information they likely want.`,
  },
  {
    type: "p",
    text: `Another change I made was to consolidate the variables into the header and organize them by relevance. The type of data takes priority - Headways. That's the most important aspect. Then we have the line and date - most users will already know this since the color of the screenshot conveys the line (red) and the screenshots are typically shared with context of the date range (today). Also I made sure to add the description of the range "today" so the user doesn't have to read the date and compare to today's date.`,
  },
  { type: "h", text: `Require Less Background Knowledge` },
  {
    type: "p",
    text: `Another issue I saw with our dashboards is the amount of information a user needs to have to interpret the graphs. This is where the pre-packaged analyses come in handy as well. Instead of simply being a source for data, I wanted it to be a source for information.`,
  },
  {
    type: "p",
    text: `When thinking about this, I realized the important question is how did the user end up looking at the page they're currently on. The dashboards are often shared in news articles linking back to the page the journalist got the data from. They are also often shared on social media, like twitter. This means the first experience someone has with the dashboard is often not by entering through the landing page. They often are thrown into a dashboard which is pre-configured. I realized this could be a great opportunity for encouraging the user’s natural curiosity. If they clicked on a link about a dashboard, there’s a good chance they will want to see another, similar dashboard.`,
  },
  {
    type: "p",
    text: `One such case I imagined would be when someone clicks on a link to the dashboard showing that travel times are up along their commute today. For me, the next immediate thought would be “How does it compare to the past month?” In that case, the user will quickly see there are some filters at the bottom of the page to check out other analyses. In the previous version to see another date range, they would need to go into the start date and end date and make a decision about when to set those to get a good comparison.`,
  },
  { type: "img", location: "../Images/TBD", caption: "" },
  {
    type: "p",
    text: `In the new design, the user is presented with a few interesting options right away in this filter bar. We've given them the tools they need to find what they are interested in without having to dig.`,
  },
  { type: "h", text: "Provide Useful Information Upfront" },
  {
    type: "p",
    text: `This last challenge was my favorite part of the design, because it's my least favorite part of the current site. This is the current landing page. I've numbered each place you need to click and input information before the site will show you any information.`,
  },
  { type: "img", location: "../Images/TBD", caption: "" },
  {
    type: "p",
    text: `That was my main focus when I started working on the design. I wanted the very first page the user sees to show them something they find interesting. That’s how I came up with the concept for a widget-based landing page. When the user opens the site now, this is the first thing they will see:`,
  },
  { type: "img", location: "../Images/TBD", caption: " " },
  {
    type: "p",
    text: `This page will start up by giving the user a whole bunch of cool things to look at, and will help guide them where they want to go. Many people want to know the travel time of their commute, so I put that at the very top. We will have some default values for each widget. This allows the user to visually see how the app works rather than trying to figure it out. Each widget clearly contains some information, and some controls. If they scroll through and see something they find interesting, they just need to adjust the settings to what they're interested in. As they become more curious, and explore the other widgets, they will have the opportunity to find things they otherwise may not have thought to look for.`,
  },
];
