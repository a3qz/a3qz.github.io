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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hlbHBlcnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy9iaXR0ZXJzLXNjZW5lLnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvYm9vdC1zY2VuZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL2JvdXJib24tc2NlbmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy9ldmVyeW9uZS1pbi1zY2VuZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL2dhbWUtc2NlbmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy9pY2Utc2NlbmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL2p1aWNlci1zY2VuZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL21haW4tbWVudS1zY2VuZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL211ZGRsZS1zY2VuZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL29yYW5nZS1zY2VuZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL3Blcm1pc3Npb25zLXNjZW5lLnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvcG91ci1zY2VuZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL3Jlc3VsdHMtc2NlbmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy9zaGFrZS1zY2VuZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL3N1Y2Nlc3Mtc2NlbmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy92ZXJtb3V0aC1zY2VuZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvZ2xhc3MtYnV0dG9uLnRzIiwid2VicGFjazovLy8uL3NyYy91aS9tZW51LWJ1dHRvbi50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UUFDakUsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxFQUFFLGlDQUFpQyxDQUFDLENBQUM7UUFDbkUsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxFQUFFLGlDQUFpQyxDQUFDLENBQUM7UUFDbkUsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxFQUFFLGlDQUFpQyxDQUFDLENBQUM7UUFDbkUsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxFQUFFLGlDQUFpQyxDQUFDLENBQUM7UUFDbkUsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLHdCQUF3QixDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFFLDRCQUE0QixDQUFDLENBQUM7UUFDMUQsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLHlCQUF5QixDQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLHlCQUF5QixDQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLHlCQUF5QixDQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLHlCQUF5QixDQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLHlCQUF5QixDQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFFLDZCQUE2QixDQUFDLENBQUM7UUFDM0QsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLDJCQUEyQixDQUFDLENBQUM7UUFDdkQsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxFQUFFLDJCQUEyQixDQUFDLENBQUM7UUFDNUQsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxFQUFFLGlDQUFpQyxDQUFDLENBQUM7UUFDbkUsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsa0JBQWtCLEVBQUUscUNBQXFDLENBQUMsQ0FBQztRQUMzRSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLEVBQUUsaUNBQWlDLENBQUMsQ0FBQztRQUNuRSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsMkJBQTJCLENBQUMsQ0FBQztRQUN2RCxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLEVBQUUsMkJBQTJCLENBQUMsQ0FBQztRQUM1RCxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUUsMkJBQTJCLENBQUMsQ0FBQztRQUN4RCxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUUsNEJBQTRCLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUUsNEJBQTRCLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUUsNEJBQTRCLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxtQkFBbUIsRUFBRSw0QkFBNEIsQ0FBQyxDQUFDO1FBQ25FLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFBRSw0QkFBNEIsQ0FBQyxDQUFDO1FBQ3pELElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsRUFBRSw0QkFBNEIsQ0FBQyxDQUFDO1FBQzFELElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsRUFBRSw2QkFBNkIsQ0FBQyxDQUFDO1FBQzNELElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsRUFBRSw2QkFBNkIsQ0FBQyxDQUFDO1FBQzNELElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsRUFBRSw2QkFBNkIsQ0FBQyxDQUFDO1FBQzNELElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFBRSw0QkFBNEIsQ0FBQyxDQUFDO1FBQ3pELElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsRUFBRSw0QkFBNEIsQ0FBQyxDQUFDO1FBQzlELElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSwyQkFBMkIsQ0FBQyxDQUFDO1FBQ3ZELElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsRUFBRSx1Q0FBdUMsQ0FBQyxDQUFDO1FBQ3hFLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksRUFBRSxzQ0FBc0MsQ0FBQyxDQUFDO1FBQ3RFLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsRUFBRSx3Q0FBd0MsQ0FBQyxDQUFDO1FBQzFFLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsRUFBRSxpQ0FBaUMsQ0FBQyxDQUFDO1FBQ25FLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSw4QkFBOEIsQ0FBQyxDQUFDO1FBQzdELElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGdCQUFnQixFQUFFLGlDQUFpQyxDQUFDLENBQUM7UUFDckUsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxFQUFFLCtCQUErQixDQUFDLENBQUM7UUFDakUsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxFQUFFLGdDQUFnQyxDQUFDLENBQUM7SUFDckUsQ0FBQztJQUNILGdCQUFDO0FBQUQsQ0FBQyxDQXhJOEIsTUFBTSxDQUFDLEtBQUssR0F3STFDO0FBeElZLDhCQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1R0QixJQUFNLFdBQVcsR0FBdUM7SUFDdEQsTUFBTSxFQUFFLEtBQUs7SUFDYixPQUFPLEVBQUUsS0FBSztJQUNkLEdBQUcsRUFBRSxTQUFTO0NBQ2YsQ0FBQztBQUNGO0lBQUE7SUFFQSxDQUFDO0lBQUQseUJBQUM7QUFBRCxDQUFDO0FBQ0Q7SUFBa0MsZ0NBQVk7SUFZNUM7UUFBQSxZQUNFLGtCQUFNLFdBQVcsQ0FBQyxTQUNuQjtRQWJNLFdBQUssR0FBRyxHQUFHLENBQUM7UUFNWCxjQUFRLEdBQWEsRUFBRSxDQUFDO1FBQ3hCLGtCQUFZLEdBQWdDLEVBQUUsQ0FBQztRQUUvQyxtQkFBYSxHQUFHLEtBQUssQ0FBQztRQVV2QixlQUFTLEdBQUcsQ0FBQyxDQUFDO1FBRWIsVUFBSSxHQUFHLEtBQUssQ0FBQzs7SUFSckIsQ0FBQztJQVVNLDJCQUFJLEdBQVgsVUFBWSxJQUF3QjtRQUNsQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDaEMsQ0FBQztJQUVNLDZCQUFNLEdBQWI7UUFBQSxpQkFxREM7UUFwREMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNqQixTQUFvQixJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQXRDLEtBQUssYUFBRSxNQUFNLFlBQXlCLENBQUM7UUFDL0MsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7UUFDbkIsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7UUFDbEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7UUFDM0IsdUZBQXVGO1FBQ3ZGLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLENBQUMsRUFBRSxNQUFNLEdBQUcsQ0FBQyxHQUFHLEdBQUcsRUFBRSxZQUFZLENBQUMsQ0FBQztRQUM3RSxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxDQUFDLEVBQUUsTUFBTSxHQUFHLENBQUMsR0FBRyxHQUFHLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztRQUVyRixxRkFBcUY7UUFDckYsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsR0FBRzthQUNwQixTQUFTLENBQ1IsS0FBSyxHQUFHLENBQUMsRUFDVCxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLGFBQWEsR0FBRyxXQUFXLEVBQ3ZFLElBQUksQ0FBQyxjQUFjLENBQUMsWUFBWSxHQUFHLENBQUMsRUFDcEMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLEdBQUcsQ0FBQyxFQUNyQyxRQUFRLENBQ1Q7YUFDQSxRQUFRLENBQUMsSUFBSSxDQUFDO2FBQ2QsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRWYsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFO1lBQzNCLElBQ0UsS0FBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsQ0FBQyxRQUFRLENBQUMsS0FBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQyxFQUFFLEtBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztnQkFDekYsS0FBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLElBQUksS0FBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQzFDO2dCQUNBLEtBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDO2dCQUNsQyxLQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztnQkFDakIsS0FBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUM1QixLQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDdEI7UUFDSCxDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLFdBQVcsRUFBRTtZQUN6QixLQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztZQUNsQixJQUFJLEtBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLEtBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxHQUFHLENBQUMsR0FBRyxLQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsR0FBRyxLQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsR0FBRyxDQUFDLEVBQUU7Z0JBQzFHLEtBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLEtBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxHQUFHLEtBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxHQUFHLFdBQVcsQ0FBQztnQkFDakYsS0FBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLEdBQUcsS0FBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7Z0JBQzFDLEtBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO2FBQ3BCO1lBRUQsS0FBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsYUFBTSxLQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxRQUFRLEVBQUksQ0FBQyxDQUFDO1lBQ2hFLEtBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFFBQU0sS0FBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsWUFBWSxFQUFJLENBQUMsQ0FBQztZQUNwRSxLQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxRQUFNLEtBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLFlBQVksRUFBSSxDQUFDLENBQUM7WUFDcEUsS0FBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsUUFBTSxLQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxXQUFXLEVBQUksQ0FBQyxDQUFDO1FBQ3JFLENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDO1FBQzdELElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQztRQUM3RCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUM7UUFDN0QsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDO1FBQzdELElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQztJQUMvRCxDQUFDO0lBRU0sNkJBQU0sR0FBYjtRQUFBLGlCQW9CQztRQW5CQyxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDYixJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxZQUFZLEVBQUUsR0FBRyxFQUFFLEVBQUU7Z0JBQzNGLElBQUksQ0FBQyxTQUFTLElBQUksQ0FBQyxDQUFDO2dCQUNwQixJQUFJLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRTtvQkFDM0IsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUMzQixJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ3BCLElBQ0UsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxHQUFHLENBQUM7d0JBQ3RHLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFDbkI7d0JBQ0EsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7d0JBQzFCLFVBQVUsQ0FBQzs0QkFDVCxLQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDOzRCQUNsQixLQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsRUFBRSxnQkFBZ0IsRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLEtBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO3dCQUN0RixDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7cUJBQ1Q7aUJBQ0Y7YUFDRjtTQUNGO0lBQ0gsQ0FBQztJQUNILG1CQUFDO0FBQUQsQ0FBQyxDQXhHaUMsTUFBTSxDQUFDLEtBQUssR0F3RzdDO0FBeEdZLG9DQUFZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1Z6Qiw0RkFBK0M7QUFDL0Msa0dBQTRDO0FBRTVDLElBQU0sV0FBVyxHQUF1QztJQUN0RCxNQUFNLEVBQUUsS0FBSztJQUNiLE9BQU8sRUFBRSxLQUFLO0lBQ2QsR0FBRyxFQUFFLFlBQVk7Q0FDbEIsQ0FBQztBQUNGO0lBQUE7SUFFQSxDQUFDO0lBQUQseUJBQUM7QUFBRCxDQUFDO0FBQ0Q7O0dBRUc7QUFDSDtJQUFxQyxtQ0FBWTtJQUkvQztlQUNFLGtCQUFNLFdBQVcsQ0FBQztJQUNwQixDQUFDO0lBQ00sOEJBQUksR0FBWCxVQUFZLElBQXdCO1FBQ2xDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUMxQyxDQUFDO0lBQ00sZ0NBQU0sR0FBYjtRQUFBLGlCQWlDQztRQWhDQyxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQzdCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQ2pCLDJGQUEyRjtRQUMzRixJQUFJLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsVUFBQyxHQUFXLEVBQUUsT0FBaUIsRUFBRSxXQUFtQixFQUFFLEtBQWE7WUFDakcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFRLEdBQUcsa0JBQWEsT0FBTyxzQkFBaUIsV0FBVyx1QkFBa0IsS0FBTyxDQUFDLENBQUM7WUFDbEcsSUFBSSxJQUFJLEdBQUc7Z0JBQ1QsV0FBVyxFQUFFLFdBQVc7Z0JBQ3hCLFdBQVcsRUFBRSxLQUFLO2dCQUNsQixTQUFTLEVBQUUsR0FBRztnQkFDZCxPQUFPLEVBQUUsT0FBTzthQUNqQjtZQUNELEtBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ2pDLEtBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxFQUFDLGFBQWEsRUFBRSxLQUFJLENBQUMsYUFBYSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQUFDO1FBQzdFLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUMsa0JBQWtCLEVBQUUsVUFBQyxPQUFlO1lBQ3hELE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBVyxPQUFTLENBQUMsQ0FBQztZQUNsQyxLQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN6QixDQUFDLENBQUMsQ0FBQztRQUVILElBQUksUUFBUSxHQUFHLFdBQVcsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN6RCxJQUFJLElBQUksR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDNUIsSUFBSSxDQUFDLEdBQUc7YUFDTCxJQUFJLENBQUMsR0FBRyxFQUFFLEVBQUUsRUFBRSxVQUFRLElBQU0sRUFBRTtZQUM3QixLQUFLLEVBQUUsU0FBUztTQUNqQixDQUFDO2FBQ0QsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ25CLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxXQUFTLElBQUksQ0FBQyxPQUFTLENBQUMsQ0FBQztRQUN0RSxJQUFJLHdCQUFVLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsbUJBQW1CLEVBQUU7WUFDbEQsS0FBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQUssY0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxFQUFwQyxDQUFvQyxDQUFDLENBQUM7WUFDdEYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQztRQUNoQyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFTSxnQ0FBTSxHQUFiO1FBQ0UsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsV0FBUyxJQUFJLENBQUMsT0FBUyxDQUFDLENBQUM7SUFDdEQsQ0FBQztJQUNILHNCQUFDO0FBQUQsQ0FBQyxDQWhEb0MsTUFBTSxDQUFDLEtBQUssR0FnRGhEO0FBaERZLDBDQUFlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2Q1QiwwRUFBdUY7QUFFdkYsOERBQThEO0FBQzlELDRGQUErQztBQUMvQywrRkFBaUQ7QUFDakQsK0ZBQWlEO0FBRWpELElBQU0sV0FBVyxHQUF1QztJQUN0RCxNQUFNLEVBQUUsS0FBSztJQUNiLE9BQU8sRUFBRSxLQUFLO0lBQ2QsR0FBRyxFQUFFLE1BQU07Q0FDWixDQUFDO0FBRUYsSUFBSyxTQUtKO0FBTEQsV0FBSyxTQUFTO0lBQ1oscURBQVU7SUFDVixpREFBUTtJQUNSLCtDQUFPO0lBQ1AsaURBQVE7QUFDVixDQUFDLEVBTEksU0FBUyxLQUFULFNBQVMsUUFLYjtBQUNEO0lBQUE7SUFLQSxDQUFDO0lBQUQsWUFBQztBQUFELENBQUM7QUFDRDtJQUFBO0lBR0EsQ0FBQztJQUFELHlCQUFDO0FBQUQsQ0FBQztBQUVEO0lBQUE7SUFHQSxDQUFDO0lBQUQsa0JBQUM7QUFBRCxDQUFDO0FBQ0Q7SUFBK0IsNkJBQVk7SUFnRHpDO1FBQUEsWUFDRSxrQkFBTSxXQUFXLENBQUMsU0FDbkI7UUFqRE0sV0FBSyxHQUFHLEdBQUcsQ0FBQztRQWtCWCxrQkFBWSxHQUF1QixFQUFFLENBQUM7UUFtQnRDLGNBQVEsR0FBYSxFQUFFLENBQUM7UUFDeEIsa0JBQVksR0FBbUMsRUFBRSxDQUFDO1FBRTFELHFCQUFlLEdBQXdCLElBQUksR0FBRyxDQUFDO1lBQzdDLENBQUMsU0FBUyxFQUFFLFFBQVEsQ0FBQztZQUNyQixDQUFDLFVBQVUsRUFBRSxRQUFRLENBQUM7U0FDdkIsQ0FBQyxDQUFDO1FBRUssZUFBUyxHQUFHLENBQUMsQ0FBQztRQVFkLGVBQVMsR0FBRyxVQUFDLEtBQUs7WUFDeEIsSUFBTSxJQUFJLEdBQUcsS0FBSyxHQUFHLEdBQUcsQ0FBQztZQUN6QixJQUFNLGFBQWEsR0FBRyxrQkFBa0IsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDMUQsSUFBTSxFQUFFLEdBQUcsYUFBYSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNwQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDbEMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNkLE9BQU8sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLEVBQUU7b0JBQ3pCLENBQUMsR0FBRyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUNwQjtnQkFDRCxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO29CQUN4QixPQUFPLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUM7aUJBQzNDO2FBQ0Y7WUFDRCxPQUFPLEVBQUUsQ0FBQztRQUNaLENBQUMsQ0FBQztRQTBWTSxvQkFBYyxHQUFHO1lBQ3ZCLEtBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSx1QkFBdUIsQ0FBQyxDQUFDO1FBQ2pFLENBQUMsQ0FBQztRQUVNLHFCQUFlLEdBQUc7WUFDeEIsS0FBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDekMsQ0FBQyxDQUFDO1FBRU0sc0JBQWdCLEdBQUcsVUFBQyxNQUFjLEVBQUUsTUFBYztZQUN4RCxLQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQzFELENBQUMsQ0FBQztRQUVNLG9CQUFjLEdBQUc7WUFDdkIsS0FBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDeEMsQ0FBQyxDQUFDO1FBRU0saUJBQVcsR0FBRztZQUNwQixLQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNyQyxDQUFDLENBQUM7UUFDTSxzQkFBZ0IsR0FBRztZQUN6QixLQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUMxQyxDQUFDLENBQUM7O0lBallGLENBQUM7SUFvQk0sd0JBQUksR0FBWCxVQUFZLElBQXdCO1FBQ2xDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUN4QyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDO1FBQzFDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUM7UUFDbEMsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQztRQUMxQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDO0lBQ3hDLENBQUM7SUFHTSwwQkFBTSxHQUFiO1FBQUEsaUJBc0xDO1FBckxDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNoRCxJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztRQUNwQixnQkFBZ0I7UUFDaEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7UUFFNUIsU0FBb0IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUF0QyxLQUFLLGFBQUUsTUFBTSxZQUF5QixDQUFDO1FBQy9DLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLENBQUMsRUFBRSxNQUFNLEdBQUcsQ0FBQyxFQUFFLFlBQVksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUluRixJQUFHLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxFQUFDO1lBRXBCLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFDLENBQUMsRUFBRSxNQUFNLEdBQUMsRUFBRSxHQUFHLEVBQUUsRUFBRSx3QkFBc0IsQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFDLENBQUMsQ0FBRyxFQUFFLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUM7WUFDOUgsdUZBQXVGO1lBQ3pGLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsS0FBSyxHQUFHLENBQUMsRUFBRSxNQUFNLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEdBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEdBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1lBQzNLLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsS0FBSyxHQUFHLENBQUMsRUFBRSxNQUFNLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxHQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxHQUFDLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQztZQUMvSyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLEtBQUssR0FBRyxDQUFDLEVBQUUsTUFBTSxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxHQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxHQUFDLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQztZQUMzSyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLEtBQUssR0FBRyxDQUFDLEVBQUUsTUFBTSxHQUFHLENBQUMsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsR0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUM7WUFFdkksSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNqRyxJQUFJLENBQUMsWUFBWSxDQUFDLFFB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QUFDLENBQUMsQ0FBQztxQkFDbEM7b0JBQ0QsSUFBSSxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUMsR0FBRyxLQUFJLENBQUMsSUFBSSxFQUFFO3dCQUNwQyxLQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO3FCQUNsQztvQkFDRCxJQUFJLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQyxHQUFHLEtBQUksQ0FBQyxJQUFJLEVBQUU7d0JBQ3BDLEtBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7cUJBQ2xDO29CQUNELElBQUksS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDLEdBQUcsS0FBSSxDQUFDLElBQUksRUFBRTt3QkFDcEMsS0FBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztxQkFDbEM7b0JBQ0QsSUFBSSxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUMsR0FBRyxLQUFJLENBQUMsSUFBSSxFQUFFO3dCQUNwQyxLQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO3FCQUNsQztvQkFDRCxJQUFJLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQyxHQUFHLEtBQUksQ0FBQyxJQUFJLEVBQUU7d0JBQ3BDLEtBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7cUJBQ2xDO29CQUNELEtBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLE9BQUssS0FBSSxDQUFDLElBQUksU0FBSSxLQUFJLENBQUMsSUFBTSxDQUFDLENBQUM7b0JBQ2xELEtBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLE9BQUssS0FBSSxDQUFDLElBQUksU0FBSSxLQUFJLENBQUMsSUFBTSxDQUFDLENBQUM7b0JBQ2xELEtBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLE9BQUssS0FBSSxDQUFDLElBQUksU0FBSSxLQUFJLENBQUMsSUFBTSxDQUFDLENBQUM7b0JBQ2xELEtBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLE9BQUssS0FBSSxDQUFDLENBQUMsU0FBSSxLQUFJLENBQUMsVUFBWSxDQUFDLENBQUM7b0JBQ3JELEtBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFlBQVUsS0FBSSxDQUFDLFVBQVksQ0FBQyxDQUFDO2dCQUNsRCxDQUFDLENBQUMsQ0FBQztZQUNMLENBQUMsQ0FBQyxDQUFDO1NBQ0o7UUFBQyxPQUFPLEVBQUUsRUFBRTtZQUNYLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDdkIsTUFBTSxDQUFDLGdCQUFnQixDQUFDLGNBQWMsRUFBRSxVQUFDLEtBQUs7Z0JBQzVDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ25CLElBQUksS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDLEdBQUcsS0FBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUMsR0FBRyxLQUFJLENBQUMsU0FBUyxFQUFFO29CQUN2RixLQUFJLENBQUMsQ0FBQyxFQUFFLENBQUM7aUJBQ1Y7cUJBQU0sSUFBSSxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUMsR0FBRyxLQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQyxHQUFHLEtBQUksQ0FBQyxTQUFTLEVBQUU7b0JBQzlGLEtBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQztpQkFDVjtxQkFBTSxJQUFJLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQyxHQUFHLEtBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDLEdBQUcsS0FBSSxDQUFDLFNBQVMsRUFBRTtvQkFDOUYsS0FBSSxDQUFDLENBQUMsRUFBRSxDQUFDO2lCQUNWO2dCQUVELE9BQU87Z0JBQ1AsSUFBSSxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUMsR0FBRyxLQUFJLENBQUMsSUFBSSxFQUFFO29CQUNwQyxLQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO2lCQUNsQztnQkFDRCxJQUFJLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQyxHQUFHLEtBQUksQ0FBQyxJQUFJLEVBQUU7b0JBQ3BDLEtBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7aUJBQ2xDO2dCQUNELElBQUksS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDLEdBQUcsS0FBSSxDQUFDLElBQUksRUFBRTtvQkFDcEMsS0FBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztpQkFDbEM7Z0JBQ0QsSUFBSSxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUMsR0FBRyxLQUFJLENBQUMsSUFBSSxFQUFFO29CQUNwQyxLQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO2lCQUNsQztnQkFDRCxJQUFJLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQyxHQUFHLEtBQUksQ0FBQyxJQUFJLEVBQUU7b0JBQ3BDLEtBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7aUJBQ2xDO2dCQUNELElBQUksS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDLEdBQUcsS0FBSSxDQUFDLElBQUksRUFBRTtvQkFDcEMsS0FBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztpQkFDbEM7Z0JBQ0QsS0FBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsT0FBSyxLQUFJLENBQUMsSUFBSSxTQUFJLEtBQUksQ0FBQyxJQUFNLENBQUMsQ0FBQztnQkFDbEQsS0FBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsT0FBSyxLQUFJLENBQUMsSUFBSSxTQUFJLEtBQUksQ0FBQyxJQUFNLENBQUMsQ0FBQztnQkFDbEQsS0FBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsT0FBSyxLQUFJLENBQUMsSUFBSSxTQUFJLEtBQUksQ0FBQyxJQUFNLENBQUMsQ0FBQztnQkFDbEQsS0FBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsT0FBSyxLQUFJLENBQUMsQ0FBQyxTQUFJLEtBQUksQ0FBQyxVQUFZLENBQUMsQ0FBQztnQkFDckQsS0FBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsWUFBVSxLQUFJLENBQUMsVUFBWSxDQUFDLENBQUM7WUFDbEQsQ0FBQyxDQUFDLENBQUM7U0FDSjtJQUNILENBQUM7SUFDTSw2QkFBUSxHQUFmO1FBQ0UsOEJBQThCO1FBQzlCLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDO1FBQ2QsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUM7UUFDZCxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQztRQUNkLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDO1FBQ2QsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUM7UUFDZCxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQztRQUNkLHNDQUFzQztRQUNwQyxnRkFBZ0Y7UUFDbEYsR0FBRztRQUVKOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQXlDSTtRQUNILElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNqQixFQUFFO0lBQ0osQ0FBQztJQUNILGlCQUFDO0FBQUQsQ0FBQyxDQXRSK0IsTUFBTSxDQUFDLEtBQUssR0FzUjNDO0FBdFJZLGdDQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1J2QixJQUFNLFdBQVcsR0FBdUM7SUFDdEQsTUFBTSxFQUFFLEtBQUs7SUFDYixPQUFPLEVBQUUsS0FBSztJQUNkLEdBQUcsRUFBRSxTQUFTO0NBQ2YsQ0FBQztBQUNGO0lBQUE7SUFFQSxDQUFDO0lBQUQseUJBQUM7QUFBRCxDQUFDO0FBQ0Q7SUFBa0MsZ0NBQVk7SUFNNUM7UUFBQSxZQUNFLGtCQUFNLFdBQVcsQ0FBQyxTQUNuQjtRQVBNLFdBQUssR0FBRyxHQUFHLENBQUM7UUFHWCxtQkFBYSxHQUFHLEtBQUssQ0FBQztRQVd2QixZQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ1gsY0FBUSxHQUFHLENBQUMsQ0FBQzs7SUFScEIsQ0FBQztJQVVNLDJCQUFJLEdBQVgsVUFBWSxJQUF3QjtRQUNsQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDaEMsQ0FBQztJQUdNLDZCQUFNLEdBQWI7UUFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ2pCLFNBQW9CLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBdEMsS0FBSyxhQUFFLE1BQU0sWUFBeUIsQ0FBQztRQUMvQyxJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztRQUMzQix1RkFBdUY7UUFDdkYseUZBQXlGO1FBQ3pGLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBQyxDQUFDLEVBQUUsQ0FBQyxNQUFNLEdBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFHLHFJQUt4QyxFQUFFLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUdILG1CQUFDO0FBQUQsQ0FBQyxDQXRDaUMsTUFBTSxDQUFDLEtBQUssR0FzQzdDO0FBdENZLG9DQUFZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1R6QixJQUFNLFdBQVcsR0FBdUM7SUFDdEQsTUFBTSxFQUFFLEtBQUs7SUFDYixPQUFPLEVBQUUsS0FBSztJQUNkLEdBQUcsRUFBRSxVQUFVO0NBQ2hCLENBQUM7QUFFRjtJQUFBO0lBRUEsQ0FBQztJQUFELHlCQUFDO0FBQUQsQ0FBQztBQUVEO0lBQW1DLGlDQUFZO0lBSTdDO1FBQUEsWUFDRSxrQkFBTSxXQUFXLENBQUMsU0FDbkI7UUFNTSxlQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ2IsbUJBQWEsR0FBRyxLQUFLLENBQUM7O0lBUDlCLENBQUM7SUFXTSw0QkFBSSxHQUFYLFVBQVksSUFBd0I7UUFDbEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ2hDLENBQUM7SUFFTSw4QkFBTSxHQUFiO1FBQUEsaUJBZ0RDO1FBL0NDLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDbEIsU0FBb0IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUF0QyxLQUFLLGFBQUUsTUFBTSxZQUF5QixDQUFDO1FBQy9DLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ25CLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1FBQzNCLHVGQUF1RjtRQUN2RixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxDQUFDLEVBQUUsTUFBTSxHQUFHLENBQUMsR0FBRyxHQUFHLEVBQUUsYUFBYSxDQUFDLENBQUM7UUFDL0UsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsQ0FBQyxFQUFFLE1BQU0sR0FBRyxDQUFDLEdBQUcsR0FBRyxFQUFFLGlCQUFpQixDQUFDLENBQUM7UUFFdkYsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsV0FBVyxFQUFFO1lBQ3pCLEtBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLGFBQU0sS0FBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsUUFBUSxFQUFJLENBQUMsQ0FBQztZQUNoRSxLQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxRQUFNLEtBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLFlBQVksRUFBSSxDQUFDLENBQUM7WUFDcEUsS0FBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsUUFBTSxLQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxZQUFZLEVBQUksQ0FBQyxDQUFDO1lBQ3BFLEtBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFFBQU0sS0FBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsV0FBVyxFQUFJLENBQUMsQ0FBQztZQUVuRSxnQ0FBZ0M7WUFDaEMsSUFDRSxLQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxXQUFXLEVBQUUsSUFBSSxHQUFHO2dCQUM3QyxLQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxRQUFRLEVBQUUsSUFBSSxJQUFJO2dCQUMzQyxLQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLElBQUk7Z0JBQzVDLEtBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxFQUNsQjtnQkFDQSxLQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxjQUFZLEVBQUUsS0FBSSxDQUFDLFNBQVcsQ0FBQyxDQUFDO2dCQUNuRCxLQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztnQkFDdkQsS0FBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxLQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQztnQkFDekQsSUFBSSxLQUFJLENBQUMsU0FBUyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxhQUFhLEVBQUU7b0JBQzlDLEtBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO29CQUMxQixVQUFVLENBQUM7d0JBQ1QsS0FBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQzt3QkFDbEIsS0FBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLEVBQUUsZ0JBQWdCLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxLQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztvQkFDdkYsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO2lCQUNUO2FBQ0Y7aUJBQU0sSUFDTCxLQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxXQUFXLEVBQUUsSUFBSSxHQUFHO2dCQUM3QyxDQUFDLEtBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsR0FBRyxJQUFJLEtBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLFFBQVEsRUFBRSxJQUFJLEdBQUcsQ0FBQztnQkFDM0YsS0FBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLEVBQ2xCO2dCQUNBLEtBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLGNBQVksRUFBRSxLQUFJLENBQUMsU0FBVyxDQUFDLENBQUM7Z0JBQ25ELEtBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO2dCQUN2RCxLQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssR0FBRyxDQUFDLEtBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDO2FBQzFEO1FBQ0gsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUM7UUFDN0QsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDO1FBQzdELElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQztRQUM3RCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLFNBQVMs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QUNYLEtBQUksQ0FBQyxFQUFFLENBQUMsV0FBVyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1NBQy9CO1FBRUQsS0FBSSxDQUFDLHdCQUF3QixFQUFFLENBQUM7O0lBQ2xDLENBQUM7SUFFTywrQ0FBeUIsR0FBakM7UUFDRSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUMvQixJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFFTyw4Q0FBd0IsR0FBaEM7UUFDRSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUMvQixJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFFTyxnREFBMEIsR0FBbEM7UUFDRSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUMvQixJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFDSCxrQkFBQztBQUFELENBQUMsQ0FoRGdDLE1BQU0sQ0FBQyxXQUFXLENBQUMsU0FBUyxHQWdENUQ7QUFoRFksa0NBQVciLCJmaWxlIjoiYXBwLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJhcHBcIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbXCIuL3NyYy9tYWluLnRzXCIsXCJ2ZW5kb3JzXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiaW1wb3J0ICogYXMgUGhhc2VyIGZyb20gJ3BoYXNlcic7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0R2FtZVdpZHRoID0gKHNjZW5lOiBQaGFzZXIuU2NlbmUpOiBudW1iZXIgPT4ge1xyXG4gIHJldHVybiBzY2VuZS5nYW1lLnNjYWxlLndpZHRoO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldEdhbWVIZWlnaHQgPSAoc2NlbmU6IFBoYXNlci5TY2VuZSk6IG51bWJlciA9PiB7XHJcbiAgcmV0dXJuIHNjZW5lLmdhbWUuc2NhbGUuaGVpZ2h0O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGRyaW5rVG9Db2xvck1hcDogTWFwPHN0cmluZywgbnVtYmVyPiA9IG5ldyBNYXAoW1xyXG4gIFsnQm91cmJvbicsIDB4ZGI3OTAwXSxcclxuICBbJ1Zlcm1vdXRoJywgMHg1NTAxMDNdLFxyXG4gIFsnVm9ka2EnLCAweDgwODA4MF0sXHJcbiAgWydHaW4nLCAweDc1YTNhM10sXHJcbiAgWydSdW0nLCAweEFDNTkyRF0sXHJcbiAgWydUcmlwbGUgU2VjJywgMHhmZmNjOTldLFxyXG4gIFsnVGVxdWlsYScsIDB4ODBmZmZmXSxcclxuICBbJ0Nva2UnLCAweEFDNTkyRF0sXHJcbiAgWydMZW1vbiBKdWljZScsIDB4ZmZmZjk5XSxcclxuICBbJ0xpbWUgSnVpY2UnLCAweGQ5ZmZiM10sXHJcbiAgWydPcmFuZ2UgSnVpY2UnLCAweGZmY2M5OV0sXHJcbl0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IEluZ3JlZGllbnRzID0gW1xyXG4gICdTaGFrZSBEcmluaycsXHJcbiAgJ011ZGRsZSBEcmluaycsXHJcbiAgJ09yYW5nZSBQZWVsJyxcclxuICAnQm91cmJvbicsXHJcbiAgJ0ljZSBDdWJlJyxcclxuICAnVmVybW91dGgnLFxyXG4gICdMZW1vbiBKdWljZScsXHJcbiAgJ0xpbWUgSnVpY2UnLFxyXG4gICdPcmFuZ2UgSnVpY2UnLFxyXG4gICdBbmdvc3R1cmEgQml0dGVycycsXHJcbiAgJ1ZvZGthJyxcclxuICAnR2luJyxcclxuICAnUnVtJyxcclxuICAnVHJpcGxlIFNlYycsXHJcbiAgJ1RlcXVpbGEnLFxyXG4gICdDb2tlJyxcclxuICAnU29kYScsXHJcbiAgJ1NpbXBsZSBTeXJ1cCcsXHJcbiAgJ1RvbmljJyxcclxuICAnQnJhbmR5JyxcclxuICAnQ3J1c2hlZCBJY2UnLFxyXG4gICdMaW1lIFdlZGdlJyxcclxuICAnTGVtb24gV2VkZ2UnLFxyXG4gICdTdGlyIERyaW5rJyxcclxuICAnU3RyYWluIERyaW5rJyxcclxuICAnQ29nbmFjJyxcclxuICAnRWdnIFdoaXRlJ1xyXG5dO1xyXG4vKlxyXG5leHBvcnQgY29uc3Qgc3RyaW5nVG9CYWNrZW5kTnVtYmVyTWFwOiBNYXA8c3RyaW5nLCBudW1iZXI+ID0gbmV3IE1hcChbXHJcbiAgWydUZXF1aWxhJywgMF0sXHJcbiAgWydCcmFuZHknLCAxXSxcclxuICBbJ0dpbicsIDJdLFxyXG4gIFsnUnVtJywgM10sXHJcbiAgWydWb2RrYScsIDRdLFxyXG4gIFsnV2hpc2t5JywgNV0sXHJcbiAgWydUcmlwbGUgU2VjJywgNl0sXHJcbiAgWydWZXJtb3V0aCcsIDddLFxyXG4gIFsnQW5nb3N0dXJhIEJpdHRlcnMnLCA4XSxcclxuICBbJ0Nva2UnLCA5XSxcclxuICBbJ1NvZGEnLCAxMF0sXHJcbiAgWydUb25pYycsIDBdLFxyXG4gIFsnU2ltcGxlIFN5cnVwJywgMF0sXHJcbiAgWydJY2UgQ3ViZScsIDBdLFxyXG4gIFsnVG9uaWMnLCAwXSxcclxuICBbJ0xlbW9uIEp1aWNlJywgMF0sXHJcbiAgWydMaW1lIEp1aWNlJywgMF0sXHJcbiAgWydPcmFuZ2UgSnVpY2UnLCAwXSxcclxuICBbJ1NoYWtlIERyaW5rJywgMF0sXHJcbiAgWydTdGlyIERyaW5rJywgMF0sXHJcbiAgWydNdWRkbGUgRHJpbmsnLCAwXSxcclxuICBbJ0xpbWUgV2VkZ2UnLCAwXSxcclxuICBbJ0xlbW9uIFdlZGdlJywgMF0sXHJcbiAgWydPcmFuZ2UgV2VkZ2UnLCAwXSxcclxuXSkqL1xyXG4iLCJpbXBvcnQgKiBhcyBQaGFzZXIgZnJvbSAncGhhc2VyJztcclxuaW1wb3J0IFNjZW5lcyBmcm9tICcuL3NjZW5lcyc7XHJcbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbigpIHtcclxuICBjb25zdCBnYW1lQ29uZmlnOiBQaGFzZXIuVHlwZXMuQ29yZS5HYW1lQ29uZmlnID0ge1xyXG4gICAgdGl0bGU6ICdTYW1wbGUnLFxyXG4gIFxyXG4gICAgdHlwZTogUGhhc2VyLkNBTlZBUyxcclxuICBcclxuICAgIHNjYWxlOiB7XHJcbiAgICAgIHdpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCxcclxuICAgICAgaGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHQsXHJcbiAgICB9LFxyXG4gIFxyXG4gICAgc2NlbmU6IFNjZW5lcyxcclxuICBcclxuICAgIHBoeXNpY3M6IHtcclxuICAgICAgZGVmYXVsdDogJ2FyY2FkZScsXHJcbiAgICAgIGFyY2FkZToge1xyXG4gICAgICAgIGRlYnVnOiB0cnVlLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICBcclxuICAgIHBhcmVudDogJ2dhbWUnLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiAnIzAwMDAwMCcsXHJcbiAgfTtcclxuICBcclxuICB2YXIgZ2FtZSA9IG5ldyBQaGFzZXIuR2FtZShnYW1lQ29uZmlnKTtcclxuICBcclxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4ge1xyXG4gICAgZ2FtZS5zY2FsZS5yZWZyZXNoKCk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbiIsImltcG9ydCB7IElucHV0LCBHYW1lT2JqZWN0cyB9IGZyb20gJ3BoYXNlcic7XHJcblxyXG5jb25zdCBzY2VuZUNvbmZpZzogUGhhc2VyLlR5cGVzLlNjZW5lcy5TZXR0aW5nc0NvbmZpZyA9IHtcclxuICBhY3RpdmU6IGZhbHNlLFxyXG4gIHZpc2libGU6IGZhbHNlLFxyXG4gIGtleTogJ0FuZ29zdHVyYSBCaXR0ZXJzJyxcclxufTtcclxuXHJcbmNsYXNzIEdhbWVTY2VuZUFyZ3VtZW50cyB7XHJcbiAgcHVibGljIG9uRmluaXNoOiBGdW5jdGlvbjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEJpdHRlcnNTY2VuZSBleHRlbmRzIFBoYXNlci5TY2VuZSB7XHJcbiAgcHVibGljIHNwZWVkID0gMjAwO1xyXG5cclxuICBwcml2YXRlIGN1cnNvcktleXM6IFBoYXNlci5UeXBlcy5JbnB1dC5LZXlib2FyZC5DdXJzb3JLZXlzO1xyXG4gIHByaXZhdGUgYm90dGxlOiBQaGFzZXIuR2FtZU9iamVjdHMuU3ByaXRlO1xyXG4gIC8vcHJpdmF0ZSBib3VyYm9uOiBQaGFzZXIuR2FtZU9iamVjdHMuU3ByaXRlO1xyXG4gIHByaXZhdGUgZW1wdHlHbGFzczogUGhhc2VyLkdhbWVPYmplY3RzLlNwcml0ZTtcclxuICBwcml2YXRlIGZpbGxlZGdsYXNzMTogUGhhc2VyLkdhbWVPYmplY3RzLlNwcml0ZTtcclxuICBwcml2YXRlIGZpbGxlZGdsYXNzMjogUGhhc2VyLkdhbWVPYmplY3RzLlNwcml0ZTtcclxuXHJcbiAgcHJpdmF0ZSBjb250ZW50czogc3RyaW5nW10gPSBbXTtcclxuICBwcml2YXRlIGdsYXNzRmlsbGVyczogUGhhc2VyLkdhbWVPYmplY3RzLlNwcml0ZVtdID0gW107XHJcblxyXG4gIHByaXZhdGUgaXNQb3VyaW5nID0gMDtcclxuICBwcml2YXRlIHNoYWtlQ291bnQgPSAwO1xyXG4gIHByaXZhdGUgdHJhbnNpdGlvbmluZyA9IGZhbHNlO1xyXG4gIHByaXZhdGUgbiA9IDA7XHJcbiAgcHJpdmF0ZSBudGhyZXNob2xkID0gMDtcclxuICBwcml2YXRlIG1heHggPSAwO1xyXG4gIHByaXZhdGUgbWF4eSA9IDA7XHJcbiAgcHJpdmF0ZSBtYXh6ID0gMDtcclxuICBwcml2YXRlIG1pbnggPSAwO1xyXG4gIHByaXZhdGUgbWlueSA9IDA7XHJcbiAgcHJpdmF0ZSBtaW56ID0gMDtcclxuICBwcml2YXRlIHRocmVzaG9sZCA9IDE1O1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKHNjZW5lQ29uZmlnKTtcclxuICB9XHJcbiAgcHVibGljIHRleHQxOiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dDtcclxuICBwdWJsaWMgdGV4dDI6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0O1xyXG4gIHB1YmxpYyB0ZXh0MzogUGhhc2VyLkdhbWVPYmplY3RzLlRleHQ7XHJcbiAgcHVibGljIHRleHQ0OiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dDtcclxuICBwdWJsaWMgdGV4dDU6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0O1xyXG4gIHB1YmxpYyBib3R0bGVOYW1lOiBzdHJpbmc7XHJcbiAgcHJpdmF0ZSBsaXF1aWRSZWN0YW5nbGU6IFBoYXNlci5HYW1lT2JqZWN0cy5SZWN0YW5nbGU7XHJcbiAgcHVibGljIG9uRmluaXNoOiBGdW5jdGlvbjtcclxuXHJcbiAgcHVibGljIGluaXQoZGF0YTogR2FtZVNjZW5lQXJndW1lbnRzKTogdm9pZCB7XHJcbiAgICBjb25zb2xlLmxvZygnQW5nb3N0dXJhIEJpdHRlcnMgc2NlbmUgaW5pdCcpO1xyXG4gICAgdGhpcy5ib3R0bGVOYW1lID0gJ2JpdHRlcnMnO1xyXG4gICAgdGhpcy5vbkZpbmlzaCA9IGRhdGEub25GaW5pc2g7XHJcbiAgICBcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjcmVhdGUoKTogdm9pZCB7XHJcbiAgICBjb25zb2xlLmxvZygnQW5nb3N0dXJhIEJpdHRlcnMgc2NlbmUgY3JlYXRlJyk7XHJcbiAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IHRoaXMuc3lzLmdhbWUuY2FudmFzO1xyXG4gICAgdGhpcy5pc1BvdXJpbmcgPSAwO1xyXG4gICAgdGhpcy5zaGFrZUNvdW50ID0gMDtcclxuICAgIHRoaXMudHJhbnNpdGlvbmluZyA9IGZhbHNlO1xyXG4gICAgdGhpcy5uID0gMDtcclxuICAgIHRoaXMubnRocmVzaG9sZCA9IDEzO1xyXG4gICAgdGhpcy5jYWxsYmFjaygpO1xyXG4gICAgLy8gQWRkIGEgcGxheWVyIHNwcml0ZSB0aGF0IGNhbiBiZSBtb3ZlZCBhcm91bmQuIFBsYWNlIGhpbSBpbiB0aGUgbWlkZGxlIG9mIHRoZSBzY3JlZW4uXHJcbiAgICAvL3RoaXMuZW1wdHlHbGFzcyA9IHRoaXMuYWRkLnNwcml0ZSh3aWR0aCAvIDQsIGhlaWdodCAvIDIsICdlbXB0eWdsYXNzJyk7XHJcbiAgICAvL3RoaXMuZmlsbGVkZ2xhc3MxID0gdGhpcy5hZGQuc3ByaXRlKHdpZHRoIC8gNCwgaGVpZ2h0IC8gMiwgJ2ZpbGxlZGdsYXNzMScpO1xyXG4gICAgLy90aGlzLmZpbGxlZGdsYXNzMiA9IHRoaXMuYWRkLnNwcml0ZSh3aWR0aCAvIDQsIGhlaWdodCAvIDIsICdmaWxsZWRnbGFzczInKTtcclxuXHJcbiAgICAvL3RoaXMuYm91cmJvbiA9IHRoaXMuYWRkLnNwcml0ZSh3aWR0aCAvIDgsIGhlaWdodCAvIDQsICdjYW5lbGxla25pZmUnKS5zZXRJbnRlcmFjdGl2ZSgpO1xyXG4gICAgLy90aGlzLmJvdXJib24ub24oJ3BvaW50ZXJkb3duJywgdGhpcy5jYWxsYmFjayApO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKGBnbGFzcyB4OiAke3dpZHRoIC8gNH1gKTtcclxuICAgIGNvbnNvbGUubG9nKGBnbGFzcyB5OiAke2hlaWdodCAvIDJ9YCk7XHJcblxyXG4gICAgdGhpcy5ib3R0bGUgPSB0aGlzLmFkZC5zcHJpdGUod2lkdGggLyAyLCBoZWlnaHQgLyAyLCB0aGlzLmJvdHRsZU5hbWUpLnNldEludGVyYWN0aXZlKCk7XHJcbiAgICBjb25zb2xlLmxvZyhgdHJpZWQgdG8gcmVuZGVyICR7dGhpcy5ib3R0bGVOYW1lfSBib3R0bGVgKTtcclxuICAgIHRoaXMuYm90dGxlLnNldFNjYWxlKDAuNik7XHJcbiAgICAvL2NvbnNvbGUubG9nKHRoaXMuZW1wdHlHbGFzcy54KTtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMuYm90dGxlLmRpc3BsYXlIZWlnaHQpO1xyXG4gICAgLy90aGlzLmJvdHRsZS5zZXRQb3NpdGlvbih0aGlzLmVtcHR5R2xhc3MueCArIHRoaXMuYm90dGxlLmRpc3BsYXlIZWlnaHQgLyA0KTtcclxuICAgIC8vdGhpcy5ib3R0bGUuc2V0U2NhbGUoMC41KTtcclxuXHJcbiAgICB0aGlzLmJvdHRsZS5vbigncG9pbnRlcm92ZXInLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMuYm90dGxlLnNldFRpbnQoMHhjY2NjY2MpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5ib3R0bGUub24oJ3BvaW50ZXJvdXQnLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMuYm90dGxlLmNsZWFyVGludCgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5ib3R0bGUub24oJ3BvaW50ZXJkb3duJywgKCkgPT4ge1xyXG4gICAgICB0aGlzLnNoYWtlQ291bnQrKztcclxuICAgICAgaWYgKHRoaXMuc2hha2VDb3VudCA+IDcpIHtcclxuICAgICAgICB0aGlzLnNoYWtlQ291bnQgPSA3O1xyXG4gICAgICB9XHJcbiAgICAgIC8vdGhpcy5ib3R0bGUuc2V0VGV4dHVyZShgc2hha2VyJHt0aGlzLnNoYWtlQ291bnR9YCk7XHJcbiAgICB9KTtcclxuICAgIHRoaXMuaW5wdXQuc2V0RHJhZ2dhYmxlKHRoaXMuYm90dGxlKTtcclxuXHJcbiAgICB0aGlzLmlucHV0Lm9uKCdkcmFnc3RhcnQnLCAocG9pbnRlciwgZ2FtZU9iamVjdCkgPT4ge1xyXG4gICAgICBnYW1lT2JqZWN0LnNldFRpbnQoMHg5OTk5OTkpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gVGhpcyBpcyBhIG5pY2UgaGVscGVyIFBoYXNlciBwcm92aWRlcyB0byBjcmVhdGUgbGlzdGVuZXJzIGZvciBzb21lIG9mIHRoZSBtb3N0IGNvbW1vbiBrZXlzLlxyXG4gICAgdGhpcy5jdXJzb3JLZXlzID0gdGhpcy5pbnB1dC5rZXlib2FyZC5jcmVhdGVDdXJzb3JLZXlzKCk7XHJcblxyXG4gICAgdGhpcy50ZXh0MSA9IHRoaXMuYWRkLnRleHQoNTAsIDEwLCAnJywgeyBjb2xvcjogJyMwMGZmMDAnIH0pO1xyXG4gICAgdGhpcy50ZXh0MiA9IHRoaXMuYWRkLnRleHQoNTAsIDMwLCAnJywgeyBjb2xvcjogJyMwMGZmMDAnIH0pO1xyXG4gICAgdGhpcy50ZXh0MyA9IHRoaXMuYWRkLnRleHQoNTAsIDYwLCAnJywgeyBjb2xvcjogJyMwMGZmMDAnIH0pO1xyXG4gICAgdGhpcy50ZXh0NCA9IHRoaXMuYWRkLnRleHQoNTAsIDkwLCAnJywgeyBjb2xvcjogJyMwMGZmMDAnIH0pO1xyXG4gICAgdGhpcy50ZXh0NSA9IHRoaXMuYWRkLnRleHQoNTAsIDEyMCwgJycsIHsgY29sb3I6ICcjMDBmZjAwJyB9KTtcclxuXHJcbiAgICB0aGlzLmJvdHRsZS5zZXREZXB0aCgxKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyB1cGRhdGUoKTogdm9pZCB7XHJcbiAgICAvLyBFdmVyeSBmcmFtZSwgd2UgY3JlYXRlIGEgbmV3IHZlbG9jaXR5IGZvciB0aGUgc3ByaXRlIGJhc2VkIG9uIHdoYXQga2V5cyB0aGUgcGxheWVyIGlzIGhvbGRpbmcgZG93bi5cclxuICAgIGlmICh0aGlzLm4gPiB0aGlzLm50aHJlc2hvbGQgJiYgdGhpcy5zaGFrZUNvdW50IDw9IDcpIHtcclxuICAgICAgdGhpcy5uID0gMDtcclxuICAgICAgdGhpcy5zaGFrZUNvdW50Kys7XHJcbiAgICAgIHRoaXMudGV4dDQuc2V0VGV4dChgbiAke3RoaXMubn0gJHt0aGlzLm50aHJlc2hvbGR9YCk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5zaGFrZUNvdW50ICUgMiA9PSAwKSB7XHJcbiAgICAgIHRoaXMuYm90dGxlLnNldFRleHR1cmUoYGJpdHRlcnMke3RoaXMuc2hha2VDb3VudCAvIDJ9YCk7XHJcbiAgICAgIFxyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuc2hha2VDb3VudCA+IDUgJiYgIXRoaXMudHJhbnNpdGlvbmluZykge1xyXG4gICAgICB0aGlzLnRyYW5zaXRpb25pbmcgPSB0cnVlO1xyXG4gICAgICBkb2N1bWVudC5jb29raWUgPSBgc2hha2U9MWA7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2NlbmUuc3RvcCgpO1xyXG4gICAgICAgIHRoaXMub25GaW5pc2goKTtcclxuICAgICAgfSwgNzUwKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRVc2VyQWdlbnQoKTogc3RyaW5nIHtcclxuICAgIC8vIChBKSBCUkVBSyBVU0VSIEFHRU5UIERPV05cclxuICAgIGNvbnNvbGUubG9nKG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKSk7XHJcbiAgICBjb25zdCBpc01vYmlsZSA9IG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5tYXRjaCgvbW9iaWxlL2kpLFxyXG4gICAgICBpc1RhYmxldCA9IG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5tYXRjaCgvdGFibGV0L2kpLFxyXG4gICAgICBpc0FuZHJvaWQgPSBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkubWF0Y2goL2FuZHJvaWQvaSksXHJcbiAgICAgIGlzaVBob25lID0gbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLm1hdGNoKC9pcGhvbmUvaSksXHJcbiAgICAgIGlzaVBhZCA9IG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5tYXRjaCgvaXBhZC9pKTtcclxuXHJcbiAgICAvLyAoQikgREVURUNURUQgREVWSUNFIFRZUEVcclxuICAgIGlmIChpc0FuZHJvaWQpIHtcclxuICAgICAgcmV0dXJuICdBbmRyb2lkJztcclxuICAgIH0gZWxzZSBpZiAoaXNpUGhvbmUgfHwgaXNpUGFkKSB7XHJcbiAgICAgIHJldHVybiAnQXBwbGUnO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuICdOb3BlJztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBjYWxsQXBwbGUoKTogdm9pZCB7XHJcbiAgICB0cnkge1xyXG4gICAgICBEZXZpY2VNb3Rpb25FdmVudC5yZXF1ZXN0UGVybWlzc2lvbigpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgdGhpcy50ZXh0MS5zZXRUZXh0KHJlc3BvbnNlKTtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignZGV2aWNlbW90aW9uJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhldmVudCk7XHJcbiAgICAgICAgICBpZiAoZXZlbnQuYWNjZWxlcmF0aW9uLnggPCB0aGlzLnRocmVzaG9sZCAqIC0xIHx8IGV2ZW50LmFjY2VsZXJhdGlvbi54ID4gdGhpcy50aHJlc2hvbGQpIHtcclxuICAgICAgICAgICAgdGhpcy5uKys7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKGV2ZW50LmFjY2VsZXJhdGlvbi55IDwgdGhpcy50aHJlc2hvbGQgKiAtMSB8fCBldmVudC5hY2NlbGVyYXRpb24ueSA+IHRoaXMudGhyZXNob2xkKSB7XHJcbiAgICAgICAgICAgIHRoaXMubisrO1xyXG4gICAgICAgICAgfSBlbHNlIGlmIChldmVudC5hY2NlbGVyYXRpb24ueiA8IHRoaXMudGhyZXNob2xkICogLTEgfHwgZXZlbnQuYWNjZWxlcmF0aW9uLnogPiB0aGlzLnRocmVzaG9sZCkge1xyXG4gICAgICAgICAgICB0aGlzLm4rKztcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAvLyB0ZXh0XHJcbiAgICAgICAgICBpZiAoZXZlbnQuYWNjZWxlcmF0aW9uLnggPCB0aGlzLm1pbngpIHtcclxuICAgICAgICAgICAgdGhpcy5taW54ID0gZXZlbnQuYWNjZWxlcmF0aW9uLng7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAoZXZlbnQuYWNjZWxlcmF0aW9uLnkgPCB0aGlzLm1pbnkpIHtcclxuICAgICAgICAgICAgdGhpcy5taW55ID0gZXZlbnQuYWNjZWxlcmF0aW9uLnk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAoZXZlbnQuYWNjZWxlcmF0aW9uLnogPCB0aGlzLm1pbnopIHtcclxuICAgICAgICAgICAgdGhpcy5taW56ID0gZXZlbnQuYWNjZWxlcmF0aW9uLno7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAoZXZlbnQuYWNjZWxlcmF0aW9uLnggPiB0aGlzLm1heHgpIHtcclxuICAgICAgICAgICAgdGhpcy5tYXh4ID0gZXZlbnQuYWNjZWxlcmF0aW9uLng7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAoZXZlbnQuYWNjZWxlcmF0aW9uLnkgPiB0aGlzLm1heHkpIHtcclxuICAgICAgICAgICAgdGhpcy5tYXh5ID0gZXZlbnQuYWNjZWxlcmF0aW9uLnk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAoZXZlbnQuYWNjZWxlcmF0aW9uLnogPiB0aGlzLm1heHopIHtcclxuICAgICAgICAgICAgdGhpcy5tYXh6ID0gZXZlbnQuYWNjZWxlcmF0aW9uLno7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB0aGlzLnRleHQxLnNldFRleHQoYHggJHt0aGlzLm1pbnh9ICR7dGhpcy5tYXh4fWApO1xyXG4gICAgICAgICAgdGhpcy50ZXh0Mi5zZXRUZXh0KGB5ICR7dGhpcy5taW55fSAke3RoaXMubWF4eX1gKTtcclxuICAgICAgICAgIHRoaXMudGV4dDMuc2V0VGV4dChgeiAke3RoaXMubWluen0gJHt0aGlzLm1heHp9YCk7XHJcbiAgICAgICAgICB0aGlzLnRleHQ0LnNldFRleHQoYG4gJHt0aGlzLm59ICR7dGhpcy5udGhyZXNob2xkfWApO1xyXG4gICAgICAgICAgdGhpcy50ZXh0NS5zZXRUZXh0KGBzaGFrZXMgJHt0aGlzLnNoYWtlQ291bnR9YCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXgpIHtcclxuICAgICAgY29uc29sZS5sb2coJ25vdCBpb3MnKTtcclxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2RldmljZW1vdGlvbicsIChldmVudCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGV2ZW50KTtcclxuICAgICAgICBpZiAoZXZlbnQuYWNjZWxlcmF0aW9uLnggPCB0aGlzLnRocmVzaG9sZCAqIC0xIHx8IGV2ZW50LmFjY2VsZXJhdGlvbi54ID4gdGhpcy50aHJlc2hvbGQpIHtcclxuICAgICAgICAgIHRoaXMubisrO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZXZlbnQuYWNjZWxlcmF0aW9uLnkgPCB0aGlzLnRocmVzaG9sZCAqIC0xIHx8IGV2ZW50LmFjY2VsZXJhdGlvbi55ID4gdGhpcy50aHJlc2hvbGQpIHtcclxuICAgICAgICAgIHRoaXMubisrO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZXZlbnQuYWNjZWxlcmF0aW9uLnogPCB0aGlzLnRocmVzaG9sZCAqIC0xIHx8IGV2ZW50LmFjY2VsZXJhdGlvbi56ID4gdGhpcy50aHJlc2hvbGQpIHtcclxuICAgICAgICAgIHRoaXMubisrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gdGV4dFxyXG4gICAgICAgIGlmIChldmVudC5hY2NlbGVyYXRpb24ueCA8IHRoaXMubWlueCkge1xyXG4gICAgICAgICAgdGhpcy5taW54ID0gZXZlbnQuYWNjZWxlcmF0aW9uLng7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChldmVudC5hY2NlbGVyYXRpb24ueSA8IHRoaXMubWlueSkge1xyXG4gICAgICAgICAgdGhpcy5taW55ID0gZXZlbnQuYWNjZWxlcmF0aW9uLnk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChldmVudC5hY2NlbGVyYXRpb24ueiA8IHRoaXMubWlueikge1xyXG4gICAgICAgICAgdGhpcy5taW56ID0gZXZlbnQuYWNjZWxlcmF0aW9uLno7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChldmVudC5hY2NlbGVyYXRpb24ueCA+IHRoaXMubWF4eCkge1xyXG4gICAgICAgICAgdGhpcy5tYXh4ID0gZXZlbnQuYWNjZWxlcmF0aW9uLng7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChldmVudC5hY2NlbGVyYXRpb24ueSA+IHRoaXMubWF4eSkge1xyXG4gICAgICAgICAgdGhpcy5tYXh5ID0gZXZlbnQuYWNjZWxlcmF0aW9uLnk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChldmVudC5hY2NlbGVyYXRpb24ueiA+IHRoaXMubWF4eikge1xyXG4gICAgICAgICAgdGhpcy5tYXh6ID0gZXZlbnQuYWNjZWxlcmF0aW9uLno7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudGV4dDEuc2V0VGV4dChgeCAke3RoaXMubWlueH0gJHt0aGlzLm1heHh9YCk7XHJcbiAgICAgICAgdGhpcy50ZXh0Mi5zZXRUZXh0KGB5ICR7dGhpcy5taW55fSAke3RoaXMubWF4eX1gKTtcclxuICAgICAgICB0aGlzLnRleHQzLnNldFRleHQoYHogJHt0aGlzLm1pbnp9ICR7dGhpcy5tYXh6fWApO1xyXG4gICAgICAgIHRoaXMudGV4dDQuc2V0VGV4dChgbiAke3RoaXMubn0gJHt0aGlzLm50aHJlc2hvbGR9YCk7XHJcbiAgICAgICAgdGhpcy50ZXh0NS5zZXRUZXh0KGBzaGFrZXMgJHt0aGlzLnNoYWtlQ291bnR9YCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuICBwdWJsaWMgY2FsbGJhY2soKTogdm9pZCB7XHJcbiAgICAvL3RoaXMudGV4dDEuc2V0VGV4dCgnQXNrZWQnKTtcclxuICAgIHRoaXMubWF4eCA9IDA7XHJcbiAgICB0aGlzLm1heHkgPSAwO1xyXG4gICAgdGhpcy5tYXh6ID0gMDtcclxuICAgIHRoaXMubWlueCA9IDA7XHJcbiAgICB0aGlzLm1pbnkgPSAwO1xyXG4gICAgdGhpcy5taW56ID0gMDtcclxuICAgIC8vaWYgKHdpbmRvdy5EZXZpY2VPcmllbnRhdGlvbkV2ZW50KSB7XHJcbiAgICAgIC8vd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2RldmljZW9yaWVudGF0aW9uJywgZGV2aWNlT3JpZW50YXRpb25IYW5kbGVyLCBmYWxzZSk7XHJcbiAgICAvL31cclxuXHJcbiAgIC8qaWYgKHdpbmRvdy5EZXZpY2VNb3Rpb25FdmVudCkge1xyXG4gICAgICB0aGlzLnRleHQyLnNldFRleHQoJ3llcycpO1xyXG4gICAgICBjb25zb2xlLmxvZygneWVzJyk7XHJcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdkZXZpY2Vtb3Rpb24nLCAoZXZlbnQpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhldmVudCk7XHJcbiAgICAgICAgaWYgKGV2ZW50LmFjY2VsZXJhdGlvbi54IDwgdGhpcy50aHJlc2hvbGQgKiAtMSB8fCBldmVudC5hY2NlbGVyYXRpb24ueCA+IHRoaXMudGhyZXNob2xkKSB7XHJcbiAgICAgICAgICB0aGlzLm4rKztcclxuICAgICAgICB9IGVsc2UgaWYgKGV2ZW50LmFjY2VsZXJhdGlvbi55IDwgdGhpcy50aHJlc2hvbGQgKiAtMSB8fCBldmVudC5hY2NlbGVyYXRpb24ueSA+IHRoaXMudGhyZXNob2xkKSB7XHJcbiAgICAgICAgICB0aGlzLm4rKztcclxuICAgICAgICB9IGVsc2UgaWYgKGV2ZW50LmFjY2VsZXJhdGlvbi56IDwgdGhpcy50aHJlc2hvbGQgKiAtMSB8fCBldmVudC5hY2NlbGVyYXRpb24ueiA+IHRoaXMudGhyZXNob2xkKSB7XHJcbiAgICAgICAgICB0aGlzLm4rKztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHRleHRcclxuICAgICAgICBpZiAoZXZlbnQuYWNjZWxlcmF0aW9uLnggPCB0aGlzLm1pbngpIHtcclxuICAgICAgICAgIHRoaXMubWlueCA9IGV2ZW50LmFjY2VsZXJhdGlvbi54O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZXZlbnQuYWNjZWxlcmF0aW9uLnkgPCB0aGlzLm1pbnkpIHtcclxuICAgICAgICAgIHRoaXMubWlueSA9IGV2ZW50LmFjY2VsZXJhdGlvbi55O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZXZlbnQuYWNjZWxlcmF0aW9uLnogPCB0aGlzLm1pbnopIHtcclxuICAgICAgICAgIHRoaXMubWlueiA9IGV2ZW50LmFjY2VsZXJhdGlvbi56O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZXZlbnQuYWNjZWxlcmF0aW9uLnggPiB0aGlzLm1heHgpIHtcclxuICAgICAgICAgIHRoaXMubWF4eCA9IGV2ZW50LmFjY2VsZXJhdGlvbi54O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZXZlbnQuYWNjZWxlcmF0aW9uLnkgPiB0aGlzLm1heHkpIHtcclxuICAgICAgICAgIHRoaXMubWF4eSA9IGV2ZW50LmFjY2VsZXJhdGlvbi55O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZXZlbnQuYWNjZWxlcmF0aW9uLnogPiB0aGlzLm1heHopIHtcclxuICAgICAgICAgIHRoaXMubWF4eiA9IGV2ZW50LmFjY2VsZXJhdGlvbi56O1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnRleHQxLnNldFRleHQoYHggJHt0aGlzLm1pbnh9ICR7dGhpcy5tYXh4fWApO1xyXG4gICAgICAgIC8vdGhpcy50ZXh0Mi5zZXRUZXh0KGB5ICR7dGhpcy5taW55fSAke3RoaXMubWF4eX1gKTtcclxuICAgICAgICB0aGlzLnRleHQzLnNldFRleHQoYHogJHt0aGlzLm1pbnp9ICR7dGhpcy5tYXh6fWApO1xyXG4gICAgICAgIHRoaXMudGV4dDQuc2V0VGV4dChgbiAke3RoaXMubn0gJHt0aGlzLm50aHJlc2hvbGR9YCk7XHJcbiAgICAgICAgdGhpcy50ZXh0NS5zZXRUZXh0KGBzaGFrZXMgJHt0aGlzLnNoYWtlQ291bnR9YCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy50ZXh0Mi5zZXRUZXh0KCdubycpO1xyXG4gICAgICBjb25zb2xlLmxvZygnbm8nKTtcclxuICAgIH0qL1xyXG4gICAgdGhpcy5jYWxsQXBwbGUoKTtcclxuICAgIC8vXHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBzaWduYWxSID0gcmVxdWlyZSgnQG1pY3Jvc29mdC9zaWduYWxyJyk7XHJcbmltcG9ydCB7IGdldEdhbWVXaWR0aCwgZ2V0R2FtZUhlaWdodCB9IGZyb20gJy4uL2hlbHBlcnMnO1xyXG5cclxuY29uc3Qgc2NlbmVDb25maWc6IFBoYXNlci5UeXBlcy5TY2VuZXMuU2V0dGluZ3NDb25maWcgPSB7XHJcbiAgYWN0aXZlOiBmYWxzZSxcclxuICB2aXNpYmxlOiBmYWxzZSxcclxuICBrZXk6ICdCb290JyxcclxufTtcclxuXHJcbi8qKlxyXG4gKiBUaGUgaW5pdGlhbCBzY2VuZSB0aGF0IGxvYWRzIGFsbCBuZWNlc3NhcnkgYXNzZXRzIHRvIHRoZSBnYW1lIGFuZCBkaXNwbGF5cyBhIGxvYWRpbmcgYmFyLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEJvb3RTY2VuZSBleHRlbmRzIFBoYXNlci5TY2VuZSB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcihzY2VuZUNvbmZpZyk7XHJcbiAgfVxyXG4gIHByaXZhdGUgaHViQ29ubmVjdGlvbjogc2lnbmFsUi5IdWJDb25uZWN0aW9uO1xyXG4gIHB1YmxpYyBhc3luYyBwcmVsb2FkKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgZG9jdW1lbnQuY29va2llID0gYG9yYW5nZT0wYDtcclxuICAgIGRvY3VtZW50LmNvb2tpZSA9IGBib3VyYm9uPTBgO1xyXG4gICAgZG9jdW1lbnQuY29va2llID0gYGljZT0wYDtcclxuICAgIGRvY3VtZW50LmNvb2tpZSA9IGB2ZXJtb3V0aD0wYDtcclxuICAgIGNvbnN0IGhhbGZXaWR0aCA9IGdldEdhbWVXaWR0aCh0aGlzKSAqIDAuNTtcclxuICAgIGNvbnN0IGhhbGZIZWlnaHQgPSBnZXRHYW1lSGVpZ2h0KHRoaXMpICogMC41O1xyXG5cclxuICAgIGNvbnN0IHByb2dyZXNzQmFySGVpZ2h0ID0gMTAwO1xyXG4gICAgY29uc3QgcHJvZ3Jlc3NCYXJXaWR0aCA9IDQwMDtcclxuXHJcbiAgICBjb25zdCBwcm9ncmVzc0JhckNvbnRhaW5lciA9IHRoaXMuYWRkLnJlY3RhbmdsZShcclxuICAgICAgaGFsZldpZHRoLFxyXG4gICAgICBoYWxmSGVpZ2h0LFxyXG4gICAgICBwcm9ncmVzc0JhcldpZHRoLFxyXG4gICAgICBwcm9ncmVzc0JhckhlaWdodCxcclxuICAgICAgMHgwMDAwMDAsXHJcbiAgICApO1xyXG4gICAgY29uc3QgcHJvZ3Jlc3NCYXIgPSB0aGlzLmFkZC5yZWN0YW5nbGUoXHJcbiAgICAgIGhhbGZXaWR0aCArIDIwIC0gcHJvZ3Jlc3NCYXJDb250YWluZXIud2lkdGggKiAwLjUsXHJcbiAgICAgIGhhbGZIZWlnaHQsXHJcbiAgICAgIDEwLFxyXG4gICAgICBwcm9ncmVzc0JhckhlaWdodCAtIDIwLFxyXG4gICAgICAweDg4ODg4OCxcclxuICAgICk7XHJcblxyXG4gICAgY29uc3QgbG9hZGluZ1RleHQgPSB0aGlzLmFkZC50ZXh0KGhhbGZXaWR0aCAtIDc1LCBoYWxmSGVpZ2h0IC0gMTAwLCAnTG9hZGluZy4uLicpLnNldEZvbnRTaXplKDI0KTtcclxuICAgIGNvbnN0IHBlcmNlbnRUZXh0ID0gdGhpcy5hZGQudGV4dChoYWxmV2lkdGggLSAyNSwgaGFsZkhlaWdodCwgJzAlJykuc2V0Rm9udFNpemUoMjQpO1xyXG4gICAgY29uc3QgYXNzZXRUZXh0ID0gdGhpcy5hZGQudGV4dChoYWxmV2lkdGggLSAyNSwgaGFsZkhlaWdodCArIDEwMCwgJycpLnNldEZvbnRTaXplKDI0KTtcclxuXHJcbiAgICB0aGlzLmxvYWQub24oJ3Byb2dyZXNzJywgKHZhbHVlKSA9PiB7XHJcbiAgICAgIHByb2dyZXNzQmFyLndpZHRoID0gKHByb2dyZXNzQmFyV2lkdGggLSAzMCkgKiB2YWx1ZTtcclxuXHJcbiAgICAgIGNvbnN0IHBlcmNlbnQgPSB2YWx1ZSAqIDEwMDtcclxuICAgICAgcGVyY2VudFRleHQuc2V0VGV4dChgJHtwZXJjZW50fSVgKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMubG9hZC5vbignZmlsZXByb2dyZXNzJywgKGZpbGUpID0+IHtcclxuICAgICAgYXNzZXRUZXh0LnNldFRleHQoZmlsZS5rZXkpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5sb2FkLm9uKCdjb21wbGV0ZScsICgpID0+IHtcclxuICAgICAgbG9hZGluZ1RleHQuZGVzdHJveSgpO1xyXG4gICAgICBwZXJjZW50VGV4dC5kZXN0cm95KCk7XHJcbiAgICAgIGFzc2V0VGV4dC5kZXN0cm95KCk7XHJcbiAgICAgIHByb2dyZXNzQmFyLmRlc3Ryb3koKTtcclxuICAgICAgcHJvZ3Jlc3NCYXJDb250YWluZXIuZGVzdHJveSgpO1xyXG5cclxuICAgICAgdGhpcy5zY2VuZS5zdGFydCgnUGVybWlzc2lvbnMnLCB7aHViQ29ubmVjdGlvbjogdGhpcy5odWJDb25uZWN0aW9ufSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmh1YkNvbm5lY3Rpb24gPSBuZXcgc2lnbmFsUi5IdWJDb25uZWN0aW9uQnVpbGRlcigpXHJcbiAgICAud2l0aFVybChgaHR0cHM6Ly9zY2hpdHRhbGtpbi5henVyZXdlYnNpdGVzLm5ldC93aGl0ZXJ1c2hpbi9gKVxyXG4gICAgLmNvbmZpZ3VyZUxvZ2dpbmcoc2lnbmFsUi5Mb2dMZXZlbC5JbmZvcm1hdGlvbilcclxuICAgIC53aXRoQXV0b21hdGljUmVjb25uZWN0KClcclxuICAgIC5idWlsZCgpO1xyXG4gICAgdGhpcy5odWJDb25uZWN0aW9uLnN0YXJ0KCk7XHJcbiAgICBjb25zb2xlLmxvZyhcImNvbm5lY3Rpb24gc3RhcnRlZFwiKVxyXG4gICAgdGhpcy5sb2FkQXNzZXRzKCk7XHJcbiAgICBjb25zb2xlLmxvZyhcImxvYWRlZFwiKVxyXG4gICAgXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBBbGwgYXNzZXRzIHRoYXQgbmVlZCB0byBiZSBsb2FkZWQgYnkgdGhlIGdhbWUgKHNwcml0ZXMsIGltYWdlcywgYW5pbWF0aW9ucywgdGlsZXMsIG11c2ljLCBldGMpXHJcbiAgICogc2hvdWxkIGJlIGFkZGVkIHRvIHRoaXMgbWV0aG9kLiBPbmNlIGxvYWRlZCBpbiwgdGhlIGxvYWRlciB3aWxsIGtlZXAgdHJhY2sgb2YgdGhlbSwgaW5kZXBlZGVudCBvZiB3aGljaCBzY2VuZVxyXG4gICAqIGlzIGN1cnJlbnRseSBhY3RpdmUsIHNvIHRoZXkgY2FuIGJlIGFjY2Vzc2VkIGFueXdoZXJlLlxyXG4gICAqL1xyXG4gIHByaXZhdGUgbG9hZEFzc2V0cygpIHtcclxuICAgIC8vIExvYWQgc2FtcGxlIGFzc2V0c1xyXG5cclxuICAgIC8vIFNvdXJjZTogT3BlbiBHYW1lIEFydFxyXG4gICAgdGhpcy5sb2FkLmltYWdlKCd2ZXJtb3V0aHRvcCcsICdhc3NldHMvc3ByaXRlcy92ZXJtb3V0aHRvcDIucG5nJyk7XHJcbiAgICB0aGlzLmxvYWQuaW1hZ2UoJ3Zlcm1vdXRodG9wb25seScsICdhc3NldHMvc3ByaXRlcy92ZXJtb3V0aHRvcG9ubHkyLnBuZycpO1xyXG4gICAgdGhpcy5sb2FkLmltYWdlKCd2ZXJtb3V0aCcsICdhc3NldHMvc3ByaXRlcy92ZXJtb3V0aC5wbmcnKTtcclxuICAgIHRoaXMubG9hZC5pbWFnZSgnVmVybW91dGgnLCAnYXNzZXRzL3Nwcml0ZXMvdmVybW91dGgucG5nJyk7XHJcbiAgICB0aGlzLmxvYWQuaW1hZ2UoJ2JvdXJib250b3AnLCAnYXNzZXRzL3Nwcml0ZXMvYm91cmJvbnRvcDIucG5nJyk7XHJcbiAgICB0aGlzLmxvYWQuaW1hZ2UoJ2JvdXJib250b3Bvbmx5JywgJ2Fzc2V0cy9zcHJpdGVzL2JvdXJib250b3Bvbmx5LnBuZycpO1xyXG4gICAgdGhpcy5sb2FkLmltYWdlKCdib3VyYm9uJywgJ2Fzc2V0cy9zcHJpdGVzL2JvdXJib24ucG5nJyk7XHJcbiAgICB0aGlzLmxvYWQuaW1hZ2UoJ0JvdXJib24nLCAnYXNzZXRzL3Nwcml0ZXMvYm91cmJvbi5wbmcnKTtcclxuICAgIHRoaXMubG9hZC5pbWFnZSgnVm9ka2EnLCAnYXNzZXRzL3Nwcml0ZXMvdm9ka2EucG5nJyk7XHJcbiAgICB0aGlzLmxvYWQuaW1hZ2UoJ0dpbicsICdhc3NldHMvc3ByaXRlcy9naW4ucG5nJyk7XHJcbiAgICB0aGlzLmxvYWQuaW1hZ2UoJ1J1bScsICdhc3NldHMvc3ByaXRlcy9ydW0ucG5nJyk7XHJcbiAgICB0aGlzLmxvYWQuaW1hZ2UoJ1RlcXVpbGEnLCAnYXNzZXRzL3Nwcml0ZXMvdGVxdWlsYS5wbmcnKTtcclxuICAgIHRoaXMubG9hZC5pbWFnZSgnQ29rZScsICdhc3NldHMvc3ByaXRlcy9jb2tlLnBuZycpO1xyXG4gICAgdGhpcy5sb2FkLmltYWdlKCdUcmlwbGUgU2VjJywgJ2Fzc2V0cy9zcHJpdGVzL3RyaXBsZXNlYy5wbmcnKTtcclxuICAgIHRoaXMubG9hZC5pbWFnZSgnZW1wdHlnbGFzcycsICdhc3NldHMvc3ByaXRlcy9lbXB0eWdsYXNzLnBuZycpO1xyXG4gICAgdGhpcy5sb2FkLmltYWdlKCdtdWRkbGVyZ2xhc3MnLCAnYXNzZXRzL3Nwcml0ZXMvbXVkZGxlcmdsYXNzLnBuZycpO1xyXG4gICAgdGhpcy5sb2FkLmltYWdlKCdiaXR0ZXJzZ2xhc3MnLCAnYXNzZXRzL3Nwcml0ZXMvYml0dGVyc2dsYXNzLnBuZycpO1xyXG4gICAgdGhpcy5sb2FkLmltYWdlKCdzaGFrZW5nbGFzcycsICdhc3NldHMvc3ByaXRlcy9zaGFrZW5nbGFzcy5wbmcnKTtcclxuICAgIHRoaXMubG9hZC5pbWFnZSgnZmlsbGVkZ2xhc3MxJywgJ2Fzc2V0cy9zcHJpdGVzL2ZpbGxlZGdsYXNzMS5wbmcnKTtcclxuICAgIHRoaXMubG9hZC5pbWFnZSgnZmlsbGVkZ2xhc3MyJywgJ2Fzc2V0cy9zcHJpdGVzL2ZpbGxlZGdsYXNzMi5wbmcnKTtcclxuICAgIHRoaXMubG9hZC5pbWFnZSgnZmlsbGVkZ2xhc3MzJywgJ2Fzc2V0cy9zcHJpdGVzL2ZpbGxlZGdsYXNzMy5wbmcnKTtcclxuICAgIHRoaXMubG9hZC5pbWFnZSgnZmlsbGVkZ2xhc3M0JywgJ2Fzc2V0cy9zcHJpdGVzL2ZpbGxlZGdsYXNzNC5wbmcnKTtcclxuICAgIHRoaXMubG9hZC5pbWFnZSgnaWNlJywgJ2Fzc2V0cy9zcHJpdGVzL2ljZS5wbmcnKTtcclxuICAgIHRoaXMubG9hZC5pbWFnZSgnSWNlIEN1YmUnLCAnYXNzZXRzL3Nwcml0ZXMvaWNlaWNvbi5wbmcnKTtcclxuICAgIHRoaXMubG9hZC5pbWFnZSgnaWNlMScsICdhc3NldHMvc3ByaXRlcy9pY2UxLnBuZycpO1xyXG4gICAgdGhpcy5sb2FkLmltYWdlKCdpY2UyJywgJ2Fzc2V0cy9zcHJpdGVzL2ljZTIucG5nJyk7XHJcbiAgICB0aGlzLmxvYWQuaW1hZ2UoJ2ljZTMnLCAnYXNzZXRzL3Nwcml0ZXMvaWNlMy5wbmcnKTtcclxuICAgIHRoaXMubG9hZC5pbWFnZSgnaWNlNCcsICdhc3NldHMvc3ByaXRlcy9pY2U0LnBuZycpO1xyXG4gICAgdGhpcy5sb2FkLmltYWdlKCdpY2U1JywgJ2Fzc2V0cy9zcHJpdGVzL2ljZTUucG5nJyk7XHJcbiAgICB0aGlzLmxvYWQuaW1hZ2UoJ2ljZWdsYXNzJywgJ2Fzc2V0cy9zcHJpdGVzL2ljZWdsYXNzLnBuZycpO1xyXG4gICAgdGhpcy5sb2FkLmltYWdlKCdvcmFuZ2UnLCAnYXNzZXRzL3Nwcml0ZXMvb3JhbmdlLnBuZycpO1xyXG4gICAgdGhpcy5sb2FkLmltYWdlKCdPcmFuZ2UgUGVlbCcsICdhc3NldHMvc3ByaXRlcy9vcmFuZ2UucG5nJyk7XHJcbiAgICB0aGlzLmxvYWQuaW1hZ2UoJ29yYW5nZWluc2lkZScsICdhc3NldHMvc3ByaXRlcy9vcmFuZ2VJbnNpZGUucG5nJyk7XHJcbiAgICB0aGlzLmxvYWQuaW1hZ2UoJ29yYW5nZXdlZGdlZ2xhc3MnLCAnYXNzZXRzL3Nwcml0ZXMvb3Jhbmdld2VkZ2VnbGFzcy5wbmcnKTtcclxuICAgIHRoaXMubG9hZC5pbWFnZSgnY2FuZWxsZWtuaWZlJywgJ2Fzc2V0cy9zcHJpdGVzL2NhbmVsbGVrbmlmZS5wbmcnKTtcclxuICAgIHRoaXMubG9hZC5pbWFnZSgnc2hha2VyJywgJ2Fzc2V0cy9zcHJpdGVzL3NoYWtlci5wbmcnKTtcclxuICAgIHRoaXMubG9hZC5pbWFnZSgnU2hha2UgRHJpbmsnLCAnYXNzZXRzL3Nwcml0ZXMvc2hha2VyLnBuZycpO1xyXG4gICAgdGhpcy5sb2FkLmltYWdlKCdzaGFrZXIwJywgJ2Fzc2V0cy9zcHJpdGVzL3NoYWtlci5wbmcnKTtcclxuICAgIHRoaXMubG9hZC5pbWFnZSgnc2hha2VyMScsICdhc3NldHMvc3ByaXRlcy9zaGFrZXIxLnBuZycpO1xyXG4gICAgdGhpcy5sb2FkLmltYWdlKCdzaGFrZXIyJywgJ2Fzc2V0cy9zcHJpdGVzL3NoYWtlcjIucG5nJyk7XHJcbiAgICB0aGlzLmxvYWQuaW1hZ2UoJ3NoYWtlcjMnLCAnYXNzZXRzL3Nwcml0ZXMvc2hha2VyMy5wbmcnKTtcclxuICAgIHRoaXMubG9hZC5pbWFnZSgnQW5nb3N0dXJhIEJpdHRlcnMnLCAnYXNzZXRzL3Nwcml0ZXMvYml0dGVycy5wbmcnKTtcclxuICAgIHRoaXMubG9hZC5pbWFnZSgnYml0dGVycycsICdhc3NldHMvc3ByaXRlcy9iaXR0ZXJzLnBuZycpO1xyXG4gICAgdGhpcy5sb2FkLmltYWdlKCdiaXR0ZXJzMCcsICdhc3NldHMvc3ByaXRlcy9iaXR0ZXJzLnBuZycpO1xyXG4gICAgdGhpcy5sb2FkLmltYWdlKCdiaXR0ZXJzMScsICdhc3NldHMvc3ByaXRlcy9iaXR0ZXJzMS5wbmcnKTtcclxuICAgIHRoaXMubG9hZC5pbWFnZSgnYml0dGVyczInLCAnYXNzZXRzL3Nwcml0ZXMvYml0dGVyczIucG5nJyk7XHJcbiAgICB0aGlzLmxvYWQuaW1hZ2UoJ2JpdHRlcnMzJywgJ2Fzc2V0cy9zcHJpdGVzL2JpdHRlcnMzLnBuZycpO1xyXG4gICAgdGhpcy5sb2FkLmltYWdlKCdtdWRkbGVyJywgJ2Fzc2V0cy9zcHJpdGVzL211ZGRsZXIucG5nJyk7XHJcbiAgICB0aGlzLmxvYWQuaW1hZ2UoJ011ZGRsZSBEcmluaycsICdhc3NldHMvc3ByaXRlcy9tdWRkbGVyLnBuZycpO1xyXG4gICAgdGhpcy5sb2FkLmltYWdlKCdqdWljZXInLCAnYXNzZXRzL3Nwcml0ZXMvanVpY2VyLnBuZycpO1xyXG4gICAgdGhpcy5sb2FkLmltYWdlKCdMZW1vbiBKdWljZScsICdhc3NldHMvc3ByaXRlcy9qdWljZXJsZW1vbnRyaWdnZXIucG5nJyk7XHJcbiAgICB0aGlzLmxvYWQuaW1hZ2UoJ0xpbWUgSnVpY2UnLCAnYXNzZXRzL3Nwcml0ZXMvanVpY2VybGltZXRyaWdnZXIucG5nJyk7XHJcbiAgICB0aGlzLmxvYWQuaW1hZ2UoJ09yYW5nZSBKdWljZScsICdhc3NldHMvc3ByaXRlcy9qdWljZXJvcmFuZ2V0cmlnZ2VyLnBuZycpO1xyXG4gICAgdGhpcy5sb2FkLmltYWdlKCdqdWljZXJib3R0b20nLCAnYXNzZXRzL3Nwcml0ZXMvanVpY2VyYm90dG9tLnBuZycpO1xyXG4gICAgdGhpcy5sb2FkLmltYWdlKCdqdWljZXJ0b3AnLCAnYXNzZXRzL3Nwcml0ZXMvanVpY2VydG9wLnBuZycpO1xyXG4gICAgdGhpcy5sb2FkLmltYWdlKCdPcmFuZ2UgSnVpY2UgMicsICdhc3NldHMvc3ByaXRlcy9qdWljZXJvcmFuZ2UucG5nJyk7XHJcbiAgICB0aGlzLmxvYWQuaW1hZ2UoJ0xpbWUgSnVpY2UgMicsICdhc3NldHMvc3ByaXRlcy9qdWljZXJsaW1lLnBuZycpO1xyXG4gICAgdGhpcy5sb2FkLmltYWdlKCdMZW1vbiBKdWljZSAyJywgJ2Fzc2V0cy9zcHJpdGVzL2p1aWNlcmxlbW9uLnBuZycpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBJbnB1dCwgR2FtZU9iamVjdHMgfSBmcm9tICdwaGFzZXInO1xyXG5pbXBvcnQgeyBnZXRHYW1lV2lkdGgsIGdldEdhbWVIZWlnaHQsIGRyaW5rVG9Db2xvck1hcCB9IGZyb20gJy4uL2hlbHBlcnMnO1xyXG5cclxuY29uc3Qgc2NlbmVDb25maWc6IFBoYXNlci5UeXBlcy5TY2VuZXMuU2V0dGluZ3NDb25maWcgPSB7XHJcbiAgYWN0aXZlOiBmYWxzZSxcclxuICB2aXNpYmxlOiBmYWxzZSxcclxuICBrZXk6ICdCb3VyYm9uJyxcclxufTtcclxuY2xhc3MgR2FtZVNjZW5lQXJndW1lbnRzIHtcclxuICBwdWJsaWMgb25GaW5pc2g6IEZ1bmN0aW9uO1xyXG59XHJcbmV4cG9ydCBjbGFzcyBCb3VyYm9uU2NlbmUgZXh0ZW5kcyBQaGFzZXIuU2NlbmUge1xyXG4gIHB1YmxpYyBzcGVlZCA9IDIwMDtcclxuXHJcbiAgcHJpdmF0ZSBjdXJzb3JLZXlzOiBQaGFzZXIuVHlwZXMuSW5wdXQuS2V5Ym9hcmQuQ3Vyc29yS2V5cztcclxuICBwcml2YXRlIGJvdXJib25Ub3A6IFBoYXNlci5HYW1lT2JqZWN0cy5TcHJpdGU7XHJcbiAgcHJpdmF0ZSBib3VyYm9uVG9wT25seTogUGhhc2VyLkdhbWVPYmplY3RzLlNwcml0ZTtcclxuXHJcbiAgcHJpdmF0ZSBjb250ZW50czogc3RyaW5nW10gPSBbXTtcclxuICBwcml2YXRlIGdsYXNzRmlsbGVyczogUGhhc2VyLkdhbWVPYmplY3RzLlNwcml0ZVtdID0gW107XHJcblxyXG4gIHByaXZhdGUgdHJhbnNpdGlvbmluZyA9IGZhbHNlO1xyXG4gIHB1YmxpYyBvbkZpbmlzaDogRnVuY3Rpb247XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcihzY2VuZUNvbmZpZyk7XHJcbiAgfVxyXG4gIHB1YmxpYyB0ZXh0MTogUGhhc2VyLkdhbWVPYmplY3RzLlRleHQ7XHJcbiAgcHVibGljIHRleHQyOiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dDtcclxuICBwdWJsaWMgdGV4dDM6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0O1xyXG4gIHB1YmxpYyB0ZXh0NDogUGhhc2VyLkdhbWVPYmplY3RzLlRleHQ7XHJcbiAgcHVibGljIHRleHQ1OiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dDtcclxuICBwdWJsaWMgdW5zY3Jld2VkID0gMDtcclxuICBwdWJsaWMgbGlkUmVjdDogUGhhc2VyLkdhbWVPYmplY3RzLlJlY3RhbmdsZTtcclxuICBwcml2YXRlIGhlbGQgPSBmYWxzZTtcclxuXHJcbiAgcHVibGljIGluaXQoZGF0YTogR2FtZVNjZW5lQXJndW1lbnRzKXtcclxuICAgIHRoaXMub25GaW5pc2ggPSBkYXRhLm9uRmluaXNoO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNyZWF0ZSgpOiB2b2lkIHtcclxuICAgIGNvbnNvbGUubG9nKCdCb3VyYm9uJyk7XHJcbiAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IHRoaXMuc3lzLmdhbWUuY2FudmFzO1xyXG4gICAgdGhpcy51bnNjcmV3ZWQgPSAwO1xyXG4gICAgdGhpcy5oZWxkID0gZmFsc2U7XHJcbiAgICB0aGlzLnRyYW5zaXRpb25pbmcgPSBmYWxzZTtcclxuICAgIC8vIEFkZCBhIHBsYXllciBzcHJpdGUgdGhhdCBjYW4gYmUgbW92ZWQgYXJvdW5kLiBQbGFjZSBoaW0gaW4gdGhlIG1pZGRsZSBvZiB0aGUgc2NyZWVuLlxyXG4gICAgdGhpcy5ib3VyYm9uVG9wID0gdGhpcy5hZGQuc3ByaXRlKHdpZHRoIC8gMiwgaGVpZ2h0IC8gMiArIDMwMCwgJ2JvdXJib250b3AnKTtcclxuICAgIHRoaXMuYm91cmJvblRvcE9ubHkgPSB0aGlzLmFkZC5zcHJpdGUod2lkdGggLyAyLCBoZWlnaHQgLyAyICsgMzAwLCAnYm91cmJvbnRvcG9ubHknKTtcclxuXHJcbiAgICAvL2xldCByZWN0ID0gbmV3IFBoYXNlci5HYW1lT2JqZWN0cy5SZWN0YW5nbGUod2lkdGggLyAyLCBoZWlnaHQgKiAwLjA2OTAzMjI1OCwgMCwgMCk7XHJcbiAgICB0aGlzLmxpZFJlY3QgPSB0aGlzLmFkZFxyXG4gICAgICAucmVjdGFuZ2xlKFxyXG4gICAgICAgIHdpZHRoIC8gMixcclxuICAgICAgICB0aGlzLmJvdXJib25Ub3BPbmx5LnkgLSB0aGlzLmJvdXJib25Ub3BPbmx5LmRpc3BsYXlIZWlnaHQgKiAwLjQzMDk2Nzc0MixcclxuICAgICAgICB0aGlzLmJvdXJib25Ub3BPbmx5LmRpc3BsYXlXaWR0aCAvIDMsXHJcbiAgICAgICAgdGhpcy5ib3VyYm9uVG9wT25seS5kaXNwbGF5SGVpZ2h0IC8gNyxcclxuICAgICAgICAweGZmZmZmZixcclxuICAgICAgKVxyXG4gICAgICAuc2V0QWxwaGEoMC4yNSlcclxuICAgICAgLnNldERlcHRoKDEpO1xyXG5cclxuICAgIHRoaXMuaW5wdXQub24oJ3BvaW50ZXJkb3duJywgKCkgPT4ge1xyXG4gICAgICBpZiAoXHJcbiAgICAgICAgdGhpcy5saWRSZWN0LmdldEJvdW5kcygpLmNvbnRhaW5zKHRoaXMuaW5wdXQuYWN0aXZlUG9pbnRlci54LCB0aGlzLmlucHV0LmFjdGl2ZVBvaW50ZXIueSkgJiZcclxuICAgICAgICB0aGlzLmJvdXJib25Ub3BPbmx5LnkgPT0gdGhpcy5ib3VyYm9uVG9wLnlcclxuICAgICAgKSB7XHJcbiAgICAgICAgdGhpcy50ZXh0MS5zZXRUZXh0KGBjbGlja2VkIGJveGApO1xyXG4gICAgICAgIHRoaXMuaGVsZCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5ib3VyYm9uVG9wT25seS55IC09IDE1O1xyXG4gICAgICAgIHRoaXMubGlkUmVjdC55IC09IDE1O1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmlucHV0Lm9uKCdwb2ludGVydXAnLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMuaGVsZCA9IGZhbHNlO1xyXG4gICAgICBpZiAodGhpcy5saWRSZWN0LnkgKyB0aGlzLmxpZFJlY3QuZGlzcGxheVdpZHRoIC8gMiA+IHRoaXMuYm91cmJvblRvcC55IC0gdGhpcy5ib3VyYm9uVG9wLmRpc3BsYXlIZWlnaHQgLyAyKSB7XHJcbiAgICAgICAgdGhpcy5saWRSZWN0LnkgPSB0aGlzLmJvdXJib25Ub3AueSAtIHRoaXMuYm91cmJvblRvcC5kaXNwbGF5SGVpZ2h0ICogMC40MzA5Njc3NDI7XHJcbiAgICAgICAgdGhpcy5ib3VyYm9uVG9wT25seS55ID0gdGhpcy5ib3VyYm9uVG9wLnk7XHJcbiAgICAgICAgdGhpcy51bnNjcmV3ZWQgPSAwO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLnRleHQxLnNldFRleHQoYM64OiAke3RoaXMuaW5wdXQuYWN0aXZlUG9pbnRlci5nZXRBbmdsZSgpfWApO1xyXG4gICAgICB0aGlzLnRleHQyLnNldFRleHQoYHg6ICR7dGhpcy5pbnB1dC5hY3RpdmVQb2ludGVyLmdldERpc3RhbmNlWCgpfWApO1xyXG4gICAgICB0aGlzLnRleHQzLnNldFRleHQoYHk6ICR7dGhpcy5pbnB1dC5hY3RpdmVQb2ludGVyLmdldERpc3RhbmNlWSgpfWApO1xyXG4gICAgICB0aGlzLnRleHQ0LnNldFRleHQoYGQ6ICR7dGhpcy5pbnB1dC5hY3RpdmVQb2ludGVyLmdldERpc3RhbmNlKCl9YCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLnRleHQxID0gdGhpcy5hZGQudGV4dCgxMCwgMTAsICcnLCB7IGNvbG9yOiAnIzAwZmYwMCcgfSk7XHJcbiAgICB0aGlzLnRleHQyID0gdGhpcy5hZGQudGV4dCgxMCwgMjUsICcnLCB7IGNvbG9yOiAnIzAwZmYwMCcgfSk7XHJcbiAgICB0aGlzLnRleHQzID0gdGhpcy5hZGQudGV4dCgxMCwgNDAsICcnLCB7IGNvbG9yOiAnIzAwZmYwMCcgfSk7XHJcbiAgICB0aGlzLnRleHQ0ID0gdGhpcy5hZGQudGV4dCgxMCwgNTUsICcnLCB7IGNvbG9yOiAnIzAwZmYwMCcgfSk7XHJcbiAgICB0aGlzLnRleHQ1ID0gdGhpcy5hZGQudGV4dCgxMCwgNzAsICcnLCB7IGNvbG9yOiAnIzAwZmYwMCcgfSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdXBkYXRlKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuaGVsZCkge1xyXG4gICAgICBpZiAodGhpcy5pbnB1dC5hY3RpdmVQb2ludGVyLmdldEFuZ2xlKCkgPCAwICYmIHRoaXMuaW5wdXQuYWN0aXZlUG9pbnRlci5nZXREaXN0YW5jZVkoKSA+IDUwKSB7XHJcbiAgICAgICAgdGhpcy51bnNjcmV3ZWQgKz0gMTtcclxuICAgICAgICBpZiAodGhpcy51bnNjcmV3ZWQgJSAyID09IDEpIHtcclxuICAgICAgICAgIHRoaXMuYm91cmJvblRvcE9ubHkueSAtPSAxO1xyXG4gICAgICAgICAgdGhpcy5saWRSZWN0LnkgLT0gMTtcclxuICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgdGhpcy5saWRSZWN0LnkgKyB0aGlzLmxpZFJlY3QuZGlzcGxheVdpZHRoIC8gMiA8IHRoaXMuYm91cmJvblRvcC55IC0gdGhpcy5ib3VyYm9uVG9wLmRpc3BsYXlIZWlnaHQgLyAyICYmXHJcbiAgICAgICAgICAgICF0aGlzLnRyYW5zaXRpb25pbmdcclxuICAgICAgICAgICkge1xyXG4gICAgICAgICAgICB0aGlzLnRyYW5zaXRpb25pbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICB0aGlzLnNjZW5lLnN0b3AoKTtcclxuICAgICAgICAgICAgICB0aGlzLnNjZW5lLmxhdW5jaCgnUG91cicsIHsgQm90dGxlU3ByaXRlTmFtZTogJ0JvdXJib24nLCBvbkZpbmlzaDogdGhpcy5vbkZpbmlzaCB9KTtcclxuICAgICAgICAgICAgfSwgNTAwKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHNpZ25hbFIgPSByZXF1aXJlKCdAbWljcm9zb2Z0L3NpZ25hbHInKTtcclxuaW1wb3J0IHsgTWVudUJ1dHRvbiB9IGZyb20gJy4uL3VpL21lbnUtYnV0dG9uJztcclxuaW1wb3J0ICogYXMgcXVlcnlzdHJpbmcgZnJvbSBcInF1ZXJ5LXN0cmluZ1wiO1xyXG5cclxuY29uc3Qgc2NlbmVDb25maWc6IFBoYXNlci5UeXBlcy5TY2VuZXMuU2V0dGluZ3NDb25maWcgPSB7XHJcbiAgYWN0aXZlOiBmYWxzZSxcclxuICB2aXNpYmxlOiBmYWxzZSxcclxuICBrZXk6ICdFdmVyeW9uZUluJyxcclxufTtcclxuY2xhc3MgR2FtZVNjZW5lQXJndW1lbnRzIHtcclxuICBwdWJsaWMgaHViQ29ubmVjdGlvbjogc2lnbmFsUi5IdWJDb25uZWN0aW9uO1xyXG59XHJcbi8qKlxyXG4gKiBUaGUgaW5pdGlhbCBzY2VuZSB0aGF0IHN0YXJ0cywgc2hvd3MgdGhlIHNwbGFzaCBzY3JlZW5zLCBhbmQgbG9hZHMgdGhlIG5lY2Vzc2FyeSBhc3NldHMuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgRXZlcnlvbmVJblNjZW5lIGV4dGVuZHMgUGhhc2VyLlNjZW5lIHtcclxuICBwcml2YXRlIGh1YkNvbm5lY3Rpb246IHNpZ25hbFIuSHViQ29ubmVjdGlvbjtcclxuICBwcml2YXRlIGluQ291bnQ6IG51bWJlcjtcclxuICBwcml2YXRlIHBsYXllckRpc3BsYXk6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0O1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoc2NlbmVDb25maWcpO1xyXG4gIH1cclxuICBwdWJsaWMgaW5pdChkYXRhOiBHYW1lU2NlbmVBcmd1bWVudHMpOiB2b2lkIHtcclxuICAgIHRoaXMuaHViQ29ubmVjdGlvbiA9IGRhdGEuaHViQ29ubmVjdGlvbjtcclxuICB9XHJcbiAgcHVibGljIGNyZWF0ZSgpOiB2b2lkIHtcclxuICAgIGNvbnNvbGUubG9nKCdSZWFkeSB1cCBtZW51Jyk7XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLmh1YkNvbm5lY3Rpb24pO1xyXG4gICAgdGhpcy5pbkNvdW50ID0gMDtcclxuICAgIC8vdGhpcy5odWJDb25uZWN0aW9uLmludm9rZSgnUmVnaXN0ZXInLCBxdWVyeXN0cmluZy5wYXJzZSh3aW5kb3cubG9jYXRpb24uc2VhcmNoKVtcInJvb21cIl0pO1xyXG4gICAgdGhpcy5odWJDb25uZWN0aW9uLm9uKCdBc3NpZ24nLCAoY3VwOiBudW1iZXIsIGFjdGlvbnM6IG51bWJlcltdLCBwbGF5ZXJjb3VudDogbnVtYmVyLCByb3VuZDogbnVtYmVyKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGBjdXA6ICR7Y3VwfSBhY3Rpb25zOiAke2FjdGlvbnN9IHBsYXllcmNvdW50OiAke3BsYXllcmNvdW50fSByb3VuZCBudW1iZXI6ICR7cm91bmR9YCk7XHJcbiAgICAgIHZhciBpdGVtID0ge1xyXG4gICAgICAgIHBsYXllcmNvdW50OiBwbGF5ZXJjb3VudCxcclxuICAgICAgICByb3VuZE51bWJlcjogcm91bmQsXHJcbiAgICAgICAgY3VwTnVtYmVyOiBjdXAsXHJcbiAgICAgICAgYWN0aW9uczogYWN0aW9uc1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuaHViQ29ubmVjdGlvbi5vZmYoJ0Fzc2lnbicpO1xyXG4gICAgICB0aGlzLnNjZW5lLnN0YXJ0KCdHYW1lJywge2h1YkNvbm5lY3Rpb246IHRoaXMuaHViQ29ubmVjdGlvbiwgc2V0dXA6IGl0ZW19KTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5odWJDb25uZWN0aW9uLm9uKCdVcGRhdGVSZWFkeUNvdW50JywgKGluQ291bnQ6IG51bWJlcikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhgaW5jb3VudCAke2luQ291bnR9YCk7XHJcbiAgICAgIHRoaXMuaW5Db3VudCA9IGluQ291bnQ7XHJcbiAgICB9KTtcclxuXHJcbiAgICB2YXIgcm9vbWNvZGUgPSBxdWVyeXN0cmluZy5wYXJzZSh3aW5kb3cubG9jYXRpb24uc2VhcmNoKTtcclxuICAgIHZhciByb29tID0gcm9vbWNvZGVbXCJyb29tXCJdO1xyXG4gICAgdGhpcy5hZGRcclxuICAgICAgLnRleHQoMTAwLCA1MCwgYFRlYW0gJHtyb29tfWAsIHtcclxuICAgICAgICBjb2xvcjogJyNGRkZGRkYnLFxyXG4gICAgICB9KVxyXG4gICAgICAuc2V0Rm9udFNpemUoMjQpO1xyXG4gICAgdGhpcy5wbGF5ZXJEaXNwbGF5ID0gdGhpcy5hZGQudGV4dCgxMDAsIDEwMCwgYFRleHQ6ICR7dGhpcy5pbkNvdW50fWApO1xyXG4gICAgbmV3IE1lbnVCdXR0b24odGhpcywgMTAwLCAxNTAsICdFdmVyeW9uZSBpcyByZWFkeScsICgpID0+IHtcclxuICAgICAgdGhpcy5odWJDb25uZWN0aW9uLmludm9rZSgnQWxsUmVhZHknKS50aGVuKCgpPT4gY29uc29sZS5sb2coXCJnb3QgYmFjayBmcm9tIGFscmVhZHlcIikpO1xyXG4gICAgICBjb25zb2xlLmxvZyhcImNhbGxlZCBhbGxyZWFkeVwiKVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdXBkYXRlKCk6IHZvaWR7XHJcbiAgICB0aGlzLnBsYXllckRpc3BsYXkuc2V0VGV4dChgVGV4dDogJHt0aGlzLmluQ291bnR9YCk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IElucHV0LCBHYW1lT2JqZWN0cyB9IGZyb20gJ3BoYXNlcic7XHJcbmltcG9ydCB7IGdldEdhbWVXaWR0aCwgZ2V0R2FtZUhlaWdodCwgSW5ncmVkaWVudHMsIGRyaW5rVG9Db2xvck1hcCB9IGZyb20gJy4uL2hlbHBlcnMnO1xyXG5pbXBvcnQgKiBhcyBzaWduYWxSIGZyb20gJ0BtaWNyb3NvZnQvc2lnbmFscic7XHJcbi8vaW1wb3J0IHsgSW5ncmVkaWVudHMgfSBmcm9tICcuLi8uLi8uLi9DbGllbnQvc3JjL1JlZmVyZW5jZSc7XHJcbmltcG9ydCB7IE1lbnVCdXR0b24gfSBmcm9tICcuLi91aS9tZW51LWJ1dHRvbic7XHJcbmltcG9ydCB7IEdsYXNzQnV0dG9uIH0gZnJvbSAnLi4vdWkvZ2xhc3MtYnV0dG9uJztcclxuaW1wb3J0IHsgU2NlbmVCdXR0b24gfSBmcm9tICcuLi91aS9zY2VuZS1idXR0b24nO1xyXG5cclxuY29uc3Qgc2NlbmVDb25maWc6IFBoYXNlci5UeXBlcy5TY2VuZXMuU2V0dGluZ3NDb25maWcgPSB7XHJcbiAgYWN0aXZlOiBmYWxzZSxcclxuICB2aXNpYmxlOiBmYWxzZSxcclxuICBrZXk6ICdHYW1lJyxcclxufTtcclxuXHJcbmVudW0gR2FtZVBoYXNlIHtcclxuICBVbmFzc2lnbmVkLFxyXG4gIEFzc2lnbmVkLFxyXG4gIFN0YXJ0ZWQsXHJcbiAgUmVzdWx0ZWQsXHJcbn1cclxuY2xhc3MgU2V0dXB7XHJcbiAgcHVibGljIHBsYXllcmNvdW50OiBudW1iZXI7XHJcbiAgcHVibGljIHJvdW5kTnVtYmVyOiBudW1iZXI7XHJcbiAgcHVibGljIGN1cE51bWJlcjogbnVtYmVyO1xyXG4gIHB1YmxpYyBhY3Rpb25zOiBudW1iZXJbXTtcclxufVxyXG5jbGFzcyBHYW1lU2NlbmVBcmd1bWVudHMge1xyXG4gIHB1YmxpYyBodWJDb25uZWN0aW9uOiBzaWduYWxSLkh1YkNvbm5lY3Rpb247XHJcbiAgcHVibGljIHNldHVwOiBTZXR1cDtcclxufVxyXG5cclxuY2xhc3Mgc3RhdGVVcGRhdGV7XHJcbiAgcHVibGljIGN1cFN0YXRlOiBBcnJheTxudW1iZXI+O1xyXG4gIHB1YmxpYyBjdXBMb2NrczogQXJyYXk8bnVtYmVyPjtcclxufVxyXG5leHBvcnQgY2xhc3MgR2FtZVNjZW5lIGV4dGVuZHMgUGhhc2VyLlNjZW5lIHtcclxuICBwdWJsaWMgc3BlZWQgPSAyMDA7XHJcblxyXG4gIHByaXZhdGUgaHViQ29ubmVjdGlvbjogc2lnbmFsUi5IdWJDb25uZWN0aW9uO1xyXG5cclxuICBwcml2YXRlIGN1cnNvcktleXM6IFBoYXNlci5UeXBlcy5JbnB1dC5LZXlib2FyZC5DdXJzb3JLZXlzO1xyXG4gIHByaXZhdGUgdmVybW91dGg6IFBoYXNlci5HYW1lT2JqZWN0cy5TcHJpdGU7XHJcbiAgcHJpdmF0ZSBib3VyYm9uOiBQaGFzZXIuR2FtZU9iamVjdHMuU3ByaXRlO1xyXG4gIHByaXZhdGUgaWNlOiBQaGFzZXIuR2FtZU9iamVjdHMuU3ByaXRlO1xyXG4gIHByaXZhdGUgb3JhbmdlOiBQaGFzZXIuR2FtZU9iamVjdHMuU3ByaXRlO1xyXG4gIHByaXZhdGUgZW1wdHlHbGFzczogUGhhc2VyLkdhbWVPYmplY3RzLlNwcml0ZTtcclxuICBwcml2YXRlIGZpbGxlZGdsYXNzMTogUGhhc2VyLkdhbWVPYmplY3RzLlJlY3RhbmdsZTtcclxuICBwcml2YXRlIGZpbGxlZGdsYXNzMjogUGhhc2VyLkdhbWVPYmplY3RzLlJlY3RhbmdsZTtcclxuICBwcml2YXRlIGZpbGxlZGdsYXNzMzogUGhhc2VyLkdhbWVPYmplY3RzLlJlY3RhbmdsZTtcclxuICBwcml2YXRlIGZpbGxlZGdsYXNzNDogUGhhc2VyLkdhbWVPYmplY3RzLlJlY3RhbmdsZTtcclxuICBwcml2YXRlIHNoYWtlcjogUGhhc2VyLkdhbWVPYmplY3RzLlNwcml0ZTtcclxuICBwcml2YXRlIG11ZGRsZXI6IFBoYXNlci5HYW1lT2JqZWN0cy5TcHJpdGU7XHJcbiAgcHJpdmF0ZSBqdWljZXI6IFBoYXNlci5HYW1lT2JqZWN0cy5TcHJpdGU7XHJcbiAgcHJpdmF0ZSBzdWJtaXRCdXR0b246IE1lbnVCdXR0b247XHJcbiAgcHJpdmF0ZSBnbGFzc0J1dHRvbnM6IEFycmF5PEdsYXNzQnV0dG9uPiA9IFtdO1xyXG4gIHByaXZhdGUgYWN0aW9uQnV0dG9uczogQXJyYXk8UGhhc2VyLkdhbWVPYmplY3RzLlNwcml0ZT47XHJcbiAgcHJpdmF0ZSBzZWxlY3RlZFRhcmdldDogc3RyaW5nO1xyXG4gIHByaXZhdGUgcmVuZGVyOiBib29sZWFuO1xyXG4gIHB1YmxpYyBjdXBOdW1iZXJUZXh0OiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dDtcclxuXHJcbiAgLy8gc3RhdGUgd2hpY2ggaXMgcGxhaW5seSBjb3BpZWQgZnJvbSBwbGF5dGVzdCAxXHJcbiAgcHJpdmF0ZSBnbGFzc0NvbnRlbnRzOiBBcnJheTxudW1iZXI+O1xyXG4gIHByaXZhdGUgY3VwTG9ja3M6IEFycmF5PG51bWJlcj47XHJcbiAgcHJpdmF0ZSByZXN1bHRzOiBBcnJheTxudW1iZXI+O1xyXG4gIHByaXZhdGUgcGhhc2U6IEdhbWVQaGFzZTtcclxuICBwcml2YXRlIGZpbmFsOiBib29sZWFuO1xyXG4gIHByaXZhdGUgcGxheWVyQ291bnQ6IG51bWJlcjtcclxuICBwcml2YXRlIGFjdGlvbnM6IEFycmF5PG51bWJlcj47XHJcbiAgcHJpdmF0ZSByb3VuZE51bWJlcjogbnVtYmVyO1xyXG4gIHByaXZhdGUgY3VwTnVtYmVyOiBudW1iZXI7XHJcblxyXG4gIHByaXZhdGUgZnVsbFN0dWZmOiBBcnJheTxQaGFzZXIuR2FtZU9iamVjdHMuU3ByaXRlPjtcclxuXHJcbiAgcHJpdmF0ZSBjb250ZW50czogc3RyaW5nW10gPSBbXTtcclxuICBwcml2YXRlIGdsYXNzRmlsbGVyczogUGhhc2VyLkdhbWVPYmplY3RzLlJlY3RhbmdsZVtdID0gW107XHJcblxyXG4gIHByaXZhdGVDb2xvck1hcDogTWFwPHN0cmluZywgbnVtYmVyPiA9IG5ldyBNYXAoW1xyXG4gICAgWydib3VyYm9uJywgMHhkYjc5MDBdLFxyXG4gICAgWyd2ZXJtb3V0aCcsIDB4NTUwMTAzXSxcclxuICBdKTtcclxuXHJcbiAgcHJpdmF0ZSBpc1BvdXJpbmcgPSAwO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKHNjZW5lQ29uZmlnKTtcclxuICB9XHJcbiAgcHVibGljIHRleHQxOiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dDtcclxuICBwdWJsaWMgdGV4dDI6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0O1xyXG5cclxuICBwcml2YXRlIGdldENvb2tpZSA9IChjbmFtZSkgPT4ge1xyXG4gICAgY29uc3QgbmFtZSA9IGNuYW1lICsgJz0nO1xyXG4gICAgY29uc3QgZGVjb2RlZENvb2tpZSA9IGRlY29kZVVSSUNvbXBvbmVudChkb2N1bWVudC5jb29raWUpO1xyXG4gICAgY29uc3QgY2EgPSBkZWNvZGVkQ29va2llLnNwbGl0KCc7Jyk7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGxldCBjID0gY2FbaV07XHJcbiAgICAgIHdoaWxlIChjLmNoYXJBdCgwKSA9PSAnICcpIHtcclxuICAgICAgICBjID0gYy5zdWJzdHJpbmcoMSk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGMuaW5kZXhPZihuYW1lKSA9PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIGMuc3Vic3RyaW5nKG5hbWUubGVuZ3RoLCBjLmxlbmd0aCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiAnJztcclxuICB9O1xyXG5cclxuICBwdWJsaWMgaW5pdChkYXRhOiBHYW1lU2NlbmVBcmd1bWVudHMpOiB2b2lkIHtcclxuICAgIHRoaXMuaHViQ29ubmVjdGlvbiA9IGRhdGEuaHViQ29ubmVjdGlvbjtcclxuICAgIHRoaXMucGxheWVyQ291bnQgPSBkYXRhLnNldHVwLnBsYXllcmNvdW50O1xyXG4gICAgdGhpcy5hY3Rpb25zID0gZGF0YS5zZXR1cC5hY3Rpb25zO1xyXG4gICAgdGhpcy5yb3VuZE51bWJlciA9IGRhdGEuc2V0dXAucm91bmROdW1iZXI7XHJcbiAgICB0aGlzLmN1cE51bWJlciA9IGRhdGEuc2V0dXAuY3VwTnVtYmVyO1xyXG4gIH1cclxuXHJcblxyXG4gIHB1YmxpYyBjcmVhdGUoKTogdm9pZCB7XHJcbiAgICBjb25zb2xlLmxvZygnR2FtZScpO1xyXG4gICAgY29uc29sZS5sb2coJ2Nvb2tpZTogJyArIGRvY3VtZW50LmNvb2tpZSk7XHJcbiAgICB0aGlzLnJlc2V0KCk7XHJcbiAgICB0aGlzLnNlbGVjdGVkVGFyZ2V0ID0gdGhpcy5jdXBOdW1iZXIudG9TdHJpbmcoKTtcclxuICAgIHRoaXMuZnVsbFN0dWZmID0gW107XHJcbiAgICAvLyBTaWduYWxSIFN0dWZmXHJcbiAgICB0aGlzLnNldHVwSHViKHRoaXMuaHViQ29ubmVjdGlvbik7XHJcblxyXG4gICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSB0aGlzLnN5cy5nYW1lLmNhbnZhcztcclxuICAgIHRoaXMuZW1wdHlHbGFzcyA9IHRoaXMuYWRkLnNwcml0ZSh3aWR0aCAvIDIsIGhlaWdodCAvIDMsICdlbXB0eWdsYXNzJykuc2V0RGVwdGgoMCk7XHJcbiAgICBcclxuXHJcblxyXG4gICAgaWYodGhpcy5jdXBOdW1iZXIgPCA0KXtcclxuXHJcbiAgICAgIHRoaXMuY3VwTnVtYmVyVGV4dCA9IHRoaXMuYWRkLnRleHQod2lkdGgvNCwgaGVpZ2h0LzEwIC0gMzAsIGBZb3UgYXJlIGN1cCBudW1iZXIgJHsodGhpcy5jdXBOdW1iZXIrMSl9YCwgeyBjb2xvcjogJyNmZmZmZmYnIH0pO1xyXG4gICAgICAvLyBBZGQgYSBwbGF5ZXIgc3ByaXRlIHRoYXQgY2FuIGJlIG1vdmVkIGFyb3VuZC4gUGxhY2UgaGltIGluIHRoZSBtaWRkbGUgb2YgdGhlIHNjcmVlbi5cclxuICAgIHRoaXMuZmlsbGVkZ2xhc3MxID0gdGhpcy5hZGQucmVjdGFuZ2xlKHdpZHRoIC8gMiwgaGVpZ2h0IC8gMyArICh0aGlzLmVtcHR5R2xhc3MuZGlzcGxheUhlaWdodC80KSwgdGhpcy5lbXB0eUdsYXNzLmRpc3BsYXlXaWR0aCwgdGhpcy5lbXB0eUdsYXNzLmRpc3BsYXlIZWlnaHQvNCwgMHhmZmZmZmYpO1xyXG4gICAgdGhpcy5maWxsZWRnbGFzczIgPSB0aGlzLmFkZC5yZWN0YW5nbGUod2lkdGggLyAyLCBoZWlnaHQgLyAzICsgKDMgKiB0aGlzLmVtcHR5R2xhc3MuZGlzcGxheUhlaWdodC80KSwgdGhpcy5lbXB0eUdsYXNzLmRpc3BsYXlXaWR0aCwgdGhpcy5lbXB0eUdsYXNzLmRpc3BsYXlIZWlnaHQvNCwgMHgwMDAwZmYpO1xyXG4gICAgdGhpcy5maWxsZWRnbGFzczMgPSB0aGlzLmFkZC5yZWN0YW5nbGUod2lkdGggLyAyLCBoZWlnaHQgLyAzICsgKHRoaXMuZW1wdHlHbGFzcy5kaXNwbGF5SGVpZ2h0LzIpLCB0aGlzLmVtcHR5R2xhc3MuZGlzcGxheVdpZHRoLCB0aGlzLmVtcHR5R2xhc3MuZGlzcGxheUhlaWdodC80LCAweDAwZmYwMCk7XHJcbiAgICB0aGlzLmZpbGxlZGdsYXNzNCA9IHRoaXMuYWRkLnJlY3RhbmdsZSh3aWR0aCAvIDIsIGhlaWdodCAvIDMsIHRoaXMuZW1wdHlHbGFzcy5kaXNwbGF5V2lkdGgsIHRoaXMuZW1wdHlHbGFzcy5kaXNwbGF5SGVpZ2h0LzQsIDB4RkYwMDAwKTtcclxuICAgIFxyXG4gICAgdGhpcy5maWxsZWRnbGFzczEuc2V0U2NhbGUoMC41KS5zZXRBbHBoYSgxKS5zZXREZXB0aCgxKS5zZXRCbGVuZE1vZGUoUGhhc2VyLkJsZW5kTW9kZXMuTVVMVElQTFkpO1xyXG4gICAgdGhpcy5maWxsZWRnbGFzczIuc2V0U2NhbGUoMC41KS5zZXRBbHBoYSgxKS5zZXREZXB0aCgxKS5zZXRCbGVuZE1vZGUoUGhhc2VyLkJsZW5kTW9kZXMuTVVMVElQTFkpO1xyXG4gICAgdGhpcy5maWxsZWRnbGFzczMuc2V0U2NhbGUoMC41KS5zZXRBbHBoYSgxKS5zZXREZXB0aCgxKS5zZXRCbGVuZE1vZGUoUGhhc2VyLkJsZW5kTW9kZXMuTVVMVElQTFkpO1xyXG4gICAgdGhpcy5maWxsZWRnbGFzczQuc2V0U2NhbGUoMC41KS5zZXRBbHBoYSgxKS5zZXREZXB0aCgxKS5zZXRCbGVuZE1vZGUoUGhhc2VyLkJsZW5kTW9kZXMuTVVMVElQTFkpO1xyXG4gICAgdGhpcy5lbXB0eUdsYXNzLnNldFNjYWxlKDAuNSk7XHJcbiAgICBcclxuICAgIHRoaXMuZmlsbGVkZ2xhc3MxLnNldE9yaWdpbigwLDApXHJcbiAgICB0aGlzLmZpbGxlZGdsYXNzMi5zZXRPcmlnaW4oMCwwKVxyXG4gICAgdGhpcy5maWxsZWRnbGFzczMuc2V0T3JpZ2luKDAsMClcclxuICAgIHRoaXMuZmlsbGVkZ2xhc3M0LnNldE9yaWdpbigwLDApXHJcbiAgICBcclxuICAgIHRoaXMuZmlsbGVkZ2xhc3MxLmhlaWdodCA9IHRoaXMuZW1wdHlHbGFzcy5kaXNwbGF5SGVpZ2h0LzI7XHJcbiAgICB0aGlzLmZpbGxlZGdsYXNzMi5oZWlnaHQgPSB0aGlzLmVtcHR5R2xhc3MuZGlzcGxheUhlaWdodC8yO1xyXG4gICAgdGhpcy5maWxsZWRnbGFzczMuaGVpZ2h0ID0gdGhpcy5lbXB0eUdsYXNzLmRpc3BsYXlIZWlnaHQvMjtcclxuICAgIHRoaXMuZmlsbGVkZ2xhc3M0LmhlaWdodCA9IHRoaXMuZW1wdHlHbGFzcy5kaXNwbGF5SGVpZ2h0LzI7XHJcbiAgICBcclxuICAgIHRoaXMuZmlsbGVkZ2xhc3MxLnNldFBvc2l0aW9uKHRoaXMuZW1wdHlHbGFzcy5nZXRUb3BMZWZ0KCkueCwgdGhpcy5lbXB0eUdsYXNzLmdldFRvcExlZnQoKS55KTtcclxuICAgIHRoaXMuZmlsbGVkZ2xhc3MyLnNldFBvc2l0aW9uKHRoaXMuZmlsbGVkZ2xhc3MxLmdldEJvdHRvbUxlZnQoKS54LCB0aGlzLmZpbGxlZGdsYXNzMS5nZXRCb3R0b21MZWZ0KCkueSk7XHJcbiAgICB0aGlzLmZpbGxlZGdsYXNzMy5zZXRQb3NpdGlvbih0aGlzLmZpbGxlZGdsYXNzMi5nZXRCb3R0b21MZWZ0KCkueCwgdGhpcy5maWxsZWRnbGFzczIuZ2V0Qm90dG9tTGVmdCgpLnkpO1xyXG4gICAgdGhpcy5maWxsZWRnbGFzczQuc2V0UG9zaXRpb24odGhpcy5maWxsZWRnbGFzczMuZ2V0Qm90dG9tTGVmdCgpLngsIHRoaXMuZmlsbGVkZ2xhc3MzLmdldEJvdHRvbUxlZnQoKS55KTtcclxuICAgIHRoaXMuc3VibWl0QnV0dG9uID0gbmV3IE1lbnVCdXR0b24oXHJcbiAgICAgIHRoaXMsXHJcbiAgICAgIHRoaXMuZW1wdHlHbGFzcy5nZXRCb3R0b21DZW50ZXIoKS54LTUwLFxyXG4gICAgICB0aGlzLmVtcHR5R2xhc3MuZ2V0VG9wQ2VudGVyKCkueSAtIGhlaWdodC8xMCxcclxuICAgICAgJ1NlcnZlIEdsYXNzJyxcclxuICAgICAgKCkgPT4ge1xyXG4gICAgICAgIHRoaXMucmVtb3RlU3VibWl0Y3VwKCk7XHJcbiAgICAgIH0sXHJcbiAgICAgICk7XHJcbiAgICAgIFxyXG5cclxuICAgICAgXHJcblxyXG4gICAgdGhpcy5zdWJtaXRCdXR0b24uc2V0WCh0aGlzLnN1Ym1pdEJ1dHRvbi54IC0gdGhpcy5zdWJtaXRCdXR0b24uZGlzcGxheVdpZHRoIC8gMik7XHJcbiAgICB0aGlzLnN1Ym1pdEJ1dHRvbi5sYWJlbC5zZXRYKHRoaXMuc3VibWl0QnV0dG9uLnggKyB0aGlzLnN1Ym1pdEJ1dHRvbi5wYWRkaW5nKTtcclxuXHJcbiAgICBcclxuXHJcbiAgICBuZXcgU2NlbmVCdXR0b24odGhpcyx0aGlzLnN1Ym1pdEJ1dHRvbi5nZXRUb3BSaWdodCgpLnggKyAxNSxcclxuICAgIHRoaXMuZW1wdHlHbGFzcy5nZXRUb3BDZW50ZXIoKS55IC0gaGVpZ2h0LzEwLCAnRGlzY2FyZCcsICgpID0+IHRoaXMucmVtb3RlRW1wdHlDdXAoKSApXHJcblxyXG4gICAgdGhpcy5nbGFzc0ZpbGxlcnMucHVzaCh0aGlzLmZpbGxlZGdsYXNzNCk7XHJcbiAgICB0aGlzLmdsYXNzRmlsbGVycy5wdXNoKHRoaXMuZmlsbGVkZ2xhc3MzKTtcclxuICAgIHRoaXMuZ2xhc3NGaWxsZXJzLnB1c2godGhpcy5maWxsZWRnbGFzczIpO1xyXG4gICAgdGhpcy5nbGFzc0ZpbGxlcnMucHVzaCh0aGlzLmZpbGxlZGdsYXNzMSk7XHJcbi8qXHJcbiovXHJcbiAgXHJcbiAgICB0aGlzLmlucHV0Lm9uKCdkcmFnZW5kJywgKHBvaW50ZXIsIGdhbWVPYmplY3QpID0+IHtcclxuICAgICAgZ2FtZU9iamVjdC5jbGVhclRpbnQoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIFRoaXMgaXMgYSBuaWNlIGhlbHBlciBQaGFzZXIgcHJvdmlkZXMgdG8gY3JlYXRlIGxpc3RlbmVycyBmb3Igc29tZSBvZiB0aGUgbW9zdCBjb21tb24ga2V5cy5cclxuICAgIHRoaXMuY3Vyc29yS2V5cyA9IHRoaXMuaW5wdXQua2V5Ym9hcmQuY3JlYXRlQ3Vyc29yS2V5cygpO1xyXG5cclxuICAgIHRoaXMudGV4dDEgPSB0aGlzLmFkZC50ZXh0KDEwLCAxMCwgJycsIHsgY29sb3I6ICcjMDBmZjAwJyB9KTtcclxuICAgIHRoaXMudGV4dDIgPSB0aGlzLmFkZC50ZXh0KDUwMCwgMTAsICcnLCB7IGNvbG9yOiAnIzAwZmYwMCcgfSk7XHJcblxyXG5cclxuICAgIHRoaXMuYWN0aW9ucy5mb3JFYWNoKChlbGVtZW50LCBpZHgpID0+IHtcclxuICAgICAgbGV0IG5hbWUgPSBJbmdyZWRpZW50c1tlbGVtZW50XTtcclxuICAgICAgLy9sZXQgYWN0aW9uQnV0dG9uID0gbmV3IFNjZW5lQnV0dG9uKHRoaXMsIHdpZHRoICogaWR4IC8gNSwgaGVpZ2h0ICogMC43NSwgbmFtZSwgKCk9Pnt9KTtcclxuICAgICAgbGV0IG5leHRTY2VuZSA9IG5hbWU7XHJcbiAgICAgIGNvbnNvbGUubG9nKG5hbWUpXHJcbiAgICAgIGxldCB0bXAgPSB0aGlzLmFkZC5zcHJpdGUoKHdpZHRoLzUpKiAoaWR4ICsgMSksIGhlaWdodCAqIDAuNzUsIG5hbWUpLnNldEludGVyYWN0aXZlKCk7XHJcbiAgICAgIGlmKGVsZW1lbnQgPj0gMTApe1xyXG4gICAgICAgIG5leHRTY2VuZSA9ICdQb3VyJztcclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmIChuYW1lLmluY2x1ZGVzKFwiSnVpY2VcIikpe1xyXG4gICAgICAgIG5leHRTY2VuZSA9ICdKdWljZXInXHJcbiAgICAgIH1cclxuICAgICAgdG1wLnNldFNjYWxlKDAuMik7XHJcbiAgICAgIHRtcC5vbigncG9pbnRlcmRvd24nLCAoKT0+IHtcclxuICAgICAgICB0aGlzLnNjZW5lLnNldFZpc2libGUoZmFsc2UpO1xyXG4gICAgICAgIHRoaXMuc2NlbmUucGF1c2UoKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIm5leHQgXCIgKyBuZXh0U2NlbmUpO1xyXG4gICAgICAgIHRoaXMuc2NlbmUubGF1bmNoKG5leHRTY2VuZSwge29uRmluaXNoOiAoKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcImNhbGxlZFwiKVxyXG4gICAgICAgICAgdGhpcy5zY2VuZS5zZXRWaXNpYmxlKHRydWUpO1xyXG4gICAgICAgICAgdGhpcy5yZW1vdGVTZW5kQWN0aW9uKGVsZW1lbnQsIE51bWJlci5wYXJzZUludCh0aGlzLnNlbGVjdGVkVGFyZ2V0KS52YWx1ZU9mKCkpO1xyXG4gICAgICAgICAgdGhpcy5zY2VuZS5yZXN1bWUoKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIEJvdHRsZVNwcml0ZU5hbWU6IG5hbWV9KTtcclxuICAgICAgICBjb25zb2xlLmxvZyhuYW1lKTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICAgIHRoaXMuZ2xhc3NCdXR0b25zID0gW107XHJcbiAgICB0aGlzLmFkZC50ZXh0KHRoaXMuZW1wdHlHbGFzcy5nZXRUb3BMZWZ0KCkueCxcclxuICAgIHRoaXMuZW1wdHlHbGFzcy5nZXRCb3R0b21DZW50ZXIoKS55ICsgaGVpZ2h0IC8gMTUgLTE1LFwidGFyZ2V0IGN1cDpcIiApXHJcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgNDsgaSsrKXtcclxuICAgICAgdGhpcy5nbGFzc0J1dHRvbnMucHVzaChuZXcgR2xhc3NCdXR0b24oXHJcbiAgICAgICAgdGhpcyxcclxuICAgICAgICB0aGlzLmVtcHR5R2xhc3MuZ2V0VG9wTGVmdCgpLnggKyBpICogMzAsXHJcbiAgICAgICAgdGhpcy5lbXB0eUdsYXNzLmdldEJvdHRvbUNlbnRlcigpLnkgKyBoZWlnaHQgLyAxNSxcclxuICAgICAgICAoaSsxKS50b1N0cmluZygpLFxyXG4gICAgICAgICgpID0+IHtcclxuICAgICAgICAgIHRoaXMucmVuZGVyID0gdHJ1ZTsgXHJcbiAgICAgICAgICB0aGlzLnNlbGVjdGVkVGFyZ2V0ID0gaS50b1N0cmluZygpO1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJzZWxlY3RlZCA9IFwiICsgdGhpcy5zZWxlY3RlZFRhcmdldCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICkpXHJcbiAgICAgIH1cclxuICB9XHJcbiAgZWxzZXtcclxuICAgIHRoaXMuZW1wdHlHbGFzcy5zZXRTY2FsZSgwLjUpO1xyXG4gICAgdGhpcy5lbXB0eUdsYXNzLnNldFZpc2libGUoZmFsc2UpO1xyXG5cclxuICAgIHRoaXMuYWN0aW9ucy5mb3JFYWNoKChlbGVtZW50LCBpZHgpID0+IHtcclxuICAgICAgbGV0IG5hbWUgPSBJbmdyZWRpZW50c1tlbGVtZW50XTtcclxuICAgICAgLy9sZXQgYWN0aW9uQnV0dG9uID0gbmV3IFNjZW5lQnV0dG9uKHRoaXMsIHdpZHRoICogaWR4IC8gNSwgaGVpZ2h0ICogMC43NSwgbmFtZSwgKCk9Pnt9KTtcclxuICAgICAgbGV0IG5leHRTY2VuZSA9IG5hbWU7XHJcbiAgICAgIGNvbnNvbGUubG9nKG5hbWUpXHJcbiAgICAgIGxldCB0bXAgPSB0aGlzLmFkZC5zcHJpdGUoKHdpZHRoLzIpLCAoaGVpZ2h0IC8gNSkgKiAoaWR4ICsgMSksIG5hbWUpLnNldEludGVyYWN0aXZlKCk7XHJcbiAgICAgIGlmKGVsZW1lbnQgPj0gMTApe1xyXG4gICAgICAgIG5leHRTY2VuZSA9ICdQb3VyJztcclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmIChuYW1lLmluY2x1ZGVzKFwiSnVpY2VcIikpe1xyXG4gICAgICAgIG5leHRTY2VuZSA9ICdKdWljZXInXHJcbiAgICAgIH1cclxuICAgICAgdG1wLnNldFNjYWxlKDAuMik7XHJcbiAgICAgIHRtcC5vbigncG9pbnRlcmRvd24nLCAoKT0+IHtcclxuICAgICAgICB0aGlzLnNjZW5lLnNldFZpc2libGUoZmFsc2UpO1xyXG4gICAgICAgIHRoaXMuc2NlbmUucGF1c2UoKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIm5leHQgXCIgKyBuZXh0U2NlbmUpO1xyXG4gICAgICAgIHRoaXMuc2NlbmUubGF1bmNoKG5leHRTY2VuZSwge29uRmluaXNoOiAoKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcImNhbGxlZFwiKVxyXG4gICAgICAgICAgdGhpcy5zY2VuZS5zZXRWaXNpYmxlKHRydWUpO1xyXG4gICAgICAgICAgdGhpcy5yZW1vdGVTZW5kQWN0aW9uKGVsZW1lbnQsIE51bWJlci5wYXJzZUludCh0aGlzLnNlbGVjdGVkVGFyZ2V0KS52YWx1ZU9mKCkpO1xyXG4gICAgICAgICAgdGhpcy5zY2VuZS5yZXN1bWUoKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIEJvdHRsZVNwcml0ZU5hbWU6IG5hbWV9KTtcclxuICAgICAgICBjb25zb2xlLmxvZyhuYW1lKTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmdsYXNzQnV0dG9ucyA9IFtdO1xyXG4gICAgdGhpcy5hZGQudGV4dCh0aGlzLmVtcHR5R2xhc3MuZ2V0VG9wTGVmdCgpLngsXHJcbiAgICBoZWlnaHQvMTItMTUsXCJ0YXJnZXQgY3VwOlwiIClcclxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCA0OyBpKyspe1xyXG4gICAgICB0aGlzLmdsYXNzQnV0dG9ucy5wdXNoKG5ldyBHbGFzc0J1dHRvbihcclxuICAgICAgICB0aGlzLFxyXG4gICAgICAgIHRoaXMuZW1wdHlHbGFzcy5nZXRUb3BMZWZ0KCkueCArIGkgKiAzMCxcclxuICAgICAgICBoZWlnaHQvMTIsXHJcbiAgICAgICAgKGkrMSkudG9TdHJpbmcoKSxcclxuICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLnJlbmRlciA9IHRydWU7IFxyXG4gICAgICAgICAgdGhpcy5zZWxlY3RlZFRhcmdldCA9IGkudG9TdHJpbmcoKTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwic2VsZWN0ZWQgPSBcIiArIHRoaXMuc2VsZWN0ZWRUYXJnZXQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICApKVxyXG4gICAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgIFxyXG4gICAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5yZW1vdGVGZXRjaFN0YXRlKCk7XHJcbiAgICAgIH0sIDEwMDAwKTtcclxuICAgICAgdGhpcy5yZW1vdGVGZXRjaFN0YXRlKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdXBkYXRlKCk6IHZvaWQge1xyXG5cclxuICAgIGlmKHRoaXMucmVuZGVyKXtcclxuICAgIC8vIHNlbGVjdCBidXR0b25zIFxyXG4gICAgdGhpcy5nbGFzc0J1dHRvbnMuZm9yRWFjaCgoZWxlbWVudDogR2xhc3NCdXR0b24sIGlkeDogTnVtYmVyKSA9PiB7XHJcbiAgICAgIGlmKHRoaXMuY3VwTG9ja3MuaW5jbHVkZXMoaWR4LnZhbHVlT2YoKSkpe1xyXG4gICAgICAgIGVsZW1lbnQuZW50ZXJNZW51QnV0dG9uQmxvY2tlZFN0YXRlKCk7XHJcbiAgICAgIH1lbHNlIHtcclxuICAgICAgICBpZiAodGhpcy5zZWxlY3RlZFRhcmdldCA9PSBpZHgudG9TdHJpbmcoKSl7XHJcbiAgICAgICAgICBlbGVtZW50LmVudGVyTWVudUJ1dHRvbkFjdGl2ZVN0YXRlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICBlbGVtZW50LmVudGVyTWVudUJ1dHRvblJlc3RTdGF0ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG5cclxuICAgIC8vIG92ZXJ3cml0aW5nIFxyXG4gICAgdGhpcy5nbGFzc0ZpbGxlcnMuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgZWxlbWVudC5zZXRWaXNpYmxlKGZhbHNlKTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5mdWxsU3R1ZmYuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgZWxlbWVudC5kZXN0cm95KCk7XHJcbiAgICB9KTtcclxuICAgIC8vIGltcGxlbWVudGlvblxyXG4gICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSB0aGlzLnN5cy5nYW1lLmNhbnZhcztcclxuICAgIGxldCBjdXJyZW50UG9zaXRpb24gPSAwO1xyXG4gICAgdGhpcy5nbGFzc0NvbnRlbnRzLmZvckVhY2goKGVsZW1lbnQsIGlkeCkgPT4ge1xyXG4gICAgICBsZXQgbmFtZSA9IEluZ3JlZGllbnRzW2VsZW1lbnRdO1xyXG4gICAgICBjb25zb2xlLmxvZyhcInJlbmRlcmluZyBcIiArIG5hbWUgICsgY3VycmVudFBvc2l0aW9uKVxyXG4gICAgICBpZihkcmlua1RvQ29sb3JNYXAuaGFzKG5hbWUpKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInRyaWVkIHRvIHRpbnQgXCIgKyBkcmlua1RvQ29sb3JNYXAuZ2V0KG5hbWUpKTtcclxuICAgICAgICB0aGlzLmdsYXNzRmlsbGVyc1tjdXJyZW50UG9zaXRpb25dLnNldFZpc2libGUodHJ1ZSlcclxuICAgICAgICB0aGlzLmdsYXNzRmlsbGVyc1tjdXJyZW50UG9zaXRpb25dLmZpbGxDb2xvciA9IChkcmlua1RvQ29sb3JNYXAuZ2V0KG5hbWUpKTtcclxuICAgICAgICBjdXJyZW50UG9zaXRpb24rKztcclxuICAgICAgfVxyXG4gICAgICBzd2l0Y2gobmFtZSl7XHJcbiAgICAgICAgY2FzZSAnT3JhbmdlIFBlZWwnOlxyXG4gICAgICAgICAgdGhpcy5mdWxsU3R1ZmYucHVzaCh0aGlzLmFkZC5zcHJpdGUod2lkdGggLyAyLCBoZWlnaHQgLyAzLCAnb3Jhbmdld2VkZ2VnbGFzcycpLnNldFNjYWxlKDAuNSkpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnSWNlIEN1YmUnOlxyXG4gICAgICAgICAgdGhpcy5mdWxsU3R1ZmYucHVzaCh0aGlzLmFkZC5zcHJpdGUod2lkdGggLyAyLCBoZWlnaHQgLyAzLCAnaWNlZ2xhc3MnKS5zZXRTY2FsZSgwLjUpKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ011ZGRsZSBEcmluayc6XHJcbiAgICAgICAgICB0aGlzLmZ1bGxTdHVmZi5wdXNoKHRoaXMuYWRkLnNwcml0ZSh3aWR0aCAvIDIsIGhlaWdodCAvIDMsICdtdWRkbGVyZ2xhc3MnKS5zZXRTY2FsZSgwLjUpKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ1NoYWtlIERyaW5rJzpcclxuICAgICAgICAgIHRoaXMuZnVsbFN0dWZmLnB1c2godGhpcy5hZGQuc3ByaXRlKHdpZHRoIC8gMiwgaGVpZ2h0IC8gMywgJ3NoYWtlbmdsYXNzJykuc2V0U2NhbGUoMC41KSk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdBbmdvc3R1cmEgQml0dGVycyc6XHJcbiAgICAgICAgICB0aGlzLmZ1bGxTdHVmZi5wdXNoKHRoaXMuYWRkLnNwcml0ZSh3aWR0aCAvIDIsIGhlaWdodCAvIDMsICdiaXR0ZXJzZ2xhc3MnKS5zZXRTY2FsZSgwLjUpKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICAgdGhpcy5yZW5kZXIgPSBmYWxzZTtcclxuICAgIH1cclxuICAgICAgXHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJvdGF0ZVJpZ2h0KGdhbWVPYmplY3Q6IEdhbWVPYmplY3RzLlNwcml0ZSk6IHZvaWQge1xyXG4gICAgaWYgKGdhbWVPYmplY3QuYW5nbGUgPCA5MCkge1xyXG4gICAgICBnYW1lT2JqZWN0LnNldEFuZ2xlKGdhbWVPYmplY3QuYW5nbGUgKyAxNSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJvdGF0ZUNlbnRlcihnYW1lT2JqZWN0OiBHYW1lT2JqZWN0cy5TcHJpdGUpOiB2b2lkIHtcclxuICAgIGlmIChnYW1lT2JqZWN0LmFuZ2xlID4gMCkge1xyXG4gICAgICBnYW1lT2JqZWN0LnNldEFuZ2xlKGdhbWVPYmplY3QuYW5nbGUgLSAxNSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldHVwSHViKGNvbm5lY3Rpb246IHNpZ25hbFIuSHViQ29ubmVjdGlvbik6IHZvaWQge1xyXG4gICAgY29ubmVjdGlvbi5vbignU3RhcnQnLCAoKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGBzdGFydGVkYCk7XHJcbiAgICAgIHRoaXMucGhhc2UgPSBHYW1lUGhhc2UuU3RhcnRlZDtcclxuICAgICAgdGhpcy5yZXNldCgpO1xyXG4gICAgICB0aGlzLnJlbW90ZUZldGNoU3RhdGUoKTtcclxuICAgICAgY29uc29sZS5sb2coXCJ0cmllZCB0byByZXNldFwiKVxyXG4gICAgICB0aGlzLnJlbmRlciA9IHRydWU7XHJcbiAgICB9KTtcclxuICAgIGNvbm5lY3Rpb24ub24oJ1VwZGF0ZUN1cFN0YXRlJywgKGN1cFN0YXRlOiBudW1iZXJbXSkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhgQ3VwU3RhdGU6ICR7Y3VwU3RhdGV9YCk7XHJcbiAgICAgIHRoaXMuZ2xhc3NDb250ZW50cyA9IGN1cFN0YXRlO1xyXG4gICAgICB0aGlzLnJlbmRlciA9IHRydWU7XHJcbiAgICB9KTtcclxuICAgIGNvbm5lY3Rpb24ub24oJ1N0YXRlUHVzaCcsICh1cGRhdGU6IHN0YXRlVXBkYXRlKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGBTdGF0ZVB1c2g6ICR7dXBkYXRlLmN1cExvY2tzLmpvaW4oXCIsXCIpfSAke3VwZGF0ZS5jdXBTdGF0ZS5qb2luKFwiLFwiKX0gYCk7XHJcbiAgICAgIHRoaXMuZ2xhc3NDb250ZW50cyA9IHVwZGF0ZS5jdXBTdGF0ZTtcclxuICAgICAgdGhpcy5jdXBMb2NrcyA9IHVwZGF0ZS5jdXBMb2NrcztcclxuICAgICAgLyp0aGlzLnNjZW5lLnJlc3RhcnQoe2h1YkNvbm5lY3Rpb246IHRoaXMuaHViQ29ubmVjdGlvbiwgc2V0dXA6IHtcclxuICAgICAgICBwbGF5ZXJjb3VudDogdGhpcy5wbGF5ZXJDb3VudCxcclxuICAgICAgICByb3VuZE51bWJlcjogdGhpcy5yb3VuZE51bWJlcixcclxuICAgICAgICBjdXBOdW1iZXI6IHRoaXMuY3VwTnVtYmVyLFxyXG4gICAgICAgIGFjdGlvbnM6IHRoaXMuYWN0aW9uc1xyXG4gICAgICB9fSk7Ki9cclxuICAgICAgdGhpcy5yZW5kZXIgPSB0cnVlO1xyXG4gICAgfSk7XHJcbiAgICBjb25uZWN0aW9uLm9uKCdSZXN1bHQnLCAocmVzdWx0OiBudW1iZXJbXSkgPT4ge1xyXG4gICAgICAvKmZvciAobGV0IGkgPSByZXN1bHQubGVuZ3RoIC0gMTsgaSA+IDA7IGktLSkge1xyXG4gICAgICAgIGNvbnN0IGogPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoaSArIDEpKTtcclxuICAgICAgICBbcmVzdWx0W2ldLCByZXN1bHRbal1dID0gW3Jlc3VsdFtqXSwgcmVzdWx0W2ldXTtcclxuICAgICAgfSovXHJcbiAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICAgIGNvbnN0IGNvdW50ID0gcmVzdWx0LnJlZHVjZSgoeCwgeSkgPT4geCArIHkpO1xyXG4gICAgICBpZiAoY291bnQgPT0gMCkge1xyXG4gICAgICAgIHRoaXMuZmluYWwgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuc2NlbmUuc2V0VmlzaWJsZShmYWxzZSk7XHJcbiAgICAgICAgdGhpcy5zY2VuZS5wYXVzZSgpO1xyXG4gICAgICAgIHRoaXMuc2NlbmUubGF1bmNoKCdTdWNjZXNzJyk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIC8vbGV0IGxpc3QgPSBbMCwgMCwgMCwgMF07XHJcbiAgICAgIC8qcmVzdWx0LmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgbGlzdFtlbGVtZW50XSArPSAxO1xyXG4gICAgICB9KTtcclxuICAgICAgbGV0IGxpc3QyID0gdGhpcy5zdGF0ZS5yZXN1bHRzTGlzdDtcclxuICAgICAgbGlzdDIucHVzaChsaXN0KTsqL1xyXG4gICAgICB0aGlzLnBoYXNlID0gR2FtZVBoYXNlLlJlc3VsdGVkO1xyXG4gICAgICAvL3RoaXMucmVzdWx0cyA9IHJlc3VsdDtcclxuICAgICAgdGhpcy5yZW5kZXIgPSB0cnVlO1xyXG4gICAgICAvLyBzaG91bGQgZ28gdG8gcmVzdWx0IHNjZW5lIGluc3RlYWRcclxuICAgICAgLy8gYWN0dWFsbHkgc2hvdWxkbnQsIGlkIHJhdGhlciBqdXN0IHBsb3AgcmVzdWx0cyBvbiB0b3Agb2Ygd2hhdGV2ZXIgZWxzZSBpcyB2aXNpYmxlXHJcbiAgICAgIHRoaXMucmVtb3RlUmVzZXQoKTtcclxuICAgICAgdGhpcy5yZXNldCgpO1xyXG4gICAgICBjb25zb2xlLmxvZyhcInRyaWVkIHRvIHJlc2V0IGZyb20gcmVzdWx0c1wiKVxyXG4gICAgICB0aGlzLnJlbmRlciA9IHRydWU7XHJcbiAgICAgIHRoaXMuc2NlbmUuc2V0VmlzaWJsZShmYWxzZSk7XHJcbiAgICAgIHRoaXMuc2NlbmUucGF1c2UoKTtcclxuICAgICAgdGhpcy5zY2VuZS5sYXVuY2goJ1Jlc3VsdHMnLCB7b25GaW5pc2g6ICgpID0+IHsgIHRoaXMuc2NlbmUucmVzdW1lKCk7dGhpcy5zY2VuZS5zZXRWaXNpYmxlKHRydWUpO30sIHJlc3VsdHM6IHJlc3VsdH0pO1xyXG4gICAgfSk7XHJcbiAgICBjb25uZWN0aW9uLm9uKCdMb2NrQ3VwJywgKGN1cDogbnVtYmVyKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGBMb2NrZWQgJHtjdXB9YCk7XHJcbiAgICAgIHRoaXMuY3VwTG9ja3MgPSB0aGlzLmN1cExvY2tzLmNvbmNhdChbY3VwXSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuY3VwTG9ja3MpO1xyXG4gICAgICB0aGlzLnJlbmRlciA9IHRydWU7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmVzZXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmdsYXNzQ29udGVudHMgPSBbXTtcclxuICAgIHRoaXMucmVzdWx0cyA9IFtdO1xyXG4gICAgdGhpcy5jdXBMb2NrcyA9IFtdO1xyXG4gICAgdGhpcy5yZW5kZXIgPSB0cnVlO1xyXG4gICAgdGhpcy5nbGFzc0J1dHRvbnMuZm9yRWFjaChlID0+IHtcclxuICAgICAgZS5lbnRlck1lbnVCdXR0b25CbG9ja2VkU3RhdGUoKTtcclxuICAgICAgZS5yZXNldE9uQ2xpY2soKTtcclxuICAgICAgZS5lbnRlck1lbnVCdXR0b25SZXN0U3RhdGUoKTtcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlbW90ZVJlZ2lzdGVyID0gKCkgPT4ge1xyXG4gICAgdGhpcy5odWJDb25uZWN0aW9uLmludm9rZSgnUmVnaXN0ZXInLCAneWVhaGhhcmRjb2RlZHRlYW1uYW1lJyk7XHJcbiAgfTtcclxuXHJcbiAgcHJpdmF0ZSByZW1vdGVTdWJtaXRjdXAgPSAoKSA9PiB7XHJcbiAgICB0aGlzLmh1YkNvbm5lY3Rpb24uaW52b2tlKCdTdWJtaXRDdXAnKTtcclxuICB9O1xyXG5cclxuICBwcml2YXRlIHJlbW90ZVNlbmRBY3Rpb24gPSAoYWN0aW9uOiBudW1iZXIsIHRhcmdldDogbnVtYmVyKSA9PiB7XHJcbiAgICB0aGlzLmh1YkNvbm5lY3Rpb24uaW52b2tlKCdTZW5kQWN0aW9uJywgYWN0aW9uLCB0YXJnZXQpO1xyXG4gIH07XHJcblxyXG4gIHByaXZhdGUgcmVtb3RlRW1wdHlDdXAgPSAoKSA9PiB7XHJcbiAgICB0aGlzLmh1YkNvbm5lY3Rpb24uaW52b2tlKCdFbXB0eUN1cCcpO1xyXG4gIH07XHJcblxyXG4gIHByaXZhdGUgcmVtb3RlUmVzZXQgPSAoKSA9PiB7XHJcbiAgICB0aGlzLmh1YkNvbm5lY3Rpb24uaW52b2tlKCdSZXNldCcpO1xyXG4gIH07XHJcbiAgcHJpdmF0ZSByZW1vdGVGZXRjaFN0YXRlID0gKCkgPT4ge1xyXG4gICAgdGhpcy5odWJDb25uZWN0aW9uLmludm9rZSgnRmV0Y2hTdGF0ZScpO1xyXG4gIH07XHJcbn1cclxuIiwiaW1wb3J0IHsgSW5wdXQsIEdhbWVPYmplY3RzIH0gZnJvbSAncGhhc2VyJztcclxuaW1wb3J0IHsgZ2V0R2FtZVdpZHRoLCBnZXRHYW1lSGVpZ2h0LCBkcmlua1RvQ29sb3JNYXAgfSBmcm9tICcuLi9oZWxwZXJzJztcclxuXHJcbmNvbnN0IHNjZW5lQ29uZmlnOiBQaGFzZXIuVHlwZXMuU2NlbmVzLlNldHRpbmdzQ29uZmlnID0ge1xyXG4gIGFjdGl2ZTogZmFsc2UsXHJcbiAgdmlzaWJsZTogZmFsc2UsXHJcbiAga2V5OiAnSWNlIEN1YmUnLFxyXG59O1xyXG5jbGFzcyBHYW1lU2NlbmVBcmd1bWVudHMge1xyXG4gIHB1YmxpYyBvbkZpbmlzaDogRnVuY3Rpb247XHJcbn1cclxuZXhwb3J0IGNsYXNzIEljZVNjZW5lIGV4dGVuZHMgUGhhc2VyLlNjZW5lIHtcclxuICBwdWJsaWMgc3BlZWQgPSAyMDA7XHJcblxyXG4gIHByaXZhdGUgY3Vyc29yS2V5czogUGhhc2VyLlR5cGVzLklucHV0LktleWJvYXJkLkN1cnNvcktleXM7XHJcbiAgcHJpdmF0ZSBpY2U6IFBoYXNlci5HYW1lT2JqZWN0cy5TcHJpdGU7XHJcblxyXG4gIHByaXZhdGUgY29udGVudHM6IHN0cmluZ1tdID0gW107XHJcbiAgcHJpdmF0ZSBnbGFzc0ZpbGxlcnM6IFBoYXNlci5HYW1lT2JqZWN0cy5TcHJpdGVbXSA9IFtdO1xyXG5cclxuICBwcml2YXRlIGlzUG91cmluZyA9IDA7XHJcbiAgcHJpdmF0ZSB0cmFuc2l0aW9uaW5nID0gZmFsc2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoc2NlbmVDb25maWcpO1xyXG4gIH1cclxuICBwdWJsaWMgb25GaW5pc2g6IEZ1bmN0aW9uO1xyXG4gIHB1YmxpYyB0ZXh0MTogUGhhc2VyLkdhbWVPYmplY3RzLlRleHQ7XHJcbiAgcHVibGljIHRleHQyOiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dDtcclxuICBwdWJsaWMgdGV4dDM6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0O1xyXG4gIHB1YmxpYyB0ZXh0NDogUGhhc2VyLkdhbWVPYmplY3RzLlRleHQ7XHJcbiAgcHVibGljIHRleHQ1OiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dDtcclxuICBwdWJsaWMgY2xpY2tzID0gMDtcclxuICBwdWJsaWMgaWNlTGV2ZWwgPSAwO1xyXG5cclxuICBwdWJsaWMgaW5pdChkYXRhOiBHYW1lU2NlbmVBcmd1bWVudHMpOiB2b2lkIHtcclxuICAgIHRoaXMub25GaW5pc2ggPSBkYXRhLm9uRmluaXNoO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNyZWF0ZSgpOiB2b2lkIHtcclxuICAgIGNvbnNvbGUubG9nKCdJY2UnKTtcclxuICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCB9ID0gdGhpcy5zeXMuZ2FtZS5jYW52YXM7XHJcbiAgICB0aGlzLnRyYW5zaXRpb25pbmcgPSBmYWxzZTtcclxuICAgIHRoaXMuY2xpY2tzID0gMDtcclxuICAgIHRoaXMuaWNlTGV2ZWwgPSAwO1xyXG4gIFxyXG4gICAgLy8gQWRkIGEgcGxheWVyIHNwcml0ZSB0aGF0IGNhbiBiZSBtb3ZlZCBhcm91bmQuIFBsYWNlIGhpbSBpbiB0aGUgbWlkZGxlIG9mIHRoZSBzY3JlZW4uXHJcbiAgICB0aGlzLmljZSA9IHRoaXMuYWRkLnNwcml0ZSh3aWR0aCAvIDIsIGhlaWdodCAvIDIsICdpY2UnKTtcclxuICAgIHRoaXMuaWNlLnNldFNjYWxlKDAuNCk7XHJcbiAgICAvL3RoaXMudmVybW91dGhUb3BPbmx5ID0gdGhpcy5hZGQuc3ByaXRlKHdpZHRoIC8gMiwgaGVpZ2h0IC8gMiArIDMwMCwgJ3Zlcm1vdXRodG9wb25seScpO1xyXG5cclxuICAgIHRoaXMuaW5wdXQub24oJ3BvaW50ZXJ1cCcsICgpID0+IHtcclxuICAgICAgdGhpcy50ZXh0MS5zZXRUZXh0KGDOuDogJHt0aGlzLmlucHV0LmFjdGl2ZVBvaW50ZXIuZ2V0QW5nbGUoKX1gKTtcclxuICAgICAgdGhpcy50ZXh0Mi5zZXRUZXh0KGB4OiAke3RoaXMuaW5wdXQuYWN0aXZlUG9pbnRlci5nZXREaXN0YW5jZVgoKX1gKTtcclxuICAgICAgdGhpcy50ZXh0My5zZXRUZXh0KGB5OiAke3RoaXMuaW5wdXQuYWN0aXZlUG9pbnRlci5nZXREaXN0YW5jZVkoKX1gKTtcclxuICAgICAgdGhpcy50ZXh0NC5zZXRUZXh0KGBkOiAke3RoaXMuaW5wdXQuYWN0aXZlUG9pbnRlci5nZXREaXN0YW5jZSgpfWApO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5pbnB1dC5vbigncG9pbnRlcmRvd24nLCAoKSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLmljZUxldmVsID09IDApIHtcclxuICAgICAgICB0aGlzLmljZS5zZXRUZXh0dXJlKCdpY2UnICsgKyt0aGlzLmljZUxldmVsKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmNsaWNrcyArPSAxO1xyXG4gICAgICBpZiAodGhpcy5jbGlja3MgJSA1ID09IDApIHtcclxuICAgICAgICB0aGlzLmljZS5zZXRUZXh0dXJlKCdpY2UnICsgKyt0aGlzLmljZUxldmVsKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAodGhpcy5pY2VMZXZlbCA9PSA1ICYmICF0aGlzLnRyYW5zaXRpb25pbmcpIHtcclxuICAgICAgICB0aGlzLnRyYW5zaXRpb25pbmcgPSB0cnVlO1xyXG4gICAgICAgIGRvY3VtZW50LmNvb2tpZSA9IGBpY2U9MWA7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLnNjZW5lLnN0b3AoKTtcclxuICAgICAgICAgIHRoaXMub25GaW5pc2goKTtcclxuICAgICAgICAgIC8vdGhpcy5zY2VuZS5zdGFydCgnR2FtZScpO1xyXG4gICAgICAgIH0sIDUwMCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMudGV4dDEgPSB0aGlzLmFkZC50ZXh0KDEwLCAxMCwgJycsIHsgY29sb3I6ICcjMDBmZjAwJyB9KTtcclxuICAgIHRoaXMudGV4dDIgPSB0aGlzLmFkZC50ZXh0KDEwLCAyNSwgJycsIHsgY29sb3I6ICcjMDBmZjAwJyB9KTtcclxuICAgIHRoaXMudGV4dDMgPSB0aGlzLmFkZC50ZXh0KDEwLCA0MCwgJycsIHsgY29sb3I6ICcjMDBmZjAwJyB9KTtcclxuICAgIHRoaXMudGV4dDQgPSB0aGlzLmFkZC50ZXh0KDEwLCA1NSwgJycsIHsgY29sb3I6ICcjMDBmZjAwJyB9KTtcclxuICAgIHRoaXMudGV4dDUgPSB0aGlzLmFkZC50ZXh0KDEwLCA3MCwgJycsIHsgY29sb3I6ICcjMDBmZjAwJyB9KTtcclxuICB9XHJcblxyXG4gIC8vcHVibGljIHVwZGF0ZSgpOiB2b2lkIHt9XHJcbn1cclxuIiwiaW1wb3J0IHsgTWFpbk1lbnVTY2VuZSB9IGZyb20gJy4vbWFpbi1tZW51LXNjZW5lJztcclxuaW1wb3J0IHsgQm9vdFNjZW5lIH0gZnJvbSAnLi9ib290LXNjZW5lJztcclxuaW1wb3J0IHsgR2FtZVNjZW5lIH0gZnJvbSAnLi9nYW1lLXNjZW5lJztcclxuaW1wb3J0IHsgVmVybW91dGhTY2VuZSB9IGZyb20gJy4vdmVybW91dGgtc2NlbmUnO1xyXG5pbXBvcnQgeyBQb3VyU2NlbmUgfSBmcm9tICcuL3BvdXItc2NlbmUnO1xyXG5pbXBvcnQgeyBCb3VyYm9uU2NlbmUgfSBmcm9tICcuL2JvdXJib24tc2NlbmUnO1xyXG5pbXBvcnQgeyBJY2VTY2VuZSB9IGZyb20gJy4vaWNlLXNjZW5lJztcclxuaW1wb3J0IHsgT3JhbmdlU2NlbmUgfSBmcm9tICcuL29yYW5nZS1zY2VuZSc7XHJcbmltcG9ydCB7IFNoYWtlU2NlbmUgfSBmcm9tICcuL3NoYWtlLXNjZW5lJztcclxuaW1wb3J0IHsgTXVkZGxlU2NlbmUgfSBmcm9tICcuL211ZGRsZS1zY2VuZSc7XHJcbmltcG9ydCB7IEp1aWNlclNjZW5lIH0gZnJvbSAnLi9qdWljZXItc2NlbmUnO1xyXG5pbXBvcnQgeyBSZXN1bHRzU2NlbmUgfSBmcm9tICcuL3Jlc3VsdHMtc2NlbmUnO1xyXG5pbXBvcnQgeyBTdWNjZXNzU2NlbmUgfSBmcm9tICcuL3N1Y2Nlc3Mtc2NlbmUnO1xyXG5pbXBvcnQgeyBCaXR0ZXJzU2NlbmUgfSBmcm9tICcuL2JpdHRlcnMtc2NlbmUnO1xyXG5pbXBvcnQgeyBFdmVyeW9uZUluU2NlbmUgfSBmcm9tICcuL2V2ZXJ5b25lLWluLXNjZW5lJztcclxuaW1wb3J0IHtQZXJtaXNzaW9uc1NjZW5lfSBmcm9tICcuL3Blcm1pc3Npb25zLXNjZW5lJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFtcclxuICBCb290U2NlbmUsXHJcbiAgTWFpbk1lbnVTY2VuZSxcclxuICBHYW1lU2NlbmUsXHJcbiAgVmVybW91dGhTY2VuZSxcclxuICBQb3VyU2NlbmUsXHJcbiAgQm91cmJvblNjZW5lLFxyXG4gIEljZVNjZW5lLFxyXG4gIE9yYW5nZVNjZW5lLFxyXG4gIFNoYWtlU2NlbmUsXHJcbiAgTXVkZGxlU2NlbmUsXHJcbiAgSnVpY2VyU2NlbmUsXHJcbiAgUmVzdWx0c1NjZW5lLFxyXG4gIFN1Y2Nlc3NTY2VuZSxcclxuICBCaXR0ZXJzU2NlbmUsXHJcbiAgRXZlcnlvbmVJblNjZW5lLFxyXG4gIFBlcm1pc3Npb25zU2NlbmUsXHJcbl07XHJcbiIsImltcG9ydCB7IElucHV0LCBHYW1lT2JqZWN0cyB9IGZyb20gJ3BoYXNlcic7XHJcbmltcG9ydCB7IGdldEdhbWVXaWR0aCwgZ2V0R2FtZUhlaWdodCwgZHJpbmtUb0NvbG9yTWFwIH0gZnJvbSAnLi4vaGVscGVycyc7XHJcblxyXG5jb25zdCBzY2VuZUNvbmZpZzogUGhhc2VyLlR5cGVzLlNjZW5lcy5TZXR0aW5nc0NvbmZpZyA9IHtcclxuICBhY3RpdmU6IGZhbHNlLFxyXG4gIHZpc2libGU6IGZhbHNlLFxyXG4gIGtleTogJ0p1aWNlcicsXHJcbn07XHJcbmNsYXNzIEdhbWVTY2VuZUFyZ3VtZW50cyB7XHJcbiAgcHVibGljIEJvdHRsZVNwcml0ZU5hbWU6IHN0cmluZztcclxuICBwdWJsaWMgb25GaW5pc2g6IEZ1bmN0aW9uO1xyXG59XHJcbmV4cG9ydCBjbGFzcyBKdWljZXJTY2VuZSBleHRlbmRzIFBoYXNlci5TY2VuZSB7XHJcbiAgcHVibGljIHNwZWVkID0gMjAwO1xyXG4gIHB1YmxpYyBvbkZpbmlzaDogRnVuY3Rpb247XHJcblxyXG4gIHByaXZhdGUganVpY2VyVG9wOiBQaGFzZXIuR2FtZU9iamVjdHMuU3ByaXRlO1xyXG4gIHByaXZhdGUganVpY2VyQm90dG9tOiBQaGFzZXIuR2FtZU9iamVjdHMuU3ByaXRlO1xyXG4gIHByaXZhdGUgZnJ1aXQ6IFBoYXNlci5HYW1lT2JqZWN0cy5TcHJpdGU7XHJcbiAgcHJpdmF0ZSBlbXB0eUdsYXNzOiBQaGFzZXIuR2FtZU9iamVjdHMuU3ByaXRlO1xyXG5cclxuICBwcml2YXRlIHBvdXJDb3VudCA9IDA7XHJcbiAgcHJpdmF0ZSB0cmFuc2l0aW9uaW5nID0gZmFsc2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoc2NlbmVDb25maWcpO1xyXG4gIH1cclxuICBwdWJsaWMgdGV4dDE6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0O1xyXG4gIHB1YmxpYyB0ZXh0MjogUGhhc2VyLkdhbWVPYmplY3RzLlRleHQ7XHJcbiAgcHVibGljIGZydWl0U3ByaXRlTmFtZTogc3RyaW5nO1xyXG4gIHByaXZhdGUgbGlxdWlkUmVjdGFuZ2xlOiBQaGFzZXIuR2FtZU9iamVjdHMuUmVjdGFuZ2xlO1xyXG5cclxuICBwdWJsaWMgaW5pdChkYXRhOiBHYW1lU2NlbmVBcmd1bWVudHMpOiB2b2lkIHtcclxuICAgIGNvbnNvbGUubG9nKCdKdWljZXJJbml0Jyk7XHJcbiAgICB0aGlzLmZydWl0U3ByaXRlTmFtZSA9IGRhdGEuQm90dGxlU3ByaXRlTmFtZSArIFwiIDJcIjtcclxuICAgIHRoaXMub25GaW5pc2ggPSBkYXRhLm9uRmluaXNoO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNyZWF0ZSgpOiB2b2lkIHtcclxuICAgIGNvbnNvbGUubG9nKCdKdWljZXInKTtcclxuICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCB9ID0gdGhpcy5zeXMuZ2FtZS5jYW52YXM7XHJcbiAgICB0aGlzLnBvdXJDb3VudCA9IDA7XHJcbiAgICB0aGlzLnRyYW5zaXRpb25pbmcgPSBmYWxzZTtcclxuXHJcbiAgICAvLyBBZGQgYSBwbGF5ZXIgc3ByaXRlIHRoYXQgY2FuIGJlIG1vdmVkIGFyb3VuZC4gUGxhY2UgaGltIGluIHRoZSBtaWRkbGUgb2YgdGhlIHNjcmVlbi5cclxuICAgIHRoaXMuZW1wdHlHbGFzcyA9IHRoaXMuYWRkLnNwcml0ZSh3aWR0aCAvIDIsIGhlaWdodCAvIDIsICdlbXB0eWdsYXNzJykuc2V0QWxwaGEoMCk7XHJcblxyXG4gICAgY29uc29sZS5sb2coYGdsYXNzIHg6ICR7d2lkdGggLyA0fWApO1xyXG4gICAgY29uc29sZS5sb2coYGdsYXNzIHk6ICR7aGVpZ2h0IC8gMn1gKTtcclxuICAgIHRoaXMuZW1wdHlHbGFzcy5zZXRTY2FsZSgwLjUpO1xyXG4gICAgdGhpcy5lbXB0eUdsYXNzLnNjYWxlWSA9IHRoaXMuZW1wdHlHbGFzcy5zY2FsZVkgKiAwLjU7XHJcblxyXG4gICAgdGhpcy5qdWljZXJUb3AgPSB0aGlzLmFkZC5zcHJpdGUod2lkdGggLyAxLjUsIGhlaWdodCAvIDIsICdqdWljZXJ0b3AnKS5zZXRJbnRlcmFjdGl2ZSgpO1xyXG4gICAgdGhpcy5qdWljZXJUb3Auc2V0U2NhbGUoMC43KTtcclxuICAgIHRoaXMuanVpY2VyVG9wLnNldE9yaWdpbigwLjc2NzUsIDAuNzY3NSk7XHJcblxyXG4gICAgdGhpcy5qdWljZXJCb3R0b20gPSB0aGlzLmFkZC5zcHJpdGUod2lkdGggLyAxLjUsIGhlaWdodCAvIDIsICdqdWljZXJib3R0b20nKS5zZXRJbnRlcmFjdGl2ZSgpO1xyXG4gICAgdGhpcy5qdWljZXJCb3R0b20uc2V0U2NhbGUoMC43KTtcclxuICAgIHRoaXMuanVpY2VyQm90dG9tLnNldE9yaWdpbigwLjc2NzUsIDAuNzY3NSk7XHJcbiAgICB0aGlzLmZydWl0ID0gdGhpcy5hZGQuc3ByaXRlKHdpZHRoIC8gMS41LCBoZWlnaHQgLyAyLCB0aGlzLmZydWl0U3ByaXRlTmFtZSk7XHJcbiAgICB0aGlzLmZydWl0LnNldFNjYWxlKDAuNyk7XHJcbiAgICB0aGlzLmZydWl0LnNldE9yaWdpbigwLjc2NzUsIDAuNzY3NSk7XHJcblxyXG4gICAgY29uc29sZS5sb2codGhpcy5lbXB0eUdsYXNzLngpO1xyXG4gICAgY29uc29sZS5sb2codGhpcy5qdWljZXJUb3AuZGlzcGxheUhlaWdodCk7XHJcbiAgICAvL3RoaXMuanVpY2VyVG9wLnNldFBvc2l0aW9uKHRoaXMuZW1wdHlHbGFzcy54ICsgdGhpcy5qdWljZXJUb3AuZGlzcGxheUhlaWdodCAvIDQpO1xyXG4gICAgdGhpcy5qdWljZXJUb3Auc2V0U2NhbGUoMC40KTtcclxuICAgIHRoaXMuZnJ1aXQuc2V0U2NhbGUoMC40KTtcclxuICAgIC8vdGhpcy5qdWljZXJCb3R0b20uc2V0UG9zaXRpb24odGhpcy5lbXB0eUdsYXNzLnggKyB0aGlzLmp1aWNlckJvdHRvbS5kaXNwbGF5SGVpZ2h0IC8gNCk7XHJcbiAgICB0aGlzLmp1aWNlckJvdHRvbS5zZXRTY2FsZSgwLjQpO1xyXG4gICAgdGhpcy5qdWljZXJUb3Auc2V0UG9zaXRpb24oXHJcbiAgICAgIHRoaXMuZW1wdHlHbGFzcy54ICsgdGhpcy5qdWljZXJUb3AuZGlzcGxheVdpZHRoIC8gMyxcclxuICAgICAgdGhpcy5lbXB0eUdsYXNzLnkgKyB0aGlzLmp1aWNlclRvcC5kaXNwbGF5SGVpZ2h0IC8gNCxcclxuICAgICk7XHJcbiAgICB0aGlzLmp1aWNlckJvdHRvbS5zZXRQb3NpdGlvbihcclxuICAgICAgdGhpcy5lbXB0eUdsYXNzLnggKyB0aGlzLmp1aWNlckJvdHRvbS5kaXNwbGF5V2lkdGggLyAzLFxyXG4gICAgICB0aGlzLmVtcHR5R2xhc3MueSArIHRoaXMuanVpY2VyVG9wLmRpc3BsYXlIZWlnaHQgLyA0LFxyXG4gICAgKTtcclxuICAgIHRoaXMuZnJ1aXQuc2V0UG9zaXRpb24oXHJcbiAgICAgIHRoaXMuZW1wdHlHbGFzcy54ICsgdGhpcy5qdWljZXJCb3R0b20uZGlzcGxheVdpZHRoIC8gMyxcclxuICAgICAgdGhpcy5lbXB0eUdsYXNzLnkgKyB0aGlzLmp1aWNlclRvcC5kaXNwbGF5SGVpZ2h0IC8gNCxcclxuICAgICk7XHJcblxyXG4gICAgLy90aGlzLmFkZC5yZWN0YW5nbGUodGhpcy5qdWljZXJCb3R0b20ueCwgdGhpcy5qdWljZXJCb3R0b20ueSwgdGhpcy5qdWljZXJCb3R0b20uZGlzcGxheVdpZHRoLCB0aGlzLmp1aWNlckJvdHRvbS5kaXNwbGF5SGVpZ2h0LCAweEZGMDAwMCk7XHJcbiAgICAvL3RoaXMuYWRkLnJlY3RhbmdsZSh0aGlzLmp1aWNlclRvcC54LCB0aGlzLmp1aWNlclRvcC55LCB0aGlzLmp1aWNlclRvcC5kaXNwbGF5V2lkdGgsIHRoaXMuanVpY2VyVG9wLmRpc3BsYXlIZWlnaHQsIDB4MDAwMEZGKTtcclxuICAgIHRoaXMuanVpY2VyVG9wLm9uKCdwb2ludGVyb3ZlcicsICgpID0+IHtcclxuICAgICAgdGhpcy5qdWljZXJUb3Auc2V0VGludCgweGNjY2NjYyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmp1aWNlclRvcC5vbigncG9pbnRlcm91dCcsICgpID0+IHtcclxuICAgICAgdGhpcy5qdWljZXJUb3AuY2xlYXJUaW50KCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmlucHV0LnNldERyYWdnYWJsZSh0aGlzLmp1aWNlclRvcCk7XHJcblxyXG4gICAgdGhpcy5pbnB1dC5vbignZHJhZ3N0YXJ0JywgKHBvaW50ZXIsIGdhbWVPYmplY3QpID0+IHtcclxuICAgICAgZ2FtZU9iamVjdC5zZXRUaW50KDB4OTk5OTk5KTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5saXF1aWRSZWN0YW5nbGUgPSB0aGlzLmFkZFxyXG4gICAgICAucmVjdGFuZ2xlKFxyXG4gICAgICAgIHRoaXMuZW1wdHlHbGFzcy54LFxyXG4gICAgICAgIHRoaXMuZW1wdHlHbGFzcy55ICsgdGhpcy5lbXB0eUdsYXNzLmRpc3BsYXlIZWlnaHQgLyAyLFxyXG4gICAgICAgIHRoaXMuZW1wdHlHbGFzcy5kaXNwbGF5V2lkdGgsXHJcbiAgICAgICAgKyt0aGlzLnBvdXJDb3VudCxcclxuICAgICAgICBkcmlua1RvQ29sb3JNYXAuZ2V0KHRoaXMuZnJ1aXRTcHJpdGVOYW1lKSxcclxuICAgICAgKVxyXG4gICAgICAuc2V0QmxlbmRNb2RlKFBoYXNlci5CbGVuZE1vZGVzLk1VTFRJUExZKTtcclxuXHJcbiAgICB0aGlzLmlucHV0Lm9uKCdkcmFnJywgKHBvaW50ZXIsIGdhbWVPYmplY3QsIGRyYWdYLCBkcmFnWSkgPT4ge1xyXG4gICAgICAvLyBmcm9tIGhlcmU6IG5lZWQgdG8gMS4gY2FsY3VsYXRlIGFuZ2xlIGJldHdlZW4gYmFzZSBvZiBvYmplY3QgYW5kIGN1cnNvclxyXG4gICAgICAvLyAyLiByb3RhdGUgdW50aWwgdG9wIG9mIGJvdHRsZSBpcyBwb2ludGluZyB0byBjdXJzb3JcclxuICAgICAgY29uc3QgeTEgPSBnYW1lT2JqZWN0Lnk7XHJcbiAgICAgIGNvbnN0IHkyID0gdGhpcy5pbnB1dC5hY3RpdmVQb2ludGVyLnk7XHJcbiAgICAgIGNvbnN0IHgxID0gZ2FtZU9iamVjdC54O1xyXG4gICAgICBjb25zdCB4MiA9IHRoaXMuaW5wdXQuYWN0aXZlUG9pbnRlci54O1xyXG5cclxuICAgICAgY29uc3Qgc2xvcGVSYWRzID0gTWF0aC5hdGFuMih5MiAtIHkxLCB4MiAtIHgxKTtcclxuICAgICAgY29uc3QgYWRqdXN0ZWQgPSBzbG9wZVJhZHMgKyAxLjU3MDc5NjMzO1xyXG5cclxuICAgICAgdGhpcy50ZXh0MS5zZXRUZXh0KGAke2FkanVzdGVkfWApO1xyXG4gICAgICBpZiAoYWRqdXN0ZWQgPD0gMC4wMjUpIHtcclxuICAgICAgICBnYW1lT2JqZWN0LnJvdGF0aW9uID0gc2xvcGVSYWRzICsgMS41NzA3OTYzMztcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5pbnB1dC5vbignZHJhZ2VuZCcsIChwb2ludGVyLCBnYW1lT2JqZWN0KSA9PiB7XHJcbiAgICAgIGdhbWVPYmplY3QuY2xlYXJUaW50KCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBUaGlzIGlzIGEgbmljZSBoZWxwZXIgUGhhc2VyIHByb3ZpZGVzIHRvIGNyZWF0ZSBsaXN0ZW5lcnMgZm9yIHNvbWUgb2YgdGhlIG1vc3QgY29tbW9uIGtleXMuXHJcblxyXG4gICAgdGhpcy50ZXh0MSA9IHRoaXMuYWRkLnRleHQoMTAsIDEwLCAnJywgeyBjb2xvcjogJyMwMGZmMDAnIH0pO1xyXG4gICAgdGhpcy50ZXh0MiA9IHRoaXMuYWRkLnRleHQoMTAwLCAxMCwgJycsIHsgY29sb3I6ICcjMDBmZjAwJyB9KTtcclxuXHJcbiAgICB0aGlzLmp1aWNlclRvcC5zZXREZXB0aCgxKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyB1cGRhdGUoKTogdm9pZCB7XHJcbiAgICAvLyBFdmVyeSBmcmFtZSwgd2UgY3JlYXRlIGEgbmV3IHZlbG9jaXR5IGZvciB0aGUgc3ByaXRlIGJhc2VkIG9uIHdoYXQga2V5cyB0aGUgcGxheWVyIGlzIGhvbGRpbmcgZG93bi5cclxuICAgIHRoaXMudGV4dDEuc2V0VGV4dChgJHt0aGlzLmp1aWNlclRvcC5yb3RhdGlvbn1gKTtcclxuXHJcbiAgICBpZiAodGhpcy5qdWljZXJUb3Aucm90YXRpb24gPCAtMS40OSkge1xyXG4gICAgICBpZiAoIXRoaXMudHJhbnNpdGlvbmluZykge1xyXG4gICAgICAgIHRoaXMudHJhbnNpdGlvbmluZyA9IHRydWU7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLnNjZW5lLnN0b3AoKTtcclxuICAgICAgICAgIHRoaXMub25GaW5pc2goKTtcclxuICAgICAgICB9LCA1MDApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBzaWduYWxSID0gcmVxdWlyZSgnQG1pY3Jvc29mdC9zaWduYWxyJyk7XHJcbmltcG9ydCB7IE1lbnVCdXR0b24gfSBmcm9tICcuLi91aS9tZW51LWJ1dHRvbic7XHJcbmltcG9ydCAqIGFzIHF1ZXJ5c3RyaW5nIGZyb20gXCJxdWVyeS1zdHJpbmdcIjtcclxuXHJcbmNvbnN0IHNjZW5lQ29uZmlnOiBQaGFzZXIuVHlwZXMuU2NlbmVzLlNldHRpbmdzQ29uZmlnID0ge1xyXG4gIGFjdGl2ZTogZmFsc2UsXHJcbiAgdmlzaWJsZTogZmFsc2UsXHJcbiAga2V5OiAnTWFpbk1lbnUnLFxyXG59O1xyXG5jbGFzcyBHYW1lU2NlbmVBcmd1bWVudHMge1xyXG4gIHB1YmxpYyBodWJDb25uZWN0aW9uOiBzaWduYWxSLkh1YkNvbm5lY3Rpb247XHJcbn1cclxuLyoqXHJcbiAqIFRoZSBpbml0aWFsIHNjZW5lIHRoYXQgc3RhcnRzLCBzaG93cyB0aGUgc3BsYXNoIHNjcmVlbnMsIGFuZCBsb2FkcyB0aGUgbmVjZXNzYXJ5IGFzc2V0cy5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBNYWluTWVudVNjZW5lIGV4dGVuZHMgUGhhc2VyLlNjZW5lIHtcclxuICBwcml2YXRlIGh1YkNvbm5lY3Rpb246IHNpZ25hbFIuSHViQ29ubmVjdGlvbjtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKHNjZW5lQ29uZmlnKTtcclxuICB9XHJcbiAgcHVibGljIGluaXQoZGF0YTogR2FtZVNjZW5lQXJndW1lbnRzKTogdm9pZCB7XHJcbiAgICB0aGlzLmh1YkNvbm5lY3Rpb24gPSBkYXRhLmh1YkNvbm5lY3Rpb247XHJcbiAgfVxyXG4gIHB1YmxpYyBjcmVhdGUoKTogdm9pZCB7XHJcbiAgICBjb25zb2xlLmxvZygnTWFpbiBNZW51Jyk7XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLmh1YkNvbm5lY3Rpb24pO1xyXG4gICAgdGhpcy5hZGQudGV4dCgxMDAsIDE1MCwgXCJQbGVhc2UgV2FpdFwiKTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB0aGlzLmh1YkNvbm5lY3Rpb24uaW52b2tlKCdSZWdpc3RlcicsIHF1ZXJ5c3RyaW5nLnBhcnNlKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpW1wicm9vbVwiXT8/IFwic2FtcGxlXCIpLnRoZW4oZSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgICAgbmV3IE1lbnVCdXR0b24odGhpcywgMTAwLCAxNTAsICdSZWFkeSBVcCcsICgpID0+IHtcclxuICAgICAgICAgIHRoaXMuaHViQ29ubmVjdGlvbi5pbnZva2UoJ1JlYWR5VXAnKTtcclxuICAgICAgICAgIHRoaXMuc2NlbmUuc3RhcnQoJ0V2ZXJ5b25lSW4nLCB7aHViQ29ubmVjdGlvbjogdGhpcy5odWJDb25uZWN0aW9ufSk7XHJcbiAgICBcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9LCAoNTAwMCkpO1xyXG4gICAgXHJcbiAgICB0aGlzLmh1YkNvbm5lY3Rpb24ub24oJ0Fzc2lnbicsIChjdXA6IG51bWJlciwgYWN0aW9uczogbnVtYmVyW10sIHBsYXllcmNvdW50OiBudW1iZXIsIHJvdW5kOiBudW1iZXIpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coYGN1cDogJHtjdXB9IGFjdGlvbnM6ICR7YWN0aW9uc30gcGxheWVyY291bnQ6ICR7cGxheWVyY291bnR9IHJvdW5kIG51bWJlcjogJHtyb3VuZH1gKTtcclxuICAgICAgdmFyIGl0ZW0gPSB7XHJcbiAgICAgICAgcGxheWVyY291bnQ6IHBsYXllcmNvdW50LFxyXG4gICAgICAgIHJvdW5kTnVtYmVyOiByb3VuZCxcclxuICAgICAgICBjdXBOdW1iZXI6IGN1cCxcclxuICAgICAgICBhY3Rpb25zOiBhY3Rpb25zXHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5odWJDb25uZWN0aW9uLm9mZignQXNzaWduJyk7XHJcbiAgICAgIHRoaXMuc2NlbmUuc3RhcnQoJ0dhbWUnLCB7aHViQ29ubmVjdGlvbjogdGhpcy5odWJDb25uZWN0aW9uLCBzZXR1cDogaXRlbX0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdmFyIHJvb21jb2RlID0gcXVlcnlzdHJpbmcucGFyc2Uod2luZG93LmxvY2F0aW9uLnNlYXJjaCk7XHJcbiAgICB2YXIgcm9vbSA9IHJvb21jb2RlW1wicm9vbVwiXTtcclxuICAgIHRoaXMuYWRkXHJcbiAgICAgIC50ZXh0KDEwMCwgNTAsIGBUZWFtICR7cm9vbX1gLCB7XHJcbiAgICAgICAgY29sb3I6ICcjRkZGRkZGJyxcclxuICAgICAgfSlcclxuICAgICAgLnNldEZvbnRTaXplKDI0KTtcclxuXHJcblxyXG4vKlxyXG4gICAgbmV3IE1lbnVCdXR0b24odGhpcywgMTAwLCAyNTAsICdJT1MgQ0xJQ0sgSEVSRSBGSVJTVCcsICgpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coJ3NldHRpbmdzIGJ1dHRvbiBjbGlja2VkJyk7XHJcbiAgICAgIERldmljZU1vdGlvbkV2ZW50LnJlcXVlc3RQZXJtaXNzaW9uKCkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICBpZiAocmVzcG9uc2UgPT0gJ2dyYW50ZWQnKSB7XHJcbiAgICAgICAgICAvLyBBZGQgYSBsaXN0ZW5lciB0byBnZXQgc21hcnRwaG9uZSBvcmllbnRhdGlvblxyXG4gICAgICAgICAgLy8gaW4gdGhlIGFscGhhLWJldGEtZ2FtbWEgYXhlcyAodW5pdHMgaW4gZGVncmVlcylcclxuICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdkZXZpY2VvcmllbnRhdGlvbicsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgdXBkYXRlUmF0ZSA9IDEgLyA2MDtcclxuICAgICAgICAgICAgLy8gRXhwb3NlIGVhY2ggb3JpZW50YXRpb24gYW5nbGUgaW4gYSBtb3JlIHJlYWRhYmxlIHdheVxyXG4gICAgICAgICAgICBsZXQgcm90YXRpb25fZGVncmVlcyA9IGV2ZW50LmFscGhhO1xyXG4gICAgICAgICAgICBsZXQgZnJvbnRUb0JhY2tfZGVncmVlcyA9IGV2ZW50LmJldGE7XHJcbiAgICAgICAgICAgIGxldCBsZWZ0VG9SaWdodF9kZWdyZWVzID0gZXZlbnQuZ2FtbWE7XHJcblxyXG4gICAgICAgICAgICBuZXcgTWVudUJ1dHRvbih0aGlzLCAxMDAsIDI1MCwgJ2NsaWNrZWQnLCAoKSA9PiBjb25zb2xlLmxvZygnaGVscCBidXR0b24gY2xpY2tlZCcpKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9KTsqL1xyXG5cclxuICAgIC8vbmV3IE1lbnVCdXR0b24odGhpcywgMTAwLCAzNTAsICdIZWxwJywgKCkgPT4gY29uc29sZS5sb2coJ2hlbHAgYnV0dG9uIGNsaWNrZWQnKSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IElucHV0LCBHYW1lT2JqZWN0cywgQmxlbmRNb2RlcyB9IGZyb20gJ3BoYXNlcic7XHJcbmltcG9ydCB7IGdldEdhbWVXaWR0aCwgZ2V0R2FtZUhlaWdodCwgZHJpbmtUb0NvbG9yTWFwIH0gZnJvbSAnLi4vaGVscGVycyc7XHJcblxyXG5jb25zdCBzY2VuZUNvbmZpZzogUGhhc2VyLlR5cGVzLlNjZW5lcy5TZXR0aW5nc0NvbmZpZyA9IHtcclxuICBhY3RpdmU6IGZhbHNlLFxyXG4gIHZpc2libGU6IGZhbHNlLFxyXG4gIGtleTogJ011ZGRsZSBEcmluaycsXHJcbn07XHJcbmNsYXNzIEdhbWVTY2VuZUFyZ3VtZW50cyB7XHJcbiAgcHVibGljIG9uRmluaXNoOiBGdW5jdGlvbjtcclxufVxyXG5leHBvcnQgY2xhc3MgTXVkZGxlU2NlbmUgZXh0ZW5kcyBQaGFzZXIuU2NlbmUge1xyXG4gIHB1YmxpYyBzcGVlZCA9IDIwMDtcclxuICBwdWJsaWMgb25GaW5pc2g6IEZ1bmN0aW9uO1xyXG4gIHByaXZhdGUgZW1wdHlHbGFzczogUGhhc2VyLkdhbWVPYmplY3RzLlNwcml0ZTtcclxuXHJcbiAgcHJpdmF0ZSBjdXJzb3JLZXlzOiBQaGFzZXIuVHlwZXMuSW5wdXQuS2V5Ym9hcmQuQ3Vyc29yS2V5cztcclxuICBwcml2YXRlIG11ZGRsZXI6IFBoYXNlci5HYW1lT2JqZWN0cy5TcHJpdGU7XHJcbiAgcHJpdmF0ZSBtdWRkbGVDb250YWluZXJSZWN0OiBQaGFzZXIuR2FtZU9iamVjdHMuUmVjdGFuZ2xlO1xyXG4gIHByaXZhdGUgbW92aW5nVGhyZXNob2xkUmVjdDogUGhhc2VyLkdhbWVPYmplY3RzLlJlY3RhbmdsZTtcclxuICBwcml2YXRlIGZpbGxSZWN0OiBQaGFzZXIuR2FtZU9iamVjdHMuUmVjdGFuZ2xlO1xyXG5cclxuICBwcml2YXRlIGNvbnRlbnRzOiBzdHJpbmdbXSA9IFtdO1xyXG4gIHByaXZhdGUgZ2xhc3NGaWxsZXJzOiBQaGFzZXIuR2FtZU9iamVjdHMuU3ByaXRlW10gPSBbXTtcclxuXHJcbiAgcHJpdmF0ZSBpc1BvdXJpbmcgPSAwO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKHNjZW5lQ29uZmlnKTtcclxuICB9XHJcbiAgcHVibGljIHRleHQxOiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dDtcclxuICBwdWJsaWMgdGV4dDI6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0O1xyXG4gIHB1YmxpYyB0ZXh0MzogUGhhc2VyLkdhbWVPYmplY3RzLlRleHQ7XHJcbiAgcHVibGljIHRleHQ0OiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dDtcclxuICBwdWJsaWMgdGV4dDU6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0O1xyXG5cclxuICBwdWJsaWMgZXJhc2VDb3VudCA9IDA7XHJcbiAgcHVibGljIGljZUxldmVsID0gMDtcclxuICBwcml2YXRlIHRyYW5zaXRpb25pbmcgPSBmYWxzZTtcclxuICBwcml2YXRlIHN0YXJ0UG9zaXRpb24gPSB0cnVlO1xyXG5cclxuICBwdWJsaWMgaW5pdChkYXRhOkdhbWVTY2VuZUFyZ3VtZW50cyl7XHJcbiAgICB0aGlzLm9uRmluaXNoID0gZGF0YS5vbkZpbmlzaDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjcmVhdGUoKTogdm9pZCB7XHJcbiAgICBjb25zb2xlLmxvZygnTXVkZGxlJyk7XHJcbiAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IHRoaXMuc3lzLmdhbWUuY2FudmFzO1xyXG4gICAgdGhpcy5lbXB0eUdsYXNzID0gdGhpcy5hZGQuc3ByaXRlKHdpZHRoIC8gMiwgaGVpZ2h0IC8gMiwgJ2VtcHR5Z2xhc3MnKTtcclxuXHJcbiAgICB0aGlzLnRyYW5zaXRpb25pbmcgPSBmYWxzZTtcclxuICAgIHRoaXMuZXJhc2VDb3VudCA9IDA7XHJcbiAgICB0aGlzLmljZUxldmVsID0gMDtcclxuICAgIHRoaXMuc3RhcnRQb3NpdGlvbiA9IHRydWU7XHJcbiAgICAvLyBBZGQgYSBwbGF5ZXIgc3ByaXRlIHRoYXQgY2FuIGJlIG1vdmVkIGFyb3VuZC4gUGxhY2UgaGltIGluIHRoZSBtaWRkbGUgb2YgdGhlIHNjcmVlbi5cclxuXHJcbiAgICB0aGlzLm11ZGRsZXIgPSB0aGlzLmFkZFxyXG4gICAgICAuc3ByaXRlKHdpZHRoIC8gMiwgaGVpZ2h0IC8gMiAtIHRoaXMuZW1wdHlHbGFzcy5kaXNwbGF5SGVpZ2h0IC8gMywgJ211ZGRsZXInKVxyXG4gICAgICAuc2V0SW50ZXJhY3RpdmUoKVxyXG4gICAgICAuc2V0RGVwdGgoMSlcclxuICAgICAgLnNldFNjYWxlKDAuNSlcclxuICAgICAgLnNldEFuZ2xlKDE4MCk7XHJcbiAgICB0aGlzLm11ZGRsZUNvbnRhaW5lclJlY3QgPSB0aGlzLmFkZFxyXG4gICAgICAucmVjdGFuZ2xlKFxyXG4gICAgICAgIHRoaXMuZW1wdHlHbGFzcy54LFxyXG4gICAgICAgIHRoaXMuZW1wdHlHbGFzcy55LFxyXG4gICAgICAgIHRoaXMuZW1wdHlHbGFzcy5kaXNwbGF5V2lkdGgsXHJcbiAgICAgICAgdGhpcy5lbXB0eUdsYXNzLmRpc3BsYXlIZWlnaHQsXHJcbiAgICAgICAgMHgwMGZmMDAsXHJcbiAgICAgIClcclxuICAgICAgLnNldFNjYWxlKDAuNylcclxuICAgICAgLnNldERlcHRoKDIpXHJcbiAgICAgIC5zZXRBbHBoYSgwLjUpO1xyXG4gICAgdGhpcy5tb3ZpbmdUaHJlc2hvbGRSZWN0ID0gdGhpcy5hZGRcclxuICAgICAgLnJlY3RhbmdsZShcclxuICAgICAgICB0aGlzLmVtcHR5R2xhc3MueCxcclxuICAgICAgICB0aGlzLmVtcHR5R2xhc3MueSArIGhlaWdodCAvIDE1LFxyXG4gICAgICAgIHRoaXMuZW1wdHlHbGFzcy5kaXNwbGF5V2lkdGgsXHJcbiAgICAgICAgaGVpZ2h0IC8gNDAsXHJcbiAgICAgICAgMHgwMDAwZmYsXHJcbiAgICAgIClcclxuICAgICAgLnNldERlcHRoKDIpXHJcbiAgICAgIC5zZXRBbHBoYSgwLjUpO1xyXG5cclxuICAgIHRoaXMuZmlsbFJlY3QgPSB0aGlzLmFkZFxyXG4gICAgICAucmVjdGFuZ2xlKHRoaXMuZW1wdHlHbGFzcy54LCB0aGlzLmVtcHR5R2xhc3MuZ2V0Qm90dG9tTGVmdCgpLnksIHRoaXMuZW1wdHlHbGFzcy5kaXNwbGF5V2lkdGgsIDEsIDB4ZmYwMDAwKVxyXG4gICAgICAuc2V0RGVwdGgoMilcclxuICAgICAgLnNldEFscGhhKDAuNSlcclxuICAgICAgLnNldEJsZW5kTW9kZShQaGFzZXIuQmxlbmRNb2Rlcy5NVUxUSVBMWSk7XHJcblxyXG4gICAgY29uc3QgY292ZXIgPSB0aGlzLm1ha2UuaW1hZ2Uoe1xyXG4gICAgICBrZXk6ICdvcmFuZ2UnLFxyXG4gICAgICBhZGQ6IGZhbHNlLFxyXG4gICAgfSk7XHJcbiAgICBjb3Zlci5zZXRTY2FsZSgwLjcpO1xyXG4gICAgY29uc29sZS5sb2coYGNvdmVyOiAke2NvdmVyLnh9ICR7Y292ZXIueX1gKTtcclxuICAgIC8vY292ZXIuc2V0UG9zaXRpb24odGhpcy5vcmFuZ2UueCwgdGhpcy5vcmFuZ2UueSk7XHJcbiAgICBjb3Zlci5zZXREZXB0aCgxKTtcclxuICAgIC8vY292ZXIuc2V0T3JpZ2luKDAsIDApO1xyXG4gICAgLy90aGlzLnJ0LnNldE9yaWdpbigwLjUsIDAuNSk7XHJcblxyXG4gICAgdGhpcy5pbnB1dC5vbignZHJhZ3N0YXJ0JywgKHBvaW50ZXIsIGdhbWVPYmplY3QpID0+IHtcclxuICAgICAgZ2FtZU9iamVjdC5zZXRUaW50KDB4OTk5OTk5KTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuaW5wdXQub24oJ2RyYWdlbmQnLCAocG9pbnRlciwgZ2FtZU9iamVjdCkgPT4ge1xyXG4gICAgICBnYW1lT2JqZWN0LmNsZWFyVGludCgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5pbnB1dC5zZXREcmFnZ2FibGUodGhpcy5tdWRkbGVyKTtcclxuXHJcbiAgICB0aGlzLmlucHV0Lm9uKCdwb2ludGVydXAnLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMudGV4dDEuc2V0VGV4dChgzrg6ICR7dGhpcy5pbnB1dC5hY3RpdmVQb2ludGVyLmdldEFuZ2xlKCl9YCk7XHJcbiAgICAgIHRoaXMudGV4dDIuc2V0VGV4dChgeDogJHt0aGlzLmlucHV0LmFjdGl2ZVBvaW50ZXIuZ2V0RGlzdGFuY2VYKCl9YCk7XHJcbiAgICAgIHRoaXMudGV4dDMuc2V0VGV4dChgeTogJHt0aGlzLmlucHV0LmFjdGl2ZVBvaW50ZXIuZ2V0RGlzdGFuY2VZKCl9YCk7XHJcbiAgICAgIHRoaXMudGV4dDQuc2V0VGV4dChgZDogJHt0aGlzLmlucHV0LmFjdGl2ZVBvaW50ZXIuZ2V0RGlzdGFuY2UoKX1gKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuaW5wdXQub24oJ3BvaW50ZXJkb3duJywgKCkgPT4ge30pO1xyXG5cclxuICAgIHRoaXMuaW5wdXQub24oJ2RyYWcnLCAocG9pbnRlciwgZ2FtZU9iamVjdCwgZHJhZ1gsIGRyYWdZKSA9PiB7XHJcbiAgICAgIGNvbnN0IHN0eCA9IGdhbWVPYmplY3QueDtcclxuICAgICAgY29uc3Qgc3R5ID0gZ2FtZU9iamVjdC55O1xyXG4gICAgICBnYW1lT2JqZWN0LnkgPSBkcmFnWTtcclxuICAgICAgZ2FtZU9iamVjdC54ID0gZHJhZ1g7XHJcblxyXG4gICAgICAvLyBrZWVwaW5nIHRoZSBtdWRkbGVyIGluIHRoZSBnbGFzc1xyXG4gICAgICBjb25zdCBibEMgPSB0aGlzLm11ZGRsZUNvbnRhaW5lclJlY3QuZ2V0Qm90dG9tTGVmdCgpO1xyXG4gICAgICBjb25zdCBickMgPSB0aGlzLm11ZGRsZUNvbnRhaW5lclJlY3QuZ2V0Qm90dG9tUmlnaHQoKTtcclxuICAgICAgY29uc3QgdHJDID0gdGhpcy5tdWRkbGVDb250YWluZXJSZWN0LmdldFRvcFJpZ2h0KCk7XHJcbiAgICAgIGNvbnN0IGJsTSA9IHRoaXMubXVkZGxlci5nZXRUb3BSaWdodCgpO1xyXG4gICAgICBjb25zdCBick0gPSB0aGlzLm11ZGRsZXIuZ2V0VG9wTGVmdCgpO1xyXG4gICAgICBjb25zb2xlLmxvZyhibE0ueCk7XHJcbiAgICAgIGNvbnNvbGUubG9nKGJsQy54KTtcclxuICAgICAgaWYgKGJsTS54IDwgYmxDLngpIHtcclxuICAgICAgICBnYW1lT2JqZWN0LnkgPSBzdHk7XHJcbiAgICAgICAgZ2FtZU9iamVjdC54ID0gc3R4O1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChick0ueCA+IGJyQy54KSB7XHJcbiAgICAgICAgZ2FtZU9iamVjdC55ID0gc3R5O1xyXG4gICAgICAgIGdhbWVPYmplY3QueCA9IHN0eDtcclxuICAgICAgfVxyXG4gICAgICBpZiAoYnJNLnkgPiBickMueSkge1xyXG4gICAgICAgIGdhbWVPYmplY3QueSA9IHN0eTtcclxuICAgICAgICBnYW1lT2JqZWN0LnggPSBzdHg7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGJsTS55IDwgdHJDLnkpIHtcclxuICAgICAgICBnYW1lT2JqZWN0LnkgPSBzdHk7XHJcbiAgICAgICAgZ2FtZU9iamVjdC54ID0gc3R4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBjaGVja2luZyBpZiBpdCBwcm9wZXJseSBtb3ZlcyB1cCBhbmQgZG93blxyXG4gICAgICBpZiAoYmxNLnkgPiB0aGlzLm1vdmluZ1RocmVzaG9sZFJlY3QuZ2V0Qm90dG9tTGVmdCgpLnkgJiYgIXRoaXMuc3RhcnRQb3NpdGlvbikge1xyXG4gICAgICAgIHRoaXMuc3RhcnRQb3NpdGlvbiA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5pY2VMZXZlbCArPSAxO1xyXG4gICAgICAgIHRoaXMudGV4dDEuc2V0VGV4dChgJHt0aGlzLmljZUxldmVsfWApO1xyXG4gICAgICAgIHRoaXMuZmlsbFJlY3QuZGlzcGxheUhlaWdodCArPSAxNTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoYmxNLnkgPCB0aGlzLm1vdmluZ1RocmVzaG9sZFJlY3QuZ2V0VG9wTGVmdCgpLnkgJiYgdGhpcy5zdGFydFBvc2l0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5zdGFydFBvc2l0aW9uID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy50ZXh0MS5zZXRUZXh0KGAke3RoaXMuaWNlTGV2ZWx9YCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIHRyYW5zaXRpb25cclxuICAgICAgaWYgKHRoaXMuaWNlTGV2ZWwgPiA0ICYmIHRoaXMudHJhbnNpdGlvbmluZyA9PSBmYWxzZSkge1xyXG4gICAgICAgIHRoaXMudHJhbnNpdGlvbmluZyA9IHRydWU7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLnNjZW5lLnN0b3AoKTtcclxuICAgICAgICAgIHRoaXMub25GaW5pc2goKTtcclxuICAgICAgICB9LCA1MDApO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLnRleHQxID0gdGhpcy5hZGQudGV4dCgxMCwgMTAsICcnLCB7IGNvbG9yOiAnIzAwZmYwMCcgfSk7XHJcbiAgICB0aGlzLnRleHQyID0gdGhpcy5hZGQudGV4dCgxMCwgMjUsICcnLCB7IGNvbG9yOiAnIzAwZmYwMCcgfSk7XHJcbiAgICB0aGlzLnRleHQzID0gdGhpcy5hZGQudGV4dCgxMCwgNDAsICcnLCB7IGNvbG9yOiAnIzAwZmYwMCcgfSk7XHJcbiAgICB0aGlzLnRleHQ0ID0gdGhpcy5hZGQudGV4dCgxMCwgNTUsICcnLCB7IGNvbG9yOiAnIzAwZmYwMCcgfSk7XHJcbiAgICB0aGlzLnRleHQ1ID0gdGhpcy5hZGQudGV4dCgxMCwgNzAsICcnLCB7IGNvbG9yOiAnIzAwZmYwMCcgfSk7XHJcbiAgICB0aGlzLnRleHQxLnNldFRleHQoYCR7dGhpcy5pY2VMZXZlbH1gKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyB1cGRhdGUoKTogdm9pZCB7fVxyXG59XHJcbiIsImltcG9ydCB7IElucHV0LCBHYW1lT2JqZWN0cywgQmxlbmRNb2RlcyB9IGZyb20gJ3BoYXNlcic7XHJcbmltcG9ydCB7IGdldEdhbWVXaWR0aCwgZ2V0R2FtZUhlaWdodCwgZHJpbmtUb0NvbG9yTWFwIH0gZnJvbSAnLi4vaGVscGVycyc7XHJcblxyXG5jb25zdCBzY2VuZUNvbmZpZzogUGhhc2VyLlR5cGVzLlNjZW5lcy5TZXR0aW5nc0NvbmZpZyA9IHtcclxuICBhY3RpdmU6IGZhbHNlLFxyXG4gIHZpc2libGU6IGZhbHNlLFxyXG4gIGtleTogJ09yYW5nZSBQZWVsJyxcclxufTtcclxuXHJcbmNsYXNzIEdhbWVTY2VuZUFyZ3VtZW50cyB7XHJcbiAgcHVibGljIG9uRmluaXNoOiBGdW5jdGlvbjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIE9yYW5nZVNjZW5lIGV4dGVuZHMgUGhhc2VyLlNjZW5lIHtcclxuICBwdWJsaWMgc3BlZWQgPSAyMDA7XHJcbiAgcHVibGljIG9uRmluaXNoOiBGdW5jdGlvbjtcclxuXHJcbiAgcHJpdmF0ZSBjdXJzb3JLZXlzOiBQaGFzZXIuVHlwZXMuSW5wdXQuS2V5Ym9hcmQuQ3Vyc29yS2V5cztcclxuICBwcml2YXRlIG9yYW5nZTogUGhhc2VyLkdhbWVPYmplY3RzLlNwcml0ZTtcclxuICBwcml2YXRlIG9yYW5nZVBlZWxlZDogUGhhc2VyLkdhbWVPYmplY3RzLlNwcml0ZTtcclxuICBwcml2YXRlIGNhbmVsbGU6IFBoYXNlci5HYW1lT2JqZWN0cy5TcHJpdGU7XHJcbiAgcHJpdmF0ZSBibGFkZVJlY3Q6IFBoYXNlci5HYW1lT2JqZWN0cy5SZWN0YW5nbGU7XHJcblxyXG4gIHByaXZhdGUgY29udGVudHM6IHN0cmluZ1tdID0gW107XHJcbiAgcHJpdmF0ZSBnbGFzc0ZpbGxlcnM6IFBoYXNlci5HYW1lT2JqZWN0cy5TcHJpdGVbXSA9IFtdO1xyXG5cclxuICBwcml2YXRlIGlzUG91cmluZyA9IDA7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoc2NlbmVDb25maWcpO1xyXG4gIH1cclxuICBwdWJsaWMgdGV4dDE6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0O1xyXG4gIHB1YmxpYyB0ZXh0MjogUGhhc2VyLkdhbWVPYmplY3RzLlRleHQ7XHJcbiAgcHVibGljIHRleHQzOiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dDtcclxuICBwdWJsaWMgdGV4dDQ6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0O1xyXG4gIHB1YmxpYyB0ZXh0NTogUGhhc2VyLkdhbWVPYmplY3RzLlRleHQ7XHJcbiAgcHVibGljIHJ0OiBQaGFzZXIuR2FtZU9iamVjdHMuUmVuZGVyVGV4dHVyZTtcclxuICBwdWJsaWMgZXJhc2VDb3VudCA9IDA7XHJcbiAgcHVibGljIGljZUxldmVsID0gMDtcclxuICBwcml2YXRlIHRyYW5zaXRpb25pbmcgPSBmYWxzZTtcclxuXHJcbiAgcHVibGljIGluaXQoZGF0YTogR2FtZVNjZW5lQXJndW1lbnRzKTogdm9pZHtcclxuICAgIHRoaXMub25GaW5pc2ggPSBkYXRhLm9uRmluaXNoO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNyZWF0ZSgpOiB2b2lkIHtcclxuICAgIGNvbnNvbGUubG9nKCdPcmFuZ2UnKTtcclxuICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCB9ID0gdGhpcy5zeXMuZ2FtZS5jYW52YXM7XHJcbiAgICB0aGlzLnRyYW5zaXRpb25pbmcgPSBmYWxzZTtcclxuICAgIHRoaXMuZXJhc2VDb3VudCA9IDA7XHJcbiAgICB0aGlzLmljZUxldmVsID0gMDtcclxuICAgIC8vIEFkZCBhIHBsYXllciBzcHJpdGUgdGhhdCBjYW4gYmUgbW92ZWQgYXJvdW5kLiBQbGFjZSBoaW0gaW4gdGhlIG1pZGRsZSBvZiB0aGUgc2NyZWVuLlxyXG4gICAgdGhpcy5vcmFuZ2VQZWVsZWQgPSB0aGlzLmFkZC5zcHJpdGUod2lkdGggLyAyLCBoZWlnaHQgLyA0LCAnb3JhbmdlJyk7XHJcbiAgICB0aGlzLm9yYW5nZVBlZWxlZC5zZXRTY2FsZSgwLjcpO1xyXG4gICAgdGhpcy5vcmFuZ2UgPSB0aGlzLmFkZC5zcHJpdGUod2lkdGggLyAyLCBoZWlnaHQgLyA0LCAnb3JhbmdlaW5zaWRlJyk7XHJcbiAgICB0aGlzLm9yYW5nZS5zZXRTY2FsZSgwLjcpO1xyXG5cclxuICAgIHRoaXMuY2FuZWxsZSA9IHRoaXMuYWRkXHJcbiAgICAgIC5zcHJpdGUoKDMgKiB3aWR0aCkgLyA0LCAoMyAqIGhlaWdodCkgLyA0LCAnY2FuZWxsZWtuaWZlJylcclxuICAgICAgLnNldEludGVyYWN0aXZlKClcclxuICAgICAgLnNldERlcHRoKDEpO1xyXG4gICAgdGhpcy5ibGFkZVJlY3QgPSB0aGlzLmFkZFxyXG4gICAgICAucmVjdGFuZ2xlKFxyXG4gICAgICAgIHRoaXMuY2FuZWxsZS54ICsgdGhpcy5jYW5lbGxlLmRpc3BsYXlXaWR0aCAvIDgsXHJcbiAgICAgICAgdGhpcy5jYW5lbGxlLnkgLSB0aGlzLmNhbmVsbGUuZGlzcGxheUhlaWdodCAvIDIgKyB0aGlzLmNhbmVsbGUuZGlzcGxheUhlaWdodCAqICgxIC8gNDApLFxyXG4gICAgICAgIHRoaXMuY2FuZWxsZS5kaXNwbGF5V2lkdGggKiAoMyAvIDQpLFxyXG4gICAgICAgIHRoaXMuY2FuZWxsZS5kaXNwbGF5SGVpZ2h0ICogKDEgLyAyMCksXHJcbiAgICAgICAgMHgwMGZmMDAsXHJcbiAgICAgIClcclxuICAgICAgLnNldERlcHRoKDIpXHJcbiAgICAgIC5zZXRBbHBoYSgwLjUpO1xyXG5cclxuICAgIGNvbnN0IGNvdmVyID0gdGhpcy5tYWtlLmltYWdlKHtcclxuICAgICAga2V5OiAnb3JhbmdlJyxcclxuICAgICAgYWRkOiBmYWxzZSxcclxuICAgIH0pO1xyXG4gICAgY292ZXIuc2V0U2NhbGUoMC43KTtcclxuICAgIGNvbnNvbGUubG9nKGBjb3ZlcjogJHtjb3Zlci54fSAke2NvdmVyLnl9YCk7XHJcbiAgICAvL2NvdmVyLnNldFBvc2l0aW9uKHRoaXMub3JhbmdlLngsIHRoaXMub3JhbmdlLnkpO1xyXG4gICAgY292ZXIuc2V0RGVwdGgoMSk7XHJcbiAgICAvL2NvdmVyLnNldE9yaWdpbigwLCAwKTtcclxuICAgIHRoaXMucnQgPSB0aGlzLmFkZC5yZW5kZXJUZXh0dXJlKFxyXG4gICAgICB0aGlzLm9yYW5nZS5nZXRUb3BMZWZ0KCkueCxcclxuICAgICAgdGhpcy5vcmFuZ2UuZ2V0VG9wTGVmdCgpLnksXHJcbiAgICAgIHRoaXMub3JhbmdlUGVlbGVkLmRpc3BsYXlXaWR0aCxcclxuICAgICAgdGhpcy5vcmFuZ2VQZWVsZWQuZGlzcGxheUhlaWdodCxcclxuICAgICk7XHJcbiAgICAvL3RoaXMucnQuc2V0T3JpZ2luKDAuNSwgMC41KTtcclxuICAgIGNvbnNvbGUubG9nKGBydDogJHt0aGlzLnJ0Lnh9ICR7dGhpcy5ydC55fWApO1xyXG4gICAgdGhpcy5ydC5zZXRQb3NpdGlvbih0aGlzLm9yYW5nZVBlZWxlZC5nZXRUb3BMZWZ0KCkueCwgdGhpcy5vcmFuZ2VQZWVsZWQuZ2V0VG9wTGVmdCgpLnkpO1xyXG4gICAgLy90aGlzLnJ0LnNldFRpbnQoMHgwMEZGMDApO1xyXG4gICAgdGhpcy5ydC5kcmF3KGNvdmVyLCB0aGlzLm9yYW5nZVBlZWxlZC5kaXNwbGF5V2lkdGggLyAyLCB0aGlzLm9yYW5nZVBlZWxlZC5kaXNwbGF5SGVpZ2h0IC8gMik7IC8vLCB3aWR0aCAqIDAuNSwgaGVpZ2h0ICogMC41KVxyXG4gICAgY29uc29sZS5sb2coYHJ0OiAke3RoaXMucnQueH0gJHt0aGlzLnJ0Lnl9YCk7XHJcbiAgICBjb25zb2xlLmxvZyhgb3JhbmdlOiAke3RoaXMub3JhbmdlLnh9ICR7dGhpcy5vcmFuZ2UueX1gKTtcclxuICAgIGNvbnNvbGUubG9nKGBvcmFuZ2VQZWVsZWQ6ICR7dGhpcy5vcmFuZ2VQZWVsZWQueH0gJHt0aGlzLm9yYW5nZVBlZWxlZC55fWApO1xyXG5cclxuICAgIHRoaXMuaW5wdXQub24oJ2RyYWdzdGFydCcsIChwb2ludGVyLCBnYW1lT2JqZWN0KSA9PiB7XHJcbiAgICAgIGdhbWVPYmplY3Quc2V0VGludCgweDk5OTk5OSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmlucHV0Lm9uKCdkcmFnZW5kJywgKHBvaW50ZXIsIGdhbWVPYmplY3QpID0+IHtcclxuICAgICAgZ2FtZU9iamVjdC5jbGVhclRpbnQoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuaW5wdXQuc2V0RHJhZ2dhYmxlKHRoaXMuY2FuZWxsZSk7XHJcblxyXG4gICAgdGhpcy5pbnB1dC5vbigncG9pbnRlcnVwJywgKCkgPT4ge1xyXG4gICAgICB0aGlzLnRleHQxLnNldFRleHQoYM64OiAke3RoaXMuaW5wdXQuYWN0aXZlUG9pbnRlci5nZXRBbmdsZSgpfWApO1xyXG4gICAgICB0aGlzLnRleHQyLnNldFRleHQoYHg6ICR7dGhpcy5pbnB1dC5hY3RpdmVQb2ludGVyLmdldERpc3RhbmNlWCgpfWApO1xyXG4gICAgICB0aGlzLnRleHQzLnNldFRleHQoYHk6ICR7dGhpcy5pbnB1dC5hY3RpdmVQb2ludGVyLmdldERpc3RhbmNlWSgpfWApO1xyXG4gICAgICB0aGlzLnRleHQ0LnNldFRleHQoYGQ6ICR7dGhpcy5pbnB1dC5hY3RpdmVQb2ludGVyLmdldERpc3RhbmNlKCl9YCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmlucHV0Lm9uKCdwb2ludGVyZG93bicsICgpID0+IHt9KTtcclxuXHJcbiAgICB0aGlzLmlucHV0Lm9uKCdkcmFnJywgKHBvaW50ZXIsIGdhbWVPYmplY3QsIGRyYWdYLCBkcmFnWSkgPT4ge1xyXG4gICAgICAvLyBmcm9tIGhlcmU6IG5lZWQgdG8gMS4gY2FsY3VsYXRlIGFuZ2xlIGJldHdlZW4gYmFzZSBvZiBvYmplY3QgYW5kIGN1cnNvclxyXG4gICAgICAvLyAyLiByb3RhdGUgdW50aWwgdG9wIG9mIGJvdHRsZSBpcyBwb2ludGluZyB0byBjdXJzb3JcclxuXHJcbiAgICAgIGdhbWVPYmplY3QueSA9IGRyYWdZO1xyXG4gICAgICBnYW1lT2JqZWN0LnggPSBkcmFnWDtcclxuICAgICAgdGhpcy5ibGFkZVJlY3Quc2V0UG9zaXRpb24oXHJcbiAgICAgICAgZHJhZ1ggKyB0aGlzLmNhbmVsbGUuZGlzcGxheVdpZHRoIC8gOCxcclxuICAgICAgICBkcmFnWSAtIHRoaXMuY2FuZWxsZS5kaXNwbGF5SGVpZ2h0IC8gMiArIHRoaXMuY2FuZWxsZS5kaXNwbGF5SGVpZ2h0ICogKDEgLyA0MCksXHJcbiAgICAgICk7XHJcbiAgICAgIHRoaXMudGV4dDIuc2V0VGV4dChgZHJhZ1k6ICR7ZHJhZ1l9YCk7XHJcbiAgICAgIHRoaXMudGV4dDMuc2V0VGV4dChgeTogJHt0aGlzLmlucHV0LmFjdGl2ZVBvaW50ZXIucHJldlBvc2l0aW9uLnl9YCk7XHJcbiAgICAgIGlmIChcclxuICAgICAgICB0aGlzLmlucHV0LmFjdGl2ZVBvaW50ZXIucHJldlBvc2l0aW9uLnkgPCB0aGlzLmlucHV0LmFjdGl2ZVBvaW50ZXIueSAmJlxyXG4gICAgICAgIHRoaXMub3JhbmdlLmdldEJvdW5kcygpLmNvbnRhaW5zKHRoaXMuYmxhZGVSZWN0LngsIHRoaXMuYmxhZGVSZWN0LnkpXHJcbiAgICAgICkge1xyXG4gICAgICAgIGNvbnN0IHggPSB0aGlzLmJsYWRlUmVjdC54IC0gdGhpcy5ydC54O1xyXG4gICAgICAgIGNvbnN0IHkgPSB0aGlzLmJsYWRlUmVjdC55IC0gdGhpcy5ydC55O1xyXG4gICAgICAgIHRoaXMucnQuZXJhc2UoXHJcbiAgICAgICAgICB0aGlzLmJsYWRlUmVjdCxcclxuICAgICAgICAgIHgsXHJcbiAgICAgICAgICB5LFxyXG4gICAgICAgICAgLy90aGlzLmJsYWRlUmVjdC54IC0gdGhpcy5ibGFkZVJlY3QuZGlzcGxheVdpZHRoIC8gMixcclxuICAgICAgICAgIC8vdGhpcy5ibGFkZVJlY3QueSAtIHRoaXMuYmxhZGVSZWN0LmRpc3BsYXlIZWlnaHQsXHJcbiAgICAgICAgKTtcclxuICAgICAgICB0aGlzLmVyYXNlQ291bnQrKztcclxuICAgICAgICBpZiAodGhpcy5lcmFzZUNvdW50ID49IDEwMCAmJiAhdGhpcy50cmFuc2l0aW9uaW5nKSB7XHJcbiAgICAgICAgICB0aGlzLnRyYW5zaXRpb25pbmcgPSB0cnVlO1xyXG4gICAgICAgICAgZG9jdW1lbnQuY29va2llID0gYG9yYW5nZT0xYDtcclxuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNjZW5lLnN0b3AoKTtcclxuICAgICAgICAgICAgdGhpcy5vbkZpbmlzaCgpO1xyXG4gICAgICAgICAgfSwgNTAwKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMudGV4dDEgPSB0aGlzLmFkZC50ZXh0KDEwLCAxMCwgJycsIHsgY29sb3I6ICcjMDBmZjAwJyB9KTtcclxuICAgIHRoaXMudGV4dDIgPSB0aGlzLmFkZC50ZXh0KDEwLCAyNSwgJycsIHsgY29sb3I6ICcjMDBmZjAwJyB9KTtcclxuICAgIHRoaXMudGV4dDMgPSB0aGlzLmFkZC50ZXh0KDEwLCA0MCwgJycsIHsgY29sb3I6ICcjMDBmZjAwJyB9KTtcclxuICAgIHRoaXMudGV4dDQgPSB0aGlzLmFkZC50ZXh0KDEwLCA1NSwgJycsIHsgY29sb3I6ICcjMDBmZjAwJyB9KTtcclxuICAgIHRoaXMudGV4dDUgPSB0aGlzLmFkZC50ZXh0KDEwLCA3MCwgJycsIHsgY29sb3I6ICcjMDBmZjAwJyB9KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyB1cGRhdGUoKTogdm9pZCB7fVxyXG59XHJcbiIsImltcG9ydCBzaWduYWxSID0gcmVxdWlyZSgnQG1pY3Jvc29mdC9zaWduYWxyJyk7XHJcbmltcG9ydCB7IE1lbnVCdXR0b24gfSBmcm9tICcuLi91aS9tZW51LWJ1dHRvbic7XHJcbmltcG9ydCAqIGFzIHF1ZXJ5c3RyaW5nIGZyb20gXCJxdWVyeS1zdHJpbmdcIjtcclxuXHJcbmNvbnN0IHNjZW5lQ29uZmlnOiBQaGFzZXIuVHlwZXMuU2NlbmVzLlNldHRpbmdzQ29uZmlnID0ge1xyXG4gIGFjdGl2ZTogZmFsc2UsXHJcbiAgdmlzaWJsZTogZmFsc2UsXHJcbiAga2V5OiAnUGVybWlzc2lvbnMnLFxyXG59O1xyXG5jbGFzcyBHYW1lU2NlbmVBcmd1bWVudHMge1xyXG4gIHB1YmxpYyBodWJDb25uZWN0aW9uOiBzaWduYWxSLkh1YkNvbm5lY3Rpb247XHJcbn1cclxuLyoqXHJcbiAqIFRoZSBpbml0aWFsIHNjZW5lIHRoYXQgc3RhcnRzLCBzaG93cyB0aGUgc3BsYXNoIHNjcmVlbnMsIGFuZCBsb2FkcyB0aGUgbmVjZXNzYXJ5IGFzc2V0cy5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBQZXJtaXNzaW9uc1NjZW5lIGV4dGVuZHMgUGhhc2VyLlNjZW5lIHtcclxuICBwcml2YXRlIGh1YkNvbm5lY3Rpb246IHNpZ25hbFIuSHViQ29ubmVjdGlvbjtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKHNjZW5lQ29uZmlnKTtcclxuICB9XHJcbiAgcHVibGljIGluaXQoZGF0YTogR2FtZVNjZW5lQXJndW1lbnRzKTogdm9pZCB7XHJcbiAgICB0aGlzLmh1YkNvbm5lY3Rpb24gPSBkYXRhLmh1YkNvbm5lY3Rpb247XHJcbiAgfVxyXG4gIHB1YmxpYyBjcmVhdGUoKTogdm9pZCB7XHJcbiAgICBjb25zb2xlLmxvZygnUGVybWlzc2lvbnMnKTtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMuaHViQ29ubmVjdGlvbik7XHJcbiAgICBuZXcgTWVudUJ1dHRvbih0aGlzLCAxMDAsIDE1MCwgJ0VudGVyJywgKCkgPT4ge1xyXG4gICAgICB0cnl7XHJcbiAgICAgICAgRGV2aWNlTW90aW9uRXZlbnQucmVxdWVzdFBlcm1pc3Npb24oKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgaWYgKHJlc3BvbnNlID09ICdncmFudGVkJykge1xyXG4gICAgICAgICAgICAvLyBBZGQgYSBsaXN0ZW5lciB0byBnZXQgc21hcnRwaG9uZSBvcmllbnRhdGlvblxyXG4gICAgICAgICAgICAvLyBpbiB0aGUgYWxwaGEtYmV0YS1nYW1tYSBheGVzICh1bml0cyBpbiBkZWdyZWVzKVxyXG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignZGV2aWNlb3JpZW50YXRpb24nLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICBsZXQgdXBkYXRlUmF0ZSA9IDEgLyA2MDtcclxuICAgICAgICAgICAgICAvLyBFeHBvc2UgZWFjaCBvcmllbnRhdGlvbiBhbmdsZSBpbiBhIG1vcmUgcmVhZGFibGUgd2F5XHJcbiAgICAgICAgICAgICAgbGV0IHJvdGF0aW9uX2RlZ3JlZXMgPSBldmVudC5hbHBoYTtcclxuICAgICAgICAgICAgICBsZXQgZnJvbnRUb0JhY2tfZGVncmVlcyA9IGV2ZW50LmJldGE7XHJcbiAgICAgICAgICAgICAgbGV0IGxlZnRUb1JpZ2h0X2RlZ3JlZXMgPSBldmVudC5nYW1tYTtcclxuICBcclxuICAgICAgICAgICAgICBuZXcgTWVudUJ1dHRvbih0aGlzLCAxMDAsIDI1MCwgJ2NsaWNrZWQnLCAoKSA9PiBjb25zb2xlLmxvZygnaGVscCBidXR0b24gY2xpY2tlZCcpKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICAgY2F0Y2goZSl7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJlcnJvciBcIiArIGUpXHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5zY2VuZS5zdGFydCgnTWFpbk1lbnUnLCB7aHViQ29ubmVjdGlvbjogdGhpcy5odWJDb25uZWN0aW9ufSk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgSW5wdXQsIEdhbWVPYmplY3RzIH0gZnJvbSAncGhhc2VyJztcclxuaW1wb3J0IHsgZ2V0R2FtZVdpZHRoLCBnZXRHYW1lSGVpZ2h0LCBkcmlua1RvQ29sb3JNYXAgfSBmcm9tICcuLi9oZWxwZXJzJztcclxuXHJcbmNvbnN0IHNjZW5lQ29uZmlnOiBQaGFzZXIuVHlwZXMuU2NlbmVzLlNldHRpbmdzQ29uZmlnID0ge1xyXG4gIGFjdGl2ZTogZmFsc2UsXHJcbiAgdmlzaWJsZTogZmFsc2UsXHJcbiAga2V5OiAnUG91cicsXHJcbn07XHJcbmNsYXNzIEdhbWVTY2VuZUFyZ3VtZW50cyB7XHJcbiAgcHVibGljIEJvdHRsZVNwcml0ZU5hbWU6IHN0cmluZztcclxuICBwdWJsaWMgb25GaW5pc2g6IEZ1bmN0aW9uO1xyXG59XHJcbmV4cG9ydCBjbGFzcyBQb3VyU2NlbmUgZXh0ZW5kcyBQaGFzZXIuU2NlbmUge1xyXG4gIHB1YmxpYyBzcGVlZCA9IDIwMDtcclxuICBwdWJsaWMgb25GaW5pc2g6IEZ1bmN0aW9uO1xyXG5cclxuICBwcml2YXRlIGN1cnNvcktleXM6IFBoYXNlci5UeXBlcy5JbnB1dC5LZXlib2FyZC5DdXJzb3JLZXlzO1xyXG4gIHByaXZhdGUgYm90dGxlOiBQaGFzZXIuR2FtZU9iamVjdHMuU3ByaXRlO1xyXG4gIC8vcHJpdmF0ZSBib3VyYm9uOiBQaGFzZXIuR2FtZU9iamVjdHMuU3ByaXRlO1xyXG4gIHByaXZhdGUgZW1wdHlHbGFzczogUGhhc2VyLkdhbWVPYmplY3RzLlNwcml0ZTtcclxuICBwcml2YXRlIGZpbGxlZGdsYXNzMTogUGhhc2VyLkdhbWVPYmplY3RzLlNwcml0ZTtcclxuICBwcml2YXRlIGZpbGxlZGdsYXNzMjogUGhhc2VyLkdhbWVPYmplY3RzLlNwcml0ZTtcclxuXHJcbiAgcHJpdmF0ZSBjb250ZW50czogc3RyaW5nW10gPSBbXTtcclxuICBwcml2YXRlIGdsYXNzRmlsbGVyczogUGhhc2VyLkdhbWVPYmplY3RzLlJlY3RhbmdsZVtdID0gW107XHJcblxyXG4gIHByaXZhdGUgaXNQb3VyaW5nID0gMDtcclxuICBwcml2YXRlIHBvdXJDb3VudCA9IDA7XHJcbiAgcHJpdmF0ZSB0cmFuc2l0aW9uaW5nID0gZmFsc2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoc2NlbmVDb25maWcpO1xyXG4gIH1cclxuICBwdWJsaWMgdGV4dDE6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0O1xyXG4gIHB1YmxpYyB0ZXh0MjogUGhhc2VyLkdhbWVPYmplY3RzLlRleHQ7XHJcbiAgcHVibGljIGJvdHRsZU5hbWU6IHN0cmluZztcclxuICBwcml2YXRlIGxpcXVpZFJlY3RhbmdsZTogUGhhc2VyLkdhbWVPYmplY3RzLlJlY3RhbmdsZTtcclxuXHJcbiAgcHVibGljIGluaXQoZGF0YTogR2FtZVNjZW5lQXJndW1lbnRzKTogdm9pZCB7XHJcbiAgICB0aGlzLmJvdHRsZU5hbWUgPSBkYXRhLkJvdHRsZVNwcml0ZU5hbWU7XHJcbiAgICB0aGlzLm9uRmluaXNoID0gZGF0YS5vbkZpbmlzaDtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMuYm90dGxlTmFtZSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY3JlYXRlKCk6IHZvaWQge1xyXG4gICAgY29uc29sZS5sb2coJ1BvdXInKTtcclxuICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCB9ID0gdGhpcy5zeXMuZ2FtZS5jYW52YXM7XHJcbiAgICB0aGlzLmlzUG91cmluZyA9IDA7XHJcbiAgICB0aGlzLnBvdXJDb3VudCA9IDA7XHJcbiAgICB0aGlzLnRyYW5zaXRpb25pbmcgPSBmYWxzZTtcclxuICAgIFxyXG4gICAgLy8gQWRkIGEgcGxheWVyIHNwcml0ZSB0aGF0IGNhbiBiZSBtb3ZlZCBhcm91bmQuIFBsYWNlIGhpbSBpbiB0aGUgbWlkZGxlIG9mIHRoZSBzY3JlZW4uXHJcbiAgICB0aGlzLmVtcHR5R2xhc3MgPSB0aGlzLmFkZC5zcHJpdGUod2lkdGggLyA0LCBoZWlnaHQgLyAyLCAnZW1wdHlnbGFzcycpO1xyXG4gICAgLy90aGlzLmZpbGxlZGdsYXNzMSA9IHRoaXMuYWRkLnNwcml0ZSh3aWR0aCAvIDQsIGhlaWdodCAvIDIsICdmaWxsZWRnbGFzczEnKTtcclxuICAgIC8vdGhpcy5maWxsZWRnbGFzczIgPSB0aGlzLmFkZC5zcHJpdGUod2lkdGggLyA0LCBoZWlnaHQgLyAyLCAnZmlsbGVkZ2xhc3MyJyk7XHJcbi8qXHJcbiAgICB0aGlzLmJvdXJib24gPSB0aGlzLmFkZC5zcHJpdGUod2lkdGggLyA4LCBoZWlnaHQgLyA0LCAnY2FuZWxsZWtuaWZlJykuc2V0SW50ZXJhY3RpdmUoKTtcclxuICAgIHRoaXMuYm91cmJvbi5vbigncG9pbnRlcmRvd24nLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMudGV4dDEuc2V0VGV4dCgnQXNrZWQnKTtcclxuICAgICAgRGV2aWNlTW90aW9uRXZlbnQucmVxdWVzdFBlcm1pc3Npb24oKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIHRoaXMudGV4dDEuc2V0VGV4dChyZXNwb25zZSk7XHJcbiAgICAgICAgaWYgKHJlc3BvbnNlID09ICdncmFudGVkJykge1xyXG4gICAgICAgICAgLy8gQWRkIGEgbGlzdGVuZXIgdG8gZ2V0IHNtYXJ0cGhvbmUgb3JpZW50YXRpb25cclxuICAgICAgICAgIC8vIGluIHRoZSBhbHBoYS1iZXRhLWdhbW1hIGF4ZXMgKHVuaXRzIGluIGRlZ3JlZXMpXHJcbiAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignZGV2aWNlb3JpZW50YXRpb24nLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgdXBkYXRlUmF0ZSA9IDEgLyA2MDtcclxuICAgICAgICAgICAgLy8gRXhwb3NlIGVhY2ggb3JpZW50YXRpb24gYW5nbGUgaW4gYSBtb3JlIHJlYWRhYmxlIHdheVxyXG4gICAgICAgICAgICBjb25zdCByb3RhdGlvbl9kZWdyZWVzID0gZXZlbnQuYWxwaGE7XHJcbiAgICAgICAgICAgIGNvbnN0IGZyb250VG9CYWNrX2RlZ3JlZXMgPSBldmVudC5iZXRhO1xyXG4gICAgICAgICAgICBjb25zdCBsZWZ0VG9SaWdodF9kZWdyZWVzID0gZXZlbnQuZ2FtbWE7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmJvdHRsZS5hbmdsZSA9IGZyb250VG9CYWNrX2RlZ3JlZXMgLSA5MDtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9KTsqL1xyXG5cclxuICAgIGNvbnNvbGUubG9nKGBnbGFzcyB4OiAke3dpZHRoIC8gNH1gKTtcclxuICAgIGNvbnNvbGUubG9nKGBnbGFzcyB5OiAke2hlaWdodCAvIDJ9YCk7XHJcbiAgICB0aGlzLmVtcHR5R2xhc3Muc2V0U2NhbGUoMC41KTtcclxuICAgIHRoaXMuZW1wdHlHbGFzcy5zY2FsZVkgPSB0aGlzLmVtcHR5R2xhc3Muc2NhbGVZICogMC41O1xyXG4gICAgLy90aGlzLmVtcHR5R2xhc3MuYmxlbmRNb2RlID0gUGhhc2VyLkJsZW5kTW9kZXMuTVVMVElQTFk7XHJcblxyXG4gICAgdGhpcy5ib3R0bGUgPSB0aGlzLmFkZC5zcHJpdGUod2lkdGggLyAxLjUsIGhlaWdodCAvIDIsIHRoaXMuYm90dGxlTmFtZSkuc2V0SW50ZXJhY3RpdmUoKTtcclxuICAgIHRoaXMuYm90dGxlLnNldFNjYWxlKDAuNzUpO1xyXG4gICAgY29uc29sZS5sb2codGhpcy5lbXB0eUdsYXNzLngpO1xyXG4gICAgY29uc29sZS5sb2codGhpcy5ib3R0bGUuZGlzcGxheUhlaWdodCk7XHJcbiAgICB0aGlzLmJvdHRsZS5zZXRQb3NpdGlvbih0aGlzLmVtcHR5R2xhc3MueCArIHRoaXMuYm90dGxlLmRpc3BsYXlIZWlnaHQgLyA0KTtcclxuICAgIHRoaXMuYm90dGxlLnNldFNjYWxlKDAuNSk7XHJcblxyXG4gICAgdGhpcy5ib3R0bGUub24oJ3BvaW50ZXJvdmVyJywgKCkgPT4ge1xyXG4gICAgICB0aGlzLmJvdHRsZS5zZXRUaW50KDB4Y2NjY2NjKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuYm90dGxlLm9uKCdwb2ludGVyb3V0JywgKCkgPT4ge1xyXG4gICAgICB0aGlzLmJvdHRsZS5jbGVhclRpbnQoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuaW5wdXQuc2V0RHJhZ2dhYmxlKHRoaXMuYm90dGxlKTtcclxuXHJcbiAgICB0aGlzLmlucHV0Lm9uKCdkcmFnc3RhcnQnLCAocG9pbnRlciwgZ2FtZU9iamVjdCkgPT4ge1xyXG4gICAgICBnYW1lT2JqZWN0LnNldFRpbnQoMHg5OTk5OTkpO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLmxpcXVpZFJlY3RhbmdsZSA9IHRoaXMuYWRkXHJcbiAgICAgIC5yZWN0YW5nbGUoXHJcbiAgICAgICAgdGhpcy5lbXB0eUdsYXNzLngsXHJcbiAgICAgICAgdGhpcy5lbXB0eUdsYXNzLnkgKyB0aGlzLmVtcHR5R2xhc3MuZGlzcGxheUhlaWdodCAvIDIsXHJcbiAgICAgICAgdGhpcy5lbXB0eUdsYXNzLmRpc3BsYXlXaWR0aCxcclxuICAgICAgICArK3RoaXMucG91ckNvdW50LFxyXG4gICAgICAgIGRyaW5rVG9Db2xvck1hcC5nZXQodGhpcy5ib3R0bGVOYW1lKSxcclxuICAgICAgKVxyXG4gICAgICAuc2V0QmxlbmRNb2RlKFBoYXNlci5CbGVuZE1vZGVzLk1VTFRJUExZKTtcclxuXHJcbiAgICB0aGlzLmlucHV0Lm9uKCdkcmFnJywgKHBvaW50ZXIsIGdhbWVPYmplY3QsIGRyYWdYLCBkcmFnWSkgPT4ge1xyXG4gICAgICAvLyBmcm9tIGhlcmU6IG5lZWQgdG8gMS4gY2FsY3VsYXRlIGFuZ2xlIGJldHdlZW4gYmFzZSBvZiBvYmplY3QgYW5kIGN1cnNvclxyXG4gICAgICAvLyAyLiByb3RhdGUgdW50aWwgdG9wIG9mIGJvdHRsZSBpcyBwb2ludGluZyB0byBjdXJzb3JcclxuICAgICAgY29uc3QgeTEgPSBnYW1lT2JqZWN0Lnk7XHJcbiAgICAgIGNvbnN0IHkyID0gdGhpcy5pbnB1dC5hY3RpdmVQb2ludGVyLnk7XHJcbiAgICAgIGNvbnN0IHgxID0gZ2FtZU9iamVjdC54O1xyXG4gICAgICBjb25zdCB4MiA9IHRoaXMuaW5wdXQuYWN0aXZlUG9pbnRlci54O1xyXG5cclxuICAgICAgY29uc3Qgc2xvcGVSYWRzID0gTWF0aC5hdGFuMih5MiAtIHkxLCB4MiAtIHgxKTtcclxuICAgICAgY29uc3QgYWRqdXN0ZWQgPSBzbG9wZVJhZHMgKyAxLjU3MDc5NjMzO1xyXG5cclxuICAgICAgdGhpcy50ZXh0MS5zZXRUZXh0KGAke3RoaXMucG91ckNvdW50fWApO1xyXG4gICAgICBpZiAoYWRqdXN0ZWQgPj0gTWF0aC5QSSB8fCBhZGp1c3RlZCA8PSAwLjAyNSkge1xyXG4gICAgICAgIGdhbWVPYmplY3Qucm90YXRpb24gPSBzbG9wZVJhZHMgKyAxLjU3MDc5NjMzO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvKmlmIChhZGp1c3RlZCA+IDQpIHtcclxuICAgICAgICBpZiAodGhpcy5pc1BvdXJpbmcgPT0gMCkge1xyXG4gICAgICAgICAgdGhpcy5pc1BvdXJpbmcgPSAxO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmlzUG91cmluZyA9IDA7XHJcbiAgICAgIH0qL1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5pbnB1dC5vbignZHJhZ2VuZCcsIChwb2ludGVyLCBnYW1lT2JqZWN0KSA9PiB7XHJcbiAgICAgIGdhbWVPYmplY3QuY2xlYXJUaW50KCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBUaGlzIGlzIGEgbmljZSBoZWxwZXIgUGhhc2VyIHByb3ZpZGVzIHRvIGNyZWF0ZSBsaXN0ZW5lcnMgZm9yIHNvbWUgb2YgdGhlIG1vc3QgY29tbW9uIGtleXMuXHJcbiAgICB0aGlzLmN1cnNvcktleXMgPSB0aGlzLmlucHV0LmtleWJvYXJkLmNyZWF0ZUN1cnNvcktleXMoKTtcclxuXHJcbiAgICB0aGlzLnRleHQxID0gdGhpcy5hZGQudGV4dCgxMCwgMTAsICcnLCB7IGNvbG9yOiAnIzAwZmYwMCcgfSk7XHJcbiAgICB0aGlzLnRleHQyID0gdGhpcy5hZGQudGV4dCgxMDAsIDEwLCAnJywgeyBjb2xvcjogJyMwMGZmMDAnIH0pO1xyXG5cclxuICAgIHRoaXMuYm90dGxlLnNldERlcHRoKDEpO1xyXG4gICAgdGhpcy5jYWxsYmFjaygpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHVwZGF0ZSgpOiB2b2lkIHtcclxuICAgIC8vIEV2ZXJ5IGZyYW1lLCB3ZSBjcmVhdGUgYSBuZXcgdmVsb2NpdHkgZm9yIHRoZSBzcHJpdGUgYmFzZWQgb24gd2hhdCBrZXlzIHRoZSBwbGF5ZXIgaXMgaG9sZGluZyBkb3duLlxyXG4gICAgdGhpcy50ZXh0MS5zZXRUZXh0KGAke3RoaXMuYm90dGxlLnJvdGF0aW9ufWApO1xyXG4gICAgaWYgKHRoaXMuYm90dGxlLnJvdGF0aW9uIDwgLTEuNyAmJiB0aGlzLmJvdHRsZS5yb3RhdGlvbiA+IC0yLjMpIHtcclxuICAgICAgaWYgKHRoaXMuaXNQb3VyaW5nID09IDApIHtcclxuICAgICAgICB0aGlzLmlzUG91cmluZyA9IDE7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuaXNQb3VyaW5nID0gMDtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmlzUG91cmluZyA9PSAxICYmIHRoaXMubGlxdWlkUmVjdGFuZ2xlLmRpc3BsYXlIZWlnaHQgPCB0aGlzLmVtcHR5R2xhc3MuZGlzcGxheUhlaWdodCAqIDEuOSkge1xyXG4gICAgICB0aGlzLmxpcXVpZFJlY3RhbmdsZS5kaXNwbGF5SGVpZ2h0ID0gdGhpcy5saXF1aWRSZWN0YW5nbGUuZGlzcGxheUhlaWdodCArIDEuNTtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5saXF1aWRSZWN0YW5nbGUuZGlzcGxheUhlaWdodCA+IHRoaXMuZW1wdHlHbGFzcy5kaXNwbGF5SGVpZ2h0ICogMS45ICYmICF0aGlzLnRyYW5zaXRpb25pbmcpIHtcclxuICAgICAgdGhpcy50cmFuc2l0aW9uaW5nID0gdHJ1ZTtcclxuICAgICAgZG9jdW1lbnQuY29va2llID0gYCR7dGhpcy5ib3R0bGVOYW1lfT0xYDtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zY2VuZS5zdG9wKCk7XHJcbiAgICAgICAgdGhpcy5vbkZpbmlzaCgpO1xyXG4gICAgICB9LCA1MDApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGNhbGxiYWNrKCk6IHZvaWQge1xyXG4gICAgdGhpcy5jYWxsQXBwbGUoKTtcclxuICAgIC8vXHJcbiAgfVxyXG4gIHB1YmxpYyBjYWxsQXBwbGUoKTogdm9pZCB7XHJcbiAgICB0cnkge1xyXG4gICAgICBEZXZpY2VNb3Rpb25FdmVudC5yZXF1ZXN0UGVybWlzc2lvbigpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgdGhpcy50ZXh0MS5zZXRUZXh0KHJlc3BvbnNlKTtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignZGV2aWNlb3JpZW50YXRpb24nLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGV2ZW50KTtcclxuICAgICAgICAgIGNvbnN0IHVwZGF0ZVJhdGUgPSAxIC8gNjA7XHJcbiAgICAgICAgICAvLyBFeHBvc2UgZWFjaCBvcmllbnRhdGlvbiBhbmdsZSBpbiBhIG1vcmUgcmVhZGFibGUgd2F5XHJcbiAgICAgICAgICBjb25zdCByb3RhdGlvbl9kZWdyZWVzID0gZXZlbnQuYWxwaGE7XHJcbiAgICAgICAgICBjb25zdCBmcm9udFRvQmFja19kZWdyZWVzID0gZXZlbnQuYmV0YTtcclxuICAgICAgICAgIGNvbnN0IGxlZnRUb1JpZ2h0X2RlZ3JlZXMgPSBldmVudC5nYW1tYTtcclxuXHJcbiAgICAgICAgICB0aGlzLmJvdHRsZS5hbmdsZSA9IGZyb250VG9CYWNrX2RlZ3JlZXMgLSA5MDtcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChleCkge1xyXG4gICAgICBjb25zb2xlLmxvZygnbm90IGlvcycpO1xyXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignZGV2aWNlb3JpZW50YXRpb24nLCAoZXZlbnQpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhldmVudCk7XHJcbiAgICAgICAgY29uc3QgdXBkYXRlUmF0ZSA9IDEgLyA2MDtcclxuICAgICAgICAvLyBFeHBvc2UgZWFjaCBvcmllbnRhdGlvbiBhbmdsZSBpbiBhIG1vcmUgcmVhZGFibGUgd2F5XHJcbiAgICAgICAgY29uc3Qgcm90YXRpb25fZGVncmVlcyA9IGV2ZW50LmFscGhhO1xyXG4gICAgICAgIGNvbnN0IGZyb250VG9CYWNrX2RlZ3JlZXMgPSBldmVudC5iZXRhO1xyXG4gICAgICAgIGNvbnN0IGxlZnRUb1JpZ2h0X2RlZ3JlZXMgPSBldmVudC5nYW1tYTtcclxuXHJcbiAgICAgICAgdGhpcy5ib3R0bGUuYW5nbGUgPSBmcm9udFRvQmFja19kZWdyZWVzIC0gOTA7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBJbnB1dCwgR2FtZU9iamVjdHMgfSBmcm9tICdwaGFzZXInO1xyXG5pbXBvcnQgeyBnZXRHYW1lV2lkdGgsIGdldEdhbWVIZWlnaHQsIGRyaW5rVG9Db2xvck1hcCB9IGZyb20gJy4uL2hlbHBlcnMnO1xyXG5pbXBvcnQgeyBNZW51QnV0dG9uIH0gZnJvbSAnLi4vdWkvbWVudS1idXR0b24nO1xyXG5cclxuY29uc3Qgc2NlbmVDb25maWc6IFBoYXNlci5UeXBlcy5TY2VuZXMuU2V0dGluZ3NDb25maWcgPSB7XHJcbiAgYWN0aXZlOiBmYWxzZSxcclxuICB2aXNpYmxlOiBmYWxzZSxcclxuICBrZXk6ICdSZXN1bHRzJyxcclxufTtcclxuY2xhc3MgR2FtZVNjZW5lQXJndW1lbnRzIHtcclxuICBwdWJsaWMgb25GaW5pc2g6IEZ1bmN0aW9uO1xyXG4gIHB1YmxpYyByZXN1bHRzOiBBcnJheTxudW1iZXI+O1xyXG59XHJcbmV4cG9ydCBjbGFzcyBSZXN1bHRzU2NlbmUgZXh0ZW5kcyBQaGFzZXIuU2NlbmUge1xyXG4gIHB1YmxpYyBzcGVlZCA9IDIwMDtcclxuXHJcbiAgcHVibGljIHJlc3VsdHM6IEFycmF5PG51bWJlcj47XHJcbiAgcHJpdmF0ZSB0cmFuc2l0aW9uaW5nID0gZmFsc2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoc2NlbmVDb25maWcpO1xyXG4gIH1cclxuICBwdWJsaWMgb25GaW5pc2g6IEZ1bmN0aW9uO1xyXG4gIHB1YmxpYyB0ZXh0MTogUGhhc2VyLkdhbWVPYmplY3RzLlRleHQ7XHJcbiAgcHVibGljIHRleHQyOiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dDtcclxuICBwdWJsaWMgdGV4dDM6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0O1xyXG4gIHB1YmxpYyB0ZXh0NDogUGhhc2VyLkdhbWVPYmplY3RzLlRleHQ7XHJcbiAgcHVibGljIHRleHQ1OiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dDtcclxuICBwdWJsaWMgY2xpY2tzID0gMDtcclxuICBwdWJsaWMgaWNlTGV2ZWwgPSAwO1xyXG5cclxuICBwdWJsaWMgaW5pdChkYXRhOiBHYW1lU2NlbmVBcmd1bWVudHMpOiB2b2lkIHtcclxuICAgIHRoaXMub25GaW5pc2ggPSBkYXRhLm9uRmluaXNoO1xyXG4gICAgdGhpcy5yZXN1bHRzID0gZGF0YS5yZXN1bHRzO1xyXG4gIH1cclxuXHJcblxyXG4gIHB1YmxpYyBjcmVhdGUoKTogdm9pZCB7XHJcbiAgICBjb25zb2xlLmxvZygnUmVzdWx0cycpO1xyXG4gICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSB0aGlzLnN5cy5nYW1lLmNhbnZhcztcclxuICAgIHRoaXMudHJhbnNpdGlvbmluZyA9IGZhbHNlO1xyXG4gICAgLy8gQWRkIGEgcGxheWVyIHNwcml0ZSB0aGF0IGNhbiBiZSBtb3ZlZCBhcm91bmQuIFBsYWNlIGhpbSBpbiB0aGUgbWlkZGxlIG9mIHRoZSBzY3JlZW4uXHJcbiAgICAvL3RoaXMudmVybW91dGhUb3BPbmx5ID0gdGhpcy5hZGQuc3ByaXRlKHdpZHRoIC8gMiwgaGVpZ2h0IC8gMiArIDMwMCwgJ3Zlcm1vdXRodG9wb25seScpO1xyXG4gICAgdGhpcy5hZGQudGV4dCh3aWR0aC84LCAoaGVpZ2h0LzQpIC0gMzAsIFwiUmVzdWx0czpcIiwgeyBjb2xvcjogJyNmZmZmZmYnIH0pO1xyXG4gICAgdGhpcy5yZXN1bHRzLmZvckVhY2goKGVsZW1lbnQsaWR4KSA9PiB7XHJcbiAgICAgIHRoaXMuYWRkLnRleHQod2lkdGgvOCwgKGhlaWdodC80KSArIChpZHggKiBoZWlnaHQvOCksIHRoaXMuZ2V0UmVzdWx0U3RyaW5nKGVsZW1lbnQpLCB7IGNvbG9yOiAnI2ZmZmZmZicgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBuZXcgTWVudUJ1dHRvbih0aGlzLCB3aWR0aC8yLCAoaGVpZ2h0LzQpICogMywgXCJSZXNldFwiLCAoKSA9PiB7dGhpcy5zY2VuZS5zdG9wKCk7dGhpcy5vbkZpbmlzaCgpO30pO1xyXG4gIH1cclxuXHJcbiAgLy9wdWJsaWMgdXBkYXRlKCk6IHZvaWQge31cclxuXHJcbiAgcHJpdmF0ZSBnZXRSZXN1bHRTdHJpbmcoaXRlbTogbnVtYmVyKXtcclxuICAgIGlmKGl0ZW0gPT0gMCl7XHJcbiAgICAgIHJldHVybiBcIkp1c3QgbGlrZSBJIG9yZGVyZWQhIFRoYW5rcyFcIlxyXG4gICAgfVxyXG4gICAgZWxzZSBpZihpdGVtID09IDEpe3JldHVybiBcIkV4Y3VzZSBtZSwgSSB0aGluayBJIFxcbmdvdCBzb21lb25lIGVsc2UncyBkcmlua1wifVxyXG4gICAgZWxzZSBpZihpdGVtID09IDIpe3JldHVybiBcIkxvb2tzIGdvb2QgYnV0IEkgZG9uJ3RcXG50aGluayBJIGhlYXJkIGFueW9uZSBvcmRlciB0aGlzXCJ9XHJcbiAgICBlbHNlIGlmKGl0ZW0gPT0gMyl7cmV0dXJuIFwiKnNwaXRzIG91dCBkcmluayogRG8geW91XFxuIGV2ZW4ga25vdyBob3cgdG8gbWFrZSBkcmlua3M/XCJ9XHJcbiAgfVxyXG5cclxufVxyXG4iLCJpbXBvcnQgeyBJbnB1dCwgR2FtZU9iamVjdHMgfSBmcm9tICdwaGFzZXInO1xyXG5cclxuY29uc3Qgc2NlbmVDb25maWc6IFBoYXNlci5UeXBlcy5TY2VuZXMuU2V0dGluZ3NDb25maWcgPSB7XHJcbiAgYWN0aXZlOiBmYWxzZSxcclxuICB2aXNpYmxlOiBmYWxzZSxcclxuICBrZXk6ICdTaGFrZSBEcmluaycsXHJcbn07XHJcblxyXG5jbGFzcyBHYW1lU2NlbmVBcmd1bWVudHMge1xyXG4gIHB1YmxpYyBvbkZpbmlzaDogRnVuY3Rpb247XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBTaGFrZVNjZW5lIGV4dGVuZHMgUGhhc2VyLlNjZW5lIHtcclxuICBwdWJsaWMgc3BlZWQgPSAyMDA7XHJcblxyXG4gIHByaXZhdGUgY3Vyc29yS2V5czogUGhhc2VyLlR5cGVzLklucHV0LktleWJvYXJkLkN1cnNvcktleXM7XHJcbiAgcHJpdmF0ZSBib3R0bGU6IFBoYXNlci5HYW1lT2JqZWN0cy5TcHJpdGU7XHJcbiAgLy9wcml2YXRlIGJvdXJib246IFBoYXNlci5HYW1lT2JqZWN0cy5TcHJpdGU7XHJcbiAgcHJpdmF0ZSBlbXB0eUdsYXNzOiBQaGFzZXIuR2FtZU9iamVjdHMuU3ByaXRlO1xyXG4gIHByaXZhdGUgZmlsbGVkZ2xhc3MxOiBQaGFzZXIuR2FtZU9iamVjdHMuU3ByaXRlO1xyXG4gIHByaXZhdGUgZmlsbGVkZ2xhc3MyOiBQaGFzZXIuR2FtZU9iamVjdHMuU3ByaXRlO1xyXG5cclxuICBwcml2YXRlIGNvbnRlbnRzOiBzdHJpbmdbXSA9IFtdO1xyXG4gIHByaXZhdGUgZ2xhc3NGaWxsZXJzOiBQaGFzZXIuR2FtZU9iamVjdHMuU3ByaXRlW10gPSBbXTtcclxuXHJcbiAgcHJpdmF0ZSBpc1BvdXJpbmcgPSAwO1xyXG4gIHByaXZhdGUgc2hha2VDb3VudCA9IDA7XHJcbiAgcHJpdmF0ZSB0cmFuc2l0aW9uaW5nID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSBuID0gMDtcclxuICBwcml2YXRlIG50aHJlc2hvbGQgPSAwO1xyXG4gIHByaXZhdGUgbWF4eCA9IDA7XHJcbiAgcHJpdmF0ZSBtYXh5ID0gMDtcclxuICBwcml2YXRlIG1heHogPSAwO1xyXG4gIHByaXZhdGUgbWlueCA9IDA7XHJcbiAgcHJpdmF0ZSBtaW55ID0gMDtcclxuICBwcml2YXRlIG1pbnogPSAwO1xyXG4gIHByaXZhdGUgdGhyZXNob2xkID0gMTU7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoc2NlbmVDb25maWcpO1xyXG4gIH1cclxuICBwdWJsaWMgdGV4dDE6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0O1xyXG4gIHB1YmxpYyB0ZXh0MjogUGhhc2VyLkdhbWVPYmplY3RzLlRleHQ7XHJcbiAgcHVibGljIHRleHQzOiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dDtcclxuICBwdWJsaWMgdGV4dDQ6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0O1xyXG4gIHB1YmxpYyB0ZXh0NTogUGhhc2VyLkdhbWVPYmplY3RzLlRleHQ7XHJcbiAgcHVibGljIGJvdHRsZU5hbWU6IHN0cmluZztcclxuICBwcml2YXRlIGxpcXVpZFJlY3RhbmdsZTogUGhhc2VyLkdhbWVPYmplY3RzLlJlY3RhbmdsZTtcclxuICBwdWJsaWMgb25GaW5pc2g6IEZ1bmN0aW9uO1xyXG5cclxuICBwdWJsaWMgaW5pdChkYXRhOiBHYW1lU2NlbmVBcmd1bWVudHMpOiB2b2lkIHtcclxuICAgIHRoaXMuYm90dGxlTmFtZSA9ICdzaGFrZXInO1xyXG4gICAgdGhpcy5vbkZpbmlzaCA9IGRhdGEub25GaW5pc2g7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY3JlYXRlKCk6IHZvaWQge1xyXG4gICAgY29uc29sZS5sb2coJ1NoYWtlJyk7XHJcbiAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IHRoaXMuc3lzLmdhbWUuY2FudmFzO1xyXG4gICAgdGhpcy5pc1BvdXJpbmcgPSAwO1xyXG4gICAgdGhpcy5zaGFrZUNvdW50ID0gMDtcclxuICAgIHRoaXMudHJhbnNpdGlvbmluZyA9IGZhbHNlO1xyXG4gICAgdGhpcy5uID0gMDtcclxuICAgIHRoaXMubnRocmVzaG9sZCA9IDEzO1xyXG4gICAgdGhpcy5jYWxsYmFjaygpO1xyXG4gICAgLy8gQWRkIGEgcGxheWVyIHNwcml0ZSB0aGF0IGNhbiBiZSBtb3ZlZCBhcm91bmQuIFBsYWNlIGhpbSBpbiB0aGUgbWlkZGxlIG9mIHRoZSBzY3JlZW4uXHJcbiAgICAvL3RoaXMuZW1wdHlHbGFzcyA9IHRoaXMuYWRkLnNwcml0ZSh3aWR0aCAvIDQsIGhlaWdodCAvIDIsICdlbXB0eWdsYXNzJyk7XHJcbiAgICAvL3RoaXMuZmlsbGVkZ2xhc3MxID0gdGhpcy5hZGQuc3ByaXRlKHdpZHRoIC8gNCwgaGVpZ2h0IC8gMiwgJ2ZpbGxlZGdsYXNzMScpO1xyXG4gICAgLy90aGlzLmZpbGxlZGdsYXNzMiA9IHRoaXMuYWRkLnNwcml0ZSh3aWR0aCAvIDQsIGhlaWdodCAvIDIsICdmaWxsZWRnbGFzczInKTtcclxuXHJcbiAgICAvL3RoaXMuYm91cmJvbiA9IHRoaXMuYWRkLnNwcml0ZSh3aWR0aCAvIDgsIGhlaWdodCAvIDQsICdjYW5lbGxla25pZmUnKS5zZXRJbnRlcmFjdGl2ZSgpO1xyXG4gICAgLy90aGlzLmJvdXJib24ub24oJ3BvaW50ZXJkb3duJywgdGhpcy5jYWxsYmFjayApO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKGBnbGFzcyB4OiAke3dpZHRoIC8gNH1gKTtcclxuICAgIGNvbnNvbGUubG9nKGBnbGFzcyB5OiAke2hlaWdodCAvIDJ9YCk7XHJcblxyXG4gICAgdGhpcy5ib3R0bGUgPSB0aGlzLmFkZC5zcHJpdGUod2lkdGggLyAyLCBoZWlnaHQgLyAyLCB0aGlzLmJvdHRsZU5hbWUpLnNldEludGVyYWN0aXZlKCk7XHJcbiAgICB0aGlzLmJvdHRsZS5zZXRTY2FsZSgwLjYpO1xyXG4gICAgLy9jb25zb2xlLmxvZyh0aGlzLmVtcHR5R2xhc3MueCk7XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLmJvdHRsZS5kaXNwbGF5SGVpZ2h0KTtcclxuICAgIC8vdGhpcy5ib3R0bGUuc2V0UG9zaXRpb24odGhpcy5lbXB0eUdsYXNzLnggKyB0aGlzLmJvdHRsZS5kaXNwbGF5SGVpZ2h0IC8gNCk7XHJcbiAgICAvL3RoaXMuYm90dGxlLnNldFNjYWxlKDAuNSk7XHJcblxyXG4gICAgdGhpcy5ib3R0bGUub24oJ3BvaW50ZXJvdmVyJywgKCkgPT4ge1xyXG4gICAgICB0aGlzLmJvdHRsZS5zZXRUaW50KDB4Y2NjY2NjKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuYm90dGxlLm9uKCdwb2ludGVyb3V0JywgKCkgPT4ge1xyXG4gICAgICB0aGlzLmJvdHRsZS5jbGVhclRpbnQoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuYm90dGxlLm9uKCdwb2ludGVyZG93bicsICgpID0+IHtcclxuICAgICAgdGhpcy5zaGFrZUNvdW50Kys7XHJcbiAgICAgIGlmICh0aGlzLnNoYWtlQ291bnQgPiA3KSB7XHJcbiAgICAgICAgdGhpcy5zaGFrZUNvdW50ID0gNztcclxuICAgICAgfVxyXG4gICAgICAvL3RoaXMuYm90dGxlLnNldFRleHR1cmUoYHNoYWtlciR7dGhpcy5zaGFrZUNvdW50fWApO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLmlucHV0LnNldERyYWdnYWJsZSh0aGlzLmJvdHRsZSk7XHJcblxyXG4gICAgdGhpcy5pbnB1dC5vbignZHJhZ3N0YXJ0JywgKHBvaW50ZXIsIGdhbWVPYmplY3QpID0+IHtcclxuICAgICAgZ2FtZU9iamVjdC5zZXRUaW50KDB4OTk5OTk5KTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIFRoaXMgaXMgYSBuaWNlIGhlbHBlciBQaGFzZXIgcHJvdmlkZXMgdG8gY3JlYXRlIGxpc3RlbmVycyBmb3Igc29tZSBvZiB0aGUgbW9zdCBjb21tb24ga2V5cy5cclxuICAgIHRoaXMuY3Vyc29yS2V5cyA9IHRoaXMuaW5wdXQua2V5Ym9hcmQuY3JlYXRlQ3Vyc29yS2V5cygpO1xyXG5cclxuICAgIHRoaXMudGV4dDEgPSB0aGlzLmFkZC50ZXh0KDUwLCAxMCwgJycsIHsgY29sb3I6ICcjMDBmZjAwJyB9KTtcclxuICAgIHRoaXMudGV4dDIgPSB0aGlzLmFkZC50ZXh0KDUwLCAzMCwgJycsIHsgY29sb3I6ICcjMDBmZjAwJyB9KTtcclxuICAgIHRoaXMudGV4dDMgPSB0aGlzLmFkZC50ZXh0KDUwLCA2MCwgJycsIHsgY29sb3I6ICcjMDBmZjAwJyB9KTtcclxuICAgIHRoaXMudGV4dDQgPSB0aGlzLmFkZC50ZXh0KDUwLCA5MCwgJycsIHsgY29sb3I6ICcjMDBmZjAwJyB9KTtcclxuICAgIHRoaXMudGV4dDUgPSB0aGlzLmFkZC50ZXh0KDUwLCAxMjAsICcnLCB7IGNvbG9yOiAnIzAwZmYwMCcgfSk7XHJcblxyXG4gICAgdGhpcy5ib3R0bGUuc2V0RGVwdGgoMSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdXBkYXRlKCk6IHZvaWQge1xyXG4gICAgLy8gRXZlcnkgZnJhbWUsIHdlIGNyZWF0ZSBhIG5ldyB2ZWxvY2l0eSBmb3IgdGhlIHNwcml0ZSBiYXNlZCBvbiB3aGF0IGtleXMgdGhlIHBsYXllciBpcyBob2xkaW5nIGRvd24uXHJcbiAgICBpZiAodGhpcy5uID4gdGhpcy5udGhyZXNob2xkICYmIHRoaXMuc2hha2VDb3VudCA8PSA3KSB7XHJcbiAgICAgIHRoaXMubiA9IDA7XHJcbiAgICAgIHRoaXMuc2hha2VDb3VudCsrO1xyXG4gICAgICB0aGlzLnRleHQ0LnNldFRleHQoYG4gJHt0aGlzLm59ICR7dGhpcy5udGhyZXNob2xkfWApO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuc2hha2VDb3VudCAlIDIgPT0gMCkge1xyXG4gICAgICB0aGlzLmJvdHRsZS5zZXRUZXh0dXJlKGBzaGFrZXIke3RoaXMuc2hha2VDb3VudCAvIDJ9YCk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5zaGFrZUNvdW50ID4gNSAmJiAhdGhpcy50cmFuc2l0aW9uaW5nKSB7XHJcbiAgICAgIHRoaXMudHJhbnNpdGlvbmluZyA9IHRydWU7XHJcbiAgICAgIGRvY3VtZW50LmNvb2tpZSA9IGBzaGFrZT0xYDtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zY2VuZS5zdG9wKCk7XHJcbiAgICAgICAgdGhpcy5vbkZpbmlzaCgpO1xyXG4gICAgICB9LCA3NTApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldFVzZXJBZ2VudCgpOiBzdHJpbmcge1xyXG4gICAgLy8gKEEpIEJSRUFLIFVTRVIgQUdFTlQgRE9XTlxyXG4gICAgY29uc29sZS5sb2cobmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpKTtcclxuICAgIGNvbnN0IGlzTW9iaWxlID0gbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLm1hdGNoKC9tb2JpbGUvaSksXHJcbiAgICAgIGlzVGFibGV0ID0gbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLm1hdGNoKC90YWJsZXQvaSksXHJcbiAgICAgIGlzQW5kcm9pZCA9IG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5tYXRjaCgvYW5kcm9pZC9pKSxcclxuICAgICAgaXNpUGhvbmUgPSBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkubWF0Y2goL2lwaG9uZS9pKSxcclxuICAgICAgaXNpUGFkID0gbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLm1hdGNoKC9pcGFkL2kpO1xyXG5cclxuICAgIC8vIChCKSBERVRFQ1RFRCBERVZJQ0UgVFlQRVxyXG4gICAgaWYgKGlzQW5kcm9pZCkge1xyXG4gICAgICByZXR1cm4gJ0FuZHJvaWQnO1xyXG4gICAgfSBlbHNlIGlmIChpc2lQaG9uZSB8fCBpc2lQYWQpIHtcclxuICAgICAgcmV0dXJuICdBcHBsZSc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gJ05vcGUnO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGNhbGxBcHBsZSgpOiB2b2lkIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIERldmljZU1vdGlvbkV2ZW50LnJlcXVlc3RQZXJtaXNzaW9uKCkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICB0aGlzLnRleHQxLnNldFRleHQocmVzcG9uc2UpO1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdkZXZpY2Vtb3Rpb24nLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGV2ZW50KTtcclxuICAgICAgICAgIGlmIChldmVudC5hY2NlbGVyYXRpb24ueCA8IHRoaXMudGhyZXNob2xkICogLTEgfHwgZXZlbnQuYWNjZWxlcmF0aW9uLnggPiB0aGlzLnRocmVzaG9sZCkge1xyXG4gICAgICAgICAgICB0aGlzLm4rKztcclxuICAgICAgICAgIH0gZWxzZSBpZiAoZXZlbnQuYWNjZWxlcmF0aW9uLnkgPCB0aGlzLnRocmVzaG9sZCAqIC0xIHx8IGV2ZW50LmFjY2VsZXJhdGlvbi55ID4gdGhpcy50aHJlc2hvbGQpIHtcclxuICAgICAgICAgICAgdGhpcy5uKys7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKGV2ZW50LmFjY2VsZXJhdGlvbi56IDwgdGhpcy50aHJlc2hvbGQgKiAtMSB8fCBldmVudC5hY2NlbGVyYXRpb24ueiA+IHRoaXMudGhyZXNob2xkKSB7XHJcbiAgICAgICAgICAgIHRoaXMubisrO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC8vIHRleHRcclxuICAgICAgICAgIGlmIChldmVudC5hY2NlbGVyYXRpb24ueCA8IHRoaXMubWlueCkge1xyXG4gICAgICAgICAgICB0aGlzLm1pbnggPSBldmVudC5hY2NlbGVyYXRpb24ueDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmIChldmVudC5hY2NlbGVyYXRpb24ueSA8IHRoaXMubWlueSkge1xyXG4gICAgICAgICAgICB0aGlzLm1pbnkgPSBldmVudC5hY2NlbGVyYXRpb24ueTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmIChldmVudC5hY2NlbGVyYXRpb24ueiA8IHRoaXMubWlueikge1xyXG4gICAgICAgICAgICB0aGlzLm1pbnogPSBldmVudC5hY2NlbGVyYXRpb24uejtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmIChldmVudC5hY2NlbGVyYXRpb24ueCA+IHRoaXMubWF4eCkge1xyXG4gICAgICAgICAgICB0aGlzLm1heHggPSBldmVudC5hY2NlbGVyYXRpb24ueDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmIChldmVudC5hY2NlbGVyYXRpb24ueSA+IHRoaXMubWF4eSkge1xyXG4gICAgICAgICAgICB0aGlzLm1heHkgPSBldmVudC5hY2NlbGVyYXRpb24ueTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmIChldmVudC5hY2NlbGVyYXRpb24ueiA+IHRoaXMubWF4eikge1xyXG4gICAgICAgICAgICB0aGlzLm1heHogPSBldmVudC5hY2NlbGVyYXRpb24uejtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHRoaXMudGV4dDEuc2V0VGV4dChgeCAke3RoaXMubWlueH0gJHt0aGlzLm1heHh9YCk7XHJcbiAgICAgICAgICB0aGlzLnRleHQyLnNldFRleHQoYHkgJHt0aGlzLm1pbnl9ICR7dGhpcy5tYXh5fWApO1xyXG4gICAgICAgICAgdGhpcy50ZXh0My5zZXRUZXh0KGB6ICR7dGhpcy5taW56fSAke3RoaXMubWF4en1gKTtcclxuICAgICAgICAgIHRoaXMudGV4dDQuc2V0VGV4dChgbiAke3RoaXMubn0gJHt0aGlzLm50aHJlc2hvbGR9YCk7XHJcbiAgICAgICAgICB0aGlzLnRleHQ1LnNldFRleHQoYHNoYWtlcyAke3RoaXMuc2hha2VDb3VudH1gKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChleCkge1xyXG4gICAgICBjb25zb2xlLmxvZygnbm90IGlvcycpO1xyXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignZGV2aWNlbW90aW9uJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXZlbnQpO1xyXG4gICAgICAgIGlmIChldmVudC5hY2NlbGVyYXRpb24ueCA8IHRoaXMudGhyZXNob2xkICogLTEgfHwgZXZlbnQuYWNjZWxlcmF0aW9uLnggPiB0aGlzLnRocmVzaG9sZCkge1xyXG4gICAgICAgICAgdGhpcy5uKys7XHJcbiAgICAgICAgfSBlbHNlIGlmIChldmVudC5hY2NlbGVyYXRpb24ueSA8IHRoaXMudGhyZXNob2xkICogLTEgfHwgZXZlbnQuYWNjZWxlcmF0aW9uLnkgPiB0aGlzLnRocmVzaG9sZCkge1xyXG4gICAgICAgICAgdGhpcy5uKys7XHJcbiAgICAgICAgfSBlbHNlIGlmIChldmVudC5hY2NlbGVyYXRpb24ueiA8IHRoaXMudGhyZXNob2xkICogLTEgfHwgZXZlbnQuYWNjZWxlcmF0aW9uLnogPiB0aGlzLnRocmVzaG9sZCkge1xyXG4gICAgICAgICAgdGhpcy5uKys7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyB0ZXh0XHJcbiAgICAgICAgaWYgKGV2ZW50LmFjY2VsZXJhdGlvbi54IDwgdGhpcy5taW54KSB7XHJcbiAgICAgICAgICB0aGlzLm1pbnggPSBldmVudC5hY2NlbGVyYXRpb24ueDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGV2ZW50LmFjY2VsZXJhdGlvbi55IDwgdGhpcy5taW55KSB7XHJcbiAgICAgICAgICB0aGlzLm1pbnkgPSBldmVudC5hY2NlbGVyYXRpb24ueTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGV2ZW50LmFjY2VsZXJhdGlvbi56IDwgdGhpcy5taW56KSB7XHJcbiAgICAgICAgICB0aGlzLm1pbnogPSBldmVudC5hY2NlbGVyYXRpb24uejtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGV2ZW50LmFjY2VsZXJhdGlvbi54ID4gdGhpcy5tYXh4KSB7XHJcbiAgICAgICAgICB0aGlzLm1heHggPSBldmVudC5hY2NlbGVyYXRpb24ueDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGV2ZW50LmFjY2VsZXJhdGlvbi55ID4gdGhpcy5tYXh5KSB7XHJcbiAgICAgICAgICB0aGlzLm1heHkgPSBldmVudC5hY2NlbGVyYXRpb24ueTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGV2ZW50LmFjY2VsZXJhdGlvbi56ID4gdGhpcy5tYXh6KSB7XHJcbiAgICAgICAgICB0aGlzLm1heHogPSBldmVudC5hY2NlbGVyYXRpb24uejtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy50ZXh0MS5zZXRUZXh0KGB4ICR7dGhpcy5taW54fSAke3RoaXMubWF4eH1gKTtcclxuICAgICAgICB0aGlzLnRleHQyLnNldFRleHQoYHkgJHt0aGlzLm1pbnl9ICR7dGhpcy5tYXh5fWApO1xyXG4gICAgICAgIHRoaXMudGV4dDMuc2V0VGV4dChgeiAke3RoaXMubWluen0gJHt0aGlzLm1heHp9YCk7XHJcbiAgICAgICAgdGhpcy50ZXh0NC5zZXRUZXh0KGBuICR7dGhpcy5ufSAke3RoaXMubnRocmVzaG9sZH1gKTtcclxuICAgICAgICB0aGlzLnRleHQ1LnNldFRleHQoYHNoYWtlcyAke3RoaXMuc2hha2VDb3VudH1gKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHB1YmxpYyBjYWxsYmFjaygpOiB2b2lkIHtcclxuICAgIC8vdGhpcy50ZXh0MS5zZXRUZXh0KCdBc2tlZCcpO1xyXG4gICAgdGhpcy5tYXh4ID0gMDtcclxuICAgIHRoaXMubWF4eSA9IDA7XHJcbiAgICB0aGlzLm1heHogPSAwO1xyXG4gICAgdGhpcy5taW54ID0gMDtcclxuICAgIHRoaXMubWlueSA9IDA7XHJcbiAgICB0aGlzLm1pbnogPSAwO1xyXG4gICAgLy9pZiAod2luZG93LkRldmljZU9yaWVudGF0aW9uRXZlbnQpIHtcclxuICAgICAgLy93aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignZGV2aWNlb3JpZW50YXRpb24nLCBkZXZpY2VPcmllbnRhdGlvbkhhbmRsZXIsIGZhbHNlKTtcclxuICAgIC8vfVxyXG5cclxuICAgLyppZiAod2luZG93LkRldmljZU1vdGlvbkV2ZW50KSB7XHJcbiAgICAgIHRoaXMudGV4dDIuc2V0VGV4dCgneWVzJyk7XHJcbiAgICAgIGNvbnNvbGUubG9nKCd5ZXMnKTtcclxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2RldmljZW1vdGlvbicsIChldmVudCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGV2ZW50KTtcclxuICAgICAgICBpZiAoZXZlbnQuYWNjZWxlcmF0aW9uLnggPCB0aGlzLnRocmVzaG9sZCAqIC0xIHx8IGV2ZW50LmFjY2VsZXJhdGlvbi54ID4gdGhpcy50aHJlc2hvbGQpIHtcclxuICAgICAgICAgIHRoaXMubisrO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZXZlbnQuYWNjZWxlcmF0aW9uLnkgPCB0aGlzLnRocmVzaG9sZCAqIC0xIHx8IGV2ZW50LmFjY2VsZXJhdGlvbi55ID4gdGhpcy50aHJlc2hvbGQpIHtcclxuICAgICAgICAgIHRoaXMubisrO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZXZlbnQuYWNjZWxlcmF0aW9uLnogPCB0aGlzLnRocmVzaG9sZCAqIC0xIHx8IGV2ZW50LmFjY2VsZXJhdGlvbi56ID4gdGhpcy50aHJlc2hvbGQpIHtcclxuICAgICAgICAgIHRoaXMubisrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gdGV4dFxyXG4gICAgICAgIGlmIChldmVudC5hY2NlbGVyYXRpb24ueCA8IHRoaXMubWlueCkge1xyXG4gICAgICAgICAgdGhpcy5taW54ID0gZXZlbnQuYWNjZWxlcmF0aW9uLng7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChldmVudC5hY2NlbGVyYXRpb24ueSA8IHRoaXMubWlueSkge1xyXG4gICAgICAgICAgdGhpcy5taW55ID0gZXZlbnQuYWNjZWxlcmF0aW9uLnk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChldmVudC5hY2NlbGVyYXRpb24ueiA8IHRoaXMubWlueikge1xyXG4gICAgICAgICAgdGhpcy5taW56ID0gZXZlbnQuYWNjZWxlcmF0aW9uLno7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChldmVudC5hY2NlbGVyYXRpb24ueCA+IHRoaXMubWF4eCkge1xyXG4gICAgICAgICAgdGhpcy5tYXh4ID0gZXZlbnQuYWNjZWxlcmF0aW9uLng7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChldmVudC5hY2NlbGVyYXRpb24ueSA+IHRoaXMubWF4eSkge1xyXG4gICAgICAgICAgdGhpcy5tYXh5ID0gZXZlbnQuYWNjZWxlcmF0aW9uLnk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChldmVudC5hY2NlbGVyYXRpb24ueiA+IHRoaXMubWF4eikge1xyXG4gICAgICAgICAgdGhpcy5tYXh6ID0gZXZlbnQuYWNjZWxlcmF0aW9uLno7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudGV4dDEuc2V0VGV4dChgeCAke3RoaXMubWlueH0gJHt0aGlzLm1heHh9YCk7XHJcbiAgICAgICAgLy90aGlzLnRleHQyLnNldFRleHQoYHkgJHt0aGlzLm1pbnl9ICR7dGhpcy5tYXh5fWApO1xyXG4gICAgICAgIHRoaXMudGV4dDMuc2V0VGV4dChgeiAke3RoaXMubWluen0gJHt0aGlzLm1heHp9YCk7XHJcbiAgICAgICAgdGhpcy50ZXh0NC5zZXRUZXh0KGBuICR7dGhpcy5ufSAke3RoaXMubnRocmVzaG9sZH1gKTtcclxuICAgICAgICB0aGlzLnRleHQ1LnNldFRleHQoYHNoYWtlcyAke3RoaXMuc2hha2VDb3VudH1gKTtcclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnRleHQyLnNldFRleHQoJ25vJyk7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdubycpO1xyXG4gICAgfSovXHJcbiAgICB0aGlzLmNhbGxBcHBsZSgpO1xyXG4gICAgLy9cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgSW5wdXQsIEdhbWVPYmplY3RzIH0gZnJvbSAncGhhc2VyJztcclxuaW1wb3J0IHsgZ2V0R2FtZVdpZHRoLCBnZXRHYW1lSGVpZ2h0LCBkcmlua1RvQ29sb3JNYXAgfSBmcm9tICcuLi9oZWxwZXJzJztcclxuaW1wb3J0IHsgTWVudUJ1dHRvbiB9IGZyb20gJy4uL3VpL21lbnUtYnV0dG9uJztcclxuXHJcbmNvbnN0IHNjZW5lQ29uZmlnOiBQaGFzZXIuVHlwZXMuU2NlbmVzLlNldHRpbmdzQ29uZmlnID0ge1xyXG4gIGFjdGl2ZTogZmFsc2UsXHJcbiAgdmlzaWJsZTogZmFsc2UsXHJcbiAga2V5OiAnU3VjY2VzcycsXHJcbn07XHJcbmNsYXNzIEdhbWVTY2VuZUFyZ3VtZW50cyB7XHJcbiAgcHVibGljIG9uRmluaXNoOiBGdW5jdGlvbjtcclxufVxyXG5leHBvcnQgY2xhc3MgU3VjY2Vzc1NjZW5lIGV4dGVuZHMgUGhhc2VyLlNjZW5lIHtcclxuICBwdWJsaWMgc3BlZWQgPSAyMDA7XHJcblxyXG4gIHB1YmxpYyByZXN1bHRzOiBBcnJheTxudW1iZXI+O1xyXG4gIHByaXZhdGUgdHJhbnNpdGlvbmluZyA9IGZhbHNlO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKHNjZW5lQ29uZmlnKTtcclxuICB9XHJcbiAgcHVibGljIG9uRmluaXNoOiBGdW5jdGlvbjtcclxuICBwdWJsaWMgdGV4dDE6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0O1xyXG4gIHB1YmxpYyB0ZXh0MjogUGhhc2VyLkdhbWVPYmplY3RzLlRleHQ7XHJcbiAgcHVibGljIHRleHQzOiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dDtcclxuICBwdWJsaWMgdGV4dDQ6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0O1xyXG4gIHB1YmxpYyB0ZXh0NTogUGhhc2VyLkdhbWVPYmplY3RzLlRleHQ7XHJcbiAgcHVibGljIGNsaWNrcyA9IDA7XHJcbiAgcHVibGljIGljZUxldmVsID0gMDtcclxuXHJcbiAgcHVibGljIGluaXQoZGF0YTogR2FtZVNjZW5lQXJndW1lbnRzKTogdm9pZCB7XHJcbiAgICB0aGlzLm9uRmluaXNoID0gZGF0YS5vbkZpbmlzaDtcclxuICB9XHJcblxyXG5cclxuICBwdWJsaWMgY3JlYXRlKCk6IHZvaWQge1xyXG4gICAgY29uc29sZS5sb2coJ1N1Y2Nlc3MnKTtcclxuICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCB9ID0gdGhpcy5zeXMuZ2FtZS5jYW52YXM7XHJcbiAgICB0aGlzLnRyYW5zaXRpb25pbmcgPSBmYWxzZTtcclxuICAgIC8vIEFkZCBhIHBsYXllciBzcHJpdGUgdGhhdCBjYW4gYmUgbW92ZWQgYXJvdW5kLiBQbGFjZSBoaW0gaW4gdGhlIG1pZGRsZSBvZiB0aGUgc2NyZWVuLlxyXG4gICAgLy90aGlzLnZlcm1vdXRoVG9wT25seSA9IHRoaXMuYWRkLnNwcml0ZSh3aWR0aCAvIDIsIGhlaWdodCAvIDIgKyAzMDAsICd2ZXJtb3V0aHRvcG9ubHknKTtcclxuICAgIHRoaXMuYWRkLnRleHQod2lkdGgvOCwgKGhlaWdodC80KSAtIDMwLCAgYFlvdSBkaWQgaXQhIEhlcmUncyB5b3VyIGNvcHkgb2YgXFxudGhlIHJlY2VpcHQ6XHJcbiAgICBEcmluayAtICQxMy4wOVxyXG4gICAgRHJpbmsgLSAkMjQuMTVcclxuICAgIERyaW5rIC0gJDEyLjE1XHJcbiAgICBEcmluayAtICQ3LjI1XHJcbiAgICBgLCB7IGNvbG9yOiAnI2ZmZmZmZicgfSk7XHJcbiAgfVxyXG5cclxuICAvL3B1YmxpYyB1cGRhdGUoKTogdm9pZCB7fVxyXG59XHJcbiIsImltcG9ydCB7IElucHV0LCBHYW1lT2JqZWN0cyB9IGZyb20gJ3BoYXNlcic7XHJcbmltcG9ydCB7IGdldEdhbWVXaWR0aCwgZ2V0R2FtZUhlaWdodCwgZHJpbmtUb0NvbG9yTWFwIH0gZnJvbSAnLi4vaGVscGVycyc7XHJcblxyXG5jb25zdCBzY2VuZUNvbmZpZzogUGhhc2VyLlR5cGVzLlNjZW5lcy5TZXR0aW5nc0NvbmZpZyA9IHtcclxuICBhY3RpdmU6IGZhbHNlLFxyXG4gIHZpc2libGU6IGZhbHNlLFxyXG4gIGtleTogJ1Zlcm1vdXRoJyxcclxufTtcclxuXHJcbmNsYXNzIEdhbWVTY2VuZUFyZ3VtZW50cyB7XHJcbiAgcHVibGljIG9uRmluaXNoOiBGdW5jdGlvbjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFZlcm1vdXRoU2NlbmUgZXh0ZW5kcyBQaGFzZXIuU2NlbmUge1xyXG4gIHByaXZhdGUgdmVybW91dGhUb3A6IFBoYXNlci5HYW1lT2JqZWN0cy5TcHJpdGU7XHJcbiAgcHJpdmF0ZSB2ZXJtb3V0aFRvcE9ubHk6IFBoYXNlci5HYW1lT2JqZWN0cy5TcHJpdGU7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoc2NlbmVDb25maWcpO1xyXG4gIH1cclxuICBwdWJsaWMgdGV4dDE6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0O1xyXG4gIHB1YmxpYyB0ZXh0MjogUGhhc2VyLkdhbWVPYmplY3RzLlRleHQ7XHJcbiAgcHVibGljIHRleHQzOiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dDtcclxuICBwdWJsaWMgdGV4dDQ6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0O1xyXG4gIHB1YmxpYyB0ZXh0NTogUGhhc2VyLkdhbWVPYmplY3RzLlRleHQ7XHJcbiAgcHVibGljIHVuc2NyZXdlZCA9IDA7XHJcbiAgcHJpdmF0ZSB0cmFuc2l0aW9uaW5nID0gZmFsc2U7XHJcblxyXG4gIHB1YmxpYyBvbkZpbmlzaDogRnVuY3Rpb247XHJcblxyXG4gIHB1YmxpYyBpbml0KGRhdGE6IEdhbWVTY2VuZUFyZ3VtZW50cyk6IHZvaWR7XHJcbiAgICB0aGlzLm9uRmluaXNoID0gZGF0YS5vbkZpbmlzaDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjcmVhdGUoKTogdm9pZCB7XHJcbiAgICBjb25zb2xlLmxvZygnVmVybW91dGgnKTtcclxuICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCB9ID0gdGhpcy5zeXMuZ2FtZS5jYW52YXM7XHJcbiAgICB0aGlzLnVuc2NyZXdlZCA9IDA7XHJcbiAgICB0aGlzLnRyYW5zaXRpb25pbmcgPSBmYWxzZTtcclxuICAgIC8vIEFkZCBhIHBsYXllciBzcHJpdGUgdGhhdCBjYW4gYmUgbW92ZWQgYXJvdW5kLiBQbGFjZSBoaW0gaW4gdGhlIG1pZGRsZSBvZiB0aGUgc2NyZWVuLlxyXG4gICAgdGhpcy52ZXJtb3V0aFRvcCA9IHRoaXMuYWRkLnNwcml0ZSh3aWR0aCAvIDIsIGhlaWdodCAvIDIgKyAzMDAsICd2ZXJtb3V0aHRvcCcpO1xyXG4gICAgdGhpcy52ZXJtb3V0aFRvcE9ubHkgPSB0aGlzLmFkZC5zcHJpdGUod2lkdGggLyAyLCBoZWlnaHQgLyAyICsgMzAwLCAndmVybW91dGh0b3Bvbmx5Jyk7XHJcblxyXG4gICAgdGhpcy5pbnB1dC5vbigncG9pbnRlcnVwJywgKCkgPT4ge1xyXG4gICAgICB0aGlzLnRleHQxLnNldFRleHQoYM64OiAke3RoaXMuaW5wdXQuYWN0aXZlUG9pbnRlci5nZXRBbmdsZSgpfWApO1xyXG4gICAgICB0aGlzLnRleHQyLnNldFRleHQoYHg6ICR7dGhpcy5pbnB1dC5hY3RpdmVQb2ludGVyLmdldERpc3RhbmNlWCgpfWApO1xyXG4gICAgICB0aGlzLnRleHQzLnNldFRleHQoYHk6ICR7dGhpcy5pbnB1dC5hY3RpdmVQb2ludGVyLmdldERpc3RhbmNlWSgpfWApO1xyXG4gICAgICB0aGlzLnRleHQ0LnNldFRleHQoYGQ6ICR7dGhpcy5pbnB1dC5hY3RpdmVQb2ludGVyLmdldERpc3RhbmNlKCl9YCk7XHJcblxyXG4gICAgICAvLyBjaGVjayBpZiB0aGluZyBzaG91bGQgdW5zY3Jld1xyXG4gICAgICBpZiAoXHJcbiAgICAgICAgdGhpcy5pbnB1dC5hY3RpdmVQb2ludGVyLmdldERpc3RhbmNlKCkgPj0gMTUwICYmXHJcbiAgICAgICAgdGhpcy5pbnB1dC5hY3RpdmVQb2ludGVyLmdldEFuZ2xlKCkgPD0gMC4zMiAmJlxyXG4gICAgICAgIHRoaXMuaW5wdXQuYWN0aXZlUG9pbnRlci5nZXRBbmdsZSgpID49IC0wLjUyICYmXHJcbiAgICAgICAgdGhpcy51bnNjcmV3ZWQgPCAzXHJcbiAgICAgICkge1xyXG4gICAgICAgIHRoaXMudGV4dDUuc2V0VGV4dChgdW5zY3JldzogJHsrK3RoaXMudW5zY3Jld2VkfWApO1xyXG4gICAgICAgIHRoaXMudmVybW91dGhUb3BPbmx5LnNldFkodGhpcy52ZXJtb3V0aFRvcE9ubHkueSAtIDMwKTtcclxuICAgICAgICB0aGlzLnZlcm1vdXRoVG9wT25seS5mbGlwWCA9ICF0aGlzLnZlcm1vdXRoVG9wT25seS5mbGlwWDtcclxuICAgICAgICBpZiAodGhpcy51bnNjcmV3ZWQgPT0gMyAmJiAhdGhpcy50cmFuc2l0aW9uaW5nKSB7XHJcbiAgICAgICAgICB0aGlzLnRyYW5zaXRpb25pbmcgPSB0cnVlO1xyXG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2NlbmUuc3RvcCgpO1xyXG4gICAgICAgICAgICB0aGlzLnNjZW5lLmxhdW5jaCgnUG91cicsIHsgQm90dGxlU3ByaXRlTmFtZTogJ1Zlcm1vdXRoJywgb25GaW5pc2g6IHRoaXMub25GaW5pc2ggfSk7XHJcbiAgICAgICAgICB9LCA1MDApO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIGlmIChcclxuICAgICAgICB0aGlzLmlucHV0LmFjdGl2ZVBvaW50ZXIuZ2V0RGlzdGFuY2UoKSA+PSAxNTAgJiZcclxuICAgICAgICAodGhpcy5pbnB1dC5hY3RpdmVQb2ludGVyLmdldEFuZ2xlKCkgPD0gLTIuNSB8fCB0aGlzLmlucHV0LmFjdGl2ZVBvaW50ZXIuZ2V0QW5nbGUoKSA+PSAyLjUpICYmXHJcbiAgICAgICAgdGhpcy51bnNjcmV3ZWQgPiAwXHJcbiAgICAgICkge1xyXG4gICAgICAgIHRoaXMudGV4dDUuc2V0VGV4dChgdW5zY3JldzogJHstLXRoaXMudW5zY3Jld2VkfWApO1xyXG4gICAgICAgIHRoaXMudmVybW91dGhUb3BPbmx5LnNldFkodGhpcy52ZXJtb3V0aFRvcE9ubHkueSArIDMwKTtcclxuICAgICAgICB0aGlzLnZlcm1vdXRoVG9wT25seS5mbGlwWCA9ICF0aGlzLnZlcm1vdXRoVG9wT25seS5mbGlwWDtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy50ZXh0MSA9IHRoaXMuYWRkLnRleHQoMTAsIDEwLCAnJywgeyBjb2xvcjogJyMwMGZmMDAnIH0pO1xyXG4gICAgdGhpcy50ZXh0MiA9IHRoaXMuYWRkLnRleHQoMTAsIDI1LCAnJywgeyBjb2xvcjogJyMwMGZmMDAnIH0pO1xyXG4gICAgdGhpcy50ZXh0MyA9IHRoaXMuYWRkLnRleHQoMTAsIDQwLCAnJywgeyBjb2xvcjogJyMwMGZmMDAnIH0pO1xyXG4gICAgdGhpcy50ZXh0NCA9IHRoaXMuYWRkLnRleHQoMTAsIDU1LCAnJywgeyBjb2xvcjogJyMwMGZmMDAnIH0pO1xyXG4gICAgdGhpcy50ZXh0NSA9IHRoaXMuYWRkLnRleHQoMTAsIDcwLCAnJywgeyBjb2xvcjogJyMwMGZmMDAnIH0pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHVwZGF0ZSgpOiB2b2lkIHt9XHJcbn1cclxuIiwiaW1wb3J0ICogYXMgUGhhc2VyIGZyb20gJ3BoYXNlcic7XHJcbmV4cG9ydCBjbGFzcyBHbGFzc0J1dHRvbiBleHRlbmRzIFBoYXNlci5HYW1lT2JqZWN0cy5SZWN0YW5nbGUge1xyXG4gIHB1YmxpYyBsYWJlbDogUGhhc2VyLkdhbWVPYmplY3RzLlRleHQ7XHJcbiAgcHVibGljIHBhZGRpbmcgPSA2O1xyXG4gIHB1YmxpYyBtaW5pbXVtV2lkdGggPSAyMDtcclxuICBwdWJsaWMgbWluaW11bUhlaWdodCA9IDIwO1xyXG4gIHB1YmxpYyBvZ3RleHQ6IHN0cmluZztcclxuICBwdWJsaWMgb25DbGljazogRnVuY3Rpb247XHJcbiAgY29uc3RydWN0b3Ioc2NlbmU6IFBoYXNlci5TY2VuZSwgeDogbnVtYmVyLCB5OiBudW1iZXIsIHRleHQ6IHN0cmluZywgb25DbGljaz86ICgpID0+IHZvaWQpIHtcclxuICAgIHN1cGVyKHNjZW5lLCB4LCB5KTtcclxuICAgIHNjZW5lLmFkZC5leGlzdGluZyh0aGlzKTtcclxuICAgIHRoaXMuc2V0T3JpZ2luKDAsIDApO1xyXG4gICAgdGhpcy5vZ3RleHQgPSB0ZXh0O1xyXG5cclxuICAgIHRoaXMubGFiZWwgPSBzY2VuZS5hZGRcclxuICAgICAgLnRleHQoeCArIHRoaXMucGFkZGluZywgeSArIHRoaXMucGFkZGluZywgdGV4dClcclxuICAgICAgLnNldEZvbnRTaXplKDE0KVxyXG4gICAgICAuc2V0QWxpZ24oJ2NlbnRlcicpO1xyXG5cclxuICAgIGNvbnN0IGxhYmVsV2lkdGggPSB0aGlzLmxhYmVsLndpZHRoICsgdGhpcy5wYWRkaW5nO1xyXG4gICAgY29uc3QgbGFiZWxIZWlnaHQgPSB0aGlzLmxhYmVsLmhlaWdodCArIHRoaXMucGFkZGluZztcclxuXHJcbiAgICB0aGlzLndpZHRoID0gbGFiZWxXaWR0aCA+PSB0aGlzLm1pbmltdW1XaWR0aCA/IGxhYmVsV2lkdGggOiB0aGlzLm1pbmltdW1XaWR0aDtcclxuICAgIHRoaXMuaGVpZ2h0ID0gbGFiZWxIZWlnaHQgPj0gdGhpcy5taW5pbXVtSGVpZ2h0ID8gbGFiZWxIZWlnaHQgOiB0aGlzLm1pbmltdW1IZWlnaHQ7XHJcblxyXG4gICAgdGhpcy5zZXRJbnRlcmFjdGl2ZSh7IHVzZUhhbmRDdXJzb3I6IHRydWUgfSlcclxuICAgICAgLm9uKCdwb2ludGVyZG93bicsIHRoaXMuZW50ZXJNZW51QnV0dG9uQWN0aXZlU3RhdGUpXHJcbiAgICAgIC5vbigncG9pbnRlcnVwJywgdGhpcy5lbnRlck1lbnVCdXR0b25Ib3ZlclN0YXRlKTtcclxuXHJcbiAgICBpZiAob25DbGljaykge1xyXG4gICAgICB0aGlzLm9uKCdwb2ludGVydXAnLCBvbkNsaWNrKTtcclxuICAgICAgdGhpcy5vbkNsaWNrID0gb25DbGljaztcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmVudGVyTWVudUJ1dHRvblJlc3RTdGF0ZSgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGVudGVyTWVudUJ1dHRvbkhvdmVyU3RhdGUoKSB7XHJcbiAgICB0aGlzLmxhYmVsLnNldENvbG9yKCcjMDAwMDAwJyk7XHJcbiAgICB0aGlzLnNldEZpbGxTdHlsZSgweDg4ODg4OCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZW50ZXJNZW51QnV0dG9uUmVzdFN0YXRlKCkge1xyXG4gICAgdHJ5e1xyXG4gICAgdGhpcy5sYWJlbC5zZXRDb2xvcignI0ZGRkZGRicpO1xyXG4gICAgdGhpcy5zZXRGaWxsU3R5bGUoMHg4ODg4ODgpO1xyXG4gICAgdGhpcy5sYWJlbC5zZXRUZXh0KHRoaXMub2d0ZXh0KTtcclxuICB9XHJcbiAgY2F0Y2goZSl7XHJcbiAgICBjb25zb2xlLmxvZyhlKTtcclxuICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZW50ZXJNZW51QnV0dG9uQWN0aXZlU3RhdGUoKSB7XHJcbiAgICB0cnl7XHJcbiAgICAgIHRoaXMubGFiZWwuc2V0Q29sb3IoJyNCQkJCQkInKTtcclxuICAgICAgdGhpcy5zZXRGaWxsU3R5bGUoMHg0NDQ0NDQpO1xyXG4gICAgICB0aGlzLmxhYmVsLnNldFRleHQodGhpcy5vZ3RleHQpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2goZSl7XHJcbiAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgXHJcbiAgcHVibGljIGVudGVyTWVudUJ1dHRvbkJsb2NrZWRTdGF0ZSgpIHtcclxuICAgIC8vdGhpcy5sYWJlbC5zZXRDb2xvcignI2ZmMDAwMCcpO1xyXG4gICAgdHJ5e1xyXG4gICAgICB0aGlzLnNldEZpbGxTdHlsZSgweDQ0NDQ0NCk7XHJcbiAgICAgIHRoaXMub2ZmKCdwb2ludGVydXAnKTtcclxuICAgICAgdGhpcy5sYWJlbC5zZXRUZXh0KCfwn5SSJyk7XHJcbiAgICB9XHJcbiAgICBjYXRjaChlKXtcclxuICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcmVzZXRPbkNsaWNrKCl7XHJcbiAgICB0aGlzLm9uKCdwb2ludGVydXAnLCB0aGlzLm9uQ2xpY2spO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgKiBhcyBQaGFzZXIgZnJvbSAncGhhc2VyJztcclxuXHJcbmV4cG9ydCBjbGFzcyBNZW51QnV0dG9uIGV4dGVuZHMgUGhhc2VyLkdhbWVPYmplY3RzLlJlY3RhbmdsZSB7XHJcbiAgcHVibGljIGxhYmVsOiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dDtcclxuICBwdWJsaWMgcGFkZGluZyA9IDEwO1xyXG4gIHB1YmxpYyBtaW5pbXVtV2lkdGggPSAyMDA7XHJcbiAgcHVibGljIG1pbmltdW1IZWlnaHQgPSA1MDtcclxuICBjb25zdHJ1Y3RvcihzY2VuZTogUGhhc2VyLlNjZW5lLCB4OiBudW1iZXIsIHk6IG51bWJlciwgdGV4dDogc3RyaW5nLCBvbkNsaWNrPzogKCkgPT4gdm9pZCkge1xyXG4gICAgc3VwZXIoc2NlbmUsIHgsIHkpO1xyXG4gICAgc2NlbmUuYWRkLmV4aXN0aW5nKHRoaXMpO1xyXG4gICAgdGhpcy5zZXRPcmlnaW4oMCwgMCk7XHJcblxyXG4gICAgdGhpcy5sYWJlbCA9IHNjZW5lLmFkZFxyXG4gICAgICAudGV4dCh4ICsgdGhpcy5wYWRkaW5nLCB5ICsgdGhpcy5wYWRkaW5nLCB0ZXh0KVxyXG4gICAgICAuc2V0Rm9udFNpemUoMTgpXHJcbiAgICAgIC5zZXRBbGlnbignY2VudGVyJyk7XHJcblxyXG4gICAgY29uc3QgbGFiZWxXaWR0aCA9IHRoaXMubGFiZWwud2lkdGggKyB0aGlzLnBhZGRpbmc7XHJcbiAgICBjb25zdCBsYWJlbEhlaWdodCA9IHRoaXMubGFiZWwuaGVpZ2h0ICsgdGhpcy5wYWRkaW5nO1xyXG5cclxuICAgIHRoaXMud2lkdGggPSBsYWJlbFdpZHRoID49IHRoaXMubWluaW11bVdpZHRoID8gbGFiZWxXaWR0aCA6IHRoaXMubWluaW11bVdpZHRoO1xyXG4gICAgdGhpcy5oZWlnaHQgPSBsYWJlbEhlaWdodCA+PSB0aGlzLm1pbmltdW1IZWlnaHQgPyBsYWJlbEhlaWdodCA6IHRoaXMubWluaW11bUhlaWdodDtcclxuXHJcbiAgICB0aGlzLnNldEludGVyYWN0aXZlKHsgdXNlSGFuZEN1cnNvcjogdHJ1ZSB9KVxyXG4gICAgICAub24oJ3BvaW50ZXJvdmVyJywgdGhpcy5lbnRlck1lbnVCdXR0b25Ib3ZlclN0YXRlKVxyXG4gICAgICAub24oJ3BvaW50ZXJvdXQnLCB0aGlzLmVudGVyTWVudUJ1dHRvblJlc3RTdGF0ZSlcclxuICAgICAgLm9uKCdwb2ludGVyZG93bicsIHRoaXMuZW50ZXJNZW51QnV0dG9uQWN0aXZlU3RhdGUpXHJcbiAgICAgIC5vbigncG9pbnRlcnVwJywgdGhpcy5lbnRlck1lbnVCdXR0b25Ib3ZlclN0YXRlKTtcclxuXHJcbiAgICBpZiAob25DbGljaykge1xyXG4gICAgICB0aGlzLm9uKCdwb2ludGVydXAnLCBvbkNsaWNrKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmVudGVyTWVudUJ1dHRvblJlc3RTdGF0ZSgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBlbnRlck1lbnVCdXR0b25Ib3ZlclN0YXRlKCkge1xyXG4gICAgdGhpcy5sYWJlbC5zZXRDb2xvcignIzAwMDAwMCcpO1xyXG4gICAgdGhpcy5zZXRGaWxsU3R5bGUoMHg4ODg4ODgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBlbnRlck1lbnVCdXR0b25SZXN0U3RhdGUoKSB7XHJcbiAgICB0aGlzLmxhYmVsLnNldENvbG9yKCcjRkZGRkZGJyk7XHJcbiAgICB0aGlzLnNldEZpbGxTdHlsZSgweDg4ODg4OCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGVudGVyTWVudUJ1dHRvbkFjdGl2ZVN0YXRlKCkge1xyXG4gICAgdGhpcy5sYWJlbC5zZXRDb2xvcignI0JCQkJCQicpO1xyXG4gICAgdGhpcy5zZXRGaWxsU3R5bGUoMHg0NDQ0NDQpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgKiBhcyBQaGFzZXIgZnJvbSAncGhhc2VyJztcclxuXHJcbmV4cG9ydCBjbGFzcyBTY2VuZUJ1dHRvbiBleHRlbmRzIFBoYXNlci5HYW1lT2JqZWN0cy5SZWN0YW5nbGUge1xyXG4gIHB1YmxpYyBsYWJlbDogUGhhc2VyLkdhbWVPYmplY3RzLlRleHQ7XHJcbiAgcHVibGljIHBhZGRpbmcgPSAxMDtcclxuICBwdWJsaWMgbWluaW11bVdpZHRoID0gNTA7XHJcbiAgcHVibGljIG1pbmltdW1IZWlnaHQgPSA1MDtcclxuICBjb25zdHJ1Y3RvcihzY2VuZTogUGhhc2VyLlNjZW5lLCB4OiBudW1iZXIsIHk6IG51bWJlciwgdGV4dDogc3RyaW5nLCBvbkNsaWNrPzogKCkgPT4gdm9pZCkge1xyXG4gICAgc3VwZXIoc2NlbmUsIHgsIHkpO1xyXG4gICAgc2NlbmUuYWRkLmV4aXN0aW5nKHRoaXMpO1xyXG4gICAgdGhpcy5zZXRPcmlnaW4oMCwgMCk7XHJcblxyXG4gICAgdGhpcy5sYWJlbCA9IHNjZW5lLmFkZFxyXG4gICAgICAudGV4dCh4ICsgdGhpcy5wYWRkaW5nLCB5ICsgdGhpcy5wYWRkaW5nLCB0ZXh0KVxyXG4gICAgICAuc2V0Rm9udFNpemUoMTgpXHJcbiAgICAgIC5zZXRBbGlnbignY2VudGVyJyk7XHJcblxyXG4gICAgY29uc3QgbGFiZWxXaWR0aCA9IHRoaXMubGFiZWwud2lkdGggKyB0aGlzLnBhZGRpbmc7XHJcbiAgICBjb25zdCBsYWJlbEhlaWdodCA9IHRoaXMubGFiZWwuaGVpZ2h0ICsgdGhpcy5wYWRkaW5nO1xyXG5cclxuICAgIHRoaXMud2lkdGggPSBsYWJlbFdpZHRoID49IHRoaXMubWluaW11bVdpZHRoID8gbGFiZWxXaWR0aCA6IHRoaXMubWluaW11bVdpZHRoO1xyXG4gICAgdGhpcy5oZWlnaHQgPSBsYWJlbEhlaWdodCA+PSB0aGlzLm1pbmltdW1IZWlnaHQgPyBsYWJlbEhlaWdodCA6IHRoaXMubWluaW11bUhlaWdodDtcclxuXHJcbiAgICB0aGlzLnNldEludGVyYWN0aXZlKHsgdXNlSGFuZEN1cnNvcjogdHJ1ZSB9KVxyXG4gICAgICAub24oJ3BvaW50ZXJvdmVyJywgdGhpcy5lbnRlck1lbnVCdXR0b25Ib3ZlclN0YXRlKVxyXG4gICAgICAub24oJ3BvaW50ZXJvdXQnLCB0aGlzLmVudGVyTWVudUJ1dHRvblJlc3RTdGF0ZSlcclxuICAgICAgLm9uKCdwb2ludGVyZG93bicsIHRoaXMuZW50ZXJNZW51QnV0dG9uQWN0aXZlU3RhdGUpXHJcbiAgICAgIC5vbigncG9pbnRlcnVwJywgdGhpcy5lbnRlck1lbnVCdXR0b25Ib3ZlclN0YXRlKTtcclxuXHJcbiAgICBpZiAob25DbGljaykge1xyXG4gICAgICB0aGlzLm9uKCdwb2ludGVydXAnLCBvbkNsaWNrKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmVudGVyTWVudUJ1dHRvblJlc3RTdGF0ZSgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBlbnRlck1lbnVCdXR0b25Ib3ZlclN0YXRlKCkge1xyXG4gICAgdGhpcy5sYWJlbC5zZXRDb2xvcignIzAwMDAwMCcpO1xyXG4gICAgdGhpcy5zZXRGaWxsU3R5bGUoMHg4ODg4ODgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBlbnRlck1lbnVCdXR0b25SZXN0U3RhdGUoKSB7XHJcbiAgICB0aGlzLmxhYmVsLnNldENvbG9yKCcjRkZGRkZGJyk7XHJcbiAgICB0aGlzLnNldEZpbGxTdHlsZSgweEM4MDAwMCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGVudGVyTWVudUJ1dHRvbkFjdGl2ZVN0YXRlKCkge1xyXG4gICAgdGhpcy5sYWJlbC5zZXRDb2xvcignI0JCQkJCQicpO1xyXG4gICAgdGhpcy5zZXRGaWxsU3R5bGUoMHg0NDQ0NDQpO1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9