class AddressManagenet{

    AddressBook = Array();

    Addconstact(Address){
        this.AddressBook.push(Address)
    }

    findcontact(fname){
        let address = this.AddressBook.filter((address)=>address.firstname === fname )
        return address
    }

    deletecontact(fname){
        this.AddressBook.splice(this.AddressBook.findIndex(e => e.name === fname),1);
    }

    totalcontact(){
        let count = 0
        let number =this.AddressBook.reduce(count++,0)
        console.log(number)
    }

}

let ad = new AddressManagenet();
let contact1 = new Address("kalpesh","hindarkar","Sewri","Mumbai","Maharashtra","400015","91 9920036999","kalpeshgmail.com");
ad.Addconstact(contact1)
ad.totalcontact()
