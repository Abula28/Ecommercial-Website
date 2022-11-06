const allStar = document.querySelectorAll('.star')
let rate = document.querySelector('.rate')
const allStar2 = document.querySelectorAll('.star2')
let rate2 = document.querySelector('.rate2')

allStar.forEach((star, i)=>{
    star.onclick = function(){
        let starLevel = i +1;
        rate.innerHTML = `${starLevel} rating`

        allStar.forEach( (star, j)=>{
            if(starLevel >= j+1){
                star.innerHTML = "&#9733"
            }else{
                star.innerHTML = "&#9734"
            }
        })
    }
    
})

allStar2.forEach((star, i)=>{
    star.onclick = function(){
        let starLevel2 = i +1;
        rate2.innerHTML = `${starLevel2} rating`

        allStar2.forEach( (star, j)=>{
            if(starLevel2 >= j+1){
                star.innerHTML = "&#9733"
            }else{
                star.innerHTML = "&#9734"
            }
        })
    }
    
})