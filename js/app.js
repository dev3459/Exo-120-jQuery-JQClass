let selection = $('.carre, .rond, .losange');

let btn = $('#btnRemplirAndClear')
btn.click(()=>{
    if(btn.text() === "vider"){
        selection.removeClass('plein');
        btn.text('remplir');
    }else{
        selection.addClass('plein');
        btn.text('vider');
    }
});

selection.click(function(){
    $(this).parent().children().toggleClass('plein');
});