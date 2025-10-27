var xd = e => {
    throw TypeError(e)
};
var Ga = (e, t, n) => t.has(e) || xd("Cannot " + n);
var N = (e, t, n) => (Ga(e, t, "read from private field"), n ? n.call(e) : t.get(e)),
    Z = (e, t, n) => t.has(e) ? xd("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n),
    U = (e, t, n, r) => (Ga(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n),
    Ae = (e, t, n) => (Ga(e, t, "access private method"), n);
var Rs = (e, t, n, r) => ({
    set _(o) {
        U(e, t, o, n)
    },
    get _() {
        return N(e, t, r)
    }
});

function My(e, t) {
    for (var n = 0; n < t.length; n++) {
        const r = t[n];
        if (typeof r != "string" && !Array.isArray(r)) {
            for (const o in r)
                if (o !== "default" && !(o in e)) {
                    const s = Object.getOwnPropertyDescriptor(r, o);
                    s && Object.defineProperty(e, o, s.get ? s : {
                        enumerable: !0,
                        get: () => r[o]
                    })
                }
        }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
    }))
}(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
    new MutationObserver(o => {
        for (const s of o)
            if (s.type === "childList")
                for (const i of s.addedNodes) i.tagName === "LINK" && i.rel === "modulepreload" && r(i)
    }).observe(document, {
        childList: !0,
        subtree: !0
    });

    function n(o) {
        const s = {};
        return o.integrity && (s.integrity = o.integrity), o.referrerPolicy && (s.referrerPolicy = o.referrerPolicy), o.crossOrigin === "use-credentials" ? s.credentials = "include" : o.crossOrigin === "anonymous" ? s.credentials = "omit" : s.credentials = "same-origin", s
    }

    function r(o) {
        if (o.ep) return;
        o.ep = !0;
        const s = n(o);
        fetch(o.href, s)
    }
})();

function jp(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var Op = {
        exports: {}
    },
    sa = {},
    Mp = {
        exports: {}
    },
    G = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var gs = Symbol.for("react.element"),
    Dy = Symbol.for("react.portal"),
    Iy = Symbol.for("react.fragment"),
    _y = Symbol.for("react.strict_mode"),
    Ly = Symbol.for("react.profiler"),
    Fy = Symbol.for("react.provider"),
    zy = Symbol.for("react.context"),
    $y = Symbol.for("react.forward_ref"),
    By = Symbol.for("react.suspense"),
    Uy = Symbol.for("react.memo"),
    Vy = Symbol.for("react.lazy"),
    wd = Symbol.iterator;

function Hy(e) {
    return e === null || typeof e != "object" ? null : (e = wd && e[wd] || e["@@iterator"], typeof e == "function" ? e : null)
}
var Dp = {
        isMounted: function() {
            return !1
        },
        enqueueForceUpdate: function() {},
        enqueueReplaceState: function() {},
        enqueueSetState: function() {}
    },
    Ip = Object.assign,
    _p = {};

function fo(e, t, n) {
    this.props = e, this.context = t, this.refs = _p, this.updater = n || Dp
}
fo.prototype.isReactComponent = {};
fo.prototype.setState = function(e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState")
};
fo.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
};

function Lp() {}
Lp.prototype = fo.prototype;

function Qu(e, t, n) {
    this.props = e, this.context = t, this.refs = _p, this.updater = n || Dp
}
var Ku = Qu.prototype = new Lp;
Ku.constructor = Qu;
Ip(Ku, fo.prototype);
Ku.isPureReactComponent = !0;
var Sd = Array.isArray,
    Fp = Object.prototype.hasOwnProperty,
    Gu = {
        current: null
    },
    zp = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };

function $p(e, t, n) {
    var r, o = {},
        s = null,
        i = null;
    if (t != null)
        for (r in t.ref !== void 0 && (i = t.ref), t.key !== void 0 && (s = "" + t.key), t) Fp.call(t, r) && !zp.hasOwnProperty(r) && (o[r] = t[r]);
    var a = arguments.length - 2;
    if (a === 1) o.children = n;
    else if (1 < a) {
        for (var l = Array(a), u = 0; u < a; u++) l[u] = arguments[u + 2];
        o.children = l
    }
    if (e && e.defaultProps)
        for (r in a = e.defaultProps, a) o[r] === void 0 && (o[r] = a[r]);
    return {
        $$typeof: gs,
        type: e,
        key: s,
        ref: i,
        props: o,
        _owner: Gu.current
    }
}

function Wy(e, t) {
    return {
        $$typeof: gs,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
    }
}

function Yu(e) {
    return typeof e == "object" && e !== null && e.$$typeof === gs
}

function Qy(e) {
    var t = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function(n) {
        return t[n]
    })
}
var Cd = /\/+/g;

function Ya(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? Qy("" + e.key) : t.toString(36)
}

function oi(e, t, n, r, o) {
    var s = typeof e;
    (s === "undefined" || s === "boolean") && (e = null);
    var i = !1;
    if (e === null) i = !0;
    else switch (s) {
        case "string":
        case "number":
            i = !0;
            break;
        case "object":
            switch (e.$$typeof) {
                case gs:
                case Dy:
                    i = !0
            }
    }
    if (i) return i = e, o = o(i), e = r === "" ? "." + Ya(i, 0) : r, Sd(o) ? (n = "", e != null && (n = e.replace(Cd, "$&/") + "/"), oi(o, t, n, "", function(u) {
        return u
    })) : o != null && (Yu(o) && (o = Wy(o, n + (!o.key || i && i.key === o.key ? "" : ("" + o.key).replace(Cd, "$&/") + "/") + e)), t.push(o)), 1;
    if (i = 0, r = r === "" ? "." : r + ":", Sd(e))
        for (var a = 0; a < e.length; a++) {
            s = e[a];
            var l = r + Ya(s, a);
            i += oi(s, t, n, l, o)
        } else if (l = Hy(e), typeof l == "function")
            for (e = l.call(e), a = 0; !(s = e.next()).done;) s = s.value, l = r + Ya(s, a++), i += oi(s, t, n, l, o);
        else if (s === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return i
}

function js(e, t, n) {
    if (e == null) return e;
    var r = [],
        o = 0;
    return oi(e, r, "", "", function(s) {
        return t.call(n, s, o++)
    }), r
}

function Ky(e) {
    if (e._status === -1) {
        var t = e._result;
        t = t(), t.then(function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 1, e._result = n)
        }, function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 2, e._result = n)
        }), e._status === -1 && (e._status = 0, e._result = t)
    }
    if (e._status === 1) return e._result.default;
    throw e._result
}
var Fe = {
        current: null
    },
    si = {
        transition: null
    },
    Gy = {
        ReactCurrentDispatcher: Fe,
        ReactCurrentBatchConfig: si,
        ReactCurrentOwner: Gu
    };

function Bp() {
    throw Error("act(...) is not supported in production builds of React.")
}
G.Children = {
    map: js,
    forEach: function(e, t, n) {
        js(e, function() {
            t.apply(this, arguments)
        }, n)
    },
    count: function(e) {
        var t = 0;
        return js(e, function() {
            t++
        }), t
    },
    toArray: function(e) {
        return js(e, function(t) {
            return t
        }) || []
    },
    only: function(e) {
        if (!Yu(e)) throw Error("React.Children.only expected to receive a single React element child.");
        return e
    }
};
G.Component = fo;
G.Fragment = Iy;
G.Profiler = Ly;
G.PureComponent = Qu;
G.StrictMode = _y;
G.Suspense = By;
G.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Gy;
G.act = Bp;
G.cloneElement = function(e, t, n) {
    if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = Ip({}, e.props),
        o = e.key,
        s = e.ref,
        i = e._owner;
    if (t != null) {
        if (t.ref !== void 0 && (s = t.ref, i = Gu.current), t.key !== void 0 && (o = "" + t.key), e.type && e.type.defaultProps) var a = e.type.defaultProps;
        for (l in t) Fp.call(t, l) && !zp.hasOwnProperty(l) && (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l])
    }
    var l = arguments.length - 2;
    if (l === 1) r.children = n;
    else if (1 < l) {
        a = Array(l);
        for (var u = 0; u < l; u++) a[u] = arguments[u + 2];
        r.children = a
    }
    return {
        $$typeof: gs,
        type: e.type,
        key: o,
        ref: s,
        props: r,
        _owner: i
    }
};
G.createContext = function(e) {
    return e = {
        $$typeof: zy,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    }, e.Provider = {
        $$typeof: Fy,
        _context: e
    }, e.Consumer = e
};
G.createElement = $p;
G.createFactory = function(e) {
    var t = $p.bind(null, e);
    return t.type = e, t
};
G.createRef = function() {
    return {
        current: null
    }
};
G.forwardRef = function(e) {
    return {
        $$typeof: $y,
        render: e
    }
};
G.isValidElement = Yu;
G.lazy = function(e) {
    return {
        $$typeof: Vy,
        _payload: {
            _status: -1,
            _result: e
        },
        _init: Ky
    }
};
G.memo = function(e, t) {
    return {
        $$typeof: Uy,
        type: e,
        compare: t === void 0 ? null : t
    }
};
G.startTransition = function(e) {
    var t = si.transition;
    si.transition = {};
    try {
        e()
    } finally {
        si.transition = t
    }
};
G.unstable_act = Bp;
G.useCallback = function(e, t) {
    return Fe.current.useCallback(e, t)
};
G.useContext = function(e) {
    return Fe.current.useContext(e)
};
G.useDebugValue = function() {};
G.useDeferredValue = function(e) {
    return Fe.current.useDeferredValue(e)
};
G.useEffect = function(e, t) {
    return Fe.current.useEffect(e, t)
};
G.useId = function() {
    return Fe.current.useId()
};
G.useImperativeHandle = function(e, t, n) {
    return Fe.current.useImperativeHandle(e, t, n)
};
G.useInsertionEffect = function(e, t) {
    return Fe.current.useInsertionEffect(e, t)
};
G.useLayoutEffect = function(e, t) {
    return Fe.current.useLayoutEffect(e, t)
};
G.useMemo = function(e, t) {
    return Fe.current.useMemo(e, t)
};
G.useReducer = function(e, t, n) {
    return Fe.current.useReducer(e, t, n)
};
G.useRef = function(e) {
    return Fe.current.useRef(e)
};
G.useState = function(e) {
    return Fe.current.useState(e)
};
G.useSyncExternalStore = function(e, t, n) {
    return Fe.current.useSyncExternalStore(e, t, n)
};
G.useTransition = function() {
    return Fe.current.useTransition()
};
G.version = "18.3.1";
Mp.exports = G;
var y = Mp.exports;
const R = jp(y),
    qu = My({
        __proto__: null,
        default: R
    }, [y]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Yy = y,
    qy = Symbol.for("react.element"),
    Xy = Symbol.for("react.fragment"),
    Zy = Object.prototype.hasOwnProperty,
    Jy = Yy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    e0 = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };

function Up(e, t, n) {
    var r, o = {},
        s = null,
        i = null;
    n !== void 0 && (s = "" + n), t.key !== void 0 && (s = "" + t.key), t.ref !== void 0 && (i = t.ref);
    for (r in t) Zy.call(t, r) && !e0.hasOwnProperty(r) && (o[r] = t[r]);
    if (e && e.defaultProps)
        for (r in t = e.defaultProps, t) o[r] === void 0 && (o[r] = t[r]);
    return {
        $$typeof: qy,
        type: e,
        key: s,
        ref: i,
        props: o,
        _owner: Jy.current
    }
}
sa.Fragment = Xy;
sa.jsx = Up;
sa.jsxs = Up;
Op.exports = sa;
var c = Op.exports,
    Vp = {
        exports: {}
    },
    et = {},
    Hp = {
        exports: {}
    },
    Wp = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
    function t(P, A) {
        var I = P.length;
        P.push(A);
        e: for (; 0 < I;) {
            var H = I - 1 >>> 1,
                F = P[H];
            if (0 < o(F, A)) P[H] = A, P[I] = F, I = H;
            else break e
        }
    }

    function n(P) {
        return P.length === 0 ? null : P[0]
    }

    function r(P) {
        if (P.length === 0) return null;
        var A = P[0],
            I = P.pop();
        if (I !== A) {
            P[0] = I;
            e: for (var H = 0, F = P.length, K = F >>> 1; H < K;) {
                var q = 2 * (H + 1) - 1,
                    ge = P[q],
                    Pe = q + 1,
                    J = P[Pe];
                if (0 > o(ge, I)) Pe < F && 0 > o(J, ge) ? (P[H] = J, P[Pe] = I, H = Pe) : (P[H] = ge, P[q] = I, H = q);
                else if (Pe < F && 0 > o(J, I)) P[H] = J, P[Pe] = I, H = Pe;
                else break e
            }
        }
        return A
    }

    function o(P, A) {
        var I = P.sortIndex - A.sortIndex;
        return I !== 0 ? I : P.id - A.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var s = performance;
        e.unstable_now = function() {
            return s.now()
        }
    } else {
        var i = Date,
            a = i.now();
        e.unstable_now = function() {
            return i.now() - a
        }
    }
    var l = [],
        u = [],
        d = 1,
        f = null,
        v = 3,
        p = !1,
        S = !1,
        m = !1,
        w = typeof setTimeout == "function" ? setTimeout : null,
        g = typeof clearTimeout == "function" ? clearTimeout : null,
        h = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);

    function x(P) {
        for (var A = n(u); A !== null;) {
            if (A.callback === null) r(u);
            else if (A.startTime <= P) r(u), A.sortIndex = A.expirationTime, t(l, A);
            else break;
            A = n(u)
        }
    }

    function C(P) {
        if (m = !1, x(P), !S)
            if (n(l) !== null) S = !0, $(E);
            else {
                var A = n(u);
                A !== null && V(C, A.startTime - P)
            }
    }

    function E(P, A) {
        S = !1, m && (m = !1, g(T), T = -1), p = !0;
        var I = v;
        try {
            for (x(A), f = n(l); f !== null && (!(f.expirationTime > A) || P && !z());) {
                var H = f.callback;
                if (typeof H == "function") {
                    f.callback = null, v = f.priorityLevel;
                    var F = H(f.expirationTime <= A);
                    A = e.unstable_now(), typeof F == "function" ? f.callback = F : f === n(l) && r(l), x(A)
                } else r(l);
                f = n(l)
            }
            if (f !== null) var K = !0;
            else {
                var q = n(u);
                q !== null && V(C, q.startTime - A), K = !1
            }
            return K
        } finally {
            f = null, v = I, p = !1
        }
    }
    var b = !1,
        k = null,
        T = -1,
        O = 5,
        M = -1;

    function z() {
        return !(e.unstable_now() - M < O)
    }

    function L() {
        if (k !== null) {
            var P = e.unstable_now();
            M = P;
            var A = !0;
            try {
                A = k(!0, P)
            } finally {
                A ? Q() : (b = !1, k = null)
            }
        } else b = !1
    }
    var Q;
    if (typeof h == "function") Q = function() {
        h(L)
    };
    else if (typeof MessageChannel < "u") {
        var D = new MessageChannel,
            Y = D.port2;
        D.port1.onmessage = L, Q = function() {
            Y.postMessage(null)
        }
    } else Q = function() {
        w(L, 0)
    };

    function $(P) {
        k = P, b || (b = !0, Q())
    }

    function V(P, A) {
        T = w(function() {
            P(e.unstable_now())
        }, A)
    }
    e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(P) {
        P.callback = null
    }, e.unstable_continueExecution = function() {
        S || p || (S = !0, $(E))
    }, e.unstable_forceFrameRate = function(P) {
        0 > P || 125 < P ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : O = 0 < P ? Math.floor(1e3 / P) : 5
    }, e.unstable_getCurrentPriorityLevel = function() {
        return v
    }, e.unstable_getFirstCallbackNode = function() {
        return n(l)
    }, e.unstable_next = function(P) {
        switch (v) {
            case 1:
            case 2:
            case 3:
                var A = 3;
                break;
            default:
                A = v
        }
        var I = v;
        v = A;
        try {
            return P()
        } finally {
            v = I
        }
    }, e.unstable_pauseExecution = function() {}, e.unstable_requestPaint = function() {}, e.unstable_runWithPriority = function(P, A) {
        switch (P) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                P = 3
        }
        var I = v;
        v = P;
        try {
            return A()
        } finally {
            v = I
        }
    }, e.unstable_scheduleCallback = function(P, A, I) {
        var H = e.unstable_now();
        switch (typeof I == "object" && I !== null ? (I = I.delay, I = typeof I == "number" && 0 < I ? H + I : H) : I = H, P) {
            case 1:
                var F = -1;
                break;
            case 2:
                F = 250;
                break;
            case 5:
                F = 1073741823;
                break;
            case 4:
                F = 1e4;
                break;
            default:
                F = 5e3
        }
        return F = I + F, P = {
            id: d++,
            callback: A,
            priorityLevel: P,
            startTime: I,
            expirationTime: F,
            sortIndex: -1
        }, I > H ? (P.sortIndex = I, t(u, P), n(l) === null && P === n(u) && (m ? (g(T), T = -1) : m = !0, V(C, I - H))) : (P.sortIndex = F, t(l, P), S || p || (S = !0, $(E))), P
    }, e.unstable_shouldYield = z, e.unstable_wrapCallback = function(P) {
        var A = v;
        return function() {
            var I = v;
            v = A;
            try {
                return P.apply(this, arguments)
            } finally {
                v = I
            }
        }
    }
})(Wp);
Hp.exports = Wp;
var t0 = Hp.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var n0 = y,
    Je = t0;

function j(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var Qp = new Set,
    Ko = {};

function fr(e, t) {
    no(e, t), no(e + "Capture", t)
}

function no(e, t) {
    for (Ko[e] = t, e = 0; e < t.length; e++) Qp.add(t[e])
}
var Xt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
    Il = Object.prototype.hasOwnProperty,
    r0 = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    Ed = {},
    bd = {};

function o0(e) {
    return Il.call(bd, e) ? !0 : Il.call(Ed, e) ? !1 : r0.test(e) ? bd[e] = !0 : (Ed[e] = !0, !1)
}

function s0(e, t, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
        case "function":
        case "symbol":
            return !0;
        case "boolean":
            return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
        default:
            return !1
    }
}

function i0(e, t, n, r) {
    if (t === null || typeof t > "u" || s0(e, t, n, r)) return !0;
    if (r) return !1;
    if (n !== null) switch (n.type) {
        case 3:
            return !t;
        case 4:
            return t === !1;
        case 5:
            return isNaN(t);
        case 6:
            return isNaN(t) || 1 > t
    }
    return !1
}

function ze(e, t, n, r, o, s, i) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = o, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = i
}
var ke = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    ke[e] = new ze(e, 0, !1, e, null, !1, !1)
});
[
    ["acceptCharset", "accept-charset"],
    ["className", "class"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"]
].forEach(function(e) {
    var t = e[0];
    ke[t] = new ze(t, 1, !1, e[1], null, !1, !1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    ke[e] = new ze(e, 2, !1, e.toLowerCase(), null, !1, !1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    ke[e] = new ze(e, 2, !1, e, null, !1, !1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    ke[e] = new ze(e, 3, !1, e.toLowerCase(), null, !1, !1)
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
    ke[e] = new ze(e, 3, !0, e, null, !1, !1)
});
["capture", "download"].forEach(function(e) {
    ke[e] = new ze(e, 4, !1, e, null, !1, !1)
});
["cols", "rows", "size", "span"].forEach(function(e) {
    ke[e] = new ze(e, 6, !1, e, null, !1, !1)
});
["rowSpan", "start"].forEach(function(e) {
    ke[e] = new ze(e, 5, !1, e.toLowerCase(), null, !1, !1)
});
var Xu = /[\-:]([a-z])/g;

function Zu(e) {
    return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(Xu, Zu);
    ke[t] = new ze(t, 1, !1, e, null, !1, !1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(Xu, Zu);
    ke[t] = new ze(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(Xu, Zu);
    ke[t] = new ze(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1)
});
["tabIndex", "crossOrigin"].forEach(function(e) {
    ke[e] = new ze(e, 1, !1, e.toLowerCase(), null, !1, !1)
});
ke.xlinkHref = new ze("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
    ke[e] = new ze(e, 1, !1, e.toLowerCase(), null, !0, !0)
});

function Ju(e, t, n, r) {
    var o = ke.hasOwnProperty(t) ? ke[t] : null;
    (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (i0(t, n, o, r) && (n = null), r || o === null ? o0(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName, r = o.attributeNamespace, n === null ? e.removeAttribute(t) : (o = o.type, n = o === 3 || o === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var rn = n0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    Os = Symbol.for("react.element"),
    Nr = Symbol.for("react.portal"),
    Pr = Symbol.for("react.fragment"),
    ec = Symbol.for("react.strict_mode"),
    _l = Symbol.for("react.profiler"),
    Kp = Symbol.for("react.provider"),
    Gp = Symbol.for("react.context"),
    tc = Symbol.for("react.forward_ref"),
    Ll = Symbol.for("react.suspense"),
    Fl = Symbol.for("react.suspense_list"),
    nc = Symbol.for("react.memo"),
    vn = Symbol.for("react.lazy"),
    Yp = Symbol.for("react.offscreen"),
    kd = Symbol.iterator;

function wo(e) {
    return e === null || typeof e != "object" ? null : (e = kd && e[kd] || e["@@iterator"], typeof e == "function" ? e : null)
}
var pe = Object.assign,
    qa;

function Ro(e) {
    if (qa === void 0) try {
        throw Error()
    } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        qa = t && t[1] || ""
    }
    return `
` + qa + e
}
var Xa = !1;

function Za(e, t) {
    if (!e || Xa) return "";
    Xa = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (t = function() {
                    throw Error()
                }, Object.defineProperty(t.prototype, "props", {
                    set: function() {
                        throw Error()
                    }
                }), typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(t, [])
                } catch (u) {
                    var r = u
                }
                Reflect.construct(e, [], t)
            } else {
                try {
                    t.call()
                } catch (u) {
                    r = u
                }
                e.call(t.prototype)
            }
        else {
            try {
                throw Error()
            } catch (u) {
                r = u
            }
            e()
        }
    } catch (u) {
        if (u && r && typeof u.stack == "string") {
            for (var o = u.stack.split(`
`), s = r.stack.split(`
`), i = o.length - 1, a = s.length - 1; 1 <= i && 0 <= a && o[i] !== s[a];) a--;
            for (; 1 <= i && 0 <= a; i--, a--)
                if (o[i] !== s[a]) {
                    if (i !== 1 || a !== 1)
                        do
                            if (i--, a--, 0 > a || o[i] !== s[a]) {
                                var l = `
` + o[i].replace(" at new ", " at ");
                                return e.displayName && l.includes("<anonymous>") && (l = l.replace("<anonymous>", e.displayName)), l
                            }
                    while (1 <= i && 0 <= a);
                    break
                }
        }
    } finally {
        Xa = !1, Error.prepareStackTrace = n
    }
    return (e = e ? e.displayName || e.name : "") ? Ro(e) : ""
}

function a0(e) {
    switch (e.tag) {
        case 5:
            return Ro(e.type);
        case 16:
            return Ro("Lazy");
        case 13:
            return Ro("Suspense");
        case 19:
            return Ro("SuspenseList");
        case 0:
        case 2:
        case 15:
            return e = Za(e.type, !1), e;
        case 11:
            return e = Za(e.type.render, !1), e;
        case 1:
            return e = Za(e.type, !0), e;
        default:
            return ""
    }
}

function zl(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
        case Pr:
            return "Fragment";
        case Nr:
            return "Portal";
        case _l:
            return "Profiler";
        case ec:
            return "StrictMode";
        case Ll:
            return "Suspense";
        case Fl:
            return "SuspenseList"
    }
    if (typeof e == "object") switch (e.$$typeof) {
        case Gp:
            return (e.displayName || "Context") + ".Consumer";
        case Kp:
            return (e._context.displayName || "Context") + ".Provider";
        case tc:
            var t = e.render;
            return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case nc:
            return t = e.displayName || null, t !== null ? t : zl(e.type) || "Memo";
        case vn:
            t = e._payload, e = e._init;
            try {
                return zl(e(t))
            } catch {}
    }
    return null
}

function l0(e) {
    var t = e.type;
    switch (e.tag) {
        case 24:
            return "Cache";
        case 9:
            return (t.displayName || "Context") + ".Consumer";
        case 10:
            return (t._context.displayName || "Context") + ".Provider";
        case 18:
            return "DehydratedFragment";
        case 11:
            return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
        case 7:
            return "Fragment";
        case 5:
            return t;
        case 4:
            return "Portal";
        case 3:
            return "Root";
        case 6:
            return "Text";
        case 16:
            return zl(t);
        case 8:
            return t === ec ? "StrictMode" : "Mode";
        case 22:
            return "Offscreen";
        case 12:
            return "Profiler";
        case 21:
            return "Scope";
        case 13:
            return "Suspense";
        case 19:
            return "SuspenseList";
        case 25:
            return "TracingMarker";
        case 1:
        case 0:
        case 17:
        case 2:
        case 14:
        case 15:
            if (typeof t == "function") return t.displayName || t.name || null;
            if (typeof t == "string") return t
    }
    return null
}

function _n(e) {
    switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
            return e;
        case "object":
            return e;
        default:
            return ""
    }
}

function qp(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}

function u0(e) {
    var t = qp(e) ? "checked" : "value",
        n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
        r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var o = n.get,
            s = n.set;
        return Object.defineProperty(e, t, {
            configurable: !0,
            get: function() {
                return o.call(this)
            },
            set: function(i) {
                r = "" + i, s.call(this, i)
            }
        }), Object.defineProperty(e, t, {
            enumerable: n.enumerable
        }), {
            getValue: function() {
                return r
            },
            setValue: function(i) {
                r = "" + i
            },
            stopTracking: function() {
                e._valueTracker = null, delete e[t]
            }
        }
    }
}

function Ms(e) {
    e._valueTracker || (e._valueTracker = u0(e))
}

function Xp(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
        r = "";
    return e && (r = qp(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1
}

function bi(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}

function $l(e, t) {
    var n = t.checked;
    return pe({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ? ? e._wrapperState.initialChecked
    })
}

function Nd(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue,
        r = t.checked != null ? t.checked : t.defaultChecked;
    n = _n(t.value != null ? t.value : n), e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    }
}

function Zp(e, t) {
    t = t.checked, t != null && Ju(e, "checked", t, !1)
}

function Bl(e, t) {
    Zp(e, t);
    var n = _n(t.value),
        r = t.type;
    if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return
    }
    t.hasOwnProperty("value") ? Ul(e, t.type, n) : t.hasOwnProperty("defaultValue") && Ul(e, t.type, _n(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}

function Pd(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
        t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n)
}

function Ul(e, t, n) {
    (t !== "number" || bi(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var jo = Array.isArray;

function Fr(e, t, n, r) {
    if (e = e.options, t) {
        t = {};
        for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
        for (n = 0; n < e.length; n++) o = t.hasOwnProperty("$" + e[n].value), e[n].selected !== o && (e[n].selected = o), o && r && (e[n].defaultSelected = !0)
    } else {
        for (n = "" + _n(n), t = null, o = 0; o < e.length; o++) {
            if (e[o].value === n) {
                e[o].selected = !0, r && (e[o].defaultSelected = !0);
                return
            }
            t !== null || e[o].disabled || (t = e[o])
        }
        t !== null && (t.selected = !0)
    }
}

function Vl(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(j(91));
    return pe({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
    })
}

function Ad(e, t) {
    var n = t.value;
    if (n == null) {
        if (n = t.children, t = t.defaultValue, n != null) {
            if (t != null) throw Error(j(92));
            if (jo(n)) {
                if (1 < n.length) throw Error(j(93));
                n = n[0]
            }
            t = n
        }
        t == null && (t = ""), n = t
    }
    e._wrapperState = {
        initialValue: _n(n)
    }
}

function Jp(e, t) {
    var n = _n(t.value),
        r = _n(t.defaultValue);
    n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r)
}

function Td(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}

function eh(e) {
    switch (e) {
        case "svg":
            return "http://www.w3.org/2000/svg";
        case "math":
            return "http://www.w3.org/1998/Math/MathML";
        default:
            return "http://www.w3.org/1999/xhtml"
    }
}

function Hl(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? eh(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var Ds, th = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
        MSApp.execUnsafeLocalFunction(function() {
            return e(t, n, r, o)
        })
    } : e
}(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
        for (Ds = Ds || document.createElement("div"), Ds.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Ds.firstChild; e.firstChild;) e.removeChild(e.firstChild);
        for (; t.firstChild;) e.appendChild(t.firstChild)
    }
});

function Go(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return
        }
    }
    e.textContent = t
}
var Io = {
        animationIterationCount: !0,
        aspectRatio: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridArea: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0
    },
    c0 = ["Webkit", "ms", "Moz", "O"];
Object.keys(Io).forEach(function(e) {
    c0.forEach(function(t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1), Io[t] = Io[e]
    })
});

function nh(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Io.hasOwnProperty(e) && Io[e] ? ("" + t).trim() : t + "px"
}

function rh(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0,
                o = nh(n, t[n], r);
            n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : e[n] = o
        }
}
var d0 = pe({
    menuitem: !0
}, {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
});

function Wl(e, t) {
    if (t) {
        if (d0[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(j(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null) throw Error(j(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(j(61))
        }
        if (t.style != null && typeof t.style != "object") throw Error(j(62))
    }
}

function Ql(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
            return !1;
        default:
            return !0
    }
}
var Kl = null;

function rc(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e
}
var Gl = null,
    zr = null,
    $r = null;

function Rd(e) {
    if (e = ws(e)) {
        if (typeof Gl != "function") throw Error(j(280));
        var t = e.stateNode;
        t && (t = ca(t), Gl(e.stateNode, e.type, t))
    }
}

function oh(e) {
    zr ? $r ? $r.push(e) : $r = [e] : zr = e
}

function sh() {
    if (zr) {
        var e = zr,
            t = $r;
        if ($r = zr = null, Rd(e), t)
            for (e = 0; e < t.length; e++) Rd(t[e])
    }
}

function ih(e, t) {
    return e(t)
}

function ah() {}
var Ja = !1;

function lh(e, t, n) {
    if (Ja) return e(t, n);
    Ja = !0;
    try {
        return ih(e, t, n)
    } finally {
        Ja = !1, (zr !== null || $r !== null) && (ah(), sh())
    }
}

function Yo(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = ca(n);
    if (r === null) return null;
    n = r[t];
    e: switch (t) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
            (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
            break e;
        default:
            e = !1
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(j(231, t, typeof n));
    return n
}
var Yl = !1;
if (Xt) try {
    var So = {};
    Object.defineProperty(So, "passive", {
        get: function() {
            Yl = !0
        }
    }), window.addEventListener("test", So, So), window.removeEventListener("test", So, So)
} catch {
    Yl = !1
}

function f0(e, t, n, r, o, s, i, a, l) {
    var u = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, u)
    } catch (d) {
        this.onError(d)
    }
}
var _o = !1,
    ki = null,
    Ni = !1,
    ql = null,
    p0 = {
        onError: function(e) {
            _o = !0, ki = e
        }
    };

function h0(e, t, n, r, o, s, i, a, l) {
    _o = !1, ki = null, f0.apply(p0, arguments)
}

function m0(e, t, n, r, o, s, i, a, l) {
    if (h0.apply(this, arguments), _o) {
        if (_o) {
            var u = ki;
            _o = !1, ki = null
        } else throw Error(j(198));
        Ni || (Ni = !0, ql = u)
    }
}

function pr(e) {
    var t = e,
        n = e;
    if (e.alternate)
        for (; t.return;) t = t.return;
    else {
        e = t;
        do t = e, t.flags & 4098 && (n = t.return), e = t.return; while (e)
    }
    return t.tag === 3 ? n : null
}

function uh(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated
    }
    return null
}

function jd(e) {
    if (pr(e) !== e) throw Error(j(188))
}

function v0(e) {
    var t = e.alternate;
    if (!t) {
        if (t = pr(e), t === null) throw Error(j(188));
        return t !== e ? null : e
    }
    for (var n = e, r = t;;) {
        var o = n.return;
        if (o === null) break;
        var s = o.alternate;
        if (s === null) {
            if (r = o.return, r !== null) {
                n = r;
                continue
            }
            break
        }
        if (o.child === s.child) {
            for (s = o.child; s;) {
                if (s === n) return jd(o), e;
                if (s === r) return jd(o), t;
                s = s.sibling
            }
            throw Error(j(188))
        }
        if (n.return !== r.return) n = o, r = s;
        else {
            for (var i = !1, a = o.child; a;) {
                if (a === n) {
                    i = !0, n = o, r = s;
                    break
                }
                if (a === r) {
                    i = !0, r = o, n = s;
                    break
                }
                a = a.sibling
            }
            if (!i) {
                for (a = s.child; a;) {
                    if (a === n) {
                        i = !0, n = s, r = o;
                        break
                    }
                    if (a === r) {
                        i = !0, r = s, n = o;
                        break
                    }
                    a = a.sibling
                }
                if (!i) throw Error(j(189))
            }
        }
        if (n.alternate !== r) throw Error(j(190))
    }
    if (n.tag !== 3) throw Error(j(188));
    return n.stateNode.current === n ? e : t
}

function ch(e) {
    return e = v0(e), e !== null ? dh(e) : null
}

function dh(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null;) {
        var t = dh(e);
        if (t !== null) return t;
        e = e.sibling
    }
    return null
}
var fh = Je.unstable_scheduleCallback,
    Od = Je.unstable_cancelCallback,
    g0 = Je.unstable_shouldYield,
    y0 = Je.unstable_requestPaint,
    ve = Je.unstable_now,
    x0 = Je.unstable_getCurrentPriorityLevel,
    oc = Je.unstable_ImmediatePriority,
    ph = Je.unstable_UserBlockingPriority,
    Pi = Je.unstable_NormalPriority,
    w0 = Je.unstable_LowPriority,
    hh = Je.unstable_IdlePriority,
    ia = null,
    _t = null;

function S0(e) {
    if (_t && typeof _t.onCommitFiberRoot == "function") try {
        _t.onCommitFiberRoot(ia, e, void 0, (e.current.flags & 128) === 128)
    } catch {}
}
var St = Math.clz32 ? Math.clz32 : b0,
    C0 = Math.log,
    E0 = Math.LN2;

function b0(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (C0(e) / E0 | 0) | 0
}
var Is = 64,
    _s = 4194304;

function Oo(e) {
    switch (e & -e) {
        case 1:
            return 1;
        case 2:
            return 2;
        case 4:
            return 4;
        case 8:
            return 8;
        case 16:
            return 16;
        case 32:
            return 32;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return e & 4194240;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return e & 130023424;
        case 134217728:
            return 134217728;
        case 268435456:
            return 268435456;
        case 536870912:
            return 536870912;
        case 1073741824:
            return 1073741824;
        default:
            return e
    }
}

function Ai(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
        o = e.suspendedLanes,
        s = e.pingedLanes,
        i = n & 268435455;
    if (i !== 0) {
        var a = i & ~o;
        a !== 0 ? r = Oo(a) : (s &= i, s !== 0 && (r = Oo(s)))
    } else i = n & ~o, i !== 0 ? r = Oo(i) : s !== 0 && (r = Oo(s));
    if (r === 0) return 0;
    if (t !== 0 && t !== r && !(t & o) && (o = r & -r, s = t & -t, o >= s || o === 16 && (s & 4194240) !== 0)) return t;
    if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0)
        for (e = e.entanglements, t &= r; 0 < t;) n = 31 - St(t), o = 1 << n, r |= e[n], t &= ~o;
    return r
}

function k0(e, t) {
    switch (e) {
        case 1:
        case 2:
        case 4:
            return t + 250;
        case 8:
        case 16:
        case 32:
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return t + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return -1;
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
            return -1;
        default:
            return -1
    }
}

function N0(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, s = e.pendingLanes; 0 < s;) {
        var i = 31 - St(s),
            a = 1 << i,
            l = o[i];
        l === -1 ? (!(a & n) || a & r) && (o[i] = k0(a, t)) : l <= t && (e.expiredLanes |= a), s &= ~a
    }
}

function Xl(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}

function mh() {
    var e = Is;
    return Is <<= 1, !(Is & 4194240) && (Is = 64), e
}

function el(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t
}

function ys(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - St(t), e[t] = n
}

function P0(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n;) {
        var o = 31 - St(n),
            s = 1 << o;
        t[o] = 0, r[o] = -1, e[o] = -1, n &= ~s
    }
}

function sc(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n;) {
        var r = 31 - St(n),
            o = 1 << r;
        o & t | e[r] & t && (e[r] |= t), n &= ~o
    }
}
var ee = 0;

function vh(e) {
    return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var gh, ic, yh, xh, wh, Zl = !1,
    Ls = [],
    An = null,
    Tn = null,
    Rn = null,
    qo = new Map,
    Xo = new Map,
    yn = [],
    A0 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");

function Md(e, t) {
    switch (e) {
        case "focusin":
        case "focusout":
            An = null;
            break;
        case "dragenter":
        case "dragleave":
            Tn = null;
            break;
        case "mouseover":
        case "mouseout":
            Rn = null;
            break;
        case "pointerover":
        case "pointerout":
            qo.delete(t.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            Xo.delete(t.pointerId)
    }
}

function Co(e, t, n, r, o, s) {
    return e === null || e.nativeEvent !== s ? (e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: s,
        targetContainers: [o]
    }, t !== null && (t = ws(t), t !== null && ic(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e)
}

function T0(e, t, n, r, o) {
    switch (t) {
        case "focusin":
            return An = Co(An, e, t, n, r, o), !0;
        case "dragenter":
            return Tn = Co(Tn, e, t, n, r, o), !0;
        case "mouseover":
            return Rn = Co(Rn, e, t, n, r, o), !0;
        case "pointerover":
            var s = o.pointerId;
            return qo.set(s, Co(qo.get(s) || null, e, t, n, r, o)), !0;
        case "gotpointercapture":
            return s = o.pointerId, Xo.set(s, Co(Xo.get(s) || null, e, t, n, r, o)), !0
    }
    return !1
}

function Sh(e) {
    var t = Gn(e.target);
    if (t !== null) {
        var n = pr(t);
        if (n !== null) {
            if (t = n.tag, t === 13) {
                if (t = uh(n), t !== null) {
                    e.blockedOn = t, wh(e.priority, function() {
                        yh(n)
                    });
                    return
                }
            } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return
            }
        }
    }
    e.blockedOn = null
}

function ii(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length;) {
        var n = Jl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type, n);
            Kl = r, n.target.dispatchEvent(r), Kl = null
        } else return t = ws(n), t !== null && ic(t), e.blockedOn = n, !1;
        t.shift()
    }
    return !0
}

function Dd(e, t, n) {
    ii(e) && n.delete(t)
}

function R0() {
    Zl = !1, An !== null && ii(An) && (An = null), Tn !== null && ii(Tn) && (Tn = null), Rn !== null && ii(Rn) && (Rn = null), qo.forEach(Dd), Xo.forEach(Dd)
}

function Eo(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Zl || (Zl = !0, Je.unstable_scheduleCallback(Je.unstable_NormalPriority, R0)))
}

function Zo(e) {
    function t(o) {
        return Eo(o, e)
    }
    if (0 < Ls.length) {
        Eo(Ls[0], e);
        for (var n = 1; n < Ls.length; n++) {
            var r = Ls[n];
            r.blockedOn === e && (r.blockedOn = null)
        }
    }
    for (An !== null && Eo(An, e), Tn !== null && Eo(Tn, e), Rn !== null && Eo(Rn, e), qo.forEach(t), Xo.forEach(t), n = 0; n < yn.length; n++) r = yn[n], r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < yn.length && (n = yn[0], n.blockedOn === null);) Sh(n), n.blockedOn === null && yn.shift()
}
var Br = rn.ReactCurrentBatchConfig,
    Ti = !0;

function j0(e, t, n, r) {
    var o = ee,
        s = Br.transition;
    Br.transition = null;
    try {
        ee = 1, ac(e, t, n, r)
    } finally {
        ee = o, Br.transition = s
    }
}

function O0(e, t, n, r) {
    var o = ee,
        s = Br.transition;
    Br.transition = null;
    try {
        ee = 4, ac(e, t, n, r)
    } finally {
        ee = o, Br.transition = s
    }
}

function ac(e, t, n, r) {
    if (Ti) {
        var o = Jl(e, t, n, r);
        if (o === null) cl(e, t, r, Ri, n), Md(e, r);
        else if (T0(o, e, t, n, r)) r.stopPropagation();
        else if (Md(e, r), t & 4 && -1 < A0.indexOf(e)) {
            for (; o !== null;) {
                var s = ws(o);
                if (s !== null && gh(s), s = Jl(e, t, n, r), s === null && cl(e, t, r, Ri, n), s === o) break;
                o = s
            }
            o !== null && r.stopPropagation()
        } else cl(e, t, r, null, n)
    }
}
var Ri = null;

function Jl(e, t, n, r) {
    if (Ri = null, e = rc(r), e = Gn(e), e !== null)
        if (t = pr(e), t === null) e = null;
        else if (n = t.tag, n === 13) {
        if (e = uh(t), e !== null) return e;
        e = null
    } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null
    } else t !== e && (e = null);
    return Ri = e, null
}

function Ch(e) {
    switch (e) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
            return 1;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
            return 4;
        case "message":
            switch (x0()) {
                case oc:
                    return 1;
                case ph:
                    return 4;
                case Pi:
                case w0:
                    return 16;
                case hh:
                    return 536870912;
                default:
                    return 16
            }
        default:
            return 16
    }
}
var kn = null,
    lc = null,
    ai = null;

function Eh() {
    if (ai) return ai;
    var e, t = lc,
        n = t.length,
        r, o = "value" in kn ? kn.value : kn.textContent,
        s = o.length;
    for (e = 0; e < n && t[e] === o[e]; e++);
    var i = n - e;
    for (r = 1; r <= i && t[n - r] === o[s - r]; r++);
    return ai = o.slice(e, 1 < r ? 1 - r : void 0)
}

function li(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0
}

function Fs() {
    return !0
}

function Id() {
    return !1
}

function tt(e) {
    function t(n, r, o, s, i) {
        this._reactName = n, this._targetInst = o, this.type = r, this.nativeEvent = s, this.target = i, this.currentTarget = null;
        for (var a in e) e.hasOwnProperty(a) && (n = e[a], this[a] = n ? n(s) : s[a]);
        return this.isDefaultPrevented = (s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1) ? Fs : Id, this.isPropagationStopped = Id, this
    }
    return pe(t.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Fs)
        },
        stopPropagation: function() {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Fs)
        },
        persist: function() {},
        isPersistent: Fs
    }), t
}
var po = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function(e) {
            return e.timeStamp || Date.now()
        },
        defaultPrevented: 0,
        isTrusted: 0
    },
    uc = tt(po),
    xs = pe({}, po, {
        view: 0,
        detail: 0
    }),
    M0 = tt(xs),
    tl, nl, bo, aa = pe({}, xs, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: cc,
        button: 0,
        buttons: 0,
        relatedTarget: function(e) {
            return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
        },
        movementX: function(e) {
            return "movementX" in e ? e.movementX : (e !== bo && (bo && e.type === "mousemove" ? (tl = e.screenX - bo.screenX, nl = e.screenY - bo.screenY) : nl = tl = 0, bo = e), tl)
        },
        movementY: function(e) {
            return "movementY" in e ? e.movementY : nl
        }
    }),
    _d = tt(aa),
    D0 = pe({}, aa, {
        dataTransfer: 0
    }),
    I0 = tt(D0),
    _0 = pe({}, xs, {
        relatedTarget: 0
    }),
    rl = tt(_0),
    L0 = pe({}, po, {
        animationName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }),
    F0 = tt(L0),
    z0 = pe({}, po, {
        clipboardData: function(e) {
            return "clipboardData" in e ? e.clipboardData : window.clipboardData
        }
    }),
    $0 = tt(z0),
    B0 = pe({}, po, {
        data: 0
    }),
    Ld = tt(B0),
    U0 = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified"
    },
    V0 = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta"
    },
    H0 = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
    };

function W0(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = H0[e]) ? !!t[e] : !1
}

function cc() {
    return W0
}
var Q0 = pe({}, xs, {
        key: function(e) {
            if (e.key) {
                var t = U0[e.key] || e.key;
                if (t !== "Unidentified") return t
            }
            return e.type === "keypress" ? (e = li(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? V0[e.keyCode] || "Unidentified" : ""
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: cc,
        charCode: function(e) {
            return e.type === "keypress" ? li(e) : 0
        },
        keyCode: function(e) {
            return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        },
        which: function(e) {
            return e.type === "keypress" ? li(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        }
    }),
    K0 = tt(Q0),
    G0 = pe({}, aa, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0
    }),
    Fd = tt(G0),
    Y0 = pe({}, xs, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: cc
    }),
    q0 = tt(Y0),
    X0 = pe({}, po, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }),
    Z0 = tt(X0),
    J0 = pe({}, aa, {
        deltaX: function(e) {
            return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        },
        deltaY: function(e) {
            return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
        },
        deltaZ: 0,
        deltaMode: 0
    }),
    ex = tt(J0),
    tx = [9, 13, 27, 32],
    dc = Xt && "CompositionEvent" in window,
    Lo = null;
Xt && "documentMode" in document && (Lo = document.documentMode);
var nx = Xt && "TextEvent" in window && !Lo,
    bh = Xt && (!dc || Lo && 8 < Lo && 11 >= Lo),
    zd = " ",
    $d = !1;

function kh(e, t) {
    switch (e) {
        case "keyup":
            return tx.indexOf(t.keyCode) !== -1;
        case "keydown":
            return t.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1
    }
}

function Nh(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null
}
var Ar = !1;

function rx(e, t) {
    switch (e) {
        case "compositionend":
            return Nh(t);
        case "keypress":
            return t.which !== 32 ? null : ($d = !0, zd);
        case "textInput":
            return e = t.data, e === zd && $d ? null : e;
        default:
            return null
    }
}

function ox(e, t) {
    if (Ar) return e === "compositionend" || !dc && kh(e, t) ? (e = Eh(), ai = lc = kn = null, Ar = !1, e) : null;
    switch (e) {
        case "paste":
            return null;
        case "keypress":
            if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                if (t.char && 1 < t.char.length) return t.char;
                if (t.which) return String.fromCharCode(t.which)
            }
            return null;
        case "compositionend":
            return bh && t.locale !== "ko" ? null : t.data;
        default:
            return null
    }
}
var sx = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
};

function Bd(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!sx[e.type] : t === "textarea"
}

function Ph(e, t, n, r) {
    oh(r), t = ji(t, "onChange"), 0 < t.length && (n = new uc("onChange", "change", null, n, r), e.push({
        event: n,
        listeners: t
    }))
}
var Fo = null,
    Jo = null;

function ix(e) {
    Fh(e, 0)
}

function la(e) {
    var t = jr(e);
    if (Xp(t)) return e
}

function ax(e, t) {
    if (e === "change") return t
}
var Ah = !1;
if (Xt) {
    var ol;
    if (Xt) {
        var sl = "oninput" in document;
        if (!sl) {
            var Ud = document.createElement("div");
            Ud.setAttribute("oninput", "return;"), sl = typeof Ud.oninput == "function"
        }
        ol = sl
    } else ol = !1;
    Ah = ol && (!document.documentMode || 9 < document.documentMode)
}

function Vd() {
    Fo && (Fo.detachEvent("onpropertychange", Th), Jo = Fo = null)
}

function Th(e) {
    if (e.propertyName === "value" && la(Jo)) {
        var t = [];
        Ph(t, Jo, e, rc(e)), lh(ix, t)
    }
}

function lx(e, t, n) {
    e === "focusin" ? (Vd(), Fo = t, Jo = n, Fo.attachEvent("onpropertychange", Th)) : e === "focusout" && Vd()
}

function ux(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return la(Jo)
}

function cx(e, t) {
    if (e === "click") return la(t)
}

function dx(e, t) {
    if (e === "input" || e === "change") return la(t)
}

function fx(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var Et = typeof Object.is == "function" ? Object.is : fx;

function es(e, t) {
    if (Et(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e),
        r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
        var o = n[r];
        if (!Il.call(t, o) || !Et(e[o], t[o])) return !1
    }
    return !0
}

function Hd(e) {
    for (; e && e.firstChild;) e = e.firstChild;
    return e
}

function Wd(e, t) {
    var n = Hd(e);
    e = 0;
    for (var r; n;) {
        if (n.nodeType === 3) {
            if (r = e + n.textContent.length, e <= t && r >= t) return {
                node: n,
                offset: t - e
            };
            e = r
        }
        e: {
            for (; n;) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e
                }
                n = n.parentNode
            }
            n = void 0
        }
        n = Hd(n)
    }
}

function Rh(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Rh(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}

function jh() {
    for (var e = window, t = bi(); t instanceof e.HTMLIFrameElement;) {
        try {
            var n = typeof t.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (n) e = t.contentWindow;
        else break;
        t = bi(e.document)
    }
    return t
}

function fc(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}

function px(e) {
    var t = jh(),
        n = e.focusedElem,
        r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && Rh(n.ownerDocument.documentElement, n)) {
        if (r !== null && fc(n)) {
            if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
            else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
                e = e.getSelection();
                var o = n.textContent.length,
                    s = Math.min(r.start, o);
                r = r.end === void 0 ? s : Math.min(r.end, o), !e.extend && s > r && (o = r, r = s, s = o), o = Wd(n, s);
                var i = Wd(n, r);
                o && i && (e.rangeCount !== 1 || e.anchorNode !== o.node || e.anchorOffset !== o.offset || e.focusNode !== i.node || e.focusOffset !== i.offset) && (t = t.createRange(), t.setStart(o.node, o.offset), e.removeAllRanges(), s > r ? (e.addRange(t), e.extend(i.node, i.offset)) : (t.setEnd(i.node, i.offset), e.addRange(t)))
            }
        }
        for (t = [], e = n; e = e.parentNode;) e.nodeType === 1 && t.push({
            element: e,
            left: e.scrollLeft,
            top: e.scrollTop
        });
        for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top
    }
}
var hx = Xt && "documentMode" in document && 11 >= document.documentMode,
    Tr = null,
    eu = null,
    zo = null,
    tu = !1;

function Qd(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    tu || Tr == null || Tr !== bi(r) || (r = Tr, "selectionStart" in r && fc(r) ? r = {
        start: r.selectionStart,
        end: r.selectionEnd
    } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = {
        anchorNode: r.anchorNode,
        anchorOffset: r.anchorOffset,
        focusNode: r.focusNode,
        focusOffset: r.focusOffset
    }), zo && es(zo, r) || (zo = r, r = ji(eu, "onSelect"), 0 < r.length && (t = new uc("onSelect", "select", null, t, n), e.push({
        event: t,
        listeners: r
    }), t.target = Tr)))
}

function zs(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n
}
var Rr = {
        animationend: zs("Animation", "AnimationEnd"),
        animationiteration: zs("Animation", "AnimationIteration"),
        animationstart: zs("Animation", "AnimationStart"),
        transitionend: zs("Transition", "TransitionEnd")
    },
    il = {},
    Oh = {};
Xt && (Oh = document.createElement("div").style, "AnimationEvent" in window || (delete Rr.animationend.animation, delete Rr.animationiteration.animation, delete Rr.animationstart.animation), "TransitionEvent" in window || delete Rr.transitionend.transition);

function ua(e) {
    if (il[e]) return il[e];
    if (!Rr[e]) return e;
    var t = Rr[e],
        n;
    for (n in t)
        if (t.hasOwnProperty(n) && n in Oh) return il[e] = t[n];
    return e
}
var Mh = ua("animationend"),
    Dh = ua("animationiteration"),
    Ih = ua("animationstart"),
    _h = ua("transitionend"),
    Lh = new Map,
    Kd = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");

function $n(e, t) {
    Lh.set(e, t), fr(t, [e])
}
for (var al = 0; al < Kd.length; al++) {
    var ll = Kd[al],
        mx = ll.toLowerCase(),
        vx = ll[0].toUpperCase() + ll.slice(1);
    $n(mx, "on" + vx)
}
$n(Mh, "onAnimationEnd");
$n(Dh, "onAnimationIteration");
$n(Ih, "onAnimationStart");
$n("dblclick", "onDoubleClick");
$n("focusin", "onFocus");
$n("focusout", "onBlur");
$n(_h, "onTransitionEnd");
no("onMouseEnter", ["mouseout", "mouseover"]);
no("onMouseLeave", ["mouseout", "mouseover"]);
no("onPointerEnter", ["pointerout", "pointerover"]);
no("onPointerLeave", ["pointerout", "pointerover"]);
fr("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
fr("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
fr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
fr("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
fr("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
fr("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Mo = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
    gx = new Set("cancel close invalid load scroll toggle".split(" ").concat(Mo));

function Gd(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n, m0(r, t, void 0, e), e.currentTarget = null
}

function Fh(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n],
            o = r.event;
        r = r.listeners;
        e: {
            var s = void 0;
            if (t)
                for (var i = r.length - 1; 0 <= i; i--) {
                    var a = r[i],
                        l = a.instance,
                        u = a.currentTarget;
                    if (a = a.listener, l !== s && o.isPropagationStopped()) break e;
                    Gd(o, a, u), s = l
                } else
                    for (i = 0; i < r.length; i++) {
                        if (a = r[i], l = a.instance, u = a.currentTarget, a = a.listener, l !== s && o.isPropagationStopped()) break e;
                        Gd(o, a, u), s = l
                    }
        }
    }
    if (Ni) throw e = ql, Ni = !1, ql = null, e
}

function ie(e, t) {
    var n = t[iu];
    n === void 0 && (n = t[iu] = new Set);
    var r = e + "__bubble";
    n.has(r) || (zh(t, e, 2, !1), n.add(r))
}

function ul(e, t, n) {
    var r = 0;
    t && (r |= 4), zh(n, e, r, t)
}
var $s = "_reactListening" + Math.random().toString(36).slice(2);

function ts(e) {
    if (!e[$s]) {
        e[$s] = !0, Qp.forEach(function(n) {
            n !== "selectionchange" && (gx.has(n) || ul(n, !1, e), ul(n, !0, e))
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[$s] || (t[$s] = !0, ul("selectionchange", !1, t))
    }
}

function zh(e, t, n, r) {
    switch (Ch(t)) {
        case 1:
            var o = j0;
            break;
        case 4:
            o = O0;
            break;
        default:
            o = ac
    }
    n = o.bind(null, t, n, e), o = void 0, !Yl || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), r ? o !== void 0 ? e.addEventListener(t, n, {
        capture: !0,
        passive: o
    }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, {
        passive: o
    }) : e.addEventListener(t, n, !1)
}

function cl(e, t, n, r, o) {
    var s = r;
    if (!(t & 1) && !(t & 2) && r !== null) e: for (;;) {
        if (r === null) return;
        var i = r.tag;
        if (i === 3 || i === 4) {
            var a = r.stateNode.containerInfo;
            if (a === o || a.nodeType === 8 && a.parentNode === o) break;
            if (i === 4)
                for (i = r.return; i !== null;) {
                    var l = i.tag;
                    if ((l === 3 || l === 4) && (l = i.stateNode.containerInfo, l === o || l.nodeType === 8 && l.parentNode === o)) return;
                    i = i.return
                }
            for (; a !== null;) {
                if (i = Gn(a), i === null) return;
                if (l = i.tag, l === 5 || l === 6) {
                    r = s = i;
                    continue e
                }
                a = a.parentNode
            }
        }
        r = r.return
    }
    lh(function() {
        var u = s,
            d = rc(n),
            f = [];
        e: {
            var v = Lh.get(e);
            if (v !== void 0) {
                var p = uc,
                    S = e;
                switch (e) {
                    case "keypress":
                        if (li(n) === 0) break e;
                    case "keydown":
                    case "keyup":
                        p = K0;
                        break;
                    case "focusin":
                        S = "focus", p = rl;
                        break;
                    case "focusout":
                        S = "blur", p = rl;
                        break;
                    case "beforeblur":
                    case "afterblur":
                        p = rl;
                        break;
                    case "click":
                        if (n.button === 2) break e;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        p = _d;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        p = I0;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        p = q0;
                        break;
                    case Mh:
                    case Dh:
                    case Ih:
                        p = F0;
                        break;
                    case _h:
                        p = Z0;
                        break;
                    case "scroll":
                        p = M0;
                        break;
                    case "wheel":
                        p = ex;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        p = $0;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        p = Fd
                }
                var m = (t & 4) !== 0,
                    w = !m && e === "scroll",
                    g = m ? v !== null ? v + "Capture" : null : v;
                m = [];
                for (var h = u, x; h !== null;) {
                    x = h;
                    var C = x.stateNode;
                    if (x.tag === 5 && C !== null && (x = C, g !== null && (C = Yo(h, g), C != null && m.push(ns(h, C, x)))), w) break;
                    h = h.return
                }
                0 < m.length && (v = new p(v, S, null, n, d), f.push({
                    event: v,
                    listeners: m
                }))
            }
        }
        if (!(t & 7)) {
            e: {
                if (v = e === "mouseover" || e === "pointerover", p = e === "mouseout" || e === "pointerout", v && n !== Kl && (S = n.relatedTarget || n.fromElement) && (Gn(S) || S[Zt])) break e;
                if ((p || v) && (v = d.window === d ? d : (v = d.ownerDocument) ? v.defaultView || v.parentWindow : window, p ? (S = n.relatedTarget || n.toElement, p = u, S = S ? Gn(S) : null, S !== null && (w = pr(S), S !== w || S.tag !== 5 && S.tag !== 6) && (S = null)) : (p = null, S = u), p !== S)) {
                    if (m = _d, C = "onMouseLeave", g = "onMouseEnter", h = "mouse", (e === "pointerout" || e === "pointerover") && (m = Fd, C = "onPointerLeave", g = "onPointerEnter", h = "pointer"), w = p == null ? v : jr(p), x = S == null ? v : jr(S), v = new m(C, h + "leave", p, n, d), v.target = w, v.relatedTarget = x, C = null, Gn(d) === u && (m = new m(g, h + "enter", S, n, d), m.target = x, m.relatedTarget = w, C = m), w = C, p && S) t: {
                        for (m = p, g = S, h = 0, x = m; x; x = Cr(x)) h++;
                        for (x = 0, C = g; C; C = Cr(C)) x++;
                        for (; 0 < h - x;) m = Cr(m),
                        h--;
                        for (; 0 < x - h;) g = Cr(g),
                        x--;
                        for (; h--;) {
                            if (m === g || g !== null && m === g.alternate) break t;
                            m = Cr(m), g = Cr(g)
                        }
                        m = null
                    }
                    else m = null;
                    p !== null && Yd(f, v, p, m, !1), S !== null && w !== null && Yd(f, w, S, m, !0)
                }
            }
            e: {
                if (v = u ? jr(u) : window, p = v.nodeName && v.nodeName.toLowerCase(), p === "select" || p === "input" && v.type === "file") var E = ax;
                else if (Bd(v))
                    if (Ah) E = dx;
                    else {
                        E = ux;
                        var b = lx
                    }
                else(p = v.nodeName) && p.toLowerCase() === "input" && (v.type === "checkbox" || v.type === "radio") && (E = cx);
                if (E && (E = E(e, u))) {
                    Ph(f, E, n, d);
                    break e
                }
                b && b(e, v, u),
                e === "focusout" && (b = v._wrapperState) && b.controlled && v.type === "number" && Ul(v, "number", v.value)
            }
            switch (b = u ? jr(u) : window, e) {
                case "focusin":
                    (Bd(b) || b.contentEditable === "true") && (Tr = b, eu = u, zo = null);
                    break;
                case "focusout":
                    zo = eu = Tr = null;
                    break;
                case "mousedown":
                    tu = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    tu = !1, Qd(f, n, d);
                    break;
                case "selectionchange":
                    if (hx) break;
                case "keydown":
                case "keyup":
                    Qd(f, n, d)
            }
            var k;
            if (dc) e: {
                switch (e) {
                    case "compositionstart":
                        var T = "onCompositionStart";
                        break e;
                    case "compositionend":
                        T = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        T = "onCompositionUpdate";
                        break e
                }
                T = void 0
            }
            else Ar ? kh(e, n) && (T = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (T = "onCompositionStart");T && (bh && n.locale !== "ko" && (Ar || T !== "onCompositionStart" ? T === "onCompositionEnd" && Ar && (k = Eh()) : (kn = d, lc = "value" in kn ? kn.value : kn.textContent, Ar = !0)), b = ji(u, T), 0 < b.length && (T = new Ld(T, e, null, n, d), f.push({
                event: T,
                listeners: b
            }), k ? T.data = k : (k = Nh(n), k !== null && (T.data = k)))),
            (k = nx ? rx(e, n) : ox(e, n)) && (u = ji(u, "onBeforeInput"), 0 < u.length && (d = new Ld("onBeforeInput", "beforeinput", null, n, d), f.push({
                event: d,
                listeners: u
            }), d.data = k))
        }
        Fh(f, t)
    })
}

function ns(e, t, n) {
    return {
        instance: e,
        listener: t,
        currentTarget: n
    }
}

function ji(e, t) {
    for (var n = t + "Capture", r = []; e !== null;) {
        var o = e,
            s = o.stateNode;
        o.tag === 5 && s !== null && (o = s, s = Yo(e, n), s != null && r.unshift(ns(e, s, o)), s = Yo(e, t), s != null && r.push(ns(e, s, o))), e = e.return
    }
    return r
}

function Cr(e) {
    if (e === null) return null;
    do e = e.return; while (e && e.tag !== 5);
    return e || null
}

function Yd(e, t, n, r, o) {
    for (var s = t._reactName, i = []; n !== null && n !== r;) {
        var a = n,
            l = a.alternate,
            u = a.stateNode;
        if (l !== null && l === r) break;
        a.tag === 5 && u !== null && (a = u, o ? (l = Yo(n, s), l != null && i.unshift(ns(n, l, a))) : o || (l = Yo(n, s), l != null && i.push(ns(n, l, a)))), n = n.return
    }
    i.length !== 0 && e.push({
        event: t,
        listeners: i
    })
}
var yx = /\r\n?/g,
    xx = /\u0000|\uFFFD/g;

function qd(e) {
    return (typeof e == "string" ? e : "" + e).replace(yx, `
`).replace(xx, "")
}

function Bs(e, t, n) {
    if (t = qd(t), qd(e) !== t && n) throw Error(j(425))
}

function Oi() {}
var nu = null,
    ru = null;

function ou(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var su = typeof setTimeout == "function" ? setTimeout : void 0,
    wx = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Xd = typeof Promise == "function" ? Promise : void 0,
    Sx = typeof queueMicrotask == "function" ? queueMicrotask : typeof Xd < "u" ? function(e) {
        return Xd.resolve(null).then(e).catch(Cx)
    } : su;

function Cx(e) {
    setTimeout(function() {
        throw e
    })
}

function dl(e, t) {
    var n = t,
        r = 0;
    do {
        var o = n.nextSibling;
        if (e.removeChild(n), o && o.nodeType === 8)
            if (n = o.data, n === "/$") {
                if (r === 0) {
                    e.removeChild(o), Zo(t);
                    return
                }
                r--
            } else n !== "$" && n !== "$?" && n !== "$!" || r++;
        n = o
    } while (n);
    Zo(t)
}

function jn(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3) break;
        if (t === 8) {
            if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
            if (t === "/$") return null
        }
    }
    return e
}

function Zd(e) {
    e = e.previousSibling;
    for (var t = 0; e;) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0) return e;
                t--
            } else n === "/$" && t++
        }
        e = e.previousSibling
    }
    return null
}
var ho = Math.random().toString(36).slice(2),
    Mt = "__reactFiber$" + ho,
    rs = "__reactProps$" + ho,
    Zt = "__reactContainer$" + ho,
    iu = "__reactEvents$" + ho,
    Ex = "__reactListeners$" + ho,
    bx = "__reactHandles$" + ho;

function Gn(e) {
    var t = e[Mt];
    if (t) return t;
    for (var n = e.parentNode; n;) {
        if (t = n[Zt] || n[Mt]) {
            if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
                for (e = Zd(e); e !== null;) {
                    if (n = e[Mt]) return n;
                    e = Zd(e)
                }
            return t
        }
        e = n, n = e.parentNode
    }
    return null
}

function ws(e) {
    return e = e[Mt] || e[Zt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}

function jr(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(j(33))
}

function ca(e) {
    return e[rs] || null
}
var au = [],
    Or = -1;

function Bn(e) {
    return {
        current: e
    }
}

function ae(e) {
    0 > Or || (e.current = au[Or], au[Or] = null, Or--)
}

function oe(e, t) {
    Or++, au[Or] = e.current, e.current = t
}
var Ln = {},
    Me = Bn(Ln),
    He = Bn(!1),
    sr = Ln;

function ro(e, t) {
    var n = e.type.contextTypes;
    if (!n) return Ln;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
    var o = {},
        s;
    for (s in n) o[s] = t[s];
    return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = o), o
}

function We(e) {
    return e = e.childContextTypes, e != null
}

function Mi() {
    ae(He), ae(Me)
}

function Jd(e, t, n) {
    if (Me.current !== Ln) throw Error(j(168));
    oe(Me, t), oe(He, n)
}

function $h(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
    r = r.getChildContext();
    for (var o in r)
        if (!(o in t)) throw Error(j(108, l0(e) || "Unknown", o));
    return pe({}, n, r)
}

function Di(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Ln, sr = Me.current, oe(Me, e), oe(He, He.current), !0
}

function ef(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(j(169));
    n ? (e = $h(e, t, sr), r.__reactInternalMemoizedMergedChildContext = e, ae(He), ae(Me), oe(Me, e)) : ae(He), oe(He, n)
}
var Qt = null,
    da = !1,
    fl = !1;

function Bh(e) {
    Qt === null ? Qt = [e] : Qt.push(e)
}

function kx(e) {
    da = !0, Bh(e)
}

function Un() {
    if (!fl && Qt !== null) {
        fl = !0;
        var e = 0,
            t = ee;
        try {
            var n = Qt;
            for (ee = 1; e < n.length; e++) {
                var r = n[e];
                do r = r(!0); while (r !== null)
            }
            Qt = null, da = !1
        } catch (o) {
            throw Qt !== null && (Qt = Qt.slice(e + 1)), fh(oc, Un), o
        } finally {
            ee = t, fl = !1
        }
    }
    return null
}
var Mr = [],
    Dr = 0,
    Ii = null,
    _i = 0,
    ot = [],
    st = 0,
    ir = null,
    Gt = 1,
    Yt = "";

function Qn(e, t) {
    Mr[Dr++] = _i, Mr[Dr++] = Ii, Ii = e, _i = t
}

function Uh(e, t, n) {
    ot[st++] = Gt, ot[st++] = Yt, ot[st++] = ir, ir = e;
    var r = Gt;
    e = Yt;
    var o = 32 - St(r) - 1;
    r &= ~(1 << o), n += 1;
    var s = 32 - St(t) + o;
    if (30 < s) {
        var i = o - o % 5;
        s = (r & (1 << i) - 1).toString(32), r >>= i, o -= i, Gt = 1 << 32 - St(t) + o | n << o | r, Yt = s + e
    } else Gt = 1 << s | n << o | r, Yt = e
}

function pc(e) {
    e.return !== null && (Qn(e, 1), Uh(e, 1, 0))
}

function hc(e) {
    for (; e === Ii;) Ii = Mr[--Dr], Mr[Dr] = null, _i = Mr[--Dr], Mr[Dr] = null;
    for (; e === ir;) ir = ot[--st], ot[st] = null, Yt = ot[--st], ot[st] = null, Gt = ot[--st], ot[st] = null
}
var Xe = null,
    qe = null,
    ce = !1,
    wt = null;

function Vh(e, t) {
    var n = it(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n)
}

function tf(e, t) {
    switch (e.tag) {
        case 5:
            var n = e.type;
            return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Xe = e, qe = jn(t.firstChild), !0) : !1;
        case 6:
            return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Xe = e, qe = null, !0) : !1;
        case 13:
            return t = t.nodeType !== 8 ? null : t, t !== null ? (n = ir !== null ? {
                id: Gt,
                overflow: Yt
            } : null, e.memoizedState = {
                dehydrated: t,
                treeContext: n,
                retryLane: 1073741824
            }, n = it(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Xe = e, qe = null, !0) : !1;
        default:
            return !1
    }
}

function lu(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}

function uu(e) {
    if (ce) {
        var t = qe;
        if (t) {
            var n = t;
            if (!tf(e, t)) {
                if (lu(e)) throw Error(j(418));
                t = jn(n.nextSibling);
                var r = Xe;
                t && tf(e, t) ? Vh(r, n) : (e.flags = e.flags & -4097 | 2, ce = !1, Xe = e)
            }
        } else {
            if (lu(e)) throw Error(j(418));
            e.flags = e.flags & -4097 | 2, ce = !1, Xe = e
        }
    }
}

function nf(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;) e = e.return;
    Xe = e
}

function Us(e) {
    if (e !== Xe) return !1;
    if (!ce) return nf(e), ce = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !ou(e.type, e.memoizedProps)), t && (t = qe)) {
        if (lu(e)) throw Hh(), Error(j(418));
        for (; t;) Vh(e, t), t = jn(t.nextSibling)
    }
    if (nf(e), e.tag === 13) {
        if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(j(317));
        e: {
            for (e = e.nextSibling, t = 0; e;) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            qe = jn(e.nextSibling);
                            break e
                        }
                        t--
                    } else n !== "$" && n !== "$!" && n !== "$?" || t++
                }
                e = e.nextSibling
            }
            qe = null
        }
    } else qe = Xe ? jn(e.stateNode.nextSibling) : null;
    return !0
}

function Hh() {
    for (var e = qe; e;) e = jn(e.nextSibling)
}

function oo() {
    qe = Xe = null, ce = !1
}

function mc(e) {
    wt === null ? wt = [e] : wt.push(e)
}
var Nx = rn.ReactCurrentBatchConfig;

function ko(e, t, n) {
    if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
        if (n._owner) {
            if (n = n._owner, n) {
                if (n.tag !== 1) throw Error(j(309));
                var r = n.stateNode
            }
            if (!r) throw Error(j(147, e));
            var o = r,
                s = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === s ? t.ref : (t = function(i) {
                var a = o.refs;
                i === null ? delete a[s] : a[s] = i
            }, t._stringRef = s, t)
        }
        if (typeof e != "string") throw Error(j(284));
        if (!n._owner) throw Error(j(290, e))
    }
    return e
}

function Vs(e, t) {
    throw e = Object.prototype.toString.call(t), Error(j(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}

function rf(e) {
    var t = e._init;
    return t(e._payload)
}

function Wh(e) {
    function t(g, h) {
        if (e) {
            var x = g.deletions;
            x === null ? (g.deletions = [h], g.flags |= 16) : x.push(h)
        }
    }

    function n(g, h) {
        if (!e) return null;
        for (; h !== null;) t(g, h), h = h.sibling;
        return null
    }

    function r(g, h) {
        for (g = new Map; h !== null;) h.key !== null ? g.set(h.key, h) : g.set(h.index, h), h = h.sibling;
        return g
    }

    function o(g, h) {
        return g = In(g, h), g.index = 0, g.sibling = null, g
    }

    function s(g, h, x) {
        return g.index = x, e ? (x = g.alternate, x !== null ? (x = x.index, x < h ? (g.flags |= 2, h) : x) : (g.flags |= 2, h)) : (g.flags |= 1048576, h)
    }

    function i(g) {
        return e && g.alternate === null && (g.flags |= 2), g
    }

    function a(g, h, x, C) {
        return h === null || h.tag !== 6 ? (h = xl(x, g.mode, C), h.return = g, h) : (h = o(h, x), h.return = g, h)
    }

    function l(g, h, x, C) {
        var E = x.type;
        return E === Pr ? d(g, h, x.props.children, C, x.key) : h !== null && (h.elementType === E || typeof E == "object" && E !== null && E.$$typeof === vn && rf(E) === h.type) ? (C = o(h, x.props), C.ref = ko(g, h, x), C.return = g, C) : (C = mi(x.type, x.key, x.props, null, g.mode, C), C.ref = ko(g, h, x), C.return = g, C)
    }

    function u(g, h, x, C) {
        return h === null || h.tag !== 4 || h.stateNode.containerInfo !== x.containerInfo || h.stateNode.implementation !== x.implementation ? (h = wl(x, g.mode, C), h.return = g, h) : (h = o(h, x.children || []), h.return = g, h)
    }

    function d(g, h, x, C, E) {
        return h === null || h.tag !== 7 ? (h = or(x, g.mode, C, E), h.return = g, h) : (h = o(h, x), h.return = g, h)
    }

    function f(g, h, x) {
        if (typeof h == "string" && h !== "" || typeof h == "number") return h = xl("" + h, g.mode, x), h.return = g, h;
        if (typeof h == "object" && h !== null) {
            switch (h.$$typeof) {
                case Os:
                    return x = mi(h.type, h.key, h.props, null, g.mode, x), x.ref = ko(g, null, h), x.return = g, x;
                case Nr:
                    return h = wl(h, g.mode, x), h.return = g, h;
                case vn:
                    var C = h._init;
                    return f(g, C(h._payload), x)
            }
            if (jo(h) || wo(h)) return h = or(h, g.mode, x, null), h.return = g, h;
            Vs(g, h)
        }
        return null
    }

    function v(g, h, x, C) {
        var E = h !== null ? h.key : null;
        if (typeof x == "string" && x !== "" || typeof x == "number") return E !== null ? null : a(g, h, "" + x, C);
        if (typeof x == "object" && x !== null) {
            switch (x.$$typeof) {
                case Os:
                    return x.key === E ? l(g, h, x, C) : null;
                case Nr:
                    return x.key === E ? u(g, h, x, C) : null;
                case vn:
                    return E = x._init, v(g, h, E(x._payload), C)
            }
            if (jo(x) || wo(x)) return E !== null ? null : d(g, h, x, C, null);
            Vs(g, x)
        }
        return null
    }

    function p(g, h, x, C, E) {
        if (typeof C == "string" && C !== "" || typeof C == "number") return g = g.get(x) || null, a(h, g, "" + C, E);
        if (typeof C == "object" && C !== null) {
            switch (C.$$typeof) {
                case Os:
                    return g = g.get(C.key === null ? x : C.key) || null, l(h, g, C, E);
                case Nr:
                    return g = g.get(C.key === null ? x : C.key) || null, u(h, g, C, E);
                case vn:
                    var b = C._init;
                    return p(g, h, x, b(C._payload), E)
            }
            if (jo(C) || wo(C)) return g = g.get(x) || null, d(h, g, C, E, null);
            Vs(h, C)
        }
        return null
    }

    function S(g, h, x, C) {
        for (var E = null, b = null, k = h, T = h = 0, O = null; k !== null && T < x.length; T++) {
            k.index > T ? (O = k, k = null) : O = k.sibling;
            var M = v(g, k, x[T], C);
            if (M === null) {
                k === null && (k = O);
                break
            }
            e && k && M.alternate === null && t(g, k), h = s(M, h, T), b === null ? E = M : b.sibling = M, b = M, k = O
        }
        if (T === x.length) return n(g, k), ce && Qn(g, T), E;
        if (k === null) {
            for (; T < x.length; T++) k = f(g, x[T], C), k !== null && (h = s(k, h, T), b === null ? E = k : b.sibling = k, b = k);
            return ce && Qn(g, T), E
        }
        for (k = r(g, k); T < x.length; T++) O = p(k, g, T, x[T], C), O !== null && (e && O.alternate !== null && k.delete(O.key === null ? T : O.key), h = s(O, h, T), b === null ? E = O : b.sibling = O, b = O);
        return e && k.forEach(function(z) {
            return t(g, z)
        }), ce && Qn(g, T), E
    }

    function m(g, h, x, C) {
        var E = wo(x);
        if (typeof E != "function") throw Error(j(150));
        if (x = E.call(x), x == null) throw Error(j(151));
        for (var b = E = null, k = h, T = h = 0, O = null, M = x.next(); k !== null && !M.done; T++, M = x.next()) {
            k.index > T ? (O = k, k = null) : O = k.sibling;
            var z = v(g, k, M.value, C);
            if (z === null) {
                k === null && (k = O);
                break
            }
            e && k && z.alternate === null && t(g, k), h = s(z, h, T), b === null ? E = z : b.sibling = z, b = z, k = O
        }
        if (M.done) return n(g, k), ce && Qn(g, T), E;
        if (k === null) {
            for (; !M.done; T++, M = x.next()) M = f(g, M.value, C), M !== null && (h = s(M, h, T), b === null ? E = M : b.sibling = M, b = M);
            return ce && Qn(g, T), E
        }
        for (k = r(g, k); !M.done; T++, M = x.next()) M = p(k, g, T, M.value, C), M !== null && (e && M.alternate !== null && k.delete(M.key === null ? T : M.key), h = s(M, h, T), b === null ? E = M : b.sibling = M, b = M);
        return e && k.forEach(function(L) {
            return t(g, L)
        }), ce && Qn(g, T), E
    }

    function w(g, h, x, C) {
        if (typeof x == "object" && x !== null && x.type === Pr && x.key === null && (x = x.props.children), typeof x == "object" && x !== null) {
            switch (x.$$typeof) {
                case Os:
                    e: {
                        for (var E = x.key, b = h; b !== null;) {
                            if (b.key === E) {
                                if (E = x.type, E === Pr) {
                                    if (b.tag === 7) {
                                        n(g, b.sibling), h = o(b, x.props.children), h.return = g, g = h;
                                        break e
                                    }
                                } else if (b.elementType === E || typeof E == "object" && E !== null && E.$$typeof === vn && rf(E) === b.type) {
                                    n(g, b.sibling), h = o(b, x.props), h.ref = ko(g, b, x), h.return = g, g = h;
                                    break e
                                }
                                n(g, b);
                                break
                            } else t(g, b);
                            b = b.sibling
                        }
                        x.type === Pr ? (h = or(x.props.children, g.mode, C, x.key), h.return = g, g = h) : (C = mi(x.type, x.key, x.props, null, g.mode, C), C.ref = ko(g, h, x), C.return = g, g = C)
                    }
                    return i(g);
                case Nr:
                    e: {
                        for (b = x.key; h !== null;) {
                            if (h.key === b)
                                if (h.tag === 4 && h.stateNode.containerInfo === x.containerInfo && h.stateNode.implementation === x.implementation) {
                                    n(g, h.sibling), h = o(h, x.children || []), h.return = g, g = h;
                                    break e
                                } else {
                                    n(g, h);
                                    break
                                }
                            else t(g, h);
                            h = h.sibling
                        }
                        h = wl(x, g.mode, C),
                        h.return = g,
                        g = h
                    }
                    return i(g);
                case vn:
                    return b = x._init, w(g, h, b(x._payload), C)
            }
            if (jo(x)) return S(g, h, x, C);
            if (wo(x)) return m(g, h, x, C);
            Vs(g, x)
        }
        return typeof x == "string" && x !== "" || typeof x == "number" ? (x = "" + x, h !== null && h.tag === 6 ? (n(g, h.sibling), h = o(h, x), h.return = g, g = h) : (n(g, h), h = xl(x, g.mode, C), h.return = g, g = h), i(g)) : n(g, h)
    }
    return w
}
var so = Wh(!0),
    Qh = Wh(!1),
    Li = Bn(null),
    Fi = null,
    Ir = null,
    vc = null;

function gc() {
    vc = Ir = Fi = null
}

function yc(e) {
    var t = Li.current;
    ae(Li), e._currentValue = t
}

function cu(e, t, n) {
    for (; e !== null;) {
        var r = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
        e = e.return
    }
}

function Ur(e, t) {
    Fi = e, vc = Ir = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Ve = !0), e.firstContext = null)
}

function lt(e) {
    var t = e._currentValue;
    if (vc !== e)
        if (e = {
                context: e,
                memoizedValue: t,
                next: null
            }, Ir === null) {
            if (Fi === null) throw Error(j(308));
            Ir = e, Fi.dependencies = {
                lanes: 0,
                firstContext: e
            }
        } else Ir = Ir.next = e;
    return t
}
var Yn = null;

function xc(e) {
    Yn === null ? Yn = [e] : Yn.push(e)
}

function Kh(e, t, n, r) {
    var o = t.interleaved;
    return o === null ? (n.next = n, xc(t)) : (n.next = o.next, o.next = n), t.interleaved = n, Jt(e, r)
}

function Jt(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null;) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null
}
var gn = !1;

function wc(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    }
}

function Gh(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
    })
}

function qt(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}

function On(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (r = r.shared, X & 2) {
        var o = r.pending;
        return o === null ? t.next = t : (t.next = o.next, o.next = t), r.pending = t, Jt(e, n)
    }
    return o = r.interleaved, o === null ? (t.next = t, xc(r)) : (t.next = o.next, o.next = t), r.interleaved = t, Jt(e, n)
}

function ui(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
        var r = t.lanes;
        r &= e.pendingLanes, n |= r, t.lanes = n, sc(e, n)
    }
}

function of (e, t) {
    var n = e.updateQueue,
        r = e.alternate;
    if (r !== null && (r = r.updateQueue, n === r)) {
        var o = null,
            s = null;
        if (n = n.firstBaseUpdate, n !== null) {
            do {
                var i = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null
                };
                s === null ? o = s = i : s = s.next = i, n = n.next
            } while (n !== null);
            s === null ? o = s = t : s = s.next = t
        } else o = s = t;
        n = {
            baseState: r.baseState,
            firstBaseUpdate: o,
            lastBaseUpdate: s,
            shared: r.shared,
            effects: r.effects
        }, e.updateQueue = n;
        return
    }
    e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t
}

function zi(e, t, n, r) {
    var o = e.updateQueue;
    gn = !1;
    var s = o.firstBaseUpdate,
        i = o.lastBaseUpdate,
        a = o.shared.pending;
    if (a !== null) {
        o.shared.pending = null;
        var l = a,
            u = l.next;
        l.next = null, i === null ? s = u : i.next = u, i = l;
        var d = e.alternate;
        d !== null && (d = d.updateQueue, a = d.lastBaseUpdate, a !== i && (a === null ? d.firstBaseUpdate = u : a.next = u, d.lastBaseUpdate = l))
    }
    if (s !== null) {
        var f = o.baseState;
        i = 0, d = u = l = null, a = s;
        do {
            var v = a.lane,
                p = a.eventTime;
            if ((r & v) === v) {
                d !== null && (d = d.next = {
                    eventTime: p,
                    lane: 0,
                    tag: a.tag,
                    payload: a.payload,
                    callback: a.callback,
                    next: null
                });
                e: {
                    var S = e,
                        m = a;
                    switch (v = t, p = n, m.tag) {
                        case 1:
                            if (S = m.payload, typeof S == "function") {
                                f = S.call(p, f, v);
                                break e
                            }
                            f = S;
                            break e;
                        case 3:
                            S.flags = S.flags & -65537 | 128;
                        case 0:
                            if (S = m.payload, v = typeof S == "function" ? S.call(p, f, v) : S, v == null) break e;
                            f = pe({}, f, v);
                            break e;
                        case 2:
                            gn = !0
                    }
                }
                a.callback !== null && a.lane !== 0 && (e.flags |= 64, v = o.effects, v === null ? o.effects = [a] : v.push(a))
            } else p = {
                eventTime: p,
                lane: v,
                tag: a.tag,
                payload: a.payload,
                callback: a.callback,
                next: null
            }, d === null ? (u = d = p, l = f) : d = d.next = p, i |= v;
            if (a = a.next, a === null) {
                if (a = o.shared.pending, a === null) break;
                v = a, a = v.next, v.next = null, o.lastBaseUpdate = v, o.shared.pending = null
            }
        } while (!0);
        if (d === null && (l = f), o.baseState = l, o.firstBaseUpdate = u, o.lastBaseUpdate = d, t = o.shared.interleaved, t !== null) {
            o = t;
            do i |= o.lane, o = o.next; while (o !== t)
        } else s === null && (o.shared.lanes = 0);
        lr |= i, e.lanes = i, e.memoizedState = f
    }
}

function sf(e, t, n) {
    if (e = t.effects, t.effects = null, e !== null)
        for (t = 0; t < e.length; t++) {
            var r = e[t],
                o = r.callback;
            if (o !== null) {
                if (r.callback = null, r = n, typeof o != "function") throw Error(j(191, o));
                o.call(r)
            }
        }
}
var Ss = {},
    Lt = Bn(Ss),
    os = Bn(Ss),
    ss = Bn(Ss);

function qn(e) {
    if (e === Ss) throw Error(j(174));
    return e
}

function Sc(e, t) {
    switch (oe(ss, t), oe(os, e), oe(Lt, Ss), e = t.nodeType, e) {
        case 9:
        case 11:
            t = (t = t.documentElement) ? t.namespaceURI : Hl(null, "");
            break;
        default:
            e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Hl(t, e)
    }
    ae(Lt), oe(Lt, t)
}

function io() {
    ae(Lt), ae(os), ae(ss)
}

function Yh(e) {
    qn(ss.current);
    var t = qn(Lt.current),
        n = Hl(t, e.type);
    t !== n && (oe(os, e), oe(Lt, n))
}

function Cc(e) {
    os.current === e && (ae(Lt), ae(os))
}
var de = Bn(0);

function $i(e) {
    for (var t = e; t !== null;) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return t
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128) return t
        } else if (t.child !== null) {
            t.child.return = t, t = t.child;
            continue
        }
        if (t === e) break;
        for (; t.sibling === null;) {
            if (t.return === null || t.return === e) return null;
            t = t.return
        }
        t.sibling.return = t.return, t = t.sibling
    }
    return null
}
var pl = [];

function Ec() {
    for (var e = 0; e < pl.length; e++) pl[e]._workInProgressVersionPrimary = null;
    pl.length = 0
}
var ci = rn.ReactCurrentDispatcher,
    hl = rn.ReactCurrentBatchConfig,
    ar = 0,
    fe = null,
    xe = null,
    Se = null,
    Bi = !1,
    $o = !1,
    is = 0,
    Px = 0;

function Te() {
    throw Error(j(321))
}

function bc(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!Et(e[n], t[n])) return !1;
    return !0
}

function kc(e, t, n, r, o, s) {
    if (ar = s, fe = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, ci.current = e === null || e.memoizedState === null ? jx : Ox, e = n(r, o), $o) {
        s = 0;
        do {
            if ($o = !1, is = 0, 25 <= s) throw Error(j(301));
            s += 1, Se = xe = null, t.updateQueue = null, ci.current = Mx, e = n(r, o)
        } while ($o)
    }
    if (ci.current = Ui, t = xe !== null && xe.next !== null, ar = 0, Se = xe = fe = null, Bi = !1, t) throw Error(j(300));
    return e
}

function Nc() {
    var e = is !== 0;
    return is = 0, e
}

function Tt() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return Se === null ? fe.memoizedState = Se = e : Se = Se.next = e, Se
}

function ut() {
    if (xe === null) {
        var e = fe.alternate;
        e = e !== null ? e.memoizedState : null
    } else e = xe.next;
    var t = Se === null ? fe.memoizedState : Se.next;
    if (t !== null) Se = t, xe = e;
    else {
        if (e === null) throw Error(j(310));
        xe = e, e = {
            memoizedState: xe.memoizedState,
            baseState: xe.baseState,
            baseQueue: xe.baseQueue,
            queue: xe.queue,
            next: null
        }, Se === null ? fe.memoizedState = Se = e : Se = Se.next = e
    }
    return Se
}

function as(e, t) {
    return typeof t == "function" ? t(e) : t
}

function ml(e) {
    var t = ut(),
        n = t.queue;
    if (n === null) throw Error(j(311));
    n.lastRenderedReducer = e;
    var r = xe,
        o = r.baseQueue,
        s = n.pending;
    if (s !== null) {
        if (o !== null) {
            var i = o.next;
            o.next = s.next, s.next = i
        }
        r.baseQueue = o = s, n.pending = null
    }
    if (o !== null) {
        s = o.next, r = r.baseState;
        var a = i = null,
            l = null,
            u = s;
        do {
            var d = u.lane;
            if ((ar & d) === d) l !== null && (l = l.next = {
                lane: 0,
                action: u.action,
                hasEagerState: u.hasEagerState,
                eagerState: u.eagerState,
                next: null
            }), r = u.hasEagerState ? u.eagerState : e(r, u.action);
            else {
                var f = {
                    lane: d,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                };
                l === null ? (a = l = f, i = r) : l = l.next = f, fe.lanes |= d, lr |= d
            }
            u = u.next
        } while (u !== null && u !== s);
        l === null ? i = r : l.next = a, Et(r, t.memoizedState) || (Ve = !0), t.memoizedState = r, t.baseState = i, t.baseQueue = l, n.lastRenderedState = r
    }
    if (e = n.interleaved, e !== null) {
        o = e;
        do s = o.lane, fe.lanes |= s, lr |= s, o = o.next; while (o !== e)
    } else o === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch]
}

function vl(e) {
    var t = ut(),
        n = t.queue;
    if (n === null) throw Error(j(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
        o = n.pending,
        s = t.memoizedState;
    if (o !== null) {
        n.pending = null;
        var i = o = o.next;
        do s = e(s, i.action), i = i.next; while (i !== o);
        Et(s, t.memoizedState) || (Ve = !0), t.memoizedState = s, t.baseQueue === null && (t.baseState = s), n.lastRenderedState = s
    }
    return [s, r]
}

function qh() {}

function Xh(e, t) {
    var n = fe,
        r = ut(),
        o = t(),
        s = !Et(r.memoizedState, o);
    if (s && (r.memoizedState = o, Ve = !0), r = r.queue, Pc(em.bind(null, n, r, e), [e]), r.getSnapshot !== t || s || Se !== null && Se.memoizedState.tag & 1) {
        if (n.flags |= 2048, ls(9, Jh.bind(null, n, r, o, t), void 0, null), Ce === null) throw Error(j(349));
        ar & 30 || Zh(n, t, o)
    }
    return o
}

function Zh(e, t, n) {
    e.flags |= 16384, e = {
        getSnapshot: t,
        value: n
    }, t = fe.updateQueue, t === null ? (t = {
        lastEffect: null,
        stores: null
    }, fe.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e))
}

function Jh(e, t, n, r) {
    t.value = n, t.getSnapshot = r, tm(t) && nm(e)
}

function em(e, t, n) {
    return n(function() {
        tm(t) && nm(e)
    })
}

function tm(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !Et(e, n)
    } catch {
        return !0
    }
}

function nm(e) {
    var t = Jt(e, 1);
    t !== null && Ct(t, e, 1, -1)
}

function af(e) {
    var t = Tt();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: as,
        lastRenderedState: e
    }, t.queue = e, e = e.dispatch = Rx.bind(null, fe, e), [t.memoizedState, e]
}

function ls(e, t, n, r) {
    return e = {
        tag: e,
        create: t,
        destroy: n,
        deps: r,
        next: null
    }, t = fe.updateQueue, t === null ? (t = {
        lastEffect: null,
        stores: null
    }, fe.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e
}

function rm() {
    return ut().memoizedState
}

function di(e, t, n, r) {
    var o = Tt();
    fe.flags |= e, o.memoizedState = ls(1 | t, n, void 0, r === void 0 ? null : r)
}

function fa(e, t, n, r) {
    var o = ut();
    r = r === void 0 ? null : r;
    var s = void 0;
    if (xe !== null) {
        var i = xe.memoizedState;
        if (s = i.destroy, r !== null && bc(r, i.deps)) {
            o.memoizedState = ls(t, n, s, r);
            return
        }
    }
    fe.flags |= e, o.memoizedState = ls(1 | t, n, s, r)
}

function lf(e, t) {
    return di(8390656, 8, e, t)
}

function Pc(e, t) {
    return fa(2048, 8, e, t)
}

function om(e, t) {
    return fa(4, 2, e, t)
}

function sm(e, t) {
    return fa(4, 4, e, t)
}

function im(e, t) {
    if (typeof t == "function") return e = e(), t(e),
        function() {
            t(null)
        };
    if (t != null) return e = e(), t.current = e,
        function() {
            t.current = null
        }
}

function am(e, t, n) {
    return n = n != null ? n.concat([e]) : null, fa(4, 4, im.bind(null, t, e), n)
}

function Ac() {}

function lm(e, t) {
    var n = ut();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && bc(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e)
}

function um(e, t) {
    var n = ut();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && bc(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e)
}

function cm(e, t, n) {
    return ar & 21 ? (Et(n, t) || (n = mh(), fe.lanes |= n, lr |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Ve = !0), e.memoizedState = n)
}

function Ax(e, t) {
    var n = ee;
    ee = n !== 0 && 4 > n ? n : 4, e(!0);
    var r = hl.transition;
    hl.transition = {};
    try {
        e(!1), t()
    } finally {
        ee = n, hl.transition = r
    }
}

function dm() {
    return ut().memoizedState
}

function Tx(e, t, n) {
    var r = Dn(e);
    if (n = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        }, fm(e)) pm(t, n);
    else if (n = Kh(e, t, n, r), n !== null) {
        var o = Le();
        Ct(n, e, r, o), hm(n, t, r)
    }
}

function Rx(e, t, n) {
    var r = Dn(e),
        o = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
    if (fm(e)) pm(t, o);
    else {
        var s = e.alternate;
        if (e.lanes === 0 && (s === null || s.lanes === 0) && (s = t.lastRenderedReducer, s !== null)) try {
            var i = t.lastRenderedState,
                a = s(i, n);
            if (o.hasEagerState = !0, o.eagerState = a, Et(a, i)) {
                var l = t.interleaved;
                l === null ? (o.next = o, xc(t)) : (o.next = l.next, l.next = o), t.interleaved = o;
                return
            }
        } catch {} finally {}
        n = Kh(e, t, o, r), n !== null && (o = Le(), Ct(n, e, r, o), hm(n, t, r))
    }
}

function fm(e) {
    var t = e.alternate;
    return e === fe || t !== null && t === fe
}

function pm(e, t) {
    $o = Bi = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t
}

function hm(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        r &= e.pendingLanes, n |= r, t.lanes = n, sc(e, n)
    }
}
var Ui = {
        readContext: lt,
        useCallback: Te,
        useContext: Te,
        useEffect: Te,
        useImperativeHandle: Te,
        useInsertionEffect: Te,
        useLayoutEffect: Te,
        useMemo: Te,
        useReducer: Te,
        useRef: Te,
        useState: Te,
        useDebugValue: Te,
        useDeferredValue: Te,
        useTransition: Te,
        useMutableSource: Te,
        useSyncExternalStore: Te,
        useId: Te,
        unstable_isNewReconciler: !1
    },
    jx = {
        readContext: lt,
        useCallback: function(e, t) {
            return Tt().memoizedState = [e, t === void 0 ? null : t], e
        },
        useContext: lt,
        useEffect: lf,
        useImperativeHandle: function(e, t, n) {
            return n = n != null ? n.concat([e]) : null, di(4194308, 4, im.bind(null, t, e), n)
        },
        useLayoutEffect: function(e, t) {
            return di(4194308, 4, e, t)
        },
        useInsertionEffect: function(e, t) {
            return di(4, 2, e, t)
        },
        useMemo: function(e, t) {
            var n = Tt();
            return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e
        },
        useReducer: function(e, t, n) {
            var r = Tt();
            return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = {
                pending: null,
                interleaved: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: e,
                lastRenderedState: t
            }, r.queue = e, e = e.dispatch = Tx.bind(null, fe, e), [r.memoizedState, e]
        },
        useRef: function(e) {
            var t = Tt();
            return e = {
                current: e
            }, t.memoizedState = e
        },
        useState: af,
        useDebugValue: Ac,
        useDeferredValue: function(e) {
            return Tt().memoizedState = e
        },
        useTransition: function() {
            var e = af(!1),
                t = e[0];
            return e = Ax.bind(null, e[1]), Tt().memoizedState = e, [t, e]
        },
        useMutableSource: function() {},
        useSyncExternalStore: function(e, t, n) {
            var r = fe,
                o = Tt();
            if (ce) {
                if (n === void 0) throw Error(j(407));
                n = n()
            } else {
                if (n = t(), Ce === null) throw Error(j(349));
                ar & 30 || Zh(r, t, n)
            }
            o.memoizedState = n;
            var s = {
                value: n,
                getSnapshot: t
            };
            return o.queue = s, lf(em.bind(null, r, s, e), [e]), r.flags |= 2048, ls(9, Jh.bind(null, r, s, n, t), void 0, null), n
        },
        useId: function() {
            var e = Tt(),
                t = Ce.identifierPrefix;
            if (ce) {
                var n = Yt,
                    r = Gt;
                n = (r & ~(1 << 32 - St(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = is++, 0 < n && (t += "H" + n.toString(32)), t += ":"
            } else n = Px++, t = ":" + t + "r" + n.toString(32) + ":";
            return e.memoizedState = t
        },
        unstable_isNewReconciler: !1
    },
    Ox = {
        readContext: lt,
        useCallback: lm,
        useContext: lt,
        useEffect: Pc,
        useImperativeHandle: am,
        useInsertionEffect: om,
        useLayoutEffect: sm,
        useMemo: um,
        useReducer: ml,
        useRef: rm,
        useState: function() {
            return ml(as)
        },
        useDebugValue: Ac,
        useDeferredValue: function(e) {
            var t = ut();
            return cm(t, xe.memoizedState, e)
        },
        useTransition: function() {
            var e = ml(as)[0],
                t = ut().memoizedState;
            return [e, t]
        },
        useMutableSource: qh,
        useSyncExternalStore: Xh,
        useId: dm,
        unstable_isNewReconciler: !1
    },
    Mx = {
        readContext: lt,
        useCallback: lm,
        useContext: lt,
        useEffect: Pc,
        useImperativeHandle: am,
        useInsertionEffect: om,
        useLayoutEffect: sm,
        useMemo: um,
        useReducer: vl,
        useRef: rm,
        useState: function() {
            return vl(as)
        },
        useDebugValue: Ac,
        useDeferredValue: function(e) {
            var t = ut();
            return xe === null ? t.memoizedState = e : cm(t, xe.memoizedState, e)
        },
        useTransition: function() {
            var e = vl(as)[0],
                t = ut().memoizedState;
            return [e, t]
        },
        useMutableSource: qh,
        useSyncExternalStore: Xh,
        useId: dm,
        unstable_isNewReconciler: !1
    };

function mt(e, t) {
    if (e && e.defaultProps) {
        t = pe({}, t), e = e.defaultProps;
        for (var n in e) t[n] === void 0 && (t[n] = e[n]);
        return t
    }
    return t
}

function du(e, t, n, r) {
    t = e.memoizedState, n = n(r, t), n = n == null ? t : pe({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n)
}
var pa = {
    isMounted: function(e) {
        return (e = e._reactInternals) ? pr(e) === e : !1
    },
    enqueueSetState: function(e, t, n) {
        e = e._reactInternals;
        var r = Le(),
            o = Dn(e),
            s = qt(r, o);
        s.payload = t, n != null && (s.callback = n), t = On(e, s, o), t !== null && (Ct(t, e, o, r), ui(t, e, o))
    },
    enqueueReplaceState: function(e, t, n) {
        e = e._reactInternals;
        var r = Le(),
            o = Dn(e),
            s = qt(r, o);
        s.tag = 1, s.payload = t, n != null && (s.callback = n), t = On(e, s, o), t !== null && (Ct(t, e, o, r), ui(t, e, o))
    },
    enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var n = Le(),
            r = Dn(e),
            o = qt(n, r);
        o.tag = 2, t != null && (o.callback = t), t = On(e, o, r), t !== null && (Ct(t, e, r, n), ui(t, e, r))
    }
};

function uf(e, t, n, r, o, s, i) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, s, i) : t.prototype && t.prototype.isPureReactComponent ? !es(n, r) || !es(o, s) : !0
}

function mm(e, t, n) {
    var r = !1,
        o = Ln,
        s = t.contextType;
    return typeof s == "object" && s !== null ? s = lt(s) : (o = We(t) ? sr : Me.current, r = t.contextTypes, s = (r = r != null) ? ro(e, o) : Ln), t = new t(n, s), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = pa, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = s), t
}

function cf(e, t, n, r) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && pa.enqueueReplaceState(t, t.state, null)
}

function fu(e, t, n, r) {
    var o = e.stateNode;
    o.props = n, o.state = e.memoizedState, o.refs = {}, wc(e);
    var s = t.contextType;
    typeof s == "object" && s !== null ? o.context = lt(s) : (s = We(t) ? sr : Me.current, o.context = ro(e, s)), o.state = e.memoizedState, s = t.getDerivedStateFromProps, typeof s == "function" && (du(e, t, s, n), o.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && pa.enqueueReplaceState(o, o.state, null), zi(e, n, o, r), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308)
}

function ao(e, t) {
    try {
        var n = "",
            r = t;
        do n += a0(r), r = r.return; while (r);
        var o = n
    } catch (s) {
        o = `
Error generating stack: ` + s.message + `
` + s.stack
    }
    return {
        value: e,
        source: t,
        stack: o,
        digest: null
    }
}

function gl(e, t, n) {
    return {
        value: e,
        source: null,
        stack: n ? ? null,
        digest: t ? ? null
    }
}

function pu(e, t) {
    try {
        console.error(t.value)
    } catch (n) {
        setTimeout(function() {
            throw n
        })
    }
}
var Dx = typeof WeakMap == "function" ? WeakMap : Map;

function vm(e, t, n) {
    n = qt(-1, n), n.tag = 3, n.payload = {
        element: null
    };
    var r = t.value;
    return n.callback = function() {
        Hi || (Hi = !0, Eu = r), pu(e, t)
    }, n
}

function gm(e, t, n) {
    n = qt(-1, n), n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var o = t.value;
        n.payload = function() {
            return r(o)
        }, n.callback = function() {
            pu(e, t)
        }
    }
    var s = e.stateNode;
    return s !== null && typeof s.componentDidCatch == "function" && (n.callback = function() {
        pu(e, t), typeof r != "function" && (Mn === null ? Mn = new Set([this]) : Mn.add(this));
        var i = t.stack;
        this.componentDidCatch(t.value, {
            componentStack: i !== null ? i : ""
        })
    }), n
}

function df(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new Dx;
        var o = new Set;
        r.set(t, o)
    } else o = r.get(t), o === void 0 && (o = new Set, r.set(t, o));
    o.has(n) || (o.add(n), e = Gx.bind(null, e, t, n), t.then(e, e))
}

function ff(e) {
    do {
        var t;
        if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
        e = e.return
    } while (e !== null);
    return null
}

function pf(e, t, n, r, o) {
    return e.mode & 1 ? (e.flags |= 65536, e.lanes = o, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = qt(-1, 1), t.tag = 2, On(n, t, 1))), n.lanes |= 1), e)
}
var Ix = rn.ReactCurrentOwner,
    Ve = !1;

function Ie(e, t, n, r) {
    t.child = e === null ? Qh(t, null, n, r) : so(t, e.child, n, r)
}

function hf(e, t, n, r, o) {
    n = n.render;
    var s = t.ref;
    return Ur(t, o), r = kc(e, t, n, r, s, o), n = Nc(), e !== null && !Ve ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, en(e, t, o)) : (ce && n && pc(t), t.flags |= 1, Ie(e, t, r, o), t.child)
}

function mf(e, t, n, r, o) {
    if (e === null) {
        var s = n.type;
        return typeof s == "function" && !_c(s) && s.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = s, ym(e, t, s, r, o)) : (e = mi(n.type, null, r, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e)
    }
    if (s = e.child, !(e.lanes & o)) {
        var i = s.memoizedProps;
        if (n = n.compare, n = n !== null ? n : es, n(i, r) && e.ref === t.ref) return en(e, t, o)
    }
    return t.flags |= 1, e = In(s, r), e.ref = t.ref, e.return = t, t.child = e
}

function ym(e, t, n, r, o) {
    if (e !== null) {
        var s = e.memoizedProps;
        if (es(s, r) && e.ref === t.ref)
            if (Ve = !1, t.pendingProps = r = s, (e.lanes & o) !== 0) e.flags & 131072 && (Ve = !0);
            else return t.lanes = e.lanes, en(e, t, o)
    }
    return hu(e, t, n, r, o)
}

function xm(e, t, n) {
    var r = t.pendingProps,
        o = r.children,
        s = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if (!(t.mode & 1)) t.memoizedState = {
            baseLanes: 0,
            cachePool: null,
            transitions: null
        }, oe(Lr, Ge), Ge |= n;
        else {
            if (!(n & 1073741824)) return e = s !== null ? s.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
                baseLanes: e,
                cachePool: null,
                transitions: null
            }, t.updateQueue = null, oe(Lr, Ge), Ge |= e, null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            }, r = s !== null ? s.baseLanes : n, oe(Lr, Ge), Ge |= r
        }
    else s !== null ? (r = s.baseLanes | n, t.memoizedState = null) : r = n, oe(Lr, Ge), Ge |= r;
    return Ie(e, t, o, n), t.child
}

function wm(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152)
}

function hu(e, t, n, r, o) {
    var s = We(n) ? sr : Me.current;
    return s = ro(t, s), Ur(t, o), n = kc(e, t, n, r, s, o), r = Nc(), e !== null && !Ve ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, en(e, t, o)) : (ce && r && pc(t), t.flags |= 1, Ie(e, t, n, o), t.child)
}

function vf(e, t, n, r, o) {
    if (We(n)) {
        var s = !0;
        Di(t)
    } else s = !1;
    if (Ur(t, o), t.stateNode === null) fi(e, t), mm(t, n, r), fu(t, n, r, o), r = !0;
    else if (e === null) {
        var i = t.stateNode,
            a = t.memoizedProps;
        i.props = a;
        var l = i.context,
            u = n.contextType;
        typeof u == "object" && u !== null ? u = lt(u) : (u = We(n) ? sr : Me.current, u = ro(t, u));
        var d = n.getDerivedStateFromProps,
            f = typeof d == "function" || typeof i.getSnapshotBeforeUpdate == "function";
        f || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (a !== r || l !== u) && cf(t, i, r, u), gn = !1;
        var v = t.memoizedState;
        i.state = v, zi(t, r, i, o), l = t.memoizedState, a !== r || v !== l || He.current || gn ? (typeof d == "function" && (du(t, n, d, r), l = t.memoizedState), (a = gn || uf(t, n, a, r, v, l, u)) ? (f || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = l), i.props = r, i.state = l, i.context = u, r = a) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), r = !1)
    } else {
        i = t.stateNode, Gh(e, t), a = t.memoizedProps, u = t.type === t.elementType ? a : mt(t.type, a), i.props = u, f = t.pendingProps, v = i.context, l = n.contextType, typeof l == "object" && l !== null ? l = lt(l) : (l = We(n) ? sr : Me.current, l = ro(t, l));
        var p = n.getDerivedStateFromProps;
        (d = typeof p == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (a !== f || v !== l) && cf(t, i, r, l), gn = !1, v = t.memoizedState, i.state = v, zi(t, r, i, o);
        var S = t.memoizedState;
        a !== f || v !== S || He.current || gn ? (typeof p == "function" && (du(t, n, p, r), S = t.memoizedState), (u = gn || uf(t, n, u, r, v, S, l) || !1) ? (d || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(r, S, l), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(r, S, l)), typeof i.componentDidUpdate == "function" && (t.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || a === e.memoizedProps && v === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && v === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = S), i.props = r, i.state = S, i.context = l, r = u) : (typeof i.componentDidUpdate != "function" || a === e.memoizedProps && v === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && v === e.memoizedState || (t.flags |= 1024), r = !1)
    }
    return mu(e, t, n, r, s, o)
}

function mu(e, t, n, r, o, s) {
    wm(e, t);
    var i = (t.flags & 128) !== 0;
    if (!r && !i) return o && ef(t, n, !1), en(e, t, s);
    r = t.stateNode, Ix.current = t;
    var a = i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1, e !== null && i ? (t.child = so(t, e.child, null, s), t.child = so(t, null, a, s)) : Ie(e, t, a, s), t.memoizedState = r.state, o && ef(t, n, !0), t.child
}

function Sm(e) {
    var t = e.stateNode;
    t.pendingContext ? Jd(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Jd(e, t.context, !1), Sc(e, t.containerInfo)
}

function gf(e, t, n, r, o) {
    return oo(), mc(o), t.flags |= 256, Ie(e, t, n, r), t.child
}
var vu = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};

function gu(e) {
    return {
        baseLanes: e,
        cachePool: null,
        transitions: null
    }
}

function Cm(e, t, n) {
    var r = t.pendingProps,
        o = de.current,
        s = !1,
        i = (t.flags & 128) !== 0,
        a;
    if ((a = i) || (a = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0), a ? (s = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1), oe(de, o & 1), e === null) return uu(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (i = r.children, e = r.fallback, s ? (r = t.mode, s = t.child, i = {
        mode: "hidden",
        children: i
    }, !(r & 1) && s !== null ? (s.childLanes = 0, s.pendingProps = i) : s = va(i, r, 0, null), e = or(e, r, n, null), s.return = t, e.return = t, s.sibling = e, t.child = s, t.child.memoizedState = gu(n), t.memoizedState = vu, e) : Tc(t, i));
    if (o = e.memoizedState, o !== null && (a = o.dehydrated, a !== null)) return _x(e, t, i, r, a, o, n);
    if (s) {
        s = r.fallback, i = t.mode, o = e.child, a = o.sibling;
        var l = {
            mode: "hidden",
            children: r.children
        };
        return !(i & 1) && t.child !== o ? (r = t.child, r.childLanes = 0, r.pendingProps = l, t.deletions = null) : (r = In(o, l), r.subtreeFlags = o.subtreeFlags & 14680064), a !== null ? s = In(a, s) : (s = or(s, i, n, null), s.flags |= 2), s.return = t, r.return = t, r.sibling = s, t.child = r, r = s, s = t.child, i = e.child.memoizedState, i = i === null ? gu(n) : {
            baseLanes: i.baseLanes | n,
            cachePool: null,
            transitions: i.transitions
        }, s.memoizedState = i, s.childLanes = e.childLanes & ~n, t.memoizedState = vu, r
    }
    return s = e.child, e = s.sibling, r = In(s, {
        mode: "visible",
        children: r.children
    }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r
}

function Tc(e, t) {
    return t = va({
        mode: "visible",
        children: t
    }, e.mode, 0, null), t.return = e, e.child = t
}

function Hs(e, t, n, r) {
    return r !== null && mc(r), so(t, e.child, null, n), e = Tc(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e
}

function _x(e, t, n, r, o, s, i) {
    if (n) return t.flags & 256 ? (t.flags &= -257, r = gl(Error(j(422))), Hs(e, t, i, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (s = r.fallback, o = t.mode, r = va({
        mode: "visible",
        children: r.children
    }, o, 0, null), s = or(s, o, i, null), s.flags |= 2, r.return = t, s.return = t, r.sibling = s, t.child = r, t.mode & 1 && so(t, e.child, null, i), t.child.memoizedState = gu(i), t.memoizedState = vu, s);
    if (!(t.mode & 1)) return Hs(e, t, i, null);
    if (o.data === "$!") {
        if (r = o.nextSibling && o.nextSibling.dataset, r) var a = r.dgst;
        return r = a, s = Error(j(419)), r = gl(s, r, void 0), Hs(e, t, i, r)
    }
    if (a = (i & e.childLanes) !== 0, Ve || a) {
        if (r = Ce, r !== null) {
            switch (i & -i) {
                case 4:
                    o = 2;
                    break;
                case 16:
                    o = 8;
                    break;
                case 64:
                case 128:
                case 256:
                case 512:
                case 1024:
                case 2048:
                case 4096:
                case 8192:
                case 16384:
                case 32768:
                case 65536:
                case 131072:
                case 262144:
                case 524288:
                case 1048576:
                case 2097152:
                case 4194304:
                case 8388608:
                case 16777216:
                case 33554432:
                case 67108864:
                    o = 32;
                    break;
                case 536870912:
                    o = 268435456;
                    break;
                default:
                    o = 0
            }
            o = o & (r.suspendedLanes | i) ? 0 : o, o !== 0 && o !== s.retryLane && (s.retryLane = o, Jt(e, o), Ct(r, e, o, -1))
        }
        return Ic(), r = gl(Error(j(421))), Hs(e, t, i, r)
    }
    return o.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Yx.bind(null, e), o._reactRetry = t, null) : (e = s.treeContext, qe = jn(o.nextSibling), Xe = t, ce = !0, wt = null, e !== null && (ot[st++] = Gt, ot[st++] = Yt, ot[st++] = ir, Gt = e.id, Yt = e.overflow, ir = t), t = Tc(t, r.children), t.flags |= 4096, t)
}

function yf(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), cu(e.return, t, n)
}

function yl(e, t, n, r, o) {
    var s = e.memoizedState;
    s === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o
    } : (s.isBackwards = t, s.rendering = null, s.renderingStartTime = 0, s.last = r, s.tail = n, s.tailMode = o)
}

function Em(e, t, n) {
    var r = t.pendingProps,
        o = r.revealOrder,
        s = r.tail;
    if (Ie(e, t, r.children, n), r = de.current, r & 2) r = r & 1 | 2, t.flags |= 128;
    else {
        if (e !== null && e.flags & 128) e: for (e = t.child; e !== null;) {
            if (e.tag === 13) e.memoizedState !== null && yf(e, n, t);
            else if (e.tag === 19) yf(e, n, t);
            else if (e.child !== null) {
                e.child.return = e, e = e.child;
                continue
            }
            if (e === t) break e;
            for (; e.sibling === null;) {
                if (e.return === null || e.return === t) break e;
                e = e.return
            }
            e.sibling.return = e.return, e = e.sibling
        }
        r &= 1
    }
    if (oe(de, r), !(t.mode & 1)) t.memoizedState = null;
    else switch (o) {
        case "forwards":
            for (n = t.child, o = null; n !== null;) e = n.alternate, e !== null && $i(e) === null && (o = n), n = n.sibling;
            n = o, n === null ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), yl(t, !1, o, n, s);
            break;
        case "backwards":
            for (n = null, o = t.child, t.child = null; o !== null;) {
                if (e = o.alternate, e !== null && $i(e) === null) {
                    t.child = o;
                    break
                }
                e = o.sibling, o.sibling = n, n = o, o = e
            }
            yl(t, !0, n, null, s);
            break;
        case "together":
            yl(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
    }
    return t.child
}

function fi(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2)
}

function en(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), lr |= t.lanes, !(n & t.childLanes)) return null;
    if (e !== null && t.child !== e.child) throw Error(j(153));
    if (t.child !== null) {
        for (e = t.child, n = In(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;) e = e.sibling, n = n.sibling = In(e, e.pendingProps), n.return = t;
        n.sibling = null
    }
    return t.child
}

function Lx(e, t, n) {
    switch (t.tag) {
        case 3:
            Sm(t), oo();
            break;
        case 5:
            Yh(t);
            break;
        case 1:
            We(t.type) && Di(t);
            break;
        case 4:
            Sc(t, t.stateNode.containerInfo);
            break;
        case 10:
            var r = t.type._context,
                o = t.memoizedProps.value;
            oe(Li, r._currentValue), r._currentValue = o;
            break;
        case 13:
            if (r = t.memoizedState, r !== null) return r.dehydrated !== null ? (oe(de, de.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Cm(e, t, n) : (oe(de, de.current & 1), e = en(e, t, n), e !== null ? e.sibling : null);
            oe(de, de.current & 1);
            break;
        case 19:
            if (r = (n & t.childLanes) !== 0, e.flags & 128) {
                if (r) return Em(e, t, n);
                t.flags |= 128
            }
            if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), oe(de, de.current), r) break;
            return null;
        case 22:
        case 23:
            return t.lanes = 0, xm(e, t, n)
    }
    return en(e, t, n)
}
var bm, yu, km, Nm;
bm = function(e, t) {
    for (var n = t.child; n !== null;) {
        if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            n.child.return = n, n = n.child;
            continue
        }
        if (n === t) break;
        for (; n.sibling === null;) {
            if (n.return === null || n.return === t) return;
            n = n.return
        }
        n.sibling.return = n.return, n = n.sibling
    }
};
yu = function() {};
km = function(e, t, n, r) {
    var o = e.memoizedProps;
    if (o !== r) {
        e = t.stateNode, qn(Lt.current);
        var s = null;
        switch (n) {
            case "input":
                o = $l(e, o), r = $l(e, r), s = [];
                break;
            case "select":
                o = pe({}, o, {
                    value: void 0
                }), r = pe({}, r, {
                    value: void 0
                }), s = [];
                break;
            case "textarea":
                o = Vl(e, o), r = Vl(e, r), s = [];
                break;
            default:
                typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Oi)
        }
        Wl(n, r);
        var i;
        n = null;
        for (u in o)
            if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
                if (u === "style") {
                    var a = o[u];
                    for (i in a) a.hasOwnProperty(i) && (n || (n = {}), n[i] = "")
                } else u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (Ko.hasOwnProperty(u) ? s || (s = []) : (s = s || []).push(u, null));
        for (u in r) {
            var l = r[u];
            if (a = o != null ? o[u] : void 0, r.hasOwnProperty(u) && l !== a && (l != null || a != null))
                if (u === "style")
                    if (a) {
                        for (i in a) !a.hasOwnProperty(i) || l && l.hasOwnProperty(i) || (n || (n = {}), n[i] = "");
                        for (i in l) l.hasOwnProperty(i) && a[i] !== l[i] && (n || (n = {}), n[i] = l[i])
                    } else n || (s || (s = []), s.push(u, n)), n = l;
            else u === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, a = a ? a.__html : void 0, l != null && a !== l && (s = s || []).push(u, l)) : u === "children" ? typeof l != "string" && typeof l != "number" || (s = s || []).push(u, "" + l) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (Ko.hasOwnProperty(u) ? (l != null && u === "onScroll" && ie("scroll", e), s || a === l || (s = [])) : (s = s || []).push(u, l))
        }
        n && (s = s || []).push("style", n);
        var u = s;
        (t.updateQueue = u) && (t.flags |= 4)
    }
};
Nm = function(e, t, n, r) {
    n !== r && (t.flags |= 4)
};

function No(e, t) {
    if (!ce) switch (e.tailMode) {
        case "hidden":
            t = e.tail;
            for (var n = null; t !== null;) t.alternate !== null && (n = t), t = t.sibling;
            n === null ? e.tail = null : n.sibling = null;
            break;
        case "collapsed":
            n = e.tail;
            for (var r = null; n !== null;) n.alternate !== null && (r = n), n = n.sibling;
            r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
    }
}

function Re(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
        n = 0,
        r = 0;
    if (t)
        for (var o = e.child; o !== null;) n |= o.lanes | o.childLanes, r |= o.subtreeFlags & 14680064, r |= o.flags & 14680064, o.return = e, o = o.sibling;
    else
        for (o = e.child; o !== null;) n |= o.lanes | o.childLanes, r |= o.subtreeFlags, r |= o.flags, o.return = e, o = o.sibling;
    return e.subtreeFlags |= r, e.childLanes = n, t
}

function Fx(e, t, n) {
    var r = t.pendingProps;
    switch (hc(t), t.tag) {
        case 2:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
            return Re(t), null;
        case 1:
            return We(t.type) && Mi(), Re(t), null;
        case 3:
            return r = t.stateNode, io(), ae(He), ae(Me), Ec(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Us(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, wt !== null && (Nu(wt), wt = null))), yu(e, t), Re(t), null;
        case 5:
            Cc(t);
            var o = qn(ss.current);
            if (n = t.type, e !== null && t.stateNode != null) km(e, t, n, r, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
            else {
                if (!r) {
                    if (t.stateNode === null) throw Error(j(166));
                    return Re(t), null
                }
                if (e = qn(Lt.current), Us(t)) {
                    r = t.stateNode, n = t.type;
                    var s = t.memoizedProps;
                    switch (r[Mt] = t, r[rs] = s, e = (t.mode & 1) !== 0, n) {
                        case "dialog":
                            ie("cancel", r), ie("close", r);
                            break;
                        case "iframe":
                        case "object":
                        case "embed":
                            ie("load", r);
                            break;
                        case "video":
                        case "audio":
                            for (o = 0; o < Mo.length; o++) ie(Mo[o], r);
                            break;
                        case "source":
                            ie("error", r);
                            break;
                        case "img":
                        case "image":
                        case "link":
                            ie("error", r), ie("load", r);
                            break;
                        case "details":
                            ie("toggle", r);
                            break;
                        case "input":
                            Nd(r, s), ie("invalid", r);
                            break;
                        case "select":
                            r._wrapperState = {
                                wasMultiple: !!s.multiple
                            }, ie("invalid", r);
                            break;
                        case "textarea":
                            Ad(r, s), ie("invalid", r)
                    }
                    Wl(n, s), o = null;
                    for (var i in s)
                        if (s.hasOwnProperty(i)) {
                            var a = s[i];
                            i === "children" ? typeof a == "string" ? r.textContent !== a && (s.suppressHydrationWarning !== !0 && Bs(r.textContent, a, e), o = ["children", a]) : typeof a == "number" && r.textContent !== "" + a && (s.suppressHydrationWarning !== !0 && Bs(r.textContent, a, e), o = ["children", "" + a]) : Ko.hasOwnProperty(i) && a != null && i === "onScroll" && ie("scroll", r)
                        }
                    switch (n) {
                        case "input":
                            Ms(r), Pd(r, s, !0);
                            break;
                        case "textarea":
                            Ms(r), Td(r);
                            break;
                        case "select":
                        case "option":
                            break;
                        default:
                            typeof s.onClick == "function" && (r.onclick = Oi)
                    }
                    r = o, t.updateQueue = r, r !== null && (t.flags |= 4)
                } else {
                    i = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = eh(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = i.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = i.createElement(n, {
                        is: r.is
                    }) : (e = i.createElement(n), n === "select" && (i = e, r.multiple ? i.multiple = !0 : r.size && (i.size = r.size))) : e = i.createElementNS(e, n), e[Mt] = t, e[rs] = r, bm(e, t, !1, !1), t.stateNode = e;
                    e: {
                        switch (i = Ql(n, r), n) {
                            case "dialog":
                                ie("cancel", e), ie("close", e), o = r;
                                break;
                            case "iframe":
                            case "object":
                            case "embed":
                                ie("load", e), o = r;
                                break;
                            case "video":
                            case "audio":
                                for (o = 0; o < Mo.length; o++) ie(Mo[o], e);
                                o = r;
                                break;
                            case "source":
                                ie("error", e), o = r;
                                break;
                            case "img":
                            case "image":
                            case "link":
                                ie("error", e), ie("load", e), o = r;
                                break;
                            case "details":
                                ie("toggle", e), o = r;
                                break;
                            case "input":
                                Nd(e, r), o = $l(e, r), ie("invalid", e);
                                break;
                            case "option":
                                o = r;
                                break;
                            case "select":
                                e._wrapperState = {
                                    wasMultiple: !!r.multiple
                                }, o = pe({}, r, {
                                    value: void 0
                                }), ie("invalid", e);
                                break;
                            case "textarea":
                                Ad(e, r), o = Vl(e, r), ie("invalid", e);
                                break;
                            default:
                                o = r
                        }
                        Wl(n, o),
                        a = o;
                        for (s in a)
                            if (a.hasOwnProperty(s)) {
                                var l = a[s];
                                s === "style" ? rh(e, l) : s === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, l != null && th(e, l)) : s === "children" ? typeof l == "string" ? (n !== "textarea" || l !== "") && Go(e, l) : typeof l == "number" && Go(e, "" + l) : s !== "suppressContentEditableWarning" && s !== "suppressHydrationWarning" && s !== "autoFocus" && (Ko.hasOwnProperty(s) ? l != null && s === "onScroll" && ie("scroll", e) : l != null && Ju(e, s, l, i))
                            }
                        switch (n) {
                            case "input":
                                Ms(e), Pd(e, r, !1);
                                break;
                            case "textarea":
                                Ms(e), Td(e);
                                break;
                            case "option":
                                r.value != null && e.setAttribute("value", "" + _n(r.value));
                                break;
                            case "select":
                                e.multiple = !!r.multiple, s = r.value, s != null ? Fr(e, !!r.multiple, s, !1) : r.defaultValue != null && Fr(e, !!r.multiple, r.defaultValue, !0);
                                break;
                            default:
                                typeof o.onClick == "function" && (e.onclick = Oi)
                        }
                        switch (n) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                r = !!r.autoFocus;
                                break e;
                            case "img":
                                r = !0;
                                break e;
                            default:
                                r = !1
                        }
                    }
                    r && (t.flags |= 4)
                }
                t.ref !== null && (t.flags |= 512, t.flags |= 2097152)
            }
            return Re(t), null;
        case 6:
            if (e && t.stateNode != null) Nm(e, t, e.memoizedProps, r);
            else {
                if (typeof r != "string" && t.stateNode === null) throw Error(j(166));
                if (n = qn(ss.current), qn(Lt.current), Us(t)) {
                    if (r = t.stateNode, n = t.memoizedProps, r[Mt] = t, (s = r.nodeValue !== n) && (e = Xe, e !== null)) switch (e.tag) {
                        case 3:
                            Bs(r.nodeValue, n, (e.mode & 1) !== 0);
                            break;
                        case 5:
                            e.memoizedProps.suppressHydrationWarning !== !0 && Bs(r.nodeValue, n, (e.mode & 1) !== 0)
                    }
                    s && (t.flags |= 4)
                } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Mt] = t, t.stateNode = r
            }
            return Re(t), null;
        case 13:
            if (ae(de), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                if (ce && qe !== null && t.mode & 1 && !(t.flags & 128)) Hh(), oo(), t.flags |= 98560, s = !1;
                else if (s = Us(t), r !== null && r.dehydrated !== null) {
                    if (e === null) {
                        if (!s) throw Error(j(318));
                        if (s = t.memoizedState, s = s !== null ? s.dehydrated : null, !s) throw Error(j(317));
                        s[Mt] = t
                    } else oo(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
                    Re(t), s = !1
                } else wt !== null && (Nu(wt), wt = null), s = !0;
                if (!s) return t.flags & 65536 ? t : null
            }
            return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || de.current & 1 ? we === 0 && (we = 3) : Ic())), t.updateQueue !== null && (t.flags |= 4), Re(t), null);
        case 4:
            return io(), yu(e, t), e === null && ts(t.stateNode.containerInfo), Re(t), null;
        case 10:
            return yc(t.type._context), Re(t), null;
        case 17:
            return We(t.type) && Mi(), Re(t), null;
        case 19:
            if (ae(de), s = t.memoizedState, s === null) return Re(t), null;
            if (r = (t.flags & 128) !== 0, i = s.rendering, i === null)
                if (r) No(s, !1);
                else {
                    if (we !== 0 || e !== null && e.flags & 128)
                        for (e = t.child; e !== null;) {
                            if (i = $i(e), i !== null) {
                                for (t.flags |= 128, No(s, !1), r = i.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null;) s = n, e = r, s.flags &= 14680066, i = s.alternate, i === null ? (s.childLanes = 0, s.lanes = e, s.child = null, s.subtreeFlags = 0, s.memoizedProps = null, s.memoizedState = null, s.updateQueue = null, s.dependencies = null, s.stateNode = null) : (s.childLanes = i.childLanes, s.lanes = i.lanes, s.child = i.child, s.subtreeFlags = 0, s.deletions = null, s.memoizedProps = i.memoizedProps, s.memoizedState = i.memoizedState, s.updateQueue = i.updateQueue, s.type = i.type, e = i.dependencies, s.dependencies = e === null ? null : {
                                    lanes: e.lanes,
                                    firstContext: e.firstContext
                                }), n = n.sibling;
                                return oe(de, de.current & 1 | 2), t.child
                            }
                            e = e.sibling
                        }
                    s.tail !== null && ve() > lo && (t.flags |= 128, r = !0, No(s, !1), t.lanes = 4194304)
                }
            else {
                if (!r)
                    if (e = $i(i), e !== null) {
                        if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), No(s, !0), s.tail === null && s.tailMode === "hidden" && !i.alternate && !ce) return Re(t), null
                    } else 2 * ve() - s.renderingStartTime > lo && n !== 1073741824 && (t.flags |= 128, r = !0, No(s, !1), t.lanes = 4194304);
                s.isBackwards ? (i.sibling = t.child, t.child = i) : (n = s.last, n !== null ? n.sibling = i : t.child = i, s.last = i)
            }
            return s.tail !== null ? (t = s.tail, s.rendering = t, s.tail = t.sibling, s.renderingStartTime = ve(), t.sibling = null, n = de.current, oe(de, r ? n & 1 | 2 : n & 1), t) : (Re(t), null);
        case 22:
        case 23:
            return Dc(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Ge & 1073741824 && (Re(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Re(t), null;
        case 24:
            return null;
        case 25:
            return null
    }
    throw Error(j(156, t.tag))
}

function zx(e, t) {
    switch (hc(t), t.tag) {
        case 1:
            return We(t.type) && Mi(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
        case 3:
            return io(), ae(He), ae(Me), Ec(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
        case 5:
            return Cc(t), null;
        case 13:
            if (ae(de), e = t.memoizedState, e !== null && e.dehydrated !== null) {
                if (t.alternate === null) throw Error(j(340));
                oo()
            }
            return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
        case 19:
            return ae(de), null;
        case 4:
            return io(), null;
        case 10:
            return yc(t.type._context), null;
        case 22:
        case 23:
            return Dc(), null;
        case 24:
            return null;
        default:
            return null
    }
}
var Ws = !1,
    Oe = !1,
    $x = typeof WeakSet == "function" ? WeakSet : Set,
    _ = null;

function _r(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function") try {
            n(null)
        } catch (r) {
            me(e, t, r)
        } else n.current = null
}

function xu(e, t, n) {
    try {
        n()
    } catch (r) {
        me(e, t, r)
    }
}
var xf = !1;

function Bx(e, t) {
    if (nu = Ti, e = jh(), fc(e)) {
        if ("selectionStart" in e) var n = {
            start: e.selectionStart,
            end: e.selectionEnd
        };
        else e: {
            n = (n = e.ownerDocument) && n.defaultView || window;
            var r = n.getSelection && n.getSelection();
            if (r && r.rangeCount !== 0) {
                n = r.anchorNode;
                var o = r.anchorOffset,
                    s = r.focusNode;
                r = r.focusOffset;
                try {
                    n.nodeType, s.nodeType
                } catch {
                    n = null;
                    break e
                }
                var i = 0,
                    a = -1,
                    l = -1,
                    u = 0,
                    d = 0,
                    f = e,
                    v = null;
                t: for (;;) {
                    for (var p; f !== n || o !== 0 && f.nodeType !== 3 || (a = i + o), f !== s || r !== 0 && f.nodeType !== 3 || (l = i + r), f.nodeType === 3 && (i += f.nodeValue.length), (p = f.firstChild) !== null;) v = f, f = p;
                    for (;;) {
                        if (f === e) break t;
                        if (v === n && ++u === o && (a = i), v === s && ++d === r && (l = i), (p = f.nextSibling) !== null) break;
                        f = v, v = f.parentNode
                    }
                    f = p
                }
                n = a === -1 || l === -1 ? null : {
                    start: a,
                    end: l
                }
            } else n = null
        }
        n = n || {
            start: 0,
            end: 0
        }
    } else n = null;
    for (ru = {
            focusedElem: e,
            selectionRange: n
        }, Ti = !1, _ = t; _ !== null;)
        if (t = _, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, _ = e;
        else
            for (; _ !== null;) {
                t = _;
                try {
                    var S = t.alternate;
                    if (t.flags & 1024) switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (S !== null) {
                                var m = S.memoizedProps,
                                    w = S.memoizedState,
                                    g = t.stateNode,
                                    h = g.getSnapshotBeforeUpdate(t.elementType === t.type ? m : mt(t.type, m), w);
                                g.__reactInternalSnapshotBeforeUpdate = h
                            }
                            break;
                        case 3:
                            var x = t.stateNode.containerInfo;
                            x.nodeType === 1 ? x.textContent = "" : x.nodeType === 9 && x.documentElement && x.removeChild(x.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(j(163))
                    }
                } catch (C) {
                    me(t, t.return, C)
                }
                if (e = t.sibling, e !== null) {
                    e.return = t.return, _ = e;
                    break
                }
                _ = t.return
            }
    return S = xf, xf = !1, S
}

function Bo(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null, r !== null) {
        var o = r = r.next;
        do {
            if ((o.tag & e) === e) {
                var s = o.destroy;
                o.destroy = void 0, s !== void 0 && xu(t, n, s)
            }
            o = o.next
        } while (o !== r)
    }
}

function ha(e, t) {
    if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
        var n = t = t.next;
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r()
            }
            n = n.next
        } while (n !== t)
    }
}

function wu(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
            case 5:
                e = n;
                break;
            default:
                e = n
        }
        typeof t == "function" ? t(e) : t.current = e
    }
}

function Pm(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, Pm(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Mt], delete t[rs], delete t[iu], delete t[Ex], delete t[bx])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null
}

function Am(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}

function wf(e) {
    e: for (;;) {
        for (; e.sibling === null;) {
            if (e.return === null || Am(e.return)) return null;
            e = e.return
        }
        for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
            if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
            e.child.return = e, e = e.child
        }
        if (!(e.flags & 2)) return e.stateNode
    }
}

function Su(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Oi));
    else if (r !== 4 && (e = e.child, e !== null))
        for (Su(e, t, n), e = e.sibling; e !== null;) Su(e, t, n), e = e.sibling
}

function Cu(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child, e !== null))
        for (Cu(e, t, n), e = e.sibling; e !== null;) Cu(e, t, n), e = e.sibling
}
var Ee = null,
    xt = !1;

function dn(e, t, n) {
    for (n = n.child; n !== null;) Tm(e, t, n), n = n.sibling
}

function Tm(e, t, n) {
    if (_t && typeof _t.onCommitFiberUnmount == "function") try {
        _t.onCommitFiberUnmount(ia, n)
    } catch {}
    switch (n.tag) {
        case 5:
            Oe || _r(n, t);
        case 6:
            var r = Ee,
                o = xt;
            Ee = null, dn(e, t, n), Ee = r, xt = o, Ee !== null && (xt ? (e = Ee, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Ee.removeChild(n.stateNode));
            break;
        case 18:
            Ee !== null && (xt ? (e = Ee, n = n.stateNode, e.nodeType === 8 ? dl(e.parentNode, n) : e.nodeType === 1 && dl(e, n), Zo(e)) : dl(Ee, n.stateNode));
            break;
        case 4:
            r = Ee, o = xt, Ee = n.stateNode.containerInfo, xt = !0, dn(e, t, n), Ee = r, xt = o;
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            if (!Oe && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
                o = r = r.next;
                do {
                    var s = o,
                        i = s.destroy;
                    s = s.tag, i !== void 0 && (s & 2 || s & 4) && xu(n, t, i), o = o.next
                } while (o !== r)
            }
            dn(e, t, n);
            break;
        case 1:
            if (!Oe && (_r(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
                r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount()
            } catch (a) {
                me(n, t, a)
            }
            dn(e, t, n);
            break;
        case 21:
            dn(e, t, n);
            break;
        case 22:
            n.mode & 1 ? (Oe = (r = Oe) || n.memoizedState !== null, dn(e, t, n), Oe = r) : dn(e, t, n);
            break;
        default:
            dn(e, t, n)
    }
}

function Sf(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new $x), t.forEach(function(r) {
            var o = qx.bind(null, e, r);
            n.has(r) || (n.add(r), r.then(o, o))
        })
    }
}

function pt(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var o = n[r];
            try {
                var s = e,
                    i = t,
                    a = i;
                e: for (; a !== null;) {
                    switch (a.tag) {
                        case 5:
                            Ee = a.stateNode, xt = !1;
                            break e;
                        case 3:
                            Ee = a.stateNode.containerInfo, xt = !0;
                            break e;
                        case 4:
                            Ee = a.stateNode.containerInfo, xt = !0;
                            break e
                    }
                    a = a.return
                }
                if (Ee === null) throw Error(j(160));
                Tm(s, i, o), Ee = null, xt = !1;
                var l = o.alternate;
                l !== null && (l.return = null), o.return = null
            } catch (u) {
                me(o, t, u)
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null;) Rm(t, e), t = t.sibling
}

function Rm(e, t) {
    var n = e.alternate,
        r = e.flags;
    switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            if (pt(t, e), At(e), r & 4) {
                try {
                    Bo(3, e, e.return), ha(3, e)
                } catch (m) {
                    me(e, e.return, m)
                }
                try {
                    Bo(5, e, e.return)
                } catch (m) {
                    me(e, e.return, m)
                }
            }
            break;
        case 1:
            pt(t, e), At(e), r & 512 && n !== null && _r(n, n.return);
            break;
        case 5:
            if (pt(t, e), At(e), r & 512 && n !== null && _r(n, n.return), e.flags & 32) {
                var o = e.stateNode;
                try {
                    Go(o, "")
                } catch (m) {
                    me(e, e.return, m)
                }
            }
            if (r & 4 && (o = e.stateNode, o != null)) {
                var s = e.memoizedProps,
                    i = n !== null ? n.memoizedProps : s,
                    a = e.type,
                    l = e.updateQueue;
                if (e.updateQueue = null, l !== null) try {
                    a === "input" && s.type === "radio" && s.name != null && Zp(o, s), Ql(a, i);
                    var u = Ql(a, s);
                    for (i = 0; i < l.length; i += 2) {
                        var d = l[i],
                            f = l[i + 1];
                        d === "style" ? rh(o, f) : d === "dangerouslySetInnerHTML" ? th(o, f) : d === "children" ? Go(o, f) : Ju(o, d, f, u)
                    }
                    switch (a) {
                        case "input":
                            Bl(o, s);
                            break;
                        case "textarea":
                            Jp(o, s);
                            break;
                        case "select":
                            var v = o._wrapperState.wasMultiple;
                            o._wrapperState.wasMultiple = !!s.multiple;
                            var p = s.value;
                            p != null ? Fr(o, !!s.multiple, p, !1) : v !== !!s.multiple && (s.defaultValue != null ? Fr(o, !!s.multiple, s.defaultValue, !0) : Fr(o, !!s.multiple, s.multiple ? [] : "", !1))
                    }
                    o[rs] = s
                } catch (m) {
                    me(e, e.return, m)
                }
            }
            break;
        case 6:
            if (pt(t, e), At(e), r & 4) {
                if (e.stateNode === null) throw Error(j(162));
                o = e.stateNode, s = e.memoizedProps;
                try {
                    o.nodeValue = s
                } catch (m) {
                    me(e, e.return, m)
                }
            }
            break;
        case 3:
            if (pt(t, e), At(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
                Zo(t.containerInfo)
            } catch (m) {
                me(e, e.return, m)
            }
            break;
        case 4:
            pt(t, e), At(e);
            break;
        case 13:
            pt(t, e), At(e), o = e.child, o.flags & 8192 && (s = o.memoizedState !== null, o.stateNode.isHidden = s, !s || o.alternate !== null && o.alternate.memoizedState !== null || (Oc = ve())), r & 4 && Sf(e);
            break;
        case 22:
            if (d = n !== null && n.memoizedState !== null, e.mode & 1 ? (Oe = (u = Oe) || d, pt(t, e), Oe = u) : pt(t, e), At(e), r & 8192) {
                if (u = e.memoizedState !== null, (e.stateNode.isHidden = u) && !d && e.mode & 1)
                    for (_ = e, d = e.child; d !== null;) {
                        for (f = _ = d; _ !== null;) {
                            switch (v = _, p = v.child, v.tag) {
                                case 0:
                                case 11:
                                case 14:
                                case 15:
                                    Bo(4, v, v.return);
                                    break;
                                case 1:
                                    _r(v, v.return);
                                    var S = v.stateNode;
                                    if (typeof S.componentWillUnmount == "function") {
                                        r = v, n = v.return;
                                        try {
                                            t = r, S.props = t.memoizedProps, S.state = t.memoizedState, S.componentWillUnmount()
                                        } catch (m) {
                                            me(r, n, m)
                                        }
                                    }
                                    break;
                                case 5:
                                    _r(v, v.return);
                                    break;
                                case 22:
                                    if (v.memoizedState !== null) {
                                        Ef(f);
                                        continue
                                    }
                            }
                            p !== null ? (p.return = v, _ = p) : Ef(f)
                        }
                        d = d.sibling
                    }
                e: for (d = null, f = e;;) {
                    if (f.tag === 5) {
                        if (d === null) {
                            d = f;
                            try {
                                o = f.stateNode, u ? (s = o.style, typeof s.setProperty == "function" ? s.setProperty("display", "none", "important") : s.display = "none") : (a = f.stateNode, l = f.memoizedProps.style, i = l != null && l.hasOwnProperty("display") ? l.display : null, a.style.display = nh("display", i))
                            } catch (m) {
                                me(e, e.return, m)
                            }
                        }
                    } else if (f.tag === 6) {
                        if (d === null) try {
                            f.stateNode.nodeValue = u ? "" : f.memoizedProps
                        } catch (m) {
                            me(e, e.return, m)
                        }
                    } else if ((f.tag !== 22 && f.tag !== 23 || f.memoizedState === null || f === e) && f.child !== null) {
                        f.child.return = f, f = f.child;
                        continue
                    }
                    if (f === e) break e;
                    for (; f.sibling === null;) {
                        if (f.return === null || f.return === e) break e;
                        d === f && (d = null), f = f.return
                    }
                    d === f && (d = null), f.sibling.return = f.return, f = f.sibling
                }
            }
            break;
        case 19:
            pt(t, e), At(e), r & 4 && Sf(e);
            break;
        case 21:
            break;
        default:
            pt(t, e), At(e)
    }
}

function At(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null;) {
                    if (Am(n)) {
                        var r = n;
                        break e
                    }
                    n = n.return
                }
                throw Error(j(160))
            }
            switch (r.tag) {
                case 5:
                    var o = r.stateNode;
                    r.flags & 32 && (Go(o, ""), r.flags &= -33);
                    var s = wf(e);
                    Cu(e, s, o);
                    break;
                case 3:
                case 4:
                    var i = r.stateNode.containerInfo,
                        a = wf(e);
                    Su(e, a, i);
                    break;
                default:
                    throw Error(j(161))
            }
        }
        catch (l) {
            me(e, e.return, l)
        }
        e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
}

function Ux(e, t, n) {
    _ = e, jm(e)
}

function jm(e, t, n) {
    for (var r = (e.mode & 1) !== 0; _ !== null;) {
        var o = _,
            s = o.child;
        if (o.tag === 22 && r) {
            var i = o.memoizedState !== null || Ws;
            if (!i) {
                var a = o.alternate,
                    l = a !== null && a.memoizedState !== null || Oe;
                a = Ws;
                var u = Oe;
                if (Ws = i, (Oe = l) && !u)
                    for (_ = o; _ !== null;) i = _, l = i.child, i.tag === 22 && i.memoizedState !== null ? bf(o) : l !== null ? (l.return = i, _ = l) : bf(o);
                for (; s !== null;) _ = s, jm(s), s = s.sibling;
                _ = o, Ws = a, Oe = u
            }
            Cf(e)
        } else o.subtreeFlags & 8772 && s !== null ? (s.return = o, _ = s) : Cf(e)
    }
}

function Cf(e) {
    for (; _ !== null;) {
        var t = _;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772) switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        Oe || ha(5, t);
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (t.flags & 4 && !Oe)
                            if (n === null) r.componentDidMount();
                            else {
                                var o = t.elementType === t.type ? n.memoizedProps : mt(t.type, n.memoizedProps);
                                r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                            }
                        var s = t.updateQueue;
                        s !== null && sf(t, s, r);
                        break;
                    case 3:
                        var i = t.updateQueue;
                        if (i !== null) {
                            if (n = null, t.child !== null) switch (t.child.tag) {
                                case 5:
                                    n = t.child.stateNode;
                                    break;
                                case 1:
                                    n = t.child.stateNode
                            }
                            sf(t, i, n)
                        }
                        break;
                    case 5:
                        var a = t.stateNode;
                        if (n === null && t.flags & 4) {
                            n = a;
                            var l = t.memoizedProps;
                            switch (t.type) {
                                case "button":
                                case "input":
                                case "select":
                                case "textarea":
                                    l.autoFocus && n.focus();
                                    break;
                                case "img":
                                    l.src && (n.src = l.src)
                            }
                        }
                        break;
                    case 6:
                        break;
                    case 4:
                        break;
                    case 12:
                        break;
                    case 13:
                        if (t.memoizedState === null) {
                            var u = t.alternate;
                            if (u !== null) {
                                var d = u.memoizedState;
                                if (d !== null) {
                                    var f = d.dehydrated;
                                    f !== null && Zo(f)
                                }
                            }
                        }
                        break;
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                        break;
                    default:
                        throw Error(j(163))
                }
                Oe || t.flags & 512 && wu(t)
            } catch (v) {
                me(t, t.return, v)
            }
        }
        if (t === e) {
            _ = null;
            break
        }
        if (n = t.sibling, n !== null) {
            n.return = t.return, _ = n;
            break
        }
        _ = t.return
    }
}

function Ef(e) {
    for (; _ !== null;) {
        var t = _;
        if (t === e) {
            _ = null;
            break
        }
        var n = t.sibling;
        if (n !== null) {
            n.return = t.return, _ = n;
            break
        }
        _ = t.return
    }
}

function bf(e) {
    for (; _ !== null;) {
        var t = _;
        try {
            switch (t.tag) {
                case 0:
                case 11:
                case 15:
                    var n = t.return;
                    try {
                        ha(4, t)
                    } catch (l) {
                        me(t, n, l)
                    }
                    break;
                case 1:
                    var r = t.stateNode;
                    if (typeof r.componentDidMount == "function") {
                        var o = t.return;
                        try {
                            r.componentDidMount()
                        } catch (l) {
                            me(t, o, l)
                        }
                    }
                    var s = t.return;
                    try {
                        wu(t)
                    } catch (l) {
                        me(t, s, l)
                    }
                    break;
                case 5:
                    var i = t.return;
                    try {
                        wu(t)
                    } catch (l) {
                        me(t, i, l)
                    }
            }
        } catch (l) {
            me(t, t.return, l)
        }
        if (t === e) {
            _ = null;
            break
        }
        var a = t.sibling;
        if (a !== null) {
            a.return = t.return, _ = a;
            break
        }
        _ = t.return
    }
}
var Vx = Math.ceil,
    Vi = rn.ReactCurrentDispatcher,
    Rc = rn.ReactCurrentOwner,
    at = rn.ReactCurrentBatchConfig,
    X = 0,
    Ce = null,
    ye = null,
    be = 0,
    Ge = 0,
    Lr = Bn(0),
    we = 0,
    us = null,
    lr = 0,
    ma = 0,
    jc = 0,
    Uo = null,
    Ue = null,
    Oc = 0,
    lo = 1 / 0,
    Wt = null,
    Hi = !1,
    Eu = null,
    Mn = null,
    Qs = !1,
    Nn = null,
    Wi = 0,
    Vo = 0,
    bu = null,
    pi = -1,
    hi = 0;

function Le() {
    return X & 6 ? ve() : pi !== -1 ? pi : pi = ve()
}

function Dn(e) {
    return e.mode & 1 ? X & 2 && be !== 0 ? be & -be : Nx.transition !== null ? (hi === 0 && (hi = mh()), hi) : (e = ee, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Ch(e.type)), e) : 1
}

function Ct(e, t, n, r) {
    if (50 < Vo) throw Vo = 0, bu = null, Error(j(185));
    ys(e, n, r), (!(X & 2) || e !== Ce) && (e === Ce && (!(X & 2) && (ma |= n), we === 4 && xn(e, be)), Qe(e, r), n === 1 && X === 0 && !(t.mode & 1) && (lo = ve() + 500, da && Un()))
}

function Qe(e, t) {
    var n = e.callbackNode;
    N0(e, t);
    var r = Ai(e, e === Ce ? be : 0);
    if (r === 0) n !== null && Od(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = r & -r, e.callbackPriority !== t) {
        if (n != null && Od(n), t === 1) e.tag === 0 ? kx(kf.bind(null, e)) : Bh(kf.bind(null, e)), Sx(function() {
            !(X & 6) && Un()
        }), n = null;
        else {
            switch (vh(r)) {
                case 1:
                    n = oc;
                    break;
                case 4:
                    n = ph;
                    break;
                case 16:
                    n = Pi;
                    break;
                case 536870912:
                    n = hh;
                    break;
                default:
                    n = Pi
            }
            n = zm(n, Om.bind(null, e))
        }
        e.callbackPriority = t, e.callbackNode = n
    }
}

function Om(e, t) {
    if (pi = -1, hi = 0, X & 6) throw Error(j(327));
    var n = e.callbackNode;
    if (Vr() && e.callbackNode !== n) return null;
    var r = Ai(e, e === Ce ? be : 0);
    if (r === 0) return null;
    if (r & 30 || r & e.expiredLanes || t) t = Qi(e, r);
    else {
        t = r;
        var o = X;
        X |= 2;
        var s = Dm();
        (Ce !== e || be !== t) && (Wt = null, lo = ve() + 500, rr(e, t));
        do try {
            Qx();
            break
        } catch (a) {
            Mm(e, a)
        }
        while (!0);
        gc(), Vi.current = s, X = o, ye !== null ? t = 0 : (Ce = null, be = 0, t = we)
    }
    if (t !== 0) {
        if (t === 2 && (o = Xl(e), o !== 0 && (r = o, t = ku(e, o))), t === 1) throw n = us, rr(e, 0), xn(e, r), Qe(e, ve()), n;
        if (t === 6) xn(e, r);
        else {
            if (o = e.current.alternate, !(r & 30) && !Hx(o) && (t = Qi(e, r), t === 2 && (s = Xl(e), s !== 0 && (r = s, t = ku(e, s))), t === 1)) throw n = us, rr(e, 0), xn(e, r), Qe(e, ve()), n;
            switch (e.finishedWork = o, e.finishedLanes = r, t) {
                case 0:
                case 1:
                    throw Error(j(345));
                case 2:
                    Kn(e, Ue, Wt);
                    break;
                case 3:
                    if (xn(e, r), (r & 130023424) === r && (t = Oc + 500 - ve(), 10 < t)) {
                        if (Ai(e, 0) !== 0) break;
                        if (o = e.suspendedLanes, (o & r) !== r) {
                            Le(), e.pingedLanes |= e.suspendedLanes & o;
                            break
                        }
                        e.timeoutHandle = su(Kn.bind(null, e, Ue, Wt), t);
                        break
                    }
                    Kn(e, Ue, Wt);
                    break;
                case 4:
                    if (xn(e, r), (r & 4194240) === r) break;
                    for (t = e.eventTimes, o = -1; 0 < r;) {
                        var i = 31 - St(r);
                        s = 1 << i, i = t[i], i > o && (o = i), r &= ~s
                    }
                    if (r = o, r = ve() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Vx(r / 1960)) - r, 10 < r) {
                        e.timeoutHandle = su(Kn.bind(null, e, Ue, Wt), r);
                        break
                    }
                    Kn(e, Ue, Wt);
                    break;
                case 5:
                    Kn(e, Ue, Wt);
                    break;
                default:
                    throw Error(j(329))
            }
        }
    }
    return Qe(e, ve()), e.callbackNode === n ? Om.bind(null, e) : null
}

function ku(e, t) {
    var n = Uo;
    return e.current.memoizedState.isDehydrated && (rr(e, t).flags |= 256), e = Qi(e, t), e !== 2 && (t = Ue, Ue = n, t !== null && Nu(t)), e
}

function Nu(e) {
    Ue === null ? Ue = e : Ue.push.apply(Ue, e)
}

function Hx(e) {
    for (var t = e;;) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && (n = n.stores, n !== null))
                for (var r = 0; r < n.length; r++) {
                    var o = n[r],
                        s = o.getSnapshot;
                    o = o.value;
                    try {
                        if (!Et(s(), o)) return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
        else {
            if (t === e) break;
            for (; t.sibling === null;) {
                if (t.return === null || t.return === e) return !0;
                t = t.return
            }
            t.sibling.return = t.return, t = t.sibling
        }
    }
    return !0
}

function xn(e, t) {
    for (t &= ~jc, t &= ~ma, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;) {
        var n = 31 - St(t),
            r = 1 << n;
        e[n] = -1, t &= ~r
    }
}

function kf(e) {
    if (X & 6) throw Error(j(327));
    Vr();
    var t = Ai(e, 0);
    if (!(t & 1)) return Qe(e, ve()), null;
    var n = Qi(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = Xl(e);
        r !== 0 && (t = r, n = ku(e, r))
    }
    if (n === 1) throw n = us, rr(e, 0), xn(e, t), Qe(e, ve()), n;
    if (n === 6) throw Error(j(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, Kn(e, Ue, Wt), Qe(e, ve()), null
}

function Mc(e, t) {
    var n = X;
    X |= 1;
    try {
        return e(t)
    } finally {
        X = n, X === 0 && (lo = ve() + 500, da && Un())
    }
}

function ur(e) {
    Nn !== null && Nn.tag === 0 && !(X & 6) && Vr();
    var t = X;
    X |= 1;
    var n = at.transition,
        r = ee;
    try {
        if (at.transition = null, ee = 1, e) return e()
    } finally {
        ee = r, at.transition = n, X = t, !(X & 6) && Un()
    }
}

function Dc() {
    Ge = Lr.current, ae(Lr)
}

function rr(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, wx(n)), ye !== null)
        for (n = ye.return; n !== null;) {
            var r = n;
            switch (hc(r), r.tag) {
                case 1:
                    r = r.type.childContextTypes, r != null && Mi();
                    break;
                case 3:
                    io(), ae(He), ae(Me), Ec();
                    break;
                case 5:
                    Cc(r);
                    break;
                case 4:
                    io();
                    break;
                case 13:
                    ae(de);
                    break;
                case 19:
                    ae(de);
                    break;
                case 10:
                    yc(r.type._context);
                    break;
                case 22:
                case 23:
                    Dc()
            }
            n = n.return
        }
    if (Ce = e, ye = e = In(e.current, null), be = Ge = t, we = 0, us = null, jc = ma = lr = 0, Ue = Uo = null, Yn !== null) {
        for (t = 0; t < Yn.length; t++)
            if (n = Yn[t], r = n.interleaved, r !== null) {
                n.interleaved = null;
                var o = r.next,
                    s = n.pending;
                if (s !== null) {
                    var i = s.next;
                    s.next = o, r.next = i
                }
                n.pending = r
            }
        Yn = null
    }
    return e
}

function Mm(e, t) {
    do {
        var n = ye;
        try {
            if (gc(), ci.current = Ui, Bi) {
                for (var r = fe.memoizedState; r !== null;) {
                    var o = r.queue;
                    o !== null && (o.pending = null), r = r.next
                }
                Bi = !1
            }
            if (ar = 0, Se = xe = fe = null, $o = !1, is = 0, Rc.current = null, n === null || n.return === null) {
                we = 1, us = t, ye = null;
                break
            }
            e: {
                var s = e,
                    i = n.return,
                    a = n,
                    l = t;
                if (t = be, a.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
                    var u = l,
                        d = a,
                        f = d.tag;
                    if (!(d.mode & 1) && (f === 0 || f === 11 || f === 15)) {
                        var v = d.alternate;
                        v ? (d.updateQueue = v.updateQueue, d.memoizedState = v.memoizedState, d.lanes = v.lanes) : (d.updateQueue = null, d.memoizedState = null)
                    }
                    var p = ff(i);
                    if (p !== null) {
                        p.flags &= -257, pf(p, i, a, s, t), p.mode & 1 && df(s, u, t), t = p, l = u;
                        var S = t.updateQueue;
                        if (S === null) {
                            var m = new Set;
                            m.add(l), t.updateQueue = m
                        } else S.add(l);
                        break e
                    } else {
                        if (!(t & 1)) {
                            df(s, u, t), Ic();
                            break e
                        }
                        l = Error(j(426))
                    }
                } else if (ce && a.mode & 1) {
                    var w = ff(i);
                    if (w !== null) {
                        !(w.flags & 65536) && (w.flags |= 256), pf(w, i, a, s, t), mc(ao(l, a));
                        break e
                    }
                }
                s = l = ao(l, a),
                we !== 4 && (we = 2),
                Uo === null ? Uo = [s] : Uo.push(s),
                s = i;do {
                    switch (s.tag) {
                        case 3:
                            s.flags |= 65536, t &= -t, s.lanes |= t;
                            var g = vm(s, l, t); of (s, g);
                            break e;
                        case 1:
                            a = l;
                            var h = s.type,
                                x = s.stateNode;
                            if (!(s.flags & 128) && (typeof h.getDerivedStateFromError == "function" || x !== null && typeof x.componentDidCatch == "function" && (Mn === null || !Mn.has(x)))) {
                                s.flags |= 65536, t &= -t, s.lanes |= t;
                                var C = gm(s, a, t); of (s, C);
                                break e
                            }
                    }
                    s = s.return
                } while (s !== null)
            }
            _m(n)
        } catch (E) {
            t = E, ye === n && n !== null && (ye = n = n.return);
            continue
        }
        break
    } while (!0)
}

function Dm() {
    var e = Vi.current;
    return Vi.current = Ui, e === null ? Ui : e
}

function Ic() {
    (we === 0 || we === 3 || we === 2) && (we = 4), Ce === null || !(lr & 268435455) && !(ma & 268435455) || xn(Ce, be)
}

function Qi(e, t) {
    var n = X;
    X |= 2;
    var r = Dm();
    (Ce !== e || be !== t) && (Wt = null, rr(e, t));
    do try {
        Wx();
        break
    } catch (o) {
        Mm(e, o)
    }
    while (!0);
    if (gc(), X = n, Vi.current = r, ye !== null) throw Error(j(261));
    return Ce = null, be = 0, we
}

function Wx() {
    for (; ye !== null;) Im(ye)
}

function Qx() {
    for (; ye !== null && !g0();) Im(ye)
}

function Im(e) {
    var t = Fm(e.alternate, e, Ge);
    e.memoizedProps = e.pendingProps, t === null ? _m(e) : ye = t, Rc.current = null
}

function _m(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (e = t.return, t.flags & 32768) {
            if (n = zx(n, t), n !== null) {
                n.flags &= 32767, ye = n;
                return
            }
            if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
            else {
                we = 6, ye = null;
                return
            }
        } else if (n = Fx(n, t, Ge), n !== null) {
            ye = n;
            return
        }
        if (t = t.sibling, t !== null) {
            ye = t;
            return
        }
        ye = t = e
    } while (t !== null);
    we === 0 && (we = 5)
}

function Kn(e, t, n) {
    var r = ee,
        o = at.transition;
    try {
        at.transition = null, ee = 1, Kx(e, t, n, r)
    } finally {
        at.transition = o, ee = r
    }
    return null
}

function Kx(e, t, n, r) {
    do Vr(); while (Nn !== null);
    if (X & 6) throw Error(j(327));
    n = e.finishedWork;
    var o = e.finishedLanes;
    if (n === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(j(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var s = n.lanes | n.childLanes;
    if (P0(e, s), e === Ce && (ye = Ce = null, be = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Qs || (Qs = !0, zm(Pi, function() {
            return Vr(), null
        })), s = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || s) {
        s = at.transition, at.transition = null;
        var i = ee;
        ee = 1;
        var a = X;
        X |= 4, Rc.current = null, Bx(e, n), Rm(n, e), px(ru), Ti = !!nu, ru = nu = null, e.current = n, Ux(n), y0(), X = a, ee = i, at.transition = s
    } else e.current = n;
    if (Qs && (Qs = !1, Nn = e, Wi = o), s = e.pendingLanes, s === 0 && (Mn = null), S0(n.stateNode), Qe(e, ve()), t !== null)
        for (r = e.onRecoverableError, n = 0; n < t.length; n++) o = t[n], r(o.value, {
            componentStack: o.stack,
            digest: o.digest
        });
    if (Hi) throw Hi = !1, e = Eu, Eu = null, e;
    return Wi & 1 && e.tag !== 0 && Vr(), s = e.pendingLanes, s & 1 ? e === bu ? Vo++ : (Vo = 0, bu = e) : Vo = 0, Un(), null
}

function Vr() {
    if (Nn !== null) {
        var e = vh(Wi),
            t = at.transition,
            n = ee;
        try {
            if (at.transition = null, ee = 16 > e ? 16 : e, Nn === null) var r = !1;
            else {
                if (e = Nn, Nn = null, Wi = 0, X & 6) throw Error(j(331));
                var o = X;
                for (X |= 4, _ = e.current; _ !== null;) {
                    var s = _,
                        i = s.child;
                    if (_.flags & 16) {
                        var a = s.deletions;
                        if (a !== null) {
                            for (var l = 0; l < a.length; l++) {
                                var u = a[l];
                                for (_ = u; _ !== null;) {
                                    var d = _;
                                    switch (d.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            Bo(8, d, s)
                                    }
                                    var f = d.child;
                                    if (f !== null) f.return = d, _ = f;
                                    else
                                        for (; _ !== null;) {
                                            d = _;
                                            var v = d.sibling,
                                                p = d.return;
                                            if (Pm(d), d === u) {
                                                _ = null;
                                                break
                                            }
                                            if (v !== null) {
                                                v.return = p, _ = v;
                                                break
                                            }
                                            _ = p
                                        }
                                }
                            }
                            var S = s.alternate;
                            if (S !== null) {
                                var m = S.child;
                                if (m !== null) {
                                    S.child = null;
                                    do {
                                        var w = m.sibling;
                                        m.sibling = null, m = w
                                    } while (m !== null)
                                }
                            }
                            _ = s
                        }
                    }
                    if (s.subtreeFlags & 2064 && i !== null) i.return = s, _ = i;
                    else e: for (; _ !== null;) {
                        if (s = _, s.flags & 2048) switch (s.tag) {
                            case 0:
                            case 11:
                            case 15:
                                Bo(9, s, s.return)
                        }
                        var g = s.sibling;
                        if (g !== null) {
                            g.return = s.return, _ = g;
                            break e
                        }
                        _ = s.return
                    }
                }
                var h = e.current;
                for (_ = h; _ !== null;) {
                    i = _;
                    var x = i.child;
                    if (i.subtreeFlags & 2064 && x !== null) x.return = i, _ = x;
                    else e: for (i = h; _ !== null;) {
                        if (a = _, a.flags & 2048) try {
                            switch (a.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    ha(9, a)
                            }
                        } catch (E) {
                            me(a, a.return, E)
                        }
                        if (a === i) {
                            _ = null;
                            break e
                        }
                        var C = a.sibling;
                        if (C !== null) {
                            C.return = a.return, _ = C;
                            break e
                        }
                        _ = a.return
                    }
                }
                if (X = o, Un(), _t && typeof _t.onPostCommitFiberRoot == "function") try {
                    _t.onPostCommitFiberRoot(ia, e)
                } catch {}
                r = !0
            }
            return r
        } finally {
            ee = n, at.transition = t
        }
    }
    return !1
}

function Nf(e, t, n) {
    t = ao(n, t), t = vm(e, t, 1), e = On(e, t, 1), t = Le(), e !== null && (ys(e, 1, t), Qe(e, t))
}

function me(e, t, n) {
    if (e.tag === 3) Nf(e, e, n);
    else
        for (; t !== null;) {
            if (t.tag === 3) {
                Nf(t, e, n);
                break
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Mn === null || !Mn.has(r))) {
                    e = ao(n, e), e = gm(t, e, 1), t = On(t, e, 1), e = Le(), t !== null && (ys(t, 1, e), Qe(t, e));
                    break
                }
            }
            t = t.return
        }
}

function Gx(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t), t = Le(), e.pingedLanes |= e.suspendedLanes & n, Ce === e && (be & n) === n && (we === 4 || we === 3 && (be & 130023424) === be && 500 > ve() - Oc ? rr(e, 0) : jc |= n), Qe(e, t)
}

function Lm(e, t) {
    t === 0 && (e.mode & 1 ? (t = _s, _s <<= 1, !(_s & 130023424) && (_s = 4194304)) : t = 1);
    var n = Le();
    e = Jt(e, t), e !== null && (ys(e, t, n), Qe(e, n))
}

function Yx(e) {
    var t = e.memoizedState,
        n = 0;
    t !== null && (n = t.retryLane), Lm(e, n)
}

function qx(e, t) {
    var n = 0;
    switch (e.tag) {
        case 13:
            var r = e.stateNode,
                o = e.memoizedState;
            o !== null && (n = o.retryLane);
            break;
        case 19:
            r = e.stateNode;
            break;
        default:
            throw Error(j(314))
    }
    r !== null && r.delete(t), Lm(e, n)
}
var Fm;
Fm = function(e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || He.current) Ve = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128)) return Ve = !1, Lx(e, t, n);
            Ve = !!(e.flags & 131072)
        }
    else Ve = !1, ce && t.flags & 1048576 && Uh(t, _i, t.index);
    switch (t.lanes = 0, t.tag) {
        case 2:
            var r = t.type;
            fi(e, t), e = t.pendingProps;
            var o = ro(t, Me.current);
            Ur(t, n), o = kc(null, t, r, e, o, n);
            var s = Nc();
            return t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, We(r) ? (s = !0, Di(t)) : s = !1, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, wc(t), o.updater = pa, t.stateNode = o, o._reactInternals = t, fu(t, r, e, n), t = mu(null, t, r, !0, s, n)) : (t.tag = 0, ce && s && pc(t), Ie(null, t, o, n), t = t.child), t;
        case 16:
            r = t.elementType;
            e: {
                switch (fi(e, t), e = t.pendingProps, o = r._init, r = o(r._payload), t.type = r, o = t.tag = Zx(r), e = mt(r, e), o) {
                    case 0:
                        t = hu(null, t, r, e, n);
                        break e;
                    case 1:
                        t = vf(null, t, r, e, n);
                        break e;
                    case 11:
                        t = hf(null, t, r, e, n);
                        break e;
                    case 14:
                        t = mf(null, t, r, mt(r.type, e), n);
                        break e
                }
                throw Error(j(306, r, ""))
            }
            return t;
        case 0:
            return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : mt(r, o), hu(e, t, r, o, n);
        case 1:
            return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : mt(r, o), vf(e, t, r, o, n);
        case 3:
            e: {
                if (Sm(t), e === null) throw Error(j(387));r = t.pendingProps,
                s = t.memoizedState,
                o = s.element,
                Gh(e, t),
                zi(t, r, null, n);
                var i = t.memoizedState;
                if (r = i.element, s.isDehydrated)
                    if (s = {
                            element: r,
                            isDehydrated: !1,
                            cache: i.cache,
                            pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
                            transitions: i.transitions
                        }, t.updateQueue.baseState = s, t.memoizedState = s, t.flags & 256) {
                        o = ao(Error(j(423)), t), t = gf(e, t, r, n, o);
                        break e
                    } else if (r !== o) {
                    o = ao(Error(j(424)), t), t = gf(e, t, r, n, o);
                    break e
                } else
                    for (qe = jn(t.stateNode.containerInfo.firstChild), Xe = t, ce = !0, wt = null, n = Qh(t, null, r, n), t.child = n; n;) n.flags = n.flags & -3 | 4096, n = n.sibling;
                else {
                    if (oo(), r === o) {
                        t = en(e, t, n);
                        break e
                    }
                    Ie(e, t, r, n)
                }
                t = t.child
            }
            return t;
        case 5:
            return Yh(t), e === null && uu(t), r = t.type, o = t.pendingProps, s = e !== null ? e.memoizedProps : null, i = o.children, ou(r, o) ? i = null : s !== null && ou(r, s) && (t.flags |= 32), wm(e, t), Ie(e, t, i, n), t.child;
        case 6:
            return e === null && uu(t), null;
        case 13:
            return Cm(e, t, n);
        case 4:
            return Sc(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = so(t, null, r, n) : Ie(e, t, r, n), t.child;
        case 11:
            return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : mt(r, o), hf(e, t, r, o, n);
        case 7:
            return Ie(e, t, t.pendingProps, n), t.child;
        case 8:
            return Ie(e, t, t.pendingProps.children, n), t.child;
        case 12:
            return Ie(e, t, t.pendingProps.children, n), t.child;
        case 10:
            e: {
                if (r = t.type._context, o = t.pendingProps, s = t.memoizedProps, i = o.value, oe(Li, r._currentValue), r._currentValue = i, s !== null)
                    if (Et(s.value, i)) {
                        if (s.children === o.children && !He.current) {
                            t = en(e, t, n);
                            break e
                        }
                    } else
                        for (s = t.child, s !== null && (s.return = t); s !== null;) {
                            var a = s.dependencies;
                            if (a !== null) {
                                i = s.child;
                                for (var l = a.firstContext; l !== null;) {
                                    if (l.context === r) {
                                        if (s.tag === 1) {
                                            l = qt(-1, n & -n), l.tag = 2;
                                            var u = s.updateQueue;
                                            if (u !== null) {
                                                u = u.shared;
                                                var d = u.pending;
                                                d === null ? l.next = l : (l.next = d.next, d.next = l), u.pending = l
                                            }
                                        }
                                        s.lanes |= n, l = s.alternate, l !== null && (l.lanes |= n), cu(s.return, n, t), a.lanes |= n;
                                        break
                                    }
                                    l = l.next
                                }
                            } else if (s.tag === 10) i = s.type === t.type ? null : s.child;
                            else if (s.tag === 18) {
                                if (i = s.return, i === null) throw Error(j(341));
                                i.lanes |= n, a = i.alternate, a !== null && (a.lanes |= n), cu(i, n, t), i = s.sibling
                            } else i = s.child;
                            if (i !== null) i.return = s;
                            else
                                for (i = s; i !== null;) {
                                    if (i === t) {
                                        i = null;
                                        break
                                    }
                                    if (s = i.sibling, s !== null) {
                                        s.return = i.return, i = s;
                                        break
                                    }
                                    i = i.return
                                }
                            s = i
                        }
                Ie(e, t, o.children, n),
                t = t.child
            }
            return t;
        case 9:
            return o = t.type, r = t.pendingProps.children, Ur(t, n), o = lt(o), r = r(o), t.flags |= 1, Ie(e, t, r, n), t.child;
        case 14:
            return r = t.type, o = mt(r, t.pendingProps), o = mt(r.type, o), mf(e, t, r, o, n);
        case 15:
            return ym(e, t, t.type, t.pendingProps, n);
        case 17:
            return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : mt(r, o), fi(e, t), t.tag = 1, We(r) ? (e = !0, Di(t)) : e = !1, Ur(t, n), mm(t, r, o), fu(t, r, o, n), mu(null, t, r, !0, e, n);
        case 19:
            return Em(e, t, n);
        case 22:
            return xm(e, t, n)
    }
    throw Error(j(156, t.tag))
};

function zm(e, t) {
    return fh(e, t)
}

function Xx(e, t, n, r) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
}

function it(e, t, n, r) {
    return new Xx(e, t, n, r)
}

function _c(e) {
    return e = e.prototype, !(!e || !e.isReactComponent)
}

function Zx(e) {
    if (typeof e == "function") return _c(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof, e === tc) return 11;
        if (e === nc) return 14
    }
    return 2
}

function In(e, t) {
    var n = e.alternate;
    return n === null ? (n = it(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
    }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n
}

function mi(e, t, n, r, o, s) {
    var i = 2;
    if (r = e, typeof e == "function") _c(e) && (i = 1);
    else if (typeof e == "string") i = 5;
    else e: switch (e) {
        case Pr:
            return or(n.children, o, s, t);
        case ec:
            i = 8, o |= 8;
            break;
        case _l:
            return e = it(12, n, t, o | 2), e.elementType = _l, e.lanes = s, e;
        case Ll:
            return e = it(13, n, t, o), e.elementType = Ll, e.lanes = s, e;
        case Fl:
            return e = it(19, n, t, o), e.elementType = Fl, e.lanes = s, e;
        case Yp:
            return va(n, o, s, t);
        default:
            if (typeof e == "object" && e !== null) switch (e.$$typeof) {
                case Kp:
                    i = 10;
                    break e;
                case Gp:
                    i = 9;
                    break e;
                case tc:
                    i = 11;
                    break e;
                case nc:
                    i = 14;
                    break e;
                case vn:
                    i = 16, r = null;
                    break e
            }
            throw Error(j(130, e == null ? e : typeof e, ""))
    }
    return t = it(i, n, t, o), t.elementType = e, t.type = r, t.lanes = s, t
}

function or(e, t, n, r) {
    return e = it(7, e, r, t), e.lanes = n, e
}

function va(e, t, n, r) {
    return e = it(22, e, r, t), e.elementType = Yp, e.lanes = n, e.stateNode = {
        isHidden: !1
    }, e
}

function xl(e, t, n) {
    return e = it(6, e, null, t), e.lanes = n, e
}

function wl(e, t, n) {
    return t = it(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
    }, t
}

function Jx(e, t, n, r, o) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = el(0), this.expirationTimes = el(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = el(0), this.identifierPrefix = r, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null
}

function Lc(e, t, n, r, o, s, i, a, l) {
    return e = new Jx(e, t, n, a, l), t === 1 ? (t = 1, s === !0 && (t |= 8)) : t = 0, s = it(3, null, null, t), e.current = s, s.stateNode = e, s.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    }, wc(s), e
}

function ew(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: Nr,
        key: r == null ? null : "" + r,
        children: e,
        containerInfo: t,
        implementation: n
    }
}

function $m(e) {
    if (!e) return Ln;
    e = e._reactInternals;
    e: {
        if (pr(e) !== e || e.tag !== 1) throw Error(j(170));
        var t = e;do {
            switch (t.tag) {
                case 3:
                    t = t.stateNode.context;
                    break e;
                case 1:
                    if (We(t.type)) {
                        t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                        break e
                    }
            }
            t = t.return
        } while (t !== null);
        throw Error(j(171))
    }
    if (e.tag === 1) {
        var n = e.type;
        if (We(n)) return $h(e, n, t)
    }
    return t
}

function Bm(e, t, n, r, o, s, i, a, l) {
    return e = Lc(n, r, !0, e, o, s, i, a, l), e.context = $m(null), n = e.current, r = Le(), o = Dn(n), s = qt(r, o), s.callback = t ? ? null, On(n, s, o), e.current.lanes = o, ys(e, o, r), Qe(e, r), e
}

function ga(e, t, n, r) {
    var o = t.current,
        s = Le(),
        i = Dn(o);
    return n = $m(n), t.context === null ? t.context = n : t.pendingContext = n, t = qt(s, i), t.payload = {
        element: e
    }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = On(o, t, i), e !== null && (Ct(e, o, i, s), ui(e, o, i)), i
}

function Ki(e) {
    if (e = e.current, !e.child) return null;
    switch (e.child.tag) {
        case 5:
            return e.child.stateNode;
        default:
            return e.child.stateNode
    }
}

function Pf(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t
    }
}

function Fc(e, t) {
    Pf(e, t), (e = e.alternate) && Pf(e, t)
}

function tw() {
    return null
}
var Um = typeof reportError == "function" ? reportError : function(e) {
    console.error(e)
};

function zc(e) {
    this._internalRoot = e
}
ya.prototype.render = zc.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(j(409));
    ga(e, t, null, null)
};
ya.prototype.unmount = zc.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        ur(function() {
            ga(null, e, null, null)
        }), t[Zt] = null
    }
};

function ya(e) {
    this._internalRoot = e
}
ya.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
        var t = xh();
        e = {
            blockedOn: null,
            target: e,
            priority: t
        };
        for (var n = 0; n < yn.length && t !== 0 && t < yn[n].priority; n++);
        yn.splice(n, 0, e), n === 0 && Sh(e)
    }
};

function $c(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}

function xa(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}

function Af() {}

function nw(e, t, n, r, o) {
    if (o) {
        if (typeof r == "function") {
            var s = r;
            r = function() {
                var u = Ki(i);
                s.call(u)
            }
        }
        var i = Bm(t, r, e, 0, null, !1, !1, "", Af);
        return e._reactRootContainer = i, e[Zt] = i.current, ts(e.nodeType === 8 ? e.parentNode : e), ur(), i
    }
    for (; o = e.lastChild;) e.removeChild(o);
    if (typeof r == "function") {
        var a = r;
        r = function() {
            var u = Ki(l);
            a.call(u)
        }
    }
    var l = Lc(e, 0, !1, null, null, !1, !1, "", Af);
    return e._reactRootContainer = l, e[Zt] = l.current, ts(e.nodeType === 8 ? e.parentNode : e), ur(function() {
        ga(t, l, n, r)
    }), l
}

function wa(e, t, n, r, o) {
    var s = n._reactRootContainer;
    if (s) {
        var i = s;
        if (typeof o == "function") {
            var a = o;
            o = function() {
                var l = Ki(i);
                a.call(l)
            }
        }
        ga(t, i, e, o)
    } else i = nw(n, t, e, o, r);
    return Ki(i)
}
gh = function(e) {
    switch (e.tag) {
        case 3:
            var t = e.stateNode;
            if (t.current.memoizedState.isDehydrated) {
                var n = Oo(t.pendingLanes);
                n !== 0 && (sc(t, n | 1), Qe(t, ve()), !(X & 6) && (lo = ve() + 500, Un()))
            }
            break;
        case 13:
            ur(function() {
                var r = Jt(e, 1);
                if (r !== null) {
                    var o = Le();
                    Ct(r, e, 1, o)
                }
            }), Fc(e, 1)
    }
};
ic = function(e) {
    if (e.tag === 13) {
        var t = Jt(e, 134217728);
        if (t !== null) {
            var n = Le();
            Ct(t, e, 134217728, n)
        }
        Fc(e, 134217728)
    }
};
yh = function(e) {
    if (e.tag === 13) {
        var t = Dn(e),
            n = Jt(e, t);
        if (n !== null) {
            var r = Le();
            Ct(n, e, t, r)
        }
        Fc(e, t)
    }
};
xh = function() {
    return ee
};
wh = function(e, t) {
    var n = ee;
    try {
        return ee = e, t()
    } finally {
        ee = n
    }
};
Gl = function(e, t, n) {
    switch (t) {
        case "input":
            if (Bl(e, n), t = n.name, n.type === "radio" && t != null) {
                for (n = e; n.parentNode;) n = n.parentNode;
                for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                        var o = ca(r);
                        if (!o) throw Error(j(90));
                        Xp(r), Bl(r, o)
                    }
                }
            }
            break;
        case "textarea":
            Jp(e, n);
            break;
        case "select":
            t = n.value, t != null && Fr(e, !!n.multiple, t, !1)
    }
};
ih = Mc;
ah = ur;
var rw = {
        usingClientEntryPoint: !1,
        Events: [ws, jr, ca, oh, sh, Mc]
    },
    Po = {
        findFiberByHostInstance: Gn,
        bundleType: 0,
        version: "18.3.1",
        rendererPackageName: "react-dom"
    },
    ow = {
        bundleType: Po.bundleType,
        version: Po.version,
        rendererPackageName: Po.rendererPackageName,
        rendererConfig: Po.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: rn.ReactCurrentDispatcher,
        findHostInstanceByFiber: function(e) {
            return e = ch(e), e === null ? null : e.stateNode
        },
        findFiberByHostInstance: Po.findFiberByHostInstance || tw,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
    };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Ks = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ks.isDisabled && Ks.supportsFiber) try {
        ia = Ks.inject(ow), _t = Ks
    } catch {}
}
et.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = rw;
et.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!$c(t)) throw Error(j(200));
    return ew(e, t, null, n)
};
et.createRoot = function(e, t) {
    if (!$c(e)) throw Error(j(299));
    var n = !1,
        r = "",
        o = Um;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = Lc(e, 1, !1, null, null, n, !1, r, o), e[Zt] = t.current, ts(e.nodeType === 8 ? e.parentNode : e), new zc(t)
};
et.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0) throw typeof e.render == "function" ? Error(j(188)) : (e = Object.keys(e).join(","), Error(j(268, e)));
    return e = ch(t), e = e === null ? null : e.stateNode, e
};
et.flushSync = function(e) {
    return ur(e)
};
et.hydrate = function(e, t, n) {
    if (!xa(t)) throw Error(j(200));
    return wa(null, e, t, !0, n)
};
et.hydrateRoot = function(e, t, n) {
    if (!$c(e)) throw Error(j(405));
    var r = n != null && n.hydratedSources || null,
        o = !1,
        s = "",
        i = Um;
    if (n != null && (n.unstable_strictMode === !0 && (o = !0), n.identifierPrefix !== void 0 && (s = n.identifierPrefix), n.onRecoverableError !== void 0 && (i = n.onRecoverableError)), t = Bm(t, null, e, 1, n ? ? null, o, !1, s, i), e[Zt] = t.current, ts(e), r)
        for (e = 0; e < r.length; e++) n = r[e], o = n._getVersion, o = o(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(n, o);
    return new ya(t)
};
et.render = function(e, t, n) {
    if (!xa(t)) throw Error(j(200));
    return wa(null, e, t, !1, n)
};
et.unmountComponentAtNode = function(e) {
    if (!xa(e)) throw Error(j(40));
    return e._reactRootContainer ? (ur(function() {
        wa(null, null, e, !1, function() {
            e._reactRootContainer = null, e[Zt] = null
        })
    }), !0) : !1
};
et.unstable_batchedUpdates = Mc;
et.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!xa(n)) throw Error(j(200));
    if (e == null || e._reactInternals === void 0) throw Error(j(38));
    return wa(e, t, n, !1, r)
};
et.version = "18.3.1-next-f1338f8080-20240426";

function Vm() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Vm)
    } catch (e) {
        console.error(e)
    }
}
Vm(), Vp.exports = et;
var Cs = Vp.exports;
const Hm = jp(Cs);
var Wm, Tf = Cs;
Wm = Tf.createRoot, Tf.hydrateRoot;
const sw = 1,
    iw = 1e6;
let Sl = 0;

function aw() {
    return Sl = (Sl + 1) % Number.MAX_SAFE_INTEGER, Sl.toString()
}
const Cl = new Map,
    Rf = e => {
        if (Cl.has(e)) return;
        const t = setTimeout(() => {
            Cl.delete(e), Ho({
                type: "REMOVE_TOAST",
                toastId: e
            })
        }, iw);
        Cl.set(e, t)
    },
    lw = (e, t) => {
        switch (t.type) {
            case "ADD_TOAST":
                return { ...e,
                    toasts: [t.toast, ...e.toasts].slice(0, sw)
                };
            case "UPDATE_TOAST":
                return { ...e,
                    toasts: e.toasts.map(n => n.id === t.toast.id ? { ...n,
                        ...t.toast
                    } : n)
                };
            case "DISMISS_TOAST":
                {
                    const {
                        toastId: n
                    } = t;
                    return n ? Rf(n) : e.toasts.forEach(r => {
                        Rf(r.id)
                    }),
                    { ...e,
                        toasts: e.toasts.map(r => r.id === n || n === void 0 ? { ...r,
                            open: !1
                        } : r)
                    }
                }
            case "REMOVE_TOAST":
                return t.toastId === void 0 ? { ...e,
                    toasts: []
                } : { ...e,
                    toasts: e.toasts.filter(n => n.id !== t.toastId)
                }
        }
    },
    vi = [];
let gi = {
    toasts: []
};

function Ho(e) {
    gi = lw(gi, e), vi.forEach(t => {
        t(gi)
    })
}

function uw({ ...e
}) {
    const t = aw(),
        n = o => Ho({
            type: "UPDATE_TOAST",
            toast: { ...o,
                id: t
            }
        }),
        r = () => Ho({
            type: "DISMISS_TOAST",
            toastId: t
        });
    return Ho({
        type: "ADD_TOAST",
        toast: { ...e,
            id: t,
            open: !0,
            onOpenChange: o => {
                o || r()
            }
        }
    }), {
        id: t,
        dismiss: r,
        update: n
    }
}

function cw() {
    const [e, t] = y.useState(gi);
    return y.useEffect(() => (vi.push(t), () => {
        const n = vi.indexOf(t);
        n > -1 && vi.splice(n, 1)
    }), [e]), { ...e,
        toast: uw,
        dismiss: n => Ho({
            type: "DISMISS_TOAST",
            toastId: n
        })
    }
}

function re(e, t, {
    checkForDefaultPrevented: n = !0
} = {}) {
    return function(o) {
        if (e == null || e(o), n === !1 || !o.defaultPrevented) return t == null ? void 0 : t(o)
    }
}

function jf(e, t) {
    if (typeof e == "function") return e(t);
    e != null && (e.current = t)
}

function Qm(...e) {
    return t => {
        let n = !1;
        const r = e.map(o => {
            const s = jf(o, t);
            return !n && typeof s == "function" && (n = !0), s
        });
        if (n) return () => {
            for (let o = 0; o < r.length; o++) {
                const s = r[o];
                typeof s == "function" ? s() : jf(e[o], null)
            }
        }
    }
}

function Ne(...e) {
    return y.useCallback(Qm(...e), e)
}

function dw(e, t) {
    const n = y.createContext(t),
        r = s => {
            const {
                children: i,
                ...a
            } = s, l = y.useMemo(() => a, Object.values(a));
            return c.jsx(n.Provider, {
                value: l,
                children: i
            })
        };
    r.displayName = e + "Provider";

    function o(s) {
        const i = y.useContext(n);
        if (i) return i;
        if (t !== void 0) return t;
        throw new Error(`\`${s}\` must be used within \`${e}\``)
    }
    return [r, o]
}

function hr(e, t = []) {
    let n = [];

    function r(s, i) {
        const a = y.createContext(i),
            l = n.length;
        n = [...n, i];
        const u = f => {
            var g;
            const {
                scope: v,
                children: p,
                ...S
            } = f, m = ((g = v == null ? void 0 : v[e]) == null ? void 0 : g[l]) || a, w = y.useMemo(() => S, Object.values(S));
            return c.jsx(m.Provider, {
                value: w,
                children: p
            })
        };
        u.displayName = s + "Provider";

        function d(f, v) {
            var m;
            const p = ((m = v == null ? void 0 : v[e]) == null ? void 0 : m[l]) || a,
                S = y.useContext(p);
            if (S) return S;
            if (i !== void 0) return i;
            throw new Error(`\`${f}\` must be used within \`${s}\``)
        }
        return [u, d]
    }
    const o = () => {
        const s = n.map(i => y.createContext(i));
        return function(a) {
            const l = (a == null ? void 0 : a[e]) || s;
            return y.useMemo(() => ({
                [`__scope${e}`]: { ...a,
                    [e]: l
                }
            }), [a, l])
        }
    };
    return o.scopeName = e, [r, fw(o, ...t)]
}

function fw(...e) {
    const t = e[0];
    if (e.length === 1) return t;
    const n = () => {
        const r = e.map(o => ({
            useScope: o(),
            scopeName: o.scopeName
        }));
        return function(s) {
            const i = r.reduce((a, {
                useScope: l,
                scopeName: u
            }) => {
                const f = l(s)[`__scope${u}`];
                return { ...a,
                    ...f
                }
            }, {});
            return y.useMemo(() => ({
                [`__scope${t.scopeName}`]: i
            }), [i])
        }
    };
    return n.scopeName = t.scopeName, n
}

function cs(e) {
    const t = hw(e),
        n = y.forwardRef((r, o) => {
            const {
                children: s,
                ...i
            } = r, a = y.Children.toArray(s), l = a.find(vw);
            if (l) {
                const u = l.props.children,
                    d = a.map(f => f === l ? y.Children.count(u) > 1 ? y.Children.only(null) : y.isValidElement(u) ? u.props.children : null : f);
                return c.jsx(t, { ...i,
                    ref: o,
                    children: y.isValidElement(u) ? y.cloneElement(u, void 0, d) : null
                })
            }
            return c.jsx(t, { ...i,
                ref: o,
                children: s
            })
        });
    return n.displayName = `${e}.Slot`, n
}
var pw = cs("Slot");

function hw(e) {
    const t = y.forwardRef((n, r) => {
        const {
            children: o,
            ...s
        } = n;
        if (y.isValidElement(o)) {
            const i = yw(o),
                a = gw(s, o.props);
            return o.type !== y.Fragment && (a.ref = r ? Qm(r, i) : i), y.cloneElement(o, a)
        }
        return y.Children.count(o) > 1 ? y.Children.only(null) : null
    });
    return t.displayName = `${e}.SlotClone`, t
}
var Km = Symbol("radix.slottable");

function mw(e) {
    const t = ({
        children: n
    }) => c.jsx(c.Fragment, {
        children: n
    });
    return t.displayName = `${e}.Slottable`, t.__radixId = Km, t
}

function vw(e) {
    return y.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === Km
}

function gw(e, t) {
    const n = { ...t
    };
    for (const r in t) {
        const o = e[r],
            s = t[r];
        /^on[A-Z]/.test(r) ? o && s ? n[r] = (...a) => {
            const l = s(...a);
            return o(...a), l
        } : o && (n[r] = o) : r === "style" ? n[r] = { ...o,
            ...s
        } : r === "className" && (n[r] = [o, s].filter(Boolean).join(" "))
    }
    return { ...e,
        ...n
    }
}

function yw(e) {
    var r, o;
    let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get,
        n = t && "isReactWarning" in t && t.isReactWarning;
    return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref)
}

function Gm(e) {
    const t = e + "CollectionProvider",
        [n, r] = hr(t),
        [o, s] = n(t, {
            collectionRef: {
                current: null
            },
            itemMap: new Map
        }),
        i = m => {
            const {
                scope: w,
                children: g
            } = m, h = R.useRef(null), x = R.useRef(new Map).current;
            return c.jsx(o, {
                scope: w,
                itemMap: x,
                collectionRef: h,
                children: g
            })
        };
    i.displayName = t;
    const a = e + "CollectionSlot",
        l = cs(a),
        u = R.forwardRef((m, w) => {
            const {
                scope: g,
                children: h
            } = m, x = s(a, g), C = Ne(w, x.collectionRef);
            return c.jsx(l, {
                ref: C,
                children: h
            })
        });
    u.displayName = a;
    const d = e + "CollectionItemSlot",
        f = "data-radix-collection-item",
        v = cs(d),
        p = R.forwardRef((m, w) => {
            const {
                scope: g,
                children: h,
                ...x
            } = m, C = R.useRef(null), E = Ne(w, C), b = s(d, g);
            return R.useEffect(() => (b.itemMap.set(C, {
                ref: C,
                ...x
            }), () => void b.itemMap.delete(C))), c.jsx(v, {
                [f]: "",
                ref: E,
                children: h
            })
        });
    p.displayName = d;

    function S(m) {
        const w = s(e + "CollectionConsumer", m);
        return R.useCallback(() => {
            const h = w.collectionRef.current;
            if (!h) return [];
            const x = Array.from(h.querySelectorAll(`[${f}]`));
            return Array.from(w.itemMap.values()).sort((b, k) => x.indexOf(b.ref.current) - x.indexOf(k.ref.current))
        }, [w.collectionRef, w.itemMap])
    }
    return [{
        Provider: i,
        Slot: u,
        ItemSlot: p
    }, S, r]
}
var xw = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"],
    le = xw.reduce((e, t) => {
        const n = cs(`Primitive.${t}`),
            r = y.forwardRef((o, s) => {
                const {
                    asChild: i,
                    ...a
                } = o, l = i ? n : t;
                return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), c.jsx(l, { ...a,
                    ref: s
                })
            });
        return r.displayName = `Primitive.${t}`, { ...e,
            [t]: r
        }
    }, {});

function Ym(e, t) {
    e && Cs.flushSync(() => e.dispatchEvent(t))
}

function zt(e) {
    const t = y.useRef(e);
    return y.useEffect(() => {
        t.current = e
    }), y.useMemo(() => (...n) => {
        var r;
        return (r = t.current) == null ? void 0 : r.call(t, ...n)
    }, [])
}

function ww(e, t = globalThis == null ? void 0 : globalThis.document) {
    const n = zt(e);
    y.useEffect(() => {
        const r = o => {
            o.key === "Escape" && n(o)
        };
        return t.addEventListener("keydown", r, {
            capture: !0
        }), () => t.removeEventListener("keydown", r, {
            capture: !0
        })
    }, [n, t])
}
var Sw = "DismissableLayer",
    Pu = "dismissableLayer.update",
    Cw = "dismissableLayer.pointerDownOutside",
    Ew = "dismissableLayer.focusOutside",
    Of, qm = y.createContext({
        layers: new Set,
        layersWithOutsidePointerEventsDisabled: new Set,
        branches: new Set
    }),
    Sa = y.forwardRef((e, t) => {
        const {
            disableOutsidePointerEvents: n = !1,
            onEscapeKeyDown: r,
            onPointerDownOutside: o,
            onFocusOutside: s,
            onInteractOutside: i,
            onDismiss: a,
            ...l
        } = e, u = y.useContext(qm), [d, f] = y.useState(null), v = (d == null ? void 0 : d.ownerDocument) ? ? (globalThis == null ? void 0 : globalThis.document), [, p] = y.useState({}), S = Ne(t, k => f(k)), m = Array.from(u.layers), [w] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1), g = m.indexOf(w), h = d ? m.indexOf(d) : -1, x = u.layersWithOutsidePointerEventsDisabled.size > 0, C = h >= g, E = kw(k => {
            const T = k.target,
                O = [...u.branches].some(M => M.contains(T));
            !C || O || (o == null || o(k), i == null || i(k), k.defaultPrevented || a == null || a())
        }, v), b = Nw(k => {
            const T = k.target;
            [...u.branches].some(M => M.contains(T)) || (s == null || s(k), i == null || i(k), k.defaultPrevented || a == null || a())
        }, v);
        return ww(k => {
            h === u.layers.size - 1 && (r == null || r(k), !k.defaultPrevented && a && (k.preventDefault(), a()))
        }, v), y.useEffect(() => {
            if (d) return n && (u.layersWithOutsidePointerEventsDisabled.size === 0 && (Of = v.body.style.pointerEvents, v.body.style.pointerEvents = "none"), u.layersWithOutsidePointerEventsDisabled.add(d)), u.layers.add(d), Mf(), () => {
                n && u.layersWithOutsidePointerEventsDisabled.size === 1 && (v.body.style.pointerEvents = Of)
            }
        }, [d, v, n, u]), y.useEffect(() => () => {
            d && (u.layers.delete(d), u.layersWithOutsidePointerEventsDisabled.delete(d), Mf())
        }, [d, u]), y.useEffect(() => {
            const k = () => p({});
            return document.addEventListener(Pu, k), () => document.removeEventListener(Pu, k)
        }, []), c.jsx(le.div, { ...l,
            ref: S,
            style: {
                pointerEvents: x ? C ? "auto" : "none" : void 0,
                ...e.style
            },
            onFocusCapture: re(e.onFocusCapture, b.onFocusCapture),
            onBlurCapture: re(e.onBlurCapture, b.onBlurCapture),
            onPointerDownCapture: re(e.onPointerDownCapture, E.onPointerDownCapture)
        })
    });
Sa.displayName = Sw;
var bw = "DismissableLayerBranch",
    Xm = y.forwardRef((e, t) => {
        const n = y.useContext(qm),
            r = y.useRef(null),
            o = Ne(t, r);
        return y.useEffect(() => {
            const s = r.current;
            if (s) return n.branches.add(s), () => {
                n.branches.delete(s)
            }
        }, [n.branches]), c.jsx(le.div, { ...e,
            ref: o
        })
    });
Xm.displayName = bw;

function kw(e, t = globalThis == null ? void 0 : globalThis.document) {
    const n = zt(e),
        r = y.useRef(!1),
        o = y.useRef(() => {});
    return y.useEffect(() => {
        const s = a => {
                if (a.target && !r.current) {
                    let l = function() {
                        Zm(Cw, n, u, {
                            discrete: !0
                        })
                    };
                    const u = {
                        originalEvent: a
                    };
                    a.pointerType === "touch" ? (t.removeEventListener("click", o.current), o.current = l, t.addEventListener("click", o.current, {
                        once: !0
                    })) : l()
                } else t.removeEventListener("click", o.current);
                r.current = !1
            },
            i = window.setTimeout(() => {
                t.addEventListener("pointerdown", s)
            }, 0);
        return () => {
            window.clearTimeout(i), t.removeEventListener("pointerdown", s), t.removeEventListener("click", o.current)
        }
    }, [t, n]), {
        onPointerDownCapture: () => r.current = !0
    }
}

function Nw(e, t = globalThis == null ? void 0 : globalThis.document) {
    const n = zt(e),
        r = y.useRef(!1);
    return y.useEffect(() => {
        const o = s => {
            s.target && !r.current && Zm(Ew, n, {
                originalEvent: s
            }, {
                discrete: !1
            })
        };
        return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o)
    }, [t, n]), {
        onFocusCapture: () => r.current = !0,
        onBlurCapture: () => r.current = !1
    }
}

function Mf() {
    const e = new CustomEvent(Pu);
    document.dispatchEvent(e)
}

function Zm(e, t, n, {
    discrete: r
}) {
    const o = n.originalEvent.target,
        s = new CustomEvent(e, {
            bubbles: !1,
            cancelable: !0,
            detail: n
        });
    t && o.addEventListener(e, t, {
        once: !0
    }), r ? Ym(o, s) : o.dispatchEvent(s)
}
var Pw = Sa,
    Aw = Xm,
    $t = globalThis != null && globalThis.document ? y.useLayoutEffect : () => {},
    Tw = "Portal",
    Bc = y.forwardRef((e, t) => {
        var a;
        const {
            container: n,
            ...r
        } = e, [o, s] = y.useState(!1);
        $t(() => s(!0), []);
        const i = n || o && ((a = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : a.body);
        return i ? Hm.createPortal(c.jsx(le.div, { ...r,
            ref: t
        }), i) : null
    });
Bc.displayName = Tw;

function Rw(e, t) {
    return y.useReducer((n, r) => t[n][r] ? ? n, e)
}
var mr = e => {
    const {
        present: t,
        children: n
    } = e, r = jw(t), o = typeof n == "function" ? n({
        present: r.isPresent
    }) : y.Children.only(n), s = Ne(r.ref, Ow(o));
    return typeof n == "function" || r.isPresent ? y.cloneElement(o, {
        ref: s
    }) : null
};
mr.displayName = "Presence";

function jw(e) {
    const [t, n] = y.useState(), r = y.useRef(null), o = y.useRef(e), s = y.useRef("none"), i = e ? "mounted" : "unmounted", [a, l] = Rw(i, {
        mounted: {
            UNMOUNT: "unmounted",
            ANIMATION_OUT: "unmountSuspended"
        },
        unmountSuspended: {
            MOUNT: "mounted",
            ANIMATION_END: "unmounted"
        },
        unmounted: {
            MOUNT: "mounted"
        }
    });
    return y.useEffect(() => {
        const u = Gs(r.current);
        s.current = a === "mounted" ? u : "none"
    }, [a]), $t(() => {
        const u = r.current,
            d = o.current;
        if (d !== e) {
            const v = s.current,
                p = Gs(u);
            e ? l("MOUNT") : p === "none" || (u == null ? void 0 : u.display) === "none" ? l("UNMOUNT") : l(d && v !== p ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e
        }
    }, [e, l]), $t(() => {
        if (t) {
            let u;
            const d = t.ownerDocument.defaultView ? ? window,
                f = p => {
                    const m = Gs(r.current).includes(p.animationName);
                    if (p.target === t && m && (l("ANIMATION_END"), !o.current)) {
                        const w = t.style.animationFillMode;
                        t.style.animationFillMode = "forwards", u = d.setTimeout(() => {
                            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = w)
                        })
                    }
                },
                v = p => {
                    p.target === t && (s.current = Gs(r.current))
                };
            return t.addEventListener("animationstart", v), t.addEventListener("animationcancel", f), t.addEventListener("animationend", f), () => {
                d.clearTimeout(u), t.removeEventListener("animationstart", v), t.removeEventListener("animationcancel", f), t.removeEventListener("animationend", f)
            }
        } else l("ANIMATION_END")
    }, [t, l]), {
        isPresent: ["mounted", "unmountSuspended"].includes(a),
        ref: y.useCallback(u => {
            r.current = u ? getComputedStyle(u) : null, n(u)
        }, [])
    }
}

function Gs(e) {
    return (e == null ? void 0 : e.animationName) || "none"
}

function Ow(e) {
    var r, o;
    let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get,
        n = t && "isReactWarning" in t && t.isReactWarning;
    return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref)
}
var Mw = qu[" useInsertionEffect ".trim().toString()] || $t;

function Es({
    prop: e,
    defaultProp: t,
    onChange: n = () => {},
    caller: r
}) {
    const [o, s, i] = Dw({
        defaultProp: t,
        onChange: n
    }), a = e !== void 0, l = a ? e : o; {
        const d = y.useRef(e !== void 0);
        y.useEffect(() => {
            const f = d.current;
            f !== a && console.warn(`${r} is changing from ${f?"controlled":"uncontrolled"} to ${a?"controlled":"uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`), d.current = a
        }, [a, r])
    }
    const u = y.useCallback(d => {
        var f;
        if (a) {
            const v = Iw(d) ? d(e) : d;
            v !== e && ((f = i.current) == null || f.call(i, v))
        } else s(d)
    }, [a, e, s, i]);
    return [l, u]
}

function Dw({
    defaultProp: e,
    onChange: t
}) {
    const [n, r] = y.useState(e), o = y.useRef(n), s = y.useRef(t);
    return Mw(() => {
        s.current = t
    }, [t]), y.useEffect(() => {
        var i;
        o.current !== n && ((i = s.current) == null || i.call(s, n), o.current = n)
    }, [n, o]), [n, r, s]
}

function Iw(e) {
    return typeof e == "function"
}
var _w = Object.freeze({
        position: "absolute",
        border: 0,
        width: 1,
        height: 1,
        padding: 0,
        margin: -1,
        overflow: "hidden",
        clip: "rect(0, 0, 0, 0)",
        whiteSpace: "nowrap",
        wordWrap: "normal"
    }),
    Lw = "VisuallyHidden",
    Ca = y.forwardRef((e, t) => c.jsx(le.span, { ...e,
        ref: t,
        style: { ..._w,
            ...e.style
        }
    }));
Ca.displayName = Lw;
var Fw = Ca,
    Uc = "ToastProvider",
    [Vc, zw, $w] = Gm("Toast"),
    [Jm, JN] = hr("Toast", [$w]),
    [Bw, Ea] = Jm(Uc),
    ev = e => {
        const {
            __scopeToast: t,
            label: n = "Notification",
            duration: r = 5e3,
            swipeDirection: o = "right",
            swipeThreshold: s = 50,
            children: i
        } = e, [a, l] = y.useState(null), [u, d] = y.useState(0), f = y.useRef(!1), v = y.useRef(!1);
        return n.trim() || console.error(`Invalid prop \`label\` supplied to \`${Uc}\`. Expected non-empty \`string\`.`), c.jsx(Vc.Provider, {
            scope: t,
            children: c.jsx(Bw, {
                scope: t,
                label: n,
                duration: r,
                swipeDirection: o,
                swipeThreshold: s,
                toastCount: u,
                viewport: a,
                onViewportChange: l,
                onToastAdd: y.useCallback(() => d(p => p + 1), []),
                onToastRemove: y.useCallback(() => d(p => p - 1), []),
                isFocusedToastEscapeKeyDownRef: f,
                isClosePausedRef: v,
                children: i
            })
        })
    };
ev.displayName = Uc;
var tv = "ToastViewport",
    Uw = ["F8"],
    Au = "toast.viewportPause",
    Tu = "toast.viewportResume",
    nv = y.forwardRef((e, t) => {
        const {
            __scopeToast: n,
            hotkey: r = Uw,
            label: o = "Notifications ({hotkey})",
            ...s
        } = e, i = Ea(tv, n), a = zw(n), l = y.useRef(null), u = y.useRef(null), d = y.useRef(null), f = y.useRef(null), v = Ne(t, f, i.onViewportChange), p = r.join("+").replace(/Key/g, "").replace(/Digit/g, ""), S = i.toastCount > 0;
        y.useEffect(() => {
            const w = g => {
                var x;
                r.length !== 0 && r.every(C => g[C] || g.code === C) && ((x = f.current) == null || x.focus())
            };
            return document.addEventListener("keydown", w), () => document.removeEventListener("keydown", w)
        }, [r]), y.useEffect(() => {
            const w = l.current,
                g = f.current;
            if (S && w && g) {
                const h = () => {
                        if (!i.isClosePausedRef.current) {
                            const b = new CustomEvent(Au);
                            g.dispatchEvent(b), i.isClosePausedRef.current = !0
                        }
                    },
                    x = () => {
                        if (i.isClosePausedRef.current) {
                            const b = new CustomEvent(Tu);
                            g.dispatchEvent(b), i.isClosePausedRef.current = !1
                        }
                    },
                    C = b => {
                        !w.contains(b.relatedTarget) && x()
                    },
                    E = () => {
                        w.contains(document.activeElement) || x()
                    };
                return w.addEventListener("focusin", h), w.addEventListener("focusout", C), w.addEventListener("pointermove", h), w.addEventListener("pointerleave", E), window.addEventListener("blur", h), window.addEventListener("focus", x), () => {
                    w.removeEventListener("focusin", h), w.removeEventListener("focusout", C), w.removeEventListener("pointermove", h), w.removeEventListener("pointerleave", E), window.removeEventListener("blur", h), window.removeEventListener("focus", x)
                }
            }
        }, [S, i.isClosePausedRef]);
        const m = y.useCallback(({
            tabbingDirection: w
        }) => {
            const h = a().map(x => {
                const C = x.ref.current,
                    E = [C, ...t1(C)];
                return w === "forwards" ? E : E.reverse()
            });
            return (w === "forwards" ? h.reverse() : h).flat()
        }, [a]);
        return y.useEffect(() => {
            const w = f.current;
            if (w) {
                const g = h => {
                    var E, b, k;
                    const x = h.altKey || h.ctrlKey || h.metaKey;
                    if (h.key === "Tab" && !x) {
                        const T = document.activeElement,
                            O = h.shiftKey;
                        if (h.target === w && O) {
                            (E = u.current) == null || E.focus();
                            return
                        }
                        const L = m({
                                tabbingDirection: O ? "backwards" : "forwards"
                            }),
                            Q = L.findIndex(D => D === T);
                        El(L.slice(Q + 1)) ? h.preventDefault() : O ? (b = u.current) == null || b.focus() : (k = d.current) == null || k.focus()
                    }
                };
                return w.addEventListener("keydown", g), () => w.removeEventListener("keydown", g)
            }
        }, [a, m]), c.jsxs(Aw, {
            ref: l,
            role: "region",
            "aria-label": o.replace("{hotkey}", p),
            tabIndex: -1,
            style: {
                pointerEvents: S ? void 0 : "none"
            },
            children: [S && c.jsx(Ru, {
                ref: u,
                onFocusFromOutsideViewport: () => {
                    const w = m({
                        tabbingDirection: "forwards"
                    });
                    El(w)
                }
            }), c.jsx(Vc.Slot, {
                scope: n,
                children: c.jsx(le.ol, {
                    tabIndex: -1,
                    ...s,
                    ref: v
                })
            }), S && c.jsx(Ru, {
                ref: d,
                onFocusFromOutsideViewport: () => {
                    const w = m({
                        tabbingDirection: "backwards"
                    });
                    El(w)
                }
            })]
        })
    });
nv.displayName = tv;
var rv = "ToastFocusProxy",
    Ru = y.forwardRef((e, t) => {
        const {
            __scopeToast: n,
            onFocusFromOutsideViewport: r,
            ...o
        } = e, s = Ea(rv, n);
        return c.jsx(Ca, {
            "aria-hidden": !0,
            tabIndex: 0,
            ...o,
            ref: t,
            style: {
                position: "fixed"
            },
            onFocus: i => {
                var u;
                const a = i.relatedTarget;
                !((u = s.viewport) != null && u.contains(a)) && r()
            }
        })
    });
Ru.displayName = rv;
var bs = "Toast",
    Vw = "toast.swipeStart",
    Hw = "toast.swipeMove",
    Ww = "toast.swipeCancel",
    Qw = "toast.swipeEnd",
    ov = y.forwardRef((e, t) => {
        const {
            forceMount: n,
            open: r,
            defaultOpen: o,
            onOpenChange: s,
            ...i
        } = e, [a, l] = Es({
            prop: r,
            defaultProp: o ? ? !0,
            onChange: s,
            caller: bs
        });
        return c.jsx(mr, {
            present: n || a,
            children: c.jsx(Yw, {
                open: a,
                ...i,
                ref: t,
                onClose: () => l(!1),
                onPause: zt(e.onPause),
                onResume: zt(e.onResume),
                onSwipeStart: re(e.onSwipeStart, u => {
                    u.currentTarget.setAttribute("data-swipe", "start")
                }),
                onSwipeMove: re(e.onSwipeMove, u => {
                    const {
                        x: d,
                        y: f
                    } = u.detail.delta;
                    u.currentTarget.setAttribute("data-swipe", "move"), u.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${d}px`), u.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${f}px`)
                }),
                onSwipeCancel: re(e.onSwipeCancel, u => {
                    u.currentTarget.setAttribute("data-swipe", "cancel"), u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), u.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"), u.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")
                }),
                onSwipeEnd: re(e.onSwipeEnd, u => {
                    const {
                        x: d,
                        y: f
                    } = u.detail.delta;
                    u.currentTarget.setAttribute("data-swipe", "end"), u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), u.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${d}px`), u.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${f}px`), l(!1)
                })
            })
        })
    });
ov.displayName = bs;
var [Kw, Gw] = Jm(bs, {
    onClose() {}
}), Yw = y.forwardRef((e, t) => {
    const {
        __scopeToast: n,
        type: r = "foreground",
        duration: o,
        open: s,
        onClose: i,
        onEscapeKeyDown: a,
        onPause: l,
        onResume: u,
        onSwipeStart: d,
        onSwipeMove: f,
        onSwipeCancel: v,
        onSwipeEnd: p,
        ...S
    } = e, m = Ea(bs, n), [w, g] = y.useState(null), h = Ne(t, D => g(D)), x = y.useRef(null), C = y.useRef(null), E = o || m.duration, b = y.useRef(0), k = y.useRef(E), T = y.useRef(0), {
        onToastAdd: O,
        onToastRemove: M
    } = m, z = zt(() => {
        var Y;
        (w == null ? void 0 : w.contains(document.activeElement)) && ((Y = m.viewport) == null || Y.focus()), i()
    }), L = y.useCallback(D => {
        !D || D === 1 / 0 || (window.clearTimeout(T.current), b.current = new Date().getTime(), T.current = window.setTimeout(z, D))
    }, [z]);
    y.useEffect(() => {
        const D = m.viewport;
        if (D) {
            const Y = () => {
                    L(k.current), u == null || u()
                },
                $ = () => {
                    const V = new Date().getTime() - b.current;
                    k.current = k.current - V, window.clearTimeout(T.current), l == null || l()
                };
            return D.addEventListener(Au, $), D.addEventListener(Tu, Y), () => {
                D.removeEventListener(Au, $), D.removeEventListener(Tu, Y)
            }
        }
    }, [m.viewport, E, l, u, L]), y.useEffect(() => {
        s && !m.isClosePausedRef.current && L(E)
    }, [s, E, m.isClosePausedRef, L]), y.useEffect(() => (O(), () => M()), [O, M]);
    const Q = y.useMemo(() => w ? dv(w) : null, [w]);
    return m.viewport ? c.jsxs(c.Fragment, {
        children: [Q && c.jsx(qw, {
            __scopeToast: n,
            role: "status",
            "aria-live": r === "foreground" ? "assertive" : "polite",
            "aria-atomic": !0,
            children: Q
        }), c.jsx(Kw, {
            scope: n,
            onClose: z,
            children: Cs.createPortal(c.jsx(Vc.ItemSlot, {
                scope: n,
                children: c.jsx(Pw, {
                    asChild: !0,
                    onEscapeKeyDown: re(a, () => {
                        m.isFocusedToastEscapeKeyDownRef.current || z(), m.isFocusedToastEscapeKeyDownRef.current = !1
                    }),
                    children: c.jsx(le.li, {
                        role: "status",
                        "aria-live": "off",
                        "aria-atomic": !0,
                        tabIndex: 0,
                        "data-state": s ? "open" : "closed",
                        "data-swipe-direction": m.swipeDirection,
                        ...S,
                        ref: h,
                        style: {
                            userSelect: "none",
                            touchAction: "none",
                            ...e.style
                        },
                        onKeyDown: re(e.onKeyDown, D => {
                            D.key === "Escape" && (a == null || a(D.nativeEvent), D.nativeEvent.defaultPrevented || (m.isFocusedToastEscapeKeyDownRef.current = !0, z()))
                        }),
                        onPointerDown: re(e.onPointerDown, D => {
                            D.button === 0 && (x.current = {
                                x: D.clientX,
                                y: D.clientY
                            })
                        }),
                        onPointerMove: re(e.onPointerMove, D => {
                            if (!x.current) return;
                            const Y = D.clientX - x.current.x,
                                $ = D.clientY - x.current.y,
                                V = !!C.current,
                                P = ["left", "right"].includes(m.swipeDirection),
                                A = ["left", "up"].includes(m.swipeDirection) ? Math.min : Math.max,
                                I = P ? A(0, Y) : 0,
                                H = P ? 0 : A(0, $),
                                F = D.pointerType === "touch" ? 10 : 2,
                                K = {
                                    x: I,
                                    y: H
                                },
                                q = {
                                    originalEvent: D,
                                    delta: K
                                };
                            V ? (C.current = K, Ys(Hw, f, q, {
                                discrete: !1
                            })) : Df(K, m.swipeDirection, F) ? (C.current = K, Ys(Vw, d, q, {
                                discrete: !1
                            }), D.target.setPointerCapture(D.pointerId)) : (Math.abs(Y) > F || Math.abs($) > F) && (x.current = null)
                        }),
                        onPointerUp: re(e.onPointerUp, D => {
                            const Y = C.current,
                                $ = D.target;
                            if ($.hasPointerCapture(D.pointerId) && $.releasePointerCapture(D.pointerId), C.current = null, x.current = null, Y) {
                                const V = D.currentTarget,
                                    P = {
                                        originalEvent: D,
                                        delta: Y
                                    };
                                Df(Y, m.swipeDirection, m.swipeThreshold) ? Ys(Qw, p, P, {
                                    discrete: !0
                                }) : Ys(Ww, v, P, {
                                    discrete: !0
                                }), V.addEventListener("click", A => A.preventDefault(), {
                                    once: !0
                                })
                            }
                        })
                    })
                })
            }), m.viewport)
        })]
    }) : null
}), qw = e => {
    const {
        __scopeToast: t,
        children: n,
        ...r
    } = e, o = Ea(bs, t), [s, i] = y.useState(!1), [a, l] = y.useState(!1);
    return Jw(() => i(!0)), y.useEffect(() => {
        const u = window.setTimeout(() => l(!0), 1e3);
        return () => window.clearTimeout(u)
    }, []), a ? null : c.jsx(Bc, {
        asChild: !0,
        children: c.jsx(Ca, { ...r,
            children: s && c.jsxs(c.Fragment, {
                children: [o.label, " ", n]
            })
        })
    })
}, Xw = "ToastTitle", sv = y.forwardRef((e, t) => {
    const {
        __scopeToast: n,
        ...r
    } = e;
    return c.jsx(le.div, { ...r,
        ref: t
    })
});
sv.displayName = Xw;
var Zw = "ToastDescription",
    iv = y.forwardRef((e, t) => {
        const {
            __scopeToast: n,
            ...r
        } = e;
        return c.jsx(le.div, { ...r,
            ref: t
        })
    });
iv.displayName = Zw;
var av = "ToastAction",
    lv = y.forwardRef((e, t) => {
        const {
            altText: n,
            ...r
        } = e;
        return n.trim() ? c.jsx(cv, {
            altText: n,
            asChild: !0,
            children: c.jsx(Hc, { ...r,
                ref: t
            })
        }) : (console.error(`Invalid prop \`altText\` supplied to \`${av}\`. Expected non-empty \`string\`.`), null)
    });
lv.displayName = av;
var uv = "ToastClose",
    Hc = y.forwardRef((e, t) => {
        const {
            __scopeToast: n,
            ...r
        } = e, o = Gw(uv, n);
        return c.jsx(cv, {
            asChild: !0,
            children: c.jsx(le.button, {
                type: "button",
                ...r,
                ref: t,
                onClick: re(e.onClick, o.onClose)
            })
        })
    });
Hc.displayName = uv;
var cv = y.forwardRef((e, t) => {
    const {
        __scopeToast: n,
        altText: r,
        ...o
    } = e;
    return c.jsx(le.div, {
        "data-radix-toast-announce-exclude": "",
        "data-radix-toast-announce-alt": r || void 0,
        ...o,
        ref: t
    })
});

function dv(e) {
    const t = [];
    return Array.from(e.childNodes).forEach(r => {
        if (r.nodeType === r.TEXT_NODE && r.textContent && t.push(r.textContent), e1(r)) {
            const o = r.ariaHidden || r.hidden || r.style.display === "none",
                s = r.dataset.radixToastAnnounceExclude === "";
            if (!o)
                if (s) {
                    const i = r.dataset.radixToastAnnounceAlt;
                    i && t.push(i)
                } else t.push(...dv(r))
        }
    }), t
}

function Ys(e, t, n, {
    discrete: r
}) {
    const o = n.originalEvent.currentTarget,
        s = new CustomEvent(e, {
            bubbles: !0,
            cancelable: !0,
            detail: n
        });
    t && o.addEventListener(e, t, {
        once: !0
    }), r ? Ym(o, s) : o.dispatchEvent(s)
}
var Df = (e, t, n = 0) => {
    const r = Math.abs(e.x),
        o = Math.abs(e.y),
        s = r > o;
    return t === "left" || t === "right" ? s && r > n : !s && o > n
};

function Jw(e = () => {}) {
    const t = zt(e);
    $t(() => {
        let n = 0,
            r = 0;
        return n = window.requestAnimationFrame(() => r = window.requestAnimationFrame(t)), () => {
            window.cancelAnimationFrame(n), window.cancelAnimationFrame(r)
        }
    }, [t])
}

function e1(e) {
    return e.nodeType === e.ELEMENT_NODE
}

function t1(e) {
    const t = [],
        n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
            acceptNode: r => {
                const o = r.tagName === "INPUT" && r.type === "hidden";
                return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
            }
        });
    for (; n.nextNode();) t.push(n.currentNode);
    return t
}

function El(e) {
    const t = document.activeElement;
    return e.some(n => n === t ? !0 : (n.focus(), document.activeElement !== t))
}
var n1 = ev,
    fv = nv,
    pv = ov,
    hv = sv,
    mv = iv,
    vv = lv,
    gv = Hc;

function yv(e) {
    var t, n, r = "";
    if (typeof e == "string" || typeof e == "number") r += e;
    else if (typeof e == "object")
        if (Array.isArray(e)) {
            var o = e.length;
            for (t = 0; t < o; t++) e[t] && (n = yv(e[t])) && (r && (r += " "), r += n)
        } else
            for (n in e) e[n] && (r && (r += " "), r += n);
    return r
}

function xv() {
    for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++)(e = arguments[n]) && (t = yv(e)) && (r && (r += " "), r += t);
    return r
}
const If = e => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e,
    _f = xv,
    ba = (e, t) => n => {
        var r;
        if ((t == null ? void 0 : t.variants) == null) return _f(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
        const {
            variants: o,
            defaultVariants: s
        } = t, i = Object.keys(o).map(u => {
            const d = n == null ? void 0 : n[u],
                f = s == null ? void 0 : s[u];
            if (d === null) return null;
            const v = If(d) || If(f);
            return o[u][v]
        }), a = n && Object.entries(n).reduce((u, d) => {
            let [f, v] = d;
            return v === void 0 || (u[f] = v), u
        }, {}), l = t == null || (r = t.compoundVariants) === null || r === void 0 ? void 0 : r.reduce((u, d) => {
            let {
                class: f,
                className: v,
                ...p
            } = d;
            return Object.entries(p).every(S => {
                let [m, w] = S;
                return Array.isArray(w) ? w.includes({ ...s,
                    ...a
                }[m]) : { ...s,
                    ...a
                }[m] === w
            }) ? [...u, f, v] : u
        }, []);
        return _f(e, i, l, n == null ? void 0 : n.class, n == null ? void 0 : n.className)
    };
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const r1 = e => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
    wv = (...e) => e.filter((t, n, r) => !!t && t.trim() !== "" && r.indexOf(t) === n).join(" ").trim();
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var o1 = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const s1 = y.forwardRef(({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: n = 2,
    absoluteStrokeWidth: r,
    className: o = "",
    children: s,
    iconNode: i,
    ...a
}, l) => y.createElement("svg", {
    ref: l,
    ...o1,
    width: t,
    height: t,
    stroke: e,
    strokeWidth: r ? Number(n) * 24 / Number(t) : n,
    className: wv("lucide", o),
    ...a
}, [...i.map(([u, d]) => y.createElement(u, d)), ...Array.isArray(s) ? s : [s]]));
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $e = (e, t) => {
    const n = y.forwardRef(({
        className: r,
        ...o
    }, s) => y.createElement(s1, {
        ref: s,
        iconNode: t,
        className: wv(`lucide-${r1(e)}`, r),
        ...o
    }));
    return n.displayName = `${e}`, n
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const i1 = $e("ChevronDown", [
    ["path", {
        d: "m6 9 6 6 6-6",
        key: "qrunsl"
    }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const a1 = $e("ChevronLeft", [
    ["path", {
        d: "m15 18-6-6 6-6",
        key: "1wnfg3"
    }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const l1 = $e("ChevronRight", [
    ["path", {
        d: "m9 18 6-6-6-6",
        key: "mthhwq"
    }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const u1 = $e("CircleCheck", [
    ["circle", {
        cx: "12",
        cy: "12",
        r: "10",
        key: "1mglay"
    }],
    ["path", {
        d: "m9 12 2 2 4-4",
        key: "dzmm74"
    }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const c1 = $e("House", [
    ["path", {
        d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",
        key: "5wwlr5"
    }],
    ["path", {
        d: "M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
        key: "1d0kgt"
    }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const d1 = $e("MapPin", [
    ["path", {
        d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
        key: "1r0f0z"
    }],
    ["circle", {
        cx: "12",
        cy: "10",
        r: "3",
        key: "ilqhr7"
    }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const f1 = $e("MessageCircle", [
    ["path", {
        d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z",
        key: "vv11sd"
    }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const p1 = $e("Package", [
    ["path", {
        d: "M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",
        key: "1a0edw"
    }],
    ["path", {
        d: "M12 22V12",
        key: "d0xqtd"
    }],
    ["path", {
        d: "m3.3 7 7.703 4.734a2 2 0 0 0 1.994 0L20.7 7",
        key: "yx3hmr"
    }],
    ["path", {
        d: "m7.5 4.27 9 5.15",
        key: "1c824w"
    }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const h1 = $e("RotateCcw", [
    ["path", {
        d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",
        key: "1357e3"
    }],
    ["path", {
        d: "M3 3v5h5",
        key: "1xhq8a"
    }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const m1 = $e("Share2", [
    ["circle", {
        cx: "18",
        cy: "5",
        r: "3",
        key: "gq8acd"
    }],
    ["circle", {
        cx: "6",
        cy: "12",
        r: "3",
        key: "w7nqdw"
    }],
    ["circle", {
        cx: "18",
        cy: "19",
        r: "3",
        key: "1xt0gg"
    }],
    ["line", {
        x1: "8.59",
        x2: "15.42",
        y1: "13.51",
        y2: "17.49",
        key: "47mynk"
    }],
    ["line", {
        x1: "15.41",
        x2: "8.59",
        y1: "6.51",
        y2: "10.49",
        key: "1n3mei"
    }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const v1 = $e("ShoppingCart", [
    ["circle", {
        cx: "8",
        cy: "21",
        r: "1",
        key: "jimo8o"
    }],
    ["circle", {
        cx: "19",
        cy: "21",
        r: "1",
        key: "13723u"
    }],
    ["path", {
        d: "M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",
        key: "9zh506"
    }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gi = $e("Star", [
    ["path", {
        d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
        key: "r04s7s"
    }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const g1 = $e("ThumbsUp", [
    ["path", {
        d: "M7 10v12",
        key: "1qc93n"
    }],
    ["path", {
        d: "M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z",
        key: "emmmcr"
    }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const y1 = $e("Truck", [
    ["path", {
        d: "M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2",
        key: "wrbu53"
    }],
    ["path", {
        d: "M15 18H9",
        key: "1lyqi6"
    }],
    ["path", {
        d: "M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14",
        key: "lysw3i"
    }],
    ["circle", {
        cx: "17",
        cy: "18",
        r: "2",
        key: "332jqn"
    }],
    ["circle", {
        cx: "7",
        cy: "18",
        r: "2",
        key: "19iecd"
    }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ks = $e("X", [
        ["path", {
            d: "M18 6 6 18",
            key: "1bl5f8"
        }],
        ["path", {
            d: "m6 6 12 12",
            key: "d8bk6v"
        }]
    ]),
    Wc = "-",
    x1 = e => {
        const t = S1(e),
            {
                conflictingClassGroups: n,
                conflictingClassGroupModifiers: r
            } = e;
        return {
            getClassGroupId: i => {
                const a = i.split(Wc);
                return a[0] === "" && a.length !== 1 && a.shift(), Sv(a, t) || w1(i)
            },
            getConflictingClassGroupIds: (i, a) => {
                const l = n[i] || [];
                return a && r[i] ? [...l, ...r[i]] : l
            }
        }
    },
    Sv = (e, t) => {
        var i;
        if (e.length === 0) return t.classGroupId;
        const n = e[0],
            r = t.nextPart.get(n),
            o = r ? Sv(e.slice(1), r) : void 0;
        if (o) return o;
        if (t.validators.length === 0) return;
        const s = e.join(Wc);
        return (i = t.validators.find(({
            validator: a
        }) => a(s))) == null ? void 0 : i.classGroupId
    },
    Lf = /^\[(.+)\]$/,
    w1 = e => {
        if (Lf.test(e)) {
            const t = Lf.exec(e)[1],
                n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
            if (n) return "arbitrary.." + n
        }
    },
    S1 = e => {
        const {
            theme: t,
            prefix: n
        } = e, r = {
            nextPart: new Map,
            validators: []
        };
        return E1(Object.entries(e.classGroups), n).forEach(([s, i]) => {
            ju(i, r, s, t)
        }), r
    },
    ju = (e, t, n, r) => {
        e.forEach(o => {
            if (typeof o == "string") {
                const s = o === "" ? t : Ff(t, o);
                s.classGroupId = n;
                return
            }
            if (typeof o == "function") {
                if (C1(o)) {
                    ju(o(r), t, n, r);
                    return
                }
                t.validators.push({
                    validator: o,
                    classGroupId: n
                });
                return
            }
            Object.entries(o).forEach(([s, i]) => {
                ju(i, Ff(t, s), n, r)
            })
        })
    },
    Ff = (e, t) => {
        let n = e;
        return t.split(Wc).forEach(r => {
            n.nextPart.has(r) || n.nextPart.set(r, {
                nextPart: new Map,
                validators: []
            }), n = n.nextPart.get(r)
        }), n
    },
    C1 = e => e.isThemeGetter,
    E1 = (e, t) => t ? e.map(([n, r]) => {
        const o = r.map(s => typeof s == "string" ? t + s : typeof s == "object" ? Object.fromEntries(Object.entries(s).map(([i, a]) => [t + i, a])) : s);
        return [n, o]
    }) : e,
    b1 = e => {
        if (e < 1) return {
            get: () => {},
            set: () => {}
        };
        let t = 0,
            n = new Map,
            r = new Map;
        const o = (s, i) => {
            n.set(s, i), t++, t > e && (t = 0, r = n, n = new Map)
        };
        return {
            get(s) {
                let i = n.get(s);
                if (i !== void 0) return i;
                if ((i = r.get(s)) !== void 0) return o(s, i), i
            },
            set(s, i) {
                n.has(s) ? n.set(s, i) : o(s, i)
            }
        }
    },
    Cv = "!",
    k1 = e => {
        const {
            separator: t,
            experimentalParseClassName: n
        } = e, r = t.length === 1, o = t[0], s = t.length, i = a => {
            const l = [];
            let u = 0,
                d = 0,
                f;
            for (let w = 0; w < a.length; w++) {
                let g = a[w];
                if (u === 0) {
                    if (g === o && (r || a.slice(w, w + s) === t)) {
                        l.push(a.slice(d, w)), d = w + s;
                        continue
                    }
                    if (g === "/") {
                        f = w;
                        continue
                    }
                }
                g === "[" ? u++ : g === "]" && u--
            }
            const v = l.length === 0 ? a : a.substring(d),
                p = v.startsWith(Cv),
                S = p ? v.substring(1) : v,
                m = f && f > d ? f - d : void 0;
            return {
                modifiers: l,
                hasImportantModifier: p,
                baseClassName: S,
                maybePostfixModifierPosition: m
            }
        };
        return n ? a => n({
            className: a,
            parseClassName: i
        }) : i
    },
    N1 = e => {
        if (e.length <= 1) return e;
        const t = [];
        let n = [];
        return e.forEach(r => {
            r[0] === "[" ? (t.push(...n.sort(), r), n = []) : n.push(r)
        }), t.push(...n.sort()), t
    },
    P1 = e => ({
        cache: b1(e.cacheSize),
        parseClassName: k1(e),
        ...x1(e)
    }),
    A1 = /\s+/,
    T1 = (e, t) => {
        const {
            parseClassName: n,
            getClassGroupId: r,
            getConflictingClassGroupIds: o
        } = t, s = [], i = e.trim().split(A1);
        let a = "";
        for (let l = i.length - 1; l >= 0; l -= 1) {
            const u = i[l],
                {
                    modifiers: d,
                    hasImportantModifier: f,
                    baseClassName: v,
                    maybePostfixModifierPosition: p
                } = n(u);
            let S = !!p,
                m = r(S ? v.substring(0, p) : v);
            if (!m) {
                if (!S) {
                    a = u + (a.length > 0 ? " " + a : a);
                    continue
                }
                if (m = r(v), !m) {
                    a = u + (a.length > 0 ? " " + a : a);
                    continue
                }
                S = !1
            }
            const w = N1(d).join(":"),
                g = f ? w + Cv : w,
                h = g + m;
            if (s.includes(h)) continue;
            s.push(h);
            const x = o(m, S);
            for (let C = 0; C < x.length; ++C) {
                const E = x[C];
                s.push(g + E)
            }
            a = u + (a.length > 0 ? " " + a : a)
        }
        return a
    };

function R1() {
    let e = 0,
        t, n, r = "";
    for (; e < arguments.length;)(t = arguments[e++]) && (n = Ev(t)) && (r && (r += " "), r += n);
    return r
}
const Ev = e => {
    if (typeof e == "string") return e;
    let t, n = "";
    for (let r = 0; r < e.length; r++) e[r] && (t = Ev(e[r])) && (n && (n += " "), n += t);
    return n
};

function j1(e, ...t) {
    let n, r, o, s = i;

    function i(l) {
        const u = t.reduce((d, f) => f(d), e());
        return n = P1(u), r = n.cache.get, o = n.cache.set, s = a, a(l)
    }

    function a(l) {
        const u = r(l);
        if (u) return u;
        const d = T1(l, n);
        return o(l, d), d
    }
    return function() {
        return s(R1.apply(null, arguments))
    }
}
const se = e => {
        const t = n => n[e] || [];
        return t.isThemeGetter = !0, t
    },
    bv = /^\[(?:([a-z-]+):)?(.+)\]$/i,
    O1 = /^\d+\/\d+$/,
    M1 = new Set(["px", "full", "screen"]),
    D1 = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
    I1 = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
    _1 = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
    L1 = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
    F1 = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
    Vt = e => Hr(e) || M1.has(e) || O1.test(e),
    fn = e => mo(e, "length", Q1),
    Hr = e => !!e && !Number.isNaN(Number(e)),
    bl = e => mo(e, "number", Hr),
    Ao = e => !!e && Number.isInteger(Number(e)),
    z1 = e => e.endsWith("%") && Hr(e.slice(0, -1)),
    W = e => bv.test(e),
    pn = e => D1.test(e),
    $1 = new Set(["length", "size", "percentage"]),
    B1 = e => mo(e, $1, kv),
    U1 = e => mo(e, "position", kv),
    V1 = new Set(["image", "url"]),
    H1 = e => mo(e, V1, G1),
    W1 = e => mo(e, "", K1),
    To = () => !0,
    mo = (e, t, n) => {
        const r = bv.exec(e);
        return r ? r[1] ? typeof t == "string" ? r[1] === t : t.has(r[1]) : n(r[2]) : !1
    },
    Q1 = e => I1.test(e) && !_1.test(e),
    kv = () => !1,
    K1 = e => L1.test(e),
    G1 = e => F1.test(e),
    Y1 = () => {
        const e = se("colors"),
            t = se("spacing"),
            n = se("blur"),
            r = se("brightness"),
            o = se("borderColor"),
            s = se("borderRadius"),
            i = se("borderSpacing"),
            a = se("borderWidth"),
            l = se("contrast"),
            u = se("grayscale"),
            d = se("hueRotate"),
            f = se("invert"),
            v = se("gap"),
            p = se("gradientColorStops"),
            S = se("gradientColorStopPositions"),
            m = se("inset"),
            w = se("margin"),
            g = se("opacity"),
            h = se("padding"),
            x = se("saturate"),
            C = se("scale"),
            E = se("sepia"),
            b = se("skew"),
            k = se("space"),
            T = se("translate"),
            O = () => ["auto", "contain", "none"],
            M = () => ["auto", "hidden", "clip", "visible", "scroll"],
            z = () => ["auto", W, t],
            L = () => [W, t],
            Q = () => ["", Vt, fn],
            D = () => ["auto", Hr, W],
            Y = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"],
            $ = () => ["solid", "dashed", "dotted", "double", "none"],
            V = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"],
            P = () => ["start", "end", "center", "between", "around", "evenly", "stretch"],
            A = () => ["", "0", W],
            I = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"],
            H = () => [Hr, W];
        return {
            cacheSize: 500,
            separator: ":",
            theme: {
                colors: [To],
                spacing: [Vt, fn],
                blur: ["none", "", pn, W],
                brightness: H(),
                borderColor: [e],
                borderRadius: ["none", "", "full", pn, W],
                borderSpacing: L(),
                borderWidth: Q(),
                contrast: H(),
                grayscale: A(),
                hueRotate: H(),
                invert: A(),
                gap: L(),
                gradientColorStops: [e],
                gradientColorStopPositions: [z1, fn],
                inset: z(),
                margin: z(),
                opacity: H(),
                padding: L(),
                saturate: H(),
                scale: H(),
                sepia: A(),
                skew: H(),
                space: L(),
                translate: L()
            },
            classGroups: {
                aspect: [{
                    aspect: ["auto", "square", "video", W]
                }],
                container: ["container"],
                columns: [{
                    columns: [pn]
                }],
                "break-after": [{
                    "break-after": I()
                }],
                "break-before": [{
                    "break-before": I()
                }],
                "break-inside": [{
                    "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
                }],
                "box-decoration": [{
                    "box-decoration": ["slice", "clone"]
                }],
                box: [{
                    box: ["border", "content"]
                }],
                display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
                float: [{
                    float: ["right", "left", "none", "start", "end"]
                }],
                clear: [{
                    clear: ["left", "right", "both", "none", "start", "end"]
                }],
                isolation: ["isolate", "isolation-auto"],
                "object-fit": [{
                    object: ["contain", "cover", "fill", "none", "scale-down"]
                }],
                "object-position": [{
                    object: [...Y(), W]
                }],
                overflow: [{
                    overflow: M()
                }],
                "overflow-x": [{
                    "overflow-x": M()
                }],
                "overflow-y": [{
                    "overflow-y": M()
                }],
                overscroll: [{
                    overscroll: O()
                }],
                "overscroll-x": [{
                    "overscroll-x": O()
                }],
                "overscroll-y": [{
                    "overscroll-y": O()
                }],
                position: ["static", "fixed", "absolute", "relative", "sticky"],
                inset: [{
                    inset: [m]
                }],
                "inset-x": [{
                    "inset-x": [m]
                }],
                "inset-y": [{
                    "inset-y": [m]
                }],
                start: [{
                    start: [m]
                }],
                end: [{
                    end: [m]
                }],
                top: [{
                    top: [m]
                }],
                right: [{
                    right: [m]
                }],
                bottom: [{
                    bottom: [m]
                }],
                left: [{
                    left: [m]
                }],
                visibility: ["visible", "invisible", "collapse"],
                z: [{
                    z: ["auto", Ao, W]
                }],
                basis: [{
                    basis: z()
                }],
                "flex-direction": [{
                    flex: ["row", "row-reverse", "col", "col-reverse"]
                }],
                "flex-wrap": [{
                    flex: ["wrap", "wrap-reverse", "nowrap"]
                }],
                flex: [{
                    flex: ["1", "auto", "initial", "none", W]
                }],
                grow: [{
                    grow: A()
                }],
                shrink: [{
                    shrink: A()
                }],
                order: [{
                    order: ["first", "last", "none", Ao, W]
                }],
                "grid-cols": [{
                    "grid-cols": [To]
                }],
                "col-start-end": [{
                    col: ["auto", {
                        span: ["full", Ao, W]
                    }, W]
                }],
                "col-start": [{
                    "col-start": D()
                }],
                "col-end": [{
                    "col-end": D()
                }],
                "grid-rows": [{
                    "grid-rows": [To]
                }],
                "row-start-end": [{
                    row: ["auto", {
                        span: [Ao, W]
                    }, W]
                }],
                "row-start": [{
                    "row-start": D()
                }],
                "row-end": [{
                    "row-end": D()
                }],
                "grid-flow": [{
                    "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
                }],
                "auto-cols": [{
                    "auto-cols": ["auto", "min", "max", "fr", W]
                }],
                "auto-rows": [{
                    "auto-rows": ["auto", "min", "max", "fr", W]
                }],
                gap: [{
                    gap: [v]
                }],
                "gap-x": [{
                    "gap-x": [v]
                }],
                "gap-y": [{
                    "gap-y": [v]
                }],
                "justify-content": [{
                    justify: ["normal", ...P()]
                }],
                "justify-items": [{
                    "justify-items": ["start", "end", "center", "stretch"]
                }],
                "justify-self": [{
                    "justify-self": ["auto", "start", "end", "center", "stretch"]
                }],
                "align-content": [{
                    content: ["normal", ...P(), "baseline"]
                }],
                "align-items": [{
                    items: ["start", "end", "center", "baseline", "stretch"]
                }],
                "align-self": [{
                    self: ["auto", "start", "end", "center", "stretch", "baseline"]
                }],
                "place-content": [{
                    "place-content": [...P(), "baseline"]
                }],
                "place-items": [{
                    "place-items": ["start", "end", "center", "baseline", "stretch"]
                }],
                "place-self": [{
                    "place-self": ["auto", "start", "end", "center", "stretch"]
                }],
                p: [{
                    p: [h]
                }],
                px: [{
                    px: [h]
                }],
                py: [{
                    py: [h]
                }],
                ps: [{
                    ps: [h]
                }],
                pe: [{
                    pe: [h]
                }],
                pt: [{
                    pt: [h]
                }],
                pr: [{
                    pr: [h]
                }],
                pb: [{
                    pb: [h]
                }],
                pl: [{
                    pl: [h]
                }],
                m: [{
                    m: [w]
                }],
                mx: [{
                    mx: [w]
                }],
                my: [{
                    my: [w]
                }],
                ms: [{
                    ms: [w]
                }],
                me: [{
                    me: [w]
                }],
                mt: [{
                    mt: [w]
                }],
                mr: [{
                    mr: [w]
                }],
                mb: [{
                    mb: [w]
                }],
                ml: [{
                    ml: [w]
                }],
                "space-x": [{
                    "space-x": [k]
                }],
                "space-x-reverse": ["space-x-reverse"],
                "space-y": [{
                    "space-y": [k]
                }],
                "space-y-reverse": ["space-y-reverse"],
                w: [{
                    w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", W, t]
                }],
                "min-w": [{
                    "min-w": [W, t, "min", "max", "fit"]
                }],
                "max-w": [{
                    "max-w": [W, t, "none", "full", "min", "max", "fit", "prose", {
                        screen: [pn]
                    }, pn]
                }],
                h: [{
                    h: [W, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
                }],
                "min-h": [{
                    "min-h": [W, t, "min", "max", "fit", "svh", "lvh", "dvh"]
                }],
                "max-h": [{
                    "max-h": [W, t, "min", "max", "fit", "svh", "lvh", "dvh"]
                }],
                size: [{
                    size: [W, t, "auto", "min", "max", "fit"]
                }],
                "font-size": [{
                    text: ["base", pn, fn]
                }],
                "font-smoothing": ["antialiased", "subpixel-antialiased"],
                "font-style": ["italic", "not-italic"],
                "font-weight": [{
                    font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", bl]
                }],
                "font-family": [{
                    font: [To]
                }],
                "fvn-normal": ["normal-nums"],
                "fvn-ordinal": ["ordinal"],
                "fvn-slashed-zero": ["slashed-zero"],
                "fvn-figure": ["lining-nums", "oldstyle-nums"],
                "fvn-spacing": ["proportional-nums", "tabular-nums"],
                "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
                tracking: [{
                    tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", W]
                }],
                "line-clamp": [{
                    "line-clamp": ["none", Hr, bl]
                }],
                leading: [{
                    leading: ["none", "tight", "snug", "normal", "relaxed", "loose", Vt, W]
                }],
                "list-image": [{
                    "list-image": ["none", W]
                }],
                "list-style-type": [{
                    list: ["none", "disc", "decimal", W]
                }],
                "list-style-position": [{
                    list: ["inside", "outside"]
                }],
                "placeholder-color": [{
                    placeholder: [e]
                }],
                "placeholder-opacity": [{
                    "placeholder-opacity": [g]
                }],
                "text-alignment": [{
                    text: ["left", "center", "right", "justify", "start", "end"]
                }],
                "text-color": [{
                    text: [e]
                }],
                "text-opacity": [{
                    "text-opacity": [g]
                }],
                "text-decoration": ["underline", "overline", "line-through", "no-underline"],
                "text-decoration-style": [{
                    decoration: [...$(), "wavy"]
                }],
                "text-decoration-thickness": [{
                    decoration: ["auto", "from-font", Vt, fn]
                }],
                "underline-offset": [{
                    "underline-offset": ["auto", Vt, W]
                }],
                "text-decoration-color": [{
                    decoration: [e]
                }],
                "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
                "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
                "text-wrap": [{
                    text: ["wrap", "nowrap", "balance", "pretty"]
                }],
                indent: [{
                    indent: L()
                }],
                "vertical-align": [{
                    align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", W]
                }],
                whitespace: [{
                    whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
                }],
                break: [{
                    break: ["normal", "words", "all", "keep"]
                }],
                hyphens: [{
                    hyphens: ["none", "manual", "auto"]
                }],
                content: [{
                    content: ["none", W]
                }],
                "bg-attachment": [{
                    bg: ["fixed", "local", "scroll"]
                }],
                "bg-clip": [{
                    "bg-clip": ["border", "padding", "content", "text"]
                }],
                "bg-opacity": [{
                    "bg-opacity": [g]
                }],
                "bg-origin": [{
                    "bg-origin": ["border", "padding", "content"]
                }],
                "bg-position": [{
                    bg: [...Y(), U1]
                }],
                "bg-repeat": [{
                    bg: ["no-repeat", {
                        repeat: ["", "x", "y", "round", "space"]
                    }]
                }],
                "bg-size": [{
                    bg: ["auto", "cover", "contain", B1]
                }],
                "bg-image": [{
                    bg: ["none", {
                        "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
                    }, H1]
                }],
                "bg-color": [{
                    bg: [e]
                }],
                "gradient-from-pos": [{
                    from: [S]
                }],
                "gradient-via-pos": [{
                    via: [S]
                }],
                "gradient-to-pos": [{
                    to: [S]
                }],
                "gradient-from": [{
                    from: [p]
                }],
                "gradient-via": [{
                    via: [p]
                }],
                "gradient-to": [{
                    to: [p]
                }],
                rounded: [{
                    rounded: [s]
                }],
                "rounded-s": [{
                    "rounded-s": [s]
                }],
                "rounded-e": [{
                    "rounded-e": [s]
                }],
                "rounded-t": [{
                    "rounded-t": [s]
                }],
                "rounded-r": [{
                    "rounded-r": [s]
                }],
                "rounded-b": [{
                    "rounded-b": [s]
                }],
                "rounded-l": [{
                    "rounded-l": [s]
                }],
                "rounded-ss": [{
                    "rounded-ss": [s]
                }],
                "rounded-se": [{
                    "rounded-se": [s]
                }],
                "rounded-ee": [{
                    "rounded-ee": [s]
                }],
                "rounded-es": [{
                    "rounded-es": [s]
                }],
                "rounded-tl": [{
                    "rounded-tl": [s]
                }],
                "rounded-tr": [{
                    "rounded-tr": [s]
                }],
                "rounded-br": [{
                    "rounded-br": [s]
                }],
                "rounded-bl": [{
                    "rounded-bl": [s]
                }],
                "border-w": [{
                    border: [a]
                }],
                "border-w-x": [{
                    "border-x": [a]
                }],
                "border-w-y": [{
                    "border-y": [a]
                }],
                "border-w-s": [{
                    "border-s": [a]
                }],
                "border-w-e": [{
                    "border-e": [a]
                }],
                "border-w-t": [{
                    "border-t": [a]
                }],
                "border-w-r": [{
                    "border-r": [a]
                }],
                "border-w-b": [{
                    "border-b": [a]
                }],
                "border-w-l": [{
                    "border-l": [a]
                }],
                "border-opacity": [{
                    "border-opacity": [g]
                }],
                "border-style": [{
                    border: [...$(), "hidden"]
                }],
                "divide-x": [{
                    "divide-x": [a]
                }],
                "divide-x-reverse": ["divide-x-reverse"],
                "divide-y": [{
                    "divide-y": [a]
                }],
                "divide-y-reverse": ["divide-y-reverse"],
                "divide-opacity": [{
                    "divide-opacity": [g]
                }],
                "divide-style": [{
                    divide: $()
                }],
                "border-color": [{
                    border: [o]
                }],
                "border-color-x": [{
                    "border-x": [o]
                }],
                "border-color-y": [{
                    "border-y": [o]
                }],
                "border-color-s": [{
                    "border-s": [o]
                }],
                "border-color-e": [{
                    "border-e": [o]
                }],
                "border-color-t": [{
                    "border-t": [o]
                }],
                "border-color-r": [{
                    "border-r": [o]
                }],
                "border-color-b": [{
                    "border-b": [o]
                }],
                "border-color-l": [{
                    "border-l": [o]
                }],
                "divide-color": [{
                    divide: [o]
                }],
                "outline-style": [{
                    outline: ["", ...$()]
                }],
                "outline-offset": [{
                    "outline-offset": [Vt, W]
                }],
                "outline-w": [{
                    outline: [Vt, fn]
                }],
                "outline-color": [{
                    outline: [e]
                }],
                "ring-w": [{
                    ring: Q()
                }],
                "ring-w-inset": ["ring-inset"],
                "ring-color": [{
                    ring: [e]
                }],
                "ring-opacity": [{
                    "ring-opacity": [g]
                }],
                "ring-offset-w": [{
                    "ring-offset": [Vt, fn]
                }],
                "ring-offset-color": [{
                    "ring-offset": [e]
                }],
                shadow: [{
                    shadow: ["", "inner", "none", pn, W1]
                }],
                "shadow-color": [{
                    shadow: [To]
                }],
                opacity: [{
                    opacity: [g]
                }],
                "mix-blend": [{
                    "mix-blend": [...V(), "plus-lighter", "plus-darker"]
                }],
                "bg-blend": [{
                    "bg-blend": V()
                }],
                filter: [{
                    filter: ["", "none"]
                }],
                blur: [{
                    blur: [n]
                }],
                brightness: [{
                    brightness: [r]
                }],
                contrast: [{
                    contrast: [l]
                }],
                "drop-shadow": [{
                    "drop-shadow": ["", "none", pn, W]
                }],
                grayscale: [{
                    grayscale: [u]
                }],
                "hue-rotate": [{
                    "hue-rotate": [d]
                }],
                invert: [{
                    invert: [f]
                }],
                saturate: [{
                    saturate: [x]
                }],
                sepia: [{
                    sepia: [E]
                }],
                "backdrop-filter": [{
                    "backdrop-filter": ["", "none"]
                }],
                "backdrop-blur": [{
                    "backdrop-blur": [n]
                }],
                "backdrop-brightness": [{
                    "backdrop-brightness": [r]
                }],
                "backdrop-contrast": [{
                    "backdrop-contrast": [l]
                }],
                "backdrop-grayscale": [{
                    "backdrop-grayscale": [u]
                }],
                "backdrop-hue-rotate": [{
                    "backdrop-hue-rotate": [d]
                }],
                "backdrop-invert": [{
                    "backdrop-invert": [f]
                }],
                "backdrop-opacity": [{
                    "backdrop-opacity": [g]
                }],
                "backdrop-saturate": [{
                    "backdrop-saturate": [x]
                }],
                "backdrop-sepia": [{
                    "backdrop-sepia": [E]
                }],
                "border-collapse": [{
                    border: ["collapse", "separate"]
                }],
                "border-spacing": [{
                    "border-spacing": [i]
                }],
                "border-spacing-x": [{
                    "border-spacing-x": [i]
                }],
                "border-spacing-y": [{
                    "border-spacing-y": [i]
                }],
                "table-layout": [{
                    table: ["auto", "fixed"]
                }],
                caption: [{
                    caption: ["top", "bottom"]
                }],
                transition: [{
                    transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", W]
                }],
                duration: [{
                    duration: H()
                }],
                ease: [{
                    ease: ["linear", "in", "out", "in-out", W]
                }],
                delay: [{
                    delay: H()
                }],
                animate: [{
                    animate: ["none", "spin", "ping", "pulse", "bounce", W]
                }],
                transform: [{
                    transform: ["", "gpu", "none"]
                }],
                scale: [{
                    scale: [C]
                }],
                "scale-x": [{
                    "scale-x": [C]
                }],
                "scale-y": [{
                    "scale-y": [C]
                }],
                rotate: [{
                    rotate: [Ao, W]
                }],
                "translate-x": [{
                    "translate-x": [T]
                }],
                "translate-y": [{
                    "translate-y": [T]
                }],
                "skew-x": [{
                    "skew-x": [b]
                }],
                "skew-y": [{
                    "skew-y": [b]
                }],
                "transform-origin": [{
                    origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", W]
                }],
                accent: [{
                    accent: ["auto", e]
                }],
                appearance: [{
                    appearance: ["none", "auto"]
                }],
                cursor: [{
                    cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", W]
                }],
                "caret-color": [{
                    caret: [e]
                }],
                "pointer-events": [{
                    "pointer-events": ["none", "auto"]
                }],
                resize: [{
                    resize: ["none", "y", "x", ""]
                }],
                "scroll-behavior": [{
                    scroll: ["auto", "smooth"]
                }],
                "scroll-m": [{
                    "scroll-m": L()
                }],
                "scroll-mx": [{
                    "scroll-mx": L()
                }],
                "scroll-my": [{
                    "scroll-my": L()
                }],
                "scroll-ms": [{
                    "scroll-ms": L()
                }],
                "scroll-me": [{
                    "scroll-me": L()
                }],
                "scroll-mt": [{
                    "scroll-mt": L()
                }],
                "scroll-mr": [{
                    "scroll-mr": L()
                }],
                "scroll-mb": [{
                    "scroll-mb": L()
                }],
                "scroll-ml": [{
                    "scroll-ml": L()
                }],
                "scroll-p": [{
                    "scroll-p": L()
                }],
                "scroll-px": [{
                    "scroll-px": L()
                }],
                "scroll-py": [{
                    "scroll-py": L()
                }],
                "scroll-ps": [{
                    "scroll-ps": L()
                }],
                "scroll-pe": [{
                    "scroll-pe": L()
                }],
                "scroll-pt": [{
                    "scroll-pt": L()
                }],
                "scroll-pr": [{
                    "scroll-pr": L()
                }],
                "scroll-pb": [{
                    "scroll-pb": L()
                }],
                "scroll-pl": [{
                    "scroll-pl": L()
                }],
                "snap-align": [{
                    snap: ["start", "end", "center", "align-none"]
                }],
                "snap-stop": [{
                    snap: ["normal", "always"]
                }],
                "snap-type": [{
                    snap: ["none", "x", "y", "both"]
                }],
                "snap-strictness": [{
                    snap: ["mandatory", "proximity"]
                }],
                touch: [{
                    touch: ["auto", "none", "manipulation"]
                }],
                "touch-x": [{
                    "touch-pan": ["x", "left", "right"]
                }],
                "touch-y": [{
                    "touch-pan": ["y", "up", "down"]
                }],
                "touch-pz": ["touch-pinch-zoom"],
                select: [{
                    select: ["none", "text", "all", "auto"]
                }],
                "will-change": [{
                    "will-change": ["auto", "scroll", "contents", "transform", W]
                }],
                fill: [{
                    fill: [e, "none"]
                }],
                "stroke-w": [{
                    stroke: [Vt, fn, bl]
                }],
                stroke: [{
                    stroke: [e, "none"]
                }],
                sr: ["sr-only", "not-sr-only"],
                "forced-color-adjust": [{
                    "forced-color-adjust": ["auto", "none"]
                }]
            },
            conflictingClassGroups: {
                overflow: ["overflow-x", "overflow-y"],
                overscroll: ["overscroll-x", "overscroll-y"],
                inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
                "inset-x": ["right", "left"],
                "inset-y": ["top", "bottom"],
                flex: ["basis", "grow", "shrink"],
                gap: ["gap-x", "gap-y"],
                p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
                px: ["pr", "pl"],
                py: ["pt", "pb"],
                m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
                mx: ["mr", "ml"],
                my: ["mt", "mb"],
                size: ["w", "h"],
                "font-size": ["leading"],
                "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
                "fvn-ordinal": ["fvn-normal"],
                "fvn-slashed-zero": ["fvn-normal"],
                "fvn-figure": ["fvn-normal"],
                "fvn-spacing": ["fvn-normal"],
                "fvn-fraction": ["fvn-normal"],
                "line-clamp": ["display", "overflow"],
                rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
                "rounded-s": ["rounded-ss", "rounded-es"],
                "rounded-e": ["rounded-se", "rounded-ee"],
                "rounded-t": ["rounded-tl", "rounded-tr"],
                "rounded-r": ["rounded-tr", "rounded-br"],
                "rounded-b": ["rounded-br", "rounded-bl"],
                "rounded-l": ["rounded-tl", "rounded-bl"],
                "border-spacing": ["border-spacing-x", "border-spacing-y"],
                "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
                "border-w-x": ["border-w-r", "border-w-l"],
                "border-w-y": ["border-w-t", "border-w-b"],
                "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
                "border-color-x": ["border-color-r", "border-color-l"],
                "border-color-y": ["border-color-t", "border-color-b"],
                "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
                "scroll-mx": ["scroll-mr", "scroll-ml"],
                "scroll-my": ["scroll-mt", "scroll-mb"],
                "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
                "scroll-px": ["scroll-pr", "scroll-pl"],
                "scroll-py": ["scroll-pt", "scroll-pb"],
                touch: ["touch-x", "touch-y", "touch-pz"],
                "touch-x": ["touch"],
                "touch-y": ["touch"],
                "touch-pz": ["touch"]
            },
            conflictingClassGroupModifiers: {
                "font-size": ["leading"]
            }
        }
    },
    q1 = j1(Y1);

function ne(...e) {
    return q1(xv(e))
}
const X1 = n1,
    Nv = y.forwardRef(({
        className: e,
        ...t
    }, n) => c.jsx(fv, {
        ref: n,
        className: ne("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]", e),
        ...t
    }));
Nv.displayName = fv.displayName;
const Z1 = ba("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full", {
        variants: {
            variant: {
                default: "border bg-background text-foreground",
                destructive: "destructive group border-destructive bg-destructive text-destructive-foreground"
            }
        },
        defaultVariants: {
            variant: "default"
        }
    }),
    Pv = y.forwardRef(({
        className: e,
        variant: t,
        ...n
    }, r) => c.jsx(pv, {
        ref: r,
        className: ne(Z1({
            variant: t
        }), e),
        ...n
    }));
Pv.displayName = pv.displayName;
const J1 = y.forwardRef(({
    className: e,
    ...t
}, n) => c.jsx(vv, {
    ref: n,
    className: ne("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors group-[.destructive]:border-muted/40 hover:bg-secondary group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 group-[.destructive]:focus:ring-destructive disabled:pointer-events-none disabled:opacity-50", e),
    ...t
}));
J1.displayName = vv.displayName;
const Av = y.forwardRef(({
    className: e,
    ...t
}, n) => c.jsx(gv, {
    ref: n,
    className: ne("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity group-hover:opacity-100 group-[.destructive]:text-red-300 hover:text-foreground group-[.destructive]:hover:text-red-50 focus:opacity-100 focus:outline-none focus:ring-2 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600", e),
    "toast-close": "",
    ...t,
    children: c.jsx(ks, {
        className: "h-4 w-4"
    })
}));
Av.displayName = gv.displayName;
const Tv = y.forwardRef(({
    className: e,
    ...t
}, n) => c.jsx(hv, {
    ref: n,
    className: ne("text-sm font-semibold", e),
    ...t
}));
Tv.displayName = hv.displayName;
const Rv = y.forwardRef(({
    className: e,
    ...t
}, n) => c.jsx(mv, {
    ref: n,
    className: ne("text-sm opacity-90", e),
    ...t
}));
Rv.displayName = mv.displayName;

function eS() {
    const {
        toasts: e
    } = cw();
    return c.jsxs(X1, {
        children: [e.map(function({
            id: t,
            title: n,
            description: r,
            action: o,
            ...s
        }) {
            return c.jsxs(Pv, { ...s,
                children: [c.jsxs("div", {
                    className: "grid gap-1",
                    children: [n && c.jsx(Tv, {
                        children: n
                    }), r && c.jsx(Rv, {
                        children: r
                    })]
                }), o, c.jsx(Av, {})]
            }, t)
        }), c.jsx(Nv, {})]
    })
}
var zf = ["light", "dark"],
    tS = "(prefers-color-scheme: dark)",
    nS = y.createContext(void 0),
    rS = {
        setTheme: e => {},
        themes: []
    },
    oS = () => {
        var e;
        return (e = y.useContext(nS)) != null ? e : rS
    };
y.memo(({
    forcedTheme: e,
    storageKey: t,
    attribute: n,
    enableSystem: r,
    enableColorScheme: o,
    defaultTheme: s,
    value: i,
    attrs: a,
    nonce: l
}) => {
    let u = s === "system",
        d = n === "class" ? `var d=document.documentElement,c=d.classList;${`c.remove(${a.map(S=>`'${S}'`).join(",")})`};` : `var d=document.documentElement,n='${n}',s='setAttribute';`,
        f = o ? zf.includes(s) && s ? `if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${s}'` : "if(e==='light'||e==='dark')d.style.colorScheme=e" : "",
        v = (S, m = !1, w = !0) => {
            let g = i ? i[S] : S,
                h = m ? S + "|| ''" : `'${g}'`,
                x = "";
            return o && w && !m && zf.includes(S) && (x += `d.style.colorScheme = '${S}';`), n === "class" ? m || g ? x += `c.add(${h})` : x += "null" : g && (x += `d[s](n,${h})`), x
        },
        p = e ? `!function(){${d}${v(e)}}()` : r ? `!function(){try{${d}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${u})){var t='${tS}',m=window.matchMedia(t);if(m.media!==t||m.matches){${v("dark")}}else{${v("light")}}}else if(e){${i?`var x=${JSON.stringify(i)};`:""}${v(i?"x[e]":"e",!0)}}${u?"":"else{"+v(s,!1,!1)+"}"}${f}}catch(e){}}()` : `!function(){try{${d}var e=localStorage.getItem('${t}');if(e){${i?`var x=${JSON.stringify(i)};`:""}${v(i?"x[e]":"e",!0)}}else{${v(s,!1,!1)};}${f}}catch(t){}}();`;
    return y.createElement("script", {
        nonce: l,
        dangerouslySetInnerHTML: {
            __html: p
        }
    })
});
var sS = e => {
        switch (e) {
            case "success":
                return lS;
            case "info":
                return cS;
            case "warning":
                return uS;
            case "error":
                return dS;
            default:
                return null
        }
    },
    iS = Array(12).fill(0),
    aS = ({
        visible: e,
        className: t
    }) => R.createElement("div", {
        className: ["sonner-loading-wrapper", t].filter(Boolean).join(" "),
        "data-visible": e
    }, R.createElement("div", {
        className: "sonner-spinner"
    }, iS.map((n, r) => R.createElement("div", {
        className: "sonner-loading-bar",
        key: `spinner-bar-${r}`
    })))),
    lS = R.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 20 20",
        fill: "currentColor",
        height: "20",
        width: "20"
    }, R.createElement("path", {
        fillRule: "evenodd",
        d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
        clipRule: "evenodd"
    })),
    uS = R.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        fill: "currentColor",
        height: "20",
        width: "20"
    }, R.createElement("path", {
        fillRule: "evenodd",
        d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
        clipRule: "evenodd"
    })),
    cS = R.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 20 20",
        fill: "currentColor",
        height: "20",
        width: "20"
    }, R.createElement("path", {
        fillRule: "evenodd",
        d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
        clipRule: "evenodd"
    })),
    dS = R.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 20 20",
        fill: "currentColor",
        height: "20",
        width: "20"
    }, R.createElement("path", {
        fillRule: "evenodd",
        d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
        clipRule: "evenodd"
    })),
    fS = R.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "12",
        height: "12",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    }, R.createElement("line", {
        x1: "18",
        y1: "6",
        x2: "6",
        y2: "18"
    }), R.createElement("line", {
        x1: "6",
        y1: "6",
        x2: "18",
        y2: "18"
    })),
    pS = () => {
        let [e, t] = R.useState(document.hidden);
        return R.useEffect(() => {
            let n = () => {
                t(document.hidden)
            };
            return document.addEventListener("visibilitychange", n), () => window.removeEventListener("visibilitychange", n)
        }, []), e
    },
    Ou = 1,
    hS = class {
        constructor() {
            this.subscribe = e => (this.subscribers.push(e), () => {
                let t = this.subscribers.indexOf(e);
                this.subscribers.splice(t, 1)
            }), this.publish = e => {
                this.subscribers.forEach(t => t(e))
            }, this.addToast = e => {
                this.publish(e), this.toasts = [...this.toasts, e]
            }, this.create = e => {
                var t;
                let {
                    message: n,
                    ...r
                } = e, o = typeof(e == null ? void 0 : e.id) == "number" || ((t = e.id) == null ? void 0 : t.length) > 0 ? e.id : Ou++, s = this.toasts.find(a => a.id === o), i = e.dismissible === void 0 ? !0 : e.dismissible;
                return this.dismissedToasts.has(o) && this.dismissedToasts.delete(o), s ? this.toasts = this.toasts.map(a => a.id === o ? (this.publish({ ...a,
                    ...e,
                    id: o,
                    title: n
                }), { ...a,
                    ...e,
                    id: o,
                    dismissible: i,
                    title: n
                }) : a) : this.addToast({
                    title: n,
                    ...r,
                    dismissible: i,
                    id: o
                }), o
            }, this.dismiss = e => (this.dismissedToasts.add(e), e || this.toasts.forEach(t => {
                this.subscribers.forEach(n => n({
                    id: t.id,
                    dismiss: !0
                }))
            }), this.subscribers.forEach(t => t({
                id: e,
                dismiss: !0
            })), e), this.message = (e, t) => this.create({ ...t,
                message: e
            }), this.error = (e, t) => this.create({ ...t,
                message: e,
                type: "error"
            }), this.success = (e, t) => this.create({ ...t,
                type: "success",
                message: e
            }), this.info = (e, t) => this.create({ ...t,
                type: "info",
                message: e
            }), this.warning = (e, t) => this.create({ ...t,
                type: "warning",
                message: e
            }), this.loading = (e, t) => this.create({ ...t,
                type: "loading",
                message: e
            }), this.promise = (e, t) => {
                if (!t) return;
                let n;
                t.loading !== void 0 && (n = this.create({ ...t,
                    promise: e,
                    type: "loading",
                    message: t.loading,
                    description: typeof t.description != "function" ? t.description : void 0
                }));
                let r = e instanceof Promise ? e : e(),
                    o = n !== void 0,
                    s, i = r.then(async l => {
                        if (s = ["resolve", l], R.isValidElement(l)) o = !1, this.create({
                            id: n,
                            type: "default",
                            message: l
                        });
                        else if (vS(l) && !l.ok) {
                            o = !1;
                            let u = typeof t.error == "function" ? await t.error(`HTTP error! status: ${l.status}`) : t.error,
                                d = typeof t.description == "function" ? await t.description(`HTTP error! status: ${l.status}`) : t.description;
                            this.create({
                                id: n,
                                type: "error",
                                message: u,
                                description: d
                            })
                        } else if (t.success !== void 0) {
                            o = !1;
                            let u = typeof t.success == "function" ? await t.success(l) : t.success,
                                d = typeof t.description == "function" ? await t.description(l) : t.description;
                            this.create({
                                id: n,
                                type: "success",
                                message: u,
                                description: d
                            })
                        }
                    }).catch(async l => {
                        if (s = ["reject", l], t.error !== void 0) {
                            o = !1;
                            let u = typeof t.error == "function" ? await t.error(l) : t.error,
                                d = typeof t.description == "function" ? await t.description(l) : t.description;
                            this.create({
                                id: n,
                                type: "error",
                                message: u,
                                description: d
                            })
                        }
                    }).finally(() => {
                        var l;
                        o && (this.dismiss(n), n = void 0), (l = t.finally) == null || l.call(t)
                    }),
                    a = () => new Promise((l, u) => i.then(() => s[0] === "reject" ? u(s[1]) : l(s[1])).catch(u));
                return typeof n != "string" && typeof n != "number" ? {
                    unwrap: a
                } : Object.assign(n, {
                    unwrap: a
                })
            }, this.custom = (e, t) => {
                let n = (t == null ? void 0 : t.id) || Ou++;
                return this.create({
                    jsx: e(n),
                    id: n,
                    ...t
                }), n
            }, this.getActiveToasts = () => this.toasts.filter(e => !this.dismissedToasts.has(e.id)), this.subscribers = [], this.toasts = [], this.dismissedToasts = new Set
        }
    },
    Be = new hS,
    mS = (e, t) => {
        let n = (t == null ? void 0 : t.id) || Ou++;
        return Be.addToast({
            title: e,
            ...t,
            id: n
        }), n
    },
    vS = e => e && typeof e == "object" && "ok" in e && typeof e.ok == "boolean" && "status" in e && typeof e.status == "number",
    gS = mS,
    yS = () => Be.toasts,
    xS = () => Be.getActiveToasts();
Object.assign(gS, {
    success: Be.success,
    info: Be.info,
    warning: Be.warning,
    error: Be.error,
    custom: Be.custom,
    message: Be.message,
    promise: Be.promise,
    dismiss: Be.dismiss,
    loading: Be.loading
}, {
    getHistory: yS,
    getToasts: xS
});

function wS(e, {
    insertAt: t
} = {}) {
    if (typeof document > "u") return;
    let n = document.head || document.getElementsByTagName("head")[0],
        r = document.createElement("style");
    r.type = "text/css", t === "top" && n.firstChild ? n.insertBefore(r, n.firstChild) : n.appendChild(r), r.styleSheet ? r.styleSheet.cssText = e : r.appendChild(document.createTextNode(e))
}
wS(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999;transition:transform .4s ease}:where([data-sonner-toaster][data-lifted="true"]){transform:translateY(-10px)}@media (hover: none) and (pointer: coarse){:where([data-sonner-toaster][data-lifted="true"]){transform:none}}:where([data-sonner-toaster][data-x-position="right"]){right:var(--offset-right)}:where([data-sonner-toaster][data-x-position="left"]){left:var(--offset-left)}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:var(--offset-top)}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:var(--offset-bottom)}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]{background:var(--gray1)}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:-50%;right:-50%;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y, 0px)) translate(var(--swipe-amount-x, 0px));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-bg-hover: hsl(0, 0%, 12%);--normal-border: hsl(0, 0%, 20%);--normal-border-hover: hsl(0, 0%, 25%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);

function qs(e) {
    return e.label !== void 0
}
var SS = 3,
    CS = "32px",
    ES = "16px",
    $f = 4e3,
    bS = 356,
    kS = 14,
    NS = 20,
    PS = 200;

function ht(...e) {
    return e.filter(Boolean).join(" ")
}

function AS(e) {
    let [t, n] = e.split("-"), r = [];
    return t && r.push(t), n && r.push(n), r
}
var TS = e => {
    var t, n, r, o, s, i, a, l, u, d, f;
    let {
        invert: v,
        toast: p,
        unstyled: S,
        interacting: m,
        setHeights: w,
        visibleToasts: g,
        heights: h,
        index: x,
        toasts: C,
        expanded: E,
        removeToast: b,
        defaultRichColors: k,
        closeButton: T,
        style: O,
        cancelButtonStyle: M,
        actionButtonStyle: z,
        className: L = "",
        descriptionClassName: Q = "",
        duration: D,
        position: Y,
        gap: $,
        loadingIcon: V,
        expandByDefault: P,
        classNames: A,
        icons: I,
        closeButtonAriaLabel: H = "Close toast",
        pauseWhenPageIsHidden: F
    } = e, [K, q] = R.useState(null), [ge, Pe] = R.useState(null), [J, vr] = R.useState(!1), [on, Vn] = R.useState(!1), [sn, gr] = R.useState(!1), [an, Ps] = R.useState(!1), [Ha, As] = R.useState(!1), [Wa, yo] = R.useState(0), [yr, pd] = R.useState(0), xo = R.useRef(p.duration || D || $f), hd = R.useRef(null), Hn = R.useRef(null), by = x === 0, ky = x + 1 <= g, nt = p.type, xr = p.dismissible !== !1, Ny = p.className || "", Py = p.descriptionClassName || "", Ts = R.useMemo(() => h.findIndex(B => B.toastId === p.id) || 0, [h, p.id]), Ay = R.useMemo(() => {
        var B;
        return (B = p.closeButton) != null ? B : T
    }, [p.closeButton, T]), md = R.useMemo(() => p.duration || D || $f, [p.duration, D]), Qa = R.useRef(0), wr = R.useRef(0), vd = R.useRef(0), Sr = R.useRef(null), [Ty, Ry] = Y.split("-"), gd = R.useMemo(() => h.reduce((B, te, ue) => ue >= Ts ? B : B + te.height, 0), [h, Ts]), yd = pS(), jy = p.invert || v, Ka = nt === "loading";
    wr.current = R.useMemo(() => Ts * $ + gd, [Ts, gd]), R.useEffect(() => {
        xo.current = md
    }, [md]), R.useEffect(() => {
        vr(!0)
    }, []), R.useEffect(() => {
        let B = Hn.current;
        if (B) {
            let te = B.getBoundingClientRect().height;
            return pd(te), w(ue => [{
                toastId: p.id,
                height: te,
                position: p.position
            }, ...ue]), () => w(ue => ue.filter(ct => ct.toastId !== p.id))
        }
    }, [w, p.id]), R.useLayoutEffect(() => {
        if (!J) return;
        let B = Hn.current,
            te = B.style.height;
        B.style.height = "auto";
        let ue = B.getBoundingClientRect().height;
        B.style.height = te, pd(ue), w(ct => ct.find(dt => dt.toastId === p.id) ? ct.map(dt => dt.toastId === p.id ? { ...dt,
            height: ue
        } : dt) : [{
            toastId: p.id,
            height: ue,
            position: p.position
        }, ...ct])
    }, [J, p.title, p.description, w, p.id]);
    let ln = R.useCallback(() => {
        Vn(!0), yo(wr.current), w(B => B.filter(te => te.toastId !== p.id)), setTimeout(() => {
            b(p)
        }, PS)
    }, [p, b, w, wr]);
    R.useEffect(() => {
        if (p.promise && nt === "loading" || p.duration === 1 / 0 || p.type === "loading") return;
        let B;
        return E || m || F && yd ? (() => {
            if (vd.current < Qa.current) {
                let te = new Date().getTime() - Qa.current;
                xo.current = xo.current - te
            }
            vd.current = new Date().getTime()
        })() : xo.current !== 1 / 0 && (Qa.current = new Date().getTime(), B = setTimeout(() => {
            var te;
            (te = p.onAutoClose) == null || te.call(p, p), ln()
        }, xo.current)), () => clearTimeout(B)
    }, [E, m, p, nt, F, yd, ln]), R.useEffect(() => {
        p.delete && ln()
    }, [ln, p.delete]);

    function Oy() {
        var B, te, ue;
        return I != null && I.loading ? R.createElement("div", {
            className: ht(A == null ? void 0 : A.loader, (B = p == null ? void 0 : p.classNames) == null ? void 0 : B.loader, "sonner-loader"),
            "data-visible": nt === "loading"
        }, I.loading) : V ? R.createElement("div", {
            className: ht(A == null ? void 0 : A.loader, (te = p == null ? void 0 : p.classNames) == null ? void 0 : te.loader, "sonner-loader"),
            "data-visible": nt === "loading"
        }, V) : R.createElement(aS, {
            className: ht(A == null ? void 0 : A.loader, (ue = p == null ? void 0 : p.classNames) == null ? void 0 : ue.loader),
            visible: nt === "loading"
        })
    }
    return R.createElement("li", {
        tabIndex: 0,
        ref: Hn,
        className: ht(L, Ny, A == null ? void 0 : A.toast, (t = p == null ? void 0 : p.classNames) == null ? void 0 : t.toast, A == null ? void 0 : A.default, A == null ? void 0 : A[nt], (n = p == null ? void 0 : p.classNames) == null ? void 0 : n[nt]),
        "data-sonner-toast": "",
        "data-rich-colors": (r = p.richColors) != null ? r : k,
        "data-styled": !(p.jsx || p.unstyled || S),
        "data-mounted": J,
        "data-promise": !!p.promise,
        "data-swiped": Ha,
        "data-removed": on,
        "data-visible": ky,
        "data-y-position": Ty,
        "data-x-position": Ry,
        "data-index": x,
        "data-front": by,
        "data-swiping": sn,
        "data-dismissible": xr,
        "data-type": nt,
        "data-invert": jy,
        "data-swipe-out": an,
        "data-swipe-direction": ge,
        "data-expanded": !!(E || P && J),
        style: {
            "--index": x,
            "--toasts-before": x,
            "--z-index": C.length - x,
            "--offset": `${on?Wa:wr.current}px`,
            "--initial-height": P ? "auto" : `${yr}px`,
            ...O,
            ...p.style
        },
        onDragEnd: () => {
            gr(!1), q(null), Sr.current = null
        },
        onPointerDown: B => {
            Ka || !xr || (hd.current = new Date, yo(wr.current), B.target.setPointerCapture(B.pointerId), B.target.tagName !== "BUTTON" && (gr(!0), Sr.current = {
                x: B.clientX,
                y: B.clientY
            }))
        },
        onPointerUp: () => {
            var B, te, ue, ct;
            if (an || !xr) return;
            Sr.current = null;
            let dt = Number(((B = Hn.current) == null ? void 0 : B.style.getPropertyValue("--swipe-amount-x").replace("px", "")) || 0),
                un = Number(((te = Hn.current) == null ? void 0 : te.style.getPropertyValue("--swipe-amount-y").replace("px", "")) || 0),
                Wn = new Date().getTime() - ((ue = hd.current) == null ? void 0 : ue.getTime()),
                ft = K === "x" ? dt : un,
                cn = Math.abs(ft) / Wn;
            if (Math.abs(ft) >= NS || cn > .11) {
                yo(wr.current), (ct = p.onDismiss) == null || ct.call(p, p), Pe(K === "x" ? dt > 0 ? "right" : "left" : un > 0 ? "down" : "up"), ln(), Ps(!0), As(!1);
                return
            }
            gr(!1), q(null)
        },
        onPointerMove: B => {
            var te, ue, ct, dt;
            if (!Sr.current || !xr || ((te = window.getSelection()) == null ? void 0 : te.toString().length) > 0) return;
            let un = B.clientY - Sr.current.y,
                Wn = B.clientX - Sr.current.x,
                ft = (ue = e.swipeDirections) != null ? ue : AS(Y);
            !K && (Math.abs(Wn) > 1 || Math.abs(un) > 1) && q(Math.abs(Wn) > Math.abs(un) ? "x" : "y");
            let cn = {
                x: 0,
                y: 0
            };
            K === "y" ? (ft.includes("top") || ft.includes("bottom")) && (ft.includes("top") && un < 0 || ft.includes("bottom") && un > 0) && (cn.y = un) : K === "x" && (ft.includes("left") || ft.includes("right")) && (ft.includes("left") && Wn < 0 || ft.includes("right") && Wn > 0) && (cn.x = Wn), (Math.abs(cn.x) > 0 || Math.abs(cn.y) > 0) && As(!0), (ct = Hn.current) == null || ct.style.setProperty("--swipe-amount-x", `${cn.x}px`), (dt = Hn.current) == null || dt.style.setProperty("--swipe-amount-y", `${cn.y}px`)
        }
    }, Ay && !p.jsx ? R.createElement("button", {
        "aria-label": H,
        "data-disabled": Ka,
        "data-close-button": !0,
        onClick: Ka || !xr ? () => {} : () => {
            var B;
            ln(), (B = p.onDismiss) == null || B.call(p, p)
        },
        className: ht(A == null ? void 0 : A.closeButton, (o = p == null ? void 0 : p.classNames) == null ? void 0 : o.closeButton)
    }, (s = I == null ? void 0 : I.close) != null ? s : fS) : null, p.jsx || y.isValidElement(p.title) ? p.jsx ? p.jsx : typeof p.title == "function" ? p.title() : p.title : R.createElement(R.Fragment, null, nt || p.icon || p.promise ? R.createElement("div", {
        "data-icon": "",
        className: ht(A == null ? void 0 : A.icon, (i = p == null ? void 0 : p.classNames) == null ? void 0 : i.icon)
    }, p.promise || p.type === "loading" && !p.icon ? p.icon || Oy() : null, p.type !== "loading" ? p.icon || (I == null ? void 0 : I[nt]) || sS(nt) : null) : null, R.createElement("div", {
        "data-content": "",
        className: ht(A == null ? void 0 : A.content, (a = p == null ? void 0 : p.classNames) == null ? void 0 : a.content)
    }, R.createElement("div", {
        "data-title": "",
        className: ht(A == null ? void 0 : A.title, (l = p == null ? void 0 : p.classNames) == null ? void 0 : l.title)
    }, typeof p.title == "function" ? p.title() : p.title), p.description ? R.createElement("div", {
        "data-description": "",
        className: ht(Q, Py, A == null ? void 0 : A.description, (u = p == null ? void 0 : p.classNames) == null ? void 0 : u.description)
    }, typeof p.description == "function" ? p.description() : p.description) : null), y.isValidElement(p.cancel) ? p.cancel : p.cancel && qs(p.cancel) ? R.createElement("button", {
        "data-button": !0,
        "data-cancel": !0,
        style: p.cancelButtonStyle || M,
        onClick: B => {
            var te, ue;
            qs(p.cancel) && xr && ((ue = (te = p.cancel).onClick) == null || ue.call(te, B), ln())
        },
        className: ht(A == null ? void 0 : A.cancelButton, (d = p == null ? void 0 : p.classNames) == null ? void 0 : d.cancelButton)
    }, p.cancel.label) : null, y.isValidElement(p.action) ? p.action : p.action && qs(p.action) ? R.createElement("button", {
        "data-button": !0,
        "data-action": !0,
        style: p.actionButtonStyle || z,
        onClick: B => {
            var te, ue;
            qs(p.action) && ((ue = (te = p.action).onClick) == null || ue.call(te, B), !B.defaultPrevented && ln())
        },
        className: ht(A == null ? void 0 : A.actionButton, (f = p == null ? void 0 : p.classNames) == null ? void 0 : f.actionButton)
    }, p.action.label) : null))
};

function Bf() {
    if (typeof window > "u" || typeof document > "u") return "ltr";
    let e = document.documentElement.getAttribute("dir");
    return e === "auto" || !e ? window.getComputedStyle(document.documentElement).direction : e
}

function RS(e, t) {
    let n = {};
    return [e, t].forEach((r, o) => {
        let s = o === 1,
            i = s ? "--mobile-offset" : "--offset",
            a = s ? ES : CS;

        function l(u) {
            ["top", "right", "bottom", "left"].forEach(d => {
                n[`${i}-${d}`] = typeof u == "number" ? `${u}px` : u
            })
        }
        typeof r == "number" || typeof r == "string" ? l(r) : typeof r == "object" ? ["top", "right", "bottom", "left"].forEach(u => {
            r[u] === void 0 ? n[`${i}-${u}`] = a : n[`${i}-${u}`] = typeof r[u] == "number" ? `${r[u]}px` : r[u]
        }) : l(a)
    }), n
}
var jS = y.forwardRef(function(e, t) {
    let {
        invert: n,
        position: r = "bottom-right",
        hotkey: o = ["altKey", "KeyT"],
        expand: s,
        closeButton: i,
        className: a,
        offset: l,
        mobileOffset: u,
        theme: d = "light",
        richColors: f,
        duration: v,
        style: p,
        visibleToasts: S = SS,
        toastOptions: m,
        dir: w = Bf(),
        gap: g = kS,
        loadingIcon: h,
        icons: x,
        containerAriaLabel: C = "Notifications",
        pauseWhenPageIsHidden: E
    } = e, [b, k] = R.useState([]), T = R.useMemo(() => Array.from(new Set([r].concat(b.filter(F => F.position).map(F => F.position)))), [b, r]), [O, M] = R.useState([]), [z, L] = R.useState(!1), [Q, D] = R.useState(!1), [Y, $] = R.useState(d !== "system" ? d : typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"), V = R.useRef(null), P = o.join("+").replace(/Key/g, "").replace(/Digit/g, ""), A = R.useRef(null), I = R.useRef(!1), H = R.useCallback(F => {
        k(K => {
            var q;
            return (q = K.find(ge => ge.id === F.id)) != null && q.delete || Be.dismiss(F.id), K.filter(({
                id: ge
            }) => ge !== F.id)
        })
    }, []);
    return R.useEffect(() => Be.subscribe(F => {
        if (F.dismiss) {
            k(K => K.map(q => q.id === F.id ? { ...q,
                delete: !0
            } : q));
            return
        }
        setTimeout(() => {
            Hm.flushSync(() => {
                k(K => {
                    let q = K.findIndex(ge => ge.id === F.id);
                    return q !== -1 ? [...K.slice(0, q), { ...K[q],
                        ...F
                    }, ...K.slice(q + 1)] : [F, ...K]
                })
            })
        })
    }), []), R.useEffect(() => {
        if (d !== "system") {
            $(d);
            return
        }
        if (d === "system" && (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? $("dark") : $("light")), typeof window > "u") return;
        let F = window.matchMedia("(prefers-color-scheme: dark)");
        try {
            F.addEventListener("change", ({
                matches: K
            }) => {
                $(K ? "dark" : "light")
            })
        } catch {
            F.addListener(({
                matches: q
            }) => {
                try {
                    $(q ? "dark" : "light")
                } catch (ge) {
                    console.error(ge)
                }
            })
        }
    }, [d]), R.useEffect(() => {
        b.length <= 1 && L(!1)
    }, [b]), R.useEffect(() => {
        let F = K => {
            var q, ge;
            o.every(Pe => K[Pe] || K.code === Pe) && (L(!0), (q = V.current) == null || q.focus()), K.code === "Escape" && (document.activeElement === V.current || (ge = V.current) != null && ge.contains(document.activeElement)) && L(!1)
        };
        return document.addEventListener("keydown", F), () => document.removeEventListener("keydown", F)
    }, [o]), R.useEffect(() => {
        if (V.current) return () => {
            A.current && (A.current.focus({
                preventScroll: !0
            }), A.current = null, I.current = !1)
        }
    }, [V.current]), R.createElement("section", {
        ref: t,
        "aria-label": `${C} ${P}`,
        tabIndex: -1,
        "aria-live": "polite",
        "aria-relevant": "additions text",
        "aria-atomic": "false",
        suppressHydrationWarning: !0
    }, T.map((F, K) => {
        var q;
        let [ge, Pe] = F.split("-");
        return b.length ? R.createElement("ol", {
            key: F,
            dir: w === "auto" ? Bf() : w,
            tabIndex: -1,
            ref: V,
            className: a,
            "data-sonner-toaster": !0,
            "data-theme": Y,
            "data-y-position": ge,
            "data-lifted": z && b.length > 1 && !s,
            "data-x-position": Pe,
            style: {
                "--front-toast-height": `${((q=O[0])==null?void 0:q.height)||0}px`,
                "--width": `${bS}px`,
                "--gap": `${g}px`,
                ...p,
                ...RS(l, u)
            },
            onBlur: J => {
                I.current && !J.currentTarget.contains(J.relatedTarget) && (I.current = !1, A.current && (A.current.focus({
                    preventScroll: !0
                }), A.current = null))
            },
            onFocus: J => {
                J.target instanceof HTMLElement && J.target.dataset.dismissible === "false" || I.current || (I.current = !0, A.current = J.relatedTarget)
            },
            onMouseEnter: () => L(!0),
            onMouseMove: () => L(!0),
            onMouseLeave: () => {
                Q || L(!1)
            },
            onDragEnd: () => L(!1),
            onPointerDown: J => {
                J.target instanceof HTMLElement && J.target.dataset.dismissible === "false" || D(!0)
            },
            onPointerUp: () => D(!1)
        }, b.filter(J => !J.position && K === 0 || J.position === F).map((J, vr) => {
            var on, Vn;
            return R.createElement(TS, {
                key: J.id,
                icons: x,
                index: vr,
                toast: J,
                defaultRichColors: f,
                duration: (on = m == null ? void 0 : m.duration) != null ? on : v,
                className: m == null ? void 0 : m.className,
                descriptionClassName: m == null ? void 0 : m.descriptionClassName,
                invert: n,
                visibleToasts: S,
                closeButton: (Vn = m == null ? void 0 : m.closeButton) != null ? Vn : i,
                interacting: Q,
                position: F,
                style: m == null ? void 0 : m.style,
                unstyled: m == null ? void 0 : m.unstyled,
                classNames: m == null ? void 0 : m.classNames,
                cancelButtonStyle: m == null ? void 0 : m.cancelButtonStyle,
                actionButtonStyle: m == null ? void 0 : m.actionButtonStyle,
                removeToast: H,
                toasts: b.filter(sn => sn.position == J.position),
                heights: O.filter(sn => sn.position == J.position),
                setHeights: M,
                expandByDefault: s,
                gap: g,
                loadingIcon: h,
                expanded: z,
                pauseWhenPageIsHidden: E,
                swipeDirections: e.swipeDirections
            })
        })) : null
    }))
});
const OS = ({ ...e
}) => {
    const {
        theme: t = "system"
    } = oS();
    return c.jsx(jS, {
        theme: t,
        className: "toaster group",
        toastOptions: {
            classNames: {
                toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
                description: "group-[.toast]:text-muted-foreground",
                actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
                cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
            }
        },
        ...e
    })
};
var MS = qu[" useId ".trim().toString()] || (() => {}),
    DS = 0;

function Wo(e) {
    const [t, n] = y.useState(MS());
    return $t(() => {
        n(r => r ? ? String(DS++))
    }, [e]), t ? `radix-${t}` : ""
}
const IS = ["top", "right", "bottom", "left"],
    Fn = Math.min,
    Ye = Math.max,
    Yi = Math.round,
    Xs = Math.floor,
    Ft = e => ({
        x: e,
        y: e
    }),
    _S = {
        left: "right",
        right: "left",
        bottom: "top",
        top: "bottom"
    },
    LS = {
        start: "end",
        end: "start"
    };

function Mu(e, t, n) {
    return Ye(e, Fn(t, n))
}

function tn(e, t) {
    return typeof e == "function" ? e(t) : e
}

function nn(e) {
    return e.split("-")[0]
}

function vo(e) {
    return e.split("-")[1]
}

function Qc(e) {
    return e === "x" ? "y" : "x"
}

function Kc(e) {
    return e === "y" ? "height" : "width"
}
const FS = new Set(["top", "bottom"]);

function It(e) {
    return FS.has(nn(e)) ? "y" : "x"
}

function Gc(e) {
    return Qc(It(e))
}

function zS(e, t, n) {
    n === void 0 && (n = !1);
    const r = vo(e),
        o = Gc(e),
        s = Kc(o);
    let i = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
    return t.reference[s] > t.floating[s] && (i = qi(i)), [i, qi(i)]
}

function $S(e) {
    const t = qi(e);
    return [Du(e), t, Du(t)]
}

function Du(e) {
    return e.replace(/start|end/g, t => LS[t])
}
const Uf = ["left", "right"],
    Vf = ["right", "left"],
    BS = ["top", "bottom"],
    US = ["bottom", "top"];

function VS(e, t, n) {
    switch (e) {
        case "top":
        case "bottom":
            return n ? t ? Vf : Uf : t ? Uf : Vf;
        case "left":
        case "right":
            return t ? BS : US;
        default:
            return []
    }
}

function HS(e, t, n, r) {
    const o = vo(e);
    let s = VS(nn(e), n === "start", r);
    return o && (s = s.map(i => i + "-" + o), t && (s = s.concat(s.map(Du)))), s
}

function qi(e) {
    return e.replace(/left|right|bottom|top/g, t => _S[t])
}

function WS(e) {
    return {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...e
    }
}

function jv(e) {
    return typeof e != "number" ? WS(e) : {
        top: e,
        right: e,
        bottom: e,
        left: e
    }
}

function Xi(e) {
    const {
        x: t,
        y: n,
        width: r,
        height: o
    } = e;
    return {
        width: r,
        height: o,
        top: n,
        left: t,
        right: t + r,
        bottom: n + o,
        x: t,
        y: n
    }
}

function Hf(e, t, n) {
    let {
        reference: r,
        floating: o
    } = e;
    const s = It(t),
        i = Gc(t),
        a = Kc(i),
        l = nn(t),
        u = s === "y",
        d = r.x + r.width / 2 - o.width / 2,
        f = r.y + r.height / 2 - o.height / 2,
        v = r[a] / 2 - o[a] / 2;
    let p;
    switch (l) {
        case "top":
            p = {
                x: d,
                y: r.y - o.height
            };
            break;
        case "bottom":
            p = {
                x: d,
                y: r.y + r.height
            };
            break;
        case "right":
            p = {
                x: r.x + r.width,
                y: f
            };
            break;
        case "left":
            p = {
                x: r.x - o.width,
                y: f
            };
            break;
        default:
            p = {
                x: r.x,
                y: r.y
            }
    }
    switch (vo(t)) {
        case "start":
            p[i] -= v * (n && u ? -1 : 1);
            break;
        case "end":
            p[i] += v * (n && u ? -1 : 1);
            break
    }
    return p
}
const QS = async (e, t, n) => {
    const {
        placement: r = "bottom",
        strategy: o = "absolute",
        middleware: s = [],
        platform: i
    } = n, a = s.filter(Boolean), l = await (i.isRTL == null ? void 0 : i.isRTL(t));
    let u = await i.getElementRects({
            reference: e,
            floating: t,
            strategy: o
        }),
        {
            x: d,
            y: f
        } = Hf(u, r, l),
        v = r,
        p = {},
        S = 0;
    for (let m = 0; m < a.length; m++) {
        const {
            name: w,
            fn: g
        } = a[m], {
            x: h,
            y: x,
            data: C,
            reset: E
        } = await g({
            x: d,
            y: f,
            initialPlacement: r,
            placement: v,
            strategy: o,
            middlewareData: p,
            rects: u,
            platform: i,
            elements: {
                reference: e,
                floating: t
            }
        });
        d = h ? ? d, f = x ? ? f, p = { ...p,
            [w]: { ...p[w],
                ...C
            }
        }, E && S <= 50 && (S++, typeof E == "object" && (E.placement && (v = E.placement), E.rects && (u = E.rects === !0 ? await i.getElementRects({
            reference: e,
            floating: t,
            strategy: o
        }) : E.rects), {
            x: d,
            y: f
        } = Hf(u, v, l)), m = -1)
    }
    return {
        x: d,
        y: f,
        placement: v,
        strategy: o,
        middlewareData: p
    }
};
async function ds(e, t) {
    var n;
    t === void 0 && (t = {});
    const {
        x: r,
        y: o,
        platform: s,
        rects: i,
        elements: a,
        strategy: l
    } = e, {
        boundary: u = "clippingAncestors",
        rootBoundary: d = "viewport",
        elementContext: f = "floating",
        altBoundary: v = !1,
        padding: p = 0
    } = tn(t, e), S = jv(p), w = a[v ? f === "floating" ? "reference" : "floating" : f], g = Xi(await s.getClippingRect({
        element: (n = await (s.isElement == null ? void 0 : s.isElement(w))) == null || n ? w : w.contextElement || await (s.getDocumentElement == null ? void 0 : s.getDocumentElement(a.floating)),
        boundary: u,
        rootBoundary: d,
        strategy: l
    })), h = f === "floating" ? {
        x: r,
        y: o,
        width: i.floating.width,
        height: i.floating.height
    } : i.reference, x = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(a.floating)), C = await (s.isElement == null ? void 0 : s.isElement(x)) ? await (s.getScale == null ? void 0 : s.getScale(x)) || {
        x: 1,
        y: 1
    } : {
        x: 1,
        y: 1
    }, E = Xi(s.convertOffsetParentRelativeRectToViewportRelativeRect ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
        elements: a,
        rect: h,
        offsetParent: x,
        strategy: l
    }) : h);
    return {
        top: (g.top - E.top + S.top) / C.y,
        bottom: (E.bottom - g.bottom + S.bottom) / C.y,
        left: (g.left - E.left + S.left) / C.x,
        right: (E.right - g.right + S.right) / C.x
    }
}
const KS = e => ({
        name: "arrow",
        options: e,
        async fn(t) {
            const {
                x: n,
                y: r,
                placement: o,
                rects: s,
                platform: i,
                elements: a,
                middlewareData: l
            } = t, {
                element: u,
                padding: d = 0
            } = tn(e, t) || {};
            if (u == null) return {};
            const f = jv(d),
                v = {
                    x: n,
                    y: r
                },
                p = Gc(o),
                S = Kc(p),
                m = await i.getDimensions(u),
                w = p === "y",
                g = w ? "top" : "left",
                h = w ? "bottom" : "right",
                x = w ? "clientHeight" : "clientWidth",
                C = s.reference[S] + s.reference[p] - v[p] - s.floating[S],
                E = v[p] - s.reference[p],
                b = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(u));
            let k = b ? b[x] : 0;
            (!k || !await (i.isElement == null ? void 0 : i.isElement(b))) && (k = a.floating[x] || s.floating[S]);
            const T = C / 2 - E / 2,
                O = k / 2 - m[S] / 2 - 1,
                M = Fn(f[g], O),
                z = Fn(f[h], O),
                L = M,
                Q = k - m[S] - z,
                D = k / 2 - m[S] / 2 + T,
                Y = Mu(L, D, Q),
                $ = !l.arrow && vo(o) != null && D !== Y && s.reference[S] / 2 - (D < L ? M : z) - m[S] / 2 < 0,
                V = $ ? D < L ? D - L : D - Q : 0;
            return {
                [p]: v[p] + V,
                data: {
                    [p]: Y,
                    centerOffset: D - Y - V,
                    ...$ && {
                        alignmentOffset: V
                    }
                },
                reset: $
            }
        }
    }),
    GS = function(e) {
        return e === void 0 && (e = {}), {
            name: "flip",
            options: e,
            async fn(t) {
                var n, r;
                const {
                    placement: o,
                    middlewareData: s,
                    rects: i,
                    initialPlacement: a,
                    platform: l,
                    elements: u
                } = t, {
                    mainAxis: d = !0,
                    crossAxis: f = !0,
                    fallbackPlacements: v,
                    fallbackStrategy: p = "bestFit",
                    fallbackAxisSideDirection: S = "none",
                    flipAlignment: m = !0,
                    ...w
                } = tn(e, t);
                if ((n = s.arrow) != null && n.alignmentOffset) return {};
                const g = nn(o),
                    h = It(a),
                    x = nn(a) === a,
                    C = await (l.isRTL == null ? void 0 : l.isRTL(u.floating)),
                    E = v || (x || !m ? [qi(a)] : $S(a)),
                    b = S !== "none";
                !v && b && E.push(...HS(a, m, S, C));
                const k = [a, ...E],
                    T = await ds(t, w),
                    O = [];
                let M = ((r = s.flip) == null ? void 0 : r.overflows) || [];
                if (d && O.push(T[g]), f) {
                    const D = zS(o, i, C);
                    O.push(T[D[0]], T[D[1]])
                }
                if (M = [...M, {
                        placement: o,
                        overflows: O
                    }], !O.every(D => D <= 0)) {
                    var z, L;
                    const D = (((z = s.flip) == null ? void 0 : z.index) || 0) + 1,
                        Y = k[D];
                    if (Y && (!(f === "alignment" ? h !== It(Y) : !1) || M.every(P => P.overflows[0] > 0 && It(P.placement) === h))) return {
                        data: {
                            index: D,
                            overflows: M
                        },
                        reset: {
                            placement: Y
                        }
                    };
                    let $ = (L = M.filter(V => V.overflows[0] <= 0).sort((V, P) => V.overflows[1] - P.overflows[1])[0]) == null ? void 0 : L.placement;
                    if (!$) switch (p) {
                        case "bestFit":
                            {
                                var Q;
                                const V = (Q = M.filter(P => {
                                    if (b) {
                                        const A = It(P.placement);
                                        return A === h || A === "y"
                                    }
                                    return !0
                                }).map(P => [P.placement, P.overflows.filter(A => A > 0).reduce((A, I) => A + I, 0)]).sort((P, A) => P[1] - A[1])[0]) == null ? void 0 : Q[0];V && ($ = V);
                                break
                            }
                        case "initialPlacement":
                            $ = a;
                            break
                    }
                    if (o !== $) return {
                        reset: {
                            placement: $
                        }
                    }
                }
                return {}
            }
        }
    };

function Wf(e, t) {
    return {
        top: e.top - t.height,
        right: e.right - t.width,
        bottom: e.bottom - t.height,
        left: e.left - t.width
    }
}

function Qf(e) {
    return IS.some(t => e[t] >= 0)
}
const YS = function(e) {
        return e === void 0 && (e = {}), {
            name: "hide",
            options: e,
            async fn(t) {
                const {
                    rects: n
                } = t, {
                    strategy: r = "referenceHidden",
                    ...o
                } = tn(e, t);
                switch (r) {
                    case "referenceHidden":
                        {
                            const s = await ds(t, { ...o,
                                    elementContext: "reference"
                                }),
                                i = Wf(s, n.reference);
                            return {
                                data: {
                                    referenceHiddenOffsets: i,
                                    referenceHidden: Qf(i)
                                }
                            }
                        }
                    case "escaped":
                        {
                            const s = await ds(t, { ...o,
                                    altBoundary: !0
                                }),
                                i = Wf(s, n.floating);
                            return {
                                data: {
                                    escapedOffsets: i,
                                    escaped: Qf(i)
                                }
                            }
                        }
                    default:
                        return {}
                }
            }
        }
    },
    Ov = new Set(["left", "top"]);
async function qS(e, t) {
    const {
        placement: n,
        platform: r,
        elements: o
    } = e, s = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), i = nn(n), a = vo(n), l = It(n) === "y", u = Ov.has(i) ? -1 : 1, d = s && l ? -1 : 1, f = tn(t, e);
    let {
        mainAxis: v,
        crossAxis: p,
        alignmentAxis: S
    } = typeof f == "number" ? {
        mainAxis: f,
        crossAxis: 0,
        alignmentAxis: null
    } : {
        mainAxis: f.mainAxis || 0,
        crossAxis: f.crossAxis || 0,
        alignmentAxis: f.alignmentAxis
    };
    return a && typeof S == "number" && (p = a === "end" ? S * -1 : S), l ? {
        x: p * d,
        y: v * u
    } : {
        x: v * u,
        y: p * d
    }
}
const XS = function(e) {
        return e === void 0 && (e = 0), {
            name: "offset",
            options: e,
            async fn(t) {
                var n, r;
                const {
                    x: o,
                    y: s,
                    placement: i,
                    middlewareData: a
                } = t, l = await qS(t, e);
                return i === ((n = a.offset) == null ? void 0 : n.placement) && (r = a.arrow) != null && r.alignmentOffset ? {} : {
                    x: o + l.x,
                    y: s + l.y,
                    data: { ...l,
                        placement: i
                    }
                }
            }
        }
    },
    ZS = function(e) {
        return e === void 0 && (e = {}), {
            name: "shift",
            options: e,
            async fn(t) {
                const {
                    x: n,
                    y: r,
                    placement: o
                } = t, {
                    mainAxis: s = !0,
                    crossAxis: i = !1,
                    limiter: a = {
                        fn: w => {
                            let {
                                x: g,
                                y: h
                            } = w;
                            return {
                                x: g,
                                y: h
                            }
                        }
                    },
                    ...l
                } = tn(e, t), u = {
                    x: n,
                    y: r
                }, d = await ds(t, l), f = It(nn(o)), v = Qc(f);
                let p = u[v],
                    S = u[f];
                if (s) {
                    const w = v === "y" ? "top" : "left",
                        g = v === "y" ? "bottom" : "right",
                        h = p + d[w],
                        x = p - d[g];
                    p = Mu(h, p, x)
                }
                if (i) {
                    const w = f === "y" ? "top" : "left",
                        g = f === "y" ? "bottom" : "right",
                        h = S + d[w],
                        x = S - d[g];
                    S = Mu(h, S, x)
                }
                const m = a.fn({ ...t,
                    [v]: p,
                    [f]: S
                });
                return { ...m,
                    data: {
                        x: m.x - n,
                        y: m.y - r,
                        enabled: {
                            [v]: s,
                            [f]: i
                        }
                    }
                }
            }
        }
    },
    JS = function(e) {
        return e === void 0 && (e = {}), {
            options: e,
            fn(t) {
                const {
                    x: n,
                    y: r,
                    placement: o,
                    rects: s,
                    middlewareData: i
                } = t, {
                    offset: a = 0,
                    mainAxis: l = !0,
                    crossAxis: u = !0
                } = tn(e, t), d = {
                    x: n,
                    y: r
                }, f = It(o), v = Qc(f);
                let p = d[v],
                    S = d[f];
                const m = tn(a, t),
                    w = typeof m == "number" ? {
                        mainAxis: m,
                        crossAxis: 0
                    } : {
                        mainAxis: 0,
                        crossAxis: 0,
                        ...m
                    };
                if (l) {
                    const x = v === "y" ? "height" : "width",
                        C = s.reference[v] - s.floating[x] + w.mainAxis,
                        E = s.reference[v] + s.reference[x] - w.mainAxis;
                    p < C ? p = C : p > E && (p = E)
                }
                if (u) {
                    var g, h;
                    const x = v === "y" ? "width" : "height",
                        C = Ov.has(nn(o)),
                        E = s.reference[f] - s.floating[x] + (C && ((g = i.offset) == null ? void 0 : g[f]) || 0) + (C ? 0 : w.crossAxis),
                        b = s.reference[f] + s.reference[x] + (C ? 0 : ((h = i.offset) == null ? void 0 : h[f]) || 0) - (C ? w.crossAxis : 0);
                    S < E ? S = E : S > b && (S = b)
                }
                return {
                    [v]: p,
                    [f]: S
                }
            }
        }
    },
    eC = function(e) {
        return e === void 0 && (e = {}), {
            name: "size",
            options: e,
            async fn(t) {
                var n, r;
                const {
                    placement: o,
                    rects: s,
                    platform: i,
                    elements: a
                } = t, {
                    apply: l = () => {},
                    ...u
                } = tn(e, t), d = await ds(t, u), f = nn(o), v = vo(o), p = It(o) === "y", {
                    width: S,
                    height: m
                } = s.floating;
                let w, g;
                f === "top" || f === "bottom" ? (w = f, g = v === (await (i.isRTL == null ? void 0 : i.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (g = f, w = v === "end" ? "top" : "bottom");
                const h = m - d.top - d.bottom,
                    x = S - d.left - d.right,
                    C = Fn(m - d[w], h),
                    E = Fn(S - d[g], x),
                    b = !t.middlewareData.shift;
                let k = C,
                    T = E;
                if ((n = t.middlewareData.shift) != null && n.enabled.x && (T = x), (r = t.middlewareData.shift) != null && r.enabled.y && (k = h), b && !v) {
                    const M = Ye(d.left, 0),
                        z = Ye(d.right, 0),
                        L = Ye(d.top, 0),
                        Q = Ye(d.bottom, 0);
                    p ? T = S - 2 * (M !== 0 || z !== 0 ? M + z : Ye(d.left, d.right)) : k = m - 2 * (L !== 0 || Q !== 0 ? L + Q : Ye(d.top, d.bottom))
                }
                await l({ ...t,
                    availableWidth: T,
                    availableHeight: k
                });
                const O = await i.getDimensions(a.floating);
                return S !== O.width || m !== O.height ? {
                    reset: {
                        rects: !0
                    }
                } : {}
            }
        }
    };

function ka() {
    return typeof window < "u"
}

function go(e) {
    return Mv(e) ? (e.nodeName || "").toLowerCase() : "#document"
}

function Ze(e) {
    var t;
    return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window
}

function Ut(e) {
    var t;
    return (t = (Mv(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement
}

function Mv(e) {
    return ka() ? e instanceof Node || e instanceof Ze(e).Node : !1
}

function bt(e) {
    return ka() ? e instanceof Element || e instanceof Ze(e).Element : !1
}

function Bt(e) {
    return ka() ? e instanceof HTMLElement || e instanceof Ze(e).HTMLElement : !1
}

function Kf(e) {
    return !ka() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Ze(e).ShadowRoot
}
const tC = new Set(["inline", "contents"]);

function Ns(e) {
    const {
        overflow: t,
        overflowX: n,
        overflowY: r,
        display: o
    } = kt(e);
    return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !tC.has(o)
}
const nC = new Set(["table", "td", "th"]);

function rC(e) {
    return nC.has(go(e))
}
const oC = [":popover-open", ":modal"];

function Na(e) {
    return oC.some(t => {
        try {
            return e.matches(t)
        } catch {
            return !1
        }
    })
}
const sC = ["transform", "translate", "scale", "rotate", "perspective"],
    iC = ["transform", "translate", "scale", "rotate", "perspective", "filter"],
    aC = ["paint", "layout", "strict", "content"];

function Yc(e) {
    const t = qc(),
        n = bt(e) ? kt(e) : e;
    return sC.some(r => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || iC.some(r => (n.willChange || "").includes(r)) || aC.some(r => (n.contain || "").includes(r))
}

function lC(e) {
    let t = zn(e);
    for (; Bt(t) && !uo(t);) {
        if (Yc(t)) return t;
        if (Na(t)) return null;
        t = zn(t)
    }
    return null
}

function qc() {
    return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none")
}
const uC = new Set(["html", "body", "#document"]);

function uo(e) {
    return uC.has(go(e))
}

function kt(e) {
    return Ze(e).getComputedStyle(e)
}

function Pa(e) {
    return bt(e) ? {
        scrollLeft: e.scrollLeft,
        scrollTop: e.scrollTop
    } : {
        scrollLeft: e.scrollX,
        scrollTop: e.scrollY
    }
}

function zn(e) {
    if (go(e) === "html") return e;
    const t = e.assignedSlot || e.parentNode || Kf(e) && e.host || Ut(e);
    return Kf(t) ? t.host : t
}

function Dv(e) {
    const t = zn(e);
    return uo(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Bt(t) && Ns(t) ? t : Dv(t)
}

function fs(e, t, n) {
    var r;
    t === void 0 && (t = []), n === void 0 && (n = !0);
    const o = Dv(e),
        s = o === ((r = e.ownerDocument) == null ? void 0 : r.body),
        i = Ze(o);
    if (s) {
        const a = Iu(i);
        return t.concat(i, i.visualViewport || [], Ns(o) ? o : [], a && n ? fs(a) : [])
    }
    return t.concat(o, fs(o, [], n))
}

function Iu(e) {
    return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null
}

function Iv(e) {
    const t = kt(e);
    let n = parseFloat(t.width) || 0,
        r = parseFloat(t.height) || 0;
    const o = Bt(e),
        s = o ? e.offsetWidth : n,
        i = o ? e.offsetHeight : r,
        a = Yi(n) !== s || Yi(r) !== i;
    return a && (n = s, r = i), {
        width: n,
        height: r,
        $: a
    }
}

function Xc(e) {
    return bt(e) ? e : e.contextElement
}

function Wr(e) {
    const t = Xc(e);
    if (!Bt(t)) return Ft(1);
    const n = t.getBoundingClientRect(),
        {
            width: r,
            height: o,
            $: s
        } = Iv(t);
    let i = (s ? Yi(n.width) : n.width) / r,
        a = (s ? Yi(n.height) : n.height) / o;
    return (!i || !Number.isFinite(i)) && (i = 1), (!a || !Number.isFinite(a)) && (a = 1), {
        x: i,
        y: a
    }
}
const cC = Ft(0);

function _v(e) {
    const t = Ze(e);
    return !qc() || !t.visualViewport ? cC : {
        x: t.visualViewport.offsetLeft,
        y: t.visualViewport.offsetTop
    }
}

function dC(e, t, n) {
    return t === void 0 && (t = !1), !n || t && n !== Ze(e) ? !1 : t
}

function cr(e, t, n, r) {
    t === void 0 && (t = !1), n === void 0 && (n = !1);
    const o = e.getBoundingClientRect(),
        s = Xc(e);
    let i = Ft(1);
    t && (r ? bt(r) && (i = Wr(r)) : i = Wr(e));
    const a = dC(s, n, r) ? _v(s) : Ft(0);
    let l = (o.left + a.x) / i.x,
        u = (o.top + a.y) / i.y,
        d = o.width / i.x,
        f = o.height / i.y;
    if (s) {
        const v = Ze(s),
            p = r && bt(r) ? Ze(r) : r;
        let S = v,
            m = Iu(S);
        for (; m && r && p !== S;) {
            const w = Wr(m),
                g = m.getBoundingClientRect(),
                h = kt(m),
                x = g.left + (m.clientLeft + parseFloat(h.paddingLeft)) * w.x,
                C = g.top + (m.clientTop + parseFloat(h.paddingTop)) * w.y;
            l *= w.x, u *= w.y, d *= w.x, f *= w.y, l += x, u += C, S = Ze(m), m = Iu(S)
        }
    }
    return Xi({
        width: d,
        height: f,
        x: l,
        y: u
    })
}

function Zc(e, t) {
    const n = Pa(e).scrollLeft;
    return t ? t.left + n : cr(Ut(e)).left + n
}

function Lv(e, t, n) {
    n === void 0 && (n = !1);
    const r = e.getBoundingClientRect(),
        o = r.left + t.scrollLeft - (n ? 0 : Zc(e, r)),
        s = r.top + t.scrollTop;
    return {
        x: o,
        y: s
    }
}

function fC(e) {
    let {
        elements: t,
        rect: n,
        offsetParent: r,
        strategy: o
    } = e;
    const s = o === "fixed",
        i = Ut(r),
        a = t ? Na(t.floating) : !1;
    if (r === i || a && s) return n;
    let l = {
            scrollLeft: 0,
            scrollTop: 0
        },
        u = Ft(1);
    const d = Ft(0),
        f = Bt(r);
    if ((f || !f && !s) && ((go(r) !== "body" || Ns(i)) && (l = Pa(r)), Bt(r))) {
        const p = cr(r);
        u = Wr(r), d.x = p.x + r.clientLeft, d.y = p.y + r.clientTop
    }
    const v = i && !f && !s ? Lv(i, l, !0) : Ft(0);
    return {
        width: n.width * u.x,
        height: n.height * u.y,
        x: n.x * u.x - l.scrollLeft * u.x + d.x + v.x,
        y: n.y * u.y - l.scrollTop * u.y + d.y + v.y
    }
}

function pC(e) {
    return Array.from(e.getClientRects())
}

function hC(e) {
    const t = Ut(e),
        n = Pa(e),
        r = e.ownerDocument.body,
        o = Ye(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
        s = Ye(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
    let i = -n.scrollLeft + Zc(e);
    const a = -n.scrollTop;
    return kt(r).direction === "rtl" && (i += Ye(t.clientWidth, r.clientWidth) - o), {
        width: o,
        height: s,
        x: i,
        y: a
    }
}

function mC(e, t) {
    const n = Ze(e),
        r = Ut(e),
        o = n.visualViewport;
    let s = r.clientWidth,
        i = r.clientHeight,
        a = 0,
        l = 0;
    if (o) {
        s = o.width, i = o.height;
        const u = qc();
        (!u || u && t === "fixed") && (a = o.offsetLeft, l = o.offsetTop)
    }
    return {
        width: s,
        height: i,
        x: a,
        y: l
    }
}
const vC = new Set(["absolute", "fixed"]);

function gC(e, t) {
    const n = cr(e, !0, t === "fixed"),
        r = n.top + e.clientTop,
        o = n.left + e.clientLeft,
        s = Bt(e) ? Wr(e) : Ft(1),
        i = e.clientWidth * s.x,
        a = e.clientHeight * s.y,
        l = o * s.x,
        u = r * s.y;
    return {
        width: i,
        height: a,
        x: l,
        y: u
    }
}

function Gf(e, t, n) {
    let r;
    if (t === "viewport") r = mC(e, n);
    else if (t === "document") r = hC(Ut(e));
    else if (bt(t)) r = gC(t, n);
    else {
        const o = _v(e);
        r = {
            x: t.x - o.x,
            y: t.y - o.y,
            width: t.width,
            height: t.height
        }
    }
    return Xi(r)
}

function Fv(e, t) {
    const n = zn(e);
    return n === t || !bt(n) || uo(n) ? !1 : kt(n).position === "fixed" || Fv(n, t)
}

function yC(e, t) {
    const n = t.get(e);
    if (n) return n;
    let r = fs(e, [], !1).filter(a => bt(a) && go(a) !== "body"),
        o = null;
    const s = kt(e).position === "fixed";
    let i = s ? zn(e) : e;
    for (; bt(i) && !uo(i);) {
        const a = kt(i),
            l = Yc(i);
        !l && a.position === "fixed" && (o = null), (s ? !l && !o : !l && a.position === "static" && !!o && vC.has(o.position) || Ns(i) && !l && Fv(e, i)) ? r = r.filter(d => d !== i) : o = a, i = zn(i)
    }
    return t.set(e, r), r
}

function xC(e) {
    let {
        element: t,
        boundary: n,
        rootBoundary: r,
        strategy: o
    } = e;
    const i = [...n === "clippingAncestors" ? Na(t) ? [] : yC(t, this._c) : [].concat(n), r],
        a = i[0],
        l = i.reduce((u, d) => {
            const f = Gf(t, d, o);
            return u.top = Ye(f.top, u.top), u.right = Fn(f.right, u.right), u.bottom = Fn(f.bottom, u.bottom), u.left = Ye(f.left, u.left), u
        }, Gf(t, a, o));
    return {
        width: l.right - l.left,
        height: l.bottom - l.top,
        x: l.left,
        y: l.top
    }
}

function wC(e) {
    const {
        width: t,
        height: n
    } = Iv(e);
    return {
        width: t,
        height: n
    }
}

function SC(e, t, n) {
    const r = Bt(t),
        o = Ut(t),
        s = n === "fixed",
        i = cr(e, !0, s, t);
    let a = {
        scrollLeft: 0,
        scrollTop: 0
    };
    const l = Ft(0);

    function u() {
        l.x = Zc(o)
    }
    if (r || !r && !s)
        if ((go(t) !== "body" || Ns(o)) && (a = Pa(t)), r) {
            const p = cr(t, !0, s, t);
            l.x = p.x + t.clientLeft, l.y = p.y + t.clientTop
        } else o && u();
    s && !r && o && u();
    const d = o && !r && !s ? Lv(o, a) : Ft(0),
        f = i.left + a.scrollLeft - l.x - d.x,
        v = i.top + a.scrollTop - l.y - d.y;
    return {
        x: f,
        y: v,
        width: i.width,
        height: i.height
    }
}

function kl(e) {
    return kt(e).position === "static"
}

function Yf(e, t) {
    if (!Bt(e) || kt(e).position === "fixed") return null;
    if (t) return t(e);
    let n = e.offsetParent;
    return Ut(e) === n && (n = n.ownerDocument.body), n
}

function zv(e, t) {
    const n = Ze(e);
    if (Na(e)) return n;
    if (!Bt(e)) {
        let o = zn(e);
        for (; o && !uo(o);) {
            if (bt(o) && !kl(o)) return o;
            o = zn(o)
        }
        return n
    }
    let r = Yf(e, t);
    for (; r && rC(r) && kl(r);) r = Yf(r, t);
    return r && uo(r) && kl(r) && !Yc(r) ? n : r || lC(e) || n
}
const CC = async function(e) {
    const t = this.getOffsetParent || zv,
        n = this.getDimensions,
        r = await n(e.floating);
    return {
        reference: SC(e.reference, await t(e.floating), e.strategy),
        floating: {
            x: 0,
            y: 0,
            width: r.width,
            height: r.height
        }
    }
};

function EC(e) {
    return kt(e).direction === "rtl"
}
const bC = {
    convertOffsetParentRelativeRectToViewportRelativeRect: fC,
    getDocumentElement: Ut,
    getClippingRect: xC,
    getOffsetParent: zv,
    getElementRects: CC,
    getClientRects: pC,
    getDimensions: wC,
    getScale: Wr,
    isElement: bt,
    isRTL: EC
};

function $v(e, t) {
    return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height
}

function kC(e, t) {
    let n = null,
        r;
    const o = Ut(e);

    function s() {
        var a;
        clearTimeout(r), (a = n) == null || a.disconnect(), n = null
    }

    function i(a, l) {
        a === void 0 && (a = !1), l === void 0 && (l = 1), s();
        const u = e.getBoundingClientRect(),
            {
                left: d,
                top: f,
                width: v,
                height: p
            } = u;
        if (a || t(), !v || !p) return;
        const S = Xs(f),
            m = Xs(o.clientWidth - (d + v)),
            w = Xs(o.clientHeight - (f + p)),
            g = Xs(d),
            x = {
                rootMargin: -S + "px " + -m + "px " + -w + "px " + -g + "px",
                threshold: Ye(0, Fn(1, l)) || 1
            };
        let C = !0;

        function E(b) {
            const k = b[0].intersectionRatio;
            if (k !== l) {
                if (!C) return i();
                k ? i(!1, k) : r = setTimeout(() => {
                    i(!1, 1e-7)
                }, 1e3)
            }
            k === 1 && !$v(u, e.getBoundingClientRect()) && i(), C = !1
        }
        try {
            n = new IntersectionObserver(E, { ...x,
                root: o.ownerDocument
            })
        } catch {
            n = new IntersectionObserver(E, x)
        }
        n.observe(e)
    }
    return i(!0), s
}

function NC(e, t, n, r) {
    r === void 0 && (r = {});
    const {
        ancestorScroll: o = !0,
        ancestorResize: s = !0,
        elementResize: i = typeof ResizeObserver == "function",
        layoutShift: a = typeof IntersectionObserver == "function",
        animationFrame: l = !1
    } = r, u = Xc(e), d = o || s ? [...u ? fs(u) : [], ...fs(t)] : [];
    d.forEach(g => {
        o && g.addEventListener("scroll", n, {
            passive: !0
        }), s && g.addEventListener("resize", n)
    });
    const f = u && a ? kC(u, n) : null;
    let v = -1,
        p = null;
    i && (p = new ResizeObserver(g => {
        let [h] = g;
        h && h.target === u && p && (p.unobserve(t), cancelAnimationFrame(v), v = requestAnimationFrame(() => {
            var x;
            (x = p) == null || x.observe(t)
        })), n()
    }), u && !l && p.observe(u), p.observe(t));
    let S, m = l ? cr(e) : null;
    l && w();

    function w() {
        const g = cr(e);
        m && !$v(m, g) && n(), m = g, S = requestAnimationFrame(w)
    }
    return n(), () => {
        var g;
        d.forEach(h => {
            o && h.removeEventListener("scroll", n), s && h.removeEventListener("resize", n)
        }), f == null || f(), (g = p) == null || g.disconnect(), p = null, l && cancelAnimationFrame(S)
    }
}
const PC = XS,
    AC = ZS,
    TC = GS,
    RC = eC,
    jC = YS,
    qf = KS,
    OC = JS,
    MC = (e, t, n) => {
        const r = new Map,
            o = {
                platform: bC,
                ...n
            },
            s = { ...o.platform,
                _c: r
            };
        return QS(e, t, { ...o,
            platform: s
        })
    };
var DC = typeof document < "u",
    IC = function() {},
    yi = DC ? y.useLayoutEffect : IC;

function Zi(e, t) {
    if (e === t) return !0;
    if (typeof e != typeof t) return !1;
    if (typeof e == "function" && e.toString() === t.toString()) return !0;
    let n, r, o;
    if (e && t && typeof e == "object") {
        if (Array.isArray(e)) {
            if (n = e.length, n !== t.length) return !1;
            for (r = n; r-- !== 0;)
                if (!Zi(e[r], t[r])) return !1;
            return !0
        }
        if (o = Object.keys(e), n = o.length, n !== Object.keys(t).length) return !1;
        for (r = n; r-- !== 0;)
            if (!{}.hasOwnProperty.call(t, o[r])) return !1;
        for (r = n; r-- !== 0;) {
            const s = o[r];
            if (!(s === "_owner" && e.$$typeof) && !Zi(e[s], t[s])) return !1
        }
        return !0
    }
    return e !== e && t !== t
}

function Bv(e) {
    return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1
}

function Xf(e, t) {
    const n = Bv(e);
    return Math.round(t * n) / n
}

function Nl(e) {
    const t = y.useRef(e);
    return yi(() => {
        t.current = e
    }), t
}

function _C(e) {
    e === void 0 && (e = {});
    const {
        placement: t = "bottom",
        strategy: n = "absolute",
        middleware: r = [],
        platform: o,
        elements: {
            reference: s,
            floating: i
        } = {},
        transform: a = !0,
        whileElementsMounted: l,
        open: u
    } = e, [d, f] = y.useState({
        x: 0,
        y: 0,
        strategy: n,
        placement: t,
        middlewareData: {},
        isPositioned: !1
    }), [v, p] = y.useState(r);
    Zi(v, r) || p(r);
    const [S, m] = y.useState(null), [w, g] = y.useState(null), h = y.useCallback(P => {
        P !== b.current && (b.current = P, m(P))
    }, []), x = y.useCallback(P => {
        P !== k.current && (k.current = P, g(P))
    }, []), C = s || S, E = i || w, b = y.useRef(null), k = y.useRef(null), T = y.useRef(d), O = l != null, M = Nl(l), z = Nl(o), L = Nl(u), Q = y.useCallback(() => {
        if (!b.current || !k.current) return;
        const P = {
            placement: t,
            strategy: n,
            middleware: v
        };
        z.current && (P.platform = z.current), MC(b.current, k.current, P).then(A => {
            const I = { ...A,
                isPositioned: L.current !== !1
            };
            D.current && !Zi(T.current, I) && (T.current = I, Cs.flushSync(() => {
                f(I)
            }))
        })
    }, [v, t, n, z, L]);
    yi(() => {
        u === !1 && T.current.isPositioned && (T.current.isPositioned = !1, f(P => ({ ...P,
            isPositioned: !1
        })))
    }, [u]);
    const D = y.useRef(!1);
    yi(() => (D.current = !0, () => {
        D.current = !1
    }), []), yi(() => {
        if (C && (b.current = C), E && (k.current = E), C && E) {
            if (M.current) return M.current(C, E, Q);
            Q()
        }
    }, [C, E, Q, M, O]);
    const Y = y.useMemo(() => ({
            reference: b,
            floating: k,
            setReference: h,
            setFloating: x
        }), [h, x]),
        $ = y.useMemo(() => ({
            reference: C,
            floating: E
        }), [C, E]),
        V = y.useMemo(() => {
            const P = {
                position: n,
                left: 0,
                top: 0
            };
            if (!$.floating) return P;
            const A = Xf($.floating, d.x),
                I = Xf($.floating, d.y);
            return a ? { ...P,
                transform: "translate(" + A + "px, " + I + "px)",
                ...Bv($.floating) >= 1.5 && {
                    willChange: "transform"
                }
            } : {
                position: n,
                left: A,
                top: I
            }
        }, [n, a, $.floating, d.x, d.y]);
    return y.useMemo(() => ({ ...d,
        update: Q,
        refs: Y,
        elements: $,
        floatingStyles: V
    }), [d, Q, Y, $, V])
}
const LC = e => {
        function t(n) {
            return {}.hasOwnProperty.call(n, "current")
        }
        return {
            name: "arrow",
            options: e,
            fn(n) {
                const {
                    element: r,
                    padding: o
                } = typeof e == "function" ? e(n) : e;
                return r && t(r) ? r.current != null ? qf({
                    element: r.current,
                    padding: o
                }).fn(n) : {} : r ? qf({
                    element: r,
                    padding: o
                }).fn(n) : {}
            }
        }
    },
    FC = (e, t) => ({ ...PC(e),
        options: [e, t]
    }),
    zC = (e, t) => ({ ...AC(e),
        options: [e, t]
    }),
    $C = (e, t) => ({ ...OC(e),
        options: [e, t]
    }),
    BC = (e, t) => ({ ...TC(e),
        options: [e, t]
    }),
    UC = (e, t) => ({ ...RC(e),
        options: [e, t]
    }),
    VC = (e, t) => ({ ...jC(e),
        options: [e, t]
    }),
    HC = (e, t) => ({ ...LC(e),
        options: [e, t]
    });
var WC = "Arrow",
    Uv = y.forwardRef((e, t) => {
        const {
            children: n,
            width: r = 10,
            height: o = 5,
            ...s
        } = e;
        return c.jsx(le.svg, { ...s,
            ref: t,
            width: r,
            height: o,
            viewBox: "0 0 30 10",
            preserveAspectRatio: "none",
            children: e.asChild ? n : c.jsx("polygon", {
                points: "0,0 30,0 15,10"
            })
        })
    });
Uv.displayName = WC;
var QC = Uv;

function KC(e) {
    const [t, n] = y.useState(void 0);
    return $t(() => {
        if (e) {
            n({
                width: e.offsetWidth,
                height: e.offsetHeight
            });
            const r = new ResizeObserver(o => {
                if (!Array.isArray(o) || !o.length) return;
                const s = o[0];
                let i, a;
                if ("borderBoxSize" in s) {
                    const l = s.borderBoxSize,
                        u = Array.isArray(l) ? l[0] : l;
                    i = u.inlineSize, a = u.blockSize
                } else i = e.offsetWidth, a = e.offsetHeight;
                n({
                    width: i,
                    height: a
                })
            });
            return r.observe(e, {
                box: "border-box"
            }), () => r.unobserve(e)
        } else n(void 0)
    }, [e]), t
}
var Vv = "Popper",
    [Hv, Wv] = hr(Vv),
    [e2, Qv] = Hv(Vv),
    Kv = "PopperAnchor",
    Gv = y.forwardRef((e, t) => {
        const {
            __scopePopper: n,
            virtualRef: r,
            ...o
        } = e, s = Qv(Kv, n), i = y.useRef(null), a = Ne(t, i);
        return y.useEffect(() => {
            s.onAnchorChange((r == null ? void 0 : r.current) || i.current)
        }), r ? null : c.jsx(le.div, { ...o,
            ref: a
        })
    });
Gv.displayName = Kv;
var Jc = "PopperContent",
    [GC, YC] = Hv(Jc),
    Yv = y.forwardRef((e, t) => {
        var J, vr, on, Vn, sn, gr;
        const {
            __scopePopper: n,
            side: r = "bottom",
            sideOffset: o = 0,
            align: s = "center",
            alignOffset: i = 0,
            arrowPadding: a = 0,
            avoidCollisions: l = !0,
            collisionBoundary: u = [],
            collisionPadding: d = 0,
            sticky: f = "partial",
            hideWhenDetached: v = !1,
            updatePositionStrategy: p = "optimized",
            onPlaced: S,
            ...m
        } = e, w = Qv(Jc, n), [g, h] = y.useState(null), x = Ne(t, an => h(an)), [C, E] = y.useState(null), b = KC(C), k = (b == null ? void 0 : b.width) ? ? 0, T = (b == null ? void 0 : b.height) ? ? 0, O = r + (s !== "center" ? "-" + s : ""), M = typeof d == "number" ? d : {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            ...d
        }, z = Array.isArray(u) ? u : [u], L = z.length > 0, Q = {
            padding: M,
            boundary: z.filter(XC),
            altBoundary: L
        }, {
            refs: D,
            floatingStyles: Y,
            placement: $,
            isPositioned: V,
            middlewareData: P
        } = _C({
            strategy: "fixed",
            placement: O,
            whileElementsMounted: (...an) => NC(...an, {
                animationFrame: p === "always"
            }),
            elements: {
                reference: w.anchor
            },
            middleware: [FC({
                mainAxis: o + T,
                alignmentAxis: i
            }), l && zC({
                mainAxis: !0,
                crossAxis: !1,
                limiter: f === "partial" ? $C() : void 0,
                ...Q
            }), l && BC({ ...Q
            }), UC({ ...Q,
                apply: ({
                    elements: an,
                    rects: Ps,
                    availableWidth: Ha,
                    availableHeight: As
                }) => {
                    const {
                        width: Wa,
                        height: yo
                    } = Ps.reference, yr = an.floating.style;
                    yr.setProperty("--radix-popper-available-width", `${Ha}px`), yr.setProperty("--radix-popper-available-height", `${As}px`), yr.setProperty("--radix-popper-anchor-width", `${Wa}px`), yr.setProperty("--radix-popper-anchor-height", `${yo}px`)
                }
            }), C && HC({
                element: C,
                padding: a
            }), ZC({
                arrowWidth: k,
                arrowHeight: T
            }), v && VC({
                strategy: "referenceHidden",
                ...Q
            })]
        }), [A, I] = Zv($), H = zt(S);
        $t(() => {
            V && (H == null || H())
        }, [V, H]);
        const F = (J = P.arrow) == null ? void 0 : J.x,
            K = (vr = P.arrow) == null ? void 0 : vr.y,
            q = ((on = P.arrow) == null ? void 0 : on.centerOffset) !== 0,
            [ge, Pe] = y.useState();
        return $t(() => {
            g && Pe(window.getComputedStyle(g).zIndex)
        }, [g]), c.jsx("div", {
            ref: D.setFloating,
            "data-radix-popper-content-wrapper": "",
            style: { ...Y,
                transform: V ? Y.transform : "translate(0, -200%)",
                minWidth: "max-content",
                zIndex: ge,
                "--radix-popper-transform-origin": [(Vn = P.transformOrigin) == null ? void 0 : Vn.x, (sn = P.transformOrigin) == null ? void 0 : sn.y].join(" "),
                ...((gr = P.hide) == null ? void 0 : gr.referenceHidden) && {
                    visibility: "hidden",
                    pointerEvents: "none"
                }
            },
            dir: e.dir,
            children: c.jsx(GC, {
                scope: n,
                placedSide: A,
                onArrowChange: E,
                arrowX: F,
                arrowY: K,
                shouldHideArrow: q,
                children: c.jsx(le.div, {
                    "data-side": A,
                    "data-align": I,
                    ...m,
                    ref: x,
                    style: { ...m.style,
                        animation: V ? void 0 : "none"
                    }
                })
            })
        })
    });
Yv.displayName = Jc;
var qv = "PopperArrow",
    qC = {
        top: "bottom",
        right: "left",
        bottom: "top",
        left: "right"
    },
    Xv = y.forwardRef(function(t, n) {
        const {
            __scopePopper: r,
            ...o
        } = t, s = YC(qv, r), i = qC[s.placedSide];
        return c.jsx("span", {
            ref: s.onArrowChange,
            style: {
                position: "absolute",
                left: s.arrowX,
                top: s.arrowY,
                [i]: 0,
                transformOrigin: {
                    top: "",
                    right: "0 0",
                    bottom: "center 0",
                    left: "100% 0"
                }[s.placedSide],
                transform: {
                    top: "translateY(100%)",
                    right: "translateY(50%) rotate(90deg) translateX(-50%)",
                    bottom: "rotate(180deg)",
                    left: "translateY(50%) rotate(-90deg) translateX(50%)"
                }[s.placedSide],
                visibility: s.shouldHideArrow ? "hidden" : void 0
            },
            children: c.jsx(QC, { ...o,
                ref: n,
                style: { ...o.style,
                    display: "block"
                }
            })
        })
    });
Xv.displayName = qv;

function XC(e) {
    return e !== null
}
var ZC = e => ({
    name: "transformOrigin",
    options: e,
    fn(t) {
        var w, g, h;
        const {
            placement: n,
            rects: r,
            middlewareData: o
        } = t, i = ((w = o.arrow) == null ? void 0 : w.centerOffset) !== 0, a = i ? 0 : e.arrowWidth, l = i ? 0 : e.arrowHeight, [u, d] = Zv(n), f = {
            start: "0%",
            center: "50%",
            end: "100%"
        }[d], v = (((g = o.arrow) == null ? void 0 : g.x) ? ? 0) + a / 2, p = (((h = o.arrow) == null ? void 0 : h.y) ? ? 0) + l / 2;
        let S = "",
            m = "";
        return u === "bottom" ? (S = i ? f : `${v}px`, m = `${-l}px`) : u === "top" ? (S = i ? f : `${v}px`, m = `${r.floating.height+l}px`) : u === "right" ? (S = `${-l}px`, m = i ? f : `${p}px`) : u === "left" && (S = `${r.floating.width+l}px`, m = i ? f : `${p}px`), {
            data: {
                x: S,
                y: m
            }
        }
    }
});

function Zv(e) {
    const [t, n = "center"] = e.split("-");
    return [t, n]
}
var JC = Gv,
    eE = Yv,
    tE = Xv,
    [Aa, t2] = hr("Tooltip", [Wv]),
    ed = Wv(),
    Jv = "TooltipProvider",
    nE = 700,
    Zf = "tooltip.open",
    [rE, eg] = Aa(Jv),
    tg = e => {
        const {
            __scopeTooltip: t,
            delayDuration: n = nE,
            skipDelayDuration: r = 300,
            disableHoverableContent: o = !1,
            children: s
        } = e, i = y.useRef(!0), a = y.useRef(!1), l = y.useRef(0);
        return y.useEffect(() => {
            const u = l.current;
            return () => window.clearTimeout(u)
        }, []), c.jsx(rE, {
            scope: t,
            isOpenDelayedRef: i,
            delayDuration: n,
            onOpen: y.useCallback(() => {
                window.clearTimeout(l.current), i.current = !1
            }, []),
            onClose: y.useCallback(() => {
                window.clearTimeout(l.current), l.current = window.setTimeout(() => i.current = !0, r)
            }, [r]),
            isPointerInTransitRef: a,
            onPointerInTransitChange: y.useCallback(u => {
                a.current = u
            }, []),
            disableHoverableContent: o,
            children: s
        })
    };
tg.displayName = Jv;
var ng = "Tooltip",
    [n2, Ta] = Aa(ng),
    _u = "TooltipTrigger",
    oE = y.forwardRef((e, t) => {
        const {
            __scopeTooltip: n,
            ...r
        } = e, o = Ta(_u, n), s = eg(_u, n), i = ed(n), a = y.useRef(null), l = Ne(t, a, o.onTriggerChange), u = y.useRef(!1), d = y.useRef(!1), f = y.useCallback(() => u.current = !1, []);
        return y.useEffect(() => () => document.removeEventListener("pointerup", f), [f]), c.jsx(JC, {
            asChild: !0,
            ...i,
            children: c.jsx(le.button, {
                "aria-describedby": o.open ? o.contentId : void 0,
                "data-state": o.stateAttribute,
                ...r,
                ref: l,
                onPointerMove: re(e.onPointerMove, v => {
                    v.pointerType !== "touch" && !d.current && !s.isPointerInTransitRef.current && (o.onTriggerEnter(), d.current = !0)
                }),
                onPointerLeave: re(e.onPointerLeave, () => {
                    o.onTriggerLeave(), d.current = !1
                }),
                onPointerDown: re(e.onPointerDown, () => {
                    o.open && o.onClose(), u.current = !0, document.addEventListener("pointerup", f, {
                        once: !0
                    })
                }),
                onFocus: re(e.onFocus, () => {
                    u.current || o.onOpen()
                }),
                onBlur: re(e.onBlur, o.onClose),
                onClick: re(e.onClick, o.onClose)
            })
        })
    });
oE.displayName = _u;
var sE = "TooltipPortal",
    [r2, iE] = Aa(sE, {
        forceMount: void 0
    }),
    co = "TooltipContent",
    rg = y.forwardRef((e, t) => {
        const n = iE(co, e.__scopeTooltip),
            {
                forceMount: r = n.forceMount,
                side: o = "top",
                ...s
            } = e,
            i = Ta(co, e.__scopeTooltip);
        return c.jsx(mr, {
            present: r || i.open,
            children: i.disableHoverableContent ? c.jsx(og, {
                side: o,
                ...s,
                ref: t
            }) : c.jsx(aE, {
                side: o,
                ...s,
                ref: t
            })
        })
    }),
    aE = y.forwardRef((e, t) => {
        const n = Ta(co, e.__scopeTooltip),
            r = eg(co, e.__scopeTooltip),
            o = y.useRef(null),
            s = Ne(t, o),
            [i, a] = y.useState(null),
            {
                trigger: l,
                onClose: u
            } = n,
            d = o.current,
            {
                onPointerInTransitChange: f
            } = r,
            v = y.useCallback(() => {
                a(null), f(!1)
            }, [f]),
            p = y.useCallback((S, m) => {
                const w = S.currentTarget,
                    g = {
                        x: S.clientX,
                        y: S.clientY
                    },
                    h = fE(g, w.getBoundingClientRect()),
                    x = pE(g, h),
                    C = hE(m.getBoundingClientRect()),
                    E = vE([...x, ...C]);
                a(E), f(!0)
            }, [f]);
        return y.useEffect(() => () => v(), [v]), y.useEffect(() => {
            if (l && d) {
                const S = w => p(w, d),
                    m = w => p(w, l);
                return l.addEventListener("pointerleave", S), d.addEventListener("pointerleave", m), () => {
                    l.removeEventListener("pointerleave", S), d.removeEventListener("pointerleave", m)
                }
            }
        }, [l, d, p, v]), y.useEffect(() => {
            if (i) {
                const S = m => {
                    const w = m.target,
                        g = {
                            x: m.clientX,
                            y: m.clientY
                        },
                        h = (l == null ? void 0 : l.contains(w)) || (d == null ? void 0 : d.contains(w)),
                        x = !mE(g, i);
                    h ? v() : x && (v(), u())
                };
                return document.addEventListener("pointermove", S), () => document.removeEventListener("pointermove", S)
            }
        }, [l, d, i, u, v]), c.jsx(og, { ...e,
            ref: s
        })
    }),
    [lE, uE] = Aa(ng, {
        isInside: !1
    }),
    cE = mw("TooltipContent"),
    og = y.forwardRef((e, t) => {
        const {
            __scopeTooltip: n,
            children: r,
            "aria-label": o,
            onEscapeKeyDown: s,
            onPointerDownOutside: i,
            ...a
        } = e, l = Ta(co, n), u = ed(n), {
            onClose: d
        } = l;
        return y.useEffect(() => (document.addEventListener(Zf, d), () => document.removeEventListener(Zf, d)), [d]), y.useEffect(() => {
            if (l.trigger) {
                const f = v => {
                    const p = v.target;
                    p != null && p.contains(l.trigger) && d()
                };
                return window.addEventListener("scroll", f, {
                    capture: !0
                }), () => window.removeEventListener("scroll", f, {
                    capture: !0
                })
            }
        }, [l.trigger, d]), c.jsx(Sa, {
            asChild: !0,
            disableOutsidePointerEvents: !1,
            onEscapeKeyDown: s,
            onPointerDownOutside: i,
            onFocusOutside: f => f.preventDefault(),
            onDismiss: d,
            children: c.jsxs(eE, {
                "data-state": l.stateAttribute,
                ...u,
                ...a,
                ref: t,
                style: { ...a.style,
                    "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
                    "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
                    "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
                    "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
                    "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
                },
                children: [c.jsx(cE, {
                    children: r
                }), c.jsx(lE, {
                    scope: n,
                    isInside: !0,
                    children: c.jsx(Fw, {
                        id: l.contentId,
                        role: "tooltip",
                        children: o || r
                    })
                })]
            })
        })
    });
rg.displayName = co;
var sg = "TooltipArrow",
    dE = y.forwardRef((e, t) => {
        const {
            __scopeTooltip: n,
            ...r
        } = e, o = ed(n);
        return uE(sg, n).isInside ? null : c.jsx(tE, { ...o,
            ...r,
            ref: t
        })
    });
dE.displayName = sg;

function fE(e, t) {
    const n = Math.abs(t.top - e.y),
        r = Math.abs(t.bottom - e.y),
        o = Math.abs(t.right - e.x),
        s = Math.abs(t.left - e.x);
    switch (Math.min(n, r, o, s)) {
        case s:
            return "left";
        case o:
            return "right";
        case n:
            return "top";
        case r:
            return "bottom";
        default:
            throw new Error("unreachable")
    }
}

function pE(e, t, n = 5) {
    const r = [];
    switch (t) {
        case "top":
            r.push({
                x: e.x - n,
                y: e.y + n
            }, {
                x: e.x + n,
                y: e.y + n
            });
            break;
        case "bottom":
            r.push({
                x: e.x - n,
                y: e.y - n
            }, {
                x: e.x + n,
                y: e.y - n
            });
            break;
        case "left":
            r.push({
                x: e.x + n,
                y: e.y - n
            }, {
                x: e.x + n,
                y: e.y + n
            });
            break;
        case "right":
            r.push({
                x: e.x - n,
                y: e.y - n
            }, {
                x: e.x - n,
                y: e.y + n
            });
            break
    }
    return r
}

function hE(e) {
    const {
        top: t,
        right: n,
        bottom: r,
        left: o
    } = e;
    return [{
        x: o,
        y: t
    }, {
        x: n,
        y: t
    }, {
        x: n,
        y: r
    }, {
        x: o,
        y: r
    }]
}

function mE(e, t) {
    const {
        x: n,
        y: r
    } = e;
    let o = !1;
    for (let s = 0, i = t.length - 1; s < t.length; i = s++) {
        const a = t[s],
            l = t[i],
            u = a.x,
            d = a.y,
            f = l.x,
            v = l.y;
        d > r != v > r && n < (f - u) * (r - d) / (v - d) + u && (o = !o)
    }
    return o
}

function vE(e) {
    const t = e.slice();
    return t.sort((n, r) => n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0), gE(t)
}

function gE(e) {
    if (e.length <= 1) return e.slice();
    const t = [];
    for (let r = 0; r < e.length; r++) {
        const o = e[r];
        for (; t.length >= 2;) {
            const s = t[t.length - 1],
                i = t[t.length - 2];
            if ((s.x - i.x) * (o.y - i.y) >= (s.y - i.y) * (o.x - i.x)) t.pop();
            else break
        }
        t.push(o)
    }
    t.pop();
    const n = [];
    for (let r = e.length - 1; r >= 0; r--) {
        const o = e[r];
        for (; n.length >= 2;) {
            const s = n[n.length - 1],
                i = n[n.length - 2];
            if ((s.x - i.x) * (o.y - i.y) >= (s.y - i.y) * (o.x - i.x)) n.pop();
            else break
        }
        n.push(o)
    }
    return n.pop(), t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y ? t : t.concat(n)
}
var yE = tg,
    ig = rg;
const xE = yE,
    wE = y.forwardRef(({
        className: e,
        sideOffset: t = 4,
        ...n
    }, r) => c.jsx(ig, {
        ref: r,
        sideOffset: t,
        className: ne("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", e),
        ...n
    }));
wE.displayName = ig.displayName;
var Ra = class {
        constructor() {
            this.listeners = new Set, this.subscribe = this.subscribe.bind(this)
        }
        subscribe(e) {
            return this.listeners.add(e), this.onSubscribe(), () => {
                this.listeners.delete(e), this.onUnsubscribe()
            }
        }
        hasListeners() {
            return this.listeners.size > 0
        }
        onSubscribe() {}
        onUnsubscribe() {}
    },
    ja = typeof window > "u" || "Deno" in globalThis;

function vt() {}

function SE(e, t) {
    return typeof e == "function" ? e(t) : e
}

function CE(e) {
    return typeof e == "number" && e >= 0 && e !== 1 / 0
}

function EE(e, t) {
    return Math.max(e + (t || 0) - Date.now(), 0)
}

function Lu(e, t) {
    return typeof e == "function" ? e(t) : e
}

function bE(e, t) {
    return typeof e == "function" ? e(t) : e
}

function Jf(e, t) {
    const {
        type: n = "all",
        exact: r,
        fetchStatus: o,
        predicate: s,
        queryKey: i,
        stale: a
    } = e;
    if (i) {
        if (r) {
            if (t.queryHash !== td(i, t.options)) return !1
        } else if (!hs(t.queryKey, i)) return !1
    }
    if (n !== "all") {
        const l = t.isActive();
        if (n === "active" && !l || n === "inactive" && l) return !1
    }
    return !(typeof a == "boolean" && t.isStale() !== a || o && o !== t.state.fetchStatus || s && !s(t))
}

function ep(e, t) {
    const {
        exact: n,
        status: r,
        predicate: o,
        mutationKey: s
    } = e;
    if (s) {
        if (!t.options.mutationKey) return !1;
        if (n) {
            if (ps(t.options.mutationKey) !== ps(s)) return !1
        } else if (!hs(t.options.mutationKey, s)) return !1
    }
    return !(r && t.state.status !== r || o && !o(t))
}

function td(e, t) {
    return ((t == null ? void 0 : t.queryKeyHashFn) || ps)(e)
}

function ps(e) {
    return JSON.stringify(e, (t, n) => Fu(n) ? Object.keys(n).sort().reduce((r, o) => (r[o] = n[o], r), {}) : n)
}

function hs(e, t) {
    return e === t ? !0 : typeof e != typeof t ? !1 : e && t && typeof e == "object" && typeof t == "object" ? Object.keys(t).every(n => hs(e[n], t[n])) : !1
}

function ag(e, t) {
    if (e === t) return e;
    const n = tp(e) && tp(t);
    if (n || Fu(e) && Fu(t)) {
        const r = n ? e : Object.keys(e),
            o = r.length,
            s = n ? t : Object.keys(t),
            i = s.length,
            a = n ? [] : {},
            l = new Set(r);
        let u = 0;
        for (let d = 0; d < i; d++) {
            const f = n ? d : s[d];
            (!n && l.has(f) || n) && e[f] === void 0 && t[f] === void 0 ? (a[f] = void 0, u++) : (a[f] = ag(e[f], t[f]), a[f] === e[f] && e[f] !== void 0 && u++)
        }
        return o === i && u === o ? e : a
    }
    return t
}

function tp(e) {
    return Array.isArray(e) && e.length === Object.keys(e).length
}

function Fu(e) {
    if (!np(e)) return !1;
    const t = e.constructor;
    if (t === void 0) return !0;
    const n = t.prototype;
    return !(!np(n) || !n.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(e) !== Object.prototype)
}

function np(e) {
    return Object.prototype.toString.call(e) === "[object Object]"
}

function kE(e) {
    return new Promise(t => {
        setTimeout(t, e)
    })
}

function NE(e, t, n) {
    return typeof n.structuralSharing == "function" ? n.structuralSharing(e, t) : n.structuralSharing !== !1 ? ag(e, t) : t
}

function PE(e, t, n = 0) {
    const r = [...e, t];
    return n && r.length > n ? r.slice(1) : r
}

function AE(e, t, n = 0) {
    const r = [t, ...e];
    return n && r.length > n ? r.slice(0, -1) : r
}
var nd = Symbol();

function lg(e, t) {
    return !e.queryFn && (t != null && t.initialPromise) ? () => t.initialPromise : !e.queryFn || e.queryFn === nd ? () => Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`)) : e.queryFn
}
var Xn, wn, Gr, Ep, TE = (Ep = class extends Ra {
        constructor() {
            super();
            Z(this, Xn);
            Z(this, wn);
            Z(this, Gr);
            U(this, Gr, t => {
                if (!ja && window.addEventListener) {
                    const n = () => t();
                    return window.addEventListener("visibilitychange", n, !1), () => {
                        window.removeEventListener("visibilitychange", n)
                    }
                }
            })
        }
        onSubscribe() {
            N(this, wn) || this.setEventListener(N(this, Gr))
        }
        onUnsubscribe() {
            var t;
            this.hasListeners() || ((t = N(this, wn)) == null || t.call(this), U(this, wn, void 0))
        }
        setEventListener(t) {
            var n;
            U(this, Gr, t), (n = N(this, wn)) == null || n.call(this), U(this, wn, t(r => {
                typeof r == "boolean" ? this.setFocused(r) : this.onFocus()
            }))
        }
        setFocused(t) {
            N(this, Xn) !== t && (U(this, Xn, t), this.onFocus())
        }
        onFocus() {
            const t = this.isFocused();
            this.listeners.forEach(n => {
                n(t)
            })
        }
        isFocused() {
            var t;
            return typeof N(this, Xn) == "boolean" ? N(this, Xn) : ((t = globalThis.document) == null ? void 0 : t.visibilityState) !== "hidden"
        }
    }, Xn = new WeakMap, wn = new WeakMap, Gr = new WeakMap, Ep),
    ug = new TE,
    Yr, Sn, qr, bp, RE = (bp = class extends Ra {
        constructor() {
            super();
            Z(this, Yr, !0);
            Z(this, Sn);
            Z(this, qr);
            U(this, qr, t => {
                if (!ja && window.addEventListener) {
                    const n = () => t(!0),
                        r = () => t(!1);
                    return window.addEventListener("online", n, !1), window.addEventListener("offline", r, !1), () => {
                        window.removeEventListener("online", n), window.removeEventListener("offline", r)
                    }
                }
            })
        }
        onSubscribe() {
            N(this, Sn) || this.setEventListener(N(this, qr))
        }
        onUnsubscribe() {
            var t;
            this.hasListeners() || ((t = N(this, Sn)) == null || t.call(this), U(this, Sn, void 0))
        }
        setEventListener(t) {
            var n;
            U(this, qr, t), (n = N(this, Sn)) == null || n.call(this), U(this, Sn, t(this.setOnline.bind(this)))
        }
        setOnline(t) {
            N(this, Yr) !== t && (U(this, Yr, t), this.listeners.forEach(r => {
                r(t)
            }))
        }
        isOnline() {
            return N(this, Yr)
        }
    }, Yr = new WeakMap, Sn = new WeakMap, qr = new WeakMap, bp),
    Ji = new RE;

function jE() {
    let e, t;
    const n = new Promise((o, s) => {
        e = o, t = s
    });
    n.status = "pending", n.catch(() => {});

    function r(o) {
        Object.assign(n, o), delete n.resolve, delete n.reject
    }
    return n.resolve = o => {
        r({
            status: "fulfilled",
            value: o
        }), e(o)
    }, n.reject = o => {
        r({
            status: "rejected",
            reason: o
        }), t(o)
    }, n
}

function OE(e) {
    return Math.min(1e3 * 2 ** e, 3e4)
}

function cg(e) {
    return (e ? ? "online") === "online" ? Ji.isOnline() : !0
}
var dg = class extends Error {
    constructor(e) {
        super("CancelledError"), this.revert = e == null ? void 0 : e.revert, this.silent = e == null ? void 0 : e.silent
    }
};

function Pl(e) {
    return e instanceof dg
}

function fg(e) {
    let t = !1,
        n = 0,
        r = !1,
        o;
    const s = jE(),
        i = m => {
            var w;
            r || (v(new dg(m)), (w = e.abort) == null || w.call(e))
        },
        a = () => {
            t = !0
        },
        l = () => {
            t = !1
        },
        u = () => ug.isFocused() && (e.networkMode === "always" || Ji.isOnline()) && e.canRun(),
        d = () => cg(e.networkMode) && e.canRun(),
        f = m => {
            var w;
            r || (r = !0, (w = e.onSuccess) == null || w.call(e, m), o == null || o(), s.resolve(m))
        },
        v = m => {
            var w;
            r || (r = !0, (w = e.onError) == null || w.call(e, m), o == null || o(), s.reject(m))
        },
        p = () => new Promise(m => {
            var w;
            o = g => {
                (r || u()) && m(g)
            }, (w = e.onPause) == null || w.call(e)
        }).then(() => {
            var m;
            o = void 0, r || (m = e.onContinue) == null || m.call(e)
        }),
        S = () => {
            if (r) return;
            let m;
            const w = n === 0 ? e.initialPromise : void 0;
            try {
                m = w ? ? e.fn()
            } catch (g) {
                m = Promise.reject(g)
            }
            Promise.resolve(m).then(f).catch(g => {
                var b;
                if (r) return;
                const h = e.retry ? ? (ja ? 0 : 3),
                    x = e.retryDelay ? ? OE,
                    C = typeof x == "function" ? x(n, g) : x,
                    E = h === !0 || typeof h == "number" && n < h || typeof h == "function" && h(n, g);
                if (t || !E) {
                    v(g);
                    return
                }
                n++, (b = e.onFail) == null || b.call(e, n, g), kE(C).then(() => u() ? void 0 : p()).then(() => {
                    t ? v(g) : S()
                })
            })
        };
    return {
        promise: s,
        cancel: i,
        continue: () => (o == null || o(), s),
        cancelRetry: a,
        continueRetry: l,
        canStart: d,
        start: () => (d() ? S() : p().then(S), s)
    }
}
var ME = e => setTimeout(e, 0);

function DE() {
    let e = [],
        t = 0,
        n = a => {
            a()
        },
        r = a => {
            a()
        },
        o = ME;
    const s = a => {
            t ? e.push(a) : o(() => {
                n(a)
            })
        },
        i = () => {
            const a = e;
            e = [], a.length && o(() => {
                r(() => {
                    a.forEach(l => {
                        n(l)
                    })
                })
            })
        };
    return {
        batch: a => {
            let l;
            t++;
            try {
                l = a()
            } finally {
                t--, t || i()
            }
            return l
        },
        batchCalls: a => (...l) => {
            s(() => {
                a(...l)
            })
        },
        schedule: s,
        setNotifyFunction: a => {
            n = a
        },
        setBatchNotifyFunction: a => {
            r = a
        },
        setScheduler: a => {
            o = a
        }
    }
}
var _e = DE(),
    Zn, kp, pg = (kp = class {
        constructor() {
            Z(this, Zn)
        }
        destroy() {
            this.clearGcTimeout()
        }
        scheduleGc() {
            this.clearGcTimeout(), CE(this.gcTime) && U(this, Zn, setTimeout(() => {
                this.optionalRemove()
            }, this.gcTime))
        }
        updateGcTime(e) {
            this.gcTime = Math.max(this.gcTime || 0, e ? ? (ja ? 1 / 0 : 5 * 60 * 1e3))
        }
        clearGcTimeout() {
            N(this, Zn) && (clearTimeout(N(this, Zn)), U(this, Zn, void 0))
        }
    }, Zn = new WeakMap, kp),
    Xr, Jn, rt, er, je, ms, tr, gt, Ht, Np, IE = (Np = class extends pg {
        constructor(t) {
            super();
            Z(this, gt);
            Z(this, Xr);
            Z(this, Jn);
            Z(this, rt);
            Z(this, er);
            Z(this, je);
            Z(this, ms);
            Z(this, tr);
            U(this, tr, !1), U(this, ms, t.defaultOptions), this.setOptions(t.options), this.observers = [], U(this, er, t.client), U(this, rt, N(this, er).getQueryCache()), this.queryKey = t.queryKey, this.queryHash = t.queryHash, U(this, Xr, LE(this.options)), this.state = t.state ? ? N(this, Xr), this.scheduleGc()
        }
        get meta() {
            return this.options.meta
        }
        get promise() {
            var t;
            return (t = N(this, je)) == null ? void 0 : t.promise
        }
        setOptions(t) {
            this.options = { ...N(this, ms),
                ...t
            }, this.updateGcTime(this.options.gcTime)
        }
        optionalRemove() {
            !this.observers.length && this.state.fetchStatus === "idle" && N(this, rt).remove(this)
        }
        setData(t, n) {
            const r = NE(this.state.data, t, this.options);
            return Ae(this, gt, Ht).call(this, {
                data: r,
                type: "success",
                dataUpdatedAt: n == null ? void 0 : n.updatedAt,
                manual: n == null ? void 0 : n.manual
            }), r
        }
        setState(t, n) {
            Ae(this, gt, Ht).call(this, {
                type: "setState",
                state: t,
                setStateOptions: n
            })
        }
        cancel(t) {
            var r, o;
            const n = (r = N(this, je)) == null ? void 0 : r.promise;
            return (o = N(this, je)) == null || o.cancel(t), n ? n.then(vt).catch(vt) : Promise.resolve()
        }
        destroy() {
            super.destroy(), this.cancel({
                silent: !0
            })
        }
        reset() {
            this.destroy(), this.setState(N(this, Xr))
        }
        isActive() {
            return this.observers.some(t => bE(t.options.enabled, this) !== !1)
        }
        isDisabled() {
            return this.getObserversCount() > 0 ? !this.isActive() : this.options.queryFn === nd || this.state.dataUpdateCount + this.state.errorUpdateCount === 0
        }
        isStatic() {
            return this.getObserversCount() > 0 ? this.observers.some(t => Lu(t.options.staleTime, this) === "static") : !1
        }
        isStale() {
            return this.getObserversCount() > 0 ? this.observers.some(t => t.getCurrentResult().isStale) : this.state.data === void 0 || this.state.isInvalidated
        }
        isStaleByTime(t = 0) {
            return this.state.data === void 0 ? !0 : t === "static" ? !1 : this.state.isInvalidated ? !0 : !EE(this.state.dataUpdatedAt, t)
        }
        onFocus() {
            var n;
            const t = this.observers.find(r => r.shouldFetchOnWindowFocus());
            t == null || t.refetch({
                cancelRefetch: !1
            }), (n = N(this, je)) == null || n.continue()
        }
        onOnline() {
            var n;
            const t = this.observers.find(r => r.shouldFetchOnReconnect());
            t == null || t.refetch({
                cancelRefetch: !1
            }), (n = N(this, je)) == null || n.continue()
        }
        addObserver(t) {
            this.observers.includes(t) || (this.observers.push(t), this.clearGcTimeout(), N(this, rt).notify({
                type: "observerAdded",
                query: this,
                observer: t
            }))
        }
        removeObserver(t) {
            this.observers.includes(t) && (this.observers = this.observers.filter(n => n !== t), this.observers.length || (N(this, je) && (N(this, tr) ? N(this, je).cancel({
                revert: !0
            }) : N(this, je).cancelRetry()), this.scheduleGc()), N(this, rt).notify({
                type: "observerRemoved",
                query: this,
                observer: t
            }))
        }
        getObserversCount() {
            return this.observers.length
        }
        invalidate() {
            this.state.isInvalidated || Ae(this, gt, Ht).call(this, {
                type: "invalidate"
            })
        }
        fetch(t, n) {
            var u, d, f;
            if (this.state.fetchStatus !== "idle") {
                if (this.state.data !== void 0 && (n != null && n.cancelRefetch)) this.cancel({
                    silent: !0
                });
                else if (N(this, je)) return N(this, je).continueRetry(), N(this, je).promise
            }
            if (t && this.setOptions(t), !this.options.queryFn) {
                const v = this.observers.find(p => p.options.queryFn);
                v && this.setOptions(v.options)
            }
            const r = new AbortController,
                o = v => {
                    Object.defineProperty(v, "signal", {
                        enumerable: !0,
                        get: () => (U(this, tr, !0), r.signal)
                    })
                },
                s = () => {
                    const v = lg(this.options, n),
                        S = (() => {
                            const m = {
                                client: N(this, er),
                                queryKey: this.queryKey,
                                meta: this.meta
                            };
                            return o(m), m
                        })();
                    return U(this, tr, !1), this.options.persister ? this.options.persister(v, S, this) : v(S)
                },
                a = (() => {
                    const v = {
                        fetchOptions: n,
                        options: this.options,
                        queryKey: this.queryKey,
                        client: N(this, er),
                        state: this.state,
                        fetchFn: s
                    };
                    return o(v), v
                })();
            (u = this.options.behavior) == null || u.onFetch(a, this), U(this, Jn, this.state), (this.state.fetchStatus === "idle" || this.state.fetchMeta !== ((d = a.fetchOptions) == null ? void 0 : d.meta)) && Ae(this, gt, Ht).call(this, {
                type: "fetch",
                meta: (f = a.fetchOptions) == null ? void 0 : f.meta
            });
            const l = v => {
                var p, S, m, w;
                Pl(v) && v.silent || Ae(this, gt, Ht).call(this, {
                    type: "error",
                    error: v
                }), Pl(v) || ((S = (p = N(this, rt).config).onError) == null || S.call(p, v, this), (w = (m = N(this, rt).config).onSettled) == null || w.call(m, this.state.data, v, this)), this.scheduleGc()
            };
            return U(this, je, fg({
                initialPromise: n == null ? void 0 : n.initialPromise,
                fn: a.fetchFn,
                abort: r.abort.bind(r),
                onSuccess: v => {
                    var p, S, m, w;
                    if (v === void 0) {
                        l(new Error(`${this.queryHash} data is undefined`));
                        return
                    }
                    try {
                        this.setData(v)
                    } catch (g) {
                        l(g);
                        return
                    }(S = (p = N(this, rt).config).onSuccess) == null || S.call(p, v, this), (w = (m = N(this, rt).config).onSettled) == null || w.call(m, v, this.state.error, this), this.scheduleGc()
                },
                onError: l,
                onFail: (v, p) => {
                    Ae(this, gt, Ht).call(this, {
                        type: "failed",
                        failureCount: v,
                        error: p
                    })
                },
                onPause: () => {
                    Ae(this, gt, Ht).call(this, {
                        type: "pause"
                    })
                },
                onContinue: () => {
                    Ae(this, gt, Ht).call(this, {
                        type: "continue"
                    })
                },
                retry: a.options.retry,
                retryDelay: a.options.retryDelay,
                networkMode: a.options.networkMode,
                canRun: () => !0
            })), N(this, je).start()
        }
    }, Xr = new WeakMap, Jn = new WeakMap, rt = new WeakMap, er = new WeakMap, je = new WeakMap, ms = new WeakMap, tr = new WeakMap, gt = new WeakSet, Ht = function(t) {
        const n = r => {
            switch (t.type) {
                case "failed":
                    return { ...r,
                        fetchFailureCount: t.failureCount,
                        fetchFailureReason: t.error
                    };
                case "pause":
                    return { ...r,
                        fetchStatus: "paused"
                    };
                case "continue":
                    return { ...r,
                        fetchStatus: "fetching"
                    };
                case "fetch":
                    return { ...r,
                        ..._E(r.data, this.options),
                        fetchMeta: t.meta ? ? null
                    };
                case "success":
                    return U(this, Jn, void 0), { ...r,
                        data: t.data,
                        dataUpdateCount: r.dataUpdateCount + 1,
                        dataUpdatedAt: t.dataUpdatedAt ? ? Date.now(),
                        error: null,
                        isInvalidated: !1,
                        status: "success",
                        ...!t.manual && {
                            fetchStatus: "idle",
                            fetchFailureCount: 0,
                            fetchFailureReason: null
                        }
                    };
                case "error":
                    const o = t.error;
                    return Pl(o) && o.revert && N(this, Jn) ? { ...N(this, Jn),
                        fetchStatus: "idle"
                    } : { ...r,
                        error: o,
                        errorUpdateCount: r.errorUpdateCount + 1,
                        errorUpdatedAt: Date.now(),
                        fetchFailureCount: r.fetchFailureCount + 1,
                        fetchFailureReason: o,
                        fetchStatus: "idle",
                        status: "error"
                    };
                case "invalidate":
                    return { ...r,
                        isInvalidated: !0
                    };
                case "setState":
                    return { ...r,
                        ...t.state
                    }
            }
        };
        this.state = n(this.state), _e.batch(() => {
            this.observers.forEach(r => {
                r.onQueryUpdate()
            }), N(this, rt).notify({
                query: this,
                type: "updated",
                action: t
            })
        })
    }, Np);

function _E(e, t) {
    return {
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchStatus: cg(t.networkMode) ? "fetching" : "paused",
        ...e === void 0 && {
            error: null,
            status: "pending"
        }
    }
}

function LE(e) {
    const t = typeof e.initialData == "function" ? e.initialData() : e.initialData,
        n = t !== void 0,
        r = n ? typeof e.initialDataUpdatedAt == "function" ? e.initialDataUpdatedAt() : e.initialDataUpdatedAt : 0;
    return {
        data: t,
        dataUpdateCount: 0,
        dataUpdatedAt: n ? r ? ? Date.now() : 0,
        error: null,
        errorUpdateCount: 0,
        errorUpdatedAt: 0,
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchMeta: null,
        isInvalidated: !1,
        status: n ? "success" : "pending",
        fetchStatus: "idle"
    }
}
var Rt, Pp, FE = (Pp = class extends Ra {
        constructor(t = {}) {
            super();
            Z(this, Rt);
            this.config = t, U(this, Rt, new Map)
        }
        build(t, n, r) {
            const o = n.queryKey,
                s = n.queryHash ? ? td(o, n);
            let i = this.get(s);
            return i || (i = new IE({
                client: t,
                queryKey: o,
                queryHash: s,
                options: t.defaultQueryOptions(n),
                state: r,
                defaultOptions: t.getQueryDefaults(o)
            }), this.add(i)), i
        }
        add(t) {
            N(this, Rt).has(t.queryHash) || (N(this, Rt).set(t.queryHash, t), this.notify({
                type: "added",
                query: t
            }))
        }
        remove(t) {
            const n = N(this, Rt).get(t.queryHash);
            n && (t.destroy(), n === t && N(this, Rt).delete(t.queryHash), this.notify({
                type: "removed",
                query: t
            }))
        }
        clear() {
            _e.batch(() => {
                this.getAll().forEach(t => {
                    this.remove(t)
                })
            })
        }
        get(t) {
            return N(this, Rt).get(t)
        }
        getAll() {
            return [...N(this, Rt).values()]
        }
        find(t) {
            const n = {
                exact: !0,
                ...t
            };
            return this.getAll().find(r => Jf(n, r))
        }
        findAll(t = {}) {
            const n = this.getAll();
            return Object.keys(t).length > 0 ? n.filter(r => Jf(t, r)) : n
        }
        notify(t) {
            _e.batch(() => {
                this.listeners.forEach(n => {
                    n(t)
                })
            })
        }
        onFocus() {
            _e.batch(() => {
                this.getAll().forEach(t => {
                    t.onFocus()
                })
            })
        }
        onOnline() {
            _e.batch(() => {
                this.getAll().forEach(t => {
                    t.onOnline()
                })
            })
        }
    }, Rt = new WeakMap, Pp),
    jt, De, nr, Ot, hn, Ap, zE = (Ap = class extends pg {
        constructor(t) {
            super();
            Z(this, Ot);
            Z(this, jt);
            Z(this, De);
            Z(this, nr);
            this.mutationId = t.mutationId, U(this, De, t.mutationCache), U(this, jt, []), this.state = t.state || $E(), this.setOptions(t.options), this.scheduleGc()
        }
        setOptions(t) {
            this.options = t, this.updateGcTime(this.options.gcTime)
        }
        get meta() {
            return this.options.meta
        }
        addObserver(t) {
            N(this, jt).includes(t) || (N(this, jt).push(t), this.clearGcTimeout(), N(this, De).notify({
                type: "observerAdded",
                mutation: this,
                observer: t
            }))
        }
        removeObserver(t) {
            U(this, jt, N(this, jt).filter(n => n !== t)), this.scheduleGc(), N(this, De).notify({
                type: "observerRemoved",
                mutation: this,
                observer: t
            })
        }
        optionalRemove() {
            N(this, jt).length || (this.state.status === "pending" ? this.scheduleGc() : N(this, De).remove(this))
        }
        continue () {
            var t;
            return ((t = N(this, nr)) == null ? void 0 : t.continue()) ? ? this.execute(this.state.variables)
        }
        async execute(t) {
            var s, i, a, l, u, d, f, v, p, S, m, w, g, h, x, C, E, b, k, T;
            const n = () => {
                Ae(this, Ot, hn).call(this, {
                    type: "continue"
                })
            };
            U(this, nr, fg({
                fn: () => this.options.mutationFn ? this.options.mutationFn(t) : Promise.reject(new Error("No mutationFn found")),
                onFail: (O, M) => {
                    Ae(this, Ot, hn).call(this, {
                        type: "failed",
                        failureCount: O,
                        error: M
                    })
                },
                onPause: () => {
                    Ae(this, Ot, hn).call(this, {
                        type: "pause"
                    })
                },
                onContinue: n,
                retry: this.options.retry ? ? 0,
                retryDelay: this.options.retryDelay,
                networkMode: this.options.networkMode,
                canRun: () => N(this, De).canRun(this)
            }));
            const r = this.state.status === "pending",
                o = !N(this, nr).canStart();
            try {
                if (r) n();
                else {
                    Ae(this, Ot, hn).call(this, {
                        type: "pending",
                        variables: t,
                        isPaused: o
                    }), await ((i = (s = N(this, De).config).onMutate) == null ? void 0 : i.call(s, t, this));
                    const M = await ((l = (a = this.options).onMutate) == null ? void 0 : l.call(a, t));
                    M !== this.state.context && Ae(this, Ot, hn).call(this, {
                        type: "pending",
                        context: M,
                        variables: t,
                        isPaused: o
                    })
                }
                const O = await N(this, nr).start();
                return await ((d = (u = N(this, De).config).onSuccess) == null ? void 0 : d.call(u, O, t, this.state.context, this)), await ((v = (f = this.options).onSuccess) == null ? void 0 : v.call(f, O, t, this.state.context)), await ((S = (p = N(this, De).config).onSettled) == null ? void 0 : S.call(p, O, null, this.state.variables, this.state.context, this)), await ((w = (m = this.options).onSettled) == null ? void 0 : w.call(m, O, null, t, this.state.context)), Ae(this, Ot, hn).call(this, {
                    type: "success",
                    data: O
                }), O
            } catch (O) {
                try {
                    throw await ((h = (g = N(this, De).config).onError) == null ? void 0 : h.call(g, O, t, this.state.context, this)), await ((C = (x = this.options).onError) == null ? void 0 : C.call(x, O, t, this.state.context)), await ((b = (E = N(this, De).config).onSettled) == null ? void 0 : b.call(E, void 0, O, this.state.variables, this.state.context, this)), await ((T = (k = this.options).onSettled) == null ? void 0 : T.call(k, void 0, O, t, this.state.context)), O
                } finally {
                    Ae(this, Ot, hn).call(this, {
                        type: "error",
                        error: O
                    })
                }
            } finally {
                N(this, De).runNext(this)
            }
        }
    }, jt = new WeakMap, De = new WeakMap, nr = new WeakMap, Ot = new WeakSet, hn = function(t) {
        const n = r => {
            switch (t.type) {
                case "failed":
                    return { ...r,
                        failureCount: t.failureCount,
                        failureReason: t.error
                    };
                case "pause":
                    return { ...r,
                        isPaused: !0
                    };
                case "continue":
                    return { ...r,
                        isPaused: !1
                    };
                case "pending":
                    return { ...r,
                        context: t.context,
                        data: void 0,
                        failureCount: 0,
                        failureReason: null,
                        error: null,
                        isPaused: t.isPaused,
                        status: "pending",
                        variables: t.variables,
                        submittedAt: Date.now()
                    };
                case "success":
                    return { ...r,
                        data: t.data,
                        failureCount: 0,
                        failureReason: null,
                        error: null,
                        status: "success",
                        isPaused: !1
                    };
                case "error":
                    return { ...r,
                        data: void 0,
                        error: t.error,
                        failureCount: r.failureCount + 1,
                        failureReason: t.error,
                        isPaused: !1,
                        status: "error"
                    }
            }
        };
        this.state = n(this.state), _e.batch(() => {
            N(this, jt).forEach(r => {
                r.onMutationUpdate(t)
            }), N(this, De).notify({
                mutation: this,
                type: "updated",
                action: t
            })
        })
    }, Ap);

function $E() {
    return {
        context: void 0,
        data: void 0,
        error: null,
        failureCount: 0,
        failureReason: null,
        isPaused: !1,
        status: "idle",
        variables: void 0,
        submittedAt: 0
    }
}
var Kt, yt, vs, Tp, BE = (Tp = class extends Ra {
    constructor(t = {}) {
        super();
        Z(this, Kt);
        Z(this, yt);
        Z(this, vs);
        this.config = t, U(this, Kt, new Set), U(this, yt, new Map), U(this, vs, 0)
    }
    build(t, n, r) {
        const o = new zE({
            mutationCache: this,
            mutationId: ++Rs(this, vs)._,
            options: t.defaultMutationOptions(n),
            state: r
        });
        return this.add(o), o
    }
    add(t) {
        N(this, Kt).add(t);
        const n = Zs(t);
        if (typeof n == "string") {
            const r = N(this, yt).get(n);
            r ? r.push(t) : N(this, yt).set(n, [t])
        }
        this.notify({
            type: "added",
            mutation: t
        })
    }
    remove(t) {
        if (N(this, Kt).delete(t)) {
            const n = Zs(t);
            if (typeof n == "string") {
                const r = N(this, yt).get(n);
                if (r)
                    if (r.length > 1) {
                        const o = r.indexOf(t);
                        o !== -1 && r.splice(o, 1)
                    } else r[0] === t && N(this, yt).delete(n)
            }
        }
        this.notify({
            type: "removed",
            mutation: t
        })
    }
    canRun(t) {
        const n = Zs(t);
        if (typeof n == "string") {
            const r = N(this, yt).get(n),
                o = r == null ? void 0 : r.find(s => s.state.status === "pending");
            return !o || o === t
        } else return !0
    }
    runNext(t) {
        var r;
        const n = Zs(t);
        if (typeof n == "string") {
            const o = (r = N(this, yt).get(n)) == null ? void 0 : r.find(s => s !== t && s.state.isPaused);
            return (o == null ? void 0 : o.continue()) ? ? Promise.resolve()
        } else return Promise.resolve()
    }
    clear() {
        _e.batch(() => {
            N(this, Kt).forEach(t => {
                this.notify({
                    type: "removed",
                    mutation: t
                })
            }), N(this, Kt).clear(), N(this, yt).clear()
        })
    }
    getAll() {
        return Array.from(N(this, Kt))
    }
    find(t) {
        const n = {
            exact: !0,
            ...t
        };
        return this.getAll().find(r => ep(n, r))
    }
    findAll(t = {}) {
        return this.getAll().filter(n => ep(t, n))
    }
    notify(t) {
        _e.batch(() => {
            this.listeners.forEach(n => {
                n(t)
            })
        })
    }
    resumePausedMutations() {
        const t = this.getAll().filter(n => n.state.isPaused);
        return _e.batch(() => Promise.all(t.map(n => n.continue().catch(vt))))
    }
}, Kt = new WeakMap, yt = new WeakMap, vs = new WeakMap, Tp);

function Zs(e) {
    var t;
    return (t = e.options.scope) == null ? void 0 : t.id
}

function rp(e) {
    return {
        onFetch: (t, n) => {
            var d, f, v, p, S;
            const r = t.options,
                o = (v = (f = (d = t.fetchOptions) == null ? void 0 : d.meta) == null ? void 0 : f.fetchMore) == null ? void 0 : v.direction,
                s = ((p = t.state.data) == null ? void 0 : p.pages) || [],
                i = ((S = t.state.data) == null ? void 0 : S.pageParams) || [];
            let a = {
                    pages: [],
                    pageParams: []
                },
                l = 0;
            const u = async () => {
                let m = !1;
                const w = x => {
                        Object.defineProperty(x, "signal", {
                            enumerable: !0,
                            get: () => (t.signal.aborted ? m = !0 : t.signal.addEventListener("abort", () => {
                                m = !0
                            }), t.signal)
                        })
                    },
                    g = lg(t.options, t.fetchOptions),
                    h = async (x, C, E) => {
                        if (m) return Promise.reject();
                        if (C == null && x.pages.length) return Promise.resolve(x);
                        const k = (() => {
                                const z = {
                                    client: t.client,
                                    queryKey: t.queryKey,
                                    pageParam: C,
                                    direction: E ? "backward" : "forward",
                                    meta: t.options.meta
                                };
                                return w(z), z
                            })(),
                            T = await g(k),
                            {
                                maxPages: O
                            } = t.options,
                            M = E ? AE : PE;
                        return {
                            pages: M(x.pages, T, O),
                            pageParams: M(x.pageParams, C, O)
                        }
                    };
                if (o && s.length) {
                    const x = o === "backward",
                        C = x ? UE : op,
                        E = {
                            pages: s,
                            pageParams: i
                        },
                        b = C(r, E);
                    a = await h(E, b, x)
                } else {
                    const x = e ? ? s.length;
                    do {
                        const C = l === 0 ? i[0] ? ? r.initialPageParam : op(r, a);
                        if (l > 0 && C == null) break;
                        a = await h(a, C), l++
                    } while (l < x)
                }
                return a
            };
            t.options.persister ? t.fetchFn = () => {
                var m, w;
                return (w = (m = t.options).persister) == null ? void 0 : w.call(m, u, {
                    client: t.client,
                    queryKey: t.queryKey,
                    meta: t.options.meta,
                    signal: t.signal
                }, n)
            } : t.fetchFn = u
        }
    }
}

function op(e, {
    pages: t,
    pageParams: n
}) {
    const r = t.length - 1;
    return t.length > 0 ? e.getNextPageParam(t[r], t, n[r], n) : void 0
}

function UE(e, {
    pages: t,
    pageParams: n
}) {
    var r;
    return t.length > 0 ? (r = e.getPreviousPageParam) == null ? void 0 : r.call(e, t[0], t, n[0], n) : void 0
}
var he, Cn, En, Zr, Jr, bn, eo, to, Rp, VE = (Rp = class {
        constructor(e = {}) {
            Z(this, he);
            Z(this, Cn);
            Z(this, En);
            Z(this, Zr);
            Z(this, Jr);
            Z(this, bn);
            Z(this, eo);
            Z(this, to);
            U(this, he, e.queryCache || new FE), U(this, Cn, e.mutationCache || new BE), U(this, En, e.defaultOptions || {}), U(this, Zr, new Map), U(this, Jr, new Map), U(this, bn, 0)
        }
        mount() {
            Rs(this, bn)._++, N(this, bn) === 1 && (U(this, eo, ug.subscribe(async e => {
                e && (await this.resumePausedMutations(), N(this, he).onFocus())
            })), U(this, to, Ji.subscribe(async e => {
                e && (await this.resumePausedMutations(), N(this, he).onOnline())
            })))
        }
        unmount() {
            var e, t;
            Rs(this, bn)._--, N(this, bn) === 0 && ((e = N(this, eo)) == null || e.call(this), U(this, eo, void 0), (t = N(this, to)) == null || t.call(this), U(this, to, void 0))
        }
        isFetching(e) {
            return N(this, he).findAll({ ...e,
                fetchStatus: "fetching"
            }).length
        }
        isMutating(e) {
            return N(this, Cn).findAll({ ...e,
                status: "pending"
            }).length
        }
        getQueryData(e) {
            var n;
            const t = this.defaultQueryOptions({
                queryKey: e
            });
            return (n = N(this, he).get(t.queryHash)) == null ? void 0 : n.state.data
        }
        ensureQueryData(e) {
            const t = this.defaultQueryOptions(e),
                n = N(this, he).build(this, t),
                r = n.state.data;
            return r === void 0 ? this.fetchQuery(e) : (e.revalidateIfStale && n.isStaleByTime(Lu(t.staleTime, n)) && this.prefetchQuery(t), Promise.resolve(r))
        }
        getQueriesData(e) {
            return N(this, he).findAll(e).map(({
                queryKey: t,
                state: n
            }) => {
                const r = n.data;
                return [t, r]
            })
        }
        setQueryData(e, t, n) {
            const r = this.defaultQueryOptions({
                    queryKey: e
                }),
                o = N(this, he).get(r.queryHash),
                s = o == null ? void 0 : o.state.data,
                i = SE(t, s);
            if (i !== void 0) return N(this, he).build(this, r).setData(i, { ...n,
                manual: !0
            })
        }
        setQueriesData(e, t, n) {
            return _e.batch(() => N(this, he).findAll(e).map(({
                queryKey: r
            }) => [r, this.setQueryData(r, t, n)]))
        }
        getQueryState(e) {
            var n;
            const t = this.defaultQueryOptions({
                queryKey: e
            });
            return (n = N(this, he).get(t.queryHash)) == null ? void 0 : n.state
        }
        removeQueries(e) {
            const t = N(this, he);
            _e.batch(() => {
                t.findAll(e).forEach(n => {
                    t.remove(n)
                })
            })
        }
        resetQueries(e, t) {
            const n = N(this, he);
            return _e.batch(() => (n.findAll(e).forEach(r => {
                r.reset()
            }), this.refetchQueries({
                type: "active",
                ...e
            }, t)))
        }
        cancelQueries(e, t = {}) {
            const n = {
                    revert: !0,
                    ...t
                },
                r = _e.batch(() => N(this, he).findAll(e).map(o => o.cancel(n)));
            return Promise.all(r).then(vt).catch(vt)
        }
        invalidateQueries(e, t = {}) {
            return _e.batch(() => (N(this, he).findAll(e).forEach(n => {
                n.invalidate()
            }), (e == null ? void 0 : e.refetchType) === "none" ? Promise.resolve() : this.refetchQueries({ ...e,
                type: (e == null ? void 0 : e.refetchType) ? ? (e == null ? void 0 : e.type) ? ? "active"
            }, t)))
        }
        refetchQueries(e, t = {}) {
            const n = { ...t,
                    cancelRefetch: t.cancelRefetch ? ? !0
                },
                r = _e.batch(() => N(this, he).findAll(e).filter(o => !o.isDisabled() && !o.isStatic()).map(o => {
                    let s = o.fetch(void 0, n);
                    return n.throwOnError || (s = s.catch(vt)), o.state.fetchStatus === "paused" ? Promise.resolve() : s
                }));
            return Promise.all(r).then(vt)
        }
        fetchQuery(e) {
            const t = this.defaultQueryOptions(e);
            t.retry === void 0 && (t.retry = !1);
            const n = N(this, he).build(this, t);
            return n.isStaleByTime(Lu(t.staleTime, n)) ? n.fetch(t) : Promise.resolve(n.state.data)
        }
        prefetchQuery(e) {
            return this.fetchQuery(e).then(vt).catch(vt)
        }
        fetchInfiniteQuery(e) {
            return e.behavior = rp(e.pages), this.fetchQuery(e)
        }
        prefetchInfiniteQuery(e) {
            return this.fetchInfiniteQuery(e).then(vt).catch(vt)
        }
        ensureInfiniteQueryData(e) {
            return e.behavior = rp(e.pages), this.ensureQueryData(e)
        }
        resumePausedMutations() {
            return Ji.isOnline() ? N(this, Cn).resumePausedMutations() : Promise.resolve()
        }
        getQueryCache() {
            return N(this, he)
        }
        getMutationCache() {
            return N(this, Cn)
        }
        getDefaultOptions() {
            return N(this, En)
        }
        setDefaultOptions(e) {
            U(this, En, e)
        }
        setQueryDefaults(e, t) {
            N(this, Zr).set(ps(e), {
                queryKey: e,
                defaultOptions: t
            })
        }
        getQueryDefaults(e) {
            const t = [...N(this, Zr).values()],
                n = {};
            return t.forEach(r => {
                hs(e, r.queryKey) && Object.assign(n, r.defaultOptions)
            }), n
        }
        setMutationDefaults(e, t) {
            N(this, Jr).set(ps(e), {
                mutationKey: e,
                defaultOptions: t
            })
        }
        getMutationDefaults(e) {
            const t = [...N(this, Jr).values()],
                n = {};
            return t.forEach(r => {
                hs(e, r.mutationKey) && Object.assign(n, r.defaultOptions)
            }), n
        }
        defaultQueryOptions(e) {
            if (e._defaulted) return e;
            const t = { ...N(this, En).queries,
                ...this.getQueryDefaults(e.queryKey),
                ...e,
                _defaulted: !0
            };
            return t.queryHash || (t.queryHash = td(t.queryKey, t)), t.refetchOnReconnect === void 0 && (t.refetchOnReconnect = t.networkMode !== "always"), t.throwOnError === void 0 && (t.throwOnError = !!t.suspense), !t.networkMode && t.persister && (t.networkMode = "offlineFirst"), t.queryFn === nd && (t.enabled = !1), t
        }
        defaultMutationOptions(e) {
            return e != null && e._defaulted ? e : { ...N(this, En).mutations,
                ...(e == null ? void 0 : e.mutationKey) && this.getMutationDefaults(e.mutationKey),
                ...e,
                _defaulted: !0
            }
        }
        clear() {
            N(this, he).clear(), N(this, Cn).clear()
        }
    }, he = new WeakMap, Cn = new WeakMap, En = new WeakMap, Zr = new WeakMap, Jr = new WeakMap, bn = new WeakMap, eo = new WeakMap, to = new WeakMap, Rp),
    HE = y.createContext(void 0),
    WE = ({
        client: e,
        children: t
    }) => (y.useEffect(() => (e.mount(), () => {
        e.unmount()
    }), [e]), c.jsx(HE.Provider, {
        value: e,
        children: t
    }));
/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function ea() {
    return ea = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }, ea.apply(this, arguments)
}
var Pn;
(function(e) {
    e.Pop = "POP", e.Push = "PUSH", e.Replace = "REPLACE"
})(Pn || (Pn = {}));
const sp = "popstate";

function QE(e) {
    e === void 0 && (e = {});

    function t(r, o) {
        let {
            pathname: s,
            search: i,
            hash: a
        } = r.location;
        return zu("", {
            pathname: s,
            search: i,
            hash: a
        }, o.state && o.state.usr || null, o.state && o.state.key || "default")
    }

    function n(r, o) {
        return typeof o == "string" ? o : mg(o)
    }
    return GE(t, n, null, e)
}

function Ke(e, t) {
    if (e === !1 || e === null || typeof e > "u") throw new Error(t)
}

function hg(e, t) {
    if (!e) {
        typeof console < "u" && console.warn(t);
        try {
            throw new Error(t)
        } catch {}
    }
}

function KE() {
    return Math.random().toString(36).substr(2, 8)
}

function ip(e, t) {
    return {
        usr: e.state,
        key: e.key,
        idx: t
    }
}

function zu(e, t, n, r) {
    return n === void 0 && (n = null), ea({
        pathname: typeof e == "string" ? e : e.pathname,
        search: "",
        hash: ""
    }, typeof t == "string" ? Oa(t) : t, {
        state: n,
        key: t && t.key || r || KE()
    })
}

function mg(e) {
    let {
        pathname: t = "/",
        search: n = "",
        hash: r = ""
    } = e;
    return n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n), r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r), t
}

function Oa(e) {
    let t = {};
    if (e) {
        let n = e.indexOf("#");
        n >= 0 && (t.hash = e.substr(n), e = e.substr(0, n));
        let r = e.indexOf("?");
        r >= 0 && (t.search = e.substr(r), e = e.substr(0, r)), e && (t.pathname = e)
    }
    return t
}

function GE(e, t, n, r) {
    r === void 0 && (r = {});
    let {
        window: o = document.defaultView,
        v5Compat: s = !1
    } = r, i = o.history, a = Pn.Pop, l = null, u = d();
    u == null && (u = 0, i.replaceState(ea({}, i.state, {
        idx: u
    }), ""));

    function d() {
        return (i.state || {
            idx: null
        }).idx
    }

    function f() {
        a = Pn.Pop;
        let w = d(),
            g = w == null ? null : w - u;
        u = w, l && l({
            action: a,
            location: m.location,
            delta: g
        })
    }

    function v(w, g) {
        a = Pn.Push;
        let h = zu(m.location, w, g);
        u = d() + 1;
        let x = ip(h, u),
            C = m.createHref(h);
        try {
            i.pushState(x, "", C)
        } catch (E) {
            if (E instanceof DOMException && E.name === "DataCloneError") throw E;
            o.location.assign(C)
        }
        s && l && l({
            action: a,
            location: m.location,
            delta: 1
        })
    }

    function p(w, g) {
        a = Pn.Replace;
        let h = zu(m.location, w, g);
        u = d();
        let x = ip(h, u),
            C = m.createHref(h);
        i.replaceState(x, "", C), s && l && l({
            action: a,
            location: m.location,
            delta: 0
        })
    }

    function S(w) {
        let g = o.location.origin !== "null" ? o.location.origin : o.location.href,
            h = typeof w == "string" ? w : mg(w);
        return h = h.replace(/ $/, "%20"), Ke(g, "No window.location.(origin|href) available to create URL for href: " + h), new URL(h, g)
    }
    let m = {
        get action() {
            return a
        },
        get location() {
            return e(o, i)
        },
        listen(w) {
            if (l) throw new Error("A history only accepts one active listener");
            return o.addEventListener(sp, f), l = w, () => {
                o.removeEventListener(sp, f), l = null
            }
        },
        createHref(w) {
            return t(o, w)
        },
        createURL: S,
        encodeLocation(w) {
            let g = S(w);
            return {
                pathname: g.pathname,
                search: g.search,
                hash: g.hash
            }
        },
        push: v,
        replace: p,
        go(w) {
            return i.go(w)
        }
    };
    return m
}
var ap;
(function(e) {
    e.data = "data", e.deferred = "deferred", e.redirect = "redirect", e.error = "error"
})(ap || (ap = {}));

function YE(e, t, n) {
    return n === void 0 && (n = "/"), qE(e, t, n, !1)
}

function qE(e, t, n, r) {
    let o = typeof t == "string" ? Oa(t) : t,
        s = yg(o.pathname || "/", n);
    if (s == null) return null;
    let i = vg(e);
    XE(i);
    let a = null;
    for (let l = 0; a == null && l < i.length; ++l) {
        let u = lb(s);
        a = ib(i[l], u, r)
    }
    return a
}

function vg(e, t, n, r) {
    t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
    let o = (s, i, a) => {
        let l = {
            relativePath: a === void 0 ? s.path || "" : a,
            caseSensitive: s.caseSensitive === !0,
            childrenIndex: i,
            route: s
        };
        l.relativePath.startsWith("/") && (Ke(l.relativePath.startsWith(r), 'Absolute route path "' + l.relativePath + '" nested under path ' + ('"' + r + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."), l.relativePath = l.relativePath.slice(r.length));
        let u = Qr([r, l.relativePath]),
            d = n.concat(l);
        s.children && s.children.length > 0 && (Ke(s.index !== !0, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + u + '".')), vg(s.children, t, d, u)), !(s.path == null && !s.index) && t.push({
            path: u,
            score: ob(u, s.index),
            routesMeta: d
        })
    };
    return e.forEach((s, i) => {
        var a;
        if (s.path === "" || !((a = s.path) != null && a.includes("?"))) o(s, i);
        else
            for (let l of gg(s.path)) o(s, i, l)
    }), t
}

function gg(e) {
    let t = e.split("/");
    if (t.length === 0) return [];
    let [n, ...r] = t, o = n.endsWith("?"), s = n.replace(/\?$/, "");
    if (r.length === 0) return o ? [s, ""] : [s];
    let i = gg(r.join("/")),
        a = [];
    return a.push(...i.map(l => l === "" ? s : [s, l].join("/"))), o && a.push(...i), a.map(l => e.startsWith("/") && l === "" ? "/" : l)
}

function XE(e) {
    e.sort((t, n) => t.score !== n.score ? n.score - t.score : sb(t.routesMeta.map(r => r.childrenIndex), n.routesMeta.map(r => r.childrenIndex)))
}
const ZE = /^:[\w-]+$/,
    JE = 3,
    eb = 2,
    tb = 1,
    nb = 10,
    rb = -2,
    lp = e => e === "*";

function ob(e, t) {
    let n = e.split("/"),
        r = n.length;
    return n.some(lp) && (r += rb), t && (r += eb), n.filter(o => !lp(o)).reduce((o, s) => o + (ZE.test(s) ? JE : s === "" ? tb : nb), r)
}

function sb(e, t) {
    return e.length === t.length && e.slice(0, -1).every((r, o) => r === t[o]) ? e[e.length - 1] - t[t.length - 1] : 0
}

function ib(e, t, n) {
    let {
        routesMeta: r
    } = e, o = {}, s = "/", i = [];
    for (let a = 0; a < r.length; ++a) {
        let l = r[a],
            u = a === r.length - 1,
            d = s === "/" ? t : t.slice(s.length) || "/",
            f = up({
                path: l.relativePath,
                caseSensitive: l.caseSensitive,
                end: u
            }, d),
            v = l.route;
        if (!f && u && n && !r[r.length - 1].route.index && (f = up({
                path: l.relativePath,
                caseSensitive: l.caseSensitive,
                end: !1
            }, d)), !f) return null;
        Object.assign(o, f.params), i.push({
            params: o,
            pathname: Qr([s, f.pathname]),
            pathnameBase: ub(Qr([s, f.pathnameBase])),
            route: v
        }), f.pathnameBase !== "/" && (s = Qr([s, f.pathnameBase]))
    }
    return i
}

function up(e, t) {
    typeof e == "string" && (e = {
        path: e,
        caseSensitive: !1,
        end: !0
    });
    let [n, r] = ab(e.path, e.caseSensitive, e.end), o = t.match(n);
    if (!o) return null;
    let s = o[0],
        i = s.replace(/(.)\/+$/, "$1"),
        a = o.slice(1);
    return {
        params: r.reduce((u, d, f) => {
            let {
                paramName: v,
                isOptional: p
            } = d;
            if (v === "*") {
                let m = a[f] || "";
                i = s.slice(0, s.length - m.length).replace(/(.)\/+$/, "$1")
            }
            const S = a[f];
            return p && !S ? u[v] = void 0 : u[v] = (S || "").replace(/%2F/g, "/"), u
        }, {}),
        pathname: s,
        pathnameBase: i,
        pattern: e
    }
}

function ab(e, t, n) {
    t === void 0 && (t = !1), n === void 0 && (n = !0), hg(e === "*" || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were ' + ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'));
    let r = [],
        o = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (i, a, l) => (r.push({
            paramName: a,
            isOptional: l != null
        }), l ? "/?([^\\/]+)?" : "/([^\\/]+)"));
    return e.endsWith("*") ? (r.push({
        paramName: "*"
    }), o += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? o += "\\/*$" : e !== "" && e !== "/" && (o += "(?:(?=\\/|$))"), [new RegExp(o, t ? void 0 : "i"), r]
}

function lb(e) {
    try {
        return e.split("/").map(t => decodeURIComponent(t).replace(/\//g, "%2F")).join("/")
    } catch (t) {
        return hg(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + t + ").")), e
    }
}

function yg(e, t) {
    if (t === "/") return e;
    if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
    let n = t.endsWith("/") ? t.length - 1 : t.length,
        r = e.charAt(n);
    return r && r !== "/" ? null : e.slice(n) || "/"
}
const Qr = e => e.join("/").replace(/\/\/+/g, "/"),
    ub = e => e.replace(/\/+$/, "").replace(/^\/*/, "/");

function cb(e) {
    return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data" in e
}
const xg = ["post", "put", "patch", "delete"];
new Set(xg);
const db = ["get", ...xg];
new Set(db);
/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function ta() {
    return ta = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }, ta.apply(this, arguments)
}
const fb = y.createContext(null),
    pb = y.createContext(null),
    wg = y.createContext(null),
    Ma = y.createContext(null),
    Da = y.createContext({
        outlet: null,
        matches: [],
        isDataRoute: !1
    }),
    Sg = y.createContext(null);

function rd() {
    return y.useContext(Ma) != null
}

function Cg() {
    return rd() || Ke(!1), y.useContext(Ma).location
}

function hb(e, t) {
    return mb(e, t)
}

function mb(e, t, n, r) {
    rd() || Ke(!1);
    let {
        navigator: o
    } = y.useContext(wg), {
        matches: s
    } = y.useContext(Da), i = s[s.length - 1], a = i ? i.params : {};
    i && i.pathname;
    let l = i ? i.pathnameBase : "/";
    i && i.route;
    let u = Cg(),
        d;
    if (t) {
        var f;
        let w = typeof t == "string" ? Oa(t) : t;
        l === "/" || (f = w.pathname) != null && f.startsWith(l) || Ke(!1), d = w
    } else d = u;
    let v = d.pathname || "/",
        p = v;
    if (l !== "/") {
        let w = l.replace(/^\//, "").split("/");
        p = "/" + v.replace(/^\//, "").split("/").slice(w.length).join("/")
    }
    let S = YE(e, {
            pathname: p
        }),
        m = wb(S && S.map(w => Object.assign({}, w, {
            params: Object.assign({}, a, w.params),
            pathname: Qr([l, o.encodeLocation ? o.encodeLocation(w.pathname).pathname : w.pathname]),
            pathnameBase: w.pathnameBase === "/" ? l : Qr([l, o.encodeLocation ? o.encodeLocation(w.pathnameBase).pathname : w.pathnameBase])
        })), s, n, r);
    return t && m ? y.createElement(Ma.Provider, {
        value: {
            location: ta({
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default"
            }, d),
            navigationType: Pn.Pop
        }
    }, m) : m
}

function vb() {
    let e = bb(),
        t = cb(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e),
        n = e instanceof Error ? e.stack : null,
        o = {
            padding: "0.5rem",
            backgroundColor: "rgba(200,200,200, 0.5)"
        };
    return y.createElement(y.Fragment, null, y.createElement("h2", null, "Unexpected Application Error!"), y.createElement("h3", {
        style: {
            fontStyle: "italic"
        }
    }, t), n ? y.createElement("pre", {
        style: o
    }, n) : null, null)
}
const gb = y.createElement(vb, null);
class yb extends y.Component {
    constructor(t) {
        super(t), this.state = {
            location: t.location,
            revalidation: t.revalidation,
            error: t.error
        }
    }
    static getDerivedStateFromError(t) {
        return {
            error: t
        }
    }
    static getDerivedStateFromProps(t, n) {
        return n.location !== t.location || n.revalidation !== "idle" && t.revalidation === "idle" ? {
            error: t.error,
            location: t.location,
            revalidation: t.revalidation
        } : {
            error: t.error !== void 0 ? t.error : n.error,
            location: n.location,
            revalidation: t.revalidation || n.revalidation
        }
    }
    componentDidCatch(t, n) {
        console.error("React Router caught the following error during render", t, n)
    }
    render() {
        return this.state.error !== void 0 ? y.createElement(Da.Provider, {
            value: this.props.routeContext
        }, y.createElement(Sg.Provider, {
            value: this.state.error,
            children: this.props.component
        })) : this.props.children
    }
}

function xb(e) {
    let {
        routeContext: t,
        match: n,
        children: r
    } = e, o = y.useContext(fb);
    return o && o.static && o.staticContext && (n.route.errorElement || n.route.ErrorBoundary) && (o.staticContext._deepestRenderedBoundaryId = n.route.id), y.createElement(Da.Provider, {
        value: t
    }, r)
}

function wb(e, t, n, r) {
    var o;
    if (t === void 0 && (t = []), n === void 0 && (n = null), r === void 0 && (r = null), e == null) {
        var s;
        if (!n) return null;
        if (n.errors) e = n.matches;
        else if ((s = r) != null && s.v7_partialHydration && t.length === 0 && !n.initialized && n.matches.length > 0) e = n.matches;
        else return null
    }
    let i = e,
        a = (o = n) == null ? void 0 : o.errors;
    if (a != null) {
        let d = i.findIndex(f => f.route.id && (a == null ? void 0 : a[f.route.id]) !== void 0);
        d >= 0 || Ke(!1), i = i.slice(0, Math.min(i.length, d + 1))
    }
    let l = !1,
        u = -1;
    if (n && r && r.v7_partialHydration)
        for (let d = 0; d < i.length; d++) {
            let f = i[d];
            if ((f.route.HydrateFallback || f.route.hydrateFallbackElement) && (u = d), f.route.id) {
                let {
                    loaderData: v,
                    errors: p
                } = n, S = f.route.loader && v[f.route.id] === void 0 && (!p || p[f.route.id] === void 0);
                if (f.route.lazy || S) {
                    l = !0, u >= 0 ? i = i.slice(0, u + 1) : i = [i[0]];
                    break
                }
            }
        }
    return i.reduceRight((d, f, v) => {
        let p, S = !1,
            m = null,
            w = null;
        n && (p = a && f.route.id ? a[f.route.id] : void 0, m = f.route.errorElement || gb, l && (u < 0 && v === 0 ? (S = !0, w = null) : u === v && (S = !0, w = f.route.hydrateFallbackElement || null)));
        let g = t.concat(i.slice(0, v + 1)),
            h = () => {
                let x;
                return p ? x = m : S ? x = w : f.route.Component ? x = y.createElement(f.route.Component, null) : f.route.element ? x = f.route.element : x = d, y.createElement(xb, {
                    match: f,
                    routeContext: {
                        outlet: d,
                        matches: g,
                        isDataRoute: n != null
                    },
                    children: x
                })
            };
        return n && (f.route.ErrorBoundary || f.route.errorElement || v === 0) ? y.createElement(yb, {
            location: n.location,
            revalidation: n.revalidation,
            component: m,
            error: p,
            children: h(),
            routeContext: {
                outlet: null,
                matches: g,
                isDataRoute: !0
            }
        }) : h()
    }, null)
}
var $u = function(e) {
    return e.UseBlocker = "useBlocker", e.UseLoaderData = "useLoaderData", e.UseActionData = "useActionData", e.UseRouteError = "useRouteError", e.UseNavigation = "useNavigation", e.UseRouteLoaderData = "useRouteLoaderData", e.UseMatches = "useMatches", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e.UseRouteId = "useRouteId", e
}($u || {});

function Sb(e) {
    let t = y.useContext(pb);
    return t || Ke(!1), t
}

function Cb(e) {
    let t = y.useContext(Da);
    return t || Ke(!1), t
}

function Eb(e) {
    let t = Cb(),
        n = t.matches[t.matches.length - 1];
    return n.route.id || Ke(!1), n.route.id
}

function bb() {
    var e;
    let t = y.useContext(Sg),
        n = Sb($u.UseRouteError),
        r = Eb($u.UseRouteError);
    return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r]
}

function kb(e, t) {
    e == null || e.v7_startTransition, e == null || e.v7_relativeSplatPath
}

function Bu(e) {
    Ke(!1)
}

function Nb(e) {
    let {
        basename: t = "/",
        children: n = null,
        location: r,
        navigationType: o = Pn.Pop,
        navigator: s,
        static: i = !1,
        future: a
    } = e;
    rd() && Ke(!1);
    let l = t.replace(/^\/*/, "/"),
        u = y.useMemo(() => ({
            basename: l,
            navigator: s,
            static: i,
            future: ta({
                v7_relativeSplatPath: !1
            }, a)
        }), [l, a, s, i]);
    typeof r == "string" && (r = Oa(r));
    let {
        pathname: d = "/",
        search: f = "",
        hash: v = "",
        state: p = null,
        key: S = "default"
    } = r, m = y.useMemo(() => {
        let w = yg(d, l);
        return w == null ? null : {
            location: {
                pathname: w,
                search: f,
                hash: v,
                state: p,
                key: S
            },
            navigationType: o
        }
    }, [l, d, f, v, p, S, o]);
    return m == null ? null : y.createElement(wg.Provider, {
        value: u
    }, y.createElement(Ma.Provider, {
        children: n,
        value: m
    }))
}

function Pb(e) {
    let {
        children: t,
        location: n
    } = e;
    return hb(Uu(t), n)
}
new Promise(() => {});

function Uu(e, t) {
    t === void 0 && (t = []);
    let n = [];
    return y.Children.forEach(e, (r, o) => {
        if (!y.isValidElement(r)) return;
        let s = [...t, o];
        if (r.type === y.Fragment) {
            n.push.apply(n, Uu(r.props.children, s));
            return
        }
        r.type !== Bu && Ke(!1), !r.props.index || !r.props.children || Ke(!1);
        let i = {
            id: r.props.id || s.join("-"),
            caseSensitive: r.props.caseSensitive,
            element: r.props.element,
            Component: r.props.Component,
            index: r.props.index,
            path: r.props.path,
            loader: r.props.loader,
            action: r.props.action,
            errorElement: r.props.errorElement,
            ErrorBoundary: r.props.ErrorBoundary,
            hasErrorBoundary: r.props.ErrorBoundary != null || r.props.errorElement != null,
            shouldRevalidate: r.props.shouldRevalidate,
            handle: r.props.handle,
            lazy: r.props.lazy
        };
        r.props.children && (i.children = Uu(r.props.children, s)), n.push(i)
    }), n
}
/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
const Ab = "6";
try {
    window.__reactRouterVersion = Ab
} catch {}
const Tb = "startTransition",
    cp = qu[Tb];

function Rb(e) {
    let {
        basename: t,
        children: n,
        future: r,
        window: o
    } = e, s = y.useRef();
    s.current == null && (s.current = QE({
        window: o,
        v5Compat: !0
    }));
    let i = s.current,
        [a, l] = y.useState({
            action: i.action,
            location: i.location
        }),
        {
            v7_startTransition: u
        } = r || {},
        d = y.useCallback(f => {
            u && cp ? cp(() => l(f)) : l(f)
        }, [l, u]);
    return y.useLayoutEffect(() => i.listen(d), [i, d]), y.useEffect(() => kb(r), [r]), y.createElement(Nb, {
        basename: t,
        children: n,
        location: a.location,
        navigationType: a.action,
        navigator: i,
        future: r
    })
}
var dp;
(function(e) {
    e.UseScrollRestoration = "useScrollRestoration", e.UseSubmit = "useSubmit", e.UseSubmitFetcher = "useSubmitFetcher", e.UseFetcher = "useFetcher", e.useViewTransitionState = "useViewTransitionState"
})(dp || (dp = {}));
var fp;
(function(e) {
    e.UseFetcher = "useFetcher", e.UseFetchers = "useFetchers", e.UseScrollRestoration = "useScrollRestoration"
})(fp || (fp = {}));
const jb = ba("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
        variants: {
            variant: {
                default: "bg-primary text-primary-foreground hover:bg-primary/90",
                destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
                outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
                secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
                ghost: "hover:bg-accent hover:text-accent-foreground",
                link: "text-primary underline-offset-4 hover:underline"
            },
            size: {
                default: "h-10 px-4 py-2",
                sm: "h-9 rounded-md px-3",
                lg: "h-11 rounded-md px-8",
                icon: "h-10 w-10"
            }
        },
        defaultVariants: {
            variant: "default",
            size: "default"
        }
    }),
    na = y.forwardRef(({
        className: e,
        variant: t,
        size: n,
        asChild: r = !1,
        ...o
    }, s) => {
        const i = r ? pw : "button";
        return c.jsx(i, {
            className: ne(jb({
                variant: t,
                size: n,
                className: e
            })),
            ref: s,
            ...o
        })
    });
na.displayName = "Button";
const Ob = "/assets/product-01-FmJ8Nu6X.png",
    Mb = "/assets/product-02-as2LtVep.png",
    Db = "/assets/product-03-CoNQYibR.png",
    Ib = "/assets/product-04-DDZT2jtU.png",
    _b = "/assets/product-05-Dvv7Yi1M.png",
    Lb = "/assets/product-01-FmJ8Nu6X.png",
    Fb = "/assets/product-02-as2LtVep.png",
    zb = "/assets/product-04-DDZT2jtU.png",
    Js = [Ob, Mb, Db, Ib, _b, Lb, Fb, zb],
    $b = () => {
        const [e, t] = y.useState(0), n = () => {
            t(o => (o + 1) % Js.length)
        }, r = () => {
            t(o => (o - 1 + Js.length) % Js.length)
        };
        return c.jsx("div", {
            className: "w-full",
            children: c.jsxs("div", {
                className: "relative aspect-square bg-white overflow-hidden",
                children: [c.jsx("img", {
                    src: Js[e],
                    alt: `Bicicleta Ergométrica - Imagem ${e+1}`,
                    className: "w-full h-full object-contain"
                }), c.jsx(na, {
                    variant: "ghost",
                    size: "icon",
                    className: "absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/60 text-white rounded-full",
                    onClick: r,
                    children: c.jsx(a1, {
                        className: "h-6 w-6"
                    })
                }), c.jsx(na, {
                    variant: "ghost",
                    size: "icon",
                    className: "absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/60 text-white rounded-full",
                    onClick: n,
                    children: c.jsx(l1, {
                        className: "h-6 w-6"
                    })
                }), c.jsxs("div", {
                    className: "absolute bottom-4 right-4 bg-black/60 text-white px-2 py-1 rounded text-xs",
                    children: [e + 1, "/8"]
                })]
            })
        })
    },
    Bb = () => {
        const [e, t] = y.useState({
            hours: 0,
            minutes: 10,
            seconds: 0
        });
        y.useEffect(() => {
            const r = setInterval(() => {
                t(o => o.seconds > 0 ? { ...o,
                    seconds: o.seconds - 1
                } : o.minutes > 0 ? {
                    hours: o.hours,
                    minutes: o.minutes - 1,
                    seconds: 59
                } : o.hours > 0 ? {
                    hours: o.hours - 1,
                    minutes: 59,
                    seconds: 59
                } : {
                    hours: 0,
                    minutes: 0,
                    seconds: 0
                })
            }, 1e3);
            return () => clearInterval(r)
        }, []);
        const n = r => String(r).padStart(2, "0");
        return c.jsxs("span", {
            className: "text-xs whitespace-nowrap",
            children: ["Termina em ", n(e.hours), ":", n(e.minutes), ":", n(e.seconds)]
        })
    },
    Ub = ba("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", {
        variants: {
            variant: {
                default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
                secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
                destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
                outline: "text-foreground"
            }
        },
        defaultVariants: {
            variant: "default"
        }
    });

function Vu({
    className: e,
    variant: t,
    ...n
}) {
    return c.jsx("div", {
        className: ne(Ub({
            variant: t
        }), e),
        ...n
    })
}
const Vb = "/assets/avatar1-B23M6sKT.jpg",
    Hb = "/assets/avatar2-Dan_t2wO.jpg",
    Wb = "/assets/avatar3-D0fqpfA9.jpg",
    Qb = "/assets/avatar4-DZvnaZen.jpg",
    Kb = "/assets/avatar5-CH61DGnx.jpg",
    Gb = "/assets/avatar6-CqAq-W8r.jpg",
    Yb = "/assets/avatar7-DFiv_Vit.jpg",
    qb = "/assets/review01-B-FW7zPZ.jpg",
    Xb = "/assets/review02-BMqyJvuo.jpg",
    Zb = "/assets/review03-CrZ7l9PZ.jpg",
    Jb = "/assets/review04-BFSlTy4C.jpg",
    ek = "/assets/review05-BFqwyUZZ.jpg",
    tk = "/assets/review06-CJKuwwBM.jpg",
    nk = "/assets/review07-uYbrn4mr.jpg",
    rk = [{
        name: "Fernanda Maia",
        time: "há 2 horas",
        rating: 5,
        comment: "Perfeita 👍 achei fácil de montar, qualidade excelente valeu a minha compra.",
        avatar: Vb,
        productImages: [qb]
    }, {
        name: "Bruna Lima",
        time: "há 6 horas",
        rating: 5,
        comment: "Essa bicicleta é própria para o dia a dia, para uma pessoa não muito alta, pois ela não é muito grande. Atendeu as minhas necessidades, compraria novamente. Em relação ao banco, não é tão confortável, mas dá para fazer 40 minutos sossegado.",
        avatar: Hb,
        productImages: [Xb]
    }, {
        name: "Marília Lima",
        time: "há 14 horas",
        rating: 5,
        comment: "Produto de excelente qualidade, super recomendo!",
        avatar: Wb,
        productImages: [Zb]
    }, {
        name: "Karina Andrade",
        time: "há 18 horas",
        rating: 5,
        comment: "Uma das melhores compras feitas. Detalhe pra quem tem 1:80 fica certinho o tamanho com as regulagens..",
        avatar: Qb,
        productImages: [Jb]
    }, {
        name: "Bruna Silva",
        time: "há 22 horas",
        rating: 5,
        comment: "Ótimo equipamento! bem compactada. Recomendo.",
        avatar: Kb,
        productImages: [ek]
    }, {
        name: "Kailane Cristina",
        time: "há 1 dia",
        rating: 5,
        comment: "Gente eu ameiii , superou minhas expectativas, lindaaa , ainda veio com uma garrafinha, ameliii!!!.",
        avatar: Gb,
        productImages: [tk]
    }, {
        name: "Mariana Lemos",
        time: "há 2 dias",
        rating: 5,
        comment: "Avaliação 5 de 5 Simplesmente estou apaixonada, excelente mesmo.",
        avatar: Yb,
        productImages: [nk]
    }],
    ok = () => c.jsxs("div", {
        className: "space-y-4",
        children: [c.jsx("div", {
            className: "flex items-baseline gap-2",
            children: c.jsx("h2", {
                className: "text-lg font-semibold",
                children: "Avaliações dos clientes (591)"
            })
        }), c.jsxs("div", {
            className: "flex items-center gap-2",
            children: [c.jsx("span", {
                className: "text-2xl font-bold",
                children: "4.9"
            }), c.jsx("span", {
                className: "text-muted-foreground",
                children: "/5"
            }), c.jsx("div", {
                className: "flex",
                children: [...Array(5)].map((e, t) => c.jsx(Gi, {
                    className: "h-5 w-5 fill-warning text-warning"
                }, t))
            })]
        }), c.jsx("div", {
            className: "space-y-4",
            children: rk.map((e, t) => c.jsx("div", {
                className: "border-b pb-4 last:border-b-0",
                children: c.jsxs("div", {
                    className: "flex items-start gap-3",
                    children: [c.jsx("img", {
                        src: e.avatar,
                        alt: e.name,
                        className: "w-10 h-10 rounded-full object-cover flex-shrink-0"
                    }), c.jsxs("div", {
                        className: "flex-1 min-w-0",
                        children: [c.jsx("div", {
                            className: "flex items-center justify-between mb-1",
                            children: c.jsx("h3", {
                                className: "font-semibold text-sm",
                                children: e.name
                            })
                        }), c.jsx("p", {
                            className: "text-xs text-primary mb-2",
                            children: e.time
                        }), c.jsx("div", {
                            className: "flex mb-2",
                            children: [...Array(e.rating)].map((n, r) => c.jsx(Gi, {
                                className: "h-4 w-4 fill-warning text-warning"
                            }, r))
                        }), c.jsx(Vu, {
                            variant: "outline",
                            className: "mb-2 text-xs",
                            children: "Compra Verificada"
                        }), c.jsx("p", {
                            className: "text-sm text-foreground mb-2",
                            children: e.comment
                        }), e.productImages.length > 0 && c.jsx("div", {
                            className: "flex gap-2",
                            children: e.productImages.map((n, r) => c.jsx("img", {
                                src: n,
                                alt: `Foto do produto ${r+1}`,
                                className: "w-20 h-20 rounded object-cover"
                            }, r))
                        })]
                    })]
                })
            }, t))
        })]
    });
var Al = "focusScope.autoFocusOnMount",
    Tl = "focusScope.autoFocusOnUnmount",
    pp = {
        bubbles: !1,
        cancelable: !0
    },
    sk = "FocusScope",
    Eg = y.forwardRef((e, t) => {
        const {
            loop: n = !1,
            trapped: r = !1,
            onMountAutoFocus: o,
            onUnmountAutoFocus: s,
            ...i
        } = e, [a, l] = y.useState(null), u = zt(o), d = zt(s), f = y.useRef(null), v = Ne(t, m => l(m)), p = y.useRef({
            paused: !1,
            pause() {
                this.paused = !0
            },
            resume() {
                this.paused = !1
            }
        }).current;
        y.useEffect(() => {
            if (r) {
                let m = function(x) {
                        if (p.paused || !a) return;
                        const C = x.target;
                        a.contains(C) ? f.current = C : mn(f.current, {
                            select: !0
                        })
                    },
                    w = function(x) {
                        if (p.paused || !a) return;
                        const C = x.relatedTarget;
                        C !== null && (a.contains(C) || mn(f.current, {
                            select: !0
                        }))
                    },
                    g = function(x) {
                        if (document.activeElement === document.body)
                            for (const E of x) E.removedNodes.length > 0 && mn(a)
                    };
                document.addEventListener("focusin", m), document.addEventListener("focusout", w);
                const h = new MutationObserver(g);
                return a && h.observe(a, {
                    childList: !0,
                    subtree: !0
                }), () => {
                    document.removeEventListener("focusin", m), document.removeEventListener("focusout", w), h.disconnect()
                }
            }
        }, [r, a, p.paused]), y.useEffect(() => {
            if (a) {
                mp.add(p);
                const m = document.activeElement;
                if (!a.contains(m)) {
                    const g = new CustomEvent(Al, pp);
                    a.addEventListener(Al, u), a.dispatchEvent(g), g.defaultPrevented || (ik(dk(bg(a)), {
                        select: !0
                    }), document.activeElement === m && mn(a))
                }
                return () => {
                    a.removeEventListener(Al, u), setTimeout(() => {
                        const g = new CustomEvent(Tl, pp);
                        a.addEventListener(Tl, d), a.dispatchEvent(g), g.defaultPrevented || mn(m ? ? document.body, {
                            select: !0
                        }), a.removeEventListener(Tl, d), mp.remove(p)
                    }, 0)
                }
            }
        }, [a, u, d, p]);
        const S = y.useCallback(m => {
            if (!n && !r || p.paused) return;
            const w = m.key === "Tab" && !m.altKey && !m.ctrlKey && !m.metaKey,
                g = document.activeElement;
            if (w && g) {
                const h = m.currentTarget,
                    [x, C] = ak(h);
                x && C ? !m.shiftKey && g === C ? (m.preventDefault(), n && mn(x, {
                    select: !0
                })) : m.shiftKey && g === x && (m.preventDefault(), n && mn(C, {
                    select: !0
                })) : g === h && m.preventDefault()
            }
        }, [n, r, p.paused]);
        return c.jsx(le.div, {
            tabIndex: -1,
            ...i,
            ref: v,
            onKeyDown: S
        })
    });
Eg.displayName = sk;

function ik(e, {
    select: t = !1
} = {}) {
    const n = document.activeElement;
    for (const r of e)
        if (mn(r, {
                select: t
            }), document.activeElement !== n) return
}

function ak(e) {
    const t = bg(e),
        n = hp(t, e),
        r = hp(t.reverse(), e);
    return [n, r]
}

function bg(e) {
    const t = [],
        n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
            acceptNode: r => {
                const o = r.tagName === "INPUT" && r.type === "hidden";
                return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
            }
        });
    for (; n.nextNode();) t.push(n.currentNode);
    return t
}

function hp(e, t) {
    for (const n of e)
        if (!lk(n, {
                upTo: t
            })) return n
}

function lk(e, {
    upTo: t
}) {
    if (getComputedStyle(e).visibility === "hidden") return !0;
    for (; e;) {
        if (t !== void 0 && e === t) return !1;
        if (getComputedStyle(e).display === "none") return !0;
        e = e.parentElement
    }
    return !1
}

function uk(e) {
    return e instanceof HTMLInputElement && "select" in e
}

function mn(e, {
    select: t = !1
} = {}) {
    if (e && e.focus) {
        const n = document.activeElement;
        e.focus({
            preventScroll: !0
        }), e !== n && uk(e) && t && e.select()
    }
}
var mp = ck();

function ck() {
    let e = [];
    return {
        add(t) {
            const n = e[0];
            t !== n && (n == null || n.pause()), e = vp(e, t), e.unshift(t)
        },
        remove(t) {
            var n;
            e = vp(e, t), (n = e[0]) == null || n.resume()
        }
    }
}

function vp(e, t) {
    const n = [...e],
        r = n.indexOf(t);
    return r !== -1 && n.splice(r, 1), n
}

function dk(e) {
    return e.filter(t => t.tagName !== "A")
}
var Rl = 0;

function fk() {
    y.useEffect(() => {
        const e = document.querySelectorAll("[data-radix-focus-guard]");
        return document.body.insertAdjacentElement("afterbegin", e[0] ? ? gp()), document.body.insertAdjacentElement("beforeend", e[1] ? ? gp()), Rl++, () => {
            Rl === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach(t => t.remove()), Rl--
        }
    }, [])
}

function gp() {
    const e = document.createElement("span");
    return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e
}
var Dt = function() {
    return Dt = Object.assign || function(t) {
        for (var n, r = 1, o = arguments.length; r < o; r++) {
            n = arguments[r];
            for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (t[s] = n[s])
        }
        return t
    }, Dt.apply(this, arguments)
};

function kg(e, t) {
    var n = {};
    for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
    return n
}

function pk(e, t, n) {
    if (n || arguments.length === 2)
        for (var r = 0, o = t.length, s; r < o; r++)(s || !(r in t)) && (s || (s = Array.prototype.slice.call(t, 0, r)), s[r] = t[r]);
    return e.concat(s || Array.prototype.slice.call(t))
}
var xi = "right-scroll-bar-position",
    wi = "width-before-scroll-bar",
    hk = "with-scroll-bars-hidden",
    mk = "--removed-body-scroll-bar-size";

function jl(e, t) {
    return typeof e == "function" ? e(t) : e && (e.current = t), e
}

function vk(e, t) {
    var n = y.useState(function() {
        return {
            value: e,
            callback: t,
            facade: {
                get current() {
                    return n.value
                },
                set current(r) {
                    var o = n.value;
                    o !== r && (n.value = r, n.callback(r, o))
                }
            }
        }
    })[0];
    return n.callback = t, n.facade
}
var gk = typeof window < "u" ? y.useLayoutEffect : y.useEffect,
    yp = new WeakMap;

function yk(e, t) {
    var n = vk(null, function(r) {
        return e.forEach(function(o) {
            return jl(o, r)
        })
    });
    return gk(function() {
        var r = yp.get(n);
        if (r) {
            var o = new Set(r),
                s = new Set(e),
                i = n.current;
            o.forEach(function(a) {
                s.has(a) || jl(a, null)
            }), s.forEach(function(a) {
                o.has(a) || jl(a, i)
            })
        }
        yp.set(n, e)
    }, [e]), n
}

function xk(e) {
    return e
}

function wk(e, t) {
    t === void 0 && (t = xk);
    var n = [],
        r = !1,
        o = {
            read: function() {
                if (r) throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
                return n.length ? n[n.length - 1] : e
            },
            useMedium: function(s) {
                var i = t(s, r);
                return n.push(i),
                    function() {
                        n = n.filter(function(a) {
                            return a !== i
                        })
                    }
            },
            assignSyncMedium: function(s) {
                for (r = !0; n.length;) {
                    var i = n;
                    n = [], i.forEach(s)
                }
                n = {
                    push: function(a) {
                        return s(a)
                    },
                    filter: function() {
                        return n
                    }
                }
            },
            assignMedium: function(s) {
                r = !0;
                var i = [];
                if (n.length) {
                    var a = n;
                    n = [], a.forEach(s), i = n
                }
                var l = function() {
                        var d = i;
                        i = [], d.forEach(s)
                    },
                    u = function() {
                        return Promise.resolve().then(l)
                    };
                u(), n = {
                    push: function(d) {
                        i.push(d), u()
                    },
                    filter: function(d) {
                        return i = i.filter(d), n
                    }
                }
            }
        };
    return o
}

function Sk(e) {
    e === void 0 && (e = {});
    var t = wk(null);
    return t.options = Dt({
        async: !0,
        ssr: !1
    }, e), t
}
var Ng = function(e) {
    var t = e.sideCar,
        n = kg(e, ["sideCar"]);
    if (!t) throw new Error("Sidecar: please provide `sideCar` property to import the right car");
    var r = t.read();
    if (!r) throw new Error("Sidecar medium not found");
    return y.createElement(r, Dt({}, n))
};
Ng.isSideCarExport = !0;

function Ck(e, t) {
    return e.useMedium(t), Ng
}
var Pg = Sk(),
    Ol = function() {},
    Ia = y.forwardRef(function(e, t) {
        var n = y.useRef(null),
            r = y.useState({
                onScrollCapture: Ol,
                onWheelCapture: Ol,
                onTouchMoveCapture: Ol
            }),
            o = r[0],
            s = r[1],
            i = e.forwardProps,
            a = e.children,
            l = e.className,
            u = e.removeScrollBar,
            d = e.enabled,
            f = e.shards,
            v = e.sideCar,
            p = e.noRelative,
            S = e.noIsolation,
            m = e.inert,
            w = e.allowPinchZoom,
            g = e.as,
            h = g === void 0 ? "div" : g,
            x = e.gapMode,
            C = kg(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]),
            E = v,
            b = yk([n, t]),
            k = Dt(Dt({}, C), o);
        return y.createElement(y.Fragment, null, d && y.createElement(E, {
            sideCar: Pg,
            removeScrollBar: u,
            shards: f,
            noRelative: p,
            noIsolation: S,
            inert: m,
            setCallbacks: s,
            allowPinchZoom: !!w,
            lockRef: n,
            gapMode: x
        }), i ? y.cloneElement(y.Children.only(a), Dt(Dt({}, k), {
            ref: b
        })) : y.createElement(h, Dt({}, k, {
            className: l,
            ref: b
        }), a))
    });
Ia.defaultProps = {
    enabled: !0,
    removeScrollBar: !0,
    inert: !1
};
Ia.classNames = {
    fullWidth: wi,
    zeroRight: xi
};
var Ek = function() {
    if (typeof __webpack_nonce__ < "u") return __webpack_nonce__
};

function bk() {
    if (!document) return null;
    var e = document.createElement("style");
    e.type = "text/css";
    var t = Ek();
    return t && e.setAttribute("nonce", t), e
}

function kk(e, t) {
    e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t))
}

function Nk(e) {
    var t = document.head || document.getElementsByTagName("head")[0];
    t.appendChild(e)
}
var Pk = function() {
        var e = 0,
            t = null;
        return {
            add: function(n) {
                e == 0 && (t = bk()) && (kk(t, n), Nk(t)), e++
            },
            remove: function() {
                e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null)
            }
        }
    },
    Ak = function() {
        var e = Pk();
        return function(t, n) {
            y.useEffect(function() {
                return e.add(t),
                    function() {
                        e.remove()
                    }
            }, [t && n])
        }
    },
    Ag = function() {
        var e = Ak(),
            t = function(n) {
                var r = n.styles,
                    o = n.dynamic;
                return e(r, o), null
            };
        return t
    },
    Tk = {
        left: 0,
        top: 0,
        right: 0,
        gap: 0
    },
    Ml = function(e) {
        return parseInt(e || "", 10) || 0
    },
    Rk = function(e) {
        var t = window.getComputedStyle(document.body),
            n = t[e === "padding" ? "paddingLeft" : "marginLeft"],
            r = t[e === "padding" ? "paddingTop" : "marginTop"],
            o = t[e === "padding" ? "paddingRight" : "marginRight"];
        return [Ml(n), Ml(r), Ml(o)]
    },
    jk = function(e) {
        if (e === void 0 && (e = "margin"), typeof window > "u") return Tk;
        var t = Rk(e),
            n = document.documentElement.clientWidth,
            r = window.innerWidth;
        return {
            left: t[0],
            top: t[1],
            right: t[2],
            gap: Math.max(0, r - n + t[2] - t[0])
        }
    },
    Ok = Ag(),
    Kr = "data-scroll-locked",
    Mk = function(e, t, n, r) {
        var o = e.left,
            s = e.top,
            i = e.right,
            a = e.gap;
        return n === void 0 && (n = "margin"), `
  .`.concat(hk, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(a, "px ").concat(r, `;
  }
  body[`).concat(Kr, `] {
    overflow: hidden `).concat(r, `;
    overscroll-behavior: contain;
    `).concat([t && "position: relative ".concat(r, ";"), n === "margin" && `
    padding-left: `.concat(o, `px;
    padding-top: `).concat(s, `px;
    padding-right: `).concat(i, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(a, "px ").concat(r, `;
    `), n === "padding" && "padding-right: ".concat(a, "px ").concat(r, ";")].filter(Boolean).join(""), `
  }
  
  .`).concat(xi, ` {
    right: `).concat(a, "px ").concat(r, `;
  }
  
  .`).concat(wi, ` {
    margin-right: `).concat(a, "px ").concat(r, `;
  }
  
  .`).concat(xi, " .").concat(xi, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(wi, " .").concat(wi, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(Kr, `] {
    `).concat(mk, ": ").concat(a, `px;
  }
`)
    },
    xp = function() {
        var e = parseInt(document.body.getAttribute(Kr) || "0", 10);
        return isFinite(e) ? e : 0
    },
    Dk = function() {
        y.useEffect(function() {
            return document.body.setAttribute(Kr, (xp() + 1).toString()),
                function() {
                    var e = xp() - 1;
                    e <= 0 ? document.body.removeAttribute(Kr) : document.body.setAttribute(Kr, e.toString())
                }
        }, [])
    },
    Ik = function(e) {
        var t = e.noRelative,
            n = e.noImportant,
            r = e.gapMode,
            o = r === void 0 ? "margin" : r;
        Dk();
        var s = y.useMemo(function() {
            return jk(o)
        }, [o]);
        return y.createElement(Ok, {
            styles: Mk(s, !t, o, n ? "" : "!important")
        })
    },
    Hu = !1;
if (typeof window < "u") try {
    var ei = Object.defineProperty({}, "passive", {
        get: function() {
            return Hu = !0, !0
        }
    });
    window.addEventListener("test", ei, ei), window.removeEventListener("test", ei, ei)
} catch {
    Hu = !1
}
var Er = Hu ? {
        passive: !1
    } : !1,
    _k = function(e) {
        return e.tagName === "TEXTAREA"
    },
    Tg = function(e, t) {
        if (!(e instanceof Element)) return !1;
        var n = window.getComputedStyle(e);
        return n[t] !== "hidden" && !(n.overflowY === n.overflowX && !_k(e) && n[t] === "visible")
    },
    Lk = function(e) {
        return Tg(e, "overflowY")
    },
    Fk = function(e) {
        return Tg(e, "overflowX")
    },
    wp = function(e, t) {
        var n = t.ownerDocument,
            r = t;
        do {
            typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
            var o = Rg(e, r);
            if (o) {
                var s = jg(e, r),
                    i = s[1],
                    a = s[2];
                if (i > a) return !0
            }
            r = r.parentNode
        } while (r && r !== n.body);
        return !1
    },
    zk = function(e) {
        var t = e.scrollTop,
            n = e.scrollHeight,
            r = e.clientHeight;
        return [t, n, r]
    },
    $k = function(e) {
        var t = e.scrollLeft,
            n = e.scrollWidth,
            r = e.clientWidth;
        return [t, n, r]
    },
    Rg = function(e, t) {
        return e === "v" ? Lk(t) : Fk(t)
    },
    jg = function(e, t) {
        return e === "v" ? zk(t) : $k(t)
    },
    Bk = function(e, t) {
        return e === "h" && t === "rtl" ? -1 : 1
    },
    Uk = function(e, t, n, r, o) {
        var s = Bk(e, window.getComputedStyle(t).direction),
            i = s * r,
            a = n.target,
            l = t.contains(a),
            u = !1,
            d = i > 0,
            f = 0,
            v = 0;
        do {
            if (!a) break;
            var p = jg(e, a),
                S = p[0],
                m = p[1],
                w = p[2],
                g = m - w - s * S;
            (S || g) && Rg(e, a) && (f += g, v += S);
            var h = a.parentNode;
            a = h && h.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? h.host : h
        } while (!l && a !== document.body || l && (t.contains(a) || t === a));
        return (d && (Math.abs(f) < 1 || !o) || !d && (Math.abs(v) < 1 || !o)) && (u = !0), u
    },
    ti = function(e) {
        return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0]
    },
    Sp = function(e) {
        return [e.deltaX, e.deltaY]
    },
    Cp = function(e) {
        return e && "current" in e ? e.current : e
    },
    Vk = function(e, t) {
        return e[0] === t[0] && e[1] === t[1]
    },
    Hk = function(e) {
        return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`)
    },
    Wk = 0,
    br = [];

function Qk(e) {
    var t = y.useRef([]),
        n = y.useRef([0, 0]),
        r = y.useRef(),
        o = y.useState(Wk++)[0],
        s = y.useState(Ag)[0],
        i = y.useRef(e);
    y.useEffect(function() {
        i.current = e
    }, [e]), y.useEffect(function() {
        if (e.inert) {
            document.body.classList.add("block-interactivity-".concat(o));
            var m = pk([e.lockRef.current], (e.shards || []).map(Cp), !0).filter(Boolean);
            return m.forEach(function(w) {
                    return w.classList.add("allow-interactivity-".concat(o))
                }),
                function() {
                    document.body.classList.remove("block-interactivity-".concat(o)), m.forEach(function(w) {
                        return w.classList.remove("allow-interactivity-".concat(o))
                    })
                }
        }
    }, [e.inert, e.lockRef.current, e.shards]);
    var a = y.useCallback(function(m, w) {
            if ("touches" in m && m.touches.length === 2 || m.type === "wheel" && m.ctrlKey) return !i.current.allowPinchZoom;
            var g = ti(m),
                h = n.current,
                x = "deltaX" in m ? m.deltaX : h[0] - g[0],
                C = "deltaY" in m ? m.deltaY : h[1] - g[1],
                E, b = m.target,
                k = Math.abs(x) > Math.abs(C) ? "h" : "v";
            if ("touches" in m && k === "h" && b.type === "range") return !1;
            var T = wp(k, b);
            if (!T) return !0;
            if (T ? E = k : (E = k === "v" ? "h" : "v", T = wp(k, b)), !T) return !1;
            if (!r.current && "changedTouches" in m && (x || C) && (r.current = E), !E) return !0;
            var O = r.current || E;
            return Uk(O, w, m, O === "h" ? x : C, !0)
        }, []),
        l = y.useCallback(function(m) {
            var w = m;
            if (!(!br.length || br[br.length - 1] !== s)) {
                var g = "deltaY" in w ? Sp(w) : ti(w),
                    h = t.current.filter(function(E) {
                        return E.name === w.type && (E.target === w.target || w.target === E.shadowParent) && Vk(E.delta, g)
                    })[0];
                if (h && h.should) {
                    w.cancelable && w.preventDefault();
                    return
                }
                if (!h) {
                    var x = (i.current.shards || []).map(Cp).filter(Boolean).filter(function(E) {
                            return E.contains(w.target)
                        }),
                        C = x.length > 0 ? a(w, x[0]) : !i.current.noIsolation;
                    C && w.cancelable && w.preventDefault()
                }
            }
        }, []),
        u = y.useCallback(function(m, w, g, h) {
            var x = {
                name: m,
                delta: w,
                target: g,
                should: h,
                shadowParent: Kk(g)
            };
            t.current.push(x), setTimeout(function() {
                t.current = t.current.filter(function(C) {
                    return C !== x
                })
            }, 1)
        }, []),
        d = y.useCallback(function(m) {
            n.current = ti(m), r.current = void 0
        }, []),
        f = y.useCallback(function(m) {
            u(m.type, Sp(m), m.target, a(m, e.lockRef.current))
        }, []),
        v = y.useCallback(function(m) {
            u(m.type, ti(m), m.target, a(m, e.lockRef.current))
        }, []);
    y.useEffect(function() {
        return br.push(s), e.setCallbacks({
                onScrollCapture: f,
                onWheelCapture: f,
                onTouchMoveCapture: v
            }), document.addEventListener("wheel", l, Er), document.addEventListener("touchmove", l, Er), document.addEventListener("touchstart", d, Er),
            function() {
                br = br.filter(function(m) {
                    return m !== s
                }), document.removeEventListener("wheel", l, Er), document.removeEventListener("touchmove", l, Er), document.removeEventListener("touchstart", d, Er)
            }
    }, []);
    var p = e.removeScrollBar,
        S = e.inert;
    return y.createElement(y.Fragment, null, S ? y.createElement(s, {
        styles: Hk(o)
    }) : null, p ? y.createElement(Ik, {
        noRelative: e.noRelative,
        gapMode: e.gapMode
    }) : null)
}

function Kk(e) {
    for (var t = null; e !== null;) e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
    return t
}
const Gk = Ck(Pg, Qk);
var Og = y.forwardRef(function(e, t) {
    return y.createElement(Ia, Dt({}, e, {
        ref: t,
        sideCar: Gk
    }))
});
Og.classNames = Ia.classNames;
var Yk = function(e) {
        if (typeof document > "u") return null;
        var t = Array.isArray(e) ? e[0] : e;
        return t.ownerDocument.body
    },
    kr = new WeakMap,
    ni = new WeakMap,
    ri = {},
    Dl = 0,
    Mg = function(e) {
        return e && (e.host || Mg(e.parentNode))
    },
    qk = function(e, t) {
        return t.map(function(n) {
            if (e.contains(n)) return n;
            var r = Mg(n);
            return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null)
        }).filter(function(n) {
            return !!n
        })
    },
    Xk = function(e, t, n, r) {
        var o = qk(t, Array.isArray(e) ? e : [e]);
        ri[n] || (ri[n] = new WeakMap);
        var s = ri[n],
            i = [],
            a = new Set,
            l = new Set(o),
            u = function(f) {
                !f || a.has(f) || (a.add(f), u(f.parentNode))
            };
        o.forEach(u);
        var d = function(f) {
            !f || l.has(f) || Array.prototype.forEach.call(f.children, function(v) {
                if (a.has(v)) d(v);
                else try {
                    var p = v.getAttribute(r),
                        S = p !== null && p !== "false",
                        m = (kr.get(v) || 0) + 1,
                        w = (s.get(v) || 0) + 1;
                    kr.set(v, m), s.set(v, w), i.push(v), m === 1 && S && ni.set(v, !0), w === 1 && v.setAttribute(n, "true"), S || v.setAttribute(r, "true")
                } catch (g) {
                    console.error("aria-hidden: cannot operate on ", v, g)
                }
            })
        };
        return d(t), a.clear(), Dl++,
            function() {
                i.forEach(function(f) {
                    var v = kr.get(f) - 1,
                        p = s.get(f) - 1;
                    kr.set(f, v), s.set(f, p), v || (ni.has(f) || f.removeAttribute(r), ni.delete(f)), p || f.removeAttribute(n)
                }), Dl--, Dl || (kr = new WeakMap, kr = new WeakMap, ni = new WeakMap, ri = {})
            }
    },
    Zk = function(e, t, n) {
        n === void 0 && (n = "data-aria-hidden");
        var r = Array.from(Array.isArray(e) ? e : [e]),
            o = Yk(e);
        return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))), Xk(r, o, n, "aria-hidden")) : function() {
            return null
        }
    },
    _a = "Dialog",
    [Dg, o2] = hr(_a),
    [Jk, Nt] = Dg(_a),
    Ig = e => {
        const {
            __scopeDialog: t,
            children: n,
            open: r,
            defaultOpen: o,
            onOpenChange: s,
            modal: i = !0
        } = e, a = y.useRef(null), l = y.useRef(null), [u, d] = Es({
            prop: r,
            defaultProp: o ? ? !1,
            onChange: s,
            caller: _a
        });
        return c.jsx(Jk, {
            scope: t,
            triggerRef: a,
            contentRef: l,
            contentId: Wo(),
            titleId: Wo(),
            descriptionId: Wo(),
            open: u,
            onOpenChange: d,
            onOpenToggle: y.useCallback(() => d(f => !f), [d]),
            modal: i,
            children: n
        })
    };
Ig.displayName = _a;
var _g = "DialogTrigger",
    eN = y.forwardRef((e, t) => {
        const {
            __scopeDialog: n,
            ...r
        } = e, o = Nt(_g, n), s = Ne(t, o.triggerRef);
        return c.jsx(le.button, {
            type: "button",
            "aria-haspopup": "dialog",
            "aria-expanded": o.open,
            "aria-controls": o.contentId,
            "data-state": id(o.open),
            ...r,
            ref: s,
            onClick: re(e.onClick, o.onOpenToggle)
        })
    });
eN.displayName = _g;
var od = "DialogPortal",
    [tN, Lg] = Dg(od, {
        forceMount: void 0
    }),
    Fg = e => {
        const {
            __scopeDialog: t,
            forceMount: n,
            children: r,
            container: o
        } = e, s = Nt(od, t);
        return c.jsx(tN, {
            scope: t,
            forceMount: n,
            children: y.Children.map(r, i => c.jsx(mr, {
                present: n || s.open,
                children: c.jsx(Bc, {
                    asChild: !0,
                    container: o,
                    children: i
                })
            }))
        })
    };
Fg.displayName = od;
var ra = "DialogOverlay",
    zg = y.forwardRef((e, t) => {
        const n = Lg(ra, e.__scopeDialog),
            {
                forceMount: r = n.forceMount,
                ...o
            } = e,
            s = Nt(ra, e.__scopeDialog);
        return s.modal ? c.jsx(mr, {
            present: r || s.open,
            children: c.jsx(rN, { ...o,
                ref: t
            })
        }) : null
    });
zg.displayName = ra;
var nN = cs("DialogOverlay.RemoveScroll"),
    rN = y.forwardRef((e, t) => {
        const {
            __scopeDialog: n,
            ...r
        } = e, o = Nt(ra, n);
        return c.jsx(Og, {
            as: nN,
            allowPinchZoom: !0,
            shards: [o.contentRef],
            children: c.jsx(le.div, {
                "data-state": id(o.open),
                ...r,
                ref: t,
                style: {
                    pointerEvents: "auto",
                    ...r.style
                }
            })
        })
    }),
    dr = "DialogContent",
    $g = y.forwardRef((e, t) => {
        const n = Lg(dr, e.__scopeDialog),
            {
                forceMount: r = n.forceMount,
                ...o
            } = e,
            s = Nt(dr, e.__scopeDialog);
        return c.jsx(mr, {
            present: r || s.open,
            children: s.modal ? c.jsx(oN, { ...o,
                ref: t
            }) : c.jsx(sN, { ...o,
                ref: t
            })
        })
    });
$g.displayName = dr;
var oN = y.forwardRef((e, t) => {
        const n = Nt(dr, e.__scopeDialog),
            r = y.useRef(null),
            o = Ne(t, n.contentRef, r);
        return y.useEffect(() => {
            const s = r.current;
            if (s) return Zk(s)
        }, []), c.jsx(Bg, { ...e,
            ref: o,
            trapFocus: n.open,
            disableOutsidePointerEvents: !0,
            onCloseAutoFocus: re(e.onCloseAutoFocus, s => {
                var i;
                s.preventDefault(), (i = n.triggerRef.current) == null || i.focus()
            }),
            onPointerDownOutside: re(e.onPointerDownOutside, s => {
                const i = s.detail.originalEvent,
                    a = i.button === 0 && i.ctrlKey === !0;
                (i.button === 2 || a) && s.preventDefault()
            }),
            onFocusOutside: re(e.onFocusOutside, s => s.preventDefault())
        })
    }),
    sN = y.forwardRef((e, t) => {
        const n = Nt(dr, e.__scopeDialog),
            r = y.useRef(!1),
            o = y.useRef(!1);
        return c.jsx(Bg, { ...e,
            ref: t,
            trapFocus: !1,
            disableOutsidePointerEvents: !1,
            onCloseAutoFocus: s => {
                var i, a;
                (i = e.onCloseAutoFocus) == null || i.call(e, s), s.defaultPrevented || (r.current || (a = n.triggerRef.current) == null || a.focus(), s.preventDefault()), r.current = !1, o.current = !1
            },
            onInteractOutside: s => {
                var l, u;
                (l = e.onInteractOutside) == null || l.call(e, s), s.defaultPrevented || (r.current = !0, s.detail.originalEvent.type === "pointerdown" && (o.current = !0));
                const i = s.target;
                ((u = n.triggerRef.current) == null ? void 0 : u.contains(i)) && s.preventDefault(), s.detail.originalEvent.type === "focusin" && o.current && s.preventDefault()
            }
        })
    }),
    Bg = y.forwardRef((e, t) => {
        const {
            __scopeDialog: n,
            trapFocus: r,
            onOpenAutoFocus: o,
            onCloseAutoFocus: s,
            ...i
        } = e, a = Nt(dr, n), l = y.useRef(null), u = Ne(t, l);
        return fk(), c.jsxs(c.Fragment, {
            children: [c.jsx(Eg, {
                asChild: !0,
                loop: !0,
                trapped: r,
                onMountAutoFocus: o,
                onUnmountAutoFocus: s,
                children: c.jsx(Sa, {
                    role: "dialog",
                    id: a.contentId,
                    "aria-describedby": a.descriptionId,
                    "aria-labelledby": a.titleId,
                    "data-state": id(a.open),
                    ...i,
                    ref: u,
                    onDismiss: () => a.onOpenChange(!1)
                })
            }), c.jsxs(c.Fragment, {
                children: [c.jsx(iN, {
                    titleId: a.titleId
                }), c.jsx(lN, {
                    contentRef: l,
                    descriptionId: a.descriptionId
                })]
            })]
        })
    }),
    sd = "DialogTitle",
    Ug = y.forwardRef((e, t) => {
        const {
            __scopeDialog: n,
            ...r
        } = e, o = Nt(sd, n);
        return c.jsx(le.h2, {
            id: o.titleId,
            ...r,
            ref: t
        })
    });
Ug.displayName = sd;
var Vg = "DialogDescription",
    Hg = y.forwardRef((e, t) => {
        const {
            __scopeDialog: n,
            ...r
        } = e, o = Nt(Vg, n);
        return c.jsx(le.p, {
            id: o.descriptionId,
            ...r,
            ref: t
        })
    });
Hg.displayName = Vg;
var Wg = "DialogClose",
    Qg = y.forwardRef((e, t) => {
        const {
            __scopeDialog: n,
            ...r
        } = e, o = Nt(Wg, n);
        return c.jsx(le.button, {
            type: "button",
            ...r,
            ref: t,
            onClick: re(e.onClick, () => o.onOpenChange(!1))
        })
    });
Qg.displayName = Wg;

function id(e) {
    return e ? "open" : "closed"
}
var Kg = "DialogTitleWarning",
    [s2, Gg] = dw(Kg, {
        contentName: dr,
        titleName: sd,
        docsSlug: "dialog"
    }),
    iN = ({
        titleId: e
    }) => {
        const t = Gg(Kg),
            n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
        return y.useEffect(() => {
            e && (document.getElementById(e) || console.error(n))
        }, [n, e]), null
    },
    aN = "DialogDescriptionWarning",
    lN = ({
        contentRef: e,
        descriptionId: t
    }) => {
        const r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${Gg(aN).contentName}}.`;
        return y.useEffect(() => {
            var s;
            const o = (s = e.current) == null ? void 0 : s.getAttribute("aria-describedby");
            t && o && (document.getElementById(t) || console.warn(r))
        }, [r, e, t]), null
    },
    Yg = Ig,
    qg = Fg,
    La = zg,
    Fa = $g,
    za = Ug,
    $a = Hg,
    Xg = Qg;
const uN = Yg,
    cN = qg,
    Zg = y.forwardRef(({
        className: e,
        ...t
    }, n) => c.jsx(La, {
        className: ne("fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", e),
        ...t,
        ref: n
    }));
Zg.displayName = La.displayName;
const dN = ba("fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500", {
        variants: {
            side: {
                top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
                bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
                left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
                right: "inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"
            }
        },
        defaultVariants: {
            side: "right"
        }
    }),
    Jg = y.forwardRef(({
        side: e = "right",
        className: t,
        children: n,
        ...r
    }, o) => c.jsxs(cN, {
        children: [c.jsx(Zg, {}), c.jsxs(Fa, {
            ref: o,
            className: ne(dN({
                side: e
            }), t),
            ...r,
            children: [n, c.jsxs(Xg, {
                className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity data-[state=open]:bg-secondary hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none",
                children: [c.jsx(ks, {
                    className: "h-4 w-4"
                }), c.jsx("span", {
                    className: "sr-only",
                    children: "Close"
                })]
            })]
        })]
    }));
Jg.displayName = Fa.displayName;
const ey = ({
    className: e,
    ...t
}) => c.jsx("div", {
    className: ne("flex flex-col space-y-2 text-center sm:text-left", e),
    ...t
});
ey.displayName = "SheetHeader";
const ty = y.forwardRef(({
    className: e,
    ...t
}, n) => c.jsx(za, {
    ref: n,
    className: ne("text-lg font-semibold text-foreground", e),
    ...t
}));
ty.displayName = za.displayName;
const fN = y.forwardRef(({
    className: e,
    ...t
}, n) => c.jsx($a, {
    ref: n,
    className: ne("text-sm text-muted-foreground", e),
    ...t
}));
fN.displayName = $a.displayName;
const Qo = "/assets/atakarejo-logo-zok2CZLn.png",
    pN = [{
        question: "Quanto tempo tenho de garantia?",
        answer: "O produto possui 3 meses de garantia do fabricante contra defeitos de fabricação."
    }, {
        question: "Como funciona a devolução do produto?",
        answer: "Você tem até 30 dias para devolução gratuita. Basta entrar em contato conosco e providenciaremos a coleta."
    }, {
        question: "Qual o prazo de entrega?",
        answer: "O prazo de entrega é de 5 a 7 dias úteis após a confirmação do pagamento."
    }],
    hN = ({
        open: e,
        onOpenChange: t
    }) => {
        const [n, r] = y.useState(null);
        return c.jsx(uN, {
            open: e,
            onOpenChange: t,
            children: c.jsxs(Jg, {
                side: "bottom",
                className: "h-[80vh] p-0 flex flex-col",
                children: [c.jsx(ey, {
                    className: "border-b p-4 flex-shrink-0",
                    children: c.jsxs("div", {
                        className: "flex items-center gap-3",
                        children: [c.jsx("div", {
                            className: "w-10 h-10 rounded-full overflow-hidden flex-shrink-0",
                            children: c.jsx("img", {
                                src: Qo,
                                alt: "Atakarejo Logo",
                                className: "w-full h-full object-cover"
                            })
                        }), c.jsxs("div", {
                            className: "text-left",
                            children: [c.jsx(ty, {
                                className: "text-base",
                                children: "Atendimento Atakarejo"
                            }), c.jsx("p", {
                                className: "text-xs text-muted-foreground",
                                children: "Online agora"
                            })]
                        })]
                    })
                }), c.jsxs("div", {
                    className: "flex-1 overflow-y-auto p-4 space-y-4",
                    children: [c.jsxs("div", {
                        className: "flex gap-2",
                        children: [c.jsx("div", {
                            className: "w-8 h-8 rounded-full overflow-hidden flex-shrink-0",
                            children: c.jsx("img", {
                                src: Qo,
                                alt: "Atakarejo Logo",
                                className: "w-full h-full object-cover"
                            })
                        }), c.jsx("div", {
                            className: "bg-gray-100 rounded-2xl rounded-tl-none p-3 max-w-[85%]",
                            children: c.jsx("p", {
                                className: "text-sm",
                                children: "Olá! Me chamo atendimento Atakarejo, como podemos ajudar você hoje?"
                            })
                        })]
                    }), c.jsxs("div", {
                        className: "space-y-2",
                        children: [c.jsx("p", {
                            className: "text-xs text-muted-foreground font-medium px-2",
                            children: "Perguntas frequentes:"
                        }), pN.map((o, s) => c.jsxs("div", {
                            className: "space-y-2",
                            children: [c.jsx("button", {
                                onClick: () => r(n === s ? null : s),
                                className: "w-full text-left text-sm p-3 border rounded-lg hover:bg-gray-50 transition-colors",
                                children: o.question
                            }), n === s && c.jsxs("div", {
                                className: "flex gap-2 animate-in slide-in-from-left",
                                children: [c.jsx("div", {
                                    className: "w-8 h-8 rounded-full overflow-hidden flex-shrink-0",
                                    children: c.jsx("img", {
                                        src: Qo,
                                        alt: "Atakarejo Logo",
                                        className: "w-full h-full object-cover"
                                    })
                                }), c.jsx("div", {
                                    className: "bg-gray-100 rounded-2xl rounded-tl-none p-3 max-w-[85%]",
                                    children: c.jsx("p", {
                                        className: "text-sm",
                                        children: o.answer
                                    })
                                })]
                            })]
                        }, s))]
                    })]
                })]
            })
        })
    },
    mN = Yg,
    vN = qg,
    ny = y.forwardRef(({
        className: e,
        ...t
    }, n) => c.jsx(La, {
        ref: n,
        className: ne("fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", e),
        ...t
    }));
ny.displayName = La.displayName;
const ry = y.forwardRef(({
    className: e,
    children: t,
    ...n
}, r) => c.jsxs(vN, {
    children: [c.jsx(ny, {}), c.jsxs(Fa, {
        ref: r,
        className: ne("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg", e),
        ...n,
        children: [t, c.jsxs(Xg, {
            className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity data-[state=open]:bg-accent data-[state=open]:text-muted-foreground hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none",
            children: [c.jsx(ks, {
                className: "h-4 w-4"
            }), c.jsx("span", {
                className: "sr-only",
                children: "Close"
            })]
        })]
    })]
}));
ry.displayName = Fa.displayName;
const oy = ({
    className: e,
    ...t
}) => c.jsx("div", {
    className: ne("flex flex-col space-y-1.5 text-center sm:text-left", e),
    ...t
});
oy.displayName = "DialogHeader";
const sy = y.forwardRef(({
    className: e,
    ...t
}, n) => c.jsx(za, {
    ref: n,
    className: ne("text-lg font-semibold leading-none tracking-tight", e),
    ...t
}));
sy.displayName = za.displayName;
const gN = y.forwardRef(({
    className: e,
    ...t
}, n) => c.jsx($a, {
    ref: n,
    className: ne("text-sm text-muted-foreground", e),
    ...t
}));
gN.displayName = $a.displayName;
const yN = ({
        open: e,
        onOpenChange: t
    }) => c.jsx(mN, {
        open: e,
        onOpenChange: t,
        children: c.jsxs(ry, {
            className: "sm:max-w-md p-0",
            children: [c.jsx(oy, {
                className: "p-4 pb-3",
                children: c.jsxs("div", {
                    className: "flex items-center justify-between",
                    children: [c.jsx(sy, {
                        className: "text-lg font-semibold",
                        children: "Detalhes da Loja"
                    }), c.jsx("button", {
                        onClick: () => t(!1),
                        className: "rounded-full p-1 hover:bg-gray-100",
                        children: c.jsx(ks, {
                            className: "h-5 w-5"
                        })
                    })]
                })
            }), c.jsxs("div", {
                className: "px-4 pb-4 space-y-4",
                children: [c.jsxs("div", {
                    className: "flex items-center gap-3 pb-4 border-b",
                    children: [c.jsx("div", {
                        className: "w-14 h-14 rounded-full overflow-hidden flex-shrink-0",
                        children: c.jsx("img", {
                            src: Qo,
                            alt: "Atakarejo Logo",
                            className: "w-full h-full object-cover"
                        })
                    }), c.jsxs("div", {
                        children: [c.jsx("h3", {
                            className: "font-semibold text-base",
                            children: "Atakarejo Oficial"
                        }), c.jsxs("div", {
                            className: "flex items-center gap-1 text-sm",
                            children: [c.jsx(Gi, {
                                className: "w-4 h-4 fill-yellow-400 text-yellow-400"
                            }), c.jsx("span", {
                                className: "font-medium",
                                children: "4.9"
                            }), c.jsx("span", {
                                className: "text-muted-foreground",
                                children: "(8,473 avaliações)"
                            })]
                        })]
                    })]
                }), c.jsxs("div", {
                    className: "space-y-3",
                    children: [c.jsxs("div", {
                        className: "flex items-start gap-3",
                        children: [c.jsx(d1, {
                            className: "w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5"
                        }), c.jsxs("div", {
                            children: [c.jsx("p", {
                                className: "font-medium text-sm",
                                children: "Localização"
                            }), c.jsx("p", {
                                className: "text-sm text-muted-foreground",
                                children: "São Paulo, Brasil"
                            })]
                        })]
                    }), c.jsxs("div", {
                        className: "flex items-start gap-3",
                        children: [c.jsx(p1, {
                            className: "w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5"
                        }), c.jsxs("div", {
                            children: [c.jsx("p", {
                                className: "font-medium text-sm",
                                children: "Produtos"
                            }), c.jsx("p", {
                                className: "text-sm text-muted-foreground",
                                children: "150+ produtos disponíveis"
                            })]
                        })]
                    }), c.jsxs("div", {
                        className: "flex items-start gap-3",
                        children: [c.jsx(g1, {
                            className: "w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5"
                        }), c.jsxs("div", {
                            children: [c.jsx("p", {
                                className: "font-medium text-sm",
                                children: "Qualidade"
                            }), c.jsx("p", {
                                className: "text-sm text-muted-foreground",
                                children: "98% de avaliações positivas"
                            })]
                        })]
                    })]
                }), c.jsxs("div", {
                    className: "pt-3 border-t",
                    children: [c.jsx("h4", {
                        className: "font-semibold text-sm mb-2",
                        children: "Sobre a loja"
                    }), c.jsx("p", {
                        className: "text-sm text-muted-foreground leading-relaxed",
                        children: "Loja oficial Atakarejo com produtos originais e garantia do fabricante. Oferecemos frete grátis e devolução em até 30 dias. Atendimento especializado para melhor experiência de compra."
                    })]
                })]
            })]
        })
    }),
    Do = y.forwardRef(({
        className: e,
        ...t
    }, n) => c.jsx("div", {
        ref: n,
        className: ne("rounded-lg border bg-card text-card-foreground shadow-sm", e),
        ...t
    }));
Do.displayName = "Card";
const xN = y.forwardRef(({
    className: e,
    ...t
}, n) => c.jsx("div", {
    ref: n,
    className: ne("flex flex-col space-y-1.5 p-6", e),
    ...t
}));
xN.displayName = "CardHeader";
const wN = y.forwardRef(({
    className: e,
    ...t
}, n) => c.jsx("h3", {
    ref: n,
    className: ne("text-2xl font-semibold leading-none tracking-tight", e),
    ...t
}));
wN.displayName = "CardTitle";
const SN = y.forwardRef(({
    className: e,
    ...t
}, n) => c.jsx("p", {
    ref: n,
    className: ne("text-sm text-muted-foreground", e),
    ...t
}));
SN.displayName = "CardDescription";
const CN = y.forwardRef(({
    className: e,
    ...t
}, n) => c.jsx("div", {
    ref: n,
    className: ne("p-6 pt-0", e),
    ...t
}));
CN.displayName = "CardContent";
const EN = y.forwardRef(({
    className: e,
    ...t
}, n) => c.jsx("div", {
    ref: n,
    className: ne("flex items-center p-6 pt-0", e),
    ...t
}));
EN.displayName = "CardFooter";
var Ba = "Collapsible",
    [bN, iy] = hr(Ba),
    [kN, ad] = bN(Ba),
    ay = y.forwardRef((e, t) => {
        const {
            __scopeCollapsible: n,
            open: r,
            defaultOpen: o,
            disabled: s,
            onOpenChange: i,
            ...a
        } = e, [l, u] = Es({
            prop: r,
            defaultProp: o ? ? !1,
            onChange: i,
            caller: Ba
        });
        return c.jsx(kN, {
            scope: n,
            disabled: s,
            contentId: Wo(),
            open: l,
            onOpenToggle: y.useCallback(() => u(d => !d), [u]),
            children: c.jsx(le.div, {
                "data-state": ud(l),
                "data-disabled": s ? "" : void 0,
                ...a,
                ref: t
            })
        })
    });
ay.displayName = Ba;
var ly = "CollapsibleTrigger",
    uy = y.forwardRef((e, t) => {
        const {
            __scopeCollapsible: n,
            ...r
        } = e, o = ad(ly, n);
        return c.jsx(le.button, {
            type: "button",
            "aria-controls": o.contentId,
            "aria-expanded": o.open || !1,
            "data-state": ud(o.open),
            "data-disabled": o.disabled ? "" : void 0,
            disabled: o.disabled,
            ...r,
            ref: t,
            onClick: re(e.onClick, o.onOpenToggle)
        })
    });
uy.displayName = ly;
var ld = "CollapsibleContent",
    cy = y.forwardRef((e, t) => {
        const {
            forceMount: n,
            ...r
        } = e, o = ad(ld, e.__scopeCollapsible);
        return c.jsx(mr, {
            present: n || o.open,
            children: ({
                present: s
            }) => c.jsx(NN, { ...r,
                ref: t,
                present: s
            })
        })
    });
cy.displayName = ld;
var NN = y.forwardRef((e, t) => {
    const {
        __scopeCollapsible: n,
        present: r,
        children: o,
        ...s
    } = e, i = ad(ld, n), [a, l] = y.useState(r), u = y.useRef(null), d = Ne(t, u), f = y.useRef(0), v = f.current, p = y.useRef(0), S = p.current, m = i.open || a, w = y.useRef(m), g = y.useRef(void 0);
    return y.useEffect(() => {
        const h = requestAnimationFrame(() => w.current = !1);
        return () => cancelAnimationFrame(h)
    }, []), $t(() => {
        const h = u.current;
        if (h) {
            g.current = g.current || {
                transitionDuration: h.style.transitionDuration,
                animationName: h.style.animationName
            }, h.style.transitionDuration = "0s", h.style.animationName = "none";
            const x = h.getBoundingClientRect();
            f.current = x.height, p.current = x.width, w.current || (h.style.transitionDuration = g.current.transitionDuration, h.style.animationName = g.current.animationName), l(r)
        }
    }, [i.open, r]), c.jsx(le.div, {
        "data-state": ud(i.open),
        "data-disabled": i.disabled ? "" : void 0,
        id: i.contentId,
        hidden: !m,
        ...s,
        ref: d,
        style: {
            "--radix-collapsible-content-height": v ? `${v}px` : void 0,
            "--radix-collapsible-content-width": S ? `${S}px` : void 0,
            ...e.style
        },
        children: m && o
    })
});

function ud(e) {
    return e ? "open" : "closed"
}
var PN = ay,
    AN = uy,
    TN = cy,
    RN = y.createContext(void 0);

function jN(e) {
    const t = y.useContext(RN);
    return e || t || "ltr"
}
var Pt = "Accordion",
    ON = ["Home", "End", "ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"],
    [cd, MN, DN] = Gm(Pt),
    [Ua, i2] = hr(Pt, [DN, iy]),
    dd = iy(),
    dy = R.forwardRef((e, t) => {
        const {
            type: n,
            ...r
        } = e, o = r, s = r;
        return c.jsx(cd.Provider, {
            scope: e.__scopeAccordion,
            children: n === "multiple" ? c.jsx(FN, { ...s,
                ref: t
            }) : c.jsx(LN, { ...o,
                ref: t
            })
        })
    });
dy.displayName = Pt;
var [fy, IN] = Ua(Pt), [py, _N] = Ua(Pt, {
    collapsible: !1
}), LN = R.forwardRef((e, t) => {
    const {
        value: n,
        defaultValue: r,
        onValueChange: o = () => {},
        collapsible: s = !1,
        ...i
    } = e, [a, l] = Es({
        prop: n,
        defaultProp: r ? ? "",
        onChange: o,
        caller: Pt
    });
    return c.jsx(fy, {
        scope: e.__scopeAccordion,
        value: R.useMemo(() => a ? [a] : [], [a]),
        onItemOpen: l,
        onItemClose: R.useCallback(() => s && l(""), [s, l]),
        children: c.jsx(py, {
            scope: e.__scopeAccordion,
            collapsible: s,
            children: c.jsx(hy, { ...i,
                ref: t
            })
        })
    })
}), FN = R.forwardRef((e, t) => {
    const {
        value: n,
        defaultValue: r,
        onValueChange: o = () => {},
        ...s
    } = e, [i, a] = Es({
        prop: n,
        defaultProp: r ? ? [],
        onChange: o,
        caller: Pt
    }), l = R.useCallback(d => a((f = []) => [...f, d]), [a]), u = R.useCallback(d => a((f = []) => f.filter(v => v !== d)), [a]);
    return c.jsx(fy, {
        scope: e.__scopeAccordion,
        value: i,
        onItemOpen: l,
        onItemClose: u,
        children: c.jsx(py, {
            scope: e.__scopeAccordion,
            collapsible: !0,
            children: c.jsx(hy, { ...s,
                ref: t
            })
        })
    })
}), [zN, Va] = Ua(Pt), hy = R.forwardRef((e, t) => {
    const {
        __scopeAccordion: n,
        disabled: r,
        dir: o,
        orientation: s = "vertical",
        ...i
    } = e, a = R.useRef(null), l = Ne(a, t), u = MN(n), f = jN(o) === "ltr", v = re(e.onKeyDown, p => {
        var T;
        if (!ON.includes(p.key)) return;
        const S = p.target,
            m = u().filter(O => {
                var M;
                return !((M = O.ref.current) != null && M.disabled)
            }),
            w = m.findIndex(O => O.ref.current === S),
            g = m.length;
        if (w === -1) return;
        p.preventDefault();
        let h = w;
        const x = 0,
            C = g - 1,
            E = () => {
                h = w + 1, h > C && (h = x)
            },
            b = () => {
                h = w - 1, h < x && (h = C)
            };
        switch (p.key) {
            case "Home":
                h = x;
                break;
            case "End":
                h = C;
                break;
            case "ArrowRight":
                s === "horizontal" && (f ? E() : b());
                break;
            case "ArrowDown":
                s === "vertical" && E();
                break;
            case "ArrowLeft":
                s === "horizontal" && (f ? b() : E());
                break;
            case "ArrowUp":
                s === "vertical" && b();
                break
        }
        const k = h % g;
        (T = m[k].ref.current) == null || T.focus()
    });
    return c.jsx(zN, {
        scope: n,
        disabled: r,
        direction: o,
        orientation: s,
        children: c.jsx(cd.Slot, {
            scope: n,
            children: c.jsx(le.div, { ...i,
                "data-orientation": s,
                ref: l,
                onKeyDown: r ? void 0 : v
            })
        })
    })
}), oa = "AccordionItem", [$N, fd] = Ua(oa), my = R.forwardRef((e, t) => {
    const {
        __scopeAccordion: n,
        value: r,
        ...o
    } = e, s = Va(oa, n), i = IN(oa, n), a = dd(n), l = Wo(), u = r && i.value.includes(r) || !1, d = s.disabled || e.disabled;
    return c.jsx($N, {
        scope: n,
        open: u,
        disabled: d,
        triggerId: l,
        children: c.jsx(PN, {
            "data-orientation": s.orientation,
            "data-state": Sy(u),
            ...a,
            ...o,
            ref: t,
            disabled: d,
            open: u,
            onOpenChange: f => {
                f ? i.onItemOpen(r) : i.onItemClose(r)
            }
        })
    })
});
my.displayName = oa;
var vy = "AccordionHeader",
    gy = R.forwardRef((e, t) => {
        const {
            __scopeAccordion: n,
            ...r
        } = e, o = Va(Pt, n), s = fd(vy, n);
        return c.jsx(le.h3, {
            "data-orientation": o.orientation,
            "data-state": Sy(s.open),
            "data-disabled": s.disabled ? "" : void 0,
            ...r,
            ref: t
        })
    });
gy.displayName = vy;
var Wu = "AccordionTrigger",
    yy = R.forwardRef((e, t) => {
        const {
            __scopeAccordion: n,
            ...r
        } = e, o = Va(Pt, n), s = fd(Wu, n), i = _N(Wu, n), a = dd(n);
        return c.jsx(cd.ItemSlot, {
            scope: n,
            children: c.jsx(AN, {
                "aria-disabled": s.open && !i.collapsible || void 0,
                "data-orientation": o.orientation,
                id: s.triggerId,
                ...a,
                ...r,
                ref: t
            })
        })
    });
yy.displayName = Wu;
var xy = "AccordionContent",
    wy = R.forwardRef((e, t) => {
        const {
            __scopeAccordion: n,
            ...r
        } = e, o = Va(Pt, n), s = fd(xy, n), i = dd(n);
        return c.jsx(TN, {
            role: "region",
            "aria-labelledby": s.triggerId,
            "data-orientation": o.orientation,
            ...i,
            ...r,
            ref: t,
            style: {
                "--radix-accordion-content-height": "var(--radix-collapsible-content-height)",
                "--radix-accordion-content-width": "var(--radix-collapsible-content-width)",
                ...e.style
            }
        })
    });
wy.displayName = xy;

function Sy(e) {
    return e ? "open" : "closed"
}
var BN = dy,
    UN = my,
    VN = gy,
    Cy = yy,
    Ey = wy;
const HN = BN,
    Si = y.forwardRef(({
        className: e,
        ...t
    }, n) => c.jsx(UN, {
        ref: n,
        className: ne("border-b", e),
        ...t
    }));
Si.displayName = "AccordionItem";
const Ci = y.forwardRef(({
    className: e,
    children: t,
    ...n
}, r) => c.jsx(VN, {
    className: "flex",
    children: c.jsxs(Cy, {
        ref: r,
        className: ne("flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180", e),
        ...n,
        children: [t, c.jsx(i1, {
            className: "h-4 w-4 shrink-0 transition-transform duration-200"
        })]
    })
}));
Ci.displayName = Cy.displayName;
const Ei = y.forwardRef(({
    className: e,
    children: t,
    ...n
}, r) => c.jsx(Ey, {
    ref: r,
    className: "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
    ...n,
    children: c.jsx("div", {
        className: ne("pb-4 pt-0", e),
        children: t
    })
}));
Ei.displayName = Ey.displayName;
const WN = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAhwAAABjCAMAAADnyylzAAABU1BMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD9LVUAAAAAAAAo9+/+LVUAAAAm8+//MFgl9O4g9u//MFD+LFUm9O7+LFUl9O79LFX9LFb9LFf+LFUl9O7/LFQk9O79LFQl9e4n9O//LVb/KFgl9O7+K1Ym8+0m9e8m9O7+LFX/LVMl9O0n9e4ZUVIg0cwUg4DjJ0wAAAAm9+8m8u8QgHgi5N6IFy0l9O4arqqkHTcINTNbEB8lBw0SAwY7CxTTJUcdMDMEHBtADBYj8u+fSWb/LVYAAAAl9O7+LFUg1dB/FisFHx7eJ0oOW1ogBQsQAwW+IUBACxWfHDXfJ0vuKVBfECAj5d8SencQa2gJPTyvHjuPGTACDw8ct7IXmJVvEyYaqKQTencHLi0wCBAexsEViYYUiYYLTEoRa2nOJEWPGS9PDhpukp93AAAAS3RSTlMAoN9AIL9ggBDvcM+QMGBQryDff0Ag7xAQ79+/YJ+AcM+/QJCAnzAwIM+wgH+vkFCgcOXa399vX1Ag7+/f39/f39/fz7+vkIBQUFBfkIfrAAANTElEQVR42u2d51/cNhiAZXmvm1CgQAI0NE3SvffeRoQLIyU0gybd8///VHN3zmtrnsywm+r5kl8On9F4LL1aBs3CVpkbyGAwchh05dhEBkNFjqNbBa+urq5uIIPhsRzbWcHeISEdZDBw5Mj2CbmEDAaeHI8IWUUGQ0UO6FfWkMFQkgO4ScgiMhh4cuyNyGVkMIAcJQ7IMjIYQI4yfxMz02GoygHsm6bDIJJjb/8lZDCAHBXem0cGA8hR4bN3kMEAclR4dQUZDCBHhZ9f23wWGf7ngBxVdra33n/hxsrbC8hw9gTOmAC1G5CD5vvtrZw+Mpw9VjbGR+0G5GDYubtt5KhHkHqeH3l28MTKkXPvt28W6Xzbs5KiCY5dLiSvjINUOPbMBEgf2yvRRWeCneCsAFvdJ1aOLPuOkAEq42Wz4k2ud7McN0VTqEvUDfDMKExT3x6j0xMMw6wKHjpPsBykphxOpfSH5y2Hi1ogRxdnLNgzcvAqawj/j85ZDq95OQJRahMjB1tZTgaEwfnK4TQuh4MzEXHwn5fjzq6WHOrKSrIS0bnKEaPG5AA3xLj/eTlukpt7WnKoSsPNSljnKkfUuBxxqZV0Ez/ykzgDkv+CHP1n53KeFchBRndOLwdUFr44OZym5RjCfaKgaEx8KAG75XLMPb/+1NYEkRxkbQSdy2nkcKYPE5CcpxwxalgOCK/8ysePf4PbZjkWni/EkMrR6QzI/Tt7p5EDKiuhTDg/OZJm5YA7hTaq4mdT7NbK0d8EMeRyIHRliZD9B/8c7NWUA0IAOwPwuY5W0mblgIaji2h6hb9tleMVaDW2H/75x887g8HaskgONL86IGNGI1JHDqishBLhvOTAVCv59jMvvPb6qx/hnE8/+fjDz69f2jhfOTwIrGiCcNqmtFOO/nphxq/f72RjSI5QjpzOMnkMKtN1y+CsDHzeQ4iyw0e15PDdMlmZ0AX8shmvrG8djfMJ/HJ7RK53zlGOnjAuhjJw2ijHXNFs/HAvK1DIkTPfWV1j5NAvXA+PtbGRUo6AWbhjyMpYotAK8lnmzogMOhrpT7XW9WLhHD50rt0WyvFW0Z9AkcnlABY3Xrp86dIp5IBVWYUc7BwSdurIsfLU1tHdjM9NAnoo0w8j05kqUhYXB0Vu2ydH4cbvx5mGHOcS0LFySN3Ql2Phhbx53MlE7I4IeVGSfm03AOll4fSHrZPj2UmfcpQ3G22Wg+OGvhz9p/NnIJOwd5+Qwbwq/fpugBz/qZ1geXmdsL2TtVoOqRtqOeA5+D6T8zfYIUm/pT03H0KaNOWATU0OmoHg5Mo00Bhkp8LrN8GNBuToeiVsjhxiN/Tl6IMbEm6DHcL0W/q7AWJYetaWwx66U7dc35GKEfWKgop7HvfStBI9B1Fx55Bz/Qq40YAc6oU3vhuxg7TlUPcp8GqrtUVp+vXdgOFqoi2H7VZzxc87XAj0bMQwLUmb9wWLun7SqdzLWi1HSrsRoBpyrENOpOweQlRKpb++GzAXPNSTw3EzmqFKDcB1xHIEha+sedBwVNvavUe3/xqN9h+0SI40ZN3Ql+P5PCc72SwcEEJeEqSfdSO00Uw8zkQSaMiR4oylFwhbJoVJIIdgdwn2qIZju6TGg0MyoT1y8NzQl6MPD0GZEPM7lsEiP/2sGymaDa9UAc6scjiQd2moHUBBSk0CORwsswkajh14ZnI12iYH7YYboDpybLKRVZiM4zKna9EdCyHkEj/9gYYbkrxC9CeXQ1SDkcYeszjgyOHl/yrseGEr5yFMIJMpS8url168PmiDHOAGXKQhh6ThSAJqUwVwPy+CRV76g1jHDWkNxlY3UBUbfAPHLhYuMgdx5b6+7/cqn3DkwOU9afn1IWPeQrXh2CUTljembWoL5GDdqCfHJh1xhF1Uxmeijsuc9NNu4PR0e0jdxJ6h2MLeRKPAw/BNfryB/UI4p3RxQskBuHZxvW1R5s2NF9uygtGk1TiJxdoiR8K4oSsHBFc/Svd3ePTmx2VO+mk3nNPvMA6trqLYrIDncMpLuh/whbf5cuCKmimu1NONrZxb1U5lMI9aJAeFhWrKMTfJKBCJwn3I6HNs+FnTDcCnZBcFqBbI4/Ed9qFTwaJxkx3CPqoCzIaqbO/kFyHHMTQcEzfaK4eP6srxDNWr9BBDgHn9iiV1Qx/H4h55G9LFJmzhIihL6pOQTU8aMiWHZWXglo4QXSv3Kr+QEzqovXL4SF8OmAD7VbVpMMqAPTJ9ybulcEOfwHPVd7PEeS4e74Cubg+xdIvaZuXAgeQBiRA6WY/9Cd55Py6QFsth15fjqWrIEXNrLawGHWtyORJUm8BOWEEiXrFhscNdqv4t6ay9zcjBdduGeHc6cw4VT662WQ4c1JVjAZ4CScX2qMGsUA6onbMUZMgpNo/zRUomCypbYrxFy2HJJ2OCsRw/l1YjyQC1WY4s0ZcDZjnuSusVonsoDYUc0MfXF6QSgURssQXi9V2/WtuWfMEvpOVI5UtA3lgOqHhur7JQkeNBw6MVW08O4WDFlkxwQ06fU4xWXHQGdF2ebZbkN1iV3KWQJWltO9QkmGIJKBmvrFSmRy+z+8QqctxuWI4waJMc8KifCpitchkBJA2cVQ05AkVtd6mGRlFhMbpWrvhdbsWvVOTYb0YOwG1RtwKP+ilxYpCWWltRyxGpTnvG1egFK7yOiqp6mf77bWzFr1fkOGxIDiCqJwcVkEbqgFQhB1TJ6YHZp0RfDl/61LC3wpSGosEvegW6lZw7nG6lX5lg3yM53zYqR+jUHco+VDZAOAP+Ug5loTZPj1PkrrYclrYcihhl3BUfl5uO64ji6cqy7T8kZ+Oi5XCr/6slxzVqEoynWJfaCHedK4cVaoTI+ufh2iPHyQP1c/nUxtIiondP5fwBHXHO4gXL4aE4K+PXnT4/VizSxBnwi2j63EKRau5FHxDTPvtupceVo6uQI0To5WoQ/8uow3Fju7Jsu4QuVI7Qno7WALvmwts9+U3ezMbAdPFVjhwWneYsOdN+xdOWw4OiPdOAdFxmv2Uldt8otQsLz4zdAH0OSM7yhcoRplAc8LDqy7HwFOSUvzKSMhsFIf3VO1Jb97pamwQ15Tj9UDaAp0FnKOue9MX0huwv+kVxrjw9cePHSgRPLl+oHBHYDyQ6ckC/cnQsscMOmX2CwvRH2uNZkENwcVq7WwkUwziPkgcrZowwlPEKsyP7+/UbK3Mrr2wWB++3qY1i86iBcyt0x6IvxxzMdHA2SgRD5mATmRenXxoiy2s/ksccqbYcCMtT4VKDbgwNnvLA/7Vi/A92bAHFqWMIR9dQA3KwHYu2HHBqhd1k4wxD9uTKqij9bMcSaZxMiOXFpD+UhXVXaX+V0HLE8oU3Z/JEHWUUt7a3Co7uZtTu404DcrAdS09PDmg6aGJ4vwzdcEjSr9+xQE4jWRW6NeSwpbWN6e4MS5X2qgl5BkaqoMePRydm/PDnceXtBDkD1Igc7MOqJwdEHXKg/7wiT7+rPVFqy0yCFXp9OZArCcWGTNeHZRueHGrj0MK17YzD8c4Os1s/p9OQHOzDqi3HAuwxVjAiZE2RfifUHs9iiIRFVZg5OnKoD1rCjW2OHGEq3AiG4Xzx3UzNTQINRwNysFGgjhzwAoZZsvoAdtKK0x9pb1LrUnu+gSEkuI4cyBXZkXBKArMhObQbbLH3392Z0Q0y35gcbMeiIwesMN+aJatLV9Xpd7UnSl3+cWXbhdF1PTmgZHDlxjGvncXCc9Nvhrx89j+Y0Y0rqDE52Ic11ZQD7FC7oUw/27HonVpxvXTyWeTSmdWXA0XlGwfsNmaP7t0AqxvAiI3bZ/dfVza0MDnalBzsw6otB/oaehaxG4OrM6W/q72jNA2pM9yYWjTSlwM+ArDrxlhwY5gWqYzY4lCSlYUvZcH7PhkzWGxUDvZh1ZIDXuDyk/yVYMvzM6a/pz2eTbH8wJa+HPCZGJ97yj5WXg98tZsJeHRI4Chck3KwUaCGHLBgBJO+DAcjsnRl5vQHVVfdeuchQfVacqjtiJDWKxhCD7Fcub0rKK8Jy4uocTmEHYtaDqCfL0U/5OlxsE/I6rxG+rv6O0qDRFAlEaolB2DzKxunwpe3uMrrgc7S7QO6lb15SKa8iFAL5KA6lp6eHKDH01sP71FZzdVYurKol379jgXx68QKUF05AB+zzvmB5J1gEVZdD8wvk8P7jw72ppHGnQf7pGCwgVohB92xRHpyAHM31l97eOve8VSMR/ffuH55Qy/9bMcS1zsuG/pgVW054K0LgBsF8hfGOaAHvL9BRGcw/VMIo0MCwBNVg8ApI//xdFBV/YjCqYIA1ZdZ+v3+O/llz+XUTH/g6PxCwI564wECjq3IRmeI4/VcPL0xpFYkR47tj1MS4hkS0lkjAKhheGIAOWowf3mZAIMXN5DhSQLkqMnV/E8h5HSumjbjieOxHAaDkcNg5DAYOQyAkcMgxMhhEGLkMAgxchiEGDkMQowcBiFGDoMQI4dBiJHDIMTIYRBi5DBcHIk1JkUGg8Fw5vwLZbiOP6e5804AAAAASUVORK5CYII=",
    QN = "/assets/app-stores-u2EMoqdk.png",
    KN = "/assets/variant-icon-2N2cBhhe.png",
    GN = () => {
        const [e, t] = y.useState("overview"), [n, r] = y.useState(!1), [o, s] = y.useState(!1), i = () => {
            window.open("https://pay.pagsafed.store/68f30d23a8b6fe5002ffb3f7", "_blank")
        }, a = () => {
            const l = document.getElementById("reviews-section");
            l && l.scrollIntoView({
                behavior: "smooth",
                block: "start"
            })
        };
        return c.jsxs("div", {
            className: "min-h-screen bg-background pb-32",
            children: [c.jsx("header", {
                className: "bg-card border-b sticky top-0 z-50",
                children: c.jsxs("div", {
                    className: "flex items-center justify-between px-4 py-3",
                    children: [c.jsx("button", {
                        className: "p-2",
                        children: c.jsx(ks, {
                            className: "h-6 w-6"
                        })
                    }), c.jsxs("div", {
                        className: "flex gap-2",
                        children: [c.jsx("button", {
                            className: "p-2",
                            children: c.jsx(m1, {
                                className: "h-6 w-6"
                            })
                        }), c.jsx("button", {
                            className: "p-2",
                            children: c.jsx(v1, {
                                className: "h-6 w-6"
                            })
                        })]
                    })]
                })
            }), c.jsxs("main", {
                className: "pb-4",
                children: [c.jsx("div", {
                    className: "relative",
                    children: c.jsx($b, {})
                }), c.jsxs("div", {
                    className: "px-4 space-y-4 mt-4",
                    children: [c.jsx("div", {
                        className: "bg-gradient-to-r from-orange-500 to-orange-600 text-white p-3 -mx-4",
                        children: c.jsxs("div", {
                            className: "flex items-start justify-between gap-2",
                            children: [c.jsxs("div", {
                                className: "flex-1 min-w-0",
                                children: [c.jsxs("div", {
                                    className: "flex items-center gap-2 flex-wrap",
                                    children: [c.jsx("span", {
                                        className: "text-sm line-through opacity-90",
                                        children: "R$ 2.199"
                                    }), c.jsx("span", {
                                        className: "text-2xl sm:text-3xl font-bold",
                                        children: "R$ 39,90"
                                    })]
                                }), c.jsx("p", {
                                    className: "text-xs mt-0.5",
                                    children: "Economize até 71%"
                                })]
                            }), c.jsxs("div", {
                                className: "flex flex-col items-end gap-1 flex-shrink-0",
                                children: [c.jsx(Vu, {
                                    className: "bg-white text-orange-600 border-0 text-[10px] whitespace-nowrap px-2 py-0.5",
                                    children: "⚡ Oferta Relâmpago"
                                }), c.jsx(Bb, {})]
                            })]
                        })
                    }), c.jsx(Do, {
                        className: "p-2.5 bg-gray-50/50",
                        children: c.jsxs("div", {
                            className: "flex items-center gap-2",
                            children: [c.jsx(Vu, {
                                className: "bg-pink-100 text-pink-600 border-0 text-[10px] font-semibold px-2 py-1 whitespace-nowrap flex-shrink-0",
                                children: "Desconto de 90%"
                            }), c.jsx("span", {
                                className: "text-[10px] text-red-500 flex-1 min-w-0",
                                children: "Compre R$ 100,00, economize R$ 30,00"
                            }), c.jsx("span", {
                                className: "text-muted-foreground text-sm flex-shrink-0",
                                children: "›"
                            })]
                        })
                    }), c.jsxs("div", {
                        className: "space-y-2",
                        children: [c.jsx("h1", {
                            className: "text-sm leading-tight",
                            children: "Bicicleta Spinning Ergométrica Semi Profissional Bike Preto Cor Preta / Vermelha"
                        }), c.jsxs("div", {
                            className: "flex items-center gap-2 text-xs",
                            children: [c.jsx(Gi, {
                                className: "h-3.5 w-3.5 fill-warning text-warning flex-shrink-0"
                            }), c.jsx("span", {
                                className: "font-semibold",
                                children: "4.9 (591)"
                            }), c.jsx("span", {
                                className: "text-muted-foreground",
                                children: "8473 vendidos"
                            })]
                        })]
                    }), c.jsxs("div", {
                        className: "space-y-2 border-b pb-3",
                        children: [c.jsxs("div", {
                            className: "flex items-start justify-between gap-2",
                            children: [c.jsxs("div", {
                                className: "flex items-start gap-2 flex-1 min-w-0",
                                children: [c.jsx(y1, {
                                    className: "h-4 w-4 text-success flex-shrink-0 mt-0.5"
                                }), c.jsxs("div", {
                                    className: "flex-1 min-w-0",
                                    children: [c.jsx("p", {
                                        className: "font-semibold text-success text-xs",
                                        children: "Frete grátis"
                                    }), c.jsx("p", {
                                        className: "text-[10px] text-muted-foreground",
                                        children: "Receba até 24 de out - 27 de out"
                                    }), c.jsx("p", {
                                        className: "text-[10px] text-muted-foreground line-through",
                                        children: "Taxa de envio: R$ 9,60"
                                    })]
                                })]
                            }), c.jsx("span", {
                                className: "text-muted-foreground flex-shrink-0",
                                children: "›"
                            })]
                        }), c.jsxs("div", {
                            className: "flex items-center justify-between gap-2",
                            children: [c.jsxs("div", {
                                className: "flex items-center gap-2 flex-1 min-w-0",
                                children: [c.jsx(h1, {
                                    className: "h-4 w-4 text-muted-foreground flex-shrink-0"
                                }), c.jsx("p", {
                                    className: "text-xs",
                                    children: "Devoluções gratuitas em 30 dias"
                                })]
                            }), c.jsx("span", {
                                className: "text-muted-foreground flex-shrink-0",
                                children: "›"
                            })]
                        })]
                    }), c.jsxs("div", {
                        className: "border-b grid grid-cols-2 -mx-4",
                        children: [c.jsx("button", {
                            className: `pb-2.5 text-xs text-center ${e==="overview"?"border-b-2 border-foreground font-medium":"text-muted-foreground"}`,
                            onClick: () => t("overview"),
                            children: "Visão geral"
                        }), c.jsx("button", {
                            className: `pb-2.5 text-xs text-center ${e==="description"?"border-b-2 border-foreground font-medium":"text-muted-foreground"}`,
                            onClick: () => t("description"),
                            children: "Descrição"
                        })]
                    }), e === "overview" ? c.jsxs(c.Fragment, {
                        children: [c.jsxs("div", {
                            children: [c.jsxs("div", {
                                className: "flex items-center justify-between mb-2",
                                children: [c.jsx("span", {
                                    className: "text-sm font-medium",
                                    children: "Semi Profissional Bike Preto Cor Preta / Vermelha"
                                }), c.jsx("span", {
                                    className: "text-sm text-muted-foreground",
                                    children: "Variante ›"
                                })]
                            }), c.jsx("div", {
                                className: "w-16 h-16 border-2 border-primary rounded overflow-hidden",
                                children: c.jsx("img", {
                                    src: KN,
                                    alt: "Variant",
                                    className: "w-full h-full object-cover"
                                })
                            })]
                        }), c.jsx("div", {
                            id: "reviews-section",
                            children: c.jsx(ok, {})
                        }), c.jsxs(Do, {
                            className: "p-4",
                            children: [c.jsx("h3", {
                                className: "font-semibold text-base mb-3",
                                children: "Avaliações da loja (591)"
                            }), c.jsx("div", {
                                className: "flex gap-4 text-sm flex-wrap",
                                children: c.jsx("button", {
                                    className: "text-muted-foreground",
                                    children: "📷 Inclui imagens ou vídeos(102)"
                                })
                            }), c.jsxs("div", {
                                className: "flex items-center gap-4 mt-3 text-sm",
                                children: [c.jsxs("button", {
                                    className: "flex items-center gap-1",
                                    children: [c.jsx("span", {
                                        className: "text-warning",
                                        children: "★"
                                    }), c.jsx("span", {
                                        children: "5 ⭐"
                                    }), c.jsx("span", {
                                        className: "text-muted-foreground",
                                        children: "(513)"
                                    })]
                                }), c.jsxs("button", {
                                    className: "flex items-center gap-1",
                                    children: [c.jsx("span", {
                                        className: "text-warning",
                                        children: "★"
                                    }), c.jsx("span", {
                                        children: "4 ⭐"
                                    }), c.jsx("span", {
                                        className: "text-muted-foreground",
                                        children: "(78)"
                                    })]
                                })]
                            })]
                        }), c.jsx(Do, {
                            className: "p-4",
                            children: c.jsxs("div", {
                                className: "flex items-center gap-3",
                                children: [c.jsx("div", {
                                    className: "w-12 h-12 rounded-full overflow-hidden flex-shrink-0",
                                    children: c.jsx("img", {
                                        src: Qo,
                                        alt: "Atakarejo Logo",
                                        className: "w-full h-full object-cover"
                                    })
                                }), c.jsxs("div", {
                                    className: "flex-1",
                                    children: [c.jsxs("div", {
                                        className: "flex items-center gap-2",
                                        children: [c.jsx("h3", {
                                            className: "font-semibold",
                                            children: "Atakarejo Oficial"
                                        }), c.jsx(u1, {
                                            className: "w-4 h-4 text-blue-500 fill-blue-500"
                                        })]
                                    }), c.jsx("p", {
                                        className: "text-xs text-muted-foreground",
                                        children: "Loja verificada por Tiktok Shop"
                                    })]
                                })]
                            })
                        })]
                    }) : c.jsxs(Do, {
                        className: "p-4",
                        children: [c.jsx("h3", {
                            className: "font-semibold text-lg mb-4",
                            children: "Descrição do Produto"
                        }), c.jsxs("div", {
                            className: "space-y-3 text-sm text-foreground leading-relaxed",
                            children: [c.jsx("p", {
                                children: "Bicicleta Ergométrica Para Spinning - Sport Pro ATENÇÃO PARA PESSOAS DE 1,45 A 1,75 CM DE ALTURA Sport Pro é o mais novo lançamento com um designer moderno e estrutura compacta, você terá um excelente equipamento para praticar seus exercícios em casa. Com sistema de transmissão por correia, sua roda de Inércia pesa 6 kg, e possui um botão de ajuste de intensidade, que aumenta a resistência dos pedais ao ser acionado girando para a direita. Seu assento é confortável, e possui ajuste horizontal para aproximar ou distanciar o atleta do guidão, e também ajuste vertical que irá aproximá-lo ou distanciá-lo dos pedais. O guidão da Sport Pro possui ajuste vertical para melhor adequação da altura do atleta, e suporte para tablet e celular. O Monitor possui funções de Tempo percorrido, Distância, Calorias, Velocidade. Suporta até 110KG."
                            }), c.jsxs("div", {
                                className: "space-y-2",
                                children: [c.jsx("p", {
                                    className: "font-semibold",
                                    children: "CARACTERÍSTICAS"
                                }), c.jsxs("ul", {
                                    className: "list-disc list-inside space-y-1 text-muted-foreground",
                                    children: [c.jsx("li", {
                                        children: "Roda de inércia 6KG"
                                    }), c.jsx("li", {
                                        children: "Sistema de intensidade mecânica"
                                    }), c.jsx("li", {
                                        children: "Painel multifunções"
                                    }), c.jsx("li", {
                                        children: "Assento Ajustável vertical e horizontal"
                                    }), c.jsx("li", {
                                        children: "Guidão ajustável na vertical"
                                    }), c.jsx("li", {
                                        children: "Alça do pedal ajustável"
                                    }), c.jsx("li", {
                                        children: "Sistema de transmissão por correia"
                                    }), c.jsx("li", {
                                        children: "Rodas para locomoção"
                                    })]
                                })]
                            }), c.jsxs("div", {
                                className: "space-y-2 pt-3 border-t",
                                children: [c.jsx("p", {
                                    className: "font-semibold",
                                    children: "Aviso legal"
                                }), c.jsx("p", {
                                    className: "text-muted-foreground",
                                    children: "Altura: 143cm | Comprimento: 85cm | Largura: 44cm | Peso: 15kg"
                                }), c.jsx("p", {
                                    className: "text-muted-foreground",
                                    children: "Tamanho do pacote: 88×23×74cm - Peso líquido: 20kg - Peso bruto: 22kg - Peso da roda de inércia: 6kg."
                                })]
                            })]
                        })]
                    }), c.jsxs("div", {
                        className: "border-t pt-6 space-y-4",
                        children: [c.jsx("img", {
                            src: WN,
                            alt: "TikTok Shop",
                            className: "h-8"
                        }), c.jsxs(HN, {
                            type: "single",
                            collapsible: !0,
                            className: "w-full",
                            children: [c.jsxs(Si, {
                                value: "item-1",
                                children: [c.jsx(Ci, {
                                    className: "text-base",
                                    children: "Informações da empresa"
                                }), c.jsx(Ei, {
                                    children: c.jsx("p", {
                                        className: "text-sm text-muted-foreground",
                                        children: "Sobre a Atakarejo Oficial - Loja verificada pelo TikTok Shop"
                                    })
                                })]
                            }), c.jsxs(Si, {
                                value: "item-2",
                                children: [c.jsx(Ci, {
                                    className: "text-base",
                                    children: "Suporte ao cliente"
                                }), c.jsx(Ei, {
                                    children: c.jsx("p", {
                                        className: "text-sm text-muted-foreground",
                                        children: "Atendimento disponível para resolver suas dúvidas."
                                    })
                                })]
                            }), c.jsxs(Si, {
                                value: "item-3",
                                children: [c.jsx(Ci, {
                                    className: "text-base",
                                    children: "Políticas e aspectos legais"
                                }), c.jsx(Ei, {
                                    children: c.jsx("p", {
                                        className: "text-sm text-muted-foreground",
                                        children: "Termos de uso, privacidade e políticas de devolução."
                                    })
                                })]
                            })]
                        }), c.jsx("div", {
                            className: "pt-4",
                            children: c.jsx("img", {
                                src: QN,
                                alt: "Disponível na App Store e Google Play",
                                className: "h-20"
                            })
                        })]
                    })]
                })]
            }), c.jsx(hN, {
                open: n,
                onOpenChange: r
            }), c.jsx(yN, {
                open: o,
                onOpenChange: s
            }), c.jsx("div", {
                className: "fixed bottom-0 left-0 right-0 bg-card border-t z-50",
                children: c.jsxs("div", {
                    className: "grid grid-cols-[1fr_1fr_auto_1fr] items-center gap-2 px-4 py-4",
                    children: [c.jsxs("button", {
                        className: "flex flex-col items-center gap-1 py-2",
                        onClick: () => s(!0),
                        children: [c.jsx(c1, {
                            className: "h-5 w-5"
                        }), c.jsx("span", {
                            className: "text-xs",
                            children: "Loja"
                        })]
                    }), c.jsxs("button", {
                        className: "flex flex-col items-center gap-1 py-2",
                        onClick: () => r(!0),
                        children: [c.jsx(f1, {
                            className: "h-5 w-5"
                        }), c.jsx("span", {
                            className: "text-xs",
                            children: "Chat"
                        })]
                    }), c.jsxs("button", {
                        className: "text-xs px-3 py-2 whitespace-nowrap",
                        onClick: a,
                        children: ["Ver", c.jsx("br", {}), "avaliações"]
                    }), c.jsx(na, {
                        size: "lg",
                        className: "text-sm font-bold bg-destructive hover:bg-destructive/90 text-destructive-foreground px-6",
                        onClick: i,
                        children: "COMPRAR AGORA"
                    })]
                })
            })]
        })
    },
    YN = () => {
        const e = Cg();
        return y.useEffect(() => {
            console.error("404 Error: User attempted to access non-existent route:", e.pathname)
        }, [e.pathname]), c.jsx("div", {
            className: "flex min-h-screen items-center justify-center bg-gray-100",
            children: c.jsxs("div", {
                className: "text-center",
                children: [c.jsx("h1", {
                    className: "mb-4 text-4xl font-bold",
                    children: "404"
                }), c.jsx("p", {
                    className: "mb-4 text-xl text-gray-600",
                    children: "Oops! Page not found"
                }), c.jsx("a", {
                    href: "/",
                    className: "text-blue-500 underline hover:text-blue-700",
                    children: "Return to Home"
                })]
            })
        })
    },
    qN = new VE,
    XN = () => c.jsx(WE, {
        client: qN,
        children: c.jsxs(xE, {
            children: [c.jsx(eS, {}), c.jsx(OS, {}), c.jsx(Rb, {
                children: c.jsxs(Pb, {
                    children: [c.jsx(Bu, {
                        path: "/",
                        element: c.jsx(GN, {})
                    }), c.jsx(Bu, {
                        path: "*",
                        element: c.jsx(YN, {})
                    })]
                })
            })]
        })
    });
Wm(document.getElementById("root")).render(c.jsx(XN, {}));