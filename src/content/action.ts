// Take Action copy — verbatim from approved images A1–A6 and the form states in the blueprint
// (IMG/TXT blocks in docs/sections/action.md; TXT:2105-2411). Checked by `npm run check:copy`.
import type { AssetId } from "@/lib/assets";

const img = (id: AssetId) => id;

export const links = {
  minutes: "https://publicaccess.hillsclerk.com/br/api/Document/AQ1%C3%89FuRtC3eDigqeOrtc4kvMW8ftGYkmV8UV7PGbail%C3%89bnOYGd0z0L%C3%89KJoPLOL8PlNhL50V8ZqAt6TErl6qsSxc%3D/?OverlayMode=View",
} as const;

export const hero = {
  kicker: "TAKE ACTION",
  title: "DEMAND CHANGE. RETIRE THE KEYSTONE–ODESSA COMMUNITY PLAN.",
  intro: "Keystone–Odessa needs a planning framework that puts the health, safety, and welfare of residents first.",
  cta: "Take Action →",
  photo: img("action-hero-family"),
  photoAlt: "A family looking across a lake toward a house among trees",
};

export const cards = {
  kicker: "THREE WAYS TO TAKE ACTION",
  title: "THE COUNTY CAN CHANGE COURSE.",
  intro: "The 2024 minutes record the Board’s ability to include Keystone–Odessa in the future. Ask commissioners to reopen the decision.",
  minutes: "Read the May 9, 2024 minutes →",
  support: {
    image: img("action-card-01"),
    title: "RETIRE THE EXTRA PLAN. KEEP THE PROTECTIONS.",
    text: "Ask the County to retire the separate Community Plan, reconsider related restrictions and retain enforceable safeguards.",
    primary: "Become a supporter and stay updated →",
    secondary: "Read and sign the petition →",
  },
  story: {
    image: img("action-card-02"),
    title: "SHARE YOUR STORY",
    text: "Tell us about roads, water and daily life in Keystone–Odessa.",
    cta: "SHARE MY STORY →",
  },
  share: {
    image: img("action-card-03"),
    title: "SHARE INFORMATION WITH THE COMMUNITY",
    text: "Help more residents understand the issues affecting Keystone–Odessa.",
    channels: ["Facebook", "Email", "Copy Link"],
    cta: "SHARE INFORMATION →",
  },
};

export const supporter = {
  topLinks: { apply: "Become a supporter and stay updated →", petition: "Read and sign the petition →" },
  eyebrow: "SAFER COMMUNITIES UNITED",
  title: "Supporter Application",
  audience: [
    { heading: "For Keystone-Odessa residents", label: "I live in Keystone-Odessa." },
    { heading: "For people living in communities adjacent to Keystone", label: "I live in a community adjacent to Keystone." },
    { heading: "For anyone who travels on Gunn Highway", label: "I travel on Gunn Highway." },
  ],
  mission: "Safer Communities United is a Florida nonprofit civic organization working to protect the health, safety, and welfare of the people of Keystone-Odessa. We educate the public and advocate for a lawful County process to retire the Keystone-Odessa Community Plan and apply the otherwise applicable policies of the Hillsborough County Comprehensive Plan.",
  participateTitle: "How I would like to participate",
  participate: [
    "Receive news and campaign updates",
    "Volunteer at community outreach events",
    "Help collect petition signatures",
    "Learn about formal membership if offered",
  ],
  infoTitle: "Your information",
  fields: {
    fullName: "FULL NAME",
    street: "STREET ADDRESS",
    optional: "optional",
    city: "CITY",
    zip: "ZIP CODE",
    email: "EMAIL",
    phone: "PHONE",
    contact: "PREFERRED CONTACT",
    signature: "SIGNATURE",
    date: "DATE",
  },
  contactChoices: ["Email", "Text", "Call"],
  consentTitle: "Consent",
  consent: "By signing, I ask to join the Safer Communities United supporter network and authorize the organization to contact me about its civic and educational activities. I understand that this form does not create statutory voting membership. Any formal membership will be governed by the corporation's articles, bylaws, and board-approved rules.",
  privacy: "Privacy: We will use this information only for organizational communications and will not sell it. We will request separate permission before publicly submitting a supporter list. This is not a donation request.",
  returnNote: "Return this form to the organizer who provided it.",
  send: "Send application",
  errors: {
    name: "Enter your full name.",
    email: "Enter a valid email address.",
    phone: "Add a phone number or change your contact preference.",
    signature: "Type your full name to sign.",
    date: "Enter a valid date.",
  },
  pending: { button: "Sending…", message: "Sending your application…" },
  success: { title: "Thank you for adding your support!", message: "Your application has been submitted. We’re happy to have you with us as we work toward a safer community." },
  failure: { title: "We couldn’t confirm the send.", message: "Your entries are still here. Please try again.", retry: "Try again" },
};

