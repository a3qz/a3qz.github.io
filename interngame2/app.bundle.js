/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/main.ts","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/helpers.ts":
/*!************************!*\
  !*** ./src/helpers.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Ingredients = exports.drinkToColorMap = exports.getGameHeight = exports.getGameWidth = void 0;
exports.getGameWidth = function (scene) {
    return scene.game.scale.width;
};
exports.getGameHeight = function (scene) {
    return scene.game.scale.height;
};
exports.drinkToColorMap = new Map([
    ['Bourbon', 0xdb7900],
    ['Vermouth', 0x550103],
    ['Vodka', 0x808080],
    ['Gin', 0x75a3a3],
    ['Rum', 0xAC592D],
    ['Triple Sec', 0xffcc99],
    ['Tequila', 0x80ffff],
    ['Coke', 0xAC592D],
    ['Lemon Juice', 0xffff99],
    ['Lime Juice', 0xd9ffb3],
    ['Orange Juice', 0xffcc99],
]);
exports.Ingredients = [
    'Shake Drink',
    'Muddle Drink',
    'Orange Peel',
    'Bourbon',
    'Ice Cube',
    'Vermouth',
    'Lemon Juice',
    'Lime Juice',
    'Orange Juice',
    'Angostura Bitters',
    'Vodka',
    'Gin',
    'Rum',
    'Triple Sec',
    'Tequila',
    'Coke',
    'Soda',
    'Simple Syrup',
    'Tonic',
    'Brandy',
    'Crushed Ice',
    'Lime Wedge',
    'Lemon Wedge',
    'Stir Drink',
    'Strain Drink',
    'Cognac',
    'Egg White'
];
/*
export const stringToBackendNumberMap: Map<string, number> = new Map([
  ['Tequila', 0],
  ['Brandy', 1],
  ['Gin', 2],
  ['Rum', 3],
  ['Vodka', 4],
  ['Whisky', 5],
  ['Triple Sec', 6],
  ['Vermouth', 7],
  ['Angostura Bitters', 8],
  ['Coke', 9],
  ['Soda', 10],
  ['Tonic', 0],
  ['Simple Syrup', 0],
  ['Ice Cube', 0],
  ['Tonic', 0],
  ['Lemon Juice', 0],
  ['Lime Juice', 0],
  ['Orange Juice', 0],
  ['Shake Drink', 0],
  ['Stir Drink', 0],
  ['Muddle Drink', 0],
  ['Lime Wedge', 0],
  ['Lemon Wedge', 0],
  ['Orange Wedge', 0],
])*/


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Phaser = __webpack_require__(/*! phaser */ "./node_modules/phaser/dist/phaser.js");
var scenes_1 = __webpack_require__(/*! ./scenes */ "./src/scenes/index.ts");
window.onload = function () {
    var gameConfig = {
        title: 'Sample',
        type: Phaser.CANVAS,
        scale: {
            width: window.innerWidth,
            height: window.innerHeight,
        },
        scene: scenes_1.default,
        physics: {
            default: 'arcade',
            arcade: {
                debug: true,
            },
        },
        parent: 'game',
        backgroundColor: '#000000',
    };
    var game = new Phaser.Game(gameConfig);
    window.addEventListener('resize', function () {
        game.scale.refresh();
    });
};


/***/ }),

/***/ "./src/scenes/bitters-scene.ts":
/*!*************************************!*\
  !*** ./src/scenes/bitters-scene.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.BittersScene = void 0;
var sceneConfig = {
    active: false,
    visible: false,
    key: 'Angostura Bitters',
};
var GameSceneArguments = /** @class */ (function () {
    function GameSceneArguments() {
    }
    return GameSceneArguments;
}());
var BittersScene = /** @class */ (function (_super) {
    __extends(BittersScene, _super);
    function BittersScene() {
        var _this = _super.call(this, sceneConfig) || this;
        _this.speed = 200;
        _this.contents = [];
        _this.glassFillers = [];
        _this.isPouring = 0;
        _this.shakeCount = 0;
        _this.transitioning = false;
        _this.n = 0;
        _this.nthreshold = 0;
        _this.maxx = 0;
        _this.maxy = 0;
        _this.maxz = 0;
        _this.minx = 0;
        _this.miny = 0;
        _this.minz = 0;
        _this.threshold = 15;
        return _this;
    }
    BittersScene.prototype.init = function (data) {
        console.log('Angostura Bitters scene init');
        this.bottleName = 'bitters';
        this.onFinish = data.onFinish;
    };
    BittersScene.prototype.create = function () {
        var _this = this;
        console.log('Angostura Bitters scene create');
        var _a = this.sys.game.canvas, width = _a.width, height = _a.height;
        this.isPouring = 0;
        this.shakeCount = 0;
        this.transitioning = false;
        this.n = 0;
        this.nthreshold = 13;
        this.callback();
        // Add a player sprite that can be moved around. Place him in the middle of the screen.
        //this.emptyGlass = this.add.sprite(width / 4, height / 2, 'emptyglass');
        //this.filledglass1 = this.add.sprite(width / 4, height / 2, 'filledglass1');
        //this.filledglass2 = this.add.sprite(width / 4, height / 2, 'filledglass2');
        //this.bourbon = this.add.sprite(width / 8, height / 4, 'canelleknife').setInteractive();
        //this.bourbon.on('pointerdown', this.callback );
        console.log("glass x: " + width / 4);
        console.log("glass y: " + height / 2);
        this.bottle = this.add.sprite(width / 2, height / 2, this.bottleName).setInteractive();
        console.log("tried to render " + this.bottleName + " bottle");
        this.bottle.setScale(0.6);
        //console.log(this.emptyGlass.x);
        console.log(this.bottle.displayHeight);
        //this.bottle.setPosition(this.emptyGlass.x + this.bottle.displayHeight / 4);
        //this.bottle.setScale(0.5);
        this.bottle.on('pointerover', function () {
            _this.bottle.setTint(0xcccccc);
        });
        this.bottle.on('pointerout', function () {
            _this.bottle.clearTint();
        });
        this.bottle.on('pointerdown', function () {
            _this.shakeCount++;
            if (_this.shakeCount > 7) {
                _this.shakeCount = 7;
            }
            //this.bottle.setTexture(`shaker${this.shakeCount}`);
        });
        this.input.setDraggable(this.bottle);
        this.input.on('dragstart', function (pointer, gameObject) {
            gameObject.setTint(0x999999);
        });
        // This is a nice helper Phaser provides to create listeners for some of the most common keys.
        this.cursorKeys = this.input.keyboard.createCursorKeys();
        this.text1 = this.add.text(50, 10, '', { color: '#00ff00' });
        this.text2 = this.add.text(50, 30, '', { color: '#00ff00' });
        this.text3 = this.add.text(50, 60, '', { color: '#00ff00' });
        this.text4 = this.add.text(50, 90, '', { color: '#00ff00' });
        this.text5 = this.add.text(50, 120, '', { color: '#00ff00' });
        this.bottle.setDepth(1);
    };
    BittersScene.prototype.update = function () {
        var _this = this;
        // Every frame, we create a new velocity for the sprite based on what keys the player is holding down.
        if (this.n > this.nthreshold && this.shakeCount <= 7) {
            this.n = 0;
            this.shakeCount++;
            this.text4.setText("n " + this.n + " " + this.nthreshold);
        }
        if (this.shakeCount % 2 == 0) {
            this.bottle.setTexture("bitters" + this.shakeCount / 2);
        }
        if (this.shakeCount > 5 && !this.transitioning) {
            this.transitioning = true;
            document.cookie = "shake=1";
            setTimeout(function () {
                _this.scene.stop();
                _this.onFinish();
            }, 750);
        }
    };
    BittersScene.prototype.getUserAgent = function () {
        // (A) BREAK USER AGENT DOWN
        console.log(navigator.userAgent.toLowerCase());
        var isMobile = navigator.userAgent.toLowerCase().match(/mobile/i), isTablet = navigator.userAgent.toLowerCase().match(/tablet/i), isAndroid = navigator.userAgent.toLowerCase().match(/android/i), isiPhone = navigator.userAgent.toLowerCase().match(/iphone/i), isiPad = navigator.userAgent.toLowerCase().match(/ipad/i);
        // (B) DETECTED DEVICE TYPE
        if (isAndroid) {
            return 'Android';
        }
        else if (isiPhone || isiPad) {
            return 'Apple';
        }
        else {
            return 'Nope';
        }
    };
    BittersScene.prototype.callApple = function () {
        var _this = this;
        try {
            DeviceMotionEvent.requestPermission().then(function (response) {
                _this.text1.setText(response);
                window.addEventListener('devicemotion', function (event) {
                    console.log(event);
                    if (event.acceleration.x < _this.threshold * -1 || event.acceleration.x > _this.threshold) {
                        _this.n++;
                    }
                    else if (event.acceleration.y < _this.threshold * -1 || event.acceleration.y > _this.threshold) {
                        _this.n++;
                    }
                    else if (event.acceleration.z < _this.threshold * -1 || event.acceleration.z > _this.threshold) {
                        _this.n++;
                    }
                    // text
                    if (event.acceleration.x < _this.minx) {
                        _this.minx = event.acceleration.x;
                    }
                    if (event.acceleration.y < _this.miny) {
                        _this.miny = event.acceleration.y;
                    }
                    if (event.acceleration.z < _this.minz) {
                        _this.minz = event.acceleration.z;
                    }
                    if (event.acceleration.x > _this.maxx) {
                        _this.maxx = event.acceleration.x;
                    }
                    if (event.acceleration.y > _this.maxy) {
                        _this.maxy = event.acceleration.y;
                    }
                    if (event.acceleration.z > _this.maxz) {
                        _this.maxz = event.acceleration.z;
                    }
                    _this.text1.setText("x " + _this.minx + " " + _this.maxx);
                    _this.text2.setText("y " + _this.miny + " " + _this.maxy);
                    _this.text3.setText("z " + _this.minz + " " + _this.maxz);
                    _this.text4.setText("n " + _this.n + " " + _this.nthreshold);
                    _this.text5.setText("shakes " + _this.shakeCount);
                });
            });
        }
        catch (ex) {
            console.log('not ios');
            window.addEventListener('devicemotion', function (event) {
                console.log(event);
                if (event.acceleration.x < _this.threshold * -1 || event.acceleration.x > _this.threshold) {
                    _this.n++;
                }
                else if (event.acceleration.y < _this.threshold * -1 || event.acceleration.y > _this.threshold) {
                    _this.n++;
                }
                else if (event.acceleration.z < _this.threshold * -1 || event.acceleration.z > _this.threshold) {
                    _this.n++;
                }
                // text
                if (event.acceleration.x < _this.minx) {
                    _this.minx = event.acceleration.x;
                }
                if (event.acceleration.y < _this.miny) {
                    _this.miny = event.acceleration.y;
                }
                if (event.acceleration.z < _this.minz) {
                    _this.minz = event.acceleration.z;
                }
                if (event.acceleration.x > _this.maxx) {
                    _this.maxx = event.acceleration.x;
                }
                if (event.acceleration.y > _this.maxy) {
                    _this.maxy = event.acceleration.y;
                }
                if (event.acceleration.z > _this.maxz) {
                    _this.maxz = event.acceleration.z;
                }
                _this.text1.setText("x " + _this.minx + " " + _this.maxx);
                _this.text2.setText("y " + _this.miny + " " + _this.maxy);
                _this.text3.setText("z " + _this.minz + " " + _this.maxz);
                _this.text4.setText("n " + _this.n + " " + _this.nthreshold);
                _this.text5.setText("shakes " + _this.shakeCount);
            });
        }
    };
    BittersScene.prototype.callback = function () {
        //this.text1.setText('Asked');
        this.maxx = 0;
        this.maxy = 0;
        this.maxz = 0;
        this.minx = 0;
        this.miny = 0;
        this.minz = 0;
        //if (window.DeviceOrientationEvent) {
        //window.addEventListener('deviceorientation', deviceOrientationHandler, false);
        //}
        /*if (window.DeviceMotionEvent) {
           this.text2.setText('yes');
           console.log('yes');
           window.addEventListener('devicemotion', (event) => {
             console.log(event);
             if (event.acceleration.x < this.threshold * -1 || event.acceleration.x > this.threshold) {
               this.n++;
             } else if (event.acceleration.y < this.threshold * -1 || event.acceleration.y > this.threshold) {
               this.n++;
             } else if (event.acceleration.z < this.threshold * -1 || event.acceleration.z > this.threshold) {
               this.n++;
             }
     
             // text
             if (event.acceleration.x < this.minx) {
               this.minx = event.acceleration.x;
             }
             if (event.acceleration.y < this.miny) {
               this.miny = event.acceleration.y;
             }
             if (event.acceleration.z < this.minz) {
               this.minz = event.acceleration.z;
             }
             if (event.acceleration.x > this.maxx) {
               this.maxx = event.acceleration.x;
             }
             if (event.acceleration.y > this.maxy) {
               this.maxy = event.acceleration.y;
             }
             if (event.acceleration.z > this.maxz) {
               this.maxz = event.acceleration.z;
             }
             this.text1.setText(`x ${this.minx} ${this.maxx}`);
             //this.text2.setText(`y ${this.miny} ${this.maxy}`);
             this.text3.setText(`z ${this.minz} ${this.maxz}`);
             this.text4.setText(`n ${this.n} ${this.nthreshold}`);
             this.text5.setText(`shakes ${this.shakeCount}`);
           });
         } else {
           this.text2.setText('no');
           console.log('no');
         }*/
        this.callApple();
        //
    };
    return BittersScene;
}(Phaser.Scene));
exports.BittersScene = BittersScene;


/***/ }),

/***/ "./src/scenes/boot-scene.ts":
/*!**********************************!*\
  !*** ./src/scenes/boot-scene.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BootScene = void 0;
var signalR = __webpack_require__(/*! @microsoft/signalr */ "./node_modules/@microsoft/signalr/dist/esm/index.js");
var helpers_1 = __webpack_require__(/*! ../helpers */ "./src/helpers.ts");
var sceneConfig = {
    active: false,
    visible: false,
    key: 'Boot',
};
/**
 * The initial scene that loads all necessary assets to the game and displays a loading bar.
 */
var BootScene = /** @class */ (function (_super) {
    __extends(BootScene, _super);
    function BootScene() {
        return _super.call(this, sceneConfig) || this;
    }
    BootScene.prototype.preload = function () {
        return __awaiter(this, void 0, void 0, function () {
            var halfWidth, halfHeight, progressBarHeight, progressBarWidth, progressBarContainer, progressBar, loadingText, percentText, assetText;
            var _this = this;
            return __generator(this, function (_a) {
                document.cookie = "orange=0";
                document.cookie = "bourbon=0";
                document.cookie = "ice=0";
                document.cookie = "vermouth=0";
                halfWidth = helpers_1.getGameWidth(this) * 0.5;
                halfHeight = helpers_1.getGameHeight(this) * 0.5;
                progressBarHeight = 100;
                progressBarWidth = 400;
                progressBarContainer = this.add.rectangle(halfWidth, halfHeight, progressBarWidth, progressBarHeight, 0x000000);
                progressBar = this.add.rectangle(halfWidth + 20 - progressBarContainer.width * 0.5, halfHeight, 10, progressBarHeight - 20, 0x888888);
                loadingText = this.add.text(halfWidth - 75, halfHeight - 100, 'Loading...').setFontSize(24);
                percentText = this.add.text(halfWidth - 25, halfHeight, '0%').setFontSize(24);
                assetText = this.add.text(halfWidth - 25, halfHeight + 100, '').setFontSize(24);
                this.load.on('progress', function (value) {
                    progressBar.width = (progressBarWidth - 30) * value;
                    var percent = value * 100;
                    percentText.setText(percent + "%");
                });
                this.load.on('fileprogress', function (file) {
                    assetText.setText(file.key);
                });
                this.load.on('complete', function () {
                    loadingText.destroy();
                    percentText.destroy();
                    assetText.destroy();
                    progressBar.destroy();
                    progressBarContainer.destroy();
                    _this.scene.start('Permissions', { hubConnection: _this.hubConnection });
                });
                this.hubConnection = new signalR.HubConnectionBuilder()
                    .withUrl("https://schittalkin.azurewebsites.net/whiterushin/")
                    .configureLogging(signalR.LogLevel.Information)
                    .withAutomaticReconnect()
                    .build();
                this.hubConnection.start();
                this.hubConnection.onclose(function () { _this.scene.start("Disconnected"); });
                this.hubConnection.onreconnecting(function () { _this.scene.start("Disconnected"); });
                console.log("connection started");
                this.loadAssets();
                console.log("loaded");
                return [2 /*return*/];
            });
        });
    };
    /**
     * All assets that need to be loaded by the game (sprites, images, animations, tiles, music, etc)
     * should be added to this method. Once loaded in, the loader will keep track of them, indepedent of which scene
     * is currently active, so they can be accessed anywhere.
     */
    BootScene.prototype.loadAssets = function () {
        // Load sample assets
        // Source: Open Game Art
        this.load.image('vermouthtop', 'assets/sprites/vermouthtop2.png');
        this.load.image('vermouthtoponly', 'assets/sprites/vermouthtoponly2.png');
        this.load.image('vermouth', 'assets/sprites/vermouth.png');
        this.load.image('Vermouth', 'assets/sprites/vermouth.png');
        this.load.image('bourbontop', 'assets/sprites/bourbontop2.png');
        this.load.image('bourbontoponly', 'assets/sprites/bourbontoponly.png');
        this.load.image('bourbon', 'assets/sprites/bourbon.png');
        this.load.image('Bourbon', 'assets/sprites/bourbon.png');
        this.load.image('Vodka', 'assets/sprites/vodka.png');
        this.load.image('Gin', 'assets/sprites/gin.png');
        this.load.image('Rum', 'assets/sprites/rum.png');
        this.load.image('Tequila', 'assets/sprites/tequila.png');
        this.load.image('Coke', 'assets/sprites/coke.png');
        this.load.image('Triple Sec', 'assets/sprites/triplesec.png');
        this.load.image('emptyglass', 'assets/sprites/emptyglass.png');
        this.load.image('muddlerglass', 'assets/sprites/muddlerglass.png');
        this.load.image('bittersglass', 'assets/sprites/bittersglass.png');
        this.load.image('shakenglass', 'assets/sprites/shakenglass.png');
        this.load.image('filledglass1', 'assets/sprites/filledglass1.png');
        this.load.image('filledglass2', 'assets/sprites/filledglass2.png');
        this.load.image('filledglass3', 'assets/sprites/filledglass3.png');
        this.load.image('filledglass4', 'assets/sprites/filledglass4.png');
        this.load.image('ice', 'assets/sprites/ice.png');
        this.load.image('Ice Cube', 'assets/sprites/iceicon.png');
        this.load.image('ice1', 'assets/sprites/ice1.png');
        this.load.image('ice2', 'assets/sprites/ice2.png');
        this.load.image('ice3', 'assets/sprites/ice3.png');
        this.load.image('ice4', 'assets/sprites/ice4.png');
        this.load.image('ice5', 'assets/sprites/ice5.png');
        this.load.image('iceglass', 'assets/sprites/iceglass.png');
        this.load.image('orange', 'assets/sprites/orange.png');
        this.load.image('Orange Peel', 'assets/sprites/orange.png');
        this.load.image('orangeinside', 'assets/sprites/orangeInside.png');
        this.load.image('orangewedgeglass', 'assets/sprites/orangewedgeglass.png');
        this.load.image('canelleknife', 'assets/sprites/canelleknife.png');
        this.load.image('shaker', 'assets/sprites/shaker.png');
        this.load.image('Shake Drink', 'assets/sprites/shaker.png');
        this.load.image('shaker0', 'assets/sprites/shaker.png');
        this.load.image('shaker1', 'assets/sprites/shaker1.png');
        this.load.image('shaker2', 'assets/sprites/shaker2.png');
        this.load.image('shaker3', 'assets/sprites/shaker3.png');
        this.load.image('Angostura Bitters', 'assets/sprites/bitters.png');
        this.load.image('bitters', 'assets/sprites/bitters.png');
        this.load.image('bitters0', 'assets/sprites/bitters.png');
        this.load.image('bitters1', 'assets/sprites/bitters1.png');
        this.load.image('bitters2', 'assets/sprites/bitters2.png');
        this.load.image('bitters3', 'assets/sprites/bitters3.png');
        this.load.image('muddler', 'assets/sprites/muddler.png');
        this.load.image('Muddle Drink', 'assets/sprites/muddler.png');
        this.load.image('juicer', 'assets/sprites/juicer.png');
        this.load.image('Lemon Juice', 'assets/sprites/juicerlemontrigger.png');
        this.load.image('Lime Juice', 'assets/sprites/juicerlimetrigger.png');
        this.load.image('Orange Juice', 'assets/sprites/juicerorangetrigger.png');
        this.load.image('juicerbottom', 'assets/sprites/juicerbottom.png');
        this.load.image('juicertop', 'assets/sprites/juicertop.png');
        this.load.image('Orange Juice 2', 'assets/sprites/juicerorange.png');
        this.load.image('Lime Juice 2', 'assets/sprites/juicerlime.png');
        this.load.image('Lemon Juice 2', 'assets/sprites/juicerlemon.png');
    };
    return BootScene;
}(Phaser.Scene));
exports.BootScene = BootScene;


/***/ }),

/***/ "./src/scenes/bourbon-scene.ts":
/*!*************************************!*\
  !*** ./src/scenes/bourbon-scene.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.BourbonScene = void 0;
var sceneConfig = {
    active: false,
    visible: false,
    key: 'Bourbon',
};
var GameSceneArguments = /** @class */ (function () {
    function GameSceneArguments() {
    }
    return GameSceneArguments;
}());
var BourbonScene = /** @class */ (function (_super) {
    __extends(BourbonScene, _super);
    function BourbonScene() {
        var _this = _super.call(this, sceneConfig) || this;
        _this.speed = 200;
        _this.contents = [];
        _this.glassFillers = [];
        _this.transitioning = false;
        _this.unscrewed = 0;
        _this.held = false;
        return _this;
    }
    BourbonScene.prototype.init = function (data) {
        this.onFinish = data.onFinish;
    };
    BourbonScene.prototype.create = function () {
        var _this = this;
        console.log('Bourbon');
        var _a = this.sys.game.canvas, width = _a.width, height = _a.height;
        this.unscrewed = 0;
        this.held = false;
        this.transitioning = false;
        // Add a player sprite that can be moved around. Place him in the middle of the screen.
        this.bourbonTop = this.add.sprite(width / 2, height / 2 + 300, 'bourbontop');
        this.bourbonTopOnly = this.add.sprite(width / 2, height / 2 + 300, 'bourbontoponly');
        //let rect = new Phaser.GameObjects.Rectangle(width / 2, height * 0.069032258, 0, 0);
        this.lidRect = this.add
            .rectangle(width / 2, this.bourbonTopOnly.y - this.bourbonTopOnly.displayHeight * 0.430967742, this.bourbonTopOnly.displayWidth / 3, this.bourbonTopOnly.displayHeight / 7, 0xffffff)
            .setAlpha(0.25)
            .setDepth(1);
        this.input.on('pointerdown', function () {
            if (_this.lidRect.getBounds().contains(_this.input.activePointer.x, _this.input.activePointer.y) &&
                _this.bourbonTopOnly.y == _this.bourbonTop.y) {
                _this.text1.setText("clicked box");
                _this.held = true;
                _this.bourbonTopOnly.y -= 15;
                _this.lidRect.y -= 15;
            }
        });
        this.input.on('pointerup', function () {
            _this.held = false;
            if (_this.lidRect.y + _this.lidRect.displayWidth / 2 > _this.bourbonTop.y - _this.bourbonTop.displayHeight / 2) {
                _this.lidRect.y = _this.bourbonTop.y - _this.bourbonTop.displayHeight * 0.430967742;
                _this.bourbonTopOnly.y = _this.bourbonTop.y;
                _this.unscrewed = 0;
            }
            _this.text1.setText("\u03B8: " + _this.input.activePointer.getAngle());
            _this.text2.setText("x: " + _this.input.activePointer.getDistanceX());
            _this.text3.setText("y: " + _this.input.activePointer.getDistanceY());
            _this.text4.setText("d: " + _this.input.activePointer.getDistance());
        });
        this.text1 = this.add.text(10, 10, '', { color: '#00ff00' });
        this.text2 = this.add.text(10, 25, '', { color: '#00ff00' });
        this.text3 = this.add.text(10, 40, '', { color: '#00ff00' });
        this.text4 = this.add.text(10, 55, '', { color: '#00ff00' });
        this.text5 = this.add.text(10, 70, '', { color: '#00ff00' });
    };
    BourbonScene.prototype.update = function () {
        var _this = this;
        if (this.held) {
            if (this.input.activePointer.getAngle() < 0 && this.input.activePointer.getDistanceY() > 50) {
                this.unscrewed += 1;
                if (this.unscrewed % 2 == 1) {
                    this.bourbonTopOnly.y -= 1;
                    this.lidRect.y -= 1;
                    if (this.lidRect.y + this.lidRect.displayWidth / 2 < this.bourbonTop.y - this.bourbonTop.displayHeight / 2 &&
                        !this.transitioning) {
                        this.transitioning = true;
                        setTimeout(function () {
                            _this.scene.stop();
                            _this.scene.launch('Pour', { BottleSpriteName: 'Bourbon', onFinish: _this.onFinish });
                        }, 500);
                    }
                }
            }
        }
    };
    return BourbonScene;
}(Phaser.Scene));
exports.BourbonScene = BourbonScene;


/***/ }),

/***/ "./src/scenes/disconnected-scene.ts":
/*!******************************************!*\
  !*** ./src/scenes/disconnected-scene.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisconnectedScene = void 0;
var sceneConfig = {
    active: false,
    visible: false,
    key: 'Disconnected',
};
var GameSceneArguments = /** @class */ (function () {
    function GameSceneArguments() {
    }
    return GameSceneArguments;
}());
var DisconnectedScene = /** @class */ (function (_super) {
    __extends(DisconnectedScene, _super);
    function DisconnectedScene() {
        var _this = _super.call(this, sceneConfig) || this;
        _this.speed = 200;
        _this.transitioning = false;
        _this.clicks = 0;
        _this.iceLevel = 0;
        return _this;
    }
    DisconnectedScene.prototype.init = function (data) {
        this.onFinish = data.onFinish;
    };
    DisconnectedScene.prototype.create = function () {
        console.log('Success');
        var _a = this.sys.game.canvas, width = _a.width, height = _a.height;
        this.transitioning = false;
        // Add a player sprite that can be moved around. Place him in the middle of the screen.
        //this.vermouthTopOnly = this.add.sprite(width / 2, height / 2 + 300, 'vermouthtoponly');
        this.add.rectangle(width / 2, height / 2, width, height, 0x000000);
        this.add.text(width / 8, (height / 4) - 30, "You are disconnected\nplease refresh", { color: '#ffffff' });
    };
    return DisconnectedScene;
}(Phaser.Scene));
exports.DisconnectedScene = DisconnectedScene;


/***/ }),

/***/ "./src/scenes/everyone-in-scene.ts":
/*!*****************************************!*\
  !*** ./src/scenes/everyone-in-scene.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.EveryoneInScene = void 0;
var menu_button_1 = __webpack_require__(/*! ../ui/menu-button */ "./src/ui/menu-button.ts");
var querystring = __webpack_require__(/*! query-string */ "./node_modules/query-string/index.js");
var sceneConfig = {
    active: false,
    visible: false,
    key: 'EveryoneIn',
};
var GameSceneArguments = /** @class */ (function () {
    function GameSceneArguments() {
    }
    return GameSceneArguments;
}());
/**
 * The initial scene that starts, shows the splash screens, and loads the necessary assets.
 */
var EveryoneInScene = /** @class */ (function (_super) {
    __extends(EveryoneInScene, _super);
    function EveryoneInScene() {
        return _super.call(this, sceneConfig) || this;
    }
    EveryoneInScene.prototype.init = function (data) {
        this.hubConnection = data.hubConnection;
    };
    EveryoneInScene.prototype.create = function () {
        var _this = this;
        console.log('Ready up menu');
        console.log(this.hubConnection);
        this.inCount = 0;
        //this.hubConnection.invoke('Register', querystring.parse(window.location.search)["room"]);
        this.hubConnection.on('Assign', function (cup, actions, playercount, round) {
            console.log("cup: " + cup + " actions: " + actions + " playercount: " + playercount + " round number: " + round);
            var item = {
                playercount: playercount,
                roundNumber: round,
                cupNumber: cup,
                actions: actions
            };
            _this.hubConnection.off('Assign');
            _this.scene.start('Game', { hubConnection: _this.hubConnection, setup: item });
        });
        this.hubConnection.on('UpdateReadyCount', function (inCount) {
            console.log("incount " + inCount);
            _this.inCount = inCount;
        });
        var roomcode = querystring.parse(window.location.search);
        var room = roomcode["room"];
        this.add
            .text(100, 50, "Team " + room, {
            color: '#FFFFFF',
        })
            .setFontSize(24);
        this.playerDisplay = this.add.text(100, 100, "Text: " + this.inCount);
        new menu_button_1.MenuButton(this, 100, 150, 'Everyone is ready', function () {
            _this.hubConnection.invoke('AllReady').then(function () { return console.log("got back from already"); });
            console.log("called allready");
        });
    };
    EveryoneInScene.prototype.update = function () {
        this.playerDisplay.setText("Text: " + this.inCount);
    };
    return EveryoneInScene;
}(Phaser.Scene));
exports.EveryoneInScene = EveryoneInScene;


/***/ }),

/***/ "./src/scenes/game-scene.ts":
/*!**********************************!*\
  !*** ./src/scenes/game-scene.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameScene = void 0;
var helpers_1 = __webpack_require__(/*! ../helpers */ "./src/helpers.ts");
//import { Ingredients } from '../../../Client/src/Reference';
var menu_button_1 = __webpack_require__(/*! ../ui/menu-button */ "./src/ui/menu-button.ts");
var glass_button_1 = __webpack_require__(/*! ../ui/glass-button */ "./src/ui/glass-button.ts");
var scene_button_1 = __webpack_require__(/*! ../ui/scene-button */ "./src/ui/scene-button.ts");
var sceneConfig = {
    active: false,
    visible: false,
    key: 'Game',
};
var GamePhase;
(function (GamePhase) {
    GamePhase[GamePhase["Unassigned"] = 0] = "Unassigned";
    GamePhase[GamePhase["Assigned"] = 1] = "Assigned";
    GamePhase[GamePhase["Started"] = 2] = "Started";
    GamePhase[GamePhase["Resulted"] = 3] = "Resulted";
})(GamePhase || (GamePhase = {}));
var Setup = /** @class */ (function () {
    function Setup() {
    }
    return Setup;
}());
var GameSceneArguments = /** @class */ (function () {
    function GameSceneArguments() {
    }
    return GameSceneArguments;
}());
var stateUpdate = /** @class */ (function () {
    function stateUpdate() {
    }
    return stateUpdate;
}());
var GameScene = /** @class */ (function (_super) {
    __extends(GameScene, _super);
    function GameScene() {
        var _this = _super.call(this, sceneConfig) || this;
        _this.speed = 200;
        _this.glassButtons = [];
        _this.contents = [];
        _this.glassFillers = [];
        _this.privateColorMap = new Map([
            ['bourbon', 0xdb7900],
            ['vermouth', 0x550103],
        ]);
        _this.isPouring = 0;
        _this.getCookie = function (cname) {
            var name = cname + '=';
            var decodedCookie = decodeURIComponent(document.cookie);
            var ca = decodedCookie.split(';');
            for (var i = 0; i < ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) == ' ') {
                    c = c.substring(1);
                }
                if (c.indexOf(name) == 0) {
                    return c.substring(name.length, c.length);
                }
            }
            return '';
        };
        _this.remoteRegister = function () {
            _this.hubConnection.invoke('Register', 'yeahhardcodedteamname');
        };
        _this.remoteSubmitcup = function () {
            _this.hubConnection.invoke('SubmitCup');
        };
        _this.remoteSendAction = function (action, target) {
            _this.hubConnection.invoke('SendAction', action, target);
        };
        _this.remoteEmptyCup = function () {
            _this.hubConnection.invoke('EmptyCup');
        };
        _this.remoteReset = function () {
            _this.hubConnection.invoke('Reset');
        };
        _this.remoteFetchState = function () {
            _this.hubConnection.invoke('FetchState');
        };
        return _this;
    }
    GameScene.prototype.init = function (data) {
        this.hubConnection = data.hubConnection;
        this.playerCount = data.setup.playercount;
        this.actions = data.setup.actions;
        this.roundNumber = data.setup.roundNumber;
        this.cupNumber = data.setup.cupNumber;
    };
    GameScene.prototype.create = function () {
        var _this = this;
        console.log('Game');
        console.log('cookie: ' + document.cookie);
        this.reset();
        this.selectedTarget = this.cupNumber.toString();
        this.fullStuff = [];
        // SignalR Stuff
        this.setupHub(this.hubConnection);
        var _a = this.sys.game.canvas, width = _a.width, height = _a.height;
        this.emptyGlass = this.add.sprite(width / 2, height / 3, 'emptyglass').setDepth(0);
        if (this.cupNumber < 4) {
            this.cupNumberText = this.add.text(width / 4, height / 10 - 30, "You are cup number " + (this.cupNumber + 1), { color: '#ffffff' });
            // Add a player sprite that can be moved around. Place him in the middle of the screen.
            this.filledglass1 = this.add.rectangle(width / 2, height / 3 + (this.emptyGlass.displayHeight / 4), this.emptyGlass.displayWidth, this.emptyGlass.displayHeight / 4, 0xffffff);
            this.filledglass2 = this.add.rectangle(width / 2, height / 3 + (3 * this.emptyGlass.displayHeight / 4), this.emptyGlass.displayWidth, this.emptyGlass.displayHeight / 4, 0x0000ff);
            this.filledglass3 = this.add.rectangle(width / 2, height / 3 + (this.emptyGlass.displayHeight / 2), this.emptyGlass.displayWidth, this.emptyGlass.displayHeight / 4, 0x00ff00);
            this.filledglass4 = this.add.rectangle(width / 2, height / 3, this.emptyGlass.displayWidth, this.emptyGlass.displayHeight / 4, 0xFF0000);
            this.filledglass1.setScale(0.5).setAlpha(1).setDepth(1).setBlendMode(Phaser.BlendModes.MULTIPLY);
            this.filledglass2.setScale(0.5).setAlpha(1).setDepth(1).setBlendMode(Phaser.BlendModes.MULTIPLY);
            this.filledglass3.setScale(0.5).setAlpha(1).setDepth(1).setBlendMode(Phaser.BlendModes.MULTIPLY);
            this.filledglass4.setScale(0.5).setAlpha(1).setDepth(1).setBlendMode(Phaser.BlendModes.MULTIPLY);
            this.emptyGlass.setScale(0.5);
            this.filledglass1.setOrigin(0, 0);
            this.filledglass2.setOrigin(0, 0);
            this.filledglass3.setOrigin(0, 0);
            this.filledglass4.setOrigin(0, 0);
            this.filledglass1.height = this.emptyGlass.displayHeight / 2;
            this.filledglass2.height = this.emptyGlass.displayHeight / 2;
            this.filledglass3.height = this.emptyGlass.displayHeight / 2;
            this.filledglass4.height = this.emptyGlass.displayHeight / 2;
            this.filledglass1.setPosition(this.emptyGlass.getTopLeft().x, this.emptyGlass.getTopLeft().y);
            this.filledglass2.setPosition(this.filledglass1.getBottomLeft().x, this.filledglass1.getBottomLeft().y);
            this.filledglass3.setPosition(this.filledglass2.getBottomLeft().x, this.filledglass2.getBottomLeft().y);
            this.filledglass4.setPosition(this.filledglass3.getBottomLeft().x, this.filledglass3.getBottomLeft().y);
            this.submitButton = new menu_button_1.MenuButton(this, this.emptyGlass.getBottomCenter().x - 50, this.emptyGlass.getTopCenter().y - height / 10, 'Serve Glass', function () {
                _this.remoteSubmitcup();
            });
            this.submitButton.setX(this.submitButton.x - this.submitButton.displayWidth / 2);
            this.submitButton.label.setX(this.submitButton.x + this.submitButton.padding);
            new scene_button_1.SceneButton(this, this.submitButton.getTopRight().x + 15, this.emptyGlass.getTopCenter().y - height / 10, 'Discard', function () { return _this.remoteEmptyCup(); });
            this.glassFillers.push(this.filledglass4);
            this.glassFillers.push(this.filledglass3);
            this.glassFillers.push(this.filledglass2);
            this.glassFillers.push(this.filledglass1);
            /*
            */
            this.input.on('dragend', function (pointer, gameObject) {
                gameObject.clearTint();
            });
            // This is a nice helper Phaser provides to create listeners for some of the most common keys.
            this.cursorKeys = this.input.keyboard.createCursorKeys();
            this.text1 = this.add.text(10, 10, '', { color: '#00ff00' });
            this.text2 = this.add.text(500, 10, '', { color: '#00ff00' });
            this.actions.forEach(function (element, idx) {
                var name = helpers_1.Ingredients[element];
                //let actionButton = new SceneButton(this, width * idx / 5, height * 0.75, name, ()=>{});
                var nextScene = name;
                console.log(name);
                var tmp = _this.add.sprite((width / 5) * (idx + 1), height * 0.75, name).setInteractive();
                if (element >= 10) {
                    nextScene = 'Pour';
                }
                else if (name.includes("Juice")) {
                    nextScene = 'Juicer';
                }
                tmp.setScale(0.2);
                tmp.on('pointerdown', function () {
                    _this.scene.setVisible(false);
                    _this.scene.pause();
                    console.log("next " + nextScene);
                    _this.scene.launch(nextScene, { onFinish: function () {
                            console.log("called");
                            _this.scene.setVisible(true);
                            _this.remoteSendAction(element, Number.parseInt(_this.selectedTarget).valueOf());
                            _this.scene.resume();
                        }, BottleSpriteName: name });
                    console.log(name);
                });
            });
            this.glassButtons = [];
            this.add.text(this.emptyGlass.getTopLeft().x, this.emptyGlass.getBottomCenter().y + height / 15 - 15, "target cup:");
            var _loop_1 = function (i) {
                this_1.glassButtons.push(new glass_button_1.GlassButton(this_1, this_1.emptyGlass.getTopLeft().x + i * 30, this_1.emptyGlass.getBottomCenter().y + height / 15, (i + 1).toString(), function () {
                    _this.render = true;
                    _this.selectedTarget = i.toString();
                    console.log("selected = " + _this.selectedTarget);
                }));
            };
            var this_1 = this;
            for (var i = 0; i < 4; i++) {
                _loop_1(i);
            }
        }
        else {
            this.emptyGlass.setScale(0.5);
            this.emptyGlass.setVisible(false);
            this.actions.forEach(function (element, idx) {
                var name = helpers_1.Ingredients[element];
                //let actionButton = new SceneButton(this, width * idx / 5, height * 0.75, name, ()=>{});
                var nextScene = name;
                console.log(name);
                var tmp = _this.add.sprite((width / 2), (height / 5) * (idx + 1), name).setInteractive();
                if (element >= 10) {
                    nextScene = 'Pour';
                }
                else if (name.includes("Juice")) {
                    nextScene = 'Juicer';
                }
                tmp.setScale(0.2);
                tmp.on('pointerdown', function () {
                    _this.scene.setVisible(false);
                    _this.scene.pause();
                    console.log("next " + nextScene);
                    _this.scene.launch(nextScene, { onFinish: function () {
                            console.log("called");
                            _this.scene.setVisible(true);
                            _this.remoteSendAction(element, Number.parseInt(_this.selectedTarget).valueOf());
                            _this.scene.resume();
                        }, BottleSpriteName: name });
                    console.log(name);
                });
            });
            this.glassButtons = [];
            this.add.text(this.emptyGlass.getTopLeft().x, height / 12 - 15, "target cup:");
            var _loop_2 = function (i) {
                this_2.glassButtons.push(new glass_button_1.GlassButton(this_2, this_2.emptyGlass.getTopLeft().x + i * 30, height / 12, (i + 1).toString(), function () {
                    _this.render = true;
                    _this.selectedTarget = i.toString();
                    console.log("selected = " + _this.selectedTarget);
                }));
            };
            var this_2 = this;
            for (var i = 0; i < 4; i++) {
                _loop_2(i);
            }
        }
        setInterval(function () {
            _this.remoteFetchState();
        }, 10000);
        this.remoteFetchState();
    };
    GameScene.prototype.update = function () {
        var _this = this;
        if (this.render) {
            // select buttons 
            this.glassButtons.forEach(function (element, idx) {
                if (_this.cupLocks.includes(idx.valueOf())) {
                    element.enterMenuButtonBlockedState();
                }
                else {
                    if (_this.selectedTarget == idx.toString()) {
                        element.enterMenuButtonActiveState();
                    }
                    else {
                        element.enterMenuButtonRestState();
                    }
                }
            });
            // overwriting 
            this.glassFillers.forEach(function (element) {
                element.setVisible(false);
            });
            this.fullStuff.forEach(function (element) {
                element.destroy();
            });
            // implemention
            var _a = this.sys.game.canvas, width_1 = _a.width, height_1 = _a.height;
            var currentPosition_1 = 0;
            this.glassContents.forEach(function (element, idx) {
                var name = helpers_1.Ingredients[element];
                console.log("rendering " + name + currentPosition_1);
                if (helpers_1.drinkToColorMap.has(name)) {
                    console.log("tried to tint " + helpers_1.drinkToColorMap.get(name));
                    _this.glassFillers[currentPosition_1].setVisible(true);
                    _this.glassFillers[currentPosition_1].fillColor = (helpers_1.drinkToColorMap.get(name));
                    currentPosition_1++;
                }
                switch (name) {
                    case 'Orange Peel':
                        _this.fullStuff.push(_this.add.sprite(width_1 / 2, height_1 / 3, 'orangewedgeglass').setScale(0.5));
                        break;
                    case 'Ice Cube':
                        _this.fullStuff.push(_this.add.sprite(width_1 / 2, height_1 / 3, 'iceglass').setScale(0.5));
                        break;
                    case 'Muddle Drink':
                        _this.fullStuff.push(_this.add.sprite(width_1 / 2, height_1 / 3, 'muddlerglass').setScale(0.5));
                        break;
                    case 'Shake Drink':
                        _this.fullStuff.push(_this.add.sprite(width_1 / 2, height_1 / 3, 'shakenglass').setScale(0.5));
                        break;
                    case 'Angostura Bitters':
                        _this.fullStuff.push(_this.add.sprite(width_1 / 2, height_1 / 3, 'bittersglass').setScale(0.5));
                        break;
                }
            });
            this.render = false;
        }
    };
    GameScene.prototype.rotateRight = function (gameObject) {
        if (gameObject.angle < 90) {
            gameObject.setAngle(gameObject.angle + 15);
        }
    };
    GameScene.prototype.rotateCenter = function (gameObject) {
        if (gameObject.angle > 0) {
            gameObject.setAngle(gameObject.angle - 15);
        }
    };
    GameScene.prototype.setupHub = function (connection) {
        var _this = this;
        connection.on('Start', function () {
            console.log("started");
            _this.phase = GamePhase.Started;
            _this.reset();
            _this.remoteFetchState();
            console.log("tried to reset");
            _this.render = true;
        });
        connection.on('UpdateCupState', function (cupState) {
            console.log("CupState: " + cupState);
            _this.glassContents = cupState;
            _this.render = true;
        });
        connection.on('StatePush', function (update) {
            console.log("StatePush: " + update.cupLocks.join(",") + " " + update.cupState.join(",") + " ");
            _this.glassContents = update.cupState;
            _this.cupLocks = update.cupLocks;
            /*this.scene.restart({hubConnection: this.hubConnection, setup: {
              playercount: this.playerCount,
              roundNumber: this.roundNumber,
              cupNumber: this.cupNumber,
              actions: this.actions
            }});*/
            _this.render = true;
        });
        connection.on('Result', function (result) {
            /*for (let i = result.length - 1; i > 0; i--) {
              const j = Math.floor(Math.random() * (i + 1));
              [result[i], result[j]] = [result[j], result[i]];
            }*/
            console.log(result);
            var count = result.reduce(function (x, y) { return x + y; });
            if (count == 0) {
                _this.final = true;
                _this.scene.setVisible(false);
                _this.scene.pause();
                _this.scene.launch('Success');
                return;
            }
            //let list = [0, 0, 0, 0];
            /*result.forEach(element => {
              list[element] += 1;
            });
            let list2 = this.state.resultsList;
            list2.push(list);*/
            _this.phase = GamePhase.Resulted;
            //this.results = result;
            _this.render = true;
            // should go to result scene instead
            // actually shouldnt, id rather just plop results on top of whatever else is visible
            _this.remoteReset();
            _this.reset();
            console.log("tried to reset from results");
            _this.render = true;
            _this.scene.setVisible(false);
            _this.scene.pause();
            _this.scene.launch('Results', { onFinish: function () { _this.scene.resume(); _this.scene.setVisible(true); }, results: result });
        });
        connection.on('LockCup', function (cup) {
            console.log("Locked " + cup);
            _this.cupLocks = _this.cupLocks.concat([cup]);
            console.log(_this.cupLocks);
            _this.render = true;
        });
    };
    GameScene.prototype.reset = function () {
        this.glassContents = [];
        this.results = [];
        this.cupLocks = [];
        this.render = true;
        this.glassButtons.forEach(function (e) {
            e.enterMenuButtonBlockedState();
            e.resetOnClick();
            e.enterMenuButtonRestState();
        });
    };
    return GameScene;
}(Phaser.Scene));
exports.GameScene = GameScene;


/***/ }),

/***/ "./src/scenes/ice-scene.ts":
/*!*********************************!*\
  !*** ./src/scenes/ice-scene.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.IceScene = void 0;
var sceneConfig = {
    active: false,
    visible: false,
    key: 'Ice Cube',
};
var GameSceneArguments = /** @class */ (function () {
    function GameSceneArguments() {
    }
    return GameSceneArguments;
}());
var IceScene = /** @class */ (function (_super) {
    __extends(IceScene, _super);
    function IceScene() {
        var _this = _super.call(this, sceneConfig) || this;
        _this.speed = 200;
        _this.contents = [];
        _this.glassFillers = [];
        _this.isPouring = 0;
        _this.transitioning = false;
        _this.clicks = 0;
        _this.iceLevel = 0;
        return _this;
    }
    IceScene.prototype.init = function (data) {
        this.onFinish = data.onFinish;
    };
    IceScene.prototype.create = function () {
        var _this = this;
        console.log('Ice');
        var _a = this.sys.game.canvas, width = _a.width, height = _a.height;
        this.transitioning = false;
        this.clicks = 0;
        this.iceLevel = 0;
        // Add a player sprite that can be moved around. Place him in the middle of the screen.
        this.ice = this.add.sprite(width / 2, height / 2, 'ice');
        this.ice.setScale(0.4);
        //this.vermouthTopOnly = this.add.sprite(width / 2, height / 2 + 300, 'vermouthtoponly');
        this.input.on('pointerup', function () {
            _this.text1.setText("\u03B8: " + _this.input.activePointer.getAngle());
            _this.text2.setText("x: " + _this.input.activePointer.getDistanceX());
            _this.text3.setText("y: " + _this.input.activePointer.getDistanceY());
            _this.text4.setText("d: " + _this.input.activePointer.getDistance());
        });
        this.input.on('pointerdown', function () {
            if (_this.iceLevel == 0) {
                _this.ice.setTexture('ice' + ++_this.iceLevel);
            }
            _this.clicks += 1;
            if (_this.clicks % 5 == 0) {
                _this.ice.setTexture('ice' + ++_this.iceLevel);
            }
            if (_this.iceLevel == 5 && !_this.transitioning) {
                _this.transitioning = true;
                document.cookie = "ice=1";
                setTimeout(function () {
                    _this.scene.stop();
                    _this.onFinish();
                    //this.scene.start('Game');
                }, 500);
            }
        });
        this.text1 = this.add.text(10, 10, '', { color: '#00ff00' });
        this.text2 = this.add.text(10, 25, '', { color: '#00ff00' });
        this.text3 = this.add.text(10, 40, '', { color: '#00ff00' });
        this.text4 = this.add.text(10, 55, '', { color: '#00ff00' });
        this.text5 = this.add.text(10, 70, '', { color: '#00ff00' });
    };
    return IceScene;
}(Phaser.Scene));
exports.IceScene = IceScene;


/***/ }),

/***/ "./src/scenes/index.ts":
/*!*****************************!*\
  !*** ./src/scenes/index.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var main_menu_scene_1 = __webpack_require__(/*! ./main-menu-scene */ "./src/scenes/main-menu-scene.ts");
var boot_scene_1 = __webpack_require__(/*! ./boot-scene */ "./src/scenes/boot-scene.ts");
var game_scene_1 = __webpack_require__(/*! ./game-scene */ "./src/scenes/game-scene.ts");
var vermouth_scene_1 = __webpack_require__(/*! ./vermouth-scene */ "./src/scenes/vermouth-scene.ts");
var pour_scene_1 = __webpack_require__(/*! ./pour-scene */ "./src/scenes/pour-scene.ts");
var bourbon_scene_1 = __webpack_require__(/*! ./bourbon-scene */ "./src/scenes/bourbon-scene.ts");
var ice_scene_1 = __webpack_require__(/*! ./ice-scene */ "./src/scenes/ice-scene.ts");
var orange_scene_1 = __webpack_require__(/*! ./orange-scene */ "./src/scenes/orange-scene.ts");
var shake_scene_1 = __webpack_require__(/*! ./shake-scene */ "./src/scenes/shake-scene.ts");
var muddle_scene_1 = __webpack_require__(/*! ./muddle-scene */ "./src/scenes/muddle-scene.ts");
var juicer_scene_1 = __webpack_require__(/*! ./juicer-scene */ "./src/scenes/juicer-scene.ts");
var results_scene_1 = __webpack_require__(/*! ./results-scene */ "./src/scenes/results-scene.ts");
var success_scene_1 = __webpack_require__(/*! ./success-scene */ "./src/scenes/success-scene.ts");
var bitters_scene_1 = __webpack_require__(/*! ./bitters-scene */ "./src/scenes/bitters-scene.ts");
var everyone_in_scene_1 = __webpack_require__(/*! ./everyone-in-scene */ "./src/scenes/everyone-in-scene.ts");
var permissions_scene_1 = __webpack_require__(/*! ./permissions-scene */ "./src/scenes/permissions-scene.ts");
var disconnected_scene_1 = __webpack_require__(/*! ./disconnected-scene */ "./src/scenes/disconnected-scene.ts");
exports.default = [
    boot_scene_1.BootScene,
    main_menu_scene_1.MainMenuScene,
    game_scene_1.GameScene,
    vermouth_scene_1.VermouthScene,
    pour_scene_1.PourScene,
    bourbon_scene_1.BourbonScene,
    ice_scene_1.IceScene,
    orange_scene_1.OrangeScene,
    shake_scene_1.ShakeScene,
    muddle_scene_1.MuddleScene,
    juicer_scene_1.JuicerScene,
    results_scene_1.ResultsScene,
    success_scene_1.SuccessScene,
    bitters_scene_1.BittersScene,
    everyone_in_scene_1.EveryoneInScene,
    permissions_scene_1.PermissionsScene,
    disconnected_scene_1.DisconnectedScene
];


/***/ }),

/***/ "./src/scenes/juicer-scene.ts":
/*!************************************!*\
  !*** ./src/scenes/juicer-scene.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.JuicerScene = void 0;
var helpers_1 = __webpack_require__(/*! ../helpers */ "./src/helpers.ts");
var sceneConfig = {
    active: false,
    visible: false,
    key: 'Juicer',
};
var GameSceneArguments = /** @class */ (function () {
    function GameSceneArguments() {
    }
    return GameSceneArguments;
}());
var JuicerScene = /** @class */ (function (_super) {
    __extends(JuicerScene, _super);
    function JuicerScene() {
        var _this = _super.call(this, sceneConfig) || this;
        _this.speed = 200;
        _this.pourCount = 0;
        _this.transitioning = false;
        return _this;
    }
    JuicerScene.prototype.init = function (data) {
        console.log('JuicerInit');
        this.fruitSpriteName = data.BottleSpriteName + " 2";
        this.onFinish = data.onFinish;
    };
    JuicerScene.prototype.create = function () {
        var _this = this;
        console.log('Juicer');
        var _a = this.sys.game.canvas, width = _a.width, height = _a.height;
        this.pourCount = 0;
        this.transitioning = false;
        // Add a player sprite that can be moved around. Place him in the middle of the screen.
        this.emptyGlass = this.add.sprite(width / 2, height / 2, 'emptyglass').setAlpha(0);
        console.log("glass x: " + width / 4);
        console.log("glass y: " + height / 2);
        this.emptyGlass.setScale(0.5);
        this.emptyGlass.scaleY = this.emptyGlass.scaleY * 0.5;
        this.juicerTop = this.add.sprite(width / 1.5, height / 2, 'juicertop').setInteractive();
        this.juicerTop.setScale(0.7);
        this.juicerTop.setOrigin(0.7675, 0.7675);
        this.juicerBottom = this.add.sprite(width / 1.5, height / 2, 'juicerbottom').setInteractive();
        this.juicerBottom.setScale(0.7);
        this.juicerBottom.setOrigin(0.7675, 0.7675);
        this.fruit = this.add.sprite(width / 1.5, height / 2, this.fruitSpriteName);
        this.fruit.setScale(0.7);
        this.fruit.setOrigin(0.7675, 0.7675);
        console.log(this.emptyGlass.x);
        console.log(this.juicerTop.displayHeight);
        //this.juicerTop.setPosition(this.emptyGlass.x + this.juicerTop.displayHeight / 4);
        this.juicerTop.setScale(0.4);
        this.fruit.setScale(0.4);
        //this.juicerBottom.setPosition(this.emptyGlass.x + this.juicerBottom.displayHeight / 4);
        this.juicerBottom.setScale(0.4);
        this.juicerTop.setPosition(this.emptyGlass.x + this.juicerTop.displayWidth / 3, this.emptyGlass.y + this.juicerTop.displayHeight / 4);
        this.juicerBottom.setPosition(this.emptyGlass.x + this.juicerBottom.displayWidth / 3, this.emptyGlass.y + this.juicerTop.displayHeight / 4);
        this.fruit.setPosition(this.emptyGlass.x + this.juicerBottom.displayWidth / 3, this.emptyGlass.y + this.juicerTop.displayHeight / 4);
        //this.add.rectangle(this.juicerBottom.x, this.juicerBottom.y, this.juicerBottom.displayWidth, this.juicerBottom.displayHeight, 0xFF0000);
        //this.add.rectangle(this.juicerTop.x, this.juicerTop.y, this.juicerTop.displayWidth, this.juicerTop.displayHeight, 0x0000FF);
        this.juicerTop.on('pointerover', function () {
            _this.juicerTop.setTint(0xcccccc);
        });
        this.juicerTop.on('pointerout', function () {
            _this.juicerTop.clearTint();
        });
        this.input.setDraggable(this.juicerTop);
        this.input.on('dragstart', function (pointer, gameObject) {
            gameObject.setTint(0x999999);
        });
        this.liquidRectangle = this.add
            .rectangle(this.emptyGlass.x, this.emptyGlass.y + this.emptyGlass.displayHeight / 2, this.emptyGlass.displayWidth, ++this.pourCount, helpers_1.drinkToColorMap.get(this.fruitSpriteName))
            .setBlendMode(Phaser.BlendModes.MULTIPLY);
        this.input.on('drag', function (pointer, gameObject, dragX, dragY) {
            // from here: need to 1. calculate angle between base of object and cursor
            // 2. rotate until top of bottle is pointing to cursor
            var y1 = gameObject.y;
            var y2 = _this.input.activePointer.y;
            var x1 = gameObject.x;
            var x2 = _this.input.activePointer.x;
            var slopeRads = Math.atan2(y2 - y1, x2 - x1);
            var adjusted = slopeRads + 1.57079633;
            _this.text1.setText("" + adjusted);
            if (adjusted <= 0.025) {
                gameObject.rotation = slopeRads + 1.57079633;
            }
        });
        this.input.on('dragend', function (pointer, gameObject) {
            gameObject.clearTint();
        });
        // This is a nice helper Phaser provides to create listeners for some of the most common keys.
        this.text1 = this.add.text(10, 10, '', { color: '#00ff00' });
        this.text2 = this.add.text(100, 10, '', { color: '#00ff00' });
        this.juicerTop.setDepth(1);
    };
    JuicerScene.prototype.update = function () {
        var _this = this;
        // Every frame, we create a new velocity for the sprite based on what keys the player is holding down.
        this.text1.setText("" + this.juicerTop.rotation);
        if (this.juicerTop.rotation < -1.49) {
            if (!this.transitioning) {
                this.transitioning = true;
                setTimeout(function () {
                    _this.scene.stop();
                    _this.onFinish();
                }, 500);
            }
        }
    };
    return JuicerScene;
}(Phaser.Scene));
exports.JuicerScene = JuicerScene;


/***/ }),

/***/ "./src/scenes/main-menu-scene.ts":
/*!***************************************!*\
  !*** ./src/scenes/main-menu-scene.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainMenuScene = void 0;
var menu_button_1 = __webpack_require__(/*! ../ui/menu-button */ "./src/ui/menu-button.ts");
var querystring = __webpack_require__(/*! query-string */ "./node_modules/query-string/index.js");
var sceneConfig = {
    active: false,
    visible: false,
    key: 'MainMenu',
};
var GameSceneArguments = /** @class */ (function () {
    function GameSceneArguments() {
    }
    return GameSceneArguments;
}());
/**
 * The initial scene that starts, shows the splash screens, and loads the necessary assets.
 */
var MainMenuScene = /** @class */ (function (_super) {
    __extends(MainMenuScene, _super);
    function MainMenuScene() {
        return _super.call(this, sceneConfig) || this;
    }
    MainMenuScene.prototype.init = function (data) {
        this.hubConnection = data.hubConnection;
    };
    MainMenuScene.prototype.create = function () {
        var _this = this;
        console.log('Main Menu');
        console.log(this.hubConnection);
        this.add.text(100, 150, "Please Wait");
        setTimeout(function () {
            var _a;
            _this.hubConnection.invoke('Register', (_a = querystring.parse(window.location.search)["room"]) !== null && _a !== void 0 ? _a : "sample").then(function (e) {
                console.log(e);
                new menu_button_1.MenuButton(_this, 100, 150, 'Ready Up', function () {
                    _this.hubConnection.invoke('ReadyUp');
                    _this.scene.start('EveryoneIn', { hubConnection: _this.hubConnection });
                });
            });
        }, (5000));
        this.hubConnection.on('Assign', function (cup, actions, playercount, round) {
            console.log("cup: " + cup + " actions: " + actions + " playercount: " + playercount + " round number: " + round);
            var item = {
                playercount: playercount,
                roundNumber: round,
                cupNumber: cup,
                actions: actions
            };
            _this.hubConnection.off('Assign');
            _this.scene.start('Game', { hubConnection: _this.hubConnection, setup: item });
        });
        var roomcode = querystring.parse(window.location.search);
        var room = roomcode["room"];
        this.add
            .text(100, 50, "Team " + room, {
            color: '#FFFFFF',
        })
            .setFontSize(24);
        /*
            new MenuButton(this, 100, 250, 'IOS CLICK HERE FIRST', () => {
              console.log('settings button clicked');
              DeviceMotionEvent.requestPermission().then((response) => {
                if (response == 'granted') {
                  // Add a listener to get smartphone orientation
                  // in the alpha-beta-gamma axes (units in degrees)
                  window.addEventListener('deviceorientation', (event) => {
                    let updateRate = 1 / 60;
                    // Expose each orientation angle in a more readable way
                    let rotation_degrees = event.alpha;
                    let frontToBack_degrees = event.beta;
                    let leftToRight_degrees = event.gamma;
        
                    new MenuButton(this, 100, 250, 'clicked', () => console.log('help button clicked'));
                  });
                }
              });
            });*/
        //new MenuButton(this, 100, 350, 'Help', () => console.log('help button clicked'));
    };
    return MainMenuScene;
}(Phaser.Scene));
exports.MainMenuScene = MainMenuScene;


/***/ }),

/***/ "./src/scenes/muddle-scene.ts":
/*!************************************!*\
  !*** ./src/scenes/muddle-scene.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.MuddleScene = void 0;
var sceneConfig = {
    active: false,
    visible: false,
    key: 'Muddle Drink',
};
var GameSceneArguments = /** @class */ (function () {
    function GameSceneArguments() {
    }
    return GameSceneArguments;
}());
var MuddleScene = /** @class */ (function (_super) {
    __extends(MuddleScene, _super);
    function MuddleScene() {
        var _this = _super.call(this, sceneConfig) || this;
        _this.speed = 200;
        _this.contents = [];
        _this.glassFillers = [];
        _this.isPouring = 0;
        _this.eraseCount = 0;
        _this.iceLevel = 0;
        _this.transitioning = false;
        _this.startPosition = true;
        return _this;
    }
    MuddleScene.prototype.init = function (data) {
        this.onFinish = data.onFinish;
    };
    MuddleScene.prototype.create = function () {
        var _this = this;
        console.log('Muddle');
        var _a = this.sys.game.canvas, width = _a.width, height = _a.height;
        this.emptyGlass = this.add.sprite(width / 2, height / 2, 'emptyglass');
        this.transitioning = false;
        this.eraseCount = 0;
        this.iceLevel = 0;
        this.startPosition = true;
        // Add a player sprite that can be moved around. Place him in the middle of the screen.
        this.muddler = this.add
            .sprite(width / 2, height / 2 - this.emptyGlass.displayHeight / 3, 'muddler')
            .setInteractive()
            .setDepth(1)
            .setScale(0.5)
            .setAngle(180);
        this.muddleContainerRect = this.add
            .rectangle(this.emptyGlass.x, this.emptyGlass.y, this.emptyGlass.displayWidth, this.emptyGlass.displayHeight, 0x00ff00)
            .setScale(0.7)
            .setDepth(2)
            .setAlpha(0.5);
        this.movingThresholdRect = this.add
            .rectangle(this.emptyGlass.x, this.emptyGlass.y + height / 15, this.emptyGlass.displayWidth, height / 40, 0x0000ff)
            .setDepth(2)
            .setAlpha(0.5);
        this.fillRect = this.add
            .rectangle(this.emptyGlass.x, this.emptyGlass.getBottomLeft().y, this.emptyGlass.displayWidth, 1, 0xff0000)
            .setDepth(2)
            .setAlpha(0.5)
            .setBlendMode(Phaser.BlendModes.MULTIPLY);
        var cover = this.make.image({
            key: 'orange',
            add: false,
        });
        cover.setScale(0.7);
        console.log("cover: " + cover.x + " " + cover.y);
        //cover.setPosition(this.orange.x, this.orange.y);
        cover.setDepth(1);
        //cover.setOrigin(0, 0);
        //this.rt.setOrigin(0.5, 0.5);
        this.input.on('dragstart', function (pointer, gameObject) {
            gameObject.setTint(0x999999);
        });
        this.input.on('dragend', function (pointer, gameObject) {
            gameObject.clearTint();
        });
        this.input.setDraggable(this.muddler);
        this.input.on('pointerup', function () {
            _this.text1.setText("\u03B8: " + _this.input.activePointer.getAngle());
            _this.text2.setText("x: " + _this.input.activePointer.getDistanceX());
            _this.text3.setText("y: " + _this.input.activePointer.getDistanceY());
            _this.text4.setText("d: " + _this.input.activePointer.getDistance());
        });
        this.input.on('pointerdown', function () { });
        this.input.on('drag', function (pointer, gameObject, dragX, dragY) {
            var stx = gameObject.x;
            var sty = gameObject.y;
            gameObject.y = dragY;
            gameObject.x = dragX;
            // keeping the muddler in the glass
            var blC = _this.muddleContainerRect.getBottomLeft();
            var brC = _this.muddleContainerRect.getBottomRight();
            var trC = _this.muddleContainerRect.getTopRight();
            var blM = _this.muddler.getTopRight();
            var brM = _this.muddler.getTopLeft();
            console.log(blM.x);
            console.log(blC.x);
            if (blM.x < blC.x) {
                gameObject.y = sty;
                gameObject.x = stx;
            }
            if (brM.x > brC.x) {
                gameObject.y = sty;
                gameObject.x = stx;
            }
            if (brM.y > brC.y) {
                gameObject.y = sty;
                gameObject.x = stx;
            }
            if (blM.y < trC.y) {
                gameObject.y = sty;
                gameObject.x = stx;
            }
            // checking if it properly moves up and down
            if (blM.y > _this.movingThresholdRect.getBottomLeft().y && !_this.startPosition) {
                _this.startPosition = true;
                _this.iceLevel += 1;
                _this.text1.setText("" + _this.iceLevel);
                _this.fillRect.displayHeight += 15;
            }
            if (blM.y < _this.movingThresholdRect.getTopLeft().y && _this.startPosition) {
                _this.startPosition = false;
                _this.text1.setText("" + _this.iceLevel);
            }
            // transition
            if (_this.iceLevel > 4 && _this.transitioning == false) {
                _this.transitioning = true;
                setTimeout(function () {
                    _this.scene.stop();
                    _this.onFinish();
                }, 500);
            }
        });
        this.text1 = this.add.text(10, 10, '', { color: '#00ff00' });
        this.text2 = this.add.text(10, 25, '', { color: '#00ff00' });
        this.text3 = this.add.text(10, 40, '', { color: '#00ff00' });
        this.text4 = this.add.text(10, 55, '', { color: '#00ff00' });
        this.text5 = this.add.text(10, 70, '', { color: '#00ff00' });
        this.text1.setText("" + this.iceLevel);
    };
    MuddleScene.prototype.update = function () { };
    return MuddleScene;
}(Phaser.Scene));
exports.MuddleScene = MuddleScene;


/***/ }),

/***/ "./src/scenes/orange-scene.ts":
/*!************************************!*\
  !*** ./src/scenes/orange-scene.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrangeScene = void 0;
var sceneConfig = {
    active: false,
    visible: false,
    key: 'Orange Peel',
};
var GameSceneArguments = /** @class */ (function () {
    function GameSceneArguments() {
    }
    return GameSceneArguments;
}());
var OrangeScene = /** @class */ (function (_super) {
    __extends(OrangeScene, _super);
    function OrangeScene() {
        var _this = _super.call(this, sceneConfig) || this;
        _this.speed = 200;
        _this.contents = [];
        _this.glassFillers = [];
        _this.isPouring = 0;
        _this.eraseCount = 0;
        _this.iceLevel = 0;
        _this.transitioning = false;
        return _this;
    }
    OrangeScene.prototype.init = function (data) {
        this.onFinish = data.onFinish;
    };
    OrangeScene.prototype.create = function () {
        var _this = this;
        console.log('Orange');
        var _a = this.sys.game.canvas, width = _a.width, height = _a.height;
        this.transitioning = false;
        this.eraseCount = 0;
        this.iceLevel = 0;
        // Add a player sprite that can be moved around. Place him in the middle of the screen.
        this.orangePeeled = this.add.sprite(width / 2, height / 4, 'orange');
        this.orangePeeled.setScale(0.7);
        this.orange = this.add.sprite(width / 2, height / 4, 'orangeinside');
        this.orange.setScale(0.7);
        this.canelle = this.add
            .sprite((3 * width) / 4, (3 * height) / 4, 'canelleknife')
            .setInteractive()
            .setDepth(1);
        this.bladeRect = this.add
            .rectangle(this.canelle.x + this.canelle.displayWidth / 8, this.canelle.y - this.canelle.displayHeight / 2 + this.canelle.displayHeight * (1 / 40), this.canelle.displayWidth * (3 / 4), this.canelle.displayHeight * (1 / 20), 0x00ff00)
            .setDepth(2)
            .setAlpha(0.5);
        var cover = this.make.image({
            key: 'orange',
            add: false,
        });
        cover.setScale(0.7);
        console.log("cover: " + cover.x + " " + cover.y);
        //cover.setPosition(this.orange.x, this.orange.y);
        cover.setDepth(1);
        //cover.setOrigin(0, 0);
        this.rt = this.add.renderTexture(this.orange.getTopLeft().x, this.orange.getTopLeft().y, this.orangePeeled.displayWidth, this.orangePeeled.displayHeight);
        //this.rt.setOrigin(0.5, 0.5);
        console.log("rt: " + this.rt.x + " " + this.rt.y);
        this.rt.setPosition(this.orangePeeled.getTopLeft().x, this.orangePeeled.getTopLeft().y);
        //this.rt.setTint(0x00FF00);
        this.rt.draw(cover, this.orangePeeled.displayWidth / 2, this.orangePeeled.displayHeight / 2); //, width * 0.5, height * 0.5)
        console.log("rt: " + this.rt.x + " " + this.rt.y);
        console.log("orange: " + this.orange.x + " " + this.orange.y);
        console.log("orangePeeled: " + this.orangePeeled.x + " " + this.orangePeeled.y);
        this.input.on('dragstart', function (pointer, gameObject) {
            gameObject.setTint(0x999999);
        });
        this.input.on('dragend', function (pointer, gameObject) {
            gameObject.clearTint();
        });
        this.input.setDraggable(this.canelle);
        this.input.on('pointerup', function () {
            _this.text1.setText("\u03B8: " + _this.input.activePointer.getAngle());
            _this.text2.setText("x: " + _this.input.activePointer.getDistanceX());
            _this.text3.setText("y: " + _this.input.activePointer.getDistanceY());
            _this.text4.setText("d: " + _this.input.activePointer.getDistance());
        });
        this.input.on('pointerdown', function () { });
        this.input.on('drag', function (pointer, gameObject, dragX, dragY) {
            // from here: need to 1. calculate angle between base of object and cursor
            // 2. rotate until top of bottle is pointing to cursor
            gameObject.y = dragY;
            gameObject.x = dragX;
            _this.bladeRect.setPosition(dragX + _this.canelle.displayWidth / 8, dragY - _this.canelle.displayHeight / 2 + _this.canelle.displayHeight * (1 / 40));
            _this.text2.setText("dragY: " + dragY);
            _this.text3.setText("y: " + _this.input.activePointer.prevPosition.y);
            if (_this.input.activePointer.prevPosition.y < _this.input.activePointer.y &&
                _this.orange.getBounds().contains(_this.bladeRect.x, _this.bladeRect.y)) {
                var x = _this.bladeRect.x - _this.rt.x;
                var y = _this.bladeRect.y - _this.rt.y;
                _this.rt.erase(_this.bladeRect, x, y);
                _this.eraseCount++;
                if (_this.eraseCount >= 100 && !_this.transitioning) {
                    _this.transitioning = true;
                    document.cookie = "orange=1";
                    setTimeout(function () {
                        _this.scene.stop();
                        _this.onFinish();
                    }, 500);
                }
            }
        });
        this.text1 = this.add.text(10, 10, '', { color: '#00ff00' });
        this.text2 = this.add.text(10, 25, '', { color: '#00ff00' });
        this.text3 = this.add.text(10, 40, '', { color: '#00ff00' });
        this.text4 = this.add.text(10, 55, '', { color: '#00ff00' });
        this.text5 = this.add.text(10, 70, '', { color: '#00ff00' });
    };
    OrangeScene.prototype.update = function () { };
    return OrangeScene;
}(Phaser.Scene));
exports.OrangeScene = OrangeScene;


/***/ }),

/***/ "./src/scenes/permissions-scene.ts":
/*!*****************************************!*\
  !*** ./src/scenes/permissions-scene.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.PermissionsScene = void 0;
var menu_button_1 = __webpack_require__(/*! ../ui/menu-button */ "./src/ui/menu-button.ts");
var sceneConfig = {
    active: false,
    visible: false,
    key: 'Permissions',
};
var GameSceneArguments = /** @class */ (function () {
    function GameSceneArguments() {
    }
    return GameSceneArguments;
}());
/**
 * The initial scene that starts, shows the splash screens, and loads the necessary assets.
 */
var PermissionsScene = /** @class */ (function (_super) {
    __extends(PermissionsScene, _super);
    function PermissionsScene() {
        return _super.call(this, sceneConfig) || this;
    }
    PermissionsScene.prototype.init = function (data) {
        this.hubConnection = data.hubConnection;
    };
    PermissionsScene.prototype.create = function () {
        var _this = this;
        console.log('Permissions');
        console.log(this.hubConnection);
        new menu_button_1.MenuButton(this, 100, 150, 'Enter', function () {
            try {
                DeviceMotionEvent.requestPermission().then(function (response) {
                    if (response == 'granted') {
                        // Add a listener to get smartphone orientation
                        // in the alpha-beta-gamma axes (units in degrees)
                        window.addEventListener('deviceorientation', function (event) {
                            var updateRate = 1 / 60;
                            // Expose each orientation angle in a more readable way
                            var rotation_degrees = event.alpha;
                            var frontToBack_degrees = event.beta;
                            var leftToRight_degrees = event.gamma;
                            new menu_button_1.MenuButton(_this, 100, 250, 'clicked', function () { return console.log('help button clicked'); });
                        });
                    }
                });
            }
            catch (e) {
                console.log("error " + e);
            }
            _this.scene.start('MainMenu', { hubConnection: _this.hubConnection });
        });
    };
    return PermissionsScene;
}(Phaser.Scene));
exports.PermissionsScene = PermissionsScene;


/***/ }),

/***/ "./src/scenes/pour-scene.ts":
/*!**********************************!*\
  !*** ./src/scenes/pour-scene.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.PourScene = void 0;
var helpers_1 = __webpack_require__(/*! ../helpers */ "./src/helpers.ts");
var sceneConfig = {
    active: false,
    visible: false,
    key: 'Pour',
};
var GameSceneArguments = /** @class */ (function () {
    function GameSceneArguments() {
    }
    return GameSceneArguments;
}());
var PourScene = /** @class */ (function (_super) {
    __extends(PourScene, _super);
    function PourScene() {
        var _this = _super.call(this, sceneConfig) || this;
        _this.speed = 200;
        _this.contents = [];
        _this.glassFillers = [];
        _this.isPouring = 0;
        _this.pourCount = 0;
        _this.transitioning = false;
        return _this;
    }
    PourScene.prototype.init = function (data) {
        this.bottleName = data.BottleSpriteName;
        this.onFinish = data.onFinish;
        console.log(this.bottleName);
    };
    PourScene.prototype.create = function () {
        var _this = this;
        console.log('Pour');
        var _a = this.sys.game.canvas, width = _a.width, height = _a.height;
        this.isPouring = 0;
        this.pourCount = 0;
        this.transitioning = false;
        // Add a player sprite that can be moved around. Place him in the middle of the screen.
        this.emptyGlass = this.add.sprite(width / 4, height / 2, 'emptyglass');
        //this.filledglass1 = this.add.sprite(width / 4, height / 2, 'filledglass1');
        //this.filledglass2 = this.add.sprite(width / 4, height / 2, 'filledglass2');
        /*
            this.bourbon = this.add.sprite(width / 8, height / 4, 'canelleknife').setInteractive();
            this.bourbon.on('pointerdown', () => {
              this.text1.setText('Asked');
              DeviceMotionEvent.requestPermission().then((response) => {
                this.text1.setText(response);
                if (response == 'granted') {
                  // Add a listener to get smartphone orientation
                  // in the alpha-beta-gamma axes (units in degrees)
                  window.addEventListener('deviceorientation', (event) => {
                    const updateRate = 1 / 60;
                    // Expose each orientation angle in a more readable way
                    const rotation_degrees = event.alpha;
                    const frontToBack_degrees = event.beta;
                    const leftToRight_degrees = event.gamma;
        
                    this.bottle.angle = frontToBack_degrees - 90;
                  });
                }
              });
            });*/
        console.log("glass x: " + width / 4);
        console.log("glass y: " + height / 2);
        this.emptyGlass.setScale(0.5);
        this.emptyGlass.scaleY = this.emptyGlass.scaleY * 0.5;
        //this.emptyGlass.blendMode = Phaser.BlendModes.MULTIPLY;
        this.bottle = this.add.sprite(width / 1.5, height / 2, this.bottleName).setInteractive();
        this.bottle.setScale(0.75);
        console.log(this.emptyGlass.x);
        console.log(this.bottle.displayHeight);
        this.bottle.setPosition(this.emptyGlass.x + this.bottle.displayHeight / 4);
        this.bottle.setScale(0.5);
        this.bottle.on('pointerover', function () {
            _this.bottle.setTint(0xcccccc);
        });
        this.bottle.on('pointerout', function () {
            _this.bottle.clearTint();
        });
        this.input.setDraggable(this.bottle);
        this.input.on('dragstart', function (pointer, gameObject) {
            gameObject.setTint(0x999999);
        });
        this.liquidRectangle = this.add
            .rectangle(this.emptyGlass.x, this.emptyGlass.y + this.emptyGlass.displayHeight / 2, this.emptyGlass.displayWidth, ++this.pourCount, helpers_1.drinkToColorMap.get(this.bottleName))
            .setBlendMode(Phaser.BlendModes.MULTIPLY);
        this.input.on('drag', function (pointer, gameObject, dragX, dragY) {
            // from here: need to 1. calculate angle between base of object and cursor
            // 2. rotate until top of bottle is pointing to cursor
            var y1 = gameObject.y;
            var y2 = _this.input.activePointer.y;
            var x1 = gameObject.x;
            var x2 = _this.input.activePointer.x;
            var slopeRads = Math.atan2(y2 - y1, x2 - x1);
            var adjusted = slopeRads + 1.57079633;
            _this.text1.setText("" + _this.pourCount);
            if (adjusted >= Math.PI || adjusted <= 0.025) {
                gameObject.rotation = slopeRads + 1.57079633;
            }
            /*if (adjusted > 4) {
              if (this.isPouring == 0) {
                this.isPouring = 1;
              }
            } else {
              this.isPouring = 0;
            }*/
        });
        this.input.on('dragend', function (pointer, gameObject) {
            gameObject.clearTint();
        });
        // This is a nice helper Phaser provides to create listeners for some of the most common keys.
        this.cursorKeys = this.input.keyboard.createCursorKeys();
        this.text1 = this.add.text(10, 10, '', { color: '#00ff00' });
        this.text2 = this.add.text(100, 10, '', { color: '#00ff00' });
        this.bottle.setDepth(1);
        this.callback();
    };
    PourScene.prototype.update = function () {
        var _this = this;
        // Every frame, we create a new velocity for the sprite based on what keys the player is holding down.
        this.text1.setText("" + this.bottle.rotation);
        if (this.bottle.rotation < -1.7 && this.bottle.rotation > -2.3) {
            if (this.isPouring == 0) {
                this.isPouring = 1;
            }
        }
        else {
            this.isPouring = 0;
        }
        if (this.isPouring == 1 && this.liquidRectangle.displayHeight < this.emptyGlass.displayHeight * 1.9) {
            this.liquidRectangle.displayHeight = this.liquidRectangle.displayHeight + 1.5;
        }
        else if (this.liquidRectangle.displayHeight > this.emptyGlass.displayHeight * 1.9 && !this.transitioning) {
            this.transitioning = true;
            document.cookie = this.bottleName + "=1";
            setTimeout(function () {
                _this.scene.stop();
                _this.onFinish();
            }, 500);
        }
    };
    PourScene.prototype.callback = function () {
        this.callApple();
        //
    };
    PourScene.prototype.callApple = function () {
        var _this = this;
        try {
            DeviceMotionEvent.requestPermission().then(function (response) {
                _this.text1.setText(response);
                window.addEventListener('deviceorientation', function (event) {
                    console.log(event);
                    var updateRate = 1 / 60;
                    // Expose each orientation angle in a more readable way
                    var rotation_degrees = event.alpha;
                    var frontToBack_degrees = event.beta;
                    var leftToRight_degrees = event.gamma;
                    _this.bottle.angle = frontToBack_degrees - 90;
                });
            });
        }
        catch (ex) {
            console.log('not ios');
            window.addEventListener('deviceorientation', function (event) {
                console.log(event);
                var updateRate = 1 / 60;
                // Expose each orientation angle in a more readable way
                var rotation_degrees = event.alpha;
                var frontToBack_degrees = event.beta;
                var leftToRight_degrees = event.gamma;
                _this.bottle.angle = frontToBack_degrees - 90;
            });
        }
    };
    return PourScene;
}(Phaser.Scene));
exports.PourScene = PourScene;


/***/ }),

/***/ "./src/scenes/results-scene.ts":
/*!*************************************!*\
  !*** ./src/scenes/results-scene.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResultsScene = void 0;
var menu_button_1 = __webpack_require__(/*! ../ui/menu-button */ "./src/ui/menu-button.ts");
var sceneConfig = {
    active: false,
    visible: false,
    key: 'Results',
};
var GameSceneArguments = /** @class */ (function () {
    function GameSceneArguments() {
    }
    return GameSceneArguments;
}());
var ResultsScene = /** @class */ (function (_super) {
    __extends(ResultsScene, _super);
    function ResultsScene() {
        var _this = _super.call(this, sceneConfig) || this;
        _this.speed = 200;
        _this.transitioning = false;
        _this.clicks = 0;
        _this.iceLevel = 0;
        return _this;
    }
    ResultsScene.prototype.init = function (data) {
        this.onFinish = data.onFinish;
        this.results = data.results;
    };
    ResultsScene.prototype.create = function () {
        var _this = this;
        console.log('Results');
        var _a = this.sys.game.canvas, width = _a.width, height = _a.height;
        this.transitioning = false;
        // Add a player sprite that can be moved around. Place him in the middle of the screen.
        //this.vermouthTopOnly = this.add.sprite(width / 2, height / 2 + 300, 'vermouthtoponly');
        this.add.text(width / 8, (height / 4) - 30, "Results:", { color: '#ffffff' });
        this.results.forEach(function (element, idx) {
            _this.add.text(width / 8, (height / 4) + (idx * height / 8), _this.getResultString(element), { color: '#ffffff' });
        });
        new menu_button_1.MenuButton(this, width / 2, (height / 4) * 3, "Reset", function () { _this.scene.stop(); _this.onFinish(); });
    };
    //public update(): void {}
    ResultsScene.prototype.getResultString = function (item) {
        if (item == 0) {
            return "Just like I ordered! Thanks!";
        }
        else if (item == 1) {
            return "Excuse me, I think I \ngot someone else's drink";
        }
        else if (item == 2) {
            return "Looks good but I don't\nthink I heard anyone order this";
        }
        else if (item == 3) {
            return "*spits out drink* Do you\n even know how to make drinks?";
        }
    };
    return ResultsScene;
}(Phaser.Scene));
exports.ResultsScene = ResultsScene;


/***/ }),

/***/ "./src/scenes/shake-scene.ts":
/*!***********************************!*\
  !*** ./src/scenes/shake-scene.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShakeScene = void 0;
var sceneConfig = {
    active: false,
    visible: false,
    key: 'Shake Drink',
};
var GameSceneArguments = /** @class */ (function () {
    function GameSceneArguments() {
    }
    return GameSceneArguments;
}());
var ShakeScene = /** @class */ (function (_super) {
    __extends(ShakeScene, _super);
    function ShakeScene() {
        var _this = _super.call(this, sceneConfig) || this;
        _this.speed = 200;
        _this.contents = [];
        _this.glassFillers = [];
        _this.isPouring = 0;
        _this.shakeCount = 0;
        _this.transitioning = false;
        _this.n = 0;
        _this.nthreshold = 0;
        _this.maxx = 0;
        _this.maxy = 0;
        _this.maxz = 0;
        _this.minx = 0;
        _this.miny = 0;
        _this.minz = 0;
        _this.threshold = 15;
        return _this;
    }
    ShakeScene.prototype.init = function (data) {
        this.bottleName = 'shaker';
        this.onFinish = data.onFinish;
    };
    ShakeScene.prototype.create = function () {
        var _this = this;
        console.log('Shake');
        var _a = this.sys.game.canvas, width = _a.width, height = _a.height;
        this.isPouring = 0;
        this.shakeCount = 0;
        this.transitioning = false;
        this.n = 0;
        this.nthreshold = 13;
        this.callback();
        // Add a player sprite that can be moved around. Place him in the middle of the screen.
        //this.emptyGlass = this.add.sprite(width / 4, height / 2, 'emptyglass');
        //this.filledglass1 = this.add.sprite(width / 4, height / 2, 'filledglass1');
        //this.filledglass2 = this.add.sprite(width / 4, height / 2, 'filledglass2');
        //this.bourbon = this.add.sprite(width / 8, height / 4, 'canelleknife').setInteractive();
        //this.bourbon.on('pointerdown', this.callback );
        console.log("glass x: " + width / 4);
        console.log("glass y: " + height / 2);
        this.bottle = this.add.sprite(width / 2, height / 2, this.bottleName).setInteractive();
        this.bottle.setScale(0.6);
        //console.log(this.emptyGlass.x);
        console.log(this.bottle.displayHeight);
        //this.bottle.setPosition(this.emptyGlass.x + this.bottle.displayHeight / 4);
        //this.bottle.setScale(0.5);
        this.bottle.on('pointerover', function () {
            _this.bottle.setTint(0xcccccc);
        });
        this.bottle.on('pointerout', function () {
            _this.bottle.clearTint();
        });
        this.bottle.on('pointerdown', function () {
            _this.shakeCount++;
            if (_this.shakeCount > 7) {
                _this.shakeCount = 7;
            }
            //this.bottle.setTexture(`shaker${this.shakeCount}`);
        });
        this.input.setDraggable(this.bottle);
        this.input.on('dragstart', function (pointer, gameObject) {
            gameObject.setTint(0x999999);
        });
        // This is a nice helper Phaser provides to create listeners for some of the most common keys.
        this.cursorKeys = this.input.keyboard.createCursorKeys();
        this.text1 = this.add.text(50, 10, '', { color: '#00ff00' });
        this.text2 = this.add.text(50, 30, '', { color: '#00ff00' });
        this.text3 = this.add.text(50, 60, '', { color: '#00ff00' });
        this.text4 = this.add.text(50, 90, '', { color: '#00ff00' });
        this.text5 = this.add.text(50, 120, '', { color: '#00ff00' });
        this.bottle.setDepth(1);
    };
    ShakeScene.prototype.update = function () {
        var _this = this;
        // Every frame, we create a new velocity for the sprite based on what keys the player is holding down.
        if (this.n > this.nthreshold && this.shakeCount <= 7) {
            this.n = 0;
            this.shakeCount++;
            this.text4.setText("n " + this.n + " " + this.nthreshold);
        }
        if (this.shakeCount % 2 == 0) {
            this.bottle.setTexture("shaker" + this.shakeCount / 2);
        }
        if (this.shakeCount > 5 && !this.transitioning) {
            this.transitioning = true;
            document.cookie = "shake=1";
            setTimeout(function () {
                _this.scene.stop();
                _this.onFinish();
            }, 750);
        }
    };
    ShakeScene.prototype.getUserAgent = function () {
        // (A) BREAK USER AGENT DOWN
        console.log(navigator.userAgent.toLowerCase());
        var isMobile = navigator.userAgent.toLowerCase().match(/mobile/i), isTablet = navigator.userAgent.toLowerCase().match(/tablet/i), isAndroid = navigator.userAgent.toLowerCase().match(/android/i), isiPhone = navigator.userAgent.toLowerCase().match(/iphone/i), isiPad = navigator.userAgent.toLowerCase().match(/ipad/i);
        // (B) DETECTED DEVICE TYPE
        if (isAndroid) {
            return 'Android';
        }
        else if (isiPhone || isiPad) {
            return 'Apple';
        }
        else {
            return 'Nope';
        }
    };
    ShakeScene.prototype.callApple = function () {
        var _this = this;
        try {
            DeviceMotionEvent.requestPermission().then(function (response) {
                _this.text1.setText(response);
                window.addEventListener('devicemotion', function (event) {
                    console.log(event);
                    if (event.acceleration.x < _this.threshold * -1 || event.acceleration.x > _this.threshold) {
                        _this.n++;
                    }
                    else if (event.acceleration.y < _this.threshold * -1 || event.acceleration.y > _this.threshold) {
                        _this.n++;
                    }
                    else if (event.acceleration.z < _this.threshold * -1 || event.acceleration.z > _this.threshold) {
                        _this.n++;
                    }
                    // text
                    if (event.acceleration.x < _this.minx) {
                        _this.minx = event.acceleration.x;
                    }
                    if (event.acceleration.y < _this.miny) {
                        _this.miny = event.acceleration.y;
                    }
                    if (event.acceleration.z < _this.minz) {
                        _this.minz = event.acceleration.z;
                    }
                    if (event.acceleration.x > _this.maxx) {
                        _this.maxx = event.acceleration.x;
                    }
                    if (event.acceleration.y > _this.maxy) {
                        _this.maxy = event.acceleration.y;
                    }
                    if (event.acceleration.z > _this.maxz) {
                        _this.maxz = event.acceleration.z;
                    }
                    _this.text1.setText("x " + _this.minx + " " + _this.maxx);
                    _this.text2.setText("y " + _this.miny + " " + _this.maxy);
                    _this.text3.setText("z " + _this.minz + " " + _this.maxz);
                    _this.text4.setText("n " + _this.n + " " + _this.nthreshold);
                    _this.text5.setText("shakes " + _this.shakeCount);
                });
            });
        }
        catch (ex) {
            console.log('not ios');
            window.addEventListener('devicemotion', function (event) {
                console.log(event);
                if (event.acceleration.x < _this.threshold * -1 || event.acceleration.x > _this.threshold) {
                    _this.n++;
                }
                else if (event.acceleration.y < _this.threshold * -1 || event.acceleration.y > _this.threshold) {
                    _this.n++;
                }
                else if (event.acceleration.z < _this.threshold * -1 || event.acceleration.z > _this.threshold) {
                    _this.n++;
                }
                // text
                if (event.acceleration.x < _this.minx) {
                    _this.minx = event.acceleration.x;
                }
                if (event.acceleration.y < _this.miny) {
                    _this.miny = event.acceleration.y;
                }
                if (event.acceleration.z < _this.minz) {
                    _this.minz = event.acceleration.z;
                }
                if (event.acceleration.x > _this.maxx) {
                    _this.maxx = event.acceleration.x;
                }
                if (event.acceleration.y > _this.maxy) {
                    _this.maxy = event.acceleration.y;
                }
                if (event.acceleration.z > _this.maxz) {
                    _this.maxz = event.acceleration.z;
                }
                _this.text1.setText("x " + _this.minx + " " + _this.maxx);
                _this.text2.setText("y " + _this.miny + " " + _this.maxy);
                _this.text3.setText("z " + _this.minz + " " + _this.maxz);
                _this.text4.setText("n " + _this.n + " " + _this.nthreshold);
                _this.text5.setText("shakes " + _this.shakeCount);
            });
        }
    };
    ShakeScene.prototype.callback = function () {
        //this.text1.setText('Asked');
        this.maxx = 0;
        this.maxy = 0;
        this.maxz = 0;
        this.minx = 0;
        this.miny = 0;
        this.minz = 0;
        //if (window.DeviceOrientationEvent) {
        //window.addEventListener('deviceorientation', deviceOrientationHandler, false);
        //}
        /*if (window.DeviceMotionEvent) {
           this.text2.setText('yes');
           console.log('yes');
           window.addEventListener('devicemotion', (event) => {
             console.log(event);
             if (event.acceleration.x < this.threshold * -1 || event.acceleration.x > this.threshold) {
               this.n++;
             } else if (event.acceleration.y < this.threshold * -1 || event.acceleration.y > this.threshold) {
               this.n++;
             } else if (event.acceleration.z < this.threshold * -1 || event.acceleration.z > this.threshold) {
               this.n++;
             }
     
             // text
             if (event.acceleration.x < this.minx) {
               this.minx = event.acceleration.x;
             }
             if (event.acceleration.y < this.miny) {
               this.miny = event.acceleration.y;
             }
             if (event.acceleration.z < this.minz) {
               this.minz = event.acceleration.z;
             }
             if (event.acceleration.x > this.maxx) {
               this.maxx = event.acceleration.x;
             }
             if (event.acceleration.y > this.maxy) {
               this.maxy = event.acceleration.y;
             }
             if (event.acceleration.z > this.maxz) {
               this.maxz = event.acceleration.z;
             }
             this.text1.setText(`x ${this.minx} ${this.maxx}`);
             //this.text2.setText(`y ${this.miny} ${this.maxy}`);
             this.text3.setText(`z ${this.minz} ${this.maxz}`);
             this.text4.setText(`n ${this.n} ${this.nthreshold}`);
             this.text5.setText(`shakes ${this.shakeCount}`);
           });
         } else {
           this.text2.setText('no');
           console.log('no');
         }*/
        this.callApple();
        //
    };
    return ShakeScene;
}(Phaser.Scene));
exports.ShakeScene = ShakeScene;


/***/ }),

/***/ "./src/scenes/success-scene.ts":
/*!*************************************!*\
  !*** ./src/scenes/success-scene.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.SuccessScene = void 0;
var sceneConfig = {
    active: false,
    visible: false,
    key: 'Success',
};
var GameSceneArguments = /** @class */ (function () {
    function GameSceneArguments() {
    }
    return GameSceneArguments;
}());
var SuccessScene = /** @class */ (function (_super) {
    __extends(SuccessScene, _super);
    function SuccessScene() {
        var _this = _super.call(this, sceneConfig) || this;
        _this.speed = 200;
        _this.transitioning = false;
        _this.clicks = 0;
        _this.iceLevel = 0;
        return _this;
    }
    SuccessScene.prototype.init = function (data) {
        this.onFinish = data.onFinish;
    };
    SuccessScene.prototype.create = function () {
        console.log('Success');
        var _a = this.sys.game.canvas, width = _a.width, height = _a.height;
        this.transitioning = false;
        // Add a player sprite that can be moved around. Place him in the middle of the screen.
        //this.vermouthTopOnly = this.add.sprite(width / 2, height / 2 + 300, 'vermouthtoponly');
        this.add.text(width / 8, (height / 4) - 30, "You did it! Here's your copy of \nthe receipt:\n    Drink - $13.09\n    Drink - $24.15\n    Drink - $12.15\n    Drink - $7.25\n    ", { color: '#ffffff' });
    };
    return SuccessScene;
}(Phaser.Scene));
exports.SuccessScene = SuccessScene;


/***/ }),

/***/ "./src/scenes/vermouth-scene.ts":
/*!**************************************!*\
  !*** ./src/scenes/vermouth-scene.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.VermouthScene = void 0;
var sceneConfig = {
    active: false,
    visible: false,
    key: 'Vermouth',
};
var GameSceneArguments = /** @class */ (function () {
    function GameSceneArguments() {
    }
    return GameSceneArguments;
}());
var VermouthScene = /** @class */ (function (_super) {
    __extends(VermouthScene, _super);
    function VermouthScene() {
        var _this = _super.call(this, sceneConfig) || this;
        _this.unscrewed = 0;
        _this.transitioning = false;
        return _this;
    }
    VermouthScene.prototype.init = function (data) {
        this.onFinish = data.onFinish;
    };
    VermouthScene.prototype.create = function () {
        var _this = this;
        console.log('Vermouth');
        var _a = this.sys.game.canvas, width = _a.width, height = _a.height;
        this.unscrewed = 0;
        this.transitioning = false;
        // Add a player sprite that can be moved around. Place him in the middle of the screen.
        this.vermouthTop = this.add.sprite(width / 2, height / 2 + 300, 'vermouthtop');
        this.vermouthTopOnly = this.add.sprite(width / 2, height / 2 + 300, 'vermouthtoponly');
        this.input.on('pointerup', function () {
            _this.text1.setText("\u03B8: " + _this.input.activePointer.getAngle());
            _this.text2.setText("x: " + _this.input.activePointer.getDistanceX());
            _this.text3.setText("y: " + _this.input.activePointer.getDistanceY());
            _this.text4.setText("d: " + _this.input.activePointer.getDistance());
            // check if thing should unscrew
            if (_this.input.activePointer.getDistance() >= 150 &&
                _this.input.activePointer.getAngle() <= 0.32 &&
                _this.input.activePointer.getAngle() >= -0.52 &&
                _this.unscrewed < 3) {
                _this.text5.setText("unscrew: " + ++_this.unscrewed);
                _this.vermouthTopOnly.setY(_this.vermouthTopOnly.y - 30);
                _this.vermouthTopOnly.flipX = !_this.vermouthTopOnly.flipX;
                if (_this.unscrewed == 3 && !_this.transitioning) {
                    _this.transitioning = true;
                    setTimeout(function () {
                        _this.scene.stop();
                        _this.scene.launch('Pour', { BottleSpriteName: 'Vermouth', onFinish: _this.onFinish });
                    }, 500);
                }
            }
            else if (_this.input.activePointer.getDistance() >= 150 &&
                (_this.input.activePointer.getAngle() <= -2.5 || _this.input.activePointer.getAngle() >= 2.5) &&
                _this.unscrewed > 0) {
                _this.text5.setText("unscrew: " + --_this.unscrewed);
                _this.vermouthTopOnly.setY(_this.vermouthTopOnly.y + 30);
                _this.vermouthTopOnly.flipX = !_this.vermouthTopOnly.flipX;
            }
        });
        this.text1 = this.add.text(10, 10, '', { color: '#00ff00' });
        this.text2 = this.add.text(10, 25, '', { color: '#00ff00' });
        this.text3 = this.add.text(10, 40, '', { color: '#00ff00' });
        this.text4 = this.add.text(10, 55, '', { color: '#00ff00' });
        this.text5 = this.add.text(10, 70, '', { color: '#00ff00' });
    };
    VermouthScene.prototype.update = function () { };
    return VermouthScene;
}(Phaser.Scene));
exports.VermouthScene = VermouthScene;


/***/ }),

/***/ "./src/ui/glass-button.ts":
/*!********************************!*\
  !*** ./src/ui/glass-button.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlassButton = void 0;
var Phaser = __webpack_require__(/*! phaser */ "./node_modules/phaser/dist/phaser.js");
var GlassButton = /** @class */ (function (_super) {
    __extends(GlassButton, _super);
    function GlassButton(scene, x, y, text, onClick) {
        var _this = _super.call(this, scene, x, y) || this;
        _this.padding = 6;
        _this.minimumWidth = 20;
        _this.minimumHeight = 20;
        scene.add.existing(_this);
        _this.setOrigin(0, 0);
        _this.ogtext = text;
        _this.label = scene.add
            .text(x + _this.padding, y + _this.padding, text)
            .setFontSize(14)
            .setAlign('center');
        var labelWidth = _this.label.width + _this.padding;
        var labelHeight = _this.label.height + _this.padding;
        _this.width = labelWidth >= _this.minimumWidth ? labelWidth : _this.minimumWidth;
        _this.height = labelHeight >= _this.minimumHeight ? labelHeight : _this.minimumHeight;
        _this.setInteractive({ useHandCursor: true })
            .on('pointerdown', _this.enterMenuButtonActiveState)
            .on('pointerup', _this.enterMenuButtonHoverState);
        if (onClick) {
            _this.on('pointerup', onClick);
            _this.onClick = onClick;
        }
        _this.enterMenuButtonRestState();
        return _this;
    }
    GlassButton.prototype.enterMenuButtonHoverState = function () {
        this.label.setColor('#000000');
        this.setFillStyle(0x888888);
    };
    GlassButton.prototype.enterMenuButtonRestState = function () {
        try {
            this.label.setColor('#FFFFFF');
            this.setFillStyle(0x888888);
            this.label.setText(this.ogtext);
        }
        catch (e) {
            console.log(e);
        }
    };
    GlassButton.prototype.enterMenuButtonActiveState = function () {
        try {
            this.label.setColor('#BBBBBB');
            this.setFillStyle(0x444444);
            this.label.setText(this.ogtext);
        }
        catch (e) {
            console.log(e);
        }
    };
    GlassButton.prototype.enterMenuButtonBlockedState = function () {
        //this.label.setColor('#ff0000');
        try {
            this.setFillStyle(0x444444);
            this.off('pointerup');
            this.label.setText('🔒');
        }
        catch (e) {
            console.log(e);
        }
    };
    GlassButton.prototype.resetOnClick = function () {
        this.on('pointerup', this.onClick);
    };
    return GlassButton;
}(Phaser.GameObjects.Rectangle));
exports.GlassButton = GlassButton;


/***/ }),

/***/ "./src/ui/menu-button.ts":
/*!*******************************!*\
  !*** ./src/ui/menu-button.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuButton = void 0;
var Phaser = __webpack_require__(/*! phaser */ "./node_modules/phaser/dist/phaser.js");
var MenuButton = /** @class */ (function (_super) {
    __extends(MenuButton, _super);
    function MenuButton(scene, x, y, text, onClick) {
        var _this = _super.call(this, scene, x, y) || this;
        _this.padding = 10;
        _this.minimumWidth = 200;
        _this.minimumHeight = 50;
        scene.add.existing(_this);
        _this.setOrigin(0, 0);
        _this.label = scene.add
            .text(x + _this.padding, y + _this.padding, text)
            .setFontSize(18)
            .setAlign('center');
        var labelWidth = _this.label.width + _this.padding;
        var labelHeight = _this.label.height + _this.padding;
        _this.width = labelWidth >= _this.minimumWidth ? labelWidth : _this.minimumWidth;
        _this.height = labelHeight >= _this.minimumHeight ? labelHeight : _this.minimumHeight;
        _this.setInteractive({ useHandCursor: true })
            .on('pointerover', _this.enterMenuButtonHoverState)
            .on('pointerout', _this.enterMenuButtonRestState)
            .on('pointerdown', _this.enterMenuButtonActiveState)
            .on('pointerup', _this.enterMenuButtonHoverState);
        if (onClick) {
            _this.on('pointerup', onClick);
        }
        _this.enterMenuButtonRestState();
        return _this;
    }
    MenuButton.prototype.enterMenuButtonHoverState = function () {
        this.label.setColor('#000000');
        this.setFillStyle(0x888888);
    };
    MenuButton.prototype.enterMenuButtonRestState = function () {
        this.label.setColor('#FFFFFF');
        this.setFillStyle(0x888888);
    };
    MenuButton.prototype.enterMenuButtonActiveState = function () {
        this.label.setColor('#BBBBBB');
        this.setFillStyle(0x444444);
    };
    return MenuButton;
}(Phaser.GameObjects.Rectangle));
exports.MenuButton = MenuButton;


/***/ }),

/***/ "./src/ui/scene-button.ts":
/*!********************************!*\
  !*** ./src/ui/scene-button.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.SceneButton = void 0;
var Phaser = __webpack_require__(/*! phaser */ "./node_modules/phaser/dist/phaser.js");
var SceneButton = /** @class */ (function (_super) {
    __extends(SceneButton, _super);
    function SceneButton(scene, x, y, text, onClick) {
        var _this = _super.call(this, scene, x, y) || this;
        _this.padding = 10;
        _this.minimumWidth = 50;
        _this.minimumHeight = 50;
        scene.add.existing(_this);
        _this.setOrigin(0, 0);
        _this.label = scene.add
            .text(x + _this.padding, y + _this.padding, text)
            .setFontSize(18)
            .setAlign('center');
        var labelWidth = _this.label.width + _this.padding;
        var labelHeight = _this.label.height + _this.padding;
        _this.width = labelWidth >= _this.minimumWidth ? labelWidth : _this.minimumWidth;
        _this.height = labelHeight >= _this.minimumHeight ? labelHeight : _this.minimumHeight;
        _this.setInteractive({ useHandCursor: true })
            .on('pointerover', _this.enterMenuButtonHoverState)
            .on('pointerout', _this.enterMenuButtonRestState)
            .on('pointerdown', _this.enterMenuButtonActiveState)
            .on('pointerup', _this.enterMenuButtonHoverState);
        if (onClick) {
            _this.on('pointerup', onClick);
        }
        _this.enterMenuButtonRestState();
        return _this;
    }
    SceneButton.prototype.enterMenuButtonHoverState = function () {
        this.label.setColor('#000000');
        this.setFillStyle(0x888888);
    };
    SceneButton.prototype.enterMenuButtonRestState = function () {
        this.label.setColor('#FFFFFF');
        this.setFillStyle(0xC80000);
    };
    SceneButton.prototype.enterMenuButtonActiveState = function () {
        this.label.setColor('#BBBBBB');
        this.setFillStyle(0x444444);
    };
    return SceneButton;
}(Phaser.GameObjects.Rectangle));
exports.SceneButton = SceneButton;


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hlbHBlcnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy9iaXR0ZXJzLXNjZW5lLnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvYm9vdC1zY2VuZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL2JvdXJib24tc2NlbmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy9kaXNjb25uZWN0ZWQtc2NlbmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy9ldmVyeW9uZS1pbi1zY2VuZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL2dhbWUtc2NlbmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy9pY2Utc2NlbmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL2p1aWNlci1zY2VuZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL21haW4tbWVudS1zY2VuZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL211ZGRsZS1zY2VuZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL29yYW5nZS1zY2VuZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL3Blcm1pc3Npb25zLXNjZW5lLnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvcG91ci1zY2VuZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL3Jlc3VsdHMtc2NlbmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy9zaGFrZS1zY2VuZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL3N1Y2Nlc3Mtc2NlbmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy92ZXJtb3V0aC1zY2VuZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvZ2xhc3MtYnV0dG9uLnRzIiwid2VicGFjazovLy8uL3NyYy91aS9tZW51LWJ1dHRvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvc2NlbmUtYnV0dG9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLFFBQVEsb0JBQW9CO1FBQzVCO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsaUJBQWlCLDRCQUE0QjtRQUM3QztRQUNBO1FBQ0Esa0JBQWtCLDJCQUEyQjtRQUM3QztRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7UUFFQTtRQUNB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LENBQUMsS0FBSyxDQUFDLFlBQVksRUFBRSwrQkFBK0IsQ0FBQyxDQUFDO1FBQy9ELElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsRUFBRSxpQ0FBaUMsQ0FBQyxDQUFDO1FBQ25FLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsRUFBRSxpQ0FBaUMsQ0FBQyxDQUFDO1FBQ25FLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsRUFBRSxnQ0FBZ0MsQ0FBQyxDQUFDO1FBQ2pFLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsRUFBRSxpQ0FBaUMsQ0FBQyxDQUFDO1FBQ25FLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsRUFBRSxpQ0FBaUMsQ0FBQyxDQUFDO1FBQ25FLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsRUFBRSxpQ0FBaUMsQ0FBQyxDQUFDO1FBQ25FLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsRUFBRSxpQ0FBaUMsQ0FBQyxDQUFDO1FBQ25FLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSx3QkFBd0IsQ0FBQyxDQUFDO1FBQ2pELElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsRUFBRSw0QkFBNEIsQ0FBQyxDQUFDO1FBQzFELElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSx5QkFBeUIsQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSx5QkFBeUIsQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSx5QkFBeUIsQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSx5QkFBeUIsQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1B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RUFBRSxHQUFHLEVBQUUsRUFBRSx3QkFBc0IsQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFDLENBQUMsQ0FBRyxFQUFFLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUM7WUFDOUgsdUZBQXVGO1lBQ3pGLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsS0FBSyxHQUFHLENBQUMsRUFBRSxNQUFNLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEdBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEdBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1lBQzNLLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsS0FBSyxHQUFHLENBQUMsRUFBRSxNQUFNLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxHQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxHQUFDLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQztZQUMvSyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLEtBQUssR0FBRyxDQUFDLEVBQUUsTUFBTSxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxHQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxHQUFDLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQztZQUMzSyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLEtBQUssR0FBRyxDQUFDLEVBQUUsTUFBTSxHQUFHLENBQUMsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsR0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUM7WUFFdkksSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNqRyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ2pHLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDakcsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNqRyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUU5QixJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO1lBQ2hDLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7WUFDaEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztZQUNoQyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO1lBRWhDLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxHQUFDLENBQUMsQ0FBQztZQUMzRCxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsR0FBQyxDQUFDLENBQUM7WUFDM0QsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEdBQUMsQ0FBQyxDQUFDO1lBQzNELElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxHQUFDLENBQUMsQ0FBQztZQUUzRCxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzlGLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDeEcsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN4RyxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3hHLElBQUksQ0FB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QUFDLEtBQUksQ0FBQyxhQUFhLENBQUM7UUFFbkYsS0FBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFLGFBQWEsRUFBRSxJQUFJLEVBQUUsQ0FBQzthQUN6QyxFQUFFLENBQUMsYUFBYSxFQUFFLEtBQUksQ0FBQyx5QkFBeUIsQ0FBQzthQUNqRCxFQUFFLENBQUMsWUFBWSxFQUFFLEtBQUksQ0FBQyx3QkFBd0IsQ0FBQzthQUMvQyxFQUFFLENBQUMsYUFBYSxFQUFFLEtBQUksQ0FBQywwQkFBMEIsQ0FBQzthQUNsRCxFQUFFLENBQUMsV0FBVyxFQUFFLEtBQUksQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO1FBRW5ELElBQUksT0FBTyxFQUFFO1lBQ1gsS0FBSSxDQUFDLEVBQUUsQ0FBQyxXQUFXLEVBQUUsT0FBTyxDQUFDLENBQUM7U0FDL0I7UUFFRCxLQUFJLENBQUMsd0JBQXdCLEVBQUUsQ0FBQzs7SUFDbEMsQ0FBQztJQUVPLCtDQUF5QixHQUFqQztRQUNFLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQy9CLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUVPLDhDQUF3QixHQUFoQztRQUNFLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQy9CLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUVPLGdEQUEwQixHQUFsQztRQUNFLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQy9CLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUNILGtCQUFDO0FBQUQsQ0FBQyxDQWhEZ0MsTUFBTSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEdBZ0Q1RDtBQWhEWSxrQ0FBVyIsImZpbGUiOiJhcHAuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcImFwcFwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFtcIi4vc3JjL21haW4udHNcIixcInZlbmRvcnNcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCJpbXBvcnQgKiBhcyBQaGFzZXIgZnJvbSAncGhhc2VyJztcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRHYW1lV2lkdGggPSAoc2NlbmU6IFBoYXNlci5TY2VuZSk6IG51bWJlciA9PiB7XHJcbiAgcmV0dXJuIHNjZW5lLmdhbWUuc2NhbGUud2lkdGg7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0R2FtZUhlaWdodCA9IChzY2VuZTogUGhhc2VyLlNjZW5lKTogbnVtYmVyID0+IHtcclxuICByZXR1cm4gc2NlbmUuZ2FtZS5zY2FsZS5oZWlnaHQ7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZHJpbmtUb0NvbG9yTWFwOiBNYXA8c3RyaW5nLCBudW1iZXI+ID0gbmV3IE1hcChbXHJcbiAgWydCb3VyYm9uJywgMHhkYjc5MDBdLFxyXG4gIFsnVmVybW91dGgnLCAweDU1MDEwM10sXHJcbiAgWydWb2RrYScsIDB4ODA4MDgwXSxcclxuICBbJ0dpbicsIDB4NzVhM2EzXSxcclxuICBbJ1J1bScsIDB4QUM1OTJEXSxcclxuICBbJ1RyaXBsZSBTZWMnLCAweGZmY2M5OV0sXHJcbiAgWydUZXF1aWxhJywgMHg4MGZmZmZdLFxyXG4gIFsnQ29rZScsIDB4QUM1OTJEXSxcclxuICBbJ0xlbW9uIEp1aWNlJywgMHhmZmZmOTldLFxyXG4gIFsnTGltZSBKdWljZScsIDB4ZDlmZmIzXSxcclxuICBbJ09yYW5nZSBKdWljZScsIDB4ZmZjYzk5XSxcclxuXSk7XHJcblxyXG5leHBvcnQgY29uc3QgSW5ncmVkaWVudHMgPSBbXHJcbiAgJ1NoYWtlIERyaW5rJyxcclxuICAnTXVkZGxlIERyaW5rJyxcclxuICAnT3JhbmdlIFBlZWwnLFxyXG4gICdCb3VyYm9uJyxcclxuICAnSWNlIEN1YmUnLFxyXG4gICdWZXJtb3V0aCcsXHJcbiAgJ0xlbW9uIEp1aWNlJyxcclxuICAnTGltZSBKdWljZScsXHJcbiAgJ09yYW5nZSBKdWljZScsXHJcbiAgJ0FuZ29zdHVyYSBCaXR0ZXJzJyxcclxuICAnVm9ka2EnLFxyXG4gICdHaW4nLFxyXG4gICdSdW0nLFxyXG4gICdUcmlwbGUgU2VjJyxcclxuICAnVGVxdWlsYScsXHJcbiAgJ0Nva2UnLFxyXG4gICdTb2RhJyxcclxuICAnU2ltcGxlIFN5cnVwJyxcclxuICAnVG9uaWMnLFxyXG4gICdCcmFuZHknLFxyXG4gICdDcnVzaGVkIEljZScsXHJcbiAgJ0xpbWUgV2VkZ2UnLFxyXG4gICdMZW1vbiBXZWRnZScsXHJcbiAgJ1N0aXIgRHJpbmsnLFxyXG4gICdTdHJhaW4gRHJpbmsnLFxyXG4gICdDb2duYWMnLFxyXG4gICdFZ2cgV2hpdGUnXHJcbl07XHJcbi8qXHJcbmV4cG9ydCBjb25zdCBzdHJpbmdUb0JhY2tlbmROdW1iZXJNYXA6IE1hcDxzdHJpbmcsIG51bWJlcj4gPSBuZXcgTWFwKFtcclxuICBbJ1RlcXVpbGEnLCAwXSxcclxuICBbJ0JyYW5keScsIDFdLFxyXG4gIFsnR2luJywgMl0sXHJcbiAgWydSdW0nLCAzXSxcclxuICBbJ1ZvZGthJywgNF0sXHJcbiAgWydXaGlza3knLCA1XSxcclxuICBbJ1RyaXBsZSBTZWMnLCA2XSxcclxuICBbJ1Zlcm1vdXRoJywgN10sXHJcbiAgWydBbmdvc3R1cmEgQml0dGVycycsIDhdLFxyXG4gIFsnQ29rZScsIDldLFxyXG4gIFsnU29kYScsIDEwXSxcclxuICBbJ1RvbmljJywgMF0sXHJcbiAgWydTaW1wbGUgU3lydXAnLCAwXSxcclxuICBbJ0ljZSBDdWJlJywgMF0sXHJcbiAgWydUb25pYycsIDBdLFxyXG4gIFsnTGVtb24gSnVpY2UnLCAwXSxcclxuICBbJ0xpbWUgSnVpY2UnLCAwXSxcclxuICBbJ09yYW5nZSBKdWljZScsIDBdLFxyXG4gIFsnU2hha2UgRHJpbmsnLCAwXSxcclxuICBbJ1N0aXIgRHJpbmsnLCAwXSxcclxuICBbJ011ZGRsZSBEcmluaycsIDBdLFxyXG4gIFsnTGltZSBXZWRnZScsIDBdLFxyXG4gIFsnTGVtb24gV2VkZ2UnLCAwXSxcclxuICBbJ09yYW5nZSBXZWRnZScsIDBdLFxyXG5dKSovXHJcbiIsImltcG9ydCAqIGFzIFBoYXNlciBmcm9tICdwaGFzZXInO1xyXG5pbXBvcnQgU2NlbmVzIGZyb20gJy4vc2NlbmVzJztcclxud2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xyXG4gIGNvbnN0IGdhbWVDb25maWc6IFBoYXNlci5UeXBlcy5Db3JlLkdhbWVDb25maWcgPSB7XHJcbiAgICB0aXRsZTogJ1NhbXBsZScsXHJcbiAgXHJcbiAgICB0eXBlOiBQaGFzZXIuQ0FOVkFTLFxyXG4gIFxyXG4gICAgc2NhbGU6IHtcclxuICAgICAgd2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoLFxyXG4gICAgICBoZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCxcclxuICAgIH0sXHJcbiAgXHJcbiAgICBzY2VuZTogU2NlbmVzLFxyXG4gIFxyXG4gICAgcGh5c2ljczoge1xyXG4gICAgICBkZWZhdWx0OiAnYXJjYWRlJyxcclxuICAgICAgYXJjYWRlOiB7XHJcbiAgICAgICAgZGVidWc6IHRydWUsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIFxyXG4gICAgcGFyZW50OiAnZ2FtZScsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMDAwMDAwJyxcclxuICB9O1xyXG4gIFxyXG4gIHZhciBnYW1lID0gbmV3IFBoYXNlci5HYW1lKGdhbWVDb25maWcpO1xyXG4gIFxyXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKSA9PiB7XHJcbiAgICBnYW1lLnNjYWxlLnJlZnJlc2goKTtcclxuICB9KTtcclxufVxyXG5cclxuIiwiaW1wb3J0IHsgSW5wdXQsIEdhbWVPYmplY3RzIH0gZnJvbSAncGhhc2VyJztcclxuXHJcbmNvbnN0IHNjZW5lQ29uZmlnOiBQaGFzZXIuVHlwZXMuU2NlbmVzLlNldHRpbmdzQ29uZmlnID0ge1xyXG4gIGFjdGl2ZTogZmFsc2UsXHJcbiAgdmlzaWJsZTogZmFsc2UsXHJcbiAga2V5OiAnQW5nb3N0dXJhIEJpdHRlcnMnLFxyXG59O1xyXG5cclxuY2xhc3MgR2FtZVNjZW5lQXJndW1lbnRzIHtcclxuICBwdWJsaWMgb25GaW5pc2g6IEZ1bmN0aW9uO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQml0dGVyc1NjZW5lIGV4dGVuZHMgUGhhc2VyLlNjZW5lIHtcclxuICBwdWJsaWMgc3BlZWQgPSAyMDA7XHJcblxyXG4gIHByaXZhdGUgY3Vyc29yS2V5czogUGhhc2VyLlR5cGVzLklucHV0LktleWJvYXJkLkN1cnNvcktleXM7XHJcbiAgcHJpdmF0ZSBib3R0bGU6IFBoYXNlci5HYW1lT2JqZWN0cy5TcHJpdGU7XHJcbiAgLy9wcml2YXRlIGJvdXJib246IFBoYXNlci5HYW1lT2JqZWN0cy5TcHJpdGU7XHJcbiAgcHJpdmF0ZSBlbXB0eUdsYXNzOiBQaGFzZXIuR2FtZU9iamVjdHMuU3ByaXRlO1xyXG4gIHByaXZhdGUgZmlsbGVkZ2xhc3MxOiBQaGFzZXIuR2FtZU9iamVjdHMuU3ByaXRlO1xyXG4gIHByaXZhdGUgZmlsbGVkZ2xhc3MyOiBQaGFzZXIuR2FtZU9iamVjdHMuU3ByaXRlO1xyXG5cclxuICBwcml2YXRlIGNvbnRlbnRzOiBzdHJpbmdbXSA9IFtdO1xyXG4gIHByaXZhdGUgZ2xhc3NGaWxsZXJzOiBQaGFzZXIuR2FtZU9iamVjdHMuU3ByaXRlW10gPSBbXTtcclxuXHJcbiAgcHJpdmF0ZSBpc1BvdXJpbmcgPSAwO1xyXG4gIHByaXZhdGUgc2hha2VDb3VudCA9IDA7XHJcbiAgcHJpdmF0ZSB0cmFuc2l0aW9uaW5nID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSBuID0gMDtcclxuICBwcml2YXRlIG50aHJlc2hvbGQgPSAwO1xyXG4gIHByaXZhdGUgbWF4eCA9IDA7XHJcbiAgcHJpdmF0ZSBtYXh5ID0gMDtcclxuICBwcml2YXRlIG1heHogPSAwO1xyXG4gIHByaXZhdGUgbWlueCA9IDA7XHJcbiAgcHJpdmF0ZSBtaW55ID0gMDtcclxuICBwcml2YXRlIG1pbnogPSAwO1xyXG4gIHByaXZhdGUgdGhyZXNob2xkID0gMTU7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoc2NlbmVDb25maWcpO1xyXG4gIH1cclxuICBwdWJsaWMgdGV4dDE6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0O1xyXG4gIHB1YmxpYyB0ZXh0MjogUGhhc2VyLkdhbWVPYmplY3RzLlRleHQ7XHJcbiAgcHVibGljIHRleHQzOiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dDtcclxuICBwdWJsaWMgdGV4dDQ6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0O1xyXG4gIHB1YmxpYyB0ZXh0NTogUGhhc2VyLkdhbWVPYmplY3RzLlRleHQ7XHJcbiAgcHVibGljIGJvdHRsZU5hbWU6IHN0cmluZztcclxuICBwcml2YXRlIGxpcXVpZFJlY3RhbmdsZTogUGhhc2VyLkdhbWVPYmplY3RzLlJlY3RhbmdsZTtcclxuICBwdWJsaWMgb25GaW5pc2g6IEZ1bmN0aW9uO1xyXG5cclxuICBwdWJsaWMgaW5pdChkYXRhOiBHYW1lU2NlbmVBcmd1bWVudHMpOiB2b2lkIHtcclxuICAgIGNvbnNvbGUubG9nKCdBbmdvc3R1cmEgQml0dGVycyBzY2VuZSBpbml0Jyk7XHJcbiAgICB0aGlzLmJvdHRsZU5hbWUgPSAnYml0dGVycyc7XHJcbiAgICB0aGlzLm9uRmluaXNoID0gZGF0YS5vbkZpbmlzaDtcclxuICAgIFxyXG4gIH1cclxuXHJcbiAgcHVibGljIGNyZWF0ZSgpOiB2b2lkIHtcclxuICAgIGNvbnNvbGUubG9nKCdBbmdvc3R1cmEgQml0dGVycyBzY2VuZSBjcmVhdGUnKTtcclxuICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCB9ID0gdGhpcy5zeXMuZ2FtZS5jYW52YXM7XHJcbiAgICB0aGlzLmlzUG91cmluZyA9IDA7XHJcbiAgICB0aGlzLnNoYWtlQ291bnQgPSAwO1xyXG4gICAgdGhpcy50cmFuc2l0aW9uaW5nID0gZmFsc2U7XHJcbiAgICB0aGlzLm4gPSAwO1xyXG4gICAgdGhpcy5udGhyZXNob2xkID0gMTM7XHJcbiAgICB0aGlzLmNhbGxiYWNrKCk7XHJcbiAgICAvLyBBZGQgYSBwbGF5ZXIgc3ByaXRlIHRoYXQgY2FuIGJlIG1vdmVkIGFyb3VuZC4gUGxhY2UgaGltIGluIHRoZSBtaWRkbGUgb2YgdGhlIHNjcmVlbi5cclxuICAgIC8vdGhpcy5lbXB0eUdsYXNzID0gdGhpcy5hZGQuc3ByaXRlKHdpZHRoIC8gNCwgaGVpZ2h0IC8gMiwgJ2VtcHR5Z2xhc3MnKTtcclxuICAgIC8vdGhpcy5maWxsZWRnbGFzczEgPSB0aGlzLmFkZC5zcHJpdGUod2lkdGggLyA0LCBoZWlnaHQgLyAyLCAnZmlsbGVkZ2xhc3MxJyk7XHJcbiAgICAvL3RoaXMuZmlsbGVkZ2xhc3MyID0gdGhpcy5hZGQuc3ByaXRlKHdpZHRoIC8gNCwgaGVpZ2h0IC8gMiwgJ2ZpbGxlZGdsYXNzMicpO1xyXG5cclxuICAgIC8vdGhpcy5ib3VyYm9uID0gdGhpcy5hZGQuc3ByaXRlKHdpZHRoIC8gOCwgaGVpZ2h0IC8gNCwgJ2NhbmVsbGVrbmlmZScpLnNldEludGVyYWN0aXZlKCk7XHJcbiAgICAvL3RoaXMuYm91cmJvbi5vbigncG9pbnRlcmRvd24nLCB0aGlzLmNhbGxiYWNrICk7XHJcblxyXG4gICAgY29uc29sZS5sb2coYGdsYXNzIHg6ICR7d2lkdGggLyA0fWApO1xyXG4gICAgY29uc29sZS5sb2coYGdsYXNzIHk6ICR7aGVpZ2h0IC8gMn1gKTtcclxuXHJcbiAgICB0aGlzLmJvdHRsZSA9IHRoaXMuYWRkLnNwcml0ZSh3aWR0aCAvIDIsIGhlaWdodCAvIDIsIHRoaXMuYm90dGxlTmFtZSkuc2V0SW50ZXJhY3RpdmUoKTtcclxuICAgIGNvbnNvbGUubG9nKGB0cmllZCB0byByZW5kZXIgJHt0aGlzLmJvdHRsZU5hbWV9IGJvdHRsZWApO1xyXG4gICAgdGhpcy5ib3R0bGUuc2V0U2NhbGUoMC42KTtcclxuICAgIC8vY29uc29sZS5sb2codGhpcy5lbXB0eUdsYXNzLngpO1xyXG4gICAgY29uc29sZS5sb2codGhpcy5ib3R0bGUuZGlzcGxheUhlaWdodCk7XHJcbiAgICAvL3RoaXMuYm90dGxlLnNldFBvc2l0aW9uKHRoaXMuZW1wdHlHbGFzcy54ICsgdGhpcy5ib3R0bGUuZGlzcGxheUhlaWdodCAvIDQpO1xyXG4gICAgLy90aGlzLmJvdHRsZS5zZXRTY2FsZSgwLjUpO1xyXG5cclxuICAgIHRoaXMuYm90dGxlLm9uKCdwb2ludGVyb3ZlcicsICgpID0+IHtcclxuICAgICAgdGhpcy5ib3R0bGUuc2V0VGludCgweGNjY2NjYyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmJvdHRsZS5vbigncG9pbnRlcm91dCcsICgpID0+IHtcclxuICAgICAgdGhpcy5ib3R0bGUuY2xlYXJUaW50KCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmJvdHRsZS5vbigncG9pbnRlcmRvd24nLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMuc2hha2VDb3VudCsrO1xyXG4gICAgICBpZiAodGhpcy5zaGFrZUNvdW50ID4gNykge1xyXG4gICAgICAgIHRoaXMuc2hha2VDb3VudCA9IDc7XHJcbiAgICAgIH1cclxuICAgICAgLy90aGlzLmJvdHRsZS5zZXRUZXh0dXJlKGBzaGFrZXIke3RoaXMuc2hha2VDb3VudH1gKTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5pbnB1dC5zZXREcmFnZ2FibGUodGhpcy5ib3R0bGUpO1xyXG5cclxuICAgIHRoaXMuaW5wdXQub24oJ2RyYWdzdGFydCcsIChwb2ludGVyLCBnYW1lT2JqZWN0KSA9PiB7XHJcbiAgICAgIGdhbWVPYmplY3Quc2V0VGludCgweDk5OTk5OSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBUaGlzIGlzIGEgbmljZSBoZWxwZXIgUGhhc2VyIHByb3ZpZGVzIHRvIGNyZWF0ZSBsaXN0ZW5lcnMgZm9yIHNvbWUgb2YgdGhlIG1vc3QgY29tbW9uIGtleXMuXHJcbiAgICB0aGlzLmN1cnNvcktleXMgPSB0aGlzLmlucHV0LmtleWJvYXJkLmNyZWF0ZUN1cnNvcktleXMoKTtcclxuXHJcbiAgICB0aGlzLnRleHQxID0gdGhpcy5hZGQudGV4dCg1MCwgMTAsICcnLCB7IGNvbG9yOiAnIzAwZmYwMCcgfSk7XHJcbiAgICB0aGlzLnRleHQyID0gdGhpcy5hZGQudGV4dCg1MCwgMzAsICcnLCB7IGNvbG9yOiAnIzAwZmYwMCcgfSk7XHJcbiAgICB0aGlzLnRleHQzID0gdGhpcy5hZGQudGV4dCg1MCwgNjAsICcnLCB7IGNvbG9yOiAnIzAwZmYwMCcgfSk7XHJcbiAgICB0aGlzLnRleHQ0ID0gdGhpcy5hZGQudGV4dCg1MCwgOTAsICcnLCB7IGNvbG9yOiAnIzAwZmYwMCcgfSk7XHJcbiAgICB0aGlzLnRleHQ1ID0gdGhpcy5hZGQudGV4dCg1MCwgMTIwLCAnJywgeyBjb2xvcjogJyMwMGZmMDAnIH0pO1xyXG5cclxuICAgIHRoaXMuYm90dGxlLnNldERlcHRoKDEpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHVwZGF0ZSgpOiB2b2lkIHtcclxuICAgIC8vIEV2ZXJ5IGZyYW1lLCB3ZSBjcmVhdGUgYSBuZXcgdmVsb2NpdHkgZm9yIHRoZSBzcHJpdGUgYmFzZWQgb24gd2hhdCBrZXlzIHRoZSBwbGF5ZXIgaXMgaG9sZGluZyBkb3duLlxyXG4gICAgaWYgKHRoaXMubiA+IHRoaXMubnRocmVzaG9sZCAmJiB0aGlzLnNoYWtlQ291bnQgPD0gNykge1xyXG4gICAgICB0aGlzLm4gPSAwO1xyXG4gICAgICB0aGlzLnNoYWtlQ291bnQrKztcclxuICAgICAgdGhpcy50ZXh0NC5zZXRUZXh0KGBuICR7dGhpcy5ufSAke3RoaXMubnRocmVzaG9sZH1gKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnNoYWtlQ291bnQgJSAyID09IDApIHtcclxuICAgICAgdGhpcy5ib3R0bGUuc2V0VGV4dHVyZShgYml0dGVycyR7dGhpcy5zaGFrZUNvdW50IC8gMn1gKTtcclxuICAgICAgXHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5zaGFrZUNvdW50ID4gNSAmJiAhdGhpcy50cmFuc2l0aW9uaW5nKSB7XHJcbiAgICAgIHRoaXMudHJhbnNpdGlvbmluZyA9IHRydWU7XHJcbiAgICAgIGRvY3VtZW50LmNvb2tpZSA9IGBzaGFrZT0xYDtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zY2VuZS5zdG9wKCk7XHJcbiAgICAgICAgdGhpcy5vbkZpbmlzaCgpO1xyXG4gICAgICB9LCA3NTApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldFVzZXJBZ2VudCgpOiBzdHJpbmcge1xyXG4gICAgLy8gKEEpIEJSRUFLIFVTRVIgQUdFTlQgRE9XTlxyXG4gICAgY29uc29sZS5sb2cobmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpKTtcclxuICAgIGNvbnN0IGlzTW9iaWxlID0gbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLm1hdGNoKC9tb2JpbGUvaSksXHJcbiAgICAgIGlzVGFibGV0ID0gbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLm1hdGNoKC90YWJsZXQvaSksXHJcbiAgICAgIGlzQW5kcm9pZCA9IG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5tYXRjaCgvYW5kcm9pZC9pKSxcclxuICAgICAgaXNpUGhvbmUgPSBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkubWF0Y2goL2lwaG9uZS9pKSxcclxuICAgICAgaXNpUGFkID0gbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLm1hdGNoKC9pcGFkL2kpO1xyXG5cclxuICAgIC8vIChCKSBERVRFQ1RFRCBERVZJQ0UgVFlQRVxyXG4gICAgaWYgKGlzQW5kcm9pZCkge1xyXG4gICAgICByZXR1cm4gJ0FuZHJvaWQnO1xyXG4gICAgfSBlbHNlIGlmIChpc2lQaG9uZSB8fCBpc2lQYWQpIHtcclxuICAgICAgcmV0dXJuICdBcHBsZSc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gJ05vcGUnO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGNhbGxBcHBsZSgpOiB2b2lkIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIERldmljZU1vdGlvbkV2ZW50LnJlcXVlc3RQZXJtaXNzaW9uKCkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICB0aGlzLnRleHQxLnNldFRleHQocmVzcG9uc2UpO1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdkZXZpY2Vtb3Rpb24nLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGV2ZW50KTtcclxuICAgICAgICAgIGlmIChldmVudC5hY2NlbGVyYXRpb24ueCA8IHRoaXMudGhyZXNob2xkICogLTEgfHwgZXZlbnQuYWNjZWxlcmF0aW9uLnggPiB0aGlzLnRocmVzaG9sZCkge1xyXG4gICAgICAgICAgICB0aGlzLm4rKztcclxuICAgICAgICAgIH0gZWxzZSBpZiAoZXZlbnQuYWNjZWxlcmF0aW9uLnkgPCB0aGlzLnRocmVzaG9sZCAqIC0xIHx8IGV2ZW50LmFjY2VsZXJhdGlvbi55ID4gdGhpcy50aHJlc2hvbGQpIHtcclxuICAgICAgICAgICAgdGhpcy5uKys7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKGV2ZW50LmFjY2VsZXJhdGlvbi56IDwgdGhpcy50aHJlc2hvbGQgKiAtMSB8fCBldmVudC5hY2NlbGVyYXRpb24ueiA+IHRoaXMudGhyZXNob2xkKSB7XHJcbiAgICAgICAgICAgIHRoaXMubisrO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC8vIHRleHRcclxuICAgICAgICAgIGlmIChldmVudC5hY2NlbGVyYXRpb24ueCA8IHRoaXMubWlueCkge1xyXG4gICAgICAgICAgICB0aGlzLm1pbnggPSBldmVudC5hY2NlbGVyYXRpb24ueDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmIChldmVudC5hY2NlbGVyYXRpb24ueSA8IHRoaXMubWlueSkge1xyXG4gICAgICAgICAgICB0aGlzLm1pbnkgPSBldmVudC5hY2NlbGVyYXRpb24ueTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmIChldmVudC5hY2NlbGVyYXRpb24ueiA8IHRoaXMubWlueikge1xyXG4gICAgICAgICAgICB0aGlzLm1pbnogPSBldmVudC5hY2NlbGVyYXRpb24uejtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmIChldmVudC5hY2NlbGVyYXRpb24ueCA+IHRoaXMubWF4eCkge1xyXG4gICAgICAgICAgICB0aGlzLm1heHggPSBldmVudC5hY2NlbGVyYXRpb24ueDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmIChldmVudC5hY2NlbGVyYXRpb24ueSA+IHRoaXMubWF4eSkge1xyXG4gICAgICAgICAgICB0aGlzLm1heHkgPSBldmVudC5hY2NlbGVyYXRpb24ueTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmIChldmVudC5hY2NlbGVyYXRpb24ueiA+IHRoaXMubWF4eikge1xyXG4gICAgICAgICAgICB0aGlzLm1heHogPSBldmVudC5hY2NlbGVyYXRpb24uejtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHRoaXMudGV4dDEuc2V0VGV4dChgeCAke3RoaXMubWlueH0gJHt0aGlzLm1heHh9YCk7XHJcbiAgICAgICAgICB0aGlzLnRleHQyLnNldFRleHQoYHkgJHt0aGlzLm1pbnl9ICR7dGhpcy5tYXh5fWApO1xyXG4gICAgICAgICAgdGhpcy50ZXh0My5zZXRUZXh0KGB6ICR7dGhpcy5taW56fSAke3RoaXMubWF4en1gKTtcclxuICAgICAgICAgIHRoaXMudGV4dDQuc2V0VGV4dChgbiAke3RoaXMubn0gJHt0aGlzLm50aHJlc2hvbGR9YCk7XHJcbiAgICAgICAgICB0aGlzLnRleHQ1LnNldFRleHQoYHNoYWtlcyAke3RoaXMuc2hha2VDb3VudH1gKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChleCkge1xyXG4gICAgICBjb25zb2xlLmxvZygnbm90IGlvcycpO1xyXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignZGV2aWNlbW90aW9uJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXZlbnQpO1xyXG4gICAgICAgIGlmIChldmVudC5hY2NlbGVyYXRpb24ueCA8IHRoaXMudGhyZXNob2xkICogLTEgfHwgZXZlbnQuYWNjZWxlcmF0aW9uLnggPiB0aGlzLnRocmVzaG9sZCkge1xyXG4gICAgICAgICAgdGhpcy5uKys7XHJcbiAgICAgICAgfSBlbHNlIGlmIChldmVudC5hY2NlbGVyYXRpb24ueSA8IHRoaXMudGhyZXNob2xkICogLTEgfHwgZXZlbnQuYWNjZWxlcmF0aW9uLnkgPiB0aGlzLnRocmVzaG9sZCkge1xyXG4gICAgICAgICAgdGhpcy5uKys7XHJcbiAgICAgICAgfSBlbHNlIGlmIChldmVudC5hY2NlbGVyYXRpb24ueiA8IHRoaXMudGhyZXNob2xkICogLTEgfHwgZXZlbnQuYWNjZWxlcmF0aW9uLnogPiB0aGlzLnRocmVzaG9sZCkge1xyXG4gICAgICAgICAgdGhpcy5uKys7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyB0ZXh0XHJcbiAgICAgICAgaWYgKGV2ZW50LmFjY2VsZXJhdGlvbi54IDwgdGhpcy5taW54KSB7XHJcbiAgICAgICAgICB0aGlzLm1pbnggPSBldmVudC5hY2NlbGVyYXRpb24ueDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGV2ZW50LmFjY2VsZXJhdGlvbi55IDwgdGhpcy5taW55KSB7XHJcbiAgICAgICAgICB0aGlzLm1pbnkgPSBldmVudC5hY2NlbGVyYXRpb24ueTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGV2ZW50LmFjY2VsZXJhdGlvbi56IDwgdGhpcy5taW56KSB7XHJcbiAgICAgICAgICB0aGlzLm1pbnogPSBldmVudC5hY2NlbGVyYXRpb24uejtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGV2ZW50LmFjY2VsZXJhdGlvbi54ID4gdGhpcy5tYXh4KSB7XHJcbiAgICAgICAgICB0aGlzLm1heHggPSBldmVudC5hY2NlbGVyYXRpb24ueDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGV2ZW50LmFjY2VsZXJhdGlvbi55ID4gdGhpcy5tYXh5KSB7XHJcbiAgICAgICAgICB0aGlzLm1heHkgPSBldmVudC5hY2NlbGVyYXRpb24ueTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGV2ZW50LmFjY2VsZXJhdGlvbi56ID4gdGhpcy5tYXh6KSB7XHJcbiAgICAgICAgICB0aGlzLm1heHogPSBldmVudC5hY2NlbGVyYXRpb24uejtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy50ZXh0MS5zZXRUZXh0KGB4ICR7dGhpcy5taW54fSAke3RoaXMubWF4eH1gKTtcclxuICAgICAgICB0aGlzLnRleHQyLnNldFRleHQoYHkgJHt0aGlzLm1pbnl9ICR7dGhpcy5tYXh5fWApO1xyXG4gICAgICAgIHRoaXMudGV4dDMuc2V0VGV4dChgeiAke3RoaXMubWluen0gJHt0aGlzLm1heHp9YCk7XHJcbiAgICAgICAgdGhpcy50ZXh0NC5zZXRUZXh0KGBuICR7dGhpcy5ufSAke3RoaXMubnRocmVzaG9sZH1gKTtcclxuICAgICAgICB0aGlzLnRleHQ1LnNldFRleHQoYHNoYWtlcyAke3RoaXMuc2hha2VDb3VudH1gKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHB1YmxpYyBjYWxsYmFjaygpOiB2b2lkIHtcclxuICAgIC8vdGhpcy50ZXh0MS5zZXRUZXh0KCdBc2tlZCcpO1xyXG4gICAgdGhpcy5tYXh4ID0gMDtcclxuICAgIHRoaXMubWF4eSA9IDA7XHJcbiAgICB0aGlzLm1heHogPSAwO1xyXG4gICAgdGhpcy5taW54ID0gMDtcclxuICAgIHRoaXMubWlueSA9IDA7XHJcbiAgICB0aGlzLm1pbnogPSAwO1xyXG4gICAgLy9pZiAod2luZG93LkRldmljZU9yaWVudGF0aW9uRXZlbnQpIHtcclxuICAgICAgLy93aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignZGV2aWNlb3JpZW50YXRpb24nLCBkZXZpY2VPcmllbnRhdGlvbkhhbmRsZXIsIGZhbHNlKTtcclxuICAgIC8vfVxyXG5cclxuICAgLyppZiAod2luZG93LkRldmljZU1vdGlvbkV2ZW50KSB7XHJcbiAgICAgIHRoaXMudGV4dDIuc2V0VGV4dCgneWVzJyk7XHJcbiAgICAgIGNvbnNvbGUubG9nKCd5ZXMnKTtcclxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2RldmljZW1vdGlvbicsIChldmVudCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGV2ZW50KTtcclxuICAgICAgICBpZiAoZXZlbnQuYWNjZWxlcmF0aW9uLnggPCB0aGlzLnRocmVzaG9sZCAqIC0xIHx8IGV2ZW50LmFjY2VsZXJhdGlvbi54ID4gdGhpcy50aHJlc2hvbGQpIHtcclxuICAgICAgICAgIHRoaXMubisrO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZXZlbnQuYWNjZWxlcmF0aW9uLnkgPCB0aGlzLnRocmVzaG9sZCAqIC0xIHx8IGV2ZW50LmFjY2VsZXJhdGlvbi55ID4gdGhpcy50aHJlc2hvbGQpIHtcclxuICAgICAgICAgIHRoaXMubisrO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZXZlbnQuYWNjZWxlcmF0aW9uLnogPCB0aGlzLnRocmVzaG9sZCAqIC0xIHx8IGV2ZW50LmFjY2VsZXJhdGlvbi56ID4gdGhpcy50aHJlc2hvbGQpIHtcclxuICAgICAgICAgIHRoaXMubisrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gdGV4dFxyXG4gICAgICAgIGlmIChldmVudC5hY2NlbGVyYXRpb24ueCA8IHRoaXMubWlueCkge1xyXG4gICAgICAgICAgdGhpcy5taW54ID0gZXZlbnQuYWNjZWxlcmF0aW9uLng7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChldmVudC5hY2NlbGVyYXRpb24ueSA8IHRoaXMubWlueSkge1xyXG4gICAgICAgICAgdGhpcy5taW55ID0gZXZlbnQuYWNjZWxlcmF0aW9uLnk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChldmVudC5hY2NlbGVyYXRpb24ueiA8IHRoaXMubWlueikge1xyXG4gICAgICAgICAgdGhpcy5taW56ID0gZXZlbnQuYWNjZWxlcmF0aW9uLno7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChldmVudC5hY2NlbGVyYXRpb24ueCA+IHRoaXMubWF4eCkge1xyXG4gICAgICAgICAgdGhpcy5tYXh4ID0gZXZlbnQuYWNjZWxlcmF0aW9uLng7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChldmVudC5hY2NlbGVyYXRpb24ueSA+IHRoaXMubWF4eSkge1xyXG4gICAgICAgICAgdGhpcy5tYXh5ID0gZXZlbnQuYWNjZWxlcmF0aW9uLnk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChldmVudC5hY2NlbGVyYXRpb24ueiA+IHRoaXMubWF4eikge1xyXG4gICAgICAgICAgdGhpcy5tYXh6ID0gZXZlbnQuYWNjZWxlcmF0aW9uLno7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudGV4dDEuc2V0VGV4dChgeCAke3RoaXMubWlueH0gJHt0aGlzLm1heHh9YCk7XHJcbiAgICAgICAgLy90aGlzLnRleHQyLnNldFRleHQoYHkgJHt0aGlzLm1pbnl9ICR7dGhpcy5tYXh5fWApO1xyXG4gICAgICAgIHRoaXMudGV4dDMuc2V0VGV4dChgeiAke3RoaXMubWluen0gJHt0aGlzLm1heHp9YCk7XHJcbiAgICAgICAgdGhpcy50ZXh0NC5zZXRUZXh0KGBuICR7dGhpcy5ufSAke3RoaXMubnRocmVzaG9sZH1gKTtcclxuICAgICAgICB0aGlzLnRleHQ1LnNldFRleHQoYHNoYWtlcyAke3RoaXMuc2hha2VDb3VudH1gKTtcclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnRleHQyLnNldFRleHQoJ25vJyk7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdubycpO1xyXG4gICAgfSovXHJcbiAgICB0aGlzLmNhbGxBcHBsZSgpO1xyXG4gICAgLy9cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHNpZ25hbFIgPSByZXF1aXJlKCdAbWljcm9zb2Z0L3NpZ25hbHInKTtcclxuaW1wb3J0IHsgZ2V0R2FtZVdpZHRoLCBnZXRHYW1lSGVpZ2h0IH0gZnJvbSAnLi4vaGVscGVycyc7XHJcblxyXG5jb25zdCBzY2VuZUNvbmZpZzogUGhhc2VyLlR5cGVzLlNjZW5lcy5TZXR0aW5nc0NvbmZpZyA9IHtcclxuICBhY3RpdmU6IGZhbHNlLFxyXG4gIHZpc2libGU6IGZhbHNlLFxyXG4gIGtleTogJ0Jvb3QnLFxyXG59O1xyXG5cclxuLyoqXHJcbiAqIFRoZSBpbml0aWFsIHNjZW5lIHRoYXQgbG9hZHMgYWxsIG5lY2Vzc2FyeSBhc3NldHMgdG8gdGhlIGdhbWUgYW5kIGRpc3BsYXlzIGEgbG9hZGluZyBiYXIuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQm9vdFNjZW5lIGV4dGVuZHMgUGhhc2VyLlNjZW5lIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKHNjZW5lQ29uZmlnKTtcclxuICB9XHJcbiAgcHJpdmF0ZSBodWJDb25uZWN0aW9uOiBzaWduYWxSLkh1YkNvbm5lY3Rpb247XHJcbiAgcHVibGljIGFzeW5jIHByZWxvYWQoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICBkb2N1bWVudC5jb29raWUgPSBgb3JhbmdlPTBgO1xyXG4gICAgZG9jdW1lbnQuY29va2llID0gYGJvdXJib249MGA7XHJcbiAgICBkb2N1bWVudC5jb29raWUgPSBgaWNlPTBgO1xyXG4gICAgZG9jdW1lbnQuY29va2llID0gYHZlcm1vdXRoPTBgO1xyXG4gICAgY29uc3QgaGFsZldpZHRoID0gZ2V0R2FtZVdpZHRoKHRoaXMpICogMC41O1xyXG4gICAgY29uc3QgaGFsZkhlaWdodCA9IGdldEdhbWVIZWlnaHQodGhpcykgKiAwLjU7XHJcblxyXG4gICAgY29uc3QgcHJvZ3Jlc3NCYXJIZWlnaHQgPSAxMDA7XHJcbiAgICBjb25zdCBwcm9ncmVzc0JhcldpZHRoID0gNDAwO1xyXG5cclxuICAgIGNvbnN0IHByb2dyZXNzQmFyQ29udGFpbmVyID0gdGhpcy5hZGQucmVjdGFuZ2xlKFxyXG4gICAgICBoYWxmV2lkdGgsXHJcbiAgICAgIGhhbGZIZWlnaHQsXHJcbiAgICAgIHByb2dyZXNzQmFyV2lkdGgsXHJcbiAgICAgIHByb2dyZXNzQmFySGVpZ2h0LFxyXG4gICAgICAweDAwMDAwMCxcclxuICAgICk7XHJcbiAgICBjb25zdCBwcm9ncmVzc0JhciA9IHRoaXMuYWRkLnJlY3RhbmdsZShcclxuICAgICAgaGFsZldpZHRoICsgMjAgLSBwcm9ncmVzc0JhckNvbnRhaW5lci53aWR0aCAqIDAuNSxcclxuICAgICAgaGFsZkhlaWdodCxcclxuICAgICAgMTAsXHJcbiAgICAgIHByb2dyZXNzQmFySGVpZ2h0IC0gMjAsXHJcbiAgICAgIDB4ODg4ODg4LFxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCBsb2FkaW5nVGV4dCA9IHRoaXMuYWRkLnRleHQoaGFsZldpZHRoIC0gNzUsIGhhbGZIZWlnaHQgLSAxMDAsICdMb2FkaW5nLi4uJykuc2V0Rm9udFNpemUoMjQpO1xyXG4gICAgY29uc3QgcGVyY2VudFRleHQgPSB0aGlzLmFkZC50ZXh0KGhhbGZXaWR0aCAtIDI1LCBoYWxmSGVpZ2h0LCAnMCUnKS5zZXRGb250U2l6ZSgyNCk7XHJcbiAgICBjb25zdCBhc3NldFRleHQgPSB0aGlzLmFkZC50ZXh0KGhhbGZXaWR0aCAtIDI1LCBoYWxmSGVpZ2h0ICsgMTAwLCAnJykuc2V0Rm9udFNpemUoMjQpO1xyXG5cclxuICAgIHRoaXMubG9hZC5vbigncHJvZ3Jlc3MnLCAodmFsdWUpID0+IHtcclxuICAgICAgcHJvZ3Jlc3NCYXIud2lkdGggPSAocHJvZ3Jlc3NCYXJXaWR0aCAtIDMwKSAqIHZhbHVlO1xyXG5cclxuICAgICAgY29uc3QgcGVyY2VudCA9IHZhbHVlICogMTAwO1xyXG4gICAgICBwZXJjZW50VGV4dC5zZXRUZXh0KGAke3BlcmNlbnR9JWApO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5sb2FkLm9uKCdmaWxlcHJvZ3Jlc3MnLCAoZmlsZSkgPT4ge1xyXG4gICAgICBhc3NldFRleHQuc2V0VGV4dChmaWxlLmtleSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmxvYWQub24oJ2NvbXBsZXRlJywgKCkgPT4ge1xyXG4gICAgICBsb2FkaW5nVGV4dC5kZXN0cm95KCk7XHJcbiAgICAgIHBlcmNlbnRUZXh0LmRlc3Ryb3koKTtcclxuICAgICAgYXNzZXRUZXh0LmRlc3Ryb3koKTtcclxuICAgICAgcHJvZ3Jlc3NCYXIuZGVzdHJveSgpO1xyXG4gICAgICBwcm9ncmVzc0JhckNvbnRhaW5lci5kZXN0cm95KCk7XHJcblxyXG4gICAgICB0aGlzLnNjZW5lLnN0YXJ0KCdQZXJtaXNzaW9ucycsIHtodWJDb25uZWN0aW9uOiB0aGlzLmh1YkNvbm5lY3Rpb259KTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuaHViQ29ubmVjdGlvbiA9IG5ldyBzaWduYWxSLkh1YkNvbm5lY3Rpb25CdWlsZGVyKClcclxuICAgIC53aXRoVXJsKGBodHRwczovL3NjaGl0dGFsa2luLmF6dXJld2Vic2l0ZXMubmV0L3doaXRlcnVzaGluL2ApXHJcbiAgICAuY29uZmlndXJlTG9nZ2luZyhzaWduYWxSLkxvZ0xldmVsLkluZm9ybWF0aW9uKVxyXG4gICAgLndpdGhBdXRvbWF0aWNSZWNvbm5lY3QoKVxyXG4gICAgLmJ1aWxkKCk7XHJcbiAgICB0aGlzLmh1YkNvbm5lY3Rpb24uc3RhcnQoKTtcclxuICAgIHRoaXMuaHViQ29ubmVjdGlvbi5vbmNsb3NlKCgpPT57dGhpcy5zY2VuZS5zdGFydChcIkRpc2Nvbm5lY3RlZFwiKX0pXHJcbiAgICB0aGlzLmh1YkNvbm5lY3Rpb24ub25yZWNvbm5lY3RpbmcoKCk9Pnt0aGlzLnNjZW5lLnN0YXJ0KFwiRGlzY29ubmVjdGVkXCIpfSlcclxuICAgIGNvbnNvbGUubG9nKFwiY29ubmVjdGlvbiBzdGFydGVkXCIpXHJcbiAgICB0aGlzLmxvYWRBc3NldHMoKTtcclxuICAgIGNvbnNvbGUubG9nKFwibG9hZGVkXCIpXHJcbiAgICBcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEFsbCBhc3NldHMgdGhhdCBuZWVkIHRvIGJlIGxvYWRlZCBieSB0aGUgZ2FtZSAoc3ByaXRlcywgaW1hZ2VzLCBhbmltYXRpb25zLCB0aWxlcywgbXVzaWMsIGV0YylcclxuICAgKiBzaG91bGQgYmUgYWRkZWQgdG8gdGhpcyBtZXRob2QuIE9uY2UgbG9hZGVkIGluLCB0aGUgbG9hZGVyIHdpbGwga2VlcCB0cmFjayBvZiB0aGVtLCBpbmRlcGVkZW50IG9mIHdoaWNoIHNjZW5lXHJcbiAgICogaXMgY3VycmVudGx5IGFjdGl2ZSwgc28gdGhleSBjYW4gYmUgYWNjZXNzZWQgYW55d2hlcmUuXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBsb2FkQXNzZXRzKCkge1xyXG4gICAgLy8gTG9hZCBzYW1wbGUgYXNzZXRzXHJcblxyXG4gICAgLy8gU291cmNlOiBPcGVuIEdhbWUgQXJ0XHJcbiAgICB0aGlzLmxvYWQuaW1hZ2UoJ3Zlcm1vdXRodG9wJywgJ2Fzc2V0cy9zcHJpdGVzL3Zlcm1vdXRodG9wMi5wbmcnKTtcclxuICAgIHRoaXMubG9hZC5pbWFnZSgndmVybW91dGh0b3Bvbmx5JywgJ2Fzc2V0cy9zcHJpdGVzL3Zlcm1vdXRodG9wb25seTIucG5nJyk7XHJcbiAgICB0aGlzLmxvYWQuaW1hZ2UoJ3Zlcm1vdXRoJywgJ2Fzc2V0cy9zcHJpdGVzL3Zlcm1vdXRoLnBuZycpO1xyXG4gICAgdGhpcy5sb2FkLmltYWdlKCdWZXJtb3V0aCcsICdhc3NldHMvc3ByaXRlcy92ZXJtb3V0aC5wbmcnKTtcclxuICAgIHRoaXMubG9hZC5pbWFnZSgnYm91cmJvbnRvcCcsICdhc3NldHMvc3ByaXRlcy9ib3VyYm9udG9wMi5wbmcnKTtcclxuICAgIHRoaXMubG9hZC5pbWFnZSgnYm91cmJvbnRvcG9ubHknLCAnYXNzZXRzL3Nwcml0ZXMvYm91cmJvbnRvcG9ubHkucG5nJyk7XHJcbiAgICB0aGlzLmxvYWQuaW1hZ2UoJ2JvdXJib24nLCAnYXNzZXRzL3Nwcml0ZXMvYm91cmJvbi5wbmcnKTtcclxuICAgIHRoaXMubG9hZC5pbWFnZSgnQm91cmJvbicsICdhc3NldHMvc3ByaXRlcy9ib3VyYm9uLnBuZycpO1xyXG4gICAgdGhpcy5sb2FkLmltYWdlKCdWb2RrYScsICdhc3NldHMvc3ByaXRlcy92b2RrYS5wbmcnKTtcclxuICAgIHRoaXMubG9hZC5pbWFnZSgnR2luJywgJ2Fzc2V0cy9zcHJpdGVzL2dpbi5wbmcnKTtcclxuICAgIHRoaXMubG9hZC5pbWFnZSgnUnVtJywgJ2Fzc2V0cy9zcHJpdGVzL3J1bS5wbmcnKTtcclxuICAgIHRoaXMubG9hZC5pbWFnZSgnVGVxdWlsYScsICdhc3NldHMvc3ByaXRlcy90ZXF1aWxhLnBuZycpO1xyXG4gICAgdGhpcy5sb2FkLmltYWdlKCdDb2tlJywgJ2Fzc2V0cy9zcHJpdGVzL2Nva2UucG5nJyk7XHJcbiAgICB0aGlzLmxvYWQuaW1hZ2UoJ1RyaXBsZSBTZWMnLCAnYXNzZXRzL3Nwcml0ZXMvdHJpcGxlc2VjLnBuZycpO1xyXG4gICAgdGhpcy5sb2FkLmltYWdlKCdlbXB0eWdsYXNzJywgJ2Fzc2V0cy9zcHJpdGVzL2VtcHR5Z2xhc3MucG5nJyk7XHJcbiAgICB0aGlzLmxvYWQuaW1hZ2UoJ211ZGRsZXJnbGFzcycsICdhc3NldHMvc3ByaXRlcy9tdWRkbGVyZ2xhc3MucG5nJyk7XHJcbiAgICB0aGlzLmxvYWQuaW1hZ2UoJ2JpdHRlcnNnbGFzcycsICdhc3NldHMvc3ByaXRlcy9iaXR0ZXJzZ2xhc3MucG5nJyk7XHJcbiAgICB0aGlzLmxvYWQuaW1hZ2UoJ3NoYWtlbmdsYXNzJywgJ2Fzc2V0cy9zcHJpdGVzL3NoYWtlbmdsYXNzLnBuZycpO1xyXG4gICAgdGhpcy5sb2FkLmltYWdlKCdmaWxsZWRnbGFzczEnLCAnYXNzZXRzL3Nwcml0ZXMvZmlsbGVkZ2xhc3MxLnBuZycpO1xyXG4gICAgdGhpcy5sb2FkLmltYWdlKCdmaWxsZWRnbGFzczInLCAnYXNzZXRzL3Nwcml0ZXMvZmlsbGVkZ2xhc3MyLnBuZycpO1xyXG4gICAgdGhpcy5sb2FkLmltYWdlKCdmaWxsZWRnbGFzczMnLCAnYXNzZXRzL3Nwcml0ZXMvZmlsbGVkZ2xhc3MzLnBuZycpO1xyXG4gICAgdGhpcy5sb2FkLmltYWdlKCdmaWxsZWRnbGFzczQnLCAnYXNzZXRzL3Nwcml0ZXMvZmlsbGVkZ2xhc3M0LnBuZycpO1xyXG4gICAgdGhpcy5sb2FkLmltYWdlKCdpY2UnLCAnYXNzZXRzL3Nwcml0ZXMvaWNlLnBuZycpO1xyXG4gICAgdGhpcy5sb2FkLmltYWdlKCdJY2UgQ3ViZScsICdhc3NldHMvc3ByaXRlcy9pY2VpY29uLnBuZycpO1xyXG4gICAgdGhpcy5sb2FkLmltYWdlKCdpY2UxJywgJ2Fzc2V0cy9zcHJpdGVzL2ljZTEucG5nJyk7XHJcbiAgICB0aGlzLmxvYWQuaW1hZ2UoJ2ljZTInLCAnYXNzZXRzL3Nwcml0ZXMvaWNlMi5wbmcnKTtcclxuICAgIHRoaXMubG9hZC5pbWFnZSgnaWNlMycsICdhc3NldHMvc3ByaXRlcy9pY2UzLnBuZycpO1xyXG4gICAgdGhpcy5sb2FkLmltYWdlKCdpY2U0JywgJ2Fzc2V0cy9zcHJpdGVzL2ljZTQucG5nJyk7XHJcbiAgICB0aGlzLmxvYWQuaW1hZ2UoJ2ljZTUnLCAnYXNzZXRzL3Nwcml0ZXMvaWNlNS5wbmcnKTtcclxuICAgIHRoaXMubG9hZC5pbWFnZSgnaWNlZ2xhc3MnLCAnYXNzZXRzL3Nwcml0ZXMvaWNlZ2xhc3MucG5nJyk7XHJcbiAgICB0aGlzLmxvYWQuaW1hZ2UoJ29yYW5nZScsICdhc3NldHMvc3ByaXRlcy9vcmFuZ2UucG5nJyk7XHJcbiAgICB0aGlzLmxvYWQuaW1hZ2UoJ09yYW5nZSBQZWVsJywgJ2Fzc2V0cy9zcHJpdGVzL29yYW5nZS5wbmcnKTtcclxuICAgIHRoaXMubG9hZC5pbWFnZSgnb3JhbmdlaW5zaWRlJywgJ2Fzc2V0cy9zcHJpdGVzL29yYW5nZUluc2lkZS5wbmcnKTtcclxuICAgIHRoaXMubG9hZC5pbWFnZSgnb3Jhbmdld2VkZ2VnbGFzcycsICdhc3NldHMvc3ByaXRlcy9vcmFuZ2V3ZWRnZWdsYXNzLnBuZycpO1xyXG4gICAgdGhpcy5sb2FkLmltYWdlKCdjYW5lbGxla25pZmUnLCAnYXNzZXRzL3Nwcml0ZXMvY2FuZWxsZWtuaWZlLnBuZycpO1xyXG4gICAgdGhpcy5sb2FkLmltYWdlKCdzaGFrZXInLCAnYXNzZXRzL3Nwcml0ZXMvc2hha2VyLnBuZycpO1xyXG4gICAgdGhpcy5sb2FkLmltYWdlKCdTaGFrZSBEcmluaycsICdhc3NldHMvc3ByaXRlcy9zaGFrZXIucG5nJyk7XHJcbiAgICB0aGlzLmxvYWQuaW1hZ2UoJ3NoYWtlcjAnLCAnYXNzZXRzL3Nwcml0ZXMvc2hha2VyLnBuZycpO1xyXG4gICAgdGhpcy5sb2FkLmltYWdlKCdzaGFrZXIxJywgJ2Fzc2V0cy9zcHJpdGVzL3NoYWtlcjEucG5nJyk7XHJcbiAgICB0aGlzLmxvYWQuaW1hZ2UoJ3NoYWtlcjInLCAnYXNzZXRzL3Nwcml0ZXMvc2hha2VyMi5wbmcnKTtcclxuICAgIHRoaXMubG9hZC5pbWFnZSgnc2hha2VyMycsICdhc3NldHMvc3ByaXRlcy9zaGFrZXIzLnBuZycpO1xyXG4gICAgdGhpcy5sb2FkLmltYWdlKCdBbmdvc3R1cmEgQml0dGVycycsICdhc3NldHMvc3ByaXRlcy9iaXR0ZXJzLnBuZycpO1xyXG4gICAgdGhpcy5sb2FkLmltYWdlKCdiaXR0ZXJzJywgJ2Fzc2V0cy9zcHJpdGVzL2JpdHRlcnMucG5nJyk7XHJcbiAgICB0aGlzLmxvYWQuaW1hZ2UoJ2JpdHRlcnMwJywgJ2Fzc2V0cy9zcHJpdGVzL2JpdHRlcnMucG5nJyk7XHJcbiAgICB0aGlzLmxvYWQuaW1hZ2UoJ2JpdHRlcnMxJywgJ2Fzc2V0cy9zcHJpdGVzL2JpdHRlcnMxLnBuZycpO1xyXG4gICAgdGhpcy5sb2FkLmltYWdlKCdiaXR0ZXJzMicsICdhc3NldHMvc3ByaXRlcy9iaXR0ZXJzMi5wbmcnKTtcclxuICAgIHRoaXMubG9hZC5pbWFnZSgnYml0dGVyczMnLCAnYXNzZXRzL3Nwcml0ZXMvYml0dGVyczMucG5nJyk7XHJcbiAgICB0aGlzLmxvYWQuaW1hZ2UoJ211ZGRsZXInLCAnYXNzZXRzL3Nwcml0ZXMvbXVkZGxlci5wbmcnKTtcclxuICAgIHRoaXMubG9hZC5pbWFnZSgnTXVkZGxlIERyaW5rJywgJ2Fzc2V0cy9zcHJpdGVzL211ZGRsZXIucG5nJyk7XHJcbiAgICB0aGlzLmxvYWQuaW1hZ2UoJ2p1aWNlcicsICdhc3NldHMvc3ByaXRlcy9qdWljZXIucG5nJyk7XHJcbiAgICB0aGlzLmxvYWQuaW1hZ2UoJ0xlbW9uIEp1aWNlJywgJ2Fzc2V0cy9zcHJpdGVzL2p1aWNlcmxlbW9udHJpZ2dlci5wbmcnKTtcclxuICAgIHRoaXMubG9hZC5pbWFnZSgnTGltZSBKdWljZScsICdhc3NldHMvc3ByaXRlcy9qdWljZXJsaW1ldHJpZ2dlci5wbmcnKTtcclxuICAgIHRoaXMubG9hZC5pbWFnZSgnT3JhbmdlIEp1aWNlJywgJ2Fzc2V0cy9zcHJpdGVzL2p1aWNlcm9yYW5nZXRyaWdnZXIucG5nJyk7XHJcbiAgICB0aGlzLmxvYWQuaW1hZ2UoJ2p1aWNlcmJvdHRvbScsICdhc3NldHMvc3ByaXRlcy9qdWljZXJib3R0b20ucG5nJyk7XHJcbiAgICB0aGlzLmxvYWQuaW1hZ2UoJ2p1aWNlcnRvcCcsICdhc3NldHMvc3ByaXRlcy9qdWljZXJ0b3AucG5nJyk7XHJcbiAgICB0aGlzLmxvYWQuaW1hZ2UoJ09yYW5nZSBKdWljZSAyJywgJ2Fzc2V0cy9zcHJpdGVzL2p1aWNlcm9yYW5nZS5wbmcnKTtcclxuICAgIHRoaXMubG9hZC5pbWFnZSgnTGltZSBKdWljZSAyJywgJ2Fzc2V0cy9zcHJpdGVzL2p1aWNlcmxpbWUucG5nJyk7XHJcbiAgICB0aGlzLmxvYWQuaW1hZ2UoJ0xlbW9uIEp1aWNlIDInLCAnYXNzZXRzL3Nwcml0ZXMvanVpY2VybGVtb24ucG5nJyk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IElucHV0LCBHYW1lT2JqZWN0cyB9IGZyb20gJ3BoYXNlcic7XHJcbmltcG9ydCB7IGdldEdhbWVXaWR0aCwgZ2V0R2FtZUhlaWdodCwgZHJpbmtUb0NvbG9yTWFwIH0gZnJvbSAnLi4vaGVscGVycyc7XHJcblxyXG5jb25zdCBzY2VuZUNvbmZpZzogUGhhc2VyLlR5cGVzLlNjZW5lcy5TZXR0aW5nc0NvbmZpZyA9IHtcclxuICBhY3RpdmU6IGZhbHNlLFxyXG4gIHZpc2libGU6IGZhbHNlLFxyXG4gIGtleTogJ0JvdXJib24nLFxyXG59O1xyXG5jbGFzcyBHYW1lU2NlbmVBcmd1bWVudHMge1xyXG4gIHB1YmxpYyBvbkZpbmlzaDogRnVuY3Rpb247XHJcbn1cclxuZXhwb3J0IGNsYXNzIEJvdXJib25TY2VuZSBleHRlbmRzIFBoYXNlci5TY2VuZSB7XHJcbiAgcHVibGljIHNwZWVkID0gMjAwO1xyXG5cclxuICBwcml2YXRlIGN1cnNvcktleXM6IFBoYXNlci5UeXBlcy5JbnB1dC5LZXlib2FyZC5DdXJzb3JLZXlzO1xyXG4gIHByaXZhdGUgYm91cmJvblRvcDogUGhhc2VyLkdhbWVPYmplY3RzLlNwcml0ZTtcclxuICBwcml2YXRlIGJvdXJib25Ub3BPbmx5OiBQaGFzZXIuR2FtZU9iamVjdHMuU3ByaXRlO1xyXG5cclxuICBwcml2YXRlIGNvbnRlbnRzOiBzdHJpbmdbXSA9IFtdO1xyXG4gIHByaXZhdGUgZ2xhc3NGaWxsZXJzOiBQaGFzZXIuR2FtZU9iamVjdHMuU3ByaXRlW10gPSBbXTtcclxuXHJcbiAgcHJpdmF0ZSB0cmFuc2l0aW9uaW5nID0gZmFsc2U7XHJcbiAgcHVibGljIG9uRmluaXNoOiBGdW5jdGlvbjtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKHNjZW5lQ29uZmlnKTtcclxuICB9XHJcbiAgcHVibGljIHRleHQxOiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dDtcclxuICBwdWJsaWMgdGV4dDI6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0O1xyXG4gIHB1YmxpYyB0ZXh0MzogUGhhc2VyLkdhbWVPYmplY3RzLlRleHQ7XHJcbiAgcHVibGljIHRleHQ0OiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dDtcclxuICBwdWJsaWMgdGV4dDU6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0O1xyXG4gIHB1YmxpYyB1bnNjcmV3ZWQgPSAwO1xyXG4gIHB1YmxpYyBsaWRSZWN0OiBQaGFzZXIuR2FtZU9iamVjdHMuUmVjdGFuZ2xlO1xyXG4gIHByaXZhdGUgaGVsZCA9IGZhbHNlO1xyXG5cclxuICBwdWJsaWMgaW5pdChkYXRhOiBHYW1lU2NlbmVBcmd1bWVudHMpe1xyXG4gICAgdGhpcy5vbkZpbmlzaCA9IGRhdGEub25GaW5pc2g7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY3JlYXRlKCk6IHZvaWQge1xyXG4gICAgY29uc29sZS5sb2coJ0JvdXJib24nKTtcclxuICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCB9ID0gdGhpcy5zeXMuZ2FtZS5jYW52YXM7XHJcbiAgICB0aGlzLnVuc2NyZXdlZCA9IDA7XHJcbiAgICB0aGlzLmhlbGQgPSBmYWxzZTtcclxuICAgIHRoaXMudHJhbnNpdGlvbmluZyA9IGZhbHNlO1xyXG4gICAgLy8gQWRkIGEgcGxheWVyIHNwcml0ZSB0aGF0IGNhbiBiZSBtb3ZlZCBhcm91bmQuIFBsYWNlIGhpbSBpbiB0aGUgbWlkZGxlIG9mIHRoZSBzY3JlZW4uXHJcbiAgICB0aGlzLmJvdXJib25Ub3AgPSB0aGlzLmFkZC5zcHJpdGUod2lkdGggLyAyLCBoZWlnaHQgLyAyICsgMzAwLCAnYm91cmJvbnRvcCcpO1xyXG4gICAgdGhpcy5ib3VyYm9uVG9wT25seSA9IHRoaXMuYWRkLnNwcml0ZSh3aWR0aCAvIDIsIGhlaWdodCAvIDIgKyAzMDAsICdib3VyYm9udG9wb25seScpO1xyXG5cclxuICAgIC8vbGV0IHJlY3QgPSBuZXcgUGhhc2VyLkdhbWVPYmplY3RzLlJlY3RhbmdsZSh3aWR0aCAvIDIsIGhlaWdodCAqIDAuMDY5MDMyMjU4LCAwLCAwKTtcclxuICAgIHRoaXMubGlkUmVjdCA9IHRoaXMuYWRkXHJcbiAgICAgIC5yZWN0YW5nbGUoXHJcbiAgICAgICAgd2lkdGggLyAyLFxyXG4gICAgICAgIHRoaXMuYm91cmJvblRvcE9ubHkueSAtIHRoaXMuYm91cmJvblRvcE9ubHkuZGlzcGxheUhlaWdodCAqIDAuNDMwOTY3NzQyLFxyXG4gICAgICAgIHRoaXMuYm91cmJvblRvcE9ubHkuZGlzcGxheVdpZHRoIC8gMyxcclxuICAgICAgICB0aGlzLmJvdXJib25Ub3BPbmx5LmRpc3BsYXlIZWlnaHQgLyA3LFxyXG4gICAgICAgIDB4ZmZmZmZmLFxyXG4gICAgICApXHJcbiAgICAgIC5zZXRBbHBoYSgwLjI1KVxyXG4gICAgICAuc2V0RGVwdGgoMSk7XHJcblxyXG4gICAgdGhpcy5pbnB1dC5vbigncG9pbnRlcmRvd24nLCAoKSA9PiB7XHJcbiAgICAgIGlmIChcclxuICAgICAgICB0aGlzLmxpZFJlY3QuZ2V0Qm91bmRzKCkuY29udGFpbnModGhpcy5pbnB1dC5hY3RpdmVQb2ludGVyLngsIHRoaXMuaW5wdXQuYWN0aXZlUG9pbnRlci55KSAmJlxyXG4gICAgICAgIHRoaXMuYm91cmJvblRvcE9ubHkueSA9PSB0aGlzLmJvdXJib25Ub3AueVxyXG4gICAgICApIHtcclxuICAgICAgICB0aGlzLnRleHQxLnNldFRleHQoYGNsaWNrZWQgYm94YCk7XHJcbiAgICAgICAgdGhpcy5oZWxkID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmJvdXJib25Ub3BPbmx5LnkgLT0gMTU7XHJcbiAgICAgICAgdGhpcy5saWRSZWN0LnkgLT0gMTU7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuaW5wdXQub24oJ3BvaW50ZXJ1cCcsICgpID0+IHtcclxuICAgICAgdGhpcy5oZWxkID0gZmFsc2U7XHJcbiAgICAgIGlmICh0aGlzLmxpZFJlY3QueSArIHRoaXMubGlkUmVjdC5kaXNwbGF5V2lkdGggLyAyID4gdGhpcy5ib3VyYm9uVG9wLnkgLSB0aGlzLmJvdXJib25Ub3AuZGlzcGxheUhlaWdodCAvIDIpIHtcclxuICAgICAgICB0aGlzLmxpZFJlY3QueSA9IHRoaXMuYm91cmJvblRvcC55IC0gdGhpcy5ib3VyYm9uVG9wLmRpc3BsYXlIZWlnaHQgKiAwLjQzMDk2Nzc0MjtcclxuICAgICAgICB0aGlzLmJvdXJib25Ub3BPbmx5LnkgPSB0aGlzLmJvdXJib25Ub3AueTtcclxuICAgICAgICB0aGlzLnVuc2NyZXdlZCA9IDA7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMudGV4dDEuc2V0VGV4dChgzrg6ICR7dGhpcy5pbnB1dC5hY3RpdmVQb2ludGVyLmdldEFuZ2xlKCl9YCk7XHJcbiAgICAgIHRoaXMudGV4dDIuc2V0VGV4dChgeDogJHt0aGlzLmlucHV0LmFjdGl2ZVBvaW50ZXIuZ2V0RGlzdGFuY2VYKCl9YCk7XHJcbiAgICAgIHRoaXMudGV4dDMuc2V0VGV4dChgeTogJHt0aGlzLmlucHV0LmFjdGl2ZVBvaW50ZXIuZ2V0RGlzdGFuY2VZKCl9YCk7XHJcbiAgICAgIHRoaXMudGV4dDQuc2V0VGV4dChgZDogJHt0aGlzLmlucHV0LmFjdGl2ZVBvaW50ZXIuZ2V0RGlzdGFuY2UoKX1gKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMudGV4dDEgPSB0aGlzLmFkZC50ZXh0KDEwLCAxMCwgJycsIHsgY29sb3I6ICcjMDBmZjAwJyB9KTtcclxuICAgIHRoaXMudGV4dDIgPSB0aGlzLmFkZC50ZXh0KDEwLCAyNSwgJycsIHsgY29sb3I6ICcjMDBmZjAwJyB9KTtcclxuICAgIHRoaXMudGV4dDMgPSB0aGlzLmFkZC50ZXh0KDEwLCA0MCwgJycsIHsgY29sb3I6ICcjMDBmZjAwJyB9KTtcclxuICAgIHRoaXMudGV4dDQgPSB0aGlzLmFkZC50ZXh0KDEwLCA1NSwgJycsIHsgY29sb3I6ICcjMDBmZjAwJyB9KTtcclxuICAgIHRoaXMudGV4dDUgPSB0aGlzLmFkZC50ZXh0KDEwLCA3MCwgJycsIHsgY29sb3I6ICcjMDBmZjAwJyB9KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyB1cGRhdGUoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5oZWxkKSB7XHJcbiAgICAgIGlmICh0aGlzLmlucHV0LmFjdGl2ZVBvaW50ZXIuZ2V0QW5nbGUoKSA8IDAgJiYgdGhpcy5pbnB1dC5hY3RpdmVQb2ludGVyLmdldERpc3RhbmNlWSgpID4gNTApIHtcclxuICAgICAgICB0aGlzLnVuc2NyZXdlZCArPSAxO1xyXG4gICAgICAgIGlmICh0aGlzLnVuc2NyZXdlZCAlIDIgPT0gMSkge1xyXG4gICAgICAgICAgdGhpcy5ib3VyYm9uVG9wT25seS55IC09IDE7XHJcbiAgICAgICAgICB0aGlzLmxpZFJlY3QueSAtPSAxO1xyXG4gICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICB0aGlzLmxpZFJlY3QueSArIHRoaXMubGlkUmVjdC5kaXNwbGF5V2lkdGggLyAyIDwgdGhpcy5ib3VyYm9uVG9wLnkgLSB0aGlzLmJvdXJib25Ub3AuZGlzcGxheUhlaWdodCAvIDIgJiZcclxuICAgICAgICAgICAgIXRoaXMudHJhbnNpdGlvbmluZ1xyXG4gICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHRoaXMudHJhbnNpdGlvbmluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgIHRoaXMuc2NlbmUuc3RvcCgpO1xyXG4gICAgICAgICAgICAgIHRoaXMuc2NlbmUubGF1bmNoKCdQb3VyJywgeyBCb3R0bGVTcHJpdGVOYW1lOiAnQm91cmJvbicsIG9uRmluaXNoOiB0aGlzLm9uRmluaXNoIH0pO1xyXG4gICAgICAgICAgICB9LCA1MDApO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBJbnB1dCwgR2FtZU9iamVjdHMgfSBmcm9tICdwaGFzZXInO1xyXG5pbXBvcnQgeyBnZXRHYW1lV2lkdGgsIGdldEdhbWVIZWlnaHQsIGRyaW5rVG9Db2xvck1hcCB9IGZyb20gJy4uL2hlbHBlcnMnO1xyXG5pbXBvcnQgeyBNZW51QnV0dG9uIH0gZnJvbSAnLi4vdWkvbWVudS1idXR0b24nO1xyXG5cclxuY29uc3Qgc2NlbmVDb25maWc6IFBoYXNlci5UeXBlcy5TY2VuZXMuU2V0dGluZ3NDb25maWcgPSB7XHJcbiAgYWN0aXZlOiBmYWxzZSxcclxuICB2aXNpYmxlOiBmYWxzZSxcclxuICBrZXk6ICdEaXNjb25uZWN0ZWQnLFxyXG59O1xyXG5jbGFzcyBHYW1lU2NlbmVBcmd1bWVudHMge1xyXG4gIHB1YmxpYyBvbkZpbmlzaDogRnVuY3Rpb247XHJcbn1cclxuZXhwb3J0IGNsYXNzIERpc2Nvbm5lY3RlZFNjZW5lIGV4dGVuZHMgUGhhc2VyLlNjZW5lIHtcclxuICBwdWJsaWMgc3BlZWQgPSAyMDA7XHJcblxyXG4gIHB1YmxpYyByZXN1bHRzOiBBcnJheTxudW1iZXI+O1xyXG4gIHByaXZhdGUgdHJhbnNpdGlvbmluZyA9IGZhbHNlO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKHNjZW5lQ29uZmlnKTtcclxuICB9XHJcbiAgcHVibGljIG9uRmluaXNoOiBGdW5jdGlvbjtcclxuICBwdWJsaWMgdGV4dDE6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0O1xyXG4gIHB1YmxpYyB0ZXh0MjogUGhhc2VyLkdhbWVPYmplY3RzLlRleHQ7XHJcbiAgcHVibGljIHRleHQzOiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dDtcclxuICBwdWJsaWMgdGV4dDQ6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0O1xyXG4gIHB1YmxpYyB0ZXh0NTogUGhhc2VyLkdhbWVPYmplY3RzLlRleHQ7XHJcbiAgcHVibGljIGNsaWNrcyA9IDA7XHJcbiAgcHVibGljIGljZUxldmVsID0gMDtcclxuXHJcbiAgcHVibGljIGluaXQoZGF0YTogR2FtZVNjZW5lQXJndW1lbnRzKTogdm9pZCB7XHJcbiAgICB0aGlzLm9uRmluaXNoID0gZGF0YS5vbkZpbmlzaDtcclxuICB9XHJcblxyXG5cclxuICBwdWJsaWMgY3JlYXRlKCk6IHZvaWQge1xyXG4gICAgY29uc29sZS5sb2coJ1N1Y2Nlc3MnKTtcclxuICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCB9ID0gdGhpcy5zeXMuZ2FtZS5jYW52YXM7XHJcbiAgICB0aGlzLnRyYW5zaXRpb25pbmcgPSBmYWxzZTtcclxuICAgIC8vIEFkZCBhIHBsYXllciBzcHJpdGUgdGhhdCBjYW4gYmUgbW92ZWQgYXJvdW5kLiBQbGFjZSBoaW0gaW4gdGhlIG1pZGRsZSBvZiB0aGUgc2NyZWVuLlxyXG4gICAgLy90aGlzLnZlcm1vdXRoVG9wT25seSA9IHRoaXMuYWRkLnNwcml0ZSh3aWR0aCAvIDIsIGhlaWdodCAvIDIgKyAzMDAsICd2ZXJtb3V0aHRvcG9ubHknKTtcclxuICAgIHRoaXMuYWRkLnJlY3RhbmdsZSh3aWR0aC8yLGhlaWdodC8yLHdpZHRoLCBoZWlnaHQsIDB4MDAwMDAwKTtcclxuICAgIHRoaXMuYWRkLnRleHQod2lkdGgvOCwgKGhlaWdodC80KSAtIDMwLCAgYFlvdSBhcmUgZGlzY29ubmVjdGVkXFxucGxlYXNlIHJlZnJlc2hgLCB7IGNvbG9yOiAnI2ZmZmZmZicgfSk7XHJcbiAgfVxyXG5cclxuICAvL3B1YmxpYyB1cGRhdGUoKTogdm9pZCB7fVxyXG59XHJcbiIsImltcG9ydCBzaWduYWxSID0gcmVxdWlyZSgnQG1pY3Jvc29mdC9zaWduYWxyJyk7XHJcbmltcG9ydCB7IE1lbnVCdXR0b24gfSBmcm9tICcuLi91aS9tZW51LWJ1dHRvbic7XHJcbmltcG9ydCAqIGFzIHF1ZXJ5c3RyaW5nIGZyb20gXCJxdWVyeS1zdHJpbmdcIjtcclxuXHJcbmNvbnN0IHNjZW5lQ29uZmlnOiBQaGFzZXIuVHlwZXMuU2NlbmVzLlNldHRpbmdzQ29uZmlnID0ge1xyXG4gIGFjdGl2ZTogZmFsc2UsXHJcbiAgdmlzaWJsZTogZmFsc2UsXHJcbiAga2V5OiAnRXZlcnlvbmVJbicsXHJcbn07XHJcbmNsYXNzIEdhbWVTY2VuZUFyZ3VtZW50cyB7XHJcbiAgcHVibGljIGh1YkNvbm5lY3Rpb246IHNpZ25hbFIuSHViQ29ubmVjdGlvbjtcclxufVxyXG4vKipcclxuICogVGhlIGluaXRpYWwgc2NlbmUgdGhhdCBzdGFydHMsIHNob3dzIHRoZSBzcGxhc2ggc2NyZWVucywgYW5kIGxvYWRzIHRoZSBuZWNlc3NhcnkgYXNzZXRzLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEV2ZXJ5b25lSW5TY2VuZSBleHRlbmRzIFBoYXNlci5TY2VuZSB7XHJcbiAgcHJpdmF0ZSBodWJDb25uZWN0aW9uOiBzaWduYWxSLkh1YkNvbm5lY3Rpb247XHJcbiAgcHJpdmF0ZSBpbkNvdW50OiBudW1iZXI7XHJcbiAgcHJpdmF0ZSBwbGF5ZXJEaXNwbGF5OiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dDtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKHNjZW5lQ29uZmlnKTtcclxuICB9XHJcbiAgcHVibGljIGluaXQoZGF0YTogR2FtZVNjZW5lQXJndW1lbnRzKTogdm9pZCB7XHJcbiAgICB0aGlzLmh1YkNvbm5lY3Rpb24gPSBkYXRhLmh1YkNvbm5lY3Rpb247XHJcbiAgfVxyXG4gIHB1YmxpYyBjcmVhdGUoKTogdm9pZCB7XHJcbiAgICBjb25zb2xlLmxvZygnUmVhZHkgdXAgbWVudScpO1xyXG4gICAgY29uc29sZS5sb2codGhpcy5odWJDb25uZWN0aW9uKTtcclxuICAgIHRoaXMuaW5Db3VudCA9IDA7XHJcbiAgICAvL3RoaXMuaHViQ29ubmVjdGlvbi5pbnZva2UoJ1JlZ2lzdGVyJywgcXVlcnlzdHJpbmcucGFyc2Uod2luZG93LmxvY2F0aW9uLnNlYXJjaClbXCJyb29tXCJdKTtcclxuICAgIHRoaXMuaHViQ29ubmVjdGlvbi5vbignQXNzaWduJywgKGN1cDogbnVtYmVyLCBhY3Rpb25zOiBudW1iZXJbXSwgcGxheWVyY291bnQ6IG51bWJlciwgcm91bmQ6IG51bWJlcikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhgY3VwOiAke2N1cH0gYWN0aW9uczogJHthY3Rpb25zfSBwbGF5ZXJjb3VudDogJHtwbGF5ZXJjb3VudH0gcm91bmQgbnVtYmVyOiAke3JvdW5kfWApO1xyXG4gICAgICB2YXIgaXRlbSA9IHtcclxuICAgICAgICBwbGF5ZXJjb3VudDogcGxheWVyY291bnQsXHJcbiAgICAgICAgcm91bmROdW1iZXI6IHJvdW5kLFxyXG4gICAgICAgIGN1cE51bWJlcjogY3VwLFxyXG4gICAgICAgIGFjdGlvbnM6IGFjdGlvbnNcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmh1YkNvbm5lY3Rpb24ub2ZmKCdBc3NpZ24nKTtcclxuICAgICAgdGhpcy5zY2VuZS5zdGFydCgnR2FtZScsIHtodWJDb25uZWN0aW9uOiB0aGlzLmh1YkNvbm5lY3Rpb24sIHNldHVwOiBpdGVtfSk7XHJcbiAgICB9KTtcclxuICAgIHRoaXMuaHViQ29ubmVjdGlvbi5vbignVXBkYXRlUmVhZHlDb3VudCcsIChpbkNvdW50OiBudW1iZXIpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coYGluY291bnQgJHtpbkNvdW50fWApO1xyXG4gICAgICB0aGlzLmluQ291bnQgPSBpbkNvdW50O1xyXG4gICAgfSk7XHJcblxyXG4gICAgdmFyIHJvb21jb2RlID0gcXVlcnlzdHJpbmcucGFyc2Uod2luZG93LmxvY2F0aW9uLnNlYXJjaCk7XHJcbiAgICB2YXIgcm9vbSA9IHJvb21jb2RlW1wicm9vbVwiXTtcclxuICAgIHRoaXMuYWRkXHJcbiAgICAgIC50ZXh0KDEwMCwgNTAsIGBUZWFtICR7cm9vbX1gLCB7XHJcbiAgICAgICAgY29sb3I6ICcjRkZGRkZGJyxcclxuICAgICAgfSlcclxuICAgICAgLnNldEZvbnRTaXplKDI0KTtcclxuICAgIHRoaXMucGxheWVyRGlzcGxheSA9IHRoaXMuYWRkLnRleHQoMTAwLCAxMDAsIGBUZXh0OiAke3RoaXMuaW5Db3VudH1gKTtcclxuICAgIG5ldyBNZW51QnV0dG9uKHRoaXMsIDEwMCwgMTUwLCAnRXZlcnlvbmUgaXMgcmVhZHknLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMuaHViQ29ubmVjdGlvbi5pbnZva2UoJ0FsbFJlYWR5JykudGhlbigoKT0+IGNvbnNvbGUubG9nKFwiZ290IGJhY2sgZnJvbSBhbHJlYWR5XCIpKTtcclxuICAgICAgY29uc29sZS5sb2coXCJjYWxsZWQgYWxscmVhZHlcIilcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHVwZGF0ZSgpOiB2b2lke1xyXG4gICAgdGhpcy5wbGF5ZXJEaXNwbGF5LnNldFRleHQoYFRleHQ6ICR7dGhpcy5pbkNvdW50fWApO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBJbnB1dCwgR2FtZU9iamVjdHMgfSBmcm9tICdwaGFzZXInO1xyXG5pbXBvcnQgeyBnZXRHYW1lV2lkdGgsIGdldEdhbWVIZWlnaHQsIEluZ3JlZGllbnRzLCBkcmlua1RvQ29sb3JNYXAgfSBmcm9tICcuLi9oZWxwZXJzJztcclxuaW1wb3J0ICogYXMgc2lnbmFsUiBmcm9tICdAbWljcm9zb2Z0L3NpZ25hbHInO1xyXG4vL2ltcG9ydCB7IEluZ3JlZGllbnRzIH0gZnJvbSAnLi4vLi4vLi4vQ2xpZW50L3NyYy9SZWZlcmVuY2UnO1xyXG5pbXBvcnQgeyBNZW51QnV0dG9uIH0gZnJvbSAnLi4vdWkvbWVudS1idXR0b24nO1xyXG5pbXBvcnQgeyBHbGFzc0J1dHRvbiB9IGZyb20gJy4uL3VpL2dsYXNzLWJ1dHRvbic7XHJcbmltcG9ydCB7IFNjZW5lQnV0dG9uIH0gZnJvbSAnLi4vdWkvc2NlbmUtYnV0dG9uJztcclxuXHJcbmNvbnN0IHNjZW5lQ29uZmlnOiBQaGFzZXIuVHlwZXMuU2NlbmVzLlNldHRpbmdzQ29uZmlnID0ge1xyXG4gIGFjdGl2ZTogZmFsc2UsXHJcbiAgdmlzaWJsZTogZmFsc2UsXHJcbiAga2V5OiAnR2FtZScsXHJcbn07XHJcblxyXG5lbnVtIEdhbWVQaGFzZSB7XHJcbiAgVW5hc3NpZ25lZCxcclxuICBBc3NpZ25lZCxcclxuICBTdGFydGVkLFxyXG4gIFJlc3VsdGVkLFxyXG59XHJcbmNsYXNzIFNldHVwe1xyXG4gIHB1YmxpYyBwbGF5ZXJjb3VudDogbnVtYmVyO1xyXG4gIHB1YmxpYyByb3VuZE51bWJlcjogbnVtYmVyO1xyXG4gIHB1YmxpYyBjdXBOdW1iZXI6IG51bWJlcjtcclxuICBwdWJsaWMgYWN0aW9uczogbnVtYmVyW107XHJcbn1cclxuY2xhc3MgR2FtZVNjZW5lQXJndW1lbnRzIHtcclxuICBwdWJsaWMgaHViQ29ubmVjdGlvbjogc2lnbmFsUi5IdWJDb25uZWN0aW9uO1xyXG4gIHB1YmxpYyBzZXR1cDogU2V0dXA7XHJcbn1cclxuXHJcbmNsYXNzIHN0YXRlVXBkYXRle1xyXG4gIHB1YmxpYyBjdXBTdGF0ZTogQXJyYXk8bnVtYmVyPjtcclxuICBwdWJsaWMgY3VwTG9ja3M6IEFycmF5PG51bWJlcj47XHJcbn1cclxuZXhwb3J0IGNsYXNzIEdhbWVTY2VuZSBleHRlbmRzIFBoYXNlci5TY2VuZSB7XHJcbiAgcHVibGljIHNwZWVkID0gMjAwO1xyXG5cclxuICBwcml2YXRlIGh1YkNvbm5lY3Rpb246IHNpZ25hbFIuSHViQ29ubmVjdGlvbjtcclxuXHJcbiAgcHJpdmF0ZSBjdXJzb3JLZXlzOiBQaGFzZXIuVHlwZXMuSW5wdXQuS2V5Ym9hcmQuQ3Vyc29yS2V5cztcclxuICBwcml2YXRlIHZlcm1vdXRoOiBQaGFzZXIuR2FtZU9iamVjdHMuU3ByaXRlO1xyXG4gIHByaXZhdGUgYm91cmJvbjogUGhhc2VyLkdhbWVPYmplY3RzLlNwcml0ZTtcclxuICBwcml2YXRlIGljZTogUGhhc2VyLkdhbWVPYmplY3RzLlNwcml0ZTtcclxuICBwcml2YXRlIG9yYW5nZTogUGhhc2VyLkdhbWVPYmplY3RzLlNwcml0ZTtcclxuICBwcml2YXRlIGVtcHR5R2xhc3M6IFBoYXNlci5HYW1lT2JqZWN0cy5TcHJpdGU7XHJcbiAgcHJpdmF0ZSBmaWxsZWRnbGFzczE6IFBoYXNlci5HYW1lT2JqZWN0cy5SZWN0YW5nbGU7XHJcbiAgcHJpdmF0ZSBmaWxsZWRnbGFzczI6IFBoYXNlci5HYW1lT2JqZWN0cy5SZWN0YW5nbGU7XHJcbiAgcHJpdmF0ZSBmaWxsZWRnbGFzczM6IFBoYXNlci5HYW1lT2JqZWN0cy5SZWN0YW5nbGU7XHJcbiAgcHJpdmF0ZSBmaWxsZWRnbGFzczQ6IFBoYXNlci5HYW1lT2JqZWN0cy5SZWN0YW5nbGU7XHJcbiAgcHJpdmF0ZSBzaGFrZXI6IFBoYXNlci5HYW1lT2JqZWN0cy5TcHJpdGU7XHJcbiAgcHJpdmF0ZSBtdWRkbGVyOiBQaGFzZXIuR2FtZU9iamVjdHMuU3ByaXRlO1xyXG4gIHByaXZhdGUganVpY2VyOiBQaGFzZXIuR2FtZU9iamVjdHMuU3ByaXRlO1xyXG4gIHByaXZhdGUgc3VibWl0QnV0dG9uOiBNZW51QnV0dG9uO1xyXG4gIHByaXZhdGUgZ2xhc3NCdXR0b25zOiBBcnJheTxHbGFzc0J1dHRvbj4gPSBbXTtcclxuICBwcml2YXRlIGFjdGlvbkJ1dHRvbnM6IEFycmF5PFBoYXNlci5HYW1lT2JqZWN0cy5TcHJpdGU+O1xyXG4gIHByaXZhdGUgc2VsZWN0ZWRUYXJnZXQ6IHN0cmluZztcclxuICBwcml2YXRlIHJlbmRlcjogYm9vbGVhbjtcclxuICBwdWJsaWMgY3VwTnVtYmVyVGV4dDogUGhhc2VyLkdhbWVPYmplY3RzLlRleHQ7XHJcblxyXG4gIC8vIHN0YXRlIHdoaWNoIGlzIHBsYWlubHkgY29waWVkIGZyb20gcGxheXRlc3QgMVxyXG4gIHByaXZhdGUgZ2xhc3NDb250ZW50czogQXJyYXk8bnVtYmVyPjtcclxuICBwcml2YXRlIGN1cExvY2tzOiBBcnJheTxudW1iZXI+O1xyXG4gIHByaXZhdGUgcmVzdWx0czogQXJyYXk8bnVtYmVyPjtcclxuICBwcml2YXRlIHBoYXNlOiBHYW1lUGhhc2U7XHJcbiAgcHJpdmF0ZSBmaW5hbDogYm9vbGVhbjtcclxuICBwcml2YXRlIHBsYXllckNvdW50OiBudW1iZXI7XHJcbiAgcHJpdmF0ZSBhY3Rpb25zOiBBcnJheTxudW1iZXI+O1xyXG4gIHByaXZhdGUgcm91bmROdW1iZXI6IG51bWJlcjtcclxuICBwcml2YXRlIGN1cE51bWJlcjogbnVtYmVyO1xyXG5cclxuICBwcml2YXRlIGZ1bGxTdHVmZjogQXJyYXk8UGhhc2VyLkdhbWVPYmplY3RzLlNwcml0ZT47XHJcblxyXG4gIHByaXZhdGUgY29udGVudHM6IHN0cmluZ1tdID0gW107XHJcbiAgcHJpdmF0ZSBnbGFzc0ZpbGxlcnM6IFBoYXNlci5HYW1lT2JqZWN0cy5SZWN0YW5nbGVbXSA9IFtdO1xyXG5cclxuICBwcml2YXRlQ29sb3JNYXA6IE1hcDxzdHJpbmcsIG51bWJlcj4gPSBuZXcgTWFwKFtcclxuICAgIFsnYm91cmJvbicsIDB4ZGI3OTAwXSxcclxuICAgIFsndmVybW91dGgnLCAweDU1MDEwM10sXHJcbiAgXSk7XHJcblxyXG4gIHByaXZhdGUgaXNQb3VyaW5nID0gMDtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcihzY2VuZUNvbmZpZyk7XHJcbiAgfVxyXG4gIHB1YmxpYyB0ZXh0MTogUGhhc2VyLkdhbWVPYmplY3RzLlRleHQ7XHJcbiAgcHVibGljIHRleHQyOiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dDtcclxuXHJcbiAgcHJpdmF0ZSBnZXRDb29raWUgPSAoY25hbWUpID0+IHtcclxuICAgIGNvbnN0IG5hbWUgPSBjbmFtZSArICc9JztcclxuICAgIGNvbnN0IGRlY29kZWRDb29raWUgPSBkZWNvZGVVUklDb21wb25lbnQoZG9jdW1lbnQuY29va2llKTtcclxuICAgIGNvbnN0IGNhID0gZGVjb2RlZENvb2tpZS5zcGxpdCgnOycpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjYS5sZW5ndGg7IGkrKykge1xyXG4gICAgICBsZXQgYyA9IGNhW2ldO1xyXG4gICAgICB3aGlsZSAoYy5jaGFyQXQoMCkgPT0gJyAnKSB7XHJcbiAgICAgICAgYyA9IGMuc3Vic3RyaW5nKDEpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChjLmluZGV4T2YobmFtZSkgPT0gMCkge1xyXG4gICAgICAgIHJldHVybiBjLnN1YnN0cmluZyhuYW1lLmxlbmd0aCwgYy5sZW5ndGgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gJyc7XHJcbiAgfTtcclxuXHJcbiAgcHVibGljIGluaXQoZGF0YTogR2FtZVNjZW5lQXJndW1lbnRzKTogdm9pZCB7XHJcbiAgICB0aGlzLmh1YkNvbm5lY3Rpb24gPSBkYXRhLmh1YkNvbm5lY3Rpb247XHJcbiAgICB0aGlzLnBsYXllckNvdW50ID0gZGF0YS5zZXR1cC5wbGF5ZXJjb3VudDtcclxuICAgIHRoaXMuYWN0aW9ucyA9IGRhdGEuc2V0dXAuYWN0aW9ucztcclxuICAgIHRoaXMucm91bmROdW1iZXIgPSBkYXRhLnNldHVwLnJvdW5kTnVtYmVyO1xyXG4gICAgdGhpcy5jdXBOdW1iZXIgPSBkYXRhLnNldHVwLmN1cE51bWJlcjtcclxuICB9XHJcblxyXG5cclxuICBwdWJsaWMgY3JlYXRlKCk6IHZvaWQge1xyXG4gICAgY29uc29sZS5sb2coJ0dhbWUnKTtcclxuICAgIGNvbnNvbGUubG9nKCdjb29raWU6ICcgKyBkb2N1bWVudC5jb29raWUpO1xyXG4gICAgdGhpcy5yZXNldCgpO1xyXG4gICAgdGhpcy5zZWxlY3RlZFRhcmdldCA9IHRoaXMuY3VwTnVtYmVyLnRvU3RyaW5nKCk7XHJcbiAgICB0aGlzLmZ1bGxTdHVmZiA9IFtdO1xyXG4gICAgLy8gU2lnbmFsUiBTdHVmZlxyXG4gICAgdGhpcy5zZXR1cEh1Yih0aGlzLmh1YkNvbm5lY3Rpb24pO1xyXG5cclxuICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCB9ID0gdGhpcy5zeXMuZ2FtZS5jYW52YXM7XHJcbiAgICB0aGlzLmVtcHR5R2xhc3MgPSB0aGlzLmFkZC5zcHJpdGUod2lkdGggLyAyLCBoZWlnaHQgLyAzLCAnZW1wdHlnbGFzcycpLnNldERlcHRoKDApO1xyXG4gICAgXHJcblxyXG5cclxuICAgIGlmKHRoaXMuY3VwTnVtYmVyIDwgNCl7XHJcblxyXG4gICAgICB0aGlzLmN1cE51bWJlclRleHQgPSB0aGlzLmFkZC50ZXh0KHdpZHRoLzQsIGhlaWdodC8xMCAtIDMwLCBgWW91IGFyZSBjdXAgbnVtYmVyICR7KHRoaXMuY3VwTnVtYmVyKzEpfWAsIHsgY29sb3I6ICcjZmZmZmZmJyB9KTtcclxuICAgICAgLy8gQWRkIGEgcGxheWVyIHNwcml0ZSB0aGF0IGNhbiBiZSBtb3ZlZCBhcm91bmQuIFBsYWNlIGhpbSBpbiB0aGUgbWlkZGxlIG9mIHRoZSBzY3JlZW4uXHJcbiAgICB0aGlzLmZpbGxlZGdsYXNzMSA9IHRoaXMuYWRkLnJlY3RhbmdsZSh3aWR0aCAvIDIsIGhlaWdodCAvIDMgKyAodGhpcy5lbXB0eUdsYXNzLmRpc3BsYXlIZWlnaHQvNCksIHRoaXMuZW1wdHlHbGFzcy5kaXNwbGF5V2lkdGgsIHRoaXMuZW1wdHlHbGFzcy5kaXNwbGF5SGVpZ2h0LzQsIDB4ZmZmZmZmKTtcclxuICAgIHRoaXMuZmlsbGVkZ2xhc3MyID0gdGhpcy5hZGQucmVjdGFuZ2xlKHdpZHRoIC8gMiwgaGVpZ2h0IC8gMyArICgzICogdGhpcy5lbXB0eUdsYXNzLmRpc3BsYXlIZWlnaHQvNCksIHRoaXMuZW1wdHlHbGFzcy5kaXNwbGF5V2lkdGgsIHRoaXMuZW1wdHlHbGFzcy5kaXNwbGF5SGVpZ2h0LzQsIDB4MDAwMGZmKTtcclxuICAgIHRoaXMuZmlsbGVkZ2xhc3MzID0gdGhpcy5hZGQucmVjdGFuZ2xlKHdpZHRoIC8gMiwgaGVpZ2h0IC8gMyArICh0aGlzLmVtcHR5R2xhc3MuZGlzcGxheUhlaWdodC8yKSwgdGhpcy5lbXB0eUdsYXNzLmRpc3BsYXlXaWR0aCwgdGhpcy5lbXB0eUdsYXNzLmRpc3BsYXlIZWlnaHQvNCwgMHgwMGZmMDApO1xyXG4gICAgdGhpcy5maWxsZWRnbGFzczQgPSB0aGlzLmFkZC5yZWN0YW5nbGUod2lkdGggLyAyLCBoZWlnaHQgLyAzLCB0aGlzLmVtcHR5R2xhc3MuZGlzcGxheVdpZHRoLCB0aGlzLmVtcHR5R2xhc3MuZGlzcGxheUhlaWdodC80LCAweEZGMDAwMCk7XHJcbiAgICBcclxuICAgIHRoaXMuZmlsbGVkZ2xhc3MxLnNldFNjYWxlKDAuNSkuc2V0QWxwaGEoMSkuc2V0RGVwdGgoMSkuc2V0QmxlbmRNb2RlKFBoYXNlci5CbGVuZE1vZGVzLk1VTFRJUExZKTtcclxuICAgIHRoaXMuZmlsbGVkZ2xhc3MyLnNldFNjYWxlKDAuNSkuc2V0QWxwaGEoMSkuc2V0RGVwdGgoMSkuc2V0QmxlbmRNb2RlKFBoYXNlci5CbGVuZE1vZGVzLk1VTFRJUExZKTtcclxuICAgIHRoaXMuZmlsbGVkZ2xhc3MzLnNldFNjYWxlKDAuNSkuc2V0QWxwaGEoMSkuc2V0RGVwdGgoMSkuc2V0QmxlbmRNb2RlKFBoYXNlci5CbGVuZE1vZGVzLk1VTFRJUExZKTtcclxuICAgIHRoaXMuZmlsbGVkZ2xhc3M0LnNldFNjYWxlKDAuNSkuc2V0QWxwaGEoMSkuc2V0RGVwdGgoMSkuc2V0QmxlbmRNb2RlKFBoYXNlci5CbGVuZE1vZGVzLk1VTFRJUExZKTtcclxuICAgIHRoaXMuZW1wdHlHbGFzcy5zZXRTY2FsZSgwLjUpO1xyXG4gICAgXHJcbiAgICB0aGlzLmZpbGxlZGdsYXNzMS5zZXRPcmlnaW4oMCwwKVxyXG4gICAgdGhpcy5maWxsZWRnbGFzczIuc2V0T3JpZ2luKDAsMClcclxuICAgIHRoaXMuZmlsbGVkZ2xhc3MzLnNldE9yaWdpbigwLDApXHJcbiAgICB0aGlzLmZpbGxlZGdsYXNzNC5zZXRPcmlnaW4oMCwwKVxyXG4gICAgXHJcbiAgICB0aGlzLmZpbGxlZGdsYXNzMS5oZWlnaHQgPSB0aGlzLmVtcHR5R2xhc3MuZGlzcGxheUhlaWdodC8yO1xyXG4gICAgdGhpcy5maWxsZWRnbGFzczIuaGVpZ2h0ID0gdGhpcy5lbXB0eUdsYXNzLmRpc3BsYXlIZWlnaHQvMjtcclxuICAgIHRoaXMuZmlsbGVkZ2xhc3MzLmhlaWdodCA9IHRoaXMuZW1wdHlHbGFzcy5kaXNwbGF5SGVpZ2h0LzI7XHJcbiAgICB0aGlzLmZpbGxlZGdsYXNzNC5oZWlnaHQgPSB0aGlzLmVtcHR5R2xhc3MuZGlzcGxheUhlaWdodC8yO1xyXG4gICAgXHJcbiAgICB0aGlzLmZpbGxlZGdsYXNzMS5zZXRQb3NpdGlvbih0aGlzLmVtcHR5R2xhc3MuZ2V0VG9wTGVmdCgpLngsIHRoaXMuZW1wdHlHbGFzcy5nZXRUb3BMZWZ0KCkueSk7XHJcbiAgICB0aGlzLmZpbGxlZGdsYXNzMi5zZXRQb3NpdGlvbih0aGlzLmZpbGxlZGdsYXNzMS5nZXRCb3R0b21MZWZ0KCkueCwgdGhpcy5maWxsZWRnbGFzczEuZ2V0Qm90dG9tTGVmdCgpLnkpO1xyXG4gICAgdGhpcy5maWxsZWRnbGFzczMuc2V0UG9zaXRpb24odGhpcy5maWxsZWRnbGFzczIuZ2V0Qm90dG9tTGVmdCgpLngsIHRoaXMuZmlsbGVkZ2xhc3MyLmdldEJvdHRvbUxlZnQoKS55KTtcclxuICAgIHRoaXMuZmlsbGVkZ2xhc3M0LnNldFBvc2l0aW9uKHRoaXMuZmlsbGVkZ2xhc3MzLmdldEJvdHRvbUxlZnQoKS54LCB0aGlzLmZpbGxlZGdsYXNzMy5nZXRCb3R0b21MZWZ0KCkueSk7XHJcbiAgICB0aGlzLnN1Ym1pdEJ1dHRvbiA9IG5ldyBNZW51QnV0dG9uKFxyXG4gICAgICB0aGlzLFxyXG4gICAgICB0aGlzLmVtcHR5R2xhc3MuZ2V0Qm90dG9tQ2VudGVyKCkueC01MCxcclxuICAgICAgdGhpcy5lbXB0eUdsYXNzLmdldFRvcENlbnRlcigpLnkgLSBoZWlnaHQvMTAsXHJcbiAgICAgICdTZXJ2ZSBHbGFzcycsXHJcbiAgICAgICgpID0+IHtcclxuICAgICAgICB0aGlzLnJlbW90ZVN1Ym1pdGN1cCgpO1xyXG4gICAgICB9LFxyXG4gICAgICApO1xyXG4gICAgICBcclxuXHJcbiAgICAgIFxyXG5cclxuICAgIHRoaXMuc3VibWl0QnV0dG9uLnNldFgodGhpcy5zdWJtaXRCdXR0b24ueCAtIHRoaXMuc3VibWl0QnV0dG9uLmRpc3BsYXlXaWR0aCAvIDIpO1xyXG4gICAgdGhpcy5zdWJtaXRCdXR0b24ubGFiZWwuc2V0WCh0aGlzLnN1Ym1pdEJ1dHRvbi54ICsgdGhpcy5zdWJtaXRCdXR0b24ucGFkZGluZyk7XHJcblxyXG4gICAgXHJcblxyXG4gICAgbmV3IFNjZW5lQnV0dG9uKHRoaXMsdGhpcy5zdWJtaXRCdXR0b24uZ2V0VG9wUmlnaHQoKS54ICsgMTUsXHJcbiAgICB0aGlzLmVtcHR5R2xhc3MuZ2V0VG9wQ2VudGVyKCkueSAtIGhlaWdodC8xMCwgJ0Rpc2NhcmQnLCAoKSA9PiB0aGlzLnJlbW90ZUVtcHR5Q3VwKCkgKVxyXG5cclxuICAgIHRoaXMuZ2xhc3NGaWxsZXJzLnB1c2godGhpcy5maWxsZWRnbGFzczQpO1xyXG4gICAgdGhpcy5nbGFzc0ZpbGxlcnMucHVzaCh0aGlzLmZpbGxlZGdsYXNzMyk7XHJcbiAgICB0aGlzLmdsYXNzRmlsbGVycy5wdXNoKHRoaXMuZmlsbGVkZ2xhc3MyKTtcclxuICAgIHRoaXMuZ2xhc3NGaWxsZXJzLnB1c2godGhpcy5maWxsZWRnbGFzczEpO1xyXG4vKlxyXG4qL1xyXG4gIFxyXG4gICAgdGhpcy5pbnB1dC5vbignZHJhZ2VuZCcsIChwb2ludGVyLCBnYW1lT2JqZWN0KSA9PiB7XHJcbiAgICAgIGdhbWVPYmplY3QuY2xlYXJUaW50KCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBUaGlzIGlzIGEgbmljZSBoZWxwZXIgUGhhc2VyIHByb3ZpZGVzIHRvIGNyZWF0ZSBsaXN0ZW5lcnMgZm9yIHNvbWUgb2YgdGhlIG1vc3QgY29tbW9uIGtleXMuXHJcbiAgICB0aGlzLmN1cnNvcktleXMgPSB0aGlzLmlucHV0LmtleWJvYXJkLmNyZWF0ZUN1cnNvcktleXMoKTtcclxuXHJcbiAgICB0aGlzLnRleHQxID0gdGhpcy5hZGQudGV4dCgxMCwgMTAsICcnLCB7IGNvbG9yOiAnIzAwZmYwMCcgfSk7XHJcbiAgICB0aGlzLnRleHQyID0gdGhpcy5hZGQudGV4dCg1MDAsIDEwLCAnJywgeyBjb2xvcjogJyMwMGZmMDAnIH0pO1xyXG5cclxuXHJcbiAgICB0aGlzLmFjdGlvbnMuZm9yRWFjaCgoZWxlbWVudCwgaWR4KSA9PiB7XHJcbiAgICAgIGxldCBuYW1lID0gSW5ncmVkaWVudHNbZWxlbWVudF07XHJcbiAgICAgIC8vbGV0IGFjdGlvbkJ1dHRvbiA9IG5ldyBTY2VuZUJ1dHRvbih0aGlzLCB3aWR0aCAqIGlkeCAvIDUsIGhlaWdodCAqIDAuNzUsIG5hbWUsICgpPT57fSk7XHJcbiAgICAgIGxldCBuZXh0U2NlbmUgPSBuYW1lO1xyXG4gICAgICBjb25zb2xlLmxvZyhuYW1lKVxyXG4gICAgICBsZXQgdG1wID0gdGhpcy5hZGQuc3ByaXRlKCh3aWR0aC81KSogKGlkeCArIDEpLCBoZWlnaHQgKiAwLjc1LCBuYW1lKS5zZXRJbnRlcmFjdGl2ZSgpO1xyXG4gICAgICBpZihlbGVtZW50ID49IDEwKXtcclxuICAgICAgICBuZXh0U2NlbmUgPSAnUG91cic7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSBpZiAobmFtZS5pbmNsdWRlcyhcIkp1aWNlXCIpKXtcclxuICAgICAgICBuZXh0U2NlbmUgPSAnSnVpY2VyJ1xyXG4gICAgICB9XHJcbiAgICAgIHRtcC5zZXRTY2FsZSgwLjIpO1xyXG4gICAgICB0bXAub24oJ3BvaW50ZXJkb3duJywgKCk9PiB7XHJcbiAgICAgICAgdGhpcy5zY2VuZS5zZXRWaXNpYmxlKGZhbHNlKTtcclxuICAgICAgICB0aGlzLnNjZW5lLnBhdXNlKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJuZXh0IFwiICsgbmV4dFNjZW5lKTtcclxuICAgICAgICB0aGlzLnNjZW5lLmxhdW5jaChuZXh0U2NlbmUsIHtvbkZpbmlzaDogKCkgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJjYWxsZWRcIilcclxuICAgICAgICAgIHRoaXMuc2NlbmUuc2V0VmlzaWJsZSh0cnVlKTtcclxuICAgICAgICAgIHRoaXMucmVtb3RlU2VuZEFjdGlvbihlbGVtZW50LCBOdW1iZXIucGFyc2VJbnQodGhpcy5zZWxlY3RlZFRhcmdldCkudmFsdWVPZigpKTtcclxuICAgICAgICAgIHRoaXMuc2NlbmUucmVzdW1lKCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBCb3R0bGVTcHJpdGVOYW1lOiBuYW1lfSk7XHJcbiAgICAgICAgY29uc29sZS5sb2cobmFtZSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLmdsYXNzQnV0dG9ucyA9IFtdO1xyXG4gICAgdGhpcy5hZGQudGV4dCh0aGlzLmVtcHR5R2xhc3MuZ2V0VG9wTGVmdCgpLngsXHJcbiAgICB0aGlzLmVtcHR5R2xhc3MuZ2V0Qm90dG9tQ2VudGVyKCkueSArIGhlaWdodCAvIDE1IC0xNSxcInRhcmdldCBjdXA6XCIgKVxyXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IDQ7IGkrKyl7XHJcbiAgICAgIHRoaXMuZ2xhc3NCdXR0b25zLnB1c2gobmV3IEdsYXNzQnV0dG9uKFxyXG4gICAgICAgIHRoaXMsXHJcbiAgICAgICAgdGhpcy5lbXB0eUdsYXNzLmdldFRvcExlZnQoKS54ICsgaSAqIDMwLFxyXG4gICAgICAgIHRoaXMuZW1wdHlHbGFzcy5nZXRCb3R0b21DZW50ZXIoKS55ICsgaGVpZ2h0IC8gMTUsXHJcbiAgICAgICAgKGkrMSkudG9TdHJpbmcoKSxcclxuICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLnJlbmRlciA9IHRydWU7IFxyXG4gICAgICAgICAgdGhpcy5zZWxlY3RlZFRhcmdldCA9IGkudG9TdHJpbmcoKTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwic2VsZWN0ZWQgPSBcIiArIHRoaXMuc2VsZWN0ZWRUYXJnZXQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICApKVxyXG4gICAgICB9XHJcbiAgfVxyXG4gIGVsc2V7XHJcbiAgICB0aGlzLmVtcHR5R2xhc3Muc2V0U2NhbGUoMC41KTtcclxuICAgIHRoaXMuZW1wdHlHbGFzcy5zZXRWaXNpYmxlKGZhbHNlKTtcclxuXHJcbiAgICB0aGlzLmFjdGlvbnMuZm9yRWFjaCgoZWxlbWVudCwgaWR4KSA9PiB7XHJcbiAgICAgIGxldCBuYW1lID0gSW5ncmVkaWVudHNbZWxlbWVudF07XHJcbiAgICAgIC8vbGV0IGFjdGlvbkJ1dHRvbiA9IG5ldyBTY2VuZUJ1dHRvbih0aGlzLCB3aWR0aCAqIGlkeCAvIDUsIGhlaWdodCAqIDAuNzUsIG5hbWUsICgpPT57fSk7XHJcbiAgICAgIGxldCBuZXh0U2NlbmUgPSBuYW1lO1xyXG4gICAgICBjb25zb2xlLmxvZyhuYW1lKVxyXG4gICAgICBsZXQgdG1wID0gdGhpcy5hZGQuc3ByaXRlKCh3aWR0aC8yKSwgKGhlaWdodCAvIDUpICogKGlkeCArIDEpLCBuYW1lKS5zZXRJbnRlcmFjdGl2ZSgpO1xyXG4gICAgICBpZihlbGVtZW50ID49IDEwKXtcclxuICAgICAgICBuZXh0U2NlbmUgPSAnUG91cic7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSBpZiAobmFtZS5pbmNsdWRlcyhcIkp1aWNlXCIpKXtcclxuICAgICAgICBuZXh0U2NlbmUgPSAnSnVpY2VyJ1xyXG4gICAgICB9XHJcbiAgICAgIHRtcC5zZXRTY2FsZSgwLjIpO1xyXG4gICAgICB0bXAub24oJ3BvaW50ZXJkb3duJywgKCk9PiB7XHJcbiAgICAgICAgdGhpcy5zY2VuZS5zZXRWaXNpYmxlKGZhbHNlKTtcclxuICAgICAgICB0aGlzLnNjZW5lLnBhdXNlKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJuZXh0IFwiICsgbmV4dFNjZW5lKTtcclxuICAgICAgICB0aGlzLnNjZW5lLmxhdW5jaChuZXh0U2NlbmUsIHtvbkZpbmlzaDogKCkgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJjYWxsZWRcIilcclxuICAgICAgICAgIHRoaXMuc2NlbmUuc2V0VmlzaWJsZSh0cnVlKTtcclxuICAgICAgICAgIHRoaXMucmVtb3RlU2VuZEFjdGlvbihlbGVtZW50LCBOdW1iZXIucGFyc2VJbnQodGhpcy5zZWxlY3RlZFRhcmdldCkudmFsdWVPZigpKTtcclxuICAgICAgICAgIHRoaXMuc2NlbmUucmVzdW1lKCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBCb3R0bGVTcHJpdGVOYW1lOiBuYW1lfSk7XHJcbiAgICAgICAgY29uc29sZS5sb2cobmFtZSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5nbGFzc0J1dHRvbnMgPSBbXTtcclxuICAgIHRoaXMuYWRkLnRleHQodGhpcy5lbXB0eUdsYXNzLmdldFRvcExlZnQoKS54LFxyXG4gICAgaGVpZ2h0LzEyLTE1LFwidGFyZ2V0IGN1cDpcIiApXHJcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgNDsgaSsrKXtcclxuICAgICAgdGhpcy5nbGFzc0J1dHRvbnMucHVzaChuZXcgR2xhc3NCdXR0b24oXHJcbiAgICAgICAgdGhpcyxcclxuICAgICAgICB0aGlzLmVtcHR5R2xhc3MuZ2V0VG9wTGVmdCgpLnggKyBpICogMzAsXHJcbiAgICAgICAgaGVpZ2h0LzEyLFxyXG4gICAgICAgIChpKzEpLnRvU3RyaW5nKCksXHJcbiAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5yZW5kZXIgPSB0cnVlOyBcclxuICAgICAgICAgIHRoaXMuc2VsZWN0ZWRUYXJnZXQgPSBpLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcInNlbGVjdGVkID0gXCIgKyB0aGlzLnNlbGVjdGVkVGFyZ2V0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgKSlcclxuICAgICAgfVxyXG4gIH1cclxuXHJcblxyXG4gICBcclxuICAgICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMucmVtb3RlRmV0Y2hTdGF0ZSgpO1xyXG4gICAgICB9LCAxMDAwMCk7XHJcbiAgICAgIHRoaXMucmVtb3RlRmV0Y2hTdGF0ZSgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHVwZGF0ZSgpOiB2b2lkIHtcclxuXHJcbiAgICBpZih0aGlzLnJlbmRlcil7XHJcbiAgICAvLyBzZWxlY3QgYnV0dG9ucyBcclxuICAgIHRoaXMuZ2xhc3NCdXR0b25zLmZvckVhY2goKGVsZW1lbnQ6IEdsYXNzQnV0dG9uLCBpZHg6IE51bWJlcikgPT4ge1xyXG4gICAgICBpZih0aGlzLmN1cExvY2tzLmluY2x1ZGVzKGlkeC52YWx1ZU9mKCkpKXtcclxuICAgICAgICBlbGVtZW50LmVudGVyTWVudUJ1dHRvbkJsb2NrZWRTdGF0ZSgpO1xyXG4gICAgICB9ZWxzZSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRUYXJnZXQgPT0gaWR4LnRvU3RyaW5nKCkpe1xyXG4gICAgICAgICAgZWxlbWVudC5lbnRlck1lbnVCdXR0b25BY3RpdmVTdGF0ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgZWxlbWVudC5lbnRlck1lbnVCdXR0b25SZXN0U3RhdGUoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuXHJcbiAgICAvLyBvdmVyd3JpdGluZyBcclxuICAgIHRoaXMuZ2xhc3NGaWxsZXJzLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgIGVsZW1lbnQuc2V0VmlzaWJsZShmYWxzZSk7XHJcbiAgICB9KTtcclxuICAgIHRoaXMuZnVsbFN0dWZmLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgIGVsZW1lbnQuZGVzdHJveSgpO1xyXG4gICAgfSk7XHJcbiAgICAvLyBpbXBsZW1lbnRpb25cclxuICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCB9ID0gdGhpcy5zeXMuZ2FtZS5jYW52YXM7XHJcbiAgICBsZXQgY3VycmVudFBvc2l0aW9uID0gMDtcclxuICAgIHRoaXMuZ2xhc3NDb250ZW50cy5mb3JFYWNoKChlbGVtZW50LCBpZHgpID0+IHtcclxuICAgICAgbGV0IG5hbWUgPSBJbmdyZWRpZW50c1tlbGVtZW50XTtcclxuICAgICAgY29uc29sZS5sb2coXCJyZW5kZXJpbmcgXCIgKyBuYW1lICArIGN1cnJlbnRQb3NpdGlvbilcclxuICAgICAgaWYoZHJpbmtUb0NvbG9yTWFwLmhhcyhuYW1lKSl7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJ0cmllZCB0byB0aW50IFwiICsgZHJpbmtUb0NvbG9yTWFwLmdldChuYW1lKSk7XHJcbiAgICAgICAgdGhpcy5nbGFzc0ZpbGxlcnNbY3VycmVudFBvc2l0aW9uXS5zZXRWaXNpYmxlKHRydWUpXHJcbiAgICAgICAgdGhpcy5nbGFzc0ZpbGxlcnNbY3VycmVudFBvc2l0aW9uXS5maWxsQ29sb3IgPSAoZHJpbmtUb0NvbG9yTWFwLmdldChuYW1lKSk7XHJcbiAgICAgICAgY3VycmVudFBvc2l0aW9uKys7XHJcbiAgICAgIH1cclxuICAgICAgc3dpdGNoKG5hbWUpe1xyXG4gICAgICAgIGNhc2UgJ09yYW5nZSBQZWVsJzpcclxuICAgICAgICAgIHRoaXMuZnVsbFN0dWZmLnB1c2godGhpcy5hZGQuc3ByaXRlKHdpZHRoIC8gMiwgaGVpZ2h0IC8gMywgJ29yYW5nZXdlZGdlZ2xhc3MnKS5zZXRTY2FsZSgwLjUpKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ0ljZSBDdWJlJzpcclxuICAgICAgICAgIHRoaXMuZnVsbFN0dWZmLnB1c2godGhpcy5hZGQuc3ByaXRlKHdpZHRoIC8gMiwgaGVpZ2h0IC8gMywgJ2ljZWdsYXNzJykuc2V0U2NhbGUoMC41KSk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdNdWRkbGUgRHJpbmsnOlxyXG4gICAgICAgICAgdGhpcy5mdWxsU3R1ZmYucHVzaCh0aGlzLmFkZC5zcHJpdGUod2lkdGggLyAyLCBoZWlnaHQgLyAzLCAnbXVkZGxlcmdsYXNzJykuc2V0U2NhbGUoMC41KSk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdTaGFrZSBEcmluayc6XHJcbiAgICAgICAgICB0aGlzLmZ1bGxTdHVmZi5wdXNoKHRoaXMuYWRkLnNwcml0ZSh3aWR0aCAvIDIsIGhlaWdodCAvIDMsICdzaGFrZW5nbGFzcycpLnNldFNjYWxlKDAuNSkpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnQW5nb3N0dXJhIEJpdHRlcnMnOlxyXG4gICAgICAgICAgdGhpcy5mdWxsU3R1ZmYucHVzaCh0aGlzLmFkZC5zcHJpdGUod2lkdGggLyAyLCBoZWlnaHQgLyAzLCAnYml0dGVyc2dsYXNzJykuc2V0U2NhbGUoMC41KSk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfSlcclxuICAgIHRoaXMucmVuZGVyID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICAgIFxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByb3RhdGVSaWdodChnYW1lT2JqZWN0OiBHYW1lT2JqZWN0cy5TcHJpdGUpOiB2b2lkIHtcclxuICAgIGlmIChnYW1lT2JqZWN0LmFuZ2xlIDwgOTApIHtcclxuICAgICAgZ2FtZU9iamVjdC5zZXRBbmdsZShnYW1lT2JqZWN0LmFuZ2xlICsgMTUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByb3RhdGVDZW50ZXIoZ2FtZU9iamVjdDogR2FtZU9iamVjdHMuU3ByaXRlKTogdm9pZCB7XHJcbiAgICBpZiAoZ2FtZU9iamVjdC5hbmdsZSA+IDApIHtcclxuICAgICAgZ2FtZU9iamVjdC5zZXRBbmdsZShnYW1lT2JqZWN0LmFuZ2xlIC0gMTUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXR1cEh1Yihjb25uZWN0aW9uOiBzaWduYWxSLkh1YkNvbm5lY3Rpb24pOiB2b2lkIHtcclxuICAgIGNvbm5lY3Rpb24ub24oJ1N0YXJ0JywgKCkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhgc3RhcnRlZGApO1xyXG4gICAgICB0aGlzLnBoYXNlID0gR2FtZVBoYXNlLlN0YXJ0ZWQ7XHJcbiAgICAgIHRoaXMucmVzZXQoKTtcclxuICAgICAgdGhpcy5yZW1vdGVGZXRjaFN0YXRlKCk7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwidHJpZWQgdG8gcmVzZXRcIilcclxuICAgICAgdGhpcy5yZW5kZXIgPSB0cnVlO1xyXG4gICAgfSk7XHJcbiAgICBjb25uZWN0aW9uLm9uKCdVcGRhdGVDdXBTdGF0ZScsIChjdXBTdGF0ZTogbnVtYmVyW10pID0+IHtcclxuICAgICAgY29uc29sZS5sb2coYEN1cFN0YXRlOiAke2N1cFN0YXRlfWApO1xyXG4gICAgICB0aGlzLmdsYXNzQ29udGVudHMgPSBjdXBTdGF0ZTtcclxuICAgICAgdGhpcy5yZW5kZXIgPSB0cnVlO1xyXG4gICAgfSk7XHJcbiAgICBjb25uZWN0aW9uLm9uKCdTdGF0ZVB1c2gnLCAodXBkYXRlOiBzdGF0ZVVwZGF0ZSkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhgU3RhdGVQdXNoOiAke3VwZGF0ZS5jdXBMb2Nrcy5qb2luKFwiLFwiKX0gJHt1cGRhdGUuY3VwU3RhdGUuam9pbihcIixcIil9IGApO1xyXG4gICAgICB0aGlzLmdsYXNzQ29udGVudHMgPSB1cGRhdGUuY3VwU3RhdGU7XHJcbiAgICAgIHRoaXMuY3VwTG9ja3MgPSB1cGRhdGUuY3VwTG9ja3M7XHJcbiAgICAgIC8qdGhpcy5zY2VuZS5yZXN0YXJ0KHtodWJDb25uZWN0aW9uOiB0aGlzLmh1YkNvbm5lY3Rpb24sIHNldHVwOiB7XHJcbiAgICAgICAgcGxheWVyY291bnQ6IHRoaXMucGxheWVyQ291bnQsXHJcbiAgICAgICAgcm91bmROdW1iZXI6IHRoaXMucm91bmROdW1iZXIsXHJcbiAgICAgICAgY3VwTnVtYmVyOiB0aGlzLmN1cE51bWJlcixcclxuICAgICAgICBhY3Rpb25zOiB0aGlzLmFjdGlvbnNcclxuICAgICAgfX0pOyovXHJcbiAgICAgIHRoaXMucmVuZGVyID0gdHJ1ZTtcclxuICAgIH0pO1xyXG4gICAgY29ubmVjdGlvbi5vbignUmVzdWx0JywgKHJlc3VsdDogbnVtYmVyW10pID0+IHtcclxuICAgICAgLypmb3IgKGxldCBpID0gcmVzdWx0Lmxlbmd0aCAtIDE7IGkgPiAwOyBpLS0pIHtcclxuICAgICAgICBjb25zdCBqID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGkgKyAxKSk7XHJcbiAgICAgICAgW3Jlc3VsdFtpXSwgcmVzdWx0W2pdXSA9IFtyZXN1bHRbal0sIHJlc3VsdFtpXV07XHJcbiAgICAgIH0qL1xyXG4gICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgICBjb25zdCBjb3VudCA9IHJlc3VsdC5yZWR1Y2UoKHgsIHkpID0+IHggKyB5KTtcclxuICAgICAgaWYgKGNvdW50ID09IDApIHtcclxuICAgICAgICB0aGlzLmZpbmFsID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnNjZW5lLnNldFZpc2libGUoZmFsc2UpO1xyXG4gICAgICAgIHRoaXMuc2NlbmUucGF1c2UoKTtcclxuICAgICAgICB0aGlzLnNjZW5lLmxhdW5jaCgnU3VjY2VzcycpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICAvL2xldCBsaXN0ID0gWzAsIDAsIDAsIDBdO1xyXG4gICAgICAvKnJlc3VsdC5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgIGxpc3RbZWxlbWVudF0gKz0gMTtcclxuICAgICAgfSk7XHJcbiAgICAgIGxldCBsaXN0MiA9IHRoaXMuc3RhdGUucmVzdWx0c0xpc3Q7XHJcbiAgICAgIGxpc3QyLnB1c2gobGlzdCk7Ki9cclxuICAgICAgdGhpcy5waGFzZSA9IEdhbWVQaGFzZS5SZXN1bHRlZDtcclxuICAgICAgLy90aGlzLnJlc3VsdHMgPSByZXN1bHQ7XHJcbiAgICAgIHRoaXMucmVuZGVyID0gdHJ1ZTtcclxuICAgICAgLy8gc2hvdWxkIGdvIHRvIHJlc3VsdCBzY2VuZSBpbnN0ZWFkXHJcbiAgICAgIC8vIGFjdHVhbGx5IHNob3VsZG50LCBpZCByYXRoZXIganVzdCBwbG9wIHJlc3VsdHMgb24gdG9wIG9mIHdoYXRldmVyIGVsc2UgaXMgdmlzaWJsZVxyXG4gICAgICB0aGlzLnJlbW90ZVJlc2V0KCk7XHJcbiAgICAgIHRoaXMucmVzZXQoKTtcclxuICAgICAgY29uc29sZS5sb2coXCJ0cmllZCB0byByZXNldCBmcm9tIHJlc3VsdHNcIilcclxuICAgICAgdGhpcy5yZW5kZXIgPSB0cnVlO1xyXG4gICAgICB0aGlzLnNjZW5lLnNldFZpc2libGUoZmFsc2UpO1xyXG4gICAgICB0aGlzLnNjZW5lLnBhdXNlKCk7XHJcbiAgICAgIHRoaXMuc2NlbmUubGF1bmNoKCdSZXN1bHRzJywge29uRmluaXNoOiAoKSA9PiB7ICB0aGlzLnNjZW5lLnJlc3VtZSgpO3RoaXMuc2NlbmUuc2V0VmlzaWJsZSh0cnVlKTt9LCByZXN1bHRzOiByZXN1bHR9KTtcclxuICAgIH0pO1xyXG4gICAgY29ubmVjdGlvbi5vbignTG9ja0N1cCcsIChjdXA6IG51bWJlcikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhgTG9ja2VkICR7Y3VwfWApO1xyXG4gICAgICB0aGlzLmN1cExvY2tzID0gdGhpcy5jdXBMb2Nrcy5jb25jYXQoW2N1cF0pO1xyXG4gICAgICBjb25zb2xlLmxvZyh0aGlzLmN1cExvY2tzKTtcclxuICAgICAgdGhpcy5yZW5kZXIgPSB0cnVlO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlc2V0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5nbGFzc0NvbnRlbnRzID0gW107XHJcbiAgICB0aGlzLnJlc3VsdHMgPSBbXTtcclxuICAgIHRoaXMuY3VwTG9ja3MgPSBbXTtcclxuICAgIHRoaXMucmVuZGVyID0gdHJ1ZTtcclxuICAgIHRoaXMuZ2xhc3NCdXR0b25zLmZvckVhY2goZSA9PiB7XHJcbiAgICAgIGUuZW50ZXJNZW51QnV0dG9uQmxvY2tlZFN0YXRlKCk7XHJcbiAgICAgIGUucmVzZXRPbkNsaWNrKCk7XHJcbiAgICAgIGUuZW50ZXJNZW51QnV0dG9uUmVzdFN0YXRlKCk7XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZW1vdGVSZWdpc3RlciA9ICgpID0+IHtcclxuICAgIHRoaXMuaHViQ29ubmVjdGlvbi5pbnZva2UoJ1JlZ2lzdGVyJywgJ3llYWhoYXJkY29kZWR0ZWFtbmFtZScpO1xyXG4gIH07XHJcblxyXG4gIHByaXZhdGUgcmVtb3RlU3VibWl0Y3VwID0gKCkgPT4ge1xyXG4gICAgdGhpcy5odWJDb25uZWN0aW9uLmludm9rZSgnU3VibWl0Q3VwJyk7XHJcbiAgfTtcclxuXHJcbiAgcHJpdmF0ZSByZW1vdGVTZW5kQWN0aW9uID0gKGFjdGlvbjogbnVtYmVyLCB0YXJnZXQ6IG51bWJlcikgPT4ge1xyXG4gICAgdGhpcy5odWJDb25uZWN0aW9uLmludm9rZSgnU2VuZEFjdGlvbicsIGFjdGlvbiwgdGFyZ2V0KTtcclxuICB9O1xyXG5cclxuICBwcml2YXRlIHJlbW90ZUVtcHR5Q3VwID0gKCkgPT4ge1xyXG4gICAgdGhpcy5odWJDb25uZWN0aW9uLmludm9rZSgnRW1wdHlDdXAnKTtcclxuICB9O1xyXG5cclxuICBwcml2YXRlIHJlbW90ZVJlc2V0ID0gKCkgPT4ge1xyXG4gICAgdGhpcy5odWJDb25uZWN0aW9uLmludm9rZSgnUmVzZXQnKTtcclxuICB9O1xyXG4gIHByaXZhdGUgcmVtb3RlRmV0Y2hTdGF0ZSA9ICgpID0+IHtcclxuICAgIHRoaXMuaHViQ29ubmVjdGlvbi5pbnZva2UoJ0ZldGNoU3RhdGUnKTtcclxuICB9O1xyXG59XHJcbiIsImltcG9ydCB7IElucHV0LCBHYW1lT2JqZWN0cyB9IGZyb20gJ3BoYXNlcic7XHJcbmltcG9ydCB7IGdldEdhbWVXaWR0aCwgZ2V0R2FtZUhlaWdodCwgZHJpbmtUb0NvbG9yTWFwIH0gZnJvbSAnLi4vaGVscGVycyc7XHJcblxyXG5jb25zdCBzY2VuZUNvbmZpZzogUGhhc2VyLlR5cGVzLlNjZW5lcy5TZXR0aW5nc0NvbmZpZyA9IHtcclxuICBhY3RpdmU6IGZhbHNlLFxyXG4gIHZpc2libGU6IGZhbHNlLFxyXG4gIGtleTogJ0ljZSBDdWJlJyxcclxufTtcclxuY2xhc3MgR2FtZVNjZW5lQXJndW1lbnRzIHtcclxuICBwdWJsaWMgb25GaW5pc2g6IEZ1bmN0aW9uO1xyXG59XHJcbmV4cG9ydCBjbGFzcyBJY2VTY2VuZSBleHRlbmRzIFBoYXNlci5TY2VuZSB7XHJcbiAgcHVibGljIHNwZWVkID0gMjAwO1xyXG5cclxuICBwcml2YXRlIGN1cnNvcktleXM6IFBoYXNlci5UeXBlcy5JbnB1dC5LZXlib2FyZC5DdXJzb3JLZXlzO1xyXG4gIHByaXZhdGUgaWNlOiBQaGFzZXIuR2FtZU9iamVjdHMuU3ByaXRlO1xyXG5cclxuICBwcml2YXRlIGNvbnRlbnRzOiBzdHJpbmdbXSA9IFtdO1xyXG4gIHByaXZhdGUgZ2xhc3NGaWxsZXJzOiBQaGFzZXIuR2FtZU9iamVjdHMuU3ByaXRlW10gPSBbXTtcclxuXHJcbiAgcHJpdmF0ZSBpc1BvdXJpbmcgPSAwO1xyXG4gIHByaXZhdGUgdHJhbnNpdGlvbmluZyA9IGZhbHNlO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKHNjZW5lQ29uZmlnKTtcclxuICB9XHJcbiAgcHVibGljIG9uRmluaXNoOiBGdW5jdGlvbjtcclxuICBwdWJsaWMgdGV4dDE6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0O1xyXG4gIHB1YmxpYyB0ZXh0MjogUGhhc2VyLkdhbWVPYmplY3RzLlRleHQ7XHJcbiAgcHVibGljIHRleHQzOiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dDtcclxuICBwdWJsaWMgdGV4dDQ6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0O1xyXG4gIHB1YmxpYyB0ZXh0NTogUGhhc2VyLkdhbWVPYmplY3RzLlRleHQ7XHJcbiAgcHVibGljIGNsaWNrcyA9IDA7XHJcbiAgcHVibGljIGljZUxldmVsID0gMDtcclxuXHJcbiAgcHVibGljIGluaXQoZGF0YTogR2FtZVNjZW5lQXJndW1lbnRzKTogdm9pZCB7XHJcbiAgICB0aGlzLm9uRmluaXNoID0gZGF0YS5vbkZpbmlzaDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjcmVhdGUoKTogdm9pZCB7XHJcbiAgICBjb25zb2xlLmxvZygnSWNlJyk7XHJcbiAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IHRoaXMuc3lzLmdhbWUuY2FudmFzO1xyXG4gICAgdGhpcy50cmFuc2l0aW9uaW5nID0gZmFsc2U7XHJcbiAgICB0aGlzLmNsaWNrcyA9IDA7XHJcbiAgICB0aGlzLmljZUxldmVsID0gMDtcclxuICBcclxuICAgIC8vIEFkZCBhIHBsYXllciBzcHJpdGUgdGhhdCBjYW4gYmUgbW92ZWQgYXJvdW5kLiBQbGFjZSBoaW0gaW4gdGhlIG1pZGRsZSBvZiB0aGUgc2NyZWVuLlxyXG4gICAgdGhpcy5pY2UgPSB0aGlzLmFkZC5zcHJpdGUod2lkdGggLyAyLCBoZWlnaHQgLyAyLCAnaWNlJyk7XHJcbiAgICB0aGlzLmljZS5zZXRTY2FsZSgwLjQpO1xyXG4gICAgLy90aGlzLnZlcm1vdXRoVG9wT25seSA9IHRoaXMuYWRkLnNwcml0ZSh3aWR0aCAvIDIsIGhlaWdodCAvIDIgKyAzMDAsICd2ZXJtb3V0aHRvcG9ubHknKTtcclxuXHJcbiAgICB0aGlzLmlucHV0Lm9uKCdwb2ludGVydXAnLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMudGV4dDEuc2V0VGV4dChgzrg6ICR7dGhpcy5pbnB1dC5hY3RpdmVQb2ludGVyLmdldEFuZ2xlKCl9YCk7XHJcbiAgICAgIHRoaXMudGV4dDIuc2V0VGV4dChgeDogJHt0aGlzLmlucHV0LmFjdGl2ZVBvaW50ZXIuZ2V0RGlzdGFuY2VYKCl9YCk7XHJcbiAgICAgIHRoaXMudGV4dDMuc2V0VGV4dChgeTogJHt0aGlzLmlucHV0LmFjdGl2ZVBvaW50ZXIuZ2V0RGlzdGFuY2VZKCl9YCk7XHJcbiAgICAgIHRoaXMudGV4dDQuc2V0VGV4dChgZDogJHt0aGlzLmlucHV0LmFjdGl2ZVBvaW50ZXIuZ2V0RGlzdGFuY2UoKX1gKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuaW5wdXQub24oJ3BvaW50ZXJkb3duJywgKCkgPT4ge1xyXG4gICAgICBpZiAodGhpcy5pY2VMZXZlbCA9PSAwKSB7XHJcbiAgICAgICAgdGhpcy5pY2Uuc2V0VGV4dHVyZSgnaWNlJyArICsrdGhpcy5pY2VMZXZlbCk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5jbGlja3MgKz0gMTtcclxuICAgICAgaWYgKHRoaXMuY2xpY2tzICUgNSA9PSAwKSB7XHJcbiAgICAgICAgdGhpcy5pY2Uuc2V0VGV4dHVyZSgnaWNlJyArICsrdGhpcy5pY2VMZXZlbCk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRoaXMuaWNlTGV2ZWwgPT0gNSAmJiAhdGhpcy50cmFuc2l0aW9uaW5nKSB7XHJcbiAgICAgICAgdGhpcy50cmFuc2l0aW9uaW5nID0gdHJ1ZTtcclxuICAgICAgICBkb2N1bWVudC5jb29raWUgPSBgaWNlPTFgO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5zY2VuZS5zdG9wKCk7XHJcbiAgICAgICAgICB0aGlzLm9uRmluaXNoKCk7XHJcbiAgICAgICAgICAvL3RoaXMuc2NlbmUuc3RhcnQoJ0dhbWUnKTtcclxuICAgICAgICB9LCA1MDApO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLnRleHQxID0gdGhpcy5hZGQudGV4dCgxMCwgMTAsICcnLCB7IGNvbG9yOiAnIzAwZmYwMCcgfSk7XHJcbiAgICB0aGlzLnRleHQyID0gdGhpcy5hZGQudGV4dCgxMCwgMjUsICcnLCB7IGNvbG9yOiAnIzAwZmYwMCcgfSk7XHJcbiAgICB0aGlzLnRleHQzID0gdGhpcy5hZGQudGV4dCgxMCwgNDAsICcnLCB7IGNvbG9yOiAnIzAwZmYwMCcgfSk7XHJcbiAgICB0aGlzLnRleHQ0ID0gdGhpcy5hZGQudGV4dCgxMCwgNTUsICcnLCB7IGNvbG9yOiAnIzAwZmYwMCcgfSk7XHJcbiAgICB0aGlzLnRleHQ1ID0gdGhpcy5hZGQudGV4dCgxMCwgNzAsICcnLCB7IGNvbG9yOiAnIzAwZmYwMCcgfSk7XHJcbiAgfVxyXG5cclxuICAvL3B1YmxpYyB1cGRhdGUoKTogdm9pZCB7fVxyXG59XHJcbiIsImltcG9ydCB7IE1haW5NZW51U2NlbmUgfSBmcm9tICcuL21haW4tbWVudS1zY2VuZSc7XHJcbmltcG9ydCB7IEJvb3RTY2VuZSB9IGZyb20gJy4vYm9vdC1zY2VuZSc7XHJcbmltcG9ydCB7IEdhbWVTY2VuZSB9IGZyb20gJy4vZ2FtZS1zY2VuZSc7XHJcbmltcG9ydCB7IFZlcm1vdXRoU2NlbmUgfSBmcm9tICcuL3Zlcm1vdXRoLXNjZW5lJztcclxuaW1wb3J0IHsgUG91clNjZW5lIH0gZnJvbSAnLi9wb3VyLXNjZW5lJztcclxuaW1wb3J0IHsgQm91cmJvblNjZW5lIH0gZnJvbSAnLi9ib3VyYm9uLXNjZW5lJztcclxuaW1wb3J0IHsgSWNlU2NlbmUgfSBmcm9tICcuL2ljZS1zY2VuZSc7XHJcbmltcG9ydCB7IE9yYW5nZVNjZW5lIH0gZnJvbSAnLi9vcmFuZ2Utc2NlbmUnO1xyXG5pbXBvcnQgeyBTaGFrZVNjZW5lIH0gZnJvbSAnLi9zaGFrZS1zY2VuZSc7XHJcbmltcG9ydCB7IE11ZGRsZVNjZW5lIH0gZnJvbSAnLi9tdWRkbGUtc2NlbmUnO1xyXG5pbXBvcnQgeyBKdWljZXJTY2VuZSB9IGZyb20gJy4vanVpY2VyLXNjZW5lJztcclxuaW1wb3J0IHsgUmVzdWx0c1NjZW5lIH0gZnJvbSAnLi9yZXN1bHRzLXNjZW5lJztcclxuaW1wb3J0IHsgU3VjY2Vzc1NjZW5lIH0gZnJvbSAnLi9zdWNjZXNzLXNjZW5lJztcclxuaW1wb3J0IHsgQml0dGVyc1NjZW5lIH0gZnJvbSAnLi9iaXR0ZXJzLXNjZW5lJztcclxuaW1wb3J0IHsgRXZlcnlvbmVJblNjZW5lIH0gZnJvbSAnLi9ldmVyeW9uZS1pbi1zY2VuZSc7XHJcbmltcG9ydCB7UGVybWlzc2lvbnNTY2VuZX0gZnJvbSAnLi9wZXJtaXNzaW9ucy1zY2VuZSc7XHJcbmltcG9ydCB7IERpc2Nvbm5lY3RlZFNjZW5lIH0gZnJvbSAnLi9kaXNjb25uZWN0ZWQtc2NlbmUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgW1xyXG4gIEJvb3RTY2VuZSxcclxuICBNYWluTWVudVNjZW5lLFxyXG4gIEdhbWVTY2VuZSxcclxuICBWZXJtb3V0aFNjZW5lLFxyXG4gIFBvdXJTY2VuZSxcclxuICBCb3VyYm9uU2NlbmUsXHJcbiAgSWNlU2NlbmUsXHJcbiAgT3JhbmdlU2NlbmUsXHJcbiAgU2hha2VTY2VuZSxcclxuICBNdWRkbGVTY2VuZSxcclxuICBKdWljZXJTY2VuZSxcclxuICBSZXN1bHRzU2NlbmUsXHJcbiAgU3VjY2Vzc1NjZW5lLFxyXG4gIEJpdHRlcnNTY2VuZSxcclxuICBFdmVyeW9uZUluU2NlbmUsXHJcbiAgUGVybWlzc2lvbnNTY2VuZSxcclxuICBEaXNjb25uZWN0ZWRTY2VuZVxyXG5dO1xyXG4iLCJpbXBvcnQgeyBJbnB1dCwgR2FtZU9iamVjdHMgfSBmcm9tICdwaGFzZXInO1xyXG5pbXBvcnQgeyBnZXRHYW1lV2lkdGgsIGdldEdhbWVIZWlnaHQsIGRyaW5rVG9Db2xvck1hcCB9IGZyb20gJy4uL2hlbHBlcnMnO1xyXG5cclxuY29uc3Qgc2NlbmVDb25maWc6IFBoYXNlci5UeXBlcy5TY2VuZXMuU2V0dGluZ3NDb25maWcgPSB7XHJcbiAgYWN0aXZlOiBmYWxzZSxcclxuICB2aXNpYmxlOiBmYWxzZSxcclxuICBrZXk6ICdKdWljZXInLFxyXG59O1xyXG5jbGFzcyBHYW1lU2NlbmVBcmd1bWVudHMge1xyXG4gIHB1YmxpYyBCb3R0bGVTcHJpdGVOYW1lOiBzdHJpbmc7XHJcbiAgcHVibGljIG9uRmluaXNoOiBGdW5jdGlvbjtcclxufVxyXG5leHBvcnQgY2xhc3MgSnVpY2VyU2NlbmUgZXh0ZW5kcyBQaGFzZXIuU2NlbmUge1xyXG4gIHB1YmxpYyBzcGVlZCA9IDIwMDtcclxuICBwdWJsaWMgb25GaW5pc2g6IEZ1bmN0aW9uO1xyXG5cclxuICBwcml2YXRlIGp1aWNlclRvcDogUGhhc2VyLkdhbWVPYmplY3RzLlNwcml0ZTtcclxuICBwcml2YXRlIGp1aWNlckJvdHRvbTogUGhhc2VyLkdhbWVPYmplY3RzLlNwcml0ZTtcclxuICBwcml2YXRlIGZydWl0OiBQaGFzZXIuR2FtZU9iamVjdHMuU3ByaXRlO1xyXG4gIHByaXZhdGUgZW1wdHlHbGFzczogUGhhc2VyLkdhbWVPYmplY3RzLlNwcml0ZTtcclxuXHJcbiAgcHJpdmF0ZSBwb3VyQ291bnQgPSAwO1xyXG4gIHByaXZhdGUgdHJhbnNpdGlvbmluZyA9IGZhbHNlO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKHNjZW5lQ29uZmlnKTtcclxuICB9XHJcbiAgcHVibGljIHRleHQxOiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dDtcclxuICBwdWJsaWMgdGV4dDI6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0O1xyXG4gIHB1YmxpYyBmcnVpdFNwcml0ZU5hbWU6IHN0cmluZztcclxuICBwcml2YXRlIGxpcXVpZFJlY3RhbmdsZTogUGhhc2VyLkdhbWVPYmplY3RzLlJlY3RhbmdsZTtcclxuXHJcbiAgcHVibGljIGluaXQoZGF0YTogR2FtZVNjZW5lQXJndW1lbnRzKTogdm9pZCB7XHJcbiAgICBjb25zb2xlLmxvZygnSnVpY2VySW5pdCcpO1xyXG4gICAgdGhpcy5mcnVpdFNwcml0ZU5hbWUgPSBkYXRhLkJvdHRsZVNwcml0ZU5hbWUgKyBcIiAyXCI7XHJcbiAgICB0aGlzLm9uRmluaXNoID0gZGF0YS5vbkZpbmlzaDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjcmVhdGUoKTogdm9pZCB7XHJcbiAgICBjb25zb2xlLmxvZygnSnVpY2VyJyk7XHJcbiAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IHRoaXMuc3lzLmdhbWUuY2FudmFzO1xyXG4gICAgdGhpcy5wb3VyQ291bnQgPSAwO1xyXG4gICAgdGhpcy50cmFuc2l0aW9uaW5nID0gZmFsc2U7XHJcblxyXG4gICAgLy8gQWRkIGEgcGxheWVyIHNwcml0ZSB0aGF0IGNhbiBiZSBtb3ZlZCBhcm91bmQuIFBsYWNlIGhpbSBpbiB0aGUgbWlkZGxlIG9mIHRoZSBzY3JlZW4uXHJcbiAgICB0aGlzLmVtcHR5R2xhc3MgPSB0aGlzLmFkZC5zcHJpdGUod2lkdGggLyAyLCBoZWlnaHQgLyAyLCAnZW1wdHlnbGFzcycpLnNldEFscGhhKDApO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKGBnbGFzcyB4OiAke3dpZHRoIC8gNH1gKTtcclxuICAgIGNvbnNvbGUubG9nKGBnbGFzcyB5OiAke2hlaWdodCAvIDJ9YCk7XHJcbiAgICB0aGlzLmVtcHR5R2xhc3Muc2V0U2NhbGUoMC41KTtcclxuICAgIHRoaXMuZW1wdHlHbGFzcy5zY2FsZVkgPSB0aGlzLmVtcHR5R2xhc3Muc2NhbGVZICogMC41O1xyXG5cclxuICAgIHRoaXMuanVpY2VyVG9wID0gdGhpcy5hZGQuc3ByaXRlKHdpZHRoIC8gMS41LCBoZWlnaHQgLyAyLCAnanVpY2VydG9wJykuc2V0SW50ZXJhY3RpdmUoKTtcclxuICAgIHRoaXMuanVpY2VyVG9wLnNldFNjYWxlKDAuNyk7XHJcbiAgICB0aGlzLmp1aWNlclRvcC5zZXRPcmlnaW4oMC43Njc1LCAwLjc2NzUpO1xyXG5cclxuICAgIHRoaXMuanVpY2VyQm90dG9tID0gdGhpcy5hZGQuc3ByaXRlKHdpZHRoIC8gMS41LCBoZWlnaHQgLyAyLCAnanVpY2VyYm90dG9tJykuc2V0SW50ZXJhY3RpdmUoKTtcclxuICAgIHRoaXMuanVpY2VyQm90dG9tLnNldFNjYWxlKDAuNyk7XHJcbiAgICB0aGlzLmp1aWNlckJvdHRvbS5zZXRPcmlnaW4oMC43Njc1LCAwLjc2NzUpO1xyXG4gICAgdGhpcy5mcnVpdCA9IHRoaXMuYWRkLnNwcml0ZSh3aWR0aCAvIDEuNSwgaGVpZ2h0IC8gMiwgdGhpcy5mcnVpdFNwcml0ZU5hbWUpO1xyXG4gICAgdGhpcy5mcnVpdC5zZXRTY2FsZSgwLjcpO1xyXG4gICAgdGhpcy5mcnVpdC5zZXRPcmlnaW4oMC43Njc1LCAwLjc2NzUpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKHRoaXMuZW1wdHlHbGFzcy54KTtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMuanVpY2VyVG9wLmRpc3BsYXlIZWlnaHQpO1xyXG4gICAgLy90aGlzLmp1aWNlclRvcC5zZXRQb3NpdGlvbih0aGlzLmVtcHR5R2xhc3MueCArIHRoaXMuanVpY2VyVG9wLmRpc3BsYXlIZWlnaHQgLyA0KTtcclxuICAgIHRoaXMuanVpY2VyVG9wLnNldFNjYWxlKDAuNCk7XHJcbiAgICB0aGlzLmZydWl0LnNldFNjYWxlKDAuNCk7XHJcbiAgICAvL3RoaXMuanVpY2VyQm90dG9tLnNldFBvc2l0aW9uKHRoaXMuZW1wdHlHbGFzcy54ICsgdGhpcy5qdWljZXJCb3R0b20uZGlzcGxheUhlaWdodCAvIDQpO1xyXG4gICAgdGhpcy5qdWljZXJCb3R0b20uc2V0U2NhbGUoMC40KTtcclxuICAgIHRoaXMuanVpY2VyVG9wLnNldFBvc2l0aW9uKFxyXG4gICAgICB0aGlzLmVtcHR5R2xhc3MueCArIHRoaXMuanVpY2VyVG9wLmRpc3BsYXlXaWR0aCAvIDMsXHJcbiAgICAgIHRoaXMuZW1wdHlHbGFzcy55ICsgdGhpcy5qdWljZXJUb3AuZGlzcGxheUhlaWdodCAvIDQsXHJcbiAgICApO1xyXG4gICAgdGhpcy5qdWljZXJCb3R0b20uc2V0UG9zaXRpb24oXHJcbiAgICAgIHRoaXMuZW1wdHlHbGFzcy54ICsgdGhpcy5qdWljZXJCb3R0b20uZGlzcGxheVdpZHRoIC8gMyxcclxuICAgICAgdGhpcy5lbXB0eUdsYXNzLnkgKyB0aGlzLmp1aWNlclRvcC5kaXNwbGF5SGVpZ2h0IC8gNCxcclxuICAgICk7XHJcbiAgICB0aGlzLmZydWl0LnNldFBvc2l0aW9uKFxyXG4gICAgICB0aGlzLmVtcHR5R2xhc3MueCArIHRoaXMuanVpY2VyQm90dG9tLmRpc3BsYXlXaWR0aCAvIDMsXHJcbiAgICAgIHRoaXMuZW1wdHlHbGFzcy55ICsgdGhpcy5qdWljZXJUb3AuZGlzcGxheUhlaWdodCAvIDQsXHJcbiAgICApO1xyXG5cclxuICAgIC8vdGhpcy5hZGQucmVjdGFuZ2xlKHRoaXMuanVpY2VyQm90dG9tLngsIHRoaXMuanVpY2VyQm90dG9tLnksIHRoaXMuanVpY2VyQm90dG9tLmRpc3BsYXlXaWR0aCwgdGhpcy5qdWljZXJCb3R0b20uZGlzcGxheUhlaWdodCwgMHhGRjAwMDApO1xyXG4gICAgLy90aGlzLmFkZC5yZWN0YW5nbGUodGhpcy5qdWljZXJUb3AueCwgdGhpcy5qdWljZXJUb3AueSwgdGhpcy5qdWljZXJUb3AuZGlzcGxheVdpZHRoLCB0aGlzLmp1aWNlclRvcC5kaXNwbGF5SGVpZ2h0LCAweDAwMDBGRik7XHJcbiAgICB0aGlzLmp1aWNlclRvcC5vbigncG9pbnRlcm92ZXInLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMuanVpY2VyVG9wLnNldFRpbnQoMHhjY2NjY2MpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5qdWljZXJUb3Aub24oJ3BvaW50ZXJvdXQnLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMuanVpY2VyVG9wLmNsZWFyVGludCgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5pbnB1dC5zZXREcmFnZ2FibGUodGhpcy5qdWljZXJUb3ApO1xyXG5cclxuICAgIHRoaXMuaW5wdXQub24oJ2RyYWdzdGFydCcsIChwb2ludGVyLCBnYW1lT2JqZWN0KSA9PiB7XHJcbiAgICAgIGdhbWVPYmplY3Quc2V0VGludCgweDk5OTk5OSk7XHJcbiAgICB9KTtcclxuICAgIHRoaXMubGlxdWlkUmVjdGFuZ2xlID0gdGhpcy5hZGRcclxuICAgICAgLnJlY3RhbmdsZShcclxuICAgICAgICB0aGlzLmVtcHR5R2xhc3MueCxcclxuICAgICAgICB0aGlzLmVtcHR5R2xhc3MueSArIHRoaXMuZW1wdHlHbGFzcy5kaXNwbGF5SGVpZ2h0IC8gMixcclxuICAgICAgICB0aGlzLmVtcHR5R2xhc3MuZGlzcGxheVdpZHRoLFxyXG4gICAgICAgICsrdGhpcy5wb3VyQ291bnQsXHJcbiAgICAgICAgZHJpbmtUb0NvbG9yTWFwLmdldCh0aGlzLmZydWl0U3ByaXRlTmFtZSksXHJcbiAgICAgIClcclxuICAgICAgLnNldEJsZW5kTW9kZShQaGFzZXIuQmxlbmRNb2Rlcy5NVUxUSVBMWSk7XHJcblxyXG4gICAgdGhpcy5pbnB1dC5vbignZHJhZycsIChwb2ludGVyLCBnYW1lT2JqZWN0LCBkcmFnWCwgZHJhZ1kpID0+IHtcclxuICAgICAgLy8gZnJvbSBoZXJlOiBuZWVkIHRvIDEuIGNhbGN1bGF0ZSBhbmdsZSBiZXR3ZWVuIGJhc2Ugb2Ygb2JqZWN0IGFuZCBjdXJzb3JcclxuICAgICAgLy8gMi4gcm90YXRlIHVudGlsIHRvcCBvZiBib3R0bGUgaXMgcG9pbnRpbmcgdG8gY3Vyc29yXHJcbiAgICAgIGNvbnN0IHkxID0gZ2FtZU9iamVjdC55O1xyXG4gICAgICBjb25zdCB5MiA9IHRoaXMuaW5wdXQuYWN0aXZlUG9pbnRlci55O1xyXG4gICAgICBjb25zdCB4MSA9IGdhbWVPYmplY3QueDtcclxuICAgICAgY29uc3QgeDIgPSB0aGlzLmlucHV0LmFjdGl2ZVBvaW50ZXIueDtcclxuXHJcbiAgICAgIGNvbnN0IHNsb3BlUmFkcyA9IE1hdGguYXRhbjIoeTIgLSB5MSwgeDIgLSB4MSk7XHJcbiAgICAgIGNvbnN0IGFkanVzdGVkID0gc2xvcGVSYWRzICsgMS41NzA3OTYzMztcclxuXHJcbiAgICAgIHRoaXMudGV4dDEuc2V0VGV4dChgJHthZGp1c3RlZH1gKTtcclxuICAgICAgaWYgKGFkanVzdGVkIDw9IDAuMDI1KSB7XHJcbiAgICAgICAgZ2FtZU9iamVjdC5yb3RhdGlvbiA9IHNsb3BlUmFkcyArIDEuNTcwNzk2MzM7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuaW5wdXQub24oJ2RyYWdlbmQnLCAocG9pbnRlciwgZ2FtZU9iamVjdCkgPT4ge1xyXG4gICAgICBnYW1lT2JqZWN0LmNsZWFyVGludCgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gVGhpcyBpcyBhIG5pY2UgaGVscGVyIFBoYXNlciBwcm92aWRlcyB0byBjcmVhdGUgbGlzdGVuZXJzIGZvciBzb21lIG9mIHRoZSBtb3N0IGNvbW1vbiBrZXlzLlxyXG5cclxuICAgIHRoaXMudGV4dDEgPSB0aGlzLmFkZC50ZXh0KDEwLCAxMCwgJycsIHsgY29sb3I6ICcjMDBmZjAwJyB9KTtcclxuICAgIHRoaXMudGV4dDIgPSB0aGlzLmFkZC50ZXh0KDEwMCwgMTAsICcnLCB7IGNvbG9yOiAnIzAwZmYwMCcgfSk7XHJcblxyXG4gICAgdGhpcy5qdWljZXJUb3Auc2V0RGVwdGgoMSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdXBkYXRlKCk6IHZvaWQge1xyXG4gICAgLy8gRXZlcnkgZnJhbWUsIHdlIGNyZWF0ZSBhIG5ldyB2ZWxvY2l0eSBmb3IgdGhlIHNwcml0ZSBiYXNlZCBvbiB3aGF0IGtleXMgdGhlIHBsYXllciBpcyBob2xkaW5nIGRvd24uXHJcbiAgICB0aGlzLnRleHQxLnNldFRleHQoYCR7dGhpcy5qdWljZXJUb3Aucm90YXRpb259YCk7XHJcblxyXG4gICAgaWYgKHRoaXMuanVpY2VyVG9wLnJvdGF0aW9uIDwgLTEuNDkpIHtcclxuICAgICAgaWYgKCF0aGlzLnRyYW5zaXRpb25pbmcpIHtcclxuICAgICAgICB0aGlzLnRyYW5zaXRpb25pbmcgPSB0cnVlO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5zY2VuZS5zdG9wKCk7XHJcbiAgICAgICAgICB0aGlzLm9uRmluaXNoKCk7XHJcbiAgICAgICAgfSwgNTAwKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgc2lnbmFsUiA9IHJlcXVpcmUoJ0BtaWNyb3NvZnQvc2lnbmFscicpO1xyXG5pbXBvcnQgeyBNZW51QnV0dG9uIH0gZnJvbSAnLi4vdWkvbWVudS1idXR0b24nO1xyXG5pbXBvcnQgKiBhcyBxdWVyeXN0cmluZyBmcm9tIFwicXVlcnktc3RyaW5nXCI7XHJcblxyXG5jb25zdCBzY2VuZUNvbmZpZzogUGhhc2VyLlR5cGVzLlNjZW5lcy5TZXR0aW5nc0NvbmZpZyA9IHtcclxuICBhY3RpdmU6IGZhbHNlLFxyXG4gIHZpc2libGU6IGZhbHNlLFxyXG4gIGtleTogJ01haW5NZW51JyxcclxufTtcclxuY2xhc3MgR2FtZVNjZW5lQXJndW1lbnRzIHtcclxuICBwdWJsaWMgaHViQ29ubmVjdGlvbjogc2lnbmFsUi5IdWJDb25uZWN0aW9uO1xyXG59XHJcbi8qKlxyXG4gKiBUaGUgaW5pdGlhbCBzY2VuZSB0aGF0IHN0YXJ0cywgc2hvd3MgdGhlIHNwbGFzaCBzY3JlZW5zLCBhbmQgbG9hZHMgdGhlIG5lY2Vzc2FyeSBhc3NldHMuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgTWFpbk1lbnVTY2VuZSBleHRlbmRzIFBoYXNlci5TY2VuZSB7XHJcbiAgcHJpdmF0ZSBodWJDb25uZWN0aW9uOiBzaWduYWxSLkh1YkNvbm5lY3Rpb247XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcihzY2VuZUNvbmZpZyk7XHJcbiAgfVxyXG4gIHB1YmxpYyBpbml0KGRhdGE6IEdhbWVTY2VuZUFyZ3VtZW50cyk6IHZvaWQge1xyXG4gICAgdGhpcy5odWJDb25uZWN0aW9uID0gZGF0YS5odWJDb25uZWN0aW9uO1xyXG4gIH1cclxuICBwdWJsaWMgY3JlYXRlKCk6IHZvaWQge1xyXG4gICAgY29uc29sZS5sb2coJ01haW4gTWVudScpO1xyXG4gICAgY29uc29sZS5sb2codGhpcy5odWJDb25uZWN0aW9uKTtcclxuICAgIHRoaXMuYWRkLnRleHQoMTAwLCAxNTAsIFwiUGxlYXNlIFdhaXRcIik7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgdGhpcy5odWJDb25uZWN0aW9uLmludm9rZSgnUmVnaXN0ZXInLCBxdWVyeXN0cmluZy5wYXJzZSh3aW5kb3cubG9jYXRpb24uc2VhcmNoKVtcInJvb21cIl0/PyBcInNhbXBsZVwiKS50aGVuKGUgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICAgIG5ldyBNZW51QnV0dG9uKHRoaXMsIDEwMCwgMTUwLCAnUmVhZHkgVXAnLCAoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLmh1YkNvbm5lY3Rpb24uaW52b2tlKCdSZWFkeVVwJyk7XHJcbiAgICAgICAgICB0aGlzLnNjZW5lLnN0YXJ0KCdFdmVyeW9uZUluJywge2h1YkNvbm5lY3Rpb246IHRoaXMuaHViQ29ubmVjdGlvbn0pO1xyXG4gICAgXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSwgKDUwMDApKTtcclxuICAgIFxyXG4gICAgdGhpcy5odWJDb25uZWN0aW9uLm9uKCdBc3NpZ24nLCAoY3VwOiBudW1iZXIsIGFjdGlvbnM6IG51bWJlcltdLCBwbGF5ZXJjb3VudDogbnVtYmVyLCByb3VuZDogbnVtYmVyKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGBjdXA6ICR7Y3VwfSBhY3Rpb25zOiAke2FjdGlvbnN9IHBsYXllcmNvdW50OiAke3BsYXllcmNvdW50fSByb3VuZCBudW1iZXI6ICR7cm91bmR9YCk7XHJcbiAgICAgIHZhciBpdGVtID0ge1xyXG4gICAgICAgIHBsYXllcmNvdW50OiBwbGF5ZXJjb3VudCxcclxuICAgICAgICByb3VuZE51bWJlcjogcm91bmQsXHJcbiAgICAgICAgY3VwTnVtYmVyOiBjdXAsXHJcbiAgICAgICAgYWN0aW9uczogYWN0aW9uc1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuaHViQ29ubmVjdGlvbi5vZmYoJ0Fzc2lnbicpO1xyXG4gICAgICB0aGlzLnNjZW5lLnN0YXJ0KCdHYW1lJywge2h1YkNvbm5lY3Rpb246IHRoaXMuaHViQ29ubmVjdGlvbiwgc2V0dXA6IGl0ZW19KTtcclxuICAgIH0pO1xyXG5cclxuICAgIHZhciByb29tY29kZSA9IHF1ZXJ5c3RyaW5nLnBhcnNlKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpO1xyXG4gICAgdmFyIHJvb20gPSByb29tY29kZVtcInJvb21cIl07XHJcbiAgICB0aGlzLmFkZFxyXG4gICAgICAudGV4dCgxMDAsIDUwLCBgVGVhbSAke3Jvb219YCwge1xyXG4gICAgICAgIGNvbG9yOiAnI0ZGRkZGRicsXHJcbiAgICAgIH0pXHJcbiAgICAgIC5zZXRGb250U2l6ZSgyNCk7XHJcblxyXG5cclxuLypcclxuICAgIG5ldyBNZW51QnV0dG9uKHRoaXMsIDEwMCwgMjUwLCAnSU9TIENMSUNLIEhFUkUgRklSU1QnLCAoKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdzZXR0aW5ncyBidXR0b24gY2xpY2tlZCcpO1xyXG4gICAgICBEZXZpY2VNb3Rpb25FdmVudC5yZXF1ZXN0UGVybWlzc2lvbigpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgaWYgKHJlc3BvbnNlID09ICdncmFudGVkJykge1xyXG4gICAgICAgICAgLy8gQWRkIGEgbGlzdGVuZXIgdG8gZ2V0IHNtYXJ0cGhvbmUgb3JpZW50YXRpb25cclxuICAgICAgICAgIC8vIGluIHRoZSBhbHBoYS1iZXRhLWdhbW1hIGF4ZXMgKHVuaXRzIGluIGRlZ3JlZXMpXHJcbiAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignZGV2aWNlb3JpZW50YXRpb24nLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgbGV0IHVwZGF0ZVJhdGUgPSAxIC8gNjA7XHJcbiAgICAgICAgICAgIC8vIEV4cG9zZSBlYWNoIG9yaWVudGF0aW9uIGFuZ2xlIGluIGEgbW9yZSByZWFkYWJsZSB3YXlcclxuICAgICAgICAgICAgbGV0IHJvdGF0aW9uX2RlZ3JlZXMgPSBldmVudC5hbHBoYTtcclxuICAgICAgICAgICAgbGV0IGZyb250VG9CYWNrX2RlZ3JlZXMgPSBldmVudC5iZXRhO1xyXG4gICAgICAgICAgICBsZXQgbGVmdFRvUmlnaHRfZGVncmVlcyA9IGV2ZW50LmdhbW1hO1xyXG5cclxuICAgICAgICAgICAgbmV3IE1lbnVCdXR0b24odGhpcywgMTAwLCAyNTAsICdjbGlja2VkJywgKCkgPT4gY29uc29sZS5sb2coJ2hlbHAgYnV0dG9uIGNsaWNrZWQnKSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7Ki9cclxuXHJcbiAgICAvL25ldyBNZW51QnV0dG9uKHRoaXMsIDEwMCwgMzUwLCAnSGVscCcsICgpID0+IGNvbnNvbGUubG9nKCdoZWxwIGJ1dHRvbiBjbGlja2VkJykpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBJbnB1dCwgR2FtZU9iamVjdHMsIEJsZW5kTW9kZXMgfSBmcm9tICdwaGFzZXInO1xyXG5pbXBvcnQgeyBnZXRHYW1lV2lkdGgsIGdldEdhbWVIZWlnaHQsIGRyaW5rVG9Db2xvck1hcCB9IGZyb20gJy4uL2hlbHBlcnMnO1xyXG5cclxuY29uc3Qgc2NlbmVDb25maWc6IFBoYXNlci5UeXBlcy5TY2VuZXMuU2V0dGluZ3NDb25maWcgPSB7XHJcbiAgYWN0aXZlOiBmYWxzZSxcclxuICB2aXNpYmxlOiBmYWxzZSxcclxuICBrZXk6ICdNdWRkbGUgRHJpbmsnLFxyXG59O1xyXG5jbGFzcyBHYW1lU2NlbmVBcmd1bWVudHMge1xyXG4gIHB1YmxpYyBvbkZpbmlzaDogRnVuY3Rpb247XHJcbn1cclxuZXhwb3J0IGNsYXNzIE11ZGRsZVNjZW5lIGV4dGVuZHMgUGhhc2VyLlNjZW5lIHtcclxuICBwdWJsaWMgc3BlZWQgPSAyMDA7XHJcbiAgcHVibGljIG9uRmluaXNoOiBGdW5jdGlvbjtcclxuICBwcml2YXRlIGVtcHR5R2xhc3M6IFBoYXNlci5HYW1lT2JqZWN0cy5TcHJpdGU7XHJcblxyXG4gIHByaXZhdGUgY3Vyc29yS2V5czogUGhhc2VyLlR5cGVzLklucHV0LktleWJvYXJkLkN1cnNvcktleXM7XHJcbiAgcHJpdmF0ZSBtdWRkbGVyOiBQaGFzZXIuR2FtZU9iamVjdHMuU3ByaXRlO1xyXG4gIHByaXZhdGUgbXVkZGxlQ29udGFpbmVyUmVjdDogUGhhc2VyLkdhbWVPYmplY3RzLlJlY3RhbmdsZTtcclxuICBwcml2YXRlIG1vdmluZ1RocmVzaG9sZFJlY3Q6IFBoYXNlci5HYW1lT2JqZWN0cy5SZWN0YW5nbGU7XHJcbiAgcHJpdmF0ZSBmaWxsUmVjdDogUGhhc2VyLkdhbWVPYmplY3RzLlJlY3RhbmdsZTtcclxuXHJcbiAgcHJpdmF0ZSBjb250ZW50czogc3RyaW5nW10gPSBbXTtcclxuICBwcml2YXRlIGdsYXNzRmlsbGVyczogUGhhc2VyLkdhbWVPYmplY3RzLlNwcml0ZVtdID0gW107XHJcblxyXG4gIHByaXZhdGUgaXNQb3VyaW5nID0gMDtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcihzY2VuZUNvbmZpZyk7XHJcbiAgfVxyXG4gIHB1YmxpYyB0ZXh0MTogUGhhc2VyLkdhbWVPYmplY3RzLlRleHQ7XHJcbiAgcHVibGljIHRleHQyOiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dDtcclxuICBwdWJsaWMgdGV4dDM6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0O1xyXG4gIHB1YmxpYyB0ZXh0NDogUGhhc2VyLkdhbWVPYmplY3RzLlRleHQ7XHJcbiAgcHVibGljIHRleHQ1OiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dDtcclxuXHJcbiAgcHVibGljIGVyYXNlQ291bnQgPSAwO1xyXG4gIHB1YmxpYyBpY2VMZXZlbCA9IDA7XHJcbiAgcHJpdmF0ZSB0cmFuc2l0aW9uaW5nID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSBzdGFydFBvc2l0aW9uID0gdHJ1ZTtcclxuXHJcbiAgcHVibGljIGluaXQoZGF0YTpHYW1lU2NlbmVBcmd1bWVudHMpe1xyXG4gICAgdGhpcy5vbkZpbmlzaCA9IGRhdGEub25GaW5pc2g7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY3JlYXRlKCk6IHZvaWQge1xyXG4gICAgY29uc29sZS5sb2coJ011ZGRsZScpO1xyXG4gICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSB0aGlzLnN5cy5nYW1lLmNhbnZhcztcclxuICAgIHRoaXMuZW1wdHlHbGFzcyA9IHRoaXMuYWRkLnNwcml0ZSh3aWR0aCAvIDIsIGhlaWdodCAvIDIsICdlbXB0eWdsYXNzJyk7XHJcblxyXG4gICAgdGhpcy50cmFuc2l0aW9uaW5nID0gZmFsc2U7XHJcbiAgICB0aGlzLmVyYXNlQ291bnQgPSAwO1xyXG4gICAgdGhpcy5pY2VMZXZlbCA9IDA7XHJcbiAgICB0aGlzLnN0YXJ0UG9zaXRpb24gPSB0cnVlO1xyXG4gICAgLy8gQWRkIGEgcGxheWVyIHNwcml0ZSB0aGF0IGNhbiBiZSBtb3ZlZCBhcm91bmQuIFBsYWNlIGhpbSBpbiB0aGUgbWlkZGxlIG9mIHRoZSBzY3JlZW4uXHJcblxyXG4gICAgdGhpcy5tdWRkbGVyID0gdGhpcy5hZGRcclxuICAgICAgLnNwcml0ZSh3aWR0aCAvIDIsIGhlaWdodCAvIDIgLSB0aGlzLmVtcHR5R2xhc3MuZGlzcGxheUhlaWdodCAvIDMsICdtdWRkbGVyJylcclxuICAgICAgLnNldEludGVyYWN0aXZlKClcclxuICAgICAgLnNldERlcHRoKDEpXHJcbiAgICAgIC5zZXRTY2FsZSgwLjUpXHJcbiAgICAgIC5zZXRBbmdsZSgxODApO1xyXG4gICAgdGhpcy5tdWRkbGVDb250YWluZXJSZWN0ID0gdGhpcy5hZGRcclxuICAgICAgLnJlY3RhbmdsZShcclxuICAgICAgICB0aGlzLmVtcHR5R2xhc3MueCxcclxuICAgICAgICB0aGlzLmVtcHR5R2xhc3MueSxcclxuICAgICAgICB0aGlzLmVtcHR5R2xhc3MuZGlzcGxheVdpZHRoLFxyXG4gICAgICAgIHRoaXMuZW1wdHlHbGFzcy5kaXNwbGF5SGVpZ2h0LFxyXG4gICAgICAgIDB4MDBmZjAwLFxyXG4gICAgICApXHJcbiAgICAgIC5zZXRTY2FsZSgwLjcpXHJcbiAgICAgIC5zZXREZXB0aCgyKVxyXG4gICAgICAuc2V0QWxwaGEoMC41KTtcclxuICAgIHRoaXMubW92aW5nVGhyZXNob2xkUmVjdCA9IHRoaXMuYWRkXHJcbiAgICAgIC5yZWN0YW5nbGUoXHJcbiAgICAgICAgdGhpcy5lbXB0eUdsYXNzLngsXHJcbiAgICAgICAgdGhpcy5lbXB0eUdsYXNzLnkgKyBoZWlnaHQgLyAxNSxcclxuICAgICAgICB0aGlzLmVtcHR5R2xhc3MuZGlzcGxheVdpZHRoLFxyXG4gICAgICAgIGhlaWdodCAvIDQwLFxyXG4gICAgICAgIDB4MDAwMGZmLFxyXG4gICAgICApXHJcbiAgICAgIC5zZXREZXB0aCgyKVxyXG4gICAgICAuc2V0QWxwaGEoMC41KTtcclxuXHJcbiAgICB0aGlzLmZpbGxSZWN0ID0gdGhpcy5hZGRcclxuICAgICAgLnJlY3RhbmdsZSh0aGlzLmVtcHR5R2xhc3MueCwgdGhpcy5lbXB0eUdsYXNzLmdldEJvdHRvbUxlZnQoKS55LCB0aGlzLmVtcHR5R2xhc3MuZGlzcGxheVdpZHRoLCAxLCAweGZmMDAwMClcclxuICAgICAgLnNldERlcHRoKDIpXHJcbiAgICAgIC5zZXRBbHBoYSgwLjUpXHJcbiAgICAgIC5zZXRCbGVuZE1vZGUoUGhhc2VyLkJsZW5kTW9kZXMuTVVMVElQTFkpO1xyXG5cclxuICAgIGNvbnN0IGNvdmVyID0gdGhpcy5tYWtlLmltYWdlKHtcclxuICAgICAga2V5OiAnb3JhbmdlJyxcclxuICAgICAgYWRkOiBmYWxzZSxcclxuICAgIH0pO1xyXG4gICAgY292ZXIuc2V0U2NhbGUoMC43KTtcclxuICAgIGNvbnNvbGUubG9nKGBjb3ZlcjogJHtjb3Zlci54fSAke2NvdmVyLnl9YCk7XHJcbiAgICAvL2NvdmVyLnNldFBvc2l0aW9uKHRoaXMub3JhbmdlLngsIHRoaXMub3JhbmdlLnkpO1xyXG4gICAgY292ZXIuc2V0RGVwdGgoMSk7XHJcbiAgICAvL2NvdmVyLnNldE9yaWdpbigwLCAwKTtcclxuICAgIC8vdGhpcy5ydC5zZXRPcmlnaW4oMC41LCAwLjUpO1xyXG5cclxuICAgIHRoaXMuaW5wdXQub24oJ2RyYWdzdGFydCcsIChwb2ludGVyLCBnYW1lT2JqZWN0KSA9PiB7XHJcbiAgICAgIGdhbWVPYmplY3Quc2V0VGludCgweDk5OTk5OSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmlucHV0Lm9uKCdkcmFnZW5kJywgKHBvaW50ZXIsIGdhbWVPYmplY3QpID0+IHtcclxuICAgICAgZ2FtZU9iamVjdC5jbGVhclRpbnQoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuaW5wdXQuc2V0RHJhZ2dhYmxlKHRoaXMubXVkZGxlcik7XHJcblxyXG4gICAgdGhpcy5pbnB1dC5vbigncG9pbnRlcnVwJywgKCkgPT4ge1xyXG4gICAgICB0aGlzLnRleHQxLnNldFRleHQoYM64OiAke3RoaXMuaW5wdXQuYWN0aXZlUG9pbnRlci5nZXRBbmdsZSgpfWApO1xyXG4gICAgICB0aGlzLnRleHQyLnNldFRleHQoYHg6ICR7dGhpcy5pbnB1dC5hY3RpdmVQb2ludGVyLmdldERpc3RhbmNlWCgpfWApO1xyXG4gICAgICB0aGlzLnRleHQzLnNldFRleHQoYHk6ICR7dGhpcy5pbnB1dC5hY3RpdmVQb2ludGVyLmdldERpc3RhbmNlWSgpfWApO1xyXG4gICAgICB0aGlzLnRleHQ0LnNldFRleHQoYGQ6ICR7dGhpcy5pbnB1dC5hY3RpdmVQb2ludGVyLmdldERpc3RhbmNlKCl9YCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmlucHV0Lm9uKCdwb2ludGVyZG93bicsICgpID0+IHt9KTtcclxuXHJcbiAgICB0aGlzLmlucHV0Lm9uKCdkcmFnJywgKHBvaW50ZXIsIGdhbWVPYmplY3QsIGRyYWdYLCBkcmFnWSkgPT4ge1xyXG4gICAgICBjb25zdCBzdHggPSBnYW1lT2JqZWN0Lng7XHJcbiAgICAgIGNvbnN0IHN0eSA9IGdhbWVPYmplY3QueTtcclxuICAgICAgZ2FtZU9iamVjdC55ID0gZHJhZ1k7XHJcbiAgICAgIGdhbWVPYmplY3QueCA9IGRyYWdYO1xyXG5cclxuICAgICAgLy8ga2VlcGluZyB0aGUgbXVkZGxlciBpbiB0aGUgZ2xhc3NcclxuICAgICAgY29uc3QgYmxDID0gdGhpcy5tdWRkbGVDb250YWluZXJSZWN0LmdldEJvdHRvbUxlZnQoKTtcclxuICAgICAgY29uc3QgYnJDID0gdGhpcy5tdWRkbGVDb250YWluZXJSZWN0LmdldEJvdHRvbVJpZ2h0KCk7XHJcbiAgICAgIGNvbnN0IHRyQyA9IHRoaXMubXVkZGxlQ29udGFpbmVyUmVjdC5nZXRUb3BSaWdodCgpO1xyXG4gICAgICBjb25zdCBibE0gPSB0aGlzLm11ZGRsZXIuZ2V0VG9wUmlnaHQoKTtcclxuICAgICAgY29uc3QgYnJNID0gdGhpcy5tdWRkbGVyLmdldFRvcExlZnQoKTtcclxuICAgICAgY29uc29sZS5sb2coYmxNLngpO1xyXG4gICAgICBjb25zb2xlLmxvZyhibEMueCk7XHJcbiAgICAgIGlmIChibE0ueCA8IGJsQy54KSB7XHJcbiAgICAgICAgZ2FtZU9iamVjdC55ID0gc3R5O1xyXG4gICAgICAgIGdhbWVPYmplY3QueCA9IHN0eDtcclxuICAgICAgfVxyXG4gICAgICBpZiAoYnJNLnggPiBickMueCkge1xyXG4gICAgICAgIGdhbWVPYmplY3QueSA9IHN0eTtcclxuICAgICAgICBnYW1lT2JqZWN0LnggPSBzdHg7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGJyTS55ID4gYnJDLnkpIHtcclxuICAgICAgICBnYW1lT2JqZWN0LnkgPSBzdHk7XHJcbiAgICAgICAgZ2FtZU9iamVjdC54ID0gc3R4O1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChibE0ueSA8IHRyQy55KSB7XHJcbiAgICAgICAgZ2FtZU9iamVjdC55ID0gc3R5O1xyXG4gICAgICAgIGdhbWVPYmplY3QueCA9IHN0eDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gY2hlY2tpbmcgaWYgaXQgcHJvcGVybHkgbW92ZXMgdXAgYW5kIGRvd25cclxuICAgICAgaWYgKGJsTS55ID4gdGhpcy5tb3ZpbmdUaHJlc2hvbGRSZWN0LmdldEJvdHRvbUxlZnQoKS55ICYmICF0aGlzLnN0YXJ0UG9zaXRpb24pIHtcclxuICAgICAgICB0aGlzLnN0YXJ0UG9zaXRpb24gPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuaWNlTGV2ZWwgKz0gMTtcclxuICAgICAgICB0aGlzLnRleHQxLnNldFRleHQoYCR7dGhpcy5pY2VMZXZlbH1gKTtcclxuICAgICAgICB0aGlzLmZpbGxSZWN0LmRpc3BsYXlIZWlnaHQgKz0gMTU7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGJsTS55IDwgdGhpcy5tb3ZpbmdUaHJlc2hvbGRSZWN0LmdldFRvcExlZnQoKS55ICYmIHRoaXMuc3RhcnRQb3NpdGlvbikge1xyXG4gICAgICAgIHRoaXMuc3RhcnRQb3NpdGlvbiA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMudGV4dDEuc2V0VGV4dChgJHt0aGlzLmljZUxldmVsfWApO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyB0cmFuc2l0aW9uXHJcbiAgICAgIGlmICh0aGlzLmljZUxldmVsID4gNCAmJiB0aGlzLnRyYW5zaXRpb25pbmcgPT0gZmFsc2UpIHtcclxuICAgICAgICB0aGlzLnRyYW5zaXRpb25pbmcgPSB0cnVlO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5zY2VuZS5zdG9wKCk7XHJcbiAgICAgICAgICB0aGlzLm9uRmluaXNoKCk7XHJcbiAgICAgICAgfSwgNTAwKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy50ZXh0MSA9IHRoaXMuYWRkLnRleHQoMTAsIDEwLCAnJywgeyBjb2xvcjogJyMwMGZmMDAnIH0pO1xyXG4gICAgdGhpcy50ZXh0MiA9IHRoaXMuYWRkLnRleHQoMTAsIDI1LCAnJywgeyBjb2xvcjogJyMwMGZmMDAnIH0pO1xyXG4gICAgdGhpcy50ZXh0MyA9IHRoaXMuYWRkLnRleHQoMTAsIDQwLCAnJywgeyBjb2xvcjogJyMwMGZmMDAnIH0pO1xyXG4gICAgdGhpcy50ZXh0NCA9IHRoaXMuYWRkLnRleHQoMTAsIDU1LCAnJywgeyBjb2xvcjogJyMwMGZmMDAnIH0pO1xyXG4gICAgdGhpcy50ZXh0NSA9IHRoaXMuYWRkLnRleHQoMTAsIDcwLCAnJywgeyBjb2xvcjogJyMwMGZmMDAnIH0pO1xyXG4gICAgdGhpcy50ZXh0MS5zZXRUZXh0KGAke3RoaXMuaWNlTGV2ZWx9YCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdXBkYXRlKCk6IHZvaWQge31cclxufVxyXG4iLCJpbXBvcnQgeyBJbnB1dCwgR2FtZU9iamVjdHMsIEJsZW5kTW9kZXMgfSBmcm9tICdwaGFzZXInO1xyXG5pbXBvcnQgeyBnZXRHYW1lV2lkdGgsIGdldEdhbWVIZWlnaHQsIGRyaW5rVG9Db2xvck1hcCB9IGZyb20gJy4uL2hlbHBlcnMnO1xyXG5cclxuY29uc3Qgc2NlbmVDb25maWc6IFBoYXNlci5UeXBlcy5TY2VuZXMuU2V0dGluZ3NDb25maWcgPSB7XHJcbiAgYWN0aXZlOiBmYWxzZSxcclxuICB2aXNpYmxlOiBmYWxzZSxcclxuICBrZXk6ICdPcmFuZ2UgUGVlbCcsXHJcbn07XHJcblxyXG5jbGFzcyBHYW1lU2NlbmVBcmd1bWVudHMge1xyXG4gIHB1YmxpYyBvbkZpbmlzaDogRnVuY3Rpb247XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBPcmFuZ2VTY2VuZSBleHRlbmRzIFBoYXNlci5TY2VuZSB7XHJcbiAgcHVibGljIHNwZWVkID0gMjAwO1xyXG4gIHB1YmxpYyBvbkZpbmlzaDogRnVuY3Rpb247XHJcblxyXG4gIHByaXZhdGUgY3Vyc29yS2V5czogUGhhc2VyLlR5cGVzLklucHV0LktleWJvYXJkLkN1cnNvcktleXM7XHJcbiAgcHJpdmF0ZSBvcmFuZ2U6IFBoYXNlci5HYW1lT2JqZWN0cy5TcHJpdGU7XHJcbiAgcHJpdmF0ZSBvcmFuZ2VQZWVsZWQ6IFBoYXNlci5HYW1lT2JqZWN0cy5TcHJpdGU7XHJcbiAgcHJpdmF0ZSBjYW5lbGxlOiBQaGFzZXIuR2FtZU9iamVjdHMuU3ByaXRlO1xyXG4gIHByaXZhdGUgYmxhZGVSZWN0OiBQaGFzZXIuR2FtZU9iamVjdHMuUmVjdGFuZ2xlO1xyXG5cclxuICBwcml2YXRlIGNvbnRlbnRzOiBzdHJpbmdbXSA9IFtdO1xyXG4gIHByaXZhdGUgZ2xhc3NGaWxsZXJzOiBQaGFzZXIuR2FtZU9iamVjdHMuU3ByaXRlW10gPSBbXTtcclxuXHJcbiAgcHJpdmF0ZSBpc1BvdXJpbmcgPSAwO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKHNjZW5lQ29uZmlnKTtcclxuICB9XHJcbiAgcHVibGljIHRleHQxOiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dDtcclxuICBwdWJsaWMgdGV4dDI6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0O1xyXG4gIHB1YmxpYyB0ZXh0MzogUGhhc2VyLkdhbWVPYmplY3RzLlRleHQ7XHJcbiAgcHVibGljIHRleHQ0OiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dDtcclxuICBwdWJsaWMgdGV4dDU6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0O1xyXG4gIHB1YmxpYyBydDogUGhhc2VyLkdhbWVPYmplY3RzLlJlbmRlclRleHR1cmU7XHJcbiAgcHVibGljIGVyYXNlQ291bnQgPSAwO1xyXG4gIHB1YmxpYyBpY2VMZXZlbCA9IDA7XHJcbiAgcHJpdmF0ZSB0cmFuc2l0aW9uaW5nID0gZmFsc2U7XHJcblxyXG4gIHB1YmxpYyBpbml0KGRhdGE6IEdhbWVTY2VuZUFyZ3VtZW50cyk6IHZvaWR7XHJcbiAgICB0aGlzLm9uRmluaXNoID0gZGF0YS5vbkZpbmlzaDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjcmVhdGUoKTogdm9pZCB7XHJcbiAgICBjb25zb2xlLmxvZygnT3JhbmdlJyk7XHJcbiAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IHRoaXMuc3lzLmdhbWUuY2FudmFzO1xyXG4gICAgdGhpcy50cmFuc2l0aW9uaW5nID0gZmFsc2U7XHJcbiAgICB0aGlzLmVyYXNlQ291bnQgPSAwO1xyXG4gICAgdGhpcy5pY2VMZXZlbCA9IDA7XHJcbiAgICAvLyBBZGQgYSBwbGF5ZXIgc3ByaXRlIHRoYXQgY2FuIGJlIG1vdmVkIGFyb3VuZC4gUGxhY2UgaGltIGluIHRoZSBtaWRkbGUgb2YgdGhlIHNjcmVlbi5cclxuICAgIHRoaXMub3JhbmdlUGVlbGVkID0gdGhpcy5hZGQuc3ByaXRlKHdpZHRoIC8gMiwgaGVpZ2h0IC8gNCwgJ29yYW5nZScpO1xyXG4gICAgdGhpcy5vcmFuZ2VQZWVsZWQuc2V0U2NhbGUoMC43KTtcclxuICAgIHRoaXMub3JhbmdlID0gdGhpcy5hZGQuc3ByaXRlKHdpZHRoIC8gMiwgaGVpZ2h0IC8gNCwgJ29yYW5nZWluc2lkZScpO1xyXG4gICAgdGhpcy5vcmFuZ2Uuc2V0U2NhbGUoMC43KTtcclxuXHJcbiAgICB0aGlzLmNhbmVsbGUgPSB0aGlzLmFkZFxyXG4gICAgICAuc3ByaXRlKCgzICogd2lkdGgpIC8gNCwgKDMgKiBoZWlnaHQpIC8gNCwgJ2NhbmVsbGVrbmlmZScpXHJcbiAgICAgIC5zZXRJbnRlcmFjdGl2ZSgpXHJcbiAgICAgIC5zZXREZXB0aCgxKTtcclxuICAgIHRoaXMuYmxhZGVSZWN0ID0gdGhpcy5hZGRcclxuICAgICAgLnJlY3RhbmdsZShcclxuICAgICAgICB0aGlzLmNhbmVsbGUueCArIHRoaXMuY2FuZWxsZS5kaXNwbGF5V2lkdGggLyA4LFxyXG4gICAgICAgIHRoaXMuY2FuZWxsZS55IC0gdGhpcy5jYW5lbGxlLmRpc3BsYXlIZWlnaHQgLyAyICsgdGhpcy5jYW5lbGxlLmRpc3BsYXlIZWlnaHQgKiAoMSAvIDQwKSxcclxuICAgICAgICB0aGlzLmNhbmVsbGUuZGlzcGxheVdpZHRoICogKDMgLyA0KSxcclxuICAgICAgICB0aGlzLmNhbmVsbGUuZGlzcGxheUhlaWdodCAqICgxIC8gMjApLFxyXG4gICAgICAgIDB4MDBmZjAwLFxyXG4gICAgICApXHJcbiAgICAgIC5zZXREZXB0aCgyKVxyXG4gICAgICAuc2V0QWxwaGEoMC41KTtcclxuXHJcbiAgICBjb25zdCBjb3ZlciA9IHRoaXMubWFrZS5pbWFnZSh7XHJcbiAgICAgIGtleTogJ29yYW5nZScsXHJcbiAgICAgIGFkZDogZmFsc2UsXHJcbiAgICB9KTtcclxuICAgIGNvdmVyLnNldFNjYWxlKDAuNyk7XHJcbiAgICBjb25zb2xlLmxvZyhgY292ZXI6ICR7Y292ZXIueH0gJHtjb3Zlci55fWApO1xyXG4gICAgLy9jb3Zlci5zZXRQb3NpdGlvbih0aGlzLm9yYW5nZS54LCB0aGlzLm9yYW5nZS55KTtcclxuICAgIGNvdmVyLnNldERlcHRoKDEpO1xyXG4gICAgLy9jb3Zlci5zZXRPcmlnaW4oMCwgMCk7XHJcbiAgICB0aGlzLnJ0ID0gdGhpcy5hZGQucmVuZGVyVGV4dHVyZShcclxuICAgICAgdGhpcy5vcmFuZ2UuZ2V0VG9wTGVmdCgpLngsXHJcbiAgICAgIHRoaXMub3JhbmdlLmdldFRvcExlZnQoKS55LFxyXG4gICAgICB0aGlzLm9yYW5nZVBlZWxlZC5kaXNwbGF5V2lkdGgsXHJcbiAgICAgIHRoaXMub3JhbmdlUGVlbGVkLmRpc3BsYXlIZWlnaHQsXHJcbiAgICApO1xyXG4gICAgLy90aGlzLnJ0LnNldE9yaWdpbigwLjUsIDAuNSk7XHJcbiAgICBjb25zb2xlLmxvZyhgcnQ6ICR7dGhpcy5ydC54fSAke3RoaXMucnQueX1gKTtcclxuICAgIHRoaXMucnQuc2V0UG9zaXRpb24odGhpcy5vcmFuZ2VQZWVsZWQuZ2V0VG9wTGVmdCgpLngsIHRoaXMub3JhbmdlUGVlbGVkLmdldFRvcExlZnQoKS55KTtcclxuICAgIC8vdGhpcy5ydC5zZXRUaW50KDB4MDBGRjAwKTtcclxuICAgIHRoaXMucnQuZHJhdyhjb3ZlciwgdGhpcy5vcmFuZ2VQZWVsZWQuZGlzcGxheVdpZHRoIC8gMiwgdGhpcy5vcmFuZ2VQZWVsZWQuZGlzcGxheUhlaWdodCAvIDIpOyAvLywgd2lkdGggKiAwLjUsIGhlaWdodCAqIDAuNSlcclxuICAgIGNvbnNvbGUubG9nKGBydDogJHt0aGlzLnJ0Lnh9ICR7dGhpcy5ydC55fWApO1xyXG4gICAgY29uc29sZS5sb2coYG9yYW5nZTogJHt0aGlzLm9yYW5nZS54fSAke3RoaXMub3JhbmdlLnl9YCk7XHJcbiAgICBjb25zb2xlLmxvZyhgb3JhbmdlUGVlbGVkOiAke3RoaXMub3JhbmdlUGVlbGVkLnh9ICR7dGhpcy5vcmFuZ2VQZWVsZWQueX1gKTtcclxuXHJcbiAgICB0aGlzLmlucHV0Lm9uKCdkcmFnc3RhcnQnLCAocG9pbnRlciwgZ2FtZU9iamVjdCkgPT4ge1xyXG4gICAgICBnYW1lT2JqZWN0LnNldFRpbnQoMHg5OTk5OTkpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5pbnB1dC5vbignZHJhZ2VuZCcsIChwb2ludGVyLCBnYW1lT2JqZWN0KSA9PiB7XHJcbiAgICAgIGdhbWVPYmplY3QuY2xlYXJUaW50KCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmlucHV0LnNldERyYWdnYWJsZSh0aGlzLmNhbmVsbGUpO1xyXG5cclxuICAgIHRoaXMuaW5wdXQub24oJ3BvaW50ZXJ1cCcsICgpID0+IHtcclxuICAgICAgdGhpcy50ZXh0MS5zZXRUZXh0KGDOuDogJHt0aGlzLmlucHV0LmFjdGl2ZVBvaW50ZXIuZ2V0QW5nbGUoKX1gKTtcclxuICAgICAgdGhpcy50ZXh0Mi5zZXRUZXh0KGB4OiAke3RoaXMuaW5wdXQuYWN0aXZlUG9pbnRlci5nZXREaXN0YW5jZVgoKX1gKTtcclxuICAgICAgdGhpcy50ZXh0My5zZXRUZXh0KGB5OiAke3RoaXMuaW5wdXQuYWN0aXZlUG9pbnRlci5nZXREaXN0YW5jZVkoKX1gKTtcclxuICAgICAgdGhpcy50ZXh0NC5zZXRUZXh0KGBkOiAke3RoaXMuaW5wdXQuYWN0aXZlUG9pbnRlci5nZXREaXN0YW5jZSgpfWApO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5pbnB1dC5vbigncG9pbnRlcmRvd24nLCAoKSA9PiB7fSk7XHJcblxyXG4gICAgdGhpcy5pbnB1dC5vbignZHJhZycsIChwb2ludGVyLCBnYW1lT2JqZWN0LCBkcmFnWCwgZHJhZ1kpID0+IHtcclxuICAgICAgLy8gZnJvbSBoZXJlOiBuZWVkIHRvIDEuIGNhbGN1bGF0ZSBhbmdsZSBiZXR3ZWVuIGJhc2Ugb2Ygb2JqZWN0IGFuZCBjdXJzb3JcclxuICAgICAgLy8gMi4gcm90YXRlIHVudGlsIHRvcCBvZiBib3R0bGUgaXMgcG9pbnRpbmcgdG8gY3Vyc29yXHJcblxyXG4gICAgICBnYW1lT2JqZWN0LnkgPSBkcmFnWTtcclxuICAgICAgZ2FtZU9iamVjdC54ID0gZHJhZ1g7XHJcbiAgICAgIHRoaXMuYmxhZGVSZWN0LnNldFBvc2l0aW9uKFxyXG4gICAgICAgIGRyYWdYICsgdGhpcy5jYW5lbGxlLmRpc3BsYXlXaWR0aCAvIDgsXHJcbiAgICAgICAgZHJhZ1kgLSB0aGlzLmNhbmVsbGUuZGlzcGxheUhlaWdodCAvIDIgKyB0aGlzLmNhbmVsbGUuZGlzcGxheUhlaWdodCAqICgxIC8gNDApLFxyXG4gICAgICApO1xyXG4gICAgICB0aGlzLnRleHQyLnNldFRleHQoYGRyYWdZOiAke2RyYWdZfWApO1xyXG4gICAgICB0aGlzLnRleHQzLnNldFRleHQoYHk6ICR7dGhpcy5pbnB1dC5hY3RpdmVQb2ludGVyLnByZXZQb3NpdGlvbi55fWApO1xyXG4gICAgICBpZiAoXHJcbiAgICAgICAgdGhpcy5pbnB1dC5hY3RpdmVQb2ludGVyLnByZXZQb3NpdGlvbi55IDwgdGhpcy5pbnB1dC5hY3RpdmVQb2ludGVyLnkgJiZcclxuICAgICAgICB0aGlzLm9yYW5nZS5nZXRCb3VuZHMoKS5jb250YWlucyh0aGlzLmJsYWRlUmVjdC54LCB0aGlzLmJsYWRlUmVjdC55KVxyXG4gICAgICApIHtcclxuICAgICAgICBjb25zdCB4ID0gdGhpcy5ibGFkZVJlY3QueCAtIHRoaXMucnQueDtcclxuICAgICAgICBjb25zdCB5ID0gdGhpcy5ibGFkZVJlY3QueSAtIHRoaXMucnQueTtcclxuICAgICAgICB0aGlzLnJ0LmVyYXNlKFxyXG4gICAgICAgICAgdGhpcy5ibGFkZVJlY3QsXHJcbiAgICAgICAgICB4LFxyXG4gICAgICAgICAgeSxcclxuICAgICAgICAgIC8vdGhpcy5ibGFkZVJlY3QueCAtIHRoaXMuYmxhZGVSZWN0LmRpc3BsYXlXaWR0aCAvIDIsXHJcbiAgICAgICAgICAvL3RoaXMuYmxhZGVSZWN0LnkgLSB0aGlzLmJsYWRlUmVjdC5kaXNwbGF5SGVpZ2h0LFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdGhpcy5lcmFzZUNvdW50Kys7XHJcbiAgICAgICAgaWYgKHRoaXMuZXJhc2VDb3VudCA+PSAxMDAgJiYgIXRoaXMudHJhbnNpdGlvbmluZykge1xyXG4gICAgICAgICAgdGhpcy50cmFuc2l0aW9uaW5nID0gdHJ1ZTtcclxuICAgICAgICAgIGRvY3VtZW50LmNvb2tpZSA9IGBvcmFuZ2U9MWA7XHJcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zY2VuZS5zdG9wKCk7XHJcbiAgICAgICAgICAgIHRoaXMub25GaW5pc2goKTtcclxuICAgICAgICAgIH0sIDUwMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLnRleHQxID0gdGhpcy5hZGQudGV4dCgxMCwgMTAsICcnLCB7IGNvbG9yOiAnIzAwZmYwMCcgfSk7XHJcbiAgICB0aGlzLnRleHQyID0gdGhpcy5hZGQudGV4dCgxMCwgMjUsICcnLCB7IGNvbG9yOiAnIzAwZmYwMCcgfSk7XHJcbiAgICB0aGlzLnRleHQzID0gdGhpcy5hZGQudGV4dCgxMCwgNDAsICcnLCB7IGNvbG9yOiAnIzAwZmYwMCcgfSk7XHJcbiAgICB0aGlzLnRleHQ0ID0gdGhpcy5hZGQudGV4dCgxMCwgNTUsICcnLCB7IGNvbG9yOiAnIzAwZmYwMCcgfSk7XHJcbiAgICB0aGlzLnRleHQ1ID0gdGhpcy5hZGQudGV4dCgxMCwgNzAsICcnLCB7IGNvbG9yOiAnIzAwZmYwMCcgfSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdXBkYXRlKCk6IHZvaWQge31cclxufVxyXG4iLCJpbXBvcnQgc2lnbmFsUiA9IHJlcXVpcmUoJ0BtaWNyb3NvZnQvc2lnbmFscicpO1xyXG5pbXBvcnQgeyBNZW51QnV0dG9uIH0gZnJvbSAnLi4vdWkvbWVudS1idXR0b24nO1xyXG5pbXBvcnQgKiBhcyBxdWVyeXN0cmluZyBmcm9tIFwicXVlcnktc3RyaW5nXCI7XHJcblxyXG5jb25zdCBzY2VuZUNvbmZpZzogUGhhc2VyLlR5cGVzLlNjZW5lcy5TZXR0aW5nc0NvbmZpZyA9IHtcclxuICBhY3RpdmU6IGZhbHNlLFxyXG4gIHZpc2libGU6IGZhbHNlLFxyXG4gIGtleTogJ1Blcm1pc3Npb25zJyxcclxufTtcclxuY2xhc3MgR2FtZVNjZW5lQXJndW1lbnRzIHtcclxuICBwdWJsaWMgaHViQ29ubmVjdGlvbjogc2lnbmFsUi5IdWJDb25uZWN0aW9uO1xyXG59XHJcbi8qKlxyXG4gKiBUaGUgaW5pdGlhbCBzY2VuZSB0aGF0IHN0YXJ0cywgc2hvd3MgdGhlIHNwbGFzaCBzY3JlZW5zLCBhbmQgbG9hZHMgdGhlIG5lY2Vzc2FyeSBhc3NldHMuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgUGVybWlzc2lvbnNTY2VuZSBleHRlbmRzIFBoYXNlci5TY2VuZSB7XHJcbiAgcHJpdmF0ZSBodWJDb25uZWN0aW9uOiBzaWduYWxSLkh1YkNvbm5lY3Rpb247XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcihzY2VuZUNvbmZpZyk7XHJcbiAgfVxyXG4gIHB1YmxpYyBpbml0KGRhdGE6IEdhbWVTY2VuZUFyZ3VtZW50cyk6IHZvaWQge1xyXG4gICAgdGhpcy5odWJDb25uZWN0aW9uID0gZGF0YS5odWJDb25uZWN0aW9uO1xyXG4gIH1cclxuICBwdWJsaWMgY3JlYXRlKCk6IHZvaWQge1xyXG4gICAgY29uc29sZS5sb2coJ1Blcm1pc3Npb25zJyk7XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLmh1YkNvbm5lY3Rpb24pO1xyXG4gICAgbmV3IE1lbnVCdXR0b24odGhpcywgMTAwLCAxNTAsICdFbnRlcicsICgpID0+IHtcclxuICAgICAgdHJ5e1xyXG4gICAgICAgIERldmljZU1vdGlvbkV2ZW50LnJlcXVlc3RQZXJtaXNzaW9uKCkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgIGlmIChyZXNwb25zZSA9PSAnZ3JhbnRlZCcpIHtcclxuICAgICAgICAgICAgLy8gQWRkIGEgbGlzdGVuZXIgdG8gZ2V0IHNtYXJ0cGhvbmUgb3JpZW50YXRpb25cclxuICAgICAgICAgICAgLy8gaW4gdGhlIGFscGhhLWJldGEtZ2FtbWEgYXhlcyAodW5pdHMgaW4gZGVncmVlcylcclxuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2RldmljZW9yaWVudGF0aW9uJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgbGV0IHVwZGF0ZVJhdGUgPSAxIC8gNjA7XHJcbiAgICAgICAgICAgICAgLy8gRXhwb3NlIGVhY2ggb3JpZW50YXRpb24gYW5nbGUgaW4gYSBtb3JlIHJlYWRhYmxlIHdheVxyXG4gICAgICAgICAgICAgIGxldCByb3RhdGlvbl9kZWdyZWVzID0gZXZlbnQuYWxwaGE7XHJcbiAgICAgICAgICAgICAgbGV0IGZyb250VG9CYWNrX2RlZ3JlZXMgPSBldmVudC5iZXRhO1xyXG4gICAgICAgICAgICAgIGxldCBsZWZ0VG9SaWdodF9kZWdyZWVzID0gZXZlbnQuZ2FtbWE7XHJcbiAgXHJcbiAgICAgICAgICAgICAgbmV3IE1lbnVCdXR0b24odGhpcywgMTAwLCAyNTAsICdjbGlja2VkJywgKCkgPT4gY29uc29sZS5sb2coJ2hlbHAgYnV0dG9uIGNsaWNrZWQnKSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIGNhdGNoKGUpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3IgXCIgKyBlKVxyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuc2NlbmUuc3RhcnQoJ01haW5NZW51Jywge2h1YkNvbm5lY3Rpb246IHRoaXMuaHViQ29ubmVjdGlvbn0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IElucHV0LCBHYW1lT2JqZWN0cyB9IGZyb20gJ3BoYXNlcic7XHJcbmltcG9ydCB7IGdldEdhbWVXaWR0aCwgZ2V0R2FtZUhlaWdodCwgZHJpbmtUb0NvbG9yTWFwIH0gZnJvbSAnLi4vaGVscGVycyc7XHJcblxyXG5jb25zdCBzY2VuZUNvbmZpZzogUGhhc2VyLlR5cGVzLlNjZW5lcy5TZXR0aW5nc0NvbmZpZyA9IHtcclxuICBhY3RpdmU6IGZhbHNlLFxyXG4gIHZpc2libGU6IGZhbHNlLFxyXG4gIGtleTogJ1BvdXInLFxyXG59O1xyXG5jbGFzcyBHYW1lU2NlbmVBcmd1bWVudHMge1xyXG4gIHB1YmxpYyBCb3R0bGVTcHJpdGVOYW1lOiBzdHJpbmc7XHJcbiAgcHVibGljIG9uRmluaXNoOiBGdW5jdGlvbjtcclxufVxyXG5leHBvcnQgY2xhc3MgUG91clNjZW5lIGV4dGVuZHMgUGhhc2VyLlNjZW5lIHtcclxuICBwdWJsaWMgc3BlZWQgPSAyMDA7XHJcbiAgcHVibGljIG9uRmluaXNoOiBGdW5jdGlvbjtcclxuXHJcbiAgcHJpdmF0ZSBjdXJzb3JLZXlzOiBQaGFzZXIuVHlwZXMuSW5wdXQuS2V5Ym9hcmQuQ3Vyc29yS2V5cztcclxuICBwcml2YXRlIGJvdHRsZTogUGhhc2VyLkdhbWVPYmplY3RzLlNwcml0ZTtcclxuICAvL3ByaXZhdGUgYm91cmJvbjogUGhhc2VyLkdhbWVPYmplY3RzLlNwcml0ZTtcclxuICBwcml2YXRlIGVtcHR5R2xhc3M6IFBoYXNlci5HYW1lT2JqZWN0cy5TcHJpdGU7XHJcbiAgcHJpdmF0ZSBmaWxsZWRnbGFzczE6IFBoYXNlci5HYW1lT2JqZWN0cy5TcHJpdGU7XHJcbiAgcHJpdmF0ZSBmaWxsZWRnbGFzczI6IFBoYXNlci5HYW1lT2JqZWN0cy5TcHJpdGU7XHJcblxyXG4gIHByaXZhdGUgY29udGVudHM6IHN0cmluZ1tdID0gW107XHJcbiAgcHJpdmF0ZSBnbGFzc0ZpbGxlcnM6IFBoYXNlci5HYW1lT2JqZWN0cy5SZWN0YW5nbGVbXSA9IFtdO1xyXG5cclxuICBwcml2YXRlIGlzUG91cmluZyA9IDA7XHJcbiAgcHJpdmF0ZSBwb3VyQ291bnQgPSAwO1xyXG4gIHByaXZhdGUgdHJhbnNpdGlvbmluZyA9IGZhbHNlO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKHNjZW5lQ29uZmlnKTtcclxuICB9XHJcbiAgcHVibGljIHRleHQxOiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dDtcclxuICBwdWJsaWMgdGV4dDI6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0O1xyXG4gIHB1YmxpYyBib3R0bGVOYW1lOiBzdHJpbmc7XHJcbiAgcHJpdmF0ZSBsaXF1aWRSZWN0YW5nbGU6IFBoYXNlci5HYW1lT2JqZWN0cy5SZWN0YW5nbGU7XHJcblxyXG4gIHB1YmxpYyBpbml0KGRhdGE6IEdhbWVTY2VuZUFyZ3VtZW50cyk6IHZvaWQge1xyXG4gICAgdGhpcy5ib3R0bGVOYW1lID0gZGF0YS5Cb3R0bGVTcHJpdGVOYW1lO1xyXG4gICAgdGhpcy5vbkZpbmlzaCA9IGRhdGEub25GaW5pc2g7XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLmJvdHRsZU5hbWUpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNyZWF0ZSgpOiB2b2lkIHtcclxuICAgIGNvbnNvbGUubG9nKCdQb3VyJyk7XHJcbiAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IHRoaXMuc3lzLmdhbWUuY2FudmFzO1xyXG4gICAgdGhpcy5pc1BvdXJpbmcgPSAwO1xyXG4gICAgdGhpcy5wb3VyQ291bnQgPSAwO1xyXG4gICAgdGhpcy50cmFuc2l0aW9uaW5nID0gZmFsc2U7XHJcbiAgICBcclxuICAgIC8vIEFkZCBhIHBsYXllciBzcHJpdGUgdGhhdCBjYW4gYmUgbW92ZWQgYXJvdW5kLiBQbGFjZSBoaW0gaW4gdGhlIG1pZGRsZSBvZiB0aGUgc2NyZWVuLlxyXG4gICAgdGhpcy5lbXB0eUdsYXNzID0gdGhpcy5hZGQuc3ByaXRlKHdpZHRoIC8gNCwgaGVpZ2h0IC8gMiwgJ2VtcHR5Z2xhc3MnKTtcclxuICAgIC8vdGhpcy5maWxsZWRnbGFzczEgPSB0aGlzLmFkZC5zcHJpdGUod2lkdGggLyA0LCBoZWlnaHQgLyAyLCAnZmlsbGVkZ2xhc3MxJyk7XHJcbiAgICAvL3RoaXMuZmlsbGVkZ2xhc3MyID0gdGhpcy5hZGQuc3ByaXRlKHdpZHRoIC8gNCwgaGVpZ2h0IC8gMiwgJ2ZpbGxlZGdsYXNzMicpO1xyXG4vKlxyXG4gICAgdGhpcy5ib3VyYm9uID0gdGhpcy5hZGQuc3ByaXRlKHdpZHRoIC8gOCwgaGVpZ2h0IC8gNCwgJ2NhbmVsbGVrbmlmZScpLnNldEludGVyYWN0aXZlKCk7XHJcbiAgICB0aGlzLmJvdXJib24ub24oJ3BvaW50ZXJkb3duJywgKCkgPT4ge1xyXG4gICAgICB0aGlzLnRleHQxLnNldFRleHQoJ0Fza2VkJyk7XHJcbiAgICAgIERldmljZU1vdGlvbkV2ZW50LnJlcXVlc3RQZXJtaXNzaW9uKCkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICB0aGlzLnRleHQxLnNldFRleHQocmVzcG9uc2UpO1xyXG4gICAgICAgIGlmIChyZXNwb25zZSA9PSAnZ3JhbnRlZCcpIHtcclxuICAgICAgICAgIC8vIEFkZCBhIGxpc3RlbmVyIHRvIGdldCBzbWFydHBob25lIG9yaWVudGF0aW9uXHJcbiAgICAgICAgICAvLyBpbiB0aGUgYWxwaGEtYmV0YS1nYW1tYSBheGVzICh1bml0cyBpbiBkZWdyZWVzKVxyXG4gICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2RldmljZW9yaWVudGF0aW9uJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHVwZGF0ZVJhdGUgPSAxIC8gNjA7XHJcbiAgICAgICAgICAgIC8vIEV4cG9zZSBlYWNoIG9yaWVudGF0aW9uIGFuZ2xlIGluIGEgbW9yZSByZWFkYWJsZSB3YXlcclxuICAgICAgICAgICAgY29uc3Qgcm90YXRpb25fZGVncmVlcyA9IGV2ZW50LmFscGhhO1xyXG4gICAgICAgICAgICBjb25zdCBmcm9udFRvQmFja19kZWdyZWVzID0gZXZlbnQuYmV0YTtcclxuICAgICAgICAgICAgY29uc3QgbGVmdFRvUmlnaHRfZGVncmVlcyA9IGV2ZW50LmdhbW1hO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5ib3R0bGUuYW5nbGUgPSBmcm9udFRvQmFja19kZWdyZWVzIC0gOTA7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7Ki9cclxuXHJcbiAgICBjb25zb2xlLmxvZyhgZ2xhc3MgeDogJHt3aWR0aCAvIDR9YCk7XHJcbiAgICBjb25zb2xlLmxvZyhgZ2xhc3MgeTogJHtoZWlnaHQgLyAyfWApO1xyXG4gICAgdGhpcy5lbXB0eUdsYXNzLnNldFNjYWxlKDAuNSk7XHJcbiAgICB0aGlzLmVtcHR5R2xhc3Muc2NhbGVZID0gdGhpcy5lbXB0eUdsYXNzLnNjYWxlWSAqIDAuNTtcclxuICAgIC8vdGhpcy5lbXB0eUdsYXNzLmJsZW5kTW9kZSA9IFBoYXNlci5CbGVuZE1vZGVzLk1VTFRJUExZO1xyXG5cclxuICAgIHRoaXMuYm90dGxlID0gdGhpcy5hZGQuc3ByaXRlKHdpZHRoIC8gMS41LCBoZWlnaHQgLyAyLCB0aGlzLmJvdHRsZU5hbWUpLnNldEludGVyYWN0aXZlKCk7XHJcbiAgICB0aGlzLmJvdHRsZS5zZXRTY2FsZSgwLjc1KTtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMuZW1wdHlHbGFzcy54KTtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMuYm90dGxlLmRpc3BsYXlIZWlnaHQpO1xyXG4gICAgdGhpcy5ib3R0bGUuc2V0UG9zaXRpb24odGhpcy5lbXB0eUdsYXNzLnggKyB0aGlzLmJvdHRsZS5kaXNwbGF5SGVpZ2h0IC8gNCk7XHJcbiAgICB0aGlzLmJvdHRsZS5zZXRTY2FsZSgwLjUpO1xyXG5cclxuICAgIHRoaXMuYm90dGxlLm9uKCdwb2ludGVyb3ZlcicsICgpID0+IHtcclxuICAgICAgdGhpcy5ib3R0bGUuc2V0VGludCgweGNjY2NjYyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmJvdHRsZS5vbigncG9pbnRlcm91dCcsICgpID0+IHtcclxuICAgICAgdGhpcy5ib3R0bGUuY2xlYXJUaW50KCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmlucHV0LnNldERyYWdnYWJsZSh0aGlzLmJvdHRsZSk7XHJcblxyXG4gICAgdGhpcy5pbnB1dC5vbignZHJhZ3N0YXJ0JywgKHBvaW50ZXIsIGdhbWVPYmplY3QpID0+IHtcclxuICAgICAgZ2FtZU9iamVjdC5zZXRUaW50KDB4OTk5OTk5KTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5saXF1aWRSZWN0YW5nbGUgPSB0aGlzLmFkZFxyXG4gICAgICAucmVjdGFuZ2xlKFxyXG4gICAgICAgIHRoaXMuZW1wdHlHbGFzcy54LFxyXG4gICAgICAgIHRoaXMuZW1wdHlHbGFzcy55ICsgdGhpcy5lbXB0eUdsYXNzLmRpc3BsYXlIZWlnaHQgLyAyLFxyXG4gICAgICAgIHRoaXMuZW1wdHlHbGFzcy5kaXNwbGF5V2lkdGgsXHJcbiAgICAgICAgKyt0aGlzLnBvdXJDb3VudCxcclxuICAgICAgICBkcmlua1RvQ29sb3JNYXAuZ2V0KHRoaXMuYm90dGxlTmFtZSksXHJcbiAgICAgIClcclxuICAgICAgLnNldEJsZW5kTW9kZShQaGFzZXIuQmxlbmRNb2Rlcy5NVUxUSVBMWSk7XHJcblxyXG4gICAgdGhpcy5pbnB1dC5vbignZHJhZycsIChwb2ludGVyLCBnYW1lT2JqZWN0LCBkcmFnWCwgZHJhZ1kpID0+IHtcclxuICAgICAgLy8gZnJvbSBoZXJlOiBuZWVkIHRvIDEuIGNhbGN1bGF0ZSBhbmdsZSBiZXR3ZWVuIGJhc2Ugb2Ygb2JqZWN0IGFuZCBjdXJzb3JcclxuICAgICAgLy8gMi4gcm90YXRlIHVudGlsIHRvcCBvZiBib3R0bGUgaXMgcG9pbnRpbmcgdG8gY3Vyc29yXHJcbiAgICAgIGNvbnN0IHkxID0gZ2FtZU9iamVjdC55O1xyXG4gICAgICBjb25zdCB5MiA9IHRoaXMuaW5wdXQuYWN0aXZlUG9pbnRlci55O1xyXG4gICAgICBjb25zdCB4MSA9IGdhbWVPYmplY3QueDtcclxuICAgICAgY29uc3QgeDIgPSB0aGlzLmlucHV0LmFjdGl2ZVBvaW50ZXIueDtcclxuXHJcbiAgICAgIGNvbnN0IHNsb3BlUmFkcyA9IE1hdGguYXRhbjIoeTIgLSB5MSwgeDIgLSB4MSk7XHJcbiAgICAgIGNvbnN0IGFkanVzdGVkID0gc2xvcGVSYWRzICsgMS41NzA3OTYzMztcclxuXHJcbiAgICAgIHRoaXMudGV4dDEuc2V0VGV4dChgJHt0aGlzLnBvdXJDb3VudH1gKTtcclxuICAgICAgaWYgKGFkanVzdGVkID49IE1hdGguUEkgfHwgYWRqdXN0ZWQgPD0gMC4wMjUpIHtcclxuICAgICAgICBnYW1lT2JqZWN0LnJvdGF0aW9uID0gc2xvcGVSYWRzICsgMS41NzA3OTYzMztcclxuICAgICAgfVxyXG5cclxuICAgICAgLyppZiAoYWRqdXN0ZWQgPiA0KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNQb3VyaW5nID09IDApIHtcclxuICAgICAgICAgIHRoaXMuaXNQb3VyaW5nID0gMTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5pc1BvdXJpbmcgPSAwO1xyXG4gICAgICB9Ki9cclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuaW5wdXQub24oJ2RyYWdlbmQnLCAocG9pbnRlciwgZ2FtZU9iamVjdCkgPT4ge1xyXG4gICAgICBnYW1lT2JqZWN0LmNsZWFyVGludCgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gVGhpcyBpcyBhIG5pY2UgaGVscGVyIFBoYXNlciBwcm92aWRlcyB0byBjcmVhdGUgbGlzdGVuZXJzIGZvciBzb21lIG9mIHRoZSBtb3N0IGNvbW1vbiBrZXlzLlxyXG4gICAgdGhpcy5jdXJzb3JLZXlzID0gdGhpcy5pbnB1dC5rZXlib2FyZC5jcmVhdGVDdXJzb3JLZXlzKCk7XHJcblxyXG4gICAgdGhpcy50ZXh0MSA9IHRoaXMuYWRkLnRleHQoMTAsIDEwLCAnJywgeyBjb2xvcjogJyMwMGZmMDAnIH0pO1xyXG4gICAgdGhpcy50ZXh0MiA9IHRoaXMuYWRkLnRleHQoMTAwLCAxMCwgJycsIHsgY29sb3I6ICcjMDBmZjAwJyB9KTtcclxuXHJcbiAgICB0aGlzLmJvdHRsZS5zZXREZXB0aCgxKTtcclxuICAgIHRoaXMuY2FsbGJhY2soKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyB1cGRhdGUoKTogdm9pZCB7XHJcbiAgICAvLyBFdmVyeSBmcmFtZSwgd2UgY3JlYXRlIGEgbmV3IHZlbG9jaXR5IGZvciB0aGUgc3ByaXRlIGJhc2VkIG9uIHdoYXQga2V5cyB0aGUgcGxheWVyIGlzIGhvbGRpbmcgZG93bi5cclxuICAgIHRoaXMudGV4dDEuc2V0VGV4dChgJHt0aGlzLmJvdHRsZS5yb3RhdGlvbn1gKTtcclxuICAgIGlmICh0aGlzLmJvdHRsZS5yb3RhdGlvbiA8IC0xLjcgJiYgdGhpcy5ib3R0bGUucm90YXRpb24gPiAtMi4zKSB7XHJcbiAgICAgIGlmICh0aGlzLmlzUG91cmluZyA9PSAwKSB7XHJcbiAgICAgICAgdGhpcy5pc1BvdXJpbmcgPSAxO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmlzUG91cmluZyA9IDA7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5pc1BvdXJpbmcgPT0gMSAmJiB0aGlzLmxpcXVpZFJlY3RhbmdsZS5kaXNwbGF5SGVpZ2h0IDwgdGhpcy5lbXB0eUdsYXNzLmRpc3BsYXlIZWlnaHQgKiAxLjkpIHtcclxuICAgICAgdGhpcy5saXF1aWRSZWN0YW5nbGUuZGlzcGxheUhlaWdodCA9IHRoaXMubGlxdWlkUmVjdGFuZ2xlLmRpc3BsYXlIZWlnaHQgKyAxLjU7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMubGlxdWlkUmVjdGFuZ2xlLmRpc3BsYXlIZWlnaHQgPiB0aGlzLmVtcHR5R2xhc3MuZGlzcGxheUhlaWdodCAqIDEuOSAmJiAhdGhpcy50cmFuc2l0aW9uaW5nKSB7XHJcbiAgICAgIHRoaXMudHJhbnNpdGlvbmluZyA9IHRydWU7XHJcbiAgICAgIGRvY3VtZW50LmNvb2tpZSA9IGAke3RoaXMuYm90dGxlTmFtZX09MWA7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2NlbmUuc3RvcCgpO1xyXG4gICAgICAgIHRoaXMub25GaW5pc2goKTtcclxuICAgICAgfSwgNTAwKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBjYWxsYmFjaygpOiB2b2lkIHtcclxuICAgIHRoaXMuY2FsbEFwcGxlKCk7XHJcbiAgICAvL1xyXG4gIH1cclxuICBwdWJsaWMgY2FsbEFwcGxlKCk6IHZvaWQge1xyXG4gICAgdHJ5IHtcclxuICAgICAgRGV2aWNlTW90aW9uRXZlbnQucmVxdWVzdFBlcm1pc3Npb24oKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIHRoaXMudGV4dDEuc2V0VGV4dChyZXNwb25zZSk7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2RldmljZW9yaWVudGF0aW9uJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhldmVudCk7XHJcbiAgICAgICAgICBjb25zdCB1cGRhdGVSYXRlID0gMSAvIDYwO1xyXG4gICAgICAgICAgLy8gRXhwb3NlIGVhY2ggb3JpZW50YXRpb24gYW5nbGUgaW4gYSBtb3JlIHJlYWRhYmxlIHdheVxyXG4gICAgICAgICAgY29uc3Qgcm90YXRpb25fZGVncmVlcyA9IGV2ZW50LmFscGhhO1xyXG4gICAgICAgICAgY29uc3QgZnJvbnRUb0JhY2tfZGVncmVlcyA9IGV2ZW50LmJldGE7XHJcbiAgICAgICAgICBjb25zdCBsZWZ0VG9SaWdodF9kZWdyZWVzID0gZXZlbnQuZ2FtbWE7XHJcblxyXG4gICAgICAgICAgdGhpcy5ib3R0bGUuYW5nbGUgPSBmcm9udFRvQmFja19kZWdyZWVzIC0gOTA7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXgpIHtcclxuICAgICAgY29uc29sZS5sb2coJ25vdCBpb3MnKTtcclxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2RldmljZW9yaWVudGF0aW9uJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXZlbnQpO1xyXG4gICAgICAgIGNvbnN0IHVwZGF0ZVJhdGUgPSAxIC8gNjA7XHJcbiAgICAgICAgLy8gRXhwb3NlIGVhY2ggb3JpZW50YXRpb24gYW5nbGUgaW4gYSBtb3JlIHJlYWRhYmxlIHdheVxyXG4gICAgICAgIGNvbnN0IHJvdGF0aW9uX2RlZ3JlZXMgPSBldmVudC5hbHBoYTtcclxuICAgICAgICBjb25zdCBmcm9udFRvQmFja19kZWdyZWVzID0gZXZlbnQuYmV0YTtcclxuICAgICAgICBjb25zdCBsZWZ0VG9SaWdodF9kZWdyZWVzID0gZXZlbnQuZ2FtbWE7XHJcblxyXG4gICAgICAgIHRoaXMuYm90dGxlLmFuZ2xlID0gZnJvbnRUb0JhY2tfZGVncmVlcyAtIDkwO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgSW5wdXQsIEdhbWVPYmplY3RzIH0gZnJvbSAncGhhc2VyJztcclxuaW1wb3J0IHsgZ2V0R2FtZVdpZHRoLCBnZXRHYW1lSGVpZ2h0LCBkcmlua1RvQ29sb3JNYXAgfSBmcm9tICcuLi9oZWxwZXJzJztcclxuaW1wb3J0IHsgTWVudUJ1dHRvbiB9IGZyb20gJy4uL3VpL21lbnUtYnV0dG9uJztcclxuXHJcbmNvbnN0IHNjZW5lQ29uZmlnOiBQaGFzZXIuVHlwZXMuU2NlbmVzLlNldHRpbmdzQ29uZmlnID0ge1xyXG4gIGFjdGl2ZTogZmFsc2UsXHJcbiAgdmlzaWJsZTogZmFsc2UsXHJcbiAga2V5OiAnUmVzdWx0cycsXHJcbn07XHJcbmNsYXNzIEdhbWVTY2VuZUFyZ3VtZW50cyB7XHJcbiAgcHVibGljIG9uRmluaXNoOiBGdW5jdGlvbjtcclxuICBwdWJsaWMgcmVzdWx0czogQXJyYXk8bnVtYmVyPjtcclxufVxyXG5leHBvcnQgY2xhc3MgUmVzdWx0c1NjZW5lIGV4dGVuZHMgUGhhc2VyLlNjZW5lIHtcclxuICBwdWJsaWMgc3BlZWQgPSAyMDA7XHJcblxyXG4gIHB1YmxpYyByZXN1bHRzOiBBcnJheTxudW1iZXI+O1xyXG4gIHByaXZhdGUgdHJhbnNpdGlvbmluZyA9IGZhbHNlO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKHNjZW5lQ29uZmlnKTtcclxuICB9XHJcbiAgcHVibGljIG9uRmluaXNoOiBGdW5jdGlvbjtcclxuICBwdWJsaWMgdGV4dDE6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0O1xyXG4gIHB1YmxpYyB0ZXh0MjogUGhhc2VyLkdhbWVPYmplY3RzLlRleHQ7XHJcbiAgcHVibGljIHRleHQzOiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dDtcclxuICBwdWJsaWMgdGV4dDQ6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0O1xyXG4gIHB1YmxpYyB0ZXh0NTogUGhhc2VyLkdhbWVPYmplY3RzLlRleHQ7XHJcbiAgcHVibGljIGNsaWNrcyA9IDA7XHJcbiAgcHVibGljIGljZUxldmVsID0gMDtcclxuXHJcbiAgcHVibGljIGluaXQoZGF0YTogR2FtZVNjZW5lQXJndW1lbnRzKTogdm9pZCB7XHJcbiAgICB0aGlzLm9uRmluaXNoID0gZGF0YS5vbkZpbmlzaDtcclxuICAgIHRoaXMucmVzdWx0cyA9IGRhdGEucmVzdWx0cztcclxuICB9XHJcblxyXG5cclxuICBwdWJsaWMgY3JlYXRlKCk6IHZvaWQge1xyXG4gICAgY29uc29sZS5sb2coJ1Jlc3VsdHMnKTtcclxuICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCB9ID0gdGhpcy5zeXMuZ2FtZS5jYW52YXM7XHJcbiAgICB0aGlzLnRyYW5zaXRpb25pbmcgPSBmYWxzZTtcclxuICAgIC8vIEFkZCBhIHBsYXllciBzcHJpdGUgdGhhdCBjYW4gYmUgbW92ZWQgYXJvdW5kLiBQbGFjZSBoaW0gaW4gdGhlIG1pZGRsZSBvZiB0aGUgc2NyZWVuLlxyXG4gICAgLy90aGlzLnZlcm1vdXRoVG9wT25seSA9IHRoaXMuYWRkLnNwcml0ZSh3aWR0aCAvIDIsIGhlaWdodCAvIDIgKyAzMDAsICd2ZXJtb3V0aHRvcG9ubHknKTtcclxuICAgIHRoaXMuYWRkLnRleHQod2lkdGgvOCwgKGhlaWdodC80KSAtIDMwLCBcIlJlc3VsdHM6XCIsIHsgY29sb3I6ICcjZmZmZmZmJyB9KTtcclxuICAgIHRoaXMucmVzdWx0cy5mb3JFYWNoKChlbGVtZW50LGlkeCkgPT4ge1xyXG4gICAgICB0aGlzLmFkZC50ZXh0KHdpZHRoLzgsIChoZWlnaHQvNCkgKyAoaWR4ICogaGVpZ2h0LzgpLCB0aGlzLmdldFJlc3VsdFN0cmluZyhlbGVtZW50KSwgeyBjb2xvcjogJyNmZmZmZmYnIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgbmV3IE1lbnVCdXR0b24odGhpcywgd2lkdGgvMiwgKGhlaWdodC80KSAqIDMsIFwiUmVzZXRcIiwgKCkgPT4ge3RoaXMuc2NlbmUuc3RvcCgpO3RoaXMub25GaW5pc2goKTt9KTtcclxuICB9XHJcblxyXG4gIC8vcHVibGljIHVwZGF0ZSgpOiB2b2lkIHt9XHJcblxyXG4gIHByaXZhdGUgZ2V0UmVzdWx0U3RyaW5nKGl0ZW06IG51bWJlcil7XHJcbiAgICBpZihpdGVtID09IDApe1xyXG4gICAgICByZXR1cm4gXCJKdXN0IGxpa2UgSSBvcmRlcmVkISBUaGFua3MhXCJcclxuICAgIH1cclxuICAgIGVsc2UgaWYoaXRlbSA9PSAxKXtyZXR1cm4gXCJFeGN1c2UgbWUsIEkgdGhpbmsgSSBcXG5nb3Qgc29tZW9uZSBlbHNlJ3MgZHJpbmtcIn1cclxuICAgIGVsc2UgaWYoaXRlbSA9PSAyKXtyZXR1cm4gXCJMb29rcyBnb29kIGJ1dCBJIGRvbid0XFxudGhpbmsgSSBoZWFyZCBhbnlvbmUgb3JkZXIgdGhpc1wifVxyXG4gICAgZWxzZSBpZihpdGVtID09IDMpe3JldHVybiBcIipzcGl0cyBvdXQgZHJpbmsqIERvIHlvdVxcbiBldmVuIGtub3cgaG93IHRvIG1ha2UgZHJpbmtzP1wifVxyXG4gIH1cclxuXHJcbn1cclxuIiwiaW1wb3J0IHsgSW5wdXQsIEdhbWVPYmplY3RzIH0gZnJvbSAncGhhc2VyJztcclxuXHJcbmNvbnN0IHNjZW5lQ29uZmlnOiBQaGFzZXIuVHlwZXMuU2NlbmVzLlNldHRpbmdzQ29uZmlnID0ge1xyXG4gIGFjdGl2ZTogZmFsc2UsXHJcbiAgdmlzaWJsZTogZmFsc2UsXHJcbiAga2V5OiAnU2hha2UgRHJpbmsnLFxyXG59O1xyXG5cclxuY2xhc3MgR2FtZVNjZW5lQXJndW1lbnRzIHtcclxuICBwdWJsaWMgb25GaW5pc2g6IEZ1bmN0aW9uO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU2hha2VTY2VuZSBleHRlbmRzIFBoYXNlci5TY2VuZSB7XHJcbiAgcHVibGljIHNwZWVkID0gMjAwO1xyXG5cclxuICBwcml2YXRlIGN1cnNvcktleXM6IFBoYXNlci5UeXBlcy5JbnB1dC5LZXlib2FyZC5DdXJzb3JLZXlzO1xyXG4gIHByaXZhdGUgYm90dGxlOiBQaGFzZXIuR2FtZU9iamVjdHMuU3ByaXRlO1xyXG4gIC8vcHJpdmF0ZSBib3VyYm9uOiBQaGFzZXIuR2FtZU9iamVjdHMuU3ByaXRlO1xyXG4gIHByaXZhdGUgZW1wdHlHbGFzczogUGhhc2VyLkdhbWVPYmplY3RzLlNwcml0ZTtcclxuICBwcml2YXRlIGZpbGxlZGdsYXNzMTogUGhhc2VyLkdhbWVPYmplY3RzLlNwcml0ZTtcclxuICBwcml2YXRlIGZpbGxlZGdsYXNzMjogUGhhc2VyLkdhbWVPYmplY3RzLlNwcml0ZTtcclxuXHJcbiAgcHJpdmF0ZSBjb250ZW50czogc3RyaW5nW10gPSBbXTtcclxuICBwcml2YXRlIGdsYXNzRmlsbGVyczogUGhhc2VyLkdhbWVPYmplY3RzLlNwcml0ZVtdID0gW107XHJcblxyXG4gIHByaXZhdGUgaXNQb3VyaW5nID0gMDtcclxuICBwcml2YXRlIHNoYWtlQ291bnQgPSAwO1xyXG4gIHByaXZhdGUgdHJhbnNpdGlvbmluZyA9IGZhbHNlO1xyXG4gIHByaXZhdGUgbiA9IDA7XHJcbiAgcHJpdmF0ZSBudGhyZXNob2xkID0gMDtcclxuICBwcml2YXRlIG1heHggPSAwO1xyXG4gIHByaXZhdGUgbWF4eSA9IDA7XHJcbiAgcHJpdmF0ZSBtYXh6ID0gMDtcclxuICBwcml2YXRlIG1pbnggPSAwO1xyXG4gIHByaXZhdGUgbWlueSA9IDA7XHJcbiAgcHJpdmF0ZSBtaW56ID0gMDtcclxuICBwcml2YXRlIHRocmVzaG9sZCA9IDE1O1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKHNjZW5lQ29uZmlnKTtcclxuICB9XHJcbiAgcHVibGljIHRleHQxOiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dDtcclxuICBwdWJsaWMgdGV4dDI6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0O1xyXG4gIHB1YmxpYyB0ZXh0MzogUGhhc2VyLkdhbWVPYmplY3RzLlRleHQ7XHJcbiAgcHVibGljIHRleHQ0OiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dDtcclxuICBwdWJsaWMgdGV4dDU6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0O1xyXG4gIHB1YmxpYyBib3R0bGVOYW1lOiBzdHJpbmc7XHJcbiAgcHJpdmF0ZSBsaXF1aWRSZWN0YW5nbGU6IFBoYXNlci5HYW1lT2JqZWN0cy5SZWN0YW5nbGU7XHJcbiAgcHVibGljIG9uRmluaXNoOiBGdW5jdGlvbjtcclxuXHJcbiAgcHVibGljIGluaXQoZGF0YTogR2FtZVNjZW5lQXJndW1lbnRzKTogdm9pZCB7XHJcbiAgICB0aGlzLmJvdHRsZU5hbWUgPSAnc2hha2VyJztcclxuICAgIHRoaXMub25GaW5pc2ggPSBkYXRhLm9uRmluaXNoO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNyZWF0ZSgpOiB2b2lkIHtcclxuICAgIGNvbnNvbGUubG9nKCdTaGFrZScpO1xyXG4gICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSB0aGlzLnN5cy5nYW1lLmNhbnZhcztcclxuICAgIHRoaXMuaXNQb3VyaW5nID0gMDtcclxuICAgIHRoaXMuc2hha2VDb3VudCA9IDA7XHJcbiAgICB0aGlzLnRyYW5zaXRpb25pbmcgPSBmYWxzZTtcclxuICAgIHRoaXMubiA9IDA7XHJcbiAgICB0aGlzLm50aHJlc2hvbGQgPSAxMztcclxuICAgIHRoaXMuY2FsbGJhY2soKTtcclxuICAgIC8vIEFkZCBhIHBsYXllciBzcHJpdGUgdGhhdCBjYW4gYmUgbW92ZWQgYXJvdW5kLiBQbGFjZSBoaW0gaW4gdGhlIG1pZGRsZSBvZiB0aGUgc2NyZWVuLlxyXG4gICAgLy90aGlzLmVtcHR5R2xhc3MgPSB0aGlzLmFkZC5zcHJpdGUod2lkdGggLyA0LCBoZWlnaHQgLyAyLCAnZW1wdHlnbGFzcycpO1xyXG4gICAgLy90aGlzLmZpbGxlZGdsYXNzMSA9IHRoaXMuYWRkLnNwcml0ZSh3aWR0aCAvIDQsIGhlaWdodCAvIDIsICdmaWxsZWRnbGFzczEnKTtcclxuICAgIC8vdGhpcy5maWxsZWRnbGFzczIgPSB0aGlzLmFkZC5zcHJpdGUod2lkdGggLyA0LCBoZWlnaHQgLyAyLCAnZmlsbGVkZ2xhc3MyJyk7XHJcblxyXG4gICAgLy90aGlzLmJvdXJib24gPSB0aGlzLmFkZC5zcHJpdGUod2lkdGggLyA4LCBoZWlnaHQgLyA0LCAnY2FuZWxsZWtuaWZlJykuc2V0SW50ZXJhY3RpdmUoKTtcclxuICAgIC8vdGhpcy5ib3VyYm9uLm9uKCdwb2ludGVyZG93bicsIHRoaXMuY2FsbGJhY2sgKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhgZ2xhc3MgeDogJHt3aWR0aCAvIDR9YCk7XHJcbiAgICBjb25zb2xlLmxvZyhgZ2xhc3MgeTogJHtoZWlnaHQgLyAyfWApO1xyXG5cclxuICAgIHRoaXMuYm90dGxlID0gdGhpcy5hZGQuc3ByaXRlKHdpZHRoIC8gMiwgaGVpZ2h0IC8gMiwgdGhpcy5ib3R0bGVOYW1lKS5zZXRJbnRlcmFjdGl2ZSgpO1xyXG4gICAgdGhpcy5ib3R0bGUuc2V0U2NhbGUoMC42KTtcclxuICAgIC8vY29uc29sZS5sb2codGhpcy5lbXB0eUdsYXNzLngpO1xyXG4gICAgY29uc29sZS5sb2codGhpcy5ib3R0bGUuZGlzcGxheUhlaWdodCk7XHJcbiAgICAvL3RoaXMuYm90dGxlLnNldFBvc2l0aW9uKHRoaXMuZW1wdHlHbGFzcy54ICsgdGhpcy5ib3R0bGUuZGlzcGxheUhlaWdodCAvIDQpO1xyXG4gICAgLy90aGlzLmJvdHRsZS5zZXRTY2FsZSgwLjUpO1xyXG5cclxuICAgIHRoaXMuYm90dGxlLm9uKCdwb2ludGVyb3ZlcicsICgpID0+IHtcclxuICAgICAgdGhpcy5ib3R0bGUuc2V0VGludCgweGNjY2NjYyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmJvdHRsZS5vbigncG9pbnRlcm91dCcsICgpID0+IHtcclxuICAgICAgdGhpcy5ib3R0bGUuY2xlYXJUaW50KCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmJvdHRsZS5vbigncG9pbnRlcmRvd24nLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMuc2hha2VDb3VudCsrO1xyXG4gICAgICBpZiAodGhpcy5zaGFrZUNvdW50ID4gNykge1xyXG4gICAgICAgIHRoaXMuc2hha2VDb3VudCA9IDc7XHJcbiAgICAgIH1cclxuICAgICAgLy90aGlzLmJvdHRsZS5zZXRUZXh0dXJlKGBzaGFrZXIke3RoaXMuc2hha2VDb3VudH1gKTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5pbnB1dC5zZXREcmFnZ2FibGUodGhpcy5ib3R0bGUpO1xyXG5cclxuICAgIHRoaXMuaW5wdXQub24oJ2RyYWdzdGFydCcsIChwb2ludGVyLCBnYW1lT2JqZWN0KSA9PiB7XHJcbiAgICAgIGdhbWVPYmplY3Quc2V0VGludCgweDk5OTk5OSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBUaGlzIGlzIGEgbmljZSBoZWxwZXIgUGhhc2VyIHByb3ZpZGVzIHRvIGNyZWF0ZSBsaXN0ZW5lcnMgZm9yIHNvbWUgb2YgdGhlIG1vc3QgY29tbW9uIGtleXMuXHJcbiAgICB0aGlzLmN1cnNvcktleXMgPSB0aGlzLmlucHV0LmtleWJvYXJkLmNyZWF0ZUN1cnNvcktleXMoKTtcclxuXHJcbiAgICB0aGlzLnRleHQxID0gdGhpcy5hZGQudGV4dCg1MCwgMTAsICcnLCB7IGNvbG9yOiAnIzAwZmYwMCcgfSk7XHJcbiAgICB0aGlzLnRleHQyID0gdGhpcy5hZGQudGV4dCg1MCwgMzAsICcnLCB7IGNvbG9yOiAnIzAwZmYwMCcgfSk7XHJcbiAgICB0aGlzLnRleHQzID0gdGhpcy5hZGQudGV4dCg1MCwgNjAsICcnLCB7IGNvbG9yOiAnIzAwZmYwMCcgfSk7XHJcbiAgICB0aGlzLnRleHQ0ID0gdGhpcy5hZGQudGV4dCg1MCwgOTAsICcnLCB7IGNvbG9yOiAnIzAwZmYwMCcgfSk7XHJcbiAgICB0aGlzLnRleHQ1ID0gdGhpcy5hZGQudGV4dCg1MCwgMTIwLCAnJywgeyBjb2xvcjogJyMwMGZmMDAnIH0pO1xyXG5cclxuICAgIHRoaXMuYm90dGxlLnNldERlcHRoKDEpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHVwZGF0ZSgpOiB2b2lkIHtcclxuICAgIC8vIEV2ZXJ5IGZyYW1lLCB3ZSBjcmVhdGUgYSBuZXcgdmVsb2NpdHkgZm9yIHRoZSBzcHJpdGUgYmFzZWQgb24gd2hhdCBrZXlzIHRoZSBwbGF5ZXIgaXMgaG9sZGluZyBkb3duLlxyXG4gICAgaWYgKHRoaXMubiA+IHRoaXMubnRocmVzaG9sZCAmJiB0aGlzLnNoYWtlQ291bnQgPD0gNykge1xyXG4gICAgICB0aGlzLm4gPSAwO1xyXG4gICAgICB0aGlzLnNoYWtlQ291bnQrKztcclxuICAgICAgdGhpcy50ZXh0NC5zZXRUZXh0KGBuICR7dGhpcy5ufSAke3RoaXMubnRocmVzaG9sZH1gKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnNoYWtlQ291bnQgJSAyID09IDApIHtcclxuICAgICAgdGhpcy5ib3R0bGUuc2V0VGV4dHVyZShgc2hha2VyJHt0aGlzLnNoYWtlQ291bnQgLyAyfWApO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuc2hha2VDb3VudCA+IDUgJiYgIXRoaXMudHJhbnNpdGlvbmluZykge1xyXG4gICAgICB0aGlzLnRyYW5zaXRpb25pbmcgPSB0cnVlO1xyXG4gICAgICBkb2N1bWVudC5jb29raWUgPSBgc2hha2U9MWA7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2NlbmUuc3RvcCgpO1xyXG4gICAgICAgIHRoaXMub25GaW5pc2goKTtcclxuICAgICAgfSwgNzUwKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRVc2VyQWdlbnQoKTogc3RyaW5nIHtcclxuICAgIC8vIChBKSBCUkVBSyBVU0VSIEFHRU5UIERPV05cclxuICAgIGNvbnNvbGUubG9nKG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKSk7XHJcbiAgICBjb25zdCBpc01vYmlsZSA9IG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5tYXRjaCgvbW9iaWxlL2kpLFxyXG4gICAgICBpc1RhYmxldCA9IG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5tYXRjaCgvdGFibGV0L2kpLFxyXG4gICAgICBpc0FuZHJvaWQgPSBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkubWF0Y2goL2FuZHJvaWQvaSksXHJcbiAgICAgIGlzaVBob25lID0gbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLm1hdGNoKC9pcGhvbmUvaSksXHJcbiAgICAgIGlzaVBhZCA9IG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5tYXRjaCgvaXBhZC9pKTtcclxuXHJcbiAgICAvLyAoQikgREVURUNURUQgREVWSUNFIFRZUEVcclxuICAgIGlmIChpc0FuZHJvaWQpIHtcclxuICAgICAgcmV0dXJuICdBbmRyb2lkJztcclxuICAgIH0gZWxzZSBpZiAoaXNpUGhvbmUgfHwgaXNpUGFkKSB7XHJcbiAgICAgIHJldHVybiAnQXBwbGUnO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuICdOb3BlJztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBjYWxsQXBwbGUoKTogdm9pZCB7XHJcbiAgICB0cnkge1xyXG4gICAgICBEZXZpY2VNb3Rpb25FdmVudC5yZXF1ZXN0UGVybWlzc2lvbigpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgdGhpcy50ZXh0MS5zZXRUZXh0KHJlc3BvbnNlKTtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignZGV2aWNlbW90aW9uJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhldmVudCk7XHJcbiAgICAgICAgICBpZiAoZXZlbnQuYWNjZWxlcmF0aW9uLnggPCB0aGlzLnRocmVzaG9sZCAqIC0xIHx8IGV2ZW50LmFjY2VsZXJhdGlvbi54ID4gdGhpcy50aHJlc2hvbGQpIHtcclxuICAgICAgICAgICAgdGhpcy5uKys7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKGV2ZW50LmFjY2VsZXJhdGlvbi55IDwgdGhpcy50aHJlc2hvbGQgKiAtMSB8fCBldmVudC5hY2NlbGVyYXRpb24ueSA+IHRoaXMudGhyZXNob2xkKSB7XHJcbiAgICAgICAgICAgIHRoaXMubisrO1xyXG4gICAgICAgICAgfSBlbHNlIGlmIChldmVudC5hY2NlbGVyYXRpb24ueiA8IHRoaXMudGhyZXNob2xkICogLTEgfHwgZXZlbnQuYWNjZWxlcmF0aW9uLnogPiB0aGlzLnRocmVzaG9sZCkge1xyXG4gICAgICAgICAgICB0aGlzLm4rKztcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAvLyB0ZXh0XHJcbiAgICAgICAgICBpZiAoZXZlbnQuYWNjZWxlcmF0aW9uLnggPCB0aGlzLm1pbngpIHtcclxuICAgICAgICAgICAgdGhpcy5taW54ID0gZXZlbnQuYWNjZWxlcmF0aW9uLng7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAoZXZlbnQuYWNjZWxlcmF0aW9uLnkgPCB0aGlzLm1pbnkpIHtcclxuICAgICAgICAgICAgdGhpcy5taW55ID0gZXZlbnQuYWNjZWxlcmF0aW9uLnk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAoZXZlbnQuYWNjZWxlcmF0aW9uLnogPCB0aGlzLm1pbnopIHtcclxuICAgICAgICAgICAgdGhpcy5taW56ID0gZXZlbnQuYWNjZWxlcmF0aW9uLno7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAoZXZlbnQuYWNjZWxlcmF0aW9uLnggPiB0aGlzLm1heHgpIHtcclxuICAgICAgICAgICAgdGhpcy5tYXh4ID0gZXZlbnQuYWNjZWxlcmF0aW9uLng7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAoZXZlbnQuYWNjZWxlcmF0aW9uLnkgPiB0aGlzLm1heHkpIHtcclxuICAgICAgICAgICAgdGhpcy5tYXh5ID0gZXZlbnQuYWNjZWxlcmF0aW9uLnk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAoZXZlbnQuYWNjZWxlcmF0aW9uLnogPiB0aGlzLm1heHopIHtcclxuICAgICAgICAgICAgdGhpcy5tYXh6ID0gZXZlbnQuYWNjZWxlcmF0aW9uLno7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB0aGlzLnRleHQxLnNldFRleHQoYHggJHt0aGlzLm1pbnh9ICR7dGhpcy5tYXh4fWApO1xyXG4gICAgICAgICAgdGhpcy50ZXh0Mi5zZXRUZXh0KGB5ICR7dGhpcy5taW55fSAke3RoaXMubWF4eX1gKTtcclxuICAgICAgICAgIHRoaXMudGV4dDMuc2V0VGV4dChgeiAke3RoaXMubWluen0gJHt0aGlzLm1heHp9YCk7XHJcbiAgICAgICAgICB0aGlzLnRleHQ0LnNldFRleHQoYG4gJHt0aGlzLm59ICR7dGhpcy5udGhyZXNob2xkfWApO1xyXG4gICAgICAgICAgdGhpcy50ZXh0NS5zZXRUZXh0KGBzaGFrZXMgJHt0aGlzLnNoYWtlQ291bnR9YCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXgpIHtcclxuICAgICAgY29uc29sZS5sb2coJ25vdCBpb3MnKTtcclxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2RldmljZW1vdGlvbicsIChldmVudCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGV2ZW50KTtcclxuICAgICAgICBpZiAoZXZlbnQuYWNjZWxlcmF0aW9uLnggPCB0aGlzLnRocmVzaG9sZCAqIC0xIHx8IGV2ZW50LmFjY2VsZXJhdGlvbi54ID4gdGhpcy50aHJlc2hvbGQpIHtcclxuICAgICAgICAgIHRoaXMubisrO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZXZlbnQuYWNjZWxlcmF0aW9uLnkgPCB0aGlzLnRocmVzaG9sZCAqIC0xIHx8IGV2ZW50LmFjY2VsZXJhdGlvbi55ID4gdGhpcy50aHJlc2hvbGQpIHtcclxuICAgICAgICAgIHRoaXMubisrO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZXZlbnQuYWNjZWxlcmF0aW9uLnogPCB0aGlzLnRocmVzaG9sZCAqIC0xIHx8IGV2ZW50LmFjY2VsZXJhdGlvbi56ID4gdGhpcy50aHJlc2hvbGQpIHtcclxuICAgICAgICAgIHRoaXMubisrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gdGV4dFxyXG4gICAgICAgIGlmIChldmVudC5hY2NlbGVyYXRpb24ueCA8IHRoaXMubWlueCkge1xyXG4gICAgICAgICAgdGhpcy5taW54ID0gZXZlbnQuYWNjZWxlcmF0aW9uLng7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChldmVudC5hY2NlbGVyYXRpb24ueSA8IHRoaXMubWlueSkge1xyXG4gICAgICAgICAgdGhpcy5taW55ID0gZXZlbnQuYWNjZWxlcmF0aW9uLnk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChldmVudC5hY2NlbGVyYXRpb24ueiA8IHRoaXMubWlueikge1xyXG4gICAgICAgICAgdGhpcy5taW56ID0gZXZlbnQuYWNjZWxlcmF0aW9uLno7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChldmVudC5hY2NlbGVyYXRpb24ueCA+IHRoaXMubWF4eCkge1xyXG4gICAgICAgICAgdGhpcy5tYXh4ID0gZXZlbnQuYWNjZWxlcmF0aW9uLng7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChldmVudC5hY2NlbGVyYXRpb24ueSA+IHRoaXMubWF4eSkge1xyXG4gICAgICAgICAgdGhpcy5tYXh5ID0gZXZlbnQuYWNjZWxlcmF0aW9uLnk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChldmVudC5hY2NlbGVyYXRpb24ueiA+IHRoaXMubWF4eikge1xyXG4gICAgICAgICAgdGhpcy5tYXh6ID0gZXZlbnQuYWNjZWxlcmF0aW9uLno7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudGV4dDEuc2V0VGV4dChgeCAke3RoaXMubWlueH0gJHt0aGlzLm1heHh9YCk7XHJcbiAgICAgICAgdGhpcy50ZXh0Mi5zZXRUZXh0KGB5ICR7dGhpcy5taW55fSAke3RoaXMubWF4eX1gKTtcclxuICAgICAgICB0aGlzLnRleHQzLnNldFRleHQoYHogJHt0aGlzLm1pbnp9ICR7dGhpcy5tYXh6fWApO1xyXG4gICAgICAgIHRoaXMudGV4dDQuc2V0VGV4dChgbiAke3RoaXMubn0gJHt0aGlzLm50aHJlc2hvbGR9YCk7XHJcbiAgICAgICAgdGhpcy50ZXh0NS5zZXRUZXh0KGBzaGFrZXMgJHt0aGlzLnNoYWtlQ291bnR9YCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuICBwdWJsaWMgY2FsbGJhY2soKTogdm9pZCB7XHJcbiAgICAvL3RoaXMudGV4dDEuc2V0VGV4dCgnQXNrZWQnKTtcclxuICAgIHRoaXMubWF4eCA9IDA7XHJcbiAgICB0aGlzLm1heHkgPSAwO1xyXG4gICAgdGhpcy5tYXh6ID0gMDtcclxuICAgIHRoaXMubWlueCA9IDA7XHJcbiAgICB0aGlzLm1pbnkgPSAwO1xyXG4gICAgdGhpcy5taW56ID0gMDtcclxuICAgIC8vaWYgKHdpbmRvdy5EZXZpY2VPcmllbnRhdGlvbkV2ZW50KSB7XHJcbiAgICAgIC8vd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2RldmljZW9yaWVudGF0aW9uJywgZGV2aWNlT3JpZW50YXRpb25IYW5kbGVyLCBmYWxzZSk7XHJcbiAgICAvL31cclxuXHJcbiAgIC8qaWYgKHdpbmRvdy5EZXZpY2VNb3Rpb25FdmVudCkge1xyXG4gICAgICB0aGlzLnRleHQyLnNldFRleHQoJ3llcycpO1xyXG4gICAgICBjb25zb2xlLmxvZygneWVzJyk7XHJcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdkZXZpY2Vtb3Rpb24nLCAoZXZlbnQpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhldmVudCk7XHJcbiAgICAgICAgaWYgKGV2ZW50LmFjY2VsZXJhdGlvbi54IDwgdGhpcy50aHJlc2hvbGQgKiAtMSB8fCBldmVudC5hY2NlbGVyYXRpb24ueCA+IHRoaXMudGhyZXNob2xkKSB7XHJcbiAgICAgICAgICB0aGlzLm4rKztcclxuICAgICAgICB9IGVsc2UgaWYgKGV2ZW50LmFjY2VsZXJhdGlvbi55IDwgdGhpcy50aHJlc2hvbGQgKiAtMSB8fCBldmVudC5hY2NlbGVyYXRpb24ueSA+IHRoaXMudGhyZXNob2xkKSB7XHJcbiAgICAgICAgICB0aGlzLm4rKztcclxuICAgICAgICB9IGVsc2UgaWYgKGV2ZW50LmFjY2VsZXJhdGlvbi56IDwgdGhpcy50aHJlc2hvbGQgKiAtMSB8fCBldmVudC5hY2NlbGVyYXRpb24ueiA+IHRoaXMudGhyZXNob2xkKSB7XHJcbiAgICAgICAgICB0aGlzLm4rKztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHRleHRcclxuICAgICAgICBpZiAoZXZlbnQuYWNjZWxlcmF0aW9uLnggPCB0aGlzLm1pbngpIHtcclxuICAgICAgICAgIHRoaXMubWlueCA9IGV2ZW50LmFjY2VsZXJhdGlvbi54O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZXZlbnQuYWNjZWxlcmF0aW9uLnkgPCB0aGlzLm1pbnkpIHtcclxuICAgICAgICAgIHRoaXMubWlueSA9IGV2ZW50LmFjY2VsZXJhdGlvbi55O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZXZlbnQuYWNjZWxlcmF0aW9uLnogPCB0aGlzLm1pbnopIHtcclxuICAgICAgICAgIHRoaXMubWlueiA9IGV2ZW50LmFjY2VsZXJhdGlvbi56O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZXZlbnQuYWNjZWxlcmF0aW9uLnggPiB0aGlzLm1heHgpIHtcclxuICAgICAgICAgIHRoaXMubWF4eCA9IGV2ZW50LmFjY2VsZXJhdGlvbi54O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZXZlbnQuYWNjZWxlcmF0aW9uLnkgPiB0aGlzLm1heHkpIHtcclxuICAgICAgICAgIHRoaXMubWF4eSA9IGV2ZW50LmFjY2VsZXJhdGlvbi55O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZXZlbnQuYWNjZWxlcmF0aW9uLnogPiB0aGlzLm1heHopIHtcclxuICAgICAgICAgIHRoaXMubWF4eiA9IGV2ZW50LmFjY2VsZXJhdGlvbi56O1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnRleHQxLnNldFRleHQoYHggJHt0aGlzLm1pbnh9ICR7dGhpcy5tYXh4fWApO1xyXG4gICAgICAgIC8vdGhpcy50ZXh0Mi5zZXRUZXh0KGB5ICR7dGhpcy5taW55fSAke3RoaXMubWF4eX1gKTtcclxuICAgICAgICB0aGlzLnRleHQzLnNldFRleHQoYHogJHt0aGlzLm1pbnp9ICR7dGhpcy5tYXh6fWApO1xyXG4gICAgICAgIHRoaXMudGV4dDQuc2V0VGV4dChgbiAke3RoaXMubn0gJHt0aGlzLm50aHJlc2hvbGR9YCk7XHJcbiAgICAgICAgdGhpcy50ZXh0NS5zZXRUZXh0KGBzaGFrZXMgJHt0aGlzLnNoYWtlQ291bnR9YCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy50ZXh0Mi5zZXRUZXh0KCdubycpO1xyXG4gICAgICBjb25zb2xlLmxvZygnbm8nKTtcclxuICAgIH0qL1xyXG4gICAgdGhpcy5jYWxsQXBwbGUoKTtcclxuICAgIC8vXHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IElucHV0LCBHYW1lT2JqZWN0cyB9IGZyb20gJ3BoYXNlcic7XHJcbmltcG9ydCB7IGdldEdhbWVXaWR0aCwgZ2V0R2FtZUhlaWdodCwgZHJpbmtUb0NvbG9yTWFwIH0gZnJvbSAnLi4vaGVscGVycyc7XHJcbmltcG9ydCB7IE1lbnVCdXR0b24gfSBmcm9tICcuLi91aS9tZW51LWJ1dHRvbic7XHJcblxyXG5jb25zdCBzY2VuZUNvbmZpZzogUGhhc2VyLlR5cGVzLlNjZW5lcy5TZXR0aW5nc0NvbmZpZyA9IHtcclxuICBhY3RpdmU6IGZhbHNlLFxyXG4gIHZpc2libGU6IGZhbHNlLFxyXG4gIGtleTogJ1N1Y2Nlc3MnLFxyXG59O1xyXG5jbGFzcyBHYW1lU2NlbmVBcmd1bWVudHMge1xyXG4gIHB1YmxpYyBvbkZpbmlzaDogRnVuY3Rpb247XHJcbn1cclxuZXhwb3J0IGNsYXNzIFN1Y2Nlc3NTY2VuZSBleHRlbmRzIFBoYXNlci5TY2VuZSB7XHJcbiAgcHVibGljIHNwZWVkID0gMjAwO1xyXG5cclxuICBwdWJsaWMgcmVzdWx0czogQXJyYXk8bnVtYmVyPjtcclxuICBwcml2YXRlIHRyYW5zaXRpb25pbmcgPSBmYWxzZTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcihzY2VuZUNvbmZpZyk7XHJcbiAgfVxyXG4gIHB1YmxpYyBvbkZpbmlzaDogRnVuY3Rpb247XHJcbiAgcHVibGljIHRleHQxOiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dDtcclxuICBwdWJsaWMgdGV4dDI6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0O1xyXG4gIHB1YmxpYyB0ZXh0MzogUGhhc2VyLkdhbWVPYmplY3RzLlRleHQ7XHJcbiAgcHVibGljIHRleHQ0OiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dDtcclxuICBwdWJsaWMgdGV4dDU6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0O1xyXG4gIHB1YmxpYyBjbGlja3MgPSAwO1xyXG4gIHB1YmxpYyBpY2VMZXZlbCA9IDA7XHJcblxyXG4gIHB1YmxpYyBpbml0KGRhdGE6IEdhbWVTY2VuZUFyZ3VtZW50cyk6IHZvaWQge1xyXG4gICAgdGhpcy5vbkZpbmlzaCA9IGRhdGEub25GaW5pc2g7XHJcbiAgfVxyXG5cclxuXHJcbiAgcHVibGljIGNyZWF0ZSgpOiB2b2lkIHtcclxuICAgIGNvbnNvbGUubG9nKCdTdWNjZXNzJyk7XHJcbiAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IHRoaXMuc3lzLmdhbWUuY2FudmFzO1xyXG4gICAgdGhpcy50cmFuc2l0aW9uaW5nID0gZmFsc2U7XHJcbiAgICAvLyBBZGQgYSBwbGF5ZXIgc3ByaXRlIHRoYXQgY2FuIGJlIG1vdmVkIGFyb3VuZC4gUGxhY2UgaGltIGluIHRoZSBtaWRkbGUgb2YgdGhlIHNjcmVlbi5cclxuICAgIC8vdGhpcy52ZXJtb3V0aFRvcE9ubHkgPSB0aGlzLmFkZC5zcHJpdGUod2lkdGggLyAyLCBoZWlnaHQgLyAyICsgMzAwLCAndmVybW91dGh0b3Bvbmx5Jyk7XHJcbiAgICB0aGlzLmFkZC50ZXh0KHdpZHRoLzgsIChoZWlnaHQvNCkgLSAzMCwgIGBZb3UgZGlkIGl0ISBIZXJlJ3MgeW91ciBjb3B5IG9mIFxcbnRoZSByZWNlaXB0OlxyXG4gICAgRHJpbmsgLSAkMTMuMDlcclxuICAgIERyaW5rIC0gJDI0LjE1XHJcbiAgICBEcmluayAtICQxMi4xNVxyXG4gICAgRHJpbmsgLSAkNy4yNVxyXG4gICAgYCwgeyBjb2xvcjogJyNmZmZmZmYnIH0pO1xyXG4gIH1cclxuXHJcbiAgLy9wdWJsaWMgdXBkYXRlKCk6IHZvaWQge31cclxufVxyXG4iLCJpbXBvcnQgeyBJbnB1dCwgR2FtZU9iamVjdHMgfSBmcm9tICdwaGFzZXInO1xyXG5pbXBvcnQgeyBnZXRHYW1lV2lkdGgsIGdldEdhbWVIZWlnaHQsIGRyaW5rVG9Db2xvck1hcCB9IGZyb20gJy4uL2hlbHBlcnMnO1xyXG5cclxuY29uc3Qgc2NlbmVDb25maWc6IFBoYXNlci5UeXBlcy5TY2VuZXMuU2V0dGluZ3NDb25maWcgPSB7XHJcbiAgYWN0aXZlOiBmYWxzZSxcclxuICB2aXNpYmxlOiBmYWxzZSxcclxuICBrZXk6ICdWZXJtb3V0aCcsXHJcbn07XHJcblxyXG5jbGFzcyBHYW1lU2NlbmVBcmd1bWVudHMge1xyXG4gIHB1YmxpYyBvbkZpbmlzaDogRnVuY3Rpb247XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBWZXJtb3V0aFNjZW5lIGV4dGVuZHMgUGhhc2VyLlNjZW5lIHtcclxuICBwcml2YXRlIHZlcm1vdXRoVG9wOiBQaGFzZXIuR2FtZU9iamVjdHMuU3ByaXRlO1xyXG4gIHByaXZhdGUgdmVybW91dGhUb3BPbmx5OiBQaGFzZXIuR2FtZU9iamVjdHMuU3ByaXRlO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKHNjZW5lQ29uZmlnKTtcclxuICB9XHJcbiAgcHVibGljIHRleHQxOiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dDtcclxuICBwdWJsaWMgdGV4dDI6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0O1xyXG4gIHB1YmxpYyB0ZXh0MzogUGhhc2VyLkdhbWVPYmplY3RzLlRleHQ7XHJcbiAgcHVibGljIHRleHQ0OiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dDtcclxuICBwdWJsaWMgdGV4dDU6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0O1xyXG4gIHB1YmxpYyB1bnNjcmV3ZWQgPSAwO1xyXG4gIHByaXZhdGUgdHJhbnNpdGlvbmluZyA9IGZhbHNlO1xyXG5cclxuICBwdWJsaWMgb25GaW5pc2g6IEZ1bmN0aW9uO1xyXG5cclxuICBwdWJsaWMgaW5pdChkYXRhOiBHYW1lU2NlbmVBcmd1bWVudHMpOiB2b2lke1xyXG4gICAgdGhpcy5vbkZpbmlzaCA9IGRhdGEub25GaW5pc2g7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY3JlYXRlKCk6IHZvaWQge1xyXG4gICAgY29uc29sZS5sb2coJ1Zlcm1vdXRoJyk7XHJcbiAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IHRoaXMuc3lzLmdhbWUuY2FudmFzO1xyXG4gICAgdGhpcy51bnNjcmV3ZWQgPSAwO1xyXG4gICAgdGhpcy50cmFuc2l0aW9uaW5nID0gZmFsc2U7XHJcbiAgICAvLyBBZGQgYSBwbGF5ZXIgc3ByaXRlIHRoYXQgY2FuIGJlIG1vdmVkIGFyb3VuZC4gUGxhY2UgaGltIGluIHRoZSBtaWRkbGUgb2YgdGhlIHNjcmVlbi5cclxuICAgIHRoaXMudmVybW91dGhUb3AgPSB0aGlzLmFkZC5zcHJpdGUod2lkdGggLyAyLCBoZWlnaHQgLyAyICsgMzAwLCAndmVybW91dGh0b3AnKTtcclxuICAgIHRoaXMudmVybW91dGhUb3BPbmx5ID0gdGhpcy5hZGQuc3ByaXRlKHdpZHRoIC8gMiwgaGVpZ2h0IC8gMiArIDMwMCwgJ3Zlcm1vdXRodG9wb25seScpO1xyXG5cclxuICAgIHRoaXMuaW5wdXQub24oJ3BvaW50ZXJ1cCcsICgpID0+IHtcclxuICAgICAgdGhpcy50ZXh0MS5zZXRUZXh0KGDOuDogJHt0aGlzLmlucHV0LmFjdGl2ZVBvaW50ZXIuZ2V0QW5nbGUoKX1gKTtcclxuICAgICAgdGhpcy50ZXh0Mi5zZXRUZXh0KGB4OiAke3RoaXMuaW5wdXQuYWN0aXZlUG9pbnRlci5nZXREaXN0YW5jZVgoKX1gKTtcclxuICAgICAgdGhpcy50ZXh0My5zZXRUZXh0KGB5OiAke3RoaXMuaW5wdXQuYWN0aXZlUG9pbnRlci5nZXREaXN0YW5jZVkoKX1gKTtcclxuICAgICAgdGhpcy50ZXh0NC5zZXRUZXh0KGBkOiAke3RoaXMuaW5wdXQuYWN0aXZlUG9pbnRlci5nZXREaXN0YW5jZSgpfWApO1xyXG5cclxuICAgICAgLy8gY2hlY2sgaWYgdGhpbmcgc2hvdWxkIHVuc2NyZXdcclxuICAgICAgaWYgKFxyXG4gICAgICAgIHRoaXMuaW5wdXQuYWN0aXZlUG9pbnRlci5nZXREaXN0YW5jZSgpID49IDE1MCAmJlxyXG4gICAgICAgIHRoaXMuaW5wdXQuYWN0aXZlUG9pbnRlci5nZXRBbmdsZSgpIDw9IDAuMzIgJiZcclxuICAgICAgICB0aGlzLmlucHV0LmFjdGl2ZVBvaW50ZXIuZ2V0QW5nbGUoKSA+PSAtMC41MiAmJlxyXG4gICAgICAgIHRoaXMudW5zY3Jld2VkIDwgM1xyXG4gICAgICApIHtcclxuICAgICAgICB0aGlzLnRleHQ1LnNldFRleHQoYHVuc2NyZXc6ICR7Kyt0aGlzLnVuc2NyZXdlZH1gKTtcclxuICAgICAgICB0aGlzLnZlcm1vdXRoVG9wT25seS5zZXRZKHRoaXMudmVybW91dGhUb3BPbmx5LnkgLSAzMCk7XHJcbiAgICAgICAgdGhpcy52ZXJtb3V0aFRvcE9ubHkuZmxpcFggPSAhdGhpcy52ZXJtb3V0aFRvcE9ubHkuZmxpcFg7XHJcbiAgICAgICAgaWYgKHRoaXMudW5zY3Jld2VkID09IDMgJiYgIXRoaXMudHJhbnNpdGlvbmluZykge1xyXG4gICAgICAgICAgdGhpcy50cmFuc2l0aW9uaW5nID0gdHJ1ZTtcclxuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNjZW5lLnN0b3AoKTtcclxuICAgICAgICAgICAgdGhpcy5zY2VuZS5sYXVuY2goJ1BvdXInLCB7IEJvdHRsZVNwcml0ZU5hbWU6ICdWZXJtb3V0aCcsIG9uRmluaXNoOiB0aGlzLm9uRmluaXNoIH0pO1xyXG4gICAgICAgICAgfSwgNTAwKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgICAgdGhpcy5pbnB1dC5hY3RpdmVQb2ludGVyLmdldERpc3RhbmNlKCkgPj0gMTUwICYmXHJcbiAgICAgICAgKHRoaXMuaW5wdXQuYWN0aXZlUG9pbnRlci5nZXRBbmdsZSgpIDw9IC0yLjUgfHwgdGhpcy5pbnB1dC5hY3RpdmVQb2ludGVyLmdldEFuZ2xlKCkgPj0gMi41KSAmJlxyXG4gICAgICAgIHRoaXMudW5zY3Jld2VkID4gMFxyXG4gICAgICApIHtcclxuICAgICAgICB0aGlzLnRleHQ1LnNldFRleHQoYHVuc2NyZXc6ICR7LS10aGlzLnVuc2NyZXdlZH1gKTtcclxuICAgICAgICB0aGlzLnZlcm1vdXRoVG9wT25seS5zZXRZKHRoaXMudmVybW91dGhUb3BPbmx5LnkgKyAzMCk7XHJcbiAgICAgICAgdGhpcy52ZXJtb3V0aFRvcE9ubHkuZmxpcFggPSAhdGhpcy52ZXJtb3V0aFRvcE9ubHkuZmxpcFg7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMudGV4dDEgPSB0aGlzLmFkZC50ZXh0KDEwLCAxMCwgJycsIHsgY29sb3I6ICcjMDBmZjAwJyB9KTtcclxuICAgIHRoaXMudGV4dDIgPSB0aGlzLmFkZC50ZXh0KDEwLCAyNSwgJycsIHsgY29sb3I6ICcjMDBmZjAwJyB9KTtcclxuICAgIHRoaXMudGV4dDMgPSB0aGlzLmFkZC50ZXh0KDEwLCA0MCwgJycsIHsgY29sb3I6ICcjMDBmZjAwJyB9KTtcclxuICAgIHRoaXMudGV4dDQgPSB0aGlzLmFkZC50ZXh0KDEwLCA1NSwgJycsIHsgY29sb3I6ICcjMDBmZjAwJyB9KTtcclxuICAgIHRoaXMudGV4dDUgPSB0aGlzLmFkZC50ZXh0KDEwLCA3MCwgJycsIHsgY29sb3I6ICcjMDBmZjAwJyB9KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyB1cGRhdGUoKTogdm9pZCB7fVxyXG59XHJcbiIsImltcG9ydCAqIGFzIFBoYXNlciBmcm9tICdwaGFzZXInO1xyXG5leHBvcnQgY2xhc3MgR2xhc3NCdXR0b24gZXh0ZW5kcyBQaGFzZXIuR2FtZU9iamVjdHMuUmVjdGFuZ2xlIHtcclxuICBwdWJsaWMgbGFiZWw6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0O1xyXG4gIHB1YmxpYyBwYWRkaW5nID0gNjtcclxuICBwdWJsaWMgbWluaW11bVdpZHRoID0gMjA7XHJcbiAgcHVibGljIG1pbmltdW1IZWlnaHQgPSAyMDtcclxuICBwdWJsaWMgb2d0ZXh0OiBzdHJpbmc7XHJcbiAgcHVibGljIG9uQ2xpY2s6IEZ1bmN0aW9uO1xyXG4gIGNvbnN0cnVjdG9yKHNjZW5lOiBQaGFzZXIuU2NlbmUsIHg6IG51bWJlciwgeTogbnVtYmVyLCB0ZXh0OiBzdHJpbmcsIG9uQ2xpY2s/OiAoKSA9PiB2b2lkKSB7XHJcbiAgICBzdXBlcihzY2VuZSwgeCwgeSk7XHJcbiAgICBzY2VuZS5hZGQuZXhpc3RpbmcodGhpcyk7XHJcbiAgICB0aGlzLnNldE9yaWdpbigwLCAwKTtcclxuICAgIHRoaXMub2d0ZXh0ID0gdGV4dDtcclxuXHJcbiAgICB0aGlzLmxhYmVsID0gc2NlbmUuYWRkXHJcbiAgICAgIC50ZXh0KHggKyB0aGlzLnBhZGRpbmcsIHkgKyB0aGlzLnBhZGRpbmcsIHRleHQpXHJcbiAgICAgIC5zZXRGb250U2l6ZSgxNClcclxuICAgICAgLnNldEFsaWduKCdjZW50ZXInKTtcclxuXHJcbiAgICBjb25zdCBsYWJlbFdpZHRoID0gdGhpcy5sYWJlbC53aWR0aCArIHRoaXMucGFkZGluZztcclxuICAgIGNvbnN0IGxhYmVsSGVpZ2h0ID0gdGhpcy5sYWJlbC5oZWlnaHQgKyB0aGlzLnBhZGRpbmc7XHJcblxyXG4gICAgdGhpcy53aWR0aCA9IGxhYmVsV2lkdGggPj0gdGhpcy5taW5pbXVtV2lkdGggPyBsYWJlbFdpZHRoIDogdGhpcy5taW5pbXVtV2lkdGg7XHJcbiAgICB0aGlzLmhlaWdodCA9IGxhYmVsSGVpZ2h0ID49IHRoaXMubWluaW11bUhlaWdodCA/IGxhYmVsSGVpZ2h0IDogdGhpcy5taW5pbXVtSGVpZ2h0O1xyXG5cclxuICAgIHRoaXMuc2V0SW50ZXJhY3RpdmUoeyB1c2VIYW5kQ3Vyc29yOiB0cnVlIH0pXHJcbiAgICAgIC5vbigncG9pbnRlcmRvd24nLCB0aGlzLmVudGVyTWVudUJ1dHRvbkFjdGl2ZVN0YXRlKVxyXG4gICAgICAub24oJ3BvaW50ZXJ1cCcsIHRoaXMuZW50ZXJNZW51QnV0dG9uSG92ZXJTdGF0ZSk7XHJcblxyXG4gICAgaWYgKG9uQ2xpY2spIHtcclxuICAgICAgdGhpcy5vbigncG9pbnRlcnVwJywgb25DbGljayk7XHJcbiAgICAgIHRoaXMub25DbGljayA9IG9uQ2xpY2s7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5lbnRlck1lbnVCdXR0b25SZXN0U3RhdGUoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBlbnRlck1lbnVCdXR0b25Ib3ZlclN0YXRlKCkge1xyXG4gICAgdGhpcy5sYWJlbC5zZXRDb2xvcignIzAwMDAwMCcpO1xyXG4gICAgdGhpcy5zZXRGaWxsU3R5bGUoMHg4ODg4ODgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGVudGVyTWVudUJ1dHRvblJlc3RTdGF0ZSgpIHtcclxuICAgIHRyeXtcclxuICAgIHRoaXMubGFiZWwuc2V0Q29sb3IoJyNGRkZGRkYnKTtcclxuICAgIHRoaXMuc2V0RmlsbFN0eWxlKDB4ODg4ODg4KTtcclxuICAgIHRoaXMubGFiZWwuc2V0VGV4dCh0aGlzLm9ndGV4dCk7XHJcbiAgfVxyXG4gIGNhdGNoKGUpe1xyXG4gICAgY29uc29sZS5sb2coZSk7XHJcbiAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGVudGVyTWVudUJ1dHRvbkFjdGl2ZVN0YXRlKCkge1xyXG4gICAgdHJ5e1xyXG4gICAgICB0aGlzLmxhYmVsLnNldENvbG9yKCcjQkJCQkJCJyk7XHJcbiAgICAgIHRoaXMuc2V0RmlsbFN0eWxlKDB4NDQ0NDQ0KTtcclxuICAgICAgdGhpcy5sYWJlbC5zZXRUZXh0KHRoaXMub2d0ZXh0KTtcclxuICAgIH1cclxuICAgIGNhdGNoKGUpe1xyXG4gICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIFxyXG4gIHB1YmxpYyBlbnRlck1lbnVCdXR0b25CbG9ja2VkU3RhdGUoKSB7XHJcbiAgICAvL3RoaXMubGFiZWwuc2V0Q29sb3IoJyNmZjAwMDAnKTtcclxuICAgIHRyeXtcclxuICAgICAgdGhpcy5zZXRGaWxsU3R5bGUoMHg0NDQ0NDQpO1xyXG4gICAgICB0aGlzLm9mZigncG9pbnRlcnVwJyk7XHJcbiAgICAgIHRoaXMubGFiZWwuc2V0VGV4dCgn8J+UkicpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2goZSl7XHJcbiAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIHJlc2V0T25DbGljaygpe1xyXG4gICAgdGhpcy5vbigncG9pbnRlcnVwJywgdGhpcy5vbkNsaWNrKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0ICogYXMgUGhhc2VyIGZyb20gJ3BoYXNlcic7XHJcblxyXG5leHBvcnQgY2xhc3MgTWVudUJ1dHRvbiBleHRlbmRzIFBoYXNlci5HYW1lT2JqZWN0cy5SZWN0YW5nbGUge1xyXG4gIHB1YmxpYyBsYWJlbDogUGhhc2VyLkdhbWVPYmplY3RzLlRleHQ7XHJcbiAgcHVibGljIHBhZGRpbmcgPSAxMDtcclxuICBwdWJsaWMgbWluaW11bVdpZHRoID0gMjAwO1xyXG4gIHB1YmxpYyBtaW5pbXVtSGVpZ2h0ID0gNTA7XHJcbiAgY29uc3RydWN0b3Ioc2NlbmU6IFBoYXNlci5TY2VuZSwgeDogbnVtYmVyLCB5OiBudW1iZXIsIHRleHQ6IHN0cmluZywgb25DbGljaz86ICgpID0+IHZvaWQpIHtcclxuICAgIHN1cGVyKHNjZW5lLCB4LCB5KTtcclxuICAgIHNjZW5lLmFkZC5leGlzdGluZyh0aGlzKTtcclxuICAgIHRoaXMuc2V0T3JpZ2luKDAsIDApO1xyXG5cclxuICAgIHRoaXMubGFiZWwgPSBzY2VuZS5hZGRcclxuICAgICAgLnRleHQoeCArIHRoaXMucGFkZGluZywgeSArIHRoaXMucGFkZGluZywgdGV4dClcclxuICAgICAgLnNldEZvbnRTaXplKDE4KVxyXG4gICAgICAuc2V0QWxpZ24oJ2NlbnRlcicpO1xyXG5cclxuICAgIGNvbnN0IGxhYmVsV2lkdGggPSB0aGlzLmxhYmVsLndpZHRoICsgdGhpcy5wYWRkaW5nO1xyXG4gICAgY29uc3QgbGFiZWxIZWlnaHQgPSB0aGlzLmxhYmVsLmhlaWdodCArIHRoaXMucGFkZGluZztcclxuXHJcbiAgICB0aGlzLndpZHRoID0gbGFiZWxXaWR0aCA+PSB0aGlzLm1pbmltdW1XaWR0aCA/IGxhYmVsV2lkdGggOiB0aGlzLm1pbmltdW1XaWR0aDtcclxuICAgIHRoaXMuaGVpZ2h0ID0gbGFiZWxIZWlnaHQgPj0gdGhpcy5taW5pbXVtSGVpZ2h0ID8gbGFiZWxIZWlnaHQgOiB0aGlzLm1pbmltdW1IZWlnaHQ7XHJcblxyXG4gICAgdGhpcy5zZXRJbnRlcmFjdGl2ZSh7IHVzZUhhbmRDdXJzb3I6IHRydWUgfSlcclxuICAgICAgLm9uKCdwb2ludGVyb3ZlcicsIHRoaXMuZW50ZXJNZW51QnV0dG9uSG92ZXJTdGF0ZSlcclxuICAgICAgLm9uKCdwb2ludGVyb3V0JywgdGhpcy5lbnRlck1lbnVCdXR0b25SZXN0U3RhdGUpXHJcbiAgICAgIC5vbigncG9pbnRlcmRvd24nLCB0aGlzLmVudGVyTWVudUJ1dHRvbkFjdGl2ZVN0YXRlKVxyXG4gICAgICAub24oJ3BvaW50ZXJ1cCcsIHRoaXMuZW50ZXJNZW51QnV0dG9uSG92ZXJTdGF0ZSk7XHJcblxyXG4gICAgaWYgKG9uQ2xpY2spIHtcclxuICAgICAgdGhpcy5vbigncG9pbnRlcnVwJywgb25DbGljayk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5lbnRlck1lbnVCdXR0b25SZXN0U3RhdGUoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZW50ZXJNZW51QnV0dG9uSG92ZXJTdGF0ZSgpIHtcclxuICAgIHRoaXMubGFiZWwuc2V0Q29sb3IoJyMwMDAwMDAnKTtcclxuICAgIHRoaXMuc2V0RmlsbFN0eWxlKDB4ODg4ODg4KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZW50ZXJNZW51QnV0dG9uUmVzdFN0YXRlKCkge1xyXG4gICAgdGhpcy5sYWJlbC5zZXRDb2xvcignI0ZGRkZGRicpO1xyXG4gICAgdGhpcy5zZXRGaWxsU3R5bGUoMHg4ODg4ODgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBlbnRlck1lbnVCdXR0b25BY3RpdmVTdGF0ZSgpIHtcclxuICAgIHRoaXMubGFiZWwuc2V0Q29sb3IoJyNCQkJCQkInKTtcclxuICAgIHRoaXMuc2V0RmlsbFN0eWxlKDB4NDQ0NDQ0KTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0ICogYXMgUGhhc2VyIGZyb20gJ3BoYXNlcic7XHJcblxyXG5leHBvcnQgY2xhc3MgU2NlbmVCdXR0b24gZXh0ZW5kcyBQaGFzZXIuR2FtZU9iamVjdHMuUmVjdGFuZ2xlIHtcclxuICBwdWJsaWMgbGFiZWw6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0O1xyXG4gIHB1YmxpYyBwYWRkaW5nID0gMTA7XHJcbiAgcHVibGljIG1pbmltdW1XaWR0aCA9IDUwO1xyXG4gIHB1YmxpYyBtaW5pbXVtSGVpZ2h0ID0gNTA7XHJcbiAgY29uc3RydWN0b3Ioc2NlbmU6IFBoYXNlci5TY2VuZSwgeDogbnVtYmVyLCB5OiBudW1iZXIsIHRleHQ6IHN0cmluZywgb25DbGljaz86ICgpID0+IHZvaWQpIHtcclxuICAgIHN1cGVyKHNjZW5lLCB4LCB5KTtcclxuICAgIHNjZW5lLmFkZC5leGlzdGluZyh0aGlzKTtcclxuICAgIHRoaXMuc2V0T3JpZ2luKDAsIDApO1xyXG5cclxuICAgIHRoaXMubGFiZWwgPSBzY2VuZS5hZGRcclxuICAgICAgLnRleHQoeCArIHRoaXMucGFkZGluZywgeSArIHRoaXMucGFkZGluZywgdGV4dClcclxuICAgICAgLnNldEZvbnRTaXplKDE4KVxyXG4gICAgICAuc2V0QWxpZ24oJ2NlbnRlcicpO1xyXG5cclxuICAgIGNvbnN0IGxhYmVsV2lkdGggPSB0aGlzLmxhYmVsLndpZHRoICsgdGhpcy5wYWRkaW5nO1xyXG4gICAgY29uc3QgbGFiZWxIZWlnaHQgPSB0aGlzLmxhYmVsLmhlaWdodCArIHRoaXMucGFkZGluZztcclxuXHJcbiAgICB0aGlzLndpZHRoID0gbGFiZWxXaWR0aCA+PSB0aGlzLm1pbmltdW1XaWR0aCA/IGxhYmVsV2lkdGggOiB0aGlzLm1pbmltdW1XaWR0aDtcclxuICAgIHRoaXMuaGVpZ2h0ID0gbGFiZWxIZWlnaHQgPj0gdGhpcy5taW5pbXVtSGVpZ2h0ID8gbGFiZWxIZWlnaHQgOiB0aGlzLm1pbmltdW1IZWlnaHQ7XHJcblxyXG4gICAgdGhpcy5zZXRJbnRlcmFjdGl2ZSh7IHVzZUhhbmRDdXJzb3I6IHRydWUgfSlcclxuICAgICAgLm9uKCdwb2ludGVyb3ZlcicsIHRoaXMuZW50ZXJNZW51QnV0dG9uSG92ZXJTdGF0ZSlcclxuICAgICAgLm9uKCdwb2ludGVyb3V0JywgdGhpcy5lbnRlck1lbnVCdXR0b25SZXN0U3RhdGUpXHJcbiAgICAgIC5vbigncG9pbnRlcmRvd24nLCB0aGlzLmVudGVyTWVudUJ1dHRvbkFjdGl2ZVN0YXRlKVxyXG4gICAgICAub24oJ3BvaW50ZXJ1cCcsIHRoaXMuZW50ZXJNZW51QnV0dG9uSG92ZXJTdGF0ZSk7XHJcblxyXG4gICAgaWYgKG9uQ2xpY2spIHtcclxuICAgICAgdGhpcy5vbigncG9pbnRlcnVwJywgb25DbGljayk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5lbnRlck1lbnVCdXR0b25SZXN0U3RhdGUoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZW50ZXJNZW51QnV0dG9uSG92ZXJTdGF0ZSgpIHtcclxuICAgIHRoaXMubGFiZWwuc2V0Q29sb3IoJyMwMDAwMDAnKTtcclxuICAgIHRoaXMuc2V0RmlsbFN0eWxlKDB4ODg4ODg4KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZW50ZXJNZW51QnV0dG9uUmVzdFN0YXRlKCkge1xyXG4gICAgdGhpcy5sYWJlbC5zZXRDb2xvcignI0ZGRkZGRicpO1xyXG4gICAgdGhpcy5zZXRGaWxsU3R5bGUoMHhDODAwMDApO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBlbnRlck1lbnVCdXR0b25BY3RpdmVTdGF0ZSgpIHtcclxuICAgIHRoaXMubGFiZWwuc2V0Q29sb3IoJyNCQkJCQkInKTtcclxuICAgIHRoaXMuc2V0RmlsbFN0eWxlKDB4NDQ0NDQ0KTtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==