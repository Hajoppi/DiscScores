/* ============
 * Account Transformer
 * ============
 *
 * The transformer for the account.
 */

import Transformer from './Transformer';

export default class AccountTransformer extends Transformer {
  /**
   * Method used to transform a fetched account.
   *
   * @param account The fetched account.
   *
   * @returns {Object} The transformed account.
   */
  static fetch(account) {
    return {
      email: account.email,
      firstName: account.firstname,
      lastName: account.lastname,
    };
  }

  /**
   * Method used to transform a send account.
   *
   * @param account The account to be send.
   *
   * @returns {Object} The transformed account.
   */
  static send(account) {
    return {
      email: account.email,
      firstname: account.firstName,
      lastname: account.lastName,
      username: account.username,
      password: account.password,
    };
  }
}
