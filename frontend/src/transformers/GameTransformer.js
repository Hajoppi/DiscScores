/* ============
 * Game Transformer
 * ============
 *
 * The transformer for the Game.
 */

import Transformer from './Transformer';

export default class GameTransformer extends Transformer {
  /**
   * Method used to transform a fetched Game.
   *
   * @param Game The fetched Game.
   *
   * @returns {Object} The transformed Game.
   */
  static fetch(game) {
    return {
      courseName: game.courseName,
      playerScores: game.playerScores,
      date: game.played,
    };
  }

  /**
   * Method used to transform a send Game.
   *
   * @param Game The Game to be send.
   *
   * @returns {Object} The transformed Game.
   */
  static send(game) {
    return {
      users: game.users,
      course: game.course,
    };
  }
}
