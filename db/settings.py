import os
import json

__PATH__ = os.path.dirname(__file__)

def get_schema(name):
    schema = os.path.join(__PATH__, 'schema/{}.json'.format(name))
    with open(schema) as fp:
        return json.load(fp)

reports2scores_schema = get_schema('report2scores')
reports2runs_schema = get_schema('report2runs')

common = {
    'cache_control': 'max-age=10,must-revalidate',
    'cache_expires': 10,
    'resource_methods': ['GET', 'POST', 'DELETE'],
}

reports2scores = {
    **common,
    'schema': reports2scores_schema,
}

reports2runs = {
    **common,
    'schema': reports2scores_schema,
}

DOMAIN = {
    'report2scores': reports2scores,
    'report2runs': reports2runs,
}

MONGO_HOST = 'db'
MONGO_PORT = 27017
MONGO_DBNAME = 'clinvap_net'

QUERY_MAX_RESULTS = 1000
PAGINATION = False
