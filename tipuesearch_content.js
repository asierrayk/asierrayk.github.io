var tipuesearch = {"pages":[{"title":"Chuleta reStructuredText","text":"Table of contents .. contents :: Contents duplicated :( Admonitions .. ATTENTION :: Atención ¡Atención! Atención .. CAUTION :: Cuidado ¡Precaución! Cuidado .. DANGER :: Beware killer rabbits! ¡PELIGRO! Beware killer rabbits! .. ERROR :: Error Error Error .. HINT :: Sugerencia Sugerencia Sugerencia .. IMPORTANT :: Importante Importante Importante .. NOTE :: Nota Nota Nota .. TIP :: Consejo Consejo Consejo .. WARNING :: Advertencia Advertencia Advertencia Amonestaciones genericas .. admonition :: Y por cierto También puedes personalizar el titulo Y por cierto También puedes personalizar el titulo Images .. image :: images/el_placer_de_pensar.jpg :height: 100px :width: 200 px :scale: 50 % :alt: El placer de pensar logo :align: right Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Figura .. figure :: images/el_placer_de_pensar.jpg :scale: 50 % :figwidth: 25 % :align: center :alt: Logo de El placer de Pensar Este es un mensaje al pie de la figura Este es un mensaje al pie de la figura Body elements .. line-block :: Lend us a couple of bob till Thursday. I'm absolutely skint. But I'm expecting a postal order and I can pay you back as soon as it comes. Love, Ewan. Lend us a couple of bob till Thursday. I'm absolutely skint. But I'm expecting a postal order and I can pay you back as soon as it comes. Love, Ewan. Math α_t(i) = P(O_1, O_2, … O_t, q_t = S_i λ) \\begin{equation*} \\alpha _t(i) = P(O_1, O_2, \\ldots O_t, q_t = S_i \\lambda ) \\end{equation*} Epigraph I have discovered a truly remarkable proof of this theorem which this margin is too small to contain. -- Pierre de Fermat I have discovered a truly remarkable proof of this theorem which this margin is too small to contain. —Pierre de Fermat Esto debería estar resaltado Tables .. table :: Truth table for \"not\" :widths: auto ===== ===== A not A ===== ===== False True True False ===== ===== Truth table for \"not\" A not A False True True False .. csv-table :: Frozen Delights! :header: \"Treat\", \"Quantity\", \"Description\" :widths: 15, 10, 30 \"Albatross\", 2.99, \"On a stick!\" \"Crunchy Frog\", 1.49, \"If we took the bones out, it wouldn't be crunchy, now would it?\" \"Gannet Ripple\", 1.99, \"On a stick!\" Frozen Delights! Treat Quantity Description Albatross 2.99 On a stick! Crunchy Frog 1.49 If we took the bones out, it wouldn't be crunchy, now would it? Gannet Ripple 1.99 On a stick! .. list-table :: Frozen Delights! :widths: 15 10 30 :header-rows: 1 * - Treat - Quantity - Description * - Albatross - 2.99 - On a stick! * - Crunchy Frog - 1.49 - If we took the bones out, it wouldn't be crunchy, now would it? * - Gannet Ripple - 1.99 - On a stick! Frozen Delights! Treat Quantity Description Albatross 2.99 On a stick! Crunchy Frog 1.49 If we took the bones out, it wouldn't be crunchy, now would it? Gannet Ripple 1.99 On a stick! Directives for Substitution Definitions .. |reST| replace :: reStructuredText Yes, reStructuredText is a long word, so I can't blame anyone for wanting to abbreviate it. Copyright |copy| 2003, |BogusMegaCorp (TM)| |---| all rights reserved. .. |copy| unicode :: 0xA9 .. copyright sign .. |BogusMegaCorp (TM)| unicode :: BogusMegaCorp U+2122 .. with trademark sign .. |---| unicode :: U+02014 .. em dash :trim: Copyright © 2003, BogusMegaCorp™—all rights reserved. .. |date| date :: .. |time| date :: %H:%M Today's date is |date|. This document was generated on |date| at |time|. Today's date is 2021-06-07. This document was generated on 2021-06-07 at 23:34. .. raw :: html <hr width=50 size=10> Footnotes Some text that requires a footnote [#f1]_ . .. rubric :: Texto para footnotes .. [#f1] Text of the first footnote. Some text that requires a footnote [1] . Texto para footnotes [1] Text of the first footnote. Citations Haciendo mención a algo puesto en las referencias [CIT2002] [CIT2002] A citation (as often used in journals). More about aliases .. |logo| image :: images/el_placer_de_pensar.jpg :width: 20pt :height: 20pt .. |longtext| replace :: this is a very very long text to include +---------+---------+-----------+ | |logo| | |logo| | |longtext|| +---------+---------+-----------+ this is a very very long text to include","tags":"Blog","url":"chuleta-restructuredtext","loc":"chuleta-restructuredtext"},{"title":"Calendario Mental","text":"Existe un método para poder calcular en que día de la semana cayó cualquier fecha. El método es muy sencillo y hay que seguir los siguientes pasos: Calcular las claves para cada parte de la fecha: Calcular la clave del día del mes . Calcular la clave del mes . Calcular la clave para el siglo . Calcular la clave para el año . Sumar todas las claves. Restar 1 si el año es bisiesto y el mes es enero o febrero. Aplicar modulo 7 para obtener el día de la semana. 1. Cálculo de claves Vamos a ver como poder calcular cada una de las claves, para cada una de las partes de la fecha. Cada una de las claves que obtengamos la podemos simplificar aplicando modulo 7 antes de llegar al paso 2. Clave del día del mes Para calcular la clave del día del mes, simplemente debemos coger el número del mes como clave. Por ejemplo para la fecha 16 julio 1969 la clave para el día del mes es el propio número del día del mes 16 que simplificada es 2 . Clave del mes Para calcular la clave del mes debemos aplicar la correspondencia de la siguiente tabla: Mes Clave Enero 0 Febrero 3 Marzo 3 Abril 6 Mayo 1 Junio 4 Julio 6 Agosto 2 Septiembre 5 Octubre 0 Noviembre 3 Diciembre 5 Por ejemplo para la fecha 16 de julio de 1969 la clave del mes es 6 . Clave del siglo Para esta parte de la fecha, nos fijamos en el año ignorando las dos últimas cifras. Para calcular la clave del siglo deberemos tener en cuenta la siguiente correspondencia: Siglo Clave 16xx 6 17xx 4 18xx 2 19xx 0 20xx 6 21xx 4 Clave del año El cálculo de la clave del año se compone de los siguientes pasos: Nos quedamos con las dos últimas cifras del año . Por ejemplo con 1969 nos quedamos con 69. Calculamos el cociente de la división del primer paso entre 4 . Por ejemplo \\(69 = 4 \\cdot 17+1\\) , es decir, 69 entre 4 da como cociente 17. Simplificando 17 obtenemos \\(17 \\equiv 3\\) , por tanto la clave es \\(3\\) . Este paso está relacionado con los años bisiestos. Calculamos el resto de la división del número del primer paso entre 7 . Por ejemplo \\(69 = 9 \\cdot 7 + 6\\) Por último sumamos los números del segundo y tercer paso y obtenemos la clave para el año. \\(3 + 6 = 9 \\equiv 2\\) 2. Comprobar el resultado Una vez tengamos todas las claves basta con sumarlas, simplificar el resultado para que nos quede un número entre 0 y 6. Comprobar el resultado con la siguiente tabla: Día de la semana Clave Domingo 0 Lunes 1 Martes 2 Miércoles 3 Jueves 4 Viernes 5 Sábado 6 Para la fecha 16 de julio de 1969 , tendríamos: \\(2 + 6 + 0 + 3 + 6 = 17 \\equiv 3\\) Por tanto ese día fue un miércoles . 3. Consideración de años bisiestos Si la fecha para la cual estamos calculando el día de la semana. Se trata de un año bisiesto y el mes es enero o febrero, al resultado final deberemos restar una unidad. Definición año bisiesto En el calendario que usamos actualmente que es el calendario Gregoriano, vigente desde 1582. Para nuestro calendario la definición de un año bisiesto es la siguiente: Un año es bisiesto si es divisible por 4, excepto si acaba en 00, que ha de ser divisible entre 400. Es decir 1600 y 2000 son años bisiestos, sin embargo 1700, 1800 y 1900 no son años bisiestos. Ejemplo año bisiesto Calculemos el día de la semana para la fecha 1 de enero de 2020 . \\(1 + 0 + 6 + 5 + 6 = 18 \\equiv 4\\) Pero debemos restar uno, ya que el año es bisiesto y el mes enero, por tanto el resultado es \\(3\\) . Es decir, un miércoles .","tags":"Matemáticas","url":"day-of-week-tutorial","loc":"day-of-week-tutorial"},{"title":"Mi primer plugin en VIM","text":"Tras usar Vim durante un largo periodo de tiempo, he decidido aventurarme a hacer mi primer plugin. Se trata de un plugin muy sencillo que simplemente te permite iterar una lista de posibles diccionarios para la corrección ortográfica. La idea es que sea posible activar el corrector ortográfico ( :set spell ) en caso de que este desactivado e ir iterando por una lista configurable de idiomas. let g :SpellLangList = get ( g : , 'SpellLangList' , [] ) \" Cycle through spelllang list and toggle spell function ! ToggleCycleSpellLang () if ! & spell setlocal spell else let l :lang_index = index ( g :SpellLangList , & spelllang ) let l :lang_index = ( l :lang_index + 1 ) % len ( g :SpellLangList ) let & spelllang = g :SpellLangList[ l :lang_index] if l :lang_index == 0 setlocal nospell endif endif endfunction Se podría configurar por ejemplo con las siguientes opciones: let g :SpellLangList = [ \"en_us\" , \"es\" , \"en_us,es\" ] nnoremap < F6 > : call ToggleCycleSpellLang ()< CR > De esta manera una primera pulsación de la tecla F6 activaría la corrección ortográfica para el buffer activo, y sucesivas pulsaciones irían cambiando el idioma activo ( :set spelllang=es ) iterando la lista g:SpellLangList hasta desactivar de nuevo la corrección ortográfica ( :set nospell ). He subido el plugin a un repositorio en github y añadido alguna funcionalidad, relacionada con las ventanas quickfix y location .","tags":"Programación","url":"my-first-vim-plugin","loc":"my-first-vim-plugin"},{"title":"Objetos mutables en python","text":"Supongamos que tenemos definida en python la siguiente función: def f ( x , l = []): for i in range ( x ): l . append ( i ) print ( l ) Si tuviésemos que decir cual es el resultado de hacer las siguientes llamadas sucesivas a la función, muchos pensareis que el resultado que se obtendría es: >>> f ( 2 ) [ 0 , 1 ] >>> f ( 3 , [ 3 , 4 , 5 ]) [ 3 , 4 , 5 , 0 , 1 , 2 ] >>> f ( 3 ) # RESULTADO ERRONEO [ 0 , 1 , 2 ] Sin embargo, el resultado que obtenemos es el siguiente: >>> f ( 2 ) [ 0 , 1 ] >>> f ( 3 , [ 3 , 4 , 5 ]) [ 3 , 4 , 5 , 0 , 1 , 2 ] >>> f ( 3 ) # RESULTADO CORRECTO [ 0 , 1 , 0 , 1 , 2 ] Esto es debido a que las listas en python son objetos mutables y por tanto cuando son definidos como parámetros por defecto en una función, la lista se comporta como una variable global a todas las ejecuciones de la función. Cuando llamamos a f(2) por primera vez se utiliza [] que es el valor por defecto de la lista. Pero cuando se ejecuta f(3) se utiliza la misma variable global que cuando se llamó a f(2) cuyo ultimo valor es [0, 1] . Tabla de objetos en python Objeto Mutable bool No int No float No list Sí tuple No str No set Sí frozenset No dict Sí Los objetos mutables en python son pasados por referencia. A diferencia del resto que es como si fuesen pasados por valor (ya que son inmutables). Un ejemplo de ello es el siguiente código: def f ( l ): l . append ( 23 ) >>> l = [ 37 ] >>> f ( l ) >>> print ( l ) [ 37 , 23 ]","tags":"Programación","url":"python-mutable-objects","loc":"python-mutable-objects"},{"title":"Tutorial resolver cubo a ciegas","text":"Resolver por primera vez el cubo de Rubik es un momento emocionante. Sin embargo, esta sensación no es comparable a lo que se siente al resolver el cubo a ciegas por primera vez. En esta nueva entrada os dejo una serie de videos en los que os explico como poder resolver el cubo de Rubik a ciegas. Recordad que nada se consigue de la noche a la mañana, pero cuando se consigue, ese esfuerzo se ve recompensado. Aún recuerdo la primera vez que conseguí hacer mi primer cubo de Rubik a ciegas, allá por el 2013. Y solo puedo animaros a conseguirlo si ese es vuestro objetivo.","tags":"Rubik","url":"tutorial-resolver-cubo-a-ciegas","loc":"tutorial-resolver-cubo-a-ciegas"},{"title":"My first Vim plugin","text":"After been using Vim for a long time. I've decided to venture into the creation of my first vim plugin. It's a very simple plugin that allows you to iterate over a list of possible dictionaries used for spell checking. The idea is to be able to activate the spell checking ( :set spell ) in case it is deactivated and iterate over a configurable list of languages. The following function accomplish the objective. let g :SpellLangList = get ( g : , 'SpellLangList' , [] ) \" Cycle through spelllang list and toggle spell function ! ToggleCycleSpellLang () if ! & spell setlocal spell else let l :lang_index = index ( g :SpellLangList , & spelllang ) let l :lang_index = ( l :lang_index + 1 ) % len ( g :SpellLangList ) let & spelllang = g :SpellLangList[ l :lang_index] if l :lang_index == 0 setlocal nospell endif endif endfunction It'll be possible to configure the list of languages and the keybindings as follows: let g :SpellLangList = [ \"en_us\" , \"es\" , \"en_us,es\" ] nnoremap < F6 > : call ToggleCycleSpellLang ()< CR > Consequently pressing F6 will enable spell check for the current buffer ( :set spell ), and pressing F6 successively will be changing current language used for spell checking ( :set spelllang=es ) until finally disable spell check again ( :set nospell ). I've uploaded the plugin to a github repository, and I've added similar funcionality related with quickfix and location windows.","tags":"Programming","url":"en/my-first-vim-plugin","loc":"en/my-first-vim-plugin"},{"title":"Mutable objects in python","text":"Let's assume we have defined the following function: def f ( x , l = []): for i in range ( x ): l . append ( i ) print ( l ) If we have to guess what is the output of these calls to the function. A lot of us will think is: >>> f ( 2 ) [ 0 , 1 ] >>> f ( 3 , [ 3 , 4 , 5 ]) [ 3 , 4 , 5 , 0 , 1 , 2 ] >>> f ( 3 ) # WRONG RESULT [ 0 , 1 , 2 ] However, the correct result is: >>> f ( 2 ) [ 0 , 1 ] >>> f ( 3 , [ 3 , 4 , 5 ]) [ 3 , 4 , 5 , 0 , 1 , 2 ] >>> f ( 3 ) # CORRECT RESULT [ 0 , 1 , 0 , 1 , 2 ] This is due to the fact that lists in python are mutable objects , and therefore whenever they are defined as default parameters in a function, the list behaves as a global variable common to all function's executions. When we call to f(2) for the first time, the value [] is being used by default. But when f(3) is executed the same global variable used when f(2) was called is used, which last value is [0, 1] . Table of objects in python Object Mutable bool No int No float No list Yes tuple No str No set Yes frozenset No dict Yes Mutable objects in python are passed by reference. Immutable objects is like they were being passed by value. An example of that is the following code: def f ( l ): l . append ( 23 ) >>> l = [ 37 ] >>> f ( l ) >>> print ( l ) [ 37 , 23 ]","tags":"Programming","url":"en/python-mutable-objects","loc":"en/python-mutable-objects"}]};