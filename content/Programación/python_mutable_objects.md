Title: Objetos mutables en python
Date: 2020-02-01 16:31
Category: Programación
Status: published
lang: es
slug: python-mutable-objects
Tags: programación, Python

[TOC]

Supongamos que tenemos definida en python la siguiente función:
```python
def f(x, l=[]):
    for i in range(x):
        l.append(i)
    print(l)
```

Si tuviésemos que decir cual es el resultado de hacer las siguientes llamadas sucesivas a la función, muchos pensareis que el resultado que se obtendría es:

```python
>>> f(2)
[0, 1]
>>> f(3, [3, 4, 5])
[3, 4, 5, 0, 1, 2]
>>> f(3) # RESULTADO ERRONEO 
[0, 1, 2]
```

Sin embargo, el resultado que obtenemos es el siguiente:

```python
>>> f(2)
[0, 1]
>>> f(3, [3, 4, 5])
[3, 4, 5, 0, 1, 2]
>>> f(3) # RESULTADO CORRECTO
[0, 1, 0, 1, 2]
```


Esto es debido a que **las listas en python son objetos mutables** y por tanto cuando son definidos como parámetros por defecto en una función, la lista se comporta como una variable global a todas las ejecuciones de la función. 

Cuando llamamos a `f(2)` por primera vez se utiliza `[]` que es el valor por defecto de la lista. Pero cuando se ejecuta `f(3)` se utiliza la misma variable global que cuando se llamó a `f(2)` cuyo ultimo valor es `[0, 1]`.




Tabla de objetos en python
--------------------------

| Objeto   | Mutable |
|----------|---------|
|bool      |No       |
|int       |No       |
|float     |No       |
|list      |Sí       |
|tuple     |No       |
|str       |No       |
|set       |Sí       |
|frozenset |No       |
|dict      |Sí       |


Los objetos mutables en python son pasados por referencia. A diferencia del resto que es como si fuesen pasados por valor (ya que son inmutables).
Un ejemplo de ello es el siguiente código:

```python
def f(l):
    l.append(23)

>>> l = [37]
>>> f(l)
>>> print(l)
[37, 23]
```
