/* ============
 * Track Transformer
 * ============
 *
 * The transformer for the track.
 */

import Transformer from './Transformer';

export default class TrackTransformer extends Transformer {
  /**
   * Method used to transform a fetched track.
   *
   * @param track The fetched track.
   *
   * @returns {Object} The transformed track.
   */
  static fetch(track) {
    return {
      name: track.name,
      holes: track.holes,
    };
  }

  /**
   * Method used to transform a send track.
   *
   * @param track The track to be send.
   *
   * @returns {Object} The transformed track.
   */
  static send(track) {
    return {
      name: track.name,
      holes: track.holes,
    };
  }
}
