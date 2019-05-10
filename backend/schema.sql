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

create table groups(
  id serial NOT null primary key,
  group_name TEXT unique NOT NULL
);

create table users_in_groups(
  id serial NOT null,
  users_id int references users(id) ON DELETE CASCADE,
  groups_id int references groups(id) ON DELETE CASCADE,
  primary key (users_id, groups_id)
);

INSERT INTO courses (course_name, holes) VALUES ('puolarmaari', ARRAY[3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3]);