interface ModelAttributes {

}

interface Sync {

}

interface Events {
  on(eventName: string, callback: () => {}): void;
  trigger()
}

export class Model {

}