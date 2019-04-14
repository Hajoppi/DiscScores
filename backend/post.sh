curl --header "Content-Type: application/json" \
  --request POST \
  --data '{"course_name":"test","holes":[3, 5, 4, 3, 4, 5, 5, 3, 3]}' \
  http://localhost:3001/courses