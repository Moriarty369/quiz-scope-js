¡Claro! Aquí tienes una descripción de las reglas del ámbito (scope) en JavaScript, junto con su traducción al inglés, que puedes agregar a tu archivo README:

---

# JavaScript Scope Quiz

Welcome to the JavaScript Scope Quiz! This quiz is designed to test your understanding of scope in JavaScript.

## Scope Overview

In JavaScript, scope refers to the context in which variables are declared and accessed. Understanding scope is crucial for writing efficient and bug-free code. Here are some key concepts:

### 1. Global Scope

**Description:** Variables declared outside of any function or block have global scope. They can be accessed from anywhere in the code.

**Example:**
```javascript
var globalVariable = "I am global!";
```

### 2. Local Scope

**Description:** Variables declared inside a function have local scope. They are accessible only within that function.

**Example:**
```javascript
function exampleFunction() {
    var localVariable = "I am local!";
    // localVariable is only accessible within exampleFunction
}
```

### 3. Block Scope

**Description:** With the introduction of `let` and `const` in ES6, variables declared using these keywords have block scope, limited to the block in which they are defined.

**Example:**
```javascript
if (true) {
    let blockScopedVar = "I am block-scoped!";
    // blockScopedVar is only accessible within this block
}
```

### 4. Lexical Scope

**Description:** JavaScript uses lexical scoping, which means that the scope of a variable is determined by its position within the source code.

**Example:**
```javascript
function outerFunction() {
    var outerVar = "I am outer!";
    
    function innerFunction() {
        // innerFunction has access to outerVar
    }
}
```

## Translated Text

### 1. Ámbito Global

**Descripción:** Las variables declaradas fuera de cualquier función o bloque tienen un ámbito global. Se pueden acceder desde cualquier parte del código.

### 2. Ámbito Local

**Descripción:** Las variables declaradas dentro de una función tienen un ámbito local. Solo son accesibles dentro de esa función.

### 3. Ámbito de Bloque

**Descripción:** Con la introducción de `let` y `const` en ES6, las variables declaradas con estas palabras clave tienen un ámbito de bloque, limitado al bloque en el que están definidas.

### 4. Ámbito Léxico

**Descripción:** JavaScript utiliza el ámbito léxico, lo que significa que el ámbito de una variable se determina por su posición en el código fuente.

---

Puedes copiar y pegar este texto en tu archivo README y, si lo deseas, ajustar el formato según tus preferencias. ¡Buena suerte con tu quiz sobre el ámbito en JavaScript!
