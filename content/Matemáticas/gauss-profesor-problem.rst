El problema que Gauss resolvió al instante
##########################################

:date: 2021-07-14
:tags: problema, gauss
:summary: La suma de los primeros números naturales
:status: published

.. contents:: .

Muchas veces se nos plantean problemas matemáticos abstractos y es difícil encontrar un problema de la vida real que se corresponda con ese problema abstracto.

Dado un problema de matemáticas abstracto, podemos realizar un ejercicio muy curioso que es el de buscar un enunciado de un problema de la vida cotidiana que implique la resolución de ese problema abstracto.

El problema abstracto
=====================

La anécdota de Gauss:
    Estaba el profesor de Gauss cansado por el revuelo de sus alumnos y decidio platearles un problema que les llevase resolverlo un largo periodo de tiempo. El problema era el siguiente:

.. highlights::

    Sumar todos los números naturales desde el 1 hasta el 100

Sin embargo, Gauss contestó casi al instante con la respuesta correcta: :math:`5050`

Búsqueda de la aplicación del problema
======================================

Un enunciado que implica resolver el problema abstracto planteado por el profesor de Gauss podría ser el siguiente:


    Desiderio es una persona muy despistada, es por ello que todos los años ha de comprar tantas velas como años va a cumplir, ya que no reutiliza ninguna del año anterior. ¿Cuántas velas habrá comprado el día que celebre su centésimo cumpleaños?

El hecho de poder ver un problema abstracto como un problema especifico con enunciado, nos acerca el problema y da más sentido a su resolución.

.. note::

    Con esto, no quiero decir que un problema abstracto del cuál no se conozca una aplicación inmediata deba ser ignorado. Es más, existen muchos problemas abstractos en la historia de las matemáticas que se han estudiado sin conocerse ninguna aplicación y han resultado ser de suma importancia para la humanidad. Un ejemplo es el **álgebra de Boole**.

Resolución del problema
=======================

Vamos a plantear el caso general del problema del profesor de Gauss y resolverlo por distintos métodos:

    Sumar los :math:`n` primeros números naturales.

Para resolver el problema, podemos agrupar, al igual que hizo Gauss, los términos último y primero, penúltimo y segundo, tercero y antepenúltimo, ...

.. math::

    1 + 2 + 3 + \dots + (n-2) + (n-1) + n & =  \\
    (n + 1) + ((n-1) + 2) + ((n-2) + 3) + \dots & = \\
