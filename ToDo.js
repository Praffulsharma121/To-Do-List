
var button = document.querySelector("#add");

button.addEventListener("click", () =>
{
	var input = document.querySelector("#input");
	var list = document.getElementById('list');
	var paragraph = document.createElement('p');
	var remove = document.createElement('button');
	remove.innerHTML = '<input type="image" src="tick.png" width="30px" id="del" name="del">';
	remove.classList.add('del');
	paragraph.innerText = input.value;
	list.appendChild(paragraph);
	list.appendChild(remove);
	remove.addEventListener("click", () =>
	{
		list.removeChild(paragraph);
		list.removeChild(remove);
	});
	input.value = "";
	
});
