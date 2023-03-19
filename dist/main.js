/*! For license information please see main.js.LICENSE.txt */
(() => {
  "use strict";
  const e = "150",
    t = 0,
    n = 1,
    i = 2,
    r = 1,
    s = 2,
    a = 3,
    o = 0,
    l = 1,
    c = 2,
    h = 0,
    u = 1,
    d = 2,
    p = 3,
    f = 4,
    m = 5,
    g = 100,
    _ = 101,
    v = 102,
    x = 103,
    y = 104,
    M = 200,
    b = 201,
    S = 202,
    w = 203,
    T = 204,
    E = 205,
    A = 206,
    L = 207,
    C = 208,
    R = 209,
    P = 210,
    D = 0,
    I = 1,
    N = 2,
    O = 3,
    U = 4,
    z = 5,
    F = 6,
    B = 7,
    k = 0,
    H = 1,
    G = 2,
    V = 0,
    W = 1,
    j = 2,
    X = 3,
    q = 4,
    Y = 5,
    K = 301,
    Z = 302,
    J = 303,
    Q = 304,
    $ = 306,
    ee = 1e3,
    te = 1001,
    ne = 1002,
    ie = 1003,
    re = 1004,
    se = 1005,
    ae = 1006,
    oe = 1007,
    le = 1008,
    ce = 1009,
    he = 1010,
    ue = 1011,
    de = 1012,
    pe = 1013,
    fe = 1014,
    me = 1015,
    ge = 1016,
    _e = 1017,
    ve = 1018,
    xe = 1020,
    ye = 1021,
    Me = 1023,
    be = 1024,
    Se = 1025,
    we = 1026,
    Te = 1027,
    Ee = 1028,
    Ae = 1029,
    Le = 1030,
    Ce = 1031,
    Re = 1033,
    Pe = 33776,
    De = 33777,
    Ie = 33778,
    Ne = 33779,
    Oe = 35840,
    Ue = 35841,
    ze = 35842,
    Fe = 35843,
    Be = 36196,
    ke = 37492,
    He = 37496,
    Ge = 37808,
    Ve = 37809,
    We = 37810,
    je = 37811,
    Xe = 37812,
    qe = 37813,
    Ye = 37814,
    Ke = 37815,
    Ze = 37816,
    Je = 37817,
    Qe = 37818,
    $e = 37819,
    et = 37820,
    tt = 37821,
    nt = 36492,
    it = 36283,
    rt = 36284,
    st = 36285,
    at = 36286,
    ot = 2300,
    lt = 2301,
    ct = 2302,
    ht = 0,
    ut = 1,
    dt = 2,
    pt = 3e3,
    ft = 3001,
    mt = 3201,
    gt = 0,
    _t = 1,
    vt = "srgb",
    xt = "srgb-linear",
    yt = "display-p3",
    Mt = 7680,
    bt = 35044,
    St = "300 es",
    wt = 1035;
  class Tt {
    addEventListener(e, t) {
      void 0 === this._listeners && (this._listeners = {});
      const n = this._listeners;
      void 0 === n[e] && (n[e] = []), -1 === n[e].indexOf(t) && n[e].push(t);
    }
    hasEventListener(e, t) {
      if (void 0 === this._listeners) return !1;
      const n = this._listeners;
      return void 0 !== n[e] && -1 !== n[e].indexOf(t);
    }
    removeEventListener(e, t) {
      if (void 0 === this._listeners) return;
      const n = this._listeners[e];
      if (void 0 !== n) {
        const e = n.indexOf(t);
        -1 !== e && n.splice(e, 1);
      }
    }
    dispatchEvent(e) {
      if (void 0 === this._listeners) return;
      const t = this._listeners[e.type];
      if (void 0 !== t) {
        e.target = this;
        const n = t.slice(0);
        for (let t = 0, i = n.length; t < i; t++) n[t].call(this, e);
        e.target = null;
      }
    }
  }
  const Et = [
    "00",
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "0a",
    "0b",
    "0c",
    "0d",
    "0e",
    "0f",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "1a",
    "1b",
    "1c",
    "1d",
    "1e",
    "1f",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "2a",
    "2b",
    "2c",
    "2d",
    "2e",
    "2f",
    "30",
    "31",
    "32",
    "33",
    "34",
    "35",
    "36",
    "37",
    "38",
    "39",
    "3a",
    "3b",
    "3c",
    "3d",
    "3e",
    "3f",
    "40",
    "41",
    "42",
    "43",
    "44",
    "45",
    "46",
    "47",
    "48",
    "49",
    "4a",
    "4b",
    "4c",
    "4d",
    "4e",
    "4f",
    "50",
    "51",
    "52",
    "53",
    "54",
    "55",
    "56",
    "57",
    "58",
    "59",
    "5a",
    "5b",
    "5c",
    "5d",
    "5e",
    "5f",
    "60",
    "61",
    "62",
    "63",
    "64",
    "65",
    "66",
    "67",
    "68",
    "69",
    "6a",
    "6b",
    "6c",
    "6d",
    "6e",
    "6f",
    "70",
    "71",
    "72",
    "73",
    "74",
    "75",
    "76",
    "77",
    "78",
    "79",
    "7a",
    "7b",
    "7c",
    "7d",
    "7e",
    "7f",
    "80",
    "81",
    "82",
    "83",
    "84",
    "85",
    "86",
    "87",
    "88",
    "89",
    "8a",
    "8b",
    "8c",
    "8d",
    "8e",
    "8f",
    "90",
    "91",
    "92",
    "93",
    "94",
    "95",
    "96",
    "97",
    "98",
    "99",
    "9a",
    "9b",
    "9c",
    "9d",
    "9e",
    "9f",
    "a0",
    "a1",
    "a2",
    "a3",
    "a4",
    "a5",
    "a6",
    "a7",
    "a8",
    "a9",
    "aa",
    "ab",
    "ac",
    "ad",
    "ae",
    "af",
    "b0",
    "b1",
    "b2",
    "b3",
    "b4",
    "b5",
    "b6",
    "b7",
    "b8",
    "b9",
    "ba",
    "bb",
    "bc",
    "bd",
    "be",
    "bf",
    "c0",
    "c1",
    "c2",
    "c3",
    "c4",
    "c5",
    "c6",
    "c7",
    "c8",
    "c9",
    "ca",
    "cb",
    "cc",
    "cd",
    "ce",
    "cf",
    "d0",
    "d1",
    "d2",
    "d3",
    "d4",
    "d5",
    "d6",
    "d7",
    "d8",
    "d9",
    "da",
    "db",
    "dc",
    "dd",
    "de",
    "df",
    "e0",
    "e1",
    "e2",
    "e3",
    "e4",
    "e5",
    "e6",
    "e7",
    "e8",
    "e9",
    "ea",
    "eb",
    "ec",
    "ed",
    "ee",
    "ef",
    "f0",
    "f1",
    "f2",
    "f3",
    "f4",
    "f5",
    "f6",
    "f7",
    "f8",
    "f9",
    "fa",
    "fb",
    "fc",
    "fd",
    "fe",
    "ff",
  ];
  const At = Math.PI / 180,
    Lt = 180 / Math.PI;
  function Ct() {
    const e = (4294967295 * Math.random()) | 0,
      t = (4294967295 * Math.random()) | 0,
      n = (4294967295 * Math.random()) | 0,
      i = (4294967295 * Math.random()) | 0;
    return (
      Et[255 & e] +
      Et[(e >> 8) & 255] +
      Et[(e >> 16) & 255] +
      Et[(e >> 24) & 255] +
      "-" +
      Et[255 & t] +
      Et[(t >> 8) & 255] +
      "-" +
      Et[((t >> 16) & 15) | 64] +
      Et[(t >> 24) & 255] +
      "-" +
      Et[(63 & n) | 128] +
      Et[(n >> 8) & 255] +
      "-" +
      Et[(n >> 16) & 255] +
      Et[(n >> 24) & 255] +
      Et[255 & i] +
      Et[(i >> 8) & 255] +
      Et[(i >> 16) & 255] +
      Et[(i >> 24) & 255]
    ).toLowerCase();
  }
  function Rt(e, t, n) {
    return Math.max(t, Math.min(n, e));
  }
  function Pt(e, t) {
    return ((e % t) + t) % t;
  }
  function Dt(e, t, n) {
    return (1 - n) * e + n * t;
  }
  function It(e) {
    return 0 == (e & (e - 1)) && 0 !== e;
  }
  function Nt(e) {
    return Math.pow(2, Math.ceil(Math.log(e) / Math.LN2));
  }
  function Ot(e) {
    return Math.pow(2, Math.floor(Math.log(e) / Math.LN2));
  }
  function Ut(e, t) {
    switch (t.constructor) {
      case Float32Array:
        return e;
      case Uint16Array:
        return e / 65535;
      case Uint8Array:
        return e / 255;
      case Int16Array:
        return Math.max(e / 32767, -1);
      case Int8Array:
        return Math.max(e / 127, -1);
      default:
        throw new Error("Invalid component type.");
    }
  }
  function zt(e, t) {
    switch (t.constructor) {
      case Float32Array:
        return e;
      case Uint16Array:
        return Math.round(65535 * e);
      case Uint8Array:
        return Math.round(255 * e);
      case Int16Array:
        return Math.round(32767 * e);
      case Int8Array:
        return Math.round(127 * e);
      default:
        throw new Error("Invalid component type.");
    }
  }
  const Ft = function (e) {
    return e * Lt;
  };
  class Bt {
    constructor(e = 0, t = 0) {
      (Bt.prototype.isVector2 = !0), (this.x = e), (this.y = t);
    }
    get width() {
      return this.x;
    }
    set width(e) {
      this.x = e;
    }
    get height() {
      return this.y;
    }
    set height(e) {
      this.y = e;
    }
    set(e, t) {
      return (this.x = e), (this.y = t), this;
    }
    setScalar(e) {
      return (this.x = e), (this.y = e), this;
    }
    setX(e) {
      return (this.x = e), this;
    }
    setY(e) {
      return (this.y = e), this;
    }
    setComponent(e, t) {
      switch (e) {
        case 0:
          this.x = t;
          break;
        case 1:
          this.y = t;
          break;
        default:
          throw new Error("index is out of range: " + e);
      }
      return this;
    }
    getComponent(e) {
      switch (e) {
        case 0:
          return this.x;
        case 1:
          return this.y;
        default:
          throw new Error("index is out of range: " + e);
      }
    }
    clone() {
      return new this.constructor(this.x, this.y);
    }
    copy(e) {
      return (this.x = e.x), (this.y = e.y), this;
    }
    add(e) {
      return (this.x += e.x), (this.y += e.y), this;
    }
    addScalar(e) {
      return (this.x += e), (this.y += e), this;
    }
    addVectors(e, t) {
      return (this.x = e.x + t.x), (this.y = e.y + t.y), this;
    }
    addScaledVector(e, t) {
      return (this.x += e.x * t), (this.y += e.y * t), this;
    }
    sub(e) {
      return (this.x -= e.x), (this.y -= e.y), this;
    }
    subScalar(e) {
      return (this.x -= e), (this.y -= e), this;
    }
    subVectors(e, t) {
      return (this.x = e.x - t.x), (this.y = e.y - t.y), this;
    }
    multiply(e) {
      return (this.x *= e.x), (this.y *= e.y), this;
    }
    multiplyScalar(e) {
      return (this.x *= e), (this.y *= e), this;
    }
    divide(e) {
      return (this.x /= e.x), (this.y /= e.y), this;
    }
    divideScalar(e) {
      return this.multiplyScalar(1 / e);
    }
    applyMatrix3(e) {
      const t = this.x,
        n = this.y,
        i = e.elements;
      return (
        (this.x = i[0] * t + i[3] * n + i[6]),
        (this.y = i[1] * t + i[4] * n + i[7]),
        this
      );
    }
    min(e) {
      return (
        (this.x = Math.min(this.x, e.x)), (this.y = Math.min(this.y, e.y)), this
      );
    }
    max(e) {
      return (
        (this.x = Math.max(this.x, e.x)), (this.y = Math.max(this.y, e.y)), this
      );
    }
    clamp(e, t) {
      return (
        (this.x = Math.max(e.x, Math.min(t.x, this.x))),
        (this.y = Math.max(e.y, Math.min(t.y, this.y))),
        this
      );
    }
    clampScalar(e, t) {
      return (
        (this.x = Math.max(e, Math.min(t, this.x))),
        (this.y = Math.max(e, Math.min(t, this.y))),
        this
      );
    }
    clampLength(e, t) {
      const n = this.length();
      return this.divideScalar(n || 1).multiplyScalar(
        Math.max(e, Math.min(t, n))
      );
    }
    floor() {
      return (this.x = Math.floor(this.x)), (this.y = Math.floor(this.y)), this;
    }
    ceil() {
      return (this.x = Math.ceil(this.x)), (this.y = Math.ceil(this.y)), this;
    }
    round() {
      return (this.x = Math.round(this.x)), (this.y = Math.round(this.y)), this;
    }
    roundToZero() {
      return (
        (this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x)),
        (this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y)),
        this
      );
    }
    negate() {
      return (this.x = -this.x), (this.y = -this.y), this;
    }
    dot(e) {
      return this.x * e.x + this.y * e.y;
    }
    cross(e) {
      return this.x * e.y - this.y * e.x;
    }
    lengthSq() {
      return this.x * this.x + this.y * this.y;
    }
    length() {
      return Math.sqrt(this.x * this.x + this.y * this.y);
    }
    manhattanLength() {
      return Math.abs(this.x) + Math.abs(this.y);
    }
    normalize() {
      return this.divideScalar(this.length() || 1);
    }
    angle() {
      return Math.atan2(-this.y, -this.x) + Math.PI;
    }
    distanceTo(e) {
      return Math.sqrt(this.distanceToSquared(e));
    }
    distanceToSquared(e) {
      const t = this.x - e.x,
        n = this.y - e.y;
      return t * t + n * n;
    }
    manhattanDistanceTo(e) {
      return Math.abs(this.x - e.x) + Math.abs(this.y - e.y);
    }
    setLength(e) {
      return this.normalize().multiplyScalar(e);
    }
    lerp(e, t) {
      return (
        (this.x += (e.x - this.x) * t), (this.y += (e.y - this.y) * t), this
      );
    }
    lerpVectors(e, t, n) {
      return (
        (this.x = e.x + (t.x - e.x) * n), (this.y = e.y + (t.y - e.y) * n), this
      );
    }
    equals(e) {
      return e.x === this.x && e.y === this.y;
    }
    fromArray(e, t = 0) {
      return (this.x = e[t]), (this.y = e[t + 1]), this;
    }
    toArray(e = [], t = 0) {
      return (e[t] = this.x), (e[t + 1] = this.y), e;
    }
    fromBufferAttribute(e, t) {
      return (this.x = e.getX(t)), (this.y = e.getY(t)), this;
    }
    rotateAround(e, t) {
      const n = Math.cos(t),
        i = Math.sin(t),
        r = this.x - e.x,
        s = this.y - e.y;
      return (
        (this.x = r * n - s * i + e.x), (this.y = r * i + s * n + e.y), this
      );
    }
    random() {
      return (this.x = Math.random()), (this.y = Math.random()), this;
    }
    *[Symbol.iterator]() {
      yield this.x, yield this.y;
    }
  }
  class kt {
    constructor() {
      (kt.prototype.isMatrix3 = !0),
        (this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1]);
    }
    set(e, t, n, i, r, s, a, o, l) {
      const c = this.elements;
      return (
        (c[0] = e),
        (c[1] = i),
        (c[2] = a),
        (c[3] = t),
        (c[4] = r),
        (c[5] = o),
        (c[6] = n),
        (c[7] = s),
        (c[8] = l),
        this
      );
    }
    identity() {
      return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this;
    }
    copy(e) {
      const t = this.elements,
        n = e.elements;
      return (
        (t[0] = n[0]),
        (t[1] = n[1]),
        (t[2] = n[2]),
        (t[3] = n[3]),
        (t[4] = n[4]),
        (t[5] = n[5]),
        (t[6] = n[6]),
        (t[7] = n[7]),
        (t[8] = n[8]),
        this
      );
    }
    extractBasis(e, t, n) {
      return (
        e.setFromMatrix3Column(this, 0),
        t.setFromMatrix3Column(this, 1),
        n.setFromMatrix3Column(this, 2),
        this
      );
    }
    setFromMatrix4(e) {
      const t = e.elements;
      return (
        this.set(t[0], t[4], t[8], t[1], t[5], t[9], t[2], t[6], t[10]), this
      );
    }
    multiply(e) {
      return this.multiplyMatrices(this, e);
    }
    premultiply(e) {
      return this.multiplyMatrices(e, this);
    }
    multiplyMatrices(e, t) {
      const n = e.elements,
        i = t.elements,
        r = this.elements,
        s = n[0],
        a = n[3],
        o = n[6],
        l = n[1],
        c = n[4],
        h = n[7],
        u = n[2],
        d = n[5],
        p = n[8],
        f = i[0],
        m = i[3],
        g = i[6],
        _ = i[1],
        v = i[4],
        x = i[7],
        y = i[2],
        M = i[5],
        b = i[8];
      return (
        (r[0] = s * f + a * _ + o * y),
        (r[3] = s * m + a * v + o * M),
        (r[6] = s * g + a * x + o * b),
        (r[1] = l * f + c * _ + h * y),
        (r[4] = l * m + c * v + h * M),
        (r[7] = l * g + c * x + h * b),
        (r[2] = u * f + d * _ + p * y),
        (r[5] = u * m + d * v + p * M),
        (r[8] = u * g + d * x + p * b),
        this
      );
    }
    multiplyScalar(e) {
      const t = this.elements;
      return (
        (t[0] *= e),
        (t[3] *= e),
        (t[6] *= e),
        (t[1] *= e),
        (t[4] *= e),
        (t[7] *= e),
        (t[2] *= e),
        (t[5] *= e),
        (t[8] *= e),
        this
      );
    }
    determinant() {
      const e = this.elements,
        t = e[0],
        n = e[1],
        i = e[2],
        r = e[3],
        s = e[4],
        a = e[5],
        o = e[6],
        l = e[7],
        c = e[8];
      return (
        t * s * c - t * a * l - n * r * c + n * a * o + i * r * l - i * s * o
      );
    }
    invert() {
      const e = this.elements,
        t = e[0],
        n = e[1],
        i = e[2],
        r = e[3],
        s = e[4],
        a = e[5],
        o = e[6],
        l = e[7],
        c = e[8],
        h = c * s - a * l,
        u = a * o - c * r,
        d = l * r - s * o,
        p = t * h + n * u + i * d;
      if (0 === p) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
      const f = 1 / p;
      return (
        (e[0] = h * f),
        (e[1] = (i * l - c * n) * f),
        (e[2] = (a * n - i * s) * f),
        (e[3] = u * f),
        (e[4] = (c * t - i * o) * f),
        (e[5] = (i * r - a * t) * f),
        (e[6] = d * f),
        (e[7] = (n * o - l * t) * f),
        (e[8] = (s * t - n * r) * f),
        this
      );
    }
    transpose() {
      let e;
      const t = this.elements;
      return (
        (e = t[1]),
        (t[1] = t[3]),
        (t[3] = e),
        (e = t[2]),
        (t[2] = t[6]),
        (t[6] = e),
        (e = t[5]),
        (t[5] = t[7]),
        (t[7] = e),
        this
      );
    }
    getNormalMatrix(e) {
      return this.setFromMatrix4(e).invert().transpose();
    }
    transposeIntoArray(e) {
      const t = this.elements;
      return (
        (e[0] = t[0]),
        (e[1] = t[3]),
        (e[2] = t[6]),
        (e[3] = t[1]),
        (e[4] = t[4]),
        (e[5] = t[7]),
        (e[6] = t[2]),
        (e[7] = t[5]),
        (e[8] = t[8]),
        this
      );
    }
    setUvTransform(e, t, n, i, r, s, a) {
      const o = Math.cos(r),
        l = Math.sin(r);
      return (
        this.set(
          n * o,
          n * l,
          -n * (o * s + l * a) + s + e,
          -i * l,
          i * o,
          -i * (-l * s + o * a) + a + t,
          0,
          0,
          1
        ),
        this
      );
    }
    scale(e, t) {
      return this.premultiply(Ht.makeScale(e, t)), this;
    }
    rotate(e) {
      return this.premultiply(Ht.makeRotation(-e)), this;
    }
    translate(e, t) {
      return this.premultiply(Ht.makeTranslation(e, t)), this;
    }
    makeTranslation(e, t) {
      return this.set(1, 0, e, 0, 1, t, 0, 0, 1), this;
    }
    makeRotation(e) {
      const t = Math.cos(e),
        n = Math.sin(e);
      return this.set(t, -n, 0, n, t, 0, 0, 0, 1), this;
    }
    makeScale(e, t) {
      return this.set(e, 0, 0, 0, t, 0, 0, 0, 1), this;
    }
    equals(e) {
      const t = this.elements,
        n = e.elements;
      for (let e = 0; e < 9; e++) if (t[e] !== n[e]) return !1;
      return !0;
    }
    fromArray(e, t = 0) {
      for (let n = 0; n < 9; n++) this.elements[n] = e[n + t];
      return this;
    }
    toArray(e = [], t = 0) {
      const n = this.elements;
      return (
        (e[t] = n[0]),
        (e[t + 1] = n[1]),
        (e[t + 2] = n[2]),
        (e[t + 3] = n[3]),
        (e[t + 4] = n[4]),
        (e[t + 5] = n[5]),
        (e[t + 6] = n[6]),
        (e[t + 7] = n[7]),
        (e[t + 8] = n[8]),
        e
      );
    }
    clone() {
      return new this.constructor().fromArray(this.elements);
    }
  }
  const Ht = new kt();
  function Gt(e) {
    for (let t = e.length - 1; t >= 0; --t) if (e[t] >= 65535) return !0;
    return !1;
  }
  function Vt(e) {
    return document.createElementNS("http://www.w3.org/1999/xhtml", e);
  }
  Int8Array,
    Uint8Array,
    Uint8ClampedArray,
    Int16Array,
    Uint16Array,
    Int32Array,
    Uint32Array,
    Float32Array,
    Float64Array;
  class Wt {
    constructor(e = 0, t = 0, n = 0, i = 1) {
      (this.isQuaternion = !0),
        (this._x = e),
        (this._y = t),
        (this._z = n),
        (this._w = i);
    }
    static slerpFlat(e, t, n, i, r, s, a) {
      let o = n[i + 0],
        l = n[i + 1],
        c = n[i + 2],
        h = n[i + 3];
      const u = r[s + 0],
        d = r[s + 1],
        p = r[s + 2],
        f = r[s + 3];
      if (0 === a)
        return (
          (e[t + 0] = o), (e[t + 1] = l), (e[t + 2] = c), void (e[t + 3] = h)
        );
      if (1 === a)
        return (
          (e[t + 0] = u), (e[t + 1] = d), (e[t + 2] = p), void (e[t + 3] = f)
        );
      if (h !== f || o !== u || l !== d || c !== p) {
        let e = 1 - a;
        const t = o * u + l * d + c * p + h * f,
          n = t >= 0 ? 1 : -1,
          i = 1 - t * t;
        if (i > Number.EPSILON) {
          const r = Math.sqrt(i),
            s = Math.atan2(r, t * n);
          (e = Math.sin(e * s) / r), (a = Math.sin(a * s) / r);
        }
        const r = a * n;
        if (
          ((o = o * e + u * r),
          (l = l * e + d * r),
          (c = c * e + p * r),
          (h = h * e + f * r),
          e === 1 - a)
        ) {
          const e = 1 / Math.sqrt(o * o + l * l + c * c + h * h);
          (o *= e), (l *= e), (c *= e), (h *= e);
        }
      }
      (e[t] = o), (e[t + 1] = l), (e[t + 2] = c), (e[t + 3] = h);
    }
    static multiplyQuaternionsFlat(e, t, n, i, r, s) {
      const a = n[i],
        o = n[i + 1],
        l = n[i + 2],
        c = n[i + 3],
        h = r[s],
        u = r[s + 1],
        d = r[s + 2],
        p = r[s + 3];
      return (
        (e[t] = a * p + c * h + o * d - l * u),
        (e[t + 1] = o * p + c * u + l * h - a * d),
        (e[t + 2] = l * p + c * d + a * u - o * h),
        (e[t + 3] = c * p - a * h - o * u - l * d),
        e
      );
    }
    get x() {
      return this._x;
    }
    set x(e) {
      (this._x = e), this._onChangeCallback();
    }
    get y() {
      return this._y;
    }
    set y(e) {
      (this._y = e), this._onChangeCallback();
    }
    get z() {
      return this._z;
    }
    set z(e) {
      (this._z = e), this._onChangeCallback();
    }
    get w() {
      return this._w;
    }
    set w(e) {
      (this._w = e), this._onChangeCallback();
    }
    set(e, t, n, i) {
      return (
        (this._x = e),
        (this._y = t),
        (this._z = n),
        (this._w = i),
        this._onChangeCallback(),
        this
      );
    }
    clone() {
      return new this.constructor(this._x, this._y, this._z, this._w);
    }
    copy(e) {
      return (
        (this._x = e.x),
        (this._y = e.y),
        (this._z = e.z),
        (this._w = e.w),
        this._onChangeCallback(),
        this
      );
    }
    setFromEuler(e, t) {
      const n = e._x,
        i = e._y,
        r = e._z,
        s = e._order,
        a = Math.cos,
        o = Math.sin,
        l = a(n / 2),
        c = a(i / 2),
        h = a(r / 2),
        u = o(n / 2),
        d = o(i / 2),
        p = o(r / 2);
      switch (s) {
        case "XYZ":
          (this._x = u * c * h + l * d * p),
            (this._y = l * d * h - u * c * p),
            (this._z = l * c * p + u * d * h),
            (this._w = l * c * h - u * d * p);
          break;
        case "YXZ":
          (this._x = u * c * h + l * d * p),
            (this._y = l * d * h - u * c * p),
            (this._z = l * c * p - u * d * h),
            (this._w = l * c * h + u * d * p);
          break;
        case "ZXY":
          (this._x = u * c * h - l * d * p),
            (this._y = l * d * h + u * c * p),
            (this._z = l * c * p + u * d * h),
            (this._w = l * c * h - u * d * p);
          break;
        case "ZYX":
          (this._x = u * c * h - l * d * p),
            (this._y = l * d * h + u * c * p),
            (this._z = l * c * p - u * d * h),
            (this._w = l * c * h + u * d * p);
          break;
        case "YZX":
          (this._x = u * c * h + l * d * p),
            (this._y = l * d * h + u * c * p),
            (this._z = l * c * p - u * d * h),
            (this._w = l * c * h - u * d * p);
          break;
        case "XZY":
          (this._x = u * c * h - l * d * p),
            (this._y = l * d * h - u * c * p),
            (this._z = l * c * p + u * d * h),
            (this._w = l * c * h + u * d * p);
          break;
        default:
          console.warn(
            "THREE.Quaternion: .setFromEuler() encountered an unknown order: " +
              s
          );
      }
      return !1 !== t && this._onChangeCallback(), this;
    }
    setFromAxisAngle(e, t) {
      const n = t / 2,
        i = Math.sin(n);
      return (
        (this._x = e.x * i),
        (this._y = e.y * i),
        (this._z = e.z * i),
        (this._w = Math.cos(n)),
        this._onChangeCallback(),
        this
      );
    }
    setFromRotationMatrix(e) {
      const t = e.elements,
        n = t[0],
        i = t[4],
        r = t[8],
        s = t[1],
        a = t[5],
        o = t[9],
        l = t[2],
        c = t[6],
        h = t[10],
        u = n + a + h;
      if (u > 0) {
        const e = 0.5 / Math.sqrt(u + 1);
        (this._w = 0.25 / e),
          (this._x = (c - o) * e),
          (this._y = (r - l) * e),
          (this._z = (s - i) * e);
      } else if (n > a && n > h) {
        const e = 2 * Math.sqrt(1 + n - a - h);
        (this._w = (c - o) / e),
          (this._x = 0.25 * e),
          (this._y = (i + s) / e),
          (this._z = (r + l) / e);
      } else if (a > h) {
        const e = 2 * Math.sqrt(1 + a - n - h);
        (this._w = (r - l) / e),
          (this._x = (i + s) / e),
          (this._y = 0.25 * e),
          (this._z = (o + c) / e);
      } else {
        const e = 2 * Math.sqrt(1 + h - n - a);
        (this._w = (s - i) / e),
          (this._x = (r + l) / e),
          (this._y = (o + c) / e),
          (this._z = 0.25 * e);
      }
      return this._onChangeCallback(), this;
    }
    setFromUnitVectors(e, t) {
      let n = e.dot(t) + 1;
      return (
        n < Number.EPSILON
          ? ((n = 0),
            Math.abs(e.x) > Math.abs(e.z)
              ? ((this._x = -e.y),
                (this._y = e.x),
                (this._z = 0),
                (this._w = n))
              : ((this._x = 0),
                (this._y = -e.z),
                (this._z = e.y),
                (this._w = n)))
          : ((this._x = e.y * t.z - e.z * t.y),
            (this._y = e.z * t.x - e.x * t.z),
            (this._z = e.x * t.y - e.y * t.x),
            (this._w = n)),
        this.normalize()
      );
    }
    angleTo(e) {
      return 2 * Math.acos(Math.abs(Rt(this.dot(e), -1, 1)));
    }
    rotateTowards(e, t) {
      const n = this.angleTo(e);
      if (0 === n) return this;
      const i = Math.min(1, t / n);
      return this.slerp(e, i), this;
    }
    identity() {
      return this.set(0, 0, 0, 1);
    }
    invert() {
      return this.conjugate();
    }
    conjugate() {
      return (
        (this._x *= -1),
        (this._y *= -1),
        (this._z *= -1),
        this._onChangeCallback(),
        this
      );
    }
    dot(e) {
      return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w;
    }
    lengthSq() {
      return (
        this._x * this._x +
        this._y * this._y +
        this._z * this._z +
        this._w * this._w
      );
    }
    length() {
      return Math.sqrt(
        this._x * this._x +
          this._y * this._y +
          this._z * this._z +
          this._w * this._w
      );
    }
    normalize() {
      let e = this.length();
      return (
        0 === e
          ? ((this._x = 0), (this._y = 0), (this._z = 0), (this._w = 1))
          : ((e = 1 / e),
            (this._x = this._x * e),
            (this._y = this._y * e),
            (this._z = this._z * e),
            (this._w = this._w * e)),
        this._onChangeCallback(),
        this
      );
    }
    multiply(e) {
      return this.multiplyQuaternions(this, e);
    }
    premultiply(e) {
      return this.multiplyQuaternions(e, this);
    }
    multiplyQuaternions(e, t) {
      const n = e._x,
        i = e._y,
        r = e._z,
        s = e._w,
        a = t._x,
        o = t._y,
        l = t._z,
        c = t._w;
      return (
        (this._x = n * c + s * a + i * l - r * o),
        (this._y = i * c + s * o + r * a - n * l),
        (this._z = r * c + s * l + n * o - i * a),
        (this._w = s * c - n * a - i * o - r * l),
        this._onChangeCallback(),
        this
      );
    }
    slerp(e, t) {
      if (0 === t) return this;
      if (1 === t) return this.copy(e);
      const n = this._x,
        i = this._y,
        r = this._z,
        s = this._w;
      let a = s * e._w + n * e._x + i * e._y + r * e._z;
      if (
        (a < 0
          ? ((this._w = -e._w),
            (this._x = -e._x),
            (this._y = -e._y),
            (this._z = -e._z),
            (a = -a))
          : this.copy(e),
        a >= 1)
      )
        return (this._w = s), (this._x = n), (this._y = i), (this._z = r), this;
      const o = 1 - a * a;
      if (o <= Number.EPSILON) {
        const e = 1 - t;
        return (
          (this._w = e * s + t * this._w),
          (this._x = e * n + t * this._x),
          (this._y = e * i + t * this._y),
          (this._z = e * r + t * this._z),
          this.normalize(),
          this._onChangeCallback(),
          this
        );
      }
      const l = Math.sqrt(o),
        c = Math.atan2(l, a),
        h = Math.sin((1 - t) * c) / l,
        u = Math.sin(t * c) / l;
      return (
        (this._w = s * h + this._w * u),
        (this._x = n * h + this._x * u),
        (this._y = i * h + this._y * u),
        (this._z = r * h + this._z * u),
        this._onChangeCallback(),
        this
      );
    }
    slerpQuaternions(e, t, n) {
      return this.copy(e).slerp(t, n);
    }
    random() {
      const e = Math.random(),
        t = Math.sqrt(1 - e),
        n = Math.sqrt(e),
        i = 2 * Math.PI * Math.random(),
        r = 2 * Math.PI * Math.random();
      return this.set(
        t * Math.cos(i),
        n * Math.sin(r),
        n * Math.cos(r),
        t * Math.sin(i)
      );
    }
    equals(e) {
      return (
        e._x === this._x &&
        e._y === this._y &&
        e._z === this._z &&
        e._w === this._w
      );
    }
    fromArray(e, t = 0) {
      return (
        (this._x = e[t]),
        (this._y = e[t + 1]),
        (this._z = e[t + 2]),
        (this._w = e[t + 3]),
        this._onChangeCallback(),
        this
      );
    }
    toArray(e = [], t = 0) {
      return (
        (e[t] = this._x),
        (e[t + 1] = this._y),
        (e[t + 2] = this._z),
        (e[t + 3] = this._w),
        e
      );
    }
    fromBufferAttribute(e, t) {
      return (
        (this._x = e.getX(t)),
        (this._y = e.getY(t)),
        (this._z = e.getZ(t)),
        (this._w = e.getW(t)),
        this
      );
    }
    _onChange(e) {
      return (this._onChangeCallback = e), this;
    }
    _onChangeCallback() {}
    *[Symbol.iterator]() {
      yield this._x, yield this._y, yield this._z, yield this._w;
    }
  }
  class jt {
    constructor(e = 0, t = 0, n = 0) {
      (jt.prototype.isVector3 = !0), (this.x = e), (this.y = t), (this.z = n);
    }
    set(e, t, n) {
      return (
        void 0 === n && (n = this.z),
        (this.x = e),
        (this.y = t),
        (this.z = n),
        this
      );
    }
    setScalar(e) {
      return (this.x = e), (this.y = e), (this.z = e), this;
    }
    setX(e) {
      return (this.x = e), this;
    }
    setY(e) {
      return (this.y = e), this;
    }
    setZ(e) {
      return (this.z = e), this;
    }
    setComponent(e, t) {
      switch (e) {
        case 0:
          this.x = t;
          break;
        case 1:
          this.y = t;
          break;
        case 2:
          this.z = t;
          break;
        default:
          throw new Error("index is out of range: " + e);
      }
      return this;
    }
    getComponent(e) {
      switch (e) {
        case 0:
          return this.x;
        case 1:
          return this.y;
        case 2:
          return this.z;
        default:
          throw new Error("index is out of range: " + e);
      }
    }
    clone() {
      return new this.constructor(this.x, this.y, this.z);
    }
    copy(e) {
      return (this.x = e.x), (this.y = e.y), (this.z = e.z), this;
    }
    add(e) {
      return (this.x += e.x), (this.y += e.y), (this.z += e.z), this;
    }
    addScalar(e) {
      return (this.x += e), (this.y += e), (this.z += e), this;
    }
    addVectors(e, t) {
      return (
        (this.x = e.x + t.x), (this.y = e.y + t.y), (this.z = e.z + t.z), this
      );
    }
    addScaledVector(e, t) {
      return (
        (this.x += e.x * t), (this.y += e.y * t), (this.z += e.z * t), this
      );
    }
    sub(e) {
      return (this.x -= e.x), (this.y -= e.y), (this.z -= e.z), this;
    }
    subScalar(e) {
      return (this.x -= e), (this.y -= e), (this.z -= e), this;
    }
    subVectors(e, t) {
      return (
        (this.x = e.x - t.x), (this.y = e.y - t.y), (this.z = e.z - t.z), this
      );
    }
    multiply(e) {
      return (this.x *= e.x), (this.y *= e.y), (this.z *= e.z), this;
    }
    multiplyScalar(e) {
      return (this.x *= e), (this.y *= e), (this.z *= e), this;
    }
    multiplyVectors(e, t) {
      return (
        (this.x = e.x * t.x), (this.y = e.y * t.y), (this.z = e.z * t.z), this
      );
    }
    applyEuler(e) {
      return this.applyQuaternion(qt.setFromEuler(e));
    }
    applyAxisAngle(e, t) {
      return this.applyQuaternion(qt.setFromAxisAngle(e, t));
    }
    applyMatrix3(e) {
      const t = this.x,
        n = this.y,
        i = this.z,
        r = e.elements;
      return (
        (this.x = r[0] * t + r[3] * n + r[6] * i),
        (this.y = r[1] * t + r[4] * n + r[7] * i),
        (this.z = r[2] * t + r[5] * n + r[8] * i),
        this
      );
    }
    applyNormalMatrix(e) {
      return this.applyMatrix3(e).normalize();
    }
    applyMatrix4(e) {
      const t = this.x,
        n = this.y,
        i = this.z,
        r = e.elements,
        s = 1 / (r[3] * t + r[7] * n + r[11] * i + r[15]);
      return (
        (this.x = (r[0] * t + r[4] * n + r[8] * i + r[12]) * s),
        (this.y = (r[1] * t + r[5] * n + r[9] * i + r[13]) * s),
        (this.z = (r[2] * t + r[6] * n + r[10] * i + r[14]) * s),
        this
      );
    }
    applyQuaternion(e) {
      const t = this.x,
        n = this.y,
        i = this.z,
        r = e.x,
        s = e.y,
        a = e.z,
        o = e.w,
        l = o * t + s * i - a * n,
        c = o * n + a * t - r * i,
        h = o * i + r * n - s * t,
        u = -r * t - s * n - a * i;
      return (
        (this.x = l * o + u * -r + c * -a - h * -s),
        (this.y = c * o + u * -s + h * -r - l * -a),
        (this.z = h * o + u * -a + l * -s - c * -r),
        this
      );
    }
    project(e) {
      return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(
        e.projectionMatrix
      );
    }
    unproject(e) {
      return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(
        e.matrixWorld
      );
    }
    transformDirection(e) {
      const t = this.x,
        n = this.y,
        i = this.z,
        r = e.elements;
      return (
        (this.x = r[0] * t + r[4] * n + r[8] * i),
        (this.y = r[1] * t + r[5] * n + r[9] * i),
        (this.z = r[2] * t + r[6] * n + r[10] * i),
        this.normalize()
      );
    }
    divide(e) {
      return (this.x /= e.x), (this.y /= e.y), (this.z /= e.z), this;
    }
    divideScalar(e) {
      return this.multiplyScalar(1 / e);
    }
    min(e) {
      return (
        (this.x = Math.min(this.x, e.x)),
        (this.y = Math.min(this.y, e.y)),
        (this.z = Math.min(this.z, e.z)),
        this
      );
    }
    max(e) {
      return (
        (this.x = Math.max(this.x, e.x)),
        (this.y = Math.max(this.y, e.y)),
        (this.z = Math.max(this.z, e.z)),
        this
      );
    }
    clamp(e, t) {
      return (
        (this.x = Math.max(e.x, Math.min(t.x, this.x))),
        (this.y = Math.max(e.y, Math.min(t.y, this.y))),
        (this.z = Math.max(e.z, Math.min(t.z, this.z))),
        this
      );
    }
    clampScalar(e, t) {
      return (
        (this.x = Math.max(e, Math.min(t, this.x))),
        (this.y = Math.max(e, Math.min(t, this.y))),
        (this.z = Math.max(e, Math.min(t, this.z))),
        this
      );
    }
    clampLength(e, t) {
      const n = this.length();
      return this.divideScalar(n || 1).multiplyScalar(
        Math.max(e, Math.min(t, n))
      );
    }
    floor() {
      return (
        (this.x = Math.floor(this.x)),
        (this.y = Math.floor(this.y)),
        (this.z = Math.floor(this.z)),
        this
      );
    }
    ceil() {
      return (
        (this.x = Math.ceil(this.x)),
        (this.y = Math.ceil(this.y)),
        (this.z = Math.ceil(this.z)),
        this
      );
    }
    round() {
      return (
        (this.x = Math.round(this.x)),
        (this.y = Math.round(this.y)),
        (this.z = Math.round(this.z)),
        this
      );
    }
    roundToZero() {
      return (
        (this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x)),
        (this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y)),
        (this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z)),
        this
      );
    }
    negate() {
      return (this.x = -this.x), (this.y = -this.y), (this.z = -this.z), this;
    }
    dot(e) {
      return this.x * e.x + this.y * e.y + this.z * e.z;
    }
    lengthSq() {
      return this.x * this.x + this.y * this.y + this.z * this.z;
    }
    length() {
      return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
    }
    manhattanLength() {
      return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
    }
    normalize() {
      return this.divideScalar(this.length() || 1);
    }
    setLength(e) {
      return this.normalize().multiplyScalar(e);
    }
    lerp(e, t) {
      return (
        (this.x += (e.x - this.x) * t),
        (this.y += (e.y - this.y) * t),
        (this.z += (e.z - this.z) * t),
        this
      );
    }
    lerpVectors(e, t, n) {
      return (
        (this.x = e.x + (t.x - e.x) * n),
        (this.y = e.y + (t.y - e.y) * n),
        (this.z = e.z + (t.z - e.z) * n),
        this
      );
    }
    cross(e) {
      return this.crossVectors(this, e);
    }
    crossVectors(e, t) {
      const n = e.x,
        i = e.y,
        r = e.z,
        s = t.x,
        a = t.y,
        o = t.z;
      return (
        (this.x = i * o - r * a),
        (this.y = r * s - n * o),
        (this.z = n * a - i * s),
        this
      );
    }
    projectOnVector(e) {
      const t = e.lengthSq();
      if (0 === t) return this.set(0, 0, 0);
      const n = e.dot(this) / t;
      return this.copy(e).multiplyScalar(n);
    }
    projectOnPlane(e) {
      return Xt.copy(this).projectOnVector(e), this.sub(Xt);
    }
    reflect(e) {
      return this.sub(Xt.copy(e).multiplyScalar(2 * this.dot(e)));
    }
    angleTo(e) {
      const t = Math.sqrt(this.lengthSq() * e.lengthSq());
      if (0 === t) return Math.PI / 2;
      const n = this.dot(e) / t;
      return Math.acos(Rt(n, -1, 1));
    }
    distanceTo(e) {
      return Math.sqrt(this.distanceToSquared(e));
    }
    distanceToSquared(e) {
      const t = this.x - e.x,
        n = this.y - e.y,
        i = this.z - e.z;
      return t * t + n * n + i * i;
    }
    manhattanDistanceTo(e) {
      return (
        Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z)
      );
    }
    setFromSpherical(e) {
      return this.setFromSphericalCoords(e.radius, e.phi, e.theta);
    }
    setFromSphericalCoords(e, t, n) {
      const i = Math.sin(t) * e;
      return (
        (this.x = i * Math.sin(n)),
        (this.y = Math.cos(t) * e),
        (this.z = i * Math.cos(n)),
        this
      );
    }
    setFromCylindrical(e) {
      return this.setFromCylindricalCoords(e.radius, e.theta, e.y);
    }
    setFromCylindricalCoords(e, t, n) {
      return (
        (this.x = e * Math.sin(t)),
        (this.y = n),
        (this.z = e * Math.cos(t)),
        this
      );
    }
    setFromMatrixPosition(e) {
      const t = e.elements;
      return (this.x = t[12]), (this.y = t[13]), (this.z = t[14]), this;
    }
    setFromMatrixScale(e) {
      const t = this.setFromMatrixColumn(e, 0).length(),
        n = this.setFromMatrixColumn(e, 1).length(),
        i = this.setFromMatrixColumn(e, 2).length();
      return (this.x = t), (this.y = n), (this.z = i), this;
    }
    setFromMatrixColumn(e, t) {
      return this.fromArray(e.elements, 4 * t);
    }
    setFromMatrix3Column(e, t) {
      return this.fromArray(e.elements, 3 * t);
    }
    setFromEuler(e) {
      return (this.x = e._x), (this.y = e._y), (this.z = e._z), this;
    }
    equals(e) {
      return e.x === this.x && e.y === this.y && e.z === this.z;
    }
    fromArray(e, t = 0) {
      return (this.x = e[t]), (this.y = e[t + 1]), (this.z = e[t + 2]), this;
    }
    toArray(e = [], t = 0) {
      return (e[t] = this.x), (e[t + 1] = this.y), (e[t + 2] = this.z), e;
    }
    fromBufferAttribute(e, t) {
      return (
        (this.x = e.getX(t)), (this.y = e.getY(t)), (this.z = e.getZ(t)), this
      );
    }
    random() {
      return (
        (this.x = Math.random()),
        (this.y = Math.random()),
        (this.z = Math.random()),
        this
      );
    }
    randomDirection() {
      const e = 2 * (Math.random() - 0.5),
        t = Math.random() * Math.PI * 2,
        n = Math.sqrt(1 - e ** 2);
      return (
        (this.x = n * Math.cos(t)),
        (this.y = n * Math.sin(t)),
        (this.z = e),
        this
      );
    }
    *[Symbol.iterator]() {
      yield this.x, yield this.y, yield this.z;
    }
  }
  const Xt = new jt(),
    qt = new Wt();
  function Yt(e) {
    return e < 0.04045
      ? 0.0773993808 * e
      : Math.pow(0.9478672986 * e + 0.0521327014, 2.4);
  }
  function Kt(e) {
    return e < 0.0031308 ? 12.92 * e : 1.055 * Math.pow(e, 0.41666) - 0.055;
  }
  const Zt = new kt().fromArray([
      0.8224621, 0.0331941, 0.0170827, 0.177538, 0.9668058, 0.0723974, -1e-7,
      1e-7, 0.9105199,
    ]),
    Jt = new kt().fromArray([
      1.2249401, -0.0420569, -0.0196376, -0.2249404, 1.0420571, -0.0786361,
      1e-7, 0, 1.0982735,
    ]),
    Qt = new jt(),
    $t = {
      [xt]: (e) => e,
      [vt]: (e) => e.convertSRGBToLinear(),
      [yt]: function (e) {
        return (
          e.convertSRGBToLinear(),
          Qt.set(e.r, e.g, e.b).applyMatrix3(Jt),
          e.setRGB(Qt.x, Qt.y, Qt.z)
        );
      },
    },
    en = {
      [xt]: (e) => e,
      [vt]: (e) => e.convertLinearToSRGB(),
      [yt]: function (e) {
        return (
          Qt.set(e.r, e.g, e.b).applyMatrix3(Zt),
          e.setRGB(Qt.x, Qt.y, Qt.z).convertLinearToSRGB()
        );
      },
    },
    tn = {
      enabled: !1,
      get legacyMode() {
        return (
          console.warn(
            "THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."
          ),
          !this.enabled
        );
      },
      set legacyMode(e) {
        console.warn(
          "THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."
        ),
          (this.enabled = !e);
      },
      get workingColorSpace() {
        return xt;
      },
      set workingColorSpace(e) {
        console.warn("THREE.ColorManagement: .workingColorSpace is readonly.");
      },
      convert: function (e, t, n) {
        if (!1 === this.enabled || t === n || !t || !n) return e;
        const i = $t[t],
          r = en[n];
        if (void 0 === i || void 0 === r)
          throw new Error(
            `Unsupported color space conversion, "${t}" to "${n}".`
          );
        return r(i(e));
      },
      fromWorkingColorSpace: function (e, t) {
        return this.convert(e, this.workingColorSpace, t);
      },
      toWorkingColorSpace: function (e, t) {
        return this.convert(e, t, this.workingColorSpace);
      },
    };
  let nn;
  class rn {
    static getDataURL(e) {
      if (/^data:/i.test(e.src)) return e.src;
      if ("undefined" == typeof HTMLCanvasElement) return e.src;
      let t;
      if (e instanceof HTMLCanvasElement) t = e;
      else {
        void 0 === nn && (nn = Vt("canvas")),
          (nn.width = e.width),
          (nn.height = e.height);
        const n = nn.getContext("2d");
        e instanceof ImageData
          ? n.putImageData(e, 0, 0)
          : n.drawImage(e, 0, 0, e.width, e.height),
          (t = nn);
      }
      return t.width > 2048 || t.height > 2048
        ? (console.warn(
            "THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",
            e
          ),
          t.toDataURL("image/jpeg", 0.6))
        : t.toDataURL("image/png");
    }
    static sRGBToLinear(e) {
      if (
        ("undefined" != typeof HTMLImageElement &&
          e instanceof HTMLImageElement) ||
        ("undefined" != typeof HTMLCanvasElement &&
          e instanceof HTMLCanvasElement) ||
        ("undefined" != typeof ImageBitmap && e instanceof ImageBitmap)
      ) {
        const t = Vt("canvas");
        (t.width = e.width), (t.height = e.height);
        const n = t.getContext("2d");
        n.drawImage(e, 0, 0, e.width, e.height);
        const i = n.getImageData(0, 0, e.width, e.height),
          r = i.data;
        for (let e = 0; e < r.length; e++) r[e] = 255 * Yt(r[e] / 255);
        return n.putImageData(i, 0, 0), t;
      }
      if (e.data) {
        const t = e.data.slice(0);
        for (let e = 0; e < t.length; e++)
          t instanceof Uint8Array || t instanceof Uint8ClampedArray
            ? (t[e] = Math.floor(255 * Yt(t[e] / 255)))
            : (t[e] = Yt(t[e]));
        return { data: t, width: e.width, height: e.height };
      }
      return (
        console.warn(
          "THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."
        ),
        e
      );
    }
  }
  class sn {
    constructor(e = null) {
      (this.isSource = !0),
        (this.uuid = Ct()),
        (this.data = e),
        (this.version = 0);
    }
    set needsUpdate(e) {
      !0 === e && this.version++;
    }
    toJSON(e) {
      const t = void 0 === e || "string" == typeof e;
      if (!t && void 0 !== e.images[this.uuid]) return e.images[this.uuid];
      const n = { uuid: this.uuid, url: "" },
        i = this.data;
      if (null !== i) {
        let e;
        if (Array.isArray(i)) {
          e = [];
          for (let t = 0, n = i.length; t < n; t++)
            i[t].isDataTexture ? e.push(an(i[t].image)) : e.push(an(i[t]));
        } else e = an(i);
        n.url = e;
      }
      return t || (e.images[this.uuid] = n), n;
    }
  }
  function an(e) {
    return ("undefined" != typeof HTMLImageElement &&
      e instanceof HTMLImageElement) ||
      ("undefined" != typeof HTMLCanvasElement &&
        e instanceof HTMLCanvasElement) ||
      ("undefined" != typeof ImageBitmap && e instanceof ImageBitmap)
      ? rn.getDataURL(e)
      : e.data
      ? {
          data: Array.from(e.data),
          width: e.width,
          height: e.height,
          type: e.data.constructor.name,
        }
      : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
  }
  let on = 0;
  class ln extends Tt {
    constructor(
      e = ln.DEFAULT_IMAGE,
      t = ln.DEFAULT_MAPPING,
      n = te,
      i = te,
      r = ae,
      s = le,
      a = Me,
      o = ce,
      l = ln.DEFAULT_ANISOTROPY,
      c = pt
    ) {
      super(),
        (this.isTexture = !0),
        Object.defineProperty(this, "id", { value: on++ }),
        (this.uuid = Ct()),
        (this.name = ""),
        (this.source = new sn(e)),
        (this.mipmaps = []),
        (this.mapping = t),
        (this.wrapS = n),
        (this.wrapT = i),
        (this.magFilter = r),
        (this.minFilter = s),
        (this.anisotropy = l),
        (this.format = a),
        (this.internalFormat = null),
        (this.type = o),
        (this.offset = new Bt(0, 0)),
        (this.repeat = new Bt(1, 1)),
        (this.center = new Bt(0, 0)),
        (this.rotation = 0),
        (this.matrixAutoUpdate = !0),
        (this.matrix = new kt()),
        (this.generateMipmaps = !0),
        (this.premultiplyAlpha = !1),
        (this.flipY = !0),
        (this.unpackAlignment = 4),
        (this.encoding = c),
        (this.userData = {}),
        (this.version = 0),
        (this.onUpdate = null),
        (this.isRenderTargetTexture = !1),
        (this.needsPMREMUpdate = !1);
    }
    get image() {
      return this.source.data;
    }
    set image(e = null) {
      this.source.data = e;
    }
    updateMatrix() {
      this.matrix.setUvTransform(
        this.offset.x,
        this.offset.y,
        this.repeat.x,
        this.repeat.y,
        this.rotation,
        this.center.x,
        this.center.y
      );
    }
    clone() {
      return new this.constructor().copy(this);
    }
    copy(e) {
      return (
        (this.name = e.name),
        (this.source = e.source),
        (this.mipmaps = e.mipmaps.slice(0)),
        (this.mapping = e.mapping),
        (this.wrapS = e.wrapS),
        (this.wrapT = e.wrapT),
        (this.magFilter = e.magFilter),
        (this.minFilter = e.minFilter),
        (this.anisotropy = e.anisotropy),
        (this.format = e.format),
        (this.internalFormat = e.internalFormat),
        (this.type = e.type),
        this.offset.copy(e.offset),
        this.repeat.copy(e.repeat),
        this.center.copy(e.center),
        (this.rotation = e.rotation),
        (this.matrixAutoUpdate = e.matrixAutoUpdate),
        this.matrix.copy(e.matrix),
        (this.generateMipmaps = e.generateMipmaps),
        (this.premultiplyAlpha = e.premultiplyAlpha),
        (this.flipY = e.flipY),
        (this.unpackAlignment = e.unpackAlignment),
        (this.encoding = e.encoding),
        (this.userData = JSON.parse(JSON.stringify(e.userData))),
        (this.needsUpdate = !0),
        this
      );
    }
    toJSON(e) {
      const t = void 0 === e || "string" == typeof e;
      if (!t && void 0 !== e.textures[this.uuid]) return e.textures[this.uuid];
      const n = {
        metadata: {
          version: 4.5,
          type: "Texture",
          generator: "Texture.toJSON",
        },
        uuid: this.uuid,
        name: this.name,
        image: this.source.toJSON(e).uuid,
        mapping: this.mapping,
        repeat: [this.repeat.x, this.repeat.y],
        offset: [this.offset.x, this.offset.y],
        center: [this.center.x, this.center.y],
        rotation: this.rotation,
        wrap: [this.wrapS, this.wrapT],
        format: this.format,
        internalFormat: this.internalFormat,
        type: this.type,
        encoding: this.encoding,
        minFilter: this.minFilter,
        magFilter: this.magFilter,
        anisotropy: this.anisotropy,
        flipY: this.flipY,
        generateMipmaps: this.generateMipmaps,
        premultiplyAlpha: this.premultiplyAlpha,
        unpackAlignment: this.unpackAlignment,
      };
      return (
        Object.keys(this.userData).length > 0 && (n.userData = this.userData),
        t || (e.textures[this.uuid] = n),
        n
      );
    }
    dispose() {
      this.dispatchEvent({ type: "dispose" });
    }
    transformUv(e) {
      if (300 !== this.mapping) return e;
      if ((e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1))
        switch (this.wrapS) {
          case ee:
            e.x = e.x - Math.floor(e.x);
            break;
          case te:
            e.x = e.x < 0 ? 0 : 1;
            break;
          case ne:
            1 === Math.abs(Math.floor(e.x) % 2)
              ? (e.x = Math.ceil(e.x) - e.x)
              : (e.x = e.x - Math.floor(e.x));
        }
      if (e.y < 0 || e.y > 1)
        switch (this.wrapT) {
          case ee:
            e.y = e.y - Math.floor(e.y);
            break;
          case te:
            e.y = e.y < 0 ? 0 : 1;
            break;
          case ne:
            1 === Math.abs(Math.floor(e.y) % 2)
              ? (e.y = Math.ceil(e.y) - e.y)
              : (e.y = e.y - Math.floor(e.y));
        }
      return this.flipY && (e.y = 1 - e.y), e;
    }
    set needsUpdate(e) {
      !0 === e && (this.version++, (this.source.needsUpdate = !0));
    }
  }
  (ln.DEFAULT_IMAGE = null),
    (ln.DEFAULT_MAPPING = 300),
    (ln.DEFAULT_ANISOTROPY = 1);
  class cn {
    constructor(e = 0, t = 0, n = 0, i = 1) {
      (cn.prototype.isVector4 = !0),
        (this.x = e),
        (this.y = t),
        (this.z = n),
        (this.w = i);
    }
    get width() {
      return this.z;
    }
    set width(e) {
      this.z = e;
    }
    get height() {
      return this.w;
    }
    set height(e) {
      this.w = e;
    }
    set(e, t, n, i) {
      return (this.x = e), (this.y = t), (this.z = n), (this.w = i), this;
    }
    setScalar(e) {
      return (this.x = e), (this.y = e), (this.z = e), (this.w = e), this;
    }
    setX(e) {
      return (this.x = e), this;
    }
    setY(e) {
      return (this.y = e), this;
    }
    setZ(e) {
      return (this.z = e), this;
    }
    setW(e) {
      return (this.w = e), this;
    }
    setComponent(e, t) {
      switch (e) {
        case 0:
          this.x = t;
          break;
        case 1:
          this.y = t;
          break;
        case 2:
          this.z = t;
          break;
        case 3:
          this.w = t;
          break;
        default:
          throw new Error("index is out of range: " + e);
      }
      return this;
    }
    getComponent(e) {
      switch (e) {
        case 0:
          return this.x;
        case 1:
          return this.y;
        case 2:
          return this.z;
        case 3:
          return this.w;
        default:
          throw new Error("index is out of range: " + e);
      }
    }
    clone() {
      return new this.constructor(this.x, this.y, this.z, this.w);
    }
    copy(e) {
      return (
        (this.x = e.x),
        (this.y = e.y),
        (this.z = e.z),
        (this.w = void 0 !== e.w ? e.w : 1),
        this
      );
    }
    add(e) {
      return (
        (this.x += e.x), (this.y += e.y), (this.z += e.z), (this.w += e.w), this
      );
    }
    addScalar(e) {
      return (this.x += e), (this.y += e), (this.z += e), (this.w += e), this;
    }
    addVectors(e, t) {
      return (
        (this.x = e.x + t.x),
        (this.y = e.y + t.y),
        (this.z = e.z + t.z),
        (this.w = e.w + t.w),
        this
      );
    }
    addScaledVector(e, t) {
      return (
        (this.x += e.x * t),
        (this.y += e.y * t),
        (this.z += e.z * t),
        (this.w += e.w * t),
        this
      );
    }
    sub(e) {
      return (
        (this.x -= e.x), (this.y -= e.y), (this.z -= e.z), (this.w -= e.w), this
      );
    }
    subScalar(e) {
      return (this.x -= e), (this.y -= e), (this.z -= e), (this.w -= e), this;
    }
    subVectors(e, t) {
      return (
        (this.x = e.x - t.x),
        (this.y = e.y - t.y),
        (this.z = e.z - t.z),
        (this.w = e.w - t.w),
        this
      );
    }
    multiply(e) {
      return (
        (this.x *= e.x), (this.y *= e.y), (this.z *= e.z), (this.w *= e.w), this
      );
    }
    multiplyScalar(e) {
      return (this.x *= e), (this.y *= e), (this.z *= e), (this.w *= e), this;
    }
    applyMatrix4(e) {
      const t = this.x,
        n = this.y,
        i = this.z,
        r = this.w,
        s = e.elements;
      return (
        (this.x = s[0] * t + s[4] * n + s[8] * i + s[12] * r),
        (this.y = s[1] * t + s[5] * n + s[9] * i + s[13] * r),
        (this.z = s[2] * t + s[6] * n + s[10] * i + s[14] * r),
        (this.w = s[3] * t + s[7] * n + s[11] * i + s[15] * r),
        this
      );
    }
    divideScalar(e) {
      return this.multiplyScalar(1 / e);
    }
    setAxisAngleFromQuaternion(e) {
      this.w = 2 * Math.acos(e.w);
      const t = Math.sqrt(1 - e.w * e.w);
      return (
        t < 1e-4
          ? ((this.x = 1), (this.y = 0), (this.z = 0))
          : ((this.x = e.x / t), (this.y = e.y / t), (this.z = e.z / t)),
        this
      );
    }
    setAxisAngleFromRotationMatrix(e) {
      let t, n, i, r;
      const s = 0.01,
        a = 0.1,
        o = e.elements,
        l = o[0],
        c = o[4],
        h = o[8],
        u = o[1],
        d = o[5],
        p = o[9],
        f = o[2],
        m = o[6],
        g = o[10];
      if (Math.abs(c - u) < s && Math.abs(h - f) < s && Math.abs(p - m) < s) {
        if (
          Math.abs(c + u) < a &&
          Math.abs(h + f) < a &&
          Math.abs(p + m) < a &&
          Math.abs(l + d + g - 3) < a
        )
          return this.set(1, 0, 0, 0), this;
        t = Math.PI;
        const e = (l + 1) / 2,
          o = (d + 1) / 2,
          _ = (g + 1) / 2,
          v = (c + u) / 4,
          x = (h + f) / 4,
          y = (p + m) / 4;
        return (
          e > o && e > _
            ? e < s
              ? ((n = 0), (i = 0.707106781), (r = 0.707106781))
              : ((n = Math.sqrt(e)), (i = v / n), (r = x / n))
            : o > _
            ? o < s
              ? ((n = 0.707106781), (i = 0), (r = 0.707106781))
              : ((i = Math.sqrt(o)), (n = v / i), (r = y / i))
            : _ < s
            ? ((n = 0.707106781), (i = 0.707106781), (r = 0))
            : ((r = Math.sqrt(_)), (n = x / r), (i = y / r)),
          this.set(n, i, r, t),
          this
        );
      }
      let _ = Math.sqrt(
        (m - p) * (m - p) + (h - f) * (h - f) + (u - c) * (u - c)
      );
      return (
        Math.abs(_) < 0.001 && (_ = 1),
        (this.x = (m - p) / _),
        (this.y = (h - f) / _),
        (this.z = (u - c) / _),
        (this.w = Math.acos((l + d + g - 1) / 2)),
        this
      );
    }
    min(e) {
      return (
        (this.x = Math.min(this.x, e.x)),
        (this.y = Math.min(this.y, e.y)),
        (this.z = Math.min(this.z, e.z)),
        (this.w = Math.min(this.w, e.w)),
        this
      );
    }
    max(e) {
      return (
        (this.x = Math.max(this.x, e.x)),
        (this.y = Math.max(this.y, e.y)),
        (this.z = Math.max(this.z, e.z)),
        (this.w = Math.max(this.w, e.w)),
        this
      );
    }
    clamp(e, t) {
      return (
        (this.x = Math.max(e.x, Math.min(t.x, this.x))),
        (this.y = Math.max(e.y, Math.min(t.y, this.y))),
        (this.z = Math.max(e.z, Math.min(t.z, this.z))),
        (this.w = Math.max(e.w, Math.min(t.w, this.w))),
        this
      );
    }
    clampScalar(e, t) {
      return (
        (this.x = Math.max(e, Math.min(t, this.x))),
        (this.y = Math.max(e, Math.min(t, this.y))),
        (this.z = Math.max(e, Math.min(t, this.z))),
        (this.w = Math.max(e, Math.min(t, this.w))),
        this
      );
    }
    clampLength(e, t) {
      const n = this.length();
      return this.divideScalar(n || 1).multiplyScalar(
        Math.max(e, Math.min(t, n))
      );
    }
    floor() {
      return (
        (this.x = Math.floor(this.x)),
        (this.y = Math.floor(this.y)),
        (this.z = Math.floor(this.z)),
        (this.w = Math.floor(this.w)),
        this
      );
    }
    ceil() {
      return (
        (this.x = Math.ceil(this.x)),
        (this.y = Math.ceil(this.y)),
        (this.z = Math.ceil(this.z)),
        (this.w = Math.ceil(this.w)),
        this
      );
    }
    round() {
      return (
        (this.x = Math.round(this.x)),
        (this.y = Math.round(this.y)),
        (this.z = Math.round(this.z)),
        (this.w = Math.round(this.w)),
        this
      );
    }
    roundToZero() {
      return (
        (this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x)),
        (this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y)),
        (this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z)),
        (this.w = this.w < 0 ? Math.ceil(this.w) : Math.floor(this.w)),
        this
      );
    }
    negate() {
      return (
        (this.x = -this.x),
        (this.y = -this.y),
        (this.z = -this.z),
        (this.w = -this.w),
        this
      );
    }
    dot(e) {
      return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w;
    }
    lengthSq() {
      return (
        this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
      );
    }
    length() {
      return Math.sqrt(
        this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
      );
    }
    manhattanLength() {
      return (
        Math.abs(this.x) +
        Math.abs(this.y) +
        Math.abs(this.z) +
        Math.abs(this.w)
      );
    }
    normalize() {
      return this.divideScalar(this.length() || 1);
    }
    setLength(e) {
      return this.normalize().multiplyScalar(e);
    }
    lerp(e, t) {
      return (
        (this.x += (e.x - this.x) * t),
        (this.y += (e.y - this.y) * t),
        (this.z += (e.z - this.z) * t),
        (this.w += (e.w - this.w) * t),
        this
      );
    }
    lerpVectors(e, t, n) {
      return (
        (this.x = e.x + (t.x - e.x) * n),
        (this.y = e.y + (t.y - e.y) * n),
        (this.z = e.z + (t.z - e.z) * n),
        (this.w = e.w + (t.w - e.w) * n),
        this
      );
    }
    equals(e) {
      return (
        e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w
      );
    }
    fromArray(e, t = 0) {
      return (
        (this.x = e[t]),
        (this.y = e[t + 1]),
        (this.z = e[t + 2]),
        (this.w = e[t + 3]),
        this
      );
    }
    toArray(e = [], t = 0) {
      return (
        (e[t] = this.x),
        (e[t + 1] = this.y),
        (e[t + 2] = this.z),
        (e[t + 3] = this.w),
        e
      );
    }
    fromBufferAttribute(e, t) {
      return (
        (this.x = e.getX(t)),
        (this.y = e.getY(t)),
        (this.z = e.getZ(t)),
        (this.w = e.getW(t)),
        this
      );
    }
    random() {
      return (
        (this.x = Math.random()),
        (this.y = Math.random()),
        (this.z = Math.random()),
        (this.w = Math.random()),
        this
      );
    }
    *[Symbol.iterator]() {
      yield this.x, yield this.y, yield this.z, yield this.w;
    }
  }
  class hn extends Tt {
    constructor(e = 1, t = 1, n = {}) {
      super(),
        (this.isWebGLRenderTarget = !0),
        (this.width = e),
        (this.height = t),
        (this.depth = 1),
        (this.scissor = new cn(0, 0, e, t)),
        (this.scissorTest = !1),
        (this.viewport = new cn(0, 0, e, t));
      const i = { width: e, height: t, depth: 1 };
      (this.texture = new ln(
        i,
        n.mapping,
        n.wrapS,
        n.wrapT,
        n.magFilter,
        n.minFilter,
        n.format,
        n.type,
        n.anisotropy,
        n.encoding
      )),
        (this.texture.isRenderTargetTexture = !0),
        (this.texture.flipY = !1),
        (this.texture.generateMipmaps =
          void 0 !== n.generateMipmaps && n.generateMipmaps),
        (this.texture.internalFormat =
          void 0 !== n.internalFormat ? n.internalFormat : null),
        (this.texture.minFilter = void 0 !== n.minFilter ? n.minFilter : ae),
        (this.depthBuffer = void 0 === n.depthBuffer || n.depthBuffer),
        (this.stencilBuffer = void 0 !== n.stencilBuffer && n.stencilBuffer),
        (this.depthTexture = void 0 !== n.depthTexture ? n.depthTexture : null),
        (this.samples = void 0 !== n.samples ? n.samples : 0);
    }
    setSize(e, t, n = 1) {
      (this.width === e && this.height === t && this.depth === n) ||
        ((this.width = e),
        (this.height = t),
        (this.depth = n),
        (this.texture.image.width = e),
        (this.texture.image.height = t),
        (this.texture.image.depth = n),
        this.dispose()),
        this.viewport.set(0, 0, e, t),
        this.scissor.set(0, 0, e, t);
    }
    clone() {
      return new this.constructor().copy(this);
    }
    copy(e) {
      (this.width = e.width),
        (this.height = e.height),
        (this.depth = e.depth),
        this.viewport.copy(e.viewport),
        (this.texture = e.texture.clone()),
        (this.texture.isRenderTargetTexture = !0);
      const t = Object.assign({}, e.texture.image);
      return (
        (this.texture.source = new sn(t)),
        (this.depthBuffer = e.depthBuffer),
        (this.stencilBuffer = e.stencilBuffer),
        null !== e.depthTexture && (this.depthTexture = e.depthTexture.clone()),
        (this.samples = e.samples),
        this
      );
    }
    dispose() {
      this.dispatchEvent({ type: "dispose" });
    }
  }
  class un extends ln {
    constructor(e = null, t = 1, n = 1, i = 1) {
      super(null),
        (this.isDataArrayTexture = !0),
        (this.image = { data: e, width: t, height: n, depth: i }),
        (this.magFilter = ie),
        (this.minFilter = ie),
        (this.wrapR = te),
        (this.generateMipmaps = !1),
        (this.flipY = !1),
        (this.unpackAlignment = 1);
    }
  }
  class dn extends ln {
    constructor(e = null, t = 1, n = 1, i = 1) {
      super(null),
        (this.isData3DTexture = !0),
        (this.image = { data: e, width: t, height: n, depth: i }),
        (this.magFilter = ie),
        (this.minFilter = ie),
        (this.wrapR = te),
        (this.generateMipmaps = !1),
        (this.flipY = !1),
        (this.unpackAlignment = 1);
    }
  }
  class pn {
    constructor(
      e = new jt(1 / 0, 1 / 0, 1 / 0),
      t = new jt(-1 / 0, -1 / 0, -1 / 0)
    ) {
      (this.isBox3 = !0), (this.min = e), (this.max = t);
    }
    set(e, t) {
      return this.min.copy(e), this.max.copy(t), this;
    }
    setFromArray(e) {
      let t = 1 / 0,
        n = 1 / 0,
        i = 1 / 0,
        r = -1 / 0,
        s = -1 / 0,
        a = -1 / 0;
      for (let o = 0, l = e.length; o < l; o += 3) {
        const l = e[o],
          c = e[o + 1],
          h = e[o + 2];
        l < t && (t = l),
          c < n && (n = c),
          h < i && (i = h),
          l > r && (r = l),
          c > s && (s = c),
          h > a && (a = h);
      }
      return this.min.set(t, n, i), this.max.set(r, s, a), this;
    }
    setFromBufferAttribute(e) {
      let t = 1 / 0,
        n = 1 / 0,
        i = 1 / 0,
        r = -1 / 0,
        s = -1 / 0,
        a = -1 / 0;
      for (let o = 0, l = e.count; o < l; o++) {
        const l = e.getX(o),
          c = e.getY(o),
          h = e.getZ(o);
        l < t && (t = l),
          c < n && (n = c),
          h < i && (i = h),
          l > r && (r = l),
          c > s && (s = c),
          h > a && (a = h);
      }
      return this.min.set(t, n, i), this.max.set(r, s, a), this;
    }
    setFromPoints(e) {
      this.makeEmpty();
      for (let t = 0, n = e.length; t < n; t++) this.expandByPoint(e[t]);
      return this;
    }
    setFromCenterAndSize(e, t) {
      const n = mn.copy(t).multiplyScalar(0.5);
      return this.min.copy(e).sub(n), this.max.copy(e).add(n), this;
    }
    setFromObject(e, t = !1) {
      return this.makeEmpty(), this.expandByObject(e, t);
    }
    clone() {
      return new this.constructor().copy(this);
    }
    copy(e) {
      return this.min.copy(e.min), this.max.copy(e.max), this;
    }
    makeEmpty() {
      return (
        (this.min.x = this.min.y = this.min.z = 1 / 0),
        (this.max.x = this.max.y = this.max.z = -1 / 0),
        this
      );
    }
    isEmpty() {
      return (
        this.max.x < this.min.x ||
        this.max.y < this.min.y ||
        this.max.z < this.min.z
      );
    }
    getCenter(e) {
      return this.isEmpty()
        ? e.set(0, 0, 0)
        : e.addVectors(this.min, this.max).multiplyScalar(0.5);
    }
    getSize(e) {
      return this.isEmpty() ? e.set(0, 0, 0) : e.subVectors(this.max, this.min);
    }
    expandByPoint(e) {
      return this.min.min(e), this.max.max(e), this;
    }
    expandByVector(e) {
      return this.min.sub(e), this.max.add(e), this;
    }
    expandByScalar(e) {
      return this.min.addScalar(-e), this.max.addScalar(e), this;
    }
    expandByObject(e, t = !1) {
      e.updateWorldMatrix(!1, !1);
      const n = e.geometry;
      if (void 0 !== n)
        if (t && null != n.attributes && void 0 !== n.attributes.position) {
          const t = n.attributes.position;
          for (let n = 0, i = t.count; n < i; n++)
            mn.fromBufferAttribute(t, n).applyMatrix4(e.matrixWorld),
              this.expandByPoint(mn);
        } else
          null === n.boundingBox && n.computeBoundingBox(),
            gn.copy(n.boundingBox),
            gn.applyMatrix4(e.matrixWorld),
            this.union(gn);
      const i = e.children;
      for (let e = 0, n = i.length; e < n; e++) this.expandByObject(i[e], t);
      return this;
    }
    containsPoint(e) {
      return !(
        e.x < this.min.x ||
        e.x > this.max.x ||
        e.y < this.min.y ||
        e.y > this.max.y ||
        e.z < this.min.z ||
        e.z > this.max.z
      );
    }
    containsBox(e) {
      return (
        this.min.x <= e.min.x &&
        e.max.x <= this.max.x &&
        this.min.y <= e.min.y &&
        e.max.y <= this.max.y &&
        this.min.z <= e.min.z &&
        e.max.z <= this.max.z
      );
    }
    getParameter(e, t) {
      return t.set(
        (e.x - this.min.x) / (this.max.x - this.min.x),
        (e.y - this.min.y) / (this.max.y - this.min.y),
        (e.z - this.min.z) / (this.max.z - this.min.z)
      );
    }
    intersectsBox(e) {
      return !(
        e.max.x < this.min.x ||
        e.min.x > this.max.x ||
        e.max.y < this.min.y ||
        e.min.y > this.max.y ||
        e.max.z < this.min.z ||
        e.min.z > this.max.z
      );
    }
    intersectsSphere(e) {
      return (
        this.clampPoint(e.center, mn),
        mn.distanceToSquared(e.center) <= e.radius * e.radius
      );
    }
    intersectsPlane(e) {
      let t, n;
      return (
        e.normal.x > 0
          ? ((t = e.normal.x * this.min.x), (n = e.normal.x * this.max.x))
          : ((t = e.normal.x * this.max.x), (n = e.normal.x * this.min.x)),
        e.normal.y > 0
          ? ((t += e.normal.y * this.min.y), (n += e.normal.y * this.max.y))
          : ((t += e.normal.y * this.max.y), (n += e.normal.y * this.min.y)),
        e.normal.z > 0
          ? ((t += e.normal.z * this.min.z), (n += e.normal.z * this.max.z))
          : ((t += e.normal.z * this.max.z), (n += e.normal.z * this.min.z)),
        t <= -e.constant && n >= -e.constant
      );
    }
    intersectsTriangle(e) {
      if (this.isEmpty()) return !1;
      this.getCenter(Sn),
        wn.subVectors(this.max, Sn),
        _n.subVectors(e.a, Sn),
        vn.subVectors(e.b, Sn),
        xn.subVectors(e.c, Sn),
        yn.subVectors(vn, _n),
        Mn.subVectors(xn, vn),
        bn.subVectors(_n, xn);
      let t = [
        0,
        -yn.z,
        yn.y,
        0,
        -Mn.z,
        Mn.y,
        0,
        -bn.z,
        bn.y,
        yn.z,
        0,
        -yn.x,
        Mn.z,
        0,
        -Mn.x,
        bn.z,
        0,
        -bn.x,
        -yn.y,
        yn.x,
        0,
        -Mn.y,
        Mn.x,
        0,
        -bn.y,
        bn.x,
        0,
      ];
      return (
        !!An(t, _n, vn, xn, wn) &&
        ((t = [1, 0, 0, 0, 1, 0, 0, 0, 1]),
        !!An(t, _n, vn, xn, wn) &&
          (Tn.crossVectors(yn, Mn),
          (t = [Tn.x, Tn.y, Tn.z]),
          An(t, _n, vn, xn, wn)))
      );
    }
    clampPoint(e, t) {
      return t.copy(e).clamp(this.min, this.max);
    }
    distanceToPoint(e) {
      return this.clampPoint(e, mn).distanceTo(e);
    }
    getBoundingSphere(e) {
      return (
        this.isEmpty()
          ? e.makeEmpty()
          : (this.getCenter(e.center),
            (e.radius = 0.5 * this.getSize(mn).length())),
        e
      );
    }
    intersect(e) {
      return (
        this.min.max(e.min),
        this.max.min(e.max),
        this.isEmpty() && this.makeEmpty(),
        this
      );
    }
    union(e) {
      return this.min.min(e.min), this.max.max(e.max), this;
    }
    applyMatrix4(e) {
      return (
        this.isEmpty() ||
          (fn[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e),
          fn[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e),
          fn[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e),
          fn[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e),
          fn[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e),
          fn[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e),
          fn[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e),
          fn[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e),
          this.setFromPoints(fn)),
        this
      );
    }
    translate(e) {
      return this.min.add(e), this.max.add(e), this;
    }
    equals(e) {
      return e.min.equals(this.min) && e.max.equals(this.max);
    }
  }
  const fn = [
      new jt(),
      new jt(),
      new jt(),
      new jt(),
      new jt(),
      new jt(),
      new jt(),
      new jt(),
    ],
    mn = new jt(),
    gn = new pn(),
    _n = new jt(),
    vn = new jt(),
    xn = new jt(),
    yn = new jt(),
    Mn = new jt(),
    bn = new jt(),
    Sn = new jt(),
    wn = new jt(),
    Tn = new jt(),
    En = new jt();
  function An(e, t, n, i, r) {
    for (let s = 0, a = e.length - 3; s <= a; s += 3) {
      En.fromArray(e, s);
      const a =
          r.x * Math.abs(En.x) + r.y * Math.abs(En.y) + r.z * Math.abs(En.z),
        o = t.dot(En),
        l = n.dot(En),
        c = i.dot(En);
      if (Math.max(-Math.max(o, l, c), Math.min(o, l, c)) > a) return !1;
    }
    return !0;
  }
  const Ln = new pn(),
    Cn = new jt(),
    Rn = new jt();
  class Pn {
    constructor(e = new jt(), t = -1) {
      (this.center = e), (this.radius = t);
    }
    set(e, t) {
      return this.center.copy(e), (this.radius = t), this;
    }
    setFromPoints(e, t) {
      const n = this.center;
      void 0 !== t ? n.copy(t) : Ln.setFromPoints(e).getCenter(n);
      let i = 0;
      for (let t = 0, r = e.length; t < r; t++)
        i = Math.max(i, n.distanceToSquared(e[t]));
      return (this.radius = Math.sqrt(i)), this;
    }
    copy(e) {
      return this.center.copy(e.center), (this.radius = e.radius), this;
    }
    isEmpty() {
      return this.radius < 0;
    }
    makeEmpty() {
      return this.center.set(0, 0, 0), (this.radius = -1), this;
    }
    containsPoint(e) {
      return e.distanceToSquared(this.center) <= this.radius * this.radius;
    }
    distanceToPoint(e) {
      return e.distanceTo(this.center) - this.radius;
    }
    intersectsSphere(e) {
      const t = this.radius + e.radius;
      return e.center.distanceToSquared(this.center) <= t * t;
    }
    intersectsBox(e) {
      return e.intersectsSphere(this);
    }
    intersectsPlane(e) {
      return Math.abs(e.distanceToPoint(this.center)) <= this.radius;
    }
    clampPoint(e, t) {
      const n = this.center.distanceToSquared(e);
      return (
        t.copy(e),
        n > this.radius * this.radius &&
          (t.sub(this.center).normalize(),
          t.multiplyScalar(this.radius).add(this.center)),
        t
      );
    }
    getBoundingBox(e) {
      return this.isEmpty()
        ? (e.makeEmpty(), e)
        : (e.set(this.center, this.center), e.expandByScalar(this.radius), e);
    }
    applyMatrix4(e) {
      return (
        this.center.applyMatrix4(e),
        (this.radius = this.radius * e.getMaxScaleOnAxis()),
        this
      );
    }
    translate(e) {
      return this.center.add(e), this;
    }
    expandByPoint(e) {
      if (this.isEmpty()) return this.center.copy(e), (this.radius = 0), this;
      Cn.subVectors(e, this.center);
      const t = Cn.lengthSq();
      if (t > this.radius * this.radius) {
        const e = Math.sqrt(t),
          n = 0.5 * (e - this.radius);
        this.center.addScaledVector(Cn, n / e), (this.radius += n);
      }
      return this;
    }
    union(e) {
      return e.isEmpty()
        ? this
        : this.isEmpty()
        ? (this.copy(e), this)
        : (!0 === this.center.equals(e.center)
            ? (this.radius = Math.max(this.radius, e.radius))
            : (Rn.subVectors(e.center, this.center).setLength(e.radius),
              this.expandByPoint(Cn.copy(e.center).add(Rn)),
              this.expandByPoint(Cn.copy(e.center).sub(Rn))),
          this);
    }
    equals(e) {
      return e.center.equals(this.center) && e.radius === this.radius;
    }
    clone() {
      return new this.constructor().copy(this);
    }
  }
  const Dn = new jt(),
    In = new jt(),
    Nn = new jt(),
    On = new jt(),
    Un = new jt(),
    zn = new jt(),
    Fn = new jt();
  class Bn {
    constructor(e = new jt(), t = new jt(0, 0, -1)) {
      (this.origin = e), (this.direction = t);
    }
    set(e, t) {
      return this.origin.copy(e), this.direction.copy(t), this;
    }
    copy(e) {
      return this.origin.copy(e.origin), this.direction.copy(e.direction), this;
    }
    at(e, t) {
      return t.copy(this.origin).addScaledVector(this.direction, e);
    }
    lookAt(e) {
      return this.direction.copy(e).sub(this.origin).normalize(), this;
    }
    recast(e) {
      return this.origin.copy(this.at(e, Dn)), this;
    }
    closestPointToPoint(e, t) {
      t.subVectors(e, this.origin);
      const n = t.dot(this.direction);
      return n < 0
        ? t.copy(this.origin)
        : t.copy(this.origin).addScaledVector(this.direction, n);
    }
    distanceToPoint(e) {
      return Math.sqrt(this.distanceSqToPoint(e));
    }
    distanceSqToPoint(e) {
      const t = Dn.subVectors(e, this.origin).dot(this.direction);
      return t < 0
        ? this.origin.distanceToSquared(e)
        : (Dn.copy(this.origin).addScaledVector(this.direction, t),
          Dn.distanceToSquared(e));
    }
    distanceSqToSegment(e, t, n, i) {
      In.copy(e).add(t).multiplyScalar(0.5),
        Nn.copy(t).sub(e).normalize(),
        On.copy(this.origin).sub(In);
      const r = 0.5 * e.distanceTo(t),
        s = -this.direction.dot(Nn),
        a = On.dot(this.direction),
        o = -On.dot(Nn),
        l = On.lengthSq(),
        c = Math.abs(1 - s * s);
      let h, u, d, p;
      if (c > 0)
        if (((h = s * o - a), (u = s * a - o), (p = r * c), h >= 0))
          if (u >= -p)
            if (u <= p) {
              const e = 1 / c;
              (h *= e),
                (u *= e),
                (d = h * (h + s * u + 2 * a) + u * (s * h + u + 2 * o) + l);
            } else
              (u = r),
                (h = Math.max(0, -(s * u + a))),
                (d = -h * h + u * (u + 2 * o) + l);
          else
            (u = -r),
              (h = Math.max(0, -(s * u + a))),
              (d = -h * h + u * (u + 2 * o) + l);
        else
          u <= -p
            ? ((h = Math.max(0, -(-s * r + a))),
              (u = h > 0 ? -r : Math.min(Math.max(-r, -o), r)),
              (d = -h * h + u * (u + 2 * o) + l))
            : u <= p
            ? ((h = 0),
              (u = Math.min(Math.max(-r, -o), r)),
              (d = u * (u + 2 * o) + l))
            : ((h = Math.max(0, -(s * r + a))),
              (u = h > 0 ? r : Math.min(Math.max(-r, -o), r)),
              (d = -h * h + u * (u + 2 * o) + l));
      else
        (u = s > 0 ? -r : r),
          (h = Math.max(0, -(s * u + a))),
          (d = -h * h + u * (u + 2 * o) + l);
      return (
        n && n.copy(this.origin).addScaledVector(this.direction, h),
        i && i.copy(In).addScaledVector(Nn, u),
        d
      );
    }
    intersectSphere(e, t) {
      Dn.subVectors(e.center, this.origin);
      const n = Dn.dot(this.direction),
        i = Dn.dot(Dn) - n * n,
        r = e.radius * e.radius;
      if (i > r) return null;
      const s = Math.sqrt(r - i),
        a = n - s,
        o = n + s;
      return o < 0 ? null : a < 0 ? this.at(o, t) : this.at(a, t);
    }
    intersectsSphere(e) {
      return this.distanceSqToPoint(e.center) <= e.radius * e.radius;
    }
    distanceToPlane(e) {
      const t = e.normal.dot(this.direction);
      if (0 === t) return 0 === e.distanceToPoint(this.origin) ? 0 : null;
      const n = -(this.origin.dot(e.normal) + e.constant) / t;
      return n >= 0 ? n : null;
    }
    intersectPlane(e, t) {
      const n = this.distanceToPlane(e);
      return null === n ? null : this.at(n, t);
    }
    intersectsPlane(e) {
      const t = e.distanceToPoint(this.origin);
      return 0 === t || e.normal.dot(this.direction) * t < 0;
    }
    intersectBox(e, t) {
      let n, i, r, s, a, o;
      const l = 1 / this.direction.x,
        c = 1 / this.direction.y,
        h = 1 / this.direction.z,
        u = this.origin;
      return (
        l >= 0
          ? ((n = (e.min.x - u.x) * l), (i = (e.max.x - u.x) * l))
          : ((n = (e.max.x - u.x) * l), (i = (e.min.x - u.x) * l)),
        c >= 0
          ? ((r = (e.min.y - u.y) * c), (s = (e.max.y - u.y) * c))
          : ((r = (e.max.y - u.y) * c), (s = (e.min.y - u.y) * c)),
        n > s || r > i
          ? null
          : ((r > n || isNaN(n)) && (n = r),
            (s < i || isNaN(i)) && (i = s),
            h >= 0
              ? ((a = (e.min.z - u.z) * h), (o = (e.max.z - u.z) * h))
              : ((a = (e.max.z - u.z) * h), (o = (e.min.z - u.z) * h)),
            n > o || a > i
              ? null
              : ((a > n || n != n) && (n = a),
                (o < i || i != i) && (i = o),
                i < 0 ? null : this.at(n >= 0 ? n : i, t)))
      );
    }
    intersectsBox(e) {
      return null !== this.intersectBox(e, Dn);
    }
    intersectTriangle(e, t, n, i, r) {
      Un.subVectors(t, e), zn.subVectors(n, e), Fn.crossVectors(Un, zn);
      let s,
        a = this.direction.dot(Fn);
      if (a > 0) {
        if (i) return null;
        s = 1;
      } else {
        if (!(a < 0)) return null;
        (s = -1), (a = -a);
      }
      On.subVectors(this.origin, e);
      const o = s * this.direction.dot(zn.crossVectors(On, zn));
      if (o < 0) return null;
      const l = s * this.direction.dot(Un.cross(On));
      if (l < 0) return null;
      if (o + l > a) return null;
      const c = -s * On.dot(Fn);
      return c < 0 ? null : this.at(c / a, r);
    }
    applyMatrix4(e) {
      return (
        this.origin.applyMatrix4(e), this.direction.transformDirection(e), this
      );
    }
    equals(e) {
      return e.origin.equals(this.origin) && e.direction.equals(this.direction);
    }
    clone() {
      return new this.constructor().copy(this);
    }
  }
  class kn {
    constructor() {
      (kn.prototype.isMatrix4 = !0),
        (this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
    }
    set(e, t, n, i, r, s, a, o, l, c, h, u, d, p, f, m) {
      const g = this.elements;
      return (
        (g[0] = e),
        (g[4] = t),
        (g[8] = n),
        (g[12] = i),
        (g[1] = r),
        (g[5] = s),
        (g[9] = a),
        (g[13] = o),
        (g[2] = l),
        (g[6] = c),
        (g[10] = h),
        (g[14] = u),
        (g[3] = d),
        (g[7] = p),
        (g[11] = f),
        (g[15] = m),
        this
      );
    }
    identity() {
      return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
    }
    clone() {
      return new kn().fromArray(this.elements);
    }
    copy(e) {
      const t = this.elements,
        n = e.elements;
      return (
        (t[0] = n[0]),
        (t[1] = n[1]),
        (t[2] = n[2]),
        (t[3] = n[3]),
        (t[4] = n[4]),
        (t[5] = n[5]),
        (t[6] = n[6]),
        (t[7] = n[7]),
        (t[8] = n[8]),
        (t[9] = n[9]),
        (t[10] = n[10]),
        (t[11] = n[11]),
        (t[12] = n[12]),
        (t[13] = n[13]),
        (t[14] = n[14]),
        (t[15] = n[15]),
        this
      );
    }
    copyPosition(e) {
      const t = this.elements,
        n = e.elements;
      return (t[12] = n[12]), (t[13] = n[13]), (t[14] = n[14]), this;
    }
    setFromMatrix3(e) {
      const t = e.elements;
      return (
        this.set(
          t[0],
          t[3],
          t[6],
          0,
          t[1],
          t[4],
          t[7],
          0,
          t[2],
          t[5],
          t[8],
          0,
          0,
          0,
          0,
          1
        ),
        this
      );
    }
    extractBasis(e, t, n) {
      return (
        e.setFromMatrixColumn(this, 0),
        t.setFromMatrixColumn(this, 1),
        n.setFromMatrixColumn(this, 2),
        this
      );
    }
    makeBasis(e, t, n) {
      return (
        this.set(
          e.x,
          t.x,
          n.x,
          0,
          e.y,
          t.y,
          n.y,
          0,
          e.z,
          t.z,
          n.z,
          0,
          0,
          0,
          0,
          1
        ),
        this
      );
    }
    extractRotation(e) {
      const t = this.elements,
        n = e.elements,
        i = 1 / Hn.setFromMatrixColumn(e, 0).length(),
        r = 1 / Hn.setFromMatrixColumn(e, 1).length(),
        s = 1 / Hn.setFromMatrixColumn(e, 2).length();
      return (
        (t[0] = n[0] * i),
        (t[1] = n[1] * i),
        (t[2] = n[2] * i),
        (t[3] = 0),
        (t[4] = n[4] * r),
        (t[5] = n[5] * r),
        (t[6] = n[6] * r),
        (t[7] = 0),
        (t[8] = n[8] * s),
        (t[9] = n[9] * s),
        (t[10] = n[10] * s),
        (t[11] = 0),
        (t[12] = 0),
        (t[13] = 0),
        (t[14] = 0),
        (t[15] = 1),
        this
      );
    }
    makeRotationFromEuler(e) {
      const t = this.elements,
        n = e.x,
        i = e.y,
        r = e.z,
        s = Math.cos(n),
        a = Math.sin(n),
        o = Math.cos(i),
        l = Math.sin(i),
        c = Math.cos(r),
        h = Math.sin(r);
      if ("XYZ" === e.order) {
        const e = s * c,
          n = s * h,
          i = a * c,
          r = a * h;
        (t[0] = o * c),
          (t[4] = -o * h),
          (t[8] = l),
          (t[1] = n + i * l),
          (t[5] = e - r * l),
          (t[9] = -a * o),
          (t[2] = r - e * l),
          (t[6] = i + n * l),
          (t[10] = s * o);
      } else if ("YXZ" === e.order) {
        const e = o * c,
          n = o * h,
          i = l * c,
          r = l * h;
        (t[0] = e + r * a),
          (t[4] = i * a - n),
          (t[8] = s * l),
          (t[1] = s * h),
          (t[5] = s * c),
          (t[9] = -a),
          (t[2] = n * a - i),
          (t[6] = r + e * a),
          (t[10] = s * o);
      } else if ("ZXY" === e.order) {
        const e = o * c,
          n = o * h,
          i = l * c,
          r = l * h;
        (t[0] = e - r * a),
          (t[4] = -s * h),
          (t[8] = i + n * a),
          (t[1] = n + i * a),
          (t[5] = s * c),
          (t[9] = r - e * a),
          (t[2] = -s * l),
          (t[6] = a),
          (t[10] = s * o);
      } else if ("ZYX" === e.order) {
        const e = s * c,
          n = s * h,
          i = a * c,
          r = a * h;
        (t[0] = o * c),
          (t[4] = i * l - n),
          (t[8] = e * l + r),
          (t[1] = o * h),
          (t[5] = r * l + e),
          (t[9] = n * l - i),
          (t[2] = -l),
          (t[6] = a * o),
          (t[10] = s * o);
      } else if ("YZX" === e.order) {
        const e = s * o,
          n = s * l,
          i = a * o,
          r = a * l;
        (t[0] = o * c),
          (t[4] = r - e * h),
          (t[8] = i * h + n),
          (t[1] = h),
          (t[5] = s * c),
          (t[9] = -a * c),
          (t[2] = -l * c),
          (t[6] = n * h + i),
          (t[10] = e - r * h);
      } else if ("XZY" === e.order) {
        const e = s * o,
          n = s * l,
          i = a * o,
          r = a * l;
        (t[0] = o * c),
          (t[4] = -h),
          (t[8] = l * c),
          (t[1] = e * h + r),
          (t[5] = s * c),
          (t[9] = n * h - i),
          (t[2] = i * h - n),
          (t[6] = a * c),
          (t[10] = r * h + e);
      }
      return (
        (t[3] = 0),
        (t[7] = 0),
        (t[11] = 0),
        (t[12] = 0),
        (t[13] = 0),
        (t[14] = 0),
        (t[15] = 1),
        this
      );
    }
    makeRotationFromQuaternion(e) {
      return this.compose(Vn, e, Wn);
    }
    lookAt(e, t, n) {
      const i = this.elements;
      return (
        qn.subVectors(e, t),
        0 === qn.lengthSq() && (qn.z = 1),
        qn.normalize(),
        jn.crossVectors(n, qn),
        0 === jn.lengthSq() &&
          (1 === Math.abs(n.z) ? (qn.x += 1e-4) : (qn.z += 1e-4),
          qn.normalize(),
          jn.crossVectors(n, qn)),
        jn.normalize(),
        Xn.crossVectors(qn, jn),
        (i[0] = jn.x),
        (i[4] = Xn.x),
        (i[8] = qn.x),
        (i[1] = jn.y),
        (i[5] = Xn.y),
        (i[9] = qn.y),
        (i[2] = jn.z),
        (i[6] = Xn.z),
        (i[10] = qn.z),
        this
      );
    }
    multiply(e) {
      return this.multiplyMatrices(this, e);
    }
    premultiply(e) {
      return this.multiplyMatrices(e, this);
    }
    multiplyMatrices(e, t) {
      const n = e.elements,
        i = t.elements,
        r = this.elements,
        s = n[0],
        a = n[4],
        o = n[8],
        l = n[12],
        c = n[1],
        h = n[5],
        u = n[9],
        d = n[13],
        p = n[2],
        f = n[6],
        m = n[10],
        g = n[14],
        _ = n[3],
        v = n[7],
        x = n[11],
        y = n[15],
        M = i[0],
        b = i[4],
        S = i[8],
        w = i[12],
        T = i[1],
        E = i[5],
        A = i[9],
        L = i[13],
        C = i[2],
        R = i[6],
        P = i[10],
        D = i[14],
        I = i[3],
        N = i[7],
        O = i[11],
        U = i[15];
      return (
        (r[0] = s * M + a * T + o * C + l * I),
        (r[4] = s * b + a * E + o * R + l * N),
        (r[8] = s * S + a * A + o * P + l * O),
        (r[12] = s * w + a * L + o * D + l * U),
        (r[1] = c * M + h * T + u * C + d * I),
        (r[5] = c * b + h * E + u * R + d * N),
        (r[9] = c * S + h * A + u * P + d * O),
        (r[13] = c * w + h * L + u * D + d * U),
        (r[2] = p * M + f * T + m * C + g * I),
        (r[6] = p * b + f * E + m * R + g * N),
        (r[10] = p * S + f * A + m * P + g * O),
        (r[14] = p * w + f * L + m * D + g * U),
        (r[3] = _ * M + v * T + x * C + y * I),
        (r[7] = _ * b + v * E + x * R + y * N),
        (r[11] = _ * S + v * A + x * P + y * O),
        (r[15] = _ * w + v * L + x * D + y * U),
        this
      );
    }
    multiplyScalar(e) {
      const t = this.elements;
      return (
        (t[0] *= e),
        (t[4] *= e),
        (t[8] *= e),
        (t[12] *= e),
        (t[1] *= e),
        (t[5] *= e),
        (t[9] *= e),
        (t[13] *= e),
        (t[2] *= e),
        (t[6] *= e),
        (t[10] *= e),
        (t[14] *= e),
        (t[3] *= e),
        (t[7] *= e),
        (t[11] *= e),
        (t[15] *= e),
        this
      );
    }
    determinant() {
      const e = this.elements,
        t = e[0],
        n = e[4],
        i = e[8],
        r = e[12],
        s = e[1],
        a = e[5],
        o = e[9],
        l = e[13],
        c = e[2],
        h = e[6],
        u = e[10],
        d = e[14];
      return (
        e[3] *
          (+r * o * h -
            i * l * h -
            r * a * u +
            n * l * u +
            i * a * d -
            n * o * d) +
        e[7] *
          (+t * o * d -
            t * l * u +
            r * s * u -
            i * s * d +
            i * l * c -
            r * o * c) +
        e[11] *
          (+t * l * h -
            t * a * d -
            r * s * h +
            n * s * d +
            r * a * c -
            n * l * c) +
        e[15] *
          (-i * a * c -
            t * o * h +
            t * a * u +
            i * s * h -
            n * s * u +
            n * o * c)
      );
    }
    transpose() {
      const e = this.elements;
      let t;
      return (
        (t = e[1]),
        (e[1] = e[4]),
        (e[4] = t),
        (t = e[2]),
        (e[2] = e[8]),
        (e[8] = t),
        (t = e[6]),
        (e[6] = e[9]),
        (e[9] = t),
        (t = e[3]),
        (e[3] = e[12]),
        (e[12] = t),
        (t = e[7]),
        (e[7] = e[13]),
        (e[13] = t),
        (t = e[11]),
        (e[11] = e[14]),
        (e[14] = t),
        this
      );
    }
    setPosition(e, t, n) {
      const i = this.elements;
      return (
        e.isVector3
          ? ((i[12] = e.x), (i[13] = e.y), (i[14] = e.z))
          : ((i[12] = e), (i[13] = t), (i[14] = n)),
        this
      );
    }
    invert() {
      const e = this.elements,
        t = e[0],
        n = e[1],
        i = e[2],
        r = e[3],
        s = e[4],
        a = e[5],
        o = e[6],
        l = e[7],
        c = e[8],
        h = e[9],
        u = e[10],
        d = e[11],
        p = e[12],
        f = e[13],
        m = e[14],
        g = e[15],
        _ =
          h * m * l - f * u * l + f * o * d - a * m * d - h * o * g + a * u * g,
        v =
          p * u * l - c * m * l - p * o * d + s * m * d + c * o * g - s * u * g,
        x =
          c * f * l - p * h * l + p * a * d - s * f * d - c * a * g + s * h * g,
        y =
          p * h * o - c * f * o - p * a * u + s * f * u + c * a * m - s * h * m,
        M = t * _ + n * v + i * x + r * y;
      if (0 === M)
        return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
      const b = 1 / M;
      return (
        (e[0] = _ * b),
        (e[1] =
          (f * u * r -
            h * m * r -
            f * i * d +
            n * m * d +
            h * i * g -
            n * u * g) *
          b),
        (e[2] =
          (a * m * r -
            f * o * r +
            f * i * l -
            n * m * l -
            a * i * g +
            n * o * g) *
          b),
        (e[3] =
          (h * o * r -
            a * u * r -
            h * i * l +
            n * u * l +
            a * i * d -
            n * o * d) *
          b),
        (e[4] = v * b),
        (e[5] =
          (c * m * r -
            p * u * r +
            p * i * d -
            t * m * d -
            c * i * g +
            t * u * g) *
          b),
        (e[6] =
          (p * o * r -
            s * m * r -
            p * i * l +
            t * m * l +
            s * i * g -
            t * o * g) *
          b),
        (e[7] =
          (s * u * r -
            c * o * r +
            c * i * l -
            t * u * l -
            s * i * d +
            t * o * d) *
          b),
        (e[8] = x * b),
        (e[9] =
          (p * h * r -
            c * f * r -
            p * n * d +
            t * f * d +
            c * n * g -
            t * h * g) *
          b),
        (e[10] =
          (s * f * r -
            p * a * r +
            p * n * l -
            t * f * l -
            s * n * g +
            t * a * g) *
          b),
        (e[11] =
          (c * a * r -
            s * h * r -
            c * n * l +
            t * h * l +
            s * n * d -
            t * a * d) *
          b),
        (e[12] = y * b),
        (e[13] =
          (c * f * i -
            p * h * i +
            p * n * u -
            t * f * u -
            c * n * m +
            t * h * m) *
          b),
        (e[14] =
          (p * a * i -
            s * f * i -
            p * n * o +
            t * f * o +
            s * n * m -
            t * a * m) *
          b),
        (e[15] =
          (s * h * i -
            c * a * i +
            c * n * o -
            t * h * o -
            s * n * u +
            t * a * u) *
          b),
        this
      );
    }
    scale(e) {
      const t = this.elements,
        n = e.x,
        i = e.y,
        r = e.z;
      return (
        (t[0] *= n),
        (t[4] *= i),
        (t[8] *= r),
        (t[1] *= n),
        (t[5] *= i),
        (t[9] *= r),
        (t[2] *= n),
        (t[6] *= i),
        (t[10] *= r),
        (t[3] *= n),
        (t[7] *= i),
        (t[11] *= r),
        this
      );
    }
    getMaxScaleOnAxis() {
      const e = this.elements,
        t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2],
        n = e[4] * e[4] + e[5] * e[5] + e[6] * e[6],
        i = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
      return Math.sqrt(Math.max(t, n, i));
    }
    makeTranslation(e, t, n) {
      return this.set(1, 0, 0, e, 0, 1, 0, t, 0, 0, 1, n, 0, 0, 0, 1), this;
    }
    makeRotationX(e) {
      const t = Math.cos(e),
        n = Math.sin(e);
      return this.set(1, 0, 0, 0, 0, t, -n, 0, 0, n, t, 0, 0, 0, 0, 1), this;
    }
    makeRotationY(e) {
      const t = Math.cos(e),
        n = Math.sin(e);
      return this.set(t, 0, n, 0, 0, 1, 0, 0, -n, 0, t, 0, 0, 0, 0, 1), this;
    }
    makeRotationZ(e) {
      const t = Math.cos(e),
        n = Math.sin(e);
      return this.set(t, -n, 0, 0, n, t, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
    }
    makeRotationAxis(e, t) {
      const n = Math.cos(t),
        i = Math.sin(t),
        r = 1 - n,
        s = e.x,
        a = e.y,
        o = e.z,
        l = r * s,
        c = r * a;
      return (
        this.set(
          l * s + n,
          l * a - i * o,
          l * o + i * a,
          0,
          l * a + i * o,
          c * a + n,
          c * o - i * s,
          0,
          l * o - i * a,
          c * o + i * s,
          r * o * o + n,
          0,
          0,
          0,
          0,
          1
        ),
        this
      );
    }
    makeScale(e, t, n) {
      return this.set(e, 0, 0, 0, 0, t, 0, 0, 0, 0, n, 0, 0, 0, 0, 1), this;
    }
    makeShear(e, t, n, i, r, s) {
      return this.set(1, n, r, 0, e, 1, s, 0, t, i, 1, 0, 0, 0, 0, 1), this;
    }
    compose(e, t, n) {
      const i = this.elements,
        r = t._x,
        s = t._y,
        a = t._z,
        o = t._w,
        l = r + r,
        c = s + s,
        h = a + a,
        u = r * l,
        d = r * c,
        p = r * h,
        f = s * c,
        m = s * h,
        g = a * h,
        _ = o * l,
        v = o * c,
        x = o * h,
        y = n.x,
        M = n.y,
        b = n.z;
      return (
        (i[0] = (1 - (f + g)) * y),
        (i[1] = (d + x) * y),
        (i[2] = (p - v) * y),
        (i[3] = 0),
        (i[4] = (d - x) * M),
        (i[5] = (1 - (u + g)) * M),
        (i[6] = (m + _) * M),
        (i[7] = 0),
        (i[8] = (p + v) * b),
        (i[9] = (m - _) * b),
        (i[10] = (1 - (u + f)) * b),
        (i[11] = 0),
        (i[12] = e.x),
        (i[13] = e.y),
        (i[14] = e.z),
        (i[15] = 1),
        this
      );
    }
    decompose(e, t, n) {
      const i = this.elements;
      let r = Hn.set(i[0], i[1], i[2]).length();
      const s = Hn.set(i[4], i[5], i[6]).length(),
        a = Hn.set(i[8], i[9], i[10]).length();
      this.determinant() < 0 && (r = -r),
        (e.x = i[12]),
        (e.y = i[13]),
        (e.z = i[14]),
        Gn.copy(this);
      const o = 1 / r,
        l = 1 / s,
        c = 1 / a;
      return (
        (Gn.elements[0] *= o),
        (Gn.elements[1] *= o),
        (Gn.elements[2] *= o),
        (Gn.elements[4] *= l),
        (Gn.elements[5] *= l),
        (Gn.elements[6] *= l),
        (Gn.elements[8] *= c),
        (Gn.elements[9] *= c),
        (Gn.elements[10] *= c),
        t.setFromRotationMatrix(Gn),
        (n.x = r),
        (n.y = s),
        (n.z = a),
        this
      );
    }
    makePerspective(e, t, n, i, r, s) {
      const a = this.elements,
        o = (2 * r) / (t - e),
        l = (2 * r) / (n - i),
        c = (t + e) / (t - e),
        h = (n + i) / (n - i),
        u = -(s + r) / (s - r),
        d = (-2 * s * r) / (s - r);
      return (
        (a[0] = o),
        (a[4] = 0),
        (a[8] = c),
        (a[12] = 0),
        (a[1] = 0),
        (a[5] = l),
        (a[9] = h),
        (a[13] = 0),
        (a[2] = 0),
        (a[6] = 0),
        (a[10] = u),
        (a[14] = d),
        (a[3] = 0),
        (a[7] = 0),
        (a[11] = -1),
        (a[15] = 0),
        this
      );
    }
    makeOrthographic(e, t, n, i, r, s) {
      const a = this.elements,
        o = 1 / (t - e),
        l = 1 / (n - i),
        c = 1 / (s - r),
        h = (t + e) * o,
        u = (n + i) * l,
        d = (s + r) * c;
      return (
        (a[0] = 2 * o),
        (a[4] = 0),
        (a[8] = 0),
        (a[12] = -h),
        (a[1] = 0),
        (a[5] = 2 * l),
        (a[9] = 0),
        (a[13] = -u),
        (a[2] = 0),
        (a[6] = 0),
        (a[10] = -2 * c),
        (a[14] = -d),
        (a[3] = 0),
        (a[7] = 0),
        (a[11] = 0),
        (a[15] = 1),
        this
      );
    }
    equals(e) {
      const t = this.elements,
        n = e.elements;
      for (let e = 0; e < 16; e++) if (t[e] !== n[e]) return !1;
      return !0;
    }
    fromArray(e, t = 0) {
      for (let n = 0; n < 16; n++) this.elements[n] = e[n + t];
      return this;
    }
    toArray(e = [], t = 0) {
      const n = this.elements;
      return (
        (e[t] = n[0]),
        (e[t + 1] = n[1]),
        (e[t + 2] = n[2]),
        (e[t + 3] = n[3]),
        (e[t + 4] = n[4]),
        (e[t + 5] = n[5]),
        (e[t + 6] = n[6]),
        (e[t + 7] = n[7]),
        (e[t + 8] = n[8]),
        (e[t + 9] = n[9]),
        (e[t + 10] = n[10]),
        (e[t + 11] = n[11]),
        (e[t + 12] = n[12]),
        (e[t + 13] = n[13]),
        (e[t + 14] = n[14]),
        (e[t + 15] = n[15]),
        e
      );
    }
  }
  const Hn = new jt(),
    Gn = new kn(),
    Vn = new jt(0, 0, 0),
    Wn = new jt(1, 1, 1),
    jn = new jt(),
    Xn = new jt(),
    qn = new jt(),
    Yn = new kn(),
    Kn = new Wt();
  class Zn {
    constructor(e = 0, t = 0, n = 0, i = Zn.DEFAULT_ORDER) {
      (this.isEuler = !0),
        (this._x = e),
        (this._y = t),
        (this._z = n),
        (this._order = i);
    }
    get x() {
      return this._x;
    }
    set x(e) {
      (this._x = e), this._onChangeCallback();
    }
    get y() {
      return this._y;
    }
    set y(e) {
      (this._y = e), this._onChangeCallback();
    }
    get z() {
      return this._z;
    }
    set z(e) {
      (this._z = e), this._onChangeCallback();
    }
    get order() {
      return this._order;
    }
    set order(e) {
      (this._order = e), this._onChangeCallback();
    }
    set(e, t, n, i = this._order) {
      return (
        (this._x = e),
        (this._y = t),
        (this._z = n),
        (this._order = i),
        this._onChangeCallback(),
        this
      );
    }
    clone() {
      return new this.constructor(this._x, this._y, this._z, this._order);
    }
    copy(e) {
      return (
        (this._x = e._x),
        (this._y = e._y),
        (this._z = e._z),
        (this._order = e._order),
        this._onChangeCallback(),
        this
      );
    }
    setFromRotationMatrix(e, t = this._order, n = !0) {
      const i = e.elements,
        r = i[0],
        s = i[4],
        a = i[8],
        o = i[1],
        l = i[5],
        c = i[9],
        h = i[2],
        u = i[6],
        d = i[10];
      switch (t) {
        case "XYZ":
          (this._y = Math.asin(Rt(a, -1, 1))),
            Math.abs(a) < 0.9999999
              ? ((this._x = Math.atan2(-c, d)), (this._z = Math.atan2(-s, r)))
              : ((this._x = Math.atan2(u, l)), (this._z = 0));
          break;
        case "YXZ":
          (this._x = Math.asin(-Rt(c, -1, 1))),
            Math.abs(c) < 0.9999999
              ? ((this._y = Math.atan2(a, d)), (this._z = Math.atan2(o, l)))
              : ((this._y = Math.atan2(-h, r)), (this._z = 0));
          break;
        case "ZXY":
          (this._x = Math.asin(Rt(u, -1, 1))),
            Math.abs(u) < 0.9999999
              ? ((this._y = Math.atan2(-h, d)), (this._z = Math.atan2(-s, l)))
              : ((this._y = 0), (this._z = Math.atan2(o, r)));
          break;
        case "ZYX":
          (this._y = Math.asin(-Rt(h, -1, 1))),
            Math.abs(h) < 0.9999999
              ? ((this._x = Math.atan2(u, d)), (this._z = Math.atan2(o, r)))
              : ((this._x = 0), (this._z = Math.atan2(-s, l)));
          break;
        case "YZX":
          (this._z = Math.asin(Rt(o, -1, 1))),
            Math.abs(o) < 0.9999999
              ? ((this._x = Math.atan2(-c, l)), (this._y = Math.atan2(-h, r)))
              : ((this._x = 0), (this._y = Math.atan2(a, d)));
          break;
        case "XZY":
          (this._z = Math.asin(-Rt(s, -1, 1))),
            Math.abs(s) < 0.9999999
              ? ((this._x = Math.atan2(u, l)), (this._y = Math.atan2(a, r)))
              : ((this._x = Math.atan2(-c, d)), (this._y = 0));
          break;
        default:
          console.warn(
            "THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " +
              t
          );
      }
      return (this._order = t), !0 === n && this._onChangeCallback(), this;
    }
    setFromQuaternion(e, t, n) {
      return (
        Yn.makeRotationFromQuaternion(e), this.setFromRotationMatrix(Yn, t, n)
      );
    }
    setFromVector3(e, t = this._order) {
      return this.set(e.x, e.y, e.z, t);
    }
    reorder(e) {
      return Kn.setFromEuler(this), this.setFromQuaternion(Kn, e);
    }
    equals(e) {
      return (
        e._x === this._x &&
        e._y === this._y &&
        e._z === this._z &&
        e._order === this._order
      );
    }
    fromArray(e) {
      return (
        (this._x = e[0]),
        (this._y = e[1]),
        (this._z = e[2]),
        void 0 !== e[3] && (this._order = e[3]),
        this._onChangeCallback(),
        this
      );
    }
    toArray(e = [], t = 0) {
      return (
        (e[t] = this._x),
        (e[t + 1] = this._y),
        (e[t + 2] = this._z),
        (e[t + 3] = this._order),
        e
      );
    }
    _onChange(e) {
      return (this._onChangeCallback = e), this;
    }
    _onChangeCallback() {}
    *[Symbol.iterator]() {
      yield this._x, yield this._y, yield this._z, yield this._order;
    }
  }
  Zn.DEFAULT_ORDER = "XYZ";
  class Jn {
    constructor() {
      this.mask = 1;
    }
    set(e) {
      this.mask = ((1 << e) | 0) >>> 0;
    }
    enable(e) {
      this.mask |= (1 << e) | 0;
    }
    enableAll() {
      this.mask = -1;
    }
    toggle(e) {
      this.mask ^= (1 << e) | 0;
    }
    disable(e) {
      this.mask &= ~((1 << e) | 0);
    }
    disableAll() {
      this.mask = 0;
    }
    test(e) {
      return 0 != (this.mask & e.mask);
    }
    isEnabled(e) {
      return 0 != (this.mask & ((1 << e) | 0));
    }
  }
  let Qn = 0;
  const $n = new jt(),
    ei = new Wt(),
    ti = new kn(),
    ni = new jt(),
    ii = new jt(),
    ri = new jt(),
    si = new Wt(),
    ai = new jt(1, 0, 0),
    oi = new jt(0, 1, 0),
    li = new jt(0, 0, 1),
    ci = { type: "added" },
    hi = { type: "removed" };
  class ui extends Tt {
    constructor() {
      super(),
        (this.isObject3D = !0),
        Object.defineProperty(this, "id", { value: Qn++ }),
        (this.uuid = Ct()),
        (this.name = ""),
        (this.type = "Object3D"),
        (this.parent = null),
        (this.children = []),
        (this.up = ui.DEFAULT_UP.clone());
      const e = new jt(),
        t = new Zn(),
        n = new Wt(),
        i = new jt(1, 1, 1);
      t._onChange(function () {
        n.setFromEuler(t, !1);
      }),
        n._onChange(function () {
          t.setFromQuaternion(n, void 0, !1);
        }),
        Object.defineProperties(this, {
          position: { configurable: !0, enumerable: !0, value: e },
          rotation: { configurable: !0, enumerable: !0, value: t },
          quaternion: { configurable: !0, enumerable: !0, value: n },
          scale: { configurable: !0, enumerable: !0, value: i },
          modelViewMatrix: { value: new kn() },
          normalMatrix: { value: new kt() },
        }),
        (this.matrix = new kn()),
        (this.matrixWorld = new kn()),
        (this.matrixAutoUpdate = ui.DEFAULT_MATRIX_AUTO_UPDATE),
        (this.matrixWorldNeedsUpdate = !1),
        (this.matrixWorldAutoUpdate = ui.DEFAULT_MATRIX_WORLD_AUTO_UPDATE),
        (this.layers = new Jn()),
        (this.visible = !0),
        (this.castShadow = !1),
        (this.receiveShadow = !1),
        (this.frustumCulled = !0),
        (this.renderOrder = 0),
        (this.animations = []),
        (this.userData = {});
    }
    onBeforeRender() {}
    onAfterRender() {}
    applyMatrix4(e) {
      this.matrixAutoUpdate && this.updateMatrix(),
        this.matrix.premultiply(e),
        this.matrix.decompose(this.position, this.quaternion, this.scale);
    }
    applyQuaternion(e) {
      return this.quaternion.premultiply(e), this;
    }
    setRotationFromAxisAngle(e, t) {
      this.quaternion.setFromAxisAngle(e, t);
    }
    setRotationFromEuler(e) {
      this.quaternion.setFromEuler(e, !0);
    }
    setRotationFromMatrix(e) {
      this.quaternion.setFromRotationMatrix(e);
    }
    setRotationFromQuaternion(e) {
      this.quaternion.copy(e);
    }
    rotateOnAxis(e, t) {
      return ei.setFromAxisAngle(e, t), this.quaternion.multiply(ei), this;
    }
    rotateOnWorldAxis(e, t) {
      return ei.setFromAxisAngle(e, t), this.quaternion.premultiply(ei), this;
    }
    rotateX(e) {
      return this.rotateOnAxis(ai, e);
    }
    rotateY(e) {
      return this.rotateOnAxis(oi, e);
    }
    rotateZ(e) {
      return this.rotateOnAxis(li, e);
    }
    translateOnAxis(e, t) {
      return (
        $n.copy(e).applyQuaternion(this.quaternion),
        this.position.add($n.multiplyScalar(t)),
        this
      );
    }
    translateX(e) {
      return this.translateOnAxis(ai, e);
    }
    translateY(e) {
      return this.translateOnAxis(oi, e);
    }
    translateZ(e) {
      return this.translateOnAxis(li, e);
    }
    localToWorld(e) {
      return this.updateWorldMatrix(!0, !1), e.applyMatrix4(this.matrixWorld);
    }
    worldToLocal(e) {
      return (
        this.updateWorldMatrix(!0, !1),
        e.applyMatrix4(ti.copy(this.matrixWorld).invert())
      );
    }
    lookAt(e, t, n) {
      e.isVector3 ? ni.copy(e) : ni.set(e, t, n);
      const i = this.parent;
      this.updateWorldMatrix(!0, !1),
        ii.setFromMatrixPosition(this.matrixWorld),
        this.isCamera || this.isLight
          ? ti.lookAt(ii, ni, this.up)
          : ti.lookAt(ni, ii, this.up),
        this.quaternion.setFromRotationMatrix(ti),
        i &&
          (ti.extractRotation(i.matrixWorld),
          ei.setFromRotationMatrix(ti),
          this.quaternion.premultiply(ei.invert()));
    }
    add(e) {
      if (arguments.length > 1) {
        for (let e = 0; e < arguments.length; e++) this.add(arguments[e]);
        return this;
      }
      return e === this
        ? (console.error(
            "THREE.Object3D.add: object can't be added as a child of itself.",
            e
          ),
          this)
        : (e && e.isObject3D
            ? (null !== e.parent && e.parent.remove(e),
              (e.parent = this),
              this.children.push(e),
              e.dispatchEvent(ci))
            : console.error(
                "THREE.Object3D.add: object not an instance of THREE.Object3D.",
                e
              ),
          this);
    }
    remove(e) {
      if (arguments.length > 1) {
        for (let e = 0; e < arguments.length; e++) this.remove(arguments[e]);
        return this;
      }
      const t = this.children.indexOf(e);
      return (
        -1 !== t &&
          ((e.parent = null), this.children.splice(t, 1), e.dispatchEvent(hi)),
        this
      );
    }
    removeFromParent() {
      const e = this.parent;
      return null !== e && e.remove(this), this;
    }
    clear() {
      for (let e = 0; e < this.children.length; e++) {
        const t = this.children[e];
        (t.parent = null), t.dispatchEvent(hi);
      }
      return (this.children.length = 0), this;
    }
    attach(e) {
      return (
        this.updateWorldMatrix(!0, !1),
        ti.copy(this.matrixWorld).invert(),
        null !== e.parent &&
          (e.parent.updateWorldMatrix(!0, !1),
          ti.multiply(e.parent.matrixWorld)),
        e.applyMatrix4(ti),
        this.add(e),
        e.updateWorldMatrix(!1, !0),
        this
      );
    }
    getObjectById(e) {
      return this.getObjectByProperty("id", e);
    }
    getObjectByName(e) {
      return this.getObjectByProperty("name", e);
    }
    getObjectByProperty(e, t) {
      if (this[e] === t) return this;
      for (let n = 0, i = this.children.length; n < i; n++) {
        const i = this.children[n].getObjectByProperty(e, t);
        if (void 0 !== i) return i;
      }
    }
    getObjectsByProperty(e, t) {
      let n = [];
      this[e] === t && n.push(this);
      for (let i = 0, r = this.children.length; i < r; i++) {
        const r = this.children[i].getObjectsByProperty(e, t);
        r.length > 0 && (n = n.concat(r));
      }
      return n;
    }
    getWorldPosition(e) {
      return (
        this.updateWorldMatrix(!0, !1),
        e.setFromMatrixPosition(this.matrixWorld)
      );
    }
    getWorldQuaternion(e) {
      return (
        this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(ii, e, ri), e
      );
    }
    getWorldScale(e) {
      return (
        this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(ii, si, e), e
      );
    }
    getWorldDirection(e) {
      this.updateWorldMatrix(!0, !1);
      const t = this.matrixWorld.elements;
      return e.set(t[8], t[9], t[10]).normalize();
    }
    raycast() {}
    traverse(e) {
      e(this);
      const t = this.children;
      for (let n = 0, i = t.length; n < i; n++) t[n].traverse(e);
    }
    traverseVisible(e) {
      if (!1 === this.visible) return;
      e(this);
      const t = this.children;
      for (let n = 0, i = t.length; n < i; n++) t[n].traverseVisible(e);
    }
    traverseAncestors(e) {
      const t = this.parent;
      null !== t && (e(t), t.traverseAncestors(e));
    }
    updateMatrix() {
      this.matrix.compose(this.position, this.quaternion, this.scale),
        (this.matrixWorldNeedsUpdate = !0);
    }
    updateMatrixWorld(e) {
      this.matrixAutoUpdate && this.updateMatrix(),
        (this.matrixWorldNeedsUpdate || e) &&
          (null === this.parent
            ? this.matrixWorld.copy(this.matrix)
            : this.matrixWorld.multiplyMatrices(
                this.parent.matrixWorld,
                this.matrix
              ),
          (this.matrixWorldNeedsUpdate = !1),
          (e = !0));
      const t = this.children;
      for (let n = 0, i = t.length; n < i; n++) {
        const i = t[n];
        (!0 !== i.matrixWorldAutoUpdate && !0 !== e) || i.updateMatrixWorld(e);
      }
    }
    updateWorldMatrix(e, t) {
      const n = this.parent;
      if (
        (!0 === e &&
          null !== n &&
          !0 === n.matrixWorldAutoUpdate &&
          n.updateWorldMatrix(!0, !1),
        this.matrixAutoUpdate && this.updateMatrix(),
        null === this.parent
          ? this.matrixWorld.copy(this.matrix)
          : this.matrixWorld.multiplyMatrices(
              this.parent.matrixWorld,
              this.matrix
            ),
        !0 === t)
      ) {
        const e = this.children;
        for (let t = 0, n = e.length; t < n; t++) {
          const n = e[t];
          !0 === n.matrixWorldAutoUpdate && n.updateWorldMatrix(!1, !0);
        }
      }
    }
    toJSON(e) {
      const t = void 0 === e || "string" == typeof e,
        n = {};
      t &&
        ((e = {
          geometries: {},
          materials: {},
          textures: {},
          images: {},
          shapes: {},
          skeletons: {},
          animations: {},
          nodes: {},
        }),
        (n.metadata = {
          version: 4.5,
          type: "Object",
          generator: "Object3D.toJSON",
        }));
      const i = {};
      function r(t, n) {
        return void 0 === t[n.uuid] && (t[n.uuid] = n.toJSON(e)), n.uuid;
      }
      if (
        ((i.uuid = this.uuid),
        (i.type = this.type),
        "" !== this.name && (i.name = this.name),
        !0 === this.castShadow && (i.castShadow = !0),
        !0 === this.receiveShadow && (i.receiveShadow = !0),
        !1 === this.visible && (i.visible = !1),
        !1 === this.frustumCulled && (i.frustumCulled = !1),
        0 !== this.renderOrder && (i.renderOrder = this.renderOrder),
        Object.keys(this.userData).length > 0 && (i.userData = this.userData),
        (i.layers = this.layers.mask),
        (i.matrix = this.matrix.toArray()),
        !1 === this.matrixAutoUpdate && (i.matrixAutoUpdate = !1),
        this.isInstancedMesh &&
          ((i.type = "InstancedMesh"),
          (i.count = this.count),
          (i.instanceMatrix = this.instanceMatrix.toJSON()),
          null !== this.instanceColor &&
            (i.instanceColor = this.instanceColor.toJSON())),
        this.isScene)
      )
        this.background &&
          (this.background.isColor
            ? (i.background = this.background.toJSON())
            : this.background.isTexture &&
              (i.background = this.background.toJSON(e).uuid)),
          this.environment &&
            this.environment.isTexture &&
            !0 !== this.environment.isRenderTargetTexture &&
            (i.environment = this.environment.toJSON(e).uuid);
      else if (this.isMesh || this.isLine || this.isPoints) {
        i.geometry = r(e.geometries, this.geometry);
        const t = this.geometry.parameters;
        if (void 0 !== t && void 0 !== t.shapes) {
          const n = t.shapes;
          if (Array.isArray(n))
            for (let t = 0, i = n.length; t < i; t++) {
              const i = n[t];
              r(e.shapes, i);
            }
          else r(e.shapes, n);
        }
      }
      if (
        (this.isSkinnedMesh &&
          ((i.bindMode = this.bindMode),
          (i.bindMatrix = this.bindMatrix.toArray()),
          void 0 !== this.skeleton &&
            (r(e.skeletons, this.skeleton), (i.skeleton = this.skeleton.uuid))),
        void 0 !== this.material)
      )
        if (Array.isArray(this.material)) {
          const t = [];
          for (let n = 0, i = this.material.length; n < i; n++)
            t.push(r(e.materials, this.material[n]));
          i.material = t;
        } else i.material = r(e.materials, this.material);
      if (this.children.length > 0) {
        i.children = [];
        for (let t = 0; t < this.children.length; t++)
          i.children.push(this.children[t].toJSON(e).object);
      }
      if (this.animations.length > 0) {
        i.animations = [];
        for (let t = 0; t < this.animations.length; t++) {
          const n = this.animations[t];
          i.animations.push(r(e.animations, n));
        }
      }
      if (t) {
        const t = s(e.geometries),
          i = s(e.materials),
          r = s(e.textures),
          a = s(e.images),
          o = s(e.shapes),
          l = s(e.skeletons),
          c = s(e.animations),
          h = s(e.nodes);
        t.length > 0 && (n.geometries = t),
          i.length > 0 && (n.materials = i),
          r.length > 0 && (n.textures = r),
          a.length > 0 && (n.images = a),
          o.length > 0 && (n.shapes = o),
          l.length > 0 && (n.skeletons = l),
          c.length > 0 && (n.animations = c),
          h.length > 0 && (n.nodes = h);
      }
      return (n.object = i), n;
      function s(e) {
        const t = [];
        for (const n in e) {
          const i = e[n];
          delete i.metadata, t.push(i);
        }
        return t;
      }
    }
    clone(e) {
      return new this.constructor().copy(this, e);
    }
    copy(e, t = !0) {
      if (
        ((this.name = e.name),
        this.up.copy(e.up),
        this.position.copy(e.position),
        (this.rotation.order = e.rotation.order),
        this.quaternion.copy(e.quaternion),
        this.scale.copy(e.scale),
        this.matrix.copy(e.matrix),
        this.matrixWorld.copy(e.matrixWorld),
        (this.matrixAutoUpdate = e.matrixAutoUpdate),
        (this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate),
        (this.matrixWorldAutoUpdate = e.matrixWorldAutoUpdate),
        (this.layers.mask = e.layers.mask),
        (this.visible = e.visible),
        (this.castShadow = e.castShadow),
        (this.receiveShadow = e.receiveShadow),
        (this.frustumCulled = e.frustumCulled),
        (this.renderOrder = e.renderOrder),
        (this.userData = JSON.parse(JSON.stringify(e.userData))),
        !0 === t)
      )
        for (let t = 0; t < e.children.length; t++) {
          const n = e.children[t];
          this.add(n.clone());
        }
      return this;
    }
  }
  (ui.DEFAULT_UP = new jt(0, 1, 0)),
    (ui.DEFAULT_MATRIX_AUTO_UPDATE = !0),
    (ui.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = !0);
  const di = new jt(),
    pi = new jt(),
    fi = new jt(),
    mi = new jt(),
    gi = new jt(),
    _i = new jt(),
    vi = new jt(),
    xi = new jt(),
    yi = new jt(),
    Mi = new jt();
  class bi {
    constructor(e = new jt(), t = new jt(), n = new jt()) {
      (this.a = e), (this.b = t), (this.c = n);
    }
    static getNormal(e, t, n, i) {
      i.subVectors(n, t), di.subVectors(e, t), i.cross(di);
      const r = i.lengthSq();
      return r > 0 ? i.multiplyScalar(1 / Math.sqrt(r)) : i.set(0, 0, 0);
    }
    static getBarycoord(e, t, n, i, r) {
      di.subVectors(i, t), pi.subVectors(n, t), fi.subVectors(e, t);
      const s = di.dot(di),
        a = di.dot(pi),
        o = di.dot(fi),
        l = pi.dot(pi),
        c = pi.dot(fi),
        h = s * l - a * a;
      if (0 === h) return r.set(-2, -1, -1);
      const u = 1 / h,
        d = (l * o - a * c) * u,
        p = (s * c - a * o) * u;
      return r.set(1 - d - p, p, d);
    }
    static containsPoint(e, t, n, i) {
      return (
        this.getBarycoord(e, t, n, i, mi),
        mi.x >= 0 && mi.y >= 0 && mi.x + mi.y <= 1
      );
    }
    static getUV(e, t, n, i, r, s, a, o) {
      return (
        this.getBarycoord(e, t, n, i, mi),
        o.set(0, 0),
        o.addScaledVector(r, mi.x),
        o.addScaledVector(s, mi.y),
        o.addScaledVector(a, mi.z),
        o
      );
    }
    static isFrontFacing(e, t, n, i) {
      return di.subVectors(n, t), pi.subVectors(e, t), di.cross(pi).dot(i) < 0;
    }
    set(e, t, n) {
      return this.a.copy(e), this.b.copy(t), this.c.copy(n), this;
    }
    setFromPointsAndIndices(e, t, n, i) {
      return this.a.copy(e[t]), this.b.copy(e[n]), this.c.copy(e[i]), this;
    }
    setFromAttributeAndIndices(e, t, n, i) {
      return (
        this.a.fromBufferAttribute(e, t),
        this.b.fromBufferAttribute(e, n),
        this.c.fromBufferAttribute(e, i),
        this
      );
    }
    clone() {
      return new this.constructor().copy(this);
    }
    copy(e) {
      return this.a.copy(e.a), this.b.copy(e.b), this.c.copy(e.c), this;
    }
    getArea() {
      return (
        di.subVectors(this.c, this.b),
        pi.subVectors(this.a, this.b),
        0.5 * di.cross(pi).length()
      );
    }
    getMidpoint(e) {
      return e
        .addVectors(this.a, this.b)
        .add(this.c)
        .multiplyScalar(1 / 3);
    }
    getNormal(e) {
      return bi.getNormal(this.a, this.b, this.c, e);
    }
    getPlane(e) {
      return e.setFromCoplanarPoints(this.a, this.b, this.c);
    }
    getBarycoord(e, t) {
      return bi.getBarycoord(e, this.a, this.b, this.c, t);
    }
    getUV(e, t, n, i, r) {
      return bi.getUV(e, this.a, this.b, this.c, t, n, i, r);
    }
    containsPoint(e) {
      return bi.containsPoint(e, this.a, this.b, this.c);
    }
    isFrontFacing(e) {
      return bi.isFrontFacing(this.a, this.b, this.c, e);
    }
    intersectsBox(e) {
      return e.intersectsTriangle(this);
    }
    closestPointToPoint(e, t) {
      const n = this.a,
        i = this.b,
        r = this.c;
      let s, a;
      gi.subVectors(i, n), _i.subVectors(r, n), xi.subVectors(e, n);
      const o = gi.dot(xi),
        l = _i.dot(xi);
      if (o <= 0 && l <= 0) return t.copy(n);
      yi.subVectors(e, i);
      const c = gi.dot(yi),
        h = _i.dot(yi);
      if (c >= 0 && h <= c) return t.copy(i);
      const u = o * h - c * l;
      if (u <= 0 && o >= 0 && c <= 0)
        return (s = o / (o - c)), t.copy(n).addScaledVector(gi, s);
      Mi.subVectors(e, r);
      const d = gi.dot(Mi),
        p = _i.dot(Mi);
      if (p >= 0 && d <= p) return t.copy(r);
      const f = d * l - o * p;
      if (f <= 0 && l >= 0 && p <= 0)
        return (a = l / (l - p)), t.copy(n).addScaledVector(_i, a);
      const m = c * p - d * h;
      if (m <= 0 && h - c >= 0 && d - p >= 0)
        return (
          vi.subVectors(r, i),
          (a = (h - c) / (h - c + (d - p))),
          t.copy(i).addScaledVector(vi, a)
        );
      const g = 1 / (m + f + u);
      return (
        (s = f * g),
        (a = u * g),
        t.copy(n).addScaledVector(gi, s).addScaledVector(_i, a)
      );
    }
    equals(e) {
      return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c);
    }
  }
  let Si = 0;
  class wi extends Tt {
    constructor() {
      super(),
        (this.isMaterial = !0),
        Object.defineProperty(this, "id", { value: Si++ }),
        (this.uuid = Ct()),
        (this.name = ""),
        (this.type = "Material"),
        (this.blending = u),
        (this.side = o),
        (this.vertexColors = !1),
        (this.opacity = 1),
        (this.transparent = !1),
        (this.blendSrc = T),
        (this.blendDst = E),
        (this.blendEquation = g),
        (this.blendSrcAlpha = null),
        (this.blendDstAlpha = null),
        (this.blendEquationAlpha = null),
        (this.depthFunc = O),
        (this.depthTest = !0),
        (this.depthWrite = !0),
        (this.stencilWriteMask = 255),
        (this.stencilFunc = 519),
        (this.stencilRef = 0),
        (this.stencilFuncMask = 255),
        (this.stencilFail = Mt),
        (this.stencilZFail = Mt),
        (this.stencilZPass = Mt),
        (this.stencilWrite = !1),
        (this.clippingPlanes = null),
        (this.clipIntersection = !1),
        (this.clipShadows = !1),
        (this.shadowSide = null),
        (this.colorWrite = !0),
        (this.precision = null),
        (this.polygonOffset = !1),
        (this.polygonOffsetFactor = 0),
        (this.polygonOffsetUnits = 0),
        (this.dithering = !1),
        (this.alphaToCoverage = !1),
        (this.premultipliedAlpha = !1),
        (this.forceSinglePass = !1),
        (this.visible = !0),
        (this.toneMapped = !0),
        (this.userData = {}),
        (this.version = 0),
        (this._alphaTest = 0);
    }
    get alphaTest() {
      return this._alphaTest;
    }
    set alphaTest(e) {
      this._alphaTest > 0 != e > 0 && this.version++, (this._alphaTest = e);
    }
    onBuild() {}
    onBeforeRender() {}
    onBeforeCompile() {}
    customProgramCacheKey() {
      return this.onBeforeCompile.toString();
    }
    setValues(e) {
      if (void 0 !== e)
        for (const t in e) {
          const n = e[t];
          if (void 0 === n) {
            console.warn("THREE.Material: '" + t + "' parameter is undefined.");
            continue;
          }
          const i = this[t];
          void 0 !== i
            ? i && i.isColor
              ? i.set(n)
              : i && i.isVector3 && n && n.isVector3
              ? i.copy(n)
              : (this[t] = n)
            : console.warn(
                "THREE." +
                  this.type +
                  ": '" +
                  t +
                  "' is not a property of this material."
              );
        }
    }
    toJSON(e) {
      const t = void 0 === e || "string" == typeof e;
      t && (e = { textures: {}, images: {} });
      const n = {
        metadata: {
          version: 4.5,
          type: "Material",
          generator: "Material.toJSON",
        },
      };
      function i(e) {
        const t = [];
        for (const n in e) {
          const i = e[n];
          delete i.metadata, t.push(i);
        }
        return t;
      }
      if (
        ((n.uuid = this.uuid),
        (n.type = this.type),
        "" !== this.name && (n.name = this.name),
        this.color && this.color.isColor && (n.color = this.color.getHex()),
        void 0 !== this.roughness && (n.roughness = this.roughness),
        void 0 !== this.metalness && (n.metalness = this.metalness),
        void 0 !== this.sheen && (n.sheen = this.sheen),
        this.sheenColor &&
          this.sheenColor.isColor &&
          (n.sheenColor = this.sheenColor.getHex()),
        void 0 !== this.sheenRoughness &&
          (n.sheenRoughness = this.sheenRoughness),
        this.emissive &&
          this.emissive.isColor &&
          (n.emissive = this.emissive.getHex()),
        this.emissiveIntensity &&
          1 !== this.emissiveIntensity &&
          (n.emissiveIntensity = this.emissiveIntensity),
        this.specular &&
          this.specular.isColor &&
          (n.specular = this.specular.getHex()),
        void 0 !== this.specularIntensity &&
          (n.specularIntensity = this.specularIntensity),
        this.specularColor &&
          this.specularColor.isColor &&
          (n.specularColor = this.specularColor.getHex()),
        void 0 !== this.shininess && (n.shininess = this.shininess),
        void 0 !== this.clearcoat && (n.clearcoat = this.clearcoat),
        void 0 !== this.clearcoatRoughness &&
          (n.clearcoatRoughness = this.clearcoatRoughness),
        this.clearcoatMap &&
          this.clearcoatMap.isTexture &&
          (n.clearcoatMap = this.clearcoatMap.toJSON(e).uuid),
        this.clearcoatRoughnessMap &&
          this.clearcoatRoughnessMap.isTexture &&
          (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid),
        this.clearcoatNormalMap &&
          this.clearcoatNormalMap.isTexture &&
          ((n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid),
          (n.clearcoatNormalScale = this.clearcoatNormalScale.toArray())),
        void 0 !== this.iridescence && (n.iridescence = this.iridescence),
        void 0 !== this.iridescenceIOR &&
          (n.iridescenceIOR = this.iridescenceIOR),
        void 0 !== this.iridescenceThicknessRange &&
          (n.iridescenceThicknessRange = this.iridescenceThicknessRange),
        this.iridescenceMap &&
          this.iridescenceMap.isTexture &&
          (n.iridescenceMap = this.iridescenceMap.toJSON(e).uuid),
        this.iridescenceThicknessMap &&
          this.iridescenceThicknessMap.isTexture &&
          (n.iridescenceThicknessMap =
            this.iridescenceThicknessMap.toJSON(e).uuid),
        this.map && this.map.isTexture && (n.map = this.map.toJSON(e).uuid),
        this.matcap &&
          this.matcap.isTexture &&
          (n.matcap = this.matcap.toJSON(e).uuid),
        this.alphaMap &&
          this.alphaMap.isTexture &&
          (n.alphaMap = this.alphaMap.toJSON(e).uuid),
        this.lightMap &&
          this.lightMap.isTexture &&
          ((n.lightMap = this.lightMap.toJSON(e).uuid),
          (n.lightMapIntensity = this.lightMapIntensity)),
        this.aoMap &&
          this.aoMap.isTexture &&
          ((n.aoMap = this.aoMap.toJSON(e).uuid),
          (n.aoMapIntensity = this.aoMapIntensity)),
        this.bumpMap &&
          this.bumpMap.isTexture &&
          ((n.bumpMap = this.bumpMap.toJSON(e).uuid),
          (n.bumpScale = this.bumpScale)),
        this.normalMap &&
          this.normalMap.isTexture &&
          ((n.normalMap = this.normalMap.toJSON(e).uuid),
          (n.normalMapType = this.normalMapType),
          (n.normalScale = this.normalScale.toArray())),
        this.displacementMap &&
          this.displacementMap.isTexture &&
          ((n.displacementMap = this.displacementMap.toJSON(e).uuid),
          (n.displacementScale = this.displacementScale),
          (n.displacementBias = this.displacementBias)),
        this.roughnessMap &&
          this.roughnessMap.isTexture &&
          (n.roughnessMap = this.roughnessMap.toJSON(e).uuid),
        this.metalnessMap &&
          this.metalnessMap.isTexture &&
          (n.metalnessMap = this.metalnessMap.toJSON(e).uuid),
        this.emissiveMap &&
          this.emissiveMap.isTexture &&
          (n.emissiveMap = this.emissiveMap.toJSON(e).uuid),
        this.specularMap &&
          this.specularMap.isTexture &&
          (n.specularMap = this.specularMap.toJSON(e).uuid),
        this.specularIntensityMap &&
          this.specularIntensityMap.isTexture &&
          (n.specularIntensityMap = this.specularIntensityMap.toJSON(e).uuid),
        this.specularColorMap &&
          this.specularColorMap.isTexture &&
          (n.specularColorMap = this.specularColorMap.toJSON(e).uuid),
        this.envMap &&
          this.envMap.isTexture &&
          ((n.envMap = this.envMap.toJSON(e).uuid),
          void 0 !== this.combine && (n.combine = this.combine)),
        void 0 !== this.envMapIntensity &&
          (n.envMapIntensity = this.envMapIntensity),
        void 0 !== this.reflectivity && (n.reflectivity = this.reflectivity),
        void 0 !== this.refractionRatio &&
          (n.refractionRatio = this.refractionRatio),
        this.gradientMap &&
          this.gradientMap.isTexture &&
          (n.gradientMap = this.gradientMap.toJSON(e).uuid),
        void 0 !== this.transmission && (n.transmission = this.transmission),
        this.transmissionMap &&
          this.transmissionMap.isTexture &&
          (n.transmissionMap = this.transmissionMap.toJSON(e).uuid),
        void 0 !== this.thickness && (n.thickness = this.thickness),
        this.thicknessMap &&
          this.thicknessMap.isTexture &&
          (n.thicknessMap = this.thicknessMap.toJSON(e).uuid),
        void 0 !== this.attenuationDistance &&
          this.attenuationDistance !== 1 / 0 &&
          (n.attenuationDistance = this.attenuationDistance),
        void 0 !== this.attenuationColor &&
          (n.attenuationColor = this.attenuationColor.getHex()),
        void 0 !== this.size && (n.size = this.size),
        null !== this.shadowSide && (n.shadowSide = this.shadowSide),
        void 0 !== this.sizeAttenuation &&
          (n.sizeAttenuation = this.sizeAttenuation),
        this.blending !== u && (n.blending = this.blending),
        this.side !== o && (n.side = this.side),
        this.vertexColors && (n.vertexColors = !0),
        this.opacity < 1 && (n.opacity = this.opacity),
        !0 === this.transparent && (n.transparent = this.transparent),
        (n.depthFunc = this.depthFunc),
        (n.depthTest = this.depthTest),
        (n.depthWrite = this.depthWrite),
        (n.colorWrite = this.colorWrite),
        (n.stencilWrite = this.stencilWrite),
        (n.stencilWriteMask = this.stencilWriteMask),
        (n.stencilFunc = this.stencilFunc),
        (n.stencilRef = this.stencilRef),
        (n.stencilFuncMask = this.stencilFuncMask),
        (n.stencilFail = this.stencilFail),
        (n.stencilZFail = this.stencilZFail),
        (n.stencilZPass = this.stencilZPass),
        void 0 !== this.rotation &&
          0 !== this.rotation &&
          (n.rotation = this.rotation),
        !0 === this.polygonOffset && (n.polygonOffset = !0),
        0 !== this.polygonOffsetFactor &&
          (n.polygonOffsetFactor = this.polygonOffsetFactor),
        0 !== this.polygonOffsetUnits &&
          (n.polygonOffsetUnits = this.polygonOffsetUnits),
        void 0 !== this.linewidth &&
          1 !== this.linewidth &&
          (n.linewidth = this.linewidth),
        void 0 !== this.dashSize && (n.dashSize = this.dashSize),
        void 0 !== this.gapSize && (n.gapSize = this.gapSize),
        void 0 !== this.scale && (n.scale = this.scale),
        !0 === this.dithering && (n.dithering = !0),
        this.alphaTest > 0 && (n.alphaTest = this.alphaTest),
        !0 === this.alphaToCoverage &&
          (n.alphaToCoverage = this.alphaToCoverage),
        !0 === this.premultipliedAlpha &&
          (n.premultipliedAlpha = this.premultipliedAlpha),
        !0 === this.forceSinglePass &&
          (n.forceSinglePass = this.forceSinglePass),
        !0 === this.wireframe && (n.wireframe = this.wireframe),
        this.wireframeLinewidth > 1 &&
          (n.wireframeLinewidth = this.wireframeLinewidth),
        "round" !== this.wireframeLinecap &&
          (n.wireframeLinecap = this.wireframeLinecap),
        "round" !== this.wireframeLinejoin &&
          (n.wireframeLinejoin = this.wireframeLinejoin),
        !0 === this.flatShading && (n.flatShading = this.flatShading),
        !1 === this.visible && (n.visible = !1),
        !1 === this.toneMapped && (n.toneMapped = !1),
        !1 === this.fog && (n.fog = !1),
        Object.keys(this.userData).length > 0 && (n.userData = this.userData),
        t)
      ) {
        const t = i(e.textures),
          r = i(e.images);
        t.length > 0 && (n.textures = t), r.length > 0 && (n.images = r);
      }
      return n;
    }
    clone() {
      return new this.constructor().copy(this);
    }
    copy(e) {
      (this.name = e.name),
        (this.blending = e.blending),
        (this.side = e.side),
        (this.vertexColors = e.vertexColors),
        (this.opacity = e.opacity),
        (this.transparent = e.transparent),
        (this.blendSrc = e.blendSrc),
        (this.blendDst = e.blendDst),
        (this.blendEquation = e.blendEquation),
        (this.blendSrcAlpha = e.blendSrcAlpha),
        (this.blendDstAlpha = e.blendDstAlpha),
        (this.blendEquationAlpha = e.blendEquationAlpha),
        (this.depthFunc = e.depthFunc),
        (this.depthTest = e.depthTest),
        (this.depthWrite = e.depthWrite),
        (this.stencilWriteMask = e.stencilWriteMask),
        (this.stencilFunc = e.stencilFunc),
        (this.stencilRef = e.stencilRef),
        (this.stencilFuncMask = e.stencilFuncMask),
        (this.stencilFail = e.stencilFail),
        (this.stencilZFail = e.stencilZFail),
        (this.stencilZPass = e.stencilZPass),
        (this.stencilWrite = e.stencilWrite);
      const t = e.clippingPlanes;
      let n = null;
      if (null !== t) {
        const e = t.length;
        n = new Array(e);
        for (let i = 0; i !== e; ++i) n[i] = t[i].clone();
      }
      return (
        (this.clippingPlanes = n),
        (this.clipIntersection = e.clipIntersection),
        (this.clipShadows = e.clipShadows),
        (this.shadowSide = e.shadowSide),
        (this.colorWrite = e.colorWrite),
        (this.precision = e.precision),
        (this.polygonOffset = e.polygonOffset),
        (this.polygonOffsetFactor = e.polygonOffsetFactor),
        (this.polygonOffsetUnits = e.polygonOffsetUnits),
        (this.dithering = e.dithering),
        (this.alphaTest = e.alphaTest),
        (this.alphaToCoverage = e.alphaToCoverage),
        (this.premultipliedAlpha = e.premultipliedAlpha),
        (this.forceSinglePass = e.forceSinglePass),
        (this.visible = e.visible),
        (this.toneMapped = e.toneMapped),
        (this.userData = JSON.parse(JSON.stringify(e.userData))),
        this
      );
    }
    dispose() {
      this.dispatchEvent({ type: "dispose" });
    }
    set needsUpdate(e) {
      !0 === e && this.version++;
    }
  }
  const Ti = {
      aliceblue: 15792383,
      antiquewhite: 16444375,
      aqua: 65535,
      aquamarine: 8388564,
      azure: 15794175,
      beige: 16119260,
      bisque: 16770244,
      black: 0,
      blanchedalmond: 16772045,
      blue: 255,
      blueviolet: 9055202,
      brown: 10824234,
      burlywood: 14596231,
      cadetblue: 6266528,
      chartreuse: 8388352,
      chocolate: 13789470,
      coral: 16744272,
      cornflowerblue: 6591981,
      cornsilk: 16775388,
      crimson: 14423100,
      cyan: 65535,
      darkblue: 139,
      darkcyan: 35723,
      darkgoldenrod: 12092939,
      darkgray: 11119017,
      darkgreen: 25600,
      darkgrey: 11119017,
      darkkhaki: 12433259,
      darkmagenta: 9109643,
      darkolivegreen: 5597999,
      darkorange: 16747520,
      darkorchid: 10040012,
      darkred: 9109504,
      darksalmon: 15308410,
      darkseagreen: 9419919,
      darkslateblue: 4734347,
      darkslategray: 3100495,
      darkslategrey: 3100495,
      darkturquoise: 52945,
      darkviolet: 9699539,
      deeppink: 16716947,
      deepskyblue: 49151,
      dimgray: 6908265,
      dimgrey: 6908265,
      dodgerblue: 2003199,
      firebrick: 11674146,
      floralwhite: 16775920,
      forestgreen: 2263842,
      fuchsia: 16711935,
      gainsboro: 14474460,
      ghostwhite: 16316671,
      gold: 16766720,
      goldenrod: 14329120,
      gray: 8421504,
      green: 32768,
      greenyellow: 11403055,
      grey: 8421504,
      honeydew: 15794160,
      hotpink: 16738740,
      indianred: 13458524,
      indigo: 4915330,
      ivory: 16777200,
      khaki: 15787660,
      lavender: 15132410,
      lavenderblush: 16773365,
      lawngreen: 8190976,
      lemonchiffon: 16775885,
      lightblue: 11393254,
      lightcoral: 15761536,
      lightcyan: 14745599,
      lightgoldenrodyellow: 16448210,
      lightgray: 13882323,
      lightgreen: 9498256,
      lightgrey: 13882323,
      lightpink: 16758465,
      lightsalmon: 16752762,
      lightseagreen: 2142890,
      lightskyblue: 8900346,
      lightslategray: 7833753,
      lightslategrey: 7833753,
      lightsteelblue: 11584734,
      lightyellow: 16777184,
      lime: 65280,
      limegreen: 3329330,
      linen: 16445670,
      magenta: 16711935,
      maroon: 8388608,
      mediumaquamarine: 6737322,
      mediumblue: 205,
      mediumorchid: 12211667,
      mediumpurple: 9662683,
      mediumseagreen: 3978097,
      mediumslateblue: 8087790,
      mediumspringgreen: 64154,
      mediumturquoise: 4772300,
      mediumvioletred: 13047173,
      midnightblue: 1644912,
      mintcream: 16121850,
      mistyrose: 16770273,
      moccasin: 16770229,
      navajowhite: 16768685,
      navy: 128,
      oldlace: 16643558,
      olive: 8421376,
      olivedrab: 7048739,
      orange: 16753920,
      orangered: 16729344,
      orchid: 14315734,
      palegoldenrod: 15657130,
      palegreen: 10025880,
      paleturquoise: 11529966,
      palevioletred: 14381203,
      papayawhip: 16773077,
      peachpuff: 16767673,
      peru: 13468991,
      pink: 16761035,
      plum: 14524637,
      powderblue: 11591910,
      purple: 8388736,
      rebeccapurple: 6697881,
      red: 16711680,
      rosybrown: 12357519,
      royalblue: 4286945,
      saddlebrown: 9127187,
      salmon: 16416882,
      sandybrown: 16032864,
      seagreen: 3050327,
      seashell: 16774638,
      sienna: 10506797,
      silver: 12632256,
      skyblue: 8900331,
      slateblue: 6970061,
      slategray: 7372944,
      slategrey: 7372944,
      snow: 16775930,
      springgreen: 65407,
      steelblue: 4620980,
      tan: 13808780,
      teal: 32896,
      thistle: 14204888,
      tomato: 16737095,
      turquoise: 4251856,
      violet: 15631086,
      wheat: 16113331,
      white: 16777215,
      whitesmoke: 16119285,
      yellow: 16776960,
      yellowgreen: 10145074,
    },
    Ei = { h: 0, s: 0, l: 0 },
    Ai = { h: 0, s: 0, l: 0 };
  function Li(e, t, n) {
    return (
      n < 0 && (n += 1),
      n > 1 && (n -= 1),
      n < 1 / 6
        ? e + 6 * (t - e) * n
        : n < 0.5
        ? t
        : n < 2 / 3
        ? e + 6 * (t - e) * (2 / 3 - n)
        : e
    );
  }
  class Ci {
    constructor(e, t, n) {
      return (
        (this.isColor = !0),
        (this.r = 1),
        (this.g = 1),
        (this.b = 1),
        void 0 === t && void 0 === n ? this.set(e) : this.setRGB(e, t, n)
      );
    }
    set(e) {
      return (
        e && e.isColor
          ? this.copy(e)
          : "number" == typeof e
          ? this.setHex(e)
          : "string" == typeof e && this.setStyle(e),
        this
      );
    }
    setScalar(e) {
      return (this.r = e), (this.g = e), (this.b = e), this;
    }
    setHex(e, t = vt) {
      return (
        (e = Math.floor(e)),
        (this.r = ((e >> 16) & 255) / 255),
        (this.g = ((e >> 8) & 255) / 255),
        (this.b = (255 & e) / 255),
        tn.toWorkingColorSpace(this, t),
        this
      );
    }
    setRGB(e, t, n, i = tn.workingColorSpace) {
      return (
        (this.r = e),
        (this.g = t),
        (this.b = n),
        tn.toWorkingColorSpace(this, i),
        this
      );
    }
    setHSL(e, t, n, i = tn.workingColorSpace) {
      if (((e = Pt(e, 1)), (t = Rt(t, 0, 1)), (n = Rt(n, 0, 1)), 0 === t))
        this.r = this.g = this.b = n;
      else {
        const i = n <= 0.5 ? n * (1 + t) : n + t - n * t,
          r = 2 * n - i;
        (this.r = Li(r, i, e + 1 / 3)),
          (this.g = Li(r, i, e)),
          (this.b = Li(r, i, e - 1 / 3));
      }
      return tn.toWorkingColorSpace(this, i), this;
    }
    setStyle(e, t = vt) {
      function n(t) {
        void 0 !== t &&
          parseFloat(t) < 1 &&
          console.warn(
            "THREE.Color: Alpha component of " + e + " will be ignored."
          );
      }
      let i;
      if ((i = /^(\w+)\(([^\)]*)\)/.exec(e))) {
        let r;
        const s = i[1],
          a = i[2];
        switch (s) {
          case "rgb":
          case "rgba":
            if (
              (r =
                /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
                  a
                ))
            )
              return (
                (this.r = Math.min(255, parseInt(r[1], 10)) / 255),
                (this.g = Math.min(255, parseInt(r[2], 10)) / 255),
                (this.b = Math.min(255, parseInt(r[3], 10)) / 255),
                tn.toWorkingColorSpace(this, t),
                n(r[4]),
                this
              );
            if (
              (r =
                /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
                  a
                ))
            )
              return (
                (this.r = Math.min(100, parseInt(r[1], 10)) / 100),
                (this.g = Math.min(100, parseInt(r[2], 10)) / 100),
                (this.b = Math.min(100, parseInt(r[3], 10)) / 100),
                tn.toWorkingColorSpace(this, t),
                n(r[4]),
                this
              );
            break;
          case "hsl":
          case "hsla":
            if (
              (r =
                /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
                  a
                ))
            ) {
              const e = parseFloat(r[1]) / 360,
                i = parseFloat(r[2]) / 100,
                s = parseFloat(r[3]) / 100;
              return n(r[4]), this.setHSL(e, i, s, t);
            }
            break;
          default:
            console.warn("THREE.Color: Unknown color model " + e);
        }
      } else if ((i = /^\#([A-Fa-f\d]+)$/.exec(e))) {
        const n = i[1],
          r = n.length;
        if (3 === r)
          return (
            (this.r = parseInt(n.charAt(0) + n.charAt(0), 16) / 255),
            (this.g = parseInt(n.charAt(1) + n.charAt(1), 16) / 255),
            (this.b = parseInt(n.charAt(2) + n.charAt(2), 16) / 255),
            tn.toWorkingColorSpace(this, t),
            this
          );
        if (6 === r)
          return (
            (this.r = parseInt(n.charAt(0) + n.charAt(1), 16) / 255),
            (this.g = parseInt(n.charAt(2) + n.charAt(3), 16) / 255),
            (this.b = parseInt(n.charAt(4) + n.charAt(5), 16) / 255),
            tn.toWorkingColorSpace(this, t),
            this
          );
        console.warn("THREE.Color: Invalid hex color " + e);
      } else if (e && e.length > 0) return this.setColorName(e, t);
      return this;
    }
    setColorName(e, t = vt) {
      const n = Ti[e.toLowerCase()];
      return (
        void 0 !== n
          ? this.setHex(n, t)
          : console.warn("THREE.Color: Unknown color " + e),
        this
      );
    }
    clone() {
      return new this.constructor(this.r, this.g, this.b);
    }
    copy(e) {
      return (this.r = e.r), (this.g = e.g), (this.b = e.b), this;
    }
    copySRGBToLinear(e) {
      return (this.r = Yt(e.r)), (this.g = Yt(e.g)), (this.b = Yt(e.b)), this;
    }
    copyLinearToSRGB(e) {
      return (this.r = Kt(e.r)), (this.g = Kt(e.g)), (this.b = Kt(e.b)), this;
    }
    convertSRGBToLinear() {
      return this.copySRGBToLinear(this), this;
    }
    convertLinearToSRGB() {
      return this.copyLinearToSRGB(this), this;
    }
    getHex(e = vt) {
      return (
        tn.fromWorkingColorSpace(Ri.copy(this), e),
        (Rt(255 * Ri.r, 0, 255) << 16) ^
          (Rt(255 * Ri.g, 0, 255) << 8) ^
          (Rt(255 * Ri.b, 0, 255) << 0)
      );
    }
    getHexString(e = vt) {
      return ("000000" + this.getHex(e).toString(16)).slice(-6);
    }
    getHSL(e, t = tn.workingColorSpace) {
      tn.fromWorkingColorSpace(Ri.copy(this), t);
      const n = Ri.r,
        i = Ri.g,
        r = Ri.b,
        s = Math.max(n, i, r),
        a = Math.min(n, i, r);
      let o, l;
      const c = (a + s) / 2;
      if (a === s) (o = 0), (l = 0);
      else {
        const e = s - a;
        switch (((l = c <= 0.5 ? e / (s + a) : e / (2 - s - a)), s)) {
          case n:
            o = (i - r) / e + (i < r ? 6 : 0);
            break;
          case i:
            o = (r - n) / e + 2;
            break;
          case r:
            o = (n - i) / e + 4;
        }
        o /= 6;
      }
      return (e.h = o), (e.s = l), (e.l = c), e;
    }
    getRGB(e, t = tn.workingColorSpace) {
      return (
        tn.fromWorkingColorSpace(Ri.copy(this), t),
        (e.r = Ri.r),
        (e.g = Ri.g),
        (e.b = Ri.b),
        e
      );
    }
    getStyle(e = vt) {
      tn.fromWorkingColorSpace(Ri.copy(this), e);
      const t = Ri.r,
        n = Ri.g,
        i = Ri.b;
      return e !== vt
        ? `color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`
        : `rgb(${(255 * t) | 0},${(255 * n) | 0},${(255 * i) | 0})`;
    }
    offsetHSL(e, t, n) {
      return (
        this.getHSL(Ei),
        (Ei.h += e),
        (Ei.s += t),
        (Ei.l += n),
        this.setHSL(Ei.h, Ei.s, Ei.l),
        this
      );
    }
    add(e) {
      return (this.r += e.r), (this.g += e.g), (this.b += e.b), this;
    }
    addColors(e, t) {
      return (
        (this.r = e.r + t.r), (this.g = e.g + t.g), (this.b = e.b + t.b), this
      );
    }
    addScalar(e) {
      return (this.r += e), (this.g += e), (this.b += e), this;
    }
    sub(e) {
      return (
        (this.r = Math.max(0, this.r - e.r)),
        (this.g = Math.max(0, this.g - e.g)),
        (this.b = Math.max(0, this.b - e.b)),
        this
      );
    }
    multiply(e) {
      return (this.r *= e.r), (this.g *= e.g), (this.b *= e.b), this;
    }
    multiplyScalar(e) {
      return (this.r *= e), (this.g *= e), (this.b *= e), this;
    }
    lerp(e, t) {
      return (
        (this.r += (e.r - this.r) * t),
        (this.g += (e.g - this.g) * t),
        (this.b += (e.b - this.b) * t),
        this
      );
    }
    lerpColors(e, t, n) {
      return (
        (this.r = e.r + (t.r - e.r) * n),
        (this.g = e.g + (t.g - e.g) * n),
        (this.b = e.b + (t.b - e.b) * n),
        this
      );
    }
    lerpHSL(e, t) {
      this.getHSL(Ei), e.getHSL(Ai);
      const n = Dt(Ei.h, Ai.h, t),
        i = Dt(Ei.s, Ai.s, t),
        r = Dt(Ei.l, Ai.l, t);
      return this.setHSL(n, i, r), this;
    }
    equals(e) {
      return e.r === this.r && e.g === this.g && e.b === this.b;
    }
    fromArray(e, t = 0) {
      return (this.r = e[t]), (this.g = e[t + 1]), (this.b = e[t + 2]), this;
    }
    toArray(e = [], t = 0) {
      return (e[t] = this.r), (e[t + 1] = this.g), (e[t + 2] = this.b), e;
    }
    fromBufferAttribute(e, t) {
      return (
        (this.r = e.getX(t)), (this.g = e.getY(t)), (this.b = e.getZ(t)), this
      );
    }
    toJSON() {
      return this.getHex();
    }
    *[Symbol.iterator]() {
      yield this.r, yield this.g, yield this.b;
    }
  }
  const Ri = new Ci();
  Ci.NAMES = Ti;
  class Pi extends wi {
    constructor(e) {
      super(),
        (this.isMeshBasicMaterial = !0),
        (this.type = "MeshBasicMaterial"),
        (this.color = new Ci(16777215)),
        (this.map = null),
        (this.lightMap = null),
        (this.lightMapIntensity = 1),
        (this.aoMap = null),
        (this.aoMapIntensity = 1),
        (this.specularMap = null),
        (this.alphaMap = null),
        (this.envMap = null),
        (this.combine = k),
        (this.reflectivity = 1),
        (this.refractionRatio = 0.98),
        (this.wireframe = !1),
        (this.wireframeLinewidth = 1),
        (this.wireframeLinecap = "round"),
        (this.wireframeLinejoin = "round"),
        (this.fog = !0),
        this.setValues(e);
    }
    copy(e) {
      return (
        super.copy(e),
        this.color.copy(e.color),
        (this.map = e.map),
        (this.lightMap = e.lightMap),
        (this.lightMapIntensity = e.lightMapIntensity),
        (this.aoMap = e.aoMap),
        (this.aoMapIntensity = e.aoMapIntensity),
        (this.specularMap = e.specularMap),
        (this.alphaMap = e.alphaMap),
        (this.envMap = e.envMap),
        (this.combine = e.combine),
        (this.reflectivity = e.reflectivity),
        (this.refractionRatio = e.refractionRatio),
        (this.wireframe = e.wireframe),
        (this.wireframeLinewidth = e.wireframeLinewidth),
        (this.wireframeLinecap = e.wireframeLinecap),
        (this.wireframeLinejoin = e.wireframeLinejoin),
        (this.fog = e.fog),
        this
      );
    }
  }
  const Di = new jt(),
    Ii = new Bt();
  class Ni {
    constructor(e, t, n = !1) {
      if (Array.isArray(e))
        throw new TypeError(
          "THREE.BufferAttribute: array should be a Typed Array."
        );
      (this.isBufferAttribute = !0),
        (this.name = ""),
        (this.array = e),
        (this.itemSize = t),
        (this.count = void 0 !== e ? e.length / t : 0),
        (this.normalized = n),
        (this.usage = bt),
        (this.updateRange = { offset: 0, count: -1 }),
        (this.version = 0);
    }
    onUploadCallback() {}
    set needsUpdate(e) {
      !0 === e && this.version++;
    }
    setUsage(e) {
      return (this.usage = e), this;
    }
    copy(e) {
      return (
        (this.name = e.name),
        (this.array = new e.array.constructor(e.array)),
        (this.itemSize = e.itemSize),
        (this.count = e.count),
        (this.normalized = e.normalized),
        (this.usage = e.usage),
        this
      );
    }
    copyAt(e, t, n) {
      (e *= this.itemSize), (n *= t.itemSize);
      for (let i = 0, r = this.itemSize; i < r; i++)
        this.array[e + i] = t.array[n + i];
      return this;
    }
    copyArray(e) {
      return this.array.set(e), this;
    }
    applyMatrix3(e) {
      if (2 === this.itemSize)
        for (let t = 0, n = this.count; t < n; t++)
          Ii.fromBufferAttribute(this, t),
            Ii.applyMatrix3(e),
            this.setXY(t, Ii.x, Ii.y);
      else if (3 === this.itemSize)
        for (let t = 0, n = this.count; t < n; t++)
          Di.fromBufferAttribute(this, t),
            Di.applyMatrix3(e),
            this.setXYZ(t, Di.x, Di.y, Di.z);
      return this;
    }
    applyMatrix4(e) {
      for (let t = 0, n = this.count; t < n; t++)
        Di.fromBufferAttribute(this, t),
          Di.applyMatrix4(e),
          this.setXYZ(t, Di.x, Di.y, Di.z);
      return this;
    }
    applyNormalMatrix(e) {
      for (let t = 0, n = this.count; t < n; t++)
        Di.fromBufferAttribute(this, t),
          Di.applyNormalMatrix(e),
          this.setXYZ(t, Di.x, Di.y, Di.z);
      return this;
    }
    transformDirection(e) {
      for (let t = 0, n = this.count; t < n; t++)
        Di.fromBufferAttribute(this, t),
          Di.transformDirection(e),
          this.setXYZ(t, Di.x, Di.y, Di.z);
      return this;
    }
    set(e, t = 0) {
      return this.array.set(e, t), this;
    }
    getX(e) {
      let t = this.array[e * this.itemSize];
      return this.normalized && (t = Ut(t, this.array)), t;
    }
    setX(e, t) {
      return (
        this.normalized && (t = zt(t, this.array)),
        (this.array[e * this.itemSize] = t),
        this
      );
    }
    getY(e) {
      let t = this.array[e * this.itemSize + 1];
      return this.normalized && (t = Ut(t, this.array)), t;
    }
    setY(e, t) {
      return (
        this.normalized && (t = zt(t, this.array)),
        (this.array[e * this.itemSize + 1] = t),
        this
      );
    }
    getZ(e) {
      let t = this.array[e * this.itemSize + 2];
      return this.normalized && (t = Ut(t, this.array)), t;
    }
    setZ(e, t) {
      return (
        this.normalized && (t = zt(t, this.array)),
        (this.array[e * this.itemSize + 2] = t),
        this
      );
    }
    getW(e) {
      let t = this.array[e * this.itemSize + 3];
      return this.normalized && (t = Ut(t, this.array)), t;
    }
    setW(e, t) {
      return (
        this.normalized && (t = zt(t, this.array)),
        (this.array[e * this.itemSize + 3] = t),
        this
      );
    }
    setXY(e, t, n) {
      return (
        (e *= this.itemSize),
        this.normalized && ((t = zt(t, this.array)), (n = zt(n, this.array))),
        (this.array[e + 0] = t),
        (this.array[e + 1] = n),
        this
      );
    }
    setXYZ(e, t, n, i) {
      return (
        (e *= this.itemSize),
        this.normalized &&
          ((t = zt(t, this.array)),
          (n = zt(n, this.array)),
          (i = zt(i, this.array))),
        (this.array[e + 0] = t),
        (this.array[e + 1] = n),
        (this.array[e + 2] = i),
        this
      );
    }
    setXYZW(e, t, n, i, r) {
      return (
        (e *= this.itemSize),
        this.normalized &&
          ((t = zt(t, this.array)),
          (n = zt(n, this.array)),
          (i = zt(i, this.array)),
          (r = zt(r, this.array))),
        (this.array[e + 0] = t),
        (this.array[e + 1] = n),
        (this.array[e + 2] = i),
        (this.array[e + 3] = r),
        this
      );
    }
    onUpload(e) {
      return (this.onUploadCallback = e), this;
    }
    clone() {
      return new this.constructor(this.array, this.itemSize).copy(this);
    }
    toJSON() {
      const e = {
        itemSize: this.itemSize,
        type: this.array.constructor.name,
        array: Array.from(this.array),
        normalized: this.normalized,
      };
      return (
        "" !== this.name && (e.name = this.name),
        this.usage !== bt && (e.usage = this.usage),
        (0 === this.updateRange.offset && -1 === this.updateRange.count) ||
          (e.updateRange = this.updateRange),
        e
      );
    }
    copyColorsArray() {
      console.error(
        "THREE.BufferAttribute: copyColorsArray() was removed in r144."
      );
    }
    copyVector2sArray() {
      console.error(
        "THREE.BufferAttribute: copyVector2sArray() was removed in r144."
      );
    }
    copyVector3sArray() {
      console.error(
        "THREE.BufferAttribute: copyVector3sArray() was removed in r144."
      );
    }
    copyVector4sArray() {
      console.error(
        "THREE.BufferAttribute: copyVector4sArray() was removed in r144."
      );
    }
  }
  class Oi extends Ni {
    constructor(e, t, n) {
      super(new Uint16Array(e), t, n);
    }
  }
  class Ui extends Ni {
    constructor(e, t, n) {
      super(new Uint32Array(e), t, n);
    }
  }
  class zi extends Ni {
    constructor(e, t, n) {
      super(new Float32Array(e), t, n);
    }
  }
  let Fi = 0;
  const Bi = new kn(),
    ki = new ui(),
    Hi = new jt(),
    Gi = new pn(),
    Vi = new pn(),
    Wi = new jt();
  class ji extends Tt {
    constructor() {
      super(),
        (this.isBufferGeometry = !0),
        Object.defineProperty(this, "id", { value: Fi++ }),
        (this.uuid = Ct()),
        (this.name = ""),
        (this.type = "BufferGeometry"),
        (this.index = null),
        (this.attributes = {}),
        (this.morphAttributes = {}),
        (this.morphTargetsRelative = !1),
        (this.groups = []),
        (this.boundingBox = null),
        (this.boundingSphere = null),
        (this.drawRange = { start: 0, count: 1 / 0 }),
        (this.userData = {});
    }
    getIndex() {
      return this.index;
    }
    setIndex(e) {
      return (
        Array.isArray(e)
          ? (this.index = new (Gt(e) ? Ui : Oi)(e, 1))
          : (this.index = e),
        this
      );
    }
    getAttribute(e) {
      return this.attributes[e];
    }
    setAttribute(e, t) {
      return (this.attributes[e] = t), this;
    }
    deleteAttribute(e) {
      return delete this.attributes[e], this;
    }
    hasAttribute(e) {
      return void 0 !== this.attributes[e];
    }
    addGroup(e, t, n = 0) {
      this.groups.push({ start: e, count: t, materialIndex: n });
    }
    clearGroups() {
      this.groups = [];
    }
    setDrawRange(e, t) {
      (this.drawRange.start = e), (this.drawRange.count = t);
    }
    applyMatrix4(e) {
      const t = this.attributes.position;
      void 0 !== t && (t.applyMatrix4(e), (t.needsUpdate = !0));
      const n = this.attributes.normal;
      if (void 0 !== n) {
        const t = new kt().getNormalMatrix(e);
        n.applyNormalMatrix(t), (n.needsUpdate = !0);
      }
      const i = this.attributes.tangent;
      return (
        void 0 !== i && (i.transformDirection(e), (i.needsUpdate = !0)),
        null !== this.boundingBox && this.computeBoundingBox(),
        null !== this.boundingSphere && this.computeBoundingSphere(),
        this
      );
    }
    applyQuaternion(e) {
      return Bi.makeRotationFromQuaternion(e), this.applyMatrix4(Bi), this;
    }
    rotateX(e) {
      return Bi.makeRotationX(e), this.applyMatrix4(Bi), this;
    }
    rotateY(e) {
      return Bi.makeRotationY(e), this.applyMatrix4(Bi), this;
    }
    rotateZ(e) {
      return Bi.makeRotationZ(e), this.applyMatrix4(Bi), this;
    }
    translate(e, t, n) {
      return Bi.makeTranslation(e, t, n), this.applyMatrix4(Bi), this;
    }
    scale(e, t, n) {
      return Bi.makeScale(e, t, n), this.applyMatrix4(Bi), this;
    }
    lookAt(e) {
      return (
        ki.lookAt(e), ki.updateMatrix(), this.applyMatrix4(ki.matrix), this
      );
    }
    center() {
      return (
        this.computeBoundingBox(),
        this.boundingBox.getCenter(Hi).negate(),
        this.translate(Hi.x, Hi.y, Hi.z),
        this
      );
    }
    setFromPoints(e) {
      const t = [];
      for (let n = 0, i = e.length; n < i; n++) {
        const i = e[n];
        t.push(i.x, i.y, i.z || 0);
      }
      return this.setAttribute("position", new zi(t, 3)), this;
    }
    computeBoundingBox() {
      null === this.boundingBox && (this.boundingBox = new pn());
      const e = this.attributes.position,
        t = this.morphAttributes.position;
      if (e && e.isGLBufferAttribute)
        return (
          console.error(
            'THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',
            this
          ),
          void this.boundingBox.set(
            new jt(-1 / 0, -1 / 0, -1 / 0),
            new jt(1 / 0, 1 / 0, 1 / 0)
          )
        );
      if (void 0 !== e) {
        if ((this.boundingBox.setFromBufferAttribute(e), t))
          for (let e = 0, n = t.length; e < n; e++) {
            const n = t[e];
            Gi.setFromBufferAttribute(n),
              this.morphTargetsRelative
                ? (Wi.addVectors(this.boundingBox.min, Gi.min),
                  this.boundingBox.expandByPoint(Wi),
                  Wi.addVectors(this.boundingBox.max, Gi.max),
                  this.boundingBox.expandByPoint(Wi))
                : (this.boundingBox.expandByPoint(Gi.min),
                  this.boundingBox.expandByPoint(Gi.max));
          }
      } else this.boundingBox.makeEmpty();
      (isNaN(this.boundingBox.min.x) ||
        isNaN(this.boundingBox.min.y) ||
        isNaN(this.boundingBox.min.z)) &&
        console.error(
          'THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',
          this
        );
    }
    computeBoundingSphere() {
      null === this.boundingSphere && (this.boundingSphere = new Pn());
      const e = this.attributes.position,
        t = this.morphAttributes.position;
      if (e && e.isGLBufferAttribute)
        return (
          console.error(
            'THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',
            this
          ),
          void this.boundingSphere.set(new jt(), 1 / 0)
        );
      if (e) {
        const n = this.boundingSphere.center;
        if ((Gi.setFromBufferAttribute(e), t))
          for (let e = 0, n = t.length; e < n; e++) {
            const n = t[e];
            Vi.setFromBufferAttribute(n),
              this.morphTargetsRelative
                ? (Wi.addVectors(Gi.min, Vi.min),
                  Gi.expandByPoint(Wi),
                  Wi.addVectors(Gi.max, Vi.max),
                  Gi.expandByPoint(Wi))
                : (Gi.expandByPoint(Vi.min), Gi.expandByPoint(Vi.max));
          }
        Gi.getCenter(n);
        let i = 0;
        for (let t = 0, r = e.count; t < r; t++)
          Wi.fromBufferAttribute(e, t),
            (i = Math.max(i, n.distanceToSquared(Wi)));
        if (t)
          for (let r = 0, s = t.length; r < s; r++) {
            const s = t[r],
              a = this.morphTargetsRelative;
            for (let t = 0, r = s.count; t < r; t++)
              Wi.fromBufferAttribute(s, t),
                a && (Hi.fromBufferAttribute(e, t), Wi.add(Hi)),
                (i = Math.max(i, n.distanceToSquared(Wi)));
          }
        (this.boundingSphere.radius = Math.sqrt(i)),
          isNaN(this.boundingSphere.radius) &&
            console.error(
              'THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',
              this
            );
      }
    }
    computeTangents() {
      const e = this.index,
        t = this.attributes;
      if (
        null === e ||
        void 0 === t.position ||
        void 0 === t.normal ||
        void 0 === t.uv
      )
        return void console.error(
          "THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)"
        );
      const n = e.array,
        i = t.position.array,
        r = t.normal.array,
        s = t.uv.array,
        a = i.length / 3;
      !1 === this.hasAttribute("tangent") &&
        this.setAttribute("tangent", new Ni(new Float32Array(4 * a), 4));
      const o = this.getAttribute("tangent").array,
        l = [],
        c = [];
      for (let e = 0; e < a; e++) (l[e] = new jt()), (c[e] = new jt());
      const h = new jt(),
        u = new jt(),
        d = new jt(),
        p = new Bt(),
        f = new Bt(),
        m = new Bt(),
        g = new jt(),
        _ = new jt();
      function v(e, t, n) {
        h.fromArray(i, 3 * e),
          u.fromArray(i, 3 * t),
          d.fromArray(i, 3 * n),
          p.fromArray(s, 2 * e),
          f.fromArray(s, 2 * t),
          m.fromArray(s, 2 * n),
          u.sub(h),
          d.sub(h),
          f.sub(p),
          m.sub(p);
        const r = 1 / (f.x * m.y - m.x * f.y);
        isFinite(r) &&
          (g
            .copy(u)
            .multiplyScalar(m.y)
            .addScaledVector(d, -f.y)
            .multiplyScalar(r),
          _.copy(d)
            .multiplyScalar(f.x)
            .addScaledVector(u, -m.x)
            .multiplyScalar(r),
          l[e].add(g),
          l[t].add(g),
          l[n].add(g),
          c[e].add(_),
          c[t].add(_),
          c[n].add(_));
      }
      let x = this.groups;
      0 === x.length && (x = [{ start: 0, count: n.length }]);
      for (let e = 0, t = x.length; e < t; ++e) {
        const t = x[e],
          i = t.start;
        for (let e = i, r = i + t.count; e < r; e += 3)
          v(n[e + 0], n[e + 1], n[e + 2]);
      }
      const y = new jt(),
        M = new jt(),
        b = new jt(),
        S = new jt();
      function w(e) {
        b.fromArray(r, 3 * e), S.copy(b);
        const t = l[e];
        y.copy(t),
          y.sub(b.multiplyScalar(b.dot(t))).normalize(),
          M.crossVectors(S, t);
        const n = M.dot(c[e]) < 0 ? -1 : 1;
        (o[4 * e] = y.x),
          (o[4 * e + 1] = y.y),
          (o[4 * e + 2] = y.z),
          (o[4 * e + 3] = n);
      }
      for (let e = 0, t = x.length; e < t; ++e) {
        const t = x[e],
          i = t.start;
        for (let e = i, r = i + t.count; e < r; e += 3)
          w(n[e + 0]), w(n[e + 1]), w(n[e + 2]);
      }
    }
    computeVertexNormals() {
      const e = this.index,
        t = this.getAttribute("position");
      if (void 0 !== t) {
        let n = this.getAttribute("normal");
        if (void 0 === n)
          (n = new Ni(new Float32Array(3 * t.count), 3)),
            this.setAttribute("normal", n);
        else for (let e = 0, t = n.count; e < t; e++) n.setXYZ(e, 0, 0, 0);
        const i = new jt(),
          r = new jt(),
          s = new jt(),
          a = new jt(),
          o = new jt(),
          l = new jt(),
          c = new jt(),
          h = new jt();
        if (e)
          for (let u = 0, d = e.count; u < d; u += 3) {
            const d = e.getX(u + 0),
              p = e.getX(u + 1),
              f = e.getX(u + 2);
            i.fromBufferAttribute(t, d),
              r.fromBufferAttribute(t, p),
              s.fromBufferAttribute(t, f),
              c.subVectors(s, r),
              h.subVectors(i, r),
              c.cross(h),
              a.fromBufferAttribute(n, d),
              o.fromBufferAttribute(n, p),
              l.fromBufferAttribute(n, f),
              a.add(c),
              o.add(c),
              l.add(c),
              n.setXYZ(d, a.x, a.y, a.z),
              n.setXYZ(p, o.x, o.y, o.z),
              n.setXYZ(f, l.x, l.y, l.z);
          }
        else
          for (let e = 0, a = t.count; e < a; e += 3)
            i.fromBufferAttribute(t, e + 0),
              r.fromBufferAttribute(t, e + 1),
              s.fromBufferAttribute(t, e + 2),
              c.subVectors(s, r),
              h.subVectors(i, r),
              c.cross(h),
              n.setXYZ(e + 0, c.x, c.y, c.z),
              n.setXYZ(e + 1, c.x, c.y, c.z),
              n.setXYZ(e + 2, c.x, c.y, c.z);
        this.normalizeNormals(), (n.needsUpdate = !0);
      }
    }
    merge() {
      return (
        console.error(
          "THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."
        ),
        this
      );
    }
    normalizeNormals() {
      const e = this.attributes.normal;
      for (let t = 0, n = e.count; t < n; t++)
        Wi.fromBufferAttribute(e, t),
          Wi.normalize(),
          e.setXYZ(t, Wi.x, Wi.y, Wi.z);
    }
    toNonIndexed() {
      function e(e, t) {
        const n = e.array,
          i = e.itemSize,
          r = e.normalized,
          s = new n.constructor(t.length * i);
        let a = 0,
          o = 0;
        for (let r = 0, l = t.length; r < l; r++) {
          a = e.isInterleavedBufferAttribute
            ? t[r] * e.data.stride + e.offset
            : t[r] * i;
          for (let e = 0; e < i; e++) s[o++] = n[a++];
        }
        return new Ni(s, i, r);
      }
      if (null === this.index)
        return (
          console.warn(
            "THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."
          ),
          this
        );
      const t = new ji(),
        n = this.index.array,
        i = this.attributes;
      for (const r in i) {
        const s = e(i[r], n);
        t.setAttribute(r, s);
      }
      const r = this.morphAttributes;
      for (const i in r) {
        const s = [],
          a = r[i];
        for (let t = 0, i = a.length; t < i; t++) {
          const i = e(a[t], n);
          s.push(i);
        }
        t.morphAttributes[i] = s;
      }
      t.morphTargetsRelative = this.morphTargetsRelative;
      const s = this.groups;
      for (let e = 0, n = s.length; e < n; e++) {
        const n = s[e];
        t.addGroup(n.start, n.count, n.materialIndex);
      }
      return t;
    }
    toJSON() {
      const e = {
        metadata: {
          version: 4.5,
          type: "BufferGeometry",
          generator: "BufferGeometry.toJSON",
        },
      };
      if (
        ((e.uuid = this.uuid),
        (e.type = this.type),
        "" !== this.name && (e.name = this.name),
        Object.keys(this.userData).length > 0 && (e.userData = this.userData),
        void 0 !== this.parameters)
      ) {
        const t = this.parameters;
        for (const n in t) void 0 !== t[n] && (e[n] = t[n]);
        return e;
      }
      e.data = { attributes: {} };
      const t = this.index;
      null !== t &&
        (e.data.index = {
          type: t.array.constructor.name,
          array: Array.prototype.slice.call(t.array),
        });
      const n = this.attributes;
      for (const t in n) {
        const i = n[t];
        e.data.attributes[t] = i.toJSON(e.data);
      }
      const i = {};
      let r = !1;
      for (const t in this.morphAttributes) {
        const n = this.morphAttributes[t],
          s = [];
        for (let t = 0, i = n.length; t < i; t++) {
          const i = n[t];
          s.push(i.toJSON(e.data));
        }
        s.length > 0 && ((i[t] = s), (r = !0));
      }
      r &&
        ((e.data.morphAttributes = i),
        (e.data.morphTargetsRelative = this.morphTargetsRelative));
      const s = this.groups;
      s.length > 0 && (e.data.groups = JSON.parse(JSON.stringify(s)));
      const a = this.boundingSphere;
      return (
        null !== a &&
          (e.data.boundingSphere = {
            center: a.center.toArray(),
            radius: a.radius,
          }),
        e
      );
    }
    clone() {
      return new this.constructor().copy(this);
    }
    copy(e) {
      (this.index = null),
        (this.attributes = {}),
        (this.morphAttributes = {}),
        (this.groups = []),
        (this.boundingBox = null),
        (this.boundingSphere = null);
      const t = {};
      this.name = e.name;
      const n = e.index;
      null !== n && this.setIndex(n.clone(t));
      const i = e.attributes;
      for (const e in i) {
        const n = i[e];
        this.setAttribute(e, n.clone(t));
      }
      const r = e.morphAttributes;
      for (const e in r) {
        const n = [],
          i = r[e];
        for (let e = 0, r = i.length; e < r; e++) n.push(i[e].clone(t));
        this.morphAttributes[e] = n;
      }
      this.morphTargetsRelative = e.morphTargetsRelative;
      const s = e.groups;
      for (let e = 0, t = s.length; e < t; e++) {
        const t = s[e];
        this.addGroup(t.start, t.count, t.materialIndex);
      }
      const a = e.boundingBox;
      null !== a && (this.boundingBox = a.clone());
      const o = e.boundingSphere;
      return (
        null !== o && (this.boundingSphere = o.clone()),
        (this.drawRange.start = e.drawRange.start),
        (this.drawRange.count = e.drawRange.count),
        (this.userData = e.userData),
        this
      );
    }
    dispose() {
      this.dispatchEvent({ type: "dispose" });
    }
  }
  const Xi = new kn(),
    qi = new Bn(),
    Yi = new Pn(),
    Ki = new jt(),
    Zi = new jt(),
    Ji = new jt(),
    Qi = new jt(),
    $i = new jt(),
    er = new jt(),
    tr = new Bt(),
    nr = new Bt(),
    ir = new Bt(),
    rr = new jt(),
    sr = new jt();
  class ar extends ui {
    constructor(e = new ji(), t = new Pi()) {
      super(),
        (this.isMesh = !0),
        (this.type = "Mesh"),
        (this.geometry = e),
        (this.material = t),
        this.updateMorphTargets();
    }
    copy(e, t) {
      return (
        super.copy(e, t),
        void 0 !== e.morphTargetInfluences &&
          (this.morphTargetInfluences = e.morphTargetInfluences.slice()),
        void 0 !== e.morphTargetDictionary &&
          (this.morphTargetDictionary = Object.assign(
            {},
            e.morphTargetDictionary
          )),
        (this.material = e.material),
        (this.geometry = e.geometry),
        this
      );
    }
    updateMorphTargets() {
      const e = this.geometry.morphAttributes,
        t = Object.keys(e);
      if (t.length > 0) {
        const n = e[t[0]];
        if (void 0 !== n) {
          (this.morphTargetInfluences = []), (this.morphTargetDictionary = {});
          for (let e = 0, t = n.length; e < t; e++) {
            const t = n[e].name || String(e);
            this.morphTargetInfluences.push(0),
              (this.morphTargetDictionary[t] = e);
          }
        }
      }
    }
    getVertexPosition(e, t) {
      const n = this.geometry,
        i = n.attributes.position,
        r = n.morphAttributes.position,
        s = n.morphTargetsRelative;
      t.fromBufferAttribute(i, e);
      const a = this.morphTargetInfluences;
      if (r && a) {
        er.set(0, 0, 0);
        for (let n = 0, i = r.length; n < i; n++) {
          const i = a[n],
            o = r[n];
          0 !== i &&
            ($i.fromBufferAttribute(o, e),
            s ? er.addScaledVector($i, i) : er.addScaledVector($i.sub(t), i));
        }
        t.add(er);
      }
      return this.isSkinnedMesh && this.boneTransform(e, t), t;
    }
    raycast(e, t) {
      const n = this.geometry,
        i = this.material,
        r = this.matrixWorld;
      if (void 0 === i) return;
      if (
        (null === n.boundingSphere && n.computeBoundingSphere(),
        Yi.copy(n.boundingSphere),
        Yi.applyMatrix4(r),
        qi.copy(e.ray).recast(e.near),
        !1 === Yi.containsPoint(qi.origin))
      ) {
        if (null === qi.intersectSphere(Yi, Ki)) return;
        if (qi.origin.distanceToSquared(Ki) > (e.far - e.near) ** 2) return;
      }
      if (
        (Xi.copy(r).invert(),
        qi.copy(e.ray).applyMatrix4(Xi),
        null !== n.boundingBox && !1 === qi.intersectsBox(n.boundingBox))
      )
        return;
      let s;
      const a = n.index,
        o = n.attributes.position,
        l = n.attributes.uv,
        c = n.attributes.uv2,
        h = n.groups,
        u = n.drawRange;
      if (null !== a)
        if (Array.isArray(i))
          for (let n = 0, r = h.length; n < r; n++) {
            const r = h[n],
              o = i[r.materialIndex];
            for (
              let n = Math.max(r.start, u.start),
                i = Math.min(
                  a.count,
                  Math.min(r.start + r.count, u.start + u.count)
                );
              n < i;
              n += 3
            ) {
              const i = a.getX(n),
                h = a.getX(n + 1),
                u = a.getX(n + 2);
              (s = or(this, o, e, qi, l, c, i, h, u)),
                s &&
                  ((s.faceIndex = Math.floor(n / 3)),
                  (s.face.materialIndex = r.materialIndex),
                  t.push(s));
            }
          }
        else
          for (
            let n = Math.max(0, u.start),
              r = Math.min(a.count, u.start + u.count);
            n < r;
            n += 3
          ) {
            const r = a.getX(n),
              o = a.getX(n + 1),
              h = a.getX(n + 2);
            (s = or(this, i, e, qi, l, c, r, o, h)),
              s && ((s.faceIndex = Math.floor(n / 3)), t.push(s));
          }
      else if (void 0 !== o)
        if (Array.isArray(i))
          for (let n = 0, r = h.length; n < r; n++) {
            const r = h[n],
              a = i[r.materialIndex];
            for (
              let n = Math.max(r.start, u.start),
                i = Math.min(
                  o.count,
                  Math.min(r.start + r.count, u.start + u.count)
                );
              n < i;
              n += 3
            )
              (s = or(this, a, e, qi, l, c, n, n + 1, n + 2)),
                s &&
                  ((s.faceIndex = Math.floor(n / 3)),
                  (s.face.materialIndex = r.materialIndex),
                  t.push(s));
          }
        else
          for (
            let n = Math.max(0, u.start),
              r = Math.min(o.count, u.start + u.count);
            n < r;
            n += 3
          )
            (s = or(this, i, e, qi, l, c, n, n + 1, n + 2)),
              s && ((s.faceIndex = Math.floor(n / 3)), t.push(s));
    }
  }
  function or(e, t, n, i, r, s, a, c, h) {
    e.getVertexPosition(a, Zi),
      e.getVertexPosition(c, Ji),
      e.getVertexPosition(h, Qi);
    const u = (function (e, t, n, i, r, s, a, c) {
      let h;
      if (
        ((h =
          t.side === l
            ? i.intersectTriangle(a, s, r, !0, c)
            : i.intersectTriangle(r, s, a, t.side === o, c)),
        null === h)
      )
        return null;
      sr.copy(c), sr.applyMatrix4(e.matrixWorld);
      const u = n.ray.origin.distanceTo(sr);
      return u < n.near || u > n.far
        ? null
        : { distance: u, point: sr.clone(), object: e };
    })(e, t, n, i, Zi, Ji, Qi, rr);
    if (u) {
      r &&
        (tr.fromBufferAttribute(r, a),
        nr.fromBufferAttribute(r, c),
        ir.fromBufferAttribute(r, h),
        (u.uv = bi.getUV(rr, Zi, Ji, Qi, tr, nr, ir, new Bt()))),
        s &&
          (tr.fromBufferAttribute(s, a),
          nr.fromBufferAttribute(s, c),
          ir.fromBufferAttribute(s, h),
          (u.uv2 = bi.getUV(rr, Zi, Ji, Qi, tr, nr, ir, new Bt())));
      const e = { a, b: c, c: h, normal: new jt(), materialIndex: 0 };
      bi.getNormal(Zi, Ji, Qi, e.normal), (u.face = e);
    }
    return u;
  }
  class lr extends ji {
    constructor(e = 1, t = 1, n = 1, i = 1, r = 1, s = 1) {
      super(),
        (this.type = "BoxGeometry"),
        (this.parameters = {
          width: e,
          height: t,
          depth: n,
          widthSegments: i,
          heightSegments: r,
          depthSegments: s,
        });
      const a = this;
      (i = Math.floor(i)), (r = Math.floor(r)), (s = Math.floor(s));
      const o = [],
        l = [],
        c = [],
        h = [];
      let u = 0,
        d = 0;
      function p(e, t, n, i, r, s, p, f, m, g, _) {
        const v = s / m,
          x = p / g,
          y = s / 2,
          M = p / 2,
          b = f / 2,
          S = m + 1,
          w = g + 1;
        let T = 0,
          E = 0;
        const A = new jt();
        for (let s = 0; s < w; s++) {
          const a = s * x - M;
          for (let o = 0; o < S; o++) {
            const u = o * v - y;
            (A[e] = u * i),
              (A[t] = a * r),
              (A[n] = b),
              l.push(A.x, A.y, A.z),
              (A[e] = 0),
              (A[t] = 0),
              (A[n] = f > 0 ? 1 : -1),
              c.push(A.x, A.y, A.z),
              h.push(o / m),
              h.push(1 - s / g),
              (T += 1);
          }
        }
        for (let e = 0; e < g; e++)
          for (let t = 0; t < m; t++) {
            const n = u + t + S * e,
              i = u + t + S * (e + 1),
              r = u + (t + 1) + S * (e + 1),
              s = u + (t + 1) + S * e;
            o.push(n, i, s), o.push(i, r, s), (E += 6);
          }
        a.addGroup(d, E, _), (d += E), (u += T);
      }
      p("z", "y", "x", -1, -1, n, t, e, s, r, 0),
        p("z", "y", "x", 1, -1, n, t, -e, s, r, 1),
        p("x", "z", "y", 1, 1, e, n, t, i, s, 2),
        p("x", "z", "y", 1, -1, e, n, -t, i, s, 3),
        p("x", "y", "z", 1, -1, e, t, n, i, r, 4),
        p("x", "y", "z", -1, -1, e, t, -n, i, r, 5),
        this.setIndex(o),
        this.setAttribute("position", new zi(l, 3)),
        this.setAttribute("normal", new zi(c, 3)),
        this.setAttribute("uv", new zi(h, 2));
    }
    copy(e) {
      return (
        super.copy(e), (this.parameters = Object.assign({}, e.parameters)), this
      );
    }
    static fromJSON(e) {
      return new lr(
        e.width,
        e.height,
        e.depth,
        e.widthSegments,
        e.heightSegments,
        e.depthSegments
      );
    }
  }
  function cr(e) {
    const t = {};
    for (const n in e) {
      t[n] = {};
      for (const i in e[n]) {
        const r = e[n][i];
        r &&
        (r.isColor ||
          r.isMatrix3 ||
          r.isMatrix4 ||
          r.isVector2 ||
          r.isVector3 ||
          r.isVector4 ||
          r.isTexture ||
          r.isQuaternion)
          ? (t[n][i] = r.clone())
          : Array.isArray(r)
          ? (t[n][i] = r.slice())
          : (t[n][i] = r);
      }
    }
    return t;
  }
  function hr(e) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const i = cr(e[n]);
      for (const e in i) t[e] = i[e];
    }
    return t;
  }
  function ur(e) {
    return null === e.getRenderTarget() && e.outputEncoding === ft ? vt : xt;
  }
  const dr = { clone: cr, merge: hr };
  class pr extends wi {
    constructor(e) {
      super(),
        (this.isShaderMaterial = !0),
        (this.type = "ShaderMaterial"),
        (this.defines = {}),
        (this.uniforms = {}),
        (this.uniformsGroups = []),
        (this.vertexShader =
          "void main() {\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}"),
        (this.fragmentShader =
          "void main() {\n\tgl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}"),
        (this.linewidth = 1),
        (this.wireframe = !1),
        (this.wireframeLinewidth = 1),
        (this.fog = !1),
        (this.lights = !1),
        (this.clipping = !1),
        (this.extensions = {
          derivatives: !1,
          fragDepth: !1,
          drawBuffers: !1,
          shaderTextureLOD: !1,
        }),
        (this.defaultAttributeValues = {
          color: [1, 1, 1],
          uv: [0, 0],
          uv2: [0, 0],
        }),
        (this.index0AttributeName = void 0),
        (this.uniformsNeedUpdate = !1),
        (this.glslVersion = null),
        void 0 !== e && this.setValues(e);
    }
    copy(e) {
      return (
        super.copy(e),
        (this.fragmentShader = e.fragmentShader),
        (this.vertexShader = e.vertexShader),
        (this.uniforms = cr(e.uniforms)),
        (this.uniformsGroups = (function (e) {
          const t = [];
          for (let n = 0; n < e.length; n++) t.push(e[n].clone());
          return t;
        })(e.uniformsGroups)),
        (this.defines = Object.assign({}, e.defines)),
        (this.wireframe = e.wireframe),
        (this.wireframeLinewidth = e.wireframeLinewidth),
        (this.fog = e.fog),
        (this.lights = e.lights),
        (this.clipping = e.clipping),
        (this.extensions = Object.assign({}, e.extensions)),
        (this.glslVersion = e.glslVersion),
        this
      );
    }
    toJSON(e) {
      const t = super.toJSON(e);
      (t.glslVersion = this.glslVersion), (t.uniforms = {});
      for (const n in this.uniforms) {
        const i = this.uniforms[n].value;
        i && i.isTexture
          ? (t.uniforms[n] = { type: "t", value: i.toJSON(e).uuid })
          : i && i.isColor
          ? (t.uniforms[n] = { type: "c", value: i.getHex() })
          : i && i.isVector2
          ? (t.uniforms[n] = { type: "v2", value: i.toArray() })
          : i && i.isVector3
          ? (t.uniforms[n] = { type: "v3", value: i.toArray() })
          : i && i.isVector4
          ? (t.uniforms[n] = { type: "v4", value: i.toArray() })
          : i && i.isMatrix3
          ? (t.uniforms[n] = { type: "m3", value: i.toArray() })
          : i && i.isMatrix4
          ? (t.uniforms[n] = { type: "m4", value: i.toArray() })
          : (t.uniforms[n] = { value: i });
      }
      Object.keys(this.defines).length > 0 && (t.defines = this.defines),
        (t.vertexShader = this.vertexShader),
        (t.fragmentShader = this.fragmentShader);
      const n = {};
      for (const e in this.extensions) !0 === this.extensions[e] && (n[e] = !0);
      return Object.keys(n).length > 0 && (t.extensions = n), t;
    }
  }
  class fr extends ui {
    constructor() {
      super(),
        (this.isCamera = !0),
        (this.type = "Camera"),
        (this.matrixWorldInverse = new kn()),
        (this.projectionMatrix = new kn()),
        (this.projectionMatrixInverse = new kn());
    }
    copy(e, t) {
      return (
        super.copy(e, t),
        this.matrixWorldInverse.copy(e.matrixWorldInverse),
        this.projectionMatrix.copy(e.projectionMatrix),
        this.projectionMatrixInverse.copy(e.projectionMatrixInverse),
        this
      );
    }
    getWorldDirection(e) {
      this.updateWorldMatrix(!0, !1);
      const t = this.matrixWorld.elements;
      return e.set(-t[8], -t[9], -t[10]).normalize();
    }
    updateMatrixWorld(e) {
      super.updateMatrixWorld(e),
        this.matrixWorldInverse.copy(this.matrixWorld).invert();
    }
    updateWorldMatrix(e, t) {
      super.updateWorldMatrix(e, t),
        this.matrixWorldInverse.copy(this.matrixWorld).invert();
    }
    clone() {
      return new this.constructor().copy(this);
    }
  }
  class mr extends fr {
    constructor(e = 50, t = 1, n = 0.1, i = 2e3) {
      super(),
        (this.isPerspectiveCamera = !0),
        (this.type = "PerspectiveCamera"),
        (this.fov = e),
        (this.zoom = 1),
        (this.near = n),
        (this.far = i),
        (this.focus = 10),
        (this.aspect = t),
        (this.view = null),
        (this.filmGauge = 35),
        (this.filmOffset = 0),
        this.updateProjectionMatrix();
    }
    copy(e, t) {
      return (
        super.copy(e, t),
        (this.fov = e.fov),
        (this.zoom = e.zoom),
        (this.near = e.near),
        (this.far = e.far),
        (this.focus = e.focus),
        (this.aspect = e.aspect),
        (this.view = null === e.view ? null : Object.assign({}, e.view)),
        (this.filmGauge = e.filmGauge),
        (this.filmOffset = e.filmOffset),
        this
      );
    }
    setFocalLength(e) {
      const t = (0.5 * this.getFilmHeight()) / e;
      (this.fov = 2 * Lt * Math.atan(t)), this.updateProjectionMatrix();
    }
    getFocalLength() {
      const e = Math.tan(0.5 * At * this.fov);
      return (0.5 * this.getFilmHeight()) / e;
    }
    getEffectiveFOV() {
      return 2 * Lt * Math.atan(Math.tan(0.5 * At * this.fov) / this.zoom);
    }
    getFilmWidth() {
      return this.filmGauge * Math.min(this.aspect, 1);
    }
    getFilmHeight() {
      return this.filmGauge / Math.max(this.aspect, 1);
    }
    setViewOffset(e, t, n, i, r, s) {
      (this.aspect = e / t),
        null === this.view &&
          (this.view = {
            enabled: !0,
            fullWidth: 1,
            fullHeight: 1,
            offsetX: 0,
            offsetY: 0,
            width: 1,
            height: 1,
          }),
        (this.view.enabled = !0),
        (this.view.fullWidth = e),
        (this.view.fullHeight = t),
        (this.view.offsetX = n),
        (this.view.offsetY = i),
        (this.view.width = r),
        (this.view.height = s),
        this.updateProjectionMatrix();
    }
    clearViewOffset() {
      null !== this.view && (this.view.enabled = !1),
        this.updateProjectionMatrix();
    }
    updateProjectionMatrix() {
      const e = this.near;
      let t = (e * Math.tan(0.5 * At * this.fov)) / this.zoom,
        n = 2 * t,
        i = this.aspect * n,
        r = -0.5 * i;
      const s = this.view;
      if (null !== this.view && this.view.enabled) {
        const e = s.fullWidth,
          a = s.fullHeight;
        (r += (s.offsetX * i) / e),
          (t -= (s.offsetY * n) / a),
          (i *= s.width / e),
          (n *= s.height / a);
      }
      const a = this.filmOffset;
      0 !== a && (r += (e * a) / this.getFilmWidth()),
        this.projectionMatrix.makePerspective(r, r + i, t, t - n, e, this.far),
        this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
    }
    toJSON(e) {
      const t = super.toJSON(e);
      return (
        (t.object.fov = this.fov),
        (t.object.zoom = this.zoom),
        (t.object.near = this.near),
        (t.object.far = this.far),
        (t.object.focus = this.focus),
        (t.object.aspect = this.aspect),
        null !== this.view && (t.object.view = Object.assign({}, this.view)),
        (t.object.filmGauge = this.filmGauge),
        (t.object.filmOffset = this.filmOffset),
        t
      );
    }
  }
  const gr = -90;
  class _r extends ui {
    constructor(e, t, n) {
      super(), (this.type = "CubeCamera"), (this.renderTarget = n);
      const i = new mr(gr, 1, e, t);
      (i.layers = this.layers),
        i.up.set(0, 1, 0),
        i.lookAt(1, 0, 0),
        this.add(i);
      const r = new mr(gr, 1, e, t);
      (r.layers = this.layers),
        r.up.set(0, 1, 0),
        r.lookAt(-1, 0, 0),
        this.add(r);
      const s = new mr(gr, 1, e, t);
      (s.layers = this.layers),
        s.up.set(0, 0, -1),
        s.lookAt(0, 1, 0),
        this.add(s);
      const a = new mr(gr, 1, e, t);
      (a.layers = this.layers),
        a.up.set(0, 0, 1),
        a.lookAt(0, -1, 0),
        this.add(a);
      const o = new mr(gr, 1, e, t);
      (o.layers = this.layers),
        o.up.set(0, 1, 0),
        o.lookAt(0, 0, 1),
        this.add(o);
      const l = new mr(gr, 1, e, t);
      (l.layers = this.layers),
        l.up.set(0, 1, 0),
        l.lookAt(0, 0, -1),
        this.add(l);
    }
    update(e, t) {
      null === this.parent && this.updateMatrixWorld();
      const n = this.renderTarget,
        [i, r, s, a, o, l] = this.children,
        c = e.getRenderTarget(),
        h = e.toneMapping,
        u = e.xr.enabled;
      (e.toneMapping = V), (e.xr.enabled = !1);
      const d = n.texture.generateMipmaps;
      (n.texture.generateMipmaps = !1),
        e.setRenderTarget(n, 0),
        e.render(t, i),
        e.setRenderTarget(n, 1),
        e.render(t, r),
        e.setRenderTarget(n, 2),
        e.render(t, s),
        e.setRenderTarget(n, 3),
        e.render(t, a),
        e.setRenderTarget(n, 4),
        e.render(t, o),
        (n.texture.generateMipmaps = d),
        e.setRenderTarget(n, 5),
        e.render(t, l),
        e.setRenderTarget(c),
        (e.toneMapping = h),
        (e.xr.enabled = u),
        (n.texture.needsPMREMUpdate = !0);
    }
  }
  class vr extends ln {
    constructor(e, t, n, i, r, s, a, o, l, c) {
      super(
        (e = void 0 !== e ? e : []),
        (t = void 0 !== t ? t : K),
        n,
        i,
        r,
        s,
        a,
        o,
        l,
        c
      ),
        (this.isCubeTexture = !0),
        (this.flipY = !1);
    }
    get images() {
      return this.image;
    }
    set images(e) {
      this.image = e;
    }
  }
  class xr extends hn {
    constructor(e = 1, t = {}) {
      super(e, e, t), (this.isWebGLCubeRenderTarget = !0);
      const n = { width: e, height: e, depth: 1 },
        i = [n, n, n, n, n, n];
      (this.texture = new vr(
        i,
        t.mapping,
        t.wrapS,
        t.wrapT,
        t.magFilter,
        t.minFilter,
        t.format,
        t.type,
        t.anisotropy,
        t.encoding
      )),
        (this.texture.isRenderTargetTexture = !0),
        (this.texture.generateMipmaps =
          void 0 !== t.generateMipmaps && t.generateMipmaps),
        (this.texture.minFilter = void 0 !== t.minFilter ? t.minFilter : ae);
    }
    fromEquirectangularTexture(e, t) {
      (this.texture.type = t.type),
        (this.texture.encoding = t.encoding),
        (this.texture.generateMipmaps = t.generateMipmaps),
        (this.texture.minFilter = t.minFilter),
        (this.texture.magFilter = t.magFilter);
      const n = { tEquirect: { value: null } },
        i =
          "\n\n\t\t\t\tvarying vec3 vWorldDirection;\n\n\t\t\t\tvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\n\t\t\t\t\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n\n\t\t\t\t}\n\n\t\t\t\tvoid main() {\n\n\t\t\t\t\tvWorldDirection = transformDirection( position, modelMatrix );\n\n\t\t\t\t\t#include <begin_vertex>\n\t\t\t\t\t#include <project_vertex>\n\n\t\t\t\t}\n\t\t\t",
        r =
          "\n\n\t\t\t\tuniform sampler2D tEquirect;\n\n\t\t\t\tvarying vec3 vWorldDirection;\n\n\t\t\t\t#include <common>\n\n\t\t\t\tvoid main() {\n\n\t\t\t\t\tvec3 direction = normalize( vWorldDirection );\n\n\t\t\t\t\tvec2 sampleUV = equirectUv( direction );\n\n\t\t\t\t\tgl_FragColor = texture2D( tEquirect, sampleUV );\n\n\t\t\t\t}\n\t\t\t",
        s = new lr(5, 5, 5),
        a = new pr({
          name: "CubemapFromEquirect",
          uniforms: cr(n),
          vertexShader: i,
          fragmentShader: r,
          side: l,
          blending: h,
        });
      a.uniforms.tEquirect.value = t;
      const o = new ar(s, a),
        c = t.minFilter;
      return (
        t.minFilter === le && (t.minFilter = ae),
        new _r(1, 10, this).update(e, o),
        (t.minFilter = c),
        o.geometry.dispose(),
        o.material.dispose(),
        this
      );
    }
    clear(e, t, n, i) {
      const r = e.getRenderTarget();
      for (let r = 0; r < 6; r++) e.setRenderTarget(this, r), e.clear(t, n, i);
      e.setRenderTarget(r);
    }
  }
  const yr = new jt(),
    Mr = new jt(),
    br = new kt();
  class Sr {
    constructor(e = new jt(1, 0, 0), t = 0) {
      (this.isPlane = !0), (this.normal = e), (this.constant = t);
    }
    set(e, t) {
      return this.normal.copy(e), (this.constant = t), this;
    }
    setComponents(e, t, n, i) {
      return this.normal.set(e, t, n), (this.constant = i), this;
    }
    setFromNormalAndCoplanarPoint(e, t) {
      return this.normal.copy(e), (this.constant = -t.dot(this.normal)), this;
    }
    setFromCoplanarPoints(e, t, n) {
      const i = yr.subVectors(n, t).cross(Mr.subVectors(e, t)).normalize();
      return this.setFromNormalAndCoplanarPoint(i, e), this;
    }
    copy(e) {
      return this.normal.copy(e.normal), (this.constant = e.constant), this;
    }
    normalize() {
      const e = 1 / this.normal.length();
      return this.normal.multiplyScalar(e), (this.constant *= e), this;
    }
    negate() {
      return (this.constant *= -1), this.normal.negate(), this;
    }
    distanceToPoint(e) {
      return this.normal.dot(e) + this.constant;
    }
    distanceToSphere(e) {
      return this.distanceToPoint(e.center) - e.radius;
    }
    projectPoint(e, t) {
      return t.copy(e).addScaledVector(this.normal, -this.distanceToPoint(e));
    }
    intersectLine(e, t) {
      const n = e.delta(yr),
        i = this.normal.dot(n);
      if (0 === i)
        return 0 === this.distanceToPoint(e.start) ? t.copy(e.start) : null;
      const r = -(e.start.dot(this.normal) + this.constant) / i;
      return r < 0 || r > 1 ? null : t.copy(e.start).addScaledVector(n, r);
    }
    intersectsLine(e) {
      const t = this.distanceToPoint(e.start),
        n = this.distanceToPoint(e.end);
      return (t < 0 && n > 0) || (n < 0 && t > 0);
    }
    intersectsBox(e) {
      return e.intersectsPlane(this);
    }
    intersectsSphere(e) {
      return e.intersectsPlane(this);
    }
    coplanarPoint(e) {
      return e.copy(this.normal).multiplyScalar(-this.constant);
    }
    applyMatrix4(e, t) {
      const n = t || br.getNormalMatrix(e),
        i = this.coplanarPoint(yr).applyMatrix4(e),
        r = this.normal.applyMatrix3(n).normalize();
      return (this.constant = -i.dot(r)), this;
    }
    translate(e) {
      return (this.constant -= e.dot(this.normal)), this;
    }
    equals(e) {
      return e.normal.equals(this.normal) && e.constant === this.constant;
    }
    clone() {
      return new this.constructor().copy(this);
    }
  }
  const wr = new Pn(),
    Tr = new jt();
  class Er {
    constructor(
      e = new Sr(),
      t = new Sr(),
      n = new Sr(),
      i = new Sr(),
      r = new Sr(),
      s = new Sr()
    ) {
      this.planes = [e, t, n, i, r, s];
    }
    set(e, t, n, i, r, s) {
      const a = this.planes;
      return (
        a[0].copy(e),
        a[1].copy(t),
        a[2].copy(n),
        a[3].copy(i),
        a[4].copy(r),
        a[5].copy(s),
        this
      );
    }
    copy(e) {
      const t = this.planes;
      for (let n = 0; n < 6; n++) t[n].copy(e.planes[n]);
      return this;
    }
    setFromProjectionMatrix(e) {
      const t = this.planes,
        n = e.elements,
        i = n[0],
        r = n[1],
        s = n[2],
        a = n[3],
        o = n[4],
        l = n[5],
        c = n[6],
        h = n[7],
        u = n[8],
        d = n[9],
        p = n[10],
        f = n[11],
        m = n[12],
        g = n[13],
        _ = n[14],
        v = n[15];
      return (
        t[0].setComponents(a - i, h - o, f - u, v - m).normalize(),
        t[1].setComponents(a + i, h + o, f + u, v + m).normalize(),
        t[2].setComponents(a + r, h + l, f + d, v + g).normalize(),
        t[3].setComponents(a - r, h - l, f - d, v - g).normalize(),
        t[4].setComponents(a - s, h - c, f - p, v - _).normalize(),
        t[5].setComponents(a + s, h + c, f + p, v + _).normalize(),
        this
      );
    }
    intersectsObject(e) {
      const t = e.geometry;
      return (
        null === t.boundingSphere && t.computeBoundingSphere(),
        wr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),
        this.intersectsSphere(wr)
      );
    }
    intersectsSprite(e) {
      return (
        wr.center.set(0, 0, 0),
        (wr.radius = 0.7071067811865476),
        wr.applyMatrix4(e.matrixWorld),
        this.intersectsSphere(wr)
      );
    }
    intersectsSphere(e) {
      const t = this.planes,
        n = e.center,
        i = -e.radius;
      for (let e = 0; e < 6; e++) if (t[e].distanceToPoint(n) < i) return !1;
      return !0;
    }
    intersectsBox(e) {
      const t = this.planes;
      for (let n = 0; n < 6; n++) {
        const i = t[n];
        if (
          ((Tr.x = i.normal.x > 0 ? e.max.x : e.min.x),
          (Tr.y = i.normal.y > 0 ? e.max.y : e.min.y),
          (Tr.z = i.normal.z > 0 ? e.max.z : e.min.z),
          i.distanceToPoint(Tr) < 0)
        )
          return !1;
      }
      return !0;
    }
    containsPoint(e) {
      const t = this.planes;
      for (let n = 0; n < 6; n++) if (t[n].distanceToPoint(e) < 0) return !1;
      return !0;
    }
    clone() {
      return new this.constructor().copy(this);
    }
  }
  function Ar() {
    let e = null,
      t = !1,
      n = null,
      i = null;
    function r(t, s) {
      n(t, s), (i = e.requestAnimationFrame(r));
    }
    return {
      start: function () {
        !0 !== t && null !== n && ((i = e.requestAnimationFrame(r)), (t = !0));
      },
      stop: function () {
        e.cancelAnimationFrame(i), (t = !1);
      },
      setAnimationLoop: function (e) {
        n = e;
      },
      setContext: function (t) {
        e = t;
      },
    };
  }
  function Lr(e, t) {
    const n = t.isWebGL2,
      i = new WeakMap();
    return {
      get: function (e) {
        return e.isInterleavedBufferAttribute && (e = e.data), i.get(e);
      },
      remove: function (t) {
        t.isInterleavedBufferAttribute && (t = t.data);
        const n = i.get(t);
        n && (e.deleteBuffer(n.buffer), i.delete(t));
      },
      update: function (t, r) {
        if (t.isGLBufferAttribute) {
          const e = i.get(t);
          return void (
            (!e || e.version < t.version) &&
            i.set(t, {
              buffer: t.buffer,
              type: t.type,
              bytesPerElement: t.elementSize,
              version: t.version,
            })
          );
        }
        t.isInterleavedBufferAttribute && (t = t.data);
        const s = i.get(t);
        void 0 === s
          ? i.set(
              t,
              (function (t, i) {
                const r = t.array,
                  s = t.usage,
                  a = e.createBuffer();
                let o;
                if (
                  (e.bindBuffer(i, a),
                  e.bufferData(i, r, s),
                  t.onUploadCallback(),
                  r instanceof Float32Array)
                )
                  o = 5126;
                else if (r instanceof Uint16Array)
                  if (t.isFloat16BufferAttribute) {
                    if (!n)
                      throw new Error(
                        "THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2."
                      );
                    o = 5131;
                  } else o = 5123;
                else if (r instanceof Int16Array) o = 5122;
                else if (r instanceof Uint32Array) o = 5125;
                else if (r instanceof Int32Array) o = 5124;
                else if (r instanceof Int8Array) o = 5120;
                else if (r instanceof Uint8Array) o = 5121;
                else {
                  if (!(r instanceof Uint8ClampedArray))
                    throw new Error(
                      "THREE.WebGLAttributes: Unsupported buffer data format: " +
                        r
                    );
                  o = 5121;
                }
                return {
                  buffer: a,
                  type: o,
                  bytesPerElement: r.BYTES_PER_ELEMENT,
                  version: t.version,
                };
              })(t, r)
            )
          : s.version < t.version &&
            ((function (t, i, r) {
              const s = i.array,
                a = i.updateRange;
              e.bindBuffer(r, t),
                -1 === a.count
                  ? e.bufferSubData(r, 0, s)
                  : (n
                      ? e.bufferSubData(
                          r,
                          a.offset * s.BYTES_PER_ELEMENT,
                          s,
                          a.offset,
                          a.count
                        )
                      : e.bufferSubData(
                          r,
                          a.offset * s.BYTES_PER_ELEMENT,
                          s.subarray(a.offset, a.offset + a.count)
                        ),
                    (a.count = -1)),
                i.onUploadCallback();
            })(s.buffer, t, r),
            (s.version = t.version));
      },
    };
  }
  class Cr extends ji {
    constructor(e = 1, t = 1, n = 1, i = 1) {
      super(),
        (this.type = "PlaneGeometry"),
        (this.parameters = {
          width: e,
          height: t,
          widthSegments: n,
          heightSegments: i,
        });
      const r = e / 2,
        s = t / 2,
        a = Math.floor(n),
        o = Math.floor(i),
        l = a + 1,
        c = o + 1,
        h = e / a,
        u = t / o,
        d = [],
        p = [],
        f = [],
        m = [];
      for (let e = 0; e < c; e++) {
        const t = e * u - s;
        for (let n = 0; n < l; n++) {
          const i = n * h - r;
          p.push(i, -t, 0), f.push(0, 0, 1), m.push(n / a), m.push(1 - e / o);
        }
      }
      for (let e = 0; e < o; e++)
        for (let t = 0; t < a; t++) {
          const n = t + l * e,
            i = t + l * (e + 1),
            r = t + 1 + l * (e + 1),
            s = t + 1 + l * e;
          d.push(n, i, s), d.push(i, r, s);
        }
      this.setIndex(d),
        this.setAttribute("position", new zi(p, 3)),
        this.setAttribute("normal", new zi(f, 3)),
        this.setAttribute("uv", new zi(m, 2));
    }
    copy(e) {
      return (
        super.copy(e), (this.parameters = Object.assign({}, e.parameters)), this
      );
    }
    static fromJSON(e) {
      return new Cr(e.width, e.height, e.widthSegments, e.heightSegments);
    }
  }
  const Rr = {
      alphamap_fragment:
        "#ifdef USE_ALPHAMAP\n\tdiffuseColor.a *= texture2D( alphaMap, vUv ).g;\n#endif",
      alphamap_pars_fragment:
        "#ifdef USE_ALPHAMAP\n\tuniform sampler2D alphaMap;\n#endif",
      alphatest_fragment:
        "#ifdef USE_ALPHATEST\n\tif ( diffuseColor.a < alphaTest ) discard;\n#endif",
      alphatest_pars_fragment:
        "#ifdef USE_ALPHATEST\n\tuniform float alphaTest;\n#endif",
      aomap_fragment:
        "#ifdef USE_AOMAP\n\tfloat ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;\n\treflectedLight.indirectDiffuse *= ambientOcclusion;\n\t#if defined( USE_ENVMAP ) && defined( STANDARD )\n\t\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\t\treflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );\n\t#endif\n#endif",
      aomap_pars_fragment:
        "#ifdef USE_AOMAP\n\tuniform sampler2D aoMap;\n\tuniform float aoMapIntensity;\n#endif",
      begin_vertex: "vec3 transformed = vec3( position );",
      beginnormal_vertex:
        "vec3 objectNormal = vec3( normal );\n#ifdef USE_TANGENT\n\tvec3 objectTangent = vec3( tangent.xyz );\n#endif",
      bsdfs:
        "vec3 BRDF_Lambert( const in vec3 diffuseColor ) {\n\treturn RECIPROCAL_PI * diffuseColor;\n}\nvec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {\n\tfloat fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );\n\treturn f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );\n}\nfloat F_Schlick( const in float f0, const in float f90, const in float dotVH ) {\n\tfloat fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );\n\treturn f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );\n}\nvec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {\n    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );\n    float x2 = x * x;\n    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );\n    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );\n}\nfloat V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\tfloat gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\treturn 0.5 / max( gv + gl, EPSILON );\n}\nfloat D_GGX( const in float alpha, const in float dotNH ) {\n\tfloat a2 = pow2( alpha );\n\tfloat denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;\n\treturn RECIPROCAL_PI * a2 / pow2( denom );\n}\nvec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {\n\tfloat alpha = pow2( roughness );\n\tvec3 halfDir = normalize( lightDir + viewDir );\n\tfloat dotNL = saturate( dot( normal, lightDir ) );\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tfloat dotNH = saturate( dot( normal, halfDir ) );\n\tfloat dotVH = saturate( dot( viewDir, halfDir ) );\n\tvec3 F = F_Schlick( f0, f90, dotVH );\n\tfloat V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n\tfloat D = D_GGX( alpha, dotNH );\n\treturn F * ( V * D );\n}\n#ifdef USE_IRIDESCENCE\n\tvec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {\n\t\tfloat alpha = pow2( roughness );\n\t\tvec3 halfDir = normalize( lightDir + viewDir );\n\t\tfloat dotNL = saturate( dot( normal, lightDir ) );\n\t\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\t\tfloat dotNH = saturate( dot( normal, halfDir ) );\n\t\tfloat dotVH = saturate( dot( viewDir, halfDir ) );\n\t\tvec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );\n\t\tfloat V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n\t\tfloat D = D_GGX( alpha, dotNH );\n\t\treturn F * ( V * D );\n\t}\n#endif\nvec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {\n\tconst float LUT_SIZE = 64.0;\n\tconst float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;\n\tconst float LUT_BIAS = 0.5 / LUT_SIZE;\n\tfloat dotNV = saturate( dot( N, V ) );\n\tvec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );\n\tuv = uv * LUT_SCALE + LUT_BIAS;\n\treturn uv;\n}\nfloat LTC_ClippedSphereFormFactor( const in vec3 f ) {\n\tfloat l = length( f );\n\treturn max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );\n}\nvec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {\n\tfloat x = dot( v1, v2 );\n\tfloat y = abs( x );\n\tfloat a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;\n\tfloat b = 3.4175940 + ( 4.1616724 + y ) * y;\n\tfloat v = a / b;\n\tfloat theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;\n\treturn cross( v1, v2 ) * theta_sintheta;\n}\nvec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {\n\tvec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];\n\tvec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];\n\tvec3 lightNormal = cross( v1, v2 );\n\tif( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );\n\tvec3 T1, T2;\n\tT1 = normalize( V - N * dot( V, N ) );\n\tT2 = - cross( N, T1 );\n\tmat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );\n\tvec3 coords[ 4 ];\n\tcoords[ 0 ] = mat * ( rectCoords[ 0 ] - P );\n\tcoords[ 1 ] = mat * ( rectCoords[ 1 ] - P );\n\tcoords[ 2 ] = mat * ( rectCoords[ 2 ] - P );\n\tcoords[ 3 ] = mat * ( rectCoords[ 3 ] - P );\n\tcoords[ 0 ] = normalize( coords[ 0 ] );\n\tcoords[ 1 ] = normalize( coords[ 1 ] );\n\tcoords[ 2 ] = normalize( coords[ 2 ] );\n\tcoords[ 3 ] = normalize( coords[ 3 ] );\n\tvec3 vectorFormFactor = vec3( 0.0 );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );\n\tfloat result = LTC_ClippedSphereFormFactor( vectorFormFactor );\n\treturn vec3( result );\n}\nfloat G_BlinnPhong_Implicit( ) {\n\treturn 0.25;\n}\nfloat D_BlinnPhong( const in float shininess, const in float dotNH ) {\n\treturn RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n}\nvec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {\n\tvec3 halfDir = normalize( lightDir + viewDir );\n\tfloat dotNH = saturate( dot( normal, halfDir ) );\n\tfloat dotVH = saturate( dot( viewDir, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, 1.0, dotVH );\n\tfloat G = G_BlinnPhong_Implicit( );\n\tfloat D = D_BlinnPhong( shininess, dotNH );\n\treturn F * ( G * D );\n}\n#if defined( USE_SHEEN )\nfloat D_Charlie( float roughness, float dotNH ) {\n\tfloat alpha = pow2( roughness );\n\tfloat invAlpha = 1.0 / alpha;\n\tfloat cos2h = dotNH * dotNH;\n\tfloat sin2h = max( 1.0 - cos2h, 0.0078125 );\n\treturn ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );\n}\nfloat V_Neubelt( float dotNV, float dotNL ) {\n\treturn saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );\n}\nvec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {\n\tvec3 halfDir = normalize( lightDir + viewDir );\n\tfloat dotNL = saturate( dot( normal, lightDir ) );\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tfloat dotNH = saturate( dot( normal, halfDir ) );\n\tfloat D = D_Charlie( sheenRoughness, dotNH );\n\tfloat V = V_Neubelt( dotNV, dotNL );\n\treturn sheenColor * ( D * V );\n}\n#endif",
      iridescence_fragment:
        "#ifdef USE_IRIDESCENCE\n\tconst mat3 XYZ_TO_REC709 = mat3(\n\t\t 3.2404542, -0.9692660,  0.0556434,\n\t\t-1.5371385,  1.8760108, -0.2040259,\n\t\t-0.4985314,  0.0415560,  1.0572252\n\t);\n\tvec3 Fresnel0ToIor( vec3 fresnel0 ) {\n\t\tvec3 sqrtF0 = sqrt( fresnel0 );\n\t\treturn ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );\n\t}\n\tvec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {\n\t\treturn pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );\n\t}\n\tfloat IorToFresnel0( float transmittedIor, float incidentIor ) {\n\t\treturn pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));\n\t}\n\tvec3 evalSensitivity( float OPD, vec3 shift ) {\n\t\tfloat phase = 2.0 * PI * OPD * 1.0e-9;\n\t\tvec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );\n\t\tvec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );\n\t\tvec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );\n\t\tvec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );\n\t\txyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );\n\t\txyz /= 1.0685e-7;\n\t\tvec3 rgb = XYZ_TO_REC709 * xyz;\n\t\treturn rgb;\n\t}\n\tvec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {\n\t\tvec3 I;\n\t\tfloat iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );\n\t\tfloat sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );\n\t\tfloat cosTheta2Sq = 1.0 - sinTheta2Sq;\n\t\tif ( cosTheta2Sq < 0.0 ) {\n\t\t\t return vec3( 1.0 );\n\t\t}\n\t\tfloat cosTheta2 = sqrt( cosTheta2Sq );\n\t\tfloat R0 = IorToFresnel0( iridescenceIOR, outsideIOR );\n\t\tfloat R12 = F_Schlick( R0, 1.0, cosTheta1 );\n\t\tfloat R21 = R12;\n\t\tfloat T121 = 1.0 - R12;\n\t\tfloat phi12 = 0.0;\n\t\tif ( iridescenceIOR < outsideIOR ) phi12 = PI;\n\t\tfloat phi21 = PI - phi12;\n\t\tvec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );\t\tvec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );\n\t\tvec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );\n\t\tvec3 phi23 = vec3( 0.0 );\n\t\tif ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;\n\t\tif ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;\n\t\tif ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;\n\t\tfloat OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;\n\t\tvec3 phi = vec3( phi21 ) + phi23;\n\t\tvec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );\n\t\tvec3 r123 = sqrt( R123 );\n\t\tvec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );\n\t\tvec3 C0 = R12 + Rs;\n\t\tI = C0;\n\t\tvec3 Cm = Rs - T121;\n\t\tfor ( int m = 1; m <= 2; ++ m ) {\n\t\t\tCm *= r123;\n\t\t\tvec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );\n\t\t\tI += Cm * Sm;\n\t\t}\n\t\treturn max( I, vec3( 0.0 ) );\n\t}\n#endif",
      bumpmap_pars_fragment:
        "#ifdef USE_BUMPMAP\n\tuniform sampler2D bumpMap;\n\tuniform float bumpScale;\n\tvec2 dHdxy_fwd() {\n\t\tvec2 dSTdx = dFdx( vUv );\n\t\tvec2 dSTdy = dFdy( vUv );\n\t\tfloat Hll = bumpScale * texture2D( bumpMap, vUv ).x;\n\t\tfloat dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;\n\t\tfloat dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;\n\t\treturn vec2( dBx, dBy );\n\t}\n\tvec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {\n\t\tvec3 vSigmaX = dFdx( surf_pos.xyz );\n\t\tvec3 vSigmaY = dFdy( surf_pos.xyz );\n\t\tvec3 vN = surf_norm;\n\t\tvec3 R1 = cross( vSigmaY, vN );\n\t\tvec3 R2 = cross( vN, vSigmaX );\n\t\tfloat fDet = dot( vSigmaX, R1 ) * faceDirection;\n\t\tvec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n\t\treturn normalize( abs( fDet ) * surf_norm - vGrad );\n\t}\n#endif",
      clipping_planes_fragment:
        "#if NUM_CLIPPING_PLANES > 0\n\tvec4 plane;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {\n\t\tplane = clippingPlanes[ i ];\n\t\tif ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;\n\t}\n\t#pragma unroll_loop_end\n\t#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n\t\tbool clipped = true;\n\t\t#pragma unroll_loop_start\n\t\tfor ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {\n\t\t\tplane = clippingPlanes[ i ];\n\t\t\tclipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;\n\t\t}\n\t\t#pragma unroll_loop_end\n\t\tif ( clipped ) discard;\n\t#endif\n#endif",
      clipping_planes_pars_fragment:
        "#if NUM_CLIPPING_PLANES > 0\n\tvarying vec3 vClipPosition;\n\tuniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];\n#endif",
      clipping_planes_pars_vertex:
        "#if NUM_CLIPPING_PLANES > 0\n\tvarying vec3 vClipPosition;\n#endif",
      clipping_planes_vertex:
        "#if NUM_CLIPPING_PLANES > 0\n\tvClipPosition = - mvPosition.xyz;\n#endif",
      color_fragment:
        "#if defined( USE_COLOR_ALPHA )\n\tdiffuseColor *= vColor;\n#elif defined( USE_COLOR )\n\tdiffuseColor.rgb *= vColor;\n#endif",
      color_pars_fragment:
        "#if defined( USE_COLOR_ALPHA )\n\tvarying vec4 vColor;\n#elif defined( USE_COLOR )\n\tvarying vec3 vColor;\n#endif",
      color_pars_vertex:
        "#if defined( USE_COLOR_ALPHA )\n\tvarying vec4 vColor;\n#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )\n\tvarying vec3 vColor;\n#endif",
      color_vertex:
        "#if defined( USE_COLOR_ALPHA )\n\tvColor = vec4( 1.0 );\n#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )\n\tvColor = vec3( 1.0 );\n#endif\n#ifdef USE_COLOR\n\tvColor *= color;\n#endif\n#ifdef USE_INSTANCING_COLOR\n\tvColor.xyz *= instanceColor.xyz;\n#endif",
      common:
        "#define PI 3.141592653589793\n#define PI2 6.283185307179586\n#define PI_HALF 1.5707963267948966\n#define RECIPROCAL_PI 0.3183098861837907\n#define RECIPROCAL_PI2 0.15915494309189535\n#define EPSILON 1e-6\n#ifndef saturate\n#define saturate( a ) clamp( a, 0.0, 1.0 )\n#endif\n#define whiteComplement( a ) ( 1.0 - saturate( a ) )\nfloat pow2( const in float x ) { return x*x; }\nvec3 pow2( const in vec3 x ) { return x*x; }\nfloat pow3( const in float x ) { return x*x*x; }\nfloat pow4( const in float x ) { float x2 = x*x; return x2*x2; }\nfloat max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }\nfloat average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }\nhighp float rand( const in vec2 uv ) {\n\tconst highp float a = 12.9898, b = 78.233, c = 43758.5453;\n\thighp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );\n\treturn fract( sin( sn ) * c );\n}\n#ifdef HIGH_PRECISION\n\tfloat precisionSafeLength( vec3 v ) { return length( v ); }\n#else\n\tfloat precisionSafeLength( vec3 v ) {\n\t\tfloat maxComponent = max3( abs( v ) );\n\t\treturn length( v / maxComponent ) * maxComponent;\n\t}\n#endif\nstruct IncidentLight {\n\tvec3 color;\n\tvec3 direction;\n\tbool visible;\n};\nstruct ReflectedLight {\n\tvec3 directDiffuse;\n\tvec3 directSpecular;\n\tvec3 indirectDiffuse;\n\tvec3 indirectSpecular;\n};\nstruct GeometricContext {\n\tvec3 position;\n\tvec3 normal;\n\tvec3 viewDir;\n#ifdef USE_CLEARCOAT\n\tvec3 clearcoatNormal;\n#endif\n};\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n}\nvec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );\n}\nmat3 transposeMat3( const in mat3 m ) {\n\tmat3 tmp;\n\ttmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );\n\ttmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );\n\ttmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );\n\treturn tmp;\n}\nfloat luminance( const in vec3 rgb ) {\n\tconst vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );\n\treturn dot( weights, rgb );\n}\nbool isPerspectiveMatrix( mat4 m ) {\n\treturn m[ 2 ][ 3 ] == - 1.0;\n}\nvec2 equirectUv( in vec3 dir ) {\n\tfloat u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;\n\tfloat v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\treturn vec2( u, v );\n}",
      cube_uv_reflection_fragment:
        "#ifdef ENVMAP_TYPE_CUBE_UV\n\t#define cubeUV_minMipLevel 4.0\n\t#define cubeUV_minTileSize 16.0\n\tfloat getFace( vec3 direction ) {\n\t\tvec3 absDirection = abs( direction );\n\t\tfloat face = - 1.0;\n\t\tif ( absDirection.x > absDirection.z ) {\n\t\t\tif ( absDirection.x > absDirection.y )\n\t\t\t\tface = direction.x > 0.0 ? 0.0 : 3.0;\n\t\t\telse\n\t\t\t\tface = direction.y > 0.0 ? 1.0 : 4.0;\n\t\t} else {\n\t\t\tif ( absDirection.z > absDirection.y )\n\t\t\t\tface = direction.z > 0.0 ? 2.0 : 5.0;\n\t\t\telse\n\t\t\t\tface = direction.y > 0.0 ? 1.0 : 4.0;\n\t\t}\n\t\treturn face;\n\t}\n\tvec2 getUV( vec3 direction, float face ) {\n\t\tvec2 uv;\n\t\tif ( face == 0.0 ) {\n\t\t\tuv = vec2( direction.z, direction.y ) / abs( direction.x );\n\t\t} else if ( face == 1.0 ) {\n\t\t\tuv = vec2( - direction.x, - direction.z ) / abs( direction.y );\n\t\t} else if ( face == 2.0 ) {\n\t\t\tuv = vec2( - direction.x, direction.y ) / abs( direction.z );\n\t\t} else if ( face == 3.0 ) {\n\t\t\tuv = vec2( - direction.z, direction.y ) / abs( direction.x );\n\t\t} else if ( face == 4.0 ) {\n\t\t\tuv = vec2( - direction.x, direction.z ) / abs( direction.y );\n\t\t} else {\n\t\t\tuv = vec2( direction.x, direction.y ) / abs( direction.z );\n\t\t}\n\t\treturn 0.5 * ( uv + 1.0 );\n\t}\n\tvec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {\n\t\tfloat face = getFace( direction );\n\t\tfloat filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );\n\t\tmipInt = max( mipInt, cubeUV_minMipLevel );\n\t\tfloat faceSize = exp2( mipInt );\n\t\thighp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;\n\t\tif ( face > 2.0 ) {\n\t\t\tuv.y += faceSize;\n\t\t\tface -= 3.0;\n\t\t}\n\t\tuv.x += face * faceSize;\n\t\tuv.x += filterInt * 3.0 * cubeUV_minTileSize;\n\t\tuv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );\n\t\tuv.x *= CUBEUV_TEXEL_WIDTH;\n\t\tuv.y *= CUBEUV_TEXEL_HEIGHT;\n\t\t#ifdef texture2DGradEXT\n\t\t\treturn texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;\n\t\t#else\n\t\t\treturn texture2D( envMap, uv ).rgb;\n\t\t#endif\n\t}\n\t#define cubeUV_r0 1.0\n\t#define cubeUV_v0 0.339\n\t#define cubeUV_m0 - 2.0\n\t#define cubeUV_r1 0.8\n\t#define cubeUV_v1 0.276\n\t#define cubeUV_m1 - 1.0\n\t#define cubeUV_r4 0.4\n\t#define cubeUV_v4 0.046\n\t#define cubeUV_m4 2.0\n\t#define cubeUV_r5 0.305\n\t#define cubeUV_v5 0.016\n\t#define cubeUV_m5 3.0\n\t#define cubeUV_r6 0.21\n\t#define cubeUV_v6 0.0038\n\t#define cubeUV_m6 4.0\n\tfloat roughnessToMip( float roughness ) {\n\t\tfloat mip = 0.0;\n\t\tif ( roughness >= cubeUV_r1 ) {\n\t\t\tmip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;\n\t\t} else if ( roughness >= cubeUV_r4 ) {\n\t\t\tmip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;\n\t\t} else if ( roughness >= cubeUV_r5 ) {\n\t\t\tmip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;\n\t\t} else if ( roughness >= cubeUV_r6 ) {\n\t\t\tmip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;\n\t\t} else {\n\t\t\tmip = - 2.0 * log2( 1.16 * roughness );\t\t}\n\t\treturn mip;\n\t}\n\tvec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {\n\t\tfloat mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );\n\t\tfloat mipF = fract( mip );\n\t\tfloat mipInt = floor( mip );\n\t\tvec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );\n\t\tif ( mipF == 0.0 ) {\n\t\t\treturn vec4( color0, 1.0 );\n\t\t} else {\n\t\t\tvec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );\n\t\t\treturn vec4( mix( color0, color1, mipF ), 1.0 );\n\t\t}\n\t}\n#endif",
      defaultnormal_vertex:
        "vec3 transformedNormal = objectNormal;\n#ifdef USE_INSTANCING\n\tmat3 m = mat3( instanceMatrix );\n\ttransformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );\n\ttransformedNormal = m * transformedNormal;\n#endif\ntransformedNormal = normalMatrix * transformedNormal;\n#ifdef FLIP_SIDED\n\ttransformedNormal = - transformedNormal;\n#endif\n#ifdef USE_TANGENT\n\tvec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n\t#ifdef FLIP_SIDED\n\t\ttransformedTangent = - transformedTangent;\n\t#endif\n#endif",
      displacementmap_pars_vertex:
        "#ifdef USE_DISPLACEMENTMAP\n\tuniform sampler2D displacementMap;\n\tuniform float displacementScale;\n\tuniform float displacementBias;\n#endif",
      displacementmap_vertex:
        "#ifdef USE_DISPLACEMENTMAP\n\ttransformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );\n#endif",
      emissivemap_fragment:
        "#ifdef USE_EMISSIVEMAP\n\tvec4 emissiveColor = texture2D( emissiveMap, vUv );\n\ttotalEmissiveRadiance *= emissiveColor.rgb;\n#endif",
      emissivemap_pars_fragment:
        "#ifdef USE_EMISSIVEMAP\n\tuniform sampler2D emissiveMap;\n#endif",
      encodings_fragment: "gl_FragColor = linearToOutputTexel( gl_FragColor );",
      encodings_pars_fragment:
        "vec4 LinearToLinear( in vec4 value ) {\n\treturn value;\n}\nvec4 LinearTosRGB( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );\n}",
      envmap_fragment:
        "#ifdef USE_ENVMAP\n\t#ifdef ENV_WORLDPOS\n\t\tvec3 cameraToFrag;\n\t\tif ( isOrthographic ) {\n\t\t\tcameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n\t\t} else {\n\t\t\tcameraToFrag = normalize( vWorldPosition - cameraPosition );\n\t\t}\n\t\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect( cameraToFrag, worldNormal );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );\n\t\t#endif\n\t#else\n\t\tvec3 reflectVec = vReflect;\n\t#endif\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tvec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n\t#else\n\t\tvec4 envColor = vec4( 0.0 );\n\t#endif\n\t#ifdef ENVMAP_BLENDING_MULTIPLY\n\t\toutgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_MIX )\n\t\toutgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_ADD )\n\t\toutgoingLight += envColor.xyz * specularStrength * reflectivity;\n\t#endif\n#endif",
      envmap_common_pars_fragment:
        "#ifdef USE_ENVMAP\n\tuniform float envMapIntensity;\n\tuniform float flipEnvMap;\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tuniform samplerCube envMap;\n\t#else\n\t\tuniform sampler2D envMap;\n\t#endif\n\t\n#endif",
      envmap_pars_fragment:
        "#ifdef USE_ENVMAP\n\tuniform float reflectivity;\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )\n\t\t#define ENV_WORLDPOS\n\t#endif\n\t#ifdef ENV_WORLDPOS\n\t\tvarying vec3 vWorldPosition;\n\t\tuniform float refractionRatio;\n\t#else\n\t\tvarying vec3 vReflect;\n\t#endif\n#endif",
      envmap_pars_vertex:
        "#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )\n\t\t#define ENV_WORLDPOS\n\t#endif\n\t#ifdef ENV_WORLDPOS\n\t\t\n\t\tvarying vec3 vWorldPosition;\n\t#else\n\t\tvarying vec3 vReflect;\n\t\tuniform float refractionRatio;\n\t#endif\n#endif",
      envmap_physical_pars_fragment:
        "#if defined( USE_ENVMAP )\n\tvec3 getIBLIrradiance( const in vec3 normal ) {\n\t\t#if defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\t\t\tvec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );\n\t\t\treturn PI * envMapColor.rgb * envMapIntensity;\n\t\t#else\n\t\t\treturn vec3( 0.0 );\n\t\t#endif\n\t}\n\tvec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {\n\t\t#if defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec3 reflectVec = reflect( - viewDir, normal );\n\t\t\treflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );\n\t\t\treflectVec = inverseTransformDirection( reflectVec, viewMatrix );\n\t\t\tvec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );\n\t\t\treturn envMapColor.rgb * envMapIntensity;\n\t\t#else\n\t\t\treturn vec3( 0.0 );\n\t\t#endif\n\t}\n#endif",
      envmap_vertex:
        "#ifdef USE_ENVMAP\n\t#ifdef ENV_WORLDPOS\n\t\tvWorldPosition = worldPosition.xyz;\n\t#else\n\t\tvec3 cameraToVertex;\n\t\tif ( isOrthographic ) {\n\t\t\tcameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n\t\t} else {\n\t\t\tcameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n\t\t}\n\t\tvec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvReflect = reflect( cameraToVertex, worldNormal );\n\t\t#else\n\t\t\tvReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n\t\t#endif\n\t#endif\n#endif",
      fog_vertex: "#ifdef USE_FOG\n\tvFogDepth = - mvPosition.z;\n#endif",
      fog_pars_vertex: "#ifdef USE_FOG\n\tvarying float vFogDepth;\n#endif",
      fog_fragment:
        "#ifdef USE_FOG\n\t#ifdef FOG_EXP2\n\t\tfloat fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );\n\t#else\n\t\tfloat fogFactor = smoothstep( fogNear, fogFar, vFogDepth );\n\t#endif\n\tgl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n#endif",
      fog_pars_fragment:
        "#ifdef USE_FOG\n\tuniform vec3 fogColor;\n\tvarying float vFogDepth;\n\t#ifdef FOG_EXP2\n\t\tuniform float fogDensity;\n\t#else\n\t\tuniform float fogNear;\n\t\tuniform float fogFar;\n\t#endif\n#endif",
      gradientmap_pars_fragment:
        "#ifdef USE_GRADIENTMAP\n\tuniform sampler2D gradientMap;\n#endif\nvec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {\n\tfloat dotNL = dot( normal, lightDirection );\n\tvec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );\n\t#ifdef USE_GRADIENTMAP\n\t\treturn vec3( texture2D( gradientMap, coord ).r );\n\t#else\n\t\tvec2 fw = fwidth( coord ) * 0.5;\n\t\treturn mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );\n\t#endif\n}",
      lightmap_fragment:
        "#ifdef USE_LIGHTMAP\n\tvec4 lightMapTexel = texture2D( lightMap, vUv2 );\n\tvec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;\n\treflectedLight.indirectDiffuse += lightMapIrradiance;\n#endif",
      lightmap_pars_fragment:
        "#ifdef USE_LIGHTMAP\n\tuniform sampler2D lightMap;\n\tuniform float lightMapIntensity;\n#endif",
      lights_lambert_fragment:
        "LambertMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularStrength = specularStrength;",
      lights_lambert_pars_fragment:
        "varying vec3 vViewPosition;\nstruct LambertMaterial {\n\tvec3 diffuseColor;\n\tfloat specularStrength;\n};\nvoid RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\treflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_Lambert\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Lambert",
      lights_pars_begin:
        "uniform bool receiveShadow;\nuniform vec3 ambientLightColor;\nuniform vec3 lightProbe[ 9 ];\nvec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {\n\tfloat x = normal.x, y = normal.y, z = normal.z;\n\tvec3 result = shCoefficients[ 0 ] * 0.886227;\n\tresult += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;\n\tresult += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;\n\tresult += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;\n\tresult += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;\n\tresult += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;\n\tresult += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );\n\tresult += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;\n\tresult += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );\n\treturn result;\n}\nvec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {\n\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\tvec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );\n\treturn irradiance;\n}\nvec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {\n\tvec3 irradiance = ambientLightColor;\n\treturn irradiance;\n}\nfloat getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {\n\t#if defined ( LEGACY_LIGHTS )\n\t\tif ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {\n\t\t\treturn pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );\n\t\t}\n\t\treturn 1.0;\n\t#else\n\t\tfloat distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );\n\t\tif ( cutoffDistance > 0.0 ) {\n\t\t\tdistanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );\n\t\t}\n\t\treturn distanceFalloff;\n\t#endif\n}\nfloat getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {\n\treturn smoothstep( coneCosine, penumbraCosine, angleCosine );\n}\n#if NUM_DIR_LIGHTS > 0\n\tstruct DirectionalLight {\n\t\tvec3 direction;\n\t\tvec3 color;\n\t};\n\tuniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];\n\tvoid getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {\n\t\tlight.color = directionalLight.color;\n\t\tlight.direction = directionalLight.direction;\n\t\tlight.visible = true;\n\t}\n#endif\n#if NUM_POINT_LIGHTS > 0\n\tstruct PointLight {\n\t\tvec3 position;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t};\n\tuniform PointLight pointLights[ NUM_POINT_LIGHTS ];\n\tvoid getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {\n\t\tvec3 lVector = pointLight.position - geometry.position;\n\t\tlight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tlight.color = pointLight.color;\n\t\tlight.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );\n\t\tlight.visible = ( light.color != vec3( 0.0 ) );\n\t}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\tstruct SpotLight {\n\t\tvec3 position;\n\t\tvec3 direction;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t\tfloat coneCos;\n\t\tfloat penumbraCos;\n\t};\n\tuniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];\n\tvoid getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {\n\t\tvec3 lVector = spotLight.position - geometry.position;\n\t\tlight.direction = normalize( lVector );\n\t\tfloat angleCos = dot( light.direction, spotLight.direction );\n\t\tfloat spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );\n\t\tif ( spotAttenuation > 0.0 ) {\n\t\t\tfloat lightDistance = length( lVector );\n\t\t\tlight.color = spotLight.color * spotAttenuation;\n\t\t\tlight.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );\n\t\t\tlight.visible = ( light.color != vec3( 0.0 ) );\n\t\t} else {\n\t\t\tlight.color = vec3( 0.0 );\n\t\t\tlight.visible = false;\n\t\t}\n\t}\n#endif\n#if NUM_RECT_AREA_LIGHTS > 0\n\tstruct RectAreaLight {\n\t\tvec3 color;\n\t\tvec3 position;\n\t\tvec3 halfWidth;\n\t\tvec3 halfHeight;\n\t};\n\tuniform sampler2D ltc_1;\tuniform sampler2D ltc_2;\n\tuniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\tstruct HemisphereLight {\n\t\tvec3 direction;\n\t\tvec3 skyColor;\n\t\tvec3 groundColor;\n\t};\n\tuniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];\n\tvec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {\n\t\tfloat dotNL = dot( normal, hemiLight.direction );\n\t\tfloat hemiDiffuseWeight = 0.5 * dotNL + 0.5;\n\t\tvec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );\n\t\treturn irradiance;\n\t}\n#endif",
      lights_toon_fragment:
        "ToonMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;",
      lights_toon_pars_fragment:
        "varying vec3 vViewPosition;\nstruct ToonMaterial {\n\tvec3 diffuseColor;\n};\nvoid RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n\tvec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;\n\treflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_Toon\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Toon",
      lights_phong_fragment:
        "BlinnPhongMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularColor = specular;\nmaterial.specularShininess = shininess;\nmaterial.specularStrength = specularStrength;",
      lights_phong_pars_fragment:
        "varying vec3 vViewPosition;\nstruct BlinnPhongMaterial {\n\tvec3 diffuseColor;\n\tvec3 specularColor;\n\tfloat specularShininess;\n\tfloat specularStrength;\n};\nvoid RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\treflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n\treflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;\n}\nvoid RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_BlinnPhong\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_BlinnPhong",
      lights_physical_fragment:
        "PhysicalMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );\nvec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );\nfloat geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );\nmaterial.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;\nmaterial.roughness = min( material.roughness, 1.0 );\n#ifdef IOR\n\tmaterial.ior = ior;\n\t#ifdef SPECULAR\n\t\tfloat specularIntensityFactor = specularIntensity;\n\t\tvec3 specularColorFactor = specularColor;\n\t\t#ifdef USE_SPECULARINTENSITYMAP\n\t\t\tspecularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;\n\t\t#endif\n\t\t#ifdef USE_SPECULARCOLORMAP\n\t\t\tspecularColorFactor *= texture2D( specularColorMap, vUv ).rgb;\n\t\t#endif\n\t\tmaterial.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );\n\t#else\n\t\tfloat specularIntensityFactor = 1.0;\n\t\tvec3 specularColorFactor = vec3( 1.0 );\n\t\tmaterial.specularF90 = 1.0;\n\t#endif\n\tmaterial.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );\n#else\n\tmaterial.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );\n\tmaterial.specularF90 = 1.0;\n#endif\n#ifdef USE_CLEARCOAT\n\tmaterial.clearcoat = clearcoat;\n\tmaterial.clearcoatRoughness = clearcoatRoughness;\n\tmaterial.clearcoatF0 = vec3( 0.04 );\n\tmaterial.clearcoatF90 = 1.0;\n\t#ifdef USE_CLEARCOATMAP\n\t\tmaterial.clearcoat *= texture2D( clearcoatMap, vUv ).x;\n\t#endif\n\t#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n\t\tmaterial.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;\n\t#endif\n\tmaterial.clearcoat = saturate( material.clearcoat );\tmaterial.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );\n\tmaterial.clearcoatRoughness += geometryRoughness;\n\tmaterial.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );\n#endif\n#ifdef USE_IRIDESCENCE\n\tmaterial.iridescence = iridescence;\n\tmaterial.iridescenceIOR = iridescenceIOR;\n\t#ifdef USE_IRIDESCENCEMAP\n\t\tmaterial.iridescence *= texture2D( iridescenceMap, vUv ).r;\n\t#endif\n\t#ifdef USE_IRIDESCENCE_THICKNESSMAP\n\t\tmaterial.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;\n\t#else\n\t\tmaterial.iridescenceThickness = iridescenceThicknessMaximum;\n\t#endif\n#endif\n#ifdef USE_SHEEN\n\tmaterial.sheenColor = sheenColor;\n\t#ifdef USE_SHEENCOLORMAP\n\t\tmaterial.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;\n\t#endif\n\tmaterial.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );\n\t#ifdef USE_SHEENROUGHNESSMAP\n\t\tmaterial.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;\n\t#endif\n#endif",
      lights_physical_pars_fragment:
        "struct PhysicalMaterial {\n\tvec3 diffuseColor;\n\tfloat roughness;\n\tvec3 specularColor;\n\tfloat specularF90;\n\t#ifdef USE_CLEARCOAT\n\t\tfloat clearcoat;\n\t\tfloat clearcoatRoughness;\n\t\tvec3 clearcoatF0;\n\t\tfloat clearcoatF90;\n\t#endif\n\t#ifdef USE_IRIDESCENCE\n\t\tfloat iridescence;\n\t\tfloat iridescenceIOR;\n\t\tfloat iridescenceThickness;\n\t\tvec3 iridescenceFresnel;\n\t\tvec3 iridescenceF0;\n\t#endif\n\t#ifdef USE_SHEEN\n\t\tvec3 sheenColor;\n\t\tfloat sheenRoughness;\n\t#endif\n\t#ifdef IOR\n\t\tfloat ior;\n\t#endif\n\t#ifdef USE_TRANSMISSION\n\t\tfloat transmission;\n\t\tfloat transmissionAlpha;\n\t\tfloat thickness;\n\t\tfloat attenuationDistance;\n\t\tvec3 attenuationColor;\n\t#endif\n};\nvec3 clearcoatSpecular = vec3( 0.0 );\nvec3 sheenSpecular = vec3( 0.0 );\nfloat IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tfloat r2 = roughness * roughness;\n\tfloat a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;\n\tfloat b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;\n\tfloat DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );\n\treturn saturate( DG * RECIPROCAL_PI );\n}\nvec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tconst vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );\n\tconst vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );\n\tvec4 r = roughness * c0 + c1;\n\tfloat a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;\n\tvec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;\n\treturn fab;\n}\nvec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {\n\tvec2 fab = DFGApprox( normal, viewDir, roughness );\n\treturn specularColor * fab.x + specularF90 * fab.y;\n}\n#ifdef USE_IRIDESCENCE\nvoid computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {\n#else\nvoid computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {\n#endif\n\tvec2 fab = DFGApprox( normal, viewDir, roughness );\n\t#ifdef USE_IRIDESCENCE\n\t\tvec3 Fr = mix( specularColor, iridescenceF0, iridescence );\n\t#else\n\t\tvec3 Fr = specularColor;\n\t#endif\n\tvec3 FssEss = Fr * fab.x + specularF90 * fab.y;\n\tfloat Ess = fab.x + fab.y;\n\tfloat Ems = 1.0 - Ess;\n\tvec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;\tvec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );\n\tsingleScatter += FssEss;\n\tmultiScatter += Fms * Ems;\n}\n#if NUM_RECT_AREA_LIGHTS > 0\n\tvoid RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\t\tvec3 normal = geometry.normal;\n\t\tvec3 viewDir = geometry.viewDir;\n\t\tvec3 position = geometry.position;\n\t\tvec3 lightPos = rectAreaLight.position;\n\t\tvec3 halfWidth = rectAreaLight.halfWidth;\n\t\tvec3 halfHeight = rectAreaLight.halfHeight;\n\t\tvec3 lightColor = rectAreaLight.color;\n\t\tfloat roughness = material.roughness;\n\t\tvec3 rectCoords[ 4 ];\n\t\trectCoords[ 0 ] = lightPos + halfWidth - halfHeight;\t\trectCoords[ 1 ] = lightPos - halfWidth - halfHeight;\n\t\trectCoords[ 2 ] = lightPos - halfWidth + halfHeight;\n\t\trectCoords[ 3 ] = lightPos + halfWidth + halfHeight;\n\t\tvec2 uv = LTC_Uv( normal, viewDir, roughness );\n\t\tvec4 t1 = texture2D( ltc_1, uv );\n\t\tvec4 t2 = texture2D( ltc_2, uv );\n\t\tmat3 mInv = mat3(\n\t\t\tvec3( t1.x, 0, t1.y ),\n\t\t\tvec3(    0, 1,    0 ),\n\t\t\tvec3( t1.z, 0, t1.w )\n\t\t);\n\t\tvec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );\n\t\treflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );\n\t\treflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );\n\t}\n#endif\nvoid RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\t#ifdef USE_CLEARCOAT\n\t\tfloat dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );\n\t\tvec3 ccIrradiance = dotNLcc * directLight.color;\n\t\tclearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );\n\t#endif\n\t#ifdef USE_SHEEN\n\t\tsheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );\n\t#endif\n\t#ifdef USE_IRIDESCENCE\n\t\treflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );\n\t#else\n\t\treflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );\n\t#endif\n\treflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {\n\t#ifdef USE_CLEARCOAT\n\t\tclearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );\n\t#endif\n\t#ifdef USE_SHEEN\n\t\tsheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );\n\t#endif\n\tvec3 singleScattering = vec3( 0.0 );\n\tvec3 multiScattering = vec3( 0.0 );\n\tvec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;\n\t#ifdef USE_IRIDESCENCE\n\t\tcomputeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );\n\t#else\n\t\tcomputeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );\n\t#endif\n\tvec3 totalScattering = singleScattering + multiScattering;\n\tvec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );\n\treflectedLight.indirectSpecular += radiance * singleScattering;\n\treflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;\n\treflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;\n}\n#define RE_Direct\t\t\t\tRE_Direct_Physical\n#define RE_Direct_RectArea\t\tRE_Direct_RectArea_Physical\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Physical\n#define RE_IndirectSpecular\t\tRE_IndirectSpecular_Physical\nfloat computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {\n\treturn saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );\n}",
      lights_fragment_begin:
        "\nGeometricContext geometry;\ngeometry.position = - vViewPosition;\ngeometry.normal = normal;\ngeometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );\n#ifdef USE_CLEARCOAT\n\tgeometry.clearcoatNormal = clearcoatNormal;\n#endif\n#ifdef USE_IRIDESCENCE\n\tfloat dotNVi = saturate( dot( normal, geometry.viewDir ) );\n\tif ( material.iridescenceThickness == 0.0 ) {\n\t\tmaterial.iridescence = 0.0;\n\t} else {\n\t\tmaterial.iridescence = saturate( material.iridescence );\n\t}\n\tif ( material.iridescence > 0.0 ) {\n\t\tmaterial.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );\n\t\tmaterial.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );\n\t}\n#endif\nIncidentLight directLight;\n#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )\n\tPointLight pointLight;\n\t#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0\n\tPointLightShadow pointLightShadow;\n\t#endif\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tpointLight = pointLights[ i ];\n\t\tgetPointLightInfo( pointLight, geometry, directLight );\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )\n\t\tpointLightShadow = pointLightShadows[ i ];\n\t\tdirectLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )\n\tSpotLight spotLight;\n\tvec4 spotColor;\n\tvec3 spotLightCoord;\n\tbool inSpotLightMap;\n\t#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0\n\tSpotLightShadow spotLightShadow;\n\t#endif\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tspotLight = spotLights[ i ];\n\t\tgetSpotLightInfo( spotLight, geometry, directLight );\n\t\t#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )\n\t\t#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX\n\t\t#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n\t\t#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS\n\t\t#else\n\t\t#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )\n\t\t#endif\n\t\t#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )\n\t\t\tspotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;\n\t\t\tinSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );\n\t\t\tspotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );\n\t\t\tdirectLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;\n\t\t#endif\n\t\t#undef SPOT_LIGHT_MAP_INDEX\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n\t\tspotLightShadow = spotLightShadows[ i ];\n\t\tdirectLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )\n\tDirectionalLight directionalLight;\n\t#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0\n\tDirectionalLightShadow directionalLightShadow;\n\t#endif\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tdirectionalLight = directionalLights[ i ];\n\t\tgetDirectionalLightInfo( directionalLight, geometry, directLight );\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )\n\t\tdirectionalLightShadow = directionalLightShadows[ i ];\n\t\tdirectLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )\n\tRectAreaLight rectAreaLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {\n\t\trectAreaLight = rectAreaLights[ i ];\n\t\tRE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if defined( RE_IndirectDiffuse )\n\tvec3 iblIrradiance = vec3( 0.0 );\n\tvec3 irradiance = getAmbientLightIrradiance( ambientLightColor );\n\tirradiance += getLightProbeIrradiance( lightProbe, geometry.normal );\n\t#if ( NUM_HEMI_LIGHTS > 0 )\n\t\t#pragma unroll_loop_start\n\t\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\t\tirradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );\n\t\t}\n\t\t#pragma unroll_loop_end\n\t#endif\n#endif\n#if defined( RE_IndirectSpecular )\n\tvec3 radiance = vec3( 0.0 );\n\tvec3 clearcoatRadiance = vec3( 0.0 );\n#endif",
      lights_fragment_maps:
        "#if defined( RE_IndirectDiffuse )\n\t#ifdef USE_LIGHTMAP\n\t\tvec4 lightMapTexel = texture2D( lightMap, vUv2 );\n\t\tvec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;\n\t\tirradiance += lightMapIrradiance;\n\t#endif\n\t#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )\n\t\tiblIrradiance += getIBLIrradiance( geometry.normal );\n\t#endif\n#endif\n#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )\n\tradiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );\n\t#ifdef USE_CLEARCOAT\n\t\tclearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );\n\t#endif\n#endif",
      lights_fragment_end:
        "#if defined( RE_IndirectDiffuse )\n\tRE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );\n#endif\n#if defined( RE_IndirectSpecular )\n\tRE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );\n#endif",
      logdepthbuf_fragment:
        "#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n\tgl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;\n#endif",
      logdepthbuf_pars_fragment:
        "#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n\tuniform float logDepthBufFC;\n\tvarying float vFragDepth;\n\tvarying float vIsPerspective;\n#endif",
      logdepthbuf_pars_vertex:
        "#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvarying float vFragDepth;\n\t\tvarying float vIsPerspective;\n\t#else\n\t\tuniform float logDepthBufFC;\n\t#endif\n#endif",
      logdepthbuf_vertex:
        "#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvFragDepth = 1.0 + gl_Position.w;\n\t\tvIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );\n\t#else\n\t\tif ( isPerspectiveMatrix( projectionMatrix ) ) {\n\t\t\tgl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;\n\t\t\tgl_Position.z *= gl_Position.w;\n\t\t}\n\t#endif\n#endif",
      map_fragment:
        "#ifdef USE_MAP\n\tvec4 sampledDiffuseColor = texture2D( map, vUv );\n\t#ifdef DECODE_VIDEO_TEXTURE\n\t\tsampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );\n\t#endif\n\tdiffuseColor *= sampledDiffuseColor;\n#endif",
      map_pars_fragment: "#ifdef USE_MAP\n\tuniform sampler2D map;\n#endif",
      map_particle_fragment:
        "#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n\tvec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;\n#endif\n#ifdef USE_MAP\n\tdiffuseColor *= texture2D( map, uv );\n#endif\n#ifdef USE_ALPHAMAP\n\tdiffuseColor.a *= texture2D( alphaMap, uv ).g;\n#endif",
      map_particle_pars_fragment:
        "#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n\tuniform mat3 uvTransform;\n#endif\n#ifdef USE_MAP\n\tuniform sampler2D map;\n#endif\n#ifdef USE_ALPHAMAP\n\tuniform sampler2D alphaMap;\n#endif",
      metalnessmap_fragment:
        "float metalnessFactor = metalness;\n#ifdef USE_METALNESSMAP\n\tvec4 texelMetalness = texture2D( metalnessMap, vUv );\n\tmetalnessFactor *= texelMetalness.b;\n#endif",
      metalnessmap_pars_fragment:
        "#ifdef USE_METALNESSMAP\n\tuniform sampler2D metalnessMap;\n#endif",
      morphcolor_vertex:
        "#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )\n\tvColor *= morphTargetBaseInfluence;\n\tfor ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n\t\t#if defined( USE_COLOR_ALPHA )\n\t\t\tif ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];\n\t\t#elif defined( USE_COLOR )\n\t\t\tif ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];\n\t\t#endif\n\t}\n#endif",
      morphnormal_vertex:
        "#ifdef USE_MORPHNORMALS\n\tobjectNormal *= morphTargetBaseInfluence;\n\t#ifdef MORPHTARGETS_TEXTURE\n\t\tfor ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n\t\t\tif ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];\n\t\t}\n\t#else\n\t\tobjectNormal += morphNormal0 * morphTargetInfluences[ 0 ];\n\t\tobjectNormal += morphNormal1 * morphTargetInfluences[ 1 ];\n\t\tobjectNormal += morphNormal2 * morphTargetInfluences[ 2 ];\n\t\tobjectNormal += morphNormal3 * morphTargetInfluences[ 3 ];\n\t#endif\n#endif",
      morphtarget_pars_vertex:
        "#ifdef USE_MORPHTARGETS\n\tuniform float morphTargetBaseInfluence;\n\t#ifdef MORPHTARGETS_TEXTURE\n\t\tuniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];\n\t\tuniform sampler2DArray morphTargetsTexture;\n\t\tuniform ivec2 morphTargetsTextureSize;\n\t\tvec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {\n\t\t\tint texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;\n\t\t\tint y = texelIndex / morphTargetsTextureSize.x;\n\t\t\tint x = texelIndex - y * morphTargetsTextureSize.x;\n\t\t\tivec3 morphUV = ivec3( x, y, morphTargetIndex );\n\t\t\treturn texelFetch( morphTargetsTexture, morphUV, 0 );\n\t\t}\n\t#else\n\t\t#ifndef USE_MORPHNORMALS\n\t\t\tuniform float morphTargetInfluences[ 8 ];\n\t\t#else\n\t\t\tuniform float morphTargetInfluences[ 4 ];\n\t\t#endif\n\t#endif\n#endif",
      morphtarget_vertex:
        "#ifdef USE_MORPHTARGETS\n\ttransformed *= morphTargetBaseInfluence;\n\t#ifdef MORPHTARGETS_TEXTURE\n\t\tfor ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n\t\t\tif ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];\n\t\t}\n\t#else\n\t\ttransformed += morphTarget0 * morphTargetInfluences[ 0 ];\n\t\ttransformed += morphTarget1 * morphTargetInfluences[ 1 ];\n\t\ttransformed += morphTarget2 * morphTargetInfluences[ 2 ];\n\t\ttransformed += morphTarget3 * morphTargetInfluences[ 3 ];\n\t\t#ifndef USE_MORPHNORMALS\n\t\t\ttransformed += morphTarget4 * morphTargetInfluences[ 4 ];\n\t\t\ttransformed += morphTarget5 * morphTargetInfluences[ 5 ];\n\t\t\ttransformed += morphTarget6 * morphTargetInfluences[ 6 ];\n\t\t\ttransformed += morphTarget7 * morphTargetInfluences[ 7 ];\n\t\t#endif\n\t#endif\n#endif",
      normal_fragment_begin:
        "float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;\n#ifdef FLAT_SHADED\n\tvec3 fdx = dFdx( vViewPosition );\n\tvec3 fdy = dFdy( vViewPosition );\n\tvec3 normal = normalize( cross( fdx, fdy ) );\n#else\n\tvec3 normal = normalize( vNormal );\n\t#ifdef DOUBLE_SIDED\n\t\tnormal = normal * faceDirection;\n\t#endif\n\t#ifdef USE_TANGENT\n\t\tvec3 tangent = normalize( vTangent );\n\t\tvec3 bitangent = normalize( vBitangent );\n\t\t#ifdef DOUBLE_SIDED\n\t\t\ttangent = tangent * faceDirection;\n\t\t\tbitangent = bitangent * faceDirection;\n\t\t#endif\n\t\t#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )\n\t\t\tmat3 vTBN = mat3( tangent, bitangent, normal );\n\t\t#endif\n\t#endif\n#endif\nvec3 geometryNormal = normal;",
      normal_fragment_maps:
        "#ifdef OBJECTSPACE_NORMALMAP\n\tnormal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\t#ifdef FLIP_SIDED\n\t\tnormal = - normal;\n\t#endif\n\t#ifdef DOUBLE_SIDED\n\t\tnormal = normal * faceDirection;\n\t#endif\n\tnormal = normalize( normalMatrix * normal );\n#elif defined( TANGENTSPACE_NORMALMAP )\n\tvec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\tmapN.xy *= normalScale;\n\t#ifdef USE_TANGENT\n\t\tnormal = normalize( vTBN * mapN );\n\t#else\n\t\tnormal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );\n\t#endif\n#elif defined( USE_BUMPMAP )\n\tnormal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );\n#endif",
      normal_pars_fragment:
        "#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif",
      normal_pars_vertex:
        "#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif",
      normal_vertex:
        "#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n\t#ifdef USE_TANGENT\n\t\tvTangent = normalize( transformedTangent );\n\t\tvBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );\n\t#endif\n#endif",
      normalmap_pars_fragment:
        "#ifdef USE_NORMALMAP\n\tuniform sampler2D normalMap;\n\tuniform vec2 normalScale;\n#endif\n#ifdef OBJECTSPACE_NORMALMAP\n\tuniform mat3 normalMatrix;\n#endif\n#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )\n\tvec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {\n\t\tvec3 q0 = dFdx( eye_pos.xyz );\n\t\tvec3 q1 = dFdy( eye_pos.xyz );\n\t\tvec2 st0 = dFdx( vUv.st );\n\t\tvec2 st1 = dFdy( vUv.st );\n\t\tvec3 N = surf_norm;\n\t\tvec3 q1perp = cross( q1, N );\n\t\tvec3 q0perp = cross( N, q0 );\n\t\tvec3 T = q1perp * st0.x + q0perp * st1.x;\n\t\tvec3 B = q1perp * st0.y + q0perp * st1.y;\n\t\tfloat det = max( dot( T, T ), dot( B, B ) );\n\t\tfloat scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );\n\t\treturn normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );\n\t}\n#endif",
      clearcoat_normal_fragment_begin:
        "#ifdef USE_CLEARCOAT\n\tvec3 clearcoatNormal = geometryNormal;\n#endif",
      clearcoat_normal_fragment_maps:
        "#ifdef USE_CLEARCOAT_NORMALMAP\n\tvec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;\n\tclearcoatMapN.xy *= clearcoatNormalScale;\n\t#ifdef USE_TANGENT\n\t\tclearcoatNormal = normalize( vTBN * clearcoatMapN );\n\t#else\n\t\tclearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );\n\t#endif\n#endif",
      clearcoat_pars_fragment:
        "#ifdef USE_CLEARCOATMAP\n\tuniform sampler2D clearcoatMap;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n\tuniform sampler2D clearcoatRoughnessMap;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n\tuniform sampler2D clearcoatNormalMap;\n\tuniform vec2 clearcoatNormalScale;\n#endif",
      iridescence_pars_fragment:
        "#ifdef USE_IRIDESCENCEMAP\n\tuniform sampler2D iridescenceMap;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n\tuniform sampler2D iridescenceThicknessMap;\n#endif",
      output_fragment:
        "#ifdef OPAQUE\ndiffuseColor.a = 1.0;\n#endif\n#ifdef USE_TRANSMISSION\ndiffuseColor.a *= material.transmissionAlpha + 0.1;\n#endif\ngl_FragColor = vec4( outgoingLight, diffuseColor.a );",
      packing:
        "vec3 packNormalToRGB( const in vec3 normal ) {\n\treturn normalize( normal ) * 0.5 + 0.5;\n}\nvec3 unpackRGBToNormal( const in vec3 rgb ) {\n\treturn 2.0 * rgb.xyz - 1.0;\n}\nconst float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;\nconst vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );\nconst vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );\nconst float ShiftRight8 = 1. / 256.;\nvec4 packDepthToRGBA( const in float v ) {\n\tvec4 r = vec4( fract( v * PackFactors ), v );\n\tr.yzw -= r.xyz * ShiftRight8;\treturn r * PackUpscale;\n}\nfloat unpackRGBAToDepth( const in vec4 v ) {\n\treturn dot( v, UnpackFactors );\n}\nvec2 packDepthToRG( in highp float v ) {\n\treturn packDepthToRGBA( v ).yx;\n}\nfloat unpackRGToDepth( const in highp vec2 v ) {\n\treturn unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );\n}\nvec4 pack2HalfToRGBA( vec2 v ) {\n\tvec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );\n\treturn vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );\n}\nvec2 unpackRGBATo2Half( vec4 v ) {\n\treturn vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );\n}\nfloat viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn ( viewZ + near ) / ( near - far );\n}\nfloat orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {\n\treturn linearClipZ * ( near - far ) - near;\n}\nfloat viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );\n}\nfloat perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {\n\treturn ( near * far ) / ( ( far - near ) * invClipZ - far );\n}",
      premultiplied_alpha_fragment:
        "#ifdef PREMULTIPLIED_ALPHA\n\tgl_FragColor.rgb *= gl_FragColor.a;\n#endif",
      project_vertex:
        "vec4 mvPosition = vec4( transformed, 1.0 );\n#ifdef USE_INSTANCING\n\tmvPosition = instanceMatrix * mvPosition;\n#endif\nmvPosition = modelViewMatrix * mvPosition;\ngl_Position = projectionMatrix * mvPosition;",
      dithering_fragment:
        "#ifdef DITHERING\n\tgl_FragColor.rgb = dithering( gl_FragColor.rgb );\n#endif",
      dithering_pars_fragment:
        "#ifdef DITHERING\n\tvec3 dithering( vec3 color ) {\n\t\tfloat grid_position = rand( gl_FragCoord.xy );\n\t\tvec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );\n\t\tdither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );\n\t\treturn color + dither_shift_RGB;\n\t}\n#endif",
      roughnessmap_fragment:
        "float roughnessFactor = roughness;\n#ifdef USE_ROUGHNESSMAP\n\tvec4 texelRoughness = texture2D( roughnessMap, vUv );\n\troughnessFactor *= texelRoughness.g;\n#endif",
      roughnessmap_pars_fragment:
        "#ifdef USE_ROUGHNESSMAP\n\tuniform sampler2D roughnessMap;\n#endif",
      shadowmap_pars_fragment:
        "#if NUM_SPOT_LIGHT_COORDS > 0\n\tvarying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];\n#endif\n#if NUM_SPOT_LIGHT_MAPS > 0\n\tuniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];\n#endif\n#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tstruct DirectionalLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tstruct SpotLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tstruct PointLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t\tfloat shadowCameraNear;\n\t\t\tfloat shadowCameraFar;\n\t\t};\n\t\tuniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n\t#endif\n\tfloat texture2DCompare( sampler2D depths, vec2 uv, float compare ) {\n\t\treturn step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );\n\t}\n\tvec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {\n\t\treturn unpackRGBATo2Half( texture2D( shadow, uv ) );\n\t}\n\tfloat VSMShadow (sampler2D shadow, vec2 uv, float compare ){\n\t\tfloat occlusion = 1.0;\n\t\tvec2 distribution = texture2DDistribution( shadow, uv );\n\t\tfloat hard_shadow = step( compare , distribution.x );\n\t\tif (hard_shadow != 1.0 ) {\n\t\t\tfloat distance = compare - distribution.x ;\n\t\t\tfloat variance = max( 0.00000, distribution.y * distribution.y );\n\t\t\tfloat softness_probability = variance / (variance + distance * distance );\t\t\tsoftness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );\t\t\tocclusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );\n\t\t}\n\t\treturn occlusion;\n\t}\n\tfloat getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n\t\tfloat shadow = 1.0;\n\t\tshadowCoord.xyz /= shadowCoord.w;\n\t\tshadowCoord.z += shadowBias;\n\t\tbool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;\n\t\tbool frustumTest = inFrustum && shadowCoord.z <= 1.0;\n\t\tif ( frustumTest ) {\n\t\t#if defined( SHADOWMAP_TYPE_PCF )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx0 = - texelSize.x * shadowRadius;\n\t\t\tfloat dy0 = - texelSize.y * shadowRadius;\n\t\t\tfloat dx1 = + texelSize.x * shadowRadius;\n\t\t\tfloat dy1 = + texelSize.y * shadowRadius;\n\t\t\tfloat dx2 = dx0 / 2.0;\n\t\t\tfloat dy2 = dy0 / 2.0;\n\t\t\tfloat dx3 = dx1 / 2.0;\n\t\t\tfloat dy3 = dy1 / 2.0;\n\t\t\tshadow = (\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n\t\t\t) * ( 1.0 / 17.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx = texelSize.x;\n\t\t\tfloat dy = texelSize.y;\n\t\t\tvec2 uv = shadowCoord.xy;\n\t\t\tvec2 f = fract( uv * shadowMapSize + 0.5 );\n\t\t\tuv -= f * texelSize;\n\t\t\tshadow = (\n\t\t\t\ttexture2DCompare( shadowMap, uv, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),\n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),\n\t\t\t\t\t f.x ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),\n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),\n\t\t\t\t\t f.x ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),\n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t f.y ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),\n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t f.y ) +\n\t\t\t\tmix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),\n\t\t\t\t\t\t  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),\n\t\t\t\t\t\t  f.x ),\n\t\t\t\t\t mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t\t  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t\t  f.x ),\n\t\t\t\t\t f.y )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_VSM )\n\t\t\tshadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );\n\t\t#else\n\t\t\tshadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );\n\t\t#endif\n\t\t}\n\t\treturn shadow;\n\t}\n\tvec2 cubeToUV( vec3 v, float texelSizeY ) {\n\t\tvec3 absV = abs( v );\n\t\tfloat scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );\n\t\tabsV *= scaleToCube;\n\t\tv *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );\n\t\tvec2 planar = v.xy;\n\t\tfloat almostATexel = 1.5 * texelSizeY;\n\t\tfloat almostOne = 1.0 - almostATexel;\n\t\tif ( absV.z >= almostOne ) {\n\t\t\tif ( v.z > 0.0 )\n\t\t\t\tplanar.x = 4.0 - v.x;\n\t\t} else if ( absV.x >= almostOne ) {\n\t\t\tfloat signX = sign( v.x );\n\t\t\tplanar.x = v.z * signX + 2.0 * signX;\n\t\t} else if ( absV.y >= almostOne ) {\n\t\t\tfloat signY = sign( v.y );\n\t\t\tplanar.x = v.x + 2.0 * signY + 2.0;\n\t\t\tplanar.y = v.z * signY - 2.0;\n\t\t}\n\t\treturn vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );\n\t}\n\tfloat getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {\n\t\tvec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );\n\t\tvec3 lightToPosition = shadowCoord.xyz;\n\t\tfloat dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );\t\tdp += shadowBias;\n\t\tvec3 bd3D = normalize( lightToPosition );\n\t\t#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )\n\t\t\tvec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;\n\t\t\treturn (\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#else\n\t\t\treturn texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );\n\t\t#endif\n\t}\n#endif",
      shadowmap_pars_vertex:
        "#if NUM_SPOT_LIGHT_COORDS > 0\n\tuniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];\n\tvarying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];\n#endif\n#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t\tuniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tstruct DirectionalLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\t\tstruct SpotLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t\tuniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tstruct PointLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t\tfloat shadowCameraNear;\n\t\t\tfloat shadowCameraFar;\n\t\t};\n\t\tuniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n\t#endif\n#endif",
      shadowmap_vertex:
        "#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )\n\tvec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\tvec4 shadowWorldPosition;\n#endif\n#if defined( USE_SHADOWMAP )\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t\t#pragma unroll_loop_start\n\t\tfor ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n\t\t\tshadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );\n\t\t\tvDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;\n\t\t}\n\t\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t\t#pragma unroll_loop_start\n\t\tfor ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n\t\t\tshadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );\n\t\t\tvPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;\n\t\t}\n\t\t#pragma unroll_loop_end\n\t#endif\n#endif\n#if NUM_SPOT_LIGHT_COORDS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {\n\t\tshadowWorldPosition = worldPosition;\n\t\t#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n\t\t\tshadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;\n\t\t#endif\n\t\tvSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;\n\t}\n\t#pragma unroll_loop_end\n#endif",
      shadowmask_pars_fragment:
        "float getShadowMask() {\n\tfloat shadow = 1.0;\n\t#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\tDirectionalLightShadow directionalLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n\t\tdirectionalLight = directionalLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\tSpotLightShadow spotLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {\n\t\tspotLight = spotLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\tPointLightShadow pointLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n\t\tpointLight = pointLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#endif\n\treturn shadow;\n}",
      skinbase_vertex:
        "#ifdef USE_SKINNING\n\tmat4 boneMatX = getBoneMatrix( skinIndex.x );\n\tmat4 boneMatY = getBoneMatrix( skinIndex.y );\n\tmat4 boneMatZ = getBoneMatrix( skinIndex.z );\n\tmat4 boneMatW = getBoneMatrix( skinIndex.w );\n#endif",
      skinning_pars_vertex:
        "#ifdef USE_SKINNING\n\tuniform mat4 bindMatrix;\n\tuniform mat4 bindMatrixInverse;\n\tuniform highp sampler2D boneTexture;\n\tuniform int boneTextureSize;\n\tmat4 getBoneMatrix( const in float i ) {\n\t\tfloat j = i * 4.0;\n\t\tfloat x = mod( j, float( boneTextureSize ) );\n\t\tfloat y = floor( j / float( boneTextureSize ) );\n\t\tfloat dx = 1.0 / float( boneTextureSize );\n\t\tfloat dy = 1.0 / float( boneTextureSize );\n\t\ty = dy * ( y + 0.5 );\n\t\tvec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );\n\t\tvec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );\n\t\tvec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );\n\t\tvec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );\n\t\tmat4 bone = mat4( v1, v2, v3, v4 );\n\t\treturn bone;\n\t}\n#endif",
      skinning_vertex:
        "#ifdef USE_SKINNING\n\tvec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\n\tvec4 skinned = vec4( 0.0 );\n\tskinned += boneMatX * skinVertex * skinWeight.x;\n\tskinned += boneMatY * skinVertex * skinWeight.y;\n\tskinned += boneMatZ * skinVertex * skinWeight.z;\n\tskinned += boneMatW * skinVertex * skinWeight.w;\n\ttransformed = ( bindMatrixInverse * skinned ).xyz;\n#endif",
      skinnormal_vertex:
        "#ifdef USE_SKINNING\n\tmat4 skinMatrix = mat4( 0.0 );\n\tskinMatrix += skinWeight.x * boneMatX;\n\tskinMatrix += skinWeight.y * boneMatY;\n\tskinMatrix += skinWeight.z * boneMatZ;\n\tskinMatrix += skinWeight.w * boneMatW;\n\tskinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;\n\tobjectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\n\t#ifdef USE_TANGENT\n\t\tobjectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n\t#endif\n#endif",
      specularmap_fragment:
        "float specularStrength;\n#ifdef USE_SPECULARMAP\n\tvec4 texelSpecular = texture2D( specularMap, vUv );\n\tspecularStrength = texelSpecular.r;\n#else\n\tspecularStrength = 1.0;\n#endif",
      specularmap_pars_fragment:
        "#ifdef USE_SPECULARMAP\n\tuniform sampler2D specularMap;\n#endif",
      tonemapping_fragment:
        "#if defined( TONE_MAPPING )\n\tgl_FragColor.rgb = toneMapping( gl_FragColor.rgb );\n#endif",
      tonemapping_pars_fragment:
        "#ifndef saturate\n#define saturate( a ) clamp( a, 0.0, 1.0 )\n#endif\nuniform float toneMappingExposure;\nvec3 LinearToneMapping( vec3 color ) {\n\treturn toneMappingExposure * color;\n}\nvec3 ReinhardToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\treturn saturate( color / ( vec3( 1.0 ) + color ) );\n}\nvec3 OptimizedCineonToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\tcolor = max( vec3( 0.0 ), color - 0.004 );\n\treturn pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );\n}\nvec3 RRTAndODTFit( vec3 v ) {\n\tvec3 a = v * ( v + 0.0245786 ) - 0.000090537;\n\tvec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;\n\treturn a / b;\n}\nvec3 ACESFilmicToneMapping( vec3 color ) {\n\tconst mat3 ACESInputMat = mat3(\n\t\tvec3( 0.59719, 0.07600, 0.02840 ),\t\tvec3( 0.35458, 0.90834, 0.13383 ),\n\t\tvec3( 0.04823, 0.01566, 0.83777 )\n\t);\n\tconst mat3 ACESOutputMat = mat3(\n\t\tvec3(  1.60475, -0.10208, -0.00327 ),\t\tvec3( -0.53108,  1.10813, -0.07276 ),\n\t\tvec3( -0.07367, -0.00605,  1.07602 )\n\t);\n\tcolor *= toneMappingExposure / 0.6;\n\tcolor = ACESInputMat * color;\n\tcolor = RRTAndODTFit( color );\n\tcolor = ACESOutputMat * color;\n\treturn saturate( color );\n}\nvec3 CustomToneMapping( vec3 color ) { return color; }",
      transmission_fragment:
        "#ifdef USE_TRANSMISSION\n\tmaterial.transmission = transmission;\n\tmaterial.transmissionAlpha = 1.0;\n\tmaterial.thickness = thickness;\n\tmaterial.attenuationDistance = attenuationDistance;\n\tmaterial.attenuationColor = attenuationColor;\n\t#ifdef USE_TRANSMISSIONMAP\n\t\tmaterial.transmission *= texture2D( transmissionMap, vUv ).r;\n\t#endif\n\t#ifdef USE_THICKNESSMAP\n\t\tmaterial.thickness *= texture2D( thicknessMap, vUv ).g;\n\t#endif\n\tvec3 pos = vWorldPosition;\n\tvec3 v = normalize( cameraPosition - pos );\n\tvec3 n = inverseTransformDirection( normal, viewMatrix );\n\tvec4 transmission = getIBLVolumeRefraction(\n\t\tn, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,\n\t\tpos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,\n\t\tmaterial.attenuationColor, material.attenuationDistance );\n\tmaterial.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );\n\ttotalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );\n#endif",
      transmission_pars_fragment:
        "#ifdef USE_TRANSMISSION\n\tuniform float transmission;\n\tuniform float thickness;\n\tuniform float attenuationDistance;\n\tuniform vec3 attenuationColor;\n\t#ifdef USE_TRANSMISSIONMAP\n\t\tuniform sampler2D transmissionMap;\n\t#endif\n\t#ifdef USE_THICKNESSMAP\n\t\tuniform sampler2D thicknessMap;\n\t#endif\n\tuniform vec2 transmissionSamplerSize;\n\tuniform sampler2D transmissionSamplerMap;\n\tuniform mat4 modelMatrix;\n\tuniform mat4 projectionMatrix;\n\tvarying vec3 vWorldPosition;\n\tfloat w0( float a ) {\n\t\treturn ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );\n\t}\n\tfloat w1( float a ) {\n\t\treturn ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );\n\t}\n\tfloat w2( float a ){\n\t\treturn ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );\n\t}\n\tfloat w3( float a ) {\n\t\treturn ( 1.0 / 6.0 ) * ( a * a * a );\n\t}\n\tfloat g0( float a ) {\n\t\treturn w0( a ) + w1( a );\n\t}\n\tfloat g1( float a ) {\n\t\treturn w2( a ) + w3( a );\n\t}\n\tfloat h0( float a ) {\n\t\treturn - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );\n\t}\n\tfloat h1( float a ) {\n\t\treturn 1.0 + w3( a ) / ( w2( a ) + w3( a ) );\n\t}\n\tvec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, vec2 fullSize, float lod ) {\n\t\tuv = uv * texelSize.zw + 0.5;\n\t\tvec2 iuv = floor( uv );\n\t\tvec2 fuv = fract( uv );\n\t\tfloat g0x = g0( fuv.x );\n\t\tfloat g1x = g1( fuv.x );\n\t\tfloat h0x = h0( fuv.x );\n\t\tfloat h1x = h1( fuv.x );\n\t\tfloat h0y = h0( fuv.y );\n\t\tfloat h1y = h1( fuv.y );\n\t\tvec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;\n\t\tvec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;\n\t\tvec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;\n\t\tvec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;\n\t\t\n\t\tvec2 lodFudge = pow( 1.95, lod ) / fullSize;\n\t\treturn g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +\n\t\t\tg1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );\n\t}\n\tvec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {\n\t\tvec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );\n\t\tvec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );\n\t\tvec2 fLodSizeInv = 1.0 / fLodSize;\n\t\tvec2 cLodSizeInv = 1.0 / cLodSize;\n\t\tvec2 fullSize = vec2( textureSize( sampler, 0 ) );\n\t\tvec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), fullSize, floor( lod ) );\n\t\tvec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), fullSize, ceil( lod ) );\n\t\treturn mix( fSample, cSample, fract( lod ) );\n\t}\n\tvec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {\n\t\tvec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );\n\t\tvec3 modelScale;\n\t\tmodelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );\n\t\tmodelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );\n\t\tmodelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );\n\t\treturn normalize( refractionVector ) * thickness * modelScale;\n\t}\n\tfloat applyIorToRoughness( const in float roughness, const in float ior ) {\n\t\treturn roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );\n\t}\n\tvec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {\n\t\tfloat lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );\n\t\treturn textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );\n\t}\n\tvec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {\n\t\tif ( isinf( attenuationDistance ) ) {\n\t\t\treturn radiance;\n\t\t} else {\n\t\t\tvec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;\n\t\t\tvec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );\t\t\treturn transmittance * radiance;\n\t\t}\n\t}\n\tvec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,\n\t\tconst in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,\n\t\tconst in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,\n\t\tconst in vec3 attenuationColor, const in float attenuationDistance ) {\n\t\tvec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );\n\t\tvec3 refractedRayExit = position + transmissionRay;\n\t\tvec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );\n\t\tvec2 refractionCoords = ndcPos.xy / ndcPos.w;\n\t\trefractionCoords += 1.0;\n\t\trefractionCoords /= 2.0;\n\t\tvec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );\n\t\tvec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );\n\t\tvec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );\n\t\treturn vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );\n\t}\n#endif",
      uv_pars_fragment:
        "#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )\n\tvarying vec2 vUv;\n#endif",
      uv_pars_vertex:
        "#ifdef USE_UV\n\t#ifdef UVS_VERTEX_ONLY\n\t\tvec2 vUv;\n\t#else\n\t\tvarying vec2 vUv;\n\t#endif\n\tuniform mat3 uvTransform;\n#endif",
      uv_vertex:
        "#ifdef USE_UV\n\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n#endif",
      uv2_pars_fragment:
        "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvarying vec2 vUv2;\n#endif",
      uv2_pars_vertex:
        "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tattribute vec2 uv2;\n\tvarying vec2 vUv2;\n\tuniform mat3 uv2Transform;\n#endif",
      uv2_vertex:
        "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;\n#endif",
      worldpos_vertex:
        "#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0\n\tvec4 worldPosition = vec4( transformed, 1.0 );\n\t#ifdef USE_INSTANCING\n\t\tworldPosition = instanceMatrix * worldPosition;\n\t#endif\n\tworldPosition = modelMatrix * worldPosition;\n#endif",
      background_vert:
        "varying vec2 vUv;\nuniform mat3 uvTransform;\nvoid main() {\n\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n\tgl_Position = vec4( position.xy, 1.0, 1.0 );\n}",
      background_frag:
        "uniform sampler2D t2D;\nuniform float backgroundIntensity;\nvarying vec2 vUv;\nvoid main() {\n\tvec4 texColor = texture2D( t2D, vUv );\n\t#ifdef DECODE_VIDEO_TEXTURE\n\t\ttexColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );\n\t#endif\n\ttexColor.rgb *= backgroundIntensity;\n\tgl_FragColor = texColor;\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}",
      backgroundCube_vert:
        "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\tgl_Position.z = gl_Position.w;\n}",
      backgroundCube_frag:
        "#ifdef ENVMAP_TYPE_CUBE\n\tuniform samplerCube envMap;\n#elif defined( ENVMAP_TYPE_CUBE_UV )\n\tuniform sampler2D envMap;\n#endif\nuniform float flipEnvMap;\nuniform float backgroundBlurriness;\nuniform float backgroundIntensity;\nvarying vec3 vWorldDirection;\n#include <cube_uv_reflection_fragment>\nvoid main() {\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tvec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );\n\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\tvec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );\n\t#else\n\t\tvec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );\n\t#endif\n\ttexColor.rgb *= backgroundIntensity;\n\tgl_FragColor = texColor;\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}",
      cube_vert:
        "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\tgl_Position.z = gl_Position.w;\n}",
      cube_frag:
        "uniform samplerCube tCube;\nuniform float tFlip;\nuniform float opacity;\nvarying vec3 vWorldDirection;\nvoid main() {\n\tvec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );\n\tgl_FragColor = texColor;\n\tgl_FragColor.a *= opacity;\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}",
      depth_vert:
        "#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvHighPrecisionZW = gl_Position.zw;\n}",
      depth_frag:
        "#if DEPTH_PACKING == 3200\n\tuniform float opacity;\n#endif\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#if DEPTH_PACKING == 3200\n\t\tdiffuseColor.a = opacity;\n\t#endif\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <logdepthbuf_fragment>\n\tfloat fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;\n\t#if DEPTH_PACKING == 3200\n\t\tgl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );\n\t#elif DEPTH_PACKING == 3201\n\t\tgl_FragColor = packDepthToRGBA( fragCoordZ );\n\t#endif\n}",
      distanceRGBA_vert:
        "#define DISTANCE\nvarying vec3 vWorldPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\tvWorldPosition = worldPosition.xyz;\n}",
      distanceRGBA_frag:
        "#define DISTANCE\nuniform vec3 referencePosition;\nuniform float nearDistance;\nuniform float farDistance;\nvarying vec3 vWorldPosition;\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main () {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\tfloat dist = length( vWorldPosition - referencePosition );\n\tdist = ( dist - nearDistance ) / ( farDistance - nearDistance );\n\tdist = saturate( dist );\n\tgl_FragColor = packDepthToRGBA( dist );\n}",
      equirect_vert:
        "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n}",
      equirect_frag:
        "uniform sampler2D tEquirect;\nvarying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvec3 direction = normalize( vWorldDirection );\n\tvec2 sampleUV = equirectUv( direction );\n\tgl_FragColor = texture2D( tEquirect, sampleUV );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}",
      linedashed_vert:
        "uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\tvLineDistance = scale * lineDistance;\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}",
      linedashed_frag:
        "uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tif ( mod( vLineDistance, totalSize ) > dashSize ) {\n\t\tdiscard;\n\t}\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <color_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n}",
      meshbasic_vert:
        "#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\t#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinbase_vertex>\n\t\t#include <skinnormal_vertex>\n\t\t#include <defaultnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <fog_vertex>\n}",
      meshbasic_frag:
        "uniform vec3 diffuse;\nuniform float opacity;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\t#ifdef USE_LIGHTMAP\n\t\tvec4 lightMapTexel = texture2D( lightMap, vUv2 );\n\t\treflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;\n\t#else\n\t\treflectedLight.indirectDiffuse += vec3( 1.0 );\n\t#endif\n\t#include <aomap_fragment>\n\treflectedLight.indirectDiffuse *= diffuseColor.rgb;\n\tvec3 outgoingLight = reflectedLight.indirectDiffuse;\n\t#include <envmap_fragment>\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
      meshlambert_vert:
        "#define LAMBERT\nvarying vec3 vViewPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
      meshlambert_frag:
        "#define LAMBERT\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_lambert_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_lambert_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
      meshmatcap_vert:
        "#define MATCAP\nvarying vec3 vViewPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <color_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n\tvViewPosition = - mvPosition.xyz;\n}",
      meshmatcap_frag:
        "#define MATCAP\nuniform vec3 diffuse;\nuniform float opacity;\nuniform sampler2D matcap;\nvarying vec3 vViewPosition;\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <fog_pars_fragment>\n#include <normal_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\tvec3 viewDir = normalize( vViewPosition );\n\tvec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );\n\tvec3 y = cross( viewDir, x );\n\tvec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;\n\t#ifdef USE_MATCAP\n\t\tvec4 matcapColor = texture2D( matcap, uv );\n\t#else\n\t\tvec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );\n\t#endif\n\tvec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
      meshnormal_vert:
        "#define NORMAL\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n\tvarying vec3 vViewPosition;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n\tvViewPosition = - mvPosition.xyz;\n#endif\n}",
      meshnormal_frag:
        "#define NORMAL\nuniform float opacity;\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n\tvarying vec3 vViewPosition;\n#endif\n#include <packing>\n#include <uv_pars_fragment>\n#include <normal_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\t#include <logdepthbuf_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\tgl_FragColor = vec4( packNormalToRGB( normal ), opacity );\n\t#ifdef OPAQUE\n\t\tgl_FragColor.a = 1.0;\n\t#endif\n}",
      meshphong_vert:
        "#define PHONG\nvarying vec3 vViewPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
      meshphong_frag:
        "#define PHONG\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_phong_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
      meshphysical_vert:
        "#define STANDARD\nvarying vec3 vViewPosition;\n#ifdef USE_TRANSMISSION\n\tvarying vec3 vWorldPosition;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n#ifdef USE_TRANSMISSION\n\tvWorldPosition = worldPosition.xyz;\n#endif\n}",
      meshphysical_frag:
        "#define STANDARD\n#ifdef PHYSICAL\n\t#define IOR\n\t#define SPECULAR\n#endif\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float roughness;\nuniform float metalness;\nuniform float opacity;\n#ifdef IOR\n\tuniform float ior;\n#endif\n#ifdef SPECULAR\n\tuniform float specularIntensity;\n\tuniform vec3 specularColor;\n\t#ifdef USE_SPECULARINTENSITYMAP\n\t\tuniform sampler2D specularIntensityMap;\n\t#endif\n\t#ifdef USE_SPECULARCOLORMAP\n\t\tuniform sampler2D specularColorMap;\n\t#endif\n#endif\n#ifdef USE_CLEARCOAT\n\tuniform float clearcoat;\n\tuniform float clearcoatRoughness;\n#endif\n#ifdef USE_IRIDESCENCE\n\tuniform float iridescence;\n\tuniform float iridescenceIOR;\n\tuniform float iridescenceThicknessMinimum;\n\tuniform float iridescenceThicknessMaximum;\n#endif\n#ifdef USE_SHEEN\n\tuniform vec3 sheenColor;\n\tuniform float sheenRoughness;\n\t#ifdef USE_SHEENCOLORMAP\n\t\tuniform sampler2D sheenColorMap;\n\t#endif\n\t#ifdef USE_SHEENROUGHNESSMAP\n\t\tuniform sampler2D sheenRoughnessMap;\n\t#endif\n#endif\nvarying vec3 vViewPosition;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <bsdfs>\n#include <iridescence_fragment>\n#include <cube_uv_reflection_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_physical_pars_fragment>\n#include <fog_pars_fragment>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_physical_pars_fragment>\n#include <transmission_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <clearcoat_pars_fragment>\n#include <iridescence_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <roughnessmap_fragment>\n\t#include <metalnessmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <clearcoat_normal_fragment_begin>\n\t#include <clearcoat_normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_physical_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;\n\tvec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;\n\t#include <transmission_fragment>\n\tvec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;\n\t#ifdef USE_SHEEN\n\t\tfloat sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );\n\t\toutgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;\n\t#endif\n\t#ifdef USE_CLEARCOAT\n\t\tfloat dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );\n\t\tvec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );\n\t\toutgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;\n\t#endif\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
      meshtoon_vert:
        "#define TOON\nvarying vec3 vViewPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
      meshtoon_frag:
        "#define TOON\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <gradientmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_toon_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_toon_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
      points_vert:
        "uniform float size;\nuniform float scale;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <project_vertex>\n\tgl_PointSize = size;\n\t#ifdef USE_SIZEATTENUATION\n\t\tbool isPerspective = isPerspectiveMatrix( projectionMatrix );\n\t\tif ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );\n\t#endif\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <fog_vertex>\n}",
      points_frag:
        "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <color_pars_fragment>\n#include <map_particle_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_particle_fragment>\n\t#include <color_fragment>\n\t#include <alphatest_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n}",
      shadow_vert:
        "#include <common>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <shadowmap_pars_vertex>\nvoid main() {\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
      shadow_frag:
        "uniform vec3 color;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <logdepthbuf_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\nvoid main() {\n\t#include <logdepthbuf_fragment>\n\tgl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}",
      sprite_vert:
        "uniform float rotation;\nuniform vec2 center;\n#include <common>\n#include <uv_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\tvec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\n\tvec2 scale;\n\tscale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );\n\tscale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );\n\t#ifndef USE_SIZEATTENUATION\n\t\tbool isPerspective = isPerspectiveMatrix( projectionMatrix );\n\t\tif ( isPerspective ) scale *= - mvPosition.z;\n\t#endif\n\tvec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;\n\tvec2 rotatedPosition;\n\trotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\n\trotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\n\tmvPosition.xy += rotatedPosition;\n\tgl_Position = projectionMatrix * mvPosition;\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}",
      sprite_frag:
        "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}",
    },
    Pr = {
      common: {
        diffuse: { value: new Ci(16777215) },
        opacity: { value: 1 },
        map: { value: null },
        uvTransform: { value: new kt() },
        uv2Transform: { value: new kt() },
        alphaMap: { value: null },
        alphaTest: { value: 0 },
      },
      specularmap: { specularMap: { value: null } },
      envmap: {
        envMap: { value: null },
        flipEnvMap: { value: -1 },
        reflectivity: { value: 1 },
        ior: { value: 1.5 },
        refractionRatio: { value: 0.98 },
      },
      aomap: { aoMap: { value: null }, aoMapIntensity: { value: 1 } },
      lightmap: { lightMap: { value: null }, lightMapIntensity: { value: 1 } },
      emissivemap: { emissiveMap: { value: null } },
      bumpmap: { bumpMap: { value: null }, bumpScale: { value: 1 } },
      normalmap: {
        normalMap: { value: null },
        normalScale: { value: new Bt(1, 1) },
      },
      displacementmap: {
        displacementMap: { value: null },
        displacementScale: { value: 1 },
        displacementBias: { value: 0 },
      },
      roughnessmap: { roughnessMap: { value: null } },
      metalnessmap: { metalnessMap: { value: null } },
      gradientmap: { gradientMap: { value: null } },
      fog: {
        fogDensity: { value: 25e-5 },
        fogNear: { value: 1 },
        fogFar: { value: 2e3 },
        fogColor: { value: new Ci(16777215) },
      },
      lights: {
        ambientLightColor: { value: [] },
        lightProbe: { value: [] },
        directionalLights: {
          value: [],
          properties: { direction: {}, color: {} },
        },
        directionalLightShadows: {
          value: [],
          properties: {
            shadowBias: {},
            shadowNormalBias: {},
            shadowRadius: {},
            shadowMapSize: {},
          },
        },
        directionalShadowMap: { value: [] },
        directionalShadowMatrix: { value: [] },
        spotLights: {
          value: [],
          properties: {
            color: {},
            position: {},
            direction: {},
            distance: {},
            coneCos: {},
            penumbraCos: {},
            decay: {},
          },
        },
        spotLightShadows: {
          value: [],
          properties: {
            shadowBias: {},
            shadowNormalBias: {},
            shadowRadius: {},
            shadowMapSize: {},
          },
        },
        spotLightMap: { value: [] },
        spotShadowMap: { value: [] },
        spotLightMatrix: { value: [] },
        pointLights: {
          value: [],
          properties: { color: {}, position: {}, decay: {}, distance: {} },
        },
        pointLightShadows: {
          value: [],
          properties: {
            shadowBias: {},
            shadowNormalBias: {},
            shadowRadius: {},
            shadowMapSize: {},
            shadowCameraNear: {},
            shadowCameraFar: {},
          },
        },
        pointShadowMap: { value: [] },
        pointShadowMatrix: { value: [] },
        hemisphereLights: {
          value: [],
          properties: { direction: {}, skyColor: {}, groundColor: {} },
        },
        rectAreaLights: {
          value: [],
          properties: { color: {}, position: {}, width: {}, height: {} },
        },
        ltc_1: { value: null },
        ltc_2: { value: null },
      },
      points: {
        diffuse: { value: new Ci(16777215) },
        opacity: { value: 1 },
        size: { value: 1 },
        scale: { value: 1 },
        map: { value: null },
        alphaMap: { value: null },
        alphaTest: { value: 0 },
        uvTransform: { value: new kt() },
      },
      sprite: {
        diffuse: { value: new Ci(16777215) },
        opacity: { value: 1 },
        center: { value: new Bt(0.5, 0.5) },
        rotation: { value: 0 },
        map: { value: null },
        alphaMap: { value: null },
        alphaTest: { value: 0 },
        uvTransform: { value: new kt() },
      },
    },
    Dr = {
      basic: {
        uniforms: hr([
          Pr.common,
          Pr.specularmap,
          Pr.envmap,
          Pr.aomap,
          Pr.lightmap,
          Pr.fog,
        ]),
        vertexShader: Rr.meshbasic_vert,
        fragmentShader: Rr.meshbasic_frag,
      },
      lambert: {
        uniforms: hr([
          Pr.common,
          Pr.specularmap,
          Pr.envmap,
          Pr.aomap,
          Pr.lightmap,
          Pr.emissivemap,
          Pr.bumpmap,
          Pr.normalmap,
          Pr.displacementmap,
          Pr.fog,
          Pr.lights,
          { emissive: { value: new Ci(0) } },
        ]),
        vertexShader: Rr.meshlambert_vert,
        fragmentShader: Rr.meshlambert_frag,
      },
      phong: {
        uniforms: hr([
          Pr.common,
          Pr.specularmap,
          Pr.envmap,
          Pr.aomap,
          Pr.lightmap,
          Pr.emissivemap,
          Pr.bumpmap,
          Pr.normalmap,
          Pr.displacementmap,
          Pr.fog,
          Pr.lights,
          {
            emissive: { value: new Ci(0) },
            specular: { value: new Ci(1118481) },
            shininess: { value: 30 },
          },
        ]),
        vertexShader: Rr.meshphong_vert,
        fragmentShader: Rr.meshphong_frag,
      },
      standard: {
        uniforms: hr([
          Pr.common,
          Pr.envmap,
          Pr.aomap,
          Pr.lightmap,
          Pr.emissivemap,
          Pr.bumpmap,
          Pr.normalmap,
          Pr.displacementmap,
          Pr.roughnessmap,
          Pr.metalnessmap,
          Pr.fog,
          Pr.lights,
          {
            emissive: { value: new Ci(0) },
            roughness: { value: 1 },
            metalness: { value: 0 },
            envMapIntensity: { value: 1 },
          },
        ]),
        vertexShader: Rr.meshphysical_vert,
        fragmentShader: Rr.meshphysical_frag,
      },
      toon: {
        uniforms: hr([
          Pr.common,
          Pr.aomap,
          Pr.lightmap,
          Pr.emissivemap,
          Pr.bumpmap,
          Pr.normalmap,
          Pr.displacementmap,
          Pr.gradientmap,
          Pr.fog,
          Pr.lights,
          { emissive: { value: new Ci(0) } },
        ]),
        vertexShader: Rr.meshtoon_vert,
        fragmentShader: Rr.meshtoon_frag,
      },
      matcap: {
        uniforms: hr([
          Pr.common,
          Pr.bumpmap,
          Pr.normalmap,
          Pr.displacementmap,
          Pr.fog,
          { matcap: { value: null } },
        ]),
        vertexShader: Rr.meshmatcap_vert,
        fragmentShader: Rr.meshmatcap_frag,
      },
      points: {
        uniforms: hr([Pr.points, Pr.fog]),
        vertexShader: Rr.points_vert,
        fragmentShader: Rr.points_frag,
      },
      dashed: {
        uniforms: hr([
          Pr.common,
          Pr.fog,
          {
            scale: { value: 1 },
            dashSize: { value: 1 },
            totalSize: { value: 2 },
          },
        ]),
        vertexShader: Rr.linedashed_vert,
        fragmentShader: Rr.linedashed_frag,
      },
      depth: {
        uniforms: hr([Pr.common, Pr.displacementmap]),
        vertexShader: Rr.depth_vert,
        fragmentShader: Rr.depth_frag,
      },
      normal: {
        uniforms: hr([
          Pr.common,
          Pr.bumpmap,
          Pr.normalmap,
          Pr.displacementmap,
          { opacity: { value: 1 } },
        ]),
        vertexShader: Rr.meshnormal_vert,
        fragmentShader: Rr.meshnormal_frag,
      },
      sprite: {
        uniforms: hr([Pr.sprite, Pr.fog]),
        vertexShader: Rr.sprite_vert,
        fragmentShader: Rr.sprite_frag,
      },
      background: {
        uniforms: {
          uvTransform: { value: new kt() },
          t2D: { value: null },
          backgroundIntensity: { value: 1 },
        },
        vertexShader: Rr.background_vert,
        fragmentShader: Rr.background_frag,
      },
      backgroundCube: {
        uniforms: {
          envMap: { value: null },
          flipEnvMap: { value: -1 },
          backgroundBlurriness: { value: 0 },
          backgroundIntensity: { value: 1 },
        },
        vertexShader: Rr.backgroundCube_vert,
        fragmentShader: Rr.backgroundCube_frag,
      },
      cube: {
        uniforms: {
          tCube: { value: null },
          tFlip: { value: -1 },
          opacity: { value: 1 },
        },
        vertexShader: Rr.cube_vert,
        fragmentShader: Rr.cube_frag,
      },
      equirect: {
        uniforms: { tEquirect: { value: null } },
        vertexShader: Rr.equirect_vert,
        fragmentShader: Rr.equirect_frag,
      },
      distanceRGBA: {
        uniforms: hr([
          Pr.common,
          Pr.displacementmap,
          {
            referencePosition: { value: new jt() },
            nearDistance: { value: 1 },
            farDistance: { value: 1e3 },
          },
        ]),
        vertexShader: Rr.distanceRGBA_vert,
        fragmentShader: Rr.distanceRGBA_frag,
      },
      shadow: {
        uniforms: hr([
          Pr.lights,
          Pr.fog,
          { color: { value: new Ci(0) }, opacity: { value: 1 } },
        ]),
        vertexShader: Rr.shadow_vert,
        fragmentShader: Rr.shadow_frag,
      },
    };
  Dr.physical = {
    uniforms: hr([
      Dr.standard.uniforms,
      {
        clearcoat: { value: 0 },
        clearcoatMap: { value: null },
        clearcoatRoughness: { value: 0 },
        clearcoatRoughnessMap: { value: null },
        clearcoatNormalScale: { value: new Bt(1, 1) },
        clearcoatNormalMap: { value: null },
        iridescence: { value: 0 },
        iridescenceMap: { value: null },
        iridescenceIOR: { value: 1.3 },
        iridescenceThicknessMinimum: { value: 100 },
        iridescenceThicknessMaximum: { value: 400 },
        iridescenceThicknessMap: { value: null },
        sheen: { value: 0 },
        sheenColor: { value: new Ci(0) },
        sheenColorMap: { value: null },
        sheenRoughness: { value: 1 },
        sheenRoughnessMap: { value: null },
        transmission: { value: 0 },
        transmissionMap: { value: null },
        transmissionSamplerSize: { value: new Bt() },
        transmissionSamplerMap: { value: null },
        thickness: { value: 0 },
        thicknessMap: { value: null },
        attenuationDistance: { value: 0 },
        attenuationColor: { value: new Ci(0) },
        specularIntensity: { value: 1 },
        specularIntensityMap: { value: null },
        specularColor: { value: new Ci(1, 1, 1) },
        specularColorMap: { value: null },
      },
    ]),
    vertexShader: Rr.meshphysical_vert,
    fragmentShader: Rr.meshphysical_frag,
  };
  const Ir = { r: 0, b: 0, g: 0 };
  function Nr(e, t, n, i, r, s, a) {
    const c = new Ci(0);
    let h,
      u,
      d = !0 === s ? 0 : 1,
      p = null,
      f = 0,
      m = null;
    function g(t, n) {
      t.getRGB(Ir, ur(e)), i.buffers.color.setClear(Ir.r, Ir.g, Ir.b, n, a);
    }
    return {
      getClearColor: function () {
        return c;
      },
      setClearColor: function (e, t = 1) {
        c.set(e), (d = t), g(c, d);
      },
      getClearAlpha: function () {
        return d;
      },
      setClearAlpha: function (e) {
        (d = e), g(c, d);
      },
      render: function (i, s) {
        let a = !1,
          _ = !0 === s.isScene ? s.background : null;
        _ && _.isTexture && (_ = (s.backgroundBlurriness > 0 ? n : t).get(_));
        const v = e.xr,
          x = v.getSession && v.getSession();
        x && "additive" === x.environmentBlendMode && (_ = null),
          null === _ ? g(c, d) : _ && _.isColor && (g(_, 1), (a = !0)),
          (e.autoClear || a) &&
            e.clear(e.autoClearColor, e.autoClearDepth, e.autoClearStencil),
          _ && (_.isCubeTexture || _.mapping === $)
            ? (void 0 === u &&
                ((u = new ar(
                  new lr(1, 1, 1),
                  new pr({
                    name: "BackgroundCubeMaterial",
                    uniforms: cr(Dr.backgroundCube.uniforms),
                    vertexShader: Dr.backgroundCube.vertexShader,
                    fragmentShader: Dr.backgroundCube.fragmentShader,
                    side: l,
                    depthTest: !1,
                    depthWrite: !1,
                    fog: !1,
                  })
                )),
                u.geometry.deleteAttribute("normal"),
                u.geometry.deleteAttribute("uv"),
                (u.onBeforeRender = function (e, t, n) {
                  this.matrixWorld.copyPosition(n.matrixWorld);
                }),
                Object.defineProperty(u.material, "envMap", {
                  get: function () {
                    return this.uniforms.envMap.value;
                  },
                }),
                r.update(u)),
              (u.material.uniforms.envMap.value = _),
              (u.material.uniforms.flipEnvMap.value =
                _.isCubeTexture && !1 === _.isRenderTargetTexture ? -1 : 1),
              (u.material.uniforms.backgroundBlurriness.value =
                s.backgroundBlurriness),
              (u.material.uniforms.backgroundIntensity.value =
                s.backgroundIntensity),
              (u.material.toneMapped = _.encoding !== ft),
              (p === _ && f === _.version && m === e.toneMapping) ||
                ((u.material.needsUpdate = !0),
                (p = _),
                (f = _.version),
                (m = e.toneMapping)),
              u.layers.enableAll(),
              i.unshift(u, u.geometry, u.material, 0, 0, null))
            : _ &&
              _.isTexture &&
              (void 0 === h &&
                ((h = new ar(
                  new Cr(2, 2),
                  new pr({
                    name: "BackgroundMaterial",
                    uniforms: cr(Dr.background.uniforms),
                    vertexShader: Dr.background.vertexShader,
                    fragmentShader: Dr.background.fragmentShader,
                    side: o,
                    depthTest: !1,
                    depthWrite: !1,
                    fog: !1,
                  })
                )),
                h.geometry.deleteAttribute("normal"),
                Object.defineProperty(h.material, "map", {
                  get: function () {
                    return this.uniforms.t2D.value;
                  },
                }),
                r.update(h)),
              (h.material.uniforms.t2D.value = _),
              (h.material.uniforms.backgroundIntensity.value =
                s.backgroundIntensity),
              (h.material.toneMapped = _.encoding !== ft),
              !0 === _.matrixAutoUpdate && _.updateMatrix(),
              h.material.uniforms.uvTransform.value.copy(_.matrix),
              (p === _ && f === _.version && m === e.toneMapping) ||
                ((h.material.needsUpdate = !0),
                (p = _),
                (f = _.version),
                (m = e.toneMapping)),
              h.layers.enableAll(),
              i.unshift(h, h.geometry, h.material, 0, 0, null));
      },
    };
  }
  function Or(e, t, n, i) {
    const r = e.getParameter(34921),
      s = i.isWebGL2 ? null : t.get("OES_vertex_array_object"),
      a = i.isWebGL2 || null !== s,
      o = {},
      l = p(null);
    let c = l,
      h = !1;
    function u(t) {
      return i.isWebGL2 ? e.bindVertexArray(t) : s.bindVertexArrayOES(t);
    }
    function d(t) {
      return i.isWebGL2 ? e.deleteVertexArray(t) : s.deleteVertexArrayOES(t);
    }
    function p(e) {
      const t = [],
        n = [],
        i = [];
      for (let e = 0; e < r; e++) (t[e] = 0), (n[e] = 0), (i[e] = 0);
      return {
        geometry: null,
        program: null,
        wireframe: !1,
        newAttributes: t,
        enabledAttributes: n,
        attributeDivisors: i,
        object: e,
        attributes: {},
        index: null,
      };
    }
    function f() {
      const e = c.newAttributes;
      for (let t = 0, n = e.length; t < n; t++) e[t] = 0;
    }
    function m(e) {
      g(e, 0);
    }
    function g(n, r) {
      const s = c.newAttributes,
        a = c.enabledAttributes,
        o = c.attributeDivisors;
      (s[n] = 1),
        0 === a[n] && (e.enableVertexAttribArray(n), (a[n] = 1)),
        o[n] !== r &&
          ((i.isWebGL2 ? e : t.get("ANGLE_instanced_arrays"))[
            i.isWebGL2 ? "vertexAttribDivisor" : "vertexAttribDivisorANGLE"
          ](n, r),
          (o[n] = r));
    }
    function _() {
      const t = c.newAttributes,
        n = c.enabledAttributes;
      for (let i = 0, r = n.length; i < r; i++)
        n[i] !== t[i] && (e.disableVertexAttribArray(i), (n[i] = 0));
    }
    function v(t, n, r, s, a, o) {
      !0 !== i.isWebGL2 || (5124 !== r && 5125 !== r)
        ? e.vertexAttribPointer(t, n, r, s, a, o)
        : e.vertexAttribIPointer(t, n, r, a, o);
    }
    function x() {
      y(), (h = !0), c !== l && ((c = l), u(c.object));
    }
    function y() {
      (l.geometry = null), (l.program = null), (l.wireframe = !1);
    }
    return {
      setup: function (r, l, d, x, y) {
        let M = !1;
        if (a) {
          const t = (function (t, n, r) {
            const a = !0 === r.wireframe;
            let l = o[t.id];
            void 0 === l && ((l = {}), (o[t.id] = l));
            let c = l[n.id];
            void 0 === c && ((c = {}), (l[n.id] = c));
            let h = c[a];
            return (
              void 0 === h &&
                ((h = p(
                  i.isWebGL2 ? e.createVertexArray() : s.createVertexArrayOES()
                )),
                (c[a] = h)),
              h
            );
          })(x, d, l);
          c !== t && ((c = t), u(c.object)),
            (M = (function (e, t, n, i) {
              const r = c.attributes,
                s = t.attributes;
              let a = 0;
              const o = n.getAttributes();
              for (const t in o)
                if (o[t].location >= 0) {
                  const n = r[t];
                  let i = s[t];
                  if (
                    (void 0 === i &&
                      ("instanceMatrix" === t &&
                        e.instanceMatrix &&
                        (i = e.instanceMatrix),
                      "instanceColor" === t &&
                        e.instanceColor &&
                        (i = e.instanceColor)),
                    void 0 === n)
                  )
                    return !0;
                  if (n.attribute !== i) return !0;
                  if (i && n.data !== i.data) return !0;
                  a++;
                }
              return c.attributesNum !== a || c.index !== i;
            })(r, x, d, y)),
            M &&
              (function (e, t, n, i) {
                const r = {},
                  s = t.attributes;
                let a = 0;
                const o = n.getAttributes();
                for (const t in o)
                  if (o[t].location >= 0) {
                    let n = s[t];
                    void 0 === n &&
                      ("instanceMatrix" === t &&
                        e.instanceMatrix &&
                        (n = e.instanceMatrix),
                      "instanceColor" === t &&
                        e.instanceColor &&
                        (n = e.instanceColor));
                    const i = {};
                    (i.attribute = n),
                      n && n.data && (i.data = n.data),
                      (r[t] = i),
                      a++;
                  }
                (c.attributes = r), (c.attributesNum = a), (c.index = i);
              })(r, x, d, y);
        } else {
          const e = !0 === l.wireframe;
          (c.geometry === x.id && c.program === d.id && c.wireframe === e) ||
            ((c.geometry = x.id),
            (c.program = d.id),
            (c.wireframe = e),
            (M = !0));
        }
        null !== y && n.update(y, 34963),
          (M || h) &&
            ((h = !1),
            (function (r, s, a, o) {
              if (
                !1 === i.isWebGL2 &&
                (r.isInstancedMesh || o.isInstancedBufferGeometry) &&
                null === t.get("ANGLE_instanced_arrays")
              )
                return;
              f();
              const l = o.attributes,
                c = a.getAttributes(),
                h = s.defaultAttributeValues;
              for (const t in c) {
                const i = c[t];
                if (i.location >= 0) {
                  let s = l[t];
                  if (
                    (void 0 === s &&
                      ("instanceMatrix" === t &&
                        r.instanceMatrix &&
                        (s = r.instanceMatrix),
                      "instanceColor" === t &&
                        r.instanceColor &&
                        (s = r.instanceColor)),
                    void 0 !== s)
                  ) {
                    const t = s.normalized,
                      a = s.itemSize,
                      l = n.get(s);
                    if (void 0 === l) continue;
                    const c = l.buffer,
                      h = l.type,
                      u = l.bytesPerElement;
                    if (s.isInterleavedBufferAttribute) {
                      const n = s.data,
                        l = n.stride,
                        d = s.offset;
                      if (n.isInstancedInterleavedBuffer) {
                        for (let e = 0; e < i.locationSize; e++)
                          g(i.location + e, n.meshPerAttribute);
                        !0 !== r.isInstancedMesh &&
                          void 0 === o._maxInstanceCount &&
                          (o._maxInstanceCount = n.meshPerAttribute * n.count);
                      } else
                        for (let e = 0; e < i.locationSize; e++)
                          m(i.location + e);
                      e.bindBuffer(34962, c);
                      for (let e = 0; e < i.locationSize; e++)
                        v(
                          i.location + e,
                          a / i.locationSize,
                          h,
                          t,
                          l * u,
                          (d + (a / i.locationSize) * e) * u
                        );
                    } else {
                      if (s.isInstancedBufferAttribute) {
                        for (let e = 0; e < i.locationSize; e++)
                          g(i.location + e, s.meshPerAttribute);
                        !0 !== r.isInstancedMesh &&
                          void 0 === o._maxInstanceCount &&
                          (o._maxInstanceCount = s.meshPerAttribute * s.count);
                      } else
                        for (let e = 0; e < i.locationSize; e++)
                          m(i.location + e);
                      e.bindBuffer(34962, c);
                      for (let e = 0; e < i.locationSize; e++)
                        v(
                          i.location + e,
                          a / i.locationSize,
                          h,
                          t,
                          a * u,
                          (a / i.locationSize) * e * u
                        );
                    }
                  } else if (void 0 !== h) {
                    const n = h[t];
                    if (void 0 !== n)
                      switch (n.length) {
                        case 2:
                          e.vertexAttrib2fv(i.location, n);
                          break;
                        case 3:
                          e.vertexAttrib3fv(i.location, n);
                          break;
                        case 4:
                          e.vertexAttrib4fv(i.location, n);
                          break;
                        default:
                          e.vertexAttrib1fv(i.location, n);
                      }
                  }
                }
              }
              _();
            })(r, l, d, x),
            null !== y && e.bindBuffer(34963, n.get(y).buffer));
      },
      reset: x,
      resetDefaultState: y,
      dispose: function () {
        x();
        for (const e in o) {
          const t = o[e];
          for (const e in t) {
            const n = t[e];
            for (const e in n) d(n[e].object), delete n[e];
            delete t[e];
          }
          delete o[e];
        }
      },
      releaseStatesOfGeometry: function (e) {
        if (void 0 === o[e.id]) return;
        const t = o[e.id];
        for (const e in t) {
          const n = t[e];
          for (const e in n) d(n[e].object), delete n[e];
          delete t[e];
        }
        delete o[e.id];
      },
      releaseStatesOfProgram: function (e) {
        for (const t in o) {
          const n = o[t];
          if (void 0 === n[e.id]) continue;
          const i = n[e.id];
          for (const e in i) d(i[e].object), delete i[e];
          delete n[e.id];
        }
      },
      initAttributes: f,
      enableAttribute: m,
      disableUnusedAttributes: _,
    };
  }
  function Ur(e, t, n, i) {
    const r = i.isWebGL2;
    let s;
    (this.setMode = function (e) {
      s = e;
    }),
      (this.render = function (t, i) {
        e.drawArrays(s, t, i), n.update(i, s, 1);
      }),
      (this.renderInstances = function (i, a, o) {
        if (0 === o) return;
        let l, c;
        if (r) (l = e), (c = "drawArraysInstanced");
        else if (
          ((l = t.get("ANGLE_instanced_arrays")),
          (c = "drawArraysInstancedANGLE"),
          null === l)
        )
          return void console.error(
            "THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays."
          );
        l[c](s, i, a, o), n.update(a, s, o);
      });
  }
  function zr(e, t, n) {
    let i;
    function r(t) {
      if ("highp" === t) {
        if (
          e.getShaderPrecisionFormat(35633, 36338).precision > 0 &&
          e.getShaderPrecisionFormat(35632, 36338).precision > 0
        )
          return "highp";
        t = "mediump";
      }
      return "mediump" === t &&
        e.getShaderPrecisionFormat(35633, 36337).precision > 0 &&
        e.getShaderPrecisionFormat(35632, 36337).precision > 0
        ? "mediump"
        : "lowp";
    }
    const s =
      "undefined" != typeof WebGL2RenderingContext &&
      e instanceof WebGL2RenderingContext;
    let a = void 0 !== n.precision ? n.precision : "highp";
    const o = r(a);
    o !== a &&
      (console.warn(
        "THREE.WebGLRenderer:",
        a,
        "not supported, using",
        o,
        "instead."
      ),
      (a = o));
    const l = s || t.has("WEBGL_draw_buffers"),
      c = !0 === n.logarithmicDepthBuffer,
      h = e.getParameter(34930),
      u = e.getParameter(35660),
      d = e.getParameter(3379),
      p = e.getParameter(34076),
      f = e.getParameter(34921),
      m = e.getParameter(36347),
      g = e.getParameter(36348),
      _ = e.getParameter(36349),
      v = u > 0,
      x = s || t.has("OES_texture_float");
    return {
      isWebGL2: s,
      drawBuffers: l,
      getMaxAnisotropy: function () {
        if (void 0 !== i) return i;
        if (!0 === t.has("EXT_texture_filter_anisotropic")) {
          const n = t.get("EXT_texture_filter_anisotropic");
          i = e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
        } else i = 0;
        return i;
      },
      getMaxPrecision: r,
      precision: a,
      logarithmicDepthBuffer: c,
      maxTextures: h,
      maxVertexTextures: u,
      maxTextureSize: d,
      maxCubemapSize: p,
      maxAttributes: f,
      maxVertexUniforms: m,
      maxVaryings: g,
      maxFragmentUniforms: _,
      vertexTextures: v,
      floatFragmentTextures: x,
      floatVertexTextures: v && x,
      maxSamples: s ? e.getParameter(36183) : 0,
    };
  }
  function Fr(e) {
    const t = this;
    let n = null,
      i = 0,
      r = !1,
      s = !1;
    const a = new Sr(),
      o = new kt(),
      l = { value: null, needsUpdate: !1 };
    function c(e, n, i, r) {
      const s = null !== e ? e.length : 0;
      let c = null;
      if (0 !== s) {
        if (((c = l.value), !0 !== r || null === c)) {
          const t = i + 4 * s,
            r = n.matrixWorldInverse;
          o.getNormalMatrix(r),
            (null === c || c.length < t) && (c = new Float32Array(t));
          for (let t = 0, n = i; t !== s; ++t, n += 4)
            a.copy(e[t]).applyMatrix4(r, o),
              a.normal.toArray(c, n),
              (c[n + 3] = a.constant);
        }
        (l.value = c), (l.needsUpdate = !0);
      }
      return (t.numPlanes = s), (t.numIntersection = 0), c;
    }
    (this.uniform = l),
      (this.numPlanes = 0),
      (this.numIntersection = 0),
      (this.init = function (e, t) {
        const n = 0 !== e.length || t || 0 !== i || r;
        return (r = t), (i = e.length), n;
      }),
      (this.beginShadows = function () {
        (s = !0), c(null);
      }),
      (this.endShadows = function () {
        s = !1;
      }),
      (this.setGlobalState = function (e, t) {
        n = c(e, t, 0);
      }),
      (this.setState = function (a, o, h) {
        const u = a.clippingPlanes,
          d = a.clipIntersection,
          p = a.clipShadows,
          f = e.get(a);
        if (!r || null === u || 0 === u.length || (s && !p))
          s
            ? c(null)
            : (l.value !== n && ((l.value = n), (l.needsUpdate = i > 0)),
              (t.numPlanes = i),
              (t.numIntersection = 0));
        else {
          const e = s ? 0 : i,
            t = 4 * e;
          let r = f.clippingState || null;
          (l.value = r), (r = c(u, o, t, h));
          for (let e = 0; e !== t; ++e) r[e] = n[e];
          (f.clippingState = r),
            (this.numIntersection = d ? this.numPlanes : 0),
            (this.numPlanes += e);
        }
      });
  }
  function Br(e) {
    let t = new WeakMap();
    function n(e, t) {
      return t === J ? (e.mapping = K) : t === Q && (e.mapping = Z), e;
    }
    function i(e) {
      const n = e.target;
      n.removeEventListener("dispose", i);
      const r = t.get(n);
      void 0 !== r && (t.delete(n), r.dispose());
    }
    return {
      get: function (r) {
        if (r && r.isTexture && !1 === r.isRenderTargetTexture) {
          const s = r.mapping;
          if (s === J || s === Q) {
            if (t.has(r)) return n(t.get(r).texture, r.mapping);
            {
              const s = r.image;
              if (s && s.height > 0) {
                const a = new xr(s.height / 2);
                return (
                  a.fromEquirectangularTexture(e, r),
                  t.set(r, a),
                  r.addEventListener("dispose", i),
                  n(a.texture, r.mapping)
                );
              }
              return null;
            }
          }
        }
        return r;
      },
      dispose: function () {
        t = new WeakMap();
      },
    };
  }
  class kr extends fr {
    constructor(e = -1, t = 1, n = 1, i = -1, r = 0.1, s = 2e3) {
      super(),
        (this.isOrthographicCamera = !0),
        (this.type = "OrthographicCamera"),
        (this.zoom = 1),
        (this.view = null),
        (this.left = e),
        (this.right = t),
        (this.top = n),
        (this.bottom = i),
        (this.near = r),
        (this.far = s),
        this.updateProjectionMatrix();
    }
    copy(e, t) {
      return (
        super.copy(e, t),
        (this.left = e.left),
        (this.right = e.right),
        (this.top = e.top),
        (this.bottom = e.bottom),
        (this.near = e.near),
        (this.far = e.far),
        (this.zoom = e.zoom),
        (this.view = null === e.view ? null : Object.assign({}, e.view)),
        this
      );
    }
    setViewOffset(e, t, n, i, r, s) {
      null === this.view &&
        (this.view = {
          enabled: !0,
          fullWidth: 1,
          fullHeight: 1,
          offsetX: 0,
          offsetY: 0,
          width: 1,
          height: 1,
        }),
        (this.view.enabled = !0),
        (this.view.fullWidth = e),
        (this.view.fullHeight = t),
        (this.view.offsetX = n),
        (this.view.offsetY = i),
        (this.view.width = r),
        (this.view.height = s),
        this.updateProjectionMatrix();
    }
    clearViewOffset() {
      null !== this.view && (this.view.enabled = !1),
        this.updateProjectionMatrix();
    }
    updateProjectionMatrix() {
      const e = (this.right - this.left) / (2 * this.zoom),
        t = (this.top - this.bottom) / (2 * this.zoom),
        n = (this.right + this.left) / 2,
        i = (this.top + this.bottom) / 2;
      let r = n - e,
        s = n + e,
        a = i + t,
        o = i - t;
      if (null !== this.view && this.view.enabled) {
        const e = (this.right - this.left) / this.view.fullWidth / this.zoom,
          t = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
        (r += e * this.view.offsetX),
          (s = r + e * this.view.width),
          (a -= t * this.view.offsetY),
          (o = a - t * this.view.height);
      }
      this.projectionMatrix.makeOrthographic(r, s, a, o, this.near, this.far),
        this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
    }
    toJSON(e) {
      const t = super.toJSON(e);
      return (
        (t.object.zoom = this.zoom),
        (t.object.left = this.left),
        (t.object.right = this.right),
        (t.object.top = this.top),
        (t.object.bottom = this.bottom),
        (t.object.near = this.near),
        (t.object.far = this.far),
        null !== this.view && (t.object.view = Object.assign({}, this.view)),
        t
      );
    }
  }
  const Hr = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582],
    Gr = 20,
    Vr = new kr(),
    Wr = new Ci();
  let jr = null;
  const Xr = (1 + Math.sqrt(5)) / 2,
    qr = 1 / Xr,
    Yr = [
      new jt(1, 1, 1),
      new jt(-1, 1, 1),
      new jt(1, 1, -1),
      new jt(-1, 1, -1),
      new jt(0, Xr, qr),
      new jt(0, Xr, -qr),
      new jt(qr, 0, Xr),
      new jt(-qr, 0, Xr),
      new jt(Xr, qr, 0),
      new jt(-Xr, qr, 0),
    ];
  class Kr {
    constructor(e) {
      (this._renderer = e),
        (this._pingPongRenderTarget = null),
        (this._lodMax = 0),
        (this._cubeSize = 0),
        (this._lodPlanes = []),
        (this._sizeLods = []),
        (this._sigmas = []),
        (this._blurMaterial = null),
        (this._cubemapMaterial = null),
        (this._equirectMaterial = null),
        this._compileMaterial(this._blurMaterial);
    }
    fromScene(e, t = 0, n = 0.1, i = 100) {
      (jr = this._renderer.getRenderTarget()), this._setSize(256);
      const r = this._allocateTargets();
      return (
        (r.depthBuffer = !0),
        this._sceneToCubeUV(e, n, i, r),
        t > 0 && this._blur(r, 0, 0, t),
        this._applyPMREM(r),
        this._cleanup(r),
        r
      );
    }
    fromEquirectangular(e, t = null) {
      return this._fromTexture(e, t);
    }
    fromCubemap(e, t = null) {
      return this._fromTexture(e, t);
    }
    compileCubemapShader() {
      null === this._cubemapMaterial &&
        ((this._cubemapMaterial = $r()),
        this._compileMaterial(this._cubemapMaterial));
    }
    compileEquirectangularShader() {
      null === this._equirectMaterial &&
        ((this._equirectMaterial = Qr()),
        this._compileMaterial(this._equirectMaterial));
    }
    dispose() {
      this._dispose(),
        null !== this._cubemapMaterial && this._cubemapMaterial.dispose(),
        null !== this._equirectMaterial && this._equirectMaterial.dispose();
    }
    _setSize(e) {
      (this._lodMax = Math.floor(Math.log2(e))),
        (this._cubeSize = Math.pow(2, this._lodMax));
    }
    _dispose() {
      null !== this._blurMaterial && this._blurMaterial.dispose(),
        null !== this._pingPongRenderTarget &&
          this._pingPongRenderTarget.dispose();
      for (let e = 0; e < this._lodPlanes.length; e++)
        this._lodPlanes[e].dispose();
    }
    _cleanup(e) {
      this._renderer.setRenderTarget(jr),
        (e.scissorTest = !1),
        Jr(e, 0, 0, e.width, e.height);
    }
    _fromTexture(e, t) {
      e.mapping === K || e.mapping === Z
        ? this._setSize(
            0 === e.image.length
              ? 16
              : e.image[0].width || e.image[0].image.width
          )
        : this._setSize(e.image.width / 4),
        (jr = this._renderer.getRenderTarget());
      const n = t || this._allocateTargets();
      return (
        this._textureToCubeUV(e, n), this._applyPMREM(n), this._cleanup(n), n
      );
    }
    _allocateTargets() {
      const e = 3 * Math.max(this._cubeSize, 112),
        t = 4 * this._cubeSize,
        n = {
          magFilter: ae,
          minFilter: ae,
          generateMipmaps: !1,
          type: ge,
          format: Me,
          encoding: pt,
          depthBuffer: !1,
        },
        i = Zr(e, t, n);
      if (
        null === this._pingPongRenderTarget ||
        this._pingPongRenderTarget.width !== e ||
        this._pingPongRenderTarget.height !== t
      ) {
        null !== this._pingPongRenderTarget && this._dispose(),
          (this._pingPongRenderTarget = Zr(e, t, n));
        const { _lodMax: i } = this;
        ({
          sizeLods: this._sizeLods,
          lodPlanes: this._lodPlanes,
          sigmas: this._sigmas,
        } = (function (e) {
          const t = [],
            n = [],
            i = [];
          let r = e;
          const s = e - 4 + 1 + Hr.length;
          for (let a = 0; a < s; a++) {
            const s = Math.pow(2, r);
            n.push(s);
            let o = 1 / s;
            a > e - 4 ? (o = Hr[a - e + 4 - 1]) : 0 === a && (o = 0), i.push(o);
            const l = 1 / (s - 2),
              c = -l,
              h = 1 + l,
              u = [c, c, h, c, h, h, c, c, h, h, c, h],
              d = 6,
              p = 6,
              f = 3,
              m = 2,
              g = 1,
              _ = new Float32Array(f * p * d),
              v = new Float32Array(m * p * d),
              x = new Float32Array(g * p * d);
            for (let e = 0; e < d; e++) {
              const t = ((e % 3) * 2) / 3 - 1,
                n = e > 2 ? 0 : -1,
                i = [
                  t,
                  n,
                  0,
                  t + 2 / 3,
                  n,
                  0,
                  t + 2 / 3,
                  n + 1,
                  0,
                  t,
                  n,
                  0,
                  t + 2 / 3,
                  n + 1,
                  0,
                  t,
                  n + 1,
                  0,
                ];
              _.set(i, f * p * e), v.set(u, m * p * e);
              const r = [e, e, e, e, e, e];
              x.set(r, g * p * e);
            }
            const y = new ji();
            y.setAttribute("position", new Ni(_, f)),
              y.setAttribute("uv", new Ni(v, m)),
              y.setAttribute("faceIndex", new Ni(x, g)),
              t.push(y),
              r > 4 && r--;
          }
          return { lodPlanes: t, sizeLods: n, sigmas: i };
        })(i)),
          (this._blurMaterial = (function (e, t, n) {
            const i = new Float32Array(Gr),
              r = new jt(0, 1, 0);
            return new pr({
              name: "SphericalGaussianBlur",
              defines: {
                n: Gr,
                CUBEUV_TEXEL_WIDTH: 1 / t,
                CUBEUV_TEXEL_HEIGHT: 1 / n,
                CUBEUV_MAX_MIP: `${e}.0`,
              },
              uniforms: {
                envMap: { value: null },
                samples: { value: 1 },
                weights: { value: i },
                latitudinal: { value: !1 },
                dTheta: { value: 0 },
                mipInt: { value: 0 },
                poleAxis: { value: r },
              },
              vertexShader:
                "\n\n\t\tprecision mediump float;\n\t\tprecision mediump int;\n\n\t\tattribute float faceIndex;\n\n\t\tvarying vec3 vOutputDirection;\n\n\t\t// RH coordinate system; PMREM face-indexing convention\n\t\tvec3 getDirection( vec2 uv, float face ) {\n\n\t\t\tuv = 2.0 * uv - 1.0;\n\n\t\t\tvec3 direction = vec3( uv, 1.0 );\n\n\t\t\tif ( face == 0.0 ) {\n\n\t\t\t\tdirection = direction.zyx; // ( 1, v, u ) pos x\n\n\t\t\t} else if ( face == 1.0 ) {\n\n\t\t\t\tdirection = direction.xzy;\n\t\t\t\tdirection.xz *= -1.0; // ( -u, 1, -v ) pos y\n\n\t\t\t} else if ( face == 2.0 ) {\n\n\t\t\t\tdirection.x *= -1.0; // ( -u, v, 1 ) pos z\n\n\t\t\t} else if ( face == 3.0 ) {\n\n\t\t\t\tdirection = direction.zyx;\n\t\t\t\tdirection.xz *= -1.0; // ( -1, v, -u ) neg x\n\n\t\t\t} else if ( face == 4.0 ) {\n\n\t\t\t\tdirection = direction.xzy;\n\t\t\t\tdirection.xy *= -1.0; // ( -u, -1, v ) neg y\n\n\t\t\t} else if ( face == 5.0 ) {\n\n\t\t\t\tdirection.z *= -1.0; // ( u, v, -1 ) neg z\n\n\t\t\t}\n\n\t\t\treturn direction;\n\n\t\t}\n\n\t\tvoid main() {\n\n\t\t\tvOutputDirection = getDirection( uv, faceIndex );\n\t\t\tgl_Position = vec4( position, 1.0 );\n\n\t\t}\n\t",
              fragmentShader:
                "\n\n\t\t\tprecision mediump float;\n\t\t\tprecision mediump int;\n\n\t\t\tvarying vec3 vOutputDirection;\n\n\t\t\tuniform sampler2D envMap;\n\t\t\tuniform int samples;\n\t\t\tuniform float weights[ n ];\n\t\t\tuniform bool latitudinal;\n\t\t\tuniform float dTheta;\n\t\t\tuniform float mipInt;\n\t\t\tuniform vec3 poleAxis;\n\n\t\t\t#define ENVMAP_TYPE_CUBE_UV\n\t\t\t#include <cube_uv_reflection_fragment>\n\n\t\t\tvec3 getSample( float theta, vec3 axis ) {\n\n\t\t\t\tfloat cosTheta = cos( theta );\n\t\t\t\t// Rodrigues' axis-angle rotation\n\t\t\t\tvec3 sampleDirection = vOutputDirection * cosTheta\n\t\t\t\t\t+ cross( axis, vOutputDirection ) * sin( theta )\n\t\t\t\t\t+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );\n\n\t\t\t\treturn bilinearCubeUV( envMap, sampleDirection, mipInt );\n\n\t\t\t}\n\n\t\t\tvoid main() {\n\n\t\t\t\tvec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );\n\n\t\t\t\tif ( all( equal( axis, vec3( 0.0 ) ) ) ) {\n\n\t\t\t\t\taxis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );\n\n\t\t\t\t}\n\n\t\t\t\taxis = normalize( axis );\n\n\t\t\t\tgl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );\n\t\t\t\tgl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );\n\n\t\t\t\tfor ( int i = 1; i < n; i++ ) {\n\n\t\t\t\t\tif ( i >= samples ) {\n\n\t\t\t\t\t\tbreak;\n\n\t\t\t\t\t}\n\n\t\t\t\t\tfloat theta = dTheta * float( i );\n\t\t\t\t\tgl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );\n\t\t\t\t\tgl_FragColor.rgb += weights[ i ] * getSample( theta, axis );\n\n\t\t\t\t}\n\n\t\t\t}\n\t\t",
              blending: h,
              depthTest: !1,
              depthWrite: !1,
            });
          })(i, e, t));
      }
      return i;
    }
    _compileMaterial(e) {
      const t = new ar(this._lodPlanes[0], e);
      this._renderer.compile(t, Vr);
    }
    _sceneToCubeUV(e, t, n, i) {
      const r = new mr(90, 1, t, n),
        s = [1, -1, 1, 1, 1, 1],
        a = [1, 1, 1, -1, -1, -1],
        o = this._renderer,
        c = o.autoClear,
        h = o.toneMapping;
      o.getClearColor(Wr), (o.toneMapping = V), (o.autoClear = !1);
      const u = new Pi({
          name: "PMREM.Background",
          side: l,
          depthWrite: !1,
          depthTest: !1,
        }),
        d = new ar(new lr(), u);
      let p = !1;
      const f = e.background;
      f
        ? f.isColor && (u.color.copy(f), (e.background = null), (p = !0))
        : (u.color.copy(Wr), (p = !0));
      for (let t = 0; t < 6; t++) {
        const n = t % 3;
        0 === n
          ? (r.up.set(0, s[t], 0), r.lookAt(a[t], 0, 0))
          : 1 === n
          ? (r.up.set(0, 0, s[t]), r.lookAt(0, a[t], 0))
          : (r.up.set(0, s[t], 0), r.lookAt(0, 0, a[t]));
        const l = this._cubeSize;
        Jr(i, n * l, t > 2 ? l : 0, l, l),
          o.setRenderTarget(i),
          p && o.render(d, r),
          o.render(e, r);
      }
      d.geometry.dispose(),
        d.material.dispose(),
        (o.toneMapping = h),
        (o.autoClear = c),
        (e.background = f);
    }
    _textureToCubeUV(e, t) {
      const n = this._renderer,
        i = e.mapping === K || e.mapping === Z;
      i
        ? (null === this._cubemapMaterial && (this._cubemapMaterial = $r()),
          (this._cubemapMaterial.uniforms.flipEnvMap.value =
            !1 === e.isRenderTargetTexture ? -1 : 1))
        : null === this._equirectMaterial && (this._equirectMaterial = Qr());
      const r = i ? this._cubemapMaterial : this._equirectMaterial,
        s = new ar(this._lodPlanes[0], r);
      r.uniforms.envMap.value = e;
      const a = this._cubeSize;
      Jr(t, 0, 0, 3 * a, 2 * a), n.setRenderTarget(t), n.render(s, Vr);
    }
    _applyPMREM(e) {
      const t = this._renderer,
        n = t.autoClear;
      t.autoClear = !1;
      for (let t = 1; t < this._lodPlanes.length; t++) {
        const n = Math.sqrt(
            this._sigmas[t] * this._sigmas[t] -
              this._sigmas[t - 1] * this._sigmas[t - 1]
          ),
          i = Yr[(t - 1) % Yr.length];
        this._blur(e, t - 1, t, n, i);
      }
      t.autoClear = n;
    }
    _blur(e, t, n, i, r) {
      const s = this._pingPongRenderTarget;
      this._halfBlur(e, s, t, n, i, "latitudinal", r),
        this._halfBlur(s, e, n, n, i, "longitudinal", r);
    }
    _halfBlur(e, t, n, i, r, s, a) {
      const o = this._renderer,
        l = this._blurMaterial;
      "latitudinal" !== s &&
        "longitudinal" !== s &&
        console.error(
          "blur direction must be either latitudinal or longitudinal!"
        );
      const c = new ar(this._lodPlanes[i], l),
        h = l.uniforms,
        u = this._sizeLods[n] - 1,
        d = isFinite(r) ? Math.PI / (2 * u) : (2 * Math.PI) / 39,
        p = r / d,
        f = isFinite(r) ? 1 + Math.floor(3 * p) : Gr;
      f > Gr &&
        console.warn(
          `sigmaRadians, ${r}, is too large and will clip, as it requested ${f} samples when the maximum is set to 20`
        );
      const m = [];
      let g = 0;
      for (let e = 0; e < Gr; ++e) {
        const t = e / p,
          n = Math.exp((-t * t) / 2);
        m.push(n), 0 === e ? (g += n) : e < f && (g += 2 * n);
      }
      for (let e = 0; e < m.length; e++) m[e] = m[e] / g;
      (h.envMap.value = e.texture),
        (h.samples.value = f),
        (h.weights.value = m),
        (h.latitudinal.value = "latitudinal" === s),
        a && (h.poleAxis.value = a);
      const { _lodMax: _ } = this;
      (h.dTheta.value = d), (h.mipInt.value = _ - n);
      const v = this._sizeLods[i];
      Jr(
        t,
        3 * v * (i > _ - 4 ? i - _ + 4 : 0),
        4 * (this._cubeSize - v),
        3 * v,
        2 * v
      ),
        o.setRenderTarget(t),
        o.render(c, Vr);
    }
  }
  function Zr(e, t, n) {
    const i = new hn(e, t, n);
    return (
      (i.texture.mapping = $),
      (i.texture.name = "PMREM.cubeUv"),
      (i.scissorTest = !0),
      i
    );
  }
  function Jr(e, t, n, i, r) {
    e.viewport.set(t, n, i, r), e.scissor.set(t, n, i, r);
  }
  function Qr() {
    return new pr({
      name: "EquirectangularToCubeUV",
      uniforms: { envMap: { value: null } },
      vertexShader:
        "\n\n\t\tprecision mediump float;\n\t\tprecision mediump int;\n\n\t\tattribute float faceIndex;\n\n\t\tvarying vec3 vOutputDirection;\n\n\t\t// RH coordinate system; PMREM face-indexing convention\n\t\tvec3 getDirection( vec2 uv, float face ) {\n\n\t\t\tuv = 2.0 * uv - 1.0;\n\n\t\t\tvec3 direction = vec3( uv, 1.0 );\n\n\t\t\tif ( face == 0.0 ) {\n\n\t\t\t\tdirection = direction.zyx; // ( 1, v, u ) pos x\n\n\t\t\t} else if ( face == 1.0 ) {\n\n\t\t\t\tdirection = direction.xzy;\n\t\t\t\tdirection.xz *= -1.0; // ( -u, 1, -v ) pos y\n\n\t\t\t} else if ( face == 2.0 ) {\n\n\t\t\t\tdirection.x *= -1.0; // ( -u, v, 1 ) pos z\n\n\t\t\t} else if ( face == 3.0 ) {\n\n\t\t\t\tdirection = direction.zyx;\n\t\t\t\tdirection.xz *= -1.0; // ( -1, v, -u ) neg x\n\n\t\t\t} else if ( face == 4.0 ) {\n\n\t\t\t\tdirection = direction.xzy;\n\t\t\t\tdirection.xy *= -1.0; // ( -u, -1, v ) neg y\n\n\t\t\t} else if ( face == 5.0 ) {\n\n\t\t\t\tdirection.z *= -1.0; // ( u, v, -1 ) neg z\n\n\t\t\t}\n\n\t\t\treturn direction;\n\n\t\t}\n\n\t\tvoid main() {\n\n\t\t\tvOutputDirection = getDirection( uv, faceIndex );\n\t\t\tgl_Position = vec4( position, 1.0 );\n\n\t\t}\n\t",
      fragmentShader:
        "\n\n\t\t\tprecision mediump float;\n\t\t\tprecision mediump int;\n\n\t\t\tvarying vec3 vOutputDirection;\n\n\t\t\tuniform sampler2D envMap;\n\n\t\t\t#include <common>\n\n\t\t\tvoid main() {\n\n\t\t\t\tvec3 outputDirection = normalize( vOutputDirection );\n\t\t\t\tvec2 uv = equirectUv( outputDirection );\n\n\t\t\t\tgl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );\n\n\t\t\t}\n\t\t",
      blending: h,
      depthTest: !1,
      depthWrite: !1,
    });
  }
  function $r() {
    return new pr({
      name: "CubemapToCubeUV",
      uniforms: { envMap: { value: null }, flipEnvMap: { value: -1 } },
      vertexShader:
        "\n\n\t\tprecision mediump float;\n\t\tprecision mediump int;\n\n\t\tattribute float faceIndex;\n\n\t\tvarying vec3 vOutputDirection;\n\n\t\t// RH coordinate system; PMREM face-indexing convention\n\t\tvec3 getDirection( vec2 uv, float face ) {\n\n\t\t\tuv = 2.0 * uv - 1.0;\n\n\t\t\tvec3 direction = vec3( uv, 1.0 );\n\n\t\t\tif ( face == 0.0 ) {\n\n\t\t\t\tdirection = direction.zyx; // ( 1, v, u ) pos x\n\n\t\t\t} else if ( face == 1.0 ) {\n\n\t\t\t\tdirection = direction.xzy;\n\t\t\t\tdirection.xz *= -1.0; // ( -u, 1, -v ) pos y\n\n\t\t\t} else if ( face == 2.0 ) {\n\n\t\t\t\tdirection.x *= -1.0; // ( -u, v, 1 ) pos z\n\n\t\t\t} else if ( face == 3.0 ) {\n\n\t\t\t\tdirection = direction.zyx;\n\t\t\t\tdirection.xz *= -1.0; // ( -1, v, -u ) neg x\n\n\t\t\t} else if ( face == 4.0 ) {\n\n\t\t\t\tdirection = direction.xzy;\n\t\t\t\tdirection.xy *= -1.0; // ( -u, -1, v ) neg y\n\n\t\t\t} else if ( face == 5.0 ) {\n\n\t\t\t\tdirection.z *= -1.0; // ( u, v, -1 ) neg z\n\n\t\t\t}\n\n\t\t\treturn direction;\n\n\t\t}\n\n\t\tvoid main() {\n\n\t\t\tvOutputDirection = getDirection( uv, faceIndex );\n\t\t\tgl_Position = vec4( position, 1.0 );\n\n\t\t}\n\t",
      fragmentShader:
        "\n\n\t\t\tprecision mediump float;\n\t\t\tprecision mediump int;\n\n\t\t\tuniform float flipEnvMap;\n\n\t\t\tvarying vec3 vOutputDirection;\n\n\t\t\tuniform samplerCube envMap;\n\n\t\t\tvoid main() {\n\n\t\t\t\tgl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );\n\n\t\t\t}\n\t\t",
      blending: h,
      depthTest: !1,
      depthWrite: !1,
    });
  }
  function es(e) {
    let t = new WeakMap(),
      n = null;
    function i(e) {
      const n = e.target;
      n.removeEventListener("dispose", i);
      const r = t.get(n);
      void 0 !== r && (t.delete(n), r.dispose());
    }
    return {
      get: function (r) {
        if (r && r.isTexture) {
          const s = r.mapping,
            a = s === J || s === Q,
            o = s === K || s === Z;
          if (a || o) {
            if (r.isRenderTargetTexture && !0 === r.needsPMREMUpdate) {
              r.needsPMREMUpdate = !1;
              let i = t.get(r);
              return (
                null === n && (n = new Kr(e)),
                (i = a ? n.fromEquirectangular(r, i) : n.fromCubemap(r, i)),
                t.set(r, i),
                i.texture
              );
            }
            if (t.has(r)) return t.get(r).texture;
            {
              const s = r.image;
              if (
                (a && s && s.height > 0) ||
                (o &&
                  s &&
                  (function (e) {
                    let t = 0;
                    for (let n = 0; n < 6; n++) void 0 !== e[n] && t++;
                    return 6 === t;
                  })(s))
              ) {
                null === n && (n = new Kr(e));
                const s = a ? n.fromEquirectangular(r) : n.fromCubemap(r);
                return t.set(r, s), r.addEventListener("dispose", i), s.texture;
              }
              return null;
            }
          }
        }
        return r;
      },
      dispose: function () {
        (t = new WeakMap()), null !== n && (n.dispose(), (n = null));
      },
    };
  }
  function ts(e) {
    const t = {};
    function n(n) {
      if (void 0 !== t[n]) return t[n];
      let i;
      switch (n) {
        case "WEBGL_depth_texture":
          i =
            e.getExtension("WEBGL_depth_texture") ||
            e.getExtension("MOZ_WEBGL_depth_texture") ||
            e.getExtension("WEBKIT_WEBGL_depth_texture");
          break;
        case "EXT_texture_filter_anisotropic":
          i =
            e.getExtension("EXT_texture_filter_anisotropic") ||
            e.getExtension("MOZ_EXT_texture_filter_anisotropic") ||
            e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
          break;
        case "WEBGL_compressed_texture_s3tc":
          i =
            e.getExtension("WEBGL_compressed_texture_s3tc") ||
            e.getExtension("MOZ_WEBGL_compressed_texture_s3tc") ||
            e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
          break;
        case "WEBGL_compressed_texture_pvrtc":
          i =
            e.getExtension("WEBGL_compressed_texture_pvrtc") ||
            e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
          break;
        default:
          i = e.getExtension(n);
      }
      return (t[n] = i), i;
    }
    return {
      has: function (e) {
        return null !== n(e);
      },
      init: function (e) {
        e.isWebGL2
          ? n("EXT_color_buffer_float")
          : (n("WEBGL_depth_texture"),
            n("OES_texture_float"),
            n("OES_texture_half_float"),
            n("OES_texture_half_float_linear"),
            n("OES_standard_derivatives"),
            n("OES_element_index_uint"),
            n("OES_vertex_array_object"),
            n("ANGLE_instanced_arrays")),
          n("OES_texture_float_linear"),
          n("EXT_color_buffer_half_float"),
          n("WEBGL_multisampled_render_to_texture");
      },
      get: function (e) {
        const t = n(e);
        return (
          null === t &&
            console.warn(
              "THREE.WebGLRenderer: " + e + " extension not supported."
            ),
          t
        );
      },
    };
  }
  function ns(e, t, n, i) {
    const r = {},
      s = new WeakMap();
    function a(e) {
      const o = e.target;
      null !== o.index && t.remove(o.index);
      for (const e in o.attributes) t.remove(o.attributes[e]);
      o.removeEventListener("dispose", a), delete r[o.id];
      const l = s.get(o);
      l && (t.remove(l), s.delete(o)),
        i.releaseStatesOfGeometry(o),
        !0 === o.isInstancedBufferGeometry && delete o._maxInstanceCount,
        n.memory.geometries--;
    }
    function o(e) {
      const n = [],
        i = e.index,
        r = e.attributes.position;
      let a = 0;
      if (null !== i) {
        const e = i.array;
        a = i.version;
        for (let t = 0, i = e.length; t < i; t += 3) {
          const i = e[t + 0],
            r = e[t + 1],
            s = e[t + 2];
          n.push(i, r, r, s, s, i);
        }
      } else {
        const e = r.array;
        a = r.version;
        for (let t = 0, i = e.length / 3 - 1; t < i; t += 3) {
          const e = t + 0,
            i = t + 1,
            r = t + 2;
          n.push(e, i, i, r, r, e);
        }
      }
      const o = new (Gt(n) ? Ui : Oi)(n, 1);
      o.version = a;
      const l = s.get(e);
      l && t.remove(l), s.set(e, o);
    }
    return {
      get: function (e, t) {
        return (
          !0 === r[t.id] ||
            (t.addEventListener("dispose", a),
            (r[t.id] = !0),
            n.memory.geometries++),
          t
        );
      },
      update: function (e) {
        const n = e.attributes;
        for (const e in n) t.update(n[e], 34962);
        const i = e.morphAttributes;
        for (const e in i) {
          const n = i[e];
          for (let e = 0, i = n.length; e < i; e++) t.update(n[e], 34962);
        }
      },
      getWireframeAttribute: function (e) {
        const t = s.get(e);
        if (t) {
          const n = e.index;
          null !== n && t.version < n.version && o(e);
        } else o(e);
        return s.get(e);
      },
    };
  }
  function is(e, t, n, i) {
    const r = i.isWebGL2;
    let s, a, o;
    (this.setMode = function (e) {
      s = e;
    }),
      (this.setIndex = function (e) {
        (a = e.type), (o = e.bytesPerElement);
      }),
      (this.render = function (t, i) {
        e.drawElements(s, i, a, t * o), n.update(i, s, 1);
      }),
      (this.renderInstances = function (i, l, c) {
        if (0 === c) return;
        let h, u;
        if (r) (h = e), (u = "drawElementsInstanced");
        else if (
          ((h = t.get("ANGLE_instanced_arrays")),
          (u = "drawElementsInstancedANGLE"),
          null === h)
        )
          return void console.error(
            "THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays."
          );
        h[u](s, l, a, i * o, c), n.update(l, s, c);
      });
  }
  function rs(e) {
    const t = { frame: 0, calls: 0, triangles: 0, points: 0, lines: 0 };
    return {
      memory: { geometries: 0, textures: 0 },
      render: t,
      programs: null,
      autoReset: !0,
      reset: function () {
        t.frame++,
          (t.calls = 0),
          (t.triangles = 0),
          (t.points = 0),
          (t.lines = 0);
      },
      update: function (e, n, i) {
        switch ((t.calls++, n)) {
          case 4:
            t.triangles += i * (e / 3);
            break;
          case 1:
            t.lines += i * (e / 2);
            break;
          case 3:
            t.lines += i * (e - 1);
            break;
          case 2:
            t.lines += i * e;
            break;
          case 0:
            t.points += i * e;
            break;
          default:
            console.error("THREE.WebGLInfo: Unknown draw mode:", n);
        }
      },
    };
  }
  function ss(e, t) {
    return e[0] - t[0];
  }
  function as(e, t) {
    return Math.abs(t[1]) - Math.abs(e[1]);
  }
  function os(e, t, n) {
    const i = {},
      r = new Float32Array(8),
      s = new WeakMap(),
      a = new cn(),
      o = [];
    for (let e = 0; e < 8; e++) o[e] = [e, 0];
    return {
      update: function (l, c, h) {
        const u = l.morphTargetInfluences;
        if (!0 === t.isWebGL2) {
          const d =
              c.morphAttributes.position ||
              c.morphAttributes.normal ||
              c.morphAttributes.color,
            p = void 0 !== d ? d.length : 0;
          let f = s.get(c);
          if (void 0 === f || f.count !== p) {
            void 0 !== f && f.texture.dispose();
            const _ = void 0 !== c.morphAttributes.position,
              v = void 0 !== c.morphAttributes.normal,
              x = void 0 !== c.morphAttributes.color,
              y = c.morphAttributes.position || [],
              M = c.morphAttributes.normal || [],
              b = c.morphAttributes.color || [];
            let S = 0;
            !0 === _ && (S = 1), !0 === v && (S = 2), !0 === x && (S = 3);
            let w = c.attributes.position.count * S,
              T = 1;
            w > t.maxTextureSize &&
              ((T = Math.ceil(w / t.maxTextureSize)), (w = t.maxTextureSize));
            const E = new Float32Array(w * T * 4 * p),
              A = new un(E, w, T, p);
            (A.type = me), (A.needsUpdate = !0);
            const L = 4 * S;
            for (let R = 0; R < p; R++) {
              const P = y[R],
                D = M[R],
                I = b[R],
                N = w * T * 4 * R;
              for (let O = 0; O < P.count; O++) {
                const U = O * L;
                !0 === _ &&
                  (a.fromBufferAttribute(P, O),
                  (E[N + U + 0] = a.x),
                  (E[N + U + 1] = a.y),
                  (E[N + U + 2] = a.z),
                  (E[N + U + 3] = 0)),
                  !0 === v &&
                    (a.fromBufferAttribute(D, O),
                    (E[N + U + 4] = a.x),
                    (E[N + U + 5] = a.y),
                    (E[N + U + 6] = a.z),
                    (E[N + U + 7] = 0)),
                  !0 === x &&
                    (a.fromBufferAttribute(I, O),
                    (E[N + U + 8] = a.x),
                    (E[N + U + 9] = a.y),
                    (E[N + U + 10] = a.z),
                    (E[N + U + 11] = 4 === I.itemSize ? a.w : 1));
              }
            }
            function C() {
              A.dispose(), s.delete(c), c.removeEventListener("dispose", C);
            }
            (f = { count: p, texture: A, size: new Bt(w, T) }),
              s.set(c, f),
              c.addEventListener("dispose", C);
          }
          let m = 0;
          for (let z = 0; z < u.length; z++) m += u[z];
          const g = c.morphTargetsRelative ? 1 : 1 - m;
          h.getUniforms().setValue(e, "morphTargetBaseInfluence", g),
            h.getUniforms().setValue(e, "morphTargetInfluences", u),
            h.getUniforms().setValue(e, "morphTargetsTexture", f.texture, n),
            h.getUniforms().setValue(e, "morphTargetsTextureSize", f.size);
        } else {
          const F = void 0 === u ? 0 : u.length;
          let B = i[c.id];
          if (void 0 === B || B.length !== F) {
            B = [];
            for (let W = 0; W < F; W++) B[W] = [W, 0];
            i[c.id] = B;
          }
          for (let j = 0; j < F; j++) {
            const X = B[j];
            (X[0] = j), (X[1] = u[j]);
          }
          B.sort(as);
          for (let q = 0; q < 8; q++)
            q < F && B[q][1]
              ? ((o[q][0] = B[q][0]), (o[q][1] = B[q][1]))
              : ((o[q][0] = Number.MAX_SAFE_INTEGER), (o[q][1] = 0));
          o.sort(ss);
          const k = c.morphAttributes.position,
            H = c.morphAttributes.normal;
          let G = 0;
          for (let Y = 0; Y < 8; Y++) {
            const K = o[Y],
              Z = K[0],
              J = K[1];
            Z !== Number.MAX_SAFE_INTEGER && J
              ? (k &&
                  c.getAttribute("morphTarget" + Y) !== k[Z] &&
                  c.setAttribute("morphTarget" + Y, k[Z]),
                H &&
                  c.getAttribute("morphNormal" + Y) !== H[Z] &&
                  c.setAttribute("morphNormal" + Y, H[Z]),
                (r[Y] = J),
                (G += J))
              : (k &&
                  !0 === c.hasAttribute("morphTarget" + Y) &&
                  c.deleteAttribute("morphTarget" + Y),
                H &&
                  !0 === c.hasAttribute("morphNormal" + Y) &&
                  c.deleteAttribute("morphNormal" + Y),
                (r[Y] = 0));
          }
          const V = c.morphTargetsRelative ? 1 : 1 - G;
          h.getUniforms().setValue(e, "morphTargetBaseInfluence", V),
            h.getUniforms().setValue(e, "morphTargetInfluences", r);
        }
      },
    };
  }
  function ls(e, t, n, i) {
    let r = new WeakMap();
    function s(e) {
      const t = e.target;
      t.removeEventListener("dispose", s),
        n.remove(t.instanceMatrix),
        null !== t.instanceColor && n.remove(t.instanceColor);
    }
    return {
      update: function (e) {
        const a = i.render.frame,
          o = e.geometry,
          l = t.get(e, o);
        return (
          r.get(l) !== a && (t.update(l), r.set(l, a)),
          e.isInstancedMesh &&
            (!1 === e.hasEventListener("dispose", s) &&
              e.addEventListener("dispose", s),
            n.update(e.instanceMatrix, 34962),
            null !== e.instanceColor && n.update(e.instanceColor, 34962)),
          l
        );
      },
      dispose: function () {
        r = new WeakMap();
      },
    };
  }
  const cs = new ln(),
    hs = new un(),
    us = new dn(),
    ds = new vr(),
    ps = [],
    fs = [],
    ms = new Float32Array(16),
    gs = new Float32Array(9),
    _s = new Float32Array(4);
  function vs(e, t, n) {
    const i = e[0];
    if (i <= 0 || i > 0) return e;
    const r = t * n;
    let s = ps[r];
    if ((void 0 === s && ((s = new Float32Array(r)), (ps[r] = s)), 0 !== t)) {
      i.toArray(s, 0);
      for (let i = 1, r = 0; i !== t; ++i) (r += n), e[i].toArray(s, r);
    }
    return s;
  }
  function xs(e, t) {
    if (e.length !== t.length) return !1;
    for (let n = 0, i = e.length; n < i; n++) if (e[n] !== t[n]) return !1;
    return !0;
  }
  function ys(e, t) {
    for (let n = 0, i = t.length; n < i; n++) e[n] = t[n];
  }
  function Ms(e, t) {
    let n = fs[t];
    void 0 === n && ((n = new Int32Array(t)), (fs[t] = n));
    for (let i = 0; i !== t; ++i) n[i] = e.allocateTextureUnit();
    return n;
  }
  function bs(e, t) {
    const n = this.cache;
    n[0] !== t && (e.uniform1f(this.addr, t), (n[0] = t));
  }
  function Ss(e, t) {
    const n = this.cache;
    if (void 0 !== t.x)
      (n[0] === t.x && n[1] === t.y) ||
        (e.uniform2f(this.addr, t.x, t.y), (n[0] = t.x), (n[1] = t.y));
    else {
      if (xs(n, t)) return;
      e.uniform2fv(this.addr, t), ys(n, t);
    }
  }
  function ws(e, t) {
    const n = this.cache;
    if (void 0 !== t.x)
      (n[0] === t.x && n[1] === t.y && n[2] === t.z) ||
        (e.uniform3f(this.addr, t.x, t.y, t.z),
        (n[0] = t.x),
        (n[1] = t.y),
        (n[2] = t.z));
    else if (void 0 !== t.r)
      (n[0] === t.r && n[1] === t.g && n[2] === t.b) ||
        (e.uniform3f(this.addr, t.r, t.g, t.b),
        (n[0] = t.r),
        (n[1] = t.g),
        (n[2] = t.b));
    else {
      if (xs(n, t)) return;
      e.uniform3fv(this.addr, t), ys(n, t);
    }
  }
  function Ts(e, t) {
    const n = this.cache;
    if (void 0 !== t.x)
      (n[0] === t.x && n[1] === t.y && n[2] === t.z && n[3] === t.w) ||
        (e.uniform4f(this.addr, t.x, t.y, t.z, t.w),
        (n[0] = t.x),
        (n[1] = t.y),
        (n[2] = t.z),
        (n[3] = t.w));
    else {
      if (xs(n, t)) return;
      e.uniform4fv(this.addr, t), ys(n, t);
    }
  }
  function Es(e, t) {
    const n = this.cache,
      i = t.elements;
    if (void 0 === i) {
      if (xs(n, t)) return;
      e.uniformMatrix2fv(this.addr, !1, t), ys(n, t);
    } else {
      if (xs(n, i)) return;
      _s.set(i), e.uniformMatrix2fv(this.addr, !1, _s), ys(n, i);
    }
  }
  function As(e, t) {
    const n = this.cache,
      i = t.elements;
    if (void 0 === i) {
      if (xs(n, t)) return;
      e.uniformMatrix3fv(this.addr, !1, t), ys(n, t);
    } else {
      if (xs(n, i)) return;
      gs.set(i), e.uniformMatrix3fv(this.addr, !1, gs), ys(n, i);
    }
  }
  function Ls(e, t) {
    const n = this.cache,
      i = t.elements;
    if (void 0 === i) {
      if (xs(n, t)) return;
      e.uniformMatrix4fv(this.addr, !1, t), ys(n, t);
    } else {
      if (xs(n, i)) return;
      ms.set(i), e.uniformMatrix4fv(this.addr, !1, ms), ys(n, i);
    }
  }
  function Cs(e, t) {
    const n = this.cache;
    n[0] !== t && (e.uniform1i(this.addr, t), (n[0] = t));
  }
  function Rs(e, t) {
    const n = this.cache;
    if (void 0 !== t.x)
      (n[0] === t.x && n[1] === t.y) ||
        (e.uniform2i(this.addr, t.x, t.y), (n[0] = t.x), (n[1] = t.y));
    else {
      if (xs(n, t)) return;
      e.uniform2iv(this.addr, t), ys(n, t);
    }
  }
  function Ps(e, t) {
    const n = this.cache;
    if (void 0 !== t.x)
      (n[0] === t.x && n[1] === t.y && n[2] === t.z) ||
        (e.uniform3i(this.addr, t.x, t.y, t.z),
        (n[0] = t.x),
        (n[1] = t.y),
        (n[2] = t.z));
    else {
      if (xs(n, t)) return;
      e.uniform3iv(this.addr, t), ys(n, t);
    }
  }
  function Ds(e, t) {
    const n = this.cache;
    if (void 0 !== t.x)
      (n[0] === t.x && n[1] === t.y && n[2] === t.z && n[3] === t.w) ||
        (e.uniform4i(this.addr, t.x, t.y, t.z, t.w),
        (n[0] = t.x),
        (n[1] = t.y),
        (n[2] = t.z),
        (n[3] = t.w));
    else {
      if (xs(n, t)) return;
      e.uniform4iv(this.addr, t), ys(n, t);
    }
  }
  function Is(e, t) {
    const n = this.cache;
    n[0] !== t && (e.uniform1ui(this.addr, t), (n[0] = t));
  }
  function Ns(e, t) {
    const n = this.cache;
    if (void 0 !== t.x)
      (n[0] === t.x && n[1] === t.y) ||
        (e.uniform2ui(this.addr, t.x, t.y), (n[0] = t.x), (n[1] = t.y));
    else {
      if (xs(n, t)) return;
      e.uniform2uiv(this.addr, t), ys(n, t);
    }
  }
  function Os(e, t) {
    const n = this.cache;
    if (void 0 !== t.x)
      (n[0] === t.x && n[1] === t.y && n[2] === t.z) ||
        (e.uniform3ui(this.addr, t.x, t.y, t.z),
        (n[0] = t.x),
        (n[1] = t.y),
        (n[2] = t.z));
    else {
      if (xs(n, t)) return;
      e.uniform3uiv(this.addr, t), ys(n, t);
    }
  }
  function Us(e, t) {
    const n = this.cache;
    if (void 0 !== t.x)
      (n[0] === t.x && n[1] === t.y && n[2] === t.z && n[3] === t.w) ||
        (e.uniform4ui(this.addr, t.x, t.y, t.z, t.w),
        (n[0] = t.x),
        (n[1] = t.y),
        (n[2] = t.z),
        (n[3] = t.w));
    else {
      if (xs(n, t)) return;
      e.uniform4uiv(this.addr, t), ys(n, t);
    }
  }
  function zs(e, t, n) {
    const i = this.cache,
      r = n.allocateTextureUnit();
    i[0] !== r && (e.uniform1i(this.addr, r), (i[0] = r)),
      n.setTexture2D(t || cs, r);
  }
  function Fs(e, t, n) {
    const i = this.cache,
      r = n.allocateTextureUnit();
    i[0] !== r && (e.uniform1i(this.addr, r), (i[0] = r)),
      n.setTexture3D(t || us, r);
  }
  function Bs(e, t, n) {
    const i = this.cache,
      r = n.allocateTextureUnit();
    i[0] !== r && (e.uniform1i(this.addr, r), (i[0] = r)),
      n.setTextureCube(t || ds, r);
  }
  function ks(e, t, n) {
    const i = this.cache,
      r = n.allocateTextureUnit();
    i[0] !== r && (e.uniform1i(this.addr, r), (i[0] = r)),
      n.setTexture2DArray(t || hs, r);
  }
  function Hs(e, t) {
    e.uniform1fv(this.addr, t);
  }
  function Gs(e, t) {
    const n = vs(t, this.size, 2);
    e.uniform2fv(this.addr, n);
  }
  function Vs(e, t) {
    const n = vs(t, this.size, 3);
    e.uniform3fv(this.addr, n);
  }
  function Ws(e, t) {
    const n = vs(t, this.size, 4);
    e.uniform4fv(this.addr, n);
  }
  function js(e, t) {
    const n = vs(t, this.size, 4);
    e.uniformMatrix2fv(this.addr, !1, n);
  }
  function Xs(e, t) {
    const n = vs(t, this.size, 9);
    e.uniformMatrix3fv(this.addr, !1, n);
  }
  function qs(e, t) {
    const n = vs(t, this.size, 16);
    e.uniformMatrix4fv(this.addr, !1, n);
  }
  function Ys(e, t) {
    e.uniform1iv(this.addr, t);
  }
  function Ks(e, t) {
    e.uniform2iv(this.addr, t);
  }
  function Zs(e, t) {
    e.uniform3iv(this.addr, t);
  }
  function Js(e, t) {
    e.uniform4iv(this.addr, t);
  }
  function Qs(e, t) {
    e.uniform1uiv(this.addr, t);
  }
  function $s(e, t) {
    e.uniform2uiv(this.addr, t);
  }
  function ea(e, t) {
    e.uniform3uiv(this.addr, t);
  }
  function ta(e, t) {
    e.uniform4uiv(this.addr, t);
  }
  function na(e, t, n) {
    const i = this.cache,
      r = t.length,
      s = Ms(n, r);
    xs(i, s) || (e.uniform1iv(this.addr, s), ys(i, s));
    for (let e = 0; e !== r; ++e) n.setTexture2D(t[e] || cs, s[e]);
  }
  function ia(e, t, n) {
    const i = this.cache,
      r = t.length,
      s = Ms(n, r);
    xs(i, s) || (e.uniform1iv(this.addr, s), ys(i, s));
    for (let e = 0; e !== r; ++e) n.setTexture3D(t[e] || us, s[e]);
  }
  function ra(e, t, n) {
    const i = this.cache,
      r = t.length,
      s = Ms(n, r);
    xs(i, s) || (e.uniform1iv(this.addr, s), ys(i, s));
    for (let e = 0; e !== r; ++e) n.setTextureCube(t[e] || ds, s[e]);
  }
  function sa(e, t, n) {
    const i = this.cache,
      r = t.length,
      s = Ms(n, r);
    xs(i, s) || (e.uniform1iv(this.addr, s), ys(i, s));
    for (let e = 0; e !== r; ++e) n.setTexture2DArray(t[e] || hs, s[e]);
  }
  class aa {
    constructor(e, t, n) {
      (this.id = e),
        (this.addr = n),
        (this.cache = []),
        (this.setValue = (function (e) {
          switch (e) {
            case 5126:
              return bs;
            case 35664:
              return Ss;
            case 35665:
              return ws;
            case 35666:
              return Ts;
            case 35674:
              return Es;
            case 35675:
              return As;
            case 35676:
              return Ls;
            case 5124:
            case 35670:
              return Cs;
            case 35667:
            case 35671:
              return Rs;
            case 35668:
            case 35672:
              return Ps;
            case 35669:
            case 35673:
              return Ds;
            case 5125:
              return Is;
            case 36294:
              return Ns;
            case 36295:
              return Os;
            case 36296:
              return Us;
            case 35678:
            case 36198:
            case 36298:
            case 36306:
            case 35682:
              return zs;
            case 35679:
            case 36299:
            case 36307:
              return Fs;
            case 35680:
            case 36300:
            case 36308:
            case 36293:
              return Bs;
            case 36289:
            case 36303:
            case 36311:
            case 36292:
              return ks;
          }
        })(t.type));
    }
  }
  class oa {
    constructor(e, t, n) {
      (this.id = e),
        (this.addr = n),
        (this.cache = []),
        (this.size = t.size),
        (this.setValue = (function (e) {
          switch (e) {
            case 5126:
              return Hs;
            case 35664:
              return Gs;
            case 35665:
              return Vs;
            case 35666:
              return Ws;
            case 35674:
              return js;
            case 35675:
              return Xs;
            case 35676:
              return qs;
            case 5124:
            case 35670:
              return Ys;
            case 35667:
            case 35671:
              return Ks;
            case 35668:
            case 35672:
              return Zs;
            case 35669:
            case 35673:
              return Js;
            case 5125:
              return Qs;
            case 36294:
              return $s;
            case 36295:
              return ea;
            case 36296:
              return ta;
            case 35678:
            case 36198:
            case 36298:
            case 36306:
            case 35682:
              return na;
            case 35679:
            case 36299:
            case 36307:
              return ia;
            case 35680:
            case 36300:
            case 36308:
            case 36293:
              return ra;
            case 36289:
            case 36303:
            case 36311:
            case 36292:
              return sa;
          }
        })(t.type));
    }
  }
  class la {
    constructor(e) {
      (this.id = e), (this.seq = []), (this.map = {});
    }
    setValue(e, t, n) {
      const i = this.seq;
      for (let r = 0, s = i.length; r !== s; ++r) {
        const s = i[r];
        s.setValue(e, t[s.id], n);
      }
    }
  }
  const ca = /(\w+)(\])?(\[|\.)?/g;
  function ha(e, t) {
    e.seq.push(t), (e.map[t.id] = t);
  }
  function ua(e, t, n) {
    const i = e.name,
      r = i.length;
    for (ca.lastIndex = 0; ; ) {
      const s = ca.exec(i),
        a = ca.lastIndex;
      let o = s[1];
      const l = "]" === s[2],
        c = s[3];
      if ((l && (o |= 0), void 0 === c || ("[" === c && a + 2 === r))) {
        ha(n, void 0 === c ? new aa(o, e, t) : new oa(o, e, t));
        break;
      }
      {
        let e = n.map[o];
        void 0 === e && ((e = new la(o)), ha(n, e)), (n = e);
      }
    }
  }
  class da {
    constructor(e, t) {
      (this.seq = []), (this.map = {});
      const n = e.getProgramParameter(t, 35718);
      for (let i = 0; i < n; ++i) {
        const n = e.getActiveUniform(t, i);
        ua(n, e.getUniformLocation(t, n.name), this);
      }
    }
    setValue(e, t, n, i) {
      const r = this.map[t];
      void 0 !== r && r.setValue(e, n, i);
    }
    setOptional(e, t, n) {
      const i = t[n];
      void 0 !== i && this.setValue(e, n, i);
    }
    static upload(e, t, n, i) {
      for (let r = 0, s = t.length; r !== s; ++r) {
        const s = t[r],
          a = n[s.id];
        !1 !== a.needsUpdate && s.setValue(e, a.value, i);
      }
    }
    static seqWithValue(e, t) {
      const n = [];
      for (let i = 0, r = e.length; i !== r; ++i) {
        const r = e[i];
        r.id in t && n.push(r);
      }
      return n;
    }
  }
  function pa(e, t, n) {
    const i = e.createShader(t);
    return e.shaderSource(i, n), e.compileShader(i), i;
  }
  let fa = 0;
  function ma(e, t, n) {
    const i = e.getShaderParameter(t, 35713),
      r = e.getShaderInfoLog(t).trim();
    if (i && "" === r) return "";
    const s = /ERROR: 0:(\d+)/.exec(r);
    if (s) {
      const i = parseInt(s[1]);
      return (
        n.toUpperCase() +
        "\n\n" +
        r +
        "\n\n" +
        (function (e, t) {
          const n = e.split("\n"),
            i = [],
            r = Math.max(t - 6, 0),
            s = Math.min(t + 6, n.length);
          for (let e = r; e < s; e++) {
            const r = e + 1;
            i.push(`${r === t ? ">" : " "} ${r}: ${n[e]}`);
          }
          return i.join("\n");
        })(e.getShaderSource(t), i)
      );
    }
    return r;
  }
  function ga(e, t) {
    const n = (function (e) {
      switch (e) {
        case pt:
          return ["Linear", "( value )"];
        case ft:
          return ["sRGB", "( value )"];
        default:
          return (
            console.warn("THREE.WebGLProgram: Unsupported encoding:", e),
            ["Linear", "( value )"]
          );
      }
    })(t);
    return (
      "vec4 " + e + "( vec4 value ) { return LinearTo" + n[0] + n[1] + "; }"
    );
  }
  function _a(e, t) {
    let n;
    switch (t) {
      case W:
        n = "Linear";
        break;
      case j:
        n = "Reinhard";
        break;
      case X:
        n = "OptimizedCineon";
        break;
      case q:
        n = "ACESFilmic";
        break;
      case Y:
        n = "Custom";
        break;
      default:
        console.warn("THREE.WebGLProgram: Unsupported toneMapping:", t),
          (n = "Linear");
    }
    return (
      "vec3 " + e + "( vec3 color ) { return " + n + "ToneMapping( color ); }"
    );
  }
  function va(e) {
    return "" !== e;
  }
  function xa(e, t) {
    const n =
      t.numSpotLightShadows +
      t.numSpotLightMaps -
      t.numSpotLightShadowsWithMaps;
    return e
      .replace(/NUM_DIR_LIGHTS/g, t.numDirLights)
      .replace(/NUM_SPOT_LIGHTS/g, t.numSpotLights)
      .replace(/NUM_SPOT_LIGHT_MAPS/g, t.numSpotLightMaps)
      .replace(/NUM_SPOT_LIGHT_COORDS/g, n)
      .replace(/NUM_RECT_AREA_LIGHTS/g, t.numRectAreaLights)
      .replace(/NUM_POINT_LIGHTS/g, t.numPointLights)
      .replace(/NUM_HEMI_LIGHTS/g, t.numHemiLights)
      .replace(/NUM_DIR_LIGHT_SHADOWS/g, t.numDirLightShadows)
      .replace(
        /NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,
        t.numSpotLightShadowsWithMaps
      )
      .replace(/NUM_SPOT_LIGHT_SHADOWS/g, t.numSpotLightShadows)
      .replace(/NUM_POINT_LIGHT_SHADOWS/g, t.numPointLightShadows);
  }
  function ya(e, t) {
    return e
      .replace(/NUM_CLIPPING_PLANES/g, t.numClippingPlanes)
      .replace(
        /UNION_CLIPPING_PLANES/g,
        t.numClippingPlanes - t.numClipIntersection
      );
  }
  const Ma = /^[ \t]*#include +<([\w\d./]+)>/gm;
  function ba(e) {
    return e.replace(Ma, Sa);
  }
  function Sa(e, t) {
    const n = Rr[t];
    if (void 0 === n) throw new Error("Can not resolve #include <" + t + ">");
    return ba(n);
  }
  const wa =
    /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
  function Ta(e) {
    return e.replace(wa, Ea);
  }
  function Ea(e, t, n, i) {
    let r = "";
    for (let e = parseInt(t); e < parseInt(n); e++)
      r += i
        .replace(/\[\s*i\s*\]/g, "[ " + e + " ]")
        .replace(/UNROLLED_LOOP_INDEX/g, e);
    return r;
  }
  function Aa(e) {
    let t =
      "precision " +
      e.precision +
      " float;\nprecision " +
      e.precision +
      " int;";
    return (
      "highp" === e.precision
        ? (t += "\n#define HIGH_PRECISION")
        : "mediump" === e.precision
        ? (t += "\n#define MEDIUM_PRECISION")
        : "lowp" === e.precision && (t += "\n#define LOW_PRECISION"),
      t
    );
  }
  function La(e, t, n, i) {
    const o = e.getContext(),
      l = n.defines;
    let c = n.vertexShader,
      h = n.fragmentShader;
    const u = (function (e) {
        let t = "SHADOWMAP_TYPE_BASIC";
        return (
          e.shadowMapType === r
            ? (t = "SHADOWMAP_TYPE_PCF")
            : e.shadowMapType === s
            ? (t = "SHADOWMAP_TYPE_PCF_SOFT")
            : e.shadowMapType === a && (t = "SHADOWMAP_TYPE_VSM"),
          t
        );
      })(n),
      d = (function (e) {
        let t = "ENVMAP_TYPE_CUBE";
        if (e.envMap)
          switch (e.envMapMode) {
            case K:
            case Z:
              t = "ENVMAP_TYPE_CUBE";
              break;
            case $:
              t = "ENVMAP_TYPE_CUBE_UV";
          }
        return t;
      })(n),
      p = (function (e) {
        let t = "ENVMAP_MODE_REFLECTION";
        return (
          e.envMap && e.envMapMode === Z && (t = "ENVMAP_MODE_REFRACTION"), t
        );
      })(n),
      f = (function (e) {
        let t = "ENVMAP_BLENDING_NONE";
        if (e.envMap)
          switch (e.combine) {
            case k:
              t = "ENVMAP_BLENDING_MULTIPLY";
              break;
            case H:
              t = "ENVMAP_BLENDING_MIX";
              break;
            case G:
              t = "ENVMAP_BLENDING_ADD";
          }
        return t;
      })(n),
      m = (function (e) {
        const t = e.envMapCubeUVHeight;
        if (null === t) return null;
        const n = Math.log2(t) - 2,
          i = 1 / t;
        return {
          texelWidth: 1 / (3 * Math.max(Math.pow(2, n), 112)),
          texelHeight: i,
          maxMip: n,
        };
      })(n),
      g = n.isWebGL2
        ? ""
        : (function (e) {
            return [
              e.extensionDerivatives ||
              e.envMapCubeUVHeight ||
              e.bumpMap ||
              e.tangentSpaceNormalMap ||
              e.clearcoatNormalMap ||
              e.flatShading ||
              "physical" === e.shaderID
                ? "#extension GL_OES_standard_derivatives : enable"
                : "",
              (e.extensionFragDepth || e.logarithmicDepthBuffer) &&
              e.rendererExtensionFragDepth
                ? "#extension GL_EXT_frag_depth : enable"
                : "",
              e.extensionDrawBuffers && e.rendererExtensionDrawBuffers
                ? "#extension GL_EXT_draw_buffers : require"
                : "",
              (e.extensionShaderTextureLOD || e.envMap || e.transmission) &&
              e.rendererExtensionShaderTextureLod
                ? "#extension GL_EXT_shader_texture_lod : enable"
                : "",
            ]
              .filter(va)
              .join("\n");
          })(n),
      _ = (function (e) {
        const t = [];
        for (const n in e) {
          const i = e[n];
          !1 !== i && t.push("#define " + n + " " + i);
        }
        return t.join("\n");
      })(l),
      v = o.createProgram();
    let x,
      y,
      M = n.glslVersion ? "#version " + n.glslVersion + "\n" : "";
    n.isRawShaderMaterial
      ? ((x = [_].filter(va).join("\n")),
        x.length > 0 && (x += "\n"),
        (y = [g, _].filter(va).join("\n")),
        y.length > 0 && (y += "\n"))
      : ((x = [
          Aa(n),
          "#define SHADER_NAME " + n.shaderName,
          _,
          n.instancing ? "#define USE_INSTANCING" : "",
          n.instancingColor ? "#define USE_INSTANCING_COLOR" : "",
          n.supportsVertexTextures ? "#define VERTEX_TEXTURES" : "",
          n.useFog && n.fog ? "#define USE_FOG" : "",
          n.useFog && n.fogExp2 ? "#define FOG_EXP2" : "",
          n.map ? "#define USE_MAP" : "",
          n.envMap ? "#define USE_ENVMAP" : "",
          n.envMap ? "#define " + p : "",
          n.lightMap ? "#define USE_LIGHTMAP" : "",
          n.aoMap ? "#define USE_AOMAP" : "",
          n.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
          n.bumpMap ? "#define USE_BUMPMAP" : "",
          n.normalMap ? "#define USE_NORMALMAP" : "",
          n.normalMap && n.objectSpaceNormalMap
            ? "#define OBJECTSPACE_NORMALMAP"
            : "",
          n.normalMap && n.tangentSpaceNormalMap
            ? "#define TANGENTSPACE_NORMALMAP"
            : "",
          n.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
          n.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
          n.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
          n.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
          n.iridescenceThicknessMap
            ? "#define USE_IRIDESCENCE_THICKNESSMAP"
            : "",
          n.displacementMap && n.supportsVertexTextures
            ? "#define USE_DISPLACEMENTMAP"
            : "",
          n.specularMap ? "#define USE_SPECULARMAP" : "",
          n.specularIntensityMap ? "#define USE_SPECULARINTENSITYMAP" : "",
          n.specularColorMap ? "#define USE_SPECULARCOLORMAP" : "",
          n.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
          n.metalnessMap ? "#define USE_METALNESSMAP" : "",
          n.alphaMap ? "#define USE_ALPHAMAP" : "",
          n.transmission ? "#define USE_TRANSMISSION" : "",
          n.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
          n.thicknessMap ? "#define USE_THICKNESSMAP" : "",
          n.sheenColorMap ? "#define USE_SHEENCOLORMAP" : "",
          n.sheenRoughnessMap ? "#define USE_SHEENROUGHNESSMAP" : "",
          n.vertexTangents ? "#define USE_TANGENT" : "",
          n.vertexColors ? "#define USE_COLOR" : "",
          n.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
          n.vertexUvs ? "#define USE_UV" : "",
          n.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "",
          n.flatShading ? "#define FLAT_SHADED" : "",
          n.skinning ? "#define USE_SKINNING" : "",
          n.morphTargets ? "#define USE_MORPHTARGETS" : "",
          n.morphNormals && !1 === n.flatShading
            ? "#define USE_MORPHNORMALS"
            : "",
          n.morphColors && n.isWebGL2 ? "#define USE_MORPHCOLORS" : "",
          n.morphTargetsCount > 0 && n.isWebGL2
            ? "#define MORPHTARGETS_TEXTURE"
            : "",
          n.morphTargetsCount > 0 && n.isWebGL2
            ? "#define MORPHTARGETS_TEXTURE_STRIDE " + n.morphTextureStride
            : "",
          n.morphTargetsCount > 0 && n.isWebGL2
            ? "#define MORPHTARGETS_COUNT " + n.morphTargetsCount
            : "",
          n.doubleSided ? "#define DOUBLE_SIDED" : "",
          n.flipSided ? "#define FLIP_SIDED" : "",
          n.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
          n.shadowMapEnabled ? "#define " + u : "",
          n.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "",
          n.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
          n.logarithmicDepthBuffer && n.rendererExtensionFragDepth
            ? "#define USE_LOGDEPTHBUF_EXT"
            : "",
          "uniform mat4 modelMatrix;",
          "uniform mat4 modelViewMatrix;",
          "uniform mat4 projectionMatrix;",
          "uniform mat4 viewMatrix;",
          "uniform mat3 normalMatrix;",
          "uniform vec3 cameraPosition;",
          "uniform bool isOrthographic;",
          "#ifdef USE_INSTANCING",
          "\tattribute mat4 instanceMatrix;",
          "#endif",
          "#ifdef USE_INSTANCING_COLOR",
          "\tattribute vec3 instanceColor;",
          "#endif",
          "attribute vec3 position;",
          "attribute vec3 normal;",
          "attribute vec2 uv;",
          "#ifdef USE_TANGENT",
          "\tattribute vec4 tangent;",
          "#endif",
          "#if defined( USE_COLOR_ALPHA )",
          "\tattribute vec4 color;",
          "#elif defined( USE_COLOR )",
          "\tattribute vec3 color;",
          "#endif",
          "#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )",
          "\tattribute vec3 morphTarget0;",
          "\tattribute vec3 morphTarget1;",
          "\tattribute vec3 morphTarget2;",
          "\tattribute vec3 morphTarget3;",
          "\t#ifdef USE_MORPHNORMALS",
          "\t\tattribute vec3 morphNormal0;",
          "\t\tattribute vec3 morphNormal1;",
          "\t\tattribute vec3 morphNormal2;",
          "\t\tattribute vec3 morphNormal3;",
          "\t#else",
          "\t\tattribute vec3 morphTarget4;",
          "\t\tattribute vec3 morphTarget5;",
          "\t\tattribute vec3 morphTarget6;",
          "\t\tattribute vec3 morphTarget7;",
          "\t#endif",
          "#endif",
          "#ifdef USE_SKINNING",
          "\tattribute vec4 skinIndex;",
          "\tattribute vec4 skinWeight;",
          "#endif",
          "\n",
        ]
          .filter(va)
          .join("\n")),
        (y = [
          g,
          Aa(n),
          "#define SHADER_NAME " + n.shaderName,
          _,
          n.useFog && n.fog ? "#define USE_FOG" : "",
          n.useFog && n.fogExp2 ? "#define FOG_EXP2" : "",
          n.map ? "#define USE_MAP" : "",
          n.matcap ? "#define USE_MATCAP" : "",
          n.envMap ? "#define USE_ENVMAP" : "",
          n.envMap ? "#define " + d : "",
          n.envMap ? "#define " + p : "",
          n.envMap ? "#define " + f : "",
          m ? "#define CUBEUV_TEXEL_WIDTH " + m.texelWidth : "",
          m ? "#define CUBEUV_TEXEL_HEIGHT " + m.texelHeight : "",
          m ? "#define CUBEUV_MAX_MIP " + m.maxMip + ".0" : "",
          n.lightMap ? "#define USE_LIGHTMAP" : "",
          n.aoMap ? "#define USE_AOMAP" : "",
          n.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
          n.bumpMap ? "#define USE_BUMPMAP" : "",
          n.normalMap ? "#define USE_NORMALMAP" : "",
          n.normalMap && n.objectSpaceNormalMap
            ? "#define OBJECTSPACE_NORMALMAP"
            : "",
          n.normalMap && n.tangentSpaceNormalMap
            ? "#define TANGENTSPACE_NORMALMAP"
            : "",
          n.clearcoat ? "#define USE_CLEARCOAT" : "",
          n.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
          n.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
          n.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
          n.iridescence ? "#define USE_IRIDESCENCE" : "",
          n.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
          n.iridescenceThicknessMap
            ? "#define USE_IRIDESCENCE_THICKNESSMAP"
            : "",
          n.specularMap ? "#define USE_SPECULARMAP" : "",
          n.specularIntensityMap ? "#define USE_SPECULARINTENSITYMAP" : "",
          n.specularColorMap ? "#define USE_SPECULARCOLORMAP" : "",
          n.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
          n.metalnessMap ? "#define USE_METALNESSMAP" : "",
          n.alphaMap ? "#define USE_ALPHAMAP" : "",
          n.alphaTest ? "#define USE_ALPHATEST" : "",
          n.sheen ? "#define USE_SHEEN" : "",
          n.sheenColorMap ? "#define USE_SHEENCOLORMAP" : "",
          n.sheenRoughnessMap ? "#define USE_SHEENROUGHNESSMAP" : "",
          n.transmission ? "#define USE_TRANSMISSION" : "",
          n.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
          n.thicknessMap ? "#define USE_THICKNESSMAP" : "",
          n.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "",
          n.vertexTangents ? "#define USE_TANGENT" : "",
          n.vertexColors || n.instancingColor ? "#define USE_COLOR" : "",
          n.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
          n.vertexUvs ? "#define USE_UV" : "",
          n.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "",
          n.gradientMap ? "#define USE_GRADIENTMAP" : "",
          n.flatShading ? "#define FLAT_SHADED" : "",
          n.doubleSided ? "#define DOUBLE_SIDED" : "",
          n.flipSided ? "#define FLIP_SIDED" : "",
          n.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
          n.shadowMapEnabled ? "#define " + u : "",
          n.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "",
          n.useLegacyLights ? "#define LEGACY_LIGHTS" : "",
          n.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
          n.logarithmicDepthBuffer && n.rendererExtensionFragDepth
            ? "#define USE_LOGDEPTHBUF_EXT"
            : "",
          "uniform mat4 viewMatrix;",
          "uniform vec3 cameraPosition;",
          "uniform bool isOrthographic;",
          n.toneMapping !== V ? "#define TONE_MAPPING" : "",
          n.toneMapping !== V ? Rr.tonemapping_pars_fragment : "",
          n.toneMapping !== V ? _a("toneMapping", n.toneMapping) : "",
          n.dithering ? "#define DITHERING" : "",
          n.opaque ? "#define OPAQUE" : "",
          Rr.encodings_pars_fragment,
          ga("linearToOutputTexel", n.outputEncoding),
          n.useDepthPacking ? "#define DEPTH_PACKING " + n.depthPacking : "",
          "\n",
        ]
          .filter(va)
          .join("\n"))),
      (c = ba(c)),
      (c = xa(c, n)),
      (c = ya(c, n)),
      (h = ba(h)),
      (h = xa(h, n)),
      (h = ya(h, n)),
      (c = Ta(c)),
      (h = Ta(h)),
      n.isWebGL2 &&
        !0 !== n.isRawShaderMaterial &&
        ((M = "#version 300 es\n"),
        (x =
          [
            "precision mediump sampler2DArray;",
            "#define attribute in",
            "#define varying out",
            "#define texture2D texture",
          ].join("\n") +
          "\n" +
          x),
        (y =
          [
            "#define varying in",
            n.glslVersion === St
              ? ""
              : "layout(location = 0) out highp vec4 pc_fragColor;",
            n.glslVersion === St ? "" : "#define gl_FragColor pc_fragColor",
            "#define gl_FragDepthEXT gl_FragDepth",
            "#define texture2D texture",
            "#define textureCube texture",
            "#define texture2DProj textureProj",
            "#define texture2DLodEXT textureLod",
            "#define texture2DProjLodEXT textureProjLod",
            "#define textureCubeLodEXT textureLod",
            "#define texture2DGradEXT textureGrad",
            "#define texture2DProjGradEXT textureProjGrad",
            "#define textureCubeGradEXT textureGrad",
          ].join("\n") +
          "\n" +
          y));
    const b = M + y + h,
      S = pa(o, 35633, M + x + c),
      w = pa(o, 35632, b);
    if (
      (o.attachShader(v, S),
      o.attachShader(v, w),
      void 0 !== n.index0AttributeName
        ? o.bindAttribLocation(v, 0, n.index0AttributeName)
        : !0 === n.morphTargets && o.bindAttribLocation(v, 0, "position"),
      o.linkProgram(v),
      e.debug.checkShaderErrors)
    ) {
      const e = o.getProgramInfoLog(v).trim(),
        t = o.getShaderInfoLog(S).trim(),
        n = o.getShaderInfoLog(w).trim();
      let i = !0,
        r = !0;
      if (!1 === o.getProgramParameter(v, 35714)) {
        i = !1;
        const t = ma(o, S, "vertex"),
          n = ma(o, w, "fragment");
        console.error(
          "THREE.WebGLProgram: Shader Error " +
            o.getError() +
            " - VALIDATE_STATUS " +
            o.getProgramParameter(v, 35715) +
            "\n\nProgram Info Log: " +
            e +
            "\n" +
            t +
            "\n" +
            n
        );
      } else
        "" !== e
          ? console.warn("THREE.WebGLProgram: Program Info Log:", e)
          : ("" !== t && "" !== n) || (r = !1);
      r &&
        (this.diagnostics = {
          runnable: i,
          programLog: e,
          vertexShader: { log: t, prefix: x },
          fragmentShader: { log: n, prefix: y },
        });
    }
    let T, E;
    return (
      o.deleteShader(S),
      o.deleteShader(w),
      (this.getUniforms = function () {
        return void 0 === T && (T = new da(o, v)), T;
      }),
      (this.getAttributes = function () {
        return (
          void 0 === E &&
            (E = (function (e, t) {
              const n = {},
                i = e.getProgramParameter(t, 35721);
              for (let r = 0; r < i; r++) {
                const i = e.getActiveAttrib(t, r),
                  s = i.name;
                let a = 1;
                35674 === i.type && (a = 2),
                  35675 === i.type && (a = 3),
                  35676 === i.type && (a = 4),
                  (n[s] = {
                    type: i.type,
                    location: e.getAttribLocation(t, s),
                    locationSize: a,
                  });
              }
              return n;
            })(o, v)),
          E
        );
      }),
      (this.destroy = function () {
        i.releaseStatesOfProgram(this),
          o.deleteProgram(v),
          (this.program = void 0);
      }),
      (this.name = n.shaderName),
      (this.id = fa++),
      (this.cacheKey = t),
      (this.usedTimes = 1),
      (this.program = v),
      (this.vertexShader = S),
      (this.fragmentShader = w),
      this
    );
  }
  let Ca = 0;
  class Ra {
    constructor() {
      (this.shaderCache = new Map()), (this.materialCache = new Map());
    }
    update(e) {
      const t = e.vertexShader,
        n = e.fragmentShader,
        i = this._getShaderStage(t),
        r = this._getShaderStage(n),
        s = this._getShaderCacheForMaterial(e);
      return (
        !1 === s.has(i) && (s.add(i), i.usedTimes++),
        !1 === s.has(r) && (s.add(r), r.usedTimes++),
        this
      );
    }
    remove(e) {
      const t = this.materialCache.get(e);
      for (const e of t)
        e.usedTimes--, 0 === e.usedTimes && this.shaderCache.delete(e.code);
      return this.materialCache.delete(e), this;
    }
    getVertexShaderID(e) {
      return this._getShaderStage(e.vertexShader).id;
    }
    getFragmentShaderID(e) {
      return this._getShaderStage(e.fragmentShader).id;
    }
    dispose() {
      this.shaderCache.clear(), this.materialCache.clear();
    }
    _getShaderCacheForMaterial(e) {
      const t = this.materialCache;
      let n = t.get(e);
      return void 0 === n && ((n = new Set()), t.set(e, n)), n;
    }
    _getShaderStage(e) {
      const t = this.shaderCache;
      let n = t.get(e);
      return void 0 === n && ((n = new Pa(e)), t.set(e, n)), n;
    }
  }
  class Pa {
    constructor(e) {
      (this.id = Ca++), (this.code = e), (this.usedTimes = 0);
    }
  }
  function Da(e, t, n, i, r, s, a) {
    const o = new Jn(),
      h = new Ra(),
      d = [],
      p = r.isWebGL2,
      f = r.logarithmicDepthBuffer,
      m = r.vertexTextures;
    let g = r.precision;
    const _ = {
      MeshDepthMaterial: "depth",
      MeshDistanceMaterial: "distanceRGBA",
      MeshNormalMaterial: "normal",
      MeshBasicMaterial: "basic",
      MeshLambertMaterial: "lambert",
      MeshPhongMaterial: "phong",
      MeshToonMaterial: "toon",
      MeshStandardMaterial: "physical",
      MeshPhysicalMaterial: "physical",
      MeshMatcapMaterial: "matcap",
      LineBasicMaterial: "basic",
      LineDashedMaterial: "dashed",
      PointsMaterial: "points",
      ShadowMaterial: "shadow",
      SpriteMaterial: "sprite",
    };
    return {
      getParameters: function (s, o, d, v, x) {
        const y = v.fog,
          M = x.geometry,
          b = s.isMeshStandardMaterial ? v.environment : null,
          S = (s.isMeshStandardMaterial ? n : t).get(s.envMap || b),
          w = S && S.mapping === $ ? S.image.height : null,
          T = _[s.type];
        null !== s.precision &&
          ((g = r.getMaxPrecision(s.precision)),
          g !== s.precision &&
            console.warn(
              "THREE.WebGLProgram.getParameters:",
              s.precision,
              "not supported, using",
              g,
              "instead."
            ));
        const E =
            M.morphAttributes.position ||
            M.morphAttributes.normal ||
            M.morphAttributes.color,
          A = void 0 !== E ? E.length : 0;
        let L,
          C,
          R,
          P,
          D = 0;
        if (
          (void 0 !== M.morphAttributes.position && (D = 1),
          void 0 !== M.morphAttributes.normal && (D = 2),
          void 0 !== M.morphAttributes.color && (D = 3),
          T)
        ) {
          const e = Dr[T];
          (L = e.vertexShader), (C = e.fragmentShader);
        } else
          (L = s.vertexShader),
            (C = s.fragmentShader),
            h.update(s),
            (R = h.getVertexShaderID(s)),
            (P = h.getFragmentShaderID(s));
        const I = e.getRenderTarget(),
          N = s.alphaTest > 0,
          O = s.clearcoat > 0,
          U = s.iridescence > 0;
        return {
          isWebGL2: p,
          shaderID: T,
          shaderName: s.type,
          vertexShader: L,
          fragmentShader: C,
          defines: s.defines,
          customVertexShaderID: R,
          customFragmentShaderID: P,
          isRawShaderMaterial: !0 === s.isRawShaderMaterial,
          glslVersion: s.glslVersion,
          precision: g,
          instancing: !0 === x.isInstancedMesh,
          instancingColor: !0 === x.isInstancedMesh && null !== x.instanceColor,
          supportsVertexTextures: m,
          outputEncoding:
            null === I
              ? e.outputEncoding
              : !0 === I.isXRRenderTarget
              ? I.texture.encoding
              : pt,
          map: !!s.map,
          matcap: !!s.matcap,
          envMap: !!S,
          envMapMode: S && S.mapping,
          envMapCubeUVHeight: w,
          lightMap: !!s.lightMap,
          aoMap: !!s.aoMap,
          emissiveMap: !!s.emissiveMap,
          bumpMap: !!s.bumpMap,
          normalMap: !!s.normalMap,
          objectSpaceNormalMap: s.normalMapType === _t,
          tangentSpaceNormalMap: s.normalMapType === gt,
          decodeVideoTexture:
            !!s.map && !0 === s.map.isVideoTexture && s.map.encoding === ft,
          clearcoat: O,
          clearcoatMap: O && !!s.clearcoatMap,
          clearcoatRoughnessMap: O && !!s.clearcoatRoughnessMap,
          clearcoatNormalMap: O && !!s.clearcoatNormalMap,
          iridescence: U,
          iridescenceMap: U && !!s.iridescenceMap,
          iridescenceThicknessMap: U && !!s.iridescenceThicknessMap,
          displacementMap: !!s.displacementMap,
          roughnessMap: !!s.roughnessMap,
          metalnessMap: !!s.metalnessMap,
          specularMap: !!s.specularMap,
          specularIntensityMap: !!s.specularIntensityMap,
          specularColorMap: !!s.specularColorMap,
          opaque: !1 === s.transparent && s.blending === u,
          alphaMap: !!s.alphaMap,
          alphaTest: N,
          gradientMap: !!s.gradientMap,
          sheen: s.sheen > 0,
          sheenColorMap: !!s.sheenColorMap,
          sheenRoughnessMap: !!s.sheenRoughnessMap,
          transmission: s.transmission > 0,
          transmissionMap: !!s.transmissionMap,
          thicknessMap: !!s.thicknessMap,
          combine: s.combine,
          vertexTangents: !!s.normalMap && !!M.attributes.tangent,
          vertexColors: s.vertexColors,
          vertexAlphas:
            !0 === s.vertexColors &&
            !!M.attributes.color &&
            4 === M.attributes.color.itemSize,
          vertexUvs: !!(
            s.map ||
            s.bumpMap ||
            s.normalMap ||
            s.specularMap ||
            s.alphaMap ||
            s.emissiveMap ||
            s.roughnessMap ||
            s.metalnessMap ||
            s.clearcoatMap ||
            s.clearcoatRoughnessMap ||
            s.clearcoatNormalMap ||
            s.iridescenceMap ||
            s.iridescenceThicknessMap ||
            s.displacementMap ||
            s.transmissionMap ||
            s.thicknessMap ||
            s.specularIntensityMap ||
            s.specularColorMap ||
            s.sheenColorMap ||
            s.sheenRoughnessMap
          ),
          uvsVertexOnly: !(
            s.map ||
            s.bumpMap ||
            s.normalMap ||
            s.specularMap ||
            s.alphaMap ||
            s.emissiveMap ||
            s.roughnessMap ||
            s.metalnessMap ||
            s.clearcoatNormalMap ||
            s.iridescenceMap ||
            s.iridescenceThicknessMap ||
            s.transmission > 0 ||
            s.transmissionMap ||
            s.thicknessMap ||
            s.specularIntensityMap ||
            s.specularColorMap ||
            s.sheen > 0 ||
            s.sheenColorMap ||
            s.sheenRoughnessMap ||
            !s.displacementMap
          ),
          fog: !!y,
          useFog: !0 === s.fog,
          fogExp2: y && y.isFogExp2,
          flatShading: !!s.flatShading,
          sizeAttenuation: s.sizeAttenuation,
          logarithmicDepthBuffer: f,
          skinning: !0 === x.isSkinnedMesh,
          morphTargets: void 0 !== M.morphAttributes.position,
          morphNormals: void 0 !== M.morphAttributes.normal,
          morphColors: void 0 !== M.morphAttributes.color,
          morphTargetsCount: A,
          morphTextureStride: D,
          numDirLights: o.directional.length,
          numPointLights: o.point.length,
          numSpotLights: o.spot.length,
          numSpotLightMaps: o.spotLightMap.length,
          numRectAreaLights: o.rectArea.length,
          numHemiLights: o.hemi.length,
          numDirLightShadows: o.directionalShadowMap.length,
          numPointLightShadows: o.pointShadowMap.length,
          numSpotLightShadows: o.spotShadowMap.length,
          numSpotLightShadowsWithMaps: o.numSpotLightShadowsWithMaps,
          numClippingPlanes: a.numPlanes,
          numClipIntersection: a.numIntersection,
          dithering: s.dithering,
          shadowMapEnabled: e.shadowMap.enabled && d.length > 0,
          shadowMapType: e.shadowMap.type,
          toneMapping: s.toneMapped ? e.toneMapping : V,
          useLegacyLights: e.useLegacyLights,
          premultipliedAlpha: s.premultipliedAlpha,
          doubleSided: s.side === c,
          flipSided: s.side === l,
          useDepthPacking: !!s.depthPacking,
          depthPacking: s.depthPacking || 0,
          index0AttributeName: s.index0AttributeName,
          extensionDerivatives: s.extensions && s.extensions.derivatives,
          extensionFragDepth: s.extensions && s.extensions.fragDepth,
          extensionDrawBuffers: s.extensions && s.extensions.drawBuffers,
          extensionShaderTextureLOD:
            s.extensions && s.extensions.shaderTextureLOD,
          rendererExtensionFragDepth: p || i.has("EXT_frag_depth"),
          rendererExtensionDrawBuffers: p || i.has("WEBGL_draw_buffers"),
          rendererExtensionShaderTextureLod:
            p || i.has("EXT_shader_texture_lod"),
          customProgramCacheKey: s.customProgramCacheKey(),
        };
      },
      getProgramCacheKey: function (t) {
        const n = [];
        if (
          (t.shaderID
            ? n.push(t.shaderID)
            : (n.push(t.customVertexShaderID),
              n.push(t.customFragmentShaderID)),
          void 0 !== t.defines)
        )
          for (const e in t.defines) n.push(e), n.push(t.defines[e]);
        return (
          !1 === t.isRawShaderMaterial &&
            ((function (e, t) {
              e.push(t.precision),
                e.push(t.outputEncoding),
                e.push(t.envMapMode),
                e.push(t.envMapCubeUVHeight),
                e.push(t.combine),
                e.push(t.vertexUvs),
                e.push(t.fogExp2),
                e.push(t.sizeAttenuation),
                e.push(t.morphTargetsCount),
                e.push(t.morphAttributeCount),
                e.push(t.numDirLights),
                e.push(t.numPointLights),
                e.push(t.numSpotLights),
                e.push(t.numSpotLightMaps),
                e.push(t.numHemiLights),
                e.push(t.numRectAreaLights),
                e.push(t.numDirLightShadows),
                e.push(t.numPointLightShadows),
                e.push(t.numSpotLightShadows),
                e.push(t.numSpotLightShadowsWithMaps),
                e.push(t.shadowMapType),
                e.push(t.toneMapping),
                e.push(t.numClippingPlanes),
                e.push(t.numClipIntersection),
                e.push(t.depthPacking);
            })(n, t),
            (function (e, t) {
              o.disableAll(),
                t.isWebGL2 && o.enable(0),
                t.supportsVertexTextures && o.enable(1),
                t.instancing && o.enable(2),
                t.instancingColor && o.enable(3),
                t.map && o.enable(4),
                t.matcap && o.enable(5),
                t.envMap && o.enable(6),
                t.lightMap && o.enable(7),
                t.aoMap && o.enable(8),
                t.emissiveMap && o.enable(9),
                t.bumpMap && o.enable(10),
                t.normalMap && o.enable(11),
                t.objectSpaceNormalMap && o.enable(12),
                t.tangentSpaceNormalMap && o.enable(13),
                t.clearcoat && o.enable(14),
                t.clearcoatMap && o.enable(15),
                t.clearcoatRoughnessMap && o.enable(16),
                t.clearcoatNormalMap && o.enable(17),
                t.iridescence && o.enable(18),
                t.iridescenceMap && o.enable(19),
                t.iridescenceThicknessMap && o.enable(20),
                t.displacementMap && o.enable(21),
                t.specularMap && o.enable(22),
                t.roughnessMap && o.enable(23),
                t.metalnessMap && o.enable(24),
                t.gradientMap && o.enable(25),
                t.alphaMap && o.enable(26),
                t.alphaTest && o.enable(27),
                t.vertexColors && o.enable(28),
                t.vertexAlphas && o.enable(29),
                t.vertexUvs && o.enable(30),
                t.vertexTangents && o.enable(31),
                t.uvsVertexOnly && o.enable(32),
                e.push(o.mask),
                o.disableAll(),
                t.fog && o.enable(0),
                t.useFog && o.enable(1),
                t.flatShading && o.enable(2),
                t.logarithmicDepthBuffer && o.enable(3),
                t.skinning && o.enable(4),
                t.morphTargets && o.enable(5),
                t.morphNormals && o.enable(6),
                t.morphColors && o.enable(7),
                t.premultipliedAlpha && o.enable(8),
                t.shadowMapEnabled && o.enable(9),
                t.useLegacyLights && o.enable(10),
                t.doubleSided && o.enable(11),
                t.flipSided && o.enable(12),
                t.useDepthPacking && o.enable(13),
                t.dithering && o.enable(14),
                t.specularIntensityMap && o.enable(15),
                t.specularColorMap && o.enable(16),
                t.transmission && o.enable(17),
                t.transmissionMap && o.enable(18),
                t.thicknessMap && o.enable(19),
                t.sheen && o.enable(20),
                t.sheenColorMap && o.enable(21),
                t.sheenRoughnessMap && o.enable(22),
                t.decodeVideoTexture && o.enable(23),
                t.opaque && o.enable(24),
                e.push(o.mask);
            })(n, t),
            n.push(e.outputEncoding)),
          n.push(t.customProgramCacheKey),
          n.join()
        );
      },
      getUniforms: function (e) {
        const t = _[e.type];
        let n;
        if (t) {
          const e = Dr[t];
          n = dr.clone(e.uniforms);
        } else n = e.uniforms;
        return n;
      },
      acquireProgram: function (t, n) {
        let i;
        for (let e = 0, t = d.length; e < t; e++) {
          const t = d[e];
          if (t.cacheKey === n) {
            (i = t), ++i.usedTimes;
            break;
          }
        }
        return void 0 === i && ((i = new La(e, n, t, s)), d.push(i)), i;
      },
      releaseProgram: function (e) {
        if (0 == --e.usedTimes) {
          const t = d.indexOf(e);
          (d[t] = d[d.length - 1]), d.pop(), e.destroy();
        }
      },
      releaseShaderCache: function (e) {
        h.remove(e);
      },
      programs: d,
      dispose: function () {
        h.dispose();
      },
    };
  }
  function Ia() {
    let e = new WeakMap();
    return {
      get: function (t) {
        let n = e.get(t);
        return void 0 === n && ((n = {}), e.set(t, n)), n;
      },
      remove: function (t) {
        e.delete(t);
      },
      update: function (t, n, i) {
        e.get(t)[n] = i;
      },
      dispose: function () {
        e = new WeakMap();
      },
    };
  }
  function Na(e, t) {
    return e.groupOrder !== t.groupOrder
      ? e.groupOrder - t.groupOrder
      : e.renderOrder !== t.renderOrder
      ? e.renderOrder - t.renderOrder
      : e.material.id !== t.material.id
      ? e.material.id - t.material.id
      : e.z !== t.z
      ? e.z - t.z
      : e.id - t.id;
  }
  function Oa(e, t) {
    return e.groupOrder !== t.groupOrder
      ? e.groupOrder - t.groupOrder
      : e.renderOrder !== t.renderOrder
      ? e.renderOrder - t.renderOrder
      : e.z !== t.z
      ? t.z - e.z
      : e.id - t.id;
  }
  function Ua() {
    const e = [];
    let t = 0;
    const n = [],
      i = [],
      r = [];
    function s(n, i, r, s, a, o) {
      let l = e[t];
      return (
        void 0 === l
          ? ((l = {
              id: n.id,
              object: n,
              geometry: i,
              material: r,
              groupOrder: s,
              renderOrder: n.renderOrder,
              z: a,
              group: o,
            }),
            (e[t] = l))
          : ((l.id = n.id),
            (l.object = n),
            (l.geometry = i),
            (l.material = r),
            (l.groupOrder = s),
            (l.renderOrder = n.renderOrder),
            (l.z = a),
            (l.group = o)),
        t++,
        l
      );
    }
    return {
      opaque: n,
      transmissive: i,
      transparent: r,
      init: function () {
        (t = 0), (n.length = 0), (i.length = 0), (r.length = 0);
      },
      push: function (e, t, a, o, l, c) {
        const h = s(e, t, a, o, l, c);
        a.transmission > 0
          ? i.push(h)
          : !0 === a.transparent
          ? r.push(h)
          : n.push(h);
      },
      unshift: function (e, t, a, o, l, c) {
        const h = s(e, t, a, o, l, c);
        a.transmission > 0
          ? i.unshift(h)
          : !0 === a.transparent
          ? r.unshift(h)
          : n.unshift(h);
      },
      finish: function () {
        for (let n = t, i = e.length; n < i; n++) {
          const t = e[n];
          if (null === t.id) break;
          (t.id = null),
            (t.object = null),
            (t.geometry = null),
            (t.material = null),
            (t.group = null);
        }
      },
      sort: function (e, t) {
        n.length > 1 && n.sort(e || Na),
          i.length > 1 && i.sort(t || Oa),
          r.length > 1 && r.sort(t || Oa);
      },
    };
  }
  function za() {
    let e = new WeakMap();
    return {
      get: function (t, n) {
        const i = e.get(t);
        let r;
        return (
          void 0 === i
            ? ((r = new Ua()), e.set(t, [r]))
            : n >= i.length
            ? ((r = new Ua()), i.push(r))
            : (r = i[n]),
          r
        );
      },
      dispose: function () {
        e = new WeakMap();
      },
    };
  }
  function Fa() {
    const e = {};
    return {
      get: function (t) {
        if (void 0 !== e[t.id]) return e[t.id];
        let n;
        switch (t.type) {
          case "DirectionalLight":
            n = { direction: new jt(), color: new Ci() };
            break;
          case "SpotLight":
            n = {
              position: new jt(),
              direction: new jt(),
              color: new Ci(),
              distance: 0,
              coneCos: 0,
              penumbraCos: 0,
              decay: 0,
            };
            break;
          case "PointLight":
            n = { position: new jt(), color: new Ci(), distance: 0, decay: 0 };
            break;
          case "HemisphereLight":
            n = {
              direction: new jt(),
              skyColor: new Ci(),
              groundColor: new Ci(),
            };
            break;
          case "RectAreaLight":
            n = {
              color: new Ci(),
              position: new jt(),
              halfWidth: new jt(),
              halfHeight: new jt(),
            };
        }
        return (e[t.id] = n), n;
      },
    };
  }
  let Ba = 0;
  function ka(e, t) {
    return (
      (t.castShadow ? 2 : 0) -
      (e.castShadow ? 2 : 0) +
      (t.map ? 1 : 0) -
      (e.map ? 1 : 0)
    );
  }
  function Ha(e, t) {
    const n = new Fa(),
      i = (function () {
        const e = {};
        return {
          get: function (t) {
            if (void 0 !== e[t.id]) return e[t.id];
            let n;
            switch (t.type) {
              case "DirectionalLight":
              case "SpotLight":
                n = {
                  shadowBias: 0,
                  shadowNormalBias: 0,
                  shadowRadius: 1,
                  shadowMapSize: new Bt(),
                };
                break;
              case "PointLight":
                n = {
                  shadowBias: 0,
                  shadowNormalBias: 0,
                  shadowRadius: 1,
                  shadowMapSize: new Bt(),
                  shadowCameraNear: 1,
                  shadowCameraFar: 1e3,
                };
            }
            return (e[t.id] = n), n;
          },
        };
      })(),
      r = {
        version: 0,
        hash: {
          directionalLength: -1,
          pointLength: -1,
          spotLength: -1,
          rectAreaLength: -1,
          hemiLength: -1,
          numDirectionalShadows: -1,
          numPointShadows: -1,
          numSpotShadows: -1,
          numSpotMaps: -1,
        },
        ambient: [0, 0, 0],
        probe: [],
        directional: [],
        directionalShadow: [],
        directionalShadowMap: [],
        directionalShadowMatrix: [],
        spot: [],
        spotLightMap: [],
        spotShadow: [],
        spotShadowMap: [],
        spotLightMatrix: [],
        rectArea: [],
        rectAreaLTC1: null,
        rectAreaLTC2: null,
        point: [],
        pointShadow: [],
        pointShadowMap: [],
        pointShadowMatrix: [],
        hemi: [],
        numSpotLightShadowsWithMaps: 0,
      };
    for (let e = 0; e < 9; e++) r.probe.push(new jt());
    const s = new jt(),
      a = new kn(),
      o = new kn();
    return {
      setup: function (s, a) {
        let o = 0,
          l = 0,
          c = 0;
        for (let e = 0; e < 9; e++) r.probe[e].set(0, 0, 0);
        let h = 0,
          u = 0,
          d = 0,
          p = 0,
          f = 0,
          m = 0,
          g = 0,
          _ = 0,
          v = 0,
          x = 0;
        s.sort(ka);
        const y = !0 === a ? Math.PI : 1;
        for (let e = 0, t = s.length; e < t; e++) {
          const t = s[e],
            a = t.color,
            M = t.intensity,
            b = t.distance,
            S = t.shadow && t.shadow.map ? t.shadow.map.texture : null;
          if (t.isAmbientLight)
            (o += a.r * M * y), (l += a.g * M * y), (c += a.b * M * y);
          else if (t.isLightProbe)
            for (let e = 0; e < 9; e++)
              r.probe[e].addScaledVector(t.sh.coefficients[e], M);
          else if (t.isDirectionalLight) {
            const e = n.get(t);
            if (
              (e.color.copy(t.color).multiplyScalar(t.intensity * y),
              t.castShadow)
            ) {
              const e = t.shadow,
                n = i.get(t);
              (n.shadowBias = e.bias),
                (n.shadowNormalBias = e.normalBias),
                (n.shadowRadius = e.radius),
                (n.shadowMapSize = e.mapSize),
                (r.directionalShadow[h] = n),
                (r.directionalShadowMap[h] = S),
                (r.directionalShadowMatrix[h] = t.shadow.matrix),
                m++;
            }
            (r.directional[h] = e), h++;
          } else if (t.isSpotLight) {
            const e = n.get(t);
            e.position.setFromMatrixPosition(t.matrixWorld),
              e.color.copy(a).multiplyScalar(M * y),
              (e.distance = b),
              (e.coneCos = Math.cos(t.angle)),
              (e.penumbraCos = Math.cos(t.angle * (1 - t.penumbra))),
              (e.decay = t.decay),
              (r.spot[d] = e);
            const s = t.shadow;
            if (
              (t.map &&
                ((r.spotLightMap[v] = t.map),
                v++,
                s.updateMatrices(t),
                t.castShadow && x++),
              (r.spotLightMatrix[d] = s.matrix),
              t.castShadow)
            ) {
              const e = i.get(t);
              (e.shadowBias = s.bias),
                (e.shadowNormalBias = s.normalBias),
                (e.shadowRadius = s.radius),
                (e.shadowMapSize = s.mapSize),
                (r.spotShadow[d] = e),
                (r.spotShadowMap[d] = S),
                _++;
            }
            d++;
          } else if (t.isRectAreaLight) {
            const e = n.get(t);
            e.color.copy(a).multiplyScalar(M),
              e.halfWidth.set(0.5 * t.width, 0, 0),
              e.halfHeight.set(0, 0.5 * t.height, 0),
              (r.rectArea[p] = e),
              p++;
          } else if (t.isPointLight) {
            const e = n.get(t);
            if (
              (e.color.copy(t.color).multiplyScalar(t.intensity * y),
              (e.distance = t.distance),
              (e.decay = t.decay),
              t.castShadow)
            ) {
              const e = t.shadow,
                n = i.get(t);
              (n.shadowBias = e.bias),
                (n.shadowNormalBias = e.normalBias),
                (n.shadowRadius = e.radius),
                (n.shadowMapSize = e.mapSize),
                (n.shadowCameraNear = e.camera.near),
                (n.shadowCameraFar = e.camera.far),
                (r.pointShadow[u] = n),
                (r.pointShadowMap[u] = S),
                (r.pointShadowMatrix[u] = t.shadow.matrix),
                g++;
            }
            (r.point[u] = e), u++;
          } else if (t.isHemisphereLight) {
            const e = n.get(t);
            e.skyColor.copy(t.color).multiplyScalar(M * y),
              e.groundColor.copy(t.groundColor).multiplyScalar(M * y),
              (r.hemi[f] = e),
              f++;
          }
        }
        p > 0 &&
          (t.isWebGL2 || !0 === e.has("OES_texture_float_linear")
            ? ((r.rectAreaLTC1 = Pr.LTC_FLOAT_1),
              (r.rectAreaLTC2 = Pr.LTC_FLOAT_2))
            : !0 === e.has("OES_texture_half_float_linear")
            ? ((r.rectAreaLTC1 = Pr.LTC_HALF_1),
              (r.rectAreaLTC2 = Pr.LTC_HALF_2))
            : console.error(
                "THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions."
              )),
          (r.ambient[0] = o),
          (r.ambient[1] = l),
          (r.ambient[2] = c);
        const M = r.hash;
        (M.directionalLength === h &&
          M.pointLength === u &&
          M.spotLength === d &&
          M.rectAreaLength === p &&
          M.hemiLength === f &&
          M.numDirectionalShadows === m &&
          M.numPointShadows === g &&
          M.numSpotShadows === _ &&
          M.numSpotMaps === v) ||
          ((r.directional.length = h),
          (r.spot.length = d),
          (r.rectArea.length = p),
          (r.point.length = u),
          (r.hemi.length = f),
          (r.directionalShadow.length = m),
          (r.directionalShadowMap.length = m),
          (r.pointShadow.length = g),
          (r.pointShadowMap.length = g),
          (r.spotShadow.length = _),
          (r.spotShadowMap.length = _),
          (r.directionalShadowMatrix.length = m),
          (r.pointShadowMatrix.length = g),
          (r.spotLightMatrix.length = _ + v - x),
          (r.spotLightMap.length = v),
          (r.numSpotLightShadowsWithMaps = x),
          (M.directionalLength = h),
          (M.pointLength = u),
          (M.spotLength = d),
          (M.rectAreaLength = p),
          (M.hemiLength = f),
          (M.numDirectionalShadows = m),
          (M.numPointShadows = g),
          (M.numSpotShadows = _),
          (M.numSpotMaps = v),
          (r.version = Ba++));
      },
      setupView: function (e, t) {
        let n = 0,
          i = 0,
          l = 0,
          c = 0,
          h = 0;
        const u = t.matrixWorldInverse;
        for (let t = 0, d = e.length; t < d; t++) {
          const d = e[t];
          if (d.isDirectionalLight) {
            const e = r.directional[n];
            e.direction.setFromMatrixPosition(d.matrixWorld),
              s.setFromMatrixPosition(d.target.matrixWorld),
              e.direction.sub(s),
              e.direction.transformDirection(u),
              n++;
          } else if (d.isSpotLight) {
            const e = r.spot[l];
            e.position.setFromMatrixPosition(d.matrixWorld),
              e.position.applyMatrix4(u),
              e.direction.setFromMatrixPosition(d.matrixWorld),
              s.setFromMatrixPosition(d.target.matrixWorld),
              e.direction.sub(s),
              e.direction.transformDirection(u),
              l++;
          } else if (d.isRectAreaLight) {
            const e = r.rectArea[c];
            e.position.setFromMatrixPosition(d.matrixWorld),
              e.position.applyMatrix4(u),
              o.identity(),
              a.copy(d.matrixWorld),
              a.premultiply(u),
              o.extractRotation(a),
              e.halfWidth.set(0.5 * d.width, 0, 0),
              e.halfHeight.set(0, 0.5 * d.height, 0),
              e.halfWidth.applyMatrix4(o),
              e.halfHeight.applyMatrix4(o),
              c++;
          } else if (d.isPointLight) {
            const e = r.point[i];
            e.position.setFromMatrixPosition(d.matrixWorld),
              e.position.applyMatrix4(u),
              i++;
          } else if (d.isHemisphereLight) {
            const e = r.hemi[h];
            e.direction.setFromMatrixPosition(d.matrixWorld),
              e.direction.transformDirection(u),
              h++;
          }
        }
      },
      state: r,
    };
  }
  function Ga(e, t) {
    const n = new Ha(e, t),
      i = [],
      r = [];
    return {
      init: function () {
        (i.length = 0), (r.length = 0);
      },
      state: { lightsArray: i, shadowsArray: r, lights: n },
      setupLights: function (e) {
        n.setup(i, e);
      },
      setupLightsView: function (e) {
        n.setupView(i, e);
      },
      pushLight: function (e) {
        i.push(e);
      },
      pushShadow: function (e) {
        r.push(e);
      },
    };
  }
  function Va(e, t) {
    let n = new WeakMap();
    return {
      get: function (i, r = 0) {
        const s = n.get(i);
        let a;
        return (
          void 0 === s
            ? ((a = new Ga(e, t)), n.set(i, [a]))
            : r >= s.length
            ? ((a = new Ga(e, t)), s.push(a))
            : (a = s[r]),
          a
        );
      },
      dispose: function () {
        n = new WeakMap();
      },
    };
  }
  class Wa extends wi {
    constructor(e) {
      super(),
        (this.isMeshDepthMaterial = !0),
        (this.type = "MeshDepthMaterial"),
        (this.depthPacking = 3200),
        (this.map = null),
        (this.alphaMap = null),
        (this.displacementMap = null),
        (this.displacementScale = 1),
        (this.displacementBias = 0),
        (this.wireframe = !1),
        (this.wireframeLinewidth = 1),
        this.setValues(e);
    }
    copy(e) {
      return (
        super.copy(e),
        (this.depthPacking = e.depthPacking),
        (this.map = e.map),
        (this.alphaMap = e.alphaMap),
        (this.displacementMap = e.displacementMap),
        (this.displacementScale = e.displacementScale),
        (this.displacementBias = e.displacementBias),
        (this.wireframe = e.wireframe),
        (this.wireframeLinewidth = e.wireframeLinewidth),
        this
      );
    }
  }
  class ja extends wi {
    constructor(e) {
      super(),
        (this.isMeshDistanceMaterial = !0),
        (this.type = "MeshDistanceMaterial"),
        (this.referencePosition = new jt()),
        (this.nearDistance = 1),
        (this.farDistance = 1e3),
        (this.map = null),
        (this.alphaMap = null),
        (this.displacementMap = null),
        (this.displacementScale = 1),
        (this.displacementBias = 0),
        this.setValues(e);
    }
    copy(e) {
      return (
        super.copy(e),
        this.referencePosition.copy(e.referencePosition),
        (this.nearDistance = e.nearDistance),
        (this.farDistance = e.farDistance),
        (this.map = e.map),
        (this.alphaMap = e.alphaMap),
        (this.displacementMap = e.displacementMap),
        (this.displacementScale = e.displacementScale),
        (this.displacementBias = e.displacementBias),
        this
      );
    }
  }
  const Xa = "void main() {\n\tgl_Position = vec4( position, 1.0 );\n}",
    qa =
      "uniform sampler2D shadow_pass;\nuniform vec2 resolution;\nuniform float radius;\n#include <packing>\nvoid main() {\n\tconst float samples = float( VSM_SAMPLES );\n\tfloat mean = 0.0;\n\tfloat squared_mean = 0.0;\n\tfloat uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );\n\tfloat uvStart = samples <= 1.0 ? 0.0 : - 1.0;\n\tfor ( float i = 0.0; i < samples; i ++ ) {\n\t\tfloat uvOffset = uvStart + i * uvStride;\n\t\t#ifdef HORIZONTAL_PASS\n\t\t\tvec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );\n\t\t\tmean += distribution.x;\n\t\t\tsquared_mean += distribution.y * distribution.y + distribution.x * distribution.x;\n\t\t#else\n\t\t\tfloat depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );\n\t\t\tmean += depth;\n\t\t\tsquared_mean += depth * depth;\n\t\t#endif\n\t}\n\tmean = mean / samples;\n\tsquared_mean = squared_mean / samples;\n\tfloat std_dev = sqrt( squared_mean - mean * mean );\n\tgl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );\n}";
  function Ya(e, t, n) {
    let i = new Er();
    const s = new Bt(),
      u = new Bt(),
      d = new cn(),
      p = new Wa({ depthPacking: mt }),
      f = new ja(),
      m = {},
      g = n.maxTextureSize,
      _ = { [o]: l, [l]: o, [c]: c },
      v = new pr({
        defines: { VSM_SAMPLES: 8 },
        uniforms: {
          shadow_pass: { value: null },
          resolution: { value: new Bt() },
          radius: { value: 4 },
        },
        vertexShader: Xa,
        fragmentShader: qa,
      }),
      x = v.clone();
    x.defines.HORIZONTAL_PASS = 1;
    const y = new ji();
    y.setAttribute(
      "position",
      new Ni(new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]), 3)
    );
    const M = new ar(y, v),
      b = this;
    function S(n, i) {
      const r = t.update(M);
      v.defines.VSM_SAMPLES !== n.blurSamples &&
        ((v.defines.VSM_SAMPLES = n.blurSamples),
        (x.defines.VSM_SAMPLES = n.blurSamples),
        (v.needsUpdate = !0),
        (x.needsUpdate = !0)),
        null === n.mapPass && (n.mapPass = new hn(s.x, s.y)),
        (v.uniforms.shadow_pass.value = n.map.texture),
        (v.uniforms.resolution.value = n.mapSize),
        (v.uniforms.radius.value = n.radius),
        e.setRenderTarget(n.mapPass),
        e.clear(),
        e.renderBufferDirect(i, null, r, v, M, null),
        (x.uniforms.shadow_pass.value = n.mapPass.texture),
        (x.uniforms.resolution.value = n.mapSize),
        (x.uniforms.radius.value = n.radius),
        e.setRenderTarget(n.map),
        e.clear(),
        e.renderBufferDirect(i, null, r, x, M, null);
    }
    function w(t, n, i, r, s, o) {
      let l = null;
      const c =
        !0 === i.isPointLight
          ? t.customDistanceMaterial
          : t.customDepthMaterial;
      if (void 0 !== c) l = c;
      else if (
        ((l = !0 === i.isPointLight ? f : p),
        (e.localClippingEnabled &&
          !0 === n.clipShadows &&
          Array.isArray(n.clippingPlanes) &&
          0 !== n.clippingPlanes.length) ||
          (n.displacementMap && 0 !== n.displacementScale) ||
          (n.alphaMap && n.alphaTest > 0) ||
          (n.map && n.alphaTest > 0))
      ) {
        const e = l.uuid,
          t = n.uuid;
        let i = m[e];
        void 0 === i && ((i = {}), (m[e] = i));
        let r = i[t];
        void 0 === r && ((r = l.clone()), (i[t] = r)), (l = r);
      }
      return (
        (l.visible = n.visible),
        (l.wireframe = n.wireframe),
        (l.side =
          o === a
            ? null !== n.shadowSide
              ? n.shadowSide
              : n.side
            : null !== n.shadowSide
            ? n.shadowSide
            : _[n.side]),
        (l.alphaMap = n.alphaMap),
        (l.alphaTest = n.alphaTest),
        (l.map = n.map),
        (l.clipShadows = n.clipShadows),
        (l.clippingPlanes = n.clippingPlanes),
        (l.clipIntersection = n.clipIntersection),
        (l.displacementMap = n.displacementMap),
        (l.displacementScale = n.displacementScale),
        (l.displacementBias = n.displacementBias),
        (l.wireframeLinewidth = n.wireframeLinewidth),
        (l.linewidth = n.linewidth),
        !0 === i.isPointLight &&
          !0 === l.isMeshDistanceMaterial &&
          (l.referencePosition.setFromMatrixPosition(i.matrixWorld),
          (l.nearDistance = r),
          (l.farDistance = s)),
        l
      );
    }
    function T(n, r, s, o, l) {
      if (!1 === n.visible) return;
      if (
        n.layers.test(r.layers) &&
        (n.isMesh || n.isLine || n.isPoints) &&
        (n.castShadow || (n.receiveShadow && l === a)) &&
        (!n.frustumCulled || i.intersectsObject(n))
      ) {
        n.modelViewMatrix.multiplyMatrices(s.matrixWorldInverse, n.matrixWorld);
        const i = t.update(n),
          r = n.material;
        if (Array.isArray(r)) {
          const t = i.groups;
          for (let a = 0, c = t.length; a < c; a++) {
            const c = t[a],
              h = r[c.materialIndex];
            if (h && h.visible) {
              const t = w(n, h, o, s.near, s.far, l);
              e.renderBufferDirect(s, null, i, t, n, c);
            }
          }
        } else if (r.visible) {
          const t = w(n, r, o, s.near, s.far, l);
          e.renderBufferDirect(s, null, i, t, n, null);
        }
      }
      const c = n.children;
      for (let e = 0, t = c.length; e < t; e++) T(c[e], r, s, o, l);
    }
    (this.enabled = !1),
      (this.autoUpdate = !0),
      (this.needsUpdate = !1),
      (this.type = r),
      (this.render = function (t, n, r) {
        if (!1 === b.enabled) return;
        if (!1 === b.autoUpdate && !1 === b.needsUpdate) return;
        if (0 === t.length) return;
        const o = e.getRenderTarget(),
          l = e.getActiveCubeFace(),
          c = e.getActiveMipmapLevel(),
          p = e.state;
        p.setBlending(h),
          p.buffers.color.setClear(1, 1, 1, 1),
          p.buffers.depth.setTest(!0),
          p.setScissorTest(!1);
        for (let o = 0, l = t.length; o < l; o++) {
          const l = t[o],
            c = l.shadow;
          if (void 0 === c) {
            console.warn("THREE.WebGLShadowMap:", l, "has no shadow.");
            continue;
          }
          if (!1 === c.autoUpdate && !1 === c.needsUpdate) continue;
          s.copy(c.mapSize);
          const h = c.getFrameExtents();
          if (
            (s.multiply(h),
            u.copy(c.mapSize),
            (s.x > g || s.y > g) &&
              (s.x > g &&
                ((u.x = Math.floor(g / h.x)),
                (s.x = u.x * h.x),
                (c.mapSize.x = u.x)),
              s.y > g &&
                ((u.y = Math.floor(g / h.y)),
                (s.y = u.y * h.y),
                (c.mapSize.y = u.y))),
            null === c.map)
          ) {
            const e = this.type !== a ? { minFilter: ie, magFilter: ie } : {};
            (c.map = new hn(s.x, s.y, e)),
              (c.map.texture.name = l.name + ".shadowMap"),
              c.camera.updateProjectionMatrix();
          }
          e.setRenderTarget(c.map), e.clear();
          const f = c.getViewportCount();
          for (let e = 0; e < f; e++) {
            const t = c.getViewport(e);
            d.set(u.x * t.x, u.y * t.y, u.x * t.z, u.y * t.w),
              p.viewport(d),
              c.updateMatrices(l, e),
              (i = c.getFrustum()),
              T(n, r, c.camera, l, this.type);
          }
          !0 !== c.isPointLightShadow && this.type === a && S(c, r),
            (c.needsUpdate = !1);
        }
        (b.needsUpdate = !1), e.setRenderTarget(o, l, c);
      });
  }
  function Ka(e, r, s) {
    const a = s.isWebGL2,
      o = new (function () {
        let t = !1;
        const n = new cn();
        let i = null;
        const r = new cn(0, 0, 0, 0);
        return {
          setMask: function (n) {
            i === n || t || (e.colorMask(n, n, n, n), (i = n));
          },
          setLocked: function (e) {
            t = e;
          },
          setClear: function (t, i, s, a, o) {
            !0 === o && ((t *= a), (i *= a), (s *= a)),
              n.set(t, i, s, a),
              !1 === r.equals(n) && (e.clearColor(t, i, s, a), r.copy(n));
          },
          reset: function () {
            (t = !1), (i = null), r.set(-1, 0, 0, 0);
          },
        };
      })(),
      k = new (function () {
        let t = !1,
          n = null,
          i = null,
          r = null;
        return {
          setTest: function (e) {
            e ? Me(2929) : be(2929);
          },
          setMask: function (i) {
            n === i || t || (e.depthMask(i), (n = i));
          },
          setFunc: function (t) {
            if (i !== t) {
              switch (t) {
                case D:
                  e.depthFunc(512);
                  break;
                case I:
                  e.depthFunc(519);
                  break;
                case N:
                  e.depthFunc(513);
                  break;
                case O:
                  e.depthFunc(515);
                  break;
                case U:
                  e.depthFunc(514);
                  break;
                case z:
                  e.depthFunc(518);
                  break;
                case F:
                  e.depthFunc(516);
                  break;
                case B:
                  e.depthFunc(517);
                  break;
                default:
                  e.depthFunc(515);
              }
              i = t;
            }
          },
          setLocked: function (e) {
            t = e;
          },
          setClear: function (t) {
            r !== t && (e.clearDepth(t), (r = t));
          },
          reset: function () {
            (t = !1), (n = null), (i = null), (r = null);
          },
        };
      })(),
      H = new (function () {
        let t = !1,
          n = null,
          i = null,
          r = null,
          s = null,
          a = null,
          o = null,
          l = null,
          c = null;
        return {
          setTest: function (e) {
            t || (e ? Me(2960) : be(2960));
          },
          setMask: function (i) {
            n === i || t || (e.stencilMask(i), (n = i));
          },
          setFunc: function (t, n, a) {
            (i === t && r === n && s === a) ||
              (e.stencilFunc(t, n, a), (i = t), (r = n), (s = a));
          },
          setOp: function (t, n, i) {
            (a === t && o === n && l === i) ||
              (e.stencilOp(t, n, i), (a = t), (o = n), (l = i));
          },
          setLocked: function (e) {
            t = e;
          },
          setClear: function (t) {
            c !== t && (e.clearStencil(t), (c = t));
          },
          reset: function () {
            (t = !1),
              (n = null),
              (i = null),
              (r = null),
              (s = null),
              (a = null),
              (o = null),
              (l = null),
              (c = null);
          },
        };
      })(),
      G = new WeakMap(),
      V = new WeakMap();
    let W = {},
      j = {},
      X = new WeakMap(),
      q = [],
      Y = null,
      K = !1,
      Z = null,
      J = null,
      Q = null,
      $ = null,
      ee = null,
      te = null,
      ne = null,
      ie = !1,
      re = null,
      se = null,
      ae = null,
      oe = null,
      le = null;
    const ce = e.getParameter(35661);
    let he = !1,
      ue = 0;
    const de = e.getParameter(7938);
    -1 !== de.indexOf("WebGL")
      ? ((ue = parseFloat(/^WebGL (\d)/.exec(de)[1])), (he = ue >= 1))
      : -1 !== de.indexOf("OpenGL ES") &&
        ((ue = parseFloat(/^OpenGL ES (\d)/.exec(de)[1])), (he = ue >= 2));
    let pe = null,
      fe = {};
    const me = e.getParameter(3088),
      ge = e.getParameter(2978),
      _e = new cn().fromArray(me),
      ve = new cn().fromArray(ge);
    function xe(t, n, i) {
      const r = new Uint8Array(4),
        s = e.createTexture();
      e.bindTexture(t, s),
        e.texParameteri(t, 10241, 9728),
        e.texParameteri(t, 10240, 9728);
      for (let t = 0; t < i; t++)
        e.texImage2D(n + t, 0, 6408, 1, 1, 0, 6408, 5121, r);
      return s;
    }
    const ye = {};
    function Me(t) {
      !0 !== W[t] && (e.enable(t), (W[t] = !0));
    }
    function be(t) {
      !1 !== W[t] && (e.disable(t), (W[t] = !1));
    }
    (ye[3553] = xe(3553, 3553, 1)),
      (ye[34067] = xe(34067, 34069, 6)),
      o.setClear(0, 0, 0, 1),
      k.setClear(1),
      H.setClear(0),
      Me(2929),
      k.setFunc(O),
      Ee(!1),
      Ae(n),
      Me(2884),
      Te(h);
    const Se = { [g]: 32774, [_]: 32778, [v]: 32779 };
    if (a) (Se[x] = 32775), (Se[y] = 32776);
    else {
      const e = r.get("EXT_blend_minmax");
      null !== e && ((Se[x] = e.MIN_EXT), (Se[y] = e.MAX_EXT));
    }
    const we = {
      [M]: 0,
      [b]: 1,
      [S]: 768,
      [T]: 770,
      [P]: 776,
      [C]: 774,
      [A]: 772,
      [w]: 769,
      [E]: 771,
      [R]: 775,
      [L]: 773,
    };
    function Te(t, n, i, r, s, a, o, l) {
      if (t !== h) {
        if ((!1 === K && (Me(3042), (K = !0)), t === m))
          (s = s || n),
            (a = a || i),
            (o = o || r),
            (n === J && s === ee) ||
              (e.blendEquationSeparate(Se[n], Se[s]), (J = n), (ee = s)),
            (i === Q && r === $ && a === te && o === ne) ||
              (e.blendFuncSeparate(we[i], we[r], we[a], we[o]),
              (Q = i),
              ($ = r),
              (te = a),
              (ne = o)),
            (Z = t),
            (ie = !1);
        else if (t !== Z || l !== ie) {
          if (
            ((J === g && ee === g) ||
              (e.blendEquation(32774), (J = g), (ee = g)),
            l)
          )
            switch (t) {
              case u:
                e.blendFuncSeparate(1, 771, 1, 771);
                break;
              case d:
                e.blendFunc(1, 1);
                break;
              case p:
                e.blendFuncSeparate(0, 769, 0, 1);
                break;
              case f:
                e.blendFuncSeparate(0, 768, 0, 770);
                break;
              default:
                console.error("THREE.WebGLState: Invalid blending: ", t);
            }
          else
            switch (t) {
              case u:
                e.blendFuncSeparate(770, 771, 1, 771);
                break;
              case d:
                e.blendFunc(770, 1);
                break;
              case p:
                e.blendFuncSeparate(0, 769, 0, 1);
                break;
              case f:
                e.blendFunc(0, 768);
                break;
              default:
                console.error("THREE.WebGLState: Invalid blending: ", t);
            }
          (Q = null), ($ = null), (te = null), (ne = null), (Z = t), (ie = l);
        }
      } else !0 === K && (be(3042), (K = !1));
    }
    function Ee(t) {
      re !== t && (t ? e.frontFace(2304) : e.frontFace(2305), (re = t));
    }
    function Ae(r) {
      r !== t
        ? (Me(2884),
          r !== se &&
            (r === n
              ? e.cullFace(1029)
              : r === i
              ? e.cullFace(1028)
              : e.cullFace(1032)))
        : be(2884),
        (se = r);
    }
    function Le(t, n, i) {
      t
        ? (Me(32823),
          (oe === n && le === i) || (e.polygonOffset(n, i), (oe = n), (le = i)))
        : be(32823);
    }
    return {
      buffers: { color: o, depth: k, stencil: H },
      enable: Me,
      disable: be,
      bindFramebuffer: function (t, n) {
        return (
          j[t] !== n &&
          (e.bindFramebuffer(t, n),
          (j[t] = n),
          a && (36009 === t && (j[36160] = n), 36160 === t && (j[36009] = n)),
          !0)
        );
      },
      drawBuffers: function (t, n) {
        let i = q,
          a = !1;
        if (t)
          if (
            ((i = X.get(n)),
            void 0 === i && ((i = []), X.set(n, i)),
            t.isWebGLMultipleRenderTargets)
          ) {
            const e = t.texture;
            if (i.length !== e.length || 36064 !== i[0]) {
              for (let t = 0, n = e.length; t < n; t++) i[t] = 36064 + t;
              (i.length = e.length), (a = !0);
            }
          } else 36064 !== i[0] && ((i[0] = 36064), (a = !0));
        else 1029 !== i[0] && ((i[0] = 1029), (a = !0));
        a &&
          (s.isWebGL2
            ? e.drawBuffers(i)
            : r.get("WEBGL_draw_buffers").drawBuffersWEBGL(i));
      },
      useProgram: function (t) {
        return Y !== t && (e.useProgram(t), (Y = t), !0);
      },
      setBlending: Te,
      setMaterial: function (e, t) {
        e.side === c ? be(2884) : Me(2884);
        let n = e.side === l;
        t && (n = !n),
          Ee(n),
          e.blending === u && !1 === e.transparent
            ? Te(h)
            : Te(
                e.blending,
                e.blendEquation,
                e.blendSrc,
                e.blendDst,
                e.blendEquationAlpha,
                e.blendSrcAlpha,
                e.blendDstAlpha,
                e.premultipliedAlpha
              ),
          k.setFunc(e.depthFunc),
          k.setTest(e.depthTest),
          k.setMask(e.depthWrite),
          o.setMask(e.colorWrite);
        const i = e.stencilWrite;
        H.setTest(i),
          i &&
            (H.setMask(e.stencilWriteMask),
            H.setFunc(e.stencilFunc, e.stencilRef, e.stencilFuncMask),
            H.setOp(e.stencilFail, e.stencilZFail, e.stencilZPass)),
          Le(e.polygonOffset, e.polygonOffsetFactor, e.polygonOffsetUnits),
          !0 === e.alphaToCoverage ? Me(32926) : be(32926);
      },
      setFlipSided: Ee,
      setCullFace: Ae,
      setLineWidth: function (t) {
        t !== ae && (he && e.lineWidth(t), (ae = t));
      },
      setPolygonOffset: Le,
      setScissorTest: function (e) {
        e ? Me(3089) : be(3089);
      },
      activeTexture: function (t) {
        void 0 === t && (t = 33984 + ce - 1),
          pe !== t && (e.activeTexture(t), (pe = t));
      },
      bindTexture: function (t, n, i) {
        void 0 === i && (i = null === pe ? 33984 + ce - 1 : pe);
        let r = fe[i];
        void 0 === r && ((r = { type: void 0, texture: void 0 }), (fe[i] = r)),
          (r.type === t && r.texture === n) ||
            (pe !== i && (e.activeTexture(i), (pe = i)),
            e.bindTexture(t, n || ye[t]),
            (r.type = t),
            (r.texture = n));
      },
      unbindTexture: function () {
        const t = fe[pe];
        void 0 !== t &&
          void 0 !== t.type &&
          (e.bindTexture(t.type, null),
          (t.type = void 0),
          (t.texture = void 0));
      },
      compressedTexImage2D: function () {
        try {
          e.compressedTexImage2D.apply(e, arguments);
        } catch (e) {
          console.error("THREE.WebGLState:", e);
        }
      },
      compressedTexImage3D: function () {
        try {
          e.compressedTexImage3D.apply(e, arguments);
        } catch (e) {
          console.error("THREE.WebGLState:", e);
        }
      },
      texImage2D: function () {
        try {
          e.texImage2D.apply(e, arguments);
        } catch (e) {
          console.error("THREE.WebGLState:", e);
        }
      },
      texImage3D: function () {
        try {
          e.texImage3D.apply(e, arguments);
        } catch (e) {
          console.error("THREE.WebGLState:", e);
        }
      },
      updateUBOMapping: function (t, n) {
        let i = V.get(n);
        void 0 === i && ((i = new WeakMap()), V.set(n, i));
        let r = i.get(t);
        void 0 === r && ((r = e.getUniformBlockIndex(n, t.name)), i.set(t, r));
      },
      uniformBlockBinding: function (t, n) {
        const i = V.get(n).get(t);
        G.get(n) !== i &&
          (e.uniformBlockBinding(n, i, t.__bindingPointIndex), G.set(n, i));
      },
      texStorage2D: function () {
        try {
          e.texStorage2D.apply(e, arguments);
        } catch (e) {
          console.error("THREE.WebGLState:", e);
        }
      },
      texStorage3D: function () {
        try {
          e.texStorage3D.apply(e, arguments);
        } catch (e) {
          console.error("THREE.WebGLState:", e);
        }
      },
      texSubImage2D: function () {
        try {
          e.texSubImage2D.apply(e, arguments);
        } catch (e) {
          console.error("THREE.WebGLState:", e);
        }
      },
      texSubImage3D: function () {
        try {
          e.texSubImage3D.apply(e, arguments);
        } catch (e) {
          console.error("THREE.WebGLState:", e);
        }
      },
      compressedTexSubImage2D: function () {
        try {
          e.compressedTexSubImage2D.apply(e, arguments);
        } catch (e) {
          console.error("THREE.WebGLState:", e);
        }
      },
      compressedTexSubImage3D: function () {
        try {
          e.compressedTexSubImage3D.apply(e, arguments);
        } catch (e) {
          console.error("THREE.WebGLState:", e);
        }
      },
      scissor: function (t) {
        !1 === _e.equals(t) && (e.scissor(t.x, t.y, t.z, t.w), _e.copy(t));
      },
      viewport: function (t) {
        !1 === ve.equals(t) && (e.viewport(t.x, t.y, t.z, t.w), ve.copy(t));
      },
      reset: function () {
        e.disable(3042),
          e.disable(2884),
          e.disable(2929),
          e.disable(32823),
          e.disable(3089),
          e.disable(2960),
          e.disable(32926),
          e.blendEquation(32774),
          e.blendFunc(1, 0),
          e.blendFuncSeparate(1, 0, 1, 0),
          e.colorMask(!0, !0, !0, !0),
          e.clearColor(0, 0, 0, 0),
          e.depthMask(!0),
          e.depthFunc(513),
          e.clearDepth(1),
          e.stencilMask(4294967295),
          e.stencilFunc(519, 0, 4294967295),
          e.stencilOp(7680, 7680, 7680),
          e.clearStencil(0),
          e.cullFace(1029),
          e.frontFace(2305),
          e.polygonOffset(0, 0),
          e.activeTexture(33984),
          e.bindFramebuffer(36160, null),
          !0 === a &&
            (e.bindFramebuffer(36009, null), e.bindFramebuffer(36008, null)),
          e.useProgram(null),
          e.lineWidth(1),
          e.scissor(0, 0, e.canvas.width, e.canvas.height),
          e.viewport(0, 0, e.canvas.width, e.canvas.height),
          (W = {}),
          (pe = null),
          (fe = {}),
          (j = {}),
          (X = new WeakMap()),
          (q = []),
          (Y = null),
          (K = !1),
          (Z = null),
          (J = null),
          (Q = null),
          ($ = null),
          (ee = null),
          (te = null),
          (ne = null),
          (ie = !1),
          (re = null),
          (se = null),
          (ae = null),
          (oe = null),
          (le = null),
          _e.set(0, 0, e.canvas.width, e.canvas.height),
          ve.set(0, 0, e.canvas.width, e.canvas.height),
          o.reset(),
          k.reset(),
          H.reset();
      },
    };
  }
  function Za(e, t, n, i, r, s, a) {
    const o = r.isWebGL2,
      l = r.maxTextures,
      c = r.maxCubemapSize,
      h = r.maxTextureSize,
      u = r.maxSamples,
      d = t.has("WEBGL_multisampled_render_to_texture")
        ? t.get("WEBGL_multisampled_render_to_texture")
        : null,
      p =
        "undefined" != typeof navigator &&
        /OculusBrowser/g.test(navigator.userAgent),
      f = new WeakMap();
    let m;
    const g = new WeakMap();
    let _ = !1;
    try {
      _ =
        "undefined" != typeof OffscreenCanvas &&
        null !== new OffscreenCanvas(1, 1).getContext("2d");
    } catch (e) {}
    function v(e, t) {
      return _ ? new OffscreenCanvas(e, t) : Vt("canvas");
    }
    function x(e, t, n, i) {
      let r = 1;
      if (
        ((e.width > i || e.height > i) && (r = i / Math.max(e.width, e.height)),
        r < 1 || !0 === t)
      ) {
        if (
          ("undefined" != typeof HTMLImageElement &&
            e instanceof HTMLImageElement) ||
          ("undefined" != typeof HTMLCanvasElement &&
            e instanceof HTMLCanvasElement) ||
          ("undefined" != typeof ImageBitmap && e instanceof ImageBitmap)
        ) {
          const i = t ? Ot : Math.floor,
            s = i(r * e.width),
            a = i(r * e.height);
          void 0 === m && (m = v(s, a));
          const o = n ? v(s, a) : m;
          return (
            (o.width = s),
            (o.height = a),
            o.getContext("2d").drawImage(e, 0, 0, s, a),
            console.warn(
              "THREE.WebGLRenderer: Texture has been resized from (" +
                e.width +
                "x" +
                e.height +
                ") to (" +
                s +
                "x" +
                a +
                ")."
            ),
            o
          );
        }
        return (
          "data" in e &&
            console.warn(
              "THREE.WebGLRenderer: Image in DataTexture is too big (" +
                e.width +
                "x" +
                e.height +
                ")."
            ),
          e
        );
      }
      return e;
    }
    function y(e) {
      return It(e.width) && It(e.height);
    }
    function M(e, t) {
      return e.generateMipmaps && t && e.minFilter !== ie && e.minFilter !== ae;
    }
    function b(t) {
      e.generateMipmap(t);
    }
    function S(n, i, r, s, a = !1) {
      if (!1 === o) return i;
      if (null !== n) {
        if (void 0 !== e[n]) return e[n];
        console.warn(
          "THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" +
            n +
            "'"
        );
      }
      let l = i;
      return (
        6403 === i &&
          (5126 === r && (l = 33326),
          5131 === r && (l = 33325),
          5121 === r && (l = 33321)),
        33319 === i &&
          (5126 === r && (l = 33328),
          5131 === r && (l = 33327),
          5121 === r && (l = 33323)),
        6408 === i &&
          (5126 === r && (l = 34836),
          5131 === r && (l = 34842),
          5121 === r && (l = s === ft && !1 === a ? 35907 : 32856),
          32819 === r && (l = 32854),
          32820 === r && (l = 32855)),
        (33325 !== l &&
          33326 !== l &&
          33327 !== l &&
          33328 !== l &&
          34842 !== l &&
          34836 !== l) ||
          t.get("EXT_color_buffer_float"),
        l
      );
    }
    function w(e, t, n) {
      return !0 === M(e, n) ||
        (e.isFramebufferTexture && e.minFilter !== ie && e.minFilter !== ae)
        ? Math.log2(Math.max(t.width, t.height)) + 1
        : void 0 !== e.mipmaps && e.mipmaps.length > 0
        ? e.mipmaps.length
        : e.isCompressedTexture && Array.isArray(e.image)
        ? t.mipmaps.length
        : 1;
    }
    function T(e) {
      return e === ie || e === re || e === se ? 9728 : 9729;
    }
    function E(e) {
      const t = e.target;
      t.removeEventListener("dispose", E),
        (function (e) {
          const t = i.get(e);
          if (void 0 === t.__webglInit) return;
          const n = e.source,
            r = g.get(n);
          if (r) {
            const i = r[t.__cacheKey];
            i.usedTimes--,
              0 === i.usedTimes && L(e),
              0 === Object.keys(r).length && g.delete(n);
          }
          i.remove(e);
        })(t),
        t.isVideoTexture && f.delete(t);
    }
    function A(t) {
      const n = t.target;
      n.removeEventListener("dispose", A),
        (function (t) {
          const n = t.texture,
            r = i.get(t),
            s = i.get(n);
          if (
            (void 0 !== s.__webglTexture &&
              (e.deleteTexture(s.__webglTexture), a.memory.textures--),
            t.depthTexture && t.depthTexture.dispose(),
            t.isWebGLCubeRenderTarget)
          )
            for (let t = 0; t < 6; t++)
              e.deleteFramebuffer(r.__webglFramebuffer[t]),
                r.__webglDepthbuffer &&
                  e.deleteRenderbuffer(r.__webglDepthbuffer[t]);
          else {
            if (
              (e.deleteFramebuffer(r.__webglFramebuffer),
              r.__webglDepthbuffer &&
                e.deleteRenderbuffer(r.__webglDepthbuffer),
              r.__webglMultisampledFramebuffer &&
                e.deleteFramebuffer(r.__webglMultisampledFramebuffer),
              r.__webglColorRenderbuffer)
            )
              for (let t = 0; t < r.__webglColorRenderbuffer.length; t++)
                r.__webglColorRenderbuffer[t] &&
                  e.deleteRenderbuffer(r.__webglColorRenderbuffer[t]);
            r.__webglDepthRenderbuffer &&
              e.deleteRenderbuffer(r.__webglDepthRenderbuffer);
          }
          if (t.isWebGLMultipleRenderTargets)
            for (let t = 0, r = n.length; t < r; t++) {
              const r = i.get(n[t]);
              r.__webglTexture &&
                (e.deleteTexture(r.__webglTexture), a.memory.textures--),
                i.remove(n[t]);
            }
          i.remove(n), i.remove(t);
        })(n);
    }
    function L(t) {
      const n = i.get(t);
      e.deleteTexture(n.__webglTexture);
      const r = t.source;
      delete g.get(r)[n.__cacheKey], a.memory.textures--;
    }
    let C = 0;
    function R(e, t) {
      const r = i.get(e);
      if (
        (e.isVideoTexture &&
          (function (e) {
            const t = a.render.frame;
            f.get(e) !== t && (f.set(e, t), e.update());
          })(e),
        !1 === e.isRenderTargetTexture &&
          e.version > 0 &&
          r.__version !== e.version)
      ) {
        const n = e.image;
        if (null === n)
          console.warn(
            "THREE.WebGLRenderer: Texture marked for update but no image data found."
          );
        else {
          if (!1 !== n.complete) return void O(r, e, t);
          console.warn(
            "THREE.WebGLRenderer: Texture marked for update but image is incomplete"
          );
        }
      }
      n.bindTexture(3553, r.__webglTexture, 33984 + t);
    }
    const P = { [ee]: 10497, [te]: 33071, [ne]: 33648 },
      D = {
        [ie]: 9728,
        [re]: 9984,
        [se]: 9986,
        [ae]: 9729,
        [oe]: 9985,
        [le]: 9987,
      };
    function I(n, s, a) {
      if (
        (a
          ? (e.texParameteri(n, 10242, P[s.wrapS]),
            e.texParameteri(n, 10243, P[s.wrapT]),
            (32879 !== n && 35866 !== n) ||
              e.texParameteri(n, 32882, P[s.wrapR]),
            e.texParameteri(n, 10240, D[s.magFilter]),
            e.texParameteri(n, 10241, D[s.minFilter]))
          : (e.texParameteri(n, 10242, 33071),
            e.texParameteri(n, 10243, 33071),
            (32879 !== n && 35866 !== n) || e.texParameteri(n, 32882, 33071),
            (s.wrapS === te && s.wrapT === te) ||
              console.warn(
                "THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."
              ),
            e.texParameteri(n, 10240, T(s.magFilter)),
            e.texParameteri(n, 10241, T(s.minFilter)),
            s.minFilter !== ie &&
              s.minFilter !== ae &&
              console.warn(
                "THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter."
              )),
        !0 === t.has("EXT_texture_filter_anisotropic"))
      ) {
        const a = t.get("EXT_texture_filter_anisotropic");
        if (s.magFilter === ie) return;
        if (s.minFilter !== se && s.minFilter !== le) return;
        if (s.type === me && !1 === t.has("OES_texture_float_linear")) return;
        if (
          !1 === o &&
          s.type === ge &&
          !1 === t.has("OES_texture_half_float_linear")
        )
          return;
        (s.anisotropy > 1 || i.get(s).__currentAnisotropy) &&
          (e.texParameterf(
            n,
            a.TEXTURE_MAX_ANISOTROPY_EXT,
            Math.min(s.anisotropy, r.getMaxAnisotropy())
          ),
          (i.get(s).__currentAnisotropy = s.anisotropy));
      }
    }
    function N(t, n) {
      let i = !1;
      void 0 === t.__webglInit &&
        ((t.__webglInit = !0), n.addEventListener("dispose", E));
      const r = n.source;
      let s = g.get(r);
      void 0 === s && ((s = {}), g.set(r, s));
      const o = (function (e) {
        const t = [];
        return (
          t.push(e.wrapS),
          t.push(e.wrapT),
          t.push(e.wrapR || 0),
          t.push(e.magFilter),
          t.push(e.minFilter),
          t.push(e.anisotropy),
          t.push(e.internalFormat),
          t.push(e.format),
          t.push(e.type),
          t.push(e.generateMipmaps),
          t.push(e.premultiplyAlpha),
          t.push(e.flipY),
          t.push(e.unpackAlignment),
          t.push(e.encoding),
          t.join()
        );
      })(n);
      if (o !== t.__cacheKey) {
        void 0 === s[o] &&
          ((s[o] = { texture: e.createTexture(), usedTimes: 0 }),
          a.memory.textures++,
          (i = !0)),
          s[o].usedTimes++;
        const r = s[t.__cacheKey];
        void 0 !== r &&
          (s[t.__cacheKey].usedTimes--, 0 === r.usedTimes && L(n)),
          (t.__cacheKey = o),
          (t.__webglTexture = s[o].texture);
      }
      return i;
    }
    function O(t, r, a) {
      let l = 3553;
      (r.isDataArrayTexture || r.isCompressedArrayTexture) && (l = 35866),
        r.isData3DTexture && (l = 32879);
      const c = N(t, r),
        u = r.source;
      n.bindTexture(l, t.__webglTexture, 33984 + a);
      const d = i.get(u);
      if (u.version !== d.__version || !0 === c) {
        n.activeTexture(33984 + a),
          e.pixelStorei(37440, r.flipY),
          e.pixelStorei(37441, r.premultiplyAlpha),
          e.pixelStorei(3317, r.unpackAlignment),
          e.pixelStorei(37443, 0);
        const t =
          (function (e) {
            return (
              !o &&
              (e.wrapS !== te ||
                e.wrapT !== te ||
                (e.minFilter !== ie && e.minFilter !== ae))
            );
          })(r) && !1 === y(r.image);
        let i = x(r.image, t, !1, h);
        i = H(r, i);
        const p = y(i) || o,
          f = s.convert(r.format, r.encoding);
        let m,
          g = s.convert(r.type),
          _ = S(r.internalFormat, f, g, r.encoding, r.isVideoTexture);
        I(l, r, p);
        const v = r.mipmaps,
          T = o && !0 !== r.isVideoTexture,
          E = void 0 === d.__version || !0 === c,
          A = w(r, i, p);
        if (r.isDepthTexture)
          (_ = 6402),
            o
              ? (_ =
                  r.type === me
                    ? 36012
                    : r.type === fe
                    ? 33190
                    : r.type === xe
                    ? 35056
                    : 33189)
              : r.type === me &&
                console.error(
                  "WebGLRenderer: Floating point depth texture requires WebGL2."
                ),
            r.format === we &&
              6402 === _ &&
              r.type !== de &&
              r.type !== fe &&
              (console.warn(
                "THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."
              ),
              (r.type = fe),
              (g = s.convert(r.type))),
            r.format === Te &&
              6402 === _ &&
              ((_ = 34041),
              r.type !== xe &&
                (console.warn(
                  "THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."
                ),
                (r.type = xe),
                (g = s.convert(r.type)))),
            E &&
              (T
                ? n.texStorage2D(3553, 1, _, i.width, i.height)
                : n.texImage2D(3553, 0, _, i.width, i.height, 0, f, g, null));
        else if (r.isDataTexture)
          if (v.length > 0 && p) {
            T && E && n.texStorage2D(3553, A, _, v[0].width, v[0].height);
            for (let e = 0, t = v.length; e < t; e++)
              (m = v[e]),
                T
                  ? n.texSubImage2D(
                      3553,
                      e,
                      0,
                      0,
                      m.width,
                      m.height,
                      f,
                      g,
                      m.data
                    )
                  : n.texImage2D(
                      3553,
                      e,
                      _,
                      m.width,
                      m.height,
                      0,
                      f,
                      g,
                      m.data
                    );
            r.generateMipmaps = !1;
          } else
            T
              ? (E && n.texStorage2D(3553, A, _, i.width, i.height),
                n.texSubImage2D(3553, 0, 0, 0, i.width, i.height, f, g, i.data))
              : n.texImage2D(3553, 0, _, i.width, i.height, 0, f, g, i.data);
        else if (r.isCompressedTexture)
          if (r.isCompressedArrayTexture) {
            T &&
              E &&
              n.texStorage3D(35866, A, _, v[0].width, v[0].height, i.depth);
            for (let e = 0, t = v.length; e < t; e++)
              (m = v[e]),
                r.format !== Me
                  ? null !== f
                    ? T
                      ? n.compressedTexSubImage3D(
                          35866,
                          e,
                          0,
                          0,
                          0,
                          m.width,
                          m.height,
                          i.depth,
                          f,
                          m.data,
                          0,
                          0
                        )
                      : n.compressedTexImage3D(
                          35866,
                          e,
                          _,
                          m.width,
                          m.height,
                          i.depth,
                          0,
                          m.data,
                          0,
                          0
                        )
                    : console.warn(
                        "THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"
                      )
                  : T
                  ? n.texSubImage3D(
                      35866,
                      e,
                      0,
                      0,
                      0,
                      m.width,
                      m.height,
                      i.depth,
                      f,
                      g,
                      m.data
                    )
                  : n.texImage3D(
                      35866,
                      e,
                      _,
                      m.width,
                      m.height,
                      i.depth,
                      0,
                      f,
                      g,
                      m.data
                    );
          } else {
            T && E && n.texStorage2D(3553, A, _, v[0].width, v[0].height);
            for (let e = 0, t = v.length; e < t; e++)
              (m = v[e]),
                r.format !== Me
                  ? null !== f
                    ? T
                      ? n.compressedTexSubImage2D(
                          3553,
                          e,
                          0,
                          0,
                          m.width,
                          m.height,
                          f,
                          m.data
                        )
                      : n.compressedTexImage2D(
                          3553,
                          e,
                          _,
                          m.width,
                          m.height,
                          0,
                          m.data
                        )
                    : console.warn(
                        "THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"
                      )
                  : T
                  ? n.texSubImage2D(
                      3553,
                      e,
                      0,
                      0,
                      m.width,
                      m.height,
                      f,
                      g,
                      m.data
                    )
                  : n.texImage2D(
                      3553,
                      e,
                      _,
                      m.width,
                      m.height,
                      0,
                      f,
                      g,
                      m.data
                    );
          }
        else if (r.isDataArrayTexture)
          T
            ? (E && n.texStorage3D(35866, A, _, i.width, i.height, i.depth),
              n.texSubImage3D(
                35866,
                0,
                0,
                0,
                0,
                i.width,
                i.height,
                i.depth,
                f,
                g,
                i.data
              ))
            : n.texImage3D(
                35866,
                0,
                _,
                i.width,
                i.height,
                i.depth,
                0,
                f,
                g,
                i.data
              );
        else if (r.isData3DTexture)
          T
            ? (E && n.texStorage3D(32879, A, _, i.width, i.height, i.depth),
              n.texSubImage3D(
                32879,
                0,
                0,
                0,
                0,
                i.width,
                i.height,
                i.depth,
                f,
                g,
                i.data
              ))
            : n.texImage3D(
                32879,
                0,
                _,
                i.width,
                i.height,
                i.depth,
                0,
                f,
                g,
                i.data
              );
        else if (r.isFramebufferTexture) {
          if (E)
            if (T) n.texStorage2D(3553, A, _, i.width, i.height);
            else {
              let e = i.width,
                t = i.height;
              for (let i = 0; i < A; i++)
                n.texImage2D(3553, i, _, e, t, 0, f, g, null),
                  (e >>= 1),
                  (t >>= 1);
            }
        } else if (v.length > 0 && p) {
          T && E && n.texStorage2D(3553, A, _, v[0].width, v[0].height);
          for (let e = 0, t = v.length; e < t; e++)
            (m = v[e]),
              T
                ? n.texSubImage2D(3553, e, 0, 0, f, g, m)
                : n.texImage2D(3553, e, _, f, g, m);
          r.generateMipmaps = !1;
        } else
          T
            ? (E && n.texStorage2D(3553, A, _, i.width, i.height),
              n.texSubImage2D(3553, 0, 0, 0, f, g, i))
            : n.texImage2D(3553, 0, _, f, g, i);
        M(r, p) && b(l), (d.__version = u.version), r.onUpdate && r.onUpdate(r);
      }
      t.__version = r.version;
    }
    function U(t, r, a, o, l) {
      const c = s.convert(a.format, a.encoding),
        h = s.convert(a.type),
        u = S(a.internalFormat, c, h, a.encoding);
      i.get(r).__hasExternalTextures ||
        (32879 === l || 35866 === l
          ? n.texImage3D(l, 0, u, r.width, r.height, r.depth, 0, c, h, null)
          : n.texImage2D(l, 0, u, r.width, r.height, 0, c, h, null)),
        n.bindFramebuffer(36160, t),
        k(r)
          ? d.framebufferTexture2DMultisampleEXT(
              36160,
              o,
              l,
              i.get(a).__webglTexture,
              0,
              B(r)
            )
          : (3553 === l || (l >= 34069 && l <= 34074)) &&
            e.framebufferTexture2D(36160, o, l, i.get(a).__webglTexture, 0),
        n.bindFramebuffer(36160, null);
    }
    function z(t, n, i) {
      if ((e.bindRenderbuffer(36161, t), n.depthBuffer && !n.stencilBuffer)) {
        let r = 33189;
        if (i || k(n)) {
          const t = n.depthTexture;
          t &&
            t.isDepthTexture &&
            (t.type === me ? (r = 36012) : t.type === fe && (r = 33190));
          const i = B(n);
          k(n)
            ? d.renderbufferStorageMultisampleEXT(
                36161,
                i,
                r,
                n.width,
                n.height
              )
            : e.renderbufferStorageMultisample(36161, i, r, n.width, n.height);
        } else e.renderbufferStorage(36161, r, n.width, n.height);
        e.framebufferRenderbuffer(36160, 36096, 36161, t);
      } else if (n.depthBuffer && n.stencilBuffer) {
        const r = B(n);
        i && !1 === k(n)
          ? e.renderbufferStorageMultisample(36161, r, 35056, n.width, n.height)
          : k(n)
          ? d.renderbufferStorageMultisampleEXT(
              36161,
              r,
              35056,
              n.width,
              n.height
            )
          : e.renderbufferStorage(36161, 34041, n.width, n.height),
          e.framebufferRenderbuffer(36160, 33306, 36161, t);
      } else {
        const t =
          !0 === n.isWebGLMultipleRenderTargets ? n.texture : [n.texture];
        for (let r = 0; r < t.length; r++) {
          const a = t[r],
            o = s.convert(a.format, a.encoding),
            l = s.convert(a.type),
            c = S(a.internalFormat, o, l, a.encoding),
            h = B(n);
          i && !1 === k(n)
            ? e.renderbufferStorageMultisample(36161, h, c, n.width, n.height)
            : k(n)
            ? d.renderbufferStorageMultisampleEXT(
                36161,
                h,
                c,
                n.width,
                n.height
              )
            : e.renderbufferStorage(36161, c, n.width, n.height);
        }
      }
      e.bindRenderbuffer(36161, null);
    }
    function F(t) {
      const r = i.get(t),
        s = !0 === t.isWebGLCubeRenderTarget;
      if (t.depthTexture && !r.__autoAllocateDepthBuffer) {
        if (s)
          throw new Error(
            "target.depthTexture not supported in Cube render targets"
          );
        !(function (t, r) {
          if (r && r.isWebGLCubeRenderTarget)
            throw new Error(
              "Depth Texture with cube render targets is not supported"
            );
          if (
            (n.bindFramebuffer(36160, t),
            !r.depthTexture || !r.depthTexture.isDepthTexture)
          )
            throw new Error(
              "renderTarget.depthTexture must be an instance of THREE.DepthTexture"
            );
          (i.get(r.depthTexture).__webglTexture &&
            r.depthTexture.image.width === r.width &&
            r.depthTexture.image.height === r.height) ||
            ((r.depthTexture.image.width = r.width),
            (r.depthTexture.image.height = r.height),
            (r.depthTexture.needsUpdate = !0)),
            R(r.depthTexture, 0);
          const s = i.get(r.depthTexture).__webglTexture,
            a = B(r);
          if (r.depthTexture.format === we)
            k(r)
              ? d.framebufferTexture2DMultisampleEXT(
                  36160,
                  36096,
                  3553,
                  s,
                  0,
                  a
                )
              : e.framebufferTexture2D(36160, 36096, 3553, s, 0);
          else {
            if (r.depthTexture.format !== Te)
              throw new Error("Unknown depthTexture format");
            k(r)
              ? d.framebufferTexture2DMultisampleEXT(
                  36160,
                  33306,
                  3553,
                  s,
                  0,
                  a
                )
              : e.framebufferTexture2D(36160, 33306, 3553, s, 0);
          }
        })(r.__webglFramebuffer, t);
      } else if (s) {
        r.__webglDepthbuffer = [];
        for (let i = 0; i < 6; i++)
          n.bindFramebuffer(36160, r.__webglFramebuffer[i]),
            (r.__webglDepthbuffer[i] = e.createRenderbuffer()),
            z(r.__webglDepthbuffer[i], t, !1);
      } else
        n.bindFramebuffer(36160, r.__webglFramebuffer),
          (r.__webglDepthbuffer = e.createRenderbuffer()),
          z(r.__webglDepthbuffer, t, !1);
      n.bindFramebuffer(36160, null);
    }
    function B(e) {
      return Math.min(u, e.samples);
    }
    function k(e) {
      const n = i.get(e);
      return (
        o &&
        e.samples > 0 &&
        !0 === t.has("WEBGL_multisampled_render_to_texture") &&
        !1 !== n.__useRenderToTexture
      );
    }
    function H(e, n) {
      const i = e.encoding,
        r = e.format,
        s = e.type;
      return (
        !0 === e.isCompressedTexture ||
          !0 === e.isVideoTexture ||
          e.format === wt ||
          (i !== pt &&
            (i === ft
              ? !1 === o
                ? !0 === t.has("EXT_sRGB") && r === Me
                  ? ((e.format = wt),
                    (e.minFilter = ae),
                    (e.generateMipmaps = !1))
                  : (n = rn.sRGBToLinear(n))
                : (r === Me && s === ce) ||
                  console.warn(
                    "THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."
                  )
              : console.error(
                  "THREE.WebGLTextures: Unsupported texture encoding:",
                  i
                ))),
        n
      );
    }
    (this.allocateTextureUnit = function () {
      const e = C;
      return (
        e >= l &&
          console.warn(
            "THREE.WebGLTextures: Trying to use " +
              e +
              " texture units while this GPU supports only " +
              l
          ),
        (C += 1),
        e
      );
    }),
      (this.resetTextureUnits = function () {
        C = 0;
      }),
      (this.setTexture2D = R),
      (this.setTexture2DArray = function (e, t) {
        const r = i.get(e);
        e.version > 0 && r.__version !== e.version
          ? O(r, e, t)
          : n.bindTexture(35866, r.__webglTexture, 33984 + t);
      }),
      (this.setTexture3D = function (e, t) {
        const r = i.get(e);
        e.version > 0 && r.__version !== e.version
          ? O(r, e, t)
          : n.bindTexture(32879, r.__webglTexture, 33984 + t);
      }),
      (this.setTextureCube = function (t, r) {
        const a = i.get(t);
        t.version > 0 && a.__version !== t.version
          ? (function (t, r, a) {
              if (6 !== r.image.length) return;
              const l = N(t, r),
                h = r.source;
              n.bindTexture(34067, t.__webglTexture, 33984 + a);
              const u = i.get(h);
              if (h.version !== u.__version || !0 === l) {
                n.activeTexture(33984 + a),
                  e.pixelStorei(37440, r.flipY),
                  e.pixelStorei(37441, r.premultiplyAlpha),
                  e.pixelStorei(3317, r.unpackAlignment),
                  e.pixelStorei(37443, 0);
                const t =
                    r.isCompressedTexture || r.image[0].isCompressedTexture,
                  i = r.image[0] && r.image[0].isDataTexture,
                  d = [];
                for (let e = 0; e < 6; e++)
                  (d[e] =
                    t || i
                      ? i
                        ? r.image[e].image
                        : r.image[e]
                      : x(r.image[e], !1, !0, c)),
                    (d[e] = H(r, d[e]));
                const p = d[0],
                  f = y(p) || o,
                  m = s.convert(r.format, r.encoding),
                  g = s.convert(r.type),
                  _ = S(r.internalFormat, m, g, r.encoding),
                  v = o && !0 !== r.isVideoTexture,
                  T = void 0 === u.__version || !0 === l;
                let E,
                  A = w(r, p, f);
                if ((I(34067, r, f), t)) {
                  v && T && n.texStorage2D(34067, A, _, p.width, p.height);
                  for (let e = 0; e < 6; e++) {
                    E = d[e].mipmaps;
                    for (let t = 0; t < E.length; t++) {
                      const i = E[t];
                      r.format !== Me
                        ? null !== m
                          ? v
                            ? n.compressedTexSubImage2D(
                                34069 + e,
                                t,
                                0,
                                0,
                                i.width,
                                i.height,
                                m,
                                i.data
                              )
                            : n.compressedTexImage2D(
                                34069 + e,
                                t,
                                _,
                                i.width,
                                i.height,
                                0,
                                i.data
                              )
                          : console.warn(
                              "THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"
                            )
                        : v
                        ? n.texSubImage2D(
                            34069 + e,
                            t,
                            0,
                            0,
                            i.width,
                            i.height,
                            m,
                            g,
                            i.data
                          )
                        : n.texImage2D(
                            34069 + e,
                            t,
                            _,
                            i.width,
                            i.height,
                            0,
                            m,
                            g,
                            i.data
                          );
                    }
                  }
                } else {
                  (E = r.mipmaps),
                    v &&
                      T &&
                      (E.length > 0 && A++,
                      n.texStorage2D(34067, A, _, d[0].width, d[0].height));
                  for (let e = 0; e < 6; e++)
                    if (i) {
                      v
                        ? n.texSubImage2D(
                            34069 + e,
                            0,
                            0,
                            0,
                            d[e].width,
                            d[e].height,
                            m,
                            g,
                            d[e].data
                          )
                        : n.texImage2D(
                            34069 + e,
                            0,
                            _,
                            d[e].width,
                            d[e].height,
                            0,
                            m,
                            g,
                            d[e].data
                          );
                      for (let t = 0; t < E.length; t++) {
                        const i = E[t].image[e].image;
                        v
                          ? n.texSubImage2D(
                              34069 + e,
                              t + 1,
                              0,
                              0,
                              i.width,
                              i.height,
                              m,
                              g,
                              i.data
                            )
                          : n.texImage2D(
                              34069 + e,
                              t + 1,
                              _,
                              i.width,
                              i.height,
                              0,
                              m,
                              g,
                              i.data
                            );
                      }
                    } else {
                      v
                        ? n.texSubImage2D(34069 + e, 0, 0, 0, m, g, d[e])
                        : n.texImage2D(34069 + e, 0, _, m, g, d[e]);
                      for (let t = 0; t < E.length; t++) {
                        const i = E[t];
                        v
                          ? n.texSubImage2D(
                              34069 + e,
                              t + 1,
                              0,
                              0,
                              m,
                              g,
                              i.image[e]
                            )
                          : n.texImage2D(34069 + e, t + 1, _, m, g, i.image[e]);
                      }
                    }
                }
                M(r, f) && b(34067),
                  (u.__version = h.version),
                  r.onUpdate && r.onUpdate(r);
              }
              t.__version = r.version;
            })(a, t, r)
          : n.bindTexture(34067, a.__webglTexture, 33984 + r);
      }),
      (this.rebindTextures = function (e, t, n) {
        const r = i.get(e);
        void 0 !== t && U(r.__webglFramebuffer, e, e.texture, 36064, 3553),
          void 0 !== n && F(e);
      }),
      (this.setupRenderTarget = function (t) {
        const l = t.texture,
          c = i.get(t),
          h = i.get(l);
        t.addEventListener("dispose", A),
          !0 !== t.isWebGLMultipleRenderTargets &&
            (void 0 === h.__webglTexture &&
              (h.__webglTexture = e.createTexture()),
            (h.__version = l.version),
            a.memory.textures++);
        const u = !0 === t.isWebGLCubeRenderTarget,
          d = !0 === t.isWebGLMultipleRenderTargets,
          p = y(t) || o;
        if (u) {
          c.__webglFramebuffer = [];
          for (let t = 0; t < 6; t++)
            c.__webglFramebuffer[t] = e.createFramebuffer();
        } else {
          if (((c.__webglFramebuffer = e.createFramebuffer()), d))
            if (r.drawBuffers) {
              const n = t.texture;
              for (let t = 0, r = n.length; t < r; t++) {
                const r = i.get(n[t]);
                void 0 === r.__webglTexture &&
                  ((r.__webglTexture = e.createTexture()), a.memory.textures++);
              }
            } else
              console.warn(
                "THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension."
              );
          if (o && t.samples > 0 && !1 === k(t)) {
            const i = d ? l : [l];
            (c.__webglMultisampledFramebuffer = e.createFramebuffer()),
              (c.__webglColorRenderbuffer = []),
              n.bindFramebuffer(36160, c.__webglMultisampledFramebuffer);
            for (let n = 0; n < i.length; n++) {
              const r = i[n];
              (c.__webglColorRenderbuffer[n] = e.createRenderbuffer()),
                e.bindRenderbuffer(36161, c.__webglColorRenderbuffer[n]);
              const a = s.convert(r.format, r.encoding),
                o = s.convert(r.type),
                l = S(
                  r.internalFormat,
                  a,
                  o,
                  r.encoding,
                  !0 === t.isXRRenderTarget
                ),
                h = B(t);
              e.renderbufferStorageMultisample(36161, h, l, t.width, t.height),
                e.framebufferRenderbuffer(
                  36160,
                  36064 + n,
                  36161,
                  c.__webglColorRenderbuffer[n]
                );
            }
            e.bindRenderbuffer(36161, null),
              t.depthBuffer &&
                ((c.__webglDepthRenderbuffer = e.createRenderbuffer()),
                z(c.__webglDepthRenderbuffer, t, !0)),
              n.bindFramebuffer(36160, null);
          }
        }
        if (u) {
          n.bindTexture(34067, h.__webglTexture), I(34067, l, p);
          for (let e = 0; e < 6; e++)
            U(c.__webglFramebuffer[e], t, l, 36064, 34069 + e);
          M(l, p) && b(34067), n.unbindTexture();
        } else if (d) {
          const e = t.texture;
          for (let r = 0, s = e.length; r < s; r++) {
            const s = e[r],
              a = i.get(s);
            n.bindTexture(3553, a.__webglTexture),
              I(3553, s, p),
              U(c.__webglFramebuffer, t, s, 36064 + r, 3553),
              M(s, p) && b(3553);
          }
          n.unbindTexture();
        } else {
          let e = 3553;
          (t.isWebGL3DRenderTarget || t.isWebGLArrayRenderTarget) &&
            (o
              ? (e = t.isWebGL3DRenderTarget ? 32879 : 35866)
              : console.error(
                  "THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2."
                )),
            n.bindTexture(e, h.__webglTexture),
            I(e, l, p),
            U(c.__webglFramebuffer, t, l, 36064, e),
            M(l, p) && b(e),
            n.unbindTexture();
        }
        t.depthBuffer && F(t);
      }),
      (this.updateRenderTargetMipmap = function (e) {
        const t = y(e) || o,
          r = !0 === e.isWebGLMultipleRenderTargets ? e.texture : [e.texture];
        for (let s = 0, a = r.length; s < a; s++) {
          const a = r[s];
          if (M(a, t)) {
            const t = e.isWebGLCubeRenderTarget ? 34067 : 3553,
              r = i.get(a).__webglTexture;
            n.bindTexture(t, r), b(t), n.unbindTexture();
          }
        }
      }),
      (this.updateMultisampleRenderTarget = function (t) {
        if (o && t.samples > 0 && !1 === k(t)) {
          const r = t.isWebGLMultipleRenderTargets ? t.texture : [t.texture],
            s = t.width,
            a = t.height;
          let o = 16384;
          const l = [],
            c = t.stencilBuffer ? 33306 : 36096,
            h = i.get(t),
            u = !0 === t.isWebGLMultipleRenderTargets;
          if (u)
            for (let t = 0; t < r.length; t++)
              n.bindFramebuffer(36160, h.__webglMultisampledFramebuffer),
                e.framebufferRenderbuffer(36160, 36064 + t, 36161, null),
                n.bindFramebuffer(36160, h.__webglFramebuffer),
                e.framebufferTexture2D(36009, 36064 + t, 3553, null, 0);
          n.bindFramebuffer(36008, h.__webglMultisampledFramebuffer),
            n.bindFramebuffer(36009, h.__webglFramebuffer);
          for (let n = 0; n < r.length; n++) {
            l.push(36064 + n), t.depthBuffer && l.push(c);
            const d = void 0 !== h.__ignoreDepthValues && h.__ignoreDepthValues;
            if (
              (!1 === d &&
                (t.depthBuffer && (o |= 256), t.stencilBuffer && (o |= 1024)),
              u &&
                e.framebufferRenderbuffer(
                  36008,
                  36064,
                  36161,
                  h.__webglColorRenderbuffer[n]
                ),
              !0 === d &&
                (e.invalidateFramebuffer(36008, [c]),
                e.invalidateFramebuffer(36009, [c])),
              u)
            ) {
              const t = i.get(r[n]).__webglTexture;
              e.framebufferTexture2D(36009, 36064, 3553, t, 0);
            }
            e.blitFramebuffer(0, 0, s, a, 0, 0, s, a, o, 9728),
              p && e.invalidateFramebuffer(36008, l);
          }
          if (
            (n.bindFramebuffer(36008, null), n.bindFramebuffer(36009, null), u)
          )
            for (let t = 0; t < r.length; t++) {
              n.bindFramebuffer(36160, h.__webglMultisampledFramebuffer),
                e.framebufferRenderbuffer(
                  36160,
                  36064 + t,
                  36161,
                  h.__webglColorRenderbuffer[t]
                );
              const s = i.get(r[t]).__webglTexture;
              n.bindFramebuffer(36160, h.__webglFramebuffer),
                e.framebufferTexture2D(36009, 36064 + t, 3553, s, 0);
            }
          n.bindFramebuffer(36009, h.__webglMultisampledFramebuffer);
        }
      }),
      (this.setupDepthRenderbuffer = F),
      (this.setupFrameBufferTexture = U),
      (this.useMultisampledRTT = k);
  }
  function Ja(e, t, n) {
    const i = n.isWebGL2;
    return {
      convert: function (n, r = null) {
        let s;
        if (n === ce) return 5121;
        if (n === _e) return 32819;
        if (n === ve) return 32820;
        if (n === he) return 5120;
        if (n === ue) return 5122;
        if (n === de) return 5123;
        if (n === pe) return 5124;
        if (n === fe) return 5125;
        if (n === me) return 5126;
        if (n === ge)
          return i
            ? 5131
            : ((s = t.get("OES_texture_half_float")),
              null !== s ? s.HALF_FLOAT_OES : null);
        if (n === ye) return 6406;
        if (n === Me) return 6408;
        if (n === be) return 6409;
        if (n === Se) return 6410;
        if (n === we) return 6402;
        if (n === Te) return 34041;
        if (n === wt)
          return (s = t.get("EXT_sRGB")), null !== s ? s.SRGB_ALPHA_EXT : null;
        if (n === Ee) return 6403;
        if (n === Ae) return 36244;
        if (n === Le) return 33319;
        if (n === Ce) return 33320;
        if (n === Re) return 36249;
        if (n === Pe || n === De || n === Ie || n === Ne)
          if (r === ft) {
            if (((s = t.get("WEBGL_compressed_texture_s3tc_srgb")), null === s))
              return null;
            if (n === Pe) return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;
            if (n === De) return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
            if (n === Ie) return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
            if (n === Ne) return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
          } else {
            if (((s = t.get("WEBGL_compressed_texture_s3tc")), null === s))
              return null;
            if (n === Pe) return s.COMPRESSED_RGB_S3TC_DXT1_EXT;
            if (n === De) return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;
            if (n === Ie) return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;
            if (n === Ne) return s.COMPRESSED_RGBA_S3TC_DXT5_EXT;
          }
        if (n === Oe || n === Ue || n === ze || n === Fe) {
          if (((s = t.get("WEBGL_compressed_texture_pvrtc")), null === s))
            return null;
          if (n === Oe) return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
          if (n === Ue) return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
          if (n === ze) return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
          if (n === Fe) return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
        }
        if (n === Be)
          return (
            (s = t.get("WEBGL_compressed_texture_etc1")),
            null !== s ? s.COMPRESSED_RGB_ETC1_WEBGL : null
          );
        if (n === ke || n === He) {
          if (((s = t.get("WEBGL_compressed_texture_etc")), null === s))
            return null;
          if (n === ke)
            return r === ft ? s.COMPRESSED_SRGB8_ETC2 : s.COMPRESSED_RGB8_ETC2;
          if (n === He)
            return r === ft
              ? s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC
              : s.COMPRESSED_RGBA8_ETC2_EAC;
        }
        if (
          n === Ge ||
          n === Ve ||
          n === We ||
          n === je ||
          n === Xe ||
          n === qe ||
          n === Ye ||
          n === Ke ||
          n === Ze ||
          n === Je ||
          n === Qe ||
          n === $e ||
          n === et ||
          n === tt
        ) {
          if (((s = t.get("WEBGL_compressed_texture_astc")), null === s))
            return null;
          if (n === Ge)
            return r === ft
              ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR
              : s.COMPRESSED_RGBA_ASTC_4x4_KHR;
          if (n === Ve)
            return r === ft
              ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR
              : s.COMPRESSED_RGBA_ASTC_5x4_KHR;
          if (n === We)
            return r === ft
              ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR
              : s.COMPRESSED_RGBA_ASTC_5x5_KHR;
          if (n === je)
            return r === ft
              ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR
              : s.COMPRESSED_RGBA_ASTC_6x5_KHR;
          if (n === Xe)
            return r === ft
              ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR
              : s.COMPRESSED_RGBA_ASTC_6x6_KHR;
          if (n === qe)
            return r === ft
              ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR
              : s.COMPRESSED_RGBA_ASTC_8x5_KHR;
          if (n === Ye)
            return r === ft
              ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR
              : s.COMPRESSED_RGBA_ASTC_8x6_KHR;
          if (n === Ke)
            return r === ft
              ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR
              : s.COMPRESSED_RGBA_ASTC_8x8_KHR;
          if (n === Ze)
            return r === ft
              ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR
              : s.COMPRESSED_RGBA_ASTC_10x5_KHR;
          if (n === Je)
            return r === ft
              ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR
              : s.COMPRESSED_RGBA_ASTC_10x6_KHR;
          if (n === Qe)
            return r === ft
              ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR
              : s.COMPRESSED_RGBA_ASTC_10x8_KHR;
          if (n === $e)
            return r === ft
              ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR
              : s.COMPRESSED_RGBA_ASTC_10x10_KHR;
          if (n === et)
            return r === ft
              ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR
              : s.COMPRESSED_RGBA_ASTC_12x10_KHR;
          if (n === tt)
            return r === ft
              ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR
              : s.COMPRESSED_RGBA_ASTC_12x12_KHR;
        }
        if (n === nt) {
          if (((s = t.get("EXT_texture_compression_bptc")), null === s))
            return null;
          if (n === nt)
            return r === ft
              ? s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT
              : s.COMPRESSED_RGBA_BPTC_UNORM_EXT;
        }
        if (n === it || n === rt || n === st || n === at) {
          if (((s = t.get("EXT_texture_compression_rgtc")), null === s))
            return null;
          if (n === nt) return s.COMPRESSED_RED_RGTC1_EXT;
          if (n === rt) return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;
          if (n === st) return s.COMPRESSED_RED_GREEN_RGTC2_EXT;
          if (n === at) return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT;
        }
        return n === xe
          ? i
            ? 34042
            : ((s = t.get("WEBGL_depth_texture")),
              null !== s ? s.UNSIGNED_INT_24_8_WEBGL : null)
          : void 0 !== e[n]
          ? e[n]
          : null;
      },
    };
  }
  class Qa extends mr {
    constructor(e = []) {
      super(), (this.isArrayCamera = !0), (this.cameras = e);
    }
  }
  class $a extends ui {
    constructor() {
      super(), (this.isGroup = !0), (this.type = "Group");
    }
  }
  const eo = { type: "move" };
  class to {
    constructor() {
      (this._targetRay = null), (this._grip = null), (this._hand = null);
    }
    getHandSpace() {
      return (
        null === this._hand &&
          ((this._hand = new $a()),
          (this._hand.matrixAutoUpdate = !1),
          (this._hand.visible = !1),
          (this._hand.joints = {}),
          (this._hand.inputState = { pinching: !1 })),
        this._hand
      );
    }
    getTargetRaySpace() {
      return (
        null === this._targetRay &&
          ((this._targetRay = new $a()),
          (this._targetRay.matrixAutoUpdate = !1),
          (this._targetRay.visible = !1),
          (this._targetRay.hasLinearVelocity = !1),
          (this._targetRay.linearVelocity = new jt()),
          (this._targetRay.hasAngularVelocity = !1),
          (this._targetRay.angularVelocity = new jt())),
        this._targetRay
      );
    }
    getGripSpace() {
      return (
        null === this._grip &&
          ((this._grip = new $a()),
          (this._grip.matrixAutoUpdate = !1),
          (this._grip.visible = !1),
          (this._grip.hasLinearVelocity = !1),
          (this._grip.linearVelocity = new jt()),
          (this._grip.hasAngularVelocity = !1),
          (this._grip.angularVelocity = new jt())),
        this._grip
      );
    }
    dispatchEvent(e) {
      return (
        null !== this._targetRay && this._targetRay.dispatchEvent(e),
        null !== this._grip && this._grip.dispatchEvent(e),
        null !== this._hand && this._hand.dispatchEvent(e),
        this
      );
    }
    connect(e) {
      if (e && e.hand) {
        const t = this._hand;
        if (t) for (const n of e.hand.values()) this._getHandJoint(t, n);
      }
      return this.dispatchEvent({ type: "connected", data: e }), this;
    }
    disconnect(e) {
      return (
        this.dispatchEvent({ type: "disconnected", data: e }),
        null !== this._targetRay && (this._targetRay.visible = !1),
        null !== this._grip && (this._grip.visible = !1),
        null !== this._hand && (this._hand.visible = !1),
        this
      );
    }
    update(e, t, n) {
      let i = null,
        r = null,
        s = null;
      const a = this._targetRay,
        o = this._grip,
        l = this._hand;
      if (e && "visible-blurred" !== t.session.visibilityState) {
        if (l && e.hand) {
          s = !0;
          for (const i of e.hand.values()) {
            const e = t.getJointPose(i, n),
              r = this._getHandJoint(l, i);
            null !== e &&
              (r.matrix.fromArray(e.transform.matrix),
              r.matrix.decompose(r.position, r.rotation, r.scale),
              (r.jointRadius = e.radius)),
              (r.visible = null !== e);
          }
          const i = l.joints["index-finger-tip"],
            r = l.joints["thumb-tip"],
            a = i.position.distanceTo(r.position),
            o = 0.02,
            c = 0.005;
          l.inputState.pinching && a > o + c
            ? ((l.inputState.pinching = !1),
              this.dispatchEvent({
                type: "pinchend",
                handedness: e.handedness,
                target: this,
              }))
            : !l.inputState.pinching &&
              a <= o - c &&
              ((l.inputState.pinching = !0),
              this.dispatchEvent({
                type: "pinchstart",
                handedness: e.handedness,
                target: this,
              }));
        } else
          null !== o &&
            e.gripSpace &&
            ((r = t.getPose(e.gripSpace, n)),
            null !== r &&
              (o.matrix.fromArray(r.transform.matrix),
              o.matrix.decompose(o.position, o.rotation, o.scale),
              r.linearVelocity
                ? ((o.hasLinearVelocity = !0),
                  o.linearVelocity.copy(r.linearVelocity))
                : (o.hasLinearVelocity = !1),
              r.angularVelocity
                ? ((o.hasAngularVelocity = !0),
                  o.angularVelocity.copy(r.angularVelocity))
                : (o.hasAngularVelocity = !1)));
        null !== a &&
          ((i = t.getPose(e.targetRaySpace, n)),
          null === i && null !== r && (i = r),
          null !== i &&
            (a.matrix.fromArray(i.transform.matrix),
            a.matrix.decompose(a.position, a.rotation, a.scale),
            i.linearVelocity
              ? ((a.hasLinearVelocity = !0),
                a.linearVelocity.copy(i.linearVelocity))
              : (a.hasLinearVelocity = !1),
            i.angularVelocity
              ? ((a.hasAngularVelocity = !0),
                a.angularVelocity.copy(i.angularVelocity))
              : (a.hasAngularVelocity = !1),
            this.dispatchEvent(eo)));
      }
      return (
        null !== a && (a.visible = null !== i),
        null !== o && (o.visible = null !== r),
        null !== l && (l.visible = null !== s),
        this
      );
    }
    _getHandJoint(e, t) {
      if (void 0 === e.joints[t.jointName]) {
        const n = new $a();
        (n.matrixAutoUpdate = !1),
          (n.visible = !1),
          (e.joints[t.jointName] = n),
          e.add(n);
      }
      return e.joints[t.jointName];
    }
  }
  class no extends ln {
    constructor(e, t, n, i, r, s, a, o, l, c) {
      if ((c = void 0 !== c ? c : we) !== we && c !== Te)
        throw new Error(
          "DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat"
        );
      void 0 === n && c === we && (n = fe),
        void 0 === n && c === Te && (n = xe),
        super(null, i, r, s, a, o, c, n, l),
        (this.isDepthTexture = !0),
        (this.image = { width: e, height: t }),
        (this.magFilter = void 0 !== a ? a : ie),
        (this.minFilter = void 0 !== o ? o : ie),
        (this.flipY = !1),
        (this.generateMipmaps = !1);
    }
  }
  class io extends Tt {
    constructor(e, t) {
      super();
      const n = this;
      let i = null,
        r = 1,
        s = null,
        a = "local-floor",
        o = 1,
        l = null,
        c = null,
        h = null,
        u = null,
        d = null,
        p = null;
      const f = t.getContextAttributes();
      let m = null,
        g = null;
      const _ = [],
        v = [],
        x = new Set(),
        y = new Map(),
        M = new mr();
      M.layers.enable(1), (M.viewport = new cn());
      const b = new mr();
      b.layers.enable(2), (b.viewport = new cn());
      const S = [M, b],
        w = new Qa();
      w.layers.enable(1), w.layers.enable(2);
      let T = null,
        E = null;
      function A(e) {
        const t = v.indexOf(e.inputSource);
        if (-1 === t) return;
        const n = _[t];
        void 0 !== n && n.dispatchEvent({ type: e.type, data: e.inputSource });
      }
      function L() {
        i.removeEventListener("select", A),
          i.removeEventListener("selectstart", A),
          i.removeEventListener("selectend", A),
          i.removeEventListener("squeeze", A),
          i.removeEventListener("squeezestart", A),
          i.removeEventListener("squeezeend", A),
          i.removeEventListener("end", L),
          i.removeEventListener("inputsourceschange", C);
        for (let e = 0; e < _.length; e++) {
          const t = v[e];
          null !== t && ((v[e] = null), _[e].disconnect(t));
        }
        (T = null),
          (E = null),
          e.setRenderTarget(m),
          (d = null),
          (u = null),
          (h = null),
          (i = null),
          (g = null),
          N.stop(),
          (n.isPresenting = !1),
          n.dispatchEvent({ type: "sessionend" });
      }
      function C(e) {
        for (let t = 0; t < e.removed.length; t++) {
          const n = e.removed[t],
            i = v.indexOf(n);
          i >= 0 && ((v[i] = null), _[i].disconnect(n));
        }
        for (let t = 0; t < e.added.length; t++) {
          const n = e.added[t];
          let i = v.indexOf(n);
          if (-1 === i) {
            for (let e = 0; e < _.length; e++) {
              if (e >= v.length) {
                v.push(n), (i = e);
                break;
              }
              if (null === v[e]) {
                (v[e] = n), (i = e);
                break;
              }
            }
            if (-1 === i) break;
          }
          const r = _[i];
          r && r.connect(n);
        }
      }
      (this.cameraAutoUpdate = !0),
        (this.enabled = !1),
        (this.isPresenting = !1),
        (this.getController = function (e) {
          let t = _[e];
          return (
            void 0 === t && ((t = new to()), (_[e] = t)), t.getTargetRaySpace()
          );
        }),
        (this.getControllerGrip = function (e) {
          let t = _[e];
          return void 0 === t && ((t = new to()), (_[e] = t)), t.getGripSpace();
        }),
        (this.getHand = function (e) {
          let t = _[e];
          return void 0 === t && ((t = new to()), (_[e] = t)), t.getHandSpace();
        }),
        (this.setFramebufferScaleFactor = function (e) {
          (r = e),
            !0 === n.isPresenting &&
              console.warn(
                "THREE.WebXRManager: Cannot change framebuffer scale while presenting."
              );
        }),
        (this.setReferenceSpaceType = function (e) {
          (a = e),
            !0 === n.isPresenting &&
              console.warn(
                "THREE.WebXRManager: Cannot change reference space type while presenting."
              );
        }),
        (this.getReferenceSpace = function () {
          return l || s;
        }),
        (this.setReferenceSpace = function (e) {
          l = e;
        }),
        (this.getBaseLayer = function () {
          return null !== u ? u : d;
        }),
        (this.getBinding = function () {
          return h;
        }),
        (this.getFrame = function () {
          return p;
        }),
        (this.getSession = function () {
          return i;
        }),
        (this.setSession = async function (c) {
          if (((i = c), null !== i)) {
            if (
              ((m = e.getRenderTarget()),
              i.addEventListener("select", A),
              i.addEventListener("selectstart", A),
              i.addEventListener("selectend", A),
              i.addEventListener("squeeze", A),
              i.addEventListener("squeezestart", A),
              i.addEventListener("squeezeend", A),
              i.addEventListener("end", L),
              i.addEventListener("inputsourceschange", C),
              !0 !== f.xrCompatible && (await t.makeXRCompatible()),
              void 0 === i.renderState.layers || !1 === e.capabilities.isWebGL2)
            ) {
              const n = {
                antialias: void 0 !== i.renderState.layers || f.antialias,
                alpha: f.alpha,
                depth: f.depth,
                stencil: f.stencil,
                framebufferScaleFactor: r,
              };
              (d = new XRWebGLLayer(i, t, n)),
                i.updateRenderState({ baseLayer: d }),
                (g = new hn(d.framebufferWidth, d.framebufferHeight, {
                  format: Me,
                  type: ce,
                  encoding: e.outputEncoding,
                  stencilBuffer: f.stencil,
                }));
            } else {
              let n = null,
                s = null,
                a = null;
              f.depth &&
                ((a = f.stencil ? 35056 : 33190),
                (n = f.stencil ? Te : we),
                (s = f.stencil ? xe : fe));
              const o = { colorFormat: 32856, depthFormat: a, scaleFactor: r };
              (h = new XRWebGLBinding(i, t)),
                (u = h.createProjectionLayer(o)),
                i.updateRenderState({ layers: [u] }),
                (g = new hn(u.textureWidth, u.textureHeight, {
                  format: Me,
                  type: ce,
                  depthTexture: new no(
                    u.textureWidth,
                    u.textureHeight,
                    s,
                    void 0,
                    void 0,
                    void 0,
                    void 0,
                    void 0,
                    void 0,
                    n
                  ),
                  stencilBuffer: f.stencil,
                  encoding: e.outputEncoding,
                  samples: f.antialias ? 4 : 0,
                })),
                (e.properties.get(g).__ignoreDepthValues = u.ignoreDepthValues);
            }
            (g.isXRRenderTarget = !0),
              this.setFoveation(o),
              (l = null),
              (s = await i.requestReferenceSpace(a)),
              N.setContext(i),
              N.start(),
              (n.isPresenting = !0),
              n.dispatchEvent({ type: "sessionstart" });
          }
        });
      const R = new jt(),
        P = new jt();
      function D(e, t) {
        null === t
          ? e.matrixWorld.copy(e.matrix)
          : e.matrixWorld.multiplyMatrices(t.matrixWorld, e.matrix),
          e.matrixWorldInverse.copy(e.matrixWorld).invert();
      }
      (this.updateCamera = function (e) {
        if (null === i) return;
        (w.near = b.near = M.near = e.near),
          (w.far = b.far = M.far = e.far),
          (T === w.near && E === w.far) ||
            (i.updateRenderState({ depthNear: w.near, depthFar: w.far }),
            (T = w.near),
            (E = w.far));
        const t = e.parent,
          n = w.cameras;
        D(w, t);
        for (let e = 0; e < n.length; e++) D(n[e], t);
        w.matrixWorld.decompose(w.position, w.quaternion, w.scale),
          e.matrix.copy(w.matrix),
          e.matrix.decompose(e.position, e.quaternion, e.scale);
        const r = e.children;
        for (let e = 0, t = r.length; e < t; e++) r[e].updateMatrixWorld(!0);
        2 === n.length
          ? (function (e, t, n) {
              R.setFromMatrixPosition(t.matrixWorld),
                P.setFromMatrixPosition(n.matrixWorld);
              const i = R.distanceTo(P),
                r = t.projectionMatrix.elements,
                s = n.projectionMatrix.elements,
                a = r[14] / (r[10] - 1),
                o = r[14] / (r[10] + 1),
                l = (r[9] + 1) / r[5],
                c = (r[9] - 1) / r[5],
                h = (r[8] - 1) / r[0],
                u = (s[8] + 1) / s[0],
                d = a * h,
                p = a * u,
                f = i / (-h + u),
                m = f * -h;
              t.matrixWorld.decompose(e.position, e.quaternion, e.scale),
                e.translateX(m),
                e.translateZ(f),
                e.matrixWorld.compose(e.position, e.quaternion, e.scale),
                e.matrixWorldInverse.copy(e.matrixWorld).invert();
              const g = a + f,
                _ = o + f,
                v = d - m,
                x = p + (i - m),
                y = ((l * o) / _) * g,
                M = ((c * o) / _) * g;
              e.projectionMatrix.makePerspective(v, x, y, M, g, _);
            })(w, M, b)
          : w.projectionMatrix.copy(M.projectionMatrix);
      }),
        (this.getCamera = function () {
          return w;
        }),
        (this.getFoveation = function () {
          if (null !== u || null !== d) return o;
        }),
        (this.setFoveation = function (e) {
          (o = e),
            null !== u && (u.fixedFoveation = e),
            null !== d && void 0 !== d.fixedFoveation && (d.fixedFoveation = e);
        }),
        (this.getPlanes = function () {
          return x;
        });
      let I = null;
      const N = new Ar();
      N.setAnimationLoop(function (t, i) {
        if (((c = i.getViewerPose(l || s)), (p = i), null !== c)) {
          const t = c.views;
          null !== d &&
            (e.setRenderTargetFramebuffer(g, d.framebuffer),
            e.setRenderTarget(g));
          let n = !1;
          t.length !== w.cameras.length && ((w.cameras.length = 0), (n = !0));
          for (let i = 0; i < t.length; i++) {
            const r = t[i];
            let s = null;
            if (null !== d) s = d.getViewport(r);
            else {
              const t = h.getViewSubImage(u, r);
              (s = t.viewport),
                0 === i &&
                  (e.setRenderTargetTextures(
                    g,
                    t.colorTexture,
                    u.ignoreDepthValues ? void 0 : t.depthStencilTexture
                  ),
                  e.setRenderTarget(g));
            }
            let a = S[i];
            void 0 === a &&
              ((a = new mr()),
              a.layers.enable(i),
              (a.viewport = new cn()),
              (S[i] = a)),
              a.matrix.fromArray(r.transform.matrix),
              a.projectionMatrix.fromArray(r.projectionMatrix),
              a.viewport.set(s.x, s.y, s.width, s.height),
              0 === i && w.matrix.copy(a.matrix),
              !0 === n && w.cameras.push(a);
          }
        }
        for (let e = 0; e < _.length; e++) {
          const t = v[e],
            n = _[e];
          null !== t && void 0 !== n && n.update(t, i, l || s);
        }
        if ((I && I(t, i), i.detectedPlanes)) {
          n.dispatchEvent({ type: "planesdetected", data: i.detectedPlanes });
          let e = null;
          for (const t of x)
            i.detectedPlanes.has(t) || (null === e && (e = []), e.push(t));
          if (null !== e)
            for (const t of e)
              x.delete(t),
                y.delete(t),
                n.dispatchEvent({ type: "planeremoved", data: t });
          for (const e of i.detectedPlanes)
            if (x.has(e)) {
              const t = y.get(e);
              e.lastChangedTime > t &&
                (y.set(e, e.lastChangedTime),
                n.dispatchEvent({ type: "planechanged", data: e }));
            } else
              x.add(e),
                y.set(e, i.lastChangedTime),
                n.dispatchEvent({ type: "planeadded", data: e });
        }
        p = null;
      }),
        (this.setAnimationLoop = function (e) {
          I = e;
        }),
        (this.dispose = function () {});
    }
  }
  function ro(e, t) {
    function n(n, i) {
      (n.opacity.value = i.opacity),
        i.color && n.diffuse.value.copy(i.color),
        i.emissive &&
          n.emissive.value.copy(i.emissive).multiplyScalar(i.emissiveIntensity),
        i.map && (n.map.value = i.map),
        i.alphaMap && (n.alphaMap.value = i.alphaMap),
        i.bumpMap &&
          ((n.bumpMap.value = i.bumpMap),
          (n.bumpScale.value = i.bumpScale),
          i.side === l && (n.bumpScale.value *= -1)),
        i.displacementMap &&
          ((n.displacementMap.value = i.displacementMap),
          (n.displacementScale.value = i.displacementScale),
          (n.displacementBias.value = i.displacementBias)),
        i.emissiveMap && (n.emissiveMap.value = i.emissiveMap),
        i.normalMap &&
          ((n.normalMap.value = i.normalMap),
          n.normalScale.value.copy(i.normalScale),
          i.side === l && n.normalScale.value.negate()),
        i.specularMap && (n.specularMap.value = i.specularMap),
        i.alphaTest > 0 && (n.alphaTest.value = i.alphaTest);
      const r = t.get(i).envMap;
      if (
        (r &&
          ((n.envMap.value = r),
          (n.flipEnvMap.value =
            r.isCubeTexture && !1 === r.isRenderTargetTexture ? -1 : 1),
          (n.reflectivity.value = i.reflectivity),
          (n.ior.value = i.ior),
          (n.refractionRatio.value = i.refractionRatio)),
        i.lightMap)
      ) {
        n.lightMap.value = i.lightMap;
        const t = !0 === e.useLegacyLights ? Math.PI : 1;
        n.lightMapIntensity.value = i.lightMapIntensity * t;
      }
      let s, a;
      i.aoMap &&
        ((n.aoMap.value = i.aoMap),
        (n.aoMapIntensity.value = i.aoMapIntensity)),
        i.map
          ? (s = i.map)
          : i.specularMap
          ? (s = i.specularMap)
          : i.displacementMap
          ? (s = i.displacementMap)
          : i.normalMap
          ? (s = i.normalMap)
          : i.bumpMap
          ? (s = i.bumpMap)
          : i.roughnessMap
          ? (s = i.roughnessMap)
          : i.metalnessMap
          ? (s = i.metalnessMap)
          : i.alphaMap
          ? (s = i.alphaMap)
          : i.emissiveMap
          ? (s = i.emissiveMap)
          : i.clearcoatMap
          ? (s = i.clearcoatMap)
          : i.clearcoatNormalMap
          ? (s = i.clearcoatNormalMap)
          : i.clearcoatRoughnessMap
          ? (s = i.clearcoatRoughnessMap)
          : i.iridescenceMap
          ? (s = i.iridescenceMap)
          : i.iridescenceThicknessMap
          ? (s = i.iridescenceThicknessMap)
          : i.specularIntensityMap
          ? (s = i.specularIntensityMap)
          : i.specularColorMap
          ? (s = i.specularColorMap)
          : i.transmissionMap
          ? (s = i.transmissionMap)
          : i.thicknessMap
          ? (s = i.thicknessMap)
          : i.sheenColorMap
          ? (s = i.sheenColorMap)
          : i.sheenRoughnessMap && (s = i.sheenRoughnessMap),
        void 0 !== s &&
          (s.isWebGLRenderTarget && (s = s.texture),
          !0 === s.matrixAutoUpdate && s.updateMatrix(),
          n.uvTransform.value.copy(s.matrix)),
        i.aoMap ? (a = i.aoMap) : i.lightMap && (a = i.lightMap),
        void 0 !== a &&
          (a.isWebGLRenderTarget && (a = a.texture),
          !0 === a.matrixAutoUpdate && a.updateMatrix(),
          n.uv2Transform.value.copy(a.matrix));
    }
    return {
      refreshFogUniforms: function (t, n) {
        n.color.getRGB(t.fogColor.value, ur(e)),
          n.isFog
            ? ((t.fogNear.value = n.near), (t.fogFar.value = n.far))
            : n.isFogExp2 && (t.fogDensity.value = n.density);
      },
      refreshMaterialUniforms: function (e, i, r, s, a) {
        i.isMeshBasicMaterial || i.isMeshLambertMaterial
          ? n(e, i)
          : i.isMeshToonMaterial
          ? (n(e, i),
            (function (e, t) {
              t.gradientMap && (e.gradientMap.value = t.gradientMap);
            })(e, i))
          : i.isMeshPhongMaterial
          ? (n(e, i),
            (function (e, t) {
              e.specular.value.copy(t.specular),
                (e.shininess.value = Math.max(t.shininess, 1e-4));
            })(e, i))
          : i.isMeshStandardMaterial
          ? (n(e, i),
            (function (e, n) {
              (e.roughness.value = n.roughness),
                (e.metalness.value = n.metalness),
                n.roughnessMap && (e.roughnessMap.value = n.roughnessMap),
                n.metalnessMap && (e.metalnessMap.value = n.metalnessMap);
              t.get(n).envMap && (e.envMapIntensity.value = n.envMapIntensity);
            })(e, i),
            i.isMeshPhysicalMaterial &&
              (function (e, t, n) {
                (e.ior.value = t.ior),
                  t.sheen > 0 &&
                    (e.sheenColor.value
                      .copy(t.sheenColor)
                      .multiplyScalar(t.sheen),
                    (e.sheenRoughness.value = t.sheenRoughness),
                    t.sheenColorMap &&
                      (e.sheenColorMap.value = t.sheenColorMap),
                    t.sheenRoughnessMap &&
                      (e.sheenRoughnessMap.value = t.sheenRoughnessMap)),
                  t.clearcoat > 0 &&
                    ((e.clearcoat.value = t.clearcoat),
                    (e.clearcoatRoughness.value = t.clearcoatRoughness),
                    t.clearcoatMap && (e.clearcoatMap.value = t.clearcoatMap),
                    t.clearcoatRoughnessMap &&
                      (e.clearcoatRoughnessMap.value = t.clearcoatRoughnessMap),
                    t.clearcoatNormalMap &&
                      (e.clearcoatNormalScale.value.copy(
                        t.clearcoatNormalScale
                      ),
                      (e.clearcoatNormalMap.value = t.clearcoatNormalMap),
                      t.side === l && e.clearcoatNormalScale.value.negate())),
                  t.iridescence > 0 &&
                    ((e.iridescence.value = t.iridescence),
                    (e.iridescenceIOR.value = t.iridescenceIOR),
                    (e.iridescenceThicknessMinimum.value =
                      t.iridescenceThicknessRange[0]),
                    (e.iridescenceThicknessMaximum.value =
                      t.iridescenceThicknessRange[1]),
                    t.iridescenceMap &&
                      (e.iridescenceMap.value = t.iridescenceMap),
                    t.iridescenceThicknessMap &&
                      (e.iridescenceThicknessMap.value =
                        t.iridescenceThicknessMap)),
                  t.transmission > 0 &&
                    ((e.transmission.value = t.transmission),
                    (e.transmissionSamplerMap.value = n.texture),
                    e.transmissionSamplerSize.value.set(n.width, n.height),
                    t.transmissionMap &&
                      (e.transmissionMap.value = t.transmissionMap),
                    (e.thickness.value = t.thickness),
                    t.thicknessMap && (e.thicknessMap.value = t.thicknessMap),
                    (e.attenuationDistance.value = t.attenuationDistance),
                    e.attenuationColor.value.copy(t.attenuationColor)),
                  (e.specularIntensity.value = t.specularIntensity),
                  e.specularColor.value.copy(t.specularColor),
                  t.specularIntensityMap &&
                    (e.specularIntensityMap.value = t.specularIntensityMap),
                  t.specularColorMap &&
                    (e.specularColorMap.value = t.specularColorMap);
              })(e, i, a))
          : i.isMeshMatcapMaterial
          ? (n(e, i),
            (function (e, t) {
              t.matcap && (e.matcap.value = t.matcap);
            })(e, i))
          : i.isMeshDepthMaterial
          ? n(e, i)
          : i.isMeshDistanceMaterial
          ? (n(e, i),
            (function (e, t) {
              e.referencePosition.value.copy(t.referencePosition),
                (e.nearDistance.value = t.nearDistance),
                (e.farDistance.value = t.farDistance);
            })(e, i))
          : i.isMeshNormalMaterial
          ? n(e, i)
          : i.isLineBasicMaterial
          ? ((function (e, t) {
              e.diffuse.value.copy(t.color), (e.opacity.value = t.opacity);
            })(e, i),
            i.isLineDashedMaterial &&
              (function (e, t) {
                (e.dashSize.value = t.dashSize),
                  (e.totalSize.value = t.dashSize + t.gapSize),
                  (e.scale.value = t.scale);
              })(e, i))
          : i.isPointsMaterial
          ? (function (e, t, n, i) {
              let r;
              e.diffuse.value.copy(t.color),
                (e.opacity.value = t.opacity),
                (e.size.value = t.size * n),
                (e.scale.value = 0.5 * i),
                t.map && (e.map.value = t.map),
                t.alphaMap && (e.alphaMap.value = t.alphaMap),
                t.alphaTest > 0 && (e.alphaTest.value = t.alphaTest),
                t.map ? (r = t.map) : t.alphaMap && (r = t.alphaMap),
                void 0 !== r &&
                  (!0 === r.matrixAutoUpdate && r.updateMatrix(),
                  e.uvTransform.value.copy(r.matrix));
            })(e, i, r, s)
          : i.isSpriteMaterial
          ? (function (e, t) {
              let n;
              e.diffuse.value.copy(t.color),
                (e.opacity.value = t.opacity),
                (e.rotation.value = t.rotation),
                t.map && (e.map.value = t.map),
                t.alphaMap && (e.alphaMap.value = t.alphaMap),
                t.alphaTest > 0 && (e.alphaTest.value = t.alphaTest),
                t.map ? (n = t.map) : t.alphaMap && (n = t.alphaMap),
                void 0 !== n &&
                  (!0 === n.matrixAutoUpdate && n.updateMatrix(),
                  e.uvTransform.value.copy(n.matrix));
            })(e, i)
          : i.isShadowMaterial
          ? (e.color.value.copy(i.color), (e.opacity.value = i.opacity))
          : i.isShaderMaterial && (i.uniformsNeedUpdate = !1);
      },
    };
  }
  function so(e, t, n, i) {
    let r = {},
      s = {},
      a = [];
    const o = n.isWebGL2 ? e.getParameter(35375) : 0;
    function l(e, t, n) {
      const i = e.value;
      if (void 0 === n[t]) {
        if ("number" == typeof i) n[t] = i;
        else {
          const e = Array.isArray(i) ? i : [i],
            r = [];
          for (let t = 0; t < e.length; t++) r.push(e[t].clone());
          n[t] = r;
        }
        return !0;
      }
      if ("number" == typeof i) {
        if (n[t] !== i) return (n[t] = i), !0;
      } else {
        const e = Array.isArray(n[t]) ? n[t] : [n[t]],
          r = Array.isArray(i) ? i : [i];
        for (let t = 0; t < e.length; t++) {
          const n = e[t];
          if (!1 === n.equals(r[t])) return n.copy(r[t]), !0;
        }
      }
      return !1;
    }
    function c(e) {
      const t = { boundary: 0, storage: 0 };
      return (
        "number" == typeof e
          ? ((t.boundary = 4), (t.storage = 4))
          : e.isVector2
          ? ((t.boundary = 8), (t.storage = 8))
          : e.isVector3 || e.isColor
          ? ((t.boundary = 16), (t.storage = 12))
          : e.isVector4
          ? ((t.boundary = 16), (t.storage = 16))
          : e.isMatrix3
          ? ((t.boundary = 48), (t.storage = 48))
          : e.isMatrix4
          ? ((t.boundary = 64), (t.storage = 64))
          : e.isTexture
          ? console.warn(
              "THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."
            )
          : console.warn(
              "THREE.WebGLRenderer: Unsupported uniform value type.",
              e
            ),
        t
      );
    }
    function h(t) {
      const n = t.target;
      n.removeEventListener("dispose", h);
      const i = a.indexOf(n.__bindingPointIndex);
      a.splice(i, 1), e.deleteBuffer(r[n.id]), delete r[n.id], delete s[n.id];
    }
    return {
      bind: function (e, t) {
        const n = t.program;
        i.uniformBlockBinding(e, n);
      },
      update: function (n, u) {
        let d = r[n.id];
        void 0 === d &&
          ((function (e) {
            const t = e.uniforms;
            let n = 0;
            let i = 0;
            for (let e = 0, r = t.length; e < r; e++) {
              const r = t[e],
                s = { boundary: 0, storage: 0 },
                a = Array.isArray(r.value) ? r.value : [r.value];
              for (let e = 0, t = a.length; e < t; e++) {
                const t = c(a[e]);
                (s.boundary += t.boundary), (s.storage += t.storage);
              }
              (r.__data = new Float32Array(
                s.storage / Float32Array.BYTES_PER_ELEMENT
              )),
                (r.__offset = n),
                e > 0 &&
                  ((i = n % 16),
                  0 !== i &&
                    16 - i - s.boundary < 0 &&
                    ((n += 16 - i), (r.__offset = n))),
                (n += s.storage);
            }
            (i = n % 16),
              i > 0 && (n += 16 - i),
              (e.__size = n),
              (e.__cache = {});
          })(n),
          (d = (function (t) {
            const n = (function () {
              for (let e = 0; e < o; e++)
                if (-1 === a.indexOf(e)) return a.push(e), e;
              return (
                console.error(
                  "THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."
                ),
                0
              );
            })();
            t.__bindingPointIndex = n;
            const i = e.createBuffer(),
              r = t.__size,
              s = t.usage;
            return (
              e.bindBuffer(35345, i),
              e.bufferData(35345, r, s),
              e.bindBuffer(35345, null),
              e.bindBufferBase(35345, n, i),
              i
            );
          })(n)),
          (r[n.id] = d),
          n.addEventListener("dispose", h));
        const p = u.program;
        i.updateUBOMapping(n, p);
        const f = t.render.frame;
        s[n.id] !== f &&
          ((function (t) {
            const n = r[t.id],
              i = t.uniforms,
              s = t.__cache;
            e.bindBuffer(35345, n);
            for (let t = 0, n = i.length; t < n; t++) {
              const n = i[t];
              if (!0 === l(n, t, s)) {
                const t = n.__offset,
                  i = Array.isArray(n.value) ? n.value : [n.value];
                let r = 0;
                for (let s = 0; s < i.length; s++) {
                  const a = i[s],
                    o = c(a);
                  "number" == typeof a
                    ? ((n.__data[0] = a),
                      e.bufferSubData(35345, t + r, n.__data))
                    : a.isMatrix3
                    ? ((n.__data[0] = a.elements[0]),
                      (n.__data[1] = a.elements[1]),
                      (n.__data[2] = a.elements[2]),
                      (n.__data[3] = a.elements[0]),
                      (n.__data[4] = a.elements[3]),
                      (n.__data[5] = a.elements[4]),
                      (n.__data[6] = a.elements[5]),
                      (n.__data[7] = a.elements[0]),
                      (n.__data[8] = a.elements[6]),
                      (n.__data[9] = a.elements[7]),
                      (n.__data[10] = a.elements[8]),
                      (n.__data[11] = a.elements[0]))
                    : (a.toArray(n.__data, r),
                      (r += o.storage / Float32Array.BYTES_PER_ELEMENT));
                }
                e.bufferSubData(35345, t, n.__data);
              }
            }
            e.bindBuffer(35345, null);
          })(n),
          (s[n.id] = f));
      },
      dispose: function () {
        for (const t in r) e.deleteBuffer(r[t]);
        (a = []), (r = {}), (s = {});
      },
    };
  }
  function ao(t = {}) {
    this.isWebGLRenderer = !0;
    const n =
        void 0 !== t.canvas
          ? t.canvas
          : (function () {
              const e = Vt("canvas");
              return (e.style.display = "block"), e;
            })(),
      i = void 0 !== t.context ? t.context : null,
      r = void 0 === t.depth || t.depth,
      s = void 0 === t.stencil || t.stencil,
      a = void 0 !== t.antialias && t.antialias,
      h = void 0 === t.premultipliedAlpha || t.premultipliedAlpha,
      u = void 0 !== t.preserveDrawingBuffer && t.preserveDrawingBuffer,
      d = void 0 !== t.powerPreference ? t.powerPreference : "default",
      p =
        void 0 !== t.failIfMajorPerformanceCaveat &&
        t.failIfMajorPerformanceCaveat;
    let f;
    f =
      null !== i
        ? i.getContextAttributes().alpha
        : void 0 !== t.alpha && t.alpha;
    let m = null,
      g = null;
    const _ = [],
      v = [];
    (this.domElement = n),
      (this.debug = { checkShaderErrors: !0 }),
      (this.autoClear = !0),
      (this.autoClearColor = !0),
      (this.autoClearDepth = !0),
      (this.autoClearStencil = !0),
      (this.sortObjects = !0),
      (this.clippingPlanes = []),
      (this.localClippingEnabled = !1),
      (this.outputEncoding = pt),
      (this.useLegacyLights = !0),
      (this.toneMapping = V),
      (this.toneMappingExposure = 1);
    const x = this;
    let y = !1,
      M = 0,
      b = 0,
      S = null,
      w = -1,
      T = null;
    const E = new cn(),
      A = new cn();
    let L = null,
      C = n.width,
      R = n.height,
      P = 1,
      D = null,
      I = null;
    const N = new cn(0, 0, C, R),
      O = new cn(0, 0, C, R);
    let U = !1;
    const z = new Er();
    let F = !1,
      B = !1,
      k = null;
    const H = new kn(),
      G = new jt(),
      W = {
        background: null,
        fog: null,
        environment: null,
        overrideMaterial: null,
        isScene: !0,
      };
    function j() {
      return null === S ? P : 1;
    }
    let X,
      q,
      Y,
      K,
      Z,
      J,
      Q,
      $,
      ee,
      te,
      ne,
      ie,
      re,
      se,
      ae,
      oe,
      he,
      ue,
      de,
      pe,
      fe,
      _e,
      ve,
      xe,
      ye = i;
    function be(e, t) {
      for (let i = 0; i < e.length; i++) {
        const r = e[i],
          s = n.getContext(r, t);
        if (null !== s) return s;
      }
      return null;
    }
    try {
      const t = {
        alpha: !0,
        depth: r,
        stencil: s,
        antialias: a,
        premultipliedAlpha: h,
        preserveDrawingBuffer: u,
        powerPreference: d,
        failIfMajorPerformanceCaveat: p,
      };
      if (
        ("setAttribute" in n && n.setAttribute("data-engine", `three.js r${e}`),
        n.addEventListener("webglcontextlost", Te, !1),
        n.addEventListener("webglcontextrestored", Ee, !1),
        n.addEventListener("webglcontextcreationerror", Ae, !1),
        null === ye)
      ) {
        const e = ["webgl2", "webgl", "experimental-webgl"];
        if (
          (!0 === x.isWebGL1Renderer && e.shift(), (ye = be(e, t)), null === ye)
        )
          throw be(e)
            ? new Error(
                "Error creating WebGL context with your selected attributes."
              )
            : new Error("Error creating WebGL context.");
      }
      void 0 === ye.getShaderPrecisionFormat &&
        (ye.getShaderPrecisionFormat = function () {
          return { rangeMin: 1, rangeMax: 1, precision: 1 };
        });
    } catch (e) {
      throw (console.error("THREE.WebGLRenderer: " + e.message), e);
    }
    function Se() {
      (X = new ts(ye)),
        (q = new zr(ye, X, t)),
        X.init(q),
        (_e = new Ja(ye, X, q)),
        (Y = new Ka(ye, X, q)),
        (K = new rs()),
        (Z = new Ia()),
        (J = new Za(ye, X, Y, Z, q, _e, K)),
        (Q = new Br(x)),
        ($ = new es(x)),
        (ee = new Lr(ye, q)),
        (ve = new Or(ye, X, ee, q)),
        (te = new ns(ye, ee, K, ve)),
        (ne = new ls(ye, te, ee, K)),
        (de = new os(ye, q, J)),
        (oe = new Fr(Z)),
        (ie = new Da(x, Q, $, X, q, ve, oe)),
        (re = new ro(x, Z)),
        (se = new za()),
        (ae = new Va(X, q)),
        (ue = new Nr(x, Q, $, Y, ne, f, h)),
        (he = new Ya(x, ne, q)),
        (xe = new so(ye, K, q, Y)),
        (pe = new Ur(ye, X, K, q)),
        (fe = new is(ye, X, K, q)),
        (K.programs = ie.programs),
        (x.capabilities = q),
        (x.extensions = X),
        (x.properties = Z),
        (x.renderLists = se),
        (x.shadowMap = he),
        (x.state = Y),
        (x.info = K);
    }
    Se();
    const we = new io(x, ye);
    function Te(e) {
      e.preventDefault(),
        console.log("THREE.WebGLRenderer: Context Lost."),
        (y = !0);
    }
    function Ee() {
      console.log("THREE.WebGLRenderer: Context Restored."), (y = !1);
      const e = K.autoReset,
        t = he.enabled,
        n = he.autoUpdate,
        i = he.needsUpdate,
        r = he.type;
      Se(),
        (K.autoReset = e),
        (he.enabled = t),
        (he.autoUpdate = n),
        (he.needsUpdate = i),
        (he.type = r);
    }
    function Ae(e) {
      console.error(
        "THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",
        e.statusMessage
      );
    }
    function Le(e) {
      const t = e.target;
      t.removeEventListener("dispose", Le),
        (function (e) {
          (function (e) {
            const t = Z.get(e).programs;
            void 0 !== t &&
              (t.forEach(function (e) {
                ie.releaseProgram(e);
              }),
              e.isShaderMaterial && ie.releaseShaderCache(e));
          })(e),
            Z.remove(e);
        })(t);
    }
    (this.xr = we),
      (this.getContext = function () {
        return ye;
      }),
      (this.getContextAttributes = function () {
        return ye.getContextAttributes();
      }),
      (this.forceContextLoss = function () {
        const e = X.get("WEBGL_lose_context");
        e && e.loseContext();
      }),
      (this.forceContextRestore = function () {
        const e = X.get("WEBGL_lose_context");
        e && e.restoreContext();
      }),
      (this.getPixelRatio = function () {
        return P;
      }),
      (this.setPixelRatio = function (e) {
        void 0 !== e && ((P = e), this.setSize(C, R, !1));
      }),
      (this.getSize = function (e) {
        return e.set(C, R);
      }),
      (this.setSize = function (e, t, i = !0) {
        we.isPresenting
          ? console.warn(
              "THREE.WebGLRenderer: Can't change size while VR device is presenting."
            )
          : ((C = e),
            (R = t),
            (n.width = Math.floor(e * P)),
            (n.height = Math.floor(t * P)),
            !0 === i &&
              ((n.style.width = e + "px"), (n.style.height = t + "px")),
            this.setViewport(0, 0, e, t));
      }),
      (this.getDrawingBufferSize = function (e) {
        return e.set(C * P, R * P).floor();
      }),
      (this.setDrawingBufferSize = function (e, t, i) {
        (C = e),
          (R = t),
          (P = i),
          (n.width = Math.floor(e * i)),
          (n.height = Math.floor(t * i)),
          this.setViewport(0, 0, e, t);
      }),
      (this.getCurrentViewport = function (e) {
        return e.copy(E);
      }),
      (this.getViewport = function (e) {
        return e.copy(N);
      }),
      (this.setViewport = function (e, t, n, i) {
        e.isVector4 ? N.set(e.x, e.y, e.z, e.w) : N.set(e, t, n, i),
          Y.viewport(E.copy(N).multiplyScalar(P).floor());
      }),
      (this.getScissor = function (e) {
        return e.copy(O);
      }),
      (this.setScissor = function (e, t, n, i) {
        e.isVector4 ? O.set(e.x, e.y, e.z, e.w) : O.set(e, t, n, i),
          Y.scissor(A.copy(O).multiplyScalar(P).floor());
      }),
      (this.getScissorTest = function () {
        return U;
      }),
      (this.setScissorTest = function (e) {
        Y.setScissorTest((U = e));
      }),
      (this.setOpaqueSort = function (e) {
        D = e;
      }),
      (this.setTransparentSort = function (e) {
        I = e;
      }),
      (this.getClearColor = function (e) {
        return e.copy(ue.getClearColor());
      }),
      (this.setClearColor = function () {
        ue.setClearColor.apply(ue, arguments);
      }),
      (this.getClearAlpha = function () {
        return ue.getClearAlpha();
      }),
      (this.setClearAlpha = function () {
        ue.setClearAlpha.apply(ue, arguments);
      }),
      (this.clear = function (e = !0, t = !0, n = !0) {
        let i = 0;
        e && (i |= 16384), t && (i |= 256), n && (i |= 1024), ye.clear(i);
      }),
      (this.clearColor = function () {
        this.clear(!0, !1, !1);
      }),
      (this.clearDepth = function () {
        this.clear(!1, !0, !1);
      }),
      (this.clearStencil = function () {
        this.clear(!1, !1, !0);
      }),
      (this.dispose = function () {
        n.removeEventListener("webglcontextlost", Te, !1),
          n.removeEventListener("webglcontextrestored", Ee, !1),
          n.removeEventListener("webglcontextcreationerror", Ae, !1),
          se.dispose(),
          ae.dispose(),
          Z.dispose(),
          Q.dispose(),
          $.dispose(),
          ne.dispose(),
          ve.dispose(),
          xe.dispose(),
          ie.dispose(),
          we.dispose(),
          we.removeEventListener("sessionstart", Re),
          we.removeEventListener("sessionend", Pe),
          k && (k.dispose(), (k = null)),
          De.stop();
      }),
      (this.renderBufferDirect = function (e, t, n, i, r, s) {
        null === t && (t = W);
        const a = r.isMesh && r.matrixWorld.determinant() < 0,
          o = (function (e, t, n, i, r) {
            !0 !== t.isScene && (t = W), J.resetTextureUnits();
            const s = t.fog,
              a = i.isMeshStandardMaterial ? t.environment : null,
              o =
                null === S
                  ? x.outputEncoding
                  : !0 === S.isXRRenderTarget
                  ? S.texture.encoding
                  : pt,
              l = (i.isMeshStandardMaterial ? $ : Q).get(i.envMap || a),
              c =
                !0 === i.vertexColors &&
                !!n.attributes.color &&
                4 === n.attributes.color.itemSize,
              h = !!i.normalMap && !!n.attributes.tangent,
              u = !!n.morphAttributes.position,
              d = !!n.morphAttributes.normal,
              p = !!n.morphAttributes.color,
              f = i.toneMapped ? x.toneMapping : V,
              m =
                n.morphAttributes.position ||
                n.morphAttributes.normal ||
                n.morphAttributes.color,
              _ = void 0 !== m ? m.length : 0,
              v = Z.get(i),
              y = g.state.lights;
            if (!0 === F && (!0 === B || e !== T)) {
              const t = e === T && i.id === w;
              oe.setState(i, e, t);
            }
            let M = !1;
            i.version === v.__version
              ? (v.needsLights && v.lightsStateVersion !== y.state.version) ||
                v.outputEncoding !== o ||
                (r.isInstancedMesh && !1 === v.instancing)
                ? (M = !0)
                : r.isInstancedMesh || !0 !== v.instancing
                ? r.isSkinnedMesh && !1 === v.skinning
                  ? (M = !0)
                  : r.isSkinnedMesh || !0 !== v.skinning
                  ? v.envMap !== l || (!0 === i.fog && v.fog !== s)
                    ? (M = !0)
                    : void 0 === v.numClippingPlanes ||
                      (v.numClippingPlanes === oe.numPlanes &&
                        v.numIntersection === oe.numIntersection)
                    ? (v.vertexAlphas !== c ||
                        v.vertexTangents !== h ||
                        v.morphTargets !== u ||
                        v.morphNormals !== d ||
                        v.morphColors !== p ||
                        v.toneMapping !== f ||
                        (!0 === q.isWebGL2 && v.morphTargetsCount !== _)) &&
                      (M = !0)
                    : (M = !0)
                  : (M = !0)
                : (M = !0)
              : ((M = !0), (v.__version = i.version));
            let b = v.currentProgram;
            !0 === M && (b = ze(i, t, r));
            let E = !1,
              A = !1,
              L = !1;
            const C = b.getUniforms(),
              D = v.uniforms;
            if (
              (Y.useProgram(b.program) && ((E = !0), (A = !0), (L = !0)),
              i.id !== w && ((w = i.id), (A = !0)),
              E || T !== e)
            ) {
              if (
                (C.setValue(ye, "projectionMatrix", e.projectionMatrix),
                q.logarithmicDepthBuffer &&
                  C.setValue(
                    ye,
                    "logDepthBufFC",
                    2 / (Math.log(e.far + 1) / Math.LN2)
                  ),
                T !== e && ((T = e), (A = !0), (L = !0)),
                i.isShaderMaterial ||
                  i.isMeshPhongMaterial ||
                  i.isMeshToonMaterial ||
                  i.isMeshStandardMaterial ||
                  i.envMap)
              ) {
                const t = C.map.cameraPosition;
                void 0 !== t &&
                  t.setValue(ye, G.setFromMatrixPosition(e.matrixWorld));
              }
              (i.isMeshPhongMaterial ||
                i.isMeshToonMaterial ||
                i.isMeshLambertMaterial ||
                i.isMeshBasicMaterial ||
                i.isMeshStandardMaterial ||
                i.isShaderMaterial) &&
                C.setValue(ye, "isOrthographic", !0 === e.isOrthographicCamera),
                (i.isMeshPhongMaterial ||
                  i.isMeshToonMaterial ||
                  i.isMeshLambertMaterial ||
                  i.isMeshBasicMaterial ||
                  i.isMeshStandardMaterial ||
                  i.isShaderMaterial ||
                  i.isShadowMaterial ||
                  r.isSkinnedMesh) &&
                  C.setValue(ye, "viewMatrix", e.matrixWorldInverse);
            }
            if (r.isSkinnedMesh) {
              C.setOptional(ye, r, "bindMatrix"),
                C.setOptional(ye, r, "bindMatrixInverse");
              const e = r.skeleton;
              e &&
                (q.floatVertexTextures
                  ? (null === e.boneTexture && e.computeBoneTexture(),
                    C.setValue(ye, "boneTexture", e.boneTexture, J),
                    C.setValue(ye, "boneTextureSize", e.boneTextureSize))
                  : console.warn(
                      "THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."
                    ));
            }
            const I = n.morphAttributes;
            var N, O;
            if (
              ((void 0 !== I.position ||
                void 0 !== I.normal ||
                (void 0 !== I.color && !0 === q.isWebGL2)) &&
                de.update(r, n, b),
              (A || v.receiveShadow !== r.receiveShadow) &&
                ((v.receiveShadow = r.receiveShadow),
                C.setValue(ye, "receiveShadow", r.receiveShadow)),
              i.isMeshGouraudMaterial &&
                null !== i.envMap &&
                ((D.envMap.value = l),
                (D.flipEnvMap.value =
                  l.isCubeTexture && !1 === l.isRenderTargetTexture ? -1 : 1)),
              A &&
                (C.setValue(ye, "toneMappingExposure", x.toneMappingExposure),
                v.needsLights &&
                  ((O = L),
                  ((N = D).ambientLightColor.needsUpdate = O),
                  (N.lightProbe.needsUpdate = O),
                  (N.directionalLights.needsUpdate = O),
                  (N.directionalLightShadows.needsUpdate = O),
                  (N.pointLights.needsUpdate = O),
                  (N.pointLightShadows.needsUpdate = O),
                  (N.spotLights.needsUpdate = O),
                  (N.spotLightShadows.needsUpdate = O),
                  (N.rectAreaLights.needsUpdate = O),
                  (N.hemisphereLights.needsUpdate = O)),
                s && !0 === i.fog && re.refreshFogUniforms(D, s),
                re.refreshMaterialUniforms(D, i, P, R, k),
                da.upload(ye, v.uniformsList, D, J)),
              i.isShaderMaterial &&
                !0 === i.uniformsNeedUpdate &&
                (da.upload(ye, v.uniformsList, D, J),
                (i.uniformsNeedUpdate = !1)),
              i.isSpriteMaterial && C.setValue(ye, "center", r.center),
              C.setValue(ye, "modelViewMatrix", r.modelViewMatrix),
              C.setValue(ye, "normalMatrix", r.normalMatrix),
              C.setValue(ye, "modelMatrix", r.matrixWorld),
              i.isShaderMaterial || i.isRawShaderMaterial)
            ) {
              const e = i.uniformsGroups;
              for (let t = 0, n = e.length; t < n; t++)
                if (q.isWebGL2) {
                  const n = e[t];
                  xe.update(n, b), xe.bind(n, b);
                } else
                  console.warn(
                    "THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2."
                  );
            }
            return b;
          })(e, t, n, i, r);
        Y.setMaterial(i, a);
        let l = n.index,
          c = 1;
        !0 === i.wireframe && ((l = te.getWireframeAttribute(n)), (c = 2));
        const h = n.drawRange,
          u = n.attributes.position;
        let d = h.start * c,
          p = (h.start + h.count) * c;
        null !== s &&
          ((d = Math.max(d, s.start * c)),
          (p = Math.min(p, (s.start + s.count) * c))),
          null !== l
            ? ((d = Math.max(d, 0)), (p = Math.min(p, l.count)))
            : null != u && ((d = Math.max(d, 0)), (p = Math.min(p, u.count)));
        const f = p - d;
        if (f < 0 || f === 1 / 0) return;
        let m;
        ve.setup(r, i, o, n, l);
        let _ = pe;
        if (
          (null !== l && ((m = ee.get(l)), (_ = fe), _.setIndex(m)), r.isMesh)
        )
          !0 === i.wireframe
            ? (Y.setLineWidth(i.wireframeLinewidth * j()), _.setMode(1))
            : _.setMode(4);
        else if (r.isLine) {
          let e = i.linewidth;
          void 0 === e && (e = 1),
            Y.setLineWidth(e * j()),
            r.isLineSegments
              ? _.setMode(1)
              : r.isLineLoop
              ? _.setMode(2)
              : _.setMode(3);
        } else r.isPoints ? _.setMode(0) : r.isSprite && _.setMode(4);
        if (r.isInstancedMesh) _.renderInstances(d, f, r.count);
        else if (n.isInstancedBufferGeometry) {
          const e =
              void 0 !== n._maxInstanceCount ? n._maxInstanceCount : 1 / 0,
            t = Math.min(n.instanceCount, e);
          _.renderInstances(d, f, t);
        } else _.render(d, f);
      }),
      (this.compile = function (e, t) {
        function n(e, t, n) {
          !0 === e.transparent && e.side === c && !1 === e.forceSinglePass
            ? ((e.side = l),
              (e.needsUpdate = !0),
              ze(e, t, n),
              (e.side = o),
              (e.needsUpdate = !0),
              ze(e, t, n),
              (e.side = c))
            : ze(e, t, n);
        }
        (g = ae.get(e)),
          g.init(),
          v.push(g),
          e.traverseVisible(function (e) {
            e.isLight &&
              e.layers.test(t.layers) &&
              (g.pushLight(e), e.castShadow && g.pushShadow(e));
          }),
          g.setupLights(x.useLegacyLights),
          e.traverse(function (t) {
            const i = t.material;
            if (i)
              if (Array.isArray(i))
                for (let r = 0; r < i.length; r++) n(i[r], e, t);
              else n(i, e, t);
          }),
          v.pop(),
          (g = null);
      });
    let Ce = null;
    function Re() {
      De.stop();
    }
    function Pe() {
      De.start();
    }
    const De = new Ar();
    function Ie(e, t, n, i) {
      if (!1 === e.visible) return;
      if (e.layers.test(t.layers))
        if (e.isGroup) n = e.renderOrder;
        else if (e.isLOD) !0 === e.autoUpdate && e.update(t);
        else if (e.isLight) g.pushLight(e), e.castShadow && g.pushShadow(e);
        else if (e.isSprite) {
          if (!e.frustumCulled || z.intersectsSprite(e)) {
            i && G.setFromMatrixPosition(e.matrixWorld).applyMatrix4(H);
            const t = ne.update(e),
              r = e.material;
            r.visible && m.push(e, t, r, n, G.z, null);
          }
        } else if (
          (e.isMesh || e.isLine || e.isPoints) &&
          (e.isSkinnedMesh &&
            e.skeleton.frame !== K.render.frame &&
            (e.skeleton.update(), (e.skeleton.frame = K.render.frame)),
          !e.frustumCulled || z.intersectsObject(e))
        ) {
          i && G.setFromMatrixPosition(e.matrixWorld).applyMatrix4(H);
          const t = ne.update(e),
            r = e.material;
          if (Array.isArray(r)) {
            const i = t.groups;
            for (let s = 0, a = i.length; s < a; s++) {
              const a = i[s],
                o = r[a.materialIndex];
              o && o.visible && m.push(e, t, o, n, G.z, a);
            }
          } else r.visible && m.push(e, t, r, n, G.z, null);
        }
      const r = e.children;
      for (let e = 0, s = r.length; e < s; e++) Ie(r[e], t, n, i);
    }
    function Ne(e, t, n, i) {
      const r = e.opaque,
        s = e.transmissive,
        o = e.transparent;
      g.setupLightsView(n),
        !0 === F && oe.setGlobalState(x.clippingPlanes, n),
        s.length > 0 &&
          (function (e, t, n) {
            const i = q.isWebGL2;
            null === k &&
              (k = new hn(1024, 1024, {
                generateMipmaps: !0,
                type: X.has("EXT_color_buffer_half_float") ? ge : ce,
                minFilter: le,
                samples: i && !0 === a ? 4 : 0,
              }));
            const r = x.getRenderTarget();
            x.setRenderTarget(k), x.clear();
            const s = x.toneMapping;
            (x.toneMapping = V),
              Oe(e, t, n),
              (x.toneMapping = s),
              J.updateMultisampleRenderTarget(k),
              J.updateRenderTargetMipmap(k),
              x.setRenderTarget(r);
          })(r, t, n),
        i && Y.viewport(E.copy(i)),
        r.length > 0 && Oe(r, t, n),
        s.length > 0 && Oe(s, t, n),
        o.length > 0 && Oe(o, t, n),
        Y.buffers.depth.setTest(!0),
        Y.buffers.depth.setMask(!0),
        Y.buffers.color.setMask(!0),
        Y.setPolygonOffset(!1);
    }
    function Oe(e, t, n) {
      const i = !0 === t.isScene ? t.overrideMaterial : null;
      for (let r = 0, s = e.length; r < s; r++) {
        const s = e[r],
          a = s.object,
          o = s.geometry,
          l = null === i ? s.material : i,
          c = s.group;
        a.layers.test(n.layers) && Ue(a, t, n, o, l, c);
      }
    }
    function Ue(e, t, n, i, r, s) {
      e.onBeforeRender(x, t, n, i, r, s),
        e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse, e.matrixWorld),
        e.normalMatrix.getNormalMatrix(e.modelViewMatrix),
        r.onBeforeRender(x, t, n, i, e, s),
        !0 === r.transparent && r.side === c && !1 === r.forceSinglePass
          ? ((r.side = l),
            (r.needsUpdate = !0),
            x.renderBufferDirect(n, t, i, r, e, s),
            (r.side = o),
            (r.needsUpdate = !0),
            x.renderBufferDirect(n, t, i, r, e, s),
            (r.side = c))
          : x.renderBufferDirect(n, t, i, r, e, s),
        e.onAfterRender(x, t, n, i, r, s);
    }
    function ze(e, t, n) {
      !0 !== t.isScene && (t = W);
      const i = Z.get(e),
        r = g.state.lights,
        s = g.state.shadowsArray,
        a = r.state.version,
        o = ie.getParameters(e, r.state, s, t, n),
        l = ie.getProgramCacheKey(o);
      let c = i.programs;
      (i.environment = e.isMeshStandardMaterial ? t.environment : null),
        (i.fog = t.fog),
        (i.envMap = (e.isMeshStandardMaterial ? $ : Q).get(
          e.envMap || i.environment
        )),
        void 0 === c &&
          (e.addEventListener("dispose", Le),
          (c = new Map()),
          (i.programs = c));
      let h = c.get(l);
      if (void 0 !== h) {
        if (i.currentProgram === h && i.lightsStateVersion === a)
          return Fe(e, o), h;
      } else
        (o.uniforms = ie.getUniforms(e)),
          e.onBuild(n, o, x),
          e.onBeforeCompile(o, x),
          (h = ie.acquireProgram(o, l)),
          c.set(l, h),
          (i.uniforms = o.uniforms);
      const u = i.uniforms;
      ((e.isShaderMaterial || e.isRawShaderMaterial) && !0 !== e.clipping) ||
        (u.clippingPlanes = oe.uniform),
        Fe(e, o),
        (i.needsLights = (function (e) {
          return (
            e.isMeshLambertMaterial ||
            e.isMeshToonMaterial ||
            e.isMeshPhongMaterial ||
            e.isMeshStandardMaterial ||
            e.isShadowMaterial ||
            (e.isShaderMaterial && !0 === e.lights)
          );
        })(e)),
        (i.lightsStateVersion = a),
        i.needsLights &&
          ((u.ambientLightColor.value = r.state.ambient),
          (u.lightProbe.value = r.state.probe),
          (u.directionalLights.value = r.state.directional),
          (u.directionalLightShadows.value = r.state.directionalShadow),
          (u.spotLights.value = r.state.spot),
          (u.spotLightShadows.value = r.state.spotShadow),
          (u.rectAreaLights.value = r.state.rectArea),
          (u.ltc_1.value = r.state.rectAreaLTC1),
          (u.ltc_2.value = r.state.rectAreaLTC2),
          (u.pointLights.value = r.state.point),
          (u.pointLightShadows.value = r.state.pointShadow),
          (u.hemisphereLights.value = r.state.hemi),
          (u.directionalShadowMap.value = r.state.directionalShadowMap),
          (u.directionalShadowMatrix.value = r.state.directionalShadowMatrix),
          (u.spotShadowMap.value = r.state.spotShadowMap),
          (u.spotLightMatrix.value = r.state.spotLightMatrix),
          (u.spotLightMap.value = r.state.spotLightMap),
          (u.pointShadowMap.value = r.state.pointShadowMap),
          (u.pointShadowMatrix.value = r.state.pointShadowMatrix));
      const d = h.getUniforms(),
        p = da.seqWithValue(d.seq, u);
      return (i.currentProgram = h), (i.uniformsList = p), h;
    }
    function Fe(e, t) {
      const n = Z.get(e);
      (n.outputEncoding = t.outputEncoding),
        (n.instancing = t.instancing),
        (n.skinning = t.skinning),
        (n.morphTargets = t.morphTargets),
        (n.morphNormals = t.morphNormals),
        (n.morphColors = t.morphColors),
        (n.morphTargetsCount = t.morphTargetsCount),
        (n.numClippingPlanes = t.numClippingPlanes),
        (n.numIntersection = t.numClipIntersection),
        (n.vertexAlphas = t.vertexAlphas),
        (n.vertexTangents = t.vertexTangents),
        (n.toneMapping = t.toneMapping);
    }
    De.setAnimationLoop(function (e) {
      Ce && Ce(e);
    }),
      "undefined" != typeof self && De.setContext(self),
      (this.setAnimationLoop = function (e) {
        (Ce = e), we.setAnimationLoop(e), null === e ? De.stop() : De.start();
      }),
      we.addEventListener("sessionstart", Re),
      we.addEventListener("sessionend", Pe),
      (this.render = function (e, t) {
        if (void 0 !== t && !0 !== t.isCamera)
          return void console.error(
            "THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera."
          );
        if (!0 === y) return;
        !0 === e.matrixWorldAutoUpdate && e.updateMatrixWorld(),
          null === t.parent &&
            !0 === t.matrixWorldAutoUpdate &&
            t.updateMatrixWorld(),
          !0 === we.enabled &&
            !0 === we.isPresenting &&
            (!0 === we.cameraAutoUpdate && we.updateCamera(t),
            (t = we.getCamera())),
          !0 === e.isScene && e.onBeforeRender(x, e, t, S),
          (g = ae.get(e, v.length)),
          g.init(),
          v.push(g),
          H.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse),
          z.setFromProjectionMatrix(H),
          (B = this.localClippingEnabled),
          (F = oe.init(this.clippingPlanes, B)),
          (m = se.get(e, _.length)),
          m.init(),
          _.push(m),
          Ie(e, t, 0, x.sortObjects),
          m.finish(),
          !0 === x.sortObjects && m.sort(D, I),
          !0 === F && oe.beginShadows();
        const n = g.state.shadowsArray;
        if (
          (he.render(n, e, t),
          !0 === F && oe.endShadows(),
          !0 === this.info.autoReset && this.info.reset(),
          ue.render(m, e),
          g.setupLights(x.useLegacyLights),
          t.isArrayCamera)
        ) {
          const n = t.cameras;
          for (let t = 0, i = n.length; t < i; t++) {
            const i = n[t];
            Ne(m, e, i, i.viewport);
          }
        } else Ne(m, e, t);
        null !== S &&
          (J.updateMultisampleRenderTarget(S), J.updateRenderTargetMipmap(S)),
          !0 === e.isScene && e.onAfterRender(x, e, t),
          ve.resetDefaultState(),
          (w = -1),
          (T = null),
          v.pop(),
          (g = v.length > 0 ? v[v.length - 1] : null),
          _.pop(),
          (m = _.length > 0 ? _[_.length - 1] : null);
      }),
      (this.getActiveCubeFace = function () {
        return M;
      }),
      (this.getActiveMipmapLevel = function () {
        return b;
      }),
      (this.getRenderTarget = function () {
        return S;
      }),
      (this.setRenderTargetTextures = function (e, t, n) {
        (Z.get(e.texture).__webglTexture = t),
          (Z.get(e.depthTexture).__webglTexture = n);
        const i = Z.get(e);
        (i.__hasExternalTextures = !0),
          i.__hasExternalTextures &&
            ((i.__autoAllocateDepthBuffer = void 0 === n),
            i.__autoAllocateDepthBuffer ||
              (!0 === X.has("WEBGL_multisampled_render_to_texture") &&
                (console.warn(
                  "THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"
                ),
                (i.__useRenderToTexture = !1))));
      }),
      (this.setRenderTargetFramebuffer = function (e, t) {
        const n = Z.get(e);
        (n.__webglFramebuffer = t), (n.__useDefaultFramebuffer = void 0 === t);
      }),
      (this.setRenderTarget = function (e, t = 0, n = 0) {
        (S = e), (M = t), (b = n);
        let i = !0,
          r = null,
          s = !1,
          a = !1;
        if (e) {
          const n = Z.get(e);
          void 0 !== n.__useDefaultFramebuffer
            ? (Y.bindFramebuffer(36160, null), (i = !1))
            : void 0 === n.__webglFramebuffer
            ? J.setupRenderTarget(e)
            : n.__hasExternalTextures &&
              J.rebindTextures(
                e,
                Z.get(e.texture).__webglTexture,
                Z.get(e.depthTexture).__webglTexture
              );
          const o = e.texture;
          (o.isData3DTexture ||
            o.isDataArrayTexture ||
            o.isCompressedArrayTexture) &&
            (a = !0);
          const l = Z.get(e).__webglFramebuffer;
          e.isWebGLCubeRenderTarget
            ? ((r = l[t]), (s = !0))
            : (r =
                q.isWebGL2 && e.samples > 0 && !1 === J.useMultisampledRTT(e)
                  ? Z.get(e).__webglMultisampledFramebuffer
                  : l),
            E.copy(e.viewport),
            A.copy(e.scissor),
            (L = e.scissorTest);
        } else
          E.copy(N).multiplyScalar(P).floor(),
            A.copy(O).multiplyScalar(P).floor(),
            (L = U);
        if (
          (Y.bindFramebuffer(36160, r) &&
            q.drawBuffers &&
            i &&
            Y.drawBuffers(e, r),
          Y.viewport(E),
          Y.scissor(A),
          Y.setScissorTest(L),
          s)
        ) {
          const i = Z.get(e.texture);
          ye.framebufferTexture2D(36160, 36064, 34069 + t, i.__webglTexture, n);
        } else if (a) {
          const i = Z.get(e.texture),
            r = t || 0;
          ye.framebufferTextureLayer(36160, 36064, i.__webglTexture, n || 0, r);
        }
        w = -1;
      }),
      (this.readRenderTargetPixels = function (e, t, n, i, r, s, a) {
        if (!e || !e.isWebGLRenderTarget)
          return void console.error(
            "THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget."
          );
        let o = Z.get(e).__webglFramebuffer;
        if ((e.isWebGLCubeRenderTarget && void 0 !== a && (o = o[a]), o)) {
          Y.bindFramebuffer(36160, o);
          try {
            const a = e.texture,
              o = a.format,
              l = a.type;
            if (o !== Me && _e.convert(o) !== ye.getParameter(35739))
              return void console.error(
                "THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format."
              );
            const c =
              l === ge &&
              (X.has("EXT_color_buffer_half_float") ||
                (q.isWebGL2 && X.has("EXT_color_buffer_float")));
            if (
              !(
                l === ce ||
                _e.convert(l) === ye.getParameter(35738) ||
                (l === me &&
                  (q.isWebGL2 ||
                    X.has("OES_texture_float") ||
                    X.has("WEBGL_color_buffer_float"))) ||
                c
              )
            )
              return void console.error(
                "THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type."
              );
            t >= 0 &&
              t <= e.width - i &&
              n >= 0 &&
              n <= e.height - r &&
              ye.readPixels(t, n, i, r, _e.convert(o), _e.convert(l), s);
          } finally {
            const e = null !== S ? Z.get(S).__webglFramebuffer : null;
            Y.bindFramebuffer(36160, e);
          }
        }
      }),
      (this.copyFramebufferToTexture = function (e, t, n = 0) {
        const i = Math.pow(2, -n),
          r = Math.floor(t.image.width * i),
          s = Math.floor(t.image.height * i);
        J.setTexture2D(t, 0),
          ye.copyTexSubImage2D(3553, n, 0, 0, e.x, e.y, r, s),
          Y.unbindTexture();
      }),
      (this.copyTextureToTexture = function (e, t, n, i = 0) {
        const r = t.image.width,
          s = t.image.height,
          a = _e.convert(n.format),
          o = _e.convert(n.type);
        J.setTexture2D(n, 0),
          ye.pixelStorei(37440, n.flipY),
          ye.pixelStorei(37441, n.premultiplyAlpha),
          ye.pixelStorei(3317, n.unpackAlignment),
          t.isDataTexture
            ? ye.texSubImage2D(3553, i, e.x, e.y, r, s, a, o, t.image.data)
            : t.isCompressedTexture
            ? ye.compressedTexSubImage2D(
                3553,
                i,
                e.x,
                e.y,
                t.mipmaps[0].width,
                t.mipmaps[0].height,
                a,
                t.mipmaps[0].data
              )
            : ye.texSubImage2D(3553, i, e.x, e.y, a, o, t.image),
          0 === i && n.generateMipmaps && ye.generateMipmap(3553),
          Y.unbindTexture();
      }),
      (this.copyTextureToTexture3D = function (e, t, n, i, r = 0) {
        if (x.isWebGL1Renderer)
          return void console.warn(
            "THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2."
          );
        const s = e.max.x - e.min.x + 1,
          a = e.max.y - e.min.y + 1,
          o = e.max.z - e.min.z + 1,
          l = _e.convert(i.format),
          c = _e.convert(i.type);
        let h;
        if (i.isData3DTexture) J.setTexture3D(i, 0), (h = 32879);
        else {
          if (!i.isDataArrayTexture)
            return void console.warn(
              "THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray."
            );
          J.setTexture2DArray(i, 0), (h = 35866);
        }
        ye.pixelStorei(37440, i.flipY),
          ye.pixelStorei(37441, i.premultiplyAlpha),
          ye.pixelStorei(3317, i.unpackAlignment);
        const u = ye.getParameter(3314),
          d = ye.getParameter(32878),
          p = ye.getParameter(3316),
          f = ye.getParameter(3315),
          m = ye.getParameter(32877),
          g = n.isCompressedTexture ? n.mipmaps[0] : n.image;
        ye.pixelStorei(3314, g.width),
          ye.pixelStorei(32878, g.height),
          ye.pixelStorei(3316, e.min.x),
          ye.pixelStorei(3315, e.min.y),
          ye.pixelStorei(32877, e.min.z),
          n.isDataTexture || n.isData3DTexture
            ? ye.texSubImage3D(h, r, t.x, t.y, t.z, s, a, o, l, c, g.data)
            : n.isCompressedArrayTexture
            ? (console.warn(
                "THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."
              ),
              ye.compressedTexSubImage3D(
                h,
                r,
                t.x,
                t.y,
                t.z,
                s,
                a,
                o,
                l,
                g.data
              ))
            : ye.texSubImage3D(h, r, t.x, t.y, t.z, s, a, o, l, c, g),
          ye.pixelStorei(3314, u),
          ye.pixelStorei(32878, d),
          ye.pixelStorei(3316, p),
          ye.pixelStorei(3315, f),
          ye.pixelStorei(32877, m),
          0 === r && i.generateMipmaps && ye.generateMipmap(h),
          Y.unbindTexture();
      }),
      (this.initTexture = function (e) {
        e.isCubeTexture
          ? J.setTextureCube(e, 0)
          : e.isData3DTexture
          ? J.setTexture3D(e, 0)
          : e.isDataArrayTexture || e.isCompressedArrayTexture
          ? J.setTexture2DArray(e, 0)
          : J.setTexture2D(e, 0),
          Y.unbindTexture();
      }),
      (this.resetState = function () {
        (M = 0), (b = 0), (S = null), Y.reset(), ve.reset();
      }),
      "undefined" != typeof __THREE_DEVTOOLS__ &&
        __THREE_DEVTOOLS__.dispatchEvent(
          new CustomEvent("observe", { detail: this })
        );
  }
  Object.defineProperties(ao.prototype, {
    physicallyCorrectLights: {
      get: function () {
        return (
          console.warn(
            "THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."
          ),
          !this.useLegacyLights
        );
      },
      set: function (e) {
        console.warn(
          "THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."
        ),
          (this.useLegacyLights = !e);
      },
    },
  }),
    (class extends ao {}.prototype.isWebGL1Renderer = !0);
  class oo {
    constructor(e, t) {
      (this.isInterleavedBuffer = !0),
        (this.array = e),
        (this.stride = t),
        (this.count = void 0 !== e ? e.length / t : 0),
        (this.usage = bt),
        (this.updateRange = { offset: 0, count: -1 }),
        (this.version = 0),
        (this.uuid = Ct());
    }
    onUploadCallback() {}
    set needsUpdate(e) {
      !0 === e && this.version++;
    }
    setUsage(e) {
      return (this.usage = e), this;
    }
    copy(e) {
      return (
        (this.array = new e.array.constructor(e.array)),
        (this.count = e.count),
        (this.stride = e.stride),
        (this.usage = e.usage),
        this
      );
    }
    copyAt(e, t, n) {
      (e *= this.stride), (n *= t.stride);
      for (let i = 0, r = this.stride; i < r; i++)
        this.array[e + i] = t.array[n + i];
      return this;
    }
    set(e, t = 0) {
      return this.array.set(e, t), this;
    }
    clone(e) {
      void 0 === e.arrayBuffers && (e.arrayBuffers = {}),
        void 0 === this.array.buffer._uuid && (this.array.buffer._uuid = Ct()),
        void 0 === e.arrayBuffers[this.array.buffer._uuid] &&
          (e.arrayBuffers[this.array.buffer._uuid] =
            this.array.slice(0).buffer);
      const t = new this.array.constructor(
          e.arrayBuffers[this.array.buffer._uuid]
        ),
        n = new this.constructor(t, this.stride);
      return n.setUsage(this.usage), n;
    }
    onUpload(e) {
      return (this.onUploadCallback = e), this;
    }
    toJSON(e) {
      return (
        void 0 === e.arrayBuffers && (e.arrayBuffers = {}),
        void 0 === this.array.buffer._uuid && (this.array.buffer._uuid = Ct()),
        void 0 === e.arrayBuffers[this.array.buffer._uuid] &&
          (e.arrayBuffers[this.array.buffer._uuid] = Array.from(
            new Uint32Array(this.array.buffer)
          )),
        {
          uuid: this.uuid,
          buffer: this.array.buffer._uuid,
          type: this.array.constructor.name,
          stride: this.stride,
        }
      );
    }
  }
  const lo = new jt();
  class co {
    constructor(e, t, n, i = !1) {
      (this.isInterleavedBufferAttribute = !0),
        (this.name = ""),
        (this.data = e),
        (this.itemSize = t),
        (this.offset = n),
        (this.normalized = i);
    }
    get count() {
      return this.data.count;
    }
    get array() {
      return this.data.array;
    }
    set needsUpdate(e) {
      this.data.needsUpdate = e;
    }
    applyMatrix4(e) {
      for (let t = 0, n = this.data.count; t < n; t++)
        lo.fromBufferAttribute(this, t),
          lo.applyMatrix4(e),
          this.setXYZ(t, lo.x, lo.y, lo.z);
      return this;
    }
    applyNormalMatrix(e) {
      for (let t = 0, n = this.count; t < n; t++)
        lo.fromBufferAttribute(this, t),
          lo.applyNormalMatrix(e),
          this.setXYZ(t, lo.x, lo.y, lo.z);
      return this;
    }
    transformDirection(e) {
      for (let t = 0, n = this.count; t < n; t++)
        lo.fromBufferAttribute(this, t),
          lo.transformDirection(e),
          this.setXYZ(t, lo.x, lo.y, lo.z);
      return this;
    }
    setX(e, t) {
      return (
        this.normalized && (t = zt(t, this.array)),
        (this.data.array[e * this.data.stride + this.offset] = t),
        this
      );
    }
    setY(e, t) {
      return (
        this.normalized && (t = zt(t, this.array)),
        (this.data.array[e * this.data.stride + this.offset + 1] = t),
        this
      );
    }
    setZ(e, t) {
      return (
        this.normalized && (t = zt(t, this.array)),
        (this.data.array[e * this.data.stride + this.offset + 2] = t),
        this
      );
    }
    setW(e, t) {
      return (
        this.normalized && (t = zt(t, this.array)),
        (this.data.array[e * this.data.stride + this.offset + 3] = t),
        this
      );
    }
    getX(e) {
      let t = this.data.array[e * this.data.stride + this.offset];
      return this.normalized && (t = Ut(t, this.array)), t;
    }
    getY(e) {
      let t = this.data.array[e * this.data.stride + this.offset + 1];
      return this.normalized && (t = Ut(t, this.array)), t;
    }
    getZ(e) {
      let t = this.data.array[e * this.data.stride + this.offset + 2];
      return this.normalized && (t = Ut(t, this.array)), t;
    }
    getW(e) {
      let t = this.data.array[e * this.data.stride + this.offset + 3];
      return this.normalized && (t = Ut(t, this.array)), t;
    }
    setXY(e, t, n) {
      return (
        (e = e * this.data.stride + this.offset),
        this.normalized && ((t = zt(t, this.array)), (n = zt(n, this.array))),
        (this.data.array[e + 0] = t),
        (this.data.array[e + 1] = n),
        this
      );
    }
    setXYZ(e, t, n, i) {
      return (
        (e = e * this.data.stride + this.offset),
        this.normalized &&
          ((t = zt(t, this.array)),
          (n = zt(n, this.array)),
          (i = zt(i, this.array))),
        (this.data.array[e + 0] = t),
        (this.data.array[e + 1] = n),
        (this.data.array[e + 2] = i),
        this
      );
    }
    setXYZW(e, t, n, i, r) {
      return (
        (e = e * this.data.stride + this.offset),
        this.normalized &&
          ((t = zt(t, this.array)),
          (n = zt(n, this.array)),
          (i = zt(i, this.array)),
          (r = zt(r, this.array))),
        (this.data.array[e + 0] = t),
        (this.data.array[e + 1] = n),
        (this.data.array[e + 2] = i),
        (this.data.array[e + 3] = r),
        this
      );
    }
    clone(e) {
      if (void 0 === e) {
        console.log(
          "THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data."
        );
        const e = [];
        for (let t = 0; t < this.count; t++) {
          const n = t * this.data.stride + this.offset;
          for (let t = 0; t < this.itemSize; t++)
            e.push(this.data.array[n + t]);
        }
        return new Ni(
          new this.array.constructor(e),
          this.itemSize,
          this.normalized
        );
      }
      return (
        void 0 === e.interleavedBuffers && (e.interleavedBuffers = {}),
        void 0 === e.interleavedBuffers[this.data.uuid] &&
          (e.interleavedBuffers[this.data.uuid] = this.data.clone(e)),
        new co(
          e.interleavedBuffers[this.data.uuid],
          this.itemSize,
          this.offset,
          this.normalized
        )
      );
    }
    toJSON(e) {
      if (void 0 === e) {
        console.log(
          "THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data."
        );
        const e = [];
        for (let t = 0; t < this.count; t++) {
          const n = t * this.data.stride + this.offset;
          for (let t = 0; t < this.itemSize; t++)
            e.push(this.data.array[n + t]);
        }
        return {
          itemSize: this.itemSize,
          type: this.array.constructor.name,
          array: e,
          normalized: this.normalized,
        };
      }
      return (
        void 0 === e.interleavedBuffers && (e.interleavedBuffers = {}),
        void 0 === e.interleavedBuffers[this.data.uuid] &&
          (e.interleavedBuffers[this.data.uuid] = this.data.toJSON(e)),
        {
          isInterleavedBufferAttribute: !0,
          itemSize: this.itemSize,
          data: this.data.uuid,
          offset: this.offset,
          normalized: this.normalized,
        }
      );
    }
  }
  const ho = new jt(),
    uo = new cn(),
    po = new cn(),
    fo = new jt(),
    mo = new kn();
  class go extends ar {
    constructor(e, t) {
      super(e, t),
        (this.isSkinnedMesh = !0),
        (this.type = "SkinnedMesh"),
        (this.bindMode = "attached"),
        (this.bindMatrix = new kn()),
        (this.bindMatrixInverse = new kn());
    }
    copy(e, t) {
      return (
        super.copy(e, t),
        (this.bindMode = e.bindMode),
        this.bindMatrix.copy(e.bindMatrix),
        this.bindMatrixInverse.copy(e.bindMatrixInverse),
        (this.skeleton = e.skeleton),
        this
      );
    }
    bind(e, t) {
      (this.skeleton = e),
        void 0 === t &&
          (this.updateMatrixWorld(!0),
          this.skeleton.calculateInverses(),
          (t = this.matrixWorld)),
        this.bindMatrix.copy(t),
        this.bindMatrixInverse.copy(t).invert();
    }
    pose() {
      this.skeleton.pose();
    }
    normalizeSkinWeights() {
      const e = new cn(),
        t = this.geometry.attributes.skinWeight;
      for (let n = 0, i = t.count; n < i; n++) {
        e.fromBufferAttribute(t, n);
        const i = 1 / e.manhattanLength();
        i !== 1 / 0 ? e.multiplyScalar(i) : e.set(1, 0, 0, 0),
          t.setXYZW(n, e.x, e.y, e.z, e.w);
      }
    }
    updateMatrixWorld(e) {
      super.updateMatrixWorld(e),
        "attached" === this.bindMode
          ? this.bindMatrixInverse.copy(this.matrixWorld).invert()
          : "detached" === this.bindMode
          ? this.bindMatrixInverse.copy(this.bindMatrix).invert()
          : console.warn(
              "THREE.SkinnedMesh: Unrecognized bindMode: " + this.bindMode
            );
    }
    boneTransform(e, t) {
      const n = this.skeleton,
        i = this.geometry;
      uo.fromBufferAttribute(i.attributes.skinIndex, e),
        po.fromBufferAttribute(i.attributes.skinWeight, e),
        ho.copy(t).applyMatrix4(this.bindMatrix),
        t.set(0, 0, 0);
      for (let e = 0; e < 4; e++) {
        const i = po.getComponent(e);
        if (0 !== i) {
          const r = uo.getComponent(e);
          mo.multiplyMatrices(n.bones[r].matrixWorld, n.boneInverses[r]),
            t.addScaledVector(fo.copy(ho).applyMatrix4(mo), i);
        }
      }
      return t.applyMatrix4(this.bindMatrixInverse);
    }
  }
  class _o extends ui {
    constructor() {
      super(), (this.isBone = !0), (this.type = "Bone");
    }
  }
  class vo extends ln {
    constructor(e = null, t = 1, n = 1, i, r, s, a, o, l = ie, c = ie, h, u) {
      super(null, s, a, o, l, c, i, r, h, u),
        (this.isDataTexture = !0),
        (this.image = { data: e, width: t, height: n }),
        (this.generateMipmaps = !1),
        (this.flipY = !1),
        (this.unpackAlignment = 1);
    }
  }
  const xo = new kn(),
    yo = new kn();
  class Mo {
    constructor(e = [], t = []) {
      (this.uuid = Ct()),
        (this.bones = e.slice(0)),
        (this.boneInverses = t),
        (this.boneMatrices = null),
        (this.boneTexture = null),
        (this.boneTextureSize = 0),
        (this.frame = -1),
        this.init();
    }
    init() {
      const e = this.bones,
        t = this.boneInverses;
      if (
        ((this.boneMatrices = new Float32Array(16 * e.length)), 0 === t.length)
      )
        this.calculateInverses();
      else if (e.length !== t.length) {
        console.warn(
          "THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."
        ),
          (this.boneInverses = []);
        for (let e = 0, t = this.bones.length; e < t; e++)
          this.boneInverses.push(new kn());
      }
    }
    calculateInverses() {
      this.boneInverses.length = 0;
      for (let e = 0, t = this.bones.length; e < t; e++) {
        const t = new kn();
        this.bones[e] && t.copy(this.bones[e].matrixWorld).invert(),
          this.boneInverses.push(t);
      }
    }
    pose() {
      for (let e = 0, t = this.bones.length; e < t; e++) {
        const t = this.bones[e];
        t && t.matrixWorld.copy(this.boneInverses[e]).invert();
      }
      for (let e = 0, t = this.bones.length; e < t; e++) {
        const t = this.bones[e];
        t &&
          (t.parent && t.parent.isBone
            ? (t.matrix.copy(t.parent.matrixWorld).invert(),
              t.matrix.multiply(t.matrixWorld))
            : t.matrix.copy(t.matrixWorld),
          t.matrix.decompose(t.position, t.quaternion, t.scale));
      }
    }
    update() {
      const e = this.bones,
        t = this.boneInverses,
        n = this.boneMatrices,
        i = this.boneTexture;
      for (let i = 0, r = e.length; i < r; i++) {
        const r = e[i] ? e[i].matrixWorld : yo;
        xo.multiplyMatrices(r, t[i]), xo.toArray(n, 16 * i);
      }
      null !== i && (i.needsUpdate = !0);
    }
    clone() {
      return new Mo(this.bones, this.boneInverses);
    }
    computeBoneTexture() {
      let e = Math.sqrt(4 * this.bones.length);
      (e = Nt(e)), (e = Math.max(e, 4));
      const t = new Float32Array(e * e * 4);
      t.set(this.boneMatrices);
      const n = new vo(t, e, e, Me, me);
      return (
        (n.needsUpdate = !0),
        (this.boneMatrices = t),
        (this.boneTexture = n),
        (this.boneTextureSize = e),
        this
      );
    }
    getBoneByName(e) {
      for (let t = 0, n = this.bones.length; t < n; t++) {
        const n = this.bones[t];
        if (n.name === e) return n;
      }
    }
    dispose() {
      null !== this.boneTexture &&
        (this.boneTexture.dispose(), (this.boneTexture = null));
    }
    fromJSON(e, t) {
      this.uuid = e.uuid;
      for (let n = 0, i = e.bones.length; n < i; n++) {
        const i = e.bones[n];
        let r = t[i];
        void 0 === r &&
          (console.warn("THREE.Skeleton: No bone found with UUID:", i),
          (r = new _o())),
          this.bones.push(r),
          this.boneInverses.push(new kn().fromArray(e.boneInverses[n]));
      }
      return this.init(), this;
    }
    toJSON() {
      const e = {
        metadata: {
          version: 4.5,
          type: "Skeleton",
          generator: "Skeleton.toJSON",
        },
        bones: [],
        boneInverses: [],
      };
      e.uuid = this.uuid;
      const t = this.bones,
        n = this.boneInverses;
      for (let i = 0, r = t.length; i < r; i++) {
        const r = t[i];
        e.bones.push(r.uuid);
        const s = n[i];
        e.boneInverses.push(s.toArray());
      }
      return e;
    }
  }
  class bo extends Ni {
    constructor(e, t, n, i = 1) {
      super(e, t, n),
        (this.isInstancedBufferAttribute = !0),
        (this.meshPerAttribute = i);
    }
    copy(e) {
      return super.copy(e), (this.meshPerAttribute = e.meshPerAttribute), this;
    }
    toJSON() {
      const e = super.toJSON();
      return (
        (e.meshPerAttribute = this.meshPerAttribute),
        (e.isInstancedBufferAttribute = !0),
        e
      );
    }
  }
  const So = new kn(),
    wo = new kn(),
    To = [],
    Eo = new kn(),
    Ao = new ar();
  class Lo extends ar {
    constructor(e, t, n) {
      super(e, t),
        (this.isInstancedMesh = !0),
        (this.instanceMatrix = new bo(new Float32Array(16 * n), 16)),
        (this.instanceColor = null),
        (this.count = n),
        (this.frustumCulled = !1);
      for (let e = 0; e < n; e++) this.setMatrixAt(e, Eo);
    }
    copy(e, t) {
      return (
        super.copy(e, t),
        this.instanceMatrix.copy(e.instanceMatrix),
        null !== e.instanceColor &&
          (this.instanceColor = e.instanceColor.clone()),
        (this.count = e.count),
        this
      );
    }
    getColorAt(e, t) {
      t.fromArray(this.instanceColor.array, 3 * e);
    }
    getMatrixAt(e, t) {
      t.fromArray(this.instanceMatrix.array, 16 * e);
    }
    raycast(e, t) {
      const n = this.matrixWorld,
        i = this.count;
      if (
        ((Ao.geometry = this.geometry),
        (Ao.material = this.material),
        void 0 !== Ao.material)
      )
        for (let r = 0; r < i; r++) {
          this.getMatrixAt(r, So),
            wo.multiplyMatrices(n, So),
            (Ao.matrixWorld = wo),
            Ao.raycast(e, To);
          for (let e = 0, n = To.length; e < n; e++) {
            const n = To[e];
            (n.instanceId = r), (n.object = this), t.push(n);
          }
          To.length = 0;
        }
    }
    setColorAt(e, t) {
      null === this.instanceColor &&
        (this.instanceColor = new bo(
          new Float32Array(3 * this.instanceMatrix.count),
          3
        )),
        t.toArray(this.instanceColor.array, 3 * e);
    }
    setMatrixAt(e, t) {
      t.toArray(this.instanceMatrix.array, 16 * e);
    }
    updateMorphTargets() {}
    dispose() {
      this.dispatchEvent({ type: "dispose" });
    }
  }
  class Co extends wi {
    constructor(e) {
      super(),
        (this.isLineBasicMaterial = !0),
        (this.type = "LineBasicMaterial"),
        (this.color = new Ci(16777215)),
        (this.linewidth = 1),
        (this.linecap = "round"),
        (this.linejoin = "round"),
        (this.fog = !0),
        this.setValues(e);
    }
    copy(e) {
      return (
        super.copy(e),
        this.color.copy(e.color),
        (this.linewidth = e.linewidth),
        (this.linecap = e.linecap),
        (this.linejoin = e.linejoin),
        (this.fog = e.fog),
        this
      );
    }
  }
  const Ro = new jt(),
    Po = new jt(),
    Do = new kn(),
    Io = new Bn(),
    No = new Pn();
  class Oo extends ui {
    constructor(e = new ji(), t = new Co()) {
      super(),
        (this.isLine = !0),
        (this.type = "Line"),
        (this.geometry = e),
        (this.material = t),
        this.updateMorphTargets();
    }
    copy(e, t) {
      return (
        super.copy(e, t),
        (this.material = e.material),
        (this.geometry = e.geometry),
        this
      );
    }
    computeLineDistances() {
      const e = this.geometry;
      if (null === e.index) {
        const t = e.attributes.position,
          n = [0];
        for (let e = 1, i = t.count; e < i; e++)
          Ro.fromBufferAttribute(t, e - 1),
            Po.fromBufferAttribute(t, e),
            (n[e] = n[e - 1]),
            (n[e] += Ro.distanceTo(Po));
        e.setAttribute("lineDistance", new zi(n, 1));
      } else
        console.warn(
          "THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry."
        );
      return this;
    }
    raycast(e, t) {
      const n = this.geometry,
        i = this.matrixWorld,
        r = e.params.Line.threshold,
        s = n.drawRange;
      if (
        (null === n.boundingSphere && n.computeBoundingSphere(),
        No.copy(n.boundingSphere),
        No.applyMatrix4(i),
        (No.radius += r),
        !1 === e.ray.intersectsSphere(No))
      )
        return;
      Do.copy(i).invert(), Io.copy(e.ray).applyMatrix4(Do);
      const a = r / ((this.scale.x + this.scale.y + this.scale.z) / 3),
        o = a * a,
        l = new jt(),
        c = new jt(),
        h = new jt(),
        u = new jt(),
        d = this.isLineSegments ? 2 : 1,
        p = n.index,
        f = n.attributes.position;
      if (null !== p)
        for (
          let n = Math.max(0, s.start),
            i = Math.min(p.count, s.start + s.count) - 1;
          n < i;
          n += d
        ) {
          const i = p.getX(n),
            r = p.getX(n + 1);
          if (
            (l.fromBufferAttribute(f, i),
            c.fromBufferAttribute(f, r),
            Io.distanceSqToSegment(l, c, u, h) > o)
          )
            continue;
          u.applyMatrix4(this.matrixWorld);
          const s = e.ray.origin.distanceTo(u);
          s < e.near ||
            s > e.far ||
            t.push({
              distance: s,
              point: h.clone().applyMatrix4(this.matrixWorld),
              index: n,
              face: null,
              faceIndex: null,
              object: this,
            });
        }
      else
        for (
          let n = Math.max(0, s.start),
            i = Math.min(f.count, s.start + s.count) - 1;
          n < i;
          n += d
        ) {
          if (
            (l.fromBufferAttribute(f, n),
            c.fromBufferAttribute(f, n + 1),
            Io.distanceSqToSegment(l, c, u, h) > o)
          )
            continue;
          u.applyMatrix4(this.matrixWorld);
          const i = e.ray.origin.distanceTo(u);
          i < e.near ||
            i > e.far ||
            t.push({
              distance: i,
              point: h.clone().applyMatrix4(this.matrixWorld),
              index: n,
              face: null,
              faceIndex: null,
              object: this,
            });
        }
    }
    updateMorphTargets() {
      const e = this.geometry.morphAttributes,
        t = Object.keys(e);
      if (t.length > 0) {
        const n = e[t[0]];
        if (void 0 !== n) {
          (this.morphTargetInfluences = []), (this.morphTargetDictionary = {});
          for (let e = 0, t = n.length; e < t; e++) {
            const t = n[e].name || String(e);
            this.morphTargetInfluences.push(0),
              (this.morphTargetDictionary[t] = e);
          }
        }
      }
    }
  }
  const Uo = new jt(),
    zo = new jt();
  class Fo extends Oo {
    constructor(e, t) {
      super(e, t), (this.isLineSegments = !0), (this.type = "LineSegments");
    }
    computeLineDistances() {
      const e = this.geometry;
      if (null === e.index) {
        const t = e.attributes.position,
          n = [];
        for (let e = 0, i = t.count; e < i; e += 2)
          Uo.fromBufferAttribute(t, e),
            zo.fromBufferAttribute(t, e + 1),
            (n[e] = 0 === e ? 0 : n[e - 1]),
            (n[e + 1] = n[e] + Uo.distanceTo(zo));
        e.setAttribute("lineDistance", new zi(n, 1));
      } else
        console.warn(
          "THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry."
        );
      return this;
    }
  }
  class Bo extends Oo {
    constructor(e, t) {
      super(e, t), (this.isLineLoop = !0), (this.type = "LineLoop");
    }
  }
  class ko extends wi {
    constructor(e) {
      super(),
        (this.isPointsMaterial = !0),
        (this.type = "PointsMaterial"),
        (this.color = new Ci(16777215)),
        (this.map = null),
        (this.alphaMap = null),
        (this.size = 1),
        (this.sizeAttenuation = !0),
        (this.fog = !0),
        this.setValues(e);
    }
    copy(e) {
      return (
        super.copy(e),
        this.color.copy(e.color),
        (this.map = e.map),
        (this.alphaMap = e.alphaMap),
        (this.size = e.size),
        (this.sizeAttenuation = e.sizeAttenuation),
        (this.fog = e.fog),
        this
      );
    }
  }
  const Ho = new kn(),
    Go = new Bn(),
    Vo = new Pn(),
    Wo = new jt();
  class jo extends ui {
    constructor(e = new ji(), t = new ko()) {
      super(),
        (this.isPoints = !0),
        (this.type = "Points"),
        (this.geometry = e),
        (this.material = t),
        this.updateMorphTargets();
    }
    copy(e, t) {
      return (
        super.copy(e, t),
        (this.material = e.material),
        (this.geometry = e.geometry),
        this
      );
    }
    raycast(e, t) {
      const n = this.geometry,
        i = this.matrixWorld,
        r = e.params.Points.threshold,
        s = n.drawRange;
      if (
        (null === n.boundingSphere && n.computeBoundingSphere(),
        Vo.copy(n.boundingSphere),
        Vo.applyMatrix4(i),
        (Vo.radius += r),
        !1 === e.ray.intersectsSphere(Vo))
      )
        return;
      Ho.copy(i).invert(), Go.copy(e.ray).applyMatrix4(Ho);
      const a = r / ((this.scale.x + this.scale.y + this.scale.z) / 3),
        o = a * a,
        l = n.index,
        c = n.attributes.position;
      if (null !== l)
        for (
          let n = Math.max(0, s.start),
            r = Math.min(l.count, s.start + s.count);
          n < r;
          n++
        ) {
          const r = l.getX(n);
          Wo.fromBufferAttribute(c, r), Xo(Wo, r, o, i, e, t, this);
        }
      else
        for (
          let n = Math.max(0, s.start),
            r = Math.min(c.count, s.start + s.count);
          n < r;
          n++
        )
          Wo.fromBufferAttribute(c, n), Xo(Wo, n, o, i, e, t, this);
    }
    updateMorphTargets() {
      const e = this.geometry.morphAttributes,
        t = Object.keys(e);
      if (t.length > 0) {
        const n = e[t[0]];
        if (void 0 !== n) {
          (this.morphTargetInfluences = []), (this.morphTargetDictionary = {});
          for (let e = 0, t = n.length; e < t; e++) {
            const t = n[e].name || String(e);
            this.morphTargetInfluences.push(0),
              (this.morphTargetDictionary[t] = e);
          }
        }
      }
    }
  }
  function Xo(e, t, n, i, r, s, a) {
    const o = Go.distanceSqToPoint(e);
    if (o < n) {
      const n = new jt();
      Go.closestPointToPoint(e, n), n.applyMatrix4(i);
      const l = r.ray.origin.distanceTo(n);
      if (l < r.near || l > r.far) return;
      s.push({
        distance: l,
        distanceToRay: Math.sqrt(o),
        point: n,
        index: t,
        face: null,
        object: a,
      });
    }
  }
  class qo extends wi {
    constructor(e) {
      super(),
        (this.isMeshStandardMaterial = !0),
        (this.defines = { STANDARD: "" }),
        (this.type = "MeshStandardMaterial"),
        (this.color = new Ci(16777215)),
        (this.roughness = 1),
        (this.metalness = 0),
        (this.map = null),
        (this.lightMap = null),
        (this.lightMapIntensity = 1),
        (this.aoMap = null),
        (this.aoMapIntensity = 1),
        (this.emissive = new Ci(0)),
        (this.emissiveIntensity = 1),
        (this.emissiveMap = null),
        (this.bumpMap = null),
        (this.bumpScale = 1),
        (this.normalMap = null),
        (this.normalMapType = gt),
        (this.normalScale = new Bt(1, 1)),
        (this.displacementMap = null),
        (this.displacementScale = 1),
        (this.displacementBias = 0),
        (this.roughnessMap = null),
        (this.metalnessMap = null),
        (this.alphaMap = null),
        (this.envMap = null),
        (this.envMapIntensity = 1),
        (this.wireframe = !1),
        (this.wireframeLinewidth = 1),
        (this.wireframeLinecap = "round"),
        (this.wireframeLinejoin = "round"),
        (this.flatShading = !1),
        (this.fog = !0),
        this.setValues(e);
    }
    copy(e) {
      return (
        super.copy(e),
        (this.defines = { STANDARD: "" }),
        this.color.copy(e.color),
        (this.roughness = e.roughness),
        (this.metalness = e.metalness),
        (this.map = e.map),
        (this.lightMap = e.lightMap),
        (this.lightMapIntensity = e.lightMapIntensity),
        (this.aoMap = e.aoMap),
        (this.aoMapIntensity = e.aoMapIntensity),
        this.emissive.copy(e.emissive),
        (this.emissiveMap = e.emissiveMap),
        (this.emissiveIntensity = e.emissiveIntensity),
        (this.bumpMap = e.bumpMap),
        (this.bumpScale = e.bumpScale),
        (this.normalMap = e.normalMap),
        (this.normalMapType = e.normalMapType),
        this.normalScale.copy(e.normalScale),
        (this.displacementMap = e.displacementMap),
        (this.displacementScale = e.displacementScale),
        (this.displacementBias = e.displacementBias),
        (this.roughnessMap = e.roughnessMap),
        (this.metalnessMap = e.metalnessMap),
        (this.alphaMap = e.alphaMap),
        (this.envMap = e.envMap),
        (this.envMapIntensity = e.envMapIntensity),
        (this.wireframe = e.wireframe),
        (this.wireframeLinewidth = e.wireframeLinewidth),
        (this.wireframeLinecap = e.wireframeLinecap),
        (this.wireframeLinejoin = e.wireframeLinejoin),
        (this.flatShading = e.flatShading),
        (this.fog = e.fog),
        this
      );
    }
  }
  class Yo extends qo {
    constructor(e) {
      super(),
        (this.isMeshPhysicalMaterial = !0),
        (this.defines = { STANDARD: "", PHYSICAL: "" }),
        (this.type = "MeshPhysicalMaterial"),
        (this.clearcoatMap = null),
        (this.clearcoatRoughness = 0),
        (this.clearcoatRoughnessMap = null),
        (this.clearcoatNormalScale = new Bt(1, 1)),
        (this.clearcoatNormalMap = null),
        (this.ior = 1.5),
        Object.defineProperty(this, "reflectivity", {
          get: function () {
            return Rt((2.5 * (this.ior - 1)) / (this.ior + 1), 0, 1);
          },
          set: function (e) {
            this.ior = (1 + 0.4 * e) / (1 - 0.4 * e);
          },
        }),
        (this.iridescenceMap = null),
        (this.iridescenceIOR = 1.3),
        (this.iridescenceThicknessRange = [100, 400]),
        (this.iridescenceThicknessMap = null),
        (this.sheenColor = new Ci(0)),
        (this.sheenColorMap = null),
        (this.sheenRoughness = 1),
        (this.sheenRoughnessMap = null),
        (this.transmissionMap = null),
        (this.thickness = 0),
        (this.thicknessMap = null),
        (this.attenuationDistance = 1 / 0),
        (this.attenuationColor = new Ci(1, 1, 1)),
        (this.specularIntensity = 1),
        (this.specularIntensityMap = null),
        (this.specularColor = new Ci(1, 1, 1)),
        (this.specularColorMap = null),
        (this._sheen = 0),
        (this._clearcoat = 0),
        (this._iridescence = 0),
        (this._transmission = 0),
        this.setValues(e);
    }
    get sheen() {
      return this._sheen;
    }
    set sheen(e) {
      this._sheen > 0 != e > 0 && this.version++, (this._sheen = e);
    }
    get clearcoat() {
      return this._clearcoat;
    }
    set clearcoat(e) {
      this._clearcoat > 0 != e > 0 && this.version++, (this._clearcoat = e);
    }
    get iridescence() {
      return this._iridescence;
    }
    set iridescence(e) {
      this._iridescence > 0 != e > 0 && this.version++, (this._iridescence = e);
    }
    get transmission() {
      return this._transmission;
    }
    set transmission(e) {
      this._transmission > 0 != e > 0 && this.version++,
        (this._transmission = e);
    }
    copy(e) {
      return (
        super.copy(e),
        (this.defines = { STANDARD: "", PHYSICAL: "" }),
        (this.clearcoat = e.clearcoat),
        (this.clearcoatMap = e.clearcoatMap),
        (this.clearcoatRoughness = e.clearcoatRoughness),
        (this.clearcoatRoughnessMap = e.clearcoatRoughnessMap),
        (this.clearcoatNormalMap = e.clearcoatNormalMap),
        this.clearcoatNormalScale.copy(e.clearcoatNormalScale),
        (this.ior = e.ior),
        (this.iridescence = e.iridescence),
        (this.iridescenceMap = e.iridescenceMap),
        (this.iridescenceIOR = e.iridescenceIOR),
        (this.iridescenceThicknessRange = [...e.iridescenceThicknessRange]),
        (this.iridescenceThicknessMap = e.iridescenceThicknessMap),
        (this.sheen = e.sheen),
        this.sheenColor.copy(e.sheenColor),
        (this.sheenColorMap = e.sheenColorMap),
        (this.sheenRoughness = e.sheenRoughness),
        (this.sheenRoughnessMap = e.sheenRoughnessMap),
        (this.transmission = e.transmission),
        (this.transmissionMap = e.transmissionMap),
        (this.thickness = e.thickness),
        (this.thicknessMap = e.thicknessMap),
        (this.attenuationDistance = e.attenuationDistance),
        this.attenuationColor.copy(e.attenuationColor),
        (this.specularIntensity = e.specularIntensity),
        (this.specularIntensityMap = e.specularIntensityMap),
        this.specularColor.copy(e.specularColor),
        (this.specularColorMap = e.specularColorMap),
        this
      );
    }
  }
  function Ko(e, t, n) {
    return Jo(e)
      ? new e.constructor(e.subarray(t, void 0 !== n ? n : e.length))
      : e.slice(t, n);
  }
  function Zo(e, t, n) {
    return !e || (!n && e.constructor === t)
      ? e
      : "number" == typeof t.BYTES_PER_ELEMENT
      ? new t(e)
      : Array.prototype.slice.call(e);
  }
  function Jo(e) {
    return ArrayBuffer.isView(e) && !(e instanceof DataView);
  }
  function Qo(e) {
    const t = e.length,
      n = new Array(t);
    for (let e = 0; e !== t; ++e) n[e] = e;
    return (
      n.sort(function (t, n) {
        return e[t] - e[n];
      }),
      n
    );
  }
  function $o(e, t, n) {
    const i = e.length,
      r = new e.constructor(i);
    for (let s = 0, a = 0; a !== i; ++s) {
      const i = n[s] * t;
      for (let n = 0; n !== t; ++n) r[a++] = e[i + n];
    }
    return r;
  }
  function el(e, t, n, i) {
    let r = 1,
      s = e[0];
    for (; void 0 !== s && void 0 === s[i]; ) s = e[r++];
    if (void 0 === s) return;
    let a = s[i];
    if (void 0 !== a)
      if (Array.isArray(a))
        do {
          (a = s[i]),
            void 0 !== a && (t.push(s.time), n.push.apply(n, a)),
            (s = e[r++]);
        } while (void 0 !== s);
      else if (void 0 !== a.toArray)
        do {
          (a = s[i]),
            void 0 !== a && (t.push(s.time), a.toArray(n, n.length)),
            (s = e[r++]);
        } while (void 0 !== s);
      else
        do {
          (a = s[i]), void 0 !== a && (t.push(s.time), n.push(a)), (s = e[r++]);
        } while (void 0 !== s);
  }
  class tl {
    constructor(e, t, n, i) {
      (this.parameterPositions = e),
        (this._cachedIndex = 0),
        (this.resultBuffer = void 0 !== i ? i : new t.constructor(n)),
        (this.sampleValues = t),
        (this.valueSize = n),
        (this.settings = null),
        (this.DefaultSettings_ = {});
    }
    evaluate(e) {
      const t = this.parameterPositions;
      let n = this._cachedIndex,
        i = t[n],
        r = t[n - 1];
      e: {
        t: {
          let s;
          n: {
            i: if (!(e < i)) {
              for (let s = n + 2; ; ) {
                if (void 0 === i) {
                  if (e < r) break i;
                  return (
                    (n = t.length),
                    (this._cachedIndex = n),
                    this.copySampleValue_(n - 1)
                  );
                }
                if (n === s) break;
                if (((r = i), (i = t[++n]), e < i)) break t;
              }
              s = t.length;
              break n;
            }
            if (e >= r) break e;
            {
              const a = t[1];
              e < a && ((n = 2), (r = a));
              for (let s = n - 2; ; ) {
                if (void 0 === r)
                  return (this._cachedIndex = 0), this.copySampleValue_(0);
                if (n === s) break;
                if (((i = r), (r = t[--n - 1]), e >= r)) break t;
              }
              (s = n), (n = 0);
            }
          }
          for (; n < s; ) {
            const i = (n + s) >>> 1;
            e < t[i] ? (s = i) : (n = i + 1);
          }
          if (((i = t[n]), (r = t[n - 1]), void 0 === r))
            return (this._cachedIndex = 0), this.copySampleValue_(0);
          if (void 0 === i)
            return (
              (n = t.length),
              (this._cachedIndex = n),
              this.copySampleValue_(n - 1)
            );
        }
        (this._cachedIndex = n), this.intervalChanged_(n, r, i);
      }
      return this.interpolate_(n, r, e, i);
    }
    getSettings_() {
      return this.settings || this.DefaultSettings_;
    }
    copySampleValue_(e) {
      const t = this.resultBuffer,
        n = this.sampleValues,
        i = this.valueSize,
        r = e * i;
      for (let e = 0; e !== i; ++e) t[e] = n[r + e];
      return t;
    }
    interpolate_() {
      throw new Error("call to abstract method");
    }
    intervalChanged_() {}
  }
  class nl extends tl {
    constructor(e, t, n, i) {
      super(e, t, n, i),
        (this._weightPrev = -0),
        (this._offsetPrev = -0),
        (this._weightNext = -0),
        (this._offsetNext = -0),
        (this.DefaultSettings_ = { endingStart: 2400, endingEnd: 2400 });
    }
    intervalChanged_(e, t, n) {
      const i = this.parameterPositions;
      let r = e - 2,
        s = e + 1,
        a = i[r],
        o = i[s];
      if (void 0 === a)
        switch (this.getSettings_().endingStart) {
          case 2401:
            (r = e), (a = 2 * t - n);
            break;
          case 2402:
            (r = i.length - 2), (a = t + i[r] - i[r + 1]);
            break;
          default:
            (r = e), (a = n);
        }
      if (void 0 === o)
        switch (this.getSettings_().endingEnd) {
          case 2401:
            (s = e), (o = 2 * n - t);
            break;
          case 2402:
            (s = 1), (o = n + i[1] - i[0]);
            break;
          default:
            (s = e - 1), (o = t);
        }
      const l = 0.5 * (n - t),
        c = this.valueSize;
      (this._weightPrev = l / (t - a)),
        (this._weightNext = l / (o - n)),
        (this._offsetPrev = r * c),
        (this._offsetNext = s * c);
    }
    interpolate_(e, t, n, i) {
      const r = this.resultBuffer,
        s = this.sampleValues,
        a = this.valueSize,
        o = e * a,
        l = o - a,
        c = this._offsetPrev,
        h = this._offsetNext,
        u = this._weightPrev,
        d = this._weightNext,
        p = (n - t) / (i - t),
        f = p * p,
        m = f * p,
        g = -u * m + 2 * u * f - u * p,
        _ = (1 + u) * m + (-1.5 - 2 * u) * f + (-0.5 + u) * p + 1,
        v = (-1 - d) * m + (1.5 + d) * f + 0.5 * p,
        x = d * m - d * f;
      for (let e = 0; e !== a; ++e)
        r[e] = g * s[c + e] + _ * s[l + e] + v * s[o + e] + x * s[h + e];
      return r;
    }
  }
  class il extends tl {
    constructor(e, t, n, i) {
      super(e, t, n, i);
    }
    interpolate_(e, t, n, i) {
      const r = this.resultBuffer,
        s = this.sampleValues,
        a = this.valueSize,
        o = e * a,
        l = o - a,
        c = (n - t) / (i - t),
        h = 1 - c;
      for (let e = 0; e !== a; ++e) r[e] = s[l + e] * h + s[o + e] * c;
      return r;
    }
  }
  class rl extends tl {
    constructor(e, t, n, i) {
      super(e, t, n, i);
    }
    interpolate_(e) {
      return this.copySampleValue_(e - 1);
    }
  }
  class sl {
    constructor(e, t, n, i) {
      if (void 0 === e)
        throw new Error("THREE.KeyframeTrack: track name is undefined");
      if (void 0 === t || 0 === t.length)
        throw new Error(
          "THREE.KeyframeTrack: no keyframes in track named " + e
        );
      (this.name = e),
        (this.times = Zo(t, this.TimeBufferType)),
        (this.values = Zo(n, this.ValueBufferType)),
        this.setInterpolation(i || this.DefaultInterpolation);
    }
    static toJSON(e) {
      const t = e.constructor;
      let n;
      if (t.toJSON !== this.toJSON) n = t.toJSON(e);
      else {
        n = {
          name: e.name,
          times: Zo(e.times, Array),
          values: Zo(e.values, Array),
        };
        const t = e.getInterpolation();
        t !== e.DefaultInterpolation && (n.interpolation = t);
      }
      return (n.type = e.ValueTypeName), n;
    }
    InterpolantFactoryMethodDiscrete(e) {
      return new rl(this.times, this.values, this.getValueSize(), e);
    }
    InterpolantFactoryMethodLinear(e) {
      return new il(this.times, this.values, this.getValueSize(), e);
    }
    InterpolantFactoryMethodSmooth(e) {
      return new nl(this.times, this.values, this.getValueSize(), e);
    }
    setInterpolation(e) {
      let t;
      switch (e) {
        case ot:
          t = this.InterpolantFactoryMethodDiscrete;
          break;
        case lt:
          t = this.InterpolantFactoryMethodLinear;
          break;
        case ct:
          t = this.InterpolantFactoryMethodSmooth;
      }
      if (void 0 === t) {
        const t =
          "unsupported interpolation for " +
          this.ValueTypeName +
          " keyframe track named " +
          this.name;
        if (void 0 === this.createInterpolant) {
          if (e === this.DefaultInterpolation) throw new Error(t);
          this.setInterpolation(this.DefaultInterpolation);
        }
        return console.warn("THREE.KeyframeTrack:", t), this;
      }
      return (this.createInterpolant = t), this;
    }
    getInterpolation() {
      switch (this.createInterpolant) {
        case this.InterpolantFactoryMethodDiscrete:
          return ot;
        case this.InterpolantFactoryMethodLinear:
          return lt;
        case this.InterpolantFactoryMethodSmooth:
          return ct;
      }
    }
    getValueSize() {
      return this.values.length / this.times.length;
    }
    shift(e) {
      if (0 !== e) {
        const t = this.times;
        for (let n = 0, i = t.length; n !== i; ++n) t[n] += e;
      }
      return this;
    }
    scale(e) {
      if (1 !== e) {
        const t = this.times;
        for (let n = 0, i = t.length; n !== i; ++n) t[n] *= e;
      }
      return this;
    }
    trim(e, t) {
      const n = this.times,
        i = n.length;
      let r = 0,
        s = i - 1;
      for (; r !== i && n[r] < e; ) ++r;
      for (; -1 !== s && n[s] > t; ) --s;
      if ((++s, 0 !== r || s !== i)) {
        r >= s && ((s = Math.max(s, 1)), (r = s - 1));
        const e = this.getValueSize();
        (this.times = Ko(n, r, s)),
          (this.values = Ko(this.values, r * e, s * e));
      }
      return this;
    }
    validate() {
      let e = !0;
      const t = this.getValueSize();
      t - Math.floor(t) != 0 &&
        (console.error(
          "THREE.KeyframeTrack: Invalid value size in track.",
          this
        ),
        (e = !1));
      const n = this.times,
        i = this.values,
        r = n.length;
      0 === r &&
        (console.error("THREE.KeyframeTrack: Track is empty.", this), (e = !1));
      let s = null;
      for (let t = 0; t !== r; t++) {
        const i = n[t];
        if ("number" == typeof i && isNaN(i)) {
          console.error(
            "THREE.KeyframeTrack: Time is not a valid number.",
            this,
            t,
            i
          ),
            (e = !1);
          break;
        }
        if (null !== s && s > i) {
          console.error(
            "THREE.KeyframeTrack: Out of order keys.",
            this,
            t,
            i,
            s
          ),
            (e = !1);
          break;
        }
        s = i;
      }
      if (void 0 !== i && Jo(i))
        for (let t = 0, n = i.length; t !== n; ++t) {
          const n = i[t];
          if (isNaN(n)) {
            console.error(
              "THREE.KeyframeTrack: Value is not a valid number.",
              this,
              t,
              n
            ),
              (e = !1);
            break;
          }
        }
      return e;
    }
    optimize() {
      const e = Ko(this.times),
        t = Ko(this.values),
        n = this.getValueSize(),
        i = this.getInterpolation() === ct,
        r = e.length - 1;
      let s = 1;
      for (let a = 1; a < r; ++a) {
        let r = !1;
        const o = e[a];
        if (o !== e[a + 1] && (1 !== a || o !== e[0]))
          if (i) r = !0;
          else {
            const e = a * n,
              i = e - n,
              s = e + n;
            for (let a = 0; a !== n; ++a) {
              const n = t[e + a];
              if (n !== t[i + a] || n !== t[s + a]) {
                r = !0;
                break;
              }
            }
          }
        if (r) {
          if (a !== s) {
            e[s] = e[a];
            const i = a * n,
              r = s * n;
            for (let e = 0; e !== n; ++e) t[r + e] = t[i + e];
          }
          ++s;
        }
      }
      if (r > 0) {
        e[s] = e[r];
        for (let e = r * n, i = s * n, a = 0; a !== n; ++a) t[i + a] = t[e + a];
        ++s;
      }
      return (
        s !== e.length
          ? ((this.times = Ko(e, 0, s)), (this.values = Ko(t, 0, s * n)))
          : ((this.times = e), (this.values = t)),
        this
      );
    }
    clone() {
      const e = Ko(this.times, 0),
        t = Ko(this.values, 0),
        n = new (0, this.constructor)(this.name, e, t);
      return (n.createInterpolant = this.createInterpolant), n;
    }
  }
  (sl.prototype.TimeBufferType = Float32Array),
    (sl.prototype.ValueBufferType = Float32Array),
    (sl.prototype.DefaultInterpolation = lt);
  class al extends sl {}
  (al.prototype.ValueTypeName = "bool"),
    (al.prototype.ValueBufferType = Array),
    (al.prototype.DefaultInterpolation = ot),
    (al.prototype.InterpolantFactoryMethodLinear = void 0),
    (al.prototype.InterpolantFactoryMethodSmooth = void 0);
  class ol extends sl {}
  ol.prototype.ValueTypeName = "color";
  class ll extends sl {}
  ll.prototype.ValueTypeName = "number";
  class cl extends tl {
    constructor(e, t, n, i) {
      super(e, t, n, i);
    }
    interpolate_(e, t, n, i) {
      const r = this.resultBuffer,
        s = this.sampleValues,
        a = this.valueSize,
        o = (n - t) / (i - t);
      let l = e * a;
      for (let e = l + a; l !== e; l += 4)
        Wt.slerpFlat(r, 0, s, l - a, s, l, o);
      return r;
    }
  }
  class hl extends sl {
    InterpolantFactoryMethodLinear(e) {
      return new cl(this.times, this.values, this.getValueSize(), e);
    }
  }
  (hl.prototype.ValueTypeName = "quaternion"),
    (hl.prototype.DefaultInterpolation = lt),
    (hl.prototype.InterpolantFactoryMethodSmooth = void 0);
  class ul extends sl {}
  (ul.prototype.ValueTypeName = "string"),
    (ul.prototype.ValueBufferType = Array),
    (ul.prototype.DefaultInterpolation = ot),
    (ul.prototype.InterpolantFactoryMethodLinear = void 0),
    (ul.prototype.InterpolantFactoryMethodSmooth = void 0);
  class dl extends sl {}
  dl.prototype.ValueTypeName = "vector";
  class pl {
    constructor(e, t = -1, n, i = 2500) {
      (this.name = e),
        (this.tracks = n),
        (this.duration = t),
        (this.blendMode = i),
        (this.uuid = Ct()),
        this.duration < 0 && this.resetDuration();
    }
    static parse(e) {
      const t = [],
        n = e.tracks,
        i = 1 / (e.fps || 1);
      for (let e = 0, r = n.length; e !== r; ++e) t.push(fl(n[e]).scale(i));
      const r = new this(e.name, e.duration, t, e.blendMode);
      return (r.uuid = e.uuid), r;
    }
    static toJSON(e) {
      const t = [],
        n = e.tracks,
        i = {
          name: e.name,
          duration: e.duration,
          tracks: t,
          uuid: e.uuid,
          blendMode: e.blendMode,
        };
      for (let e = 0, i = n.length; e !== i; ++e) t.push(sl.toJSON(n[e]));
      return i;
    }
    static CreateFromMorphTargetSequence(e, t, n, i) {
      const r = t.length,
        s = [];
      for (let e = 0; e < r; e++) {
        let a = [],
          o = [];
        a.push((e + r - 1) % r, e, (e + 1) % r), o.push(0, 1, 0);
        const l = Qo(a);
        (a = $o(a, 1, l)),
          (o = $o(o, 1, l)),
          i || 0 !== a[0] || (a.push(r), o.push(o[0])),
          s.push(
            new ll(".morphTargetInfluences[" + t[e].name + "]", a, o).scale(
              1 / n
            )
          );
      }
      return new this(e, -1, s);
    }
    static findByName(e, t) {
      let n = e;
      if (!Array.isArray(e)) {
        const t = e;
        n = (t.geometry && t.geometry.animations) || t.animations;
      }
      for (let e = 0; e < n.length; e++) if (n[e].name === t) return n[e];
      return null;
    }
    static CreateClipsFromMorphTargetSequences(e, t, n) {
      const i = {},
        r = /^([\w-]*?)([\d]+)$/;
      for (let t = 0, n = e.length; t < n; t++) {
        const n = e[t],
          s = n.name.match(r);
        if (s && s.length > 1) {
          const e = s[1];
          let t = i[e];
          t || (i[e] = t = []), t.push(n);
        }
      }
      const s = [];
      for (const e in i)
        s.push(this.CreateFromMorphTargetSequence(e, i[e], t, n));
      return s;
    }
    static parseAnimation(e, t) {
      if (!e)
        return (
          console.error(
            "THREE.AnimationClip: No animation in JSONLoader data."
          ),
          null
        );
      const n = function (e, t, n, i, r) {
          if (0 !== n.length) {
            const s = [],
              a = [];
            el(n, s, a, i), 0 !== s.length && r.push(new e(t, s, a));
          }
        },
        i = [],
        r = e.name || "default",
        s = e.fps || 30,
        a = e.blendMode;
      let o = e.length || -1;
      const l = e.hierarchy || [];
      for (let e = 0; e < l.length; e++) {
        const r = l[e].keys;
        if (r && 0 !== r.length)
          if (r[0].morphTargets) {
            const e = {};
            let t;
            for (t = 0; t < r.length; t++)
              if (r[t].morphTargets)
                for (let n = 0; n < r[t].morphTargets.length; n++)
                  e[r[t].morphTargets[n]] = -1;
            for (const n in e) {
              const e = [],
                s = [];
              for (let i = 0; i !== r[t].morphTargets.length; ++i) {
                const i = r[t];
                e.push(i.time), s.push(i.morphTarget === n ? 1 : 0);
              }
              i.push(new ll(".morphTargetInfluence[" + n + "]", e, s));
            }
            o = e.length * s;
          } else {
            const s = ".bones[" + t[e].name + "]";
            n(dl, s + ".position", r, "pos", i),
              n(hl, s + ".quaternion", r, "rot", i),
              n(dl, s + ".scale", r, "scl", i);
          }
      }
      return 0 === i.length ? null : new this(r, o, i, a);
    }
    resetDuration() {
      let e = 0;
      for (let t = 0, n = this.tracks.length; t !== n; ++t) {
        const n = this.tracks[t];
        e = Math.max(e, n.times[n.times.length - 1]);
      }
      return (this.duration = e), this;
    }
    trim() {
      for (let e = 0; e < this.tracks.length; e++)
        this.tracks[e].trim(0, this.duration);
      return this;
    }
    validate() {
      let e = !0;
      for (let t = 0; t < this.tracks.length; t++)
        e = e && this.tracks[t].validate();
      return e;
    }
    optimize() {
      for (let e = 0; e < this.tracks.length; e++) this.tracks[e].optimize();
      return this;
    }
    clone() {
      const e = [];
      for (let t = 0; t < this.tracks.length; t++)
        e.push(this.tracks[t].clone());
      return new this.constructor(this.name, this.duration, e, this.blendMode);
    }
    toJSON() {
      return this.constructor.toJSON(this);
    }
  }
  function fl(e) {
    if (void 0 === e.type)
      throw new Error(
        "THREE.KeyframeTrack: track type undefined, can not parse"
      );
    const t = (function (e) {
      switch (e.toLowerCase()) {
        case "scalar":
        case "double":
        case "float":
        case "number":
        case "integer":
          return ll;
        case "vector":
        case "vector2":
        case "vector3":
        case "vector4":
          return dl;
        case "color":
          return ol;
        case "quaternion":
          return hl;
        case "bool":
        case "boolean":
          return al;
        case "string":
          return ul;
      }
      throw new Error("THREE.KeyframeTrack: Unsupported typeName: " + e);
    })(e.type);
    if (void 0 === e.times) {
      const t = [],
        n = [];
      el(e.keys, t, n, "value"), (e.times = t), (e.values = n);
    }
    return void 0 !== t.parse
      ? t.parse(e)
      : new t(e.name, e.times, e.values, e.interpolation);
  }
  const ml = {
    enabled: !1,
    files: {},
    add: function (e, t) {
      !1 !== this.enabled && (this.files[e] = t);
    },
    get: function (e) {
      if (!1 !== this.enabled) return this.files[e];
    },
    remove: function (e) {
      delete this.files[e];
    },
    clear: function () {
      this.files = {};
    },
  };
  class gl {
    constructor(e, t, n) {
      const i = this;
      let r,
        s = !1,
        a = 0,
        o = 0;
      const l = [];
      (this.onStart = void 0),
        (this.onLoad = e),
        (this.onProgress = t),
        (this.onError = n),
        (this.itemStart = function (e) {
          o++, !1 === s && void 0 !== i.onStart && i.onStart(e, a, o), (s = !0);
        }),
        (this.itemEnd = function (e) {
          a++,
            void 0 !== i.onProgress && i.onProgress(e, a, o),
            a === o && ((s = !1), void 0 !== i.onLoad && i.onLoad());
        }),
        (this.itemError = function (e) {
          void 0 !== i.onError && i.onError(e);
        }),
        (this.resolveURL = function (e) {
          return r ? r(e) : e;
        }),
        (this.setURLModifier = function (e) {
          return (r = e), this;
        }),
        (this.addHandler = function (e, t) {
          return l.push(e, t), this;
        }),
        (this.removeHandler = function (e) {
          const t = l.indexOf(e);
          return -1 !== t && l.splice(t, 2), this;
        }),
        (this.getHandler = function (e) {
          for (let t = 0, n = l.length; t < n; t += 2) {
            const n = l[t],
              i = l[t + 1];
            if ((n.global && (n.lastIndex = 0), n.test(e))) return i;
          }
          return null;
        });
    }
  }
  const _l = new gl();
  class vl {
    constructor(e) {
      (this.manager = void 0 !== e ? e : _l),
        (this.crossOrigin = "anonymous"),
        (this.withCredentials = !1),
        (this.path = ""),
        (this.resourcePath = ""),
        (this.requestHeader = {});
    }
    load() {}
    loadAsync(e, t) {
      const n = this;
      return new Promise(function (i, r) {
        n.load(e, i, t, r);
      });
    }
    parse() {}
    setCrossOrigin(e) {
      return (this.crossOrigin = e), this;
    }
    setWithCredentials(e) {
      return (this.withCredentials = e), this;
    }
    setPath(e) {
      return (this.path = e), this;
    }
    setResourcePath(e) {
      return (this.resourcePath = e), this;
    }
    setRequestHeader(e) {
      return (this.requestHeader = e), this;
    }
  }
  const xl = {};
  class yl extends Error {
    constructor(e, t) {
      super(e), (this.response = t);
    }
  }
  class Ml extends vl {
    constructor(e) {
      super(e);
    }
    load(e, t, n, i) {
      void 0 === e && (e = ""),
        void 0 !== this.path && (e = this.path + e),
        (e = this.manager.resolveURL(e));
      const r = ml.get(e);
      if (void 0 !== r)
        return (
          this.manager.itemStart(e),
          setTimeout(() => {
            t && t(r), this.manager.itemEnd(e);
          }, 0),
          r
        );
      if (void 0 !== xl[e])
        return void xl[e].push({ onLoad: t, onProgress: n, onError: i });
      (xl[e] = []), xl[e].push({ onLoad: t, onProgress: n, onError: i });
      const s = new Request(e, {
          headers: new Headers(this.requestHeader),
          credentials: this.withCredentials ? "include" : "same-origin",
        }),
        a = this.mimeType,
        o = this.responseType;
      fetch(s)
        .then((t) => {
          if (200 === t.status || 0 === t.status) {
            if (
              (0 === t.status &&
                console.warn("THREE.FileLoader: HTTP Status 0 received."),
              "undefined" == typeof ReadableStream ||
                void 0 === t.body ||
                void 0 === t.body.getReader)
            )
              return t;
            const n = xl[e],
              i = t.body.getReader(),
              r =
                t.headers.get("Content-Length") || t.headers.get("X-File-Size"),
              s = r ? parseInt(r) : 0,
              a = 0 !== s;
            let o = 0;
            const l = new ReadableStream({
              start(e) {
                !(function t() {
                  i.read().then(({ done: i, value: r }) => {
                    if (i) e.close();
                    else {
                      o += r.byteLength;
                      const i = new ProgressEvent("progress", {
                        lengthComputable: a,
                        loaded: o,
                        total: s,
                      });
                      for (let e = 0, t = n.length; e < t; e++) {
                        const t = n[e];
                        t.onProgress && t.onProgress(i);
                      }
                      e.enqueue(r), t();
                    }
                  });
                })();
              },
            });
            return new Response(l);
          }
          throw new yl(
            `fetch for "${t.url}" responded with ${t.status}: ${t.statusText}`,
            t
          );
        })
        .then((e) => {
          switch (o) {
            case "arraybuffer":
              return e.arrayBuffer();
            case "blob":
              return e.blob();
            case "document":
              return e
                .text()
                .then((e) => new DOMParser().parseFromString(e, a));
            case "json":
              return e.json();
            default:
              if (void 0 === a) return e.text();
              {
                const t = /charset="?([^;"\s]*)"?/i.exec(a),
                  n = t && t[1] ? t[1].toLowerCase() : void 0,
                  i = new TextDecoder(n);
                return e.arrayBuffer().then((e) => i.decode(e));
              }
          }
        })
        .then((t) => {
          ml.add(e, t);
          const n = xl[e];
          delete xl[e];
          for (let e = 0, i = n.length; e < i; e++) {
            const i = n[e];
            i.onLoad && i.onLoad(t);
          }
        })
        .catch((t) => {
          const n = xl[e];
          if (void 0 === n) throw (this.manager.itemError(e), t);
          delete xl[e];
          for (let e = 0, i = n.length; e < i; e++) {
            const i = n[e];
            i.onError && i.onError(t);
          }
          this.manager.itemError(e);
        })
        .finally(() => {
          this.manager.itemEnd(e);
        }),
        this.manager.itemStart(e);
    }
    setResponseType(e) {
      return (this.responseType = e), this;
    }
    setMimeType(e) {
      return (this.mimeType = e), this;
    }
  }
  class bl extends vl {
    constructor(e) {
      super(e);
    }
    load(e, t, n, i) {
      void 0 !== this.path && (e = this.path + e),
        (e = this.manager.resolveURL(e));
      const r = this,
        s = ml.get(e);
      if (void 0 !== s)
        return (
          r.manager.itemStart(e),
          setTimeout(function () {
            t && t(s), r.manager.itemEnd(e);
          }, 0),
          s
        );
      const a = Vt("img");
      function o() {
        c(), ml.add(e, this), t && t(this), r.manager.itemEnd(e);
      }
      function l(t) {
        c(), i && i(t), r.manager.itemError(e), r.manager.itemEnd(e);
      }
      function c() {
        a.removeEventListener("load", o, !1),
          a.removeEventListener("error", l, !1);
      }
      return (
        a.addEventListener("load", o, !1),
        a.addEventListener("error", l, !1),
        "data:" !== e.slice(0, 5) &&
          void 0 !== this.crossOrigin &&
          (a.crossOrigin = this.crossOrigin),
        r.manager.itemStart(e),
        (a.src = e),
        a
      );
    }
  }
  class Sl extends vl {
    constructor(e) {
      super(e);
    }
    load(e, t, n, i) {
      const r = new ln(),
        s = new bl(this.manager);
      return (
        s.setCrossOrigin(this.crossOrigin),
        s.setPath(this.path),
        s.load(
          e,
          function (e) {
            (r.image = e), (r.needsUpdate = !0), void 0 !== t && t(r);
          },
          n,
          i
        ),
        r
      );
    }
  }
  class wl extends ui {
    constructor(e, t = 1) {
      super(),
        (this.isLight = !0),
        (this.type = "Light"),
        (this.color = new Ci(e)),
        (this.intensity = t);
    }
    dispose() {}
    copy(e, t) {
      return (
        super.copy(e, t),
        this.color.copy(e.color),
        (this.intensity = e.intensity),
        this
      );
    }
    toJSON(e) {
      const t = super.toJSON(e);
      return (
        (t.object.color = this.color.getHex()),
        (t.object.intensity = this.intensity),
        void 0 !== this.groundColor &&
          (t.object.groundColor = this.groundColor.getHex()),
        void 0 !== this.distance && (t.object.distance = this.distance),
        void 0 !== this.angle && (t.object.angle = this.angle),
        void 0 !== this.decay && (t.object.decay = this.decay),
        void 0 !== this.penumbra && (t.object.penumbra = this.penumbra),
        void 0 !== this.shadow && (t.object.shadow = this.shadow.toJSON()),
        t
      );
    }
  }
  const Tl = new kn(),
    El = new jt(),
    Al = new jt();
  class Ll {
    constructor(e) {
      (this.camera = e),
        (this.bias = 0),
        (this.normalBias = 0),
        (this.radius = 1),
        (this.blurSamples = 8),
        (this.mapSize = new Bt(512, 512)),
        (this.map = null),
        (this.mapPass = null),
        (this.matrix = new kn()),
        (this.autoUpdate = !0),
        (this.needsUpdate = !1),
        (this._frustum = new Er()),
        (this._frameExtents = new Bt(1, 1)),
        (this._viewportCount = 1),
        (this._viewports = [new cn(0, 0, 1, 1)]);
    }
    getViewportCount() {
      return this._viewportCount;
    }
    getFrustum() {
      return this._frustum;
    }
    updateMatrices(e) {
      const t = this.camera,
        n = this.matrix;
      El.setFromMatrixPosition(e.matrixWorld),
        t.position.copy(El),
        Al.setFromMatrixPosition(e.target.matrixWorld),
        t.lookAt(Al),
        t.updateMatrixWorld(),
        Tl.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse),
        this._frustum.setFromProjectionMatrix(Tl),
        n.set(0.5, 0, 0, 0.5, 0, 0.5, 0, 0.5, 0, 0, 0.5, 0.5, 0, 0, 0, 1),
        n.multiply(Tl);
    }
    getViewport(e) {
      return this._viewports[e];
    }
    getFrameExtents() {
      return this._frameExtents;
    }
    dispose() {
      this.map && this.map.dispose(), this.mapPass && this.mapPass.dispose();
    }
    copy(e) {
      return (
        (this.camera = e.camera.clone()),
        (this.bias = e.bias),
        (this.radius = e.radius),
        this.mapSize.copy(e.mapSize),
        this
      );
    }
    clone() {
      return new this.constructor().copy(this);
    }
    toJSON() {
      const e = {};
      return (
        0 !== this.bias && (e.bias = this.bias),
        0 !== this.normalBias && (e.normalBias = this.normalBias),
        1 !== this.radius && (e.radius = this.radius),
        (512 === this.mapSize.x && 512 === this.mapSize.y) ||
          (e.mapSize = this.mapSize.toArray()),
        (e.camera = this.camera.toJSON(!1).object),
        delete e.camera.matrix,
        e
      );
    }
  }
  class Cl extends Ll {
    constructor() {
      super(new mr(50, 1, 0.5, 500)),
        (this.isSpotLightShadow = !0),
        (this.focus = 1);
    }
    updateMatrices(e) {
      const t = this.camera,
        n = 2 * Lt * e.angle * this.focus,
        i = this.mapSize.width / this.mapSize.height,
        r = e.distance || t.far;
      (n === t.fov && i === t.aspect && r === t.far) ||
        ((t.fov = n), (t.aspect = i), (t.far = r), t.updateProjectionMatrix()),
        super.updateMatrices(e);
    }
    copy(e) {
      return super.copy(e), (this.focus = e.focus), this;
    }
  }
  class Rl extends wl {
    constructor(e, t, n = 0, i = Math.PI / 3, r = 0, s = 2) {
      super(e, t),
        (this.isSpotLight = !0),
        (this.type = "SpotLight"),
        this.position.copy(ui.DEFAULT_UP),
        this.updateMatrix(),
        (this.target = new ui()),
        (this.distance = n),
        (this.angle = i),
        (this.penumbra = r),
        (this.decay = s),
        (this.map = null),
        (this.shadow = new Cl());
    }
    get power() {
      return this.intensity * Math.PI;
    }
    set power(e) {
      this.intensity = e / Math.PI;
    }
    dispose() {
      this.shadow.dispose();
    }
    copy(e, t) {
      return (
        super.copy(e, t),
        (this.distance = e.distance),
        (this.angle = e.angle),
        (this.penumbra = e.penumbra),
        (this.decay = e.decay),
        (this.target = e.target.clone()),
        (this.shadow = e.shadow.clone()),
        this
      );
    }
  }
  const Pl = new kn(),
    Dl = new jt(),
    Il = new jt();
  class Nl extends Ll {
    constructor() {
      super(new mr(90, 1, 0.5, 500)),
        (this.isPointLightShadow = !0),
        (this._frameExtents = new Bt(4, 2)),
        (this._viewportCount = 6),
        (this._viewports = [
          new cn(2, 1, 1, 1),
          new cn(0, 1, 1, 1),
          new cn(3, 1, 1, 1),
          new cn(1, 1, 1, 1),
          new cn(3, 0, 1, 1),
          new cn(1, 0, 1, 1),
        ]),
        (this._cubeDirections = [
          new jt(1, 0, 0),
          new jt(-1, 0, 0),
          new jt(0, 0, 1),
          new jt(0, 0, -1),
          new jt(0, 1, 0),
          new jt(0, -1, 0),
        ]),
        (this._cubeUps = [
          new jt(0, 1, 0),
          new jt(0, 1, 0),
          new jt(0, 1, 0),
          new jt(0, 1, 0),
          new jt(0, 0, 1),
          new jt(0, 0, -1),
        ]);
    }
    updateMatrices(e, t = 0) {
      const n = this.camera,
        i = this.matrix,
        r = e.distance || n.far;
      r !== n.far && ((n.far = r), n.updateProjectionMatrix()),
        Dl.setFromMatrixPosition(e.matrixWorld),
        n.position.copy(Dl),
        Il.copy(n.position),
        Il.add(this._cubeDirections[t]),
        n.up.copy(this._cubeUps[t]),
        n.lookAt(Il),
        n.updateMatrixWorld(),
        i.makeTranslation(-Dl.x, -Dl.y, -Dl.z),
        Pl.multiplyMatrices(n.projectionMatrix, n.matrixWorldInverse),
        this._frustum.setFromProjectionMatrix(Pl);
    }
  }
  class Ol extends wl {
    constructor(e, t, n = 0, i = 2) {
      super(e, t),
        (this.isPointLight = !0),
        (this.type = "PointLight"),
        (this.distance = n),
        (this.decay = i),
        (this.shadow = new Nl());
    }
    get power() {
      return 4 * this.intensity * Math.PI;
    }
    set power(e) {
      this.intensity = e / (4 * Math.PI);
    }
    dispose() {
      this.shadow.dispose();
    }
    copy(e, t) {
      return (
        super.copy(e, t),
        (this.distance = e.distance),
        (this.decay = e.decay),
        (this.shadow = e.shadow.clone()),
        this
      );
    }
  }
  class Ul extends Ll {
    constructor() {
      super(new kr(-5, 5, 5, -5, 0.5, 500)),
        (this.isDirectionalLightShadow = !0);
    }
  }
  class zl extends wl {
    constructor(e, t) {
      super(e, t),
        (this.isDirectionalLight = !0),
        (this.type = "DirectionalLight"),
        this.position.copy(ui.DEFAULT_UP),
        this.updateMatrix(),
        (this.target = new ui()),
        (this.shadow = new Ul());
    }
    dispose() {
      this.shadow.dispose();
    }
    copy(e) {
      return (
        super.copy(e),
        (this.target = e.target.clone()),
        (this.shadow = e.shadow.clone()),
        this
      );
    }
  }
  class Fl {
    static decodeText(e) {
      if ("undefined" != typeof TextDecoder) return new TextDecoder().decode(e);
      let t = "";
      for (let n = 0, i = e.length; n < i; n++) t += String.fromCharCode(e[n]);
      try {
        return decodeURIComponent(escape(t));
      } catch (e) {
        return t;
      }
    }
    static extractUrlBase(e) {
      const t = e.lastIndexOf("/");
      return -1 === t ? "./" : e.slice(0, t + 1);
    }
    static resolveURL(e, t) {
      return "string" != typeof e || "" === e
        ? ""
        : (/^https?:\/\//i.test(t) &&
            /^\//.test(e) &&
            (t = t.replace(/(^https?:\/\/[^\/]+).*/i, "$1")),
          /^(https?:)?\/\//i.test(e) ||
          /^data:.*,.*$/i.test(e) ||
          /^blob:.*$/i.test(e)
            ? e
            : t + e);
    }
  }
  class Bl extends vl {
    constructor(e) {
      super(e),
        (this.isImageBitmapLoader = !0),
        "undefined" == typeof createImageBitmap &&
          console.warn(
            "THREE.ImageBitmapLoader: createImageBitmap() not supported."
          ),
        "undefined" == typeof fetch &&
          console.warn("THREE.ImageBitmapLoader: fetch() not supported."),
        (this.options = { premultiplyAlpha: "none" });
    }
    setOptions(e) {
      return (this.options = e), this;
    }
    load(e, t, n, i) {
      void 0 === e && (e = ""),
        void 0 !== this.path && (e = this.path + e),
        (e = this.manager.resolveURL(e));
      const r = this,
        s = ml.get(e);
      if (void 0 !== s)
        return (
          r.manager.itemStart(e),
          setTimeout(function () {
            t && t(s), r.manager.itemEnd(e);
          }, 0),
          s
        );
      const a = {};
      (a.credentials =
        "anonymous" === this.crossOrigin ? "same-origin" : "include"),
        (a.headers = this.requestHeader),
        fetch(e, a)
          .then(function (e) {
            return e.blob();
          })
          .then(function (e) {
            return createImageBitmap(
              e,
              Object.assign(r.options, { colorSpaceConversion: "none" })
            );
          })
          .then(function (n) {
            ml.add(e, n), t && t(n), r.manager.itemEnd(e);
          })
          .catch(function (t) {
            i && i(t), r.manager.itemError(e), r.manager.itemEnd(e);
          }),
        r.manager.itemStart(e);
    }
  }
  function kl() {
    return ("undefined" == typeof performance ? Date : performance).now();
  }
  const Hl = "\\[\\]\\.:\\/",
    Gl = new RegExp("[" + Hl + "]", "g"),
    Vl = "[^" + Hl + "]",
    Wl = "[^" + Hl.replace("\\.", "") + "]",
    jl = new RegExp(
      "^" +
        /((?:WC+[\/:])*)/.source.replace("WC", Vl) +
        /(WCOD+)?/.source.replace("WCOD", Wl) +
        /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", Vl) +
        /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", Vl) +
        "$"
    ),
    Xl = ["material", "materials", "bones", "map"];
  class ql {
    constructor(e, t, n) {
      (this.path = t),
        (this.parsedPath = n || ql.parseTrackName(t)),
        (this.node = ql.findNode(e, this.parsedPath.nodeName)),
        (this.rootNode = e),
        (this.getValue = this._getValue_unbound),
        (this.setValue = this._setValue_unbound);
    }
    static create(e, t, n) {
      return e && e.isAnimationObjectGroup
        ? new ql.Composite(e, t, n)
        : new ql(e, t, n);
    }
    static sanitizeNodeName(e) {
      return e.replace(/\s/g, "_").replace(Gl, "");
    }
    static parseTrackName(e) {
      const t = jl.exec(e);
      if (null === t)
        throw new Error("PropertyBinding: Cannot parse trackName: " + e);
      const n = {
          nodeName: t[2],
          objectName: t[3],
          objectIndex: t[4],
          propertyName: t[5],
          propertyIndex: t[6],
        },
        i = n.nodeName && n.nodeName.lastIndexOf(".");
      if (void 0 !== i && -1 !== i) {
        const e = n.nodeName.substring(i + 1);
        -1 !== Xl.indexOf(e) &&
          ((n.nodeName = n.nodeName.substring(0, i)), (n.objectName = e));
      }
      if (null === n.propertyName || 0 === n.propertyName.length)
        throw new Error(
          "PropertyBinding: can not parse propertyName from trackName: " + e
        );
      return n;
    }
    static findNode(e, t) {
      if (
        void 0 === t ||
        "" === t ||
        "." === t ||
        -1 === t ||
        t === e.name ||
        t === e.uuid
      )
        return e;
      if (e.skeleton) {
        const n = e.skeleton.getBoneByName(t);
        if (void 0 !== n) return n;
      }
      if (e.children) {
        const n = function (e) {
            for (let i = 0; i < e.length; i++) {
              const r = e[i];
              if (r.name === t || r.uuid === t) return r;
              const s = n(r.children);
              if (s) return s;
            }
            return null;
          },
          i = n(e.children);
        if (i) return i;
      }
      return null;
    }
    _getValue_unavailable() {}
    _setValue_unavailable() {}
    _getValue_direct(e, t) {
      e[t] = this.targetObject[this.propertyName];
    }
    _getValue_array(e, t) {
      const n = this.resolvedProperty;
      for (let i = 0, r = n.length; i !== r; ++i) e[t++] = n[i];
    }
    _getValue_arrayElement(e, t) {
      e[t] = this.resolvedProperty[this.propertyIndex];
    }
    _getValue_toArray(e, t) {
      this.resolvedProperty.toArray(e, t);
    }
    _setValue_direct(e, t) {
      this.targetObject[this.propertyName] = e[t];
    }
    _setValue_direct_setNeedsUpdate(e, t) {
      (this.targetObject[this.propertyName] = e[t]),
        (this.targetObject.needsUpdate = !0);
    }
    _setValue_direct_setMatrixWorldNeedsUpdate(e, t) {
      (this.targetObject[this.propertyName] = e[t]),
        (this.targetObject.matrixWorldNeedsUpdate = !0);
    }
    _setValue_array(e, t) {
      const n = this.resolvedProperty;
      for (let i = 0, r = n.length; i !== r; ++i) n[i] = e[t++];
    }
    _setValue_array_setNeedsUpdate(e, t) {
      const n = this.resolvedProperty;
      for (let i = 0, r = n.length; i !== r; ++i) n[i] = e[t++];
      this.targetObject.needsUpdate = !0;
    }
    _setValue_array_setMatrixWorldNeedsUpdate(e, t) {
      const n = this.resolvedProperty;
      for (let i = 0, r = n.length; i !== r; ++i) n[i] = e[t++];
      this.targetObject.matrixWorldNeedsUpdate = !0;
    }
    _setValue_arrayElement(e, t) {
      this.resolvedProperty[this.propertyIndex] = e[t];
    }
    _setValue_arrayElement_setNeedsUpdate(e, t) {
      (this.resolvedProperty[this.propertyIndex] = e[t]),
        (this.targetObject.needsUpdate = !0);
    }
    _setValue_arrayElement_setMatrixWorldNeedsUpdate(e, t) {
      (this.resolvedProperty[this.propertyIndex] = e[t]),
        (this.targetObject.matrixWorldNeedsUpdate = !0);
    }
    _setValue_fromArray(e, t) {
      this.resolvedProperty.fromArray(e, t);
    }
    _setValue_fromArray_setNeedsUpdate(e, t) {
      this.resolvedProperty.fromArray(e, t),
        (this.targetObject.needsUpdate = !0);
    }
    _setValue_fromArray_setMatrixWorldNeedsUpdate(e, t) {
      this.resolvedProperty.fromArray(e, t),
        (this.targetObject.matrixWorldNeedsUpdate = !0);
    }
    _getValue_unbound(e, t) {
      this.bind(), this.getValue(e, t);
    }
    _setValue_unbound(e, t) {
      this.bind(), this.setValue(e, t);
    }
    bind() {
      let e = this.node;
      const t = this.parsedPath,
        n = t.objectName,
        i = t.propertyName;
      let r = t.propertyIndex;
      if (
        (e || ((e = ql.findNode(this.rootNode, t.nodeName)), (this.node = e)),
        (this.getValue = this._getValue_unavailable),
        (this.setValue = this._setValue_unavailable),
        !e)
      )
        return void console.error(
          "THREE.PropertyBinding: Trying to update node for track: " +
            this.path +
            " but it wasn't found."
        );
      if (n) {
        let i = t.objectIndex;
        switch (n) {
          case "materials":
            if (!e.material)
              return void console.error(
                "THREE.PropertyBinding: Can not bind to material as node does not have a material.",
                this
              );
            if (!e.material.materials)
              return void console.error(
                "THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",
                this
              );
            e = e.material.materials;
            break;
          case "bones":
            if (!e.skeleton)
              return void console.error(
                "THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",
                this
              );
            e = e.skeleton.bones;
            for (let t = 0; t < e.length; t++)
              if (e[t].name === i) {
                i = t;
                break;
              }
            break;
          case "map":
            if ("map" in e) {
              e = e.map;
              break;
            }
            if (!e.material)
              return void console.error(
                "THREE.PropertyBinding: Can not bind to material as node does not have a material.",
                this
              );
            if (!e.material.map)
              return void console.error(
                "THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",
                this
              );
            e = e.material.map;
            break;
          default:
            if (void 0 === e[n])
              return void console.error(
                "THREE.PropertyBinding: Can not bind to objectName of node undefined.",
                this
              );
            e = e[n];
        }
        if (void 0 !== i) {
          if (void 0 === e[i])
            return void console.error(
              "THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",
              this,
              e
            );
          e = e[i];
        }
      }
      const s = e[i];
      if (void 0 === s) {
        const n = t.nodeName;
        return void console.error(
          "THREE.PropertyBinding: Trying to update property for track: " +
            n +
            "." +
            i +
            " but it wasn't found.",
          e
        );
      }
      let a = this.Versioning.None;
      (this.targetObject = e),
        void 0 !== e.needsUpdate
          ? (a = this.Versioning.NeedsUpdate)
          : void 0 !== e.matrixWorldNeedsUpdate &&
            (a = this.Versioning.MatrixWorldNeedsUpdate);
      let o = this.BindingType.Direct;
      if (void 0 !== r) {
        if ("morphTargetInfluences" === i) {
          if (!e.geometry)
            return void console.error(
              "THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",
              this
            );
          if (!e.geometry.morphAttributes)
            return void console.error(
              "THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",
              this
            );
          void 0 !== e.morphTargetDictionary[r] &&
            (r = e.morphTargetDictionary[r]);
        }
        (o = this.BindingType.ArrayElement),
          (this.resolvedProperty = s),
          (this.propertyIndex = r);
      } else
        void 0 !== s.fromArray && void 0 !== s.toArray
          ? ((o = this.BindingType.HasFromToArray), (this.resolvedProperty = s))
          : Array.isArray(s)
          ? ((o = this.BindingType.EntireArray), (this.resolvedProperty = s))
          : (this.propertyName = i);
      (this.getValue = this.GetterByBindingType[o]),
        (this.setValue = this.SetterByBindingTypeAndVersioning[o][a]);
    }
    unbind() {
      (this.node = null),
        (this.getValue = this._getValue_unbound),
        (this.setValue = this._setValue_unbound);
    }
  }
  function Yl(e, t) {
    if (t === ht)
      return (
        console.warn(
          "THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."
        ),
        e
      );
    if (t === dt || t === ut) {
      let n = e.getIndex();
      if (null === n) {
        const t = [],
          i = e.getAttribute("position");
        if (void 0 === i)
          return (
            console.error(
              "THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."
            ),
            e
          );
        for (let e = 0; e < i.count; e++) t.push(e);
        e.setIndex(t), (n = e.getIndex());
      }
      const i = n.count - 2,
        r = [];
      if (t === dt)
        for (let e = 1; e <= i; e++)
          r.push(n.getX(0)), r.push(n.getX(e)), r.push(n.getX(e + 1));
      else
        for (let e = 0; e < i; e++)
          e % 2 == 0
            ? (r.push(n.getX(e)), r.push(n.getX(e + 1)), r.push(n.getX(e + 2)))
            : (r.push(n.getX(e + 2)), r.push(n.getX(e + 1)), r.push(n.getX(e)));
      r.length / 3 !== i &&
        console.error(
          "THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."
        );
      const s = e.clone();
      return s.setIndex(r), s.clearGroups(), s;
    }
    return (
      console.error(
        "THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",
        t
      ),
      e
    );
  }
  function Kl() {
    let e = {};
    return {
      get: function (t) {
        return e[t];
      },
      add: function (t, n) {
        e[t] = n;
      },
      remove: function (t) {
        delete e[t];
      },
      removeAll: function () {
        e = {};
      },
    };
  }
  (ql.Composite = class {
    constructor(e, t, n) {
      const i = n || ql.parseTrackName(t);
      (this._targetGroup = e), (this._bindings = e.subscribe_(t, i));
    }
    getValue(e, t) {
      this.bind();
      const n = this._targetGroup.nCachedObjects_,
        i = this._bindings[n];
      void 0 !== i && i.getValue(e, t);
    }
    setValue(e, t) {
      const n = this._bindings;
      for (
        let i = this._targetGroup.nCachedObjects_, r = n.length;
        i !== r;
        ++i
      )
        n[i].setValue(e, t);
    }
    bind() {
      const e = this._bindings;
      for (
        let t = this._targetGroup.nCachedObjects_, n = e.length;
        t !== n;
        ++t
      )
        e[t].bind();
    }
    unbind() {
      const e = this._bindings;
      for (
        let t = this._targetGroup.nCachedObjects_, n = e.length;
        t !== n;
        ++t
      )
        e[t].unbind();
    }
  }),
    (ql.prototype.BindingType = {
      Direct: 0,
      EntireArray: 1,
      ArrayElement: 2,
      HasFromToArray: 3,
    }),
    (ql.prototype.Versioning = {
      None: 0,
      NeedsUpdate: 1,
      MatrixWorldNeedsUpdate: 2,
    }),
    (ql.prototype.GetterByBindingType = [
      ql.prototype._getValue_direct,
      ql.prototype._getValue_array,
      ql.prototype._getValue_arrayElement,
      ql.prototype._getValue_toArray,
    ]),
    (ql.prototype.SetterByBindingTypeAndVersioning = [
      [
        ql.prototype._setValue_direct,
        ql.prototype._setValue_direct_setNeedsUpdate,
        ql.prototype._setValue_direct_setMatrixWorldNeedsUpdate,
      ],
      [
        ql.prototype._setValue_array,
        ql.prototype._setValue_array_setNeedsUpdate,
        ql.prototype._setValue_array_setMatrixWorldNeedsUpdate,
      ],
      [
        ql.prototype._setValue_arrayElement,
        ql.prototype._setValue_arrayElement_setNeedsUpdate,
        ql.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate,
      ],
      [
        ql.prototype._setValue_fromArray,
        ql.prototype._setValue_fromArray_setNeedsUpdate,
        ql.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate,
      ],
    ]),
    new Float32Array(1),
    "undefined" != typeof __THREE_DEVTOOLS__ &&
      __THREE_DEVTOOLS__.dispatchEvent(
        new CustomEvent("register", { detail: { revision: e } })
      ),
    "undefined" != typeof window &&
      (window.__THREE__
        ? console.warn(
            "WARNING: Multiple instances of Three.js being imported."
          )
        : (window.__THREE__ = e));
  const Zl = {
    KHR_BINARY_GLTF: "KHR_binary_glTF",
    KHR_DRACO_MESH_COMPRESSION: "KHR_draco_mesh_compression",
    KHR_LIGHTS_PUNCTUAL: "KHR_lights_punctual",
    KHR_MATERIALS_CLEARCOAT: "KHR_materials_clearcoat",
    KHR_MATERIALS_IOR: "KHR_materials_ior",
    KHR_MATERIALS_SHEEN: "KHR_materials_sheen",
    KHR_MATERIALS_SPECULAR: "KHR_materials_specular",
    KHR_MATERIALS_TRANSMISSION: "KHR_materials_transmission",
    KHR_MATERIALS_IRIDESCENCE: "KHR_materials_iridescence",
    KHR_MATERIALS_UNLIT: "KHR_materials_unlit",
    KHR_MATERIALS_VOLUME: "KHR_materials_volume",
    KHR_TEXTURE_BASISU: "KHR_texture_basisu",
    KHR_TEXTURE_TRANSFORM: "KHR_texture_transform",
    KHR_MESH_QUANTIZATION: "KHR_mesh_quantization",
    KHR_MATERIALS_EMISSIVE_STRENGTH: "KHR_materials_emissive_strength",
    EXT_TEXTURE_WEBP: "EXT_texture_webp",
    EXT_TEXTURE_AVIF: "EXT_texture_avif",
    EXT_MESHOPT_COMPRESSION: "EXT_meshopt_compression",
    EXT_MESH_GPU_INSTANCING: "EXT_mesh_gpu_instancing",
  };
  class Jl {
    constructor(e) {
      (this.parser = e),
        (this.name = Zl.KHR_LIGHTS_PUNCTUAL),
        (this.cache = { refs: {}, uses: {} });
    }
    _markDefs() {
      const e = this.parser,
        t = this.parser.json.nodes || [];
      for (let n = 0, i = t.length; n < i; n++) {
        const i = t[n];
        i.extensions &&
          i.extensions[this.name] &&
          void 0 !== i.extensions[this.name].light &&
          e._addNodeRef(this.cache, i.extensions[this.name].light);
      }
    }
    _loadLight(e) {
      const t = this.parser,
        n = "light:" + e;
      let i = t.cache.get(n);
      if (i) return i;
      const r = t.json,
        s = (((r.extensions && r.extensions[this.name]) || {}).lights || [])[e];
      let a;
      const o = new Ci(16777215);
      void 0 !== s.color && o.fromArray(s.color);
      const l = void 0 !== s.range ? s.range : 0;
      switch (s.type) {
        case "directional":
          (a = new zl(o)), a.target.position.set(0, 0, -1), a.add(a.target);
          break;
        case "point":
          (a = new Ol(o)), (a.distance = l);
          break;
        case "spot":
          (a = new Rl(o)),
            (a.distance = l),
            (s.spot = s.spot || {}),
            (s.spot.innerConeAngle =
              void 0 !== s.spot.innerConeAngle ? s.spot.innerConeAngle : 0),
            (s.spot.outerConeAngle =
              void 0 !== s.spot.outerConeAngle
                ? s.spot.outerConeAngle
                : Math.PI / 4),
            (a.angle = s.spot.outerConeAngle),
            (a.penumbra = 1 - s.spot.innerConeAngle / s.spot.outerConeAngle),
            a.target.position.set(0, 0, -1),
            a.add(a.target);
          break;
        default:
          throw new Error("THREE.GLTFLoader: Unexpected light type: " + s.type);
      }
      return (
        a.position.set(0, 0, 0),
        (a.decay = 2),
        Cc(a, s),
        void 0 !== s.intensity && (a.intensity = s.intensity),
        (a.name = t.createUniqueName(s.name || "light_" + e)),
        (i = Promise.resolve(a)),
        t.cache.add(n, i),
        i
      );
    }
    getDependency(e, t) {
      if ("light" === e) return this._loadLight(t);
    }
    createNodeAttachment(e) {
      const t = this,
        n = this.parser,
        i = n.json.nodes[e],
        r = ((i.extensions && i.extensions[this.name]) || {}).light;
      return void 0 === r
        ? null
        : this._loadLight(r).then(function (e) {
            return n._getNodeRef(t.cache, r, e);
          });
    }
  }
  class Ql {
    constructor() {
      this.name = Zl.KHR_MATERIALS_UNLIT;
    }
    getMaterialType() {
      return Pi;
    }
    extendParams(e, t, n) {
      const i = [];
      (e.color = new Ci(1, 1, 1)), (e.opacity = 1);
      const r = t.pbrMetallicRoughness;
      if (r) {
        if (Array.isArray(r.baseColorFactor)) {
          const t = r.baseColorFactor;
          e.color.fromArray(t), (e.opacity = t[3]);
        }
        void 0 !== r.baseColorTexture &&
          i.push(n.assignTexture(e, "map", r.baseColorTexture, ft));
      }
      return Promise.all(i);
    }
  }
  class $l {
    constructor(e) {
      (this.parser = e), (this.name = Zl.KHR_MATERIALS_EMISSIVE_STRENGTH);
    }
    extendMaterialParams(e, t) {
      const n = this.parser.json.materials[e];
      if (!n.extensions || !n.extensions[this.name]) return Promise.resolve();
      const i = n.extensions[this.name].emissiveStrength;
      return void 0 !== i && (t.emissiveIntensity = i), Promise.resolve();
    }
  }
  class ec {
    constructor(e) {
      (this.parser = e), (this.name = Zl.KHR_MATERIALS_CLEARCOAT);
    }
    getMaterialType(e) {
      const t = this.parser.json.materials[e];
      return t.extensions && t.extensions[this.name] ? Yo : null;
    }
    extendMaterialParams(e, t) {
      const n = this.parser,
        i = n.json.materials[e];
      if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
      const r = [],
        s = i.extensions[this.name];
      if (
        (void 0 !== s.clearcoatFactor && (t.clearcoat = s.clearcoatFactor),
        void 0 !== s.clearcoatTexture &&
          r.push(n.assignTexture(t, "clearcoatMap", s.clearcoatTexture)),
        void 0 !== s.clearcoatRoughnessFactor &&
          (t.clearcoatRoughness = s.clearcoatRoughnessFactor),
        void 0 !== s.clearcoatRoughnessTexture &&
          r.push(
            n.assignTexture(
              t,
              "clearcoatRoughnessMap",
              s.clearcoatRoughnessTexture
            )
          ),
        void 0 !== s.clearcoatNormalTexture &&
          (r.push(
            n.assignTexture(t, "clearcoatNormalMap", s.clearcoatNormalTexture)
          ),
          void 0 !== s.clearcoatNormalTexture.scale))
      ) {
        const e = s.clearcoatNormalTexture.scale;
        t.clearcoatNormalScale = new Bt(e, e);
      }
      return Promise.all(r);
    }
  }
  class tc {
    constructor(e) {
      (this.parser = e), (this.name = Zl.KHR_MATERIALS_IRIDESCENCE);
    }
    getMaterialType(e) {
      const t = this.parser.json.materials[e];
      return t.extensions && t.extensions[this.name] ? Yo : null;
    }
    extendMaterialParams(e, t) {
      const n = this.parser,
        i = n.json.materials[e];
      if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
      const r = [],
        s = i.extensions[this.name];
      return (
        void 0 !== s.iridescenceFactor && (t.iridescence = s.iridescenceFactor),
        void 0 !== s.iridescenceTexture &&
          r.push(n.assignTexture(t, "iridescenceMap", s.iridescenceTexture)),
        void 0 !== s.iridescenceIor && (t.iridescenceIOR = s.iridescenceIor),
        void 0 === t.iridescenceThicknessRange &&
          (t.iridescenceThicknessRange = [100, 400]),
        void 0 !== s.iridescenceThicknessMinimum &&
          (t.iridescenceThicknessRange[0] = s.iridescenceThicknessMinimum),
        void 0 !== s.iridescenceThicknessMaximum &&
          (t.iridescenceThicknessRange[1] = s.iridescenceThicknessMaximum),
        void 0 !== s.iridescenceThicknessTexture &&
          r.push(
            n.assignTexture(
              t,
              "iridescenceThicknessMap",
              s.iridescenceThicknessTexture
            )
          ),
        Promise.all(r)
      );
    }
  }
  class nc {
    constructor(e) {
      (this.parser = e), (this.name = Zl.KHR_MATERIALS_SHEEN);
    }
    getMaterialType(e) {
      const t = this.parser.json.materials[e];
      return t.extensions && t.extensions[this.name] ? Yo : null;
    }
    extendMaterialParams(e, t) {
      const n = this.parser,
        i = n.json.materials[e];
      if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
      const r = [];
      (t.sheenColor = new Ci(0, 0, 0)), (t.sheenRoughness = 0), (t.sheen = 1);
      const s = i.extensions[this.name];
      return (
        void 0 !== s.sheenColorFactor &&
          t.sheenColor.fromArray(s.sheenColorFactor),
        void 0 !== s.sheenRoughnessFactor &&
          (t.sheenRoughness = s.sheenRoughnessFactor),
        void 0 !== s.sheenColorTexture &&
          r.push(n.assignTexture(t, "sheenColorMap", s.sheenColorTexture, ft)),
        void 0 !== s.sheenRoughnessTexture &&
          r.push(
            n.assignTexture(t, "sheenRoughnessMap", s.sheenRoughnessTexture)
          ),
        Promise.all(r)
      );
    }
  }
  class ic {
    constructor(e) {
      (this.parser = e), (this.name = Zl.KHR_MATERIALS_TRANSMISSION);
    }
    getMaterialType(e) {
      const t = this.parser.json.materials[e];
      return t.extensions && t.extensions[this.name] ? Yo : null;
    }
    extendMaterialParams(e, t) {
      const n = this.parser,
        i = n.json.materials[e];
      if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
      const r = [],
        s = i.extensions[this.name];
      return (
        void 0 !== s.transmissionFactor &&
          (t.transmission = s.transmissionFactor),
        void 0 !== s.transmissionTexture &&
          r.push(n.assignTexture(t, "transmissionMap", s.transmissionTexture)),
        Promise.all(r)
      );
    }
  }
  class rc {
    constructor(e) {
      (this.parser = e), (this.name = Zl.KHR_MATERIALS_VOLUME);
    }
    getMaterialType(e) {
      const t = this.parser.json.materials[e];
      return t.extensions && t.extensions[this.name] ? Yo : null;
    }
    extendMaterialParams(e, t) {
      const n = this.parser,
        i = n.json.materials[e];
      if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
      const r = [],
        s = i.extensions[this.name];
      (t.thickness = void 0 !== s.thicknessFactor ? s.thicknessFactor : 0),
        void 0 !== s.thicknessTexture &&
          r.push(n.assignTexture(t, "thicknessMap", s.thicknessTexture)),
        (t.attenuationDistance = s.attenuationDistance || 1 / 0);
      const a = s.attenuationColor || [1, 1, 1];
      return (t.attenuationColor = new Ci(a[0], a[1], a[2])), Promise.all(r);
    }
  }
  class sc {
    constructor(e) {
      (this.parser = e), (this.name = Zl.KHR_MATERIALS_IOR);
    }
    getMaterialType(e) {
      const t = this.parser.json.materials[e];
      return t.extensions && t.extensions[this.name] ? Yo : null;
    }
    extendMaterialParams(e, t) {
      const n = this.parser.json.materials[e];
      if (!n.extensions || !n.extensions[this.name]) return Promise.resolve();
      const i = n.extensions[this.name];
      return (t.ior = void 0 !== i.ior ? i.ior : 1.5), Promise.resolve();
    }
  }
  class ac {
    constructor(e) {
      (this.parser = e), (this.name = Zl.KHR_MATERIALS_SPECULAR);
    }
    getMaterialType(e) {
      const t = this.parser.json.materials[e];
      return t.extensions && t.extensions[this.name] ? Yo : null;
    }
    extendMaterialParams(e, t) {
      const n = this.parser,
        i = n.json.materials[e];
      if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
      const r = [],
        s = i.extensions[this.name];
      (t.specularIntensity =
        void 0 !== s.specularFactor ? s.specularFactor : 1),
        void 0 !== s.specularTexture &&
          r.push(n.assignTexture(t, "specularIntensityMap", s.specularTexture));
      const a = s.specularColorFactor || [1, 1, 1];
      return (
        (t.specularColor = new Ci(a[0], a[1], a[2])),
        void 0 !== s.specularColorTexture &&
          r.push(
            n.assignTexture(t, "specularColorMap", s.specularColorTexture, ft)
          ),
        Promise.all(r)
      );
    }
  }
  class oc {
    constructor(e) {
      (this.parser = e), (this.name = Zl.KHR_TEXTURE_BASISU);
    }
    loadTexture(e) {
      const t = this.parser,
        n = t.json,
        i = n.textures[e];
      if (!i.extensions || !i.extensions[this.name]) return null;
      const r = i.extensions[this.name],
        s = t.options.ktx2Loader;
      if (!s) {
        if (
          n.extensionsRequired &&
          n.extensionsRequired.indexOf(this.name) >= 0
        )
          throw new Error(
            "THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures"
          );
        return null;
      }
      return t.loadTextureImage(e, r.source, s);
    }
  }
  class lc {
    constructor(e) {
      (this.parser = e),
        (this.name = Zl.EXT_TEXTURE_WEBP),
        (this.isSupported = null);
    }
    loadTexture(e) {
      const t = this.name,
        n = this.parser,
        i = n.json,
        r = i.textures[e];
      if (!r.extensions || !r.extensions[t]) return null;
      const s = r.extensions[t],
        a = i.images[s.source];
      let o = n.textureLoader;
      if (a.uri) {
        const e = n.options.manager.getHandler(a.uri);
        null !== e && (o = e);
      }
      return this.detectSupport().then(function (r) {
        if (r) return n.loadTextureImage(e, s.source, o);
        if (i.extensionsRequired && i.extensionsRequired.indexOf(t) >= 0)
          throw new Error(
            "THREE.GLTFLoader: WebP required by asset but unsupported."
          );
        return n.loadTexture(e);
      });
    }
    detectSupport() {
      return (
        this.isSupported ||
          (this.isSupported = new Promise(function (e) {
            const t = new Image();
            (t.src =
              "data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA"),
              (t.onload = t.onerror =
                function () {
                  e(1 === t.height);
                });
          })),
        this.isSupported
      );
    }
  }
  class cc {
    constructor(e) {
      (this.parser = e),
        (this.name = Zl.EXT_TEXTURE_AVIF),
        (this.isSupported = null);
    }
    loadTexture(e) {
      const t = this.name,
        n = this.parser,
        i = n.json,
        r = i.textures[e];
      if (!r.extensions || !r.extensions[t]) return null;
      const s = r.extensions[t],
        a = i.images[s.source];
      let o = n.textureLoader;
      if (a.uri) {
        const e = n.options.manager.getHandler(a.uri);
        null !== e && (o = e);
      }
      return this.detectSupport().then(function (r) {
        if (r) return n.loadTextureImage(e, s.source, o);
        if (i.extensionsRequired && i.extensionsRequired.indexOf(t) >= 0)
          throw new Error(
            "THREE.GLTFLoader: AVIF required by asset but unsupported."
          );
        return n.loadTexture(e);
      });
    }
    detectSupport() {
      return (
        this.isSupported ||
          (this.isSupported = new Promise(function (e) {
            const t = new Image();
            (t.src =
              "data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI="),
              (t.onload = t.onerror =
                function () {
                  e(1 === t.height);
                });
          })),
        this.isSupported
      );
    }
  }
  class hc {
    constructor(e) {
      (this.name = Zl.EXT_MESHOPT_COMPRESSION), (this.parser = e);
    }
    loadBufferView(e) {
      const t = this.parser.json,
        n = t.bufferViews[e];
      if (n.extensions && n.extensions[this.name]) {
        const e = n.extensions[this.name],
          i = this.parser.getDependency("buffer", e.buffer),
          r = this.parser.options.meshoptDecoder;
        if (!r || !r.supported) {
          if (
            t.extensionsRequired &&
            t.extensionsRequired.indexOf(this.name) >= 0
          )
            throw new Error(
              "THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files"
            );
          return null;
        }
        return i.then(function (t) {
          const n = e.byteOffset || 0,
            i = e.byteLength || 0,
            s = e.count,
            a = e.byteStride,
            o = new Uint8Array(t, n, i);
          return r.decodeGltfBufferAsync
            ? r
                .decodeGltfBufferAsync(s, a, o, e.mode, e.filter)
                .then(function (e) {
                  return e.buffer;
                })
            : r.ready.then(function () {
                const t = new ArrayBuffer(s * a);
                return (
                  r.decodeGltfBuffer(
                    new Uint8Array(t),
                    s,
                    a,
                    o,
                    e.mode,
                    e.filter
                  ),
                  t
                );
              });
        });
      }
      return null;
    }
  }
  class uc {
    constructor(e) {
      (this.name = Zl.EXT_MESH_GPU_INSTANCING), (this.parser = e);
    }
    createNodeMesh(e) {
      const t = this.parser.json,
        n = t.nodes[e];
      if (!n.extensions || !n.extensions[this.name] || void 0 === n.mesh)
        return null;
      const i = t.meshes[n.mesh];
      for (const e of i.primitives)
        if (
          e.mode !== yc.TRIANGLES &&
          e.mode !== yc.TRIANGLE_STRIP &&
          e.mode !== yc.TRIANGLE_FAN &&
          void 0 !== e.mode
        )
          return null;
      const r = n.extensions[this.name].attributes,
        s = [],
        a = {};
      for (const e in r)
        s.push(
          this.parser
            .getDependency("accessor", r[e])
            .then((t) => ((a[e] = t), a[e]))
        );
      return s.length < 1
        ? null
        : (s.push(this.parser.createNodeMesh(e)),
          Promise.all(s).then((e) => {
            const t = e.pop(),
              n = t.isGroup ? t.children : [t],
              i = e[0].count,
              r = [];
            for (const e of n) {
              const t = new kn(),
                n = new jt(),
                s = new Wt(),
                o = new jt(1, 1, 1),
                l = new Lo(e.geometry, e.material, i);
              for (let e = 0; e < i; e++)
                a.TRANSLATION && n.fromBufferAttribute(a.TRANSLATION, e),
                  a.ROTATION && s.fromBufferAttribute(a.ROTATION, e),
                  a.SCALE && o.fromBufferAttribute(a.SCALE, e),
                  l.setMatrixAt(e, t.compose(n, s, o));
              for (const t in a)
                "TRANSLATION" !== t &&
                  "ROTATION" !== t &&
                  "SCALE" !== t &&
                  e.geometry.setAttribute(t, a[t]);
              ui.prototype.copy.call(l, e),
                (l.frustumCulled = !1),
                this.parser.assignFinalMaterial(l),
                r.push(l);
            }
            return t.isGroup ? (t.clear(), t.add(...r), t) : r[0];
          }));
    }
  }
  const dc = "glTF";
  class pc {
    constructor(e) {
      (this.name = Zl.KHR_BINARY_GLTF),
        (this.content = null),
        (this.body = null);
      const t = new DataView(e, 0, 12),
        n = new TextDecoder();
      if (
        ((this.header = {
          magic: n.decode(new Uint8Array(e.slice(0, 4))),
          version: t.getUint32(4, !0),
          length: t.getUint32(8, !0),
        }),
        this.header.magic !== dc)
      )
        throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");
      if (this.header.version < 2)
        throw new Error("THREE.GLTFLoader: Legacy binary file detected.");
      const i = this.header.length - 12,
        r = new DataView(e, 12);
      let s = 0;
      for (; s < i; ) {
        const t = r.getUint32(s, !0);
        s += 4;
        const i = r.getUint32(s, !0);
        if (((s += 4), 1313821514 === i)) {
          const i = new Uint8Array(e, 12 + s, t);
          this.content = n.decode(i);
        } else if (5130562 === i) {
          const n = 12 + s;
          this.body = e.slice(n, n + t);
        }
        s += t;
      }
      if (null === this.content)
        throw new Error("THREE.GLTFLoader: JSON content not found.");
    }
  }
  class fc {
    constructor(e, t) {
      if (!t)
        throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");
      (this.name = Zl.KHR_DRACO_MESH_COMPRESSION),
        (this.json = e),
        (this.dracoLoader = t),
        this.dracoLoader.preload();
    }
    decodePrimitive(e, t) {
      const n = this.json,
        i = this.dracoLoader,
        r = e.extensions[this.name].bufferView,
        s = e.extensions[this.name].attributes,
        a = {},
        o = {},
        l = {};
      for (const e in s) {
        const t = Tc[e] || e.toLowerCase();
        a[t] = s[e];
      }
      for (const t in e.attributes) {
        const i = Tc[t] || t.toLowerCase();
        if (void 0 !== s[t]) {
          const r = n.accessors[e.attributes[t]],
            s = Mc[r.componentType];
          (l[i] = s.name), (o[i] = !0 === r.normalized);
        }
      }
      return t.getDependency("bufferView", r).then(function (e) {
        return new Promise(function (t) {
          i.decodeDracoFile(
            e,
            function (e) {
              for (const t in e.attributes) {
                const n = e.attributes[t],
                  i = o[t];
                void 0 !== i && (n.normalized = i);
              }
              t(e);
            },
            a,
            l
          );
        });
      });
    }
  }
  class mc {
    constructor() {
      this.name = Zl.KHR_TEXTURE_TRANSFORM;
    }
    extendTexture(e, t) {
      return (
        void 0 !== t.texCoord &&
          console.warn(
            'THREE.GLTFLoader: Custom UV sets in "' +
              this.name +
              '" extension not yet supported.'
          ),
        (void 0 === t.offset && void 0 === t.rotation && void 0 === t.scale) ||
          ((e = e.clone()),
          void 0 !== t.offset && e.offset.fromArray(t.offset),
          void 0 !== t.rotation && (e.rotation = t.rotation),
          void 0 !== t.scale && e.repeat.fromArray(t.scale),
          (e.needsUpdate = !0)),
        e
      );
    }
  }
  class gc {
    constructor() {
      this.name = Zl.KHR_MESH_QUANTIZATION;
    }
  }
  class _c extends tl {
    constructor(e, t, n, i) {
      super(e, t, n, i);
    }
    copySampleValue_(e) {
      const t = this.resultBuffer,
        n = this.sampleValues,
        i = this.valueSize,
        r = e * i * 3 + i;
      for (let e = 0; e !== i; e++) t[e] = n[r + e];
      return t;
    }
    interpolate_(e, t, n, i) {
      const r = this.resultBuffer,
        s = this.sampleValues,
        a = this.valueSize,
        o = 2 * a,
        l = 3 * a,
        c = i - t,
        h = (n - t) / c,
        u = h * h,
        d = u * h,
        p = e * l,
        f = p - l,
        m = -2 * d + 3 * u,
        g = d - u,
        _ = 1 - m,
        v = g - u + h;
      for (let e = 0; e !== a; e++) {
        const t = s[f + e + a],
          n = s[f + e + o] * c,
          i = s[p + e + a],
          l = s[p + e] * c;
        r[e] = _ * t + v * n + m * i + g * l;
      }
      return r;
    }
  }
  const vc = new Wt();
  class xc extends _c {
    interpolate_(e, t, n, i) {
      const r = super.interpolate_(e, t, n, i);
      return vc.fromArray(r).normalize().toArray(r), r;
    }
  }
  const yc = {
      FLOAT: 5126,
      FLOAT_MAT3: 35675,
      FLOAT_MAT4: 35676,
      FLOAT_VEC2: 35664,
      FLOAT_VEC3: 35665,
      FLOAT_VEC4: 35666,
      LINEAR: 9729,
      REPEAT: 10497,
      SAMPLER_2D: 35678,
      POINTS: 0,
      LINES: 1,
      LINE_LOOP: 2,
      LINE_STRIP: 3,
      TRIANGLES: 4,
      TRIANGLE_STRIP: 5,
      TRIANGLE_FAN: 6,
      UNSIGNED_BYTE: 5121,
      UNSIGNED_SHORT: 5123,
    },
    Mc = {
      5120: Int8Array,
      5121: Uint8Array,
      5122: Int16Array,
      5123: Uint16Array,
      5125: Uint32Array,
      5126: Float32Array,
    },
    bc = { 9728: ie, 9729: ae, 9984: re, 9985: oe, 9986: se, 9987: le },
    Sc = { 33071: te, 33648: ne, 10497: ee },
    wc = { SCALAR: 1, VEC2: 2, VEC3: 3, VEC4: 4, MAT2: 4, MAT3: 9, MAT4: 16 },
    Tc = {
      POSITION: "position",
      NORMAL: "normal",
      TANGENT: "tangent",
      TEXCOORD_0: "uv",
      TEXCOORD_1: "uv2",
      COLOR_0: "color",
      WEIGHTS_0: "skinWeight",
      JOINTS_0: "skinIndex",
    },
    Ec = {
      scale: "scale",
      translation: "position",
      rotation: "quaternion",
      weights: "morphTargetInfluences",
    },
    Ac = { CUBICSPLINE: void 0, LINEAR: lt, STEP: ot };
  function Lc(e, t, n) {
    for (const i in n.extensions)
      void 0 === e[i] &&
        ((t.userData.gltfExtensions = t.userData.gltfExtensions || {}),
        (t.userData.gltfExtensions[i] = n.extensions[i]));
  }
  function Cc(e, t) {
    void 0 !== t.extras &&
      ("object" == typeof t.extras
        ? Object.assign(e.userData, t.extras)
        : console.warn(
            "THREE.GLTFLoader: Ignoring primitive type .extras, " + t.extras
          ));
  }
  function Rc(e, t) {
    if ((e.updateMorphTargets(), void 0 !== t.weights))
      for (let n = 0, i = t.weights.length; n < i; n++)
        e.morphTargetInfluences[n] = t.weights[n];
    if (t.extras && Array.isArray(t.extras.targetNames)) {
      const n = t.extras.targetNames;
      if (e.morphTargetInfluences.length === n.length) {
        e.morphTargetDictionary = {};
        for (let t = 0, i = n.length; t < i; t++)
          e.morphTargetDictionary[n[t]] = t;
      } else
        console.warn(
          "THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names."
        );
    }
  }
  function Pc(e) {
    const t = e.extensions && e.extensions[Zl.KHR_DRACO_MESH_COMPRESSION];
    let n;
    return (
      (n = t
        ? "draco:" + t.bufferView + ":" + t.indices + ":" + Dc(t.attributes)
        : e.indices + ":" + Dc(e.attributes) + ":" + e.mode),
      n
    );
  }
  function Dc(e) {
    let t = "";
    const n = Object.keys(e).sort();
    for (let i = 0, r = n.length; i < r; i++) t += n[i] + ":" + e[n[i]] + ";";
    return t;
  }
  function Ic(e) {
    switch (e) {
      case Int8Array:
        return 1 / 127;
      case Uint8Array:
        return 1 / 255;
      case Int16Array:
        return 1 / 32767;
      case Uint16Array:
        return 1 / 65535;
      default:
        throw new Error(
          "THREE.GLTFLoader: Unsupported normalized accessor component type."
        );
    }
  }
  const Nc = new kn();
  class Oc {
    constructor(e = {}, t = {}) {
      (this.json = e),
        (this.extensions = {}),
        (this.plugins = {}),
        (this.options = t),
        (this.cache = new Kl()),
        (this.associations = new Map()),
        (this.primitiveCache = {}),
        (this.nodeCache = {}),
        (this.meshCache = { refs: {}, uses: {} }),
        (this.cameraCache = { refs: {}, uses: {} }),
        (this.lightCache = { refs: {}, uses: {} }),
        (this.sourceCache = {}),
        (this.textureCache = {}),
        (this.nodeNamesUsed = {});
      let n = !1,
        i = !1,
        r = -1;
      "undefined" != typeof navigator &&
        ((n =
          !0 === /^((?!chrome|android).)*safari/i.test(navigator.userAgent)),
        (i = navigator.userAgent.indexOf("Firefox") > -1),
        (r = i ? navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1] : -1)),
        "undefined" == typeof createImageBitmap || n || (i && r < 98)
          ? (this.textureLoader = new Sl(this.options.manager))
          : (this.textureLoader = new Bl(this.options.manager)),
        this.textureLoader.setCrossOrigin(this.options.crossOrigin),
        this.textureLoader.setRequestHeader(this.options.requestHeader),
        (this.fileLoader = new Ml(this.options.manager)),
        this.fileLoader.setResponseType("arraybuffer"),
        "use-credentials" === this.options.crossOrigin &&
          this.fileLoader.setWithCredentials(!0);
    }
    setExtensions(e) {
      this.extensions = e;
    }
    setPlugins(e) {
      this.plugins = e;
    }
    parse(e, t) {
      const n = this,
        i = this.json,
        r = this.extensions;
      this.cache.removeAll(),
        (this.nodeCache = {}),
        this._invokeAll(function (e) {
          return e._markDefs && e._markDefs();
        }),
        Promise.all(
          this._invokeAll(function (e) {
            return e.beforeRoot && e.beforeRoot();
          })
        )
          .then(function () {
            return Promise.all([
              n.getDependencies("scene"),
              n.getDependencies("animation"),
              n.getDependencies("camera"),
            ]);
          })
          .then(function (t) {
            const s = {
              scene: t[0][i.scene || 0],
              scenes: t[0],
              animations: t[1],
              cameras: t[2],
              asset: i.asset,
              parser: n,
              userData: {},
            };
            Lc(r, s, i),
              Cc(s, i),
              Promise.all(
                n._invokeAll(function (e) {
                  return e.afterRoot && e.afterRoot(s);
                })
              ).then(function () {
                e(s);
              });
          })
          .catch(t);
    }
    _markDefs() {
      const e = this.json.nodes || [],
        t = this.json.skins || [],
        n = this.json.meshes || [];
      for (let n = 0, i = t.length; n < i; n++) {
        const i = t[n].joints;
        for (let t = 0, n = i.length; t < n; t++) e[i[t]].isBone = !0;
      }
      for (let t = 0, i = e.length; t < i; t++) {
        const i = e[t];
        void 0 !== i.mesh &&
          (this._addNodeRef(this.meshCache, i.mesh),
          void 0 !== i.skin && (n[i.mesh].isSkinnedMesh = !0)),
          void 0 !== i.camera && this._addNodeRef(this.cameraCache, i.camera);
      }
    }
    _addNodeRef(e, t) {
      void 0 !== t &&
        (void 0 === e.refs[t] && (e.refs[t] = e.uses[t] = 0), e.refs[t]++);
    }
    _getNodeRef(e, t, n) {
      if (e.refs[t] <= 1) return n;
      const i = n.clone(),
        r = (e, t) => {
          const n = this.associations.get(e);
          null != n && this.associations.set(t, n);
          for (const [n, i] of e.children.entries()) r(i, t.children[n]);
        };
      return r(n, i), (i.name += "_instance_" + e.uses[t]++), i;
    }
    _invokeOne(e) {
      const t = Object.values(this.plugins);
      t.push(this);
      for (let n = 0; n < t.length; n++) {
        const i = e(t[n]);
        if (i) return i;
      }
      return null;
    }
    _invokeAll(e) {
      const t = Object.values(this.plugins);
      t.unshift(this);
      const n = [];
      for (let i = 0; i < t.length; i++) {
        const r = e(t[i]);
        r && n.push(r);
      }
      return n;
    }
    getDependency(e, t) {
      const n = e + ":" + t;
      let i = this.cache.get(n);
      if (!i) {
        switch (e) {
          case "scene":
            i = this.loadScene(t);
            break;
          case "node":
            i = this._invokeOne(function (e) {
              return e.loadNode && e.loadNode(t);
            });
            break;
          case "mesh":
            i = this._invokeOne(function (e) {
              return e.loadMesh && e.loadMesh(t);
            });
            break;
          case "accessor":
            i = this.loadAccessor(t);
            break;
          case "bufferView":
            i = this._invokeOne(function (e) {
              return e.loadBufferView && e.loadBufferView(t);
            });
            break;
          case "buffer":
            i = this.loadBuffer(t);
            break;
          case "material":
            i = this._invokeOne(function (e) {
              return e.loadMaterial && e.loadMaterial(t);
            });
            break;
          case "texture":
            i = this._invokeOne(function (e) {
              return e.loadTexture && e.loadTexture(t);
            });
            break;
          case "skin":
            i = this.loadSkin(t);
            break;
          case "animation":
            i = this._invokeOne(function (e) {
              return e.loadAnimation && e.loadAnimation(t);
            });
            break;
          case "camera":
            i = this.loadCamera(t);
            break;
          default:
            if (
              ((i = this._invokeOne(function (n) {
                return n != this && n.getDependency && n.getDependency(e, t);
              })),
              !i)
            )
              throw new Error("Unknown type: " + e);
        }
        this.cache.add(n, i);
      }
      return i;
    }
    getDependencies(e) {
      let t = this.cache.get(e);
      if (!t) {
        const n = this,
          i = this.json[e + ("mesh" === e ? "es" : "s")] || [];
        (t = Promise.all(
          i.map(function (t, i) {
            return n.getDependency(e, i);
          })
        )),
          this.cache.add(e, t);
      }
      return t;
    }
    loadBuffer(e) {
      const t = this.json.buffers[e],
        n = this.fileLoader;
      if (t.type && "arraybuffer" !== t.type)
        throw new Error(
          "THREE.GLTFLoader: " + t.type + " buffer type is not supported."
        );
      if (void 0 === t.uri && 0 === e)
        return Promise.resolve(this.extensions[Zl.KHR_BINARY_GLTF].body);
      const i = this.options;
      return new Promise(function (e, r) {
        n.load(Fl.resolveURL(t.uri, i.path), e, void 0, function () {
          r(
            new Error(
              'THREE.GLTFLoader: Failed to load buffer "' + t.uri + '".'
            )
          );
        });
      });
    }
    loadBufferView(e) {
      const t = this.json.bufferViews[e];
      return this.getDependency("buffer", t.buffer).then(function (e) {
        const n = t.byteLength || 0,
          i = t.byteOffset || 0;
        return e.slice(i, i + n);
      });
    }
    loadAccessor(e) {
      const t = this,
        n = this.json,
        i = this.json.accessors[e];
      if (void 0 === i.bufferView && void 0 === i.sparse) {
        const e = wc[i.type],
          t = Mc[i.componentType],
          n = !0 === i.normalized,
          r = new t(i.count * e);
        return Promise.resolve(new Ni(r, e, n));
      }
      const r = [];
      return (
        void 0 !== i.bufferView
          ? r.push(this.getDependency("bufferView", i.bufferView))
          : r.push(null),
        void 0 !== i.sparse &&
          (r.push(
            this.getDependency("bufferView", i.sparse.indices.bufferView)
          ),
          r.push(this.getDependency("bufferView", i.sparse.values.bufferView))),
        Promise.all(r).then(function (e) {
          const r = e[0],
            s = wc[i.type],
            a = Mc[i.componentType],
            o = a.BYTES_PER_ELEMENT,
            l = o * s,
            c = i.byteOffset || 0,
            h =
              void 0 !== i.bufferView
                ? n.bufferViews[i.bufferView].byteStride
                : void 0,
            u = !0 === i.normalized;
          let d, p;
          if (h && h !== l) {
            const e = Math.floor(c / h),
              n =
                "InterleavedBuffer:" +
                i.bufferView +
                ":" +
                i.componentType +
                ":" +
                e +
                ":" +
                i.count;
            let l = t.cache.get(n);
            l ||
              ((d = new a(r, e * h, (i.count * h) / o)),
              (l = new oo(d, h / o)),
              t.cache.add(n, l)),
              (p = new co(l, s, (c % h) / o, u));
          } else (d = null === r ? new a(i.count * s) : new a(r, c, i.count * s)), (p = new Ni(d, s, u));
          if (void 0 !== i.sparse) {
            const t = wc.SCALAR,
              n = Mc[i.sparse.indices.componentType],
              o = i.sparse.indices.byteOffset || 0,
              l = i.sparse.values.byteOffset || 0,
              c = new n(e[1], o, i.sparse.count * t),
              h = new a(e[2], l, i.sparse.count * s);
            null !== r &&
              (p = new Ni(p.array.slice(), p.itemSize, p.normalized));
            for (let e = 0, t = c.length; e < t; e++) {
              const t = c[e];
              if (
                (p.setX(t, h[e * s]),
                s >= 2 && p.setY(t, h[e * s + 1]),
                s >= 3 && p.setZ(t, h[e * s + 2]),
                s >= 4 && p.setW(t, h[e * s + 3]),
                s >= 5)
              )
                throw new Error(
                  "THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute."
                );
            }
          }
          return p;
        })
      );
    }
    loadTexture(e) {
      const t = this.json,
        n = this.options,
        i = t.textures[e].source,
        r = t.images[i];
      let s = this.textureLoader;
      if (r.uri) {
        const e = n.manager.getHandler(r.uri);
        null !== e && (s = e);
      }
      return this.loadTextureImage(e, i, s);
    }
    loadTextureImage(e, t, n) {
      const i = this,
        r = this.json,
        s = r.textures[e],
        a = r.images[t],
        o = (a.uri || a.bufferView) + ":" + s.sampler;
      if (this.textureCache[o]) return this.textureCache[o];
      const l = this.loadImageSource(t, n)
        .then(function (t) {
          (t.flipY = !1), (t.name = s.name || a.name || "");
          const n = (r.samplers || {})[s.sampler] || {};
          return (
            (t.magFilter = bc[n.magFilter] || ae),
            (t.minFilter = bc[n.minFilter] || le),
            (t.wrapS = Sc[n.wrapS] || ee),
            (t.wrapT = Sc[n.wrapT] || ee),
            i.associations.set(t, { textures: e }),
            t
          );
        })
        .catch(function () {
          return null;
        });
      return (this.textureCache[o] = l), l;
    }
    loadImageSource(e, t) {
      const n = this.json,
        i = this.options;
      if (void 0 !== this.sourceCache[e])
        return this.sourceCache[e].then((e) => e.clone());
      const r = n.images[e],
        s = self.URL || self.webkitURL;
      let a = r.uri || "",
        o = !1;
      if (void 0 !== r.bufferView)
        a = this.getDependency("bufferView", r.bufferView).then(function (e) {
          o = !0;
          const t = new Blob([e], { type: r.mimeType });
          return (a = s.createObjectURL(t)), a;
        });
      else if (void 0 === r.uri)
        throw new Error(
          "THREE.GLTFLoader: Image " + e + " is missing URI and bufferView"
        );
      const l = Promise.resolve(a)
        .then(function (e) {
          return new Promise(function (n, r) {
            let s = n;
            !0 === t.isImageBitmapLoader &&
              (s = function (e) {
                const t = new ln(e);
                (t.needsUpdate = !0), n(t);
              }),
              t.load(Fl.resolveURL(e, i.path), s, void 0, r);
          });
        })
        .then(function (e) {
          var t;
          return (
            !0 === o && s.revokeObjectURL(a),
            (e.userData.mimeType =
              r.mimeType ||
              ((t = r.uri).search(/\.jpe?g($|\?)/i) > 0 ||
              0 === t.search(/^data\:image\/jpeg/)
                ? "image/jpeg"
                : t.search(/\.webp($|\?)/i) > 0 ||
                  0 === t.search(/^data\:image\/webp/)
                ? "image/webp"
                : "image/png")),
            e
          );
        })
        .catch(function (e) {
          throw (
            (console.error("THREE.GLTFLoader: Couldn't load texture", a), e)
          );
        });
      return (this.sourceCache[e] = l), l;
    }
    assignTexture(e, t, n, i) {
      const r = this;
      return this.getDependency("texture", n.index).then(function (s) {
        if (!s) return null;
        if (
          (void 0 === n.texCoord ||
            0 == n.texCoord ||
            ("aoMap" === t && 1 == n.texCoord) ||
            console.warn(
              "THREE.GLTFLoader: Custom UV set " +
                n.texCoord +
                " for texture " +
                t +
                " not yet supported."
            ),
          r.extensions[Zl.KHR_TEXTURE_TRANSFORM])
        ) {
          const e =
            void 0 !== n.extensions
              ? n.extensions[Zl.KHR_TEXTURE_TRANSFORM]
              : void 0;
          if (e) {
            const t = r.associations.get(s);
            (s = r.extensions[Zl.KHR_TEXTURE_TRANSFORM].extendTexture(s, e)),
              r.associations.set(s, t);
          }
        }
        return void 0 !== i && (s.encoding = i), (e[t] = s), s;
      });
    }
    assignFinalMaterial(e) {
      const t = e.geometry;
      let n = e.material;
      const i = void 0 === t.attributes.tangent,
        r = void 0 !== t.attributes.color,
        s = void 0 === t.attributes.normal;
      if (e.isPoints) {
        const e = "PointsMaterial:" + n.uuid;
        let t = this.cache.get(e);
        t ||
          ((t = new ko()),
          wi.prototype.copy.call(t, n),
          t.color.copy(n.color),
          (t.map = n.map),
          (t.sizeAttenuation = !1),
          this.cache.add(e, t)),
          (n = t);
      } else if (e.isLine) {
        const e = "LineBasicMaterial:" + n.uuid;
        let t = this.cache.get(e);
        t ||
          ((t = new Co()),
          wi.prototype.copy.call(t, n),
          t.color.copy(n.color),
          this.cache.add(e, t)),
          (n = t);
      }
      if (i || r || s) {
        let e = "ClonedMaterial:" + n.uuid + ":";
        i && (e += "derivative-tangents:"),
          r && (e += "vertex-colors:"),
          s && (e += "flat-shading:");
        let t = this.cache.get(e);
        t ||
          ((t = n.clone()),
          r && (t.vertexColors = !0),
          s && (t.flatShading = !0),
          i &&
            (t.normalScale && (t.normalScale.y *= -1),
            t.clearcoatNormalScale && (t.clearcoatNormalScale.y *= -1)),
          this.cache.add(e, t),
          this.associations.set(t, this.associations.get(n))),
          (n = t);
      }
      n.aoMap &&
        void 0 === t.attributes.uv2 &&
        void 0 !== t.attributes.uv &&
        t.setAttribute("uv2", t.attributes.uv),
        (e.material = n);
    }
    getMaterialType() {
      return qo;
    }
    loadMaterial(e) {
      const t = this,
        n = this.json,
        i = this.extensions,
        r = n.materials[e];
      let s;
      const a = {},
        o = [];
      if ((r.extensions || {})[Zl.KHR_MATERIALS_UNLIT]) {
        const e = i[Zl.KHR_MATERIALS_UNLIT];
        (s = e.getMaterialType()), o.push(e.extendParams(a, r, t));
      } else {
        const n = r.pbrMetallicRoughness || {};
        if (
          ((a.color = new Ci(1, 1, 1)),
          (a.opacity = 1),
          Array.isArray(n.baseColorFactor))
        ) {
          const e = n.baseColorFactor;
          a.color.fromArray(e), (a.opacity = e[3]);
        }
        void 0 !== n.baseColorTexture &&
          o.push(t.assignTexture(a, "map", n.baseColorTexture, ft)),
          (a.metalness = void 0 !== n.metallicFactor ? n.metallicFactor : 1),
          (a.roughness = void 0 !== n.roughnessFactor ? n.roughnessFactor : 1),
          void 0 !== n.metallicRoughnessTexture &&
            (o.push(
              t.assignTexture(a, "metalnessMap", n.metallicRoughnessTexture)
            ),
            o.push(
              t.assignTexture(a, "roughnessMap", n.metallicRoughnessTexture)
            )),
          (s = this._invokeOne(function (t) {
            return t.getMaterialType && t.getMaterialType(e);
          })),
          o.push(
            Promise.all(
              this._invokeAll(function (t) {
                return t.extendMaterialParams && t.extendMaterialParams(e, a);
              })
            )
          );
      }
      !0 === r.doubleSided && (a.side = c);
      const l = r.alphaMode || "OPAQUE";
      if (
        ("BLEND" === l
          ? ((a.transparent = !0), (a.depthWrite = !1))
          : ((a.transparent = !1),
            "MASK" === l &&
              (a.alphaTest = void 0 !== r.alphaCutoff ? r.alphaCutoff : 0.5)),
        void 0 !== r.normalTexture &&
          s !== Pi &&
          (o.push(t.assignTexture(a, "normalMap", r.normalTexture)),
          (a.normalScale = new Bt(1, 1)),
          void 0 !== r.normalTexture.scale))
      ) {
        const e = r.normalTexture.scale;
        a.normalScale.set(e, e);
      }
      return (
        void 0 !== r.occlusionTexture &&
          s !== Pi &&
          (o.push(t.assignTexture(a, "aoMap", r.occlusionTexture)),
          void 0 !== r.occlusionTexture.strength &&
            (a.aoMapIntensity = r.occlusionTexture.strength)),
        void 0 !== r.emissiveFactor &&
          s !== Pi &&
          (a.emissive = new Ci().fromArray(r.emissiveFactor)),
        void 0 !== r.emissiveTexture &&
          s !== Pi &&
          o.push(t.assignTexture(a, "emissiveMap", r.emissiveTexture, ft)),
        Promise.all(o).then(function () {
          const n = new s(a);
          return (
            r.name && (n.name = r.name),
            Cc(n, r),
            t.associations.set(n, { materials: e }),
            r.extensions && Lc(i, n, r),
            n
          );
        })
      );
    }
    createUniqueName(e) {
      const t = ql.sanitizeNodeName(e || "");
      let n = t;
      for (let e = 1; this.nodeNamesUsed[n]; ++e) n = t + "_" + e;
      return (this.nodeNamesUsed[n] = !0), n;
    }
    loadGeometries(e) {
      const t = this,
        n = this.extensions,
        i = this.primitiveCache;
      function r(e) {
        return n[Zl.KHR_DRACO_MESH_COMPRESSION]
          .decodePrimitive(e, t)
          .then(function (n) {
            return Uc(n, e, t);
          });
      }
      const s = [];
      for (let n = 0, a = e.length; n < a; n++) {
        const a = e[n],
          o = Pc(a),
          l = i[o];
        if (l) s.push(l.promise);
        else {
          let e;
          (e =
            a.extensions && a.extensions[Zl.KHR_DRACO_MESH_COMPRESSION]
              ? r(a)
              : Uc(new ji(), a, t)),
            (i[o] = { primitive: a, promise: e }),
            s.push(e);
        }
      }
      return Promise.all(s);
    }
    loadMesh(e) {
      const t = this,
        n = this.json,
        i = this.extensions,
        r = n.meshes[e],
        s = r.primitives,
        a = [];
      for (let e = 0, t = s.length; e < t; e++) {
        const t =
          void 0 === s[e].material
            ? (void 0 === (l = this.cache).DefaultMaterial &&
                (l.DefaultMaterial = new qo({
                  color: 16777215,
                  emissive: 0,
                  metalness: 1,
                  roughness: 1,
                  transparent: !1,
                  depthTest: !0,
                  side: o,
                })),
              l.DefaultMaterial)
            : this.getDependency("material", s[e].material);
        a.push(t);
      }
      var l;
      return (
        a.push(t.loadGeometries(s)),
        Promise.all(a).then(function (n) {
          const a = n.slice(0, n.length - 1),
            o = n[n.length - 1],
            l = [];
          for (let n = 0, c = o.length; n < c; n++) {
            const c = o[n],
              h = s[n];
            let u;
            const d = a[n];
            if (
              h.mode === yc.TRIANGLES ||
              h.mode === yc.TRIANGLE_STRIP ||
              h.mode === yc.TRIANGLE_FAN ||
              void 0 === h.mode
            )
              (u = !0 === r.isSkinnedMesh ? new go(c, d) : new ar(c, d)),
                !0 === u.isSkinnedMesh && u.normalizeSkinWeights(),
                h.mode === yc.TRIANGLE_STRIP
                  ? (u.geometry = Yl(u.geometry, ut))
                  : h.mode === yc.TRIANGLE_FAN &&
                    (u.geometry = Yl(u.geometry, dt));
            else if (h.mode === yc.LINES) u = new Fo(c, d);
            else if (h.mode === yc.LINE_STRIP) u = new Oo(c, d);
            else if (h.mode === yc.LINE_LOOP) u = new Bo(c, d);
            else {
              if (h.mode !== yc.POINTS)
                throw new Error(
                  "THREE.GLTFLoader: Primitive mode unsupported: " + h.mode
                );
              u = new jo(c, d);
            }
            Object.keys(u.geometry.morphAttributes).length > 0 && Rc(u, r),
              (u.name = t.createUniqueName(r.name || "mesh_" + e)),
              Cc(u, r),
              h.extensions && Lc(i, u, h),
              t.assignFinalMaterial(u),
              l.push(u);
          }
          for (let n = 0, i = l.length; n < i; n++)
            t.associations.set(l[n], { meshes: e, primitives: n });
          if (1 === l.length) return l[0];
          const c = new $a();
          t.associations.set(c, { meshes: e });
          for (let e = 0, t = l.length; e < t; e++) c.add(l[e]);
          return c;
        })
      );
    }
    loadCamera(e) {
      let t;
      const n = this.json.cameras[e],
        i = n[n.type];
      if (i)
        return (
          "perspective" === n.type
            ? (t = new mr(
                Ft(i.yfov),
                i.aspectRatio || 1,
                i.znear || 1,
                i.zfar || 2e6
              ))
            : "orthographic" === n.type &&
              (t = new kr(-i.xmag, i.xmag, i.ymag, -i.ymag, i.znear, i.zfar)),
          n.name && (t.name = this.createUniqueName(n.name)),
          Cc(t, n),
          Promise.resolve(t)
        );
      console.warn("THREE.GLTFLoader: Missing camera parameters.");
    }
    loadSkin(e) {
      const t = this.json.skins[e],
        n = [];
      for (let e = 0, i = t.joints.length; e < i; e++)
        n.push(this._loadNodeShallow(t.joints[e]));
      return (
        void 0 !== t.inverseBindMatrices
          ? n.push(this.getDependency("accessor", t.inverseBindMatrices))
          : n.push(null),
        Promise.all(n).then(function (e) {
          const n = e.pop(),
            i = e,
            r = [],
            s = [];
          for (let e = 0, a = i.length; e < a; e++) {
            const a = i[e];
            if (a) {
              r.push(a);
              const t = new kn();
              null !== n && t.fromArray(n.array, 16 * e), s.push(t);
            } else
              console.warn(
                'THREE.GLTFLoader: Joint "%s" could not be found.',
                t.joints[e]
              );
          }
          return new Mo(r, s);
        })
      );
    }
    loadAnimation(e) {
      const t = this.json.animations[e],
        n = [],
        i = [],
        r = [],
        s = [],
        a = [];
      for (let e = 0, o = t.channels.length; e < o; e++) {
        const o = t.channels[e],
          l = t.samplers[o.sampler],
          c = o.target,
          h = c.node,
          u = void 0 !== t.parameters ? t.parameters[l.input] : l.input,
          d = void 0 !== t.parameters ? t.parameters[l.output] : l.output;
        n.push(this.getDependency("node", h)),
          i.push(this.getDependency("accessor", u)),
          r.push(this.getDependency("accessor", d)),
          s.push(l),
          a.push(c);
      }
      return Promise.all([
        Promise.all(n),
        Promise.all(i),
        Promise.all(r),
        Promise.all(s),
        Promise.all(a),
      ]).then(function (n) {
        const i = n[0],
          r = n[1],
          s = n[2],
          a = n[3],
          o = n[4],
          l = [];
        for (let e = 0, t = i.length; e < t; e++) {
          const t = i[e],
            n = r[e],
            c = s[e],
            h = a[e],
            u = o[e];
          if (void 0 === t) continue;
          let d;
          switch ((t.updateMatrix(), Ec[u.path])) {
            case Ec.weights:
              d = ll;
              break;
            case Ec.rotation:
              d = hl;
              break;
            default:
              d = dl;
          }
          const p = t.name ? t.name : t.uuid,
            f = void 0 !== h.interpolation ? Ac[h.interpolation] : lt,
            m = [];
          Ec[u.path] === Ec.weights
            ? t.traverse(function (e) {
                e.morphTargetInfluences && m.push(e.name ? e.name : e.uuid);
              })
            : m.push(p);
          let g = c.array;
          if (c.normalized) {
            const e = Ic(g.constructor),
              t = new Float32Array(g.length);
            for (let n = 0, i = g.length; n < i; n++) t[n] = g[n] * e;
            g = t;
          }
          for (let e = 0, t = m.length; e < t; e++) {
            const t = new d(m[e] + "." + Ec[u.path], n.array, g, f);
            "CUBICSPLINE" === h.interpolation &&
              ((t.createInterpolant = function (e) {
                return new (this instanceof hl ? xc : _c)(
                  this.times,
                  this.values,
                  this.getValueSize() / 3,
                  e
                );
              }),
              (t.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline =
                !0)),
              l.push(t);
          }
        }
        const c = t.name ? t.name : "animation_" + e;
        return new pl(c, void 0, l);
      });
    }
    createNodeMesh(e) {
      const t = this.json,
        n = this,
        i = t.nodes[e];
      return void 0 === i.mesh
        ? null
        : n.getDependency("mesh", i.mesh).then(function (e) {
            const t = n._getNodeRef(n.meshCache, i.mesh, e);
            return (
              void 0 !== i.weights &&
                t.traverse(function (e) {
                  if (e.isMesh)
                    for (let t = 0, n = i.weights.length; t < n; t++)
                      e.morphTargetInfluences[t] = i.weights[t];
                }),
              t
            );
          });
    }
    loadNode(e) {
      const t = this,
        n = this.json.nodes[e],
        i = t._loadNodeShallow(e),
        r = [],
        s = n.children || [];
      for (let e = 0, n = s.length; e < n; e++)
        r.push(t.getDependency("node", s[e]));
      const a =
        void 0 === n.skin
          ? Promise.resolve(null)
          : t.getDependency("skin", n.skin);
      return Promise.all([i, Promise.all(r), a]).then(function (e) {
        const t = e[0],
          n = e[1],
          i = e[2];
        null !== i &&
          t.traverse(function (e) {
            e.isSkinnedMesh && e.bind(i, Nc);
          });
        for (let e = 0, i = n.length; e < i; e++) t.add(n[e]);
        return t;
      });
    }
    _loadNodeShallow(e) {
      const t = this.json,
        n = this.extensions,
        i = this;
      if (void 0 !== this.nodeCache[e]) return this.nodeCache[e];
      const r = t.nodes[e],
        s = r.name ? i.createUniqueName(r.name) : "",
        a = [],
        o = i._invokeOne(function (t) {
          return t.createNodeMesh && t.createNodeMesh(e);
        });
      return (
        o && a.push(o),
        void 0 !== r.camera &&
          a.push(
            i.getDependency("camera", r.camera).then(function (e) {
              return i._getNodeRef(i.cameraCache, r.camera, e);
            })
          ),
        i
          ._invokeAll(function (t) {
            return t.createNodeAttachment && t.createNodeAttachment(e);
          })
          .forEach(function (e) {
            a.push(e);
          }),
        (this.nodeCache[e] = Promise.all(a).then(function (t) {
          let a;
          if (
            ((a =
              !0 === r.isBone
                ? new _o()
                : t.length > 1
                ? new $a()
                : 1 === t.length
                ? t[0]
                : new ui()),
            a !== t[0])
          )
            for (let e = 0, n = t.length; e < n; e++) a.add(t[e]);
          if (
            (r.name && ((a.userData.name = r.name), (a.name = s)),
            Cc(a, r),
            r.extensions && Lc(n, a, r),
            void 0 !== r.matrix)
          ) {
            const e = new kn();
            e.fromArray(r.matrix), a.applyMatrix4(e);
          } else void 0 !== r.translation && a.position.fromArray(r.translation), void 0 !== r.rotation && a.quaternion.fromArray(r.rotation), void 0 !== r.scale && a.scale.fromArray(r.scale);
          return (
            i.associations.has(a) || i.associations.set(a, {}),
            (i.associations.get(a).nodes = e),
            a
          );
        })),
        this.nodeCache[e]
      );
    }
    loadScene(e) {
      const t = this.extensions,
        n = this.json.scenes[e],
        i = this,
        r = new $a();
      n.name && (r.name = i.createUniqueName(n.name)),
        Cc(r, n),
        n.extensions && Lc(t, r, n);
      const s = n.nodes || [],
        a = [];
      for (let e = 0, t = s.length; e < t; e++)
        a.push(i.getDependency("node", s[e]));
      return Promise.all(a).then(function (e) {
        for (let t = 0, n = e.length; t < n; t++) r.add(e[t]);
        return (
          (i.associations = ((e) => {
            const t = new Map();
            for (const [e, n] of i.associations)
              (e instanceof wi || e instanceof ln) && t.set(e, n);
            return (
              e.traverse((e) => {
                const n = i.associations.get(e);
                null != n && t.set(e, n);
              }),
              t
            );
          })(r)),
          r
        );
      });
    }
  }
  function Uc(e, t, n) {
    const i = t.attributes,
      r = [];
    function s(t, i) {
      return n.getDependency("accessor", t).then(function (t) {
        e.setAttribute(i, t);
      });
    }
    for (const t in i) {
      const n = Tc[t] || t.toLowerCase();
      n in e.attributes || r.push(s(i[t], n));
    }
    if (void 0 !== t.indices && !e.index) {
      const i = n.getDependency("accessor", t.indices).then(function (t) {
        e.setIndex(t);
      });
      r.push(i);
    }
    return (
      Cc(e, t),
      (function (e, t, n) {
        const i = t.attributes,
          r = new pn();
        if (void 0 === i.POSITION) return;
        {
          const e = n.json.accessors[i.POSITION],
            t = e.min,
            s = e.max;
          if (void 0 === t || void 0 === s)
            return void console.warn(
              "THREE.GLTFLoader: Missing min/max properties for accessor POSITION."
            );
          if (
            (r.set(new jt(t[0], t[1], t[2]), new jt(s[0], s[1], s[2])),
            e.normalized)
          ) {
            const t = Ic(Mc[e.componentType]);
            r.min.multiplyScalar(t), r.max.multiplyScalar(t);
          }
        }
        const s = t.targets;
        if (void 0 !== s) {
          const e = new jt(),
            t = new jt();
          for (let i = 0, r = s.length; i < r; i++) {
            const r = s[i];
            if (void 0 !== r.POSITION) {
              const i = n.json.accessors[r.POSITION],
                s = i.min,
                a = i.max;
              if (void 0 !== s && void 0 !== a) {
                if (
                  (t.setX(Math.max(Math.abs(s[0]), Math.abs(a[0]))),
                  t.setY(Math.max(Math.abs(s[1]), Math.abs(a[1]))),
                  t.setZ(Math.max(Math.abs(s[2]), Math.abs(a[2]))),
                  i.normalized)
                ) {
                  const e = Ic(Mc[i.componentType]);
                  t.multiplyScalar(e);
                }
                e.max(t);
              } else
                console.warn(
                  "THREE.GLTFLoader: Missing min/max properties for accessor POSITION."
                );
            }
          }
          r.expandByVector(e);
        }
        e.boundingBox = r;
        const a = new Pn();
        r.getCenter(a.center),
          (a.radius = r.min.distanceTo(r.max) / 2),
          (e.boundingSphere = a);
      })(e, t, n),
      Promise.all(r).then(function () {
        return void 0 !== t.targets
          ? (function (e, t, n) {
              let i = !1,
                r = !1,
                s = !1;
              for (let e = 0, n = t.length; e < n; e++) {
                const n = t[e];
                if (
                  (void 0 !== n.POSITION && (i = !0),
                  void 0 !== n.NORMAL && (r = !0),
                  void 0 !== n.COLOR_0 && (s = !0),
                  i && r && s)
                )
                  break;
              }
              if (!i && !r && !s) return Promise.resolve(e);
              const a = [],
                o = [],
                l = [];
              for (let c = 0, h = t.length; c < h; c++) {
                const h = t[c];
                if (i) {
                  const t =
                    void 0 !== h.POSITION
                      ? n.getDependency("accessor", h.POSITION)
                      : e.attributes.position;
                  a.push(t);
                }
                if (r) {
                  const t =
                    void 0 !== h.NORMAL
                      ? n.getDependency("accessor", h.NORMAL)
                      : e.attributes.normal;
                  o.push(t);
                }
                if (s) {
                  const t =
                    void 0 !== h.COLOR_0
                      ? n.getDependency("accessor", h.COLOR_0)
                      : e.attributes.color;
                  l.push(t);
                }
              }
              return Promise.all([
                Promise.all(a),
                Promise.all(o),
                Promise.all(l),
              ]).then(function (t) {
                const n = t[0],
                  a = t[1],
                  o = t[2];
                return (
                  i && (e.morphAttributes.position = n),
                  r && (e.morphAttributes.normal = a),
                  s && (e.morphAttributes.color = o),
                  (e.morphTargetsRelative = !0),
                  e
                );
              });
            })(e, t.targets, n)
          : e;
      })
    );
  }
  var zc = new (class {
      constructor(e = !0) {
        (this.autoStart = e),
          (this.startTime = 0),
          (this.oldTime = 0),
          (this.elapsedTime = 0),
          (this.running = !1);
      }
      start() {
        (this.startTime = kl()),
          (this.oldTime = this.startTime),
          (this.elapsedTime = 0),
          (this.running = !0);
      }
      stop() {
        this.getElapsedTime(), (this.running = !1), (this.autoStart = !1);
      }
      getElapsedTime() {
        return this.getDelta(), this.elapsedTime;
      }
      getDelta() {
        let e = 0;
        if (this.autoStart && !this.running) return this.start(), 0;
        if (this.running) {
          const t = kl();
          (e = (t - this.oldTime) / 1e3),
            (this.oldTime = t),
            (this.elapsedTime += e);
        }
        return e;
      }
    })(),
    Fc = 0,
    Bc = document.getElementById("canvas"),
    kc = document.getElementById("next"),
    Hc = document.getElementById("back"),
    Gc = document.getElementById("description"),
    Vc = new (class extends ui {
      constructor() {
        super(),
          (this.isScene = !0),
          (this.type = "Scene"),
          (this.background = null),
          (this.environment = null),
          (this.fog = null),
          (this.backgroundBlurriness = 0),
          (this.backgroundIntensity = 1),
          (this.overrideMaterial = null),
          "undefined" != typeof __THREE_DEVTOOLS__ &&
            __THREE_DEVTOOLS__.dispatchEvent(
              new CustomEvent("observe", { detail: this })
            );
      }
      copy(e, t) {
        return (
          super.copy(e, t),
          null !== e.background && (this.background = e.background.clone()),
          null !== e.environment && (this.environment = e.environment.clone()),
          null !== e.fog && (this.fog = e.fog.clone()),
          (this.backgroundBlurriness = e.backgroundBlurriness),
          (this.backgroundIntensity = e.backgroundIntensity),
          null !== e.overrideMaterial &&
            (this.overrideMaterial = e.overrideMaterial.clone()),
          (this.matrixAutoUpdate = e.matrixAutoUpdate),
          this
        );
      }
      toJSON(e) {
        const t = super.toJSON(e);
        return (
          null !== this.fog && (t.object.fog = this.fog.toJSON()),
          this.backgroundBlurriness > 0 &&
            (t.object.backgroundBlurriness = this.backgroundBlurriness),
          1 !== this.backgroundIntensity &&
            (t.object.backgroundIntensity = this.backgroundIntensity),
          t
        );
      }
      get autoUpdate() {
        return (
          console.warn(
            "THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."
          ),
          this.matrixWorldAutoUpdate
        );
      }
      set autoUpdate(e) {
        console.warn(
          "THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."
        ),
          (this.matrixWorldAutoUpdate = e);
      }
    })(),
    Wc = new mr(90, window.innerWidth / window.innerHeight, 0.1, 1e3),
    jc = new ao();
  jc.setSize(window.innerWidth, window.innerHeight, !0),
    Bc.appendChild(jc.domElement),
    window.addEventListener("resize", function () {
      var e = window.innerWidth,
        t = window.innerHeight;
      jc.setSize(e, t),
        (Wc.fov = (window.innerHeight / window.screen.height) * 30),
        (Wc.aspect = e / t),
        Wc.updateProjectionMatrix();
    });
  var Xc = 0,
    qc = [
      { x: 1, y: -5, z: 0 },
      { x: 1, y: -22, z: 0 },
    ],
    Yc = qc[Xc],
    Kc = Date.now();
  kc.addEventListener("mousedown", function () {
    Date.now() - Kc > 200 &&
      ((Kc = Date.now()), Xc != qc.length - 1 ? Xc++ : (Xc = 0), Zc(Xc));
  }),
    Hc.addEventListener("mousedown", function () {
      Date.now() - Kc > 200 &&
        ((Kc = Date.now()), 0 != Xc ? Xc-- : (Xc = qc.length - 1), Zc(Xc));
    });
  var Zc = function (e) {
    switch (e) {
      case 0:
        fetch("/lib/html/description1.html")
          .then(function (e) {
            return e.text();
          })
          .then(function (e) {
            return (Gc.innerHTML = e);
          });
        break;
      case 1:
        fetch("/lib/html/description2.html")
          .then(function (e) {
            return e.text();
          })
          .then(function (e) {
            return (Gc.innerHTML = e);
          });
    }
  };
  new (class extends vl {
    constructor(e) {
      super(e),
        (this.dracoLoader = null),
        (this.ktx2Loader = null),
        (this.meshoptDecoder = null),
        (this.pluginCallbacks = []),
        this.register(function (e) {
          return new ec(e);
        }),
        this.register(function (e) {
          return new oc(e);
        }),
        this.register(function (e) {
          return new lc(e);
        }),
        this.register(function (e) {
          return new cc(e);
        }),
        this.register(function (e) {
          return new nc(e);
        }),
        this.register(function (e) {
          return new ic(e);
        }),
        this.register(function (e) {
          return new rc(e);
        }),
        this.register(function (e) {
          return new sc(e);
        }),
        this.register(function (e) {
          return new $l(e);
        }),
        this.register(function (e) {
          return new ac(e);
        }),
        this.register(function (e) {
          return new tc(e);
        }),
        this.register(function (e) {
          return new Jl(e);
        }),
        this.register(function (e) {
          return new hc(e);
        }),
        this.register(function (e) {
          return new uc(e);
        });
    }
    load(e, t, n, i) {
      const r = this;
      let s;
      (s =
        "" !== this.resourcePath
          ? this.resourcePath
          : "" !== this.path
          ? this.path
          : Fl.extractUrlBase(e)),
        this.manager.itemStart(e);
      const a = function (t) {
          i ? i(t) : console.error(t),
            r.manager.itemError(e),
            r.manager.itemEnd(e);
        },
        o = new Ml(this.manager);
      o.setPath(this.path),
        o.setResponseType("arraybuffer"),
        o.setRequestHeader(this.requestHeader),
        o.setWithCredentials(this.withCredentials),
        o.load(
          e,
          function (n) {
            try {
              r.parse(
                n,
                s,
                function (n) {
                  t(n), r.manager.itemEnd(e);
                },
                a
              );
            } catch (e) {
              a(e);
            }
          },
          n,
          a
        );
    }
    setDRACOLoader(e) {
      return (this.dracoLoader = e), this;
    }
    setDDSLoader() {
      throw new Error(
        'THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".'
      );
    }
    setKTX2Loader(e) {
      return (this.ktx2Loader = e), this;
    }
    setMeshoptDecoder(e) {
      return (this.meshoptDecoder = e), this;
    }
    register(e) {
      return (
        -1 === this.pluginCallbacks.indexOf(e) && this.pluginCallbacks.push(e),
        this
      );
    }
    unregister(e) {
      return (
        -1 !== this.pluginCallbacks.indexOf(e) &&
          this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e), 1),
        this
      );
    }
    parse(e, t, n, i) {
      let r;
      const s = {},
        a = {},
        o = new TextDecoder();
      if ("string" == typeof e) r = JSON.parse(e);
      else if (e instanceof ArrayBuffer)
        if (o.decode(new Uint8Array(e, 0, 4)) === dc) {
          try {
            s[Zl.KHR_BINARY_GLTF] = new pc(e);
          } catch (e) {
            return void (i && i(e));
          }
          r = JSON.parse(s[Zl.KHR_BINARY_GLTF].content);
        } else r = JSON.parse(o.decode(e));
      else r = e;
      if (void 0 === r.asset || r.asset.version[0] < 2)
        return void (
          i &&
          i(
            new Error(
              "THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."
            )
          )
        );
      const l = new Oc(r, {
        path: t || this.resourcePath || "",
        crossOrigin: this.crossOrigin,
        requestHeader: this.requestHeader,
        manager: this.manager,
        ktx2Loader: this.ktx2Loader,
        meshoptDecoder: this.meshoptDecoder,
      });
      l.fileLoader.setRequestHeader(this.requestHeader);
      for (let e = 0; e < this.pluginCallbacks.length; e++) {
        const t = this.pluginCallbacks[e](l);
        (a[t.name] = t), (s[t.name] = !0);
      }
      if (r.extensionsUsed)
        for (let e = 0; e < r.extensionsUsed.length; ++e) {
          const t = r.extensionsUsed[e],
            n = r.extensionsRequired || [];
          switch (t) {
            case Zl.KHR_MATERIALS_UNLIT:
              s[t] = new Ql();
              break;
            case Zl.KHR_DRACO_MESH_COMPRESSION:
              s[t] = new fc(r, this.dracoLoader);
              break;
            case Zl.KHR_TEXTURE_TRANSFORM:
              s[t] = new mc();
              break;
            case Zl.KHR_MESH_QUANTIZATION:
              s[t] = new gc();
              break;
            default:
              n.indexOf(t) >= 0 &&
                void 0 === a[t] &&
                console.warn(
                  'THREE.GLTFLoader: Unknown extension "' + t + '".'
                );
          }
        }
      l.setExtensions(s), l.setPlugins(a), l.parse(n, i);
    }
    parseAsync(e, t) {
      const n = this;
      return new Promise(function (i, r) {
        n.parse(e, t, i, r);
      });
    }
  })().load("/lib/gltf/mo-hand-test.gltf", function (e) {
    (Wc = e.cameras[0]).setFocalLength(45),
      (Wc.aspect = window.innerWidth / window.innerHeight),
      Wc.updateProjectionMatrix(),
      Vc.add(e.scene),
      e.scene.getObjectByName("Cube012"),
      e.scene.traverse(function (e) {
        console.log(e.name);
      }),
      th();
  });
  var Jc = new lr(1, 1, 1),
    Qc = new Pi({ color: 65280 }),
    $c = (new ar(Jc, Qc), 0),
    eh = function () {
      (Yc = qc[Xc]),
        (Wc.position.x = $c + Yc.x * Math.sin(0.5 * Fc)),
        (Wc.position.z = 0 + Yc.z * Math.cos(0.5 * Fc)),
        (Wc.position.y = -0.5 + Yc.y),
        Wc.lookAt($c, -0.5, 0),
        zc.getDelta(),
        (Fc = zc.elapsedTime.toFixed(2));
    };
  function th() {
    requestAnimationFrame(th), eh(), jc.render(Vc, Wc);
  }
})();
