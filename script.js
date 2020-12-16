function pageLoad() {

	let myRoot = document.getElementById("root");

	let myObjects  = [
		{
			tag: "h1",
			content: "Tamás Krisztián"
		},
		{
			tag: "p",
			content: "Front-end developer"
		}
	];
	/*
	for (let i = 0; i < myObjects.length; i++) {
	}
	*/

	for (o of myObjects) {
		console.log(o.tag);

		myRoot.insertAdjacentHTML("beforeend", `
		<${o.tag}>${o.content}</${o.tag}>
		`);
	}

	myRoot.addEventListener("click", function() {
		myRoot.classList.toggle("clicked");
	});
}

window.addEventListener("load", pageLoad);