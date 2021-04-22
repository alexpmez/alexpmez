import { WorkExperienceService } from '../../services/work-experience.service';
import { EducationService } from '../../services/education.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  providers: [EducationService, WorkExperienceService]
})
export class ProfileComponent implements OnInit {
  profileCopy: string = 'I have a solid foundation and thorough understanding of UI/UX Design process and can be partially involved in the development. After years as a Graphic Designer/Web Designer, I then transitioned to the UX Design process. HTML5 and CSS3 became part of my everyday workload as I developed cross-platform responsive websites; but then JavaScript/Typescript, jQuery, Angular, and React kept creeping into my work in small doses. As a result, this hybrid makes me a stronger asset to a team; because, in addition to approaching the design process with an understanding of how my design will be later developed; after the design assets are handed off to the development team, I’m able to check out a source control (i.e. Git) branch and help the developers with the CSS and even some basic app architecture, app components or other small portions of the code. I also have working experience with the Agile/Scrum development process.';

  constructor(private educationService: EducationService, private workExperienceService: WorkExperienceService) {}

  ngOnInit() {
  }

}