interface ModelAttributes<T> {
  set(value: T): void;
}

interface Sync {

}

interface Events {
  on(eventName: string, callback: () => {}): void;
  trigger()
}

export class Model {

}