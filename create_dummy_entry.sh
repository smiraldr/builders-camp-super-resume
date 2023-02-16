#! /bin/bash  
curl -X POST "http://localhost:9200/candidate-data/_doc" -H 'Content-Type: application/json' -d '
{
  "embed": [],
  "full_name": "John Doe",
  "email": "john.doe@example.com",
  "experience": 5,
  "skills": "Python, Java",
  "job_description": "Full-stack developer with experience building web applications."
}'