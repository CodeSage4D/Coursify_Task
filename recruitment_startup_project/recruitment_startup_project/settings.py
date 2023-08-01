# settings.py

# Add the following lines at the top of the file
import os

# Database configuration
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'your_mysql_db_name',
        'USER': 'your_mysql_db_user',
        'PASSWORD': 'your_mysql_db_password',
        'HOST': 'localhost',
        'PORT': '',
    }
}

# Modify the existing DATABASES configuration if you already have one.
# Update the NAME, USER, and PASSWORD with your MySQL database credentials.

# Continue with the rest of the settings...
