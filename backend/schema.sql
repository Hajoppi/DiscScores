/*
  Schema
*/

create table courses (
  id serial not null primary key,
  course_name TEXT NOT null,
  holes integer[] NOT null
);

create table users (
  id serial NOT null primary key,
  email TEXT UNIQUE NOT null,
  username TEXT NOT null,
  firstname TEXT NOT null,
  lastname TEXT NOT null,
  password TEXT NOT null
);

INSERT INTO courses (course_name, holes) VALUES ('puolarmaari', ARRAY[3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3]);