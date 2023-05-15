import { getLesson } from "../api.js";
import {Rating} from "../components/rating.js";
import { apiUrl } from "../config.js";
import { clearUser, getUserInfo } from "../localStorage.js";
import { parseRequestUrl } from "../utils.js";



const TakeLessonScreen = {
    after_render : () => {
        if(getUserInfo().name){
            document.getElementById('signout-button')
            .addEventListener('click',()=>{
                clearUser();
                document.location.hash ='/login'
            })
        }
    },
    render : async() =>{
        let {name , isAdmin } = getUserInfo();
        let lesson = await getLesson(parseRequestUrl().id);

        return `
        <div class="layout-sticky-subnav layout-default ">
        <!-- Header Layout -->
        <div class="mdk-header-layout js-mdk-header-layout">
    
            <!-- Header -->
    
            <div id="header" class="mdk-header js-mdk-header mb-0" data-fixed data-effects="">
                <div class="mdk-header__content">
    
    
    
    
    
                    <div class="navbar navbar-expand pr-0 navbar-dark-dodger-blue navbar-shadow" id="default-navbar" data-primary>
                        
    
                        <!-- Navbar Brand -->
                        <a href="/#/" class="navbar-brand mr-16pt">
    
                            <span class="avatar avatar-sm navbar-brand-icon mr-0 mr-lg-8pt">
    
                                <span class="avatar-title rounded bg-primary"><img src="assets/images/illustration/student/128/white.svg" alt="logo" class="img-fluid" /></span>
    
                            </span>
    
                            <span class="d-none d-lg-block">Solaris</span>
                        </a>
    
    
    
    
    
                        
    
    
    
    
                        <ul class="nav navbar-nav d-none d-sm-flex flex justify-content-start ml-8pt">
                    <li class="nav-item active">
                        <a href="/#/" class="nav-link">Home</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown" data-caret="false">Courses</a>
                        <div class="dropdown-menu">
                            <a href="/#/courses" class="dropdown-item">All Courses</a>
                            <a href="/#/courses/development" class="dropdown-item">Development</a>
                            <a href="/#/courses/dsa" class="dropdown-item">DSA</a>
                            <a href="/#/courses/uiux" class="dropdown-item">UI/UX</a>
                            <a href="/#/courses/design" class="dropdown-item">Design</a>
                            <a href="/#/courses/videoediting" class="dropdown-item">Video Editing</a>
                            <a href="/#/courses/finance" class="dropdown-item">Finance & Accounting</a>
                            <a href="/#/courses/it" class="dropdown-item"><span class="mr-16pt">IT & Software</span> <span class="badge badge-notifications badge-accent text-uppercase ml-auto">New</span></a>
                            <a href="/#/courses/markiteing" class="dropdown-item">Marketing</a>
                            <a href="/#/courses/music" class="dropdown-item">Music</a>
                            <a href="/#/courses/office" class="dropdown-item">Office Productivity</a>
                        </div>
                    </li>
                    <li class="nav-item dropdown">
                        <a href="/#/aboutus" class="nav-link " >About Us</a>
                    </li>
                    ${name ? `` : `
                    <li class="nav-item">
                        <a href="/#/signup_instructor" class="nav-link">Teach</a>
                    </li>                    
                    `}
                    
                </ul>

    
    
    
                        <div class="nav navbar-nav flex-nowrap d-flex mr-16pt">
                            ${name ? `
                            <div class="nav-item dropdown">
                            <a href="#" class="nav-link d-flex align-items-center dropdown-toggle" data-toggle="dropdown" data-caret="false">

                                <span style="margin-right: 1rem;" class="avatar avatar-sm mr-8pt2">

                                    <span class="avatar-title rounded-circle bg-primary"><i style="font-size:1.4rem;" class='bx bxs-user-rectangle' ></i></span>

                                </span>

                            </a>
                            <div class="dropdown-menu dropdown-menu-right">
                                <div class="dropdown-header"><strong>Account</strong></div>
                                ${isAdmin ?`<a class="dropdown-item" href="/#/instructordashboard">Instructor Dashboard</a>` : `<a class="dropdown-item" href="/#/studentdashboad">Dashboard</a>`}
                                <a class="dropdown-item" href="/#/editaccount">Edit Account</a>
                                <button class="dropdown-item" id="signout-button">Logout</button>
                            </div>
                        </div>

                        <span class="d-none d-md-flex align-items-center mr-16pt">

                            <span class="avatar avatar-sm mr-12pt">

                                <span class="avatar-title rounded navbar-avatar"><i style="font-size:1.4rem;" class='bx bxs-badge-dollar'></i></span>

                            </span>

                            <small class="flex d-flex flex-column">
                                <strong class="navbar-text-100">Earnings</strong>
                                <span class="navbar-text-50">2.3 Dollars</span>
                            </small>
                        </span>


                    </div>
                            ` : 
                        
                        
                            `
                            <li class="nav-item">
                            <a href="/#/login" class="nav-link" data-toggle="tooltip" data-title="Login" data-placement="bottom" data-boundary="window"><i id="lockbox" class='bx bx-lock-open'></i></a>
                        </li>
                        <li class="nav-item">
                            <a href="/#/signup" class="btn btn-outline-white">Get Started</a>
                        </li>
                            `}

                            
                        </div>
    
    
    
                </div>
            </div>
    
            <!-- // END Header -->
    
            <!-- Header Layout Content -->
            <div class="mdk-header-layout__content page-content ">
    
    
    
    
    
    
    
    
    
    
    
    
    
                <div class="navbar navbar-light border-0 navbar-expand-sm" style="white-space: nowrap;">
                    <div class="container page__container flex-column flex-sm-row">
                        <nav class="nav navbar-nav">
                            <div class="nav-item py-16pt py-sm-0">
                                <div class="media flex-nowrap">
                                    <div class="media-left mr-16pt">
                                        <a href="fixed-student-take-course.html"><img src="assets/images/paths/angular_64x64.png" width="40" alt="Angular" class="rounded"></a>
                                    </div>
                                    <div class="media-body d-flex flex-column">
                                        <a href="fixed-student-take-course.html" class="card-title">${lesson.courseName}</a>
                                        <div class="d-flex">
                                            <span class="text-50 small font-weight-bold mr-8pt">${lesson.instructor}</span>
                                            <span class="text-50 small">Software Engineer and Developer</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </nav>
                        
                    </div>
                </div>
                <div class="bg-primary pb-lg-64pt py-32pt">
                    <div class="container page__container">
                        <nav class="course-nav">
                            <a data-toggle="tooltip" data-placement="bottom" data-title="Getting Started with Angular: Introduction" href=""><i style="font-size:1.1rem;" class='bx bxs-check-circle' ></i></a>
                            <a data-toggle="tooltip" data-placem bent="bottom" data-title="Getting Started with Angular: Introduction to TypeScript" href=""><i style="font-size:1.1rem;" class='bx bxs-user-circle text-primary' ></i></a>
                            <a data-toggle="tooltip" data-placement="bottom" data-title="Getting Started with Angular: Comparing Angular to AngularJS" href=""><i style="font-size:1.1rem;" class='bx bx-play-circle' ></i></a>
                            <a data-toggle="tooltip" data-placement="bottom" data-title="Quiz: Getting Started with Angular" href="fixed-student-take-quiz.html"><i style="font-size:1.1rem;" class='bx bx-hourglass' ></i></a>
                        </nav>
                        <div class="js-player bg-primary embed-responsive embed-responsive-16by9 mb-32pt">
                            <div class="player embed-responsive-item">
                                <!-- <div class="player__content">
                                    <div class="player__image"></div>
                                    <a href="" class="player__play ">
                                    <i style="font-size:1.6rem; color:white; " class='bx bx-play' ></i>
                                    </a>
                                </div> -->
                                <div class="player__embed ">
                                    <!-- <iframe class="embed-responsive-item" src="https://player.vimeo.com/video/97243285?title=0&amp;byline=0&amp;portrait=0" allowfullscreen=""></iframe> -->
                                    <video width="1080" id="videoPlayer"  controls  controlsList="nodownload">
                                        <source src='../assets/intro.mp4' type="video/mp4">
                                    </video>
                                </div>
                            </div>
                        </div>
    
                        <div class="d-flex flex-wrap align-items-end mb-16pt">
                            <h1 class="text-white flex m-0">${lesson.title}</h1>
                            <p class="h1 text-white-50 font-weight-light m-0">${lesson.length}</p>
                        </div>
    
                        <p class="hero__lead measure-hero-lead text-white-50 mb-24pt">${lesson.desc}</p>
    
                        <a href="" class="btn btn-white">Resume lesson</a>
                    </div>
                </div>
                
    
                
    
    
    
    
            </div>
            <!-- // END Header Layout Content -->
    
    
            <div class="js-fix-footer2 bg-white border-top-2">
                <div class="container page__container page-section d-flex flex-column">
                    <p class="text-70 brand mb-24pt">
                        <img class="brand-icon" src="assets/images/logo/black-70@2x.png" width="30" alt="Solaris"> Solaris
                    </p>
                    <p class="measure-lead-max text-50 small mr-8pt">Solaris is a beautifully crafted user interface for modern Education Platforms, including Courses & Tutorials, Video Lessons, Student and Teacher Dashboard, Curriculum Management, Earnings and Reporting, ERP, HR, CMS, Tasks, Projects, eCommerce and more.</p>
                    <p class="mb-8pt d-flex">
                        <a href="" class="text-70 text-underline mr-8pt small">Terms</a>
                        <a href="" class="text-70 text-underline small">Privacy policy</a>
                    </p>
                    <p class="text-50 small mt-n1 mb-0">Copyright 2019 &copy; All rights reserved.</p>
                </div>
            </div>
    
    
        </div>
        <!-- // END Header Layout -->
    
    
    </div>
        `;
    },
};
export default TakeLessonScreen;