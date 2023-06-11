function show( id ){
    let modal = document.getElementById('modal');
    let img_id = document.getElementById(id).src;
    let modal_img = document.getElementById("modal-img").src = img_id;
    
    
    modal.classList.add('modal-open');
    modal.style.display  = "block";
    modal.classList.remove('modal-close');
    console.log("modal === " ,modal);
    
    
    
}

function onClosedImagModal(){
    let modal = document.getElementById('modal');
    setTimeout(()=>{ modal.style.display = "none"; }, 500);
}