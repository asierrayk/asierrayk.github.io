Chuleta reStructuredText
##########################

:date: 2021-06-07 20:29
:tags: Blog, Pelican, reStructuredText
:summary: Documento resumen con todas las directrices útiles

.. contents:: Contents duplicated :(

Table of contents
=================

.. code-block:: RST

    .. contents:: Contents duplicated :(

Admonitions
===========
.. code-block:: RST

    .. ATTENTION::
        Atención

.. ATTENTION::
    Atención

.. code-block:: RST

    .. CAUTION::
        Cuidado

.. CAUTION::
    Cuidado

.. code-block:: RST

    .. DANGER::
       Beware killer rabbits!

.. DANGER::
   Beware killer rabbits!

.. code-block:: RST

    .. ERROR::
        Error

.. ERROR::
    Error

.. code-block:: RST

    .. HINT::
        Sugerencia

.. HINT::
    Sugerencia

.. code-block:: RST

    .. IMPORTANT::
        Importante

.. IMPORTANT::
    Importante

.. code-block:: RST

    .. NOTE::
        Nota

.. NOTE::
    Nota

.. code-block:: RST

    .. TIP::
        Consejo

.. TIP::
    Consejo

.. code-block:: RST

    .. WARNING::
        Advertencia

.. WARNING::
    Advertencia

Amonestaciones genericas
------------------------

.. code-block:: RST

    .. admonition:: Y por cierto

       También puedes personalizar el titulo

.. admonition:: Y por cierto

   También puedes personalizar el titulo

Images
======

.. code-block:: RST

    .. image:: images/el_placer_de_pensar.jpg
        :height: 100px
        :width: 200 px
        :scale: 50 %
        :alt: El placer de pensar logo
        :align: right


.. image:: images/el_placer_de_pensar.jpg
    :height: 500px
    :scale: 50 %
    :alt: El placer de pensar logo
    :align: right

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Figura
------

.. code-block:: RST

    .. figure:: images/el_placer_de_pensar.jpg
        :scale: 50 %
        :figwidth: 25 %
        :align: center
        :alt: Logo de El placer de Pensar

        Este es un mensaje al pie de la figura

.. figure:: images/el_placer_de_pensar.jpg
    :scale: 50 %
    :figwidth: 25 %
    :align: center
    :alt: Logo de El placer de Pensar

    Este es un mensaje al pie de la figura

Body elements
=============
.. code-block:: RST

    .. line-block::

        Lend us a couple of bob till Thursday.
        I'm absolutely skint.
        But I'm expecting a postal order and I can pay you back
            as soon as it comes.
        Love, Ewan.

.. line-block::

    Lend us a couple of bob till Thursday.
    I'm absolutely skint.
    But I'm expecting a postal order and I can pay you back
        as soon as it comes.
    Love, Ewan.

Math
----
.. code-block:: RST
    .. math::

      α_t(i) = P(O_1, O_2, … O_t, q_t = S_i λ)

.. math::

  α_t(i) = P(O_1, O_2, … O_t, q_t = S_i λ)


Epigraph
--------

.. code-block:: RST
    .. epigraph::

        I have discovered a truly remarkable proof of this theorem which this margin is too small to contain.

        -- Pierre de Fermat

.. epigraph::

    I have discovered a truly remarkable proof of this theorem which this margin is too small to contain.

    -- Pierre de Fermat

.. highlights::
    Esto debería estar resaltado

Tables
------

.. code-block:: RST

    .. table:: Truth table for "not"
       :widths: auto

       =====  =====
         A    not A
       =====  =====
       False  True
       True   False
       =====  =====

.. table:: Truth table for "not"
   :widths: auto

   =====  =====
     A    not A
   =====  =====
   False  True
   True   False
   =====  =====

.. code-block:: RST

    .. csv-table:: Frozen Delights!
       :header: "Treat", "Quantity", "Description"
       :widths: 15, 10, 30

       "Albatross", 2.99, "On a stick!"
       "Crunchy Frog", 1.49, "If we took the bones out, it wouldn't be
       crunchy, now would it?"
       "Gannet Ripple", 1.99, "On a stick!"

.. csv-table:: Frozen Delights!
   :header: "Treat", "Quantity", "Description"
   :widths: 15, 10, 30

   "Albatross", 2.99, "On a stick!"
   "Crunchy Frog", 1.49, "If we took the bones out, it wouldn't be
   crunchy, now would it?"
   "Gannet Ripple", 1.99, "On a stick!"

.. code-block:: RST

    .. list-table:: Frozen Delights!
       :widths: 15 10 30
       :header-rows: 1

       * - Treat
         - Quantity
         - Description
       * - Albatross
         - 2.99
         - On a stick!
       * - Crunchy Frog
         - 1.49
         - If we took the bones out, it wouldn't be
           crunchy, now would it?
       * - Gannet Ripple
         - 1.99
         - On a stick!

.. list-table:: Frozen Delights!
   :widths: 15 10 30
   :header-rows: 1

   * - Treat
     - Quantity
     - Description
   * - Albatross
     - 2.99
     - On a stick!
   * - Crunchy Frog
     - 1.49
     - If we took the bones out, it wouldn't be
       crunchy, now would it?
   * - Gannet Ripple
     - 1.99
     - On a stick!

Directives for Substitution Definitions
=======================================

.. code-block:: RST

    .. |reST| replace:: reStructuredText

.. |reST| replace:: reStructuredText

Yes, |reST| is a long word, so I can't blame anyone for wanting to
abbreviate it.

.. code-block:: RST

    Copyright |copy| 2003, |BogusMegaCorp (TM)| |---|
    all rights reserved.

    .. |copy| unicode:: 0xA9 .. copyright sign
    .. |BogusMegaCorp (TM)| unicode:: BogusMegaCorp U+2122
       .. with trademark sign
    .. |---| unicode:: U+02014 .. em dash
       :trim:

Copyright |copy| 2003, |BogusMegaCorp (TM)| |---|
all rights reserved.

.. |copy| unicode:: 0xA9 .. copyright sign
.. |BogusMegaCorp (TM)| unicode:: BogusMegaCorp U+2122
   .. with trademark sign
.. |---| unicode:: U+02014 .. em dash
   :trim:


.. code-block:: RST

    .. |date| date::
    .. |time| date:: %H:%M

    Today's date is |date|.

    This document was generated on |date| at |time|.

.. |date| date::
.. |time| date:: %H:%M

Today's date is |date|.

This document was generated on |date| at |time|.

.. code-block:: RST

    .. raw:: html

       <hr width=50 size=10>

.. raw:: html

   <hr width=50 size=10>

Footnotes
=========

.. code-block:: RST

    Some text that requires a footnote [#f1]_ .

    .. rubric:: Texto para footnotes

    .. [#f1] Text of the first footnote.

Some text that requires a footnote [#f1]_ .

.. rubric:: Texto para footnotes

.. [#f1] Text of the first footnote.

Citations
=========
Haciendo mención a algo puesto en las referencias [CIT2002]_

.. [CIT2002] A citation
          (as often used in journals).


More about aliases
==================
.. code-block:: RST

    .. |logo| image:: images/el_placer_de_pensar.jpg
        :width: 20pt
        :height: 20pt

    .. |longtext| replace:: this is a very very long text to include

    +---------+---------+-----------+
    | |logo|  | |logo|  | |longtext||
    +---------+---------+-----------+

.. |logo| image:: images/el_placer_de_pensar.jpg
    :width: 20pt
    :height: 20pt

.. |longtext| replace:: this is a very very long text to include

+---------+---------+-----------+
| |logo|  | |logo|  | |longtext||
+---------+---------+-----------+