export const story = {
  kicker: "SHARE YOUR STORY",
  title: "Show the community how planning policies affect real life.",
  intro: "Anyone affected by the Keystone–Odessa Community Plan is welcome to share their experience.",
  topics: [
    { id: "roads", label: "Roads & Safety" },
    { id: "water", label: "Water & Septic" },
    { id: "traffic", label: "Traffic" },
    { id: "housing", label: "Housing" },
    { id: "infrastructure", label: "Infrastructure" },
    { id: "services", label: "Essential Services" },
    { id: "other", label: "Other Community Issues" },
  ],
  cta: "SHARE MY STORY →",
  photo: img("action-story-mailbox"),
  photoAlt: "A black mailbox numbered 33556 on a wooden post among plants",
  form: {
    title: "Share Your Story",
    intro: "Your real-life experience helps show how planning policies affect our community.",
    name: { label: "Name", placeholder: "Your name" },
    connection: { label: "Your Connection to the Area (optional)", placeholder: "For example: resident, worker, commuter, visitor or another connection" },
    issue: { label: "Related Issue", placeholder: "Select an issue" },
    story: { label: "Your Story", placeholder: "Tell us about your experience..." },
    upload: { label: "Upload Photo/Document (optional)", main: "Choose files or drag and drop", hint: "Photos, documents, or other files" },
    publish: { label: "Allow the story to be published publicly?", yes: "Yes", no: "No" },
    submit: "Submit Story",
  },
  errors: { issue: "Choose a related issue.", story: "Enter your story." },
  heading: "Please check these fields.",
  pending: { button: "Sending…", message: "Sending your story…" },
  success: { title: "Thank you for sharing your story!", message: "Your experience helps bring community concerns into focus." },
  failure: { title: "We couldn’t confirm the send.", message: "Your entries are still here. Please try again.", retry: "Try again" },
};

export const share = {
  kicker: "SHARE INFORMATION",
  title: "Share Information with the Community",
  intro: "Help everyone affected by the Keystone–Odessa Community Plan understand the issues.",
  lead: "You can easily share this website or specific issue pages through:",
  channels: ["Facebook", "Email", "Copy Link"],
  cta: "SHARE INFORMATION →",
  note: "The more fully the community has access to information, the more people can participate in decisions that affect the future of Keystone–Odessa.",
  photo: img("action-share-laptop"),
  photoAlt: "A laptop showing the website with a Share This Page panel and sharing icons",
  panel: {
    title: "Share This Page",
    intro: "Help everyone affected learn about the issues and get involved.",
    choices: ["Share on Facebook", "Share via Email", "Copy Link"],
  },
};

export const stories = {
  kicker: "COMMUNITY STORIES",
  title: "STORIES FROM THE COMMUNITY",
  intro: "Real-life experiences show how planning issues affect the daily lives of Keystone–Odessa residents.",
  sample: "Illustrative sample stories",
  tagline: "Real people. Real stories. A stronger community.",
  items: [
    {
      id: "road", label: "ROAD SAFETY", image: img("action-stories-road"),
      quote: "“Traffic has increased significantly, and it feels less safe for our children to walk or bike in our neighborhood.”",
      who: "Keystone–Odessa Resident", date: "September 2026",
    },
    {
      id: "water", label: "WATER & SEPTIC", image: img("action-stories-water"),
      quote: "“Our well water often has a strange taste and odor. We are concerned about our long-term health and the lack of options for public water.”",
      who: "Odessa Resident", date: "August 2026",
    },
    {
      id: "access", label: "EVERYDAY ACCESS", image: img("action-stories-access"),
      quote: "“We have to drive a long way for groceries, healthcare, and other essential services. It makes daily life more difficult, especially for older residents.”",
      who: "Keystone Resident", date: "September 2026",
    },
  ],
  read: "Read the Story →",
  viewAll: "VIEW ALL STORIES →",
  landscape: img("drawn-landscape"),
};

