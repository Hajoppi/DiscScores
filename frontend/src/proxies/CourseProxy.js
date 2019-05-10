import Proxy from './Proxy';

class CourseProxy extends Proxy {
  /**
   * The constructor for the CourseProxy.
   *
   * @param {Object} parameters The query parameters.
   */
  constructor(endpoint, parameters = {}) {
    super('courses');
  }
}

export default CourseProxy;
