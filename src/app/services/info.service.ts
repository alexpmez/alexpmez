import { Injectable } from '@angular/core';

@Injectable()
export class InfoService {
  headerSecArr: any = [];

  getHeaderArr = () => this.headerSecArr = headerArr.slice(0);

  mainInfo: { firstName:string, lastName:string, skillsItem1:string, skillsItem2:string, skillsItem3:string, skillsItem4:string, mainMessage:string } = {
    firstName: 'Alex',
    lastName: 'Perez Menendez',
    skillsItem1: 'UI/UX',
    skillsItem2: 'Designer',
    skillsItem3: 'Front-End',
    skillsItem4: 'Developer',
    mainMessage: "Clean and Efficient Design"
  };
}

const headerArr = [
  {
    'titleFirstWord': 'my',
    'titleSecondWord': 'work',
    'subtitle': 'A glimpse into my design experiences'
  },
  {
    'titleFirstWord': 'my',
    'titleSecondWord': 'resume',
    'subtitle': 'More info about my abilities and experience'
  },
  {
   'titleFirstWord': 'contact',
    'titleSecondWord': 'me',
    'subtitle': "Get in touch, Let's Work Together"
  }
]