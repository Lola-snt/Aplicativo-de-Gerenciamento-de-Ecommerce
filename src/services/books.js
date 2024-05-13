import api from "./api";

export const createBook = async (bookData) => {
    try {
        const response = await api.post('/books.json', bookData)
    } catch (err) {
        console.log(err)
    }
}

export const getAllBook = async () => {
  try {
    const books = [];
    const response = await api.get(`/books.json`);

    for (key in response.data) {
      const book = {
        ...response.data[key],
        id: key,
      };
      books.push(book);
    }
    return books;
  } catch (err) {
    console.log(err);
  }
};

export const getBook = async (bookId) => {
  try {
    const response = await api.get(`/books/${bookId}.json`)
    return response.data
  }
  catch (err) {
    console.log(err);
  }

}

export const updateBook = async (bookid,bookData) => {
  try {
    console.log(bookid, bookData)
      const response = await api.put("/books/"+bookid +".json",bookData)
  } catch(err) {
      console.log("ERRO: ", err)
  }

};
export const deleteBook = async (bookId) => {
  try {
      const response = await api.delete("/books/"+bookId+".json")
      console.log(response)
  } catch(err) {
      console.log("ERRO: ", err)
  }
};
