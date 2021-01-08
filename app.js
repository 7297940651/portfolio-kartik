$(document).ready(function(){
    $('.slider').slick({
        arrows:false,
        dots:true,
        appendDots:'.slider-dots',
        dotsClass:'dots'
    });

    let hamberger = document.querySelector('.hamberger');
    let times=document.querySelector('.times');
    let mobileNav= document.querySelector('.mobile-nav')
    let cv= document.querySelector('.cv')
    let c= document.querySelector('.c')
    let mail=document.querySelector('.mail')

    hamberger.addEventListener('click',function(){
        mobileNav.classList.add('open');

    });
    times.addEventListener('click',function(){
        mobileNav.classList.remove('open');
    });
    cv.addEventListener('click',function(){
        window.open('https://drive.google.com/file/d/1eWbUN9_mTkB1CuKLOHasbJNTg601Z2gc/view?usp=sharing');
    });
    c.addEventListener('click',function(){
        window.open('https://drive.google.com/file/d/1eWbUN9_mTkB1CuKLOHasbJNTg601Z2gc/view?usp=sharing');
    });
    mail.addEventListener('click',function(){
        window.open('https://mail.google.com/mail/agarwalkartik100@gmail.com')
    })
    
})