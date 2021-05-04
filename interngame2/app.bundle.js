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
    ['Angostura Bitters', 0xB1250C]
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
var scene_button_1 = __webpack_require__(/*! ../ui/scene-button */ "./src/ui/scene-button.ts");
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
        new scene_button_1.SceneButton(this, width - 50, 50, "X", function () { _this.onFinish(false); _this.scene.stop(); });
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
                _this.onFinish(true);
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
var scene_button_1 = __webpack_require__(/*! ../ui/scene-button */ "./src/ui/scene-button.ts");
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
        new scene_button_1.SceneButton(this, width - 50, 50, "X", function () { _this.onFinish(false); _this.scene.stop(); });
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
var scene_button_1 = __webpack_require__(/*! ../ui/scene-button */ "./src/ui/scene-button.ts");
var other_glass_button_1 = __webpack_require__(/*! ../ui/other-glass-button */ "./src/ui/other-glass-button.ts");
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
                    _this.scene.launch(nextScene, { onFinish: function (good) {
                            console.log("called");
                            _this.scene.setVisible(true);
                            if (good) {
                                _this.remoteSendAction(element, Number.parseInt(_this.selectedTarget).valueOf());
                                console.log("they did it");
                            }
                            _this.scene.resume();
                        }, BottleSpriteName: name });
                    console.log(name);
                });
            });
            this.glassButtons = [];
            this.add.text(this.emptyGlass.getTopLeft().x, this.emptyGlass.getBottomCenter().y + height / 15 - 15, "target cup:");
            var _loop_1 = function (i) {
                this_1.glassButtons.push(new other_glass_button_1.OtherGlassButton(this_1, this_1.emptyGlass.getTopLeft().x + i * 30, this_1.emptyGlass.getBottomCenter().y + height / 15, (i + 1).toString(), function () {
                    _this.render = true;
                    if (!_this.cupLocks.includes(i)) {
                        _this.selectedTarget = i.toString();
                        console.log("selected = " + _this.selectedTarget);
                    }
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
                this_2.glassButtons.push(new other_glass_button_1.OtherGlassButton(this_2, this_2.emptyGlass.getTopLeft().x + i * 30, height / 12, (i + 1).toString(), function () {
                    _this.render = true;
                    if (!_this.cupLocks.includes(i)) {
                        _this.selectedTarget = i.toString();
                        console.log("selected = " + _this.selectedTarget);
                    }
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
                    element.label.setText("🔒");
                    element.setFillStyle(0x444444);
                }
                else {
                    element.label.setText(element.ogtext);
                    if (_this.selectedTarget == idx.toString()) {
                        //element.enterMenuButtonActiveState();
                        element.setFillStyle(0x444444);
                    }
                    else {
                        //element.enterMenuButtonRestState();
                        element.setFillStyle(0x888888);
                    }
                }
            });
            if (this.cupNumber < 4) {
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
            }
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
            console.log("StatePush: locks: " + update.cupLocks.join(",") + " state: " + update.cupState.join(",") + " ");
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
        connection.on('EmptyCup', function (cup) {
            console.log("Unlocked " + cup);
            _this.cupLocks = _this.cupLocks.filter(function (item) { return item != cup; });
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
            e.setFillStyle(0x888888);
            e.label.setText(e.ogtext);
            /*
            e.enterMenuButtonBlockedState();
            e.resetOnClick();
            e.enterMenuButtonRestState();*/
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
var scene_button_1 = __webpack_require__(/*! ../ui/scene-button */ "./src/ui/scene-button.ts");
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
                    _this.onFinish(true);
                    //this.scene.start('Game');
                }, 500);
            }
        });
        this.text1 = this.add.text(10, 10, '', { color: '#00ff00' });
        this.text2 = this.add.text(10, 25, '', { color: '#00ff00' });
        this.text3 = this.add.text(10, 40, '', { color: '#00ff00' });
        this.text4 = this.add.text(10, 55, '', { color: '#00ff00' });
        this.text5 = this.add.text(10, 70, '', { color: '#00ff00' });
        new scene_button_1.SceneButton(this, width - 50, 50, "X", function () { _this.onFinish(false); _this.scene.stop(); });
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
var scene_button_1 = __webpack_require__(/*! ../ui/scene-button */ "./src/ui/scene-button.ts");
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
        new scene_button_1.SceneButton(this, width - 50, 50, "X", function () { _this.onFinish(false); _this.scene.stop(); });
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
                    _this.onFinish(true);
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
var scene_button_1 = __webpack_require__(/*! ../ui/scene-button */ "./src/ui/scene-button.ts");
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
                    _this.onFinish(true);
                }, 500);
            }
        });
        this.text1 = this.add.text(10, 10, '', { color: '#00ff00' });
        this.text2 = this.add.text(10, 25, '', { color: '#00ff00' });
        this.text3 = this.add.text(10, 40, '', { color: '#00ff00' });
        this.text4 = this.add.text(10, 55, '', { color: '#00ff00' });
        this.text5 = this.add.text(10, 70, '', { color: '#00ff00' });
        this.text1.setText("" + this.iceLevel);
        new scene_button_1.SceneButton(this, width - 50, 50, "X", function () { _this.onFinish(false); _this.scene.stop(); }).setDepth(100).label.setDepth(101);
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
var scene_button_1 = __webpack_require__(/*! ../ui/scene-button */ "./src/ui/scene-button.ts");
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
                        _this.onFinish(true);
                    }, 500);
                }
            }
        });
        this.text1 = this.add.text(10, 10, '', { color: '#00ff00' });
        this.text2 = this.add.text(10, 25, '', { color: '#00ff00' });
        this.text3 = this.add.text(10, 40, '', { color: '#00ff00' });
        this.text4 = this.add.text(10, 55, '', { color: '#00ff00' });
        this.text5 = this.add.text(10, 70, '', { color: '#00ff00' });
        new scene_button_1.SceneButton(this, width - 50, 50, "X", function () { _this.onFinish(false); _this.scene.stop(); }).setDepth(100).label.setDepth(101);
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
var scene_button_1 = __webpack_require__(/*! ../ui/scene-button */ "./src/ui/scene-button.ts");
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
        new scene_button_1.SceneButton(this, width - 50, 50, "X", function () { _this.onFinish(false); _this.scene.stop(); });
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
                _this.onFinish(true);
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
var scene_button_1 = __webpack_require__(/*! ../ui/scene-button */ "./src/ui/scene-button.ts");
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
        new scene_button_1.SceneButton(this, width - 50, 50, "X", function () { _this.onFinish(false); _this.scene.stop(); });
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
                _this.onFinish(true);
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
var scene_button_1 = __webpack_require__(/*! ../ui/scene-button */ "./src/ui/scene-button.ts");
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
        new scene_button_1.SceneButton(this, width - 50, 50, "X", function () { _this.onFinish(false); _this.scene.stop(); });
    };
    VermouthScene.prototype.update = function () { };
    return VermouthScene;
}(Phaser.Scene));
exports.VermouthScene = VermouthScene;


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

