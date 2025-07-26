const query = "The Lord of the Rings"; 
const url = `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}`;

fetch(url)
  .then(response => response.json())
  .then(data => {
    const books = data.items;
    books.forEach(book => {
      const info = book.volumeInfo;
      console.log(`📖 ${info.title} by ${info.authors?.join(", ")}`);
    });
  })
  .catch(error => console.error("Error fetching books:", error));