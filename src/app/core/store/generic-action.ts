export class GenericAction<ActionType, PayloadType> {
  constructor(type: ActionType, payload?: PayloadType) {
    this.type = type;
    this.payload = payload;
  }

  type: ActionType;
  payload?: PayloadType;
}
