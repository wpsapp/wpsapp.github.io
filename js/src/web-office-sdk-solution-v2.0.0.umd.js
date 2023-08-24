!function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = e || self).WebOfficeSDK = t()
}(this, function() {
    "use strict";
    var e = function(t, n) {
        return (e = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(e, t) {
            e.__proto__ = t
        }
        || function(e, t) {
            for (var n in t)
                t.hasOwnProperty(n) && (e[n] = t[n])
        }
        )(t, n)
    };
    function t(t, n) {
        function i() {
            this.constructor = t
        }
        e(t, n),
        t.prototype = null === n ? Object.create(n) : (i.prototype = n.prototype,
        new i)
    }
    var n, i, s, r, o = function() {
        return (o = Object.assign || function(e) {
            for (var t, n = 1, i = arguments.length; n < i; n++)
                for (var s in t = arguments[n])
                    Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s]);
            return e
        }
        ).apply(this, arguments)
    };
    function a(e, t, n, i) {
        return new (n || (n = Promise))(function(s, r) {
            function o(e) {
                try {
                    c(i.next(e))
                } catch (e) {
                    r(e)
                }
            }
            function a(e) {
                try {
                    c(i.throw(e))
                } catch (e) {
                    r(e)
                }
            }
            function c(e) {
                var t;
                e.done ? s(e.value) : (t = e.value,
                t instanceof n ? t : new n(function(e) {
                    e(t)
                }
                )).then(o, a)
            }
            c((i = i.apply(e, t || [])).next())
        }
        )
    }
    function c(e, t) {
        var n, i, s, r, o = {
            label: 0,
            sent: function() {
                if (1 & s[0])
                    throw s[1];
                return s[1]
            },
            trys: [],
            ops: []
        };
        return r = {
            next: a(0),
            throw: a(1),
            return: a(2)
        },
        "function" == typeof Symbol && (r[Symbol.iterator] = function() {
            return this
        }
        ),
        r;
        function a(r) {
            return function(a) {
                return function(r) {
                    if (n)
                        throw new TypeError("Generator is already executing.");
                    for (; o; )
                        try {
                            if (n = 1,
                            i && (s = 2 & r[0] ? i.return : r[0] ? i.throw || ((s = i.return) && s.call(i),
                            0) : i.next) && !(s = s.call(i, r[1])).done)
                                return s;
                            switch (i = 0,
                            s && (r = [2 & r[0], s.value]),
                            r[0]) {
                            case 0:
                            case 1:
                                s = r;
                                break;
                            case 4:
                                return o.label++,
                                {
                                    value: r[1],
                                    done: !1
                                };
                            case 5:
                                o.label++,
                                i = r[1],
                                r = [0];
                                continue;
                            case 7:
                                r = o.ops.pop(),
                                o.trys.pop();
                                continue;
                            default:
                                if (!(s = (s = o.trys).length > 0 && s[s.length - 1]) && (6 === r[0] || 2 === r[0])) {
                                    o = 0;
                                    continue
                                }
                                if (3 === r[0] && (!s || r[1] > s[0] && r[1] < s[3])) {
                                    o.label = r[1];
                                    break
                                }
                                if (6 === r[0] && o.label < s[1]) {
                                    o.label = s[1],
                                    s = r;
                                    break
                                }
                                if (s && o.label < s[2]) {
                                    o.label = s[2],
                                    o.ops.push(r);
                                    break
                                }
                                s[2] && o.ops.pop(),
                                o.trys.pop();
                                continue
                            }
                            r = t.call(e, o)
                        } catch (e) {
                            r = [6, e],
                            i = 0
                        } finally {
                            n = s = 0
                        }
                    if (5 & r[0])
                        throw r[1];
                    return {
                        value: r[0] ? r[1] : void 0,
                        done: !0
                    }
                }([r, a])
            }
        }
    }
    !function(e) {
        e.refreshToken = "api.getToken"
    }(n || (n = {})),
    function(e) {
        e.unknown = "unknown",
        e.spreadsheet = "s",
        e.writer = "w",
        e.presentation = "p",
        e.pdf = "f"
    }(i || (i = {})),
    function(e) {
        e.nomal = "nomal",
        e.simple = "simple",
        e.embed = "embed"
    }(s || (s = {})),
    function(e) {
        e[e.requestFullscreen = 1] = "requestFullscreen",
        e[e.exitFullscreen = 0] = "exitFullscreen"
    }(r || (r = {}));
    var l = function() {
        function e(e, t, n, i, s) {
            var r = this;
            void 0 === i && (i = !0),
            void 0 === s && (s = !1),
            this.instanceId = e,
            this.url = t,
            this.mount = n,
            this.isListenResize = i,
            this.addedStyles = s,
            this.handleResize = function() {
                r.iframe.style.cssText += "height: " + r.mount.clientHeight + "px; width: " + r.mount.clientWidth + "px"
            }
            ,
            this.iframe = this.initIframe()
        }
        return e.prototype.initIframe = function() {
            var e = this
              , t = this.mount
              , n = document.createElement("iframe");
            n.classList.add("web-office-iframe");
            var i = {
                id: "office-iframe-" + this.instanceId,
                src: this.url,
                scrolling: "no",
                frameborder: "0",
                allowfullscreen: "allowfullscreen",
                webkitallowfullscreen: "true",
                mozallowfullscreen: "true"
            };
            for (var s in t ? (i.style = "width: " + t.clientWidth + "px; height: " + t.clientHeight + "px;",
            this.isListenResize && window.addEventListener("resize", this.handleResize)) : ((t = document.createElement("div")).classList.add("web-office-default-container"),
            this.addedStyles || this.addStylesheetRules(".web-office-default-container {position: absolute; padding: 0;  margin: 0; width: 100vw; height: 100vh; left: 0; top: 0;}"),
            document.body.appendChild(t),
            i.style = "width: 100vw; height: 100vh;"),
            i)
                n.setAttribute(s, i[s]);
            return t.appendChild(n),
            n.destroy = function() {
                window.removeEventListener("resize", e.handleResize),
                n.parentNode.removeChild(n),
                n = null
            }
            ,
            n
        }
        ,
        e.prototype.destroy = function() {
            this.iframe.parentNode.removeChild(this.iframe),
            window.removeEventListener("resize", this.handleResize)
        }
        ,
        e.prototype.addStylesheetRules = function(e) {
            var t = document.createElement("style");
            document.head.appendChild(t);
            var n = t.sheet;
            n.insertRule(e, n.cssRules.length)
        }
        ,
        e
    }()
      , u = function() {
        function e() {
            this.HANDLE_LIST = []
        }
        return e.prototype.add = function(e) {
            this.HANDLE_LIST.push(e),
            window.addEventListener("message", e, !1)
        }
        ,
        e.prototype.remove = function(e) {
            var t = this.HANDLE_LIST.indexOf(e);
            t >= 0 && this.HANDLE_LIST.splice(t, 1),
            window.removeEventListener("message", e, !1)
        }
        ,
        e.prototype.empty = function() {
            for (; this.HANDLE_LIST.length; ) {
                var e = this.HANDLE_LIST.shift();
                window.removeEventListener("message", e, !1)
            }
        }
        ,
        e.prototype.parse = function(e) {
            try {
                return "object" == typeof e ? e : e ? JSON.parse(e) : e
            } catch (t) {
                return e
            }
        }
        ,
        e
    }()
      , d = function() {
        function e(e, t) {
            var n = this;
            this.collectObjIdHandlers = new Set,
            this.polyfillApi = ["ExportAsFixedFormat", "GetOperatorsInfo", "ImportDataIntoFields", "ReplaceText", "ReplaceBookmark", "GetBookmarkText", "GetComments"],
            this.getId = function() {
                return ""
            }
            ,
            this.setterCallbacks = {
                idMap: {}
            },
            this.sendMsgToWps = function() {}
            ,
            this.objId = 0,
            this.origin = "",
            this.apiChannel = function(e, t, i, s) {
                return a(n, void 0, void 0, function() {
                    var n, r, o, l, u, d, h, p, f, m = this;
                    return c(this, function(v) {
                        switch (v.label) {
                        case 0:
                            return n = this.getId(),
                            l = new Promise(function(e, t) {
                                r = e,
                                o = t
                            }
                            ),
                            u = {},
                            t.args ? [4, this.reduceArgs(t.args)] : [3, 2];
                        case 1:
                            d = v.sent(),
                            h = d[0],
                            p = d[1],
                            t.args = h,
                            u = p,
                            v.label = 2;
                        case 2:
                            return e !== this.prefix + "setter" ? [3, 4] : [4, this.handleApiSetter(t)];
                        case 3:
                            v.sent(),
                            v.label = 4;
                        case 4:
                            return f = function() {
                                var t = function(l) {
                                    return a(m, void 0, void 0, function() {
                                        var a, d, h;
                                        return c(this, function(c) {
                                            switch (c.label) {
                                            case 0:
                                                return this.origin !== l.origin ? [2] : (a = this.message.parse(l.data)).eventName === this.prefix + "callback" && a.callbackId && u[a.callbackId] ? [4, u[a.callbackId].apply(u, a.data.args)] : [3, 2];
                                            case 1:
                                                d = c.sent(),
                                                this.sendMsgToWps({
                                                    result: d,
                                                    eventName: this.prefix + "callback.reply",
                                                    callbackId: a.callbackId
                                                }),
                                                c.label = 2;
                                            case 2:
                                                return a.eventName === e + ".reply" && a.msgId === n && (a.error ? ((h = new Error("")).stack = a.error + "\n" + i,
                                                s && s(),
                                                o(h)) : r(a.result),
                                                this.message.remove(t)),
                                                [2]
                                            }
                                        })
                                    })
                                };
                                return m.message.add(t),
                                l
                            }
                            ,
                            this.handleSendApiChannel([{
                                eventName: e,
                                data: t,
                                msgId: n
                            }, f]),
                            [2, l]
                        }
                    })
                })
            }
            ,
            this.handleApiSetter = function(e) {
                return a(n, void 0, void 0, function() {
                    var t, n, i, s, r, o, a, l, u, d, h = this;
                    return c(this, function(c) {
                        switch (c.label) {
                        case 0:
                            return t = function() {
                                return Object.keys(h.setterCallbacks.idMap).find(function(e) {
                                    return h.setterCallbacks.idMap[e] === i + ":" + n
                                })
                            }
                            ,
                            n = e.prop,
                            i = e.parentObjId,
                            s = e.value,
                            [4, this.reduceArgs([s])];
                        case 1:
                            return r = c.sent(),
                            o = r[0],
                            a = r[1],
                            e.value = o[0],
                            l = Object.keys(a)[0],
                            u = this.setterCallbacks[i],
                            null === s && u && u[n] && ((d = t()) && delete this.setterCallbacks.idMap[d],
                            delete u[n],
                            Object.keys(u).length || delete this.setterCallbacks[i],
                            Object.keys(this.setterCallbacks.idMap).length || this.message.remove(this.setterCallbackSubscribe.bind(this))),
                            l && (Object.keys(this.setterCallbacks.idMap).length || this.message.add(this.setterCallbackSubscribe.bind(this)),
                            this.setterCallbacks[i] || (this.setterCallbacks[i] = {}),
                            this.setterCallbacks[i][n] = {
                                callbackId: l,
                                callback: a[l]
                            },
                            (d = t()) && delete this.setterCallbacks.idMap[d],
                            this.setterCallbacks.idMap[l] = i + ":" + n),
                            [2]
                        }
                    })
                })
            }
            ,
            this.prefix = t,
            this.origin = e.origin,
            this.sendMsgToWps = e.sendMsgToWps.bind(e),
            this.getId = e.getId.bind(e),
            this.message = e.message,
            this.sdkInstanceId = e.instanceId,
            this.instance = e
        }
        return e.prototype.destroyApplication = function() {
            this.collectObjIdHandlers = new Set,
            this.objId = 0
        }
        ,
        e.prototype.subEventHandle = function(e, t) {
            var n = this
              , i = {};
            this.message.add(function(e) {
                return a(n, void 0, void 0, function() {
                    var t, n, s, r, o, a;
                    return c(this, function(c) {
                        switch (c.label) {
                        case 0:
                            return this.origin !== e.origin ? [2] : (t = this.message.parse(e.data),
                            n = t.sdkInstanceId,
                            t.eventName === this.prefix + "event" && Number(n) === this.sdkInstanceId && t.data ? (s = t.data,
                            r = s.eventName,
                            o = s.data,
                            (a = i[r]) ? [4, a(o)] : [3, 2]) : [3, 2]);
                        case 1:
                            c.sent(),
                            c.label = 2;
                        case 2:
                            return [2]
                        }
                    })
                })
            });
            var s = function(s) {
                var r = t[s];
                Object.defineProperty(e, r, {
                    set: function(e) {
                        i[r] = e,
                        n.sendMsgToWps({
                            eventName: n.prefix + "event.register",
                            data: {
                                eventName: r,
                                register: !!e,
                                objId: n.objId += 1
                            },
                            sdkInstanceId: n.sdkInstanceId
                        })
                    }
                })
            };
            for (var r in t)
                s(r)
        }
        ,
        e.prototype.mixinProto = function(e, t) {
            Object.assign(e, t)
        }
        ,
        e.prototype.makeCollectObjIdHandle = function(e) {
            var t = this;
            return function() {
                var n = []
                  , i = function(e) {
                    n.push(e)
                };
                return t.collectObjIdHandlers.add(i),
                {
                    End: function() {
                        e(n),
                        t.collectObjIdHandlers.delete(i)
                    }
                }
            }
        }
        ,
        e.prototype.assign = function(e, t, n) {
            for (var i = this, s = t.slice(0), r = function() {
                var t = s.shift();
                !t.alias && ~a.polyfillApi.indexOf(t.prop) && s.push(o(o({}, t), {
                    alias: t.prop + "Async"
                })),
                Object.defineProperty(e, t.alias || t.prop, {
                    get: function() {
                        var s = 1 === t.cache
                          , r = s && e["__" + t.prop + "CacheValue"];
                        if (!r) {
                            var o = i.getError()
                              , a = i.createObjId(s)
                              , c = function() {
                                for (var s, r = [], a = 0; a < arguments.length; a++)
                                    r[a] = arguments[a];
                                return void 0 !== t.caller ? (s = {
                                    objId: i.createObjId()
                                },
                                i.assign(s, n[t.caller], n)) : s = {},
                                i.wrapper(c, s, i.prefix + "caller", {
                                    obj: c,
                                    args: r,
                                    parentObjId: e.objId,
                                    objId: s.objId,
                                    prop: t.prop
                                }, o),
                                s
                            };
                            return c.objId = -1,
                            void 0 !== t.getter && (c.objId = a,
                            i.assign(c, n[t.getter], n)),
                            i.wrapper(e, c, i.prefix + "getter", {
                                parentObjId: e.objId,
                                objId: c.objId,
                                prop: t.prop
                            }, o, function() {
                                delete e["__" + t.prop + "CacheValue"]
                            }),
                            s && (e["__" + t.prop + "CacheValue"] = c),
                            c
                        }
                        return r
                    },
                    set: function(n) {
                        var s = i.getError();
                        return i.wrapper(e, {}, i.prefix + "setter", {
                            value: n,
                            parentObjId: e.objId,
                            objId: -1,
                            prop: t.prop
                        }, s)
                    }
                })
            }, a = this; s.length; )
                r()
        }
        ,
        e.prototype.wrapper = function(e, t, n, i, s, r) {
            var o, a = this, c = (e.done ? e.done() : Promise.resolve()).then(function() {
                return o || (o = a.apiChannel(n, i, s, r)),
                o
            });
            t.done = function() {
                return c
            }
            ,
            t.then = function(e, n) {
                return i.objId >= 0 ? (t.then = null,
                t.catch = null,
                c.then(function() {
                    e(t)
                }).catch(function(e) {
                    return n(e)
                })) : c.then(e, n)
            }
            ,
            t.catch = function(e) {
                return c.catch(e)
            }
            ,
            t.Destroy = function() {
                return this.apiChannel(this.prefix + "free", {
                    objId: t.objId
                }, "")
            }
        }
        ,
        e.prototype.handleSendApiChannel = function(e) {
            var t = e[0]
              , n = e[1];
            "function" == typeof (t = o({}, t)).data && (t.data = t.data()),
            n(),
            this.sendMsgToWps(t)
        }
        ,
        e.prototype.setterCallbackSubscribe = function(e) {
            return a(this, void 0, void 0, function() {
                var t, n, i, s, r, o, a, l, u, d;
                return c(this, function(c) {
                    switch (c.label) {
                    case 0:
                        return this.origin !== e.origin ? [2] : (t = this.message.parse(e.data),
                        n = t.eventName,
                        i = t.callbackId,
                        s = t.data,
                        i && (r = this.setterCallbacks.idMap[i]) ? (o = r.split(":"),
                        a = o[0],
                        l = o[1],
                        n === this.prefix + "callback" && this.setterCallbacks[a] && this.setterCallbacks[a][l] ? [4, (d = this.setterCallbacks[a][l]).callback.apply(d, s.args)] : [3, 2]) : [3, 2]);
                    case 1:
                        u = c.sent(),
                        this.sendMsgToWps({
                            result: u,
                            callbackId: i,
                            eventName: this.prefix + "callback.reply"
                        }),
                        c.label = 2;
                    case 2:
                        return [2]
                    }
                })
            })
        }
        ,
        e.prototype.reduceArgs = function(e) {
            return a(this, void 0, void 0, function() {
                var t, n, i, s, r, o, a, l, u, d, h;
                return c(this, function(c) {
                    switch (c.label) {
                    case 0:
                        t = {},
                        n = [],
                        i = e.slice(0),
                        c.label = 1;
                    case 1:
                        return i.length ? (s = void 0,
                        [4, i.shift()]) : [3, 13];
                    case 2:
                        return (r = c.sent()) && r.done ? [4, r.done()] : [3, 4];
                    case 3:
                        c.sent(),
                        c.label = 4;
                    case 4:
                        if (!function(e) {
                            if (!e)
                                return !1;
                            for (var t = e; null !== Object.getPrototypeOf(t); )
                                t = Object.getPrototypeOf(t);
                            return Object.getPrototypeOf(e) === t
                        }(s))
                            return [3, 11];
                        for (a in s = {},
                        o = [],
                        r)
                            o.push(a);
                        l = 0,
                        c.label = 5;
                    case 5:
                        return l < o.length ? (u = o[l],
                        d = r[u],
                        /^[A-Z]/.test(u) ? d && d.done ? [4, d.done()] : [3, 7] : [3, 8]) : [3, 10];
                    case 6:
                        c.sent(),
                        c.label = 7;
                    case 7:
                        d && d.objId ? d = {
                            objId: d.objId
                        } : "function" == typeof d && (h = this.getId(),
                        t[h] = d,
                        d = {
                            callbackId: h
                        }),
                        c.label = 8;
                    case 8:
                        s[u] = d,
                        c.label = 9;
                    case 9:
                        return l++,
                        [3, 5];
                    case 10:
                        return [3, 12];
                    case 11:
                        r && r.objId ? s = {
                            objId: r.objId
                        } : "function" == typeof r && void 0 === r.objId ? (h = this.getId(),
                        t[h] = r,
                        s = {
                            callbackId: h
                        }) : s = r,
                        c.label = 12;
                    case 12:
                        return n.push(s),
                        [3, 1];
                    case 13:
                        return [2, [n, t]]
                    }
                })
            })
        }
        ,
        e.prototype.createObjId = function(e) {
            return this.objId += 1,
            !e && this.collectObjId(),
            this.objId
        }
        ,
        e.prototype.collectObjId = function() {
            var e = this;
            this.collectObjIdHandlers.forEach(function(t) {
                return t(e.objId)
            })
        }
        ,
        e.prototype.getError = function() {
            var e = new Error("");
            return (e.stack || e.message || "").split("\n").slice(2).join("\n")
        }
        ,
        e
    }()
      , h = function(e) {
        function n(t, n, s) {
            var r = e.call(this, t, s) || this
              , o = {}
              , a = t.officeType
              , c = n.Events
              , l = n.Enum
              , u = n.Props
              , d = u[0]
              , h = u[1]
              , p = {
                objId: r.objId
            };
            switch (r.assign(p, d, h),
            p.Events = c,
            p.Enum = l,
            p.Sub = {},
            o.Enum = p.Enum,
            o.Events = p.Events,
            o.Props = u,
            a) {
            case i.writer:
                o.WordApplication = t.WpsApplication = function() {
                    return p
                }
                ;
                break;
            case i.spreadsheet:
                o.ExcelApplication = t.EtApplication = function() {
                    return p
                }
                ;
                break;
            case i.presentation:
                o.PPTApplication = t.WppApplication = function() {
                    return p
                }
                ;
                break;
            case i.pdf:
                o.PDFApplication = function() {
                    return p
                }
            }
            return o.Application = p,
            o.Free = function(e) {
                return r.apiChannel(r.prefix + "free", {
                    objId: e
                }, "")
            }
            ,
            o.Stack = p.Stack = r.makeCollectObjIdHandle(function(e) {
                r.apiChannel(r.prefix + "free", {
                    objId: e
                }, "")
            }),
            o.destroyApplication = function() {
                r.destroyApplication()
            }
            ,
            r.subEventHandle(p.Sub, c),
            r.mixinProto(t, o),
            r
        }
        return t(n, e),
        n
    }(d)
      , p = function(e) {
        function n(t, n, i) {
            var s = e.call(this, t, i) || this
              , r = {}
              , o = n.Events
              , a = n.Enum
              , c = n.Props
              , l = c[0]
              , u = c[1]
              , d = {
                objId: s.objId
            };
            return s.assign(d, l, u),
            d.Events = o,
            d.Enum = a,
            d.Sub = {},
            r.CommonEnum = d.Enum,
            r.CommonEvents = d.Events,
            r.CommonProps = c,
            r.CommonApi = d,
            r.CommonFree = function(e) {
                return s.apiChannel(s.prefix + "free", {
                    objId: e
                }, "")
            }
            ,
            r.CommonStack = d.Stack = s.makeCollectObjIdHandle(function(e) {
                s.apiChannel(s.prefix + "free", {
                    objId: e
                }, "")
            }),
            r.destroyCommonApp = function() {
                s.destroyApplication()
            }
            ,
            s.subEventHandle(d.Sub, o),
            s.mixinProto(t, r),
            s
        }
        return t(n, e),
        n
    }(d);
    var f = function() {
        function e(t) {
            var n, i = this;
            this.id = 0,
            this.origin = "",
            this.iframeWH = null,
            this.cbConfigsSub = {},
            this.readyEventNames = [{
                event: "ready",
                callback: function() {
                    i.handleBaseReady()
                },
                after: !0
            }, {
                event: "open.result"
            }, {
                event: "api.ready",
                callback: function() {
                    for (var e = [], t = 0; t < arguments.length; t++)
                        e[t] = arguments[t];
                    var n = e[0];
                    return new h(i,n,"api."),
                    i.Application
                }
            }, {
                event: "commonApi.ready",
                callback: function() {
                    for (var e = [], t = 0; t < arguments.length; t++)
                        e[t] = arguments[t];
                    var n = e[0];
                    return new p(i,n,"commonApi."),
                    i.CommonApi
                }
            }],
            this.cbConfigs = ["refreshToken"],
            this.onEventNames = {
                "open.result": "fileOpen",
                "tab.switch": "tabSwitch",
                "file.saved": "fileStatus",
                error: "error",
                stage: "stage"
            },
            this.polyfillConfigName = [["wpsOptions", "wordOptions"], ["etOptions", "excelOptions"], ["wppOptions", "pptOptions"]],
            this.flag = {
                advancedApiReadySended: !1,
                commonApiReadySended: !1
            },
            this.baseReadyPromise = Promise.resolve(),
            this.fileOpenPromise = Promise.resolve(),
            this.advancedReadyPromise = Promise.resolve(),
            this.commonApiPromise = Promise.resolve(),
            this.iframeInstance = null,
            this.officeType = "",
            this.url = "",
            this.version = "2.0.0",
            this.iframeReady = !1,
            this.forceIframeResize = function() {
                i.iframeInstance && i.iframeInstance.handleResize()
            }
            ,
            this.isOtherEvent = function(e) {
                return void 0 !== e && e !== i.instanceId
            }
            ,
            this.handleBaseReady = function() {
                i.sendMsgToWps({
                    eventName: "setConfig",
                    data: o(o({}, i.sdkConfig), {
                        version: i.version
                    })
                }),
                i.tokenData && i.setToken(o(o({}, i.tokenData), {
                    hasRefreshTokenConfig: !!i.sdkConfig.refreshToken
                })),
                i.flag.advancedApiReadySended && i.sendMsgToWps({
                    eventName: "api.ready"
                }),
                i.flag.commonApiReadySended && i.sendMsgToWps({
                    eventName: "commonApi.ready"
                }),
                i.iframeReady = !0
            }
            ,
            this.instanceId = e.instanceId,
            e.instanceId += 1,
            this.message = new u,
            this.mittInstance = (n = n || Object.create(null),
            {
                on: function(e, t) {
                    (n[e] || (n[e] = [])).push(t)
                },
                off: function(e, t) {
                    n[e] && n[e].splice(n[e].indexOf(t) >>> 0, 1)
                },
                emit: function(e, t) {
                    (n[e] || []).slice().map(function(e) {
                        e(t)
                    }),
                    (n["*"] || []).slice().map(function(n) {
                        n(e, t)
                    })
                }
            }),
            this.handleConfig(t)
        }
        return e.config = function(t) {
            return void 0 === t && (t = {}),
            e.singleInstance || (e.singleInstance = new e(t)),
            e.singleInstance
        }
        ,
        e.prototype.setToken = function(e) {
            return a(this, void 0, void 0, function() {
                return c(this, function(t) {
                    switch (t.label) {
                    case 0:
                        return [4, this.basicReady()];
                    case 1:
                        return t.sent(),
                        this.tokenData = e,
                        this.sendMsgToWps({
                            eventName: "setToken",
                            data: e
                        }),
                        [2]
                    }
                })
            })
        }
        ,
        e.prototype.advancedApiReady = function() {
            return a(this, void 0, void 0, function() {
                return c(this, function(e) {
                    switch (e.label) {
                    case 0:
                        return this.flag.advancedApiReadySended ? [3, 2] : [4, this.fileOpenPromise];
                    case 1:
                        e.sent(),
                        this.flag.advancedApiReadySended = !0,
                        this.sendMsgToWps({
                            eventName: "api.ready"
                        }),
                        e.label = 2;
                    case 2:
                        return [4, this.advancedReadyPromise];
                    case 3:
                        return [2, e.sent()]
                    }
                })
            })
        }
        ,
        e.prototype.commonApiReady = function() {
            return a(this, void 0, void 0, function() {
                return c(this, function(e) {
                    switch (e.label) {
                    case 0:
                        return this.flag.commonApiReadySended ? [3, 2] : [4, this.basicReady()];
                    case 1:
                        e.sent(),
                        this.flag.commonApiReadySended = !0,
                        this.sendMsgToWps({
                            eventName: "commonApi.ready"
                        }),
                        e.label = 2;
                    case 2:
                        return [4, this.commonApiPromise];
                    case 3:
                        return [2, e.sent()]
                    }
                })
            })
        }
        ,
        e.prototype.destroy = function() {
            this.iframeInstance.destroy(),
            this.message.empty(),
            this.destroyApplication && this.destroyApplication(),
            this.destroyCommonApp && this.destroyCommonApp(),
            this.removeFullscreenEventListener()
        }
        ,
        e.prototype.on = function(e, t) {
            return a(this, void 0, void 0, function() {
                var n;
                return c(this, function(i) {
                    switch (i.label) {
                    case 0:
                        return [4, this.basicReady()];
                    case 1:
                        return i.sent(),
                        n = e,
                        "fullscreenChange" === e && (n = "fullscreenchange"),
                        this.handleBasicEvent(n, "on"),
                        this.mittInstance.on(e, t),
                        [2]
                    }
                })
            })
        }
        ,
        e.prototype.off = function(e, t) {
            return a(this, void 0, void 0, function() {
                return c(this, function(n) {
                    switch (n.label) {
                    case 0:
                        return [4, this.basicReady()];
                    case 1:
                        return n.sent(),
                        this.handleBasicEvent(e, "off"),
                        this.mittInstance.off(e, t),
                        [2]
                    }
                })
            })
        }
        ,
        e.prototype.handleConfig = function(e) {
            var t = this;
            void 0 === e && (e = {});
            try {
                var n = this.userConfHandler(e)
                  , i = n.subscriptions
                  , s = void 0 === i ? {} : i
                  , r = n.mount
                  , o = void 0 === r ? null : r
                  , a = n.url;
                this.origin = (a.match(/https*:\/\/[^\/]+/g) || [])[0];
                var c = this.readyEventNames.map(function(e) {
                    return t.makeReady(e)
                })
                  , u = c[0]
                  , d = c[1]
                  , h = c[2]
                  , p = c[3];
                this.baseReadyPromise = u,
                this.fileOpenPromise = d,
                this.advancedReadyPromise = h,
                this.commonApiPromise = p,
                this.iframeWH = o ? {
                    width: o.clientWidth + "px",
                    height: o.clientHeight + "px"
                } : {
                    width: "100vw",
                    height: "100vh"
                },
                delete n.mount,
                a && delete n.url,
                this.url = a,
                delete n.subscriptions,
                this.sdkConfig = n,
                this.iframeInstance = new l(this.instanceId,a,o),
                this.iframe = this.iframeInstance.iframe,
                this.listener(s)
            } catch (e) {
                return console.error(e),
                null
            }
        }
        ,
        e.prototype.listener = function(e) {
            var t = this;
            this.message.add(function(n) {
                return a(t, void 0, void 0, function() {
                    var t, i, s, r, o, a, l, u, d;
                    return c(this, function(c) {
                        return t = this.message.parse(n.data),
                        i = t.eventName,
                        s = void 0 === i ? "" : i,
                        r = t.data,
                        o = void 0 === r ? null : r,
                        a = t.url,
                        l = void 0 === a ? null : a,
                        u = t.sdkInstanceId,
                        this.isOtherEvent(u) ? [2] : -1 !== ["wps.jssdk.api"].indexOf(s) ? [2] : ((d = this.handleListenEvent(s, o)) ? d() : Object.keys(this.onEventNames).includes(s) && ("open.result" === s && (this.officeType = o.fileInfo.officeType),
                        this.mittInstance.emit(this.onEventNames[s], o)),
                        "function" == typeof e[s] && e[s](this, l || o),
                        [2])
                    })
                })
            })
        }
        ,
        e.prototype.handleListenEvent = function(e, t) {
            var i, s = this;
            return ((i = {
                "api.scroll": function() {
                    return window.scrollTo(t.x, t.y)
                },
                "event.callback": function() {
                    return a(s, void 0, void 0, function() {
                        var e, n, i, s, r, o, a;
                        return c(this, function(c) {
                            return e = t.eventName,
                            n = t.data,
                            i = e,
                            "fullScreenChange" === e && (i = "fullscreenChange"),
                            ((null === (o = this.sdkConfig.commonOptions) || void 0 === o ? void 0 : o.isBrowserViewFullscreen) || (null === (a = this.sdkConfig.commonOptions) || void 0 === a ? void 0 : a.isParentFullscreen)) && "fullscreenchange" === i && (s = n.status,
                            r = n.isDispatchEvent,
                            this.sdkConfig.commonOptions.isBrowserViewFullscreen ? this.iframeWH && function(e, t, n, i) {
                                0 === e ? t.style = "position: static; width: " + n.width + "; height: " + n.height : 1 === e && (t.style = "position: absolute; width: 100%; height: 100%"),
                                i && function(e) {
                                    ["fullscreen", "fullscreenElement"].forEach(function(t) {
                                        Object.defineProperty(document, t, {
                                            get: function() {
                                                return !!e.status
                                            },
                                            configurable: !0
                                        })
                                    });
                                    var t = new CustomEvent("fullscreenchange");
                                    document.dispatchEvent(t)
                                }({
                                    status: e
                                })
                            }(s, this.iframe, this.iframeWH, r) : this.sdkConfig.commonOptions.isParentFullscreen && function(e, t) {
                                if (0 === e) {
                                    var n = document
                                      , i = n.exitFullscreen || n.mozCancelFullScreen || n.msExitFullscreen || n.webkitCancelFullScreen || n.webkitExitFullscreen;
                                    i.call(document)
                                } else if (1 === e) {
                                    var s = t.requestFullscreen || t.mozRequestFullScreen || t.msRequestFullscreen || t.webkitRequestFullscreen;
                                    s.call(t)
                                }
                            }(s, this.iframe)),
                            this.mittInstance.emit(i, n),
                            [2]
                        })
                    })
                }
            })[n.refreshToken] = function() {
                return a(s, void 0, void 0, function() {
                    var t, n;
                    return c(this, function(i) {
                        switch (i.label) {
                        case 0:
                            t = {
                                token: !1
                            },
                            i.label = 1;
                        case 1:
                            return i.trys.push([1, 3, , 4]),
                            [4, this.cbConfigsSub.refreshToken()];
                        case 2:
                            return t = i.sent(),
                            [3, 4];
                        case 3:
                            return n = i.sent(),
                            console.error("refreshToken: " + (n || "fail to get")),
                            [3, 4];
                        case 4:
                            return this.sendMsgToWps({
                                eventName: e + ".reply",
                                data: t
                            }),
                            [2]
                        }
                    })
                })
            }
            ,
            i)[e]
        }
        ,
        e.prototype.basicReady = function() {
            return this.baseReadyPromise
        }
        ,
        e.prototype.userConfHandler = function(e, t) {
            var i = this;
            void 0 === t && (t = !0);
            var r = o({}, e)
              , a = r.headers
              , c = void 0 === a ? {} : a
              , l = r.subscriptions
              , u = void 0 === l ? {} : l
              , d = r.commonOptions
              , h = r.url
              , p = void 0 === h ? "" : h
              , f = r.wpsUrl
              , m = void 0 === f ? "" : f
              , v = r.mode
              , b = void 0 === v ? s.nomal : v
              , g = r.debug
              , y = r.disablePlugins
              , I = r.hideGuide
              , k = r.readOnly;
            return Object.assign(r, this.handleHeadersAndSubscriptionsConfig(c, u, t)),
            r.url = this.handleUrlConfig(d, b, g, p, m, y, I, k),
            d && (d.isParentFullscreen || d.isBrowserViewFullscreen) && document.addEventListener("fullscreenchange", function() {
                return i.handleFullscreenChange()
            }),
            this.polyfillConfigName.map(function(e) {
                var t = e[0]
                  , n = e[1];
                n && (r[t] = r[n])
            }),
            this.cbConfigs.map(function(e) {
                var t, s, o = r[e];
                o && (t = o,
                s = "Function",
                {}.toString.call(t) === "[object " + s + "]") && (i.cbConfigsSub[e] = o,
                r[e] = {
                    eventName: n[e]
                })
            }),
            r.commandBars && this.handleCommandBarsConfig(r.commandBars, !1),
            o({}, r)
        }
        ,
        e.prototype.handleBasicEvent = function(e, t) {
            if (!["error", "fileOpen"].includes(e)) {
                var n = {
                    eventName: "basic.event",
                    data: {
                        eventName: e,
                        action: t
                    }
                };
                this.sendMsgToWps(n)
            }
        }
        ,
        e.prototype.handleFullscreenChange = function() {
            var e = {
                status: r.requestFullscreen
            };
            document.fullscreenElement ? e.status = r.requestFullscreen : e.status = r.exitFullscreen,
            this.sendMsgToWps({
                data: e,
                eventName: "fullscreenchange"
            })
        }
        ,
        e.prototype.removeFullscreenEventListener = function() {
            document.removeEventListener("fullscreenchange", this.handleFullscreenChange.bind(this))
        }
        ,
        e.prototype.handleHeadersAndSubscriptionsConfig = function(e, t, n) {
            var i = e.backBtn
              , s = void 0 === i ? {} : i
              , r = e.shareBtn
              , o = void 0 === r ? {} : r
              , a = e.otherMenuBtn
              , c = void 0 === a ? {} : a
              , l = [["wpsconfig_back_btn", s], ["wpsconfig_share_btn", o], ["wpsconfig_other_menu_btn", c]]
              , u = [];
            return c.items && Array.isArray(c.items) && c.items.forEach(function(e, t) {
                void 0 === e && (e = {}),
                "custom" === e.type && u.push(["wpsconfig_other_menu_btn_" + t, e])
            }),
            l.concat(u).forEach(function(e) {
                var i, s;
                i = e[1],
                s = e[0],
                i.subscribe && "function" == typeof i.subscribe && (i.callback = s,
                t[s] = i.subscribe,
                n && delete i.subscribe)
            }),
            {}
        }
        ,
        e.prototype.handleUrlConfig = function(e, t, n, i, r, o, a, c) {
            var l = [];
            l.push("sdkId=" + this.instanceId),
            t === s.simple || e && !1 === e.isShowTopArea ? l.push("simple", "hidecmb") : t === s.embed && l.push("simple=1", "hidecmb=1", "embed=1"),
            o && l.push("disablePlugins"),
            a && l.push("hideguide"),
            c && l.push("readonly"),
            n && l.push("debugger");
            var u = i || r;
            return u && l.length && (u = u + (u.indexOf("?") >= 0 ? "&" : "?") + l.join("&")),
            u
        }
        ,
        e.prototype.handleCommandBarsConfig = function(e, t) {
            void 0 === t && (t = !0);
            var n = e.map(function(e) {
                var t = e.attributes;
                if (!Array.isArray(t)) {
                    var n = [];
                    for (var i in t)
                        if (t.hasOwnProperty(i)) {
                            var s = {
                                name: i,
                                value: t[i]
                            };
                            n.push(s)
                        }
                    e.attributes = n
                }
                return e
            });
            return t && this.sendMsgToWps({
                data: n,
                eventName: "setCommandBars"
            }),
            n
        }
        ,
        e.prototype.sendMsgToWps = function(e) {
            var t, n, i = o(o({}, e), {
                sdkInstanceId: this.instanceId
            });
            null === (n = null === (t = this.iframe) || void 0 === t ? void 0 : t.contentWindow) || void 0 === n || n.postMessage(JSON.stringify(i), this.origin)
        }
        ,
        e.prototype.makeReady = function(e) {
            var t = this
              , n = e.event
              , i = e.callback
              , s = e.after;
            return new Promise(function(e) {
                var r = function(o) {
                    if (t.origin === o.origin) {
                        var a = t.message.parse(o.data)
                          , c = a.eventName
                          , l = a.data
                          , u = a.sdkInstanceId;
                        if (!t.isOtherEvent(u) && c === n) {
                            var d = void 0;
                            !s && i && (d = i(l)),
                            e(d),
                            s && i && i(l),
                            t.message.remove(r)
                        }
                    }
                };
                t.message.add(r)
            }
            )
        }
        ,
        e.prototype.getId = function() {
            return this.id += 1,
            this.instanceId + "-" + this.id
        }
        ,
        e.instanceId = 1,
        e
    }();
    return window.WPS = f,
    f
});
