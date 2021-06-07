Title: Mi primer plugin en VIM
Date: 2020-03-15 19:21
Category: Programación
Status: published
lang: es
slug: my-first-vim-plugin
Tags: programación, Vim

Tras usar Vim durante un largo periodo de tiempo, he decidido aventurarme a hacer mi primer plugin.

Se trata de un plugin muy sencillo que simplemente te permite iterar una lista de posibles diccionarios para la corrección ortográfica.

La idea es que sea posible activar el corrector ortográfico (`:set spell`) en caso de que este desactivado e ir iterando por una lista configurable de idiomas.

``` vim
let g:SpellLangList = get(g:, 'SpellLangList', [])

" Cycle through spelllang list and toggle spell
function! ToggleCycleSpellLang()
    if ! &spell
        setlocal spell
    else
        let l:lang_index = index(g:SpellLangList, &spelllang)
        let l:lang_index = (l:lang_index + 1) % len(g:SpellLangList)
        let &spelllang = g:SpellLangList[l:lang_index]

        if l:lang_index == 0
            setlocal nospell
        endif
    endif
endfunction
```

Se podría configurar por ejemplo con las siguientes opciones:

``` vim
let g:SpellLangList= ["en_us", "es", "en_us,es"]
nnoremap <F6> :call ToggleCycleSpellLang()<CR>
```

De esta manera una primera pulsación de la tecla `F6` activaría la corrección ortográfica para el buffer activo, y sucesivas pulsaciones irían cambiando el idioma activo (`:set spelllang=es`) iterando la lista `g:SpellLangList` hasta desactivar de nuevo la corrección ortográfica (`:set nospell`).

He subido el plugin a un repositorio en [github](https://github.com/asierrayk/vim-toggle){: class="ampl" target="_blank"} y añadido alguna funcionalidad, relacionada con las ventanas `quickfix` y `location`.
