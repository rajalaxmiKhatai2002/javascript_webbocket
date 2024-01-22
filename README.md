# javascript_webbocket
1.what is javascript?
->javascript is a high level scripting language to use to develop functionality in the web browser.
->javascript was developed on 1995 and it was firstly generated on echmascript(ES).
->now a days we use echmascript 6 version and we called it vanilla javascript.
->node js ia the runtime environment of javascript.

Variable:---
-variable is a container to store some data.
-javascript introduce 3 types of variable.
1.var
2.let
3.const

Var:--
1.var is used before echmascript 6.
2.var is function scope.
3.var dont have access to directly use window object.
Let :--
1.let is used after echmascript 6.
2.let is block scope.
3.wherease let have access to directly use window object.

Hoisting in ajavascript:---
hoisting is a javascript mechanism where the variables and function declaration are move to the top of their scope before code execution.
ex: var a;
console.log(a);
a = 10;

Datatypes:---
what type of data stored in a variable.
datatypes are of 7 types:----
1.number
-it is a double precission 64-bit binary format. it is capable of storing positive floating point-numbers between 2 to the power -1074(min value) and 2 to the power(max value) and negative floating numbers between 2 to the power -1074(min value) and 2 to the power(max value).but it can only safely store integers (+or-2 to the power 53)-1.
2.string
-it represents textual data and is encoded as a sequence of 16-bit unsigned integer values representing UTF-16 code units.
3.boolean
-it represents a logical entity and is inhavited by two by values true and false they are usually used for conditiobnal operations such as ternary operator, if else ,while and etc.
4.undefined
-
5.null
6.symbol
-sysmbol is an unique and immutable primitive value and may be used as a key of an object properties.the purpose of symbol is to create unique property key that are guarented not to claus with keys of other code.
7.bigInt
-its a numeric primtive in javascript that can represents integers with our arbitary magnitudes.With bigInt we can safely store and operate on large integers even beyond the safe integer limit for numbers.
note:undefined shows us the lake of a value whereas null shows us the lake of objects.