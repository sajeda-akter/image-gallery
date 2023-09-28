document.querySelectorAll('.image-container  img').forEach(image=>{
image.onclick=()=>{
    document.querySelector('.modal').style.display='block';
    document.querySelector('.modal img').src=image.getAttribute('src')

}

})
document.getElementById('close').addEventListener('click',function(){
    document.querySelector('.modal').style.display='none'
})


