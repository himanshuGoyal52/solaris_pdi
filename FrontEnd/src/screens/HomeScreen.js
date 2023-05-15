import { clearUser, getUserInfo } from "../localStorage.js";

const HomeScreen = {
    after_render : () => {
        (function() {
            'use strict';
            let headerNode = document.querySelector('.mdk-header')
            let layoutNode = document.querySelector('.mdk-header-layout')
            let componentNode = layoutNode ? layoutNode : headerNode

            componentNode.addEventListener('domfactory-component-upgraded', function() {
                headerNode.mdkHeader.eventTarget.addEventListener('scroll', function() {
                    let progress = headerNode.mdkHeader.getScrollState().progress
                    let navbarNode = headerNode.querySelector('#default-navbar')
                    navbarNode.classList.toggle('bg-transparent', progress <= 0.2)
                })
            })
        })()

        if(getUserInfo().name){
            document.getElementById('signout-button')
            .addEventListener('click',()=>{
                clearUser();
                
                document.location.hash ='/login'
            })
        }
    },

    render : async() =>{

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

    <div id="header" class="mdk-header mdk-header--bg-dark bg-dark js-mdk-header mb-0" data-effects="parallax-background waterfall" data-fixed data-condenses>
        <div class="mdk-header__bg">
            <div class="mdk-header__bg-front" style="background-image: url(assets/images/photodune-4161018-group-of-students-m.png);"></div>
        </div>
        <div class="mdk-header__content justify-content-center">



            <div class="navbar navbar-expand navbar-dark-dodger-blue bg-transparent will-fade-background" id="default-navbar" data-primary>
                <!-- Navbar Brand -->
                <a href="/#/" class="navbar-brand mr-16pt">
                    <!-- <img class="navbar-brand-icon" src="assets/images/logo/white-100@2x.png" width="30" alt="Solaris"> -->

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








                <ul class="nav navbar-nav ml-auto mr-0">
                ${name ? `
                <div class="nav-item dropdown">
                <a href="#" class="nav-link d-flex align-items-center dropdown-toggle" data-toggle="dropdown" data-caret="false">

                    <span style="margin-right: 1rem;" class="avatar avatar-sm mr-8pt2">

                        <span class="avatar-title rounded-circle bg-primary"><i style="font-size:1.3rem;" class='bx bxs-user-rectangle' ></i></span>

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
                ` : `
                <li class="nav-item">
                <a href="/#/login" class="nav-link" data-toggle="tooltip" data-title="Login" data-placement="bottom" data-boundary="window"><i id="lockbox" class='bx bx-lock-open'></i></a>
            </li>
            <li class="nav-item">
                <a href="/#/signup" class="btn btn-outline-white">Get Started</a>
            </li>
                `}
                    
                </ul>
            </div>

            <div class="hero container page__container text-center text-md-left py-112pt">
                <h1 class="text-white text-shadow">Learn and Earn!!</h1>
                <p class="lead measure-hero-lead mx-auto mx-md-0 text-white text-shadow mb-48pt">Business, Technology and Creative Skills taught by industry experts. Explore a wide range of skills with our professional tutorials.</p>


                <a href="/#/courses" class="btn btn-lg btn-white btn--raised mb-16pt">Browse Courses</a>


                ${name ? `` : `<p class="mb-0"><a href="/#/signup_instructor" class="text-white text-shadow"><strong>Are you a teacher?</strong></a></p>`}

            </div>
        </div>
    </div>

    <!-- // END Header -->

    <!-- Header Layout Content -->
    <div class="mdk-header-layout__content page-content ">

















        <div class="bg-white border-bottom-2 py-16pt ">
            <div class="container page__container">
                <div class="row align-items-center">
                    <div class="d-flex col-md align-items-center border-bottom border-md-0 mb-16pt mb-md-0 pb-16pt pb-md-0">
                        <div class="rounded-circle bg-primary w-64 h-64 d-inline-flex align-items-center justify-content-center mr-16pt">
                            <i style="font-size:1.6rem ; color : white;" class='bx bxs-videos'></i>
                        </div>
                        <div class="flex">
                            <div class="card-title mb-4pt">8,000+ Courses</div>
                            <p class="card-subtitle text-black-70">Explore a wide range of skills.</p>
                        </div>
                    </div>
                    <div class="d-flex col-md align-items-center border-bottom border-md-0 mb-16pt mb-md-0 pb-16pt pb-md-0">
                        <div style="font-size:1.6rem ; color : white;" class="rounded-circle bg-primary w-64 h-64 d-inline-flex align-items-center justify-content-center mr-16pt">
                        <i class='bx bx-check-shield'></i>
                        </div>
                        <div class="flex">
                            <div class="card-title mb-4pt">By Industry Experts</div>
                            <p class="card-subtitle text-black-70">Professional development from the best people.</p>
                        </div>
                    </div>
                    <div class="d-flex col-md align-items-center">
                        <div class="rounded-circle bg-primary w-64 h-64 d-inline-flex align-items-center justify-content-center mr-16pt">
                            <i style="font-size:1.6rem ; color : white;" class='bx bx-time' ></i>
                        </div>
                        <div class="flex">
                            <div class="card-title mb-4pt">Unlimited Access</div>
                            <p class="card-subtitle text-black-70">Unlock Library and learn any topic with one subscription.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="page-section border-bottom-2">
            <div class="container page__container">

                <div class="page-separator">
                    <div class="page-separator__text">New Courses</div>
                </div>



                <div class="row card-group-row">

                    <div class="col-md-6 col-lg-4 card-group-row__col">





                        <div class="card card--elevated posts-card-popular overlay card-group-row__card">
                            <img src="assets/images/paths/sketch_430x168.png" alt="" class="card-img">
                            <div class="fullbleed bg-primary" style="opacity: .5"></div>
                            <div class="posts-card-popular__content">
                                <div class="card-body d-flex align-items-center">
                                    <div class="avatar-group flex">
                                        <div class="avatar avatar-xs" data-toggle="tooltip" data-placement="top" title="Janell D.">
                                            <a href=""><img src="assets/images/256_luke-porter-261779-unsplash.jpg" alt="Avatar" class="avatar-img rounded-circle"></a>
                                        </div>
                                    </div>
                                    <a style="text-decoration: none;" class="d-flex align-items-center" href=""><i class='bx bx-bar-chart-square' style="font-size:1.4rem; margin:0 5px;" ></i> <small>327</small></a>
                                </div>
                                <div class="posts-card-popular__title card-body">
                                    <small class="text-muted text-uppercase">sketch</small>
                                    <a class="card-title" href="/#/takecourses">Merge Duplicates Inconsistent Symbols</a>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div class="col-md-6 col-lg-4 card-group-row__col">





                        <div class="card card--elevated posts-card-popular overlay card-group-row__card">
                            <img src="assets/images/paths/invision_430x168.png" alt="" class="card-img">
                            <div class="fullbleed bg-primary" style="opacity: .5"></div>
                            <div class="posts-card-popular__content">
                                <div class="card-body d-flex align-items-center">
                                    <div class="avatar-group flex">
                                        <div class="avatar avatar-xs" data-toggle="tooltip" data-placement="top" title="Janell D.">
                                            <a href=""><img src="assets/images/256_michael-dam-258165-unsplash.jpg" alt="Avatar" class="avatar-img rounded-circle"></a>
                                        </div>
                                    </div>
                                    <a style="text-decoration: none;" class="d-flex align-items-center" href=""><i class='bx bx-bar-chart-square' style="font-size:1.4rem ; margin:0 5px;" ></i> <small>327</small></a>
                                </div>
                                <div class="posts-card-popular__title card-body">
                                    <small class="text-muted text-uppercase">invision</small>
                                    <a class="card-title" href="/#/takecourses">Design Systems Essentials</a>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div class="col-md-6 col-lg-4 card-group-row__col">





                        <div class="card card--elevated posts-card-popular overlay card-group-row__card">
                            <img src="assets/images/paths/photoshop_430x168.png" alt="" class="card-img">
                            <div class="fullbleed bg-primary" style="opacity: .5"></div>
                            <div class="posts-card-popular__content">
                                <div class="card-body d-flex align-items-center">
                                    <div class="avatar-group flex">
                                        <div class="avatar avatar-xs" data-toggle="tooltip" data-placement="top" title="Janell D.">
                                            <a href=""><img src="assets/images/256_rsz_1andy-lee-642320-unsplash.jpg" alt="Avatar" class="avatar-img rounded-circle"></a>
                                        </div>
                                    </div>
                                    <a style="text-decoration: none;" class="d-flex align-items-center" href=""><i class='bx bx-bar-chart-square' style="font-size:1.4rem; margin:0 5px;"></i> <small>327</small></a>
                                </div>
                                <div class="posts-card-popular__title card-body">
                                    <small class="text-muted text-uppercase">photoshop</small>
                                    <a class="card-title" href="/#/takecourses">Semantic Logo Design</a>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>



                <div class="posts-cards">

                    <div class="card posts-card mb-0">
                        <div class="posts-card__content d-flex align-items-center flex-wrap">
                            <div class="avatar avatar-lg mr-3">
                                <a href="/#/takecourses"><img src="assets/images/paths/invision_200x168.png" alt="avatar" class="avatar-img rounded"></a>
                            </div>
                            <div class="posts-card__title flex d-flex flex-column">
                                <a href="/#/takecourses" class="card-title mr-3">Design Systems Essentials</a>
                                <small class="text-50">35 views last week</small>
                            </div>
                            <div class="d-flex align-items-center flex-column flex-sm-row posts-card__meta">
                                <div class="mr-3 text-50 text-uppercase posts-card__tag d-flex align-items-center">
                                <i class='bx bx-folder' style="font-size:1.4rem; margin:0 5px;" ></i> inVision
                                </div>
                                <div class="mr-3 text-50 posts-card__date">
                                    <small>11 Nov, 2018 07:46 AM</small>
                                </div>
                                <div class="media ml-sm-auto align-items-center">
                                    <div class="media-left mr-2 avatar-group">

                                        <div class="avatar avatar-xs" data-toggle="tooltip" data-placement="top" title="Janell D.">
                                            <img src="assets/images/256_rsz_1andy-lee-642320-unsplash.jpg" alt="Avatar" class="avatar-img rounded-circle">
                                        </div>

                                        <div class="avatar avatar-xs" data-toggle="tooltip" data-placement="top" title="Janell D.">
                                            <img src="assets/images/256_michael-dam-258165-unsplash.jpg" alt="Avatar" class="avatar-img rounded-circle">
                                        </div>

                                        <div class="avatar avatar-xs" data-toggle="tooltip" data-placement="top" title="Janell D.">
                                            <img src="assets/images/256_luke-porter-261779-unsplash.jpg" alt="Avatar" class="avatar-img rounded-circle">
                                        </div>

                                    </div>
                                    <div class="media-body">

                                        <a href="">+2 more</a>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>

        <div class="page-section border-bottom-2">
            <div class="container page__container">
                <div class="page-separator">
                    <div class="page-separator__text">CATEGORY</div>
                </div>



                <div class="row card-group-row">

                    <div class="col-sm-4 card-group-row__col">

                        <div class="card js-overlay card-sm overlay--primary-dodger-blue stack stack--1 card-group-row__card" data-toggle="popover" data-trigger="click">

                            <div class="card-body d-flex flex-column">
                                <div class="d-flex align-items-center">
                                    <div class="flex">
                                        <div class="d-flex align-items-center">
                                            <div class="rounded mr-12pt z-0 o-hidden">
                                                <div class="overlay">
                                                    <img src="assets/images/paths/react_40x40@2x.png" width="40" height="40" alt="Angular" class="rounded">
                                                    <span class="overlay__content overlay__content-transparent">
                                                        <span class="overlay__action d-flex flex-column text-center lh-1">
                                                            <small class="h6 small text-white mb-0" style="font-weight: 500;">80%</small>
                                                        </span>
                                                    </span>
                                                </div>
                                            </div>
                                            <div class="flex">
                                                <div class="card-title">React Native</div>
                                                <p class="flex text-black-50 lh-1 mb-0"><small>18 courses</small></p>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <a href="/#/courses" data-boundary="window" class="ml-4pt material-icons text-20 card-course__icon-favorite"><i style="font-size:1.4rem;" class='bx bxs-folder-open'></i></a>

                                </div>


                            </div>
                        </div>


                    </div>

                    <div class="col-sm-4 card-group-row__col">

                        <div class="card js-overlay card-sm overlay--primary-dodger-blue stack stack--1 card-group-row__card" data-toggle="popover" data-trigger="click">

                            <div class="card-body d-flex flex-column">
                                <div class="d-flex align-items-center">
                                    <div class="flex">
                                        <div class="d-flex align-items-center">
                                            <div class="rounded mr-12pt z-0 o-hidden">
                                                <div class="overlay">
                                                    <img src="assets/images/paths/devops_40x40@2x.png" width="40" height="40" alt="Angular" class="rounded">
                                                    <span class="overlay__content overlay__content-transparent">
                                                        <span class="overlay__action d-flex flex-column text-center lh-1">
                                                            <small class="h6 small text-white mb-0" style="font-weight: 500;">80%</small>
                                                        </span>
                                                    </span>
                                                </div>
                                            </div>
                                            <div class="flex">
                                                <div class="card-title">Dev Ops</div>
                                                <p class="flex text-black-50 lh-1 mb-0"><small>18 courses</small></p>
                                            </div>
                                        </div>
                                    </div>

                                    <a href="/#/courses" data-toggle="tooltip" data-title="Add Favorite" data-placement="top" data-boundary="window" class="ml-4pt material-icons text-20 card-course__icon-favorite"><i style="font-size:1.4rem;" class='bx bxs-folder-open'></i></a>

                                </div>


                            </div>
                        </div>

                        


                    </div>

                    <div class="col-sm-4 card-group-row__col">

                        <div class="card js-overlay card-sm overlay--primary-dodger-blue stack stack--1 card-group-row__card" data-toggle="popover" data-trigger="click">

                            <div class="card-body d-flex flex-column">
                                <div class="d-flex align-items-center">
                                    <div class="flex">
                                        <div class="d-flex align-items-center">
                                            <div class="rounded mr-12pt z-0 o-hidden">
                                                <div class="overlay">
                                                    <img src="assets/images/paths/redis_40x40@2x.png" width="40" height="40" alt="Angular" class="rounded">
                                                    <span class="overlay__content overlay__content-transparent">
                                                        <span class="overlay__action d-flex flex-column text-center lh-1">
                                                            <small class="h6 small text-white mb-0" style="font-weight: 500;">80%</small>
                                                        </span>
                                                    </span>
                                                </div>
                                            </div>
                                            <div class="flex">
                                                <div class="card-title">Redis</div>
                                                <p class="flex text-black-50 lh-1 mb-0"><small>18 courses</small></p>
                                            </div>
                                        </div>
                                    </div>

                                    <a href="/#/courses" data-toggle="tooltip" data-title="Add Favorite" data-placement="top" data-boundary="window" class="ml-4pt material-icons text-20 card-course__icon-favorite"><i style="font-size:1.4rem;" class='bx bxs-folder-open'></i></a>

                                </div>


                            </div>
                        </div>
                    </div>

                </div>



                <div class="row card-group-row mb-lg-8pt">

                    <div class="col-sm-4 card-group-row__col">

                        <div class="card js-overlay card-sm overlay--primary-dodger-blue stack stack--1 card-group-row__card mb-lg-0" data-toggle="popover" data-trigger="click">

                            <div class="card-body d-flex flex-column">
                                <div class="d-flex align-items-center">
                                    <div class="flex">
                                        <div class="d-flex align-items-center">
                                            <div class="rounded mr-12pt z-0 o-hidden">
                                                <div class="overlay">
                                                    <img src="assets/images/paths/mailchimp_40x40@2x.png" width="40" height="40" alt="Angular" class="rounded">
                                                    <span class="overlay__content overlay__content-transparent">
                                                        <span class="overlay__action d-flex flex-column text-center lh-1">
                                                            <small class="h6 small text-white mb-0" style="font-weight: 500;">80%</small>
                                                        </span>
                                                    </span>
                                                </div>
                                            </div>
                                            <div class="flex">
                                                <div class="card-title">MailChimp</div>
                                                <p class="flex text-black-50 lh-1 mb-0"><small>18 courses</small></p>
                                            </div>
                                        </div>
                                    </div>

                                    <a href="/#/courses" data-toggle="tooltip" data-title="Add Favorite" data-placement="top" data-boundary="window" class="ml-4pt material-icons text-20 card-course__icon-favorite"><i style="font-size:1.4rem;" class='bx bxs-folder-open'></i></a>

                                </div>


                            </div>
                        </div>

                        


                    </div>

                    <div class="col-sm-4 card-group-row__col">

                        <div class="card js-overlay card-sm overlay--primary-dodger-blue stack stack--1 card-group-row__card mb-lg-0" data-toggle="popover" data-trigger="click">

                            <div class="card-body d-flex flex-column">
                                <div class="d-flex align-items-center">
                                    <div class="flex">
                                        <div class="d-flex align-items-center">
                                            <div class="rounded mr-12pt z-0 o-hidden">
                                                <div class="overlay">
                                                    <img src="assets/images/paths/swift_40x40@2x.png" width="40" height="40" alt="Angular" class="rounded">
                                                    <span class="overlay__content overlay__content-transparent">
                                                        <span class="overlay__action d-flex flex-column text-center lh-1">
                                                            <small class="h6 small text-white mb-0" style="font-weight: 500;">80%</small>
                                                        </span>
                                                    </span>
                                                </div>
                                            </div>
                                            <div class="flex">
                                                <div class="card-title">Swift</div>
                                                <p class="flex text-black-50 lh-1 mb-0"><small>18 courses</small></p>
                                            </div>
                                        </div>
                                    </div>

                                    <a href="/#/courses" data-toggle="tooltip" data-title="Add Favorite" data-placement="top" data-boundary="window" class="ml-4pt material-icons text-20 card-course__icon-favorite"><i style="font-size:1.4rem;" class='bx bxs-folder-open'></i></a>

                                </div>


                            </div>
                        </div>

                        


                    </div>

                    <div class="col-sm-4 card-group-row__col">

                        <div class="card js-overlay card-sm overlay--primary-dodger-blue stack stack--1 card-group-row__card mb-lg-0" data-toggle="popover" data-trigger="click">

                            <div class="card-body d-flex flex-column">
                                <div class="d-flex align-items-center">
                                    <div class="flex">
                                        <div class="d-flex align-items-center">
                                            <div class="rounded mr-12pt z-0 o-hidden">
                                                <div class="overlay">
                                                    <img src="assets/images/paths/wordpress_40x40@2x.png" width="40" height="40" alt="Angular" class="rounded">
                                                    <span class="overlay__content overlay__content-transparent">
                                                        <span class="overlay__action d-flex flex-column text-center lh-1">
                                                            <small class="h6 small text-white mb-0" style="font-weight: 500;">80%</small>
                                                        </span>
                                                    </span>
                                                </div>
                                            </div>
                                            <div class="flex">
                                                <div class="card-title">WordPress</div>
                                                <p class="flex text-black-50 lh-1 mb-0"><small>18 courses</small></p>
                                            </div>
                                        </div>
                                    </div>

                                    <a href="/#/courses" data-toggle="tooltip" data-title="Add Favorite" data-placement="top" data-boundary="window" class="ml-4pt material-icons text-20 card-course__icon-favorite"><i style="font-size:1.4rem;" class='bx bxs-folder-open'></i></a>

                                </div>


                            </div>
                        </div>

                        


                    </div>

                </div>

            </div>
        </div>

        <div class="page-section border-bottom-2">
            <div class="container page__container">
                <div class="page-separator">
                    <div class="page-separator__text">Trending Courses</div>
                </div>



                <div class="row card-group-row">

                    <div class="col-md-6 col-lg-4 col-xl-3 card-group-row__col">

                        <div class="card card-sm card--elevated p-relative o-hidden overlay overlay--primary-dodger-blue js-overlay card-group-row__card" data-toggle="popover" data-trigger="click">


                            <a href="/#/takecourses" class="card-img-top js-image" data-position="" data-height="140">
                                <img src="assets/images/paths/sketch_430x168.png" alt="course">
                                <span class="overlay__content">
                                    <span class="overlay__action d-flex flex-column text-center">
                                        <i class="material-icons icon-32pt"><i class='bx bx-play-circle' ></i></i>
                                        <span class="card-title text-white">Preview</span>
                                    </span>
                                </span>
                            </a>

                            <div class="card-body flex">
                                <div class="d-flex">
                                    <div class="flex">
                                        <a class="card-title" href="/#/takecourses">Learn Sketch</a>
                                        <small class="text-50 font-weight-bold mb-4pt">Elijah Murray</small>
                                    </div>
                                    <a href="/#/takecourses" data-toggle="tooltip" data-title="Add Favorite" data-placement="top" data-boundary="window" class="ml-4pt material-icons text-20 card-course__icon-favorite"><i style="font-size:1.4rem;" class='bx bx-heart' ></i></a>
                                </div>
                                <div class="d-flex">
                                    <div class="rating flex">
                                        <span class="rating__item"><i class='bx bxs-star'></i></span>
                                        <span class="rating__item"><i class='bx bxs-star'></i></span>
                                        <span class="rating__item"><i class='bx bxs-star'></i></span>
                                        <span class="rating__item"><i class='bx bxs-star'></i></span>
                                        <span class="rating__item"><i class='bx bx-star' ></i></span>
                                    </div>
                                    <!-- <small class="text-50">6 hours</small> -->
                                </div>
                            </div>
                            <div class="card-footer">
                                <div class="row justify-content-between">
                                    <div class="col-auto d-flex align-items-center">
                                        <span class="material-icons icon-16pt text-black-50 mr-4pt"><i class='bx bx-time-five'></i></span>
                                        <p class="flex text-black-50 lh-1 mb-0"><small>6 hours</small></p>
                                    </div>
                                    <div class="col-auto d-flex align-items-center">
                                        <span class="material-icons icon-16pt text-black-50 mr-4pt"><i class='bx bx-play-circle' ></i></span>
                                        <p class="flex text-black-50 lh-1 mb-0"><small>17 lessons</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        

                    </div>

                    <div class="col-md-6 col-lg-4 col-xl-3 card-group-row__col">

                        <div class="card card-sm card--elevated p-relative o-hidden overlay overlay--primary-dodger-blue js-overlay card-group-row__card" data-toggle="popover" data-trigger="click">


                            <a href="/#/takecourses" class="card-img-top js-image" data-position="" data-height="140">
                                <img src="assets/images/paths/flinto_430x168.png" alt="course">
                                <span class="overlay__content">
                                    <span class="overlay__action d-flex flex-column text-center">
                                        <i class="material-icons icon-32pt"><i class='bx bx-play-circle' ></i></i>
                                        <span class="card-title text-white">Preview</span>
                                    </span>
                                </span>
                            </a>

                            <div class="card-body flex">
                                <div class="d-flex">
                                    <div class="flex">
                                        <a class="card-title" href="/#/takecourses">Learn Flinto</a>
                                        <small class="text-50 font-weight-bold mb-4pt">Elijah Murray</small>
                                    </div>
                                    <a href="/#/takecourses" data-toggle="tooltip" data-title="Add Favorite" data-placement="top" data-boundary="window" class="ml-4pt material-icons text-20 card-course__icon-favorite"><i style="font-size:1.4rem;" class='bx bx-heart' ></i></a>
                                </div>
                                <div class="d-flex">
                                    <div class="rating flex">
                                        <span class="rating__item"><i class='bx bxs-star'></i></span>
                                        <span class="rating__item"><i class='bx bxs-star'></i></span>
                                        <span class="rating__item"><i class='bx bxs-star'></i></span>
                                        <span class="rating__item"><i class='bx bxs-star'></i></span>
                                        <span class="rating__item"><i class='bx bx-star' ></i></span>
                                    </div>
                                    <!-- <small class="text-50">6 hours</small> -->
                                </div>
                            </div>
                            <div class="card-footer">
                                <div class="row justify-content-between">
                                    <div class="col-auto d-flex align-items-center">
                                        <span class="material-icons icon-16pt text-black-50 mr-4pt"><i class='bx bx-time-five'></i></span>
                                        <p class="flex text-black-50 lh-1 mb-0"><small>6 hours</small></p>
                                    </div>
                                    <div class="col-auto d-flex align-items-center">
                                        <span class="material-icons icon-16pt text-black-50 mr-4pt"><i class='bx bx-play-circle' ></i></span>
                                        <p class="flex text-black-50 lh-1 mb-0"><small>12 lessons</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>

                    <div class="col-md-6 col-lg-4 col-xl-3 card-group-row__col">

                        <div class="card card-sm card--elevated p-relative o-hidden overlay overlay--primary-dodger-blue js-overlay card-group-row__card" data-toggle="popover" data-trigger="click">


                            <a href="/#/takecourses" class="card-img-top js-image" data-position="" data-height="140">
                                <img src="assets/images/paths/photoshop_430x168.png" alt="course">
                                <span class="overlay__content">
                                    <span class="overlay__action d-flex flex-column text-center">
                                        <i class="material-icons icon-32pt"><i class='bx bx-play-circle' ></i></i>
                                        <span class="card-title text-white">Preview</span>
                                    </span>
                                </span>
                            </a>

                            <div class="card-body flex">
                                <div class="d-flex">
                                    <div class="flex">
                                        <a class="card-title" href="/#/takecourses">Learn Photoshop</a>
                                        <small class="text-50 font-weight-bold mb-4pt">Elijah Murray</small>
                                    </div>
                                    <a href="/#/takecourses" data-toggle="tooltip" data-title="Add Favorite" data-placement="top" data-boundary="window" class="ml-4pt material-icons text-20 card-course__icon-favorite"><i style="font-size:1.4rem;" class='bx bx-heart' ></i></a>
                                </div>
                                <div class="d-flex">
                                    <div class="rating flex">
                                        <span class="rating__item"><i class='bx bxs-star'></i></span>
                                        <span class="rating__item"><i class='bx bxs-star'></i></span>
                                        <span class="rating__item"><i class='bx bxs-star'></i></span>
                                        <span class="rating__item"><i class='bx bxs-star'></i></span>
                                        <span class="rating__item"><i class='bx bx-star' ></i></span>
                                    </div>
                                    <!-- <small class="text-50">6 hours</small> -->
                                </div>
                            </div>
                            <div class="card-footer">
                                <div class="row justify-content-between">
                                    <div class="col-auto d-flex align-items-center">
                                        <span class="material-icons icon-16pt text-black-50 mr-4pt"><i class='bx bx-time-five'></i></span>
                                        <p class="flex text-black-50 lh-1 mb-0"><small>6 hours</small></p>
                                    </div>
                                    <div class="col-auto d-flex align-items-center">
                                        <span class="material-icons icon-16pt text-black-50 mr-4pt"><i class='bx bx-play-circle' ></i></span>
                                        <p class="flex text-black-50 lh-1 mb-0"><small>12 lessons</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-6 col-lg-4 col-xl-3 card-group-row__col">

                        <div class="card card-sm card--elevated p-relative o-hidden overlay overlay--primary-dodger-blue js-overlay card-group-row__card" data-toggle="popover" data-trigger="click">


                            <a href="/#/takecourses" class="card-img-top js-image" data-position="" data-height="140">
                                <img src="assets/images/paths/figma_430x168.png" alt="course">
                                <span class="overlay__content">
                                    <span class="overlay__action d-flex flex-column text-center">
                                        <i class="material-icons icon-32pt"><i class='bx bx-play-circle' ></i></i>
                                        <span class="card-title text-white">Preview</span>
                                    </span>
                                </span>
                            </a>

                            <div class="card-body flex">
                                <div class="d-flex">
                                    <div class="flex">
                                        <a class="card-title" href="/#/takecourses">Learn Figma</a>
                                        <small class="text-50 font-weight-bold mb-4pt">Elijah Murray</small>
                                    </div>
                                    <a href="/#/takecourses" data-toggle="tooltip" data-title="Add Favorite" data-placement="top" data-boundary="window" class="ml-4pt material-icons text-20 card-course__icon-favorite"><i style="font-size:1.4rem;" class='bx bx-heart' ></i></a>
                                </div>
                                <div class="d-flex">
                                    <div class="rating flex">
                                        <span class="rating__item"><i class='bx bxs-star'></i></span>
                                        <span class="rating__item"><i class='bx bxs-star'></i></span>
                                        <span class="rating__item"><i class='bx bxs-star'></i></span>
                                        <span class="rating__item"><i class='bx bxs-star'></i></span>
                                        <span class="rating__item"><i class='bx bx-star' ></i></span>
                                    </div>
                                    <!-- <small class="text-50">6 hours</small> -->
                                </div>
                            </div>
                            <div class="card-footer">
                                <div class="row justify-content-between">
                                    <div class="col-auto d-flex align-items-center">
                                        <span class="material-icons icon-16pt text-black-50 mr-4pt"><i class='bx bx-time-five'></i></span>
                                        <p class="flex text-black-50 lh-1 mb-0"><small>6 hours</small></p>
                                    </div>
                                    <div class="col-auto d-flex align-items-center">
                                        <span class="material-icons icon-16pt text-black-50 mr-4pt"><i class='bx bx-play-circle' ></i></span>
                                        <p class="flex text-black-50 lh-1 mb-0"><small>12 lessons</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>

                </div>
            </div>
        </div>

        <div class="page-section">
            <div class="container page__container">
                <div class="page-headline text-center">
                    <h2>Feedback</h2>
                    <p class="lead measure-lead mx-auto text-black-70">What other students turned professionals have to say about us after learning with us and reaching their goals.</p>
                </div>



                <div style="margin-left:0px;" class="position-relative carousel-card col-lg-8 p-0 mx-auto">
                    <div class="row d-block js-mdk-carousel" id="carousel-feedback">
                        <div style="display:flex;" class="mdk-carousel__content">

                            <div class="col-12 col-md-6">

                                <div class="card card-feedback card-body">
                                    <blockquote class="blockquote mb-0">
                                        <p class="text-70 small mb-0">A wonderful course on how to start. Eddie beautifully conveys all essentials of a becoming a good Angular developer. Very glad to have taken this course. Thank you Eddie Bryan.</p>
                                    </blockquote>
                                </div>
                                <div class="media ml-12pt">
                                    <div class="media-left mr-12pt">
                                        <a href="/#/" class="avatar avatar-sm">
                                            <!-- <img src="assets/images/people/110/guy-.jpg" width="40" alt="avatar" class="rounded-circle"> -->
                                            <span class="avatar-title rounded-circle">UK</span>
                                        </a>
                                    </div>
                                    <div class="media-body media-middle">
                                        <a href="/#/" class="card-title">Umberto Kass</a>
                                        <div class="rating mt-4pt">
                                            <span class="rating__item"><i class='bx bxs-star'></i></span>
                                            <span class="rating__item"><i class='bx bxs-star'></i></span>
                                            <span class="rating__item"><i class='bx bxs-star'></i></span>
                                            <span class="rating__item"><i class='bx bxs-star'></i></span>
                                            <span class="rating__item"><i class='bx bx-star' ></i></span>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div class="col-12 col-md-6">

                                <div class="card card-feedback card-body">
                                    <blockquote class="blockquote mb-0">
                                        <p class="text-70 small mb-0">A wonderful course on how to start. Eddie beautifully conveys all essentials of a becoming a good Angular developer. Very glad to have taken this course. Thank you Eddie Bryan.</p>
                                    </blockquote>
                                </div>
                                <div class="media ml-12pt">
                                    <div class="media-left mr-12pt">
                                        <a href="/#/" class="avatar avatar-sm">
                                            <!-- <img src="assets/images/people/110/guy-.jpg" width="40" alt="avatar" class="rounded-circle"> -->
                                            <span class="avatar-title rounded-circle">UK</span>
                                        </a>
                                    </div>
                                    <div class="media-body media-middle">
                                        <a href="/#/" class="card-title">Umberto Kass</a>
                                        <div class="rating mt-4pt">
                                            <span class="rating__item"><i class='bx bxs-star'></i></span>
                                            <span class="rating__item"><i class='bx bxs-star'></i></span>
                                            <span class="rating__item"><i class='bx bxs-star'></i></span>
                                            <span class="rating__item"><i class='bx bxs-star'></i></span>
                                            <span class="rating__item"><i class='bx bx-star' ></i></span>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div class="col-12 col-md-6">

                                <div class="card card-feedback card-body">
                                    <blockquote class="blockquote mb-0">
                                        <p class="text-70 small mb-0">A wonderful course on how to start. Eddie beautifully conveys all essentials of a becoming a good Angular developer. Very glad to have taken this course. Thank you Eddie Bryan.</p>
                                    </blockquote>
                                </div>
                                <div class="media ml-12pt">
                                    <div class="media-left mr-12pt">
                                        <a href="/#/" class="avatar avatar-sm">
                                            <!-- <img src="assets/images/people/110/guy-.jpg" width="40" alt="avatar" class="rounded-circle"> -->
                                            <span class="avatar-title rounded-circle">UK</span>
                                        </a>
                                    </div>
                                    <div class="media-body media-middle">
                                        <a href="/#/" class="card-title">Umberto Kass</a>
                                        <div class="rating mt-4pt">
                                            <span class="rating__item"><i class='bx bxs-star'></i></span>
                                            <span class="rating__item"><i class='bx bxs-star'></i></span>
                                            <span class="rating__item"><i class='bx bxs-star'></i></span>
                                            <span class="rating__item"><i class='bx bxs-star'></i></span>
                                            <span class="rating__item"><i class='bx bx-star' ></i></span>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
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
            <p class="text-50 small mt-n1 mb-0">Copyright 2022 &copy; All rights reserved.</p>
        </div>
    </div>


</div>
<!-- // END Header Layout -->








</div>
        `;
    },
};
export default HomeScreen;