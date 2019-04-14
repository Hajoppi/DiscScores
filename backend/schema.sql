/*
  Schema
*/

create table courses (
  id serial not null primary key,
  course_name TEXT NOT null
);

create table holes (
  course INTEGER REFERENCES courses(id),
  hole_number INTEGER not null,
  par INTEGER not null,
  PRIMARY KEY (hole_number, course)
);

INSERT INTO courses (course_name) VALUES ('puolarmaari');

INSERT INTO holes (course, hole_number, par) 
VALUES
  (1,1,3),
  (1,2,3),
  (1,3,3),
  (1,4,3),
  (1,5,3),
  (1,6,3),
  (1,7,3),
  (1,8,3),
  (1,9,3),
  (1,10,3),
  (1,11,3),
  (1,12,3),
  (1,13,3),
  (1,14,3),
  (1,15,3),
  (1,16,3),
  (1,17,3),
  (1,18,3),
  (1,19,3),
  (1,20,3);
