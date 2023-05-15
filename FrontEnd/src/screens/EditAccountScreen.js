import { clearUser, getUserInfo } from "../localStorage.js";

const EditAccount = {
    after_render : () => {
        if(getUserInfo().name){

            document.getElementById('signout-button')
            .addEventListener('click',()=>{
                clearUser();
                document.location.hash ='/login'
            })
        }
    },
    render : async () => {
        let {name , email , isAdmin } = getUserInfo();
        let firstName = name.split(" ")[0];
        let lastName = name.split(" ")[1];

        return `
        <body class="layout-sticky-subnav layout-default ">

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
                    <a href="" class="dropdown-item">Development</a>
                    <a href="" class="dropdown-item">Business</a>
                    <a href="" class="dropdown-item">Finance & Accounting</a>
                    <a href="" class="dropdown-item"><span class="mr-16pt">IT & Software</span> <span class="badge badge-notifications badge-accent text-uppercase ml-auto">New</span></a>
                    <a href="" class="dropdown-item">Office Productivity</a>
                    <a href="" class="dropdown-item">UI/UX</a>
                    <a href="" class="dropdown-item">Design</a>
                    <a href="" class="dropdown-item">Marketing</a>
                    <a href="" class="dropdown-item">Music</a>
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



            <div class="pt-32pt">
                <div class="container page__container d-flex flex-column flex-md-row align-items-center text-center text-sm-left">
                    <div class="flex d-flex flex-column flex-sm-row align-items-center">

                        <div class="mb-24pt mb-sm-0 mr-sm-24pt">
                            <h2 class="mb-0"style="display:inline;">Account ${isAdmin ? `<h2 style="display:inline;">(Instructor)</h2>` : `<h2 style="display:inline;">(Student)</h2>`}</h2>

                            <ol class="breadcrumb p-0 m-0">
                                <li class="breadcrumb-item"><a href="index.html">Home</a></li>

                                <li class="breadcrumb-item">

                                    <a href="">Account</a>

                                </li>

                                <li class="breadcrumb-item active">

                                    Edit Account

                                </li>

                            </ol>

                        </div>
                    </div>


                </div>
            </div>













            <div class="container page__container page-section">
                <div class="page-separator">
                    <div class="page-separator__text">Basic Information</div>
                </div>
                <div class="col-md-6 p-0">
                    <form>
                        <div class="form-group">
                            <label class="form-label">First name</label>
                            <input type="text" class="form-control" value="${firstName}" placeholder="Your first name ...">
                        </div>
                        <div class="form-group">
                            <label class="form-label">Last name</label>
                            <input type="text" class="form-control" value="${lastName}" placeholder="Your last name ...">
                        </div>
                        <div class="form-group">
                            <label class="form-label">Email address</label>
                            <input type="email" class="form-control" value="${email}" placeholder="Your email address ...">
                            <small class="form-text text-muted">Note that if you change your email, you will have to confirm it again.</small>
                        </div>
                        <button class="btn btn-primary">Save changes</button>
                    </form>
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

export default EditAccount;