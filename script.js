//your JS code here. If required.
const promises = [];
for(let i=0; i<5; i++){
	promises[i] = new Promise((res, rej)=>{
		if(i % 2 == 0)
			res(i+1);
		else
			rej(`Promise ${i+1} rejected with error`)
	});
}

Promise.all(promises).then((values)=>{
	const output = document.getElementById("output");
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