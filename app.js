




$(function(){
  
  $(".buta").on("click", function () {
  
  // alert("ok");
  // 乱数
    const b = Math.ceil(Math.random()*3);
  
  // // if分岐処理
    let view = "";
  
  // if(r ==1){画像の入れ方
  //     view='<img src="img/curryyellow.png">';
  
  if(b ==1){
      view='ぶた１';
  }
  if(b ==2){
      view='ぶた２';
  }
  
  if(b ==3){
      view='ぶた３';
  }
  
  // 表示処理
  
    $("#menw").html(view);
  });
  $(".tori").on("click", function () {
  
  // alert("ok");
  // 乱数
    const b = Math.ceil(Math.random()*3);
  
  // // if分岐処理
    let view = "";
  
  // if(r ==1){画像の入れ方
  //     view='<img src="img/curryyellow.png">';
  
  if(b ==1){
      view='とり１';
  }
  if(b ==2){
      view='とり２';
  }
  
  if(b ==3){
      view='とり３';
  }
  
  // 表示処理
  
    $("#menw").html(view);
  });
  $(".ushi").on("click", function () {
  
  // alert("ok");
  // 乱数
    const b = Math.ceil(Math.random()*3);
  
  // // if分岐処理
    let view = "";
  
  // if(r ==1){画像の入れ方
  //     view='<img src="img/curryyellow.png">';
  
  if(b ==1){
      view='うし１';
  }
  if(b ==2){
      view='うし２';
  }
  
  if(b ==3){
      view='うし３';
  }
  
  // 表示処理
  
    $("#menw").html(view);
  });
  
 });






$('.test').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
});