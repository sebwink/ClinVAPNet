import os
from eve import Eve

__DEBUG__ = os.getenv('ENV', False)
if __DEBUG__ == 'DEV':
    __DEBUG__ = True

api = Eve()

if __name__ == '__main__':
    api.run(host='0.0.0.0',
            port=5001,
            debug=__DEBUG__)
