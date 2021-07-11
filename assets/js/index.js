$(document).ready(function (){
    // Add smooth scrolling to all links
    $("a").click(function(event) {
        event.preventDefault();
        
        var gato = this.hash;

        $("html").animate(
            { 
                scrollTop: $(gato).offset().top - 86,
            },
            500
        );
    });
});