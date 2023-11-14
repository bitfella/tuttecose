import Factory from '@ioc:Adonis/Lucid/Factory'
import Todo from 'App/Models/Todo'

export const TodoFactory = Factory.define(Todo, ({ faker }) => {
  return {
    title: faker.lorem.words(6),
    content: faker.lorem.lines(2),
  }
}).build()
