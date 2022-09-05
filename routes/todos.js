const express = require('express')
const router = express.Router()
const todosController = require('../controllers/todos') 
const { ensureAuth } = require('../middleware/auth')

router.get('/', ensureAuth, todosController.getTodos)

router.post('/createTodo', todosController.createTodo)

router.put('/markComplete', todosController.markComplete)

router.put('/markIncomplete', todosController.markIncomplete)

router.put('/markPublic', todosController.markPublic)

router.put('/markPrivate', todosController.markPrivate)

router.put('/markPriority', todosController.markPriority)

router.put('/markNotPriority', todosController.markNotPriority)

router.delete('/deleteTodo', todosController.deleteTodo)


module.exports = router