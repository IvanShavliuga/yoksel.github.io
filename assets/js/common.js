jQuery(document).ready(function(t){function a(a){if(t(document).width()>900){var s=a.substr(1);if("yes"==s||"no"==s)return;var o=t("#"+s),e=o.position(),i=t(o).prop("tagName");i=i.toLowerCase(),t(r).attr("data-target-tag",i);var c=e.top;t(r).css({top:c}),a==n?t(r).hide():t(r).show();var g=o.offset().top-30;t("body").animate({scrollTop:g},100)}}function s(a,s){var o="tags-button--current",e="tag-"+a;s=s||t(".tags-button--"+a),t("."+e).show(),t("."+o).removeClass(o),s.addClass(o)}if(t("body").removeClass("no-js"),t(".p-hide-demo").length>0){var o=t(".post__text").find(".jsbin[data-src]");o.each(function(){var a='<div class="js--toggle-demo"><span class="js--toggle-demo__text">Демо</span>';t(this).before(a)}),t(".js--toggle-demo").click(function(){var a=t(this).next(".jsbin"),s=t(a).attr("data-src");t(a).attr("src",s),t(a).slideToggle("slow"),t(this).toggleClass("js--toggle-opened")})}var e="js--target-marker",r="."+e,n="#begin";if(t(n).length>0){var i="<a href='"+n+"' class='"+e+"'><svg xmlns='http://www.w3.org/2000/svg' width='32' height='32'><path id='arrow' d='M19.414 27.414l10-10c0.781-0.781 0.781-2.047 0-2.828l-10-10c-0.781-0.781-2.047-0.781-2.828 0-0.781 0.781-0.781 2.047 0 2.828l6.586 6.586h-19.172c-1.105 0-2 0.895-2 2s0.895 2 2 2h19.172l-6.586 6.586c-0.39 0.39-0.586 0.902-0.586 1.414s0.195 1.024 0.586 1.414c0.781 0.781 2.047 0.781 2.828 0z'/></svg></a>";t(n).before(i)}t("a[href^='#']").click(function(s){var o=t(this).attr("href");a(o)});var c=document.location.hash;c&&("/tags"===document.location.pathname||"/tags/"===document.location.pathname?s(c.substr(1)):a(c));var g=t(".posts__list---by-tag .post");t(".tags-button").click(function(){var a=this.dataset.targetTag;g.hide(),s(a,t(this)),document.location.hash=a})});