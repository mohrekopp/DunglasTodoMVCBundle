// Generated by CoffeeScript 1.4.0
var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(['chaplin'], function(Chaplin) {
  'use strict';

  var IndexController;
  return IndexController = (function(_super) {

    __extends(IndexController, _super);

    function IndexController() {
      return IndexController.__super__.constructor.apply(this, arguments);
    }

    IndexController.prototype.title = 'Todo list';

    IndexController.prototype.test = function(options) {
      return console.log('you are here');
    };

    IndexController.prototype.list = function(options) {
      var _ref, _ref1;
      return this.publishEvent('todos:filter', (_ref = (_ref1 = options.filterer) != null ? _ref1.trim() : void 0) != null ? _ref : 'all');
    };

    return IndexController;

  })(Chaplin.Controller);
});
