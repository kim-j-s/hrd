$(function(){
	// 팝업 호출
	$('.popactive').click(function(){
		var data = $(this).data('popactive');
		$('body').css('position','fixed');
		$('body').css('height','100%');
		$('.layerfullWrap').css('display','none');
		$('[data-fullpop="'+ data +'"]').css('display','block');
	});

	// 팝업 닫기
	$('.layerCloseBtn').click(function(){
		$('body').removeAttr('style');
		$(this).closest('.layerfullWrap').css('display','none');
	});
});