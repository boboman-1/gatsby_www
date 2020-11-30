import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Gary | Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'garyspencer.com | Developer | Hiker | Motorcyclist | Traveller. ', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello I am',
  name: 'Gary Spencer',
  subtitle: 'Developer && Hiker',
  cta: 'About Me',
};

// ABOUT DATA
export const aboutData = {
  img: 'rockies art.jpg',
  paragraphOne: 'I live in the mountains and live for every chance to get out and experience nature',
  paragraphTwo: 'I work with technology and code for a living currently as a Site Reliability, or DevOps, Engineer',
  paragraphThree: 'In no particular order I love hiking, backpacking, snowboarding, snowshoeing, motorcycles, travel, disc golf, good books, good coffee, guitar, game development, science & technology, philosophy, psychology, spirituatlity, good beer, good food, and connecting with driven & honest people!'
  //resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'grower.png',
    title: 'Grower',
    info: 'Grower was an entry into LudumDare number 46.  LudumDare is community oriented event we like to call a "jam" to create a game from scratch within a specific timeline.  Ludum Dare is unique in that each team who enters is incentivized to give feedback to at least a few other entries, with an intuitive voting system. This inspires tons of great feedback about your games from so many unique perspectives!',
    info2: 'Grower is a 2D resource management game about growing a flower and keeping it happy.  The theme of the game Jam was "Keep it alive!"',
    url: 'https://boboman.itch.io/grower'
  },
  {
    id: nanoid(),
    img: 'covidHero.png',
    title: 'Covid Hero',
    info: 'Covid Hero was an entry into Jamingtons 8.0 Quarantine Jam hosted by OneRat games where me and a partner had limited time to create a game from scratch and be judged against other teams peers doing the same!',
    info2: 'Covid Hero is a paperboy-like 2D side scroller where your goal is to deliver Toilet Paper and defeat or avoid germs.',
    url: 'https://boboman.itch.io/covid-hero' // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'catLady.png',
    title: 'Crazy Cat Lady',
    info: 'Crazy Cat Lady was another team entry into a Ludum Dare Game Jam, #40 this time with a theme of "The more you have, the worse it is".  Me and a few friends worked together to finish this in a weekend',
    info2: 'n Crazy Cat Lady you play Peggy, in a NYC high-rise condo where the building is on fire.  Unfortunately peggy has a lot of cats to save, and those buggers get in your way.  I contributed to sound effects, ai, game loop logic and particle effects!',
    url: 'https://ldjam.com/events/ludum-dare/40/crazy-cat-lady-full-throttle-reloaded-with-a-revengence'
  },
  {
    id: nanoid(),
    img: 'lastbotStanding.png',
    title: 'Last Bot Standing',
    info: 'LBS is a team entry into a Ludum Dare Game Jam, #39 this time with a theme of "Running out of Power".  This time me and a few friends worked together to finish this in a weekend',
    info2: 'You play as a robot trying to run away and sabotage the survival of the other robots!  I contributed much of the game loop logic, physics and input, robot ai, sound effects and particle effects',
    url: 'https://ldjam.com/events/ludum-dare/39/$35875'
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Got cool stuff to talk about? garywspencer@protonmail.com',
  btn: 'Email me',
  email: 'garywspencer@protonmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/garyspencer/',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
