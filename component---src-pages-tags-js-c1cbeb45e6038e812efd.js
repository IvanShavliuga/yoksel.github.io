(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"+KJH":function(t,e,a){},enK5:function(t,e,a){"use strict";a.r(e),a.d(e,"default",(function(){return u})),a.d(e,"query",(function(){return c}));a("f3/d"),a("a1Th"),a("Btvt"),a("XfO3"),a("HEwt"),a("rGqo"),a("rE2o"),a("ioFf");var r=a("FdF9"),n=a("Yyp9"),l=a("zpb6"),o=a("lBEk");function s(t){return function(t){if(Array.isArray(t))return i(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return i(t,e);var a=Object.prototype.toString.call(t).slice(8,-1);"Object"===a&&t.constructor&&(a=t.constructor.name);if("Map"===a||"Set"===a)return Array.from(t);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return i(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var a=0,r=new Array(e);a<e;a++)r[a]=t[a];return r}var u=function(t){var e,a;function i(e){var a;return(a=t.call(this,e)||this)._props=e,a._data=a._props.data,a._tagsByName=Object(l.b)(),a}a=t,(e=i).prototype=Object.create(a.prototype),e.prototype.constructor=e,e.__proto__=a;var u=i.prototype;return u._getTagCloud=function(){var t=this,e=this._data.allMarkdownRemark.group,a=e.map((function(t){return t.totalCount})),n=Math.min.apply(Math,s(a)),l=Math.max.apply(Math,s(a)),o=Math.floor((l-n)/4);return e.map((function(e){var a=e.tag,n=e.totalCount,l=100+20*Math.round(n/o);return r.default.createElement("li",{className:"tags-list__item",key:a},r.default.createElement("button",{className:"tags-button","data-target-tag":a,title:"Статей по тегу: "+n,style:{fontSize:l+"%"}},t._tagsByName[a]||a))}))},u.render=function(){var t=this._props.path,e=this._data.allMarkdownRemark.edges;return r.default.createElement(n.a,{path:t,pageData:{title:"Метки",slug:"tags",image:"//yoksel.github.io/assets/img/previews/tags.png",hideComments:!0,hideSharing:!0}},r.default.createElement("ul",{className:"tags-list no-bullets"},this._getTagCloud()),r.default.createElement("h2",{className:"posts-list-title visually-hidden"},"Все статьи"),r.default.createElement(o.a,{items:e,mod:"by-tag"}))},i}(r.default.Component),c="2164927913"},lBEk:function(t,e,a){"use strict";a.d(e,"a",(function(){return o}));var r=a("FdF9"),n=a("Wbzz"),l=(a("+KJH"),a("zpb6"));function o(t){var e=t.items,a=t.mod,o=void 0===a?"":a,s=t.type,i=void 0===s?"list":s;if(0!==e.length){var u="posts-list";return o&&(u+=" posts-list--"+o),i&&"list"!==i&&(u+=" posts-list--"+i,"cards"===i&&(u+=" no-bullets")),r.default.createElement("ul",{className:u},e.map((function(t){var e=t.node,a=e.excerpt,s=e.frontmatter,u=e.fields,c=e.id,d=s.title,m=s.desc,f=s.tags,p=u.date,g=u.url,h=u.isArchived,y=Object(l.a)(p);m=m||a,f=f||[];var v="post-item";"by-tag"===o&&f.forEach((function(t){v+=" tag-"+t}));var b=h?r.default.createElement("span",{className:"posts-list__archive-mark faded-text"},"в архиве"):"",_=r.default.createElement(r.Fragment,null,r.default.createElement(n.a,{to:g},d),b);return"cards"===i&&(_=r.default.createElement(r.Fragment,null,r.default.createElement("h3",{className:"post-item__title"},r.default.createElement(n.a,{to:g},s.title)),r.default.createElement("div",{className:"post-item__text"},m),r.default.createElement("div",{className:"post-item__footer"},r.default.createElement(n.a,{to:g},"Читать дальше →"),r.default.createElement("time",{className:"post-item__date faded-text",dateTime:y},p)))),r.default.createElement("li",{className:v,key:c},_)})))}}}}]);