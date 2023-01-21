import RuleScheduling from "../Images/RuleSchedulingCarGo.png";
import HeadImage from "../Images/CarGoHeadImage.png";

export const cargo = [
  { type: "img", location: HeadImage },
  {
    type: "p",
    text: `CarGo was an idea that was brought to me by a small business owner who had an idea to improve a pain-point of his business. He employed many part-time drivers for delivery, and these drivers were constantly showing up late, or not at all. In addition to that issue, the burden of scheduling and ensuring there were sufficient drivers on any given day was an administrative headache.`,
  },
  {
    type: "p",
    text: `The idea was to create a solution to ease these issues, according to two main ideas. First, allow the drivers to earn more money for being reliable. Second, allow the drivers to self-schedule to provide them greater flexibility and reduce the burden of scheduling.`,
  },
  {
    type: "p",
    text: `The concept was brought to me by the business owner, and from there I started off on coming up with a design for the app. I designed the interaction of the users with the app, and how it would function. The styling was done by a 3rd party.`,
  },
  {
    type: "p",
    text: `Building the app was a huge learning experience, and getting the opportunity to see the employees use the app was very enlightening.`,
  },

  { type: "h", text: `Rule Creation` },
  {
    type: "p",
    text: `One of the key interactions was creating shifts. We needed warehouse managers to be able to efficiently create their schedules, and minimize the time they needed to spend managing their calendar.`,
  },
  {
    type: "p",
    text: `To start, I wanted to get an understanding of how shifts were scheduled currently. This involved talking to my cofounder about how he scheduled shifts. The long-term pattern was most days were a flat 6-7 drivers, and then in the busier months of the year, that number would ramp up over a few months to about 12 drivers per day, and then back down. So most weeks there was a set number of shifts each day. The shifts were pretty standard in length as well.`,
  },
  {
    type: "p",
    text: `One abnormality in the scheduling was that the business was highly dependent on weather. On particularly hot days, there was increased customer demand. This meant extra drivers were needed on a short notice. `,
  },
  {
    type: "p",
    text: `We also wanted drivers to be able to select shifts two weeks in advance, so they could plan around their schedule`,
  },
  {
    type: "p",
    text: `With that information, I began working on a rule creation interface. The primary interaction was a “Repeating shift” scheduling interface. That looked like this:`,
  },
  { type: "img", location: RuleScheduling },
  {type:"p", text:`On the left: The screen when it is opened. We set some reasonable defaults for a few values, but the user must select the days on which the shifts will be created. They also can optionally set an end date. The interaction we imagined was that most shifts would be long running standard shifts which are present every day. Then we could schedule the temporary busy-season shifts in advance and have them end on the schedule.`},
  {
    type: "p",
    text: `This Case study is a WIP. I will be updating this with more information soon.`,
  },
];
