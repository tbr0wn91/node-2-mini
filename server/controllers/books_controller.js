let books = [];
let id = 0;



module.exports = {
    read: (req,res, next) => {
        res.status(200).send(books)
    },
    create: (req,res, next) => {
        const { title, author } = req.body;
        let book = {
            id: id,
            title: title,
            author: author
        }
        books.push(book)
        id++
        res.status(200).send(books);
    },
    update: (req, res, next) => {
        const { author, title } = req.body
        const updateID = req.params.id;
        const bookIndex = books.findIndex(book => book.id == updateID);
        let book = books[bookIndex];

        books[bookIndex] = {
            id: book.id,
            title: title || book.title,
            author: author || book.author
        },
        res.status(200).send(books);
     },
     delete: (req, res, next) => {
         const deleteID = req.params.id;
         bookIndex = books.findIndex(book => book.id == deleteID);
         books.splice(bookIndex, 1);
         res.status(200).send(books)
     }
}