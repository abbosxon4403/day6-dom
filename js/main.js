let listGroup = document.querySelector('.list-group')
let addTodo = document.querySelector('.add-todo');
let makeTodo = document.querySelector('.todo-maker')

addTodo.addEventListener('click', () => {
    makeTodo.value = ''
        // 
    let text = document.createElement('div')
    text.className = ('w-75 text')
    text.textContent = makeTodo.value;
    li.append(text);
    // 
    var li = document.createElement('li')
    li.className = ('list-group-item d-flex align-items-center')
        // 
    let input = document.createElement('input')
    input.type = ('checkbox');
    // 
    li.append(input);

    let edit = document.createElement('button')
    edit.className = ('btn btn-success')
    edit.value = ('edit')
    let wrapper = document.createElement('div')
    wrapper.append(edit)
    let deleter = document.createElement('button')
    deleter.className = ('btn btn-success')
    wrapper.append(deleter)

    li.append(wrapper)
    listGroup.append(li);
});