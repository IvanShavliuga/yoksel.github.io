---
layout: default
title:  Css-селекторы, часть 2
type: post

links:
- url: /pages/css-selectors.html
  name: CSS-селекторы одной таблицей	
---
Начало тут: <a href="/css-selectors">Css-селекторы</a><!--more-->

<h4>Селекторы из CSS3</h4>

<ul>
<li><p><code>E[foo^="bar"]</code> - элемент с заданным атрибутом, значение которого начинается с заданной строки.</p>
<pre class="language-css"><code class="language-css">P[data-content^="hello"] {
  border: 2px solid tomato;
  }</code></pre>

<iframe src="http://jsbin.com/aMakIZI/46/" style="height: 270px" class="jsbin"></iframe></li>

<li><p><code>E[foo$="bar"]</code> - элемент с заданным атрибутом, значение которого заканчивается заданной строкой.</p>
<pre class="language-css"><code class="language-css">P[data-content$="hello"] {
  border: 2px solid chartreuse;
  }</code></pre>

<iframe src="http://jsbin.com/aMakIZI/47/" style="height: 270px" class="jsbin"></iframe></li>

<li><p><code>E[foo*="bar"]</code> - элемент с заданным атрибутом, значение которого содержит заданную строку.</p>

<pre class="language-css"><code class="language-css">P[data-content*="hello"] {
  border: 2px solid mediumseagreen;
  }</code></pre>

<iframe src="http://jsbin.com/aMakIZI/48/" style="height: 270px" class="jsbin"></iframe></li>

<li><p><code>E:root</code> - псевдокласс, представляющий корневой элемент документа. Обычно это тег <code>html</code>.</p></li>

<li><p><code>E:nth-child(n)</code> - <code>n</code> по счету дочерний элемент.</p>

<pre class="language-css"><code class="language-css">P:nth-child(2) {
  border-color: crimson;
  }
P:nth-child(3) {
  border-color: orange;
  }
P:nth-child(6) {
  border-color: gold;
  }</code></pre>

<iframe src="http://jsbin.com/aMakIZI/49/" style="height: 270px" class="jsbin"></iframe>
</li>

<li><p><code>E:nth-last-child(n)</code> - <code>n</code> по счету дочерний элемент, начиная с конца.</p>

<pre class="language-css"><code class="language-css">P:nth-last-child(1) {
  border-color: crimson;
  }
P:nth-last-child(4) {
  border-color: orange;
  }
P:nth-last-child(5) {
  border-color: gold;
  }</code></pre>

<iframe src="http://jsbin.com/aMakIZI/58/" style="height: 270px" class="jsbin"></iframe>
</li>

<li><p><code>E:nth-of-type(n)</code> - <code>n</code> по счету дочерний элемент определенного типа.</p>

<pre class="language-css"><code class="language-css">P:nth-of-type(1) {
  border-color: crimson;
  }
P:nth-of-type(3) {
  border-color: orange;
  }
P:nth-of-type(6) {
  border-color: gold;
  }</code></pre>

<iframe src="http://jsbin.com/aMakIZI/52/" style="height: 350px" class="jsbin"></iframe></li>

<li><p><code>E:nth-last-of-type(n)</code> - <code>n</code> по счету дочерний элемент определенного типа, начиная с конца.</p>

<pre class="language-css"><code class="language-css">P:nth-last-of-type(1) {
  border-color: crimson;
  }
P:nth-last-of-type(4) {
  border-color: orange;
  }
P:nth-last-of-type(6) {
  border-color: gold;
  }</code></pre>

<iframe src="http://jsbin.com/aMakIZI/56/" style="height: 370px" class="jsbin"></iframe></li>

<li><p><code>E:last-child</code> - последний дочерний элемент.</p>

<pre class="language-css"><code class="language-css">P:last-child {
  border-color: slateblue;
  }</code></pre>

<iframe src="http://jsbin.com/aMakIZI/59/" style="height: 200px" class="jsbin"></iframe></li>

<li><p><code>E:first-of-type</code> - первый дочерний элемент определенного типа.</p>

<pre class="language-css"><code class="language-css">P:first-of-type {
  border-color: orchid;
  }</code></pre>

<iframe src="http://jsbin.com/aMakIZI/60/" style="height: 250px" class="jsbin"></iframe></li>

<li><p><code>E:last-of-type</code> - последний дочерний элемент определенного типа.</p>

<pre class="language-css"><code class="language-css">P:last-of-type {
  border-color: fuchsia;
  }</code></pre>

<iframe src="http://jsbin.com/aMakIZI/62/" style="height: 250px" class="jsbin"></iframe></li>

<li><p><code>E:only-child</code> - единственный дочерний элемент родителя.</p>

<pre class="language-css"><code class="language-css">P:only-child {
  border-color: lightsalmon;
  }</code></pre>

<iframe src="http://jsbin.com/aMakIZI/63/" style="height: 330px" class="jsbin"></iframe></li>

<li><p><code>E:only-of-type</code> - единственный дочерний элемент такого типа</p>

<pre class="language-css"><code class="language-css">P:only-of-type {
  border-color: crimson;
  }</code></pre>

<iframe src="http://jsbin.com/aMakIZI/64/" style="height: 370px" class="jsbin"></iframe></li>

<li><p><code>E:empty</code> - пустой элемент.</p></li>

<li><p><code>E:target</code> - элемент, на который ведет якорь с решеткой в адресе страницы, например <i>http://someurl.com<b>#test</b></i></p>

<pre class="language-css"><code class="language-css">P:target {
  border-color: orangered;
  }</code></pre>

<iframe src="http://jsbin.com/aMakIZI/65/#test" style="height: 190px" class="jsbin"></iframe></li>

<li><p><code>E:enabled</code>, 
<code>E:disabled</code> - инпуты с разрешенным редактированием и заблокированные.</p>

<pre class="language-css"><code class="language-css">INPUT:enabled {
  border: 2px solid orange;
  }
INPUT:disabled {
  border: 2px solid #EEE;
  color: #CCC;
  }</code></pre>

<iframe src="http://jsbin.com/aMakIZI/67/" style="height: 100px" class="jsbin"></li>

<li><p><code>E:checked</code> - a user interface element E which is checked (for instance a radio-button or checkbox) 	The UI element states pseudo-classes 	3</p>

<pre class="language-css"><code class="language-css">INPUT:enabled {
  border: 2px solid orange;
  }
INPUT:disabled {
  border: 2px solid #EEE;
  color: #CCC;
  }</code></pre>

<iframe src="http://jsbin.com/aMakIZI/67/" style="height: 170px" class="jsbin"></iframe></li>

<li><p><code>E:not(s)</code> - элементы, которые не отвечают условию, заданному в скобках</p>

<pre class="language-css"><code class="language-css">*:not(DIV) {
  border-color: gold;
  }
P:not([class="one"]) {
  border-color: skyblue;
  }</code></pre>

<iframe src="http://jsbin.com/aMakIZI/69/" style="height: 250px" class="jsbin"></iframe>
</li>

<li><p><code>E ~ F</code> - второй элемент, который следует после первого, независимо от их удаленности друг от друга. Выбираются все следующие элементы, в отличие от <code>E + F</code>, который выбирает только те, которые находятся непосредственно друг за другом.</p>

<pre class="language-css"><code class="language-css">P ~ DIV {
  border-color: yellowgreen;
  }</code></pre>

<iframe src="http://jsbin.com/aMakIZI/70/" style="height: 300px" class="jsbin"></iframe></li>
</ul>