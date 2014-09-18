# hibrido google maps

plugin para facilitar a integração de um google maps com triggers o plugin receberá os dados (endereços) e os triggers serão definidos por data attributes

# ativar

para ativar deve-se chamar o método estático `bootstrap` da classe `HGM` nas páginas que desejamos

# data attributes

o plugin funciona todo em cima dos data attributes do html5

## data-hgm-canvas

elemento canvas que receberá o google maps

## data-hgm-addresses

atributo que receberá um json de todos os endereços mostrados no site, ele deve estar no mesmo elemento do `data-hgm-canvas`

```
[
    { "latitude": -27.139770, "longitude": -48.900219, "info": "Misso @ Casa", "pin": "http://www.morethanamap.com/images/marker-A.png" },
    { "latitude": -27.093483, "longitude": -48.911192, "info": "Misso @ <b>Trabalho</b>" }
]
```

com os campos:

campo     | descrição
-----     | ---------
latitude  | latitude (required)
longitude | longitude (required)
info      | conteúdo da infobox
pin       | url de uma imagem que será o pin
callback  | sring contendo uma função que será executada quando o marker for clicado, dois parâmetros são passados o indice e o marker

## data-hgm-options

atributo que pode receber um json com opções para reescrever as padrões do google maps, ele deve estar no mesmo elemento do `data-hgm-canvas`

## data-hgm-change

atributo que recebe um valor (e.g. `data-hbrd-gm-change="0"`) onde o 0 seria o indice do marker no array