var traverseDomAndCollectElements = function (matchFunc, startEl) {
  var resultSet = [];

  if (typeof startEl === "undefined") {
    startEl = document.body;
  }

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  // TU CÓDIGO AQUÍ
  // agrego para solucionar el error 14
  if (matchFunc(startEl)) {
    resultSet.push(startEl);
  }

  // recorre los hijos del elemento startEl
  for (var i = 0; i < startEl.children.length; i++) {
    var child = startEl.children[i];
    // si matchea, lo agrega al resultSet

    // quito para solucionar error 14
//    if (matchFunc(child)) {
  //    resultSet.push(child);
    //}
    // llamamos recursivamente a la funcion para el elemento hijo
    resultSet = resultSet.concat(traverseDomAndCollectElements(matchFunc, child));
  }
  return resultSet;
};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag

var selectorTypeMatcher = function (selector) {
  if (selector.startsWith("#")) {
    return "id";
  } else if (selector.startsWith(".")) {
    return "class";
  } else if (/[a-z]+\.[a-z]+/.test(selector)) {
    return "tag.class";
  } else {
    // si no es ninguno de los anteriores, el que queda es el tag
    return "tag";
  }
};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function (selector) {
  var selectorType = selectorTypeMatcher(selector);
  var matchFunction;

  if (selectorType === "id") {
    var id = selector.slice(1); 
    matchFunction = function (element) {
      
      return element.id === id;
    };
  } else if (selectorType === "class") {
    var className = selector.slice(1); // borra '.' del nombre de la clase
    matchFunction = function (element) {
       return element.classList.contains(className);
    };
  } else if (selectorType === "tag.class") {
    var parts = selector.split(".");
    var tagName = parts[0];
    var className = parts[1];
    
    matchFunction = function (element) {
      return element.tagName.toLowerCase() === tagName && element.classList.contains(className);
    };
  } else if (selectorType === "tag") {
    matchFunction = function (element) {
      return element.tagName.toLowerCase() === selector;
    };
  
  // extracredits
} /*else if (selectorType === "hierarchy") {
  var parts = selector.split(" ");
  var parentSelector = parts[0];
  var childSelector = parts[2];
  matchFunction = function (element) {
    var parentElements = traverseDomAndCollectElements(matchFunctionMaker(parentSelector), element.parentNode);
    return parentElements.some(function (parentElement) {
      return parentElement.querySelector(childSelector) === element;
    });
  };
} else if (selectorType === "find") {
  var childSelector = selector.slice(1);
  matchFunction = function (element) {
    return traverseDomAndCollectElements(matchFunctionMaker(childSelector), element).length > 0;
  };
}  else if (selectorType === "children"){
  var childSelector = selector.slice(1);
  matchFunction = function (element) {
    return Array.from(element.children).some(matchFunction(childSelector)); 
      
    };
}*/

  return matchFunction;
};

var $ = function (selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};
