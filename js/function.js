// localStorage key suffix for per-card comments. VIVIDZ and WIXOSS may be served
// from the same origin (and therefore share localStorage), so use a distinct suffix.
var COMMENT_SUFFIX = "_VVZcomment";
var DECK_NAME_LIST_KEY = "VVZDeckNameList";

// === big_pic lock (hold ALT to freeze the preview) ===
// Robust against browsers that hijack ALT for the menu bar:
//   1. preventDefault() on plain ALT keydown so the browser menu does not steal focus.
//   2. Sync lock state from EVERY mouse / keyboard event's e.altKey, not just keyup,
//      so a missed keyup (e.g. window switched while ALT was down) self-heals.
var bigPicLocked = false;
(function setupBigPicAltLock(){
	function setLocked(v){
		if(v === bigPicLocked) return;
		bigPicLocked = v;
		document.body.classList.toggle('bigpic-locked', v);
	}
	function sync(e){ setLocked(!!e.altKey); }

	window.addEventListener('keydown', function(e){
		if((e.key === 'Alt' || e.keyCode === 18) && !e.ctrlKey && !e.shiftKey && !e.metaKey){
			e.preventDefault();
		}
		sync(e);
	}, true);
	window.addEventListener('keyup',   sync, true);
	window.addEventListener('mousemove', sync, true);
	window.addEventListener('mouseover', sync, true);
	window.addEventListener('mousedown', sync, true);
	window.addEventListener('blur', function(){ setLocked(false); });
})();

function autoResize() {
	this.style.height = '12px';
	this.style.height = this.scrollHeight + 'px';
}

function getComment(id)
{
	var v = localStorage.getItem(id + COMMENT_SUFFIX);
	return (v == null) ? "" : v;
}

function setComment(id) {
	if($("#comment").val() != '')
	{
		localStorage.setItem(id + COMMENT_SUFFIX, $("#comment").val());
	}
	else
	{
		localStorage.removeItem(id + COMMENT_SUFFIX);
	}
}

function commentEvent() {
	const textarea = document.getElementById('comment');
	if(!textarea) return;
	textarea.addEventListener('input', autoResize);
	autoResize.call(textarea);
}

