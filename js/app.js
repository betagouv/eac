'use strict';

var apiUrl = localStorage.getItem('apiUrl') || 'https://eac-api.herokuapp.com';

function request(url) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var params = Object.assign(options, {
    mode: 'cors'
  });
  return fetch(url, params).then(function (r) {
    return r.json();
  }).catch(console.error.bind(console));
}

function api(uri, options) {
  return request('' + apiUrl + uri, options);
}

function urlParams() {
  var queryString = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : location.search;

  var keyValues = queryString.startsWith('&') ? queryString.slice(1) : queryString;
  return new Map(keyValues.split('&').map(function (kv) {
    return kv.split('=');
  }));
}

function normalizeString(str) {
  return str.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}
