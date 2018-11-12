import { Guid } from '@app/shared/models/guid';

export class TODOItem {

    constructor(title: string, description: string, dueDate: string = null) {
        this.id = Guid.newGuid();
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
    }

    id: string;
    title: string;
    description: string;
    dueDate?: string;
    completed?: boolean;
}
