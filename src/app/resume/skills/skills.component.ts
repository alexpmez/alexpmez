import { WorkExperienceService } from '../../services/work-experience.service';
import { EducationService } from '../../services/education.service';
import { Component, OnInit, Input } from '@angular/core';
import { trigger, style, state, transition, animate, keyframes, query, stagger, useAnimation } from '@angular/animations';
import { fade, fadeInAnimation, fadeOutAnimation } from '../../animations';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  providers: [EducationService, WorkExperienceService],
  animations: [
    trigger('skillsAnimation', [
      transition('* => *', [

        query(':enter', style({opacity: 0 }), {optional: true}),

        query(':enter', stagger('200ms', [
          animate('.6s ease-in', keyframes([
            style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
            style({opacity: .5, transform: 'translateY(35px)', offset: .3}),
            style({opacity: 1, transform: 'translateY(0)', offset: 1})
          ]))
        ]), {optional: true})
      ])
    ]),
    trigger('fade', [
      transition(':enter', [
        useAnimation(fadeInAnimation, { 
          params: {
            duration: '1.5s'
          }
        })
      ])
    ]),
  ]
})
export class SkillsComponent implements OnInit {
  animationState: string = '';
  skillsBarSec: any[] = skillsBarArr.slice(0);
  skillsCopy: any = {
    'design': {
      'title': 'UI/UX Designer: ',
      'copy': 'I have a solid foundation and thorough understanding of the UI/UX Design process and can be partially involved in the development. I am very comfortable creating interactive wireframes and mockups with Sketch, Figma, and Balsamic, extensive experience with Adobe Photoshop and Illustrator, able to create a wide range of design covering apps, websites, email, logos, etc. I have very good interpersonal and organizational skills and very well adapted to work as part of a creative team.'
    },
    'frontEnd': {
      'title': 'Front-End Developer: ',
      'copy': 'Extensive knowledge and experience creating and maintaining cross-platform responsive websites with HTML5, CSS3, BootStrap, Sass. Some experience with JavaScript ES6 and jQuery, Angular, React, and VueJS. This hybrid makes me a stronger asset to a team because I’m able to check out a source control (i.e. Git) branch and help the developer team with the CSS, and even some basic app architecture, app components, or other small portions of the code.'
    }
  };

  constructor(private educationService: EducationService, private workExperienceService: WorkExperienceService) {}

  getAnimationState = ($event:any) => this.animationState = $event.phaseName;

  ngOnInit() {
  }

}

const skillsBarArr = [
  {
    'skills': 'UI design',
    'percentage': '95%',
    'years': '12'
  },
  {
    'skills': 'UX design',
    'percentage': '70%',
    'years': '4'
  },
	{
		'skills': 'Sketch/Figma',
		'percentage': '75%',
		'years': '5'
	},
	{
    'skills': 'balsamiq',
    'percentage': '70%',
    'years': '2'
  },
	{ 
		'skills': 'photoshop/Illustrator',
		'percentage': '90%',
		'years': '12'
	},
  {
    'skills': 'HTML/CSS',
    'percentage': '85%',
    'years': '7'
  },
  {
    'skills': 'SASS',
    'percentage': '85%',
    'years': '5'
  },
  {
    'skills': 'javaScript',
    'percentage': '60%',
    'years': '4'
  },
  {
    'skills': 'typeScript',
    'percentage': '55%',
    'years': '3'
  },
  {
    'skills': 'angular',
    'percentage': '50%',
    'years': '3'
  },
  {
    'skills': 'react',
    'percentage': '45%',
    'years': '1'
  },
  {
    'skills': 'vuejs',
    'percentage': '35%',
    'years': '1'
  }
]