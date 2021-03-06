/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var express = __webpack_require__(/*! express */ \"express\");\n\nvar app = express();\n\nvar path = __webpack_require__(/*! path */ \"path\"); //settings\n\n\napp.set('port', process.env.PORT || 3000);\napp.set('views', path.join(__dirname, 'views'));\napp.engine('html', __webpack_require__(/*! ejs */ \"ejs\").renderFile);\napp.set('view engine', 'ejs'); //routes\n\napp.use(__webpack_require__(/*! ./routes/index */ \"./src/routes/index.js\")); //static files\n\napp.use(express[\"static\"](path.join(__dirname, 'public'))); //listening server\n\napp.listen(app.get('port'), function () {\n  console.log('Server on port:', app.get('port'));\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/routes/index.js":
/*!*****************************!*\
  !*** ./src/routes/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var express = __webpack_require__(/*! express */ \"express\");\n\nvar router = express.Router();\nrouter.get('/', function (req, res) {\n  //res.sendFile(path.join(__dirname, 'views/index.html'));\n  res.render('index.html', {\n    title: 'Efrain RODRIGUEZ'\n  });\n});\nrouter.get('/contact', function (req, res) {\n  //res.sendFile(path.join(__dirname, 'views/index.html'));\n  res.render('contact.html', {\n    title: 'Efrain RODRIGUEZ | Contact'\n  });\n});\nrouter.get('/publications/journalpapers', function (req, res) {\n  //res.sendFile(path.join(__dirname, 'views/index.html'));\n  res.render('publications/journalpapers.html', {\n    title: 'Efrain RODRIGUEZ | Publications'\n  });\n});\nrouter.get('/publications/conferencepapers', function (req, res) {\n  //res.sendFile(path.join(__dirname, 'views/index.html'));\n  res.render('publications/conferencepapers.html', {\n    title: 'Efrain RODRIGUEZ | Publications'\n  });\n});\nrouter.get('/publications/theses', function (req, res) {\n  //res.sendFile(path.join(__dirname, 'views/index.html'));\n  res.render('publications/theses.html', {\n    title: 'Efrain RODRIGUEZ | Publications'\n  });\n});\nrouter.get('/publications/workshops', function (req, res) {\n  //res.sendFile(path.join(__dirname, 'views/index.html'));\n  res.render('publications/workshops.html', {\n    title: 'Efrain RODRIGUEZ | Publications'\n  });\n});\nrouter.get('/ISO-10303-238', function (req, res) {\n  //res.sendFile(path.join(__dirname, 'views/index.html'));\n  res.render('ISO-10303-238.html', {\n    title: 'Efrain RODRIGUEZ | Projects'\n  });\n});\nmodule.exports = router;\n\n//# sourceURL=webpack:///./src/routes/index.js?");

/***/ }),

/***/ "ejs":
/*!**********************!*\
  !*** external "ejs" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"ejs\");\n\n//# sourceURL=webpack:///external_%22ejs%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ })

/******/ });