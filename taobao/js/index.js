(function(win,doc){
		win.addEventListener('resize',change,false);
		change();
		function change(){
			doc.documentElement.style.fontSize=20/320*doc.documentElement.clientWidth+'px';	
		}	
})(window,document);
