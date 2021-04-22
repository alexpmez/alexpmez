import { Injectable } from '@angular/core';

@Injectable()
export class EducationService {
  educationalSec = [];

  getEducSec = () => this.educationalSec = educationArr.slice(0); 
  
}

const educationArr = [
  {
    'institution': 'Udemy.com',
    'title': 'Webpack 4',
    'duraction': '2019',
    'content': 'The Complete Tutorial For Beginners'
  },
  {
    'institution': 'Udemy.com',
    'title': 'React',
    'duraction': '2018',
    'content': 'The Complete Guide (incl Hooks, React Router, Redux)'
  },
  {
    'institution': 'Udemy.com',
    'title': 'WCAG 2.1',
    'duraction': '2017',
    'content': 'Meeting Web Accessibility Guidelines (Section 508/ WCAG 2.1)'
  },
  {
    'institution': 'Udemy.com',
    'title': 'Figma',
    'duraction': '2017',
    'content': 'Learn Figma - UI/UX Design Essential Training'
  },
  {
    'institution': 'Udemy.com',
    'title': 'Sketch',
    'duraction': '2016',
    'content': 'Sketch from A to Z: Become an app designer'
  },
  {
    'institution': 'Pluralsight.com',
    'title': 'TypeScript',
    'duraction': '2015',
    'content': 'TypeScript Fundamentals'
  },
  {
    'institution': 'Udemy.com',
    'title': 'Angular 6 (formerly Angular 2) - The Complete Guide',
    'duraction': '2015',
    'content': 'Angular - The Complete Guide'
  },
  {
    'institution': 'Udemy.com',
    'title': 'Front-End Development',
    'duraction': '2014',
    'content': 'The Web Developer Bootcamp'
  },
  {
    'institution': 'Codeschool.com',
    'title': 'JavaScript',
    'duraction': '2014',
    'content': 'JavaScript Road Trip'
  },
  {
    'institution': 'Codeschool.com',
    'title': 'jQuery',
    'duraction': '2014',
    'content': 'Try jQuery'
  },
  {
    'institution': 'George Brown College',
    'title': 'JavaScript',
    'duraction': '2014',
    'content': 'JavaScript, Web/Multimedia Management and Webmaster'
  },
  {
    'institution': 'Lynda.com',
    'title': 'Programming Fundamentals',
    'duraction': '2014',
    'content': 'Programming Foundations: Fundamentals'
  },
  {
    'institution': 'International Academy of Design',
    'title': 'Web Designer',
    'duraction': '1999-2001',
    'content': 'Web Design and Development'
  },
  {
    'institution': 'George Brown College',
    'title': 'Graphic Designer',
    'duraction': '1997-1999',
    'content': 'Computer Graphic Design'
  }
]