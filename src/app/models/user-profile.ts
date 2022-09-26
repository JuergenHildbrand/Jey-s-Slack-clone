export class User {
    uid: string;
    email: string;
    firstName: string;
    lastName: string;
    street: string;
    zipCode: number;
    city: string;
    birthDay: string;
    photoURL: string;
    message:string
    displayName: string;

    constructor(obj?: any) {
        this.firstName = obj ? obj.firstName : '';
        this.lastName = obj ? obj.lastName : '';
        this.street = obj ? obj.street : '';
        this.zipCode = obj ? obj.zipCode : '';
        this.city = obj ? obj.city : '';
        this.birthDay = obj ? obj.birthDay : '';
    }
  }