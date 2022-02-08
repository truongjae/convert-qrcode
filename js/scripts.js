! function(n) {
    var r = {};

    function o(e) {
        if (r[e]) return r[e].exports;
        var t = r[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return n[e].call(t.exports, t, t.exports, o), t.l = !0, t.exports
    }
    o.m = n, o.c = r, o.d = function(e, t, n) {
        o.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    }, o.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, o.t = function(t, e) {
        if (1 & e && (t = o(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var n = Object.create(null);
        if (o.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var r in t) o.d(n, r, function(e) {
                return t[e]
            }.bind(null, r));
        return n
    }, o.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return o.d(t, "a", t), t
    }, o.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, o.p = "", o(o.s = 0)
}([function(e, t, n) {
    (function(e) {
        function n() {
            var e;
            o.each(a, function(e, t) {
                var n = o('label[for="' + t[0] + '"]');
                n.text(n.text().replace(/:.*/, ": " + o("#" + t[0]).val() + t[1]))
            }), e = {
                render: o("#render").val(),
                ecLevel: o("#eclevel").val(),
                minVersion: parseInt(o("#minversion").val(), 10),
                fill: o("#fill").val(),
                background: o("#background").val(),
                text: o("#text").val(),
                size: parseInt(o("#size").val(), 10),
                radius: .01 * parseInt(o("#radius").val(), 10),
                quiet: parseInt(o("#quiet").val(), 10),
                mode: parseInt(o("#mode").val(), 10),
                mSize: .01 * parseInt(o("#msize").val(), 10),
                mPosX: .01 * parseInt(o("#mposx").val(), 10),
                mPosY: .01 * parseInt(o("#mposy").val(), 10),
                label: o("#label").val(),
                fontname: o("#font").val(),
                fontcolor: o("#fontcolor").val(),
                image: o("#img-buffer")[0]
            }, o("#container").empty().qrcode(e)
        }

        function t() {
            var e, t = o("#image")[0];
            t.files && t.files[0] && ((e = new r.FileReader).onload = function(e) {
                o("#img-buffer").attr("src", e.target.result), o("#mode").val("4"), setTimeout(n, 250)
            }, e.readAsDataURL(t.files[0]))
        }
        var r = e.window,
            o = r.jQuery,
            a = [
                ["size", "px"],
                ["minversion", ""],
                ["quiet", " level"],
                ["radius", "%"],
                ["msize", "%"],
                ["mposx", "%"],
                ["mposy", "%"]
            ];
        o(function() {
            o("#image").on("change", t), o("input, textarea, select").on("input change", n), o(r).on("load", n), n()
        })
    }).call(this, n(1))
}, function(e, t) {
    var n = function() {
        return this
    }();
    try {
        n = n || new Function("return this")()
    } catch (e) {
        "object" == typeof window && (n = window)
    }
    e.exports = n
}]);