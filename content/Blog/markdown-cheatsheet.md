Title: Chuleta Markdown
Date: 2021-06-15
Tags: Blog, Chuleta

[TOC]

Índice
======
Para incluir un índice basta con poner lo siguiente

```markdown
[TOC]
```

Énfasis
=======
*Emphasize* _emphasize_
**Strong** __Strong__

Enlaces
=======
	
A [link](http://example.com "Title").

Enlaces referenciados
=====================
Some text with [a link][1] and
another [link][2].

[1]: http://example.com/ "Title"
[2]: http://example.org/ "Title"

Imágenes
========
Logo: ![Alt](/images/el_placer_de_pensar.jpg "Title")

Abreviaciones
=============
Markdown converts text to HTML.

*[HTML]: HyperText Markup Language

Tablas
======

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

Markdown | Less | Pretty
--- | --- | ---
*Still* | `renders` | **nicely**
1 | 2 | 3

HTML
====

<dl>
  <dt>Definition list</dt>
  <dd>Is something people use sometimes.</dd>

  <dt>Markdown in HTML</dt>
  <dd>Does *not* work **very** well. Use HTML <em>tags</em>.</dd>
</dl>

Lineas horizontales
===================
Three or more...

---

Hyphens

***

Asterisks

___

Underscores

Bloques de citas
================
> Here's a blockquote.

> This a much longer multi paragraph block quote that is intended to extend over multiple lines.  This a much longer block quote that is intended to extend over multiple lines.  This a much longer block quote that is intended to extend over multiple lines. 

Lista de atributos
==================

```markdown
For example different coloured in-line `code in red`{: .red} and `green`{: .green}.
```

Añadiendo las siguientes lineas en el fichero `custom.css` del tema _elegant_ instalado.
```css
code.red {color:red;}
code.green {color: green;}
```

For example different coloured in-line `code in red`{: .red} and `green`{: .green}.

Cabeceras
=========
```markdown
#H1#
H1
==
##H2##
H2
--
###H3###
```
#H1#
H1
==
##H2##
H2
--
###H3###

Amonestaciones
==============
!!! note
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod
    nulla. Curabitur feugiat, tortor non consequat finibus, justo purus auctor
    massa, nec semper lorem quam in massa.

Notas a pie de página
=====================

Here's a simple footnote,[^1] and here's a longer one.[^bignote]

[^1]: This is the first footnote.

[^bignote]: Here's one with multiple paragraphs and code.

    Indent paragraphs to include them in the footnote.

    `{ my code }`

    Add as many paragraphs as you like.

### Cabezera con ID {#custom-id}
[Heading IDs](#custom-id)

Lista de definiciones
=====================
First Term
: This is the definition of the first term.

Second Term
: This is one definition of the second term.
: This is another definition of the second term.

Tachado
=======
~~The world is flat.~~ We now know that the world is round.

Lista de tareas
===============
- [x] Write the press release
- [ ] Update the website
- [ ] Contact the media

[comment]: <> (Link interno)

[comment]: <> (============)

[comment]: <> ([a link relative to the current file]&#40;{filename}reestructured-text-cheatsheet.rst&#41;)

[comment]: <> ([a link relative to the content root]&#40;{filename}/Memoria/major-system-introduction.rst&#41;)

[comment]: <> (Enlace archivos estaticos)

[comment]: <> (=========================)

[comment]: <> (![Alt Text]&#40;{static}/images/el_placer_de_pensar.jpg&#41;)

[comment]: <> (Adjuntar)

[comment]: <> (========)

[comment]: <> (![Icon]&#40;{attach}icons/md.ico&#41;)

[comment]: <> (![Photo]&#40;{attach}images/md.png&#41;)

[comment]: <> ([Downloadable File]&#40;{attach}images/md.png&#41;)