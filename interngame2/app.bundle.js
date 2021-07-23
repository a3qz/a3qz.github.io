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
exports.Ingredients = exports.drinkToColorMap = exports.getGameCenter = void 0;
exports.getGameCenter = function (scene) {
    var w = scene.game.scale.width;
    var h = scene.game.scale.height;
    return { x: w / 2, y: h / 2 };
};
exports.drinkToColorMap = new Map([
    ['Bourbon', 0xdb7900],
    ['Vermouth', 0x550103],
    ['Vodka', 0x808080],
    ['Gin', 0x75a3a3],
    ['Rum', 0xAC592D],
    ['Triple Sec', 0xffcc99],
    ['Tequila', 0x80ffff],
    ['Coke', 0x3C0000],
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
var whiteRushinHub_1 = __webpack_require__(/*! ./whiteRushinHub */ "./src/whiteRushinHub.ts");
window.onload = function () {
    var gameConfig = {
        title: 'Sample',
        type: Phaser.WEBGL,
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
        parent: 'content',
        backgroundColor: '#000000',
    };
    var game = new Phaser.Game(gameConfig);
    whiteRushinHub_1.WhiteRushinHub.Initialize(game);
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
        this.shakeCount = 0;
        this.transitioning = false;
        this.n = 0;
        this.nthreshold = 13;
        this.callback();
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
        this.instructionText = this.add.text(width / 4, 3 * height / 4, 'DASH!', { color: '#ff0000', fontSize: "40px" });
        this.text1 = this.add.text(50, 10, '', { color: '#00ff00' }).setAlpha(0);
        this.text2 = this.add.text(50, 30, '', { color: '#00ff00' }).setAlpha(0);
        this.text3 = this.add.text(50, 60, '', { color: '#00ff00' }).setAlpha(0);
        this.text4 = this.add.text(50, 90, '', { color: '#00ff00' }).setAlpha(0);
        this.text5 = this.add.text(50, 120, '', { color: '#00ff00' }).setAlpha(0);
        this.bottle.setDepth(1);
        new scene_button_1.SceneButton(this, width - 50, 50, "X", function () { _this.onFinish(false); _this.scene.stop(); }, 0xC80000);
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.BootScene = void 0;
/**
 * The initial scene that loads all necessary assets to the game and displays a loading bar.
 */
var BootScene = /** @class */ (function (_super) {
    __extends(BootScene, _super);
    function BootScene() {
        return _super.call(this, { key: 'Boot' }) || this;
    }
    BootScene.prototype.create = function () {
        var _this = this;
        console.log("Create");
        document.cookie = "orange=0";
        document.cookie = "bourbon=0";
        document.cookie = "ice=0";
        document.cookie = "vermouth=0";
        var halfWidth = this.game.scale.width * 0.5;
        var halfHeight = this.game.scale.height * 0.5;
        var progressBarHeight = 100;
        var progressBarWidth = 300;
        var padding = 20;
        this.add.rectangle(halfWidth, halfHeight, progressBarWidth + padding, progressBarHeight + padding, 0x333333);
        var progressBar = this.add.rectangle(halfWidth - (progressBarWidth / 2), halfHeight, 0, progressBarHeight, 0x888888);
        this.add.text(halfWidth, halfHeight - 75, 'Loading...').setFontSize(24).setOrigin(0.5, 0.5);
        var percentText = this.add.text(halfWidth, halfHeight, '0%').setFontSize(24).setOrigin(0.5, 0.5);
        var assetText = this.add.text(halfWidth, halfHeight + 75, '').setFontSize(24).setOrigin(0.5, 0.5);
        this.load.on('progress', function (value) {
            progressBar.width = progressBarWidth * value;
            percentText.setText(Math.floor(value * 100) + "%");
        });
        this.load.on('fileprogress', function (file) {
            assetText.setText(file.key);
        });
        this.load.on('complete', function () {
            _this.scene.start('Permissions');
        });
        this.loadAssets();
    };
    /**
     * All assets that need to be loaded by the game (sprites, images, animations, tiles, music, etc)
     * should be added to this method. Once loaded in, the loader will keep track of them, indepedent of which scene
     * is currently active, so they can be accessed anywhere.
     */
    BootScene.prototype.loadAssets = function () {
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
        this.load.image('Shake Drink', 'assets/sprites/shakericon.png');
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
        this.load.start();
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
            .setAlpha(0)
            .setDepth(1);
        this.input.on('pointerdown', function () {
            if (_this.lidRect.getBounds().contains(_this.input.activePointer.x, _this.input.activePointer.y) &&
                _this.bourbonTopOnly.y == _this.bourbonTop.y) {
                _this.text1.setText("clicked box");
                _this.held = true;
                _this.bourbonTopOnly.y -= 20;
                _this.lidRect.y -= 20;
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
        this.text1 = this.add.text(10, 10, '', { color: '#00ff00' }).setAlpha(0);
        this.text2 = this.add.text(10, 25, '', { color: '#00ff00' }).setAlpha(0);
        this.text3 = this.add.text(10, 40, '', { color: '#00ff00' }).setAlpha(0);
        this.text4 = this.add.text(10, 55, '', { color: '#00ff00' }).setAlpha(0);
        this.text5 = this.add.text(10, 70, '', { color: '#00ff00' }).setAlpha(0);
        this.instructionText = this.add.text(width / 4, height / 4, 'UNCORK!', { color: '#ff0000', fontSize: "40px" });
        var closeButton = new scene_button_1.SceneButton(this, width - 50, 50, "X", function () { _this.onFinish(false); _this.scene.stop(); }, 0xC80000);
        closeButton.buttonColor = 0xC80000;
    };
    BourbonScene.prototype.update = function () {
        var _this = this;
        if (this.held) {
            if (this.input.activePointer.getAngle() < 0 && this.input.activePointer.getDistanceY() > 50) {
                this.unscrewed += 1;
                if (this.unscrewed % 2 == 1) {
                    this.bourbonTopOnly.y -= 2.5;
                    this.lidRect.y -= 2.5;
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
var DisconnectedScene = /** @class */ (function (_super) {
    __extends(DisconnectedScene, _super);
    function DisconnectedScene() {
        var _this = _super.call(this, { key: 'Disconnected' }) || this;
        _this.speed = 200;
        _this.clicks = 0;
        _this.iceLevel = 0;
        return _this;
    }
    DisconnectedScene.prototype.create = function () {
        console.log('Success');
        var _a = this.sys.game.canvas, width = _a.width, height = _a.height;
        this.add.rectangle(width / 2, height / 2, width, height, 0x000000);
        this.add.text(width / 8, (height / 4) - 30, "You are disconnected!\nAttempting to reconnect.\nPlease refresh if nothing happens.", { color: '#ffffff', align: 'center' });
    };
    return DisconnectedScene;
}(Phaser.Scene));
exports.DisconnectedScene = DisconnectedScene;


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
var scene_button_1 = __webpack_require__(/*! ../ui/scene-button */ "./src/ui/scene-button.ts");
var other_glass_button_1 = __webpack_require__(/*! ../ui/other-glass-button */ "./src/ui/other-glass-button.ts");
var whiteRushinHub_1 = __webpack_require__(/*! ../whiteRushinHub */ "./src/whiteRushinHub.ts");
var Setup = /** @class */ (function () {
    function Setup() {
    }
    return Setup;
}());
var GameState = /** @class */ (function () {
    function GameState() {
    }
    return GameState;
}());
var GameScene = /** @class */ (function (_super) {
    __extends(GameScene, _super);
    function GameScene() {
        var _this = _super.call(this, { key: 'Game' }) || this;
        _this.speed = 200;
        _this.glassButtons = [];
        _this.glassFillers = [];
        _this.privateColorMap = new Map([
            ['bourbon', 0xdb7900],
            ['vermouth', 0x550103],
        ]);
        return _this;
    }
    GameScene.prototype.init = function (setup) {
        this.actions = setup.actions;
        this.cupNumber = setup.cupNumber;
    };
    GameScene.prototype.create = function () {
        var _this = this;
        console.log('Game');
        this.selectedTarget = this.cupNumber >= 4 ? 0 : this.cupNumber;
        this.fullStuff = [];
        // Initialize the scene with an empty state.
        this.updateState({
            cupLocks: [],
            cupState: []
        });
        // SignalR Stuff
        this.setupHub();
        var c = helpers_1.getGameCenter(this);
        var _a = this.scale.gameSize, width = _a.width, height = _a.height;
        this.emptyGlass = this.add.sprite(width / 2, height / 3, 'emptyglass').setDepth(0).setScale(0.5);
        if (this.cupNumber < 4) {
            this.cupNumberText = this.add.text(c.x, 30, "You are cup number " + (this.cupNumber + 1), { color: '#ffffff' }).setOrigin(0.5);
            this.filledglass1 = this.createGlassFiller(this.emptyGlass.getTopLeft().x, this.emptyGlass.getTopLeft().y, 0xffffff);
            this.filledglass2 = this.createGlassFiller(this.filledglass1.getBottomLeft().x, this.filledglass1.getBottomLeft().y, 0x0000ff);
            this.filledglass3 = this.createGlassFiller(this.filledglass2.getBottomLeft().x, this.filledglass2.getBottomLeft().y, 0x00ff00);
            this.filledglass4 = this.createGlassFiller(this.filledglass3.getBottomLeft().x, this.filledglass3.getBottomLeft().y, 0xFF0000);
            this.glassFillers.push(this.filledglass4);
            this.glassFillers.push(this.filledglass3);
            this.glassFillers.push(this.filledglass2);
            this.glassFillers.push(this.filledglass1);
            var gtc = this.emptyGlass.getTopCenter();
            new scene_button_1.SceneButton(this, gtc.x - 70, height * 0.15, 'Serve Glass', function () { return whiteRushinHub_1.WhiteRushinHub.Instance.SubmitCup(); });
            new scene_button_1.SceneButton(this, gtc.x + 90, height * 0.15, 'Discard', function () { return whiteRushinHub_1.WhiteRushinHub.Instance.EmptyCup(); }, 0xC80000);
            this.input.on('dragend', function (_pointer, gameObject) {
                gameObject.clearTint();
            });
            this.text1 = this.add.text(10, 10, '', { color: '#00ff00' });
            this.text2 = this.add.text(500, 10, '', { color: '#00ff00' });
            var maxSpread = 600;
            var spreadStart_1 = 50;
            if (width < maxSpread) {
                maxSpread = width - 2 * spreadStart_1;
            }
            else {
                spreadStart_1 = width / 2 - maxSpread / 2;
            }
            var step_1 = maxSpread / (this.actions.length - 1);
            this.actions.forEach(function (element, idx) {
                var name = helpers_1.Ingredients[element];
                var nextScene = name;
                if (element >= 10) {
                    nextScene = 'Pour';
                }
                else if (name.includes("Juice")) {
                    nextScene = 'Juicer';
                }
                var ingredientSprite = _this.add.sprite(spreadStart_1 + idx * step_1, height * 0.80, name)
                    .setOrigin(0.5)
                    .setInteractive();
                _this.add.text;
                var aspectRatio = ingredientSprite.width / ingredientSprite.height;
                var expectedHeight = 100;
                var expectedWidth = expectedHeight * aspectRatio;
                ingredientSprite
                    .setDisplaySize(expectedWidth, expectedHeight);
                ingredientSprite.on('pointerdown', function () {
                    _this.scene.setVisible(false);
                    _this.scene.pause();
                    _this.scene.launch(nextScene, {
                        onFinish: function (good) {
                            _this.scene.setVisible(true);
                            if (good) {
                                whiteRushinHub_1.WhiteRushinHub.Instance.SendAction(element, _this.selectedTarget);
                                console.log("they did it");
                            }
                            _this.scene.resume();
                        },
                        BottleSpriteName: name
                    });
                });
            });
            this.add.text(this.emptyGlass.getBottomCenter().x, this.emptyGlass.getBottomCenter().y + 40, "Target Cup:").setOrigin(0.5);
            var _loop_1 = function (i) {
                this_1.glassButtons.push(new other_glass_button_1.OtherGlassButton(this_1, this_1.emptyGlass.getBottomCenter().x + (i - 2) * 70 + 35, this_1.emptyGlass.getBottomCenter().y + 80, (i + 1).toString(), function () {
                    if (!_this.cupLocks.includes(i)) {
                        console.log("Changing Button!");
                        _this.glassButtons[_this.selectedTarget].enterMenuButtonRestState();
                        _this.selectedTarget = i;
                        _this.glassButtons[_this.selectedTarget].enterMenuButtonActiveState();
                    }
                }));
            };
            var this_1 = this;
            for (var i = 0; i < 4; i++) {
                _loop_1(i);
            }
            console.log(this.glassButtons);
        }
        else { // greater than 4
            this.emptyGlass.setScale(0.5);
            this.emptyGlass.setVisible(false);
            this.actions.forEach(function (element, idx) {
                var name = helpers_1.Ingredients[element];
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
                    _this.scene.launch(nextScene, {
                        onFinish: function () {
                            console.log("called");
                            _this.scene.setVisible(true);
                            whiteRushinHub_1.WhiteRushinHub.Instance.SendAction(element, _this.selectedTarget);
                            _this.scene.resume();
                        },
                        BottleSpriteName: name
                    });
                    console.log(name);
                });
            });
            this.glassButtons = [];
            this.add.text(this.emptyGlass.getTopLeft().x, height / 12 - 15, "target cup:");
            var _loop_2 = function (i) {
                this_2.glassButtons.push(new other_glass_button_1.OtherGlassButton(this_2, this_2.emptyGlass.getTopLeft().x + i * 30, height / 12, (i + 1).toString(), function () {
                    if (!_this.cupLocks.includes(i)) {
                        _this.glassButtons[_this.selectedTarget].enterMenuButtonRestState();
                        _this.selectedTarget = i;
                        _this.glassButtons[_this.selectedTarget].enterMenuButtonActiveState();
                    }
                    console.log("selected = " + _this.selectedTarget);
                }));
            };
            var this_2 = this;
            for (var i = 0; i < 4; i++) {
                _loop_2(i);
            }
        }
        whiteRushinHub_1.WhiteRushinHub.Instance.FetchState();
    };
    GameScene.prototype.createGlassFiller = function (x, y, color) {
        return this.add.rectangle(x, y, this.emptyGlass.displayWidth, this.emptyGlass.displayHeight / 4, color)
            .setOrigin(0)
            .setDepth(1)
            .setBlendMode(Phaser.BlendModes.MULTIPLY)
            .setVisible(false) // Disable this to debug
        ;
    };
    GameScene.prototype.updateState = function (state) {
        var _this = this;
        this.cupLocks = state.cupLocks;
        console.log(this.cupLocks);
        this.glassContents = state.cupState;
        this.glassButtons.forEach(function (button, idx) {
            if (_this.cupLocks.includes(idx.valueOf())) {
                button.setEnabled(false);
            }
            else {
                button.setEnabled(true);
                if (_this.selectedTarget == idx) {
                    button.enterMenuButtonActiveState();
                }
            }
        });
        if (this.cupNumber < 4) {
            this.glassFillers.forEach(function (element) {
                element.setVisible(false);
            });
            this.fullStuff.forEach(function (element) {
                element.destroy();
            });
            var _a = this.sys.game.canvas, width_1 = _a.width, height_1 = _a.height;
            var currentPosition_1 = 0;
            this.glassContents.forEach(function (element) {
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
                        _this.fullStuff.push(_this.add.sprite(width_1 / 2, height_1 / 3, 'muddler').setScale(0.15).setRotation(.2));
                        break;
                    case 'Shake Drink':
                        _this.fullStuff.push(_this.add.sprite(width_1 / 2, height_1 / 3, 'shakenglass').setScale(0.5));
                        break;
                    case 'Angostura Bitters':
                        //this.fullStuff.push(this.add.sprite(width / 2, height / 3, 'bittersglass').setScale(0.5));
                        break;
                }
            });
        }
    };
    GameScene.prototype.setupHub = function () {
        var _this = this;
        var connection = whiteRushinHub_1.WhiteRushinHub.Instance;
        connection.on('StatePush', function (state) {
            _this.updateState(state);
        });
        connection.on('Result', function (results) {
            var count = results.reduce(function (x, y) { return x + y; });
            if (count == 0) {
                _this.scene.setVisible(false);
                _this.scene.pause();
                _this.scene.start('Success');
                return;
            }
            whiteRushinHub_1.WhiteRushinHub.Instance.Reset();
            _this.scene.setVisible(false);
            _this.scene.pause();
            var resultsScene = _this.scene.get('Results');
            resultsScene.events.on('shutdown', function () {
                console.log("Showing game scene again");
                _this.scene.resume();
                _this.scene.setVisible(true);
            });
            _this.scene.launch('Results', { results: results });
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
            if (_this.clicks % 2 == 0) {
                _this.ice.setTexture('ice' + ++_this.iceLevel);
            }
            if (_this.iceLevel == 5 && !_this.transitioning) {
                _this.transitioning = true;
                document.cookie = "ice=1";
                setTimeout(function () {
                    _this.scene.stop();
                    _this.onFinish(true);
                }, 500);
            }
        });
        this.text1 = this.add.text(10, 10, '', { color: '#00ff00' }).setAlpha(0);
        this.text2 = this.add.text(10, 25, '', { color: '#00ff00' }).setAlpha(0);
        this.text3 = this.add.text(10, 40, '', { color: '#00ff00' }).setAlpha(0);
        this.text4 = this.add.text(10, 55, '', { color: '#00ff00' }).setAlpha(0);
        this.text5 = this.add.text(10, 70, '', { color: '#00ff00' }).setAlpha(0);
        this.instructionText = this.add.text(width / 4, height / 4, 'CHIP!', { color: '#ff0000', fontSize: "40px" });
        var closeButton = new scene_button_1.SceneButton(this, width - 50, 50, "X", function () { _this.onFinish(false); _this.scene.stop(); }, 0xC80000);
        closeButton.buttonColor = 0xC80000;
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
        this.juicerTop.setScale(0.4);
        this.fruit.setScale(0.4);
        this.juicerBottom.setScale(0.4);
        this.juicerTop.setPosition(this.emptyGlass.x + this.juicerTop.displayWidth / 3, this.emptyGlass.y + this.juicerTop.displayHeight / 4);
        this.juicerBottom.setPosition(this.emptyGlass.x + this.juicerBottom.displayWidth / 3, this.emptyGlass.y + this.juicerTop.displayHeight / 4);
        this.fruit.setPosition(this.emptyGlass.x + this.juicerBottom.displayWidth / 3, this.emptyGlass.y + this.juicerTop.displayHeight / 4);
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
        this.input.on('drag', function (_, gameObject) {
            // from here: need to 1. calculate angle between base of object and cursor
            // 2. rotate until top of bottle is pointing to cursor
            var y1 = gameObject.y;
            var y2 = _this.input.activePointer.y;
            var x1 = gameObject.x;
            var x2 = _this.input.activePointer.x;
            var slopeRads = Math.atan2(y2 - y1, x2 - x1);
            var adjusted = slopeRads + 1.57079633;
            _this.text1.setText("" + adjusted);
            if (adjusted <= 0.025 && adjusted > -.75) {
                gameObject.rotation = slopeRads + 1.57079633;
            }
        });
        this.input.on('dragend', function (pointer, gameObject) {
            gameObject.clearTint();
        });
        this.text1 = this.add.text(10, 10, '', { color: '#00ff00' }).setAlpha(0);
        this.text2 = this.add.text(100, 10, '', { color: '#00ff00' }).setAlpha(0);
        this.instructionText = this.add.text(width / 4, 3 * height / 4, 'SQUEEZE!', { color: '#ff0000', fontSize: "40px" });
        this.juicerTop.setDepth(1);
        var closeButton = new scene_button_1.SceneButton(this, width - 50, 50, "X", function () { _this.onFinish(false); _this.scene.stop(); }, 0xC80000);
        closeButton.buttonColor = 0xC80000;
    };
    JuicerScene.prototype.update = function () {
        var _this = this;
        // Every frame, we create a new velocity for the sprite based on what keys the player is holding down.
        this.text1.setText("" + this.juicerTop.rotation);
        if (this.juicerTop.rotation < -0.7) { //-1.49) {
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
var helpers_1 = __webpack_require__(/*! ../helpers */ "./src/helpers.ts");
var scene_button_1 = __webpack_require__(/*! ../ui/scene-button */ "./src/ui/scene-button.ts");
var whiteRushinHub_1 = __webpack_require__(/*! ../whiteRushinHub */ "./src/whiteRushinHub.ts");
/**
 * The initial scene that starts, shows the splash screens, and loads the necessary assets.
 */
var MainMenuScene = /** @class */ (function (_super) {
    __extends(MainMenuScene, _super);
    function MainMenuScene() {
        return _super.call(this, { key: 'MainMenu' }) || this;
    }
    MainMenuScene.prototype.create = function () {
        var _this = this;
        console.log('Main Menu');
        var c = helpers_1.getGameCenter(this);
        this.add
            .text(c.x, 50, "Team " + whiteRushinHub_1.WhiteRushinHub.Room)
            .setColor("#FFFFFF")
            .setFontSize(24)
            .setOrigin(0.5);
        this.playerDisplay = this.add
            .text(c.x, 200, "")
            .setColor("#FFFFFF")
            .setFontSize(24)
            .setOrigin(0.5).setVisible(false);
        this.waitText = this.add.text(c.x, c.y, "Please Wait\nRegistering...")
            .setAlign("center")
            .setOrigin(0.5);
        whiteRushinHub_1.WhiteRushinHub.Instance.hubConnection.on('UpdateReadyCount', function (inCount) {
            console.log("Updating Ready Count");
            _this.playerDisplay.setText("# ready players: " + inCount);
        });
        this.readyButton = new scene_button_1.SceneButton(this, c.x, c.y, 'Ready Up', function () {
            _this.readyButton.setVisible(false);
            whiteRushinHub_1.WhiteRushinHub.Instance.ReadyUp();
            _this.startButton.setVisible(true);
            _this.playerDisplay.setVisible(true);
        }).setVisible(false);
        this.startButton = new scene_button_1.SceneButton(this, c.x, c.y, 'Click when everyone is ready', function () {
            _this.startButton.setVisible(false);
            whiteRushinHub_1.WhiteRushinHub.Instance.AllReady();
            _this.waitText.setVisible(true);
            _this.waitText.setText("Please Wait\nStarting...");
        }).setVisible(false);
        // Register for the assign event because it means we need to start the game.  This can occur at an point
        // after we're registered to a team so we need to do it before calling register.
        whiteRushinHub_1.WhiteRushinHub.Instance.once(whiteRushinHub_1.WhiteRushinHub.Events.Assign, function (data) {
            _this.scene.start('Game', data);
        });
        whiteRushinHub_1.WhiteRushinHub.Instance.Register().then(function () {
            _this.waitText.setVisible(false);
            _this.readyButton.setVisible(true);
        });
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
            .setScale(0.3)
            .setAngle(180);
        this.muddleContainerRect = this.add
            .rectangle(this.emptyGlass.x, this.emptyGlass.y, this.emptyGlass.displayWidth, this.emptyGlass.displayHeight, 0x00ff00)
            .setScale(0.7)
            .setDepth(2)
            .setAlpha(0);
        this.movingThresholdRect = this.add
            .rectangle(this.emptyGlass.x, this.emptyGlass.y + height / 15, this.emptyGlass.displayWidth, height / 40, 0x0000ff)
            .setDepth(2)
            .setAlpha(0);
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
        this.text1 = this.add.text(10, 10, '', { color: '#00ff00' }).setAlpha(0);
        this.text2 = this.add.text(10, 25, '', { color: '#00ff00' }).setAlpha(0);
        this.text3 = this.add.text(10, 40, '', { color: '#00ff00' }).setAlpha(0);
        this.text4 = this.add.text(10, 55, '', { color: '#00ff00' }).setAlpha(0);
        this.text5 = this.add.text(10, 70, '', { color: '#00ff00' }).setAlpha(0);
        this.text1.setText("" + this.iceLevel);
        var closeButton = new scene_button_1.SceneButton(this, width - 50, 50, "X", function () { _this.onFinish(false); _this.scene.stop(); }, 0xC80000);
        closeButton.buttonColor = 0xC80000;
    };
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
            .rectangle(this.canelle.x + this.canelle.displayWidth / 8, this.canelle.y - this.canelle.displayHeight / 2 + this.canelle.displayHeight * (1 / 40) + 20, this.canelle.displayWidth * (3 / 4), this.canelle.displayHeight * (1 / 20), 0x00ff00)
            .setDepth(2)
            .setAlpha(0);
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
            _this.text1.setText("\u03B8: " + _this.input.activePointer.getAngle()).setAlpha(0);
            _this.text2.setText("x: " + _this.input.activePointer.getDistanceX()).setAlpha(0);
            _this.text3.setText("y: " + _this.input.activePointer.getDistanceY()).setAlpha(0);
            _this.text4.setText("d: " + _this.input.activePointer.getDistance()).setAlpha(0);
        });
        this.input.on('pointerdown', function () { });
        this.input.on('drag', function (pointer, gameObject, dragX, dragY) {
            // from here: need to 1. calculate angle between base of object and cursor
            // 2. rotate until top of bottle is pointing to cursor
            gameObject.y = dragY;
            gameObject.x = dragX;
            _this.bladeRect.setPosition(dragX + _this.canelle.displayWidth / 8, dragY - _this.canelle.displayHeight / 2 + _this.canelle.displayHeight * (1 / 40) + 20);
            _this.text2.setText("dragY: " + dragY);
            _this.text3.setText("y: " + _this.input.activePointer.prevPosition.y);
            if (_this.input.activePointer.prevPosition.y < _this.input.activePointer.y &&
                _this.orange.getBounds().contains(_this.bladeRect.x, _this.bladeRect.y)) {
                var x = _this.bladeRect.x - _this.rt.x;
                var y = _this.bladeRect.y - _this.rt.y;
                _this.rt.erase(_this.bladeRect.setAlpha(.5), x, y);
                _this.bladeRect.setAlpha(0);
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
        this.text1 = this.add.text(10, 10, '', { color: '#00ff00' }).setAlpha(0);
        this.text2 = this.add.text(10, 25, '', { color: '#00ff00' }).setAlpha(0);
        this.text3 = this.add.text(10, 40, '', { color: '#00ff00' }).setAlpha(0);
        this.text4 = this.add.text(10, 55, '', { color: '#00ff00' }).setAlpha(0);
        this.text5 = this.add.text(10, 70, '', { color: '#00ff00' }).setAlpha(0);
        this.instructionText = this.add.text(width / 4, 3 * height / 4, 'PEEL!', { color: '#ff0000', fontSize: "40px" });
        var closeButton = new scene_button_1.SceneButton(this, width - 50, 50, "X", function () { _this.onFinish(false); _this.scene.stop(); }, 0xC80000);
        closeButton.buttonColor = 0xC80000;
    };
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
var signalr_1 = __webpack_require__(/*! @microsoft/signalr */ "./node_modules/@microsoft/signalr/dist/esm/index.js");
var helpers_1 = __webpack_require__(/*! ../helpers */ "./src/helpers.ts");
var scene_button_1 = __webpack_require__(/*! ../ui/scene-button */ "./src/ui/scene-button.ts");
var whiteRushinHub_1 = __webpack_require__(/*! ../whiteRushinHub */ "./src/whiteRushinHub.ts");
/**
 * The initial scene that starts, shows the splash screens, and loads the necessary assets.
 */
var PermissionsScene = /** @class */ (function (_super) {
    __extends(PermissionsScene, _super);
    function PermissionsScene() {
        return _super.call(this, { key: 'Permissions' }) || this;
    }
    PermissionsScene.prototype.create = function () {
        var _this = this;
        var center = helpers_1.getGameCenter(this);
        new scene_button_1.SceneButton(this, center.x, center.y, 'Enter', function () {
            console.log(whiteRushinHub_1.WhiteRushinHub.Instance.hubConnection.state);
            if (whiteRushinHub_1.WhiteRushinHub.Instance.hubConnection.state != signalr_1.HubConnectionState.Connected) {
                _this.add.text(center.x, 50, "Not connected yet,\n try again in a few seconds").setOrigin(0.5);
                return;
            }
            try {
                if (window.DeviceOrientationEvent) {
                    console.log("Device Orientation Supported!");
                    if (window.DeviceOrientationEvent.requestPermission) {
                        console.log("Requesting permission for device orientation events...");
                        window.DeviceOrientationEvent.requestPermission();
                    }
                }
                if (window.DeviceMotionEvent) {
                    console.log("Device Motion Supported!");
                    if (window.DeviceMotionEvent.requestPermission) {
                        console.log("Requesting permission for device motion events...");
                        window.DeviceMotionEvent.requestPermission();
                    }
                }
            }
            catch (e) {
                console.log("Unexpected error when attempting to request device orientation permission." + e);
            }
            _this.scene.start('MainMenu');
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
        console.log("glass x: " + width / 4);
        console.log("glass y: " + height / 2);
        this.emptyGlass.setScale(0.5);
        this.emptyGlass.scaleY = this.emptyGlass.scaleY * 0.5;
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
        this.input.on('dragstart', function (_, gameObject) {
            gameObject.setTint(0x999999);
        });
        this.liquidRectangle = this.add
            .rectangle(this.emptyGlass.x, this.emptyGlass.y + this.emptyGlass.displayHeight / 2, this.emptyGlass.displayWidth, ++this.pourCount, helpers_1.drinkToColorMap.get(this.bottleName))
            .setBlendMode(Phaser.BlendModes.MULTIPLY);
        this.input.on('drag', function (_, gameObject) {
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
        });
        this.input.on('dragend', function (pointer, gameObject) {
            gameObject.clearTint();
        });
        this.instructionText = this.add.text(width / 4, 3 * height / 4, 'POUR!', { color: '#ff0000', fontSize: "40px" });
        this.text1 = this.add.text(10, 10, '', { color: '#00ff00' }).setAlpha(0);
        this.text2 = this.add.text(100, 10, '', { color: '#00ff00' }).setAlpha(0);
        this.bottle.setDepth(1);
        this.callback();
        var closeButton = new scene_button_1.SceneButton(this, width - 50, 50, "X", function () { _this.onFinish(false); _this.scene.stop(); }, 0xC80000);
        closeButton.buttonColor = 0xC80000;
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
    };
    PourScene.prototype.callApple = function () {
        var _this = this;
        try {
            DeviceMotionEvent.requestPermission().then(function (response) {
                _this.text1.setText(response);
                window.addEventListener('devicemotion', function (event) {
                    return;
                    var accelGrav = event.accelerationIncludingGravity;
                    var rotationRate = event.rotationRate;
                    var gravX = (accelGrav.x >> 0);
                    if (gravX % 2 === 0) {
                        _this.bottle.angle = (0 - (gravX * 10));
                        //var transforms = 'rotateZ(' + (0 - (gravX * 10)) + 'deg)';
                    }
                });
                window.addEventListener('deviceorientation', function (event) {
                    console.log(event);
                    // Expose each orientation angle in a more readable way
                    var rotation_degrees = event.alpha;
                    var frontToBack_degrees = event.beta;
                    var leftToRight_degrees = event.gamma;
                    _this.bottle.angle = leftToRight_degrees - 90;
                });
            });
        }
        catch (ex) {
            console.log('not ios');
            window.addEventListener('deviceorientation', function (event) {
                console.log(event);
                // Expose each orientation angle in a more readable way
                var rotation_degrees = event.alpha;
                var frontToBack_degrees = event.beta;
                var leftToRight_degrees = event.gamma;
                _this.bottle.angle = leftToRight_degrees - 90;
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
var scene_button_1 = __webpack_require__(/*! ../ui/scene-button */ "./src/ui/scene-button.ts");
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
        _this.clicks = 0;
        _this.iceLevel = 0;
        return _this;
    }
    ResultsScene.prototype.init = function (data) {
        this.results = data.results;
    };
    ResultsScene.prototype.create = function () {
        var _this = this;
        console.log('Results');
        var _a = this.sys.game.canvas, width = _a.width, height = _a.height;
        this.add.text(width / 8, (height / 4) - 30, "Customer Feedback:", { color: '#ffffff' });
        // "feature flag"
        if (true) {
            // this section tries to fomally combine them
            var resultsObj_1 = [0, 0, 0, 0];
            this.results.forEach(function (element) {
                resultsObj_1[element]++;
                //this.add.text(width / 8, (height / 4) + (idx * height / 8), this.getResultString(element), { color: '#ffffff' });
            });
            console.log(resultsObj_1);
            var counter_1 = 0;
            resultsObj_1.forEach(function (element, idx) {
                if (element != 0) {
                    _this.add.text(width / 8, (height / 4) + (counter_1 * height / 8), _this.getPhoneticString(element) + " customer" + (element > 1 ? 's' : '') + " said: \n\t" + _this.getResultString(idx), { color: '#ffffff' });
                    counter_1++;
                }
            });
        }
        else {}
        new scene_button_1.SceneButton(this, width / 2, (height / 4) * 3, "Reset", function () { _this.scene.stop(); });
    };
    ResultsScene.prototype.getResultString = function (item) {
        if (item == 0) {
            return "Just like I ordered! Thanks!";
        }
        else if (item == 1) {
            return "Excuse me, I think I \n\tgot someone else's drink";
        }
        else if (item == 2) {
            return "Looks good but I don't\n\tthink I heard anyone order this";
        }
        else if (item == 3) {
            return "*spits out drink* Do you\n\t even know how to make drinks?";
        }
    };
    ResultsScene.prototype.getPhoneticString = function (item) {
        if (item == 0) {
            return "Zero";
        }
        else if (item == 1) {
            return "One";
        }
        else if (item == 2) {
            return "Two";
        }
        else if (item == 3) {
            return "Three";
        }
        else if (item == 4) {
            return "Four";
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
        this.shakeCount = 0;
        this.transitioning = false;
        this.n = 0;
        this.nthreshold = 13;
        this.callback();
        this.bottle = this.add.sprite(width / 2, height / 2, this.bottleName).setInteractive().setScale(1.4);
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
        });
        this.input.setDraggable(this.bottle);
        this.input.on('dragstart', function (pointer, gameObject) {
            gameObject.setTint(0x999999);
        });
        this.text1 = this.add.text(50, 10, '', { color: '#00ff00' }).setAlpha(0);
        this.text2 = this.add.text(50, 30, '', { color: '#00ff00' }).setAlpha(0);
        this.text3 = this.add.text(50, 60, '', { color: '#00ff00' }).setAlpha(0);
        this.text4 = this.add.text(50, 90, '', { color: '#00ff00' }).setAlpha(0);
        this.text5 = this.add.text(50, 120, '', { color: '#00ff00' }).setAlpha(0);
        this.instructionText = this.add.text(width / 4, 3 * height / 4, 'SHAKE!', { color: '#ff0000', fontSize: "40px" });
        this.bottle.setDepth(1);
        var closeButton = new scene_button_1.SceneButton(this, width - 50, 50, "X", function () { _this.onFinish(false); _this.scene.stop(); }, 0xC80000);
        closeButton.buttonColor = 0xC80000;
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
        this.maxx = 0;
        this.maxy = 0;
        this.maxz = 0;
        this.minx = 0;
        this.miny = 0;
        this.minz = 0;
        this.callApple();
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
var helpers_1 = __webpack_require__(/*! ../helpers */ "./src/helpers.ts");
var SuccessScene = /** @class */ (function (_super) {
    __extends(SuccessScene, _super);
    function SuccessScene() {
        return _super.call(this, { key: 'Success' }) || this;
    }
    SuccessScene.prototype.create = function () {
        console.log('Success');
        var c = helpers_1.getGameCenter(this);
        this.add.text(c.x, c.y, "You did it! Here's your copy of \nthe receipt:\n    Drink - $13.09\n    Drink - $24.15\n    Drink - $12.15\n    Drink - $7.25\n    ", { color: '#ffffff' }).setOrigin(0.5);
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
        this.text1 = this.add.text(10, 10, '', { color: '#00ff00' }).setAlpha(0);
        this.text2 = this.add.text(10, 25, '', { color: '#00ff00' }).setAlpha(0);
        this.text3 = this.add.text(10, 40, '', { color: '#00ff00' }).setAlpha(0);
        this.text4 = this.add.text(10, 55, '', { color: '#00ff00' }).setAlpha(0);
        this.text5 = this.add.text(10, 70, '', { color: '#00ff00' }).setAlpha(0);
        this.instructionText = this.add.text(width / 4, height / 4, 'UNSCREW! ->', { color: '#ff0000', fontSize: "40px" });
        var closeButton = new scene_button_1.SceneButton(this, width - 50, 50, "X", function () { _this.onFinish(false); _this.scene.stop(); }, 0xC80000);
        closeButton.buttonColor = 0xC80000;
    };
    return VermouthScene;
}(Phaser.Scene));
exports.VermouthScene = VermouthScene;


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
        _this.minimumWidth = 40;
        _this.minimumHeight = 40;
        _this.scene.add.existing(_this);
        _this.ogtext = text;
        _this.label = _this.scene.add
            .text(0, 0, text)
            .setOrigin(0.5)
            .setFontSize(14);
        _this.lock = _this.scene.add.text(0, 0, "🔒").setOrigin(0.5).setFontSize(14).setVisible(false);
        var labelWidth = _this.label.width + _this.padding;
        var labelHeight = _this.label.height + _this.padding;
        var buttonWidth = labelWidth >= _this.minimumWidth ? labelWidth : _this.minimumWidth;
        var buttonHeight = labelHeight >= _this.minimumHeight ? labelHeight : _this.minimumHeight;
        _this.button = _this.scene.add.rectangle(0, 0, buttonWidth, buttonHeight);
        _this.add(_this.button);
        _this.add(_this.label);
        _this.add(_this.lock);
        _this.setSize(_this.button.width, _this.button.height);
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
        this.button.setFillStyle(0x888888);
    };
    OtherGlassButton.prototype.enterMenuButtonRestState = function () {
        this.label.setColor('#FFFFFF');
        this.button.setFillStyle(0x888888);
    };
    OtherGlassButton.prototype.enterMenuButtonActiveState = function () {
        this.label.setColor('#BBBBBB');
        this.button.setFillStyle(0x444444);
    };
    OtherGlassButton.prototype.setEnabled = function (enabled) {
        if (enabled) {
            this.enterMenuButtonRestState();
            this.setInteractive();
            this.lock.setVisible(false);
        }
        else {
            this.enterMenuButtonActiveState();
            this.setInteractive();
            this.lock.setVisible(true);
        }
    };
    return OtherGlassButton;
}(Phaser.GameObjects.Container));
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
    function SceneButton(scene, x, y, text, onClick, color) {
        var _this = _super.call(this, scene, x, y) || this;
        _this.padding = 30;
        _this.minimumWidth = 50;
        _this.minimumHeight = 50;
        _this.buttonColor = 0x888888;
        _this.scene.add.existing(_this);
        if (color) {
            _this.buttonColor = color;
        }
        _this.label = _this.scene.add.text(0, 0, text)
            .setOrigin(0.5)
            .setFontSize(18)
            .setAlign('center');
        var labelWidth = _this.label.width + _this.padding;
        var labelHeight = _this.label.height + _this.padding;
        var buttonWidth = labelWidth >= _this.minimumWidth ? labelWidth : _this.minimumWidth;
        var buttonHeight = labelHeight >= _this.minimumHeight ? labelHeight : _this.minimumHeight;
        _this.button = _this.scene.add.rectangle(0, 0, buttonWidth, buttonHeight);
        _this.add(_this.button);
        _this.add(_this.label);
        _this.setSize(_this.button.width, _this.button.height);
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
        this.button.setFillStyle(0x888888);
    };
    SceneButton.prototype.enterMenuButtonRestState = function () {
        this.label.setColor('#FFFFFF');
        this.button.setFillStyle(this.buttonColor);
    };
    SceneButton.prototype.enterMenuButtonActiveState = function () {
        this.label.setColor('#BBBBBB');
        this.button.setFillStyle(0x444444);
    };
    return SceneButton;
}(Phaser.GameObjects.Container));
exports.SceneButton = SceneButton;


/***/ }),

/***/ "./src/whiteRushinHub.ts":
/*!*******************************!*\
  !*** ./src/whiteRushinHub.ts ***!
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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WhiteRushinHub = void 0;
var signalR = __webpack_require__(/*! @microsoft/signalr */ "./node_modules/@microsoft/signalr/dist/esm/index.js");
var WhiteRushinHub = /** @class */ (function (_super) {
    __extends(WhiteRushinHub, _super);
    function WhiteRushinHub(game) {
        var _this = _super.call(this) || this;
        _this.game = game;
        _this.hubConnection = new signalR.HubConnectionBuilder()
            .withUrl("https://schittalkin.azurewebsites.net/whiterushin/")
            //.withUrl(`http://localhost:5000/whiterushin`)
            //.withUrl(`https://whiterushinservice.azurewebsites.net/whiterushin`)
            .configureLogging(signalR.LogLevel.Warning)
            .withAutomaticReconnect()
            .build();
        _this.connectEvents();
        _this.connectToHub();
        return _this;
    }
    WhiteRushinHub.Initialize = function (game) {
        var _a;
        if (WhiteRushinHub.Instance != null) {
            console.error("Attempted to initialize hub multiple times");
            return;
        }
        WhiteRushinHub.Instance = new WhiteRushinHub(game);
        // We need the team id so pull that out too.
        var urlParams = new URLSearchParams(window.location.search);
        WhiteRushinHub.Room = (_a = urlParams.get('room')) !== null && _a !== void 0 ? _a : 'sample';
    };
    WhiteRushinHub.prototype.connectEvents = function () {
        var _this = this;
        this.hubConnection.on('Assign', function (cup, actions, playercount, round) {
            var assignState = {
                playercount: playercount,
                roundNumber: round,
                cupNumber: cup,
                actions: actions
            };
            console.log("We were assigned!  Do stuff!");
            _this.emit(WhiteRushinHub.Events.Assign, assignState);
        });
        var _loop_1 = function (e) {
            this_1.hubConnection.on(e, function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                _this.emit.apply(_this, __spreadArrays([e], args));
            });
        };
        var this_1 = this;
        for (var _i = 0, _a = [
            WhiteRushinHub.Events.UpdateReadyCount,
            WhiteRushinHub.Events.StatePush,
            WhiteRushinHub.Events.Result,
        ]; _i < _a.length; _i++) {
            var e = _a[_i];
            _loop_1(e);
        }
        this.hubConnection.onclose(function () { _this.game.scene.start("Disconnected"); });
        this.hubConnection.onreconnecting(function () { _this.game.scene.start("Disconnected"); });
    };
    WhiteRushinHub.prototype.connectToHub = function () {
        return __awaiter(this, void 0, void 0, function () {
            var err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.hubConnection.start()];
                    case 1:
                        _a.sent();
                        console.log("Connected to White Rushin hub");
                        return [3 /*break*/, 3];
                    case 2:
                        err_1 = _a.sent();
                        console.log(err_1);
                        setTimeout(this.connectToHub, 1000);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    WhiteRushinHub.prototype.Register = function (teamId) {
        if (!teamId) {
            teamId = WhiteRushinHub.Room;
        }
        return this.hubConnection.invoke('Register', teamId);
    };
    ;
    WhiteRushinHub.prototype.SubmitCup = function () {
        return this.hubConnection.invoke('SubmitCup');
    };
    ;
    WhiteRushinHub.prototype.SendAction = function (action, target) {
        return this.hubConnection.invoke('SendAction', action, target);
    };
    ;
    WhiteRushinHub.prototype.EmptyCup = function () {
        return this.hubConnection.invoke('EmptyCup');
    };
    ;
    WhiteRushinHub.prototype.Reset = function () {
        return this.hubConnection.invoke('Reset');
    };
    ;
    WhiteRushinHub.prototype.FetchState = function () {
        return this.hubConnection.invoke('FetchState');
    };
    ;
    WhiteRushinHub.prototype.ReadyUp = function () {
        return this.hubConnection.invoke("ReadyUp");
    };
    WhiteRushinHub.prototype.AllReady = function () {
        return this.hubConnection.invoke("AllReady");
    };
    WhiteRushinHub.Events = {
        Assign: 'Assign',
        StatePush: 'StatePush',
        Result: 'Result',
        UpdateReadyCount: 'UpdateReadyCount'
    };
    return WhiteRushinHub;
}(Phaser.Events.EventEmitter));
exports.WhiteRushinHub = WhiteRushinHub;


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hlbHBlcnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy9iaXR0ZXJzLXNjZW5lLnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvYm9vdC1zY2VuZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL2JvdXJib24tc2NlbmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy9kaXNjb25uZWN0ZWQtc2NlbmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy9nYW1lLXNjZW5lLnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvaWNlLXNjZW5lLnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy9qdWljZXItc2NlbmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy9tYWluLW1lbnUtc2NlbmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy9tdWRkbGUtc2NlbmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy9vcmFuZ2Utc2NlbmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy9wZXJtaXNzaW9ucy1zY2VuZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL3BvdXItc2NlbmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy9yZXN1bHRzLXNjZW5lLnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvc2hha2Utc2NlbmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy9zdWNjZXNzLXNjZW5lLnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvdmVybW91dGgtc2NlbmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL290aGVyLWdsYXNzLWJ1dHRvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvc2NlbmUt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LENBQUMsRUFBRSxDQUFDLFdBQVcsRUFBRSxVQUFDLE9BQU8sRUFBRSxVQUFVO1lBQzdDLFVBQVUsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDL0IsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFDLE1BQU0sR0FBQyxDQUFDLEVBQUUsT0FBTyxFQUFFLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztRQUUzRyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3pFLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDekUsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN6RSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3pFLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEdB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QUssQ0FBQyxZQUFZLENBQUMsQ0FBQyxHQUFHLEtBQUksQ0FBQyxJQUFJLEVBQUU7d0JBQ3BDLEtBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7cUJBQ2xDO29CQUNELElBQUksS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDLEdBQUcsS0FBSSxDQUFDLElBQUksRUFBRTt3QkFDcEMsS0FBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztxQkFDbEM7b0JBQ0QsSUFBSSxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUMsR0FBRyxLQUFJLENBQUMsSUFBSSxFQUFFO3dCQUNwQyxLQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO3FCQUNsQztvQkFDRCxJQUFJLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQyxHQUFHLEtBQUksQ0FBQyxJQUFJLEVBQUU7d0JBQ3BDLEtBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7cUJBQ2xDO29CQUNELElBQUksS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDLEdBQUcsS0FBSSxDQUFDLElBQUksRUFBRTt3QkFDcEMsS0FBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztxQkFDbEM7b0JBQ0QsSUFBSSxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUMsR0FBRyxLQUFJLENBQUMsSUFBSSxFQUFFO3dCQUNwQyxLQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO3FCQUNsQztvQkFDRCxLQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxPQUFLLEtBQUksQ0FBQyxJQUFJLFNBQUksS0FBSSxDQUFDLElBQU0sQ0FBQyxDQUFDO29CQUNsRCxLQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxPQUFLLEtBQUksQ0FBQyxJQUFJLFNBQUksS0FBSSxDQUFDLElBQU0s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LElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxFQUFFLGlDQUFpQyxDQUFDLENBQUM7UUFDbkUsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLDJCQUEyQixDQUFDLENBQUM7UUFDdkQsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxFQUFFLCtCQUErQixDQUFDLENBQUM7UUFDaEUsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFLDJCQUEyQixDQUFDLENBQUM7UUFDeEQsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFLDRCQUE0QixDQUFDLENBQUM7UUFDekQsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFLDRCQUE0QixDQUFDLENBQUM7UUFDekQsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFLDRCQUE0QixDQUFDLENBQUM7UUFDekQsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsbUJBQW1CLEVBQUUsNEJBQTRCLENBQUMsQ0FBQztRQUNuRSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUUsNEJBQTRCLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUUsNEJBQTRCLENBQUMsQ0FBQztRQUMxRCxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUUsNkJBQTZCLENBQUMsQ0FBQztRQUMzRCxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUUsNkJBQTZCLENBQUMsQ0FBQztRQUMzRCxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUUsNkJBQTZCLENBQUMsQ0FBQztRQUMzRCxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUUsNEJBQTRCLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUss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QVMsR0FBRyxDQUFDLEVBQUU7WUFFdEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSx3QkFBc0IsQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBRyxFQUFFLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBRS9ILElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1lBQ3JILElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1lBQy9ILElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1lBQy9ILElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1lBRS9ILElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUMxQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDMUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQzFDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUUxQyxJQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksRUFBRSxDQUFDO1lBQzNDLElBQUksMEJBQVcsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsTUFBTSxHQUFHLElBQUksRUFBRSxhQUFhLEVBQUUsY0FBTSxzQ0FBYyxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUUsRUFBbkMsQ0FBbUMsQ0FBQyxDQUFDO1lBQzNHLElBQUksMEJBQVcsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsTUFBTSxHQUFHLElBQUksRUFBRSxTQUFTLEVBQUUsY0FBTSxzQ0FBYyxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsRUFBbEMsQ0FBa0MsRUFBRSxRQUFRLENBQUM7WUFFL0csSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsU0FBUyxFQUFFLFVBQUMsUUFBUSxFQUFFLFVBQVU7Z0JBQzVDLFVBQVUsQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUN6QixDQUFDLENBQUMsQ0FBQztZQUVILElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQztZQUM3RCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUM7WUFFOUQsSUFBSSxT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LEVBQUUsQ0FBQztvQkFDbEIsS0FBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDdEIsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO2FBQ1Q7UUFDSCxDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDekUsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN6RSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3pFLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDekUsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUV6RSxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUss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LEVBQUUsRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3pFLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDekUsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN6RSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRXpFLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFDLENBQUMsRUFBRSxDQUFDLEdBQUMsTUFBTSxHQUFDLENBQUMsRUFBRSxPQUFPLEVBQUUsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO1FBRTNHLElBQU0sV0FBVyxHQUFHLElBQUksMEJBQVcsQ0FBQyxJQUFJLEVBQUUsS0FBSyxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLGNBQVEsS0FBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDN0gsV0FBVyxDQUFDLFdB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Q0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN6RSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3pFLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDekUsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUUxRSxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFDLE1BQU0sR0FBQyxDQUFDLEVBQUUsUUFBUSxFQUFFLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztRQUU1RyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUV4QixJQUFNLFdBQVcsR0FBRyxJQUFJLDBCQUFXLENBQUMsSUFBSSxFQUFFLEtBQUssR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxjQUFRLEtBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQzdILFdB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QyxJQUFJLEdBQUcsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7cUJBQ2xDO29CQUNELElBQUksS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDLEdBQUcsS0FBSSxDQUFDLElBQUksRUFBRTt3QkFDcEMsS0FBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztxQkFDbEM7b0JBQ0QsSUFBSSxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUMsR0FBRyxLQUFJLENBQUMsSUFBSSxFQUFFO3dCQUNwQyxLQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO3FCQUNsQztvQkFDRCxJQUFJLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQyxHQUFHLEtBQUksQ0FBQyxJQUFJLEVBQUU7d0JBQ3BDLEtBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7cUJBQ2xDO29CQUNELEtBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLE9BQUssS0FBSSxDQUFDLElBQUksU0FBSSxLQUFJLENBQUMsSUFBTSxDQUFDLENBQUM7b0JBQ2xELEtBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLE9BQUssS0FBSSxDQUFDLElBQUksU0FBSSxLQUFJLENBQUMsSUFBTSxDQUFDLENBQUM7b0JBQ2xELEtBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLE9BQUssS0FBSSxDQUFDLElBQUksU0FBSSxLQUFJLENBQUMsSUFBTSxDQUFDLENBQUM7b0JBQ2xELEtBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLE9BQUssS0FBSSxDQUFDLENBQUMsU0FBSSxLQUFJLENBQUMsVUFBWSxDQUFDLENBQUM7b0JBQ3JELEtBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFlBQVUsS0FBSSxDQUFDLFVBQVksQ0FBQyxDQUFDO2dCQUNsRCxDQUFDLENBQUMsQ0FBQztZQUNMLENBQUMsQ0FBQyxDQUFDO1NBQ0o7UUFBQyxPQUFPLEVBQUUs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TyxHQUFkO1FBQ0ksT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBRU0saUNBQVEsR0FBZjtRQUNJLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDakQsQ0FBQztJQWhIc0IscUJBQU0sR0FBRztRQUM1QixNQUFNLEVBQUUsUUFBUTtRQUNoQixTQUFTLEVBQUUsV0FBVztRQUN0QixNQUFNLEVBQUUsUUFBUTtRQUNoQixnQkFBZ0IsRUFBRSxrQkFBa0I7S0FDdkMsQ0FBQztJQTRHTixxQkFBQztDQUFBLENBbkhtQyxNQUFNLENBQUMsTUFBTSxDQUFDLFlBQVksR0FtSDdEO0FBbkhZLHdDQUFjIiwiZmlsZSI6ImFwcC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwiYXBwXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goW1wiLi9zcmMvbWFpbi50c1wiLFwidmVuZG9yc1wiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsImltcG9ydCAqIGFzIFBoYXNlciBmcm9tICdwaGFzZXInO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldEdhbWVDZW50ZXIgPSAoc2NlbmU6IFBoYXNlci5TY2VuZSk6IHsgeDogbnVtYmVyLCB5OiBudW1iZXIgfSA9PiB7XHJcbiAgY29uc3QgdyA9IHNjZW5lLmdhbWUuc2NhbGUud2lkdGg7XHJcbiAgY29uc3QgaCA9IHNjZW5lLmdhbWUuc2NhbGUuaGVpZ2h0O1xyXG4gIHJldHVybiB7IHg6IHcgLyAyLCB5OiBoIC8gMiB9O1xyXG59O1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBkcmlua1RvQ29sb3JNYXA6IE1hcDxzdHJpbmcsIG51bWJlcj4gPSBuZXcgTWFwKFtcclxuICBbJ0JvdXJib24nLCAweGRiNzkwMF0sXHJcbiAgWydWZXJtb3V0aCcsIDB4NTUwMTAzXSxcclxuICBbJ1ZvZGthJywgMHg4MDgwODBdLFxyXG4gIFsnR2luJywgMHg3NWEzYTNdLFxyXG4gIFsnUnVtJywgMHhBQzU5MkRdLFxyXG4gIFsnVHJpcGxlIFNlYycsIDB4ZmZjYzk5XSxcclxuICBbJ1RlcXVpbGEnLCAweDgwZmZmZl0sXHJcbiAgWydDb2tlJywgMHgzQzAwMDBdLFxyXG4gIFsnTGVtb24gSnVpY2UnLCAweGZmZmY5OV0sXHJcbiAgWydMaW1lIEp1aWNlJywgMHhkOWZmYjNdLFxyXG4gIFsnT3JhbmdlIEp1aWNlJywgMHhmZmNjOTldLFxyXG4gIFsnQW5nb3N0dXJhIEJpdHRlcnMnLCAweEIxMjUwQ11cclxuXSk7XHJcblxyXG5leHBvcnQgY29uc3QgSW5ncmVkaWVudHMgPSBbXHJcbiAgJ1NoYWtlIERyaW5rJyxcclxuICAnTXVkZGxlIERyaW5rJyxcclxuICAnT3JhbmdlIFBlZWwnLFxyXG4gICdCb3VyYm9uJyxcclxuICAnSWNlIEN1YmUnLFxyXG4gICdWZXJtb3V0aCcsXHJcbiAgJ0xlbW9uIEp1aWNlJyxcclxuICAnTGltZSBKdWljZScsXHJcbiAgJ09yYW5nZSBKdWljZScsXHJcbiAgJ0FuZ29zdHVyYSBCaXR0ZXJzJyxcclxuICAnVm9ka2EnLFxyXG4gICdHaW4nLFxyXG4gICdSdW0nLFxyXG4gICdUcmlwbGUgU2VjJyxcclxuICAnVGVxdWlsYScsXHJcbiAgJ0Nva2UnLFxyXG4gICdTb2RhJyxcclxuICAnU2ltcGxlIFN5cnVwJyxcclxuICAnVG9uaWMnLFxyXG4gICdCcmFuZHknLFxyXG4gICdDcnVzaGVkIEljZScsXHJcbiAgJ0xpbWUgV2VkZ2UnLFxyXG4gICdMZW1vbiBXZWRnZScsXHJcbiAgJ1N0aXIgRHJpbmsnLFxyXG4gICdTdHJhaW4gRHJpbmsnLFxyXG4gICdDb2duYWMnLFxyXG4gICdFZ2cgV2hpdGUnXHJcbl07XHJcbi8qXHJcbmV4cG9ydCBjb25zdCBzdHJpbmdUb0JhY2tlbmROdW1iZXJNYXA6IE1hcDxzdHJpbmcsIG51bWJlcj4gPSBuZXcgTWFwKFtcclxuICBbJ1RlcXVpbGEnLCAwXSxcclxuICBbJ0JyYW5keScsIDFdLFxyXG4gIFsnR2luJywgMl0sXHJcbiAgWydSdW0nLCAzXSxcclxuICBbJ1ZvZGthJywgNF0sXHJcbiAgWydXaGlza3knLCA1XSxcclxuICBbJ1RyaXBsZSBTZWMnLCA2XSxcclxuICBbJ1Zlcm1vdXRoJywgN10sXHJcbiAgWydBbmdvc3R1cmEgQml0dGVycycsIDhdLFxyXG4gIFsnQ29rZScsIDldLFxyXG4gIFsnU29kYScsIDEwXSxcclxuICBbJ1RvbmljJywgMF0sXHJcbiAgWydTaW1wbGUgU3lydXAnLCAwXSxcclxuICBbJ0ljZSBDdWJlJywgMF0sXHJcbiAgWydUb25pYycsIDBdLFxyXG4gIFsnTGVtb24gSnVpY2UnLCAwXSxcclxuICBbJ0xpbWUgSnVpY2UnLCAwXSxcclxuICBbJ09yYW5nZSBKdWljZScsIDBdLFxyXG4gIFsnU2hha2UgRHJpbmsnLCAwXSxcclxuICBbJ1N0aXIgRHJpbmsnLCAwXSxcclxuICBbJ011ZGRsZSBEcmluaycsIDBdLFxyXG4gIFsnTGltZSBXZWRnZScsIDBdLFxyXG4gIFsnTGVtb24gV2VkZ2UnLCAwXSxcclxuICBbJ09yYW5nZSBXZWRnZScsIDBdLFxyXG5dKSovXHJcblxyXG5leHBvcnQgdHlwZSBGaW5pc2hGdW5jdGlvbiA9IChnb29kOiBib29sZWFuKSA9PiB2b2lkOyIsImltcG9ydCAqIGFzIFBoYXNlciBmcm9tICdwaGFzZXInO1xyXG5pbXBvcnQgU2NlbmVzIGZyb20gJy4vc2NlbmVzJztcclxuaW1wb3J0IHsgV2hpdGVSdXNoaW5IdWIgfSBmcm9tICcuL3doaXRlUnVzaGluSHViJztcclxuXHJcbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbigpIHtcclxuICBjb25zdCBnYW1lQ29uZmlnOiBQaGFzZXIuVHlwZXMuQ29yZS5HYW1lQ29uZmlnID0ge1xyXG4gICAgdGl0bGU6ICdTYW1wbGUnLFxyXG4gIFxyXG4gICAgdHlwZTogUGhhc2VyLldFQkdMLFxyXG4gIFxyXG4gICAgc2NhbGU6IHtcclxuICAgICAgd2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoLFxyXG4gICAgICBoZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCxcclxuICAgIH0sXHJcbiAgXHJcbiAgICBzY2VuZTogU2NlbmVzLFxyXG4gIFxyXG4gICAgcGh5c2ljczoge1xyXG4gICAgICBkZWZhdWx0OiAnYXJjYWRlJyxcclxuICAgICAgYXJjYWRlOiB7XHJcbiAgICAgICAgZGVidWc6IHRydWUsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIFxyXG4gICAgcGFyZW50OiAnY29udGVudCcsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMDAwMDAwJyxcclxuICB9O1xyXG4gIFxyXG4gIGNvbnN0IGdhbWUgPSBuZXcgUGhhc2VyLkdhbWUoZ2FtZUNvbmZpZyk7XHJcbiAgV2hpdGVSdXNoaW5IdWIuSW5pdGlhbGl6ZShnYW1lKTtcclxuXHJcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHtcclxuICAgIGdhbWUuc2NhbGUucmVmcmVzaCgpO1xyXG4gIH0pO1xyXG59XHJcblxyXG4iLCJpbXBvcnQgeyBGaW5pc2hGdW5jdGlvbiB9IGZyb20gJy4uL2hlbHBlcnMnO1xyXG5pbXBvcnQgeyBTY2VuZUJ1dHRvbiB9IGZyb20gJy4uL3VpL3NjZW5lLWJ1dHRvbic7XHJcblxyXG5jb25zdCBzY2VuZUNvbmZpZzogUGhhc2VyLlR5cGVzLlNjZW5lcy5TZXR0aW5nc0NvbmZpZyA9IHtcclxuICBhY3RpdmU6IGZhbHNlLFxyXG4gIHZpc2libGU6IGZhbHNlLFxyXG4gIGtleTogJ0FuZ29zdHVyYSBCaXR0ZXJzJyxcclxufTtcclxuXHJcbmNsYXNzIEdhbWVTY2VuZUFyZ3VtZW50cyB7XHJcbiAgcHVibGljIG9uRmluaXNoOiBGaW5pc2hGdW5jdGlvbjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEJpdHRlcnNTY2VuZSBleHRlbmRzIFBoYXNlci5TY2VuZSB7XHJcbiAgcHVibGljIHNwZWVkID0gMjAwO1xyXG5cclxuICBwcml2YXRlIGJvdHRsZTogUGhhc2VyLkdhbWVPYmplY3RzLlNwcml0ZTtcclxuXHJcbiAgcHJpdmF0ZSBzaGFrZUNvdW50ID0gMDtcclxuICBwcml2YXRlIHRyYW5zaXRpb25pbmcgPSBmYWxzZTtcclxuICBwcml2YXRlIG4gPSAwO1xyXG4gIHByaXZhdGUgbnRocmVzaG9sZCA9IDA7XHJcbiAgcHJpdmF0ZSBtYXh4ID0gMDtcclxuICBwcml2YXRlIG1heHkgPSAwO1xyXG4gIHByaXZhdGUgbWF4eiA9IDA7XHJcbiAgcHJpdmF0ZSBtaW54ID0gMDtcclxuICBwcml2YXRlIG1pbnkgPSAwO1xyXG4gIHByaXZhdGUgbWlueiA9IDA7XHJcbiAgcHJpdmF0ZSB0aHJlc2hvbGQgPSAxNTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcihzY2VuZUNvbmZpZyk7XHJcbiAgfVxyXG4gIHB1YmxpYyBpbnN0cnVjdGlvblRleHQ6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0O1xyXG4gIHB1YmxpYyB0ZXh0MTogUGhhc2VyLkdhbWVPYmplY3RzLlRleHQ7XHJcbiAgcHVibGljIHRleHQyOiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dDtcclxuICBwdWJsaWMgdGV4dDM6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0O1xyXG4gIHB1YmxpYyB0ZXh0NDogUGhhc2VyLkdhbWVPYmplY3RzLlRleHQ7XHJcbiAgcHVibGljIHRleHQ1OiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dDtcclxuICBwdWJsaWMgYm90dGxlTmFtZTogc3RyaW5nO1xyXG4gIHB1YmxpYyBvbkZpbmlzaDogRmluaXNoRnVuY3Rpb247XHJcblxyXG4gIHB1YmxpYyBpbml0KGRhdGE6IEdhbWVTY2VuZUFyZ3VtZW50cyk6IHZvaWQge1xyXG4gICAgY29uc29sZS5sb2coJ0FuZ29zdHVyYSBCaXR0ZXJzIHNjZW5lIGluaXQnKTtcclxuICAgIHRoaXMuYm90dGxlTmFtZSA9ICdiaXR0ZXJzJztcclxuICAgIHRoaXMub25GaW5pc2ggPSBkYXRhLm9uRmluaXNoO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNyZWF0ZSgpOiB2b2lkIHtcclxuICAgIGNvbnNvbGUubG9nKCdBbmdvc3R1cmEgQml0dGVycyBzY2VuZSBjcmVhdGUnKTtcclxuICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCB9ID0gdGhpcy5zeXMuZ2FtZS5jYW52YXM7XHJcbiAgICB0aGlzLnNoYWtlQ291bnQgPSAwO1xyXG4gICAgdGhpcy50cmFuc2l0aW9uaW5nID0gZmFsc2U7XHJcbiAgICB0aGlzLm4gPSAwO1xyXG4gICAgdGhpcy5udGhyZXNob2xkID0gMTM7XHJcbiAgICB0aGlzLmNhbGxiYWNrKCk7XHJcblxyXG4gICAgY29uc29sZS5sb2coYGdsYXNzIHg6ICR7d2lkdGggLyA0fWApO1xyXG4gICAgY29uc29sZS5sb2coYGdsYXNzIHk6ICR7aGVpZ2h0IC8gMn1gKTtcclxuXHJcbiAgICB0aGlzLmJvdHRsZSA9IHRoaXMuYWRkLnNwcml0ZSh3aWR0aCAvIDIsIGhlaWdodCAvIDIsIHRoaXMuYm90dGxlTmFtZSkuc2V0SW50ZXJhY3RpdmUoKTtcclxuICAgIGNvbnNvbGUubG9nKGB0cmllZCB0byByZW5kZXIgJHt0aGlzLmJvdHRsZU5hbWV9IGJvdHRsZWApO1xyXG4gICAgdGhpcy5ib3R0bGUuc2V0U2NhbGUoMC42KTtcclxuICAgIC8vY29uc29sZS5sb2codGhpcy5lbXB0eUdsYXNzLngpO1xyXG4gICAgY29uc29sZS5sb2codGhpcy5ib3R0bGUuZGlzcGxheUhlaWdodCk7XHJcbiAgICAvL3RoaXMuYm90dGxlLnNldFBvc2l0aW9uKHRoaXMuZW1wdHlHbGFzcy54ICsgdGhpcy5ib3R0bGUuZGlzcGxheUhlaWdodCAvIDQpO1xyXG4gICAgLy90aGlzLmJvdHRsZS5zZXRTY2FsZSgwLjUpO1xyXG5cclxuICAgIHRoaXMuYm90dGxlLm9uKCdwb2ludGVyb3ZlcicsICgpID0+IHtcclxuICAgICAgdGhpcy5ib3R0bGUuc2V0VGludCgweGNjY2NjYyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmJvdHRsZS5vbigncG9pbnRlcm91dCcsICgpID0+IHtcclxuICAgICAgdGhpcy5ib3R0bGUuY2xlYXJUaW50KCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmJvdHRsZS5vbigncG9pbnRlcmRvd24nLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMuc2hha2VDb3VudCsrO1xyXG4gICAgICBpZiAodGhpcy5zaGFrZUNvdW50ID4gNykge1xyXG4gICAgICAgIHRoaXMuc2hha2VDb3VudCA9IDc7XHJcbiAgICAgIH1cclxuICAgICAgLy90aGlzLmJvdHRsZS5zZXRUZXh0dXJlKGBzaGFrZXIke3RoaXMuc2hha2VDb3VudH1gKTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5pbnB1dC5zZXREcmFnZ2FibGUodGhpcy5ib3R0bGUpO1xyXG5cclxuICAgIHRoaXMuaW5wdXQub24oJ2RyYWdzdGFydCcsIChwb2ludGVyLCBnYW1lT2JqZWN0KSA9PiB7XHJcbiAgICAgIGdhbWVPYmplY3Quc2V0VGludCgweDk5OTk5OSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmluc3RydWN0aW9uVGV4dCA9IHRoaXMuYWRkLnRleHQod2lkdGgvNCwgMypoZWlnaHQvNCwgJ0RBU0ghJywgeyBjb2xvcjogJyNmZjAwMDAnLCBmb250U2l6ZTogXCI0MHB4XCIgfSk7XHJcblxyXG4gICAgdGhpcy50ZXh0MSA9IHRoaXMuYWRkLnRleHQoNTAsIDEwLCAnJywgeyBjb2xvcjogJyMwMGZmMDAnIH0pLnNldEFscGhhKDApO1xyXG4gICAgdGhpcy50ZXh0MiA9IHRoaXMuYWRkLnRleHQoNTAsIDMwLCAnJywgeyBjb2xvcjogJyMwMGZmMDAnIH0pLnNldEFscGhhKDApO1xyXG4gICAgdGhpcy50ZXh0MyA9IHRoaXMuYWRkLnRleHQoNTAsIDYwLCAnJywgeyBjb2xvcjogJyMwMGZmMDAnIH0pLnNldEFscGhhKDApO1xyXG4gICAgdGhpcy50ZXh0NCA9IHRoaXMuYWRkLnRleHQoNTAsIDkwLCAnJywgeyBjb2xvcjogJyMwMGZmMDAnIH0pLnNldEFscGhhKDApO1xyXG4gICAgdGhpcy50ZXh0NSA9IHRoaXMuYWRkLnRleHQoNTAsIDEyMCwgJycsIHsgY29sb3I6ICcjMDBmZjAwJyB9KS5zZXRBbHBoYSgwKTtcclxuXHJcbiAgICB0aGlzLmJvdHRsZS5zZXREZXB0aCgxKTtcclxuICAgIG5ldyBTY2VuZUJ1dHRvbih0aGlzLCB3aWR0aCAtIDUwLCA1MCwgXCJYXCIsICgpID0+IHsgdGhpcy5vbkZpbmlzaChmYWxzZSk7IHRoaXMuc2NlbmUuc3RvcCgpOyB9LCAweEM4MDAwMCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdXBkYXRlKCk6IHZvaWQge1xyXG4gICAgLy8gRXZlcnkgZnJhbWUsIHdlIGNyZWF0ZSBhIG5ldyB2ZWxvY2l0eSBmb3IgdGhlIHNwcml0ZSBiYXNlZCBvbiB3aGF0IGtleXMgdGhlIHBsYXllciBpcyBob2xkaW5nIGRvd24uXHJcbiAgICBpZiAodGhpcy5uID4gdGhpcy5udGhyZXNob2xkICYmIHRoaXMuc2hha2VDb3VudCA8PSA3KSB7XHJcbiAgICAgIHRoaXMubiA9IDA7XHJcbiAgICAgIHRoaXMuc2hha2VDb3VudCsrO1xyXG4gICAgICB0aGlzLnRleHQ0LnNldFRleHQoYG4gJHt0aGlzLm59ICR7dGhpcy5udGhyZXNob2xkfWApO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuc2hha2VDb3VudCAlIDIgPT0gMCkge1xyXG4gICAgICB0aGlzLmJvdHRsZS5zZXRUZXh0dXJlKGBiaXR0ZXJzJHt0aGlzLnNoYWtlQ291bnQgLyAyfWApO1xyXG5cclxuICAgIH1cclxuICAgIGlmICh0aGlzLnNoYWtlQ291bnQgPiA1ICYmICF0aGlzLnRyYW5zaXRpb25pbmcpIHtcclxuICAgICAgdGhpcy50cmFuc2l0aW9uaW5nID0gdHJ1ZTtcclxuICAgICAgZG9jdW1lbnQuY29va2llID0gYHNoYWtlPTFgO1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICB0aGlzLnNjZW5lLnN0b3AoKTtcclxuICAgICAgICB0aGlzLm9uRmluaXNoKHRydWUpO1xyXG4gICAgICB9LCA3NTApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGNhbGxBcHBsZSgpOiB2b2lkIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIERldmljZU1vdGlvbkV2ZW50LnJlcXVlc3RQZXJtaXNzaW9uKCkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICB0aGlzLnRleHQxLnNldFRleHQocmVzcG9uc2UpO1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdkZXZpY2Vtb3Rpb24nLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGV2ZW50KTtcclxuICAgICAgICAgIGlmIChldmVudC5hY2NlbGVyYXRpb24ueCA8IHRoaXMudGhyZXNob2xkICogLTEgfHwgZXZlbnQuYWNjZWxlcmF0aW9uLnggPiB0aGlzLnRocmVzaG9sZCkge1xyXG4gICAgICAgICAgICB0aGlzLm4rKztcclxuICAgICAgICAgIH0gZWxzZSBpZiAoZXZlbnQuYWNjZWxlcmF0aW9uLnkgPCB0aGlzLnRocmVzaG9sZCAqIC0xIHx8IGV2ZW50LmFjY2VsZXJhdGlvbi55ID4gdGhpcy50aHJlc2hvbGQpIHtcclxuICAgICAgICAgICAgdGhpcy5uKys7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKGV2ZW50LmFjY2VsZXJhdGlvbi56IDwgdGhpcy50aHJlc2hvbGQgKiAtMSB8fCBldmVudC5hY2NlbGVyYXRpb24ueiA+IHRoaXMudGhyZXNob2xkKSB7XHJcbiAgICAgICAgICAgIHRoaXMubisrO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC8vIHRleHRcclxuICAgICAgICAgIGlmIChldmVudC5hY2NlbGVyYXRpb24ueCA8IHRoaXMubWlueCkge1xyXG4gICAgICAgICAgICB0aGlzLm1pbnggPSBldmVudC5hY2NlbGVyYXRpb24ueDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmIChldmVudC5hY2NlbGVyYXRpb24ueSA8IHRoaXMubWlueSkge1xyXG4gICAgICAgICAgICB0aGlzLm1pbnkgPSBldmVudC5hY2NlbGVyYXRpb24ueTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmIChldmVudC5hY2NlbGVyYXRpb24ueiA8IHRoaXMubWlueikge1xyXG4gICAgICAgICAgICB0aGlzLm1pbnogPSBldmVudC5hY2NlbGVyYXRpb24uejtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmIChldmVudC5hY2NlbGVyYXRpb24ueCA+IHRoaXMubWF4eCkge1xyXG4gICAgICAgICAgICB0aGlzLm1heHggPSBldmVudC5hY2NlbGVyYXRpb24ueDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmIChldmVudC5hY2NlbGVyYXRpb24ueSA+IHRoaXMubWF4eSkge1xyXG4gICAgICAgICAgICB0aGlzLm1heHkgPSBldmVudC5hY2NlbGVyYXRpb24ueTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmIChldmVudC5hY2NlbGVyYXRpb24ueiA+IHRoaXMubWF4eikge1xyXG4gICAgICAgICAgICB0aGlzLm1heHogPSBldmVudC5hY2NlbGVyYXRpb24uejtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHRoaXMudGV4dDEuc2V0VGV4dChgeCAke3RoaXMubWlueH0gJHt0aGlzLm1heHh9YCk7XHJcbiAgICAgICAgICB0aGlzLnRleHQyLnNldFRleHQoYHkgJHt0aGlzLm1pbnl9ICR7dGhpcy5tYXh5fWApO1xyXG4gICAgICAgICAgdGhpcy50ZXh0My5zZXRUZXh0KGB6ICR7dGhpcy5taW56fSAke3RoaXMubWF4en1gKTtcclxuICAgICAgICAgIHRoaXMudGV4dDQuc2V0VGV4dChgbiAke3RoaXMubn0gJHt0aGlzLm50aHJlc2hvbGR9YCk7XHJcbiAgICAgICAgICB0aGlzLnRleHQ1LnNldFRleHQoYHNoYWtlcyAke3RoaXMuc2hha2VDb3VudH1gKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChleCkge1xyXG4gICAgICBjb25zb2xlLmxvZygnbm90IGlvcycpO1xyXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignZGV2aWNlbW90aW9uJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXZlbnQpO1xyXG4gICAgICAgIGlmIChldmVudC5hY2NlbGVyYXRpb24ueCA8IHRoaXMudGhyZXNob2xkICogLTEgfHwgZXZlbnQuYWNjZWxlcmF0aW9uLnggPiB0aGlzLnRocmVzaG9sZCkge1xyXG4gICAgICAgICAgdGhpcy5uKys7XHJcbiAgICAgICAgfSBlbHNlIGlmIChldmVudC5hY2NlbGVyYXRpb24ueSA8IHRoaXMudGhyZXNob2xkICogLTEgfHwgZXZlbnQuYWNjZWxlcmF0aW9uLnkgPiB0aGlzLnRocmVzaG9sZCkge1xyXG4gICAgICAgICAgdGhpcy5uKys7XHJcbiAgICAgICAgfSBlbHNlIGlmIChldmVudC5hY2NlbGVyYXRpb24ueiA8IHRoaXMudGhyZXNob2xkICogLTEgfHwgZXZlbnQuYWNjZWxlcmF0aW9uLnogPiB0aGlzLnRocmVzaG9sZCkge1xyXG4gICAgICAgICAgdGhpcy5uKys7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyB0ZXh0XHJcbiAgICAgICAgaWYgKGV2ZW50LmFjY2VsZXJhdGlvbi54IDwgdGhpcy5taW54KSB7XHJcbiAgICAgICAgICB0aGlzLm1pbnggPSBldmVudC5hY2NlbGVyYXRpb24ueDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGV2ZW50LmFjY2VsZXJhdGlvbi55IDwgdGhpcy5taW55KSB7XHJcbiAgICAgICAgICB0aGlzLm1pbnkgPSBldmVudC5hY2NlbGVyYXRpb24ueTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGV2ZW50LmFjY2VsZXJhdGlvbi56IDwgdGhpcy5taW56KSB7XHJcbiAgICAgICAgICB0aGlzLm1pbnogPSBldmVudC5hY2NlbGVyYXRpb24uejtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGV2ZW50LmFjY2VsZXJhdGlvbi54ID4gdGhpcy5tYXh4KSB7XHJcbiAgICAgICAgICB0aGlzLm1heHggPSBldmVudC5hY2NlbGVyYXRpb24ueDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGV2ZW50LmFjY2VsZXJhdGlvbi55ID4gdGhpcy5tYXh5KSB7XHJcbiAgICAgICAgICB0aGlzLm1heHkgPSBldmVudC5hY2NlbGVyYXRpb24ueTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGV2ZW50LmFjY2VsZXJhdGlvbi56ID4gdGhpcy5tYXh6KSB7XHJcbiAgICAgICAgICB0aGlzLm1heHogPSBldmVudC5hY2NlbGVyYXRpb24uejtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy50ZXh0MS5zZXRUZXh0KGB4ICR7dGhpcy5taW54fSAke3RoaXMubWF4eH1gKTtcclxuICAgICAgICB0aGlzLnRleHQyLnNldFRleHQoYHkgJHt0aGlzLm1pbnl9ICR7dGhpcy5tYXh5fWApO1xyXG4gICAgICAgIHRoaXMudGV4dDMuc2V0VGV4dChgeiAke3RoaXMubWluen0gJHt0aGlzLm1heHp9YCk7XHJcbiAgICAgICAgdGhpcy50ZXh0NC5zZXRUZXh0KGBuICR7dGhpcy5ufSAke3RoaXMubnRocmVzaG9sZH1gKTtcclxuICAgICAgICB0aGlzLnRleHQ1LnNldFRleHQoYHNoYWtlcyAke3RoaXMuc2hha2VDb3VudH1gKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHB1YmxpYyBjYWxsYmFjaygpOiB2b2lkIHtcclxuICAgIC8vdGhpcy50ZXh0MS5zZXRUZXh0KCdBc2tlZCcpO1xyXG4gICAgdGhpcy5tYXh4ID0gMDtcclxuICAgIHRoaXMubWF4eSA9IDA7XHJcbiAgICB0aGlzLm1heHogPSAwO1xyXG4gICAgdGhpcy5taW54ID0gMDtcclxuICAgIHRoaXMubWlueSA9IDA7XHJcbiAgICB0aGlzLm1pbnogPSAwO1xyXG4gICAgLy9pZiAod2luZG93LkRldmljZU9yaWVudGF0aW9uRXZlbnQpIHtcclxuICAgIC8vd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2RldmljZW9yaWVudGF0aW9uJywgZGV2aWNlT3JpZW50YXRpb25IYW5kbGVyLCBmYWxzZSk7XHJcbiAgICAvL31cclxuXHJcbiAgICAvKmlmICh3aW5kb3cuRGV2aWNlTW90aW9uRXZlbnQpIHtcclxuICAgICAgIHRoaXMudGV4dDIuc2V0VGV4dCgneWVzJyk7XHJcbiAgICAgICBjb25zb2xlLmxvZygneWVzJyk7XHJcbiAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignZGV2aWNlbW90aW9uJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgIGNvbnNvbGUubG9nKGV2ZW50KTtcclxuICAgICAgICAgaWYgKGV2ZW50LmFjY2VsZXJhdGlvbi54IDwgdGhpcy50aHJlc2hvbGQgKiAtMSB8fCBldmVudC5hY2NlbGVyYXRpb24ueCA+IHRoaXMudGhyZXNob2xkKSB7XHJcbiAgICAgICAgICAgdGhpcy5uKys7XHJcbiAgICAgICAgIH0gZWxzZSBpZiAoZXZlbnQuYWNjZWxlcmF0aW9uLnkgPCB0aGlzLnRocmVzaG9sZCAqIC0xIHx8IGV2ZW50LmFjY2VsZXJhdGlvbi55ID4gdGhpcy50aHJlc2hvbGQpIHtcclxuICAgICAgICAgICB0aGlzLm4rKztcclxuICAgICAgICAgfSBlbHNlIGlmIChldmVudC5hY2NlbGVyYXRpb24ueiA8IHRoaXMudGhyZXNob2xkICogLTEgfHwgZXZlbnQuYWNjZWxlcmF0aW9uLnogPiB0aGlzLnRocmVzaG9sZCkge1xyXG4gICAgICAgICAgIHRoaXMubisrO1xyXG4gICAgICAgICB9XHJcbiBcclxuICAgICAgICAgLy8gdGV4dFxyXG4gICAgICAgICBpZiAoZXZlbnQuYWNjZWxlcmF0aW9uLnggPCB0aGlzLm1pbngpIHtcclxuICAgICAgICAgICB0aGlzLm1pbnggPSBldmVudC5hY2NlbGVyYXRpb24ueDtcclxuICAgICAgICAgfVxyXG4gICAgICAgICBpZiAoZXZlbnQuYWNjZWxlcmF0aW9uLnkgPCB0aGlzLm1pbnkpIHtcclxuICAgICAgICAgICB0aGlzLm1pbnkgPSBldmVudC5hY2NlbGVyYXRpb24ueTtcclxuICAgICAgICAgfVxyXG4gICAgICAgICBpZiAoZXZlbnQuYWNjZWxlcmF0aW9uLnogPCB0aGlzLm1pbnopIHtcclxuICAgICAgICAgICB0aGlzLm1pbnogPSBldmVudC5hY2NlbGVyYXRpb24uejtcclxuICAgICAgICAgfVxyXG4gICAgICAgICBpZiAoZXZlbnQuYWNjZWxlcmF0aW9uLnggPiB0aGlzLm1heHgpIHtcclxuICAgICAgICAgICB0aGlzLm1heHggPSBldmVudC5hY2NlbGVyYXRpb24ueDtcclxuICAgICAgICAgfVxyXG4gICAgICAgICBpZiAoZXZlbnQuYWNjZWxlcmF0aW9uLnkgPiB0aGlzLm1heHkpIHtcclxuICAgICAgICAgICB0aGlzLm1heHkgPSBldmVudC5hY2NlbGVyYXRpb24ueTtcclxuICAgICAgICAgfVxyXG4gICAgICAgICBpZiAoZXZlbnQuYWNjZWxlcmF0aW9uLnogPiB0aGlzLm1heHopIHtcclxuICAgICAgICAgICB0aGlzLm1heHogPSBldmVudC5hY2NlbGVyYXRpb24uejtcclxuICAgICAgICAgfVxyXG4gICAgICAgICB0aGlzLnRleHQxLnNldFRleHQoYHggJHt0aGlzLm1pbnh9ICR7dGhpcy5tYXh4fWApO1xyXG4gICAgICAgICAvL3RoaXMudGV4dDIuc2V0VGV4dChgeSAke3RoaXMubWlueX0gJHt0aGlzLm1heHl9YCk7XHJcbiAgICAgICAgIHRoaXMudGV4dDMuc2V0VGV4dChgeiAke3RoaXMubWluen0gJHt0aGlzLm1heHp9YCk7XHJcbiAgICAgICAgIHRoaXMudGV4dDQuc2V0VGV4dChgbiAke3RoaXMubn0gJHt0aGlzLm50aHJlc2hvbGR9YCk7XHJcbiAgICAgICAgIHRoaXMudGV4dDUuc2V0VGV4dChgc2hha2VzICR7dGhpcy5zaGFrZUNvdW50fWApO1xyXG4gICAgICAgfSk7XHJcbiAgICAgfSBlbHNlIHtcclxuICAgICAgIHRoaXMudGV4dDIuc2V0VGV4dCgnbm8nKTtcclxuICAgICAgIGNvbnNvbGUubG9nKCdubycpO1xyXG4gICAgIH0qL1xyXG4gICAgdGhpcy5jYWxsQXBwbGUoKTtcclxuICAgIC8vXHJcbiAgfVxyXG59XHJcbiIsIi8qKlxyXG4gKiBUaGUgaW5pdGlhbCBzY2VuZSB0aGF0IGxvYWRzIGFsbCBuZWNlc3NhcnkgYXNzZXRzIHRvIHRoZSBnYW1lIGFuZCBkaXNwbGF5cyBhIGxvYWRpbmcgYmFyLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEJvb3RTY2VuZSBleHRlbmRzIFBoYXNlci5TY2VuZSB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcih7IGtleTogJ0Jvb3QnIH0pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNyZWF0ZSgpOiB2b2lkIHtcclxuICAgIGNvbnNvbGUubG9nKFwiQ3JlYXRlXCIpXHJcblxyXG4gICAgZG9jdW1lbnQuY29va2llID0gYG9yYW5nZT0wYDtcclxuICAgIGRvY3VtZW50LmNvb2tpZSA9IGBib3VyYm9uPTBgO1xyXG4gICAgZG9jdW1lbnQuY29va2llID0gYGljZT0wYDtcclxuICAgIGRvY3VtZW50LmNvb2tpZSA9IGB2ZXJtb3V0aD0wYDtcclxuICAgIGNvbnN0IGhhbGZXaWR0aCA9IHRoaXMuZ2FtZS5zY2FsZS53aWR0aCAqIDAuNTtcclxuICAgIGNvbnN0IGhhbGZIZWlnaHQgPSB0aGlzLmdhbWUuc2NhbGUuaGVpZ2h0ICogMC41O1xyXG5cclxuICAgIGNvbnN0IHByb2dyZXNzQmFySGVpZ2h0ID0gMTAwO1xyXG4gICAgY29uc3QgcHJvZ3Jlc3NCYXJXaWR0aCA9IDMwMDtcclxuICAgIGNvbnN0IHBhZGRpbmcgPSAyMDtcclxuXHJcbiAgICB0aGlzLmFkZC5yZWN0YW5nbGUoXHJcbiAgICAgIGhhbGZXaWR0aCxcclxuICAgICAgaGFsZkhlaWdodCxcclxuICAgICAgcHJvZ3Jlc3NCYXJXaWR0aCArIHBhZGRpbmcsXHJcbiAgICAgIHByb2dyZXNzQmFySGVpZ2h0ICsgcGFkZGluZyxcclxuICAgICAgMHgzMzMzMzMsXHJcbiAgICApO1xyXG5cclxuICAgIGNvbnN0IHByb2dyZXNzQmFyID0gdGhpcy5hZGQucmVjdGFuZ2xlKFxyXG4gICAgICBoYWxmV2lkdGggLSAocHJvZ3Jlc3NCYXJXaWR0aCAvIDIpLFxyXG4gICAgICBoYWxmSGVpZ2h0LFxyXG4gICAgICAwLFxyXG4gICAgICBwcm9ncmVzc0JhckhlaWdodCxcclxuICAgICAgMHg4ODg4ODgsXHJcbiAgICApO1xyXG5cclxuICAgIHRoaXMuYWRkLnRleHQoaGFsZldpZHRoLCBoYWxmSGVpZ2h0IC0gNzUsICdMb2FkaW5nLi4uJykuc2V0Rm9udFNpemUoMjQpLnNldE9yaWdpbigwLjUsIDAuNSk7XHJcbiAgICBjb25zdCBwZXJjZW50VGV4dCA9IHRoaXMuYWRkLnRleHQoaGFsZldpZHRoLCBoYWxmSGVpZ2h0LCAnMCUnKS5zZXRGb250U2l6ZSgyNCkuc2V0T3JpZ2luKDAuNSwgMC41KTtcclxuICAgIGNvbnN0IGFzc2V0VGV4dCA9IHRoaXMuYWRkLnRleHQoaGFsZldpZHRoLCBoYWxmSGVpZ2h0ICsgNzUsICcnKS5zZXRGb250U2l6ZSgyNCkuc2V0T3JpZ2luKDAuNSwgMC41KTtcclxuXHJcbiAgICB0aGlzLmxvYWQub24oJ3Byb2dyZXNzJywgKHZhbHVlOiBudW1iZXIpID0+IHtcclxuICAgICAgcHJvZ3Jlc3NCYXIud2lkdGggPSBwcm9ncmVzc0JhcldpZHRoICogdmFsdWU7XHJcbiAgICAgIHBlcmNlbnRUZXh0LnNldFRleHQoYCR7TWF0aC5mbG9vcih2YWx1ZSAqIDEwMCl9JWApO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5sb2FkLm9uKCdmaWxlcHJvZ3Jlc3MnLCAoZmlsZTogeyBrZXk6IHN0cmluZyB9KSA9PiB7XHJcbiAgICAgIGFzc2V0VGV4dC5zZXRUZXh0KGZpbGUua2V5KTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMubG9hZC5vbignY29tcGxldGUnLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMuc2NlbmUuc3RhcnQoJ1Blcm1pc3Npb25zJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmxvYWRBc3NldHMoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEFsbCBhc3NldHMgdGhhdCBuZWVkIHRvIGJlIGxvYWRlZCBieSB0aGUgZ2FtZSAoc3ByaXRlcywgaW1hZ2VzLCBhbmltYXRpb25zLCB0aWxlcywgbXVzaWMsIGV0YylcclxuICAgKiBzaG91bGQgYmUgYWRkZWQgdG8gdGhpcyBtZXRob2QuIE9uY2UgbG9hZGVkIGluLCB0aGUgbG9hZGVyIHdpbGwga2VlcCB0cmFjayBvZiB0aGVtLCBpbmRlcGVkZW50IG9mIHdoaWNoIHNjZW5lXHJcbiAgICogaXMgY3VycmVudGx5IGFjdGl2ZSwgc28gdGhleSBjYW4gYmUgYWNjZXNzZWQgYW55d2hlcmUuXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBsb2FkQXNzZXRzKCkge1xyXG4gICAgLy8gU291cmNlOiBPcGVuIEdhbWUgQXJ0XHJcbiAgICB0aGlzLmxvYWQuaW1hZ2UoJ3Zlcm1vdXRodG9wJywgJ2Fzc2V0cy9zcHJpdGVzL3Zlcm1vdXRodG9wMi5wbmcnKTtcclxuICAgIHRoaXMubG9hZC5pbWFnZSgndmVybW91dGh0b3Bvbmx5JywgJ2Fzc2V0cy9zcHJpdGVzL3Zlcm1vdXRodG9wb25seTIucG5nJyk7XHJcbiAgICB0aGlzLmxvYWQuaW1hZ2UoJ3Zlcm1vdXRoJywgJ2Fzc2V0cy9zcHJpdGVzL3Zlcm1vdXRoLnBuZycpO1xyXG4gICAgdGhpcy5sb2FkLmltYWdlKCdWZXJtb3V0aCcsICdhc3NldHMvc3ByaXRlcy92ZXJtb3V0aC5wbmcnKTtcclxuICAgIHRoaXMubG9hZC5pbWFnZSgnYm91cmJvbnRvcCcsICdhc3NldHMvc3ByaXRlcy9ib3VyYm9udG9wMi5wbmcnKTtcclxuICAgIHRoaXMubG9hZC5pbWFnZSgnYm91cmJvbnRvcG9ubHknLCAnYXNzZXRzL3Nwcml0ZXMvYm91cmJvbnRvcG9ubHkucG5nJyk7XHJcbiAgICB0aGlzLmxvYWQuaW1hZ2UoJ2JvdXJib24nLCAnYXNzZXRzL3Nwcml0ZXMvYm91cmJvbi5wbmcnKTtcclxuICAgIHRoaXMubG9hZC5pbWFnZSgnQm91cmJvbicsICdhc3NldHMvc3ByaXRlcy9ib3VyYm9uLnBuZycpO1xyXG4gICAgdGhpcy5sb2FkLmltYWdlKCdWb2RrYScsICdhc3NldHMvc3ByaXRlcy92b2RrYS5wbmcnKTtcclxuICAgIHRoaXMubG9hZC5pbWFnZSgnR2luJywgJ2Fzc2V0cy9zcHJpdGVzL2dpbi5wbmcnKTtcclxuICAgIHRoaXMubG9hZC5pbWFnZSgnUnVtJywgJ2Fzc2V0cy9zcHJpdGVzL3J1bS5wbmcnKTtcclxuICAgIHRoaXMubG9hZC5pbWFnZSgnVGVxdWlsYScsICdhc3NldHMvc3ByaXRlcy90ZXF1aWxhLnBuZycpO1xyXG4gICAgdGhpcy5sb2FkLmltYWdlKCdDb2tlJywgJ2Fzc2V0cy9zcHJpdGVzL2Nva2UucG5nJyk7XHJcbiAgICB0aGlzLmxvYWQuaW1hZ2UoJ1RyaXBsZSBTZWMnLCAnYXNzZXRzL3Nwcml0ZXMvdHJpcGxlc2VjLnBuZycpO1xyXG4gICAgdGhpcy5sb2FkLmltYWdlKCdlbXB0eWdsYXNzJywgJ2Fzc2V0cy9zcHJpdGVzL2VtcHR5Z2xhc3MucG5nJyk7XHJcbiAgICB0aGlzLmxvYWQuaW1hZ2UoJ211ZGRsZXJnbGFzcycsICdhc3NldHMvc3ByaXRlcy9tdWRkbGVyZ2xhc3MucG5nJyk7XHJcbiAgICB0aGlzLmxvYWQuaW1hZ2UoJ2JpdHRlcnNnbGFzcycsICdhc3NldHMvc3ByaXRlcy9iaXR0ZXJzZ2xhc3MucG5nJyk7XHJcbiAgICB0aGlzLmxvYWQuaW1hZ2UoJ3NoYWtlbmdsYXNzJywgJ2Fzc2V0cy9zcHJpdGVzL3NoYWtlbmdsYXNzLnBuZycpO1xyXG4gICAgdGhpcy5sb2FkLmltYWdlKCdpY2UnLCAnYXNzZXRzL3Nwcml0ZXMvaWNlLnBuZycpO1xyXG4gICAgdGhpcy5sb2FkLmltYWdlKCdJY2UgQ3ViZScsICdhc3NldHMvc3ByaXRlcy9pY2VpY29uLnBuZycpO1xyXG4gICAgdGhpcy5sb2FkLmltYWdlKCdpY2UxJywgJ2Fzc2V0cy9zcHJpdGVzL2ljZTEucG5nJyk7XHJcbiAgICB0aGlzLmxvYWQuaW1hZ2UoJ2ljZTInLCAnYXNzZXRzL3Nwcml0ZXMvaWNlMi5wbmcnKTtcclxuICAgIHRoaXMubG9hZC5pbWFnZSgnaWNlMycsICdhc3NldHMvc3ByaXRlcy9pY2UzLnBuZycpO1xyXG4gICAgdGhpcy5sb2FkLmltYWdlKCdpY2U0JywgJ2Fzc2V0cy9zcHJpdGVzL2ljZTQucG5nJyk7XHJcbiAgICB0aGlzLmxvYWQuaW1hZ2UoJ2ljZTUnLCAnYXNzZXRzL3Nwcml0ZXMvaWNlNS5wbmcnKTtcclxuICAgIHRoaXMubG9hZC5pbWFnZSgnaWNlZ2xhc3MnLCAnYXNzZXRzL3Nwcml0ZXMvaWNlZ2xhc3MucG5nJyk7XHJcbiAgICB0aGlzLmxvYWQuaW1hZ2UoJ29yYW5nZScsICdhc3NldHMvc3ByaXRlcy9vcmFuZ2UucG5nJyk7XHJcbiAgICB0aGlzLmxvYWQuaW1hZ2UoJ09yYW5nZSBQZWVsJywgJ2Fzc2V0cy9zcHJpdGVzL29yYW5nZS5wbmcnKTtcclxuICAgIHRoaXMubG9hZC5pbWFnZSgnb3JhbmdlaW5zaWRlJywgJ2Fzc2V0cy9zcHJpdGVzL29yYW5nZUluc2lkZS5wbmcnKTtcclxuICAgIHRoaXMubG9hZC5pbWFnZSgnb3Jhbmdld2VkZ2VnbGFzcycsICdhc3NldHMvc3ByaXRlcy9vcmFuZ2V3ZWRnZWdsYXNzLnBuZycpO1xyXG4gICAgdGhpcy5sb2FkLmltYWdlKCdjYW5lbGxla25pZmUnLCAnYXNzZXRzL3Nwcml0ZXMvY2FuZWxsZWtuaWZlLnBuZycpO1xyXG4gICAgdGhpcy5sb2FkLmltYWdlKCdzaGFrZXInLCAnYXNzZXRzL3Nwcml0ZXMvc2hha2VyLnBuZycpO1xyXG4gICAgdGhpcy5sb2FkLmltYWdlKCdTaGFrZSBEcmluaycsICdhc3NldHMvc3ByaXRlcy9zaGFrZXJpY29uLnBuZycpO1xyXG4gICAgdGhpcy5sb2FkLmltYWdlKCdzaGFrZXIwJywgJ2Fzc2V0cy9zcHJpdGVzL3NoYWtlci5wbmcnKTtcclxuICAgIHRoaXMubG9hZC5pbWFnZSgnc2hha2VyMScsICdhc3NldHMvc3ByaXRlcy9zaGFrZXIxLnBuZycpO1xyXG4gICAgdGhpcy5sb2FkLmltYWdlKCdzaGFrZXIyJywgJ2Fzc2V0cy9zcHJpdGVzL3NoYWtlcjIucG5nJyk7XHJcbiAgICB0aGlzLmxvYWQuaW1hZ2UoJ3NoYWtlcjMnLCAnYXNzZXRzL3Nwcml0ZXMvc2hha2VyMy5wbmcnKTtcclxuICAgIHRoaXMubG9hZC5pbWFnZSgnQW5nb3N0dXJhIEJpdHRlcnMnLCAnYXNzZXRzL3Nwcml0ZXMvYml0dGVycy5wbmcnKTtcclxuICAgIHRoaXMubG9hZC5pbWFnZSgnYml0dGVycycsICdhc3NldHMvc3ByaXRlcy9iaXR0ZXJzLnBuZycpO1xyXG4gICAgdGhpcy5sb2FkLmltYWdlKCdiaXR0ZXJzMCcsICdhc3NldHMvc3ByaXRlcy9iaXR0ZXJzLnBuZycpO1xyXG4gICAgdGhpcy5sb2FkLmltYWdlKCdiaXR0ZXJzMScsICdhc3NldHMvc3ByaXRlcy9iaXR0ZXJzMS5wbmcnKTtcclxuICAgIHRoaXMubG9hZC5pbWFnZSgnYml0dGVyczInLCAnYXNzZXRzL3Nwcml0ZXMvYml0dGVyczIucG5nJyk7XHJcbiAgICB0aGlzLmxvYWQuaW1hZ2UoJ2JpdHRlcnMzJywgJ2Fzc2V0cy9zcHJpdGVzL2JpdHRlcnMzLnBuZycpO1xyXG4gICAgdGhpcy5sb2FkLmltYWdlKCdtdWRkbGVyJywgJ2Fzc2V0cy9zcHJpdGVzL211ZGRsZXIucG5nJyk7XHJcbiAgICB0aGlzLmxvYWQuaW1hZ2UoJ011ZGRsZSBEcmluaycsICdhc3NldHMvc3ByaXRlcy9tdWRkbGVyLnBuZycpO1xyXG4gICAgdGhpcy5sb2FkLmltYWdlKCdqdWljZXInLCAnYXNzZXRzL3Nwcml0ZXMvanVpY2VyLnBuZycpO1xyXG4gICAgdGhpcy5sb2FkLmltYWdlKCdMZW1vbiBKdWljZScsICdhc3NldHMvc3ByaXRlcy9qdWljZXJsZW1vbnRyaWdnZXIucG5nJyk7XHJcbiAgICB0aGlzLmxvYWQuaW1hZ2UoJ0xpbWUgSnVpY2UnLCAnYXNzZXRzL3Nwcml0ZXMvanVpY2VybGltZXRyaWdnZXIucG5nJyk7XHJcbiAgICB0aGlzLmxvYWQuaW1hZ2UoJ09yYW5nZSBKdWljZScsICdhc3NldHMvc3ByaXRlcy9qdWljZXJvcmFuZ2V0cmlnZ2VyLnBuZycpO1xyXG4gICAgdGhpcy5sb2FkLmltYWdlKCdqdWljZXJib3R0b20nLCAnYXNzZXRzL3Nwcml0ZXMvanVpY2VyYm90dG9tLnBuZycpO1xyXG4gICAgdGhpcy5sb2FkLmltYWdlKCdqdWljZXJ0b3AnLCAnYXNzZXRzL3Nwcml0ZXMvanVpY2VydG9wLnBuZycpO1xyXG4gICAgdGhpcy5sb2FkLmltYWdlKCdPcmFuZ2UgSnVpY2UgMicsICdhc3NldHMvc3ByaXRlcy9qdWljZXJvcmFuZ2UucG5nJyk7XHJcbiAgICB0aGlzLmxvYWQuaW1hZ2UoJ0xpbWUgSnVpY2UgMicsICdhc3NldHMvc3ByaXRlcy9qdWljZXJsaW1lLnBuZycpO1xyXG4gICAgdGhpcy5sb2FkLmltYWdlKCdMZW1vbiBKdWljZSAyJywgJ2Fzc2V0cy9zcHJpdGVzL2p1aWNlcmxlbW9uLnBuZycpO1xyXG5cclxuICAgIHRoaXMubG9hZC5zdGFydCgpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBGaW5pc2hGdW5jdGlvbiB9IGZyb20gJy4uL2hlbHBlcnMnO1xyXG5pbXBvcnQgeyBTY2VuZUJ1dHRvbiB9IGZyb20gJy4uL3VpL3NjZW5lLWJ1dHRvbic7XHJcblxyXG5jb25zdCBzY2VuZUNvbmZpZzogUGhhc2VyLlR5cGVzLlNjZW5lcy5TZXR0aW5nc0NvbmZpZyA9IHtcclxuICBhY3RpdmU6IGZhbHNlLFxyXG4gIHZpc2libGU6IGZhbHNlLFxyXG4gIGtleTogJ0JvdXJib24nLFxyXG59O1xyXG5jbGFzcyBHYW1lU2NlbmVBcmd1bWVudHMge1xyXG4gIHB1YmxpYyBvbkZpbmlzaDogRmluaXNoRnVuY3Rpb247XHJcbn1cclxuZXhwb3J0IGNsYXNzIEJvdXJib25TY2VuZSBleHRlbmRzIFBoYXNlci5TY2VuZSB7XHJcbiAgcHVibGljIHNwZWVkID0gMjAwO1xyXG5cclxuICBwcml2YXRlIGN1cnNvcktleXM6IFBoYXNlci5UeXBlcy5JbnB1dC5LZXlib2FyZC5DdXJzb3JLZXlzO1xyXG4gIHByaXZhdGUgYm91cmJvblRvcDogUGhhc2VyLkdhbWVPYmplY3RzLlNwcml0ZTtcclxuICBwcml2YXRlIGJvdXJib25Ub3BPbmx5OiBQaGFzZXIuR2FtZU9iamVjdHMuU3ByaXRlO1xyXG5cclxuICBwcml2YXRlIGNvbnRlbnRzOiBzdHJpbmdbXSA9IFtdO1xyXG4gIHByaXZhdGUgZ2xhc3NGaWxsZXJzOiBQaGFzZXIuR2FtZU9iamVjdHMuU3ByaXRlW10gPSBbXTtcclxuXHJcbiAgcHJpdmF0ZSB0cmFuc2l0aW9uaW5nID0gZmFsc2U7XHJcbiAgcHVibGljIG9uRmluaXNoOiBGaW5pc2hGdW5jdGlvbjtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKHNjZW5lQ29uZmlnKTtcclxuICB9XHJcbiAgcHVibGljIGluc3RydWN0aW9uVGV4dDogUGhhc2VyLkdhbWVPYmplY3RzLlRleHQ7XHJcbiAgcHVibGljIHRleHQxOiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dDtcclxuICBwdWJsaWMgdGV4dDI6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0O1xyXG4gIHB1YmxpYyB0ZXh0MzogUGhhc2VyLkdhbWVPYmplY3RzLlRleHQ7XHJcbiAgcHVibGljIHRleHQ0OiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dDtcclxuICBwdWJsaWMgdGV4dDU6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0O1xyXG4gIHB1YmxpYyB1bnNjcmV3ZWQgPSAwO1xyXG4gIHB1YmxpYyBsaWRSZWN0OiBQaGFzZXIuR2FtZU9iamVjdHMuUmVjdGFuZ2xlO1xyXG4gIHByaXZhdGUgaGVsZCA9IGZhbHNlO1xyXG5cclxuICBwdWJsaWMgaW5pdChkYXRhOiBHYW1lU2NlbmVBcmd1bWVudHMpIHtcclxuICAgIHRoaXMub25GaW5pc2ggPSBkYXRhLm9uRmluaXNoO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNyZWF0ZSgpOiB2b2lkIHtcclxuICAgIGNvbnNvbGUubG9nKCdCb3VyYm9uJyk7XHJcbiAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IHRoaXMuc3lzLmdhbWUuY2FudmFzO1xyXG4gICAgdGhpcy51bnNjcmV3ZWQgPSAwO1xyXG4gICAgdGhpcy5oZWxkID0gZmFsc2U7XHJcbiAgICB0aGlzLnRyYW5zaXRpb25pbmcgPSBmYWxzZTtcclxuICAgIC8vIEFkZCBhIHBsYXllciBzcHJpdGUgdGhhdCBjYW4gYmUgbW92ZWQgYXJvdW5kLiBQbGFjZSBoaW0gaW4gdGhlIG1pZGRsZSBvZiB0aGUgc2NyZWVuLlxyXG4gICAgdGhpcy5ib3VyYm9uVG9wID0gdGhpcy5hZGQuc3ByaXRlKHdpZHRoIC8gMiwgaGVpZ2h0IC8gMiArIDMwMCwgJ2JvdXJib250b3AnKTtcclxuICAgIHRoaXMuYm91cmJvblRvcE9ubHkgPSB0aGlzLmFkZC5zcHJpdGUod2lkdGggLyAyLCBoZWlnaHQgLyAyICsgMzAwLCAnYm91cmJvbnRvcG9ubHknKTtcclxuXHJcbiAgICAvL2xldCByZWN0ID0gbmV3IFBoYXNlci5HYW1lT2JqZWN0cy5SZWN0YW5nbGUod2lkdGggLyAyLCBoZWlnaHQgKiAwLjA2OTAzMjI1OCwgMCwgMCk7XHJcbiAgICB0aGlzLmxpZFJlY3QgPSB0aGlzLmFkZFxyXG4gICAgICAucmVjdGFuZ2xlKFxyXG4gICAgICAgIHdpZHRoIC8gMixcclxuICAgICAgICB0aGlzLmJvdXJib25Ub3BPbmx5LnkgLSB0aGlzLmJvdXJib25Ub3BPbmx5LmRpc3BsYXlIZWlnaHQgKiAwLjQzMDk2Nzc0MixcclxuICAgICAgICB0aGlzLmJvdXJib25Ub3BPbmx5LmRpc3BsYXlXaWR0aCAvIDMsXHJcbiAgICAgICAgdGhpcy5ib3VyYm9uVG9wT25seS5kaXNwbGF5SGVpZ2h0IC8gNyxcclxuICAgICAgICAweGZmZmZmZixcclxuICAgICAgKVxyXG4gICAgICAuc2V0QWxwaGEoMClcclxuICAgICAgLnNldERlcHRoKDEpO1xyXG5cclxuICAgIHRoaXMuaW5wdXQub24oJ3BvaW50ZXJkb3duJywgKCkgPT4ge1xyXG4gICAgICBpZiAoXHJcbiAgICAgICAgdGhpcy5saWRSZWN0LmdldEJvdW5kcygpLmNvbnRhaW5zKHRoaXMuaW5wdXQuYWN0aXZlUG9pbnRlci54LCB0aGlzLmlucHV0LmFjdGl2ZVBvaW50ZXIueSkgJiZcclxuICAgICAgICB0aGlzLmJvdXJib25Ub3BPbmx5LnkgPT0gdGhpcy5ib3VyYm9uVG9wLnlcclxuICAgICAgKSB7XHJcbiAgICAgICAgdGhpcy50ZXh0MS5zZXRUZXh0KGBjbGlja2VkIGJveGApO1xyXG4gICAgICAgIHRoaXMuaGVsZCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5ib3VyYm9uVG9wT25seS55IC09IDIwO1xyXG4gICAgICAgIHRoaXMubGlkUmVjdC55IC09IDIwO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmlucHV0Lm9uKCdwb2ludGVydXAnLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMuaGVsZCA9IGZhbHNlO1xyXG4gICAgICBpZiAodGhpcy5saWRSZWN0LnkgKyB0aGlzLmxpZFJlY3QuZGlzcGxheVdpZHRoIC8gMiA+IHRoaXMuYm91cmJvblRvcC55IC0gdGhpcy5ib3VyYm9uVG9wLmRpc3BsYXlIZWlnaHQgLyAyKSB7XHJcbiAgICAgICAgdGhpcy5saWRSZWN0LnkgPSB0aGlzLmJvdXJib25Ub3AueSAtIHRoaXMuYm91cmJvblRvcC5kaXNwbGF5SGVpZ2h0ICogMC40MzA5Njc3NDI7XHJcbiAgICAgICAgdGhpcy5ib3VyYm9uVG9wT25seS55ID0gdGhpcy5ib3VyYm9uVG9wLnk7XHJcbiAgICAgICAgdGhpcy51bnNjcmV3ZWQgPSAwO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLnRleHQxLnNldFRleHQoYM64OiAke3RoaXMuaW5wdXQuYWN0aXZlUG9pbnRlci5nZXRBbmdsZSgpfWApO1xyXG4gICAgICB0aGlzLnRleHQyLnNldFRleHQoYHg6ICR7dGhpcy5pbnB1dC5hY3RpdmVQb2ludGVyLmdldERpc3RhbmNlWCgpfWApO1xyXG4gICAgICB0aGlzLnRleHQzLnNldFRleHQoYHk6ICR7dGhpcy5pbnB1dC5hY3RpdmVQb2ludGVyLmdldERpc3RhbmNlWSgpfWApO1xyXG4gICAgICB0aGlzLnRleHQ0LnNldFRleHQoYGQ6ICR7dGhpcy5pbnB1dC5hY3RpdmVQb2ludGVyLmdldERpc3RhbmNlKCl9YCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLnRleHQxID0gdGhpcy5hZGQudGV4dCgxMCwgMTAsICcnLCB7IGNvbG9yOiAnIzAwZmYwMCcgfSkuc2V0QWxwaGEoMCk7XHJcbiAgICB0aGlzLnRleHQyID0gdGhpcy5hZGQudGV4dCgxMCwgMjUsICcnLCB7IGNvbG9yOiAnIzAwZmYwMCcgfSkuc2V0QWxwaGEoMCk7XHJcbiAgICB0aGlzLnRleHQzID0gdGhpcy5hZGQudGV4dCgxMCwgNDAsICcnLCB7IGNvbG9yOiAnIzAwZmYwMCcgfSkuc2V0QWxwaGEoMCk7XHJcbiAgICB0aGlzLnRleHQ0ID0gdGhpcy5hZGQudGV4dCgxMCwgNTUsICcnLCB7IGNvbG9yOiAnIzAwZmYwMCcgfSkuc2V0QWxwaGEoMCk7XHJcbiAgICB0aGlzLnRleHQ1ID0gdGhpcy5hZGQudGV4dCgxMCwgNzAsICcnLCB7IGNvbG9yOiAnIzAwZmYwMCcgfSkuc2V0QWxwaGEoMCk7XHJcblxyXG4gICAgdGhpcy5pbnN0cnVjdGlvblRleHQgPSB0aGlzLmFkZC50ZXh0KHdpZHRoLzQsIGhlaWdodC80LCAnVU5DT1JLIScsIHsgY29sb3I6ICcjZmYwMDAwJywgZm9udFNpemU6IFwiNDBweFwiIH0pO1xyXG5cclxuICAgIGNvbnN0IGNsb3NlQnV0dG9uID0gbmV3IFNjZW5lQnV0dG9uKHRoaXMsIHdpZHRoIC0gNTAsIDUwLCBcIlhcIiwgKCkgPT4geyB0aGlzLm9uRmluaXNoKGZhbHNlKTsgdGhpcy5zY2VuZS5zdG9wKCk7IH0sIDB4QzgwMDAwKTtcclxuICAgIGNsb3NlQnV0dG9uLmJ1dHRvbkNvbG9yID0gMHhDODAwMDA7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdXBkYXRlKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuaGVsZCkge1xyXG4gICAgICBpZiAodGhpcy5pbnB1dC5hY3RpdmVQb2ludGVyLmdldEFuZ2xlKCkgPCAwICYmIHRoaXMuaW5wdXQuYWN0aXZlUG9pbnRlci5nZXREaXN0YW5jZVkoKSA+IDUwKSB7XHJcbiAgICAgICAgdGhpcy51bnNjcmV3ZWQgKz0gMTtcclxuICAgICAgICBpZiAodGhpcy51bnNjcmV3ZWQgJSAyID09IDEpIHtcclxuICAgICAgICAgIHRoaXMuYm91cmJvblRvcE9ubHkueSAtPSAyLjU7XHJcbiAgICAgICAgICB0aGlzLmxpZFJlY3QueSAtPSAyLjU7XHJcbiAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIHRoaXMubGlkUmVjdC55ICsgdGhpcy5saWRSZWN0LmRpc3BsYXlXaWR0aCAvIDIgPCB0aGlzLmJvdXJib25Ub3AueSAtIHRoaXMuYm91cmJvblRvcC5kaXNwbGF5SGVpZ2h0IC8gMiAmJlxyXG4gICAgICAgICAgICAhdGhpcy50cmFuc2l0aW9uaW5nXHJcbiAgICAgICAgICApIHtcclxuICAgICAgICAgICAgdGhpcy50cmFuc2l0aW9uaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgdGhpcy5zY2VuZS5zdG9wKCk7XHJcbiAgICAgICAgICAgICAgdGhpcy5zY2VuZS5sYXVuY2goJ1BvdXInLCB7IEJvdHRsZVNwcml0ZU5hbWU6ICdCb3VyYm9uJywgb25GaW5pc2g6IHRoaXMub25GaW5pc2ggfSk7XHJcbiAgICAgICAgICAgIH0sIDUwMCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBjbGFzcyBEaXNjb25uZWN0ZWRTY2VuZSBleHRlbmRzIFBoYXNlci5TY2VuZSB7XHJcbiAgcHVibGljIHNwZWVkID0gMjAwO1xyXG5cclxuICBwdWJsaWMgcmVzdWx0czogQXJyYXk8bnVtYmVyPjtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcih7IGtleTogJ0Rpc2Nvbm5lY3RlZCcgfSk7XHJcbiAgfVxyXG4gIHB1YmxpYyB0ZXh0MTogUGhhc2VyLkdhbWVPYmplY3RzLlRleHQ7XHJcbiAgcHVibGljIHRleHQyOiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dDtcclxuICBwdWJsaWMgdGV4dDM6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0O1xyXG4gIHB1YmxpYyB0ZXh0NDogUGhhc2VyLkdhbWVPYmplY3RzLlRleHQ7XHJcbiAgcHVibGljIHRleHQ1OiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dDtcclxuICBwdWJsaWMgY2xpY2tzID0gMDtcclxuICBwdWJsaWMgaWNlTGV2ZWwgPSAwO1xyXG5cclxuICBwdWJsaWMgY3JlYXRlKCk6IHZvaWQge1xyXG4gICAgY29uc29sZS5sb2coJ1N1Y2Nlc3MnKTtcclxuICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCB9ID0gdGhpcy5zeXMuZ2FtZS5jYW52YXM7XHJcblxyXG4gICAgdGhpcy5hZGQucmVjdGFuZ2xlKHdpZHRoIC8gMiwgaGVpZ2h0IC8gMiwgd2lkdGgsIGhlaWdodCwgMHgwMDAwMDApO1xyXG4gICAgdGhpcy5hZGQudGV4dCh3aWR0aCAvIDgsIChoZWlnaHQgLyA0KSAtIDMwLCBgWW91IGFyZSBkaXNjb25uZWN0ZWQhXFxuQXR0ZW1wdGluZyB0byByZWNvbm5lY3QuXFxuUGxlYXNlIHJlZnJlc2ggaWYgbm90aGluZyBoYXBwZW5zLmAsIHsgY29sb3I6ICcjZmZmZmZmJywgYWxpZ246ICdjZW50ZXInIH0pO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBJbmdyZWRpZW50cywgZHJpbmtUb0NvbG9yTWFwLCBnZXRHYW1lQ2VudGVyIH0gZnJvbSAnLi4vaGVscGVycyc7XHJcbmltcG9ydCB7IFNjZW5lQnV0dG9uIH0gZnJvbSAnLi4vdWkvc2NlbmUtYnV0dG9uJztcclxuaW1wb3J0IHsgT3RoZXJHbGFzc0J1dHRvbiB9IGZyb20gJy4uL3VpL290aGVyLWdsYXNzLWJ1dHRvbic7XHJcbmltcG9ydCB7IFdoaXRlUnVzaGluSHViIH0gZnJvbSAnLi4vd2hpdGVSdXNoaW5IdWInO1xyXG5cclxuY2xhc3MgU2V0dXAge1xyXG4gIHB1YmxpYyBwbGF5ZXJjb3VudDogbnVtYmVyO1xyXG4gIHB1YmxpYyByb3VuZE51bWJlcjogbnVtYmVyO1xyXG4gIHB1YmxpYyBjdXBOdW1iZXI6IG51bWJlcjtcclxuICBwdWJsaWMgYWN0aW9uczogbnVtYmVyW107XHJcbn1cclxuXHJcbmNsYXNzIEdhbWVTdGF0ZSB7XHJcbiAgcHVibGljIGN1cFN0YXRlOiBBcnJheTxudW1iZXI+O1xyXG4gIHB1YmxpYyBjdXBMb2NrczogQXJyYXk8bnVtYmVyPjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEdhbWVTY2VuZSBleHRlbmRzIFBoYXNlci5TY2VuZSB7XHJcbiAgcHVibGljIHNwZWVkID0gMjAwO1xyXG5cclxuICBwcml2YXRlIGVtcHR5R2xhc3M6IFBoYXNlci5HYW1lT2JqZWN0cy5TcHJpdGU7XHJcbiAgcHJpdmF0ZSBmaWxsZWRnbGFzczE6IFBoYXNlci5HYW1lT2JqZWN0cy5SZWN0YW5nbGU7XHJcbiAgcHJpdmF0ZSBmaWxsZWRnbGFzczI6IFBoYXNlci5HYW1lT2JqZWN0cy5SZWN0YW5nbGU7XHJcbiAgcHJpdmF0ZSBmaWxsZWRnbGFzczM6IFBoYXNlci5HYW1lT2JqZWN0cy5SZWN0YW5nbGU7XHJcbiAgcHJpdmF0ZSBmaWxsZWRnbGFzczQ6IFBoYXNlci5HYW1lT2JqZWN0cy5SZWN0YW5nbGU7XHJcbiAgcHJpdmF0ZSBnbGFzc0J1dHRvbnM6IEFycmF5PE90aGVyR2xhc3NCdXR0b24+ID0gW107XHJcbiAgcHJpdmF0ZSBzZWxlY3RlZFRhcmdldDogbnVtYmVyO1xyXG4gIHB1YmxpYyBjdXBOdW1iZXJUZXh0OiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dDtcclxuXHJcbiAgLy8gc3RhdGUgd2hpY2ggaXMgcGxhaW5seSBjb3BpZWQgZnJvbSBwbGF5dGVzdCAxXHJcbiAgcHJpdmF0ZSBnbGFzc0NvbnRlbnRzOiBBcnJheTxudW1iZXI+O1xyXG4gIHByaXZhdGUgY3VwTG9ja3M6IEFycmF5PG51bWJlcj47XHJcbiAgcHJpdmF0ZSBhY3Rpb25zOiBBcnJheTxudW1iZXI+O1xyXG4gIHByaXZhdGUgY3VwTnVtYmVyOiBudW1iZXI7XHJcblxyXG4gIHByaXZhdGUgZnVsbFN0dWZmOiBBcnJheTxQaGFzZXIuR2FtZU9iamVjdHMuU3ByaXRlPjtcclxuXHJcbiAgcHJpdmF0ZSBnbGFzc0ZpbGxlcnM6IFBoYXNlci5HYW1lT2JqZWN0cy5SZWN0YW5nbGVbXSA9IFtdO1xyXG5cclxuICBwcml2YXRlQ29sb3JNYXA6IE1hcDxzdHJpbmcsIG51bWJlcj4gPSBuZXcgTWFwKFtcclxuICAgIFsnYm91cmJvbicsIDB4ZGI3OTAwXSxcclxuICAgIFsndmVybW91dGgnLCAweDU1MDEwM10sXHJcbiAgXSk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoeyBrZXk6ICdHYW1lJyB9KTtcclxuICB9XHJcbiAgcHVibGljIHRleHQxOiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dDtcclxuICBwdWJsaWMgdGV4dDI6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0O1xyXG5cclxuICBwdWJsaWMgaW5pdChzZXR1cDogU2V0dXApOiB2b2lkIHtcclxuICAgIHRoaXMuYWN0aW9ucyA9IHNldHVwLmFjdGlvbnM7XHJcbiAgICB0aGlzLmN1cE51bWJlciA9IHNldHVwLmN1cE51bWJlcjtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjcmVhdGUoKTogdm9pZCB7XHJcbiAgICBjb25zb2xlLmxvZygnR2FtZScpO1xyXG4gICAgdGhpcy5zZWxlY3RlZFRhcmdldCA9IHRoaXMuY3VwTnVtYmVyID49ND8gMDogdGhpcy5jdXBOdW1iZXI7XHJcbiAgICB0aGlzLmZ1bGxTdHVmZiA9IFtdO1xyXG5cclxuICAgIC8vIEluaXRpYWxpemUgdGhlIHNjZW5lIHdpdGggYW4gZW1wdHkgc3RhdGUuXHJcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcclxuICAgICAgY3VwTG9ja3M6IFtdLFxyXG4gICAgICBjdXBTdGF0ZTogW11cclxuICAgIH0pO1xyXG5cclxuICAgIC8vIFNpZ25hbFIgU3R1ZmZcclxuICAgIHRoaXMuc2V0dXBIdWIoKTtcclxuXHJcbiAgICBjb25zdCBjID0gZ2V0R2FtZUNlbnRlcih0aGlzKTtcclxuICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCB9ID0gdGhpcy5zY2FsZS5nYW1lU2l6ZTtcclxuICAgIHRoaXMuZW1wdHlHbGFzcyA9IHRoaXMuYWRkLnNwcml0ZSh3aWR0aCAvIDIsIGhlaWdodCAvIDMsICdlbXB0eWdsYXNzJykuc2V0RGVwdGgoMCkuc2V0U2NhbGUoMC41KTtcclxuXHJcbiAgICBpZiAodGhpcy5jdXBOdW1iZXIgPCA0KSB7XHJcblxyXG4gICAgICB0aGlzLmN1cE51bWJlclRleHQgPSB0aGlzLmFkZC50ZXh0KGMueCwgMzAsIGBZb3UgYXJlIGN1cCBudW1iZXIgJHsodGhpcy5jdXBOdW1iZXIgKyAxKX1gLCB7IGNvbG9yOiAnI2ZmZmZmZicgfSkuc2V0T3JpZ2luKDAuNSk7XHJcblxyXG4gICAgICB0aGlzLmZpbGxlZGdsYXNzMSA9IHRoaXMuY3JlYXRlR2xhc3NGaWxsZXIodGhpcy5lbXB0eUdsYXNzLmdldFRvcExlZnQoKS54LCB0aGlzLmVtcHR5R2xhc3MuZ2V0VG9wTGVmdCgpLnksIDB4ZmZmZmZmKTtcclxuICAgICAgdGhpcy5maWxsZWRnbGFzczIgPSB0aGlzLmNyZWF0ZUdsYXNzRmlsbGVyKHRoaXMuZmlsbGVkZ2xhc3MxLmdldEJvdHRvbUxlZnQoKS54LCB0aGlzLmZpbGxlZGdsYXNzMS5nZXRCb3R0b21MZWZ0KCkueSwgMHgwMDAwZmYpO1xyXG4gICAgICB0aGlzLmZpbGxlZGdsYXNzMyA9IHRoaXMuY3JlYXRlR2xhc3NGaWxsZXIodGhpcy5maWxsZWRnbGFzczIuZ2V0Qm90dG9tTGVmdCgpLngsIHRoaXMuZmlsbGVkZ2xhc3MyLmdldEJvdHRvbUxlZnQoKS55LCAweDAwZmYwMCk7XHJcbiAgICAgIHRoaXMuZmlsbGVkZ2xhc3M0ID0gdGhpcy5jcmVhdGVHbGFzc0ZpbGxlcih0aGlzLmZpbGxlZGdsYXNzMy5nZXRCb3R0b21MZWZ0KCkueCwgdGhpcy5maWxsZWRnbGFzczMuZ2V0Qm90dG9tTGVmdCgpLnksIDB4RkYwMDAwKTtcclxuXHJcbiAgICAgIHRoaXMuZ2xhc3NGaWxsZXJzLnB1c2godGhpcy5maWxsZWRnbGFzczQpO1xyXG4gICAgICB0aGlzLmdsYXNzRmlsbGVycy5wdXNoKHRoaXMuZmlsbGVkZ2xhc3MzKTtcclxuICAgICAgdGhpcy5nbGFzc0ZpbGxlcnMucHVzaCh0aGlzLmZpbGxlZGdsYXNzMik7XHJcbiAgICAgIHRoaXMuZ2xhc3NGaWxsZXJzLnB1c2godGhpcy5maWxsZWRnbGFzczEpO1xyXG5cclxuICAgICAgY29uc3QgZ3RjID0gdGhpcy5lbXB0eUdsYXNzLmdldFRvcENlbnRlcigpO1xyXG4gICAgICBuZXcgU2NlbmVCdXR0b24odGhpcywgZ3RjLnggLSA3MCwgaGVpZ2h0ICogMC4xNSwgJ1NlcnZlIEdsYXNzJywgKCkgPT4gV2hpdGVSdXNoaW5IdWIuSW5zdGFuY2UuU3VibWl0Q3VwKCkpO1xyXG4gICAgICBuZXcgU2NlbmVCdXR0b24odGhpcywgZ3RjLnggKyA5MCwgaGVpZ2h0ICogMC4xNSwgJ0Rpc2NhcmQnLCAoKSA9PiBXaGl0ZVJ1c2hpbkh1Yi5JbnN0YW5jZS5FbXB0eUN1cCgpLCAweEM4MDAwMClcclxuXHJcbiAgICAgIHRoaXMuaW5wdXQub24oJ2RyYWdlbmQnLCAoX3BvaW50ZXIsIGdhbWVPYmplY3QpID0+IHtcclxuICAgICAgICBnYW1lT2JqZWN0LmNsZWFyVGludCgpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHRoaXMudGV4dDEgPSB0aGlzLmFkZC50ZXh0KDEwLCAxMCwgJycsIHsgY29sb3I6ICcjMDBmZjAwJyB9KTtcclxuICAgICAgdGhpcy50ZXh0MiA9IHRoaXMuYWRkLnRleHQoNTAwLCAxMCwgJycsIHsgY29sb3I6ICcjMDBmZjAwJyB9KTtcclxuXHJcbiAgICAgIGxldCBtYXhTcHJlYWQgPSA2MDA7XHJcbiAgICAgIGxldCBzcHJlYWRTdGFydCA9IDUwO1xyXG4gICAgICBpZiAod2lkdGggPCBtYXhTcHJlYWQpXHJcbiAgICAgIHtcclxuICAgICAgICBtYXhTcHJlYWQgPSB3aWR0aCAtIDIgKiBzcHJlYWRTdGFydDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzcHJlYWRTdGFydCA9IHdpZHRoIC8gMiAtIG1heFNwcmVhZCAvIDI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IHN0ZXAgPSBtYXhTcHJlYWQgLyAodGhpcy5hY3Rpb25zLmxlbmd0aCAtIDEpO1xyXG4gICAgICBcclxuICAgICAgdGhpcy5hY3Rpb25zLmZvckVhY2goKGVsZW1lbnQsIGlkeCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG5hbWUgPSBJbmdyZWRpZW50c1tlbGVtZW50XTtcclxuICAgICAgICBsZXQgbmV4dFNjZW5lID0gbmFtZTtcclxuICAgICAgICBpZiAoZWxlbWVudCA+PSAxMCkge1xyXG4gICAgICAgICAgbmV4dFNjZW5lID0gJ1BvdXInO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChuYW1lLmluY2x1ZGVzKFwiSnVpY2VcIikpIHtcclxuICAgICAgICAgIG5leHRTY2VuZSA9ICdKdWljZXInXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBpbmdyZWRpZW50U3ByaXRlID0gdGhpcy5hZGQuc3ByaXRlKHNwcmVhZFN0YXJ0ICsgaWR4ICogc3RlcCwgaGVpZ2h0ICogMC44MCwgbmFtZSlcclxuICAgICAgICAgIC5zZXRPcmlnaW4oMC41KVxyXG4gICAgICAgICAgLnNldEludGVyYWN0aXZlKCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5hZGQudGV4dFxyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGFzcGVjdFJhdGlvID0gaW5ncmVkaWVudFNwcml0ZS53aWR0aCAvIGluZ3JlZGllbnRTcHJpdGUuaGVpZ2h0O1xyXG4gICAgICAgIGNvbnN0IGV4cGVjdGVkSGVpZ2h0ID0gMTAwO1xyXG4gICAgICAgIGNvbnN0IGV4cGVjdGVkV2lkdGggPSBleHBlY3RlZEhlaWdodCAqIGFzcGVjdFJhdGlvO1xyXG5cclxuICAgICAgICBpbmdyZWRpZW50U3ByaXRlXHJcbiAgICAgICAgICAuc2V0RGlzcGxheVNpemUoZXhwZWN0ZWRXaWR0aCwgZXhwZWN0ZWRIZWlnaHQpO1xyXG5cclxuICAgICAgICBpbmdyZWRpZW50U3ByaXRlLm9uKCdwb2ludGVyZG93bicsICgpID0+IHtcclxuICAgICAgICAgIHRoaXMuc2NlbmUuc2V0VmlzaWJsZShmYWxzZSk7XHJcbiAgICAgICAgICB0aGlzLnNjZW5lLnBhdXNlKCk7XHJcbiAgICAgICAgICB0aGlzLnNjZW5lLmxhdW5jaChuZXh0U2NlbmUsIHtcclxuICAgICAgICAgICAgb25GaW5pc2g6IChnb29kOiBib29sZWFuKSA9PiB7XHJcbiAgICAgICAgICAgICAgdGhpcy5zY2VuZS5zZXRWaXNpYmxlKHRydWUpO1xyXG4gICAgICAgICAgICAgIGlmIChnb29kKSB7XHJcbiAgICAgICAgICAgICAgICBXaGl0ZVJ1c2hpbkh1Yi5JbnN0YW5jZS5TZW5kQWN0aW9uKGVsZW1lbnQsIHRoaXMuc2VsZWN0ZWRUYXJnZXQpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0aGV5IGRpZCBpdFwiKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgdGhpcy5zY2VuZS5yZXN1bWUoKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgQm90dGxlU3ByaXRlTmFtZTogbmFtZVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgdGhpcy5hZGQudGV4dCh0aGlzLmVtcHR5R2xhc3MuZ2V0Qm90dG9tQ2VudGVyKCkueCwgdGhpcy5lbXB0eUdsYXNzLmdldEJvdHRvbUNlbnRlcigpLnkgKyA0MCwgXCJUYXJnZXQgQ3VwOlwiKS5zZXRPcmlnaW4oMC41KVxyXG5cclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpKyspIHtcclxuICAgICAgICB0aGlzLmdsYXNzQnV0dG9ucy5wdXNoKG5ldyBPdGhlckdsYXNzQnV0dG9uKFxyXG4gICAgICAgICAgdGhpcyxcclxuICAgICAgICAgIHRoaXMuZW1wdHlHbGFzcy5nZXRCb3R0b21DZW50ZXIoKS54ICsgKGkgLSAyKSAqIDcwICsgMzUsXHJcbiAgICAgICAgICB0aGlzLmVtcHR5R2xhc3MuZ2V0Qm90dG9tQ2VudGVyKCkueSArIDgwLFxyXG4gICAgICAgICAgKGkgKyAxKS50b1N0cmluZygpLFxyXG4gICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuY3VwTG9ja3MuaW5jbHVkZXMoaSkpIHtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkNoYW5naW5nIEJ1dHRvbiFcIilcclxuICAgICAgICAgICAgICB0aGlzLmdsYXNzQnV0dG9uc1t0aGlzLnNlbGVjdGVkVGFyZ2V0XS5lbnRlck1lbnVCdXR0b25SZXN0U3RhdGUoKTtcclxuICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkVGFyZ2V0ID0gaTtcclxuICAgICAgICAgICAgICB0aGlzLmdsYXNzQnV0dG9uc1t0aGlzLnNlbGVjdGVkVGFyZ2V0XS5lbnRlck1lbnVCdXR0b25BY3RpdmVTdGF0ZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgKSlcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc29sZS5sb2codGhpcy5nbGFzc0J1dHRvbnMpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7IC8vIGdyZWF0ZXIgdGhhbiA0XHJcbiAgICAgIHRoaXMuZW1wdHlHbGFzcy5zZXRTY2FsZSgwLjUpO1xyXG4gICAgICB0aGlzLmVtcHR5R2xhc3Muc2V0VmlzaWJsZShmYWxzZSk7XHJcblxyXG4gICAgICB0aGlzLmFjdGlvbnMuZm9yRWFjaCgoZWxlbWVudCwgaWR4KSA9PiB7XHJcbiAgICAgICAgY29uc3QgbmFtZSA9IEluZ3JlZGllbnRzW2VsZW1lbnRdO1xyXG5cclxuICAgICAgICBsZXQgbmV4dFNjZW5lID0gbmFtZTtcclxuICAgICAgICBjb25zb2xlLmxvZyhuYW1lKVxyXG4gICAgICAgIGNvbnN0IHRtcCA9IHRoaXMuYWRkLnNwcml0ZSgod2lkdGggLyAyKSwgKGhlaWdodCAvIDUpICogKGlkeCArIDEpLCBuYW1lKS5zZXRJbnRlcmFjdGl2ZSgpO1xyXG4gICAgICAgIGlmIChlbGVtZW50ID49IDEwKSB7XHJcbiAgICAgICAgICBuZXh0U2NlbmUgPSAnUG91cic7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKG5hbWUuaW5jbHVkZXMoXCJKdWljZVwiKSkge1xyXG4gICAgICAgICAgbmV4dFNjZW5lID0gJ0p1aWNlcidcclxuICAgICAgICB9XHJcbiAgICAgICAgdG1wLnNldFNjYWxlKDAuMik7XHJcbiAgICAgICAgdG1wLm9uKCdwb2ludGVyZG93bicsICgpID0+IHtcclxuICAgICAgICAgIHRoaXMuc2NlbmUuc2V0VmlzaWJsZShmYWxzZSk7XHJcbiAgICAgICAgICB0aGlzLnNjZW5lLnBhdXNlKCk7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIm5leHQgXCIgKyBuZXh0U2NlbmUpO1xyXG4gICAgICAgICAgdGhpcy5zY2VuZS5sYXVuY2gobmV4dFNjZW5lLCB7XHJcbiAgICAgICAgICAgIG9uRmluaXNoOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJjYWxsZWRcIilcclxuICAgICAgICAgICAgICB0aGlzLnNjZW5lLnNldFZpc2libGUodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgV2hpdGVSdXNoaW5IdWIuSW5zdGFuY2UuU2VuZEFjdGlvbihlbGVtZW50LCB0aGlzLnNlbGVjdGVkVGFyZ2V0KTtcclxuICAgICAgICAgICAgICB0aGlzLnNjZW5lLnJlc3VtZSgpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBCb3R0bGVTcHJpdGVOYW1lOiBuYW1lXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKG5hbWUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHRoaXMuZ2xhc3NCdXR0b25zID0gW107XHJcbiAgICAgIHRoaXMuYWRkLnRleHQodGhpcy5lbXB0eUdsYXNzLmdldFRvcExlZnQoKS54LFxyXG4gICAgICAgIGhlaWdodCAvIDEyIC0gMTUsIFwidGFyZ2V0IGN1cDpcIilcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpKyspIHtcclxuICAgICAgICB0aGlzLmdsYXNzQnV0dG9ucy5wdXNoKG5ldyBPdGhlckdsYXNzQnV0dG9uKFxyXG4gICAgICAgICAgdGhpcyxcclxuICAgICAgICAgIHRoaXMuZW1wdHlHbGFzcy5nZXRUb3BMZWZ0KCkueCArIGkgKiAzMCxcclxuICAgICAgICAgIGhlaWdodCAvIDEyLFxyXG4gICAgICAgICAgKGkgKyAxKS50b1N0cmluZygpLFxyXG4gICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuY3VwTG9ja3MuaW5jbHVkZXMoaSkpIHtcclxuICAgICAgICAgICAgICB0aGlzLmdsYXNzQnV0dG9uc1t0aGlzLnNlbGVjdGVkVGFyZ2V0XS5lbnRlck1lbnVCdXR0b25SZXN0U3RhdGUoKTtcclxuICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkVGFyZ2V0ID0gaTtcclxuICAgICAgICAgICAgICB0aGlzLmdsYXNzQnV0dG9uc1t0aGlzLnNlbGVjdGVkVGFyZ2V0XS5lbnRlck1lbnVCdXR0b25BY3RpdmVTdGF0ZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic2VsZWN0ZWQgPSBcIiArIHRoaXMuc2VsZWN0ZWRUYXJnZXQpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICkpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIFdoaXRlUnVzaGluSHViLkluc3RhbmNlLkZldGNoU3RhdGUoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY3JlYXRlR2xhc3NGaWxsZXIoeDogbnVtYmVyLCB5OiBudW1iZXIsIGNvbG9yOiBudW1iZXIpOiBQaGFzZXIuR2FtZU9iamVjdHMuUmVjdGFuZ2xlIHtcclxuICAgIHJldHVybiB0aGlzLmFkZC5yZWN0YW5nbGUoeCwgeSwgdGhpcy5lbXB0eUdsYXNzLmRpc3BsYXlXaWR0aCwgdGhpcy5lbXB0eUdsYXNzLmRpc3BsYXlIZWlnaHQgLyA0LCBjb2xvcilcclxuICAgICAgLnNldE9yaWdpbigwKVxyXG4gICAgICAuc2V0RGVwdGgoMSlcclxuICAgICAgLnNldEJsZW5kTW9kZShQaGFzZXIuQmxlbmRNb2Rlcy5NVUxUSVBMWSlcclxuICAgICAgLnNldFZpc2libGUoZmFsc2UpIC8vIERpc2FibGUgdGhpcyB0byBkZWJ1Z1xyXG4gICAgICA7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdXBkYXRlU3RhdGUoc3RhdGU6IEdhbWVTdGF0ZSk6IHZvaWQge1xyXG5cclxuICAgIHRoaXMuY3VwTG9ja3MgPSBzdGF0ZS5jdXBMb2NrcztcclxuICAgIGNvbnNvbGUubG9nKHRoaXMuY3VwTG9ja3MpO1xyXG4gICAgdGhpcy5nbGFzc0NvbnRlbnRzID0gc3RhdGUuY3VwU3RhdGU7XHJcblxyXG4gICAgdGhpcy5nbGFzc0J1dHRvbnMuZm9yRWFjaCgoYnV0dG9uOiBPdGhlckdsYXNzQnV0dG9uLCBpZHg6IG51bWJlcikgPT4ge1xyXG4gICAgICBpZiAodGhpcy5jdXBMb2Nrcy5pbmNsdWRlcyhpZHgudmFsdWVPZigpKSkge1xyXG4gICAgICAgIGJ1dHRvbi5zZXRFbmFibGVkKGZhbHNlKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBidXR0b24uc2V0RW5hYmxlZCh0cnVlKTtcclxuICAgICAgICBpZiAodGhpcy5zZWxlY3RlZFRhcmdldCA9PSBpZHgpIHtcclxuICAgICAgICAgIGJ1dHRvbi5lbnRlck1lbnVCdXR0b25BY3RpdmVTdGF0ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKHRoaXMuY3VwTnVtYmVyIDwgNCkge1xyXG4gICAgICB0aGlzLmdsYXNzRmlsbGVycy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgIGVsZW1lbnQuc2V0VmlzaWJsZShmYWxzZSk7XHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLmZ1bGxTdHVmZi5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgIGVsZW1lbnQuZGVzdHJveSgpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCB9ID0gdGhpcy5zeXMuZ2FtZS5jYW52YXM7XHJcbiAgICAgIGxldCBjdXJyZW50UG9zaXRpb24gPSAwO1xyXG4gICAgICB0aGlzLmdsYXNzQ29udGVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG5hbWUgPSBJbmdyZWRpZW50c1tlbGVtZW50XTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInJlbmRlcmluZyBcIiArIG5hbWUgKyBjdXJyZW50UG9zaXRpb24pXHJcbiAgICAgICAgaWYgKGRyaW5rVG9Db2xvck1hcC5oYXMobmFtZSkpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwidHJpZWQgdG8gdGludCBcIiArIGRyaW5rVG9Db2xvck1hcC5nZXQobmFtZSkpO1xyXG4gICAgICAgICAgdGhpcy5nbGFzc0ZpbGxlcnNbY3VycmVudFBvc2l0aW9uXS5zZXRWaXNpYmxlKHRydWUpXHJcbiAgICAgICAgICB0aGlzLmdsYXNzRmlsbGVyc1tjdXJyZW50UG9zaXRpb25dLmZpbGxDb2xvciA9IChkcmlua1RvQ29sb3JNYXAuZ2V0KG5hbWUpKTtcclxuICAgICAgICAgIGN1cnJlbnRQb3NpdGlvbisrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzd2l0Y2ggKG5hbWUpIHtcclxuICAgICAgICAgIGNhc2UgJ09yYW5nZSBQZWVsJzpcclxuICAgICAgICAgICAgdGhpcy5mdWxsU3R1ZmYucHVzaCh0aGlzLmFkZC5zcHJpdGUod2lkdGggLyAyLCBoZWlnaHQgLyAzLCAnb3Jhbmdld2VkZ2VnbGFzcycpLnNldFNjYWxlKDAuNSkpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgJ0ljZSBDdWJlJzpcclxuICAgICAgICAgICAgdGhpcy5mdWxsU3R1ZmYucHVzaCh0aGlzLmFkZC5zcHJpdGUod2lkdGggLyAyLCBoZWlnaHQgLyAzLCAnaWNlZ2xhc3MnKS5zZXRTY2FsZSgwLjUpKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlICdNdWRkbGUgRHJpbmsnOlxyXG4gICAgICAgICAgICB0aGlzLmZ1bGxTdHVmZi5wdXNoKHRoaXMuYWRkLnNwcml0ZSh3aWR0aCAvIDIsIGhlaWdodCAvIDMsICdtdWRkbGVyJykuc2V0U2NhbGUoMC4xNSkuc2V0Um90YXRpb24oLjIpKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlICdTaGFrZSBEcmluayc6XHJcbiAgICAgICAgICAgIHRoaXMuZnVsbFN0dWZmLnB1c2godGhpcy5hZGQuc3ByaXRlKHdpZHRoIC8gMiwgaGVpZ2h0IC8gMywgJ3NoYWtlbmdsYXNzJykuc2V0U2NhbGUoMC41KSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSAnQW5nb3N0dXJhIEJpdHRlcnMnOlxyXG4gICAgICAgICAgICAvL3RoaXMuZnVsbFN0dWZmLnB1c2godGhpcy5hZGQuc3ByaXRlKHdpZHRoIC8gMiwgaGVpZ2h0IC8gMywgJ2JpdHRlcnNnbGFzcycpLnNldFNjYWxlKDAuNSkpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldHVwSHViKCk6IHZvaWQge1xyXG4gICAgY29uc3QgY29ubmVjdGlvbiA9IFdoaXRlUnVzaGluSHViLkluc3RhbmNlO1xyXG5cclxuICAgIGNvbm5lY3Rpb24ub24oJ1N0YXRlUHVzaCcsIChzdGF0ZTogR2FtZVN0YXRlKSA9PiB7XHJcbiAgICAgIHRoaXMudXBkYXRlU3RhdGUoc3RhdGUpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29ubmVjdGlvbi5vbignUmVzdWx0JywgKHJlc3VsdHM6IG51bWJlcltdKSA9PiB7XHJcblxyXG4gICAgICBjb25zdCBjb3VudCA9IHJlc3VsdHMucmVkdWNlKCh4LCB5KSA9PiB4ICsgeSk7XHJcbiAgICAgIGlmIChjb3VudCA9PSAwKSB7XHJcbiAgICAgICAgdGhpcy5zY2VuZS5zZXRWaXNpYmxlKGZhbHNlKTtcclxuICAgICAgICB0aGlzLnNjZW5lLnBhdXNlKCk7XHJcbiAgICAgICAgdGhpcy5zY2VuZS5zdGFydCgnU3VjY2VzcycpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgV2hpdGVSdXNoaW5IdWIuSW5zdGFuY2UuUmVzZXQoKTtcclxuXHJcbiAgICAgIHRoaXMuc2NlbmUuc2V0VmlzaWJsZShmYWxzZSk7XHJcbiAgICAgIHRoaXMuc2NlbmUucGF1c2UoKTtcclxuICAgICAgY29uc3QgcmVzdWx0c1NjZW5lID0gdGhpcy5zY2VuZS5nZXQoJ1Jlc3VsdHMnKTtcclxuICAgICAgcmVzdWx0c1NjZW5lLmV2ZW50cy5vbignc2h1dGRvd24nLCAoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJTaG93aW5nIGdhbWUgc2NlbmUgYWdhaW5cIilcclxuICAgICAgICB0aGlzLnNjZW5lLnJlc3VtZSgpO1xyXG4gICAgICAgIHRoaXMuc2NlbmUuc2V0VmlzaWJsZSh0cnVlKTtcclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMuc2NlbmUubGF1bmNoKCdSZXN1bHRzJywgeyByZXN1bHRzIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IEZpbmlzaEZ1bmN0aW9uIH0gZnJvbSAnLi4vaGVscGVycyc7XHJcbmltcG9ydCB7IFNjZW5lQnV0dG9uIH0gZnJvbSAnLi4vdWkvc2NlbmUtYnV0dG9uJztcclxuXHJcbmNvbnN0IHNjZW5lQ29uZmlnOiBQaGFzZXIuVHlwZXMuU2NlbmVzLlNldHRpbmdzQ29uZmlnID0ge1xyXG4gIGFjdGl2ZTogZmFsc2UsXHJcbiAgdmlzaWJsZTogZmFsc2UsXHJcbiAga2V5OiAnSWNlIEN1YmUnLFxyXG59O1xyXG5jbGFzcyBHYW1lU2NlbmVBcmd1bWVudHMge1xyXG4gIHB1YmxpYyBvbkZpbmlzaDogRmluaXNoRnVuY3Rpb247XHJcbn1cclxuZXhwb3J0IGNsYXNzIEljZVNjZW5lIGV4dGVuZHMgUGhhc2VyLlNjZW5lIHtcclxuICBwdWJsaWMgc3BlZWQgPSAyMDA7XHJcblxyXG4gIHByaXZhdGUgY3Vyc29yS2V5czogUGhhc2VyLlR5cGVzLklucHV0LktleWJvYXJkLkN1cnNvcktleXM7XHJcbiAgcHJpdmF0ZSBpY2U6IFBoYXNlci5HYW1lT2JqZWN0cy5TcHJpdGU7XHJcblxyXG4gIHByaXZhdGUgY29udGVudHM6IHN0cmluZ1tdID0gW107XHJcbiAgcHJpdmF0ZSBnbGFzc0ZpbGxlcnM6IFBoYXNlci5HYW1lT2JqZWN0cy5TcHJpdGVbXSA9IFtdO1xyXG5cclxuICBwcml2YXRlIGlzUG91cmluZyA9IDA7XHJcbiAgcHJpdmF0ZSB0cmFuc2l0aW9uaW5nID0gZmFsc2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoc2NlbmVDb25maWcpO1xyXG4gIH1cclxuICBwdWJsaWMgb25GaW5pc2g6IEZpbmlzaEZ1bmN0aW9uO1xyXG5cclxuICBwdWJsaWMgaW5zdHJ1Y3Rpb25UZXh0OiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dDtcclxuICBwdWJsaWMgdGV4dDE6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0O1xyXG4gIHB1YmxpYyB0ZXh0MjogUGhhc2VyLkdhbWVPYmplY3RzLlRleHQ7XHJcbiAgcHVibGljIHRleHQzOiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dDtcclxuICBwdWJsaWMgdGV4dDQ6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0O1xyXG4gIHB1YmxpYyB0ZXh0NTogUGhhc2VyLkdhbWVPYmplY3RzLlRleHQ7XHJcbiAgcHVibGljIGNsaWNrcyA9IDA7XHJcbiAgcHVibGljIGljZUxldmVsID0gMDtcclxuXHJcbiAgcHVibGljIGluaXQoZGF0YTogR2FtZVNjZW5lQXJndW1lbnRzKTogdm9pZCB7XHJcbiAgICB0aGlzLm9uRmluaXNoID0gZGF0YS5vbkZpbmlzaDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjcmVhdGUoKTogdm9pZCB7XHJcbiAgICBjb25zb2xlLmxvZygnSWNlJyk7XHJcbiAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IHRoaXMuc3lzLmdhbWUuY2FudmFzO1xyXG4gICAgdGhpcy50cmFuc2l0aW9uaW5nID0gZmFsc2U7XHJcbiAgICB0aGlzLmNsaWNrcyA9IDA7XHJcbiAgICB0aGlzLmljZUxldmVsID0gMDtcclxuXHJcbiAgICAvLyBBZGQgYSBwbGF5ZXIgc3ByaXRlIHRoYXQgY2FuIGJlIG1vdmVkIGFyb3VuZC4gUGxhY2UgaGltIGluIHRoZSBtaWRkbGUgb2YgdGhlIHNjcmVlbi5cclxuICAgIHRoaXMuaWNlID0gdGhpcy5hZGQuc3ByaXRlKHdpZHRoIC8gMiwgaGVpZ2h0IC8gMiwgJ2ljZScpO1xyXG4gICAgdGhpcy5pY2Uuc2V0U2NhbGUoMC40KTtcclxuICAgIC8vdGhpcy52ZXJtb3V0aFRvcE9ubHkgPSB0aGlzLmFkZC5zcHJpdGUod2lkdGggLyAyLCBoZWlnaHQgLyAyICsgMzAwLCAndmVybW91dGh0b3Bvbmx5Jyk7XHJcblxyXG4gICAgdGhpcy5pbnB1dC5vbigncG9pbnRlcnVwJywgKCkgPT4ge1xyXG4gICAgICB0aGlzLnRleHQxLnNldFRleHQoYM64OiAke3RoaXMuaW5wdXQuYWN0aXZlUG9pbnRlci5nZXRBbmdsZSgpfWApO1xyXG4gICAgICB0aGlzLnRleHQyLnNldFRleHQoYHg6ICR7dGhpcy5pbnB1dC5hY3RpdmVQb2ludGVyLmdldERpc3RhbmNlWCgpfWApO1xyXG4gICAgICB0aGlzLnRleHQzLnNldFRleHQoYHk6ICR7dGhpcy5pbnB1dC5hY3RpdmVQb2ludGVyLmdldERpc3RhbmNlWSgpfWApO1xyXG4gICAgICB0aGlzLnRleHQ0LnNldFRleHQoYGQ6ICR7dGhpcy5pbnB1dC5hY3RpdmVQb2ludGVyLmdldERpc3RhbmNlKCl9YCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmlucHV0Lm9uKCdwb2ludGVyZG93bicsICgpID0+IHtcclxuICAgICAgaWYgKHRoaXMuaWNlTGV2ZWwgPT0gMCkge1xyXG4gICAgICAgIHRoaXMuaWNlLnNldFRleHR1cmUoJ2ljZScgKyArK3RoaXMuaWNlTGV2ZWwpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuY2xpY2tzICs9IDE7XHJcbiAgICAgIGlmICh0aGlzLmNsaWNrcyAlIDIgPT0gMCkge1xyXG4gICAgICAgIHRoaXMuaWNlLnNldFRleHR1cmUoJ2ljZScgKyArK3RoaXMuaWNlTGV2ZWwpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh0aGlzLmljZUxldmVsID09IDUgJiYgIXRoaXMudHJhbnNpdGlvbmluZykge1xyXG4gICAgICAgIHRoaXMudHJhbnNpdGlvbmluZyA9IHRydWU7XHJcbiAgICAgICAgZG9jdW1lbnQuY29va2llID0gYGljZT0xYDtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgIHRoaXMuc2NlbmUuc3RvcCgpO1xyXG4gICAgICAgICAgdGhpcy5vbkZpbmlzaCh0cnVlKTtcclxuICAgICAgICB9LCA1MDApO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLnRleHQxID0gdGhpcy5hZGQudGV4dCgxMCwgMTAsICcnLCB7IGNvbG9yOiAnIzAwZmYwMCcgfSkuc2V0QWxwaGEoMCk7XHJcbiAgICB0aGlzLnRleHQyID0gdGhpcy5hZGQudGV4dCgxMCwgMjUsICcnLCB7IGNvbG9yOiAnIzAwZmYwMCcgfSkuc2V0QWxwaGEoMCk7XHJcbiAgICB0aGlzLnRleHQzID0gdGhpcy5hZGQudGV4dCgxMCwgNDAsICcnLCB7IGNvbG9yOiAnIzAwZmYwMCcgfSkuc2V0QWxwaGEoMCk7XHJcbiAgICB0aGlzLnRleHQ0ID0gdGhpcy5hZGQudGV4dCgxMCwgNTUsICcnLCB7IGNvbG9yOiAnIzAwZmYwMCcgfSkuc2V0QWxwaGEoMCk7XHJcbiAgICB0aGlzLnRleHQ1ID0gdGhpcy5hZGQudGV4dCgxMCwgNzAsICcnLCB7IGNvbG9yOiAnIzAwZmYwMCcgfSkuc2V0QWxwaGEoMCk7XHJcblxyXG4gICAgdGhpcy5pbnN0cnVjdGlvblRleHQgPSB0aGlzLmFkZC50ZXh0KHdpZHRoLzQsIGhlaWdodC80LCAnQ0hJUCEnLCB7IGNvbG9yOiAnI2ZmMDAwMCcsIGZvbnRTaXplOiBcIjQwcHhcIiB9KTtcclxuICAgIFxyXG4gICAgY29uc3QgY2xvc2VCdXR0b24gPSBuZXcgU2NlbmVCdXR0b24odGhpcywgd2lkdGggLSA1MCwgNTAsIFwiWFwiLCAoKSA9PiB7IHRoaXMub25GaW5pc2goZmFsc2UpOyB0aGlzLnNjZW5lLnN0b3AoKTsgfSwgMHhDODAwMDApO1xyXG4gICAgY2xvc2VCdXR0b24uYnV0dG9uQ29sb3IgPSAweEM4MDAwMDtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgTWFpbk1lbnVTY2VuZSB9IGZyb20gJy4vbWFpbi1tZW51LXNjZW5lJztcclxuaW1wb3J0IHsgQm9vdFNjZW5lIH0gZnJvbSAnLi9ib290LXNjZW5lJztcclxuaW1wb3J0IHsgR2FtZVNjZW5lIH0gZnJvbSAnLi9nYW1lLXNjZW5lJztcclxuaW1wb3J0IHsgVmVybW91dGhTY2VuZSB9IGZyb20gJy4vdmVybW91dGgtc2NlbmUnO1xyXG5pbXBvcnQgeyBQb3VyU2NlbmUgfSBmcm9tICcuL3BvdXItc2NlbmUnO1xyXG5pbXBvcnQgeyBCb3VyYm9uU2NlbmUgfSBmcm9tICcuL2JvdXJib24tc2NlbmUnO1xyXG5pbXBvcnQgeyBJY2VTY2VuZSB9IGZyb20gJy4vaWNlLXNjZW5lJztcclxuaW1wb3J0IHsgT3JhbmdlU2NlbmUgfSBmcm9tICcuL29yYW5nZS1zY2VuZSc7XHJcbmltcG9ydCB7IFNoYWtlU2NlbmUgfSBmcm9tICcuL3NoYWtlLXNjZW5lJztcclxuaW1wb3J0IHsgTXVkZGxlU2NlbmUgfSBmcm9tICcuL211ZGRsZS1zY2VuZSc7XHJcbmltcG9ydCB7IEp1aWNlclNjZW5lIH0gZnJvbSAnLi9qdWljZXItc2NlbmUnO1xyXG5pbXBvcnQgeyBSZXN1bHRzU2NlbmUgfSBmcm9tICcuL3Jlc3VsdHMtc2NlbmUnO1xyXG5pbXBvcnQgeyBTdWNjZXNzU2NlbmUgfSBmcm9tICcuL3N1Y2Nlc3Mtc2NlbmUnO1xyXG5pbXBvcnQgeyBCaXR0ZXJzU2NlbmUgfSBmcm9tICcuL2JpdHRlcnMtc2NlbmUnO1xyXG5pbXBvcnQgeyBQZXJtaXNzaW9uc1NjZW5lIH0gZnJvbSAnLi9wZXJtaXNzaW9ucy1zY2VuZSc7XHJcbmltcG9ydCB7IERpc2Nvbm5lY3RlZFNjZW5lIH0gZnJvbSAnLi9kaXNjb25uZWN0ZWQtc2NlbmUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgW1xyXG4gIEJvb3RTY2VuZSxcclxuICBNYWluTWVudVNjZW5lLFxyXG4gIEdhbWVTY2VuZSxcclxuICBWZXJtb3V0aFNjZW5lLFxyXG4gIFBvdXJTY2VuZSxcclxuICBCb3VyYm9uU2NlbmUsXHJcbiAgSWNlU2NlbmUsXHJcbiAgT3JhbmdlU2NlbmUsXHJcbiAgU2hha2VTY2VuZSxcclxuICBNdWRkbGVTY2VuZSxcclxuICBKdWljZXJTY2VuZSxcclxuICBSZXN1bHRzU2NlbmUsXHJcbiAgU3VjY2Vzc1NjZW5lLFxyXG4gIEJpdHRlcnNTY2VuZSxcclxuICBQZXJtaXNzaW9uc1NjZW5lLFxyXG4gIERpc2Nvbm5lY3RlZFNjZW5lXHJcbl07XHJcbiIsImltcG9ydCB7IGRyaW5rVG9Db2xvck1hcCwgRmluaXNoRnVuY3Rpb24gfSBmcm9tICcuLi9oZWxwZXJzJztcclxuaW1wb3J0IHsgU2NlbmVCdXR0b24gfSBmcm9tICcuLi91aS9zY2VuZS1idXR0b24nO1xyXG5cclxuY29uc3Qgc2NlbmVDb25maWc6IFBoYXNlci5UeXBlcy5TY2VuZXMuU2V0dGluZ3NDb25maWcgPSB7XHJcbiAgYWN0aXZlOiBmYWxzZSxcclxuICB2aXNpYmxlOiBmYWxzZSxcclxuICBrZXk6ICdKdWljZXInLFxyXG59O1xyXG5jbGFzcyBHYW1lU2NlbmVBcmd1bWVudHMge1xyXG4gIHB1YmxpYyBCb3R0bGVTcHJpdGVOYW1lOiBzdHJpbmc7XHJcbiAgcHVibGljIG9uRmluaXNoOiBGaW5pc2hGdW5jdGlvbjtcclxufVxyXG5leHBvcnQgY2xhc3MgSnVpY2VyU2NlbmUgZXh0ZW5kcyBQaGFzZXIuU2NlbmUge1xyXG4gIHB1YmxpYyBzcGVlZCA9IDIwMDtcclxuICBwdWJsaWMgb25GaW5pc2g6IEZpbmlzaEZ1bmN0aW9uO1xyXG5cclxuICBwcml2YXRlIGp1aWNlclRvcDogUGhhc2VyLkdhbWVPYmplY3RzLlNwcml0ZTtcclxuICBwcml2YXRlIGp1aWNlckJvdHRvbTogUGhhc2VyLkdhbWVPYmplY3RzLlNwcml0ZTtcclxuICBwcml2YXRlIGZydWl0OiBQaGFzZXIuR2FtZU9iamVjdHMuU3ByaXRlO1xyXG4gIHByaXZhdGUgZW1wdHlHbGFzczogUGhhc2VyLkdhbWVPYmplY3RzLlNwcml0ZTtcclxuXHJcbiAgcHJpdmF0ZSBwb3VyQ291bnQgPSAwO1xyXG4gIHByaXZhdGUgdHJhbnNpdGlvbmluZyA9IGZhbHNlO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKHNjZW5lQ29uZmlnKTtcclxuICB9XHJcbiAgcHVibGljIGluc3RydWN0aW9uVGV4dDogUGhhc2VyLkdhbWVPYmplY3RzLlRleHQ7XHJcbiAgcHVibGljIHRleHQxOiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dDtcclxuICBwdWJsaWMgdGV4dDI6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0O1xyXG4gIHB1YmxpYyBmcnVpdFNwcml0ZU5hbWU6IHN0cmluZztcclxuICBwcml2YXRlIGxpcXVpZFJlY3RhbmdsZTogUGhhc2VyLkdhbWVPYmplY3RzLlJlY3RhbmdsZTtcclxuXHJcbiAgcHVibGljIGluaXQoZGF0YTogR2FtZVNjZW5lQXJndW1lbnRzKTogdm9pZCB7XHJcbiAgICBjb25zb2xlLmxvZygnSnVpY2VySW5pdCcpO1xyXG4gICAgdGhpcy5mcnVpdFNwcml0ZU5hbWUgPSBkYXRhLkJvdHRsZVNwcml0ZU5hbWUgKyBcIiAyXCI7XHJcbiAgICB0aGlzLm9uRmluaXNoID0gZGF0YS5vbkZpbmlzaDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjcmVhdGUoKTogdm9pZCB7XHJcbiAgICBjb25zb2xlLmxvZygnSnVpY2VyJyk7XHJcbiAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IHRoaXMuc3lzLmdhbWUuY2FudmFzO1xyXG4gICAgdGhpcy5wb3VyQ291bnQgPSAwO1xyXG4gICAgdGhpcy50cmFuc2l0aW9uaW5nID0gZmFsc2U7XHJcblxyXG4gICAgLy8gQWRkIGEgcGxheWVyIHNwcml0ZSB0aGF0IGNhbiBiZSBtb3ZlZCBhcm91bmQuIFBsYWNlIGhpbSBpbiB0aGUgbWlkZGxlIG9mIHRoZSBzY3JlZW4uXHJcbiAgICB0aGlzLmVtcHR5R2xhc3MgPSB0aGlzLmFkZC5zcHJpdGUod2lkdGggLyAyLCBoZWlnaHQgLyAyLCAnZW1wdHlnbGFzcycpLnNldEFscGhhKDApO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKGBnbGFzcyB4OiAke3dpZHRoIC8gNH1gKTtcclxuICAgIGNvbnNvbGUubG9nKGBnbGFzcyB5OiAke2hlaWdodCAvIDJ9YCk7XHJcbiAgICB0aGlzLmVtcHR5R2xhc3Muc2V0U2NhbGUoMC41KTtcclxuICAgIHRoaXMuZW1wdHlHbGFzcy5zY2FsZVkgPSB0aGlzLmVtcHR5R2xhc3Muc2NhbGVZICogMC41O1xyXG5cclxuICAgIHRoaXMuanVpY2VyVG9wID0gdGhpcy5hZGQuc3ByaXRlKHdpZHRoIC8gMS41LCBoZWlnaHQgLyAyLCAnanVpY2VydG9wJykuc2V0SW50ZXJhY3RpdmUoKTtcclxuICAgIHRoaXMuanVpY2VyVG9wLnNldFNjYWxlKDAuNyk7XHJcbiAgICB0aGlzLmp1aWNlclRvcC5zZXRPcmlnaW4oMC43Njc1LCAwLjc2NzUpO1xyXG5cclxuICAgIHRoaXMuanVpY2VyQm90dG9tID0gdGhpcy5hZGQuc3ByaXRlKHdpZHRoIC8gMS41LCBoZWlnaHQgLyAyLCAnanVpY2VyYm90dG9tJykuc2V0SW50ZXJhY3RpdmUoKTtcclxuICAgIHRoaXMuanVpY2VyQm90dG9tLnNldFNjYWxlKDAuNyk7XHJcbiAgICB0aGlzLmp1aWNlckJvdHRvbS5zZXRPcmlnaW4oMC43Njc1LCAwLjc2NzUpO1xyXG4gICAgdGhpcy5mcnVpdCA9IHRoaXMuYWRkLnNwcml0ZSh3aWR0aCAvIDEuNSwgaGVpZ2h0IC8gMiwgdGhpcy5mcnVpdFNwcml0ZU5hbWUpO1xyXG4gICAgdGhpcy5mcnVpdC5zZXRTY2FsZSgwLjcpO1xyXG4gICAgdGhpcy5mcnVpdC5zZXRPcmlnaW4oMC43Njc1LCAwLjc2NzUpO1xyXG5cclxuICAgIHRoaXMuanVpY2VyVG9wLnNldFNjYWxlKDAuNCk7XHJcbiAgICB0aGlzLmZydWl0LnNldFNjYWxlKDAuNCk7XHJcbiAgICB0aGlzLmp1aWNlckJvdHRvbS5zZXRTY2FsZSgwLjQpO1xyXG4gICAgdGhpcy5qdWljZXJUb3Auc2V0UG9zaXRpb24oXHJcbiAgICAgIHRoaXMuZW1wdHlHbGFzcy54ICsgdGhpcy5qdWljZXJUb3AuZGlzcGxheVdpZHRoIC8gMyxcclxuICAgICAgdGhpcy5lbXB0eUdsYXNzLnkgKyB0aGlzLmp1aWNlclRvcC5kaXNwbGF5SGVpZ2h0IC8gNCxcclxuICAgICk7XHJcbiAgICB0aGlzLmp1aWNlckJvdHRvbS5zZXRQb3NpdGlvbihcclxuICAgICAgdGhpcy5lbXB0eUdsYXNzLnggKyB0aGlzLmp1aWNlckJvdHRvbS5kaXNwbGF5V2lkdGggLyAzLFxyXG4gICAgICB0aGlzLmVtcHR5R2xhc3MueSArIHRoaXMuanVpY2VyVG9wLmRpc3BsYXlIZWlnaHQgLyA0LFxyXG4gICAgKTtcclxuICAgIHRoaXMuZnJ1aXQuc2V0UG9zaXRpb24oXHJcbiAgICAgIHRoaXMuZW1wdHlHbGFzcy54ICsgdGhpcy5qdWljZXJCb3R0b20uZGlzcGxheVdpZHRoIC8gMyxcclxuICAgICAgdGhpcy5lbXB0eUdsYXNzLnkgKyB0aGlzLmp1aWNlclRvcC5kaXNwbGF5SGVpZ2h0IC8gNCxcclxuICAgICk7XHJcblxyXG4gICAgdGhpcy5qdWljZXJUb3Aub24oJ3BvaW50ZXJvdmVyJywgKCkgPT4ge1xyXG4gICAgICB0aGlzLmp1aWNlclRvcC5zZXRUaW50KDB4Y2NjY2NjKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuanVpY2VyVG9wLm9uKCdwb2ludGVyb3V0JywgKCkgPT4ge1xyXG4gICAgICB0aGlzLmp1aWNlclRvcC5jbGVhclRpbnQoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuaW5wdXQuc2V0RHJhZ2dhYmxlKHRoaXMuanVpY2VyVG9wKTtcclxuXHJcbiAgICB0aGlzLmlucHV0Lm9uKCdkcmFnc3RhcnQnLCAocG9pbnRlciwgZ2FtZU9iamVjdCkgPT4ge1xyXG4gICAgICBnYW1lT2JqZWN0LnNldFRpbnQoMHg5OTk5OTkpO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLmxpcXVpZFJlY3RhbmdsZSA9IHRoaXMuYWRkXHJcbiAgICAgIC5yZWN0YW5nbGUoXHJcbiAgICAgICAgdGhpcy5lbXB0eUdsYXNzLngsXHJcbiAgICAgICAgdGhpcy5lbXB0eUdsYXNzLnkgKyB0aGlzLmVtcHR5R2xhc3MuZGlzcGxheUhlaWdodCAvIDIsXHJcbiAgICAgICAgdGhpcy5lbXB0eUdsYXNzLmRpc3BsYXlXaWR0aCxcclxuICAgICAgICArK3RoaXMucG91ckNvdW50LFxyXG4gICAgICAgIGRyaW5rVG9Db2xvck1hcC5nZXQodGhpcy5mcnVpdFNwcml0ZU5hbWUpLFxyXG4gICAgICApXHJcbiAgICAgIC5zZXRCbGVuZE1vZGUoUGhhc2VyLkJsZW5kTW9kZXMuTVVMVElQTFkpO1xyXG5cclxuICAgIHRoaXMuaW5wdXQub24oJ2RyYWcnLCAoXywgZ2FtZU9iamVjdCkgPT4ge1xyXG4gICAgICAvLyBmcm9tIGhlcmU6IG5lZWQgdG8gMS4gY2FsY3VsYXRlIGFuZ2xlIGJldHdlZW4gYmFzZSBvZiBvYmplY3QgYW5kIGN1cnNvclxyXG4gICAgICAvLyAyLiByb3RhdGUgdW50aWwgdG9wIG9mIGJvdHRsZSBpcyBwb2ludGluZyB0byBjdXJzb3JcclxuICAgICAgY29uc3QgeTEgPSBnYW1lT2JqZWN0Lnk7XHJcbiAgICAgIGNvbnN0IHkyID0gdGhpcy5pbnB1dC5hY3RpdmVQb2ludGVyLnk7XHJcbiAgICAgIGNvbnN0IHgxID0gZ2FtZU9iamVjdC54O1xyXG4gICAgICBjb25zdCB4MiA9IHRoaXMuaW5wdXQuYWN0aXZlUG9pbnRlci54O1xyXG5cclxuICAgICAgY29uc3Qgc2xvcGVSYWRzID0gTWF0aC5hdGFuMih5MiAtIHkxLCB4MiAtIHgxKTtcclxuICAgICAgY29uc3QgYWRqdXN0ZWQgPSBzbG9wZVJhZHMgKyAxLjU3MDc5NjMzO1xyXG5cclxuICAgICAgdGhpcy50ZXh0MS5zZXRUZXh0KGAke2FkanVzdGVkfWApO1xyXG4gICAgICBpZiAoYWRqdXN0ZWQgPD0gMC4wMjUgJiYgYWRqdXN0ZWQgPiAtLjc1KSB7XHJcbiAgICAgICAgZ2FtZU9iamVjdC5yb3RhdGlvbiA9IHNsb3BlUmFkcyArIDEuNTcwNzk2MzM7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuaW5wdXQub24oJ2RyYWdlbmQnLCAocG9pbnRlciwgZ2FtZU9iamVjdCkgPT4ge1xyXG4gICAgICBnYW1lT2JqZWN0LmNsZWFyVGludCgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy50ZXh0MSA9IHRoaXMuYWRkLnRleHQoMTAsIDEwLCAnJywgeyBjb2xvcjogJyMwMGZmMDAnIH0pLnNldEFscGhhKDApO1xyXG4gICAgdGhpcy50ZXh0MiA9IHRoaXMuYWRkLnRleHQoMTAwLCAxMCwgJycsIHsgY29sb3I6ICcjMDBmZjAwJyB9KS5zZXRBbHBoYSgwKTtcclxuXHJcbiAgICB0aGlzLmluc3RydWN0aW9uVGV4dCA9IHRoaXMuYWRkLnRleHQod2lkdGgvNCwgMypoZWlnaHQvNCwgJ1NRVUVFWkUhJywgeyBjb2xvcjogJyNmZjAwMDAnLCBmb250U2l6ZTogXCI0MHB4XCIgfSk7XHJcblxyXG4gICAgdGhpcy5qdWljZXJUb3Auc2V0RGVwdGgoMSk7XHJcbiAgICBjb25zdCBjbG9zZUJ1dHRvbiA9IG5ldyBTY2VuZUJ1dHRvbih0aGlzLCB3aWR0aCAtIDUwLCA1MCwgXCJYXCIsICgpID0+IHsgdGhpcy5vbkZpbmlzaChmYWxzZSk7IHRoaXMuc2NlbmUuc3RvcCgpOyB9LCAweEM4MDAwMCk7XHJcbiAgICBjbG9zZUJ1dHRvbi5idXR0b25Db2xvciA9IDB4QzgwMDAwO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHVwZGF0ZSgpOiB2b2lkIHtcclxuICAgIC8vIEV2ZXJ5IGZyYW1lLCB3ZSBjcmVhdGUgYSBuZXcgdmVsb2NpdHkgZm9yIHRoZSBzcHJpdGUgYmFzZWQgb24gd2hhdCBrZXlzIHRoZSBwbGF5ZXIgaXMgaG9sZGluZyBkb3duLlxyXG4gICAgdGhpcy50ZXh0MS5zZXRUZXh0KGAke3RoaXMuanVpY2VyVG9wLnJvdGF0aW9ufWApO1xyXG5cclxuICAgIGlmICh0aGlzLmp1aWNlclRvcC5yb3RhdGlvbiA8IC0wLjcpIHsvLy0xLjQ5KSB7XHJcbiAgICAgIGlmICghdGhpcy50cmFuc2l0aW9uaW5nKSB7XHJcbiAgICAgICAgdGhpcy50cmFuc2l0aW9uaW5nID0gdHJ1ZTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgIHRoaXMuc2NlbmUuc3RvcCgpO1xyXG4gICAgICAgICAgdGhpcy5vbkZpbmlzaCh0cnVlKTtcclxuICAgICAgICB9LCA1MDApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IGdldEdhbWVDZW50ZXIgfSBmcm9tICcuLi9oZWxwZXJzJztcclxuaW1wb3J0IHsgU2NlbmVCdXR0b24gfSBmcm9tICcuLi91aS9zY2VuZS1idXR0b24nO1xyXG5pbXBvcnQgeyBXaGl0ZVJ1c2hpbkh1YiB9IGZyb20gJy4uL3doaXRlUnVzaGluSHViJztcclxuXHJcbi8qKlxyXG4gKiBUaGUgaW5pdGlhbCBzY2VuZSB0aGF0IHN0YXJ0cywgc2hvd3MgdGhlIHNwbGFzaCBzY3JlZW5zLCBhbmQgbG9hZHMgdGhlIG5lY2Vzc2FyeSBhc3NldHMuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgTWFpbk1lbnVTY2VuZSBleHRlbmRzIFBoYXNlci5TY2VuZSB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcih7IGtleTogJ01haW5NZW51JyB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgd2FpdFRleHQ6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0O1xyXG4gIHByaXZhdGUgcGxheWVyRGlzcGxheTogUGhhc2VyLkdhbWVPYmplY3RzLlRleHQ7XHJcbiAgcHJpdmF0ZSByZWFkeUJ1dHRvbjogU2NlbmVCdXR0b247XHJcbiAgcHJpdmF0ZSBzdGFydEJ1dHRvbjogU2NlbmVCdXR0b247XHJcblxyXG4gIHB1YmxpYyBjcmVhdGUoKTogdm9pZCB7XHJcbiAgICBjb25zb2xlLmxvZygnTWFpbiBNZW51Jyk7XHJcblxyXG4gICAgY29uc3QgYyA9IGdldEdhbWVDZW50ZXIodGhpcyk7XHJcblxyXG4gICAgdGhpcy5hZGRcclxuICAgICAgLnRleHQoYy54LCA1MCwgYFRlYW0gJHtXaGl0ZVJ1c2hpbkh1Yi5Sb29tfWApXHJcbiAgICAgIC5zZXRDb2xvcihcIiNGRkZGRkZcIilcclxuICAgICAgLnNldEZvbnRTaXplKDI0KVxyXG4gICAgICAuc2V0T3JpZ2luKDAuNSk7XHJcbiAgICB0aGlzLnBsYXllckRpc3BsYXkgPSB0aGlzLmFkZFxyXG4gICAgICAudGV4dChjLngsIDIwMCwgYGApXHJcbiAgICAgIC5zZXRDb2xvcihcIiNGRkZGRkZcIilcclxuICAgICAgLnNldEZvbnRTaXplKDI0KVxyXG4gICAgICAuc2V0T3JpZ2luKDAuNSkuc2V0VmlzaWJsZShmYWxzZSk7XHJcblxyXG4gICAgdGhpcy53YWl0VGV4dCA9IHRoaXMuYWRkLnRleHQoYy54LCBjLnksIFwiUGxlYXNlIFdhaXRcXG5SZWdpc3RlcmluZy4uLlwiKVxyXG4gICAgICAuc2V0QWxpZ24oXCJjZW50ZXJcIilcclxuICAgICAgLnNldE9yaWdpbigwLjUpO1xyXG5cclxuICAgIFdoaXRlUnVzaGluSHViLkluc3RhbmNlLmh1YkNvbm5lY3Rpb24ub24oJ1VwZGF0ZVJlYWR5Q291bnQnLCAoaW5Db3VudDogbnVtYmVyKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiVXBkYXRpbmcgUmVhZHkgQ291bnRcIik7XHJcbiAgICAgIHRoaXMucGxheWVyRGlzcGxheS5zZXRUZXh0KGAjIHJlYWR5IHBsYXllcnM6ICR7aW5Db3VudH1gKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMucmVhZHlCdXR0b24gPSBuZXcgU2NlbmVCdXR0b24odGhpcywgYy54LCBjLnksICdSZWFkeSBVcCcsICgpID0+IHtcclxuICAgICAgdGhpcy5yZWFkeUJ1dHRvbi5zZXRWaXNpYmxlKGZhbHNlKTtcclxuICAgICAgV2hpdGVSdXNoaW5IdWIuSW5zdGFuY2UuUmVhZHlVcCgpO1xyXG4gICAgICB0aGlzLnN0YXJ0QnV0dG9uLnNldFZpc2libGUodHJ1ZSk7XHJcbiAgICAgIHRoaXMucGxheWVyRGlzcGxheS5zZXRWaXNpYmxlKHRydWUpO1xyXG4gICAgfSkuc2V0VmlzaWJsZShmYWxzZSk7XHJcblxyXG4gICAgdGhpcy5zdGFydEJ1dHRvbiA9IG5ldyBTY2VuZUJ1dHRvbih0aGlzLCBjLngsIGMueSwgJ0NsaWNrIHdoZW4gZXZlcnlvbmUgaXMgcmVhZHknLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMuc3RhcnRCdXR0b24uc2V0VmlzaWJsZShmYWxzZSk7XHJcbiAgICAgIFdoaXRlUnVzaGluSHViLkluc3RhbmNlLkFsbFJlYWR5KCk7XHJcbiAgICAgIHRoaXMud2FpdFRleHQuc2V0VmlzaWJsZSh0cnVlKTtcclxuICAgICAgdGhpcy53YWl0VGV4dC5zZXRUZXh0KFwiUGxlYXNlIFdhaXRcXG5TdGFydGluZy4uLlwiKTtcclxuICAgIH0pLnNldFZpc2libGUoZmFsc2UpO1xyXG5cclxuICAgIC8vIFJlZ2lzdGVyIGZvciB0aGUgYXNzaWduIGV2ZW50IGJlY2F1c2UgaXQgbWVhbnMgd2UgbmVlZCB0byBzdGFydCB0aGUgZ2FtZS4gIFRoaXMgY2FuIG9jY3VyIGF0IGFuIHBvaW50XHJcbiAgICAvLyBhZnRlciB3ZSdyZSByZWdpc3RlcmVkIHRvIGEgdGVhbSBzbyB3ZSBuZWVkIHRvIGRvIGl0IGJlZm9yZSBjYWxsaW5nIHJlZ2lzdGVyLlxyXG4gICAgV2hpdGVSdXNoaW5IdWIuSW5zdGFuY2Uub25jZShXaGl0ZVJ1c2hpbkh1Yi5FdmVudHMuQXNzaWduLCAoZGF0YTogYW55KSA9PiB7XHJcbiAgICAgIHRoaXMuc2NlbmUuc3RhcnQoJ0dhbWUnLCBkYXRhKTtcclxuICAgIH0pO1xyXG5cclxuICAgIFdoaXRlUnVzaGluSHViLkluc3RhbmNlLlJlZ2lzdGVyKCkudGhlbigoKSA9PiB7XHJcbiAgICAgIHRoaXMud2FpdFRleHQuc2V0VmlzaWJsZShmYWxzZSk7XHJcbiAgICAgIHRoaXMucmVhZHlCdXR0b24uc2V0VmlzaWJsZSh0cnVlKTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBGaW5pc2hGdW5jdGlvbiB9IGZyb20gJy4uL2hlbHBlcnMnO1xyXG5pbXBvcnQgeyBTY2VuZUJ1dHRvbiB9IGZyb20gJy4uL3VpL3NjZW5lLWJ1dHRvbic7XHJcblxyXG5jb25zdCBzY2VuZUNvbmZpZzogUGhhc2VyLlR5cGVzLlNjZW5lcy5TZXR0aW5nc0NvbmZpZyA9IHtcclxuICBhY3RpdmU6IGZhbHNlLFxyXG4gIHZpc2libGU6IGZhbHNlLFxyXG4gIGtleTogJ011ZGRsZSBEcmluaycsXHJcbn07XHJcbmNsYXNzIEdhbWVTY2VuZUFyZ3VtZW50cyB7XHJcbiAgcHVibGljIG9uRmluaXNoOiBGaW5pc2hGdW5jdGlvbjtcclxufVxyXG5leHBvcnQgY2xhc3MgTXVkZGxlU2NlbmUgZXh0ZW5kcyBQaGFzZXIuU2NlbmUge1xyXG4gIHB1YmxpYyBzcGVlZCA9IDIwMDtcclxuICBwdWJsaWMgb25GaW5pc2g6IEZpbmlzaEZ1bmN0aW9uO1xyXG4gIHByaXZhdGUgZW1wdHlHbGFzczogUGhhc2VyLkdhbWVPYmplY3RzLlNwcml0ZTtcclxuXHJcbiAgcHJpdmF0ZSBjdXJzb3JLZXlzOiBQaGFzZXIuVHlwZXMuSW5wdXQuS2V5Ym9hcmQuQ3Vyc29yS2V5cztcclxuICBwcml2YXRlIG11ZGRsZXI6IFBoYXNlci5HYW1lT2JqZWN0cy5TcHJpdGU7XHJcbiAgcHJpdmF0ZSBtdWRkbGVDb250YWluZXJSZWN0OiBQaGFzZXIuR2FtZU9iamVjdHMuUmVjdGFuZ2xlO1xyXG4gIHByaXZhdGUgbW92aW5nVGhyZXNob2xkUmVjdDogUGhhc2VyLkdhbWVPYmplY3RzLlJlY3RhbmdsZTtcclxuICBwcml2YXRlIGZpbGxSZWN0OiBQaGFzZXIuR2FtZU9iamVjdHMuUmVjdGFuZ2xlO1xyXG5cclxuICBwcml2YXRlIGNvbnRlbnRzOiBzdHJpbmdbXSA9IFtdO1xyXG4gIHByaXZhdGUgZ2xhc3NGaWxsZXJzOiBQaGFzZXIuR2FtZU9iamVjdHMuU3ByaXRlW10gPSBbXTtcclxuXHJcbiAgcHJpdmF0ZSBpc1BvdXJpbmcgPSAwO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKHNjZW5lQ29uZmlnKTtcclxuICB9XHJcbiAgcHVibGljIHRleHQxOiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dDtcclxuICBwdWJsaWMgdGV4dDI6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0O1xyXG4gIHB1YmxpYyB0ZXh0MzogUGhhc2VyLkdhbWVPYmplY3RzLlRleHQ7XHJcbiAgcHVibGljIHRleHQ0OiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dDtcclxuICBwdWJsaWMgdGV4dDU6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0O1xyXG5cclxuICBwdWJsaWMgZXJhc2VDb3VudCA9IDA7XHJcbiAgcHVibGljIGljZUxldmVsID0gMDtcclxuICBwcml2YXRlIHRyYW5zaXRpb25pbmcgPSBmYWxzZTtcclxuICBwcml2YXRlIHN0YXJ0UG9zaXRpb24gPSB0cnVlO1xyXG5cclxuICBwdWJsaWMgaW5pdChkYXRhOiBHYW1lU2NlbmVBcmd1bWVudHMpIHtcclxuICAgIHRoaXMub25GaW5pc2ggPSBkYXRhLm9uRmluaXNoO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNyZWF0ZSgpOiB2b2lkIHtcclxuICAgIGNvbnNvbGUubG9nKCdNdWRkbGUnKTtcclxuICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCB9ID0gdGhpcy5zeXMuZ2FtZS5jYW52YXM7XHJcbiAgICB0aGlzLmVtcHR5R2xhc3MgPSB0aGlzLmFkZC5zcHJpdGUod2lkdGggLyAyLCBoZWlnaHQgLyAyLCAnZW1wdHlnbGFzcycpO1xyXG5cclxuICAgIHRoaXMudHJhbnNpdGlvbmluZyA9IGZhbHNlO1xyXG4gICAgdGhpcy5lcmFzZUNvdW50ID0gMDtcclxuICAgIHRoaXMuaWNlTGV2ZWwgPSAwO1xyXG4gICAgdGhpcy5zdGFydFBvc2l0aW9uID0gdHJ1ZTtcclxuICAgIC8vIEFkZCBhIHBsYXllciBzcHJpdGUgdGhhdCBjYW4gYmUgbW92ZWQgYXJvdW5kLiBQbGFjZSBoaW0gaW4gdGhlIG1pZGRsZSBvZiB0aGUgc2NyZWVuLlxyXG5cclxuICAgIHRoaXMubXVkZGxlciA9IHRoaXMuYWRkXHJcbiAgICAgIC5zcHJpdGUod2lkdGggLyAyLCBoZWlnaHQgLyAyIC0gdGhpcy5lbXB0eUdsYXNzLmRpc3BsYXlIZWlnaHQgLyAzLCAnbXVkZGxlcicpXHJcbiAgICAgIC5zZXRJbnRlcmFjdGl2ZSgpXHJcbiAgICAgIC5zZXREZXB0aCgxKVxyXG4gICAgICAuc2V0U2NhbGUoMC4zKVxyXG4gICAgICAuc2V0QW5nbGUoMTgwKTtcclxuICAgIHRoaXMubXVkZGxlQ29udGFpbmVyUmVjdCA9IHRoaXMuYWRkXHJcbiAgICAgIC5yZWN0YW5nbGUoXHJcbiAgICAgICAgdGhpcy5lbXB0eUdsYXNzLngsXHJcbiAgICAgICAgdGhpcy5lbXB0eUdsYXNzLnksXHJcbiAgICAgICAgdGhpcy5lbXB0eUdsYXNzLmRpc3BsYXlXaWR0aCxcclxuICAgICAgICB0aGlzLmVtcHR5R2xhc3MuZGlzcGxheUhlaWdodCxcclxuICAgICAgICAweDAwZmYwMCxcclxuICAgICAgKVxyXG4gICAgICAuc2V0U2NhbGUoMC43KVxyXG4gICAgICAuc2V0RGVwdGgoMilcclxuICAgICAgLnNldEFscGhhKDApO1xyXG4gICAgdGhpcy5tb3ZpbmdUaHJlc2hvbGRSZWN0ID0gdGhpcy5hZGRcclxuICAgICAgLnJlY3RhbmdsZShcclxuICAgICAgICB0aGlzLmVtcHR5R2xhc3MueCxcclxuICAgICAgICB0aGlzLmVtcHR5R2xhc3MueSArIGhlaWdodCAvIDE1LFxyXG4gICAgICAgIHRoaXMuZW1wdHlHbGFzcy5kaXNwbGF5V2lkdGgsXHJcbiAgICAgICAgaGVpZ2h0IC8gNDAsXHJcbiAgICAgICAgMHgwMDAwZmYsXHJcbiAgICAgIClcclxuICAgICAgLnNldERlcHRoKDIpXHJcbiAgICAgIC5zZXRBbHBoYSgwKTtcclxuXHJcbiAgICB0aGlzLmZpbGxSZWN0ID0gdGhpcy5hZGRcclxuICAgICAgLnJlY3RhbmdsZSh0aGlzLmVtcHR5R2xhc3MueCwgdGhpcy5lbXB0eUdsYXNzLmdldEJvdHRvbUxlZnQoKS55LCB0aGlzLmVtcHR5R2xhc3MuZGlzcGxheVdpZHRoLCAxLCAweGZmMDAwMClcclxuICAgICAgLnNldERlcHRoKDIpXHJcbiAgICAgIC5zZXRBbHBoYSgwLjUpXHJcbiAgICAgIC5zZXRCbGVuZE1vZGUoUGhhc2VyLkJsZW5kTW9kZXMuTVVMVElQTFkpO1xyXG5cclxuICAgIGNvbnN0IGNvdmVyID0gdGhpcy5tYWtlLmltYWdlKHtcclxuICAgICAga2V5OiAnb3JhbmdlJyxcclxuICAgICAgYWRkOiBmYWxzZSxcclxuICAgIH0pO1xyXG4gICAgY292ZXIuc2V0U2NhbGUoMC43KTtcclxuICAgIGNvbnNvbGUubG9nKGBjb3ZlcjogJHtjb3Zlci54fSAke2NvdmVyLnl9YCk7XHJcbiAgICAvL2NvdmVyLnNldFBvc2l0aW9uKHRoaXMub3JhbmdlLngsIHRoaXMub3JhbmdlLnkpO1xyXG4gICAgY292ZXIuc2V0RGVwdGgoMSk7XHJcbiAgICAvL2NvdmVyLnNldE9yaWdpbigwLCAwKTtcclxuICAgIC8vdGhpcy5ydC5zZXRPcmlnaW4oMC41LCAwLjUpO1xyXG5cclxuICAgIHRoaXMuaW5wdXQub24oJ2RyYWdzdGFydCcsIChwb2ludGVyLCBnYW1lT2JqZWN0KSA9PiB7XHJcbiAgICAgIGdhbWVPYmplY3Quc2V0VGludCgweDk5OTk5OSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmlucHV0Lm9uKCdkcmFnZW5kJywgKHBvaW50ZXIsIGdhbWVPYmplY3QpID0+IHtcclxuICAgICAgZ2FtZU9iamVjdC5jbGVhclRpbnQoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuaW5wdXQuc2V0RHJhZ2dhYmxlKHRoaXMubXVkZGxlcik7XHJcblxyXG4gICAgdGhpcy5pbnB1dC5vbigncG9pbnRlcnVwJywgKCkgPT4ge1xyXG4gICAgICB0aGlzLnRleHQxLnNldFRleHQoYM64OiAke3RoaXMuaW5wdXQuYWN0aXZlUG9pbnRlci5nZXRBbmdsZSgpfWApO1xyXG4gICAgICB0aGlzLnRleHQyLnNldFRleHQoYHg6ICR7dGhpcy5pbnB1dC5hY3RpdmVQb2ludGVyLmdldERpc3RhbmNlWCgpfWApO1xyXG4gICAgICB0aGlzLnRleHQzLnNldFRleHQoYHk6ICR7dGhpcy5pbnB1dC5hY3RpdmVQb2ludGVyLmdldERpc3RhbmNlWSgpfWApO1xyXG4gICAgICB0aGlzLnRleHQ0LnNldFRleHQoYGQ6ICR7dGhpcy5pbnB1dC5hY3RpdmVQb2ludGVyLmdldERpc3RhbmNlKCl9YCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmlucHV0Lm9uKCdwb2ludGVyZG93bicsICgpID0+IHsgfSk7XHJcblxyXG4gICAgdGhpcy5pbnB1dC5vbignZHJhZycsIChwb2ludGVyLCBnYW1lT2JqZWN0LCBkcmFnWCwgZHJhZ1kpID0+IHtcclxuICAgICAgY29uc3Qgc3R4ID0gZ2FtZU9iamVjdC54O1xyXG4gICAgICBjb25zdCBzdHkgPSBnYW1lT2JqZWN0Lnk7XHJcbiAgICAgIGdhbWVPYmplY3QueSA9IGRyYWdZO1xyXG4gICAgICBnYW1lT2JqZWN0LnggPSBkcmFnWDtcclxuXHJcbiAgICAgIC8vIGtlZXBpbmcgdGhlIG11ZGRsZXIgaW4gdGhlIGdsYXNzXHJcbiAgICAgIGNvbnN0IGJsQyA9IHRoaXMubXVkZGxlQ29udGFpbmVyUmVjdC5nZXRCb3R0b21MZWZ0KCk7XHJcbiAgICAgIGNvbnN0IGJyQyA9IHRoaXMubXVkZGxlQ29udGFpbmVyUmVjdC5nZXRCb3R0b21SaWdodCgpO1xyXG4gICAgICBjb25zdCB0ckMgPSB0aGlzLm11ZGRsZUNvbnRhaW5lclJlY3QuZ2V0VG9wUmlnaHQoKTtcclxuICAgICAgY29uc3QgYmxNID0gdGhpcy5tdWRkbGVyLmdldFRvcFJpZ2h0KCk7XHJcbiAgICAgIGNvbnN0IGJyTSA9IHRoaXMubXVkZGxlci5nZXRUb3BMZWZ0KCk7XHJcbiAgICAgIGNvbnNvbGUubG9nKGJsTS54KTtcclxuICAgICAgY29uc29sZS5sb2coYmxDLngpO1xyXG4gICAgICBpZiAoYmxNLnggPCBibEMueCkge1xyXG4gICAgICAgIGdhbWVPYmplY3QueSA9IHN0eTtcclxuICAgICAgICBnYW1lT2JqZWN0LnggPSBzdHg7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGJyTS54ID4gYnJDLngpIHtcclxuICAgICAgICBnYW1lT2JqZWN0LnkgPSBzdHk7XHJcbiAgICAgICAgZ2FtZU9iamVjdC54ID0gc3R4O1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChick0ueSA+IGJyQy55KSB7XHJcbiAgICAgICAgZ2FtZU9iamVjdC55ID0gc3R5O1xyXG4gICAgICAgIGdhbWVPYmplY3QueCA9IHN0eDtcclxuICAgICAgfVxyXG4gICAgICBpZiAoYmxNLnkgPCB0ckMueSkge1xyXG4gICAgICAgIGdhbWVPYmplY3QueSA9IHN0eTtcclxuICAgICAgICBnYW1lT2JqZWN0LnggPSBzdHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIGNoZWNraW5nIGlmIGl0IHByb3Blcmx5IG1vdmVzIHVwIGFuZCBkb3duXHJcbiAgICAgIGlmIChibE0ueSA+IHRoaXMubW92aW5nVGhyZXNob2xkUmVjdC5nZXRCb3R0b21MZWZ0KCkueSAmJiAhdGhpcy5zdGFydFBvc2l0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5zdGFydFBvc2l0aW9uID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmljZUxldmVsICs9IDE7XHJcbiAgICAgICAgdGhpcy50ZXh0MS5zZXRUZXh0KGAke3RoaXMuaWNlTGV2ZWx9YCk7XHJcbiAgICAgICAgdGhpcy5maWxsUmVjdC5kaXNwbGF5SGVpZ2h0ICs9IDE1O1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChibE0ueSA8IHRoaXMubW92aW5nVGhyZXNob2xkUmVjdC5nZXRUb3BMZWZ0KCkueSAmJiB0aGlzLnN0YXJ0UG9zaXRpb24pIHtcclxuICAgICAgICB0aGlzLnN0YXJ0UG9zaXRpb24gPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnRleHQxLnNldFRleHQoYCR7dGhpcy5pY2VMZXZlbH1gKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gdHJhbnNpdGlvblxyXG4gICAgICBpZiAodGhpcy5pY2VMZXZlbCA+IDQgJiYgdGhpcy50cmFuc2l0aW9uaW5nID09IGZhbHNlKSB7XHJcbiAgICAgICAgdGhpcy50cmFuc2l0aW9uaW5nID0gdHJ1ZTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgIHRoaXMuc2NlbmUuc3RvcCgpO1xyXG4gICAgICAgICAgdGhpcy5vbkZpbmlzaCh0cnVlKTtcclxuICAgICAgICB9LCA1MDApO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLnRleHQxID0gdGhpcy5hZGQudGV4dCgxMCwgMTAsICcnLCB7IGNvbG9yOiAnIzAwZmYwMCcgfSkuc2V0QWxwaGEoMCk7XHJcbiAgICB0aGlzLnRleHQyID0gdGhpcy5hZGQudGV4dCgxMCwgMjUsICcnLCB7IGNvbG9yOiAnIzAwZmYwMCcgfSkuc2V0QWxwaGEoMCk7XHJcbiAgICB0aGlzLnRleHQzID0gdGhpcy5hZGQudGV4dCgxMCwgNDAsICcnLCB7IGNvbG9yOiAnIzAwZmYwMCcgfSkuc2V0QWxwaGEoMCk7XHJcbiAgICB0aGlzLnRleHQ0ID0gdGhpcy5hZGQudGV4dCgxMCwgNTUsICcnLCB7IGNvbG9yOiAnIzAwZmYwMCcgfSkuc2V0QWxwaGEoMCk7XHJcbiAgICB0aGlzLnRleHQ1ID0gdGhpcy5hZGQudGV4dCgxMCwgNzAsICcnLCB7IGNvbG9yOiAnIzAwZmYwMCcgfSkuc2V0QWxwaGEoMCk7XHJcbiAgICB0aGlzLnRleHQxLnNldFRleHQoYCR7dGhpcy5pY2VMZXZlbH1gKTtcclxuXHJcbiAgICBjb25zdCBjbG9zZUJ1dHRvbiA9IG5ldyBTY2VuZUJ1dHRvbih0aGlzLCB3aWR0aCAtIDUwLCA1MCwgXCJYXCIsICgpID0+IHsgdGhpcy5vbkZpbmlzaChmYWxzZSk7IHRoaXMuc2NlbmUuc3RvcCgpOyB9LCAweEM4MDAwMCk7XHJcbiAgICBjbG9zZUJ1dHRvbi5idXR0b25Db2xvciA9IDB4QzgwMDAwO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBGaW5pc2hGdW5jdGlvbiB9IGZyb20gJy4uL2hlbHBlcnMnO1xyXG5pbXBvcnQgeyBTY2VuZUJ1dHRvbiB9IGZyb20gJy4uL3VpL3NjZW5lLWJ1dHRvbic7XHJcblxyXG5jb25zdCBzY2VuZUNvbmZpZzogUGhhc2VyLlR5cGVzLlNjZW5lcy5TZXR0aW5nc0NvbmZpZyA9IHtcclxuICBhY3RpdmU6IGZhbHNlLFxyXG4gIHZpc2libGU6IGZhbHNlLFxyXG4gIGtleTogJ09yYW5nZSBQZWVsJyxcclxufTtcclxuXHJcbmNsYXNzIEdhbWVTY2VuZUFyZ3VtZW50cyB7XHJcbiAgcHVibGljIG9uRmluaXNoOiBGaW5pc2hGdW5jdGlvbjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIE9yYW5nZVNjZW5lIGV4dGVuZHMgUGhhc2VyLlNjZW5lIHtcclxuICBwdWJsaWMgc3BlZWQgPSAyMDA7XHJcbiAgcHVibGljIG9uRmluaXNoOiBGaW5pc2hGdW5jdGlvbjtcclxuXHJcbiAgcHJpdmF0ZSBjdXJzb3JLZXlzOiBQaGFzZXIuVHlwZXMuSW5wdXQuS2V5Ym9hcmQuQ3Vyc29yS2V5cztcclxuICBwcml2YXRlIG9yYW5nZTogUGhhc2VyLkdhbWVPYmplY3RzLlNwcml0ZTtcclxuICBwcml2YXRlIG9yYW5nZVBlZWxlZDogUGhhc2VyLkdhbWVPYmplY3RzLlNwcml0ZTtcclxuICBwcml2YXRlIGNhbmVsbGU6IFBoYXNlci5HYW1lT2JqZWN0cy5TcHJpdGU7XHJcbiAgcHJpdmF0ZSBibGFkZVJlY3Q6IFBoYXNlci5HYW1lT2JqZWN0cy5SZWN0YW5nbGU7XHJcblxyXG4gIHByaXZhdGUgY29udGVudHM6IHN0cmluZ1tdID0gW107XHJcbiAgcHJpdmF0ZSBnbGFzc0ZpbGxlcnM6IFBoYXNlci5HYW1lT2JqZWN0cy5TcHJpdGVbXSA9IFtdO1xyXG5cclxuICBwcml2YXRlIGlzUG91cmluZyA9IDA7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoc2NlbmVDb25maWcpO1xyXG4gIH1cclxuICBwdWJsaWMgaW5zdHJ1Y3Rpb25UZXh0OiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dDtcclxuICBwdWJsaWMgdGV4dDE6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0O1xyXG4gIHB1YmxpYyB0ZXh0MjogUGhhc2VyLkdhbWVPYmplY3RzLlRleHQ7XHJcbiAgcHVibGljIHRleHQzOiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dDtcclxuICBwdWJsaWMgdGV4dDQ6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0O1xyXG4gIHB1YmxpYyB0ZXh0NTogUGhhc2VyLkdhbWVPYmplY3RzLlRleHQ7XHJcbiAgcHVibGljIHJ0OiBQaGFzZXIuR2FtZU9iamVjdHMuUmVuZGVyVGV4dHVyZTtcclxuICBwdWJsaWMgZXJhc2VDb3VudCA9IDA7XHJcbiAgcHVibGljIGljZUxldmVsID0gMDtcclxuICBwcml2YXRlIHRyYW5zaXRpb25pbmcgPSBmYWxzZTtcclxuXHJcbiAgcHVibGljIGluaXQoZGF0YTogR2FtZVNjZW5lQXJndW1lbnRzKTogdm9pZCB7XHJcbiAgICB0aGlzLm9uRmluaXNoID0gZGF0YS5vbkZpbmlzaDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjcmVhdGUoKTogdm9pZCB7XHJcbiAgICBjb25zb2xlLmxvZygnT3JhbmdlJyk7XHJcbiAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IHRoaXMuc3lzLmdhbWUuY2FudmFzO1xyXG4gICAgdGhpcy50cmFuc2l0aW9uaW5nID0gZmFsc2U7XHJcbiAgICB0aGlzLmVyYXNlQ291bnQgPSAwO1xyXG4gICAgdGhpcy5pY2VMZXZlbCA9IDA7XHJcbiAgICAvLyBBZGQgYSBwbGF5ZXIgc3ByaXRlIHRoYXQgY2FuIGJlIG1vdmVkIGFyb3VuZC4gUGxhY2UgaGltIGluIHRoZSBtaWRkbGUgb2YgdGhlIHNjcmVlbi5cclxuICAgIHRoaXMub3JhbmdlUGVlbGVkID0gdGhpcy5hZGQuc3ByaXRlKHdpZHRoIC8gMiwgaGVpZ2h0IC8gNCwgJ29yYW5nZScpO1xyXG4gICAgdGhpcy5vcmFuZ2VQZWVsZWQuc2V0U2NhbGUoMC43KTtcclxuICAgIHRoaXMub3JhbmdlID0gdGhpcy5hZGQuc3ByaXRlKHdpZHRoIC8gMiwgaGVpZ2h0IC8gNCwgJ29yYW5nZWluc2lkZScpO1xyXG4gICAgdGhpcy5vcmFuZ2Uuc2V0U2NhbGUoMC43KTtcclxuXHJcbiAgICB0aGlzLmNhbmVsbGUgPSB0aGlzLmFkZFxyXG4gICAgICAuc3ByaXRlKCgzICogd2lkdGgpIC8gNCwgKDMgKiBoZWlnaHQpIC8gNCwgJ2NhbmVsbGVrbmlmZScpXHJcbiAgICAgIC5zZXRJbnRlcmFjdGl2ZSgpXHJcbiAgICAgIC5zZXREZXB0aCgxKTtcclxuICAgIHRoaXMuYmxhZGVSZWN0ID0gdGhpcy5hZGRcclxuICAgICAgLnJlY3RhbmdsZShcclxuICAgICAgICB0aGlzLmNhbmVsbGUueCArIHRoaXMuY2FuZWxsZS5kaXNwbGF5V2lkdGggLyA4LFxyXG4gICAgICAgIHRoaXMuY2FuZWxsZS55IC0gdGhpcy5jYW5lbGxlLmRpc3BsYXlIZWlnaHQgLyAyICsgdGhpcy5jYW5lbGxlLmRpc3BsYXlIZWlnaHQgKiAoMSAvIDQwKSArMjAsXHJcbiAgICAgICAgdGhpcy5jYW5lbGxlLmRpc3BsYXlXaWR0aCAqICgzIC8gNCksXHJcbiAgICAgICAgdGhpcy5jYW5lbGxlLmRpc3BsYXlIZWlnaHQgKiAoMSAvIDIwKSxcclxuICAgICAgICAweDAwZmYwMCxcclxuICAgICAgKVxyXG4gICAgICAuc2V0RGVwdGgoMilcclxuICAgICAgLnNldEFscGhhKDApO1xyXG5cclxuICAgIGNvbnN0IGNvdmVyID0gdGhpcy5tYWtlLmltYWdlKHtcclxuICAgICAga2V5OiAnb3JhbmdlJyxcclxuICAgICAgYWRkOiBmYWxzZSxcclxuICAgIH0pO1xyXG4gICAgY292ZXIuc2V0U2NhbGUoMC43KTtcclxuICAgIGNvbnNvbGUubG9nKGBjb3ZlcjogJHtjb3Zlci54fSAke2NvdmVyLnl9YCk7XHJcbiAgICAvL2NvdmVyLnNldFBvc2l0aW9uKHRoaXMub3JhbmdlLngsIHRoaXMub3JhbmdlLnkpO1xyXG4gICAgY292ZXIuc2V0RGVwdGgoMSk7XHJcbiAgICAvL2NvdmVyLnNldE9yaWdpbigwLCAwKTtcclxuICAgIHRoaXMucnQgPSB0aGlzLmFkZC5yZW5kZXJUZXh0dXJlKFxyXG4gICAgICB0aGlzLm9yYW5nZS5nZXRUb3BMZWZ0KCkueCxcclxuICAgICAgdGhpcy5vcmFuZ2UuZ2V0VG9wTGVmdCgpLnksXHJcbiAgICAgIHRoaXMub3JhbmdlUGVlbGVkLmRpc3BsYXlXaWR0aCxcclxuICAgICAgdGhpcy5vcmFuZ2VQZWVsZWQuZGlzcGxheUhlaWdodCxcclxuICAgICk7XHJcbiAgICAvL3RoaXMucnQuc2V0T3JpZ2luKDAuNSwgMC41KTtcclxuICAgIGNvbnNvbGUubG9nKGBydDogJHt0aGlzLnJ0Lnh9ICR7dGhpcy5ydC55fWApO1xyXG4gICAgdGhpcy5ydC5zZXRQb3NpdGlvbih0aGlzLm9yYW5nZVBlZWxlZC5nZXRUb3BMZWZ0KCkueCwgdGhpcy5vcmFuZ2VQZWVsZWQuZ2V0VG9wTGVmdCgpLnkpO1xyXG4gICAgLy90aGlzLnJ0LnNldFRpbnQoMHgwMEZGMDApO1xyXG4gICAgdGhpcy5ydC5kcmF3KGNvdmVyLCB0aGlzLm9yYW5nZVBlZWxlZC5kaXNwbGF5V2lkdGggLyAyLCB0aGlzLm9yYW5nZVBlZWxlZC5kaXNwbGF5SGVpZ2h0IC8gMik7IC8vLCB3aWR0aCAqIDAuNSwgaGVpZ2h0ICogMC41KVxyXG4gICAgY29uc29sZS5sb2coYHJ0OiAke3RoaXMucnQueH0gJHt0aGlzLnJ0Lnl9YCk7XHJcbiAgICBjb25zb2xlLmxvZyhgb3JhbmdlOiAke3RoaXMub3JhbmdlLnh9ICR7dGhpcy5vcmFuZ2UueX1gKTtcclxuICAgIGNvbnNvbGUubG9nKGBvcmFuZ2VQZWVsZWQ6ICR7dGhpcy5vcmFuZ2VQZWVsZWQueH0gJHt0aGlzLm9yYW5nZVBlZWxlZC55fWApO1xyXG5cclxuICAgIHRoaXMuaW5wdXQub24oJ2RyYWdzdGFydCcsIChwb2ludGVyLCBnYW1lT2JqZWN0KSA9PiB7XHJcbiAgICAgIGdhbWVPYmplY3Quc2V0VGludCgweDk5OTk5OSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmlucHV0Lm9uKCdkcmFnZW5kJywgKHBvaW50ZXIsIGdhbWVPYmplY3QpID0+IHtcclxuICAgICAgZ2FtZU9iamVjdC5jbGVhclRpbnQoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuaW5wdXQuc2V0RHJhZ2dhYmxlKHRoaXMuY2FuZWxsZSk7XHJcblxyXG4gICAgdGhpcy5pbnB1dC5vbigncG9pbnRlcnVwJywgKCkgPT4ge1xyXG4gICAgICB0aGlzLnRleHQxLnNldFRleHQoYM64OiAke3RoaXMuaW5wdXQuYWN0aXZlUG9pbnRlci5nZXRBbmdsZSgpfWApLnNldEFscGhhKDApO1xyXG4gICAgICB0aGlzLnRleHQyLnNldFRleHQoYHg6ICR7dGhpcy5pbnB1dC5hY3RpdmVQb2ludGVyLmdldERpc3RhbmNlWCgpfWApLnNldEFscGhhKDApO1xyXG4gICAgICB0aGlzLnRleHQzLnNldFRleHQoYHk6ICR7dGhpcy5pbnB1dC5hY3RpdmVQb2ludGVyLmdldERpc3RhbmNlWSgpfWApLnNldEFscGhhKDApO1xyXG4gICAgICB0aGlzLnRleHQ0LnNldFRleHQoYGQ6ICR7dGhpcy5pbnB1dC5hY3RpdmVQb2ludGVyLmdldERpc3RhbmNlKCl9YCkuc2V0QWxwaGEoMCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmlucHV0Lm9uKCdwb2ludGVyZG93bicsICgpID0+IHsgfSk7XHJcblxyXG4gICAgdGhpcy5pbnB1dC5vbignZHJhZycsIChwb2ludGVyLCBnYW1lT2JqZWN0LCBkcmFnWCwgZHJhZ1kpID0+IHtcclxuICAgICAgLy8gZnJvbSBoZXJlOiBuZWVkIHRvIDEuIGNhbGN1bGF0ZSBhbmdsZSBiZXR3ZWVuIGJhc2Ugb2Ygb2JqZWN0IGFuZCBjdXJzb3JcclxuICAgICAgLy8gMi4gcm90YXRlIHVudGlsIHRvcCBvZiBib3R0bGUgaXMgcG9pbnRpbmcgdG8gY3Vyc29yXHJcblxyXG4gICAgICBnYW1lT2JqZWN0LnkgPSBkcmFnWTtcclxuICAgICAgZ2FtZU9iamVjdC54ID0gZHJhZ1g7XHJcbiAgICAgIHRoaXMuYmxhZGVSZWN0LnNldFBvc2l0aW9uKFxyXG4gICAgICAgIGRyYWdYICsgdGhpcy5jYW5lbGxlLmRpc3BsYXlXaWR0aCAvIDgsXHJcbiAgICAgICAgZHJhZ1kgLSB0aGlzLmNhbmVsbGUuZGlzcGxheUhlaWdodCAvIDIgKyB0aGlzLmNhbmVsbGUuZGlzcGxheUhlaWdodCAqICgxIC8gNDApICsyMCxcclxuICAgICAgKTtcclxuICAgICAgdGhpcy50ZXh0Mi5zZXRUZXh0KGBkcmFnWTogJHtkcmFnWX1gKTtcclxuICAgICAgdGhpcy50ZXh0My5zZXRUZXh0KGB5OiAke3RoaXMuaW5wdXQuYWN0aXZlUG9pbnRlci5wcmV2UG9zaXRpb24ueX1gKTtcclxuICAgICAgaWYgKFxyXG4gICAgICAgIHRoaXMuaW5wdXQuYWN0aXZlUG9pbnRlci5wcmV2UG9zaXRpb24ueSA8IHRoaXMuaW5wdXQuYWN0aXZlUG9pbnRlci55ICYmXHJcbiAgICAgICAgdGhpcy5vcmFuZ2UuZ2V0Qm91bmRzKCkuY29udGFpbnModGhpcy5ibGFkZVJlY3QueCwgdGhpcy5ibGFkZVJlY3QueSlcclxuICAgICAgKSB7XHJcbiAgICAgICAgY29uc3QgeCA9IHRoaXMuYmxhZGVSZWN0LnggLSB0aGlzLnJ0Lng7XHJcbiAgICAgICAgY29uc3QgeSA9IHRoaXMuYmxhZGVSZWN0LnkgLSB0aGlzLnJ0Lnk7XHJcbiAgICAgICAgdGhpcy5ydC5lcmFzZShcclxuICAgICAgICAgIHRoaXMuYmxhZGVSZWN0LnNldEFscGhhKC41KSxcclxuICAgICAgICAgIHgsXHJcbiAgICAgICAgICB5LFxyXG4gICAgICAgICAgLy90aGlzLmJsYWRlUmVjdC54IC0gdGhpcy5ibGFkZVJlY3QuZGlzcGxheVdpZHRoIC8gMixcclxuICAgICAgICAgIC8vdGhpcy5ibGFkZVJlY3QueSAtIHRoaXMuYmxhZGVSZWN0LmRpc3BsYXlIZWlnaHQsXHJcbiAgICAgICAgKTtcclxuICAgICAgICB0aGlzLmJsYWRlUmVjdC5zZXRBbHBoYSgwKVxyXG4gICAgICAgIHRoaXMuZXJhc2VDb3VudCsrO1xyXG4gICAgICAgIGlmICh0aGlzLmVyYXNlQ291bnQgPj0gMTAwICYmICF0aGlzLnRyYW5zaXRpb25pbmcpIHtcclxuICAgICAgICAgIHRoaXMudHJhbnNpdGlvbmluZyA9IHRydWU7XHJcbiAgICAgICAgICBkb2N1bWVudC5jb29raWUgPSBgb3JhbmdlPTFgO1xyXG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2NlbmUuc3RvcCgpO1xyXG4gICAgICAgICAgICB0aGlzLm9uRmluaXNoKHRydWUpO1xyXG4gICAgICAgICAgfSwgNTAwKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMudGV4dDEgPSB0aGlzLmFkZC50ZXh0KDEwLCAxMCwgJycsIHsgY29sb3I6ICcjMDBmZjAwJyB9KS5zZXRBbHBoYSgwKTtcclxuICAgIHRoaXMudGV4dDIgPSB0aGlzLmFkZC50ZXh0KDEwLCAyNSwgJycsIHsgY29sb3I6ICcjMDBmZjAwJyB9KS5zZXRBbHBoYSgwKTtcclxuICAgIHRoaXMudGV4dDMgPSB0aGlzLmFkZC50ZXh0KDEwLCA0MCwgJycsIHsgY29sb3I6ICcjMDBmZjAwJyB9KS5zZXRBbHBoYSgwKTtcclxuICAgIHRoaXMudGV4dDQgPSB0aGlzLmFkZC50ZXh0KDEwLCA1NSwgJycsIHsgY29sb3I6ICcjMDBmZjAwJyB9KS5zZXRBbHBoYSgwKTtcclxuICAgIHRoaXMudGV4dDUgPSB0aGlzLmFkZC50ZXh0KDEwLCA3MCwgJycsIHsgY29sb3I6ICcjMDBmZjAwJyB9KS5zZXRBbHBoYSgwKTtcclxuXHJcbiAgICB0aGlzLmluc3RydWN0aW9uVGV4dCA9IHRoaXMuYWRkLnRleHQod2lkdGgvNCwgMypoZWlnaHQvNCwgJ1BFRUwhJywgeyBjb2xvcjogJyNmZjAwMDAnLCBmb250U2l6ZTogXCI0MHB4XCIgfSk7XHJcblxyXG4gICAgY29uc3QgY2xvc2VCdXR0b24gPSBuZXcgU2NlbmVCdXR0b24odGhpcywgd2lkdGggLSA1MCwgNTAsIFwiWFwiLCAoKSA9PiB7IHRoaXMub25GaW5pc2goZmFsc2UpOyB0aGlzLnNjZW5lLnN0b3AoKTsgfSwgMHhDODAwMDApO1xyXG4gICAgY2xvc2VCdXR0b24uYnV0dG9uQ29sb3IgPSAweEM4MDAwMDtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgSHViQ29ubmVjdGlvblN0YXRlIH0gZnJvbSAnQG1pY3Jvc29mdC9zaWduYWxyJztcclxuaW1wb3J0IHsgZ2V0R2FtZUNlbnRlciB9IGZyb20gJy4uL2hlbHBlcnMnO1xyXG5pbXBvcnQgeyBTY2VuZUJ1dHRvbiB9IGZyb20gJy4uL3VpL3NjZW5lLWJ1dHRvbic7XHJcbmltcG9ydCB7IFdoaXRlUnVzaGluSHViIH0gZnJvbSAnLi4vd2hpdGVSdXNoaW5IdWInO1xyXG5cclxuLyoqXHJcbiAqIFRoZSBpbml0aWFsIHNjZW5lIHRoYXQgc3RhcnRzLCBzaG93cyB0aGUgc3BsYXNoIHNjcmVlbnMsIGFuZCBsb2FkcyB0aGUgbmVjZXNzYXJ5IGFzc2V0cy5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBQZXJtaXNzaW9uc1NjZW5lIGV4dGVuZHMgUGhhc2VyLlNjZW5lIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKHtrZXk6ICdQZXJtaXNzaW9ucyd9KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjcmVhdGUoKTogdm9pZCB7XHJcbiAgICBjb25zdCBjZW50ZXIgPSBnZXRHYW1lQ2VudGVyKHRoaXMpO1xyXG5cclxuICAgIG5ldyBTY2VuZUJ1dHRvbih0aGlzLCBjZW50ZXIueCwgY2VudGVyLnksICdFbnRlcicsICgpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coV2hpdGVSdXNoaW5IdWIuSW5zdGFuY2UuaHViQ29ubmVjdGlvbi5zdGF0ZSlcclxuICAgICAgaWYoV2hpdGVSdXNoaW5IdWIuSW5zdGFuY2UuaHViQ29ubmVjdGlvbi5zdGF0ZSAhPSBIdWJDb25uZWN0aW9uU3RhdGUuQ29ubmVjdGVkKXtcclxuICAgICAgICB0aGlzLmFkZC50ZXh0KGNlbnRlci54LCA1MCwgYE5vdCBjb25uZWN0ZWQgeWV0LFxcbiB0cnkgYWdhaW4gaW4gYSBmZXcgc2Vjb25kc2ApLnNldE9yaWdpbigwLjUpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGlmICh3aW5kb3cuRGV2aWNlT3JpZW50YXRpb25FdmVudCkge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJEZXZpY2UgT3JpZW50YXRpb24gU3VwcG9ydGVkIVwiKTtcclxuICAgICAgICAgIGlmICh3aW5kb3cuRGV2aWNlT3JpZW50YXRpb25FdmVudC5yZXF1ZXN0UGVybWlzc2lvbilcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJSZXF1ZXN0aW5nIHBlcm1pc3Npb24gZm9yIGRldmljZSBvcmllbnRhdGlvbiBldmVudHMuLi5cIik7XHJcbiAgICAgICAgICAgIHdpbmRvdy5EZXZpY2VPcmllbnRhdGlvbkV2ZW50LnJlcXVlc3RQZXJtaXNzaW9uKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAod2luZG93LkRldmljZU1vdGlvbkV2ZW50KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiRGV2aWNlIE1vdGlvbiBTdXBwb3J0ZWQhXCIpO1xyXG4gICAgICAgICAgaWYgKHdpbmRvdy5EZXZpY2VNb3Rpb25FdmVudC5yZXF1ZXN0UGVybWlzc2lvbilcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJSZXF1ZXN0aW5nIHBlcm1pc3Npb24gZm9yIGRldmljZSBtb3Rpb24gZXZlbnRzLi4uXCIpO1xyXG4gICAgICAgICAgICB3aW5kb3cuRGV2aWNlTW90aW9uRXZlbnQucmVxdWVzdFBlcm1pc3Npb24oKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgY2F0Y2goZSl7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJVbmV4cGVjdGVkIGVycm9yIHdoZW4gYXR0ZW1wdGluZyB0byByZXF1ZXN0IGRldmljZSBvcmllbnRhdGlvbiBwZXJtaXNzaW9uLlwiICsgZSlcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnNjZW5lLnN0YXJ0KCdNYWluTWVudScpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IGRyaW5rVG9Db2xvck1hcCwgRmluaXNoRnVuY3Rpb24gfSBmcm9tICcuLi9oZWxwZXJzJztcclxuaW1wb3J0IHsgU2NlbmVCdXR0b24gfSBmcm9tICcuLi91aS9zY2VuZS1idXR0b24nO1xyXG5cclxuY29uc3Qgc2NlbmVDb25maWc6IFBoYXNlci5UeXBlcy5TY2VuZXMuU2V0dGluZ3NDb25maWcgPSB7XHJcbiAgYWN0aXZlOiBmYWxzZSxcclxuICB2aXNpYmxlOiBmYWxzZSxcclxuICBrZXk6ICdQb3VyJyxcclxufTtcclxuY2xhc3MgR2FtZVNjZW5lQXJndW1lbnRzIHtcclxuICBwdWJsaWMgQm90dGxlU3ByaXRlTmFtZTogc3RyaW5nO1xyXG4gIHB1YmxpYyBvbkZpbmlzaDogRmluaXNoRnVuY3Rpb247XHJcbn1cclxuZXhwb3J0IGNsYXNzIFBvdXJTY2VuZSBleHRlbmRzIFBoYXNlci5TY2VuZSB7XHJcbiAgcHVibGljIHNwZWVkID0gMjAwO1xyXG4gIHB1YmxpYyBvbkZpbmlzaDogRmluaXNoRnVuY3Rpb247XHJcblxyXG4gIHByaXZhdGUgYm90dGxlOiBQaGFzZXIuR2FtZU9iamVjdHMuU3ByaXRlO1xyXG4gIC8vcHJpdmF0ZSBib3VyYm9uOiBQaGFzZXIuR2FtZU9iamVjdHMuU3ByaXRlO1xyXG4gIHByaXZhdGUgZW1wdHlHbGFzczogUGhhc2VyLkdhbWVPYmplY3RzLlNwcml0ZTtcclxuXHJcbiAgcHJpdmF0ZSBpc1BvdXJpbmcgPSAwO1xyXG4gIHByaXZhdGUgcG91ckNvdW50ID0gMDtcclxuICBwcml2YXRlIHRyYW5zaXRpb25pbmcgPSBmYWxzZTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcihzY2VuZUNvbmZpZyk7XHJcbiAgfVxyXG4gIHB1YmxpYyBpbnN0cnVjdGlvblRleHQ6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0O1xyXG4gIHB1YmxpYyB0ZXh0MTogUGhhc2VyLkdhbWVPYmplY3RzLlRleHQ7XHJcbiAgcHVibGljIHRleHQyOiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dDtcclxuICBwdWJsaWMgYm90dGxlTmFtZTogc3RyaW5nO1xyXG4gIHByaXZhdGUgbGlxdWlkUmVjdGFuZ2xlOiBQaGFzZXIuR2FtZU9iamVjdHMuUmVjdGFuZ2xlO1xyXG5cclxuICBwdWJsaWMgaW5pdChkYXRhOiBHYW1lU2NlbmVBcmd1bWVudHMpOiB2b2lkIHtcclxuICAgIHRoaXMuYm90dGxlTmFtZSA9IGRhdGEuQm90dGxlU3ByaXRlTmFtZTtcclxuICAgIHRoaXMub25GaW5pc2ggPSBkYXRhLm9uRmluaXNoO1xyXG4gICAgY29uc29sZS5sb2codGhpcy5ib3R0bGVOYW1lKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjcmVhdGUoKTogdm9pZCB7XHJcbiAgICBjb25zb2xlLmxvZygnUG91cicpO1xyXG4gICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSB0aGlzLnN5cy5nYW1lLmNhbnZhcztcclxuICAgIHRoaXMuaXNQb3VyaW5nID0gMDtcclxuICAgIHRoaXMucG91ckNvdW50ID0gMDtcclxuICAgIHRoaXMudHJhbnNpdGlvbmluZyA9IGZhbHNlO1xyXG5cclxuICAgIC8vIEFkZCBhIHBsYXllciBzcHJpdGUgdGhhdCBjYW4gYmUgbW92ZWQgYXJvdW5kLiBQbGFjZSBoaW0gaW4gdGhlIG1pZGRsZSBvZiB0aGUgc2NyZWVuLlxyXG4gICAgdGhpcy5lbXB0eUdsYXNzID0gdGhpcy5hZGQuc3ByaXRlKHdpZHRoIC8gNCwgaGVpZ2h0IC8gMiwgJ2VtcHR5Z2xhc3MnKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhgZ2xhc3MgeDogJHt3aWR0aCAvIDR9YCk7XHJcbiAgICBjb25zb2xlLmxvZyhgZ2xhc3MgeTogJHtoZWlnaHQgLyAyfWApO1xyXG4gICAgdGhpcy5lbXB0eUdsYXNzLnNldFNjYWxlKDAuNSk7XHJcbiAgICB0aGlzLmVtcHR5R2xhc3Muc2NhbGVZID0gdGhpcy5lbXB0eUdsYXNzLnNjYWxlWSAqIDAuNTtcclxuXHJcbiAgICB0aGlzLmJvdHRsZSA9IHRoaXMuYWRkLnNwcml0ZSh3aWR0aCAvIDEuNSwgaGVpZ2h0IC8gMiwgdGhpcy5ib3R0bGVOYW1lKS5zZXRJbnRlcmFjdGl2ZSgpO1xyXG4gICAgdGhpcy5ib3R0bGUuc2V0U2NhbGUoMC43NSk7XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLmVtcHR5R2xhc3MueCk7XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLmJvdHRsZS5kaXNwbGF5SGVpZ2h0KTtcclxuICAgIHRoaXMuYm90dGxlLnNldFBvc2l0aW9uKHRoaXMuZW1wdHlHbGFzcy54ICsgdGhpcy5ib3R0bGUuZGlzcGxheUhlaWdodCAvIDQpO1xyXG4gICAgdGhpcy5ib3R0bGUuc2V0U2NhbGUoMC41KTtcclxuXHJcbiAgICB0aGlzLmJvdHRsZS5vbigncG9pbnRlcm92ZXInLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMuYm90dGxlLnNldFRpbnQoMHhjY2NjY2MpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5ib3R0bGUub24oJ3BvaW50ZXJvdXQnLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMuYm90dGxlLmNsZWFyVGludCgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5pbnB1dC5zZXREcmFnZ2FibGUodGhpcy5ib3R0bGUpO1xyXG5cclxuICAgIHRoaXMuaW5wdXQub24oJ2RyYWdzdGFydCcsIChfLCBnYW1lT2JqZWN0KSA9PiB7XHJcbiAgICAgIGdhbWVPYmplY3Quc2V0VGludCgweDk5OTk5OSk7XHJcbiAgICB9KTtcclxuICAgIHRoaXMubGlxdWlkUmVjdGFuZ2xlID0gdGhpcy5hZGRcclxuICAgICAgLnJlY3RhbmdsZShcclxuICAgICAgICB0aGlzLmVtcHR5R2xhc3MueCxcclxuICAgICAgICB0aGlzLmVtcHR5R2xhc3MueSArIHRoaXMuZW1wdHlHbGFzcy5kaXNwbGF5SGVpZ2h0IC8gMixcclxuICAgICAgICB0aGlzLmVtcHR5R2xhc3MuZGlzcGxheVdpZHRoLFxyXG4gICAgICAgICsrdGhpcy5wb3VyQ291bnQsXHJcbiAgICAgICAgZHJpbmtUb0NvbG9yTWFwLmdldCh0aGlzLmJvdHRsZU5hbWUpLFxyXG4gICAgICApXHJcbiAgICAgIC5zZXRCbGVuZE1vZGUoUGhhc2VyLkJsZW5kTW9kZXMuTVVMVElQTFkpO1xyXG5cclxuICAgIHRoaXMuaW5wdXQub24oJ2RyYWcnLCAoXywgZ2FtZU9iamVjdCkgPT4ge1xyXG4gICAgICAvLyBmcm9tIGhlcmU6IG5lZWQgdG8gMS4gY2FsY3VsYXRlIGFuZ2xlIGJldHdlZW4gYmFzZSBvZiBvYmplY3QgYW5kIGN1cnNvclxyXG4gICAgICAvLyAyLiByb3RhdGUgdW50aWwgdG9wIG9mIGJvdHRsZSBpcyBwb2ludGluZyB0byBjdXJzb3JcclxuICAgICAgY29uc3QgeTEgPSBnYW1lT2JqZWN0Lnk7XHJcbiAgICAgIGNvbnN0IHkyID0gdGhpcy5pbnB1dC5hY3RpdmVQb2ludGVyLnk7XHJcbiAgICAgIGNvbnN0IHgxID0gZ2FtZU9iamVjdC54O1xyXG4gICAgICBjb25zdCB4MiA9IHRoaXMuaW5wdXQuYWN0aXZlUG9pbnRlci54O1xyXG5cclxuICAgICAgY29uc3Qgc2xvcGVSYWRzID0gTWF0aC5hdGFuMih5MiAtIHkxLCB4MiAtIHgxKTtcclxuICAgICAgY29uc3QgYWRqdXN0ZWQgPSBzbG9wZVJhZHMgKyAxLjU3MDc5NjMzO1xyXG5cclxuICAgICAgdGhpcy50ZXh0MS5zZXRUZXh0KGAke3RoaXMucG91ckNvdW50fWApO1xyXG4gICAgICBpZiAoYWRqdXN0ZWQgPj0gTWF0aC5QSSB8fCBhZGp1c3RlZCA8PSAwLjAyNSkge1xyXG4gICAgICAgIGdhbWVPYmplY3Qucm90YXRpb24gPSBzbG9wZVJhZHMgKyAxLjU3MDc5NjMzO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmlucHV0Lm9uKCdkcmFnZW5kJywgKHBvaW50ZXIsIGdhbWVPYmplY3QpID0+IHtcclxuICAgICAgZ2FtZU9iamVjdC5jbGVhclRpbnQoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuaW5zdHJ1Y3Rpb25UZXh0ID0gdGhpcy5hZGQudGV4dCh3aWR0aC80LCAzKmhlaWdodC80LCAnUE9VUiEnLCB7IGNvbG9yOiAnI2ZmMDAwMCcsIGZvbnRTaXplOiBcIjQwcHhcIiB9KTtcclxuICAgIHRoaXMudGV4dDEgPSB0aGlzLmFkZC50ZXh0KDEwLCAxMCwgJycsIHsgY29sb3I6ICcjMDBmZjAwJyB9KS5zZXRBbHBoYSgwKTtcclxuICAgIHRoaXMudGV4dDIgPSB0aGlzLmFkZC50ZXh0KDEwMCwgMTAsICcnLCB7IGNvbG9yOiAnIzAwZmYwMCcgfSkuc2V0QWxwaGEoMCk7XHJcblxyXG4gICAgdGhpcy5ib3R0bGUuc2V0RGVwdGgoMSk7XHJcbiAgICB0aGlzLmNhbGxiYWNrKCk7XHJcblxyXG4gICAgY29uc3QgY2xvc2VCdXR0b24gPSBuZXcgU2NlbmVCdXR0b24odGhpcywgd2lkdGggLSA1MCwgNTAsIFwiWFwiLCAoKSA9PiB7IHRoaXMub25GaW5pc2goZmFsc2UpOyB0aGlzLnNjZW5lLnN0b3AoKTsgfSwgMHhDODAwMDApO1xyXG4gICAgY2xvc2VCdXR0b24uYnV0dG9uQ29sb3IgPSAweEM4MDAwMDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyB1cGRhdGUoKTogdm9pZCB7XHJcbiAgICAvLyBFdmVyeSBmcmFtZSwgd2UgY3JlYXRlIGEgbmV3IHZlbG9jaXR5IGZvciB0aGUgc3ByaXRlIGJhc2VkIG9uIHdoYXQga2V5cyB0aGUgcGxheWVyIGlzIGhvbGRpbmcgZG93bi5cclxuICAgIHRoaXMudGV4dDEuc2V0VGV4dChgJHt0aGlzLmJvdHRsZS5yb3RhdGlvbn1gKTtcclxuICAgIGlmICh0aGlzLmJvdHRsZS5yb3RhdGlvbiA8IC0xLjcgJiYgdGhpcy5ib3R0bGUucm90YXRpb24gPiAtMi4zKSB7XHJcbiAgICAgIGlmICh0aGlzLmlzUG91cmluZyA9PSAwKSB7XHJcbiAgICAgICAgdGhpcy5pc1BvdXJpbmcgPSAxO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmlzUG91cmluZyA9IDA7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5pc1BvdXJpbmcgPT0gMSAmJiB0aGlzLmxpcXVpZFJlY3RhbmdsZS5kaXNwbGF5SGVpZ2h0IDwgdGhpcy5lbXB0eUdsYXNzLmRpc3BsYXlIZWlnaHQgKiAxLjkpIHtcclxuICAgICAgdGhpcy5saXF1aWRSZWN0YW5nbGUuZGlzcGxheUhlaWdodCA9IHRoaXMubGlxdWlkUmVjdGFuZ2xlLmRpc3BsYXlIZWlnaHQgKyAxLjU7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMubGlxdWlkUmVjdGFuZ2xlLmRpc3BsYXlIZWlnaHQgPiB0aGlzLmVtcHR5R2xhc3MuZGlzcGxheUhlaWdodCAqIDEuOSAmJiAhdGhpcy50cmFuc2l0aW9uaW5nKSB7XHJcbiAgICAgIHRoaXMudHJhbnNpdGlvbmluZyA9IHRydWU7XHJcbiAgICAgIGRvY3VtZW50LmNvb2tpZSA9IGAke3RoaXMuYm90dGxlTmFtZX09MWA7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2NlbmUuc3RvcCgpO1xyXG4gICAgICAgIHRoaXMub25GaW5pc2godHJ1ZSk7XHJcbiAgICAgIH0sIDUwMCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY2FsbGJhY2soKTogdm9pZCB7XHJcbiAgICB0aGlzLmNhbGxBcHBsZSgpO1xyXG4gIH1cclxuICBwdWJsaWMgY2FsbEFwcGxlKCk6IHZvaWQge1xyXG4gICAgdHJ5IHtcclxuICAgICAgXHJcbiAgICAgIERldmljZU1vdGlvbkV2ZW50LnJlcXVlc3RQZXJtaXNzaW9uKCkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICB0aGlzLnRleHQxLnNldFRleHQocmVzcG9uc2UpO1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdkZXZpY2Vtb3Rpb24nLCAoZXZlbnQpPT57XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICBjb25zdCBhY2NlbEdyYXYgPSBldmVudC5hY2NlbGVyYXRpb25JbmNsdWRpbmdHcmF2aXR5O1xyXG4gICAgICAgICAgY29uc3Qgcm90YXRpb25SYXRlID0gZXZlbnQucm90YXRpb25SYXRlO1xyXG5cclxuICAgICAgICAgIGNvbnN0IGdyYXZYID0gKGFjY2VsR3Jhdi54ID4+IDApO1xyXG5cclxuICAgICAgICAgIGlmIChncmF2WCAlIDIgPT09IDApIHtcclxuICAgICAgICAgICAgdGhpcy5ib3R0bGUuYW5nbGUgPSAoMCAtIChncmF2WCAqIDEwKSk7XHJcbiAgICAgICAgICAgICAgLy92YXIgdHJhbnNmb3JtcyA9ICdyb3RhdGVaKCcgKyAoMCAtIChncmF2WCAqIDEwKSkgKyAnZGVnKSc7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2RldmljZW9yaWVudGF0aW9uJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhldmVudCk7XHJcbiAgICAgICAgICAvLyBFeHBvc2UgZWFjaCBvcmllbnRhdGlvbiBhbmdsZSBpbiBhIG1vcmUgcmVhZGFibGUgd2F5XHJcbiAgICAgICAgICBjb25zdCByb3RhdGlvbl9kZWdyZWVzID0gZXZlbnQuYWxwaGE7XHJcbiAgICAgICAgICBjb25zdCBmcm9udFRvQmFja19kZWdyZWVzID0gZXZlbnQuYmV0YTtcclxuICAgICAgICAgIGNvbnN0IGxlZnRUb1JpZ2h0X2RlZ3JlZXMgPSBldmVudC5nYW1tYTtcclxuXHJcbiAgICAgICAgICB0aGlzLmJvdHRsZS5hbmdsZSA9IGxlZnRUb1JpZ2h0X2RlZ3JlZXMgLSA5MDtcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChleCkge1xyXG4gICAgICBjb25zb2xlLmxvZygnbm90IGlvcycpO1xyXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignZGV2aWNlb3JpZW50YXRpb24nLCAoZXZlbnQpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhldmVudCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gRXhwb3NlIGVhY2ggb3JpZW50YXRpb24gYW5nbGUgaW4gYSBtb3JlIHJlYWRhYmxlIHdheVxyXG4gICAgICAgIGNvbnN0IHJvdGF0aW9uX2RlZ3JlZXMgPSBldmVudC5hbHBoYTtcclxuICAgICAgICBjb25zdCBmcm9udFRvQmFja19kZWdyZWVzID0gZXZlbnQuYmV0YTtcclxuICAgICAgICBjb25zdCBsZWZ0VG9SaWdodF9kZWdyZWVzID0gZXZlbnQuZ2FtbWE7XHJcblxyXG4gICAgICAgIHRoaXMuYm90dGxlLmFuZ2xlID0gbGVmdFRvUmlnaHRfZGVncmVlcyAtIDkwO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgU2NlbmVCdXR0b24gfSBmcm9tICcuLi91aS9zY2VuZS1idXR0b24nO1xyXG5cclxuY29uc3Qgc2NlbmVDb25maWc6IFBoYXNlci5UeXBlcy5TY2VuZXMuU2V0dGluZ3NDb25maWcgPSB7XHJcbiAgYWN0aXZlOiBmYWxzZSxcclxuICB2aXNpYmxlOiBmYWxzZSxcclxuICBrZXk6ICdSZXN1bHRzJyxcclxufTtcclxuY2xhc3MgR2FtZVNjZW5lQXJndW1lbnRzIHtcclxuICBwdWJsaWMgcmVzdWx0czogQXJyYXk8bnVtYmVyPjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFJlc3VsdHNTY2VuZSBleHRlbmRzIFBoYXNlci5TY2VuZSB7XHJcbiAgcHVibGljIHNwZWVkID0gMjAwO1xyXG4gIHB1YmxpYyByZXN1bHRzOiBBcnJheTxudW1iZXI+O1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKHNjZW5lQ29uZmlnKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyB0ZXh0MTogUGhhc2VyLkdhbWVPYmplY3RzLlRleHQ7XHJcbiAgcHVibGljIHRleHQyOiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dDtcclxuICBwdWJsaWMgdGV4dDM6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0O1xyXG4gIHB1YmxpYyB0ZXh0NDogUGhhc2VyLkdhbWVPYmplY3RzLlRleHQ7XHJcbiAgcHVibGljIHRleHQ1OiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dDtcclxuICBwdWJsaWMgY2xpY2tzID0gMDtcclxuICBwdWJsaWMgaWNlTGV2ZWwgPSAwO1xyXG5cclxuICBwdWJsaWMgaW5pdChkYXRhOiBHYW1lU2NlbmVBcmd1bWVudHMpOiB2b2lkIHtcclxuICAgIHRoaXMucmVzdWx0cyA9IGRhdGEucmVzdWx0cztcclxuICB9XHJcblxyXG5cclxuICBwdWJsaWMgY3JlYXRlKCk6IHZvaWQge1xyXG4gICAgY29uc29sZS5sb2coJ1Jlc3VsdHMnKTtcclxuXHJcbiAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IHRoaXMuc3lzLmdhbWUuY2FudmFzO1xyXG4gICAgdGhpcy5hZGQudGV4dCh3aWR0aCAvIDgsIChoZWlnaHQgLyA0KSAtIDMwLCBcIkN1c3RvbWVyIEZlZWRiYWNrOlwiLCB7IGNvbG9yOiAnI2ZmZmZmZicgfSk7XHJcblxyXG4gICAgLy8gXCJmZWF0dXJlIGZsYWdcIlxyXG4gICAgaWYodHJ1ZSl7XHJcbiAgICAgIC8vIHRoaXMgc2VjdGlvbiB0cmllcyB0byBmb21hbGx5IGNvbWJpbmUgdGhlbVxyXG4gICAgICBjb25zdCByZXN1bHRzT2JqOiBBcnJheTxudW1iZXI+ID0gWzAsMCwwLDBdO1xyXG4gICAgICB0aGlzLnJlc3VsdHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG4gICAgICAgICAgcmVzdWx0c09ialtlbGVtZW50XSsrO1xyXG4gICAgICAgIC8vdGhpcy5hZGQudGV4dCh3aWR0aCAvIDgsIChoZWlnaHQgLyA0KSArIChpZHggKiBoZWlnaHQgLyA4KSwgdGhpcy5nZXRSZXN1bHRTdHJpbmcoZWxlbWVudCksIHsgY29sb3I6ICcjZmZmZmZmJyB9KTtcclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKHJlc3VsdHNPYmopXHJcbiAgICAgIGxldCBjb3VudGVyID0gMDtcclxuICAgICAgcmVzdWx0c09iai5mb3JFYWNoKChlbGVtZW50LCBpZHgpID0+IHtcclxuICAgICAgICBpZihlbGVtZW50ICE9IDApe1xyXG4gICAgICAgICAgdGhpcy5hZGQudGV4dCh3aWR0aCAvIDgsIChoZWlnaHQgLyA0KSArIChjb3VudGVyICogaGVpZ2h0IC8gOCksIGAke3RoaXMuZ2V0UGhvbmV0aWNTdHJpbmcoZWxlbWVudCl9IGN1c3RvbWVyJHtlbGVtZW50ID4gMT8gJ3MnOicnfSBzYWlkOiBcXG5cXHQke3RoaXMuZ2V0UmVzdWx0U3RyaW5nKGlkeCl9YCwgeyBjb2xvcjogJyNmZmZmZmYnIH0pO1xyXG4gICAgICAgICAgY291bnRlcisrO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgICAvL1RoaXMgc2VjdGlvbiBqdXN0IGRpc3BsYXlzIHRoZSByZXN1bHRzIGluIG9yZGVyXHJcbiAgICAgIHRoaXMucmVzdWx0cy5mb3JFYWNoKChlbGVtZW50LCBpZHgpID0+IHtcclxuICAgICAgICB0aGlzLmFkZC50ZXh0KHdpZHRoIC8gOCwgKGhlaWdodCAvIDQpICsgKGlkeCAqIGhlaWdodCAvIDgpLCB0aGlzLmdldFJlc3VsdFN0cmluZyhlbGVtZW50KSwgeyBjb2xvcjogJyNmZmZmZmYnIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIG5ldyBTY2VuZUJ1dHRvbih0aGlzLCB3aWR0aCAvIDIsIChoZWlnaHQgLyA0KSAqIDMsIFwiUmVzZXRcIiwgKCkgPT4geyB0aGlzLnNjZW5lLnN0b3AoKTsgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldFJlc3VsdFN0cmluZyhpdGVtOiBudW1iZXIpIHtcclxuICAgIGlmIChpdGVtID09IDApIHtcclxuICAgICAgcmV0dXJuIFwiSnVzdCBsaWtlIEkgb3JkZXJlZCEgVGhhbmtzIVwiXHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChpdGVtID09IDEpIHsgcmV0dXJuIFwiRXhjdXNlIG1lLCBJIHRoaW5rIEkgXFxuXFx0Z290IHNvbWVvbmUgZWxzZSdzIGRyaW5rXCIgfVxyXG4gICAgZWxzZSBpZiAoaXRlbSA9PSAyKSB7IHJldHVybiBcIkxvb2tzIGdvb2QgYnV0IEkgZG9uJ3RcXG5cXHR0aGluayBJIGhlYXJkIGFueW9uZSBvcmRlciB0aGlzXCIgfVxyXG4gICAgZWxzZSBpZiAoaXRlbSA9PSAzKSB7IHJldHVybiBcIipzcGl0cyBvdXQgZHJpbmsqIERvIHlvdVxcblxcdCBldmVuIGtub3cgaG93IHRvIG1ha2UgZHJpbmtzP1wiIH1cclxuICB9XHJcbiAgcHJpdmF0ZSBnZXRQaG9uZXRpY1N0cmluZyhpdGVtOiBudW1iZXIpOiBzdHJpbmcge1xyXG4gICAgaWYgKGl0ZW0gPT0gMCkge1xyXG4gICAgICByZXR1cm4gXCJaZXJvXCJcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGl0ZW0gPT0gMSkgeyByZXR1cm4gXCJPbmVcIiB9XHJcbiAgICBlbHNlIGlmIChpdGVtID09IDIpIHsgcmV0dXJuIFwiVHdvXCIgfVxyXG4gICAgZWxzZSBpZiAoaXRlbSA9PSAzKSB7IHJldHVybiBcIlRocmVlXCIgfVxyXG4gICAgZWxzZSBpZiAoaXRlbSA9PSA0KSB7IHJldHVybiBcIkZvdXJcIiB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IEZpbmlzaEZ1bmN0aW9uIH0gZnJvbSAnLi4vaGVscGVycyc7XHJcbmltcG9ydCB7IFNjZW5lQnV0dG9uIH0gZnJvbSAnLi4vdWkvc2NlbmUtYnV0dG9uJztcclxuXHJcbmNvbnN0IHNjZW5lQ29uZmlnOiBQaGFzZXIuVHlwZXMuU2NlbmVzLlNldHRpbmdzQ29uZmlnID0ge1xyXG4gIGFjdGl2ZTogZmFsc2UsXHJcbiAgdmlzaWJsZTogZmFsc2UsXHJcbiAga2V5OiAnU2hha2UgRHJpbmsnLFxyXG59O1xyXG5cclxuY2xhc3MgR2FtZVNjZW5lQXJndW1lbnRzIHtcclxuICBwdWJsaWMgb25GaW5pc2g6IEZpbmlzaEZ1bmN0aW9uO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU2hha2VTY2VuZSBleHRlbmRzIFBoYXNlci5TY2VuZSB7XHJcbiAgcHVibGljIHNwZWVkID0gMjAwO1xyXG5cclxuICBwcml2YXRlIGJvdHRsZTogUGhhc2VyLkdhbWVPYmplY3RzLlNwcml0ZTtcclxuXHJcbiAgcHJpdmF0ZSBzaGFrZUNvdW50ID0gMDtcclxuICBwcml2YXRlIHRyYW5zaXRpb25pbmcgPSBmYWxzZTtcclxuICBwcml2YXRlIG4gPSAwO1xyXG4gIHByaXZhdGUgbnRocmVzaG9sZCA9IDA7XHJcbiAgcHJpdmF0ZSBtYXh4ID0gMDtcclxuICBwcml2YXRlIG1heHkgPSAwO1xyXG4gIHByaXZhdGUgbWF4eiA9IDA7XHJcbiAgcHJpdmF0ZSBtaW54ID0gMDtcclxuICBwcml2YXRlIG1pbnkgPSAwO1xyXG4gIHByaXZhdGUgbWlueiA9IDA7XHJcbiAgcHJpdmF0ZSB0aHJlc2hvbGQgPSAxNTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcihzY2VuZUNvbmZpZyk7XHJcbiAgfVxyXG4gIHB1YmxpYyBpbnN0cnVjdGlvblRleHQ6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0O1xyXG4gIHB1YmxpYyB0ZXh0MTogUGhhc2VyLkdhbWVPYmplY3RzLlRleHQ7XHJcbiAgcHVibGljIHRleHQyOiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dDtcclxuICBwdWJsaWMgdGV4dDM6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0O1xyXG4gIHB1YmxpYyB0ZXh0NDogUGhhc2VyLkdhbWVPYmplY3RzLlRleHQ7XHJcbiAgcHVibGljIHRleHQ1OiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dDtcclxuICBwdWJsaWMgYm90dGxlTmFtZTogc3RyaW5nO1xyXG4gIHB1YmxpYyBvbkZpbmlzaDogRmluaXNoRnVuY3Rpb247XHJcblxyXG4gIHB1YmxpYyBpbml0KGRhdGE6IEdhbWVTY2VuZUFyZ3VtZW50cyk6IHZvaWQge1xyXG4gICAgdGhpcy5ib3R0bGVOYW1lID0gJ3NoYWtlcic7XHJcbiAgICB0aGlzLm9uRmluaXNoID0gZGF0YS5vbkZpbmlzaDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjcmVhdGUoKTogdm9pZCB7XHJcbiAgICBjb25zb2xlLmxvZygnU2hha2UnKTtcclxuICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCB9ID0gdGhpcy5zeXMuZ2FtZS5jYW52YXM7XHJcbiAgICB0aGlzLnNoYWtlQ291bnQgPSAwO1xyXG4gICAgdGhpcy50cmFuc2l0aW9uaW5nID0gZmFsc2U7XHJcbiAgICB0aGlzLm4gPSAwO1xyXG4gICAgdGhpcy5udGhyZXNob2xkID0gMTM7XHJcbiAgICB0aGlzLmNhbGxiYWNrKCk7XHJcblxyXG4gICAgdGhpcy5ib3R0bGUgPSB0aGlzLmFkZC5zcHJpdGUod2lkdGggLyAyLCBoZWlnaHQgLyAyLCB0aGlzLmJvdHRsZU5hbWUpLnNldEludGVyYWN0aXZlKCkuc2V0U2NhbGUoMS40KTtcclxuXHJcbiAgICB0aGlzLmJvdHRsZS5vbigncG9pbnRlcm92ZXInLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMuYm90dGxlLnNldFRpbnQoMHhjY2NjY2MpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5ib3R0bGUub24oJ3BvaW50ZXJvdXQnLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMuYm90dGxlLmNsZWFyVGludCgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5ib3R0bGUub24oJ3BvaW50ZXJkb3duJywgKCkgPT4ge1xyXG4gICAgICB0aGlzLnNoYWtlQ291bnQrKztcclxuICAgICAgaWYgKHRoaXMuc2hha2VDb3VudCA+IDcpIHtcclxuICAgICAgICB0aGlzLnNoYWtlQ291bnQgPSA3O1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHRoaXMuaW5wdXQuc2V0RHJhZ2dhYmxlKHRoaXMuYm90dGxlKTtcclxuXHJcbiAgICB0aGlzLmlucHV0Lm9uKCdkcmFnc3RhcnQnLCAocG9pbnRlciwgZ2FtZU9iamVjdCkgPT4ge1xyXG4gICAgICBnYW1lT2JqZWN0LnNldFRpbnQoMHg5OTk5OTkpO1xyXG4gICAgfSk7XHJcblxyXG5cclxuICAgIHRoaXMudGV4dDEgPSB0aGlzLmFkZC50ZXh0KDUwLCAxMCwgJycsIHsgY29sb3I6ICcjMDBmZjAwJyB9KS5zZXRBbHBoYSgwKTtcclxuICAgIHRoaXMudGV4dDIgPSB0aGlzLmFkZC50ZXh0KDUwLCAzMCwgJycsIHsgY29sb3I6ICcjMDBmZjAwJyB9KS5zZXRBbHBoYSgwKTtcclxuICAgIHRoaXMudGV4dDMgPSB0aGlzLmFkZC50ZXh0KDUwLCA2MCwgJycsIHsgY29sb3I6ICcjMDBmZjAwJyB9KS5zZXRBbHBoYSgwKTtcclxuICAgIHRoaXMudGV4dDQgPSB0aGlzLmFkZC50ZXh0KDUwLCA5MCwgJycsIHsgY29sb3I6ICcjMDBmZjAwJyB9KS5zZXRBbHBoYSgwKTtcclxuICAgIHRoaXMudGV4dDUgPSB0aGlzLmFkZC50ZXh0KDUwLCAxMjAsICcnLCB7IGNvbG9yOiAnIzAwZmYwMCcgfSkuc2V0QWxwaGEoMCk7XHJcblxyXG4gICAgdGhpcy5pbnN0cnVjdGlvblRleHQgPSB0aGlzLmFkZC50ZXh0KHdpZHRoLzQsIDMqaGVpZ2h0LzQsICdTSEFLRSEnLCB7IGNvbG9yOiAnI2ZmMDAwMCcsIGZvbnRTaXplOiBcIjQwcHhcIiB9KTtcclxuXHJcbiAgICB0aGlzLmJvdHRsZS5zZXREZXB0aCgxKTtcclxuXHJcbiAgICBjb25zdCBjbG9zZUJ1dHRvbiA9IG5ldyBTY2VuZUJ1dHRvbih0aGlzLCB3aWR0aCAtIDUwLCA1MCwgXCJYXCIsICgpID0+IHsgdGhpcy5vbkZpbmlzaChmYWxzZSk7IHRoaXMuc2NlbmUuc3RvcCgpOyB9LCAweEM4MDAwMCk7XHJcbiAgICBjbG9zZUJ1dHRvbi5idXR0b25Db2xvciA9IDB4QzgwMDAwO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHVwZGF0ZSgpOiB2b2lkIHtcclxuICAgIC8vIEV2ZXJ5IGZyYW1lLCB3ZSBjcmVhdGUgYSBuZXcgdmVsb2NpdHkgZm9yIHRoZSBzcHJpdGUgYmFzZWQgb24gd2hhdCBrZXlzIHRoZSBwbGF5ZXIgaXMgaG9sZGluZyBkb3duLlxyXG4gICAgaWYgKHRoaXMubiA+IHRoaXMubnRocmVzaG9sZCAmJiB0aGlzLnNoYWtlQ291bnQgPD0gNykge1xyXG4gICAgICB0aGlzLm4gPSAwO1xyXG4gICAgICB0aGlzLnNoYWtlQ291bnQrKztcclxuICAgICAgdGhpcy50ZXh0NC5zZXRUZXh0KGBuICR7dGhpcy5ufSAke3RoaXMubnRocmVzaG9sZH1gKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnNoYWtlQ291bnQgJSAyID09IDApIHtcclxuICAgICAgdGhpcy5ib3R0bGUuc2V0VGV4dHVyZShgc2hha2VyJHt0aGlzLnNoYWtlQ291bnQgLyAyfWApO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuc2hha2VDb3VudCA+IDUgJiYgIXRoaXMudHJhbnNpdGlvbmluZykge1xyXG4gICAgICB0aGlzLnRyYW5zaXRpb25pbmcgPSB0cnVlO1xyXG4gICAgICBkb2N1bWVudC5jb29raWUgPSBgc2hha2U9MWA7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2NlbmUuc3RvcCgpO1xyXG4gICAgICAgIHRoaXMub25GaW5pc2godHJ1ZSk7XHJcbiAgICAgIH0sIDc1MCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY2FsbEFwcGxlKCk6IHZvaWQge1xyXG4gICAgdHJ5IHtcclxuICAgICAgRGV2aWNlTW90aW9uRXZlbnQucmVxdWVzdFBlcm1pc3Npb24oKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIHRoaXMudGV4dDEuc2V0VGV4dChyZXNwb25zZSk7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2RldmljZW1vdGlvbicsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXZlbnQpO1xyXG4gICAgICAgICAgaWYgKGV2ZW50LmFjY2VsZXJhdGlvbi54IDwgdGhpcy50aHJlc2hvbGQgKiAtMSB8fCBldmVudC5hY2NlbGVyYXRpb24ueCA+IHRoaXMudGhyZXNob2xkKSB7XHJcbiAgICAgICAgICAgIHRoaXMubisrO1xyXG4gICAgICAgICAgfSBlbHNlIGlmIChldmVudC5hY2NlbGVyYXRpb24ueSA8IHRoaXMudGhyZXNob2xkICogLTEgfHwgZXZlbnQuYWNjZWxlcmF0aW9uLnkgPiB0aGlzLnRocmVzaG9sZCkge1xyXG4gICAgICAgICAgICB0aGlzLm4rKztcclxuICAgICAgICAgIH0gZWxzZSBpZiAoZXZlbnQuYWNjZWxlcmF0aW9uLnogPCB0aGlzLnRocmVzaG9sZCAqIC0xIHx8IGV2ZW50LmFjY2VsZXJhdGlvbi56ID4gdGhpcy50aHJlc2hvbGQpIHtcclxuICAgICAgICAgICAgdGhpcy5uKys7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLy8gdGV4dFxyXG4gICAgICAgICAgaWYgKGV2ZW50LmFjY2VsZXJhdGlvbi54IDwgdGhpcy5taW54KSB7XHJcbiAgICAgICAgICAgIHRoaXMubWlueCA9IGV2ZW50LmFjY2VsZXJhdGlvbi54O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKGV2ZW50LmFjY2VsZXJhdGlvbi55IDwgdGhpcy5taW55KSB7XHJcbiAgICAgICAgICAgIHRoaXMubWlueSA9IGV2ZW50LmFjY2VsZXJhdGlvbi55O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKGV2ZW50LmFjY2VsZXJhdGlvbi56IDwgdGhpcy5taW56KSB7XHJcbiAgICAgICAgICAgIHRoaXMubWlueiA9IGV2ZW50LmFjY2VsZXJhdGlvbi56O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKGV2ZW50LmFjY2VsZXJhdGlvbi54ID4gdGhpcy5tYXh4KSB7XHJcbiAgICAgICAgICAgIHRoaXMubWF4eCA9IGV2ZW50LmFjY2VsZXJhdGlvbi54O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKGV2ZW50LmFjY2VsZXJhdGlvbi55ID4gdGhpcy5tYXh5KSB7XHJcbiAgICAgICAgICAgIHRoaXMubWF4eSA9IGV2ZW50LmFjY2VsZXJhdGlvbi55O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKGV2ZW50LmFjY2VsZXJhdGlvbi56ID4gdGhpcy5tYXh6KSB7XHJcbiAgICAgICAgICAgIHRoaXMubWF4eiA9IGV2ZW50LmFjY2VsZXJhdGlvbi56O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdGhpcy50ZXh0MS5zZXRUZXh0KGB4ICR7dGhpcy5taW54fSAke3RoaXMubWF4eH1gKTtcclxuICAgICAgICAgIHRoaXMudGV4dDIuc2V0VGV4dChgeSAke3RoaXMubWlueX0gJHt0aGlzLm1heHl9YCk7XHJcbiAgICAgICAgICB0aGlzLnRleHQzLnNldFRleHQoYHogJHt0aGlzLm1pbnp9ICR7dGhpcy5tYXh6fWApO1xyXG4gICAgICAgICAgdGhpcy50ZXh0NC5zZXRUZXh0KGBuICR7dGhpcy5ufSAke3RoaXMubnRocmVzaG9sZH1gKTtcclxuICAgICAgICAgIHRoaXMudGV4dDUuc2V0VGV4dChgc2hha2VzICR7dGhpcy5zaGFrZUNvdW50fWApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGV4KSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdub3QgaW9zJyk7XHJcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdkZXZpY2Vtb3Rpb24nLCAoZXZlbnQpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhldmVudCk7XHJcbiAgICAgICAgaWYgKGV2ZW50LmFjY2VsZXJhdGlvbi54IDwgdGhpcy50aHJlc2hvbGQgKiAtMSB8fCBldmVudC5hY2NlbGVyYXRpb24ueCA+IHRoaXMudGhyZXNob2xkKSB7XHJcbiAgICAgICAgICB0aGlzLm4rKztcclxuICAgICAgICB9IGVsc2UgaWYgKGV2ZW50LmFjY2VsZXJhdGlvbi55IDwgdGhpcy50aHJlc2hvbGQgKiAtMSB8fCBldmVudC5hY2NlbGVyYXRpb24ueSA+IHRoaXMudGhyZXNob2xkKSB7XHJcbiAgICAgICAgICB0aGlzLm4rKztcclxuICAgICAgICB9IGVsc2UgaWYgKGV2ZW50LmFjY2VsZXJhdGlvbi56IDwgdGhpcy50aHJlc2hvbGQgKiAtMSB8fCBldmVudC5hY2NlbGVyYXRpb24ueiA+IHRoaXMudGhyZXNob2xkKSB7XHJcbiAgICAgICAgICB0aGlzLm4rKztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHRleHRcclxuICAgICAgICBpZiAoZXZlbnQuYWNjZWxlcmF0aW9uLnggPCB0aGlzLm1pbngpIHtcclxuICAgICAgICAgIHRoaXMubWlueCA9IGV2ZW50LmFjY2VsZXJhdGlvbi54O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZXZlbnQuYWNjZWxlcmF0aW9uLnkgPCB0aGlzLm1pbnkpIHtcclxuICAgICAgICAgIHRoaXMubWlueSA9IGV2ZW50LmFjY2VsZXJhdGlvbi55O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZXZlbnQuYWNjZWxlcmF0aW9uLnogPCB0aGlzLm1pbnopIHtcclxuICAgICAgICAgIHRoaXMubWlueiA9IGV2ZW50LmFjY2VsZXJhdGlvbi56O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZXZlbnQuYWNjZWxlcmF0aW9uLnggPiB0aGlzLm1heHgpIHtcclxuICAgICAgICAgIHRoaXMubWF4eCA9IGV2ZW50LmFjY2VsZXJhdGlvbi54O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZXZlbnQuYWNjZWxlcmF0aW9uLnkgPiB0aGlzLm1heHkpIHtcclxuICAgICAgICAgIHRoaXMubWF4eSA9IGV2ZW50LmFjY2VsZXJhdGlvbi55O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZXZlbnQuYWNjZWxlcmF0aW9uLnogPiB0aGlzLm1heHopIHtcclxuICAgICAgICAgIHRoaXMubWF4eiA9IGV2ZW50LmFjY2VsZXJhdGlvbi56O1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnRleHQxLnNldFRleHQoYHggJHt0aGlzLm1pbnh9ICR7dGhpcy5tYXh4fWApO1xyXG4gICAgICAgIHRoaXMudGV4dDIuc2V0VGV4dChgeSAke3RoaXMubWlueX0gJHt0aGlzLm1heHl9YCk7XHJcbiAgICAgICAgdGhpcy50ZXh0My5zZXRUZXh0KGB6ICR7dGhpcy5taW56fSAke3RoaXMubWF4en1gKTtcclxuICAgICAgICB0aGlzLnRleHQ0LnNldFRleHQoYG4gJHt0aGlzLm59ICR7dGhpcy5udGhyZXNob2xkfWApO1xyXG4gICAgICAgIHRoaXMudGV4dDUuc2V0VGV4dChgc2hha2VzICR7dGhpcy5zaGFrZUNvdW50fWApO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcbiAgcHVibGljIGNhbGxiYWNrKCk6IHZvaWQge1xyXG4gICAgdGhpcy5tYXh4ID0gMDtcclxuICAgIHRoaXMubWF4eSA9IDA7XHJcbiAgICB0aGlzLm1heHogPSAwO1xyXG4gICAgdGhpcy5taW54ID0gMDtcclxuICAgIHRoaXMubWlueSA9IDA7XHJcbiAgICB0aGlzLm1pbnogPSAwO1xyXG4gICAgdGhpcy5jYWxsQXBwbGUoKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgZ2V0R2FtZUNlbnRlciB9IGZyb20gXCIuLi9oZWxwZXJzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgU3VjY2Vzc1NjZW5lIGV4dGVuZHMgUGhhc2VyLlNjZW5lIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKHtrZXk6ICdTdWNjZXNzJ30pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNyZWF0ZSgpOiB2b2lkIHtcclxuICAgIGNvbnNvbGUubG9nKCdTdWNjZXNzJyk7XHJcblxyXG4gICAgY29uc3QgYyA9IGdldEdhbWVDZW50ZXIodGhpcylcclxuICAgIHRoaXMuYWRkLnRleHQoYy54LCBjLnksICBgWW91IGRpZCBpdCEgSGVyZSdzIHlvdXIgY29weSBvZiBcXG50aGUgcmVjZWlwdDpcclxuICAgIERyaW5rIC0gJDEzLjA5XHJcbiAgICBEcmluayAtICQyNC4xNVxyXG4gICAgRHJpbmsgLSAkMTIuMTVcclxuICAgIERyaW5rIC0gJDcuMjVcclxuICAgIGAsIHsgY29sb3I6ICcjZmZmZmZmJyB9KS5zZXRPcmlnaW4oMC41KTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgRmluaXNoRnVuY3Rpb24gfSBmcm9tICcuLi9oZWxwZXJzJztcclxuaW1wb3J0IHsgU2NlbmVCdXR0b24gfSBmcm9tICcuLi91aS9zY2VuZS1idXR0b24nO1xyXG5cclxuY29uc3Qgc2NlbmVDb25maWc6IFBoYXNlci5UeXBlcy5TY2VuZXMuU2V0dGluZ3NDb25maWcgPSB7XHJcbiAgYWN0aXZlOiBmYWxzZSxcclxuICB2aXNpYmxlOiBmYWxzZSxcclxuICBrZXk6ICdWZXJtb3V0aCcsXHJcbn07XHJcblxyXG5jbGFzcyBHYW1lU2NlbmVBcmd1bWVudHMge1xyXG4gIHB1YmxpYyBvbkZpbmlzaDogRmluaXNoRnVuY3Rpb247XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBWZXJtb3V0aFNjZW5lIGV4dGVuZHMgUGhhc2VyLlNjZW5lIHtcclxuICBwcml2YXRlIHZlcm1vdXRoVG9wOiBQaGFzZXIuR2FtZU9iamVjdHMuU3ByaXRlO1xyXG4gIHByaXZhdGUgdmVybW91dGhUb3BPbmx5OiBQaGFzZXIuR2FtZU9iamVjdHMuU3ByaXRlO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKHNjZW5lQ29uZmlnKTtcclxuICB9XHJcbiAgcHVibGljIGluc3RydWN0aW9uVGV4dDogUGhhc2VyLkdhbWVPYmplY3RzLlRleHQ7XHJcbiAgcHVibGljIHRleHQxOiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dDtcclxuICBwdWJsaWMgdGV4dDI6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0O1xyXG4gIHB1YmxpYyB0ZXh0MzogUGhhc2VyLkdhbWVPYmplY3RzLlRleHQ7XHJcbiAgcHVibGljIHRleHQ0OiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dDtcclxuICBwdWJsaWMgdGV4dDU6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0O1xyXG4gIHB1YmxpYyB1bnNjcmV3ZWQgPSAwO1xyXG4gIHByaXZhdGUgdHJhbnNpdGlvbmluZyA9IGZhbHNlO1xyXG5cclxuICBwdWJsaWMgb25GaW5pc2g6IEZpbmlzaEZ1bmN0aW9uO1xyXG5cclxuICBwdWJsaWMgaW5pdChkYXRhOiBHYW1lU2NlbmVBcmd1bWVudHMpOiB2b2lkIHtcclxuICAgIHRoaXMub25GaW5pc2ggPSBkYXRhLm9uRmluaXNoO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNyZWF0ZSgpOiB2b2lkIHtcclxuICAgIGNvbnNvbGUubG9nKCdWZXJtb3V0aCcpO1xyXG4gICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSB0aGlzLnN5cy5nYW1lLmNhbnZhcztcclxuICAgIHRoaXMudW5zY3Jld2VkID0gMDtcclxuICAgIHRoaXMudHJhbnNpdGlvbmluZyA9IGZhbHNlO1xyXG4gICAgLy8gQWRkIGEgcGxheWVyIHNwcml0ZSB0aGF0IGNhbiBiZSBtb3ZlZCBhcm91bmQuIFBsYWNlIGhpbSBpbiB0aGUgbWlkZGxlIG9mIHRoZSBzY3JlZW4uXHJcbiAgICB0aGlzLnZlcm1vdXRoVG9wID0gdGhpcy5hZGQuc3ByaXRlKHdpZHRoIC8gMiwgaGVpZ2h0IC8gMiArIDMwMCwgJ3Zlcm1vdXRodG9wJyk7XHJcbiAgICB0aGlzLnZlcm1vdXRoVG9wT25seSA9IHRoaXMuYWRkLnNwcml0ZSh3aWR0aCAvIDIsIGhlaWdodCAvIDIgKyAzMDAsICd2ZXJtb3V0aHRvcG9ubHknKTtcclxuXHJcbiAgICB0aGlzLmlucHV0Lm9uKCdwb2ludGVydXAnLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMudGV4dDEuc2V0VGV4dChgzrg6ICR7dGhpcy5pbnB1dC5hY3RpdmVQb2ludGVyLmdldEFuZ2xlKCl9YCk7XHJcbiAgICAgIHRoaXMudGV4dDIuc2V0VGV4dChgeDogJHt0aGlzLmlucHV0LmFjdGl2ZVBvaW50ZXIuZ2V0RGlzdGFuY2VYKCl9YCk7XHJcbiAgICAgIHRoaXMudGV4dDMuc2V0VGV4dChgeTogJHt0aGlzLmlucHV0LmFjdGl2ZVBvaW50ZXIuZ2V0RGlzdGFuY2VZKCl9YCk7XHJcbiAgICAgIHRoaXMudGV4dDQuc2V0VGV4dChgZDogJHt0aGlzLmlucHV0LmFjdGl2ZVBvaW50ZXIuZ2V0RGlzdGFuY2UoKX1gKTtcclxuXHJcbiAgICAgIC8vIGNoZWNrIGlmIHRoaW5nIHNob3VsZCB1bnNjcmV3XHJcbiAgICAgIGlmIChcclxuICAgICAgICB0aGlzLmlucHV0LmFjdGl2ZVBvaW50ZXIuZ2V0RGlzdGFuY2UoKSA+PSAxNTAgJiZcclxuICAgICAgICB0aGlzLmlucHV0LmFjdGl2ZVBvaW50ZXIuZ2V0QW5nbGUoKSA8PSAwLjMyICYmXHJcbiAgICAgICAgdGhpcy5pbnB1dC5hY3RpdmVQb2ludGVyLmdldEFuZ2xlKCkgPj0gLTAuNTIgJiZcclxuICAgICAgICB0aGlzLnVuc2NyZXdlZCA8IDNcclxuICAgICAgKSB7XHJcbiAgICAgICAgdGhpcy50ZXh0NS5zZXRUZXh0KGB1bnNjcmV3OiAkeysrdGhpcy51bnNjcmV3ZWR9YCk7XHJcbiAgICAgICAgdGhpcy52ZXJtb3V0aFRvcE9ubHkuc2V0WSh0aGlzLnZlcm1vdXRoVG9wT25seS55IC0gMzApO1xyXG4gICAgICAgIHRoaXMudmVybW91dGhUb3BPbmx5LmZsaXBYID0gIXRoaXMudmVybW91dGhUb3BPbmx5LmZsaXBYO1xyXG4gICAgICAgIGlmICh0aGlzLnVuc2NyZXdlZCA9PSAzICYmICF0aGlzLnRyYW5zaXRpb25pbmcpIHtcclxuICAgICAgICAgIHRoaXMudHJhbnNpdGlvbmluZyA9IHRydWU7XHJcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zY2VuZS5zdG9wKCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2NlbmUubGF1bmNoKCdQb3VyJywgeyBCb3R0bGVTcHJpdGVOYW1lOiAnVmVybW91dGgnLCBvbkZpbmlzaDogdGhpcy5vbkZpbmlzaCB9KTtcclxuICAgICAgICAgIH0sIDUwMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2UgaWYgKFxyXG4gICAgICAgIHRoaXMuaW5wdXQuYWN0aXZlUG9pbnRlci5nZXREaXN0YW5jZSgpID49IDE1MCAmJlxyXG4gICAgICAgICh0aGlzLmlucHV0LmFjdGl2ZVBvaW50ZXIuZ2V0QW5nbGUoKSA8PSAtMi41IHx8IHRoaXMuaW5wdXQuYWN0aXZlUG9pbnRlci5nZXRBbmdsZSgpID49IDIuNSkgJiZcclxuICAgICAgICB0aGlzLnVuc2NyZXdlZCA+IDBcclxuICAgICAgKSB7XHJcbiAgICAgICAgdGhpcy50ZXh0NS5zZXRUZXh0KGB1bnNjcmV3OiAkey0tdGhpcy51bnNjcmV3ZWR9YCk7XHJcbiAgICAgICAgdGhpcy52ZXJtb3V0aFRvcE9ubHkuc2V0WSh0aGlzLnZlcm1vdXRoVG9wT25seS55ICsgMzApO1xyXG4gICAgICAgIHRoaXMudmVybW91dGhUb3BPbmx5LmZsaXBYID0gIXRoaXMudmVybW91dGhUb3BPbmx5LmZsaXBYO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLnRleHQxID0gdGhpcy5hZGQudGV4dCgxMCwgMTAsICcnLCB7IGNvbG9yOiAnIzAwZmYwMCcgfSkuc2V0QWxwaGEoMCk7XHJcbiAgICB0aGlzLnRleHQyID0gdGhpcy5hZGQudGV4dCgxMCwgMjUsICcnLCB7IGNvbG9yOiAnIzAwZmYwMCcgfSkuc2V0QWxwaGEoMCk7XHJcbiAgICB0aGlzLnRleHQzID0gdGhpcy5hZGQudGV4dCgxMCwgNDAsICcnLCB7IGNvbG9yOiAnIzAwZmYwMCcgfSkuc2V0QWxwaGEoMCk7XHJcbiAgICB0aGlzLnRleHQ0ID0gdGhpcy5hZGQudGV4dCgxMCwgNTUsICcnLCB7IGNvbG9yOiAnIzAwZmYwMCcgfSkuc2V0QWxwaGEoMCk7XHJcbiAgICB0aGlzLnRleHQ1ID0gdGhpcy5hZGQudGV4dCgxMCwgNzAsICcnLCB7IGNvbG9yOiAnIzAwZmYwMCcgfSkuc2V0QWxwaGEoMCk7XHJcblxyXG4gICAgdGhpcy5pbnN0cnVjdGlvblRleHQgPSB0aGlzLmFkZC50ZXh0KHdpZHRoLzQsIGhlaWdodC80LCAnVU5TQ1JFVyEgLT4nLCB7IGNvbG9yOiAnI2ZmMDAwMCcsIGZvbnRTaXplOiBcIjQwcHhcIiB9KTtcclxuXHJcbiAgICBjb25zdCBjbG9zZUJ1dHRvbiA9IG5ldyBTY2VuZUJ1dHRvbih0aGlzLCB3aWR0aCAtIDUwLCA1MCwgXCJYXCIsICgpID0+IHsgdGhpcy5vbkZpbmlzaChmYWxzZSk7IHRoaXMuc2NlbmUuc3RvcCgpOyB9LCAweEM4MDAwMCk7XHJcbiAgICBjbG9zZUJ1dHRvbi5idXR0b25Db2xvciA9IDB4QzgwMDAwO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgKiBhcyBQaGFzZXIgZnJvbSAncGhhc2VyJztcclxuZXhwb3J0IGNsYXNzIE90aGVyR2xhc3NCdXR0b24gZXh0ZW5kcyBQaGFzZXIuR2FtZU9iamVjdHMuQ29udGFpbmVyIHtcclxuICBwdWJsaWMgbGFiZWw6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0O1xyXG4gIHB1YmxpYyBsb2NrOiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dDtcclxuICBwdWJsaWMgYnV0dG9uOiBQaGFzZXIuR2FtZU9iamVjdHMuU2hhcGU7XHJcbiAgcHVibGljIHBhZGRpbmcgPSA2O1xyXG4gIHB1YmxpYyBtaW5pbXVtV2lkdGggPSA0MDtcclxuICBwdWJsaWMgbWluaW11bUhlaWdodCA9IDQwO1xyXG4gIHB1YmxpYyBvZ3RleHQ6IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3Ioc2NlbmU6IFBoYXNlci5TY2VuZSwgeDogbnVtYmVyLCB5OiBudW1iZXIsIHRleHQ6IHN0cmluZywgb25DbGljazogKCkgPT4gdm9pZCkge1xyXG4gICAgc3VwZXIoc2NlbmUsIHgsIHkpO1xyXG4gICAgdGhpcy5zY2VuZS5hZGQuZXhpc3RpbmcodGhpcyk7XHJcblxyXG4gICAgdGhpcy5vZ3RleHQgPSB0ZXh0O1xyXG5cclxuICAgIHRoaXMubGFiZWwgPSB0aGlzLnNjZW5lLmFkZFxyXG4gICAgICAudGV4dCgwLCAwLCB0ZXh0KVxyXG4gICAgICAuc2V0T3JpZ2luKDAuNSlcclxuICAgICAgLnNldEZvbnRTaXplKDE0KTtcclxuICAgIFxyXG4gICAgdGhpcy5sb2NrID0gdGhpcy5zY2VuZS5hZGQudGV4dCgwLDAsIFwi8J+UklwiKS5zZXRPcmlnaW4oMC41KS5zZXRGb250U2l6ZSgxNCkuc2V0VmlzaWJsZShmYWxzZSlcclxuXHJcbiAgICBjb25zdCBsYWJlbFdpZHRoID0gdGhpcy5sYWJlbC53aWR0aCArIHRoaXMucGFkZGluZztcclxuICAgIGNvbnN0IGxhYmVsSGVpZ2h0ID0gdGhpcy5sYWJlbC5oZWlnaHQgKyB0aGlzLnBhZGRpbmc7XHJcblxyXG4gICAgY29uc3QgYnV0dG9uV2lkdGggPSBsYWJlbFdpZHRoID49IHRoaXMubWluaW11bVdpZHRoID8gbGFiZWxXaWR0aCA6IHRoaXMubWluaW11bVdpZHRoO1xyXG4gICAgY29uc3QgYnV0dG9uSGVpZ2h0ID0gbGFiZWxIZWlnaHQgPj0gdGhpcy5taW5pbXVtSGVpZ2h0ID8gbGFiZWxIZWlnaHQgOiB0aGlzLm1pbmltdW1IZWlnaHQ7XHJcblxyXG4gICAgdGhpcy5idXR0b24gPSB0aGlzLnNjZW5lLmFkZC5yZWN0YW5nbGUoMCwgMCwgYnV0dG9uV2lkdGgsIGJ1dHRvbkhlaWdodCk7XHJcbiAgICBcclxuICAgIHRoaXMuYWRkKHRoaXMuYnV0dG9uKTtcclxuICAgIHRoaXMuYWRkKHRoaXMubGFiZWwpO1xyXG4gICAgdGhpcy5hZGQodGhpcy5sb2NrKTtcclxuXHJcbiAgICB0aGlzLnNldFNpemUodGhpcy5idXR0b24ud2lkdGgsIHRoaXMuYnV0dG9uLmhlaWdodCk7XHJcbiAgICB0aGlzLnNldEludGVyYWN0aXZlKHsgdXNlSGFuZEN1cnNvcjogdHJ1ZSB9KVxyXG4gICAgICAvLy5vbigncG9pbnRlcm92ZXInLCB0aGlzLmVudGVyTWVudUJ1dHRvbkhvdmVyU3RhdGUpXHJcbiAgICAgIC8vLm9uKCdwb2ludGVyb3V0JywgdGhpcy5lbnRlck1lbnVCdXR0b25SZXN0U3RhdGUpXHJcbiAgICAgIC5vbigncG9pbnRlcmRvd24nLCB0aGlzLmVudGVyTWVudUJ1dHRvbkFjdGl2ZVN0YXRlKVxyXG4gICAgICAub24oJ3BvaW50ZXJ1cCcsIHRoaXMuZW50ZXJNZW51QnV0dG9uSG92ZXJTdGF0ZSk7XHJcblxyXG4gICAgaWYgKG9uQ2xpY2spIHtcclxuICAgICAgdGhpcy5vbigncG9pbnRlcnVwJywgb25DbGljayk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5lbnRlck1lbnVCdXR0b25SZXN0U3RhdGUoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZW50ZXJNZW51QnV0dG9uSG92ZXJTdGF0ZSgpIHtcclxuICAgIHRoaXMubGFiZWwuc2V0Q29sb3IoJyMwMDAwMDAnKTtcclxuICAgIHRoaXMuYnV0dG9uLnNldEZpbGxTdHlsZSgweDg4ODg4OCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZW50ZXJNZW51QnV0dG9uUmVzdFN0YXRlKCk6IHZvaWQge1xyXG4gICAgdGhpcy5sYWJlbC5zZXRDb2xvcignI0ZGRkZGRicpO1xyXG4gICAgdGhpcy5idXR0b24uc2V0RmlsbFN0eWxlKDB4ODg4ODg4KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBlbnRlck1lbnVCdXR0b25BY3RpdmVTdGF0ZSgpOiB2b2lkIHtcclxuICAgIHRoaXMubGFiZWwuc2V0Q29sb3IoJyNCQkJCQkInKTtcclxuICAgIHRoaXMuYnV0dG9uLnNldEZpbGxTdHlsZSgweDQ0NDQ0NCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0RW5hYmxlZChlbmFibGVkOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICBpZiAoZW5hYmxlZCkge1xyXG4gICAgICB0aGlzLmVudGVyTWVudUJ1dHRvblJlc3RTdGF0ZSgpO1xyXG4gICAgICB0aGlzLnNldEludGVyYWN0aXZlKCk7XHJcbiAgICAgIHRoaXMubG9jay5zZXRWaXNpYmxlKGZhbHNlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuZW50ZXJNZW51QnV0dG9uQWN0aXZlU3RhdGUoKTtcclxuICAgICAgdGhpcy5zZXRJbnRlcmFjdGl2ZSgpO1xyXG4gICAgICB0aGlzLmxvY2suc2V0VmlzaWJsZSh0cnVlKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0ICogYXMgUGhhc2VyIGZyb20gJ3BoYXNlcic7XHJcblxyXG5leHBvcnQgY2xhc3MgU2NlbmVCdXR0b24gZXh0ZW5kcyBQaGFzZXIuR2FtZU9iamVjdHMuQ29udGFpbmVyIHtcclxuICBwdWJsaWMgbGFiZWw6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0O1xyXG4gIHB1YmxpYyBidXR0b246IFBoYXNlci5HYW1lT2JqZWN0cy5TaGFwZTtcclxuICBwdWJsaWMgcGFkZGluZyA9IDMwO1xyXG4gIHB1YmxpYyBtaW5pbXVtV2lkdGggPSA1MDtcclxuICBwdWJsaWMgbWluaW11bUhlaWdodCA9IDUwO1xyXG4gIHB1YmxpYyBidXR0b25Db2xvciA9IDB4ODg4ODg4O1xyXG5cclxuICBjb25zdHJ1Y3RvcihzY2VuZTogUGhhc2VyLlNjZW5lLCB4OiBudW1iZXIsIHk6IG51bWJlciwgdGV4dDogc3RyaW5nLCBvbkNsaWNrOiAoKSA9PiB2b2lkLCBjb2xvcj86IG51bWJlcikge1xyXG4gICAgc3VwZXIoc2NlbmUsIHgsIHkpO1xyXG4gICAgdGhpcy5zY2VuZS5hZGQuZXhpc3RpbmcodGhpcyk7XHJcblxyXG4gICAgaWYgKGNvbG9yKSB7XHJcbiAgICAgIHRoaXMuYnV0dG9uQ29sb3IgPSBjb2xvclxyXG4gICAgfVxyXG4gICAgdGhpcy5sYWJlbCA9IHRoaXMuc2NlbmUuYWRkLnRleHQoMCwgMCwgdGV4dClcclxuICAgICAgLnNldE9yaWdpbigwLjUpXHJcbiAgICAgIC5zZXRGb250U2l6ZSgxOClcclxuICAgICAgLnNldEFsaWduKCdjZW50ZXInKTtcclxuXHJcbiAgICBjb25zdCBsYWJlbFdpZHRoID0gdGhpcy5sYWJlbC53aWR0aCArIHRoaXMucGFkZGluZztcclxuICAgIGNvbnN0IGxhYmVsSGVpZ2h0ID0gdGhpcy5sYWJlbC5oZWlnaHQgKyB0aGlzLnBhZGRpbmc7XHJcblxyXG4gICAgY29uc3QgYnV0dG9uV2lkdGggPSBsYWJlbFdpZHRoID49IHRoaXMubWluaW11bVdpZHRoID8gbGFiZWxXaWR0aCA6IHRoaXMubWluaW11bVdpZHRoO1xyXG4gICAgY29uc3QgYnV0dG9uSGVpZ2h0ID0gbGFiZWxIZWlnaHQgPj0gdGhpcy5taW5pbXVtSGVpZ2h0ID8gbGFiZWxIZWlnaHQgOiB0aGlzLm1pbmltdW1IZWlnaHQ7XHJcblxyXG4gICAgdGhpcy5idXR0b24gPSB0aGlzLnNjZW5lLmFkZC5yZWN0YW5nbGUoMCwgMCwgYnV0dG9uV2lkdGgsIGJ1dHRvbkhlaWdodCk7XHJcblxyXG4gICAgdGhpcy5hZGQodGhpcy5idXR0b24pO1xyXG4gICAgdGhpcy5hZGQodGhpcy5sYWJlbCk7XHJcblxyXG4gICAgdGhpcy5zZXRTaXplKHRoaXMuYnV0dG9uLndpZHRoLCB0aGlzLmJ1dHRvbi5oZWlnaHQpO1xyXG4gICAgdGhpcy5zZXRJbnRlcmFjdGl2ZSh7IHVzZUhhbmRDdXJzb3I6IHRydWUgfSlcclxuICAgICAgLm9uKCdwb2ludGVyb3ZlcicsIHRoaXMuZW50ZXJNZW51QnV0dG9uSG92ZXJTdGF0ZSlcclxuICAgICAgLm9uKCdwb2ludGVyb3V0JywgdGhpcy5lbnRlck1lbnVCdXR0b25SZXN0U3RhdGUpXHJcbiAgICAgIC5vbigncG9pbnRlcmRvd24nLCB0aGlzLmVudGVyTWVudUJ1dHRvbkFjdGl2ZVN0YXRlKVxyXG4gICAgICAub24oJ3BvaW50ZXJ1cCcsIHRoaXMuZW50ZXJNZW51QnV0dG9uSG92ZXJTdGF0ZSk7XHJcblxyXG4gICAgaWYgKG9uQ2xpY2spIHtcclxuICAgICAgdGhpcy5vbigncG9pbnRlcnVwJywgb25DbGljayk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5lbnRlck1lbnVCdXR0b25SZXN0U3RhdGUoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZW50ZXJNZW51QnV0dG9uSG92ZXJTdGF0ZSgpIHtcclxuICAgIHRoaXMubGFiZWwuc2V0Q29sb3IoJyMwMDAwMDAnKTtcclxuICAgIHRoaXMuYnV0dG9uLnNldEZpbGxTdHlsZSgweDg4ODg4OCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGVudGVyTWVudUJ1dHRvblJlc3RTdGF0ZSgpIHtcclxuICAgIHRoaXMubGFiZWwuc2V0Q29sb3IoJyNGRkZGRkYnKTtcclxuICAgIHRoaXMuYnV0dG9uLnNldEZpbGxTdHlsZSh0aGlzLmJ1dHRvbkNvbG9yKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZW50ZXJNZW51QnV0dG9uQWN0aXZlU3RhdGUoKSB7XHJcbiAgICB0aGlzLmxhYmVsLnNldENvbG9yKCcjQkJCQkJCJyk7XHJcbiAgICB0aGlzLmJ1dHRvbi5zZXRGaWxsU3R5bGUoMHg0NDQ0NDQpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgc2lnbmFsUiA9IHJlcXVpcmUoJ0BtaWNyb3NvZnQvc2lnbmFscicpO1xyXG5cclxuZXhwb3J0IGNsYXNzIFdoaXRlUnVzaGluSHViIGV4dGVuZHMgUGhhc2VyLkV2ZW50cy5FdmVudEVtaXR0ZXIge1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgRXZlbnRzID0ge1xyXG4gICAgICAgIEFzc2lnbjogJ0Fzc2lnbicsXHJcbiAgICAgICAgU3RhdGVQdXNoOiAnU3RhdGVQdXNoJyxcclxuICAgICAgICBSZXN1bHQ6ICdSZXN1bHQnLFxyXG4gICAgICAgIFVwZGF0ZVJlYWR5Q291bnQ6ICdVcGRhdGVSZWFkeUNvdW50J1xyXG4gICAgfTtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIEluc3RhbmNlOiBXaGl0ZVJ1c2hpbkh1YjtcclxuICAgIHB1YmxpYyBzdGF0aWMgUm9vbTogc3RyaW5nO1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgSW5pdGlhbGl6ZShnYW1lOiBQaGFzZXIuR2FtZSk6IHZvaWQge1xyXG4gICAgICAgIGlmIChXaGl0ZVJ1c2hpbkh1Yi5JbnN0YW5jZSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJBdHRlbXB0ZWQgdG8gaW5pdGlhbGl6ZSBodWIgbXVsdGlwbGUgdGltZXNcIilcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgV2hpdGVSdXNoaW5IdWIuSW5zdGFuY2UgPSBuZXcgV2hpdGVSdXNoaW5IdWIoZ2FtZSk7XHJcblxyXG4gICAgICAgIC8vIFdlIG5lZWQgdGhlIHRlYW0gaWQgc28gcHVsbCB0aGF0IG91dCB0b28uXHJcbiAgICAgICAgY29uc3QgdXJsUGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh3aW5kb3cubG9jYXRpb24uc2VhcmNoKTtcclxuICAgICAgICBXaGl0ZVJ1c2hpbkh1Yi5Sb29tID0gdXJsUGFyYW1zLmdldCgncm9vbScpID8/ICdzYW1wbGUnO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2FtZTogUGhhc2VyLkdhbWU7XHJcbiAgICBwdWJsaWMgaHViQ29ubmVjdGlvbjogc2lnbmFsUi5IdWJDb25uZWN0aW9uO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGdhbWU6IFBoYXNlci5HYW1lKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuXHJcbiAgICAgICAgdGhpcy5nYW1lID0gZ2FtZTtcclxuICAgICAgICB0aGlzLmh1YkNvbm5lY3Rpb24gPSBuZXcgc2lnbmFsUi5IdWJDb25uZWN0aW9uQnVpbGRlcigpXHJcbiAgICAgICAgICAgIC53aXRoVXJsKGBodHRwczovL3NjaGl0dGFsa2luLmF6dXJld2Vic2l0ZXMubmV0L3doaXRlcnVzaGluL2ApXHJcbiAgICAgICAgICAgIC8vLndpdGhVcmwoYGh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC93aGl0ZXJ1c2hpbmApXHJcbiAgICAgICAgICAgIC8vLndpdGhVcmwoYGh0dHBzOi8vd2hpdGVydXNoaW5zZXJ2aWNlLmF6dXJld2Vic2l0ZXMubmV0L3doaXRlcnVzaGluYClcclxuICAgICAgICAgICAgLmNvbmZpZ3VyZUxvZ2dpbmcoc2lnbmFsUi5Mb2dMZXZlbC5XYXJuaW5nKVxyXG4gICAgICAgICAgICAud2l0aEF1dG9tYXRpY1JlY29ubmVjdCgpXHJcbiAgICAgICAgICAgIC5idWlsZCgpO1xyXG5cclxuICAgICAgICB0aGlzLmNvbm5lY3RFdmVudHMoKTtcclxuICAgICAgICB0aGlzLmNvbm5lY3RUb0h1YigpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY29ubmVjdEV2ZW50cygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmh1YkNvbm5lY3Rpb24ub24oJ0Fzc2lnbicsIChjdXA6IG51bWJlciwgYWN0aW9uczogbnVtYmVyW10sIHBsYXllcmNvdW50OiBudW1iZXIsIHJvdW5kOiBudW1iZXIpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgYXNzaWduU3RhdGUgPSB7XHJcbiAgICAgICAgICAgICAgICBwbGF5ZXJjb3VudDogcGxheWVyY291bnQsXHJcbiAgICAgICAgICAgICAgICByb3VuZE51bWJlcjogcm91bmQsXHJcbiAgICAgICAgICAgICAgICBjdXBOdW1iZXI6IGN1cCxcclxuICAgICAgICAgICAgICAgIGFjdGlvbnM6IGFjdGlvbnNcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIldlIHdlcmUgYXNzaWduZWQhICBEbyBzdHVmZiFcIik7XHJcbiAgICAgICAgICAgIHRoaXMuZW1pdChXaGl0ZVJ1c2hpbkh1Yi5FdmVudHMuQXNzaWduLCBhc3NpZ25TdGF0ZSlcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZm9yIChjb25zdCBlIG9mIFtcclxuICAgICAgICAgICAgV2hpdGVSdXNoaW5IdWIuRXZlbnRzLlVwZGF0ZVJlYWR5Q291bnQsXHJcbiAgICAgICAgICAgIFdoaXRlUnVzaGluSHViLkV2ZW50cy5TdGF0ZVB1c2gsXHJcbiAgICAgICAgICAgIFdoaXRlUnVzaGluSHViLkV2ZW50cy5SZXN1bHQsXHJcbiAgICAgICAgXSkge1xyXG4gICAgICAgICAgICB0aGlzLmh1YkNvbm5lY3Rpb24ub24oZSwgKC4uLmFyZ3M6IGFueVtdKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVtaXQoZSwgLi4uYXJncyk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmh1YkNvbm5lY3Rpb24ub25jbG9zZSgoKSA9PiB7IHRoaXMuZ2FtZS5zY2VuZS5zdGFydChcIkRpc2Nvbm5lY3RlZFwiKSB9KVxyXG4gICAgICAgIHRoaXMuaHViQ29ubmVjdGlvbi5vbnJlY29ubmVjdGluZygoKSA9PiB7IHRoaXMuZ2FtZS5zY2VuZS5zdGFydChcIkRpc2Nvbm5lY3RlZFwiKSB9KVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYXN5bmMgY29ubmVjdFRvSHViKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuaHViQ29ubmVjdGlvbi5zdGFydCgpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkNvbm5lY3RlZCB0byBXaGl0ZSBSdXNoaW4gaHViXCIpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KHRoaXMuY29ubmVjdFRvSHViLCAxMDAwKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIFJlZ2lzdGVyKHRlYW1JZD86IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIGlmICghdGVhbUlkKSB7XHJcbiAgICAgICAgICAgIHRlYW1JZCA9IFdoaXRlUnVzaGluSHViLlJvb207XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5odWJDb25uZWN0aW9uLmludm9rZSgnUmVnaXN0ZXInLCB0ZWFtSWQpO1xyXG4gICAgfTtcclxuXHJcbiAgICBwdWJsaWMgU3VibWl0Q3VwKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh1YkNvbm5lY3Rpb24uaW52b2tlKCdTdWJtaXRDdXAnKTtcclxuICAgIH07XHJcblxyXG4gICAgcHVibGljIFNlbmRBY3Rpb24oYWN0aW9uOiBudW1iZXIsIHRhcmdldDogbnVtYmVyKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHViQ29ubmVjdGlvbi5pbnZva2UoJ1NlbmRBY3Rpb24nLCBhY3Rpb24sIHRhcmdldCk7XHJcbiAgICB9O1xyXG5cclxuICAgIHB1YmxpYyBFbXB0eUN1cCgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odWJDb25uZWN0aW9uLmludm9rZSgnRW1wdHlDdXAnKTtcclxuICAgIH07XHJcblxyXG4gICAgcHVibGljIFJlc2V0KCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh1YkNvbm5lY3Rpb24uaW52b2tlKCdSZXNldCcpO1xyXG4gICAgfTtcclxuXHJcbiAgICBwdWJsaWMgRmV0Y2hTdGF0ZSgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odWJDb25uZWN0aW9uLmludm9rZSgnRmV0Y2hTdGF0ZScpO1xyXG4gICAgfTtcclxuXHJcbiAgICBwdWJsaWMgUmVhZHlVcCgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odWJDb25uZWN0aW9uLmludm9rZShcIlJlYWR5VXBcIik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIEFsbFJlYWR5KCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh1YkNvbm5lY3Rpb24uaW52b2tlKFwiQWxsUmVhZHlcIik7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9