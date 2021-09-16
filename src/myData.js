// Skills Icons
import htmlIcon from "./images/html.svg"
import cssIcon from "./images/css.svg"
import reactIcon from "./images/react.svg"
import jsIcon from "./images/javascript.svg"
import designIcon from "./images/design.svg"
import codeIcon from "./images/code.svg"

// Social Icon
import githubIcon from "./images/github.svg"


export default {
  name: "Glen",
  headerTagline: [
    //Line 1 For Header
    "Web Design",
    //Line 2 For Header
    "User Experience",
    //Line 3 For Header
    "and Functionality",
  ],
  //   Header Paragraph
  headerParagraph:
    "Innovative problem-solver who is passionate about web development, with a focus on quality and design. Strengths in management, teamwork, and building projects from ideation to execution.",

  //Contact Email
  contactEmail: "glen.hood.dev@gmail.com",

  // End Header Details -----------------------

  // Work Section ------------------------
  projects: [
    {
      title: "Band{Mates}", //Project Title - Add Your Project Title Here
      para:
        "A virtual social space for musicians to meet other musicians based on needs,prefernces and a love for music! A web application that allows a user to create an account, sign in and create post in a community of other musicians.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://i.imgur.com/To0v4Ah.png",
      //Project URL - Add Your Project Url Here
      url: "https://band--mates.herokuapp.com",
      github: "https://github.com/glenhood/BandMates"
    },
    {
      title: "Meet Up", //Project Title - Add Your Project Title Here
      para:
        "Meet Up is a full stack web application that can be used to create events anywhere in the world or just browse current events going on. You can create a small event anywhere to try and make new friends or create just a micro event!", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://i.imgur.com/BUIgnWD.png",
      //Project URL - Add Your Project Url Here
      url: "https://uta-meet-up.herokuapp.com/",
      github: "https://github.com/glenhood/meet-up"
    },
    {
      title: "CryptoCprner", //Project Title - Add Your Project Title Here
      para:
        "This site was created in order to introduce absolute beginners to cryptocurrency, explain how it its market works, and provide steps they can take to learn more and spark their interest. ", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://i.imgur.com/xDgtZQk.png",
      //Project URL - Add Your Project Url Here
      url: "https://glenhood.github.io/CryptoCorner/",
      github: "https://github.com/glenhood/CryptoCorner"
    },
    {
      title: "Fitness Tracker", //Project Title - Add Your Project Title Here
      para:
        "This Heroku deployed site has the ability to view, create, and track daily workouts. User has the ability to log multiple exercises on any given day. A user is then able to track by name, type, weight, sets, reps, and duration of exercise. If a cardio exercise is recored, there is the ability to track distance traveled. With all of this functionality, a user can track to better achieve fitness goals.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://i.imgur.com/xhlWTPA.png?1",
      //Project URL - Add Your Project Url Here
      url: "https://immense-hamlet-68734.herokuapp.com/",
      github: "https://github.com/glenhood/Fitness-Tracker"
    },
    {
      title: "Work Day Scheduler", //Project Title - Add Your Project Title Here
      para:
        "A daily planner schedule that would help an user that has a busy schedule. When the planner is opened, the current day is displayed. Time blocks are available for all of the hours of the day. The time blocks are color coded, indicating past, present, and future. When an user saves an entry by clikcing the save button, the users entry will be saved in local storage. When the user visits the page again, the entered data will remain.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://i.imgur.com/uZX65z2.png",
      //Project URL - Add Your Project Url Here
      url: "https://glenhood.github.io/workday-scheduler/",
      github: "https://github.com/glenhood/workday-scheduler"
    },
    {
      title: "Online Note Taker", //Project Title - Add Your Project Title Here
      para:
        "This is a note taking application. Initially the user is presented a landing page with a link to a notes page. From there a user is able to input notes in the text area, with one of those text areas designated for the title of the note. After the user has entered a note then a save button becomes available and the note is save to the right of the note form.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://i.imgur.com/Tyx64XX.png",
      //Project URL - Add Your Project Url Here
      url: "https://note-taker7777.herokuapp.com/",
      github: "https://github.com/glenhood/Note-Taker"
    },

    /*
    If You Want To Add More Project just Copy and Paste This At The End
    ,{
        title: 'Project Five',
        para: 'Something Amazing',
        imageSrc: "",
        url: ''
    }
    */
  ],

  // End Work Section -----------------------

  // About Secton --------------
  aboutParaOne:
    "Front end web developer with an extensive background in business management to provide fresh perspectives in UI.",
  aboutParaTwo:
    "Earned a certificate in Full Stack Web Development from the University of Texas of Austin.",
  aboutParaThree:
    "Innovative problem-solver who is passionate about developing apps with a focus on quality, design, and development. Strengths in management, teamwork, and building projects from ideation to execution.    ",
  aboutImage:
    "https://i.imgur.com/SgQl17o.png",

  //   End About Section ---------------------

  // Skills Section ---------------

  //   Import Icons from the top and link it here

  skills: [
    {
      img: htmlIcon,
      para:
        "HTML 5",
    },
    {
      img: cssIcon,
      para:
        "CSS 3",
    },
    {
      img: jsIcon,
      para:
        "JavaScript",
    },
    {
      img: reactIcon,
      para:
        "React",
    },
    {
      img: designIcon,
      para:
        "Design",
    },
    {
      img: codeIcon,
      para:
        "Ability to adapt to new languages",
    },
  ],

  // End Skills Section --------------------------

  //   Promotion Section --------------------------

  promotionHeading: "Heading",
  promotionPara:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  // End Promotion Section -----------------

  //   Contact Section --------------

  contactSubHeading: "I would love to join your team. Let's connect!",
  social: [
    // Add Or Remove The Link Accordingly
    { img: githubIcon, url: "https://github.com/glenhood" },
    
  ],

  // End Contact Section ---------------
}

// Thanks for using this template, I would love to hear from you contact me at hello@chetanverma.com
