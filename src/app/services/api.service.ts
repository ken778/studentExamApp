import { Details } from './details';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(public data: Details) {}

  users: any[];
  student: any;

  //returning student details
  getInfo() {
    return this.data.students;
  }
  //getting single user info
  getStudentInfo(reference) {
    this.users = this.data.students;
    this.users.forEach((item) => {
      this.student = item['users'];
    });
    return this.student.find((e) => e.userID === reference);
  }

  getStudentSubj(reference) {
    this.users = this.data.students;
    this.users.forEach((item) => {
      this.student = item['subjects'];
    });
    return this.student.find((e) => e.userID === reference);
  }

  //second subject
  getStudentSubj2(reference) {
    this.users = this.data.students;
    this.users.forEach((item) => {
      this.student = item['subjects2'];
    });
    return this.student.find((e) => e.userID === reference);
  }
}
