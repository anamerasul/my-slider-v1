const images=[
        "./images/pizza1.jpg",
        "./images/pizza2.jpg",
        "./images/pizza3.jpg",
        "./images/pizza4.jpg"

]

let imageIndex=0;

const imgElement=document.getElementById('slider-img')
setInterval(()=>{
        const imageUrl=images[imageIndex]
        if(imageIndex>=images.length){
                imageIndex=0;
        }
       
const imgElement=document.getElementById('slider-img')
        imgElement.setAttribute('src',imageUrl)
        if(!imageUrl){
                // console.log('f')
                imgElement.setAttribute('src',images[0])
        }
        imageIndex++
},1000)