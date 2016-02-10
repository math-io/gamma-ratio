'use strict';

var linspace = require( 'compute-linspace' );
var gammaRatio = require( './../lib' );

var x = linspace( 0, 10, 100 );
var v;
var i;

for ( i = 0; i < x.length; i++ ) {
	v = gammaRatio( x[ i ], 2 );
	console.log( 'x: %d, y: %d, f(x,y): %d', x[ i ], 2, v );
}
