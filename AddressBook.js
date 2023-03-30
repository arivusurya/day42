export class Address{
    name;
  
    address;
    city;
    state;
    Zip;
    phoneNum;
    email;

    constructor(...params){

        this.name =params[0]
        this.address = params[1]
        this.city=params[2]
        this.state = params[3]
        this.Zip = params[4]
        this.phoneNum=params[5]
        this.email=params[6]
    }
   get name(){
    return this.name
   }
   set name(name){
    let nameRegex = new RegExp("^[A-Z]{1}[a-z]{3,}$");
    if( nameRegex.test(name)){
        this.LastName = name;
    }
    else{
        throw "Name is incorrect format";
    }
   }
    get address() { return this.Address;}
    set address(add) {
        let addRegex = new RegExp("^[A-Za-z]{4,}$");
        if( addRegex.test(add)){
            this.Address = add;
        }
        else{
            throw "Address is incorrect format";
        }
    }

    get city() { return this.City;}
    set city(cityName) {
        let cityRegex = new RegExp("^[A-Za-z]{4,}$");
        if( cityRegex.test(cityName)){
            this.City = cityName;
        }
        else{
            throw "City is incorrect format";
        }
    }
    get state() { return this.State;}
    set state(stateName) {
        let stateRegex = new RegExp("^[A-Za-z]{4,}$");
        if( stateRegex.test(stateName)){
            this.State = stateName;
        }
        else{
            throw "State is incorrect format";
        }
    }
    get zip(){return this.Zip;}
    set zip(zipNo){
        let zipRegex = new RegExp("^[1-9][0-9]{5}$");
        if(zipRegex.test(zipNo)){
            this.Zip = zipNo;
        }else{
            throw "zip code is incorrect format";
        }
    }

    get phoneNumber(){ return this.PhoneNumber;}
    set phoneNumber(phoneNo){
        let phoneRegex = new RegExp("^[0-9]{2}\s[0-9]{10}$");
        if(phoneRegex.test(phoneNo)){
            this.PhoneNumber = phoneNo;
        }else{
            throw "PhoneNumber is incorrect format";
        }
    }
    get emailValidation(){ return this.Email;}
    set emailValidation(email){
        let emailRegex = new RegExp("^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*");
        if(emailRegex.test(email)){
            this.Email = email;
        }else{
            console.log("Email is incorrect format");
        }
    }
}


