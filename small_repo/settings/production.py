from .base import *


SECRET_KEY = os.environ['SECRET_KEY']

# do not allow users to debug in production
# Todo: set this to false when deploying for production
DEBUG = True

# all allowed public urls
ALLOWED_HOSTS = ["*"]

# Todo: set up postgresql database
# post gresql production database
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),
    }
}

import django_heroku
django_heroku.settings(locals())
