var MyNewClass=(function()
{
	return function()
	{
		this.registeredFunctions=0;
		this.count=0;
		
		/*This function will register a new function with my object*/
		this.register=function(newFunction)
		{
			this['function'+(++this.registeredFunctions)]=newFunction;

		};

		/*This will start the execution of all the registered functions*/
		this.start=function()
		{
			for(var i=1;i<=this.registeredFunctions;i++)
				this['function'+i]();
			/*Call the callback function,if the registered functions do not execute within 2sec*/
			setTimeout(this.callback,2000);
		};

		/*This callback will be called once all have finished execution or timeout occurs*/
		this.callback=function()
		{
			alert("I am callback");
		};

		/*All registered function's on success call this method,to register there completion*/
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
