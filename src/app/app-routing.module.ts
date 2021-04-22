import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorkComponent } from "./work/work.component";
import { ResumeComponent } from "./resume/resume.component";
import { ContactComponent } from "./contact/contact.component"
import { ProjectDetailComponent } from "./work/project-detail/project-detail.component";

const routes: Routes = [
  { path: '', redirectTo: "/", pathMatch: 'full' },
  { path: 'work', component: WorkComponent },
  { path: 'resume', component: ResumeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'project/:id', component: ProjectDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }