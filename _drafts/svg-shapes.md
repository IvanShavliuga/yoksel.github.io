---
layout: default
title: SVG-фигуры
type: post
image: 
desc: 

links:
- url: http://www.w3.org/TR/SVG/
  name: w3.org/TR/SVG
- url: http://caniuse.com/#search=svg
  name: Browsers support for SVG
- url: http://css-tricks.com/svg-fallbacks/
  name: SVG Fallbacks
- url: http://lynn.ru/examples/svg/
  name: Трюки с SVG и тегом image
---

<a href="/svg">Начало про SVG</a>

Следует отметить, что писать код SVG руками совершенно не обязательно: с этим гораздо лучше справятся векторные редакторы, например, мощный, но платный Adobe Illustrator, бесплатный, но не такой удобный <a href="http://www.inkscape.org/en/">Inkscape</a>, немного платный, но довольно симпатичный <a href="http://www.bohemiancoding.com/sketch/">Sketch</a>.

Хотя написать простую графику не так уж и сложно. Кроме того, навыки могут пригодиться, если надо нарисовать что-то простое или подправить код в отсутствие под рукой векторного редактора.

Для рисования используются простые фигуры: <code>line</code>, <code>polyline</code>, <code>rect</code>, <code>polygon</code>, <code>circle</code>, <code>ellipse</code>. 
Задаем выбранную фигуру, определяем её размеры и координаты, затем добавляем фон и обводку.

Размеры и координаты задаются для разных фигур по-разному, а вот фон и обводка - одинаковы для всех:

<code>fill</code> - заливка. Можно задать цвет любым способом. Прозрачность - <code>none</code> или <code>transparent</code>. Цвет по умолчанию - черный;
<code>stroke</code> - цвет обводки;
<code>stroke-width</code> - толщина обводки, по умолчанию - 1. Без <code>stroke</code> не работает.

Ниже можно увидеть примеры простых SVG-фигур:

<h4>Rect</h4>  

<svg class="svg" width="230" height="140"><rect x="5" y="5" width="220" height="130" fill="skyblue" stroke="steelblue" stroke-width="5" /></svg>

<pre><code class="language-markup">&lt;svg width="230" height="140">
    &lt;rect x="5" y="5" width="220" height="130" 
          fill="skyblue" stroke="steelblue" stroke-width="5" />
&lt;/svg></code></pre>       

<code>x</code>,<code>y</code> - координаты левого верхнего угла фигуры;
<code>width</code>, <code>height</code> - ширина и высота прямоугольника.

Закругленные уголки задаются параметрами <code>rx</code> и <code>ry</code>. Если задан только один из параметров, скругление по вертикали и по горизонтали будет одинаковым:

<svg class="svg" width="230" height="140"><rect x="5" y="5" width="220" height="130" rx="20" fill="yellowgreen" stroke="green" stroke-width="5" /></svg>
  
<pre><code class="language-markup">&lt;svg width="230" height="140">
    &lt;rect x="5" y="5" width="220" height="130" rx="20" 
          fill="yellowgreen" stroke="green" stroke-width="5" />
&lt;/svg></code></pre> 

Если заданы оба параметра (и они таки разные), радиус скругления будет разным:

<svg class="svg" width="230" height="140"><rect x="5" y="5" width="220" height="130" rx="10" ry="50" fill="khaki" stroke="darkkhaki" stroke-width="5" /></svg>

<pre><code class="language-markup">&lt;svg width="230" height="140">
    &lt;rect x="5" y="5" width="220" height="130" rx="10" ry="50" 
          fill="khaki" stroke="darkkhaki" stroke-width="5" />
&lt;/svg></code></pre> 

<h4>Polygon</h4>

<svg class="svg" width="230" height="140"><polygon points="5,135 115,5 225,135" fill="violet" stroke="purple" stroke-width="5" /></svg>

<pre><code class="language-markup">&lt;svg width="230" height="140">
    &lt;polygon points="5,135 115,5 225,135" 
             fill="violet" stroke="purple" stroke-width="5" />
&lt;/svg></code></pre> 

<svg class="svg" width="140" height="130"><polygon points="70,5 90,41 136,48 103,80 111,126 70,105 29,126 36,80 5,48 48,41" fill="turquoise" stroke="lightseagreen" stroke-width="5" /></svg>
  
<pre><code class="language-markup">&lt;svg width="140" height="130">
    &lt;polygon points="70,5 90,41 136,48 103,80 111,126 70,105 29,126 36,80 5,48 48,41"        
             fill="turquoise" stroke="lightseagreen" stroke-width="5" />
