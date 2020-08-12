'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class StatusBookSchema extends Schema {
  up () {
    this.create('status_books', (table) => {
      table.increments()
      table.string("student_id", 50).notNullable()
      table.string("date_rent", 50).notNullable()
      table.string("deadline", 50).notNullable()
      table.string("book_id", 50).notNullable()
      table.string("status", 50).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('status_books')
  }
}

module.exports = StatusBookSchema
