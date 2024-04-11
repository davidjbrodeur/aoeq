const dots = document.getElementById("moving-dots");
let numDots = 3; // start with 3 dots

setInterval(() => {
  if (numDots === 0) {
    numDots = 3; // reset to 3 dots
  } else {
    numDots--; // remove one dot
  }

  dots.innerHTML = ".".repeat(numDots); // update content of span
}, 1000);

const currentYear = new Date().getFullYear();
document.getElementById("currentYear").textContent = currentYear;

// Get the back-to-top button element
const backToTopButton = document.querySelector("#back-to-top");

// Function to check if the user has scrolled past the first screen
function checkScrollPosition() {
  const firstScreenHeight = window.innerHeight;
  const scrollPosition = window.scrollY;
  if (scrollPosition >= firstScreenHeight) {
    backToTopButton.classList.add("show");
  } else {
    backToTopButton.classList.remove("show");
  }
}

// Add an event listener to the window object to check the scroll position
window.addEventListener("scroll", checkScrollPosition);

var strings = {
  en: {
    nav_games: "Games",
    nav_newsletter: "Newsletter",
    nav_presskit: "Presskit",
    nav_about: "About",
    steel_legion_subtitle:
      "Metroidvania, action adventure. Sci-fi, cyberpunk. Release Q3 2023 as a ROM and Q1 2024 as a cartridge.",
    steel_legion_desc_1:
      "A new NES homebrew game where you play as a cyborg exploring an interconnected world while finding secrets and abilities, meeting NPCs and battling bosses in order to destroy a dangerous AI.",
    steel_legion_desc_2:
      "For buying options and more informations, subscribe to our ",
    find_demo_on_itch: "Find the demo on itch.io!",
    a_jesting_descent_subtitle: "Adventure, horror, top-down. Medieval, dungeon setting. Release Q4 2023.",
    a_jesting_descent_desc_1: "Find your way in this top-down horror exploration game. Without means to kill, outwit the dungeon’s threats, navigate an ever-shifting maze and uncover secrets in this replayable lightweight game. May God speed ye and forget not to take heed of thy torch and thy chalk, wayfarer!",
    presskit: "or check out our", 
    newsletter: "newsletter",
    more: "More to come",
    follow_us: "Follow Us",
    follow_us_text: "Follow us on Substack as a newsletter to get more information and engage with us. We'll provide news, insightful devlogs, freebies and much more! Don't worry, there will be no spam: just one main newsletter per month and the rest is up to you to check on our stack.",
    required: " indicates required",
    email: "Email address",
    subscribe: "Subscribe",
    first_name: "First Name",
    last_name: "Last Name",
    studio_bio_1:
      "Aeon & Star Interactive is an independent studio founded by friends and family in 2023, specializing in the development of retro or neo-retro games with worlds, stories, or aesthetics that are rich, symbolic, or interconnected in order to create gaming experiences that aim to resonate with players.",
    studio_desc: "Small indie video game studio from Quebec, Canada",
    rox: "Producer, marketing",
    dave: "PC dev lead, game design",
    frank: "NES dev lead, pixel art",
    marc: "Community management, additional design and research",
    jacob: "Testing",
    simon: "Concept artist (2D)",
    danny: "Narrative design and historical research"
  },
  fr: {
    nav_games: "Jeux",
    nav_newsletter: "Infolettre",
    nav_presskit: "Presskit",
    nav_about: "À propos",
    steel_legion_subtitle:
      "Metroidvania, aventure et action. Sci-fi, cyberpunk. Sortie automne 2023 et cassette NES en Q1 2024.",
    steel_legion_desc_1:
      "Un nouveau jeu homebrew NES où vous jouez en tant que cyborg explorant un monde interconnecté tout en trouvant des secrets et des capacités, rencontrant des PNJ et affrontant des boss afin de détruire une intelligence artificielle dangereuse.",
    steel_legion_desc_2:
      "Pour les options d'achat et plus d'informations, abonnez-vous à notre",
    find_demo_on_itch: "Trouvez le démo sur itch.io!",
    a_jesting_descent_subtitle: "Aventure, horreur, vue du dessus. Médiéval, environnement de donjon. Sortie prévue fin 2023.",
    a_jesting_descent_desc_1: "Trouvez votre chemin dans ce jeu d'exploration d'horreur en vue du dessus. Sans moyen de vaincre les monstres, trompez les menaces du donjon, naviguez dans un labyrinthe en constante évolution et découvrez des secrets dans ce jeu léger et rejouable. Que Dieu vous guide et n'oubliez pas de prendre garde à votre torche et à votre craie, voyageur !",
    presskit: "ou regardez notre", 
    newsletter: "infolettre",
    more: "Plus à suivre",
    follow_us: "Suivez-nous",
    follow_us_text: "Suivez-nous sur Substack en tant que newsletter pour obtenir plus d'informations et interagir avec nous. Nous vous fournirons des actualités, des journaux de développement instructifs, des cadeaux gratuits et bien plus encore ! Ne vous inquiétez pas, il n'y aura pas de spam : juste une seule newsletter principale par mois et le reste est disponible sur notre plateforme à votre guise.",
    required: " indique un champ obligatoire",
    email: "Addresse courriel",
    subscribe: "Abonnez-vous",
    first_name: "Prénom",
    last_name: "Nom de famille",
    studio_bio_1:
      "Aeon & Star Interactive est un studio indépendant fondé par des amis et de la famille en 2023 qui se spécialise dans le développement de jeux rétro ou néo-rétro avec des mondes, des histoires ou des esthétiques qui sont riches, symboliques ou interconnectés afin de créer des expériences de jeux qui vise à résonner avec les joueurs.",
    studio_desc: "Petit studio indépendant du Québec, Canada",
    rox: "Productrice, marketing",
    dave: "PC dev lead, game design",
    frank: "NES dev lead, pixel art",
    marc: "Gestionnaire de communauté, design et recherches additionnelles",
    jacob: "Testeur",
    simon: "Artiste concept (2D)",
    danny: "Design narratif et recherche historique"
  },
};

function switchLanguage(lang) {
  // Loop through each element with a "data-lang" attribute
  $("[data-lang]").each(function () {
    var key = $(this).data("lang");
    // Set the element's text to the corresponding string for the selected language
    $(this).text(strings[lang][key]);
  });
}

$(document).ready(function () {
  // Call the switchLanguage function with your desired language
  switchLanguage("en"); // Replace 'en' with your default language code if needed
});