function escapeHtml(str)
{
	return String(str).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

function onLoading()
{
	var i = 0;
	
	rdeckArr = [];

	for(i = 0; i < cardData.length; i++)
	{
		rdeckArr.push(cardData[i]);
	}

	document.getElementById('fileinput').addEventListener('change', readSingleFile, false);
	if(document.getElementById('commentFileinput'))
	{
		document.getElementById('commentFileinput').addEventListener('change', readSingleCommentFile, false);
	}
	showInfotable("init");
	buildFilterOptions();

	$("#textsearch").keydown(function(event) {
	    if(event.keyCode == 13){
	        search();
	    };
	});

	deckNamelist = null;
	try { deckNamelist = JSON.parse(localStorage.getItem(DECK_NAME_LIST_KEY)); } catch(e) { deckNamelist = null; }
	if(deckNamelist == null)
	{
		deckNamelist = [];

		deckNamelist.push("スタートデッキ 最上 キョウカ");
		localStorage.setItem("スタートデッキ 最上 キョウカ", "adeck,VD01-018\nmdeck,VD01-004,VD01-008,VD01-013\ndeck,VD01-010,VD01-010,VD01-010,VD01-010,VD01-005,VD01-005,VD01-005,VD01-005,VD01-001,VD01-001,VD01-001,VD01-001,VD01-002,VD01-002,VD01-002,VD01-002,VD01-015,VD01-015,VD01-014,VD01-014,VD01-014,VD01-014,VD01-006,VD01-006,VD01-006,VD01-006,VD01-016,VD01-016,VD01-016,VD01-016,VD01-011,VD01-011,VD01-011,VD01-011,VD01-007,VD01-007,VD01-007,VD01-007,VD01-017,VD01-017,VD01-012,VD01-012,VD01-012,VD01-012,VD01-003,VD01-003,VD01-003,VD01-003,VD01-009,VD01-009");
		localStorage.setItem(DECK_NAME_LIST_KEY, JSON.stringify(deckNamelist));
	}

	updateDecklist("");
}

// Build the アカウント / 特徴 / 商品 dropdowns from cardData so new sets show up automatically.
var PRODUCT_NAMES = {
	"VB01": "ブースターパック 第1弾 サイバー：ジェネシス",
	"VB02": "ブースターパック 第2弾 サイバー：エクステンド",
	"VB03": "ブースターパック 第3弾 ファンタジー：プロローグ",
	"VB04": "ブースターパック 第4弾 ファンタジー：エンカウント",
	"VE01": "エクストラパック 第1弾 エクストラ：クリスマス",
	"VE02": "エクストラパック 第2弾 エクストラ：バケーション",
	"VE03": "エクストラパック 第3弾 コラボ：のりプロ",
	"VD01": "スタートデッキ「最上キョウカ」",
	"VD02": "スタートデッキ「天憧玲」",
	"VSD01": "スペシャルデッキ「天乃ムラクモ」",
	"F07": "フリーカード「花鳥風月」"
};

function buildFilterOptions()
{
	var accounts = [], features = [], products = [];
	var i = 0, j = 0, parts, code;

	function addUnique(arr, v)
	{
		if(v != "" && arr.indexOf(v) == -1) arr.push(v);
	}

	for(i = 0; i < cardData.length; i++)
	{
		if(!cardData[i][ID]) continue;

		parts = cardData[i][ACCOUNT].split("/");
		for(j = 0; j < parts.length; j++) addUnique(accounts, parts[j]);

		parts = cardData[i][FEATURE].split("/");
		for(j = 0; j < parts.length; j++) addUnique(features, parts[j]);

		code = cardData[i][ID].split("-")[0];
		addUnique(products, code);
	}

	products.sort(function(a, b){
		// newest first within each product family
		var fa = a.replace(/\d+$/, ""), fb = b.replace(/\d+$/, "");
		if(fa != fb) return fa < fb ? -1 : 1;
		return a < b ? 1 : -1;
	});

	var str = "<option value=\"0\">--All Account--</option>";
	for(i = 0; i < accounts.length; i++) str += "<option value=\"" + escapeHtml(accounts[i]) + "\">" + escapeHtml(accounts[i]) + "</option>";
	$("#selectAccount").html(str);

	str = "<option value=\"0\">--All Feature--</option>";
	for(i = 0; i < features.length; i++) str += "<option value=\"" + escapeHtml(features[i]) + "\">" + escapeHtml(features[i]) + "</option>";
	$("#selectFeature").html(str);

	str = "<option value=\"0\">--All Product--</option>";
	for(i = 0; i < products.length; i++)
	{
		str += "<option value=\"" + products[i] + "-\">[" + products[i] + "]" + (PRODUCT_NAMES[products[i]] ? " " + PRODUCT_NAMES[products[i]] : "") + "</option>";
	}
	$("#selectProduct").html(str);
}

function showrdeck()
{
	var i = 0;
	var max = 0;

	for(i = 0; i < 10; i++)
	{
		$("#rdeck_" + i).attr("src", "img/empty.jpg");
	}

	if(rdeckArr.length < (page + 1) * 10)
	{
		max = rdeckArr.length % 10;
	}
	else
	{
		max = 10;
	}

	for(i = 0; i < 10; i++)
	{
		if(i < max)
		{
			$("#rdeck_" + i).attr("src", rdeckArr[page * 10 + i][SRC]);
			$("#rdeck_" + i).attr("alt", rdeckArr[page * 10 + i][ID]);
		}
		else
		{
			$("#rdeck_" + i).attr("src", "img/empty.jpg");
			$("#rdeck_" + i).attr("alt", "");
		}
	}

	$("#totalCard").html(rdeckArr.length);
	if(rdeckArr.length == 0)
	{
		$("#page").html("");
	}
	else
	{
		if(rdeckArr.length % 10 != 0)
		{
			$("#page").html(parseInt(page + 1) + " / " + parseInt((rdeckArr.length / 10) + 1));
		}
		else
		{
			$("#page").html(parseInt(page + 1) + " / " + parseInt(rdeckArr.length / 10));
		}
	}
}

function onmouseShow(x, source)
{
	var i = 0;

	// Locked (ALT held): keep current big_pic content and visibility frozen.
	if(bigPicLocked) { return; }

	if(source == 'search')
	{
		$('#cardinformation').css('margin', '150px 0px 0px 40px');
	}
	else if(source == 'deck')
	{
		$('#cardinformation').css('margin', '150px 0px 0px 960px');
	}

	if(x.alt)
	{
		for(i = 0; i < cardData.length; i++)
		{
			if(x.alt == cardData[i][ID])
			{
				break;
			}
		}

		if(i == cardData.length)
		{
			return;
		}

		$("#cardinformation").css("visibility", "visible");
		$("#big_pic").attr("src", cardData[i][SRC]);
		$("#big_pic").attr("alt", cardData[i][ID]);

		showInfotable(cardData[i]);
	}
	else
	{
		$("#big_pic").attr("src", "img/card_back.jpg");
		$("#big_pic").attr("alt", "");
		$("#cardinformation").css("visibility", "hidden");
	}
}

function showInfotable(data)
{
	var str = "";
	if(data == "init")
	{
		str += "<tr>";
		str += "	<td width=\"115px\">";
		str += "		略号";
		str += "	</td>";
		str += "	<td>";
		str += data;
		str += "	</td>";
		str += "</tr>";

		str += "<tr>";
		str += "	<td>";
		str += "		カード名";
		str += "	</td>";
		str += "	<td>";
		str += data;
		str += "	</td>";
		str += "</tr>";

		str += "<tr>";
		str += "	<td>";
		str += "		カード種類";
		str += "	</td>";
		str += "	<td>";
		str += data;
		str += "	</td>";
		str += "</tr>";

		str += "<tr>";
		str += "	<td>";
		str += "		コスト";
		str += "	</td>";
		str += "	<td>";
		str += data;
		str += "	</td>";
		str += "</tr>";

		str += "<tr>";
		str += "	<td>";
		str += "		パワー";
		str += "	</td>";
		str += "	<td>";
		str += data;
		str += "	</td>";
		str += "</tr>";

		str += "<tr>";
		str += "	<td>";
		str += "		ミッション情報";
		str += "	</td>";
		str += "	<td>";
		str += data;
		str += "	</td>";
		str += "</tr>";

		str += "<tr>";
		str += "	<td>";
		str += "		特徴";
		str += "	</td>";
		str += "	<td>";
		str += data;
		str += "	</td>";
		str += "</tr>";

		str += "<tr>";
		str += "	<td>";
		str += "		アカウント情報";
		str += "	</td>";
		str += "	<td>";
		str += data;
		str += "	</td>";
		str += "</tr>";

		str += "<tr>";
		str += "	<td colspan=\"2\">";
		str += data;
		str += "	</td>";
		str += "</tr>";
	}
	else if(data[TYPE] == "ミッションカード")
	{
		str += "<tr>";
		str += "	<td width=\"115px\">";
		str += "		略号";
		str += "	</td>";
		str += "	<td>";
		str += data[ID];
		str += "	</td>";
		str += "</tr>";

		str += "<tr>";
		str += "	<td>";
		str += "		カード名";
		str += "	</td>";
		str += "	<td>";
		str += data[NAME];
		str += "	</td>";
		str += "</tr>";

		str += "<tr>";
		str += "	<td>";
		str += "		カード種類";
		str += "	</td>";
		str += "	<td>";
		str += data[TYPE];
		str += "	</td>";
		str += "</tr>";

		str += "<tr>";
		str += "	<td>";
		str += "		ミッション情報";
		str += "	</td>";
		str += "	<td>";
		str += data[MISSION];
		str += "	</td>";
		str += "</tr>";

		str += "<tr>";
		str += "	<td>";
		str += "		特徴";
		str += "	</td>";
		str += "	<td>";
		str += data[FEATURE];
		str += "	</td>";
		str += "</tr>";

		str += "<tr>";
		str += "	<td>";
		str += "		アカウント情報";
		str += "	</td>";
		str += "	<td>";
		str += data[ACCOUNT];
		str += "	</td>";
		str += "</tr>";			

		str += "<tr>";
		str += "	<td colspan=\"2\">";

		if($('#selectLang').val() == "TW" && data[TW_TEXT] != "")
		{
			str += str_to_img(data[TW_TEXT]);
		}
		else
		{
			str += str_to_img(data[JP_TEXT]);
		}

		str += "	</td>";
		str += "</tr>";
	}
	else if(data[TYPE] == "アカウントカード")
	{
		str += "<tr>";
		str += "	<td width=\"115px\">";
		str += "		略号";
		str += "	</td>";
		str += "	<td>";
		str += data[ID];
		str += "	</td>";
		str += "</tr>";

		str += "<tr>";
		str += "	<td>";
		str += "		カード名";
		str += "	</td>";
		str += "	<td>";
		str += data[NAME];
		str += "	</td>";
		str += "</tr>";

		str += "<tr>";
		str += "	<td>";
		str += "		カード種類";
		str += "	</td>";
		str += "	<td>";
		str += data[TYPE];
		str += "	</td>";
		str += "</tr>";

		str += "<tr>";
		str += "	<td>";
		str += "		アカウント情報";
		str += "	</td>";
		str += "	<td>";
		str += data[ACCOUNT];
		str += "	</td>";
		str += "</tr>";		

		str += "<tr>";
		str += "	<td colspan=\"2\">";

		if($('#selectLang').val() == "TW" && data[TW_TEXT] != "")
		{
			str += str_to_img(data[TW_TEXT]);
		}
		else
		{
			str += str_to_img(data[JP_TEXT]);
		}

		str += "	</td>";
		str += "</tr>";
	}
	else if(data[TYPE] == "イベントカード")
	{
		str += "<tr>";
		str += "	<td width=\"115px\">";
		str += "		略号";
		str += "	</td>";
		str += "	<td>";
		str += data[ID];
		str += "	</td>";
		str += "</tr>";

		str += "<tr>";
		str += "	<td>";
		str += "		カード名";
		str += "	</td>";
		str += "	<td>";
		str += data[NAME];
		str += "	</td>";
		str += "</tr>";

		str += "<tr>";
		str += "	<td>";
		str += "		カード種類";
		str += "	</td>";
		str += "	<td>";
		str += data[TYPE];
		str += "	</td>";
		str += "</tr>";

		str += "<tr>";
		str += "	<td>";
		str += "		コスト";
		str += "	</td>";
		str += "	<td>";
		str += data[COST];
		if(data[SCOUT] == "1")
		{
			str += "<img style=\"margin: 0px 0px -4px 5px\" width=\"20px\" height=\"20px\" src=\"img/ico_scout.png\">";
		}
		str += "	</td>";
		str += "</tr>";

		str += "<tr>";
		str += "	<td>";
		str += "		ミッション情報";
		str += "	</td>";
		str += "	<td>";
		str += data[MISSION];
		str += "	</td>";
		str += "</tr>";

		str += "<tr>";
		str += "	<td>";
		str += "		特徴";
		str += "	</td>";
		str += "	<td>";
		str += data[FEATURE];
		str += "	</td>";
		str += "</tr>";

		str += "<tr>";
		str += "	<td>";
		str += "		アカウント情報";
		str += "	</td>";
		str += "	<td>";
		str += data[ACCOUNT];
		str += "	</td>";
		str += "</tr>";		

		str += "<tr>";
		str += "	<td colspan=\"2\">";

		if($('#selectLang').val() == "TW" && data[TW_TEXT] != "")
		{
			str += str_to_img(data[TW_TEXT]);
		}
		else
		{
			str += str_to_img(data[JP_TEXT]);
		}

		str += "	</td>";
		str += "</tr>";
	}
	else if(data[TYPE] == "キャラカード")
	{
		str += "<tr>";
		str += "	<td width=\"115px\">";
		str += "		略号";
		str += "	</td>";
		str += "	<td>";
		str += data[ID];
		str += "	</td>";
		str += "</tr>";

		str += "<tr>";
		str += "	<td>";
		str += "		カード名";
		str += "	</td>";
		str += "	<td>";
		str += data[NAME];
		str += "	</td>";
		str += "</tr>";

		str += "<tr>";
		str += "	<td>";
		str += "		カード種類";
		str += "	</td>";
		str += "	<td>";
		str += data[TYPE];
		str += "	</td>";
		str += "</tr>";

		str += "<tr>";
		str += "	<td>";
		str += "		コスト";
		str += "	</td>";
		str += "	<td>";
		str += data[COST];

		if(data[COSTDOWN] == "1")
		{
			str += "<img style=\"margin: 0px 0px -4px 5px\" width=\"20px\" height=\"20px\" src=\"img/ico_costdown.png\">";
		}

		str += "	</td>";
		str += "</tr>";

		str += "<tr>";
		str += "	<td>";
		str += "		パワー";
		str += "	</td>";
		str += "	<td>";
		str += data[POWER];

		if(data[BAN] == "1")
		{
			str += "<img style=\"margin: 0px 0px -4px 5px\" width=\"20px\" height=\"20px\" src=\"img/ico_attack_ban.png\">";
		}

		str += "	</td>";
		str += "</tr>";

		str += "<tr>";
		str += "	<td>";
		str += "		ミッション情報";
		str += "	</td>";
		str += "	<td>";
		str += data[MISSION];
		str += "	</td>";
		str += "</tr>";

		str += "<tr>";
		str += "	<td>";
		str += "		特徴";
		str += "	</td>";
		str += "	<td>";
		str += data[FEATURE];
		str += "	</td>";
		str += "</tr>";

		str += "<tr>";
		str += "	<td>";
		str += "		アカウント情報";
		str += "	</td>";
		str += "	<td>";
		str += data[ACCOUNT];
		str += "	</td>";
		str += "</tr>";		

		str += "<tr>";
		str += "	<td colspan=\"2\">";

		if($('#selectLang').val() == "TW" && data[TW_TEXT] != "")
		{
			str += str_to_img(data[TW_TEXT]);
		}
		else
		{
			str += str_to_img(data[JP_TEXT]);
		}

		str += "	</td>";
		str += "</tr>";
	}
	else if(data[TYPE] == "エンゲージカード")
	{
		str += "<tr>";
		str += "	<td width=\"115px\">";
		str += "		略号";
		str += "	</td>";
		str += "	<td>";
		str += data[ID];
		str += "	</td>";
		str += "</tr>";

		str += "<tr>";
		str += "	<td>";
		str += "		カード名";
		str += "	</td>";
		str += "	<td>";
		str += data[NAME];
		str += "	</td>";
		str += "</tr>";

		str += "<tr>";
		str += "	<td>";
		str += "		カード種類";
		str += "	</td>";
		str += "	<td>";
		str += data[TYPE];
		str += "	</td>";
		str += "</tr>";

		str += "<tr>";
		str += "	<td>";
		str += "		コスト";
		str += "	</td>";
		str += "	<td>";
		str += data[COST];

		if(data[COSTDOWN] == "1")
		{
			str += "<img style=\"margin: 0px 0px -4px 5px\" width=\"20px\" height=\"20px\" src=\"img/ico_costdown.png\">";
		}

		str += "	</td>";
		str += "</tr>";

		str += "<tr>";
		str += "	<td>";
		str += "		ミッション情報";
		str += "	</td>";
		str += "	<td>";
		str += data[MISSION];
		str += "	</td>";
		str += "</tr>";

		str += "<tr>";
		str += "	<td>";
		str += "		特徴";
		str += "	</td>";
		str += "	<td>";
		str += data[FEATURE];
		str += "	</td>";
		str += "</tr>";

		str += "<tr>";
		str += "	<td>";
		str += "		アカウント情報";
		str += "	</td>";
		str += "	<td>";
		str += data[ACCOUNT];
		str += "	</td>";
		str += "</tr>";		

		str += "<tr>";
		str += "	<td colspan=\"2\">";

		if($('#selectLang').val() == "TW" && data[TW_TEXT] != "")
		{
			str += str_to_img(data[TW_TEXT]);
		}
		else
		{
			str += str_to_img(data[JP_TEXT]);
		}

		str += "	</td>";
		str += "</tr>";
	}
	else
	{
		// Other card types (e.g. カウンターカード)
		str += "<tr><td width=\"115px\">略号</td><td>" + data[ID] + "</td></tr>";
		str += "<tr><td>カード名</td><td>" + data[NAME] + "</td></tr>";
		str += "<tr><td>カード種類</td><td>" + data[TYPE] + "</td></tr>";

		if(data[JP_TEXT] != "")
		{
			str += "<tr><td colspan=\"2\">" + str_to_img(($('#selectLang').val() == "TW" && data[TW_TEXT] != "") ? data[TW_TEXT] : data[JP_TEXT]) + "</td></tr>";
		}
	}

	if(data != "init")
	{
		str += "<tr>";
		str += "	<td colspan=\"2\">";
		str += "		<textarea id=\"comment\" placeholder=\"Comment\" style=\"vertical-align: middle; overflow:hidden; resize:none; width:285px\">" + escapeHtml(getComment(data[ID])) + "</textarea>";
		str += "		<button style=\"vertical-align: middle;border-radius: 0px;height: 30px\" onclick=\"setComment('" + data[ID] + "');\">更新</button>";
		str += "	</td>";
		str += "</tr>";
	}

	$("#infoTable").html(str);

	if(data != "init")
	{
		commentEvent();
	}
}

function showAdeck()
{
	for(i = 0; i < 1; i++)
	{
		if(i < adeckArr.length)
		{
			$("#adeck_" + i).attr("src", adeckArr[i][SRC]);
			$("#adeck_" + i).attr("alt", adeckArr[i][ID]);
		}
		else
		{
			$("#adeck_" + i).attr("src", "img/empty.jpg");
			$("#adeck_" + i).attr("alt", "");
		}
	}
}

function showMdeck()
{
	for(i = 0; i < 3; i++)
	{
		if(i < mdeckArr.length)
		{
			$("#mdeck_" + i).attr("src", mdeckArr[i][SRC]);
			$("#mdeck_" + i).attr("alt", mdeckArr[i][ID]);
		}
		else
		{
			$("#mdeck_" + i).attr("src", "img/empty.jpg");
			$("#mdeck_" + i).attr("alt", "");
		}
	}
}

function showdeck()
{
	for(i = 0; i < 70; i++)
	{
		if(i < deckArr.length)
		{
			$("#deck_" + i).attr("src", deckArr[i][SRC]);
			$("#deck_" + i).attr("alt", deckArr[i][ID]);
		}
		else
		{
			$("#deck_" + i).attr("src", "img/empty.jpg");
			$("#deck_" + i).attr("alt", "");
		}
	}
}

function sortMdeck(x)
{
	var length = mdeckArr.length;

	for(i = 0; i < length; i++)
	{
		if(x[ID] == mdeckArr[i][ID])
		{
			return;
		}
	}
	mdeckArr.push(x);

	showMdeck();
}

function sortAdeck(x)
{
	adeckArr.push(x);

	showAdeck();
}

function showAlldeck()
{
	showAdeck();
	showMdeck();
	showdeck();
}

function sortdeck(x)
{
	var same_card = 0;

	for(i = 0; i < deckArr.length; i++)
	{
		if(x[ID] == deckArr[i][ID])
		{
			same_card++;

			if(same_card >= 4)
			{
				return;
			}
		}
	}

	deckArr.push(x);
	sortDeckArr();

	showdeck();
}

// --- Sorting helpers ---------------------------------------------------
// sort_method 0: Cost Order    (cost → mission → type → ID)
// sort_method 1: Mission Order (mission → cost → type → ID)
// sort_method 2: Type Order    (type → cost → mission → ID)
function cost2num(card)
{
	var n = parseInt(card[COST], 10);
	return isNaN(n) ? 99 : n;
}

function mission2num(card)
{
	var order = ["A", "B", "C", "D", "E", "F", "☆"];
	var n = order.indexOf(card[MISSION]);
	return (n == -1) ? 99 : n;
}

function cardtype2num(card)
{
	var order = ["キャラカード", "イベントカード", "エンゲージカード"];
	var n = order.indexOf(card[TYPE]);
	return (n == -1) ? 99 : n;
}

function compareCard(a, b)
{
	var keys;

	if(sort_method == 1)
	{
		keys = [mission2num, cost2num, cardtype2num];
	}
	else if(sort_method == 2)
	{
		keys = [cardtype2num, cost2num, mission2num];
	}
	else
	{
		keys = [cost2num, mission2num, cardtype2num];
	}

	for(var k = 0; k < keys.length; k++)
	{
		var d = keys[k](a) - keys[k](b);
		if(d != 0)
		{
			return d;
		}
	}

	if(a[ID] < b[ID]) return -1;
	if(a[ID] > b[ID]) return 1;
	return 0;
}

function sortDeckArr()
{
	deckArr.sort(compareCard);
}

function selectSort()
{
	sort_method = parseInt($("#selectSort").val(), 10) || 0;
	sortDeckArr();
	showdeck();
}

function delDeck(x, idx, array)
{
	array.splice(idx, 1);
	
	showAlldeck();
}

function addDeck(x)
{
	var i = 0;

	if(x.alt != "")
	{
		for(i = 0; i < cardData.length; i++)
		{
			if(x.alt == cardData[i][ID])
			{
				if(cardData[i][TYPE] == "ミッションカード")
				{
					if(mdeckArr.length < 3)
					{
						sortMdeck(cardData[i]);
					}
				}
				else if(cardData[i][TYPE] == "キャラカード" || cardData[i][TYPE] == "イベントカード" || cardData[i][TYPE] == "エンゲージカード")
				{
					if(deckArr.length < 70)
					{
						sortdeck(cardData[i]);
					}
				}
				else if(cardData[i][TYPE] == "アカウントカード")
				{
					if(adeckArr.length < 1)
					{
						sortAdeck(cardData[i]);
					}
				}
				
				break;
			}
		}
	}
}

function downloadBlob(filename, contentType) {
    var aarray = [];
    var marray = [];
    var darray = [];
    var array = [];
    var i = 0;

    filename = $("#deckTitle").val() + ".csv";

    for(i = 0; i < adeckArr.length; i++)
    {
    	aarray.push(adeckArr[i][ID]);
    }

    for(i = 0; i < mdeckArr.length; i++)
    {
    	marray.push(mdeckArr[i][ID]);
    }

    for(i = 0; i < deckArr.length; i++)
    {
    	darray.push(deckArr[i][ID]);
    }
    aarray.unshift("adeck");
    marray.unshift("mdeck");
    darray.unshift("deck");

    array.push(aarray);
    array.push(marray);
    array.push(darray);

    var csv = array.map((item) => {
        var row = item;
          
        return row.join(",");
      })
      .join("\n");

    content = csv;

    if(contentType == "text/csv;charset=utf-8;")
    {
		var blob = new Blob([content], { type: contentType });
		var url = URL.createObjectURL(blob);

		var pom = document.createElement('a');
		pom.href = url;
		pom.setAttribute('download', filename);
		pom.click();

		$("#textCode").val(content);
	}
	else
	{
		$("#textCode").val(content);
		customizeWindowEvent('code');
		$("#deckStr").html("　　");
		$("#deckTitle").val($("#selectDeck").val());
	}
}

function selectDeck()
{
	var deck = $("#selectDeck").val();
	if(deck == "" || deck == 0)
	{
		dataInit();
		return;
	}
	$("#textCode").val(localStorage.getItem(deck));
	
	readSingleCode();
}

function cleardeck()
{
	var ret = confirm("It will clear current deck. Are you sure?");
	if(!ret)
	{
		return;
	}
	dataInit();
}

function deletedecklist()
{
	var deck = $("#selectDeck").val();
	var i = 0;

	if(deck == "" || deck == 0)
	{
		return;
	}

	var ret = confirm("It will delete this deck. Are you sure?");
	if(!ret)
	{
		return;
	}

	localStorage.removeItem(deck);

	for(i = 0; i < deckNamelist.length; i++)
	{
		if(deck == deckNamelist[i])
		{
			deckNamelist.splice(i, 1);
			break;
		}
	}
	updateDecklist("");
	dataInit();
}

function readSingleCode()
{
	var contents = $("#textCode").val() || "";
	var lines = contents.split(/\r?\n/);
	var i = 0, j = 0;

	function parseLine(prefix)
	{
		var result = [];
		var k = 0, ids = [];

		for(k = 0; k < lines.length; k++)
		{
			ids = lines[k].split(",");
			if($.trim(ids[0]) == prefix)
			{
				break;
			}
		}

		if(k == lines.length)
		{
			return result;
		}

		for(i = 1; i < ids.length; i++)
		{
			var id = $.trim(ids[i]);
			if(id == "")
			{
				continue;
			}
			for(j = 0; j < cardData.length; j++)
			{
				if(id == cardData[j][ID])
				{
					result.push(cardData[j]);
					break;
				}
			}
		}
		return result;
	}

	adeckArr = parseLine("adeck").slice(0, 1);
	mdeckArr = parseLine("mdeck").slice(0, 3);
	deckArr = parseLine("deck").slice(0, 70);
	sortDeckArr();

	showAlldeck();
}

function readSingleFile(evt)
{
	var f = evt.target.files[0];

	if(!f)
	{
		alert("Failed to load file");
		return;
	}

	$("#deckTitle").val(f.name.replace(/\.csv$/i, ""));

	var r = new FileReader();
	r.onload = function(e) {
		$("#textCode").val(e.target.result);
		readSingleCode();
	};
	r.readAsText(f);

	$("#fileinput").val("");
}

function search()
{
	var i = 0, j = 0;
	var dataStr = "", searchStr = "", tmpStr = "";

	rdeckArr = [];

	for(i = 0; i < cardData.length; i++)
	{
		if($('#selectProduct').val() != 0)
		{
			if(cardData[i][ID].indexOf($('#selectProduct').val()) == -1)
			{
				continue;
			}
		}

		if($('#selectFeature').val() != 0)
		{
			if(cardData[i][FEATURE].split("/").indexOf($('#selectFeature').val()) == -1)
			{
				continue;
			}
		}

		if($('#selectAccount').val() != 0)
		{
			if(cardData[i][ACCOUNT].split("/").indexOf($('#selectAccount').val()) == -1)
			{
				continue;
			}
		}

		if(!$('#account').is(":checked"))
		{
			if(cardData[i][TYPE] == "アカウントカード")
			{
				continue;
			}
		}

		if(!$('#mission').is(":checked"))
		{
			if(cardData[i][TYPE] == "ミッションカード")
			{
				continue;
			}
		}

		if(!$('#character').is(":checked"))
		{
			if(cardData[i][TYPE] == "キャラカード")
			{
				continue;
			}
		}

		if(!$('#event').is(":checked"))
		{
			if(cardData[i][TYPE] == "イベントカード")
			{
				continue;
			}
		}

		if(!$('#engage').is(":checked"))
		{
			if(cardData[i][TYPE] == "エンゲージカード")
			{
				continue;
			}
		}

		if(!$('#A_mission').is(":checked") && !$('#B_mission').is(":checked") && !$('#C_mission').is(":checked") && !$('#D_mission').is(":checked") && !$('#E_mission').is(":checked") && !$('#F_mission').is(":checked") && !$('#star_mission').is(":checked"))
		{

		}
		else
		{
			if(!$('#A_mission').is(":checked"))
			{
				if(cardData[i][MISSION] == "A")
				{
					continue;
				}
			}

			if(!$('#B_mission').is(":checked"))
			{
				if(cardData[i][MISSION] == "B")
				{
					continue;
				}
			}

			if(!$('#C_mission').is(":checked"))
			{
				if(cardData[i][MISSION] == "C")
				{
					continue;
				}
			}

			if(!$('#D_mission').is(":checked"))
			{
				if(cardData[i][MISSION] == "D")
				{
					continue;
				}
			}

			if(!$('#E_mission').is(":checked"))
			{
				if(cardData[i][MISSION] == "E")
				{
					continue;
				}
			}

			if(!$('#F_mission').is(":checked"))
			{
				if(cardData[i][MISSION] == "F")
				{
					continue;
				}
			}

			if(!$('#star_mission').is(":checked"))
			{
				if(cardData[i][MISSION] == "☆")
				{
					continue;
				}
			}
		}

		if(!$('#scout').is(":checked") && !$('#costdown').is(":checked") && !$('#ban').is(":checked"))
		{

		}
		else
		{
			if(!$('#scout').is(":checked"))
			{
				if(cardData[i][SCOUT] == "1")
				{
					continue;
				}
			}

			if(!$('#costdown').is(":checked"))
			{
				if(cardData[i][COSTDOWN] == "1")
				{
					continue;
				}
			}

			if(!$('#ban').is(":checked"))
			{
				if(cardData[i][BAN] == "1")
				{
					continue;
				}
			}
		}

		if($('#textsearch').val().length != 0)
		{
			searchStr = $('#textsearch').val().toUpperCase();
			tmpStr = getComment(cardData[i][ID]).toUpperCase();

			for(j = 0; j < TW_TEXT + 1 ; j++)
			{
				dataStr = cardData[i][j].toUpperCase();
				if(dataStr.indexOf(searchStr) != -1)
				{
					rdeckArr.push(cardData[i]);
					break;
				}
			}

			// Keyword search also matches the card's comment
			if(j == TW_TEXT + 1 && tmpStr != "" && tmpStr.indexOf(searchStr) != -1)
			{
				rdeckArr.push(cardData[i]);
			}
		}
		else
		{
			rdeckArr.push(cardData[i]);
		}
	}

	page = 0;
	showrdeck();
}

function checkall()
{
	$('input:checkbox').prop('checked', true);
}

function uncheckall()
{
	$('#textsearch').val("");
	$('input:checkbox').prop('checked', false);
	$('#selectAccount').val(0);
	$('#selectFeature').val(0);
	$('#selectProduct').val(0);
}

function str_to_img(x)
{
	x = x.replace(/《自》/g, "<img style='height: 19px' class='icon_img' src='img/ico_ab_auto.png'></img>");
	x = x.replace(/《常》/g, "<img style='height: 19px' class='icon_img' src='img/ico_ab_always.png'></img>");
	x = x.replace(/《起》/g, "<img style='height: 19px' class='icon_img' src='img/ico_ab_start.png'></img>");

	x = x.replace(/《有効》/g, "<img style='height: 19px' class='icon_img' src='img/ico_valid.png'></img>");
	x = x.replace(/《誘発》/g, "<img style='height: 19px' class='icon_img' src='img/ico_induction.png'></img>");
	x = x.replace(/《効果》/g, "<img style='height: 19px' class='icon_img' src='img/ico_effect.png'></img>");

	x = x.replace(/《登場時》/g, "<img style='height: 19px' class='icon_img' src='img/ico_enter.png'></img>");
	
	x = x.replace(/《キョウカ》/g, "<img style='height: 19px' class='icon_img' src='img/ico_ch_kyoka.png'></img>");
	x = x.replace(/《玲》/g, "<img style='height: 19px' class='icon_img' src='img/ico_ch_rei.png'></img>");
	x = x.replace(/《らぶり》/g, "<img style='height: 19px' class='icon_img' src='img/ico_ch_raburi.png'></img>");
	x = x.replace(/《まりあ》/g, "<img style='height: 19px' class='icon_img' src='img/ico_ch_maria.png'></img>");
	x = x.replace(/《シェリー》/g, "<img style='height: 19px' class='icon_img' src='img/ico_ch_sherry.png'></img>");
	
	x = x.replace(/《サイバー》/g, "<img style='height: 19px' class='icon_img' src='img/ico_ft_cyber.png'></img>");
	x = x.replace(/《ストリーマー》/g, "<img style='height: 19px' class='icon_img' src='img/ico_streamer.png'></img>");

	x = x.replace(/《EXP》/g, "<img style='height: 19px' class='icon_img' src='img/ico_exp.png'></img>");
	x = x.replace(/《LvUP》/g, "<img style='height: 19px' class='icon_img' src='img/ico_lvup.png'></img>");

	x = x.replace(/《ターン1》/g, "<img style='height: 19px' class='icon_img' src='img/ico_turn1.png'></img>");
	
	x = x.replace(/《チェック》/g, "<img style='height: 19px' class='icon_img' src='img/ico_check.png'></img>");
	x = x.replace(/《自分ターン》/g, "<img style='height: 19px' class='icon_img' src='img/ico_turn_self.png'></img>");
	x = x.replace(/《自分ターン1》/g, "<img style='height: 19px' class='icon_img' src='img/ico_turn1_self.png'></img>");
	x = x.replace(/《条件》/g, "<img style='height: 19px' class='icon_img' src='img/ico_requirement.png'></img>");
	x = x.replace(/《アタック成功》/g, "<img style='height: 19px' class='icon_img' src='img/ico_attack_success.png'></img>");
	x = x.replace(/《クリア》/g, "<img style='height: 19px' class='icon_img' src='img/ico_clear.png'></img>");
	x = x.replace(/《スリープ》/g, "<img style='height: 19px' class='icon_img' src='img/ico_sleep.png'></img>");
	x = x.replace(/《同名》/g, "<img style='height: 19px' class='icon_img' src='img/ico_samename.png'></img>");
	x = x.replace(/《ターン1》/g, "<img style='height: 19px' class='icon_img' src='img/ico_turn1.png'></img>");
	
	x = x.replace(/《イベント》/g, "<img style='height: 19px' class='icon_img' src='img/ico_ab_event.png'></img>");
	x = x.replace(/《リロード》/g, "<img style='height: 19px' class='icon_img' src='img/ico_reload.png'></img>");
	x = x.replace(/《リブート》/g, "<img style='height: 19px' class='icon_img' src='img/ico_reboot.png'></img>");
	x = x.replace(/《コスト》/g, "<img style='height: 19px' class='icon_img' src='img/ico_cost.png'></img>");
	x = x.replace(/《アクセル》/g, "<img style='height: 19px' class='icon_img' src='img/ico_accel.png'></img>");
	x = x.replace(/《スカウト》/g, "<img style='height: 19px' class='icon_img' src='img/ico_scout.png'></img>");

	// Any other 《keyword》 (account / feature / trait names, 相手ターン, エンゲージ …)
	// without a dedicated icon is rendered as a text badge.
	x = x.replace(/《([^》]+)》/g, function(m, word){
		var style = "display:inline-block; padding:0px 4px; margin:1px 2px; border-radius:3px; font-size:13px; line-height:17px; font-weight:bold;";
		if(/^(相手ターン|ターン|自分ターン)\d*$/.test(word))
		{
			style += " background:#fff; color:#000; border:1px solid #000;";
		}
		else if(word == "エンゲージ")
		{
			style += " background:#e91e63; color:#fff;";
		}
		else
		{
			style += " background:#222; color:#fff;";
		}
		return "<span class='kw_badge' style='" + style + "'>" + word + "</span>";
	});

	return x;
}

function clickSpan(x)
{
	if($(x).prev().is(':checked'))
	{
		$(x).prev().prop('checked', false);
	}
	else
	{
		$(x).prev().prop('checked', true);
	}
}

function dataInit()
{
	adeckArr = [];
	mdeckArr = [];
	deckArr = [];

	showAlldeck();
}

function changePage(x)
{
	if(rdeckArr.length <= 10)
	{
		return;
	}
	if(x == "back")
	{
		if(page != 0)
		{
			page--;
		}
		else
		{
			if(rdeckArr.length % 10 != 0)
			{
				page = parseInt(rdeckArr.length / 10);
			}
			else
			{
				page = parseInt(rdeckArr.length / 10 - 1);
			}
		}
	}
	else
	{
		if((page + 1) * 10 < rdeckArr.length)
		{
			page++;
		}
		else
		{
			page = 0;
		}
	}

	showrdeck();
}

function showList()
{
	var str = "";

	function section(title, arr)
	{
		var list = [], map = {}, i = 0, out = "";

		for(i = 0; i < arr.length; i++)
		{
			if(map[arr[i][ID]] === undefined)
			{
				map[arr[i][ID]] = list.length;
				list.push([arr[i][ID], arr[i][NAME], 0]);
			}
			list[map[arr[i][ID]]][2]++;
		}

		out += "<br>" + title + " (" + arr.length + ")<br><br>";
		out += "<table>";
		for(i = 0; i < list.length; i++)
		{
			out += "<tr><td style='width: 30px;'>" + list[i][2] + "</td><td style='width: 130px;'>" + list[i][0] + "</td><td>" + list[i][1] + "</td></tr>";
		}
		out += "</table>";
		return out;
	}

	str += section("アカウント", adeckArr);
	str += section("ミッション", mdeckArr);
	str += section("デッキ", deckArr);
	str += "<br><br>";

	$("#decklist").html(str);
}

// Build the DECK VIEW popup (account + missions on top, main deck below,
// 10 cards per row with each row overlapping the previous one).
function showDeckView()
{
	var top = "", main = "", i = 0;
	var colW = 175, rowH = 70, cardH = 230;
	var cost = [0, 0, 0, 0, 0, 0, 0];
	var type = [0, 0, 0];
	var mission = [0, 0, 0, 0, 0, 0, 0, 0];
	var n = 0;

	var topCards = [].concat(adeckArr, mdeckArr);
	for(i = 0; i < topCards.length; i++)
	{
		top += "<img style='left: " + (i * colW + (i > 0 ? 40 : 0)) + "px; top: 0px;' src='" + topCards[i][SRC] + "' alt='" + topCards[i][ID] + "'>";
	}

	for(i = 0; i < deckArr.length; i++)
	{
		main += "<img style='left: " + ((i % 10) * colW) + "px; top: " + (Math.floor(i / 10) * rowH) + "px; z-index: " + Math.floor(i / 10) + ";' src='" + deckArr[i][SRC] + "' alt='" + deckArr[i][ID] + "'>";

		n = cost2num(deckArr[i]);
		cost[n >= 6 ? 6 : n]++;

		n = cardtype2num(deckArr[i]);
		if(n < 3) type[n]++;

		n = mission2num(deckArr[i]);
		mission[n < 7 ? n : 7]++;
	}

	$("#deckViewTop").html(top);
	$("#deckViewMain").html(main);
	$("#deckViewMain").css("height", deckArr.length == 0 ? "0px" : ((Math.ceil(deckArr.length / 10) - 1) * rowH + cardH + 10) + "px");

	costobj.data.datasets[0].data = cost;
	typeobj.data.datasets[0].data = type;
	missionobj.data.datasets[0].data = mission;
	costobj.update();
	typeobj.update();
	missionobj.update();

	$("#deckViewSummary").html(
		"アカウント: " + adeckArr.length + " / 1<br>" +
		"ミッション: " + mdeckArr.length + " / 3<br>" +
		"デッキ: " + deckArr.length
	);
}

function copyClipboard()
{
	const inputText = document.querySelector('#textCode');
  	inputText.select();
  	document.execCommand('copy');
  	$("#deckStr").html("Deck code copied!");
}

function addDecklist()
{
	var i = 0, ret = 0;
	var title_val = $.trim($("#deckTitle").val());

	if(title_val == "" || title_val == "0")
	{
		alert("Do not set empty string or 0 as title.");
		return;
	}

	if( title_val.indexOf("_VVZcomment") != -1 ||
		title_val.indexOf("_WXcomment") != -1 ||
		title_val.indexOf("_HOLOcomment") != -1 ||
		title_val.indexOf("_NAcomment") != -1 ||
		title_val == DECK_NAME_LIST_KEY ||
		title_val == "DeckNameList" ||
		title_val.indexOf("_dark_mode") != -1
		)
	{
		alert("Invalid deck title.");
		return;
	}

	$("#deckTitle").val(title_val);

  	for(i = 0; i < deckNamelist.length; i++)
  	{
  		if(deckNamelist[i] == title_val)
  		{
  			ret = confirm("Deck exist. Do you want to overwrite it?");

  			if(!ret)
  			{
  				return;
  			}
  		}
  	}

  	readSingleCode();
  	$("#deckStr").html("Deck has been added.");

  	localStorage.setItem(title_val, $("#textCode").val());

  	if(!ret)
  	{
  		deckNamelist.push(title_val);
  	}

  	updateDecklist(title_val);
}

function updateDecklist(select)
{
	var str = "", i = 0;

	str += "<option value=''>--Select Deck--</option>";

	for(i = 0; i < deckNamelist.length; i++)
	{
		var name = escapeHtml(deckNamelist[i]);
		str += "<option value=\"" + name + "\"" + (select == deckNamelist[i] ? " selected" : "") + ">" + name + "</option>";
	}

	localStorage.setItem(DECK_NAME_LIST_KEY, JSON.stringify(deckNamelist));

	$("#selectDeck").html(str);
}

function resetDefault()
{
	var ret = 0;
	var i = 0;
	var list = null;

	ret = confirm("It will delete all custom deck. Are you sure?");
	if(!ret)
	{
		return;
	}

	// Only remove VIVIDZ decks — never localStorage.clear(), which would also
	// wipe comments and any other app's data on the same origin.
	try { list = JSON.parse(localStorage.getItem(DECK_NAME_LIST_KEY)); } catch(e) { list = null; }
	if(list == null)
	{
		list = deckNamelist || [];
	}

	for(i = 0; i < list.length; i++)
	{
		localStorage.removeItem(list[i]);
	}

	localStorage.removeItem(DECK_NAME_LIST_KEY);

	location.reload();
}


/* =========================================================================
 * Comment profile — single-profile management (ported from WIXOSS v2.08)
 * One in-memory profile (the live "<id>_VVZcomment" entries in localStorage)
 * with Download / Upload / Copy / Add / Delete / Reset actions.
 *
 * Format (JSON, pretty-printed):
 *   [["VD01-001","comment text"], ["VD01-002","another"]]
 * ========================================================================= */

function collectCurrentComments()
{
	var i = 0;
	var pairs = [];
	var v = "";

	for(i = 0; i < cardData.length; i++)
	{
		if(!cardData[i][ID]) continue;
		v = localStorage.getItem(cardData[i][ID] + COMMENT_SUFFIX);
		if(v != null && v !== "")
		{
			pairs.push([cardData[i][ID], v]);
		}
	}
	return pairs;
}

function applyCommentPairs(pairs)
{
	// Replace current comments with the supplied set.
	var i = 0;
	for(i = 0; i < cardData.length; i++)
	{
		if(!cardData[i][ID]) continue;
		localStorage.removeItem(cardData[i][ID] + COMMENT_SUFFIX);
	}

	for(i = 0; i < pairs.length; i++)
	{
		if(!Array.isArray(pairs[i]) || pairs[i].length < 2) continue;
		var id = pairs[i][0];
		var txt = pairs[i][1];
		if(id && txt !== undefined && txt !== null && txt !== "")
		{
			localStorage.setItem(id + COMMENT_SUFFIX, txt);
		}
	}
}

function refreshCommentTextarea()
{
	$("#textCommentCode").val(JSON.stringify(collectCurrentComments(), null, 2));
}

function openCommentManager()
{
	refreshCommentTextarea();
	$("#commentStr").html("　　");

	customizeWindowEvent('comment');
}

function downloadCommentBlob(contentType)
{
	var content = $("#textCommentCode").val();
	var filename = "vividz_comments.json";

	var blob = new Blob([content], { type: contentType });
	var url = URL.createObjectURL(blob);

	var pom = document.createElement('a');
	pom.href = url;
	pom.setAttribute('download', filename);
	pom.click();

	$("#commentStr").html("Comment file downloaded.");
}

function copyCommentClipboard()
{
	const inputText = document.querySelector('#textCommentCode');
	inputText.select();
	document.execCommand('copy');
	$("#commentStr").html("Comment code copied!");
}

function addSingleComment()
{
	var id = $.trim($("#addCommentId").val()).toUpperCase();
	var txt = $("#addCommentText").val();
	var found = false;
	var i = 0;

	if(id === "")
	{
		alert("Please enter a card ID.");
		return;
	}

	for(i = 0; i < cardData.length; i++)
	{
		if(cardData[i][ID] == id)
		{
			found = true;
			break;
		}
	}
	if(!found)
	{
		alert('Card ID "' + id + '" was not found.');
		return;
	}

	if(txt === null || txt === undefined || txt === "")
	{
		localStorage.removeItem(id + COMMENT_SUFFIX);
		$("#commentStr").html('Comment for ' + id + ' cleared.');
	}
	else
	{
		localStorage.setItem(id + COMMENT_SUFFIX, txt);
		$("#commentStr").html('Comment for ' + id + ' saved.');
	}

	refreshCommentTextarea();
	$("#addCommentText").val("");
}

function deleteSingleComment()
{
	// No cardData validation: the comment may belong to a card that is no
	// longer listed, and the user should still be able to clean it out.
	var id = $.trim($("#deleteCommentId").val()).toUpperCase();

	if(id === "")
	{
		alert("Please enter a card ID.");
		return;
	}

	if(localStorage.getItem(id + COMMENT_SUFFIX) === null)
	{
		alert('No comment found for "' + id + '".');
		return;
	}

	localStorage.removeItem(id + COMMENT_SUFFIX);
	refreshCommentTextarea();

	$("#commentStr").html('Comment for ' + id + ' deleted.');
	$("#deleteCommentId").val("");
}

function resetAllCommentsFromManager()
{
	var ret = confirm("This will permanently delete ALL custom comments. Are you sure?");
	var i = 0;

	if(!ret)
	{
		return;
	}

	// Sweep every "*_VVZcomment" key, including ones for cards no longer in cardData.
	try
	{
		var keys = [];
		for(i = 0; i < localStorage.length; i++)
		{
			var k = localStorage.key(i);
			if(k && k.length > COMMENT_SUFFIX.length && k.indexOf(COMMENT_SUFFIX) === k.length - COMMENT_SUFFIX.length)
			{
				keys.push(k);
			}
		}
		for(i = 0; i < keys.length; i++)
		{
			localStorage.removeItem(keys[i]);
		}
	}
	catch(err)
	{
	}

	refreshCommentTextarea();

	$("#addCommentId").val("");
	$("#addCommentText").val("");
	$("#deleteCommentId").val("");

	$("#commentStr").html("All comments have been reset.");
}

function readSingleCommentFile(evt)
{
	var f = evt.target.files[0];

	if(!f)
	{
		return;
	}

	var r = new FileReader();
	r.onload = function(e) {
		var parsed = null;

		try
		{
			parsed = JSON.parse(e.target.result);
		}
		catch(err)
		{
			alert("Uploaded file is not valid JSON.");
			return;
		}

		if(!Array.isArray(parsed))
		{
			alert("Uploaded JSON must be an array of [id, text] pairs.");
			return;
		}

		applyCommentPairs(parsed);
		refreshCommentTextarea();
		$("#commentStr").html("Comments loaded and applied.");
	};
	r.readAsText(f);

	evt.target.value = "";
}

function showVersion()
{
	var str = "";

	str += "Author: ZZZ\n";
	str += "E-mail: relax100002000@hotmail.com\n";
	str += "\n";
	str += "20261015 v1.31\n";
	str += "1.移植WIXOSS版功能: 黑暗模式、ALT鎖定卡片預覽、卡片註解與Comment管理、\n";
	str += "   關鍵字搜尋註解、點擊大圖加入牌組、右鍵複製同名卡、Deck View、排序方法\n";
	str += "2.刪除/清空牌組與重置前跳出確認視窗\n";
	str += "3.修正Clear Deck、Upload Deck、Card List等問題\n";
	str += "\n";
	str += "4.新增VB03、VB04、VE01~VE03、VSD01、VP01~VP05、F07\n";
	str += "5.卡圖改為讀取本機 img/cardimg\n";
	str += "\n";
	str += "目前收錄:\n";
	str += "VD01 ~ VD02、VSD01\n";
	str += "VB01 ~ VB04\n";
	str += "VE01 ~ VE03\n";
	str += "VP01 ~ VP05\n";
	str += "F07\n";

	alert(str);
}

