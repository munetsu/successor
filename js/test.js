function render(m){
    let view = '';
        view += '<ul class="ul1 list'+m+'">';
        view += '<li><a href="#" class="new" disabled>新着</a></li>';
        view += '<li><a href="#" class="boki" disabled>簿記</a></li>';
        view += '<li><a href="#" class="it" disabled>IT系</a></li>';
        view += '<li><a href="#" class="business" disabled>ビジネス系</a></li>';
        view += '<li><a href="#" class="kikai" disabled>機械系</a></li>';
        view += '<li><a href="#" class="food" disabled>食品系</a></li>';
        view += '<li><a href="#" class="career" disabled>キャリア系</a></li>';
        view += '<li><a href="#" class="kinyu" disabled>金融系</a></li>';
        view += '</ul>';
    return view;
};

$('#header').html(render());

$('#header').scroll(function(){
    // let v = $(this).scrollLeft();
    // // let t = v - $(window).width();
    // console.log(v);
    // if(v > 50){
        $('#header').append(render(2));
        let count = $('.list2').length;
        if(count >= 10){
            $('.list2').remove();
            $('#header').append(render(2));
        }
        // console.log(count);
    // }
})
