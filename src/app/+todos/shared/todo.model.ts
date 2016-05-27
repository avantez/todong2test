export class Todo {
  private _title: string;
  isCompleted: boolean;
  editMode: boolean = false;

  constructor(input: string);
  constructor(input: { _title: string, isCompleted: boolean });
  constructor(input?: any) {
    this._title = input._title || input;
    this.isCompleted = input.isCompleted || false;
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
