---
layout: default
title: Контекст наложения
categories:
- Css
tags: []
status: publish
type: post
published: true
---
Если с помощью <code>z-index</code> изменять порядок наложения элементов друг на друга, в некоторых случаях могут возникать проблемы из-за свойств, создающих новый контекст наложения.<!--more-->

Свойства, создающие контекст{{ excerpt_separator }}: <code>opacity</code> со значением меньше 1, <code>transform</code>, <code>perspective</code> и <code>filter</code>.

В качестве подопытного кролика возьмем такую конструкцию:
<iframe class="jsbin" style="height: 300px" src="http://jsbin.com/OSIBiva/10/embed?output"></iframe>

По умолчанию голубой элемент накладывается на красный, но я задала красному элементу <code>z-index: 10;</code>, чтобы видеть действие свойств, создающих контекст.

Теперь зададим родителю первого элемента одно из вышеперечисленных свойств, например:  <code>opacity: .99</code>:
<iframe class="jsbin" style="height: 300px" src="http://jsbin.com/OSIBiva/11/embed?output"></iframe>

Первый элемент получил свой контекст наложения, и теперь <code>z-index</code> будет рассчитываться внутри него.

Здесь видно, что красный элемент перекрывает зеленый, потому что у красного задан высокий <code>z-index</code>, при этом весь левый элемент перекрывается правым, несмотря на высокое значение <code>z-index</code> у красного элемента:
<iframe class="jsbin" style="height: 300px" src="http://jsbin.com/OSIBiva/12/embed?output"></iframe>

Можно попробовать это обойти, добавив <code>z-index</code> самому родителю, но в этом случае родительский элемент будет перекрывать всё содержимое второго элемента, что не всегда может быть нужно:
<iframe class="jsbin" style="height: 300px" src="http://jsbin.com/OSIBiva/13/embed?output"></iframe>

Кроме того, частое использование <code>z-index</code> может затруднить дальнейшую отладку и поддержку кода.
