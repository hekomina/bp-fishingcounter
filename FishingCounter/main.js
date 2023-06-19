$('.button').mousedown(function (e) {
    var target = e.target;
    var rect = target.getBoundingClientRect();
    var ripple = target.querySelector('.ripple');
    $(ripple).remove();
    ripple = document.createElement('span');
    ripple.className = 'ripple';
    ripple.style.height = ripple.style.width = Math.max(rect.width, rect.height) + 'px';
    target.appendChild(ripple);
    var top = e.pageY - rect.top - ripple.offsetHeight / 2 -  document.body.scrollTop;
    var left = e.pageX - rect.left - ripple.offsetWidth / 2 - document.body.scrollLeft;
    ripple.style.top = top + 'px';
    ripple.style.left = left + 'px';
    return false;
});

$(function(){
	var $plus = $('.counter .PlusButton'); //アップボタン
	var $minus = $('.counter .MinusButton'); //アップボタン
	var $reset = $('.counter .ResetButton'); //アップボタン

	//アップボタンクリック時
	$plus.on('click', function() {
		number = Number($(this).parent().prev().text());
        $(this).parent().prev().text(number+1);
	});

    //マイナスボタンクリック時
	$minus.on('click', function() {
		number = Number($(this).parent().prev().text());
        if( number != 0){
            $(this).parent().prev().text(number-1);
        }
	});

    //リセットボタンクリック時
	$reset.on('click', function() {
        $(this).prev().prev().text(0);
	});
});