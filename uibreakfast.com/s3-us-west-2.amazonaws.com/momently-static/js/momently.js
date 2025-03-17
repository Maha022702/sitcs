"object" != typeof window.MOMENTLY && (window.MOMENTLY = function(w, x, i) {
    "use strict";
    var E, T, l, o, u, r, p, a, c, f, d, m, h, s, g, n, y, t, v, b, S, N, _, k, j = 0,
        P = !1,
        O = 0,
        H = 5,
        C = !1,
        z = !1,
        e = !1,
        A = 0,
        M = 0,
        L = Math.max,
        I = Math.min,
        B = Math.round,
        q = Math.floor,
        R = w.Date,
        U = w.setTimeout,
        V = w.clearTimeout,
        J = w.setInterval,
        Y = w.clearInterval,
        D = Array.prototype,
        W = i && i.sendBeacon;
    ! function() {
        try {
            var t = Object.defineProperty({}, "passive", {
                get: function() {
                    e = !0
                }
            });
            w.addEventListener("test", null, t)
        } catch (t) {}
    }();
    var F, G = w._momently_opt || {},
        K = {
            t: G.endpoint || "//o.momently.info/",
            u: G.userId || !1,
            v: G.ver || 1,
            a: G.api || "",
            container: G.container || "",
            author: G.author || "",
            published: G.published || "",
            tags: G.tags || "",
            title: G.title || "",
            section: G.section || "",
            updateHeight: !!G.hasOwnProperty("updateHeight") && G.updateHeight
        };

    function Q(t) {
        return "function" == typeof t
    }

    function X(t) {
        return "undefined" != typeof t
    }

    function Z(t) {
        return "string" == typeof t || t instanceof String
    }

    function tt(t) {
        return Array.isArray ? Array.isArray(t) : "[object Array]" === Object.prototype.toString.call(t)
    }

    function et(t) {
        return encodeURIComponent(t)
    }

    function nt(t) {
        return decodeURIComponent(t)
    }

    function it(t) {
        for (var e, n = {}, i = [], o = 0, r = t.length; o < r; o++) n[e = (e = t[o] + "_").toLowerCase()] || (n[e] = 1, i.push(t[o]));
        return i.join(",")
    }

    function ot(t) {
        if (t) {
            if (Z(t)) {
                var e = x.createElement("div");
                return e.innerHTML = t, e.childNodes[0].nodeValue
            }
            return t
        }
        return ""
    }

    function rt(t, e) {
        t = new RegExp("[\\?&#]" + e + "=([^&#]*)").exec(t);
        return t ? nt(t[1]).replace(/\|/g, "_") : ""
    }

    function at(t, e, n) {
        var i = /^\.[^\. ,\[\]#]+$/.test(e) && t.getElementsByClassName ? t.getElementsByClassName(e.substr(1)) : /^[^\. ,\[\]#]+$/.test(e) ? t.getElementsByTagName(e) : /^#[^# ,\[\]\.]+$/.test(e) ? (i = x.getElementById(e.substr(1))) && [i] : g ? $(e, t) : n ? t.querySelectorAll(e) : [t.querySelector(e)];
        return i = i && 0 !== i.length ? n ? pt(i) : i[0] : n ? [] : null
    }

    function ct(t) {
        var e = t.length;
        return t = -1 !== (t = "*." === (t = "." === t.charAt(--e) ? t.slice(0, e) : t).slice(0, 2) ? t.slice(1) : t).indexOf("/") ? t.substr(0, t.indexOf("/")) : t
    }

    function st(t) {
        t = t.getBoundingClientRect();
        return {
            height: t.height,
            top: t.top + r()
        }
    }

    function ut(t, e) {
        var n = !1;
        return t && (t.hasAttribute && (n = t.hasAttribute(e)), t.attributes && (n = X(t.attributes[e]))), n
    }

    function lt(t, e) {
        var n, i = null;
        if (ut(t, e))
            if (t.getAttribute) i = t.getAttribute(e);
            else if ((n = t.attributes[e]).value) i = n.value;
        else if (n.nodeValue) i = n.nodeValue;
        else
            for (var o, r = 0, a = (o = t.attributes).length; r < a; r++)
                if (o[r].nodeName === e) {
                    i = o[r].nodeValue;
                    break
                } return i
    }

    function pt(t) {
        return D.slice.call(t, 0)
    }
    E = Q(R.now) ? R.now : function() {
        return (new R).getTime()
    }, S = Element.prototype.closest ? function(t) {
        return "A" === t.nodeName ? t : t.closest("a")
    } : function(t) {
        for (; null !== t && 9 !== t.nodeType;) {
            if ("A" === t.nodeName) return t;
            t = t.parentElement || t.parentNode
        }
    }, t = Q(w.$), g = !/^[^{]+\{\s*\[native \w/.test(x.querySelectorAll) && t, G = X(w.pageYOffset) ? function() {
        return w.pageYOffset
    } : "CSS1Compat" === (x.compatMode || "") ? function() {
        return x.documentElement.scrollTop
    } : function() {
        return x.body.scrollTop
    }, r = G, m = X(addEventListener) ? e ? function(t, e, n, i, o) {
        return t.addEventListener(e, n, o ? {
            capture: i,
            passive: !0
        } : i), !0
    } : function(t, e, n, i) {
        return t.addEventListener(e, n, i), !0
    } : X(attachEvent) ? function(t, e, n) {
        return t.attachEvent("on" + e, n)
    } : function(t, e, n) {
        t["on" + e] = n
    }, h = X(removeEventListener) ? function(t, e, n) {
        t.removeEventListener(e, n)
    } : X(attachEvent) ? function(t, e, n) {
        t.removeEvent("on" + e, n)
    } : function(t, e) {
        t["on" + e] = "undefined"
    }, F = x.getElementsByTagName("head")[0] || x.getElementsByTagName("body")[0];
    var ft, dt, mt, ht = function(t) {
            var e = x.createElement("script"),
                n = !1;
            e.src = t, e.async = !0, e.onload = e.onreadystatechange = function() {
                n || this.readyState && "loaded" !== this.readyState && "complete" !== this.readyState || (n = !0, e.onload = e.onerror = e.onreadystatechange = null, e && e.parentNode && e.parentNode.removeChild(e))
            }, e.onerror = function() {
                e && e.parentNode && e.parentNode.removeChild(e)
            }, F.appendChild(e)
        },
        gt = function(t) {
            new Image(1, 1).src = K.t + t
        };

    function yt(e) {
        try {
            return v(e)
        } catch (t) {
            try {
                return v(ot(e))
            } catch (t) {
                return null
            }
        }
    }

    function vt(t, e, n, i, o, r) {
        var a, t = t + "._vr_3";
        n && (a = new R).setTime(a.getTime() + n), x.cookie = t + "=" + et(e) + (n ? ";expires=" + a.toUTCString() : "") + ";path=" + (i || "/") + (o ? ";domain=" + o : "") + (r ? ";secure" : "")
    }

    function bt(t) {
        t = new RegExp("(^|;)[ ]*" + (t + "._vr_3") + "=([^;]*)").exec(x.cookie);
        return t ? nt(t[2]) : 0
    }

    function wt() {
        var t, n = !1,
            e = "readystatechange",
            i = "on" + e,
            o = !1;

        function r() {
            n || (n = !0, b = jt(), X(x[f]) ? m(x, d, Bt, !0) : w.onfocus || null === w.onfocus ? (m(w, "focus", Lt, !0), m(w, "blur", It, !0)) : (m(x, "focusin", Lt, !0), m(x, "focusout", It, !0)), w.onpagehide || null === w.onpagehide ? m(w, "pagehide", It, !0) : m(w, "beforeunload", zt, !0), m(x, "mousedown", Ot, !0), m(x, "mousemove", Ot, !0), m(x, "keydown", Ot, !0), m(x, "change", Ot, !0), m(w, "scroll", p, !0, !0), m(w, "resize", y, !0), m(x, "click", Ht, !0), X(x[f]) && x[f] ? u = !0 : (Rt(), Pt(function() {
                Ct()
            })))
        }

        function a() {
            return /loaded|interactive/.test(x.readyState)
        }

        function c() {
            a() && (h(x, e, c), r())
        }

        function s() {
            o || (o = !0, r(), qt(), h(w, "load", s))
        }
        if ("complete" === x.readyState) s();
        else if (m(w, "load", s, !1), a()) r();
        else if (x.addEventListener) x.addEventListener(e, c);
        else if (x.attachEvent) {
            x.attachEvent(i, c);
            try {
                t = null === w.frameElement && x.documentElement
            } catch (t) {}
            t && t.doScroll && ! function e() {
                if (!n) {
                    try {
                        t.doScroll("left")
                    } catch (t) {
                        return U(e, 50)
                    }
                    r()
                }
            }()
        }
    }

    function xt(t) {
        var e, n, i, o, r = {
            hostname: "",
            pathname: ""
        };
        return t && !/^(javascript|vbscript|jscript|mocha|livescript|ecmascript|mailto|tel):/i.test(t) && (e = x.createElement("a"), n = w.location, /^https?:/.test(t) || (t = 0 === t.indexOf("//") ? n.protocol + t : 0 === t.indexOf("/") ? (i = n.protocol, o = n.port, i = "http:" === i && "80" === o || "https:" === i && "443" === o || "0" === o ? "" : o, n.protocol + "//" + n.hostname + (i ? ":" + i : "") + t) : (-1 === (o = -1 === (o = (i = x.baseURI || n.href).indexOf("?")) ? i.indexOf("#") : o) && (o = i.length), -1 === (o = i.lastIndexOf("/", o)) ? "/" + t : i.substr(0, o) + "/" + t)), e.href = t, t = (t = e.search) ? t.match(/[&?]p=([^&]+)/i) : "", r.hostname = e.hostname || n.hostname, r.pathname = "/" + String(e.pathname).replace(/^\//, "").trim(), t && t[1] && (r.pathname += "?p=" + t[1]), r.hostname = String(r.hostname).replace(/(\.blogspot\.)[^\/\?&=]*(.*)/, "$1com$2").trim()), r
    }

    function Et(t) {
        var e, n, i, o, r, a, c, s, u, l, p = 1,
            f = "",
            d = "",
            m = 0,
            h = !0,
            g = w.location.href,
            y = E(),
            v = function(t, e, n, i, o) {
                var r, a = lt;
                if (Q(t.querySelector)) r = a(t.querySelector(e + "[" + n + '="' + i + '"]'), o);
                else
                    for (var c, s = 0, u = (c = pt(t.getElementsByTagName(e))).length; s < u; s++)
                        if (a(c[s], e) === i) {
                            r = a(c[s], o);
                            break
                        } return r
            }(x, "link", "rel", "canonical", "href") || g,
            b = function() {
                var e = "";
                try {
                    e = w.top.document.referrer
                } catch (t) {
                    if (w.parent) try {
                        e = w.parent.document.referrer
                    } catch (t) {
                        e = ""
                    }
                }
                return e = (e = "" === e ? x.referrer : e) && !/^\/android-app:\/\//.test(e) ? e.replace(/\/([^/]*)android-app:\/\/.*/, "") : e
            }();
        o = bt("mnt_1"), r = null, m = (r = r = o ? o.split(".") : r) ? (e = r[0], n = Number(r[1]), l = Number(r[2]), s = n, a = y, c = Number(r[3] || "1"), u = 0, s = q((a - s) / 864e5), vt("mnt_1", e + "." + y + "." + l + "." + (p = 1 | (u = s < 30 ? c << s & 1073741823 : u)), l - y + 63072e6), y - l < 864e5 ? 1 : 0) : 1, n = bt("mnt_2"), a = rt(r = g, "gclid") || rt(r, "gclsrc"), c = rt(r, "utm_source"), s = rt(r, "utm_medium"), u = rt(r, "utm_campaign"), l = rt(r, "utm_term"), r = rt(r, "utm_content"), u || a && (u = "AdWords", c = c || "google", s = s || "cpc"), s = {
            arr: [u ? u.replace(/\|/g, "-") : "", c ? c.replace(/\|/g, "-") : "", s ? s.replace(/\|/g, "-") : "", l ? l.replace(/\|/g, "-") : "", r ? r.replace(/\|/g, "-") : ""],
            empty: "" === (u || c || s || l || r)
        }, r = (l = xt(l = g)).hostname + l.pathname, l = (g = xt(v)).hostname, b && (d = "", -1 === b.indexOf("/android-app://") && (i = xt(b)).hostname === l ? (f = "", i.pathname !== g.pathname && (d = i.pathname)) : f = b.slice(0, 1024)), 4 !== (n = n && Z(n) ? n.split(";") : [1, "", "", ""]).length && (n = [1, "", "", ""]), v = Number(n[0]), i = n[1], b = n[2], n = n[3], (isNaN(v) || f && f !== b) && (v = 1), d = d || i || "", f = f || b || "", s = s.empty ? n ? n.split("|") : [] : s.arr, T ? T.x !== g.pathname ? vt("mnt_2", v + 1 + ";" + (d = T.x) + ";" + f + ";" + s.join("|"), 18e5) : h = !1 : vt("mnt_2", v + 1 + ";" + d + ";" + f + ";" + s.join("|"), 18e5), (h || t) && (h = "", t = R.now(), T && (h = T.pid || "", t = T.g || t), T = {
            z: e,
            x: g.pathname,
            h: l,
            r: f,
            e: d,
            l: p,
            c: 0,
            t: 0,
            at: 0,
            n: y,
            w: m,
            pc: v,
            pid: h,
            g: t,
            al: r,
            api: K.a || "",
            ca: s || "",
            v: K.v
        })
    }

    function Tt() {
        var t, e, n;
        T && (e = "", H = 15, l && l.x || (t = T).t && (o.content && 0 < o.visibility && ("/" !== t.x || !t.x) && (o.totalTime += o.time, e = t.x + "::" + o.time + "::" + B(100 * o.visibility) + "::" + o.totalTime), t.at += t.t, o.time = 0, !K.updateHeight && s || (s = At() || 1), n = I(B(t.c / s * 100), 100), t.t = 0, gt("p?a=" + et(t.api) + "&d=" + et(t.pid) + (e ? "&p=" + et(e) : "") + "&t=" + t.at + "&g=" + t.g + "&s=" + n)))
    }

    function St(t) {
        var e = "";
        return e = t && Z(t) ? t.replace(/[\s\t\n]+/g, " ").trim().toLowerCase().substr(0, 250) : e
    }

    function Nt(t) {
        var e, n = "";
        return !t || (e = (e = t.textContent || t.innerText) || lt(t, "content")) && (n = ot(St(e))), n
    }

    function _t(t, e) {
        var n = at(x, t, e),
            t = "";
        if (e && n) {
            for (var i, o = [], r = 0, a = n.length; r < a; r++)(i = Nt(n[r])) && o.push(i.replace(/,/g, "_"));
            t = o
        } else t = Nt(n);
        return t
    }

    function kt() {
        var t, e, n, i, o, r, a, c, s, u, l, p, f = {
                isPost: !1
            },
            d = !1;
        if (w._momently_data) f = {
            id: (s = w._momently_data).id,
            title: ot(St(s.title)),
            author: ot(St(s.author)),
            published: s.published,
            section: ot(s.category),
            tags: s.tags,
            isPost: !0
        };
        else {
            if (s = (s = x.getElementById("momently_data")) || x.getElementById("verlico_data"))(l = lt(s, "content")) && (v = yt(l.trim())) && (v.title && (c = (c = v.title.match(/<.+>([^<]+)<\/.+>/)) && c[1] ? c[1] : v.title), v.categories && (Z(v.categories) ? r = v.categories : tt(v.categories) && (v.categories = v.categories.join(","), r = v.categories)), f = {
                id: v.id,
                title: ot(St(c)),
                author: v.author ? ot(St(v.author)) : "Array" !== v.authors ? ot(St(v.authors)) : "",
                published: v.published,
                section: v.category ? ot(v.category) : ot(r || ""),
                tags: v.tags ? ot(v.tags) : v.categories ? ot(St(v.categories)) : "",
                isPost: !0
            }, d = !0);
            else {
                var m = at(x, 'script[type="application/ld+json"]', !0);
                if (m && 0 !== m.length) {
                    for (var h = [], g = 0, y = m.length; g < y; g++)
                        if ((n = m[g].textContent || m[g].innerText) && Z(n)) {
                            var v, b = {
                                NewsArticle: 1,
                                Article: 1,
                                BlogPosting: 1
                            };
                            if (v = yt(n.trim())) {
                                if (v[0] && v[0]["@type"])
                                    for (t = 0, e = v.length; t < e; t++) b[v[t]["@type"]] && (v = v[t]);
                                b[v["@type"]] && h.push(v)
                            }
                        }
                    0 < h.length && (s = h[h.length - 1], u = f, p = !1, s.headline && (u.title = ot(St(s.headline)), p = !0), s.datePublished && (l = new R(s.datePublished).getTime(), isNaN(l) || (u.published = l, p = u.isPost = !0)), s.keywords && (Z(s.keywords) ? u.tags = ot(St(s.keywords)) : tt(s.keywords) && (u.tags = ot(St(s.keywords.join(",")))), p = u.isPost = !0), s.articleMeta && (Z(s.articleMeta) ? u.meta = ot(St(s.articleMeta)) : tt(s.articleMeta) && (u.meta = ot(St(s.articleMeta.join(",")))), p = !0), s.articleSeries && (Z(s.articleSeries) ? u.series = ot(St(s.articleSeries)) : tt(s.articleSeries) && (u.series = ot(St(s.articleSeries.join(",")))), p = !0), s.articleType && (Z(s.articleType) ? u.type = ot(St(s.articleType)) : tt(s.articleType) && s.articleType[0] && (u.type = ot(St(s.articleType[0]))), p = !0), s.articleTopics && (Z(s.articleTopics) ? u.topics = ot(St(s.articleTopics)) : tt(s.articleTopics) && (u.topics = ot(St(s.articleTopics.join(",")))), p = !0), s.articleTone && (Z(s.articleTone) ? u.tone = ot(St(s.articleTone)) : tt(s.articleTone) && s.articleTone[0] && (u.tone = ot(St(s.articleTone[0]))), p = !0), s.articleSection && (Z(s.articleSection) ? u.section = ot(St(s.articleSection)) : tt(s.articleSection) && (u.section = ot(St(s.articleSection.join(",")))), p = u.isPost = !0), s.author && (s.author.name ? (u.author = ot(St(s.author.name)), p = u.isPost = !0) : s.author[0] && s.author[0].name && (u.author = ot(St(s.author[0].name)), p = u.isPost = !0)), d = p)
                }
            }
            d ? f.isPost && (f.section || (r = _t(K.section || 'meta[property="article:section"]', !0)) && (f.section = r.join(",")), f.tags || (a = _t(K.tags || 'meta[property="article:tag"],[rel="tag"]', !0)) && 0 !== a.length && (f.tags = it(a))) : (p = !(u = !0), !w._WidgetManager || (d = w._WidgetManager._GetAllData()) && d.view && (d.view.isPost ? (p = !0, f.id = (d.blog || d.view).postId, f.title = ot(St(d.view.title)), f.isPost = !0) : u = !1), u && ((c = (c = _t(K.title || 'meta[property="og:title"]', !1)) || _t(".entry-title", !1)) && (f.title = c), ((c = _t(K.author || 'meta[name="author"]', !1)) || (o = at(x, '[rel="author"]', !0)) && 1 === o.length && (c = Nt(o[0]))) && (f.author = c), (c = _t(K.published || 'meta[property="article:published_time"]', !1)) && (i = new R(c.toUpperCase()).getTime(), !K.published || i && !isNaN(i) || (i = lt(c, "datetime")) && (i = new R(c.replace(/-/g, ",")).getTime()) < 1e12 && (i = "n")), i && !isNaN(i) || (o = at(x, '[itemprop="datePublished"]', !1)) && (p && (c = lt(o, "title")) && (i = new R(c.toUpperCase()).getTime()), c || (c = lt(o, "datetime")) && (i = new R(c.replace(/-/g, ",")).getTime()) < 1e12 && (i = "n")), isNaN(i) || (f.published = i, f.isPost = !0), (a = _t(K.tags || 'meta[property="article:tag"],[rel="tag"]', !0)) && 0 !== a.length && (f.tags = it(a), f.isPost = !0), (r = _t(K.section || 'meta[property="article:section"]', !0)) && (f.section = r.join(","), f.isPost = !0)))
        }
        return f
    }

    function jt() {
        var t;
        try {
            t = kt()
        } catch (t) {}
        return t
    }

    function Pt(e) {
        var t, n, i, o, r, a, c, s = T,
            u = {
                a: s.api,
                h: s.h,
                v: s.v,
                l: s.l,
                r: s.r,
                x: s.x,
                n: s.e,
                f: s.w,
                pc: s.pc,
                al: s.al
            };
        s.z && (u.z = s.z), (t = b) && t.isPost && (t.title && (u.ti = ot(t.title)), t.author && (u.au = ot(t.author)), t.published && (u.pu = t.published), t.tags && (n = tt(t.tags) ? ot(t.tags.join(",")) : ot(t.tags)) && (u.ta = n), t.meta && (i = tt(t.meta) ? ot(t.meta.join(",")) : ot(t.meta)) && (u.meta = i), t.series && (o = tt(t.series) ? ot(t.series.join(",")) : ot(t.series)) && (u.series = o), t.topics && (a = tt(t.topics) ? ot(t.topics.join(",")) : ot(t.topics)) && (u.topics = a), t.tone && (c = tt(t.tone) && t.tone[0] ? ot(t.tone[0]) : ot(t.tone)) && (u.tone = c), t.type && (r = tt(t.type) && t.type[0] ? ot(t.type[0]) : ot(t.type)) && (u.type = r), t.section && (tt(t.section) && (t.section = t.section.join(",")), u.se = ot(t.section)), t.id && (u.id = ot(t.id + ""))), s.ca && ((t = s.ca)[0] && (u.cn = ot(t[0])), t[1] && (u.cs = ot(t[1])), t[2] && (u.cm = ot(t[2])), t[3] && (u.ck = ot(t[3])), t[4] && (u.cc = ot(t[4]))),
            function(t, e, n, i) {
                var o, n = n || "callback",
                    r = et,
                    a = -1 === (t || "").indexOf("?") ? "?" : "&",
                    c = "_mnt_callback_json" + ++O;
                for (o in (e = e || {}).i = K.u, e) e.hasOwnProperty(o) && (a += r(o) + "=" + r(e[o]) + "&");
                w[c] = function(t) {
                    i(t);
                    try {
                        delete w[c]
                    } catch (t) {
                        w[c] = null
                    }
                }, ht(t + a + n + "=" + c)
            }(K.t + "i", u, null, function(t) {
                t && (l = t, s.pid = t.p, s.api || (s.api = t.a), t.g && (s.g = t.g), t.f && (s.z = t.z, vt("mnt_1", t.z + "." + s.n + "." + s.n + ".1", 63072e6)), l.x || e())
            })
    }

    function Ot() {
        P = !0
    }

    function Ht(s) {
        P = !0, U(function() {
            var t, e, n, i, o, r, a, c = s.target || s.srcElement;
            (c = c && S(c)) && (t = (t = lt(c, "href") || "").trim()) && (n = T) && n.pid && (e = xt(t), i = e.hostname, o = n.h, a = !1, r = a = (i = ct(String(i).toLowerCase())) === (o = ct(String(o).toLowerCase())) || "." === o.slice(0, 1) && (i === o.slice(1) || 0 < (r = i.length - o.length) && i.slice(r) === o) || a, o = t, a = ut(c, "download") || /\.(7z|aac|apk|arc|arj|asf|asx|avi|azw3|bin|csv|deb|dmg|doc|docx|epub|exe|flv|gif|gz|gzip|hqx|ibooks|jar|jpg|jpeg|js|mobi|mp2|mp3|mp4|mpg|mpeg|mov|movie|msi|msp|odb|odf|odg|ods|odt|ogg|ogv|pdf|phps|png|ppt|pptx|qt|qtm|ra|ram|rar|rpm|sea|sit|tar|tbz|tbz2|bz|bz2|tgz|torrent|txt|wav|wma|wmv|wpd|xls|xlsx|xml|z|zip)([?&#]|$)/i.test(o), t = n.api, c = n.pid, o = e.pathname, e = e.hostname, r = a ? 1 : r ? 2 : 0, n = n.g, t && c && e && !isNaN(r) && gt("c?a=" + et(t) + "&d=" + et(c) + "&p=" + et(o.replace(/\/$/, "")) + "&h=" + et(e) + "&t=" + r + "&g=" + n + "&i=" + K.u))
        }, 500)
    }

    function Ct() {
        var t = 0,
            e = 0,
            n = function() {
                c = U(n, 1e3), P ? t = 0 : t += 1, P = !1, t < 15 && (T.t += 1e3, e++, o ? o.content && o.inside && (o.time += 1e3) : j += 1e3, H <= e && (e = 0, Tt()))
            };
        n()
    }

    function zt() {
        if (It(), !W)
            for (var t, e = E() + 500; t = E(), t < e;);
    }

    function At() {
        var t = x.body;
        return L(x.body.scrollHeight || 0, x.documentElement.scrollHeight || 0, x.body.offsetHeight || 0, x.documentElement.offsetHeight || 0, x.body.clientHeight || 0, x.documentElement.clientHeight || 0, t.clientHeight || 0, t.scrollHeight || 0, t.offsetHeight || 0)
    }

    function Mt() {
        a = n()
    }

    function Lt() {
        u && (u = !1, l ? (o ? o.time = 0 : Rt(), Ct()) : Pt(function() {
            Ct(), Rt()
        }))
    }

    function It() {
        u || (u = !0, V(c), Tt())
    }

    function Bt() {
        (x[f] ? It : Lt)()
    }

    function $t(t, e) {
        var n = t + a,
            i = e.top + e.height;
        e.inside = !1, (i < n || e.top < n) && t < i && (e.inside = !0, e.visibility < 1 && (e.visibility = L(I((n - e.top) / e.height, 1), e.visibility)))
    }

    function qt() {
        var t, e, n;
        N ? (e = st(N), A = e.top, M = e.height, o && (o.top = A, o.height = M, t = o, (n = (n = (n = at(x, "#disqus_thread", !1)) || at(x, "#comments", !1)) || at(x, "fb:comments", !1)) && (e = st(n), n = t.height + t.top, 0 < (e = I(n, e.top) - t.top) && (t.height = e)))) : o && (o.height = At())
    }

    function Rt() {
        var t, e;
        a = n(), t = r(), e = t + (e = a), T.c < e && (T.c = e), b.isPost ? K.container ? 0 < (e = at(x, K.container, !0)).length && (N = e[e.length - 1]) : N = (N = at(x, ".entry-content", !1)) || ((N = at(x, ".post-entry", !1)) || at(x, ".hentry", !1)) : N = void 0, N ? (o = {
            content: !0,
            time: j,
            top: 0,
            totalTime: 0,
            visibility: 0,
            inside: !1
        }, j = 0, qt(), $t(t, o)) : (b.isPost = !1, o = {
            content: !1,
            inside: !1
        })
    }

    function Ut() {
        var t, e, n;
        !C && (n = !1, e = "_mnt_tmp_cookie", X(i.cookieEnabled) ? n = i.cookieEnabled : (vt(e, "1"), (t = bt(e)) && "1" === t && (n = !0, vt(e, "", -86400))), n) && K.u && (C = !0, Et(), n = "Hidden", f = "hidden", d = "visibilitychange", X(x.webkitHidden) ? (f = "webkit" + n, d = "webkit" + d) : X(x.mozHidden) ? (f = "moz" + n, d = "moz" + d) : X(x.msHidden) && (f = "ms" + n, d = "ms" + d), wt())
    }
    return v = function() {
        if (JSON && JSON.parse) return JSON.parse;
        var o, r, e, n, c, s = {
                "\\": "\\",
                '"': '"',
                "/": "/",
                t: "\t",
                n: "\n",
                r: "\r",
                f: "\f",
                b: "\b"
            },
            u = {
                g: function() {
                    o = "o"
                },
                f: function() {
                    n = c, o = "c"
                },
                k: function() {
                    n = c, o = "c"
                },
                v: function() {
                    o = "m"
                },
                i: function() {
                    o = "a"
                },
                u: function() {
                    o = "a"
                }
            },
            l = {
                g: function() {
                    o = "o"
                },
                v: function() {
                    o = "m"
                },
                i: function() {
                    o = "a"
                },
                u: function() {
                    o = "a"
                }
            },
            p = {
                "{": {
                    g: function() {
                        r.push({
                            state: "o"
                        }), e = {}, o = "f"
                    },
                    v: function() {
                        r.push({
                            container: e,
                            state: "m",
                            key: n
                        }), e = {}, o = "f"
                    },
                    i: function() {
                        r.push({
                            container: e,
                            state: "a"
                        }), e = {}, o = "f"
                    },
                    u: function() {
                        r.push({
                            container: e,
                            state: "a"
                        }), e = {}, o = "f"
                    }
                },
                "}": {
                    f: function() {
                        var t = r.pop();
                        c = e, e = t.container, n = t.key, o = t.state
                    },
                    m: function() {
                        var t = r.pop();
                        e[n] = c, c = e, e = t.container, n = t.key, o = t.state
                    }
                },
                "[": {
                    g: function() {
                        r.push({
                            state: "o"
                        }), e = [], o = "i"
                    },
                    v: function() {
                        r.push({
                            container: e,
                            state: "m",
                            key: n
                        }), e = [], o = "i"
                    },
                    i: function() {
                        r.push({
                            container: e,
                            state: "a"
                        }), e = [], o = "i"
                    },
                    u: function() {
                        r.push({
                            container: e,
                            state: "a"
                        }), e = [], o = "i"
                    }
                },
                "]": {
                    i: function() {
                        var t = r.pop();
                        c = e, e = t.container, n = t.key, o = t.state
                    },
                    a: function() {
                        var t = r.pop();
                        e.push(c), c = e, e = t.container, n = t.key, o = t.state
                    }
                },
                ":": {
                    c: function() {
                        if (Object.hasOwnProperty.call(e, n)) throw new SyntaxError("Duplicate key '" + n + '"');
                        o = "v"
                    }
                },
                ",": {
                    m: function() {
                        e[n] = c, o = "k"
                    },
                    a: function() {
                        e.push(c), o = "u"
                    }
                },
                true: {
                    g: function() {
                        c = !0, o = "o"
                    },
                    v: function() {
                        c = !0, o = "m"
                    },
                    i: function() {
                        c = !0, o = "a"
                    },
                    u: function() {
                        c = !0, o = "a"
                    }
                },
                false: {
                    g: function() {
                        c = !1, o = "o"
                    },
                    v: function() {
                        c = !1, o = "m"
                    },
                    i: function() {
                        c = !1, o = "a"
                    },
                    u: function() {
                        c = !1, o = "a"
                    }
                },
                null: {
                    g: function() {
                        c = null, o = "o"
                    },
                    v: function() {
                        c = null, o = "m"
                    },
                    i: function() {
                        c = null, o = "a"
                    },
                    u: function() {
                        c = null, o = "a"
                    }
                }
            };
        return function(t, a) {
            var e, n, i = /^[\u0020\t\n\r]*(?:([,:\[\]{}]|true|false|null)|(-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)|"((?:[^\r\n\t\\\"]|\\(?:["\\\/trnfb]|u[0-9a-fA-F]{4}))*)")/;
            o = "g", r = [];
            try {
                for (; e = i.exec(t);) e[1] ? p[e[1]][o]() : e[2] ? (c = +e[2], l[o]()) : (n = e[3], c = n.replace(/\\(?:u(.{4})|([^u]))/g, function(t, e, n) {
                    return e ? String.fromCharCode(parseInt(e, 16)) : s[n]
                }), u[o]()), t = t.slice(e[0].length)
            } catch (t) {
                o = t
            }
            if ("o" !== o || /[^\u0020\t\n\r]/.test(t)) throw o instanceof SyntaxError ? o : new SyntaxError("JSON");
            return "function" == typeof a ? function t(e, n) {
                var i, o, r = e[n];
                if (r && "object" == typeof r)
                    for (i in c) Object.prototype.hasOwnProperty.call(r, i) && (void 0 !== (o = t(r, i)) ? r[i] = o : delete r[i]);
                return a.call(e, n, r)
            }({
                "": c
            }, "") : c
        }
    }(), ft = !1, p = function() {
        var e, n, i;
        ft || (ft = !0, e = r(), i = J(function() {
            var t;
            n = r(), P = !0, n !== e ? (t = n + a, T.c < t && (T.c = t), e = n, o || z || (z = !0, Rt()), o && o.content && $t(n, o)) : (ft = !1, Y(i))
        }, 500))
    }, n = X(w.innerHeight) ? function() {
        return w.innerHeight
    } : t ? (dt = $(w), function() {
        return dt.height()
    }) : function() {
        var t = x.documentElement,
            e = x.body,
            n = 0;
        return "CSS1Compat" === x.compatMode && t && t.offsetHeight ? n = t.offsetHeight : e && e.offsetHeight ? n = e.offsetHeight : l.x = !0, n
    }, y = function() {
        P = !0, V(mt), mt = U(Mt, 500)
    }, Ut(), {
        trackPageView: function() {
            var t, e, n = E();
            _ && n - _ < 500 || (t = w.location.href, k && t === k || (k = t, _ = n, C ? (T && (e = T.x, It()), Et(!0), T.x !== e ? (u = !1, b = N = void 0, b = jt(), Rt(), Pt(function() {
                Ct()
            })) : Lt()) : (b = N = u = void 0, Ut())))
        }
    }
}(window, document, navigator));