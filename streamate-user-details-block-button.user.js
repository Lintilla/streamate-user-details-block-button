// ==UserScript==
// @name         Add Block Button to Streamate User Details Pages
// @version      0.3
// @description  Makes it much more convenient for models to block members when they are no longer in the room! Blocks from both chat and messages at once.
// @author       LintillaTaylor (that.lintilla.chick@gmail.com)
// @namespace    https://github.com/Lintilla/streamate-user-details-block-button
// @supportURL   https://github.com/Lintilla/streamate-user-details-block-button/issues
// @license      GPL-3.0
// @match        https://streamatemodels.com/smm/userdetails.php*
// @grant        none
// ==/UserScript==

var userid = (location.search.split('userid=')[1]||'').split('&')[0]

var txt = '<div style="clear:both; text-align:right;"><form method="POST" action="https://legacy.streamatemodels.com/smblock.php?" style="margin:0;"><input type="hidden" name="oldrelation[' + userid + ']" value="1028"><input type="hidden" name="blocked[' + userid + '][]" value="2" checked="1"><input type="hidden" name="blocked[' + userid + '][]" value="1024" checked="1"><button class="btn btn-danger button_short" type="submit" value="submit"><span>Block</span></button></form><br /></div>'

$('#page_body').append(txt);