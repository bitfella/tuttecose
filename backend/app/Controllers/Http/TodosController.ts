import Todo from 'App/Models/Todo'
import { schema, rules } from '@ioc:Adonis/Core/Validator'

export default class TodosController {
  public async index({ response }) {
    const posts = await Todo.all()

    return response.ok(posts)
  }

  public async store({ request, response }) {
    const todoSchema = schema.create({
      title: schema.string({ trim: true }, [rules.maxLength(255)]),
      description: schema.string.optional({ escape: true }, [rules.maxLength(1000)]),
      status: schema.number.optional([rules.unsigned(), rules.range(0, 1)]),
    })
    const payload: any = await request.validate({ schema: todoSchema })
    const todo: Todo = await Todo.create(payload)

    return response.ok(todo)
  }

  public async show({ params, response }) {
    const { id }: { id: Number } = params
    const todo: any = await Todo.find(id)

    if (!todo) {
      return response.notFound({ message: 'Todo not found' })
    }

    return response.ok(todo)
  }

  public async update({ request, params, response }) {
    const todoSchema = schema.create({
      title: schema.string.optional({ trim: true }, [rules.maxLength(255)]),
      description: schema.string.optional({ escape: true }, [rules.maxLength(1000)]),
      status: schema.number.optional([rules.unsigned(), rules.range(0, 1)]),
    })
    const payload: any = await request.validate({ schema: todoSchema })
    const { id }: { id: Number } = params
    const todo: any = await Todo.find(id)

    if (!todo) {
      return response.notFound({ message: 'Todo not found' })
    }

    todo.title = payload.title
    todo.description = payload.description
    todo.status = payload.status

    await todo.save()

    return response.ok(todo)
  }

  public async destroy({ params, response }) {
    const { id }: { id: Number } = params
    const todo: any = await Todo.find(id)

    if (!todo) {
      return response.notFound({ message: 'Todo not found' })
    }

    await todo.delete()

    return response.ok({ message: 'Todo deleted successfully.' })
  }
}
