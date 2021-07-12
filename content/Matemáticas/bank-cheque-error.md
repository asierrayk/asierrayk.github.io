Title: ¿La banca siempre gana?
Date: 2021-06-20
Tags: Problema, Ecuaciones Diofánticas, Matemáticas, Oposiciones
Summary: Problema número 3 de las oposiciones 2021 de Matemáticas en Madrid
Status: published

[TOC]

El siguiente problema ha sido planteado como tercer ejercicio de las oposiciones para profesor de secundaria en Madrid 2021 en la especialidad de matemáticas.

# Enunciado #

> Un hombre acude a un banco para cobrar un cheque por valor de $E$ euros y $C$ céntimos. El cajero, por error, le entrega un sobre con $C$ euros y $E$ céntimos. El cliente no se da cuenta del error hasta que gasta 23 céntimos y, además, observa que en ese momento tiene $2E$ euros y $2C$ céntimos. ¿Cuál es el valor del cheque?

# Resolución #

Podemos plantear la ecuación del problema:

$$ 100C+E-23 = 200E+2C $$ Despejando tenemos la siguiente ecuación Diofántica $$ -199E+98C = 23 $$

## Algoritmo de Euclides

Aplicamos el algoritmo de Euclides para obtener el máximo común divisor.

$$ \begin{align*} -199 & = 98 \cdot (-3)+95 \\ 98 & = 95 \cdot (1)+3 \\ 95 & = 3 \cdot (31)+2 \\ 3 & = 2 \cdot (1)+1 \\
2 & = 1 \cdot (2)+0 \end{align*} $$

Como el divisor de la división exacta es $1$, tenemos que el $mcd(-199, 98) = 1$

Para que la ecuación diofántica tenga solución el máximo común divisor debe dividir al término independiente de la
ecuación. En nuestro caso $mcd(-199, 98) = 1$ es divisor de $23$.

## Algoritmo de Euclides extendido

El algoritmo extendido de Euclides nos permite encontrar coeficientes $p$ y $q$ para satisfacer la identidad de bezout.

$$ -199p+98q = mcd(-199, 98) = 1 $$


<!---
| p | q | r | -199p+98q=r |
|:---:|:---:|:---:|:-----------------------------:|
| 1 | 0 | -199 | -199(1)+98(0) = -199 |
| 0 | 1 | 98 |  -199(0)+98(1) = 98 |
| 1 | 3 | 95 |  -199(1)+98(3) = 95 |
| -1 | -2 | 3 |  -199(-1)+98(-2) = 3 |
| 32 | 65 | 2 |  -199(32)+98(65) = 2 |
| -33 | -67 | 1 |  -199(-33)+98(-67) = 1 |
-->

<table style="width: 100%">
    <colgroup>
       <col style="width: 20%;">
       <col style="width: 20%;">
       <col style="width: 20%;">
       <col style="width: 40%;">
    </colgroup>
    <thead>
        <tr>
            <th align="center">p</th>
            <th align="center">q</th>
            <th align="center">r</th>
            <th align="center">-199p + 98q = r</th>
        </tr>
    </thead>
    <tbody>
    <tr>
        <td align="center">1</td>
        <td align="center">0</td>
        <td align="center">-199</td>
        <td align="center">-199 (1) + 98 (0) = -199</td>
    </tr>
    <tr>
        <td align="center">0</td>
        <td align="center">1</td>
        <td align="center">98</td>
        <td align="center">-199 (0) + 98 (1) = 98</td>
    </tr>
    <tr>
        <td align="center">1</td>
        <td align="center">3</td>
        <td align="center">95</td>
        <td align="center">-199 (1) + 98 (3) = 95</td>
    </tr>
    <tr>
        <td align="center">-1</td>
        <td align="center">-2</td>
        <td align="center">3</td>
        <td align="center">-199 (-1) + 98 (-2) = 3</td>
    </tr>
    <tr>
        <td align="center">32</td>
        <td align="center">65</td>
        <td align="center">2</td>
        <td align="center">-199 (32) + 98 (65) = 2</td>
    </tr>
    <tr>
        <td align="center">-33</td>
        <td align="center">-67</td>
        <td align="center">1</td>
        <td align="center">-199 (-33) + 98 (-67) = 1</td>
    </tr>
    </tbody>
</table>

<br/>

$$
p=-33 \quad \text{y} \quad q=-67
$$

## Solución de la ecuación diofántica

Como para obtener el término independiente $23$ a partir del $mcd(-199, 98) = 1$ hay que multiplicar por $23$. Hacemos lo mismo con la última ecuación obtenida con el algoritmo de Euclides extendido, obteniendo una solución de las infinitas que tiene la ecuación diofántica:

$$
\begin{cases}
    E_0 = -759 \\
    C_0 = -1541
\end{cases}
$$

$$
-199 (-759) + 98 (-1541) = 23
$$

La solución general para la ecuación diofántica $ax+by=c$, con una solución particular $(x_0, y_0)$ es la siguiente:

$$
\begin{cases}
x = x_0 + \lambda \dfrac{b}{mcd(a,b)} \\
y = y_0 + \lambda \dfrac{a}{mcd(a,b)}
\end{cases}
\lambda \in \mathbb Z
$$

En nuestro caso, esta es la solución general:

$$
\begin{cases}
E = -759 + \lambda \dfrac{98}{1} \\
C = -1541 - \lambda \dfrac{-199}{1}
\end{cases}
\lambda \in \mathbb Z
$$

Sin embargo, la solución de nuestro problema debe estar formado por números $E$ y $C$ naturales, donde se cumple la restricciones $0 < C < 100$ y $0 < E < 100$.
Si elegimos $\lambda = 8$ obtenemos nuestra solución.
$$
\begin{cases}
E = -759 + 8 \cdot \dfrac{98}{1} = 25 \\
C = -1541 - 8 \cdot \dfrac{-199}{1} = 51
\end{cases}
$$

>El valor del cheque es de $25$ euros y $51$ céntimos

# Comprobación del resultado
Para comprobar que hemos obtenido la respuesta correcta basta con intercambiar los centimos por los euros:
>$51$ euros y $25$ céntimos
 
Restar 23 céntimos:

>$51$ euros y $2$ céntimos
 
Que es justo el doble de euros y el doble de céntimos.
