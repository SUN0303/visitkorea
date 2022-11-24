$(function(){
    $(".list").slick({
        slidesToShow:5, //보여주는 갯수
        slidesToScroll:1, //움직이는 갯수
        autoplay:true,
        autoplaySpeed:1800,
        responsive:[
            {
                breakpoint:767,
                settings:{
                    slidesToShow:3,
                    slidesToScroll:1
                }
            },
            {
                breakpoint:480,
                settings:{
                    slidesToShow:2,
                    slidesToScroll:1
                }
            }
        ]
        
    })
})