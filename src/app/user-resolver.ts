import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from './services/users';
import { Resolve } from '@angular/router';
import { Teacher } from './modules/teacher.module';
import { TeacherService } from './services/teacher';

@Injectable({
  providedIn: 'root'
})
export class UserResolver implements Resolve<any>{

  constructor(private user: TeacherService) { }
  resolve(): Observable<any> {
    return this.user.getTeachers();
  }
}






// ১. Resolver হলো একটি ক্লাস যা Resolve<T> ইন্টারফেস ইমপ্লিমেন্ট করে।
// ২. এটি একটি রুটে যাওয়ার আগে ডেটা লোড করে।
// ৩. এটি User Experience উন্নত করে কারণ ব্যবহারকারীকে খালি পৃষ্ঠা দেখতে হয় না।
// ৪. রাউটিং কনফিগারেশনের resolve প্রপার্টিতে এটি যুক্ত করতে হয়।
// ৫. কম্পোনেন্টে ActivatedRoute সার্ভিস ব্যবহার করে Resolver থেকে আসা ডেটা অ্যাক্সেস করা হয়।







