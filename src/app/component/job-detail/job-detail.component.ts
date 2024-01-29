import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobsService } from 'src/app/services/jobs.service';


@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.css']
})
export class JobDetailComponent implements OnInit {

  jobTitle: string = "";
  jobEmployer: string = "";
  jobDescription: string = "";
  jobDuration:string = "";
  jobPhoto = "";



  constructor(private jobService: JobsService, private actRoute: ActivatedRoute) {}

  ngOnInit(): void {
    console.log(this.actRoute.snapshot.paramMap);
    let y = parseInt(this.actRoute.snapshot.paramMap.get("id")?? "");
    console.log(y);
    this.jobService.getJobByJobId(y).subscribe(result => {
      this.jobTitle = result.title;
      this.jobDuration = result.duration;
      this.jobDescription = result.description;
      this.jobEmployer = result.employer;
      this.jobPhoto = result.photoUrl;
    });

  }

}
