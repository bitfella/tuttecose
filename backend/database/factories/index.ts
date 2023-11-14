import Factory from '@ioc:Adonis/Lucid/Factory'
import Todo from 'App/Models/Todo'

export const TodoFactory = Factory.define(Todo, ({ faker }) => {
  return {
    title: faker.lorem.words(6),
    description: faker.lorem.lines(2),
    status: faker.datatype.number({ min: 0, max: 1 }),
  }
}).build()
