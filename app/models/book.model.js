module.exports = (mongoose) => {
  const Book = mongoose.model(
    "book",
    mongoose.Schema(
      {
        title: String,
        publisher: String,
        ISBN: String,
        quantity: Number,
        shelfNumber: Number,
      },
      { timestamps: true }
    )
  );

  return Book;
};
