---
layout: default
title: Размеры в SVG
type: post
image:
desc:

---
Возможность гибко управлять масштабированием изображений - та самая магия, которая делает SVG-графику по настоящему резиновой.
 <!--more-->

Когда мы говорим о размерах, первым делом в голову приходят ширина и высота, но у SVG-элемента есть ещё два параметра для размеров.

Сочетание параметров между собой сначала может показаться сложным, но это важная часть SVG, так что нужно понимать как всё работает.

SVG без размеров ведёт себя интересно. Я сделала такой пример, чтобы было сравнить поведение SVG в разных браузерах:

<p data-height="350" data-theme-id="4974" data-slug-hash="wsoEl" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/yoksel/pen/wsoEl/'>wsoEl</a> by yoksel (<a href='http://codepen.io/yoksel'>@yoksel</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

Кружочки - простые фигуры, фиолетовая рамка показывает границы области отрисовки SVG.

В Хроме, Сафари и Опере 15+ SVG растянется на всю видимую часть окна.
В Firefox изображение получит размеры 310x160.
В ie???*******
В Опере 12 изображение будет высотой 150px и шириной 100% относительно ширины окна.

Очевидно, что SVG нужно указать размеры, чтобы браузеры понимали как должно вести себя изображение.

Зададим ему ширину и высоту:

<p data-height="350" data-theme-id="4974" data-slug-hash="xkpKB" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/yoksel/pen/xkpKB/'>xkpKB</a> by yoksel (<a href='http://codepen.io/yoksel'>@yoksel</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

SVG во всех браузерах получило фиксированные размеры. Точнее, размеры получила область отрисовки (viewport), никак не затрагивая содержимое.

Как сделать, чтобы содержимое тянулось?

Поведением содержимого управляет другое свойство: <code>viewBox</code>. Оно определяет какая часть изображения должна быть показана:

<pre><code class="language-markup">viewBox="0 0 210 210"</code></pre>

Первые два значения - координаты minX и minY, последние - ширина и высота.

Уберем размеры и зададим <code>viewBox</code>:

<p data-height="350" data-theme-id="4974" data-slug-hash="EDnhr" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/yoksel/pen/EDnhr/'>EDnhr</a> by yoksel (<a href='http://codepen.io/yoksel'>@yoksel</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

SVG без размеров, но с <code>viewBox</code> стремится заполнить собой всё доступное пространство.


