/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};


 //start  temp code and edit section 
 
// oirginal code(*)

// const greeting = {
//   username: "Chris Coterillo",
//   title: "Hi all, I'm Chris",
//   subTitle: emoji(
//     "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks."
//   ),
//   resumeLink:
//     "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
//   displayGreeting: true // Set false to hide this section, defaults to true
// };

// Temp Code (*)
const greeting = {
  username: "Chris Coterillo",
  title: "Hi all, I'm Chris",
  subTitle: emoji(
    "An Industrial Engineer turned Data Analyst with a knack for sales 📊 skilled in Python, SQL, Power BI, and Excel — helping businesses grow through data, dashboards, and smart decisions."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

 //end temp code and edit section



// Social Media Links

const socialMediaLinks = {
  display: true, // Set false to hide the entire Social Media section

  links: {
    github: {
      url: "https://github.com/saadpasta",
      display: false
    },
    linkedin: {
      url: "https://www.linkedin.com/in/chris-coterillo/",
      display: true
    },
    gmail: {
      url: "coterillochris@gmail.com",
      display: true
    },
    gitlab: {
      url: "https://gitlab.com/saadpasta",
      display: false
    },
    facebook: {
      url: "https://www.facebook.com/saad.pasta7",
      display: false
    },
    medium: {
      url: "https://medium.com/@saadpasta",
      display: false
    },
    stackoverflow: {
      url: "https://stackoverflow.com/users/10422806/saad-pasta",
      display: false
    }
    // Add more platforms like Instagram, Twitter, Kaggle here similarly
  }
};


// Skills Section

const aboutSection = {
  title: "Energetic, Ambitious, and Hardworking Industrial Engineer Ready to Excel",
  subTitle: "Welcome world,",
  description: [
    emoji(
      "I'm Chris Coterillo, a dynamic and results-driven industrial engineer with a passion for problem-solving and innovation. With a solid background in industrial and systems engineering from Georgia Institute of Technology, I thrive in fast-paced environments where I can apply my analytical skills to drive tangible results."
    ),
    emoji(
      "As a dedicated team player, I believe in the power of collaboration and am always eager to contribute to collective success. My experience spans roles where I've successfully navigated diverse challenges, from optimizing supply chain flows, managing data pipelines, and to leading technical sales initiatives."
    ),
    emoji(
      "With a relentless drive for excellence and a commitment to continuous improvement, I'm excited to leverage my skills and expertise to tackle new challenges and make meaningful contributions to your team. Let's connect and explore how we can work together to achieve extraordinary results!"
    ),
    emoji(
      "Outside of my professional pursuits, I'm an avid traveler, always seeking new adventures and experiences that broaden my horizons. I'm also deeply passionate about clean eating and living a healthy lifestyle, focusing on unprocessed foods that fuel both the body and mind."
    )
  ],
  display: true // Set to false to hide this section
};

export default aboutSection;



/* Make Sure to include correct Font Awesome Classname to view your icon
   https://fontawesome.com/icons?d=gallery */

const skillsSection = {
  skills: [
    "⚡ Develop highly interactive front-end / user interfaces for web and mobile applications",
    "⚡ Build Progressive Web Applications (PWA) using modern stacks",
    "⚡ Integrate third-party services such as Firebase, AWS, and Digital Ocean"
  ],
  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide the entire Education section
  schools: [
    {
      display: true, // Set false to hide this individual school entry
      schoolName: "Georgia Institute of Technology",
      logo: require("./assets/images/georgia_institute_of_technology_logo.jpeg"),
      subHeader: "Bachelor of Engineering - Industrial Engineering",
      duration: "August 2017 - December 2019",
      desc: "Participated in the research of XXX and published 3 papers.",
      descBullets: [
        "xx",
        "xx"
      ]
    },
    {
      display: false, // Set false to hide this individual school entry
      schoolName: "Georgia Tech",
      logo: require("./assets/images/georgia_institute_of_technology_logo.jpeg"),
      subHeader: "Bachelor of Engineering in Industrial Engineering",
      duration: "September 2013 - April 2017",
      desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    }
  ]
};


// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, // Set it to true to show workExperiences Section
  experience: [
    {
      role: "Contract Analyst & Sabbatical",
      company: "Self - Employeed",
      companylogo: require("./assets/images/microsoft-office-excel.svg"),
      date: "Nov 2022 – Present",
      desc: "Brief job description or summary goes here.",
      descBullets: [
        "Bullet point 1 about your responsibilities or achievements",
        "Bullet point 2 about your responsibilities or achievements"
      ]
    },
    {
      role: "FPA&A Business Analyst",
      company: "Costa Farms",
      companylogo: require("./assets/images/costa_farms_logo.jpeg"),
      date: "Feb 2022 – Nov 2022",
      desc: "Oversaw the process of the R&D pipeline’s connection to portfolio performance and analyzed KPIs in relation to newly launched or promoted products, Assisted the Product Planning process by optimizing reporting dashboards and working closely with the Product Management and R&D departments, Developed new Key Performance Indicators (KPIs), conducted data analysis and forecasts to optimize the product portfolio, and interpreted the impact of the R&D pipeline, Aligned product offerings to meet company revenue targets while operating cross-functionally in sync with the Demand and Supply teams, Managed MBR and IR processes for Product team, aligning revenue goals with finance objectives",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      role: "Sales Engineer",
      company: "AmeriKooler",
      companylogo: require("./assets/images/AmeriKoolerLogo.jpeg"),
      date: "Sep 2021 – Feb 2022",
      desc: "Led efforts to cater to a new wholesale market by customizing and modifying product line to fit new market needs, Market Research and Analysis: Conducted ongoing research and analysis to effectively target the custom coolers market"
    },
    {
      role: "Industrial Engineer",
      company: "United Steel Storage (USSI)",
      companylogo: require("./assets/images/ussipartners_logo.jpeg"),
      date: "Feb 2021 – May 2021",
      desc: "Customer engagement to design both new warehouses and suggest operational improvements for existing warehouses, Responsible for all aspects of warehouse design projects including operational assessments of existing client operations, recommendations to improve current operations, and new facility design, Provided the most cost-effective solution to meet the client’s strategic business requirements"
    }
  ]
};


/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};


const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  // The following fields map directly to your contact icons/buttons:
  github: "https://github.com/chris-coterillo",
  linkedin: "https://www.linkedin.com/in/chris-coterillo/",
  email_address: "coterillochris@gmail.com",
  // You can also add Twitter, StackOverflow, etc., in the same style

  location: "Miami, FL (Remote Ready)", // shows your area and remote availability
  openForOpportunities: true, // controls the "Open for opportunities" label
  display: true // shows or hides the entire section
};



// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting, 
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
