"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

document.addEventListener("DOMContentLoaded", function () {
  M.AutoInit();
  loadNews();
});

var http = function http() {
  return {
    get: function get(url, cb) {
      try {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        xhr.addEventListener("load", function () {
          if (Math.floor(xhr.status / 100) !== 2) {
            cb("Error. Status code: ".concat(xhr.status), xhr);
            return;
          }

          var response = JSON.parse(xhr.responseText);
          cb(null, response);
        });
        xhr.addEventListener("error", function () {
          cb("Error. Status code: ".concat(xhr.status), xhr);
        });
        xhr.send();
      } catch (error) {
        cb(error);
      }
    },
    post: function post(url, body, headers, cb) {
      try {
        var xhr = new XMLHttpRequest();
        xhr.open("POST", url);
        xhr.addEventListener("load", function () {
          if (Math.floor(xhr.status / 100) !== 2) {
            cb("Error. Status code: ".concat(xhr.status), xhr);
            return;
          }

          var response = JSON.parse(xhr.responseText);
          cb(null, response);
        });
        xhr.addEventListener("error", function () {
          cb("Error. Status code: ".concat(xhr.status), xhr);
        });

        if (headers) {
          Object.entries(headers).forEach(function (_ref) {
            var _ref2 = _slicedToArray(_ref, 2),
                key = _ref2[0],
                value = _ref2[1];

            xhr.setRequestHeader(key, value);
          });
        }

        xhr.send(JSON.stringify(body));
      } catch (error) {
        cb(error);
      }
    }
  };
};

var myHttp = http();
var mainContainer = document.querySelector(".news-content");
var form = document.forms["newsParam"];
var countySelect = form.elements["country"];
var searchInput = form.elements["search"];
var linksArr = document.querySelectorAll(".news-cathegory__link");

var newsService = function () {
  var apiKey = "3b65ae1173ce482f935f54e5f8fe07a1";
  var apiUrl = "https://newsapi.org/v2";
  return {
    topHeadlines: function topHeadlines() {
      var country = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "ru";
      var cb = arguments.length > 1 ? arguments[1] : undefined;
      myHttp.get("".concat(apiUrl, "/top-headlines?country=").concat(country, "&apiKey=").concat(apiKey), cb);
    },
    everything: function everything(query, cb) {
      myHttp.get("".concat(apiUrl, "/everything?q=").concat(query, "&apiKey=").concat(apiKey), cb);
    },
    cathegory: function cathegory(cat, cb) {
      myHttp.get("".concat(apiUrl, "/top-headlines?country=ru&category=").concat(cat, "&apiKey=").concat(apiKey), cb);
    }
  };
}();

function loadNews() {
  newsService.topHeadlines("ru", getResponse);
} // Здесь Я получаю массив с новостями


function getResponse(err, res) {
  if (err) {
    console.log(err);
    return;
  }

  renderNews(res.articles);
}

function renderNews(arr) {
  var fragment = "";
  arr.forEach(function (_ref3) {
    var description = _ref3.description,
        title = _ref3.title,
        url = _ref3.url,
        urlToImage = _ref3.urlToImage;
    var result = createPost(description, title, url, urlToImage);
    fragment += result;
  });
  mainContainer.insertAdjacentHTML("afterbegin", fragment);
}

function createPost(description, title, url, urlToImage) {
  return "\n  <div class=\"news-container\">\n  <div class=\"news-container__image-container\">\n    <img src=\"".concat(urlToImage, "\" alt=\"\" class=\"news-container__img\" />\n  </div>\n  <div class=\"news-container__content\">\n    <h5 class=\"news-container__title\">\n      ").concat(title, "\n    </h5>\n    <p class=\"news-container__text\">\n     ").concat(description, "\n    </p>\n    <div class=\"news-container__learn-more\">\n         <a href=\"").concat(url, "\">\u0423\u0437\u043D\u0430\u0442\u044C \u0431\u043E\u043B\u044C\u0448\u0435</a>\n    </div>\n  </div>\n</div>\n  ");
}

function clear() {
  mainContainer.innerHTML = "";
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  clear();
  var country = countySelect.value;
  var search = searchInput.value;

  if (!search) {
    newsService.topHeadlines(country, getResponse);
  } else {
    newsService.everything(search, getResponse);
  }
});
linksArr.forEach(function (item) {
  item.addEventListener("click", function (e) {
    e.preventDefault();
    clear();
    var cat = this.dataset.set;
    newsService.cathegory(cat, getResponse);
  });
});