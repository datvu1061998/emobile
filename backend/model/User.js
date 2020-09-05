class User{
    constructor(   
        firstName,
        lastName,
        email,
        phone,
        birthday,
        address,
    ){
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phone = Number(phone);
        this.birthday = Date(birthday);
        this.address = address;
    }  
}

module.exports = User;