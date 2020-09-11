import { element } from 'protractor';
import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
})
export class LandingComponent implements OnInit {
  students: any[];
  profile: any;
  //subjects
  subjects: any[];
  mark: any;

  constructor(public Data: ApiService) {}

  ngOnInit() {
    this.students = [];
    this.subjects = [];

    this.students = this.Data.getInfo();

    //subjects
    this.subjects = this.Data.getInfo();

    //foreach function
    this.students.forEach((Element) => {
      this.profile = Element['users'];
    });

    //foreach function to get subject
    this.subjects.forEach((element) => {
      this.mark = element['subjects'];
    });
  }
}
