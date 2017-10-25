$( document ).ready(function() {
    $('.open').on('click', function(){
    	$('.address1').css('display', 'none');
        $('.address2').css('display', 'block');
        $('.navmenu ul').css('margin-top', '14px');
    });
    $('.close').on('click', function(){
    	$('.address2').css('display', 'none');
        $('.address1').css('display', 'block');
        $('.navmenu ul').css('margin-top', '0px');
    });

    $('.minus').on('click', function(){
        $(this).parent().find('.title_info').toggle();
        if($(this).find('p').text()==='+'){
            $(this).find('p').text('-');
        }else{
            $(this).find('p').text('+');
        }
    });
    $('.banner3 button').hover( function(){
        $('.banner3 button').text('Посмотреть фотосессии студии');
    }, function(){
        $('.banner3 button').text('Записаться на фотосессию');
    });
    $('.submenu_open').hover(function(){
        $('.submenu').css('display', 'block');
        $('.submenu').hover(function(){
            $('.submenu').css('display', 'block');
        },function(){
            $('.submenu').css('display', 'none');
        });
    },function(){
        $('.submenu').css('display', 'none');
    });
    $('.fa-align-justify').on('click', function(){
        $('.navmenu ul').toggle();
    });
    
});
$(document).mouseup(function (e) {
    var container = $(".contacts");
    if (container.has(e.target).length === 0){
        container.hide();
    }
});