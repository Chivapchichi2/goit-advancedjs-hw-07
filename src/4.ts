/**
 * Key class
 */
class Key {
  private readonly signature: number;

  constructor() {
    this.signature = Math.random();
  }

  getSignature(): number {
    return this.signature;
  }
}

/**
 * Person class
 */
class Person {
  private readonly key: Key;

  constructor(key: Key) {
    this.key = key;
  }

  getKey(): Key {
    return this.key;
  }
}

/**
 * Abstract House class
 */
abstract class House {
  protected tenants: Person[] = [];

  protected constructor(
    protected door: boolean,
    protected key: Key,
  ) {}

  abstract openDoor(key: Key): void;

  public comeIn(person: Person): void {
    if (this.door) {
      this.tenants.push(person);
      console.log("Person entered the house.");
    } else {
      console.log("The door is closed. Person cannot enter.");
    }
  }
}

/**
 * MyHouse class extends House
 */
class MyHouse extends House {
  constructor(key: Key) {
    super(false, key);
  }

  public openDoor(key: Key): void {
    if (key.getSignature() === this.key.getSignature()) {
      this.door = true;
      console.log("The door is now open.");
    } else {
      console.log("Invalid key. The door remains closed.");
    }
  }
}

/**
 * Test
 */
const key = new Key();
const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());
house.comeIn(person);

export {};