&lt;/svg>
  </code></pre> 

В <code>points</code> задаются <code>x,y</code>-координаты вершин фигуры, через пробел.

<code>polygon</code> замыкается сам по себе, последнюю точку можно не указывать.

<h4>Circle</h4>

<svg class="svg" width="140" height="140"><circle r="65" cx="70" cy="70" fill="orangered" stroke="crimson" stroke-width="5" /></svg>

<pre><code class="language-markup">&lt;svg width="140" height="140">
     &lt;circle r="65" cx="70" cy="70" 
             fill="orangered" stroke="crimson" stroke-width="5" />
&lt;/svg></code></pre> 

<code>r</code> - радиус круга;
<code>cx</code>, <code>cy</code> - координаты центра круга.

<svg class="svg" width="230" height="140"><ellipse rx="110" ry="60" cx="115" cy="70" fill="gold" stroke="orange" stroke-width="5" /></svg>

<pre><code class="language-markup">&lt;svg width="230" height="140">
     &lt;ellipse rx="110" ry="60" cx="115" cy="70" 
              fill="gold" stroke="orange" stroke-width="5" />
&lt;/svg></code></pre> 

<code>rx</code>, <code>ry</code> - горизонтальный и вертикальный радиусы эллипса;
<code>cx</code>, <code>cy</code> - координаты центра эллипса.

Более сложные фигуры можно сделать из сочетания простых:

<svg class="svg" width="250" height="210"><g fill="#333"><ellipse rx="45" ry="37" cx="55" cy="60" transform="rotate(-45, 55, 55)"/><ellipse rx="45" ry="37" cx="190" cy="60" transform="rotate(45, 190, 55)"/><circle r="67" cx="122" cy="125"/></g></svg>

При этом стиль фигур можно задать один раз для всей группы, а не отдельно для каждой фигуры:

<pre><code class="language-markup">&lt;svg width="250" height="210" style="border: 1px solid">
    &lt;g fill="#333">
      &lt;ellipse rx="45" ry="37" cx="55" cy="60" transform="rotate(-45, 55, 55)"/>
      &lt;ellipse rx="45" ry="37" cx="190" cy="60" transform="rotate(45, 190, 55)"/>
      &lt;circle r="67" cx="122" cy="125"/>
     &lt;/g>
&lt;/svg></code></pre> 


<h4>Transform</h4>

SVG-фигуры можно видоизменять с помощью свойства <code>transform</code>. 

Возможные значения: <code>translate</code>, <code>scale</code>, <code>rotate</code>, <code>skewX</code>, <code>skewY</code>, <code>matrix</code>.

Можно задавать несколько трансформаций через запятую или через пробел.

<h5>translate(tx [ty])</h5>

Если второй параметр не задан, он равен 0.

<div class="clear">
    <div class="column column-left">
        <code>translate(100)</code>

        <svg class="svg" width="250" height="200"><rect x="5" y="5" width="120" height="120" fill="hsla(120,100%,50%,.2)"/><rect x="5" y="5" width="120" height="120" fill="hsla(50,100%,50%,.6)" transform="translate(100)"/></svg> 
    </div>
    <div class="column column-right">
        <code>translate(70, 70)</code>

        <svg class="svg" width="200" height="200"><rect x="5" y="5" width="120" height="120" fill="hsla(120,100%,50%,.2)"/><rect x="5" y="5" width="120" height="120" fill="hsla(50,100%,50%,.6)" transform="translate(70, 70)"/></svg>        
    </div>
</div>       


<h5>scale(<i>sx [sy]</i>)</h5>

Если второй параметр не задан, он равен первому.

<div class="clear">
    <div class="column column-left">
        <code>scale(1.5)</code>

        <svg class="svg" width="200" height="200"><rect x="5" y="5" width="120" height="120" fill="hsla(120,100%,50%,.2)"/><rect x="5" y="5" width="120" height="120" fill="hsla(50,100%,50%,.6)" transform="scale(1.5)"/></svg>
    </div>
    <div class="column column-right">
        <code>scale(1.5, .5)</code>

        <svg class="svg" width="200" height="200"><rect x="5" y="5" width="120" height="120" fill="hsla(120,100%,50%,.2)"/><rect x="5" y="5" width="120" height="120" fill="hsla(50,100%,50%,.6)" transform="scale(1.5, .5)"/></svg>
    </div>
