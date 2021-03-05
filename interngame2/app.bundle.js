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
exports.drinkToColorMap = exports.getGameHeight = exports.getGameWidth = void 0;
var getGameWidth = function (scene) {
    return scene.game.scale.width;
};
exports.getGameWidth = getGameWidth;
var getGameHeight = function (scene) {
    return scene.game.scale.height;
};
exports.getGameHeight = getGameHeight;
exports.drinkToColorMap = new Map([
    ['bourbon', 0xdb7900],
    ['vermouth', 0x550103],
]);


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.game = void 0;
var Phaser = __webpack_require__(/*! phaser */ "./node_modules/phaser/dist/phaser.js");
var scenes_1 = __webpack_require__(/*! ./scenes */ "./src/scenes/index.ts");
var gameConfig = {
    title: 'Sample',
    type: Phaser.AUTO,
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
exports.game = new Phaser.Game(gameConfig);
window.addEventListener('resize', function () {
    exports.game.scale.refresh();
});


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
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
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
        var _this = this;
        document.cookie = "orange=0";
        document.cookie = "bourbon=0";
        document.cookie = "ice=0";
        document.cookie = "vermouth=0";
        var halfWidth = helpers_1.getGameWidth(this) * 0.5;
        var halfHeight = helpers_1.getGameHeight(this) * 0.5;
        var progressBarHeight = 100;
        var progressBarWidth = 400;
        var progressBarContainer = this.add.rectangle(halfWidth, halfHeight, progressBarWidth, progressBarHeight, 0x000000);
        var progressBar = this.add.rectangle(halfWidth + 20 - progressBarContainer.width * 0.5, halfHeight, 10, progressBarHeight - 20, 0x888888);
        var loadingText = this.add.text(halfWidth - 75, halfHeight - 100, 'Loading...').setFontSize(24);
        var percentText = this.add.text(halfWidth - 25, halfHeight, '0%').setFontSize(24);
        var assetText = this.add.text(halfWidth - 25, halfHeight + 100, '').setFontSize(24);
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
            _this.scene.start('MainMenu');
        });
        this.loadAssets();
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
        this.load.image('bourbontop', 'assets/sprites/bourbontop2.png');
        this.load.image('bourbontoponly', 'assets/sprites/bourbontoponly.png');
        this.load.image('bourbon', 'assets/sprites/bourbon.png');
        this.load.image('emptyglass', 'assets/sprites/emptyglass.png');
        this.load.image('filledglass1', 'assets/sprites/filledglass1.png');
        this.load.image('filledglass2', 'assets/sprites/filledglass2.png');
        this.load.image('ice', 'assets/sprites/ice.png');
        this.load.image('ice1', 'assets/sprites/ice1.png');
        this.load.image('ice2', 'assets/sprites/ice2.png');
        this.load.image('ice3', 'assets/sprites/ice3.png');
        this.load.image('ice4', 'assets/sprites/ice4.png');
        this.load.image('ice5', 'assets/sprites/ice5.png');
        this.load.image('iceglass', 'assets/sprites/iceglass.png');
        this.load.image('orange', 'assets/sprites/orange.png');
        this.load.image('orangeinside', 'assets/sprites/orangeInside.png');
        this.load.image('orangewedgeglass', 'assets/sprites/orangewedgeglass.png');
        this.load.image('canelleknife', 'assets/sprites/canelleknife.png');
        this.load.image('shaker', 'assets/sprites/shaker.png');
        this.load.image('shaker0', 'assets/sprites/shaker.png');
        this.load.image('shaker1', 'assets/sprites/shaker1.png');
        this.load.image('shaker2', 'assets/sprites/shaker2.png');
        this.load.image('shaker3', 'assets/sprites/shaker3.png');
        this.load.image('muddler', 'assets/sprites/muddler.png');
        this.load.image('juicer', 'assets/sprites/juicer.png');
        this.load.image('juicerbottom', 'assets/sprites/juicerbottom.png');
        this.load.image('juicertop', 'assets/sprites/juicertop.png');
        this.load.image('juicerorange', 'assets/sprites/juicerorange.png');
        this.load.image('juicerlime', 'assets/sprites/juicerlime.png');
        this.load.image('juicerlemon', 'assets/sprites/juicerlemon.png');
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
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
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
var BourbonScene = /** @class */ (function (_super) {
    __extends(BourbonScene, _super);
    function BourbonScene() {
        var _this = _super.call(this, sceneConfig) || this;
        _this.speed = 200;
        _this.contents = [];
        _this.glassFillers = [];
        _this.isPouring = 0;
        _this.transitioning = false;
        _this.unscrewed = 0;
        _this.held = false;
        return _this;
    }
    BourbonScene.prototype.create = function () {
        var _this = this;
        console.log('Bourbon');
        var _a = this.sys.game.canvas, width = _a.width, height = _a.height;
        this.unscrewed = 0;
        this.held = false;
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
                            _this.scene.start('Pour', { BottleSpriteName: 'bourbon' });
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
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
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
var sceneConfig = {
    active: false,
    visible: false,
    key: 'Game',
};
var GameScene = /** @class */ (function (_super) {
    __extends(GameScene, _super);
    function GameScene() {
        var _this = _super.call(this, sceneConfig) || this;
        _this.speed = 200;
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
        return _this;
    }
    GameScene.prototype.create = function () {
        var _this = this;
        console.log('Game');
        console.log('cookie: ' + document.cookie);
        var _a = this.sys.game.canvas, width = _a.width, height = _a.height;
        // Add a player sprite that can be moved around. Place him in the middle of the screen.
        this.emptyGlass = this.add.sprite(width / 2, height / 2, 'emptyglass');
        this.filledglass1 = this.add.sprite(width / 2, height / 2, 'filledglass1');
        this.filledglass2 = this.add.sprite(width / 2, height / 2, 'filledglass2');
        this.emptyGlass.setScale(0.5);
        this.filledglass1.setScale(0.5);
        this.filledglass2.setScale(0.5);
        this.glassFillers.push(this.filledglass1);
        this.glassFillers.push(this.filledglass2);
        if (this.getCookie('vermouth') == '1') {
            var color = this.privateColorMap.get('vermouth');
            console.log(color);
            this.filledglass1.setTint(color);
        }
        if (this.getCookie('bourbon') == '1') {
            var color = this.privateColorMap.get('bourbon');
            console.log(color);
            this.filledglass2.setTint(color);
        }
        if (this.getCookie('ice') == '1') {
            this.add.sprite(width / 2, height / 2, 'iceglass').setScale(0.5);
        }
        if (this.getCookie('orange') == '1') {
            this.add.sprite(width / 2, height / 2, 'orangewedgeglass').setScale(0.5);
        }
        this.vermouth = this.add.sprite(width / 5, height * 0.75, 'vermouth').setInteractive();
        this.vermouth.setScale(0.2);
        this.bourbon = this.add.sprite(width * (2 / 5), height * 0.75, 'bourbon').setInteractive();
        this.bourbon.setScale(0.2);
        this.ice = this.add.sprite(width * (3 / 5), height * 0.75, 'ice').setInteractive();
        this.ice.setScale(0.1);
        this.orange = this.add.sprite(width * (4 / 5), height * 0.75, 'orange').setInteractive();
        this.orange.setScale(0.2);
        this.shaker = this.add.sprite(width * (4 / 5), height * 0.75, 'shaker').setInteractive();
        this.shaker.setScale(0.2);
        this.muddler = this.add.sprite(width * (4 / 5), height * 0.75, 'muddler').setInteractive();
        this.muddler.setScale(0.2);
        this.juicer = this.add.sprite(width * (4 / 5), height * 0.75, 'juicer').setInteractive();
        this.juicer.setScale(0.2);
        this.vermouth.on('pointerover', function () {
            _this.vermouth.setTint(0xcccccc);
        });
        this.vermouth.on('pointerdown', function () {
            _this.scene.start('Vermouth');
        });
        this.vermouth.on('pointerout', function () {
            _this.vermouth.clearTint();
        });
        this.bourbon.on('pointerover', function () {
            this.setTint(0xcccccc);
        });
        this.bourbon.on('pointerout', function () {
            this.clearTint();
        });
        this.bourbon.on('pointerdown', function () {
            _this.scene.start('Bourbon');
        });
        this.ice.on('pointerover', function () {
            this.setTint(0xcccccc);
        });
        this.ice.on('pointerout', function () {
            this.clearTint();
        });
        this.ice.on('pointerdown', function () {
            _this.scene.start('Ice');
        });
        this.orange.on('pointerover', function () {
            this.setTint(0xcccccc);
        });
        this.orange.on('pointerout', function () {
            this.clearTint();
        });
        this.orange.on('pointerdown', function () {
            _this.scene.start('Orange');
        });
        this.shaker.on('pointerover', function () {
            this.setTint(0xcccccc);
        });
        this.shaker.on('pointerout', function () {
            this.clearTint();
        });
        this.shaker.on('pointerdown', function () {
            _this.scene.start('Shake');
        });
        this.muddler.on('pointerover', function () {
            this.setTint(0xcccccc);
        });
        this.muddler.on('pointerout', function () {
            this.clearTint();
        });
        this.muddler.on('pointerdown', function () {
            _this.scene.start('Muddle');
        });
        this.juicer.on('pointerover', function () {
            this.setTint(0xcccccc);
        });
        this.juicer.on('pointerout', function () {
            this.clearTint();
        });
        this.juicer.on('pointerdown', function () {
            console.log("juicer");
            _this.scene.start('Juicer', { FruitSpriteName: 'juicerlemon' });
        });
        this.input.setDraggable(this.vermouth);
        this.input.setDraggable(this.bourbon);
        this.input.on('dragstart', function (pointer, gameObject) {
            gameObject.setTint(0x999999);
        });
        this.input.on('drag', function (pointer, gameObject, dragX, dragY) {
            gameObject.x = dragX;
            gameObject.y = dragY;
            //  console.log(gameObject);
            var bounds1 = gameObject.getBounds();
            //console.log(`draggedbounds: ${bounds1}`);
            var bounds2 = _this.emptyGlass.getBounds();
            //console.log(`cupbounds: ${bounds2}`);
            if (Phaser.Geom.Rectangle.Overlaps(bounds1, bounds2)) {
                console.log('touching');
                console.log(gameObject.angle);
                _this.rotateRight(gameObject);
                if (gameObject.angle >= 90) {
                    if (_this.isPouring == 0) {
                        _this.pour(gameObject);
                    }
                }
            }
            else {
                //console.log("not touching");
                //console.log(gameObject.angle);
                _this.rotateCenter(gameObject);
                _this.isPouring = 0;
            }
        });
        this.input.on('dragend', function (pointer, gameObject) {
            gameObject.clearTint();
        });
        // This is a nice helper Phaser provides to create listeners for some of the most common keys.
        this.cursorKeys = this.input.keyboard.createCursorKeys();
        this.text1 = this.add.text(10, 10, '', { color: '#00ff00' });
        this.text2 = this.add.text(500, 10, '', { color: '#00ff00' });
    };
    GameScene.prototype.update = function () { };
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
    GameScene.prototype.pour = function (gameObject) {
        if (this.contents.length < this.glassFillers.length) {
            console.log('trying to pour');
            //this.isPouring = 1;
            var l = this.contents.push(gameObject.texture.key);
            var color = this.privateColorMap.get(gameObject.texture.key);
            console.log(color);
            this.glassFillers[l - 1].setTint(color);
        }
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
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
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
    key: 'Ice',
};
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
    IceScene.prototype.create = function () {
        var _this = this;
        console.log('Ice');
        var _a = this.sys.game.canvas, width = _a.width, height = _a.height;
        this.transitioning = false;
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
                    _this.scene.start('Game');
                }, 500);
            }
        });
        this.text1 = this.add.text(10, 10, '', { color: '#00ff00' });
        this.text2 = this.add.text(10, 25, '', { color: '#00ff00' });
        this.text3 = this.add.text(10, 40, '', { color: '#00ff00' });
        this.text4 = this.add.text(10, 55, '', { color: '#00ff00' });
        this.text5 = this.add.text(10, 70, '', { color: '#00ff00' });
    };
    IceScene.prototype.update = function () { };
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
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
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
        this.fruitSpriteName = data.FruitSpriteName;
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
                    _this.scene.start('Game');
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
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
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
var sceneConfig = {
    active: false,
    visible: false,
    key: 'MainMenu',
};
/**
 * The initial scene that starts, shows the splash screens, and loads the necessary assets.
 */
