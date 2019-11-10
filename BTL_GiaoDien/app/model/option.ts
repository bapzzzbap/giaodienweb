export class Option {
    Id: number;
    Text: string;
    selected: boolean;

    constructor(data: any) {
        data = data || {};
        this.Id = data.Id;
        this.Text = data.Text;
        this.selected = data.selected;
    }
}
