/* ============
 * Getters for the course module
 * ============
 *
 * The getters that are available on the
 * course module.
 */

export default {
    get: (state) => (id) => {
        for(let i = 0; i < state.courses.length; i += 1) {
            if(state.courses[i].id === id) {
                return state.courses[i];
            }
        }
        return 0;
    },
};
