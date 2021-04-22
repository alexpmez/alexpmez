import { Injectable } from '@angular/core';

@Injectable()
export class WorkExperienceService {
  workExperienceSec: any[] = [];

  getJobsSec = () => this.workExperienceSec = workExperienceArr.slice(0);
  
  getTasksSec = () => this.workExperienceSec = workExperienceArr.slice(0);
}

const workExperienceArr = [
{
    'institution': 'Orbit Group Partners',
    'title': 'UI/UX Designer / Front-end Developer',
    'duraction': 'July 2018 to Present',
    'content': 'Designing and assisting in the development of cross platform responsive angular app',
    'responsabilities': 'Daily skills, tools and technologies',
    'tasks': [
        'Photoshop',
        'Illustrator',
        'Balsamiq',
        'Figma',
        'CSS3',
        'Sass',
        'HTML5',
        'Angular',
        'React',
        'JavaScript'
    ]
},
{
    'institution': 'SELF-EMPLOYED',
    'title': 'UI/UX Designer / Front-end Developer',
    'content': 'I took some time off between jobs, so I could finish some pending projects for some existing clients.',
    'responsabilities': 'Daily skills, tools and technologies',
    'duraction': '2018',
    'tasks': [
        'Photoshop',
        'Sketch',
        'CSS3',
        'HTML5',
        'Sass',
        'Angular',
        'JavaScript',
        'jQuery'
    ]
},
{
    'institution': 'PARKA GROUP INC.',
    'title': 'UI/UX Designer / Front-end Developer',
    'duraction': '2014-2017',
    'content': 'Designing and Developing cross platform responsive websites, fixing bugs on old products and maintaining legacy codebases, from the company’s extensive online properties. Daily github use, code reviews',
    'responsabilities': 'Daily skills, tools and technologies',
    'tasks': [
        'Photoshop',
        'Illustrator',
        'Sketch',
        'CSS3',
        'Sass',
        'HTML5',
        'JavaScript',
        'jQuery',
        'Jenkins',
        'Github',
        'Launching and interacting with NPM modules.',
        'Helping in management of CSS in a multi-team environment.',
        'Researching emerging web and software technologies.'
    ]
},
{
    'institution': 'FEATURE CREEP TECHNOLOGY (now Parka Group Inc).',
    'title': 'UI/UX Designer',
    'duraction': '2006-2014',
    'content': 'Designing landing pages and websites to reflect the new trends of UI/UX Designs with Photoshop. Building landing pages and websites using CSS3 and HTML5.',
    'responsabilities': 'Daily skills, tools and technologies',
    'tasks': [
        'CSS3',
        'HTML5',
        'Photoshop',
        'Illustrator'
    ]
},
{
    'institution': 'ANNIK INC.',
    'title': 'Graphic Designer',
    'duraction': '2000-2005',
    'content': 'Design posters, billboards, web-sites, magazine and book covers, business cards and logos.',
    'responsabilities': 'Daily skills, tools and technologies',
    'tasks': [
        'Photoshop',
        'Illustrator'
    ]
}
]