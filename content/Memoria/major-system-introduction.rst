Sistema Mayor
#############

:date: 2021-06-14
:tags: Memoria, Mnemotecnia
:summary: Un sistema para memorizar números
:status: published

.. contents:: .

¿Qué es?
========

Denominado *Major System* [1]_ [2]_ en inglés, se trata de un **sistema mnemotécnico** para memorizar números de forma eficiente.
Si intentamos memorizar una ristra de números sin ningún método, nos resultará muy complicado y tedioso.

Sin embargo haciendo que cada **dígito** se corresponda con una **consonante** y
ayudándonos de vocales podremos formar una palabra para cada par de dígitos que contenga las correspondientes consonantes en el orden correcto.

De esta forma habremos codificado los números en palabras. Esas palabras las podremos convertir en **imágenes** que son mucho más fáciles de visualizar mentalmente. Con la sucesión de estas imágenes se puede formar una historia y por tanto recordar con mayor facilidad.


Correspondencia dígito consonante
=================================
Esta es la correspondencia que yo utilizo.

.. list-table:: Correspondencia
   :widths: 10 20
   :header-rows: 1
   :stub-columns: 1

   * - Dígito
     - Consonantes
   * - 0
     - r, rr
   * - 1
     - d, t
   * - 2
     - n
   * - 3
     - m
   * - 4
     - c, k, q
   * - 5
     - l
   * - 6
     - s, z
   * - 7
     - f
   * - 8
     - ch, g, j
   * - 9
     - b, v, p

Ejemplos
========
Por ejemplo si queremos memorizar los primeros decimales del número :math:`\pi`

.. math::

    \pi = 3.1415926535 \ldots

Podríamos hacerlo de la siguiente forma:
    1. Emparejamos los dígitos.
    2. Buscamos una palabra para cada par de dígitos.
    3. Convertimos las palabras en imágenes y formamos una historia.


.. csv-table::
   :header: Número, Palabra

        14,ático
        15,tila
        92,avión
        65,sol
        35,miel

.. highlights::

    Subo al **ático** de mi casa y decido tomarme una **tila** para relajarme. Cuando de repente un **avión** choca contra la casa creando una gran brecha en la pared.
    La brecha en la pared deja pasar unos rayos de **sol** y apenas distingo que es lo que lleva en la mano el piloto que se esta bajando del avión.

    Se trata de un tarro de **miel**, me comenta que si se lo añado a la tila me sentará mucho mejor...

Esta historia alocada e inverosímil permanecerá en nuestra cabeza por mucho más tiempo que si repetimos una y otra vez los números que queremos memorizar.

He creado una herramienta (Major system tool [3]_) para poder encontrar más fácilmente palabras para ciertos números.


Referencias
===========

.. [1]
    .. raw:: html

        <a href="https://en.wikipedia.org/wiki/Mnemonic_major_system" target="_blank">Major System Wikipedia</a><https://en.wikipedia.org/wiki/Mnemonic_major_system>
.. [2]
    .. raw:: html

        <a href="https://artofmemory.com/wiki/Major_System" target="_blank">Major System Art Of memory</a><https://en.wikipedia.org/wiki/Mnemonic_major_system>
.. [3]
    .. raw:: html

        <a href="https://major-system-tool.herokuapp.com/" target="_blank">Major system tool</a><https://en.wikipedia.org/wiki/Mnemonic_major_system>