var MainMenuScene = /** @class */ (function (_super) {
    __extends(MainMenuScene, _super);
    function MainMenuScene() {
        return _super.call(this, sceneConfig) || this;
    }
    MainMenuScene.prototype.create = function () {
        var _this = this;
        console.log('Main Menu');
        this.add
            .text(100, 50, 'This is a sample main menu. Click the "Start" button below to run your game.', {
            color: '#FFFFFF',
        })
            .setFontSize(24);
        new menu_button_1.MenuButton(this, 100, 150, 'Start Game', function () {
            _this.scene.start('Game');
        });
        new menu_button_1.MenuButton(this, 100, 250, 'Settings', function () {
            console.log('settings button clicked');
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
        });
        new menu_button_1.MenuButton(this, 100, 350, 'Help', function () { return console.log('help button clicked'); });
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
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
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
    key: 'Muddle',
};
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
                    _this.scene.start('Game');
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
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
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
    key: 'Orange',
};
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
                        _this.scene.start('Game');
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
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
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
        this.bourbon = this.add.sprite(width / 8, height / 4, 'canelleknife').setInteractive();
        this.bourbon.on('pointerdown', function () {
            _this.text1.setText('Asked');
            DeviceMotionEvent.requestPermission().then(function (response) {
                _this.text1.setText(response);
                if (response == 'granted') {
                    // Add a listener to get smartphone orientation
                    // in the alpha-beta-gamma axes (units in degrees)
                    window.addEventListener('deviceorientation', function (event) {
                        var updateRate = 1 / 60;
                        // Expose each orientation angle in a more readable way
                        var rotation_degrees = event.alpha;
                        var frontToBack_degrees = event.beta;
                        var leftToRight_degrees = event.gamma;
                        _this.bottle.angle = frontToBack_degrees - 90;
                    });
                }
            });
        });
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
                _this.scene.start('Game');
            }, 500);
        }
    };
    return PourScene;
}(Phaser.Scene));
exports.PourScene = PourScene;


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
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
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
    key: 'Shake',
};
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
    ShakeScene.prototype.init = function () {
        this.bottleName = 'shaker';
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
        // Add a player sprite that can be moved around. Place him in the middle of the screen.
        //this.emptyGlass = this.add.sprite(width / 4, height / 2, 'emptyglass');
        //this.filledglass1 = this.add.sprite(width / 4, height / 2, 'filledglass1');
        //this.filledglass2 = this.add.sprite(width / 4, height / 2, 'filledglass2');
        this.bourbon = this.add.sprite(width / 8, height / 4, 'canelleknife').setInteractive();
        this.bourbon.on('pointerdown', function () {
            _this.text1.setText('Asked');
            _this.maxx = 0;
            _this.maxy = 0;
            _this.maxz = 0;
            _this.minx = 0;
            _this.miny = 0;
            _this.minz = 0;
            if (window.DeviceOrientationEvent) {
                //window.addEventListener('deviceorientation', deviceOrientationHandler, false);
            }
            if (window.DeviceMotionEvent) {
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
        });
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
                _this.scene.start('Game');
            }, 750);
        }
    };
    return ShakeScene;
}(Phaser.Scene));
exports.ShakeScene = ShakeScene;


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
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
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
var VermouthScene = /** @class */ (function (_super) {
    __extends(VermouthScene, _super);
    function VermouthScene() {
        var _this = _super.call(this, sceneConfig) || this;
        _this.unscrewed = 0;
        _this.transitioning = false;
        return _this;
    }
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
                        _this.scene.start('Pour', { BottleSpriteName: 'vermouth' });
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
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
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
var padding = 10;
var minimumWidth = 200;
var minimumHeight = 50;
var MenuButton = /** @class */ (function (_super) {
    __extends(MenuButton, _super);
    function MenuButton(scene, x, y, text, onClick) {
        var _this = _super.call(this, scene, x, y) || this;
        scene.add.existing(_this);
        _this.setOrigin(0, 0);
        _this.label = scene.add
            .text(x + padding, y + padding, text)
            .setFontSize(18)
            .setAlign('center');
        var labelWidth = _this.label.width + padding;
        var labelHeight = _this.label.height + padding;
        _this.width = labelWidth >= minimumWidth ? labelWidth : minimumWidth;
        _this.height = labelHeight >= minimumHeight ? labelHeight : minimumHeight;
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


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hlbHBlcnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy9ib290LXNjZW5lLnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvYm91cmJvbi1zY2VuZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL2dhbWUtc2NlbmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy9pY2Utc2NlbmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL2p1aWNlci1zY2VuZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL21haW4tbWVudS1zY2VuZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL211ZGRsZS1zY2VuZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL29yYW5nZS1zY2VuZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL3BvdXItc2NlbmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy9zaGFrZS1zY2VuZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL3Zlcm1vdXRoLXNjZW5lLnRzIiwid2VicGFjazovLy8uL3NyYy91aS9tZW51LWJ1dHRvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSxRQUFRLG9CQUFvQjtRQUM1QjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLGlCQUFpQiw0QkFBNEI7UUFDN0M7UUFDQTtRQUNBLGtCQUFrQiwyQkFBMkI7UUFDN0M7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQSxnQkFBZ0IsdUJBQXVCO1FBQ3ZDOzs7UUFHQTtRQUNBO1FBQ0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3JKTyxJQUFNLFlBQVksR0FBRyxVQUFDLEtBQW1CO0lBQzlDLE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO0FBQ2hDLENBQUMsQ0FBQztBQUZXLG9CQUFZLGdCQUV2QjtBQUVLLElBQU0sYUFBYSxHQUFHLFVBQUMsS0FBbUI7SUFDL0MsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7QUFDakMsQ0FBQyxDQUFDO0FBRlcscUJBQWEsaUJBRXhCO0FBRVcsdUJBQWUsR0FBd0IsSUFBSSxHQUFHLENBQUM7SUFDMUQsQ0FBQyxTQUFTLEVBQUUsUUFBUSxDQUFDO0lBQ3JCLENBQUMsVUFBVSxFQUFFLFFBQVEsQ0FBQztDQUN2QixDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiSCx1RkFBaUM7QUFDakMsNEVBQThCO0FBRTlCLElBQU0sVUFBVSxHQUFpQztJQUMvQyxLQUFLLEVBQUUsUUFBUTtJQUVmLElBQUksRUFBRSxNQUFNLENBQUMsSUFBSTtJQUVqQixLQUFLLEVBQUU7UUFDTCxLQUFLLEVBQUUsTUFBTSxDQUFDLFVBQVU7UUFDeEIsTUFBTSxFQUFFLE1BQU0sQ0FBQyxXQUFXO0tBQzNCO0lBRUQsS0FBSyxFQUFFLGdCQUFNO0lBRWIsT0FBTyxFQUFFO1FBQ1AsT0FBTyxFQUFFLFFBQVE7UUFDakIsTUFBTSxFQUFFO1lBQ04sS0FBSyxFQUFFLElBQUk7U0FDWjtLQUNGO0lBRUQsTUFBTSxFQUFFLE1BQU07SUFDZCxlQUFlLEVBQUUsU0FBUztDQUMzQixDQUFDO0FBRVcsWUFBSSxHQUFHLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUVoRCxNQUFNLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFO0lBQ2hDLFlBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUM7QUFDdkIsQ0FBQyxDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUJILDBFQUF5RDtBQUV6RCxJQUFNLFdBQVcsR0FBdUM7SUFDdEQsTUFBTSxFQUFFLEtBQUs7SUFDYixPQUFPLEVBQUUsS0FBSztJQUNkLEdBQUcsRUFBRSxNQUFNO0NBQ1osQ0FBQztBQUVGOztHQUVHO0FBQ0g7SUFBK0IsNkJBQVk7SUFDekM7ZUFDRSxrQkFBTSxXQUFXLENBQUM7SUFDcEIsQ0FBQztJQUVNLDJCQUFPLEdBQWQ7UUFBQSxpQkFvREM7UUFuREMsUUFBUSxDQUFDLE1BQU0sR0FBRyxVQUFVLENBQUM7UUFDN0IsUUFBUSxDQUFDLE1BQU0sR0FBRyxXQUFXLENBQUM7UUFDOUIsUUFBUSxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUM7UUFDMUIsUUFBUSxDQUFDLE1BQU0sR0FBRyxZQUFZLENBQUM7UUFDL0IsSUFBTSxTQUFTLEdBQUcsc0JBQVksQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUM7UUFDM0MsSUFBTSxVQUFVLEdBQUcsdUJBQWEsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUM7UUFFN0MsSUFBTSxpQkFBaUIsR0FBRyxHQUFHLENBQUM7UUFDOUIsSUFBTSxnQkFBZ0IsR0FBRyxHQUFHLENBQUM7UUFFN0IsSUFBTSxvQkFBb0IsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FDN0MsU0FBUyxFQUNULFVBQVUsRUFDVixnQkFBZ0IsRUFDaEIsaUJBQWlCLEVBQ2pCLFFBQVEsQ0FDVCxDQUFDO1FBQ0YsSUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQ3BDLFNBQVMsR0FBRyxFQUFFLEdBQUcsb0JBQW9CLENBQUMsS0FBSyxHQUFHLEdBQUcsRUFDakQsVUFBVSxFQUNWLEVBQUUsRUFDRixpQkFBaUIsR0FBRyxFQUFFLEVBQ3RCLFFBQVEsQ0FDVCxDQUFDO1FBRUYsSUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsRUFBRSxVQUFVLEdBQUcsR0FBRyxFQUFFLFlBQVksQ0FBQyxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNsRyxJQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxFQUFFLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDcEYsSUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsRUFBRSxVQUFVLEdBQUcsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUV0RixJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxVQUFVLEVBQUUsVUFBQyxLQUFLO1lBQzdCLFdBQVcsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxnQkFBZ0IsR0FBRyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUM7WUFFcEQsSUFBTSxPQUFPLEdBQUcsS0FBSyxHQUFHLEdBQUcsQ0FBQztZQUM1QixXQUFXLENBQUMsT0FBTyxDQUFJLE9BQU8sTUFBRyxDQUFDLENBQUM7UUFDckMsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxjQUFjLEVBQUUsVUFBQyxJQUFJO1lBQ2hDLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzlCLENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsVUFBVSxFQUFFO1lBQ3ZCLFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUN0QixXQUFXLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDdEIsU0FBUyxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ3BCLFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUN0QixvQkFBb0IsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUUvQixLQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUMvQixDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNLLDhCQUFVLEdBQWxCO1FBQ0UscUJBQXFCO1FBRXJCLHdCQUF3QjtRQUN4QixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLEVBQUUsaUNBQWlDLENBQUMsQ0FBQztRQUNsRSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxxQ0FBcUMsQ0FBQyxDQUFDO1FBQzFFLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsRUFBRSw2QkFBNkIsQ0FBQyxDQUFDO1FBQzNELElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksRUFBRSxnQ0FBZ0MsQ0FBQyxDQUFDO1FBQ2hFLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGdCQUFnQixFQUFFLG1DQUFtQyxDQUFDLENBQUM7UUFDdkUsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFLDRCQUE0QixDQUFDLENBQUM7UUFDekQsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxFQUFFLCtCQUErQixDQUFDLENBQUM7UUFDL0QsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxFQUFFLGlDQUFpQyxDQUFDLENBQUM7UUFDbkUsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxFQUFFLGlDQUFpQyxDQUFDLENBQUM7UUFDbkUsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLHdCQUF3QixDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLHlCQUF5QixDQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLHlCQUF5QixDQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLHlCQUF5QixDQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLHlCQUF5QixDQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLHlCQUF5QixDQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFFLDZCQUE2QixDQUFDLENBQUM7UUFDM0QsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLDJCQUEyQixDQUFDLENBQUM7UUFDdkQsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxFQUFFLGlDQUFpQyxDQUFDLENBQUM7UUFDbkUsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsa0JBQWtCLEVBQUUscUNBQXFDLENBQUMsQ0FBQztRQUMzRSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLEVBQUUsaUNBQWlDLENBQUMsQ0FBQztRQUNuRSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsMkJBQTJCLENBQUMsQ0FBQztRQUN2RCxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUUsMkJBQTJCLENBQUMsQ0FBQztRQUN4RCxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUUsNEJBQTRCLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUUsNEJBQTRCLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUUsNEJBQTRCLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUUsNEJBQTRCLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsMkJBQTJCLENBQUMsQ0FBQztRQUN2RCxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLEVBQUUsaUNBQWlDLENBQUMsQ0FBQztRQUNuRSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsOEJBQThCLENBQUMsQ0FBQztRQUM3RCxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLEVBQUUsaUNBQWlDLENBQUMsQ0FBQztRQUNuRSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQUUsK0JBQStCLENBQUMsQ0FBQztRQUMvRCxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLEVBQUUsZ0NBQWdDLENBQUMsQ0FBQztJQUNuRSxDQUFDO0lBQ0gsZ0JBQUM7QUFBRCxDQUFDLENBckc4QixNQUFNLENBQUMsS0FBSyxHQXFHMUM7QUFyR1ksOEJBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUnRCLElBQU0sV0FBVyxHQUF1QztJQUN0RCxNQUFNLEVBQUUsS0FBSztJQUNiLE9BQU8sRUFBRSxLQUFLO0lBQ2QsR0FBRyxFQUFFLFNBQVM7Q0FDZixDQUFDO0FBRUY7SUFBa0MsZ0NBQVk7SUFhNUM7UUFBQSxZQUNFLGtCQUFNLFdBQVcsQ0FBQyxTQUNuQjtRQWRNLFdBQUssR0FBRyxHQUFHLENBQUM7UUFNWCxjQUFRLEdBQWEsRUFBRSxDQUFDO1FBQ3hCLGtCQUFZLEdBQWdDLEVBQUUsQ0FBQztRQUUvQyxlQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ2QsbUJBQWEsR0FBRyxLQUFLLENBQUM7UUFVdkIsZUFBUyxHQUFHLENBQUMsQ0FBQztRQUViLFVBQUksR0FBRyxLQUFLLENBQUM7O0lBUnJCLENBQUM7SUFVTSw2QkFBTSxHQUFiO1FBQUEsaUJBb0RDO1FBbkRDLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDakIsU0FBb0IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUF0QyxLQUFLLGFBQUUsTUFBTSxZQUF5QixDQUFDO1FBQy9DLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ25CLElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLHVGQUF1RjtRQUN2RixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxDQUFDLEVBQUUsTUFBTSxHQUFHLENBQUMsR0FBRyxHQUFHLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFDN0UsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsQ0FBQyxFQUFFLE1BQU0sR0FBRyxDQUFDLEdBQUcsR0FBRyxFQUFFLGdCQUFnQixDQUFDLENBQUM7UUFFckYscUZBQXFGO1FBQ3JGLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEdBQUc7YUFDcEIsU0FBUyxDQUNSLEtBQUssR0FBRyxDQUFDLEVBQ1QsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLEdBQUcsV0FBVyxFQUN2RSxJQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksR0FBRyxDQUFDLEVBQ3BDLElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxHQUFHLENBQUMsRUFDckMsUUFBUSxDQUNUO2FBQ0EsUUFBUSxDQUFDLElBQUksQ0FBQzthQUNkLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUVmLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRTtZQUMzQixJQUNFLEtBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLENBQUMsUUFBUSxDQUFDLEtBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUMsRUFBRSxLQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7Z0JBQ3pGLEtBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxJQUFJLEtBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUMxQztnQkFDQSxLQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQztnQkFDbEMsS0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7Z0JBQ2pCLEtBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDNUIsS0FBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO2FBQ3RCO1FBQ0gsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxXQUFXLEVBQUU7WUFDekIsS0FBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7WUFDbEIsSUFBSSxLQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxLQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksR0FBRyxDQUFDLEdBQUcsS0FBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEdBQUcsS0FBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEdBQUcsQ0FBQyxFQUFFO2dCQUMxRyxLQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxLQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsR0FBRyxLQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsR0FBRyxXQUFXLENBQUM7Z0JBQ2pGLEtBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxHQUFHLEtBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO2dCQUMxQyxLQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQzthQUNwQjtZQUVELEtBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLGFBQU0sS0FBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsUUFBUSxFQUFJLENBQUMsQ0FBQztZQUNoRSxLQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxRQUFNLEtBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLFlBQVksRUFBSSxDQUFDLENBQUM7WUFDcEUsS0FBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsUUFBTSxLQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxZQUFZLEVBQUksQ0FBQyxDQUFDO1lBQ3BFLEtBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFFBQU0sS0FBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsV0FBVyxFQUFJLENBQUMsQ0FBQztRQUNyRSxDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQztRQUM3RCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUM7UUFDN0QsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDO1FBQzdELElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQztRQUM3RCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUM7SUFDL0QsQ0FBQztJQUVNLDZCQUFNLEdBQWI7UUFBQSxpQkFtQkM7UUFsQkMsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ2IsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsWUFBWSxFQUFFLEdBQUcsRUFBRSxFQUFFO2dCQUMzRixJQUFJLENBQUMsU0FBUyxJQUFJLENBQUMsQ0FBQztnQkFDcEIsSUFBSSxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUU7b0JBQzNCLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDM0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUNwQixJQUNFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsR0FBRyxDQUFDO3dCQUN0RyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQ25CO3dCQUNBLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO3dCQUMxQixVQUFVLENBQUM7NEJBQ1QsS0FBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLEVBQUUsZ0JBQWdCLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQzt3QkFDNUQsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO3FCQUNUO2lCQUNGO2FBQ0Y7U0FDRjtJQUNILENBQUM7SUFDSCxtQkFBQztBQUFELENBQUMsQ0FuR2lDLE1BQU0sQ0FBQyxLQUFLLEdBbUc3QztBQW5HWSxvQ0FBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOekIsSUFBTSxXQUFXLEdBQXVDO0lBQ3RELE1BQU0sRUFBRSxLQUFLO0lBQ2IsT0FBTyxFQUFFLEtBQUs7SUFDZCxHQUFHLEVBQUUsTUFBTTtDQUNaLENBQUM7QUFFRjtJQUErQiw2QkFBWTtJQXlCekM7UUFBQSxZQUNFLGtCQUFNLFdBQVcsQ0FBQyxTQUNuQjtRQTFCTSxXQUFLLEdBQUcsR0FBRyxDQUFDO1FBY1gsY0FBUSxHQUFhLEVBQUUsQ0FBQztRQUN4QixrQkFBWSxHQUFnQyxFQUFFLENBQUM7UUFFdkQscUJBQWUsR0FBd0IsSUFBSSxHQUFHLENBQUM7WUFDN0MsQ0FBQyxTQUFTLEVBQUUsUUFBUSxDQUFDO1lBQ3JCLENBQUMsVUFBVSxFQUFFLFFBQVEsQ0FBQztTQUN2QixDQUFDLENBQUM7UUFFSyxlQUFTLEdBQUcsQ0FBQyxDQUFDO1FBUWQsZUFBUyxHQUFHLFVBQUMsS0FBSztZQUN4QixJQUFNLElBQUksR0FBRyxLQUFLLEdBQUcsR0FBRyxDQUFDO1lBQ3pCLElBQU0sYUFBYSxHQUFHLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUMxRCxJQUFNLEVBQUUsR0FBRyxhQUFhLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3BDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUNsQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2QsT0FBTyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsRUFBRTtvQkFDekIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQ3BCO2dCQUNELElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7b0JBQ3hCLE9BQU8sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQztpQkFDM0M7YUFDRjtZQUNELE9BQU8sRUFBRSxDQUFDO1FBQ1osQ0FBQyxDQUFDOztJQWxCRixDQUFDO0lBb0JNLDBCQUFNLEdBQWI7UUFBQSxpQkErS0M7UUE5S0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNwQixPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFcEMsU0FBb0IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUF0QyxLQUFLLGFBQUUsTUFBTSxZQUF5QixDQUFDO1FBRS9DLHVGQUF1RjtRQUN2RixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxDQUFDLEVBQUUsTUFBTSxHQUFHLENBQUMsRUFBRSxZQUFZLENBQUMsQ0FBQztRQUN2RSxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxDQUFDLEVBQUUsTUFBTSxHQUFHLENBQUMsRUFBRSxjQUFjLENBQUMsQ0FBQztRQUMzRSxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxDQUFDLEVBQUUsTUFBTSxHQUFHLENBQUMsRUFBRSxjQUFjLENBQUMsQ0FBQztRQUUzRSxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM5QixJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNoQyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUVoQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDMUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBRTFDLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsSUFBSSxHQUFHLEVBQUU7WUFDckMsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDbkQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNuQixJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNsQztRQUNELElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsSUFBSSxHQUFHLEVBQUU7WUFDcEMsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDbEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNuQixJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNsQztRQUNELElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLEVB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SSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN6QixDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLFlBQVksRUFBRTtZQUMzQixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDbkIsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUU7WUFDNUIsS0FBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDN0IsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUU7WUFDNUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN6QixDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLFlBQVksRUFBRTtZQUMzQixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDbkIsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUU7WUFDNUIsS0FBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDNUIsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUU7WUFDN0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN6QixDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLFlBQVksRUFBRTtZQUM1QixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDbkIsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUU7WUFDN0IsS0FBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDN0IsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUU7WUFDNUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN6QixDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLFlBQVksRUFBRTtZQUMzQixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDbkIsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUU7WUFDNUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUN0QixLQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsRUFBRSxlQUFlLEVBQUUsYUFBYSxFQUFFLENBQUMsQ0FBQztRQUNqRSxDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN2QyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFdEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsV0FBVyxFQUFFLFVBQUMsT0FBTyxFQUFFLFVBQVU7WUFDN0MsVUFBVSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUMvQixDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLE1BQU0sRUFBRSxVQUFDLE9BQU8sRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLEtBQUs7WUFDdEQsVUFBVSxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUM7WUFDckIsVUFBVSxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUM7WUFDckIsNEJBQTRCO1lBQzVCLElBQU0sT0FBTyxHQUFHLFVBQVUsQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUN2QywyQ0FBMkM7WUFDM0MsSUFBTSxPQUFPLEdBQUcsS0FBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUM1Qyx1Q0FBdUM7WUFDdkMsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxFQUFFO2dCQUNwRCxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO2dCQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDOUIsS0FBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQztnQkFDN0IsSUFBSSxVQUFVLENBQUMsS0FBSyxJQUFJLEVBQUUsRUFBRTtvQkFDMUIsSUFBSSxLQUFJLENBQUMsU0FBUyxJQUFJLENBQUMsRUFBRTt3QkFDdkIsS0FBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztxQkFDdkI7aUJBQ0Y7YUFDRjtpQkFBTTtnQkFDTCw4QkFBOEI7Z0JBQzlCLGdDQUFnQztnQkFDaEMsS0FBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsQ0FBQztnQkFDOUIsS0FBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7YUFDcEI7UUFDSCxDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLFNBQVMsRUFBRSxVQUFDLE9BQU8sRUFBRSxVQUFVO1lBQzNDLFVBQVUsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUN6QixDQUFDLENBQUMsQ0FBQztRQUVILDhGQUE4RjtRQUM5RixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFFekQsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDO1FBQzdELElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQztJQUNoRSxDQUFDO0lBRU0sMEJBQU0sR0FBYixjQUF1QixDQUFDO0lBRWhCLCtCQUFXLEdBQW5CLFVBQW9CLFVBQThCO1FBQ2hELElBQUksVUFBVSxDQUFDLEtBQUssR0FBRyxFQUFFLEVBQUU7WUFDekIsVUFBVSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxDQUFDO1NBQzVDO0lBQ0gsQ0FBQztJQUVPLGdDQUFZLEdBQXBCLFVBQXFCLFVBQThCO1FBQ2pELElBQUksVUFBVSxDQUFDLEtBQUssR0FBRyxDQUFDLEVBQUU7WUFDeEIsVUFBVSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxDQUFDO1NBQzVDO0lBQ0gsQ0FBQztJQUVPLHdCQUFJLEdBQVosVUFBYSxVQUE4QjtRQUN6QyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFO1lBQ25ELE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztZQUM5QixxQkFBcUI7WUFDckIsSUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNyRCxJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQy9ELE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDbkIsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3pDO0lBQ0gsQ0FBQztJQUNILGdCQUFDO0FBQUQsQ0FBQyxDQXhQOEIsTUFBTSxDQUFDLEtBQUssR0F3UDFDO0FBeFBZLDhCQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ050QixJQUFNLFdBQVcsR0FBdUM7SUFDdEQsTUFBTSxFQUFFLEtBQUs7SUFDYixPQUFPLEVBQUUsS0FBSztJQUNkLEdBQUcsRUFBRSxLQUFLO0NBQ1gsQ0FBQztBQUVGO0lBQThCLDRCQUFZO0lBWXhDO1FBQUEsWUFDRSxrQkFBTSxXQUFXLENBQUMsU0FDbkI7UUFiTSxXQUFLLEdBQUcsR0FBRyxDQUFDO1FBS1gsY0FBUSxHQUFhLEVBQUUsQ0FBQztRQUN4QixrQkFBWSxHQUFnQyxFQUFFLENBQUM7UUFFL0MsZUFBUyxHQUFHLENBQUMsQ0FBQztRQUNkLG1CQUFhLEdBQUcsS0FBSyxDQUFDO1FBVXZCLFlBQU0sR0FBRyxDQUFDLENBQUM7UUFDWCxjQUFRLEdBQUcsQ0FBQyxDQUFDOztJQVBwQixDQUFDO0lBU00seUJBQU0sR0FBYjtRQUFBLGlCQXNDQztRQXJDQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2IsU0FBb0IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUF0QyxLQUFLLGFBQUUsTUFBTSxZQUF5QixDQUFDO1FBQy9DLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1FBQzNCLHVGQUF1RjtRQUN2RixJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxDQUFDLEVBQUUsTUFBTSxHQUFHLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN2Qix5RkFBeUY7UUFFekYsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsV0FBVyxFQUFFO1lBQ3pCLEtBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLGFBQU0sS0FBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsUUFBUSxFQUFJLENBQUMsQ0FBQztZQUNoRSxLQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxRQUFNLEtBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLFlBQVksRUFBSSxDQUFDLENBQUM7WUFDcEUsS0FBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsUUFBTSxLQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxZQUFZLEVBQUksQ0FBQyxDQUFDO1lBQ3BFLEtBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFFBQU0sS0FBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsV0FBVyxFQUFJLENBQUMsQ0FBQztRQUNyRSxDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRTtZQUMzQixJQUFJLEtBQUksQ0FBQyxRQUFRLElBQUksQ0FBQyxFQUFFO2dCQUN0QixLQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxLQUFLLEdBQUcsRUFBRSxLQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDOUM7WUFDRCxLQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQztZQUNqQixJQUFJLEtBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDeEIsS0FBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsS0FBSyxHQUFHLEVBQUUsS0FBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQzlDO1lBQ0QsSUFBSSxLQUFJLENBQUMsUUFBUSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxhQUFhLEVBQUU7Z0JBQzdDLEtBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO2dCQUMxQixRQUFRLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQztnQkFDMUIsVUFBVSxDQUFDO29CQUNULEtBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUMzQixDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7YUFDVDtRQUNILENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDO1FBQzdELElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQztRQUM3RCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUM7UUFDN0QsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDO1FBQzdELElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQztJQUMvRCxDQUFDO0lBRU0seUJBQU0sR0FBYixjQUF1QixDQUFDO0lBQzFCLGVBQUM7QUFBRCxDQUFDLENBaEU2QixNQUFNLENBQUMsS0FBSyxHQWdFekM7QUFoRVksNEJBQVE7Ozs7Ozs7Ozs7Ozs7OztBQ1RyQix3R0FBa0Q7QUFDbEQseUZBQXlDO0FBQ3pDLHlGQUF5QztBQUN6QyxxR0FBaUQ7QUFDakQseUZBQXlDO0FBQ3pDLGtHQUErQztBQUMvQyxzRkFBdUM7QUFDdkMsK0ZBQTZDO0FBQzdDLDRGQUEyQztBQUMzQywrRkFBNkM7QUFDN0MsK0ZBQTZDO0FBRTdDLGtCQUFlO0lBQ2Isc0JBQVM7SUFDVCwrQkFBYTtJQUNiLHNCQUFTO0lBQ1QsOEJBQWE7SUFDYixzQkFBUztJQUNULDRCQUFZO0lBQ1osb0JBQVE7SUFDUiwwQkFBVztJQUNYLHdCQUFVO0lBQ1YsMEJBQVc7SUFDWCwwQkFBVztDQUNaLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkJGLDBFQUEwRTtBQUUxRSxJQUFNLFdBQVcsR0FBdUM7SUFDdEQsTUFBTSxFQUFFLEtBQUs7SUFDYixPQUFPLEVBQUUsS0FBSztJQUNkLEdBQUcsRUFBRSxRQUFRO0NBQ2QsQ0FBQztBQUNGO0lBQUE7SUFFQSxDQUFDO0lBQUQseUJBQUM7QUFBRCxDQUFDO0FBQ0Q7SUFBaUMsK0JBQVk7SUFXM0M7UUFBQSxZQUNFLGtCQUFNLFdBQVcsQ0FBQyxTQUNuQjtRQVpNLFdBQUssR0FBRyxHQUFHLENBQUM7UUFPWCxlQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ2QsbUJBQWEsR0FBRyxLQUFLLENBQUM7O0lBSTlCLENBQUM7SUFNTSwwQkFBSSxHQUFYLFVBQVksSUFBd0I7UUFDbEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUMxQixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUM7SUFDOUMsQ0FBQztJQUVNLDRCQUFNLEdBQWI7UUFBQSxpQkFpR0M7UUFoR0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNoQixTQUFvQixJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQXRDLEtBQUssYUFBRSxNQUFNLFlBQXlCLENBQUM7UUFDL0MsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7UUFDbkIsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7UUFFM0IsdUZBQXVGO1FBQ3ZGLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLENBQUMsRUFBRSxNQUFNLEdBQUcsQ0FBQyxFQUFFLFlBQVksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUVuRixPQUFPLENBQUMsR0FBRyxDQUFDLGNBQVksS0FBSyxHQUFHLENBQUcsQ0FBQyxDQUFDO1FBQ3JDLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBWSxNQUFNLEdBQUcsQ0FBRyxDQUFDLENBQUM7UUFDdEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDOUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO1FBRXRELElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLEdBQUcsRUFBRSxNQUFNLEdBQUcsQ0FBQyxFQUFFLFdBQVcsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3hGLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztRQUV6QyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxHQUFHLEVBQUUsTUFBTSxHQUFHLENBQUMsRUFBRSxjQUFjLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUM5RixJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNoQyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDNUMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsR0FBRyxFQUFFLE1BQU0sR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQzVFLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztRQUVyQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDL0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQzFDLG1GQUFtRjtRQUNuRixJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM3QixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN6Qix5RkFBeUY7UUFDekYsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQ3hCLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxHQUFHLENBQUMsRUFDbkQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUNyRCxDQUFDO1FBQ0YsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQzNCLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxHQUFHLENBQUMsRUFDdEQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUNyRCxDQUFDO1FBQ0YsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQ3BCLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxHQUFHLENBQUMsRUFDdEQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUNyRCxDQUFDO1FBRUYsMElBQTBJO1FBQzFJLDhIQUE4SDtRQUM5SCxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUU7WUFDL0IsS0FBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDbkMsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxZQUFZLEVBQUU7WUFDOUIsS0FBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUM3QixDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUV4QyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxXQUFXLEVBQUUsVUFBQyxPQUFPLEVBQUUsVUFBVTtZQUM3QyxVQUFVLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQy9CLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsR0FBRzthQUM1QixTQUFTLENBQ1IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQ2pCLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxHQUFHLENBQUMsRUFDckQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLEVBQzVCLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFDaEIseUJBQWUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUMxQzthQUNBLFlBQVksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRTVDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLE1BQU0sRUFBRSxVQUFDLE9BQU8sRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLEtBQUs7WUFDdEQsMEVBQTBFO1lBQzFFLHNEQUFzRDtZQUN0RCxJQUFNLEVBQUUsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDO1lBQ3hCLElBQU0sRUFBRSxHQUFHLEtBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztZQUN0QyxJQUFNLEVBQUUsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDO1lBQ3hCLElBQU0sRUFBRSxHQUFHLEtBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztZQUV0QyxJQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO1lBQy9DLElBQU0sUUFBUSxHQUFHLFNBQVMsR0FBRyxVQUFVLENBQUM7WUFFeEMsS0FBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBRyxRQUFVLENBQUMsQ0FBQztZQUNsQyxJQUFJLFFBQVEsSUFBSSxLQUFLLEVBQUU7Z0JBQ3JCLFVBQVUsQ0FBQyxRQUFRLEdBQUcsU0FBUyxHQUFHLFVBQVUsQ0FBQzthQUM5QztRQUNILENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsU0FBUyxFQUFFLFVBQUMsT0FBTyxFQUFFLFVBQVU7WUFDM0MsVUFBVSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ3pCLENBQUMsQ0FBQyxDQUFDO1FBRUgsOEZBQThGO1FBRTlGLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQztRQUM3RCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUM7UUFFOUQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUVNLDRCQUFNLEdBQWI7UUFBQSxpQkFZQztRQVhDLHNHQUFzRztRQUN0RyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBVSxDQUFDLENBQUM7UUFFakQsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsR0FBRyxDQUFDLElBQUksRUFBRTtZQUNuQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRTtnQkFDdkIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7Z0JBQzFCLFVBQVUsQ0FBQztvQkFDVCxLQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDM0IsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO2FBQ1Q7U0FDRjtJQUNILENBQUM7SUFDSCxrQkFBQztBQUFELENBQUMsQ0F4SWdDLE1BQU0sQ0FBQyxLQUFLLEdBd0k1QztBQXhJWSxrQ0FBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYeEIsNEZBQStDO0FBRS9DLElBQU0sV0FBVyxHQUF1QztJQUN0RCxNQUFNLEVBQUUsS0FBSztJQUNiLE9BQU8sRUFBRSxLQUFLO0lBQ2QsR0FBRyxFQUFFLFVBQVU7Q0FDaEIsQ0FBQztBQUVGOztHQUVHO0FBQ0g7SUFBbUMsaUNBQVk7SUFDN0M7ZUFDRSxrQkFBTSxXQUFXLENBQUM7SUFDcEIsQ0FBQztJQUVNLDhCQUFNLEdBQWI7UUFBQSxpQkFnQ0M7UUEvQkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUN6QixJQUFJLENBQUMsR0FBRzthQUNMLElBQUksQ0FBQyxHQUFHLEVBQUUsRUFBRSxFQUFFLDhFQUE4RSxFQUFFO1lBQzdGLEtBQUssRUFBRSxTQUFTO1NBQ2pCLENBQUM7YUFDRCxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUM7UUFFbkIsSUFBSSx3QkFBVSxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLFlBQVksRUFBRTtZQUMzQyxLQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMzQixDQUFDLENBQUMsQ0FBQztRQUVILElBQUksd0JBQVUsQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxVQUFVLEVBQUU7WUFDekMsT0FBTyxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO1lBQ3ZDLGlCQUFpQixDQUFDLGlCQUFpQixFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUMsUUFBUTtnQkFDbEQsSUFBSSxRQUFRLElBQUksU0FBUyxFQUFFO29CQUN6QiwrQ0FBK0M7b0JBQy9DLGtEQUFrRDtvQkFDbEQsTUFBTSxDQUFDLGdCQUFnQixDQUFDLG1CQUFtQixFQUFFLFVBQUMsS0FBSzt3QkFDakQsSUFBSSxVQUFVLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQzt3QkFDeEIsdURBQXVEO3dCQUN2RCxJQUFJLGdCQUFnQixHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUM7d0JBQ25DLElBQUksbUJBQW1CLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQzt3QkFDckMsSUFBSSxtQkFBbUIsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDO3dCQUV0QyxJQUFJLHdCQUFVLENBQUMsS0FBSSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLGNBQU0sY0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxFQUFsQyxDQUFrQyxDQUFDLENBQUM7b0JBQ3RGLENBQUMsQ0FBQyxDQUFDO2lCQUNKO1lBQ0gsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztRQUVILElBQUksd0JBQVUsQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsY0FBTSxjQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLEVBQWxDLENBQWtDLENBQUMsQ0FBQztJQUNuRixDQUFDO0lBQ0gsb0JBQUM7QUFBRCxDQUFDLENBdENrQyxNQUFNLENBQUMsS0FBSyxHQXNDOUM7QUF0Q1ksc0NBQWE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUjFCLElBQU0sV0FBVyxHQUF1QztJQUN0RCxNQUFNLEVBQUUsS0FBSztJQUNiLE9BQU8sRUFBRSxLQUFLO0lBQ2QsR0FBRyxFQUFFLFFBQVE7Q0FDZCxDQUFDO0FBRUY7SUFBaUMsK0JBQVk7SUFnQjNDO1FBQUEsWUFDRSxrQkFBTSxXQUFXLENBQUMsU0FDbkI7UUFqQk0sV0FBSyxHQUFHLEdBQUcsQ0FBQztRQVVYLGNBQVEsR0FBYSxFQUFFLENBQUM7UUFDeEIsa0JBQVksR0FBZ0MsRUFBRSxDQUFDO1FBRS9DLGVBQVMsR0FBRyxDQUFDLENBQUM7UUFXZixnQkFBVSxHQUFHLENBQUMsQ0FBQztRQUNmLGNBQVEsR0FBRyxDQUFDLENBQUM7UUFDWixtQkFBYSxHQUFHLEtBQUssQ0FBQztRQUN0QixtQkFBYSxHQUFHLElBQUksQ0FBQzs7SUFWN0IsQ0FBQztJQVlNLDRCQUFNLEdBQWI7UUFBQSxpQkFxSUM7UUFwSUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNoQixTQUFvQixJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQXRDLEtBQUssYUFBRSxNQUFNLFlBQXlCLENBQUM7UUFDL0MsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsQ0FBQyxFQUFFLE1BQU0sR0FBRyxDQUFDLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFFdkUsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7UUFDM0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUM7UUFDcEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7UUFDbEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7UUFDMUIsdUZBQXVGO1FBRXZGLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEdBQUc7YUFDcEIsTUFBTSxDQUFDLEtBQUssR0FBRyxDQUFDLEVBQUUsTUFBTSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsR0FBRyxDQUFDLEVBQUUsU0FBUyxDQUFDO2FBQzVFLGNBQWMsRUFBRTthQUNoQixRQUFRLENBQUMsQ0FBQyxDQUFDO2FBQ1gsUUFBUSxDQUFDLEdBQUcsQ0FBQzthQUNiLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQixJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLEdBQUc7YUFDaEMsU0FBUyxDQUNSLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUNqQixJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsRUFDakIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLEVBQzVCLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUM3QixRQUFRLENBQ1Q7YUFDQSxRQUFRLENBQUMsR0FBRyxDQUFDO2FBQ2IsUUFBUSxDQUFDLENBQUMsQ0FBQzthQUNYLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQixJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLEdBQUc7YUFDaEMsU0FBUyxDQUNSLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUNqQixJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsR0FBRyxNQUFNLEdBQUcsRUFBRSxFQUMvQixJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksRUFDNUIsTUFBTSxHQUFHLEVBQUUsRUFDWCxRQUFRLENBQ1Q7YUFDQSxRQUFRLENBQUMsQ0FBQyxDQUFDO2FBQ1gsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRWpCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLEdBQUc7YUFDckIsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxFQUFFLENBQUMsRUFBRSxRQUFRLENBQUM7YUFDMUcsUUFBUSxDQUFDLENBQUMsQ0FBQzthQUNYLFFBQVEsQ0FBQyxHQUFHLENBQUM7YUFDYixZQUFZLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUU1QyxJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUM1QixHQUFHLEVBQUUsUUFBUTtZQUNiLEdBQUcsRUFBRSxLQUFLO1NBQ1gsQ0FBQyxDQUFDO1FBQ0gsS0FBSyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNwQixPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVUsS0FBSyxDQUFDLENBQUMsU0FBSSxLQUFLLENBQUMsQ0FBRyxDQUFDLENBQUM7UUFDNUMsa0RBQWtEO1FBQ2xELEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbEIsd0JBQXdCO1FBQ3hCLDhCQUE4QjtRQUU5QixJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxXQUFXLEVBQUUsVUFBQyxPQUFPLEVBQUUsVUFBVTtZQUM3QyxVQUFVLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQy9CLENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsU0FBUyxFQUFFLFVBQUMsT0FBTyxFQUFFLFVBQVU7WUFDM0MsVUFBVSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ3pCLENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRXRDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLFdBQVcsRUFBRTtZQUN6QixLQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxhQUFNLEtBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLFFBQVEsRUFBSSxDQUFDLENBQUM7WUFDaEUsS0FBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsUUFBTSxLQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxZQUFZLEVBQUksQ0FBQyxDQUFDO1lBQ3BFLEtBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFFBQU0sS0FBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsWUFBWSxFQUFJLENBQUMsQ0FBQztZQUNwRSxLQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxRQUFNLEtBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLFdBQVcsRUFBSSxDQUFDLENBQUM7UUFDckUsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsY0FBTyxDQUFDLENBQUMsQ0FBQztRQUV2QyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxNQUFNLEVBQUUsVUFBQyxPQUFPLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxLQUFLO1lBQ3RELElBQU0sR0FBRyxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUM7WUFDekIsSUFBTSxHQUFHLEdBQUcsVUFBVSxDQUFDLENBQUMsQ0FBQztZQUN6QixVQUFVLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQztZQUNyQixVQUFVLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQztZQUVyQixtQ0FBbUM7WUFDbkMsSUFBTSxHQUFHLEdBQUcsS0FBSSxDQUFDLG1CQUFtQixDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQ3JELElBQU0sR0FBRyxHQUFHLEtBQUksQ0FBQyxtQkFBbUIsQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUN0RCxJQUFNLEdBQUcsR0FBRyxLQUFJLENBQUMsbUJBQW1CLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDbkQsSUFBTSxHQUFHLEdBQUcsS0FBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUN2QyxJQUFNLEdBQUcsR0FBRyxLQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQ3RDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ25CLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ25CLElBQUksR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxFQUFFO2dCQUNqQixVQUFVLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztnQkFDbkIsVUFBVSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7YUFDcEI7WUFDRCxJQUFJLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsRUFBRTtnQkFDakIsVUFBVSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7Z0JBQ25CLFVBQVUsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO2FBQ3BCO1lBQ0QsSUFBSSxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEVBQUU7Z0JBQ2pCLFVBQVUsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO2dCQUNuQixVQUFVLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQzthQUNwQjtZQUNELElBQUksR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxFQUFFO2dCQUNqQixVQUFVLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztnQkFDbkIsVUFBVSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7YUFDcEI7WUFFRCw0Q0FBNEM7WUFDNUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxHQUFHLEtBQUksQ0FBQyxtQkFBbUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsYUFBYSxFQUFFO2dCQUM3RSxLQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztnQkFDMUIsS0FBSSxDQUFDLFFBQVEsSUFBSSxDQUFDLENBQUM7Z0JBQ25CLEtBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUcsS0FBSSxDQUFDLFFBQVUsQ0FBQyxDQUFDO2dCQUN2QyxLQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsSUFBSSxFQUFFLENBQUM7YUFDbkM7WUFDRCxJQUFJLEdBQUcsQ0FBQyxDQUFDLEdBQUcsS0FBSSxDQUFDLG1CQUFtQixDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUMsSUFBSSxLQUFJLENBQUMsYUFBYSxFQUFFO2dCQUN6RSxLQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztnQkFDM0IsS0FBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBRyxLQUFJLENBQUMsUUFBVSxDQUFDLENBQUM7YUFDeEM7WUFFRCxhQUFhO1lBQ2IsSUFBSSxLQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsSUFBSSxLQUFJLENBQUMsYUFBYSxJQUFJLEtBQUssRUFBRTtnQkFDcEQsS0FBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7Z0JBQzFCLFVBQVUsQ0FBQztvQkFDVCxLQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDM0IsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO2FBQ1Q7UUFDSCxDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQztRQUM3RCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUM7UUFDN0QsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDO1FBQzdELElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQztRQUM3RCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUM7UUFDN0QsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBRyxJQUFJLENBQUMsUUFBVSxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVNLDRCQUFNLEdBQWIsY0FBdUIsQ0FBQztJQUMxQixrQkFBQztBQUFELENBQUMsQ0F0S2dDLE1BQU0sQ0FBQyxLQUFLLEdBc0s1QztBQXRLWSxrQ0FBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOeEIsSUFBTSxXQUFXLEdBQXVDO0lBQ3RELE1BQU0sRUFBRSxLQUFLO0lBQ2IsT0FBTyxFQUFFLEtBQUs7SUFDZCxHQUFHLEVBQUUsUUFBUTtDQUNkLENBQUM7QUFFRjtJQUFpQywrQkFBWTtJQWMzQztRQUFBLFlBQ0Usa0JBQU0sV0FBVyxDQUFDLFNBQ25CO1FBZk0sV0FBSyxHQUFHLEdBQUcsQ0FBQztRQVFYLGNBQVEsR0FBYSxFQUFFLENBQUM7UUFDeEIsa0JBQVksR0FBZ0MsRUFBRSxDQUFDO1FBRS9DLGVBQVMsR0FBRyxDQUFDLENBQUM7UUFXZixnQkFBVSxHQUFHLENBQUMsQ0FBQztRQUNmLGNBQVEsR0FBRyxDQUFDLENBQUM7UUFDWixtQkFBYSxHQUFHLEtBQUssQ0FBQzs7SUFUOUIsQ0FBQztJQVdNLDRCQUFNLEdBQWI7UUFBQSxpQkErR0M7UUE5R0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNoQixTQUFvQixJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQXRDLEtBQUssYUFBRSxNQUFNLFlBQXlCLENBQUM7UUFDL0MsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7UUFDM0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUM7UUFDcEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7UUFDbEIsdUZBQXVGO1FBQ3ZGLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLENBQUMsRUFBRSxNQUFNLEdBQUcsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ3JFLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLENBQUMsRUFBRSxNQUFNLEdBQUcsQ0FBQyxFQUFFLGNBQWMsQ0FBQyxDQUFDO1FBQ3JFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRTFCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEdBQUc7YUFDcEIsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQUUsY0FBYyxDQUFDO2FBQ3pELGNBQWMsRUFBRTthQUNoQixRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDZixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxHQUFHO2FBQ3RCLFNBQVMsQ0FDUixJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksR0FBRyxDQUFDLEVBQzlDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsRUFDdkYsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQ25DLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUNyQyxRQUFRLENBQ1Q7YUFDQSxRQUFRLENBQUMsQ0FBQyxDQUFDO2FBQ1gsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRWpCLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQzVCLEdBQUcsRUFBRSxRQUFRO1lBQ2IsR0FBRyxFQUFFLEtBQUs7U0FDWCxDQUFDLENBQUM7UUFDSCxLQUFLLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBVSxLQUFLLENBQUMsQ0FBQyxTQUFJLEtBQUssQ0FBQyxDQUFHLENBQUMsQ0FBQztRQUM1QyxrREFBa0Q7UUFDbEQsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNsQix3QkFBd0I7UUFDeEIsSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FDOUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLEVBQzFCLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQyxFQUMxQixJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksRUFDOUIsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQ2hDLENBQUM7UUFDRiw4QkFBOEI7UUFDOUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFPLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxTQUFJLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBRyxDQUFDLENBQUM7UUFDN0MsSUFBSSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN4Riw0QkFBNEI7UUFDNUIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxHQUFHLENBQUMsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLDhCQUE4QjtRQUM1SCxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLFNBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFHLENBQUMsQ0FBQztRQUM3QyxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQVcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFNBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFHLENBQUMsQ0FBQztRQUN6RCxPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFpQixJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsU0FBSSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUcsQ0FBQyxDQUFDO1FBRTNFLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLFdBQVcsRUFBRSxVQUFDLE9BQU8sRUFBRSxVQUFVO1lBQzdDLFVBQVUsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDL0IsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxTQUFTLEVBQUUsVUFBQyxPQUFPLEVBQUUsVUFBVTtZQUMzQyxVQUFVLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDekIsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFdEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsV0FBVyxFQUFFO1lBQ3pCLEtBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLGFBQU0sS0FBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsUUFBUSxFQUFJLENBQUMsQ0FBQztZQUNoRSxLQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxRQUFNLEtBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLFlBQVksRUFBSSxDQUFDLENBQUM7WUFDcEUsS0FBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsUUFBTSxLQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxZQUFZLEVBQUksQ0FBQyxDQUFDO1lBQ3BFLEtBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFFBQU0sS0FBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsV0FBVyxFQUFJLENBQUMsQ0FBQztRQUNyRSxDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxjQUFPLENBQUMsQ0FBQyxDQUFDO1FBRXZDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLE1BQU0sRUFBRSxVQUFDLE9BQU8sRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLEtBQUs7WUFDdEQsMEVBQTBFO1lBQzFFLHNEQUFzRDtZQUV0RCxVQUFVLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQztZQUNyQixVQUFVLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQztZQUNyQixLQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FDeEIsS0FBSyxHQUFHLEtBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxHQUFHLENBQUMsRUFDckMsS0FBSyxHQUFHLEtBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxHQUFHLENBQUMsR0FBRyxLQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FDL0UsQ0FBQztZQUNGLEtBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFlBQVUsS0FBTyxDQUFDLENBQUM7WUFDdEMsS0FBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsUUFBTSxLQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsQ0FBRyxDQUFDLENBQUM7WUFDcEUsSUFDRSxLQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsQ0FBQyxHQUFHLEtBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUM7Z0JBQ3BFLEtBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUMsUUFBUSxDQUFDLEtBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLEtBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQ3BFO2dCQUNBLElBQU0sQ0FBQyxHQUFHLEtBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLEtBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUN2QyxJQUFNLENBQUMsR0FBRyxLQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxLQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDdkMsS0FBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQ1gsS0FBSSxDQUFDLFNBQVMsRUFDZCxDQUFDLEVBQ0QsQ0FBQyxDQUdGLENBQUM7Z0JBQ0YsS0FBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO2dCQUNsQixJQUFJLEtBQUksQ0FBQyxVQUFVLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSSxDQUFDLGFBQWEsRUFBRTtvQkFDakQsS0FBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7b0JBQzFCLFFBQVEsQ0FBQyxNQUFNLEdBQUcsVUFBVSxDQUFDO29CQUM3QixVQUFVLENBQUM7d0JBQ1QsS0FBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBQzNCLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztpQkFDVDthQUNGO1FBQ0gsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUM7UUFDN0QsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDO1FBQzdELElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQztRQUM3RCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUM7UUFDN0QsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDO0lBQy9ELENBQUM7SUFFTSw0QkFBTSxHQUFiLGNBQXVCLENBQUM7SUFDMUIsa0JBQUM7QUFBRCxDQUFDLENBN0lnQyxNQUFNLENBQUMsS0FBSyxHQTZJNUM7QUE3SVksa0NBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUnhCLDBFQUEwRTtBQUUxRSxJQUFNLFdBQVcsR0FBdUM7SUFDdEQsTUFBTSxFQUFFLEtBQUs7SUFDYixPQUFPLEVBQUUsS0FBSztJQUNkLEdBQUcsRUFBRSxNQUFNO0NBQ1osQ0FBQztBQUNGO0lBQUE7SUFFQSxDQUFDO0lBQUQseUJBQUM7QUFBRCxDQUFDO0FBQ0Q7SUFBK0IsNkJBQVk7SUFpQnpDO1FBQUEsWUFDRSxrQkFBTSxXQUFXLENBQUMsU0FDbkI7UUFsQk0sV0FBSyxHQUFHLEdBQUcsQ0FBQztRQVNYLGNBQVEsR0FBYSxFQUFFLENBQUM7UUFDeEIsa0JBQVksR0FBZ0MsRUFBRSxDQUFDO1FBRS9DLGVBQVMsR0FBRyxDQUFDLENBQUM7UUFDZCxlQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ2QsbUJBQWEsR0FBRyxLQUFLLENBQUM7O0lBSTlCLENBQUM7SUFNTSx3QkFBSSxHQUFYLFVBQVksSUFBd0I7UUFDbEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7SUFDMUMsQ0FBQztJQUVNLDBCQUFNLEdBQWI7UUFBQSxpQkF3R0M7UUF2R0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNkLFNBQW9CLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBdEMsS0FBSyxhQUFFLE1BQU0sWUFBeUIsQ0FBQztRQUMvQyxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztRQUNuQixJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztRQUNuQixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztRQUUzQix1RkFBdUY7UUFDdkYsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsQ0FBQyxFQUFFLE1BQU0sR0FBRyxDQUFDLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFDdkUsNkVBQTZFO1FBQzdFLDZFQUE2RTtRQUU3RSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxDQUFDLEVBQUUsTUFBTSxHQUFHLENBQUMsRUFBRSxjQUFjLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN2RixJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUU7WUFDN0IsS0FBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDNUIsaUJBQWlCLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQyxRQUFRO2dCQUNsRCxLQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDN0IsSUFBSSxRQUFRLElBQUksU0FBUyxFQUFFO29CQUN6QiwrQ0FBK0M7b0JBQy9DLGtEQUFrRDtvQkFDbEQsTUFBTSxDQUFDLGdCQUFnQixDQUFDLG1CQUFtQixFQUFFLFVBQUMsS0FBSzt3QkFDakQsSUFBTSxVQUFVLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQzt3QkFDMUIsdURBQXVEO3dCQUN2RCxJQUFNLGdCQUFnQixHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUM7d0JBQ3JDLElBQU0sbUJBQW1CLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQzt3QkFDdkMsSUFBTSxtQkFBbUIsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDO3dCQUV4QyxLQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxtQkFBbUIsR0FBRyxFQUFFLENBQUM7b0JBQy9DLENBQUMsQ0FBQyxDQUFDO2lCQUNKO1lBQ0gsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztRQUVILE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBWSxLQUFLLEdBQUcsQ0FBRyxDQUFDLENBQUM7UUFDckMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFZLE1BQU0sR0FBRyxDQUFHLENBQUMsQ0FBQztRQUN0QyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM5QixJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7UUFFdEQsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsR0FBRyxFQUFFLE1BQU0sR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3pGLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzNCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMvQixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDdkMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDM0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFMUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFO1lBQzVCLEtBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2hDLENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsWUFBWSxFQUFFO1lBQzNCLEtBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDMUIsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFckMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsV0FBVyxFQUFFLFVBQUMsT0FBTyxFQUFFLFVBQVU7WUFDN0MsVUFBVSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUMvQixDQUFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLEdBQUc7YUFDNUIsU0FBUyxDQUNSLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUNqQixJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsR0FBRyxDQUFDLEVBQ3JELElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxFQUM1QixFQUFFLElBQUksQ0FBQyxTQUFTLEVBQ2hCLHlCQUFlLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FDckM7YUFDQSxZQUFZLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUU1QyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxNQUFNLEVBQUUsVUFBQyxPQUFPLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxLQUFLO1lBQ3RELDBFQUEwRTtZQUMxRSxzREFBc0Q7WUFDdEQsSUFBTSxFQUFFLEdBQUcsVUFBVSxDQUFDLENBQUMsQ0FBQztZQUN4QixJQUFNLEVBQUUsR0FBRyxLQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7WUFDdEMsSUFBTSxFQUFFLEdBQUcsVUFBVSxDQUFDLENBQUMsQ0FBQztZQUN4QixJQUFNLEVBQUUsR0FBRyxLQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7WUFFdEMsSUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztZQUMvQyxJQUFNLFFBQVEsR0FBRyxTQUFTLEdBQUcsVUFBVSxDQUFDO1lBRXhDLEtBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUcsS0FBSSxDQUFDLFNBQVcsQ0FBQyxDQUFDO1lBQ3hDLElBQUksUUFBUSxJQUFJLElBQUksQ0FBQyxFQUFFLElBQUksUUFBUSxJQUFJLEtBQUssRUFBRTtnQkFDNUMsVUFBVSxDQUFDLFFBQVEsR0FBRyxTQUFTLEdBQUcsVUFBVSxDQUFDO2FBQzlDO1lBRUQ7Ozs7OztlQU1HO1FBQ0wsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxTQUFTLEVBQUUsVUFBQyxPQUFPLEVBQUUsVUFBVTtZQUMzQyxVQUFVLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDekIsQ0FBQyxDQUFDLENBQUM7UUFFSCw4RkFBOEY7UUFDOUYsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBRXpELElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQztRQUM3RCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUM7UUFFOUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUVNLDBCQUFNLEdBQWI7UUFBQSxpQkFtQkM7UUFsQkMsc0dBQXNHO1FBQ3RHLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFVLENBQUMsQ0FBQztRQUM5QyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxHQUFHLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxHQUFHLENBQUMsR0FBRyxFQUFFO1lBQzlELElBQUksSUFBSSxDQUFDLFNBQVMsSUFBSSxDQUFDLEVBQUU7Z0JBQ3ZCLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO2FBQ3BCO1NBQ0Y7YUFBTTtZQUNMLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1NBQ3BCO1FBQ0QsSUFBSSxJQUFJLENBQUMsU0FBUyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsR0FBRyxHQUFHLEVBQUU7WUFDbkcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLEdBQUcsR0FBRyxDQUFDO1NBQy9FO2FBQU0sSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQzFHLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO1lBQzFCLFFBQVEsQ0FBQyxNQUFNLEdBQU0sSUFBSSxDQUFDLFVBQVUsT0FBSSxDQUFDO1lBQ3pDLFVBQVUsQ0FBQztnQkFDVCxLQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUMzQixDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDVDtJQUNILENBQUM7SUFDSCxnQkFBQztBQUFELENBQUMsQ0EzSjhCLE1BQU0sQ0FBQyxLQUFLLEdBMkoxQztBQTNKWSw4QkFBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUdEIsSUFBTSxXQUFXLEdBQXVDO0lBQ3RELE1BQU0sRUFBRSxLQUFLO0lBQ2IsT0FBTyxFQUFFLEtBQUs7SUFDZCxHQUFHLEVBQUUsT0FBTztDQUNiLENBQUM7QUFFRjtJQUFnQyw4QkFBWTtJQTBCMUM7UUFBQSxZQUNFLGtCQUFNLFdBQVcsQ0FBQyxTQUNuQjtRQTNCTSxXQUFLLEdBQUcsR0FBRyxDQUFDO1FBU1gsY0FBUSxHQUFhLEVBQUUsQ0FBQztRQUN4QixrQkFBWSxHQUFnQyxFQUFFLENBQUM7UUFFL0MsZUFBUyxHQUFHLENBQUMsQ0FBQztRQUNkLGdCQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQ2YsbUJBQWEsR0FBRyxLQUFLLENBQUM7UUFDdEIsT0FBQyxHQUFHLENBQUMsQ0FBQztRQUNOLGdCQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQ2YsVUFBSSxHQUFHLENBQUMsQ0FBQztRQUNULFVBQUksR0FBRyxDQUFDLENBQUM7UUFDVCxVQUFJLEdBQUcsQ0FBQyxDQUFDO1FBQ1QsVUFBSSxHQUFHLENBQUMsQ0FBQztRQUNULFVBQUksR0FBRyxDQUFDLENBQUM7UUFDVCxVQUFJLEdBQUcsQ0FBQyxDQUFDO1FBQ1QsZUFBUyxHQUFHLEVBQUUsQ0FBQzs7SUFJdkIsQ0FBQztJQVNNLHlCQUFJLEdBQVg7UUFDRSxJQUFJLENBQUMsVUFBVSxHQUFHLFFBQVEsQ0FBQztJQUM3QixDQUFDO0lBRU0sMkJBQU0sR0FBYjtRQUFBLGlCQWtKQztRQWpKQyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2YsU0FBb0IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUF0QyxLQUFLLGFBQUUsTUFBTSxZQUF5QixDQUFDO1FBQy9DLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ25CLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1FBQzNCLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ1gsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7UUFFckIsdUZBQXVGO1FBQ3ZGLHlFQUF5RTtRQUN6RSw2RUFBNkU7UUFDN0UsNkVBQTZFO1FBRTdFLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLENBQUMsRUFBRSxNQUFNLEdBQUcsQ0FBQyxFQUFFLGNBQWMsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3ZGLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRTtZQUM3QixLQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUM1QixLQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQztZQUNkLEtBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDO1lBQ2QsS0FBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUM7WUFDZCxLQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQztZQUNkLEtBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDO1lBQ2QsS0FBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUM7WUFDZCxJQUFJLE1BQU0sQ0FBQyxzQkFBc0IsRUFBRTtnQkFDakMsZ0ZBQWdGO2FBQ2pGO1lBRUQsSUFBSSxNQUFNLENBQUMsaUJBQWlCLEVBQUU7Z0JBQzVCLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjLEVBQUUsVUFBQyxLQUFLO29CQUM1QyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUNuQixJQUFJLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQyxHQUFHLEtBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDLEdBQUcsS0FBSSxDQUFDLFNBQVMsRUFBRTt3QkFDdkYsS0FBSSxDQUFDLENBQUMsRUFBRSxDQUFDO3FCQUNWO3lCQUFNLElBQUksS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDLEdBQUcsS0FBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUMsR0FBRyxLQUFJLENBQUMsU0FBUyxFQUFFO3dCQUM5RixLQUFJLENBQUMsQ0FBQyxFQUFFLENBQUM7cUJBQ1Y7eUJBQU0sSUFBSSxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUMsR0FBRyxLQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQyxHQUFHLEtBQUksQ0FBQyxTQUFTLEVBQUU7d0JBQzlGLEtBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQztxQkFDVjtvQkFFRCxPQUFPO29CQUNQLElBQUksS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDLEdBQUcsS0FBSSxDQUFDLElBQUksRUFBRTt3QkFDcEMsS0FBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztxQkFDbEM7b0JBQ0QsSUFBSSxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUMsR0FBRyxLQUFJLENBQUMsSUFBSSxFQUFFO3dCQUNwQyxLQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO3FCQUNsQztvQkFDRCxJQUFJLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQyxHQUFHLEtBQUksQ0FBQyxJQUFJLEVBQUU7d0JBQ3BDLEtBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7cUJBQ2xDO29CQUNELElBQUksS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDLEdBQUcsS0FBSSxDQUFDLElBQUksRUFBRTt3QkFDcEMsS0FBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztxQkFDbEM7b0JBQ0QsSUFBSSxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUMsR0FBRyxLQUFJLENBQUMsSUFBSSxFQUFFO3dCQUNwQyxLQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO3FCQUNsQztvQkFDRCxJQUFJLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQyxHQUFHLEtBQUksQ0FBQyxJQUFJLEVBQUU7d0JBQ3BDLEtBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7cUJBQ2xDO29CQUNELEtBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLE9BQUssS0FBSSxDQUFDLElBQUksU0FBSSxLQUFJLENBQUMsSUFBTSxDQUFDLENBQUM7b0JBQ2xELEtBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLE9BQUssS0FBSSxDQUFDLElBQUksU0FBSSxLQUFJLENBQUMsSUFBTSxDQUFDLENBQUM7b0JBQ2xELEtBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLE9BQUssS0FBSSxDQUFDLElBQUksU0FBSSxLQUFJLENBQUMsSUFBTSxDQUFDLENBQUM7b0JBQ2xELEtBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLE9BQUssS0FBSSxDQUFDLENBQUMsU0FBSSxLQUFJLENBQUMsVUFBWSxDQUFDLENBQUM7b0JBQ3JELEtBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFlBQVUsS0FBSSxDQUFDLFVBQVksQ0FBQyxDQUFDO2dCQUNsRCxDQUFDLENBQUMsQ0FBQzthQUNKO1lBRUQsaUJBQWlCLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQyxRQUFRO2dCQUNsRCxLQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDN0IsTUFBTSxDQUFDLGdCQUFnQixDQUFDLGNBQWMsRUFBRSxVQUFDLEtBQUs7b0JBQzVDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQ25CLElBQUksS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDLEdBQUcsS0FBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUMsR0FBRyxLQUFJLENBQUMsU0FBUyxFQUFFO3dCQUN2RixLQUFJLENBQUMsQ0FBQyxFQUFFLENBQUM7cUJBQ1Y7eUJBQU0sSUFBSSxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUMsR0FBRyxLQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQyxHQUFHLEtBQUksQ0FBQyxTQUFTLEVBQUU7d0JBQzlGLEtBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQztxQkFDVjt5QkFBTSxJQUFJLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQyxHQUFHLEtBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDLEdBQUcsS0FBSSxDQUFDLFNBQVMsRUFBRTt3QkFDOUYsS0FBSSxDQUFDLENBQUMsRUFBRSxDQUFDO3FCQUNWO29CQUVELE9BQU87b0JBQ1AsSUFBSSxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUMsR0FBRyxLQUFJLENBQUMsSUFBSSxFQUFFO3dCQUNwQyxLQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO3FCQUNsQztvQkFDRCxJQUFJLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQyxHQUFHLEtBQUksQ0FBQyxJQUFJLEVBQUU7d0JBQ3BDLEtBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7cUJBQ2xDO29CQUNELElBQUksS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDLEdBQUcsS0FBSSxDQUFDLElBQUksRUFBRTt3QkFDcEMsS0FBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztxQkFDbEM7b0JBQ0QsSUFBSSxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUMsR0FBRyxLQUFJLENBQUMsSUFBSSxFQUFFO3dCQUNwQyxLQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO3FCQUNsQztvQkFDRCxJQUFJLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQyxHQUFHLEtBQUksQ0FBQyxJQUFJLEVBQUU7d0JBQ3BDLEtBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7cUJBQ2xDO29CQUNELElBQUksS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDLEdBQUcsS0FBSSxDQUFDLElBQUksRUFBRTt3QkFDcEMsS0FBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztxQkFDbEM7b0JBQ0QsS0FBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsT0FBSyxLQUFJLENBQUMsSUFBSSxTQUFJLEtBQUksQ0FBQyxJQUFNLENBQUMsQ0FBQztvQkFDbEQsS0FBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsT0FBSyxLQUFJLENBQUMsSUFBSSxTQUFJLEtBQUksQ0FBQyxJQUFNLENBQUMsQ0FBQztvQkFDbEQsS0FBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsT0FBSyxLQUFJLENBQUMsSUFBSSxTQUFJLEtBQUksQ0FBQyxJQUFNLENBQUMsQ0FBQztvQkFDbEQsS0FBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsT0FBSyxLQUFJLENBQUMsQ0FBQyxTQUFJLEtBQUksQ0FBQyxVQUFZLENBQUMsQ0FBQztvQkFDckQsS0FBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsWUFBVSxLQUFJLENBQUMsVUFBWSxDQUFDLENBQUM7Z0JBQ2xELENBQUMsQ0FBQyxDQUFDO1lBQ0wsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztRQUVILE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBWSxLQUFLLEdBQUcsQ0FBRyxDQUFDLENBQUM7UUFDckMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFZLE1BQU0sR0FBRyxDQUFHLENBQUMsQ0FBQztRQUV0QyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxDQUFDLEVBQUUsTUFBTSxHQUFHLENBQUMsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdkYsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDMUIsaUNBQWlDO1FBQ2pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUN2Qyw2RUFBNkU7UUFDN0UsNEJBQTRCO1FBRTVCLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRTtZQUM1QixLQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNoQyxDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLFlBQVksRUFBRTtZQUMzQixLQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQzFCLENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFO1lBQzVCLEtBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUNsQixJQUFJLEtBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxFQUFFO2dCQUN2QixLQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQzthQUNyQjtZQUNELHFEQUFxRDtRQUN2RCxDQUFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUVyQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxXQUFXLEVBQUUsVUFBQyxPQUFPLEVBQUUsVUFBVTtZQUM3QyxVQUFVLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQy9CLENBQUMsQ0FBQyxDQUFDO1FBRUgsOEZBQThGO1FBQzlGLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUV6RCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUM7UUFDN0QsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDO1FBQzdELElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQztRQUM3RCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUM7UUFDN0QsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDO1FBRTlELElBQUksQ0FBQyxNQUFNLENBQUMs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QVUiLCJmaWxlIjoiYXBwLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJhcHBcIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbXCIuL3NyYy9tYWluLnRzXCIsXCJ2ZW5kb3JzXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiaW1wb3J0ICogYXMgUGhhc2VyIGZyb20gJ3BoYXNlcic7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0R2FtZVdpZHRoID0gKHNjZW5lOiBQaGFzZXIuU2NlbmUpOiBudW1iZXIgPT4ge1xyXG4gIHJldHVybiBzY2VuZS5nYW1lLnNjYWxlLndpZHRoO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldEdhbWVIZWlnaHQgPSAoc2NlbmU6IFBoYXNlci5TY2VuZSk6IG51bWJlciA9PiB7XHJcbiAgcmV0dXJuIHNjZW5lLmdhbWUuc2NhbGUuaGVpZ2h0O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGRyaW5rVG9Db2xvck1hcDogTWFwPHN0cmluZywgbnVtYmVyPiA9IG5ldyBNYXAoW1xyXG4gIFsnYm91cmJvbicsIDB4ZGI3OTAwXSxcclxuICBbJ3Zlcm1vdXRoJywgMHg1NTAxMDNdLFxyXG5dKTtcclxuIiwiaW1wb3J0ICogYXMgUGhhc2VyIGZyb20gJ3BoYXNlcic7XHJcbmltcG9ydCBTY2VuZXMgZnJvbSAnLi9zY2VuZXMnO1xyXG5cclxuY29uc3QgZ2FtZUNvbmZpZzogUGhhc2VyLlR5cGVzLkNvcmUuR2FtZUNvbmZpZyA9IHtcclxuICB0aXRsZTogJ1NhbXBsZScsXHJcblxyXG4gIHR5cGU6IFBoYXNlci5BVVRPLFxyXG5cclxuICBzY2FsZToge1xyXG4gICAgd2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoLFxyXG4gICAgaGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHQsXHJcbiAgfSxcclxuXHJcbiAgc2NlbmU6IFNjZW5lcyxcclxuXHJcbiAgcGh5c2ljczoge1xyXG4gICAgZGVmYXVsdDogJ2FyY2FkZScsXHJcbiAgICBhcmNhZGU6IHtcclxuICAgICAgZGVidWc6IHRydWUsXHJcbiAgICB9LFxyXG4gIH0sXHJcblxyXG4gIHBhcmVudDogJ2dhbWUnLFxyXG4gIGJhY2tncm91bmRDb2xvcjogJyMwMDAwMDAnLFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdhbWUgPSBuZXcgUGhhc2VyLkdhbWUoZ2FtZUNvbmZpZyk7XHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4ge1xyXG4gIGdhbWUuc2NhbGUucmVmcmVzaCgpO1xyXG59KTtcclxuIiwiaW1wb3J0IHsgZ2V0R2FtZVdpZHRoLCBnZXRHYW1lSGVpZ2h0IH0gZnJvbSAnLi4vaGVscGVycyc7XHJcblxyXG5jb25zdCBzY2VuZUNvbmZpZzogUGhhc2VyLlR5cGVzLlNjZW5lcy5TZXR0aW5nc0NvbmZpZyA9IHtcclxuICBhY3RpdmU6IGZhbHNlLFxyXG4gIHZpc2libGU6IGZhbHNlLFxyXG4gIGtleTogJ0Jvb3QnLFxyXG59O1xyXG5cclxuLyoqXHJcbiAqIFRoZSBpbml0aWFsIHNjZW5lIHRoYXQgbG9hZHMgYWxsIG5lY2Vzc2FyeSBhc3NldHMgdG8gdGhlIGdhbWUgYW5kIGRpc3BsYXlzIGEgbG9hZGluZyBiYXIuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQm9vdFNjZW5lIGV4dGVuZHMgUGhhc2VyLlNjZW5lIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKHNjZW5lQ29uZmlnKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBwcmVsb2FkKCk6IHZvaWQge1xyXG4gICAgZG9jdW1lbnQuY29va2llID0gYG9yYW5nZT0wYDtcclxuICAgIGRvY3VtZW50LmNvb2tpZSA9IGBib3VyYm9uPTBgO1xyXG4gICAgZG9jdW1lbnQuY29va2llID0gYGljZT0wYDtcclxuICAgIGRvY3VtZW50LmNvb2tpZSA9IGB2ZXJtb3V0aD0wYDtcclxuICAgIGNvbnN0IGhhbGZXaWR0aCA9IGdldEdhbWVXaWR0aCh0aGlzKSAqIDAuNTtcclxuICAgIGNvbnN0IGhhbGZIZWlnaHQgPSBnZXRHYW1lSGVpZ2h0KHRoaXMpICogMC41O1xyXG5cclxuICAgIGNvbnN0IHByb2dyZXNzQmFySGVpZ2h0ID0gMTAwO1xyXG4gICAgY29uc3QgcHJvZ3Jlc3NCYXJXaWR0aCA9IDQwMDtcclxuXHJcbiAgICBjb25zdCBwcm9ncmVzc0JhckNvbnRhaW5lciA9IHRoaXMuYWRkLnJlY3RhbmdsZShcclxuICAgICAgaGFsZldpZHRoLFxyXG4gICAgICBoYWxmSGVpZ2h0LFxyXG4gICAgICBwcm9ncmVzc0JhcldpZHRoLFxyXG4gICAgICBwcm9ncmVzc0JhckhlaWdodCxcclxuICAgICAgMHgwMDAwMDAsXHJcbiAgICApO1xyXG4gICAgY29uc3QgcHJvZ3Jlc3NCYXIgPSB0aGlzLmFkZC5yZWN0YW5nbGUoXHJcbiAgICAgIGhhbGZXaWR0aCArIDIwIC0gcHJvZ3Jlc3NCYXJDb250YWluZXIud2lkdGggKiAwLjUsXHJcbiAgICAgIGhhbGZIZWlnaHQsXHJcbiAgICAgIDEwLFxyXG4gICAgICBwcm9ncmVzc0JhckhlaWdodCAtIDIwLFxyXG4gICAgICAweDg4ODg4OCxcclxuICAgICk7XHJcblxyXG4gICAgY29uc3QgbG9hZGluZ1RleHQgPSB0aGlzLmFkZC50ZXh0KGhhbGZXaWR0aCAtIDc1LCBoYWxmSGVpZ2h0IC0gMTAwLCAnTG9hZGluZy4uLicpLnNldEZvbnRTaXplKDI0KTtcclxuICAgIGNvbnN0IHBlcmNlbnRUZXh0ID0gdGhpcy5hZGQudGV4dChoYWxmV2lkdGggLSAyNSwgaGFsZkhlaWdodCwgJzAlJykuc2V0Rm9udFNpemUoMjQpO1xyXG4gICAgY29uc3QgYXNzZXRUZXh0ID0gdGhpcy5hZGQudGV4dChoYWxmV2lkdGggLSAyNSwgaGFsZkhlaWdodCArIDEwMCwgJycpLnNldEZvbnRTaXplKDI0KTtcclxuXHJcbiAgICB0aGlzLmxvYWQub24oJ3Byb2dyZXNzJywgKHZhbHVlKSA9PiB7XHJcbiAgICAgIHByb2dyZXNzQmFyLndpZHRoID0gKHByb2dyZXNzQmFyV2lkdGggLSAzMCkgKiB2YWx1ZTtcclxuXHJcbiAgICAgIGNvbnN0IHBlcmNlbnQgPSB2YWx1ZSAqIDEwMDtcclxuICAgICAgcGVyY2VudFRleHQuc2V0VGV4dChgJHtwZXJjZW50fSVgKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMubG9hZC5vbignZmlsZXByb2dyZXNzJywgKGZpbGUpID0+IHtcclxuICAgICAgYXNzZXRUZXh0LnNldFRleHQoZmlsZS5rZXkpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5sb2FkLm9uKCdjb21wbGV0ZScsICgpID0+IHtcclxuICAgICAgbG9hZGluZ1RleHQuZGVzdHJveSgpO1xyXG4gICAgICBwZXJjZW50VGV4dC5kZXN0cm95KCk7XHJcbiAgICAgIGFzc2V0VGV4dC5kZXN0cm95KCk7XHJcbiAgICAgIHByb2dyZXNzQmFyLmRlc3Ryb3koKTtcclxuICAgICAgcHJvZ3Jlc3NCYXJDb250YWluZXIuZGVzdHJveSgpO1xyXG5cclxuICAgICAgdGhpcy5zY2VuZS5zdGFydCgnTWFpbk1lbnUnKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMubG9hZEFzc2V0cygpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQWxsIGFzc2V0cyB0aGF0IG5lZWQgdG8gYmUgbG9hZGVkIGJ5IHRoZSBnYW1lIChzcHJpdGVzLCBpbWFnZXMsIGFuaW1hdGlvbnMsIHRpbGVzLCBtdXNpYywgZXRjKVxyXG4gICAqIHNob3VsZCBiZSBhZGRlZCB0byB0aGlzIG1ldGhvZC4gT25jZSBsb2FkZWQgaW4sIHRoZSBsb2FkZXIgd2lsbCBrZWVwIHRyYWNrIG9mIHRoZW0sIGluZGVwZWRlbnQgb2Ygd2hpY2ggc2NlbmVcclxuICAgKiBpcyBjdXJyZW50bHkgYWN0aXZlLCBzbyB0aGV5IGNhbiBiZSBhY2Nlc3NlZCBhbnl3aGVyZS5cclxuICAgKi9cclxuICBwcml2YXRlIGxvYWRBc3NldHMoKSB7XHJcbiAgICAvLyBMb2FkIHNhbXBsZSBhc3NldHNcclxuXHJcbiAgICAvLyBTb3VyY2U6IE9wZW4gR2FtZSBBcnRcclxuICAgIHRoaXMubG9hZC5pbWFnZSgndmVybW91dGh0b3AnLCAnYXNzZXRzL3Nwcml0ZXMvdmVybW91dGh0b3AyLnBuZycpO1xyXG4gICAgdGhpcy5sb2FkLmltYWdlKCd2ZXJtb3V0aHRvcG9ubHknLCAnYXNzZXRzL3Nwcml0ZXMvdmVybW91dGh0b3Bvbmx5Mi5wbmcnKTtcclxuICAgIHRoaXMubG9hZC5pbWFnZSgndmVybW91dGgnLCAnYXNzZXRzL3Nwcml0ZXMvdmVybW91dGgucG5nJyk7XHJcbiAgICB0aGlzLmxvYWQuaW1hZ2UoJ2JvdXJib250b3AnLCAnYXNzZXRzL3Nwcml0ZXMvYm91cmJvbnRvcDIucG5nJyk7XHJcbiAgICB0aGlzLmxvYWQuaW1hZ2UoJ2JvdXJib250b3Bvbmx5JywgJ2Fzc2V0cy9zcHJpdGVzL2JvdXJib250b3Bvbmx5LnBuZycpO1xyXG4gICAgdGhpcy5sb2FkLmltYWdlKCdib3VyYm9uJywgJ2Fzc2V0cy9zcHJpdGVzL2JvdXJib24ucG5nJyk7XHJcbiAgICB0aGlzLmxvYWQuaW1hZ2UoJ2VtcHR5Z2xhc3MnLCAnYXNzZXRzL3Nwcml0ZXMvZW1wdHlnbGFzcy5wbmcnKTtcclxuICAgIHRoaXMubG9hZC5pbWFnZSgnZmlsbGVkZ2xhc3MxJywgJ2Fzc2V0cy9zcHJpdGVzL2ZpbGxlZGdsYXNzMS5wbmcnKTtcclxuICAgIHRoaXMubG9hZC5pbWFnZSgnZmlsbGVkZ2xhc3MyJywgJ2Fzc2V0cy9zcHJpdGVzL2ZpbGxlZGdsYXNzMi5wbmcnKTtcclxuICAgIHRoaXMubG9hZC5pbWFnZSgnaWNlJywgJ2Fzc2V0cy9zcHJpdGVzL2ljZS5wbmcnKTtcclxuICAgIHRoaXMubG9hZC5pbWFnZSgnaWNlMScsICdhc3NldHMvc3ByaXRlcy9pY2UxLnBuZycpO1xyXG4gICAgdGhpcy5sb2FkLmltYWdlKCdpY2UyJywgJ2Fzc2V0cy9zcHJpdGVzL2ljZTIucG5nJyk7XHJcbiAgICB0aGlzLmxvYWQuaW1hZ2UoJ2ljZTMnLCAnYXNzZXRzL3Nwcml0ZXMvaWNlMy5wbmcnKTtcclxuICAgIHRoaXMubG9hZC5pbWFnZSgnaWNlNCcsICdhc3NldHMvc3ByaXRlcy9pY2U0LnBuZycpO1xyXG4gICAgdGhpcy5sb2FkLmltYWdlKCdpY2U1JywgJ2Fzc2V0cy9zcHJpdGVzL2ljZTUucG5nJyk7XHJcbiAgICB0aGlzLmxvYWQuaW1hZ2UoJ2ljZWdsYXNzJywgJ2Fzc2V0cy9zcHJpdGVzL2ljZWdsYXNzLnBuZycpO1xyXG4gICAgdGhpcy5sb2FkLmltYWdlKCdvcmFuZ2UnLCAnYXNzZXRzL3Nwcml0ZXMvb3JhbmdlLnBuZycpO1xyXG4gICAgdGhpcy5sb2FkLmltYWdlKCdvcmFuZ2VpbnNpZGUnLCAnYXNzZXRzL3Nwcml0ZXMvb3JhbmdlSW5zaWRlLnBuZycpO1xyXG4gICAgdGhpcy5sb2FkLmltYWdlKCdvcmFuZ2V3ZWRnZWdsYXNzJywgJ2Fzc2V0cy9zcHJpdGVzL29yYW5nZXdlZGdlZ2xhc3MucG5nJyk7XHJcbiAgICB0aGlzLmxvYWQuaW1hZ2UoJ2NhbmVsbGVrbmlmZScsICdhc3NldHMvc3ByaXRlcy9jYW5lbGxla25pZmUucG5nJyk7XHJcbiAgICB0aGlzLmxvYWQuaW1hZ2UoJ3NoYWtlcicsICdhc3NldHMvc3ByaXRlcy9zaGFrZXIucG5nJyk7XHJcbiAgICB0aGlzLmxvYWQuaW1hZ2UoJ3NoYWtlcjAnLCAnYXNzZXRzL3Nwcml0ZXMvc2hha2VyLnBuZycpO1xyXG4gICAgdGhpcy5sb2FkLmltYWdlKCdzaGFrZXIxJywgJ2Fzc2V0cy9zcHJpdGVzL3NoYWtlcjEucG5nJyk7XHJcbiAgICB0aGlzLmxvYWQuaW1hZ2UoJ3NoYWtlcjInLCAnYXNzZXRzL3Nwcml0ZXMvc2hha2VyMi5wbmcnKTtcclxuICAgIHRoaXMubG9hZC5pbWFnZSgnc2hha2VyMycsICdhc3NldHMvc3ByaXRlcy9zaGFrZXIzLnBuZycpO1xyXG4gICAgdGhpcy5sb2FkLmltYWdlKCdtdWRkbGVyJywgJ2Fzc2V0cy9zcHJpdGVzL211ZGRsZXIucG5nJyk7XHJcbiAgICB0aGlzLmxvYWQuaW1hZ2UoJ2p1aWNlcicsICdhc3NldHMvc3ByaXRlcy9qdWljZXIucG5nJyk7XHJcbiAgICB0aGlzLmxvYWQuaW1hZ2UoJ2p1aWNlcmJvdHRvbScsICdhc3NldHMvc3ByaXRlcy9qdWljZXJib3R0b20ucG5nJyk7XHJcbiAgICB0aGlzLmxvYWQuaW1hZ2UoJ2p1aWNlcnRvcCcsICdhc3NldHMvc3ByaXRlcy9qdWljZXJ0b3AucG5nJyk7XHJcbiAgICB0aGlzLmxvYWQuaW1hZ2UoJ2p1aWNlcm9yYW5nZScsICdhc3NldHMvc3ByaXRlcy9qdWljZXJvcmFuZ2UucG5nJyk7XHJcbiAgICB0aGlzLmxvYWQuaW1hZ2UoJ2p1aWNlcmxpbWUnLCAnYXNzZXRzL3Nwcml0ZXMvanVpY2VybGltZS5wbmcnKTtcclxuICAgIHRoaXMubG9hZC5pbWFnZSgnanVpY2VybGVtb24nLCAnYXNzZXRzL3Nwcml0ZXMvanVpY2VybGVtb24ucG5nJyk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IElucHV0LCBHYW1lT2JqZWN0cyB9IGZyb20gJ3BoYXNlcic7XHJcbmltcG9ydCB7IGdldEdhbWVXaWR0aCwgZ2V0R2FtZUhlaWdodCwgZHJpbmtUb0NvbG9yTWFwIH0gZnJvbSAnLi4vaGVscGVycyc7XHJcblxyXG5jb25zdCBzY2VuZUNvbmZpZzogUGhhc2VyLlR5cGVzLlNjZW5lcy5TZXR0aW5nc0NvbmZpZyA9IHtcclxuICBhY3RpdmU6IGZhbHNlLFxyXG4gIHZpc2libGU6IGZhbHNlLFxyXG4gIGtleTogJ0JvdXJib24nLFxyXG59O1xyXG5cclxuZXhwb3J0IGNsYXNzIEJvdXJib25TY2VuZSBleHRlbmRzIFBoYXNlci5TY2VuZSB7XHJcbiAgcHVibGljIHNwZWVkID0gMjAwO1xyXG5cclxuICBwcml2YXRlIGN1cnNvcktleXM6IFBoYXNlci5UeXBlcy5JbnB1dC5LZXlib2FyZC5DdXJzb3JLZXlzO1xyXG4gIHByaXZhdGUgYm91cmJvblRvcDogUGhhc2VyLkdhbWVPYmplY3RzLlNwcml0ZTtcclxuICBwcml2YXRlIGJvdXJib25Ub3BPbmx5OiBQaGFzZXIuR2FtZU9iamVjdHMuU3ByaXRlO1xyXG5cclxuICBwcml2YXRlIGNvbnRlbnRzOiBzdHJpbmdbXSA9IFtdO1xyXG4gIHByaXZhdGUgZ2xhc3NGaWxsZXJzOiBQaGFzZXIuR2FtZU9iamVjdHMuU3ByaXRlW10gPSBbXTtcclxuXHJcbiAgcHJpdmF0ZSBpc1BvdXJpbmcgPSAwO1xyXG4gIHByaXZhdGUgdHJhbnNpdGlvbmluZyA9IGZhbHNlO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKHNjZW5lQ29uZmlnKTtcclxuICB9XHJcbiAgcHVibGljIHRleHQxOiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dDtcclxuICBwdWJsaWMgdGV4dDI6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0O1xyXG4gIHB1YmxpYyB0ZXh0MzogUGhhc2VyLkdhbWVPYmplY3RzLlRleHQ7XHJcbiAgcHVibGljIHRleHQ0OiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dDtcclxuICBwdWJsaWMgdGV4dDU6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0O1xyXG4gIHB1YmxpYyB1bnNjcmV3ZWQgPSAwO1xyXG4gIHB1YmxpYyBsaWRSZWN0OiBQaGFzZXIuR2FtZU9iamVjdHMuUmVjdGFuZ2xlO1xyXG4gIHByaXZhdGUgaGVsZCA9IGZhbHNlO1xyXG5cclxuICBwdWJsaWMgY3JlYXRlKCk6IHZvaWQge1xyXG4gICAgY29uc29sZS5sb2coJ0JvdXJib24nKTtcclxuICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCB9ID0gdGhpcy5zeXMuZ2FtZS5jYW52YXM7XHJcbiAgICB0aGlzLnVuc2NyZXdlZCA9IDA7XHJcbiAgICB0aGlzLmhlbGQgPSBmYWxzZTtcclxuICAgIC8vIEFkZCBhIHBsYXllciBzcHJpdGUgdGhhdCBjYW4gYmUgbW92ZWQgYXJvdW5kLiBQbGFjZSBoaW0gaW4gdGhlIG1pZGRsZSBvZiB0aGUgc2NyZWVuLlxyXG4gICAgdGhpcy5ib3VyYm9uVG9wID0gdGhpcy5hZGQuc3ByaXRlKHdpZHRoIC8gMiwgaGVpZ2h0IC8gMiArIDMwMCwgJ2JvdXJib250b3AnKTtcclxuICAgIHRoaXMuYm91cmJvblRvcE9ubHkgPSB0aGlzLmFkZC5zcHJpdGUod2lkdGggLyAyLCBoZWlnaHQgLyAyICsgMzAwLCAnYm91cmJvbnRvcG9ubHknKTtcclxuXHJcbiAgICAvL2xldCByZWN0ID0gbmV3IFBoYXNlci5HYW1lT2JqZWN0cy5SZWN0YW5nbGUod2lkdGggLyAyLCBoZWlnaHQgKiAwLjA2OTAzMjI1OCwgMCwgMCk7XHJcbiAgICB0aGlzLmxpZFJlY3QgPSB0aGlzLmFkZFxyXG4gICAgICAucmVjdGFuZ2xlKFxyXG4gICAgICAgIHdpZHRoIC8gMixcclxuICAgICAgICB0aGlzLmJvdXJib25Ub3BPbmx5LnkgLSB0aGlzLmJvdXJib25Ub3BPbmx5LmRpc3BsYXlIZWlnaHQgKiAwLjQzMDk2Nzc0MixcclxuICAgICAgICB0aGlzLmJvdXJib25Ub3BPbmx5LmRpc3BsYXlXaWR0aCAvIDMsXHJcbiAgICAgICAgdGhpcy5ib3VyYm9uVG9wT25seS5kaXNwbGF5SGVpZ2h0IC8gNyxcclxuICAgICAgICAweGZmZmZmZixcclxuICAgICAgKVxyXG4gICAgICAuc2V0QWxwaGEoMC4yNSlcclxuICAgICAgLnNldERlcHRoKDEpO1xyXG5cclxuICAgIHRoaXMuaW5wdXQub24oJ3BvaW50ZXJkb3duJywgKCkgPT4ge1xyXG4gICAgICBpZiAoXHJcbiAgICAgICAgdGhpcy5saWRSZWN0LmdldEJvdW5kcygpLmNvbnRhaW5zKHRoaXMuaW5wdXQuYWN0aXZlUG9pbnRlci54LCB0aGlzLmlucHV0LmFjdGl2ZVBvaW50ZXIueSkgJiZcclxuICAgICAgICB0aGlzLmJvdXJib25Ub3BPbmx5LnkgPT0gdGhpcy5ib3VyYm9uVG9wLnlcclxuICAgICAgKSB7XHJcbiAgICAgICAgdGhpcy50ZXh0MS5zZXRUZXh0KGBjbGlja2VkIGJveGApO1xyXG4gICAgICAgIHRoaXMuaGVsZCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5ib3VyYm9uVG9wT25seS55IC09IDE1O1xyXG4gICAgICAgIHRoaXMubGlkUmVjdC55IC09IDE1O1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmlucHV0Lm9uKCdwb2ludGVydXAnLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMuaGVsZCA9IGZhbHNlO1xyXG4gICAgICBpZiAodGhpcy5saWRSZWN0LnkgKyB0aGlzLmxpZFJlY3QuZGlzcGxheVdpZHRoIC8gMiA+IHRoaXMuYm91cmJvblRvcC55IC0gdGhpcy5ib3VyYm9uVG9wLmRpc3BsYXlIZWlnaHQgLyAyKSB7XHJcbiAgICAgICAgdGhpcy5saWRSZWN0LnkgPSB0aGlzLmJvdXJib25Ub3AueSAtIHRoaXMuYm91cmJvblRvcC5kaXNwbGF5SGVpZ2h0ICogMC40MzA5Njc3NDI7XHJcbiAgICAgICAgdGhpcy5ib3VyYm9uVG9wT25seS55ID0gdGhpcy5ib3VyYm9uVG9wLnk7XHJcbiAgICAgICAgdGhpcy51bnNjcmV3ZWQgPSAwO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLnRleHQxLnNldFRleHQoYM64OiAke3RoaXMuaW5wdXQuYWN0aXZlUG9pbnRlci5nZXRBbmdsZSgpfWApO1xyXG4gICAgICB0aGlzLnRleHQyLnNldFRleHQoYHg6ICR7dGhpcy5pbnB1dC5hY3RpdmVQb2ludGVyLmdldERpc3RhbmNlWCgpfWApO1xyXG4gICAgICB0aGlzLnRleHQzLnNldFRleHQoYHk6ICR7dGhpcy5pbnB1dC5hY3RpdmVQb2ludGVyLmdldERpc3RhbmNlWSgpfWApO1xyXG4gICAgICB0aGlzLnRleHQ0LnNldFRleHQoYGQ6ICR7dGhpcy5pbnB1dC5hY3RpdmVQb2ludGVyLmdldERpc3RhbmNlKCl9YCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLnRleHQxID0gdGhpcy5hZGQudGV4dCgxMCwgMTAsICcnLCB7IGNvbG9yOiAnIzAwZmYwMCcgfSk7XHJcbiAgICB0aGlzLnRleHQyID0gdGhpcy5hZGQudGV4dCgxMCwgMjUsICcnLCB7IGNvbG9yOiAnIzAwZmYwMCcgfSk7XHJcbiAgICB0aGlzLnRleHQzID0gdGhpcy5hZGQudGV4dCgxMCwgNDAsICcnLCB7IGNvbG9yOiAnIzAwZmYwMCcgfSk7XHJcbiAgICB0aGlzLnRleHQ0ID0gdGhpcy5hZGQudGV4dCgxMCwgNTUsICcnLCB7IGNvbG9yOiAnIzAwZmYwMCcgfSk7XHJcbiAgICB0aGlzLnRleHQ1ID0gdGhpcy5hZGQudGV4dCgxMCwgNzAsICcnLCB7IGNvbG9yOiAnIzAwZmYwMCcgfSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdXBkYXRlKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuaGVsZCkge1xyXG4gICAgICBpZiAodGhpcy5pbnB1dC5hY3RpdmVQb2ludGVyLmdldEFuZ2xlKCkgPCAwICYmIHRoaXMuaW5wdXQuYWN0aXZlUG9pbnRlci5nZXREaXN0YW5jZVkoKSA+IDUwKSB7XHJcbiAgICAgICAgdGhpcy51bnNjcmV3ZWQgKz0gMTtcclxuICAgICAgICBpZiAodGhpcy51bnNjcmV3ZWQgJSAyID09IDEpIHtcclxuICAgICAgICAgIHRoaXMuYm91cmJvblRvcE9ubHkueSAtPSAxO1xyXG4gICAgICAgICAgdGhpcy5saWRSZWN0LnkgLT0gMTtcclxuICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgdGhpcy5saWRSZWN0LnkgKyB0aGlzLmxpZFJlY3QuZGlzcGxheVdpZHRoIC8gMiA8IHRoaXMuYm91cmJvblRvcC55IC0gdGhpcy5ib3VyYm9uVG9wLmRpc3BsYXlIZWlnaHQgLyAyICYmXHJcbiAgICAgICAgICAgICF0aGlzLnRyYW5zaXRpb25pbmdcclxuICAgICAgICAgICkge1xyXG4gICAgICAgICAgICB0aGlzLnRyYW5zaXRpb25pbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICB0aGlzLnNjZW5lLnN0YXJ0KCdQb3VyJywgeyBCb3R0bGVTcHJpdGVOYW1lOiAnYm91cmJvbicgfSk7XHJcbiAgICAgICAgICAgIH0sIDUwMCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IElucHV0LCBHYW1lT2JqZWN0cyB9IGZyb20gJ3BoYXNlcic7XHJcbmltcG9ydCB7IGdldEdhbWVXaWR0aCwgZ2V0R2FtZUhlaWdodCB9IGZyb20gJy4uL2hlbHBlcnMnO1xyXG5cclxuY29uc3Qgc2NlbmVDb25maWc6IFBoYXNlci5UeXBlcy5TY2VuZXMuU2V0dGluZ3NDb25maWcgPSB7XHJcbiAgYWN0aXZlOiBmYWxzZSxcclxuICB2aXNpYmxlOiBmYWxzZSxcclxuICBrZXk6ICdHYW1lJyxcclxufTtcclxuXHJcbmV4cG9ydCBjbGFzcyBHYW1lU2NlbmUgZXh0ZW5kcyBQaGFzZXIuU2NlbmUge1xyXG4gIHB1YmxpYyBzcGVlZCA9IDIwMDtcclxuXHJcbiAgcHJpdmF0ZSBjdXJzb3JLZXlzOiBQaGFzZXIuVHlwZXMuSW5wdXQuS2V5Ym9hcmQuQ3Vyc29yS2V5cztcclxuICBwcml2YXRlIHZlcm1vdXRoOiBQaGFzZXIuR2FtZU9iamVjdHMuU3ByaXRlO1xyXG4gIHByaXZhdGUgYm91cmJvbjogUGhhc2VyLkdhbWVPYmplY3RzLlNwcml0ZTtcclxuICBwcml2YXRlIGljZTogUGhhc2VyLkdhbWVPYmplY3RzLlNwcml0ZTtcclxuICBwcml2YXRlIG9yYW5nZTogUGhhc2VyLkdhbWVPYmplY3RzLlNwcml0ZTtcclxuICBwcml2YXRlIGVtcHR5R2xhc3M6IFBoYXNlci5HYW1lT2JqZWN0cy5TcHJpdGU7XHJcbiAgcHJpdmF0ZSBmaWxsZWRnbGFzczE6IFBoYXNlci5HYW1lT2JqZWN0cy5TcHJpdGU7XHJcbiAgcHJpdmF0ZSBmaWxsZWRnbGFzczI6IFBoYXNlci5HYW1lT2JqZWN0cy5TcHJpdGU7XHJcbiAgcHJpdmF0ZSBzaGFrZXI6IFBoYXNlci5HYW1lT2JqZWN0cy5TcHJpdGU7XHJcbiAgcHJpdmF0ZSBtdWRkbGVyOiBQaGFzZXIuR2FtZU9iamVjdHMuU3ByaXRlO1xyXG4gIHByaXZhdGUganVpY2VyOiBQaGFzZXIuR2FtZU9iamVjdHMuU3ByaXRlO1xyXG5cclxuICBwcml2YXRlIGNvbnRlbnRzOiBzdHJpbmdbXSA9IFtdO1xyXG4gIHByaXZhdGUgZ2xhc3NGaWxsZXJzOiBQaGFzZXIuR2FtZU9iamVjdHMuU3ByaXRlW10gPSBbXTtcclxuXHJcbiAgcHJpdmF0ZUNvbG9yTWFwOiBNYXA8c3RyaW5nLCBudW1iZXI+ID0gbmV3IE1hcChbXHJcbiAgICBbJ2JvdXJib24nLCAweGRiNzkwMF0sXHJcbiAgICBbJ3Zlcm1vdXRoJywgMHg1NTAxMDNdLFxyXG4gIF0pO1xyXG5cclxuICBwcml2YXRlIGlzUG91cmluZyA9IDA7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoc2NlbmVDb25maWcpO1xyXG4gIH1cclxuICBwdWJsaWMgdGV4dDE6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0O1xyXG4gIHB1YmxpYyB0ZXh0MjogUGhhc2VyLkdhbWVPYmplY3RzLlRleHQ7XHJcblxyXG4gIHByaXZhdGUgZ2V0Q29va2llID0gKGNuYW1lKSA9PiB7XHJcbiAgICBjb25zdCBuYW1lID0gY25hbWUgKyAnPSc7XHJcbiAgICBjb25zdCBkZWNvZGVkQ29va2llID0gZGVjb2RlVVJJQ29tcG9uZW50KGRvY3VtZW50LmNvb2tpZSk7XHJcbiAgICBjb25zdCBjYSA9IGRlY29kZWRDb29raWUuc3BsaXQoJzsnKTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2EubGVuZ3RoOyBpKyspIHtcclxuICAgICAgbGV0IGMgPSBjYVtpXTtcclxuICAgICAgd2hpbGUgKGMuY2hhckF0KDApID09ICcgJykge1xyXG4gICAgICAgIGMgPSBjLnN1YnN0cmluZygxKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoYy5pbmRleE9mKG5hbWUpID09IDApIHtcclxuICAgICAgICByZXR1cm4gYy5zdWJzdHJpbmcobmFtZS5sZW5ndGgsIGMubGVuZ3RoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuICcnO1xyXG4gIH07XHJcblxyXG4gIHB1YmxpYyBjcmVhdGUoKTogdm9pZCB7XHJcbiAgICBjb25zb2xlLmxvZygnR2FtZScpO1xyXG4gICAgY29uc29sZS5sb2coJ2Nvb2tpZTogJyArIGRvY3VtZW50LmNvb2tpZSk7XHJcblxyXG4gICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSB0aGlzLnN5cy5nYW1lLmNhbnZhcztcclxuXHJcbiAgICAvLyBBZGQgYSBwbGF5ZXIgc3ByaXRlIHRoYXQgY2FuIGJlIG1vdmVkIGFyb3VuZC4gUGxhY2UgaGltIGluIHRoZSBtaWRkbGUgb2YgdGhlIHNjcmVlbi5cclxuICAgIHRoaXMuZW1wdHlHbGFzcyA9IHRoaXMuYWRkLnNwcml0ZSh3aWR0aCAvIDIsIGhlaWdodCAvIDIsICdlbXB0eWdsYXNzJyk7XHJcbiAgICB0aGlzLmZpbGxlZGdsYXNzMSA9IHRoaXMuYWRkLnNwcml0ZSh3aWR0aCAvIDIsIGhlaWdodCAvIDIsICdmaWxsZWRnbGFzczEnKTtcclxuICAgIHRoaXMuZmlsbGVkZ2xhc3MyID0gdGhpcy5hZGQuc3ByaXRlKHdpZHRoIC8gMiwgaGVpZ2h0IC8gMiwgJ2ZpbGxlZGdsYXNzMicpO1xyXG5cclxuICAgIHRoaXMuZW1wdHlHbGFzcy5zZXRTY2FsZSgwLjUpO1xyXG4gICAgdGhpcy5maWxsZWRnbGFzczEuc2V0U2NhbGUoMC41KTtcclxuICAgIHRoaXMuZmlsbGVkZ2xhc3MyLnNldFNjYWxlKDAuNSk7XHJcblxyXG4gICAgdGhpcy5nbGFzc0ZpbGxlcnMucHVzaCh0aGlzLmZpbGxlZGdsYXNzMSk7XHJcbiAgICB0aGlzLmdsYXNzRmlsbGVycy5wdXNoKHRoaXMuZmlsbGVkZ2xhc3MyKTtcclxuXHJcbiAgICBpZiAodGhpcy5nZXRDb29raWUoJ3Zlcm1vdXRoJykgPT0gJzEnKSB7XHJcbiAgICAgIGNvbnN0IGNvbG9yID0gdGhpcy5wcml2YXRlQ29sb3JNYXAuZ2V0KCd2ZXJtb3V0aCcpO1xyXG4gICAgICBjb25zb2xlLmxvZyhjb2xvcik7XHJcbiAgICAgIHRoaXMuZmlsbGVkZ2xhc3MxLnNldFRpbnQoY29sb3IpO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuZ2V0Q29va2llKCdib3VyYm9uJykgPT0gJzEnKSB7XHJcbiAgICAgIGNvbnN0IGNvbG9yID0gdGhpcy5wcml2YXRlQ29sb3JNYXAuZ2V0KCdib3VyYm9uJyk7XHJcbiAgICAgIGNvbnNvbGUubG9nKGNvbG9yKTtcclxuICAgICAgdGhpcy5maWxsZWRnbGFzczIuc2V0VGludChjb2xvcik7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5nZXRDb29raWUoJ2ljZScpID09ICcxJykge1xyXG4gICAgICB0aGlzLmFkZC5zcHJpdGUod2lkdGggLyAyLCBoZWlnaHQgLyAyLCAnaWNlZ2xhc3MnKS5zZXRTY2FsZSgwLjUpO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuZ2V0Q29va2llKCdvcmFuZ2UnKSA9PSAnMScpIHtcclxuICAgICAgdGhpcy5hZGQuc3ByaXRlKHdpZHRoIC8gMiwgaGVpZ2h0IC8gMiwgJ29yYW5nZXdlZGdlZ2xhc3MnKS5zZXRTY2FsZSgwLjUpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMudmVybW91dGggPSB0aGlzLmFkZC5zcHJpdGUod2lkdGggLyA1LCBoZWlnaHQgKiAwLjc1LCAndmVybW91dGgnKS5zZXRJbnRlcmFjdGl2ZSgpO1xyXG4gICAgdGhpcy52ZXJtb3V0aC5zZXRTY2FsZSgwLjIpO1xyXG4gICAgdGhpcy5ib3VyYm9uID0gdGhpcy5hZGQuc3ByaXRlKHdpZHRoICogKDIgLyA1KSwgaGVpZ2h0ICogMC43NSwgJ2JvdXJib24nKS5zZXRJbnRlcmFjdGl2ZSgpO1xyXG4gICAgdGhpcy5ib3VyYm9uLnNldFNjYWxlKDAuMik7XHJcbiAgICB0aGlzLmljZSA9IHRoaXMuYWRkLnNwcml0ZSh3aWR0aCAqICgzIC8gNSksIGhlaWdodCAqIDAuNzUsICdpY2UnKS5zZXRJbnRlcmFjdGl2ZSgpO1xyXG4gICAgdGhpcy5pY2Uuc2V0U2NhbGUoMC4xKTtcclxuICAgIHRoaXMub3JhbmdlID0gdGhpcy5hZGQuc3ByaXRlKHdpZHRoICogKDQgLyA1KSwgaGVpZ2h0ICogMC43NSwgJ29yYW5nZScpLnNldEludGVyYWN0aXZlKCk7XHJcbiAgICB0aGlzLm9yYW5nZS5zZXRTY2FsZSgwLjIpO1xyXG4gICAgdGhpcy5zaGFrZXIgPSB0aGlzLmFkZC5zcHJpdGUod2lkdGggKiAoNCAvIDUpLCBoZWlnaHQgKiAwLjc1LCAnc2hha2VyJykuc2V0SW50ZXJhY3RpdmUoKTtcclxuICAgIHRoaXMuc2hha2VyLnNldFNjYWxlKDAuMik7XHJcbiAgICB0aGlzLm11ZGRsZXIgPSB0aGlzLmFkZC5zcHJpdGUod2lkdGggKiAoNCAvIDUpLCBoZWlnaHQgKiAwLjc1LCAnbXVkZGxlcicpLnNldEludGVyYWN0aXZlKCk7XHJcbiAgICB0aGlzLm11ZGRsZXIuc2V0U2NhbGUoMC4yKTtcclxuICAgIHRoaXMuanVpY2VyID0gdGhpcy5hZGQuc3ByaXRlKHdpZHRoICogKDQgLyA1KSwgaGVpZ2h0ICogMC43NSwgJ2p1aWNlcicpLnNldEludGVyYWN0aXZlKCk7XHJcbiAgICB0aGlzLmp1aWNlci5zZXRTY2FsZSgwLjIpO1xyXG5cclxuICAgIHRoaXMudmVybW91dGgub24oJ3BvaW50ZXJvdmVyJywgKCkgPT4ge1xyXG4gICAgICB0aGlzLnZlcm1vdXRoLnNldFRpbnQoMHhjY2NjY2MpO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLnZlcm1vdXRoLm9uKCdwb2ludGVyZG93bicsICgpID0+IHtcclxuICAgICAgdGhpcy5zY2VuZS5zdGFydCgnVmVybW91dGgnKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMudmVybW91dGgub24oJ3BvaW50ZXJvdXQnLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMudmVybW91dGguY2xlYXJUaW50KCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmJvdXJib24ub24oJ3BvaW50ZXJvdmVyJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICB0aGlzLnNldFRpbnQoMHhjY2NjY2MpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5ib3VyYm9uLm9uKCdwb2ludGVyb3V0JywgZnVuY3Rpb24gKCkge1xyXG4gICAgICB0aGlzLmNsZWFyVGludCgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5ib3VyYm9uLm9uKCdwb2ludGVyZG93bicsICgpID0+IHtcclxuICAgICAgdGhpcy5zY2VuZS5zdGFydCgnQm91cmJvbicpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5pY2Uub24oJ3BvaW50ZXJvdmVyJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICB0aGlzLnNldFRpbnQoMHhjY2NjY2MpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5pY2Uub24oJ3BvaW50ZXJvdXQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHRoaXMuY2xlYXJUaW50KCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmljZS5vbigncG9pbnRlcmRvd24nLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMuc2NlbmUuc3RhcnQoJ0ljZScpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5vcmFuZ2Uub24oJ3BvaW50ZXJvdmVyJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICB0aGlzLnNldFRpbnQoMHhjY2NjY2MpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5vcmFuZ2Uub24oJ3BvaW50ZXJvdXQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHRoaXMuY2xlYXJUaW50KCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLm9yYW5nZS5vbigncG9pbnRlcmRvd24nLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMuc2NlbmUuc3RhcnQoJ09yYW5nZScpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5zaGFrZXIub24oJ3BvaW50ZXJvdmVyJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICB0aGlzLnNldFRpbnQoMHhjY2NjY2MpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5zaGFrZXIub24oJ3BvaW50ZXJvdXQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHRoaXMuY2xlYXJUaW50KCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLnNoYWtlci5vbigncG9pbnRlcmRvd24nLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMuc2NlbmUuc3RhcnQoJ1NoYWtlJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLm11ZGRsZXIub24oJ3BvaW50ZXJvdmVyJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICB0aGlzLnNldFRpbnQoMHhjY2NjY2MpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5tdWRkbGVyLm9uKCdwb2ludGVyb3V0JywgZnVuY3Rpb24gKCkge1xyXG4gICAgICB0aGlzLmNsZWFyVGludCgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5tdWRkbGVyLm9uKCdwb2ludGVyZG93bicsICgpID0+IHtcclxuICAgICAgdGhpcy5zY2VuZS5zdGFydCgnTXVkZGxlJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmp1aWNlci5vbigncG9pbnRlcm92ZXInLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHRoaXMuc2V0VGludCgweGNjY2NjYyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmp1aWNlci5vbigncG9pbnRlcm91dCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgdGhpcy5jbGVhclRpbnQoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuanVpY2VyLm9uKCdwb2ludGVyZG93bicsICgpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coXCJqdWljZXJcIik7XHJcbiAgICAgIHRoaXMuc2NlbmUuc3RhcnQoJ0p1aWNlcicsIHsgRnJ1aXRTcHJpdGVOYW1lOiAnanVpY2VybGVtb24nIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5pbnB1dC5zZXREcmFnZ2FibGUodGhpcy52ZXJtb3V0aCk7XHJcbiAgICB0aGlzLmlucHV0LnNldERyYWdnYWJsZSh0aGlzLmJvdXJib24pO1xyXG5cclxuICAgIHRoaXMuaW5wdXQub24oJ2RyYWdzdGFydCcsIChwb2ludGVyLCBnYW1lT2JqZWN0KSA9PiB7XHJcbiAgICAgIGdhbWVPYmplY3Quc2V0VGludCgweDk5OTk5OSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmlucHV0Lm9uKCdkcmFnJywgKHBvaW50ZXIsIGdhbWVPYmplY3QsIGRyYWdYLCBkcmFnWSkgPT4ge1xyXG4gICAgICBnYW1lT2JqZWN0LnggPSBkcmFnWDtcclxuICAgICAgZ2FtZU9iamVjdC55ID0gZHJhZ1k7XHJcbiAgICAgIC8vICBjb25zb2xlLmxvZyhnYW1lT2JqZWN0KTtcclxuICAgICAgY29uc3QgYm91bmRzMSA9IGdhbWVPYmplY3QuZ2V0Qm91bmRzKCk7XHJcbiAgICAgIC8vY29uc29sZS5sb2coYGRyYWdnZWRib3VuZHM6ICR7Ym91bmRzMX1gKTtcclxuICAgICAgY29uc3QgYm91bmRzMiA9IHRoaXMuZW1wdHlHbGFzcy5nZXRCb3VuZHMoKTtcclxuICAgICAgLy9jb25zb2xlLmxvZyhgY3VwYm91bmRzOiAke2JvdW5kczJ9YCk7XHJcbiAgICAgIGlmIChQaGFzZXIuR2VvbS5SZWN0YW5nbGUuT3ZlcmxhcHMoYm91bmRzMSwgYm91bmRzMikpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygndG91Y2hpbmcnKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhnYW1lT2JqZWN0LmFuZ2xlKTtcclxuICAgICAgICB0aGlzLnJvdGF0ZVJpZ2h0KGdhbWVPYmplY3QpO1xyXG4gICAgICAgIGlmIChnYW1lT2JqZWN0LmFuZ2xlID49IDkwKSB7XHJcbiAgICAgICAgICBpZiAodGhpcy5pc1BvdXJpbmcgPT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLnBvdXIoZ2FtZU9iamVjdCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coXCJub3QgdG91Y2hpbmdcIik7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhnYW1lT2JqZWN0LmFuZ2xlKTtcclxuICAgICAgICB0aGlzLnJvdGF0ZUNlbnRlcihnYW1lT2JqZWN0KTtcclxuICAgICAgICB0aGlzLmlzUG91cmluZyA9IDA7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuaW5wdXQub24oJ2RyYWdlbmQnLCAocG9pbnRlciwgZ2FtZU9iamVjdCkgPT4ge1xyXG4gICAgICBnYW1lT2JqZWN0LmNsZWFyVGludCgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gVGhpcyBpcyBhIG5pY2UgaGVscGVyIFBoYXNlciBwcm92aWRlcyB0byBjcmVhdGUgbGlzdGVuZXJzIGZvciBzb21lIG9mIHRoZSBtb3N0IGNvbW1vbiBrZXlzLlxyXG4gICAgdGhpcy5jdXJzb3JLZXlzID0gdGhpcy5pbnB1dC5rZXlib2FyZC5jcmVhdGVDdXJzb3JLZXlzKCk7XHJcblxyXG4gICAgdGhpcy50ZXh0MSA9IHRoaXMuYWRkLnRleHQoMTAsIDEwLCAnJywgeyBjb2xvcjogJyMwMGZmMDAnIH0pO1xyXG4gICAgdGhpcy50ZXh0MiA9IHRoaXMuYWRkLnRleHQoNTAwLCAxMCwgJycsIHsgY29sb3I6ICcjMDBmZjAwJyB9KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyB1cGRhdGUoKTogdm9pZCB7fVxyXG5cclxuICBwcml2YXRlIHJvdGF0ZVJpZ2h0KGdhbWVPYmplY3Q6IEdhbWVPYmplY3RzLlNwcml0ZSk6IHZvaWQge1xyXG4gICAgaWYgKGdhbWVPYmplY3QuYW5nbGUgPCA5MCkge1xyXG4gICAgICBnYW1lT2JqZWN0LnNldEFuZ2xlKGdhbWVPYmplY3QuYW5nbGUgKyAxNSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJvdGF0ZUNlbnRlcihnYW1lT2JqZWN0OiBHYW1lT2JqZWN0cy5TcHJpdGUpOiB2b2lkIHtcclxuICAgIGlmIChnYW1lT2JqZWN0LmFuZ2xlID4gMCkge1xyXG4gICAgICBnYW1lT2JqZWN0LnNldEFuZ2xlKGdhbWVPYmplY3QuYW5nbGUgLSAxNSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHBvdXIoZ2FtZU9iamVjdDogR2FtZU9iamVjdHMuU3ByaXRlKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5jb250ZW50cy5sZW5ndGggPCB0aGlzLmdsYXNzRmlsbGVycy5sZW5ndGgpIHtcclxuICAgICAgY29uc29sZS5sb2coJ3RyeWluZyB0byBwb3VyJyk7XHJcbiAgICAgIC8vdGhpcy5pc1BvdXJpbmcgPSAxO1xyXG4gICAgICBjb25zdCBsID0gdGhpcy5jb250ZW50cy5wdXNoKGdhbWVPYmplY3QudGV4dHVyZS5rZXkpO1xyXG4gICAgICBjb25zdCBjb2xvciA9IHRoaXMucHJpdmF0ZUNvbG9yTWFwLmdldChnYW1lT2JqZWN0LnRleHR1cmUua2V5KTtcclxuICAgICAgY29uc29sZS5sb2coY29sb3IpO1xyXG4gICAgICB0aGlzLmdsYXNzRmlsbGVyc1tsIC0gMV0uc2V0VGludChjb2xvcik7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IElucHV0LCBHYW1lT2JqZWN0cyB9IGZyb20gJ3BoYXNlcic7XHJcbmltcG9ydCB7IGdldEdhbWVXaWR0aCwgZ2V0R2FtZUhlaWdodCwgZHJpbmtUb0NvbG9yTWFwIH0gZnJvbSAnLi4vaGVscGVycyc7XHJcblxyXG5jb25zdCBzY2VuZUNvbmZpZzogUGhhc2VyLlR5cGVzLlNjZW5lcy5TZXR0aW5nc0NvbmZpZyA9IHtcclxuICBhY3RpdmU6IGZhbHNlLFxyXG4gIHZpc2libGU6IGZhbHNlLFxyXG4gIGtleTogJ0ljZScsXHJcbn07XHJcblxyXG5leHBvcnQgY2xhc3MgSWNlU2NlbmUgZXh0ZW5kcyBQaGFzZXIuU2NlbmUge1xyXG4gIHB1YmxpYyBzcGVlZCA9IDIwMDtcclxuXHJcbiAgcHJpdmF0ZSBjdXJzb3JLZXlzOiBQaGFzZXIuVHlwZXMuSW5wdXQuS2V5Ym9hcmQuQ3Vyc29yS2V5cztcclxuICBwcml2YXRlIGljZTogUGhhc2VyLkdhbWVPYmplY3RzLlNwcml0ZTtcclxuXHJcbiAgcHJpdmF0ZSBjb250ZW50czogc3RyaW5nW10gPSBbXTtcclxuICBwcml2YXRlIGdsYXNzRmlsbGVyczogUGhhc2VyLkdhbWVPYmplY3RzLlNwcml0ZVtdID0gW107XHJcblxyXG4gIHByaXZhdGUgaXNQb3VyaW5nID0gMDtcclxuICBwcml2YXRlIHRyYW5zaXRpb25pbmcgPSBmYWxzZTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcihzY2VuZUNvbmZpZyk7XHJcbiAgfVxyXG4gIHB1YmxpYyB0ZXh0MTogUGhhc2VyLkdhbWVPYmplY3RzLlRleHQ7XHJcbiAgcHVibGljIHRleHQyOiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dDtcclxuICBwdWJsaWMgdGV4dDM6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0O1xyXG4gIHB1YmxpYyB0ZXh0NDogUGhhc2VyLkdhbWVPYmplY3RzLlRleHQ7XHJcbiAgcHVibGljIHRleHQ1OiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dDtcclxuICBwdWJsaWMgY2xpY2tzID0gMDtcclxuICBwdWJsaWMgaWNlTGV2ZWwgPSAwO1xyXG5cclxuICBwdWJsaWMgY3JlYXRlKCk6IHZvaWQge1xyXG4gICAgY29uc29sZS5sb2coJ0ljZScpO1xyXG4gICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSB0aGlzLnN5cy5nYW1lLmNhbnZhcztcclxuICAgIHRoaXMudHJhbnNpdGlvbmluZyA9IGZhbHNlO1xyXG4gICAgLy8gQWRkIGEgcGxheWVyIHNwcml0ZSB0aGF0IGNhbiBiZSBtb3ZlZCBhcm91bmQuIFBsYWNlIGhpbSBpbiB0aGUgbWlkZGxlIG9mIHRoZSBzY3JlZW4uXHJcbiAgICB0aGlzLmljZSA9IHRoaXMuYWRkLnNwcml0ZSh3aWR0aCAvIDIsIGhlaWdodCAvIDIsICdpY2UnKTtcclxuICAgIHRoaXMuaWNlLnNldFNjYWxlKDAuNCk7XHJcbiAgICAvL3RoaXMudmVybW91dGhUb3BPbmx5ID0gdGhpcy5hZGQuc3ByaXRlKHdpZHRoIC8gMiwgaGVpZ2h0IC8gMiArIDMwMCwgJ3Zlcm1vdXRodG9wb25seScpO1xyXG5cclxuICAgIHRoaXMuaW5wdXQub24oJ3BvaW50ZXJ1cCcsICgpID0+IHtcclxuICAgICAgdGhpcy50ZXh0MS5zZXRUZXh0KGDOuDogJHt0aGlzLmlucHV0LmFjdGl2ZVBvaW50ZXIuZ2V0QW5nbGUoKX1gKTtcclxuICAgICAgdGhpcy50ZXh0Mi5zZXRUZXh0KGB4OiAke3RoaXMuaW5wdXQuYWN0aXZlUG9pbnRlci5nZXREaXN0YW5jZVgoKX1gKTtcclxuICAgICAgdGhpcy50ZXh0My5zZXRUZXh0KGB5OiAke3RoaXMuaW5wdXQuYWN0aXZlUG9pbnRlci5nZXREaXN0YW5jZVkoKX1gKTtcclxuICAgICAgdGhpcy50ZXh0NC5zZXRUZXh0KGBkOiAke3RoaXMuaW5wdXQuYWN0aXZlUG9pbnRlci5nZXREaXN0YW5jZSgpfWApO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5pbnB1dC5vbigncG9pbnRlcmRvd24nLCAoKSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLmljZUxldmVsID09IDApIHtcclxuICAgICAgICB0aGlzLmljZS5zZXRUZXh0dXJlKCdpY2UnICsgKyt0aGlzLmljZUxldmVsKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmNsaWNrcyArPSAxO1xyXG4gICAgICBpZiAodGhpcy5jbGlja3MgJSA1ID09IDApIHtcclxuICAgICAgICB0aGlzLmljZS5zZXRUZXh0dXJlKCdpY2UnICsgKyt0aGlzLmljZUxldmVsKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAodGhpcy5pY2VMZXZlbCA9PSA1ICYmICF0aGlzLnRyYW5zaXRpb25pbmcpIHtcclxuICAgICAgICB0aGlzLnRyYW5zaXRpb25pbmcgPSB0cnVlO1xyXG4gICAgICAgIGRvY3VtZW50LmNvb2tpZSA9IGBpY2U9MWA7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLnNjZW5lLnN0YXJ0KCdHYW1lJyk7XHJcbiAgICAgICAgfSwgNTAwKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy50ZXh0MSA9IHRoaXMuYWRkLnRleHQoMTAsIDEwLCAnJywgeyBjb2xvcjogJyMwMGZmMDAnIH0pO1xyXG4gICAgdGhpcy50ZXh0MiA9IHRoaXMuYWRkLnRleHQoMTAsIDI1LCAnJywgeyBjb2xvcjogJyMwMGZmMDAnIH0pO1xyXG4gICAgdGhpcy50ZXh0MyA9IHRoaXMuYWRkLnRleHQoMTAsIDQwLCAnJywgeyBjb2xvcjogJyMwMGZmMDAnIH0pO1xyXG4gICAgdGhpcy50ZXh0NCA9IHRoaXMuYWRkLnRleHQoMTAsIDU1LCAnJywgeyBjb2xvcjogJyMwMGZmMDAnIH0pO1xyXG4gICAgdGhpcy50ZXh0NSA9IHRoaXMuYWRkLnRleHQoMTAsIDcwLCAnJywgeyBjb2xvcjogJyMwMGZmMDAnIH0pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHVwZGF0ZSgpOiB2b2lkIHt9XHJcbn1cclxuIiwiaW1wb3J0IHsgTWFpbk1lbnVTY2VuZSB9IGZyb20gJy4vbWFpbi1tZW51LXNjZW5lJztcclxuaW1wb3J0IHsgQm9vdFNjZW5lIH0gZnJvbSAnLi9ib290LXNjZW5lJztcclxuaW1wb3J0IHsgR2FtZVNjZW5lIH0gZnJvbSAnLi9nYW1lLXNjZW5lJztcclxuaW1wb3J0IHsgVmVybW91dGhTY2VuZSB9IGZyb20gJy4vdmVybW91dGgtc2NlbmUnO1xyXG5pbXBvcnQgeyBQb3VyU2NlbmUgfSBmcm9tICcuL3BvdXItc2NlbmUnO1xyXG5pbXBvcnQgeyBCb3VyYm9uU2NlbmUgfSBmcm9tICcuL2JvdXJib24tc2NlbmUnO1xyXG5pbXBvcnQgeyBJY2VTY2VuZSB9IGZyb20gJy4vaWNlLXNjZW5lJztcclxuaW1wb3J0IHsgT3JhbmdlU2NlbmUgfSBmcm9tICcuL29yYW5nZS1zY2VuZSc7XHJcbmltcG9ydCB7IFNoYWtlU2NlbmUgfSBmcm9tICcuL3NoYWtlLXNjZW5lJztcclxuaW1wb3J0IHsgTXVkZGxlU2NlbmUgfSBmcm9tICcuL211ZGRsZS1zY2VuZSc7XHJcbmltcG9ydCB7IEp1aWNlclNjZW5lIH0gZnJvbSAnLi9qdWljZXItc2NlbmUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgW1xyXG4gIEJvb3RTY2VuZSxcclxuICBNYWluTWVudVNjZW5lLFxyXG4gIEdhbWVTY2VuZSxcclxuICBWZXJtb3V0aFNjZW5lLFxyXG4gIFBvdXJTY2VuZSxcclxuICBCb3VyYm9uU2NlbmUsXHJcbiAgSWNlU2NlbmUsXHJcbiAgT3JhbmdlU2NlbmUsXHJcbiAgU2hha2VTY2VuZSxcclxuICBNdWRkbGVTY2VuZSxcclxuICBKdWljZXJTY2VuZSxcclxuXTtcclxuIiwiaW1wb3J0IHsgSW5wdXQsIEdhbWVPYmplY3RzIH0gZnJvbSAncGhhc2VyJztcclxuaW1wb3J0IHsgZ2V0R2FtZVdpZHRoLCBnZXRHYW1lSGVpZ2h0LCBkcmlua1RvQ29sb3JNYXAgfSBmcm9tICcuLi9oZWxwZXJzJztcclxuXHJcbmNvbnN0IHNjZW5lQ29uZmlnOiBQaGFzZXIuVHlwZXMuU2NlbmVzLlNldHRpbmdzQ29uZmlnID0ge1xyXG4gIGFjdGl2ZTogZmFsc2UsXHJcbiAgdmlzaWJsZTogZmFsc2UsXHJcbiAga2V5OiAnSnVpY2VyJyxcclxufTtcclxuY2xhc3MgR2FtZVNjZW5lQXJndW1lbnRzIHtcclxuICBwdWJsaWMgRnJ1aXRTcHJpdGVOYW1lOiBzdHJpbmc7XHJcbn1cclxuZXhwb3J0IGNsYXNzIEp1aWNlclNjZW5lIGV4dGVuZHMgUGhhc2VyLlNjZW5lIHtcclxuICBwdWJsaWMgc3BlZWQgPSAyMDA7XHJcblxyXG4gIHByaXZhdGUganVpY2VyVG9wOiBQaGFzZXIuR2FtZU9iamVjdHMuU3ByaXRlO1xyXG4gIHByaXZhdGUganVpY2VyQm90dG9tOiBQaGFzZXIuR2FtZU9iamVjdHMuU3ByaXRlO1xyXG4gIHByaXZhdGUgZnJ1aXQ6IFBoYXNlci5HYW1lT2JqZWN0cy5TcHJpdGU7XHJcbiAgcHJpdmF0ZSBlbXB0eUdsYXNzOiBQaGFzZXIuR2FtZU9iamVjdHMuU3ByaXRlO1xyXG5cclxuICBwcml2YXRlIHBvdXJDb3VudCA9IDA7XHJcbiAgcHJpdmF0ZSB0cmFuc2l0aW9uaW5nID0gZmFsc2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoc2NlbmVDb25maWcpO1xyXG4gIH1cclxuICBwdWJsaWMgdGV4dDE6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0O1xyXG4gIHB1YmxpYyB0ZXh0MjogUGhhc2VyLkdhbWVPYmplY3RzLlRleHQ7XHJcbiAgcHVibGljIGZydWl0U3ByaXRlTmFtZTogc3RyaW5nO1xyXG4gIHByaXZhdGUgbGlxdWlkUmVjdGFuZ2xlOiBQaGFzZXIuR2FtZU9iamVjdHMuUmVjdGFuZ2xlO1xyXG5cclxuICBwdWJsaWMgaW5pdChkYXRhOiBHYW1lU2NlbmVBcmd1bWVudHMpOiB2b2lkIHtcclxuICAgIGNvbnNvbGUubG9nKCdKdWljZXJJbml0Jyk7XHJcbiAgICB0aGlzLmZydWl0U3ByaXRlTmFtZSA9IGRhdGEuRnJ1aXRTcHJpdGVOYW1lO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNyZWF0ZSgpOiB2b2lkIHtcclxuICAgIGNvbnNvbGUubG9nKCdKdWljZXInKTtcclxuICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCB9ID0gdGhpcy5zeXMuZ2FtZS5jYW52YXM7XHJcbiAgICB0aGlzLnBvdXJDb3VudCA9IDA7XHJcbiAgICB0aGlzLnRyYW5zaXRpb25pbmcgPSBmYWxzZTtcclxuXHJcbiAgICAvLyBBZGQgYSBwbGF5ZXIgc3ByaXRlIHRoYXQgY2FuIGJlIG1vdmVkIGFyb3VuZC4gUGxhY2UgaGltIGluIHRoZSBtaWRkbGUgb2YgdGhlIHNjcmVlbi5cclxuICAgIHRoaXMuZW1wdHlHbGFzcyA9IHRoaXMuYWRkLnNwcml0ZSh3aWR0aCAvIDIsIGhlaWdodCAvIDIsICdlbXB0eWdsYXNzJykuc2V0QWxwaGEoMCk7XHJcblxyXG4gICAgY29uc29sZS5sb2coYGdsYXNzIHg6ICR7d2lkdGggLyA0fWApO1xyXG4gICAgY29uc29sZS5sb2coYGdsYXNzIHk6ICR7aGVpZ2h0IC8gMn1gKTtcclxuICAgIHRoaXMuZW1wdHlHbGFzcy5zZXRTY2FsZSgwLjUpO1xyXG4gICAgdGhpcy5lbXB0eUdsYXNzLnNjYWxlWSA9IHRoaXMuZW1wdHlHbGFzcy5zY2FsZVkgKiAwLjU7XHJcblxyXG4gICAgdGhpcy5qdWljZXJUb3AgPSB0aGlzLmFkZC5zcHJpdGUod2lkdGggLyAxLjUsIGhlaWdodCAvIDIsICdqdWljZXJ0b3AnKS5zZXRJbnRlcmFjdGl2ZSgpO1xyXG4gICAgdGhpcy5qdWljZXJUb3Auc2V0U2NhbGUoMC43KTtcclxuICAgIHRoaXMuanVpY2VyVG9wLnNldE9yaWdpbigwLjc2NzUsIDAuNzY3NSk7XHJcblxyXG4gICAgdGhpcy5qdWljZXJCb3R0b20gPSB0aGlzLmFkZC5zcHJpdGUod2lkdGggLyAxLjUsIGhlaWdodCAvIDIsICdqdWljZXJib3R0b20nKS5zZXRJbnRlcmFjdGl2ZSgpO1xyXG4gICAgdGhpcy5qdWljZXJCb3R0b20uc2V0U2NhbGUoMC43KTtcclxuICAgIHRoaXMuanVpY2VyQm90dG9tLnNldE9yaWdpbigwLjc2NzUsIDAuNzY3NSk7XHJcbiAgICB0aGlzLmZydWl0ID0gdGhpcy5hZGQuc3ByaXRlKHdpZHRoIC8gMS41LCBoZWlnaHQgLyAyLCB0aGlzLmZydWl0U3ByaXRlTmFtZSk7XHJcbiAgICB0aGlzLmZydWl0LnNldFNjYWxlKDAuNyk7XHJcbiAgICB0aGlzLmZydWl0LnNldE9yaWdpbigwLjc2NzUsIDAuNzY3NSk7XHJcblxyXG4gICAgY29uc29sZS5sb2codGhpcy5lbXB0eUdsYXNzLngpO1xyXG4gICAgY29uc29sZS5sb2codGhpcy5qdWljZXJUb3AuZGlzcGxheUhlaWdodCk7XHJcbiAgICAvL3RoaXMuanVpY2VyVG9wLnNldFBvc2l0aW9uKHRoaXMuZW1wdHlHbGFzcy54ICsgdGhpcy5qdWljZXJUb3AuZGlzcGxheUhlaWdodCAvIDQpO1xyXG4gICAgdGhpcy5qdWljZXJUb3Auc2V0U2NhbGUoMC40KTtcclxuICAgIHRoaXMuZnJ1aXQuc2V0U2NhbGUoMC40KTtcclxuICAgIC8vdGhpcy5qdWljZXJCb3R0b20uc2V0UG9zaXRpb24odGhpcy5lbXB0eUdsYXNzLnggKyB0aGlzLmp1aWNlckJvdHRvbS5kaXNwbGF5SGVpZ2h0IC8gNCk7XHJcbiAgICB0aGlzLmp1aWNlckJvdHRvbS5zZXRTY2FsZSgwLjQpO1xyXG4gICAgdGhpcy5qdWljZXJUb3Auc2V0UG9zaXRpb24oXHJcbiAgICAgIHRoaXMuZW1wdHlHbGFzcy54ICsgdGhpcy5qdWljZXJUb3AuZGlzcGxheVdpZHRoIC8gMyxcclxuICAgICAgdGhpcy5lbXB0eUdsYXNzLnkgKyB0aGlzLmp1aWNlclRvcC5kaXNwbGF5SGVpZ2h0IC8gNCxcclxuICAgICk7XHJcbiAgICB0aGlzLmp1aWNlckJvdHRvbS5zZXRQb3NpdGlvbihcclxuICAgICAgdGhpcy5lbXB0eUdsYXNzLnggKyB0aGlzLmp1aWNlckJvdHRvbS5kaXNwbGF5V2lkdGggLyAzLFxyXG4gICAgICB0aGlzLmVtcHR5R2xhc3MueSArIHRoaXMuanVpY2VyVG9wLmRpc3BsYXlIZWlnaHQgLyA0LFxyXG4gICAgKTtcclxuICAgIHRoaXMuZnJ1aXQuc2V0UG9zaXRpb24oXHJcbiAgICAgIHRoaXMuZW1wdHlHbGFzcy54ICsgdGhpcy5qdWljZXJCb3R0b20uZGlzcGxheVdpZHRoIC8gMyxcclxuICAgICAgdGhpcy5lbXB0eUdsYXNzLnkgKyB0aGlzLmp1aWNlclRvcC5kaXNwbGF5SGVpZ2h0IC8gNCxcclxuICAgICk7XHJcblxyXG4gICAgLy90aGlzLmFkZC5yZWN0YW5nbGUodGhpcy5qdWljZXJCb3R0b20ueCwgdGhpcy5qdWljZXJCb3R0b20ueSwgdGhpcy5qdWljZXJCb3R0b20uZGlzcGxheVdpZHRoLCB0aGlzLmp1aWNlckJvdHRvbS5kaXNwbGF5SGVpZ2h0LCAweEZGMDAwMCk7XHJcbiAgICAvL3RoaXMuYWRkLnJlY3RhbmdsZSh0aGlzLmp1aWNlclRvcC54LCB0aGlzLmp1aWNlclRvcC55LCB0aGlzLmp1aWNlclRvcC5kaXNwbGF5V2lkdGgsIHRoaXMuanVpY2VyVG9wLmRpc3BsYXlIZWlnaHQsIDB4MDAwMEZGKTtcclxuICAgIHRoaXMuanVpY2VyVG9wLm9uKCdwb2ludGVyb3ZlcicsICgpID0+IHtcclxuICAgICAgdGhpcy5qdWljZXJUb3Auc2V0VGludCgweGNjY2NjYyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmp1aWNlclRvcC5vbigncG9pbnRlcm91dCcsICgpID0+IHtcclxuICAgICAgdGhpcy5qdWljZXJUb3AuY2xlYXJUaW50KCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmlucHV0LnNldERyYWdnYWJsZSh0aGlzLmp1aWNlclRvcCk7XHJcblxyXG4gICAgdGhpcy5pbnB1dC5vbignZHJhZ3N0YXJ0JywgKHBvaW50ZXIsIGdhbWVPYmplY3QpID0+IHtcclxuICAgICAgZ2FtZU9iamVjdC5zZXRUaW50KDB4OTk5OTk5KTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5saXF1aWRSZWN0YW5nbGUgPSB0aGlzLmFkZFxyXG4gICAgICAucmVjdGFuZ2xlKFxyXG4gICAgICAgIHRoaXMuZW1wdHlHbGFzcy54LFxyXG4gICAgICAgIHRoaXMuZW1wdHlHbGFzcy55ICsgdGhpcy5lbXB0eUdsYXNzLmRpc3BsYXlIZWlnaHQgLyAyLFxyXG4gICAgICAgIHRoaXMuZW1wdHlHbGFzcy5kaXNwbGF5V2lkdGgsXHJcbiAgICAgICAgKyt0aGlzLnBvdXJDb3VudCxcclxuICAgICAgICBkcmlua1RvQ29sb3JNYXAuZ2V0KHRoaXMuZnJ1aXRTcHJpdGVOYW1lKSxcclxuICAgICAgKVxyXG4gICAgICAuc2V0QmxlbmRNb2RlKFBoYXNlci5CbGVuZE1vZGVzLk1VTFRJUExZKTtcclxuXHJcbiAgICB0aGlzLmlucHV0Lm9uKCdkcmFnJywgKHBvaW50ZXIsIGdhbWVPYmplY3QsIGRyYWdYLCBkcmFnWSkgPT4ge1xyXG4gICAgICAvLyBmcm9tIGhlcmU6IG5lZWQgdG8gMS4gY2FsY3VsYXRlIGFuZ2xlIGJldHdlZW4gYmFzZSBvZiBvYmplY3QgYW5kIGN1cnNvclxyXG4gICAgICAvLyAyLiByb3RhdGUgdW50aWwgdG9wIG9mIGJvdHRsZSBpcyBwb2ludGluZyB0byBjdXJzb3JcclxuICAgICAgY29uc3QgeTEgPSBnYW1lT2JqZWN0Lnk7XHJcbiAgICAgIGNvbnN0IHkyID0gdGhpcy5pbnB1dC5hY3RpdmVQb2ludGVyLnk7XHJcbiAgICAgIGNvbnN0IHgxID0gZ2FtZU9iamVjdC54O1xyXG4gICAgICBjb25zdCB4MiA9IHRoaXMuaW5wdXQuYWN0aXZlUG9pbnRlci54O1xyXG5cclxuICAgICAgY29uc3Qgc2xvcGVSYWRzID0gTWF0aC5hdGFuMih5MiAtIHkxLCB4MiAtIHgxKTtcclxuICAgICAgY29uc3QgYWRqdXN0ZWQgPSBzbG9wZVJhZHMgKyAxLjU3MDc5NjMzO1xyXG5cclxuICAgICAgdGhpcy50ZXh0MS5zZXRUZXh0KGAke2FkanVzdGVkfWApO1xyXG4gICAgICBpZiAoYWRqdXN0ZWQgPD0gMC4wMjUpIHtcclxuICAgICAgICBnYW1lT2JqZWN0LnJvdGF0aW9uID0gc2xvcGVSYWRzICsgMS41NzA3OTYzMztcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5pbnB1dC5vbignZHJhZ2VuZCcsIChwb2ludGVyLCBnYW1lT2JqZWN0KSA9PiB7XHJcbiAgICAgIGdhbWVPYmplY3QuY2xlYXJUaW50KCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBUaGlzIGlzIGEgbmljZSBoZWxwZXIgUGhhc2VyIHByb3ZpZGVzIHRvIGNyZWF0ZSBsaXN0ZW5lcnMgZm9yIHNvbWUgb2YgdGhlIG1vc3QgY29tbW9uIGtleXMuXHJcblxyXG4gICAgdGhpcy50ZXh0MSA9IHRoaXMuYWRkLnRleHQoMTAsIDEwLCAnJywgeyBjb2xvcjogJyMwMGZmMDAnIH0pO1xyXG4gICAgdGhpcy50ZXh0MiA9IHRoaXMuYWRkLnRleHQoMTAwLCAxMCwgJycsIHsgY29sb3I6ICcjMDBmZjAwJyB9KTtcclxuXHJcbiAgICB0aGlzLmp1aWNlclRvcC5zZXREZXB0aCgxKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyB1cGRhdGUoKTogdm9pZCB7XHJcbiAgICAvLyBFdmVyeSBmcmFtZSwgd2UgY3JlYXRlIGEgbmV3IHZlbG9jaXR5IGZvciB0aGUgc3ByaXRlIGJhc2VkIG9uIHdoYXQga2V5cyB0aGUgcGxheWVyIGlzIGhvbGRpbmcgZG93bi5cclxuICAgIHRoaXMudGV4dDEuc2V0VGV4dChgJHt0aGlzLmp1aWNlclRvcC5yb3RhdGlvbn1gKTtcclxuXHJcbiAgICBpZiAodGhpcy5qdWljZXJUb3Aucm90YXRpb24gPCAtMS40OSkge1xyXG4gICAgICBpZiAoIXRoaXMudHJhbnNpdGlvbmluZykge1xyXG4gICAgICAgIHRoaXMudHJhbnNpdGlvbmluZyA9IHRydWU7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLnNjZW5lLnN0YXJ0KCdHYW1lJyk7XHJcbiAgICAgICAgfSwgNTAwKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBNZW51QnV0dG9uIH0gZnJvbSAnLi4vdWkvbWVudS1idXR0b24nO1xyXG5cclxuY29uc3Qgc2NlbmVDb25maWc6IFBoYXNlci5UeXBlcy5TY2VuZXMuU2V0dGluZ3NDb25maWcgPSB7XHJcbiAgYWN0aXZlOiBmYWxzZSxcclxuICB2aXNpYmxlOiBmYWxzZSxcclxuICBrZXk6ICdNYWluTWVudScsXHJcbn07XHJcblxyXG4vKipcclxuICogVGhlIGluaXRpYWwgc2NlbmUgdGhhdCBzdGFydHMsIHNob3dzIHRoZSBzcGxhc2ggc2NyZWVucywgYW5kIGxvYWRzIHRoZSBuZWNlc3NhcnkgYXNzZXRzLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIE1haW5NZW51U2NlbmUgZXh0ZW5kcyBQaGFzZXIuU2NlbmUge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoc2NlbmVDb25maWcpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNyZWF0ZSgpOiB2b2lkIHtcclxuICAgIGNvbnNvbGUubG9nKCdNYWluIE1lbnUnKTtcclxuICAgIHRoaXMuYWRkXHJcbiAgICAgIC50ZXh0KDEwMCwgNTAsICdUaGlzIGlzIGEgc2FtcGxlIG1haW4gbWVudS4gQ2xpY2sgdGhlIFwiU3RhcnRcIiBidXR0b24gYmVsb3cgdG8gcnVuIHlvdXIgZ2FtZS4nLCB7XHJcbiAgICAgICAgY29sb3I6ICcjRkZGRkZGJyxcclxuICAgICAgfSlcclxuICAgICAgLnNldEZvbnRTaXplKDI0KTtcclxuXHJcbiAgICBuZXcgTWVudUJ1dHRvbih0aGlzLCAxMDAsIDE1MCwgJ1N0YXJ0IEdhbWUnLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMuc2NlbmUuc3RhcnQoJ0dhbWUnKTtcclxuICAgIH0pO1xyXG5cclxuICAgIG5ldyBNZW51QnV0dG9uKHRoaXMsIDEwMCwgMjUwLCAnU2V0dGluZ3MnLCAoKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdzZXR0aW5ncyBidXR0b24gY2xpY2tlZCcpO1xyXG4gICAgICBEZXZpY2VNb3Rpb25FdmVudC5yZXF1ZXN0UGVybWlzc2lvbigpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgaWYgKHJlc3BvbnNlID09ICdncmFudGVkJykge1xyXG4gICAgICAgICAgLy8gQWRkIGEgbGlzdGVuZXIgdG8gZ2V0IHNtYXJ0cGhvbmUgb3JpZW50YXRpb25cclxuICAgICAgICAgIC8vIGluIHRoZSBhbHBoYS1iZXRhLWdhbW1hIGF4ZXMgKHVuaXRzIGluIGRlZ3JlZXMpXHJcbiAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignZGV2aWNlb3JpZW50YXRpb24nLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgbGV0IHVwZGF0ZVJhdGUgPSAxIC8gNjA7XHJcbiAgICAgICAgICAgIC8vIEV4cG9zZSBlYWNoIG9yaWVudGF0aW9uIGFuZ2xlIGluIGEgbW9yZSByZWFkYWJsZSB3YXlcclxuICAgICAgICAgICAgbGV0IHJvdGF0aW9uX2RlZ3JlZXMgPSBldmVudC5hbHBoYTtcclxuICAgICAgICAgICAgbGV0IGZyb250VG9CYWNrX2RlZ3JlZXMgPSBldmVudC5iZXRhO1xyXG4gICAgICAgICAgICBsZXQgbGVmdFRvUmlnaHRfZGVncmVlcyA9IGV2ZW50LmdhbW1hO1xyXG5cclxuICAgICAgICAgICAgbmV3IE1lbnVCdXR0b24odGhpcywgMTAwLCAyNTAsICdjbGlja2VkJywgKCkgPT4gY29uc29sZS5sb2coJ2hlbHAgYnV0dG9uIGNsaWNrZWQnKSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgbmV3IE1lbnVCdXR0b24odGhpcywgMTAwLCAzNTAsICdIZWxwJywgKCkgPT4gY29uc29sZS5sb2coJ2hlbHAgYnV0dG9uIGNsaWNrZWQnKSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IElucHV0LCBHYW1lT2JqZWN0cywgQmxlbmRNb2RlcyB9IGZyb20gJ3BoYXNlcic7XHJcbmltcG9ydCB7IGdldEdhbWVXaWR0aCwgZ2V0R2FtZUhlaWdodCwgZHJpbmtUb0NvbG9yTWFwIH0gZnJvbSAnLi4vaGVscGVycyc7XHJcblxyXG5jb25zdCBzY2VuZUNvbmZpZzogUGhhc2VyLlR5cGVzLlNjZW5lcy5TZXR0aW5nc0NvbmZpZyA9IHtcclxuICBhY3RpdmU6IGZhbHNlLFxyXG4gIHZpc2libGU6IGZhbHNlLFxyXG4gIGtleTogJ011ZGRsZScsXHJcbn07XHJcblxyXG5leHBvcnQgY2xhc3MgTXVkZGxlU2NlbmUgZXh0ZW5kcyBQaGFzZXIuU2NlbmUge1xyXG4gIHB1YmxpYyBzcGVlZCA9IDIwMDtcclxuXHJcbiAgcHJpdmF0ZSBlbXB0eUdsYXNzOiBQaGFzZXIuR2FtZU9iamVjdHMuU3ByaXRlO1xyXG5cclxuICBwcml2YXRlIGN1cnNvcktleXM6IFBoYXNlci5UeXBlcy5JbnB1dC5LZXlib2FyZC5DdXJzb3JLZXlzO1xyXG4gIHByaXZhdGUgbXVkZGxlcjogUGhhc2VyLkdhbWVPYmplY3RzLlNwcml0ZTtcclxuICBwcml2YXRlIG11ZGRsZUNvbnRhaW5lclJlY3Q6IFBoYXNlci5HYW1lT2JqZWN0cy5SZWN0YW5nbGU7XHJcbiAgcHJpdmF0ZSBtb3ZpbmdUaHJlc2hvbGRSZWN0OiBQaGFzZXIuR2FtZU9iamVjdHMuUmVjdGFuZ2xlO1xyXG4gIHByaXZhdGUgZmlsbFJlY3Q6IFBoYXNlci5HYW1lT2JqZWN0cy5SZWN0YW5nbGU7XHJcblxyXG4gIHByaXZhdGUgY29udGVudHM6IHN0cmluZ1tdID0gW107XHJcbiAgcHJpdmF0ZSBnbGFzc0ZpbGxlcnM6IFBoYXNlci5HYW1lT2JqZWN0cy5TcHJpdGVbXSA9IFtdO1xyXG5cclxuICBwcml2YXRlIGlzUG91cmluZyA9IDA7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoc2NlbmVDb25maWcpO1xyXG4gIH1cclxuICBwdWJsaWMgdGV4dDE6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0O1xyXG4gIHB1YmxpYyB0ZXh0MjogUGhhc2VyLkdhbWVPYmplY3RzLlRleHQ7XHJcbiAgcHVibGljIHRleHQzOiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dDtcclxuICBwdWJsaWMgdGV4dDQ6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0O1xyXG4gIHB1YmxpYyB0ZXh0NTogUGhhc2VyLkdhbWVPYmplY3RzLlRleHQ7XHJcblxyXG4gIHB1YmxpYyBlcmFzZUNvdW50ID0gMDtcclxuICBwdWJsaWMgaWNlTGV2ZWwgPSAwO1xyXG4gIHByaXZhdGUgdHJhbnNpdGlvbmluZyA9IGZhbHNlO1xyXG4gIHByaXZhdGUgc3RhcnRQb3NpdGlvbiA9IHRydWU7XHJcblxyXG4gIHB1YmxpYyBjcmVhdGUoKTogdm9pZCB7XHJcbiAgICBjb25zb2xlLmxvZygnTXVkZGxlJyk7XHJcbiAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IHRoaXMuc3lzLmdhbWUuY2FudmFzO1xyXG4gICAgdGhpcy5lbXB0eUdsYXNzID0gdGhpcy5hZGQuc3ByaXRlKHdpZHRoIC8gMiwgaGVpZ2h0IC8gMiwgJ2VtcHR5Z2xhc3MnKTtcclxuXHJcbiAgICB0aGlzLnRyYW5zaXRpb25pbmcgPSBmYWxzZTtcclxuICAgIHRoaXMuZXJhc2VDb3VudCA9IDA7XHJcbiAgICB0aGlzLmljZUxldmVsID0gMDtcclxuICAgIHRoaXMuc3RhcnRQb3NpdGlvbiA9IHRydWU7XHJcbiAgICAvLyBBZGQgYSBwbGF5ZXIgc3ByaXRlIHRoYXQgY2FuIGJlIG1vdmVkIGFyb3VuZC4gUGxhY2UgaGltIGluIHRoZSBtaWRkbGUgb2YgdGhlIHNjcmVlbi5cclxuXHJcbiAgICB0aGlzLm11ZGRsZXIgPSB0aGlzLmFkZFxyXG4gICAgICAuc3ByaXRlKHdpZHRoIC8gMiwgaGVpZ2h0IC8gMiAtIHRoaXMuZW1wdHlHbGFzcy5kaXNwbGF5SGVpZ2h0IC8gMywgJ211ZGRsZXInKVxyXG4gICAgICAuc2V0SW50ZXJhY3RpdmUoKVxyXG4gICAgICAuc2V0RGVwdGgoMSlcclxuICAgICAgLnNldFNjYWxlKDAuNSlcclxuICAgICAgLnNldEFuZ2xlKDE4MCk7XHJcbiAgICB0aGlzLm11ZGRsZUNvbnRhaW5lclJlY3QgPSB0aGlzLmFkZFxyXG4gICAgICAucmVjdGFuZ2xlKFxyXG4gICAgICAgIHRoaXMuZW1wdHlHbGFzcy54LFxyXG4gICAgICAgIHRoaXMuZW1wdHlHbGFzcy55LFxyXG4gICAgICAgIHRoaXMuZW1wdHlHbGFzcy5kaXNwbGF5V2lkdGgsXHJcbiAgICAgICAgdGhpcy5lbXB0eUdsYXNzLmRpc3BsYXlIZWlnaHQsXHJcbiAgICAgICAgMHgwMGZmMDAsXHJcbiAgICAgIClcclxuICAgICAgLnNldFNjYWxlKDAuNylcclxuICAgICAgLnNldERlcHRoKDIpXHJcbiAgICAgIC5zZXRBbHBoYSgwLjUpO1xyXG4gICAgdGhpcy5tb3ZpbmdUaHJlc2hvbGRSZWN0ID0gdGhpcy5hZGRcclxuICAgICAgLnJlY3RhbmdsZShcclxuICAgICAgICB0aGlzLmVtcHR5R2xhc3MueCxcclxuICAgICAgICB0aGlzLmVtcHR5R2xhc3MueSArIGhlaWdodCAvIDE1LFxyXG4gICAgICAgIHRoaXMuZW1wdHlHbGFzcy5kaXNwbGF5V2lkdGgsXHJcbiAgICAgICAgaGVpZ2h0IC8gNDAsXHJcbiAgICAgICAgMHgwMDAwZmYsXHJcbiAgICAgIClcclxuICAgICAgLnNldERlcHRoKDIpXHJcbiAgICAgIC5zZXRBbHBoYSgwLjUpO1xyXG5cclxuICAgIHRoaXMuZmlsbFJlY3QgPSB0aGlzLmFkZFxyXG4gICAgICAucmVjdGFuZ2xlKHRoaXMuZW1wdHlHbGFzcy54LCB0aGlzLmVtcHR5R2xhc3MuZ2V0Qm90dG9tTGVmdCgpLnksIHRoaXMuZW1wdHlHbGFzcy5kaXNwbGF5V2lkdGgsIDEsIDB4ZmYwMDAwKVxyXG4gICAgICAuc2V0RGVwdGgoMilcclxuICAgICAgLnNldEFscGhhKDAuNSlcclxuICAgICAgLnNldEJsZW5kTW9kZShQaGFzZXIuQmxlbmRNb2Rlcy5NVUxUSVBMWSk7XHJcblxyXG4gICAgY29uc3QgY292ZXIgPSB0aGlzLm1ha2UuaW1hZ2Uoe1xyXG4gICAgICBrZXk6ICdvcmFuZ2UnLFxyXG4gICAgICBhZGQ6IGZhbHNlLFxyXG4gICAgfSk7XHJcbiAgICBjb3Zlci5zZXRTY2FsZSgwLjcpO1xyXG4gICAgY29uc29sZS5sb2coYGNvdmVyOiAke2NvdmVyLnh9ICR7Y292ZXIueX1gKTtcclxuICAgIC8vY292ZXIuc2V0UG9zaXRpb24odGhpcy5vcmFuZ2UueCwgdGhpcy5vcmFuZ2UueSk7XHJcbiAgICBjb3Zlci5zZXREZXB0aCgxKTtcclxuICAgIC8vY292ZXIuc2V0T3JpZ2luKDAsIDApO1xyXG4gICAgLy90aGlzLnJ0LnNldE9yaWdpbigwLjUsIDAuNSk7XHJcblxyXG4gICAgdGhpcy5pbnB1dC5vbignZHJhZ3N0YXJ0JywgKHBvaW50ZXIsIGdhbWVPYmplY3QpID0+IHtcclxuICAgICAgZ2FtZU9iamVjdC5zZXRUaW50KDB4OTk5OTk5KTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuaW5wdXQub24oJ2RyYWdlbmQnLCAocG9pbnRlciwgZ2FtZU9iamVjdCkgPT4ge1xyXG4gICAgICBnYW1lT2JqZWN0LmNsZWFyVGludCgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5pbnB1dC5zZXREcmFnZ2FibGUodGhpcy5tdWRkbGVyKTtcclxuXHJcbiAgICB0aGlzLmlucHV0Lm9uKCdwb2ludGVydXAnLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMudGV4dDEuc2V0VGV4dChgzrg6ICR7dGhpcy5pbnB1dC5hY3RpdmVQb2ludGVyLmdldEFuZ2xlKCl9YCk7XHJcbiAgICAgIHRoaXMudGV4dDIuc2V0VGV4dChgeDogJHt0aGlzLmlucHV0LmFjdGl2ZVBvaW50ZXIuZ2V0RGlzdGFuY2VYKCl9YCk7XHJcbiAgICAgIHRoaXMudGV4dDMuc2V0VGV4dChgeTogJHt0aGlzLmlucHV0LmFjdGl2ZVBvaW50ZXIuZ2V0RGlzdGFuY2VZKCl9YCk7XHJcbiAgICAgIHRoaXMudGV4dDQuc2V0VGV4dChgZDogJHt0aGlzLmlucHV0LmFjdGl2ZVBvaW50ZXIuZ2V0RGlzdGFuY2UoKX1gKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuaW5wdXQub24oJ3BvaW50ZXJkb3duJywgKCkgPT4ge30pO1xyXG5cclxuICAgIHRoaXMuaW5wdXQub24oJ2RyYWcnLCAocG9pbnRlciwgZ2FtZU9iamVjdCwgZHJhZ1gsIGRyYWdZKSA9PiB7XHJcbiAgICAgIGNvbnN0IHN0eCA9IGdhbWVPYmplY3QueDtcclxuICAgICAgY29uc3Qgc3R5ID0gZ2FtZU9iamVjdC55O1xyXG4gICAgICBnYW1lT2JqZWN0LnkgPSBkcmFnWTtcclxuICAgICAgZ2FtZU9iamVjdC54ID0gZHJhZ1g7XHJcblxyXG4gICAgICAvLyBrZWVwaW5nIHRoZSBtdWRkbGVyIGluIHRoZSBnbGFzc1xyXG4gICAgICBjb25zdCBibEMgPSB0aGlzLm11ZGRsZUNvbnRhaW5lclJlY3QuZ2V0Qm90dG9tTGVmdCgpO1xyXG4gICAgICBjb25zdCBickMgPSB0aGlzLm11ZGRsZUNvbnRhaW5lclJlY3QuZ2V0Qm90dG9tUmlnaHQoKTtcclxuICAgICAgY29uc3QgdHJDID0gdGhpcy5tdWRkbGVDb250YWluZXJSZWN0LmdldFRvcFJpZ2h0KCk7XHJcbiAgICAgIGNvbnN0IGJsTSA9IHRoaXMubXVkZGxlci5nZXRUb3BSaWdodCgpO1xyXG4gICAgICBjb25zdCBick0gPSB0aGlzLm11ZGRsZXIuZ2V0VG9wTGVmdCgpO1xyXG4gICAgICBjb25zb2xlLmxvZyhibE0ueCk7XHJcbiAgICAgIGNvbnNvbGUubG9nKGJsQy54KTtcclxuICAgICAgaWYgKGJsTS54IDwgYmxDLngpIHtcclxuICAgICAgICBnYW1lT2JqZWN0LnkgPSBzdHk7XHJcbiAgICAgICAgZ2FtZU9iamVjdC54ID0gc3R4O1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChick0ueCA+IGJyQy54KSB7XHJcbiAgICAgICAgZ2FtZU9iamVjdC55ID0gc3R5O1xyXG4gICAgICAgIGdhbWVPYmplY3QueCA9IHN0eDtcclxuICAgICAgfVxyXG4gICAgICBpZiAoYnJNLnkgPiBickMueSkge1xyXG4gICAgICAgIGdhbWVPYmplY3QueSA9IHN0eTtcclxuICAgICAgICBnYW1lT2JqZWN0LnggPSBzdHg7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGJsTS55IDwgdHJDLnkpIHtcclxuICAgICAgICBnYW1lT2JqZWN0LnkgPSBzdHk7XHJcbiAgICAgICAgZ2FtZU9iamVjdC54ID0gc3R4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBjaGVja2luZyBpZiBpdCBwcm9wZXJseSBtb3ZlcyB1cCBhbmQgZG93blxyXG4gICAgICBpZiAoYmxNLnkgPiB0aGlzLm1vdmluZ1RocmVzaG9sZFJlY3QuZ2V0Qm90dG9tTGVmdCgpLnkgJiYgIXRoaXMuc3RhcnRQb3NpdGlvbikge1xyXG4gICAgICAgIHRoaXMuc3RhcnRQb3NpdGlvbiA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5pY2VMZXZlbCArPSAxO1xyXG4gICAgICAgIHRoaXMudGV4dDEuc2V0VGV4dChgJHt0aGlzLmljZUxldmVsfWApO1xyXG4gICAgICAgIHRoaXMuZmlsbFJlY3QuZGlzcGxheUhlaWdodCArPSAxNTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoYmxNLnkgPCB0aGlzLm1vdmluZ1RocmVzaG9sZFJlY3QuZ2V0VG9wTGVmdCgpLnkgJiYgdGhpcy5zdGFydFBvc2l0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5zdGFydFBvc2l0aW9uID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy50ZXh0MS5zZXRUZXh0KGAke3RoaXMuaWNlTGV2ZWx9YCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIHRyYW5zaXRpb25cclxuICAgICAgaWYgKHRoaXMuaWNlTGV2ZWwgPiA0ICYmIHRoaXMudHJhbnNpdGlvbmluZyA9PSBmYWxzZSkge1xyXG4gICAgICAgIHRoaXMudHJhbnNpdGlvbmluZyA9IHRydWU7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLnNjZW5lLnN0YXJ0KCdHYW1lJyk7XHJcbiAgICAgICAgfSwgNTAwKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy50ZXh0MSA9IHRoaXMuYWRkLnRleHQoMTAsIDEwLCAnJywgeyBjb2xvcjogJyMwMGZmMDAnIH0pO1xyXG4gICAgdGhpcy50ZXh0MiA9IHRoaXMuYWRkLnRleHQoMTAsIDI1LCAnJywgeyBjb2xvcjogJyMwMGZmMDAnIH0pO1xyXG4gICAgdGhpcy50ZXh0MyA9IHRoaXMuYWRkLnRleHQoMTAsIDQwLCAnJywgeyBjb2xvcjogJyMwMGZmMDAnIH0pO1xyXG4gICAgdGhpcy50ZXh0NCA9IHRoaXMuYWRkLnRleHQoMTAsIDU1LCAnJywgeyBjb2xvcjogJyMwMGZmMDAnIH0pO1xyXG4gICAgdGhpcy50ZXh0NSA9IHRoaXMuYWRkLnRleHQoMTAsIDcwLCAnJywgeyBjb2xvcjogJyMwMGZmMDAnIH0pO1xyXG4gICAgdGhpcy50ZXh0MS5zZXRUZXh0KGAke3RoaXMuaWNlTGV2ZWx9YCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdXBkYXRlKCk6IHZvaWQge31cclxufVxyXG4iLCJpbXBvcnQgeyBJbnB1dCwgR2FtZU9iamVjdHMsIEJsZW5kTW9kZXMgfSBmcm9tICdwaGFzZXInO1xyXG5pbXBvcnQgeyBnZXRHYW1lV2lkdGgsIGdldEdhbWVIZWlnaHQsIGRyaW5rVG9Db2xvck1hcCB9IGZyb20gJy4uL2hlbHBlcnMnO1xyXG5cclxuY29uc3Qgc2NlbmVDb25maWc6IFBoYXNlci5UeXBlcy5TY2VuZXMuU2V0dGluZ3NDb25maWcgPSB7XHJcbiAgYWN0aXZlOiBmYWxzZSxcclxuICB2aXNpYmxlOiBmYWxzZSxcclxuICBrZXk6ICdPcmFuZ2UnLFxyXG59O1xyXG5cclxuZXhwb3J0IGNsYXNzIE9yYW5nZVNjZW5lIGV4dGVuZHMgUGhhc2VyLlNjZW5lIHtcclxuICBwdWJsaWMgc3BlZWQgPSAyMDA7XHJcblxyXG4gIHByaXZhdGUgY3Vyc29yS2V5czogUGhhc2VyLlR5cGVzLklucHV0LktleWJvYXJkLkN1cnNvcktleXM7XHJcbiAgcHJpdmF0ZSBvcmFuZ2U6IFBoYXNlci5HYW1lT2JqZWN0cy5TcHJpdGU7XHJcbiAgcHJpdmF0ZSBvcmFuZ2VQZWVsZWQ6IFBoYXNlci5HYW1lT2JqZWN0cy5TcHJpdGU7XHJcbiAgcHJpdmF0ZSBjYW5lbGxlOiBQaGFzZXIuR2FtZU9iamVjdHMuU3ByaXRlO1xyXG4gIHByaXZhdGUgYmxhZGVSZWN0OiBQaGFzZXIuR2FtZU9iamVjdHMuUmVjdGFuZ2xlO1xyXG5cclxuICBwcml2YXRlIGNvbnRlbnRzOiBzdHJpbmdbXSA9IFtdO1xyXG4gIHByaXZhdGUgZ2xhc3NGaWxsZXJzOiBQaGFzZXIuR2FtZU9iamVjdHMuU3ByaXRlW10gPSBbXTtcclxuXHJcbiAgcHJpdmF0ZSBpc1BvdXJpbmcgPSAwO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKHNjZW5lQ29uZmlnKTtcclxuICB9XHJcbiAgcHVibGljIHRleHQxOiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dDtcclxuICBwdWJsaWMgdGV4dDI6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0O1xyXG4gIHB1YmxpYyB0ZXh0MzogUGhhc2VyLkdhbWVPYmplY3RzLlRleHQ7XHJcbiAgcHVibGljIHRleHQ0OiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dDtcclxuICBwdWJsaWMgdGV4dDU6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0O1xyXG4gIHB1YmxpYyBydDogUGhhc2VyLkdhbWVPYmplY3RzLlJlbmRlclRleHR1cmU7XHJcbiAgcHVibGljIGVyYXNlQ291bnQgPSAwO1xyXG4gIHB1YmxpYyBpY2VMZXZlbCA9IDA7XHJcbiAgcHJpdmF0ZSB0cmFuc2l0aW9uaW5nID0gZmFsc2U7XHJcblxyXG4gIHB1YmxpYyBjcmVhdGUoKTogdm9pZCB7XHJcbiAgICBjb25zb2xlLmxvZygnT3JhbmdlJyk7XHJcbiAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IHRoaXMuc3lzLmdhbWUuY2FudmFzO1xyXG4gICAgdGhpcy50cmFuc2l0aW9uaW5nID0gZmFsc2U7XHJcbiAgICB0aGlzLmVyYXNlQ291bnQgPSAwO1xyXG4gICAgdGhpcy5pY2VMZXZlbCA9IDA7XHJcbiAgICAvLyBBZGQgYSBwbGF5ZXIgc3ByaXRlIHRoYXQgY2FuIGJlIG1vdmVkIGFyb3VuZC4gUGxhY2UgaGltIGluIHRoZSBtaWRkbGUgb2YgdGhlIHNjcmVlbi5cclxuICAgIHRoaXMub3JhbmdlUGVlbGVkID0gdGhpcy5hZGQuc3ByaXRlKHdpZHRoIC8gMiwgaGVpZ2h0IC8gNCwgJ29yYW5nZScpO1xyXG4gICAgdGhpcy5vcmFuZ2VQZWVsZWQuc2V0U2NhbGUoMC43KTtcclxuICAgIHRoaXMub3JhbmdlID0gdGhpcy5hZGQuc3ByaXRlKHdpZHRoIC8gMiwgaGVpZ2h0IC8gNCwgJ29yYW5nZWluc2lkZScpO1xyXG4gICAgdGhpcy5vcmFuZ2Uuc2V0U2NhbGUoMC43KTtcclxuXHJcbiAgICB0aGlzLmNhbmVsbGUgPSB0aGlzLmFkZFxyXG4gICAgICAuc3ByaXRlKCgzICogd2lkdGgpIC8gNCwgKDMgKiBoZWlnaHQpIC8gNCwgJ2NhbmVsbGVrbmlmZScpXHJcbiAgICAgIC5zZXRJbnRlcmFjdGl2ZSgpXHJcbiAgICAgIC5zZXREZXB0aCgxKTtcclxuICAgIHRoaXMuYmxhZGVSZWN0ID0gdGhpcy5hZGRcclxuICAgICAgLnJlY3RhbmdsZShcclxuICAgICAgICB0aGlzLmNhbmVsbGUueCArIHRoaXMuY2FuZWxsZS5kaXNwbGF5V2lkdGggLyA4LFxyXG4gICAgICAgIHRoaXMuY2FuZWxsZS55IC0gdGhpcy5jYW5lbGxlLmRpc3BsYXlIZWlnaHQgLyAyICsgdGhpcy5jYW5lbGxlLmRpc3BsYXlIZWlnaHQgKiAoMSAvIDQwKSxcclxuICAgICAgICB0aGlzLmNhbmVsbGUuZGlzcGxheVdpZHRoICogKDMgLyA0KSxcclxuICAgICAgICB0aGlzLmNhbmVsbGUuZGlzcGxheUhlaWdodCAqICgxIC8gMjApLFxyXG4gICAgICAgIDB4MDBmZjAwLFxyXG4gICAgICApXHJcbiAgICAgIC5zZXREZXB0aCgyKVxyXG4gICAgICAuc2V0QWxwaGEoMC41KTtcclxuXHJcbiAgICBjb25zdCBjb3ZlciA9IHRoaXMubWFrZS5pbWFnZSh7XHJcbiAgICAgIGtleTogJ29yYW5nZScsXHJcbiAgICAgIGFkZDogZmFsc2UsXHJcbiAgICB9KTtcclxuICAgIGNvdmVyLnNldFNjYWxlKDAuNyk7XHJcbiAgICBjb25zb2xlLmxvZyhgY292ZXI6ICR7Y292ZXIueH0gJHtjb3Zlci55fWApO1xyXG4gICAgLy9jb3Zlci5zZXRQb3NpdGlvbih0aGlzLm9yYW5nZS54LCB0aGlzLm9yYW5nZS55KTtcclxuICAgIGNvdmVyLnNldERlcHRoKDEpO1xyXG4gICAgLy9jb3Zlci5zZXRPcmlnaW4oMCwgMCk7XHJcbiAgICB0aGlzLnJ0ID0gdGhpcy5hZGQucmVuZGVyVGV4dHVyZShcclxuICAgICAgdGhpcy5vcmFuZ2UuZ2V0VG9wTGVmdCgpLngsXHJcbiAgICAgIHRoaXMub3JhbmdlLmdldFRvcExlZnQoKS55LFxyXG4gICAgICB0aGlzLm9yYW5nZVBlZWxlZC5kaXNwbGF5V2lkdGgsXHJcbiAgICAgIHRoaXMub3JhbmdlUGVlbGVkLmRpc3BsYXlIZWlnaHQsXHJcbiAgICApO1xyXG4gICAgLy90aGlzLnJ0LnNldE9yaWdpbigwLjUsIDAuNSk7XHJcbiAgICBjb25zb2xlLmxvZyhgcnQ6ICR7dGhpcy5ydC54fSAke3RoaXMucnQueX1gKTtcclxuICAgIHRoaXMucnQuc2V0UG9zaXRpb24odGhpcy5vcmFuZ2VQZWVsZWQuZ2V0VG9wTGVmdCgpLngsIHRoaXMub3JhbmdlUGVlbGVkLmdldFRvcExlZnQoKS55KTtcclxuICAgIC8vdGhpcy5ydC5zZXRUaW50KDB4MDBGRjAwKTtcclxuICAgIHRoaXMucnQuZHJhdyhjb3ZlciwgdGhpcy5vcmFuZ2VQZWVsZWQuZGlzcGxheVdpZHRoIC8gMiwgdGhpcy5vcmFuZ2VQZWVsZWQuZGlzcGxheUhlaWdodCAvIDIpOyAvLywgd2lkdGggKiAwLjUsIGhlaWdodCAqIDAuNSlcclxuICAgIGNvbnNvbGUubG9nKGBydDogJHt0aGlzLnJ0Lnh9ICR7dGhpcy5ydC55fWApO1xyXG4gICAgY29uc29sZS5sb2coYG9yYW5nZTogJHt0aGlzLm9yYW5nZS54fSAke3RoaXMub3JhbmdlLnl9YCk7XHJcbiAgICBjb25zb2xlLmxvZyhgb3JhbmdlUGVlbGVkOiAke3RoaXMub3JhbmdlUGVlbGVkLnh9ICR7dGhpcy5vcmFuZ2VQZWVsZWQueX1gKTtcclxuXHJcbiAgICB0aGlzLmlucHV0Lm9uKCdkcmFnc3RhcnQnLCAocG9pbnRlciwgZ2FtZU9iamVjdCkgPT4ge1xyXG4gICAgICBnYW1lT2JqZWN0LnNldFRpbnQoMHg5OTk5OTkpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5pbnB1dC5vbignZHJhZ2VuZCcsIChwb2ludGVyLCBnYW1lT2JqZWN0KSA9PiB7XHJcbiAgICAgIGdhbWVPYmplY3QuY2xlYXJUaW50KCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmlucHV0LnNldERyYWdnYWJsZSh0aGlzLmNhbmVsbGUpO1xyXG5cclxuICAgIHRoaXMuaW5wdXQub24oJ3BvaW50ZXJ1cCcsICgpID0+IHtcclxuICAgICAgdGhpcy50ZXh0MS5zZXRUZXh0KGDOuDogJHt0aGlzLmlucHV0LmFjdGl2ZVBvaW50ZXIuZ2V0QW5nbGUoKX1gKTtcclxuICAgICAgdGhpcy50ZXh0Mi5zZXRUZXh0KGB4OiAke3RoaXMuaW5wdXQuYWN0aXZlUG9pbnRlci5nZXREaXN0YW5jZVgoKX1gKTtcclxuICAgICAgdGhpcy50ZXh0My5zZXRUZXh0KGB5OiAke3RoaXMuaW5wdXQuYWN0aXZlUG9pbnRlci5nZXREaXN0YW5jZVkoKX1gKTtcclxuICAgICAgdGhpcy50ZXh0NC5zZXRUZXh0KGBkOiAke3RoaXMuaW5wdXQuYWN0aXZlUG9pbnRlci5nZXREaXN0YW5jZSgpfWApO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5pbnB1dC5vbigncG9pbnRlcmRvd24nLCAoKSA9PiB7fSk7XHJcblxyXG4gICAgdGhpcy5pbnB1dC5vbignZHJhZycsIChwb2ludGVyLCBnYW1lT2JqZWN0LCBkcmFnWCwgZHJhZ1kpID0+IHtcclxuICAgICAgLy8gZnJvbSBoZXJlOiBuZWVkIHRvIDEuIGNhbGN1bGF0ZSBhbmdsZSBiZXR3ZWVuIGJhc2Ugb2Ygb2JqZWN0IGFuZCBjdXJzb3JcclxuICAgICAgLy8gMi4gcm90YXRlIHVudGlsIHRvcCBvZiBib3R0bGUgaXMgcG9pbnRpbmcgdG8gY3Vyc29yXHJcblxyXG4gICAgICBnYW1lT2JqZWN0LnkgPSBkcmFnWTtcclxuICAgICAgZ2FtZU9iamVjdC54ID0gZHJhZ1g7XHJcbiAgICAgIHRoaXMuYmxhZGVSZWN0LnNldFBvc2l0aW9uKFxyXG4gICAgICAgIGRyYWdYICsgdGhpcy5jYW5lbGxlLmRpc3BsYXlXaWR0aCAvIDgsXHJcbiAgICAgICAgZHJhZ1kgLSB0aGlzLmNhbmVsbGUuZGlzcGxheUhlaWdodCAvIDIgKyB0aGlzLmNhbmVsbGUuZGlzcGxheUhlaWdodCAqICgxIC8gNDApLFxyXG4gICAgICApO1xyXG4gICAgICB0aGlzLnRleHQyLnNldFRleHQoYGRyYWdZOiAke2RyYWdZfWApO1xyXG4gICAgICB0aGlzLnRleHQzLnNldFRleHQoYHk6ICR7dGhpcy5pbnB1dC5hY3RpdmVQb2ludGVyLnByZXZQb3NpdGlvbi55fWApO1xyXG4gICAgICBpZiAoXHJcbiAgICAgICAgdGhpcy5pbnB1dC5hY3RpdmVQb2ludGVyLnByZXZQb3NpdGlvbi55IDwgdGhpcy5pbnB1dC5hY3RpdmVQb2ludGVyLnkgJiZcclxuICAgICAgICB0aGlzLm9yYW5nZS5nZXRCb3VuZHMoKS5jb250YWlucyh0aGlzLmJsYWRlUmVjdC54LCB0aGlzLmJsYWRlUmVjdC55KVxyXG4gICAgICApIHtcclxuICAgICAgICBjb25zdCB4ID0gdGhpcy5ibGFkZVJlY3QueCAtIHRoaXMucnQueDtcclxuICAgICAgICBjb25zdCB5ID0gdGhpcy5ibGFkZVJlY3QueSAtIHRoaXMucnQueTtcclxuICAgICAgICB0aGlzLnJ0LmVyYXNlKFxyXG4gICAgICAgICAgdGhpcy5ibGFkZVJlY3QsXHJcbiAgICAgICAgICB4LFxyXG4gICAgICAgICAgeSxcclxuICAgICAgICAgIC8vdGhpcy5ibGFkZVJlY3QueCAtIHRoaXMuYmxhZGVSZWN0LmRpc3BsYXlXaWR0aCAvIDIsXHJcbiAgICAgICAgICAvL3RoaXMuYmxhZGVSZWN0LnkgLSB0aGlzLmJsYWRlUmVjdC5kaXNwbGF5SGVpZ2h0LFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdGhpcy5lcmFzZUNvdW50Kys7XHJcbiAgICAgICAgaWYgKHRoaXMuZXJhc2VDb3VudCA+PSAxMDAgJiYgIXRoaXMudHJhbnNpdGlvbmluZykge1xyXG4gICAgICAgICAgdGhpcy50cmFuc2l0aW9uaW5nID0gdHJ1ZTtcclxuICAgICAgICAgIGRvY3VtZW50LmNvb2tpZSA9IGBvcmFuZ2U9MWA7XHJcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zY2VuZS5zdGFydCgnR2FtZScpO1xyXG4gICAgICAgICAgfSwgNTAwKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMudGV4dDEgPSB0aGlzLmFkZC50ZXh0KDEwLCAxMCwgJycsIHsgY29sb3I6ICcjMDBmZjAwJyB9KTtcclxuICAgIHRoaXMudGV4dDIgPSB0aGlzLmFkZC50ZXh0KDEwLCAyNSwgJycsIHsgY29sb3I6ICcjMDBmZjAwJyB9KTtcclxuICAgIHRoaXMudGV4dDMgPSB0aGlzLmFkZC50ZXh0KDEwLCA0MCwgJycsIHsgY29sb3I6ICcjMDBmZjAwJyB9KTtcclxuICAgIHRoaXMudGV4dDQgPSB0aGlzLmFkZC50ZXh0KDEwLCA1NSwgJycsIHsgY29sb3I6ICcjMDBmZjAwJyB9KTtcclxuICAgIHRoaXMudGV4dDUgPSB0aGlzLmFkZC50ZXh0KDEwLCA3MCwgJycsIHsgY29sb3I6ICcjMDBmZjAwJyB9KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyB1cGRhdGUoKTogdm9pZCB7fVxyXG59XHJcbiIsImltcG9ydCB7IElucHV0LCBHYW1lT2JqZWN0cyB9IGZyb20gJ3BoYXNlcic7XHJcbmltcG9ydCB7IGdldEdhbWVXaWR0aCwgZ2V0R2FtZUhlaWdodCwgZHJpbmtUb0NvbG9yTWFwIH0gZnJvbSAnLi4vaGVscGVycyc7XHJcblxyXG5jb25zdCBzY2VuZUNvbmZpZzogUGhhc2VyLlR5cGVzLlNjZW5lcy5TZXR0aW5nc0NvbmZpZyA9IHtcclxuICBhY3RpdmU6IGZhbHNlLFxyXG4gIHZpc2libGU6IGZhbHNlLFxyXG4gIGtleTogJ1BvdXInLFxyXG59O1xyXG5jbGFzcyBHYW1lU2NlbmVBcmd1bWVudHMge1xyXG4gIHB1YmxpYyBCb3R0bGVTcHJpdGVOYW1lOiBzdHJpbmc7XHJcbn1cclxuZXhwb3J0IGNsYXNzIFBvdXJTY2VuZSBleHRlbmRzIFBoYXNlci5TY2VuZSB7XHJcbiAgcHVibGljIHNwZWVkID0gMjAwO1xyXG5cclxuICBwcml2YXRlIGN1cnNvcktleXM6IFBoYXNlci5UeXBlcy5JbnB1dC5LZXlib2FyZC5DdXJzb3JLZXlzO1xyXG4gIHByaXZhdGUgYm90dGxlOiBQaGFzZXIuR2FtZU9iamVjdHMuU3ByaXRlO1xyXG4gIHByaXZhdGUgYm91cmJvbjogUGhhc2VyLkdhbWVPYmplY3RzLlNwcml0ZTtcclxuICBwcml2YXRlIGVtcHR5R2xhc3M6IFBoYXNlci5HYW1lT2JqZWN0cy5TcHJpdGU7XHJcbiAgcHJpdmF0ZSBmaWxsZWRnbGFzczE6IFBoYXNlci5HYW1lT2JqZWN0cy5TcHJpdGU7XHJcbiAgcHJpdmF0ZSBmaWxsZWRnbGFzczI6IFBoYXNlci5HYW1lT2JqZWN0cy5TcHJpdGU7XHJcblxyXG4gIHByaXZhdGUgY29udGVudHM6IHN0cmluZ1tdID0gW107XHJcbiAgcHJpdmF0ZSBnbGFzc0ZpbGxlcnM6IFBoYXNlci5HYW1lT2JqZWN0cy5TcHJpdGVbXSA9IFtdO1xyXG5cclxuICBwcml2YXRlIGlzUG91cmluZyA9IDA7XHJcbiAgcHJpdmF0ZSBwb3VyQ291bnQgPSAwO1xyXG4gIHByaXZhdGUgdHJhbnNpdGlvbmluZyA9IGZhbHNlO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKHNjZW5lQ29uZmlnKTtcclxuICB9XHJcbiAgcHVibGljIHRleHQxOiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dDtcclxuICBwdWJsaWMgdGV4dDI6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0O1xyXG4gIHB1YmxpYyBib3R0bGVOYW1lOiBzdHJpbmc7XHJcbiAgcHJpdmF0ZSBsaXF1aWRSZWN0YW5nbGU6IFBoYXNlci5HYW1lT2JqZWN0cy5SZWN0YW5nbGU7XHJcblxyXG4gIHB1YmxpYyBpbml0KGRhdGE6IEdhbWVTY2VuZUFyZ3VtZW50cyk6IHZvaWQge1xyXG4gICAgdGhpcy5ib3R0bGVOYW1lID0gZGF0YS5Cb3R0bGVTcHJpdGVOYW1lO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNyZWF0ZSgpOiB2b2lkIHtcclxuICAgIGNvbnNvbGUubG9nKCdQb3VyJyk7XHJcbiAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IHRoaXMuc3lzLmdhbWUuY2FudmFzO1xyXG4gICAgdGhpcy5pc1BvdXJpbmcgPSAwO1xyXG4gICAgdGhpcy5wb3VyQ291bnQgPSAwO1xyXG4gICAgdGhpcy50cmFuc2l0aW9uaW5nID0gZmFsc2U7XHJcblxyXG4gICAgLy8gQWRkIGEgcGxheWVyIHNwcml0ZSB0aGF0IGNhbiBiZSBtb3ZlZCBhcm91bmQuIFBsYWNlIGhpbSBpbiB0aGUgbWlkZGxlIG9mIHRoZSBzY3JlZW4uXHJcbiAgICB0aGlzLmVtcHR5R2xhc3MgPSB0aGlzLmFkZC5zcHJpdGUod2lkdGggLyA0LCBoZWlnaHQgLyAyLCAnZW1wdHlnbGFzcycpO1xyXG4gICAgLy90aGlzLmZpbGxlZGdsYXNzMSA9IHRoaXMuYWRkLnNwcml0ZSh3aWR0aCAvIDQsIGhlaWdodCAvIDIsICdmaWxsZWRnbGFzczEnKTtcclxuICAgIC8vdGhpcy5maWxsZWRnbGFzczIgPSB0aGlzLmFkZC5zcHJpdGUod2lkdGggLyA0LCBoZWlnaHQgLyAyLCAnZmlsbGVkZ2xhc3MyJyk7XHJcblxyXG4gICAgdGhpcy5ib3VyYm9uID0gdGhpcy5hZGQuc3ByaXRlKHdpZHRoIC8gOCwgaGVpZ2h0IC8gNCwgJ2NhbmVsbGVrbmlmZScpLnNldEludGVyYWN0aXZlKCk7XHJcbiAgICB0aGlzLmJvdXJib24ub24oJ3BvaW50ZXJkb3duJywgKCkgPT4ge1xyXG4gICAgICB0aGlzLnRleHQxLnNldFRleHQoJ0Fza2VkJyk7XHJcbiAgICAgIERldmljZU1vdGlvbkV2ZW50LnJlcXVlc3RQZXJtaXNzaW9uKCkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICB0aGlzLnRleHQxLnNldFRleHQocmVzcG9uc2UpO1xyXG4gICAgICAgIGlmIChyZXNwb25zZSA9PSAnZ3JhbnRlZCcpIHtcclxuICAgICAgICAgIC8vIEFkZCBhIGxpc3RlbmVyIHRvIGdldCBzbWFydHBob25lIG9yaWVudGF0aW9uXHJcbiAgICAgICAgICAvLyBpbiB0aGUgYWxwaGEtYmV0YS1nYW1tYSBheGVzICh1bml0cyBpbiBkZWdyZWVzKVxyXG4gICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2RldmljZW9yaWVudGF0aW9uJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHVwZGF0ZVJhdGUgPSAxIC8gNjA7XHJcbiAgICAgICAgICAgIC8vIEV4cG9zZSBlYWNoIG9yaWVudGF0aW9uIGFuZ2xlIGluIGEgbW9yZSByZWFkYWJsZSB3YXlcclxuICAgICAgICAgICAgY29uc3Qgcm90YXRpb25fZGVncmVlcyA9IGV2ZW50LmFscGhhO1xyXG4gICAgICAgICAgICBjb25zdCBmcm9udFRvQmFja19kZWdyZWVzID0gZXZlbnQuYmV0YTtcclxuICAgICAgICAgICAgY29uc3QgbGVmdFRvUmlnaHRfZGVncmVlcyA9IGV2ZW50LmdhbW1hO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5ib3R0bGUuYW5nbGUgPSBmcm9udFRvQmFja19kZWdyZWVzIC0gOTA7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc29sZS5sb2coYGdsYXNzIHg6ICR7d2lkdGggLyA0fWApO1xyXG4gICAgY29uc29sZS5sb2coYGdsYXNzIHk6ICR7aGVpZ2h0IC8gMn1gKTtcclxuICAgIHRoaXMuZW1wdHlHbGFzcy5zZXRTY2FsZSgwLjUpO1xyXG4gICAgdGhpcy5lbXB0eUdsYXNzLnNjYWxlWSA9IHRoaXMuZW1wdHlHbGFzcy5zY2FsZVkgKiAwLjU7XHJcblxyXG4gICAgdGhpcy5ib3R0bGUgPSB0aGlzLmFkZC5zcHJpdGUod2lkdGggLyAxLjUsIGhlaWdodCAvIDIsIHRoaXMuYm90dGxlTmFtZSkuc2V0SW50ZXJhY3RpdmUoKTtcclxuICAgIHRoaXMuYm90dGxlLnNldFNjYWxlKDAuNzUpO1xyXG4gICAgY29uc29sZS5sb2codGhpcy5lbXB0eUdsYXNzLngpO1xyXG4gICAgY29uc29sZS5sb2codGhpcy5ib3R0bGUuZGlzcGxheUhlaWdodCk7XHJcbiAgICB0aGlzLmJvdHRsZS5zZXRQb3NpdGlvbih0aGlzLmVtcHR5R2xhc3MueCArIHRoaXMuYm90dGxlLmRpc3BsYXlIZWlnaHQgLyA0KTtcclxuICAgIHRoaXMuYm90dGxlLnNldFNjYWxlKDAuNSk7XHJcblxyXG4gICAgdGhpcy5ib3R0bGUub24oJ3BvaW50ZXJvdmVyJywgKCkgPT4ge1xyXG4gICAgICB0aGlzLmJvdHRsZS5zZXRUaW50KDB4Y2NjY2NjKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuYm90dGxlLm9uKCdwb2ludGVyb3V0JywgKCkgPT4ge1xyXG4gICAgICB0aGlzLmJvdHRsZS5jbGVhclRpbnQoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuaW5wdXQuc2V0RHJhZ2dhYmxlKHRoaXMuYm90dGxlKTtcclxuXHJcbiAgICB0aGlzLmlucHV0Lm9uKCdkcmFnc3RhcnQnLCAocG9pbnRlciwgZ2FtZU9iamVjdCkgPT4ge1xyXG4gICAgICBnYW1lT2JqZWN0LnNldFRpbnQoMHg5OTk5OTkpO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLmxpcXVpZFJlY3RhbmdsZSA9IHRoaXMuYWRkXHJcbiAgICAgIC5yZWN0YW5nbGUoXHJcbiAgICAgICAgdGhpcy5lbXB0eUdsYXNzLngsXHJcbiAgICAgICAgdGhpcy5lbXB0eUdsYXNzLnkgKyB0aGlzLmVtcHR5R2xhc3MuZGlzcGxheUhlaWdodCAvIDIsXHJcbiAgICAgICAgdGhpcy5lbXB0eUdsYXNzLmRpc3BsYXlXaWR0aCxcclxuICAgICAgICArK3RoaXMucG91ckNvdW50LFxyXG4gICAgICAgIGRyaW5rVG9Db2xvck1hcC5nZXQodGhpcy5ib3R0bGVOYW1lKSxcclxuICAgICAgKVxyXG4gICAgICAuc2V0QmxlbmRNb2RlKFBoYXNlci5CbGVuZE1vZGVzLk1VTFRJUExZKTtcclxuXHJcbiAgICB0aGlzLmlucHV0Lm9uKCdkcmFnJywgKHBvaW50ZXIsIGdhbWVPYmplY3QsIGRyYWdYLCBkcmFnWSkgPT4ge1xyXG4gICAgICAvLyBmcm9tIGhlcmU6IG5lZWQgdG8gMS4gY2FsY3VsYXRlIGFuZ2xlIGJldHdlZW4gYmFzZSBvZiBvYmplY3QgYW5kIGN1cnNvclxyXG4gICAgICAvLyAyLiByb3RhdGUgdW50aWwgdG9wIG9mIGJvdHRsZSBpcyBwb2ludGluZyB0byBjdXJzb3JcclxuICAgICAgY29uc3QgeTEgPSBnYW1lT2JqZWN0Lnk7XHJcbiAgICAgIGNvbnN0IHkyID0gdGhpcy5pbnB1dC5hY3RpdmVQb2ludGVyLnk7XHJcbiAgICAgIGNvbnN0IHgxID0gZ2FtZU9iamVjdC54O1xyXG4gICAgICBjb25zdCB4MiA9IHRoaXMuaW5wdXQuYWN0aXZlUG9pbnRlci54O1xyXG5cclxuICAgICAgY29uc3Qgc2xvcGVSYWRzID0gTWF0aC5hdGFuMih5MiAtIHkxLCB4MiAtIHgxKTtcclxuICAgICAgY29uc3QgYWRqdXN0ZWQgPSBzbG9wZVJhZHMgKyAxLjU3MDc5NjMzO1xyXG5cclxuICAgICAgdGhpcy50ZXh0MS5zZXRUZXh0KGAke3RoaXMucG91ckNvdW50fWApO1xyXG4gICAgICBpZiAoYWRqdXN0ZWQgPj0gTWF0aC5QSSB8fCBhZGp1c3RlZCA8PSAwLjAyNSkge1xyXG4gICAgICAgIGdhbWVPYmplY3Qucm90YXRpb24gPSBzbG9wZVJhZHMgKyAxLjU3MDc5NjMzO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvKmlmIChhZGp1c3RlZCA+IDQpIHtcclxuICAgICAgICBpZiAodGhpcy5pc1BvdXJpbmcgPT0gMCkge1xyXG4gICAgICAgICAgdGhpcy5pc1BvdXJpbmcgPSAxO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmlzUG91cmluZyA9IDA7XHJcbiAgICAgIH0qL1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5pbnB1dC5vbignZHJhZ2VuZCcsIChwb2ludGVyLCBnYW1lT2JqZWN0KSA9PiB7XHJcbiAgICAgIGdhbWVPYmplY3QuY2xlYXJUaW50KCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBUaGlzIGlzIGEgbmljZSBoZWxwZXIgUGhhc2VyIHByb3ZpZGVzIHRvIGNyZWF0ZSBsaXN0ZW5lcnMgZm9yIHNvbWUgb2YgdGhlIG1vc3QgY29tbW9uIGtleXMuXHJcbiAgICB0aGlzLmN1cnNvcktleXMgPSB0aGlzLmlucHV0LmtleWJvYXJkLmNyZWF0ZUN1cnNvcktleXMoKTtcclxuXHJcbiAgICB0aGlzLnRleHQxID0gdGhpcy5hZGQudGV4dCgxMCwgMTAsICcnLCB7IGNvbG9yOiAnIzAwZmYwMCcgfSk7XHJcbiAgICB0aGlzLnRleHQyID0gdGhpcy5hZGQudGV4dCgxMDAsIDEwLCAnJywgeyBjb2xvcjogJyMwMGZmMDAnIH0pO1xyXG5cclxuICAgIHRoaXMuYm90dGxlLnNldERlcHRoKDEpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHVwZGF0ZSgpOiB2b2lkIHtcclxuICAgIC8vIEV2ZXJ5IGZyYW1lLCB3ZSBjcmVhdGUgYSBuZXcgdmVsb2NpdHkgZm9yIHRoZSBzcHJpdGUgYmFzZWQgb24gd2hhdCBrZXlzIHRoZSBwbGF5ZXIgaXMgaG9sZGluZyBkb3duLlxyXG4gICAgdGhpcy50ZXh0MS5zZXRUZXh0KGAke3RoaXMuYm90dGxlLnJvdGF0aW9ufWApO1xyXG4gICAgaWYgKHRoaXMuYm90dGxlLnJvdGF0aW9uIDwgLTEuNyAmJiB0aGlzLmJvdHRsZS5yb3RhdGlvbiA+IC0yLjMpIHtcclxuICAgICAgaWYgKHRoaXMuaXNQb3VyaW5nID09IDApIHtcclxuICAgICAgICB0aGlzLmlzUG91cmluZyA9IDE7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuaXNQb3VyaW5nID0gMDtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmlzUG91cmluZyA9PSAxICYmIHRoaXMubGlxdWlkUmVjdGFuZ2xlLmRpc3BsYXlIZWlnaHQgPCB0aGlzLmVtcHR5R2xhc3MuZGlzcGxheUhlaWdodCAqIDEuOSkge1xyXG4gICAgICB0aGlzLmxpcXVpZFJlY3RhbmdsZS5kaXNwbGF5SGVpZ2h0ID0gdGhpcy5saXF1aWRSZWN0YW5nbGUuZGlzcGxheUhlaWdodCArIDEuNTtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5saXF1aWRSZWN0YW5nbGUuZGlzcGxheUhlaWdodCA+IHRoaXMuZW1wdHlHbGFzcy5kaXNwbGF5SGVpZ2h0ICogMS45ICYmICF0aGlzLnRyYW5zaXRpb25pbmcpIHtcclxuICAgICAgdGhpcy50cmFuc2l0aW9uaW5nID0gdHJ1ZTtcclxuICAgICAgZG9jdW1lbnQuY29va2llID0gYCR7dGhpcy5ib3R0bGVOYW1lfT0xYDtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zY2VuZS5zdGFydCgnR2FtZScpO1xyXG4gICAgICB9LCA1MDApO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBJbnB1dCwgR2FtZU9iamVjdHMgfSBmcm9tICdwaGFzZXInO1xyXG5cclxuY29uc3Qgc2NlbmVDb25maWc6IFBoYXNlci5UeXBlcy5TY2VuZXMuU2V0dGluZ3NDb25maWcgPSB7XHJcbiAgYWN0aXZlOiBmYWxzZSxcclxuICB2aXNpYmxlOiBmYWxzZSxcclxuICBrZXk6ICdTaGFrZScsXHJcbn07XHJcblxyXG5leHBvcnQgY2xhc3MgU2hha2VTY2VuZSBleHRlbmRzIFBoYXNlci5TY2VuZSB7XHJcbiAgcHVibGljIHNwZWVkID0gMjAwO1xyXG5cclxuICBwcml2YXRlIGN1cnNvcktleXM6IFBoYXNlci5UeXBlcy5JbnB1dC5LZXlib2FyZC5DdXJzb3JLZXlzO1xyXG4gIHByaXZhdGUgYm90dGxlOiBQaGFzZXIuR2FtZU9iamVjdHMuU3ByaXRlO1xyXG4gIHByaXZhdGUgYm91cmJvbjogUGhhc2VyLkdhbWVPYmplY3RzLlNwcml0ZTtcclxuICBwcml2YXRlIGVtcHR5R2xhc3M6IFBoYXNlci5HYW1lT2JqZWN0cy5TcHJpdGU7XHJcbiAgcHJpdmF0ZSBmaWxsZWRnbGFzczE6IFBoYXNlci5HYW1lT2JqZWN0cy5TcHJpdGU7XHJcbiAgcHJpdmF0ZSBmaWxsZWRnbGFzczI6IFBoYXNlci5HYW1lT2JqZWN0cy5TcHJpdGU7XHJcblxyXG4gIHByaXZhdGUgY29udGVudHM6IHN0cmluZ1tdID0gW107XHJcbiAgcHJpdmF0ZSBnbGFzc0ZpbGxlcnM6IFBoYXNlci5HYW1lT2JqZWN0cy5TcHJpdGVbXSA9IFtdO1xyXG5cclxuICBwcml2YXRlIGlzUG91cmluZyA9IDA7XHJcbiAgcHJpdmF0ZSBzaGFrZUNvdW50ID0gMDtcclxuICBwcml2YXRlIHRyYW5zaXRpb25pbmcgPSBmYWxzZTtcclxuICBwcml2YXRlIG4gPSAwO1xyXG4gIHByaXZhdGUgbnRocmVzaG9sZCA9IDA7XHJcbiAgcHJpdmF0ZSBtYXh4ID0gMDtcclxuICBwcml2YXRlIG1heHkgPSAwO1xyXG4gIHByaXZhdGUgbWF4eiA9IDA7XHJcbiAgcHJpdmF0ZSBtaW54ID0gMDtcclxuICBwcml2YXRlIG1pbnkgPSAwO1xyXG4gIHByaXZhdGUgbWlueiA9IDA7XHJcbiAgcHJpdmF0ZSB0aHJlc2hvbGQgPSAxNTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcihzY2VuZUNvbmZpZyk7XHJcbiAgfVxyXG4gIHB1YmxpYyB0ZXh0MTogUGhhc2VyLkdhbWVPYmplY3RzLlRleHQ7XHJcbiAgcHVibGljIHRleHQyOiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dDtcclxuICBwdWJsaWMgdGV4dDM6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0O1xyXG4gIHB1YmxpYyB0ZXh0NDogUGhhc2VyLkdhbWVPYmplY3RzLlRleHQ7XHJcbiAgcHVibGljIHRleHQ1OiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dDtcclxuICBwdWJsaWMgYm90dGxlTmFtZTogc3RyaW5nO1xyXG4gIHByaXZhdGUgbGlxdWlkUmVjdGFuZ2xlOiBQaGFzZXIuR2FtZU9iamVjdHMuUmVjdGFuZ2xlO1xyXG5cclxuICBwdWJsaWMgaW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuYm90dGxlTmFtZSA9ICdzaGFrZXInO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNyZWF0ZSgpOiB2b2lkIHtcclxuICAgIGNvbnNvbGUubG9nKCdTaGFrZScpO1xyXG4gICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSB0aGlzLnN5cy5nYW1lLmNhbnZhcztcclxuICAgIHRoaXMuaXNQb3VyaW5nID0gMDtcclxuICAgIHRoaXMuc2hha2VDb3VudCA9IDA7XHJcbiAgICB0aGlzLnRyYW5zaXRpb25pbmcgPSBmYWxzZTtcclxuICAgIHRoaXMubiA9IDA7XHJcbiAgICB0aGlzLm50aHJlc2hvbGQgPSAxMztcclxuXHJcbiAgICAvLyBBZGQgYSBwbGF5ZXIgc3ByaXRlIHRoYXQgY2FuIGJlIG1vdmVkIGFyb3VuZC4gUGxhY2UgaGltIGluIHRoZSBtaWRkbGUgb2YgdGhlIHNjcmVlbi5cclxuICAgIC8vdGhpcy5lbXB0eUdsYXNzID0gdGhpcy5hZGQuc3ByaXRlKHdpZHRoIC8gNCwgaGVpZ2h0IC8gMiwgJ2VtcHR5Z2xhc3MnKTtcclxuICAgIC8vdGhpcy5maWxsZWRnbGFzczEgPSB0aGlzLmFkZC5zcHJpdGUod2lkdGggLyA0LCBoZWlnaHQgLyAyLCAnZmlsbGVkZ2xhc3MxJyk7XHJcbiAgICAvL3RoaXMuZmlsbGVkZ2xhc3MyID0gdGhpcy5hZGQuc3ByaXRlKHdpZHRoIC8gNCwgaGVpZ2h0IC8gMiwgJ2ZpbGxlZGdsYXNzMicpO1xyXG5cclxuICAgIHRoaXMuYm91cmJvbiA9IHRoaXMuYWRkLnNwcml0ZSh3aWR0aCAvIDgsIGhlaWdodCAvIDQsICdjYW5lbGxla25pZmUnKS5zZXRJbnRlcmFjdGl2ZSgpO1xyXG4gICAgdGhpcy5ib3VyYm9uLm9uKCdwb2ludGVyZG93bicsICgpID0+IHtcclxuICAgICAgdGhpcy50ZXh0MS5zZXRUZXh0KCdBc2tlZCcpO1xyXG4gICAgICB0aGlzLm1heHggPSAwO1xyXG4gICAgICB0aGlzLm1heHkgPSAwO1xyXG4gICAgICB0aGlzLm1heHogPSAwO1xyXG4gICAgICB0aGlzLm1pbnggPSAwO1xyXG4gICAgICB0aGlzLm1pbnkgPSAwO1xyXG4gICAgICB0aGlzLm1pbnogPSAwO1xyXG4gICAgICBpZiAod2luZG93LkRldmljZU9yaWVudGF0aW9uRXZlbnQpIHtcclxuICAgICAgICAvL3dpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdkZXZpY2VvcmllbnRhdGlvbicsIGRldmljZU9yaWVudGF0aW9uSGFuZGxlciwgZmFsc2UpO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBpZiAod2luZG93LkRldmljZU1vdGlvbkV2ZW50KSB7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2RldmljZW1vdGlvbicsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXZlbnQpO1xyXG4gICAgICAgICAgaWYgKGV2ZW50LmFjY2VsZXJhdGlvbi54IDwgdGhpcy50aHJlc2hvbGQgKiAtMSB8fCBldmVudC5hY2NlbGVyYXRpb24ueCA+IHRoaXMudGhyZXNob2xkKSB7XHJcbiAgICAgICAgICAgIHRoaXMubisrO1xyXG4gICAgICAgICAgfSBlbHNlIGlmIChldmVudC5hY2NlbGVyYXRpb24ueSA8IHRoaXMudGhyZXNob2xkICogLTEgfHwgZXZlbnQuYWNjZWxlcmF0aW9uLnkgPiB0aGlzLnRocmVzaG9sZCkge1xyXG4gICAgICAgICAgICB0aGlzLm4rKztcclxuICAgICAgICAgIH0gZWxzZSBpZiAoZXZlbnQuYWNjZWxlcmF0aW9uLnogPCB0aGlzLnRocmVzaG9sZCAqIC0xIHx8IGV2ZW50LmFjY2VsZXJhdGlvbi56ID4gdGhpcy50aHJlc2hvbGQpIHtcclxuICAgICAgICAgICAgdGhpcy5uKys7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLy8gdGV4dFxyXG4gICAgICAgICAgaWYgKGV2ZW50LmFjY2VsZXJhdGlvbi54IDwgdGhpcy5taW54KSB7XHJcbiAgICAgICAgICAgIHRoaXMubWlueCA9IGV2ZW50LmFjY2VsZXJhdGlvbi54O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKGV2ZW50LmFjY2VsZXJhdGlvbi55IDwgdGhpcy5taW55KSB7XHJcbiAgICAgICAgICAgIHRoaXMubWlueSA9IGV2ZW50LmFjY2VsZXJhdGlvbi55O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKGV2ZW50LmFjY2VsZXJhdGlvbi56IDwgdGhpcy5taW56KSB7XHJcbiAgICAgICAgICAgIHRoaXMubWlueiA9IGV2ZW50LmFjY2VsZXJhdGlvbi56O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKGV2ZW50LmFjY2VsZXJhdGlvbi54ID4gdGhpcy5tYXh4KSB7XHJcbiAgICAgICAgICAgIHRoaXMubWF4eCA9IGV2ZW50LmFjY2VsZXJhdGlvbi54O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKGV2ZW50LmFjY2VsZXJhdGlvbi55ID4gdGhpcy5tYXh5KSB7XHJcbiAgICAgICAgICAgIHRoaXMubWF4eSA9IGV2ZW50LmFjY2VsZXJhdGlvbi55O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKGV2ZW50LmFjY2VsZXJhdGlvbi56ID4gdGhpcy5tYXh6KSB7XHJcbiAgICAgICAgICAgIHRoaXMubWF4eiA9IGV2ZW50LmFjY2VsZXJhdGlvbi56O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdGhpcy50ZXh0MS5zZXRUZXh0KGB4ICR7dGhpcy5taW54fSAke3RoaXMubWF4eH1gKTtcclxuICAgICAgICAgIHRoaXMudGV4dDIuc2V0VGV4dChgeSAke3RoaXMubWlueX0gJHt0aGlzLm1heHl9YCk7XHJcbiAgICAgICAgICB0aGlzLnRleHQzLnNldFRleHQoYHogJHt0aGlzLm1pbnp9ICR7dGhpcy5tYXh6fWApO1xyXG4gICAgICAgICAgdGhpcy50ZXh0NC5zZXRUZXh0KGBuICR7dGhpcy5ufSAke3RoaXMubnRocmVzaG9sZH1gKTtcclxuICAgICAgICAgIHRoaXMudGV4dDUuc2V0VGV4dChgc2hha2VzICR7dGhpcy5zaGFrZUNvdW50fWApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBEZXZpY2VNb3Rpb25FdmVudC5yZXF1ZXN0UGVybWlzc2lvbigpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgdGhpcy50ZXh0MS5zZXRUZXh0KHJlc3BvbnNlKTtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignZGV2aWNlbW90aW9uJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhldmVudCk7XHJcbiAgICAgICAgICBpZiAoZXZlbnQuYWNjZWxlcmF0aW9uLnggPCB0aGlzLnRocmVzaG9sZCAqIC0xIHx8IGV2ZW50LmFjY2VsZXJhdGlvbi54ID4gdGhpcy50aHJlc2hvbGQpIHtcclxuICAgICAgICAgICAgdGhpcy5uKys7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKGV2ZW50LmFjY2VsZXJhdGlvbi55IDwgdGhpcy50aHJlc2hvbGQgKiAtMSB8fCBldmVudC5hY2NlbGVyYXRpb24ueSA+IHRoaXMudGhyZXNob2xkKSB7XHJcbiAgICAgICAgICAgIHRoaXMubisrO1xyXG4gICAgICAgICAgfSBlbHNlIGlmIChldmVudC5hY2NlbGVyYXRpb24ueiA8IHRoaXMudGhyZXNob2xkICogLTEgfHwgZXZlbnQuYWNjZWxlcmF0aW9uLnogPiB0aGlzLnRocmVzaG9sZCkge1xyXG4gICAgICAgICAgICB0aGlzLm4rKztcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAvLyB0ZXh0XHJcbiAgICAgICAgICBpZiAoZXZlbnQuYWNjZWxlcmF0aW9uLnggPCB0aGlzLm1pbngpIHtcclxuICAgICAgICAgICAgdGhpcy5taW54ID0gZXZlbnQuYWNjZWxlcmF0aW9uLng7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAoZXZlbnQuYWNjZWxlcmF0aW9uLnkgPCB0aGlzLm1pbnkpIHtcclxuICAgICAgICAgICAgdGhpcy5taW55ID0gZXZlbnQuYWNjZWxlcmF0aW9uLnk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAoZXZlbnQuYWNjZWxlcmF0aW9uLnogPCB0aGlzLm1pbnopIHtcclxuICAgICAgICAgICAgdGhpcy5taW56ID0gZXZlbnQuYWNjZWxlcmF0aW9uLno7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAoZXZlbnQuYWNjZWxlcmF0aW9uLnggPiB0aGlzLm1heHgpIHtcclxuICAgICAgICAgICAgdGhpcy5tYXh4ID0gZXZlbnQuYWNjZWxlcmF0aW9uLng7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAoZXZlbnQuYWNjZWxlcmF0aW9uLnkgPiB0aGlzLm1heHkpIHtcclxuICAgICAgICAgICAgdGhpcy5tYXh5ID0gZXZlbnQuYWNjZWxlcmF0aW9uLnk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAoZXZlbnQuYWNjZWxlcmF0aW9uLnogPiB0aGlzLm1heHopIHtcclxuICAgICAgICAgICAgdGhpcy5tYXh6ID0gZXZlbnQuYWNjZWxlcmF0aW9uLno7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB0aGlzLnRleHQxLnNldFRleHQoYHggJHt0aGlzLm1pbnh9ICR7dGhpcy5tYXh4fWApO1xyXG4gICAgICAgICAgdGhpcy50ZXh0Mi5zZXRUZXh0KGB5ICR7dGhpcy5taW55fSAke3RoaXMubWF4eX1gKTtcclxuICAgICAgICAgIHRoaXMudGV4dDMuc2V0VGV4dChgeiAke3RoaXMubWluen0gJHt0aGlzLm1heHp9YCk7XHJcbiAgICAgICAgICB0aGlzLnRleHQ0LnNldFRleHQoYG4gJHt0aGlzLm59ICR7dGhpcy5udGhyZXNob2xkfWApO1xyXG4gICAgICAgICAgdGhpcy50ZXh0NS5zZXRUZXh0KGBzaGFrZXMgJHt0aGlzLnNoYWtlQ291bnR9YCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc29sZS5sb2coYGdsYXNzIHg6ICR7d2lkdGggLyA0fWApO1xyXG4gICAgY29uc29sZS5sb2coYGdsYXNzIHk6ICR7aGVpZ2h0IC8gMn1gKTtcclxuXHJcbiAgICB0aGlzLmJvdHRsZSA9IHRoaXMuYWRkLnNwcml0ZSh3aWR0aCAvIDIsIGhlaWdodCAvIDIsIHRoaXMuYm90dGxlTmFtZSkuc2V0SW50ZXJhY3RpdmUoKTtcclxuICAgIHRoaXMuYm90dGxlLnNldFNjYWxlKDAuNik7XHJcbiAgICAvL2NvbnNvbGUubG9nKHRoaXMuZW1wdHlHbGFzcy54KTtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMuYm90dGxlLmRpc3BsYXlIZWlnaHQpO1xyXG4gICAgLy90aGlzLmJvdHRsZS5zZXRQb3NpdGlvbih0aGlzLmVtcHR5R2xhc3MueCArIHRoaXMuYm90dGxlLmRpc3BsYXlIZWlnaHQgLyA0KTtcclxuICAgIC8vdGhpcy5ib3R0bGUuc2V0U2NhbGUoMC41KTtcclxuXHJcbiAgICB0aGlzLmJvdHRsZS5vbigncG9pbnRlcm92ZXInLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMuYm90dGxlLnNldFRpbnQoMHhjY2NjY2MpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5ib3R0bGUub24oJ3BvaW50ZXJvdXQnLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMuYm90dGxlLmNsZWFyVGludCgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5ib3R0bGUub24oJ3BvaW50ZXJkb3duJywgKCkgPT4ge1xyXG4gICAgICB0aGlzLnNoYWtlQ291bnQrKztcclxuICAgICAgaWYgKHRoaXMuc2hha2VDb3VudCA+IDcpIHtcclxuICAgICAgICB0aGlzLnNoYWtlQ291bnQgPSA3O1xyXG4gICAgICB9XHJcbiAgICAgIC8vdGhpcy5ib3R0bGUuc2V0VGV4dHVyZShgc2hha2VyJHt0aGlzLnNoYWtlQ291bnR9YCk7XHJcbiAgICB9KTtcclxuICAgIHRoaXMuaW5wdXQuc2V0RHJhZ2dhYmxlKHRoaXMuYm90dGxlKTtcclxuXHJcbiAgICB0aGlzLmlucHV0Lm9uKCdkcmFnc3RhcnQnLCAocG9pbnRlciwgZ2FtZU9iamVjdCkgPT4ge1xyXG4gICAgICBnYW1lT2JqZWN0LnNldFRpbnQoMHg5OTk5OTkpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gVGhpcyBpcyBhIG5pY2UgaGVscGVyIFBoYXNlciBwcm92aWRlcyB0byBjcmVhdGUgbGlzdGVuZXJzIGZvciBzb21lIG9mIHRoZSBtb3N0IGNvbW1vbiBrZXlzLlxyXG4gICAgdGhpcy5jdXJzb3JLZXlzID0gdGhpcy5pbnB1dC5rZXlib2FyZC5jcmVhdGVDdXJzb3JLZXlzKCk7XHJcblxyXG4gICAgdGhpcy50ZXh0MSA9IHRoaXMuYWRkLnRleHQoNTAsIDEwLCAnJywgeyBjb2xvcjogJyMwMGZmMDAnIH0pO1xyXG4gICAgdGhpcy50ZXh0MiA9IHRoaXMuYWRkLnRleHQoNTAsIDMwLCAnJywgeyBjb2xvcjogJyMwMGZmMDAnIH0pO1xyXG4gICAgdGhpcy50ZXh0MyA9IHRoaXMuYWRkLnRleHQoNTAsIDYwLCAnJywgeyBjb2xvcjogJyMwMGZmMDAnIH0pO1xyXG4gICAgdGhpcy50ZXh0NCA9IHRoaXMuYWRkLnRleHQoNTAsIDkwLCAnJywgeyBjb2xvcjogJyMwMGZmMDAnIH0pO1xyXG4gICAgdGhpcy50ZXh0NSA9IHRoaXMuYWRkLnRleHQoNTAsIDEyMCwgJycsIHsgY29sb3I6ICcjMDBmZjAwJyB9KTtcclxuXHJcbiAgICB0aGlzLmJvdHRsZS5zZXREZXB0aCgxKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyB1cGRhdGUoKTogdm9pZCB7XHJcbiAgICAvLyBFdmVyeSBmcmFtZSwgd2UgY3JlYXRlIGEgbmV3IHZlbG9jaXR5IGZvciB0aGUgc3ByaXRlIGJhc2VkIG9uIHdoYXQga2V5cyB0aGUgcGxheWVyIGlzIGhvbGRpbmcgZG93bi5cclxuICAgIGlmICh0aGlzLm4gPiB0aGlzLm50aHJlc2hvbGQgJiYgdGhpcy5zaGFrZUNvdW50IDw9IDcpIHtcclxuICAgICAgdGhpcy5uID0gMDtcclxuICAgICAgdGhpcy5zaGFrZUNvdW50Kys7XHJcbiAgICAgIHRoaXMudGV4dDQuc2V0VGV4dChgbiAke3RoaXMubn0gJHt0aGlzLm50aHJlc2hvbGR9YCk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5zaGFrZUNvdW50ICUgMiA9PSAwKSB7XHJcbiAgICAgIHRoaXMuYm90dGxlLnNldFRleHR1cmUoYHNoYWtlciR7dGhpcy5zaGFrZUNvdW50IC8gMn1gKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnNoYWtlQ291bnQgPiA1ICYmICF0aGlzLnRyYW5zaXRpb25pbmcpIHtcclxuICAgICAgdGhpcy50cmFuc2l0aW9uaW5nID0gdHJ1ZTtcclxuICAgICAgZG9jdW1lbnQuY29va2llID0gYHNoYWtlPTFgO1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICB0aGlzLnNjZW5lLnN0YXJ0KCdHYW1lJyk7XHJcbiAgICAgIH0sIDc1MCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IElucHV0LCBHYW1lT2JqZWN0cyB9IGZyb20gJ3BoYXNlcic7XHJcbmltcG9ydCB7IGdldEdhbWVXaWR0aCwgZ2V0R2FtZUhlaWdodCwgZHJpbmtUb0NvbG9yTWFwIH0gZnJvbSAnLi4vaGVscGVycyc7XHJcblxyXG5jb25zdCBzY2VuZUNvbmZpZzogUGhhc2VyLlR5cGVzLlNjZW5lcy5TZXR0aW5nc0NvbmZpZyA9IHtcclxuICBhY3RpdmU6IGZhbHNlLFxyXG4gIHZpc2libGU6IGZhbHNlLFxyXG4gIGtleTogJ1Zlcm1vdXRoJyxcclxufTtcclxuXHJcbmV4cG9ydCBjbGFzcyBWZXJtb3V0aFNjZW5lIGV4dGVuZHMgUGhhc2VyLlNjZW5lIHtcclxuICBwcml2YXRlIHZlcm1vdXRoVG9wOiBQaGFzZXIuR2FtZU9iamVjdHMuU3ByaXRlO1xyXG4gIHByaXZhdGUgdmVybW91dGhUb3BPbmx5OiBQaGFzZXIuR2FtZU9iamVjdHMuU3ByaXRlO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKHNjZW5lQ29uZmlnKTtcclxuICB9XHJcbiAgcHVibGljIHRleHQxOiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dDtcclxuICBwdWJsaWMgdGV4dDI6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0O1xyXG4gIHB1YmxpYyB0ZXh0MzogUGhhc2VyLkdhbWVPYmplY3RzLlRleHQ7XHJcbiAgcHVibGljIHRleHQ0OiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dDtcclxuICBwdWJsaWMgdGV4dDU6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0O1xyXG4gIHB1YmxpYyB1bnNjcmV3ZWQgPSAwO1xyXG4gIHByaXZhdGUgdHJhbnNpdGlvbmluZyA9IGZhbHNlO1xyXG5cclxuICBwdWJsaWMgY3JlYXRlKCk6IHZvaWQge1xyXG4gICAgY29uc29sZS5sb2coJ1Zlcm1vdXRoJyk7XHJcbiAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IHRoaXMuc3lzLmdhbWUuY2FudmFzO1xyXG4gICAgdGhpcy51bnNjcmV3ZWQgPSAwO1xyXG4gICAgdGhpcy50cmFuc2l0aW9uaW5nID0gZmFsc2U7XHJcbiAgICAvLyBBZGQgYSBwbGF5ZXIgc3ByaXRlIHRoYXQgY2FuIGJlIG1vdmVkIGFyb3VuZC4gUGxhY2UgaGltIGluIHRoZSBtaWRkbGUgb2YgdGhlIHNjcmVlbi5cclxuICAgIHRoaXMudmVybW91dGhUb3AgPSB0aGlzLmFkZC5zcHJpdGUod2lkdGggLyAyLCBoZWlnaHQgLyAyICsgMzAwLCAndmVybW91dGh0b3AnKTtcclxuICAgIHRoaXMudmVybW91dGhUb3BPbmx5ID0gdGhpcy5hZGQuc3ByaXRlKHdpZHRoIC8gMiwgaGVpZ2h0IC8gMiArIDMwMCwgJ3Zlcm1vdXRodG9wb25seScpO1xyXG5cclxuICAgIHRoaXMuaW5wdXQub24oJ3BvaW50ZXJ1cCcsICgpID0+IHtcclxuICAgICAgdGhpcy50ZXh0MS5zZXRUZXh0KGDOuDogJHt0aGlzLmlucHV0LmFjdGl2ZVBvaW50ZXIuZ2V0QW5nbGUoKX1gKTtcclxuICAgICAgdGhpcy50ZXh0Mi5zZXRUZXh0KGB4OiAke3RoaXMuaW5wdXQuYWN0aXZlUG9pbnRlci5nZXREaXN0YW5jZVgoKX1gKTtcclxuICAgICAgdGhpcy50ZXh0My5zZXRUZXh0KGB5OiAke3RoaXMuaW5wdXQuYWN0aXZlUG9pbnRlci5nZXREaXN0YW5jZVkoKX1gKTtcclxuICAgICAgdGhpcy50ZXh0NC5zZXRUZXh0KGBkOiAke3RoaXMuaW5wdXQuYWN0aXZlUG9pbnRlci5nZXREaXN0YW5jZSgpfWApO1xyXG5cclxuICAgICAgLy8gY2hlY2sgaWYgdGhpbmcgc2hvdWxkIHVuc2NyZXdcclxuICAgICAgaWYgKFxyXG4gICAgICAgIHRoaXMuaW5wdXQuYWN0aXZlUG9pbnRlci5nZXREaXN0YW5jZSgpID49IDE1MCAmJlxyXG4gICAgICAgIHRoaXMuaW5wdXQuYWN0aXZlUG9pbnRlci5nZXRBbmdsZSgpIDw9IDAuMzIgJiZcclxuICAgICAgICB0aGlzLmlucHV0LmFjdGl2ZVBvaW50ZXIuZ2V0QW5nbGUoKSA+PSAtMC41MiAmJlxyXG4gICAgICAgIHRoaXMudW5zY3Jld2VkIDwgM1xyXG4gICAgICApIHtcclxuICAgICAgICB0aGlzLnRleHQ1LnNldFRleHQoYHVuc2NyZXc6ICR7Kyt0aGlzLnVuc2NyZXdlZH1gKTtcclxuICAgICAgICB0aGlzLnZlcm1vdXRoVG9wT25seS5zZXRZKHRoaXMudmVybW91dGhUb3BPbmx5LnkgLSAzMCk7XHJcbiAgICAgICAgdGhpcy52ZXJtb3V0aFRvcE9ubHkuZmxpcFggPSAhdGhpcy52ZXJtb3V0aFRvcE9ubHkuZmxpcFg7XHJcbiAgICAgICAgaWYgKHRoaXMudW5zY3Jld2VkID09IDMgJiYgIXRoaXMudHJhbnNpdGlvbmluZykge1xyXG4gICAgICAgICAgdGhpcy50cmFuc2l0aW9uaW5nID0gdHJ1ZTtcclxuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNjZW5lLnN0YXJ0KCdQb3VyJywgeyBCb3R0bGVTcHJpdGVOYW1lOiAndmVybW91dGgnIH0pO1xyXG4gICAgICAgICAgfSwgNTAwKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgICAgdGhpcy5pbnB1dC5hY3RpdmVQb2ludGVyLmdldERpc3RhbmNlKCkgPj0gMTUwICYmXHJcbiAgICAgICAgKHRoaXMuaW5wdXQuYWN0aXZlUG9pbnRlci5nZXRBbmdsZSgpIDw9IC0yLjUgfHwgdGhpcy5pbnB1dC5hY3RpdmVQb2ludGVyLmdldEFuZ2xlKCkgPj0gMi41KSAmJlxyXG4gICAgICAgIHRoaXMudW5zY3Jld2VkID4gMFxyXG4gICAgICApIHtcclxuICAgICAgICB0aGlzLnRleHQ1LnNldFRleHQoYHVuc2NyZXc6ICR7LS10aGlzLnVuc2NyZXdlZH1gKTtcclxuICAgICAgICB0aGlzLnZlcm1vdXRoVG9wT25seS5zZXRZKHRoaXMudmVybW91dGhUb3BPbmx5LnkgKyAzMCk7XHJcbiAgICAgICAgdGhpcy52ZXJtb3V0aFRvcE9ubHkuZmxpcFggPSAhdGhpcy52ZXJtb3V0aFRvcE9ubHkuZmxpcFg7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMudGV4dDEgPSB0aGlzLmFkZC50ZXh0KDEwLCAxMCwgJycsIHsgY29sb3I6ICcjMDBmZjAwJyB9KTtcclxuICAgIHRoaXMudGV4dDIgPSB0aGlzLmFkZC50ZXh0KDEwLCAyNSwgJycsIHsgY29sb3I6ICcjMDBmZjAwJyB9KTtcclxuICAgIHRoaXMudGV4dDMgPSB0aGlzLmFkZC50ZXh0KDEwLCA0MCwgJycsIHsgY29sb3I6ICcjMDBmZjAwJyB9KTtcclxuICAgIHRoaXMudGV4dDQgPSB0aGlzLmFkZC50ZXh0KDEwLCA1NSwgJycsIHsgY29sb3I6ICcjMDBmZjAwJyB9KTtcclxuICAgIHRoaXMudGV4dDUgPSB0aGlzLmFkZC50ZXh0KDEwLCA3MCwgJycsIHsgY29sb3I6ICcjMDBmZjAwJyB9KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyB1cGRhdGUoKTogdm9pZCB7fVxyXG59XHJcbiIsImltcG9ydCAqIGFzIFBoYXNlciBmcm9tICdwaGFzZXInO1xyXG5cclxuY29uc3QgcGFkZGluZyA9IDEwO1xyXG5jb25zdCBtaW5pbXVtV2lkdGggPSAyMDA7XHJcbmNvbnN0IG1pbmltdW1IZWlnaHQgPSA1MDtcclxuXHJcbmV4cG9ydCBjbGFzcyBNZW51QnV0dG9uIGV4dGVuZHMgUGhhc2VyLkdhbWVPYmplY3RzLlJlY3RhbmdsZSB7XHJcbiAgcHJpdmF0ZSBsYWJlbDogUGhhc2VyLkdhbWVPYmplY3RzLlRleHQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHNjZW5lOiBQaGFzZXIuU2NlbmUsIHg6IG51bWJlciwgeTogbnVtYmVyLCB0ZXh0OiBzdHJpbmcsIG9uQ2xpY2s/OiAoKSA9PiB2b2lkKSB7XHJcbiAgICBzdXBlcihzY2VuZSwgeCwgeSk7XHJcbiAgICBzY2VuZS5hZGQuZXhpc3RpbmcodGhpcyk7XHJcbiAgICB0aGlzLnNldE9yaWdpbigwLCAwKTtcclxuXHJcbiAgICB0aGlzLmxhYmVsID0gc2NlbmUuYWRkXHJcbiAgICAgIC50ZXh0KHggKyBwYWRkaW5nLCB5ICsgcGFkZGluZywgdGV4dClcclxuICAgICAgLnNldEZvbnRTaXplKDE4KVxyXG4gICAgICAuc2V0QWxpZ24oJ2NlbnRlcicpO1xyXG5cclxuICAgIGNvbnN0IGxhYmVsV2lkdGggPSB0aGlzLmxhYmVsLndpZHRoICsgcGFkZGluZztcclxuICAgIGNvbnN0IGxhYmVsSGVpZ2h0ID0gdGhpcy5sYWJlbC5oZWlnaHQgKyBwYWRkaW5nO1xyXG5cclxuICAgIHRoaXMud2lkdGggPSBsYWJlbFdpZHRoID49IG1pbmltdW1XaWR0aCA/IGxhYmVsV2lkdGggOiBtaW5pbXVtV2lkdGg7XHJcbiAgICB0aGlzLmhlaWdodCA9IGxhYmVsSGVpZ2h0ID49IG1pbmltdW1IZWlnaHQgPyBsYWJlbEhlaWdodCA6IG1pbmltdW1IZWlnaHQ7XHJcblxyXG4gICAgdGhpcy5zZXRJbnRlcmFjdGl2ZSh7IHVzZUhhbmRDdXJzb3I6IHRydWUgfSlcclxuICAgICAgLm9uKCdwb2ludGVyb3ZlcicsIHRoaXMuZW50ZXJNZW51QnV0dG9uSG92ZXJTdGF0ZSlcclxuICAgICAgLm9uKCdwb2ludGVyb3V0JywgdGhpcy5lbnRlck1lbnVCdXR0b25SZXN0U3RhdGUpXHJcbiAgICAgIC5vbigncG9pbnRlcmRvd24nLCB0aGlzLmVudGVyTWVudUJ1dHRvbkFjdGl2ZVN0YXRlKVxyXG4gICAgICAub24oJ3BvaW50ZXJ1cCcsIHRoaXMuZW50ZXJNZW51QnV0dG9uSG92ZXJTdGF0ZSk7XHJcblxyXG4gICAgaWYgKG9uQ2xpY2spIHtcclxuICAgICAgdGhpcy5vbigncG9pbnRlcnVwJywgb25DbGljayk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5lbnRlck1lbnVCdXR0b25SZXN0U3RhdGUoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZW50ZXJNZW51QnV0dG9uSG92ZXJTdGF0ZSgpIHtcclxuICAgIHRoaXMubGFiZWwuc2V0Q29sb3IoJyMwMDAwMDAnKTtcclxuICAgIHRoaXMuc2V0RmlsbFN0eWxlKDB4ODg4ODg4KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZW50ZXJNZW51QnV0dG9uUmVzdFN0YXRlKCkge1xyXG4gICAgdGhpcy5sYWJlbC5zZXRDb2xvcignI0ZGRkZGRicpO1xyXG4gICAgdGhpcy5zZXRGaWxsU3R5bGUoMHg4ODg4ODgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBlbnRlck1lbnVCdXR0b25BY3RpdmVTdGF0ZSgpIHtcclxuICAgIHRoaXMubGFiZWwuc2V0Q29sb3IoJyNCQkJCQkInKTtcclxuICAgIHRoaXMuc2V0RmlsbFN0eWxlKDB4NDQ0NDQ0KTtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==