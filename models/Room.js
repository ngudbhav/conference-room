const uuidv4 = require("../utils/uuid");
const Entity = require('./');
const Booking = require("./Booking");

module.exports = class Room extends Entity {
  constructor(id = uuidv4(), floorId, buildingId) {
    super();
    this.type = 'Room';
    this.id = id;
    this.floorId = floorId;
    this.buildingId = buildingId;
  }

  static bookRoom(buildingId, floorId, id, userId, startTime, endTime) {
    /*
    1. Slot is maximum available for 12 hours.
     */
    const bookings = Booking.list(buildingId, floorId, id);
    if (bookings.length > 0) {
      const numberOfBookings = bookings.filter((booking) => {
        return !(endTime < booking.endTime && endTime > booking.startTime) || (startTime < booking.endTime && startTime > booking.startTime)
      }).length;
      if (numberOfBookings > 0) {
        console.error('Room is already booked');
        return;
      }
    }
    if (endTime - startTime > 12) {
      console.error('Slot is maximum available for 12 hours');
      return;
    }

    const booking = new Booking(
      uuid(),
      buildingId,
      floorId,
      id,
      userId,
      startTime,
      endTime,
    );
    Booking.create(booking);
  }

  static cancelRoomBooking(buildingId, floorId, id, userId, startTime, endTime) {
    const booking = Booking.find(
      buildingId, floorId, id, userId, startTime, endTime,
    );

    if (booking) {
      booking.delete();
    } else {
      console.error('Booking not found');
    }
  }
}
