export class Todo {
  private _title: string;
  isCompleted: boolean = false;

  constructor(title: string) {
    this._title = title;
  }

  get title(): string {
    return this._title;
  }

  set title(newTitle: string) {
    this._title = newTitle.trim();
  }
}
