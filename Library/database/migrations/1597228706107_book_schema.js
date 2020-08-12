'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BookSchema extends Schema {
  up () {
    this.create('books', (table) => {
      table.increments()
      table.string("book_id", 100).notNullable().unique()
      table.string("book_name", 50).notNullable()
      table.string("book_img", 50).notNullable()
      table.string("book_category", 50).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('books')
  }
}

module.exports = BookSchema
