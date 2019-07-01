/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.ds = (function() {

    /**
     * Namespace ds.
     * @exports ds
     * @namespace
     */
    var ds = {};

    ds.Hole = (function() {

        /**
         * Properties of a Hole.
         * @memberof ds
         * @interface IHole
         * @property {number|null} [par] Hole par
         */

        /**
         * Constructs a new Hole.
         * @memberof ds
         * @classdesc Represents a Hole.
         * @implements IHole
         * @constructor
         * @param {ds.IHole=} [properties] Properties to set
         */
        function Hole(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Hole par.
         * @member {number} par
         * @memberof ds.Hole
         * @instance
         */
        Hole.prototype.par = 0;

        /**
         * Creates a new Hole instance using the specified properties.
         * @function create
         * @memberof ds.Hole
         * @static
         * @param {ds.IHole=} [properties] Properties to set
         * @returns {ds.Hole} Hole instance
         */
        Hole.create = function create(properties) {
            return new Hole(properties);
        };

        /**
         * Encodes the specified Hole message. Does not implicitly {@link ds.Hole.verify|verify} messages.
         * @function encode
         * @memberof ds.Hole
         * @static
         * @param {ds.IHole} message Hole message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Hole.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.par != null && message.hasOwnProperty("par"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.par);
            return writer;
        };

        /**
         * Encodes the specified Hole message, length delimited. Does not implicitly {@link ds.Hole.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ds.Hole
         * @static
         * @param {ds.IHole} message Hole message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Hole.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Hole message from the specified reader or buffer.
         * @function decode
         * @memberof ds.Hole
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ds.Hole} Hole
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Hole.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ds.Hole();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.par = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Hole message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ds.Hole
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ds.Hole} Hole
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Hole.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Hole message.
         * @function verify
         * @memberof ds.Hole
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Hole.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.par != null && message.hasOwnProperty("par"))
                if (!$util.isInteger(message.par))
                    return "par: integer expected";
            return null;
        };

        /**
         * Creates a Hole message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ds.Hole
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ds.Hole} Hole
         */
        Hole.fromObject = function fromObject(object) {
            if (object instanceof $root.ds.Hole)
                return object;
            var message = new $root.ds.Hole();
            if (object.par != null)
                message.par = object.par | 0;
            return message;
        };

        /**
         * Creates a plain object from a Hole message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ds.Hole
         * @static
         * @param {ds.Hole} message Hole
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Hole.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.par = 0;
            if (message.par != null && message.hasOwnProperty("par"))
                object.par = message.par;
            return object;
        };

        /**
         * Converts this Hole to JSON.
         * @function toJSON
         * @memberof ds.Hole
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Hole.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Hole;
    })();

    ds.Course = (function() {

        /**
         * Properties of a Course.
         * @memberof ds
         * @interface ICourse
         * @property {string|null} [id] Course id
         * @property {string|null} [name] Course name
         * @property {Array.<ds.IHole>|null} [holes] Course holes
         */

        /**
         * Constructs a new Course.
         * @memberof ds
         * @classdesc Represents a Course.
         * @implements ICourse
         * @constructor
         * @param {ds.ICourse=} [properties] Properties to set
         */
        function Course(properties) {
            this.holes = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Course id.
         * @member {string} id
         * @memberof ds.Course
         * @instance
         */
        Course.prototype.id = "";

        /**
         * Course name.
         * @member {string} name
         * @memberof ds.Course
         * @instance
         */
        Course.prototype.name = "";

        /**
         * Course holes.
         * @member {Array.<ds.IHole>} holes
         * @memberof ds.Course
         * @instance
         */
        Course.prototype.holes = $util.emptyArray;

        /**
         * Creates a new Course instance using the specified properties.
         * @function create
         * @memberof ds.Course
         * @static
         * @param {ds.ICourse=} [properties] Properties to set
         * @returns {ds.Course} Course instance
         */
        Course.create = function create(properties) {
            return new Course(properties);
        };

        /**
         * Encodes the specified Course message. Does not implicitly {@link ds.Course.verify|verify} messages.
         * @function encode
         * @memberof ds.Course
         * @static
         * @param {ds.ICourse} message Course message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Course.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && message.hasOwnProperty("id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            if (message.name != null && message.hasOwnProperty("name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            if (message.holes != null && message.holes.length)
                for (var i = 0; i < message.holes.length; ++i)
                    $root.ds.Hole.encode(message.holes[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Course message, length delimited. Does not implicitly {@link ds.Course.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ds.Course
         * @static
         * @param {ds.ICourse} message Course message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Course.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Course message from the specified reader or buffer.
         * @function decode
         * @memberof ds.Course
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ds.Course} Course
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Course.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ds.Course();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    if (!(message.holes && message.holes.length))
                        message.holes = [];
                    message.holes.push($root.ds.Hole.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Course message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ds.Course
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ds.Course} Course
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Course.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Course message.
         * @function verify
         * @memberof ds.Course
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Course.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.holes != null && message.hasOwnProperty("holes")) {
                if (!Array.isArray(message.holes))
                    return "holes: array expected";
                for (var i = 0; i < message.holes.length; ++i) {
                    var error = $root.ds.Hole.verify(message.holes[i]);
                    if (error)
                        return "holes." + error;
                }
            }
            return null;
        };

        /**
         * Creates a Course message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ds.Course
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ds.Course} Course
         */
        Course.fromObject = function fromObject(object) {
            if (object instanceof $root.ds.Course)
                return object;
            var message = new $root.ds.Course();
            if (object.id != null)
                message.id = String(object.id);
            if (object.name != null)
                message.name = String(object.name);
            if (object.holes) {
                if (!Array.isArray(object.holes))
                    throw TypeError(".ds.Course.holes: array expected");
                message.holes = [];
                for (var i = 0; i < object.holes.length; ++i) {
                    if (typeof object.holes[i] !== "object")
                        throw TypeError(".ds.Course.holes: object expected");
                    message.holes[i] = $root.ds.Hole.fromObject(object.holes[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a Course message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ds.Course
         * @static
         * @param {ds.Course} message Course
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Course.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.holes = [];
            if (options.defaults) {
                object.id = "";
                object.name = "";
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.holes && message.holes.length) {
                object.holes = [];
                for (var j = 0; j < message.holes.length; ++j)
                    object.holes[j] = $root.ds.Hole.toObject(message.holes[j], options);
            }
            return object;
        };

        /**
         * Converts this Course to JSON.
         * @function toJSON
         * @memberof ds.Course
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Course.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Course;
    })();

    ds.BatchCourses = (function() {

        /**
         * Properties of a BatchCourses.
         * @memberof ds
         * @interface IBatchCourses
         * @property {Array.<ds.ICourse>|null} [courses] BatchCourses courses
         */

        /**
         * Constructs a new BatchCourses.
         * @memberof ds
         * @classdesc Represents a BatchCourses.
         * @implements IBatchCourses
         * @constructor
         * @param {ds.IBatchCourses=} [properties] Properties to set
         */
        function BatchCourses(properties) {
            this.courses = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BatchCourses courses.
         * @member {Array.<ds.ICourse>} courses
         * @memberof ds.BatchCourses
         * @instance
         */
        BatchCourses.prototype.courses = $util.emptyArray;

        /**
         * Creates a new BatchCourses instance using the specified properties.
         * @function create
         * @memberof ds.BatchCourses
         * @static
         * @param {ds.IBatchCourses=} [properties] Properties to set
         * @returns {ds.BatchCourses} BatchCourses instance
         */
        BatchCourses.create = function create(properties) {
            return new BatchCourses(properties);
        };

        /**
         * Encodes the specified BatchCourses message. Does not implicitly {@link ds.BatchCourses.verify|verify} messages.
         * @function encode
         * @memberof ds.BatchCourses
         * @static
         * @param {ds.IBatchCourses} message BatchCourses message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BatchCourses.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.courses != null && message.courses.length)
                for (var i = 0; i < message.courses.length; ++i)
                    $root.ds.Course.encode(message.courses[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified BatchCourses message, length delimited. Does not implicitly {@link ds.BatchCourses.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ds.BatchCourses
         * @static
         * @param {ds.IBatchCourses} message BatchCourses message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BatchCourses.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BatchCourses message from the specified reader or buffer.
         * @function decode
         * @memberof ds.BatchCourses
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ds.BatchCourses} BatchCourses
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BatchCourses.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ds.BatchCourses();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.courses && message.courses.length))
                        message.courses = [];
                    message.courses.push($root.ds.Course.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BatchCourses message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ds.BatchCourses
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ds.BatchCourses} BatchCourses
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BatchCourses.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BatchCourses message.
         * @function verify
         * @memberof ds.BatchCourses
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BatchCourses.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.courses != null && message.hasOwnProperty("courses")) {
                if (!Array.isArray(message.courses))
                    return "courses: array expected";
                for (var i = 0; i < message.courses.length; ++i) {
                    var error = $root.ds.Course.verify(message.courses[i]);
                    if (error)
                        return "courses." + error;
                }
            }
            return null;
        };

        /**
         * Creates a BatchCourses message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ds.BatchCourses
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ds.BatchCourses} BatchCourses
         */
        BatchCourses.fromObject = function fromObject(object) {
            if (object instanceof $root.ds.BatchCourses)
                return object;
            var message = new $root.ds.BatchCourses();
            if (object.courses) {
                if (!Array.isArray(object.courses))
                    throw TypeError(".ds.BatchCourses.courses: array expected");
                message.courses = [];
                for (var i = 0; i < object.courses.length; ++i) {
                    if (typeof object.courses[i] !== "object")
                        throw TypeError(".ds.BatchCourses.courses: object expected");
                    message.courses[i] = $root.ds.Course.fromObject(object.courses[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a BatchCourses message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ds.BatchCourses
         * @static
         * @param {ds.BatchCourses} message BatchCourses
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BatchCourses.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.courses = [];
            if (message.courses && message.courses.length) {
                object.courses = [];
                for (var j = 0; j < message.courses.length; ++j)
                    object.courses[j] = $root.ds.Course.toObject(message.courses[j], options);
            }
            return object;
        };

        /**
         * Converts this BatchCourses to JSON.
         * @function toJSON
         * @memberof ds.BatchCourses
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BatchCourses.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BatchCourses;
    })();

    ds.Courses = (function() {

        /**
         * Constructs a new Courses service.
         * @memberof ds
         * @classdesc Represents a Courses
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function Courses(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (Courses.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = Courses;

        /**
         * Creates new Courses service using the specified rpc implementation.
         * @function create
         * @memberof ds.Courses
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {Courses} RPC service. Useful where requests and/or responses are streamed.
         */
        Courses.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };

        /**
         * Callback as used by {@link ds.Courses#getHoles}.
         * @memberof ds.Courses
         * @typedef GetHolesCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {ds.BatchCourses} [response] BatchCourses
         */

        /**
         * Calls GetHoles.
         * @function getHoles
         * @memberof ds.Courses
         * @instance
         * @param {ds.ICourse} request Course message or plain object
         * @param {ds.Courses.GetHolesCallback} callback Node-style callback called with the error, if any, and BatchCourses
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Courses.prototype.getHoles = function getHoles(request, callback) {
            return this.rpcCall(getHoles, $root.ds.Course, $root.ds.BatchCourses, request, callback);
        }, "name", { value: "GetHoles" });

        /**
         * Calls GetHoles.
         * @function getHoles
         * @memberof ds.Courses
         * @instance
         * @param {ds.ICourse} request Course message or plain object
         * @returns {Promise<ds.BatchCourses>} Promise
         * @variation 2
         */

        return Courses;
    })();

    return ds;
})();

module.exports = $root;
