import Proxy from './Proxy';

class TrackProxy extends Proxy {
  /**
   * The constructor for the ArtistProxy.
   *
   * @param {Object} parameters The query parameters.
   */
  constructor(endpoint, parameters = {}) {
    super(endpoint, parameters);
  }

  /**
   * Method used to save tracks.
   *
   * @param {Object} object containing the data of the track.
   *
   * @returns {Promise} The result in a promise.
   */
  save({ payload }) {
    return this.submit('post', `${this.endpoint}/token`, payload);
  }
}

export default TrackProxy;
