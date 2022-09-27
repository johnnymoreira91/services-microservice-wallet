import { database } from '@database/knex'

async function createSchema () {
  if (await !database.schema.hasTable('users')) {
    return { message: 'Table already exist' }
  }

  // Create database schema. You should use knex migration files
  // to do this. We create it here for simplicity.
  await database.schema.createTable('wallet_repository', table => {
    table.increments('id').primary()
    table.uuid('public_id').unique()
    table.string('wallet_number', 100)
    table.integer('coins', 10)
  })

  await database.schema.createTable('wallet', table => {
    table.increments('id').primary()
    table.uuid('wallet_number').unique()
    table.string('owner_id', 100).notNullable()
    table.integer('coins', 10).unsigned().index().references('coins').inTable('wallet_repository')
    table.boolean('active').defaultTo(true)
  })
  return { message: 'Tables created' }
}

export { createSchema }
