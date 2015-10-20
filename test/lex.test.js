var lex = require('../lex.js');
var Scope = require('../scope.js').Scope;
var scope = require('../scope.js').Root;
var log = console.log;

//lex.parse('print 4+5');
//lex.parse('let x = 4+1; let y = 7; print x+y;');
//lex.parse('let x = \\n -> \\m -> n + m; print (x 1 6)');
//lex.parse('if true then print 5 else print 8');
//lex.parse("let x = \\n -> if n == 1 then 1 else x (n - 1);" +
lex.parse(
    //"let x = \\n-> if n == 1 then 1 else n * (x n - 1);" +
    //";" +
    "let succ = \\n -> n + 1;" +
    "let square = \\r -> r * r;" +
    "print $ (succ . square) 8;"
    //"print (x 5);"
);
//lex.parse('let x = \\n->n+1 print 4');

var z = lex.genTree();
z[0].getValue(scope);
z[1].getValue(scope);
z[2].getValue(scope);
//z[2].getValue(scope);
//log(scope);
//log(z[1].getValue(scope));
//console.log(scope);
