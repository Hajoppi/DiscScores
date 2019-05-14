/* ============
 * Group Transformer
 * ============
 *
 * The transformer for the Group.
 */

import Transformer from './Transformer';

export default class GroupTransformer extends Transformer {
  /**
   * Method used to transform a fetched Group.
   *
   * @param Group The fetched Group.
   *
   * @returns {Object} The transformed Group.
   */
  static fetch(group) {
    return {
      id: group.id,
      name: group.group_name,
      members: group.members,
    };
  }

  /**
   * Method used to transform a send Group.
   *
   * @param Group The Group to be send.
   *
   * @returns {Object} The transformed Group.
   */
  static send(group) {
    return {
      group_name: group.name,
    };
  }
}
