import { getEnrolledCourses } from "../api.js";
import { clearUser, getUserInfo } from "../localStorage.js";

const StudentDashboardScreen = {
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
        let {name , isAdmin , _id} = getUserInfo();
        let enrolledCourses = [];
        enrolledCourses = await getEnrolledCourses(_id);   

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
    
    
    
                <div class="pt-32pt">
                    <div class="container page__container d-flex flex-column flex-md-row align-items-center text-center text-sm-left">
                        <div class="flex d-flex flex-column flex-sm-row align-items-center mb-24pt mb-md-0">
    
                            <div class="mb-24pt mb-sm-0 mr-sm-24pt">
                                <h2 class="mb-0">Dashboard</h2>
    
                                <ol class="breadcrumb p-0 m-0">
                                    <li class="breadcrumb-item"><a href="index.html">Home</a></li>
    
                                    <li class="breadcrumb-item active">
    
                                        Dashboard
    
                                    </li>
    
                                </ol>
    
                            </div>
                        </div>
    
    
                        <div class="row" role="tablist">
                            <div class="col-auto">
                                <a href="fixed-student-my-courses.html" class="btn btn-outline-secondary">My Courses</a>
                            </div>
                        </div>
    
                    </div>
                </div>
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
                <div class="container page__container">
                    <div class="page-section">
    
                        <div class="page-separator">
                            <div class="page-separator__text">Overview</div>
                        </div>
    
                        <div class="row mb-lg-8pt">
                            <div class="col-lg-6">
    
                                <div class="card">
                                    <div class="card-header d-flex align-items-center">
                                        <div class="h2 mb-0 mr-3">Earnings</div>
                                        <div class="flex">
                                            <p class="card-title">Angular</p>
                                            <p class="card-subtitle text-50">Best score</p>
                                        </div>
                                        <div class="dropdown">
                                            <a href="#" class="btn btn-sm btn-outline-secondary dropdown-toggle" data-toggle="dropdown">Withdraw</a>
                                            <div class="dropdown-menu dropdown-menu-right">
                                                <a href="" class="dropdown-item">Popular Topics</a>
                                                <a href="" class="dropdown-item">Web Design</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card-body p-24pt">
                                        <div class="chart" style="height: 344px;">
                                            <canvas id="topicIqChart" class="chart-canvas js-update-chart-line" data-chart-hide-axes="true" data-chart-points="true" data-chart-suffix=" points" data-chart-line-border-color="primary"></canvas>
                                        </div>
                                    </div>
                                </div>
    
                            </div>
                            <div class="col-lg-6">
    
                                <div class="card">
                                    <div class="card-header d-flex align-items-center border-0">
                                        <div class="h2 mb-0 mr-3">432</div>
                                        <div class="flex">
                                            <p class="card-title">Experience IQ</p>
                                            <p class="card-subtitle text-50">4 days streak this week</p>
                                        </div>
                                        <i style="font-size:1.5rem;" class='bx bx-trending-up text-muted ml-2'></i>
                                    </div>
                                    <div class="card-body pt-0">
                                        <div class="chart" style="height: 128px;">
                                            <canvas id="iqChart" class="chart-canvas js-update-chart-line" data-chart-hide-axes="false" data-chart-points="true" data-chart-suffix="pt" data-chart-line-border-color="primary"></canvas>
                                        </div>
                                    </div>
                                </div>
    
    
    
    
    
    
    
                                <div id="carouselExampleFade" class="carousel carousel-card slide mb-24pt">
                                    <div class="carousel-inner">
    
                                        <div class="carousel-item active">
    
                                            <a class="card border-0 mb-0" href="">
                                                <img src="assets/images/achievements/flinto.png" alt="Flinto" class="card-img" style="max-height: 100%; width: initial;">
                                                <div class="fullbleed bg-primary" style="opacity: .5;"></div>
                                                <span class="card-body d-flex flex-column align-items-center justify-content-center fullbleed">
                                                    <span class="row flex-nowrap">
                                                        <span class="col-auto text-center d-flex flex-column justify-content-center align-items-center">
                                                            <span class="h5 text-white text-uppercase font-weight-normal m-0 d-block">Achievement</span>
                                                            <span class="text-white-60 d-block mb-24pt">Jun 5, 2018</span>
                                                        </span>
                                                        <span class="col d-flex flex-column">
                                                            <span class="text-right flex mb-16pt">
                                                                <img src="assets/images/paths/flinto_40x40@2x.png" width="64" alt="Flinto" class="rounded">
                                                            </span>
                                                        </span>
                                                    </span>
                                                    <span class="row flex-nowrap">
                                                        <span class="col-auto text-center d-flex flex-column justify-content-center align-items-center">
                                                            <img src="assets/images/illustration/achievement/128/white.png" width="64" alt="achievement">
                                                        </span>
                                                        <span class="col d-flex flex-column">
                                                            <span>
                                                                <span class="card-title text-white mb-4pt d-block">Flinto</span>
                                                                <span class="text-white-60">Introduction to The App Design Application</span>
                                                            </span>
                                                        </span>
                                                    </span>
                                                </span>
                                            </a>
    
                                        </div>
    
                                        <div class="carousel-item">
    
                                            <a class="card border-0 mb-0" href="">
                                                <img src="assets/images/achievements/angular.png" alt="Angular fundamentals" class="card-img" style="max-height: 100%; width: initial;">
                                                <div class="fullbleed bg-primary" style="opacity: .5;"></div>
                                                <span class="card-body d-flex flex-column align-items-center justify-content-center fullbleed">
                                                    <span class="row flex-nowrap">
                                                        <span class="col-auto text-center d-flex flex-column justify-content-center align-items-center">
                                                            <span class="h5 text-white text-uppercase font-weight-normal m-0 d-block">Achievement</span>
                                                            <span class="text-white-60 d-block mb-24pt">Jun 5, 2018</span>
                                                        </span>
                                                        <span class="col d-flex flex-column">
                                                            <span class="text-right flex mb-16pt">
                                                                <img src="assets/images/paths/angular_64x64.png" width="64" alt="Angular fundamentals" class="rounded">
                                                            </span>
                                                        </span>
                                                    </span>
                                                    <span class="row flex-nowrap">
                                                        <span class="col-auto text-center d-flex flex-column justify-content-center align-items-center">
                                                            <img src="assets/images/illustration/achievement/128/white.png" width="64" alt="achievement">
                                                        </span>
                                                        <span class="col d-flex flex-column">
                                                            <span>
                                                                <span class="card-title text-white mb-4pt d-block">Angular fundamentals</span>
                                                                <span class="text-white-60">Creating and Communicating Between Angular Components</span>
                                                            </span>
                                                        </span>
                                                    </span>
                                                </span>
                                            </a>
    
                                        </div>
    
                                    </div>
                                    <!-- <a class="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
        <span class="carousel-control-icon material-icons" aria-hidden="true">keyboard_arrow_left</span>
        <span class="sr-only">Previous</span>
      </a> -->
                                    <a class="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
                                        <i class='bx bx-chevron-right' ></i>
                                        <span class="sr-only">Next</span>
                                    </a>
                                </div>
    
    
                            </div>
                        </div>
    
                        <div class="row mb-lg-8pt">
                            

                            <div class="col-lg-12">
    
                                <div  class="page-separator">
                                    <div class="page-separator__text">Enrolled Courses</div>
                                </div>
    
    
                                <div  class="row card-group-row">

                                ${enrolledCourses.length === 0 ? `
                                        <h3 style="text-align:center;">You have'nt enrolled any courses</h3>
                                ` : 
                                    `
                                    ${enrolledCourses.map(course => `
                                    <div style="margin:0.5rem 0; max-width:21%;" class="col-md-6 col-lg-4 col-xl-3 card-group-row__col">
    
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
                                                        <span class="rating__item"><i class='bx bxs-star'></i></span>
                                                        <span class="rating__item"><i class='bx bxs-star'></i></span>
                                                        <span class="rating__item"><i class='bx bxs-star'></i></span>
                                                        <span class="rating__item"><i class='bx bxs-star'></i></span>
                                                        <span class="rating__item"><i class='bx bx-star' ></i></span>
                                                    </div>
                                                    <small class="text-50">${course.duration} hours</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    

                                </div>
                                    `).join('\n')
                                }
                                    `
                                }
    
                                    
    
                                
                            </div>
                                
    
                            </div>
                        </div>
    
    
    
                        <div class="page-separator">
                            <div class="page-separator__text">Liked Courses</div>
                        </div>
    
                        <div class="card">
    
                            <div class="list-group list-group-flush">
    
                                <div class="list-group-item p-3">
                                    <div class="row align-items-start">
                                        <div class="col-md-3 mb-8pt mb-md-0">
                                            <div class="media align-items-center">
                                                <div class="media-left mr-12pt">
                                                    <a href="" class="avatar avatar-sm">
                                                        <!-- <img src="LB" alt="avatar" class="avatar-img rounded-circle"> -->
                                                        <span class="avatar-title rounded-circle">LB</span>
                                                    </a>
                                                </div>
                                                <div class="d-flex flex-column media-body media-middle">
                                                    <a href="" class="card-title">Laza Bogdan</a>
                                                    <small class="text-muted">2 days ago</small>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col mb-8pt mb-md-0">
                                            <p class="mb-8pt"><a href="fixed-discussion.html" class="text-body"><strong>Using Angular HttpClientModule instead of HttpModule</strong></a></p>
    
    
                                            <a href="fixed-discussion.html" class="chip chip-outline-secondary">Angular fundamentals</a>
    
    
                                        </div>
                                        <div class="col-auto d-flex flex-column align-items-center justify-content-center">
                                            <h5 class="m-0">1</h5>
                                            <p class="lh-1 mb-0"><small class="text-70">answers</small></p>
                                        </div>
                                    </div>
                                </div>
    
                                <div class="list-group-item p-3">
                                    <div class="row align-items-start">
                                        <div class="col-md-3 mb-8pt mb-md-0">
                                            <div class="media align-items-center">
                                                <div class="media-left mr-12pt">
                                                    <a href="" class="avatar avatar-sm">
                                                        <!-- <img src="AC" alt="avatar" class="avatar-img rounded-circle"> -->
                                                        <span class="avatar-title rounded-circle">AC</span>
                                                    </a>
                                                </div>
                                                <div class="d-flex flex-column media-body media-middle">
                                                    <a href="" class="card-title">Adam Curtis</a>
                                                    <small class="text-muted">3 days ago</small>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col mb-8pt mb-md-0">
                                            <p class="mb-0"><a href="fixed-discussion.html" class="text-body"><strong>Why am I getting an error when trying to install angular/http@2.4.2</strong></a></p>
    
                                        </div>
                                        <div class="col-auto d-flex flex-column align-items-center justify-content-center">
                                            <h5 class="m-0">1</h5>
                                            <p class="lh-1 mb-0"><small class="text-70">answers</small></p>
                                        </div>
                                    </div>
                                </div>
    
                            </div>
    
                            <div class="card-footer p-8pt">
    
    
                                <ul class="pagination justify-content-start pagination-xsm m-0">
                                    <li class="page-item disabled">
                                        <a class="page-link" href="#" aria-label="Previous">
                                        <i style="font-size:1.5rem;" class='bx bx-chevron-left' ></i>
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
                                            <i style="font-size:1.5rem;" class='bx bx-chevron-right' ></i>
                                        </a>
                                    </li>
                                </ul>
    
    
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
    
    
    
    
        
    
    
        <!-- jQuery -->
        <script src="assets/vendor/jquery.min.js"></script>
    
        <!-- Bootstrap -->
        <script src="assets/vendor/popper.min.js"></script>
        <script src="assets/vendor/bootstrap.min.js"></script>
    
        <!-- Perfect Scrollbar -->
        <script src="assets/vendor/perfect-scrollbar.min.js"></script>
    
        <!-- DOM Factory -->
        <script src="assets/vendor/dom-factory.js"></script>
    
        <!-- MDK -->
        <script src="assets/vendor/material-design-kit.js"></script>
    
        <!-- Fix Footer -->
        <script src="assets/vendor/fix-footer.js"></script>
    
        <!-- App JS -->
        <script src="assets/js/app.js"></script>
    
    
       
    
    </div>
        `;
    },
};
export default StudentDashboardScreen;