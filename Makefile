build:
	docker build . -t deregnet_scores/clinvap_score_api

build-no-cache:
	docker build . -t deregnet_scores/clinvap_score_api --no-cache
