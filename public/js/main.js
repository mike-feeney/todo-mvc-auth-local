const deleteBtn = document.querySelectorAll('.del')
const todoItem = document.querySelectorAll('span.not')
const todoComplete = document.querySelectorAll('span.completed')
const todoPublic = document.querySelectorAll('span.pub')
const todoPrivate = document.querySelectorAll('span.priv')
const todoPriority = document.querySelectorAll('.notPriority')
const todoNotPriority = document.querySelectorAll('.priority')



Array.from(deleteBtn).forEach((el) => {
  el.addEventListener('click', deleteTodo)
})

Array.from(todoItem).forEach((el) => {
  el.addEventListener('click', markComplete)
})

Array.from(todoComplete).forEach((el) => {
  el.addEventListener('click', markIncomplete)
})

Array.from(todoPrivate).forEach((el) => {
  el.addEventListener('click', markPublic)
})

Array.from(todoPublic).forEach((el) => {
  el.addEventListener('click', markPrivate)
})

Array.from(todoPriority).forEach((el) => {
  el.addEventListener('click', markPriority)
})

Array.from(todoNotPriority).forEach((el) => {
  el.addEventListener('click', markNotPriority)
})




async function deleteTodo() {
  const todoId = this.parentNode.dataset.id
  try {
    const response = await fetch('todos/deleteTodo', {
      method: 'delete',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({
        'todoIdFromJSFile': todoId
      })
    })
    const data = await response.json()
    console.log(data)
    location.reload()
  } catch (err) {
    console.log(err)
  }
}

async function markComplete() {
  const todoId = this.parentNode.dataset.id
  try {
    const response = await fetch('todos/markComplete', {
      method: 'put',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({
        'todoIdFromJSFile': todoId
      })
    })
    const data = await response.json()
    console.log(data)
    location.reload()
  } catch (err) {
    console.log(err)
  }
}

async function markIncomplete() {
  const todoId = this.parentNode.dataset.id
  try {
    const response = await fetch('todos/markIncomplete', {
      method: 'put',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({
        'todoIdFromJSFile': todoId
      })
    })
    const data = await response.json()
    console.log(data)
    location.reload()
  } catch (err) {
    console.log(err)
  }
}

async function markPublic() {
  const todoId = this.parentNode.dataset.id
  try {
    const response = await fetch('todos/markPublic', {
      method: 'put',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({
        'todoIdFromJSFile': todoId
      })
    })
    const data = await response.json()
    console.log(data)
    location.reload()
  } catch (err) {
    console.log(err)
  }
}

async function markPrivate() {
  const todoId = this.parentNode.dataset.id
  try {
    const response = await fetch('todos/markPrivate', {
      method: 'put',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({
        'todoIdFromJSFile': todoId
      })
    })
    const data = await response.json()
    console.log(data)
    location.reload()
  } catch (err) {
    console.log(err)
  }
}

async function markPriority() {
  const todoId = this.parentNode.dataset.id
  try {
    const response = await fetch('todos/markPriority', {
      method: 'put',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({
        'todoIdFromJSFile': todoId
      })
    })
    const data = await response.json()
    console.log(data)
    location.reload()
  } catch (err) {
    console.log(err)
  }
}

async function markNotPriority() {
  const todoId = this.parentNode.dataset.id
  try {
    const response = await fetch('todos/markNotPriority', {
      method: 'put',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({
        'todoIdFromJSFile': todoId
      })
    })
    const data = await response.json()
    console.log(data)
    location.reload()
  } catch (err) {
    console.log(err)
  }
}

