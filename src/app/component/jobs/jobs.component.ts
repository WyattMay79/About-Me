import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobsService } from 'src/app/services/jobs.service';
import { Job } from 'src/app/models/job';


@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {

  jobList?: Job[];


  constructor(private jobsService: JobsService, private actRoute: ActivatedRoute) {}

  ngOnInit(): void {
    console.log(this.actRoute.snapshot.paramMap);
    this.jobsService.getAllJobs().subscribe(jobs => {
      this.jobList = jobs;
      console.log(jobs);
    });
  }  

}
