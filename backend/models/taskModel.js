const mongoose = require('mongoose')

const taskSchema = mongoose.Schema(
  {
    text: { type: String, required: [true, 'Please add a text value'] },
    user: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
    completed: { type: Boolean, default: false },
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('Task', taskSchema)
