
(function(){

    window.onerror = function(message){
        if (window.console) {
            console.error(message);
        }
    };

    //MDN PolyFil for IE8 (This is not needed if you use the jQuery version)
    if (!Array.prototype.forEach){ Array.prototype.forEach = function(fun /*, thisArg */){ "use strict"; if (this === void 0 || this === null || typeof fun !== "function") throw new TypeError(); var t = Object(this), len = t.length >>> 0, thisArg = arguments.length >= 2 ? arguments[1] : void 0; for (var i = 0; i < len; i++) if (i in t) fun.call(thisArg, t[i], i, t); }; }

    /*! iFrame Resizer (iframeSizer.min.js ) - v2.8.3 - 2015-01-29 */

    var Resizer = window.iFrameResize || function(){};
    var module = module || {};
    !function(){"use strict";if(window.iFrameResize){return;}function a(a,b,c){"addEventListener"in window?a.addEventListener(b,c,!1):"attachEvent"in window&&a.attachEvent("on"+b,c)}function b(){var a,b=["moz","webkit","o","ms"];for(a=0;a<b.length&&!A;a+=1)A=window[b[a]+"RequestAnimationFrame"];A||e(" RequestAnimationFrame not supported")}function c(){var a="Host page";return window.top!==window.self&&(a=window.parentIFrame?window.parentIFrame.getId():"Nested host page"),a}function d(a){return w+"["+c()+"]"+a}function e(a){C.log&&"object"==typeof window.console&&console.log(d(a))}function f(a){"object"==typeof window.console&&console.warn(d(a))}function g(a){function b(){function a(){k(F),i(),C.resizedCallback(F)}g("Height"),g("Width"),l(a,F,"resetPage")}function c(a){var b=a.id;e(" Removing iFrame: "+b),a.parentNode.removeChild(a),C.closedCallback(b),e(" --")}function d(){var a=E.substr(x).split(":");return{iframe:document.getElementById(a[0]),id:a[0],height:a[1],width:a[2],type:a[3]}}function g(a){var b=Number(C["max"+a]),c=Number(C["min"+a]),d=a.toLowerCase(),f=Number(F[d]);if(c>b)throw new Error("Value for min"+a+" can not be greater than max"+a);e(" Checking "+d+" is in range "+c+"-"+b),c>f&&(f=c,e(" Set "+d+" to min value")),f>b&&(f=b,e(" Set "+d+" to max value")),F[d]=""+f}function m(){var b=a.origin,c=F.iframe.src.split("/").slice(0,3).join("/");if(C.checkOrigin&&(e(" Checking connection is from: "+c),""+b!="null"&&b!==c))throw new Error("Unexpected message received from: "+b+" for "+F.iframe.id+". Message was: "+a.data+". This error can be disabled by adding the checkOrigin: false option.");return!0}function n(){return w===(""+E).substr(0,x)}function o(){var a=F.type in{"true":1,"false":1};return a&&e(" Ignoring init message from meta parent page"),a}function p(a){return E.substr(E.indexOf(":")+v+a)}function q(a){e(" MessageCallback passed: {iframe: "+F.iframe.id+", message: "+a+"}"),C.messageCallback({iframe:F.iframe,message:JSON.parse(a)}),e(" --")}function r(){if(null===F.iframe)throw new Error("iFrame ("+F.id+") does not exist on "+y);return!0}function s(a){var b=a.getBoundingClientRect();return h(),{x:parseInt(b.left,10)+parseInt(z.x,10),y:parseInt(b.top,10)+parseInt(z.y,10)}}function u(a){function b(){z=g,A(),e(" --")}function c(){return{x:Number(F.width)+d.x,y:Number(F.height)+d.y}}var d=a?s(F.iframe):{x:0,y:0},g=c();e(" Reposition requested from iFrame (offset x:"+d.x+" y:"+d.y+")"),window.top!==window.self?window.parentIFrame?a?parentIFrame.scrollToOffset(g.x,g.y):parentIFrame.scrollTo(F.width,F.height):f(" Unable to scroll to requested position, window.parentIFrame not found"):b()}function A(){!1!==C.scrollCallback(z)&&i()}function B(a){function b(a){var b=s(a);e(" Moving to in page link (#"+c+") at x: "+b.x+" y: "+b.y),z={x:b.x,y:b.y},A(),e(" --")}var c=a.split("#")[1]||"",d=decodeURIComponent(c),f=document.getElementById(d)||document.getElementsByName(d)[0];window.top!==window.self?window.parentIFrame?parentIFrame.moveToAnchor(c):e(" In page link #"+c+" not found and window.parentIFrame not found"):f?b(f):e(" In page link #"+c+" not found")}function D(){switch(F.type){case"close":c(F.iframe),C.resizedCallback(F);break;case"message":q(p(6));break;case"scrollTo":u(!1);break;case"scrollToOffset":u(!0);break;case"inPageLink":B(p(9));break;case"reset":j(F);break;case"init":b(),C.initCallback(F.iframe);break;default:b()}}var E=a.data,F={};n()&&(e(" Received: "+E),F=d(),!o()&&r()&&m()&&(D(),t=!1))}function h(){null===z&&(z={x:void 0!==window.pageXOffset?window.pageXOffset:document.documentElement.scrollLeft,y:void 0!==window.pageYOffset?window.pageYOffset:document.documentElement.scrollTop},e(" Get page position: "+z.x+","+z.y))}function i(){null!==z&&(window.scrollTo(z.x,z.y),e(" Set page position: "+z.x+","+z.y),z=null)}function j(a){function b(){k(a),m("reset","reset",a.iframe)}e(" Size reset requested by "+("init"===a.type?"host page":"iFrame")),h(),l(b,a,"init")}function k(a){function b(b){a.iframe.style[b]=a[b]+"px",e(" IFrame ("+a.iframe.id+") "+b+" set to "+a[b]+"px")}C.sizeHeight&&b("height"),C.sizeWidth&&b("width")}function l(a,b,c){c!==b.type&&A?(e(" Requesting animation frame"),A(a)):a()}function m(a,b,c){e("["+a+"] Sending msg to iframe ("+b+")"),c.contentWindow.postMessage(w+b,"*")}function n(){function b(){function a(a){1/0!==C[a]&&0!==C[a]&&(i.style[a]=C[a]+"px",e(" Set "+a+" = "+C[a]+"px"))}a("maxHeight"),a("minHeight"),a("maxWidth"),a("minWidth")}function c(a){return""===a&&(i.id=a="iFrameResizer"+s++,e(" Added missing iframe ID: "+a+" ("+i.src+")")),a}function d(){e(" IFrame scrolling "+(C.scrolling?"enabled":"disabled")+" for "+k),i.style.overflow=!1===C.scrolling?"hidden":"auto",i.scrolling=!1===C.scrolling?"no":"yes"}function f(){("number"==typeof C.bodyMargin||"0"===C.bodyMargin)&&(C.bodyMarginV1=C.bodyMargin,C.bodyMargin=""+C.bodyMargin+"px")}function g(){return k+":"+C.bodyMarginV1+":"+C.sizeWidth+":"+C.log+":"+C.interval+":"+C.enablePublicMethods+":"+C.autoResize+":"+C.bodyMargin+":"+C.heightCalculationMethod+":"+C.bodyBackground+":"+C.bodyPadding+":"+C.tolerance}function h(b){a(i,"load",function(){var a=t;m("iFrame.onload",b,i),!a&&C.heightCalculationMethod in B&&j({iframe:i,height:0,width:0,type:"init"})}),m("init",b,i)}var i=this,k=c(i.id);d(),b(),f(),h(g())}function o(a){if("object"!=typeof a)throw new TypeError("Options is not an object.")}function p(a){a=a||{},o(a);for(var b in D)D.hasOwnProperty(b)&&(C[b]=a.hasOwnProperty(b)?a[b]:D[b])}function q(){function a(a){if(!a.tagName)throw new TypeError("Object is not a valid DOM element");if("IFRAME"!==a.tagName.toUpperCase())throw new TypeError("Expected <IFRAME> tag, found <"+a.tagName+">.");n.call(a)}return function(b,c){switch(p(b),typeof c){case"undefined":case"string":Array.prototype.forEach.call(document.querySelectorAll(c||"iframe"),a);break;case"object":a(c);break;default:throw new TypeError("Unexpected data type ("+typeof c+").")}}}function r(a){a.fn.iFrameResize=function(a){return p(a),this.filter("iframe").each(n).end()}}var s=0,t=!0,u="message",v=u.length,w="[iFrameSizer]",x=w.length,y="",z=null,A=window.requestAnimationFrame,B={max:1,scroll:1,bodyScroll:1,documentElementScroll:1},C={},D={autoResize:!0,bodyBackground:null,bodyMargin:null,bodyMarginV1:8,bodyPadding:null,checkOrigin:!0,enablePublicMethods:!1,heightCalculationMethod:"offset",interval:32,log:!1,maxHeight:1/0,maxWidth:1/0,minHeight:0,minWidth:0,scrolling:!1,sizeHeight:!0,sizeWidth:!1,tolerance:0,closedCallback:function(){},initCallback:function(){},messageCallback:function(){},resizedCallback:function(){},scrollCallback:function(){return!0}};b(),a(window,"message",g),window.jQuery&&r(jQuery),"function"==typeof define&&define.amd?define([],q):"object"==typeof exports?module.exports=q():window.iFrameResize=q()
    ;Resizer = q()
    }();

    /** End IFrame Resizer */

    window.iFrameResize = window.iFrameResize || {};

    window.iFrameResize.FocusManager = window.iFrameResize.FocusManager || (function(){

        function FocusManager() {}

        FocusManager.iframes = [];

        FocusManager.registerIframe = function( iframeId, iframeElement ){
            FocusManager.iframes.push({
                id: iframeId,
                element: iframeElement
            });
        };

        FocusManager.focus = function( iframeId, elementTopInsideIframe ){
            try {

                var iframe = null;

                for ( var i=0, len = FocusManager.iframes.length; i<len; i++ ) {

                    if ( FocusManager.iframes[i].id === iframeId ) {
                        iframe = FocusManager.iframes[i].element;
                        break;
                    }

                }

                if ( null === iframe ) {
                    return;
                }

                window.scrollTo(0,0);

                var iframeRect = iframe.getBoundingClientRect(),
                    iframeTop = iframeRect.top;

                window.scrollTo(0, iframeTop + elementTopInsideIframe - 50 );

            } catch (e) {}
        };

        window.addEventListener('message', function(e){

            var messageType = e.data.command || null;

            if ( messageType === 'scroll-into-view' ) {
                var iframeId = e.data.iframeId || null,
                    elementTopInsideIframe = e.data.top || null;

                if ( null !== iframeId && null !== elementTopInsideIframe ) {
                    FocusManager.focus( iframeId, elementTopInsideIframe );
                }
            }

        });

        return FocusManager;

    })();



    (function () {

        try {

            /*! iFrame Parent Redirect */

            var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);

            if (isChrome) { // only for Chrome yet

                var eventMethod = window.addEventListener ? "addEventListener" : "attachEvent";
                var eventer = window[eventMethod];
                var messageEvent = eventMethod == "attachEvent" ? "onmessage" : "message";


                eventer(messageEvent, function (e) {
                    messageData = e.data;

                    if (typeof messageData == 'object') {
                        if (
                            typeof  messageData.type != 'undefined'
                            && typeof  messageData.url === 'string'
                        ) {
                            if (messageData.type === 'redirectTo')
                                window.location = messageData.url;
                        }
                    }
                }, false);

            }
        } catch (oldBrowserException) {
            // do nothing
        }

        /** iFrame Parent Redirect */
    })();

    var scriptTags = document.getElementsByTagName('script'),
        len = scriptTags.length,
        i = 0;

    for (i=0; i<len; i++){
        (function(script){

            if (!script || !script.getAttribute) {
                return;
            }

            function getURIParameterByName(name, url){
                var match = new RegExp("[?&]"+ name +"(=([^&#]*)|&|#|$)").exec(url);

                return (match && match[2]) ? decodeURIComponent(match[2]) : '';
            }

            var type = script.getAttribute('type') || 'text/javascript',
                src  = script.getAttribute('src') || script.getAttribute('data-rocketsrc') || '',
                matches = /^((https?:)?\/\/([^\/]+)\/)embed\/([\d]+)\.js($|\?(.*)(#|$))/.exec(src),
                target123Domain = matches ? matches[1] : null,
                scriptParent = script.parentNode,
                scriptParams = String(script.getAttribute('data-custom-vars') || ''),
                formId = matches ? parseInt(matches[4]) : 'false',
                iframeSrc = '';

            if(!Array.prototype.indexOf){
                Array.prototype.indexOf = function(obj){
                    for(var i=0; i<this.length; i++){
                        if(this[i]==obj){
                            return i;
                        }
                    }
                    return -1;
                }
            }

            if (!target123Domain || isNaN(formId) || formId < 1 || ( [ 'text/javascript', 'text/rocketscript' ].indexOf(type) < 0 ) || script.getAttribute('data-role') === null || script.getAttribute('data-role') !== 'form' || getURIParameterByName('type', src) === 'lightbox') {
                return;
            }

            var iframe = document.createElement('iframe'),
                windowTop = '',
                windowReferrer = '';

            try {
                windowTop = String(window.top.location.href);
            } catch (e) {
                // security error, iframe in iframe
            }

            try {
                windowReferrer = String(document.referrer);
            } catch (e) {
                // security error, iframe in iframe
            }


            var refer = windowTop;
            

            var iframeID = '';

            iframe.id = iframeID = +new Date() + '_' + ~~(Math.random() * 100000)+ ~~(Math.random() * 100000)+ ~~(Math.random() * 100000);

            iframe.src = (
                iframeSrc = target123Domain
                    + 'js-form-username-' + formId + '.html?'
                    + ( scriptParams ? scriptParams + '&customVars123=yes&' : '' )
                    + 'ref=' + encodeURIComponent(refer.replace(/(<([^>]+)>)/ig, '')).replace('%26', '[%ANDCHAR%]')
                    + '&_referrer_=' + encodeURIComponent(windowReferrer.replace(/(<([^>]+)>)/ig, '')).replace('%26', '[%ANDCHAR%]')
                    + '&_embedType_=embed.js'
                    + '&_iframeID_=' + iframeID
            );


            iframe.style.padding = '0'; iframe.style.margin = '0'; iframe.style.display = 'block'; iframe.style.width = '100%'; iframe.style.backgroundColor = 'transparent'; iframe.style.overflow = 'hidden'; iframe.allowtransparency = 'true'; iframe.frameBorder = '0'; iframe.scrolling = 'no';


            if (scriptParent.nodeName != "HEAD") {
                scriptParent.insertBefore(iframe, script);
                scriptParent.removeChild(script);
            } else {
                document.body.appendChild(iframe);
            }

            function initResizer(){
                (Resizer||iFrameResize)({
                    heightCalculationMethod: (navigator.userAgent.indexOf("MSIE") !== -1) ? 'max' : 'documentElementOffset',
                    checkOrigin: false
                }, document.getElementById(iframeID));
            }

            // addEventListener support for IE8
            function bindEvent(element, eventName, eventHandler) {
                if (element.addEventListener){
                    element.addEventListener(eventName, eventHandler, false);
                } else if (element.attachEvent) {
                    element.attachEvent('on' + eventName, eventHandler);
                }
            }

            function insertAfter(newNode, referenceNode) {
                referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
            }

            bindEvent(window, 'message', function (e) {
                if(typeof e.data.msg_id !== 'undefined' && e.data.msg_id == '123formBuilderGoogleTagManager'){
                    var googleTagManagerCode = typeof e.data.googleTagManagerCode !== 'undefined'
                            ? e.data.googleTagManagerCode
                            : false;
                    if(googleTagManagerCode !== false) {
                        (function (w, d, s, l, i) {
                            w[l] = w[l] || [];
                            w[l].push(
                                {'gtm.start': new Date().getTime(), event: 'gtm.js'}
                            );
                            var f = d.getElementsByTagName(s)[0],
                                j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : '';
                            j.async = true;
                            j.src =
                                '//www.googletagmanager.com/gtm.js?id=' + i + dl;
                            f.parentNode.insertBefore(j, f);
                        })(window, document, 'script', 'dataLayer', googleTagManagerCode);
                    }
                }else if(typeof e.data.msg_id !== 'undefined' && e.data.msg_id == '123formBuilderAnalitycs'){
                    var googleAnalyticsUserId = e.data.google_analytics_user_id;
                    var googleUniversalScript = typeof e.data.google_universal_script !== 'undefined'
                        ? e.data.google_universal_script
                        : 0;
                    var googleRefferer  = typeof e.data.google_analytics_reffer !== 'undefined'
                        ? e.data.google_analytics_reffer
                        : window.top.location.href;

                    var googleCustomDomain = e.data.google_analytics_customDomain;

                    //Insert Google Analytics Code in page
                    if (googleUniversalScript == 1) {
                        (function (i, s, o, g, r, a, m) {
                            i['GoogleAnalyticsObject'] = r;
                            i[r] = i[r] || function () {
                                (i[r].q = i[r].q || []).push(arguments)
                            }, i[r].l = 1 * new Date();
                            a = s.createElement(o),
                                m = s.getElementsByTagName(o)[0];
                            a.async = 1;
                            a.src = g;
                            m.parentNode.insertBefore(a, m)
                        })(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

                        ga('create', googleAnalyticsUserId, 'auto', 'FormBuilderAnalytics');
                        ga('FormBuilderAnalytics.set', 'referrer', googleRefferer);
                        ga('FormBuilderAnalytics.send', 'pageview');
                    } else {
                        var _gaq = _gaq || [];

                        _gaq.push(['_setAccount', googleAnalyticsUserId]);
                        _gaq.push(['_setReferrerOverride', googleRefferer]);
                        _gaq.push(['_setDomainName', googleCustomDomain]);

                        _gaq.push(['_trackPageview']);

                        (function () {
                            var ga = document.createElement('script');
                            ga.type = 'text/javascript';
                            ga.async = true;
                            ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
                            var s = document.getElementsByTagName('script')[0];
                            s.parentNode.insertBefore(ga, s);
                        })();
                    }
                    //Google Analytics code inserted
                }
            });

            initResizer();

            setTimeout(initResizer, 1000);

        })(scriptTags[i]);
    }
})();
