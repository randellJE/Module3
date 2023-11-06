// Section 8: The following code creates a new Map object for storing names beginning with A, B, or C
// with their phone numbers.


const phoneBookABC = new Map() //an empty map to begin with
phoneBookABC.set('Annabelle', '0412312343')
phoneBookABC.set('Barry', '0433221117')
phoneBookABC.set('Caroline', '0455221182')


// a) Create a new phoneBookDEF Map to store names beginning with D, E or F
// b) Initialise the contents of phoneBookDEF by passing in an array of keys/values
// c) Update the phone number for Caroline
// d) Write a function printPhoneBook(contacts) that prints the names and phone
//     numbers in the given Map
// e) Combine the contents of the two individual Maps into a single phoneBook Map
// f) Print out the full list of names in the combined phone book


//A

const phoneBookDEF = new Map()
phoneBookDEF.set('Daniel', '5408085533')
phoneBookDEF.set('Earl', '8406918008')
phoneBookDEF.set('Francene', '4658423658')


//B

defContacts = [
    ['Daniel', '5408085533'],
    ['Earl', '8406918008'],
    ['Francene', '4658423658']
]


//C

phoneBookABC.set('Caroline', '4564564566')


//D

function printPhoneBook(contacts) {
    for (const [name, phoneNumber] of contacts) {
        console.log(`${name}: ${phoneNumber}`)
    }
}

printPhoneBook(phoneBookDEF)


//E

const phoneBook = new Map([...phoneBookDEF, ...phoneBookABC])


//F

console.log(phoneBook)