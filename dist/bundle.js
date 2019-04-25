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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/scripts/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/scripts/index.js":
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// import * as Item from './views/Item';\r\n// import renderItem from './views/ItemView';\r\n\r\nasync function asyncTest() {\r\n    const res  = await fetch('src/scripts/fashion.json');\r\n    const json = await res.json();\r\n\r\n    const itemContainer = document.querySelector('.products');\r\n       \r\n    json.map((item) => {\r\n        const str = `\r\n        <li>\r\n            <div class=\"image_container\"><img src=\"src/data/images/${item.image}\"></div>\r\n            <p class=\"product_name\">${item.name}</p>\r\n            <p class=\"price\">${item.price}</p>\r\n            <p>Size: ${item.size}</p>\r\n            <p>Category: ${item.category}</p>\r\n        </li>\r\n        `;\r\n        itemContainer.insertAdjacentHTML('beforeend', str);\r\n    })\r\n\r\n    function updateItem(filteredJson) {\r\n\r\n        itemContainer.innerHTML = '';\r\n\r\n        filteredJson.map((item) => {\r\n            const newStr = `\r\n            <li>\r\n                <div class=\"image_container\"><img src=\"src/data/images/${item.image}\"></div>\r\n                <p class=\"product_name\">${item.name}</p>\r\n                <p class=\"price\">${item.price}</p>\r\n                <p>Size: ${item.size}</p>\r\n                <p>Category: ${item.category}</p>\r\n            </li>\r\n            `;\r\n            itemContainer.insertAdjacentHTML('beforeend', newStr);\r\n        })\r\n    }\r\n\r\n    \r\n    const radioBtn = document.querySelector('.sidebar ul.category_list');\r\n    \r\n    radioBtn.addEventListener('change', function(event) {\r\n\r\n        const filterValue = event.target.value;\r\n        const filterName = event.target.name;\r\n\r\n        // const radios = document.getElementsByName(name);\r\n\r\n        console.log(event.target);\r\n        const target = document.getElementById(\"radio1\");\r\n        const target2 = document.getElementById(\"radio2\");\r\n\r\n        const filteredItem = json.filter(function(item) {\r\n\r\n            if (item.category == filterValue) {\r\n                return true;\r\n            } else if(item.size == filterValue) {                \r\n                return true;\r\n            }\r\n\r\n        });\r\n    \r\n        console.log(\"Filtered\", filteredItem);\r\n        updateItem(filteredItem);\r\n    });\r\n  }\r\n\r\nasyncTest();\n\n//# sourceURL=webpack:///./src/scripts/index.js?");

/***/ })

/******/ });