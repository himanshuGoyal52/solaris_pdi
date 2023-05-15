import { enroll, getCourse, razorpay, verify_payment } from "../api.js";
import { clearUser, getUserInfo } from "../localStorage.js";
import { parseRequestUrl } from "../utils.js";

// 5267 3181 8797 5449

const payWithRazorpay = async (id) =>{
    const info = await razorpay(id);
    var options = {
        "key": "rzp_test_dCqxUSf1SlHCBe",
        "name": "Solaris",
        "amount": info.amount, 
        "currency": "INR",
        "description": "Transaction",
        "image": "https://drive.google.com/file/d/102IJGaNrWhgqkTjpqRlB2JaRv4aqVesh/view?usp=sharing",
        "order_id": info.id, 
        "theme": {
            "color": "#5365f9"
        },
        "handler": function  (response){
            // alert(response.razorpay_payment_id);
            // alert(response.razorpay_order_id);
            // alert(response.razorpay_signature);
            const data =   verify_payment({
                course_id : id,
                user_id : getUserInfo()._id,
                razorpay_payment_id :response.razorpay_payment_id ,
                razorpay_order_id : response.razorpay_order_id ,
                razorpay_signature : response.razorpay_signature,
            });
            if(data.error){
                alert("Payment Unsuccessful");
            }else{
                alert('Payment Successful (reload!!!)');
                location.hash = `/course/${parseRequestUrl().id}`
            }
        },
    };
    var rzp1 = new Razorpay(options);
    document.getElementById('rzp-button1').onclick = function(e){
    rzp1.open();
    e.preventDefault();
}
}


