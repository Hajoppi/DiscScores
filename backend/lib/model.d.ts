import * as $protobuf from "protobufjs";
/** Namespace ds. */
export namespace ds {

    /** Properties of a Hole. */
    interface IHole {

        /** Hole par */
        par?: (number|null);
    }

    /** Represents a Hole. */
    class Hole implements IHole {

        /**
         * Constructs a new Hole.
         * @param [properties] Properties to set
         */
        constructor(properties?: ds.IHole);

        /** Hole par. */
        public par: number;

        /**
         * Creates a new Hole instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Hole instance
         */
        public static create(properties?: ds.IHole): ds.Hole;

        /**
         * Encodes the specified Hole message. Does not implicitly {@link ds.Hole.verify|verify} messages.
         * @param message Hole message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ds.IHole, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Hole message, length delimited. Does not implicitly {@link ds.Hole.verify|verify} messages.
         * @param message Hole message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ds.IHole, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Hole message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Hole
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ds.Hole;

        /**
         * Decodes a Hole message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Hole
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ds.Hole;

        /**
         * Verifies a Hole message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Hole message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Hole
         */
        public static fromObject(object: { [k: string]: any }): ds.Hole;

        /**
         * Creates a plain object from a Hole message. Also converts values to other types if specified.
         * @param message Hole
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ds.Hole, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Hole to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Course. */
    interface ICourse {

        /** Course id */
        id?: (string|null);

        /** Course name */
        name?: (string|null);

        /** Course holes */
        holes?: (ds.IHole[]|null);
    }

    /** Represents a Course. */
    class Course implements ICourse {

        /**
         * Constructs a new Course.
         * @param [properties] Properties to set
         */
        constructor(properties?: ds.ICourse);

        /** Course id. */
        public id: string;

        /** Course name. */
        public name: string;

        /** Course holes. */
        public holes: ds.IHole[];

        /**
         * Creates a new Course instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Course instance
         */
        public static create(properties?: ds.ICourse): ds.Course;

        /**
         * Encodes the specified Course message. Does not implicitly {@link ds.Course.verify|verify} messages.
         * @param message Course message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ds.ICourse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Course message, length delimited. Does not implicitly {@link ds.Course.verify|verify} messages.
         * @param message Course message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ds.ICourse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Course message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Course
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ds.Course;

        /**
         * Decodes a Course message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Course
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ds.Course;

        /**
         * Verifies a Course message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Course message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Course
         */
        public static fromObject(object: { [k: string]: any }): ds.Course;

        /**
         * Creates a plain object from a Course message. Also converts values to other types if specified.
         * @param message Course
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ds.Course, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Course to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BatchCourses. */
    interface IBatchCourses {

        /** BatchCourses courses */
        courses?: (ds.ICourse[]|null);
    }

    /** Represents a BatchCourses. */
    class BatchCourses implements IBatchCourses {

        /**
         * Constructs a new BatchCourses.
         * @param [properties] Properties to set
         */
        constructor(properties?: ds.IBatchCourses);

        /** BatchCourses courses. */
        public courses: ds.ICourse[];

        /**
         * Creates a new BatchCourses instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BatchCourses instance
         */
        public static create(properties?: ds.IBatchCourses): ds.BatchCourses;

        /**
         * Encodes the specified BatchCourses message. Does not implicitly {@link ds.BatchCourses.verify|verify} messages.
         * @param message BatchCourses message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ds.IBatchCourses, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BatchCourses message, length delimited. Does not implicitly {@link ds.BatchCourses.verify|verify} messages.
         * @param message BatchCourses message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ds.IBatchCourses, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BatchCourses message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BatchCourses
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ds.BatchCourses;

        /**
         * Decodes a BatchCourses message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BatchCourses
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ds.BatchCourses;

        /**
         * Verifies a BatchCourses message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BatchCourses message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BatchCourses
         */
        public static fromObject(object: { [k: string]: any }): ds.BatchCourses;

        /**
         * Creates a plain object from a BatchCourses message. Also converts values to other types if specified.
         * @param message BatchCourses
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ds.BatchCourses, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BatchCourses to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Represents a Courses */
    class Courses extends $protobuf.rpc.Service {

        /**
         * Constructs a new Courses service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Creates new Courses service using the specified rpc implementation.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         * @returns RPC service. Useful where requests and/or responses are streamed.
         */
        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): Courses;

        /**
         * Calls GetHoles.
         * @param request Course message or plain object
         * @param callback Node-style callback called with the error, if any, and BatchCourses
         */
        public getHoles(request: ds.ICourse, callback: ds.Courses.GetHolesCallback): void;

        /**
         * Calls GetHoles.
         * @param request Course message or plain object
         * @returns Promise
         */
        public getHoles(request: ds.ICourse): Promise<ds.BatchCourses>;
    }

    namespace Courses {

        /**
         * Callback as used by {@link ds.Courses#getHoles}.
         * @param error Error, if any
         * @param [response] BatchCourses
         */
        type GetHolesCallback = (error: (Error|null), response?: ds.BatchCourses) => void;
    }
}
