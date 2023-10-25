var co = Object.defineProperty;
var lo = (e, a, o) => a in e ? co(e, a, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[a] = o;
var U = (e, a, o) => (lo(e, typeof a != "symbol" ? a + "" : a, o), o);
import d from "axios";
var po = Object.defineProperty, ho = (e, a, o) => a in e ? po(e, a, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[a] = o, B = (e, a, o) => (ho(e, typeof a != "symbol" ? a + "" : a, o), o), ya = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function La(e) {
  if (e.__esModule)
    return e;
  var a = e.default;
  if (typeof a == "function") {
    var o = function i() {
      return this instanceof i ? Reflect.construct(a, arguments, this.constructor) : a.apply(this, arguments);
    };
    o.prototype = a.prototype;
  } else
    o = {};
  return Object.defineProperty(o, "__esModule", { value: !0 }), Object.keys(e).forEach(function(i) {
    var s = Object.getOwnPropertyDescriptor(e, i);
    Object.defineProperty(o, i, s.get ? s : {
      enumerable: !0,
      get: function() {
        return e[i];
      }
    });
  }), o;
}
const q = 2147483647, I = 36, ra = 1, M = 26, ko = 38, go = 700, Ua = 72, Na = 128, _a = "-", jo = /^xn--/, bo = /[^\0-\x7E]/, yo = /[\x2E\u3002\uFF0E\uFF61]/g, fo = {
  overflow: "Overflow: input needs wider integers to process",
  "not-basic": "Illegal input >= 0x80 (not a basic code point)",
  "invalid-input": "Invalid input"
}, X = I - ra, A = Math.floor, Y = String.fromCharCode;
function N(e) {
  throw new RangeError(fo[e]);
}
function wo(e, a) {
  const o = [];
  let i = e.length;
  for (; i--; )
    o[i] = a(e[i]);
  return o;
}
function Fa(e, a) {
  const o = e.split("@");
  let i = "";
  o.length > 1 && (i = o[0] + "@", e = o[1]), e = e.replace(yo, ".");
  const s = e.split("."), n = wo(s, a).join(".");
  return i + n;
}
function ma(e) {
  const a = [];
  let o = 0;
  const i = e.length;
  for (; o < i; ) {
    const s = e.charCodeAt(o++);
    if (s >= 55296 && s <= 56319 && o < i) {
      const n = e.charCodeAt(o++);
      (n & 64512) == 56320 ? a.push(((s & 1023) << 10) + (n & 1023) + 65536) : (a.push(s), o--);
    } else
      a.push(s);
  }
  return a;
}
const qa = (e) => String.fromCodePoint(...e), vo = function(e) {
  return e - 48 < 10 ? e - 22 : e - 65 < 26 ? e - 65 : e - 97 < 26 ? e - 97 : I;
}, fa = function(e, a) {
  return e + 22 + 75 * (e < 26) - ((a != 0) << 5);
}, Ba = function(e, a, o) {
  let i = 0;
  for (e = o ? A(e / go) : e >> 1, e += A(e / a); e > X * M >> 1; i += I)
    e = A(e / X);
  return A(i + (X + 1) * e / (e + ko));
}, ua = function(e) {
  const a = [], o = e.length;
  let i = 0, s = Na, n = Ua, t = e.lastIndexOf(_a);
  t < 0 && (t = 0);
  for (let r = 0; r < t; ++r)
    e.charCodeAt(r) >= 128 && N("not-basic"), a.push(e.charCodeAt(r));
  for (let r = t > 0 ? t + 1 : 0; r < o; ) {
    let m = i;
    for (let c = 1, l = I; ; l += I) {
      r >= o && N("invalid-input");
      const h = vo(e.charCodeAt(r++));
      (h >= I || h > A((q - i) / c)) && N("overflow"), i += h * c;
      const f = l <= n ? ra : l >= n + M ? M : l - n;
      if (h < f)
        break;
      const v = I - f;
      c > A(q / v) && N("overflow"), c *= v;
    }
    const u = a.length + 1;
    n = Ba(i - m, u, m == 0), A(i / u) > q - s && N("overflow"), s += A(i / u), i %= u, a.splice(i++, 0, s);
  }
  return String.fromCodePoint(...a);
}, ca = function(e) {
  const a = [];
  e = ma(e);
  let o = e.length, i = Na, s = 0, n = Ua;
  for (const m of e)
    m < 128 && a.push(Y(m));
  let t = a.length, r = t;
  for (t && a.push(_a); r < o; ) {
    let m = q;
    for (const c of e)
      c >= i && c < m && (m = c);
    const u = r + 1;
    m - i > A((q - s) / u) && N("overflow"), s += (m - i) * u, i = m;
    for (const c of e)
      if (c < i && ++s > q && N("overflow"), c == i) {
        let l = s;
        for (let h = I; ; h += I) {
          const f = h <= n ? ra : h >= n + M ? M : h - n;
          if (l < f)
            break;
          const v = l - f, y = I - f;
          a.push(
            Y(fa(f + v % y, 0))
          ), l = A(v / y);
        }
        a.push(Y(fa(l, 0))), n = Ba(s, u, r == t), s = 0, ++r;
      }
    ++s, ++i;
  }
  return a.join("");
}, $a = function(e) {
  return Fa(e, function(a) {
    return jo.test(a) ? ua(a.slice(4).toLowerCase()) : a;
  });
}, Ma = function(e) {
  return Fa(e, function(a) {
    return bo.test(a) ? "xn--" + ca(a) : a;
  });
}, zo = {
  /**
   * A string representing the current Punycode.js version number.
   * @memberOf punycode
   * @type String
   */
  version: "2.1.0",
  /**
   * An object of methods to convert from JavaScript's internal character
   * representation (UCS-2) to Unicode code points, and back.
   * @see <https://mathiasbynens.be/notes/javascript-encoding>
   * @memberOf punycode
   * @type Object
   */
  ucs2: {
    decode: ma,
    encode: qa
  },
  decode: ua,
  encode: ca,
  toASCII: Ma,
  toUnicode: $a
}, xo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  decode: ua,
  default: zo,
  encode: ca,
  toASCII: Ma,
  toUnicode: $a,
  ucs2decode: ma,
  ucs2encode: qa
}, Symbol.toStringTag, { value: "Module" })), Ha = /* @__PURE__ */ La(xo);
var Oo = function(e, a) {
  if (a = a.split(":")[0], e = +e, !e)
    return !1;
  switch (a) {
    case "http":
    case "ws":
      return e !== 80;
    case "https":
    case "wss":
      return e !== 443;
    case "ftp":
      return e !== 21;
    case "gopher":
      return e !== 70;
    case "file":
      return !1;
  }
  return e !== 0;
}, la = {}, Do = Object.prototype.hasOwnProperty, Io;
function wa(e) {
  try {
    return decodeURIComponent(e.replace(/\+/g, " "));
  } catch {
    return null;
  }
}
function va(e) {
  try {
    return encodeURIComponent(e);
  } catch {
    return null;
  }
}
function Ao(e) {
  for (var a = /([^=?#&]+)=?([^&]*)/g, o = {}, i; i = a.exec(e); ) {
    var s = wa(i[1]), n = wa(i[2]);
    s === null || n === null || s in o || (o[s] = n);
  }
  return o;
}
function So(e, a) {
  a = a || "";
  var o = [], i, s;
  typeof a != "string" && (a = "?");
  for (s in e)
    if (Do.call(e, s)) {
      if (i = e[s], !i && (i === null || i === Io || isNaN(i)) && (i = ""), s = va(s), i = va(i), s === null || i === null)
        continue;
      o.push(s + "=" + i);
    }
  return o.length ? a + o.join("&") : "";
}
la.stringify = So;
la.parse = Ao;
var Qa = Oo, W = la, Co = /^[\x00-\x20\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]+/, Ga = /[\n\r\t]/g, Vo = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//, Ja = /:\d+$/, Eo = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\\/]+)?([\S\s]*)/i, Po = /^[a-zA-Z]:/;
function pa(e) {
  return (e || "").toString().replace(Co, "");
}
var ea = [
  ["#", "hash"],
  // Extract from the back.
  ["?", "query"],
  // Extract from the back.
  function(e, a) {
    return S(a.protocol) ? e.replace(/\\/g, "/") : e;
  },
  ["/", "pathname"],
  // Extract from the back.
  ["@", "auth", 1],
  // Extract from the front.
  [NaN, "host", void 0, 1, 1],
  // Set left over value.
  [/:(\d*)$/, "port", void 0, 1],
  // RegExp the back.
  [NaN, "hostname", void 0, 1, 1]
  // Set left over.
], za = { hash: 1, query: 1 };
function Wa(e) {
  var a;
  typeof window < "u" ? a = window : typeof ya < "u" ? a = ya : typeof self < "u" ? a = self : a = {};
  var o = a.location || {};
  e = e || o;
  var i = {}, s = typeof e, n;
  if (e.protocol === "blob:")
    i = new C(unescape(e.pathname), {});
  else if (s === "string") {
    i = new C(e, {});
    for (n in za)
      delete i[n];
  } else if (s === "object") {
    for (n in e)
      n in za || (i[n] = e[n]);
    i.slashes === void 0 && (i.slashes = Vo.test(e.href));
  }
  return i;
}
function S(e) {
  return e === "file:" || e === "ftp:" || e === "http:" || e === "https:" || e === "ws:" || e === "wss:";
}
function Za(e, a) {
  e = pa(e), e = e.replace(Ga, ""), a = a || {};
  var o = Eo.exec(e), i = o[1] ? o[1].toLowerCase() : "", s = !!o[2], n = !!o[3], t = 0, r;
  return s ? n ? (r = o[2] + o[3] + o[4], t = o[2].length + o[3].length) : (r = o[2] + o[4], t = o[2].length) : n ? (r = o[3] + o[4], t = o[3].length) : r = o[4], i === "file:" ? t >= 2 && (r = r.slice(2)) : S(i) ? r = o[4] : i ? s && (r = r.slice(2)) : t >= 2 && S(a.protocol) && (r = o[4]), {
    protocol: i,
    slashes: s || S(i),
    slashesCount: t,
    rest: r
  };
}
function To(e, a) {
  if (e === "")
    return a;
  for (var o = (a || "/").split("/").slice(0, -1).concat(e.split("/")), i = o.length, s = o[i - 1], n = !1, t = 0; i--; )
    o[i] === "." ? o.splice(i, 1) : o[i] === ".." ? (o.splice(i, 1), t++) : t && (i === 0 && (n = !0), o.splice(i, 1), t--);
  return n && o.unshift(""), (s === "." || s === "..") && o.push(""), o.join("/");
}
function C(e, a, o) {
  if (e = pa(e), e = e.replace(Ga, ""), !(this instanceof C))
    return new C(e, a, o);
  var i, s, n, t, r, m, u = ea.slice(), c = typeof a, l = this, h = 0;
  for (c !== "object" && c !== "string" && (o = a, a = null), o && typeof o != "function" && (o = W.parse), a = Wa(a), s = Za(e || "", a), i = !s.protocol && !s.slashes, l.slashes = s.slashes || i && a.slashes, l.protocol = s.protocol || a.protocol || "", e = s.rest, (s.protocol === "file:" && (s.slashesCount !== 2 || Po.test(e)) || !s.slashes && (s.protocol || s.slashesCount < 2 || !S(l.protocol))) && (u[3] = [/(.*)/, "pathname"]); h < u.length; h++) {
    if (t = u[h], typeof t == "function") {
      e = t(e, l);
      continue;
    }
    n = t[0], m = t[1], n !== n ? l[m] = e : typeof n == "string" ? (r = n === "@" ? e.lastIndexOf(n) : e.indexOf(n), ~r && (typeof t[2] == "number" ? (l[m] = e.slice(0, r), e = e.slice(r + t[2])) : (l[m] = e.slice(r), e = e.slice(0, r)))) : (r = n.exec(e)) && (l[m] = r[1], e = e.slice(0, r.index)), l[m] = l[m] || i && t[3] && a[m] || "", t[4] && (l[m] = l[m].toLowerCase());
  }
  o && (l.query = o(l.query)), i && a.slashes && l.pathname.charAt(0) !== "/" && (l.pathname !== "" || a.pathname !== "") && (l.pathname = To(l.pathname, a.pathname)), l.pathname.charAt(0) !== "/" && S(l.protocol) && (l.pathname = "/" + l.pathname), Qa(l.port, l.protocol) || (l.host = l.hostname, l.port = ""), l.username = l.password = "", l.auth && (r = l.auth.indexOf(":"), ~r ? (l.username = l.auth.slice(0, r), l.username = encodeURIComponent(decodeURIComponent(l.username)), l.password = l.auth.slice(r + 1), l.password = encodeURIComponent(decodeURIComponent(l.password))) : l.username = encodeURIComponent(decodeURIComponent(l.auth)), l.auth = l.password ? l.username + ":" + l.password : l.username), l.origin = l.protocol !== "file:" && S(l.protocol) && l.host ? l.protocol + "//" + l.host : "null", l.href = l.toString();
}
function Ro(e, a, o) {
  var i = this;
  switch (e) {
    case "query":
      typeof a == "string" && a.length && (a = (o || W.parse)(a)), i[e] = a;
      break;
    case "port":
      i[e] = a, Qa(a, i.protocol) ? a && (i.host = i.hostname + ":" + a) : (i.host = i.hostname, i[e] = "");
      break;
    case "hostname":
      i[e] = a, i.port && (a += ":" + i.port), i.host = a;
      break;
    case "host":
      i[e] = a, Ja.test(a) ? (a = a.split(":"), i.port = a.pop(), i.hostname = a.join(":")) : (i.hostname = a, i.port = "");
      break;
    case "protocol":
      i.protocol = a.toLowerCase(), i.slashes = !o;
      break;
    case "pathname":
    case "hash":
      if (a) {
        var s = e === "pathname" ? "/" : "#";
        i[e] = a.charAt(0) !== s ? s + a : a;
      } else
        i[e] = a;
      break;
    case "username":
    case "password":
      i[e] = encodeURIComponent(a);
      break;
    case "auth":
      var n = a.indexOf(":");
      ~n ? (i.username = a.slice(0, n), i.username = encodeURIComponent(decodeURIComponent(i.username)), i.password = a.slice(n + 1), i.password = encodeURIComponent(decodeURIComponent(i.password))) : i.username = encodeURIComponent(decodeURIComponent(a));
  }
  for (var t = 0; t < ea.length; t++) {
    var r = ea[t];
    r[4] && (i[r[1]] = i[r[1]].toLowerCase());
  }
  return i.auth = i.password ? i.username + ":" + i.password : i.username, i.origin = i.protocol !== "file:" && S(i.protocol) && i.host ? i.protocol + "//" + i.host : "null", i.href = i.toString(), i;
}
function Lo(e) {
  (!e || typeof e != "function") && (e = W.stringify);
  var a, o = this, i = o.host, s = o.protocol;
  s && s.charAt(s.length - 1) !== ":" && (s += ":");
  var n = s + (o.protocol && o.slashes || S(o.protocol) ? "//" : "");
  return o.username ? (n += o.username, o.password && (n += ":" + o.password), n += "@") : o.password ? (n += ":" + o.password, n += "@") : o.protocol !== "file:" && S(o.protocol) && !i && o.pathname !== "/" && (n += "@"), (i[i.length - 1] === ":" || Ja.test(o.hostname) && !o.port) && (i += ":"), n += i + o.pathname, a = typeof o.query == "object" ? e(o.query) : o.query, a && (n += a.charAt(0) !== "?" ? "?" + a : a), o.hash && (n += o.hash), n;
}
C.prototype = { set: Ro, toString: Lo };
C.extractProtocol = Za;
C.location = Wa;
C.trimLeft = pa;
C.qs = W;
var Uo = C, da = {}, Ka = {};
const No = [
  "ac",
  "com.ac",
  "edu.ac",
  "gov.ac",
  "net.ac",
  "mil.ac",
  "org.ac",
  "ad",
  "nom.ad",
  "ae",
  "co.ae",
  "net.ae",
  "org.ae",
  "sch.ae",
  "ac.ae",
  "gov.ae",
  "mil.ae",
  "aero",
  "accident-investigation.aero",
  "accident-prevention.aero",
  "aerobatic.aero",
  "aeroclub.aero",
  "aerodrome.aero",
  "agents.aero",
  "aircraft.aero",
  "airline.aero",
  "airport.aero",
  "air-surveillance.aero",
  "airtraffic.aero",
  "air-traffic-control.aero",
  "ambulance.aero",
  "amusement.aero",
  "association.aero",
  "author.aero",
  "ballooning.aero",
  "broker.aero",
  "caa.aero",
  "cargo.aero",
  "catering.aero",
  "certification.aero",
  "championship.aero",
  "charter.aero",
  "civilaviation.aero",
  "club.aero",
  "conference.aero",
  "consultant.aero",
  "consulting.aero",
  "control.aero",
  "council.aero",
  "crew.aero",
  "design.aero",
  "dgca.aero",
  "educator.aero",
  "emergency.aero",
  "engine.aero",
  "engineer.aero",
  "entertainment.aero",
  "equipment.aero",
  "exchange.aero",
  "express.aero",
  "federation.aero",
  "flight.aero",
  "fuel.aero",
  "gliding.aero",
  "government.aero",
  "groundhandling.aero",
  "group.aero",
  "hanggliding.aero",
  "homebuilt.aero",
  "insurance.aero",
  "journal.aero",
  "journalist.aero",
  "leasing.aero",
  "logistics.aero",
  "magazine.aero",
  "maintenance.aero",
  "media.aero",
  "microlight.aero",
  "modelling.aero",
  "navigation.aero",
  "parachuting.aero",
  "paragliding.aero",
  "passenger-association.aero",
  "pilot.aero",
  "press.aero",
  "production.aero",
  "recreation.aero",
  "repbody.aero",
  "res.aero",
  "research.aero",
  "rotorcraft.aero",
  "safety.aero",
  "scientist.aero",
  "services.aero",
  "show.aero",
  "skydiving.aero",
  "software.aero",
  "student.aero",
  "trader.aero",
  "trading.aero",
  "trainer.aero",
  "union.aero",
  "workinggroup.aero",
  "works.aero",
  "af",
  "gov.af",
  "com.af",
  "org.af",
  "net.af",
  "edu.af",
  "ag",
  "com.ag",
  "org.ag",
  "net.ag",
  "co.ag",
  "nom.ag",
  "ai",
  "off.ai",
  "com.ai",
  "net.ai",
  "org.ai",
  "al",
  "com.al",
  "edu.al",
  "gov.al",
  "mil.al",
  "net.al",
  "org.al",
  "am",
  "co.am",
  "com.am",
  "commune.am",
  "net.am",
  "org.am",
  "ao",
  "ed.ao",
  "gv.ao",
  "og.ao",
  "co.ao",
  "pb.ao",
  "it.ao",
  "aq",
  "ar",
  "bet.ar",
  "com.ar",
  "coop.ar",
  "edu.ar",
  "gob.ar",
  "gov.ar",
  "int.ar",
  "mil.ar",
  "musica.ar",
  "mutual.ar",
  "net.ar",
  "org.ar",
  "senasa.ar",
  "tur.ar",
  "arpa",
  "e164.arpa",
  "in-addr.arpa",
  "ip6.arpa",
  "iris.arpa",
  "uri.arpa",
  "urn.arpa",
  "as",
  "gov.as",
  "asia",
  "at",
  "ac.at",
  "co.at",
  "gv.at",
  "or.at",
  "sth.ac.at",
  "au",
  "com.au",
  "net.au",
  "org.au",
  "edu.au",
  "gov.au",
  "asn.au",
  "id.au",
  "info.au",
  "conf.au",
  "oz.au",
  "act.au",
  "nsw.au",
  "nt.au",
  "qld.au",
  "sa.au",
  "tas.au",
  "vic.au",
  "wa.au",
  "act.edu.au",
  "catholic.edu.au",
  "nsw.edu.au",
  "nt.edu.au",
  "qld.edu.au",
  "sa.edu.au",
  "tas.edu.au",
  "vic.edu.au",
  "wa.edu.au",
  "qld.gov.au",
  "sa.gov.au",
  "tas.gov.au",
  "vic.gov.au",
  "wa.gov.au",
  "schools.nsw.edu.au",
  "aw",
  "com.aw",
  "ax",
  "az",
  "com.az",
  "net.az",
  "int.az",
  "gov.az",
  "org.az",
  "edu.az",
  "info.az",
  "pp.az",
  "mil.az",
  "name.az",
  "pro.az",
  "biz.az",
  "ba",
  "com.ba",
  "edu.ba",
  "gov.ba",
  "mil.ba",
  "net.ba",
  "org.ba",
  "bb",
  "biz.bb",
  "co.bb",
  "com.bb",
  "edu.bb",
  "gov.bb",
  "info.bb",
  "net.bb",
  "org.bb",
  "store.bb",
  "tv.bb",
  "*.bd",
  "be",
  "ac.be",
  "bf",
  "gov.bf",
  "bg",
  "a.bg",
  "b.bg",
  "c.bg",
  "d.bg",
  "e.bg",
  "f.bg",
  "g.bg",
  "h.bg",
  "i.bg",
  "j.bg",
  "k.bg",
  "l.bg",
  "m.bg",
  "n.bg",
  "o.bg",
  "p.bg",
  "q.bg",
  "r.bg",
  "s.bg",
  "t.bg",
  "u.bg",
  "v.bg",
  "w.bg",
  "x.bg",
  "y.bg",
  "z.bg",
  "0.bg",
  "1.bg",
  "2.bg",
  "3.bg",
  "4.bg",
  "5.bg",
  "6.bg",
  "7.bg",
  "8.bg",
  "9.bg",
  "bh",
  "com.bh",
  "edu.bh",
  "net.bh",
  "org.bh",
  "gov.bh",
  "bi",
  "co.bi",
  "com.bi",
  "edu.bi",
  "or.bi",
  "org.bi",
  "biz",
  "bj",
  "asso.bj",
  "barreau.bj",
  "gouv.bj",
  "bm",
  "com.bm",
  "edu.bm",
  "gov.bm",
  "net.bm",
  "org.bm",
  "bn",
  "com.bn",
  "edu.bn",
  "gov.bn",
  "net.bn",
  "org.bn",
  "bo",
  "com.bo",
  "edu.bo",
  "gob.bo",
  "int.bo",
  "org.bo",
  "net.bo",
  "mil.bo",
  "tv.bo",
  "web.bo",
  "academia.bo",
  "agro.bo",
  "arte.bo",
  "blog.bo",
  "bolivia.bo",
  "ciencia.bo",
  "cooperativa.bo",
  "democracia.bo",
  "deporte.bo",
  "ecologia.bo",
  "economia.bo",
  "empresa.bo",
  "indigena.bo",
  "industria.bo",
  "info.bo",
  "medicina.bo",
  "movimiento.bo",
  "musica.bo",
  "natural.bo",
  "nombre.bo",
  "noticias.bo",
  "patria.bo",
  "politica.bo",
  "profesional.bo",
  "plurinacional.bo",
  "pueblo.bo",
  "revista.bo",
  "salud.bo",
  "tecnologia.bo",
  "tksat.bo",
  "transporte.bo",
  "wiki.bo",
  "br",
  "9guacu.br",
  "abc.br",
  "adm.br",
  "adv.br",
  "agr.br",
  "aju.br",
  "am.br",
  "anani.br",
  "aparecida.br",
  "app.br",
  "arq.br",
  "art.br",
  "ato.br",
  "b.br",
  "barueri.br",
  "belem.br",
  "bhz.br",
  "bib.br",
  "bio.br",
  "blog.br",
  "bmd.br",
  "boavista.br",
  "bsb.br",
  "campinagrande.br",
  "campinas.br",
  "caxias.br",
  "cim.br",
  "cng.br",
  "cnt.br",
  "com.br",
  "contagem.br",
  "coop.br",
  "coz.br",
  "cri.br",
  "cuiaba.br",
  "curitiba.br",
  "def.br",
  "des.br",
  "det.br",
  "dev.br",
  "ecn.br",
  "eco.br",
  "edu.br",
  "emp.br",
  "enf.br",
  "eng.br",
  "esp.br",
  "etc.br",
  "eti.br",
  "far.br",
  "feira.br",
  "flog.br",
  "floripa.br",
  "fm.br",
  "fnd.br",
  "fortal.br",
  "fot.br",
  "foz.br",
  "fst.br",
  "g12.br",
  "geo.br",
  "ggf.br",
  "goiania.br",
  "gov.br",
  "ac.gov.br",
  "al.gov.br",
  "am.gov.br",
  "ap.gov.br",
  "ba.gov.br",
  "ce.gov.br",
  "df.gov.br",
  "es.gov.br",
  "go.gov.br",
  "ma.gov.br",
  "mg.gov.br",
  "ms.gov.br",
  "mt.gov.br",
  "pa.gov.br",
  "pb.gov.br",
  "pe.gov.br",
  "pi.gov.br",
  "pr.gov.br",
  "rj.gov.br",
  "rn.gov.br",
  "ro.gov.br",
  "rr.gov.br",
  "rs.gov.br",
  "sc.gov.br",
  "se.gov.br",
  "sp.gov.br",
  "to.gov.br",
  "gru.br",
  "imb.br",
  "ind.br",
  "inf.br",
  "jab.br",
  "jampa.br",
  "jdf.br",
  "joinville.br",
  "jor.br",
  "jus.br",
  "leg.br",
  "lel.br",
  "log.br",
  "londrina.br",
  "macapa.br",
  "maceio.br",
  "manaus.br",
  "maringa.br",
  "mat.br",
  "med.br",
  "mil.br",
  "morena.br",
  "mp.br",
  "mus.br",
  "natal.br",
  "net.br",
  "niteroi.br",
  "*.nom.br",
  "not.br",
  "ntr.br",
  "odo.br",
  "ong.br",
  "org.br",
  "osasco.br",
  "palmas.br",
  "poa.br",
  "ppg.br",
  "pro.br",
  "psc.br",
  "psi.br",
  "pvh.br",
  "qsl.br",
  "radio.br",
  "rec.br",
  "recife.br",
  "rep.br",
  "ribeirao.br",
  "rio.br",
  "riobranco.br",
  "riopreto.br",
  "salvador.br",
  "sampa.br",
  "santamaria.br",
  "santoandre.br",
  "saobernardo.br",
  "saogonca.br",
  "seg.br",
  "sjc.br",
  "slg.br",
  "slz.br",
  "sorocaba.br",
  "srv.br",
  "taxi.br",
  "tc.br",
  "tec.br",
  "teo.br",
  "the.br",
  "tmp.br",
  "trd.br",
  "tur.br",
  "tv.br",
  "udi.br",
  "vet.br",
  "vix.br",
  "vlog.br",
  "wiki.br",
  "zlg.br",
  "bs",
  "com.bs",
  "net.bs",
  "org.bs",
  "edu.bs",
  "gov.bs",
  "bt",
  "com.bt",
  "edu.bt",
  "gov.bt",
  "net.bt",
  "org.bt",
  "bv",
  "bw",
  "co.bw",
  "org.bw",
  "by",
  "gov.by",
  "mil.by",
  "com.by",
  "of.by",
  "bz",
  "com.bz",
  "net.bz",
  "org.bz",
  "edu.bz",
  "gov.bz",
  "ca",
  "ab.ca",
  "bc.ca",
  "mb.ca",
  "nb.ca",
  "nf.ca",
  "nl.ca",
  "ns.ca",
  "nt.ca",
  "nu.ca",
  "on.ca",
  "pe.ca",
  "qc.ca",
  "sk.ca",
  "yk.ca",
  "gc.ca",
  "cat",
  "cc",
  "cd",
  "gov.cd",
  "cf",
  "cg",
  "ch",
  "ci",
  "org.ci",
  "or.ci",
  "com.ci",
  "co.ci",
  "edu.ci",
  "ed.ci",
  "ac.ci",
  "net.ci",
  "go.ci",
  "asso.ci",
  "aéroport.ci",
  "int.ci",
  "presse.ci",
  "md.ci",
  "gouv.ci",
  "*.ck",
  "!www.ck",
  "cl",
  "co.cl",
  "gob.cl",
  "gov.cl",
  "mil.cl",
  "cm",
  "co.cm",
  "com.cm",
  "gov.cm",
  "net.cm",
  "cn",
  "ac.cn",
  "com.cn",
  "edu.cn",
  "gov.cn",
  "net.cn",
  "org.cn",
  "mil.cn",
  "公司.cn",
  "网络.cn",
  "網絡.cn",
  "ah.cn",
  "bj.cn",
  "cq.cn",
  "fj.cn",
  "gd.cn",
  "gs.cn",
  "gz.cn",
  "gx.cn",
  "ha.cn",
  "hb.cn",
  "he.cn",
  "hi.cn",
  "hl.cn",
  "hn.cn",
  "jl.cn",
  "js.cn",
  "jx.cn",
  "ln.cn",
  "nm.cn",
  "nx.cn",
  "qh.cn",
  "sc.cn",
  "sd.cn",
  "sh.cn",
  "sn.cn",
  "sx.cn",
  "tj.cn",
  "xj.cn",
  "xz.cn",
  "yn.cn",
  "zj.cn",
  "hk.cn",
  "mo.cn",
  "tw.cn",
  "co",
  "arts.co",
  "com.co",
  "edu.co",
  "firm.co",
  "gov.co",
  "info.co",
  "int.co",
  "mil.co",
  "net.co",
  "nom.co",
  "org.co",
  "rec.co",
  "web.co",
  "com",
  "coop",
  "cr",
  "ac.cr",
  "co.cr",
  "ed.cr",
  "fi.cr",
  "go.cr",
  "or.cr",
  "sa.cr",
  "cu",
  "com.cu",
  "edu.cu",
  "org.cu",
  "net.cu",
  "gov.cu",
  "inf.cu",
  "cv",
  "com.cv",
  "edu.cv",
  "int.cv",
  "nome.cv",
  "org.cv",
  "cw",
  "com.cw",
  "edu.cw",
  "net.cw",
  "org.cw",
  "cx",
  "gov.cx",
  "cy",
  "ac.cy",
  "biz.cy",
  "com.cy",
  "ekloges.cy",
  "gov.cy",
  "ltd.cy",
  "mil.cy",
  "net.cy",
  "org.cy",
  "press.cy",
  "pro.cy",
  "tm.cy",
  "cz",
  "de",
  "dj",
  "dk",
  "dm",
  "com.dm",
  "net.dm",
  "org.dm",
  "edu.dm",
  "gov.dm",
  "do",
  "art.do",
  "com.do",
  "edu.do",
  "gob.do",
  "gov.do",
  "mil.do",
  "net.do",
  "org.do",
  "sld.do",
  "web.do",
  "dz",
  "art.dz",
  "asso.dz",
  "com.dz",
  "edu.dz",
  "gov.dz",
  "org.dz",
  "net.dz",
  "pol.dz",
  "soc.dz",
  "tm.dz",
  "ec",
  "com.ec",
  "info.ec",
  "net.ec",
  "fin.ec",
  "k12.ec",
  "med.ec",
  "pro.ec",
  "org.ec",
  "edu.ec",
  "gov.ec",
  "gob.ec",
  "mil.ec",
  "edu",
  "ee",
  "edu.ee",
  "gov.ee",
  "riik.ee",
  "lib.ee",
  "med.ee",
  "com.ee",
  "pri.ee",
  "aip.ee",
  "org.ee",
  "fie.ee",
  "eg",
  "com.eg",
  "edu.eg",
  "eun.eg",
  "gov.eg",
  "mil.eg",
  "name.eg",
  "net.eg",
  "org.eg",
  "sci.eg",
  "*.er",
  "es",
  "com.es",
  "nom.es",
  "org.es",
  "gob.es",
  "edu.es",
  "et",
  "com.et",
  "gov.et",
  "org.et",
  "edu.et",
  "biz.et",
  "name.et",
  "info.et",
  "net.et",
  "eu",
  "fi",
  "aland.fi",
  "fj",
  "ac.fj",
  "biz.fj",
  "com.fj",
  "gov.fj",
  "info.fj",
  "mil.fj",
  "name.fj",
  "net.fj",
  "org.fj",
  "pro.fj",
  "*.fk",
  "com.fm",
  "edu.fm",
  "net.fm",
  "org.fm",
  "fm",
  "fo",
  "fr",
  "asso.fr",
  "com.fr",
  "gouv.fr",
  "nom.fr",
  "prd.fr",
  "tm.fr",
  "aeroport.fr",
  "avocat.fr",
  "avoues.fr",
  "cci.fr",
  "chambagri.fr",
  "chirurgiens-dentistes.fr",
  "experts-comptables.fr",
  "geometre-expert.fr",
  "greta.fr",
  "huissier-justice.fr",
  "medecin.fr",
  "notaires.fr",
  "pharmacien.fr",
  "port.fr",
  "veterinaire.fr",
  "ga",
  "gb",
  "edu.gd",
  "gov.gd",
  "gd",
  "ge",
  "com.ge",
  "edu.ge",
  "gov.ge",
  "org.ge",
  "mil.ge",
  "net.ge",
  "pvt.ge",
  "gf",
  "gg",
  "co.gg",
  "net.gg",
  "org.gg",
  "gh",
  "com.gh",
  "edu.gh",
  "gov.gh",
  "org.gh",
  "mil.gh",
  "gi",
  "com.gi",
  "ltd.gi",
  "gov.gi",
  "mod.gi",
  "edu.gi",
  "org.gi",
  "gl",
  "co.gl",
  "com.gl",
  "edu.gl",
  "net.gl",
  "org.gl",
  "gm",
  "gn",
  "ac.gn",
  "com.gn",
  "edu.gn",
  "gov.gn",
  "org.gn",
  "net.gn",
  "gov",
  "gp",
  "com.gp",
  "net.gp",
  "mobi.gp",
  "edu.gp",
  "org.gp",
  "asso.gp",
  "gq",
  "gr",
  "com.gr",
  "edu.gr",
  "net.gr",
  "org.gr",
  "gov.gr",
  "gs",
  "gt",
  "com.gt",
  "edu.gt",
  "gob.gt",
  "ind.gt",
  "mil.gt",
  "net.gt",
  "org.gt",
  "gu",
  "com.gu",
  "edu.gu",
  "gov.gu",
  "guam.gu",
  "info.gu",
  "net.gu",
  "org.gu",
  "web.gu",
  "gw",
  "gy",
  "co.gy",
  "com.gy",
  "edu.gy",
  "gov.gy",
  "net.gy",
  "org.gy",
  "hk",
  "com.hk",
  "edu.hk",
  "gov.hk",
  "idv.hk",
  "net.hk",
  "org.hk",
  "公司.hk",
  "教育.hk",
  "敎育.hk",
  "政府.hk",
  "個人.hk",
  "个��.hk",
  "箇人.hk",
  "網络.hk",
  "网络.hk",
  "组織.hk",
  "網絡.hk",
  "网絡.hk",
  "组织.hk",
  "組織.hk",
  "組织.hk",
  "hm",
  "hn",
  "com.hn",
  "edu.hn",
  "org.hn",
  "net.hn",
  "mil.hn",
  "gob.hn",
  "hr",
  "iz.hr",
  "from.hr",
  "name.hr",
  "com.hr",
  "ht",
  "com.ht",
  "shop.ht",
  "firm.ht",
  "info.ht",
  "adult.ht",
  "net.ht",
  "pro.ht",
  "org.ht",
  "med.ht",
  "art.ht",
  "coop.ht",
  "pol.ht",
  "asso.ht",
  "edu.ht",
  "rel.ht",
  "gouv.ht",
  "perso.ht",
  "hu",
  "co.hu",
  "info.hu",
  "org.hu",
  "priv.hu",
  "sport.hu",
  "tm.hu",
  "2000.hu",
  "agrar.hu",
  "bolt.hu",
  "casino.hu",
  "city.hu",
  "erotica.hu",
  "erotika.hu",
  "film.hu",
  "forum.hu",
  "games.hu",
  "hotel.hu",
  "ingatlan.hu",
  "jogasz.hu",
  "konyvelo.hu",
  "lakas.hu",
  "media.hu",
  "news.hu",
  "reklam.hu",
  "sex.hu",
  "shop.hu",
  "suli.hu",
  "szex.hu",
  "tozsde.hu",
  "utazas.hu",
  "video.hu",
  "id",
  "ac.id",
  "biz.id",
  "co.id",
  "desa.id",
  "go.id",
  "mil.id",
  "my.id",
  "net.id",
  "or.id",
  "ponpes.id",
  "sch.id",
  "web.id",
  "ie",
  "gov.ie",
  "il",
  "ac.il",
  "co.il",
  "gov.il",
  "idf.il",
  "k12.il",
  "muni.il",
  "net.il",
  "org.il",
  "im",
  "ac.im",
  "co.im",
  "com.im",
  "ltd.co.im",
  "net.im",
  "org.im",
  "plc.co.im",
  "tt.im",
  "tv.im",
  "in",
  "co.in",
  "firm.in",
  "net.in",
  "org.in",
  "gen.in",
  "ind.in",
  "nic.in",
  "ac.in",
  "edu.in",
  "res.in",
  "gov.in",
  "mil.in",
  "info",
  "int",
  "eu.int",
  "io",
  "com.io",
  "iq",
  "gov.iq",
  "edu.iq",
  "mil.iq",
  "com.iq",
  "org.iq",
  "net.iq",
  "ir",
  "ac.ir",
  "co.ir",
  "gov.ir",
  "id.ir",
  "net.ir",
  "org.ir",
  "sch.ir",
  "ایران.ir",
  "ايران.ir",
  "is",
  "net.is",
  "com.is",
  "edu.is",
  "gov.is",
  "org.is",
  "int.is",
  "it",
  "gov.it",
  "edu.it",
  "abr.it",
  "abruzzo.it",
  "aosta-valley.it",
  "aostavalley.it",
  "bas.it",
  "basilicata.it",
  "cal.it",
  "calabria.it",
  "cam.it",
  "campania.it",
  "emilia-romagna.it",
  "emiliaromagna.it",
  "emr.it",
  "friuli-v-giulia.it",
  "friuli-ve-giulia.it",
  "friuli-vegiulia.it",
  "friuli-venezia-giulia.it",
  "friuli-veneziagiulia.it",
  "friuli-vgiulia.it",
  "friuliv-giulia.it",
  "friulive-giulia.it",
  "friulivegiulia.it",
  "friulivenezia-giulia.it",
  "friuliveneziagiulia.it",
  "friulivgiulia.it",
  "fvg.it",
  "laz.it",
  "lazio.it",
  "lig.it",
  "liguria.it",
  "lom.it",
  "lombardia.it",
  "lombardy.it",
  "lucania.it",
  "mar.it",
  "marche.it",
  "mol.it",
  "molise.it",
  "piedmont.it",
  "piemonte.it",
  "pmn.it",
  "pug.it",
  "puglia.it",
  "sar.it",
  "sardegna.it",
  "sardinia.it",
  "sic.it",
  "sicilia.it",
  "sicily.it",
  "taa.it",
  "tos.it",
  "toscana.it",
  "trentin-sud-tirol.it",
  "trentin-süd-tirol.it",
  "trentin-sudtirol.it",
  "trentin-südtirol.it",
  "trentin-sued-tirol.it",
  "trentin-suedtirol.it",
  "trentino-a-adige.it",
  "trentino-aadige.it",
  "trentino-alto-adige.it",
  "trentino-altoadige.it",
  "trentino-s-tirol.it",
  "trentino-stirol.it",
  "trentino-sud-tirol.it",
  "trentino-süd-tirol.it",
  "trentino-sudtirol.it",
  "trentino-südtirol.it",
  "trentino-sued-tirol.it",
  "trentino-suedtirol.it",
  "trentino.it",
  "trentinoa-adige.it",
  "trentinoaadige.it",
  "trentinoalto-adige.it",
  "trentinoaltoadige.it",
  "trentinos-tirol.it",
  "trentinostirol.it",
  "trentinosud-tirol.it",
  "trentinosüd-tirol.it",
  "trentinosudtirol.it",
  "trentinosüdtirol.it",
  "trentinosued-tirol.it",
  "trentinosuedtirol.it",
  "trentinsud-tirol.it",
  "trentinsüd-tirol.it",
  "trentinsudtirol.it",
  "trentinsüdtirol.it",
  "trentinsued-tirol.it",
  "trentinsuedtirol.it",
  "tuscany.it",
  "umb.it",
  "umbria.it",
  "val-d-aosta.it",
  "val-daosta.it",
  "vald-aosta.it",
  "valdaosta.it",
  "valle-aosta.it",
  "valle-d-aosta.it",
  "valle-daosta.it",
  "valleaosta.it",
  "valled-aosta.it",
  "valledaosta.it",
  "vallee-aoste.it",
  "vallée-aoste.it",
  "vallee-d-aoste.it",
  "vallée-d-aoste.it",
  "valleeaoste.it",
  "valléeaoste.it",
  "valleedaoste.it",
  "valléedaoste.it",
  "vao.it",
  "vda.it",
  "ven.it",
  "veneto.it",
  "ag.it",
  "agrigento.it",
  "al.it",
  "alessandria.it",
  "alto-adige.it",
  "altoadige.it",
  "an.it",
  "ancona.it",
  "andria-barletta-trani.it",
  "andria-trani-barletta.it",
  "andriabarlettatrani.it",
  "andriatranibarletta.it",
  "ao.it",
  "aosta.it",
  "aoste.it",
  "ap.it",
  "aq.it",
  "aquila.it",
  "ar.it",
  "arezzo.it",
  "ascoli-piceno.it",
  "ascolipiceno.it",
  "asti.it",
  "at.it",
  "av.it",
  "avellino.it",
  "ba.it",
  "balsan-sudtirol.it",
  "balsan-südtirol.it",
  "balsan-suedtirol.it",
  "balsan.it",
  "bari.it",
  "barletta-trani-andria.it",
  "barlettatraniandria.it",
  "belluno.it",
  "benevento.it",
  "bergamo.it",
  "bg.it",
  "bi.it",
  "biella.it",
  "bl.it",
  "bn.it",
  "bo.it",
  "bologna.it",
  "bolzano-altoadige.it",
  "bolzano.it",
  "bozen-sudtirol.it",
  "bozen-südtirol.it",
  "bozen-suedtirol.it",
  "bozen.it",
  "br.it",
  "brescia.it",
  "brindisi.it",
  "bs.it",
  "bt.it",
  "bulsan-sudtirol.it",
  "bulsan-südtirol.it",
  "bulsan-suedtirol.it",
  "bulsan.it",
  "bz.it",
  "ca.it",
  "cagliari.it",
  "caltanissetta.it",
  "campidano-medio.it",
  "campidanomedio.it",
  "campobasso.it",
  "carbonia-iglesias.it",
  "carboniaiglesias.it",
  "carrara-massa.it",
  "carraramassa.it",
  "caserta.it",
  "catania.it",
  "catanzaro.it",
  "cb.it",
  "ce.it",
  "cesena-forli.it",
  "cesena-forlì.it",
  "cesenaforli.it",
  "cesenaforlì.it",
  "ch.it",
  "chieti.it",
  "ci.it",
  "cl.it",
  "cn.it",
  "co.it",
  "como.it",
  "cosenza.it",
  "cr.it",
  "cremona.it",
  "crotone.it",
  "cs.it",
  "ct.it",
  "cuneo.it",
  "cz.it",
  "dell-ogliastra.it",
  "dellogliastra.it",
  "en.it",
  "enna.it",
  "fc.it",
  "fe.it",
  "fermo.it",
  "ferrara.it",
  "fg.it",
  "fi.it",
  "firenze.it",
  "florence.it",
  "fm.it",
  "foggia.it",
  "forli-cesena.it",
  "forlì-cesena.it",
  "forlicesena.it",
  "forlìcesena.it",
  "fr.it",
  "frosinone.it",
  "ge.it",
  "genoa.it",
  "genova.it",
  "go.it",
  "gorizia.it",
  "gr.it",
  "grosseto.it",
  "iglesias-carbonia.it",
  "iglesiascarbonia.it",
  "im.it",
  "imperia.it",
  "is.it",
  "isernia.it",
  "kr.it",
  "la-spezia.it",
  "laquila.it",
  "laspezia.it",
  "latina.it",
  "lc.it",
  "le.it",
  "lecce.it",
  "lecco.it",
  "li.it",
  "livorno.it",
  "lo.it",
  "lodi.it",
  "lt.it",
  "lu.it",
  "lucca.it",
  "macerata.it",
  "mantova.it",
  "massa-carrara.it",
  "massacarrara.it",
  "matera.it",
  "mb.it",
  "mc.it",
  "me.it",
  "medio-campidano.it",
  "mediocampidano.it",
  "messina.it",
  "mi.it",
  "milan.it",
  "milano.it",
  "mn.it",
  "mo.it",
  "modena.it",
  "monza-brianza.it",
  "monza-e-della-brianza.it",
  "monza.it",
  "monzabrianza.it",
  "monzaebrianza.it",
  "monzaedellabrianza.it",
  "ms.it",
  "mt.it",
  "na.it",
  "naples.it",
  "napoli.it",
  "no.it",
  "novara.it",
  "nu.it",
  "nuoro.it",
  "og.it",
  "ogliastra.it",
  "olbia-tempio.it",
  "olbiatempio.it",
  "or.it",
  "oristano.it",
  "ot.it",
  "pa.it",
  "padova.it",
  "padua.it",
  "palermo.it",
  "parma.it",
  "pavia.it",
  "pc.it",
  "pd.it",
  "pe.it",
  "perugia.it",
  "pesaro-urbino.it",
  "pesarourbino.it",
  "pescara.it",
  "pg.it",
  "pi.it",
  "piacenza.it",
  "pisa.it",
  "pistoia.it",
  "pn.it",
  "po.it",
  "pordenone.it",
  "potenza.it",
  "pr.it",
  "prato.it",
  "pt.it",
  "pu.it",
  "pv.it",
  "pz.it",
  "ra.it",
  "ragusa.it",
  "ravenna.it",
  "rc.it",
  "re.it",
  "reggio-calabria.it",
  "reggio-emilia.it",
  "reggiocalabria.it",
  "reggioemilia.it",
  "rg.it",
  "ri.it",
  "rieti.it",
  "rimini.it",
  "rm.it",
  "rn.it",
  "ro.it",
  "roma.it",
  "rome.it",
  "rovigo.it",
  "sa.it",
  "salerno.it",
  "sassari.it",
  "savona.it",
  "si.it",
  "siena.it",
  "siracusa.it",
  "so.it",
  "sondrio.it",
  "sp.it",
  "sr.it",
  "ss.it",
  "suedtirol.it",
  "südtirol.it",
  "sv.it",
  "ta.it",
  "taranto.it",
  "te.it",
  "tempio-olbia.it",
  "tempioolbia.it",
  "teramo.it",
  "terni.it",
  "tn.it",
  "to.it",
  "torino.it",
  "tp.it",
  "tr.it",
  "trani-andria-barletta.it",
  "trani-barletta-andria.it",
  "traniandriabarletta.it",
  "tranibarlettaandria.it",
  "trapani.it",
  "trento.it",
  "treviso.it",
  "trieste.it",
  "ts.it",
  "turin.it",
  "tv.it",
  "ud.it",
  "udine.it",
  "urbino-pesaro.it",
  "urbinopesaro.it",
  "va.it",
  "varese.it",
  "vb.it",
  "vc.it",
  "ve.it",
  "venezia.it",
  "venice.it",
  "verbania.it",
  "vercelli.it",
  "verona.it",
  "vi.it",
  "vibo-valentia.it",
  "vibovalentia.it",
  "vicenza.it",
  "viterbo.it",
  "vr.it",
  "vs.it",
  "vt.it",
  "vv.it",
  "je",
  "co.je",
  "net.je",
  "org.je",
  "*.jm",
  "jo",
  "com.jo",
  "org.jo",
  "net.jo",
  "edu.jo",
  "sch.jo",
  "gov.jo",
  "mil.jo",
  "name.jo",
  "jobs",
  "jp",
  "ac.jp",
  "ad.jp",
  "co.jp",
  "ed.jp",
  "go.jp",
  "gr.jp",
  "lg.jp",
  "ne.jp",
  "or.jp",
  "aichi.jp",
  "akita.jp",
  "aomori.jp",
  "chiba.jp",
  "ehime.jp",
  "fukui.jp",
  "fukuoka.jp",
  "fukushima.jp",
  "gifu.jp",
  "gunma.jp",
  "hiroshima.jp",
  "hokkaido.jp",
  "hyogo.jp",
  "ibaraki.jp",
  "ishikawa.jp",
  "iwate.jp",
  "kagawa.jp",
  "kagoshima.jp",
  "kanagawa.jp",
  "kochi.jp",
  "kumamoto.jp",
  "kyoto.jp",
  "mie.jp",
  "miyagi.jp",
  "miyazaki.jp",
  "nagano.jp",
  "nagasaki.jp",
  "nara.jp",
  "niigata.jp",
  "oita.jp",
  "okayama.jp",
  "okinawa.jp",
  "osaka.jp",
  "saga.jp",
  "saitama.jp",
  "shiga.jp",
  "shimane.jp",
  "shizuoka.jp",
  "tochigi.jp",
  "tokushima.jp",
  "tokyo.jp",
  "tottori.jp",
  "toyama.jp",
  "wakayama.jp",
  "yamagata.jp",
  "yamaguchi.jp",
  "yamanashi.jp",
  "栃木.jp",
  "愛知.jp",
  "愛媛.jp",
  "兵庫.jp",
  "熊本.jp",
  "茨城.jp",
  "北海道.jp",
  "千葉.jp",
  "和歌山.jp",
  "長崎.jp",
  "長野.jp",
  "新潟.jp",
  "青森.jp",
  "静岡.jp",
  "東京.jp",
  "石川.jp",
  "埼玉.jp",
  "三重.jp",
  "京都.jp",
  "佐賀.jp",
  "大分.jp",
  "大阪.jp",
  "奈良.jp",
  "宮城.jp",
  "宮崎.jp",
  "富山.jp",
  "山口.jp",
  "山形.jp",
  "山梨.jp",
  "岩手.jp",
  "岐阜.jp",
  "岡山.jp",
  "島根.jp",
  "広島.jp",
  "徳島.jp",
  "沖縄.jp",
  "滋賀.jp",
  "神奈川.jp",
  "福井.jp",
  "福岡.jp",
  "福島.jp",
  "秋田.jp",
  "群馬.jp",
  "香川.jp",
  "高知.jp",
  "鳥取.jp",
  "鹿児島.jp",
  "*.kawasaki.jp",
  "*.kitakyushu.jp",
  "*.kobe.jp",
  "*.nagoya.jp",
  "*.sapporo.jp",
  "*.sendai.jp",
  "*.yokohama.jp",
  "!city.kawasaki.jp",
  "!city.kitakyushu.jp",
  "!city.kobe.jp",
  "!city.nagoya.jp",
  "!city.sapporo.jp",
  "!city.sendai.jp",
  "!city.yokohama.jp",
  "aisai.aichi.jp",
  "ama.aichi.jp",
  "anjo.aichi.jp",
  "asuke.aichi.jp",
  "chiryu.aichi.jp",
  "chita.aichi.jp",
  "fuso.aichi.jp",
  "gamagori.aichi.jp",
  "handa.aichi.jp",
  "hazu.aichi.jp",
  "hekinan.aichi.jp",
  "higashiura.aichi.jp",
  "ichinomiya.aichi.jp",
  "inazawa.aichi.jp",
  "inuyama.aichi.jp",
  "isshiki.aichi.jp",
  "iwakura.aichi.jp",
  "kanie.aichi.jp",
  "kariya.aichi.jp",
  "kasugai.aichi.jp",
  "kira.aichi.jp",
  "kiyosu.aichi.jp",
  "komaki.aichi.jp",
  "konan.aichi.jp",
  "kota.aichi.jp",
  "mihama.aichi.jp",
  "miyoshi.aichi.jp",
  "nishio.aichi.jp",
  "nisshin.aichi.jp",
  "obu.aichi.jp",
  "oguchi.aichi.jp",
  "oharu.aichi.jp",
  "okazaki.aichi.jp",
  "owariasahi.aichi.jp",
  "seto.aichi.jp",
  "shikatsu.aichi.jp",
  "shinshiro.aichi.jp",
  "shitara.aichi.jp",
  "tahara.aichi.jp",
  "takahama.aichi.jp",
  "tobishima.aichi.jp",
  "toei.aichi.jp",
  "togo.aichi.jp",
  "tokai.aichi.jp",
  "tokoname.aichi.jp",
  "toyoake.aichi.jp",
  "toyohashi.aichi.jp",
  "toyokawa.aichi.jp",
  "toyone.aichi.jp",
  "toyota.aichi.jp",
  "tsushima.aichi.jp",
  "yatomi.aichi.jp",
  "akita.akita.jp",
  "daisen.akita.jp",
  "fujisato.akita.jp",
  "gojome.akita.jp",
  "hachirogata.akita.jp",
  "happou.akita.jp",
  "higashinaruse.akita.jp",
  "honjo.akita.jp",
  "honjyo.akita.jp",
  "ikawa.akita.jp",
  "kamikoani.akita.jp",
  "kamioka.akita.jp",
  "katagami.akita.jp",
  "kazuno.akita.jp",
  "kitaakita.akita.jp",
  "kosaka.akita.jp",
  "kyowa.akita.jp",
  "misato.akita.jp",
  "mitane.akita.jp",
  "moriyoshi.akita.jp",
  "nikaho.akita.jp",
  "noshiro.akita.jp",
  "odate.akita.jp",
  "oga.akita.jp",
  "ogata.akita.jp",
  "semboku.akita.jp",
  "yokote.akita.jp",
  "yurihonjo.akita.jp",
  "aomori.aomori.jp",
  "gonohe.aomori.jp",
  "hachinohe.aomori.jp",
  "hashikami.aomori.jp",
  "hiranai.aomori.jp",
  "hirosaki.aomori.jp",
  "itayanagi.aomori.jp",
  "kuroishi.aomori.jp",
  "misawa.aomori.jp",
  "mutsu.aomori.jp",
  "nakadomari.aomori.jp",
  "noheji.aomori.jp",
  "oirase.aomori.jp",
  "owani.aomori.jp",
  "rokunohe.aomori.jp",
  "sannohe.aomori.jp",
  "shichinohe.aomori.jp",
  "shingo.aomori.jp",
  "takko.aomori.jp",
  "towada.aomori.jp",
  "tsugaru.aomori.jp",
  "tsuruta.aomori.jp",
  "abiko.chiba.jp",
  "asahi.chiba.jp",
  "chonan.chiba.jp",
  "chosei.chiba.jp",
  "choshi.chiba.jp",
  "chuo.chiba.jp",
  "funabashi.chiba.jp",
  "futtsu.chiba.jp",
  "hanamigawa.chiba.jp",
  "ichihara.chiba.jp",
  "ichikawa.chiba.jp",
  "ichinomiya.chiba.jp",
  "inzai.chiba.jp",
  "isumi.chiba.jp",
  "kamagaya.chiba.jp",
  "kamogawa.chiba.jp",
  "kashiwa.chiba.jp",
  "katori.chiba.jp",
  "katsuura.chiba.jp",
  "kimitsu.chiba.jp",
  "kisarazu.chiba.jp",
  "kozaki.chiba.jp",
  "kujukuri.chiba.jp",
  "kyonan.chiba.jp",
  "matsudo.chiba.jp",
  "midori.chiba.jp",
  "mihama.chiba.jp",
  "minamiboso.chiba.jp",
  "mobara.chiba.jp",
  "mutsuzawa.chiba.jp",
  "nagara.chiba.jp",
  "nagareyama.chiba.jp",
  "narashino.chiba.jp",
  "narita.chiba.jp",
  "noda.chiba.jp",
  "oamishirasato.chiba.jp",
  "omigawa.chiba.jp",
  "onjuku.chiba.jp",
  "otaki.chiba.jp",
  "sakae.chiba.jp",
  "sakura.chiba.jp",
  "shimofusa.chiba.jp",
  "shirako.chiba.jp",
  "shiroi.chiba.jp",
  "shisui.chiba.jp",
  "sodegaura.chiba.jp",
  "sosa.chiba.jp",
  "tako.chiba.jp",
  "tateyama.chiba.jp",
  "togane.chiba.jp",
  "tohnosho.chiba.jp",
  "tomisato.chiba.jp",
  "urayasu.chiba.jp",
  "yachimata.chiba.jp",
  "yachiyo.chiba.jp",
  "yokaichiba.chiba.jp",
  "yokoshibahikari.chiba.jp",
  "yotsukaido.chiba.jp",
  "ainan.ehime.jp",
  "honai.ehime.jp",
  "ikata.ehime.jp",
  "imabari.ehime.jp",
  "iyo.ehime.jp",
  "kamijima.ehime.jp",
  "kihoku.ehime.jp",
  "kumakogen.ehime.jp",
  "masaki.ehime.jp",
  "matsuno.ehime.jp",
  "matsuyama.ehime.jp",
  "namikata.ehime.jp",
  "niihama.ehime.jp",
  "ozu.ehime.jp",
  "saijo.ehime.jp",
  "seiyo.ehime.jp",
  "shikokuchuo.ehime.jp",
  "tobe.ehime.jp",
  "toon.ehime.jp",
  "uchiko.ehime.jp",
  "uwajima.ehime.jp",
  "yawatahama.ehime.jp",
  "echizen.fukui.jp",
  "eiheiji.fukui.jp",
  "fukui.fukui.jp",
  "ikeda.fukui.jp",
  "katsuyama.fukui.jp",
  "mihama.fukui.jp",
  "minamiechizen.fukui.jp",
  "obama.fukui.jp",
  "ohi.fukui.jp",
  "ono.fukui.jp",
  "sabae.fukui.jp",
  "sakai.fukui.jp",
  "takahama.fukui.jp",
  "tsuruga.fukui.jp",
  "wakasa.fukui.jp",
  "ashiya.fukuoka.jp",
  "buzen.fukuoka.jp",
  "chikugo.fukuoka.jp",
  "chikuho.fukuoka.jp",
  "chikujo.fukuoka.jp",
  "chikushino.fukuoka.jp",
  "chikuzen.fukuoka.jp",
  "chuo.fukuoka.jp",
  "dazaifu.fukuoka.jp",
  "fukuchi.fukuoka.jp",
  "hakata.fukuoka.jp",
  "higashi.fukuoka.jp",
  "hirokawa.fukuoka.jp",
  "hisayama.fukuoka.jp",
  "iizuka.fukuoka.jp",
  "inatsuki.fukuoka.jp",
  "kaho.fukuoka.jp",
  "kasuga.fukuoka.jp",
  "kasuya.fukuoka.jp",
  "kawara.fukuoka.jp",
  "keisen.fukuoka.jp",
  "koga.fukuoka.jp",
  "kurate.fukuoka.jp",
  "kurogi.fukuoka.jp",
  "kurume.fukuoka.jp",
  "minami.fukuoka.jp",
  "miyako.fukuoka.jp",
  "miyama.fukuoka.jp",
  "miyawaka.fukuoka.jp",
  "mizumaki.fukuoka.jp",
  "munakata.fukuoka.jp",
  "nakagawa.fukuoka.jp",
  "nakama.fukuoka.jp",
  "nishi.fukuoka.jp",
  "nogata.fukuoka.jp",
  "ogori.fukuoka.jp",
  "okagaki.fukuoka.jp",
  "okawa.fukuoka.jp",
  "oki.fukuoka.jp",
  "omuta.fukuoka.jp",
  "onga.fukuoka.jp",
  "onojo.fukuoka.jp",
  "oto.fukuoka.jp",
  "saigawa.fukuoka.jp",
  "sasaguri.fukuoka.jp",
  "shingu.fukuoka.jp",
  "shinyoshitomi.fukuoka.jp",
  "shonai.fukuoka.jp",
  "soeda.fukuoka.jp",
  "sue.fukuoka.jp",
  "tachiarai.fukuoka.jp",
  "tagawa.fukuoka.jp",
  "takata.fukuoka.jp",
  "toho.fukuoka.jp",
  "toyotsu.fukuoka.jp",
  "tsuiki.fukuoka.jp",
  "ukiha.fukuoka.jp",
  "umi.fukuoka.jp",
  "usui.fukuoka.jp",
  "yamada.fukuoka.jp",
  "yame.fukuoka.jp",
  "yanagawa.fukuoka.jp",
  "yukuhashi.fukuoka.jp",
  "aizubange.fukushima.jp",
  "aizumisato.fukushima.jp",
  "aizuwakamatsu.fukushima.jp",
  "asakawa.fukushima.jp",
  "bandai.fukushima.jp",
  "date.fukushima.jp",
  "fukushima.fukushima.jp",
  "furudono.fukushima.jp",
  "futaba.fukushima.jp",
  "hanawa.fukushima.jp",
  "higashi.fukushima.jp",
  "hirata.fukushima.jp",
  "hirono.fukushima.jp",
  "iitate.fukushima.jp",
  "inawashiro.fukushima.jp",
  "ishikawa.fukushima.jp",
  "iwaki.fukushima.jp",
  "izumizaki.fukushima.jp",
  "kagamiishi.fukushima.jp",
  "kaneyama.fukushima.jp",
  "kawamata.fukushima.jp",
  "kitakata.fukushima.jp",
  "kitashiobara.fukushima.jp",
  "koori.fukushima.jp",
  "koriyama.fukushima.jp",
  "kunimi.fukushima.jp",
  "miharu.fukushima.jp",
  "mishima.fukushima.jp",
  "namie.fukushima.jp",
  "nango.fukushima.jp",
  "nishiaizu.fukushima.jp",
  "nishigo.fukushima.jp",
  "okuma.fukushima.jp",
  "omotego.fukushima.jp",
  "ono.fukushima.jp",
  "otama.fukushima.jp",
  "samegawa.fukushima.jp",
  "shimogo.fukushima.jp",
  "shirakawa.fukushima.jp",
  "showa.fukushima.jp",
  "soma.fukushima.jp",
  "sukagawa.fukushima.jp",
  "taishin.fukushima.jp",
  "tamakawa.fukushima.jp",
  "tanagura.fukushima.jp",
  "tenei.fukushima.jp",
  "yabuki.fukushima.jp",
  "yamato.fukushima.jp",
  "yamatsuri.fukushima.jp",
  "yanaizu.fukushima.jp",
  "yugawa.fukushima.jp",
  "anpachi.gifu.jp",
  "ena.gifu.jp",
  "gifu.gifu.jp",
  "ginan.gifu.jp",
  "godo.gifu.jp",
  "gujo.gifu.jp",
  "hashima.gifu.jp",
  "hichiso.gifu.jp",
  "hida.gifu.jp",
  "higashishirakawa.gifu.jp",
  "ibigawa.gifu.jp",
  "ikeda.gifu.jp",
  "kakamigahara.gifu.jp",
  "kani.gifu.jp",
  "kasahara.gifu.jp",
  "kasamatsu.gifu.jp",
  "kawaue.gifu.jp",
  "kitagata.gifu.jp",
  "mino.gifu.jp",
  "minokamo.gifu.jp",
  "mitake.gifu.jp",
  "mizunami.gifu.jp",
  "motosu.gifu.jp",
  "nakatsugawa.gifu.jp",
  "ogaki.gifu.jp",
  "sakahogi.gifu.jp",
  "seki.gifu.jp",
  "sekigahara.gifu.jp",
  "shirakawa.gifu.jp",
  "tajimi.gifu.jp",
  "takayama.gifu.jp",
  "tarui.gifu.jp",
  "toki.gifu.jp",
  "tomika.gifu.jp",
  "wanouchi.gifu.jp",
  "yamagata.gifu.jp",
  "yaotsu.gifu.jp",
  "yoro.gifu.jp",
  "annaka.gunma.jp",
  "chiyoda.gunma.jp",
  "fujioka.gunma.jp",
  "higashiagatsuma.gunma.jp",
  "isesaki.gunma.jp",
  "itakura.gunma.jp",
  "kanna.gunma.jp",
  "kanra.gunma.jp",
  "katashina.gunma.jp",
  "kawaba.gunma.jp",
  "kiryu.gunma.jp",
  "kusatsu.gunma.jp",
  "maebashi.gunma.jp",
  "meiwa.gunma.jp",
  "midori.gunma.jp",
  "minakami.gunma.jp",
  "naganohara.gunma.jp",
  "nakanojo.gunma.jp",
  "nanmoku.gunma.jp",
  "numata.gunma.jp",
  "oizumi.gunma.jp",
  "ora.gunma.jp",
  "ota.gunma.jp",
  "shibukawa.gunma.jp",
  "shimonita.gunma.jp",
  "shinto.gunma.jp",
  "showa.gunma.jp",
  "takasaki.gunma.jp",
  "takayama.gunma.jp",
  "tamamura.gunma.jp",
  "tatebayashi.gunma.jp",
  "tomioka.gunma.jp",
  "tsukiyono.gunma.jp",
  "tsumagoi.gunma.jp",
  "ueno.gunma.jp",
  "yoshioka.gunma.jp",
  "asaminami.hiroshima.jp",
  "daiwa.hiroshima.jp",
  "etajima.hiroshima.jp",
  "fuchu.hiroshima.jp",
  "fukuyama.hiroshima.jp",
  "hatsukaichi.hiroshima.jp",
  "higashihiroshima.hiroshima.jp",
  "hongo.hiroshima.jp",
  "jinsekikogen.hiroshima.jp",
  "kaita.hiroshima.jp",
  "kui.hiroshima.jp",
  "kumano.hiroshima.jp",
  "kure.hiroshima.jp",
  "mihara.hiroshima.jp",
  "miyoshi.hiroshima.jp",
  "naka.hiroshima.jp",
  "onomichi.hiroshima.jp",
  "osakikamijima.hiroshima.jp",
  "otake.hiroshima.jp",
  "saka.hiroshima.jp",
  "sera.hiroshima.jp",
  "seranishi.hiroshima.jp",
  "shinichi.hiroshima.jp",
  "shobara.hiroshima.jp",
  "takehara.hiroshima.jp",
  "abashiri.hokkaido.jp",
  "abira.hokkaido.jp",
  "aibetsu.hokkaido.jp",
  "akabira.hokkaido.jp",
  "akkeshi.hokkaido.jp",
  "asahikawa.hokkaido.jp",
  "ashibetsu.hokkaido.jp",
  "ashoro.hokkaido.jp",
  "assabu.hokkaido.jp",
  "atsuma.hokkaido.jp",
  "bibai.hokkaido.jp",
  "biei.hokkaido.jp",
  "bifuka.hokkaido.jp",
  "bihoro.hokkaido.jp",
  "biratori.hokkaido.jp",
  "chippubetsu.hokkaido.jp",
  "chitose.hokkaido.jp",
  "date.hokkaido.jp",
  "ebetsu.hokkaido.jp",
  "embetsu.hokkaido.jp",
  "eniwa.hokkaido.jp",
  "erimo.hokkaido.jp",
  "esan.hokkaido.jp",
  "esashi.hokkaido.jp",
  "fukagawa.hokkaido.jp",
  "fukushima.hokkaido.jp",
  "furano.hokkaido.jp",
  "furubira.hokkaido.jp",
  "haboro.hokkaido.jp",
  "hakodate.hokkaido.jp",
  "hamatonbetsu.hokkaido.jp",
  "hidaka.hokkaido.jp",
  "higashikagura.hokkaido.jp",
  "higashikawa.hokkaido.jp",
  "hiroo.hokkaido.jp",
  "hokuryu.hokkaido.jp",
  "hokuto.hokkaido.jp",
  "honbetsu.hokkaido.jp",
  "horokanai.hokkaido.jp",
  "horonobe.hokkaido.jp",
  "ikeda.hokkaido.jp",
  "imakane.hokkaido.jp",
  "ishikari.hokkaido.jp",
  "iwamizawa.hokkaido.jp",
  "iwanai.hokkaido.jp",
  "kamifurano.hokkaido.jp",
  "kamikawa.hokkaido.jp",
  "kamishihoro.hokkaido.jp",
  "kamisunagawa.hokkaido.jp",
  "kamoenai.hokkaido.jp",
  "kayabe.hokkaido.jp",
  "kembuchi.hokkaido.jp",
  "kikonai.hokkaido.jp",
  "kimobetsu.hokkaido.jp",
  "kitahiroshima.hokkaido.jp",
  "kitami.hokkaido.jp",
  "kiyosato.hokkaido.jp",
  "koshimizu.hokkaido.jp",
  "kunneppu.hokkaido.jp",
  "kuriyama.hokkaido.jp",
  "kuromatsunai.hokkaido.jp",
  "kushiro.hokkaido.jp",
  "kutchan.hokkaido.jp",
  "kyowa.hokkaido.jp",
  "mashike.hokkaido.jp",
  "matsumae.hokkaido.jp",
  "mikasa.hokkaido.jp",
  "minamifurano.hokkaido.jp",
  "mombetsu.hokkaido.jp",
  "moseushi.hokkaido.jp",
  "mukawa.hokkaido.jp",
  "muroran.hokkaido.jp",
  "naie.hokkaido.jp",
  "nakagawa.hokkaido.jp",
  "nakasatsunai.hokkaido.jp",
  "nakatombetsu.hokkaido.jp",
  "nanae.hokkaido.jp",
  "nanporo.hokkaido.jp",
  "nayoro.hokkaido.jp",
  "nemuro.hokkaido.jp",
  "niikappu.hokkaido.jp",
  "niki.hokkaido.jp",
  "nishiokoppe.hokkaido.jp",
  "noboribetsu.hokkaido.jp",
  "numata.hokkaido.jp",
  "obihiro.hokkaido.jp",
  "obira.hokkaido.jp",
  "oketo.hokkaido.jp",
  "okoppe.hokkaido.jp",
  "otaru.hokkaido.jp",
  "otobe.hokkaido.jp",
  "otofuke.hokkaido.jp",
  "otoineppu.hokkaido.jp",
  "oumu.hokkaido.jp",
  "ozora.hokkaido.jp",
  "pippu.hokkaido.jp",
  "rankoshi.hokkaido.jp",
  "rebun.hokkaido.jp",
  "rikubetsu.hokkaido.jp",
  "rishiri.hokkaido.jp",
  "rishirifuji.hokkaido.jp",
  "saroma.hokkaido.jp",
  "sarufutsu.hokkaido.jp",
  "shakotan.hokkaido.jp",
  "shari.hokkaido.jp",
  "shibecha.hokkaido.jp",
  "shibetsu.hokkaido.jp",
  "shikabe.hokkaido.jp",
  "shikaoi.hokkaido.jp",
  "shimamaki.hokkaido.jp",
  "shimizu.hokkaido.jp",
  "shimokawa.hokkaido.jp",
  "shinshinotsu.hokkaido.jp",
  "shintoku.hokkaido.jp",
  "shiranuka.hokkaido.jp",
  "shiraoi.hokkaido.jp",
  "shiriuchi.hokkaido.jp",
  "sobetsu.hokkaido.jp",
  "sunagawa.hokkaido.jp",
  "taiki.hokkaido.jp",
  "takasu.hokkaido.jp",
  "takikawa.hokkaido.jp",
  "takinoue.hokkaido.jp",
  "teshikaga.hokkaido.jp",
  "tobetsu.hokkaido.jp",
  "tohma.hokkaido.jp",
  "tomakomai.hokkaido.jp",
  "tomari.hokkaido.jp",
  "toya.hokkaido.jp",
  "toyako.hokkaido.jp",
  "toyotomi.hokkaido.jp",
  "toyoura.hokkaido.jp",
  "tsubetsu.hokkaido.jp",
  "tsukigata.hokkaido.jp",
  "urakawa.hokkaido.jp",
  "urausu.hokkaido.jp",
  "uryu.hokkaido.jp",
  "utashinai.hokkaido.jp",
  "wakkanai.hokkaido.jp",
  "wassamu.hokkaido.jp",
  "yakumo.hokkaido.jp",
  "yoichi.hokkaido.jp",
  "aioi.hyogo.jp",
  "akashi.hyogo.jp",
  "ako.hyogo.jp",
  "amagasaki.hyogo.jp",
  "aogaki.hyogo.jp",
  "asago.hyogo.jp",
  "ashiya.hyogo.jp",
  "awaji.hyogo.jp",
  "fukusaki.hyogo.jp",
  "goshiki.hyogo.jp",
  "harima.hyogo.jp",
  "himeji.hyogo.jp",
  "ichikawa.hyogo.jp",
  "inagawa.hyogo.jp",
  "itami.hyogo.jp",
  "kakogawa.hyogo.jp",
  "kamigori.hyogo.jp",
  "kamikawa.hyogo.jp",
  "kasai.hyogo.jp",
  "kasuga.hyogo.jp",
  "kawanishi.hyogo.jp",
  "miki.hyogo.jp",
  "minamiawaji.hyogo.jp",
  "nishinomiya.hyogo.jp",
  "nishiwaki.hyogo.jp",
  "ono.hyogo.jp",
  "sanda.hyogo.jp",
  "sannan.hyogo.jp",
  "sasayama.hyogo.jp",
  "sayo.hyogo.jp",
  "shingu.hyogo.jp",
  "shinonsen.hyogo.jp",
  "shiso.hyogo.jp",
  "sumoto.hyogo.jp",
  "taishi.hyogo.jp",
  "taka.hyogo.jp",
  "takarazuka.hyogo.jp",
  "takasago.hyogo.jp",
  "takino.hyogo.jp",
  "tamba.hyogo.jp",
  "tatsuno.hyogo.jp",
  "toyooka.hyogo.jp",
  "yabu.hyogo.jp",
  "yashiro.hyogo.jp",
  "yoka.hyogo.jp",
  "yokawa.hyogo.jp",
  "ami.ibaraki.jp",
  "asahi.ibaraki.jp",
  "bando.ibaraki.jp",
  "chikusei.ibaraki.jp",
  "daigo.ibaraki.jp",
  "fujishiro.ibaraki.jp",
  "hitachi.ibaraki.jp",
  "hitachinaka.ibaraki.jp",
  "hitachiomiya.ibaraki.jp",
  "hitachiota.ibaraki.jp",
  "ibaraki.ibaraki.jp",
  "ina.ibaraki.jp",
  "inashiki.ibaraki.jp",
  "itako.ibaraki.jp",
  "iwama.ibaraki.jp",
  "joso.ibaraki.jp",
  "kamisu.ibaraki.jp",
  "kasama.ibaraki.jp",
  "kashima.ibaraki.jp",
  "kasumigaura.ibaraki.jp",
  "koga.ibaraki.jp",
  "miho.ibaraki.jp",
  "mito.ibaraki.jp",
  "moriya.ibaraki.jp",
  "naka.ibaraki.jp",
  "namegata.ibaraki.jp",
  "oarai.ibaraki.jp",
  "ogawa.ibaraki.jp",
  "omitama.ibaraki.jp",
  "ryugasaki.ibaraki.jp",
  "sakai.ibaraki.jp",
  "sakuragawa.ibaraki.jp",
  "shimodate.ibaraki.jp",
  "shimotsuma.ibaraki.jp",
  "shirosato.ibaraki.jp",
  "sowa.ibaraki.jp",
  "suifu.ibaraki.jp",
  "takahagi.ibaraki.jp",
  "tamatsukuri.ibaraki.jp",
  "tokai.ibaraki.jp",
  "tomobe.ibaraki.jp",
  "tone.ibaraki.jp",
  "toride.ibaraki.jp",
  "tsuchiura.ibaraki.jp",
  "tsukuba.ibaraki.jp",
  "uchihara.ibaraki.jp",
  "ushiku.ibaraki.jp",
  "yachiyo.ibaraki.jp",
  "yamagata.ibaraki.jp",
  "yawara.ibaraki.jp",
  "yuki.ibaraki.jp",
  "anamizu.ishikawa.jp",
  "hakui.ishikawa.jp",
  "hakusan.ishikawa.jp",
  "kaga.ishikawa.jp",
  "kahoku.ishikawa.jp",
  "kanazawa.ishikawa.jp",
  "kawakita.ishikawa.jp",
  "komatsu.ishikawa.jp",
  "nakanoto.ishikawa.jp",
  "nanao.ishikawa.jp",
  "nomi.ishikawa.jp",
  "nonoichi.ishikawa.jp",
  "noto.ishikawa.jp",
  "shika.ishikawa.jp",
  "suzu.ishikawa.jp",
  "tsubata.ishikawa.jp",
  "tsurugi.ishikawa.jp",
  "uchinada.ishikawa.jp",
  "wajima.ishikawa.jp",
  "fudai.iwate.jp",
  "fujisawa.iwate.jp",
  "hanamaki.iwate.jp",
  "hiraizumi.iwate.jp",
  "hirono.iwate.jp",
  "ichinohe.iwate.jp",
  "ichinoseki.iwate.jp",
  "iwaizumi.iwate.jp",
  "iwate.iwate.jp",
  "joboji.iwate.jp",
  "kamaishi.iwate.jp",
  "kanegasaki.iwate.jp",
  "karumai.iwate.jp",
  "kawai.iwate.jp",
  "kitakami.iwate.jp",
  "kuji.iwate.jp",
  "kunohe.iwate.jp",
  "kuzumaki.iwate.jp",
  "miyako.iwate.jp",
  "mizusawa.iwate.jp",
  "morioka.iwate.jp",
  "ninohe.iwate.jp",
  "noda.iwate.jp",
  "ofunato.iwate.jp",
  "oshu.iwate.jp",
  "otsuchi.iwate.jp",
  "rikuzentakata.iwate.jp",
  "shiwa.iwate.jp",
  "shizukuishi.iwate.jp",
  "sumita.iwate.jp",
  "tanohata.iwate.jp",
  "tono.iwate.jp",
  "yahaba.iwate.jp",
  "yamada.iwate.jp",
  "ayagawa.kagawa.jp",
  "higashikagawa.kagawa.jp",
  "kanonji.kagawa.jp",
  "kotohira.kagawa.jp",
  "manno.kagawa.jp",
  "marugame.kagawa.jp",
  "mitoyo.kagawa.jp",
  "naoshima.kagawa.jp",
  "sanuki.kagawa.jp",
  "tadotsu.kagawa.jp",
  "takamatsu.kagawa.jp",
  "tonosho.kagawa.jp",
  "uchinomi.kagawa.jp",
  "utazu.kagawa.jp",
  "zentsuji.kagawa.jp",
  "akune.kagoshima.jp",
  "amami.kagoshima.jp",
  "hioki.kagoshima.jp",
  "isa.kagoshima.jp",
  "isen.kagoshima.jp",
  "izumi.kagoshima.jp",
  "kagoshima.kagoshima.jp",
  "kanoya.kagoshima.jp",
  "kawanabe.kagoshima.jp",
  "kinko.kagoshima.jp",
  "kouyama.kagoshima.jp",
  "makurazaki.kagoshima.jp",
  "matsumoto.kagoshima.jp",
  "minamitane.kagoshima.jp",
  "nakatane.kagoshima.jp",
  "nishinoomote.kagoshima.jp",
  "satsumasendai.kagoshima.jp",
  "soo.kagoshima.jp",
  "tarumizu.kagoshima.jp",
  "yusui.kagoshima.jp",
  "aikawa.kanagawa.jp",
  "atsugi.kanagawa.jp",
  "ayase.kanagawa.jp",
  "chigasaki.kanagawa.jp",
  "ebina.kanagawa.jp",
  "fujisawa.kanagawa.jp",
  "hadano.kanagawa.jp",
  "hakone.kanagawa.jp",
  "hiratsuka.kanagawa.jp",
  "isehara.kanagawa.jp",
  "kaisei.kanagawa.jp",
  "kamakura.kanagawa.jp",
  "kiyokawa.kanagawa.jp",
  "matsuda.kanagawa.jp",
  "minamiashigara.kanagawa.jp",
  "miura.kanagawa.jp",
  "nakai.kanagawa.jp",
  "ninomiya.kanagawa.jp",
  "odawara.kanagawa.jp",
  "oi.kanagawa.jp",
  "oiso.kanagawa.jp",
  "sagamihara.kanagawa.jp",
  "samukawa.kanagawa.jp",
  "tsukui.kanagawa.jp",
  "yamakita.kanagawa.jp",
  "yamato.kanagawa.jp",
  "yokosuka.kanagawa.jp",
  "yugawara.kanagawa.jp",
  "zama.kanagawa.jp",
  "zushi.kanagawa.jp",
  "aki.kochi.jp",
  "geisei.kochi.jp",
  "hidaka.kochi.jp",
  "higashitsuno.kochi.jp",
  "ino.kochi.jp",
  "kagami.kochi.jp",
  "kami.kochi.jp",
  "kitagawa.kochi.jp",
  "kochi.kochi.jp",
  "mihara.kochi.jp",
  "motoyama.kochi.jp",
  "muroto.kochi.jp",
  "nahari.kochi.jp",
  "nakamura.kochi.jp",
  "nankoku.kochi.jp",
  "nishitosa.kochi.jp",
  "niyodogawa.kochi.jp",
  "ochi.kochi.jp",
  "okawa.kochi.jp",
  "otoyo.kochi.jp",
  "otsuki.kochi.jp",
  "sakawa.kochi.jp",
  "sukumo.kochi.jp",
  "susaki.kochi.jp",
  "tosa.kochi.jp",
  "tosashimizu.kochi.jp",
  "toyo.kochi.jp",
  "tsuno.kochi.jp",
  "umaji.kochi.jp",
  "yasuda.kochi.jp",
  "yusuhara.kochi.jp",
  "amakusa.kumamoto.jp",
  "arao.kumamoto.jp",
  "aso.kumamoto.jp",
  "choyo.kumamoto.jp",
  "gyokuto.kumamoto.jp",
  "kamiamakusa.kumamoto.jp",
  "kikuchi.kumamoto.jp",
  "kumamoto.kumamoto.jp",
  "mashiki.kumamoto.jp",
  "mifune.kumamoto.jp",
  "minamata.kumamoto.jp",
  "minamioguni.kumamoto.jp",
  "nagasu.kumamoto.jp",
  "nishihara.kumamoto.jp",
  "oguni.kumamoto.jp",
  "ozu.kumamoto.jp",
  "sumoto.kumamoto.jp",
  "takamori.kumamoto.jp",
  "uki.kumamoto.jp",
  "uto.kumamoto.jp",
  "yamaga.kumamoto.jp",
  "yamato.kumamoto.jp",
  "yatsushiro.kumamoto.jp",
  "ayabe.kyoto.jp",
  "fukuchiyama.kyoto.jp",
  "higashiyama.kyoto.jp",
  "ide.kyoto.jp",
  "ine.kyoto.jp",
  "joyo.kyoto.jp",
  "kameoka.kyoto.jp",
  "kamo.kyoto.jp",
  "kita.kyoto.jp",
  "kizu.kyoto.jp",
  "kumiyama.kyoto.jp",
  "kyotamba.kyoto.jp",
  "kyotanabe.kyoto.jp",
  "kyotango.kyoto.jp",
  "maizuru.kyoto.jp",
  "minami.kyoto.jp",
  "minamiyamashiro.kyoto.jp",
  "miyazu.kyoto.jp",
  "muko.kyoto.jp",
  "nagaokakyo.kyoto.jp",
  "nakagyo.kyoto.jp",
  "nantan.kyoto.jp",
  "oyamazaki.kyoto.jp",
  "sakyo.kyoto.jp",
  "seika.kyoto.jp",
  "tanabe.kyoto.jp",
  "uji.kyoto.jp",
  "ujitawara.kyoto.jp",
  "wazuka.kyoto.jp",
  "yamashina.kyoto.jp",
  "yawata.kyoto.jp",
  "asahi.mie.jp",
  "inabe.mie.jp",
  "ise.mie.jp",
  "kameyama.mie.jp",
  "kawagoe.mie.jp",
  "kiho.mie.jp",
  "kisosaki.mie.jp",
  "kiwa.mie.jp",
  "komono.mie.jp",
  "kumano.mie.jp",
  "kuwana.mie.jp",
  "matsusaka.mie.jp",
  "meiwa.mie.jp",
  "mihama.mie.jp",
  "minamiise.mie.jp",
  "misugi.mie.jp",
  "miyama.mie.jp",
  "nabari.mie.jp",
  "shima.mie.jp",
  "suzuka.mie.jp",
  "tado.mie.jp",
  "taiki.mie.jp",
  "taki.mie.jp",
  "tamaki.mie.jp",
  "toba.mie.jp",
  "tsu.mie.jp",
  "udono.mie.jp",
  "ureshino.mie.jp",
  "watarai.mie.jp",
  "yokkaichi.mie.jp",
  "furukawa.miyagi.jp",
  "higashimatsushima.miyagi.jp",
  "ishinomaki.miyagi.jp",
  "iwanuma.miyagi.jp",
  "kakuda.miyagi.jp",
  "kami.miyagi.jp",
  "kawasaki.miyagi.jp",
  "marumori.miyagi.jp",
  "matsushima.miyagi.jp",
  "minamisanriku.miyagi.jp",
  "misato.miyagi.jp",
  "murata.miyagi.jp",
  "natori.miyagi.jp",
  "ogawara.miyagi.jp",
  "ohira.miyagi.jp",
  "onagawa.miyagi.jp",
  "osaki.miyagi.jp",
  "rifu.miyagi.jp",
  "semine.miyagi.jp",
  "shibata.miyagi.jp",
  "shichikashuku.miyagi.jp",
  "shikama.miyagi.jp",
  "shiogama.miyagi.jp",
  "shiroishi.miyagi.jp",
  "tagajo.miyagi.jp",
  "taiwa.miyagi.jp",
  "tome.miyagi.jp",
  "tomiya.miyagi.jp",
  "wakuya.miyagi.jp",
  "watari.miyagi.jp",
  "yamamoto.miyagi.jp",
  "zao.miyagi.jp",
  "aya.miyazaki.jp",
  "ebino.miyazaki.jp",
  "gokase.miyazaki.jp",
  "hyuga.miyazaki.jp",
  "kadogawa.miyazaki.jp",
  "kawaminami.miyazaki.jp",
  "kijo.miyazaki.jp",
  "kitagawa.miyazaki.jp",
  "kitakata.miyazaki.jp",
  "kitaura.miyazaki.jp",
  "kobayashi.miyazaki.jp",
  "kunitomi.miyazaki.jp",
  "kushima.miyazaki.jp",
  "mimata.miyazaki.jp",
  "miyakonojo.miyazaki.jp",
  "miyazaki.miyazaki.jp",
  "morotsuka.miyazaki.jp",
  "nichinan.miyazaki.jp",
  "nishimera.miyazaki.jp",
  "nobeoka.miyazaki.jp",
  "saito.miyazaki.jp",
  "shiiba.miyazaki.jp",
  "shintomi.miyazaki.jp",
  "takaharu.miyazaki.jp",
  "takanabe.miyazaki.jp",
  "takazaki.miyazaki.jp",
  "tsuno.miyazaki.jp",
  "achi.nagano.jp",
  "agematsu.nagano.jp",
  "anan.nagano.jp",
  "aoki.nagano.jp",
  "asahi.nagano.jp",
  "azumino.nagano.jp",
  "chikuhoku.nagano.jp",
  "chikuma.nagano.jp",
  "chino.nagano.jp",
  "fujimi.nagano.jp",
  "hakuba.nagano.jp",
  "hara.nagano.jp",
  "hiraya.nagano.jp",
  "iida.nagano.jp",
  "iijima.nagano.jp",
  "iiyama.nagano.jp",
  "iizuna.nagano.jp",
  "ikeda.nagano.jp",
  "ikusaka.nagano.jp",
  "ina.nagano.jp",
  "karuizawa.nagano.jp",
  "kawakami.nagano.jp",
  "kiso.nagano.jp",
  "kisofukushima.nagano.jp",
  "kitaaiki.nagano.jp",
  "komagane.nagano.jp",
  "komoro.nagano.jp",
  "matsukawa.nagano.jp",
  "matsumoto.nagano.jp",
  "miasa.nagano.jp",
  "minamiaiki.nagano.jp",
  "minamimaki.nagano.jp",
  "minamiminowa.nagano.jp",
  "minowa.nagano.jp",
  "miyada.nagano.jp",
  "miyota.nagano.jp",
  "mochizuki.nagano.jp",
  "nagano.nagano.jp",
  "nagawa.nagano.jp",
  "nagiso.nagano.jp",
  "nakagawa.nagano.jp",
  "nakano.nagano.jp",
  "nozawaonsen.nagano.jp",
  "obuse.nagano.jp",
  "ogawa.nagano.jp",
  "okaya.nagano.jp",
  "omachi.nagano.jp",
  "omi.nagano.jp",
  "ookuwa.nagano.jp",
  "ooshika.nagano.jp",
  "otaki.nagano.jp",
  "otari.nagano.jp",
  "sakae.nagano.jp",
  "sakaki.nagano.jp",
  "saku.nagano.jp",
  "sakuho.nagano.jp",
  "shimosuwa.nagano.jp",
  "shinanomachi.nagano.jp",
  "shiojiri.nagano.jp",
  "suwa.nagano.jp",
  "suzaka.nagano.jp",
  "takagi.nagano.jp",
  "takamori.nagano.jp",
  "takayama.nagano.jp",
  "tateshina.nagano.jp",
  "tatsuno.nagano.jp",
  "togakushi.nagano.jp",
  "togura.nagano.jp",
  "tomi.nagano.jp",
  "ueda.nagano.jp",
  "wada.nagano.jp",
  "yamagata.nagano.jp",
  "yamanouchi.nagano.jp",
  "yasaka.nagano.jp",
  "yasuoka.nagano.jp",
  "chijiwa.nagasaki.jp",
  "futsu.nagasaki.jp",
  "goto.nagasaki.jp",
  "hasami.nagasaki.jp",
  "hirado.nagasaki.jp",
  "iki.nagasaki.jp",
  "isahaya.nagasaki.jp",
  "kawatana.nagasaki.jp",
  "kuchinotsu.nagasaki.jp",
  "matsuura.nagasaki.jp",
  "nagasaki.nagasaki.jp",
  "obama.nagasaki.jp",
  "omura.nagasaki.jp",
  "oseto.nagasaki.jp",
  "saikai.nagasaki.jp",
  "sasebo.nagasaki.jp",
  "seihi.nagasaki.jp",
  "shimabara.nagasaki.jp",
  "shinkamigoto.nagasaki.jp",
  "togitsu.nagasaki.jp",
  "tsushima.nagasaki.jp",
  "unzen.nagasaki.jp",
  "ando.nara.jp",
  "gose.nara.jp",
  "heguri.nara.jp",
  "higashiyoshino.nara.jp",
  "ikaruga.nara.jp",
  "ikoma.nara.jp",
  "kamikitayama.nara.jp",
  "kanmaki.nara.jp",
  "kashiba.nara.jp",
  "kashihara.nara.jp",
  "katsuragi.nara.jp",
  "kawai.nara.jp",
  "kawakami.nara.jp",
  "kawanishi.nara.jp",
  "koryo.nara.jp",
  "kurotaki.nara.jp",
  "mitsue.nara.jp",
  "miyake.nara.jp",
  "nara.nara.jp",
  "nosegawa.nara.jp",
  "oji.nara.jp",
  "ouda.nara.jp",
  "oyodo.nara.jp",
  "sakurai.nara.jp",
  "sango.nara.jp",
  "shimoichi.nara.jp",
  "shimokitayama.nara.jp",
  "shinjo.nara.jp",
  "soni.nara.jp",
  "takatori.nara.jp",
  "tawaramoto.nara.jp",
  "tenkawa.nara.jp",
  "tenri.nara.jp",
  "uda.nara.jp",
  "yamatokoriyama.nara.jp",
  "yamatotakada.nara.jp",
  "yamazoe.nara.jp",
  "yoshino.nara.jp",
  "aga.niigata.jp",
  "agano.niigata.jp",
  "gosen.niigata.jp",
  "itoigawa.niigata.jp",
  "izumozaki.niigata.jp",
  "joetsu.niigata.jp",
  "kamo.niigata.jp",
  "kariwa.niigata.jp",
  "kashiwazaki.niigata.jp",
  "minamiuonuma.niigata.jp",
  "mitsuke.niigata.jp",
  "muika.niigata.jp",
  "murakami.niigata.jp",
  "myoko.niigata.jp",
  "nagaoka.niigata.jp",
  "niigata.niigata.jp",
  "ojiya.niigata.jp",
  "omi.niigata.jp",
  "sado.niigata.jp",
  "sanjo.niigata.jp",
  "seiro.niigata.jp",
  "seirou.niigata.jp",
  "sekikawa.niigata.jp",
  "shibata.niigata.jp",
  "tagami.niigata.jp",
  "tainai.niigata.jp",
  "tochio.niigata.jp",
  "tokamachi.niigata.jp",
  "tsubame.niigata.jp",
  "tsunan.niigata.jp",
  "uonuma.niigata.jp",
  "yahiko.niigata.jp",
  "yoita.niigata.jp",
  "yuzawa.niigata.jp",
  "beppu.oita.jp",
  "bungoono.oita.jp",
  "bungotakada.oita.jp",
  "hasama.oita.jp",
  "hiji.oita.jp",
  "himeshima.oita.jp",
  "hita.oita.jp",
  "kamitsue.oita.jp",
  "kokonoe.oita.jp",
  "kuju.oita.jp",
  "kunisaki.oita.jp",
  "kusu.oita.jp",
  "oita.oita.jp",
  "saiki.oita.jp",
  "taketa.oita.jp",
  "tsukumi.oita.jp",
  "usa.oita.jp",
  "usuki.oita.jp",
  "yufu.oita.jp",
  "akaiwa.okayama.jp",
  "asakuchi.okayama.jp",
  "bizen.okayama.jp",
  "hayashima.okayama.jp",
  "ibara.okayama.jp",
  "kagamino.okayama.jp",
  "kasaoka.okayama.jp",
  "kibichuo.okayama.jp",
  "kumenan.okayama.jp",
  "kurashiki.okayama.jp",
  "maniwa.okayama.jp",
  "misaki.okayama.jp",
  "nagi.okayama.jp",
  "niimi.okayama.jp",
  "nishiawakura.okayama.jp",
  "okayama.okayama.jp",
  "satosho.okayama.jp",
  "setouchi.okayama.jp",
  "shinjo.okayama.jp",
  "shoo.okayama.jp",
  "soja.okayama.jp",
  "takahashi.okayama.jp",
  "tamano.okayama.jp",
  "tsuyama.okayama.jp",
  "wake.okayama.jp",
  "yakage.okayama.jp",
  "aguni.okinawa.jp",
  "ginowan.okinawa.jp",
  "ginoza.okinawa.jp",
  "gushikami.okinawa.jp",
  "haebaru.okinawa.jp",
  "higashi.okinawa.jp",
  "hirara.okinawa.jp",
  "iheya.okinawa.jp",
  "ishigaki.okinawa.jp",
  "ishikawa.okinawa.jp",
  "itoman.okinawa.jp",
  "izena.okinawa.jp",
  "kadena.okinawa.jp",
  "kin.okinawa.jp",
  "kitadaito.okinawa.jp",
  "kitanakagusuku.okinawa.jp",
  "kumejima.okinawa.jp",
  "kunigami.okinawa.jp",
  "minamidaito.okinawa.jp",
  "motobu.okinawa.jp",
  "nago.okinawa.jp",
  "naha.okinawa.jp",
  "nakagusuku.okinawa.jp",
  "nakijin.okinawa.jp",
  "nanjo.okinawa.jp",
  "nishihara.okinawa.jp",
  "ogimi.okinawa.jp",
  "okinawa.okinawa.jp",
  "onna.okinawa.jp",
  "shimoji.okinawa.jp",
  "taketomi.okinawa.jp",
  "tarama.okinawa.jp",
  "tokashiki.okinawa.jp",
  "tomigusuku.okinawa.jp",
  "tonaki.okinawa.jp",
  "urasoe.okinawa.jp",
  "uruma.okinawa.jp",
  "yaese.okinawa.jp",
  "yomitan.okinawa.jp",
  "yonabaru.okinawa.jp",
  "yonaguni.okinawa.jp",
  "zamami.okinawa.jp",
  "abeno.osaka.jp",
  "chihayaakasaka.osaka.jp",
  "chuo.osaka.jp",
  "daito.osaka.jp",
  "fujiidera.osaka.jp",
  "habikino.osaka.jp",
  "hannan.osaka.jp",
  "higashiosaka.osaka.jp",
  "higashisumiyoshi.osaka.jp",
  "higashiyodogawa.osaka.jp",
  "hirakata.osaka.jp",
  "ibaraki.osaka.jp",
  "ikeda.osaka.jp",
  "izumi.osaka.jp",
  "izumiotsu.osaka.jp",
  "izumisano.osaka.jp",
  "kadoma.osaka.jp",
  "kaizuka.osaka.jp",
  "kanan.osaka.jp",
  "kashiwara.osaka.jp",
  "katano.osaka.jp",
  "kawachinagano.osaka.jp",
  "kishiwada.osaka.jp",
  "kita.osaka.jp",
  "kumatori.osaka.jp",
  "matsubara.osaka.jp",
  "minato.osaka.jp",
  "minoh.osaka.jp",
  "misaki.osaka.jp",
  "moriguchi.osaka.jp",
  "neyagawa.osaka.jp",
  "nishi.osaka.jp",
  "nose.osaka.jp",
  "osakasayama.osaka.jp",
  "sakai.osaka.jp",
  "sayama.osaka.jp",
  "sennan.osaka.jp",
  "settsu.osaka.jp",
  "shijonawate.osaka.jp",
  "shimamoto.osaka.jp",
  "suita.osaka.jp",
  "tadaoka.osaka.jp",
  "taishi.osaka.jp",
  "tajiri.osaka.jp",
  "takaishi.osaka.jp",
  "takatsuki.osaka.jp",
  "tondabayashi.osaka.jp",
  "toyonaka.osaka.jp",
  "toyono.osaka.jp",
  "yao.osaka.jp",
  "ariake.saga.jp",
  "arita.saga.jp",
  "fukudomi.saga.jp",
  "genkai.saga.jp",
  "hamatama.saga.jp",
  "hizen.saga.jp",
  "imari.saga.jp",
  "kamimine.saga.jp",
  "kanzaki.saga.jp",
  "karatsu.saga.jp",
  "kashima.saga.jp",
  "kitagata.saga.jp",
  "kitahata.saga.jp",
  "kiyama.saga.jp",
  "kouhoku.saga.jp",
  "kyuragi.saga.jp",
  "nishiarita.saga.jp",
  "ogi.saga.jp",
  "omachi.saga.jp",
  "ouchi.saga.jp",
  "saga.saga.jp",
  "shiroishi.saga.jp",
  "taku.saga.jp",
  "tara.saga.jp",
  "tosu.saga.jp",
  "yoshinogari.saga.jp",
  "arakawa.saitama.jp",
  "asaka.saitama.jp",
  "chichibu.saitama.jp",
  "fujimi.saitama.jp",
  "fujimino.saitama.jp",
  "fukaya.saitama.jp",
  "hanno.saitama.jp",
  "hanyu.saitama.jp",
  "hasuda.saitama.jp",
  "hatogaya.saitama.jp",
  "hatoyama.saitama.jp",
  "hidaka.saitama.jp",
  "higashichichibu.saitama.jp",
  "higashimatsuyama.saitama.jp",
  "honjo.saitama.jp",
  "ina.saitama.jp",
  "iruma.saitama.jp",
  "iwatsuki.saitama.jp",
  "kamiizumi.saitama.jp",
  "kamikawa.saitama.jp",
  "kamisato.saitama.jp",
  "kasukabe.saitama.jp",
  "kawagoe.saitama.jp",
  "kawaguchi.saitama.jp",
  "kawajima.saitama.jp",
  "kazo.saitama.jp",
  "kitamoto.saitama.jp",
  "koshigaya.saitama.jp",
  "kounosu.saitama.jp",
  "kuki.saitama.jp",
  "kumagaya.saitama.jp",
  "matsubushi.saitama.jp",
  "minano.saitama.jp",
  "misato.saitama.jp",
  "miyashiro.saitama.jp",
  "miyoshi.saitama.jp",
  "moroyama.saitama.jp",
  "nagatoro.saitama.jp",
  "namegawa.saitama.jp",
  "niiza.saitama.jp",
  "ogano.saitama.jp",
  "ogawa.saitama.jp",
  "ogose.saitama.jp",
  "okegawa.saitama.jp",
  "omiya.saitama.jp",
  "otaki.saitama.jp",
  "ranzan.saitama.jp",
  "ryokami.saitama.jp",
  "saitama.saitama.jp",
  "sakado.saitama.jp",
  "satte.saitama.jp",
  "sayama.saitama.jp",
  "shiki.saitama.jp",
  "shiraoka.saitama.jp",
  "soka.saitama.jp",
  "sugito.saitama.jp",
  "toda.saitama.jp",
  "tokigawa.saitama.jp",
  "tokorozawa.saitama.jp",
  "tsurugashima.saitama.jp",
  "urawa.saitama.jp",
  "warabi.saitama.jp",
  "yashio.saitama.jp",
  "yokoze.saitama.jp",
  "yono.saitama.jp",
  "yorii.saitama.jp",
  "yoshida.saitama.jp",
  "yoshikawa.saitama.jp",
  "yoshimi.saitama.jp",
  "aisho.shiga.jp",
  "gamo.shiga.jp",
  "higashiomi.shiga.jp",
  "hikone.shiga.jp",
  "koka.shiga.jp",
  "konan.shiga.jp",
  "kosei.shiga.jp",
  "koto.shiga.jp",
  "kusatsu.shiga.jp",
  "maibara.shiga.jp",
  "moriyama.shiga.jp",
  "nagahama.shiga.jp",
  "nishiazai.shiga.jp",
  "notogawa.shiga.jp",
  "omihachiman.shiga.jp",
  "otsu.shiga.jp",
  "ritto.shiga.jp",
  "ryuoh.shiga.jp",
  "takashima.shiga.jp",
  "takatsuki.shiga.jp",
  "torahime.shiga.jp",
  "toyosato.shiga.jp",
  "yasu.shiga.jp",
  "akagi.shimane.jp",
  "ama.shimane.jp",
  "gotsu.shimane.jp",
  "hamada.shimane.jp",
  "higashiizumo.shimane.jp",
  "hikawa.shimane.jp",
  "hikimi.shimane.jp",
  "izumo.shimane.jp",
  "kakinoki.shimane.jp",
  "masuda.shimane.jp",
  "matsue.shimane.jp",
  "misato.shimane.jp",
  "nishinoshima.shimane.jp",
  "ohda.shimane.jp",
  "okinoshima.shimane.jp",
  "okuizumo.shimane.jp",
  "shimane.shimane.jp",
  "tamayu.shimane.jp",
  "tsuwano.shimane.jp",
  "unnan.shimane.jp",
  "yakumo.shimane.jp",
  "yasugi.shimane.jp",
  "yatsuka.shimane.jp",
  "arai.shizuoka.jp",
  "atami.shizuoka.jp",
  "fuji.shizuoka.jp",
  "fujieda.shizuoka.jp",
  "fujikawa.shizuoka.jp",
  "fujinomiya.shizuoka.jp",
  "fukuroi.shizuoka.jp",
  "gotemba.shizuoka.jp",
  "haibara.shizuoka.jp",
  "hamamatsu.shizuoka.jp",
  "higashiizu.shizuoka.jp",
  "ito.shizuoka.jp",
  "iwata.shizuoka.jp",
  "izu.shizuoka.jp",
  "izunokuni.shizuoka.jp",
  "kakegawa.shizuoka.jp",
  "kannami.shizuoka.jp",
  "kawanehon.shizuoka.jp",
  "kawazu.shizuoka.jp",
  "kikugawa.shizuoka.jp",
  "kosai.shizuoka.jp",
  "makinohara.shizuoka.jp",
  "matsuzaki.shizuoka.jp",
  "minamiizu.shizuoka.jp",
  "mishima.shizuoka.jp",
  "morimachi.shizuoka.jp",
  "nishiizu.shizuoka.jp",
  "numazu.shizuoka.jp",
  "omaezaki.shizuoka.jp",
  "shimada.shizuoka.jp",
  "shimizu.shizuoka.jp",
  "shimoda.shizuoka.jp",
  "shizuoka.shizuoka.jp",
  "susono.shizuoka.jp",
  "yaizu.shizuoka.jp",
  "yoshida.shizuoka.jp",
  "ashikaga.tochigi.jp",
  "bato.tochigi.jp",
  "haga.tochigi.jp",
  "ichikai.tochigi.jp",
  "iwafune.tochigi.jp",
  "kaminokawa.tochigi.jp",
  "kanuma.tochigi.jp",
  "karasuyama.tochigi.jp",
  "kuroiso.tochigi.jp",
  "mashiko.tochigi.jp",
  "mibu.tochigi.jp",
  "moka.tochigi.jp",
  "motegi.tochigi.jp",
  "nasu.tochigi.jp",
  "nasushiobara.tochigi.jp",
  "nikko.tochigi.jp",
  "nishikata.tochigi.jp",
  "nogi.tochigi.jp",
  "ohira.tochigi.jp",
  "ohtawara.tochigi.jp",
  "oyama.tochigi.jp",
  "sakura.tochigi.jp",
  "sano.tochigi.jp",
  "shimotsuke.tochigi.jp",
  "shioya.tochigi.jp",
  "takanezawa.tochigi.jp",
  "tochigi.tochigi.jp",
  "tsuga.tochigi.jp",
  "ujiie.tochigi.jp",
  "utsunomiya.tochigi.jp",
  "yaita.tochigi.jp",
  "aizumi.tokushima.jp",
  "anan.tokushima.jp",
  "ichiba.tokushima.jp",
  "itano.tokushima.jp",
  "kainan.tokushima.jp",
  "komatsushima.tokushima.jp",
  "matsushige.tokushima.jp",
  "mima.tokushima.jp",
  "minami.tokushima.jp",
  "miyoshi.tokushima.jp",
  "mugi.tokushima.jp",
  "nakagawa.tokushima.jp",
  "naruto.tokushima.jp",
  "sanagochi.tokushima.jp",
  "shishikui.tokushima.jp",
  "tokushima.tokushima.jp",
  "wajiki.tokushima.jp",
  "adachi.tokyo.jp",
  "akiruno.tokyo.jp",
  "akishima.tokyo.jp",
  "aogashima.tokyo.jp",
  "arakawa.tokyo.jp",
  "bunkyo.tokyo.jp",
  "chiyoda.tokyo.jp",
  "chofu.tokyo.jp",
  "chuo.tokyo.jp",
  "edogawa.tokyo.jp",
  "fuchu.tokyo.jp",
  "fussa.tokyo.jp",
  "hachijo.tokyo.jp",
  "hachioji.tokyo.jp",
  "hamura.tokyo.jp",
  "higashikurume.tokyo.jp",
  "higashimurayama.tokyo.jp",
  "higashiyamato.tokyo.jp",
  "hino.tokyo.jp",
  "hinode.tokyo.jp",
  "hinohara.tokyo.jp",
  "inagi.tokyo.jp",
  "itabashi.tokyo.jp",
  "katsushika.tokyo.jp",
  "kita.tokyo.jp",
  "kiyose.tokyo.jp",
  "kodaira.tokyo.jp",
  "koganei.tokyo.jp",
  "kokubunji.tokyo.jp",
  "komae.tokyo.jp",
  "koto.tokyo.jp",
  "kouzushima.tokyo.jp",
  "kunitachi.tokyo.jp",
  "machida.tokyo.jp",
  "meguro.tokyo.jp",
  "minato.tokyo.jp",
  "mitaka.tokyo.jp",
  "mizuho.tokyo.jp",
  "musashimurayama.tokyo.jp",
  "musashino.tokyo.jp",
  "nakano.tokyo.jp",
  "nerima.tokyo.jp",
  "ogasawara.tokyo.jp",
  "okutama.tokyo.jp",
  "ome.tokyo.jp",
  "oshima.tokyo.jp",
  "ota.tokyo.jp",
  "setagaya.tokyo.jp",
  "shibuya.tokyo.jp",
  "shinagawa.tokyo.jp",
  "shinjuku.tokyo.jp",
  "suginami.tokyo.jp",
  "sumida.tokyo.jp",
  "tachikawa.tokyo.jp",
  "taito.tokyo.jp",
  "tama.tokyo.jp",
  "toshima.tokyo.jp",
  "chizu.tottori.jp",
  "hino.tottori.jp",
  "kawahara.tottori.jp",
  "koge.tottori.jp",
  "kotoura.tottori.jp",
  "misasa.tottori.jp",
  "nanbu.tottori.jp",
  "nichinan.tottori.jp",
  "sakaiminato.tottori.jp",
  "tottori.tottori.jp",
  "wakasa.tottori.jp",
  "yazu.tottori.jp",
  "yonago.tottori.jp",
  "asahi.toyama.jp",
  "fuchu.toyama.jp",
  "fukumitsu.toyama.jp",
  "funahashi.toyama.jp",
  "himi.toyama.jp",
  "imizu.toyama.jp",
  "inami.toyama.jp",
  "johana.toyama.jp",
  "kamiichi.toyama.jp",
  "kurobe.toyama.jp",
  "nakaniikawa.toyama.jp",
  "namerikawa.toyama.jp",
  "nanto.toyama.jp",
  "nyuzen.toyama.jp",
  "oyabe.toyama.jp",
  "taira.toyama.jp",
  "takaoka.toyama.jp",
  "tateyama.toyama.jp",
  "toga.toyama.jp",
  "tonami.toyama.jp",
  "toyama.toyama.jp",
  "unazuki.toyama.jp",
  "uozu.toyama.jp",
  "yamada.toyama.jp",
  "arida.wakayama.jp",
  "aridagawa.wakayama.jp",
  "gobo.wakayama.jp",
  "hashimoto.wakayama.jp",
  "hidaka.wakayama.jp",
  "hirogawa.wakayama.jp",
  "inami.wakayama.jp",
  "iwade.wakayama.jp",
  "kainan.wakayama.jp",
  "kamitonda.wakayama.jp",
  "katsuragi.wakayama.jp",
  "kimino.wakayama.jp",
  "kinokawa.wakayama.jp",
  "kitayama.wakayama.jp",
  "koya.wakayama.jp",
  "koza.wakayama.jp",
  "kozagawa.wakayama.jp",
  "kudoyama.wakayama.jp",
  "kushimoto.wakayama.jp",
  "mihama.wakayama.jp",
  "misato.wakayama.jp",
  "nachikatsuura.wakayama.jp",
  "shingu.wakayama.jp",
  "shirahama.wakayama.jp",
  "taiji.wakayama.jp",
  "tanabe.wakayama.jp",
  "wakayama.wakayama.jp",
  "yuasa.wakayama.jp",
  "yura.wakayama.jp",
  "asahi.yamagata.jp",
  "funagata.yamagata.jp",
  "higashine.yamagata.jp",
  "iide.yamagata.jp",
  "kahoku.yamagata.jp",
  "kaminoyama.yamagata.jp",
  "kaneyama.yamagata.jp",
  "kawanishi.yamagata.jp",
  "mamurogawa.yamagata.jp",
  "mikawa.yamagata.jp",
  "murayama.yamagata.jp",
  "nagai.yamagata.jp",
  "nakayama.yamagata.jp",
  "nanyo.yamagata.jp",
  "nishikawa.yamagata.jp",
  "obanazawa.yamagata.jp",
  "oe.yamagata.jp",
  "oguni.yamagata.jp",
  "ohkura.yamagata.jp",
  "oishida.yamagata.jp",
  "sagae.yamagata.jp",
  "sakata.yamagata.jp",
  "sakegawa.yamagata.jp",
  "shinjo.yamagata.jp",
  "shirataka.yamagata.jp",
  "shonai.yamagata.jp",
  "takahata.yamagata.jp",
  "tendo.yamagata.jp",
  "tozawa.yamagata.jp",
  "tsuruoka.yamagata.jp",
  "yamagata.yamagata.jp",
  "yamanobe.yamagata.jp",
  "yonezawa.yamagata.jp",
  "yuza.yamagata.jp",
  "abu.yamaguchi.jp",
  "hagi.yamaguchi.jp",
  "hikari.yamaguchi.jp",
  "hofu.yamaguchi.jp",
  "iwakuni.yamaguchi.jp",
  "kudamatsu.yamaguchi.jp",
  "mitou.yamaguchi.jp",
  "nagato.yamaguchi.jp",
  "oshima.yamaguchi.jp",
  "shimonoseki.yamaguchi.jp",
  "shunan.yamaguchi.jp",
  "tabuse.yamaguchi.jp",
  "tokuyama.yamaguchi.jp",
  "toyota.yamaguchi.jp",
  "ube.yamaguchi.jp",
  "yuu.yamaguchi.jp",
  "chuo.yamanashi.jp",
  "doshi.yamanashi.jp",
  "fuefuki.yamanashi.jp",
  "fujikawa.yamanashi.jp",
  "fujikawaguchiko.yamanashi.jp",
  "fujiyoshida.yamanashi.jp",
  "hayakawa.yamanashi.jp",
  "hokuto.yamanashi.jp",
  "ichikawamisato.yamanashi.jp",
  "kai.yamanashi.jp",
  "kofu.yamanashi.jp",
  "koshu.yamanashi.jp",
  "kosuge.yamanashi.jp",
  "minami-alps.yamanashi.jp",
  "minobu.yamanashi.jp",
  "nakamichi.yamanashi.jp",
  "nanbu.yamanashi.jp",
  "narusawa.yamanashi.jp",
  "nirasaki.yamanashi.jp",
  "nishikatsura.yamanashi.jp",
  "oshino.yamanashi.jp",
  "otsuki.yamanashi.jp",
  "showa.yamanashi.jp",
  "tabayama.yamanashi.jp",
  "tsuru.yamanashi.jp",
  "uenohara.yamanashi.jp",
  "yamanakako.yamanashi.jp",
  "yamanashi.yamanashi.jp",
  "ke",
  "ac.ke",
  "co.ke",
  "go.ke",
  "info.ke",
  "me.ke",
  "mobi.ke",
  "ne.ke",
  "or.ke",
  "sc.ke",
  "kg",
  "org.kg",
  "net.kg",
  "com.kg",
  "edu.kg",
  "gov.kg",
  "mil.kg",
  "*.kh",
  "ki",
  "edu.ki",
  "biz.ki",
  "net.ki",
  "org.ki",
  "gov.ki",
  "info.ki",
  "com.ki",
  "km",
  "org.km",
  "nom.km",
  "gov.km",
  "prd.km",
  "tm.km",
  "edu.km",
  "mil.km",
  "ass.km",
  "com.km",
  "coop.km",
  "asso.km",
  "presse.km",
  "medecin.km",
  "notaires.km",
  "pharmaciens.km",
  "veterinaire.km",
  "gouv.km",
  "kn",
  "net.kn",
  "org.kn",
  "edu.kn",
  "gov.kn",
  "kp",
  "com.kp",
  "edu.kp",
  "gov.kp",
  "org.kp",
  "rep.kp",
  "tra.kp",
  "kr",
  "ac.kr",
  "co.kr",
  "es.kr",
  "go.kr",
  "hs.kr",
  "kg.kr",
  "mil.kr",
  "ms.kr",
  "ne.kr",
  "or.kr",
  "pe.kr",
  "re.kr",
  "sc.kr",
  "busan.kr",
  "chungbuk.kr",
  "chungnam.kr",
  "daegu.kr",
  "daejeon.kr",
  "gangwon.kr",
  "gwangju.kr",
  "gyeongbuk.kr",
  "gyeonggi.kr",
  "gyeongnam.kr",
  "incheon.kr",
  "jeju.kr",
  "jeonbuk.kr",
  "jeonnam.kr",
  "seoul.kr",
  "ulsan.kr",
  "kw",
  "com.kw",
  "edu.kw",
  "emb.kw",
  "gov.kw",
  "ind.kw",
  "net.kw",
  "org.kw",
  "ky",
  "com.ky",
  "edu.ky",
  "net.ky",
  "org.ky",
  "kz",
  "org.kz",
  "edu.kz",
  "net.kz",
  "gov.kz",
  "mil.kz",
  "com.kz",
  "la",
  "int.la",
  "net.la",
  "info.la",
  "edu.la",
  "gov.la",
  "per.la",
  "com.la",
  "org.la",
  "lb",
  "com.lb",
  "edu.lb",
  "gov.lb",
  "net.lb",
  "org.lb",
  "lc",
  "com.lc",
  "net.lc",
  "co.lc",
  "org.lc",
  "edu.lc",
  "gov.lc",
  "li",
  "lk",
  "gov.lk",
  "sch.lk",
  "net.lk",
  "int.lk",
  "com.lk",
  "org.lk",
  "edu.lk",
  "ngo.lk",
  "soc.lk",
  "web.lk",
  "ltd.lk",
  "assn.lk",
  "grp.lk",
  "hotel.lk",
  "ac.lk",
  "lr",
  "com.lr",
  "edu.lr",
  "gov.lr",
  "org.lr",
  "net.lr",
  "ls",
  "ac.ls",
  "biz.ls",
  "co.ls",
  "edu.ls",
  "gov.ls",
  "info.ls",
  "net.ls",
  "org.ls",
  "sc.ls",
  "lt",
  "gov.lt",
  "lu",
  "lv",
  "com.lv",
  "edu.lv",
  "gov.lv",
  "org.lv",
  "mil.lv",
  "id.lv",
  "net.lv",
  "asn.lv",
  "conf.lv",
  "ly",
  "com.ly",
  "net.ly",
  "gov.ly",
  "plc.ly",
  "edu.ly",
  "sch.ly",
  "med.ly",
  "org.ly",
  "id.ly",
  "ma",
  "co.ma",
  "net.ma",
  "gov.ma",
  "org.ma",
  "ac.ma",
  "press.ma",
  "mc",
  "tm.mc",
  "asso.mc",
  "md",
  "me",
  "co.me",
  "net.me",
  "org.me",
  "edu.me",
  "ac.me",
  "gov.me",
  "its.me",
  "priv.me",
  "mg",
  "org.mg",
  "nom.mg",
  "gov.mg",
  "prd.mg",
  "tm.mg",
  "edu.mg",
  "mil.mg",
  "com.mg",
  "co.mg",
  "mh",
  "mil",
  "mk",
  "com.mk",
  "org.mk",
  "net.mk",
  "edu.mk",
  "gov.mk",
  "inf.mk",
  "name.mk",
  "ml",
  "com.ml",
  "edu.ml",
  "gouv.ml",
  "gov.ml",
  "net.ml",
  "org.ml",
  "presse.ml",
  "*.mm",
  "mn",
  "gov.mn",
  "edu.mn",
  "org.mn",
  "mo",
  "com.mo",
  "net.mo",
  "org.mo",
  "edu.mo",
  "gov.mo",
  "mobi",
  "mp",
  "mq",
  "mr",
  "gov.mr",
  "ms",
  "com.ms",
  "edu.ms",
  "gov.ms",
  "net.ms",
  "org.ms",
  "mt",
  "com.mt",
  "edu.mt",
  "net.mt",
  "org.mt",
  "mu",
  "com.mu",
  "net.mu",
  "org.mu",
  "gov.mu",
  "ac.mu",
  "co.mu",
  "or.mu",
  "museum",
  "academy.museum",
  "agriculture.museum",
  "air.museum",
  "airguard.museum",
  "alabama.museum",
  "alaska.museum",
  "amber.museum",
  "ambulance.museum",
  "american.museum",
  "americana.museum",
  "americanantiques.museum",
  "americanart.museum",
  "amsterdam.museum",
  "and.museum",
  "annefrank.museum",
  "anthro.museum",
  "anthropology.museum",
  "antiques.museum",
  "aquarium.museum",
  "arboretum.museum",
  "archaeological.museum",
  "archaeology.museum",
  "architecture.museum",
  "art.museum",
  "artanddesign.museum",
  "artcenter.museum",
  "artdeco.museum",
  "arteducation.museum",
  "artgallery.museum",
  "arts.museum",
  "artsandcrafts.museum",
  "asmatart.museum",
  "assassination.museum",
  "assisi.museum",
  "association.museum",
  "astronomy.museum",
  "atlanta.museum",
  "austin.museum",
  "australia.museum",
  "automotive.museum",
  "aviation.museum",
  "axis.museum",
  "badajoz.museum",
  "baghdad.museum",
  "bahn.museum",
  "bale.museum",
  "baltimore.museum",
  "barcelona.museum",
  "baseball.museum",
  "basel.museum",
  "baths.museum",
  "bauern.museum",
  "beauxarts.museum",
  "beeldengeluid.museum",
  "bellevue.museum",
  "bergbau.museum",
  "berkeley.museum",
  "berlin.museum",
  "bern.museum",
  "bible.museum",
  "bilbao.museum",
  "bill.museum",
  "birdart.museum",
  "birthplace.museum",
  "bonn.museum",
  "boston.museum",
  "botanical.museum",
  "botanicalgarden.museum",
  "botanicgarden.museum",
  "botany.museum",
  "brandywinevalley.museum",
  "brasil.museum",
  "bristol.museum",
  "british.museum",
  "britishcolumbia.museum",
  "broadcast.museum",
  "brunel.museum",
  "brussel.museum",
  "brussels.museum",
  "bruxelles.museum",
  "building.museum",
  "burghof.museum",
  "bus.museum",
  "bushey.museum",
  "cadaques.museum",
  "california.museum",
  "cambridge.museum",
  "can.museum",
  "canada.museum",
  "capebreton.museum",
  "carrier.museum",
  "cartoonart.museum",
  "casadelamoneda.museum",
  "castle.museum",
  "castres.museum",
  "celtic.museum",
  "center.museum",
  "chattanooga.museum",
  "cheltenham.museum",
  "chesapeakebay.museum",
  "chicago.museum",
  "children.museum",
  "childrens.museum",
  "childrensgarden.museum",
  "chiropractic.museum",
  "chocolate.museum",
  "christiansburg.museum",
  "cincinnati.museum",
  "cinema.museum",
  "circus.museum",
  "civilisation.museum",
  "civilization.museum",
  "civilwar.museum",
  "clinton.museum",
  "clock.museum",
  "coal.museum",
  "coastaldefence.museum",
  "cody.museum",
  "coldwar.museum",
  "collection.museum",
  "colonialwilliamsburg.museum",
  "coloradoplateau.museum",
  "columbia.museum",
  "columbus.museum",
  "communication.museum",
  "communications.museum",
  "community.museum",
  "computer.museum",
  "computerhistory.museum",
  "comunicações.museum",
  "contemporary.museum",
  "contemporaryart.museum",
  "convent.museum",
  "copenhagen.museum",
  "corporation.museum",
  "correios-e-telecomunicações.museum",
  "corvette.museum",
  "costume.museum",
  "countryestate.museum",
  "county.museum",
  "crafts.museum",
  "cranbrook.museum",
  "creation.museum",
  "cultural.museum",
  "culturalcenter.museum",
  "culture.museum",
  "cyber.museum",
  "cymru.museum",
  "dali.museum",
  "dallas.museum",
  "database.museum",
  "ddr.museum",
  "decorativearts.museum",
  "delaware.museum",
  "delmenhorst.museum",
  "denmark.museum",
  "depot.museum",
  "design.museum",
  "detroit.museum",
  "dinosaur.museum",
  "discovery.museum",
  "dolls.museum",
  "donostia.museum",
  "durham.museum",
  "eastafrica.museum",
  "eastcoast.museum",
  "education.museum",
  "educational.museum",
  "egyptian.museum",
  "eisenbahn.museum",
  "elburg.museum",
  "elvendrell.museum",
  "embroidery.museum",
  "encyclopedic.museum",
  "england.museum",
  "entomology.museum",
  "environment.museum",
  "environmentalconservation.museum",
  "epilepsy.museum",
  "essex.museum",
  "estate.museum",
  "ethnology.museum",
  "exeter.museum",
  "exhibition.museum",
  "family.museum",
  "farm.museum",
  "farmequipment.museum",
  "farmers.museum",
  "farmstead.museum",
  "field.museum",
  "figueres.museum",
  "filatelia.museum",
  "film.museum",
  "fineart.museum",
  "finearts.museum",
  "finland.museum",
  "flanders.museum",
  "florida.museum",
  "force.museum",
  "fortmissoula.museum",
  "fortworth.museum",
  "foundation.museum",
  "francaise.museum",
  "frankfurt.museum",
  "franziskaner.museum",
  "freemasonry.museum",
  "freiburg.museum",
  "fribourg.museum",
  "frog.museum",
  "fundacio.museum",
  "furniture.museum",
  "gallery.museum",
  "garden.museum",
  "gateway.museum",
  "geelvinck.museum",
  "gemological.museum",
  "geology.museum",
  "georgia.museum",
  "giessen.museum",
  "glas.museum",
  "glass.museum",
  "gorge.museum",
  "grandrapids.museum",
  "graz.museum",
  "guernsey.museum",
  "halloffame.museum",
  "hamburg.museum",
  "handson.museum",
  "harvestcelebration.museum",
  "hawaii.museum",
  "health.museum",
  "heimatunduhren.museum",
  "hellas.museum",
  "helsinki.museum",
  "hembygdsforbund.museum",
  "heritage.museum",
  "histoire.museum",
  "historical.museum",
  "historicalsociety.museum",
  "historichouses.museum",
  "historisch.museum",
  "historisches.museum",
  "history.museum",
  "historyofscience.museum",
  "horology.museum",
  "house.museum",
  "humanities.museum",
  "illustration.museum",
  "imageandsound.museum",
  "indian.museum",
  "indiana.museum",
  "indianapolis.museum",
  "indianmarket.museum",
  "intelligence.museum",
  "interactive.museum",
  "iraq.museum",
  "iron.museum",
  "isleofman.museum",
  "jamison.museum",
  "jefferson.museum",
  "jerusalem.museum",
  "jewelry.museum",
  "jewish.museum",
  "jewishart.museum",
  "jfk.museum",
  "journalism.museum",
  "judaica.museum",
  "judygarland.museum",
  "juedisches.museum",
  "juif.museum",
  "karate.museum",
  "karikatur.museum",
  "kids.museum",
  "koebenhavn.museum",
  "koeln.museum",
  "kunst.museum",
  "kunstsammlung.museum",
  "kunstunddesign.museum",
  "labor.museum",
  "labour.museum",
  "lajolla.museum",
  "lancashire.museum",
  "landes.museum",
  "lans.museum",
  "läns.museum",
  "larsson.museum",
  "lewismiller.museum",
  "lincoln.museum",
  "linz.museum",
  "living.museum",
  "livinghistory.museum",
  "localhistory.museum",
  "london.museum",
  "losangeles.museum",
  "louvre.museum",
  "loyalist.museum",
  "lucerne.museum",
  "luxembourg.museum",
  "luzern.museum",
  "mad.museum",
  "madrid.museum",
  "mallorca.museum",
  "manchester.museum",
  "mansion.museum",
  "mansions.museum",
  "manx.museum",
  "marburg.museum",
  "maritime.museum",
  "maritimo.museum",
  "maryland.museum",
  "marylhurst.museum",
  "media.museum",
  "medical.museum",
  "medizinhistorisches.museum",
  "meeres.museum",
  "memorial.museum",
  "mesaverde.museum",
  "michigan.museum",
  "midatlantic.museum",
  "military.museum",
  "mill.museum",
  "miners.museum",
  "mining.museum",
  "minnesota.museum",
  "missile.museum",
  "missoula.museum",
  "modern.museum",
  "moma.museum",
  "money.museum",
  "monmouth.museum",
  "monticello.museum",
  "montreal.museum",
  "moscow.museum",
  "motorcycle.museum",
  "muenchen.museum",
  "muenster.museum",
  "mulhouse.museum",
  "muncie.museum",
  "museet.museum",
  "museumcenter.museum",
  "museumvereniging.museum",
  "music.museum",
  "national.museum",
  "nationalfirearms.museum",
  "nationalheritage.museum",
  "nativeamerican.museum",
  "naturalhistory.museum",
  "naturalhistorymuseum.museum",
  "naturalsciences.museum",
  "nature.museum",
  "naturhistorisches.museum",
  "natuurwetenschappen.museum",
  "naumburg.museum",
  "naval.museum",
  "nebraska.museum",
  "neues.museum",
  "newhampshire.museum",
  "newjersey.museum",
  "newmexico.museum",
  "newport.museum",
  "newspaper.museum",
  "newyork.museum",
  "niepce.museum",
  "norfolk.museum",
  "north.museum",
  "nrw.museum",
  "nyc.museum",
  "nyny.museum",
  "oceanographic.museum",
  "oceanographique.museum",
  "omaha.museum",
  "online.museum",
  "ontario.museum",
  "openair.museum",
  "oregon.museum",
  "oregontrail.museum",
  "otago.museum",
  "oxford.museum",
  "pacific.museum",
  "paderborn.museum",
  "palace.museum",
  "paleo.museum",
  "palmsprings.museum",
  "panama.museum",
  "paris.museum",
  "pasadena.museum",
  "pharmacy.museum",
  "philadelphia.museum",
  "philadelphiaarea.museum",
  "philately.museum",
  "phoenix.museum",
  "photography.museum",
  "pilots.museum",
  "pittsburgh.museum",
  "planetarium.museum",
  "plantation.museum",
  "plants.museum",
  "plaza.museum",
  "portal.museum",
  "portland.museum",
  "portlligat.museum",
  "posts-and-telecommunications.museum",
  "preservation.museum",
  "presidio.museum",
  "press.museum",
  "project.museum",
  "public.museum",
  "pubol.museum",
  "quebec.museum",
  "railroad.museum",
  "railway.museum",
  "research.museum",
  "resistance.museum",
  "riodejaneiro.museum",
  "rochester.museum",
  "rockart.museum",
  "roma.museum",
  "russia.museum",
  "saintlouis.museum",
  "salem.museum",
  "salvadordali.museum",
  "salzburg.museum",
  "sandiego.museum",
  "sanfrancisco.museum",
  "santabarbara.museum",
  "santacruz.museum",
  "santafe.museum",
  "saskatchewan.museum",
  "satx.museum",
  "savannahga.museum",
  "schlesisches.museum",
  "schoenbrunn.museum",
  "schokoladen.museum",
  "school.museum",
  "schweiz.museum",
  "science.museum",
  "scienceandhistory.museum",
  "scienceandindustry.museum",
  "sciencecenter.museum",
  "sciencecenters.museum",
  "science-fiction.museum",
  "sciencehistory.museum",
  "sciences.museum",
  "sciencesnaturelles.museum",
  "scotland.museum",
  "seaport.museum",
  "settlement.museum",
  "settlers.museum",
  "shell.museum",
  "sherbrooke.museum",
  "sibenik.museum",
  "silk.museum",
  "ski.museum",
  "skole.museum",
  "society.museum",
  "sologne.museum",
  "soundandvision.museum",
  "southcarolina.museum",
  "southwest.museum",
  "space.museum",
  "spy.museum",
  "square.museum",
  "stadt.museum",
  "stalbans.museum",
  "starnberg.museum",
  "state.museum",
  "stateofdelaware.museum",
  "station.museum",
  "steam.museum",
  "steiermark.museum",
  "stjohn.museum",
  "stockholm.museum",
  "stpetersburg.museum",
  "stuttgart.museum",
  "suisse.museum",
  "surgeonshall.museum",
  "surrey.museum",
  "svizzera.museum",
  "sweden.museum",
  "sydney.museum",
  "tank.museum",
  "tcm.museum",
  "technology.museum",
  "telekommunikation.museum",
  "television.museum",
  "texas.museum",
  "textile.museum",
  "theater.museum",
  "time.museum",
  "timekeeping.museum",
  "topology.museum",
  "torino.museum",
  "touch.museum",
  "town.museum",
  "transport.museum",
  "tree.museum",
  "trolley.museum",
  "trust.museum",
  "trustee.museum",
  "uhren.museum",
  "ulm.museum",
  "undersea.museum",
  "university.museum",
  "usa.museum",
  "usantiques.museum",
  "usarts.museum",
  "uscountryestate.museum",
  "usculture.museum",
  "usdecorativearts.museum",
  "usgarden.museum",
  "ushistory.museum",
  "ushuaia.museum",
  "uslivinghistory.museum",
  "utah.museum",
  "uvic.museum",
  "valley.museum",
  "vantaa.museum",
  "versailles.museum",
  "viking.museum",
  "village.museum",
  "virginia.museum",
  "virtual.museum",
  "virtuel.museum",
  "vlaanderen.museum",
  "volkenkunde.museum",
  "wales.museum",
  "wallonie.museum",
  "war.museum",
  "washingtondc.museum",
  "watchandclock.museum",
  "watch-and-clock.museum",
  "western.museum",
  "westfalen.museum",
  "whaling.museum",
  "wildlife.museum",
  "williamsburg.museum",
  "windmill.museum",
  "workshop.museum",
  "york.museum",
  "yorkshire.museum",
  "yosemite.museum",
  "youth.museum",
  "zoological.museum",
  "zoology.museum",
  "ירושלים.museum",
  "иком.museum",
  "mv",
  "aero.mv",
  "biz.mv",
  "com.mv",
  "coop.mv",
  "edu.mv",
  "gov.mv",
  "info.mv",
  "int.mv",
  "mil.mv",
  "museum.mv",
  "name.mv",
  "net.mv",
  "org.mv",
  "pro.mv",
  "mw",
  "ac.mw",
  "biz.mw",
  "co.mw",
  "com.mw",
  "coop.mw",
  "edu.mw",
  "gov.mw",
  "int.mw",
  "museum.mw",
  "net.mw",
  "org.mw",
  "mx",
  "com.mx",
  "org.mx",
  "gob.mx",
  "edu.mx",
  "net.mx",
  "my",
  "biz.my",
  "com.my",
  "edu.my",
  "gov.my",
  "mil.my",
  "name.my",
  "net.my",
  "org.my",
  "mz",
  "ac.mz",
  "adv.mz",
  "co.mz",
  "edu.mz",
  "gov.mz",
  "mil.mz",
  "net.mz",
  "org.mz",
  "na",
  "info.na",
  "pro.na",
  "name.na",
  "school.na",
  "or.na",
  "dr.na",
  "us.na",
  "mx.na",
  "ca.na",
  "in.na",
  "cc.na",
  "tv.na",
  "ws.na",
  "mobi.na",
  "co.na",
  "com.na",
  "org.na",
  "name",
  "nc",
  "asso.nc",
  "nom.nc",
  "ne",
  "net",
  "nf",
  "com.nf",
  "net.nf",
  "per.nf",
  "rec.nf",
  "web.nf",
  "arts.nf",
  "firm.nf",
  "info.nf",
  "other.nf",
  "store.nf",
  "ng",
  "com.ng",
  "edu.ng",
  "gov.ng",
  "i.ng",
  "mil.ng",
  "mobi.ng",
  "name.ng",
  "net.ng",
  "org.ng",
  "sch.ng",
  "ni",
  "ac.ni",
  "biz.ni",
  "co.ni",
  "com.ni",
  "edu.ni",
  "gob.ni",
  "in.ni",
  "info.ni",
  "int.ni",
  "mil.ni",
  "net.ni",
  "nom.ni",
  "org.ni",
  "web.ni",
  "nl",
  "no",
  "fhs.no",
  "vgs.no",
  "fylkesbibl.no",
  "folkebibl.no",
  "museum.no",
  "idrett.no",
  "priv.no",
  "mil.no",
  "stat.no",
  "dep.no",
  "kommune.no",
  "herad.no",
  "aa.no",
  "ah.no",
  "bu.no",
  "fm.no",
  "hl.no",
  "hm.no",
  "jan-mayen.no",
  "mr.no",
  "nl.no",
  "nt.no",
  "of.no",
  "ol.no",
  "oslo.no",
  "rl.no",
  "sf.no",
  "st.no",
  "svalbard.no",
  "tm.no",
  "tr.no",
  "va.no",
  "vf.no",
  "gs.aa.no",
  "gs.ah.no",
  "gs.bu.no",
  "gs.fm.no",
  "gs.hl.no",
  "gs.hm.no",
  "gs.jan-mayen.no",
  "gs.mr.no",
  "gs.nl.no",
  "gs.nt.no",
  "gs.of.no",
  "gs.ol.no",
  "gs.oslo.no",
  "gs.rl.no",
  "gs.sf.no",
  "gs.st.no",
  "gs.svalbard.no",
  "gs.tm.no",
  "gs.tr.no",
  "gs.va.no",
  "gs.vf.no",
  "akrehamn.no",
  "åkrehamn.no",
  "algard.no",
  "ålgård.no",
  "arna.no",
  "brumunddal.no",
  "bryne.no",
  "bronnoysund.no",
  "brønnøysund.no",
  "drobak.no",
  "drøbak.no",
  "egersund.no",
  "fetsund.no",
  "floro.no",
  "florø.no",
  "fredrikstad.no",
  "hokksund.no",
  "honefoss.no",
  "hønefoss.no",
  "jessheim.no",
  "jorpeland.no",
  "jørpeland.no",
  "kirkenes.no",
  "kopervik.no",
  "krokstadelva.no",
  "langevag.no",
  "langevåg.no",
  "leirvik.no",
  "mjondalen.no",
  "mjøndalen.no",
  "mo-i-rana.no",
  "mosjoen.no",
  "mosjøen.no",
  "nesoddtangen.no",
  "orkanger.no",
  "osoyro.no",
  "osøyro.no",
  "raholt.no",
  "råholt.no",
  "sandnessjoen.no",
  "sandnessjøen.no",
  "skedsmokorset.no",
  "slattum.no",
  "spjelkavik.no",
  "stathelle.no",
  "stavern.no",
  "stjordalshalsen.no",
  "stjørdalshalsen.no",
  "tananger.no",
  "tranby.no",
  "vossevangen.no",
  "afjord.no",
  "åfjord.no",
  "agdenes.no",
  "al.no",
  "ål.no",
  "alesund.no",
  "ålesund.no",
  "alstahaug.no",
  "alta.no",
  "áltá.no",
  "alaheadju.no",
  "álaheadju.no",
  "alvdal.no",
  "amli.no",
  "åmli.no",
  "amot.no",
  "åmot.no",
  "andebu.no",
  "andoy.no",
  "andøy.no",
  "andasuolo.no",
  "ardal.no",
  "årdal.no",
  "aremark.no",
  "arendal.no",
  "ås.no",
  "aseral.no",
  "åseral.no",
  "asker.no",
  "askim.no",
  "askvoll.no",
  "askoy.no",
  "askøy.no",
  "asnes.no",
  "åsnes.no",
  "audnedaln.no",
  "aukra.no",
  "aure.no",
  "aurland.no",
  "aurskog-holand.no",
  "aurskog-høland.no",
  "austevoll.no",
  "austrheim.no",
  "averoy.no",
  "averøy.no",
  "balestrand.no",
  "ballangen.no",
  "balat.no",
  "bálát.no",
  "balsfjord.no",
  "bahccavuotna.no",
  "báhccavuotna.no",
  "bamble.no",
  "bardu.no",
  "beardu.no",
  "beiarn.no",
  "bajddar.no",
  "bájddar.no",
  "baidar.no",
  "báidár.no",
  "berg.no",
  "bergen.no",
  "berlevag.no",
  "berlevåg.no",
  "bearalvahki.no",
  "bearalváhki.no",
  "bindal.no",
  "birkenes.no",
  "bjarkoy.no",
  "bjarkøy.no",
  "bjerkreim.no",
  "bjugn.no",
  "bodo.no",
  "bodø.no",
  "badaddja.no",
  "bådåddjå.no",
  "budejju.no",
  "bokn.no",
  "bremanger.no",
  "bronnoy.no",
  "brønnøy.no",
  "bygland.no",
  "bykle.no",
  "barum.no",
  "bærum.no",
  "bo.telemark.no",
  "bø.telemark.no",
  "bo.nordland.no",
  "bø.nordland.no",
  "bievat.no",
  "bievát.no",
  "bomlo.no",
  "bømlo.no",
  "batsfjord.no",
  "båtsfjord.no",
  "bahcavuotna.no",
  "báhcavuotna.no",
  "dovre.no",
  "drammen.no",
  "drangedal.no",
  "dyroy.no",
  "dyrøy.no",
  "donna.no",
  "dønna.no",
  "eid.no",
  "eidfjord.no",
  "eidsberg.no",
  "eidskog.no",
  "eidsvoll.no",
  "eigersund.no",
  "elverum.no",
  "enebakk.no",
  "engerdal.no",
  "etne.no",
  "etnedal.no",
  "evenes.no",
  "evenassi.no",
  "evenášši.no",
  "evje-og-hornnes.no",
  "farsund.no",
  "fauske.no",
  "fuossko.no",
  "fuoisku.no",
  "fedje.no",
  "fet.no",
  "finnoy.no",
  "finnøy.no",
  "fitjar.no",
  "fjaler.no",
  "fjell.no",
  "flakstad.no",
  "flatanger.no",
  "flekkefjord.no",
  "flesberg.no",
  "flora.no",
  "fla.no",
  "flå.no",
  "folldal.no",
  "forsand.no",
  "fosnes.no",
  "frei.no",
  "frogn.no",
  "froland.no",
  "frosta.no",
  "frana.no",
  "fræna.no",
  "froya.no",
  "frøya.no",
  "fusa.no",
  "fyresdal.no",
  "forde.no",
  "førde.no",
  "gamvik.no",
  "gangaviika.no",
  "gáŋgaviika.no",
  "gaular.no",
  "gausdal.no",
  "gildeskal.no",
  "gildeskål.no",
  "giske.no",
  "gjemnes.no",
  "gjerdrum.no",
  "gjerstad.no",
  "gjesdal.no",
  "gjovik.no",
  "gjøvik.no",
  "gloppen.no",
  "gol.no",
  "gran.no",
  "grane.no",
  "granvin.no",
  "gratangen.no",
  "grimstad.no",
  "grong.no",
  "kraanghke.no",
  "kråanghke.no",
  "grue.no",
  "gulen.no",
  "hadsel.no",
  "halden.no",
  "halsa.no",
  "hamar.no",
  "hamaroy.no",
  "habmer.no",
  "hábmer.no",
  "hapmir.no",
  "hápmir.no",
  "hammerfest.no",
  "hammarfeasta.no",
  "hámmárfeasta.no",
  "haram.no",
  "hareid.no",
  "harstad.no",
  "hasvik.no",
  "aknoluokta.no",
  "ákŋoluokta.no",
  "hattfjelldal.no",
  "aarborte.no",
  "haugesund.no",
  "hemne.no",
  "hemnes.no",
  "hemsedal.no",
  "heroy.more-og-romsdal.no",
  "herøy.møre-og-romsdal.no",
  "heroy.nordland.no",
  "herøy.nordland.no",
  "hitra.no",
  "hjartdal.no",
  "hjelmeland.no",
  "hobol.no",
  "hobøl.no",
  "hof.no",
  "hol.no",
  "hole.no",
  "holmestrand.no",
  "holtalen.no",
  "holtålen.no",
  "hornindal.no",
  "horten.no",
  "hurdal.no",
  "hurum.no",
  "hvaler.no",
  "hyllestad.no",
  "hagebostad.no",
  "hægebostad.no",
  "hoyanger.no",
  "høyanger.no",
  "hoylandet.no",
  "høylandet.no",
  "ha.no",
  "hå.no",
  "ibestad.no",
  "inderoy.no",
  "inderøy.no",
  "iveland.no",
  "jevnaker.no",
  "jondal.no",
  "jolster.no",
  "jølster.no",
  "karasjok.no",
  "karasjohka.no",
  "kárášjohka.no",
  "karlsoy.no",
  "galsa.no",
  "gálsá.no",
  "karmoy.no",
  "karmøy.no",
  "kautokeino.no",
  "guovdageaidnu.no",
  "klepp.no",
  "klabu.no",
  "klæbu.no",
  "kongsberg.no",
  "kongsvinger.no",
  "kragero.no",
  "kragerø.no",
  "kristiansand.no",
  "kristiansund.no",
  "krodsherad.no",
  "krødsherad.no",
  "kvalsund.no",
  "rahkkeravju.no",
  "ráhkkerávju.no",
  "kvam.no",
  "kvinesdal.no",
  "kvinnherad.no",
  "kviteseid.no",
  "kvitsoy.no",
  "kvitsøy.no",
  "kvafjord.no",
  "kvæfjord.no",
  "giehtavuoatna.no",
  "kvanangen.no",
  "kvænangen.no",
  "navuotna.no",
  "návuotna.no",
  "kafjord.no",
  "kåfjord.no",
  "gaivuotna.no",
  "gáivuotna.no",
  "larvik.no",
  "lavangen.no",
  "lavagis.no",
  "loabat.no",
  "loabát.no",
  "lebesby.no",
  "davvesiida.no",
  "leikanger.no",
  "leirfjord.no",
  "leka.no",
  "leksvik.no",
  "lenvik.no",
  "leangaviika.no",
  "leaŋgaviika.no",
  "lesja.no",
  "levanger.no",
  "lier.no",
  "lierne.no",
  "lillehammer.no",
  "lillesand.no",
  "lindesnes.no",
  "lindas.no",
  "lindås.no",
  "lom.no",
  "loppa.no",
  "lahppi.no",
  "láhppi.no",
  "lund.no",
  "lunner.no",
  "luroy.no",
  "lurøy.no",
  "luster.no",
  "lyngdal.no",
  "lyngen.no",
  "ivgu.no",
  "lardal.no",
  "lerdal.no",
  "lærdal.no",
  "lodingen.no",
  "lødingen.no",
  "lorenskog.no",
  "lørenskog.no",
  "loten.no",
  "løten.no",
  "malvik.no",
  "masoy.no",
  "måsøy.no",
  "muosat.no",
  "muosát.no",
  "mandal.no",
  "marker.no",
  "marnardal.no",
  "masfjorden.no",
  "meland.no",
  "meldal.no",
  "melhus.no",
  "meloy.no",
  "meløy.no",
  "meraker.no",
  "meråker.no",
  "moareke.no",
  "moåreke.no",
  "midsund.no",
  "midtre-gauldal.no",
  "modalen.no",
  "modum.no",
  "molde.no",
  "moskenes.no",
  "moss.no",
  "mosvik.no",
  "malselv.no",
  "målselv.no",
  "malatvuopmi.no",
  "málatvuopmi.no",
  "namdalseid.no",
  "aejrie.no",
  "namsos.no",
  "namsskogan.no",
  "naamesjevuemie.no",
  "nååmesjevuemie.no",
  "laakesvuemie.no",
  "nannestad.no",
  "narvik.no",
  "narviika.no",
  "naustdal.no",
  "nedre-eiker.no",
  "nes.akershus.no",
  "nes.buskerud.no",
  "nesna.no",
  "nesodden.no",
  "nesseby.no",
  "unjarga.no",
  "unjárga.no",
  "nesset.no",
  "nissedal.no",
  "nittedal.no",
  "nord-aurdal.no",
  "nord-fron.no",
  "nord-odal.no",
  "norddal.no",
  "nordkapp.no",
  "davvenjarga.no",
  "davvenjárga.no",
  "nordre-land.no",
  "nordreisa.no",
  "raisa.no",
  "ráisa.no",
  "nore-og-uvdal.no",
  "notodden.no",
  "naroy.no",
  "nærøy.no",
  "notteroy.no",
  "nøtterøy.no",
  "odda.no",
  "oksnes.no",
  "øksnes.no",
  "oppdal.no",
  "oppegard.no",
  "oppegård.no",
  "orkdal.no",
  "orland.no",
  "ørland.no",
  "orskog.no",
  "ørskog.no",
  "orsta.no",
  "ørsta.no",
  "os.hedmark.no",
  "os.hordaland.no",
  "osen.no",
  "osteroy.no",
  "osterøy.no",
  "ostre-toten.no",
  "østre-toten.no",
  "overhalla.no",
  "ovre-eiker.no",
  "øvre-eiker.no",
  "oyer.no",
  "øyer.no",
  "oygarden.no",
  "øygarden.no",
  "oystre-slidre.no",
  "øystre-slidre.no",
  "porsanger.no",
  "porsangu.no",
  "porsáŋgu.no",
  "porsgrunn.no",
  "radoy.no",
  "radøy.no",
  "rakkestad.no",
  "rana.no",
  "ruovat.no",
  "randaberg.no",
  "rauma.no",
  "rendalen.no",
  "rennebu.no",
  "rennesoy.no",
  "rennesøy.no",
  "rindal.no",
  "ringebu.no",
  "ringerike.no",
  "ringsaker.no",
  "rissa.no",
  "risor.no",
  "risør.no",
  "roan.no",
  "rollag.no",
  "rygge.no",
  "ralingen.no",
  "rælingen.no",
  "rodoy.no",
  "rødøy.no",
  "romskog.no",
  "rømskog.no",
  "roros.no",
  "røros.no",
  "rost.no",
  "røst.no",
  "royken.no",
  "røyken.no",
  "royrvik.no",
  "røyrvik.no",
  "rade.no",
  "råde.no",
  "salangen.no",
  "siellak.no",
  "saltdal.no",
  "salat.no",
  "sálát.no",
  "sálat.no",
  "samnanger.no",
  "sande.more-og-romsdal.no",
  "sande.møre-og-romsdal.no",
  "sande.vestfold.no",
  "sandefjord.no",
  "sandnes.no",
  "sandoy.no",
  "sandøy.no",
  "sarpsborg.no",
  "sauda.no",
  "sauherad.no",
  "sel.no",
  "selbu.no",
  "selje.no",
  "seljord.no",
  "sigdal.no",
  "siljan.no",
  "sirdal.no",
  "skaun.no",
  "skedsmo.no",
  "ski.no",
  "skien.no",
  "skiptvet.no",
  "skjervoy.no",
  "skjervøy.no",
  "skierva.no",
  "skiervá.no",
  "skjak.no",
  "skjåk.no",
  "skodje.no",
  "skanland.no",
  "skånland.no",
  "skanit.no",
  "skánit.no",
  "smola.no",
  "smøla.no",
  "snillfjord.no",
  "snasa.no",
  "snåsa.no",
  "snoasa.no",
  "snaase.no",
  "snåase.no",
  "sogndal.no",
  "sokndal.no",
  "sola.no",
  "solund.no",
  "songdalen.no",
  "sortland.no",
  "spydeberg.no",
  "stange.no",
  "stavanger.no",
  "steigen.no",
  "steinkjer.no",
  "stjordal.no",
  "stjørdal.no",
  "stokke.no",
  "stor-elvdal.no",
  "stord.no",
  "stordal.no",
  "storfjord.no",
  "omasvuotna.no",
  "strand.no",
  "stranda.no",
  "stryn.no",
  "sula.no",
  "suldal.no",
  "sund.no",
  "sunndal.no",
  "surnadal.no",
  "sveio.no",
  "svelvik.no",
  "sykkylven.no",
  "sogne.no",
  "søgne.no",
  "somna.no",
  "sømna.no",
  "sondre-land.no",
  "søndre-land.no",
  "sor-aurdal.no",
  "sør-aurdal.no",
  "sor-fron.no",
  "sør-fron.no",
  "sor-odal.no",
  "sør-odal.no",
  "sor-varanger.no",
  "sør-varanger.no",
  "matta-varjjat.no",
  "mátta-várjjat.no",
  "sorfold.no",
  "sørfold.no",
  "sorreisa.no",
  "sørreisa.no",
  "sorum.no",
  "sørum.no",
  "tana.no",
  "deatnu.no",
  "time.no",
  "tingvoll.no",
  "tinn.no",
  "tjeldsund.no",
  "dielddanuorri.no",
  "tjome.no",
  "tjøme.no",
  "tokke.no",
  "tolga.no",
  "torsken.no",
  "tranoy.no",
  "tranøy.no",
  "tromso.no",
  "tromsø.no",
  "tromsa.no",
  "romsa.no",
  "trondheim.no",
  "troandin.no",
  "trysil.no",
  "trana.no",
  "træna.no",
  "trogstad.no",
  "trøgstad.no",
  "tvedestrand.no",
  "tydal.no",
  "tynset.no",
  "tysfjord.no",
  "divtasvuodna.no",
  "divttasvuotna.no",
  "tysnes.no",
  "tysvar.no",
  "tysvær.no",
  "tonsberg.no",
  "tønsberg.no",
  "ullensaker.no",
  "ullensvang.no",
  "ulvik.no",
  "utsira.no",
  "vadso.no",
  "vadsø.no",
  "cahcesuolo.no",
  "čáhcesuolo.no",
  "vaksdal.no",
  "valle.no",
  "vang.no",
  "vanylven.no",
  "vardo.no",
  "vardø.no",
  "varggat.no",
  "várggát.no",
  "vefsn.no",
  "vaapste.no",
  "vega.no",
  "vegarshei.no",
  "vegårshei.no",
  "vennesla.no",
  "verdal.no",
  "verran.no",
  "vestby.no",
  "vestnes.no",
  "vestre-slidre.no",
  "vestre-toten.no",
  "vestvagoy.no",
  "vestvågøy.no",
  "vevelstad.no",
  "vik.no",
  "vikna.no",
  "vindafjord.no",
  "volda.no",
  "voss.no",
  "varoy.no",
  "værøy.no",
  "vagan.no",
  "vågan.no",
  "voagat.no",
  "vagsoy.no",
  "vågsøy.no",
  "vaga.no",
  "vågå.no",
  "valer.ostfold.no",
  "våler.østfold.no",
  "valer.hedmark.no",
  "våler.hedmark.no",
  "*.np",
  "nr",
  "biz.nr",
  "info.nr",
  "gov.nr",
  "edu.nr",
  "org.nr",
  "net.nr",
  "com.nr",
  "nu",
  "nz",
  "ac.nz",
  "co.nz",
  "cri.nz",
  "geek.nz",
  "gen.nz",
  "govt.nz",
  "health.nz",
  "iwi.nz",
  "kiwi.nz",
  "maori.nz",
  "mil.nz",
  "māori.nz",
  "net.nz",
  "org.nz",
  "parliament.nz",
  "school.nz",
  "om",
  "co.om",
  "com.om",
  "edu.om",
  "gov.om",
  "med.om",
  "museum.om",
  "net.om",
  "org.om",
  "pro.om",
  "onion",
  "org",
  "pa",
  "ac.pa",
  "gob.pa",
  "com.pa",
  "org.pa",
  "sld.pa",
  "edu.pa",
  "net.pa",
  "ing.pa",
  "abo.pa",
  "med.pa",
  "nom.pa",
  "pe",
  "edu.pe",
  "gob.pe",
  "nom.pe",
  "mil.pe",
  "org.pe",
  "com.pe",
  "net.pe",
  "pf",
  "com.pf",
  "org.pf",
  "edu.pf",
  "*.pg",
  "ph",
  "com.ph",
  "net.ph",
  "org.ph",
  "gov.ph",
  "edu.ph",
  "ngo.ph",
  "mil.ph",
  "i.ph",
  "pk",
  "com.pk",
  "net.pk",
  "edu.pk",
  "org.pk",
  "fam.pk",
  "biz.pk",
  "web.pk",
  "gov.pk",
  "gob.pk",
  "gok.pk",
  "gon.pk",
  "gop.pk",
  "gos.pk",
  "info.pk",
  "pl",
  "com.pl",
  "net.pl",
  "org.pl",
  "aid.pl",
  "agro.pl",
  "atm.pl",
  "auto.pl",
  "biz.pl",
  "edu.pl",
  "gmina.pl",
  "gsm.pl",
  "info.pl",
  "mail.pl",
  "miasta.pl",
  "media.pl",
  "mil.pl",
  "nieruchomosci.pl",
  "nom.pl",
  "pc.pl",
  "powiat.pl",
  "priv.pl",
  "realestate.pl",
  "rel.pl",
  "sex.pl",
  "shop.pl",
  "sklep.pl",
  "sos.pl",
  "szkola.pl",
  "targi.pl",
  "tm.pl",
  "tourism.pl",
  "travel.pl",
  "turystyka.pl",
  "gov.pl",
  "ap.gov.pl",
  "ic.gov.pl",
  "is.gov.pl",
  "us.gov.pl",
  "kmpsp.gov.pl",
  "kppsp.gov.pl",
  "kwpsp.gov.pl",
  "psp.gov.pl",
  "wskr.gov.pl",
  "kwp.gov.pl",
  "mw.gov.pl",
  "ug.gov.pl",
  "um.gov.pl",
  "umig.gov.pl",
  "ugim.gov.pl",
  "upow.gov.pl",
  "uw.gov.pl",
  "starostwo.gov.pl",
  "pa.gov.pl",
  "po.gov.pl",
  "psse.gov.pl",
  "pup.gov.pl",
  "rzgw.gov.pl",
  "sa.gov.pl",
  "so.gov.pl",
  "sr.gov.pl",
  "wsa.gov.pl",
  "sko.gov.pl",
  "uzs.gov.pl",
  "wiih.gov.pl",
  "winb.gov.pl",
  "pinb.gov.pl",
  "wios.gov.pl",
  "witd.gov.pl",
  "wzmiuw.gov.pl",
  "piw.gov.pl",
  "wiw.gov.pl",
  "griw.gov.pl",
  "wif.gov.pl",
  "oum.gov.pl",
  "sdn.gov.pl",
  "zp.gov.pl",
  "uppo.gov.pl",
  "mup.gov.pl",
  "wuoz.gov.pl",
  "konsulat.gov.pl",
  "oirm.gov.pl",
  "augustow.pl",
  "babia-gora.pl",
  "bedzin.pl",
  "beskidy.pl",
  "bialowieza.pl",
  "bialystok.pl",
  "bielawa.pl",
  "bieszczady.pl",
  "boleslawiec.pl",
  "bydgoszcz.pl",
  "bytom.pl",
  "cieszyn.pl",
  "czeladz.pl",
  "czest.pl",
  "dlugoleka.pl",
  "elblag.pl",
  "elk.pl",
  "glogow.pl",
  "gniezno.pl",
  "gorlice.pl",
  "grajewo.pl",
  "ilawa.pl",
  "jaworzno.pl",
  "jelenia-gora.pl",
  "jgora.pl",
  "kalisz.pl",
  "kazimierz-dolny.pl",
  "karpacz.pl",
  "kartuzy.pl",
  "kaszuby.pl",
  "katowice.pl",
  "kepno.pl",
  "ketrzyn.pl",
  "klodzko.pl",
  "kobierzyce.pl",
  "kolobrzeg.pl",
  "konin.pl",
  "konskowola.pl",
  "kutno.pl",
  "lapy.pl",
  "lebork.pl",
  "legnica.pl",
  "lezajsk.pl",
  "limanowa.pl",
  "lomza.pl",
  "lowicz.pl",
  "lubin.pl",
  "lukow.pl",
  "malbork.pl",
  "malopolska.pl",
  "mazowsze.pl",
  "mazury.pl",
  "mielec.pl",
  "mielno.pl",
  "mragowo.pl",
  "naklo.pl",
  "nowaruda.pl",
  "nysa.pl",
  "olawa.pl",
  "olecko.pl",
  "olkusz.pl",
  "olsztyn.pl",
  "opoczno.pl",
  "opole.pl",
  "ostroda.pl",
  "ostroleka.pl",
  "ostrowiec.pl",
  "ostrowwlkp.pl",
  "pila.pl",
  "pisz.pl",
  "podhale.pl",
  "podlasie.pl",
  "polkowice.pl",
  "pomorze.pl",
  "pomorskie.pl",
  "prochowice.pl",
  "pruszkow.pl",
  "przeworsk.pl",
  "pulawy.pl",
  "radom.pl",
  "rawa-maz.pl",
  "rybnik.pl",
  "rzeszow.pl",
  "sanok.pl",
  "sejny.pl",
  "slask.pl",
  "slupsk.pl",
  "sosnowiec.pl",
  "stalowa-wola.pl",
  "skoczow.pl",
  "starachowice.pl",
  "stargard.pl",
  "suwalki.pl",
  "swidnica.pl",
  "swiebodzin.pl",
  "swinoujscie.pl",
  "szczecin.pl",
  "szczytno.pl",
  "tarnobrzeg.pl",
  "tgory.pl",
  "turek.pl",
  "tychy.pl",
  "ustka.pl",
  "walbrzych.pl",
  "warmia.pl",
  "warszawa.pl",
  "waw.pl",
  "wegrow.pl",
  "wielun.pl",
  "wlocl.pl",
  "wloclawek.pl",
  "wodzislaw.pl",
  "wolomin.pl",
  "wroclaw.pl",
  "zachpomor.pl",
  "zagan.pl",
  "zarow.pl",
  "zgora.pl",
  "zgorzelec.pl",
  "pm",
  "pn",
  "gov.pn",
  "co.pn",
  "org.pn",
  "edu.pn",
  "net.pn",
  "post",
  "pr",
  "com.pr",
  "net.pr",
  "org.pr",
  "gov.pr",
  "edu.pr",
  "isla.pr",
  "pro.pr",
  "biz.pr",
  "info.pr",
  "name.pr",
  "est.pr",
  "prof.pr",
  "ac.pr",
  "pro",
  "aaa.pro",
  "aca.pro",
  "acct.pro",
  "avocat.pro",
  "bar.pro",
  "cpa.pro",
  "eng.pro",
  "jur.pro",
  "law.pro",
  "med.pro",
  "recht.pro",
  "ps",
  "edu.ps",
  "gov.ps",
  "sec.ps",
  "plo.ps",
  "com.ps",
  "org.ps",
  "net.ps",
  "pt",
  "net.pt",
  "gov.pt",
  "org.pt",
  "edu.pt",
  "int.pt",
  "publ.pt",
  "com.pt",
  "nome.pt",
  "pw",
  "co.pw",
  "ne.pw",
  "or.pw",
  "ed.pw",
  "go.pw",
  "belau.pw",
  "py",
  "com.py",
  "coop.py",
  "edu.py",
  "gov.py",
  "mil.py",
  "net.py",
  "org.py",
  "qa",
  "com.qa",
  "edu.qa",
  "gov.qa",
  "mil.qa",
  "name.qa",
  "net.qa",
  "org.qa",
  "sch.qa",
  "re",
  "asso.re",
  "com.re",
  "nom.re",
  "ro",
  "arts.ro",
  "com.ro",
  "firm.ro",
  "info.ro",
  "nom.ro",
  "nt.ro",
  "org.ro",
  "rec.ro",
  "store.ro",
  "tm.ro",
  "www.ro",
  "rs",
  "ac.rs",
  "co.rs",
  "edu.rs",
  "gov.rs",
  "in.rs",
  "org.rs",
  "ru",
  "rw",
  "ac.rw",
  "co.rw",
  "coop.rw",
  "gov.rw",
  "mil.rw",
  "net.rw",
  "org.rw",
  "sa",
  "com.sa",
  "net.sa",
  "org.sa",
  "gov.sa",
  "med.sa",
  "pub.sa",
  "edu.sa",
  "sch.sa",
  "sb",
  "com.sb",
  "edu.sb",
  "gov.sb",
  "net.sb",
  "org.sb",
  "sc",
  "com.sc",
  "gov.sc",
  "net.sc",
  "org.sc",
  "edu.sc",
  "sd",
  "com.sd",
  "net.sd",
  "org.sd",
  "edu.sd",
  "med.sd",
  "tv.sd",
  "gov.sd",
  "info.sd",
  "se",
  "a.se",
  "ac.se",
  "b.se",
  "bd.se",
  "brand.se",
  "c.se",
  "d.se",
  "e.se",
  "f.se",
  "fh.se",
  "fhsk.se",
  "fhv.se",
  "g.se",
  "h.se",
  "i.se",
  "k.se",
  "komforb.se",
  "kommunalforbund.se",
  "komvux.se",
  "l.se",
  "lanbib.se",
  "m.se",
  "n.se",
  "naturbruksgymn.se",
  "o.se",
  "org.se",
  "p.se",
  "parti.se",
  "pp.se",
  "press.se",
  "r.se",
  "s.se",
  "t.se",
  "tm.se",
  "u.se",
  "w.se",
  "x.se",
  "y.se",
  "z.se",
  "sg",
  "com.sg",
  "net.sg",
  "org.sg",
  "gov.sg",
  "edu.sg",
  "per.sg",
  "sh",
  "com.sh",
  "net.sh",
  "gov.sh",
  "org.sh",
  "mil.sh",
  "si",
  "sj",
  "sk",
  "sl",
  "com.sl",
  "net.sl",
  "edu.sl",
  "gov.sl",
  "org.sl",
  "sm",
  "sn",
  "art.sn",
  "com.sn",
  "edu.sn",
  "gouv.sn",
  "org.sn",
  "perso.sn",
  "univ.sn",
  "so",
  "com.so",
  "edu.so",
  "gov.so",
  "me.so",
  "net.so",
  "org.so",
  "sr",
  "ss",
  "biz.ss",
  "com.ss",
  "edu.ss",
  "gov.ss",
  "me.ss",
  "net.ss",
  "org.ss",
  "sch.ss",
  "st",
  "co.st",
  "com.st",
  "consulado.st",
  "edu.st",
  "embaixada.st",
  "mil.st",
  "net.st",
  "org.st",
  "principe.st",
  "saotome.st",
  "store.st",
  "su",
  "sv",
  "com.sv",
  "edu.sv",
  "gob.sv",
  "org.sv",
  "red.sv",
  "sx",
  "gov.sx",
  "sy",
  "edu.sy",
  "gov.sy",
  "net.sy",
  "mil.sy",
  "com.sy",
  "org.sy",
  "sz",
  "co.sz",
  "ac.sz",
  "org.sz",
  "tc",
  "td",
  "tel",
  "tf",
  "tg",
  "th",
  "ac.th",
  "co.th",
  "go.th",
  "in.th",
  "mi.th",
  "net.th",
  "or.th",
  "tj",
  "ac.tj",
  "biz.tj",
  "co.tj",
  "com.tj",
  "edu.tj",
  "go.tj",
  "gov.tj",
  "int.tj",
  "mil.tj",
  "name.tj",
  "net.tj",
  "nic.tj",
  "org.tj",
  "test.tj",
  "web.tj",
  "tk",
  "tl",
  "gov.tl",
  "tm",
  "com.tm",
  "co.tm",
  "org.tm",
  "net.tm",
  "nom.tm",
  "gov.tm",
  "mil.tm",
  "edu.tm",
  "tn",
  "com.tn",
  "ens.tn",
  "fin.tn",
  "gov.tn",
  "ind.tn",
  "info.tn",
  "intl.tn",
  "mincom.tn",
  "nat.tn",
  "net.tn",
  "org.tn",
  "perso.tn",
  "tourism.tn",
  "to",
  "com.to",
  "gov.to",
  "net.to",
  "org.to",
  "edu.to",
  "mil.to",
  "tr",
  "av.tr",
  "bbs.tr",
  "bel.tr",
  "biz.tr",
  "com.tr",
  "dr.tr",
  "edu.tr",
  "gen.tr",
  "gov.tr",
  "info.tr",
  "mil.tr",
  "k12.tr",
  "kep.tr",
  "name.tr",
  "net.tr",
  "org.tr",
  "pol.tr",
  "tel.tr",
  "tsk.tr",
  "tv.tr",
  "web.tr",
  "nc.tr",
  "gov.nc.tr",
  "tt",
  "co.tt",
  "com.tt",
  "org.tt",
  "net.tt",
  "biz.tt",
  "info.tt",
  "pro.tt",
  "int.tt",
  "coop.tt",
  "jobs.tt",
  "mobi.tt",
  "travel.tt",
  "museum.tt",
  "aero.tt",
  "name.tt",
  "gov.tt",
  "edu.tt",
  "tv",
  "tw",
  "edu.tw",
  "gov.tw",
  "mil.tw",
  "com.tw",
  "net.tw",
  "org.tw",
  "idv.tw",
  "game.tw",
  "ebiz.tw",
  "club.tw",
  "網路.tw",
  "組織.tw",
  "商業.tw",
  "tz",
  "ac.tz",
  "co.tz",
  "go.tz",
  "hotel.tz",
  "info.tz",
  "me.tz",
  "mil.tz",
  "mobi.tz",
  "ne.tz",
  "or.tz",
  "sc.tz",
  "tv.tz",
  "ua",
  "com.ua",
  "edu.ua",
  "gov.ua",
  "in.ua",
  "net.ua",
  "org.ua",
  "cherkassy.ua",
  "cherkasy.ua",
  "chernigov.ua",
  "chernihiv.ua",
  "chernivtsi.ua",
  "chernovtsy.ua",
  "ck.ua",
  "cn.ua",
  "cr.ua",
  "crimea.ua",
  "cv.ua",
  "dn.ua",
  "dnepropetrovsk.ua",
  "dnipropetrovsk.ua",
  "donetsk.ua",
  "dp.ua",
  "if.ua",
  "ivano-frankivsk.ua",
  "kh.ua",
  "kharkiv.ua",
  "kharkov.ua",
  "kherson.ua",
  "khmelnitskiy.ua",
  "khmelnytskyi.ua",
  "kiev.ua",
  "kirovograd.ua",
  "km.ua",
  "kr.ua",
  "krym.ua",
  "ks.ua",
  "kv.ua",
  "kyiv.ua",
  "lg.ua",
  "lt.ua",
  "lugansk.ua",
  "lutsk.ua",
  "lv.ua",
  "lviv.ua",
  "mk.ua",
  "mykolaiv.ua",
  "nikolaev.ua",
  "od.ua",
  "odesa.ua",
  "odessa.ua",
  "pl.ua",
  "poltava.ua",
  "rivne.ua",
  "rovno.ua",
  "rv.ua",
  "sb.ua",
  "sebastopol.ua",
  "sevastopol.ua",
  "sm.ua",
  "sumy.ua",
  "te.ua",
  "ternopil.ua",
  "uz.ua",
  "uzhgorod.ua",
  "vinnica.ua",
  "vinnytsia.ua",
  "vn.ua",
  "volyn.ua",
  "yalta.ua",
  "zaporizhzhe.ua",
  "zaporizhzhia.ua",
  "zhitomir.ua",
  "zhytomyr.ua",
  "zp.ua",
  "zt.ua",
  "ug",
  "co.ug",
  "or.ug",
  "ac.ug",
  "sc.ug",
  "go.ug",
  "ne.ug",
  "com.ug",
  "org.ug",
  "uk",
  "ac.uk",
  "co.uk",
  "gov.uk",
  "ltd.uk",
  "me.uk",
  "net.uk",
  "nhs.uk",
  "org.uk",
  "plc.uk",
  "police.uk",
  "*.sch.uk",
  "us",
  "dni.us",
  "fed.us",
  "isa.us",
  "kids.us",
  "nsn.us",
  "ak.us",
  "al.us",
  "ar.us",
  "as.us",
  "az.us",
  "ca.us",
  "co.us",
  "ct.us",
  "dc.us",
  "de.us",
  "fl.us",
  "ga.us",
  "gu.us",
  "hi.us",
  "ia.us",
  "id.us",
  "il.us",
  "in.us",
  "ks.us",
  "ky.us",
  "la.us",
  "ma.us",
  "md.us",
  "me.us",
  "mi.us",
  "mn.us",
  "mo.us",
  "ms.us",
  "mt.us",
  "nc.us",
  "nd.us",
  "ne.us",
  "nh.us",
  "nj.us",
  "nm.us",
  "nv.us",
  "ny.us",
  "oh.us",
  "ok.us",
  "or.us",
  "pa.us",
  "pr.us",
  "ri.us",
  "sc.us",
  "sd.us",
  "tn.us",
  "tx.us",
  "ut.us",
  "vi.us",
  "vt.us",
  "va.us",
  "wa.us",
  "wi.us",
  "wv.us",
  "wy.us",
  "k12.ak.us",
  "k12.al.us",
  "k12.ar.us",
  "k12.as.us",
  "k12.az.us",
  "k12.ca.us",
  "k12.co.us",
  "k12.ct.us",
  "k12.dc.us",
  "k12.de.us",
  "k12.fl.us",
  "k12.ga.us",
  "k12.gu.us",
  "k12.ia.us",
  "k12.id.us",
  "k12.il.us",
  "k12.in.us",
  "k12.ks.us",
  "k12.ky.us",
  "k12.la.us",
  "k12.ma.us",
  "k12.md.us",
  "k12.me.us",
  "k12.mi.us",
  "k12.mn.us",
  "k12.mo.us",
  "k12.ms.us",
  "k12.mt.us",
  "k12.nc.us",
  "k12.ne.us",
  "k12.nh.us",
  "k12.nj.us",
  "k12.nm.us",
  "k12.nv.us",
  "k12.ny.us",
  "k12.oh.us",
  "k12.ok.us",
  "k12.or.us",
  "k12.pa.us",
  "k12.pr.us",
  "k12.sc.us",
  "k12.tn.us",
  "k12.tx.us",
  "k12.ut.us",
  "k12.vi.us",
  "k12.vt.us",
  "k12.va.us",
  "k12.wa.us",
  "k12.wi.us",
  "k12.wy.us",
  "cc.ak.us",
  "cc.al.us",
  "cc.ar.us",
  "cc.as.us",
  "cc.az.us",
  "cc.ca.us",
  "cc.co.us",
  "cc.ct.us",
  "cc.dc.us",
  "cc.de.us",
  "cc.fl.us",
  "cc.ga.us",
  "cc.gu.us",
  "cc.hi.us",
  "cc.ia.us",
  "cc.id.us",
  "cc.il.us",
  "cc.in.us",
  "cc.ks.us",
  "cc.ky.us",
  "cc.la.us",
  "cc.ma.us",
  "cc.md.us",
  "cc.me.us",
  "cc.mi.us",
  "cc.mn.us",
  "cc.mo.us",
  "cc.ms.us",
  "cc.mt.us",
  "cc.nc.us",
  "cc.nd.us",
  "cc.ne.us",
  "cc.nh.us",
  "cc.nj.us",
  "cc.nm.us",
  "cc.nv.us",
  "cc.ny.us",
  "cc.oh.us",
  "cc.ok.us",
  "cc.or.us",
  "cc.pa.us",
  "cc.pr.us",
  "cc.ri.us",
  "cc.sc.us",
  "cc.sd.us",
  "cc.tn.us",
  "cc.tx.us",
  "cc.ut.us",
  "cc.vi.us",
  "cc.vt.us",
  "cc.va.us",
  "cc.wa.us",
  "cc.wi.us",
  "cc.wv.us",
  "cc.wy.us",
  "lib.ak.us",
  "lib.al.us",
  "lib.ar.us",
  "lib.as.us",
  "lib.az.us",
  "lib.ca.us",
  "lib.co.us",
  "lib.ct.us",
  "lib.dc.us",
  "lib.fl.us",
  "lib.ga.us",
  "lib.gu.us",
  "lib.hi.us",
  "lib.ia.us",
  "lib.id.us",
  "lib.il.us",
  "lib.in.us",
  "lib.ks.us",
  "lib.ky.us",
  "lib.la.us",
  "lib.ma.us",
  "lib.md.us",
  "lib.me.us",
  "lib.mi.us",
  "lib.mn.us",
  "lib.mo.us",
  "lib.ms.us",
  "lib.mt.us",
  "lib.nc.us",
  "lib.nd.us",
  "lib.ne.us",
  "lib.nh.us",
  "lib.nj.us",
  "lib.nm.us",
  "lib.nv.us",
  "lib.ny.us",
  "lib.oh.us",
  "lib.ok.us",
  "lib.or.us",
  "lib.pa.us",
  "lib.pr.us",
  "lib.ri.us",
  "lib.sc.us",
  "lib.sd.us",
  "lib.tn.us",
  "lib.tx.us",
  "lib.ut.us",
  "lib.vi.us",
  "lib.vt.us",
  "lib.va.us",
  "lib.wa.us",
  "lib.wi.us",
  "lib.wy.us",
  "pvt.k12.ma.us",
  "chtr.k12.ma.us",
  "paroch.k12.ma.us",
  "ann-arbor.mi.us",
  "cog.mi.us",
  "dst.mi.us",
  "eaton.mi.us",
  "gen.mi.us",
  "mus.mi.us",
  "tec.mi.us",
  "washtenaw.mi.us",
  "uy",
  "com.uy",
  "edu.uy",
  "gub.uy",
  "mil.uy",
  "net.uy",
  "org.uy",
  "uz",
  "co.uz",
  "com.uz",
  "net.uz",
  "org.uz",
  "va",
  "vc",
  "com.vc",
  "net.vc",
  "org.vc",
  "gov.vc",
  "mil.vc",
  "edu.vc",
  "ve",
  "arts.ve",
  "bib.ve",
  "co.ve",
  "com.ve",
  "e12.ve",
  "edu.ve",
  "firm.ve",
  "gob.ve",
  "gov.ve",
  "info.ve",
  "int.ve",
  "mil.ve",
  "net.ve",
  "nom.ve",
  "org.ve",
  "rar.ve",
  "rec.ve",
  "store.ve",
  "tec.ve",
  "web.ve",
  "vg",
  "vi",
  "co.vi",
  "com.vi",
  "k12.vi",
  "net.vi",
  "org.vi",
  "vn",
  "com.vn",
  "net.vn",
  "org.vn",
  "edu.vn",
  "gov.vn",
  "int.vn",
  "ac.vn",
  "biz.vn",
  "info.vn",
  "name.vn",
  "pro.vn",
  "health.vn",
  "vu",
  "com.vu",
  "edu.vu",
  "net.vu",
  "org.vu",
  "wf",
  "ws",
  "com.ws",
  "net.ws",
  "org.ws",
  "gov.ws",
  "edu.ws",
  "yt",
  "امارات",
  "հայ",
  "বাংলা",
  "бг",
  "البحرين",
  "бел",
  "中国",
  "中國",
  "الجزائر",
  "مصر",
  "ею",
  "ευ",
  "موريتانيا",
  "გე",
  "ελ",
  "香港",
  "公司.香港",
  "教育.香港",
  "政府.香港",
  "個人.香港",
  "網絡.香港",
  "組織.香港",
  "ಭಾರತ",
  "ଭାରତ",
  "ভাৰত",
  "भारतम्",
  "भारोत",
  "ڀارت",
  "ഭാരതം",
  "भारत",
  "بارت",
  "بھارت",
  "భారత్",
  "ભારત",
  "ਭਾਰਤ",
  "ভারত",
  "இந்தியா",
  "ایران",
  "ايران",
  "عراق",
  "الاردن",
  "한국",
  "қаз",
  "ລາວ",
  "ලංකා",
  "இலங்கை",
  "المغرب",
  "мкд",
  "мон",
  "澳門",
  "澳门",
  "مليسيا",
  "عمان",
  "پاکستان",
  "پاكستان",
  "فلسطين",
  "срб",
  "пр.срб",
  "орг.срб",
  "обр.срб",
  "од.срб",
  "упр.срб",
  "ак.срб",
  "рф",
  "قطر",
  "السعودية",
  "السعودیة",
  "السعودیۃ",
  "السعوديه",
  "سودان",
  "新加坡",
  "சிங்கப்பூர்",
  "سورية",
  "سوريا",
  "ไทย",
  "ศึกษา.ไทย",
  "ธุรกิจ.ไทย",
  "รัฐบาล.ไทย",
  "ทหาร.ไทย",
  "เน็ต.ไทย",
  "องค์กร.ไทย",
  "تونس",
  "台灣",
  "台湾",
  "臺灣",
  "укр",
  "اليمن",
  "xxx",
  "ye",
  "com.ye",
  "edu.ye",
  "gov.ye",
  "net.ye",
  "mil.ye",
  "org.ye",
  "ac.za",
  "agric.za",
  "alt.za",
  "co.za",
  "edu.za",
  "gov.za",
  "grondar.za",
  "law.za",
  "mil.za",
  "net.za",
  "ngo.za",
  "nic.za",
  "nis.za",
  "nom.za",
  "org.za",
  "school.za",
  "tm.za",
  "web.za",
  "zm",
  "ac.zm",
  "biz.zm",
  "co.zm",
  "com.zm",
  "edu.zm",
  "gov.zm",
  "info.zm",
  "mil.zm",
  "net.zm",
  "org.zm",
  "sch.zm",
  "zw",
  "ac.zw",
  "co.zw",
  "gov.zw",
  "mil.zw",
  "org.zw",
  "aaa",
  "aarp",
  "abarth",
  "abb",
  "abbott",
  "abbvie",
  "abc",
  "able",
  "abogado",
  "abudhabi",
  "academy",
  "accenture",
  "accountant",
  "accountants",
  "aco",
  "actor",
  "adac",
  "ads",
  "adult",
  "aeg",
  "aetna",
  "afl",
  "africa",
  "agakhan",
  "agency",
  "aig",
  "airbus",
  "airforce",
  "airtel",
  "akdn",
  "alfaromeo",
  "alibaba",
  "alipay",
  "allfinanz",
  "allstate",
  "ally",
  "alsace",
  "alstom",
  "amazon",
  "americanexpress",
  "americanfamily",
  "amex",
  "amfam",
  "amica",
  "amsterdam",
  "analytics",
  "android",
  "anquan",
  "anz",
  "aol",
  "apartments",
  "app",
  "apple",
  "aquarelle",
  "arab",
  "aramco",
  "archi",
  "army",
  "art",
  "arte",
  "asda",
  "associates",
  "athleta",
  "attorney",
  "auction",
  "audi",
  "audible",
  "audio",
  "auspost",
  "author",
  "auto",
  "autos",
  "avianca",
  "aws",
  "axa",
  "azure",
  "baby",
  "baidu",
  "banamex",
  "bananarepublic",
  "band",
  "bank",
  "bar",
  "barcelona",
  "barclaycard",
  "barclays",
  "barefoot",
  "bargains",
  "baseball",
  "basketball",
  "bauhaus",
  "bayern",
  "bbc",
  "bbt",
  "bbva",
  "bcg",
  "bcn",
  "beats",
  "beauty",
  "beer",
  "bentley",
  "berlin",
  "best",
  "bestbuy",
  "bet",
  "bharti",
  "bible",
  "bid",
  "bike",
  "bing",
  "bingo",
  "bio",
  "black",
  "blackfriday",
  "blockbuster",
  "blog",
  "bloomberg",
  "blue",
  "bms",
  "bmw",
  "bnpparibas",
  "boats",
  "boehringer",
  "bofa",
  "bom",
  "bond",
  "boo",
  "book",
  "booking",
  "bosch",
  "bostik",
  "boston",
  "bot",
  "boutique",
  "box",
  "bradesco",
  "bridgestone",
  "broadway",
  "broker",
  "brother",
  "brussels",
  "bugatti",
  "build",
  "builders",
  "business",
  "buy",
  "buzz",
  "bzh",
  "cab",
  "cafe",
  "cal",
  "call",
  "calvinklein",
  "cam",
  "camera",
  "camp",
  "cancerresearch",
  "canon",
  "capetown",
  "capital",
  "capitalone",
  "car",
  "caravan",
  "cards",
  "care",
  "career",
  "careers",
  "cars",
  "casa",
  "case",
  "cash",
  "casino",
  "catering",
  "catholic",
  "cba",
  "cbn",
  "cbre",
  "cbs",
  "center",
  "ceo",
  "cern",
  "cfa",
  "cfd",
  "chanel",
  "channel",
  "charity",
  "chase",
  "chat",
  "cheap",
  "chintai",
  "christmas",
  "chrome",
  "church",
  "cipriani",
  "circle",
  "cisco",
  "citadel",
  "citi",
  "citic",
  "city",
  "cityeats",
  "claims",
  "cleaning",
  "click",
  "clinic",
  "clinique",
  "clothing",
  "cloud",
  "club",
  "clubmed",
  "coach",
  "codes",
  "coffee",
  "college",
  "cologne",
  "comcast",
  "commbank",
  "community",
  "company",
  "compare",
  "computer",
  "comsec",
  "condos",
  "construction",
  "consulting",
  "contact",
  "contractors",
  "cooking",
  "cookingchannel",
  "cool",
  "corsica",
  "country",
  "coupon",
  "coupons",
  "courses",
  "cpa",
  "credit",
  "creditcard",
  "creditunion",
  "cricket",
  "crown",
  "crs",
  "cruise",
  "cruises",
  "cuisinella",
  "cymru",
  "cyou",
  "dabur",
  "dad",
  "dance",
  "data",
  "date",
  "dating",
  "datsun",
  "day",
  "dclk",
  "dds",
  "deal",
  "dealer",
  "deals",
  "degree",
  "delivery",
  "dell",
  "deloitte",
  "delta",
  "democrat",
  "dental",
  "dentist",
  "desi",
  "design",
  "dev",
  "dhl",
  "diamonds",
  "diet",
  "digital",
  "direct",
  "directory",
  "discount",
  "discover",
  "dish",
  "diy",
  "dnp",
  "docs",
  "doctor",
  "dog",
  "domains",
  "dot",
  "download",
  "drive",
  "dtv",
  "dubai",
  "dunlop",
  "dupont",
  "durban",
  "dvag",
  "dvr",
  "earth",
  "eat",
  "eco",
  "edeka",
  "education",
  "email",
  "emerck",
  "energy",
  "engineer",
  "engineering",
  "enterprises",
  "epson",
  "equipment",
  "ericsson",
  "erni",
  "esq",
  "estate",
  "etisalat",
  "eurovision",
  "eus",
  "events",
  "exchange",
  "expert",
  "exposed",
  "express",
  "extraspace",
  "fage",
  "fail",
  "fairwinds",
  "faith",
  "family",
  "fan",
  "fans",
  "farm",
  "farmers",
  "fashion",
  "fast",
  "fedex",
  "feedback",
  "ferrari",
  "ferrero",
  "fiat",
  "fidelity",
  "fido",
  "film",
  "final",
  "finance",
  "financial",
  "fire",
  "firestone",
  "firmdale",
  "fish",
  "fishing",
  "fit",
  "fitness",
  "flickr",
  "flights",
  "flir",
  "florist",
  "flowers",
  "fly",
  "foo",
  "food",
  "foodnetwork",
  "football",
  "ford",
  "forex",
  "forsale",
  "forum",
  "foundation",
  "fox",
  "free",
  "fresenius",
  "frl",
  "frogans",
  "frontdoor",
  "frontier",
  "ftr",
  "fujitsu",
  "fun",
  "fund",
  "furniture",
  "futbol",
  "fyi",
  "gal",
  "gallery",
  "gallo",
  "gallup",
  "game",
  "games",
  "gap",
  "garden",
  "gay",
  "gbiz",
  "gdn",
  "gea",
  "gent",
  "genting",
  "george",
  "ggee",
  "gift",
  "gifts",
  "gives",
  "giving",
  "glass",
  "gle",
  "global",
  "globo",
  "gmail",
  "gmbh",
  "gmo",
  "gmx",
  "godaddy",
  "gold",
  "goldpoint",
  "golf",
  "goo",
  "goodyear",
  "goog",
  "google",
  "gop",
  "got",
  "grainger",
  "graphics",
  "gratis",
  "green",
  "gripe",
  "grocery",
  "group",
  "guardian",
  "gucci",
  "guge",
  "guide",
  "guitars",
  "guru",
  "hair",
  "hamburg",
  "hangout",
  "haus",
  "hbo",
  "hdfc",
  "hdfcbank",
  "health",
  "healthcare",
  "help",
  "helsinki",
  "here",
  "hermes",
  "hgtv",
  "hiphop",
  "hisamitsu",
  "hitachi",
  "hiv",
  "hkt",
  "hockey",
  "holdings",
  "holiday",
  "homedepot",
  "homegoods",
  "homes",
  "homesense",
  "honda",
  "horse",
  "hospital",
  "host",
  "hosting",
  "hot",
  "hoteles",
  "hotels",
  "hotmail",
  "house",
  "how",
  "hsbc",
  "hughes",
  "hyatt",
  "hyundai",
  "ibm",
  "icbc",
  "ice",
  "icu",
  "ieee",
  "ifm",
  "ikano",
  "imamat",
  "imdb",
  "immo",
  "immobilien",
  "inc",
  "industries",
  "infiniti",
  "ing",
  "ink",
  "institute",
  "insurance",
  "insure",
  "international",
  "intuit",
  "investments",
  "ipiranga",
  "irish",
  "ismaili",
  "ist",
  "istanbul",
  "itau",
  "itv",
  "jaguar",
  "java",
  "jcb",
  "jeep",
  "jetzt",
  "jewelry",
  "jio",
  "jll",
  "jmp",
  "jnj",
  "joburg",
  "jot",
  "joy",
  "jpmorgan",
  "jprs",
  "juegos",
  "juniper",
  "kaufen",
  "kddi",
  "kerryhotels",
  "kerrylogistics",
  "kerryproperties",
  "kfh",
  "kia",
  "kids",
  "kim",
  "kinder",
  "kindle",
  "kitchen",
  "kiwi",
  "koeln",
  "komatsu",
  "kosher",
  "kpmg",
  "kpn",
  "krd",
  "kred",
  "kuokgroup",
  "kyoto",
  "lacaixa",
  "lamborghini",
  "lamer",
  "lancaster",
  "lancia",
  "land",
  "landrover",
  "lanxess",
  "lasalle",
  "lat",
  "latino",
  "latrobe",
  "law",
  "lawyer",
  "lds",
  "lease",
  "leclerc",
  "lefrak",
  "legal",
  "lego",
  "lexus",
  "lgbt",
  "lidl",
  "life",
  "lifeinsurance",
  "lifestyle",
  "lighting",
  "like",
  "lilly",
  "limited",
  "limo",
  "lincoln",
  "linde",
  "link",
  "lipsy",
  "live",
  "living",
  "llc",
  "llp",
  "loan",
  "loans",
  "locker",
  "locus",
  "loft",
  "lol",
  "london",
  "lotte",
  "lotto",
  "love",
  "lpl",
  "lplfinancial",
  "ltd",
  "ltda",
  "lundbeck",
  "luxe",
  "luxury",
  "macys",
  "madrid",
  "maif",
  "maison",
  "makeup",
  "man",
  "management",
  "mango",
  "map",
  "market",
  "marketing",
  "markets",
  "marriott",
  "marshalls",
  "maserati",
  "mattel",
  "mba",
  "mckinsey",
  "med",
  "media",
  "meet",
  "melbourne",
  "meme",
  "memorial",
  "men",
  "menu",
  "merckmsd",
  "miami",
  "microsoft",
  "mini",
  "mint",
  "mit",
  "mitsubishi",
  "mlb",
  "mls",
  "mma",
  "mobile",
  "moda",
  "moe",
  "moi",
  "mom",
  "monash",
  "money",
  "monster",
  "mormon",
  "mortgage",
  "moscow",
  "moto",
  "motorcycles",
  "mov",
  "movie",
  "msd",
  "mtn",
  "mtr",
  "music",
  "mutual",
  "nab",
  "nagoya",
  "natura",
  "navy",
  "nba",
  "nec",
  "netbank",
  "netflix",
  "network",
  "neustar",
  "new",
  "news",
  "next",
  "nextdirect",
  "nexus",
  "nfl",
  "ngo",
  "nhk",
  "nico",
  "nike",
  "nikon",
  "ninja",
  "nissan",
  "nissay",
  "nokia",
  "northwesternmutual",
  "norton",
  "now",
  "nowruz",
  "nowtv",
  "nra",
  "nrw",
  "ntt",
  "nyc",
  "obi",
  "observer",
  "office",
  "okinawa",
  "olayan",
  "olayangroup",
  "oldnavy",
  "ollo",
  "omega",
  "one",
  "ong",
  "onl",
  "online",
  "ooo",
  "open",
  "oracle",
  "orange",
  "organic",
  "origins",
  "osaka",
  "otsuka",
  "ott",
  "ovh",
  "page",
  "panasonic",
  "paris",
  "pars",
  "partners",
  "parts",
  "party",
  "passagens",
  "pay",
  "pccw",
  "pet",
  "pfizer",
  "pharmacy",
  "phd",
  "philips",
  "phone",
  "photo",
  "photography",
  "photos",
  "physio",
  "pics",
  "pictet",
  "pictures",
  "pid",
  "pin",
  "ping",
  "pink",
  "pioneer",
  "pizza",
  "place",
  "play",
  "playstation",
  "plumbing",
  "plus",
  "pnc",
  "pohl",
  "poker",
  "politie",
  "porn",
  "pramerica",
  "praxi",
  "press",
  "prime",
  "prod",
  "productions",
  "prof",
  "progressive",
  "promo",
  "properties",
  "property",
  "protection",
  "pru",
  "prudential",
  "pub",
  "pwc",
  "qpon",
  "quebec",
  "quest",
  "racing",
  "radio",
  "read",
  "realestate",
  "realtor",
  "realty",
  "recipes",
  "red",
  "redstone",
  "redumbrella",
  "rehab",
  "reise",
  "reisen",
  "reit",
  "reliance",
  "ren",
  "rent",
  "rentals",
  "repair",
  "report",
  "republican",
  "rest",
  "restaurant",
  "review",
  "reviews",
  "rexroth",
  "rich",
  "richardli",
  "ricoh",
  "ril",
  "rio",
  "rip",
  "rocher",
  "rocks",
  "rodeo",
  "rogers",
  "room",
  "rsvp",
  "rugby",
  "ruhr",
  "run",
  "rwe",
  "ryukyu",
  "saarland",
  "safe",
  "safety",
  "sakura",
  "sale",
  "salon",
  "samsclub",
  "samsung",
  "sandvik",
  "sandvikcoromant",
  "sanofi",
  "sap",
  "sarl",
  "sas",
  "save",
  "saxo",
  "sbi",
  "sbs",
  "sca",
  "scb",
  "schaeffler",
  "schmidt",
  "scholarships",
  "school",
  "schule",
  "schwarz",
  "science",
  "scot",
  "search",
  "seat",
  "secure",
  "security",
  "seek",
  "select",
  "sener",
  "services",
  "ses",
  "seven",
  "sew",
  "sex",
  "sexy",
  "sfr",
  "shangrila",
  "sharp",
  "shaw",
  "shell",
  "shia",
  "shiksha",
  "shoes",
  "shop",
  "shopping",
  "shouji",
  "show",
  "showtime",
  "silk",
  "sina",
  "singles",
  "site",
  "ski",
  "skin",
  "sky",
  "skype",
  "sling",
  "smart",
  "smile",
  "sncf",
  "soccer",
  "social",
  "softbank",
  "software",
  "sohu",
  "solar",
  "solutions",
  "song",
  "sony",
  "soy",
  "spa",
  "space",
  "sport",
  "spot",
  "srl",
  "stada",
  "staples",
  "star",
  "statebank",
  "statefarm",
  "stc",
  "stcgroup",
  "stockholm",
  "storage",
  "store",
  "stream",
  "studio",
  "study",
  "style",
  "sucks",
  "supplies",
  "supply",
  "support",
  "surf",
  "surgery",
  "suzuki",
  "swatch",
  "swiss",
  "sydney",
  "systems",
  "tab",
  "taipei",
  "talk",
  "taobao",
  "target",
  "tatamotors",
  "tatar",
  "tattoo",
  "tax",
  "taxi",
  "tci",
  "tdk",
  "team",
  "tech",
  "technology",
  "temasek",
  "tennis",
  "teva",
  "thd",
  "theater",
  "theatre",
  "tiaa",
  "tickets",
  "tienda",
  "tiffany",
  "tips",
  "tires",
  "tirol",
  "tjmaxx",
  "tjx",
  "tkmaxx",
  "tmall",
  "today",
  "tokyo",
  "tools",
  "top",
  "toray",
  "toshiba",
  "total",
  "tours",
  "town",
  "toyota",
  "toys",
  "trade",
  "trading",
  "training",
  "travel",
  "travelchannel",
  "travelers",
  "travelersinsurance",
  "trust",
  "trv",
  "tube",
  "tui",
  "tunes",
  "tushu",
  "tvs",
  "ubank",
  "ubs",
  "unicom",
  "university",
  "uno",
  "uol",
  "ups",
  "vacations",
  "vana",
  "vanguard",
  "vegas",
  "ventures",
  "verisign",
  "versicherung",
  "vet",
  "viajes",
  "video",
  "vig",
  "viking",
  "villas",
  "vin",
  "vip",
  "virgin",
  "visa",
  "vision",
  "viva",
  "vivo",
  "vlaanderen",
  "vodka",
  "volkswagen",
  "volvo",
  "vote",
  "voting",
  "voto",
  "voyage",
  "vuelos",
  "wales",
  "walmart",
  "walter",
  "wang",
  "wanggou",
  "watch",
  "watches",
  "weather",
  "weatherchannel",
  "webcam",
  "weber",
  "website",
  "wedding",
  "weibo",
  "weir",
  "whoswho",
  "wien",
  "wiki",
  "williamhill",
  "win",
  "windows",
  "wine",
  "winners",
  "wme",
  "wolterskluwer",
  "woodside",
  "work",
  "works",
  "world",
  "wow",
  "wtc",
  "wtf",
  "xbox",
  "xerox",
  "xfinity",
  "xihuan",
  "xin",
  "कॉम",
  "セール",
  "佛山",
  "慈善",
  "集团",
  "在线",
  "点看",
  "คอม",
  "八卦",
  "موقع",
  "公益",
  "公司",
  "香格里拉",
  "网站",
  "移动",
  "我爱你",
  "москва",
  "католик",
  "онлайн",
  "сайт",
  "联通",
  "קום",
  "时尚",
  "微博",
  "淡马锡",
  "ファッション",
  "орг",
  "नेट",
  "ストア",
  "アマゾン",
  "삼성",
  "商标",
  "商店",
  "商城",
  "дети",
  "ポイント",
  "新闻",
  "家電",
  "كوم",
  "中文网",
  "中信",
  "娱乐",
  "谷歌",
  "電訊盈科",
  "购物",
  "クラウド",
  "通販",
  "网店",
  "संगठन",
  "餐厅",
  "网络",
  "ком",
  "亚马逊",
  "诺基亚",
  "食品",
  "飞利浦",
  "手机",
  "ارامكو",
  "العليان",
  "اتصالات",
  "بازار",
  "ابوظبي",
  "كاثوليك",
  "همراه",
  "닷컴",
  "政府",
  "شبكة",
  "بيتك",
  "عرب",
  "机构",
  "组织机构",
  "健康",
  "招聘",
  "рус",
  "大拿",
  "みんな",
  "グーグル",
  "世界",
  "書籍",
  "网址",
  "닷넷",
  "コム",
  "天主教",
  "游戏",
  "vermögensberater",
  "vermögensberatung",
  "企业",
  "信息",
  "嘉里大酒店",
  "嘉里",
  "广东",
  "政务",
  "xyz",
  "yachts",
  "yahoo",
  "yamaxun",
  "yandex",
  "yodobashi",
  "yoga",
  "yokohama",
  "you",
  "youtube",
  "yun",
  "zappos",
  "zara",
  "zero",
  "zip",
  "zone",
  "zuerich",
  "cc.ua",
  "inf.ua",
  "ltd.ua",
  "611.to",
  "graphox.us",
  "*.devcdnaccesso.com",
  "adobeaemcloud.com",
  "*.dev.adobeaemcloud.com",
  "hlx.live",
  "adobeaemcloud.net",
  "hlx.page",
  "hlx3.page",
  "beep.pl",
  "airkitapps.com",
  "airkitapps-au.com",
  "airkitapps.eu",
  "aivencloud.com",
  "barsy.ca",
  "*.compute.estate",
  "*.alces.network",
  "kasserver.com",
  "altervista.org",
  "alwaysdata.net",
  "cloudfront.net",
  "*.compute.amazonaws.com",
  "*.compute-1.amazonaws.com",
  "*.compute.amazonaws.com.cn",
  "us-east-1.amazonaws.com",
  "cn-north-1.eb.amazonaws.com.cn",
  "cn-northwest-1.eb.amazonaws.com.cn",
  "elasticbeanstalk.com",
  "ap-northeast-1.elasticbeanstalk.com",
  "ap-northeast-2.elasticbeanstalk.com",
  "ap-northeast-3.elasticbeanstalk.com",
  "ap-south-1.elasticbeanstalk.com",
  "ap-southeast-1.elasticbeanstalk.com",
  "ap-southeast-2.elasticbeanstalk.com",
  "ca-central-1.elasticbeanstalk.com",
  "eu-central-1.elasticbeanstalk.com",
  "eu-west-1.elasticbeanstalk.com",
  "eu-west-2.elasticbeanstalk.com",
  "eu-west-3.elasticbeanstalk.com",
  "sa-east-1.elasticbeanstalk.com",
  "us-east-1.elasticbeanstalk.com",
  "us-east-2.elasticbeanstalk.com",
  "us-gov-west-1.elasticbeanstalk.com",
  "us-west-1.elasticbeanstalk.com",
  "us-west-2.elasticbeanstalk.com",
  "*.elb.amazonaws.com",
  "*.elb.amazonaws.com.cn",
  "awsglobalaccelerator.com",
  "s3.amazonaws.com",
  "s3-ap-northeast-1.amazonaws.com",
  "s3-ap-northeast-2.amazonaws.com",
  "s3-ap-south-1.amazonaws.com",
  "s3-ap-southeast-1.amazonaws.com",
  "s3-ap-southeast-2.amazonaws.com",
  "s3-ca-central-1.amazonaws.com",
  "s3-eu-central-1.amazonaws.com",
  "s3-eu-west-1.amazonaws.com",
  "s3-eu-west-2.amazonaws.com",
  "s3-eu-west-3.amazonaws.com",
  "s3-external-1.amazonaws.com",
  "s3-fips-us-gov-west-1.amazonaws.com",
  "s3-sa-east-1.amazonaws.com",
  "s3-us-gov-west-1.amazonaws.com",
  "s3-us-east-2.amazonaws.com",
  "s3-us-west-1.amazonaws.com",
  "s3-us-west-2.amazonaws.com",
  "s3.ap-northeast-2.amazonaws.com",
  "s3.ap-south-1.amazonaws.com",
  "s3.cn-north-1.amazonaws.com.cn",
  "s3.ca-central-1.amazonaws.com",
  "s3.eu-central-1.amazonaws.com",
  "s3.eu-west-2.amazonaws.com",
  "s3.eu-west-3.amazonaws.com",
  "s3.us-east-2.amazonaws.com",
  "s3.dualstack.ap-northeast-1.amazonaws.com",
  "s3.dualstack.ap-northeast-2.amazonaws.com",
  "s3.dualstack.ap-south-1.amazonaws.com",
  "s3.dualstack.ap-southeast-1.amazonaws.com",
  "s3.dualstack.ap-southeast-2.amazonaws.com",
  "s3.dualstack.ca-central-1.amazonaws.com",
  "s3.dualstack.eu-central-1.amazonaws.com",
  "s3.dualstack.eu-west-1.amazonaws.com",
  "s3.dualstack.eu-west-2.amazonaws.com",
  "s3.dualstack.eu-west-3.amazonaws.com",
  "s3.dualstack.sa-east-1.amazonaws.com",
  "s3.dualstack.us-east-1.amazonaws.com",
  "s3.dualstack.us-east-2.amazonaws.com",
  "s3-website-us-east-1.amazonaws.com",
  "s3-website-us-west-1.amazonaws.com",
  "s3-website-us-west-2.amazonaws.com",
  "s3-website-ap-northeast-1.amazonaws.com",
  "s3-website-ap-southeast-1.amazonaws.com",
  "s3-website-ap-southeast-2.amazonaws.com",
  "s3-website-eu-west-1.amazonaws.com",
  "s3-website-sa-east-1.amazonaws.com",
  "s3-website.ap-northeast-2.amazonaws.com",
  "s3-website.ap-south-1.amazonaws.com",
  "s3-website.ca-central-1.amazonaws.com",
  "s3-website.eu-central-1.amazonaws.com",
  "s3-website.eu-west-2.amazonaws.com",
  "s3-website.eu-west-3.amazonaws.com",
  "s3-website.us-east-2.amazonaws.com",
  "t3l3p0rt.net",
  "tele.amune.org",
  "apigee.io",
  "siiites.com",
  "appspacehosted.com",
  "appspaceusercontent.com",
  "appudo.net",
  "on-aptible.com",
  "user.aseinet.ne.jp",
  "gv.vc",
  "d.gv.vc",
  "user.party.eus",
  "pimienta.org",
  "poivron.org",
  "potager.org",
  "sweetpepper.org",
  "myasustor.com",
  "cdn.prod.atlassian-dev.net",
  "translated.page",
  "myfritz.net",
  "onavstack.net",
  "*.awdev.ca",
  "*.advisor.ws",
  "ecommerce-shop.pl",
  "b-data.io",
  "backplaneapp.io",
  "balena-devices.com",
  "rs.ba",
  "*.banzai.cloud",
  "app.banzaicloud.io",
  "*.backyards.banzaicloud.io",
  "base.ec",
  "official.ec",
  "buyshop.jp",
  "fashionstore.jp",
  "handcrafted.jp",
  "kawaiishop.jp",
  "supersale.jp",
  "theshop.jp",
  "shopselect.net",
  "base.shop",
  "*.beget.app",
  "betainabox.com",
  "bnr.la",
  "bitbucket.io",
  "blackbaudcdn.net",
  "of.je",
  "bluebite.io",
  "boomla.net",
  "boutir.com",
  "boxfuse.io",
  "square7.ch",
  "bplaced.com",
  "bplaced.de",
  "square7.de",
  "bplaced.net",
  "square7.net",
  "shop.brendly.rs",
  "browsersafetymark.io",
  "uk0.bigv.io",
  "dh.bytemark.co.uk",
  "vm.bytemark.co.uk",
  "cafjs.com",
  "mycd.eu",
  "drr.ac",
  "uwu.ai",
  "carrd.co",
  "crd.co",
  "ju.mp",
  "ae.org",
  "br.com",
  "cn.com",
  "com.de",
  "com.se",
  "de.com",
  "eu.com",
  "gb.net",
  "hu.net",
  "jp.net",
  "jpn.com",
  "mex.com",
  "ru.com",
  "sa.com",
  "se.net",
  "uk.com",
  "uk.net",
  "us.com",
  "za.bz",
  "za.com",
  "ar.com",
  "hu.com",
  "kr.com",
  "no.com",
  "qc.com",
  "uy.com",
  "africa.com",
  "gr.com",
  "in.net",
  "web.in",
  "us.org",
  "co.com",
  "aus.basketball",
  "nz.basketball",
  "radio.am",
  "radio.fm",
  "c.la",
  "certmgr.org",
  "cx.ua",
  "discourse.group",
  "discourse.team",
  "cleverapps.io",
  "clerk.app",
  "clerkstage.app",
  "*.lcl.dev",
  "*.lclstage.dev",
  "*.stg.dev",
  "*.stgstage.dev",
  "clickrising.net",
  "c66.me",
  "cloud66.ws",
  "cloud66.zone",
  "jdevcloud.com",
  "wpdevcloud.com",
  "cloudaccess.host",
  "freesite.host",
  "cloudaccess.net",
  "cloudcontrolled.com",
  "cloudcontrolapp.com",
  "*.cloudera.site",
  "pages.dev",
  "trycloudflare.com",
  "workers.dev",
  "wnext.app",
  "co.ca",
  "*.otap.co",
  "co.cz",
  "c.cdn77.org",
  "cdn77-ssl.net",
  "r.cdn77.net",
  "rsc.cdn77.org",
  "ssl.origin.cdn77-secure.org",
  "cloudns.asia",
  "cloudns.biz",
  "cloudns.club",
  "cloudns.cc",
  "cloudns.eu",
  "cloudns.in",
  "cloudns.info",
  "cloudns.org",
  "cloudns.pro",
  "cloudns.pw",
  "cloudns.us",
  "cnpy.gdn",
  "codeberg.page",
  "co.nl",
  "co.no",
  "webhosting.be",
  "hosting-cluster.nl",
  "ac.ru",
  "edu.ru",
  "gov.ru",
  "int.ru",
  "mil.ru",
  "test.ru",
  "dyn.cosidns.de",
  "dynamisches-dns.de",
  "dnsupdater.de",
  "internet-dns.de",
  "l-o-g-i-n.de",
  "dynamic-dns.info",
  "feste-ip.net",
  "knx-server.net",
  "static-access.net",
  "realm.cz",
  "*.cryptonomic.net",
  "cupcake.is",
  "curv.dev",
  "*.customer-oci.com",
  "*.oci.customer-oci.com",
  "*.ocp.customer-oci.com",
  "*.ocs.customer-oci.com",
  "cyon.link",
  "cyon.site",
  "fnwk.site",
  "folionetwork.site",
  "platform0.app",
  "daplie.me",
  "localhost.daplie.me",
  "dattolocal.com",
  "dattorelay.com",
  "dattoweb.com",
  "mydatto.com",
  "dattolocal.net",
  "mydatto.net",
  "biz.dk",
  "co.dk",
  "firm.dk",
  "reg.dk",
  "store.dk",
  "dyndns.dappnode.io",
  "*.dapps.earth",
  "*.bzz.dapps.earth",
  "builtwithdark.com",
  "demo.datadetect.com",
  "instance.datadetect.com",
  "edgestack.me",
  "ddns5.com",
  "debian.net",
  "deno.dev",
  "deno-staging.dev",
  "dedyn.io",
  "deta.app",
  "deta.dev",
  "*.rss.my.id",
  "*.diher.solutions",
  "discordsays.com",
  "discordsez.com",
  "jozi.biz",
  "dnshome.de",
  "online.th",
  "shop.th",
  "drayddns.com",
  "shoparena.pl",
  "dreamhosters.com",
  "mydrobo.com",
  "drud.io",
  "drud.us",
  "duckdns.org",
  "bip.sh",
  "bitbridge.net",
  "dy.fi",
  "tunk.org",
  "dyndns-at-home.com",
  "dyndns-at-work.com",
  "dyndns-blog.com",
  "dyndns-free.com",
  "dyndns-home.com",
  "dyndns-ip.com",
  "dyndns-mail.com",
  "dyndns-office.com",
  "dyndns-pics.com",
  "dyndns-remote.com",
  "dyndns-server.com",
  "dyndns-web.com",
  "dyndns-wiki.com",
  "dyndns-work.com",
  "dyndns.biz",
  "dyndns.info",
  "dyndns.org",
  "dyndns.tv",
  "at-band-camp.net",
  "ath.cx",
  "barrel-of-knowledge.info",
  "barrell-of-knowledge.info",
  "better-than.tv",
  "blogdns.com",
  "blogdns.net",
  "blogdns.org",
  "blogsite.org",
  "boldlygoingnowhere.org",
  "broke-it.net",
  "buyshouses.net",
  "cechire.com",
  "dnsalias.com",
  "dnsalias.net",
  "dnsalias.org",
  "dnsdojo.com",
  "dnsdojo.net",
  "dnsdojo.org",
  "does-it.net",
  "doesntexist.com",
  "doesntexist.org",
  "dontexist.com",
  "dontexist.net",
  "dontexist.org",
  "doomdns.com",
  "doomdns.org",
  "dvrdns.org",
  "dyn-o-saur.com",
  "dynalias.com",
  "dynalias.net",
  "dynalias.org",
  "dynathome.net",
  "dyndns.ws",
  "endofinternet.net",
  "endofinternet.org",
  "endoftheinternet.org",
  "est-a-la-maison.com",
  "est-a-la-masion.com",
  "est-le-patron.com",
  "est-mon-blogueur.com",
  "for-better.biz",
  "for-more.biz",
  "for-our.info",
  "for-some.biz",
  "for-the.biz",
  "forgot.her.name",
  "forgot.his.name",
  "from-ak.com",
  "from-al.com",
  "from-ar.com",
  "from-az.net",
  "from-ca.com",
  "from-co.net",
  "from-ct.com",
  "from-dc.com",
  "from-de.com",
  "from-fl.com",
  "from-ga.com",
  "from-hi.com",
  "from-ia.com",
  "from-id.com",
  "from-il.com",
  "from-in.com",
  "from-ks.com",
  "from-ky.com",
  "from-la.net",
  "from-ma.com",
  "from-md.com",
  "from-me.org",
  "from-mi.com",
  "from-mn.com",
  "from-mo.com",
  "from-ms.com",
  "from-mt.com",
  "from-nc.com",
  "from-nd.com",
  "from-ne.com",
  "from-nh.com",
  "from-nj.com",
  "from-nm.com",
  "from-nv.com",
  "from-ny.net",
  "from-oh.com",
  "from-ok.com",
  "from-or.com",
  "from-pa.com",
  "from-pr.com",
  "from-ri.com",
  "from-sc.com",
  "from-sd.com",
  "from-tn.com",
  "from-tx.com",
  "from-ut.com",
  "from-va.com",
  "from-vt.com",
  "from-wa.com",
  "from-wi.com",
  "from-wv.com",
  "from-wy.com",
  "ftpaccess.cc",
  "fuettertdasnetz.de",
  "game-host.org",
  "game-server.cc",
  "getmyip.com",
  "gets-it.net",
  "go.dyndns.org",
  "gotdns.com",
  "gotdns.org",
  "groks-the.info",
  "groks-this.info",
  "ham-radio-op.net",
  "here-for-more.info",
  "hobby-site.com",
  "hobby-site.org",
  "home.dyndns.org",
  "homedns.org",
  "homeftp.net",
  "homeftp.org",
  "homeip.net",
  "homelinux.com",
  "homelinux.net",
  "homelinux.org",
  "homeunix.com",
  "homeunix.net",
  "homeunix.org",
  "iamallama.com",
  "in-the-band.net",
  "is-a-anarchist.com",
  "is-a-blogger.com",
  "is-a-bookkeeper.com",
  "is-a-bruinsfan.org",
  "is-a-bulls-fan.com",
  "is-a-candidate.org",
  "is-a-caterer.com",
  "is-a-celticsfan.org",
  "is-a-chef.com",
  "is-a-chef.net",
  "is-a-chef.org",
  "is-a-conservative.com",
  "is-a-cpa.com",
  "is-a-cubicle-slave.com",
  "is-a-democrat.com",
  "is-a-designer.com",
  "is-a-doctor.com",
  "is-a-financialadvisor.com",
  "is-a-geek.com",
  "is-a-geek.net",
  "is-a-geek.org",
  "is-a-green.com",
  "is-a-guru.com",
  "is-a-hard-worker.com",
  "is-a-hunter.com",
  "is-a-knight.org",
  "is-a-landscaper.com",
  "is-a-lawyer.com",
  "is-a-liberal.com",
  "is-a-libertarian.com",
  "is-a-linux-user.org",
  "is-a-llama.com",
  "is-a-musician.com",
  "is-a-nascarfan.com",
  "is-a-nurse.com",
  "is-a-painter.com",
  "is-a-patsfan.org",
  "is-a-personaltrainer.com",
  "is-a-photographer.com",
  "is-a-player.com",
  "is-a-republican.com",
  "is-a-rockstar.com",
  "is-a-socialist.com",
  "is-a-soxfan.org",
  "is-a-student.com",
  "is-a-teacher.com",
  "is-a-techie.com",
  "is-a-therapist.com",
  "is-an-accountant.com",
  "is-an-actor.com",
  "is-an-actress.com",
  "is-an-anarchist.com",
  "is-an-artist.com",
  "is-an-engineer.com",
  "is-an-entertainer.com",
  "is-by.us",
  "is-certified.com",
  "is-found.org",
  "is-gone.com",
  "is-into-anime.com",
  "is-into-cars.com",
  "is-into-cartoons.com",
  "is-into-games.com",
  "is-leet.com",
  "is-lost.org",
  "is-not-certified.com",
  "is-saved.org",
  "is-slick.com",
  "is-uberleet.com",
  "is-very-bad.org",
  "is-very-evil.org",
  "is-very-good.org",
  "is-very-nice.org",
  "is-very-sweet.org",
  "is-with-theband.com",
  "isa-geek.com",
  "isa-geek.net",
  "isa-geek.org",
  "isa-hockeynut.com",
  "issmarterthanyou.com",
  "isteingeek.de",
  "istmein.de",
  "kicks-ass.net",
  "kicks-ass.org",
  "knowsitall.info",
  "land-4-sale.us",
  "lebtimnetz.de",
  "leitungsen.de",
  "likes-pie.com",
  "likescandy.com",
  "merseine.nu",
  "mine.nu",
  "misconfused.org",
  "mypets.ws",
  "myphotos.cc",
  "neat-url.com",
  "office-on-the.net",
  "on-the-web.tv",
  "podzone.net",
  "podzone.org",
  "readmyblog.org",
  "saves-the-whales.com",
  "scrapper-site.net",
  "scrapping.cc",
  "selfip.biz",
  "selfip.com",
  "selfip.info",
  "selfip.net",
  "selfip.org",
  "sells-for-less.com",
  "sells-for-u.com",
  "sells-it.net",
  "sellsyourhome.org",
  "servebbs.com",
  "servebbs.net",
  "servebbs.org",
  "serveftp.net",
  "serveftp.org",
  "servegame.org",
  "shacknet.nu",
  "simple-url.com",
  "space-to-rent.com",
  "stuff-4-sale.org",
  "stuff-4-sale.us",
  "teaches-yoga.com",
  "thruhere.net",
  "traeumtgerade.de",
  "webhop.biz",
  "webhop.info",
  "webhop.net",
  "webhop.org",
  "worse-than.tv",
  "writesthisblog.com",
  "ddnss.de",
  "dyn.ddnss.de",
  "dyndns.ddnss.de",
  "dyndns1.de",
  "dyn-ip24.de",
  "home-webserver.de",
  "dyn.home-webserver.de",
  "myhome-server.de",
  "ddnss.org",
  "definima.net",
  "definima.io",
  "ondigitalocean.app",
  "*.digitaloceanspaces.com",
  "bci.dnstrace.pro",
  "ddnsfree.com",
  "ddnsgeek.com",
  "giize.com",
  "gleeze.com",
  "kozow.com",
  "loseyourip.com",
  "ooguy.com",
  "theworkpc.com",
  "casacam.net",
  "dynu.net",
  "accesscam.org",
  "camdvr.org",
  "freeddns.org",
  "mywire.org",
  "webredirect.org",
  "myddns.rocks",
  "blogsite.xyz",
  "dynv6.net",
  "e4.cz",
  "eero.online",
  "eero-stage.online",
  "elementor.cloud",
  "elementor.cool",
  "en-root.fr",
  "mytuleap.com",
  "tuleap-partners.com",
  "encr.app",
  "encoreapi.com",
  "onred.one",
  "staging.onred.one",
  "eu.encoway.cloud",
  "eu.org",
  "al.eu.org",
  "asso.eu.org",
  "at.eu.org",
  "au.eu.org",
  "be.eu.org",
  "bg.eu.org",
  "ca.eu.org",
  "cd.eu.org",
  "ch.eu.org",
  "cn.eu.org",
  "cy.eu.org",
  "cz.eu.org",
  "de.eu.org",
  "dk.eu.org",
  "edu.eu.org",
  "ee.eu.org",
  "es.eu.org",
  "fi.eu.org",
  "fr.eu.org",
  "gr.eu.org",
  "hr.eu.org",
  "hu.eu.org",
  "ie.eu.org",
  "il.eu.org",
  "in.eu.org",
  "int.eu.org",
  "is.eu.org",
  "it.eu.org",
  "jp.eu.org",
  "kr.eu.org",
  "lt.eu.org",
  "lu.eu.org",
  "lv.eu.org",
  "mc.eu.org",
  "me.eu.org",
  "mk.eu.org",
  "mt.eu.org",
  "my.eu.org",
  "net.eu.org",
  "ng.eu.org",
  "nl.eu.org",
  "no.eu.org",
  "nz.eu.org",
  "paris.eu.org",
  "pl.eu.org",
  "pt.eu.org",
  "q-a.eu.org",
  "ro.eu.org",
  "ru.eu.org",
  "se.eu.org",
  "si.eu.org",
  "sk.eu.org",
  "tr.eu.org",
  "uk.eu.org",
  "us.eu.org",
  "eurodir.ru",
  "eu-1.evennode.com",
  "eu-2.evennode.com",
  "eu-3.evennode.com",
  "eu-4.evennode.com",
  "us-1.evennode.com",
  "us-2.evennode.com",
  "us-3.evennode.com",
  "us-4.evennode.com",
  "twmail.cc",
  "twmail.net",
  "twmail.org",
  "mymailer.com.tw",
  "url.tw",
  "onfabrica.com",
  "apps.fbsbx.com",
  "ru.net",
  "adygeya.ru",
  "bashkiria.ru",
  "bir.ru",
  "cbg.ru",
  "com.ru",
  "dagestan.ru",
  "grozny.ru",
  "kalmykia.ru",
  "kustanai.ru",
  "marine.ru",
  "mordovia.ru",
  "msk.ru",
  "mytis.ru",
  "nalchik.ru",
  "nov.ru",
  "pyatigorsk.ru",
  "spb.ru",
  "vladikavkaz.ru",
  "vladimir.ru",
  "abkhazia.su",
  "adygeya.su",
  "aktyubinsk.su",
  "arkhangelsk.su",
  "armenia.su",
  "ashgabad.su",
  "azerbaijan.su",
  "balashov.su",
  "bashkiria.su",
  "bryansk.su",
  "bukhara.su",
  "chimkent.su",
  "dagestan.su",
  "east-kazakhstan.su",
  "exnet.su",
  "georgia.su",
  "grozny.su",
  "ivanovo.su",
  "jambyl.su",
  "kalmykia.su",
  "kaluga.su",
  "karacol.su",
  "karaganda.su",
  "karelia.su",
  "khakassia.su",
  "krasnodar.su",
  "kurgan.su",
  "kustanai.su",
  "lenug.su",
  "mangyshlak.su",
  "mordovia.su",
  "msk.su",
  "murmansk.su",
  "nalchik.su",
  "navoi.su",
  "north-kazakhstan.su",
  "nov.su",
  "obninsk.su",
  "penza.su",
  "pokrovsk.su",
  "sochi.su",
  "spb.su",
  "tashkent.su",
  "termez.su",
  "togliatti.su",
  "troitsk.su",
  "tselinograd.su",
  "tula.su",
  "tuva.su",
  "vladikavkaz.su",
  "vladimir.su",
  "vologda.su",
  "channelsdvr.net",
  "u.channelsdvr.net",
  "edgecompute.app",
  "fastly-terrarium.com",
  "fastlylb.net",
  "map.fastlylb.net",
  "freetls.fastly.net",
  "map.fastly.net",
  "a.prod.fastly.net",
  "global.prod.fastly.net",
  "a.ssl.fastly.net",
  "b.ssl.fastly.net",
  "global.ssl.fastly.net",
  "fastvps-server.com",
  "fastvps.host",
  "myfast.host",
  "fastvps.site",
  "myfast.space",
  "fedorainfracloud.org",
  "fedorapeople.org",
  "cloud.fedoraproject.org",
  "app.os.fedoraproject.org",
  "app.os.stg.fedoraproject.org",
  "conn.uk",
  "copro.uk",
  "hosp.uk",
  "mydobiss.com",
  "fh-muenster.io",
  "filegear.me",
  "filegear-au.me",
  "filegear-de.me",
  "filegear-gb.me",
  "filegear-ie.me",
  "filegear-jp.me",
  "filegear-sg.me",
  "firebaseapp.com",
  "fireweb.app",
  "flap.id",
  "onflashdrive.app",
  "fldrv.com",
  "fly.dev",
  "edgeapp.net",
  "shw.io",
  "flynnhosting.net",
  "forgeblocks.com",
  "id.forgerock.io",
  "framer.app",
  "framercanvas.com",
  "*.frusky.de",
  "ravpage.co.il",
  "0e.vc",
  "freebox-os.com",
  "freeboxos.com",
  "fbx-os.fr",
  "fbxos.fr",
  "freebox-os.fr",
  "freeboxos.fr",
  "freedesktop.org",
  "freemyip.com",
  "wien.funkfeuer.at",
  "*.futurecms.at",
  "*.ex.futurecms.at",
  "*.in.futurecms.at",
  "futurehosting.at",
  "futuremailing.at",
  "*.ex.ortsinfo.at",
  "*.kunden.ortsinfo.at",
  "*.statics.cloud",
  "independent-commission.uk",
  "independent-inquest.uk",
  "independent-inquiry.uk",
  "independent-panel.uk",
  "independent-review.uk",
  "public-inquiry.uk",
  "royal-commission.uk",
  "campaign.gov.uk",
  "service.gov.uk",
  "api.gov.uk",
  "gehirn.ne.jp",
  "usercontent.jp",
  "gentapps.com",
  "gentlentapis.com",
  "lab.ms",
  "cdn-edges.net",
  "ghost.io",
  "gsj.bz",
  "githubusercontent.com",
  "githubpreview.dev",
  "github.io",
  "gitlab.io",
  "gitapp.si",
  "gitpage.si",
  "glitch.me",
  "nog.community",
  "co.ro",
  "shop.ro",
  "lolipop.io",
  "angry.jp",
  "babyblue.jp",
  "babymilk.jp",
  "backdrop.jp",
  "bambina.jp",
  "bitter.jp",
  "blush.jp",
  "boo.jp",
  "boy.jp",
  "boyfriend.jp",
  "but.jp",
  "candypop.jp",
  "capoo.jp",
  "catfood.jp",
  "cheap.jp",
  "chicappa.jp",
  "chillout.jp",
  "chips.jp",
  "chowder.jp",
  "chu.jp",
  "ciao.jp",
  "cocotte.jp",
  "coolblog.jp",
  "cranky.jp",
  "cutegirl.jp",
  "daa.jp",
  "deca.jp",
  "deci.jp",
  "digick.jp",
  "egoism.jp",
  "fakefur.jp",
  "fem.jp",
  "flier.jp",
  "floppy.jp",
  "fool.jp",
  "frenchkiss.jp",
  "girlfriend.jp",
  "girly.jp",
  "gloomy.jp",
  "gonna.jp",
  "greater.jp",
  "hacca.jp",
  "heavy.jp",
  "her.jp",
  "hiho.jp",
  "hippy.jp",
  "holy.jp",
  "hungry.jp",
  "icurus.jp",
  "itigo.jp",
  "jellybean.jp",
  "kikirara.jp",
  "kill.jp",
  "kilo.jp",
  "kuron.jp",
  "littlestar.jp",
  "lolipopmc.jp",
  "lolitapunk.jp",
  "lomo.jp",
  "lovepop.jp",
  "lovesick.jp",
  "main.jp",
  "mods.jp",
  "mond.jp",
  "mongolian.jp",
  "moo.jp",
  "namaste.jp",
  "nikita.jp",
  "nobushi.jp",
  "noor.jp",
  "oops.jp",
  "parallel.jp",
  "parasite.jp",
  "pecori.jp",
  "peewee.jp",
  "penne.jp",
  "pepper.jp",
  "perma.jp",
  "pigboat.jp",
  "pinoko.jp",
  "punyu.jp",
  "pupu.jp",
  "pussycat.jp",
  "pya.jp",
  "raindrop.jp",
  "readymade.jp",
  "sadist.jp",
  "schoolbus.jp",
  "secret.jp",
  "staba.jp",
  "stripper.jp",
  "sub.jp",
  "sunnyday.jp",
  "thick.jp",
  "tonkotsu.jp",
  "under.jp",
  "upper.jp",
  "velvet.jp",
  "verse.jp",
  "versus.jp",
  "vivian.jp",
  "watson.jp",
  "weblike.jp",
  "whitesnow.jp",
  "zombie.jp",
  "heteml.net",
  "cloudapps.digital",
  "london.cloudapps.digital",
  "pymnt.uk",
  "homeoffice.gov.uk",
  "ro.im",
  "goip.de",
  "run.app",
  "a.run.app",
  "web.app",
  "*.0emm.com",
  "appspot.com",
  "*.r.appspot.com",
  "codespot.com",
  "googleapis.com",
  "googlecode.com",
  "pagespeedmobilizer.com",
  "publishproxy.com",
  "withgoogle.com",
  "withyoutube.com",
  "*.gateway.dev",
  "cloud.goog",
  "translate.goog",
  "*.usercontent.goog",
  "cloudfunctions.net",
  "blogspot.ae",
  "blogspot.al",
  "blogspot.am",
  "blogspot.ba",
  "blogspot.be",
  "blogspot.bg",
  "blogspot.bj",
  "blogspot.ca",
  "blogspot.cf",
  "blogspot.ch",
  "blogspot.cl",
  "blogspot.co.at",
  "blogspot.co.id",
  "blogspot.co.il",
  "blogspot.co.ke",
  "blogspot.co.nz",
  "blogspot.co.uk",
  "blogspot.co.za",
  "blogspot.com",
  "blogspot.com.ar",
  "blogspot.com.au",
  "blogspot.com.br",
  "blogspot.com.by",
  "blogspot.com.co",
  "blogspot.com.cy",
  "blogspot.com.ee",
  "blogspot.com.eg",
  "blogspot.com.es",
  "blogspot.com.mt",
  "blogspot.com.ng",
  "blogspot.com.tr",
  "blogspot.com.uy",
  "blogspot.cv",
  "blogspot.cz",
  "blogspot.de",
  "blogspot.dk",
  "blogspot.fi",
  "blogspot.fr",
  "blogspot.gr",
  "blogspot.hk",
  "blogspot.hr",
  "blogspot.hu",
  "blogspot.ie",
  "blogspot.in",
  "blogspot.is",
  "blogspot.it",
  "blogspot.jp",
  "blogspot.kr",
  "blogspot.li",
  "blogspot.lt",
  "blogspot.lu",
  "blogspot.md",
  "blogspot.mk",
  "blogspot.mr",
  "blogspot.mx",
  "blogspot.my",
  "blogspot.nl",
  "blogspot.no",
  "blogspot.pe",
  "blogspot.pt",
  "blogspot.qa",
  "blogspot.re",
  "blogspot.ro",
  "blogspot.rs",
  "blogspot.ru",
  "blogspot.se",
  "blogspot.sg",
  "blogspot.si",
  "blogspot.sk",
  "blogspot.sn",
  "blogspot.td",
  "blogspot.tw",
  "blogspot.ug",
  "blogspot.vn",
  "goupile.fr",
  "gov.nl",
  "awsmppl.com",
  "günstigbestellen.de",
  "günstigliefern.de",
  "fin.ci",
  "free.hr",
  "caa.li",
  "ua.rs",
  "conf.se",
  "hs.zone",
  "hs.run",
  "hashbang.sh",
  "hasura.app",
  "hasura-app.io",
  "pages.it.hs-heilbronn.de",
  "hepforge.org",
  "herokuapp.com",
  "herokussl.com",
  "ravendb.cloud",
  "myravendb.com",
  "ravendb.community",
  "ravendb.me",
  "development.run",
  "ravendb.run",
  "homesklep.pl",
  "secaas.hk",
  "hoplix.shop",
  "orx.biz",
  "biz.gl",
  "col.ng",
  "firm.ng",
  "gen.ng",
  "ltd.ng",
  "ngo.ng",
  "edu.scot",
  "sch.so",
  "hostyhosting.io",
  "häkkinen.fi",
  "*.moonscale.io",
  "moonscale.net",
  "iki.fi",
  "ibxos.it",
  "iliadboxos.it",
  "impertrixcdn.com",
  "impertrix.com",
  "smushcdn.com",
  "wphostedmail.com",
  "wpmucdn.com",
  "tempurl.host",
  "wpmudev.host",
  "dyn-berlin.de",
  "in-berlin.de",
  "in-brb.de",
  "in-butter.de",
  "in-dsl.de",
  "in-dsl.net",
  "in-dsl.org",
  "in-vpn.de",
  "in-vpn.net",
  "in-vpn.org",
  "biz.at",
  "info.at",
  "info.cx",
  "ac.leg.br",
  "al.leg.br",
  "am.leg.br",
  "ap.leg.br",
  "ba.leg.br",
  "ce.leg.br",
  "df.leg.br",
  "es.leg.br",
  "go.leg.br",
  "ma.leg.br",
  "mg.leg.br",
  "ms.leg.br",
  "mt.leg.br",
  "pa.leg.br",
  "pb.leg.br",
  "pe.leg.br",
  "pi.leg.br",
  "pr.leg.br",
  "rj.leg.br",
  "rn.leg.br",
  "ro.leg.br",
  "rr.leg.br",
  "rs.leg.br",
  "sc.leg.br",
  "se.leg.br",
  "sp.leg.br",
  "to.leg.br",
  "pixolino.com",
  "na4u.ru",
  "iopsys.se",
  "ipifony.net",
  "iservschule.de",
  "mein-iserv.de",
  "schulplattform.de",
  "schulserver.de",
  "test-iserv.de",
  "iserv.dev",
  "iobb.net",
  "mel.cloudlets.com.au",
  "cloud.interhostsolutions.be",
  "users.scale.virtualcloud.com.br",
  "mycloud.by",
  "alp1.ae.flow.ch",
  "appengine.flow.ch",
  "es-1.axarnet.cloud",
  "diadem.cloud",
  "vip.jelastic.cloud",
  "jele.cloud",
  "it1.eur.aruba.jenv-aruba.cloud",
  "it1.jenv-aruba.cloud",
  "keliweb.cloud",
  "cs.keliweb.cloud",
  "oxa.cloud",
  "tn.oxa.cloud",
  "uk.oxa.cloud",
  "primetel.cloud",
  "uk.primetel.cloud",
  "ca.reclaim.cloud",
  "uk.reclaim.cloud",
  "us.reclaim.cloud",
  "ch.trendhosting.cloud",
  "de.trendhosting.cloud",
  "jele.club",
  "amscompute.com",
  "clicketcloud.com",
  "dopaas.com",
  "hidora.com",
  "paas.hosted-by-previder.com",
  "rag-cloud.hosteur.com",
  "rag-cloud-ch.hosteur.com",
  "jcloud.ik-server.com",
  "jcloud-ver-jpc.ik-server.com",
  "demo.jelastic.com",
  "kilatiron.com",
  "paas.massivegrid.com",
  "jed.wafaicloud.com",
  "lon.wafaicloud.com",
  "ryd.wafaicloud.com",
  "j.scaleforce.com.cy",
  "jelastic.dogado.eu",
  "fi.cloudplatform.fi",
  "demo.datacenter.fi",
  "paas.datacenter.fi",
  "jele.host",
  "mircloud.host",
  "paas.beebyte.io",
  "sekd1.beebyteapp.io",
  "jele.io",
  "cloud-fr1.unispace.io",
  "jc.neen.it",
  "cloud.jelastic.open.tim.it",
  "jcloud.kz",
  "upaas.kazteleport.kz",
  "cloudjiffy.net",
  "fra1-de.cloudjiffy.net",
  "west1-us.cloudjiffy.net",
  "jls-sto1.elastx.net",
  "jls-sto2.elastx.net",
  "jls-sto3.elastx.net",
  "faststacks.net",
  "fr-1.paas.massivegrid.net",
  "lon-1.paas.massivegrid.net",
  "lon-2.paas.massivegrid.net",
  "ny-1.paas.massivegrid.net",
  "ny-2.paas.massivegrid.net",
  "sg-1.paas.massivegrid.net",
  "jelastic.saveincloud.net",
  "nordeste-idc.saveincloud.net",
  "j.scaleforce.net",
  "jelastic.tsukaeru.net",
  "sdscloud.pl",
  "unicloud.pl",
  "mircloud.ru",
  "jelastic.regruhosting.ru",
  "enscaled.sg",
  "jele.site",
  "jelastic.team",
  "orangecloud.tn",
  "j.layershift.co.uk",
  "phx.enscaled.us",
  "mircloud.us",
  "myjino.ru",
  "*.hosting.myjino.ru",
  "*.landing.myjino.ru",
  "*.spectrum.myjino.ru",
  "*.vps.myjino.ru",
  "jotelulu.cloud",
  "*.triton.zone",
  "*.cns.joyent.com",
  "js.org",
  "kaas.gg",
  "khplay.nl",
  "ktistory.com",
  "kapsi.fi",
  "keymachine.de",
  "kinghost.net",
  "uni5.net",
  "knightpoint.systems",
  "koobin.events",
  "oya.to",
  "kuleuven.cloud",
  "ezproxy.kuleuven.be",
  "co.krd",
  "edu.krd",
  "krellian.net",
  "webthings.io",
  "git-repos.de",
  "lcube-server.de",
  "svn-repos.de",
  "leadpages.co",
  "lpages.co",
  "lpusercontent.com",
  "lelux.site",
  "co.business",
  "co.education",
  "co.events",
  "co.financial",
  "co.network",
  "co.place",
  "co.technology",
  "app.lmpm.com",
  "linkyard.cloud",
  "linkyard-cloud.ch",
  "members.linode.com",
  "*.nodebalancer.linode.com",
  "*.linodeobjects.com",
  "ip.linodeusercontent.com",
  "we.bs",
  "*.user.localcert.dev",
  "localzone.xyz",
  "loginline.app",
  "loginline.dev",
  "loginline.io",
  "loginline.services",
  "loginline.site",
  "servers.run",
  "lohmus.me",
  "krasnik.pl",
  "leczna.pl",
  "lubartow.pl",
  "lublin.pl",
  "poniatowa.pl",
  "swidnik.pl",
  "glug.org.uk",
  "lug.org.uk",
  "lugs.org.uk",
  "barsy.bg",
  "barsy.co.uk",
  "barsyonline.co.uk",
  "barsycenter.com",
  "barsyonline.com",
  "barsy.club",
  "barsy.de",
  "barsy.eu",
  "barsy.in",
  "barsy.info",
  "barsy.io",
  "barsy.me",
  "barsy.menu",
  "barsy.mobi",
  "barsy.net",
  "barsy.online",
  "barsy.org",
  "barsy.pro",
  "barsy.pub",
  "barsy.ro",
  "barsy.shop",
  "barsy.site",
  "barsy.support",
  "barsy.uk",
  "*.magentosite.cloud",
  "mayfirst.info",
  "mayfirst.org",
  "hb.cldmail.ru",
  "cn.vu",
  "mazeplay.com",
  "mcpe.me",
  "mcdir.me",
  "mcdir.ru",
  "mcpre.ru",
  "vps.mcdir.ru",
  "mediatech.by",
  "mediatech.dev",
  "hra.health",
  "miniserver.com",
  "memset.net",
  "messerli.app",
  "*.cloud.metacentrum.cz",
  "custom.metacentrum.cz",
  "flt.cloud.muni.cz",
  "usr.cloud.muni.cz",
  "meteorapp.com",
  "eu.meteorapp.com",
  "co.pl",
  "*.azurecontainer.io",
  "azurewebsites.net",
  "azure-mobile.net",
  "cloudapp.net",
  "azurestaticapps.net",
  "1.azurestaticapps.net",
  "centralus.azurestaticapps.net",
  "eastasia.azurestaticapps.net",
  "eastus2.azurestaticapps.net",
  "westeurope.azurestaticapps.net",
  "westus2.azurestaticapps.net",
  "csx.cc",
  "mintere.site",
  "forte.id",
  "mozilla-iot.org",
  "bmoattachments.org",
  "net.ru",
  "org.ru",
  "pp.ru",
  "hostedpi.com",
  "customer.mythic-beasts.com",
  "caracal.mythic-beasts.com",
  "fentiger.mythic-beasts.com",
  "lynx.mythic-beasts.com",
  "ocelot.mythic-beasts.com",
  "oncilla.mythic-beasts.com",
  "onza.mythic-beasts.com",
  "sphinx.mythic-beasts.com",
  "vs.mythic-beasts.com",
  "x.mythic-beasts.com",
  "yali.mythic-beasts.com",
  "cust.retrosnub.co.uk",
  "ui.nabu.casa",
  "pony.club",
  "of.fashion",
  "in.london",
  "of.london",
  "from.marketing",
  "with.marketing",
  "for.men",
  "repair.men",
  "and.mom",
  "for.mom",
  "for.one",
  "under.one",
  "for.sale",
  "that.win",
  "from.work",
  "to.work",
  "cloud.nospamproxy.com",
  "netlify.app",
  "4u.com",
  "ngrok.io",
  "nh-serv.co.uk",
  "nfshost.com",
  "*.developer.app",
  "noop.app",
  "*.northflank.app",
  "*.build.run",
  "*.code.run",
  "*.database.run",
  "*.migration.run",
  "noticeable.news",
  "dnsking.ch",
  "mypi.co",
  "n4t.co",
  "001www.com",
  "ddnslive.com",
  "myiphost.com",
  "forumz.info",
  "16-b.it",
  "32-b.it",
  "64-b.it",
  "soundcast.me",
  "tcp4.me",
  "dnsup.net",
  "hicam.net",
  "now-dns.net",
  "ownip.net",
  "vpndns.net",
  "dynserv.org",
  "now-dns.org",
  "x443.pw",
  "now-dns.top",
  "ntdll.top",
  "freeddns.us",
  "crafting.xyz",
  "zapto.xyz",
  "nsupdate.info",
  "nerdpol.ovh",
  "blogsyte.com",
  "brasilia.me",
  "cable-modem.org",
  "ciscofreak.com",
  "collegefan.org",
  "couchpotatofries.org",
  "damnserver.com",
  "ddns.me",
  "ditchyourip.com",
  "dnsfor.me",
  "dnsiskinky.com",
  "dvrcam.info",
  "dynns.com",
  "eating-organic.net",
  "fantasyleague.cc",
  "geekgalaxy.com",
  "golffan.us",
  "health-carereform.com",
  "homesecuritymac.com",
  "homesecuritypc.com",
  "hopto.me",
  "ilovecollege.info",
  "loginto.me",
  "mlbfan.org",
  "mmafan.biz",
  "myactivedirectory.com",
  "mydissent.net",
  "myeffect.net",
  "mymediapc.net",
  "mypsx.net",
  "mysecuritycamera.com",
  "mysecuritycamera.net",
  "mysecuritycamera.org",
  "net-freaks.com",
  "nflfan.org",
  "nhlfan.net",
  "no-ip.ca",
  "no-ip.co.uk",
  "no-ip.net",
  "noip.us",
  "onthewifi.com",
  "pgafan.net",
  "point2this.com",
  "pointto.us",
  "privatizehealthinsurance.net",
  "quicksytes.com",
  "read-books.org",
  "securitytactics.com",
  "serveexchange.com",
  "servehumour.com",
  "servep2p.com",
  "servesarcasm.com",
  "stufftoread.com",
  "ufcfan.org",
  "unusualperson.com",
  "workisboring.com",
  "3utilities.com",
  "bounceme.net",
  "ddns.net",
  "ddnsking.com",
  "gotdns.ch",
  "hopto.org",
  "myftp.biz",
  "myftp.org",
  "myvnc.com",
  "no-ip.biz",
  "no-ip.info",
  "no-ip.org",
  "noip.me",
  "redirectme.net",
  "servebeer.com",
  "serveblog.net",
  "servecounterstrike.com",
  "serveftp.com",
  "servegame.com",
  "servehalflife.com",
  "servehttp.com",
  "serveirc.com",
  "serveminecraft.net",
  "servemp3.com",
  "servepics.com",
  "servequake.com",
  "sytes.net",
  "webhop.me",
  "zapto.org",
  "stage.nodeart.io",
  "pcloud.host",
  "nyc.mn",
  "static.observableusercontent.com",
  "cya.gg",
  "omg.lol",
  "cloudycluster.net",
  "omniwe.site",
  "service.one",
  "nid.io",
  "opensocial.site",
  "opencraft.hosting",
  "orsites.com",
  "operaunite.com",
  "tech.orange",
  "authgear-staging.com",
  "authgearapps.com",
  "skygearapp.com",
  "outsystemscloud.com",
  "*.webpaas.ovh.net",
  "*.hosting.ovh.net",
  "ownprovider.com",
  "own.pm",
  "*.owo.codes",
  "ox.rs",
  "oy.lc",
  "pgfog.com",
  "pagefrontapp.com",
  "pagexl.com",
  "*.paywhirl.com",
  "bar0.net",
  "bar1.net",
  "bar2.net",
  "rdv.to",
  "art.pl",
  "gliwice.pl",
  "krakow.pl",
  "poznan.pl",
  "wroc.pl",
  "zakopane.pl",
  "pantheonsite.io",
  "gotpantheon.com",
  "mypep.link",
  "perspecta.cloud",
  "lk3.ru",
  "on-web.fr",
  "bc.platform.sh",
  "ent.platform.sh",
  "eu.platform.sh",
  "us.platform.sh",
  "*.platformsh.site",
  "*.tst.site",
  "platter-app.com",
  "platter-app.dev",
  "platterp.us",
  "pdns.page",
  "plesk.page",
  "pleskns.com",
  "dyn53.io",
  "onporter.run",
  "co.bn",
  "postman-echo.com",
  "pstmn.io",
  "mock.pstmn.io",
  "httpbin.org",
  "prequalifyme.today",
  "xen.prgmr.com",
  "priv.at",
  "prvcy.page",
  "*.dweb.link",
  "protonet.io",
  "chirurgiens-dentistes-en-france.fr",
  "byen.site",
  "pubtls.org",
  "pythonanywhere.com",
  "eu.pythonanywhere.com",
  "qoto.io",
  "qualifioapp.com",
  "qbuser.com",
  "cloudsite.builders",
  "instances.spawn.cc",
  "instantcloud.cn",
  "ras.ru",
  "qa2.com",
  "qcx.io",
  "*.sys.qcx.io",
  "dev-myqnapcloud.com",
  "alpha-myqnapcloud.com",
  "myqnapcloud.com",
  "*.quipelements.com",
  "vapor.cloud",
  "vaporcloud.io",
  "rackmaze.com",
  "rackmaze.net",
  "g.vbrplsbx.io",
  "*.on-k3s.io",
  "*.on-rancher.cloud",
  "*.on-rio.io",
  "readthedocs.io",
  "rhcloud.com",
  "app.render.com",
  "onrender.com",
  "repl.co",
  "id.repl.co",
  "repl.run",
  "resindevice.io",
  "devices.resinstaging.io",
  "hzc.io",
  "wellbeingzone.eu",
  "wellbeingzone.co.uk",
  "adimo.co.uk",
  "itcouldbewor.se",
  "git-pages.rit.edu",
  "rocky.page",
  "биз.рус",
  "ком.рус",
  "крым.рус",
  "мир.рус",
  "мск.рус",
  "орг.рус",
  "самара.рус",
  "сочи.рус",
  "спб.рус",
  "я.рус",
  "*.builder.code.com",
  "*.dev-builder.code.com",
  "*.stg-builder.code.com",
  "sandcats.io",
  "logoip.de",
  "logoip.com",
  "fr-par-1.baremetal.scw.cloud",
  "fr-par-2.baremetal.scw.cloud",
  "nl-ams-1.baremetal.scw.cloud",
  "fnc.fr-par.scw.cloud",
  "functions.fnc.fr-par.scw.cloud",
  "k8s.fr-par.scw.cloud",
  "nodes.k8s.fr-par.scw.cloud",
  "s3.fr-par.scw.cloud",
  "s3-website.fr-par.scw.cloud",
  "whm.fr-par.scw.cloud",
  "priv.instances.scw.cloud",
  "pub.instances.scw.cloud",
  "k8s.scw.cloud",
  "k8s.nl-ams.scw.cloud",
  "nodes.k8s.nl-ams.scw.cloud",
  "s3.nl-ams.scw.cloud",
  "s3-website.nl-ams.scw.cloud",
  "whm.nl-ams.scw.cloud",
  "k8s.pl-waw.scw.cloud",
  "nodes.k8s.pl-waw.scw.cloud",
  "s3.pl-waw.scw.cloud",
  "s3-website.pl-waw.scw.cloud",
  "scalebook.scw.cloud",
  "smartlabeling.scw.cloud",
  "dedibox.fr",
  "schokokeks.net",
  "gov.scot",
  "service.gov.scot",
  "scrysec.com",
  "firewall-gateway.com",
  "firewall-gateway.de",
  "my-gateway.de",
  "my-router.de",
  "spdns.de",
  "spdns.eu",
  "firewall-gateway.net",
  "my-firewall.org",
  "myfirewall.org",
  "spdns.org",
  "seidat.net",
  "sellfy.store",
  "senseering.net",
  "minisite.ms",
  "magnet.page",
  "biz.ua",
  "co.ua",
  "pp.ua",
  "shiftcrypto.dev",
  "shiftcrypto.io",
  "shiftedit.io",
  "myshopblocks.com",
  "myshopify.com",
  "shopitsite.com",
  "shopware.store",
  "mo-siemens.io",
  "1kapp.com",
  "appchizi.com",
  "applinzi.com",
  "sinaapp.com",
  "vipsinaapp.com",
  "siteleaf.net",
  "bounty-full.com",
  "alpha.bounty-full.com",
  "beta.bounty-full.com",
  "small-web.org",
  "vp4.me",
  "try-snowplow.com",
  "srht.site",
  "stackhero-network.com",
  "musician.io",
  "novecore.site",
  "static.land",
  "dev.static.land",
  "sites.static.land",
  "storebase.store",
  "vps-host.net",
  "atl.jelastic.vps-host.net",
  "njs.jelastic.vps-host.net",
  "ric.jelastic.vps-host.net",
  "playstation-cloud.com",
  "apps.lair.io",
  "*.stolos.io",
  "spacekit.io",
  "customer.speedpartner.de",
  "myspreadshop.at",
  "myspreadshop.com.au",
  "myspreadshop.be",
  "myspreadshop.ca",
  "myspreadshop.ch",
  "myspreadshop.com",
  "myspreadshop.de",
  "myspreadshop.dk",
  "myspreadshop.es",
  "myspreadshop.fi",
  "myspreadshop.fr",
  "myspreadshop.ie",
  "myspreadshop.it",
  "myspreadshop.net",
  "myspreadshop.nl",
  "myspreadshop.no",
  "myspreadshop.pl",
  "myspreadshop.se",
  "myspreadshop.co.uk",
  "api.stdlib.com",
  "storj.farm",
  "utwente.io",
  "soc.srcf.net",
  "user.srcf.net",
  "temp-dns.com",
  "supabase.co",
  "supabase.in",
  "supabase.net",
  "su.paba.se",
  "*.s5y.io",
  "*.sensiosite.cloud",
  "syncloud.it",
  "dscloud.biz",
  "direct.quickconnect.cn",
  "dsmynas.com",
  "familyds.com",
  "diskstation.me",
  "dscloud.me",
  "i234.me",
  "myds.me",
  "synology.me",
  "dscloud.mobi",
  "dsmynas.net",
  "familyds.net",
  "dsmynas.org",
  "familyds.org",
  "vpnplus.to",
  "direct.quickconnect.to",
  "tabitorder.co.il",
  "taifun-dns.de",
  "beta.tailscale.net",
  "ts.net",
  "gda.pl",
  "gdansk.pl",
  "gdynia.pl",
  "med.pl",
  "sopot.pl",
  "site.tb-hosting.com",
  "edugit.io",
  "s3.teckids.org",
  "telebit.app",
  "telebit.io",
  "*.telebit.xyz",
  "gwiddle.co.uk",
  "*.firenet.ch",
  "*.svc.firenet.ch",
  "reservd.com",
  "thingdustdata.com",
  "cust.dev.thingdust.io",
  "cust.disrec.thingdust.io",
  "cust.prod.thingdust.io",
  "cust.testing.thingdust.io",
  "reservd.dev.thingdust.io",
  "reservd.disrec.thingdust.io",
  "reservd.testing.thingdust.io",
  "tickets.io",
  "arvo.network",
  "azimuth.network",
  "tlon.network",
  "torproject.net",
  "pages.torproject.net",
  "bloxcms.com",
  "townnews-staging.com",
  "tbits.me",
  "12hp.at",
  "2ix.at",
  "4lima.at",
  "lima-city.at",
  "12hp.ch",
  "2ix.ch",
  "4lima.ch",
  "lima-city.ch",
  "trafficplex.cloud",
  "de.cool",
  "12hp.de",
  "2ix.de",
  "4lima.de",
  "lima-city.de",
  "1337.pictures",
  "clan.rip",
  "lima-city.rocks",
  "webspace.rocks",
  "lima.zone",
  "*.transurl.be",
  "*.transurl.eu",
  "*.transurl.nl",
  "site.transip.me",
  "tuxfamily.org",
  "dd-dns.de",
  "diskstation.eu",
  "diskstation.org",
  "dray-dns.de",
  "draydns.de",
  "dyn-vpn.de",
  "dynvpn.de",
  "mein-vigor.de",
  "my-vigor.de",
  "my-wan.de",
  "syno-ds.de",
  "synology-diskstation.de",
  "synology-ds.de",
  "typedream.app",
  "pro.typeform.com",
  "uber.space",
  "*.uberspace.de",
  "hk.com",
  "hk.org",
  "ltd.hk",
  "inc.hk",
  "name.pm",
  "sch.tf",
  "biz.wf",
  "sch.wf",
  "org.yt",
  "virtualuser.de",
  "virtual-user.de",
  "upli.io",
  "urown.cloud",
  "dnsupdate.info",
  "lib.de.us",
  "2038.io",
  "vercel.app",
  "vercel.dev",
  "now.sh",
  "router.management",
  "v-info.info",
  "voorloper.cloud",
  "neko.am",
  "nyaa.am",
  "be.ax",
  "cat.ax",
  "es.ax",
  "eu.ax",
  "gg.ax",
  "mc.ax",
  "us.ax",
  "xy.ax",
  "nl.ci",
  "xx.gl",
  "app.gp",
  "blog.gt",
  "de.gt",
  "to.gt",
  "be.gy",
  "cc.hn",
  "blog.kg",
  "io.kg",
  "jp.kg",
  "tv.kg",
  "uk.kg",
  "us.kg",
  "de.ls",
  "at.md",
  "de.md",
  "jp.md",
  "to.md",
  "indie.porn",
  "vxl.sh",
  "ch.tc",
  "me.tc",
  "we.tc",
  "nyan.to",
  "at.vg",
  "blog.vu",
  "dev.vu",
  "me.vu",
  "v.ua",
  "*.vultrobjects.com",
  "wafflecell.com",
  "*.webhare.dev",
  "reserve-online.net",
  "reserve-online.com",
  "bookonline.app",
  "hotelwithflight.com",
  "wedeploy.io",
  "wedeploy.me",
  "wedeploy.sh",
  "remotewd.com",
  "pages.wiardweb.com",
  "wmflabs.org",
  "toolforge.org",
  "wmcloud.org",
  "panel.gg",
  "daemon.panel.gg",
  "messwithdns.com",
  "woltlab-demo.com",
  "myforum.community",
  "community-pro.de",
  "diskussionsbereich.de",
  "community-pro.net",
  "meinforum.net",
  "affinitylottery.org.uk",
  "raffleentry.org.uk",
  "weeklylottery.org.uk",
  "wpenginepowered.com",
  "js.wpenginepowered.com",
  "wixsite.com",
  "editorx.io",
  "half.host",
  "xnbay.com",
  "u2.xnbay.com",
  "u2-local.xnbay.com",
  "cistron.nl",
  "demon.nl",
  "xs4all.space",
  "yandexcloud.net",
  "storage.yandexcloud.net",
  "website.yandexcloud.net",
  "official.academy",
  "yolasite.com",
  "ybo.faith",
  "yombo.me",
  "homelink.one",
  "ybo.party",
  "ybo.review",
  "ybo.science",
  "ybo.trade",
  "ynh.fr",
  "nohost.me",
  "noho.st",
  "za.net",
  "za.org",
  "bss.design",
  "basicserver.io",
  "virtualserver.io",
  "enterprisecloud.nu"
];
(function(e) {
  var a = Ha, o = {};
  o.rules = No.map(function(i) {
    return {
      rule: i,
      suffix: i.replace(/^(\*\.|\!)/, ""),
      punySuffix: -1,
      wildcard: i.charAt(0) === "*",
      exception: i.charAt(0) === "!"
    };
  }), o.endsWith = function(i, s) {
    return i.indexOf(s, i.length - s.length) !== -1;
  }, o.findRule = function(i) {
    var s = a.toASCII(i);
    return o.rules.reduce(function(n, t) {
      return t.punySuffix === -1 && (t.punySuffix = a.toASCII(t.suffix)), !o.endsWith(s, "." + t.punySuffix) && s !== t.punySuffix ? n : t;
    }, null);
  }, e.errorCodes = {
    DOMAIN_TOO_SHORT: "Domain name too short.",
    DOMAIN_TOO_LONG: "Domain name too long. It should be no more than 255 chars.",
    LABEL_STARTS_WITH_DASH: "Domain name label can not start with a dash.",
    LABEL_ENDS_WITH_DASH: "Domain name label can not end with a dash.",
    LABEL_TOO_LONG: "Domain name label should be at most 63 chars long.",
    LABEL_TOO_SHORT: "Domain name label should be at least 1 character long.",
    LABEL_INVALID_CHARS: "Domain name label can only contain alphanumeric characters or dashes."
  }, o.validate = function(i) {
    var s = a.toASCII(i);
    if (s.length < 1)
      return "DOMAIN_TOO_SHORT";
    if (s.length > 255)
      return "DOMAIN_TOO_LONG";
    for (var n = s.split("."), t, r = 0; r < n.length; ++r) {
      if (t = n[r], !t.length)
        return "LABEL_TOO_SHORT";
      if (t.length > 63)
        return "LABEL_TOO_LONG";
      if (t.charAt(0) === "-")
        return "LABEL_STARTS_WITH_DASH";
      if (t.charAt(t.length - 1) === "-")
        return "LABEL_ENDS_WITH_DASH";
      if (!/^[a-z0-9\-]+$/.test(t))
        return "LABEL_INVALID_CHARS";
    }
  }, e.parse = function(i) {
    if (typeof i != "string")
      throw new TypeError("Domain name must be a string.");
    var s = i.slice(0).toLowerCase();
    s.charAt(s.length - 1) === "." && (s = s.slice(0, s.length - 1));
    var n = o.validate(s);
    if (n)
      return {
        input: i,
        error: {
          message: e.errorCodes[n],
          code: n
        }
      };
    var t = {
      input: i,
      tld: null,
      sld: null,
      domain: null,
      subdomain: null,
      listed: !1
    }, r = s.split(".");
    if (r[r.length - 1] === "local")
      return t;
    var m = function() {
      return /xn--/.test(s) && (t.domain && (t.domain = a.toASCII(t.domain)), t.subdomain && (t.subdomain = a.toASCII(t.subdomain))), t;
    }, u = o.findRule(s);
    if (!u)
      return r.length < 2 ? t : (t.tld = r.pop(), t.sld = r.pop(), t.domain = [t.sld, t.tld].join("."), r.length && (t.subdomain = r.pop()), m());
    t.listed = !0;
    var c = u.suffix.split("."), l = r.slice(0, r.length - c.length);
    return u.exception && l.push(c.shift()), t.tld = c.join("."), !l.length || (u.wildcard && (c.unshift(l.pop()), t.tld = c.join(".")), !l.length) || (t.sld = l.pop(), t.domain = [t.sld, t.tld].join("."), l.length && (t.subdomain = l.join("."))), m();
  }, e.get = function(i) {
    return i && e.parse(i).domain || null;
  }, e.isValid = function(i) {
    var s = e.parse(i);
    return !!(s.domain && s.listed);
  };
})(Ka);
/*!
 * Copyright (c) 2018, Salesforce.com, Inc.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice,
 * this list of conditions and the following disclaimer.
 *
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 * this list of conditions and the following disclaimer in the documentation
 * and/or other materials provided with the distribution.
 *
 * 3. Neither the name of Salesforce.com nor the names of its contributors may
 * be used to endorse or promote products derived from this software without
 * specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 * POSSIBILITY OF SUCH DAMAGE.
 */
const _o = Ka, xa = [
  "local",
  "example",
  "invalid",
  "localhost",
  "test"
], Fo = ["localhost", "invalid"];
function qo(e, a = {}) {
  const o = e.split("."), i = o[o.length - 1], s = !!a.allowSpecialUseDomain, n = !!a.ignoreError;
  if (s && xa.includes(i)) {
    if (o.length > 1)
      return `${o[o.length - 2]}.${i}`;
    if (Fo.includes(i))
      return `${i}`;
  }
  if (!n && xa.includes(i))
    throw new Error(
      `Cookie has domain set to the public suffix "${i}" which is a special use domain. To allow this, configure your CookieJar with {allowSpecialUseDomain:true, rejectPublicSuffixes: false}.`
    );
  return _o.get(e);
}
da.getPublicSuffix = qo;
var ha = {};
/*!
 * Copyright (c) 2015, Salesforce.com, Inc.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice,
 * this list of conditions and the following disclaimer.
 *
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 * this list of conditions and the following disclaimer in the documentation
 * and/or other materials provided with the distribution.
 *
 * 3. Neither the name of Salesforce.com nor the names of its contributors may
 * be used to endorse or promote products derived from this software without
 * specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 * POSSIBILITY OF SUCH DAMAGE.
 */
let Bo = class {
  constructor() {
    this.synchronous = !1;
  }
  findCookie(e, a, o, i) {
    throw new Error("findCookie is not implemented");
  }
  findCookies(e, a, o, i) {
    throw new Error("findCookies is not implemented");
  }
  putCookie(e, a) {
    throw new Error("putCookie is not implemented");
  }
  updateCookie(e, a, o) {
    throw new Error("updateCookie is not implemented");
  }
  removeCookie(e, a, o, i) {
    throw new Error("removeCookie is not implemented");
  }
  removeCookies(e, a, o) {
    throw new Error("removeCookies is not implemented");
  }
  removeAllCookies(e) {
    throw new Error("removeAllCookies is not implemented");
  }
  getAllCookies(e) {
    throw new Error(
      "getAllCookies is not implemented (therefore jar cannot be serialized)"
    );
  }
};
ha.Store = Bo;
var ka = {}, Z = {};
Z.fromCallback = function(e) {
  return Object.defineProperty(function() {
    if (typeof arguments[arguments.length - 1] == "function")
      e.apply(this, arguments);
    else
      return new Promise((a, o) => {
        arguments[arguments.length] = (i, s) => {
          if (i)
            return o(i);
          a(s);
        }, arguments.length++, e.apply(this, arguments);
      });
  }, "name", { value: e.name });
};
Z.fromPromise = function(e) {
  return Object.defineProperty(function() {
    const a = arguments[arguments.length - 1];
    if (typeof a != "function")
      return e.apply(this, arguments);
    delete arguments[arguments.length - 1], arguments.length--, e.apply(this, arguments).then((o) => a(null, o), a);
  }, "name", { value: e.name });
};
var Xa = {};
/*!
 * Copyright (c) 2015, Salesforce.com, Inc.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice,
 * this list of conditions and the following disclaimer.
 *
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 * this list of conditions and the following disclaimer in the documentation
 * and/or other materials provided with the distribution.
 *
 * 3. Neither the name of Salesforce.com nor the names of its contributors may
 * be used to endorse or promote products derived from this software without
 * specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 * POSSIBILITY OF SUCH DAMAGE.
 */
const $o = da;
function Mo(e, a) {
  const o = $o.getPublicSuffix(e, {
    allowSpecialUseDomain: a
  });
  if (!o)
    return null;
  if (o == e)
    return [e];
  e.slice(-1) == "." && (e = e.slice(0, -1));
  const i = e.slice(0, -(o.length + 1)).split(".").reverse();
  let s = o;
  const n = [s];
  for (; i.length; )
    s = `${i.shift()}.${s}`, n.push(s);
  return n;
}
Xa.permuteDomain = Mo;
var ga = {};
/*!
 * Copyright (c) 2015, Salesforce.com, Inc.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice,
 * this list of conditions and the following disclaimer.
 *
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 * this list of conditions and the following disclaimer in the documentation
 * and/or other materials provided with the distribution.
 *
 * 3. Neither the name of Salesforce.com nor the names of its contributors may
 * be used to endorse or promote products derived from this software without
 * specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 * POSSIBILITY OF SUCH DAMAGE.
 */
function Ho(e, a) {
  return a === e || e.indexOf(a) === 0 && (a.substr(-1) === "/" || e.substr(a.length, 1) === "/");
}
ga.pathMatch = Ho;
var K = {};
const Qo = {}, Go = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Qo
}, Symbol.toStringTag, { value: "Module" })), Jo = /* @__PURE__ */ La(Go);
function Ya() {
  try {
    return Jo;
  } catch {
    return null;
  }
}
function Wo() {
  return Symbol.for("nodejs.util.inspect.custom");
}
function Zo(e) {
  const a = (e.requireUtil || Ya)();
  return a ? a.inspect.custom : null;
}
K.getUtilInspect = function(e, a = {}) {
  const o = (a.requireUtil || Ya)();
  return function(i, s, n) {
    return o ? o.inspect(i, s, n) : e(i);
  };
};
K.getCustomInspectSymbol = function(e = {}) {
  return (e.lookupCustomInspectSymbol || Wo)() || Zo(e);
};
/*!
 * Copyright (c) 2015, Salesforce.com, Inc.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice,
 * this list of conditions and the following disclaimer.
 *
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 * this list of conditions and the following disclaimer in the documentation
 * and/or other materials provided with the distribution.
 *
 * 3. Neither the name of Salesforce.com nor the names of its contributors may
 * be used to endorse or promote products derived from this software without
 * specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 * POSSIBILITY OF SUCH DAMAGE.
 */
const { fromCallback: Ko } = Z, Xo = ha.Store, Yo = Xa.permuteDomain, ae = ga.pathMatch, { getCustomInspectSymbol: oe, getUtilInspect: ee } = K;
let ia = class extends Xo {
  constructor() {
    super(), this.synchronous = !0, this.idx = /* @__PURE__ */ Object.create(null);
    const e = oe();
    e && (this[e] = this.inspect);
  }
  inspect() {
    return `{ idx: ${{ inspect: ee(ao) }.inspect(this.idx, !1, 2)} }`;
  }
  findCookie(e, a, o, i) {
    return !this.idx[e] || !this.idx[e][a] ? i(null, void 0) : i(null, this.idx[e][a][o] || null);
  }
  findCookies(e, a, o, i) {
    const s = [];
    if (typeof o == "function" && (i = o, o = !0), !e)
      return i(null, []);
    let n;
    a ? n = function(m) {
      Object.keys(m).forEach((u) => {
        if (ae(a, u)) {
          const c = m[u];
          for (const l in c)
            s.push(c[l]);
        }
      });
    } : n = function(m) {
      for (const u in m) {
        const c = m[u];
        for (const l in c)
          s.push(c[l]);
      }
    };
    const t = Yo(e, o) || [e], r = this.idx;
    t.forEach((m) => {
      const u = r[m];
      u && n(u);
    }), i(null, s);
  }
  putCookie(e, a) {
    this.idx[e.domain] || (this.idx[e.domain] = /* @__PURE__ */ Object.create(null)), this.idx[e.domain][e.path] || (this.idx[e.domain][e.path] = /* @__PURE__ */ Object.create(null)), this.idx[e.domain][e.path][e.key] = e, a(null);
  }
  updateCookie(e, a, o) {
    this.putCookie(a, o);
  }
  removeCookie(e, a, o, i) {
    this.idx[e] && this.idx[e][a] && this.idx[e][a][o] && delete this.idx[e][a][o], i(null);
  }
  removeCookies(e, a, o) {
    return this.idx[e] && (a ? delete this.idx[e][a] : delete this.idx[e]), o(null);
  }
  removeAllCookies(e) {
    return this.idx = /* @__PURE__ */ Object.create(null), e(null);
  }
  getAllCookies(e) {
    const a = [], o = this.idx;
    Object.keys(o).forEach((i) => {
      Object.keys(o[i]).forEach((s) => {
        Object.keys(o[i][s]).forEach((n) => {
          n !== null && a.push(o[i][s][n]);
        });
      });
    }), a.sort((i, s) => (i.creationIndex || 0) - (s.creationIndex || 0)), e(null, a);
  }
};
[
  "findCookie",
  "findCookies",
  "putCookie",
  "updateCookie",
  "removeCookie",
  "removeCookies",
  "removeAllCookies",
  "getAllCookies"
].forEach((e) => {
  ia.prototype[e] = Ko(
    ia.prototype[e]
  );
});
ka.MemoryCookieStore = ia;
function ao(e) {
  const a = Object.keys(e);
  if (a.length === 0)
    return "[Object: null prototype] {}";
  let o = `[Object: null prototype] {
`;
  return Object.keys(e).forEach((i, s) => {
    o += ie(i, e[i]), s < a.length - 1 && (o += ","), o += `
`;
  }), o += "}", o;
}
function ie(e, a) {
  const o = "  ";
  let i = `${o}'${e}': [Object: null prototype] {
`;
  return Object.keys(a).forEach((s, n, t) => {
    i += se(s, a[s]), n < t.length - 1 && (i += ","), i += `
`;
  }), i += `${o}}`, i;
}
function se(e, a) {
  const o = "    ";
  let i = `${o}'${e}': [Object: null prototype] {
`;
  return Object.keys(a).forEach((s, n, t) => {
    const r = a[s];
    i += `      ${s}: ${r.inspect()}`, n < t.length - 1 && (i += ","), i += `
`;
  }), i += `${o}}`, i;
}
ka.inspectFallback = ao;
var E = {};
function oo(e) {
  return typeof e == "function";
}
function ne(e) {
  return eo(e) && e !== "";
}
function te(e) {
  return me(e, Date) && ue(e.getTime());
}
function re(e) {
  return e === "" || e instanceof String && e.toString() === "";
}
function eo(e) {
  return typeof e == "string" || e instanceof String;
}
function io(e) {
  return toString.call(e) === "[object Object]";
}
function me(e, a) {
  try {
    return e instanceof a;
  } catch {
    return !1;
  }
}
function ue(e) {
  return typeof e == "number" && e % 1 === 0;
}
function ce(e, a, o) {
  if (oo(a) || (o = a, a = null), io(o) || (o = { Error: "Failed Check" }), !e)
    if (a)
      a(new sa(o));
    else
      throw new sa(o);
}
class sa extends Error {
  constructor(...a) {
    super(...a);
  }
}
E.ParameterError = sa;
E.isFunction = oo;
E.isNonEmptyString = ne;
E.isDate = te;
E.isEmptyString = re;
E.isString = eo;
E.isObject = io;
E.validate = ce;
var le = "4.1.3";
/*!
 * Copyright (c) 2015-2020, Salesforce.com, Inc.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice,
 * this list of conditions and the following disclaimer.
 *
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 * this list of conditions and the following disclaimer in the documentation
 * and/or other materials provided with the distribution.
 *
 * 3. Neither the name of Salesforce.com nor the names of its contributors may
 * be used to endorse or promote products derived from this software without
 * specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 * POSSIBILITY OF SUCH DAMAGE.
 */
const Oa = Ha, pe = Uo, ja = da, de = ha.Store, he = ka.MemoryCookieStore, ke = ga.pathMatch, p = E, ge = le, { fromCallback: so } = Z, { getCustomInspectSymbol: je } = K, be = /^[\x21\x23-\x2B\x2D-\x3A\x3C-\x5B\x5D-\x7E]+$/, Da = /[\x00-\x1F]/, Ia = [`
`, "\r", "\0"], ye = /[\x20-\x3A\x3C-\x7E]+/, fe = /[\x09\x20-\x2F\x3B-\x40\x5B-\x60\x7B-\x7E]/, we = {
  jan: 0,
  feb: 1,
  mar: 2,
  apr: 3,
  may: 4,
  jun: 5,
  jul: 6,
  aug: 7,
  sep: 8,
  oct: 9,
  nov: 10,
  dec: 11
}, na = 2147483647e3, ve = 0, Aa = 'Invalid sameSiteContext option for getCookies(); expected one of "strict", "lax", or "none"';
function Sa(e) {
  p.validate(p.isNonEmptyString(e), e);
  const a = String(e).toLowerCase();
  return a === "none" || a === "lax" || a === "strict" ? a : null;
}
const _ = Object.freeze({
  SILENT: "silent",
  STRICT: "strict",
  DISABLED: "unsafe-disabled"
}), ze = /(?:^(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}$)|(?:^(?:(?:[a-f\d]{1,4}:){7}(?:[a-f\d]{1,4}|:)|(?:[a-f\d]{1,4}:){6}(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|:[a-f\d]{1,4}|:)|(?:[a-f\d]{1,4}:){5}(?::(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-f\d]{1,4}){1,2}|:)|(?:[a-f\d]{1,4}:){4}(?:(?::[a-f\d]{1,4}){0,1}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-f\d]{1,4}){1,3}|:)|(?:[a-f\d]{1,4}:){3}(?:(?::[a-f\d]{1,4}){0,2}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-f\d]{1,4}){1,4}|:)|(?:[a-f\d]{1,4}:){2}(?:(?::[a-f\d]{1,4}){0,3}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-f\d]{1,4}){1,5}|:)|(?:[a-f\d]{1,4}:){1}(?:(?::[a-f\d]{1,4}){0,4}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-f\d]{1,4}){1,6}|:)|(?::(?:(?::[a-f\d]{1,4}){0,5}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-f\d]{1,4}){1,7}|:)))$)/, xe = `
\\[?(?:
(?:[a-fA-F\\d]{1,4}:){7}(?:[a-fA-F\\d]{1,4}|:)|
(?:[a-fA-F\\d]{1,4}:){6}(?:(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}|:[a-fA-F\\d]{1,4}|:)|
(?:[a-fA-F\\d]{1,4}:){5}(?::(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}|(?::[a-fA-F\\d]{1,4}){1,2}|:)|
(?:[a-fA-F\\d]{1,4}:){4}(?:(?::[a-fA-F\\d]{1,4}){0,1}:(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}|(?::[a-fA-F\\d]{1,4}){1,3}|:)|
(?:[a-fA-F\\d]{1,4}:){3}(?:(?::[a-fA-F\\d]{1,4}){0,2}:(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}|(?::[a-fA-F\\d]{1,4}){1,4}|:)|
(?:[a-fA-F\\d]{1,4}:){2}(?:(?::[a-fA-F\\d]{1,4}){0,3}:(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}|(?::[a-fA-F\\d]{1,4}){1,5}|:)|
(?:[a-fA-F\\d]{1,4}:){1}(?:(?::[a-fA-F\\d]{1,4}){0,4}:(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}|(?::[a-fA-F\\d]{1,4}){1,6}|:)|
(?::(?:(?::[a-fA-F\\d]{1,4}){0,5}:(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}|(?::[a-fA-F\\d]{1,4}){1,7}|:))
)(?:%[0-9a-zA-Z]{1,})?\\]?
`.replace(/\s*\/\/.*$/gm, "").replace(/\n/g, "").trim(), no = new RegExp(`^${xe}$`);
function ta(e, a, o, i) {
  let s = 0;
  for (; s < e.length; ) {
    const n = e.charCodeAt(s);
    if (n <= 47 || n >= 58)
      break;
    s++;
  }
  return s < a || s > o || !i && s != e.length ? null : parseInt(e.substr(0, s), 10);
}
function Oe(e) {
  const a = e.split(":"), o = [0, 0, 0];
  if (a.length !== 3)
    return null;
  for (let i = 0; i < 3; i++) {
    const s = i == 2, n = ta(a[i], 1, 2, s);
    if (n === null)
      return null;
    o[i] = n;
  }
  return o;
}
function De(e) {
  e = String(e).substr(0, 3).toLowerCase();
  const a = we[e];
  return a >= 0 ? a : null;
}
function J(e) {
  if (!e)
    return;
  const a = e.split(fe);
  if (!a)
    return;
  let o = null, i = null, s = null, n = null, t = null, r = null;
  for (let m = 0; m < a.length; m++) {
    const u = a[m].trim();
    if (!u.length)
      continue;
    let c;
    if (s === null && (c = Oe(u), c)) {
      o = c[0], i = c[1], s = c[2];
      continue;
    }
    if (n === null && (c = ta(u, 1, 2, !0), c !== null)) {
      n = c;
      continue;
    }
    if (t === null && (c = De(u), c !== null)) {
      t = c;
      continue;
    }
    r === null && (c = ta(u, 2, 4, !0), c !== null && (r = c, r >= 70 && r <= 99 ? r += 1900 : r >= 0 && r <= 69 && (r += 2e3)));
  }
  if (!(n === null || t === null || r === null || s === null || n < 1 || n > 31 || r < 1601 || o > 23 || i > 59 || s > 59))
    return new Date(Date.UTC(r, t, n, o, i, s));
}
function Ie(e) {
  return p.validate(p.isDate(e), e), e.toUTCString();
}
function H(e) {
  return e == null ? null : (e = e.trim().replace(/^\./, ""), no.test(e) && (e = e.replace("[", "").replace("]", "")), Oa && /[^\u0001-\u007f]/.test(e) && (e = Oa.toASCII(e)), e.toLowerCase());
}
function Ca(e, a, o) {
  if (e == null || a == null)
    return null;
  if (o !== !1 && (e = H(e), a = H(a)), e == a)
    return !0;
  const i = e.lastIndexOf(a);
  return !(i <= 0 || e.length !== a.length + i || e.substr(i - 1, 1) !== "." || ze.test(e));
}
function Ae(e) {
  if (!e || e.substr(0, 1) !== "/")
    return "/";
  if (e === "/")
    return e;
  const a = e.lastIndexOf("/");
  return a === 0 ? "/" : e.slice(0, a);
}
function Se(e) {
  if (p.isEmptyString(e))
    return e;
  for (let a = 0; a < Ia.length; a++) {
    const o = e.indexOf(Ia[a]);
    o !== -1 && (e = e.substr(0, o));
  }
  return e;
}
function Ce(e, a) {
  e = Se(e), p.validate(p.isString(e), e);
  let o = e.indexOf("=");
  if (a)
    o === 0 && (e = e.substr(1), o = e.indexOf("="));
  else if (o <= 0)
    return;
  let i, s;
  if (o <= 0 ? (i = "", s = e.trim()) : (i = e.substr(0, o).trim(), s = e.substr(o + 1).trim()), Da.test(i) || Da.test(s))
    return;
  const n = new z();
  return n.key = i, n.value = s, n;
}
function Ve(e, a) {
  if ((!a || typeof a != "object") && (a = {}), p.isEmptyString(e) || !p.isString(e))
    return null;
  e = e.trim();
  const o = e.indexOf(";"), i = o === -1 ? e : e.substr(0, o), s = Ce(i, !!a.loose);
  if (!s)
    return;
  if (o === -1)
    return s;
  const n = e.slice(o + 1).trim();
  if (n.length === 0)
    return s;
  const t = n.split(";");
  for (; t.length; ) {
    const r = t.shift().trim();
    if (r.length === 0)
      continue;
    const m = r.indexOf("=");
    let u, c;
    switch (m === -1 ? (u = r, c = null) : (u = r.substr(0, m), c = r.substr(m + 1)), u = u.trim().toLowerCase(), c && (c = c.trim()), u) {
      case "expires":
        if (c) {
          const l = J(c);
          l && (s.expires = l);
        }
        break;
      case "max-age":
        if (c && /^-?[0-9]+$/.test(c)) {
          const l = parseInt(c, 10);
          s.setMaxAge(l);
        }
        break;
      case "domain":
        if (c) {
          const l = c.trim().replace(/^\./, "");
          l && (s.domain = l.toLowerCase());
        }
        break;
      case "path":
        s.path = c && c[0] === "/" ? c : null;
        break;
      case "secure":
        s.secure = !0;
        break;
      case "httponly":
        s.httpOnly = !0;
        break;
      case "samesite":
        switch (c ? c.toLowerCase() : "") {
          case "strict":
            s.sameSite = "strict";
            break;
          case "lax":
            s.sameSite = "lax";
            break;
          case "none":
            s.sameSite = "none";
            break;
          default:
            s.sameSite = void 0;
            break;
        }
        break;
      default:
        s.extensions = s.extensions || [], s.extensions.push(r);
        break;
    }
  }
  return s;
}
function Ee(e) {
  return p.validate(p.isObject(e), e), !e.key.startsWith("__Secure-") || e.secure;
}
function Pe(e) {
  return p.validate(p.isObject(e)), !e.key.startsWith("__Host-") || e.secure && e.hostOnly && e.path != null && e.path === "/";
}
function to(e) {
  let a;
  try {
    a = JSON.parse(e);
  } catch (o) {
    return o;
  }
  return a;
}
function ba(e) {
  if (!e || p.isEmptyString(e))
    return null;
  let a;
  if (typeof e == "string") {
    if (a = to(e), a instanceof Error)
      return null;
  } else
    a = e;
  const o = new z();
  for (let i = 0; i < z.serializableProperties.length; i++) {
    const s = z.serializableProperties[i];
    a[s] === void 0 || a[s] === $[s] || (s === "expires" || s === "creation" || s === "lastAccessed" ? a[s] === null ? o[s] = null : o[s] = a[s] == "Infinity" ? "Infinity" : new Date(a[s]) : o[s] = a[s]);
  }
  return o;
}
function Va(e, a) {
  p.validate(p.isObject(e), e), p.validate(p.isObject(a), a);
  let o = 0;
  const i = e.path ? e.path.length : 0;
  if (o = (a.path ? a.path.length : 0) - i, o !== 0)
    return o;
  const s = e.creation ? e.creation.getTime() : na, n = a.creation ? a.creation.getTime() : na;
  return o = s - n, o !== 0 || (o = e.creationIndex - a.creationIndex), o;
}
function Ea(e) {
  if (e instanceof Object)
    return e;
  try {
    e = decodeURI(e);
  } catch {
  }
  return pe(e);
}
const $ = {
  // the order in which the RFC has them:
  key: "",
  value: "",
  expires: "Infinity",
  maxAge: null,
  domain: null,
  path: null,
  secure: !1,
  httpOnly: !1,
  extensions: null,
  // set by the CookieJar:
  hostOnly: null,
  pathIsDefault: null,
  creation: null,
  lastAccessed: null,
  sameSite: void 0
};
class z {
  constructor(a = {}) {
    const o = je();
    o && (this[o] = this.inspect), Object.assign(this, $, a), this.creation = this.creation || /* @__PURE__ */ new Date(), Object.defineProperty(this, "creationIndex", {
      configurable: !1,
      enumerable: !1,
      // important for assert.deepEqual checks
      writable: !0,
      value: ++z.cookiesCreated
    });
  }
  inspect() {
    const a = Date.now(), o = this.hostOnly != null ? this.hostOnly : "?", i = this.creation ? `${a - this.creation.getTime()}ms` : "?", s = this.lastAccessed ? `${a - this.lastAccessed.getTime()}ms` : "?";
    return `Cookie="${this.toString()}; hostOnly=${o}; aAge=${s}; cAge=${i}"`;
  }
  toJSON() {
    const a = {};
    for (const o of z.serializableProperties)
      this[o] !== $[o] && (o === "expires" || o === "creation" || o === "lastAccessed" ? this[o] === null ? a[o] = null : a[o] = this[o] == "Infinity" ? "Infinity" : this[o].toISOString() : o === "maxAge" ? this[o] !== null && (a[o] = this[o] == 1 / 0 || this[o] == -1 / 0 ? this[o].toString() : this[o]) : this[o] !== $[o] && (a[o] = this[o]));
    return a;
  }
  clone() {
    return ba(this.toJSON());
  }
  validate() {
    if (!be.test(this.value) || this.expires != 1 / 0 && !(this.expires instanceof Date) && !J(this.expires) || this.maxAge != null && this.maxAge <= 0 || this.path != null && !ye.test(this.path))
      return !1;
    const a = this.cdomain();
    return !(a && (a.match(/\.$/) || ja.getPublicSuffix(a) == null));
  }
  setExpires(a) {
    a instanceof Date ? this.expires = a : this.expires = J(a) || "Infinity";
  }
  setMaxAge(a) {
    a === 1 / 0 || a === -1 / 0 ? this.maxAge = a.toString() : this.maxAge = a;
  }
  cookieString() {
    let a = this.value;
    return a == null && (a = ""), this.key === "" ? a : `${this.key}=${a}`;
  }
  // gives Set-Cookie header format
  toString() {
    let a = this.cookieString();
    if (this.expires != 1 / 0 && (this.expires instanceof Date ? a += `; Expires=${Ie(this.expires)}` : a += `; Expires=${this.expires}`), this.maxAge != null && this.maxAge != 1 / 0 && (a += `; Max-Age=${this.maxAge}`), this.domain && !this.hostOnly && (a += `; Domain=${this.domain}`), this.path && (a += `; Path=${this.path}`), this.secure && (a += "; Secure"), this.httpOnly && (a += "; HttpOnly"), this.sameSite && this.sameSite !== "none") {
      const o = z.sameSiteCanonical[this.sameSite.toLowerCase()];
      a += `; SameSite=${o || this.sameSite}`;
    }
    return this.extensions && this.extensions.forEach((o) => {
      a += `; ${o}`;
    }), a;
  }
  // TTL() partially replaces the "expiry-time" parts of S5.3 step 3 (setCookie()
  // elsewhere)
  // S5.3 says to give the "latest representable date" for which we use Infinity
  // For "expired" we use 0
  TTL(a) {
    if (this.maxAge != null)
      return this.maxAge <= 0 ? 0 : this.maxAge * 1e3;
    let o = this.expires;
    return o != 1 / 0 ? (o instanceof Date || (o = J(o) || 1 / 0), o == 1 / 0 ? 1 / 0 : o.getTime() - (a || Date.now())) : 1 / 0;
  }
  // expiryTime() replaces the "expiry-time" parts of S5.3 step 3 (setCookie()
  // elsewhere)
  expiryTime(a) {
    if (this.maxAge != null) {
      const o = a || this.creation || /* @__PURE__ */ new Date(), i = this.maxAge <= 0 ? -1 / 0 : this.maxAge * 1e3;
      return o.getTime() + i;
    }
    return this.expires == 1 / 0 ? 1 / 0 : this.expires.getTime();
  }
  // expiryDate() replaces the "expiry-time" parts of S5.3 step 3 (setCookie()
  // elsewhere), except it returns a Date
  expiryDate(a) {
    const o = this.expiryTime(a);
    return o == 1 / 0 ? new Date(na) : o == -1 / 0 ? new Date(ve) : new Date(o);
  }
  // This replaces the "persistent-flag" parts of S5.3 step 3
  isPersistent() {
    return this.maxAge != null || this.expires != 1 / 0;
  }
  // Mostly S5.1.2 and S5.2.3:
  canonicalizedDomain() {
    return this.domain == null ? null : H(this.domain);
  }
  cdomain() {
    return this.canonicalizedDomain();
  }
}
z.cookiesCreated = 0;
z.parse = Ve;
z.fromJSON = ba;
z.serializableProperties = Object.keys($);
z.sameSiteLevel = {
  strict: 3,
  lax: 2,
  none: 1
};
z.sameSiteCanonical = {
  strict: "Strict",
  lax: "Lax"
};
function Pa(e) {
  if (e != null) {
    const a = e.toLowerCase();
    switch (a) {
      case _.STRICT:
      case _.SILENT:
      case _.DISABLED:
        return a;
    }
  }
  return _.SILENT;
}
class D {
  constructor(a, o = { rejectPublicSuffixes: !0 }) {
    typeof o == "boolean" && (o = { rejectPublicSuffixes: o }), p.validate(p.isObject(o), o), this.rejectPublicSuffixes = o.rejectPublicSuffixes, this.enableLooseMode = !!o.looseMode, this.allowSpecialUseDomain = typeof o.allowSpecialUseDomain == "boolean" ? o.allowSpecialUseDomain : !0, this.store = a || new he(), this.prefixSecurity = Pa(o.prefixSecurity), this._cloneSync = P("clone"), this._importCookiesSync = P("_importCookies"), this.getCookiesSync = P("getCookies"), this.getCookieStringSync = P("getCookieString"), this.getSetCookieStringsSync = P("getSetCookieStrings"), this.removeAllCookiesSync = P("removeAllCookies"), this.setCookieSync = P("setCookie"), this.serializeSync = P("serialize");
  }
  setCookie(a, o, i, s) {
    p.validate(p.isNonEmptyString(o), s, i);
    let n;
    if (p.isFunction(o))
      return s = o, s(new Error("No URL was specified"));
    const t = Ea(o);
    if (p.isFunction(i) && (s = i, i = {}), p.validate(p.isFunction(s), s), !p.isNonEmptyString(a) && !p.isObject(a) && a instanceof String && a.length == 0)
      return s(null);
    const r = H(t.hostname), m = i.loose || this.enableLooseMode;
    let u = null;
    if (i.sameSiteContext && (u = Sa(i.sameSiteContext), !u))
      return s(new Error(Aa));
    if (typeof a == "string" || a instanceof String) {
      if (a = z.parse(a, { loose: m }), !a)
        return n = new Error("Cookie failed to parse"), s(i.ignoreError ? null : n);
    } else if (!(a instanceof z))
      return n = new Error(
        "First argument to setCookie must be a Cookie object or string"
      ), s(i.ignoreError ? null : n);
    const c = i.now || /* @__PURE__ */ new Date();
    if (this.rejectPublicSuffixes && a.domain && ja.getPublicSuffix(a.cdomain(), {
      allowSpecialUseDomain: this.allowSpecialUseDomain,
      ignoreError: i.ignoreError
    }) == null && !no.test(a.domain))
      return n = new Error("Cookie has domain set to a public suffix"), s(i.ignoreError ? null : n);
    if (a.domain) {
      if (!Ca(r, a.cdomain(), !1))
        return n = new Error(
          `Cookie not in this host's domain. Cookie:${a.cdomain()} Request:${r}`
        ), s(i.ignoreError ? null : n);
      a.hostOnly == null && (a.hostOnly = !1);
    } else
      a.hostOnly = !0, a.domain = r;
    if ((!a.path || a.path[0] !== "/") && (a.path = Ae(t.pathname), a.pathIsDefault = !0), i.http === !1 && a.httpOnly)
      return n = new Error("Cookie is HttpOnly and this isn't an HTTP API"), s(i.ignoreError ? null : n);
    if (a.sameSite !== "none" && a.sameSite !== void 0 && u && u === "none")
      return n = new Error(
        "Cookie is SameSite but this is a cross-origin request"
      ), s(i.ignoreError ? null : n);
    const l = this.prefixSecurity === _.SILENT;
    if (this.prefixSecurity !== _.DISABLED) {
      let v = !1, y;
      if (Ee(a) ? Pe(a) || (v = !0, y = "Cookie has __Host prefix but either Secure or HostOnly attribute is not set or Path is not '/'") : (v = !0, y = "Cookie has __Secure prefix but Secure attribute is not set"), v)
        return s(
          i.ignoreError || l ? null : new Error(y)
        );
    }
    const h = this.store;
    h.updateCookie || (h.updateCookie = function(v, y, O) {
      this.putCookie(y, O);
    });
    function f(v, y) {
      if (v)
        return s(v);
      const O = function(G) {
        if (G)
          return s(G);
        s(null, a);
      };
      if (y) {
        if (i.http === !1 && y.httpOnly)
          return v = new Error("old Cookie is HttpOnly and this isn't an HTTP API"), s(i.ignoreError ? null : v);
        a.creation = y.creation, a.creationIndex = y.creationIndex, a.lastAccessed = c, h.updateCookie(y, a, O);
      } else
        a.creation = a.lastAccessed = c, h.putCookie(a, O);
    }
    h.findCookie(a.domain, a.path, a.key, f);
  }
  // RFC6365 S5.4
  getCookies(a, o, i) {
    p.validate(p.isNonEmptyString(a), i, a);
    const s = Ea(a);
    p.isFunction(o) && (i = o, o = {}), p.validate(p.isObject(o), i, o), p.validate(p.isFunction(i), i);
    const n = H(s.hostname), t = s.pathname || "/";
    let r = o.secure;
    r == null && s.protocol && (s.protocol == "https:" || s.protocol == "wss:") && (r = !0);
    let m = 0;
    if (o.sameSiteContext) {
      const y = Sa(o.sameSiteContext);
      if (m = z.sameSiteLevel[y], !m)
        return i(new Error(Aa));
    }
    let u = o.http;
    u == null && (u = !0);
    const c = o.now || Date.now(), l = o.expire !== !1, h = !!o.allPaths, f = this.store;
    function v(y) {
      if (y.hostOnly) {
        if (y.domain != n)
          return !1;
      } else if (!Ca(n, y.domain, !1))
        return !1;
      return !h && !ke(t, y.path) || y.secure && !r || y.httpOnly && !u || m && z.sameSiteLevel[y.sameSite || "none"] > m ? !1 : l && y.expiryTime() <= c ? (f.removeCookie(y.domain, y.path, y.key, () => {
      }), !1) : !0;
    }
    f.findCookies(
      n,
      h ? null : t,
      this.allowSpecialUseDomain,
      (y, O) => {
        if (y)
          return i(y);
        O = O.filter(v), o.sort !== !1 && (O = O.sort(Va));
        const G = /* @__PURE__ */ new Date();
        for (const uo of O)
          uo.lastAccessed = G;
        i(null, O);
      }
    );
  }
  getCookieString(...a) {
    const o = a.pop();
    p.validate(p.isFunction(o), o);
    const i = function(s, n) {
      s ? o(s) : o(
        null,
        n.sort(Va).map((t) => t.cookieString()).join("; ")
      );
    };
    a.push(i), this.getCookies.apply(this, a);
  }
  getSetCookieStrings(...a) {
    const o = a.pop();
    p.validate(p.isFunction(o), o);
    const i = function(s, n) {
      s ? o(s) : o(
        null,
        n.map((t) => t.toString())
      );
    };
    a.push(i), this.getCookies.apply(this, a);
  }
  serialize(a) {
    p.validate(p.isFunction(a), a);
    let o = this.store.constructor.name;
    p.isObject(o) && (o = null);
    const i = {
      // The version of tough-cookie that serialized this jar. Generally a good
      // practice since future versions can make data import decisions based on
      // known past behavior. When/if this matters, use `semver`.
      version: `tough-cookie@${ge}`,
      // add the store type, to make humans happy:
      storeType: o,
      // CookieJar configuration:
      rejectPublicSuffixes: !!this.rejectPublicSuffixes,
      enableLooseMode: !!this.enableLooseMode,
      allowSpecialUseDomain: !!this.allowSpecialUseDomain,
      prefixSecurity: Pa(this.prefixSecurity),
      // this gets filled from getAllCookies:
      cookies: []
    };
    if (!(this.store.getAllCookies && typeof this.store.getAllCookies == "function"))
      return a(
        new Error(
          "store does not support getAllCookies and cannot be serialized"
        )
      );
    this.store.getAllCookies((s, n) => s ? a(s) : (i.cookies = n.map((t) => (t = t instanceof z ? t.toJSON() : t, delete t.creationIndex, t)), a(null, i)));
  }
  toJSON() {
    return this.serializeSync();
  }
  // use the class method CookieJar.deserialize instead of calling this directly
  _importCookies(a, o) {
    let i = a.cookies;
    if (!i || !Array.isArray(i))
      return o(new Error("serialized jar has no cookies array"));
    i = i.slice();
    const s = (n) => {
      if (n)
        return o(n);
      if (!i.length)
        return o(n, this);
      let t;
      try {
        t = ba(i.shift());
      } catch (r) {
        return o(r);
      }
      if (t === null)
        return s(null);
      this.store.putCookie(t, s);
    };
    s();
  }
  clone(a, o) {
    arguments.length === 1 && (o = a, a = null), this.serialize((i, s) => {
      if (i)
        return o(i);
      D.deserialize(s, a, o);
    });
  }
  cloneSync(a) {
    if (arguments.length === 0)
      return this._cloneSync();
    if (!a.synchronous)
      throw new Error(
        "CookieJar clone destination store is not synchronous; use async API instead."
      );
    return this._cloneSync(a);
  }
  removeAllCookies(a) {
    p.validate(p.isFunction(a), a);
    const o = this.store;
    if (typeof o.removeAllCookies == "function" && o.removeAllCookies !== de.prototype.removeAllCookies)
      return o.removeAllCookies(a);
    o.getAllCookies((i, s) => {
      if (i)
        return a(i);
      if (s.length === 0)
        return a(null);
      let n = 0;
      const t = [];
      function r(m) {
        if (m && t.push(m), n++, n === s.length)
          return a(t.length ? t[0] : null);
      }
      s.forEach((m) => {
        o.removeCookie(
          m.domain,
          m.path,
          m.key,
          r
        );
      });
    });
  }
  static deserialize(a, o, i) {
    arguments.length !== 3 && (i = o, o = null), p.validate(p.isFunction(i), i);
    let s;
    if (typeof a == "string") {
      if (s = to(a), s instanceof Error)
        return i(s);
    } else
      s = a;
    const n = new D(o, {
      rejectPublicSuffixes: s.rejectPublicSuffixes,
      looseMode: s.enableLooseMode,
      allowSpecialUseDomain: s.allowSpecialUseDomain,
      prefixSecurity: s.prefixSecurity
    });
    n._importCookies(s, (t) => {
      if (t)
        return i(t);
      i(null, n);
    });
  }
  static deserializeSync(a, o) {
    const i = typeof a == "string" ? JSON.parse(a) : a, s = new D(o, {
      rejectPublicSuffixes: i.rejectPublicSuffixes,
      looseMode: i.enableLooseMode
    });
    if (!s.store.synchronous)
      throw new Error(
        "CookieJar store is not synchronous; use async API instead."
      );
    return s._importCookiesSync(i), s;
  }
}
D.fromJSON = D.deserializeSync;
[
  "_importCookies",
  "clone",
  "getCookies",
  "getCookieString",
  "getSetCookieStrings",
  "removeAllCookies",
  "serialize",
  "setCookie"
].forEach((e) => {
  D.prototype[e] = so(D.prototype[e]);
});
D.deserialize = so(D.deserialize);
function P(e) {
  return function(...a) {
    if (!this.store.synchronous)
      throw new Error(
        "CookieJar store is not synchronous; use async API instead."
      );
    let o, i;
    if (this[e](...a, (s, n) => {
      o = s, i = n;
    }), o)
      throw o;
    return i;
  };
}
var Te = D;
ja.getPublicSuffix;
p.ParameterError;
var ro = {};
Object.defineProperty(ro, "__esModule", { value: !0 });
function Re(e) {
  return e;
}
var Le = ro.wrapper = Re;
const Ue = new Te();
Le && (d.defaults.jar = Ue);
d.defaults.withCredentials = !0;
class Ta {
  constructor(a = mo) {
    B(this, "basePath"), B(this, "baseOptions"), B(this, "formDataCtor"), this.basePath = a.basePath, this.baseOptions = a.baseOptions, this.formDataCtor = a.formDataCtor;
  }
  /**
   * Check if the given MIME is a JSON MIME.
   * JSON MIME examples:
   *   application/json
   *   application/json; charset=UTF8
   *   APPLICATION/JSON
   *   application/vnd.company+json
   * @param mime - MIME (Multipurpose Internet Mail Extensions)
   * @return True if the given MIME is JSON, false otherwise.
   */
  isJsonMime(a) {
    const o = new RegExp("^(application/json|[^;/ 	]+/[^;/ 	]+[+]json)[ 	]*(;.*)?$", "i");
    return a !== null && (o.test(a) || a.toLowerCase() === "application/json-patch+json");
  }
}
const mo = typeof window == "object" && window.self === self && self ? new Ta({ basePath: "" }) : new Ta({ basePath: "https://learning.cultofbits.com" });
class Q {
  constructor(a, o = d) {
    B(this, "configuration"), this.axios = o, this.configuration = a ?? mo;
  }
}
class Ne extends Error {
  constructor(a, o) {
    super(o), B(this, "name", "RequiredError"), this.field = a;
  }
}
const k = "https://example.com", w = function(e, a, o) {
  if (o == null)
    throw new Ne(
      a,
      `Required parameter ${a} was null or undefined when calling ${e}.`
    );
}, g = function(e, ...a) {
  const o = new URLSearchParams(e.search);
  for (const i of a)
    for (const s in i)
      if (Array.isArray(i[s])) {
        o.delete(s);
        for (const n of i[s])
          o.append(s, n);
      } else
        o.set(s, i[s]);
  e.search = o.toString();
}, x = function(e, a, o) {
  const i = typeof e != "string";
  return (i && o && o.isJsonMime ? o.isJsonMime(a.headers["Content-Type"]) : i) ? JSON.stringify(e !== void 0 ? e : {}) : e || "";
}, j = function(e) {
  return e.pathname + e.search + e.hash;
}, b = function(e, a, o) {
  return (i = a) => {
    const s = { ...e.options, url: o.basePath + e.url };
    return i.request(s);
  };
}, _e = function(e) {
  return {
    /**
     * 
     * @summary Clones an existing definition
     * @param {number} definitionId The definition identifier
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    cloneDefinition: async (a, o = {}) => {
      w("cloneDefinition", "definitionId", a);
      const i = "/recordm/recordm/definitions/{definitionId}/clone".replace("{definitionId}", encodeURIComponent(String(a))), s = new URL(i, k);
      let n;
      e && (n = e.baseOptions);
      const t = { method: "POST", ...n, ...o }, r = {};
      g(s, {});
      let u = n && n.headers ? n.headers : {};
      return t.headers = { ...r, ...u, ...o.headers }, {
        url: j(s),
        options: t
      };
    },
    /**
     * 
     * @summary Delete an existing definition
     * @param {number} definitionId The definition identifier
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteDefinition: async (a, o = {}) => {
      w("deleteDefinition", "definitionId", a);
      const i = "/recordm/recordm/definitions/{definitionId}".replace("{definitionId}", encodeURIComponent(String(a))), s = new URL(i, k);
      let n;
      e && (n = e.baseOptions);
      const t = { method: "DELETE", ...n, ...o }, r = {};
      g(s, {});
      let u = n && n.headers ? n.headers : {};
      return t.headers = { ...r, ...u, ...o.headers }, {
        url: j(s),
        options: t
      };
    },
    /**
     * 
     * @summary Download a definition
     * @param {number} definitionId The definition identifier
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    exportDefinition: async (a, o = {}) => {
      w("exportDefinition", "definitionId", a);
      const i = "/recordm/recordm/definitions/{definitionId}/export".replace("{definitionId}", encodeURIComponent(String(a))), s = new URL(i, k);
      let n;
      e && (n = e.baseOptions);
      const t = { method: "GET", ...n, ...o }, r = {};
      g(s, {});
      let u = n && n.headers ? n.headers : {};
      return t.headers = { ...r, ...u, ...o.headers }, {
        url: j(s),
        options: t
      };
    },
    /**
     * Retrieves a sinple representation of all enabled definitions by default.  To include disabled definitions set the query parameter `includeDisbaled` to true.  The result will not include the field definitions.
     * @summary Retrieves all definitions
     * @param {boolean} [includeDisabled] If it should include inactive definitions
     * @param {string} [name] Restrict results to definitons with name matching
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getAllDefinitions: async (a, o, i = {}) => {
      const s = "/recordm/recordm/definitions", n = new URL(s, k);
      let t;
      e && (t = e.baseOptions);
      const r = { method: "GET", ...t, ...i }, m = {}, u = {};
      a !== void 0 && (u.includeDisabled = a), o !== void 0 && (u.name = o), g(n, u);
      let c = t && t.headers ? t.headers : {};
      return r.headers = { ...m, ...c, ...i.headers }, {
        url: j(n),
        options: r
      };
    },
    /**
     * Retrieves the full details about a specific definition. When setting export to true it will return a clone of the definition.
     * @summary Retrieves a specific definition including its fields.
     * @param {number} definitionId The definition identifier
     * @param {string} [ifNoneMatch] If a value is given, it will be compared to the current version of the definition and if they are equal, a 304 will be returned.
     * @param {boolean} [_export] When true it will return a clone of the definition
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getDefinition: async (a, o, i, s = {}) => {
      w("getDefinition", "definitionId", a);
      const n = "/recordm/recordm/definitions/{definitionId}".replace("{definitionId}", encodeURIComponent(String(a))), t = new URL(n, k);
      let r;
      e && (r = e.baseOptions);
      const m = { method: "GET", ...r, ...s }, u = {}, c = {};
      i !== void 0 && (c.export = i), o != null && (u["If-None-Match"] = String(o)), g(t, c);
      let l = r && r.headers ? r.headers : {};
      return m.headers = { ...u, ...l, ...s.headers }, {
        url: j(t),
        options: m
      };
    },
    /**
     * Retrieves the full details about a definition.
     * @summary Retrieves a specific that match a provided name.
     * @param {string} name The definition name
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getDefinitionByName: async (a, o = {}) => {
      w("getDefinitionByName", "name", a);
      const i = "/recordm/recordm/definitions/name/{name}".replace("{name}", encodeURIComponent(String(a))), s = new URL(i, k);
      let n;
      e && (n = e.baseOptions);
      const t = { method: "GET", ...n, ...o }, r = {};
      g(s, {});
      let u = n && n.headers ? n.headers : {};
      return t.headers = { ...r, ...u, ...o.headers }, {
        url: j(s),
        options: t
      };
    },
    /**
     * 
     * @summary Create a new definition
     * @param {CreateDefinitionRequest} [createDefinitionRequest] The new definition payload
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    saveDefinition: async (a, o = {}) => {
      const i = "/recordm/recordm/definitions", s = new URL(i, k);
      let n;
      e && (n = e.baseOptions);
      const t = { method: "POST", ...n, ...o }, r = {}, m = {};
      r["Content-Type"] = "application/json", g(s, m);
      let u = n && n.headers ? n.headers : {};
      return t.headers = { ...r, ...u, ...o.headers }, t.data = x(a, t, e), {
        url: j(s),
        options: t
      };
    },
    /**
     * 
     * @summary Update an existing definition
     * @param {number} definitionId The definition identifier
     * @param {UpdateDefinitionRequest} [updateDefinitionRequest] The definition object with the updated details
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateDefinition: async (a, o, i = {}) => {
      w("updateDefinition", "definitionId", a);
      const s = "/recordm/recordm/definitions/{definitionId}".replace("{definitionId}", encodeURIComponent(String(a))), n = new URL(s, k);
      let t;
      e && (t = e.baseOptions);
      const r = { method: "PUT", ...t, ...i }, m = {}, u = {};
      m["Content-Type"] = "application/json", g(n, u);
      let c = t && t.headers ? t.headers : {};
      return r.headers = { ...m, ...c, ...i.headers }, r.data = x(o, r, e), {
        url: j(n),
        options: r
      };
    },
    /**
     * 
     * @summary Change the state of an existing definition
     * @param {number} definitionId The definition identifier
     * @param {string} state The new state
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateDefinitionState: async (a, o, i = {}) => {
      w("updateDefinitionState", "definitionId", a), w("updateDefinitionState", "state", o);
      const s = "/recordm/recordm/definitions/{definitionId}/state/{state}".replace("{definitionId}", encodeURIComponent(String(a))).replace("{state}", encodeURIComponent(String(o))), n = new URL(s, k);
      let t;
      e && (t = e.baseOptions);
      const r = { method: "PUT", ...t, ...i }, m = {};
      g(n, {});
      let c = t && t.headers ? t.headers : {};
      return r.headers = { ...m, ...c, ...i.headers }, {
        url: j(n),
        options: r
      };
    }
  };
}, V = function(e) {
  const a = _e(e);
  return {
    /**
     * 
     * @summary Clones an existing definition
     * @param {number} definitionId The definition identifier
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async cloneDefinition(o, i) {
      const s = await a.cloneDefinition(o, i);
      return b(s, d, e);
    },
    /**
     * 
     * @summary Delete an existing definition
     * @param {number} definitionId The definition identifier
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async deleteDefinition(o, i) {
      const s = await a.deleteDefinition(o, i);
      return b(s, d, e);
    },
    /**
     * 
     * @summary Download a definition
     * @param {number} definitionId The definition identifier
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async exportDefinition(o, i) {
      const s = await a.exportDefinition(o, i);
      return b(s, d, e);
    },
    /**
     * Retrieves a sinple representation of all enabled definitions by default.  To include disabled definitions set the query parameter `includeDisbaled` to true.  The result will not include the field definitions.
     * @summary Retrieves all definitions
     * @param {boolean} [includeDisabled] If it should include inactive definitions
     * @param {string} [name] Restrict results to definitons with name matching
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getAllDefinitions(o, i, s) {
      const n = await a.getAllDefinitions(o, i, s);
      return b(n, d, e);
    },
    /**
     * Retrieves the full details about a specific definition. When setting export to true it will return a clone of the definition.
     * @summary Retrieves a specific definition including its fields.
     * @param {number} definitionId The definition identifier
     * @param {string} [ifNoneMatch] If a value is given, it will be compared to the current version of the definition and if they are equal, a 304 will be returned.
     * @param {boolean} [_export] When true it will return a clone of the definition
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getDefinition(o, i, s, n) {
      const t = await a.getDefinition(o, i, s, n);
      return b(t, d, e);
    },
    /**
     * Retrieves the full details about a definition.
     * @summary Retrieves a specific that match a provided name.
     * @param {string} name The definition name
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getDefinitionByName(o, i) {
      const s = await a.getDefinitionByName(o, i);
      return b(s, d, e);
    },
    /**
     * 
     * @summary Create a new definition
     * @param {CreateDefinitionRequest} [createDefinitionRequest] The new definition payload
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async saveDefinition(o, i) {
      const s = await a.saveDefinition(o, i);
      return b(s, d, e);
    },
    /**
     * 
     * @summary Update an existing definition
     * @param {number} definitionId The definition identifier
     * @param {UpdateDefinitionRequest} [updateDefinitionRequest] The definition object with the updated details
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async updateDefinition(o, i, s) {
      const n = await a.updateDefinition(o, i, s);
      return b(n, d, e);
    },
    /**
     * 
     * @summary Change the state of an existing definition
     * @param {number} definitionId The definition identifier
     * @param {string} state The new state
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async updateDefinitionState(o, i, s) {
      const n = await a.updateDefinitionState(o, i, s);
      return b(n, d, e);
    }
  };
};
class Ge extends Q {
  /**
   * 
   * @summary Clones an existing definition
   * @param {number} definitionId The definition identifier
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DefinitionsApi
   */
  cloneDefinition(a, o) {
    return V(this.configuration).cloneDefinition(a, o).then((i) => i(this.axios));
  }
  /**
   * 
   * @summary Delete an existing definition
   * @param {number} definitionId The definition identifier
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DefinitionsApi
   */
  deleteDefinition(a, o) {
    return V(this.configuration).deleteDefinition(a, o).then((i) => i(this.axios));
  }
  /**
   * 
   * @summary Download a definition
   * @param {number} definitionId The definition identifier
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DefinitionsApi
   */
  exportDefinition(a, o) {
    return V(this.configuration).exportDefinition(a, o).then((i) => i(this.axios));
  }
  /**
   * Retrieves a sinple representation of all enabled definitions by default.  To include disabled definitions set the query parameter `includeDisbaled` to true.  The result will not include the field definitions.
   * @summary Retrieves all definitions
   * @param {boolean} [includeDisabled] If it should include inactive definitions
   * @param {string} [name] Restrict results to definitons with name matching
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DefinitionsApi
   */
  getAllDefinitions(a, o, i) {
    return V(this.configuration).getAllDefinitions(a, o, i).then((s) => s(this.axios));
  }
  /**
   * Retrieves the full details about a specific definition. When setting export to true it will return a clone of the definition.
   * @summary Retrieves a specific definition including its fields.
   * @param {number} definitionId The definition identifier
   * @param {string} [ifNoneMatch] If a value is given, it will be compared to the current version of the definition and if they are equal, a 304 will be returned.
   * @param {boolean} [_export] When true it will return a clone of the definition
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DefinitionsApi
   */
  getDefinition(a, o, i, s) {
    return V(this.configuration).getDefinition(a, o, i, s).then((n) => n(this.axios));
  }
  /**
   * Retrieves the full details about a definition.
   * @summary Retrieves a specific that match a provided name.
   * @param {string} name The definition name
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DefinitionsApi
   */
  getDefinitionByName(a, o) {
    return V(this.configuration).getDefinitionByName(a, o).then((i) => i(this.axios));
  }
  /**
   * 
   * @summary Create a new definition
   * @param {CreateDefinitionRequest} [createDefinitionRequest] The new definition payload
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DefinitionsApi
   */
  saveDefinition(a, o) {
    return V(this.configuration).saveDefinition(a, o).then((i) => i(this.axios));
  }
  /**
   * 
   * @summary Update an existing definition
   * @param {number} definitionId The definition identifier
   * @param {UpdateDefinitionRequest} [updateDefinitionRequest] The definition object with the updated details
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DefinitionsApi
   */
  updateDefinition(a, o, i) {
    return V(this.configuration).updateDefinition(a, o, i).then((s) => s(this.axios));
  }
  /**
   * 
   * @summary Change the state of an existing definition
   * @param {number} definitionId The definition identifier
   * @param {string} state The new state
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DefinitionsApi
   */
  updateDefinitionState(a, o, i) {
    return V(this.configuration).updateDefinitionState(a, o, i).then((s) => s(this.axios));
  }
}
const Fe = function(e) {
  return {
    /**
     * The response will return the domain with its definitions but not with it\'s field definitions.
     * @summary Add a new definition to an existing domain
     * @param {number} domainId The domain identifier
     * @param {number} definitionId The definition identifier
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    addDefinitionToDomain: async (a, o, i = {}) => {
      w("addDefinitionToDomain", "domainId", a), w("addDefinitionToDomain", "definitionId", o);
      const s = "/recordm/recordm/domains/{domainId}/definitions/{definitionId}".replace("{domainId}", encodeURIComponent(String(a))).replace("{definitionId}", encodeURIComponent(String(o))), n = new URL(s, k);
      let t;
      e && (t = e.baseOptions);
      const r = { method: "PUT", ...t, ...i }, m = {};
      g(n, {});
      let c = t && t.headers ? t.headers : {};
      return r.headers = { ...m, ...c, ...i.headers }, {
        url: j(n),
        options: r
      };
    },
    /**
     * 
     * @summary Creates a new domain
     * @param {CreateDomainRequest} [createDomainRequest] The new definition details
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    addDomain: async (a, o = {}) => {
      const i = "/recordm/recordm/domains", s = new URL(i, k);
      let n;
      e && (n = e.baseOptions);
      const t = { method: "POST", ...n, ...o }, r = {}, m = {};
      r["Content-Type"] = "application/json", g(s, m);
      let u = n && n.headers ? n.headers : {};
      return t.headers = { ...r, ...u, ...o.headers }, t.data = x(a, t, e), {
        url: j(s),
        options: t
      };
    },
    /**
     * 
     * @summary Delete an existing domain
     * @param {number} domainId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteDomain: async (a, o = {}) => {
      w("deleteDomain", "domainId", a);
      const i = "/recordm/recordm/domains/{domainId}".replace("{domainId}", encodeURIComponent(String(a))), s = new URL(i, k);
      let n;
      e && (n = e.baseOptions);
      const t = { method: "DELETE", ...n, ...o }, r = {};
      g(s, {});
      let u = n && n.headers ? n.headers : {};
      return t.headers = { ...r, ...u, ...o.headers }, {
        url: j(s),
        options: t
      };
    },
    /**
     * It will include all definitions belonging to this domain but the definitions will not include it\'s field definitions.
     * @summary Find a domain by name
     * @param {string} name The domain name
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    findDomainByName: async (a, o = {}) => {
      w("findDomainByName", "name", a);
      const i = "/recordm/recordm/domains/name/{name}".replace("{name}", encodeURIComponent(String(a))), s = new URL(i, k);
      let n;
      e && (n = e.baseOptions);
      const t = { method: "GET", ...n, ...o }, r = {};
      g(s, {});
      let u = n && n.headers ? n.headers : {};
      return t.headers = { ...r, ...u, ...o.headers }, {
        url: j(s),
        options: t
      };
    },
    /**
     * It will include all definitions belonging to this domain but the definitions will not include it\'s field definitions.
     * @summary Retrieves all domains
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getAllDomains: async (a = {}) => {
      const o = "/recordm/recordm/domains", i = new URL(o, k);
      let s;
      e && (s = e.baseOptions);
      const n = { method: "GET", ...s, ...a }, t = {};
      g(i, {});
      let m = s && s.headers ? s.headers : {};
      return n.headers = { ...t, ...m, ...a.headers }, {
        url: j(i),
        options: n
      };
    },
    /**
     * It will include all definitions belonging to this domain but the definitions will not include it\'s field definitions.
     * @summary Retrieve a domain by it\'s identifier
     * @param {number} domainId The domain identifier
     * @param {string} [ifNoneMatch] If a value is given, it will be compared to the current version of the domain and if they are equal, a 304 will be returned.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getDomain: async (a, o, i = {}) => {
      w("getDomain", "domainId", a);
      const s = "/recordm/recordm/domains/{domainId}".replace("{domainId}", encodeURIComponent(String(a))), n = new URL(s, k);
      let t;
      e && (t = e.baseOptions);
      const r = { method: "GET", ...t, ...i }, m = {}, u = {};
      o != null && (m["If-None-Match"] = String(o)), g(n, u);
      let c = t && t.headers ? t.headers : {};
      return r.headers = { ...m, ...c, ...i.headers }, {
        url: j(n),
        options: r
      };
    },
    /**
     * The response will return the domain with its definitions but not with it\'s field definitions.
     * @summary Remove a definition from an existing domain
     * @param {number} domainId The domain identifier
     * @param {number} definitionId The definition identifier
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    removeDefinitionFromDomain: async (a, o, i = {}) => {
      w("removeDefinitionFromDomain", "domainId", a), w("removeDefinitionFromDomain", "definitionId", o);
      const s = "/recordm/recordm/domains/{domainId}/definitions/{definitionId}".replace("{domainId}", encodeURIComponent(String(a))).replace("{definitionId}", encodeURIComponent(String(o))), n = new URL(s, k);
      let t;
      e && (t = e.baseOptions);
      const r = { method: "DELETE", ...t, ...i }, m = {};
      g(n, {});
      let c = t && t.headers ? t.headers : {};
      return r.headers = { ...m, ...c, ...i.headers }, {
        url: j(n),
        options: r
      };
    },
    /**
     * 
     * @summary Update an existing domain
     * @param {number} domainId The domain identifier
     * @param {UpdateDomainRequest} [updateDomainRequest] The new definition details
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateDomain: async (a, o, i = {}) => {
      w("updateDomain", "domainId", a);
      const s = "/recordm/recordm/domains/{domainId}".replace("{domainId}", encodeURIComponent(String(a))), n = new URL(s, k);
      let t;
      e && (t = e.baseOptions);
      const r = { method: "PUT", ...t, ...i }, m = {}, u = {};
      m["Content-Type"] = "application/json", g(n, u);
      let c = t && t.headers ? t.headers : {};
      return r.headers = { ...m, ...c, ...i.headers }, r.data = x(o, r, e), {
        url: j(n),
        options: r
      };
    }
  };
}, T = function(e) {
  const a = Fe(e);
  return {
    /**
     * The response will return the domain with its definitions but not with it\'s field definitions.
     * @summary Add a new definition to an existing domain
     * @param {number} domainId The domain identifier
     * @param {number} definitionId The definition identifier
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async addDefinitionToDomain(o, i, s) {
      const n = await a.addDefinitionToDomain(o, i, s);
      return b(n, d, e);
    },
    /**
     * 
     * @summary Creates a new domain
     * @param {CreateDomainRequest} [createDomainRequest] The new definition details
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async addDomain(o, i) {
      const s = await a.addDomain(o, i);
      return b(s, d, e);
    },
    /**
     * 
     * @summary Delete an existing domain
     * @param {number} domainId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async deleteDomain(o, i) {
      const s = await a.deleteDomain(o, i);
      return b(s, d, e);
    },
    /**
     * It will include all definitions belonging to this domain but the definitions will not include it\'s field definitions.
     * @summary Find a domain by name
     * @param {string} name The domain name
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async findDomainByName(o, i) {
      const s = await a.findDomainByName(o, i);
      return b(s, d, e);
    },
    /**
     * It will include all definitions belonging to this domain but the definitions will not include it\'s field definitions.
     * @summary Retrieves all domains
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getAllDomains(o) {
      const i = await a.getAllDomains(o);
      return b(i, d, e);
    },
    /**
     * It will include all definitions belonging to this domain but the definitions will not include it\'s field definitions.
     * @summary Retrieve a domain by it\'s identifier
     * @param {number} domainId The domain identifier
     * @param {string} [ifNoneMatch] If a value is given, it will be compared to the current version of the domain and if they are equal, a 304 will be returned.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getDomain(o, i, s) {
      const n = await a.getDomain(o, i, s);
      return b(n, d, e);
    },
    /**
     * The response will return the domain with its definitions but not with it\'s field definitions.
     * @summary Remove a definition from an existing domain
     * @param {number} domainId The domain identifier
     * @param {number} definitionId The definition identifier
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async removeDefinitionFromDomain(o, i, s) {
      const n = await a.removeDefinitionFromDomain(o, i, s);
      return b(n, d, e);
    },
    /**
     * 
     * @summary Update an existing domain
     * @param {number} domainId The domain identifier
     * @param {UpdateDomainRequest} [updateDomainRequest] The new definition details
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async updateDomain(o, i, s) {
      const n = await a.updateDomain(o, i, s);
      return b(n, d, e);
    }
  };
};
class Je extends Q {
  /**
   * The response will return the domain with its definitions but not with it\'s field definitions.
   * @summary Add a new definition to an existing domain
   * @param {number} domainId The domain identifier
   * @param {number} definitionId The definition identifier
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DomainsApi
   */
  addDefinitionToDomain(a, o, i) {
    return T(this.configuration).addDefinitionToDomain(a, o, i).then((s) => s(this.axios));
  }
  /**
   * 
   * @summary Creates a new domain
   * @param {CreateDomainRequest} [createDomainRequest] The new definition details
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DomainsApi
   */
  addDomain(a, o) {
    return T(this.configuration).addDomain(a, o).then((i) => i(this.axios));
  }
  /**
   * 
   * @summary Delete an existing domain
   * @param {number} domainId 
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DomainsApi
   */
  deleteDomain(a, o) {
    return T(this.configuration).deleteDomain(a, o).then((i) => i(this.axios));
  }
  /**
   * It will include all definitions belonging to this domain but the definitions will not include it\'s field definitions.
   * @summary Find a domain by name
   * @param {string} name The domain name
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DomainsApi
   */
  findDomainByName(a, o) {
    return T(this.configuration).findDomainByName(a, o).then((i) => i(this.axios));
  }
  /**
   * It will include all definitions belonging to this domain but the definitions will not include it\'s field definitions.
   * @summary Retrieves all domains
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DomainsApi
   */
  getAllDomains(a) {
    return T(this.configuration).getAllDomains(a).then((o) => o(this.axios));
  }
  /**
   * It will include all definitions belonging to this domain but the definitions will not include it\'s field definitions.
   * @summary Retrieve a domain by it\'s identifier
   * @param {number} domainId The domain identifier
   * @param {string} [ifNoneMatch] If a value is given, it will be compared to the current version of the domain and if they are equal, a 304 will be returned.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DomainsApi
   */
  getDomain(a, o, i) {
    return T(this.configuration).getDomain(a, o, i).then((s) => s(this.axios));
  }
  /**
   * The response will return the domain with its definitions but not with it\'s field definitions.
   * @summary Remove a definition from an existing domain
   * @param {number} domainId The domain identifier
   * @param {number} definitionId The definition identifier
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DomainsApi
   */
  removeDefinitionFromDomain(a, o, i) {
    return T(this.configuration).removeDefinitionFromDomain(a, o, i).then((s) => s(this.axios));
  }
  /**
   * 
   * @summary Update an existing domain
   * @param {number} domainId The domain identifier
   * @param {UpdateDomainRequest} [updateDomainRequest] The new definition details
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DomainsApi
   */
  updateDomain(a, o, i) {
    return T(this.configuration).updateDomain(a, o, i).then((s) => s(this.axios));
  }
}
const qe = function(e) {
  return {
    /**
     * Adds a new instance represented by the passed Object.
     * @summary Add an instance
     * @param {Instance} instance the instance to add
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    addInstance: async (a, o = {}) => {
      w("addInstance", "instance", a);
      const i = "/recordm/recordm/instances", s = new URL(i, k);
      let n;
      e && (n = e.baseOptions);
      const t = { method: "POST", ...n, ...o }, r = {}, m = {};
      r["Content-Type"] = "application/json", g(s, m);
      let u = n && n.headers ? n.headers : {};
      return t.headers = { ...r, ...u, ...o.headers }, t.data = x(a, t, e), {
        url: j(s),
        options: t
      };
    },
    /**
     * Adds a LogM log entry to an instance.
     * @summary Add log to instance
     * @param {number} id The instance id
     * @param {string} [body] The log message
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    addLogMessageToInstance: async (a, o, i = {}) => {
      w("addLogMessageToInstance", "id", a);
      const s = "/recordm/recordm/instances/{id}/log".replace("{id}", encodeURIComponent(String(a))), n = new URL(s, k);
      let t;
      e && (t = e.baseOptions);
      const r = { method: "POST", ...t, ...i }, m = {}, u = {};
      m["Content-Type"] = "application/json", g(n, u);
      let c = t && t.headers ? t.headers : {};
      return r.headers = { ...m, ...c, ...i.headers }, r.data = x(o, r, e), {
        url: j(n),
        options: r
      };
    },
    /**
     * Deletes an instance.
     * @summary Delete an instance
     * @param {number} id The id of the instance to delete
     * @param {boolean} [ignoreRefs] If ignoreRefs is true, then the instance will be deleted even if other instances are referencing it. Otherwise an error will be returned if there are instances with a reference to it. 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteInstance: async (a, o, i = {}) => {
      w("deleteInstance", "id", a);
      const s = "/recordm/recordm/instances/{id}".replace("{id}", encodeURIComponent(String(a))), n = new URL(s, k);
      let t;
      e && (t = e.baseOptions);
      const r = { method: "DELETE", ...t, ...i }, m = {}, u = {};
      o !== void 0 && (u.ignoreRefs = o), g(n, u);
      let c = t && t.headers ? t.headers : {};
      return r.headers = { ...m, ...c, ...i.headers }, {
        url: j(n),
        options: r
      };
    },
    /**
     * Download a file that is attached to a $file field
     * @summary Download file from field in instance
     * @param {string} id The id of the instance
     * @param {string} fieldDefinitionId The id of the field definition of the $file field
     * @param {string} filename The filename of the file to download.
     * @param {string} [disposition] The Content-Disposition to use when downloading the file. Only useful when used as link in a webpage, to control if it should be downloaded or shown inline.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    downloadFile: async (a, o, i, s, n = {}) => {
      w("downloadFile", "id", a), w("downloadFile", "fieldDefinitionId", o), w("downloadFile", "filename", i);
      const t = "/recordm/recordm/instances/{id}/files/{fieldDefinitionId}/{filename}".replace("{id}", encodeURIComponent(String(a))).replace("{fieldDefinitionId}", encodeURIComponent(String(o))).replace("{filename}", encodeURIComponent(String(i))), r = new URL(t, k);
      let m;
      e && (m = e.baseOptions);
      const u = { method: "GET", ...m, ...n }, c = {}, l = {};
      s !== void 0 && (l.disposition = s), g(r, l);
      let h = m && m.headers ? m.headers : {};
      return u.headers = { ...c, ...h, ...n.headers }, {
        url: j(r),
        options: u
      };
    },
    /**
     * Obtains a representation of an instance.
     * @summary Get an instance
     * @param {number} id 
     * @param {string} [ifNoneMatch] If a value is given, it will be compared to the current version of the instance and if they are equal, a 304 will be returned.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getInstance: async (a, o, i = {}) => {
      w("getInstance", "id", a);
      const s = "/recordm/recordm/instances/{id}".replace("{id}", encodeURIComponent(String(a))), n = new URL(s, k);
      let t;
      e && (t = e.baseOptions);
      const r = { method: "GET", ...t, ...i }, m = {}, u = {};
      o != null && (m["If-None-Match"] = String(o)), g(n, u);
      let c = t && t.headers ? t.headers : {};
      return r.headers = { ...m, ...c, ...i.headers }, {
        url: j(n),
        options: r
      };
    },
    /**
     * Obtains a representation of an instance with no values. Useful for using as a starting point for creating a new instance.
     * @summary Get a new empty instance
     * @param {number} definitionId The id of the definition of which we want the empty instance.
     * @param {boolean} [withDefaults] If true, all the fields with defined default values will have them already filled. If false, all the fields will have empty values.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getNewInstance: async (a, o, i = {}) => {
      w("getNewInstance", "definitionId", a);
      const s = "/recordm/recordm/instances/empty/definition/{definitionId}".replace("{definitionId}", encodeURIComponent(String(a))), n = new URL(s, k);
      let t;
      e && (t = e.baseOptions);
      const r = { method: "GET", ...t, ...i }, m = {}, u = {};
      o !== void 0 && (u.withDefaults = o), g(n, u);
      let c = t && t.headers ? t.headers : {};
      return r.headers = { ...m, ...c, ...i.headers }, {
        url: j(n),
        options: r
      };
    },
    /**
     * Updates an instance with the complete representation passed.
     * @summary Update an instance
     * @param {number} id The id of the instance to update
     * @param {Instance} instance the updated instance
     * @param {boolean} [acceptOutdated] Should outdated $extRef fields be accepted?
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateInstance: async (a, o, i, s = {}) => {
      w("updateInstance", "id", a), w("updateInstance", "instance", o);
      const n = "/recordm/recordm/instances/{id}".replace("{id}", encodeURIComponent(String(a))), t = new URL(n, k);
      let r;
      e && (r = e.baseOptions);
      const m = { method: "PUT", ...r, ...s }, u = {}, c = {};
      i !== void 0 && (c.acceptOutdated = i), u["Content-Type"] = "application/json", g(t, c);
      let l = r && r.headers ? r.headers : {};
      return m.headers = { ...u, ...l, ...s.headers }, m.data = x(o, m, e), {
        url: j(t),
        options: m
      };
    },
    /**
     * Upload a file to be used as a value for a $file field
     * @summary Upload file to field in instance
     * @param {string} id When uploading to an existing instance, it\&#39;s the id of the instance. When uploading for an instance that doesn\&#39;t yet exist, it should be an UUID that matches the one the instance will have on creation. This way the already uploaded files will be moved to the final destination.
     * @param {string} fieldDefinitionId The id of the field definition of the $file field
     * @param {any} [file] The file to upload.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    uploadFile: async (a, o, i, s = {}) => {
      w("uploadFile", "id", a), w("uploadFile", "fieldDefinitionId", o);
      const n = "/recordm/recordm/instances/{id}/files/{fieldDefinitionId}".replace("{id}", encodeURIComponent(String(a))).replace("{fieldDefinitionId}", encodeURIComponent(String(o))), t = new URL(n, k);
      let r;
      e && (r = e.baseOptions);
      const m = { method: "POST", ...r, ...s }, u = {}, c = {}, l = new (e && e.formDataCtor || FormData)();
      i !== void 0 && l.append("file", new Blob([JSON.stringify(i)], { type: "application/json" })), u["Content-Type"] = "multipart/form-data", g(t, c);
      let h = r && r.headers ? r.headers : {};
      return m.headers = { ...u, ...h, ...s.headers }, m.data = l, {
        url: j(t),
        options: m
      };
    }
  };
}, R = function(e) {
  const a = qe(e);
  return {
    /**
     * Adds a new instance represented by the passed Object.
     * @summary Add an instance
     * @param {Instance} instance the instance to add
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async addInstance(o, i) {
      const s = await a.addInstance(o, i);
      return b(s, d, e);
    },
    /**
     * Adds a LogM log entry to an instance.
     * @summary Add log to instance
     * @param {number} id The instance id
     * @param {string} [body] The log message
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async addLogMessageToInstance(o, i, s) {
      const n = await a.addLogMessageToInstance(o, i, s);
      return b(n, d, e);
    },
    /**
     * Deletes an instance.
     * @summary Delete an instance
     * @param {number} id The id of the instance to delete
     * @param {boolean} [ignoreRefs] If ignoreRefs is true, then the instance will be deleted even if other instances are referencing it. Otherwise an error will be returned if there are instances with a reference to it. 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async deleteInstance(o, i, s) {
      const n = await a.deleteInstance(o, i, s);
      return b(n, d, e);
    },
    /**
     * Download a file that is attached to a $file field
     * @summary Download file from field in instance
     * @param {string} id The id of the instance
     * @param {string} fieldDefinitionId The id of the field definition of the $file field
     * @param {string} filename The filename of the file to download.
     * @param {string} [disposition] The Content-Disposition to use when downloading the file. Only useful when used as link in a webpage, to control if it should be downloaded or shown inline.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async downloadFile(o, i, s, n, t) {
      const r = await a.downloadFile(o, i, s, n, t);
      return b(r, d, e);
    },
    /**
     * Obtains a representation of an instance.
     * @summary Get an instance
     * @param {number} id 
     * @param {string} [ifNoneMatch] If a value is given, it will be compared to the current version of the instance and if they are equal, a 304 will be returned.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getInstance(o, i, s) {
      const n = await a.getInstance(o, i, s);
      return b(n, d, e);
    },
    /**
     * Obtains a representation of an instance with no values. Useful for using as a starting point for creating a new instance.
     * @summary Get a new empty instance
     * @param {number} definitionId The id of the definition of which we want the empty instance.
     * @param {boolean} [withDefaults] If true, all the fields with defined default values will have them already filled. If false, all the fields will have empty values.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getNewInstance(o, i, s) {
      const n = await a.getNewInstance(o, i, s);
      return b(n, d, e);
    },
    /**
     * Updates an instance with the complete representation passed.
     * @summary Update an instance
     * @param {number} id The id of the instance to update
     * @param {Instance} instance the updated instance
     * @param {boolean} [acceptOutdated] Should outdated $extRef fields be accepted?
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async updateInstance(o, i, s, n) {
      const t = await a.updateInstance(o, i, s, n);
      return b(t, d, e);
    },
    /**
     * Upload a file to be used as a value for a $file field
     * @summary Upload file to field in instance
     * @param {string} id When uploading to an existing instance, it\&#39;s the id of the instance. When uploading for an instance that doesn\&#39;t yet exist, it should be an UUID that matches the one the instance will have on creation. This way the already uploaded files will be moved to the final destination.
     * @param {string} fieldDefinitionId The id of the field definition of the $file field
     * @param {any} [file] The file to upload.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async uploadFile(o, i, s, n) {
      const t = await a.uploadFile(o, i, s, n);
      return b(t, d, e);
    }
  };
};
class Be extends Q {
  /**
   * Adds a new instance represented by the passed Object.
   * @summary Add an instance
   * @param {Instance} instance the instance to add
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof InstancesApi
   */
  addInstance(a, o) {
    return R(this.configuration).addInstance(a, o).then((i) => i(this.axios));
  }
  /**
   * Adds a LogM log entry to an instance.
   * @summary Add log to instance
   * @param {number} id The instance id
   * @param {string} [body] The log message
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof InstancesApi
   */
  addLogMessageToInstance(a, o, i) {
    return R(this.configuration).addLogMessageToInstance(a, o, i).then((s) => s(this.axios));
  }
  /**
   * Deletes an instance.
   * @summary Delete an instance
   * @param {number} id The id of the instance to delete
   * @param {boolean} [ignoreRefs] If ignoreRefs is true, then the instance will be deleted even if other instances are referencing it. Otherwise an error will be returned if there are instances with a reference to it. 
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof InstancesApi
   */
  deleteInstance(a, o, i) {
    return R(this.configuration).deleteInstance(a, o, i).then((s) => s(this.axios));
  }
  /**
   * Download a file that is attached to a $file field
   * @summary Download file from field in instance
   * @param {string} id The id of the instance
   * @param {string} fieldDefinitionId The id of the field definition of the $file field
   * @param {string} filename The filename of the file to download.
   * @param {string} [disposition] The Content-Disposition to use when downloading the file. Only useful when used as link in a webpage, to control if it should be downloaded or shown inline.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof InstancesApi
   */
  downloadFile(a, o, i, s, n) {
    return R(this.configuration).downloadFile(a, o, i, s, n).then((t) => t(this.axios));
  }
  /**
   * Obtains a representation of an instance.
   * @summary Get an instance
   * @param {number} id 
   * @param {string} [ifNoneMatch] If a value is given, it will be compared to the current version of the instance and if they are equal, a 304 will be returned.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof InstancesApi
   */
  getInstance(a, o, i) {
    return R(this.configuration).getInstance(a, o, i).then((s) => s(this.axios));
  }
  /**
   * Obtains a representation of an instance with no values. Useful for using as a starting point for creating a new instance.
   * @summary Get a new empty instance
   * @param {number} definitionId The id of the definition of which we want the empty instance.
   * @param {boolean} [withDefaults] If true, all the fields with defined default values will have them already filled. If false, all the fields will have empty values.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof InstancesApi
   */
  getNewInstance(a, o, i) {
    return R(this.configuration).getNewInstance(a, o, i).then((s) => s(this.axios));
  }
  /**
   * Updates an instance with the complete representation passed.
   * @summary Update an instance
   * @param {number} id The id of the instance to update
   * @param {Instance} instance the updated instance
   * @param {boolean} [acceptOutdated] Should outdated $extRef fields be accepted?
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof InstancesApi
   */
  updateInstance(a, o, i, s) {
    return R(this.configuration).updateInstance(a, o, i, s).then((n) => n(this.axios));
  }
  /**
   * Upload a file to be used as a value for a $file field
   * @summary Upload file to field in instance
   * @param {string} id When uploading to an existing instance, it\&#39;s the id of the instance. When uploading for an instance that doesn\&#39;t yet exist, it should be an UUID that matches the one the instance will have on creation. This way the already uploaded files will be moved to the final destination.
   * @param {string} fieldDefinitionId The id of the field definition of the $file field
   * @param {any} [file] The file to upload.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof InstancesApi
   */
  uploadFile(a, o, i, s) {
    return R(this.configuration).uploadFile(a, o, i, s).then((n) => n(this.axios));
  }
}
const $e = function(e) {
  return {
    /**
     * Deletes the instances that match the condition.
     * @summary Deletes one or more instances
     * @param {IntegrationDeleteMessage} [integrationDeleteMessage] A JSON doc of the specified format
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    _delete: async (a, o = {}) => {
      const i = "/recordm/recordm/instances/integration", s = new URL(i, k);
      let n;
      e && (n = e.baseOptions);
      const t = { method: "DELETE", ...n, ...o }, r = {}, m = {};
      r["Content-Type"] = "application/json", g(s, m);
      let u = n && n.headers ? n.headers : {};
      return t.headers = { ...r, ...u, ...o.headers }, t.data = x(a, t, e), {
        url: j(s),
        options: t
      };
    },
    /**
     * Adds a new instance represented by the passed Object.
     * @summary Create an instance
     * @param {IntegrationAddMessage} [integrationAddMessage] A JSON doc of the specified format
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    add: async (a, o = {}) => {
      const i = "/recordm/recordm/instances/integration", s = new URL(i, k);
      let n;
      e && (n = e.baseOptions);
      const t = { method: "POST", ...n, ...o }, r = {}, m = {};
      r["Content-Type"] = "application/json", g(s, m);
      let u = n && n.headers ? n.headers : {};
      return t.headers = { ...r, ...u, ...o.headers }, t.data = x(a, t, e), {
        url: j(s),
        options: t
      };
    },
    /**
     * Updates the matching instances with the passed updates.
     * @summary Update one or more instances
     * @param {IntegrationUpdateMessage} [integrationUpdateMessage] A JSON doc of the specified format
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    update: async (a, o = {}) => {
      const i = "/recordm/recordm/instances/integration", s = new URL(i, k);
      let n;
      e && (n = e.baseOptions);
      const t = { method: "PUT", ...n, ...o }, r = {}, m = {};
      r["Content-Type"] = "application/json", g(s, m);
      let u = n && n.headers ? n.headers : {};
      return t.headers = { ...r, ...u, ...o.headers }, t.data = x(a, t, e), {
        url: j(s),
        options: t
      };
    }
  };
}, aa = function(e) {
  const a = $e(e);
  return {
    /**
     * Deletes the instances that match the condition.
     * @summary Deletes one or more instances
     * @param {IntegrationDeleteMessage} [integrationDeleteMessage] A JSON doc of the specified format
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async _delete(o, i) {
      const s = await a._delete(o, i);
      return b(s, d, e);
    },
    /**
     * Adds a new instance represented by the passed Object.
     * @summary Create an instance
     * @param {IntegrationAddMessage} [integrationAddMessage] A JSON doc of the specified format
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async add(o, i) {
      const s = await a.add(o, i);
      return b(s, d, e);
    },
    /**
     * Updates the matching instances with the passed updates.
     * @summary Update one or more instances
     * @param {IntegrationUpdateMessage} [integrationUpdateMessage] A JSON doc of the specified format
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async update(o, i) {
      const s = await a.update(o, i);
      return b(s, d, e);
    }
  };
};
class We extends Q {
  /**
   * Deletes the instances that match the condition.
   * @summary Deletes one or more instances
   * @param {IntegrationDeleteMessage} [integrationDeleteMessage] A JSON doc of the specified format
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof IntegrationApi
   */
  _delete(a, o) {
    return aa(this.configuration)._delete(a, o).then((i) => i(this.axios));
  }
  /**
   * Adds a new instance represented by the passed Object.
   * @summary Create an instance
   * @param {IntegrationAddMessage} [integrationAddMessage] A JSON doc of the specified format
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof IntegrationApi
   */
  add(a, o) {
    return aa(this.configuration).add(a, o).then((i) => i(this.axios));
  }
  /**
   * Updates the matching instances with the passed updates.
   * @summary Update one or more instances
   * @param {IntegrationUpdateMessage} [integrationUpdateMessage] A JSON doc of the specified format
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof IntegrationApi
   */
  update(a, o) {
    return aa(this.configuration).update(a, o).then((i) => i(this.axios));
  }
}
const Me = function(e) {
  return {
    /**
     * The preferred endpoint for searches. Search instances of a definition specified either by id or by name, using ES query_string. Supports multiple sorts.See [the ES docs](https://www.elastic.co/guide/en/elasticsearch/reference/7.9/query-dsl-query-string-query.html#query-string-syntax) for syntax details.
     * @summary Search Definition
     * @param {number} [defId] The definition Id
     * @param {string} [def] The definition name
     * @param {string} [q] The query
     * @param {number} [from] the first result to return
     * @param {number} [size] the number of results to return
     * @param {string} [sort] A comma-separated list of &lt;field&gt;:&lt;direction&gt; pairs
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    searchInDefinition: async (a, o, i, s, n, t, r = {}) => {
      const m = "/recordm/recordm/definitions/search", u = new URL(m, k);
      let c;
      e && (c = e.baseOptions);
      const l = { method: "GET", ...c, ...r }, h = {}, f = {};
      a !== void 0 && (f.defId = a), o !== void 0 && (f.def = o), i !== void 0 && (f.q = i), s !== void 0 && (f.from = s), n !== void 0 && (f.size = n), t !== void 0 && (f.sort = t), g(u, f);
      let v = c && c.headers ? c.headers : {};
      return l.headers = { ...h, ...v, ...r.headers }, {
        url: j(u),
        options: l
      };
    },
    /**
     * Search instances of all definitions of a Domain, specified either by id or by name, using ES query_string. Supports multiple sorts.See [the ES docs](https://www.elastic.co/guide/en/elasticsearch/reference/7.9/query-dsl-query-string-query.html#query-string-syntax) for syntax details.
     * @summary Search Domain
     * @param {number} [domainId] The domain Id
     * @param {string} [domain] The domain name
     * @param {string} [q] The query
     * @param {number} [from] the first result to return
     * @param {number} [size] the number of results to return
     * @param {string} [sort] A comma-separated list of &lt;field&gt;:&lt;direction&gt; pairs
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    searchInDomain: async (a, o, i, s, n, t, r = {}) => {
      const m = "/recordm/recordm/domains/search", u = new URL(m, k);
      let c;
      e && (c = e.baseOptions);
      const l = { method: "GET", ...c, ...r }, h = {}, f = {};
      a !== void 0 && (f.domainId = a), o !== void 0 && (f.domain = o), i !== void 0 && (f.q = i), s !== void 0 && (f.from = s), n !== void 0 && (f.size = n), t !== void 0 && (f.sort = t), g(u, f);
      let v = c && c.headers ? c.headers : {};
      return l.headers = { ...h, ...v, ...r.headers }, {
        url: j(u),
        options: l
      };
    },
    /**
     * Search instances of all definitions of a Domain, specified either by id or name, using a structured ES search request. See [the ES docs](https://www.elastic.co/guide/en/elasticsearch/reference/7.9/query-dsl.html) for details on query syntax.
     * @summary Structured Search of Domain
     * @param {number} [domainId] The domain Id
     * @param {string} [domain] The domain name
     * @param {string} [body] The JSON of the ES query.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    searchStructuredInDomain: async (a, o, i, s = {}) => {
      const n = "/recordm/recordm/domains/search", t = new URL(n, k);
      let r;
      e && (r = e.baseOptions);
      const m = { method: "POST", ...r, ...s }, u = {}, c = {};
      a !== void 0 && (c.domainId = a), o !== void 0 && (c.domain = o), u["Content-Type"] = "application/json", g(t, c);
      let l = r && r.headers ? r.headers : {};
      return m.headers = { ...u, ...l, ...s.headers }, m.data = x(i, m, e), {
        url: j(t),
        options: m
      };
    },
    /**
     * Stream through all the results of a Definition search. Useful when needing to process more than the 10.000 results available through the normal search. The arguments are the same as on a normal search, excluding `size` and `from`, that are not needed.
     * @summary Stream a Definition Search
     * @param {number} [defId] The definition Id
     * @param {string} [def] The definition name
     * @param {string} [q] The query
     * @param {string} [sort] A comma-separated list of &lt;field&gt;:&lt;direction&gt; pairs
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    streamSearchInDefinition: async (a, o, i, s, n = {}) => {
      const t = "/recordm/recordm/definitions/search/stream", r = new URL(t, k);
      let m;
      e && (m = e.baseOptions);
      const u = { method: "GET", ...m, ...n }, c = {}, l = {};
      a !== void 0 && (l.defId = a), o !== void 0 && (l.def = o), i !== void 0 && (l.q = i), s !== void 0 && (l.sort = s), g(r, l);
      let h = m && m.headers ? m.headers : {};
      return u.headers = { ...c, ...h, ...n.headers }, {
        url: j(r),
        options: u
      };
    },
    /**
     * Stream through all the results of a Domain search. Useful when needing to process more than the 10.000 results available through the normal search. The arguments are the same as on a normal search, excluding `size` and `from`, that are not needed.
     * @summary Stream a Domain Search
     * @param {number} [domainId] The domain Id
     * @param {string} [domain] The domain name
     * @param {string} [q] The query
     * @param {string} [sort] A comma-separated list of &lt;field&gt;:&lt;direction&gt; pairs
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    streamSearchInDomain: async (a, o, i, s, n = {}) => {
      const t = "/recordm/recordm/domains/search/stream", r = new URL(t, k);
      let m;
      e && (m = e.baseOptions);
      const u = { method: "GET", ...m, ...n }, c = {}, l = {};
      a !== void 0 && (l.domainId = a), o !== void 0 && (l.domain = o), i !== void 0 && (l.q = i), s !== void 0 && (l.sort = s), g(r, l);
      let h = m && m.headers ? m.headers : {};
      return u.headers = { ...c, ...h, ...n.headers }, {
        url: j(r),
        options: u
      };
    },
    /**
     * Stream through all the results of a Definition search. Useful when needing to process more than the 10.000 results available through the normal search. Accepts a structured ES search request. See [the ES docs](https://www.elastic.co/guide/en/elasticsearch/reference/7.9/query-dsl.html) for details on query syntax.Does <strong>NOT</strong> accept aggregations, use the normal search endpoint for them.
     * @summary Stream a Definition Search
     * @param {number} [defId] The definition Id
     * @param {string} [def] The definition name
     * @param {string} [body] The JSON of the ES query.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    streamStructuredSearchInDefinition: async (a, o, i, s = {}) => {
      const n = "/recordm/recordm/definitions/search/stream", t = new URL(n, k);
      let r;
      e && (r = e.baseOptions);
      const m = { method: "POST", ...r, ...s }, u = {}, c = {};
      a !== void 0 && (c.defId = a), o !== void 0 && (c.def = o), u["Content-Type"] = "application/json", g(t, c);
      let l = r && r.headers ? r.headers : {};
      return m.headers = { ...u, ...l, ...s.headers }, m.data = x(i, m, e), {
        url: j(t),
        options: m
      };
    },
    /**
     * Stream through all the results of a Definition search. Useful when needing to process more than the 10.000 results available through the normal search. Accepts a structured ES search request. See [the ES docs](https://www.elastic.co/guide/en/elasticsearch/reference/7.9/query-dsl.html) for details on query syntax.Does <strong>NOT</strong> accept aggregations, use the normal search endpoint for them.
     * @summary Stream a Definition Search
     * @param {number} [domainId] The domain Id
     * @param {string} [domain] The domain name
     * @param {string} [body] The JSON of the ES query.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    streamStructuredSearchInDomain: async (a, o, i, s = {}) => {
      const n = "/recordm/recordm/domains/search/stream", t = new URL(n, k);
      let r;
      e && (r = e.baseOptions);
      const m = { method: "POST", ...r, ...s }, u = {}, c = {};
      a !== void 0 && (c.domainId = a), o !== void 0 && (c.domain = o), u["Content-Type"] = "application/json", g(t, c);
      let l = r && r.headers ? r.headers : {};
      return m.headers = { ...u, ...l, ...s.headers }, m.data = x(i, m, e), {
        url: j(t),
        options: m
      };
    },
    /**
     * Search the definition specified either by id or name, using a structured ES search request. See [the ES docs](https://www.elastic.co/guide/en/elasticsearch/reference/7.9/query-dsl.html) for details on query syntax.
     * @summary Structured Search of Definition
     * @param {number} [defId] The definition Id
     * @param {string} [def] The definition name
     * @param {boolean} [typedKeys] When asking for aggregations, should they be prefixed with the aggregation type? The same behaviour as specified in [ES docs](https://www.elastic.co/guide/en/elasticsearch/reference/7.9/search-aggregations.html#return-agg-type)
     * @param {string} [body] The JSON of the ES query.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    structuredSearchInDefinition: async (a, o, i, s, n = {}) => {
      const t = "/recordm/recordm/definitions/search", r = new URL(t, k);
      let m;
      e && (m = e.baseOptions);
      const u = { method: "POST", ...m, ...n }, c = {}, l = {};
      a !== void 0 && (l.defId = a), o !== void 0 && (l.def = o), i !== void 0 && (l.typed_keys = i), c["Content-Type"] = "application/json", g(r, l);
      let h = m && m.headers ? m.headers : {};
      return u.headers = { ...c, ...h, ...n.headers }, u.data = x(s, u, e), {
        url: j(r),
        options: u
      };
    }
  };
}, L = function(e) {
  const a = Me(e);
  return {
    /**
     * The preferred endpoint for searches. Search instances of a definition specified either by id or by name, using ES query_string. Supports multiple sorts.See [the ES docs](https://www.elastic.co/guide/en/elasticsearch/reference/7.9/query-dsl-query-string-query.html#query-string-syntax) for syntax details.
     * @summary Search Definition
     * @param {number} [defId] The definition Id
     * @param {string} [def] The definition name
     * @param {string} [q] The query
     * @param {number} [from] the first result to return
     * @param {number} [size] the number of results to return
     * @param {string} [sort] A comma-separated list of &lt;field&gt;:&lt;direction&gt; pairs
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async searchInDefinition(o, i, s, n, t, r, m) {
      const u = await a.searchInDefinition(o, i, s, n, t, r, m);
      return b(u, d, e);
    },
    /**
     * Search instances of all definitions of a Domain, specified either by id or by name, using ES query_string. Supports multiple sorts.See [the ES docs](https://www.elastic.co/guide/en/elasticsearch/reference/7.9/query-dsl-query-string-query.html#query-string-syntax) for syntax details.
     * @summary Search Domain
     * @param {number} [domainId] The domain Id
     * @param {string} [domain] The domain name
     * @param {string} [q] The query
     * @param {number} [from] the first result to return
     * @param {number} [size] the number of results to return
     * @param {string} [sort] A comma-separated list of &lt;field&gt;:&lt;direction&gt; pairs
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async searchInDomain(o, i, s, n, t, r, m) {
      const u = await a.searchInDomain(o, i, s, n, t, r, m);
      return b(u, d, e);
    },
    /**
     * Search instances of all definitions of a Domain, specified either by id or name, using a structured ES search request. See [the ES docs](https://www.elastic.co/guide/en/elasticsearch/reference/7.9/query-dsl.html) for details on query syntax.
     * @summary Structured Search of Domain
     * @param {number} [domainId] The domain Id
     * @param {string} [domain] The domain name
     * @param {string} [body] The JSON of the ES query.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async searchStructuredInDomain(o, i, s, n) {
      const t = await a.searchStructuredInDomain(o, i, s, n);
      return b(t, d, e);
    },
    /**
     * Stream through all the results of a Definition search. Useful when needing to process more than the 10.000 results available through the normal search. The arguments are the same as on a normal search, excluding `size` and `from`, that are not needed.
     * @summary Stream a Definition Search
     * @param {number} [defId] The definition Id
     * @param {string} [def] The definition name
     * @param {string} [q] The query
     * @param {string} [sort] A comma-separated list of &lt;field&gt;:&lt;direction&gt; pairs
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async streamSearchInDefinition(o, i, s, n, t) {
      const r = await a.streamSearchInDefinition(o, i, s, n, t);
      return b(r, d, e);
    },
    /**
     * Stream through all the results of a Domain search. Useful when needing to process more than the 10.000 results available through the normal search. The arguments are the same as on a normal search, excluding `size` and `from`, that are not needed.
     * @summary Stream a Domain Search
     * @param {number} [domainId] The domain Id
     * @param {string} [domain] The domain name
     * @param {string} [q] The query
     * @param {string} [sort] A comma-separated list of &lt;field&gt;:&lt;direction&gt; pairs
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async streamSearchInDomain(o, i, s, n, t) {
      const r = await a.streamSearchInDomain(o, i, s, n, t);
      return b(r, d, e);
    },
    /**
     * Stream through all the results of a Definition search. Useful when needing to process more than the 10.000 results available through the normal search. Accepts a structured ES search request. See [the ES docs](https://www.elastic.co/guide/en/elasticsearch/reference/7.9/query-dsl.html) for details on query syntax.Does <strong>NOT</strong> accept aggregations, use the normal search endpoint for them.
     * @summary Stream a Definition Search
     * @param {number} [defId] The definition Id
     * @param {string} [def] The definition name
     * @param {string} [body] The JSON of the ES query.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async streamStructuredSearchInDefinition(o, i, s, n) {
      const t = await a.streamStructuredSearchInDefinition(o, i, s, n);
      return b(t, d, e);
    },
    /**
     * Stream through all the results of a Definition search. Useful when needing to process more than the 10.000 results available through the normal search. Accepts a structured ES search request. See [the ES docs](https://www.elastic.co/guide/en/elasticsearch/reference/7.9/query-dsl.html) for details on query syntax.Does <strong>NOT</strong> accept aggregations, use the normal search endpoint for them.
     * @summary Stream a Definition Search
     * @param {number} [domainId] The domain Id
     * @param {string} [domain] The domain name
     * @param {string} [body] The JSON of the ES query.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async streamStructuredSearchInDomain(o, i, s, n) {
      const t = await a.streamStructuredSearchInDomain(o, i, s, n);
      return b(t, d, e);
    },
    /**
     * Search the definition specified either by id or name, using a structured ES search request. See [the ES docs](https://www.elastic.co/guide/en/elasticsearch/reference/7.9/query-dsl.html) for details on query syntax.
     * @summary Structured Search of Definition
     * @param {number} [defId] The definition Id
     * @param {string} [def] The definition name
     * @param {boolean} [typedKeys] When asking for aggregations, should they be prefixed with the aggregation type? The same behaviour as specified in [ES docs](https://www.elastic.co/guide/en/elasticsearch/reference/7.9/search-aggregations.html#return-agg-type)
     * @param {string} [body] The JSON of the ES query.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async structuredSearchInDefinition(o, i, s, n, t) {
      const r = await a.structuredSearchInDefinition(o, i, s, n, t);
      return b(r, d, e);
    }
  };
};
class Ze extends Q {
  /**
   * The preferred endpoint for searches. Search instances of a definition specified either by id or by name, using ES query_string. Supports multiple sorts.See [the ES docs](https://www.elastic.co/guide/en/elasticsearch/reference/7.9/query-dsl-query-string-query.html#query-string-syntax) for syntax details.
   * @summary Search Definition
   * @param {number} [defId] The definition Id
   * @param {string} [def] The definition name
   * @param {string} [q] The query
   * @param {number} [from] the first result to return
   * @param {number} [size] the number of results to return
   * @param {string} [sort] A comma-separated list of &lt;field&gt;:&lt;direction&gt; pairs
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof SearchApi
   */
  searchInDefinition(a, o, i, s, n, t, r) {
    return L(this.configuration).searchInDefinition(a, o, i, s, n, t, r).then((m) => m(this.axios));
  }
  /**
   * Search instances of all definitions of a Domain, specified either by id or by name, using ES query_string. Supports multiple sorts.See [the ES docs](https://www.elastic.co/guide/en/elasticsearch/reference/7.9/query-dsl-query-string-query.html#query-string-syntax) for syntax details.
   * @summary Search Domain
   * @param {number} [domainId] The domain Id
   * @param {string} [domain] The domain name
   * @param {string} [q] The query
   * @param {number} [from] the first result to return
   * @param {number} [size] the number of results to return
   * @param {string} [sort] A comma-separated list of &lt;field&gt;:&lt;direction&gt; pairs
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof SearchApi
   */
  searchInDomain(a, o, i, s, n, t, r) {
    return L(this.configuration).searchInDomain(a, o, i, s, n, t, r).then((m) => m(this.axios));
  }
  /**
   * Search instances of all definitions of a Domain, specified either by id or name, using a structured ES search request. See [the ES docs](https://www.elastic.co/guide/en/elasticsearch/reference/7.9/query-dsl.html) for details on query syntax.
   * @summary Structured Search of Domain
   * @param {number} [domainId] The domain Id
   * @param {string} [domain] The domain name
   * @param {string} [body] The JSON of the ES query.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof SearchApi
   */
  searchStructuredInDomain(a, o, i, s) {
    return L(this.configuration).searchStructuredInDomain(a, o, i, s).then((n) => n(this.axios));
  }
  /**
   * Stream through all the results of a Definition search. Useful when needing to process more than the 10.000 results available through the normal search. The arguments are the same as on a normal search, excluding `size` and `from`, that are not needed.
   * @summary Stream a Definition Search
   * @param {number} [defId] The definition Id
   * @param {string} [def] The definition name
   * @param {string} [q] The query
   * @param {string} [sort] A comma-separated list of &lt;field&gt;:&lt;direction&gt; pairs
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof SearchApi
   */
  streamSearchInDefinition(a, o, i, s, n) {
    return L(this.configuration).streamSearchInDefinition(a, o, i, s, n).then((t) => t(this.axios));
  }
  /**
   * Stream through all the results of a Domain search. Useful when needing to process more than the 10.000 results available through the normal search. The arguments are the same as on a normal search, excluding `size` and `from`, that are not needed.
   * @summary Stream a Domain Search
   * @param {number} [domainId] The domain Id
   * @param {string} [domain] The domain name
   * @param {string} [q] The query
   * @param {string} [sort] A comma-separated list of &lt;field&gt;:&lt;direction&gt; pairs
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof SearchApi
   */
  streamSearchInDomain(a, o, i, s, n) {
    return L(this.configuration).streamSearchInDomain(a, o, i, s, n).then((t) => t(this.axios));
  }
  /**
   * Stream through all the results of a Definition search. Useful when needing to process more than the 10.000 results available through the normal search. Accepts a structured ES search request. See [the ES docs](https://www.elastic.co/guide/en/elasticsearch/reference/7.9/query-dsl.html) for details on query syntax.Does <strong>NOT</strong> accept aggregations, use the normal search endpoint for them.
   * @summary Stream a Definition Search
   * @param {number} [defId] The definition Id
   * @param {string} [def] The definition name
   * @param {string} [body] The JSON of the ES query.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof SearchApi
   */
  streamStructuredSearchInDefinition(a, o, i, s) {
    return L(this.configuration).streamStructuredSearchInDefinition(a, o, i, s).then((n) => n(this.axios));
  }
  /**
   * Stream through all the results of a Definition search. Useful when needing to process more than the 10.000 results available through the normal search. Accepts a structured ES search request. See [the ES docs](https://www.elastic.co/guide/en/elasticsearch/reference/7.9/query-dsl.html) for details on query syntax.Does <strong>NOT</strong> accept aggregations, use the normal search endpoint for them.
   * @summary Stream a Definition Search
   * @param {number} [domainId] The domain Id
   * @param {string} [domain] The domain name
   * @param {string} [body] The JSON of the ES query.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof SearchApi
   */
  streamStructuredSearchInDomain(a, o, i, s) {
    return L(this.configuration).streamStructuredSearchInDomain(a, o, i, s).then((n) => n(this.axios));
  }
  /**
   * Search the definition specified either by id or name, using a structured ES search request. See [the ES docs](https://www.elastic.co/guide/en/elasticsearch/reference/7.9/query-dsl.html) for details on query syntax.
   * @summary Structured Search of Definition
   * @param {number} [defId] The definition Id
   * @param {string} [def] The definition name
   * @param {boolean} [typedKeys] When asking for aggregations, should they be prefixed with the aggregation type? The same behaviour as specified in [ES docs](https://www.elastic.co/guide/en/elasticsearch/reference/7.9/search-aggregations.html#return-agg-type)
   * @param {string} [body] The JSON of the ES query.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof SearchApi
   */
  structuredSearchInDefinition(a, o, i, s, n) {
    return L(this.configuration).structuredSearchInDefinition(a, o, i, s, n).then((t) => t(this.axios));
  }
}
const Ke = {
  ENABLED: "enabled",
  DISABLED: "disabled",
  DELETE_IN_PROGRESS: "deleteInProgress"
}, Xe = {
  ENABLED: "enabled",
  DISABLED: "disabled",
  DELETE_IN_PROGRESS: "deleteInProgress"
}, Ye = {
  MANDATORY: "MANDATORY",
  INVALID_FORMAT: "INVALID_FORMAT",
  FIELD_TO_LONG: "FIELD_TO_LONG",
  DUPLICATE_DOMAIN_NAME: "DUPLICATE_DOMAIN_NAME",
  DOMAIN_NAME_NOT_ALLOWED: "DOMAIN_NAME_NOT_ALLOWED",
  DUPLICATE_DEFINITION_NAME: "DUPLICATE_DEFINITION_NAME",
  INVALID_FIELD_DEFINITION_NAME: "INVALID_FIELD_DEFINITION_NAME",
  INVALID_FIELD_DEFINITION_DESCRIPTION: "INVALID_FIELD_DEFINITION_DESCRIPTION",
  NO_DEFINITION_FOUND: "NO_DEFINITION_FOUND",
  DEFINITION_NOT_ENABLED: "DEFINITION_NOT_ENABLED",
  NOT_A_NUMBER: "NOT_A_NUMBER",
  NOT_A_DATE: "NOT_A_DATE",
  NOT_AUTHORIZED_TO_EDIT_FIELD: "NOT_AUTHORIZED_TO_EDIT_FIELD",
  VALUE_NOT_SUPPORTED: "VALUE_NOT_SUPPORTED",
  INSTANCE_REFERENCED: "INSTANCE_REFERENCED",
  EXT_REF_INVALID_STATE: "EXT_REF_INVALID_STATE",
  NOT_DUPLICABLE_FIELD: "NOT_DUPLICABLE_FIELD",
  WORKM_ERROR: "WORKM_ERROR",
  NOT_VALID_TASKS_FORMAT: "NOT_VALID_TASKS_FORMAT",
  NOT_VALID_TASK: "NOT_VALID_TASK"
}, ai = {
  TODO: "TODO",
  COMPLETE: "COMPLETE",
  PLANNED: "PLANNED"
}, oi = {
  ENABLED: "enabled",
  DISABLED: "disabled",
  DELETE_IN_PROGRESS: "deleteInProgress"
};
class oa {
  constructor(a, o, i) {
    U(this, "instanceId");
    U(this, "fieldDefinitionId");
    U(this, "filename");
    this.instanceId = a, this.fieldDefinitionId = o, this.filename = i;
  }
  get name() {
    return this.filename;
  }
  get path() {
    return `/recordm/recordm/instances/${this.instanceId}/files/${this.fieldDefinitionId}/${this.filename}`;
  }
}
const F = class F {
  constructor(a) {
    U(this, "instance");
    // Allows for easy lookup by field name
    U(this, "fieldsNameMap");
    this.instance = a, this.fieldsNameMap = {}, this.updateInternalDataStructure(this.instance.fields || []);
  }
  /**
   * Updates internal data structures for quick access and findings
   * @param fields the list of fields to analyze
   * @param parent the parent field
   * @private
   */
  updateInternalDataStructure(a, o) {
    this.flattenFields(a).forEach((i) => {
      this.fieldsNameMap[i.fieldDefinition.name] ? this.fieldsNameMap[i.fieldDefinition.name].push(i) : this.fieldsNameMap[i.fieldDefinition.name] = [i];
    });
  }
  flattenFields(a) {
    return a.flatMap((o) => [o, ...this.flattenFields(o.fields || [])]);
  }
  get id() {
    return this.instance.id;
  }
  get version() {
    return this.instance.version;
  }
  /**
   * Lookup all instance fields with a specific name
   * @param name the name of the field to look for
   */
  field(a) {
    var o;
    return ((o = this.fieldsNameMap[a]) == null ? void 0 : o[0]) || null;
  }
  /**
   * Lookup all instance fields with a specific name.
   * @param name the name of the field to look for
   */
  fields(a) {
    return this.fieldsNameMap[a] || [];
  }
  /**
   * Shortcut method to get the first value of a field of the Instance.
   * @param name the field name
   */
  value(a) {
    var i;
    const o = (i = this.fields(a)) == null ? void 0 : i.find((s) => !!s.value);
    return (o == null ? void 0 : o.value) || void 0;
  }
  /**
   * Shortcut method to get the first value of a field of the Instance and turn it into a specific type
   * @param name the field name
   * @param transformer the transformer function to return the value as a specific type
   */
  valueAndTransform(a, o) {
    const i = this.value(a);
    return i ? o(i) : void 0;
  }
  /**
   * Shortcut method to get the first value of a field of the Instance as a number.
   * @param name the field name
   */
  valueAsNumber(a) {
    return this.valueAndTransform(a, (o) => parseInt(o, 10));
  }
  /**
   * Shortcut method to get the first value of a field of the Instance as a Date.
   * @param name the field name
   */
  valueAsDate(a) {
    return this.valueAndTransform(a, (o) => new Date(parseInt(o, 10)));
  }
  /**
   * Shortcut method to get the first value of a field of the Instance as an RmInstanceFile.
   * @param name the field name
   */
  valueAsFile(a) {
    let o = this.field(a);
    if (o != null && o.value)
      return new oa(this.id, o.fieldDefinition.id, o.value);
  }
  /**
   * Get all the values of fields with the specified name.
   * @param name the field name
   */
  values(a) {
    return this.fields(a).filter((o) => !!o.value).map((o) => o.value);
  }
  /**
   * Get all the values of fields with the specified name as numbers
   * @param name the field name
   */
  valuesAsNumbers(a) {
    return this.values(a).map((o) => parseInt(o, 10));
  }
  /**
   * Get all the values of fields with the specified name as numbers
   * @param name the field name
   */
  valuesAsDates(a) {
    return this.values(a).map((o) => new Date(parseInt(o, 10)));
  }
  /**
   * Shortcut method to get all values of a field of the Instance as an RmInstanceFile.
   * @param name the field name
   */
  valuesAsFiles(a) {
    return this.fields(a).filter((o) => !!o.value).map((o) => new oa(this.id, o.fieldDefinition.id, o.value));
  }
  /**
   * Upload a file into a $file field.
   * @param field the target field to upload the files
   * @param fieldUploads a Pair of field and the file to upload
   */
  async uploadFiles(a, o) {
    const i = o.map((s) => F.API.uploadFile(`${this.id}`, `${a.fieldDefinition.id}`, s).then((n) => {
      let t = n.data.replaceAll("<textarea>", "").replaceAll("</textarea>", "");
      return new oa(this.id, a.fieldDefinition.id, t);
    }));
    return await Promise.all(i);
  }
  /**
   * Veriify if this instance is updatable
   */
  canUpdate() {
    return !!this.instance._links.update;
  }
  static async load(a) {
    try {
      const o = (await F.API.getInstance(a)).data;
      return Promise.resolve(new F(o));
    } catch (o) {
      return console.error("Error loading instance with id", a), Promise.reject(o);
    }
  }
};
U(F, "API", new Be());
let Ra = F;
export {
  Ke as DecoratedDefinitionStateEnum,
  Xe as DefinitionStateEnum,
  Ge as DefinitionsApi,
  Je as DomainsApi,
  Ye as FieldErrorErrorTypeEnum,
  Be as InstancesApi,
  We as IntegrationApi,
  Ze as SearchApi,
  ai as TaskStateEnum,
  oi as UpdateDefinitionRequestStateEnum
};
//# sourceMappingURL=cobjs-api-recordm.mjs.map
