class model{
    constructor(){
        this.h_navi = document.getElementById('header');
    }

    // ナビ追加
    addNavi(m,n){
        $('#header').append(views.render(n));
        let count = $('.list'+n).length;
        if(count >= 4){
            return $('.list'+n).remove();
        }
    }
}

let models = new model;
models.addNavi();