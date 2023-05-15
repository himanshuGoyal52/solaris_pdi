export const setCourse = (course)=>{
    sessionStorage.setItem('courseID',
    JSON.stringify({course})
    );
};

export const getCourse = () => {
    return sessionStorage.getItem('courseID') ?
    JSON.parse(sessionStorage.getItem('courseID'))
    : null
}

export const redirectUserS = () => {
    if(getCourse()){
        document.location.hash = `/course/${getCourse().course}`;
    }else{
        document.location.hash = '/';
    }
}