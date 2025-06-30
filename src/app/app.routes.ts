import { Routes } from '@angular/router';
import { Header } from './header/header';
import { Homepage } from './homepage/homepage';
import { TeacherSection } from './teacher-section/teacher-section';
import { StudentInformation } from './student-information/student-information';
import { TeacherInformation } from './teacher-information/teacher-information';
import { UpdateStudent } from './update-student/update-student';
import { UpdateTeacher } from './update-teacher/update-teacher';
import { Signup } from './signup/signup';

import { authGuard } from './auth-guard';
import { Navbar } from './navbar/navbar';
import { AddTeacher } from './add-teacher/add-teacher';
import { AddStudent } from './add-student/add-student';
import { TeacherDetails } from './teacher-details/teacher-details';
import { StudentDetails } from './student-details/student-details';
import { StudentSection } from './student-section/student-section';

export const routes: Routes = [

    { 
        path: '', 
        redirectTo: 'header', 
        pathMatch: 'full' 
    },
    {
        path:'header',
        component: Header
    }, 
    {
        path:'homepage',
        component:Homepage
    },
    {
        path:'student-section',
        component: StudentSection
    },
    {
        path:'teacher-section',
        component: TeacherSection
    },
    {
        path:'student-information',
        component: StudentInformation
    },
    {
        path:'teacher-information',
        component: TeacherInformation
    },
    {
        path:'update-student/:id',
        component: UpdateStudent
    },
    {
        path:'update-teacher/:id',
        component: UpdateTeacher
    },
    {
        path:'signup',
        component: Signup
    },
    {
        path:'navbar',
        component:Navbar
    },
    {
        path:'add-teacher',
        component:AddTeacher
    },
    {
        path:'add-student',
        component: AddStudent
    },
    {
        path:'teacher-details/:id',
        component: TeacherDetails
    },
    {
        path:'student-details/:id',
        component: StudentDetails
    }
];
