document.addEventListener("DOMContentLoaded", () => {
  let form =document.querySelector('form')
  form.addEventListener('submit',function(e){
    e.preventDefault()
   handler(e.target.querySelector('#new-task-description').value)
   form.reset()
  })
});


function handler(value){
  let li = document.createElement('li')
  li.textContent = value
  console.log(li)
  let btn = document.createElement('button')
  btn.textContent = 'x'
  btn.addEventListener('click',deleteInput)
  li.appendChild(btn)

  let ul = document.getElementById('tasks')
  console.log(ul)
  ul.appendChild(li)
}

function deleteInput(e){
e.target.parentNode.remove()
}

//now i see the benefits of appending as child 