interface ModelAttributes<T> {
  set(value: T): void;
  getAll(): T;
  get<K extends keyof T>(key: K): T[K];
}

interface Sync {

}

interface Events {
  on(eventName: string, callback: () => {}): void;
  trigger()
}

export class Model {

}