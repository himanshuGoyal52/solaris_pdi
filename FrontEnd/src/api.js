import { apiUrl } from "./config.js";

export const register = async({name , email, password}) =>{
    const _data = {
        "name" : name,
        "email" : email,
        "password" : password
    }
    
    try{
        const response = await fetch(apiUrl+"/api/user/register",{
            method : 'POST',
            mode: 'cors',
            body: JSON.stringify(_data),
            headers :{
                "Content-Type": "application/json",
            },
        });
        if(!response || !response.ok){
            throw new Error(response.json());
            // return await response.json();
        }
        return response.json();
        
    }catch(err){
      
        return {error : err.message};
    }
        
};
/* ===================================================================================== */
export const signin = async({email, password}) =>{
    const _data = {
        "email" : email,
        "password" : password
    }
    
    try{
        const response = await fetch(apiUrl+"/api/user/signin",{
            method : 'POST',
            mode: 'cors',
            body: JSON.stringify(_data),
            headers :{
                "Content-Type": "application/json",
                
            },
        });
        if(!response || !response.ok){
            throw new Error(response.json());
        }
        return await response.json();
        
    }catch(err){
        
        return {error : err.message};
    }
        
};
/* ===================================================================================== */
export const getCourses = async (type) => {
    let data = { "type" : type };
    try{
        const response = await fetch(apiUrl +'/api/course',{
            method : 'post',
            body : JSON.stringify(data),
            headers : {
                'Content-Type': 'application/json',
            }
        }); 
        
        if(response.statusText !== 'OK'){
            return await response.json();
        }
        return await response.json();
    } catch(err){
        return {error : err.message};
    }
}; 
/* ===================================================================================== */
export const getCourse = async (id) => {
    try{
        const response = await fetch(apiUrl +'/api/course/'+ id,{
            method : 'GET',
            headers : {
                'Content-Type': 'application/json',
            }
        }); 

        if(response.statusText !== 'OK'){
            return await response.json();
        }
        return await response.json();
    } catch(err){
        
        return {error : err.message};
    }
}; 
/*=================================================================================================*/
export const enroll = async (type , userID , courseID) => {
    let _data = {
        "type" : type,
        "user" : userID,
    }
    try{
        const response = await fetch(apiUrl +'/api/course/'+ courseID + '/enroll',{
            method : 'POST',
            headers : {
                'Content-Type': 'application/json',
            },
            body : JSON.stringify(_data)
        }); 
        
        if(response.statusText !== 'OK'){
            return await response.json();
        }
        return await response.json();
    } catch(err){
        
        return {error : err.message};
    }
}
/*=================================================================================================*/
export const getEnrolledCourses = async (_id) => {
    let _data = {'user' : _id}
    try{
        const response = await fetch(apiUrl +'/api/course/usercourses',{
            method : 'POST',
            headers : {
                'Content-Type': 'application/json',
            },
            body : JSON.stringify(_data)
        }); 
        
        if(response.statusText !== 'OK'){
            return await response.json();
        }
        return await response.json();
    } catch(err){
        
        return {error : err.message};
    }
}
/*================================================================================*/
export const getLesson = async (id) => {
    try{
        const response = await fetch(apiUrl +'/api/lesson/'+ id,{
            method : 'GET',
            headers : {
                'Content-Type': 'application/json',
            }
        }); 

        if(response.statusText !== 'OK'){
            return await response.json();
        }
        return await response.json();
    } catch(err){
        
        return {error : err.message};
    }
}; 
/*================================================================================*/
export const submitReview = async({user , comment , star , id}) =>{
    const _data = {
        "user" : user,
        "comment" : comment,
        "star" : star,
    }
    
    try{
        const response = await fetch(apiUrl+"/api/course/"+ id + "/rating",{
            method : 'POST',
            mode: 'cors',
            body: JSON.stringify(_data),
            headers :{
                "Content-Type": "application/json",
            },
        });
        if(!response || !response.ok){
            throw new Error(response.json());
            // return await response.json();
        }
        return response.json();
        
    }catch(err){
        
        return {error : err.message};
    }
    
};
/*================================================================================*/
export const razorpay = async(id) =>{
    try{
        const response = await fetch(apiUrl+"/api/course/razorpay",{
            method : 'POST',
            body : JSON.stringify({"id":id}),
            headers :{
                "Content-Type": "application/json", 
            },
        });
        if(!response || !response.ok){
            // throw new Error(response.json());
            return await response.json();
        }
        return await response.json();
        
    }catch(err){
       
        return {error : err.message};
    }
}
export  const verify_payment = async ({course_id, user_id ,razorpay_payment_id,razorpay_order_id,razorpay_signature}) =>{
    const _data = {
        "course_id" : course_id,
        "user_id" : user_id,
        "razorpay_payment_id" : razorpay_payment_id,
        "razorpay_order_id" : razorpay_order_id,
        "razorpay_signature"  : razorpay_signature,
    }
    try{
        const response = await fetch(apiUrl + '/api/course/'+course_id+'/verify',{
            method:'POST',
            headers :{
                "Content-Type": "application/json",
            },
            body : JSON.stringify(_data),
        });
        if(!response || !response.ok){
            throw new Error(response.json());
            // return await response.json();
        }
        return await response.json();
    }catch(err){
        return {error : err.message};
    }
};
/*================================================================================*/
export const RegisterInstructor = async({name , email, password}) =>{
    const _data = {
        "name" : name,
        "email" : email,
        "password" : password
    }
    
    try{
        const response = await fetch(apiUrl+"/api/user/register_instructor",{
            method : 'POST',
            mode: 'cors',
            body: JSON.stringify(_data),
            headers :{
                "Content-Type": "application/json",
            },
        });
        if(!response || !response.ok){
            throw new Error(response.json());
            // return await response.json();
        }
        return response.json();
        
    }catch(err){
        
        return {error : err.message};
    }
    
};
/*================================================================================*/
export const createCourse = async(emaill) =>{
    const _data = {
        instructorEmail : emaill,
    };

    try{
        const response = await fetch(apiUrl+"/api/course/create",{
            method : 'POST',
            body: JSON.stringify(_data),
            headers :{
                "Content-Type": "application/json",
            },
        });
        if(!response || !response.ok){
            throw new Error(response.json());
        }
        return await response.json();
        
    }catch(err){
        return {error : err.message};
    }      
};
/*================================================================================*/
export const deleteCourse = async(courseId) =>{
    try{
        const response = await fetch(apiUrl+"/api/course/"+courseId + '/delete',{
            method : 'DELETE',
            headers :{
                "Content-Type": "application/json",
            },
        });
        if(!response || !response.ok){
            throw new Error(response.json());
        }
        return await response.json();
        
    }catch(err){
        return {error : err.message};
    }      
};