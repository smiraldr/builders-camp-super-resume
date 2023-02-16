# builders-camp-super-resume

Built for Builders Camp Hackathon 2023

To run this project run the following commands

### Build and run on localhost
To spin up a local elasticsearch cluster and frontend for the application
Run the following:
```bash
docker-compose up
```

After the elasticsearch cluster is up - create an index for storing the input data from frontend.
Run the following commands:
```bash
sudo chmod +x create_index.sh
./create_index.sh  
```

### Packages and tools to make stuff easy !
[Elasticsearch GUI Web Extension](https://chrome.google.com/webstore/detail/elasticvue/hkedbapjpblbodpgbajblpnlpenaebaa?hl=en) - lightweight extension used to interact with elasticsearch <br>
[Intel Transformers Optimization Python SDK](https://github.com/intel/intel-extension-for-transformers) - Intel Python SDK to optimize and accelerate performance on Intel CPUs <br>
[Intel Pytorch Optimization Python SDK](https://github.com/intel/intel-extension-for-pytorch) - Intel Python SDK to optimize and accelerate performance on Intel CPUs for inference<br>


## NOTE
Due to challenges with building a fully performant application within time limit on Intel powered machines ( we used mac as our dev machines :") ) - the code for model inference was run on jupter notebooks on (Intel Dev Cloud)[https://jupyter.oneapi.devcloud.intel.com/] which have been included in the repositories. In ideal scenario we would have created an api for the embedding and ranking logic which would be called through frontend on events like upload resume and upload job description. The final algorithm was tested and derived in the limited time of hackathon.

## Project Presentation link:
[Presentation](https://docs.google.com/presentation/d/1u6hiRiW8ikNjFJkNsNWLTQ6TlrmfJ2j2k2h3LWu5AwU/edit?usp=sharing)
