Branches
========
* Source: Branch to create content
* Master: Branch to deploy and host github pages

Development
===========

configuring dates
-----------------
* Edit `/etc/locale.gen` uncommenting desired locales
* Execute `locale-gen`
* Add to `pelicanconf.py` the following lines:
``` python
LOCALE = (
    'es_ES.utf8',
    'en_US.utf8'
)

DATE_FORMATS = {
    'es': ('es_ES.utf8','%a %d %b %Y'),
    'en': ('en_US.utf8','%a %d %b %Y'),
}
```

Serve in local
--------------
```
make devserver
```

Process to deploy
=================
```
make github
```