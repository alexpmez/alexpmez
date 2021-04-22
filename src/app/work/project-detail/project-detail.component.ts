import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import { ActivatedRoute, Router } from '@angular/router';
import { faAngular } from '@fortawesome/fontawesome-free-brands';
import fontawesome from '@fortawesome/fontawesome';
import { trigger, transition, useAnimation } from '@angular/animations';
import { fade, fadeInAnimation } from '../../animations';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss', '../../../styles/colors.scss'],
  providers: [ProjectService],
  animations: [
    trigger('fade', [
      transition('* => *', [
        useAnimation(fadeInAnimation, { 
          params: {
            duration: '1s'
          }
        })
      ])
    ])
  ]
})
export class ProjectDetailComponent implements OnInit {
  project: any;
  currentUrl: any;
  projectId: number = 0;
  iconUrl: string = "../../assets/icons/";
  imgUrl: string = "../../assets/images/img/";

  constructor(private projectService: ProjectService, private route: ActivatedRoute, private router: Router){
    route.params.subscribe(val => {
      fontawesome.library.add(faAngular);
      this.project = this.projectService.getImage(+this.route.snapshot.params['id']);
    }); 
  }

  getArrProLength = () => this.projectService.getProjArr().length;

  getNextProj = (projectId: number) => {
    if(projectId < this.projectService.getProjArr().length){
      this.currentUrl = projectId + 1;
    } else {
      return this.currentUrl = this.projectService.getProjArr().length;
    }
    return this.currentUrl;
  }

  getPrevProj = (projectId: number) => {
    if(projectId > 1){
      this.currentUrl = projectId - 1;
    } else {
      return this.currentUrl = 1;
    }
    return this.currentUrl;
  }

  getButtonCopy = () => {
    if(this.project.button){
      return this.project.button;
    }
    return "View Web App";
  }

  onNavigate = () => window.open(this.project.website, "_blank");

  getBrowserSize = () => window.innerWidth > 770;

  getIconClass = (icon:string) => "icon-" + icon;

  removeDash = (iconTitle:string) => iconTitle.replace(/-/g, ' ');

  getImgUrl = (imgType:string, imgName:string) => {
    if(imgType === "icon") {
      return this.iconUrl + imgName + ".svg";
    }
    
    return  this.imgUrl + imgName;
  }

  ngOnInit() {
  }
}
