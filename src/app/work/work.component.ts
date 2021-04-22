import { ThumbService } from './../services/thumb.service';
import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
import { trigger, style, transition, useAnimation, animate, keyframes, query, stagger, state } from '@angular/animations';
import { fade, fadeInAnimation, fadeOutAnimation } from '../animations';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss', '../../styles/colors.scss'],
  providers: [ThumbService],
  animations: [
    ////////////////// fade ////////////////
    trigger('fade', [
      transition(':enter', [
        useAnimation(fadeInAnimation, { 
          params: {
            duration: '3s'
          }
        })
      ]),
      transition(':leave', [
        useAnimation(fadeOutAnimation, { 
          params: {
            duration: '2s'
          }
        })
      ])
    ]),
    trigger('fade2', [
      transition(':enter', [
        useAnimation(fadeInAnimation, { 
          params: {
            duration: '1.5s'
          }
        })
      ])//,
      // transition(':leave', [
      //   useAnimation(fadeOutAnimation, { 
      //     params: {
      //       duration: '.5s'
      //     }
      //   })
      // ])
    ]),
    ////////////////// End fade ////////////////
    trigger('thumbAnimation', [
      state('highlighted', style({
        transform: 'scale(1.8)',
        cursor: 'pointer',
        transition: '.8s ease-out'
    })),
      state('unhighlighted', style({
        opacity: '1',
        //transform: 'scale(1.8)',
        filter: 'grayscale(100%)',
        transition: '.8s ease-in'
      })),
      state('activated', style({
        opacity: '.2'
      }))
    ]),
    trigger('thumbAnimationItem1', [
      state('highlighted', style({
        opacity: '0',
        transform: 'scale(.6)',
        transition: '.8s ease-out'
      })),
      state('unhighlighted', style({
        opacity: '1',
        transition: '.9s ease-in'
      })),
      state('activated', style({
        //opacity: '.2'
      }))
    ]),
    trigger('overlay', [
      state('overlayOff', style({
        opacity: '0',
        transform: 'scale(.6)',
        transition: '.8s ease-out'
      })),
      state('overlayOn', style({
        opacity: '1',
        transition: '.9s ease-in'
      }))
    ])
  ]
})
export class WorkComponent implements OnInit, OnChanges {
  @Input() filterBy?: string = 'all';
  visibleThumbs: any[] = [];
  eachFileName: any[] = [];
  fadeAnimation: any;
  fadeAnimation2: any;
  thumbAnimationItem1: any;
  thumbId: number = 0;
  backgroundImg: any;
  thumbTitleImg: any;
  classThumb: string = '';
  colSm: string = '';
  result: string = '';
  thumbAnimation: string = '';
  fileName: String = '';
  assetsUrl: String = "../../assets/";
  thumbTitleUrl: string = "images/title/";
  iconsUrl: string = "icons/";
  icons: any = [ 'sketch', 'figma', 'photoshop', 'illustrator', 'angular', 'react', 'javascript', 'typescript', 'jquery', 'html5', 'css3', 'bootstrap', 'semantic-ui', 'npm', 'sass', 'visual-studio-code'];

  constructor(public thumbsService: ThumbService, public sanitizer: DomSanitizer) {
    this.visibleThumbs = this.thumbsService.getThumbs();
  }

  getIconClass = (icon:string) => "icon-" + icon;

  getIconUrl = (icon:string) => this.assetsUrl +  this.iconsUrl + icon + ".svg";

  getThumbTitleUrl = (thumb?:string) => {
    if(thumb) {
      return this.assetsUrl + this.thumbTitleUrl + thumb + ".svg";
    }
    return '';
  }


  thumbClass = (thumbId?: number) => {
    if(thumbId){
      //Pass id to getId method
      this.getId(thumbId);
          
      return 'class-thumb-' + thumbId;
    }
    return '';
  }

  //assign id to local thumbId
  getId = (thumbId:number) => this.thumbId = thumbId;

  getFileName = () => this.fileName = this.visibleThumbs[this.thumbId - 1].fileName;

  //(With the prefix "thumb-")get url name that match file name for the thumb image
  //getBackImg = () => this.backgroundImg = this.sanitizer.bypassSecurityTrustStyle('url(../assets/images/thumb/thumb-' + this.getFileName() + '.jpg)');

  //(Without the prefix "thumb-")get url name that match file name for the thumb image
  getBackImg = () => this.backgroundImg = this.sanitizer.bypassSecurityTrustStyle('url(../assets/images/thumb/' + this.getFileName() + '.jpg)');

  //Getting adding id number to url (is commented out because the id name was remove from the file name)
  //getBackImg = () => this.backgroundImg = this.sanitizer.bypassSecurityTrustStyle('url(../assets/images/thumb/thumb-' + this.thumbId + '-' + this.getFileName() + '.jpg)');
    
  ngOnChanges() {
    this.visibleThumbs = this.thumbsService.getThumbs();
  }

  getBrowserSize = () => window.innerWidth;

  checkForMobile = (value?:any) => {
  //check if cursor is mouse or trackpad
    if(matchMedia('(pointer:fine)').matches) {
      return value;
    }
    return
  }

  ngOnInit() {

  }

}
