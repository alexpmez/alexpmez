import { Injectable } from '@angular/core';

@Injectable()
export class ThumbService {
  visibleThumbs:any = [];

  getThumbs = () => this.visibleThumbs = thumbsTitles.slice(0);
}

const thumbsTitles = [
  {
    "id": 1,
    "fileName": "coanching-app",
    "category": "front-end",
    "detail": "This is the description for the item",
    "button": "design",
    "width": "60%",
    "opacity": "0.6"
  },
  {
    "id": 2,
    "fileName": "forgetmenotcs",
    "category": "front-end",
    "detail": "This is the description for the item",
    "button": "webapp",
    "width": "50%",
    "opacity": "0.5"
  },
  {
    "id": 3,
    "fileName": "compas-one",
    "category": "front-end",
    "detail": "This is the description for the item",
    "button": "design",
    "width": "40%",
    "opacity": "0.6"
  },
  {
    "id": 4,
    "fileName": "og-partners",
    "category": "design",
    "detail": "This is the description for the item",
    "button": "design",
    "width": "70%",
    "opacity": "0.6"
  },
  {
    "id": 5,
    "fileName": "berg-electric",
    "category": "front-end",
    "detail": "This is the description for the item",
    "button": "website",
    "width": "70%",
    "opacity": "0.5"
  },
  {
    "id": 6,
    "fileName": "interactive-menu",
    "category": "design",
    "detail": "This is the description for the item",
    "button": "design",
    "width": "50%",
    "opacity": "0.8"
  },
  {
    "id": 7,
    "fileName": "novowords",
    "category": "front-end",
    "detail": "This is the description for the item",
    "button": "website",
    "width": "50%",
    "opacity": "0.8"
  },
  {
    "id": 8,
    "fileName": "club",
    "category": "front-end",
    "detail": "This is the description for the item",
    "button": "website",
    "width": "70%",
    "opacity": "0.7"
  },
  {
    "id": 9,
    "fileName": "speaking-parts",
    "category": "design",
    "detail": "This is the description for the item",
    "button": "design",
    "width": "70%",
    "opacity": "0.6"
  },
  {
    "id": 10,
    "fileName": "escambray",
    "category": "front-end",
    "detail": "This is the description for the item",
    "button": "website",
    "width": "60%",
    "opacity": "0.7"
  },
  {
    "id": 11,
    "fileName": "bodyflux",
    "category": "design",
    "detail": "This is the description for the item",
    "button": "design",
    "width": "50%",
    "opacity": "0.5"
  },
  {
    "id": 12,
    "fileName": "gain-health",
    "category": "design",
    "detail": "This is the description for the item",
    "button": "design",
    "width": "60%",
    "opacity": "0.6"
  },
  {
    "id": 13,
    "fileName": "iberowine",
    "category": "design",
    "detail": "This is the description for the item",
    "button": "design",
    "width": "80%",
    "opacity": "0.6"
  },
  {
    "id": 14,
    "fileName": "dainty",
    "category": "design",
    "detail": "This is the description for the item",
    "button": "design",
    "width": "40%",
    "opacity": "0.6"
  }
]