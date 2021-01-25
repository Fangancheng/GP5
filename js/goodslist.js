$(function () {

    //请求商品数据
    $.ajax({
        url: './goods.json',
        type: 'get',
        dataType: 'json',
        cache: false,//是否读取缓存  false一直读取最新数据
        success: function (json) {
            var domStr = ''
            $.each(json, function (index, item) {
                domStr += `
                <div class="goods">
                    <img src="${item.imgurl}" alt="">
                    <p>${item.price}</p>
                    <h3>${item.title}</h3>
                    <div data-id="${item.id}">加入购物车</div>
                </div>
                `
            })
            $('.main').html(domStr)
        }
    })
    //点击加入购物车
    $('.main').on('click','.goods div',function(){
        //点击后存储商品id和数量
        var id = $(this).attr('data-id')//当前点击商品的id
        var goodsArr = []//购物车数据的数组
        if(localStorage.getItem('goods')){
            goodsArr = JSON.parse(localStorage.getItem('goods'))
        }
        //标记购物车是否有该商品
        var flag = false
        //判断购物车是否已有该商品
        $.each(goodsArr,function(index,item){
            if(item.id === id){//购物车已有该商品
                item.num++//商品数量加一
                flag = true
            }
        })
        if(!flag){
            //push对象到goodsArr
            goodsArr.push({"id":id,"num":1})
        }
        //数据更新到本地存储
        localStorage.setItem('goods',JSON.stringify(goodsArr))
        alert('成功加入购物车！')
    })


























})