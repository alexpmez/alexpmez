import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { ResumeComponent } from './resume/resume.component';
import { FooterComponent } from './footer/footer.component';
import { TitlesComponent } from './titles/titles.component';
import { WorkComponent } from './work/work.component';
import { SkillsComponent } from './resume/skills/skills.component';
import { ProfileComponent } from './resume/profile/profile.component';
import { ProjectDetailComponent } from './work/project-detail/project-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    HeaderComponent,
    ResumeComponent,
    FooterComponent,
    TitlesComponent,
    WorkComponent,
    SkillsComponent,
    ProfileComponent,
    ProjectDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
