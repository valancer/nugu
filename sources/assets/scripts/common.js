// console 객체가 없을 경우
if (!window.console) {
	window.console = {
		log : function(){},
		dir : function(){}
	};
} else if (!window.console.dir){
	window.console.dir = function(){};
}


(function(){
	$(document).ready(function(){
		var agents = [/(opr|opera)/gim,/(chrome)/gim,/(firefox)/gim,/(safari)/gim,/(msie[\s]+[\d]+)/gim,/(trident).*rv:(\d+)/gim];
		var agent = navigator.userAgent.toLocaleLowerCase();
		for(var ag in agents){
			if(agent.match(agents[ag])){
				$(document.body).addClass(String(RegExp.$1+RegExp.$2).replace(/opr/,'opera').replace(/trident/,'msie').replace(/\s+/,''));
				break;
			}
		}
	});
})();


$(document).ready(function(e) {
	
	// faq, qna
	var $toggleItems = $('.accordion dt > a');
	var $lastToggleItem = null;

	$toggleItems.off('click').on('click', function(e) {
		e.preventDefault();
		e.stopPropagation();

		var $this = $(this).closest('dt');
		if( $this.is($lastToggleItem) && $this.hasClass("is-opened") ) {
			$this.removeClass("is-opened");
			return;
		}

		if( $lastToggleItem !== null ) {
			$lastToggleItem.removeClass("is-opened");
		}

		$this.addClass('is-opened');
		$lastToggleItem = $this;
	});
});







