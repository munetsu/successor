class view {
    constructor(){
        this.viewarea = document.getElementById('header');
        this.viewarea = document.getElementById('footer');
        this.render();
        this.bindDomElement();
    }

    // HTMLへ記載
    render(m){
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

    // 要素取得
    bindDomElement(){
        this.handlist = document.getElementsByClassName('list2');
    };
}

let views = new view;
