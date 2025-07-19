// Basic Queries
db.books.find({ genre: "Fiction" })
db.books.find({ published_year: { $gt: 2000 } })
db.books.find({ author: "George Orwell" })
db.books.updateOne({ title: "The Alchemist" }, { $set: { price: 12.99 } })
db.books.deleteOne({ title: "The Silent Patient" })

// Advanced Queries
db.books.find({ in_stock: true, published_year: { $gt: 2010 } })
db.books.find({}, { title: 1, author: 1, price: 1, _id: 0 })
db.books.find().sort({ price: 1 })
db.books.find().sort({ price: -1 })
db.books.find().limit(5).skip(0)
db.books.find().limit(5).skip(5)

// Aggregation Pipelines
db.books.aggregate([
  { $group: { _id: "$genre", averagePrice: { $avg: "$price" } } }
])

db.books.aggregate([
  { $group: { _id: "$author", count: { $sum: 1 } } },
  { $sort: { count: -1 } },
  { $limit: 1 }
])

db.books.aggregate([
  {
    $group: {
      _id: { $floor: { $divide: ["$published_year", 10] } },
      count: { $sum: 1 }
    }
  },
  { $sort: { "_id": 1 } }
])

// Indexing
db.books.createIndex({ title: 1 })
db.books.createIndex({ author: 1, published_year: -1 })
db.books.find({ title: "The Hobbit" }).explain("executionStats")
