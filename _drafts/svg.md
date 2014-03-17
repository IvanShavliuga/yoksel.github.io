---
layout: default
title: SVG
type: post
image: 
desc: 

links:
- url: http://caniuse.com/#search=svg
  name: Browsers support for SVG
- url: http://css-tricks.com/svg-fallbacks/
  name: SVG Fallbacks
- url: http://modernizr.com/
  name: Modernizr  
- url: http://lynn.ru/examples/svg/
  name: Трюки с SVG и тегом image
- url: caniuse.com/#search=svg
  name: Support SVG in browsers
---

SVG - это формат векторных изображений, основанный на XML. 

Спецификация: <a href="http://www.w3.org/TR/SVG/">w3.org/TR/SVG</a>


Формат имеет массу преимуществ:

- векторные изображения масштабируются без потери качества;
- SVG, как правило, весит меньше, чем PNG-версия того же изображения;
- содержимое рисунка описывается на XML, SVG-файл можно открыть в текстовом редакторе и увидеть человекопонятный код;
- поэтому SVG-изображение не только нарисовать в векторном редакторе, но и написать руками;
- SVG-файл - это всегда исходник. В отличие от растровой графики, для его редактирования не требуется исходный PSD-файл, содержимое файла не склеивается в один слой, поэтому его всегда можно просто открыть и отредактировать;
- внутри SVG-файла можно описывать тени и градиенты, причем использовать их можно не только внутри этого файла, но также можно применять и к внешним элементам. 
- внутри файла могут находиться CSS и JavaScript. 

<!--more-->

Пример SVG:

<p data-height="263" data-theme-id="4974" data-slug-hash="vzBxp" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/yoksel/pen/vzBxp'>SVG Car</a> by yoksel (<a href='http://codepen.io/yoksel'>@yoksel</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

SVG хорошо поддерживается всеми современными браузерами и его уже вполне можно использовать, предусмотрев PNG-версии для старых браузеров. 


ПРОВЕРИТЬ:

- доступность для JS
- доступность для CSS
- фолбеки

<h4>Способы вставки SVG в HTML:</h4>

<h5>Embed/object/iframe</h5>

<table class="marg--bottom">
    <thead>
        <tr>
            <td>Embed:</td>
            <td>Object:</td>
            <td>Iframe:</td>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><embed src="../assets/img/svg/sign.svg" width="199" height="200"></td>
            <td><object type="image/svg+xml" data="../assets/img/svg/sign.svg" width="199" height="200"></object></td>
            <td><iframe src="../assets/img/svg/sign.svg" width="199px" height="200px"></iframe></td>
        </tr>
    </tbody>
</table>

<h6>Embed:</h6>
<pre><code class="language-markup">&lt;embed src="your.svg" 
        width="199" height="200"></code></pre> 

<h6>Object:</h6>
<pre><code class="language-markup">&lt;object data="your.svg" 
        type="image/svg+xml" width="199" height="200">&lt;/object></code></pre>

<h6>Iframe:</h6>
<pre><code class="language-markup">&lt;iframe src="your.svg" 
        width="199px" height="200px">&lt;/iframe></code></pre> 

 <b>Плюсы:</b>

 - содержимое SVG доступно для JavaScript (ПРОВЕРИТЬ!!!);
 - хорошая поддержка браузерами (все, кроме IE8 и ниже)

<b>Поддержка браузерами:</b>

<table class="table--with-border table--w-auto marg--bottom">
    <thead>
        <tr>
            <td>IE</td>
            
            <td>Opera</td>
            <td>Opera Mini</td>
            <td>Opera Mobile</td>
            
            <td>Chrome</td>
            <td>Firefox</td>
            <td>Safari</td>
        </tr>
    </thead>

    <tbody>
        <tr>
            <td class="ie"> 9+ </td>
            
            <td class="op"> 9+ </td>
            <td class="opMin"> 5+ </td>
            <td class="opMob"> 10+ </td>

            <td class="chrome"> 4+ </td>
            <td class="ff"> 3+</td>
            <td class="saf"> 3.2+ </td>            
        </tr>
    </tbody>
</table>

<h5>IMG</h5>

<img src="../assets/img/svg/sign.svg">

<pre><code class="language-markup">&lt;img src="your.svg"></code></pre>     

<b>Плюсы:</b>
- удобно в использовани

