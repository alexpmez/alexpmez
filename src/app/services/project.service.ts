import { Injectable } from '@angular/core';

@Injectable()
export class ProjectService {

  getImage = (id: number) => porjectArr.slice(0).find(project => project.id == id);

   getProjArr = () => porjectArr.slice();
}

const porjectArr = [
  {
    "id": 1,
    "title": "Coaching Application",
    "projectCopy": [
      {
        "titleFirstWord": 'The',
        "titleSecondWord": ' Project',
        "mainCopy": [
          "An existing angular app for companies to monitor their staff productivity, these metrics provide the client with the tools to identify key coaching opportunities, leading to the improvement of individual performances and therefore, affecting the company’s overall growth."
        ]
      },
      {
        "titleFirstWord": 'My',
        "titleSecondWord": ' Responsibilities',
        "mainCopy": [
          "As UX/UI designer I was tasked with adding new features to an already exisnting Angular app as well as creating a new look and feel, plus improving the cross devices responsiveness of the application; I worked with the product owner and stakeholders, on a series of iterations.",
          "After the UX/UI design was approved, I implemented the css changes for this new overall look and feel, and then after my code was reviewed and released, I worked closely with the developer team on the new features, by helping in the developmet of some basic Angular components and some other small portions of the code, which free some of the developers time, to help meet the upcoming deadlines."
        ]
      }
    ],
    "projectTools": [
      "figma",
      "illustrator",
      "angular",
      "html5",
      "css3",
      "typescript",
      "visual-studio-code"
    ],
    "imgSec": [
      {
        "titleFirstWord": "login",
        "titleSecondWord": " page",
        "projectImg": [
          "coanching-app-1.jpg"
        ]
      },
      {
        "titleFirstWord": "coach",
        "titleSecondWord": "  module",
        "projectImg": [
          "coanching-app-2.svg"
        ]
      },
      {
        "titleFirstWord": "graph",
        "titleSecondWord": " expanded",
        "projectImg": [
          "coanching-app-3.svg"
        ]
      },
      {
        "titleFirstWord": "graph ",
        "titleSecondWord": " menu",
        "projectImg": [
          "coanching-app-4.svg"
        ]
      },
      {
        "titleFirstWord": "metrics",
        "titleSecondWord": " design",
        "projectImg": [
          "coanching-app-5.svg"
        ]
      },
      {
        "titleFirstWord": "rollover",
        "titleSecondWord": "  menu",
        "projectImg": [
          "coanching-app-6.svg"
        ]
      },
      {
        "titleFirstWord": "add",
        "titleSecondWord": " individual",
        "projectImg": [
          "coanching-app-7.svg"
        ]
      }
    ]
  },
  {
    "id": 2,
    "title": "Forgetmenotcs Care Services", 
    "website": "http://alexpmez.com/forgetmenotcs/",
    "projectCopy": [
      {
        "titleFirstWord": 'The',
        "titleSecondWord": ' Project',
        "mainCopy": [
          "I was contacted by entrepreneurs from Great Britain who envisioned a more flexible and affordable at-home healthcare service for seniors, to enable them to continue living in the comfort of their homes; their service would provide therapy, excursions, and companionship based on individual needs."
        ]
      },
      {
        "titleFirstWord": 'My',
        "titleSecondWord": ' Responsibilities',
        "mainCopy": [
          "The company had an existing logo that was created by a graphic designer in London; other than that, I had a blank canvas to work with, from color palette to layout. The clients communicated their business model in such a concise manner, that without the need for multiple revisions, I was able to deliver a design that clearly represented their vision.",
          "For the developer part of the app, I tackled this project with a modularized approach, using just jquery and vanilla javascript. The project is a single page app that loads a series of modules in a hierarchical manner, facilitating scalability and easier maintenance."
        ]
      }
    ],
    "projectTools": [
      "github",
      "semantic-ui",
      "html5",
      "css3",
      "jquery",
      "javascript",
      "photoshop",
      "illustrator",
      "visual-studio-code"
    ],
    "imgSec": [
      {
        "titleFirstWord": "mobile",
        "titleSecondWord": " view",
        "projectImg": [
          "forgetmenotcs-mobile-1.jpg",
          "forgetmenotcs-mobile-2.jpg",
          "forgetmenotcs-mobile-3.jpg",
          "forgetmenotcs-mobile-4.jpg"
        ]
      },
      {
        "titleFirstWord": "desktop",
        "titleSecondWord": " view",
        "projectImg": [
          "forgetmenotcs-desktop-1.jpg"
        ]
      }
    ]
  },
  {
    "id": 3,
    "title": "Compas One",
    "projectCopy": [
      {
        "titleFirstWord": 'The',
        "titleSecondWord": ' Project',
        "mainCopy": [
          "I was tasked with creating a brand new clean and simple design for the company’s main website and to come up with a brand new logo for a possible renaming of their main product."
        ]
      },
      {
        "titleFirstWord": 'My',
        "titleSecondWord": ' Responsibilities',
        "mainCopy": [
          "After some design iterations, one of the new design logos was approved. Then after some wireframing, I proceeded to create the new company website design."
        ]
      }
    ],
    "projectTools": [
      "illustrator", "figma"
    ],
    "imgSec": [
      {
        "titleFirstWord": "Logo",
        "titleSecondWord": " design",
        "logoWidth": '24rem',
        "projectImg": [
          "compas-one-logo.svg"
        ]
      },
      {
        "titleFirstWord": "Website",
        "titleSecondWord": " Design",
        "projectImg": [
          "compas-one-website.jpg"
        ]
      }
    ]
  },
  {
    "id": 4,
    "title": "Business Cards",
    "projectCopy": [
      {
        "titleFirstWord": 'The',
        "titleSecondWord": ' Project',
        "mainCopy": [
          "The task was to design news business cards to replace the existing ones."
        ]
      },
      {
        "titleFirstWord": 'My',
        "titleSecondWord": ' Responsibilities',
        "mainCopy": [
          "I designed a series of clean and elegant cards that better represented the company product line and vision."
        ]
      }
    ],
    "projectTools": [
      "illustrator"
    ],
    "imgSec": [
      {
        "titleFirstWord": "card",
        "titleSecondWord": " design",
        "projectImg": [
          "orbit-card-front-1.jpg"
        ]
      },
      {
        "titleFirstWord": "card",
        "titleSecondWord": " design",
        "projectImg": [
          "orbit-card-back-1.jpg"
        ]
      },
      {
        "titleFirstWord": "card",
        "titleSecondWord": " design",
        "projectImg": [
          "orbit-card-front-2.svg"
        ]
      },
      {
        "titleFirstWord": "card",
        "titleSecondWord": " design",
        "projectImg": [
          "orbit-card-back-2.jpg"
        ]
      },
      {
        "titleFirstWord": "card",
        "titleSecondWord": " design",
        "projectImg": [
          "orbit-card-front-3.svg"
        ]
      },
      {
        "titleFirstWord": "square",
        "titleSecondWord": " design",
        "projectImg": [
          "orbit-card-square-1.jpg"
        ]
      },
      {
        "titleFirstWord": "square",
        "titleSecondWord": " design",
        "projectImg": [
          "orbit-card-square-2.jpg"
        ]
      },
      {
        "titleFirstWord": "square",
        "titleSecondWord": " design",
        "projectImg": [
          "orbit-card-square-3.jpg"
        ]
      }
    ]
  },
  {
    "id": 5,
    "title": "Berg Electric",
    "website": "http://bergelectric.ca/",
    "projectCopy": [
      {
        "titleFirstWord": 'The',
        "titleSecondWord": ' Project',
        "mainCopy": [
          "A local electrical company hired me to upgrade their online presence so it could reflect their growing business in the GTA."
        ]
      },
      {
        "titleFirstWord": 'My',
        "titleSecondWord": ' Responsibilities',
        "mainCopy": [
          "The objective was to create a website that truly represents the robustness of this company; I achieved this by designing and creating a new responsive website, that showcases a more modern and engaging experience across all devices.",
          "I redesigned their company logo to create a more current and friendlier version. To maintain some degree of brand consistency, I kept the lighting bolt icon from the original logo."
        ]
      }
    ],
    "projectTools": [
      "github", 
      "html5", 
      "css3", 
      "javascript", 
      "jquery", 
      "visual-studio-code", 
      "photoshop",
      "illustrator"
    ],
    "imgSec": [
      {
        "titleFirstWord": "logo",
        "titleSecondWord": " design",
        "logoWidth": '24rem',
        "projectImg": [
          "berg-electric-logo.svg"
        ]
      },
      {
        "titleFirstWord": "mobile",
        "titleSecondWord": " view",
        "projectImg": [
          "berg-electric-mobile-1.jpg",
          "berg-electric-mobile-2.jpg",
          "berg-electric-mobile-3.jpg",
          "berg-electric-mobile-4.jpg"
        ]
      },
      {
        "titleFirstWord": "desktop",
        "titleSecondWord": " view",
        "projectImg": [
          "berg-electric-desktop-1.jpg"
        ]
      }
    ]
  },
  {
    "id": 6,
    "title": "Interactive Menu",
    "projectCopy": [
      {
        "titleFirstWord": 'The',
        "titleSecondWord": ' Project',
        "mainCopy": [
          "The product owner wanted to have an interactive menu, that on rollover throughout the application, would provide the customer with a dynamic set of submenus."
        ]
      },
      {
        "titleFirstWord": 'My',
        "titleSecondWord": ' Responsibilities',
        "mainCopy": [
          "I designed a series of alternative interactive menus that were sent via email throughout the company for a vote."
        ]
      }
    ],
    "projectTools": [
      "figma",
      "illustrator"
    ],
    "imgSec": [
      {
        "titleFirstWord": "Menu",
        "titleSecondWord": " Design",
        "projectImg": [
          "interactive-menu.svg"
        ]
      }
    ]
  },
  {
    "id": 7,
    "title": "Novowords Publishing",
    "website": "http://alexpmez.com/novowords/",
    "projectCopy": [
      {
        "titleFirstWord": 'The',
        "titleSecondWord": ' Project',
        "mainCopy": [
          "This was a very exciting project to be involved in, because it combined my passion for reading, with an environmentally conscious  approach to book publishing.",
          "This publishing company had a free ebook publishing business model approach. The idea was to provide an alternative to ebook publishing with no upfront cost to writers, and then charging them a very small percentage of future ebook sales. The strategy was based on volume sales with the added bonus of providing a far reaching platform that would give the majority of earnings back to the authors.",
          "Sadly, the budget for this project ran out; as well, it was simultaneously confronted by the aggressive approach to ebook publishing by biggest player in the market, so the project never got off the ground."
        ]
      },
      {
        "titleFirstWord": 'My',
        "titleSecondWord": ' Responsibilities',
        "mainCopy": [
          "I was the UI/UX Designer and Front-End Developer for this project. The challenged was to design a warm but modern website, that clearly conveyed to the visitor that this was a friendly but tech savvy company, with the knowledge to turn their words into an all devices compatible ebook with the ability to properly promote the books on all major online platforms.",
          "The front-end approach was to have a very quick turn around by putting together the design on a basic HTML5, CSS3, javascript and a bit of PHP to launch a temporary site that permitted the team testing of the business model, And then with a better understanding put all the efforts into a properly modulated Angular site , but as previously mentioned, the project didn’t progress that far."
        ]
      }
    ],
    "projectTools": [
      "github",
      "html5",
      "css3",
      "javascript",
      "jquery",
      "visual-studio-code",
      "sketch",
      "photoshop",
      "illustrator"
    ],
    "imgSec": [
      {
        "titleFirstWord": "logo",
        "titleSecondWord": " design",
        "logoWidth": '18rem',
        "projectImg": [
          "novowords-logo.svg"
        ]
      },
      {
        "titleFirstWord": "mobile",
        "titleSecondWord": " view",
        "projectImg": [
          "novowords-mobile-1.jpg",
          "novowords-mobile-2.jpg",
          "novowords-mobile-3.jpg",
          "novowords-mobile-4.jpg"
        ]
      },
      {
        "titleFirstWord": "desktop",
        "titleSecondWord": " view",
        "projectImg": [
          "novowords-desktop-1.jpg"
        ]
      },
      {
        "titleFirstWord": "other",
        "titleSecondWord": " elements",
        "projectImg": [
          "novowords-sec-1.jpg", 
          "novowords-sec-2.jpg", 
          "novowords-sec-3.jpg",
          "novowords-sec-4.jpg",
          "novowords-sec-6.jpg",
          "novowords-sec-7.jpg",
          "novowords-sec-8.jpg"
        ]
      }
    ]
  },
  {
    "id": 8,
    "title": "Welcome to the Club!",
    "website": "http://alexpmez.com/club/index.html",
    "projectCopy": [
      {
        "titleFirstWord": 'The',
        "titleSecondWord": ' Project',
        "mainCopy": [
          "A local online dating site had the ingenious approach to have a club-like landing page with a running timer and a feeling of exclusivity. The landing page was a very successful one, because it triggered a sense of urgency within visitors to take action, so they could join the VIP section, with privileges that are normally reserved to top paying customers."
        ]
      },
      {
        "titleFirstWord": 'My',
        "titleSecondWord": ' Responsibilities',
        "mainCopy": [
          "My approach was to design an exuberant atmosphere, that mimicked the clubbing experience. I decided that a video would be an effective way to go about it, followed by a trail of call to action buttons, combined with bright and youthful colors.",
          "Since this a very simple one page landing page, it took just html, css and a very small amount of jquery code to write, so it could generate the random number that represents the timer and the members that have already signed in."
        ]
      }
    ],
    "projectTools": [
      "github",
      "html5",
      "css3",
      "javascript",
      "jquery",
      "visual-studio-code",
      "photoshop",
      "illustrator"
    ],
    "imgSec": [
      {
        "titleFirstWord": "mobile",
        "titleSecondWord": " view",
        "projectImg": [
          "club-mobile-1.jpg",
          "club-mobile-2.jpg"
        ]
      },
      {
        "titleFirstWord": "desktop",
        "titleSecondWord": " view",
        "projectImg": [
          "club-desktop-1.jpg"
        ]
      }
    ]
  },
  {
    "id": 9,
    "title": "Speaking Parts",
    "website": "https://www.amazon.com/Speaking-Parts-Julianna-Choi-ebook/dp/B00AZNY46I/",
    "button": "view book",
    "projectImgSpace": "on",
    "projectCopy": [
      {
        "titleFirstWord": 'The',
        "titleSecondWord": ' Project',
        "mainCopy": [
          "A talented local poet needed a cover design for one of her books. The project required at least three different iterations to be presented to the client."
        ]
      },
      {
        "titleFirstWord": 'My',
        "titleSecondWord": ' Responsibilities',
        "mainCopy": [
          "The challenge was to design three very different iterations, that were heavily influenced by the writer’s approach to treat words as building blocks for well structured narratives. So I decided to her words as the main elements of the design."
        ]
      }
    ],
    "projectTools": [
      "photoshop",
      "illustrator"
    ],
    "imgSec": [
      {
        "titleFirstWord": "book",
        "titleSecondWord": " cover",
        "projectImg": [
          "speaking-parts-sec-1.svg",
          "speaking-parts-sec-2.svg",
          "speaking-parts-sec-3.jpg"
        ]
      }
    ]
  },
  {
    "id": 10,
    "title": "Hereos of Escambray",
    "website": "http://heroesofescambray.com",
    "projectCopy": [
      {
        "titleFirstWord": 'The',
        "titleSecondWord": ' Project',
        "mainCopy": [
          "I was approached by an historian to create an educational website about a little known historical event which he has written a variety of books on. He wanted a bilingual website that covered a  a peasant uprising during the 1960s against a communist dictator."
        ]
      },
      {
        "titleFirstWord": 'My',
        "titleSecondWord": ' Responsibilities',
        "mainCopy": [
          "I had to read about the subject to be able to truly comprehend the design approach. The goal was to be respectful of the past and to honour the courageous struggle of these forgotten individuals.",
          "One of the design challenges was create a vision that reflected the terrain and the time period in which they fought, but at the same time try to make it contemporaneous enough, that newer generations could relate.",
          "I utilized a color palette that represented the terrain on which they fought and added dark tones for a sense of historical solemnity to the site. I built the site using HTML5, CSS3, Bootstrap Framework and JavaScript."
        ]
      }
    ],
    "projectTools": [
      "github",
      "html5", 
      "css3", 
      "javascript", 
      "jquery", 
      "visual-studio-code", 
      "photoshop", 
      "illustrator" 
    ],
    "imgSec": [
      {
        "titleFirstWord": "logo",
        "titleSecondWord": " design",
        "logoWidth": '18rem',
        "projectImg": [
          "escambray-logo.svg"
        ]
      },
      {
        "titleFirstWord": "mobile",
        "titleSecondWord": " view",
        "projectImg": [
          "escambray-mobile-1.jpg",
          "escambray-mobile-2.jpg"
        ]
      },
      {
        "titleFirstWord": "desktop",
        "titleSecondWord": " view",
        "projectImg": [
          "escambray-desktop-1.jpg",
          "escambray-desktop-2.jpg",
          "escambray-desktop-3.jpg"
        ]
      }
    ]
  },
  {
    "id": 11,
    "title": "BodyFlux",
    "projectCopy": [
      {
        "titleFirstWord": 'The',
        "titleSecondWord": ' Project',
        "mainCopy": [
          "The app: A returning client wanted a new design for their webapp;  they wanted a clean, simple design, that represented fitness and vitality.",
          "Ankle/Wrist package design: They wanted a package design for one of their Ankle/Wrist weight products, that modernized their outdated package designs."
        ]
      },
      {
        "titleFirstWord": 'My',
        "titleSecondWord": ' Responsibilities',
        "mainCopy": [
          "The app: The goal was to create an uncluttered ux design where the visitor was confronted with a minimal number of elements and an inspiring design that showcased the benefits of using their exercising products.",
          "Ankle/Wrist package design: The goal was to create a package design with sharp contrasts that clearly displayed the product and its use; it emphasized the strong brand and benefits of their product line. They wanted a one design fits all package so it could be used for their 2lbs, 3lbs and 5lbs Ankle/Wrist weight pairs. This was achieved by creating a checkbox area with the three alternatives, that could be easily checked off at the time of packaging."
        ]
      }
    ],
    "projectTools": [
      "html5",
      "css3",
      "javascript",
      "jquery",
      "visual-studio-code",
      "photoshop",
      "illustrator"
    ],
    "imgSec": [
      {
        "titleFirstWord": "app",
        "titleSecondWord": " design",
        "projectImg": [
          "bodyflux-sec-1.jpg"
        ]
      },
      {
        "titleFirstWord": "package",
        "titleSecondWord": " design",
        "projectImg": [
          "bodyflux-sec-2.jpg"
        ]
      }
    ]
  },
  {
    "id": 12,
    "title": "Gain Health",
    "projectImgSpace": "on",
    "projectCopy": [
      {
        "titleFirstWord": 'The',
        "titleSecondWord": ' Project',
        "mainCopy": [
          "A client hired me to design a logo for a company that was intending to sell nutrition supplements, weight management and personal-care products."
        ]
      },
      {
        "titleFirstWord": 'My',
        "titleSecondWord": ' Responsibilities',
        "mainCopy": [
          "The challenge was to design a logo that reflected natural products and a healthy lifestyle. After some iterations the client fell in love with the clean and simple font, and the integration of natural elements in the shape of a tree."
        ]
      }
    ],
    "projectTools": [
      "photoshop",
      "illustrator"
    ],
    "imgSec": [
      {
        "titleFirstWord": "logo",
        "titleSecondWord": " design",
        "logoWidth": '24rem',
        "projectImg": [
          "gain-health-logo.svg"
        ]
      },
      {
        "projectImg": [
          "gain-health-sec-1.jpg",
          "gain-health-sec-2.jpg"
        ]
      }
    ]
  },
  {
    "id": 13,
    "title": "IberoWine Imports",
    "projectImgSpace": "on",
    "projectCopy": [
      {
        "titleFirstWord": 'The',
        "titleSecondWord": ' Project',
        "mainCopy": [
          "A Spanish wine importer hired me to design a logo to represent the legendary quality of the wine he is able to import from one of the oldest and third largest producer of wine in the world."
        ]
      },
      {
        "titleFirstWord": 'My',
        "titleSecondWord": ' Responsibilities',
        "mainCopy": [
          "The challenge was how to identify the particular style for the client. He wanted the Iberian peninsula to be clearly represented on the logo, as well as the .grapes that are believed to have been cultivated in the region as back as 3000 BC. I decided to capture this rich winery historical tradition with a regal undertone, displaying the authenticity and quality of the product."
        ]
      }
    ],
    "projectTools": [
      "photoshop",
      "illustrator"
    ],
    "imgSec": [
      {
        "titleFirstWord": "logo",
        "titleSecondWord": " design",
        "logoWidth": '24rem',
        "projectImg": [
          "iberowine-logo.svg"
        ]
      },
      {
        "projectImg": [
          "iberowine-sec-1.jpg",
          "iberowine-sec-2.jpg"
        ]
      }
    ]
  },
  {
    "id": 14,
    "title": "Dainty Foods",
    "projectCopy": [
      {
        "titleFirstWord": 'The',
        "titleSecondWord": ' Project',
        "mainCopy": [
          "Dainty was another recurrent client that wanted to display their product on one of their trucks. The campaign named “The World is Rice” was based on the multicultural nature of this product, that connects so many cultures in almost every corner of the world."
        ]
      },
      {
        "titleFirstWord": 'My',
        "titleSecondWord": ' Responsibilities',
        "mainCopy": [
          "The client wanted each side of the truck to be different. Side A needed to represent the rich cultural significance of our love for rice. Side B had to showcase the wide variety of their products.",
          "I decided to approach this design with a warm earthy color representative of farmers’ fields, with diverse faces from around the world.  I utilized the company symbol that can be found in their rice packaging as a design element on the right side and behind the company logo, creating an interesting flow and connecting the elements together throughout the design."
        ]
      }
    ],
    "projectTools": [
      "photoshop",
      "illustrator"
    ],
    "imgSec": [
      {
        "titleFirstWord": "truck",
        "titleSecondWord": " design",
        "projectImg": [
          "dainty-sec-1.jpg"
        ]
      },
      {
        "titleFirstWord": "Side A",
        "titleSecondWord": " Design",
        "projectImg": [
          "dainty-sec-2.jpg"
        ]
      },
      {
        "titleFirstWord": "Side B",
        "titleSecondWord": " Design",
        "projectImg": [
          "dainty-sec-3.jpg"
        ]
      }
    ]
  }
]