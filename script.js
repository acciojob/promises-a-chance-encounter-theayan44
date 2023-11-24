//your JS code here. If required.
const promises = [];
for(let i=0; i<5; i++){
	promises[i] = new Promise((res, rej)=>{
			res(i+1);
			rej(`Promise ${i+1} rejected with error`)
	});
}
const output = document.getElementById("output");
Promise.all(promises).then((values)=>{	
	for(let i=0; i<values.length; i++){
		const p = document.createElement("p");
		p.innerText = values[i];
		output.appendChild(p);
	}
}).catch((err)=>{
	const p = document.createElement("p");
	p.innerText = err;
	output.appendChild(p);
})