export const petition = {
  intro: {
    title: "PUT PEOPLE FIRST. RETIRE THE KEYSTONE–ODESSA COMMUNITY PLAN.",
    text: "Read the evidence, read the petition and add your name to the request for the County to initiate the amendment process. Make the community’s demand impossible to ignore.",
  },
  kicker: "TOGETHER TOWARD A SAFER KEYSTONE-ODESSA",
  title: "PUT THE HEALTH, SAFETY, AND WELFARE OF RESIDENTS FIRST.",
  heading: "Read and sign the petition",
  eyebrow: "SAFER COMMUNITIES UNITED",
  name: "Retire the Keystone Odessa Community Plan",
  tagline: "Retire the separate local plan and rely on the Hillsborough County Comprehensive Plan.",
  to: "TO THE HILLSBOROUGH COUNTY BOARD OF COUNTY COMMISSIONERS",
  body: "We, the undersigned residents, property owners, workers, and community supporters, respectfully request that Hillsborough County initiate a Comprehensive Plan amendment and complete all legally required analysis, notice, and public hearings to retire the Keystone-Odessa Community Plan as a separate community-specific plan. Our goal is for Keystone-Odessa to rely on the otherwise applicable Hillsborough County Comprehensive Plan as its governing planning framework, while all applicable zoning, environmental, infrastructure, and safety protections remain enforceable.",
  whyTitle: "Why we are asking",
  why: "We are concerned that the existing plan contains outdated, unclear, or conflicting provisions; restricts some transportation changes without requiring current safety evidence; and omits measurable protections for emergency access, disability access, safe school travel, private wells and septic systems, and flood resilience. Any replacement policy should protect the rural character and natural resources of Keystone-Odessa while placing the health, safety, and welfare of the people first.",
  doTitle: "What the County should do",
  do: [
    "Remove the Keystone-Odessa Community Plan and its associated policies from the Hillsborough County Comprehensive Plan. Repeal implementing Land Development Code provisions, including Part 3.08.00 (Keystone-Odessa Rural Development Standards), through the required public amendment processes. Retain otherwise applicable County protections.",
    "Rely on the Hillsborough County Comprehensive Plan as the principal planning framework for Keystone-Odessa.",
    "Use current data on crashes, traffic, emergency response, evacuation, flooding, wells, septic systems, accessibility, housing, and environmental conditions.",
    "Hold open public meetings and allow all affected residents to participate before making a decision.",
  ],
  declaration: "By signing, I support the request above. I understand that this petition may be submitted to public agencies and that my printed name, community or ZIP code, signature, and date may become public records.",
  independent: "Independent civic petition - not sponsored by Hillsborough County. Please sign only once.",
  detailsTitle: "Your details",
  fields: {
    name: { label: "Printed name", placeholder: "Your printed name" },
    community: { label: "Community or ZIP", placeholder: "Your community or ZIP code" },
    signature: { label: "Signature", placeholder: "Your signature" },
    date: { label: "Date", placeholder: "MM / DD / YYYY" },
  },
  support: "I support the petition above.",
  updatesTitle: "Optional email updates",
  updates: "Email me campaign updates. I can unsubscribe.",
  email: { label: "Email — only for updates", placeholder: "Your email address" },
  separate: "Separate choice. Not required to sign.",
  submit: "SIGN THIS PETITION →",
  notMember: "Signing does not join the supporter network.",
  become: "Become a supporter and stay updated →",
  errors: {
    name: "Enter your printed name.",
    community: "Enter your community or ZIP code.",
    signature: "Type your full name to sign.",
    date: "Enter a valid date.",
    support: "Select this checkbox to sign.",
    email: "Enter a valid email address if you choose updates.",
  },
  heading2: "Please check these fields.",
  pending: { button: "Sending…", message: "Sending your petition response…" },
  success: { title: "Thank you for adding your voice!", message: "Together, we can put the community’s health, safety and welfare first." },
  failure: { title: "We couldn’t confirm the send.", message: "Your entries are still here. Please try again.", retry: "Try again" },
  sideLeft: img("action-petition-side-left"),
  sideRight: img("action-petition-side-right"),
};

// Not blueprint copy: new error wording approved by the user (V-014, D-023; TXT:2264 requires approval of any new
// visible help or error wording). Shown only when the selected attachments exceed the 4 MB limit (D-022).
// check:copy skips this export because it is not quoted in docs/sections.
export const approvedCopy = {
  attachmentsTooLarge: "Choose files that total 4 MB or less.",
};
