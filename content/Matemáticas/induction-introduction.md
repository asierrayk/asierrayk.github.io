Title: Demostrando por inducción 
subtitle: fórmulas que no entendemos por qué son
Date: 2021-10-7 16:23
Tags: Problema, Inducción
Summary: Demostrando por inducción la suma de los primeros cuadrados perfectos
Status: published

[TOC]

En muchas ocasiones he demostrado fórmulas, que no sería capaz de obtener. Una de ellas es la fórmula de la suma de los cuadrados de los $n$ primeros números naturales.

Inducción
=========
Inducción es una forma de razonamiento en el que la verdad de las premisas apoyan la conclusión, pero no la garantizan. Un ejemplo clásico es inducir que todos los cisnes son blancos, al comprobar que todos los cisnes que se han visto son blancos. Sin embargo, eso no garantiza que el siguiente cisne que vea sea blanco, podría ocurrir que fuese negro.

Inducción matemática
====================
Nos permite la demostración de proposiciones que dependen de los números naturales. Si una propiedad se cumple para un número natural $n_0$ y suponiendo que se cumple para $n \in \mathbb{N}$ podemos demostrar que se cumple para $n+1$. Entonces la propiedad es cierta $\forall k\in \mathbb{N} \quad k \ge n_0$.

Demostración por inducción
--------------------------
Vamos a demostrar por inducción la fórmula:

[comment]: <> (S&#40;n&#41; = \sum_{k=1}^{n}k^2 = )
$$1^2 + 2^2 + 3^2 + \dots + (n-1)^2 + n^2 = \dfrac{n(n+1)(2n+1)}{6}$$

Comprobemos que la propiedad se cumple para $n=1$.

$$
\begin{align*}
    n=1 1^2 = 1 \\
    \dfrac{n(n+1)(2n+1)}{6} = \dfrac{1(1+1)(2 \cdot 1+1)}{6} = 1}
\end{align*}
$$

