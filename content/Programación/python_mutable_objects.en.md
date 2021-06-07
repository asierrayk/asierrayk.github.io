Title: Mutable objects in python
Date: 2020-02-01 16:31
Category: Programming
Status: published
lang: en
slug: python-mutable-objects
Tags: programming, Python

[TOC]

Let's assume we have defined the following function:
```python
def f(x, l=[]):
    for i in range(x):
        l.append(i)
    print(l)
```

If we have to guess what is the output of these calls to the function. A lot of
us will think is:

```python
>>> f(2)
[0, 1]
>>> f(3, [3, 4, 5])
[3, 4, 5, 0, 1, 2]
>>> f(3) # WRONG RESULT
[0, 1, 2]
```

However, the correct result is:

```python
>>> f(2)
[0, 1]
>>> f(3, [3, 4, 5])
[3, 4, 5, 0, 1, 2]
>>> f(3) # CORRECT RESULT
[0, 1, 0, 1, 2]
```


This is due to the fact that **lists in python are mutable objects**, and
therefore whenever they are defined as default parameters in a function, the
list behaves as a global variable common to all function's executions.

When we call to `f(2)` for the first time, the value `[]` is being used by
default. But when `f(3)` is executed the same global variable used when `f(2)`
was called is used, which last value is `[0, 1]`.


Table of objects in python
--------------------------

| Object   | Mutable |
|----------|---------|
|bool      |No       |
|int       |No       |
|float     |No       |
|list      |Yes      |
|tuple     |No       |
|str       |No       |
|set       |Yes      |
|frozenset |No       |
|dict      |Yes      |


Mutable objects in python are passed by reference. Immutable objects is like
they were being passed by value.
An example of that is the following code:

```python
def f(l):
    l.append(23)

>>> l = [37]
>>> f(l)
>>> print(l)
[37, 23]
```
