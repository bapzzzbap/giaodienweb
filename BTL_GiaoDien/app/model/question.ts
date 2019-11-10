import { Option } from './option';

export class Question {
    Id: number;
    Text: string;
    Marks: number;
    AnswerId:number
    options: Option[];
    answered: boolean;

    constructor(data: any) {
        data = data || {};
        this.Id = data.Id;
        this.Text = data.Text;
        this.AnswerId = data.Id;
        this.options = [];
        data.options.forEach(o => {
            this.options.push(new Option(o));
        });
    }
}
