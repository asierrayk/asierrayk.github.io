Title: Calendario Mental
Summary: : Cómo saber en que día de la semana cayó cualquier fecha 
Date: 2021-05-30 20:22
Category: Matemáticas
Status: published
lang: es
slug: day-of-week-tutorial
Tags: Matemáticas, tutorial

[TOC]

Existe un método para poder calcular en que día de la semana cayó cualquier fecha.
El método es muy sencillo y hay que seguir los siguientes pasos:

1. Calcular las claves para cada parte de la fecha:
    - Calcular la clave del **día del mes**.
    - Calcular la clave del **mes**.
    - Calcular la clave para el **_siglo_**.
    - Calcular la clave para el **año**.
2. Sumar todas las claves.
3. Restar 1 si el año es bisiesto y el mes es enero o febrero.
4. Aplicar modulo 7 para obtener el día de la semana.


# 1. Cálculo de claves
Vamos a ver como poder calcular cada una de las claves, para cada una de las partes de la fecha.
Cada una de las claves que obtengamos la podemos simplificar aplicando modulo 7 antes de llegar al paso 2.

## Clave del día del mes
Para calcular la clave del día del mes, simplemente debemos coger el número del mes como clave.
Por ejemplo para la fecha **16 julio 1969** la clave para el día del mes es el propio número del día del mes **16** que simplificada es **2**.

## Clave del mes
Para calcular la clave del mes debemos aplicar la correspondencia de la siguiente tabla:

| Mes         | Clave   |
|:-----------:|:---------:|
|Enero        |0          |
|Febrero      |3          |
|Marzo        |3          |
|Abril        |6          |
|Mayo         |1          |
|Junio        |4          |
|Julio        |6          |
|Agosto       |2          |
|Septiembre   |5          |
|Octubre      |0          |
|Noviembre    |3          |
|Diciembre    |5          |


Por ejemplo para la fecha 16 de julio de 1969 la clave del mes es **6**.

## Clave del *siglo*
Para esta parte de la fecha, nos fijamos en el año ignorando las dos últimas cifras.
Para calcular la clave del siglo deberemos tener en cuenta la siguiente correspondencia:

| *Siglo*     | Clave     |
|:-----------:|:---------:|
|16xx         |6          |
|17xx         |4          |
|18xx         |2          |
|19xx         |0          |
|20xx         |6          |
|21xx         |4          |

## Clave del año
El cálculo de la clave del año se compone de los siguientes pasos:

1. Nos quedamos con las **dos últimas cifras del año**. Por ejemplo con 1969 nos quedamos con 69.
2. Calculamos el **cociente** de la división del primer paso **entre 4**. Por ejemplo 69 entre 4 da como cociente 17. Podemos simplificar el número 17 y usar 3 en su lugar.
Este paso está relacionado con los años bisiestos.
3. Calculamos el **resto** de la división del número del primer paso **entre 7**. Por ejemplo 69 modulo 7 es 6.
4. Por último **sumamos los números del segundo y tercer paso** y obtenemos la clave para el año.
   Con nuestro ejemplo sumamos 3 y 6 y obtenemos 9 que simplificado nos da 2.

# 2. Comprobar el resultado
Una vez tengamos todas las claves basta con sumarlas, simplificar el resultado para que nos quede un número entre 0 y 6.
Comprobar el resultado con la siguiente tabla:

| Día de la semana     | Clave     |
|:--------------------:|:---------:|
|Domingo               |0          |
|Lunes                 |1          |
|Martes                |2          |
|Miércoles             |3          |
|Jueves                |4          |
|Viernes               |5          |
|Sábado                |6          |

Para la fecha **16 de julio de 1969** tendríamos:
2 + 6 + 0 + 3 + 6 = 17 = 3 
Por tanto ese día fue un **miércoles**.

# 3. Consideración de años bisiestos
Si la fecha para la cual estamos calculando el día de la semana. Se trata de un año bisiesto y el mes es enero o febrero, al resultado final deberemos restar una unidad.

## Definición año bisiesto
En el calendario que usamos actualmente que es el calendario Gregoriano, vigente desde 1582. Para nuestro calendario la definición de un año bisiesto es la siguiente: 
```
Un año es bisiesto si es divisible por 4, excepto si acaba en 00,
que ha de ser divisible entre 400.
```

Es decir 1600 y 2000 son años bisiestos, sin embargo 1700, 1800 y 1900 no son años bisiestos.

## Ejemplo año bisiesto
Calculemos el día de la semana para la fecha **1 de enero de 2020**.
1 + 0 + 6 + 5 + 6 = 18 = 4
Pero debemos restar uno, ya que el año es bisiesto y el mes enero, por tanto el resultado es 3.
Es decir, un **miércoles**.
