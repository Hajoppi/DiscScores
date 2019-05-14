/* ============
 * Actions for the account module
 * ============
 *
 * The actions that are available on the
 * account module.
 */

import Transformer from '/transformers/AccountTransformer';
import Proxy from '/proxies/Proxy';
import * as types from './mutation-types';

export const find = ({ commit }) => {
    new Proxy('account').all()
     .then((response) => {
       commit(types.FIND, Transformer.fetch(response));
     })
     .catch(() => {
       console.error('Request failed...');
     });
};

export default {
  find,
};
