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
          ("RSS", SITEURL + "/feeds/all.atom.xml"),
          )

DEFAULT_PAGINATION = 10

# Uncomment following line if you want document-relative URLs when developing
#RELATIVE_URLS = True


THEME = 'themes/elegant'


PLUGIN_PATHS = ['plugins']
PLUGINS = ['tipue_search', 'neighbors', 'related_posts', 'share_post']
DIRECT_TEMPLATES = ['index', 'categories', 'tags', 'archives', 'search', '404']

UTTERANCES_REPO='asierrayk/asierrayk.github.io'
UTTERANCES_THEME='github-light'
UTTERANCES_FILTER=False

APPLAUSE_BUTTON=True

# CLEAN URL
TAGS_URL = "tags"
CATEGORIES_URL = "categories"
ARCHIVES_URL = "archives"

ARTICLE_URL = "{slug}"
PAGE_URL = "{slug}"
PAGE_SAVE_AS = "{slug}.html"
SEARCH_URL = "search"

# LABELS
RELATED_POSTS_LABEL = 'Contenido relacionado'
SOCIAL_PROFILE_LABEL = 'Contact'
PROJECTS_TITLE = 'Mis Proyectos'
COMMENTS_INTRO = ''
# Thumbnail image to show when homepage is shared on social media. It also
# serves as the default image for posts whose featured_image is not set.
FEATURED_IMAGE = ''
# License of your site that appears in the footer of every page
SITE_LICENSE = ''
# Description of your site. It is used in meta tags so it will appear in
# search results and social media
SITE_DESCRIPTION = ''

# It is displayed along with the SITENAME in the footer of every page
SITESUBTITLE = ''

# Set it to True to display favicon and speed dial icon. Also make sure that
# you have placed images in the appropriate directory and defined STATIC_PATHS
# accordingly
USE_SHORTCUT_ICONS = False

PROJECTS = [{
    'name': 'Logpad + Duration',
    'url': 'https://github.com/talha131/logpad-plus-duration#logpad--duration',
    'description': 'Vim plugin to emulate Windows Notepad logging feature,'
    ' and log duration of each entry'},
    {'name': 'Elegant Theme for Pelican',
    'url': 'http://oncrashreboot.com/pelican-elegant',
    'description': 'A clean and distraction free theme, with search and a'
    ' lot more unique features, using Jinja2 and Bootstrap'}]
PROJECTS = ''

