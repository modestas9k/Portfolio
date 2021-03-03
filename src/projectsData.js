const studyProjects = [
  {
    id: "DigitalArt",
    title: "Digital Art website",
    description:
      "An Unsplash clone developed from scratch for final work of course. Added Masonry component, material-ui-chip-input and jimp for resizing images before uploading to firebase storage.",
    gitHub: "https://github.com/modestas9k/DigitalArt",
    website: "https://vue-demo-c6fe6.firebaseapp.com/",
    chips: ["React.js", "Material-ui", "Firebase"],
    smallImage: "./assets/digitalArt/digitalArt1_small.png",
    smallImageAlt: "Digital Art home page",
    type: "studyProjects",
  },
  {
    id: "WineSite",
    title: "Wine site",
    description:
      "A wine management system where goal was CRUD from scratch, connecting React App <-> Node.js <-> Azure MySQL database and authenticate with JsonWebToken.",
    gitHub: "https://github.com/modestas9k/WineSite",
    chips: [
      "React.js",
      "Styled-components",
      "Node.js",
      "MySql",
      "jwt and bcrypt",
    ],
    smallImage: "./assets/wineSite/wineSite1_small.png",
    smallImageAlt: "My wine page",
    type: "studyProjects",
  },
  {
    id: "Finansuskaiciuokle",
    title: "Finance calculator",
    description:
      "Simple finance management system, tracking product income and outcome.",
    gitHub: "https://github.com/modestas9k/FinansuSkaiciuokle",
    website: "https://finansuskaiciuokle.netlify.app/finance",
    chips: ["Vue.js", "Bulma", "Firebase"],
    smallImage: "assets/finansuskaiciuokle/fin1_small.png",
    smallImageAlt: "finance calculator front page",
    type: "studyProjects",
  },
  {
    id: "CardGenerator",
    title: "Card generator",
    description:
      "An simple random people card generator, using randomuser.me API for generating data. My first project using an API.",
    gitHub: "https://github.com/modestas9k/CardGenerator",
    website: "https://randompplgenerator.netlify.app/",
    chips: ["HTML", "CSS", "JS"],
    smallImage: "assets/CardGenerator/cardGenerator_small.png",
    smallImageAlt: "card generator home page",
    type: "studyProjects",
  },
  {
    id: "FlippingCard",
    title: "Flipping card",
    smallImage: "assets/oneDayChallenge/flippingCard_small.png",
    smallImageAlt: "flipping card",
    type: "oneDayChallenge",
  },
  {
    id: "CountDown",
    title: "CountDown",
    smallImage: "assets/oneDayChallenge/countDown_small.png",
    smallImageAlt: "countDown",
    type: "oneDayChallenge",
  },
  {
    id: "DrumKit",
    title: "Drum Kit",
    smallImage: "assets/oneDayChallenge/drumKit_small.png",
    smallImageAlt: "drum kit",
    type: "oneDayChallenge",
  },
  {
    id: "TvShow",
    title: "Find Tv Show",
    description:
      "Small website with tvmaze API to search for a tv show and add to watch list.",
    gitHub: "https://github.com/modestas9k/MovieSearch",
    website: "https://frosty-jackson-c9f36a.netlify.app/#/",
    chips: ["Vue.js", "Vuex"],
    smallImage: "assets/TvShow/showSearch2_small.png",
    smallImageAlt: "about show example",
    images: [
      {
        id: 1,
        src: "assets/TvShow/show-search-1.png",
        alt: "home page",
      },
      {
        id: 2,
        src: "assets/TvShow/showSearch2.png",
        alt: "show page",
      },
      {
        id: 3,
        src: "assets/TvShow/showSearch3.png",
        alt: "list page",
      },
    ],
    type: "projects",
  },
];

export default studyProjects;
