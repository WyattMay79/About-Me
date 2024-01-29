import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './component/about/about.component';
import { HomeComponent } from './component/home/home.component';
import { JobsComponent } from './component/jobs/jobs.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { JobDetailComponent } from './component/job-detail/job-detail.component';

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "about", component: AboutComponent },
  { path: "jobs", component: JobsComponent },
  { path: "wyatt/:id", component: JobDetailComponent },
  { path: "**", component: NotfoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
