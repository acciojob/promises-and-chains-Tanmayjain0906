
const form = document.getElementById("form");

form.addEventListener("submit", (event) => {
	event.preventDefault();
	const age = document.getElementById("age").value;
   const name = document.getElementById("name").value;
	let promise = new Promise((resolve, reject) => {
		setTimeout(() => {
			if(age > 18)
			{
				resolve(name);
			}
			else
			{
				reject(name);
			}
		}, 4000)
	})

	promise.then((data)=> {
	alert(`Welcome, ${data}. You can vote.`);
}).catch((data)=> {
	alert(`Oh sorry ${data}. You aren't old enough.`);
})
	
})




