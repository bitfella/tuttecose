import Todo from 'App/Models/Todo'
import { schema, rules } from '@ioc:Adonis/Core/Validator'

export default class TodosController {
  public async index({ response }) {
    const posts = await Todo.all()

    return response.ok(posts)
  }

  public async store({ request, response }) {
    const postSchema = schema.create({
      title: schema.string({ trim: true }, [rules.maxLength(255)]),
      content: schema.string({ escape: true }, [rules.maxLength(1000)]),
    })

    const payload: any = await request.validate({ schema: postSchema })
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
    const postSchema = schema.create({
      title: schema.string({ trim: true }, [rules.maxLength(255)]),
      content: schema.string({ escape: true }, [rules.maxLength(1000)]),
    })

    const payload: any = await request.validate({ schema: postSchema })

    const { id }: { id: Number } = params

    const todo: any = await Todo.find(id)
    if (!todo) {
      return response.notFound({ message: 'Todo not found' })
    }

    todo.title = payload.title
    todo.content = payload.content

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
