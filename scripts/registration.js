function checkAuth(){
    if(getAuthToken()){
        window.location.href = "./index.html";
    }
}

function registerSubmit(event){
    event.preventDefault();
    const data = getFormData(event.target);
    console.log(data);
    

    registration(data)
}