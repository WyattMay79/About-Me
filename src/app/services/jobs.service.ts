import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Job } from '../models/job';

@Injectable({
  providedIn: 'root'
})

export class JobsService {
  
  listOfJobs: Job[] = [
      {
        jobId: 1,
        title: 'EMT-B',
        description: "Provide emergency life saving aid for all residents and visitors to the Grand County Area.",
        employer: 'Grand County EMS, Grand County, CO',
        duration: '2014-2019',
        photoUrl: './assets/images/GCEMS-Logo.png'
      },
      {
        jobId: 2,
        title: 'Ski Patroller',
        description: "Provide emregency care for all visitors at the resort on all resort premises, as well as help with daily mountain operations.",
        employer: 'Granby Ranch Resort, Granby, CO',
        duration: '2015-2017',
        photoUrl: './assets/images/GR-logo.jpg'
      },
      {
        jobId: 3,
        title: 'Firefighter/EMT',
        description: "An all hazards response agency that provides emergency medical care, fire suppression, highway traffic accident response for all residents and visitors of Summit County",
        employer: 'Summit Fire and EMS, Summit County, CO',
        duration: '2017-2021',
        photoUrl: './assets/images/SFE-logo.png'
      },
      
      {
        jobId: 4,
        title: 'Firefighter/EMT',
        description: "An all hazards response agency that provides emergency medical care, fire suppression, highway traffic accident response for all residents and visitors of Commerce City.",
        employer: 'South Adams County Fire Department, Commerce City, CO',
        duration: '2021-2021',
        photoUrl: './assets/images/SACFD-logo.jpg'
      },
      {
        jobId: 5,
        title: 'Critical Care Tech',
        description: "Provide care to all sick persons in the ER at various locations.",
        employer: 'SCL Health, Denver, CO',
        duration: '2022-2023',
        photoUrl: './assets/images/IMH-logo.jpg'
      },
      {
        jobId: 6,
        title: 'Diesel Mechanic',
        description: "Repair and maintain any customer vehicle that has diesel or gas engine, as well as the dealership fleet of leased and ready to sell trucks.",
        employer: 'DTI Trucks, Commerce City, CO',
        duration: '2023-Present',
        photoUrl: './assets/images/dtitrucks-logo.jpg'
      }
  ];

  constructor() { }

  getAllJobs(): Observable<any[]> {
    console.log(this.listOfJobs);
    return of(this.listOfJobs);
  }

  getJob(job: number): Observable<any> {
    let jobId = job;
    this.listOfJobs.forEach(j => {
      if (j.jobId === job) {
        jobId = j.jobId;
      }
    });
    console.log(jobId);
    return of(jobId);
  };

  getJobByJobId(jobId: number): Observable<Job> {
    let x = this.listOfJobs.find(j => j.jobId === jobId) ?? new Job();
    return of(x);
  }


}
