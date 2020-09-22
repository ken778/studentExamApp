import { element } from 'protractor';
import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { htmlAstToRender3Ast } from '@angular/compiler/src/render3/r3_template_transform';
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
})
export class LandingComponent implements OnInit {
  //students
  students: any[];
  profile: any;
  weekDays: any;
  //subjects
  subjects: any[];
  mark: any;

  //variables to add new student in the array
  addStu: any[];
  addUser: any[];
  //variables to add new subject in the array
  addSubj: any[];
  addModule: any[];

  constructor(public Data: ApiService) {}
  //adding a day
  updates(form: NgForm) {
    this.Data.getDays().push(form.value.name);
    if (form.valid == true) {
    } else {
      console.log('error', console.error());
    }
  }
  //adding a student
  addStudent(addStudents: NgForm) {
    this.addStu = this.Data.getInfo();

    this.addStu.forEach((e) => {
      this.addUser = e['users'];
      //pushing user into the array
      this.addUser.push({
        userID: '2020' + addStudents.value.name,
        name: addStudents.value.name,
        Bio: addStudents.value.bio,
        image: addStudents.value.image,
      });
    });
    //pushing subject to subjects array
    this.addSubj = this.Data.getInfo();

    this.addSubj.forEach((e) => {
      this.addModule = e['subjects'];
      //pushing a subject
      this.addModule.push({
        subjID: addStudents.value.subjectID,
        userID: '2020' + addStudents.value.name,
        subjName: addStudents.value.subject,
        yearReg: addStudents.value.yearReg,
        lecture: addStudents.value.lecture,
        institution: addStudents.value.institute,
        mark: addStudents.value.marks,
      });
    });
  }
  name = '';
  day = '';

  ngOnInit() {
    this.students = [];
    this.subjects = [];
    this.students = this.Data.getInfo();

    //days
    this.weekDays = this.Data.getDays();
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

  deleteDay(item) {
    this.weekDays.splice(item, 1);
    console.log(item);
  }

  //delete student
  deleteStu(item) {
    if (confirm('are you sure you want to delete this user?'))
      this.profile.splice(item, 1);
  }

  //edit day
  editDay(i) {
    this.day = this.weekDays[i];
  }
  //update day

  updatesDay(updateDay2: NgForm) {
    updateDay2.name = 'ggg';
  }
}
