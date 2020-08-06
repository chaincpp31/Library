'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProfileSchema extends Schema {
  up () {
    this.table('profiles', (table) => {
      // alter table
      table.increments()
      table.integer("age")
      table.string("name")
      table.timestamps()
    })
  }

  down () {
    this.table('profiles', (table) => {
      // reverse alternations
    })
  }
}

module.exports = ProfileSchema
