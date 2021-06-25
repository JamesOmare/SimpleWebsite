$(document).ready(function() {
    
    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
        
    });

    $(window).on('load scroll', function() {
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle')
    })

})

const panels = document.querySelectorAll('.panel')

panels.forEach((panel) => {
    panel.addEventListener('click', ()=> {
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses() {
    panels.forEach((panel) => {
        panel.classList.remove('active')
    })
}

