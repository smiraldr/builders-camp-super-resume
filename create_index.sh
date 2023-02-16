#! /bin/bash  
curl -X PUT "http://localhost:9200/candidate-data" -H 'Content-Type: application/json' -d '
{
  "mappings": {
    "properties": {
      "embed": { "type": "nested" },
      "full_name": { "type": "text" },
      "email": { "type": "text" },
      "experience": { "type": "long" },
      "skills": { "type": "text" },
      "job_description": { "type": "text" }
    }
  }
}'