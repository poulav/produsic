$('.otp input').on('keyup change', function(){
    $t = $(this);
    if ($t.val().length > 0) {
        $t.next().focus();
    }
    });
    $('.otp input').keydown(function(e) {
        if ((e.which == 8 || e.which == 46) && $(this).val() =='') {
            $(this).prev('input').focus();
        }
    });

    jQuery('.otp input').keypress(function(event){
        if(event.which !=8 && isNaN(String.fromCharCode(event.which))){
            event.preventDefault();
        }
    });

    jQuery('.select-mno input').keypress(function(event){
        if(event.which !=8 && isNaN(String.fromCharCode(event.which))){
            event.preventDefault();
        }
    });

    