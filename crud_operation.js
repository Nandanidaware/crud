function phoneContacts(name, phone, email) {
    return {
        name: name,
        "phoneno.": phone,
        email: email,
    };
}

let nandani = phoneContacts("nandani", 1234567890, "nandani@gmail.com");
let prachi = phoneContacts("prachi", 2345678901, "prachi@gmail.com");
let dimple = phoneContacts("dimple", 3456789012, 'dimple@gmail.com');
let sharayu = phoneContacts("sharayu", 4567890123, 'sharayu@gmail.com');
let ankush = phoneContacts("ankush", 5678901234, 'ankush@gmail.com');


let contacts = [nandani, prachi, dimple, sharayu, ankush];


function addContact(name, phone, email) {
    const newContact = phoneContacts(name, phone, email);
    contacts.push(newContact);
    console.log(`Contact "${name}" added successfully.`);
}

function searchContact(name) {
    const foundContact = contacts.find(contact => contact.name === name);
    if (foundContact) {
        console.log("Contact found:", foundContact);
    } else {
        console.log(`Contact "${name}" not found.`);
    }
}

function updateContact(name,newPhone,newEmail) {
    const foundContact = contacts.find(contact => contact.name === name);
    if (foundContact) {
        foundContact["phoneno."] = newPhone;
        foundContact.email = newEmail;
        console.log(`Contact "${name}" updated successfully.`);
    } else {
        console.log(`Contact "${name}" not found.`);
    }
}

function deleteContact(name) {
    const index = contacts.findIndex(contact => contact.name === name);
    if (index !== -1) {
        const deletedContact = contacts.splice(index, 1)[0];
        console.log(`Contact "${name}" deleted successfully.`);
    } else {
        console.log(`Contact "${name}" not found.`);
    }
}
searchContact("nandani");
deleteContact("sharayu");
updateContact("prachi", 9876543210, "prachi_updated@gmail.com");
addContact("krupa", 456779277, "krupa@gmail.com");

