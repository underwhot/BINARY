function ibg() {
  let ibg = document.querySelectorAll(".ibg");
  for (var i = 0; i < ibg.length; i++) {
    if (ibg[i].querySelector("img")) {
      ibg[i].style.backgroundImage =
        "url(" + ibg[i].querySelector("img").getAttribute("src") + ")";
    }
  }
}

ibg();


//ZOOM
if($('.gallery').length>0){
	baguetteBox.run('.gallery', {
		// Custom options
	});
};
/*
CLOUD-ZOOM
<a rel="position:'right',adjustX:25,adjustY:0,Width: 432" href="img/product/zoom.jpg" class="cloud-zoom product-main-mainimage__item">
	<img class="cloudzoom-gallery" src="img/product/zoom.jpg" alt="" />
</a>
*/

// FILTER 
$('.filter__item').click(function(event) {
  var i=$(this).data('filter');
  if (i==1) {
    $('.portfolio__column').show();
  }else{
    $('.portfolio__column').hide();
    $('.portfolio__column.f_'+i).show();
  }
  $('.filter__item').removeClass('active');
  $(this).addClass('active')

  return false;
});
// FILTER 


// SCROLL PARALLAX
$(window).scroll(function(event) {
	var s=0-$(this).scrollTop()/3;
	$('.mainblock__image').css('transform','translate3d(0,'+s+'px,0)');
});
// SCROLL PARALLAX

