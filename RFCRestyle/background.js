"use strict";
function s( f ) {
  chrome.storage.local.get( a => {
    if ( a.sync ) chrome.storage.sync.set( a );
    if ( typeof f === "function" ) f();
  } );
}
chrome.runtime.onConnect.addListener( p => {
  if ( p.name === "i" ) chrome.pageAction.show( p.sender.tab.id );
  else p.onDisconnect.addListener( s );
} );
chrome.runtime.onMessage.addListener( ( a, b ) => {
  switch ( Object.keys( a )[ 0 ] ) {
    case "c": chrome.tabs.insertCSS( b.tab.id, { file: "init.css" } );
      break;
    case "u": s( ( c => chrome.tabs.update( b.tab.id, { url: a.u } ) ) );
      break;
    default: s( ( c => chrome.tabs.reload() ) );
  }
} );