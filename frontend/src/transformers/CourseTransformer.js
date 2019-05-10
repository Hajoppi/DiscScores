/* ============
 * Course Transformer
 * ============
 *
 * The transformer for the Course.
 */

import Transformer from './Transformer';

export default class CourseTransformer extends Transformer {
  /**
   * Method used to transform a fetched Course.
   *
   * @param Course The fetched Course.
   *
   * @returns {Object} The transformed Course.
   */
  static fetch(course) {
    return {
      id: course.id,
      name: course.course_name,
      holes: course.holes,
    };
  }

  /**
   * Method used to transform a send Course.
   *
   * @param Course The Course to be send.
   *
   * @returns {Object} The transformed Course.
   */
  static send(course) {
    return {
      course_name: course.name,
      holes: course.holes,
    };
  }
}
