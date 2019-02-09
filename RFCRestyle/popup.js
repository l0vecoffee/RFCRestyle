"use strict";
const 
	A = document,
	B = "input",
	C = "radio",
	D = "name",
	E = "type",
	F = "value",
	G = "checked",
	H = "label",
	I = "addEventListener",
	J = "[" + E + '="' + C + '"]',
	K = "prfl",
	L = K + "s",
	O = " Mono",
	P = "appendChild",
	Q = "querySelector",
	R = "forEach",
	S = chrome.storage.local,
	T = a => A[ Q ]( a ),
	U = ( b, c ) => {
		let d = A.createElement( c ? "option" : b );
		if ( c ) d.textContent = b;
		return d;
	},
	V = ( e, f ) => ~f.indexOf( e[ E ] ),
	W = T( "form" ),
	X = g => W.stylrs.disabled = !g.styl,
	Y = h => {
		W.sync[ G ] = h.sync;
		h = h[ L ][ h[ K ] ];
		X( h );
		Object.getOwnPropertyNames( h )[ R ]( n => {
			let i = h[ n ];
			W[ n ][ typeof i === "boolean" ? G : F ] = i;
		} );
	};
chrome.runtime.connect( { name: "p" } );
[ "System default", "Lucida Console", "Consolas", "Courier",
	[ "Inconsolata",
		"Cousine",
		"Nanum Gothic Coding",
		"Source Code Pro",
		"Anonymous Pro",
		"Overpass" + O,
		"IBM Plex" + O,
		"Roboto" + O,
		"Ubuntu" + O,
		"Space" + O,
		"Fira" + O
	]
][ R ]( ( j, k ) => {
	let l;
	if ( Array.isArray( j ) ) {
		l = U( "optgroup" );
		l[ H ] = "Google Fonts";
		j[ R ]( m => l[ P ]( U( m, !0 ) ) );
	} else {
		l = U( j, !0 );
		l[ F ] = k ? j : "monospace";
	}
	W.fnt[ P ]( l );
} );
[ [ "none", "solid", "dashed", "dotted" ], [ "Foo", "Bar", "Baz", "Qux", "Quux" ] ][ R ]( ( n, o ) => {
	n[ R ]( p => {
		let q = o ? K : "ul",
			r = U( H ),
			s = U( B );
		s[ F ] = p;
		s[ E ] = C;
		s[ D ] = q;
		r[ P ]( A.createTextNode( p ) );
		r[ P ]( s );
		W[ q + "s" ][ P ]( r );
	} );
} );
T( B )[ I ]( "click", t => self.close() );
S.get( u => {
	Y( u );
	W[ I ]( B, v => {
		let w = { fnt: W.fnt[ F ] };
		W[ Q + "All" ]( B + ':not([name="sync"]):not(' + J + ")," + B + J + ":" + G )[ R ]( x => w[ x[ D ] ] = V( x, [ "color", C ] ) ? x[ F ] : V( x, "range" ) ? x.valueAsNumber : x[ G ] );
		u.sync = W.sync[ G ];
		let y = w[ K ];
		u[ K ] = y;
		if ( v.target[ D ] === K ) {
			if ( !u[ L ][ y ] ) return;
			Y( u );
		} else {
			u[ L ][ y ] = w;
			X( w );
		}
		S.set( u );
	} );
} );