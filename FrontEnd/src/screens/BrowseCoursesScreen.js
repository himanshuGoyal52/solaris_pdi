import { getCourses } from "../api.js";
import { clearUser, getUserInfo } from "../localStorage.js";
import { RatingS } from "../components/rating.js";

const BrowseCoursesScreen = {
    after_render :  () => {
        if(getUserInfo().name){

            document.getElementById('signout-button')
            .addEventListener('click',()=>{
                clearUser();
                document.location.hash ='/login'
            })
        }
        document.getElementById('filterBtn')
        .addEventListener('click' , ()=>alert("We are adding this feature soon"))

    },

    render : async() =>{

        const courses = await getCourses("Allcourses"); 
        let popularcourses=[];
        let count = 0;
        for(let i=0 ; i<courses.length ; i++){
            if(count === 4) break;
            
            if(courses[i].position == 'popular'){
                popularcourses.push(courses[i]);
                count++;
            }
        }
        const {name , isAdmin} = getUserInfo();
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
    
                                <span class="avatar-title rounded bg-primary"><img  src="assets/images/illustration/student/128/white.svg" alt="logo" class="img-fluid" /></span>
    
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
                                <button id="signout-button" class="dropdown-item">Logout</button>
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
    
    
    
    
    
    
    
    
    
    
                <div data-push data-responsive-width="992px" class="mdk-drawer-layout js-mdk-drawer-layout">
                    <div class="mdk-drawer-layout__content">
    
    
    
    
                        <div class="page-section">
                            <div class="container page__container">
    
    
    
    
    
    
                                <div class="d-flex flex-column flex-sm-row align-items-sm-center mb-24pt" style="white-space: nowrap;">
                                    <small class="flex text-muted text-headings text-uppercase mr-3 mb-2 mb-sm-0">Displaying 4 out of 10 courses</small>
                                    <div class="w-auto ml-sm-auto table d-flex align-items-center mb-2 mb-sm-0">
                                        <small class="text-muted text-headings text-uppercase mr-3 d-none d-sm-block">Sort by</small>
    
                                        <a href="#" class="sort desc small text-headings text-uppercase">Newest</a>
    
                                        <a href="#" class="sort small text-headings text-uppercase ml-2">Popularity</a>
    
                                    </div>
    
                                    <a id="filterBtn" data-target="#library-drawer" data-toggle="sidebar" class="btn btn-sm btn-white ml-sm-16pt">
                                    <i style="font-size:1.2rem; margin-right: 5px;" class='bx bx-filter-alt' ></i> Filters
                                    </a>
    
                                </div>
    
    
                                <div class="page-separator">
                                    <div class="page-separator__text">Popular Courses</div>
                                </div>
    
    
    
                                <div class="row card-group-row">
    
                                    ${popularcourses.map(course => `
                                    <div style="margin:0.5rem 0;" class="col-md-6 col-lg-4 col-xl-3 card-group-row__col">
    
                                    <div class="card card-sm card--elevated p-relative o-hidden overlay overlay--primary-dodger-blue js-overlay mdk-reveal js-mdk-reveal card-group-row__card" data-overlay-onload-show data-popover-onload-show data-force-reveal data-partial-height="44" data-toggle="popover" data-trigger="click">


                                        <a href="/#/course/${course._id}" class="js-image" data-position="">
                                            <img style="margin:0 4px;" src="${course.thumbnail}" alt="course">
                                            <span class="overlay__content align-items-start justify-content-start">
                                                <span class="overlay__action card-body d-flex align-items-center">
                                                    <i class="material-icons mr-4pt"><i class="bx bx-play-circle"></i></i>
                                                    <span class="card-title text-white">Preview</span>
                                                </span>
                                            </span>
                                        </a>

                                        <div class="mdk-reveal__content">
                                            <div class="card-body">
                                                <div class="d-flex">
                                                    <div class="flex">
                                                        <a class="card-title" href="/#/takecourses">${course.name}</a>
                                                        <small class="text-50 font-weight-bold mb-4pt">${course.instructorEmail}</small>
                                                    </div>
                                                    <a href="/#/takecourses" data-toggle="tooltip" data-title="Remove Favorite" data-placement="top" data-boundary="window" class="ml-4pt material-icons text-20 card-course__icon-favorite"><i style="font-size:1.4rem;" class="bx bx-heart"></i></a>
                                                </div>
                                                <div class="d-flex">
                                                    <div class="rating flex">
                                                        ${RatingS.render({value : 3.5 , text : `15 reviews`})}
                                                    </div>
                                                    <small class="text-50">${course.duration} hours</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    

                                </div>
                                    `).join('\n')
                                }

                                    
    
                                </div>
    
                                <div class="mb-32pt">
    
                                    <ul class="pagination justify-content-start pagination-xsm m-0">
                                        <li class="page-item disabled">
                                            <a class="page-link" href="#" aria-label="Previous">
                                                <span aria-hidden="true" class="material-icons"><i class='bx bx-chevron-left' ></i></span>
                                                <span>Prev</span>
                                            </a>
                                        </li>
                                        <li class="page-item">
                                            <a class="page-link" href="#" aria-label="Page 1">
                                                <span>1</span>
                                            </a>
                                        </li>
                                        <li class="page-item">
                                            <a class="page-link" href="#" aria-label="Page 2">
                                                <span>2</span>
                                            </a>
                                        </li>
                                        <li class="page-item">
                                            <a class="page-link" href="#" aria-label="Next">
                                                <span>Next</span>
                                                <span aria-hidden="true" class="material-icons"><i class='bx bx-chevron-right' ></i></span>
                                            </a>
                                        </li>
                                    </ul>
    
                                </div>
    
                                <div class="page-separator">
                                    <div class="page-separator__text">All Courses</div>
                                </div>
    
    
    
                                <div class="row card-group-row">
    
                                    ${courses.map(course => `
                                    <div style="margin:0.5rem 0;" class="col-md-6 col-lg-4 col-xl-3 card-group-row__col">
    
                                    <div class="card card-sm card--elevated p-relative o-hidden overlay overlay--primary-dodger-blue js-overlay mdk-reveal js-mdk-reveal card-group-row__card" data-overlay-onload-show data-popover-onload-show data-force-reveal data-partial-height="44" data-toggle="popover" data-trigger="click">


                                        <a href="/#/course/${course._id}" class="js-image" data-position="">
                                            <img style="margin:0 4px;" src="${course.thumbnail}" alt="course">
                                            <span class="overlay__content align-items-start justify-content-start">
                                                <span class="overlay__action card-body d-flex align-items-center">
                                                    <i class="material-icons mr-4pt"><i class="bx bx-play-circle"></i></i>
                                                    <span class="card-title text-white">Preview</span>
                                                </span>
                                            </span>
                                        </a>

                                        <div class="mdk-reveal__content">
                                            <div class="card-body">
                                                <div class="d-flex">
                                                    <div class="flex">
                                                        <a class="card-title" href="/#/takecourses">${course.name}</a>
                                                        <small class="text-50 font-weight-bold mb-4pt">${course.instructorEmail}</small>
                                                    </div>
                                                    <a href="/#/takecourses" data-toggle="tooltip" data-title="Remove Favorite" data-placement="top" data-boundary="window" class="ml-4pt material-icons text-20 card-course__icon-favorite"><i style="font-size:1.4rem;" class="bx bx-heart"></i></a>
                                                </div>
                                                <div class="d-flex">
                                                    <div  class="rating flex">
                                                        ${RatingS.render({value : 4.5 , text : `15 reviews`})}
                                                    </div>
                                                    <small class="text-50">${course.duration} hours</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    

                                </div>
                                    `).join('\n')
                                }
    
                                
                            </div>
                        </div>
    
                    </div>
    
    
                    <div class="mdk-drawer js-mdk-drawer " id="library-drawer" data-align="end">
                        <div class="mdk-drawer__content top-navbar">
                            <div class="sidebar sidebar-light sidebar-right py-16pt" data-perfect-scrollbar data-perfect-scrollbar-wheel-propagation="true">
    
                                <div class="d-flex align-items-center mb-24pt  d-lg-none">
                                    <form action="index.html" class="search-form search-form--light mx-16pt pr-0 pl-16pt">
                                        <input type="text" class="form-control pl-0" placeholder="Search">
                                        <button class="btn" type="submit"><i class="material-icons">search</i></button>
                                    </form>
                                </div>
                                
                                
                        </div>
                    </div>
    
                </div>
    
    
    
    
            </div>
            <!-- // END Header Layout Content -->
    
    
    
        </div>
        <!-- // END Header Layout -->
    
    
    
    
        
    
    
    
    
    
    </div>
        `;
    },
};
export default BrowseCoursesScreen;