Title: My first Vim plugin
Date: 2020-03-15 19:21
Category: Programming
Status: published
lang: en
slug: my-first-vim-plugin
Tags: Programming, Vim

After been using Vim for a long time. I've decided to venture into the creation of my first vim plugin.

It's a very simple plugin that allows you to iterate over a list of possible dictionaries used for spell checking.
The idea is to be able to activate the spell checking (`:set spell`) in case it is deactivated and iterate over a configurable list of languages.

The following function accomplish the objective.
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

It'll be possible to configure the list of languages and the keybindings as follows:

``` vim
let g:SpellLangList= ["en_us", "es", "en_us,es"]
nnoremap <F6> :call ToggleCycleSpellLang()<CR>
```

Consequently pressing `F6` will enable spell check for the current buffer (`:set spell`), and pressing `F6` successively will be changing current language used for spell checking (`:set spelllang=es`) until finally disable spell check again (`:set nospell`).

I've uploaded the plugin to a [github](https://github.com/asierrayk/vim-toggle){: class="ampl" target="_blank"} repository, and I've added similar funcionality related with quickfix and location windows.
