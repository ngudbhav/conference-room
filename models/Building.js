const uuidv4 = require('../utils/uuid');
const Entity = require('./');
const Floor = require('./Floor');

module.exports = class Building extends Entity {
  constructor(id = uuidv4()) {
    super();
    this.type = 'Building';
    this.id = id;
  }

  static addFloor(building, floorId) {
    const floor = new Floor(floorId, building.id);
    Floor.create(floor);
  }
}
