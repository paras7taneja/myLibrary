console.log("lets use object oriented programming");


class Book {
    constructor(name, author, type) {
        this.myname = name;
        this.myauthor = author;
        this.mytype = type;
    }
}
   class Display {
        add(book){
            let tableBody = document.getElementById("tableBody");
        
            tableBody.innerHTML += `
                    <tr>
                     <td>${book.myname}</td>
                     <td>${book.myauthor}</td>
                     <td>${book.mytype}</td>
                </tr>
            `;
        }

        clear() {
            let libraryFormSubmit = document.getElementById("libraryFormSubmit");
            libraryFormSubmit.reset();
        }

       validate (book) {
            let libraryFormSubmit = document.getElementById("libraryFormSubmit");
        
            if (book.myname.length < 2 || book.myauthor.length < 2) {
                return false;
            } else {
                return true;
            }
        }

        show(type, displayMessage) {

            let message = document.getElementById("message");
        
            message.innerHTML = `  <div class="alert alert-${type} alert-dismissible fade show"  role="alert">
            <strong>${type} - </strong> ${displayMessage}
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>`;
        
            setTimeout(() => {
                message.innerHTML='';
            }, 3000)
        
        }
        
    };

    
//  event listener for the add book button;


// let btnBook = document.getElementById("btnBook");
let libraryFormSubmit = document.getElementById("libraryFormSubmit");
libraryFormSubmit.addEventListener("submit", addBook)

function addBook(e) {
    console.log("book added");

    let myname = document.getElementById("bookName").value;
    let myauthor = document.getElementById("authorName").value;
    let mytype;

    let fiction = document.getElementById("fiction");
    let comp = document.getElementById("comp");
    let cooking = document.getElementById("cooking");

    if (fiction.checked) {
        mytype = fiction.value;
    } else if (comp.checked) {
        mytype = comp.value;
    } else if (cooking.checked) {
        mytype = cooking.value;
    }


    let book = new Book(myname, myauthor, mytype);


    let display = new Display();

    display.add(book);
    display.clear();
    console.log(book);

    if (display.validate(book)) {
        display.show("success", "your book has been added");
    } else {
        display.show("danger", "your book has not been added");
    };

    e.preventDefault();
}
    



