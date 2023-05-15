/* add preview course page with if else condition */
import {Rating , RatingS} from "../components/rating.js";
import { getCourse, submitReview } from "../api.js";
import { clearUser, getUserInfo } from "../localStorage.js";
import { setCourse } from "../sessionStorage.js";
import { parseRequestUrl } from "../utils.js";


const TakeCoursesScreen = {
    after_render :  () => {
        if(getUserInfo().name){
            document.getElementById('signout-button')
            .addEventListener('click',()=>{
                clearUser();
                document.location.hash ='/login'
            })
        }

        if(! getUserInfo().name ){
            document.getElementById('signupup')
            .addEventListener('click' , () => {
                setCourse(parseRequestUrl().id);
            })
        }

        document.getElementById('submitReview')
        .addEventListener('click', async (e)=>{
            e.preventDefault();
            let rate = 0;
            let ele = document.getElementsByTagName('input');
            for(let i = 0; i < ele.length; i++) {
                  
                if(ele[i].type="radio") {
                    if(ele[i].checked)
                        rate = ele[i].value;
                }
            }

            const data = await submitReview({
                user : getUserInfo().name,
                comment : document.getElementById('comment').value , 
                star : parseInt(rate) ,
                id : parseRequestUrl().id,
            });

            if(data.error){
                // showMessage("User already exist");
                alert("Please enter you information");
            }else{
                location.reload();
            }
        
        });
    },

    render : async() =>{
        let {_id , name , isAdmin , email} = getUserInfo();
        let course = await getCourse(parseRequestUrl().id);
        let ratingLength = course.rating.length;
        let sum=0,one=0,two=0,three=0,four=0,five=0;
        for(let i= 0 ; i < ratingLength ; i++){
            sum += course.rating[i].star;
            if(course.rating[i].star >= 4.5){
                five++;
            }else if(course.rating[i].star >= 3.5){
                four++;
            }else if(course.rating[i].star >= 2.5){
                three++;
            }else if(course.rating[i].star >= 1.5){
                two++;
            }else{
                one++;
                
            }
        }
        one = one / ratingLength * 100 , two = two / ratingLength*100 , three = three / ratingLength * 100 , four = four / ratingLength * 100 , five = five / ratingLength * 100;
        let avgRating = (sum / ratingLength).toFixed(1);
        console.log(avgRating , ratingLength , sum);
        let enrolled=false;
        let type;
        for(let ele of course.enrolledStudent){
            if(ele.user == _id){
                enrolled = true;
                type = ele.type;
            }
        }


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
                                ${isAdmin ?`<a class="dropdown-item" href="/#/instructordashboard">Instructor Dashboard</a>` : `<a class="dropdown-item" href="/#/studentdashboad">Dashboard</a>`}
                                <a class="dropdown-item" href="/#/editaccount">Edit Account</a>
                                <button id="signout-button" class="dropdown-item" >Logout</button>
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
    
                <div class="mdk-box bg-primary mdk-box--bg-gradient-primary2 js-mdk-box mb-0" data-effects="blend-background">
                    <div class="mdk-box__content">
                        <div class="hero py-64pt text-center text-sm-left">
                            <div class="container page__container">
                                <h1 class="text-white">${course.name}</h1>
                                <p class="lead text-white-50 measure-hero-lead mb-24pt">${course.desc}</p>
                                ${!name ? `<a id="signupup" href="/#/signup" class="btn btn-outline-white mb-16pt mb-sm-0 mr-sm-16pt">Signup to Enroll</a> ` : `
                                    ${enrolled ? `<button style="cursor:none;" class="btn btn-outline-white mb-16pt mb-sm-0 mr-sm-16pt">Enrolled &nbsp;&nbsp;${type==="paid" ? `<span >(paid)</span>` : `<span >(free)</span>`}</button>  ` 
                                    : `<a href="/#/course/${course._id}/enroll" class="btn btn-outline-white mb-16pt mb-sm-0 mr-sm-16pt">Enroll For this course</a>`}
                                `}
                                
                            </div>
                        </div>
                        <div class="navbar navbar-expand-sm navbar-light bg-white border-bottom-2 navbar-list p-0 m-0 align-items-center">
                            <div class="container page__container">
                                <ul class="nav navbar-nav flex align-items-sm-center">
                                    <li class="nav-item navbar-list__item">
                                        <div class="media align-items-center">
                                            <span class="media-left mr-16pt">
                                                <img src="assets/images/people/50/guy-6.jpg" width="40" alt="avatar" class="rounded-circle">
                                            </span>
                                            <div class="media-body">
                                                <a class="card-title m-0" href="">Eddie Bryan</a>
                                                <p class="text-50 lh-1 mb-0">Instructor</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="nav-item navbar-list__item">
                                    <i style="font-size:1.3rem; margin-right:5px;" class='bx bx-time-five' ></i>
                                        ${course.duration}h 46m
                                    </li>
                                    <li class="nav-item navbar-list__item">
                                        <i class='bx bxs-bar-chart-square' style="font-size:1.3rem; margin-right:5px;"></i>
                                        ${course.tag}
                                    </li>
                                    <li class="nav-item ml-sm-auto text-sm-center flex-column navbar-list__item">
                                    ${Rating.render({value : 3.5 , text : `15 reviews`})}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
    
                <div class="page-section border-bottom-2">
                <div class="container page__container">

                    <div class="page-separator">
                        <div class="page-separator__text">Table of Contents</div>
                    </div>
                    <div class="row mb-0">
                        <div class="col-lg-7">


                            <div class="accordion js-accordion accordion--boxed list-group-flush" id="parent">
                                
                                ${course.content.map((ele,i) => `
                                    <div class="accordion__item">
                                        <a href="#" class="accordion__toggle collapsed" data-toggle="collapse" data-target="#course-toc-${i}" data-parent="#parent">
                                            <span class="flex">${ele.title}</span>
                                            <i style="font-size:1.4rem;" class='bx bx-chevron-right' ></i>
                                        </a>
                                        <div class="accordion__menu collapse" id="course-toc-${i}">
                                        ${ele.subpart.map(item => `
                                        <div class="accordion__menu-link">
                                            <span class="icon-holder icon-holder--small d-inline-flex icon--left">
                                                ${enrolled ? `<i style="font-size:1.2rem;" class='bx bx-play-circle' ></i>` : `<i style="font-size:1.2rem;" class='bx bx-lock'></i>`}
                                            </span>
                                            ${enrolled ? `<a class="flex" href="/#/lesson/${item.id}">${item.title}</a>` : `<span class="flex" >${item.title}</span>`} 
                                            <span class="text-muted">${item.length}m 42s</span>
                                        </div>
                                        `).join('\n')}
                                        </div>
                                    </div>
                                `).join('\n')}

                            </div>

                        </div>
                        <div class="col-lg-5 justify-content-center">

                        ${course.enrolledStudent.filter(e => e.user == _id).length > 0 ? `
                        <h1>hai</h1>
                        ` : `
                        
                        `}
                            ${name ? `
                            <div class="card">
                                <div class="card-body py-16pt text-center">
                                    <span class="icon-holder icon-holder--outline-secondary rounded-circle d-inline-flex mb-8pt">
                                        <i class="material-icons">YEAH!</i>
                                    </span>
                                    <h4 class="card-title"><strong>Course Completed</strong></h4>
                                    <p class="card-subtitle text-70 mb-24pt">Get your course completion certificate here</p>
                                    ${email == 'a@a.com' ?` <button class="btn btn-accent mb-8pt" type="submit" onclick="window.open('Abhishek_UI-UX_Solaris.pdf')">Download!</button>` :
                                        `<button class="btn btn-accent mb-8pt" type="submit" onclick="window.open('HimanshuGoyal_DSA_Solaris.pdf')">Download!</button>`
                                    }
                                    
                                </div>
                            </div>
                            ` : 
                            `
                            <div class="card">
                                <div class="card-body py-16pt text-center">
                                    <span class="icon-holder icon-holder--outline-secondary rounded-circle d-inline-flex mb-8pt">
                                        <i class="material-icons">timer</i>
                                    </span>
                                    <h4 class="card-title"><strong>Unlock Library</strong></h4>
                                    <p class="card-subtitle text-70 mb-24pt">Get access to all videos in the library</p>
                                    <a href="fixed-pricing.html" class="btn btn-accent mb-8pt">Sign Up - Only $19.00/mo</a>
                                    <p class="mb-0">Have an account? <a href="fixed-login.html">Login</a></p>
                                </div>
                            </div>
                            `}
                            

                        </div>
                    </div>
                </div>
            </div>

    
                <div class="page-section bg-alt border-top-2 border-bottom-2">
    
    
                    <div class="container page__container">
                        <div class="row ">
                            <div class="col-md-7">
                                <div class="page-separator">
                                    <div class="page-separator__text">About this course</div>
                                </div>
                                <p class="text-70">${course.about}</p>
                            </div>
                            <div class="col-md-5">
                                <div class="page-separator">
                                    <div class="page-separator__text bg-alt">What you’ll learn</div>
                                </div>
                                <ul class="list-unstyled">
                                    <li class="d-flex align-items-center">
                                        <i style="font-size:1.4rem; margin-right:5px;" class='bx bx-check' ></i>
                                        <span class="text-70">Fundamentals of working with Angular</span>
                                    </li>
                                    <li class="d-flex align-items-center">
                                        <i style="font-size:1.4rem; margin-right:5px;" class='bx bx-check' ></i>
                                        <span class="text-70">Create complete Angular applications</span>
                                    </li>
                                    <li class="d-flex align-items-center">
                                        <i style="font-size:1.4rem; margin-right:5px;" class='bx bx-check' ></i>
                                        <span class="text-70">Working with the Angular CLI</span>
                                    </li>
                                    <li class="d-flex align-items-center">
                                        <i style="font-size:1.4rem; margin-right:5px;" class='bx bx-check' ></i>
                                        <span class="text-70">Understanding Dependency Injection</span>
                                    </li>
                                    <li class="d-flex align-items-center">
                                        <i style="font-size:1.4rem; margin-right:5px;" class='bx bx-check' ></i>
                                        <span class="text-70">Testing with Angular</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
    
                </div>
    
                <div class="page-section bg-alt border-bottom-2">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-7 mb-24pt mb-md-0">
                                <h4>About the author</h4>
                                <p class="text-70 mb-24pt">Eddie Bryan is a software developer at LearnD*ash. With more than 20 years o*f software development experience, he has gained a passion for Agile software development -- especially Lean.</p>
    
                            </div>
                            <div class="col-md-5 pt-sm-32pt pt-md-0 d-flex flex-column align-items-center justify-content-start">
                                <div class="text-center">
                                    <p class="mb-16pt">
                                        <img src="assets/images/people/110/guy-6.jpg" alt="guy-6" class="rounded-circle" width="64">
                                    </p>
                                    <h4 class="m-0">Eddie Bryan</h4>
                                    <p class="lh-1">
                                        <small class="text-muted">Angular, Web Development</small>
                                    </p>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    
                
    
                <div class="page-section bg-alt border-bottom-2">
    
    
    
                    <div class="container page__container">
                        <div class="page-separator">
                            <div class="page-separator__text">Student Feedback</div>
                        </div>
                        <div class="row mb-32pt">
                            <div class="col-md-3 mb-32pt mb-md-0">
                                <div class="display-1">${avgRating}</div>
                                <div class="rating rating-24">
                                    <span class="rating__item"><i class='bx bxs-star'></i></span>
                                    <span class="rating__item"><i class='bx bxs-star'></i></span>
                                    <span class="rating__item"><i class='bx bxs-star'></i></span>
                                    <span class="rating__item"><i class='bx bxs-star'></i></span>
                                    <span class="rating__item"><i class='bx bx-star' ></i></span>
                                </div>
                                <p class="text-muted mb-0">${ratingLength} ratings</p>
                            </div>
                            <div class="col-md-9">
    
                                <div class="row align-items-center mb-8pt" data-toggle="tooltip" data-title="75% rated 5/5" data-placement="top">
                                    <div class="col-md col-sm-6">
                                        <div class="progress" style="height: 8px;">
                                            <div class="progress-bar bg-secondary" role="progressbar" aria-valuenow="75" style="width: ${five.toFixed(0)}%" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                    <div class="col-md-auto col-sm-6 d-none d-sm-flex align-items-center">
                                        <div class="rating">
                                            <span class="rating__item"><i class='bx bxs-star'></i></span>
                                            <span class="rating__item"><i class='bx bxs-star'></i></span>
                                            <span class="rating__item"><i class='bx bxs-star'></i></span>
                                            <span class="rating__item"><i class='bx bxs-star'></i></span>
                                            <span class="rating__item"><i class='bx bxs-star'></i></span>
                                        </div>
                                    </div>
                                </div>
                                <div class="row align-items-center mb-8pt" data-toggle="tooltip" data-title="16% rated 4/5" data-placement="top">
                                    <div class="col-md col-sm-6">
                                        <div class="progress" style="height: 8px;">
                                            <div class="progress-bar bg-secondary" role="progressbar" aria-valuenow="16" style="width: ${four.toFixed(0)}%" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                    <div class="col-md-auto col-sm-6 d-none d-sm-flex align-items-center">
                                        <div class="rating">
                                            <span class="rating__item"><i class='bx bxs-star'></i></span>
                                            <span class="rating__item"><i class='bx bxs-star'></i></span>
                                            <span class="rating__item"><i class='bx bxs-star'></i></span>
                                            <span class="rating__item"><i class='bx bxs-star'></i></span>
                                            <span class="rating__item"><i class='bx bx-star' ></i></span>
                                        </div>
                                    </div>
                                </div>
                                <div class="row align-items-center mb-8pt" data-toggle="tooltip" data-title="12% rated 3/5" data-placement="top">
                                    <div class="col-md col-sm-6">
                                        <div class="progress" style="height: 8px;">
                                            <div class="progress-bar bg-secondary" role="progressbar" aria-valuenow="12" style="width: ${three.toFixed(0)}%" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                    <div class="col-md-auto col-sm-6 d-none d-sm-flex align-items-center">
                                        <div class="rating">
                                            <span class="rating__item"><i class='bx bxs-star'></i></span>
                                            <span class="rating__item"><i class='bx bxs-star'></i></span>
                                            <span class="rating__item"><i class='bx bxs-star'></i></span>
                                            <span class="rating__item"><i class='bx bx-star' ></i></span>
                                            <span class="rating__item"><i class='bx bx-star' ></i></span>
                                        </div>
                                    </div>
                                </div>
                                <div class="row align-items-center mb-8pt" data-toggle="tooltip" data-title="9% rated 2/5" data-placement="top">
                                    <div class="col-md col-sm-6">
                                        <div class="progress" style="height: 8px;">
                                            <div class="progress-bar bg-secondary" role="progressbar" aria-valuenow="9" style="width: ${two.toFixed(0)}%" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                    <div class="col-md-auto col-sm-6 d-none d-sm-flex align-items-center">
                                        <div class="rating">
                                            <span class="rating__item"><i class='bx bxs-star'></i></span>
                                            <span class="rating__item"><i class='bx bxs-star'></i></span>
                                            <span class="rating__item"><i class='bx bx-star' ></i></span>
                                            <span class="rating__item"><i class='bx bx-star' ></i></span>
                                            <span class="rating__item"><i class='bx bx-star' ></i></span>
                                        </div>
                                    </div>
                                </div>
                                <div class="row align-items-center mb-8pt" data-toggle="tooltip" data-title="0% rated 0/5" data-placement="top">
                                    <div class="col-md col-sm-6">
                                        <div class="progress" style="height: 8px;">
                                            <div class="progress-bar bg-secondary" role="progressbar" aria-valuenow="1" style="width : ${one.toFixed(0)}" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                    <div class="col-md-auto col-sm-6 d-none d-sm-flex align-items-center">
                                        <div class="rating">
                                            <span class="rating__item"><i class='bx bxs-star'></i></span>
                                            <span class="rating__item"><i class='bx bx-star' ></i></span>
                                            <span class="rating__item"><i class='bx bx-star' ></i></span>
                                            <span class="rating__item"><i class='bx bx-star' ></i></span>
                                            <span class="rating__item"><i class='bx bx-star' ></i></span>
                                        </div>
                                    </div>
                                </div>
    
                            </div>
                        </div>
    
    
                        <div>
                        ${course.rating.map((ele , i ) => `
                        <div class="pb-16pt mb-16pt border-bottom row">
                            <div class="col-md-3 mb-16pt mb-md-0">
                                <div class="d-flex">
                                    <span class="avatar avatar-sm mr-12pt">
                                        <!-- <img src="LB" alt="avatar" class="avatar-img rounded-circle"> -->
                                        <span class="avatar-title rounded-circle">${ele.user[0].toUpperCase()}</span>
                                    </span>
                                    <div class="flex">
                                        <p class="small text-muted m-0">${Math.round( (Date.now()-ele.date) / 86400000)} days ago</p>
                                        <span class="card-title">${ele.user}</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-9">
                                <div class="rating mb-8pt">
                                    ${RatingS.render({value : ele.star , text : ''})}
                                </div>
                                <p class="text-70 mb-0">${ele.comment}</p>
                        </div>
                        </div>
                        `
                        ).join('\n')}
                        </div>

                        <div style="display:flex; flex-direction:column;">
                            <h3>Submit you review</h3>
                            <textarea id="comment" class="form-control" rows="3" placeholder="Course description"></textarea>

                            <div class="rate">
                                <input type="radio" id="star5" name="rate" value="5" />
                                <label for="star5" title="text">5 stars</label>
                                <input type="radio" id="star4" name="rate" value="4" />
                                <label for="star4" title="text">4 stars</label>
                                <input type="radio" id="star3" name="rate" value="3" />
                                <label for="star3" title="text">3 stars</label>
                                <input type="radio" id="star2" name="rate" value="2" />
                                <label for="star2" title="text">2 stars</label>
                                <input type="radio" id="star1" name="rate" value="1" />
                                <label for="star1" title="text">1 star</label>
                            </div>
                            <div>
                                <button id="submitReview" class="btn btn-primary">Submit</button>
                            </div>

                        </div>
    
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
export default TakeCoursesScreen;