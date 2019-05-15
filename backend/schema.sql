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

create table past_games(
  id serial NOT null primary key,
  courses_id int references courses(id),
  played timestamp with time zone not null default now()
);

create table users_in_past_games(
  id serial NOT null,
  past_game_id int references past_games(id) ON DELETE CASCADE;
  user_id int references users(id);
  record integer[] NOT null;
  primary key (past_game_id, user_id);
);

INSERT INTO courses (course_name, holes) VALUES ('puolarmaari', ARRAY[3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3]);