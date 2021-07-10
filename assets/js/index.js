$(document).ready(function (){
    $("class nav-link").click(function(event) {
        event.preventDefault();
        
        var gato = this.hash;

        $("html").animate(
            { 
                scrollTop: $(gato).offset().top - 90,
            },
            800
        );
    });
});