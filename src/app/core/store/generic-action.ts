export class GenericAction<ActionType, PayloadType> {

  public type: ActionType;
  public payload?: PayloadType;
  constructor(type: ActionType, payload?: PayloadType) {
    this.type = type;
    this.payload = payload;
  }
}
