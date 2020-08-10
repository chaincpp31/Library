'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AdminUserSchema extends Schema {
  up () {
    this.create('admin_users', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('admin_users')
  }
}

module.exports = AdminUserSchema
