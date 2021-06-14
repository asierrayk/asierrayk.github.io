#!/usr/bin/env python
# -*- coding: utf-8 -*- #
from __future__ import unicode_literals

AUTHOR = 'Asier Cardoso Sánchez'
SITENAME = 'El Placer de Pensar'
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
          ('Youtube', 'https://www.youtube.com/channel/UCyXCYTXnFcCW6rm4BHMn9CA'),
          ('LinkedIn', 'https://www.linkedin.com/in/asier-cardoso-s%C3%A1nchez-7b90a8124/'),
          ("RSS", SITEURL + "/feeds/all.atom.xml"),
          )

DEFAULT_PAGINATION = 10

# Uncomment following line if you want document-relative URLs when developing
#RELATIVE_URLS = True

TYPOGRIFY = True
THEME = 'elegant'

PAGE_PATHS = ['pages']

PLUGIN_PATHS = ['plugins']
PLUGINS = [
    'tipue_search',
    'neighbors',
    'related_posts',
    'share_post',
    'assets',
    'i18n_subsites',
    'extract_toc',
    'latex',
    'pelican.plugins.render_math',
]
DIRECT_TEMPLATES = [
    'index',
    'categories',
    'tags',
    'archives',
    'search',
    '404'
]

UTTERANCES_REPO='asierrayk/asierrayk.github.io'
UTTERANCES_THEME='github-light'
UTTERANCES_FILTER=False

APPLAUSE_BUTTON=True

USE_FOLDER_AS_CATEGORY = True

# CLEAN URL

TAGS_URL = "tags"
CATEGORIES_URL = "categories"
ARCHIVES_URL = "archives"

SLUGIFY_SOURCE = 'title'
SLUGIFY_PRESERVE_CASE = False

ARTICLE_URL = "{slug}"
DRAFT_URL = 'drafts/{slug}.html'
DRAFT_SAVE_AS = 'drafts/{slug}.html'
DRAFT_PAGE_URL = 'drafts/{slug}.html'
PAGE_URL = "{slug}"
PAGE_SAVE_AS = "{slug}.html"
SEARCH_URL = "search"

# LABELS
LANDING_PAGE_TITLE = 'Asier Cardoso Sánchez'
RELATED_POSTS_LABEL = 'Contenido relacionado'
SOCIAL_PROFILE_LABEL = 'Otras redes'
PROJECTS_TITLE = 'Mis Proyectos'
COMMENTS_INTRO = 'Añade un comentario:'
SHARE_POST_INTRO = 'Compartir en:'
SUBSCRIBE_BUTTON_TITLE  = 'Suscribirse'

# Thumbnail image to show when homepage is shared on social media. It also
# serves as the default image for posts whose featured_image is not set.
FEATURED_IMAGE = 'images/el_placer_de_pensar.jpg'
# License of your site that appears in the footer of every page
SITE_LICENSE = """Content licensed under <a rel="license nofollow noopener noreferrer"
    href="http://creativecommons.org/licenses/by/4.0/" target="_blank">
    Creative Commons Attribution 4.0 International License</a>."""
# Description of your site. It is used in meta tags so it will appear in
# search results and social media
SITE_DESCRIPTION = 'El placer de pensar, blog donde hablo sobre matemáticas, curiosidades, programación, acertijos y rompecabezas. Escrito por Asier Cardoso Sánchez'

# It is displayed along with the SITENAME in the footer of every page
SITESUBTITLE = LANDING_PAGE_TITLE

HOSTED_ON = {
    "name": "GitHub Pages",
    "url": " https://pages.github.com/"
    }

# Set it to True to display favicon and speed dial icon. Also make sure that
# you have placed images in the appropriate directory and defined STATIC_PATHS
# accordingly
USE_SHORTCUT_ICONS = False

PROJECTS = [{
    'name': 'The joy of painting - Bob Ross',
    'url': 'https://asierrayk.github.io/bob-ross/',
    'description': 'Pequeño tributo a Bob Ross y su programa de televisión que es una inspiración para este blog'},
    ]

AUTHORS = {
    "Asier Cardoso Sánchez": {
        "url": SITEURL,
        "blurb": "Matemático e Ingeniero Informático",
        "avatar": "https://avatars.githubusercontent.com/u/12305218?v=4",
    },
}

WITH_FUTURE_DATES = False
DEFAULT_METADATA = {
    'status': 'draft',
}


# MARKDOWN
MARKDOWN = {
    'extension_configs': {
        'markdown.extensions.admonition': {},
        'markdown.extensions.codehilite': {'css_class': 'highlight'},
        'markdown.extensions.extra': {},
        'markdown.extensions.meta': {},
        'markdown.extensions.toc': {},
    },
    'output_format': 'html5',
}

# TRANSLATIONS
LANG = 'es'

# Waiting for this issue to be solved https://github.com/Pelican-Elegant/elegant/issues/139
MENUITEMS = (
    ('Inicio', '/'),
    ('Categorías', '/categories'),
    ('Etiquetas', '/tags'),
    ('Archivos', '/archives'),
)

I18N_SUBSITES = {
    'en': {
        # LABELS
        'THEME': 'themes/elegant',
        'SITENAME': "The joy of thinking",
        'SHARE_POST_INTRO': 'Share on:',
        'COMMENTS_INTRO': 'Add a comment:',
        'SITESUBTITLE': LANDING_PAGE_TITLE,
        'LANDING_PAGE_TITLE': 'Asier Cardoso Sánchez',
        'RELATED_POSTS_LABEL': 'Related content',
        'SOCIAL_PROFILE_LABEL': 'Contact',
        'PROJECTS_TITLE': 'My projects',
        'SUBSCRIBE_BUTTON_TITLE': 'Subscribe',

        # CLEAN URL
        'TAGS_URL': "tags",
        'CATEGORIES_URL': "categories",
        'ARCHIVES_URL': "archives",
        'ARTICLE_URL': "{slug}",
        'PAGE_URL': "{slug}",
        'PAGE_SAVE_AS': "{slug}.html",
        'SEARCH_URL': "search",

        # PROJECTS
        'PROJECTS': [{
            'name': 'The joy of painting - Bob Ross',
            'url': 'https://asierrayk.github.io/bob-ross/',
            'description': 'Small tribute to Bob Ross and his TV program, which is an inspiration for this blog'},
        ]
    }
}

STATIC_PATHS =[
    'extra',
    'images'
]

EXTRA_PATH_METADATA = {
    'extra/favicon.ico': {'path': 'favicon.ico'},
}

MATH_JAX = {}