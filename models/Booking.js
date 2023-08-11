const Entity = require('./');

module.exports = class Booking extends Entity{
  constructor(id, buildingId, floorId, roomId, userId, start, end) {
    super();
    this.type = 'Booking';
    this.id = id;
    this.buildingId = buildingId;
    this.floorId = floorId;
    this.roomId = roomId;
    this.userId = userId;
    this.start = start;
    this.end = end;
  }
}
