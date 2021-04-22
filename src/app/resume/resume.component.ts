import { WorkExperienceService } from './../services/work-experience.service';
import { EducationService } from './../services/education.service';
import { SkillsComponent } from './skills/skills.component';
import { Component, OnInit, Input} from '@angular/core';
import { trigger, style, transition, useAnimation, animate, keyframes, query, stagger, state } from '@angular/animations';
import { fade, fadeInAnimation, fadeOutAnimation } from '../animations';


@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],

  providers: [EducationService, WorkExperienceService, SkillsComponent],
  animations: [
    ////////////////// list expanding ////////////////
    trigger('jobs-edu', [
      transition('* => *', [

        query(':enter', style({opacity: 0 }), {optional: true}),

        query(':enter', stagger('400ms', [
          animate('.6s ease-in', keyframes([
            style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
            style({opacity: .5, transform: 'translateY(35px)', offset: .3}),
            style({opacity: 1, transform: 'translateY(0)', offset: 1})
          ]))
        ]), {optional: true})
      ])
    ]),
    ////////////////// End list expanding ////////////////

    ////////////////// expandedCollapsed ////////////////
    trigger('expandedCollapsed', [
      state('void', style({
        height: 0,
        overflow: 'hidden'
      })),
      state('default', style({
        height: '*',
        overflow: 'auto'
      })),
      transition(':enter', [
        animate('500ms ease-out')
      ])
    ]),
    ////////////////// End expandedCollapsed ////////////////

    ////////////////// fade ////////////////
    trigger('fade', [
      transition(':enter', [
        useAnimation(fadeInAnimation, { 
          params: {
            duration: '1s'
          }
        })
      ])
    ])
    ////////////////// End fade ////////////////
  ]
})
export class ResumeComponent implements OnInit {
  aboutArr: any[] = [];
  resumeSec:string = 'profile';
  animationState: string = '';
  animationState2: string = '';
  expandedState: string = "void";
  hover: string = '';

  constructor(private educationService: EducationService, private workExperienceService: WorkExperienceService, private skillsComponent: SkillsComponent) {}

  //check if animation ended
  getAnimationState = ($event:any) => this.animationState = $event.phaseName;

  getAnimationState2 = ($event:any) => this.animationState2 = $event.phaseName;

  //Switch between Education and Jobs sections
  changeResumeSec = (sec:string) => {
    this.resumeSec = sec;
    this.animationState = 'start';
    this.animationState2 = 'start';

    if(this.resumeSec === 'education'){
      this.aboutArr = this.educationService.getEducSec();
    } else if(this.resumeSec === 'jobs'){
      this.aboutArr = this.workExperienceService.getJobsSec();
    } 
  }

  getSecTitle = (resumeSec:string):string => {
    if(this.resumeSec === 'profile'){
      return 'profile';
    } else if(this.resumeSec === 'skills'){
      return 'skills';
    } else if(this.resumeSec === 'jobs'){
      return 'employment';
    } else if(this.resumeSec === 'education'){
      return 'education';
    }
    return '';
  }

  //Download Resume
  downloadFile = () => './alex-perez-resume.pdf';


  //Change rollover icon color
  getStyle = (hover:boolean):string => {
    if(hover) {
      return 'rgb(145, 36, 36)';
    } else {
      return 'rgb(163, 177, 183)';
    }
    return '';
  }
 
  ngOnInit() {
  }

}