'use strict';

// MODULES //

var gammaDeltaRatio = require( 'math-gamma-delta-ratio' );


// GAMMA RATIO //

/**
* FUNCTION: gammaDeltaRatio( x, delta )
*	Computes a ratio of gamma functions: Γ(x) / Γ(y).
*
* @param {Number} x - parameter for numerator gamma fcn
* @param {Number} y - parameter for denominator gamma fcn
* @returns {Number} function value
*/
function gammaRatio( x, y ) {
	return gammaDeltaRatio( x, y - x );
} // end FUNCTION gammaRatio()


// EXPORTS //

module.exports = gammaRatio;
