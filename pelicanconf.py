#!/usr/bin/env python
# -*- coding: utf-8 -*- #
from __future__ import unicode_literals

AUTHOR = 'Asier Cardoso Sánchez'
SITENAME = 'Blog de Asier'
SITEURL = ''

PATH = 'content'

TIMEZONE = 'Europe/Paris'

DEFAULT_LANG = 'es'

# Feed generation is usually not desired when developing
FEED_ALL_ATOM = None
CATEGORY_FEED_ATOM = None
TRANSLATION_FEED_ATOM = None
AUTHOR_FEED_ATOM = None
AUTHOR_FEED_RSS = None

# Blogroll
LINKS = ()

# Social widget
SOCIAL = (('Github', 'https://github.com/asierrayk'),
          ('Youtube', 'https://www.youtube.com/channel/UCNxp1vvT6VHRK4YeB8pr8LA'),
          ('LinkedIn', 'https://www.linkedin.com/in/asier-cardoso-s%C3%A1nchez-7b90a8124/'),
          )

DEFAULT_PAGINATION = 10

# Uncomment following line if you want document-relative URLs when developing
#RELATIVE_URLS = True


THEME = 'themes/elegant'


PLUGIN_PATHS = ['plugins']
PLUGINS = ['tipue_search']


DISQUS_SITENAME = 'blogdeasier'

