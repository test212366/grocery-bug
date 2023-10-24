const form = document.querySelector('.form'),
	input = document.querySelector('.input'),
	items = document.querySelector('.items')


function fromLocStor() {
	LC = items.innerHTML
	localStorage.setItem('items', LC)
}
if (localStorage.getItem('items')) {
	let result = localStorage.getItem('items')
	items.innerHTML = result
}


function valueInput(e) {
	e.preventDefault()
	const text = input.value.trim().toUpperCase()
	if (text == '') return input.value = ''
	input.value = ''
	createElementForMain(text)
}
function createElementForMain(text) {
	const item = document.createElement('div')
	item.classList.add('item')
	item.insertAdjacentHTML('afterbegin', `
		<div class="item-title">
			${text}
		</div>
		<div class="inputV hidden">
			<input type="text" placeholder="edit" class="input">
		</div>
		
		<div class="buttons">
			<button class="btn edit" id="edit">edit</button>
			<button class="btn delete" id="delete">delete</button>
			<button class="btn save" id="save">save</button>
		</div>
	`)
	items.appendChild(item)
	const buttonDelete = document.getElementById('delete')
	buttonDelete.addEventListener('click', () => {
		items.removeChild(item)
		fromLocStor()
	})
	fromLocStor()
	return
}
const buttonDelete = document.querySelectorAll('.delete')
buttonDelete.forEach(item => {
	item.addEventListener('click', () => {
		console.log(item.parentNode.parentNode);
		items.removeChild(item.parentNode.parentNode)
		fromLocStor()
	})
})


form.addEventListener('submit', valueInput)