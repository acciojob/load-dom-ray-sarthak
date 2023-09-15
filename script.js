//your JS code here. If required.
window.onload=(event)=>{
	const h1=document.createElement("h1");
	h1.textContent="DOM load success";
	const body=document.getElementsByTagName("body")[0];
	body.appendChild(h1);
}