<b>Минусы:</b>
- содержимое недоступно для JS

<b>Замена для старых браузеров:</b>

123

Ниже приведен способ, при котором браузеры сами определят что им показывать. Современные браузеры выберут аттрибут <code>xlink:href</code> и покажут SVG, старые выберут <code>src</code> и покажут растровую версию:

<pre><code class="language-markup">&lt;svg width="250px" height="5px">
    &lt;image xlink:href="picture.svg"
           src="picture.png"
           width="250px" height="50px"/>
&lt;/svg></code></pre>

Способ найден здесь:
<a href="http://lynn.ru/examples/svg/">lynn.ru/examples/svg/</a>


<b>Поддержка браузерами:</b>

<table class="table--with-border table--w-auto marg--bottom">
    <thead>
        <tr>
            <td>IE</td>
            
            <td>Opera</td>
            <td>Opera Mini</td>
            <td>Opera Mobile</td>
            
            <td>Chrome</td>
            <td>Firefox</td>
            <td>Safari</td>
        </tr>
    </thead>

    <tbody>
        <tr>
            <td class="ie"> 9+ </td>
            
            <td class="op"> 9+ </td>
            <td class="opMin"> 5+ </td>
            <td class="opMob"> 10+ </td>

            <td class="chrome"> 4+ </td>
            <td class="ff"> 4+</td>
            <td class="saf"> 4+ </td>
        </tr>
    </tbody>
</table>

<h5>Css backgrounds</h5>

<div style="width: 199px; height: 200px; margin-bottom: 1em; background-image: url(../assets/img/svg/sign.svg)"></div>

<pre><code class="language-css">background-image: url(your.svg)</code></pre>


<b>Замена для старых браузеров:</b>

123

div {
    background-image: url(fallback.png);
    background-image: url(your.svg), none;
}

<b>Поддержка браузерами:</b>

<table class="table--with-border table--w-auto marg--bottom">
    <thead>
        <tr>
            <td>IE</td>
            
            <td>Opera</td>
            <td>Opera Mini</td>
            <td>Opera Mobile</td>
            
            <td>Chrome</td>
            <td>Firefox</td>
            <td>Safari</td>
        </tr>
    </thead>

    <tbody>
        <tr>
            <td class="ie"> 9+ </td>
            
            <td class="op"> 12+ </td>
            <td class="opMin"> - </td>
            <td class="opMob"> 16+ </td>

            <td class="chrome"> 5+ </td>
            <td class="ff"> 24+</td>
            <td class="saf"> 5+ </td>
            
        </tr>
    </tbody>
</table>

<h5>Inline SVG</h5>

<svg width="199" height="200"><g fill="#7ED321"><path d="M110 10h-20v76.567l-.605-.605-62.933 62.933 14.142 14.142 49.395-49.395v76.358h20v-76.358l49.395 49.395 14.142-14.142-62.933-62.933-.605.605v-76.567z" /><path d="M99.5 0c-54.965 0-99.5 44.784-99.5 100s44.535 100 99.5 100 99.5-44.784 99.5-100-44.535-100-99.5-100zm0 20c43.894 0 79.5 35.805 79.5 80s-35.606 80-79.5 80-79.5-35.805-79.5-80 35.606-80 79.5-80z" /></g></svg>

<b>Поддержка браузерами:</b>

<table class="table--with-border table--w-auto marg--bottom">
    <thead>
        <tr>
            <td>IE</td>
            
            <td>Opera</td>
            <td>Opera Mini</td>
            <td>Opera Mobile</td>
            
            <td>Chrome</td>
            <td>Firefox</td>
            <td>Safari</td>
        </tr>
    </thead>

    <tbody>
        <tr>
            <td class="ie"> 9+ </td>
        
            <td class="op"> 11.6+ </td>
            <td class="opMin"> - </td>
            <td class="opMob"> 12+ </td>

            <td class="chrome"> 7+ </td>
            <td class="ff"> 4+</td>
            <td class="saf"> 5.1+ </td>
            
        </tr>
    </tbody>
</table>


<i>Примеры в посте вставлены как есть, без фолбеков. Можно открыть страницу в интересующем браузере и посмотреть как ведут себя разные способы вставки.</i>


<h4>Отображение в старых браузерах</h4>

