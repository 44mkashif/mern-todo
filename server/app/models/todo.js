'use strict'

const mongoose = require('mongoose');

let todoSchema = new mongoose.Schema(
    {
        action: {
            type: String,
            required: [true, 'The todo text field is required']
        }
    },
    {
        timestamps: true
    }
);

let Todo = mongoose.model('Todo', todoSchema);

module.exports = { Todo }