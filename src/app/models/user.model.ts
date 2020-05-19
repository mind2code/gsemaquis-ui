import { Deserializable } from './deserializable.model';

export class User implements Deserializable {

    id: number;
    firstName: string;
    lastName: string;
    email: string;
    telephone: string;
    token: string;

    deserialize(input: any): this {
        Object.assign(this, input);
        return this;
    }

}
