import {mockPoints} from '../mock/points.js';

export default class PointsModel {
  tripPoints = mockPoints;

  getTripPoints() {
    return this.tripPoints;
  }
}
