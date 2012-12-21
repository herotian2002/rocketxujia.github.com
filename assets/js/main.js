!function(){
  var $box = $("#unGalleryContainer");
  var all = ['<h5 class="title">作品墙</h5>'],
    workPics = ['css3-animation.jpg'],
    workTitles = ['玩转css3动画'],
    len = workPics.length;
  for (var i = 0; i < len; i++) {
    var top = parseInt(500 * Math.random()), left=parseInt(960 * Math.random()), transform = 'transform' + top%10;
    all.push( '<a href="#" class="pic ' + transform + '" title="' + workTitles[i] + '" style="top:'+ top + 'px; left:' + left + 'px;"><h3>' + workTitles[i] + '</h3><img style="min-height:100px;" src="assets/img/' + workPics[i] + '" /></a>');
  }
  $box.html( all.join('') );
}();
