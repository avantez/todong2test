export class Todo {
  private _title: string;
  isCompleted: boolean = false;
  editMode: boolean = false;

  constructor(title: string) {
    this._title = title;
  }

  get title(): string {
    return this._title;
  }

  set title(newTitle: string) {
    let value = newTitle.trim();
    if (value) {
      this._title = value;
    }
  }
}
