let slides = document.querySelectorAll(".slide");
//console.log(slides);

let counter = 0;

slides.forEach(
    (slide,index)=>{
        slide.style.left = `${index * 100}%`;
    }
)

let prev=() =>{
    if (counter == 0) {
        counter = slides.length - 1;
        changeImage();
    } else {
        counter--;
        changeImage();
    }
    //counter--;
    //changeImage();
}

let next=() =>{
    if (counter == slides.length - 1) {
        counter = 0;
        changeImage();
    } else {
        counter++;
        changeImage();
    }
    //counter++;
    //changeImage();
}

let changeImage = () => {
    slides.forEach(
        (slide) => {
            slide.style.transform = `translateX(-${counter * 100}%)`
        }
    )
}