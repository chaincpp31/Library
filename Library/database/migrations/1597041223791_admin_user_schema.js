'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AdminUserSchema extends Schema {
  up () {
    this.create('admin_users', (table) => {
      table.increments()
      table.string("username",50).notNullable().unique()
      table.string("password",50).notNullable()
      table.timestamps()
    })
  }

  down () {
  }
}

module.exports = AdminUserSchema
