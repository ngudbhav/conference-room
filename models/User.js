const uuidv4 = require('../utils/uuid');
const Entity = require('./');

module.exports = class User extends Entity {
  constructor(id = uuidv4()) {
    super();
    this.type = 'User';
    this.id = id;
  }
}
