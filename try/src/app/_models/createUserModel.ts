
export class createUserModel {
      firstName: String;
         lastName: String;
         age: String;
         gender: String;
         address: String
    

  constructor(init?: Partial<createUserModel>) {
    Object.assign(this, init);
  }
}
