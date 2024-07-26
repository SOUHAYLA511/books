document.addEventListener('DOMContentLoaded', () => {
    const books = [
        { title: '1984', author: 'George Orwell' },
        { title: 'To Kill a Mockingbird', author: 'Harper Lee' },
        { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
        { title: 'Moby-Dick', author: 'Herman Melville' },
    ];

    const bookList = document.getElementById('book-list');

    books.forEach((book, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${book.title} by ${book.author}</span>
            <button id="book-${index}" class="mark-read">Mark as Read</button>
        `;

        const button = li.querySelector('button');
        button.addEventListener('click', () => {
            button.classList.toggle('read');
            button.textContent = button.classList.contains('read') ? 'Read' : 'Mark as Read';
        });

        bookList.appendChild(li);
    });
});
