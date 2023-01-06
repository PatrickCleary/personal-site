export const text = [`I joined TransitMatters, a public transit advocacy group in October, after hearing about their work through the Boston Globe. They were getting publicity for their dashboards which provide the public with data about the conditions of the MBTA.

I started out by doing some development with them, and fixing some bugs. I learned they were working on a new version of their dashboards. They had goals of improving usability, making it more mobile-friendly, and supplying better information.

At one of the first meetings I attended, they mentioned they needed a design of the site/app to work off. I had some app design experience from a couple of previous projects, so I figured I’d give it a try.

I ended up overhauling the entire design with a new focus, and sharing that with the group. They absolutely loved it, and we are in the process of building my designs.

Here’s some pictures:`,

`
The group had mentioned some of their big picture plans and ideas. From all of those ideas, it became clear there was a central idea/theme.

We wanted to make it appeal to the everyday commuter.

There were three issues to solve related to that.
Make it easier to share
Require less background-knowledge
Provide useful daily information upfront
`,
`Shareability
Let’s start with the first one. Making it easier to share. I had seen plenty of screenshots from the app. They were useful, but not attractive, and not easy to interpret. Here’s an example:


To provide some context, this was shared in our Slack group, and the person sharing it was pointing out that the median headway was about 15 minutes (that’s bad by the way).

I saw a few problems with this. The most glaring in my eyes was that the median headway is not given as a statistic. To figure that out, the user has no option other than estimating from the graphs. This was not very inviting to the average commuter, and I realized we needed to provide the most valuable analyses for our users upfront. 

What I decided to do was come up with the statistics which are most valuable to our users and provide them as widgets right at the top of the page. I also made them modular, so as we learn more about our users and what they want, we can update the selection.

This is what a similar screenshot would look like after my design.


The next issue is it’s hard to know what information is important. The graph grabs your attention, but it requires a lot of the other information on the page to fully interpret it, and that information is not in order of importance.


Here is a comparison of the location for what you need to interpret the page.
I consolidated all of the relevant information into one place, so from a quick glance the user knows what they are looking at. I also made some minor changes like adding “today” when the current date is selected and the day of the week.



Require less background-knowledge
Another issue I saw with our dashboards is the amount of information a user needs to have to interpret the graphs. This is where the pre-packaged analyses come in handy as well. Instead of simply being a source for data, I wanted it to be a source for information.

When thinking about this, I realized the important question is how did the user end up looking at the page they’re currently on. The dashboards are often shared in news articles linking back to the page the journalist got the data from. They are also often shared on social media, like twitter. This means the first experience someone has with the dashboard is often not by entering through the landing page. They often are thrown into a dashboard which is pre-configured. I realized this could be a great opportunity for encouraging the user’s natural curiosity. If they clicked on a link about a dashboard, there’s a good chance they will want to see another, similar dashboard.

One such case I imagined would be when someone clicks on a link to the dashboard showing that travel times are up along their commute today. For me, the next immediate thought would be “How does it compare to the past month?” In that case, the user will quickly see there are some filters at the bottom of the page to check out other analyses. In the previous version to see another date range, they would need to go into the start date and end date and make a decision about when to set those to get a good comparison.



In the new design, the user is presented with a few interesting options right away in this filter bar. We’ve given them the tools they need to find what they are interested in without having to dig.


Provide Useful Information Up-front
This last challenge was my favorite part of the design, because it’s my least favorite part of the current site. This is the current landing page. I’ve numbered each place you need to click and input information before the site will show you any information.

That was my main focus when I started working on the design. I wanted the very first page the user sees to show them something they find interesting. That’s how I came up with the concept for a widget-based landing page. When the user opens the site now, this is the first thing they will see:


This page will start up by giving the user a whole bunch of cool things to look at, and will help guide them where they want to go. Many people want to know the travel time of their commute, so I put that at the very top. We will have some default values for each widget. This allows the user to visually see how the app works rather than trying to figure it out. Each widget clearly contains some information, and some controls. If they scroll through and see something they find interesting, they just need to adjust the settings to what they’re interested in. As they become more curious, and explore the other widgets, they will have the opportunity to find things they otherwise may not have thought to look for.
`];
