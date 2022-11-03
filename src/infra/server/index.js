import faker from 'faker'
import { createServer, Model, Factory, JSONAPISerializer } from 'miragejs'

export function makeMockedServer() {
  createServer({
    serializers: {
      application: JSONAPISerializer,
      user: JSONAPISerializer.extend({
        alwaysIncludeLinkageData: true
      })
    },
    models: {
      user: Model
    },

    factories: {
      user: Factory.extend({
        __typename: 'User',
        avatar() {
          return faker.image.people()
        },
        id() {
          return faker.datatype.uuid()
        },
        name() {
          return `${faker.name.firstName()} ${faker.name.lastName()}`
        },
        dob() {
          return `${faker.date.past()}`
        },
        address() {
          return faker.address.cityName()
        },
        description() {
          return faker.lorem.sentences()
        },
        createdAt() {
          return `${faker.date.past()}`
        },
        updatedAt() {
          return `${faker.date.recent()}}`
        }
      })
    },

    seeds(server) {
      server.createList('user', 23)
    },

    routes() {
      this.get('/api/users', (schema, request) => {
        const { page, name } = request.queryParams
        const usersData = schema.db.users

        if (name) {
          return usersData.filter(
            (user) => user.name.toLowerCase().indexOf(name.toLowerCase()) !== -1
          )
        }

        if (page) {
          return usersData.slice(0, page * 6)
        }

        return usersData
      })

      this.put('/api/users/:id', (schema, request) => {
        const id = request.params.id
        const attrs = request.requestBody.normalize()
        console.log(id)
        schema.users.find(id).update({ ...JSON.parse(attrs), id })
        return schema.db.users.find(id)
      })
    }
  })
}