</div>        

<h5>rotate(rotate-angle [cx cy])</h5>

Если координаты центра поворота не заданы, они равны <code>0 0</code> - это левый верхний угол SVG-изображения.

<div class="clear">
    <div class="column column-left">
        <code>rotate(45)</code>
  
      <svg class="svg" width="200" height="200"><rect x="25" y="25" width="150" height="150" fill="hsla(120,100%,50%,.2)"/><rect x="25" y="25" width="150" height="150" fill="hsla(50,100%,50%,.6)" transform="rotate(45)"/></svg>
    </div>
    <div class="column column-right">
        <code>rotate(45 100 100)</code>

        <svg class="svg" width="200" height="200"><rect x="25" y="25" width="150" height="150" fill="hsla(120,100%,50%,.2)"/><rect x="25" y="25" width="150" height="150" fill="hsla(50,100%,50%,.6)"transform="rotate(45 100 100)"/></svg>
    </div>
</div>        

<h5>skewX(<i>skew-angle</i>), skewY(<i>skew-angle</i>)</h5>

<div class="clear">
    <div class="column column-left">
      <code>skewX(5)</code>

      <svg class="svg" width="200" height="200"><rect x="25" y="25" width="150" height="150" fill="hsla(120,100%,50%,.2)"/><rect x="25" y="25" width="150" height="150" fill="hsla(50,100%,50%,.6)"transform="skewX(5)"/></svg>
    </div>

    <div class="column column-right">
      <code>skewY(5)</code>
      
      <svg class="svg" width="200" height="200"><rect x="25" y="25" width="150" height="150" fill="hsla(120,100%,50%,.2)"/><rect x="25" y="25" width="150" height="150" fill="hsla(50,100%,50%,.6)" transform="skewY(5)"/></svg>
    </div>
</div>

<h5>matrix(a b c d e f)</h5>

<div class="clear">
    <div class="column column-left">
      <code>matrix(.3 0 0 .95 55 25)</code>
      
      <svg class="svg" width="200" height="200"><rect x="25" y="25" width="150" height="150" fill="hsla(120,100%,50%,.2)"/><rect x="25" y="25" width="150" height="150" fill="hsla(50,100%,50%,.6)" transform="matrix(.3 0 0 .95 55 25)"/></svg>
    </div>
</div>    
 

Также можно рисовать простыми линиями.

<h4>Line</h4>

<svg class="svg" width="230" height="140"><line x1="220" y1="10" x2="10" y2="130" stroke="violet" stroke-width="5" /></svg>

<pre><code class="language-markup">&lt;svg>
    &lt;line x1="220" y1="10" x2="20" y2="130" stroke="violet" stroke-width="5" />
&lt;/svg></code></pre>  

<code>x1</code>, <code>y1</code>, <code>x2</code>, <code>y2</code> - координаты начала и конца линии.

<h4>Polyline</h4>
 
<svg class="svg" width="260" height="140"><polyline points="5,135 30,5 55,135 80,5, 105,135 130,5, 155,135 180,5, 205,135 230,5, 255,135" stroke="orangered" fill="none" stroke-width="5" /></svg>

<pre><code class="language-markup">&lt;svg>
    &lt;polyline points="5,135 30,5 55,135 80,5, 105,135 130,5, 155,135 180,5, 205,135 230,5, 255,135" 
              fill="none" stroke="orangered" stroke-width="5" />
&lt;/svg></code></pre> 

В <code>points</code> задаются <code>x,y</code>-координаты точек, каждая точка через пробел.

<h4>Path</h4>

Более сложный вариант линии. С помощью <code>path</code> можно рисовать <code>line</code>, <code>polyline</code>, <code>polygon</code>, <code>circle</code> и <code>rect</code>.

В отличие от <code>polygon</code>, фигура не замыкается сама по себе.

<svg class="svg" width="142" height="122"><path d="M 10 110 L 10 10 L 40 50 L 70 10 L 100 50 L 130 10 L 130 110 L 10 110" fill="yellow" stroke="gold" stroke-width="5" /></svg>

<pre><code class="language-markup">&lt;svg class="svg" width="142" height="122">
    &lt;path d="M 10 110 L 10 10 L 40 50 L 70 10 L 100 50 L 130 10 L 130 110 L 10 110" 
          fill="yellow" stroke="gold" stroke-width="5"/>
&lt;/svg></code></pre> 


path

разная обводка

reusable, группировка

text 'image' and 'use'."6
