class controller{
    constructor(){
        this.viewarea = document.getElementById('header');
    }

    // ヘッダーナビの追加呼び出し
    addRender(){
        $(this.viewarea).scroll(function(m,n){
            let v = $(this).scrollLeft();
            if(v > m){
                models.addNavi();
            }
        })
    }

    render(){
        return this.viewarea.insertAdjacentHTML('afterbegin',views.render());
    }
}
let constructors = new controller;
constructors.render();
constructors.addRender();