const EnrollScreen = {
    after_render : () => {
        let {_id,name} = getUserInfo();
        let courseID = parseRequestUrl().id;
        document.getElementById('free')
        .addEventListener('click' , async () => {
            await enroll('free' , _id , courseID  );
            location.hash = `/course/${courseID}`;
        })
        
        // document.getElementById("rzp-button1")
        // .addEventListener('click' , async () => {
        //     await enroll('paid' , _id , courseID );
        //     location.hash = `/course/${courseID}`;
        // })

        if(name){
            document.getElementById('signout-button')
            .addEventListener('click',()=>{
                clearUser();
                document.location.hash ='/login'
            })
        }

    },
    render : async () => {
        let {name , isAdmin} = getUserInfo();

        payWithRazorpay(parseRequestUrl().id);
        
        let course = await getCourse(parseRequestUrl().id);

        return `
                
<div class="layout-sticky-subnav layout-default ">

<div class="preloader">
    <div class="sk-double-bounce">
        <div class="sk-child sk-double-bounce1"></div>
        <div class="sk-child sk-double-bounce2"></div>
    </div>
</div>

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















        <div class="page-section bg-primary">
            <div class="container page__container">
                
                <div style="justify-content: center;" class="row card-group-row mb-16pt mb-lg-40pt">
                    <div class="col-lg-4 col-sm-6 card-group-row__col">

                        <div class="card card-group-row__card text-center o-hidden card--raised border-0">

                            <span class="corner-ribbon corner-ribbon--default-right-top corner-ribbon--shadow bg-accent text-white">Adds</span>

                            <div class="card-body d-flex flex-column">
                                <div class="flex-grow mb-16pt">
                                    <span class="w-64 h-64 icon-holder icon-holder--outline-accent rounded-circle d-inline-flex mb-16pt">
                                        <i style="font-size:1.5rem;" class='bx bx-rocket'></i>
                                    </span>
                                    <h4 class="mb-8pt">FREE</h4>
                                    <p class="text-70 mb-0">Access full course without paying anything but contains adds</p>
                                </div>
                                <p class="d-flex justify-content-center align-items-center m-0">
                                    <span class="h4 m-0 font-weight-normal">₹</span>
                                    <span class="h1 m-0 font-weight-normal">0</span>
                                    <span class="h4 m-0 font-weight-normal">/ Course</span>
                                </p>
                                <p class="lh-1 text-muted mb-0"><small>After course completion you will get ₹50</small></p>
                            </div>
                            <div class="card-footer">
                                <button id="free" class="btn btn-accent">Get started</button>
                            </div>
                        </div>

                    </div>
                    <div class="col-lg-4 col-sm-6 card-group-row__col">

                        <div class="card card-group-row__card text-center o-hidden border-0">

                            <div class="card-body d-flex flex-column">
                                <div class="flex-grow mb-16pt">
                                    <span class="w-64 h-64 icon-holder icon-holder--outline-secondary rounded-circle d-inline-flex mb-16pt">
                                        <i style="font-size:1.4rem;" class='bx bxs-hot' ></i>
                                    </span>
                                    <h4 class="mb-8pt">PAID</h4>
                                    <p class="text-70 mb-0">Access full course without adds and paying a base amount which will be return after course complition</p>
                                </div>
                                <p class="d-flex justify-content-center align-items-center m-0">
                                    <span class="h4 m-0 font-weight-normal">₹</span>
                                    <span class="h1 m-0 font-weight-normal">1000</span>
                                    <span class="h4 m-0 font-weight-normal">/ Course</span>
                                </p>
                                <p class="lh-1 text-muted mb-0"><small>After course completion you will get ₹50 + ₹1000</small></p>
                            </div>
                            <div class="card-footer">
                                <button id="rzp-button1" class="btn btn-outline-secondary">Buy Now</button>
                            </div>
                        </div>

                    </div>
                    
                </div>

                <div class="page-headline page-headline--white page-headline--title text-center">
                    <h2 class="text-white">${course.name}</h2>
                </div>

                <div class="col-lg-8 mx-auto">
                    <div class="row">
                        <div class="col-sm-6 mb-24pt mb-sm-0">
                            <ul class="list-unstyled">
                                <li class="d-flex align-items-center mb-8pt">
                                    <i style="font-size:1.4rem;color:white;" class='bx bx-check' ></i>
                                    <span class="text-white-70">24h Access to PRO Courses</span>
                                </li>
                                <li class="d-flex align-items-center mb-8pt">
                                    <i style="font-size:1.4rem;color:white;" class='bx bx-check' ></i>
                                    <span class="text-white-70">Join 2000+ Community Members</span>
                                </li>
                                <li class="d-flex align-items-center mb-8pt">
                                    <i style="font-size:1.4rem;color:white;" class='bx bx-check' ></i>
                                    <span class="text-white-70">Access to New Courses Weekly</span>
                                </li>
                                <li class="d-flex align-items-center mb-8pt">
                                    <i style="font-size:1.4rem;color:white;" class='bx bx-check' ></i>
                                    <span class="text-white-70">Support from our Tutors</span>
                                </li>
                                <li class="d-flex align-items-center">
                                    <i style="font-size:1.4rem;color:white;" class='bx bx-check' ></i>
                                    <span class="text-white-70">Assets Included per Course</span>
                                </li>
                            </ul>
                        </div>
                        <div class="col-sm-6">
                            <ul class="list-unstyled">
                                <li class="d-flex align-items-center mb-8pt">
                                    <i style="font-size:1.4rem;color:white;" class='bx bx-check' ></i>
                                    <span class="text-white-70">24h Access to PRO Courses</span>
                                </li>
                                <li class="d-flex align-items-center mb-8pt">
                                    <i style="font-size:1.4rem;color:white;" class='bx bx-check' ></i>
                                    <span class="text-white-70">Join 2000+ Community Members</span>
                                </li>
                                <li class="d-flex align-items-center mb-8pt">
                                    <i style="font-size:1.4rem;color:white;" class='bx bx-check' ></i>
                                    <span class="text-white-70">Access to New Courses Weekly</span>
                                </li>
                                <li class="d-flex align-items-center mb-8pt">
                                    <i style="font-size:1.4rem;color:white;" class='bx bx-check' ></i>
                                    <span class="text-white-70">Support from our Tutors</span>
                                </li>
                                <li class="d-flex align-items-center">
                                    <i style="font-size:1.4rem;color:white;" class='bx bx-check' ></i>
                                    <span class="text-white-70">Assets Included per Course</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </div>

        


        <div class="border-top-1 page-section">
            <div class="container page__container">
                <div class="page-headline text-center">
                    <h2>FAQ</h2>
                    <p class="lead measure-lead mx-auto text-70">Frequently Asked Questions</p>
                </div>
                <div class="row card-group-row">
                    <div class="col-md-6 card-group-row__col">

                        <div class="card card--elevated card-group-row__card">
                            <div class="card-body d-flex">
                                <span class="icon-holder icon-holder--outline-muted rounded-circle d-inline-flex mr-16pt">
                                    <i style="font-size:1.5rem;" class='bx bx-conversation'></i>
                                </span>
                                <div class="flex">
                                    <p class="card-title mb-8pt" >Do you offer a free trial?</p>
                                    <p class="text-70 mb-0">We offer everyone a 7 day free trial! You can take advantage of it by visiting our sign-up page! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, ab!</p>
                                </div>
                            </div>
                            <div class="card-footer d-flex lh-1 px-16pt py-8pt">
                                <div class="flex text-muted"><small>10 people found this useful</small></div>
                                
                            </div>
                        </div>

                    </div>
                    <div class="col-md-6 card-group-row__col">

                        <div class="card card--elevated card-group-row__card">
                            <div class="card-body d-flex">
                                <span class="icon-holder icon-holder--outline-muted rounded-circle d-inline-flex mr-16pt">
                                    <i style="font-size:1.5rem;" class='bx bx-conversation'></i>
                                </span>
                                <div class="flex">
                                    <p class="card-title mb-8pt" >Can I gift a subscription to someone?</p>
                                    <p class="text-70 mb-0">Yes! We do offer certificates. Please email us for more information. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, ad!</p>
                                </div>
                            </div>
                            <div class="card-footer d-flex lh-1 px-16pt py-8pt">
                                <div class="flex text-muted"><small>23 people found this useful</small></div>
                                
                            </div>
                        </div>

                    </div>
                    <div class="col-md-6 card-group-row__col">

                        <div class="card card--elevated card-group-row__card">
                            <div class="card-body d-flex">
                                <span class="icon-holder icon-holder--outline-muted rounded-circle d-inline-flex mr-16pt">
                                    <i style="font-size:1.5rem;" class='bx bx-conversation'></i>
                                </span>
                                <div class="flex">
                                    <p class="card-title mb-8pt" >I have a great idea for an application or website, but need help on where to begin. Can you guys help me?</a>
                                    <p class="text-70 mb-0">We advise posting personal requests in our Community Forum Lorem ipsum dolor sit amet.</p>
                                </div>
                            </div>
                            <div class="card-footer d-flex lh-1 px-16pt py-8pt">
                                <div class="flex text-muted"><small>11 people found this useful</small></div>
                                
                            </div>
                        </div>

                    </div>
                    <div class="col-md-6 card-group-row__col">

                        <div class="card card--elevated card-group-row__card">
                            <div class="card-body d-flex">
                                <span class="icon-holder icon-holder--outline-muted rounded-circle d-inline-flex mr-16pt">
                                    <i style="font-size:1.5rem;" class='bx bx-conversation'></i>
                                </span>
                                <div class="flex">
                                    <p class="card-title mb-8pt" >I found a bug. Where can I report that?</p>
                                    <p class="text-70 mb-0">In the unlikely situation you stumble across a bug, go ahead and shoot us an email. Lorem ipsum dolor sit amet.</p>
                                </div>
                            </div>
                            <div class="card-footer d-flex lh-1 px-16pt py-8pt">
                                <div class="flex text-muted"><small>7 people found this useful</small></div>
                                
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
                <img class="brand-icon" src="assets/images/logo/black-70@2x.png" width="30" alt="Luma"> Luma
            </p>
            <p class="measure-lead-max text-50 small mr-8pt">Luma is a beautifully crafted user interface for modern Education Platforms, including Courses & Tutorials, Video Lessons, Student and Teacher Dashboard, Curriculum Management, Earnings and Reporting, ERP, HR, CMS, Tasks, Projects, eCommerce and more.</p>
            <p class="mb-8pt p-flex">
                <a  class="text-70 text-underline mr-8pt small">Tprms</a>
                <a  class="text-70 text-underline small">Privacy policy</a>
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

export default EnrollScreen;