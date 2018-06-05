/* ============
 * Player Transformer
 * ============
 *
 * The transformer for the player.
 */

import Transformer from './Transformer';

export default class PlayerTransformer extends Transformer {
  /**
   * Method used to transform a fetched player.
   *
   * @param player The fetched player.
   *
   * @returns {Object} The transformed player.
   */
  static fetch(player) {
    return {
      name: player.name,
      holes: player.holes,
    };
  }

  /**
   * Method used to transform a send player.
   *
   * @param player The player to be send.
   *
   * @returns {Object} The transformed player.
   */
  static send(player) {
    return {
      name: player.name,
      holes: player.holes,
    };
  }
}
