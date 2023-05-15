// import e from "cors";
import { deleteCourse } from "../api.js";
import { getUserInfo } from "../localStorage.js";
import { parseRequestUrl, rerender } from "../utils.js";

let content = [
    
];
const EditCourses = {
    after_render : () => {
        if(document.getElementById("addsection")){

            document.getElementById("addsection").addEventListener("click" , () => {
                const section = new Object();    
                section.title = "Section-"+String(content.length+1);
                section.subpart = [{
                    title : "Double click here to edit",
                    length : "8m 42s(edit)",
                    id : "null",
                }];
                content.push(section);
                rerender(EditCourses);
            })
        }
            
        /* adding for subtitle-0 */
        if(document.getElementById("sub_title_0_0")){
            document.getElementById("sub_title_0_0").addEventListener('click',()=>{
                document.getElementById("sub_title_0_0").contentEditable = true;
            })
            document.getElementById("sub_title_0_0").addEventListener("blur",()=>{
                document.getElementById("sub_title_0_0").contentEditable = false;
                content[0].subpart[0].title = document.getElementById("sub_title_0_0").innerText;
            })
        }
        /*********************/
        if(document.getElementById("sub_title_0_1")){
            document.getElementById("sub_title_0_1").addEventListener('click',()=>{
                document.getElementById("sub_title_0_1").contentEditable = true;
            })
            document.getElementById("sub_title_0_1").addEventListener("blur",()=>{
                document.getElementById("sub_title_0_1").contentEditable = false;
                content[0].subpart[1].title = document.getElementById("sub_title_0_1").innerText;
            })
        }
        /*********************/
        if(document.getElementById("sub_title_0_2")){
            document.getElementById("sub_title_0_2").addEventListener('click',()=>{
                document.getElementById("sub_title_0_2").contentEditable = true;
            })
            document.getElementById("sub_title_0_2").addEventListener("blur",()=>{
                document.getElementById("sub_title_0_2").contentEditable = false;
                content[0].subpart[2].title = document.getElementById("sub_title_0_2").innerText;
            })
        }
        /*********************/
        if(document.getElementById("sub_title_0_3")){
            document.getElementById("sub_title_0_3").addEventListener('click',()=>{
                document.getElementById("sub_title_0_3").contentEditable = true;
            })
            document.getElementById("sub_title_0_3").addEventListener("blur",()=>{
                document.getElementById("sub_title_0_3").contentEditable = false;
                content[0].subpart[3].title = document.getElementById("sub_title_0_3").innerText;
            })
        }
        /*********************/
        if(document.getElementById("sub_title_0_4")){
            document.getElementById("sub_title_0_4").addEventListener('click',()=>{
                document.getElementById("sub_title_0_4").contentEditable = true;
            })
            document.getElementById("sub_title_0_4").addEventListener("blur",()=>{
                document.getElementById("sub_title_0_4").contentEditable = false;
                content[0].subpart[4].title = document.getElementById("sub_title_0_4").innerText;
            })
        }
        /*********************/

        /* adding for subtitle-1 */
        if(document.getElementById("sub_title_1_0")){
            document.getElementById("sub_title_1_0").addEventListener('click',()=>{
                document.getElementById("sub_title_1_0").contentEditable = true;
            })
            document.getElementById("sub_title_1_0").addEventListener("blur",()=>{
                document.getElementById("sub_title_1_0").contentEditable = false;
                content[1].subpart[0].title = document.getElementById("sub_title_1_0").innerText;
            })
        }
        /*********************/
        if(document.getElementById("sub_title_1_1")){
            document.getElementById("sub_title_1_1").addEventListener('click',()=>{
                document.getElementById("sub_title_1_1").contentEditable = true;
            })
            document.getElementById("sub_title_1_1").addEventListener("blur",()=>{
                document.getElementById("sub_title_1_1").contentEditable = false;
                content[1].subpart[1].title = document.getElementById("sub_title_1_1").innerText;
            })
        }
        /*********************/
        if(document.getElementById("sub_title_1_2")){
            document.getElementById("sub_title_1_2").addEventListener('click',()=>{
                document.getElementById("sub_title_1_2").contentEditable = true;
            })
            document.getElementById("sub_title_1_2").addEventListener("blur",()=>{
                document.getElementById("sub_title_1_2").contentEditable = false;
                content[1].subpart[2].title = document.getElementById("sub_title_1_2").innerText;
            })
        }
        /*********************/
        if(document.getElementById("sub_title_1_3")){
            document.getElementById("sub_title_1_3").addEventListener('click',()=>{
                document.getElementById("sub_title_1_3").contentEditable = true;
            })
            document.getElementById("sub_title_1_3").addEventListener("blur",()=>{
                document.getElementById("sub_title_1_3").contentEditable = false;
                content[1].subpart[3].title = document.getElementById("sub_title_1_3").innerText;
            })
        }
        /*********************/
        if(document.getElementById("sub_title_1_4")){
            document.getElementById("sub_title_1_4").addEventListener('click',()=>{
                document.getElementById("sub_title_1_4").contentEditable = true;
            })
            document.getElementById("sub_title_1_4").addEventListener("blur",()=>{
                document.getElementById("sub_title_1_4").contentEditable = false;
                content[1].subpart[4].title = document.getElementById("sub_title_1_4").innerText;
            })
        }
        /*********************/

        /* adding for subtitle-2 */
        if(document.getElementById("sub_title_2_0")){
            document.getElementById("sub_title_2_0").addEventListener('click',()=>{
                document.getElementById("sub_title_2_0").contentEditable = true;
            })
            document.getElementById("sub_title_2_0").addEventListener("blur",()=>{
                document.getElementById("sub_title_2_0").contentEditable = false;
                content[2].subpart[0].title = document.getElementById("sub_title_2_0").innerText;
            })
        }
        /*********************/
        if(document.getElementById("sub_title_2_1")){
            document.getElementById("sub_title_2_1").addEventListener('click',()=>{
                document.getElementById("sub_title_2_1").contentEditable = true;
            })
            document.getElementById("sub_title_2_1").addEventListener("blur",()=>{
                document.getElementById("sub_title_2_1").contentEditable = false;
                content[2].subpart[1].title = document.getElementById("sub_title_2_1").innerText;
            })
        }
        /*********************/
        if(document.getElementById("sub_title_2_2")){
            document.getElementById("sub_title_2_2").addEventListener('click',()=>{
                document.getElementById("sub_title_2_2").contentEditable = true;
            })
            document.getElementById("sub_title_2_2").addEventListener("blur",()=>{
                document.getElementById("sub_title_2_2").contentEditable = false;
                content[2].subpart[2].title = document.getElementById("sub_title_2_2").innerText;
            })
        }
        /*********************/
        if(document.getElementById("sub_title_2_3")){
            document.getElementById("sub_title_2_3").addEventListener('click',()=>{
                document.getElementById("sub_title_2_3").contentEditable = true;
            })
            document.getElementById("sub_title_2_3").addEventListener("blur",()=>{
                document.getElementById("sub_title_2_3").contentEditable = false;
                content[2].subpart[3].title = document.getElementById("sub_title_2_3").innerText;
            })
        }
        /*********************/
        if(document.getElementById("sub_title_2_4")){
            document.getElementById("sub_title_2_4").addEventListener('click',()=>{
                document.getElementById("sub_title_2_4").contentEditable = true;
            })
            document.getElementById("sub_title_2_4").addEventListener("blur",()=>{
                document.getElementById("sub_title_2_4").contentEditable = false;
                content[2].subpart[4].title = document.getElementById("sub_title_2_4").innerText;
            })
        }
        /********************/
        

        /* adding for subtitle-3 */
        if(document.getElementById("sub_title_3_0")){
            document.getElementById("sub_title_3_0").addEventListener('click',()=>{
                document.getElementById("sub_title_3_0").contentEditable = true;
            })
            document.getElementById("sub_title_3_0").addEventListener("blur",()=>{
                document.getElementById("sub_title_3_0").contentEditable = false;
                content[3].subpart[0].title = document.getElementById("sub_title_3_0").innerText;
            })
        }
        /*********************/
        if(document.getElementById("sub_title_3_1")){
            document.getElementById("sub_title_3_1").addEventListener('click',()=>{
                document.getElementById("sub_title_3_1").contentEditable = true;
            })
            document.getElementById("sub_title_3_1").addEventListener("blur",()=>{
                document.getElementById("sub_title_3_1").contentEditable = false;
                content[3].subpart[1].title = document.getElementById("sub_title_3_1").innerText;
            })
        }
        /*********************/
        if(document.getElementById("sub_title_3_2")){
            document.getElementById("sub_title_3_2").addEventListener('click',()=>{
                document.getElementById("sub_title_3_2").contentEditable = true;
            })
            document.getElementById("sub_title_3_2").addEventListener("blur",()=>{
                document.getElementById("sub_title_3_2").contentEditable = false;
                content[3].subpart[2].title = document.getElementById("sub_title_3_2").innerText;
            })
        }
        /*********************/
        if(document.getElementById("sub_title_3_3")){
            document.getElementById("sub_title_3_3").addEventListener('click',()=>{
                document.getElementById("sub_title_3_3").contentEditable = true;
            })
            document.getElementById("sub_title_3_3").addEventListener("blur",()=>{
                document.getElementById("sub_title_3_3").contentEditable = false;
                content[3].subpart[3].title = document.getElementById("sub_title_3_3").innerText;
            })
        }
        /*********************/
        if(document.getElementById("sub_title_3_4")){
            document.getElementById("sub_title_3_4").addEventListener('click',()=>{
                document.getElementById("sub_title_3_4").contentEditable = true;
            })
            document.getElementById("sub_title_3_4").addEventListener("blur",()=>{
                document.getElementById("sub_title_3_4").contentEditable = false;
                content[3].subpart[4].title = document.getElementById("sub_title_3_4").innerText;
            })
        }
        /********************/

        /* adding for subtitle-2 */
        if(document.getElementById("sub_title_4_0")){
            document.getElementById("sub_title_4_0").addEventListener('click',()=>{
                document.getElementById("sub_title_4_0").contentEditable = true;
            })
            document.getElementById("sub_title_4_0").addEventListener("blur",()=>{
                document.getElementById("sub_title_4_0").contentEditable = false;
                content[4].subpart[0].title = document.getElementById("sub_title_4_0").innerText;
            })
        }
        /*********************/
        if(document.getElementById("sub_title_4_1")){
            document.getElementById("sub_title_4_1").addEventListener('click',()=>{
                document.getElementById("sub_title_4_1").contentEditable = true;
            })
            document.getElementById("sub_title_4_1").addEventListener("blur",()=>{
                document.getElementById("sub_title_4_1").contentEditable = false;
                content[4].subpart[1].title = document.getElementById("sub_title_4_1").innerText;
            })
        }
        /*********************/
        if(document.getElementById("sub_title_4_2")){
            document.getElementById("sub_title_4_2").addEventListener('click',()=>{
                document.getElementById("sub_title_4_2").contentEditable = true;
            })
            document.getElementById("sub_title_4_2").addEventListener("blur",()=>{
                document.getElementById("sub_title_4_2").contentEditable = false;
                content[4].subpart[2].title = document.getElementById("sub_title_4_2").innerText;
            })
        }
        /*********************/
        if(document.getElementById("sub_title_4_3")){
            document.getElementById("sub_title_4_3").addEventListener('click',()=>{
                document.getElementById("sub_title_4_3").contentEditable = true;
            })
            document.getElementById("sub_title_4_3").addEventListener("blur",()=>{
                document.getElementById("sub_title_4_3").contentEditable = false;
                content[4].subpart[3].title = document.getElementById("sub_title_4_3").innerText;
            })
        }
        /*********************/
        if(document.getElementById("sub_title_4_4")){
            document.getElementById("sub_title_4_4").addEventListener('click',()=>{
                document.getElementById("sub_title_4_4").contentEditable = true;
            })
            document.getElementById("sub_title_4_4").addEventListener("blur",()=>{
                document.getElementById("sub_title_4_4").contentEditable = false;
                content[4].subpart[4].title = document.getElementById("sub_title_4_4").innerText;
            })
        }
        /********************/

      
        /*------------ adding the sub part --------------*/
        if(document.getElementById('add_sub_0')){
                document.getElementById("add_sub_0").addEventListener('click' , () => {
                let objj = new Object();
                objj.title = "Double click here to edit";
                objj.length = "8m 42s(edit)";
                content[0].subpart.push(objj);
                rerender(EditCourses);
            })
        }
        /********************/
        if(document.getElementById('add_sub_1')){
                document.getElementById("add_sub_1").addEventListener('click' , () => {
                let objj = new Object();
                objj.title = "Double click here to edit";
                objj.length = "8m 42s(edit)";
                content[1].subpart.push(objj);
                rerender(EditCourses);
            })
        }
        /********************/
        if(document.getElementById('add_sub_2')){
                document.getElementById("add_sub_2").addEventListener('click' , () => {
                let objj = new Object();
                objj.title = "Double click here to edit";
                objj.length = "8m 42s(edit)";
                content[2].subpart.push(objj);
                rerender(EditCourses);
            })
        }
        /********************/
        if(document.getElementById('add_sub_3')){
                document.getElementById("add_sub_3").addEventListener('click' , () => {
                let objj = new Object();
                objj.title = "Double click here to edit";
                objj.length = "8m 42s(edit)";
                content[3].subpart.push(objj);
                rerender(EditCourses);
            })
        }
        /********************/
        if(document.getElementById('add_sub_4')){
                document.getElementById("add_sub_4").addEventListener('click' , () => {
                let objj = new Object();
                objj.title = "Double click here to edit";
                objj.length = "8m 42s(edit)";
                content[4].subpart.push(objj);
                rerender(EditCourses);
                // console.log(content);
            })
        }
        /********************/

        const deleteButtons = document.getElementsByClassName('delete-button');
        Array.from(deleteButtons).forEach((deleteButtons)=>{
            deleteButtons.addEventListener('click' , async()=>{
                if(confirm('Are you sure to delete')){
                    showLoading();
                    const data = await deleteProduct(deleteButtons.id);
                    if(data.error){
                        showMessage('Not deleted');
                    }else{
                        rerender(ProductlistScree);
                    }
                    hideLoading();
                }
            })
        })


        /****************************************************************************/
        const deleteButton = document.getElementById('delete-button');
        deleteButton.addEventListener('click' , async()=>{
                const data = await deleteCourse(parseRequestUrl().id);
                if(data.error){
                    alert('not deleted');
                }else{
                    document.location.hash= `/instructordashboard`;
                }
        })
       
    },
    render : () => {
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
    
    
    
                <div class="pt-32pt">
                    <div class="container page__container d-flex flex-column flex-md-row align-items-center text-center text-sm-left">
                        <div class="flex d-flex flex-column flex-sm-row align-items-center">
    
                            <div class="mb-24pt mb-sm-0 mr-sm-24pt">
                                <h2 class="mb-0">Edit Course</h2>
    
                                <ol class="breadcrumb p-0 m-0">
                                    <li class="breadcrumb-item"><a href="index.html">Home</a></li>
    
                                    <li class="breadcrumb-item active">
    
                                        Edit Course
    
                                    </li>
    
                                </ol>
    
                            </div>
                        </div>
    
    
                    </div>
                </div>
    
                <div class="page-section border-bottom-2">
                    <div class="container page__container">
    
                        <div class="row">
                            <div class="col-md-8">
    
                                <div class="page-separator">
                                    <div class="page-separator__text">Basic information</div>
                                </div>
    
                                <label class="form-label">Course title</label>
                                <div class="form-group mb-24pt">
                                    <input type="text" class="form-control form-control-lg" placeholder="Course title" value="Angular Fundamentals">
                                </div>
    
                                <div class="form-group mb-32pt">
                                    <label class="form-label">Description</label>
                                    <textarea class="form-control" rows="3" placeholder="Course description"></textarea> 
                                    
                                    <small class="form-text text-muted">Shortly describe this course.</small>
                                </div>
    
                                <div class="page-separator">
                                    <div class="page-separator__text">Sections</div>
                                </div>
    

                                <div class="accordion js-accordion accordion--boxed mb-24pt" id="parent">
                                    ${
                                        content.map((ele , index) => {
                                            return `
                                            <div style="display:flex; align-item:center; flex-direction:column;">
                                                <div class="accordion__item"  >
                                                    <a href="#" class="accordion__toggle collapsed" data-toggle="collapse" data-target="#course-toc-${index}" data-parent="#parent">
                                                        <span id="title_${index}" class="flex">${ele.title}</span>
                                                    </a>
                                                    <div class="accordion__menu collapse" id="course-toc-${index}">
                                                        ${ele.subpart.map((ele , i) => {
                                                            return `
                                                            <div class="accordion__menu-link" >
                                                                <span id="sub_title_${index}_${i}" class="flex" >${ele.title}</span>
                                                                <input type="file" accept=".mp4,.mkv,.mov"/>
                                                                <span id="sub_len_${index}_${i}" class="text-muted">${ele.length}</span>
                                                            </div>
                                                            `
                                                        }).join('\n')
                                                    }
                                                        
                                                    </div>
                                                </div>
                                                ${content[index].subpart.length > 4 ? `` : `<i id="add_sub_${index}" style="text-align:center; margin-bottom:0.5rem;" class='bx bx-plus-circle'></i>`}
                                                
                                            </div>
                                            `
                                        }).join('\n')
                                    }
                                    
                                </div>
                                    ${content.length > 4 ? `` : `<button class="btn btn-outline-secondary mb-24pt mb-sm-0" id="addsection">Add Section</button>` }
                                
    
                            </div>
                            <div class="col-md-4">
    
                                <div class="card">
                                    <div class="card-header text-center">
                                        <a href="#" class="btn btn-accent">Save changes</a>
                                    </div>
                                    <div class="list-group list-group-flush">
                                        <div class="list-group-item d-flex">
                                            <a class="flex" href="#"><strong>Save Draft</strong></a>
                                            <i class="material-icons text-muted">check</i>
                                        </div>
                                        <div class="list-group-item">
                                            <button id="delete-button" class="text-danger"><strong>Delete Course</strong></button>
                                        </div>
                                    </div>
                                </div>
    
                                <div class="page-separator">
                                    <div class="page-separator__text">Thumbnail</div>
                                </div>

                                <div class="card">
                                    
                                    <div class="card-body">
                                        <label class="form-label">size : 200x168 px</label>
                                        <input type="file" class="form-control" accept=".jpg , .png , .jpeg"  placeholder="Enter Video URL">
                                        <small class="form-text text-muted">Enter a valid video URL.</small>
                                    </div>
                                </div>
                                
    
                                <div class="page-separator">
                                    <div class="page-separator__text">Options</div>
                                </div>
    
                                <div class="card">
                                    <div class="card-body">
                                        <div class="form-group">
                                            <label class="form-label">Category</label>
                                            <select name="category" class="form-control custom-select">
                                                <option value="vuejs">development</option>
                                                <option value="vuejs">dsa</option>
                                                <option value="vuejs">uiux</option>
                                                <option value="vuejs">design</option>
                                                <option value="vuejs">videoediting</option>
                                                <option value="vuejs">finance</option>
                                                <option value="vuejs">it</option>
                                                <option value="vuejs">markiteing</option>
                                                <option value="vuejs">music</option>
                                                <option value="vuejs">office</option>
                                            </select>
                                            <small class="form-text text-muted">Select a category.</small>
                                        </div>
                                        <div class="form-group">
                                            <label class="form-label">Price</label>
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <div class="input-group form-inline">
                                                        <span class="input-group-prepend"><span class="input-group-text">₹</span></span>
                                                        <input type="text" class="form-control" value="1000" disabled>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                        </div>
                                        <div class="form-group mb-0">
                                            <label class="form-label" for="select03">Tags</label>
                                            <select id="select03" data-toggle="select" multiple class="form-control">
                                                <option >Advance</option>
                                                <option selected="">intermediate</option>
                                                <option >beginner</option>
                                                
                                            </select>
                                            <small class="form-text text-muted">Select one tag.</small>
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
                        <img class="brand-icon" src="assets/images/logo/black-70@2x.png" width="30" alt="Luma"> Luma
                    </p>
                    <p class="measure-lead-max text-50 small mr-8pt">Luma is a beautifully crafted user interface for modern Education Platforms, including Courses & Tutorials, Video Lessons, Student and Teacher Dashboard, Curriculum Management, Earnings and Reporting, ERP, HR, CMS, Tasks, Projects, eCommerce and more.</p>
                    <p class="mb-8pt d-flex">
                        <a href="" class="text-70 text-underline mr-8pt small">Terms</a>
                        <a href="" class="text-70 text-underline small">Privacy policy</a>
                    </p>
                    <p class="text-50 small mt-n1 mb-0">Copyright 2019 &copy; All rights reserved.</p>
                </div>
            </div>
    
    
        </div>
        <!-- // END Header Layout -->
    
    
    
    
        <!-- drawer -->
        <div class="mdk-drawer js-mdk-drawer" id="default-drawer">
            <div class="mdk-drawer__content">
                <div class="sidebar sidebar-dark-dodger-blue sidebar-left" data-perfect-scrollbar>
    
    
    
    
                    <a href="fixed-index.html" class="sidebar-brand ">
                        <!-- <img class="sidebar-brand-icon" src="assets/images/illustration/teacher/128/white.svg" alt="Luma"> -->
    
                        <span class="avatar avatar-xl sidebar-brand-icon h-auto">
    
                            <span class="avatar-title rounded bg-primary"><img src="assets/images/illustration/teacher/128/white.svg" class="img-fluid" alt="logo" /></span>
    
                        </span>
    
                        <span>Luma</span>
                    </a>
    
    
    
    
    
                    <div class="sidebar-heading">Instructor</div>
                    <ul class="sidebar-menu">
    
    
                        <li class="sidebar-menu-item">
                            <a class="sidebar-menu-button" href="fixed-instructor-dashboard.html">
                                <span class="material-icons sidebar-menu-icon sidebar-menu-icon--left">school</span>
                                <span class="sidebar-menu-text">Instructor Dashboard</span>
                            </a>
                        </li>
                        <li class="sidebar-menu-item">
                            <a class="sidebar-menu-button" href="fixed-instructor-courses.html">
                                <span class="material-icons sidebar-menu-icon sidebar-menu-icon--left">import_contacts</span>
                                <span class="sidebar-menu-text">Manage Courses</span>
                            </a>
                        </li>
                        <li class="sidebar-menu-item">
                            <a class="sidebar-menu-button" href="fixed-instructor-quizzes.html">
                                <span class="material-icons sidebar-menu-icon sidebar-menu-icon--left">help</span>
                                <span class="sidebar-menu-text">Manage Quizzes</span>
                            </a>
                        </li>
                        <li class="sidebar-menu-item">
                            <a class="sidebar-menu-button" href="fixed-instructor-earnings.html">
                                <span class="material-icons sidebar-menu-icon sidebar-menu-icon--left">trending_up</span>
                                <span class="sidebar-menu-text">Earnings</span>
                            </a>
                        </li>
                        <li class="sidebar-menu-item">
                            <a class="sidebar-menu-button" href="fixed-instructor-statement.html">
                                <span class="material-icons sidebar-menu-icon sidebar-menu-icon--left">receipt</span>
                                <span class="sidebar-menu-text">Statement</span>
                            </a>
                        </li>
                        <li class="sidebar-menu-item active">
                            <a class="sidebar-menu-button" href="fixed-instructor-edit-course.html">
                                <span class="material-icons sidebar-menu-icon sidebar-menu-icon--left">post_add</span>
                                <span class="sidebar-menu-text">Edit Course</span>
                            </a>
                        </li>
                        <li class="sidebar-menu-item">
                            <a class="sidebar-menu-button" href="fixed-instructor-edit-quiz.html">
                                <span class="material-icons sidebar-menu-icon sidebar-menu-icon--left">format_shapes</span>
                                <span class="sidebar-menu-text">Edit Quiz</span>
                            </a>
                        </li>
    
                    </ul>
                    <div class="sidebar-heading">Student</div>
                    <ul class="sidebar-menu">
    
    
                        <li class="sidebar-menu-item">
                            <a class="sidebar-menu-button" href="fixed-index.html">
                                <span class="material-icons sidebar-menu-icon sidebar-menu-icon--left">home</span>
                                <span class="sidebar-menu-text">Home</span>
                            </a>
                        </li>
                        <li class="sidebar-menu-item">
                            <a class="sidebar-menu-button" href="fixed-courses.html">
                                <span class="material-icons sidebar-menu-icon sidebar-menu-icon--left">local_library</span>
                                <span class="sidebar-menu-text">Browse Courses</span>
                            </a>
                        </li>
                        <li class="sidebar-menu-item">
                            <a class="sidebar-menu-button" href="fixed-paths.html">
                                <span class="material-icons sidebar-menu-icon sidebar-menu-icon--left">style</span>
                                <span class="sidebar-menu-text">Browse Paths</span>
                            </a>
                        </li>
                        <li class="sidebar-menu-item">
                            <a class="sidebar-menu-button" href="fixed-student-dashboard.html">
                                <span class="material-icons sidebar-menu-icon sidebar-menu-icon--left">account_box</span>
                                <span class="sidebar-menu-text">Student Dashboard</span>
                            </a>
                        </li>
                        <li class="sidebar-menu-item">
                            <a class="sidebar-menu-button" href="fixed-student-my-courses.html">
                                <span class="material-icons sidebar-menu-icon sidebar-menu-icon--left">search</span>
                                <span class="sidebar-menu-text">My Courses</span>
                            </a>
                        </li>
                        <li class="sidebar-menu-item">
                            <a class="sidebar-menu-button" href="fixed-student-paths.html">
                                <span class="material-icons sidebar-menu-icon sidebar-menu-icon--left">timeline</span>
                                <span class="sidebar-menu-text">My Paths</span>
                            </a>
                        </li>
                        <li class="sidebar-menu-item">
                            <a class="sidebar-menu-button" href="fixed-student-path.html">
                                <span class="material-icons sidebar-menu-icon sidebar-menu-icon--left">change_history</span>
                                <span class="sidebar-menu-text">Path Details</span>
                            </a>
                        </li>
                        <li class="sidebar-menu-item">
                            <a class="sidebar-menu-button" href="fixed-student-course.html">
                                <span class="material-icons sidebar-menu-icon sidebar-menu-icon--left">face</span>
                                <span class="sidebar-menu-text">Course Preview</span>
                            </a>
                        </li>
                        <li class="sidebar-menu-item">
                            <a class="sidebar-menu-button" href="fixed-student-lesson.html">
                                <span class="material-icons sidebar-menu-icon sidebar-menu-icon--left">panorama_fish_eye</span>
                                <span class="sidebar-menu-text">Lesson Preview</span>
                            </a>
                        </li>
                        <li class="sidebar-menu-item">
                            <a class="sidebar-menu-button" href="fixed-student-take-course.html">
                                <span class="material-icons sidebar-menu-icon sidebar-menu-icon--left">class</span>
                                <span class="sidebar-menu-text">Take Course</span>
                                <span class="sidebar-menu-badge badge badge-accent badge-notifications ml-auto">PRO</span>
                            </a>
                        </li>
                        <li class="sidebar-menu-item">
                            <a class="sidebar-menu-button" href="fixed-student-take-lesson.html">
                                <span class="material-icons sidebar-menu-icon sidebar-menu-icon--left">import_contacts</span>
                                <span class="sidebar-menu-text">Take Lesson</span>
                            </a>
                        </li>
                        <li class="sidebar-menu-item">
                            <a class="sidebar-menu-button" href="fixed-student-take-quiz.html">
                                <span class="material-icons sidebar-menu-icon sidebar-menu-icon--left">dvr</span>
                                <span class="sidebar-menu-text">Take Quiz</span>
                            </a>
                        </li>
                        <li class="sidebar-menu-item">
                            <a class="sidebar-menu-button" href="fixed-student-quiz-results.html">
                                <span class="material-icons sidebar-menu-icon sidebar-menu-icon--left">poll</span>
                                <span class="sidebar-menu-text">My Quizzes</span>
                            </a>
                        </li>
                        <li class="sidebar-menu-item">
                            <a class="sidebar-menu-button" href="fixed-student-quiz-result-details.html">
                                <span class="material-icons sidebar-menu-icon sidebar-menu-icon--left">live_help</span>
                                <span class="sidebar-menu-text">Quiz Result</span>
                            </a>
                        </li>
                        <li class="sidebar-menu-item">
                            <a class="sidebar-menu-button" href="fixed-student-path-assessment.html">
                                <span class="material-icons sidebar-menu-icon sidebar-menu-icon--left">layers</span>
                                <span class="sidebar-menu-text">Skill Assessment</span>
                            </a>
                        </li>
                        <li class="sidebar-menu-item">
                            <a class="sidebar-menu-button" href="fixed-student-path-assessment-result.html">
                                <span class="material-icons sidebar-menu-icon sidebar-menu-icon--left">assignment_turned_in</span>
                                <span class="sidebar-menu-text">Skill Result</span>
                            </a>
                        </li>
    
                    </ul>
    
    
                    <div class="sidebar-heading">Applications</div>
                    <ul class="sidebar-menu">
    
    
    
                        <li class="sidebar-menu-item">
                            <a class="sidebar-menu-button js-sidebar-collapse" data-toggle="collapse" href="#enterprise_menu">
                                <span class="material-icons sidebar-menu-icon sidebar-menu-icon--left">donut_large</span>
                                Enterprise
                                <span class="ml-auto sidebar-menu-toggle-icon"></span>
                            </a>
                            <ul class="sidebar-submenu collapse sm-indent" id="enterprise_menu">
                                <li class="sidebar-menu-item">
                                    <a class="sidebar-menu-button" href="fixed-erp-dashboard.html">
                                        <span class="sidebar-menu-text">ERP Dashboard</span>
                                    </a>
                                </li>
                                <li class="sidebar-menu-item">
                                    <a class="sidebar-menu-button" href="fixed-crm-dashboard.html">
                                        <span class="sidebar-menu-text">CRM Dashboard</span>
                                    </a>
                                </li>
                                <li class="sidebar-menu-item">
                                    <a class="sidebar-menu-button" href="fixed-hr-dashboard.html">
                                        <span class="sidebar-menu-text">HR Dashboard</span>
                                    </a>
                                </li>
                                <li class="sidebar-menu-item">
                                    <a class="sidebar-menu-button" href="fixed-employees.html">
                                        <span class="sidebar-menu-text">Employees</span>
                                    </a>
                                </li>
                                <li class="sidebar-menu-item">
                                    <a class="sidebar-menu-button" href="fixed-staff.html">
                                        <span class="sidebar-menu-text">Staff</span>
                                    </a>
                                </li>
                                <li class="sidebar-menu-item">
                                    <a class="sidebar-menu-button" href="fixed-leaves.html">
                                        <span class="sidebar-menu-text">Leaves</span>
                                    </a>
                                </li>
                                <li class="sidebar-menu-item">
                                    <a class="sidebar-menu-button disabled" href="fixed-departments.html">
                                        <span class="sidebar-menu-text">Departments</span>
                                    </a>
                                </li>
                                <!-- <li class="sidebar-menu-item">
      <a class="sidebar-menu-button disabled" href="fixed-documents.html">
        <span class="sidebar-menu-text">Documents</span>
      </a>
    </li>
    <li class="sidebar-menu-item">
      <a class="sidebar-menu-button disabled" href="fixed-attendance.html">
        <span class="sidebar-menu-text">Attendance</span>
      </a>
    </li>
    <li class="sidebar-menu-item">
      <a class="sidebar-menu-button disabled" href="fixed-recruitment.html">
        <span class="sidebar-menu-text">Recruitment</span>
      </a>
    </li>
    <li class="sidebar-menu-item">
      <a class="sidebar-menu-button disabled" href="fixed-payroll.html">
        <span class="sidebar-menu-text">Payroll</span>
      </a>
    </li>
    <li class="sidebar-menu-item">
      <a class="sidebar-menu-button disabled" href="fixed-training.html">
        <span class="sidebar-menu-text">Training</span>
      </a>
    </li>
    <li class="sidebar-menu-item">
      <a class="sidebar-menu-button disabled" href="fixed-employee-profile.html">
        <span class="sidebar-menu-text">Employee Profile</span>
      </a>
    </li>
    <li class="sidebar-menu-item">
      <a class="sidebar-menu-button disabled" href="fixed-accounting.html">
        <span class="sidebar-menu-text">Accounting</span>
      </a>
    </li>
    <li class="sidebar-menu-item">
      <a class="sidebar-menu-button disabled" href="fixed-inventory.html">
        <span class="sidebar-menu-text">Inventory</span>
      </a>
    </li> -->
                            </ul>
                        </li>
                        <li class="sidebar-menu-item">
                            <a class="sidebar-menu-button" data-toggle="collapse" href="#productivity_menu">
                                <span class="material-icons sidebar-menu-icon sidebar-menu-icon--left">access_time</span>
                                Productivity
                                <span class="ml-auto sidebar-menu-toggle-icon"></span>
                            </a>
                            <ul class="sidebar-submenu collapse sm-indent" id="productivity_menu">
                                <li class="sidebar-menu-item">
                                    <a class="sidebar-menu-button" href="fixed-projects.html">
                                        <span class="sidebar-menu-text">Projects</span>
                                    </a>
                                </li>
                                <li class="sidebar-menu-item">
                                    <a class="sidebar-menu-button" href="fixed-tasks-board.html">
                                        <span class="sidebar-menu-text">Tasks Board</span>
                                    </a>
                                </li>
                                <li class="sidebar-menu-item">
                                    <a class="sidebar-menu-button" href="fixed-tasks-list.html">
                                        <span class="sidebar-menu-text">Tasks List</span>
                                    </a>
                                </li>
                                <li class="sidebar-menu-item">
                                    <a class="sidebar-menu-button disabled" href="fixed-kanban.html">
                                        <span class="sidebar-menu-text">Kanban</span>
                                    </a>
                                </li>
                                <!-- <li class="sidebar-menu-item">
      <a class="sidebar-menu-button disabled" href="fixed-task-details.html">
        <span class="sidebar-menu-text">Task Details</span>
      </a>
    </li>
    <li class="sidebar-menu-item">
      <a class="sidebar-menu-button disabled" href="fixed-team-members.html">
        <span class="sidebar-menu-text">Team Members</span>
      </a>
    </li> -->
                            </ul>
                        </li>
                        <li class="sidebar-menu-item">
                            <a class="sidebar-menu-button" data-toggle="collapse" href="#ecommerce_menu">
                                <span class="material-icons sidebar-menu-icon sidebar-menu-icon--left">shopping_cart</span>
                                eCommerce
                                <span class="ml-auto sidebar-menu-toggle-icon"></span>
                            </a>
                            <ul class="sidebar-submenu collapse sm-indent" id="ecommerce_menu">
                                <li class="sidebar-menu-item">
                                    <a class="sidebar-menu-button" href="fixed-ecommerce.html">
                                        <span class="sidebar-menu-text">Shop Dashboard</span>
                                    </a>
                                </li>
                                <li class="sidebar-menu-item">
                                    <a class="sidebar-menu-button disabled" href="fixed-edit-product.html">
                                        <span class="sidebar-menu-text">Edit Product</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li class="sidebar-menu-item">
                            <a class="sidebar-menu-button" data-toggle="collapse" href="#messaging_menu">
                                <span class="material-icons sidebar-menu-icon sidebar-menu-icon--left">message</span>
                                Messaging
                                <span class="sidebar-menu-badge badge badge-accent badge-notifications ml-auto">2</span>
                                <span class="sidebar-menu-toggle-icon"></span>
                            </a>
                            <ul class="sidebar-submenu collapse sm-indent" id="messaging_menu">
                                <li class="sidebar-menu-item">
                                    <a class="sidebar-menu-button" href="fixed-messages.html">
                                        <span class="sidebar-menu-text">Messages</span>
                                    </a>
                                </li>
                                <li class="sidebar-menu-item">
                                    <a class="sidebar-menu-button" href="fixed-email.html">
                                        <span class="sidebar-menu-text">Email</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li class="sidebar-menu-item">
                            <a class="sidebar-menu-button" data-toggle="collapse" href="#cms_menu">
                                <span class="material-icons sidebar-menu-icon sidebar-menu-icon--left">content_copy</span>
                                CMS
                                <span class="ml-auto sidebar-menu-toggle-icon"></span>
                            </a>
                            <ul class="sidebar-submenu collapse sm-indent" id="cms_menu">
                                <li class="sidebar-menu-item">
                                    <a class="sidebar-menu-button" href="fixed-cms-dashboard.html">
                                        <span class="sidebar-menu-text">CMS Dashboard</span>
                                    </a>
                                </li>
                                <li class="sidebar-menu-item">
                                    <a class="sidebar-menu-button" href="fixed-posts.html">
                                        <span class="sidebar-menu-text">Posts</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li class="sidebar-menu-item">
                            <a class="sidebar-menu-button" data-toggle="collapse" href="#account_menu">
                                <span class="material-icons sidebar-menu-icon sidebar-menu-icon--left">account_box</span>
                                Account
                                <span class="ml-auto sidebar-menu-toggle-icon"></span>
                            </a>
                            <ul class="sidebar-submenu collapse sm-indent" id="account_menu">
                                <li class="sidebar-menu-item">
                                    <a class="sidebar-menu-button" href="fixed-pricing.html">
                                        <span class="sidebar-menu-text">Pricing</span>
                                    </a>
                                </li>
                                <li class="sidebar-menu-item">
                                    <a class="sidebar-menu-button" href="fixed-login.html">
                                        <span class="sidebar-menu-text">Login</span>
                                    </a>
                                </li>
                                <li class="sidebar-menu-item">
                                    <a class="sidebar-menu-button" href="fixed-signup.html">
                                        <span class="sidebar-menu-text">Signup</span>
                                    </a>
                                </li>
                                <li class="sidebar-menu-item">
                                    <a class="sidebar-menu-button" href="fixed-signup-payment.html">
                                        <span class="sidebar-menu-text">Payment</span>
                                    </a>
                                </li>
                                <li class="sidebar-menu-item">
                                    <a class="sidebar-menu-button" href="fixed-reset-password.html">
                                        <span class="sidebar-menu-text">Reset Password</span>
                                    </a>
                                </li>
                                <li class="sidebar-menu-item">
                                    <a class="sidebar-menu-button" href="fixed-change-password.html">
                                        <span class="sidebar-menu-text">Change Password</span>
                                    </a>
                                </li>
                                <li class="sidebar-menu-item">
                                    <a class="sidebar-menu-button" href="fixed-edit-account.html">
                                        <span class="sidebar-menu-text">Edit Account</span>
                                    </a>
                                </li>
                                <li class="sidebar-menu-item">
                                    <a class="sidebar-menu-button" href="fixed-edit-account-profile.html">
                                        <span class="sidebar-menu-text">Profile &amp; Privacy</span>
                                    </a>
                                </li>
                                <li class="sidebar-menu-item">
                                    <a class="sidebar-menu-button" href="fixed-edit-account-notifications.html">
                                        <span class="sidebar-menu-text">Email Notifications</span>
                                    </a>
                                </li>
                                <li class="sidebar-menu-item">
                                    <a class="sidebar-menu-button" href="fixed-edit-account-password.html">
                                        <span class="sidebar-menu-text">Account Password</span>
                                    </a>
                                </li>
                                <li class="sidebar-menu-item">
                                    <a class="sidebar-menu-button" href="fixed-billing.html">
                                        <span class="sidebar-menu-text">Subscription</span>
                                    </a>
                                </li>
                                <li class="sidebar-menu-item">
                                    <a class="sidebar-menu-button" href="fixed-billing-upgrade.html">
                                        <span class="sidebar-menu-text">Upgrade Account</span>
                                    </a>
                                </li>
                                <li class="sidebar-menu-item">
                                    <a class="sidebar-menu-button" href="fixed-billing-payment.html">
                                        <span class="sidebar-menu-text">Payment Information</span>
                                    </a>
                                </li>
                                <li class="sidebar-menu-item">
                                    <a class="sidebar-menu-button" href="fixed-billing-history.html">
                                        <span class="sidebar-menu-text">Payment History</span>
                                    </a>
                                </li>
                                <li class="sidebar-menu-item">
                                    <a class="sidebar-menu-button" href="fixed-billing-invoice.html">
                                        <span class="sidebar-menu-text">Invoice</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
    
    
                        <li class="sidebar-menu-item">
                            <a class="sidebar-menu-button" data-toggle="collapse" href="#community_menu">
                                <span class="material-icons sidebar-menu-icon sidebar-menu-icon--left">people_outline</span>
                                Community
                                <span class="ml-auto sidebar-menu-toggle-icon"></span>
                            </a>
                            <ul class="sidebar-submenu collapse sm-indent" id="community_menu">
                                <li class="sidebar-menu-item">
                                    <a class="sidebar-menu-button" href="fixed-teachers.html">
    
                                        <span class="sidebar-menu-text">Browse Teachers</span>
                                    </a>
                                </li>
                                <li class="sidebar-menu-item">
                                    <a class="sidebar-menu-button" href="fixed-student-profile.html">
    
                                        <span class="sidebar-menu-text">Student Profile</span>
                                    </a>
                                </li>
                                <li class="sidebar-menu-item">
                                    <a class="sidebar-menu-button" href="fixed-teacher-profile.html">
    
                                        <span class="sidebar-menu-text">Teacher Profile</span>
                                    </a>
                                </li>
                                <li class="sidebar-menu-item">
                                    <a class="sidebar-menu-button" href="fixed-blog.html">
    
                                        <span class="sidebar-menu-text">Blog</span>
                                    </a>
                                </li>
                                <li class="sidebar-menu-item">
                                    <a class="sidebar-menu-button" href="fixed-blog-post.html">
    
                                        <span class="sidebar-menu-text">Blog Post</span>
                                    </a>
                                </li>
                                <li class="sidebar-menu-item">
                                    <a class="sidebar-menu-button" href="fixed-faq.html">
                                        <span class="sidebar-menu-text">FAQ</span>
                                    </a>
                                </li>
                                <li class="sidebar-menu-item">
                                    <a class="sidebar-menu-button" href="fixed-help-center.html">
                                        <!--  -->
                                        <span class="sidebar-menu-text">Help Center</span>
                                    </a>
                                </li>
                                <li class="sidebar-menu-item">
                                    <a class="sidebar-menu-button" href="fixed-discussions.html">
                                        <span class="sidebar-menu-text">Discussions</span>
                                    </a>
                                </li>
                                <li class="sidebar-menu-item">
                                    <a class="sidebar-menu-button" href="fixed-discussion.html">
                                        <span class="sidebar-menu-text">Discussion Details</span>
                                    </a>
                                </li>
                                <li class="sidebar-menu-item">
                                    <a class="sidebar-menu-button" href="fixed-discussions-ask.html">
                                        <span class="sidebar-menu-text">Ask Question</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
    
    
                    <div class="sidebar-heading">UI</div>
                    <ul class="sidebar-menu">
                        <li class="sidebar-menu-item">
                            <a class="sidebar-menu-button" data-toggle="collapse" href="#components_menu">
                                <span class="material-icons sidebar-menu-icon sidebar-menu-icon--left">tune</span>
                                Components
                                <span class="ml-auto sidebar-menu-toggle-icon"></span>
                            </a>
                            <ul class="sidebar-submenu collapse sm-indent" id="components_menu">
                                <li class="sidebar-menu-item">
                                    <a class="sidebar-menu-button" href="fixed-ui-buttons.html">
                                        <span class="sidebar-menu-text">Buttons</span>
                                    </a>
                                </li>
                                <li class="sidebar-menu-item">
                                    <a class="sidebar-menu-button" href="fixed-ui-avatars.html">
                                        <span class="sidebar-menu-text">Avatars</span>
                                    </a>
                                </li>
                                <li class="sidebar-menu-item">
                                    <a class="sidebar-menu-button" href="fixed-ui-forms.html">
                                        <span class="sidebar-menu-text">Forms</span>
                                    </a>
                                </li>
                                <li class="sidebar-menu-item">
                                    <a class="sidebar-menu-button" href="fixed-ui-loaders.html">
                                        <span class="sidebar-menu-text">Loaders</span>
                                    </a>
                                </li>
                                <li class="sidebar-menu-item">
                                    <a class="sidebar-menu-button" href="fixed-ui-tables.html">
                                        <span class="sidebar-menu-text">Tables</span>
                                    </a>
                                </li>
                                <li class="sidebar-menu-item">
                                    <a class="sidebar-menu-button" href="fixed-ui-cards.html">
                                        <span class="sidebar-menu-text">Cards</span>
                                    </a>
                                </li>
                                <li class="sidebar-menu-item">
                                    <a class="sidebar-menu-button" href="fixed-ui-icons.html">
                                        <span class="sidebar-menu-text">Icons</span>
                                    </a>
                                </li>
                                <li class="sidebar-menu-item">
                                    <a class="sidebar-menu-button" href="fixed-ui-tabs.html">
                                        <span class="sidebar-menu-text">Tabs</span>
                                    </a>
                                </li>
                                <li class="sidebar-menu-item">
                                    <a class="sidebar-menu-button" href="fixed-ui-alerts.html">
                                        <span class="sidebar-menu-text">Alerts</span>
                                    </a>
                                </li>
                                <li class="sidebar-menu-item">
                                    <a class="sidebar-menu-button" href="fixed-ui-badges.html">
                                        <span class="sidebar-menu-text">Badges</span>
                                    </a>
                                </li>
                                <li class="sidebar-menu-item">
                                    <a class="sidebar-menu-button" href="fixed-ui-progress.html">
                                        <span class="sidebar-menu-text">Progress</span>
                                    </a>
                                </li>
                                <li class="sidebar-menu-item">
                                    <a class="sidebar-menu-button" href="fixed-ui-pagination.html">
                                        <span class="sidebar-menu-text">Pagination</span>
                                    </a>
                                </li>
                                <!-- <li class="sidebar-menu-item">
      <a class="sidebar-menu-button disabled" href="fixed-ui-typography.html">
        <span class="sidebar-menu-text">Typography</span>
      </a>
    </li>
    <li class="sidebar-menu-item">
      <a class="sidebar-menu-button disabled" href="fixed-ui-colors.html">
        <span class="sidebar-menu-text">Colors</span>
      </a>
    </li>
    <li class="sidebar-menu-item">
      <a class="sidebar-menu-button disabled" href="fixed-ui-breadcrumb.html">
        <span class="sidebar-menu-text">Breadcrumb</span>
      </a>
    </li>
    <li class="sidebar-menu-item">
      <a class="sidebar-menu-button disabled" href="fixed-ui-accordions.html">
        <span class="sidebar-menu-text">Accordions</span>
      </a>
    </li>
    <li class="sidebar-menu-item">
      <a class="sidebar-menu-button disabled" href="fixed-ui-modals.html">
        <span class="sidebar-menu-text">Modals</span>
      </a>
    </li>
    <li class="sidebar-menu-item">
      <a class="sidebar-menu-button disabled" href="fixed-ui-chips.html">
        <span class="sidebar-menu-text">Chips</span>
      </a>
    </li> -->
                                <li class="sidebar-menu-item">
                                    <a class="sidebar-menu-button disabled" href="">
                                        <span class="sidebar-menu-text">Disabled</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li class="sidebar-menu-item">
                            <a class="sidebar-menu-button" data-toggle="collapse" href="#plugins_menu">
                                <span class="material-icons sidebar-menu-icon sidebar-menu-icon--left">folder</span>
                                Plugins
                                <span class="ml-auto sidebar-menu-toggle-icon"></span>
                            </a>
                            <ul class="sidebar-submenu collapse sm-indent" id="plugins_menu">
                                <li class="sidebar-menu-item">
                                    <a class="sidebar-menu-button" href="fixed-ui-plugin-charts.html">
                                        <span class="sidebar-menu-text">Charts</span>
                                    </a>
                                </li>
                                <li class="sidebar-menu-item">
                                    <a class="sidebar-menu-button" href="fixed-ui-plugin-flatpickr.html">
                                        <span class="sidebar-menu-text">Flatpickr</span>
                                    </a>
                                </li>
                                <li class="sidebar-menu-item">
                                    <a class="sidebar-menu-button" href="fixed-ui-plugin-daterangepicker.html">
                                        <span class="sidebar-menu-text">Date Range Picker</span>
                                    </a>
                                </li>
                                <li class="sidebar-menu-item">
                                    <a class="sidebar-menu-button" href="fixed-ui-plugin-dragula.html">
                                        <span class="sidebar-menu-text">Dragula</span>
                                    </a>
                                </li>
                                <li class="sidebar-menu-item">
                                    <a class="sidebar-menu-button" href="fixed-ui-plugin-dropzone.html">
                                        <span class="sidebar-menu-text">Dropzone</span>
                                    </a>
                                </li>
                                <li class="sidebar-menu-item">
                                    <a class="sidebar-menu-button" href="fixed-ui-plugin-range-sliders.html">
                                        <span class="sidebar-menu-text">Range Sliders</span>
                                    </a>
                                </li>
                                <li class="sidebar-menu-item">
                                    <a class="sidebar-menu-button" href="fixed-ui-plugin-quill.html">
                                        <span class="sidebar-menu-text">Quill</span>
                                    </a>
                                </li>
                                <li class="sidebar-menu-item">
                                    <a class="sidebar-menu-button" href="fixed-ui-plugin-select2.html">
                                        <span class="sidebar-menu-text">Select2</span>
                                    </a>
                                </li>
                                <li class="sidebar-menu-item">
                                    <a class="sidebar-menu-button" href="fixed-ui-plugin-nestable.html">
                                        <span class="sidebar-menu-text">Nestable</span>
                                    </a>
                                </li>
                                <li class="sidebar-menu-item">
                                    <a class="sidebar-menu-button" href="fixed-ui-plugin-fancytree.html">
                                        <span class="sidebar-menu-text">Fancy Tree</span>
                                    </a>
                                </li>
                                <li class="sidebar-menu-item">
                                    <a class="sidebar-menu-button" href="fixed-ui-plugin-maps-vector.html">
                                        <span class="sidebar-menu-text">Vector Maps</span>
                                    </a>
                                </li>
                                <li class="sidebar-menu-item">
                                    <a class="sidebar-menu-button" href="fixed-ui-plugin-sweet-alert.html">
                                        <span class="sidebar-menu-text">Sweet Alert</span>
                                    </a>
                                </li>
                                <li class="sidebar-menu-item">
                                    <a class="sidebar-menu-button" href="fixed-ui-plugin-toastr.html">
                                        <span class="sidebar-menu-text">Toastr</span>
                                    </a>
                                </li>
                                <li class="sidebar-menu-item">
                                    <a class="sidebar-menu-button disabled" href="">
                                        <span class="sidebar-menu-text">Disabled</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li class="sidebar-menu-item">
                            <a class="sidebar-menu-button" data-toggle="collapse" href="#layouts_menu">
                                <span class="material-icons sidebar-menu-icon sidebar-menu-icon--left">view_compact</span>
                                Layouts
                                <span class="ml-auto sidebar-menu-toggle-icon"></span>
                            </a>
                            <ul class="sidebar-submenu collapse sm-indent" id="layouts_menu">
                                <li class="sidebar-menu-item">
                                    <a class="sidebar-menu-button" href="compact-instructor-edit-course.html">
                                        <span class="sidebar-menu-text">Compact</span>
                                    </a>
                                </li>
                                <li class="sidebar-menu-item">
                                    <a class="sidebar-menu-button" href="mini-instructor-edit-course.html">
                                        <span class="sidebar-menu-text">Mini</span>
                                    </a>
                                </li>
                                <li class="sidebar-menu-item">
                                    <a class="sidebar-menu-button" href="mini-secondary-instructor-edit-course.html">
                                        <span class="sidebar-menu-text">Mini + Secondary</span>
                                    </a>
                                </li>
                                <li class="sidebar-menu-item">
                                    <a class="sidebar-menu-button" href="instructor-edit-course.html">
                                        <span class="sidebar-menu-text">App</span>
                                    </a>
                                </li>
                                <li class="sidebar-menu-item">
                                    <a class="sidebar-menu-button" href="boxed-instructor-edit-course.html">
                                        <span class="sidebar-menu-text">Boxed</span>
                                    </a>
                                </li>
                                <li class="sidebar-menu-item">
                                    <a class="sidebar-menu-button" href="sticky-instructor-edit-course.html">
                                        <span class="sidebar-menu-text">Sticky</span>
                                    </a>
                                </li>
                                <li class="sidebar-menu-item active">
                                    <a class="sidebar-menu-button" href="fixed-instructor-edit-course.html">
                                        <span class="sidebar-menu-text">Fixed</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
    
    
                </div>
            </div>
        </div>
        <!-- // END drawer -->
    
    
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
    
    
        <!-- Quill -->
        <script src="assets/vendor/quill.min.js"></script>
        <script src="assets/js/quill.js"></script>
        <!-- Select2 -->
        <script src="assets/vendor/select2/select2.min.js"></script>
        <script src="assets/js/select2.js"></script>
    
    </div>      
        `;
    },
};

export default EditCourses;