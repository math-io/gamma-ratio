'use strict';

// MODULES //

var tape = require( 'tape' );
var incrspace = require( 'compute-incrspace' );
var reverse = require( 'compute-reverse' );
var abs = require( 'math-abs' );
var gammaRatio = require( './../lib' );
var gamma = require( 'math-gamma' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( typeof gammaRatio === 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `NaN` for `x = delta = 0`', function test( t ) {
	var v = gammaRatio( 0, 0 );
	t.ok( v !== v, 'returns NaN when provided x = 0, delta = 0' );
	t.end();
});

tape( 'the function returns `NaN` for negative integers `x`', function test( t ) {
	var values = incrspace( -1, -1000, -1 );
	var v;
	var i;

	for ( i = 0; i < values.length; i++ ) {
		v = gammaRatio( values[ i ], 0.5 );
		t.ok( v !== v, 'returns NaN when provided x:' + values[ i ] + 'and delta: 0.5' );
	}
	t.end();
});

tape( 'the function returns `NaN` if `y` is a negative integer ', function test( t ) {
	var values = incrspace( 1, 1000, 1 );
	var y;
	var v;
	var i;

	for ( i = 0; i < values.length; i++ ) {
		y = -1;
		v = gammaRatio( values[ i ], y );
		t.ok( v !== v, 'returns NaN when provided x: ' + values[ i ] + 'and y: ' + y );
	}
	t.end();
});

tape( 'if provided negative infinity for x, the function returns `NaN`', function test( t ) {
	var v = gammaRatio( Number.NEGATIVE_INFINITY, 0.5 );
	t.ok( v !== v, 'returns NaN when provided x = -Infinity and delta = 0.5' );
	t.end();
});

tape( 'if provided negative infinity for y, the function returns `NaN`', function test( t ) {
	var v = gammaRatio( 0.5, Number.NEGATIVE_INFINITY );
	t.ok( v !== v, 'returns NaN when provided x = 0.5 and y = -Infinity' );
	t.end();
});

tape( 'the function returns `0` for `y = 0`', function test( t ) {
	var v = gammaRatio( 2, 0 );
	t.ok( v  === 0, 'returns 0 when `y = 0`' );
	t.end();
});

tape( 'the function evaluates the ratio Γ(x) / Γ(y)', function test( t ) {
	var epsilon;
	var tol;
	var v;
	var expected;
	var i;
	var x;
	var y;

	x = incrspace( 10, 50, 0.25 );
	y = reverse( incrspace( 10, 50, 0.25 ) );

	for ( i = 0; i < x.length; i++ ) {
		v = gammaRatio( x[ i ], y[ i ] );
		expected = gamma( x[ i ] ) / gamma( y[ i ] );
		epsilon = abs( v - expected );
		tol = 1e-14 * Math.max( 1, abs( v ), abs( expected ) );
		t.ok( epsilon <= tol, 'within tolerance. x: ' + x[ i ] + '. y: ' + y[ i ] + ' Value: ' + v + '. Expected: ' + expected + '. Tolerance: ' + tol + '.' );
	}
	t.end();
});
