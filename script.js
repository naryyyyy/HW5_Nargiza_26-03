let books=['В конце они оба умрут','Уллис','1968','Вино из одуванчиков','Унесенные призраками','После','Будка поцелуев','LOL'
]
function findBooksContainingU(...books) {
    let booksContainingU = [];
    let otherBooks = [];
  
    for (let i = 0; i < books.length; i++) {
      if (books[i].includes('у')) {
        booksContainingU.push(books[i]);
      } else {
        otherBooks.push(books[i]);
      }
    }
  
    console.log('Книги, содержащие "у":', booksContainingU);
    console.log('Остальные книги:', otherBooks);
  }
  let args=[1,2,3,4,5,6,6]
  function average(...args) {
    const sum = args.reduce((acc, val) => acc + val, 0);
    const avg = sum / args.length;
    console.log('Среднее арифметическое:', avg);
  }
  

