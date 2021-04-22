import { Component, OnInit } from '@angular/core';
import { InfoService } from '../services/info.service';
import { Router } from '@angular/router';
import { trigger, state, style, transition, useAnimation } from '@angular/animations';
import { fade, fadeInAnimation, fadeOutAnimation } from '../animations';
import { faLessThanEqual } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [InfoService],
  animations: [
    ////////////////// fade ////////////////
    trigger('fade', [
      transition(':enter', [
        useAnimation(fadeInAnimation, { 
          params: {
            duration: '2s'
          }
        })
      ])
    ]),

    trigger('avatarFade', [
      state('avatarFadeOut', style({
        opacity: '0',
        transition: '.5s ease-out'
      })),
      state('avatarFadeIn', style({
        opacity: '1',
        transition: '.5s ease-in'
      }))

    ])
    ////////////////// End fade ////////////////
  ]
})
export class HeaderComponent implements OnInit {
  fadeAvatar: boolean = false;
  avatarFade: string = '';
  rippleButton: string | undefined;
  constructor(public infoService: InfoService, private router:Router) {}
  //currentUrl:string = this.getRoute();

  checkHomeRoute = ():boolean => {
    if (this.router.url === '/'){
      return true;
    } else {
       return false;
    }
  }

  getRoute = () => this.router.url;

  checkProjDetailUrl = () => {
    if (this.getRoute().indexOf('project') > -1) {
      return true;
    } else {
      return false;
    }
  }

  checkForMobile = ():boolean => {
    //check if cursor is mouse or trackpad
      if(matchMedia('(pointer:fine)').matches){
        return true;
      }
      return false;
    }

  getStyles(checkHome:string):string {
    if(checkHome) {
      return "'background-color': 'blue'";
    }
    return "'background-color': 'red'";
  }

  ngOnInit() {
  }

}