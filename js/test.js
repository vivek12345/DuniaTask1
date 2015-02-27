$(document).ready(function()
{
	$('.start').click(function(){
		var o=new MyNewClass();
		function a()
		{
			$.ajax(
			{
				url: '/echo/html/',
				success: function(data) 
				{
					alert('function a complete');
					o.markDone();
				}
			})

		};
		o.register(a);
		o.start();
	});
});
