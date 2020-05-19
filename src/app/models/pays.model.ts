import { Deserializable } from './deserializable.model';

export class Pays implements Deserializable {

    id: number;
    libelle: string;
    code_telephonique: string;
    is_delete: boolean;

    deserialize(input: any): this {
        Object.assign(this, input);
        return this;
    }
}
