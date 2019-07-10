export class TODOItem {

  public id: string;
  public title: string;
  public description: string;
  public dueDate?: string;
  public completed?: boolean;
  constructor(title: string, description: string, dueDate: string = null) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
  }
}
