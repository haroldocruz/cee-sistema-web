export interface IParticipant {
  name: string;
  phone?: string;
  email: string;
  secretFriend?: IParticipant;
  message?: { isOk: boolean, message: string }
}

export class Participant implements IParticipant {

  name; phone; email; secretFriend;

  constructor(p: IParticipant);
  constructor(public p?: IParticipant) {
    this.name = p.name;
    this.phone = p.phone;
    this.email = p.email;
    this.secretFriend = p.secretFriend;
  }

}
