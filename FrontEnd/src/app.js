// import Error404Screen from "./srceens/Error404Screen.js";

// (function() {
//     'use strict';
//     let headerNode = document.querySelector('.mdk-header')
//     let layoutNode = document.querySelector('.mdk-header-layout')
//     let componentNode = layoutNode ? layoutNode : headerNode

//     componentNode.addEventListener('domfactory-component-upgraded', function() {
//         headerNode.mdkHeader.eventTarget.addEventListener('scroll', function() {
//             let progress = headerNode.mdkHeader.getScrollState().progress
//             let navbarNode = headerNode.querySelector('#default-navbar')
//             navbarNode.classList.toggle('bg-transparent', progress <= 0.2)
//         })
//     })
// })()




import {  parseRequestUrl } from "./utils.js";

import HomeScreen  from "./screens/HomeScreen.js";
import BrowseCoursesScreen from "./screens/BrowseCoursesScreen.js";
import LessonPreviewScreen from "./screens/LesssonPreviewScreen.js";
import MyCoursesScreen from "./screens/MyCoursesScreen.js";
import StudentDashboardScreen from "./screens/StudentDashboardScreen.js";
import TakeCoursesScreen from "./screens/TakeCoursesScreen.js";
import TakeLessonScreen from "./screens/TakeLessonScreen.js";
import InstructorDashboard from "./screens/InstructorDashboard.js";
import MangeCourses from "./screens/MangeCoursesScreen.js";
import EditCourses from "./screens/EditCoursesScreen.js";
import LoginScreen from "./screens/LoginScreen.js";
import SignupScreen from "./screens/SignupScreen.js";
import EditAccount from "./screens/EditAccountScreen.js";
import AboutUs from "./screens/AboutUsScreen.js";
import RegisterInstructorScreen from "./screens/RegisterInstructorScreen.js";
import SingleCoursesScreen from "./screens/SingleCoursesScreen.js";
import EnrollScreen from "./screens/EnrollScreen.js";
import Error404Screen from "./screens/ErorrScreen.js";
import instructorMessage from "./screens/InstructorMessage.js";



const routes = {
    "/" : HomeScreen,
    "/courses" : BrowseCoursesScreen,
    "/courses/:id" : SingleCoursesScreen,
    "/lessonpreview" : LessonPreviewScreen,
    "/mycourses" : MyCoursesScreen,
    "/studentdashboad" : StudentDashboardScreen,
    "/editaccount" : EditAccount,
    "/course/:id" : TakeCoursesScreen,
    "/lesson/:id" : TakeLessonScreen,
    "/instructordashboard" : InstructorDashboard,
    "/mangecourses" : MangeCourses,
    "/course/:id/edit" : EditCourses,
    "/login" : LoginScreen,
    "/aboutus" : AboutUs,
    "/signup" : SignupScreen,
    "/signup_instructor" : RegisterInstructorScreen,
    "/course/:id/enroll" : EnrollScreen,
    "/show_instructor_message" : instructorMessage,
};


const router = async () =>{
    // showLoading();
    const request = parseRequestUrl();
    const parseUrl = (request.resource ? `/${request.resource}` : '/') +
    (request.id ? '/:id' : '') +
    (request.verb ? `/${request.verb}` : '');
    const screen = routes[parseUrl] ? routes[parseUrl] : Error404Screen;

    // const header = document.getElementById('header-container');
    // header.innerHTML = await Header.render();
    // await Header.after_render();

    const main = document.getElementById("main-container");
    main.innerHTML = await screen.render();
    if (screen.after_render) await screen.after_render();
    // hideLoading();
}; 

window.addEventListener('load' , router);
window.addEventListener('hashchange' ,router);
