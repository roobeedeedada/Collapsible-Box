/**
 ** COLLAPSIBLE C(hat)BOX
 ** Version: Horizontally-aligned, with cookies
 ** widget by kismet aka roobeedeedada
 ** https://github.com/roobeedeedada/Collapsible-Box
 ** http://www.rpg-directory.com/index.php?/topic/63660-collapsible-cboxshoutbox
 **/

$(function(){  
        var website = 'YOURWEBSITENAME';
        var cookie1 = website+'c-box';
        if($.cookie(cookie1) === 'on' || $.cookie(cookie1) === null){
                 $('#collapsible-box').hide();
        } else {
                 $('#collapsible-box').show();
        }
        $('#horizontal-toggle').click(function(){
                 if($.cookie(cookie1) === 'on' || $.cookie(cookie1) === null){ 
                         $.cookie(cookie1, 'off');
                         $('#collapsible-box').show();
                } else {
                         $('#collapsible-box').hide();
                         $.cookie(cookie1, 'on');
                }
        }); 
});
