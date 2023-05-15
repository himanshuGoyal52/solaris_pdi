export const Rating = {
    render : (props) => {
        if(!props.value){
            return '<div></div>';
        }
        return `
        <div >
        <div class="rating rating-24">
            <div class="rating__item"><i style="font-size:1.5rem;" class = "${props.value >= 1? 'bx bxs-star' : props.value >= 0.5 ? 'bx bxs-star-half':'bx bx-star' }"></i></div>
            <div class="rating__item"><i style="font-size:1.5rem;"  class = "${props.value >= 2? 'bx bxs-star' : props.value >= 1.5 ? 'bx bxs-star-half':'bx bx-star' }"></i></div>
            <div class="rating__item"><i style="font-size:1.5rem;"  class = "${props.value >= 3? 'bx bxs-star' : props.value >= 2.5 ? 'bx bxs-star-half':'bx bx-star' }"></i></div>
            <div class="rating__item"><i style="font-size:1.5rem;"  class = "${props.value >= 4? 'bx bxs-star' : props.value >= 3.5 ? 'bx bxs-star-half':'bx bx-star' }" ></i></div>
            <div class="rating__item"><i style="font-size:1.5rem;"  class = "${props.value >= 5? 'bx bxs-star' : props.value >= 4.5 ? 'bx bxs-star-half':'bx bx-star' }" ></i></div>
        </div>
        <p class="lh-1 mb-0"><small class="text-muted">${props.text || ''}</small></p>

            
        </div>
        `
            
    },
};

export const RatingS = {
    render : (props) => {
        if(!props.value){
            return '<div></div>';
        }
        return `
        <div style="display:flex;" >
        

            <span class="rating__item"><i class = "${props.value >= 1? 'bx bxs-star' : props.value >= 0.5 ? 'bx bxs-star-half':'bx bx-star' }"></i></span>
            <span class="rating__item"><i class = "${props.value >= 2? 'bx bxs-star' : props.value >= 1.5 ? 'bx bxs-star-half':'bx bx-star' }"></i></span>
            <span class="rating__item"><i class = "${props.value >= 3? 'bx bxs-star' : props.value >= 2.5 ? 'bx bxs-star-half':'bx bx-star' }"></i></span>
            <span class="rating__item"><i class = "${props.value >= 4? 'bx bxs-star' : props.value >= 3.5 ? 'bx bxs-star-half':'bx bx-star' }"></i></span>
            <span class="rating__item"><i class = "${props.value >= 5? 'bx bxs-star' : props.value >= 4.5 ? 'bx bxs-star-half':'bx bx-star' }" ></i></span>
        
            
        </div>
        `
    },
};