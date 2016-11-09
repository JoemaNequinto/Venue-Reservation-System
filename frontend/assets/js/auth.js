$(document).ready(function(){
    if(!localStorage.user){
        localStorage.clear();
        window.location.href = '/';
    }
});
