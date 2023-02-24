from .base import *

if os.environ['DJANGO_SETTINGS_MODULE'] == 'small_repo.settings.production':
    from .production import *
else:
    from .local import *
