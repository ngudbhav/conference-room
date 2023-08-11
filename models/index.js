/*
Array of objects
 */
const DB = {};

class Entity {
  constructor() {}

  static create(entity) {
    if (DB[entity.type]) {
      DB[entity.type].push(entity);
    } else {
      DB[entity.type] = [entity];
    }
  }

  static find(...args) {
    if (DB[this.constructor.name]?.length >= 0) {
      return DB[this.constructor.name].filter((entity) => {
        return args.every((arg) => {
          return entity[arg] === args[arg];
        });
      })[0];
    } else {
      return null;
    }
  }

/*
 {id: 1}
 */
  static list(args) {
    if (DB[this.constructor.name]?.length >= 0) {
      return DB[this.constructor.name].filter((entity) => {
        return Object.keys(args).every((argKey) => {
          return entity[argKey] == args[argKey];
        });
      });
    } else {
      return null;
    }
  }

  delete() {
    DB[this.constructor.name] = DB[this.constructor.name].filter((entity) => {
      return entity.id !== this.id;
    });
  }
}
