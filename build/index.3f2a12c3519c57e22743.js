(() => {
  "use strict";
  var t = {};
  (t.g = (function () {
    if ("object" == typeof globalThis) return globalThis;
    try {
      return this || new Function("return this")();
    } catch (t) {
      if ("object" == typeof window) return window;
    }
  })()),
    (() => {
      var e;
      t.g.importScripts && (e = t.g.location + "");
      var n = t.g.document;
      if (!e && n && (n.currentScript && (e = n.currentScript.src), !e)) {
        var r = n.getElementsByTagName("script");
        r.length && (e = r[r.length - 1].src);
      }
      if (!e)
        throw new Error(
          "Automatic publicPath is not supported in this browser"
        );
      (e = e
        .replace(/#.*$/, "")
        .replace(/\?.*$/, "")
        .replace(/\/[^\/]+$/, "/")),
        (t.p = e);
    })();
  var e = [
      { name: "Coffee", link: t.p + "0d930819a1b441eca091.jpg" },
      { name: "Глинтвейн", link: t.p + "f558b03fc808c1b1cc86.png" },
      { name: "Пианист", link: t.p + "4c6db4ac626fb3ce0d02.png" },
      { name: "Космонавт", link: t.p + "e962dac13621f536c22b.png" },
      { name: "Вкуснотища!", link: t.p + "3af6d930a9f9bfe998ac.png" },
      { name: "Photo", link: t.p + "9913573b8a469f487917.jpg" },
    ],
    n = document.querySelector(".popup_image-open"),
    r = n.querySelector(".popup__image"),
    o = n.querySelector(".popup__caption");
  function i(t) {
    return (
      (i =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            }),
      i(t)
    );
  }
  function u(t, e) {
    for (var n = 0; n < e.length; n++) {
      var r = e[n];
      (r.enumerable = r.enumerable || !1),
        (r.configurable = !0),
        "value" in r && (r.writable = !0),
        Object.defineProperty(
          t,
          (void 0,
          (o = (function (t, e) {
            if ("object" !== i(t) || null === t) return t;
            var n = t[Symbol.toPrimitive];
            if (void 0 !== n) {
              var r = n.call(t, "string");
              if ("object" !== i(r)) return r;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return String(t);
          })(r.key)),
          "symbol" === i(o) ? o : String(o)),
          r
        );
    }
    var o;
  }
  var c = (function () {
    function t(e, n, r) {
      !(function (t, e) {
        if (!(t instanceof e))
          throw new TypeError("Cannot call a class as a function");
      })(this, t),
        (this._name = e.name),
        (this._link = e.link),
        (this._openPopup = r),
        (this._container = n.content.querySelector(".element").cloneNode(!0));
    }
    var e, i;
    return (
      (e = t),
      (i = [
        {
          key: "_setLikeButton",
          value: function () {
            var t = this._container.querySelector(".element__button-like");
            return (
              t.addEventListener("click", function () {
                t.classList.toggle("element__button-like_active");
              }),
              t
            );
          },
        },
        {
          key: "_setTrashButton",
          value: function () {
            var t = this,
              e = this._container.querySelector(".element__button-trash");
            return (
              e.addEventListener("click", function () {
                t._container.remove();
              }),
              e
            );
          },
        },
        {
          key: "_setCardImage",
          value: function () {
            var t = this,
              e = this._container.querySelector(".element__photo");
            return (
              e.setAttribute("src", this._link),
              e.setAttribute("alt", this._name),
              e.addEventListener("click", function () {
                r.setAttribute("src", t._link),
                  r.setAttribute("alt", t._name),
                  (o.textContent = t._name),
                  t._openPopup(n);
              }),
              e
            );
          },
        },
        {
          key: "_setCardTitle",
          value: function () {
            var t = this._container.querySelector(".element__title");
            return (t.textContent = this._name), t;
          },
        },
        {
          key: "getCard",
          value: function () {
            return (
              this._setLikeButton(),
              this._setTrashButton(),
              this._setCardTitle(),
              this._setCardImage(),
              this._container
            );
          },
        },
      ]) && u(e.prototype, i),
      Object.defineProperty(e, "prototype", { writable: !1 }),
      t
    );
  })();
  function a(t) {
    return (
      (a =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            }),
      a(t)
    );
  }
  function l(t, e) {
    for (var n = 0; n < e.length; n++) {
      var r = e[n];
      (r.enumerable = r.enumerable || !1),
        (r.configurable = !0),
        "value" in r && (r.writable = !0),
        Object.defineProperty(
          t,
          (void 0,
          (o = (function (t, e) {
            if ("object" !== a(t) || null === t) return t;
            var n = t[Symbol.toPrimitive];
            if (void 0 !== n) {
              var r = n.call(t, "string");
              if ("object" !== a(r)) return r;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return String(t);
          })(r.key)),
          "symbol" === a(o) ? o : String(o)),
          r
        );
    }
    var o;
  }
  const s = (function () {
    function t(e, n) {
      !(function (t, e) {
        if (!(t instanceof e))
          throw new TypeError("Cannot call a class as a function");
      })(this, t),
        (this._config = e),
        (this._formElement = n),
        (this._inputList = Array.from(
          this._formElement.querySelectorAll(this._config.inputSelector)
        )),
        (this._formButton = this._formElement.querySelector(
          this._config.submitButtonSelector
        ));
    }
    var e, n;
    return (
      (e = t),
      (n = [
        {
          key: "_showInputError",
          value: function (t) {
            var e = this._formElement.querySelector(".".concat(t.id, "-error"));
            e.classList.add(this._config.errorClass),
              (e.textContent = t.validationMessage),
              t.classList.add(this._config.inputErrorClass);
          },
        },
        {
          key: "_hideInputError",
          value: function (t) {
            var e = this._formElement.querySelector(".".concat(t.id, "-error"));
            e.classList.remove(this._config.errorClass),
              (e.textContent = ""),
              t.classList.remove(this._config.inputErrorClass);
          },
        },
        {
          key: "_checkInputValidity",
          value: function (t) {
            t.validity.valid
              ? this._hideInputError(t)
              : this._showInputError(t);
          },
        },
        {
          key: "_hasInvalidInput",
          value: function () {
            return this._inputList.some(function (t) {
              return !t.validity.valid;
            });
          },
        },
        {
          key: "toggleButtonState",
          value: function () {
            this._hasInvalidInput()
              ? (this._formButton.classList.add(
                  this._config.inactiveButtonClass
                ),
                (this._formButton.disabled = !0))
              : (this._formButton.classList.remove(
                  this._config.inactiveButtonClass
                ),
                (this._formButton.disabled = !1));
          },
        },
        {
          key: "_setEventListeners",
          value: function () {
            var t = this;
            this.toggleButtonState(),
              this._inputList.forEach(function (e) {
                e.addEventListener("input", function () {
                  t._checkInputValidity(e), t.toggleButtonState();
                });
              }),
              this._formElement.addEventListener("reset", function () {
                setTimeout(function () {
                  t.toggleButtonState();
                }, 0);
              });
          },
        },
        {
          key: "enableValidation",
          value: function () {
            this._setEventListeners();
          },
        },
      ]) && l(e.prototype, n),
      Object.defineProperty(e, "prototype", { writable: !1 }),
      t
    );
  })();
  var p = document.querySelector(".profile__edit"),
    f = document.querySelector(".popup_edit-profile"),
    m = document.querySelector(".popup__close"),
    d = document.querySelector("#popup-form"),
    _ = document.querySelector("#popup-form-card"),
    v = d.querySelector("#input-name"),
    y = d.querySelector("#input-job"),
    h = document.querySelector(".profile__info"),
    b = h.querySelector(".profile__name"),
    S = h.querySelector(".profile__aboute");
  function g(t) {
    t.classList.add("popup_opened"),
      document.addEventListener("keydown", q),
      t.addEventListener("click", E);
  }
  function k(t) {
    t.classList.remove("popup_opened"),
      document.removeEventListener("keydown", q),
      t.removeEventListener("click", E);
  }
  var E = function (t) {
    t.target === t.currentTarget && k(t.target);
  };
  function q(t) {
    "Escape" === t.key && k(document.querySelector(".popup_opened"));
  }
  p.addEventListener("click", function (t) {
    g(f), (v.value = b.textContent), (y.value = S.textContent);
  }),
    m.addEventListener("click", function () {
      k(f);
    });
  var L = document.querySelector("#card-item-template"),
    C = document.querySelector(".elements"),
    w = function (t) {
      var e = new c(t, L, g);
      C.prepend(e.getCard());
    };
  document
    .querySelector(".popup__close-image")
    .addEventListener("click", function () {
      k(n);
    }),
    e.forEach(function (t) {
      w(t);
    });
  var B,
    j = document.querySelector(".profile__add-button"),
    T = document.querySelector(".popup-cards"),
    I = T.querySelector("#card-name"),
    P = T.querySelector("#card-link");
  j.addEventListener("click", function () {
    g(T);
  }),
    document
      .querySelector(".popup__cards-close")
      .addEventListener("click", function () {
        k(T);
      }),
    _.addEventListener("submit", function (t) {
      t.preventDefault();
      var e = { name: I.value, link: P.value };
      e.name && e.link && (w(e), k(T), t.target.reset());
    }),
    d.addEventListener("submit", function (t) {
      t.preventDefault();
      var e = v.value,
        n = y.value;
      (b.textContent = e), (S.textContent = n), k(f);
    }),
    (B = {
      formSelector: ".popup__form",
      inputSelector: ".popup__input",
      submitButtonSelector: ".popup__submit-button",
      activeButtonClass: "popup__submit-button_valid",
      inactiveButtonClass: "popup__submit-button_invalid",
      inputErrorClass: "popup__input_type_error",
      errorClass: "popup__input-error_visible",
    }),
    Array.from(document.querySelectorAll(B.formSelector)).forEach(function (t) {
      new s(B, t).enableValidation();
    });
})();
