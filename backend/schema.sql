/*
  Schema
*/

create table courses (
  id serial not null primary key,
  course_name TEXT NOT null,
  holes integer[] NOT null
);

INSERT INTO courses (course_name, holes) VALUES ('puolarmaari', ARRAY[3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3]);