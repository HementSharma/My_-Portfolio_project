/**
 * Created by hementsharma on 09/12/16.
 */
window.onload = function () {
    document.querySelector(".menu").addEventListener("click", function(){
        this.classList.toggle( "active" );
        document.querySelector(".header-contact ul").classList.toggle( "list-active" );
    });
}