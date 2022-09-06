const Todo = require('../models/Todo')

module.exports = {
  getTodos: async (req, res) => {
    console.log(req.user)
    try {
      const todoItems = await Todo.find({ userId: req.user.id })
      const itemsLeft = await Todo.countDocuments({ userId: req.user.id, completed: false })
      const privateTodosCount = await Todo.countDocuments({ userId: req.user.id})
      const publicTodosCount = await Todo.countDocuments({ isPublic: true})
      // Gets all todos marked as complete
      const publicItems = await Todo.find({ isPublic: true })
      res.render('todos.ejs', { todos: todoItems, left: itemsLeft, user: req.user, public: publicItems, count: privateTodosCount + publicTodosCount})
    } catch (err) {
      console.log(err)
    }
  },
  createTodo: async (req, res) => {
    try {
      await Todo.create({ todo: req.body.todoItem, completed: false, userId: req.user.id, isPublic: false, setPriority: false })
      console.log('Todo has been added!')
      res.redirect('/todos')
    } catch (err) {
      console.log(err)
    }
  },
  markComplete: async (req, res) => {
    try {
      await Todo.findOneAndUpdate({ _id: req.body.todoIdFromJSFile }, {
        completed: true
      })
      console.log('Marked Complete')
      res.json('Marked Complete')
    } catch (err) {
      console.log(err)
    }
  },
  markIncomplete: async (req, res) => {
    try {
      await Todo.findOneAndUpdate({ _id: req.body.todoIdFromJSFile }, {
        completed: false
      })
      console.log('Marked Incomplete')
      res.json('Marked Incomplete')
    } catch (err) {
      console.log(err)
    }
  },
  markPublic: async (req, res) => {
    try {
      await Todo.findOneAndUpdate({ _id: req.body.todoIdFromJSFile }, {
        isPublic: true
      })
      console.log('Marked Public')
      res.json('Marked Public')
    } catch (err) {
      console.log(err)
    }
  },
  markPrivate: async (req, res) => {
    try {
      await Todo.findOneAndUpdate({ _id: req.body.todoIdFromJSFile }, {
        isPublic: false
      })
      console.log('Marked Private')
      res.json('Marked Private')
    } catch (err) {
      console.log(err)
    }
  },
  deleteTodo: async (req, res) => {
    console.log(req.body.todoIdFromJSFile)
    try {
      await Todo.findOneAndDelete({ _id: req.body.todoIdFromJSFile })
      console.log('Deleted Todo')
      res.json('Deleted It')
    } catch (err) {
      console.log(err)
    }
  },
  markPriority: async (req, res) => {
    try {
      await Todo.findOneAndUpdate({ _id: req.body.todoIdFromJSFile }, {
        setPriority: true
      })
      console.log('Set as Priority')
      res.json('Set as Priority')
    } catch (err) {
      console.log(err)
    }
  },
  markNotPriority: async (req, res) => {
    try {
      await Todo.findOneAndUpdate({ _id: req.body.todoIdFromJSFile }, {
        setPriority: false
      })
      console.log('Set as Not Priority')
      res.json('Set as Not Priority')
    } catch (err) {
      console.log(err)
    }
  },
}