/***/ "./src/ui/other-glass-button.ts":
/*!**************************************!*\
  !*** ./src/ui/other-glass-button.ts ***!
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
exports.OtherGlassButton = void 0;
var Phaser = __webpack_require__(/*! phaser */ "./node_modules/phaser/dist/phaser.js");
var OtherGlassButton = /** @class */ (function (_super) {
    __extends(OtherGlassButton, _super);
    function OtherGlassButton(scene, x, y, text, onClick) {
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
            //.on('pointerover', this.enterMenuButtonHoverState)
            //.on('pointerout', this.enterMenuButtonRestState)
            .on('pointerdown', _this.enterMenuButtonActiveState)
            .on('pointerup', _this.enterMenuButtonHoverState);
        if (onClick) {
            _this.on('pointerup', onClick);
        }
        _this.enterMenuButtonRestState();
        return _this;
    }
    OtherGlassButton.prototype.enterMenuButtonHoverState = function () {
        this.label.setColor('#000000');
        this.setFillStyle(0x888888);
    };
    OtherGlassButton.prototype.enterMenuButtonRestState = function () {
        this.label.setColor('#FFFFFF');
        this.setFillStyle(0x888888);
    };
    OtherGlassButton.prototype.enterMenuButtonActiveState = function () {
        this.label.setColor('#BBBBBB');
        this.setFillStyle(0x444444);
    };
    return OtherGlassButton;
}(Phaser.GameObjects.Rectangle));
exports.OtherGlassButton = OtherGlassButton;


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hlbHBlcnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy9iaXR0ZXJzLXNjZW5lLnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvYm9vdC1zY2VuZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL2JvdXJib24tc2NlbmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy9kaXNjb25uZWN0ZWQtc2NlbmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy9ldmVyeW9uZS1pbi1zY2VuZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL2dhbWUtc2NlbmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy9pY2Utc2NlbmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL2p1aWNlci1zY2VuZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL21haW4tbWVudS1zY2VuZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL211ZGRsZS1zY2VuZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL29yYW5nZS1zY2VuZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL3Blcm1pc3Npb25zLXNjZW5lLnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvcG91ci1zY2VuZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL3Jlc3VsdHMtc2NlbmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy9zaGFrZS1zY2VuZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL3N1Y2Nlc3Mtc2NlbmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy92ZXJtb3V0aC1zY2VuZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvbWVudS1idXR0b24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL290aGVyLWdsYXNzLWJ1dHRvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvc2NlbmUtYnV0dG9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLFFBQVEsb0JBQW9CO1FBQzVCO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsaUJBQWlCLDRCQUE0QjtRQUM3QztRQUNBO1FBQ0Esa0JBQWtCLDJCQUEyQjtRQUM3QztRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7UUFF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QUUsd0JBQXdCLENBQUMsQ0FBQztRQUNqRCxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUUsNEJBQTRCLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUseUJBQXlCLENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQUUsOEJBQThCLENBQUMsQ0FBQztRQUM5RCxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQUUsK0JBQStCLENBQUMsQ0FBQztRQUMvRCxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLEVBQUUsaUNBQWlDLENBQUMsQ0FBQztRQUNuRSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLEVBQUUsaUNBQWlDLENBQUMsQ0FBQztRQUNuRSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLEVBQUUsZ0NBQWdDLENBQUMsQ0FBQztRQUNqRSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLEVBQUUsaUNBQWlDLENBQUMsQ0FBQztRQUNuRSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLEVBQUUsaUNBQWlDLENBQUMsQ0FBQztRQUNuRSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLEVBQUUsaUNBQWlDLENBQUMsQ0FBQztRQUNuRSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLEVBQUUsaUNBQWlDLENBQUMsQ0FBQztRQUNuRSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsd0JBQXdCLENBQUMsQ0FBQztRQUNqRCxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUUsNEJBQTRCLENBQUMsQ0FBQztRQUMxRCxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUseUJBQXlCLENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUseUJBQXlCLENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUseUJBQXlCLENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUseUJBQXlCLENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUseUJBQXlCLENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUUsNkJBQTZCLENBQUMsQ0FBQztRQUMzRCxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsMkJBQTJCLENBQUMsQ0FBQztRQUN2RCxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLEVBQUUsMkJBQTJCLENBQUMsQ0FBQztRQUM1RCxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLEVBQUUsaUNBQWlDLENBQUMsQ0FBQztRQUNuRSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsRUFBRSxxQ0FBcUMsQ0FBQyxDQUFDO1FBQzNFLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsRUFBRSxpQ0FBaUMsQ0FBQyxDQUFDO1FBQ25FLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSwyQkFBMkIsQ0FBQyxDQUFDO1FBQ3ZELElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsRUFBRSwyQkFBMkIsQ0FBQyxDQUFDO1FBQzVELElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFBRSwyQkFBMkIsQ0FBQyxDQUFDO1FBQ3hELElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFBRSw0QkFBNEIsQ0FBQyxDQUFDO1FBQ3pELElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFBRSw0QkFBNEIsQ0FBQyxDQUFDO1FBQ3pELElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFBRSw0QkFBNEIsQ0FBQyxDQUFDO1FBQ3pELElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLG1CQUFtQixFQUFFLDRCQUE0QixDQUFDLENBQUM7UUFDbkUsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFLDRCQUE0QixDQUFDLENBQUM7UUFDekQsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFFLDRCQUE0QixDQUFDLENBQUM7UUFDMUQsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFFLDZCQUE2QixDQUFDLENBQUM7UUFDM0QsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFFLDZCQUE2QixDQUFDLENBQUM7UUFDM0QsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFFLDZCQUE2QixDQUFDLENBQUM7UUFDM0QsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFLDRCQUE0QixDQUFDLENBQUM7UUFDekQsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxFQUFFLDRCQUE0QixDQUFDLENBQUM7UUFDOUQsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLDJCQUEyQixDQUFDLENBQUM7UUFDdkQsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxFQUFFLHVDQUF1QyxDQUFDLENBQUM7UUFDeEUsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxFQUFFLHNDQUFzQyxDQUFDLENBQUM7UUFDdEUsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxFQUFFLHdDQUF3QyxDQUFDLENBQUM7UUFDMUUsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFL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LENBQUMsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsR0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUM7WUFDL0ssSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxFQUFFLE1BQU0sR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsR0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsR0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUM7WUFDM0ssSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxFQUFFLE1BQU0sR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEdBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1lBRXZJLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDakcsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNqRyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFD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QUksS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDLEdBQUcsS0FBSSxDQUFDLElBQUksRUFBRTt3QkFDcEMsS0FBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztxQkFDbEM7b0JBQ0QsSUFBSSxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUMsR0FBRyxLQUFJLENBQUMsSUFBSSxFQUFFO3dCQUNwQyxLQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO3FCQUNsQztvQkFDRCxJQUFJLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQyxHQUFHLEtBQUksQ0FBQyxJQUFJLEVBQUU7d0JBQ3BDLEtBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7cUJBQ2xDO29CQUNELElBQUksS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDLEdBQUcsS0FBSSxDQUFDLElBQUksRUFBRTt3QkFDcEMsS0FBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztxQkFDbEM7b0JBQ0QsSUFBSSxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUMsR0FBRyxLQUFJLENBQUMsSUFBSSxFQUFFO3dCQUNwQyxLQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO3FCQUNsQztvQkFDRCxJQUFJLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQyxHQUFHLEtBQUksQ0FBQyxJQUFJLEVBQUU7d0JBQ3BDLEtBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7cUJBQ2xDO29CQUNELEtBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLE9BQUssS0FBSSxDQUFDLElBQUksU0FBSSxLQUFJLENBQUMsSUFBTSxDQUFDLENBQUM7b0JBQ2xELEtBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLE9BQUssS0FBSSxDQUFDLElBQUksU0FBSSxLQUFJLENBQUMs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RSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUMvQixJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFDSCxrQkFBQztBQUFELENBQUMsQ0FoRGdDLE1BQU0sQ0FBQyxXQUFXLENBQUMsU0FBUyxHQWdENUQ7QUFoRFksa0NBQVciLCJmaWxlIjoiYXBwLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJhcHBcIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbXCIuL3NyYy9tYWluLnRzXCIsXCJ2ZW5kb3JzXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiaW1wb3J0ICogYXMgUGhhc2VyIGZyb20gJ3BoYXNlcic7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0R2FtZVdpZHRoID0gKHNjZW5lOiBQaGFzZXIuU2NlbmUpOiBudW1iZXIgPT4ge1xyXG4gIHJldHVybiBzY2VuZS5nYW1lLnNjYWxlLndpZHRoO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldEdhbWVIZWlnaHQgPSAoc2NlbmU6IFBoYXNlci5TY2VuZSk6IG51bWJlciA9PiB7XHJcbiAgcmV0dXJuIHNjZW5lLmdhbWUuc2NhbGUuaGVpZ2h0O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGRyaW5rVG9Db2xvck1hcDogTWFwPHN0cmluZywgbnVtYmVyPiA9IG5ldyBNYXAoW1xyXG4gIFsnQm91cmJvbicsIDB4ZGI3OTAwXSxcclxuICBbJ1Zlcm1vdXRoJywgMHg1NTAxMDNdLFxyXG4gIFsnVm9ka2EnLCAweDgwODA4MF0sXHJcbiAgWydHaW4nLCAweDc1YTNhM10sXHJcbiAgWydSdW0nLCAweEFDNTkyRF0sXHJcbiAgWydUcmlwbGUgU2VjJywgMHhmZmNjOTldLFxyXG4gIFsnVGVxdWlsYScsIDB4ODBmZmZmXSxcclxuICBbJ0Nva2UnLCAweEFDNTkyRF0sXHJcbiAgWydMZW1vbiBKdWljZScsIDB4ZmZmZjk5XSxcclxuICBbJ0xpbWUgSnVpY2UnLCAweGQ5ZmZiM10sXHJcbiAgWydPcmFuZ2UgSnVpY2UnLCAweGZmY2M5OV0sXHJcbiAgWydBbmdvc3R1cmEgQml0dGVycycsIDB4QjEyNTBDXVxyXG5dKTtcclxuXHJcbmV4cG9ydCBjb25zdCBJbmdyZWRpZW50cyA9IFtcclxuICAnU2hha2UgRHJpbmsnLFxyXG4gICdNdWRkbGUgRHJpbmsnLFxyXG4gICdPcmFuZ2UgUGVlbCcsXHJcbiAgJ0JvdXJib24nLFxyXG4gICdJY2UgQ3ViZScsXHJcbiAgJ1Zlcm1vdXRoJyxcclxuICAnTGVtb24gSnVpY2UnLFxyXG4gICdMaW1lIEp1aWNlJyxcclxuICAnT3JhbmdlIEp1aWNlJyxcclxuICAnQW5nb3N0dXJhIEJpdHRlcnMnLFxyXG4gICdWb2RrYScsXHJcbiAgJ0dpbicsXHJcbiAgJ1J1bScsXHJcbiAgJ1RyaXBsZSBTZWMnLFxyXG4gICdUZXF1aWxhJyxcclxuICAnQ29rZScsXHJcbiAgJ1NvZGEnLFxyXG4gICdTaW1wbGUgU3lydXAnLFxyXG4gICdUb25pYycsXHJcbiAgJ0JyYW5keScsXHJcbiAgJ0NydXNoZWQgSWNlJyxcclxuICAnTGltZSBXZWRnZScsXHJcbiAgJ0xlbW9uIFdlZGdlJyxcclxuICAnU3RpciBEcmluaycsXHJcbiAgJ1N0cmFpbiBEcmluaycsXHJcbiAgJ0NvZ25hYycsXHJcbiAgJ0VnZyBXaGl0ZSdcclxuXTtcclxuLypcclxuZXhwb3J0IGNvbnN0IHN0cmluZ1RvQmFja2VuZE51bWJlck1hcDogTWFwPHN0cmluZywgbnVtYmVyPiA9IG5ldyBNYXAoW1xyXG4gIFsnVGVxdWlsYScsIDBdLFxyXG4gIFsnQnJhbmR5JywgMV0sXHJcbiAgWydHaW4nLCAyXSxcclxuICBbJ1J1bScsIDNdLFxyXG4gIFsnVm9ka2EnLCA0XSxcclxuICBbJ1doaXNreScsIDVdLFxyXG4gIFsnVHJpcGxlIFNlYycsIDZdLFxyXG4gIFsnVmVybW91dGgnLCA3XSxcclxuICBbJ0FuZ29zdHVyYSBCaXR0ZXJzJywgOF0sXHJcbiAgWydDb2tlJywgOV0sXHJcbiAgWydTb2RhJywgMTBdLFxyXG4gIFsnVG9uaWMnLCAwXSxcclxuICBbJ1NpbXBsZSBTeXJ1cCcsIDBdLFxyXG4gIFsnSWNlIEN1YmUnLCAwXSxcclxuICBbJ1RvbmljJywgMF0sXHJcbiAgWydMZW1vbiBKdWljZScsIDBdLFxyXG4gIFsnTGltZSBKdWljZScsIDBdLFxyXG4gIFsnT3JhbmdlIEp1aWNlJywgMF0sXHJcbiAgWydTaGFrZSBEcmluaycsIDBdLFxyXG4gIFsnU3RpciBEcmluaycsIDBdLFxyXG4gIFsnTXVkZGxlIERyaW5rJywgMF0sXHJcbiAgWydMaW1lIFdlZGdlJywgMF0sXHJcbiAgWydMZW1vbiBXZWRnZScsIDBdLFxyXG4gIFsnT3JhbmdlIFdlZGdlJywgMF0sXHJcbl0pKi9cclxuIiwiaW1wb3J0ICogYXMgUGhhc2VyIGZyb20gJ3BoYXNlcic7XHJcbmltcG9ydCBTY2VuZXMgZnJvbSAnLi9zY2VuZXMnO1xyXG53aW5kb3cub25sb2FkID0gZnVuY3Rpb24oKSB7XHJcbiAgY29uc3QgZ2FtZUNvbmZpZzogUGhhc2VyLlR5cGVzLkNvcmUuR2FtZUNvbmZpZyA9IHtcclxuICAgIHRpdGxlOiAnU2FtcGxlJyxcclxuICBcclxuICAgIHR5cGU6IFBoYXNlci5DQU5WQVMsXHJcbiAgXHJcbiAgICBzY2FsZToge1xyXG4gICAgICB3aWR0aDogd2luZG93LmlubmVyV2lkdGgsXHJcbiAgICAgIGhlaWdodDogd2luZG93LmlubmVySGVpZ2h0LFxyXG4gICAgfSxcclxuICBcclxuICAgIHNjZW5lOiBTY2VuZXMsXHJcbiAgXHJcbiAgICBwaHlzaWNzOiB7XHJcbiAgICAgIGRlZmF1bHQ6ICdhcmNhZGUnLFxyXG4gICAgICBhcmNhZGU6IHtcclxuICAgICAgICBkZWJ1ZzogdHJ1ZSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgXHJcbiAgICBwYXJlbnQ6ICdnYW1lJyxcclxuICAgIGJhY2tncm91bmRDb2xvcjogJyMwMDAwMDAnLFxyXG4gIH07XHJcbiAgXHJcbiAgdmFyIGdhbWUgPSBuZXcgUGhhc2VyLkdhbWUoZ2FtZUNvbmZpZyk7XHJcbiAgXHJcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHtcclxuICAgIGdhbWUuc2NhbGUucmVmcmVzaCgpO1xyXG4gIH0pO1xyXG59XHJcblxyXG4iLCJpbXBvcnQgeyBJbnB1dCwgR2FtZU9iamVjdHMgfSBmcm9tICdwaGFzZXInO1xyXG5pbXBvcnQgeyBTY2VuZUJ1dHRvbiB9IGZyb20gJy4uL3VpL3NjZW5lLWJ1dHRvbic7XHJcblxyXG5jb25zdCBzY2VuZUNvbmZpZzogUGhhc2VyLlR5cGVzLlNjZW5lcy5TZXR0aW5nc0NvbmZpZyA9IHtcclxuICBhY3RpdmU6IGZhbHNlLFxyXG4gIHZpc2libGU6IGZhbHNlLFxyXG4gIGtleTogJ0FuZ29zdHVyYSBCaXR0ZXJzJyxcclxufTtcclxuXHJcbmNsYXNzIEdhbWVTY2VuZUFyZ3VtZW50cyB7XHJcbiAgcHVibGljIG9uRmluaXNoOiBGdW5jdGlvbjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEJpdHRlcnNTY2VuZSBleHRlbmRzIFBoYXNlci5TY2VuZSB7XHJcbiAgcHVibGljIHNwZWVkID0gMjAwO1xyXG5cclxuICBwcml2YXRlIGN1cnNvcktleXM6IFBoYXNlci5UeXBlcy5JbnB1dC5LZXlib2FyZC5DdXJzb3JLZXlzO1xyXG4gIHByaXZhdGUgYm90dGxlOiBQaGFzZXIuR2FtZU9iamVjdHMuU3ByaXRlO1xyXG4gIC8vcHJpdmF0ZSBib3VyYm9uOiBQaGFzZXIuR2FtZU9iamVjdHMuU3ByaXRlO1xyXG4gIHByaXZhdGUgZW1wdHlHbGFzczogUGhhc2VyLkdhbWVPYmplY3RzLlNwcml0ZTtcclxuICBwcml2YXRlIGZpbGxlZGdsYXNzMTogUGhhc2VyLkdhbWVPYmplY3RzLlNwcml0ZTtcclxuICBwcml2YXRlIGZpbGxlZGdsYXNzMjogUGhhc2VyLkdhbWVPYmplY3RzLlNwcml0ZTtcclxuXHJcbiAgcHJpdmF0ZSBjb250ZW50czogc3RyaW5nW10gPSBbXTtcclxuICBwcml2YXRlIGdsYXNzRmlsbGVyczogUGhhc2VyLkdhbWVPYmplY3RzLlNwcml0ZVtdID0gW107XHJcblxyXG4gIHByaXZhdGUgaXNQb3VyaW5nID0gMDtcclxuICBwcml2YXRlIHNoYWtlQ291bnQgPSAwO1xyXG4gIHByaXZhdGUgdHJhbnNpdGlvbmluZyA9IGZhbHNlO1xyXG4gIHByaXZhdGUgbiA9IDA7XHJcbiAgcHJpdmF0ZSBudGhyZXNob2xkID0gMDtcclxuICBwcml2YXRlIG1heHggPSAwO1xyXG4gIHByaXZhdGUgbWF4eSA9IDA7XHJcbiAgcHJpdmF0ZSBtYXh6ID0gMDtcclxuICBwcml2YXRlIG1pbnggPSAwO1xyXG4gIHByaXZhdGUgbWlueSA9IDA7XHJcbiAgcHJpdmF0ZSBtaW56ID0gMDtcclxuICBwcml2YXRlIHRocmVzaG9sZCA9IDE1O1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKHNjZW5lQ29uZmlnKTtcclxuICB9XHJcbiAgcHVibGljIHRleHQxOiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dDtcclxuICBwdWJsaWMgdGV4dDI6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0O1xyXG4gIHB1YmxpYyB0ZXh0MzogUGhhc2VyLkdhbWVPYmplY3RzLlRleHQ7XHJcbiAgcHVibGljIHRleHQ0OiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dDtcclxuICBwdWJsaWMgdGV4dDU6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0O1xyXG4gIHB1YmxpYyBib3R0bGVOYW1lOiBzdHJpbmc7XHJcbiAgcHJpdmF0ZSBsaXF1aWRSZWN0YW5nbGU6IFBoYXNlci5HYW1lT2JqZWN0cy5SZWN0YW5nbGU7XHJcbiAgcHVibGljIG9uRmluaXNoOiBGdW5jdGlvbjtcclxuXHJcbiAgcHVibGljIGluaXQoZGF0YTogR2FtZVNjZW5lQXJndW1lbnRzKTogdm9pZCB7XHJcbiAgICBjb25zb2xlLmxvZygnQW5nb3N0dXJhIEJpdHRlcnMgc2NlbmUgaW5pdCcpO1xyXG4gICAgdGhpcy5ib3R0bGVOYW1lID0gJ2JpdHRlcnMnO1xyXG4gICAgdGhpcy5vbkZpbmlzaCA9IGRhdGEub25GaW5pc2g7XHJcbiAgICBcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjcmVhdGUoKTogdm9pZCB7XHJcbiAgICBjb25zb2xlLmxvZygnQW5nb3N0dXJhIEJpdHRlcnMgc2NlbmUgY3JlYXRlJyk7XHJcbiAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IHRoaXMuc3lzLmdhbWUuY2FudmFzO1xyXG4gICAgdGhpcy5pc1BvdXJpbmcgPSAwO1xyXG4gICAgdGhpcy5zaGFrZUNvdW50ID0gMDtcclxuICAgIHRoaXMudHJhbnNpdGlvbmluZyA9IGZhbHNlO1xyXG4gICAgdGhpcy5uID0gMDtcclxuICAgIHRoaXMubnRocmVzaG9sZCA9IDEzO1xyXG4gICAgdGhpcy5jYWxsYmFjaygpO1xyXG4gICAgLy8gQWRkIGEgcGxheWVyIHNwcml0ZSB0aGF0IGNhbiBiZSBtb3ZlZCBhcm91bmQuIFBsYWNlIGhpbSBpbiB0aGUgbWlkZGxlIG9mIHRoZSBzY3JlZW4uXHJcbiAgICAvL3RoaXMuZW1wdHlHbGFzcyA9IHRoaXMuYWRkLnNwcml0ZSh3aWR0aCAvIDQsIGhlaWdodCAvIDIsICdlbXB0eWdsYXNzJyk7XHJcbiAgICAvL3RoaXMuZmlsbGVkZ2xhc3MxID0gdGhpcy5hZGQuc3ByaXRlKHdpZHRoIC8gNCwgaGVpZ2h0IC8gMiwgJ2ZpbGxlZGdsYXNzMScpO1xyXG4gICAgLy90aGlzLmZpbGxlZGdsYXNzMiA9IHRoaXMuYWRkLnNwcml0ZSh3aWR0aCAvIDQsIGhlaWdodCAvIDIsICdmaWxsZWRnbGFzczInKTtcclxuXHJcbiAgICAvL3RoaXMuYm91cmJvbiA9IHRoaXMuYWRkLnNwcml0ZSh3aWR0aCAvIDgsIGhlaWdodCAvIDQsICdjYW5lbGxla25pZmUnKS5zZXRJbnRlcmFjdGl2ZSgpO1xyXG4gICAgLy90aGlzLmJvdXJib24ub24oJ3BvaW50ZXJkb3duJywgdGhpcy5jYWxsYmFjayApO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKGBnbGFzcyB4OiAke3dpZHRoIC8gNH1gKTtcclxuICAgIGNvbnNvbGUubG9nKGBnbGFzcyB5OiAke2hlaWdodCAvIDJ9YCk7XHJcblxyXG4gICAgdGhpcy5ib3R0bGUgPSB0aGlzLmFkZC5zcHJpdGUod2lkdGggLyAyLCBoZWlnaHQgLyAyLCB0aGlzLmJvdHRsZU5hbWUpLnNldEludGVyYWN0aXZlKCk7XHJcbiAgICBjb25zb2xlLmxvZyhgdHJpZWQgdG8gcmVuZGVyICR7dGhpcy5ib3R0bGVOYW1lfSBib3R0bGVgKTtcclxuICAgIHRoaXMuYm90dGxlLnNldFNjYWxlKDAuNik7XHJcbiAgICAvL2NvbnNvbGUubG9nKHRoaXMuZW1wdHlHbGFzcy54KTtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMuYm90dGxlLmRpc3BsYXlIZWlnaHQpO1xyXG4gICAgLy90aGlzLmJvdHRsZS5zZXRQb3NpdGlvbih0aGlzLmVtcHR5R2xhc3MueCArIHRoaXMuYm90dGxlLmRpc3BsYXlIZWlnaHQgLyA0KTtcclxuICAgIC8vdGhpcy5ib3R0bGUuc2V0U2NhbGUoMC41KTtcclxuXHJcbiAgICB0aGlzLmJvdHRsZS5vbigncG9pbnRlcm92ZXInLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMuYm90dGxlLnNldFRpbnQoMHhjY2NjY2MpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5ib3R0bGUub24oJ3BvaW50ZXJvdXQnLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMuYm90dGxlLmNsZWFyVGludCgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5ib3R0bGUub24oJ3BvaW50ZXJkb3duJywgKCkgPT4ge1xyXG4gICAgICB0aGlzLnNoYWtlQ291bnQrKztcclxuICAgICAgaWYgKHRoaXMuc2hha2VDb3VudCA+IDcpIHtcclxuICAgICAgICB0aGlzLnNoYWtlQ291bnQgPSA3O1xyXG4gICAgICB9XHJcbiAgICAgIC8vdGhpcy5ib3R0bGUuc2V0VGV4dHVyZShgc2hha2VyJHt0aGlzLnNoYWtlQ291bnR9YCk7XHJcbiAgICB9KTtcclxuICAgIHRoaXMuaW5wdXQuc2V0RHJhZ2dhYmxlKHRoaXMuYm90dGxlKTtcclxuXHJcbiAgICB0aGlzLmlucHV0Lm9uKCdkcmFnc3RhcnQnLCAocG9pbnRlciwgZ2FtZU9iamVjdCkgPT4ge1xyXG4gICAgICBnYW1lT2JqZWN0LnNldFRpbnQoMHg5OTk5OTkpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gVGhpcyBpcyBhIG5pY2UgaGVscGVyIFBoYXNlciBwcm92aWRlcyB0byBjcmVhdGUgbGlzdGVuZXJzIGZvciBzb21lIG9mIHRoZSBtb3N0IGNvbW1vbiBrZXlzLlxyXG4gICAgdGhpcy5jdXJzb3JLZXlzID0gdGhpcy5pbnB1dC5rZXlib2FyZC5jcmVhdGVDdXJzb3JLZXlzKCk7XHJcblxyXG4gICAgdGhpcy50ZXh0MSA9IHRoaXMuYWRkLnRleHQoNTAsIDEwLCAnJywgeyBjb2xvcjogJyMwMGZmMDAnIH0pO1xyXG4gICAgdGhpcy50ZXh0MiA9IHRoaXMuYWRkLnRleHQoNTAsIDMwLCAnJywgeyBjb2xvcjogJyMwMGZmMDAnIH0pO1xyXG4gICAgdGhpcy50ZXh0MyA9IHRoaXMuYWRkLnRleHQoNTAsIDYwLCAnJywgeyBjb2xvcjogJyMwMGZmMDAnIH0pO1xyXG4gICAgdGhpcy50ZXh0NCA9IHRoaXMuYWRkLnRleHQoNTAsIDkwLCAnJywgeyBjb2xvcjogJyMwMGZmMDAnIH0pO1xyXG4gICAgdGhpcy50ZXh0NSA9IHRoaXMuYWRkLnRleHQoNTAsIDEyMCwgJycsIHsgY29sb3I6ICcjMDBmZjAwJyB9KTtcclxuXHJcbiAgICB0aGlzLmJvdHRsZS5zZXREZXB0aCgxKTtcclxuICAgIG5ldyBTY2VuZUJ1dHRvbih0aGlzLCB3aWR0aC01MCwgNTAsIFwiWFwiLCAoKSA9PnsgdGhpcy5vbkZpbmlzaChmYWxzZSk7IHRoaXMuc2NlbmUuc3RvcCgpO30pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHVwZGF0ZSgpOiB2b2lkIHtcclxuICAgIC8vIEV2ZXJ5IGZyYW1lLCB3ZSBjcmVhdGUgYSBuZXcgdmVsb2NpdHkgZm9yIHRoZSBzcHJpdGUgYmFzZWQgb24gd2hhdCBrZXlzIHRoZSBwbGF5ZXIgaXMgaG9sZGluZyBkb3duLlxyXG4gICAgaWYgKHRoaXMubiA+IHRoaXMubnRocmVzaG9sZCAmJiB0aGlzLnNoYWtlQ291bnQgPD0gNykge1xyXG4gICAgICB0aGlzLm4gPSAwO1xyXG4gICAgICB0aGlzLnNoYWtlQ291bnQrKztcclxuICAgICAgdGhpcy50ZXh0NC5zZXRUZXh0KGBuICR7dGhpcy5ufSAke3RoaXMubnRocmVzaG9sZH1gKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnNoYWtlQ291bnQgJSAyID09IDApIHtcclxuICAgICAgdGhpcy5ib3R0bGUuc2V0VGV4dHVyZShgYml0dGVycyR7dGhpcy5zaGFrZUNvdW50IC8gMn1gKTtcclxuICAgICAgXHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5zaGFrZUNvdW50ID4gNSAmJiAhdGhpcy50cmFuc2l0aW9uaW5nKSB7XHJcbiAgICAgIHRoaXMudHJhbnNpdGlvbmluZyA9IHRydWU7XHJcbiAgICAgIGRvY3VtZW50LmNvb2tpZSA9IGBzaGFrZT0xYDtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zY2VuZS5zdG9wKCk7XHJcbiAgICAgICAgdGhpcy5vbkZpbmlzaCh0cnVlKTtcclxuICAgICAgfSwgNzUwKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRVc2VyQWdlbnQoKTogc3RyaW5nIHtcclxuICAgIC8vIChBKSBCUkVBSyBVU0VSIEFHRU5UIERPV05cclxuICAgIGNvbnNvbGUubG9nKG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKSk7XHJcbiAgICBjb25zdCBpc01vYmlsZSA9IG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5tYXRjaCgvbW9iaWxlL2kpLFxyXG4gICAgICBpc1RhYmxldCA9IG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5tYXRjaCgvdGFibGV0L2kpLFxyXG4gICAgICBpc0FuZHJvaWQgPSBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkubWF0Y2goL2FuZHJvaWQvaSksXHJcbiAgICAgIGlzaVBob25lID0gbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLm1hdGNoKC9pcGhvbmUvaSksXHJcbiAgICAgIGlzaVBhZCA9IG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5tYXRjaCgvaXBhZC9pKTtcclxuXHJcbiAgICAvLyAoQikgREVURUNURUQgREVWSUNFIFRZUEVcclxuICAgIGlmIChpc0FuZHJvaWQpIHtcclxuICAgICAgcmV0dXJuICdBbmRyb2lkJztcclxuICAgIH0gZWxzZSBpZiAoaXNpUGhvbmUgfHwgaXNpUGFkKSB7XHJcbiAgICAgIHJldHVybiAnQXBwbGUnO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuICdOb3BlJztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBjYWxsQXBwbGUoKTogdm9pZCB7XHJcbiAgICB0cnkge1xyXG4gICAgICBEZXZpY2VNb3Rpb25FdmVudC5yZXF1ZXN0UGVybWlzc2lvbigpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgdGhpcy50ZXh0MS5zZXRUZXh0KHJlc3BvbnNlKTtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignZGV2aWNlbW90aW9uJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhldmVudCk7XHJcbiAgICAgICAgICBpZiAoZXZlbnQuYWNjZWxlcmF0aW9uLnggPCB0aGlzLnRocmVzaG9sZCAqIC0xIHx8IGV2ZW50LmFjY2VsZXJhdGlvbi54ID4gdGhpcy50aHJlc2hvbGQpIHtcclxuICAgICAgICAgICAgdGhpcy5uKys7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKGV2ZW50LmFjY2VsZXJhdGlvbi55IDwgdGhpcy50aHJlc2hvbGQgKiAtMSB8fCBldmVudC5hY2NlbGVyYXRpb24ueSA+IHRoaXMudGhyZXNob2xkKSB7XHJcbiAgICAgICAgICAgIHRoaXMubisrO1xyXG4gICAgICAgICAgfSBlbHNlIGlmIChldmVudC5hY2NlbGVyYXRpb24ueiA8IHRoaXMudGhyZXNob2xkICogLTEgfHwgZXZlbnQuYWNjZWxlcmF0aW9uLnogPiB0aGlzLnRocmVzaG9sZCkge1xyXG4gICAgICAgICAgICB0aGlzLm4rKztcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAvLyB0ZXh0XHJcbiAgICAgICAgICBpZiAoZXZlbnQuYWNjZWxlcmF0aW9uLnggPCB0aGlzLm1pbngpIHtcclxuICAgICAgICAgICAgdGhpcy5taW54ID0gZXZlbnQuYWNjZWxlcmF0aW9uLng7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAoZXZlbnQuYWNjZWxlcmF0aW9uLnkgPCB0aGlzLm1pbnkpIHtcclxuICAgICAgICAgICAgdGhpcy5taW55ID0gZXZlbnQuYWNjZWxlcmF0aW9uLnk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAoZXZlbnQuYWNjZWxlcmF0aW9uLnogPCB0aGlzLm1pbnopIHtcclxuICAgICAgICAgICAgdGhpcy5taW56ID0gZXZlbnQuYWNjZWxlcmF0aW9uLno7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAoZXZlbnQuYWNjZWxlcmF0aW9uLnggPiB0aGlzLm1heHgpIHtcclxuICAgICAgICAgICAgdGhpcy5tYXh4ID0gZXZlbnQuYWNjZWxlcmF0aW9uLng7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAoZXZlbnQuYWNjZWxlcmF0aW9uLnkgPiB0aGlzLm1heHkpIHtcclxuICAgICAgICAgICAgdGhpcy5tYXh5ID0gZXZlbnQuYWNjZWxlcmF0aW9uLnk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAoZXZlbnQuYWNjZWxlcmF0aW9uLnogPiB0aGlzLm1heHopIHtcclxuICAgICAgICAgICAgdGhpcy5tYXh6ID0gZXZlbnQuYWNjZWxlcmF0aW9uLno7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB0aGlzLnRleHQxLnNldFRleHQoYHggJHt0aGlzLm1pbnh9ICR7dGhpcy5tYXh4fWApO1xyXG4gICAgICAgICAgdGhpcy50ZXh0Mi5zZXRUZXh0KGB5ICR7dGhpcy5taW55fSAke3RoaXMubWF4eX1gKTtcclxuICAgICAgICAgIHRoaXMudGV4dDMuc2V0VGV4dChgeiAke3RoaXMubWluen0gJHt0aGlzLm1heHp9YCk7XHJcbiAgICAgICAgICB0aGlzLnRleHQ0LnNldFRleHQoYG4gJHt0aGlzLm59ICR7dGhpcy5udGhyZXNob2xkfWApO1xyXG4gICAgICAgICAgdGhpcy50ZXh0NS5zZXRUZXh0KGBzaGFrZXMgJHt0aGlzLnNoYWtlQ291bnR9YCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXgpIHtcclxuICAgICAgY29uc29sZS5sb2coJ25vdCBpb3MnKTtcclxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2RldmljZW1vdGlvbicsIChldmVudCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGV2ZW50KTtcclxuICAgICAgICBpZiAoZXZlbnQuYWNjZWxlcmF0aW9uLnggPCB0aGlzLnRocmVzaG9sZCAqIC0xIHx8IGV2ZW50LmFjY2VsZXJhdGlvbi54ID4gdGhpcy50aHJlc2hvbGQpIHtcclxuICAgICAgICAgIHRoaXMubisrO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZXZlbnQuYWNjZWxlcmF0aW9uLnkgPCB0aGlzLnRocmVzaG9sZCAqIC0xIHx8IGV2ZW50LmFjY2VsZXJhdGlvbi55ID4gdGhpcy50aHJlc2hvbGQpIHtcclxuICAgICAgICAgIHRoaXMubisrO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZXZlbnQuYWNjZWxlcmF0aW9uLnogPCB0aGlzLnRocmVzaG9sZCAqIC0xIHx8IGV2ZW50LmFjY2VsZXJhdGlvbi56ID4gdGhpcy50aHJlc2hvbGQpIHtcclxuICAgICAgICAgIHRoaXMubisrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gdGV4dFxyXG4gICAgICAgIGlmIChldmVudC5hY2NlbGVyYXRpb24ueCA8IHRoaXMubWlueCkge1xyXG4gICAgICAgICAgdGhpcy5taW54ID0gZXZlbnQuYWNjZWxlcmF0aW9uLng7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChldmVudC5hY2NlbGVyYXRpb24ueSA8IHRoaXMubWlueSkge1xyXG4gICAgICAgICAgdGhpcy5taW55ID0gZXZlbnQuYWNjZWxlcmF0aW9uLnk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChldmVudC5hY2NlbGVyYXRpb24ueiA8IHRoaXMubWlueikge1xyXG4gICAgICAgICAgdGhpcy5taW56ID0gZXZlbnQuYWNjZWxlcmF0aW9uLno7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChldmVudC5hY2NlbGVyYXRpb24ueCA+IHRoaXMubWF4eCkge1xyXG4gICAgICAgICAgdGhpcy5tYXh4ID0gZXZlbnQuYWNjZWxlcmF0aW9uLng7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChldmVudC5hY2NlbGVyYXRpb24ueSA+IHRoaXMubWF4eSkge1xyXG4gICAgICAgICAgdGhpcy5tYXh5ID0gZXZlbnQuYWNjZWxlcmF0aW9uLnk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChldmVudC5hY2NlbGVyYXRpb24ueiA+IHRoaXMubWF4eikge1xyXG4gICAgICAgICAgdGhpcy5tYXh6ID0gZXZlbnQuYWNjZWxlcmF0aW9uLno7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudGV4dDEuc2V0VGV4dChgeCAke3RoaXMubWlueH0gJHt0aGlzLm1heHh9YCk7XHJcbiAgICAgICAgdGhpcy50ZXh0Mi5zZXRUZXh0KGB5ICR7dGhpcy5taW55fSAke3RoaXMubWF4eX1gKTtcclxuICAgICAgICB0aGlzLnRleHQzLnNldFRleHQoYHogJHt0aGlzLm1pbnp9ICR7dGhpcy5tYXh6fWApO1xyXG4gICAgICAgIHRoaXMudGV4dDQuc2V0VGV4dChgbiAke3RoaXMubn0gJHt0aGlzLm50aHJlc2hvbGR9YCk7XHJcbiAgICAgICAgdGhpcy50ZXh0NS5zZXRUZXh0KGBzaGFrZXMgJHt0aGlzLnNoYWtlQ291bnR9YCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuICBwdWJsaWMgY2FsbGJhY2soKTogdm9pZCB7XHJcbiAgICAvL3RoaXMudGV4dDEuc2V0VGV4dCgnQXNrZWQnKTtcclxuICAgIHRoaXMubWF4eCA9IDA7XHJcbiAgICB0aGlzLm1heHkgPSAwO1xyXG4gICAgdGhpcy5tYXh6ID0gMDtcclxuICAgIHRoaXMubWlueCA9IDA7XHJcbiAgICB0aGlzLm1pbnkgPSAwO1xyXG4gICAgdGhpcy5taW56ID0gMDtcclxuICAgIC8vaWYgKHdpbmRvdy5EZXZpY2VPcmllbnRhdGlvbkV2ZW50KSB7XHJcbiAgICAgIC8vd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2RldmljZW9yaWVudGF0aW9uJywgZGV2aWNlT3JpZW50YXRpb25IYW5kbGVyLCBmYWxzZSk7XHJcbiAgICAvL31cclxuXHJcbiAgIC8qaWYgKHdpbmRvdy5EZXZpY2VNb3Rpb25FdmVudCkge1xyXG4gICAgICB0aGlzLnRleHQyLnNldFRleHQoJ3llcycpO1xyXG4gICAgICBjb25zb2xlLmxvZygneWVzJyk7XHJcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdkZXZpY2Vtb3Rpb24nLCAoZXZlbnQpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhldmVudCk7XHJcbiAgICAgICAgaWYgKGV2ZW50LmFjY2VsZXJhdGlvbi54IDwgdGhpcy50aHJlc2hvbGQgKiAtMSB8fCBldmVudC5hY2NlbGVyYXRpb24ueCA+IHRoaXMudGhyZXNob2xkKSB7XHJcbiAgICAgICAgICB0aGlzLm4rKztcclxuICAgICAgICB9IGVsc2UgaWYgKGV2ZW50LmFjY2VsZXJhdGlvbi55IDwgdGhpcy50aHJlc2hvbGQgKiAtMSB8fCBldmVudC5hY2NlbGVyYXRpb24ueSA+IHRoaXMudGhyZXNob2xkKSB7XHJcbiAgICAgICAgICB0aGlzLm4rKztcclxuICAgICAgICB9IGVsc2UgaWYgKGV2ZW50LmFjY2VsZXJhdGlvbi56IDwgdGhpcy50aHJlc2hvbGQgKiAtMSB8fCBldmVudC5hY2NlbGVyYXRpb24ueiA+IHRoaXMudGhyZXNob2xkKSB7XHJcbiAgICAgICAgICB0aGlzLm4rKztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHRleHRcclxuICAgICAgICBpZiAoZXZlbnQuYWNjZWxlcmF0aW9uLnggPCB0aGlzLm1pbngpIHtcclxuICAgICAgICAgIHRoaXMubWlueCA9IGV2ZW50LmFjY2VsZXJhdGlvbi54O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZXZlbnQuYWNjZWxlcmF0aW9uLnkgPCB0aGlzLm1pbnkpIHtcclxuICAgICAgICAgIHRoaXMubWlueSA9IGV2ZW50LmFjY2VsZXJhdGlvbi55O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZXZlbnQuYWNjZWxlcmF0aW9uLnogPCB0aGlzLm1pbnopIHtcclxuICAgICAgICAgIHRoaXMubWlueiA9IGV2ZW50LmFjY2VsZXJhdGlvbi56O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZXZlbnQuYWNjZWxlcmF0aW9uLnggPiB0aGlzLm1heHgpIHtcclxuICAgICAgICAgIHRoaXMubWF4eCA9IGV2ZW50LmFjY2VsZXJhdGlvbi54O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZXZlbnQuYWNjZWxlcmF0aW9uLnkgPiB0aGlzLm1heHkpIHtcclxuICAgICAgICAgIHRoaXMubWF4eSA9IGV2ZW50LmFjY2VsZXJhdGlvbi55O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZXZlbnQuYWNjZWxlcmF0aW9uLnogPiB0aGlzLm1heHopIHtcclxuICAgICAgICAgIHRoaXMubWF4eiA9IGV2ZW50LmFjY2VsZXJhdGlvbi56O1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnRleHQxLnNldFRleHQoYHggJHt0aGlzLm1pbnh9ICR7dGhpcy5tYXh4fWApO1xyXG4gICAgICAgIC8vdGhpcy50ZXh0Mi5zZXRUZXh0KGB5ICR7dGhpcy5taW55fSAke3RoaXMubWF4eX1gKTtcclxuICAgICAgICB0aGlzLnRleHQzLnNldFRleHQoYHogJHt0aGlzLm1pbnp9ICR7dGhpcy5tYXh6fWApO1xyXG4gICAgICAgIHRoaXMudGV4dDQuc2V0VGV4dChgbiAke3RoaXMubn0gJHt0aGlzLm50aHJlc2hvbGR9YCk7XHJcbiAgICAgICAgdGhpcy50ZXh0NS5zZXRUZXh0KGBzaGFrZXMgJHt0aGlzLnNoYWtlQ291bnR9YCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy50ZXh0Mi5zZXRUZXh0KCdubycpO1xyXG4gICAgICBjb25zb2xlLmxvZygnbm8nKTtcclxuICAgIH0qL1xyXG4gICAgdGhpcy5jYWxsQXBwbGUoKTtcclxuICAgIC8vXHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBzaWduYWxSID0gcmVxdWlyZSgnQG1pY3Jvc29mdC9zaWduYWxyJyk7XHJcbmltcG9ydCB7IGdldEdhbWVXaWR0aCwgZ2V0R2FtZUhlaWdodCB9IGZyb20gJy4uL2hlbHBlcnMnO1xyXG5cclxuY29uc3Qgc2NlbmVDb25maWc6IFBoYXNlci5UeXBlcy5TY2VuZXMuU2V0dGluZ3NDb25maWcgPSB7XHJcbiAgYWN0aXZlOiBmYWxzZSxcclxuICB2aXNpYmxlOiBmYWxzZSxcclxuICBrZXk6ICdCb290JyxcclxufTtcclxuXHJcbi8qKlxyXG4gKiBUaGUgaW5pdGlhbCBzY2VuZSB0aGF0IGxvYWRzIGFsbCBuZWNlc3NhcnkgYXNzZXRzIHRvIHRoZSBnYW1lIGFuZCBkaXNwbGF5cyBhIGxvYWRpbmcgYmFyLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEJvb3RTY2VuZSBleHRlbmRzIFBoYXNlci5TY2VuZSB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcihzY2VuZUNvbmZpZyk7XHJcbiAgfVxyXG4gIHByaXZhdGUgaHViQ29ubmVjdGlvbjogc2lnbmFsUi5IdWJDb25uZWN0aW9uO1xyXG4gIHB1YmxpYyBhc3luYyBwcmVsb2FkKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgZG9jdW1lbnQuY29va2llID0gYG9yYW5nZT0wYDtcclxuICAgIGRvY3VtZW50LmNvb2tpZSA9IGBib3VyYm9uPTBgO1xyXG4gICAgZG9jdW1lbnQuY29va2llID0gYGljZT0wYDtcclxuICAgIGRvY3VtZW50LmNvb2tpZSA9IGB2ZXJtb3V0aD0wYDtcclxuICAgIGNvbnN0IGhhbGZXaWR0aCA9IGdldEdhbWVXaWR0aCh0aGlzKSAqIDAuNTtcclxuICAgIGNvbnN0IGhhbGZIZWlnaHQgPSBnZXRHYW1lSGVpZ2h0KHRoaXMpICogMC41O1xyXG5cclxuICAgIGNvbnN0IHByb2dyZXNzQmFySGVpZ2h0ID0gMTAwO1xyXG4gICAgY29uc3QgcHJvZ3Jlc3NCYXJXaWR0aCA9IDQwMDtcclxuXHJcbiAgICBjb25zdCBwcm9ncmVzc0JhckNvbnRhaW5lciA9IHRoaXMuYWRkLnJlY3RhbmdsZShcclxuICAgICAgaGFsZldpZHRoLFxyXG4gICAgICBoYWxmSGVpZ2h0LFxyXG4gICAgICBwcm9ncmVzc0JhcldpZHRoLFxyXG4gICAgICBwcm9ncmVzc0JhckhlaWdodCxcclxuICAgICAgMHgwMDAwMDAsXHJcbiAgICApO1xyXG4gICAgY29uc3QgcHJvZ3Jlc3NCYXIgPSB0aGlzLmFkZC5yZWN0YW5nbGUoXHJcbiAgICAgIGhhbGZXaWR0aCArIDIwIC0gcHJvZ3Jlc3NCYXJDb250YWluZXIud2lkdGggKiAwLjUsXHJcbiAgICAgIGhhbGZIZWlnaHQsXHJcbiAgICAgIDEwLFxyXG4gICAgICBwcm9ncmVzc0JhckhlaWdodCAtIDIwLFxyXG4gICAgICAweDg4ODg4OCxcclxuICAgICk7XHJcblxyXG4gICAgY29uc3QgbG9hZGluZ1RleHQgPSB0aGlzLmFkZC50ZXh0KGhhbGZXaWR0aCAtIDc1LCBoYWxmSGVpZ2h0IC0gMTAwLCAnTG9hZGluZy4uLicpLnNldEZvbnRTaXplKDI0KTtcclxuICAgIGNvbnN0IHBlcmNlbnRUZXh0ID0gdGhpcy5hZGQudGV4dChoYWxmV2lkdGggLSAyNSwgaGFsZkhlaWdodCwgJzAlJykuc2V0Rm9udFNpemUoMjQpO1xyXG4gICAgY29uc3QgYXNzZXRUZXh0ID0gdGhpcy5hZGQudGV4dChoYWxmV2lkdGggLSAyNSwgaGFsZkhlaWdodCArIDEwMCwgJycpLnNldEZvbnRTaXplKDI0KTtcclxuXHJcbiAgICB0aGlzLmxvYWQub24oJ3Byb2dyZXNzJywgKHZhbHVlKSA9PiB7XHJcbiAgICAgIHByb2dyZXNzQmFyLndpZHRoID0gKHByb2dyZXNzQmFyV2lkdGggLSAzMCkgKiB2YWx1ZTtcclxuXHJcbiAgICAgIGNvbnN0IHBlcmNlbnQgPSB2YWx1ZSAqIDEwMDtcclxuICAgICAgcGVyY2VudFRleHQuc2V0VGV4dChgJHtwZXJjZW50fSVgKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMubG9hZC5vbignZmlsZXByb2dyZXNzJywgKGZpbGUpID0+IHtcclxuICAgICAgYXNzZXRUZXh0LnNldFRleHQoZmlsZS5rZXkpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5sb2FkLm9uKCdjb21wbGV0ZScsICgpID0+IHtcclxuICAgICAgbG9hZGluZ1RleHQuZGVzdHJveSgpO1xyXG4gICAgICBwZXJjZW50VGV4dC5kZXN0cm95KCk7XHJcbiAgICAgIGFzc2V0VGV4dC5kZXN0cm95KCk7XHJcbiAgICAgIHByb2dyZXNzQmFyLmRlc3Ryb3koKTtcclxuICAgICAgcHJvZ3Jlc3NCYXJDb250YWluZXIuZGVzdHJveSgpO1xyXG5cclxuICAgICAgdGhpcy5zY2VuZS5zdGFydCgnUGVybWlzc2lvbnMnLCB7aHViQ29ubmVjdGlvbjogdGhpcy5odWJDb25uZWN0aW9ufSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmh1YkNvbm5lY3Rpb24gPSBuZXcgc2lnbmFsUi5IdWJDb25uZWN0aW9uQnVpbGRlcigpXHJcbiAgICAud2l0aFVybChgaHR0cHM6Ly9zY2hpdHRhbGtpbi5henVyZXdlYnNpdGVzLm5ldC93aGl0ZXJ1c2hpbi9gKVxyXG4gICAgLmNvbmZpZ3VyZUxvZ2dpbmcoc2lnbmFsUi5Mb2dMZXZlbC5JbmZvcm1hdGlvbilcclxuICAgIC53aXRoQXV0b21hdGljUmVjb25uZWN0KClcclxuICAgIC5idWlsZCgpO1xyXG4gICAgdGhpcy5odWJDb25uZWN0aW9uLnN0YXJ0KCk7XHJcbiAgICB0aGlzLmh1YkNvbm5lY3Rpb24ub25jbG9zZSgoKT0+e3RoaXMuc2NlbmUuc3RhcnQoXCJEaXNjb25uZWN0ZWRcIil9KVxyXG4gICAgdGhpcy5odWJDb25uZWN0aW9uLm9ucmVjb25uZWN0aW5nKCgpPT57dGhpcy5zY2VuZS5zdGFydChcIkRpc2Nvbm5lY3RlZFwiKX0pXHJcbiAgICBjb25zb2xlLmxvZyhcImNvbm5lY3Rpb24gc3RhcnRlZFwiKVxyXG4gICAgdGhpcy5sb2FkQXNzZXRzKCk7XHJcbiAgICBjb25zb2xlLmxvZyhcImxvYWRlZFwiKVxyXG4gICAgXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBBbGwgYXNzZXRzIHRoYXQgbmVlZCB0byBiZSBsb2FkZWQgYnkgdGhlIGdhbWUgKHNwcml0ZXMsIGltYWdlcywgYW5pbWF0aW9ucywgdGlsZXMsIG11c2ljLCBldGMpXHJcbiAgICogc2hvdWxkIGJlIGFkZGVkIHRvIHRoaXMgbWV0aG9kLiBPbmNlIGxvYWRlZCBpbiwgdGhlIGxvYWRlciB3aWxsIGtlZXAgdHJhY2sgb2YgdGhlbSwgaW5kZXBlZGVudCBvZiB3aGljaCBzY2VuZVxyXG4gICAqIGlzIGN1cnJlbnRseSBhY3RpdmUsIHNvIHRoZXkgY2FuIGJlIGFjY2Vzc2VkIGFueXdoZXJlLlxyXG4gICAqL1xyXG4gIHByaXZhdGUgbG9hZEFzc2V0cygpIHtcclxuICAgIC8vIExvYWQgc2FtcGxlIGFzc2V0c1xyXG5cclxuICAgIC8vIFNvdXJjZTogT3BlbiBHYW1lIEFydFxyXG4gICAgdGhpcy5sb2FkLmltYWdlKCd2ZXJtb3V0aHRvcCcsICdhc3NldHMvc3ByaXRlcy92ZXJtb3V0aHRvcDIucG5nJyk7XHJcbiAgICB0aGlzLmxvYWQuaW1hZ2UoJ3Zlcm1vdXRodG9wb25seScsICdhc3NldHMvc3ByaXRlcy92ZXJtb3V0aHRvcG9ubHkyLnBuZycpO1xyXG4gICAgdGhpcy5sb2FkLmltYWdlKCd2ZXJtb3V0aCcsICdhc3NldHMvc3ByaXRlcy92ZXJtb3V0aC5wbmcnKTtcclxuICAgIHRoaXMubG9hZC5pbWFnZSgnVmVybW91dGgnLCAnYXNzZXRzL3Nwcml0ZXMvdmVybW91dGgucG5nJyk7XHJcbiAgICB0aGlzLmxvYWQuaW1hZ2UoJ2JvdXJib250b3AnLCAnYXNzZXRzL3Nwcml0ZXMvYm91cmJvbnRvcDIucG5nJyk7XHJcbiAgICB0aGlzLmxvYWQuaW1hZ2UoJ2JvdXJib250b3Bvbmx5JywgJ2Fzc2V0cy9zcHJpdGVzL2JvdXJib250b3Bvbmx5LnBuZycpO1xyXG4gICAgdGhpcy5sb2FkLmltYWdlKCdib3VyYm9uJywgJ2Fzc2V0cy9zcHJpdGVzL2JvdXJib24ucG5nJyk7XHJcbiAgICB0aGlzLmxvYWQuaW1hZ2UoJ0JvdXJib24nLCAnYXNzZXRzL3Nwcml0ZXMvYm91cmJvbi5wbmcnKTtcclxuICAgIHRoaXMubG9hZC5pbWFnZSgnVm9ka2EnLCAnYXNzZXRzL3Nwcml0ZXMvdm9ka2EucG5nJyk7XHJcbiAgICB0aGlzLmxvYWQuaW1hZ2UoJ0dpbicsICdhc3NldHMvc3ByaXRlcy9naW4ucG5nJyk7XHJcbiAgICB0aGlzLmxvYWQuaW1hZ2UoJ1J1bScsICdhc3NldHMvc3ByaXRlcy9ydW0ucG5nJyk7XHJcbiAgICB0aGlzLmxvYWQuaW1hZ2UoJ1RlcXVpbGEnLCAnYXNzZXRzL3Nwcml0ZXMvdGVxdWlsYS5wbmcnKTtcclxuICAgIHRoaXMubG9hZC5pbWFnZSgnQ29rZScsICdhc3NldHMvc3ByaXRlcy9jb2tlLnBuZycpO1xyXG4gICAgdGhpcy5sb2FkLmltYWdlKCdUcmlwbGUgU2VjJywgJ2Fzc2V0cy9zcHJpdGVzL3RyaXBsZXNlYy5wbmcnKTtcclxuICAgIHRoaXMubG9hZC5pbWFnZSgnZW1wdHlnbGFzcycsICdhc3NldHMvc3ByaXRlcy9lbXB0eWdsYXNzLnBuZycpO1xyXG4gICAgdGhpcy5sb2FkLmltYWdlKCdtdWRkbGVyZ2xhc3MnLCAnYXNzZXRzL3Nwcml0ZXMvbXVkZGxlcmdsYXNzLnBuZycpO1xyXG4gICAgdGhpcy5sb2FkLmltYWdlKCdiaXR0ZXJzZ2xhc3MnLCAnYXNzZXRzL3Nwcml0ZXMvYml0dGVyc2dsYXNzLnBuZycpO1xyXG4gICAgdGhpcy5sb2FkLmltYWdlKCdzaGFrZW5nbGFzcycsICdhc3NldHMvc3ByaXRlcy9zaGFrZW5nbGFzcy5wbmcnKTtcclxuICAgIHRoaXMubG9hZC5pbWFnZSgnZmlsbGVkZ2xhc3MxJywgJ2Fzc2V0cy9zcHJpdGVzL2ZpbGxlZGdsYXNzMS5wbmcnKTtcclxuICAgIHRoaXMubG9hZC5pbWFnZSgnZmlsbGVkZ2xhc3MyJywgJ2Fzc2V0cy9zcHJpdGVzL2ZpbGxlZGdsYXNzMi5wbmcnKTtcclxuICAgIHRoaXMubG9hZC5pbWFnZSgnZmlsbGVkZ2xhc3MzJywgJ2Fzc2V0cy9zcHJpdGVzL2ZpbGxlZGdsYXNzMy5wbmcnKTtcclxuICAgIHRoaXMubG9hZC5pbWFnZSgnZmlsbGVkZ2xhc3M0JywgJ2Fzc2V0cy9zcHJpdGVzL2ZpbGxlZGdsYXNzNC5wbmcnKTtcclxuICAgIHRoaXMubG9hZC5pbWFnZSgnaWNlJywgJ2Fzc2V0cy9zcHJpdGVzL2ljZS5wbmcnKTtcclxuICAgIHRoaXMubG9hZC5pbWFnZSgnSWNlIEN1YmUnLCAnYXNzZXRzL3Nwcml0ZXMvaWNlaWNvbi5wbmcnKTtcclxuICAgIHRoaXMubG9hZC5pbWFnZSgnaWNlMScsICdhc3NldHMvc3ByaXRlcy9pY2UxLnBuZycpO1xyXG4gICAgdGhpcy5sb2FkLmltYWdlKCdpY2UyJywgJ2Fzc2V0cy9zcHJpdGVzL2ljZTIucG5nJyk7XHJcbiAgICB0aGlzLmxvYWQuaW1hZ2UoJ2ljZTMnLCAnYXNzZXRzL3Nwcml0ZXMvaWNlMy5wbmcnKTtcclxuICAgIHRoaXMubG9hZC5pbWFnZSgnaWNlNCcsICdhc3NldHMvc3ByaXRlcy9pY2U0LnBuZycpO1xyXG4gICAgdGhpcy5sb2FkLmltYWdlKCdpY2U1JywgJ2Fzc2V0cy9zcHJpdGVzL2ljZTUucG5nJyk7XHJcbiAgICB0aGlzLmxvYWQuaW1hZ2UoJ2ljZWdsYXNzJywgJ2Fzc2V0cy9zcHJpdGVzL2ljZWdsYXNzLnBuZycpO1xyXG4gICAgdGhpcy5sb2FkLmltYWdlKCdvcmFuZ2UnLCAnYXNzZXRzL3Nwcml0ZXMvb3JhbmdlLnBuZycpO1xyXG4gICAgdGhpcy5sb2FkLmltYWdlKCdPcmFuZ2UgUGVlbCcsICdhc3NldHMvc3ByaXRlcy9vcmFuZ2UucG5nJyk7XHJcbiAgICB0aGlzLmxvYWQuaW1hZ2UoJ29yYW5nZWluc2lkZScsICdhc3NldHMvc3ByaXRlcy9vcmFuZ2VJbnNpZGUucG5nJyk7XHJcbiAgICB0aGlzLmxvYWQuaW1hZ2UoJ29yYW5nZXdlZGdlZ2xhc3MnLCAnYXNzZXRzL3Nwcml0ZXMvb3Jhbmdld2VkZ2VnbGFzcy5wbmcnKTtcclxuICAgIHRoaXMubG9hZC5pbWFnZSgnY2FuZWxsZWtuaWZlJywgJ2Fzc2V0cy9zcHJpdGVzL2NhbmVsbGVrbmlmZS5wbmcnKTtcclxuICAgIHRoaXMubG9hZC5pbWFnZSgnc2hha2VyJywgJ2Fzc2V0cy9zcHJpdGVzL3NoYWtlci5wbmcnKTtcclxuICAgIHRoaXMubG9hZC5pbWFnZSgnU2hha2UgRHJpbmsnLCAnYXNzZXRzL3Nwcml0ZXMvc2hha2VyLnBuZycpO1xyXG4gICAgdGhpcy5sb2FkLmltYWdlKCdzaGFrZXIwJywgJ2Fzc2V0cy9zcHJpdGVzL3NoYWtlci5wbmcnKTtcclxuICAgIHRoaXMubG9hZC5pbWFnZSgnc2hha2VyMScsICdhc3NldHMvc3ByaXRlcy9zaGFrZXIxLnBuZycpO1xyXG4gICAgdGhpcy5sb2FkLmltYWdlKCdzaGFrZXIyJywgJ2Fzc2V0cy9zcHJpdGVzL3NoYWtlcjIucG5nJyk7XHJcbiAgICB0aGlzLmxvYWQuaW1hZ2UoJ3NoYWtlcjMnLCAnYXNzZXRzL3Nwcml0ZXMvc2hha2VyMy5wbmcnKTtcclxuICAgIHRoaXMubG9hZC5pbWFnZSgnQW5nb3N0dXJhIEJpdHRlcnMnLCAnYXNzZXRzL3Nwcml0ZXMvYml0dGVycy5wbmcnKTtcclxuICAgIHRoaXMubG9hZC5pbWFnZSgnYml0dGVycycsICdhc3NldHMvc3ByaXRlcy9iaXR0ZXJzLnBuZycpO1xyXG4gICAgdGhpcy5sb2FkLmltYWdlKCdiaXR0ZXJzMCcsICdhc3NldHMvc3ByaXRlcy9iaXR0ZXJzLnBuZycpO1xyXG4gICAgdGhpcy5sb2FkLmltYWdlKCdiaXR0ZXJzMScsICdhc3NldHMvc3ByaXRlcy9iaXR0ZXJzMS5wbmcnKTtcclxuICAgIHRoaXMubG9hZC5pbWFnZSgnYml0dGVyczInLCAnYXNzZXRzL3Nwcml0ZXMvYml0dGVyczIucG5nJyk7XHJcbiAgICB0aGlzLmxvYWQuaW1hZ2UoJ2JpdHRlcnMzJywgJ2Fzc2V0cy9zcHJpdGVzL2JpdHRlcnMzLnBuZycpO1xyXG4gICAgdGhpcy5sb2FkLmltYWdlKCdtdWRkbGVyJywgJ2Fzc2V0cy9zcHJpdGVzL211ZGRsZXIucG5nJyk7XHJcbiAgICB0aGlzLmxvYWQuaW1hZ2UoJ011ZGRsZSBEcmluaycsICdhc3NldHMvc3ByaXRlcy9tdWRkbGVyLnBuZycpO1xyXG4gICAgdGhpcy5sb2FkLmltYWdlKCdqdWljZXInLCAnYXNzZXRzL3Nwcml0ZXMvanVpY2VyLnBuZycpO1xyXG4gICAgdGhpcy5sb2FkLmltYWdlKCdMZW1vbiBKdWljZScsICdhc3NldHMvc3ByaXRlcy9qdWljZXJsZW1vbnRyaWdnZXIucG5nJyk7XHJcbiAgICB0aGlzLmxvYWQuaW1hZ2UoJ0xpbWUgSnVpY2UnLCAnYXNzZXRzL3Nwcml0ZXMvanVpY2VybGltZXRyaWdnZXIucG5nJyk7XHJcbiAgICB0aGlzLmxvYWQuaW1hZ2UoJ09yYW5nZSBKdWljZScsICdhc3NldHMvc3ByaXRlcy9qdWljZXJvcmFuZ2V0cmlnZ2VyLnBuZycpO1xyXG4gICAgdGhpcy5sb2FkLmltYWdlKCdqdWljZXJib3R0b20nLCAnYXNzZXRzL3Nwcml0ZXMvanVpY2VyYm90dG9tLnBuZycpO1xyXG4gICAgdGhpcy5sb2FkLmltYWdlKCdqdWljZXJ0b3AnLCAnYXNzZXRzL3Nwcml0ZXMvanVpY2VydG9wLnBuZycpO1xyXG4gICAgdGhpcy5sb2FkLmltYWdlKCdPcmFuZ2UgSnVpY2UgMicsICdhc3NldHMvc3ByaXRlcy9qdWljZXJvcmFuZ2UucG5nJyk7XHJcbiAgICB0aGlzLmxvYWQuaW1hZ2UoJ0xpbWUgSnVpY2UgMicsICdhc3NldHMvc3ByaXRlcy9qdWljZXJsaW1lLnBuZycpO1xyXG4gICAgdGhpcy5sb2FkLmltYWdlKCdMZW1vbiBKdWljZSAyJywgJ2Fzc2V0cy9zcHJpdGVzL2p1aWNlcmxlbW9uLnBuZycpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBJbnB1dCwgR2FtZU9iamVjdHMgfSBmcm9tICdwaGFzZXInO1xyXG5pbXBvcnQgeyBnZXRHYW1lV2lkdGgsIGdldEdhbWVIZWlnaHQsIGRyaW5rVG9Db2xvck1hcCB9IGZyb20gJy4uL2hlbHBlcnMnO1xyXG5pbXBvcnQgeyBTY2VuZUJ1dHRvbiB9IGZyb20gJy4uL3VpL3NjZW5lLWJ1dHRvbic7XHJcblxyXG5jb25zdCBzY2VuZUNvbmZpZzogUGhhc2VyLlR5cGVzLlNjZW5lcy5TZXR0aW5nc0NvbmZpZyA9IHtcclxuICBhY3RpdmU6IGZhbHNlLFxyXG4gIHZpc2libGU6IGZhbHNlLFxyXG4gIGtleTogJ0JvdXJib24nLFxyXG59O1xyXG5jbGFzcyBHYW1lU2NlbmVBcmd1bWVudHMge1xyXG4gIHB1YmxpYyBvbkZpbmlzaDogRnVuY3Rpb247XHJcbn1cclxuZXhwb3J0IGNsYXNzIEJvdXJib25TY2VuZSBleHRlbmRzIFBoYXNlci5TY2VuZSB7XHJcbiAgcHVibGljIHNwZWVkID0gMjAwO1xyXG5cclxuICBwcml2YXRlIGN1cnNvcktleXM6IFBoYXNlci5UeXBlcy5JbnB1dC5LZXlib2FyZC5DdXJzb3JLZXlzO1xyXG4gIHByaXZhdGUgYm91cmJvblRvcDogUGhhc2VyLkdhbWVPYmplY3RzLlNwcml0ZTtcclxuICBwcml2YXRlIGJvdXJib25Ub3BPbmx5OiBQaGFzZXIuR2FtZU9iamVjdHMuU3ByaXRlO1xyXG5cclxuICBwcml2YXRlIGNvbnRlbnRzOiBzdHJpbmdbXSA9IFtdO1xyXG4gIHByaXZhdGUgZ2xhc3NGaWxsZXJzOiBQaGFzZXIuR2FtZU9iamVjdHMuU3ByaXRlW10gPSBbXTtcclxuXHJcbiAgcHJpdmF0ZSB0cmFuc2l0aW9uaW5nID0gZmFsc2U7XHJcbiAgcHVibGljIG9uRmluaXNoOiBGdW5jdGlvbjtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKHNjZW5lQ29uZmlnKTtcclxuICB9XHJcbiAgcHVibGljIHRleHQxOiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dDtcclxuICBwdWJsaWMgdGV4dDI6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0O1xyXG4gIHB1YmxpYyB0ZXh0MzogUGhhc2VyLkdhbWVPYmplY3RzLlRleHQ7XHJcbiAgcHVibGljIHRleHQ0OiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dDtcclxuICBwdWJsaWMgdGV4dDU6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0O1xyXG4gIHB1YmxpYyB1bnNjcmV3ZWQgPSAwO1xyXG4gIHB1YmxpYyBsaWRSZWN0OiBQaGFzZXIuR2FtZU9iamVjdHMuUmVjdGFuZ2xlO1xyXG4gIHByaXZhdGUgaGVsZCA9IGZhbHNlO1xyXG5cclxuICBwdWJsaWMgaW5pdChkYXRhOiBHYW1lU2NlbmVBcmd1bWVudHMpe1xyXG4gICAgdGhpcy5vbkZpbmlzaCA9IGRhdGEub25GaW5pc2g7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY3JlYXRlKCk6IHZvaWQge1xyXG4gICAgY29uc29sZS5sb2coJ0JvdXJib24nKTtcclxuICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCB9ID0gdGhpcy5zeXMuZ2FtZS5jYW52YXM7XHJcbiAgICB0aGlzLnVuc2NyZXdlZCA9IDA7XHJcbiAgICB0aGlzLmhlbGQgPSBmYWxzZTtcclxuICAgIHRoaXMudHJhbnNpdGlvbmluZyA9IGZhbHNlO1xyXG4gICAgLy8gQWRkIGEgcGxheWVyIHNwcml0ZSB0aGF0IGNhbiBiZSBtb3ZlZCBhcm91bmQuIFBsYWNlIGhpbSBpbiB0aGUgbWlkZGxlIG9mIHRoZSBzY3JlZW4uXHJcbiAgICB0aGlzLmJvdXJib25Ub3AgPSB0aGlzLmFkZC5zcHJpdGUod2lkdGggLyAyLCBoZWlnaHQgLyAyICsgMzAwLCAnYm91cmJvbnRvcCcpO1xyXG4gICAgdGhpcy5ib3VyYm9uVG9wT25seSA9IHRoaXMuYWRkLnNwcml0ZSh3aWR0aCAvIDIsIGhlaWdodCAvIDIgKyAzMDAsICdib3VyYm9udG9wb25seScpO1xyXG5cclxuICAgIC8vbGV0IHJlY3QgPSBuZXcgUGhhc2VyLkdhbWVPYmplY3RzLlJlY3RhbmdsZSh3aWR0aCAvIDIsIGhlaWdodCAqIDAuMDY5MDMyMjU4LCAwLCAwKTtcclxuICAgIHRoaXMubGlkUmVjdCA9IHRoaXMuYWRkXHJcbiAgICAgIC5yZWN0YW5nbGUoXHJcbiAgICAgICAgd2lkdGggLyAyLFxyXG4gICAgICAgIHRoaXMuYm91cmJvblRvcE9ubHkueSAtIHRoaXMuYm91cmJvblRvcE9ubHkuZGlzcGxheUhlaWdodCAqIDAuNDMwOTY3NzQyLFxyXG4gICAgICAgIHRoaXMuYm91cmJvblRvcE9ubHkuZGlzcGxheVdpZHRoIC8gMyxcclxuICAgICAgICB0aGlzLmJvdXJib25Ub3BPbmx5LmRpc3BsYXlIZWlnaHQgLyA3LFxyXG4gICAgICAgIDB4ZmZmZmZmLFxyXG4gICAgICApXHJcbiAgICAgIC5zZXRBbHBoYSgwLjI1KVxyXG4gICAgICAuc2V0RGVwdGgoMSk7XHJcblxyXG4gICAgdGhpcy5pbnB1dC5vbigncG9pbnRlcmRvd24nLCAoKSA9PiB7XHJcbiAgICAgIGlmIChcclxuICAgICAgICB0aGlzLmxpZFJlY3QuZ2V0Qm91bmRzKCkuY29udGFpbnModGhpcy5pbnB1dC5hY3RpdmVQb2ludGVyLngsIHRoaXMuaW5wdXQuYWN0aXZlUG9pbnRlci55KSAmJlxyXG4gICAgICAgIHRoaXMuYm91cmJvblRvcE9ubHkueSA9PSB0aGlzLmJvdXJib25Ub3AueVxyXG4gICAgICApIHtcclxuICAgICAgICB0aGlzLnRleHQxLnNldFRleHQoYGNsaWNrZWQgYm94YCk7XHJcbiAgICAgICAgdGhpcy5oZWxkID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmJvdXJib25Ub3BPbmx5LnkgLT0gMTU7XHJcbiAgICAgICAgdGhpcy5saWRSZWN0LnkgLT0gMTU7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuaW5wdXQub24oJ3BvaW50ZXJ1cCcsICgpID0+IHtcclxuICAgICAgdGhpcy5oZWxkID0gZmFsc2U7XHJcbiAgICAgIGlmICh0aGlzLmxpZFJlY3QueSArIHRoaXMubGlkUmVjdC5kaXNwbGF5V2lkdGggLyAyID4gdGhpcy5ib3VyYm9uVG9wLnkgLSB0aGlzLmJvdXJib25Ub3AuZGlzcGxheUhlaWdodCAvIDIpIHtcclxuICAgICAgICB0aGlzLmxpZFJlY3QueSA9IHRoaXMuYm91cmJvblRvcC55IC0gdGhpcy5ib3VyYm9uVG9wLmRpc3BsYXlIZWlnaHQgKiAwLjQzMDk2Nzc0MjtcclxuICAgICAgICB0aGlzLmJvdXJib25Ub3BPbmx5LnkgPSB0aGlzLmJvdXJib25Ub3AueTtcclxuICAgICAgICB0aGlzLnVuc2NyZXdlZCA9IDA7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMudGV4dDEuc2V0VGV4dChgzrg6ICR7dGhpcy5pbnB1dC5hY3RpdmVQb2ludGVyLmdldEFuZ2xlKCl9YCk7XHJcbiAgICAgIHRoaXMudGV4dDIuc2V0VGV4dChgeDogJHt0aGlzLmlucHV0LmFjdGl2ZVBvaW50ZXIuZ2V0RGlzdGFuY2VYKCl9YCk7XHJcbiAgICAgIHRoaXMudGV4dDMuc2V0VGV4dChgeTogJHt0aGlzLmlucHV0LmFjdGl2ZVBvaW50ZXIuZ2V0RGlzdGFuY2VZKCl9YCk7XHJcbiAgICAgIHRoaXMudGV4dDQuc2V0VGV4dChgZDogJHt0aGlzLmlucHV0LmFjdGl2ZVBvaW50ZXIuZ2V0RGlzdGFuY2UoKX1gKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMudGV4dDEgPSB0aGlzLmFkZC50ZXh0KDEwLCAxMCwgJycsIHsgY29sb3I6ICcjMDBmZjAwJyB9KTtcclxuICAgIHRoaXMudGV4dDIgPSB0aGlzLmFkZC50ZXh0KDEwLCAyNSwgJycsIHsgY29sb3I6ICcjMDBmZjAwJyB9KTtcclxuICAgIHRoaXMudGV4dDMgPSB0aGlzLmFkZC50ZXh0KDEwLCA0MCwgJycsIHsgY29sb3I6ICcjMDBmZjAwJyB9KTtcclxuICAgIHRoaXMudGV4dDQgPSB0aGlzLmFkZC50ZXh0KDEwLCA1NSwgJycsIHsgY29sb3I6ICcjMDBmZjAwJyB9KTtcclxuICAgIHRoaXMudGV4dDUgPSB0aGlzLmFkZC50ZXh0KDEwLCA3MCwgJycsIHsgY29sb3I6ICcjMDBmZjAwJyB9KTtcclxuICAgIG5ldyBTY2VuZUJ1dHRvbih0aGlzLCB3aWR0aC01MCwgNTAsIFwiWFwiLCAoKSA9PnsgdGhpcy5vbkZpbmlzaChmYWxzZSk7IHRoaXMuc2NlbmUuc3RvcCgpO30pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHVwZGF0ZSgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmhlbGQpIHtcclxuICAgICAgaWYgKHRoaXMuaW5wdXQuYWN0aXZlUG9pbnRlci5nZXRBbmdsZSgpIDwgMCAmJiB0aGlzLmlucHV0LmFjdGl2ZVBvaW50ZXIuZ2V0RGlzdGFuY2VZKCkgPiA1MCkge1xyXG4gICAgICAgIHRoaXMudW5zY3Jld2VkICs9IDE7XHJcbiAgICAgICAgaWYgKHRoaXMudW5zY3Jld2VkICUgMiA9PSAxKSB7XHJcbiAgICAgICAgICB0aGlzLmJvdXJib25Ub3BPbmx5LnkgLT0gMTtcclxuICAgICAgICAgIHRoaXMubGlkUmVjdC55IC09IDE7XHJcbiAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIHRoaXMubGlkUmVjdC55ICsgdGhpcy5saWRSZWN0LmRpc3BsYXlXaWR0aCAvIDIgPCB0aGlzLmJvdXJib25Ub3AueSAtIHRoaXMuYm91cmJvblRvcC5kaXNwbGF5SGVpZ2h0IC8gMiAmJlxyXG4gICAgICAgICAgICAhdGhpcy50cmFuc2l0aW9uaW5nXHJcbiAgICAgICAgICApIHtcclxuICAgICAgICAgICAgdGhpcy50cmFuc2l0aW9uaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgdGhpcy5zY2VuZS5zdG9wKCk7XHJcbiAgICAgICAgICAgICAgdGhpcy5zY2VuZS5sYXVuY2goJ1BvdXInLCB7IEJvdHRsZVNwcml0ZU5hbWU6ICdCb3VyYm9uJywgb25GaW5pc2g6IHRoaXMub25GaW5pc2ggfSk7XHJcbiAgICAgICAgICAgIH0sIDUwMCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IElucHV0LCBHYW1lT2JqZWN0cyB9IGZyb20gJ3BoYXNlcic7XHJcbmltcG9ydCB7IGdldEdhbWVXaWR0aCwgZ2V0R2FtZUhlaWdodCwgZHJpbmtUb0NvbG9yTWFwIH0gZnJvbSAnLi4vaGVscGVycyc7XHJcbmltcG9ydCB7IE1lbnVCdXR0b24gfSBmcm9tICcuLi91aS9tZW51LWJ1dHRvbic7XHJcblxyXG5jb25zdCBzY2VuZUNvbmZpZzogUGhhc2VyLlR5cGVzLlNjZW5lcy5TZXR0aW5nc0NvbmZpZyA9IHtcclxuICBhY3RpdmU6IGZhbHNlLFxyXG4gIHZpc2libGU6IGZhbHNlLFxyXG4gIGtleTogJ0Rpc2Nvbm5lY3RlZCcsXHJcbn07XHJcbmNsYXNzIEdhbWVTY2VuZUFyZ3VtZW50cyB7XHJcbiAgcHVibGljIG9uRmluaXNoOiBGdW5jdGlvbjtcclxufVxyXG5leHBvcnQgY2xhc3MgRGlzY29ubmVjdGVkU2NlbmUgZXh0ZW5kcyBQaGFzZXIuU2NlbmUge1xyXG4gIHB1YmxpYyBzcGVlZCA9IDIwMDtcclxuXHJcbiAgcHVibGljIHJlc3VsdHM6IEFycmF5PG51bWJlcj47XHJcbiAgcHJpdmF0ZSB0cmFuc2l0aW9uaW5nID0gZmFsc2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoc2NlbmVDb25maWcpO1xyXG4gIH1cclxuICBwdWJsaWMgb25GaW5pc2g6IEZ1bmN0aW9uO1xyXG4gIHB1YmxpYyB0ZXh0MTogUGhhc2VyLkdhbWVPYmplY3RzLlRleHQ7XHJcbiAgcHVibGljIHRleHQyOiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dDtcclxuICBwdWJsaWMgdGV4dDM6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0O1xyXG4gIHB1YmxpYyB0ZXh0NDogUGhhc2VyLkdhbWVPYmplY3RzLlRleHQ7XHJcbiAgcHVibGljIHRleHQ1OiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dDtcclxuICBwdWJsaWMgY2xpY2tzID0gMDtcclxuICBwdWJsaWMgaWNlTGV2ZWwgPSAwO1xyXG5cclxuICBwdWJsaWMgaW5pdChkYXRhOiBHYW1lU2NlbmVBcmd1bWVudHMpOiB2b2lkIHtcclxuICAgIHRoaXMub25GaW5pc2ggPSBkYXRhLm9uRmluaXNoO1xyXG4gIH1cclxuXHJcblxyXG4gIHB1YmxpYyBjcmVhdGUoKTogdm9pZCB7XHJcbiAgICBjb25zb2xlLmxvZygnU3VjY2VzcycpO1xyXG4gICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSB0aGlzLnN5cy5nYW1lLmNhbnZhcztcclxuICAgIHRoaXMudHJhbnNpdGlvbmluZyA9IGZhbHNlO1xyXG4gICAgLy8gQWRkIGEgcGxheWVyIHNwcml0ZSB0aGF0IGNhbiBiZSBtb3ZlZCBhcm91bmQuIFBsYWNlIGhpbSBpbiB0aGUgbWlkZGxlIG9mIHRoZSBzY3JlZW4uXHJcbiAgICAvL3RoaXMudmVybW91dGhUb3BPbmx5ID0gdGhpcy5hZGQuc3ByaXRlKHdpZHRoIC8gMiwgaGVpZ2h0IC8gMiArIDMwMCwgJ3Zlcm1vdXRodG9wb25seScpO1xyXG4gICAgdGhpcy5hZGQucmVjdGFuZ2xlKHdpZHRoLzIsaGVpZ2h0LzIsd2lkdGgsIGhlaWdodCwgMHgwMDAwMDApO1xyXG4gICAgdGhpcy5hZGQudGV4dCh3aWR0aC84LCAoaGVpZ2h0LzQpIC0gMzAsICBgWW91IGFyZSBkaXNjb25uZWN0ZWRcXG5wbGVhc2UgcmVmcmVzaGAsIHsgY29sb3I6ICcjZmZmZmZmJyB9KTtcclxuICB9XHJcblxyXG4gIC8vcHVibGljIHVwZGF0ZSgpOiB2b2lkIHt9XHJcbn1cclxuIiwiaW1wb3J0IHNpZ25hbFIgPSByZXF1aXJlKCdAbWljcm9zb2Z0L3NpZ25hbHInKTtcclxuaW1wb3J0IHsgTWVudUJ1dHRvbiB9IGZyb20gJy4uL3VpL21lbnUtYnV0dG9uJztcclxuaW1wb3J0ICogYXMgcXVlcnlzdHJpbmcgZnJvbSBcInF1ZXJ5LXN0cmluZ1wiO1xyXG5cclxuY29uc3Qgc2NlbmVDb25maWc6IFBoYXNlci5UeXBlcy5TY2VuZXMuU2V0dGluZ3NDb25maWcgPSB7XHJcbiAgYWN0aXZlOiBmYWxzZSxcclxuICB2aXNpYmxlOiBmYWxzZSxcclxuICBrZXk6ICdFdmVyeW9uZUluJyxcclxufTtcclxuY2xhc3MgR2FtZVNjZW5lQXJndW1lbnRzIHtcclxuICBwdWJsaWMgaHViQ29ubmVjdGlvbjogc2lnbmFsUi5IdWJDb25uZWN0aW9uO1xyXG59XHJcbi8qKlxyXG4gKiBUaGUgaW5pdGlhbCBzY2VuZSB0aGF0IHN0YXJ0cywgc2hvd3MgdGhlIHNwbGFzaCBzY3JlZW5zLCBhbmQgbG9hZHMgdGhlIG5lY2Vzc2FyeSBhc3NldHMuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgRXZlcnlvbmVJblNjZW5lIGV4dGVuZHMgUGhhc2VyLlNjZW5lIHtcclxuICBwcml2YXRlIGh1YkNvbm5lY3Rpb246IHNpZ25hbFIuSHViQ29ubmVjdGlvbjtcclxuICBwcml2YXRlIGluQ291bnQ6IG51bWJlcjtcclxuICBwcml2YXRlIHBsYXllckRpc3BsYXk6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0O1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoc2NlbmVDb25maWcpO1xyXG4gIH1cclxuICBwdWJsaWMgaW5pdChkYXRhOiBHYW1lU2NlbmVBcmd1bWVudHMpOiB2b2lkIHtcclxuICAgIHRoaXMuaHViQ29ubmVjdGlvbiA9IGRhdGEuaHViQ29ubmVjdGlvbjtcclxuICB9XHJcbiAgcHVibGljIGNyZWF0ZSgpOiB2b2lkIHtcclxuICAgIGNvbnNvbGUubG9nKCdSZWFkeSB1cCBtZW51Jyk7XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLmh1YkNvbm5lY3Rpb24pO1xyXG4gICAgdGhpcy5pbkNvdW50ID0gMDtcclxuICAgIC8vdGhpcy5odWJDb25uZWN0aW9uLmludm9rZSgnUmVnaXN0ZXInLCBxdWVyeXN0cmluZy5wYXJzZSh3aW5kb3cubG9jYXRpb24uc2VhcmNoKVtcInJvb21cIl0pO1xyXG4gICAgdGhpcy5odWJDb25uZWN0aW9uLm9uKCdBc3NpZ24nLCAoY3VwOiBudW1iZXIsIGFjdGlvbnM6IG51bWJlcltdLCBwbGF5ZXJjb3VudDogbnVtYmVyLCByb3VuZDogbnVtYmVyKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGBjdXA6ICR7Y3VwfSBhY3Rpb25zOiAke2FjdGlvbnN9IHBsYXllcmNvdW50OiAke3BsYXllcmNvdW50fSByb3VuZCBudW1iZXI6ICR7cm91bmR9YCk7XHJcbiAgICAgIHZhciBpdGVtID0ge1xyXG4gICAgICAgIHBsYXllcmNvdW50OiBwbGF5ZXJjb3VudCxcclxuICAgICAgICByb3VuZE51bWJlcjogcm91bmQsXHJcbiAgICAgICAgY3VwTnVtYmVyOiBjdXAsXHJcbiAgICAgICAgYWN0aW9uczogYWN0aW9uc1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuaHViQ29ubmVjdGlvbi5vZmYoJ0Fzc2lnbicpO1xyXG4gICAgICB0aGlzLnNjZW5lLnN0YXJ0KCdHYW1lJywge2h1YkNvbm5lY3Rpb246IHRoaXMuaHViQ29ubmVjdGlvbiwgc2V0dXA6IGl0ZW19KTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5odWJDb25uZWN0aW9uLm9uKCdVcGRhdGVSZWFkeUNvdW50JywgKGluQ291bnQ6IG51bWJlcikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhgaW5jb3VudCAke2luQ291bnR9YCk7XHJcbiAgICAgIHRoaXMuaW5Db3VudCA9IGluQ291bnQ7XHJcbiAgICB9KTtcclxuXHJcbiAgICB2YXIgcm9vbWNvZGUgPSBxdWVyeXN0cmluZy5wYXJzZSh3aW5kb3cubG9jYXRpb24uc2VhcmNoKTtcclxuICAgIHZhciByb29tID0gcm9vbWNvZGVbXCJyb29tXCJdO1xyXG4gICAgdGhpcy5hZGRcclxuICAgICAgLnRleHQoMTAwLCA1MCwgYFRlYW0gJHtyb29tfWAsIHtcclxuICAgICAgICBjb2xvcjogJyNGRkZGRkYnLFxyXG4gICAgICB9KVxyXG4gICAgICAuc2V0Rm9udFNpemUoMjQpO1xyXG4gICAgdGhpcy5wbGF5ZXJEaXNwbGF5ID0gdGhpcy5hZGQudGV4dCgxMDAsIDEwMCwgYFRleHQ6ICR7dGhpcy5pbkNvdW50fWApO1xyXG4gICAgbmV3IE1lbnVCdXR0b24odGhpcywgMTAwLCAxNTAsICdFdmVyeW9uZSBpcyByZWFkeScsICgpID0+IHtcclxuICAgICAgdGhpcy5odWJDb25uZWN0aW9uLmludm9rZSgnQWxsUmVhZHknKS50aGVuKCgpPT4gY29uc29sZS5sb2coXCJnb3QgYmFjayBmcm9tIGFscmVhZHlcIikpO1xyXG4gICAgICBjb25zb2xlLmxvZyhcImNhbGxlZCBhbGxyZWFkeVwiKVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdXBkYXRlKCk6IHZvaWR7XHJcbiAgICB0aGlzLnBsYXllckRpc3BsYXkuc2V0VGV4dChgVGV4dDogJHt0aGlzLmluQ291bnR9YCk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IElucHV0LCBHYW1lT2JqZWN0cyB9IGZyb20gJ3BoYXNlcic7XHJcbmltcG9ydCB7IGdldEdhbWVXaWR0aCwgZ2V0R2FtZUhlaWdodCwgSW5ncmVkaWVudHMsIGRyaW5rVG9Db2xvck1hcCB9IGZyb20gJy4uL2hlbHBlcnMnO1xyXG5pbXBvcnQgKiBhcyBzaWduYWxSIGZyb20gJ0BtaWNyb3NvZnQvc2lnbmFscic7XHJcbi8vaW1wb3J0IHsgSW5ncmVkaWVudHMgfSBmcm9tICcuLi8uLi8uLi9DbGllbnQvc3JjL1JlZmVyZW5jZSc7XHJcbmltcG9ydCB7IE1lbnVCdXR0b24gfSBmcm9tICcuLi91aS9tZW51LWJ1dHRvbic7XHJcbmltcG9ydCB7IEdsYXNzQnV0dG9uIH0gZnJvbSAnLi4vdWkvZ2xhc3MtYnV0dG9uJztcclxuaW1wb3J0IHsgU2NlbmVCdXR0b24gfSBmcm9tICcuLi91aS9zY2VuZS1idXR0b24nO1xyXG5pbXBvcnQgeyBPdGhlckdsYXNzQnV0dG9uIH0gZnJvbSAnLi4vdWkvb3RoZXItZ2xhc3MtYnV0dG9uJztcclxuXHJcbmNvbnN0IHNjZW5lQ29uZmlnOiBQaGFzZXIuVHlwZXMuU2NlbmVzLlNldHRpbmdzQ29uZmlnID0ge1xyXG4gIGFjdGl2ZTogZmFsc2UsXHJcbiAgdmlzaWJsZTogZmFsc2UsXHJcbiAga2V5OiAnR2FtZScsXHJcbn07XHJcblxyXG5lbnVtIEdhbWVQaGFzZSB7XHJcbiAgVW5hc3NpZ25lZCxcclxuICBBc3NpZ25lZCxcclxuICBTdGFydGVkLFxyXG4gIFJlc3VsdGVkLFxyXG59XHJcbmNsYXNzIFNldHVwe1xyXG4gIHB1YmxpYyBwbGF5ZXJjb3VudDogbnVtYmVyO1xyXG4gIHB1YmxpYyByb3VuZE51bWJlcjogbnVtYmVyO1xyXG4gIHB1YmxpYyBjdXBOdW1iZXI6IG51bWJlcjtcclxuICBwdWJsaWMgYWN0aW9uczogbnVtYmVyW107XHJcbn1cclxuY2xhc3MgR2FtZVNjZW5lQXJndW1lbnRzIHtcclxuICBwdWJsaWMgaHViQ29ubmVjdGlvbjogc2lnbmFsUi5IdWJDb25uZWN0aW9uO1xyXG4gIHB1YmxpYyBzZXR1cDogU2V0dXA7XHJcbn1cclxuXHJcbmNsYXNzIHN0YXRlVXBkYXRle1xyXG4gIHB1YmxpYyBjdXBTdGF0ZTogQXJyYXk8bnVtYmVyPjtcclxuICBwdWJsaWMgY3VwTG9ja3M6IEFycmF5PG51bWJlcj47XHJcbn1cclxuZXhwb3J0IGNsYXNzIEdhbWVTY2VuZSBleHRlbmRzIFBoYXNlci5TY2VuZSB7XHJcbiAgcHVibGljIHNwZWVkID0gMjAwO1xyXG5cclxuICBwcml2YXRlIGh1YkNvbm5lY3Rpb246IHNpZ25hbFIuSHViQ29ubmVjdGlvbjtcclxuXHJcbiAgcHJpdmF0ZSBjdXJzb3JLZXlzOiBQaGFzZXIuVHlwZXMuSW5wdXQuS2V5Ym9hcmQuQ3Vyc29yS2V5cztcclxuICBwcml2YXRlIHZlcm1vdXRoOiBQaGFzZXIuR2FtZU9iamVjdHMuU3ByaXRlO1xyXG4gIHByaXZhdGUgYm91cmJvbjogUGhhc2VyLkdhbWVPYmplY3RzLlNwcml0ZTtcclxuICBwcml2YXRlIGljZTogUGhhc2VyLkdhbWVPYmplY3RzLlNwcml0ZTtcclxuICBwcml2YXRlIG9yYW5nZTogUGhhc2VyLkdhbWVPYmplY3RzLlNwcml0ZTtcclxuICBwcml2YXRlIGVtcHR5R2xhc3M6IFBoYXNlci5HYW1lT2JqZWN0cy5TcHJpdGU7XHJcbiAgcHJpdmF0ZSBmaWxsZWRnbGFzczE6IFBoYXNlci5HYW1lT2JqZWN0cy5SZWN0YW5nbGU7XHJcbiAgcHJpdmF0ZSBmaWxsZWRnbGFzczI6IFBoYXNlci5HYW1lT2JqZWN0cy5SZWN0YW5nbGU7XHJcbiAgcHJpdmF0ZSBmaWxsZWRnbGFzczM6IFBoYXNlci5HYW1lT2JqZWN0cy5SZWN0YW5nbGU7XHJcbiAgcHJpdmF0ZSBmaWxsZWRnbGFzczQ6IFBoYXNlci5HYW1lT2JqZWN0cy5SZWN0YW5nbGU7XHJcbiAgcHJpdmF0ZSBzaGFrZXI6IFBoYXNlci5HYW1lT2JqZWN0cy5TcHJpdGU7XHJcbiAgcHJpdmF0ZSBtdWRkbGVyOiBQaGFzZXIuR2FtZU9iamVjdHMuU3ByaXRlO1xyXG4gIHByaXZhdGUganVpY2VyOiBQaGFzZXIuR2FtZU9iamVjdHMuU3ByaXRlO1xyXG4gIHByaXZhdGUgc3VibWl0QnV0dG9uOiBNZW51QnV0dG9uO1xyXG4gIHByaXZhdGUgZ2xhc3NCdXR0b25zOiBBcnJheTxPdGhlckdsYXNzQnV0dG9uPiA9IFtdO1xyXG4gIHByaXZhdGUgYWN0aW9uQnV0dG9uczogQXJyYXk8UGhhc2VyLkdhbWVPYmplY3RzLlNwcml0ZT47XHJcbiAgcHJpdmF0ZSBzZWxlY3RlZFRhcmdldDogc3RyaW5nO1xyXG4gIHByaXZhdGUgcmVuZGVyOiBib29sZWFuO1xyXG4gIHB1YmxpYyBjdXBOdW1iZXJUZXh0OiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dDtcclxuXHJcbiAgLy8gc3RhdGUgd2hpY2ggaXMgcGxhaW5seSBjb3BpZWQgZnJvbSBwbGF5dGVzdCAxXHJcbiAgcHJpdmF0ZSBnbGFzc0NvbnRlbnRzOiBBcnJheTxudW1iZXI+O1xyXG4gIHByaXZhdGUgY3VwTG9ja3M6IEFycmF5PG51bWJlcj47XHJcbiAgcHJpdmF0ZSByZXN1bHRzOiBBcnJheTxudW1iZXI+O1xyXG4gIHByaXZhdGUgcGhhc2U6IEdhbWVQaGFzZTtcclxuICBwcml2YXRlIGZpbmFsOiBib29sZWFuO1xyXG4gIHByaXZhdGUgcGxheWVyQ291bnQ6IG51bWJlcjtcclxuICBwcml2YXRlIGFjdGlvbnM6IEFycmF5PG51bWJlcj47XHJcbiAgcHJpdmF0ZSByb3VuZE51bWJlcjogbnVtYmVyO1xyXG4gIHByaXZhdGUgY3VwTnVtYmVyOiBudW1iZXI7XHJcblxyXG4gIHByaXZhdGUgZnVsbFN0dWZmOiBBcnJheTxQaGFzZXIuR2FtZU9iamVjdHMuU3ByaXRlPjtcclxuXHJcbiAgcHJpdmF0ZSBjb250ZW50czogc3RyaW5nW10gPSBbXTtcclxuICBwcml2YXRlIGdsYXNzRmlsbGVyczogUGhhc2VyLkdhbWVPYmplY3RzLlJlY3RhbmdsZVtdID0gW107XHJcblxyXG4gIHByaXZhdGVDb2xvck1hcDogTWFwPHN0cmluZywgbnVtYmVyPiA9IG5ldyBNYXAoW1xyXG4gICAgWydib3VyYm9uJywgMHhkYjc5MDBdLFxyXG4gICAgWyd2ZXJtb3V0aCcsIDB4NTUwMTAzXSxcclxuICBdKTtcclxuXHJcbiAgcHJpdmF0ZSBpc1BvdXJpbmcgPSAwO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKHNjZW5lQ29uZmlnKTtcclxuICB9XHJcbiAgcHVibGljIHRleHQxOiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dDtcclxuICBwdWJsaWMgdGV4dDI6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0O1xyXG5cclxuICBwcml2YXRlIGdldENvb2tpZSA9IChjbmFtZSkgPT4ge1xyXG4gICAgY29uc3QgbmFtZSA9IGNuYW1lICsgJz0nO1xyXG4gICAgY29uc3QgZGVjb2RlZENvb2tpZSA9IGRlY29kZVVSSUNvbXBvbmVudChkb2N1bWVudC5jb29raWUpO1xyXG4gICAgY29uc3QgY2EgPSBkZWNvZGVkQ29va2llLnNwbGl0KCc7Jyk7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGxldCBjID0gY2FbaV07XHJcbiAgICAgIHdoaWxlIChjLmNoYXJBdCgwKSA9PSAnICcpIHtcclxuICAgICAgICBjID0gYy5zdWJzdHJpbmcoMSk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGMuaW5kZXhPZihuYW1lKSA9PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIGMuc3Vic3RyaW5nKG5hbWUubGVuZ3RoLCBjLmxlbmd0aCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiAnJztcclxuICB9O1xyXG5cclxuICBwdWJsaWMgaW5pdChkYXRhOiBHYW1lU2NlbmVBcmd1bWVudHMpOiB2b2lkIHtcclxuICAgIHRoaXMuaHViQ29ubmVjdGlvbiA9IGRhdGEuaHViQ29ubmVjdGlvbjtcclxuICAgIHRoaXMucGxheWVyQ291bnQgPSBkYXRhLnNldHVwLnBsYXllcmNvdW50O1xyXG4gICAgdGhpcy5hY3Rpb25zID0gZGF0YS5zZXR1cC5hY3Rpb25zO1xyXG4gICAgdGhpcy5yb3VuZE51bWJlciA9IGRhdGEuc2V0dXAucm91bmROdW1iZXI7XHJcbiAgICB0aGlzLmN1cE51bWJlciA9IGRhdGEuc2V0dXAuY3VwTnVtYmVyO1xyXG4gIH1cclxuXHJcblxyXG4gIHB1YmxpYyBjcmVhdGUoKTogdm9pZCB7XHJcbiAgICBjb25zb2xlLmxvZygnR2FtZScpO1xyXG4gICAgY29uc29sZS5sb2coJ2Nvb2tpZTogJyArIGRvY3VtZW50LmNvb2tpZSk7XHJcbiAgICB0aGlzLnJlc2V0KCk7XHJcbiAgICB0aGlzLnNlbGVjdGVkVGFyZ2V0ID0gdGhpcy5jdXBOdW1iZXIudG9TdHJpbmcoKTtcclxuICAgIHRoaXMuZnVsbFN0dWZmID0gW107XHJcbiAgICAvLyBTaWduYWxSIFN0dWZmXHJcbiAgICB0aGlzLnNldHVwSHViKHRoaXMuaHViQ29ubmVjdGlvbik7XHJcblxyXG4gICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSB0aGlzLnN5cy5nYW1lLmNhbnZhcztcclxuICAgIHRoaXMuZW1wdHlHbGFzcyA9IHRoaXMuYWRkLnNwcml0ZSh3aWR0aCAvIDIsIGhlaWdodCAvIDMsICdlbXB0eWdsYXNzJykuc2V0RGVwdGgoMCk7XHJcbiAgICBcclxuXHJcblxyXG4gICAgaWYodGhpcy5jdXBOdW1iZXIgPCA0KXtcclxuXHJcbiAgICAgIHRoaXMuY3VwTnVtYmVyVGV4dCA9IHRoaXMuYWRkLnRleHQod2lkdGgvNCwgaGVpZ2h0LzEwIC0gMzAsIGBZb3UgYXJlIGN1cCBudW1iZXIgJHsodGhpcy5jdXBOdW1iZXIrMSl9YCwgeyBjb2xvcjogJyNmZmZmZmYnIH0pO1xyXG4gICAgICAvLyBBZGQgYSBwbGF5ZXIgc3ByaXRlIHRoYXQgY2FuIGJlIG1vdmVkIGFyb3VuZC4gUGxhY2UgaGltIGluIHRoZSBtaWRkbGUgb2YgdGhlIHNjcmVlbi5cclxuICAgIHRoaXMuZmlsbGVkZ2xhc3MxID0gdGhpcy5hZGQucmVjdGFuZ2xlKHdpZHRoIC8gMiwgaGVpZ2h0IC8gMyArICh0aGlzLmVtcHR5R2xhc3MuZGlzcGxheUhlaWdodC80KSwgdGhpcy5lbXB0eUdsYXNzLmRpc3BsYXlXaWR0aCwgdGhpcy5lbXB0eUdsYXNzLmRpc3BsYXlIZWlnaHQvNCwgMHhmZmZmZmYpO1xyXG4gICAgdGhpcy5maWxsZWRnbGFzczIgPSB0aGlzLmFkZC5yZWN0YW5nbGUod2lkdGggLyAyLCBoZWlnaHQgLyAzICsgKDMgKiB0aGlzLmVtcHR5R2xhc3MuZGlzcGxheUhlaWdodC80KSwgdGhpcy5lbXB0eUdsYXNzLmRpc3BsYXlXaWR0aCwgdGhpcy5lbXB0eUdsYXNzLmRpc3BsYXlIZWlnaHQvNCwgMHgwMDAwZmYpO1xyXG4gICAgdGhpcy5maWxsZWRnbGFzczMgPSB0aGlzLmFkZC5yZWN0YW5nbGUod2lkdGggLyAyLCBoZWlnaHQgLyAzICsgKHRoaXMuZW1wdHlHbGFzcy5kaXNwbGF5SGVpZ2h0LzIpLCB0aGlzLmVtcHR5R2xhc3MuZGlzcGxheVdpZHRoLCB0aGlzLmVtcHR5R2xhc3MuZGlzcGxheUhlaWdodC80LCAweDAwZmYwMCk7XHJcbiAgICB0aGlzLmZpbGxlZGdsYXNzNCA9IHRoaXMuYWRkLnJlY3RhbmdsZSh3aWR0aCAvIDIsIGhlaWdodCAvIDMsIHRoaXMuZW1wdHlHbGFzcy5kaXNwbGF5V2lkdGgsIHRoaXMuZW1wdHlHbGFzcy5kaXNwbGF5SGVpZ2h0LzQsIDB4RkYwMDAwKTtcclxuICAgIFxyXG4gICAgdGhpcy5maWxsZWRnbGFzczEuc2V0U2NhbGUoMC41KS5zZXRBbHBoYSgxKS5zZXREZXB0aCgxKS5zZXRCbGVuZE1vZGUoUGhhc2VyLkJsZW5kTW9kZXMuTVVMVElQTFkpO1xyXG4gICAgdGhpcy5maWxsZWRnbGFzczIuc2V0U2NhbGUoMC41KS5zZXRBbHBoYSgxKS5zZXREZXB0aCgxKS5zZXRCbGVuZE1vZGUoUGhhc2VyLkJsZW5kTW9kZXMuTVVMVElQTFkpO1xyXG4gICAgdGhpcy5maWxsZWRnbGFzczMuc2V0U2NhbGUoMC41KS5zZXRBbHBoYSgxKS5zZXREZXB0aCgxKS5zZXRCbGVuZE1vZGUoUGhhc2VyLkJsZW5kTW9kZXMuTVVMVElQTFkpO1xyXG4gICAgdGhpcy5maWxsZWRnbGFzczQuc2V0U2NhbGUoMC41KS5zZXRBbHBoYSgxKS5zZXREZXB0aCgxKS5zZXRCbGVuZE1vZGUoUGhhc2VyLkJsZW5kTW9kZXMuTVVMVElQTFkpO1xyXG4gICAgdGhpcy5lbXB0eUdsYXNzLnNldFNjYWxlKDAuNSk7XHJcbiAgICBcclxuICAgIHRoaXMuZmlsbGVkZ2xhc3MxLnNldE9yaWdpbigwLDApXHJcbiAgICB0aGlzLmZpbGxlZGdsYXNzMi5zZXRPcmlnaW4oMCwwKVxyXG4gICAgdGhpcy5maWxsZWRnbGFzczMuc2V0T3JpZ2luKDAsMClcclxuICAgIHRoaXMuZmlsbGVkZ2xhc3M0LnNldE9yaWdpbigwLDApXHJcbiAgICBcclxuICAgIHRoaXMuZmlsbGVkZ2xhc3MxLmhlaWdodCA9IHRoaXMuZW1wdHlHbGFzcy5kaXNwbGF5SGVpZ2h0LzI7XHJcbiAgICB0aGlzLmZpbGxlZGdsYXNzMi5oZWlnaHQgPSB0aGlzLmVtcHR5R2xhc3MuZGlzcGxheUhlaWdodC8yO1xyXG4gICAgdGhpcy5maWxsZWRnbGFzczMuaGVpZ2h0ID0gdGhpcy5lbXB0eUdsYXNzLmRpc3BsYXlIZWlnaHQvMjtcclxuICAgIHRoaXMuZmlsbGVkZ2xhc3M0LmhlaWdodCA9IHRoaXMuZW1wdHlHbGFzcy5kaXNwbGF5SGVpZ2h0LzI7XHJcbiAgICBcclxuICAgIHRoaXMuZmlsbGVkZ2xhc3MxLnNldFBvc2l0aW9uKHRoaXMuZW1wdHlHbGFzcy5nZXRUb3BMZWZ0KCkueCwgdGhpcy5lbXB0eUdsYXNzLmdldFRvcExlZnQoKS55KTtcclxuICAgIHRoaXMuZmlsbGVkZ2xhc3MyLnNldFBvc2l0aW9uKHRoaXMuZmlsbGVkZ2xhc3MxLmdldEJvdHRvbUxlZnQoKS54LCB0aGlzLmZpbGxlZGdsYXNzMS5nZXRCb3R0b21MZWZ0KCkueSk7XHJcbiAgICB0aGlzLmZpbGxlZGdsYXNzMy5zZXRQb3NpdGlvbih0aGlzLmZpbGxlZGdsYXNzMi5nZXRCb3R0b21MZWZ0KCkueCwgdGhpcy5maWxsZWRnbGFzczIuZ2V0Qm90dG9tTGVmdCgpLnkpO1xyXG4gICAgdGhpcy5maWxsZWRnbGFzczQuc2V0UG9zaXRpb24odGhpcy5maWxsZWRnbGFzczMuZ2V0Qm90dG9tTGVmdCgpLngsIHRoaXMuZmlsbGVkZ2xhc3MzLmdldEJvdHRvbUxlZnQoKS55KTtcclxuICAgIHRoaXMuc3VibWl0QnV0dG9uID0gbmV3IE1lbnVCdXR0b24oXHJcbiAgICAgIHRoaXMsXHJcbiAgICAgIHRoaXMuZW1wdHlHbGFzcy5nZXRCb3R0b21DZW50ZXIoKS54LTUwLFxyXG4gICAgICB0aGlzLmVtcHR5R2xhc3MuZ2V0VG9wQ2VudGVyKCkueSAtIGhlaWdodC8xMCxcclxuICAgICAgJ1NlcnZlIEdsYXNzJyxcclxuICAgICAgKCkgPT4ge1xyXG4gICAgICAgIHRoaXMucmVtb3RlU3VibWl0Y3VwKCk7XHJcbiAgICAgIH0sXHJcbiAgICAgICk7XHJcbiAgICAgIFxyXG5cclxuICAgICAgXHJcblxyXG4gICAgdGhpcy5zdWJtaXRCdXR0b24uc2V0WCh0aGlzLnN1Ym1pdEJ1dHRvbi54IC0gdGhpcy5zdWJtaXRCdXR0b24uZGlzcGxheVdpZHRoIC8gMik7XHJcbiAgICB0aGlzLnN1Ym1pdEJ1dHRvbi5sYWJlbC5zZXRYKHRoaXMuc3VibWl0QnV0dG9uLnggKyB0aGlzLnN1Ym1pdEJ1dHRvbi5wYWRkaW5nKTtcclxuXHJcbiAgICBcclxuXHJcbiAgICBuZXcgU2NlbmVCdXR0b24odGhpcyx0aGlzLnN1Ym1pdEJ1dHRvbi5nZXRUb3BSaWdodCgpLnggKyAxNSxcclxuICAgIHRoaXMuZW1wdHlHbGFzcy5nZXRUb3BDZW50ZXIoKS55IC0gaGVpZ2h0LzEwLCAnRGlzY2FyZCcsICgpID0+IHRoaXMucmVtb3RlRW1wdHlDdXAoKSApXHJcblxyXG4gICAgdGhpcy5nbGFzc0ZpbGxlcnMucHVzaCh0aGlzLmZpbGxlZGdsYXNzNCk7XHJcbiAgICB0aGlzLmdsYXNzRmlsbGVycy5wdXNoKHRoaXMuZmlsbGVkZ2xhc3MzKTtcclxuICAgIHRoaXMuZ2xhc3NGaWxsZXJzLnB1c2godGhpcy5maWxsZWRnbGFzczIpO1xyXG4gICAgdGhpcy5nbGFzc0ZpbGxlcnMucHVzaCh0aGlzLmZpbGxlZGdsYXNzMSk7XHJcbi8qXHJcbiovXHJcbiAgXHJcbiAgICB0aGlzLmlucHV0Lm9uKCdkcmFnZW5kJywgKHBvaW50ZXIsIGdhbWVPYmplY3QpID0+IHtcclxuICAgICAgZ2FtZU9iamVjdC5jbGVhclRpbnQoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIFRoaXMgaXMgYSBuaWNlIGhlbHBlciBQaGFzZXIgcHJvdmlkZXMgdG8gY3JlYXRlIGxpc3RlbmVycyBmb3Igc29tZSBvZiB0aGUgbW9zdCBjb21tb24ga2V5cy5cclxuICAgIHRoaXMuY3Vyc29yS2V5cyA9IHRoaXMuaW5wdXQua2V5Ym9hcmQuY3JlYXRlQ3Vyc29yS2V5cygpO1xyXG5cclxuICAgIHRoaXMudGV4dDEgPSB0aGlzLmFkZC50ZXh0KDEwLCAxMCwgJycsIHsgY29sb3I6ICcjMDBmZjAwJyB9KTtcclxuICAgIHRoaXMudGV4dDIgPSB0aGlzLmFkZC50ZXh0KDUwMCwgMTAsICcnLCB7IGNvbG9yOiAnIzAwZmYwMCcgfSk7XHJcblxyXG5cclxuICAgIHRoaXMuYWN0aW9ucy5mb3JFYWNoKChlbGVtZW50LCBpZHgpID0+IHtcclxuICAgICAgbGV0IG5hbWUgPSBJbmdyZWRpZW50c1tlbGVtZW50XTtcclxuICAgICAgLy9sZXQgYWN0aW9uQnV0dG9uID0gbmV3IFNjZW5lQnV0dG9uKHRoaXMsIHdpZHRoICogaWR4IC8gNSwgaGVpZ2h0ICogMC43NSwgbmFtZSwgKCk9Pnt9KTtcclxuICAgICAgbGV0IG5leHRTY2VuZSA9IG5hbWU7XHJcbiAgICAgIGNvbnNvbGUubG9nKG5hbWUpXHJcbiAgICAgIGxldCB0bXAgPSB0aGlzLmFkZC5zcHJpdGUoKHdpZHRoLzUpKiAoaWR4ICsgMSksIGhlaWdodCAqIDAuNzUsIG5hbWUpLnNldEludGVyYWN0aXZlKCk7XHJcbiAgICAgIGlmKGVsZW1lbnQgPj0gMTApe1xyXG4gICAgICAgIG5leHRTY2VuZSA9ICdQb3VyJztcclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmIChuYW1lLmluY2x1ZGVzKFwiSnVpY2VcIikpe1xyXG4gICAgICAgIG5leHRTY2VuZSA9ICdKdWljZXInXHJcbiAgICAgIH1cclxuICAgICAgdG1wLnNldFNjYWxlKDAuMik7XHJcbiAgICAgIHRtcC5vbigncG9pbnRlcmRvd24nLCAoKT0+IHtcclxuICAgICAgICB0aGlzLnNjZW5lLnNldFZpc2libGUoZmFsc2UpO1xyXG4gICAgICAgIHRoaXMuc2NlbmUucGF1c2UoKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIm5leHQgXCIgKyBuZXh0U2NlbmUpO1xyXG4gICAgICAgIHRoaXMuc2NlbmUubGF1bmNoKG5leHRTY2VuZSwge29uRmluaXNoOiAoZ29vZDogYm9vbGVhbikgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJjYWxsZWRcIilcclxuICAgICAgICAgIHRoaXMuc2NlbmUuc2V0VmlzaWJsZSh0cnVlKTtcclxuICAgICAgICAgIGlmKGdvb2Qpe1xyXG4gICAgICAgICAgICB0aGlzLnJlbW90ZVNlbmRBY3Rpb24oZWxlbWVudCwgTnVtYmVyLnBhcnNlSW50KHRoaXMuc2VsZWN0ZWRUYXJnZXQpLnZhbHVlT2YoKSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidGhleSBkaWQgaXRcIik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB0aGlzLnNjZW5lLnJlc3VtZSgpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgQm90dGxlU3ByaXRlTmFtZTogbmFtZX0pO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKG5hbWUpO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5nbGFzc0J1dHRvbnMgPSBbXTtcclxuICAgIHRoaXMuYWRkLnRleHQodGhpcy5lbXB0eUdsYXNzLmdldFRvcExlZnQoKS54LFxyXG4gICAgdGhpcy5lbXB0eUdsYXNzLmdldEJvdHRvbUNlbnRlcigpLnkgKyBoZWlnaHQgLyAxNSAtMTUsXCJ0YXJnZXQgY3VwOlwiIClcclxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCA0OyBpKyspe1xyXG4gICAgICB0aGlzLmdsYXNzQnV0dG9ucy5wdXNoKG5ldyBPdGhlckdsYXNzQnV0dG9uKFxyXG4gICAgICAgIHRoaXMsXHJcbiAgICAgICAgdGhpcy5lbXB0eUdsYXNzLmdldFRvcExlZnQoKS54ICsgaSAqIDMwLFxyXG4gICAgICAgIHRoaXMuZW1wdHlHbGFzcy5nZXRCb3R0b21DZW50ZXIoKS55ICsgaGVpZ2h0IC8gMTUsXHJcbiAgICAgICAgKGkrMSkudG9TdHJpbmcoKSxcclxuICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLnJlbmRlciA9IHRydWU7IFxyXG4gICAgICAgICAgaWYoIXRoaXMuY3VwTG9ja3MuaW5jbHVkZXMoaSkpe1xyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkVGFyZ2V0ID0gaS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInNlbGVjdGVkID0gXCIgKyB0aGlzLnNlbGVjdGVkVGFyZ2V0KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgKSlcclxuICAgICAgfVxyXG4gIH1cclxuICBlbHNle1xyXG4gICAgdGhpcy5lbXB0eUdsYXNzLnNldFNjYWxlKDAuNSk7XHJcbiAgICB0aGlzLmVtcHR5R2xhc3Muc2V0VmlzaWJsZShmYWxzZSk7XHJcblxyXG4gICAgdGhpcy5hY3Rpb25zLmZvckVhY2goKGVsZW1lbnQsIGlkeCkgPT4ge1xyXG4gICAgICBsZXQgbmFtZSA9IEluZ3JlZGllbnRzW2VsZW1lbnRdO1xyXG4gICAgICAvL2xldCBhY3Rpb25CdXR0b24gPSBuZXcgU2NlbmVCdXR0b24odGhpcywgd2lkdGggKiBpZHggLyA1LCBoZWlnaHQgKiAwLjc1LCBuYW1lLCAoKT0+e30pO1xyXG4gICAgICBsZXQgbmV4dFNjZW5lID0gbmFtZTtcclxuICAgICAgY29uc29sZS5sb2cobmFtZSlcclxuICAgICAgbGV0IHRtcCA9IHRoaXMuYWRkLnNwcml0ZSgod2lkdGgvMiksIChoZWlnaHQgLyA1KSAqIChpZHggKyAxKSwgbmFtZSkuc2V0SW50ZXJhY3RpdmUoKTtcclxuICAgICAgaWYoZWxlbWVudCA+PSAxMCl7XHJcbiAgICAgICAgbmV4dFNjZW5lID0gJ1BvdXInO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYgKG5hbWUuaW5jbHVkZXMoXCJKdWljZVwiKSl7XHJcbiAgICAgICAgbmV4dFNjZW5lID0gJ0p1aWNlcidcclxuICAgICAgfVxyXG4gICAgICB0bXAuc2V0U2NhbGUoMC4yKTtcclxuICAgICAgdG1wLm9uKCdwb2ludGVyZG93bicsICgpPT4ge1xyXG4gICAgICAgIHRoaXMuc2NlbmUuc2V0VmlzaWJsZShmYWxzZSk7XHJcbiAgICAgICAgdGhpcy5zY2VuZS5wYXVzZSgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwibmV4dCBcIiArIG5leHRTY2VuZSk7XHJcbiAgICAgICAgdGhpcy5zY2VuZS5sYXVuY2gobmV4dFNjZW5lLCB7b25GaW5pc2g6ICgpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiY2FsbGVkXCIpXHJcbiAgICAgICAgICB0aGlzLnNjZW5lLnNldFZpc2libGUodHJ1ZSk7XHJcbiAgICAgICAgICB0aGlzLnJlbW90ZVNlbmRBY3Rpb24oZWxlbWVudCwgTnVtYmVyLnBhcnNlSW50KHRoaXMuc2VsZWN0ZWRUYXJnZXQpLnZhbHVlT2YoKSk7XHJcbiAgICAgICAgICB0aGlzLnNjZW5lLnJlc3VtZSgpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgQm90dGxlU3ByaXRlTmFtZTogbmFtZX0pO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKG5hbWUpO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuZ2xhc3NCdXR0b25zID0gW107XHJcbiAgICB0aGlzLmFkZC50ZXh0KHRoaXMuZW1wdHlHbGFzcy5nZXRUb3BMZWZ0KCkueCxcclxuICAgIGhlaWdodC8xMi0xNSxcInRhcmdldCBjdXA6XCIgKVxyXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IDQ7IGkrKyl7XHJcbiAgICAgIHRoaXMuZ2xhc3NCdXR0b25zLnB1c2gobmV3IE90aGVyR2xhc3NCdXR0b24oXHJcbiAgICAgICAgdGhpcyxcclxuICAgICAgICB0aGlzLmVtcHR5R2xhc3MuZ2V0VG9wTGVmdCgpLnggKyBpICogMzAsXHJcbiAgICAgICAgaGVpZ2h0LzEyLFxyXG4gICAgICAgIChpKzEpLnRvU3RyaW5nKCksXHJcbiAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5yZW5kZXIgPSB0cnVlOyBcclxuICAgICAgICAgIGlmKCF0aGlzLmN1cExvY2tzLmluY2x1ZGVzKGkpKXtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZFRhcmdldCA9IGkudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJzZWxlY3RlZCA9IFwiICsgdGhpcy5zZWxlY3RlZFRhcmdldCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcInNlbGVjdGVkID0gXCIgKyB0aGlzLnNlbGVjdGVkVGFyZ2V0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgKSlcclxuICAgICAgfVxyXG4gIH1cclxuXHJcblxyXG4gICBcclxuICAgICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMucmVtb3RlRmV0Y2hTdGF0ZSgpO1xyXG4gICAgICB9LCAxMDAwMCk7XHJcbiAgICAgIHRoaXMucmVtb3RlRmV0Y2hTdGF0ZSgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHVwZGF0ZSgpOiB2b2lkIHtcclxuXHJcbiAgICBpZih0aGlzLnJlbmRlcil7XHJcbiAgICAvLyBzZWxlY3QgYnV0dG9ucyBcclxuICAgIHRoaXMuZ2xhc3NCdXR0b25zLmZvckVhY2goKGVsZW1lbnQ6IE90aGVyR2xhc3NCdXR0b24sIGlkeDogTnVtYmVyKSA9PiB7XHJcbiAgICAgIGlmKHRoaXMuY3VwTG9ja3MuaW5jbHVkZXMoaWR4LnZhbHVlT2YoKSkpe1xyXG4gICAgICAgIGVsZW1lbnQubGFiZWwuc2V0VGV4dChcIvCflJJcIik7XHJcbiAgICAgICAgZWxlbWVudC5zZXRGaWxsU3R5bGUoMHg0NDQ0NDQpO1xyXG4gICAgICB9ZWxzZSB7XHJcbiAgICAgICAgZWxlbWVudC5sYWJlbC5zZXRUZXh0KGVsZW1lbnQub2d0ZXh0KTtcclxuICAgICAgICBpZiAodGhpcy5zZWxlY3RlZFRhcmdldCA9PSBpZHgudG9TdHJpbmcoKSl7XHJcbiAgICAgICAgICAvL2VsZW1lbnQuZW50ZXJNZW51QnV0dG9uQWN0aXZlU3RhdGUoKTtcclxuICAgICAgICAgIGVsZW1lbnQuc2V0RmlsbFN0eWxlKDB4NDQ0NDQ0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgIC8vZWxlbWVudC5lbnRlck1lbnVCdXR0b25SZXN0U3RhdGUoKTtcclxuICAgICAgICAgIGVsZW1lbnQuc2V0RmlsbFN0eWxlKDB4ODg4ODg4KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuXHJcbiAgICBpZih0aGlzLmN1cE51bWJlciA8IDQpe1xyXG4vLyBvdmVyd3JpdGluZyBcclxudGhpcy5nbGFzc0ZpbGxlcnMuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICBlbGVtZW50LnNldFZpc2libGUoZmFsc2UpO1xyXG59KTtcclxudGhpcy5mdWxsU3R1ZmYuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICBlbGVtZW50LmRlc3Ryb3koKTtcclxufSk7XHJcbi8vIGltcGxlbWVudGlvblxyXG5jb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IHRoaXMuc3lzLmdhbWUuY2FudmFzO1xyXG5sZXQgY3VycmVudFBvc2l0aW9uID0gMDtcclxudGhpcy5nbGFzc0NvbnRlbnRzLmZvckVhY2goKGVsZW1lbnQsIGlkeCkgPT4ge1xyXG4gIGxldCBuYW1lID0gSW5ncmVkaWVudHNbZWxlbWVudF07XHJcbiAgY29uc29sZS5sb2coXCJyZW5kZXJpbmcgXCIgKyBuYW1lICArIGN1cnJlbnRQb3NpdGlvbilcclxuICBpZihkcmlua1RvQ29sb3JNYXAuaGFzKG5hbWUpKXtcclxuICAgIGNvbnNvbGUubG9nKFwidHJpZWQgdG8gdGludCBcIiArIGRyaW5rVG9Db2xvck1hcC5nZXQobmFtZSkpO1xyXG4gICAgdGhpcy5nbGFzc0ZpbGxlcnNbY3VycmVudFBvc2l0aW9uXS5zZXRWaXNpYmxlKHRydWUpXHJcbiAgICB0aGlzLmdsYXNzRmlsbGVyc1tjdXJyZW50UG9zaXRpb25dLmZpbGxDb2xvciA9IChkcmlua1RvQ29sb3JNYXAuZ2V0KG5hbWUpKTtcclxuICAgIGN1cnJlbnRQb3NpdGlvbisrO1xyXG4gIH1cclxuICBzd2l0Y2gobmFtZSl7XHJcbiAgICBjYXNlICdPcmFuZ2UgUGVlbCc6XHJcbiAgICAgIHRoaXMuZnVsbFN0dWZmLnB1c2godGhpcy5hZGQuc3ByaXRlKHdpZHRoIC8gMiwgaGVpZ2h0IC8gMywgJ29yYW5nZXdlZGdlZ2xhc3MnKS5zZXRTY2FsZSgwLjUpKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlICdJY2UgQ3ViZSc6XHJcbiAgICAgIHRoaXMuZnVsbFN0dWZmLnB1c2godGhpcy5hZGQuc3ByaXRlKHdpZHRoIC8gMiwgaGVpZ2h0IC8gMywgJ2ljZWdsYXNzJykuc2V0U2NhbGUoMC41KSk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSAnTXVkZGxlIERyaW5rJzpcclxuICAgICAgdGhpcy5mdWxsU3R1ZmYucHVzaCh0aGlzLmFkZC5zcHJpdGUod2lkdGggLyAyLCBoZWlnaHQgLyAzLCAnbXVkZGxlcmdsYXNzJykuc2V0U2NhbGUoMC41KSk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSAnU2hha2UgRHJpbmsnOlxyXG4gICAgICB0aGlzLmZ1bGxTdHVmZi5wdXNoKHRoaXMuYWRkLnNwcml0ZSh3aWR0aCAvIDIsIGhlaWdodCAvIDMsICdzaGFrZW5nbGFzcycpLnNldFNjYWxlKDAuNSkpO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgJ0FuZ29zdHVyYSBCaXR0ZXJzJzpcclxuICAgICAgdGhpcy5mdWxsU3R1ZmYucHVzaCh0aGlzLmFkZC5zcHJpdGUod2lkdGggLyAyLCBoZWlnaHQgLyAzLCAnYml0dGVyc2dsYXNzJykuc2V0U2NhbGUoMC41KSk7XHJcbiAgICAgIGJyZWFrO1xyXG4gIH1cclxufSlcclxuICAgIH1cclxuICAgIFxyXG4gICAgdGhpcy5yZW5kZXIgPSBmYWxzZTtcclxuICAgIH1cclxuICAgICAgXHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJvdGF0ZVJpZ2h0KGdhbWVPYmplY3Q6IEdhbWVPYmplY3RzLlNwcml0ZSk6IHZvaWQge1xyXG4gICAgaWYgKGdhbWVPYmplY3QuYW5nbGUgPCA5MCkge1xyXG4gICAgICBnYW1lT2JqZWN0LnNldEFuZ2xlKGdhbWVPYmplY3QuYW5nbGUgKyAxNSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJvdGF0ZUNlbnRlcihnYW1lT2JqZWN0OiBHYW1lT2JqZWN0cy5TcHJpdGUpOiB2b2lkIHtcclxuICAgIGlmIChnYW1lT2JqZWN0LmFuZ2xlID4gMCkge1xyXG4gICAgICBnYW1lT2JqZWN0LnNldEFuZ2xlKGdhbWVPYmplY3QuYW5nbGUgLSAxNSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldHVwSHViKGNvbm5lY3Rpb246IHNpZ25hbFIuSHViQ29ubmVjdGlvbik6IHZvaWQge1xyXG4gICAgY29ubmVjdGlvbi5vbignU3RhcnQnLCAoKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGBzdGFydGVkYCk7XHJcbiAgICAgIHRoaXMucGhhc2UgPSBHYW1lUGhhc2UuU3RhcnRlZDtcclxuICAgICAgdGhpcy5yZXNldCgpO1xyXG4gICAgICB0aGlzLnJlbW90ZUZldGNoU3RhdGUoKTtcclxuICAgICAgY29uc29sZS5sb2coXCJ0cmllZCB0byByZXNldFwiKVxyXG4gICAgICB0aGlzLnJlbmRlciA9IHRydWU7XHJcbiAgICB9KTtcclxuICAgIGNvbm5lY3Rpb24ub24oJ1VwZGF0ZUN1cFN0YXRlJywgKGN1cFN0YXRlOiBudW1iZXJbXSkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhgQ3VwU3RhdGU6ICR7Y3VwU3RhdGV9YCk7XHJcbiAgICAgIHRoaXMuZ2xhc3NDb250ZW50cyA9IGN1cFN0YXRlO1xyXG4gICAgICB0aGlzLnJlbmRlciA9IHRydWU7XHJcbiAgICB9KTtcclxuICAgIGNvbm5lY3Rpb24ub24oJ1N0YXRlUHVzaCcsICh1cGRhdGU6IHN0YXRlVXBkYXRlKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGBTdGF0ZVB1c2g6IGxvY2tzOiAke3VwZGF0ZS5jdXBMb2Nrcy5qb2luKFwiLFwiKX0gc3RhdGU6ICR7dXBkYXRlLmN1cFN0YXRlLmpvaW4oXCIsXCIpfSBgKTtcclxuICAgICAgdGhpcy5nbGFzc0NvbnRlbnRzID0gdXBkYXRlLmN1cFN0YXRlO1xyXG4gICAgICB0aGlzLmN1cExvY2tzID0gdXBkYXRlLmN1cExvY2tzO1xyXG4gICAgICAvKnRoaXMuc2NlbmUucmVzdGFydCh7aHViQ29ubmVjdGlvbjogdGhpcy5odWJDb25uZWN0aW9uLCBzZXR1cDoge1xyXG4gICAgICAgIHBsYXllcmNvdW50OiB0aGlzLnBsYXllckNvdW50LFxyXG4gICAgICAgIHJvdW5kTnVtYmVyOiB0aGlzLnJvdW5kTnVtYmVyLFxyXG4gICAgICAgIGN1cE51bWJlcjogdGhpcy5jdXBOdW1iZXIsXHJcbiAgICAgICAgYWN0aW9uczogdGhpcy5hY3Rpb25zXHJcbiAgICAgIH19KTsqL1xyXG4gICAgICB0aGlzLnJlbmRlciA9IHRydWU7XHJcbiAgICB9KTtcclxuICAgIGNvbm5lY3Rpb24ub24oJ1Jlc3VsdCcsIChyZXN1bHQ6IG51bWJlcltdKSA9PiB7XHJcbiAgICAgIC8qZm9yIChsZXQgaSA9IHJlc3VsdC5sZW5ndGggLSAxOyBpID4gMDsgaS0tKSB7XHJcbiAgICAgICAgY29uc3QgaiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChpICsgMSkpO1xyXG4gICAgICAgIFtyZXN1bHRbaV0sIHJlc3VsdFtqXV0gPSBbcmVzdWx0W2pdLCByZXN1bHRbaV1dO1xyXG4gICAgICB9Ki9cclxuICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgICAgY29uc3QgY291bnQgPSByZXN1bHQucmVkdWNlKCh4LCB5KSA9PiB4ICsgeSk7XHJcbiAgICAgIGlmIChjb3VudCA9PSAwKSB7XHJcbiAgICAgICAgdGhpcy5maW5hbCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5zY2VuZS5zZXRWaXNpYmxlKGZhbHNlKTtcclxuICAgICAgICB0aGlzLnNjZW5lLnBhdXNlKCk7XHJcbiAgICAgICAgdGhpcy5zY2VuZS5sYXVuY2goJ1N1Y2Nlc3MnKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgLy9sZXQgbGlzdCA9IFswLCAwLCAwLCAwXTtcclxuICAgICAgLypyZXN1bHQuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICBsaXN0W2VsZW1lbnRdICs9IDE7XHJcbiAgICAgIH0pO1xyXG4gICAgICBsZXQgbGlzdDIgPSB0aGlzLnN0YXRlLnJlc3VsdHNMaXN0O1xyXG4gICAgICBsaXN0Mi5wdXNoKGxpc3QpOyovXHJcbiAgICAgIHRoaXMucGhhc2UgPSBHYW1lUGhhc2UuUmVzdWx0ZWQ7XHJcbiAgICAgIC8vdGhpcy5yZXN1bHRzID0gcmVzdWx0O1xyXG4gICAgICB0aGlzLnJlbmRlciA9IHRydWU7XHJcbiAgICAgIC8vIHNob3VsZCBnbyB0byByZXN1bHQgc2NlbmUgaW5zdGVhZFxyXG4gICAgICAvLyBhY3R1YWxseSBzaG91bGRudCwgaWQgcmF0aGVyIGp1c3QgcGxvcCByZXN1bHRzIG9uIHRvcCBvZiB3aGF0ZXZlciBlbHNlIGlzIHZpc2libGVcclxuICAgICAgdGhpcy5yZW1vdGVSZXNldCgpO1xyXG4gICAgICB0aGlzLnJlc2V0KCk7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwidHJpZWQgdG8gcmVzZXQgZnJvbSByZXN1bHRzXCIpXHJcbiAgICAgIHRoaXMucmVuZGVyID0gdHJ1ZTtcclxuICAgICAgdGhpcy5zY2VuZS5zZXRWaXNpYmxlKGZhbHNlKTtcclxuICAgICAgdGhpcy5zY2VuZS5wYXVzZSgpO1xyXG4gICAgICB0aGlzLnNjZW5lLmxhdW5jaCgnUmVzdWx0cycsIHtvbkZpbmlzaDogKCkgPT4geyAgdGhpcy5zY2VuZS5yZXN1bWUoKTt0aGlzLnNjZW5lLnNldFZpc2libGUodHJ1ZSk7fSwgcmVzdWx0czogcmVzdWx0fSk7XHJcbiAgICB9KTtcclxuICAgIGNvbm5lY3Rpb24ub24oJ0xvY2tDdXAnLCAoY3VwOiBudW1iZXIpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coYExvY2tlZCAke2N1cH1gKTtcclxuICAgICAgdGhpcy5jdXBMb2NrcyA9IHRoaXMuY3VwTG9ja3MuY29uY2F0KFtjdXBdKTtcclxuICAgICAgY29uc29sZS5sb2codGhpcy5jdXBMb2Nrcyk7XHJcbiAgICAgIHRoaXMucmVuZGVyID0gdHJ1ZTtcclxuICAgIH0pO1xyXG4gICAgY29ubmVjdGlvbi5vbignRW1wdHlDdXAnLCAoY3VwOiBudW1iZXIpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coYFVubG9ja2VkICR7Y3VwfWApO1xyXG4gICAgICB0aGlzLmN1cExvY2tzID0gdGhpcy5jdXBMb2Nrcy5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0gIT0gY3VwKTtcclxuICAgICAgY29uc29sZS5sb2codGhpcy5jdXBMb2Nrcyk7XHJcbiAgICAgIHRoaXMucmVuZGVyID0gdHJ1ZTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZXNldCgpOiB2b2lkIHtcclxuICAgIHRoaXMuZ2xhc3NDb250ZW50cyA9IFtdO1xyXG4gICAgdGhpcy5yZXN1bHRzID0gW107XHJcbiAgICB0aGlzLmN1cExvY2tzID0gW107XHJcbiAgICB0aGlzLnJlbmRlciA9IHRydWU7XHJcbiAgICB0aGlzLmdsYXNzQnV0dG9ucy5mb3JFYWNoKGUgPT4ge1xyXG4gICAgICBlLnNldEZpbGxTdHlsZSgweDg4ODg4OCk7XHJcbiAgICAgIGUubGFiZWwuc2V0VGV4dChlLm9ndGV4dCk7XHJcbiAgICAgIC8qXHJcbiAgICAgIGUuZW50ZXJNZW51QnV0dG9uQmxvY2tlZFN0YXRlKCk7XHJcbiAgICAgIGUucmVzZXRPbkNsaWNrKCk7XHJcbiAgICAgIGUuZW50ZXJNZW51QnV0dG9uUmVzdFN0YXRlKCk7Ki9cclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlbW90ZVJlZ2lzdGVyID0gKCkgPT4ge1xyXG4gICAgdGhpcy5odWJDb25uZWN0aW9uLmludm9rZSgnUmVnaXN0ZXInLCAneWVhaGhhcmRjb2RlZHRlYW1uYW1lJyk7XHJcbiAgfTtcclxuXHJcbiAgcHJpdmF0ZSByZW1vdGVTdWJtaXRjdXAgPSAoKSA9PiB7XHJcbiAgICB0aGlzLmh1YkNvbm5lY3Rpb24uaW52b2tlKCdTdWJtaXRDdXAnKTtcclxuICB9O1xyXG5cclxuICBwcml2YXRlIHJlbW90ZVNlbmRBY3Rpb24gPSAoYWN0aW9uOiBudW1iZXIsIHRhcmdldDogbnVtYmVyKSA9PiB7XHJcbiAgICB0aGlzLmh1YkNvbm5lY3Rpb24uaW52b2tlKCdTZW5kQWN0aW9uJywgYWN0aW9uLCB0YXJnZXQpO1xyXG4gIH07XHJcblxyXG4gIHByaXZhdGUgcmVtb3RlRW1wdHlDdXAgPSAoKSA9PiB7XHJcbiAgICB0aGlzLmh1YkNvbm5lY3Rpb24uaW52b2tlKCdFbXB0eUN1cCcpO1xyXG4gIH07XHJcblxyXG4gIHByaXZhdGUgcmVtb3RlUmVzZXQgPSAoKSA9PiB7XHJcbiAgICB0aGlzLmh1YkNvbm5lY3Rpb24uaW52b2tlKCdSZXNldCcpO1xyXG4gIH07XHJcbiAgcHJpdmF0ZSByZW1vdGVGZXRjaFN0YXRlID0gKCkgPT4ge1xyXG4gICAgdGhpcy5odWJDb25uZWN0aW9uLmludm9rZSgnRmV0Y2hTdGF0ZScpO1xyXG4gIH07XHJcbn1cclxuIiwiaW1wb3J0IHsgSW5wdXQsIEdhbWVPYmplY3RzIH0gZnJvbSAncGhhc2VyJztcclxuaW1wb3J0IHsgZ2V0R2FtZVdpZHRoLCBnZXRHYW1lSGVpZ2h0LCBkcmlua1RvQ29sb3JNYXAgfSBmcm9tICcuLi9oZWxwZXJzJztcclxuaW1wb3J0IHsgU2NlbmVCdXR0b24gfSBmcm9tICcuLi91aS9zY2VuZS1idXR0b24nO1xyXG5cclxuY29uc3Qgc2NlbmVDb25maWc6IFBoYXNlci5UeXBlcy5TY2VuZXMuU2V0dGluZ3NDb25maWcgPSB7XHJcbiAgYWN0aXZlOiBmYWxzZSxcclxuICB2aXNpYmxlOiBmYWxzZSxcclxuICBrZXk6ICdJY2UgQ3ViZScsXHJcbn07XHJcbmNsYXNzIEdhbWVTY2VuZUFyZ3VtZW50cyB7XHJcbiAgcHVibGljIG9uRmluaXNoOiBGdW5jdGlvbjtcclxufVxyXG5leHBvcnQgY2xhc3MgSWNlU2NlbmUgZXh0ZW5kcyBQaGFzZXIuU2NlbmUge1xyXG4gIHB1YmxpYyBzcGVlZCA9IDIwMDtcclxuXHJcbiAgcHJpdmF0ZSBjdXJzb3JLZXlzOiBQaGFzZXIuVHlwZXMuSW5wdXQuS2V5Ym9hcmQuQ3Vyc29yS2V5cztcclxuICBwcml2YXRlIGljZTogUGhhc2VyLkdhbWVPYmplY3RzLlNwcml0ZTtcclxuXHJcbiAgcHJpdmF0ZSBjb250ZW50czogc3RyaW5nW10gPSBbXTtcclxuICBwcml2YXRlIGdsYXNzRmlsbGVyczogUGhhc2VyLkdhbWVPYmplY3RzLlNwcml0ZVtdID0gW107XHJcblxyXG4gIHByaXZhdGUgaXNQb3VyaW5nID0gMDtcclxuICBwcml2YXRlIHRyYW5zaXRpb25pbmcgPSBmYWxzZTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcihzY2VuZUNvbmZpZyk7XHJcbiAgfVxyXG4gIHB1YmxpYyBvbkZpbmlzaDogRnVuY3Rpb247XHJcbiAgcHVibGljIHRleHQxOiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dDtcclxuICBwdWJsaWMgdGV4dDI6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0O1xyXG4gIHB1YmxpYyB0ZXh0MzogUGhhc2VyLkdhbWVPYmplY3RzLlRleHQ7XHJcbiAgcHVibGljIHRleHQ0OiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dDtcclxuICBwdWJsaWMgdGV4dDU6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0O1xyXG4gIHB1YmxpYyBjbGlja3MgPSAwO1xyXG4gIHB1YmxpYyBpY2VMZXZlbCA9IDA7XHJcblxyXG4gIHB1YmxpYyBpbml0KGRhdGE6IEdhbWVTY2VuZUFyZ3VtZW50cyk6IHZvaWQge1xyXG4gICAgdGhpcy5vbkZpbmlzaCA9IGRhdGEub25GaW5pc2g7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY3JlYXRlKCk6IHZvaWQge1xyXG4gICAgY29uc29sZS5sb2coJ0ljZScpO1xyXG4gICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSB0aGlzLnN5cy5nYW1lLmNhbnZhcztcclxuICAgIHRoaXMudHJhbnNpdGlvbmluZyA9IGZhbHNlO1xyXG4gICAgdGhpcy5jbGlja3MgPSAwO1xyXG4gICAgdGhpcy5pY2VMZXZlbCA9IDA7XHJcbiAgXHJcbiAgICAvLyBBZGQgYSBwbGF5ZXIgc3ByaXRlIHRoYXQgY2FuIGJlIG1vdmVkIGFyb3VuZC4gUGxhY2UgaGltIGluIHRoZSBtaWRkbGUgb2YgdGhlIHNjcmVlbi5cclxuICAgIHRoaXMuaWNlID0gdGhpcy5hZGQuc3ByaXRlKHdpZHRoIC8gMiwgaGVpZ2h0IC8gMiwgJ2ljZScpO1xyXG4gICAgdGhpcy5pY2Uuc2V0U2NhbGUoMC40KTtcclxuICAgIC8vdGhpcy52ZXJtb3V0aFRvcE9ubHkgPSB0aGlzLmFkZC5zcHJpdGUod2lkdGggLyAyLCBoZWlnaHQgLyAyICsgMzAwLCAndmVybW91dGh0b3Bvbmx5Jyk7XHJcblxyXG4gICAgdGhpcy5pbnB1dC5vbigncG9pbnRlcnVwJywgKCkgPT4ge1xyXG4gICAgICB0aGlzLnRleHQxLnNldFRleHQoYM64OiAke3RoaXMuaW5wdXQuYWN0aXZlUG9pbnRlci5nZXRBbmdsZSgpfWApO1xyXG4gICAgICB0aGlzLnRleHQyLnNldFRleHQoYHg6ICR7dGhpcy5pbnB1dC5hY3RpdmVQb2ludGVyLmdldERpc3RhbmNlWCgpfWApO1xyXG4gICAgICB0aGlzLnRleHQzLnNldFRleHQoYHk6ICR7dGhpcy5pbnB1dC5hY3RpdmVQb2ludGVyLmdldERpc3RhbmNlWSgpfWApO1xyXG4gICAgICB0aGlzLnRleHQ0LnNldFRleHQoYGQ6ICR7dGhpcy5pbnB1dC5hY3RpdmVQb2ludGVyLmdldERpc3RhbmNlKCl9YCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmlucHV0Lm9uKCdwb2ludGVyZG93bicsICgpID0+IHtcclxuICAgICAgaWYgKHRoaXMuaWNlTGV2ZWwgPT0gMCkge1xyXG4gICAgICAgIHRoaXMuaWNlLnNldFRleHR1cmUoJ2ljZScgKyArK3RoaXMuaWNlTGV2ZWwpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuY2xpY2tzICs9IDE7XHJcbiAgICAgIGlmICh0aGlzLmNsaWNrcyAlIDUgPT0gMCkge1xyXG4gICAgICAgIHRoaXMuaWNlLnNldFRleHR1cmUoJ2ljZScgKyArK3RoaXMuaWNlTGV2ZWwpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh0aGlzLmljZUxldmVsID09IDUgJiYgIXRoaXMudHJhbnNpdGlvbmluZykge1xyXG4gICAgICAgIHRoaXMudHJhbnNpdGlvbmluZyA9IHRydWU7XHJcbiAgICAgICAgZG9jdW1lbnQuY29va2llID0gYGljZT0xYDtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgIHRoaXMuc2NlbmUuc3RvcCgpO1xyXG4gICAgICAgICAgdGhpcy5vbkZpbmlzaCh0cnVlKTtcclxuICAgICAgICAgIC8vdGhpcy5zY2VuZS5zdGFydCgnR2FtZScpO1xyXG4gICAgICAgIH0sIDUwMCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMudGV4dDEgPSB0aGlzLmFkZC50ZXh0KDEwLCAxMCwgJycsIHsgY29sb3I6ICcjMDBmZjAwJyB9KTtcclxuICAgIHRoaXMudGV4dDIgPSB0aGlzLmFkZC50ZXh0KDEwLCAyNSwgJycsIHsgY29sb3I6ICcjMDBmZjAwJyB9KTtcclxuICAgIHRoaXMudGV4dDMgPSB0aGlzLmFkZC50ZXh0KDEwLCA0MCwgJycsIHsgY29sb3I6ICcjMDBmZjAwJyB9KTtcclxuICAgIHRoaXMudGV4dDQgPSB0aGlzLmFkZC50ZXh0KDEwLCA1NSwgJycsIHsgY29sb3I6ICcjMDBmZjAwJyB9KTtcclxuICAgIHRoaXMudGV4dDUgPSB0aGlzLmFkZC50ZXh0KDEwLCA3MCwgJycsIHsgY29sb3I6ICcjMDBmZjAwJyB9KTtcclxuICAgIG5ldyBTY2VuZUJ1dHRvbih0aGlzLCB3aWR0aC01MCwgNTAsIFwiWFwiLCAoKSA9PnsgdGhpcy5vbkZpbmlzaChmYWxzZSk7IHRoaXMuc2NlbmUuc3RvcCgpO30pO1xyXG4gIH1cclxuXHJcbiAgLy9wdWJsaWMgdXBkYXRlKCk6IHZvaWQge31cclxufVxyXG4iLCJpbXBvcnQgeyBNYWluTWVudVNjZW5lIH0gZnJvbSAnLi9tYWluLW1lbnUtc2NlbmUnO1xyXG5pbXBvcnQgeyBCb290U2NlbmUgfSBmcm9tICcuL2Jvb3Qtc2NlbmUnO1xyXG5pbXBvcnQgeyBHYW1lU2NlbmUgfSBmcm9tICcuL2dhbWUtc2NlbmUnO1xyXG5pbXBvcnQgeyBWZXJtb3V0aFNjZW5lIH0gZnJvbSAnLi92ZXJtb3V0aC1zY2VuZSc7XHJcbmltcG9ydCB7IFBvdXJTY2VuZSB9IGZyb20gJy4vcG91ci1zY2VuZSc7XHJcbmltcG9ydCB7IEJvdXJib25TY2VuZSB9IGZyb20gJy4vYm91cmJvbi1zY2VuZSc7XHJcbmltcG9ydCB7IEljZVNjZW5lIH0gZnJvbSAnLi9pY2Utc2NlbmUnO1xyXG5pbXBvcnQgeyBPcmFuZ2VTY2VuZSB9IGZyb20gJy4vb3JhbmdlLXNjZW5lJztcclxuaW1wb3J0IHsgU2hha2VTY2VuZSB9IGZyb20gJy4vc2hha2Utc2NlbmUnO1xyXG5pbXBvcnQgeyBNdWRkbGVTY2VuZSB9IGZyb20gJy4vbXVkZGxlLXNjZW5lJztcclxuaW1wb3J0IHsgSnVpY2VyU2NlbmUgfSBmcm9tICcuL2p1aWNlci1zY2VuZSc7XHJcbmltcG9ydCB7IFJlc3VsdHNTY2VuZSB9IGZyb20gJy4vcmVzdWx0cy1zY2VuZSc7XHJcbmltcG9ydCB7IFN1Y2Nlc3NTY2VuZSB9IGZyb20gJy4vc3VjY2Vzcy1zY2VuZSc7XHJcbmltcG9ydCB7IEJpdHRlcnNTY2VuZSB9IGZyb20gJy4vYml0dGVycy1zY2VuZSc7XHJcbmltcG9ydCB7IEV2ZXJ5b25lSW5TY2VuZSB9IGZyb20gJy4vZXZlcnlvbmUtaW4tc2NlbmUnO1xyXG5pbXBvcnQge1Blcm1pc3Npb25zU2NlbmV9IGZyb20gJy4vcGVybWlzc2lvbnMtc2NlbmUnO1xyXG5pbXBvcnQgeyBEaXNjb25uZWN0ZWRTY2VuZSB9IGZyb20gJy4vZGlzY29ubmVjdGVkLXNjZW5lJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFtcclxuICBCb290U2NlbmUsXHJcbiAgTWFpbk1lbnVTY2VuZSxcclxuICBHYW1lU2NlbmUsXHJcbiAgVmVybW91dGhTY2VuZSxcclxuICBQb3VyU2NlbmUsXHJcbiAgQm91cmJvblNjZW5lLFxyXG4gIEljZVNjZW5lLFxyXG4gIE9yYW5nZVNjZW5lLFxyXG4gIFNoYWtlU2NlbmUsXHJcbiAgTXVkZGxlU2NlbmUsXHJcbiAgSnVpY2VyU2NlbmUsXHJcbiAgUmVzdWx0c1NjZW5lLFxyXG4gIFN1Y2Nlc3NTY2VuZSxcclxuICBCaXR0ZXJzU2NlbmUsXHJcbiAgRXZlcnlvbmVJblNjZW5lLFxyXG4gIFBlcm1pc3Npb25zU2NlbmUsXHJcbiAgRGlzY29ubmVjdGVkU2NlbmVcclxuXTtcclxuIiwiaW1wb3J0IHsgSW5wdXQsIEdhbWVPYmplY3RzIH0gZnJvbSAncGhhc2VyJztcclxuaW1wb3J0IHsgZ2V0R2FtZVdpZHRoLCBnZXRHYW1lSGVpZ2h0LCBkcmlua1RvQ29sb3JNYXAgfSBmcm9tICcuLi9oZWxwZXJzJztcclxuaW1wb3J0IHsgU2NlbmVCdXR0b24gfSBmcm9tICcuLi91aS9zY2VuZS1idXR0b24nO1xyXG5cclxuY29uc3Qgc2NlbmVDb25maWc6IFBoYXNlci5UeXBlcy5TY2VuZXMuU2V0dGluZ3NDb25maWcgPSB7XHJcbiAgYWN0aXZlOiBmYWxzZSxcclxuICB2aXNpYmxlOiBmYWxzZSxcclxuICBrZXk6ICdKdWljZXInLFxyXG59O1xyXG5jbGFzcyBHYW1lU2NlbmVBcmd1bWVudHMge1xyXG4gIHB1YmxpYyBCb3R0bGVTcHJpdGVOYW1lOiBzdHJpbmc7XHJcbiAgcHVibGljIG9uRmluaXNoOiBGdW5jdGlvbjtcclxufVxyXG5leHBvcnQgY2xhc3MgSnVpY2VyU2NlbmUgZXh0ZW5kcyBQaGFzZXIuU2NlbmUge1xyXG4gIHB1YmxpYyBzcGVlZCA9IDIwMDtcclxuICBwdWJsaWMgb25GaW5pc2g6IEZ1bmN0aW9uO1xyXG5cclxuICBwcml2YXRlIGp1aWNlclRvcDogUGhhc2VyLkdhbWVPYmplY3RzLlNwcml0ZTtcclxuICBwcml2YXRlIGp1aWNlckJvdHRvbTogUGhhc2VyLkdhbWVPYmplY3RzLlNwcml0ZTtcclxuICBwcml2YXRlIGZydWl0OiBQaGFzZXIuR2FtZU9iamVjdHMuU3ByaXRlO1xyXG4gIHByaXZhdGUgZW1wdHlHbGFzczogUGhhc2VyLkdhbWVPYmplY3RzLlNwcml0ZTtcclxuXHJcbiAgcHJpdmF0ZSBwb3VyQ291bnQgPSAwO1xyXG4gIHByaXZhdGUgdHJhbnNpdGlvbmluZyA9IGZhbHNlO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKHNjZW5lQ29uZmlnKTtcclxuICB9XHJcbiAgcHVibGljIHRleHQxOiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dDtcclxuICBwdWJsaWMgdGV4dDI6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0O1xyXG4gIHB1YmxpYyBmcnVpdFNwcml0ZU5hbWU6IHN0cmluZztcclxuICBwcml2YXRlIGxpcXVpZFJlY3RhbmdsZTogUGhhc2VyLkdhbWVPYmplY3RzLlJlY3RhbmdsZTtcclxuXHJcbiAgcHVibGljIGluaXQoZGF0YTogR2FtZVNjZW5lQXJndW1lbnRzKTogdm9pZCB7XHJcbiAgICBjb25zb2xlLmxvZygnSnVpY2VySW5pdCcpO1xyXG4gICAgdGhpcy5mcnVpdFNwcml0ZU5hbWUgPSBkYXRhLkJvdHRsZVNwcml0ZU5hbWUgKyBcIiAyXCI7XHJcbiAgICB0aGlzLm9uRmluaXNoID0gZGF0YS5vbkZpbmlzaDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjcmVhdGUoKTogdm9pZCB7XHJcbiAgICBjb25zb2xlLmxvZygnSnVpY2VyJyk7XHJcbiAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IHRoaXMuc3lzLmdhbWUuY2FudmFzO1xyXG4gICAgdGhpcy5wb3VyQ291bnQgPSAwO1xyXG4gICAgdGhpcy50cmFuc2l0aW9uaW5nID0gZmFsc2U7XHJcblxyXG4gICAgLy8gQWRkIGEgcGxheWVyIHNwcml0ZSB0aGF0IGNhbiBiZSBtb3ZlZCBhcm91bmQuIFBsYWNlIGhpbSBpbiB0aGUgbWlkZGxlIG9mIHRoZSBzY3JlZW4uXHJcbiAgICB0aGlzLmVtcHR5R2xhc3MgPSB0aGlzLmFkZC5zcHJpdGUod2lkdGggLyAyLCBoZWlnaHQgLyAyLCAnZW1wdHlnbGFzcycpLnNldEFscGhhKDApO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKGBnbGFzcyB4OiAke3dpZHRoIC8gNH1gKTtcclxuICAgIGNvbnNvbGUubG9nKGBnbGFzcyB5OiAke2hlaWdodCAvIDJ9YCk7XHJcbiAgICB0aGlzLmVtcHR5R2xhc3Muc2V0U2NhbGUoMC41KTtcclxuICAgIHRoaXMuZW1wdHlHbGFzcy5zY2FsZVkgPSB0aGlzLmVtcHR5R2xhc3Muc2NhbGVZICogMC41O1xyXG5cclxuICAgIHRoaXMuanVpY2VyVG9wID0gdGhpcy5hZGQuc3ByaXRlKHdpZHRoIC8gMS41LCBoZWlnaHQgLyAyLCAnanVpY2VydG9wJykuc2V0SW50ZXJhY3RpdmUoKTtcclxuICAgIHRoaXMuanVpY2VyVG9wLnNldFNjYWxlKDAuNyk7XHJcbiAgICB0aGlzLmp1aWNlclRvcC5zZXRPcmlnaW4oMC43Njc1LCAwLjc2NzUpO1xyXG5cclxuICAgIHRoaXMuanVpY2VyQm90dG9tID0gdGhpcy5hZGQuc3ByaXRlKHdpZHRoIC8gMS41LCBoZWlnaHQgLyAyLCAnanVpY2VyYm90dG9tJykuc2V0SW50ZXJhY3RpdmUoKTtcclxuICAgIHRoaXMuanVpY2VyQm90dG9tLnNldFNjYWxlKDAuNyk7XHJcbiAgICB0aGlzLmp1aWNlckJvdHRvbS5zZXRPcmlnaW4oMC43Njc1LCAwLjc2NzUpO1xyXG4gICAgdGhpcy5mcnVpdCA9IHRoaXMuYWRkLnNwcml0ZSh3aWR0aCAvIDEuNSwgaGVpZ2h0IC8gMiwgdGhpcy5mcnVpdFNwcml0ZU5hbWUpO1xyXG4gICAgdGhpcy5mcnVpdC5zZXRTY2FsZSgwLjcpO1xyXG4gICAgdGhpcy5mcnVpdC5zZXRPcmlnaW4oMC43Njc1LCAwLjc2NzUpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKHRoaXMuZW1wdHlHbGFzcy54KTtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMuanVpY2VyVG9wLmRpc3BsYXlIZWlnaHQpO1xyXG4gICAgLy90aGlzLmp1aWNlclRvcC5zZXRQb3NpdGlvbih0aGlzLmVtcHR5R2xhc3MueCArIHRoaXMuanVpY2VyVG9wLmRpc3BsYXlIZWlnaHQgLyA0KTtcclxuICAgIHRoaXMuanVpY2VyVG9wLnNldFNjYWxlKDAuNCk7XHJcbiAgICB0aGlzLmZydWl0LnNldFNjYWxlKDAuNCk7XHJcbiAgICAvL3RoaXMuanVpY2VyQm90dG9tLnNldFBvc2l0aW9uKHRoaXMuZW1wdHlHbGFzcy54ICsgdGhpcy5qdWljZXJCb3R0b20uZGlzcGxheUhlaWdodCAvIDQpO1xyXG4gICAgdGhpcy5qdWljZXJCb3R0b20uc2V0U2NhbGUoMC40KTtcclxuICAgIHRoaXMuanVpY2VyVG9wLnNldFBvc2l0aW9uKFxyXG4gICAgICB0aGlzLmVtcHR5R2xhc3MueCArIHRoaXMuanVpY2VyVG9wLmRpc3BsYXlXaWR0aCAvIDMsXHJcbiAgICAgIHRoaXMuZW1wdHlHbGFzcy55ICsgdGhpcy5qdWljZXJUb3AuZGlzcGxheUhlaWdodCAvIDQsXHJcbiAgICApO1xyXG4gICAgdGhpcy5qdWljZXJCb3R0b20uc2V0UG9zaXRpb24oXHJcbiAgICAgIHRoaXMuZW1wdHlHbGFzcy54ICsgdGhpcy5qdWljZXJCb3R0b20uZGlzcGxheVdpZHRoIC8gMyxcclxuICAgICAgdGhpcy5lbXB0eUdsYXNzLnkgKyB0aGlzLmp1aWNlclRvcC5kaXNwbGF5SGVpZ2h0IC8gNCxcclxuICAgICk7XHJcbiAgICB0aGlzLmZydWl0LnNldFBvc2l0aW9uKFxyXG4gICAgICB0aGlzLmVtcHR5R2xhc3MueCArIHRoaXMuanVpY2VyQm90dG9tLmRpc3BsYXlXaWR0aCAvIDMsXHJcbiAgICAgIHRoaXMuZW1wdHlHbGFzcy55ICsgdGhpcy5qdWljZXJUb3AuZGlzcGxheUhlaWdodCAvIDQsXHJcbiAgICApO1xyXG5cclxuICAgIC8vdGhpcy5hZGQucmVjdGFuZ2xlKHRoaXMuanVpY2VyQm90dG9tLngsIHRoaXMuanVpY2VyQm90dG9tLnksIHRoaXMuanVpY2VyQm90dG9tLmRpc3BsYXlXaWR0aCwgdGhpcy5qdWljZXJCb3R0b20uZGlzcGxheUhlaWdodCwgMHhGRjAwMDApO1xyXG4gICAgLy90aGlzLmFkZC5yZWN0YW5nbGUodGhpcy5qdWljZXJUb3AueCwgdGhpcy5qdWljZXJUb3AueSwgdGhpcy5qdWljZXJUb3AuZGlzcGxheVdpZHRoLCB0aGlzLmp1aWNlclRvcC5kaXNwbGF5SGVpZ2h0LCAweDAwMDBGRik7XHJcbiAgICB0aGlzLmp1aWNlclRvcC5vbigncG9pbnRlcm92ZXInLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMuanVpY2VyVG9wLnNldFRpbnQoMHhjY2NjY2MpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5qdWljZXJUb3Aub24oJ3BvaW50ZXJvdXQnLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMuanVpY2VyVG9wLmNsZWFyVGludCgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5pbnB1dC5zZXREcmFnZ2FibGUodGhpcy5qdWljZXJUb3ApO1xyXG5cclxuICAgIHRoaXMuaW5wdXQub24oJ2RyYWdzdGFydCcsIChwb2ludGVyLCBnYW1lT2JqZWN0KSA9PiB7XHJcbiAgICAgIGdhbWVPYmplY3Quc2V0VGludCgweDk5OTk5OSk7XHJcbiAgICB9KTtcclxuICAgIHRoaXMubGlxdWlkUmVjdGFuZ2xlID0gdGhpcy5hZGRcclxuICAgICAgLnJlY3RhbmdsZShcclxuICAgICAgICB0aGlzLmVtcHR5R2xhc3MueCxcclxuICAgICAgICB0aGlzLmVtcHR5R2xhc3MueSArIHRoaXMuZW1wdHlHbGFzcy5kaXNwbGF5SGVpZ2h0IC8gMixcclxuICAgICAgICB0aGlzLmVtcHR5R2xhc3MuZGlzcGxheVdpZHRoLFxyXG4gICAgICAgICsrdGhpcy5wb3VyQ291bnQsXHJcbiAgICAgICAgZHJpbmtUb0NvbG9yTWFwLmdldCh0aGlzLmZydWl0U3ByaXRlTmFtZSksXHJcbiAgICAgIClcclxuICAgICAgLnNldEJsZW5kTW9kZShQaGFzZXIuQmxlbmRNb2Rlcy5NVUxUSVBMWSk7XHJcblxyXG4gICAgdGhpcy5pbnB1dC5vbignZHJhZycsIChwb2ludGVyLCBnYW1lT2JqZWN0LCBkcmFnWCwgZHJhZ1kpID0+IHtcclxuICAgICAgLy8gZnJvbSBoZXJlOiBuZWVkIHRvIDEuIGNhbGN1bGF0ZSBhbmdsZSBiZXR3ZWVuIGJhc2Ugb2Ygb2JqZWN0IGFuZCBjdXJzb3JcclxuICAgICAgLy8gMi4gcm90YXRlIHVudGlsIHRvcCBvZiBib3R0bGUgaXMgcG9pbnRpbmcgdG8gY3Vyc29yXHJcbiAgICAgIGNvbnN0IHkxID0gZ2FtZU9iamVjdC55O1xyXG4gICAgICBjb25zdCB5MiA9IHRoaXMuaW5wdXQuYWN0aXZlUG9pbnRlci55O1xyXG4gICAgICBjb25zdCB4MSA9IGdhbWVPYmplY3QueDtcclxuICAgICAgY29uc3QgeDIgPSB0aGlzLmlucHV0LmFjdGl2ZVBvaW50ZXIueDtcclxuXHJcbiAgICAgIGNvbnN0IHNsb3BlUmFkcyA9IE1hdGguYXRhbjIoeTIgLSB5MSwgeDIgLSB4MSk7XHJcbiAgICAgIGNvbnN0IGFkanVzdGVkID0gc2xvcGVSYWRzICsgMS41NzA3OTYzMztcclxuXHJcbiAgICAgIHRoaXMudGV4dDEuc2V0VGV4dChgJHthZGp1c3RlZH1gKTtcclxuICAgICAgaWYgKGFkanVzdGVkIDw9IDAuMDI1KSB7XHJcbiAgICAgICAgZ2FtZU9iamVjdC5yb3RhdGlvbiA9IHNsb3BlUmFkcyArIDEuNTcwNzk2MzM7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuaW5wdXQub24oJ2RyYWdlbmQnLCAocG9pbnRlciwgZ2FtZU9iamVjdCkgPT4ge1xyXG4gICAgICBnYW1lT2JqZWN0LmNsZWFyVGludCgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gVGhpcyBpcyBhIG5pY2UgaGVscGVyIFBoYXNlciBwcm92aWRlcyB0byBjcmVhdGUgbGlzdGVuZXJzIGZvciBzb21lIG9mIHRoZSBtb3N0IGNvbW1vbiBrZXlzLlxyXG5cclxuICAgIHRoaXMudGV4dDEgPSB0aGlzLmFkZC50ZXh0KDEwLCAxMCwgJycsIHsgY29sb3I6ICcjMDBmZjAwJyB9KTtcclxuICAgIHRoaXMudGV4dDIgPSB0aGlzLmFkZC50ZXh0KDEwMCwgMTAsICcnLCB7IGNvbG9yOiAnIzAwZmYwMCcgfSk7XHJcblxyXG4gICAgdGhpcy5qdWljZXJUb3Auc2V0RGVwdGgoMSk7XHJcbiAgICBuZXcgU2NlbmVCdXR0b24odGhpcywgd2lkdGgtNTAsIDUwLCBcIlhcIiwgKCkgPT57IHRoaXMub25GaW5pc2goZmFsc2UpOyB0aGlzLnNjZW5lLnN0b3AoKTt9KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyB1cGRhdGUoKTogdm9pZCB7XHJcbiAgICAvLyBFdmVyeSBmcmFtZSwgd2UgY3JlYXRlIGEgbmV3IHZlbG9jaXR5IGZvciB0aGUgc3ByaXRlIGJhc2VkIG9uIHdoYXQga2V5cyB0aGUgcGxheWVyIGlzIGhvbGRpbmcgZG93bi5cclxuICAgIHRoaXMudGV4dDEuc2V0VGV4dChgJHt0aGlzLmp1aWNlclRvcC5yb3RhdGlvbn1gKTtcclxuXHJcbiAgICBpZiAodGhpcy5qdWljZXJUb3Aucm90YXRpb24gPCAtMS40OSkge1xyXG4gICAgICBpZiAoIXRoaXMudHJhbnNpdGlvbmluZykge1xyXG4gICAgICAgIHRoaXMudHJhbnNpdGlvbmluZyA9IHRydWU7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLnNjZW5lLnN0b3AoKTtcclxuICAgICAgICAgIHRoaXMub25GaW5pc2godHJ1ZSk7XHJcbiAgICAgICAgfSwgNTAwKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgc2lnbmFsUiA9IHJlcXVpcmUoJ0BtaWNyb3NvZnQvc2lnbmFscicpO1xyXG5pbXBvcnQgeyBNZW51QnV0dG9uIH0gZnJvbSAnLi4vdWkvbWVudS1idXR0b24nO1xyXG5pbXBvcnQgKiBhcyBxdWVyeXN0cmluZyBmcm9tIFwicXVlcnktc3RyaW5nXCI7XHJcblxyXG5jb25zdCBzY2VuZUNvbmZpZzogUGhhc2VyLlR5cGVzLlNjZW5lcy5TZXR0aW5nc0NvbmZpZyA9IHtcclxuICBhY3RpdmU6IGZhbHNlLFxyXG4gIHZpc2libGU6IGZhbHNlLFxyXG4gIGtleTogJ01haW5NZW51JyxcclxufTtcclxuY2xhc3MgR2FtZVNjZW5lQXJndW1lbnRzIHtcclxuICBwdWJsaWMgaHViQ29ubmVjdGlvbjogc2lnbmFsUi5IdWJDb25uZWN0aW9uO1xyXG59XHJcbi8qKlxyXG4gKiBUaGUgaW5pdGlhbCBzY2VuZSB0aGF0IHN0YXJ0cywgc2hvd3MgdGhlIHNwbGFzaCBzY3JlZW5zLCBhbmQgbG9hZHMgdGhlIG5lY2Vzc2FyeSBhc3NldHMuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgTWFpbk1lbnVTY2VuZSBleHRlbmRzIFBoYXNlci5TY2VuZSB7XHJcbiAgcHJpdmF0ZSBodWJDb25uZWN0aW9uOiBzaWduYWxSLkh1YkNvbm5lY3Rpb247XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcihzY2VuZUNvbmZpZyk7XHJcbiAgfVxyXG4gIHB1YmxpYyBpbml0KGRhdGE6IEdhbWVTY2VuZUFyZ3VtZW50cyk6IHZvaWQge1xyXG4gICAgdGhpcy5odWJDb25uZWN0aW9uID0gZGF0YS5odWJDb25uZWN0aW9uO1xyXG4gIH1cclxuICBwdWJsaWMgY3JlYXRlKCk6IHZvaWQge1xyXG4gICAgY29uc29sZS5sb2coJ01haW4gTWVudScpO1xyXG4gICAgY29uc29sZS5sb2codGhpcy5odWJDb25uZWN0aW9uKTtcclxuICAgIHRoaXMuYWRkLnRleHQoMTAwLCAxNTAsIFwiUGxlYXNlIFdhaXRcIik7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgdGhpcy5odWJDb25uZWN0aW9uLmludm9rZSgnUmVnaXN0ZXInLCBxdWVyeXN0cmluZy5wYXJzZSh3aW5kb3cubG9jYXRpb24uc2VhcmNoKVtcInJvb21cIl0/PyBcInNhbXBsZVwiKS50aGVuKGUgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICAgIG5ldyBNZW51QnV0dG9uKHRoaXMsIDEwMCwgMTUwLCAnUmVhZHkgVXAnLCAoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLmh1YkNvbm5lY3Rpb24uaW52b2tlKCdSZWFkeVVwJyk7XHJcbiAgICAgICAgICB0aGlzLnNjZW5lLnN0YXJ0KCdFdmVyeW9uZUluJywge2h1YkNvbm5lY3Rpb246IHRoaXMuaHViQ29ubmVjdGlvbn0pO1xyXG4gICAgXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSwgKDUwMDApKTtcclxuICAgIFxyXG4gICAgdGhpcy5odWJDb25uZWN0aW9uLm9uKCdBc3NpZ24nLCAoY3VwOiBudW1iZXIsIGFjdGlvbnM6IG51bWJlcltdLCBwbGF5ZXJjb3VudDogbnVtYmVyLCByb3VuZDogbnVtYmVyKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGBjdXA6ICR7Y3VwfSBhY3Rpb25zOiAke2FjdGlvbnN9IHBsYXllcmNvdW50OiAke3BsYXllcmNvdW50fSByb3VuZCBudW1iZXI6ICR7cm91bmR9YCk7XHJcbiAgICAgIHZhciBpdGVtID0ge1xyXG4gICAgICAgIHBsYXllcmNvdW50OiBwbGF5ZXJjb3VudCxcclxuICAgICAgICByb3VuZE51bWJlcjogcm91bmQsXHJcbiAgICAgICAgY3VwTnVtYmVyOiBjdXAsXHJcbiAgICAgICAgYWN0aW9uczogYWN0aW9uc1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuaHViQ29ubmVjdGlvbi5vZmYoJ0Fzc2lnbicpO1xyXG4gICAgICB0aGlzLnNjZW5lLnN0YXJ0KCdHYW1lJywge2h1YkNvbm5lY3Rpb246IHRoaXMuaHViQ29ubmVjdGlvbiwgc2V0dXA6IGl0ZW19KTtcclxuICAgIH0pO1xyXG5cclxuICAgIHZhciByb29tY29kZSA9IHF1ZXJ5c3RyaW5nLnBhcnNlKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpO1xyXG4gICAgdmFyIHJvb20gPSByb29tY29kZVtcInJvb21cIl07XHJcbiAgICB0aGlzLmFkZFxyXG4gICAgICAudGV4dCgxMDAsIDUwLCBgVGVhbSAke3Jvb219YCwge1xyXG4gICAgICAgIGNvbG9yOiAnI0ZGRkZGRicsXHJcbiAgICAgIH0pXHJcbiAgICAgIC5zZXRGb250U2l6ZSgyNCk7XHJcblxyXG5cclxuLypcclxuICAgIG5ldyBNZW51QnV0dG9uKHRoaXMsIDEwMCwgMjUwLCAnSU9TIENMSUNLIEhFUkUgRklSU1QnLCAoKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdzZXR0aW5ncyBidXR0b24gY2xpY2tlZCcpO1xyXG4gICAgICBEZXZpY2VNb3Rpb25FdmVudC5yZXF1ZXN0UGVybWlzc2lvbigpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgaWYgKHJlc3BvbnNlID09ICdncmFudGVkJykge1xyXG4gICAgICAgICAgLy8gQWRkIGEgbGlzdGVuZXIgdG8gZ2V0IHNtYXJ0cGhvbmUgb3JpZW50YXRpb25cclxuICAgICAgICAgIC8vIGluIHRoZSBhbHBoYS1iZXRhLWdhbW1hIGF4ZXMgKHVuaXRzIGluIGRlZ3JlZXMpXHJcbiAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignZGV2aWNlb3JpZW50YXRpb24nLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgbGV0IHVwZGF0ZVJhdGUgPSAxIC8gNjA7XHJcbiAgICAgICAgICAgIC8vIEV4cG9zZSBlYWNoIG9yaWVudGF0aW9uIGFuZ2xlIGluIGEgbW9yZSByZWFkYWJsZSB3YXlcclxuICAgICAgICAgICAgbGV0IHJvdGF0aW9uX2RlZ3JlZXMgPSBldmVudC5hbHBoYTtcclxuICAgICAgICAgICAgbGV0IGZyb250VG9CYWNrX2RlZ3JlZXMgPSBldmVudC5iZXRhO1xyXG4gICAgICAgICAgICBsZXQgbGVmdFRvUmlnaHRfZGVncmVlcyA9IGV2ZW50LmdhbW1hO1xyXG5cclxuICAgICAgICAgICAgbmV3IE1lbnVCdXR0b24odGhpcywgMTAwLCAyNTAsICdjbGlja2VkJywgKCkgPT4gY29uc29sZS5sb2coJ2hlbHAgYnV0dG9uIGNsaWNrZWQnKSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7Ki9cclxuXHJcbiAgICAvL25ldyBNZW51QnV0dG9uKHRoaXMsIDEwMCwgMzUwLCAnSGVscCcsICgpID0+IGNvbnNvbGUubG9nKCdoZWxwIGJ1dHRvbiBjbGlja2VkJykpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBJbnB1dCwgR2FtZU9iamVjdHMsIEJsZW5kTW9kZXMgfSBmcm9tICdwaGFzZXInO1xyXG5pbXBvcnQgeyBnZXRHYW1lV2lkdGgsIGdldEdhbWVIZWlnaHQsIGRyaW5rVG9Db2xvck1hcCB9IGZyb20gJy4uL2hlbHBlcnMnO1xyXG5pbXBvcnQgeyBTY2VuZUJ1dHRvbiB9IGZyb20gJy4uL3VpL3NjZW5lLWJ1dHRvbic7XHJcblxyXG5jb25zdCBzY2VuZUNvbmZpZzogUGhhc2VyLlR5cGVzLlNjZW5lcy5TZXR0aW5nc0NvbmZpZyA9IHtcclxuICBhY3RpdmU6IGZhbHNlLFxyXG4gIHZpc2libGU6IGZhbHNlLFxyXG4gIGtleTogJ011ZGRsZSBEcmluaycsXHJcbn07XHJcbmNsYXNzIEdhbWVTY2VuZUFyZ3VtZW50cyB7XHJcbiAgcHVibGljIG9uRmluaXNoOiBGdW5jdGlvbjtcclxufVxyXG5leHBvcnQgY2xhc3MgTXVkZGxlU2NlbmUgZXh0ZW5kcyBQaGFzZXIuU2NlbmUge1xyXG4gIHB1YmxpYyBzcGVlZCA9IDIwMDtcclxuICBwdWJsaWMgb25GaW5pc2g6IEZ1bmN0aW9uO1xyXG4gIHByaXZhdGUgZW1wdHlHbGFzczogUGhhc2VyLkdhbWVPYmplY3RzLlNwcml0ZTtcclxuXHJcbiAgcHJpdmF0ZSBjdXJzb3JLZXlzOiBQaGFzZXIuVHlwZXMuSW5wdXQuS2V5Ym9hcmQuQ3Vyc29yS2V5cztcclxuICBwcml2YXRlIG11ZGRsZXI6IFBoYXNlci5HYW1lT2JqZWN0cy5TcHJpdGU7XHJcbiAgcHJpdmF0ZSBtdWRkbGVDb250YWluZXJSZWN0OiBQaGFzZXIuR2FtZU9iamVjdHMuUmVjdGFuZ2xlO1xyXG4gIHByaXZhdGUgbW92aW5nVGhyZXNob2xkUmVjdDogUGhhc2VyLkdhbWVPYmplY3RzLlJlY3RhbmdsZTtcclxuICBwcml2YXRlIGZpbGxSZWN0OiBQaGFzZXIuR2FtZU9iamVjdHMuUmVjdGFuZ2xlO1xyXG5cclxuICBwcml2YXRlIGNvbnRlbnRzOiBzdHJpbmdbXSA9IFtdO1xyXG4gIHByaXZhdGUgZ2xhc3NGaWxsZXJzOiBQaGFzZXIuR2FtZU9iamVjdHMuU3ByaXRlW10gPSBbXTtcclxuXHJcbiAgcHJpdmF0ZSBpc1BvdXJpbmcgPSAwO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKHNjZW5lQ29uZmlnKTtcclxuICB9XHJcbiAgcHVibGljIHRleHQxOiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dDtcclxuICBwdWJsaWMgdGV4dDI6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0O1xyXG4gIHB1YmxpYyB0ZXh0MzogUGhhc2VyLkdhbWVPYmplY3RzLlRleHQ7XHJcbiAgcHVibGljIHRleHQ0OiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dDtcclxuICBwdWJsaWMgdGV4dDU6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0O1xyXG5cclxuICBwdWJsaWMgZXJhc2VDb3VudCA9IDA7XHJcbiAgcHVibGljIGljZUxldmVsID0gMDtcclxuICBwcml2YXRlIHRyYW5zaXRpb25pbmcgPSBmYWxzZTtcclxuICBwcml2YXRlIHN0YXJ0UG9zaXRpb24gPSB0cnVlO1xyXG5cclxuICBwdWJsaWMgaW5pdChkYXRhOkdhbWVTY2VuZUFyZ3VtZW50cyl7XHJcbiAgICB0aGlzLm9uRmluaXNoID0gZGF0YS5vbkZpbmlzaDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjcmVhdGUoKTogdm9pZCB7XHJcbiAgICBjb25zb2xlLmxvZygnTXVkZGxlJyk7XHJcbiAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IHRoaXMuc3lzLmdhbWUuY2FudmFzO1xyXG4gICAgdGhpcy5lbXB0eUdsYXNzID0gdGhpcy5hZGQuc3ByaXRlKHdpZHRoIC8gMiwgaGVpZ2h0IC8gMiwgJ2VtcHR5Z2xhc3MnKTtcclxuXHJcbiAgICB0aGlzLnRyYW5zaXRpb25pbmcgPSBmYWxzZTtcclxuICAgIHRoaXMuZXJhc2VDb3VudCA9IDA7XHJcbiAgICB0aGlzLmljZUxldmVsID0gMDtcclxuICAgIHRoaXMuc3RhcnRQb3NpdGlvbiA9IHRydWU7XHJcbiAgICAvLyBBZGQgYSBwbGF5ZXIgc3ByaXRlIHRoYXQgY2FuIGJlIG1vdmVkIGFyb3VuZC4gUGxhY2UgaGltIGluIHRoZSBtaWRkbGUgb2YgdGhlIHNjcmVlbi5cclxuXHJcbiAgICB0aGlzLm11ZGRsZXIgPSB0aGlzLmFkZFxyXG4gICAgICAuc3ByaXRlKHdpZHRoIC8gMiwgaGVpZ2h0IC8gMiAtIHRoaXMuZW1wdHlHbGFzcy5kaXNwbGF5SGVpZ2h0IC8gMywgJ211ZGRsZXInKVxyXG4gICAgICAuc2V0SW50ZXJhY3RpdmUoKVxyXG4gICAgICAuc2V0RGVwdGgoMSlcclxuICAgICAgLnNldFNjYWxlKDAuNSlcclxuICAgICAgLnNldEFuZ2xlKDE4MCk7XHJcbiAgICB0aGlzLm11ZGRsZUNvbnRhaW5lclJlY3QgPSB0aGlzLmFkZFxyXG4gICAgICAucmVjdGFuZ2xlKFxyXG4gICAgICAgIHRoaXMuZW1wdHlHbGFzcy54LFxyXG4gICAgICAgIHRoaXMuZW1wdHlHbGFzcy55LFxyXG4gICAgICAgIHRoaXMuZW1wdHlHbGFzcy5kaXNwbGF5V2lkdGgsXHJcbiAgICAgICAgdGhpcy5lbXB0eUdsYXNzLmRpc3BsYXlIZWlnaHQsXHJcbiAgICAgICAgMHgwMGZmMDAsXHJcbiAgICAgIClcclxuICAgICAgLnNldFNjYWxlKDAuNylcclxuICAgICAgLnNldERlcHRoKDIpXHJcbiAgICAgIC5zZXRBbHBoYSgwLjUpO1xyXG4gICAgdGhpcy5tb3ZpbmdUaHJlc2hvbGRSZWN0ID0gdGhpcy5hZGRcclxuICAgICAgLnJlY3RhbmdsZShcclxuICAgICAgICB0aGlzLmVtcHR5R2xhc3MueCxcclxuICAgICAgICB0aGlzLmVtcHR5R2xhc3MueSArIGhlaWdodCAvIDE1LFxyXG4gICAgICAgIHRoaXMuZW1wdHlHbGFzcy5kaXNwbGF5V2lkdGgsXHJcbiAgICAgICAgaGVpZ2h0IC8gNDAsXHJcbiAgICAgICAgMHgwMDAwZmYsXHJcbiAgICAgIClcclxuICAgICAgLnNldERlcHRoKDIpXHJcbiAgICAgIC5zZXRBbHBoYSgwLjUpO1xyXG5cclxuICAgIHRoaXMuZmlsbFJlY3QgPSB0aGlzLmFkZFxyXG4gICAgICAucmVjdGFuZ2xlKHRoaXMuZW1wdHlHbGFzcy54LCB0aGlzLmVtcHR5R2xhc3MuZ2V0Qm90dG9tTGVmdCgpLnksIHRoaXMuZW1wdHlHbGFzcy5kaXNwbGF5V2lkdGgsIDEsIDB4ZmYwMDAwKVxyXG4gICAgICAuc2V0RGVwdGgoMilcclxuICAgICAgLnNldEFscGhhKDAuNSlcclxuICAgICAgLnNldEJsZW5kTW9kZShQaGFzZXIuQmxlbmRNb2Rlcy5NVUxUSVBMWSk7XHJcblxyXG4gICAgY29uc3QgY292ZXIgPSB0aGlzLm1ha2UuaW1hZ2Uoe1xyXG4gICAgICBrZXk6ICdvcmFuZ2UnLFxyXG4gICAgICBhZGQ6IGZhbHNlLFxyXG4gICAgfSk7XHJcbiAgICBjb3Zlci5zZXRTY2FsZSgwLjcpO1xyXG4gICAgY29uc29sZS5sb2coYGNvdmVyOiAke2NvdmVyLnh9ICR7Y292ZXIueX1gKTtcclxuICAgIC8vY292ZXIuc2V0UG9zaXRpb24odGhpcy5vcmFuZ2UueCwgdGhpcy5vcmFuZ2UueSk7XHJcbiAgICBjb3Zlci5zZXREZXB0aCgxKTtcclxuICAgIC8vY292ZXIuc2V0T3JpZ2luKDAsIDApO1xyXG4gICAgLy90aGlzLnJ0LnNldE9yaWdpbigwLjUsIDAuNSk7XHJcblxyXG4gICAgdGhpcy5pbnB1dC5vbignZHJhZ3N0YXJ0JywgKHBvaW50ZXIsIGdhbWVPYmplY3QpID0+IHtcclxuICAgICAgZ2FtZU9iamVjdC5zZXRUaW50KDB4OTk5OTk5KTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuaW5wdXQub24oJ2RyYWdlbmQnLCAocG9pbnRlciwgZ2FtZU9iamVjdCkgPT4ge1xyXG4gICAgICBnYW1lT2JqZWN0LmNsZWFyVGludCgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5pbnB1dC5zZXREcmFnZ2FibGUodGhpcy5tdWRkbGVyKTtcclxuXHJcbiAgICB0aGlzLmlucHV0Lm9uKCdwb2ludGVydXAnLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMudGV4dDEuc2V0VGV4dChgzrg6ICR7dGhpcy5pbnB1dC5hY3RpdmVQb2ludGVyLmdldEFuZ2xlKCl9YCk7XHJcbiAgICAgIHRoaXMudGV4dDIuc2V0VGV4dChgeDogJHt0aGlzLmlucHV0LmFjdGl2ZVBvaW50ZXIuZ2V0RGlzdGFuY2VYKCl9YCk7XHJcbiAgICAgIHRoaXMudGV4dDMuc2V0VGV4dChgeTogJHt0aGlzLmlucHV0LmFjdGl2ZVBvaW50ZXIuZ2V0RGlzdGFuY2VZKCl9YCk7XHJcbiAgICAgIHRoaXMudGV4dDQuc2V0VGV4dChgZDogJHt0aGlzLmlucHV0LmFjdGl2ZVBvaW50ZXIuZ2V0RGlzdGFuY2UoKX1gKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuaW5wdXQub24oJ3BvaW50ZXJkb3duJywgKCkgPT4ge30pO1xyXG5cclxuICAgIHRoaXMuaW5wdXQub24oJ2RyYWcnLCAocG9pbnRlciwgZ2FtZU9iamVjdCwgZHJhZ1gsIGRyYWdZKSA9PiB7XHJcbiAgICAgIGNvbnN0IHN0eCA9IGdhbWVPYmplY3QueDtcclxuICAgICAgY29uc3Qgc3R5ID0gZ2FtZU9iamVjdC55O1xyXG4gICAgICBnYW1lT2JqZWN0LnkgPSBkcmFnWTtcclxuICAgICAgZ2FtZU9iamVjdC54ID0gZHJhZ1g7XHJcblxyXG4gICAgICAvLyBrZWVwaW5nIHRoZSBtdWRkbGVyIGluIHRoZSBnbGFzc1xyXG4gICAgICBjb25zdCBibEMgPSB0aGlzLm11ZGRsZUNvbnRhaW5lclJlY3QuZ2V0Qm90dG9tTGVmdCgpO1xyXG4gICAgICBjb25zdCBickMgPSB0aGlzLm11ZGRsZUNvbnRhaW5lclJlY3QuZ2V0Qm90dG9tUmlnaHQoKTtcclxuICAgICAgY29uc3QgdHJDID0gdGhpcy5tdWRkbGVDb250YWluZXJSZWN0LmdldFRvcFJpZ2h0KCk7XHJcbiAgICAgIGNvbnN0IGJsTSA9IHRoaXMubXVkZGxlci5nZXRUb3BSaWdodCgpO1xyXG4gICAgICBjb25zdCBick0gPSB0aGlzLm11ZGRsZXIuZ2V0VG9wTGVmdCgpO1xyXG4gICAgICBjb25zb2xlLmxvZyhibE0ueCk7XHJcbiAgICAgIGNvbnNvbGUubG9nKGJsQy54KTtcclxuICAgICAgaWYgKGJsTS54IDwgYmxDLngpIHtcclxuICAgICAgICBnYW1lT2JqZWN0LnkgPSBzdHk7XHJcbiAgICAgICAgZ2FtZU9iamVjdC54ID0gc3R4O1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChick0ueCA+IGJyQy54KSB7XHJcbiAgICAgICAgZ2FtZU9iamVjdC55ID0gc3R5O1xyXG4gICAgICAgIGdhbWVPYmplY3QueCA9IHN0eDtcclxuICAgICAgfVxyXG4gICAgICBpZiAoYnJNLnkgPiBickMueSkge1xyXG4gICAgICAgIGdhbWVPYmplY3QueSA9IHN0eTtcclxuICAgICAgICBnYW1lT2JqZWN0LnggPSBzdHg7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGJsTS55IDwgdHJDLnkpIHtcclxuICAgICAgICBnYW1lT2JqZWN0LnkgPSBzdHk7XHJcbiAgICAgICAgZ2FtZU9iamVjdC54ID0gc3R4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBjaGVja2luZyBpZiBpdCBwcm9wZXJseSBtb3ZlcyB1cCBhbmQgZG93blxyXG4gICAgICBpZiAoYmxNLnkgPiB0aGlzLm1vdmluZ1RocmVzaG9sZFJlY3QuZ2V0Qm90dG9tTGVmdCgpLnkgJiYgIXRoaXMuc3RhcnRQb3NpdGlvbikge1xyXG4gICAgICAgIHRoaXMuc3RhcnRQb3NpdGlvbiA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5pY2VMZXZlbCArPSAxO1xyXG4gICAgICAgIHRoaXMudGV4dDEuc2V0VGV4dChgJHt0aGlzLmljZUxldmVsfWApO1xyXG4gICAgICAgIHRoaXMuZmlsbFJlY3QuZGlzcGxheUhlaWdodCArPSAxNTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoYmxNLnkgPCB0aGlzLm1vdmluZ1RocmVzaG9sZFJlY3QuZ2V0VG9wTGVmdCgpLnkgJiYgdGhpcy5zdGFydFBvc2l0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5zdGFydFBvc2l0aW9uID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy50ZXh0MS5zZXRUZXh0KGAke3RoaXMuaWNlTGV2ZWx9YCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIHRyYW5zaXRpb25cclxuICAgICAgaWYgKHRoaXMuaWNlTGV2ZWwgPiA0ICYmIHRoaXMudHJhbnNpdGlvbmluZyA9PSBmYWxzZSkge1xyXG4gICAgICAgIHRoaXMudHJhbnNpdGlvbmluZyA9IHRydWU7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLnNjZW5lLnN0b3AoKTtcclxuICAgICAgICAgIHRoaXMub25GaW5pc2godHJ1ZSk7XHJcbiAgICAgICAgfSwgNTAwKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy50ZXh0MSA9IHRoaXMuYWRkLnRleHQoMTAsIDEwLCAnJywgeyBjb2xvcjogJyMwMGZmMDAnIH0pO1xyXG4gICAgdGhpcy50ZXh0MiA9IHRoaXMuYWRkLnRleHQoMTAsIDI1LCAnJywgeyBjb2xvcjogJyMwMGZmMDAnIH0pO1xyXG4gICAgdGhpcy50ZXh0MyA9IHRoaXMuYWRkLnRleHQoMTAsIDQwLCAnJywgeyBjb2xvcjogJyMwMGZmMDAnIH0pO1xyXG4gICAgdGhpcy50ZXh0NCA9IHRoaXMuYWRkLnRleHQoMTAsIDU1LCAnJywgeyBjb2xvcjogJyMwMGZmMDAnIH0pO1xyXG4gICAgdGhpcy50ZXh0NSA9IHRoaXMuYWRkLnRleHQoMTAsIDcwLCAnJywgeyBjb2xvcjogJyMwMGZmMDAnIH0pO1xyXG4gICAgdGhpcy50ZXh0MS5zZXRUZXh0KGAke3RoaXMuaWNlTGV2ZWx9YCk7XHJcblxyXG4gICAgbmV3IFNjZW5lQnV0dG9uKHRoaXMsIHdpZHRoLTUwLCA1MCwgXCJYXCIsICgpID0+eyB0aGlzLm9uRmluaXNoKGZhbHNlKTsgdGhpcy5zY2VuZS5zdG9wKCk7fSkuc2V0RGVwdGgoMTAwKS5sYWJlbC5zZXREZXB0aCgxMDEpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHVwZGF0ZSgpOiB2b2lkIHt9XHJcbn1cclxuIiwiaW1wb3J0IHsgSW5wdXQsIEdhbWVPYmplY3RzLCBCbGVuZE1vZGVzIH0gZnJvbSAncGhhc2VyJztcclxuaW1wb3J0IHsgZ2V0R2FtZVdpZHRoLCBnZXRHYW1lSGVpZ2h0LCBkcmlua1RvQ29sb3JNYXAgfSBmcm9tICcuLi9oZWxwZXJzJztcclxuaW1wb3J0IHsgU2NlbmVCdXR0b24gfSBmcm9tICcuLi91aS9zY2VuZS1idXR0b24nO1xyXG5cclxuY29uc3Qgc2NlbmVDb25maWc6IFBoYXNlci5UeXBlcy5TY2VuZXMuU2V0dGluZ3NDb25maWcgPSB7XHJcbiAgYWN0aXZlOiBmYWxzZSxcclxuICB2aXNpYmxlOiBmYWxzZSxcclxuICBrZXk6ICdPcmFuZ2UgUGVlbCcsXHJcbn07XHJcblxyXG5jbGFzcyBHYW1lU2NlbmVBcmd1bWVudHMge1xyXG4gIHB1YmxpYyBvbkZpbmlzaDogRnVuY3Rpb247XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBPcmFuZ2VTY2VuZSBleHRlbmRzIFBoYXNlci5TY2VuZSB7XHJcbiAgcHVibGljIHNwZWVkID0gMjAwO1xyXG4gIHB1YmxpYyBvbkZpbmlzaDogRnVuY3Rpb247XHJcblxyXG4gIHByaXZhdGUgY3Vyc29yS2V5czogUGhhc2VyLlR5cGVzLklucHV0LktleWJvYXJkLkN1cnNvcktleXM7XHJcbiAgcHJpdmF0ZSBvcmFuZ2U6IFBoYXNlci5HYW1lT2JqZWN0cy5TcHJpdGU7XHJcbiAgcHJpdmF0ZSBvcmFuZ2VQZWVsZWQ6IFBoYXNlci5HYW1lT2JqZWN0cy5TcHJpdGU7XHJcbiAgcHJpdmF0ZSBjYW5lbGxlOiBQaGFzZXIuR2FtZU9iamVjdHMuU3ByaXRlO1xyXG4gIHByaXZhdGUgYmxhZGVSZWN0OiBQaGFzZXIuR2FtZU9iamVjdHMuUmVjdGFuZ2xlO1xyXG5cclxuICBwcml2YXRlIGNvbnRlbnRzOiBzdHJpbmdbXSA9IFtdO1xyXG4gIHByaXZhdGUgZ2xhc3NGaWxsZXJzOiBQaGFzZXIuR2FtZU9iamVjdHMuU3ByaXRlW10gPSBbXTtcclxuXHJcbiAgcHJpdmF0ZSBpc1BvdXJpbmcgPSAwO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKHNjZW5lQ29uZmlnKTtcclxuICB9XHJcbiAgcHVibGljIHRleHQxOiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dDtcclxuICBwdWJsaWMgdGV4dDI6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0O1xyXG4gIHB1YmxpYyB0ZXh0MzogUGhhc2VyLkdhbWVPYmplY3RzLlRleHQ7XHJcbiAgcHVibGljIHRleHQ0OiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dDtcclxuICBwdWJsaWMgdGV4dDU6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0O1xyXG4gIHB1YmxpYyBydDogUGhhc2VyLkdhbWVPYmplY3RzLlJlbmRlclRleHR1cmU7XHJcbiAgcHVibGljIGVyYXNlQ291bnQgPSAwO1xyXG4gIHB1YmxpYyBpY2VMZXZlbCA9IDA7XHJcbiAgcHJpdmF0ZSB0cmFuc2l0aW9uaW5nID0gZmFsc2U7XHJcblxyXG4gIHB1YmxpYyBpbml0KGRhdGE6IEdhbWVTY2VuZUFyZ3VtZW50cyk6IHZvaWR7XHJcbiAgICB0aGlzLm9uRmluaXNoID0gZGF0YS5vbkZpbmlzaDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjcmVhdGUoKTogdm9pZCB7XHJcbiAgICBjb25zb2xlLmxvZygnT3JhbmdlJyk7XHJcbiAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IHRoaXMuc3lzLmdhbWUuY2FudmFzO1xyXG4gICAgdGhpcy50cmFuc2l0aW9uaW5nID0gZmFsc2U7XHJcbiAgICB0aGlzLmVyYXNlQ291bnQgPSAwO1xyXG4gICAgdGhpcy5pY2VMZXZlbCA9IDA7XHJcbiAgICAvLyBBZGQgYSBwbGF5ZXIgc3ByaXRlIHRoYXQgY2FuIGJlIG1vdmVkIGFyb3VuZC4gUGxhY2UgaGltIGluIHRoZSBtaWRkbGUgb2YgdGhlIHNjcmVlbi5cclxuICAgIHRoaXMub3JhbmdlUGVlbGVkID0gdGhpcy5hZGQuc3ByaXRlKHdpZHRoIC8gMiwgaGVpZ2h0IC8gNCwgJ29yYW5nZScpO1xyXG4gICAgdGhpcy5vcmFuZ2VQZWVsZWQuc2V0U2NhbGUoMC43KTtcclxuICAgIHRoaXMub3JhbmdlID0gdGhpcy5hZGQuc3ByaXRlKHdpZHRoIC8gMiwgaGVpZ2h0IC8gNCwgJ29yYW5nZWluc2lkZScpO1xyXG4gICAgdGhpcy5vcmFuZ2Uuc2V0U2NhbGUoMC43KTtcclxuXHJcbiAgICB0aGlzLmNhbmVsbGUgPSB0aGlzLmFkZFxyXG4gICAgICAuc3ByaXRlKCgzICogd2lkdGgpIC8gNCwgKDMgKiBoZWlnaHQpIC8gNCwgJ2NhbmVsbGVrbmlmZScpXHJcbiAgICAgIC5zZXRJbnRlcmFjdGl2ZSgpXHJcbiAgICAgIC5zZXREZXB0aCgxKTtcclxuICAgIHRoaXMuYmxhZGVSZWN0ID0gdGhpcy5hZGRcclxuICAgICAgLnJlY3RhbmdsZShcclxuICAgICAgICB0aGlzLmNhbmVsbGUueCArIHRoaXMuY2FuZWxsZS5kaXNwbGF5V2lkdGggLyA4LFxyXG4gICAgICAgIHRoaXMuY2FuZWxsZS55IC0gdGhpcy5jYW5lbGxlLmRpc3BsYXlIZWlnaHQgLyAyICsgdGhpcy5jYW5lbGxlLmRpc3BsYXlIZWlnaHQgKiAoMSAvIDQwKSxcclxuICAgICAgICB0aGlzLmNhbmVsbGUuZGlzcGxheVdpZHRoICogKDMgLyA0KSxcclxuICAgICAgICB0aGlzLmNhbmVsbGUuZGlzcGxheUhlaWdodCAqICgxIC8gMjApLFxyXG4gICAgICAgIDB4MDBmZjAwLFxyXG4gICAgICApXHJcbiAgICAgIC5zZXREZXB0aCgyKVxyXG4gICAgICAuc2V0QWxwaGEoMC41KTtcclxuXHJcbiAgICBjb25zdCBjb3ZlciA9IHRoaXMubWFrZS5pbWFnZSh7XHJcbiAgICAgIGtleTogJ29yYW5nZScsXHJcbiAgICAgIGFkZDogZmFsc2UsXHJcbiAgICB9KTtcclxuICAgIGNvdmVyLnNldFNjYWxlKDAuNyk7XHJcbiAgICBjb25zb2xlLmxvZyhgY292ZXI6ICR7Y292ZXIueH0gJHtjb3Zlci55fWApO1xyXG4gICAgLy9jb3Zlci5zZXRQb3NpdGlvbih0aGlzLm9yYW5nZS54LCB0aGlzLm9yYW5nZS55KTtcclxuICAgIGNvdmVyLnNldERlcHRoKDEpO1xyXG4gICAgLy9jb3Zlci5zZXRPcmlnaW4oMCwgMCk7XHJcbiAgICB0aGlzLnJ0ID0gdGhpcy5hZGQucmVuZGVyVGV4dHVyZShcclxuICAgICAgdGhpcy5vcmFuZ2UuZ2V0VG9wTGVmdCgpLngsXHJcbiAgICAgIHRoaXMub3JhbmdlLmdldFRvcExlZnQoKS55LFxyXG4gICAgICB0aGlzLm9yYW5nZVBlZWxlZC5kaXNwbGF5V2lkdGgsXHJcbiAgICAgIHRoaXMub3JhbmdlUGVlbGVkLmRpc3BsYXlIZWlnaHQsXHJcbiAgICApO1xyXG4gICAgLy90aGlzLnJ0LnNldE9yaWdpbigwLjUsIDAuNSk7XHJcbiAgICBjb25zb2xlLmxvZyhgcnQ6ICR7dGhpcy5ydC54fSAke3RoaXMucnQueX1gKTtcclxuICAgIHRoaXMucnQuc2V0UG9zaXRpb24odGhpcy5vcmFuZ2VQZWVsZWQuZ2V0VG9wTGVmdCgpLngsIHRoaXMub3JhbmdlUGVlbGVkLmdldFRvcExlZnQoKS55KTtcclxuICAgIC8vdGhpcy5ydC5zZXRUaW50KDB4MDBGRjAwKTtcclxuICAgIHRoaXMucnQuZHJhdyhjb3ZlciwgdGhpcy5vcmFuZ2VQZWVsZWQuZGlzcGxheVdpZHRoIC8gMiwgdGhpcy5vcmFuZ2VQZWVsZWQuZGlzcGxheUhlaWdodCAvIDIpOyAvLywgd2lkdGggKiAwLjUsIGhlaWdodCAqIDAuNSlcclxuICAgIGNvbnNvbGUubG9nKGBydDogJHt0aGlzLnJ0Lnh9ICR7dGhpcy5ydC55fWApO1xyXG4gICAgY29uc29sZS5sb2coYG9yYW5nZTogJHt0aGlzLm9yYW5nZS54fSAke3RoaXMub3JhbmdlLnl9YCk7XHJcbiAgICBjb25zb2xlLmxvZyhgb3JhbmdlUGVlbGVkOiAke3RoaXMub3JhbmdlUGVlbGVkLnh9ICR7dGhpcy5vcmFuZ2VQZWVsZWQueX1gKTtcclxuXHJcbiAgICB0aGlzLmlucHV0Lm9uKCdkcmFnc3RhcnQnLCAocG9pbnRlciwgZ2FtZU9iamVjdCkgPT4ge1xyXG4gICAgICBnYW1lT2JqZWN0LnNldFRpbnQoMHg5OTk5OTkpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5pbnB1dC5vbignZHJhZ2VuZCcsIChwb2ludGVyLCBnYW1lT2JqZWN0KSA9PiB7XHJcbiAgICAgIGdhbWVPYmplY3QuY2xlYXJUaW50KCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmlucHV0LnNldERyYWdnYWJsZSh0aGlzLmNhbmVsbGUpO1xyXG5cclxuICAgIHRoaXMuaW5wdXQub24oJ3BvaW50ZXJ1cCcsICgpID0+IHtcclxuICAgICAgdGhpcy50ZXh0MS5zZXRUZXh0KGDOuDogJHt0aGlzLmlucHV0LmFjdGl2ZVBvaW50ZXIuZ2V0QW5nbGUoKX1gKTtcclxuICAgICAgdGhpcy50ZXh0Mi5zZXRUZXh0KGB4OiAke3RoaXMuaW5wdXQuYWN0aXZlUG9pbnRlci5nZXREaXN0YW5jZVgoKX1gKTtcclxuICAgICAgdGhpcy50ZXh0My5zZXRUZXh0KGB5OiAke3RoaXMuaW5wdXQuYWN0aXZlUG9pbnRlci5nZXREaXN0YW5jZVkoKX1gKTtcclxuICAgICAgdGhpcy50ZXh0NC5zZXRUZXh0KGBkOiAke3RoaXMuaW5wdXQuYWN0aXZlUG9pbnRlci5nZXREaXN0YW5jZSgpfWApO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5pbnB1dC5vbigncG9pbnRlcmRvd24nLCAoKSA9PiB7fSk7XHJcblxyXG4gICAgdGhpcy5pbnB1dC5vbignZHJhZycsIChwb2ludGVyLCBnYW1lT2JqZWN0LCBkcmFnWCwgZHJhZ1kpID0+IHtcclxuICAgICAgLy8gZnJvbSBoZXJlOiBuZWVkIHRvIDEuIGNhbGN1bGF0ZSBhbmdsZSBiZXR3ZWVuIGJhc2Ugb2Ygb2JqZWN0IGFuZCBjdXJzb3JcclxuICAgICAgLy8gMi4gcm90YXRlIHVudGlsIHRvcCBvZiBib3R0bGUgaXMgcG9pbnRpbmcgdG8gY3Vyc29yXHJcblxyXG4gICAgICBnYW1lT2JqZWN0LnkgPSBkcmFnWTtcclxuICAgICAgZ2FtZU9iamVjdC54ID0gZHJhZ1g7XHJcbiAgICAgIHRoaXMuYmxhZGVSZWN0LnNldFBvc2l0aW9uKFxyXG4gICAgICAgIGRyYWdYICsgdGhpcy5jYW5lbGxlLmRpc3BsYXlXaWR0aCAvIDgsXHJcbiAgICAgICAgZHJhZ1kgLSB0aGlzLmNhbmVsbGUuZGlzcGxheUhlaWdodCAvIDIgKyB0aGlzLmNhbmVsbGUuZGlzcGxheUhlaWdodCAqICgxIC8gNDApLFxyXG4gICAgICApO1xyXG4gICAgICB0aGlzLnRleHQyLnNldFRleHQoYGRyYWdZOiAke2RyYWdZfWApO1xyXG4gICAgICB0aGlzLnRleHQzLnNldFRleHQoYHk6ICR7dGhpcy5pbnB1dC5hY3RpdmVQb2ludGVyLnByZXZQb3NpdGlvbi55fWApO1xyXG4gICAgICBpZiAoXHJcbiAgICAgICAgdGhpcy5pbnB1dC5hY3RpdmVQb2ludGVyLnByZXZQb3NpdGlvbi55IDwgdGhpcy5pbnB1dC5hY3RpdmVQb2ludGVyLnkgJiZcclxuICAgICAgICB0aGlzLm9yYW5nZS5nZXRCb3VuZHMoKS5jb250YWlucyh0aGlzLmJsYWRlUmVjdC54LCB0aGlzLmJsYWRlUmVjdC55KVxyXG4gICAgICApIHtcclxuICAgICAgICBjb25zdCB4ID0gdGhpcy5ibGFkZVJlY3QueCAtIHRoaXMucnQueDtcclxuICAgICAgICBjb25zdCB5ID0gdGhpcy5ibGFkZVJlY3QueSAtIHRoaXMucnQueTtcclxuICAgICAgICB0aGlzLnJ0LmVyYXNlKFxyXG4gICAgICAgICAgdGhpcy5ibGFkZVJlY3QsXHJcbiAgICAgICAgICB4LFxyXG4gICAgICAgICAgeSxcclxuICAgICAgICAgIC8vdGhpcy5ibGFkZVJlY3QueCAtIHRoaXMuYmxhZGVSZWN0LmRpc3BsYXlXaWR0aCAvIDIsXHJcbiAgICAgICAgICAvL3RoaXMuYmxhZGVSZWN0LnkgLSB0aGlzLmJsYWRlUmVjdC5kaXNwbGF5SGVpZ2h0LFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdGhpcy5lcmFzZUNvdW50Kys7XHJcbiAgICAgICAgaWYgKHRoaXMuZXJhc2VDb3VudCA+PSAxMDAgJiYgIXRoaXMudHJhbnNpdGlvbmluZykge1xyXG4gICAgICAgICAgdGhpcy50cmFuc2l0aW9uaW5nID0gdHJ1ZTtcclxuICAgICAgICAgIGRvY3VtZW50LmNvb2tpZSA9IGBvcmFuZ2U9MWA7XHJcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zY2VuZS5zdG9wKCk7XHJcbiAgICAgICAgICAgIHRoaXMub25GaW5pc2godHJ1ZSk7XHJcbiAgICAgICAgICB9LCA1MDApO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy50ZXh0MSA9IHRoaXMuYWRkLnRleHQoMTAsIDEwLCAnJywgeyBjb2xvcjogJyMwMGZmMDAnIH0pO1xyXG4gICAgdGhpcy50ZXh0MiA9IHRoaXMuYWRkLnRleHQoMTAsIDI1LCAnJywgeyBjb2xvcjogJyMwMGZmMDAnIH0pO1xyXG4gICAgdGhpcy50ZXh0MyA9IHRoaXMuYWRkLnRleHQoMTAsIDQwLCAnJywgeyBjb2xvcjogJyMwMGZmMDAnIH0pO1xyXG4gICAgdGhpcy50ZXh0NCA9IHRoaXMuYWRkLnRleHQoMTAsIDU1LCAnJywgeyBjb2xvcjogJyMwMGZmMDAnIH0pO1xyXG4gICAgdGhpcy50ZXh0NSA9IHRoaXMuYWRkLnRleHQoMTAsIDcwLCAnJywgeyBjb2xvcjogJyMwMGZmMDAnIH0pO1xyXG4gICAgbmV3IFNjZW5lQnV0dG9uKHRoaXMsIHdpZHRoLTUwLCA1MCwgXCJYXCIsICgpID0+eyB0aGlzLm9uRmluaXNoKGZhbHNlKTsgdGhpcy5zY2VuZS5zdG9wKCk7fSkuc2V0RGVwdGgoMTAwKS5sYWJlbC5zZXREZXB0aCgxMDEpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHVwZGF0ZSgpOiB2b2lkIHt9XHJcbn1cclxuIiwiaW1wb3J0IHNpZ25hbFIgPSByZXF1aXJlKCdAbWljcm9zb2Z0L3NpZ25hbHInKTtcclxuaW1wb3J0IHsgTWVudUJ1dHRvbiB9IGZyb20gJy4uL3VpL21lbnUtYnV0dG9uJztcclxuaW1wb3J0ICogYXMgcXVlcnlzdHJpbmcgZnJvbSBcInF1ZXJ5LXN0cmluZ1wiO1xyXG5cclxuY29uc3Qgc2NlbmVDb25maWc6IFBoYXNlci5UeXBlcy5TY2VuZXMuU2V0dGluZ3NDb25maWcgPSB7XHJcbiAgYWN0aXZlOiBmYWxzZSxcclxuICB2aXNpYmxlOiBmYWxzZSxcclxuICBrZXk6ICdQZXJtaXNzaW9ucycsXHJcbn07XHJcbmNsYXNzIEdhbWVTY2VuZUFyZ3VtZW50cyB7XHJcbiAgcHVibGljIGh1YkNvbm5lY3Rpb246IHNpZ25hbFIuSHViQ29ubmVjdGlvbjtcclxufVxyXG4vKipcclxuICogVGhlIGluaXRpYWwgc2NlbmUgdGhhdCBzdGFydHMsIHNob3dzIHRoZSBzcGxhc2ggc2NyZWVucywgYW5kIGxvYWRzIHRoZSBuZWNlc3NhcnkgYXNzZXRzLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFBlcm1pc3Npb25zU2NlbmUgZXh0ZW5kcyBQaGFzZXIuU2NlbmUge1xyXG4gIHByaXZhdGUgaHViQ29ubmVjdGlvbjogc2lnbmFsUi5IdWJDb25uZWN0aW9uO1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoc2NlbmVDb25maWcpO1xyXG4gIH1cclxuICBwdWJsaWMgaW5pdChkYXRhOiBHYW1lU2NlbmVBcmd1bWVudHMpOiB2b2lkIHtcclxuICAgIHRoaXMuaHViQ29ubmVjdGlvbiA9IGRhdGEuaHViQ29ubmVjdGlvbjtcclxuICB9XHJcbiAgcHVibGljIGNyZWF0ZSgpOiB2b2lkIHtcclxuICAgIGNvbnNvbGUubG9nKCdQZXJtaXNzaW9ucycpO1xyXG4gICAgY29uc29sZS5sb2codGhpcy5odWJDb25uZWN0aW9uKTtcclxuICAgIG5ldyBNZW51QnV0dG9uKHRoaXMsIDEwMCwgMTUwLCAnRW50ZXInLCAoKSA9PiB7XHJcbiAgICAgIHRyeXtcclxuICAgICAgICBEZXZpY2VNb3Rpb25FdmVudC5yZXF1ZXN0UGVybWlzc2lvbigpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICBpZiAocmVzcG9uc2UgPT0gJ2dyYW50ZWQnKSB7XHJcbiAgICAgICAgICAgIC8vIEFkZCBhIGxpc3RlbmVyIHRvIGdldCBzbWFydHBob25lIG9yaWVudGF0aW9uXHJcbiAgICAgICAgICAgIC8vIGluIHRoZSBhbHBoYS1iZXRhLWdhbW1hIGF4ZXMgKHVuaXRzIGluIGRlZ3JlZXMpXHJcbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdkZXZpY2VvcmllbnRhdGlvbicsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgIGxldCB1cGRhdGVSYXRlID0gMSAvIDYwO1xyXG4gICAgICAgICAgICAgIC8vIEV4cG9zZSBlYWNoIG9yaWVudGF0aW9uIGFuZ2xlIGluIGEgbW9yZSByZWFkYWJsZSB3YXlcclxuICAgICAgICAgICAgICBsZXQgcm90YXRpb25fZGVncmVlcyA9IGV2ZW50LmFscGhhO1xyXG4gICAgICAgICAgICAgIGxldCBmcm9udFRvQmFja19kZWdyZWVzID0gZXZlbnQuYmV0YTtcclxuICAgICAgICAgICAgICBsZXQgbGVmdFRvUmlnaHRfZGVncmVlcyA9IGV2ZW50LmdhbW1hO1xyXG4gIFxyXG4gICAgICAgICAgICAgIG5ldyBNZW51QnV0dG9uKHRoaXMsIDEwMCwgMjUwLCAnY2xpY2tlZCcsICgpID0+IGNvbnNvbGUubG9nKCdoZWxwIGJ1dHRvbiBjbGlja2VkJykpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgICBjYXRjaChlKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImVycm9yIFwiICsgZSlcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnNjZW5lLnN0YXJ0KCdNYWluTWVudScsIHtodWJDb25uZWN0aW9uOiB0aGlzLmh1YkNvbm5lY3Rpb259KTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBJbnB1dCwgR2FtZU9iamVjdHMgfSBmcm9tICdwaGFzZXInO1xyXG5pbXBvcnQgeyBnZXRHYW1lV2lkdGgsIGdldEdhbWVIZWlnaHQsIGRyaW5rVG9Db2xvck1hcCB9IGZyb20gJy4uL2hlbHBlcnMnO1xyXG5pbXBvcnQgeyBTY2VuZUJ1dHRvbiB9IGZyb20gJy4uL3VpL3NjZW5lLWJ1dHRvbic7XHJcblxyXG5jb25zdCBzY2VuZUNvbmZpZzogUGhhc2VyLlR5cGVzLlNjZW5lcy5TZXR0aW5nc0NvbmZpZyA9IHtcclxuICBhY3RpdmU6IGZhbHNlLFxyXG4gIHZpc2libGU6IGZhbHNlLFxyXG4gIGtleTogJ1BvdXInLFxyXG59O1xyXG5jbGFzcyBHYW1lU2NlbmVBcmd1bWVudHMge1xyXG4gIHB1YmxpYyBCb3R0bGVTcHJpdGVOYW1lOiBzdHJpbmc7XHJcbiAgcHVibGljIG9uRmluaXNoOiBGdW5jdGlvbjtcclxufVxyXG5leHBvcnQgY2xhc3MgUG91clNjZW5lIGV4dGVuZHMgUGhhc2VyLlNjZW5lIHtcclxuICBwdWJsaWMgc3BlZWQgPSAyMDA7XHJcbiAgcHVibGljIG9uRmluaXNoOiBGdW5jdGlvbjtcclxuXHJcbiAgcHJpdmF0ZSBjdXJzb3JLZXlzOiBQaGFzZXIuVHlwZXMuSW5wdXQuS2V5Ym9hcmQuQ3Vyc29yS2V5cztcclxuICBwcml2YXRlIGJvdHRsZTogUGhhc2VyLkdhbWVPYmplY3RzLlNwcml0ZTtcclxuICAvL3ByaXZhdGUgYm91cmJvbjogUGhhc2VyLkdhbWVPYmplY3RzLlNwcml0ZTtcclxuICBwcml2YXRlIGVtcHR5R2xhc3M6IFBoYXNlci5HYW1lT2JqZWN0cy5TcHJpdGU7XHJcbiAgcHJpdmF0ZSBmaWxsZWRnbGFzczE6IFBoYXNlci5HYW1lT2JqZWN0cy5TcHJpdGU7XHJcbiAgcHJpdmF0ZSBmaWxsZWRnbGFzczI6IFBoYXNlci5HYW1lT2JqZWN0cy5TcHJpdGU7XHJcblxyXG4gIHByaXZhdGUgY29udGVudHM6IHN0cmluZ1tdID0gW107XHJcbiAgcHJpdmF0ZSBnbGFzc0ZpbGxlcnM6IFBoYXNlci5HYW1lT2JqZWN0cy5SZWN0YW5nbGVbXSA9IFtdO1xyXG5cclxuICBwcml2YXRlIGlzUG91cmluZyA9IDA7XHJcbiAgcHJpdmF0ZSBwb3VyQ291bnQgPSAwO1xyXG4gIHByaXZhdGUgdHJhbnNpdGlvbmluZyA9IGZhbHNlO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKHNjZW5lQ29uZmlnKTtcclxuICB9XHJcbiAgcHVibGljIHRleHQxOiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dDtcclxuICBwdWJsaWMgdGV4dDI6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0O1xyXG4gIHB1YmxpYyBib3R0bGVOYW1lOiBzdHJpbmc7XHJcbiAgcHJpdmF0ZSBsaXF1aWRSZWN0YW5nbGU6IFBoYXNlci5HYW1lT2JqZWN0cy5SZWN0YW5nbGU7XHJcblxyXG4gIHB1YmxpYyBpbml0KGRhdGE6IEdhbWVTY2VuZUFyZ3VtZW50cyk6IHZvaWQge1xyXG4gICAgdGhpcy5ib3R0bGVOYW1lID0gZGF0YS5Cb3R0bGVTcHJpdGVOYW1lO1xyXG4gICAgdGhpcy5vbkZpbmlzaCA9IGRhdGEub25GaW5pc2g7XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLmJvdHRsZU5hbWUpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNyZWF0ZSgpOiB2b2lkIHtcclxuICAgIGNvbnNvbGUubG9nKCdQb3VyJyk7XHJcbiAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IHRoaXMuc3lzLmdhbWUuY2FudmFzO1xyXG4gICAgdGhpcy5pc1BvdXJpbmcgPSAwO1xyXG4gICAgdGhpcy5wb3VyQ291bnQgPSAwO1xyXG4gICAgdGhpcy50cmFuc2l0aW9uaW5nID0gZmFsc2U7XHJcbiAgICBcclxuICAgIC8vIEFkZCBhIHBsYXllciBzcHJpdGUgdGhhdCBjYW4gYmUgbW92ZWQgYXJvdW5kLiBQbGFjZSBoaW0gaW4gdGhlIG1pZGRsZSBvZiB0aGUgc2NyZWVuLlxyXG4gICAgdGhpcy5lbXB0eUdsYXNzID0gdGhpcy5hZGQuc3ByaXRlKHdpZHRoIC8gNCwgaGVpZ2h0IC8gMiwgJ2VtcHR5Z2xhc3MnKTtcclxuICAgIC8vdGhpcy5maWxsZWRnbGFzczEgPSB0aGlzLmFkZC5zcHJpdGUod2lkdGggLyA0LCBoZWlnaHQgLyAyLCAnZmlsbGVkZ2xhc3MxJyk7XHJcbiAgICAvL3RoaXMuZmlsbGVkZ2xhc3MyID0gdGhpcy5hZGQuc3ByaXRlKHdpZHRoIC8gNCwgaGVpZ2h0IC8gMiwgJ2ZpbGxlZGdsYXNzMicpO1xyXG4vKlxyXG4gICAgdGhpcy5ib3VyYm9uID0gdGhpcy5hZGQuc3ByaXRlKHdpZHRoIC8gOCwgaGVpZ2h0IC8gNCwgJ2NhbmVsbGVrbmlmZScpLnNldEludGVyYWN0aXZlKCk7XHJcbiAgICB0aGlzLmJvdXJib24ub24oJ3BvaW50ZXJkb3duJywgKCkgPT4ge1xyXG4gICAgICB0aGlzLnRleHQxLnNldFRleHQoJ0Fza2VkJyk7XHJcbiAgICAgIERldmljZU1vdGlvbkV2ZW50LnJlcXVlc3RQZXJtaXNzaW9uKCkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICB0aGlzLnRleHQxLnNldFRleHQocmVzcG9uc2UpO1xyXG4gICAgICAgIGlmIChyZXNwb25zZSA9PSAnZ3JhbnRlZCcpIHtcclxuICAgICAgICAgIC8vIEFkZCBhIGxpc3RlbmVyIHRvIGdldCBzbWFydHBob25lIG9yaWVudGF0aW9uXHJcbiAgICAgICAgICAvLyBpbiB0aGUgYWxwaGEtYmV0YS1nYW1tYSBheGVzICh1bml0cyBpbiBkZWdyZWVzKVxyXG4gICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2RldmljZW9yaWVudGF0aW9uJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHVwZGF0ZVJhdGUgPSAxIC8gNjA7XHJcbiAgICAgICAgICAgIC8vIEV4cG9zZSBlYWNoIG9yaWVudGF0aW9uIGFuZ2xlIGluIGEgbW9yZSByZWFkYWJsZSB3YXlcclxuICAgICAgICAgICAgY29uc3Qgcm90YXRpb25fZGVncmVlcyA9IGV2ZW50LmFscGhhO1xyXG4gICAgICAgICAgICBjb25zdCBmcm9udFRvQmFja19kZWdyZWVzID0gZXZlbnQuYmV0YTtcclxuICAgICAgICAgICAgY29uc3QgbGVmdFRvUmlnaHRfZGVncmVlcyA9IGV2ZW50LmdhbW1hO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5ib3R0bGUuYW5nbGUgPSBmcm9udFRvQmFja19kZWdyZWVzIC0gOTA7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7Ki9cclxuXHJcbiAgICBjb25zb2xlLmxvZyhgZ2xhc3MgeDogJHt3aWR0aCAvIDR9YCk7XHJcbiAgICBjb25zb2xlLmxvZyhgZ2xhc3MgeTogJHtoZWlnaHQgLyAyfWApO1xyXG4gICAgdGhpcy5lbXB0eUdsYXNzLnNldFNjYWxlKDAuNSk7XHJcbiAgICB0aGlzLmVtcHR5R2xhc3Muc2NhbGVZID0gdGhpcy5lbXB0eUdsYXNzLnNjYWxlWSAqIDAuNTtcclxuICAgIC8vdGhpcy5lbXB0eUdsYXNzLmJsZW5kTW9kZSA9IFBoYXNlci5CbGVuZE1vZGVzLk1VTFRJUExZO1xyXG5cclxuICAgIHRoaXMuYm90dGxlID0gdGhpcy5hZGQuc3ByaXRlKHdpZHRoIC8gMS41LCBoZWlnaHQgLyAyLCB0aGlzLmJvdHRsZU5hbWUpLnNldEludGVyYWN0aXZlKCk7XHJcbiAgICB0aGlzLmJvdHRsZS5zZXRTY2FsZSgwLjc1KTtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMuZW1wdHlHbGFzcy54KTtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMuYm90dGxlLmRpc3BsYXlIZWlnaHQpO1xyXG4gICAgdGhpcy5ib3R0bGUuc2V0UG9zaXRpb24odGhpcy5lbXB0eUdsYXNzLnggKyB0aGlzLmJvdHRsZS5kaXNwbGF5SGVpZ2h0IC8gNCk7XHJcbiAgICB0aGlzLmJvdHRsZS5zZXRTY2FsZSgwLjUpO1xyXG5cclxuICAgIHRoaXMuYm90dGxlLm9uKCdwb2ludGVyb3ZlcicsICgpID0+IHtcclxuICAgICAgdGhpcy5ib3R0bGUuc2V0VGludCgweGNjY2NjYyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmJvdHRsZS5vbigncG9pbnRlcm91dCcsICgpID0+IHtcclxuICAgICAgdGhpcy5ib3R0bGUuY2xlYXJUaW50KCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmlucHV0LnNldERyYWdnYWJsZSh0aGlzLmJvdHRsZSk7XHJcblxyXG4gICAgdGhpcy5pbnB1dC5vbignZHJhZ3N0YXJ0JywgKHBvaW50ZXIsIGdhbWVPYmplY3QpID0+IHtcclxuICAgICAgZ2FtZU9iamVjdC5zZXRUaW50KDB4OTk5OTk5KTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5saXF1aWRSZWN0YW5nbGUgPSB0aGlzLmFkZFxyXG4gICAgICAucmVjdGFuZ2xlKFxyXG4gICAgICAgIHRoaXMuZW1wdHlHbGFzcy54LFxyXG4gICAgICAgIHRoaXMuZW1wdHlHbGFzcy55ICsgdGhpcy5lbXB0eUdsYXNzLmRpc3BsYXlIZWlnaHQgLyAyLFxyXG4gICAgICAgIHRoaXMuZW1wdHlHbGFzcy5kaXNwbGF5V2lkdGgsXHJcbiAgICAgICAgKyt0aGlzLnBvdXJDb3VudCxcclxuICAgICAgICBkcmlua1RvQ29sb3JNYXAuZ2V0KHRoaXMuYm90dGxlTmFtZSksXHJcbiAgICAgIClcclxuICAgICAgLnNldEJsZW5kTW9kZShQaGFzZXIuQmxlbmRNb2Rlcy5NVUxUSVBMWSk7XHJcblxyXG4gICAgdGhpcy5pbnB1dC5vbignZHJhZycsIChwb2ludGVyLCBnYW1lT2JqZWN0LCBkcmFnWCwgZHJhZ1kpID0+IHtcclxuICAgICAgLy8gZnJvbSBoZXJlOiBuZWVkIHRvIDEuIGNhbGN1bGF0ZSBhbmdsZSBiZXR3ZWVuIGJhc2Ugb2Ygb2JqZWN0IGFuZCBjdXJzb3JcclxuICAgICAgLy8gMi4gcm90YXRlIHVudGlsIHRvcCBvZiBib3R0bGUgaXMgcG9pbnRpbmcgdG8gY3Vyc29yXHJcbiAgICAgIGNvbnN0IHkxID0gZ2FtZU9iamVjdC55O1xyXG4gICAgICBjb25zdCB5MiA9IHRoaXMuaW5wdXQuYWN0aXZlUG9pbnRlci55O1xyXG4gICAgICBjb25zdCB4MSA9IGdhbWVPYmplY3QueDtcclxuICAgICAgY29uc3QgeDIgPSB0aGlzLmlucHV0LmFjdGl2ZVBvaW50ZXIueDtcclxuXHJcbiAgICAgIGNvbnN0IHNsb3BlUmFkcyA9IE1hdGguYXRhbjIoeTIgLSB5MSwgeDIgLSB4MSk7XHJcbiAgICAgIGNvbnN0IGFkanVzdGVkID0gc2xvcGVSYWRzICsgMS41NzA3OTYzMztcclxuXHJcbiAgICAgIHRoaXMudGV4dDEuc2V0VGV4dChgJHt0aGlzLnBvdXJDb3VudH1gKTtcclxuICAgICAgaWYgKGFkanVzdGVkID49IE1hdGguUEkgfHwgYWRqdXN0ZWQgPD0gMC4wMjUpIHtcclxuICAgICAgICBnYW1lT2JqZWN0LnJvdGF0aW9uID0gc2xvcGVSYWRzICsgMS41NzA3OTYzMztcclxuICAgICAgfVxyXG5cclxuICAgICAgLyppZiAoYWRqdXN0ZWQgPiA0KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNQb3VyaW5nID09IDApIHtcclxuICAgICAgICAgIHRoaXMuaXNQb3VyaW5nID0gMTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5pc1BvdXJpbmcgPSAwO1xyXG4gICAgICB9Ki9cclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuaW5wdXQub24oJ2RyYWdlbmQnLCAocG9pbnRlciwgZ2FtZU9iamVjdCkgPT4ge1xyXG4gICAgICBnYW1lT2JqZWN0LmNsZWFyVGludCgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gVGhpcyBpcyBhIG5pY2UgaGVscGVyIFBoYXNlciBwcm92aWRlcyB0byBjcmVhdGUgbGlzdGVuZXJzIGZvciBzb21lIG9mIHRoZSBtb3N0IGNvbW1vbiBrZXlzLlxyXG4gICAgdGhpcy5jdXJzb3JLZXlzID0gdGhpcy5pbnB1dC5rZXlib2FyZC5jcmVhdGVDdXJzb3JLZXlzKCk7XHJcblxyXG4gICAgdGhpcy50ZXh0MSA9IHRoaXMuYWRkLnRleHQoMTAsIDEwLCAnJywgeyBjb2xvcjogJyMwMGZmMDAnIH0pO1xyXG4gICAgdGhpcy50ZXh0MiA9IHRoaXMuYWRkLnRleHQoMTAwLCAxMCwgJycsIHsgY29sb3I6ICcjMDBmZjAwJyB9KTtcclxuXHJcbiAgICB0aGlzLmJvdHRsZS5zZXREZXB0aCgxKTtcclxuICAgIHRoaXMuY2FsbGJhY2soKTtcclxuICAgIG5ldyBTY2VuZUJ1dHRvbih0aGlzLCB3aWR0aC01MCwgNTAsIFwiWFwiLCAoKSA9PnsgdGhpcy5vbkZpbmlzaChmYWxzZSk7IHRoaXMuc2NlbmUuc3RvcCgpO30pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHVwZGF0ZSgpOiB2b2lkIHtcclxuICAgIC8vIEV2ZXJ5IGZyYW1lLCB3ZSBjcmVhdGUgYSBuZXcgdmVsb2NpdHkgZm9yIHRoZSBzcHJpdGUgYmFzZWQgb24gd2hhdCBrZXlzIHRoZSBwbGF5ZXIgaXMgaG9sZGluZyBkb3duLlxyXG4gICAgdGhpcy50ZXh0MS5zZXRUZXh0KGAke3RoaXMuYm90dGxlLnJvdGF0aW9ufWApO1xyXG4gICAgaWYgKHRoaXMuYm90dGxlLnJvdGF0aW9uIDwgLTEuNyAmJiB0aGlzLmJvdHRsZS5yb3RhdGlvbiA+IC0yLjMpIHtcclxuICAgICAgaWYgKHRoaXMuaXNQb3VyaW5nID09IDApIHtcclxuICAgICAgICB0aGlzLmlzUG91cmluZyA9IDE7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuaXNQb3VyaW5nID0gMDtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmlzUG91cmluZyA9PSAxICYmIHRoaXMubGlxdWlkUmVjdGFuZ2xlLmRpc3BsYXlIZWlnaHQgPCB0aGlzLmVtcHR5R2xhc3MuZGlzcGxheUhlaWdodCAqIDEuOSkge1xyXG4gICAgICB0aGlzLmxpcXVpZFJlY3RhbmdsZS5kaXNwbGF5SGVpZ2h0ID0gdGhpcy5saXF1aWRSZWN0YW5nbGUuZGlzcGxheUhlaWdodCArIDEuNTtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5saXF1aWRSZWN0YW5nbGUuZGlzcGxheUhlaWdodCA+IHRoaXMuZW1wdHlHbGFzcy5kaXNwbGF5SGVpZ2h0ICogMS45ICYmICF0aGlzLnRyYW5zaXRpb25pbmcpIHtcclxuICAgICAgdGhpcy50cmFuc2l0aW9uaW5nID0gdHJ1ZTtcclxuICAgICAgZG9jdW1lbnQuY29va2llID0gYCR7dGhpcy5ib3R0bGVOYW1lfT0xYDtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zY2VuZS5zdG9wKCk7XHJcbiAgICAgICAgdGhpcy5vbkZpbmlzaCh0cnVlKTtcclxuICAgICAgfSwgNTAwKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBjYWxsYmFjaygpOiB2b2lkIHtcclxuICAgIHRoaXMuY2FsbEFwcGxlKCk7XHJcbiAgICAvL1xyXG4gIH1cclxuICBwdWJsaWMgY2FsbEFwcGxlKCk6IHZvaWQge1xyXG4gICAgdHJ5IHtcclxuICAgICAgRGV2aWNlTW90aW9uRXZlbnQucmVxdWVzdFBlcm1pc3Npb24oKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIHRoaXMudGV4dDEuc2V0VGV4dChyZXNwb25zZSk7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2RldmljZW9yaWVudGF0aW9uJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhldmVudCk7XHJcbiAgICAgICAgICBjb25zdCB1cGRhdGVSYXRlID0gMSAvIDYwO1xyXG4gICAgICAgICAgLy8gRXhwb3NlIGVhY2ggb3JpZW50YXRpb24gYW5nbGUgaW4gYSBtb3JlIHJlYWRhYmxlIHdheVxyXG4gICAgICAgICAgY29uc3Qgcm90YXRpb25fZGVncmVlcyA9IGV2ZW50LmFscGhhO1xyXG4gICAgICAgICAgY29uc3QgZnJvbnRUb0JhY2tfZGVncmVlcyA9IGV2ZW50LmJldGE7XHJcbiAgICAgICAgICBjb25zdCBsZWZ0VG9SaWdodF9kZWdyZWVzID0gZXZlbnQuZ2FtbWE7XHJcblxyXG4gICAgICAgICAgdGhpcy5ib3R0bGUuYW5nbGUgPSBmcm9udFRvQmFja19kZWdyZWVzIC0gOTA7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXgpIHtcclxuICAgICAgY29uc29sZS5sb2coJ25vdCBpb3MnKTtcclxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2RldmljZW9yaWVudGF0aW9uJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXZlbnQpO1xyXG4gICAgICAgIGNvbnN0IHVwZGF0ZVJhdGUgPSAxIC8gNjA7XHJcbiAgICAgICAgLy8gRXhwb3NlIGVhY2ggb3JpZW50YXRpb24gYW5nbGUgaW4gYSBtb3JlIHJlYWRhYmxlIHdheVxyXG4gICAgICAgIGNvbnN0IHJvdGF0aW9uX2RlZ3JlZXMgPSBldmVudC5hbHBoYTtcclxuICAgICAgICBjb25zdCBmcm9udFRvQmFja19kZWdyZWVzID0gZXZlbnQuYmV0YTtcclxuICAgICAgICBjb25zdCBsZWZ0VG9SaWdodF9kZWdyZWVzID0gZXZlbnQuZ2FtbWE7XHJcblxyXG4gICAgICAgIHRoaXMuYm90dGxlLmFuZ2xlID0gZnJvbnRUb0JhY2tfZGVncmVlcyAtIDkwO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgSW5wdXQsIEdhbWVPYmplY3RzIH0gZnJvbSAncGhhc2VyJztcclxuaW1wb3J0IHsgZ2V0R2FtZVdpZHRoLCBnZXRHYW1lSGVpZ2h0LCBkcmlua1RvQ29sb3JNYXAgfSBmcm9tICcuLi9oZWxwZXJzJztcclxuaW1wb3J0IHsgTWVudUJ1dHRvbiB9IGZyb20gJy4uL3VpL21lbnUtYnV0dG9uJztcclxuXHJcbmNvbnN0IHNjZW5lQ29uZmlnOiBQaGFzZXIuVHlwZXMuU2NlbmVzLlNldHRpbmdzQ29uZmlnID0ge1xyXG4gIGFjdGl2ZTogZmFsc2UsXHJcbiAgdmlzaWJsZTogZmFsc2UsXHJcbiAga2V5OiAnUmVzdWx0cycsXHJcbn07XHJcbmNsYXNzIEdhbWVTY2VuZUFyZ3VtZW50cyB7XHJcbiAgcHVibGljIG9uRmluaXNoOiBGdW5jdGlvbjtcclxuICBwdWJsaWMgcmVzdWx0czogQXJyYXk8bnVtYmVyPjtcclxufVxyXG5leHBvcnQgY2xhc3MgUmVzdWx0c1NjZW5lIGV4dGVuZHMgUGhhc2VyLlNjZW5lIHtcclxuICBwdWJsaWMgc3BlZWQgPSAyMDA7XHJcblxyXG4gIHB1YmxpYyByZXN1bHRzOiBBcnJheTxudW1iZXI+O1xyXG4gIHByaXZhdGUgdHJhbnNpdGlvbmluZyA9IGZhbHNlO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKHNjZW5lQ29uZmlnKTtcclxuICB9XHJcbiAgcHVibGljIG9uRmluaXNoOiBGdW5jdGlvbjtcclxuICBwdWJsaWMgdGV4dDE6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0O1xyXG4gIHB1YmxpYyB0ZXh0MjogUGhhc2VyLkdhbWVPYmplY3RzLlRleHQ7XHJcbiAgcHVibGljIHRleHQzOiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dDtcclxuICBwdWJsaWMgdGV4dDQ6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0O1xyXG4gIHB1YmxpYyB0ZXh0NTogUGhhc2VyLkdhbWVPYmplY3RzLlRleHQ7XHJcbiAgcHVibGljIGNsaWNrcyA9IDA7XHJcbiAgcHVibGljIGljZUxldmVsID0gMDtcclxuXHJcbiAgcHVibGljIGluaXQoZGF0YTogR2FtZVNjZW5lQXJndW1lbnRzKTogdm9pZCB7XHJcbiAgICB0aGlzLm9uRmluaXNoID0gZGF0YS5vbkZpbmlzaDtcclxuICAgIHRoaXMucmVzdWx0cyA9IGRhdGEucmVzdWx0cztcclxuICB9XHJcblxyXG5cclxuICBwdWJsaWMgY3JlYXRlKCk6IHZvaWQge1xyXG4gICAgY29uc29sZS5sb2coJ1Jlc3VsdHMnKTtcclxuICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCB9ID0gdGhpcy5zeXMuZ2FtZS5jYW52YXM7XHJcbiAgICB0aGlzLnRyYW5zaXRpb25pbmcgPSBmYWxzZTtcclxuICAgIC8vIEFkZCBhIHBsYXllciBzcHJpdGUgdGhhdCBjYW4gYmUgbW92ZWQgYXJvdW5kLiBQbGFjZSBoaW0gaW4gdGhlIG1pZGRsZSBvZiB0aGUgc2NyZWVuLlxyXG4gICAgLy90aGlzLnZlcm1vdXRoVG9wT25seSA9IHRoaXMuYWRkLnNwcml0ZSh3aWR0aCAvIDIsIGhlaWdodCAvIDIgKyAzMDAsICd2ZXJtb3V0aHRvcG9ubHknKTtcclxuICAgIHRoaXMuYWRkLnRleHQod2lkdGgvOCwgKGhlaWdodC80KSAtIDMwLCBcIlJlc3VsdHM6XCIsIHsgY29sb3I6ICcjZmZmZmZmJyB9KTtcclxuICAgIHRoaXMucmVzdWx0cy5mb3JFYWNoKChlbGVtZW50LGlkeCkgPT4ge1xyXG4gICAgICB0aGlzLmFkZC50ZXh0KHdpZHRoLzgsIChoZWlnaHQvNCkgKyAoaWR4ICogaGVpZ2h0LzgpLCB0aGlzLmdldFJlc3VsdFN0cmluZyhlbGVtZW50KSwgeyBjb2xvcjogJyNmZmZmZmYnIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgbmV3IE1lbnVCdXR0b24odGhpcywgd2lkdGgvMiwgKGhlaWdodC80KSAqIDMsIFwiUmVzZXRcIiwgKCkgPT4ge3RoaXMuc2NlbmUuc3RvcCgpO3RoaXMub25GaW5pc2goKTt9KTtcclxuICB9XHJcblxyXG4gIC8vcHVibGljIHVwZGF0ZSgpOiB2b2lkIHt9XHJcblxyXG4gIHByaXZhdGUgZ2V0UmVzdWx0U3RyaW5nKGl0ZW06IG51bWJlcil7XHJcbiAgICBpZihpdGVtID09IDApe1xyXG4gICAgICByZXR1cm4gXCJKdXN0IGxpa2UgSSBvcmRlcmVkISBUaGFua3MhXCJcclxuICAgIH1cclxuICAgIGVsc2UgaWYoaXRlbSA9PSAxKXtyZXR1cm4gXCJFeGN1c2UgbWUsIEkgdGhpbmsgSSBcXG5nb3Qgc29tZW9uZSBlbHNlJ3MgZHJpbmtcIn1cclxuICAgIGVsc2UgaWYoaXRlbSA9PSAyKXtyZXR1cm4gXCJMb29rcyBnb29kIGJ1dCBJIGRvbid0XFxudGhpbmsgSSBoZWFyZCBhbnlvbmUgb3JkZXIgdGhpc1wifVxyXG4gICAgZWxzZSBpZihpdGVtID09IDMpe3JldHVybiBcIipzcGl0cyBvdXQgZHJpbmsqIERvIHlvdVxcbiBldmVuIGtub3cgaG93IHRvIG1ha2UgZHJpbmtzP1wifVxyXG4gIH1cclxuXHJcbn1cclxuIiwiaW1wb3J0IHsgSW5wdXQsIEdhbWVPYmplY3RzIH0gZnJvbSAncGhhc2VyJztcclxuaW1wb3J0IHsgU2NlbmVCdXR0b24gfSBmcm9tICcuLi91aS9zY2VuZS1idXR0b24nO1xyXG5cclxuY29uc3Qgc2NlbmVDb25maWc6IFBoYXNlci5UeXBlcy5TY2VuZXMuU2V0dGluZ3NDb25maWcgPSB7XHJcbiAgYWN0aXZlOiBmYWxzZSxcclxuICB2aXNpYmxlOiBmYWxzZSxcclxuICBrZXk6ICdTaGFrZSBEcmluaycsXHJcbn07XHJcblxyXG5jbGFzcyBHYW1lU2NlbmVBcmd1bWVudHMge1xyXG4gIHB1YmxpYyBvbkZpbmlzaDogRnVuY3Rpb247XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBTaGFrZVNjZW5lIGV4dGVuZHMgUGhhc2VyLlNjZW5lIHtcclxuICBwdWJsaWMgc3BlZWQgPSAyMDA7XHJcblxyXG4gIHByaXZhdGUgY3Vyc29yS2V5czogUGhhc2VyLlR5cGVzLklucHV0LktleWJvYXJkLkN1cnNvcktleXM7XHJcbiAgcHJpdmF0ZSBib3R0bGU6IFBoYXNlci5HYW1lT2JqZWN0cy5TcHJpdGU7XHJcbiAgLy9wcml2YXRlIGJvdXJib246IFBoYXNlci5HYW1lT2JqZWN0cy5TcHJpdGU7XHJcbiAgcHJpdmF0ZSBlbXB0eUdsYXNzOiBQaGFzZXIuR2FtZU9iamVjdHMuU3ByaXRlO1xyXG4gIHByaXZhdGUgZmlsbGVkZ2xhc3MxOiBQaGFzZXIuR2FtZU9iamVjdHMuU3ByaXRlO1xyXG4gIHByaXZhdGUgZmlsbGVkZ2xhc3MyOiBQaGFzZXIuR2FtZU9iamVjdHMuU3ByaXRlO1xyXG5cclxuICBwcml2YXRlIGNvbnRlbnRzOiBzdHJpbmdbXSA9IFtdO1xyXG4gIHByaXZhdGUgZ2xhc3NGaWxsZXJzOiBQaGFzZXIuR2FtZU9iamVjdHMuU3ByaXRlW10gPSBbXTtcclxuXHJcbiAgcHJpdmF0ZSBpc1BvdXJpbmcgPSAwO1xyXG4gIHByaXZhdGUgc2hha2VDb3VudCA9IDA7XHJcbiAgcHJpdmF0ZSB0cmFuc2l0aW9uaW5nID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSBuID0gMDtcclxuICBwcml2YXRlIG50aHJlc2hvbGQgPSAwO1xyXG4gIHByaXZhdGUgbWF4eCA9IDA7XHJcbiAgcHJpdmF0ZSBtYXh5ID0gMDtcclxuICBwcml2YXRlIG1heHogPSAwO1xyXG4gIHByaXZhdGUgbWlueCA9IDA7XHJcbiAgcHJpdmF0ZSBtaW55ID0gMDtcclxuICBwcml2YXRlIG1pbnogPSAwO1xyXG4gIHByaXZhdGUgdGhyZXNob2xkID0gMTU7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoc2NlbmVDb25maWcpO1xyXG4gIH1cclxuICBwdWJsaWMgdGV4dDE6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0O1xyXG4gIHB1YmxpYyB0ZXh0MjogUGhhc2VyLkdhbWVPYmplY3RzLlRleHQ7XHJcbiAgcHVibGljIHRleHQzOiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dDtcclxuICBwdWJsaWMgdGV4dDQ6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0O1xyXG4gIHB1YmxpYyB0ZXh0NTogUGhhc2VyLkdhbWVPYmplY3RzLlRleHQ7XHJcbiAgcHVibGljIGJvdHRsZU5hbWU6IHN0cmluZztcclxuICBwcml2YXRlIGxpcXVpZFJlY3RhbmdsZTogUGhhc2VyLkdhbWVPYmplY3RzLlJlY3RhbmdsZTtcclxuICBwdWJsaWMgb25GaW5pc2g6IEZ1bmN0aW9uO1xyXG5cclxuICBwdWJsaWMgaW5pdChkYXRhOiBHYW1lU2NlbmVBcmd1bWVudHMpOiB2b2lkIHtcclxuICAgIHRoaXMuYm90dGxlTmFtZSA9ICdzaGFrZXInO1xyXG4gICAgdGhpcy5vbkZpbmlzaCA9IGRhdGEub25GaW5pc2g7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY3JlYXRlKCk6IHZvaWQge1xyXG4gICAgY29uc29sZS5sb2coJ1NoYWtlJyk7XHJcbiAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IHRoaXMuc3lzLmdhbWUuY2FudmFzO1xyXG4gICAgdGhpcy5pc1BvdXJpbmcgPSAwO1xyXG4gICAgdGhpcy5zaGFrZUNvdW50ID0gMDtcclxuICAgIHRoaXMudHJhbnNpdGlvbmluZyA9IGZhbHNlO1xyXG4gICAgdGhpcy5uID0gMDtcclxuICAgIHRoaXMubnRocmVzaG9sZCA9IDEzO1xyXG4gICAgdGhpcy5jYWxsYmFjaygpO1xyXG4gICAgLy8gQWRkIGEgcGxheWVyIHNwcml0ZSB0aGF0IGNhbiBiZSBtb3ZlZCBhcm91bmQuIFBsYWNlIGhpbSBpbiB0aGUgbWlkZGxlIG9mIHRoZSBzY3JlZW4uXHJcbiAgICAvL3RoaXMuZW1wdHlHbGFzcyA9IHRoaXMuYWRkLnNwcml0ZSh3aWR0aCAvIDQsIGhlaWdodCAvIDIsICdlbXB0eWdsYXNzJyk7XHJcbiAgICAvL3RoaXMuZmlsbGVkZ2xhc3MxID0gdGhpcy5hZGQuc3ByaXRlKHdpZHRoIC8gNCwgaGVpZ2h0IC8gMiwgJ2ZpbGxlZGdsYXNzMScpO1xyXG4gICAgLy90aGlzLmZpbGxlZGdsYXNzMiA9IHRoaXMuYWRkLnNwcml0ZSh3aWR0aCAvIDQsIGhlaWdodCAvIDIsICdmaWxsZWRnbGFzczInKTtcclxuXHJcbiAgICAvL3RoaXMuYm91cmJvbiA9IHRoaXMuYWRkLnNwcml0ZSh3aWR0aCAvIDgsIGhlaWdodCAvIDQsICdjYW5lbGxla25pZmUnKS5zZXRJbnRlcmFjdGl2ZSgpO1xyXG4gICAgLy90aGlzLmJvdXJib24ub24oJ3BvaW50ZXJkb3duJywgdGhpcy5jYWxsYmFjayApO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKGBnbGFzcyB4OiAke3dpZHRoIC8gNH1gKTtcclxuICAgIGNvbnNvbGUubG9nKGBnbGFzcyB5OiAke2hlaWdodCAvIDJ9YCk7XHJcblxyXG4gICAgdGhpcy5ib3R0bGUgPSB0aGlzLmFkZC5zcHJpdGUod2lkdGggLyAyLCBoZWlnaHQgLyAyLCB0aGlzLmJvdHRsZU5hbWUpLnNldEludGVyYWN0aXZlKCk7XHJcbiAgICB0aGlzLmJvdHRsZS5zZXRTY2FsZSgwLjYpO1xyXG4gICAgLy9jb25zb2xlLmxvZyh0aGlzLmVtcHR5R2xhc3MueCk7XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLmJvdHRsZS5kaXNwbGF5SGVpZ2h0KTtcclxuICAgIC8vdGhpcy5ib3R0bGUuc2V0UG9zaXRpb24odGhpcy5lbXB0eUdsYXNzLnggKyB0aGlzLmJvdHRsZS5kaXNwbGF5SGVpZ2h0IC8gNCk7XHJcbiAgICAvL3RoaXMuYm90dGxlLnNldFNjYWxlKDAuNSk7XHJcblxyXG4gICAgdGhpcy5ib3R0bGUub24oJ3BvaW50ZXJvdmVyJywgKCkgPT4ge1xyXG4gICAgICB0aGlzLmJvdHRsZS5zZXRUaW50KDB4Y2NjY2NjKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuYm90dGxlLm9uKCdwb2ludGVyb3V0JywgKCkgPT4ge1xyXG4gICAgICB0aGlzLmJvdHRsZS5jbGVhclRpbnQoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuYm90dGxlLm9uKCdwb2ludGVyZG93bicsICgpID0+IHtcclxuICAgICAgdGhpcy5zaGFrZUNvdW50Kys7XHJcbiAgICAgIGlmICh0aGlzLnNoYWtlQ291bnQgPiA3KSB7XHJcbiAgICAgICAgdGhpcy5zaGFrZUNvdW50ID0gNztcclxuICAgICAgfVxyXG4gICAgICAvL3RoaXMuYm90dGxlLnNldFRleHR1cmUoYHNoYWtlciR7dGhpcy5zaGFrZUNvdW50fWApO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLmlucHV0LnNldERyYWdnYWJsZSh0aGlzLmJvdHRsZSk7XHJcblxyXG4gICAgdGhpcy5pbnB1dC5vbignZHJhZ3N0YXJ0JywgKHBvaW50ZXIsIGdhbWVPYmplY3QpID0+IHtcclxuICAgICAgZ2FtZU9iamVjdC5zZXRUaW50KDB4OTk5OTk5KTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIFRoaXMgaXMgYSBuaWNlIGhlbHBlciBQaGFzZXIgcHJvdmlkZXMgdG8gY3JlYXRlIGxpc3RlbmVycyBmb3Igc29tZSBvZiB0aGUgbW9zdCBjb21tb24ga2V5cy5cclxuICAgIHRoaXMuY3Vyc29yS2V5cyA9IHRoaXMuaW5wdXQua2V5Ym9hcmQuY3JlYXRlQ3Vyc29yS2V5cygpO1xyXG5cclxuICAgIHRoaXMudGV4dDEgPSB0aGlzLmFkZC50ZXh0KDUwLCAxMCwgJycsIHsgY29sb3I6ICcjMDBmZjAwJyB9KTtcclxuICAgIHRoaXMudGV4dDIgPSB0aGlzLmFkZC50ZXh0KDUwLCAzMCwgJycsIHsgY29sb3I6ICcjMDBmZjAwJyB9KTtcclxuICAgIHRoaXMudGV4dDMgPSB0aGlzLmFkZC50ZXh0KDUwLCA2MCwgJycsIHsgY29sb3I6ICcjMDBmZjAwJyB9KTtcclxuICAgIHRoaXMudGV4dDQgPSB0aGlzLmFkZC50ZXh0KDUwLCA5MCwgJycsIHsgY29sb3I6ICcjMDBmZjAwJyB9KTtcclxuICAgIHRoaXMudGV4dDUgPSB0aGlzLmFkZC50ZXh0KDUwLCAxMjAsICcnLCB7IGNvbG9yOiAnIzAwZmYwMCcgfSk7XHJcblxyXG4gICAgdGhpcy5ib3R0bGUuc2V0RGVwdGgoMSk7XHJcblxyXG4gICAgbmV3IFNjZW5lQnV0dG9uKHRoaXMsIHdpZHRoLTUwLCA1MCwgXCJYXCIsICgpID0+eyB0aGlzLm9uRmluaXNoKGZhbHNlKTsgdGhpcy5zY2VuZS5zdG9wKCk7fSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdXBkYXRlKCk6IHZvaWQge1xyXG4gICAgLy8gRXZlcnkgZnJhbWUsIHdlIGNyZWF0ZSBhIG5ldyB2ZWxvY2l0eSBmb3IgdGhlIHNwcml0ZSBiYXNlZCBvbiB3aGF0IGtleXMgdGhlIHBsYXllciBpcyBob2xkaW5nIGRvd24uXHJcbiAgICBpZiAodGhpcy5uID4gdGhpcy5udGhyZXNob2xkICYmIHRoaXMuc2hha2VDb3VudCA8PSA3KSB7XHJcbiAgICAgIHRoaXMubiA9IDA7XHJcbiAgICAgIHRoaXMuc2hha2VDb3VudCsrO1xyXG4gICAgICB0aGlzLnRleHQ0LnNldFRleHQoYG4gJHt0aGlzLm59ICR7dGhpcy5udGhyZXNob2xkfWApO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuc2hha2VDb3VudCAlIDIgPT0gMCkge1xyXG4gICAgICB0aGlzLmJvdHRsZS5zZXRUZXh0dXJlKGBzaGFrZXIke3RoaXMuc2hha2VDb3VudCAvIDJ9YCk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5zaGFrZUNvdW50ID4gNSAmJiAhdGhpcy50cmFuc2l0aW9uaW5nKSB7XHJcbiAgICAgIHRoaXMudHJhbnNpdGlvbmluZyA9IHRydWU7XHJcbiAgICAgIGRvY3VtZW50LmNvb2tpZSA9IGBzaGFrZT0xYDtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zY2VuZS5zdG9wKCk7XHJcbiAgICAgICAgdGhpcy5vbkZpbmlzaCh0cnVlKTtcclxuICAgICAgfSwgNzUwKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRVc2VyQWdlbnQoKTogc3RyaW5nIHtcclxuICAgIC8vIChBKSBCUkVBSyBVU0VSIEFHRU5UIERPV05cclxuICAgIGNvbnNvbGUubG9nKG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKSk7XHJcbiAgICBjb25zdCBpc01vYmlsZSA9IG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5tYXRjaCgvbW9iaWxlL2kpLFxyXG4gICAgICBpc1RhYmxldCA9IG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5tYXRjaCgvdGFibGV0L2kpLFxyXG4gICAgICBpc0FuZHJvaWQgPSBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkubWF0Y2goL2FuZHJvaWQvaSksXHJcbiAgICAgIGlzaVBob25lID0gbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLm1hdGNoKC9pcGhvbmUvaSksXHJcbiAgICAgIGlzaVBhZCA9IG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5tYXRjaCgvaXBhZC9pKTtcclxuXHJcbiAgICAvLyAoQikgREVURUNURUQgREVWSUNFIFRZUEVcclxuICAgIGlmIChpc0FuZHJvaWQpIHtcclxuICAgICAgcmV0dXJuICdBbmRyb2lkJztcclxuICAgIH0gZWxzZSBpZiAoaXNpUGhvbmUgfHwgaXNpUGFkKSB7XHJcbiAgICAgIHJldHVybiAnQXBwbGUnO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuICdOb3BlJztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBjYWxsQXBwbGUoKTogdm9pZCB7XHJcbiAgICB0cnkge1xyXG4gICAgICBEZXZpY2VNb3Rpb25FdmVudC5yZXF1ZXN0UGVybWlzc2lvbigpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgdGhpcy50ZXh0MS5zZXRUZXh0KHJlc3BvbnNlKTtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignZGV2aWNlbW90aW9uJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhldmVudCk7XHJcbiAgICAgICAgICBpZiAoZXZlbnQuYWNjZWxlcmF0aW9uLnggPCB0aGlzLnRocmVzaG9sZCAqIC0xIHx8IGV2ZW50LmFjY2VsZXJhdGlvbi54ID4gdGhpcy50aHJlc2hvbGQpIHtcclxuICAgICAgICAgICAgdGhpcy5uKys7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKGV2ZW50LmFjY2VsZXJhdGlvbi55IDwgdGhpcy50aHJlc2hvbGQgKiAtMSB8fCBldmVudC5hY2NlbGVyYXRpb24ueSA+IHRoaXMudGhyZXNob2xkKSB7XHJcbiAgICAgICAgICAgIHRoaXMubisrO1xyXG4gICAgICAgICAgfSBlbHNlIGlmIChldmVudC5hY2NlbGVyYXRpb24ueiA8IHRoaXMudGhyZXNob2xkICogLTEgfHwgZXZlbnQuYWNjZWxlcmF0aW9uLnogPiB0aGlzLnRocmVzaG9sZCkge1xyXG4gICAgICAgICAgICB0aGlzLm4rKztcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAvLyB0ZXh0XHJcbiAgICAgICAgICBpZiAoZXZlbnQuYWNjZWxlcmF0aW9uLnggPCB0aGlzLm1pbngpIHtcclxuICAgICAgICAgICAgdGhpcy5taW54ID0gZXZlbnQuYWNjZWxlcmF0aW9uLng7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAoZXZlbnQuYWNjZWxlcmF0aW9uLnkgPCB0aGlzLm1pbnkpIHtcclxuICAgICAgICAgICAgdGhpcy5taW55ID0gZXZlbnQuYWNjZWxlcmF0aW9uLnk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAoZXZlbnQuYWNjZWxlcmF0aW9uLnogPCB0aGlzLm1pbnopIHtcclxuICAgICAgICAgICAgdGhpcy5taW56ID0gZXZlbnQuYWNjZWxlcmF0aW9uLno7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAoZXZlbnQuYWNjZWxlcmF0aW9uLnggPiB0aGlzLm1heHgpIHtcclxuICAgICAgICAgICAgdGhpcy5tYXh4ID0gZXZlbnQuYWNjZWxlcmF0aW9uLng7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAoZXZlbnQuYWNjZWxlcmF0aW9uLnkgPiB0aGlzLm1heHkpIHtcclxuICAgICAgICAgICAgdGhpcy5tYXh5ID0gZXZlbnQuYWNjZWxlcmF0aW9uLnk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAoZXZlbnQuYWNjZWxlcmF0aW9uLnogPiB0aGlzLm1heHopIHtcclxuICAgICAgICAgICAgdGhpcy5tYXh6ID0gZXZlbnQuYWNjZWxlcmF0aW9uLno7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB0aGlzLnRleHQxLnNldFRleHQoYHggJHt0aGlzLm1pbnh9ICR7dGhpcy5tYXh4fWApO1xyXG4gICAgICAgICAgdGhpcy50ZXh0Mi5zZXRUZXh0KGB5ICR7dGhpcy5taW55fSAke3RoaXMubWF4eX1gKTtcclxuICAgICAgICAgIHRoaXMudGV4dDMuc2V0VGV4dChgeiAke3RoaXMubWluen0gJHt0aGlzLm1heHp9YCk7XHJcbiAgICAgICAgICB0aGlzLnRleHQ0LnNldFRleHQoYG4gJHt0aGlzLm59ICR7dGhpcy5udGhyZXNob2xkfWApO1xyXG4gICAgICAgICAgdGhpcy50ZXh0NS5zZXRUZXh0KGBzaGFrZXMgJHt0aGlzLnNoYWtlQ291bnR9YCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXgpIHtcclxuICAgICAgY29uc29sZS5sb2coJ25vdCBpb3MnKTtcclxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2RldmljZW1vdGlvbicsIChldmVudCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGV2ZW50KTtcclxuICAgICAgICBpZiAoZXZlbnQuYWNjZWxlcmF0aW9uLnggPCB0aGlzLnRocmVzaG9sZCAqIC0xIHx8IGV2ZW50LmFjY2VsZXJhdGlvbi54ID4gdGhpcy50aHJlc2hvbGQpIHtcclxuICAgICAgICAgIHRoaXMubisrO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZXZlbnQuYWNjZWxlcmF0aW9uLnkgPCB0aGlzLnRocmVzaG9sZCAqIC0xIHx8IGV2ZW50LmFjY2VsZXJhdGlvbi55ID4gdGhpcy50aHJlc2hvbGQpIHtcclxuICAgICAgICAgIHRoaXMubisrO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZXZlbnQuYWNjZWxlcmF0aW9uLnogPCB0aGlzLnRocmVzaG9sZCAqIC0xIHx8IGV2ZW50LmFjY2VsZXJhdGlvbi56ID4gdGhpcy50aHJlc2hvbGQpIHtcclxuICAgICAgICAgIHRoaXMubisrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gdGV4dFxyXG4gICAgICAgIGlmIChldmVudC5hY2NlbGVyYXRpb24ueCA8IHRoaXMubWlueCkge1xyXG4gICAgICAgICAgdGhpcy5taW54ID0gZXZlbnQuYWNjZWxlcmF0aW9uLng7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChldmVudC5hY2NlbGVyYXRpb24ueSA8IHRoaXMubWlueSkge1xyXG4gICAgICAgICAgdGhpcy5taW55ID0gZXZlbnQuYWNjZWxlcmF0aW9uLnk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChldmVudC5hY2NlbGVyYXRpb24ueiA8IHRoaXMubWlueikge1xyXG4gICAgICAgICAgdGhpcy5taW56ID0gZXZlbnQuYWNjZWxlcmF0aW9uLno7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChldmVudC5hY2NlbGVyYXRpb24ueCA+IHRoaXMubWF4eCkge1xyXG4gICAgICAgICAgdGhpcy5tYXh4ID0gZXZlbnQuYWNjZWxlcmF0aW9uLng7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChldmVudC5hY2NlbGVyYXRpb24ueSA+IHRoaXMubWF4eSkge1xyXG4gICAgICAgICAgdGhpcy5tYXh5ID0gZXZlbnQuYWNjZWxlcmF0aW9uLnk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChldmVudC5hY2NlbGVyYXRpb24ueiA+IHRoaXMubWF4eikge1xyXG4gICAgICAgICAgdGhpcy5tYXh6ID0gZXZlbnQuYWNjZWxlcmF0aW9uLno7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudGV4dDEuc2V0VGV4dChgeCAke3RoaXMubWlueH0gJHt0aGlzLm1heHh9YCk7XHJcbiAgICAgICAgdGhpcy50ZXh0Mi5zZXRUZXh0KGB5ICR7dGhpcy5taW55fSAke3RoaXMubWF4eX1gKTtcclxuICAgICAgICB0aGlzLnRleHQzLnNldFRleHQoYHogJHt0aGlzLm1pbnp9ICR7dGhpcy5tYXh6fWApO1xyXG4gICAgICAgIHRoaXMudGV4dDQuc2V0VGV4dChgbiAke3RoaXMubn0gJHt0aGlzLm50aHJlc2hvbGR9YCk7XHJcbiAgICAgICAgdGhpcy50ZXh0NS5zZXRUZXh0KGBzaGFrZXMgJHt0aGlzLnNoYWtlQ291bnR9YCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuICBwdWJsaWMgY2FsbGJhY2soKTogdm9pZCB7XHJcbiAgICAvL3RoaXMudGV4dDEuc2V0VGV4dCgnQXNrZWQnKTtcclxuICAgIHRoaXMubWF4eCA9IDA7XHJcbiAgICB0aGlzLm1heHkgPSAwO1xyXG4gICAgdGhpcy5tYXh6ID0gMDtcclxuICAgIHRoaXMubWlueCA9IDA7XHJcbiAgICB0aGlzLm1pbnkgPSAwO1xyXG4gICAgdGhpcy5taW56ID0gMDtcclxuICAgIC8vaWYgKHdpbmRvdy5EZXZpY2VPcmllbnRhdGlvbkV2ZW50KSB7XHJcbiAgICAgIC8vd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2RldmljZW9yaWVudGF0aW9uJywgZGV2aWNlT3JpZW50YXRpb25IYW5kbGVyLCBmYWxzZSk7XHJcbiAgICAvL31cclxuXHJcbiAgIC8qaWYgKHdpbmRvdy5EZXZpY2VNb3Rpb25FdmVudCkge1xyXG4gICAgICB0aGlzLnRleHQyLnNldFRleHQoJ3llcycpO1xyXG4gICAgICBjb25zb2xlLmxvZygneWVzJyk7XHJcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdkZXZpY2Vtb3Rpb24nLCAoZXZlbnQpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhldmVudCk7XHJcbiAgICAgICAgaWYgKGV2ZW50LmFjY2VsZXJhdGlvbi54IDwgdGhpcy50aHJlc2hvbGQgKiAtMSB8fCBldmVudC5hY2NlbGVyYXRpb24ueCA+IHRoaXMudGhyZXNob2xkKSB7XHJcbiAgICAgICAgICB0aGlzLm4rKztcclxuICAgICAgICB9IGVsc2UgaWYgKGV2ZW50LmFjY2VsZXJhdGlvbi55IDwgdGhpcy50aHJlc2hvbGQgKiAtMSB8fCBldmVudC5hY2NlbGVyYXRpb24ueSA+IHRoaXMudGhyZXNob2xkKSB7XHJcbiAgICAgICAgICB0aGlzLm4rKztcclxuICAgICAgICB9IGVsc2UgaWYgKGV2ZW50LmFjY2VsZXJhdGlvbi56IDwgdGhpcy50aHJlc2hvbGQgKiAtMSB8fCBldmVudC5hY2NlbGVyYXRpb24ueiA+IHRoaXMudGhyZXNob2xkKSB7XHJcbiAgICAgICAgICB0aGlzLm4rKztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHRleHRcclxuICAgICAgICBpZiAoZXZlbnQuYWNjZWxlcmF0aW9uLnggPCB0aGlzLm1pbngpIHtcclxuICAgICAgICAgIHRoaXMubWlueCA9IGV2ZW50LmFjY2VsZXJhdGlvbi54O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZXZlbnQuYWNjZWxlcmF0aW9uLnkgPCB0aGlzLm1pbnkpIHtcclxuICAgICAgICAgIHRoaXMubWlueSA9IGV2ZW50LmFjY2VsZXJhdGlvbi55O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZXZlbnQuYWNjZWxlcmF0aW9uLnogPCB0aGlzLm1pbnopIHtcclxuICAgICAgICAgIHRoaXMubWlueiA9IGV2ZW50LmFjY2VsZXJhdGlvbi56O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZXZlbnQuYWNjZWxlcmF0aW9uLnggPiB0aGlzLm1heHgpIHtcclxuICAgICAgICAgIHRoaXMubWF4eCA9IGV2ZW50LmFjY2VsZXJhdGlvbi54O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZXZlbnQuYWNjZWxlcmF0aW9uLnkgPiB0aGlzLm1heHkpIHtcclxuICAgICAgICAgIHRoaXMubWF4eSA9IGV2ZW50LmFjY2VsZXJhdGlvbi55O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZXZlbnQuYWNjZWxlcmF0aW9uLnogPiB0aGlzLm1heHopIHtcclxuICAgICAgICAgIHRoaXMubWF4eiA9IGV2ZW50LmFjY2VsZXJhdGlvbi56O1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnRleHQxLnNldFRleHQoYHggJHt0aGlzLm1pbnh9ICR7dGhpcy5tYXh4fWApO1xyXG4gICAgICAgIC8vdGhpcy50ZXh0Mi5zZXRUZXh0KGB5ICR7dGhpcy5taW55fSAke3RoaXMubWF4eX1gKTtcclxuICAgICAgICB0aGlzLnRleHQzLnNldFRleHQoYHogJHt0aGlzLm1pbnp9ICR7dGhpcy5tYXh6fWApO1xyXG4gICAgICAgIHRoaXMudGV4dDQuc2V0VGV4dChgbiAke3RoaXMubn0gJHt0aGlzLm50aHJlc2hvbGR9YCk7XHJcbiAgICAgICAgdGhpcy50ZXh0NS5zZXRUZXh0KGBzaGFrZXMgJHt0aGlzLnNoYWtlQ291bnR9YCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy50ZXh0Mi5zZXRUZXh0KCdubycpO1xyXG4gICAgICBjb25zb2xlLmxvZygnbm8nKTtcclxuICAgIH0qL1xyXG4gICAgdGhpcy5jYWxsQXBwbGUoKTtcclxuICAgIC8vXHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IElucHV0LCBHYW1lT2JqZWN0cyB9IGZyb20gJ3BoYXNlcic7XHJcbmltcG9ydCB7IGdldEdhbWVXaWR0aCwgZ2V0R2FtZUhlaWdodCwgZHJpbmtUb0NvbG9yTWFwIH0gZnJvbSAnLi4vaGVscGVycyc7XHJcbmltcG9ydCB7IE1lbnVCdXR0b24gfSBmcm9tICcuLi91aS9tZW51LWJ1dHRvbic7XHJcblxyXG5jb25zdCBzY2VuZUNvbmZpZzogUGhhc2VyLlR5cGVzLlNjZW5lcy5TZXR0aW5nc0NvbmZpZyA9IHtcclxuICBhY3RpdmU6IGZhbHNlLFxyXG4gIHZpc2libGU6IGZhbHNlLFxyXG4gIGtleTogJ1N1Y2Nlc3MnLFxyXG59O1xyXG5jbGFzcyBHYW1lU2NlbmVBcmd1bWVudHMge1xyXG4gIHB1YmxpYyBvbkZpbmlzaDogRnVuY3Rpb247XHJcbn1cclxuZXhwb3J0IGNsYXNzIFN1Y2Nlc3NTY2VuZSBleHRlbmRzIFBoYXNlci5TY2VuZSB7XHJcbiAgcHVibGljIHNwZWVkID0gMjAwO1xyXG5cclxuICBwdWJsaWMgcmVzdWx0czogQXJyYXk8bnVtYmVyPjtcclxuICBwcml2YXRlIHRyYW5zaXRpb25pbmcgPSBmYWxzZTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcihzY2VuZUNvbmZpZyk7XHJcbiAgfVxyXG4gIHB1YmxpYyBvbkZpbmlzaDogRnVuY3Rpb247XHJcbiAgcHVibGljIHRleHQxOiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dDtcclxuICBwdWJsaWMgdGV4dDI6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0O1xyXG4gIHB1YmxpYyB0ZXh0MzogUGhhc2VyLkdhbWVPYmplY3RzLlRleHQ7XHJcbiAgcHVibGljIHRleHQ0OiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dDtcclxuICBwdWJsaWMgdGV4dDU6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0O1xyXG4gIHB1YmxpYyBjbGlja3MgPSAwO1xyXG4gIHB1YmxpYyBpY2VMZXZlbCA9IDA7XHJcblxyXG4gIHB1YmxpYyBpbml0KGRhdGE6IEdhbWVTY2VuZUFyZ3VtZW50cyk6IHZvaWQge1xyXG4gICAgdGhpcy5vbkZpbmlzaCA9IGRhdGEub25GaW5pc2g7XHJcbiAgfVxyXG5cclxuXHJcbiAgcHVibGljIGNyZWF0ZSgpOiB2b2lkIHtcclxuICAgIGNvbnNvbGUubG9nKCdTdWNjZXNzJyk7XHJcbiAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IHRoaXMuc3lzLmdhbWUuY2FudmFzO1xyXG4gICAgdGhpcy50cmFuc2l0aW9uaW5nID0gZmFsc2U7XHJcbiAgICAvLyBBZGQgYSBwbGF5ZXIgc3ByaXRlIHRoYXQgY2FuIGJlIG1vdmVkIGFyb3VuZC4gUGxhY2UgaGltIGluIHRoZSBtaWRkbGUgb2YgdGhlIHNjcmVlbi5cclxuICAgIC8vdGhpcy52ZXJtb3V0aFRvcE9ubHkgPSB0aGlzLmFkZC5zcHJpdGUod2lkdGggLyAyLCBoZWlnaHQgLyAyICsgMzAwLCAndmVybW91dGh0b3Bvbmx5Jyk7XHJcbiAgICB0aGlzLmFkZC50ZXh0KHdpZHRoLzgsIChoZWlnaHQvNCkgLSAzMCwgIGBZb3UgZGlkIGl0ISBIZXJlJ3MgeW91ciBjb3B5IG9mIFxcbnRoZSByZWNlaXB0OlxyXG4gICAgRHJpbmsgLSAkMTMuMDlcclxuICAgIERyaW5rIC0gJDI0LjE1XHJcbiAgICBEcmluayAtICQxMi4xNVxyXG4gICAgRHJpbmsgLSAkNy4yNVxyXG4gICAgYCwgeyBjb2xvcjogJyNmZmZmZmYnIH0pO1xyXG4gIH1cclxuXHJcbiAgLy9wdWJsaWMgdXBkYXRlKCk6IHZvaWQge31cclxufVxyXG4iLCJpbXBvcnQgeyBJbnB1dCwgR2FtZU9iamVjdHMgfSBmcm9tICdwaGFzZXInO1xyXG5pbXBvcnQgeyBnZXRHYW1lV2lkdGgsIGdldEdhbWVIZWlnaHQsIGRyaW5rVG9Db2xvck1hcCB9IGZyb20gJy4uL2hlbHBlcnMnO1xyXG5pbXBvcnQgeyBTY2VuZUJ1dHRvbiB9IGZyb20gJy4uL3VpL3NjZW5lLWJ1dHRvbic7XHJcblxyXG5jb25zdCBzY2VuZUNvbmZpZzogUGhhc2VyLlR5cGVzLlNjZW5lcy5TZXR0aW5nc0NvbmZpZyA9IHtcclxuICBhY3RpdmU6IGZhbHNlLFxyXG4gIHZpc2libGU6IGZhbHNlLFxyXG4gIGtleTogJ1Zlcm1vdXRoJyxcclxufTtcclxuXHJcbmNsYXNzIEdhbWVTY2VuZUFyZ3VtZW50cyB7XHJcbiAgcHVibGljIG9uRmluaXNoOiBGdW5jdGlvbjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFZlcm1vdXRoU2NlbmUgZXh0ZW5kcyBQaGFzZXIuU2NlbmUge1xyXG4gIHByaXZhdGUgdmVybW91dGhUb3A6IFBoYXNlci5HYW1lT2JqZWN0cy5TcHJpdGU7XHJcbiAgcHJpdmF0ZSB2ZXJtb3V0aFRvcE9ubHk6IFBoYXNlci5HYW1lT2JqZWN0cy5TcHJpdGU7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoc2NlbmVDb25maWcpO1xyXG4gIH1cclxuICBwdWJsaWMgdGV4dDE6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0O1xyXG4gIHB1YmxpYyB0ZXh0MjogUGhhc2VyLkdhbWVPYmplY3RzLlRleHQ7XHJcbiAgcHVibGljIHRleHQzOiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dDtcclxuICBwdWJsaWMgdGV4dDQ6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0O1xyXG4gIHB1YmxpYyB0ZXh0NTogUGhhc2VyLkdhbWVPYmplY3RzLlRleHQ7XHJcbiAgcHVibGljIHVuc2NyZXdlZCA9IDA7XHJcbiAgcHJpdmF0ZSB0cmFuc2l0aW9uaW5nID0gZmFsc2U7XHJcblxyXG4gIHB1YmxpYyBvbkZpbmlzaDogRnVuY3Rpb247XHJcblxyXG4gIHB1YmxpYyBpbml0KGRhdGE6IEdhbWVTY2VuZUFyZ3VtZW50cyk6IHZvaWR7XHJcbiAgICB0aGlzLm9uRmluaXNoID0gZGF0YS5vbkZpbmlzaDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjcmVhdGUoKTogdm9pZCB7XHJcbiAgICBjb25zb2xlLmxvZygnVmVybW91dGgnKTtcclxuICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCB9ID0gdGhpcy5zeXMuZ2FtZS5jYW52YXM7XHJcbiAgICB0aGlzLnVuc2NyZXdlZCA9IDA7XHJcbiAgICB0aGlzLnRyYW5zaXRpb25pbmcgPSBmYWxzZTtcclxuICAgIC8vIEFkZCBhIHBsYXllciBzcHJpdGUgdGhhdCBjYW4gYmUgbW92ZWQgYXJvdW5kLiBQbGFjZSBoaW0gaW4gdGhlIG1pZGRsZSBvZiB0aGUgc2NyZWVuLlxyXG4gICAgdGhpcy52ZXJtb3V0aFRvcCA9IHRoaXMuYWRkLnNwcml0ZSh3aWR0aCAvIDIsIGhlaWdodCAvIDIgKyAzMDAsICd2ZXJtb3V0aHRvcCcpO1xyXG4gICAgdGhpcy52ZXJtb3V0aFRvcE9ubHkgPSB0aGlzLmFkZC5zcHJpdGUod2lkdGggLyAyLCBoZWlnaHQgLyAyICsgMzAwLCAndmVybW91dGh0b3Bvbmx5Jyk7XHJcblxyXG4gICAgdGhpcy5pbnB1dC5vbigncG9pbnRlcnVwJywgKCkgPT4ge1xyXG4gICAgICB0aGlzLnRleHQxLnNldFRleHQoYM64OiAke3RoaXMuaW5wdXQuYWN0aXZlUG9pbnRlci5nZXRBbmdsZSgpfWApO1xyXG4gICAgICB0aGlzLnRleHQyLnNldFRleHQoYHg6ICR7dGhpcy5pbnB1dC5hY3RpdmVQb2ludGVyLmdldERpc3RhbmNlWCgpfWApO1xyXG4gICAgICB0aGlzLnRleHQzLnNldFRleHQoYHk6ICR7dGhpcy5pbnB1dC5hY3RpdmVQb2ludGVyLmdldERpc3RhbmNlWSgpfWApO1xyXG4gICAgICB0aGlzLnRleHQ0LnNldFRleHQoYGQ6ICR7dGhpcy5pbnB1dC5hY3RpdmVQb2ludGVyLmdldERpc3RhbmNlKCl9YCk7XHJcblxyXG4gICAgICAvLyBjaGVjayBpZiB0aGluZyBzaG91bGQgdW5zY3Jld1xyXG4gICAgICBpZiAoXHJcbiAgICAgICAgdGhpcy5pbnB1dC5hY3RpdmVQb2ludGVyLmdldERpc3RhbmNlKCkgPj0gMTUwICYmXHJcbiAgICAgICAgdGhpcy5pbnB1dC5hY3RpdmVQb2ludGVyLmdldEFuZ2xlKCkgPD0gMC4zMiAmJlxyXG4gICAgICAgIHRoaXMuaW5wdXQuYWN0aXZlUG9pbnRlci5nZXRBbmdsZSgpID49IC0wLjUyICYmXHJcbiAgICAgICAgdGhpcy51bnNjcmV3ZWQgPCAzXHJcbiAgICAgICkge1xyXG4gICAgICAgIHRoaXMudGV4dDUuc2V0VGV4dChgdW5zY3JldzogJHsrK3RoaXMudW5zY3Jld2VkfWApO1xyXG4gICAgICAgIHRoaXMudmVybW91dGhUb3BPbmx5LnNldFkodGhpcy52ZXJtb3V0aFRvcE9ubHkueSAtIDMwKTtcclxuICAgICAgICB0aGlzLnZlcm1vdXRoVG9wT25seS5mbGlwWCA9ICF0aGlzLnZlcm1vdXRoVG9wT25seS5mbGlwWDtcclxuICAgICAgICBpZiAodGhpcy51bnNjcmV3ZWQgPT0gMyAmJiAhdGhpcy50cmFuc2l0aW9uaW5nKSB7XHJcbiAgICAgICAgICB0aGlzLnRyYW5zaXRpb25pbmcgPSB0cnVlO1xyXG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2NlbmUuc3RvcCgpO1xyXG4gICAgICAgICAgICB0aGlzLnNjZW5lLmxhdW5jaCgnUG91cicsIHsgQm90dGxlU3ByaXRlTmFtZTogJ1Zlcm1vdXRoJywgb25GaW5pc2g6IHRoaXMub25GaW5pc2ggfSk7XHJcbiAgICAgICAgICB9LCA1MDApO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIGlmIChcclxuICAgICAgICB0aGlzLmlucHV0LmFjdGl2ZVBvaW50ZXIuZ2V0RGlzdGFuY2UoKSA+PSAxNTAgJiZcclxuICAgICAgICAodGhpcy5pbnB1dC5hY3RpdmVQb2ludGVyLmdldEFuZ2xlKCkgPD0gLTIuNSB8fCB0aGlzLmlucHV0LmFjdGl2ZVBvaW50ZXIuZ2V0QW5nbGUoKSA+PSAyLjUpICYmXHJcbiAgICAgICAgdGhpcy51bnNjcmV3ZWQgPiAwXHJcbiAgICAgICkge1xyXG4gICAgICAgIHRoaXMudGV4dDUuc2V0VGV4dChgdW5zY3JldzogJHstLXRoaXMudW5zY3Jld2VkfWApO1xyXG4gICAgICAgIHRoaXMudmVybW91dGhUb3BPbmx5LnNldFkodGhpcy52ZXJtb3V0aFRvcE9ubHkueSArIDMwKTtcclxuICAgICAgICB0aGlzLnZlcm1vdXRoVG9wT25seS5mbGlwWCA9ICF0aGlzLnZlcm1vdXRoVG9wT25seS5mbGlwWDtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy50ZXh0MSA9IHRoaXMuYWRkLnRleHQoMTAsIDEwLCAnJywgeyBjb2xvcjogJyMwMGZmMDAnIH0pO1xyXG4gICAgdGhpcy50ZXh0MiA9IHRoaXMuYWRkLnRleHQoMTAsIDI1LCAnJywgeyBjb2xvcjogJyMwMGZmMDAnIH0pO1xyXG4gICAgdGhpcy50ZXh0MyA9IHRoaXMuYWRkLnRleHQoMTAsIDQwLCAnJywgeyBjb2xvcjogJyMwMGZmMDAnIH0pO1xyXG4gICAgdGhpcy50ZXh0NCA9IHRoaXMuYWRkLnRleHQoMTAsIDU1LCAnJywgeyBjb2xvcjogJyMwMGZmMDAnIH0pO1xyXG4gICAgdGhpcy50ZXh0NSA9IHRoaXMuYWRkLnRleHQoMTAsIDcwLCAnJywgeyBjb2xvcjogJyMwMGZmMDAnIH0pO1xyXG4gICAgbmV3IFNjZW5lQnV0dG9uKHRoaXMsIHdpZHRoLTUwLCA1MCwgXCJYXCIsICgpID0+eyB0aGlzLm9uRmluaXNoKGZhbHNlKTsgdGhpcy5zY2VuZS5zdG9wKCk7fSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdXBkYXRlKCk6IHZvaWQge31cclxufVxyXG4iLCJpbXBvcnQgKiBhcyBQaGFzZXIgZnJvbSAncGhhc2VyJztcclxuXHJcbmV4cG9ydCBjbGFzcyBNZW51QnV0dG9uIGV4dGVuZHMgUGhhc2VyLkdhbWVPYmplY3RzLlJlY3RhbmdsZSB7XHJcbiAgcHVibGljIGxhYmVsOiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dDtcclxuICBwdWJsaWMgcGFkZGluZyA9IDEwO1xyXG4gIHB1YmxpYyBtaW5pbXVtV2lkdGggPSAyMDA7XHJcbiAgcHVibGljIG1pbmltdW1IZWlnaHQgPSA1MDtcclxuICBjb25zdHJ1Y3RvcihzY2VuZTogUGhhc2VyLlNjZW5lLCB4OiBudW1iZXIsIHk6IG51bWJlciwgdGV4dDogc3RyaW5nLCBvbkNsaWNrPzogKCkgPT4gdm9pZCkge1xyXG4gICAgc3VwZXIoc2NlbmUsIHgsIHkpO1xyXG4gICAgc2NlbmUuYWRkLmV4aXN0aW5nKHRoaXMpO1xyXG4gICAgdGhpcy5zZXRPcmlnaW4oMCwgMCk7XHJcblxyXG4gICAgdGhpcy5sYWJlbCA9IHNjZW5lLmFkZFxyXG4gICAgICAudGV4dCh4ICsgdGhpcy5wYWRkaW5nLCB5ICsgdGhpcy5wYWRkaW5nLCB0ZXh0KVxyXG4gICAgICAuc2V0Rm9udFNpemUoMTgpXHJcbiAgICAgIC5zZXRBbGlnbignY2VudGVyJyk7XHJcblxyXG4gICAgY29uc3QgbGFiZWxXaWR0aCA9IHRoaXMubGFiZWwud2lkdGggKyB0aGlzLnBhZGRpbmc7XHJcbiAgICBjb25zdCBsYWJlbEhlaWdodCA9IHRoaXMubGFiZWwuaGVpZ2h0ICsgdGhpcy5wYWRkaW5nO1xyXG5cclxuICAgIHRoaXMud2lkdGggPSBsYWJlbFdpZHRoID49IHRoaXMubWluaW11bVdpZHRoID8gbGFiZWxXaWR0aCA6IHRoaXMubWluaW11bVdpZHRoO1xyXG4gICAgdGhpcy5oZWlnaHQgPSBsYWJlbEhlaWdodCA+PSB0aGlzLm1pbmltdW1IZWlnaHQgPyBsYWJlbEhlaWdodCA6IHRoaXMubWluaW11bUhlaWdodDtcclxuXHJcbiAgICB0aGlzLnNldEludGVyYWN0aXZlKHsgdXNlSGFuZEN1cnNvcjogdHJ1ZSB9KVxyXG4gICAgICAub24oJ3BvaW50ZXJvdmVyJywgdGhpcy5lbnRlck1lbnVCdXR0b25Ib3ZlclN0YXRlKVxyXG4gICAgICAub24oJ3BvaW50ZXJvdXQnLCB0aGlzLmVudGVyTWVudUJ1dHRvblJlc3RTdGF0ZSlcclxuICAgICAgLm9uKCdwb2ludGVyZG93bicsIHRoaXMuZW50ZXJNZW51QnV0dG9uQWN0aXZlU3RhdGUpXHJcbiAgICAgIC5vbigncG9pbnRlcnVwJywgdGhpcy5lbnRlck1lbnVCdXR0b25Ib3ZlclN0YXRlKTtcclxuXHJcbiAgICBpZiAob25DbGljaykge1xyXG4gICAgICB0aGlzLm9uKCdwb2ludGVydXAnLCBvbkNsaWNrKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmVudGVyTWVudUJ1dHRvblJlc3RTdGF0ZSgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBlbnRlck1lbnVCdXR0b25Ib3ZlclN0YXRlKCkge1xyXG4gICAgdGhpcy5sYWJlbC5zZXRDb2xvcignIzAwMDAwMCcpO1xyXG4gICAgdGhpcy5zZXRGaWxsU3R5bGUoMHg4ODg4ODgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBlbnRlck1lbnVCdXR0b25SZXN0U3RhdGUoKSB7XHJcbiAgICB0aGlzLmxhYmVsLnNldENvbG9yKCcjRkZGRkZGJyk7XHJcbiAgICB0aGlzLnNldEZpbGxTdHlsZSgweDg4ODg4OCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGVudGVyTWVudUJ1dHRvbkFjdGl2ZVN0YXRlKCkge1xyXG4gICAgdGhpcy5sYWJlbC5zZXRDb2xvcignI0JCQkJCQicpO1xyXG4gICAgdGhpcy5zZXRGaWxsU3R5bGUoMHg0NDQ0NDQpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgKiBhcyBQaGFzZXIgZnJvbSAncGhhc2VyJztcclxuZXhwb3J0IGNsYXNzIE90aGVyR2xhc3NCdXR0b24gZXh0ZW5kcyBQaGFzZXIuR2FtZU9iamVjdHMuUmVjdGFuZ2xlIHtcclxuICBwdWJsaWMgbGFiZWw6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0O1xyXG4gIHB1YmxpYyBwYWRkaW5nID0gNjtcclxuICBwdWJsaWMgbWluaW11bVdpZHRoID0gMjA7XHJcbiAgcHVibGljIG1pbmltdW1IZWlnaHQgPSAyMDtcclxuICBwdWJsaWMgb2d0ZXh0OiBzdHJpbmc7XHJcbiAgcHVibGljIG9uQ2xpY2s6IEZ1bmN0aW9uO1xyXG4gIGNvbnN0cnVjdG9yKHNjZW5lOiBQaGFzZXIuU2NlbmUsIHg6IG51bWJlciwgeTogbnVtYmVyLCB0ZXh0OiBzdHJpbmcsIG9uQ2xpY2s/OiAoKSA9PiB2b2lkKSB7XHJcbiAgICBzdXBlcihzY2VuZSwgeCwgeSk7XHJcbiAgICBzY2VuZS5hZGQuZXhpc3RpbmcodGhpcyk7XHJcbiAgICB0aGlzLnNldE9yaWdpbigwLCAwKTtcclxuICAgIHRoaXMub2d0ZXh0ID0gdGV4dDtcclxuXHJcbiAgICB0aGlzLmxhYmVsID0gc2NlbmUuYWRkXHJcbiAgICAgIC50ZXh0KHggKyB0aGlzLnBhZGRpbmcsIHkgKyB0aGlzLnBhZGRpbmcsIHRleHQpXHJcbiAgICAgIC5zZXRGb250U2l6ZSgxNClcclxuICAgICAgLnNldEFsaWduKCdjZW50ZXInKTtcclxuXHJcbiAgICBjb25zdCBsYWJlbFdpZHRoID0gdGhpcy5sYWJlbC53aWR0aCArIHRoaXMucGFkZGluZztcclxuICAgIGNvbnN0IGxhYmVsSGVpZ2h0ID0gdGhpcy5sYWJlbC5oZWlnaHQgKyB0aGlzLnBhZGRpbmc7XHJcblxyXG4gICAgdGhpcy53aWR0aCA9IGxhYmVsV2lkdGggPj0gdGhpcy5taW5pbXVtV2lkdGggPyBsYWJlbFdpZHRoIDogdGhpcy5taW5pbXVtV2lkdGg7XHJcbiAgICB0aGlzLmhlaWdodCA9IGxhYmVsSGVpZ2h0ID49IHRoaXMubWluaW11bUhlaWdodCA/IGxhYmVsSGVpZ2h0IDogdGhpcy5taW5pbXVtSGVpZ2h0O1xyXG5cclxuICAgIHRoaXMuc2V0SW50ZXJhY3RpdmUoeyB1c2VIYW5kQ3Vyc29yOiB0cnVlIH0pXHJcbiAgICAgIC8vLm9uKCdwb2ludGVyb3ZlcicsIHRoaXMuZW50ZXJNZW51QnV0dG9uSG92ZXJTdGF0ZSlcclxuICAgICAgLy8ub24oJ3BvaW50ZXJvdXQnLCB0aGlzLmVudGVyTWVudUJ1dHRvblJlc3RTdGF0ZSlcclxuICAgICAgLm9uKCdwb2ludGVyZG93bicsIHRoaXMuZW50ZXJNZW51QnV0dG9uQWN0aXZlU3RhdGUpXHJcbiAgICAgIC5vbigncG9pbnRlcnVwJywgdGhpcy5lbnRlck1lbnVCdXR0b25Ib3ZlclN0YXRlKTtcclxuXHJcbiAgICBpZiAob25DbGljaykge1xyXG4gICAgICB0aGlzLm9uKCdwb2ludGVydXAnLCBvbkNsaWNrKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmVudGVyTWVudUJ1dHRvblJlc3RTdGF0ZSgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBlbnRlck1lbnVCdXR0b25Ib3ZlclN0YXRlKCkge1xyXG4gICAgdGhpcy5sYWJlbC5zZXRDb2xvcignIzAwMDAwMCcpO1xyXG4gICAgdGhpcy5zZXRGaWxsU3R5bGUoMHg4ODg4ODgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBlbnRlck1lbnVCdXR0b25SZXN0U3RhdGUoKSB7XHJcbiAgICB0aGlzLmxhYmVsLnNldENvbG9yKCcjRkZGRkZGJyk7XHJcbiAgICB0aGlzLnNldEZpbGxTdHlsZSgweDg4ODg4OCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGVudGVyTWVudUJ1dHRvbkFjdGl2ZVN0YXRlKCkge1xyXG4gICAgdGhpcy5sYWJlbC5zZXRDb2xvcignI0JCQkJCQicpO1xyXG4gICAgdGhpcy5zZXRGaWxsU3R5bGUoMHg0NDQ0NDQpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgKiBhcyBQaGFzZXIgZnJvbSAncGhhc2VyJztcclxuXHJcbmV4cG9ydCBjbGFzcyBTY2VuZUJ1dHRvbiBleHRlbmRzIFBoYXNlci5HYW1lT2JqZWN0cy5SZWN0YW5nbGUge1xyXG4gIHB1YmxpYyBsYWJlbDogUGhhc2VyLkdhbWVPYmplY3RzLlRleHQ7XHJcbiAgcHVibGljIHBhZGRpbmcgPSAxMDtcclxuICBwdWJsaWMgbWluaW11bVdpZHRoID0gNTA7XHJcbiAgcHVibGljIG1pbmltdW1IZWlnaHQgPSA1MDtcclxuICBjb25zdHJ1Y3RvcihzY2VuZTogUGhhc2VyLlNjZW5lLCB4OiBudW1iZXIsIHk6IG51bWJlciwgdGV4dDogc3RyaW5nLCBvbkNsaWNrPzogKCkgPT4gdm9pZCkge1xyXG4gICAgc3VwZXIoc2NlbmUsIHgsIHkpO1xyXG4gICAgc2NlbmUuYWRkLmV4aXN0aW5nKHRoaXMpO1xyXG4gICAgdGhpcy5zZXRPcmlnaW4oMCwgMCk7XHJcblxyXG4gICAgdGhpcy5sYWJlbCA9IHNjZW5lLmFkZFxyXG4gICAgICAudGV4dCh4ICsgdGhpcy5wYWRkaW5nLCB5ICsgdGhpcy5wYWRkaW5nLCB0ZXh0KVxyXG4gICAgICAuc2V0Rm9udFNpemUoMTgpXHJcbiAgICAgIC5zZXRBbGlnbignY2VudGVyJyk7XHJcblxyXG4gICAgY29uc3QgbGFiZWxXaWR0aCA9IHRoaXMubGFiZWwud2lkdGggKyB0aGlzLnBhZGRpbmc7XHJcbiAgICBjb25zdCBsYWJlbEhlaWdodCA9IHRoaXMubGFiZWwuaGVpZ2h0ICsgdGhpcy5wYWRkaW5nO1xyXG5cclxuICAgIHRoaXMud2lkdGggPSBsYWJlbFdpZHRoID49IHRoaXMubWluaW11bVdpZHRoID8gbGFiZWxXaWR0aCA6IHRoaXMubWluaW11bVdpZHRoO1xyXG4gICAgdGhpcy5oZWlnaHQgPSBsYWJlbEhlaWdodCA+PSB0aGlzLm1pbmltdW1IZWlnaHQgPyBsYWJlbEhlaWdodCA6IHRoaXMubWluaW11bUhlaWdodDtcclxuXHJcbiAgICB0aGlzLnNldEludGVyYWN0aXZlKHsgdXNlSGFuZEN1cnNvcjogdHJ1ZSB9KVxyXG4gICAgICAub24oJ3BvaW50ZXJvdmVyJywgdGhpcy5lbnRlck1lbnVCdXR0b25Ib3ZlclN0YXRlKVxyXG4gICAgICAub24oJ3BvaW50ZXJvdXQnLCB0aGlzLmVudGVyTWVudUJ1dHRvblJlc3RTdGF0ZSlcclxuICAgICAgLm9uKCdwb2ludGVyZG93bicsIHRoaXMuZW50ZXJNZW51QnV0dG9uQWN0aXZlU3RhdGUpXHJcbiAgICAgIC5vbigncG9pbnRlcnVwJywgdGhpcy5lbnRlck1lbnVCdXR0b25Ib3ZlclN0YXRlKTtcclxuXHJcbiAgICBpZiAob25DbGljaykge1xyXG4gICAgICB0aGlzLm9uKCdwb2ludGVydXAnLCBvbkNsaWNrKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmVudGVyTWVudUJ1dHRvblJlc3RTdGF0ZSgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBlbnRlck1lbnVCdXR0b25Ib3ZlclN0YXRlKCkge1xyXG4gICAgdGhpcy5sYWJlbC5zZXRDb2xvcignIzAwMDAwMCcpO1xyXG4gICAgdGhpcy5zZXRGaWxsU3R5bGUoMHg4ODg4ODgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBlbnRlck1lbnVCdXR0b25SZXN0U3RhdGUoKSB7XHJcbiAgICB0aGlzLmxhYmVsLnNldENvbG9yKCcjRkZGRkZGJyk7XHJcbiAgICB0aGlzLnNldEZpbGxTdHlsZSgweEM4MDAwMCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGVudGVyTWVudUJ1dHRvbkFjdGl2ZVN0YXRlKCkge1xyXG4gICAgdGhpcy5sYWJlbC5zZXRDb2xvcignI0JCQkJCQicpO1xyXG4gICAgdGhpcy5zZXRGaWxsU3R5bGUoMHg0NDQ0NDQpO1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9