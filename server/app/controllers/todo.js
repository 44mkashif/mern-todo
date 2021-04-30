const { Todo } = require("./../models/todo");
const statusCodes = require("./../constants/statusCodes");
const messages = require("./../constants/messages");

const create = async (req, res) => {
    try {
        if (req.body.action) {
            var todo = new Todo({ action: req.body.action });
            todo = await todo.save();

            return res.status(statusCodes.OK).json({
                success: true,
                message: messages.ResourceCreated,
                data: todo
            });
        } else {
            return res.status(statusCodes.BAD_REQUEST).json({
                success: false,
                err: "The input field is empty!"
            });
        }
    } catch (error) {
        console.log(error)
        return res.status(statusCodes.BAD_REQUEST).json({
            success: false,
            err: err
        });
    }
}

const retrieve = async (req, res) => {
    try {
        const todo = await Todo.findById(req.params.id);

        if (!todo) return res.status(statusCodes.NOT_FOUND).json({
            success: false,
            message: messages.ResourceNotFound
        });

        res.status(statusCodes.OK).json({
            success: true,
            data: todo
        });
    } catch (error) {
        console.log(error)
        return res.status(statusCodes.BAD_REQUEST).json({
            success: false,
            err: err
        });
    }
}

const list = async (req, res) => {
    try {
        const todos = await Todo.find().sort('createdAt');
        res.status(statusCodes.OK).json({
            success: true,
            data: todos
        });
    } catch (error) {
        console.log(error)
        return res.status(statusCodes.BAD_REQUEST).json({
            success: false,
            err: err
        });
    }
}

const destroy = async (req, res) => {
    try {
        const todo = await Todo.findByIdAndRemove(req.params.id);
        if (!todo) return res.status(statusCodes.NOT_FOUND).json({
            success: false,
            message: messages.ResourceNotFound
        });

        res.status(statusCodes.OK).json({
            success: true,
            message: messages.ResourceDestroyed
        });
    } catch (error) {
        console.log(error)
        return res.status(statusCodes.BAD_REQUEST).json({
            success: false,
            err: err
        });
    }
}

module.exports = {
    create,
    retrieve,
    list,
    destroy
}