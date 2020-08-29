import { IUsers } from '../../interfaces/user.interface';

export class Users implements IUsers {
    name: string;
    email: string;
    password: string;
}