- <h5>Modernizr</h5>
Элементы, содержащие SVG-графику, заворачиваются в <code>div.svg</code> (например).
Затем определяем поддержку SVG с помощью <a href="http://modernizr.com/">Modernizr</a>, браузеры без SVG определяем по классу <code>.no-svg</code>, дальше немного CSS:

<pre><code class="language-css">/* Задаем обертке размеры и фон в PNG: */
.no-svg .svg {
  width: 200px;
  height: 200px;
  background: url(your.png); /* PNG-заглушка */
  }
/* Скрываем содержимое обертки (иначе будут отображаться
иконки незагрузившихся картинок) */    
.no-svg .svg IFRAME,
.no-svg .svg OBJECT,
.no-svg .svg EMBED,
.no-svg .svg IMG {
  display: none;
} </code></pre>

Стили сработают только в браузерах, не поддерживающих SVG.
 
Хорошее решение для IE8 и старше, но оно не поможет для Opera 12 и старше и для Opera Mini. Они частично поддерживают SVG, поэтому селектор не сработает. !!!!!!! ФОНЫ!!!!

Для IE также можно использовать <a href="http://www.paulirish.com/2008/conditional-stylesheets-vs-css-hacks-answer-neither/">вот такое определение версии браузера</a>.

- <h5>:root</h5>
Селектор <code>:root</code> сработает только в браузерах с поддержкой CSS3, следовательно с его помощью можно отфильтровать стили для старых и для новых браузеров.

<pre><code class="language-css">/* По умолчанию показываем PNG: */
.svg {
  width: 200px; 
  height: 200px;
  background: url(your.png);
}

/* Контейнеры с SVG скрыты. */
.svg IFRAME,
.svg OBJECT,
.svg EMBED,
.svg IMG {
  display: none;  
}

/* Включаем содержимое для браузеров с поддержкой CSS3 */
:root IFRAME,
:root OBJECT,
:root EMBED,
:root IMG {
  display: inline-block;
}
</code></pre>

Как и предыдущее решение, подойдет для IE8 и старше, но не сработает в Opera 12 и старше и в Opera Mini, потому что они поддерживают CSS3. !!!!!!! ФОНЫ!!!!

- <h5>решение для Opera</h5>


<!-- @media all and (-webkit-min-device-pixel-ratio:10000), not all and (-webkit-min-device-pixel-ratio:0) { 
  :root .bg {
    background-image: url(http://img-fotki.yandex.ru/get/9895/5091629.99/0_7eb13_84c8f776_orig);
  }
  
} -->

---------

<img src="../assets/img/svg/sign.svg" alt="">
<img src="../assets/img/svg/sign.png" alt="">

<!-- Opera Mini при прямой вставке SVG в HTML показывает decription. 

<link rel="icon" type="image/svg+xml" href="favicon.svg" />
-->

Также SVG можно использовать как favicon и как шрифт. Шрифт, в основном, поддерживается оперой и браузерами на Webkit.

Разные способы вставки дают свои преимущества.

1. Если с SVG не нужно как-то взаимодействовать, можно вставить как картинку. 


http://stackoverflow.com/questions/4476526/do-i-use-img-object-or-embed-for-svg-files

If you want a non-interactive svg, use &lt;img> with script fallbacks to png version (for older IE and android < 
3). One clean and simple way to do that:



This will behave much like a GIF image, and if your browser supports declarative animations (SMIL) then those will play.

If you want an interactive svg, use either &lt;iframe> or &lt;object>.

If you need to provide older browsers the ability to use an svg plugin, then use &lt;embed>.

For svg in css background-image and similar properties, modernizr is one choice for switching to fallback images, another is depending on multiple backgrounds to do it automatically:

div {
    background-image: url(fallback.png);
    background-image: url(your.svg), none;
}
 Nice!!


http://jsbin.com/velix/1/edit





/////

SVG имеет массу преимуществ:

Таким образом SVG-файл может служить контейнером для эффектов ****. Эффекты пока не очень хорошо поддерживаются.

- для стилизации SVG-графики можно использовать CSS, также включая его в файл. С помощью @media-queries, например, можно делать по-настоящему адаптивную графику (ПРИМЕР!!!)
- также внутри файла можно размещать скрипты (ПРИМЕР?)


////








(ПРОВЕРИТЬ!!!).    



