import bookModel from "../model/bookModel.js";

// Add book controller
export const addBookController = async (req, res, next) => {
  try {
    const { name, price, description } = req.body;
    const book = await bookModel.create({ name, price, description });
    await book.save();
    res.status(201).send({
      success: true,
      message: "Book Created Successfully",
      book,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in crearing books",
    });
  }
};

// Get all books
export const getAllBooks = async (req, res, next) => {
  try {
    const book = await bookModel.find({});
    res.status(200).send({
      success: true,
      message: "All books",
      book,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Erorr in getting book",
      error,
    });
  }
};

// Get book by id
export const getBookById = async (req, res, next) => {
  try {
    const book = await bookModel.findById(req.params.id);
    res.status(200).send({
      success: true,
      message: "Single book Fetched",
      book,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error while getitng single book",
      error,
    });
  }
};

// Update book
export const updateBook = async (req, res, next) => {
  try {
    const book = await bookModel.findByIdAndUpdate(req.params.id, {
      $set: req.body,
    });
    res.status(200).send({
      success: true,
      message: "Book updated successfully",
      book,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error while updating single book",
      error,
    });
  }
};

// Delete book
export const deleteBook = async (req, res, next) => {
  try {
    await bookModel.findByIdAndRemove(req.params.id);
    res.status(200).send({
      success: true,
      message: "Book Deleted successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error while deleting book",
      error,
    });
  }
};
