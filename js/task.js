var MyNewClass=(function()
{
	return function()
	{
		this.registeredFunctions=0;
		this.count=0;
		this.register=function(newFunction)
		{
			this['function'+(++this.registeredFunctions)]=newFunction;

		};

		this.start=function()
		{
			for(var i=1;i<=this.registeredFunctions;i++)
				this['function'+i]();
			setTimeout(this.callback,2000);
		};

		this.callback=function()
		{
			alert("I am callback");
		};

		this.markDone=function()
		{
			this.count++;
			if(this.count==this.registeredFunctions)
			{
				alert("All function executed,calling callback now");
				this.callback();
			}

		};
	};

})();
