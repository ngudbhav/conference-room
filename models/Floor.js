const uuidv4 = require("../utils/uuid");
const Entity = require('./');
const Room = require("./Room");

module.exports = class Floor extends Entity {
  constructor(id = uuidv4(), buildingId) {
    super();
    this.type = 'Floor';
    this.id = id;
    this.buildingId = buildingId;
  }

  static addRoom(buildingId, floorId, roomId) {
    const room = new Room(roomId, floorId, buildingId);
    Room.create(room);
  }
}
