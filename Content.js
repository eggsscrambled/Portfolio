/* ==========================================================
   EDIT YOUR CONTENT HERE – you shouldn’t need to touch
   the other files. Each project and hackathon becomes its own
   full-screen section. Add or remove items as you like.
   ========================================================== */
const CONTENT = {
  name: "Cooper Horne",
  tagline: "Programming oriented CIT student",

  about: {
    // Each string becomes its own paragraph
    paragraphs: [
      "Write a few sentences about who you are and what you do.",
      "Add another paragraph about what you’re learning, what you enjoy, or what you’re looking for next."
    ],
    skills: ["Skill One", "Skill Two", "Skill Three", "Skill Four"],
    photo: "" // optional: image path or URL, e.g. "me.jpg". Leave "" for the gradient placeholder.
  },

  projects: [
    {
      title: "Project 1",
      description: "Describe what it is, the problem it solves, and what you built.",
      tags: ["Tech A", "Tech B"],
      image: "" // optional screenshot path/URL
    },
    {
      title: "Project 2",
      description: "Describe what it is, the problem it solves, and what you built.",
      tags: ["Tech A", "Tech B"],
      image: ""
    }
  ],

  hackathons: [
    {
      title: "Hackathon 1",
      date: "Month Year",
      result: "Result or role (e.g. 1st place)",
      description: "What you built in the time limit, who you worked with, and what you learned.",
      tags: ["Tech A", "Tech B"]
    },
    {
      title: "Hackathon 2",
      date: "Month Year",
      result: "Result or role",
      description: "What you built in the time limit, who you worked with, and what you learned.",
      tags: ["Tech A", "Tech B"]
    }
  ],

  // Short statement of purpose: what you do, who you do it for, and why.
  mission: "Write your personal mission statement here: what you stand for, who you want to help, and the kind of work you want to do.",

  // Your landing page (the name, tagline and About section above) takes the place of a cover letter.
  resume: {
    experience: [
      { role: "Job Title", org: "Company or Organization", dates: "Mon Year – Mon Year",
        bullets: ["Describe something you accomplished, with a result if you can.", "Describe another responsibility or achievement."] },
      { role: "Job Title", org: "Company or Organization", dates: "Mon Year – Mon Year",
        bullets: ["Describe something you accomplished, with a result if you can.", "Describe another responsibility or achievement."] }
    ],
    education: [
      { degree: "Degree or Program", school: "School Name", dates: "Year – Year" }
    ],
    skills: [
      { label: "Technical", items: ["Skill One", "Skill Two", "Skill Three"] },
      { label: "Soft skills", items: ["Communication", "Teamwork", "Problem solving"] }
    ]
  },

  // Volunteer work. In each description, point out the IT or soft skills you used,
  // and list them in "skills" (e.g. "IT: troubleshooting", "Soft skill: leadership").
  volunteer: [
    { org: "Organization 1", role: "Your role", dates: "Mon Year – Mon Year",
      description: "What you did and who it helped. Highlight an IT task or a soft skill like teaching, leading, or listening.",
      skills: ["IT: skill", "Soft skill: skill"] },
    { org: "Organization 2", role: "Your role", dates: "Mon Year – Mon Year",
      description: "What you did and who it helped. Highlight an IT task or a soft skill like teaching, leading, or listening.",
      skills: ["IT: skill", "Soft skill: skill"] },
    { org: "Organization 3", role: "Your role", dates: "Mon Year – Mon Year",
      description: "What you did and who it helped. Highlight an IT task or a soft skill like teaching, leading, or listening.",
      skills: ["IT: skill", "Soft skill: skill"] }
  ],

  // Kind words from at least 3 people who know your work. Quote a letter of reference if you have one.
  references: [
    { quote: "Paste a short, specific compliment from this person here.", name: "Reference Name 1", role: "Title, Organization" },
    { quote: "Paste a short, specific compliment from this person here.", name: "Reference Name 2", role: "Title, Organization" },
    { quote: "Paste a short, specific compliment from this person here.", name: "Reference Name 3", role: "Title, Organization" }
  ],

  footer: "© " + new Date().getFullYear() + " Your Name"
};