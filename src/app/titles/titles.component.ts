import { Component, OnInit } from '@angular/core';
import { InfoService } from '../services/info.service';
import { trigger, transition, useAnimation, query, style, animateChild, animate } from '@angular/animations';
import { fade, fadeInAnimation, fadeOutAnimation } from '../animations';
import { Router } from '@angular/router';


@Component({
  selector: 'app-titles',
  templateUrl: './titles.component.html',
  styleUrls: ['./titles.component.scss'],
  providers: [InfoService],
  animations: [
    trigger('fadeDrop', [
      transition(':enter', [
        style({ transform: 'translateY(-20px)' }),
        animate(1000)
      ]),
      transition(':leave', [
        style({ display: 'none' })
      ])
    ])
  ]
})
export class TitlesComponent implements OnInit {
  titlesArr: any[] = this.infoService.getHeaderArr();
  
  constructor(private infoService: InfoService, private router: Router) {}

  currentUrl = () => this.router.url;

  ngOnChanges(){
    this.ngOnInit();
  }
  
  ngOnInit() {
  }

}