import { register } from "../api.js";
import { getUserInfo, setUserInfo } from "../localStorage.js";
import { redirectUserS } from "../sessionStorage.js";
import {  showMessage } from "../utils.js";


const SignupScreen ={
    after_render : () => {
        document.getElementById("register-form")
        .addEventListener('submit',async(e) =>{
            e.preventDefault();
            // showLoading();
            const data = await register({
                name : document.getElementById('name').value , 
                email : document.getElementById('email').value , 
                password : document.getElementById('password').value
            });
            // hideLoading();
            if(data.error){
                // showMessage("User already exist");
                alert("Please enter you information");
            }else{
                setUserInfo(data);
                redirectUserS();
            }
        });
    },
    render : async () => {
        let {name , isAdmin} = getUserInfo();
        return `
        <div class="layout-sticky-subnav layout-default ">

        <div class="preloader">
            <div class="sk-double-bounce">
                <div class="sk-child sk-double-bounce1"></div>
                <div class="sk-child sk-double-bounce2"></div>
            </div>
        </div>
    
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
                                <a class="dropdown-item" href="/#/studentdashboad">Dashboard</a>
                                <a class="dropdown-item" href="/#/editaccount">Edit Account</a>
                                <a class="dropdown-item" href="">Logout</a>
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
    
    
    
    
            
            
            
            
            
            
            
            
            <div class="pt-32pt pt-sm-64pt pb-32pt">
            <h2 style="text-align:center;">Learn and Earn!!</h2>
            <div class="container page__container" id='login_margin'>
                        <form id="register-form" class="col-md-5 p-0 mx-auto">
                            <div class="form-group">
                                <label class="form-label" for="email">YOUR FIRST AND LAST NAME:</label>
                                <input id="name" type="text" class="form-control" placeholder="Your first and last name ...">
                            </div>
                            <div class="form-group">
                                <label class="form-label" for="email">Email:</label>
                                <input id="email" type="text" class="form-control" placeholder="Your email address ...">
                            </div>
                            <div class="form-group">
                                <label class="form-label" for="password">Password:</label>
                                <input id="password" type="password" class="form-control" placeholder="Your first and last name ...">
                                
                                <p class="text-right"><a href="/#/signup_instructor" class="small">Are you a teacher?</a></p>
                            </div>
                            <div class="text-center">
                                <button class="btn btn-primary">create account</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="page-separator justify-content-center m-0">
                    <div class="page-separator__text">or sign-up with</div>
                </div>
                <div class="bg-body pt-32pt pb-32pt pb-md-64pt text-center">
                    <div class="container page__container">
                        <a href="/#/" class="btn btn-secondary btn-block-xs">Facebook</a>
                        <a href="/#/" class="btn btn-secondary btn-block-xs">Twitter</a>
                        <a href="/#/" class="btn btn-secondary btn-block-xs">Google+</a>
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
    }
}

export default SignupScreen;