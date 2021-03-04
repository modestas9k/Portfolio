const allProjects = [
  {
    id: "DigitalArt",
    title: "Digital Art",
    description:
      "An Unsplash clone developed from scratch for final work of course. Added Masonry component, material-ui-chip-input and jimp for resizing images before uploading to firebase storage.",
    gitHub: "https://github.com/modestas9k/DigitalArt",
    website: "https://vue-demo-c6fe6.firebaseapp.com/",
    chips: ["React.js", "Material-ui", "Firebase"],
    smallImage: "/assets/digitalArt/digitalArt1_small.png",
    smallImageAlt: "Digital Art home page",
    type: "studyProjects",
    images: [
      {
        id: 1,
        src: "/assets/digitalArt/digitalArt1.png",
        alt: "home page",
      },
      {
        id: 2,
        src: "/assets/digitalArt/digitalArt2.png",
        alt: "home with login popup",
      },
      {
        id: 3,
        src: "/assets/digitalArt/digitalArt3.png",
        alt: "profile page",
      },
    ],
  },
  {
    id: "WineSite",
    title: "Add and track wine",
    description:
      "A wine management system where goal was CRUD from scratch, connecting React App <-> Node.js <-> Azure MySQL database and authenticate with JsonWebToken.",
    gitHub: "https://github.com/modestas9k/WineSite",
    chips: [
      "React.js",
      "Styled-components",
      "Node.js",
      "MySql",
      "JWT and BCrypt",
    ],
    smallImage: "/assets/wineSite/wineSite1_small.png",
    smallImageAlt: "My wine page",
    type: "studyProjects",
    images: [
      {
        id: 1,
        src: "/assets/wineSite/wineSite1.png",
        alt: "login page",
      },
      {
        id: 2,
        src: "/assets/wineSite/wineSite2.png",
        alt: "add wine type page",
      },
      {
        id: 3,
        src: "/assets/wineSite/wineSite3.png",
        alt: "add wine number page",
      },
      {
        id: 4,
        src: "/assets/wineSite/wineSite4.png",
        alt: "my wine page",
      },
    ],
  },
  {
    id: "FinansuSkaiciuokle",
    title: "Finance tracker",
    description:
      "Simple finance management system, tracking product income and outcome.",
    gitHub: "https://github.com/modestas9k/FinansuSkaiciuokle",
    website: "https://finansuskaiciuokle.netlify.app/finance",
    chips: ["Vue.js", "Bulma", "Firebase"],
    smallImage: "/assets/finansuSkaiciuokle/fin1_small.png",
    smallImageAlt: "finance calculator front page",
    type: "studyProjects",
    images: [
      {
        id: 1,
        src: "/assets/finansuSkaiciuokle/fin1.png",
        alt: "main page",
      },
      {
        id: 2,
        src: "/assets/finansuSkaiciuokle/fin2.png",
        alt: "main page",
      },
      {
        id: 3,
        src: "/assets/finansuSkaiciuokle/fin3.png",
        alt: "main page",
      },
      {
        id: 4,
        src: "/assets/finansuSkaiciuokle/fin4.png",
        alt: "main page",
      },
      {
        id: 5,
        src: "/assets/finansuSkaiciuokle/fin5.png",
        alt: "main page",
      },
    ],
  },
  {
    id: "CardGenerator",
    title: "Card generator",
    description:
      "An simple random people card generator, using randomuser.me API for generating data. My first project using an API.",
    gitHub: "https://github.com/modestas9k/CardGenerator",
    website: "https://randompplgenerator.netlify.app/",
    chips: ["HTML", "CSS", "JS"],
    smallImage: "/assets/CardGenerator/cardGenerator_small.png",
    smallImageAlt: "card generator home page",
    type: "studyProjects",
    images: [
      {
        id: 1,
        src: "/assets/CardGenerator/cardGenerator.png",
        alt: "card generator",
      },
    ],
  },
  {
    id: "FlippingCard",
    title: "Flipping card",
    smallImage: "/assets/oneDayChallenge/flippingCard_small.png",
    smallImageAlt: "flipping card",
    type: "oneDayChallenge",
  },
  {
    id: "CountDown",
    title: "CountDown",
    smallImage: "/assets/oneDayChallenge/countDown_small.png",
    smallImageAlt: "countDown",
    type: "oneDayChallenge",
  },
  {
    id: "DrumKit",
    title: "Drum Kit",
    smallImage: "/assets/oneDayChallenge/drumKit_small.png",
    smallImageAlt: "drum kit",
    type: "oneDayChallenge",
  },
  {
    id: "TvShow",
    title: "Find Tv Show",
    description:
      "Small website made with tvmaze API to search for a tv show and add to watch list.",
    gitHub: "https://github.com/modestas9k/MovieSearch",
    website: "https://frosty-jackson-c9f36a.netlify.app/#/",
    chips: ["Vue.js", "Vuex"],
    smallImage: "/assets/TvShow/showSearch2_small.png",
    smallImageAlt: "about show example",
    images: [
      {
        id: 1,
        src: "/assets/TvShow/show-search-1.png",
        alt: "home page",
      },
      {
        id: 2,
        src: "/assets/TvShow/show-search-2.png",
        alt: "show page",
      },
      {
        id: 3,
        src: "/assets/TvShow/show-search-3.png",
        alt: "list page",
      },
    ],
    type: "projects",
  },
];

export default allProjects;
