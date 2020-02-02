var tipuesearch = {"pages":[{"title":"About","text":"Bienvenidos a mi blog. Aquí publicare cosas sobre mis intereses e inquietudes. Espero que tu visita por el blog sea de tu agrado.","tags":"pages","url":"about","loc":"about"},{"title":"Objetos mutables en python","text":"Supongamos que tenemos definida en python la siguiente función: def f ( x , l = []): for i in range ( x ): l . append ( i ) print ( l ) Si tuviesemos que decir cual es el resultado de hacer las siguientes llamadas sucesivas a la función, muchos pensareis que el resultado que se obitendría es: >>> f ( 2 ) [ 0 , 1 ] >>> f ( 3 , [ 3 , 4 , 5 ]) [ 3 , 4 , 5 , 0 , 1 , 2 ] >>> f ( 3 ) # RESULTADO ERRONEO [ 0 , 1 , 2 ] Sin embargo, el resultado que obtenemos es el siguiente: >>> f ( 2 ) [ 0 , 1 ] >>> f ( 3 , [ 3 , 4 , 5 ]) [ 3 , 4 , 5 , 0 , 1 , 2 ] >>> f ( 3 ) # RESULTADO CORRECTO [ 0 , 1 , 0 , 1 , 2 ] Esto es debido a que las listas en python son objetos mutables y por tanto cuando son definidos como parametros por defecto en una función, la lista se comporta como una variable global a todas las ejecuciones de la función. Cuando llamamos a f(2) por primera vez se utiliza [] que es el valor por defecto de la lista. Pero cuando se ejecuta f(3) se utiliza la misma variable global que cuando se llamó a f(2) cuyo ultimo valor es [0, 1] . Tabla de objetos en python Objeto Mutable bool No int No float No list Sí tuple No str No set Sí frozenset No dict Sí Los objetos mutables en python son pasados por referencia. A diferencia del resto que es como si fuesen pasados por valor (ya que son inmutables). Un ejemplo de ello es el siguiente código: def f ( l ): l . append ( 23 ) >>> l = [ 37 ] >>> f ( l ) >>> print ( l ) [ 37 , 23 ]","tags":"Programación","url":"objetos-mutables-en-python","loc":"objetos-mutables-en-python"},{"title":"Tutorial resolver cubo a ciegas","text":"Resolver por primera vez el cubo de Rubik es un momento emocionante. Sin embargo, esta sensación no es comparable a lo que se siente al resolver el cubo a ciegas por primera vez. En esta nueva entrada os dejo una serie de videos en los que os explico como poder resolver el cubo de Rubik a ciegas. Recordad que nada se consigue de la noche a la mañana, pero cuando se consigue, ese esfuerzo se ve recompensado. Aún recuerdo la primera vez que conseguí hacer mi primer cubo de Rubik a ciegas, allá por el 2013. Y solo puedo animaros a conseguirlo si ese es vuestro objetivo.","tags":"Rubik","url":"tutorial-resolver-cubo-a-ciegas","loc":"tutorial-resolver-cubo-a-ciegas"}]};