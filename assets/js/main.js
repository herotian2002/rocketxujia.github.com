// unGalleryContainer
//!function(){
//  var $box = $("#unGalleryContainer").show();
//var all = ['<h2 class="title">作品墙</h2>'],
//  workPics = ['css3-animation.jpg','js.jpg','3d-mm.jpg','gigi-gallery.jpg','dabblet.jpg'],
//  workTitles = ['教你玩转css3动画','js基础原理分享','图片旋转木马3D效果','美女Gigi图片墙','dabblet 小demo库'],
//  hrefs =['http://rocketxujia.github.com/ppt/css3-animation.html','http://rocketxujia.github.com/ppt/js-2012-12-01.html',
//    'http://rocketxujia.github.com/ppt/css3-animation.html#slide-5','http://rocketxujia.github.com/ppt/css3-animation.html#slide-3','http://dabblet.com/user/rocketxujia'],
//  len = workPics.length;
//  for (var i = 0; i < len; i++) {
//    var top = parseInt(240 * Math.random() + 100), left=parseInt(600 * Math.random()), transform = 'transform' + top%10;
//    all.push( '<a href="'+hrefs[i]+'" class="pic ' + transform + '" title="' + workTitles[i] + '" style="top:'+ top + 'px; left:' + left + 'px;"><h3>' + workTitles[i] + '</h3><img style="min-height:100px;" src="assets/img/' + workPics[i] + '" /></a>');
//  }
//  $box.html( all.join('') );
//  $(document.body).addClass('body-wood');
//}();

//galleryContainer
!function(){
  var $box = $("#galleryContainer").show();
  var all = ['<h2 class="title">作品墙</h2>','<div class="box float-clr">'],
    workPics = ['css3-animation.jpg','js.jpg','3d-mm.jpg','gigi-gallery.jpg','dabblet.jpg'],
    workTitles = ['教你玩转css3动画','js基础原理分享','图片旋转木马3D效果','美女Gigi图片墙','dabblet 小demo库'],
    hrefs =['http://rocketxujia.github.com/ppt/css3-animation.html','http://rocketxujia.github.com/ppt/js-2012-12-01.html',
    'http://rocketxujia.github.com/ppt/css3-animation.html#slide-5','http://rocketxujia.github.com/ppt/css3-animation.html#slide-3','http://dabblet.com/user/rocketxujia'],
    len = workPics.length;
  for (var i = 0; i < len; i++) {
    var top = parseInt(240 * Math.random() + 100), left=parseInt(600 * Math.random());
    all.push( '<a href="'+hrefs[i]+'" class="item" title="' + workTitles[i] + '" style=""><h3>' + workTitles[i] + '</h3><img style="min-height:100px;" src="assets/img/' + workPics[i] + '" /></a>');
  }
  all.push('</div>');
  $box.html( all.join(''));
  $(document.body).addClass('deck-container');

  //  初始化masonry
  $box.find('.box').imagesLoaded(function () {
    var $this = $(this), $photos = $this.find('.item');
    $this.masonry({
      itemSelector:'.item',
      columnWidth: 285
    });
  });
}();


