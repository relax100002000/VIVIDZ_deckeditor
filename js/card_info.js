/*
	,[
		"", //ID
		"", //SRC
		"", //NAME
		"", //RARE
		"", //TYPE
		"", //COST
		"", //COSTDOWN
		"", //POWER
		"", //MISSION
		"", //FEATURE
		"", //ACCOUNT
		"", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"", //JP_TEXT
		""	//TW_TEXT
		]
*/

const ID = 0;
const SRC = 1;
const NAME = 2;
const RARE = 3;
const TYPE = 4;
const COST = 5;
const COSTDOWN = 6;
const POWER = 7;
const MISSION = 8;
const FEATURE = 9;
const ACCOUNT = 10;
const BAN = 11;
const SCOUT = 12;
const MAINTENANCE = 13;
const JP_TEXT = 14;
const TW_TEXT = 15;

var cardData = [
	[
		"VD01-001", //ID
		"img/cardimg/VD01-001.png", //SRC
		"ライズパワード キョウカ", //NAME
		"D", //RARE
		"キャラカード", //TYPE
		"0", //COST
		"0", //COSTDOWN
		"500", //POWER
		"A", //MISSION
		"サイバー", //FEATURE
		"キョウカ", //ACCOUNT
		"1", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 《EXP》 《誘発》 このカードがエリアから 《キョウカ》 の 《EXP》 になる。 《効果》 あなたのエリアを1つ選び、ミッションフェイズ終了時まで、以下の能力を与える。“ 《常》 《有効》 エリア 《効果》 このエリアにある 《キョウカ》 のパワーを＋2000する。”", //JP_TEXT
		""	//TW_TEXT
		],[
		"VD01-002", //ID
		"img/cardimg/VD01-002.png", //SRC
		"パイルパワード キョウカ", //NAME
		"D", //RARE
		"キャラカード", //TYPE
		"1", //COST
		"0", //COSTDOWN
		"1000", //POWER
		"A", //MISSION
		"サイバー", //FEATURE
		"キョウカ", //ACCOUNT
		"1", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エリア 《誘発》 《登場時》 《効果》 あなたのエリアを1つ選び、ミッションフェイズ終了時まで、以下の能力を与える。“ 《常》 《有効》 エリア 《効果》 このエリアにある 《キョウカ》 のパワーを＋2000する。”", //JP_TEXT
		""	//TW_TEXT
		],[
		"VD01-003", //ID
		"img/cardimg/VD01-003.png", //SRC
		"オーバーパワード キョウカ", //NAME
		"D", //RARE
		"キャラカード", //TYPE
		"5", //COST
		"0", //COSTDOWN
		"7000", //POWER
		"A", //MISSION
		"サイバー", //FEATURE
		"キョウカ", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エリア 《誘発》 《LvUP》 《効果》 このカードの 《EXP》 をすべてトラッシュに置いてよい。 《サイバー》 を持つ 《キョウカ》 を1枚以上トラッシュに置いたならば、あなたのすべてのエリアにミッションフェイズ終了時まで、以下の能力を与える。“ 《常》 《有効》 エリア 《効果》 このエリアにある 《キョウカ》 のパワーを＋2000する。”", //JP_TEXT
		""	//TW_TEXT
		],[
		"VD01-004", //ID
		"img/cardimg/VD01-004.png", //SRC
		"パワーでフィニッシュ！", //NAME
		"D", //RARE
		"ミッションカード", //TYPE
		"", //COST
		"", //COSTDOWN
		"", //POWER
		"A", //MISSION
		"サイバー", //FEATURE
		"キョウカ", //ACCOUNT
		"", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《チェック》 《有効》 《自分ターン》 《条件》 ①あなたのエリアでパワーが＋4000以上されているコスト5以上の 《サイバー》 を持つ 《キョウカ》 が 《アタック成功》 する。<br><br>《クリア》 《有効》 《スリープ》 《条件》 ❶このカードがあるレーンに相手のキャラがない。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VD01-005", //ID
		"img/cardimg/VD01-005.png", //SRC
		"エンカウントバトル キョウカ", //NAME
		"D", //RARE
		"キャラカード", //TYPE
		"0", //COST
		"0", //COSTDOWN
		"500", //POWER
		"B", //MISSION
		"サイバー", //FEATURE
		"キョウカ", //ACCOUNT
		"", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 《EXP》 《誘発》 このカードがエリアから 《キョウカ》 の 《EXP》 になる。 《効果》 あなたの手札が3枚以下の場合、1枚引き、あなたの手札を1枚選び、トラッシュに置く。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VD01-006", //ID
		"img/cardimg/VD01-006.png", //SRC
		"クイックアタック キョウカ", //NAME
		"D", //RARE
		"キャラカード", //TYPE
		"2", //COST
		"0", //COSTDOWN
		"3000", //POWER
		"B", //MISSION
		"サイバー", //FEATURE
		"キョウカ", //ACCOUNT
		"", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エリア 《誘発》 《アタック成功》 《効果》 あなたの手札が3枚以下の場合、1枚引いてよい。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VD01-007", //ID
		"img/cardimg/VD01-007.png", //SRC
		"カウンターチャンス キョウカ", //NAME
		"D", //RARE
		"キャラカード", //TYPE
		"3", //COST
		"0", //COSTDOWN
		"5000", //POWER
		"B", //MISSION
		"サイバー", //FEATURE
		"キョウカ", //ACCOUNT
		"", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エリア 《誘発》 《アタック成功》 《効果》 あなたの手札が3枚以下の場合、あなたのデッキを見て、その中にある「疾走炎舞 キョウカ」を1枚選び、公開し、手札に加えてよい。残りを元に戻し、シャッフルする。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VD01-008", //ID
		"img/cardimg/VD01-008.png", //SRC
		"アタシ、完全勝利！", //NAME
		"D", //RARE
		"ミッションカード", //TYPE
		"", //COST
		"", //COSTDOWN
		"", //POWER
		"B", //MISSION
		"サイバー", //FEATURE
		"キョウカ", //ACCOUNT
		"", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《チェック》 《有効》 《自分ターン》 《条件》 ①このターンに、あなたのエリアで「疾走炎舞 キョウカ」が2回 《アタック成功》 する。<br><br>《クリア》 《有効》 《スリープ》 《条件》 ❶このカードがあるレーンに相手のキャラがない。❷このターンに、あなたのエリアで 《サイバー》 を持つキャラが4回以上 《アタック成功》 している。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VD01-009", //ID
		"img/cardimg/VD01-009.png", //SRC
		"疾走炎舞 キョウカ", //NAME
		"D", //RARE
		"キャラカード", //TYPE
		"6", //COST
		"1", //COSTDOWN
		"9000", //POWER
		"☆", //MISSION
		"サイバー", //FEATURE
		"キョウカ", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 《ターン1》 エリア 《誘発》 《アタック成功》 《効果》 このカードを 《リブート》 する。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VD01-010", //ID
		"img/cardimg/VD01-010.png", //SRC
		"Δシスターズ 三女ラミ", //NAME
		"D", //RARE
		"キャラカード", //TYPE
		"0", //COST
		"0", //COSTDOWN
		"500", //POWER
		"A", //MISSION
		"サイバー", //FEATURE
		"ストリーマー", //ACCOUNT
		"1", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 《EXP》 《誘発》 このカードがエリアからキャラの 《EXP》 になる。 《効果》 1枚引いてよい。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VD01-011", //ID
		"img/cardimg/VD01-011.png", //SRC
		"Δシスターズ 次女ルト", //NAME
		"D", //RARE
		"キャラカード", //TYPE
		"3", //COST
		"0", //COSTDOWN
		"3000", //POWER
		"A", //MISSION
		"サイバー", //FEATURE
		"ストリーマー", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エリア 《誘発》 《アタック成功》 《効果》 あなたの手札を1枚選び、トラッシュに置いてよい。置いたならば、あなたのデッキを見て、その中にあるコスト4以下の 《ストリーマー》 のキャラを1枚選び、公開し、手札に加えてよい。残りを元に戻し、シャッフルする。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VD01-012", //ID
		"img/cardimg/VD01-012.png", //SRC
		"Δシスターズ 長女アト", //NAME
		"D", //RARE
		"キャラカード", //TYPE
		"4", //COST
		"1", //COSTDOWN
		"4000", //POWER
		"A", //MISSION
		"サイバー", //FEATURE
		"ストリーマー", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エリア 《誘発》 《LvUP》 《効果》 このカードに 《EXP》 【 《ストリーマー》 が2枚以上】ある場合、1枚引いてよい。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VD01-013", //ID
		"img/cardimg/VD01-013.png", //SRC
		"Δシスターズの絆", //NAME
		"D", //RARE
		"ミッションカード", //TYPE
		"", //COST
		"", //COSTDOWN
		"", //POWER
		"A", //MISSION
		"サイバー", //FEATURE
		"ストリーマー", //ACCOUNT
		"", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《チェック》 《有効》 《自分ターン》 《条件》 ①あなたのエリアで「Δシスターズ 長女アト」に 《EXP》 【「Δシスターズ 次女ルト」と「Δシスターズ 三女ラミ」】があり、そのキャラが 《アタック成功》 する。<br><br>《クリア》 《有効》 《スリープ》 《条件》 ❶このカードがあるレーンに相手のキャラがない。❷あなたのエリアにある「Δシスターズ 長女アト」に 《EXP》 【「Δシスターズ 次女ルト」と「Δシスターズ 三女ラミ」】がある。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VD01-014", //ID
		"img/cardimg/VD01-014.png", //SRC
		"救護系女子 リサ・レク・シオン", //NAME
		"D", //RARE
		"キャラカード", //TYPE
		"2", //COST
		"0", //COSTDOWN
		"2000", //POWER
		"☆", //MISSION
		"サイバー", //FEATURE
		"ストリーマー", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エリア 《誘発》 《アタック成功》 《効果》 あなたの手札を1枚選び、トラッシュに置いてよい。置いたならば、あなたのトラッシュにある 《サイバー》 を持つキャラを1枚選び、手札に戻す。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VD01-015", //ID
		"img/cardimg/VD01-015.png", //SRC
		"ローズアシスト", //NAME
		"D", //RARE
		"イベントカード", //TYPE
		"2", //COST
		"", //COSTDOWN
		"", //POWER
		"☆", //MISSION
		"サイバー", //FEATURE
		"ストリーマー", //ACCOUNT
		"", //BAN
		"1", //SCOUT
		"", //MAINTENANCE
		"《イベント》 《効果》 このカードをエネルギーに置き、1枚引く。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VD01-016", //ID
		"img/cardimg/VD01-016.png", //SRC
		"ライトニングシュート", //NAME
		"D", //RARE
		"イベントカード", //TYPE
		"3", //COST
		"", //COSTDOWN
		"", //POWER
		"☆", //MISSION
		"サイバー", //FEATURE
		"ストリーマー", //ACCOUNT
		"", //BAN
		"1", //SCOUT
		"", //MAINTENANCE
		"《イベント》 《効果》 相手のエリアにあるコスト5以下のキャラを1枚選び、退場させる。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VD01-017", //ID
		"img/cardimg/VD01-017.png", //SRC
		"ボムサイクロン", //NAME
		"D", //RARE
		"イベントカード", //TYPE
		"4", //COST
		"", //COSTDOWN
		"", //POWER
		"☆", //MISSION
		"サイバー", //FEATURE
		"ストリーマー", //ACCOUNT
		"", //BAN
		"1", //SCOUT
		"", //MAINTENANCE
		"《イベント》 《効果》 このカードをエネルギーに置き、相手のエリアにあるキャラを1枚選び、5000ダメージを与える。 《リロード》 （あなたのトラッシュにあるすべてのキャラをデッキに戻し、シャッフルする。）", //JP_TEXT
		""	//TW_TEXT
		],[
		"VD01-018", //ID
		"img/cardimg/VD01-018.png", //SRC
		"最上 キョウカ", //NAME
		"D", //RARE
		"アカウントカード", //TYPE
		"", //COST
		"", //COSTDOWN
		"", //POWER
		"", //MISSION
		"", //FEATURE
		"キョウカ", //ACCOUNT
		"", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《起》 《アクセル》 《キョウカ》 《ストリーマー》<br>（ 《有効》 アカウント 《コスト》 《スリープ》 する。 《効果》 あなたのデッキの上から1枚公開し、そのカードが 《キョウカ》 か 《ストリーマー》 の場合、コストを支払わずにプレイしてよい。プレイしなかったならば、エネルギーに置く。）", //JP_TEXT
		""	//TW_TEXT
		],[
		"VD02-001", //ID
		"img/cardimg/VD02-001.png", //SRC
		"サーチターゲット 玲", //NAME
		"D", //RARE
		"キャラカード", //TYPE
		"0", //COST
		"0", //COSTDOWN
		"500", //POWER
		"A", //MISSION
		"サイバー", //FEATURE
		"玲", //ACCOUNT
		"1", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エリア 《誘発》 《登場時》 《効果》 あなたのデッキの上から1枚見て、そのカードをデッキの上か下に置く。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VD02-002", //ID
		"img/cardimg/VD02-002.png", //SRC
		"アナライズターゲット 玲", //NAME
		"D", //RARE
		"キャラカード", //TYPE
		"2", //COST
		"0", //COSTDOWN
		"3000", //POWER
		"A", //MISSION
		"サイバー", //FEATURE
		"玲", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《起》 《有効》 《ターン1》 エリア 《コスト》 あなたのエネルギーを1枚トラッシュに置く。 《効果》 相手のエリアにあるコスト3以上のキャラを1枚選び、2000ダメージを与える。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VD02-003", //ID
		"img/cardimg/VD02-003.png", //SRC
		"スナイプターゲット 玲", //NAME
		"D", //RARE
		"キャラカード", //TYPE
		"5", //COST
		"1", //COSTDOWN
		"5000", //POWER
		"A", //MISSION
		"サイバー", //FEATURE
		"玲", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エリア 《誘発》 《登場時》 《効果》 相手のエリアにあるキャラを1枚選び、3000ダメージを与えてよい。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VD02-004", //ID
		"img/cardimg/VD02-004.png", //SRC
		"摩天からの狙撃手", //NAME
		"D", //RARE
		"ミッションカード", //TYPE
		"", //COST
		"", //COSTDOWN
		"", //POWER
		"A", //MISSION
		"サイバー", //FEATURE
		"玲", //ACCOUNT
		"", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《チェック》 《有効》 《自分ターン》 《条件》 ①このターンに、あなたのエリアで 《サイバー》 を持つキャラがバトルをせず3回 《アタック成功》 する。<br><br>《クリア》 《有効》 《スリープ》 《条件》 ❶このカードがあるレーンに相手のキャラがない。❷このターンに、あなたのエリアでコスト5以上の 《サイバー》 を持つ 《玲》 が 《アタック成功》 している。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VD02-005", //ID
		"img/cardimg/VD02-005.png", //SRC
		"ファストショット 玲", //NAME
		"D", //RARE
		"キャラカード", //TYPE
		"0", //COST
		"0", //COSTDOWN
		"500", //POWER
		"B", //MISSION
		"サイバー", //FEATURE
		"玲", //ACCOUNT
		"1", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 《EXP》 《誘発》 このカードがエリアから 《玲》 の 《EXP》 になる。 《効果》 このカードを 《EXP》 に持つキャラがあるレーンにある相手のキャラを1枚選び、2000ダメージを与えてよい。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VD02-006", //ID
		"img/cardimg/VD02-006.png", //SRC
		"ラピッドショット 玲", //NAME
		"D", //RARE
		"キャラカード", //TYPE
		"2", //COST
		"", //COSTDOWN
		"3000", //POWER
		"B", //MISSION
		"サイバー", //FEATURE
		"玲", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エリア 《誘発》 《LvUP》 《効果》 このキャラを 《スリープ》 してよい。 《スリープ》 したならば、相手のエリアにあるキャラを1枚選び、4000ダメージを与える。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VD02-007", //ID
		"img/cardimg/VD02-007.png", //SRC
		"クリティカルショット 玲", //NAME
		"D", //RARE
		"キャラカード", //TYPE
		"4", //COST
		"1", //COSTDOWN
		"4000", //POWER
		"B", //MISSION
		"サイバー", //FEATURE
		"玲", //ACCOUNT
		"", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エリア 《誘発》 バトルをせず 《アタック成功》 《効果》 あなたのデッキを見て、その中にある「疾走斬舞 玲」を1枚選び、公開し、手札に加えてよい。残りを元に戻し、シャッフルする。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VD02-008", //ID
		"img/cardimg/VD02-008.png", //SRC
		"孤高の戦術家", //NAME
		"D", //RARE
		"ミッションカード", //TYPE
		"", //COST
		"", //COSTDOWN
		"", //POWER
		"B", //MISSION
		"サイバー", //FEATURE
		"玲", //ACCOUNT
		"", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《チェック》 《有効》 《自分ターン》 《条件》 ①このカードがあるレーンであなたの「疾走斬舞 玲」に 《EXP》 【 《サイバー》 を持つカードが3枚以上】あり、そのキャラが 《アタック成功》 する。<br><br>《クリア》 《有効》 《スリープ》 《条件》 ❶相手のすべてのエリアにキャラが1枚もない。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VD02-009", //ID
		"img/cardimg/VD02-009.png", //SRC
		"疾走斬舞 玲", //NAME
		"SR", //RARE
		"キャラカード", //TYPE
		"7", //COST
		"1", //COSTDOWN
		"10000", //POWER
		"☆", //MISSION
		"サイバー", //FEATURE
		"玲", //ACCOUNT
		"", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エリア 《誘発》 《アタック成功》 《効果》 相手のエリアにあるキャラを0～2枚選び、10000ダメージを割り振って与える。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VD02-010", //ID
		"img/cardimg/VD02-010.png", //SRC
		"Δシスターズ 三女ラミ", //NAME
		"D", //RARE
		"キャラカード", //TYPE
		"0", //COST
		"", //COSTDOWN
		"500", //POWER
		"A", //MISSION
		"サイバー", //FEATURE
		"ストリーマー", //ACCOUNT
		"1", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 《EXP》 《誘発》 このカードがエリアからキャラの 《EXP》 になる。 《効果》 1枚引いてよい。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VD02-011", //ID
		"img/cardimg/VD02-011.png", //SRC
		"Δシスターズ 次女ルト", //NAME
		"D", //RARE
		"キャラカード", //TYPE
		"3", //COST
		"0", //COSTDOWN
		"3000", //POWER
		"A", //MISSION
		"サイバー", //FEATURE
		"ストリーマー", //ACCOUNT
		"", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エリア 《誘発》 《アタック成功》 《効果》 あなたの手札を1枚選び、トラッシュに置いてよい。置いたならば、あなたのデッキを見て、その中にあるコスト4以下の 《ストリーマー》 のキャラを1枚選び、公開し、手札に加えてよい。残りを元に戻し、シャッフルする。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VD02-012", //ID
		"img/cardimg/VD02-012.png", //SRC
		"Δシスターズ 長女アト", //NAME
		"D", //RARE
		"キャラカード", //TYPE
		"4", //COST
		"1", //COSTDOWN
		"4000", //POWER
		"A", //MISSION
		"サイバー", //FEATURE
		"ストリーマー", //ACCOUNT
		"", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エリア 《誘発》 《LvUP》 《効果》 このカードに 《EXP》 【 《ストリーマー》 が2枚以上】ある場合、1枚引いてよい。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VD02-013", //ID
		"img/cardimg/VD02-013.png", //SRC
		"Δシスターズの絆", //NAME
		"D", //RARE
		"ミッションカード", //TYPE
		"", //COST
		"", //COSTDOWN
		"", //POWER
		"A", //MISSION
		"サイバー", //FEATURE
		"ストリーマー", //ACCOUNT
		"", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《チェック》 《有効》 《自分ターン》 《条件》 ①あなたのエリアで「Δシスターズ 長女アト」に 《EXP》 【「Δシスターズ 次女ルト」と「Δシスターズ 三女ラミ」】があり、そのキャラが 《アタック成功》 する。<br><br>《クリア》 《有効》 《スリープ》 《条件》 ❶このカードがあるレーンに相手のキャラがない。❷あなたのエリアにある「Δシスターズ 長女アト」に 《EXP》 【「Δシスターズ 次女ルト」と「Δシスターズ 三女ラミ」】がある。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VD02-014", //ID
		"img/cardimg/VD02-014.png", //SRC
		"救護系女子 リサ・レク・シオン", //NAME
		"D", //RARE
		"キャラカード", //TYPE
		"2", //COST
		"0", //COSTDOWN
		"2000", //POWER
		"☆", //MISSION
		"サイバー", //FEATURE
		"ストリーマー", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エリア 《誘発》 《アタック成功》 《効果》 あなたの手札を1枚選び、トラッシュに置いてよい。置いたならば、あなたのトラッシュにある 《サイバー》 を持つキャラを1枚選び、手札に戻す。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VD02-015", //ID
		"img/cardimg/VD02-015.png", //SRC
		"ローズアシスト", //NAME
		"D", //RARE
		"イベントカード", //TYPE
		"2", //COST
		"", //COSTDOWN
		"", //POWER
		"☆", //MISSION
		"サイバー", //FEATURE
		"ストリーマー", //ACCOUNT
		"", //BAN
		"1", //SCOUT
		"", //MAINTENANCE
		"《イベント》 《効果》 このカードをエネルギーに置き、1枚引く。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VD02-016", //ID
		"img/cardimg/VD02-016.png", //SRC
		"ライトニングシュート", //NAME
		"D", //RARE
		"イベントカード", //TYPE
		"3", //COST
		"", //COSTDOWN
		"", //POWER
		"☆", //MISSION
		"サイバー", //FEATURE
		"ストリーマー", //ACCOUNT
		"", //BAN
		"1", //SCOUT
		"", //MAINTENANCE
		"《イベント》 《効果》 相手のエリアにあるコスト5以下のキャラを1枚選び、退場させる。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VD02-017", //ID
		"img/cardimg/VD02-017.png", //SRC
		"ボムサイクロン", //NAME
		"D", //RARE
		"イベントカード", //TYPE
		"4", //COST
		"", //COSTDOWN
		"", //POWER
		"☆", //MISSION
		"サイバー", //FEATURE
		"ストリーマー", //ACCOUNT
		"", //BAN
		"1", //SCOUT
		"", //MAINTENANCE
		"《イベント》 《効果》 このカードをエネルギーに置き、相手のエリアにあるキャラを1枚選び、5000ダメージを与える。 《リロード》 （あなたのトラッシュにあるすべてのキャラをデッキに戻し、シャッフルする。）", //JP_TEXT
		""	//TW_TEXT
		],[
		"VD02-018", //ID
		"img/cardimg/VD02-018.png", //SRC
		"天憧 玲", //NAME
		"D", //RARE
		"アカウントカード", //TYPE
		"", //COST
		"", //COSTDOWN
		"", //POWER
		"", //MISSION
		"", //FEATURE
		"玲", //ACCOUNT
		"", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《起》 《アクセル》 《玲》 《ストリーマー》<br>（ 《有効》 アカウント 《コスト》 《スリープ》 する。 《効果》 あなたのデッキの上から1枚公開し、そのカードが 《玲》 か 《ストリーマー》 の場合、コストを支払わずにプレイしてよい。プレイしなかったならば、エネルギーに置く。）", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB01-001", //ID
		"img/cardimg/VB01-001.png", //SRC
		"ボムキャリアー キョウカ", //NAME
		"C", //RARE
		"キャラカード", //TYPE
		"0", //COST
		"0", //COSTDOWN
		"500", //POWER
		"C", //MISSION
		"サイバー", //FEATURE
		"キョウカ", //ACCOUNT
		"1", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 《EXP》 《誘発》 このカードがエリアから 《キョウカ》 の 《EXP》 になる。 《効果》 あなたの手札とエネルギーを1枚ずつ選び、トラッシュに置いてよい。1枚ずつ置いたならば、1回 《スカウト》 する。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB01-002", //ID
		"img/cardimg/VB01-002.png", //SRC
		"ボムスローイング キョウカ", //NAME
		"C", //RARE
		"キャラカード", //TYPE
		"2", //COST
		"0", //COSTDOWN
		"3000", //POWER
		"C", //MISSION
		"サイバー", //FEATURE
		"キョウカ", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《起》 《有効》 《自分ターン1》 エリア 《コスト》 あなたの手札を1枚トラッシュに置く。 《効果》 相手のキープにあるコスト3以下のカードを1枚選び、エネルギーに置く。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB01-003", //ID
		"img/cardimg/VB01-003.png", //SRC
		"ボムエクスプロージョン キョウカ", //NAME
		"R", //RARE
		"キャラカード", //TYPE
		"3", //COST
		"0", //COSTDOWN
		"5000", //POWER
		"C", //MISSION
		"サイバー", //FEATURE
		"キョウカ", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《起》 《有効》 《自分ターン1》 エリア 《コスト》 あなたの手札を1枚トラッシュに置く。 《効果》 あなたの手札が2枚以下の場合、1回 《スカウト》 する。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB01-004", //ID
		"img/cardimg/VB01-004.png", //SRC
		"大爆発で大量ゲット！", //NAME
		"UC", //RARE
		"ミッションカード", //TYPE
		"", //COST
		"", //COSTDOWN
		"", //POWER
		"C", //MISSION
		"サイバー", //FEATURE
		"キョウカ", //ACCOUNT
		"", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《チェック》 《有効》 《自分ターン》 《条件》 ①このターンに、あなたのエリアでコスト4以下の 《サイバー》 を持つ 《キョウカ》 のアタックか能力で4回 《スカウト》 する。<br><br>《クリア》 《有効》 《スリープ》 《条件》 ❶このカードがあるレーンに相手のキャラがない。❷あなたの手札が1枚もない。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB01-005", //ID
		"img/cardimg/VB01-005.png", //SRC
		"フルスタックボム キョウカ", //NAME
		"SR", //RARE
		"キャラカード", //TYPE
		"4", //COST
		"1", //COSTDOWN
		"4000", //POWER
		"☆", //MISSION
		"サイバー", //FEATURE
		"キョウカ", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エリア 《誘発》 《アタック成功》 《効果》 このカードの 《EXP》 をすべてトラッシュに置いてよい。置いた 《キョウカ》 の枚数1枚につき、1回 《スカウト》 する。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB01-006", //ID
		"img/cardimg/VB01-006.png", //SRC
		"ステルススニーク 玲", //NAME
		"C", //RARE
		"キャラカード", //TYPE
		"0", //COST
		"0", //COSTDOWN
		"500", //POWER
		"C", //MISSION
		"サイバー", //FEATURE
		"玲", //ACCOUNT
		"1", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エリア 《誘発》 《登場時》 《効果》 あなたのエリアにこのカードしかない場合、1枚引いてよい。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB01-007", //ID
		"img/cardimg/VB01-007.png", //SRC
		"ナイトジャンパー 玲", //NAME
		"C", //RARE
		"キャラカード", //TYPE
		"1", //COST
		"0", //COSTDOWN
		"1000", //POWER
		"C", //MISSION
		"サイバー", //FEATURE
		"玲", //ACCOUNT
		"1", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エリア 《誘発》 《登場時》 《効果》 1枚引いてよい。あなたの手札を1枚選び、このカードの 《EXP》 にする。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB01-008", //ID
		"img/cardimg/VB01-008.png", //SRC
		"サイレントダンス 玲", //NAME
		"R", //RARE
		"キャラカード", //TYPE
		"3", //COST
		"0", //COSTDOWN
		"5000", //POWER
		"C", //MISSION
		"サイバー", //FEATURE
		"玲", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エリア 《誘発》 《アタック成功》 《効果》 このカードに 《EXP》 【 《サイバー》 を持つ 《玲》 が2枚以上】ある場合、相手は自分のエネルギーを1枚選び、トラッシュに置く。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB01-009", //ID
		"img/cardimg/VB01-009.png", //SRC
		"夜翔の制圧者", //NAME
		"UC", //RARE
		"ミッションカード", //TYPE
		"", //COST
		"", //COSTDOWN
		"", //POWER
		"C", //MISSION
		"サイバー", //FEATURE
		"玲", //ACCOUNT
		"", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《チェック》 《有効》 《自分ターン》 《条件》 ①このターンに、あなたの 《サイバー》 を持つ 《玲》 の能力で相手のエネルギーを2回トラッシュに置く。<br><br>《クリア》 《有効》 《スリープ》 《条件》 ❶このカードがあるレーンに相手のキャラがない。❷あなたのエリアにコスト3以上の 《サイバー》 を持つ 《玲》 がある。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB01-010", //ID
		"img/cardimg/VB01-010.png", //SRC
		"スターダスト・バレット 玲", //NAME
		"SR", //RARE
		"キャラカード", //TYPE
		"4", //COST
		"1", //COSTDOWN
		"4000", //POWER
		"☆", //MISSION
		"サイバー", //FEATURE
		"玲", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エリア 《誘発》 《LvUP》 《効果》 このカードに 《EXP》 【 《玲》 】がある場合、相手のエリアにあるキャラを1枚選び、2000ダメージを与えてよい。<br><br>《自》 《有効》 エリア 《誘発》 《アタック成功》 《効果》 このカードに 《EXP》 【 《玲》 が3枚以上】ある場合、相手は自分のエネルギーを1枚選び、トラッシュに置く。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB01-011", //ID
		"img/cardimg/VB01-011.png", //SRC
		"プリティステップ らぶり", //NAME
		"C", //RARE
		"キャラカード", //TYPE
		"0", //COST
		"0", //COSTDOWN
		"500", //POWER
		"A", //MISSION
		"サイバー", //FEATURE
		"らぶり", //ACCOUNT
		"1", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《起》 《有効》 《自分ターン》 エネルギー 《コスト》 あなたの手札の 《同名》 以外の 《らぶり》 を1枚エネルギーに置く。 《効果》 このカードを手札に戻す。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB01-012", //ID
		"img/cardimg/VB01-012.png", //SRC
		"ストリートライバー らぶり", //NAME
		"C", //RARE
		"キャラカード", //TYPE
		"2", //COST
		"0", //COSTDOWN
		"2000", //POWER
		"A", //MISSION
		"サイバー", //FEATURE
		"らぶり", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 センター 《誘発》 《アタック成功》 《効果》 あなたのデッキを見て、その中にある「疾走愛月 らぶり」を1枚選び、公開し、手札に加えてよい。残りを元に戻し、シャッフルする。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB01-013", //ID
		"img/cardimg/VB01-013.png", //SRC
		"スマイリーエンジェル らぶり", //NAME
		"UC", //RARE
		"キャラカード", //TYPE
		"4", //COST
		"1", //COSTDOWN
		"2000", //POWER
		"A", //MISSION
		"サイバー", //FEATURE
		"らぶり", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《常》 《有効》 《自分ターン》 エリア 《効果》 あなたのすべてのエリアにある 《サイバー》 を持つキャラのパワーを＋2000する。<br><br>《自》 《有効》 《EXP》 《誘発》 このカードがセンターから「疾走愛月 らぶり」の 《EXP》 になる。 《効果》 このカードをあなたのサイドに 《スリープ》 で登場させてよい。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB01-014", //ID
		"img/cardimg/VB01-014.png", //SRC
		"#らぶりの応援キャンペーン", //NAME
		"UC", //RARE
		"ミッションカード", //TYPE
		"", //COST
		"", //COSTDOWN
		"", //POWER
		"A", //MISSION
		"サイバー", //FEATURE
		"らぶり", //ACCOUNT
		"", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《チェック》 《有効》 《自分ターン》 《条件》 ①あなたのセンターで「疾走愛月 らぶり」が 《アタック成功》 する。<br><br>《クリア》 《有効》 《スリープ》 《条件》 ❶このカードがあるレーンに相手のキャラがない。❷あなたのすべてのエリアに 《スリープ》 の 《サイバー》 を持つパワー7000以上のキャラがある。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB01-015", //ID
		"img/cardimg/VB01-015.png", //SRC
		"スポットライト", //NAME
		"C", //RARE
		"イベントカード", //TYPE
		"0", //COST
		"", //COSTDOWN
		"", //POWER
		"B", //MISSION
		"サイバー", //FEATURE
		"らぶり", //ACCOUNT
		"", //BAN
		"1", //SCOUT
		"", //MAINTENANCE
		"《イベント》 《効果》 あなたのセンターにある 《らぶり》 を1枚選び、ミッションフェイズ終了時まで、パワーを＋2000する。<br><br>《常》 《有効》 《自分ターン》 キープ 《効果》 あなたのセンターにある 《らぶり》 のパワーを＋2000する。<br><br>《自》 《有効》 キープ 《誘発》 ミッションフェイズ開始時。 《効果》 あなたのセンターに 《らぶり》 がない場合、このカードをエネルギーに置く。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB01-016", //ID
		"img/cardimg/VB01-016.png", //SRC
		"ネオンライト らぶり", //NAME
		"C", //RARE
		"キャラカード", //TYPE
		"3", //COST
		"0", //COSTDOWN
		"5000", //POWER
		"B", //MISSION
		"サイバー", //FEATURE
		"らぶり", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エリア 《誘発》 《登場時》 《効果》 あなたのキープに「スポットライト」がある場合、1枚引いてよい。<br><br>《自》 《有効》 エリア 《誘発》 《アタック成功》 《効果》 このカードのパワーが7000以上の場合、あなたのエネルギーにある 《サイバー》 を持つ 《らぶり》 を1枚選び、手札に戻してよい。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB01-017", //ID
		"img/cardimg/VB01-017.png", //SRC
		"スターリーライト らぶり", //NAME
		"UC", //RARE
		"キャラカード", //TYPE
		"5", //COST
		"1", //COSTDOWN
		"7000", //POWER
		"B", //MISSION
		"サイバー", //FEATURE
		"らぶり", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エリア 《誘発》 《登場時》 《効果》 あなたのキープに「スポットライト」がある場合、1枚引いてよい。<br><br>《自》 《有効》 センター 《誘発》 《アタック成功》 《効果》 あなたのキープが1枚もない場合、このカードの 《EXP》 【 《サイバー》 を持つキャラ】を1枚選び、トラッシュに置いてよい。置いたならば、あなたのトラッシュにある「スポットライト」を1枚選び、キープに置く。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB01-018", //ID
		"img/cardimg/VB01-018.png", //SRC
		"#輝きウイニング☆ミ", //NAME
		"UC", //RARE
		"ミッションカード", //TYPE
		"", //COST
		"", //COSTDOWN
		"", //POWER
		"B", //MISSION
		"サイバー", //FEATURE
		"らぶり", //ACCOUNT
		"", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《チェック》 《有効》 《自分ターン》 《条件》 ①あなたの 《らぶり》 の能力でキープに「スポットライト」が置かれる。<br><br>《クリア》 《有効》 《スリープ》 《条件》 ❶このカードがあるレーンに相手のキャラがない。❷あなたのキープに「スポットライト」がある。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB01-019", //ID
		"img/cardimg/VB01-019.png", //SRC
		"メイクオッケー！ らぶり", //NAME
		"C", //RARE
		"キャラカード", //TYPE
		"1", //COST
		"0", //COSTDOWN
		"1000", //POWER
		"C", //MISSION
		"サイバー", //FEATURE
		"らぶり", //ACCOUNT
		"1", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エリア 《誘発》 《登場時》 《効果》 あなたの手札を1枚選び、トラッシュに置いてよい。置いたならば、あなたのトラッシュにある「決めポーズ♥」を1枚選び、手札に戻す。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB01-020", //ID
		"img/cardimg/VB01-020.png", //SRC
		"衣装オッケー！ らぶり", //NAME
		"C", //RARE
		"キャラカード", //TYPE
		"2", //COST
		"0", //COSTDOWN
		"3000", //POWER
		"C", //MISSION
		"サイバー", //FEATURE
		"らぶり", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エリア 《誘発》 《アタック成功》 《効果》 あなたの手札を1枚選び、トラッシュに置いてよい。置いたならば、あなたのデッキを見て、その中にある「決めポーズ♥」を1枚選び、公開し、手札に加えてよい。残りを元に戻し、シャッフルする。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB01-021", //ID
		"img/cardimg/VB01-021.png", //SRC
		"撮れ高オッケー！ らぶり", //NAME
		"R", //RARE
		"キャラカード", //TYPE
		"4", //COST
		"1", //COSTDOWN
		"4000", //POWER
		"C", //MISSION
		"サイバー", //FEATURE
		"らぶり", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エリア 《誘発》 《アタック成功》 《効果》 あなたのトラッシュにある 《らぶり》 のイベントを1枚選び、手札に戻してよい。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB01-022", //ID
		"img/cardimg/VB01-022.png", //SRC
		"#見逃し厳禁♥", //NAME
		"UC", //RARE
		"ミッションカード", //TYPE
		"", //COST
		"", //COSTDOWN
		"", //POWER
		"C", //MISSION
		"サイバー", //FEATURE
		"らぶり", //ACCOUNT
		"", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《チェック》 《有効》 《自分ターン》 《条件》 ①このターンに、あなたが「決めポーズ♥」を3回プレイする。<br><br>《クリア》 《有効》 《スリープ》 《条件》 ❶このカードがあるレーンに相手のキャラがない。❷あなたのセンターに 《スリープ》 の 《サイバー》 を持つ 《らぶり》 がある。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB01-023", //ID
		"img/cardimg/VB01-023.png", //SRC
		"決めポーズ♥", //NAME
		"R", //RARE
		"イベントカード", //TYPE
		"1", //COST
		"", //COSTDOWN
		"", //POWER
		"☆", //MISSION
		"サイバー", //FEATURE
		"らぶり", //ACCOUNT
		"", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《イベント》 《効果》 あなたのエネルギーにある 《同名》 以外の 《らぶり》 を1枚選び、手札に戻す。戻したならば、あなたのデッキの上から2枚エネルギーに置く。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB01-024", //ID
		"img/cardimg/VB01-024.png", //SRC
		"疾走愛月 らぶり", //NAME
		"SR", //RARE
		"キャラカード", //TYPE
		"6", //COST
		"1", //COSTDOWN
		"9000", //POWER
		"☆", //MISSION
		"サイバー", //FEATURE
		"らぶり", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《常》 《有効》 エリア 《効果》 このカードの隣のエリアにあるキャラのパワーを＋4000する。<br><br>《常》 《有効》 センター 《効果》 相手はこのカードをカードの能力で選ぶことができない。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB01-025", //ID
		"img/cardimg/VB01-025.png", //SRC
		"おはなの妖精 まりあ", //NAME
		"C", //RARE
		"キャラカード", //TYPE
		"0", //COST
		"0", //COSTDOWN
		"500", //POWER
		"A", //MISSION
		"サイバー", //FEATURE
		"まりあ", //ACCOUNT
		"1", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《起》 《有効》 《自分ターン》 《EXP》 《コスト》 あなたの手札を1枚デッキの下に置く。 《効果》 あなたのデッキの上から1枚公開し、そのカードを手札に加えるか、このカードを 《EXP》 に持つキャラの 《EXP》 にする。ミッションフェイズ終了時まで、あなたは 《同名》 のこの能力をプレイできない。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB01-026", //ID
		"img/cardimg/VB01-026.png", //SRC
		"こわがり妖精 まりあ", //NAME
		"C", //RARE
		"キャラカード", //TYPE
		"2", //COST
		"0", //COSTDOWN
		"1000", //POWER
		"A", //MISSION
		"サイバー", //FEATURE
		"まりあ", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《起》 《有効》 《自分ターン1》 エリア 《コスト》 あなたの手札を1枚デッキの下に置く。 《効果》 あなたのデッキの上から1枚公開し、そのカードがコスト1以下の場合、このカードの 《EXP》 にする。コスト2以上ならば、手札に加える。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB01-027", //ID
		"img/cardimg/VB01-027.png", //SRC
		"しあわせの妖精 まりあ", //NAME
		"UC", //RARE
		"キャラカード", //TYPE
		"4", //COST
		"1", //COSTDOWN
		"1000", //POWER
		"A", //MISSION
		"サイバー", //FEATURE
		"まりあ", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《起》 《有効》 《自分ターン1》 エリア 《コスト》 なし 《効果》 あなたのデッキを見て、その中にある 《サイバー》 を持つ 《まりあ》 を1枚選び、公開し、手札に加えてよい。残りを元に戻し、シャッフルする。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB01-028", //ID
		"img/cardimg/VB01-028.png", //SRC
		"ハーヴェスト・フェアリー", //NAME
		"UC", //RARE
		"ミッションカード", //TYPE
		"", //COST
		"", //COSTDOWN
		"", //POWER
		"A", //MISSION
		"サイバー", //FEATURE
		"まりあ", //ACCOUNT
		"", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《チェック》 《有効》 《自分ターン》 《条件》 ①あなたのすべてのエリアに 《サイバー》 を持つキャラがある時、元々のパワーが1000の 《まりあ》 が 《アタック成功》 する。<br><br>《クリア》 《有効》 《スリープ》 《条件》 ❶このカードがあるレーンに相手のキャラがない。❷あなたのエネルギーが10枚以上ある。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB01-029", //ID
		"img/cardimg/VB01-029.png", //SRC
		"勇気の蕾 まりあ", //NAME
		"C", //RARE
		"キャラカード", //TYPE
		"0", //COST
		"0", //COSTDOWN
		"500", //POWER
		"B", //MISSION
		"サイバー", //FEATURE
		"まりあ", //ACCOUNT
		"1", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《常》 《有効》 《自分ターン》 《EXP》 《効果》 このカードを 《EXP》 に持つキャラが 《まりあ》 の場合、パワーを＋1000する。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB01-030", //ID
		"img/cardimg/VB01-030.png", //SRC
		"闘志の花弁 まりあ", //NAME
		"C", //RARE
		"キャラカード", //TYPE
		"2", //COST
		"0", //COSTDOWN
		"2000", //POWER
		"B", //MISSION
		"サイバー", //FEATURE
		"まりあ", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《起》 《有効》 《ターン1》 エリア 《コスト》 あなたのエネルギーを1枚トラッシュに置く。 《効果》 1枚引く。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB01-031", //ID
		"img/cardimg/VB01-031.png", //SRC
		"満開旋風 まりあ", //NAME
		"UC", //RARE
		"キャラカード", //TYPE
		"3", //COST
		"0", //COSTDOWN
		"2000", //POWER
		"B", //MISSION
		"サイバー", //FEATURE
		"まりあ", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《起》 《有効》 《自分ターン1》 エリア 《コスト》 あなたの手札を1枚デッキの下に置く。 《効果》 あなたのトラッシュにある 《サイバー》 を持つ 《まりあ》 を2枚選び、このカードの 《EXP》 にする。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB01-032", //ID
		"img/cardimg/VB01-032.png", //SRC
		"ピースフル・フラワー", //NAME
		"UC", //RARE
		"ミッションカード", //TYPE
		"", //COST
		"", //COSTDOWN
		"", //POWER
		"B", //MISSION
		"サイバー", //FEATURE
		"まりあ", //ACCOUNT
		"", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《チェック》 《有効》 《自分ターン》 《条件》 ①このカードがあるレーンであなたの「疾走揺籃 まりあ」が 《アタック成功》 する。<br><br>《クリア》 《有効》 《スリープ》 《条件》 ❶このカードがあるレーンに相手のキャラがない。❷あなたのエリアにある「疾走揺籃 まりあ」に 《EXP》 【 《サイバー》 を持つカードが7枚以上】ある。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB01-033", //ID
		"img/cardimg/VB01-033.png", //SRC
		"狙われメイド まりあ", //NAME
		"C", //RARE
		"キャラカード", //TYPE
		"0", //COST
		"0", //COSTDOWN
		"500", //POWER
		"C", //MISSION
		"サイバー", //FEATURE
		"まりあ", //ACCOUNT
		"1", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《起》 《有効》 《自分ターン》 エリア 《コスト》 なし 《効果》 このカードの隣のエリアにあるコスト3以上の 《まりあ》 のキャラを1枚選び、このカードをそのキャラの 《EXP》 にする。選んだキャラがコスト8の場合、1枚引く。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB01-034", //ID
		"img/cardimg/VB01-034.png", //SRC
		"危機一髪メイド まりあ", //NAME
		"C", //RARE
		"キャラカード", //TYPE
		"3", //COST
		"0", //COSTDOWN
		"3000", //POWER
		"C", //MISSION
		"サイバー", //FEATURE
		"まりあ", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《起》 《有効》 《自分ターン1》 エリア 《コスト》 なし 《効果》 このカードがあるレーンに相手のキャラがない場合、このカードが 《スリープ》 ならば、あなたのデッキの上から2枚公開し、その中から 《まりあ》 のキャラを1枚選び、手札に加えてよい。残りを好きな順番でデッキの下に置く。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB01-035", //ID
		"img/cardimg/VB01-035.png", //SRC
		"一転攻勢メイド まりあ", //NAME
		"R", //RARE
		"キャラカード", //TYPE
		"5", //COST
		"1", //COSTDOWN
		"3000", //POWER
		"C", //MISSION
		"サイバー", //FEATURE
		"まりあ", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《起》 《有効》 《自分ターン1》 エリア 《コスト》 あなたの手札を1枚デッキの下に置く。 《効果》 あなたのデッキの上から5枚公開し、その中から 《まりあ》 のキャラを1枚選び、手札に加えてよい。残りを好きな順番でデッキの下に置く。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB01-036", //ID
		"img/cardimg/VB01-036.png", //SRC
		"メイド・スキルアップ", //NAME
		"UC", //RARE
		"ミッションカード", //TYPE
		"", //COST
		"", //COSTDOWN
		"", //POWER
		"C", //MISSION
		"サイバー", //FEATURE
		"まりあ", //ACCOUNT
		"", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《チェック》 《有効》 《自分ターン》 《条件》 ①あなたのエリアでコスト8の 《まりあ》 が 《アタック成功》 する。<br><br>《クリア》 《有効》 《スリープ》 《条件》 ❶このカードがあるレーンに相手のキャラがない。❷あなたのエリアにコスト8の 《サイバー》 を持つキャラが2枚以上ある。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB01-037", //ID
		"img/cardimg/VB01-037.png", //SRC
		"バーストシューティング まりあ", //NAME
		"R", //RARE
		"キャラカード", //TYPE
		"8", //COST
		"1", //COSTDOWN
		"5000", //POWER
		"☆", //MISSION
		"サイバー", //FEATURE
		"まりあ", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《起》 《有効》 《自分ターン1》 エリア 《コスト》 なし 《効果》 あなたのエリアにあるキャラの 《EXP》 を0～3枚選び、エネルギーに置く。3枚置いたならば、1枚引く。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB01-038", //ID
		"img/cardimg/VB01-038.png", //SRC
		"疾走揺籃 まりあ", //NAME
		"SR", //RARE
		"キャラカード", //TYPE
		"8", //COST
		"1", //COSTDOWN
		"11000", //POWER
		"☆", //MISSION
		"サイバー", //FEATURE
		"まりあ", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 《自分ターン》 エリア 《誘発》 メインフェイズ開始時。 《効果》 このカードの 《EXP》 が10枚以上ある場合、このカードをエネルギーに置いてよい。置いたならば、あなたのエネルギーにある 《まりあ》 を1枚選び、手札に戻す。<br><br>《起》 《有効》 《自分ターン1》 エリア 《コスト》 なし 《効果》 あなたのトラッシュにある 《まりあ》 を2枚選び、このカードの 《EXP》 にする。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB01-039", //ID
		"img/cardimg/VB01-039.png", //SRC
		"ホップビート シェリー", //NAME
		"C", //RARE
		"キャラカード", //TYPE
		"0", //COST
		"0", //COSTDOWN
		"500", //POWER
		"A", //MISSION
		"サイバー", //FEATURE
		"シェリー", //ACCOUNT
		"1", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《起》 《有効》 エリア 《コスト》 《スリープ》 する。 《効果》 あなたのキープを1枚選び、エネルギーに置く。あなたのエネルギーにある 《サイバー》 を持つ 《シェリー》 を1枚選び、キープに置く。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB01-040", //ID
		"img/cardimg/VB01-040.png", //SRC
		"シュートビート シェリー", //NAME
		"C", //RARE
		"キャラカード", //TYPE
		"2", //COST
		"0", //COSTDOWN
		"3000", //POWER
		"A", //MISSION
		"サイバー", //FEATURE
		"シェリー", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《常》 《有効》 エリア 《効果》 あなたのキープがある場合、このカードのパワーを＋2000する。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB01-041", //ID
		"img/cardimg/VB01-041.png", //SRC
		"バーストビート シェリー", //NAME
		"UC", //RARE
		"キャラカード", //TYPE
		"3", //COST
		"0", //COSTDOWN
		"5000", //POWER
		"A", //MISSION
		"サイバー", //FEATURE
		"シェリー", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エリア 《誘発》 《アタック成功》 《効果》 あなたのキープを1枚選び、エネルギーに置いてよい。置いたならば、あなたのデッキを見て、その中にある「疾走響鳴 シェリー」を1枚選び、キープに置いてよい。残りを元に戻し、シャッフルする。ミッションフェイズ終了時まで、あなたは 《同名》 のこの能力をプレイできない。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB01-042", //ID
		"img/cardimg/VB01-042.png", //SRC
		"グルーヴィーストリーム", //NAME
		"UC", //RARE
		"ミッションカード", //TYPE
		"", //COST
		"", //COSTDOWN
		"", //POWER
		"A", //MISSION
		"サイバー", //FEATURE
		"シェリー", //ACCOUNT
		"", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《チェック》 《有効》 《自分ターン》 《条件》 ①あなたのエリアで「疾走響鳴 シェリー」が 《アタック成功》 する。<br><br>《クリア》 《有効》 《スリープ》 《条件》 ❶このカードがあるレーンにキャラが1枚もない。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB01-043", //ID
		"img/cardimg/VB01-043.png", //SRC
		"バレットアーツ", //NAME
		"UC", //RARE
		"イベントカード", //TYPE
		"1", //COST
		"", //COSTDOWN
		"", //POWER
		"B", //MISSION
		"サイバー", //FEATURE
		"シェリー", //ACCOUNT
		"", //BAN
		"1", //SCOUT
		"", //MAINTENANCE
		"《イベント》 《効果》 あなたのキープを1枚選び、エネルギーに置く。このカードをキープに置く。<br><br>《常》 《有効》 キープ 《効果》 相手のすべてのエリアにあるキャラのパワーを－2000する。<br><br>《自》 《有効》 キープ 《誘発》 相手のキャラが退場する。 《効果》 このカードをエネルギーに置く。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB01-044", //ID
		"img/cardimg/VB01-044.png", //SRC
		"エイムアラート シェリー", //NAME
		"C", //RARE
		"キャラカード", //TYPE
		"2", //COST
		"0", //COSTDOWN
		"500", //POWER
		"B", //MISSION
		"サイバー", //FEATURE
		"シェリー", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エリア 《誘発》 《登場時》 《効果》 あなたのキープに 《シェリー》 がある場合、ミッションフェイズ終了時まで、現在相手のすべてのエリアにあるキャラのパワーを－2000する。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB01-045", //ID
		"img/cardimg/VB01-045.png", //SRC
		"キャラカード", //NAME
		"C", //RARE
		"キャラカード", //TYPE
		"5", //COST
		"1", //COSTDOWN
		"5000", //POWER
		"B", //MISSION
		"サイバー", //FEATURE
		"シェリー", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《常》 《有効》 《自分ターン》 エリア 《効果》 あなたのキープに 《シェリー》 がある場合、相手のすべてのエリアにあるキャラのパワーを－2000する。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB01-046", //ID
		"img/cardimg/VB01-046.png", //SRC
		"ショットガンデザイア", //NAME
		"UC", //RARE
		"ミッションカード", //TYPE
		"", //COST
		"", //COSTDOWN
		"", //POWER
		"B", //MISSION
		"サイバー", //FEATURE
		"シェリー", //ACCOUNT
		"", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《チェック》 《有効》 《自分ターン》 《条件》 ①相手のエリアにあるキャラの枚数より、あなたのエリアにあるキャラの枚数が2枚以上多い時、あなたの 《サイバー》 を持つ 《シェリー》 が 《アタック成功》 する。<br><br>《クリア》 《有効》 《スリープ》 《条件》 ❶相手のすべてのエリアにキャラが1枚もない。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB01-047", //ID
		"img/cardimg/VB01-047.png", //SRC
		"フォローデリート シェリー", //NAME
		"C", //RARE
		"キャラカード", //TYPE
		"1", //COST
		"0", //COSTDOWN
		"1000", //POWER
		"C", //MISSION
		"サイバー", //FEATURE
		"シェリー", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エリア 《誘発》 このカードがアタックする。 《効果》 あなたのエリアにあるコスト2以上のキャラを1枚選び、トラッシュに置く。置かなかったならば、このカードをデッキに戻し、シャッフルする。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB01-048", //ID
		"img/cardimg/VB01-048.png", //SRC
		"スマッシュデリート シェリー", //NAME
		"C", //RARE
		"キャラカード", //TYPE
		"2", //COST
		"0", //COSTDOWN
		"3000", //POWER
		"C", //MISSION
		"サイバー", //FEATURE
		"シェリー", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 トラッシュ 《誘発》 このカードがあなたの 《シェリー》 の能力でエリアからトラッシュに置かれる。 《効果》 1枚引く。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB01-049", //ID
		"img/cardimg/VB01-049.png", //SRC
		"オーバーデリート シェリー", //NAME
		"R", //RARE
		"キャラカード", //TYPE
		"4", //COST
		"1", //COSTDOWN
		"3000", //POWER
		"C", //MISSION
		"サイバー", //FEATURE
		"シェリー", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《起》 《有効》 《自分ターン2》エリア 《コスト》 あなたのエリアにあるコスト3以下の 《スリープ》 のキャラを1枚トラッシュに置く。 《効果》 1枚引く。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB01-050", //ID
		"img/cardimg/VB01-050.png", //SRC
		"スラッシュギグ", //NAME
		"UC", //RARE
		"ミッションカード", //TYPE
		"", //COST
		"", //COSTDOWN
		"", //POWER
		"C", //MISSION
		"サイバー", //FEATURE
		"シェリー", //ACCOUNT
		"", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《チェック》 《有効》 《自分ターン》 《条件》 ①このターンに、あなたの 《シェリー》 の能力であなたのエリアにあるキャラを3回トラッシュに置く。<br><br>《クリア》 《有効》 《スリープ》 《条件》 ❶このカードがあるレーンに相手のキャラがない。❷このカードがあるレーンにあなたの 《スリープ》 の 《サイバー》 を持つ 《シェリー》 がある。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB01-051", //ID
		"img/cardimg/VB01-051.png", //SRC
		"サウンドオブテラー", //NAME
		"R", //RARE
		"イベントカード", //TYPE
		"3", //COST
		"", //COSTDOWN
		"", //POWER
		"☆", //MISSION
		"サイバー", //FEATURE
		"シェリー", //ACCOUNT
		"", //BAN
		"1", //SCOUT
		"", //MAINTENANCE
		"《イベント》 《効果》 相手のエリアにあるコスト3以下のキャラを1枚選び、退場させる。あなたのキープに 《シェリー》 がある場合、かわりに相手のエリアにあるコスト7以下のキャラを1枚選び、退場させる。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB01-052", //ID
		"img/cardimg/VB01-052.png", //SRC
		"疾走響鳴 シェリー", //NAME
		"SR", //RARE
		"キャラカード", //TYPE
		"5", //COST
		"1", //COSTDOWN
		"11000", //POWER
		"☆", //MISSION
		"サイバー", //FEATURE
		"シェリー", //ACCOUNT
		"", //BAN
		"1", //SCOUT
		"1", //MAINTENANCE
		"《自》 《有効》 エリア 《誘発》 《アタック成功》 《効果》 このカードの 《EXP》 をすべてエネルギーに置く。あなたのキープを1枚選び、エネルギーに置き、このカードをあなたのキープに置く。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB01-053", //ID
		"img/cardimg/VB01-053.png", //SRC
		"ドミネイツオーダー プラチナム", //NAME
		"C", //RARE
		"キャラカード", //TYPE
		"7", //COST
		"1", //COSTDOWN
		"9000", //POWER
		"B", //MISSION
		"サイバー", //FEATURE
		"ストリーマー", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エリア 《誘発》 《登場時》 《効果》 あなたのデッキを見て、その中にある能力を持たないキャラをコストの合計が7以下になるように0～2枚選び、それぞれを、このカードの隣のエリアに 《リブート》 で登場させ、残りを元に戻し、シャッフルする。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB01-054", //ID
		"img/cardimg/VB01-054.png", //SRC
		"終幕～遥かなる闘い～", //NAME
		"UC", //RARE
		"ミッションカード", //TYPE
		"", //COST
		"", //COSTDOWN
		"", //POWER
		"B", //MISSION
		"サイバー", //FEATURE
		"ストリーマー", //ACCOUNT
		"", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《チェック》 《有効》 《自分ターン》 《条件》 ①このターンに、あなたのエリアで能力を持たないキャラが3回 《アタック成功》 する。<br><br>《クリア》 《有効》 《スリープ》 《条件》 ❶このカードがあるレーンに相手のキャラがない。❷あなたのエリアに「ドミネイツオーダー プラチナム」がある。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB01-055", //ID
		"img/cardimg/VB01-055.png", //SRC
		"電子の散歩道 砂時ケイ", //NAME
		"C", //RARE
		"キャラカード", //TYPE
		"0", //COST
		"0", //COSTDOWN
		"500", //POWER
		"☆", //MISSION
		"サイバー", //FEATURE
		"ストリーマー", //ACCOUNT
		"1", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《起》 《有効》 エリア 《コスト》 《スリープ》 する。 《効果》 相手のエリアにキャラが1枚もない場合、あなたのデッキの上から1枚エネルギーに置く。ミッションフェイズ終了時、あなたのエネルギーを1枚選び、トラッシュに置く。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB01-056", //ID
		"img/cardimg/VB01-056.png", //SRC
		"鷹の目 高遠ミハル", //NAME
		"C", //RARE
		"キャラカード", //TYPE
		"0", //COST
		"0", //COSTDOWN
		"500", //POWER
		"☆", //MISSION
		"サイバー", //FEATURE
		"ストリーマー", //ACCOUNT
		"1", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《起》 《有効》 エリア 《コスト》 《スリープ》 する。 《効果》 相手のエリアにキャラが1枚もない場合、1枚引き、あなたの手札を1枚選び、トラッシュに置く。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB01-057", //ID
		"img/cardimg/VB01-057.png", //SRC
		"リミットバランサー", //NAME
		"C", //RARE
		"イベントカード", //TYPE
		"0", //COST
		"", //COSTDOWN
		"", //POWER
		"☆", //MISSION
		"サイバー", //FEATURE
		"ストリーマー", //ACCOUNT
		"", //BAN
		"1", //SCOUT
		"", //MAINTENANCE
		"《イベント》 《効果》 以下の効果から1つ選び、解決する。▶ 《リロード》 （あなたのトラッシュにあるすべてのキャラをデッキに戻し、シャッフルする。）▶相手のトラッシュにあるすべてのキャラをデッキに戻し、シャッフルする。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB01-058", //ID
		"img/cardimg/VB01-058.png", //SRC
		"スティールショット", //NAME
		"C", //RARE
		"イベントカード", //TYPE
		"0", //COST
		"", //COSTDOWN
		"", //POWER
		"☆", //MISSION
		"サイバー", //FEATURE
		"ストリーマー", //ACCOUNT
		"", //BAN
		"1", //SCOUT
		"", //MAINTENANCE
		"《イベント》 《効果》 相手のキープを1枚選び、エネルギーに置く。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB01-059", //ID
		"img/cardimg/VB01-059.png", //SRC
		"誘引の旋律 夢音ネイロ", //NAME
		"☆", //RARE
		"キャラカード", //TYPE
		"1", //COST
		"0", //COSTDOWN
		"1000", //POWER
		"☆", //MISSION
		"サイバー", //FEATURE
		"ストリーマー", //ACCOUNT
		"", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《常》 《有効》 エリア 《効果》 カードの効果でこのカードを選べる場合、相手はこのカードを選ばなければならない。（選ばなければならないキャラが複数ある場合、それらのうちの1枚を選ぶ。）", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB01-060", //ID
		"img/cardimg/VB01-060.png", //SRC
		"愛の工作員 牡丹ハナビ", //NAME
		"C", //RARE
		"キャラカード", //TYPE
		"1", //COST
		"0", //COSTDOWN
		"1000", //POWER
		"☆", //MISSION
		"サイバー", //FEATURE
		"ストリーマー", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《常》 《有効》 エリア 《効果》 このカードのアタックであなたは 《スカウト》 できない。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB01-061", //ID
		"img/cardimg/VB01-061.png", //SRC
		"ケミカルスモーク", //NAME
		"UC", //RARE
		"イベントカード", //TYPE
		"1", //COST
		"", //COSTDOWN
		"", //POWER
		"☆", //MISSION
		"サイバー", //FEATURE
		"ストリーマー", //ACCOUNT
		"", //BAN
		"1", //SCOUT
		"", //MAINTENANCE
		"《イベント》 《効果》 あなたのエリアにあるキャラを1枚選び、ミッションフェイズ終了時まで、パワーを＋2000する。 《リロード》 （あなたのトラッシュにあるすべてのキャラをデッキに戻し、シャッフルする。）", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB01-062", //ID
		"img/cardimg/VB01-062.png", //SRC
		"ウエポンブックマーク", //NAME
		"UC", //RARE
		"イベントカード", //TYPE
		"1", //COST
		"", //COSTDOWN
		"", //POWER
		"☆", //MISSION
		"サイバー", //FEATURE
		"ストリーマー", //ACCOUNT
		"", //BAN
		"1", //SCOUT
		"", //MAINTENANCE
		"《イベント》 《効果》 あなたのデッキの上から5枚公開し、その中にあるコスト6以上のキャラを好きな枚数手札に加え、残りを好きな順番でデッキの下に置く。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB01-063", //ID
		"img/cardimg/VB01-063.png", //SRC
		"海賊の心得", //NAME
		"SR", //RARE
		"イベントカード", //TYPE
		"1", //COST
		"", //COSTDOWN
		"", //POWER
		"☆", //MISSION
		"サイバー", //FEATURE
		"ストリーマー", //ACCOUNT
		"", //BAN
		"1", //SCOUT
		"1", //MAINTENANCE
		"《イベント》 《効果》 あなたのデッキの上から2枚エネルギーに置く。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB01-064", //ID
		"img/cardimg/VB01-064.png", //SRC
		"ハイパーアナライズ", //NAME
		"SR", //RARE
		"イベントカード", //TYPE
		"1", //COST
		"", //COSTDOWN
		"", //POWER
		"☆", //MISSION
		"サイバー", //FEATURE
		"ストリーマー", //ACCOUNT
		"", //BAN
		"1", //SCOUT
		"", //MAINTENANCE
		"《イベント》 《効果》 3枚引く。ミッションフェイズ終了時まで、あなたは 《同名》 のこの能力をプレイできない。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB01-065", //ID
		"img/cardimg/VB01-065.png", //SRC
		"ドミネイツ アメジスト", //NAME
		"C", //RARE
		"キャラカード", //TYPE
		"2", //COST
		"0", //COSTDOWN
		"4000", //POWER
		"☆", //MISSION
		"サイバー", //FEATURE
		"ストリーマー", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB01-066", //ID
		"img/cardimg/VB01-066.png", //SRC
		"ソードコレクター 御剣トウコ", //NAME
		"UC", //RARE
		"キャラカード", //TYPE
		"2", //COST
		"0", //COSTDOWN
		"3000", //POWER
		"☆", //MISSION
		"サイバー", //FEATURE
		"ストリーマー", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エリア 《誘発》 このカードがバトルによって相手のキャラを退場させる。 《効果》 あなたのデッキを見て、その中にあるバトルで退場させたキャラのコスト以下の 《サイバー》 を持つキャラを1枚選び、公開し、手札に加えてよい。残りを元に戻し、シャッフルする。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB01-067", //ID
		"img/cardimg/VB01-067.png", //SRC
		"ポケットギフト", //NAME
		"UC", //RARE
		"イベントカード", //TYPE
		"2", //COST
		"", //COSTDOWN
		"", //POWER
		"☆", //MISSION
		"サイバー", //FEATURE
		"ストリーマー", //ACCOUNT
		"", //BAN
		"1", //SCOUT
		"", //MAINTENANCE
		"《イベント》 《効果》 あなたのエリアにある 《サイバー》 を持つキャラを1枚選び、このカードをそのキャラの 《EXP》 にし、1枚引く。 《リロード》 （あなたのトラッシュにあるすべてのキャラをデッキに戻し、シャッフルする。）", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB01-068", //ID
		"img/cardimg/VB01-068.png", //SRC
		"トラッシュディガー", //NAME
		"UC", //RARE
		"イベントカード", //TYPE
		"2", //COST
		"", //COSTDOWN
		"", //POWER
		"☆", //MISSION
		"サイバー", //FEATURE
		"ストリーマー", //ACCOUNT
		"", //BAN
		"1", //SCOUT
		"", //MAINTENANCE
		"《イベント》 《効果》 あなたのトラッシュにあるキャラを1枚選び、手札に戻す。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB01-069", //ID
		"img/cardimg/VB01-069.png", //SRC
		"タクティカルサーチ", //NAME
		"R", //RARE
		"イベントカード", //TYPE
		"2", //COST
		"", //COSTDOWN
		"", //POWER
		"☆", //MISSION
		"サイバー", //FEATURE
		"ストリーマー", //ACCOUNT
		"", //BAN
		"1", //SCOUT
		"", //MAINTENANCE
		"《イベント》 《効果》 あなたのデッキを見て、その中にあるコスト3以下のキャラを1枚選び、公開し、手札に加えてよい。残りを元に戻し、シャッフルする。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB01-070", //ID
		"img/cardimg/VB01-070.png", //SRC
		"ドミネイツ エメラルダ", //NAME
		"UC", //RARE
		"キャラカード", //TYPE
		"3", //COST
		"0", //COSTDOWN
		"6000", //POWER
		"☆", //MISSION
		"サイバー", //FEATURE
		"ストリーマー", //ACCOUNT
		"", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB01-071", //ID
		"img/cardimg/VB01-071.png", //SRC
		"ツインショック", //NAME
		"R", //RARE
		"イベントカード", //TYPE
		"3", //COST
		"", //COSTDOWN
		"", //POWER
		"☆", //MISSION
		"サイバー", //FEATURE
		"ストリーマー", //ACCOUNT
		"", //BAN
		"1", //SCOUT
		"", //MAINTENANCE
		"《イベント》 《効果》 相手のエリアにあるキャラを0～2枚選び、3000ダメージを与える。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB01-072", //ID
		"img/cardimg/VB01-072.png", //SRC
		"救援要請！！", //NAME
		"UC", //RARE
		"イベントカード", //TYPE
		"3", //COST
		"", //COSTDOWN
		"", //POWER
		"☆", //MISSION
		"サイバー", //FEATURE
		"ストリーマー", //ACCOUNT
		"", //BAN
		"1", //SCOUT
		"", //MAINTENANCE
		"《イベント》 《効果》 あなたのデッキを見て、その中にある能力を持たないキャラを1枚選び、アタック中のキャラがないエリアに 《リブート》 で登場させる。残りを元に戻し、シャッフルする。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB01-073", //ID
		"img/cardimg/VB01-073.png", //SRC
		"ドミネイツ ダイヤ", //NAME
		"UC", //RARE
		"キャラカード", //TYPE
		"5", //COST
		"1", //COSTDOWN
		"8000", //POWER
		"☆", //MISSION
		"サイバー", //FEATURE
		"ストリーマー", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB01-074", //ID
		"img/cardimg/VB01-074.png", //SRC
		"滑空少女 服部シノブ", //NAME
		"UC", //RARE
		"キャラカード", //TYPE
		"5", //COST
		"1", //COSTDOWN
		"6000", //POWER
		"☆", //MISSION
		"サイバー", //FEATURE
		"ストリーマー", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エネルギー 《誘発》 このカードが 《スカウト》 によってエネルギーに置かれる。 《効果》 このカード以外のあなたのエネルギーを2枚選び、トラッシュに置いてよい。2枚置いたならば、このカードをアタック中のキャラがないエリアに 《リブート》 で登場させる。ミッションフェイズ終了時、このカードをトラッシュに置く。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB01-075", //ID
		"img/cardimg/VB01-075.png", //SRC
		"虚実一閃", //NAME
		"SR", //RARE
		"イベントカード", //TYPE
		"5", //COST
		"0", //COSTDOWN
		"", //POWER
		"☆", //MISSION
		"サイバー", //FEATURE
		"ストリーマー", //ACCOUNT
		"", //BAN
		"1", //SCOUT
		"", //MAINTENANCE
		"《イベント》 《効果》 相手のエリアにあるキャラを1枚選び、退場させる。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB01-076", //ID
		"img/cardimg/VB01-076.png", //SRC
		"ミラクルゲート", //NAME
		"R", //RARE
		"イベントカード", //TYPE
		"12", //COST
		"", //COSTDOWN
		"", //POWER
		"☆", //MISSION
		"サイバー", //FEATURE
		"ストリーマー", //ACCOUNT
		"", //BAN
		"0", //SCOUT
		"", //MAINTENANCE
		"《イベント》 《有効》 《自分ターン》 《効果》 あなたのエネルギーにあるキャラを0～2枚選び、それぞれ別々のエリアに 《リブート》 で登場させる。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB01-077", //ID
		"img/cardimg/VB01-077.png", //SRC
		"Vividz Star", //NAME
		"R", //RARE
		"イベントカード", //TYPE
		"1000", //COST
		"", //COSTDOWN
		"", //POWER
		"☆", //MISSION
		"サイバー", //FEATURE
		"ストリーマー", //ACCOUNT
		"", //BAN
		"0", //SCOUT
		"", //MAINTENANCE
		"《イベント》 《有効》 《自分ターン》 《効果》 あなたの 《サイバー》 を持つミッションを1枚選び、クリアする。<br><br>《常》 《有効》 すべて 《効果》 デッキを構築する際、このカードをデッキに1枚まで入れることができる。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB01-078", //ID
		"img/cardimg/VB01-078.png", //SRC
		"月恋 らぶり", //NAME
		"UC", //RARE
		"アカウントカード", //TYPE
		"", //COST
		"", //COSTDOWN
		"", //POWER
		"", //MISSION
		"", //FEATURE
		"らぶり", //ACCOUNT
		"", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《起》 《アクセル》 《らぶり》 《ストリーマー》<br>（ 《有効》 アカウント 《コスト》 《スリープ》 する。 《効果》 あなたのデッキの上から1枚公開し、そのカードが 《らぶり》 か 《ストリーマー》 の場合、コストを支払わずにプレイしてよい。プレイしなかったならば、エネルギーに置く。）", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB01-079", //ID
		"img/cardimg/VB01-079.png", //SRC
		"芽吹 まりあ", //NAME
		"UC", //RARE
		"アカウントカード", //TYPE
		"", //COST
		"", //COSTDOWN
		"", //POWER
		"", //MISSION
		"", //FEATURE
		"まりあ", //ACCOUNT
		"", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《起》 《アクセル》 《まりあ》 《ストリーマー》<br>（ 《有効》 アカウント 《コスト》 《スリープ》 する。 《効果》 あなたのデッキの上から1枚公開し、そのカードが 《まりあ》 か 《ストリーマー》 の場合、コストを支払わずにプレイしてよい。プレイしなかったならば、エネルギーに置く。）", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB01-080", //ID
		"img/cardimg/VB01-080.png", //SRC
		"シェリー・ヴァイオレット", //NAME
		"UC", //RARE
		"アカウントカード", //TYPE
		"", //COST
		"", //COSTDOWN
		"", //POWER
		"", //MISSION
		"", //FEATURE
		"シェリー", //ACCOUNT
		"", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《起》 《アクセル》 《シェリー》 《ストリーマー》<br>（ 《有効》 アカウント 《コスト》 《スリープ》 する。 《効果》 あなたのデッキの上から1枚公開し、そのカードが 《シェリー》 か 《ストリーマー》 の場合、コストを支払わずにプレイしてよい。プレイしなかったならば、エネルギーに置く。）", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB02-001", //ID
		"img/cardimg/VB02-001.png", //SRC
		"壱の型 キョウカ", //NAME
		"UC", //RARE
		"キャラカード", //TYPE
		"2", //COST
		"0", //COSTDOWN
		"3000", //POWER
		"D", //MISSION
		"サイバー", //FEATURE
		"キョウカ", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《常》 《有効》 《自分ターン》 エリア 《効果》 相手はこのカードがあるレーンにあるキャラをスライドできない。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB02-002", //ID
		"img/cardimg/VB02-002.png", //SRC
		"弐の型 キョウカ", //NAME
		"C", //RARE
		"キャラカード", //TYPE
		"3", //COST
		"0", //COSTDOWN
		"5000", //POWER
		"D", //MISSION
		"サイバー", //FEATURE
		"キョウカ", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エリア 《誘発》 このカードがバトルによって相手のキャラを退場させる。 《効果》 0～2枚引き、あなたの手札を1枚選び、トラッシュに置く。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB02-003", //ID
		"img/cardimg/VB02-003.png", //SRC
		"参の型 キョウカ", //NAME
		"C", //RARE
		"キャラカード", //TYPE
		"4", //COST
		"1", //COSTDOWN
		"4000", //POWER
		"D", //MISSION
		"サイバー", //FEATURE
		"キョウカ", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エリア 《誘発》 《アタック成功》 《効果》 このカードがあるレーンに相手のキャラがある場合、1枚引き、あなたのデッキの上から1枚エネルギーに置く。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB02-004", //ID
		"img/cardimg/VB02-004.png", //SRC
		"いい感じの型、完成！", //NAME
		"UC", //RARE
		"ミッションカード", //TYPE
		"", //COST
		"", //COSTDOWN
		"", //POWER
		"D", //MISSION
		"サイバー", //FEATURE
		"キョウカ", //ACCOUNT
		"", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《チェック》 《有効》 《自分ターン》 《条件》 ①このターンに、あなたのエリアでコスト4以下の 《サイバー》 を持つ 《キョウカ》 が以下のいずれかを合計4回する。▶バトルによって相手のキャラを退場させる。▶バトルをせず 《アタック成功》 する。<br><br>《クリア》 《有効》 《スリープ》 《条件》 ❶このカードがあるレーンに相手のキャラがない。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB02-005", //ID
		"img/cardimg/VB02-005.png", //SRC
		"キャットクロー キョウカ", //NAME
		"C", //RARE
		"キャラカード", //TYPE
		"2", //COST
		"0", //COSTDOWN
		"2000", //POWER
		"E", //MISSION
		"サイバー", //FEATURE
		"キョウカ", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エリア 《誘発》 《LvUP》 《効果》 このカードに 《EXP》 【 《キョウカ》 】がある場合、1枚引いてよい。<br><br>《自》 《有効》 《EXP》 《誘発》 このカードがエリアから 《キョウカ》 の 《EXP》 になる。 《効果》 あなたの手札が3枚以下の場合、1枚引いてよい。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB02-006", //ID
		"img/cardimg/VB02-006.png", //SRC
		"エリアルクロー キョウカ", //NAME
		"C", //RARE
		"キャラカード", //TYPE
		"3", //COST
		"0", //COSTDOWN
		"4000", //POWER
		"E", //MISSION
		"サイバー", //FEATURE
		"キョウカ", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《起》 《有効》 《自分ターン》 手札 《コスト》 あなたのエネルギーを1枚トラッシュに置く。 《効果》 あなたのエリアにコスト6以上の 《サイバー》 を持つ 《キョウカ》 がある場合、このカードを 《リブート》 で登場させる。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB02-007", //ID
		"img/cardimg/VB02-007.png", //SRC
		"ドライブクロー キョウカ", //NAME
		"UC", //RARE
		"キャラカード", //TYPE
		"5", //COST
		"1", //COSTDOWN
		"7000", //POWER
		"E", //MISSION
		"サイバー", //FEATURE
		"キョウカ", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エリア 《誘発》 《アタック成功》 《効果》 あなたの手札を1枚選び、トラッシュに置いてよい。置いたならば、手札かキープにある、あなたの「ワイルドストライカー キョウカ」を1枚選び、このカードがあるエリアに 《リブート》 で登場させてよい。<br><br>《自》 《有効》 《EXP》 《誘発》 このカードがエリアから「ワイルドストライカー キョウカ」の 《EXP》 になる。 《効果》 あなたの手札が3枚以下の場合、1枚引いてよい。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB02-008", //ID
		"img/cardimg/VB02-008.png", //SRC
		"スピード勝負もお手の物！", //NAME
		"UC", //RARE
		"ミッションカード", //TYPE
		"", //COST
		"", //COSTDOWN
		"", //POWER
		"E", //MISSION
		"サイバー", //FEATURE
		"キョウカ", //ACCOUNT
		"", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《チェック》 《有効》 《自分ターン》 《条件》 ①このカードがあるレーンで「ワイルドストライカー キョウカ」が 《アタック成功》 する。<br><br>《クリア》 《有効》 《スリープ》 《条件》 ❶このカードがあるレーンに相手のキャラがない。❷このターンに、あなたのすべてのエリアで 《サイバー》 を持つキャラが2回以上 《アタック成功》 する。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB02-009", //ID
		"img/cardimg/VB02-009.png", //SRC
		"ブレイズ・スタンバイ キョウカ", //NAME
		"C", //RARE
		"キャラカード", //TYPE
		"0", //COST
		"", //COSTDOWN
		"500", //POWER
		"F", //MISSION
		"サイバー", //FEATURE
		"キョウカ", //ACCOUNT
		"1", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エリア 《誘発》 《登場時》 《効果》 あなたの手札にある「アクセルアーツ 煌煌爆剛拳」を1枚選び、公開してよい。公開したならば、2枚引き、公開したカードをデッキに戻し、シャッフルする。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB02-010", //ID
		"img/cardimg/VB02-010.png", //SRC
		"ブレイズ・プログレス キョウカ", //NAME
		"C", //RARE
		"キャラカード", //TYPE
		"2", //COST
		"0", //COSTDOWN
		"3000", //POWER
		"F", //MISSION
		"サイバー", //FEATURE
		"キョウカ", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《常》 《有効》 《自分ターン》 エリア 《効果》 あなたの手札が3枚以下の場合、このカードのパワーを＋2000する。<br><br>《自》 《有効》 エリア 《誘発》 《アタック成功》 《効果》 あなたの手札を1枚選び、トラッシュに置いてよい。置いたならば、あなたのトラッシュにある「ブレイズ・リアライズ キョウカ」を1枚選び、手札に戻す。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB02-011", //ID
		"img/cardimg/VB02-011.png", //SRC
		"ブレイズ・リアライズ キョウカ", //NAME
		"R", //RARE
		"キャラカード", //TYPE
		"4", //COST
		"1", //COSTDOWN
		"4000", //POWER
		"F", //MISSION
		"サイバー", //FEATURE
		"キョウカ", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エリア 《誘発》 《登場時》 《効果》 あなたのデッキの上から5枚公開し、その中にある「アクセルアーツ 煌煌爆剛拳」を1枚選び、デッキの上に置いてよい。置いたならば、あなたの手札を1枚選び、トラッシュに置き、あなたのアカウントを 《リブート》 する。残りを好きな順番でデッキの下に置く。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB02-012", //ID
		"img/cardimg/VB02-012.png", //SRC
		"アタシの拳で万事解決！", //NAME
		"UC", //RARE
		"ミッションカード", //TYPE
		"", //COST
		"", //COSTDOWN
		"", //POWER
		"F", //MISSION
		"サイバー", //FEATURE
		"キョウカ", //ACCOUNT
		"", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《チェック》 《有効》 《自分ターン》 《条件》 ①あなたが「アクセルアーツ 煌煌爆剛拳」をプレイする。<br><br>《クリア》 《有効》 《スリープ》 《条件》 ❶このカードがあるレーンに相手のキャラがない。❷このターンに、あなたのエリアでパワーが30000以上の 《サイバー》 を持つ 《キョウカ》 が 《アタック成功》 している。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB02-013", //ID
		"img/cardimg/VB02-013.png", //SRC
		"ワイルドストライカー キョウカ", //NAME
		"SR", //RARE
		"キャラカード", //TYPE
		"7", //COST
		"1", //COSTDOWN
		"10000", //POWER
		"☆", //MISSION
		"サイバー", //FEATURE
		"キョウカ", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エリア 《誘発》 《アタック成功》 《効果》 このカードの隣のエリアにあるこのカードよりパワーが低い 《サイバー》 を持つキャラをすべて 《リブート》 してよい。そうしたならば、あなたのエネルギーを2枚選び、トラッシュに置く。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB02-014", //ID
		"img/cardimg/VB02-014.png", //SRC
		"アクセルアーツ 煌煌爆剛拳", //NAME
		"R", //RARE
		"イベントカード", //TYPE
		"10", //COST
		"", //COSTDOWN
		"", //POWER
		"☆", //MISSION
		"サイバー", //FEATURE
		"キョウカ", //ACCOUNT
		"", //BAN
		"1", //SCOUT
		"", //MAINTENANCE
		"《イベント》 《効果》 あなたのエリアを1つ選び、ミッションフェイズ終了時まで、以下の能力を与える。“ 《常》 《有効》 エリア 《効果》 このエリアにある 《キョウカ》 のパワーを＋30000する。”<br><br>《起》 《有効》 《自分ターン1》 トラッシュ 《コスト》 なし 《効果》 あなたのトラッシュにある 《同名》 を2枚選ぶ。2枚選んだならば、選んだカードをデッキに戻し、シャッフルする。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB02-015", //ID
		"img/cardimg/VB02-015.png", //SRC
		"プレパレイトアロー 玲", //NAME
		"C", //RARE
		"キャラカード", //TYPE
		"0", //COST
		"0", //COSTDOWN
		"500", //POWER
		"D", //MISSION
		"サイバー", //FEATURE
		"玲", //ACCOUNT
		"1", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 《EXP》 《誘発》 このカードがエリアから 《玲》 の 《EXP》 になる。 《効果》 1枚引いてよい。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB02-016", //ID
		"img/cardimg/VB02-016.png", //SRC
		"クイックノックアロー 玲", //NAME
		"C", //RARE
		"キャラカード", //TYPE
		"2", //COST
		"0", //COSTDOWN
		"3000", //POWER
		"D", //MISSION
		"サイバー", //FEATURE
		"玲", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エリア 《誘発》 《アタック成功》 《効果》 あなたのエネルギーにあるコスト5以下の 《サイバー》 を持つ 《玲》 のキャラを1枚選び、手札に戻してよい。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB02-017", //ID
		"img/cardimg/VB02-017.png", //SRC
		"ブライトネスアロー 玲", //NAME
		"UC", //RARE
		"キャラカード", //TYPE
		"5", //COST
		"1", //COSTDOWN
		"7000", //POWER
		"D", //MISSION
		"サイバー", //FEATURE
		"玲", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エリア 《誘発》 《アタック成功》 《効果》 あなたのエネルギーにある 《サイバー》 を持つ 《玲》 のキャラを1枚選び、手札に戻してよい。<br><br>《自》 《有効》 エリア 《誘発》 バトルをせず 《アタック成功》 《効果》 1枚引く。このカードに 《EXP》 【 《玲》 が2枚以上】ある場合、1枚引いてよい。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB02-018", //ID
		"img/cardimg/VB02-018.png", //SRC
		"魔弾の射手", //NAME
		"UC", //RARE
		"ミッションカード", //TYPE
		"", //COST
		"", //COSTDOWN
		"", //POWER
		"D", //MISSION
		"サイバー", //FEATURE
		"玲", //ACCOUNT
		"", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《チェック》 《有効》 《自分ターン》 《条件》 ①このターンに、あなたのコスト5以上の 《サイバー》 を持つ 《玲》 の能力で2枚以上引く。<br><br>《クリア》 《有効》 《スリープ》 《条件》 ❶このカードがあるレーンに相手のキャラがない。❷あなたの手札が9枚以上ある。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB02-019", //ID
		"img/cardimg/VB02-019.png", //SRC
		"ライドウィング 玲", //NAME
		"C", //RARE
		"キャラカード", //TYPE
		"3", //COST
		"0", //COSTDOWN
		"3000", //POWER
		"E", //MISSION
		"サイバー", //FEATURE
		"玲", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エリア 《誘発》 《アタック成功》 《効果》 あなたのエネルギーを2枚選び、トラッシュに置いてよい。2枚置いたならば、あなたのエリアにあるコスト6以上の 《サイバー》 を持つ 《玲》 を1枚選び、手札に戻す。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB02-020", //ID
		"img/cardimg/VB02-020.png", //SRC
		"グライダーウィング 玲", //NAME
		"C", //RARE
		"キャラカード", //TYPE
		"4", //COST
		"1", //COSTDOWN
		"4000", //POWER
		"E", //MISSION
		"サイバー", //FEATURE
		"玲", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エリア 《誘発》 《LvUP》 《効果》 このカードに 《EXP》 【 《玲》 】がある場合、1枚引いてよい。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB02-021", //ID
		"img/cardimg/VB02-021.png", //SRC
		"ワールウィング 玲", //NAME
		"UC", //RARE
		"キャラカード", //TYPE
		"6", //COST
		"1", //COSTDOWN
		"7000", //POWER
		"E", //MISSION
		"サイバー", //FEATURE
		"玲", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エリア 《誘発》 《アタック成功》 《効果》 あなたの手札を1枚選び、トラッシュに置いてよい。置いたならば、手札かキープにある、あなたの「グローリーブレイド 玲」を1枚選び、このカードがあるエリアに 《リブート》 で登場させてよい。<br><br>《自》 《有効》 《EXP》 《誘発》 このカードがエリアから「グローリーブレイド 玲」の 《EXP》 になる。 《効果》 1枚引いてよい。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB02-022", //ID
		"img/cardimg/VB02-022.png", //SRC
		"星空の覇者", //NAME
		"UC", //RARE
		"ミッションカード", //TYPE
		"", //COST
		"", //COSTDOWN
		"", //POWER
		"E", //MISSION
		"サイバー", //FEATURE
		"玲", //ACCOUNT
		"", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《チェック》 《有効》 《自分ターン》 《条件》 ①このターンに、あなたのエリアでコスト5以上の 《サイバー》 を持つ 《玲》 がバトルをせず2回 《アタック成功》 する。<br><br>《クリア》 《有効》 《スリープ》 《条件》 ❶このカードがあるレーンに相手のキャラがない。❷あなたのエリアに「グローリーブレイド 玲」がある。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB02-023", //ID
		"img/cardimg/VB02-023.png", //SRC
		"ゲイル・エンコード 玲", //NAME
		"C", //RARE
		"キャラカード", //TYPE
		"0", //COST
		"0", //COSTDOWN
		"500", //POWER
		"F", //MISSION
		"サイバー", //FEATURE
		"玲", //ACCOUNT
		"1", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エリア 《誘発》 《登場時》 《効果》 あなたの手札にある「アクセルアーツ 断空雷迅脚」を1枚選び、公開してよい。公開したならば、2枚引き、公開したカードをデッキに戻し、シャッフルする。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB02-024", //ID
		"img/cardimg/VB02-024.png", //SRC
		"ゲイル・ストリーム 玲", //NAME
		"C", //RARE
		"キャラカード", //TYPE
		"2", //COST
		"0", //COSTDOWN
		"3000", //POWER
		"F", //MISSION
		"サイバー", //FEATURE
		"玲", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エリア 《誘発》 《アタック成功》 《効果》 あなたの手札を1枚選び、トラッシュに置いてよい。置いたならば、あなたのトラッシュにある「ゲイル・ソニック 玲」を1枚選び、手札に戻す。<br><br>《自》 《有効》 エリア 《誘発》 バトルをせず 《アタック成功》 《効果》 相手は自分のエネルギーを1枚選び、トラッシュに置く。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB02-025", //ID
		"img/cardimg/VB02-025.png", //SRC
		"ゲイル・ソニック 玲", //NAME
		"R", //RARE
		"キャラカード", //TYPE
		"4", //COST
		"1", //COSTDOWN
		"4000", //POWER
		"F", //MISSION
		"サイバー", //FEATURE
		"玲", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エリア 《誘発》 《アタック成功》 《効果》 あなたのデッキの上から5枚公開し、その中にある「アクセルアーツ 断空雷迅脚」を1枚選び、デッキの上に置いてよい。置いたならば、あなたのアカウントを1枚選び、 《リブート》 する。残りを好きな順番でデッキの下に置く。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB02-026", //ID
		"img/cardimg/VB02-026.png", //SRC
		"至風の先駆者", //NAME
		"UC", //RARE
		"ミッションカード", //TYPE
		"", //COST
		"", //COSTDOWN
		"", //POWER
		"F", //MISSION
		"サイバー", //FEATURE
		"玲", //ACCOUNT
		"", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《チェック》 《有効》 《自分ターン》 《条件》 ①あなたが「アクセルアーツ 断空雷迅脚」をプレイする。<br><br>《クリア》 《有効》 《スリープ》 《条件》 ❶このカードがあるレーンに相手のキャラがない。❷このカードがあるレーンにあなたの 《スリープ》 の 《サイバー》 を持つ 《玲》 がある。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB02-027", //ID
		"img/cardimg/VB02-027.png", //SRC
		"グローリーブレイド 玲", //NAME
		"SR", //RARE
		"キャラカード", //TYPE
		"8", //COST
		"1", //COSTDOWN
		"10000", //POWER
		"☆", //MISSION
		"サイバー", //FEATURE
		"玲", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エリア 《誘発》 《LvUP》 《効果》 このカードの 《EXP》 【 《サイバー》 を持つキャラ】を1枚選び、このカードの隣のエリアに 《リブート》 で登場させてよい。登場させたならば、あなたのエネルギーを2枚選び、トラッシュに置く。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB02-028", //ID
		"img/cardimg/VB02-028.png", //SRC
		"アクセルアーツ 断空雷迅脚", //NAME
		"R", //RARE
		"イベントカード", //TYPE
		"10", //COST
		"", //COSTDOWN
		"", //POWER
		"☆", //MISSION
		"サイバー", //FEATURE
		"玲", //ACCOUNT
		"", //BAN
		"0", //SCOUT
		"", //MAINTENANCE
		"《イベント》 《効果》 3枚引き、エリアにあるキャラを1枚選び、手札に戻す。<br><br>《起》 《有効》 《自分ターン1》 トラッシュ 《コスト》 なし 《効果》 あなたのトラッシュにある 《同名》 を2枚選ぶ。2枚選んだならば、選んだカードをデッキに戻し、シャッフルする。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB02-029", //ID
		"img/cardimg/VB02-029.png", //SRC
		"リラックスハーモニー", //NAME
		"C", //RARE
		"イベントカード", //TYPE
		"1", //COST
		"", //COSTDOWN
		"", //POWER
		"D", //MISSION
		"サイバー", //FEATURE
		"らぶり", //ACCOUNT
		"", //BAN
		"1", //SCOUT
		"", //MAINTENANCE
		"《イベント》 《効果》 あなたのエリアにある 《サイバー》 を持つ 《らぶり》 を1枚選び、このカードを選んだカードの 《EXP》 にする。<br><br>《自》 《有効》 《EXP》 《誘発》 このカードが 《らぶり》 の 《EXP》 になる。 《効果》 1枚引いてよい。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB02-030", //ID
		"img/cardimg/VB02-030.png", //SRC
		"アサルトチャージ らぶり", //NAME
		"C", //RARE
		"キャラカード", //TYPE
		"3", //COST
		"0", //COSTDOWN
		"4000", //POWER
		"D", //MISSION
		"サイバー", //FEATURE
		"らぶり", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エリア 《誘発》 《登場時》 《効果》 あなたのエネルギーにある「リラックスハーモニー」を1枚選び、手札に戻してよい。<br><br>《自》 《有効》 エリア 《誘発》 《アタック成功》 《効果》 このカードに 《EXP》 【「リラックスハーモニー」】がある場合、あなたのデッキの上から1枚をこのカードの 《EXP》 にしてよい。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB02-031", //ID
		"img/cardimg/VB02-031.png", //SRC
		"スウィフトスラッシュ らぶり", //NAME
		"UC", //RARE
		"キャラカード", //TYPE
		"5", //COST
		"1", //COSTDOWN
		"7000", //POWER
		"D", //MISSION
		"サイバー", //FEATURE
		"らぶり", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《常》 《有効》 《自分ターン》 センター 《効果》 このカードに 《EXP》 【「リラックスハーモニー」が2枚以上】ある場合、相手のセンターにあるキャラのパワーを－3000する。<br><br>《自》 《有効》 エリア 《誘発》 《登場時》 《効果》 あなたのトラッシュにある「リラックスハーモニー」を1枚選び、手札に戻してよい。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB02-032", //ID
		"img/cardimg/VB02-032.png", //SRC
		"#剣も得意なアイドル！", //NAME
		"UC", //RARE
		"ミッションカード", //TYPE
		"", //COST
		"", //COSTDOWN
		"", //POWER
		"D", //MISSION
		"サイバー", //FEATURE
		"らぶり", //ACCOUNT
		"", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《チェック》 《有効》 《自分ターン》 《条件》 ①あなたのエリアでコスト5以上の 《らぶり》 に 《EXP》 【「リラックスハーモニー」が2枚以上】あり、そのキャラが 《アタック成功》 する。<br><br>《クリア》 《有効》 《スリープ》 《条件》 ❶このカードがあるレーンに相手のキャラがない。❷あなたのセンターにある 《スリープ》 の 《らぶり》 に 《EXP》 【「リラックスハーモニー」が2枚以上】ある。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB02-033", //ID
		"img/cardimg/VB02-033.png", //SRC
		"隠れて索敵 らぶり", //NAME
		"C", //RARE
		"キャラカード", //TYPE
		"0", //COST
		"0", //COSTDOWN
		"500", //POWER
		"E", //MISSION
		"サイバー", //FEATURE
		"らぶり", //ACCOUNT
		"1", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 《EXP》 《誘発》 このカードがエリアから 《らぶり》 の 《EXP》 になる。 《効果》 あなたの手札にあるイベントを1枚選び、トラッシュに置いてよい。置いたならば、あなたのデッキの上から1枚をエネルギーに置く。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB02-034", //ID
		"img/cardimg/VB02-034.png", //SRC
		"注目の的 らぶり", //NAME
		"C", //RARE
		"キャラカード", //TYPE
		"1", //COST
		"0", //COSTDOWN
		"1000", //POWER
		"E", //MISSION
		"サイバー", //FEATURE
		"らぶり", //ACCOUNT
		"1", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《起》 《有効》 《ターン1》 エリア 《コスト》 あなたの手札にあるイベントを1枚トラッシュに置く。 《効果》 このカードをスライドする。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB02-035", //ID
		"img/cardimg/VB02-035.png", //SRC
		"決意の反撃 らぶり", //NAME
		"UC", //RARE
		"キャラカード", //TYPE
		"4", //COST
		"1", //COSTDOWN
		"3000", //POWER
		"E", //MISSION
		"サイバー", //FEATURE
		"らぶり", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 センター 《誘発》 《アタック成功》 《効果》 手札かキープにある、あなたの「ハート♥を狙い撃ち らぶり」を1枚選び、このカードがあるエリアに 《リブート》 で登場させてよい。<br><br>《自》 《有効》 《EXP》 《誘発》 このカードがエリアから「ハート♥を狙い撃ち らぶり」の 《EXP》 になる。 《効果》 あなたのサイドにあるキャラを0～2枚選び、手札に戻す。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB02-036", //ID
		"img/cardimg/VB02-036.png", //SRC
		"#次はキミをロック☆オン", //NAME
		"UC", //RARE
		"ミッションカード", //TYPE
		"", //COST
		"", //COSTDOWN
		"", //POWER
		"E", //MISSION
		"サイバー", //FEATURE
		"らぶり", //ACCOUNT
		"", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《チェック》 《有効》 《自分ターン》 《条件》 ①このターンに、あなたのセンターで「ハート♥を狙い撃ち らぶり」が3回 《アタック成功》 する。<br><br>《クリア》 《有効》 《スリープ》 《条件》 ❶このカードがあるレーンに相手のキャラがない。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB02-037", //ID
		"img/cardimg/VB02-037.png", //SRC
		"ラブリー☆シャイン", //NAME
		"R", //RARE
		"イベントカード", //TYPE
		"2", //COST
		"", //COSTDOWN
		"", //POWER
		"F", //MISSION
		"サイバー", //FEATURE
		"らぶり", //ACCOUNT
		"", //BAN
		"0", //SCOUT
		"", //MAINTENANCE
		"《イベント》 《効果》 あなたのセンターに 《らぶり》 がある場合、このカードをエネルギーに置く。あなたのデッキの上から5枚公開し、その中にある「アクセルアーツ らぶらぶらぶり♥」を1枚選び、デッキの上に置いてよい。置いたならば、あなたの手札を1枚選び、トラッシュに置き、このターンに、あなたのアカウントがカードの能力で 《リブート》 していない場合、 《リブート》 する。残りを好きな順番でデッキの下に置く。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB02-038", //ID
		"img/cardimg/VB02-038.png", //SRC
		"ラブリー☆ギフト", //NAME
		"C", //RARE
		"イベントカード", //TYPE
		"3", //COST
		"", //COSTDOWN
		"", //POWER
		"F", //MISSION
		"サイバー", //FEATURE
		"らぶり", //ACCOUNT
		"", //BAN
		"0", //SCOUT
		"1", //MAINTENANCE
		"《イベント》 《効果》 2枚引く。あなたのデッキの上から1枚エネルギーに置いてよい。<br><br>《常》 《有効》 手札 《効果》 このカードをプレイする際、コストを支払うかわりにあなたの手札にある「アクセルアーツ らぶらぶらぶり♥」を1枚選び、公開し、デッキに戻し、シャッフルしてよい。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB02-039", //ID
		"img/cardimg/VB02-039.png", //SRC
		"ラブリー☆インパクトC", //NAME
		"C", //RARE
		"イベントカード", //TYPE
		"4", //COST
		"", //COSTDOWN
		"", //POWER
		"F", //MISSION
		"サイバー", //FEATURE
		"らぶり", //ACCOUNT
		"", //BAN
		"0", //SCOUT
		"", //MAINTENANCE
		"《イベント》 《効果》 ミッションフェイズ終了時まで、現在相手のすべてのサイドにあるキャラのパワーを－3000する。<br><br>《常》 《有効》 手札 《効果》 このターンに、あなたが「アクセルアーツ らぶらぶらぶり♥」をプレイしていた場合、このカードのコストを－3する。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB02-040", //ID
		"img/cardimg/VB02-040.png", //SRC
		"#これが「らぶり」ってこと♪", //NAME
		"UC", //RARE
		"ミッションカード", //TYPE
		"", //COST
		"", //COSTDOWN
		"", //POWER
		"F", //MISSION
		"サイバー", //FEATURE
		"らぶり", //ACCOUNT
		"", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《チェック》 《有効》 《自分ターン》 《条件》 ①あなたが「アクセルアーツ らぶらぶらぶり♥」をプレイする。<br><br>《クリア》 《有効》 《スリープ》 《条件》 ❶相手のすべてのエリアにキャラが1枚もない。❷このカードがあるレーンに 《スリープ》 の 《らぶり》 がある。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB02-041", //ID
		"img/cardimg/VB02-041.png", //SRC
		"ハート♥を狙い撃ち らぶり", //NAME
		"SR", //RARE
		"キャラカード", //TYPE
		"7", //COST
		"1", //COSTDOWN
		"7777", //POWER
		"☆", //MISSION
		"サイバー", //FEATURE
		"らぶり", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エリア 《誘発》 このカードがサイドからセンターにスライドする。 《効果》 このカードに 《EXP》 【 《サイバー》 を持つカードが3枚以上】ある場合、このカードを 《リブート》 する。<br><br>《起》 《有効》 《自分ターン》 エリア 《コスト》 あなたのエネルギーにある 《らぶり》 を1枚トラッシュに置く。 《効果》 このカードをスライドする。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB02-042", //ID
		"img/cardimg/VB02-042.png", //SRC
		"アクセルアーツ らぶらぶらぶり♥", //NAME
		"R", //RARE
		"イベントカード", //TYPE
		"10", //COST
		"", //COSTDOWN
		"", //POWER
		"☆", //MISSION
		"サイバー", //FEATURE
		"らぶり", //ACCOUNT
		"", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《イベント》 《効果》 あなたのトラッシュにある 《らぶり》 のイベントを0～5枚選び、手札に戻す。<br><br>《起》 《有効》 《自分ターン1》 トラッシュ 《コスト》 なし 《効果》 あなたのトラッシュにある 《同名》 を2枚選ぶ。2枚選んだならば、選んだカードをデッキに戻し、シャッフルする。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB02-043", //ID
		"img/cardimg/VB02-043.png", //SRC
		"周囲をチェック まりあ", //NAME
		"C", //RARE
		"キャラカード", //TYPE
		"2", //COST
		"0", //COSTDOWN
		"2000", //POWER
		"D", //MISSION
		"サイバー", //FEATURE
		"まりあ", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《起》 《有効》 《自分ターン1》 エリア 《コスト》 あなたのエネルギーを2枚トラッシュに置く。 《効果》 あなたのトラッシュにある「突然のハプニング！」を1枚選び、あなたのデッキの上に置く。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB02-044", //ID
		"img/cardimg/VB02-044.png", //SRC
		"徹底チェック まりあ", //NAME
		"C", //RARE
		"キャラカード", //TYPE
		"3", //COST
		"0", //COSTDOWN
		"3000", //POWER
		"D", //MISSION
		"サイバー", //FEATURE
		"まりあ", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《起》 《有効》 《自分ターン1》 エリア 《コスト》 あなたのエネルギーを1枚トラッシュに置く。 《効果》 あなたのトラッシュにある「突然のハプニング！」を1枚選び、あなたのデッキの上に置く。<br><br>《起》 《有効》 《自分ターン1》 エリア 《コスト》 なし 《効果》 このカードに 《EXP》 【「突然のハプニング！」】がある場合、1枚引く。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB02-045", //ID
		"img/cardimg/VB02-045.png", //SRC
		"突然のハプニング！", //NAME
		"UC", //RARE
		"イベントカード", //TYPE
		"4", //COST
		"", //COSTDOWN
		"", //POWER
		"D", //MISSION
		"サイバー", //FEATURE
		"まりあ", //ACCOUNT
		"", //BAN
		"1", //SCOUT
		"", //MAINTENANCE
		"《イベント》 《効果》 あなたのエリアにある 《まりあ》 を1枚選び、このカードを選んだキャラの 《EXP》 にする。あなたのターンの場合、相手のキャラを1枚選び、ミッションフェイズ終了時まで、パワーを－3000する。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB02-046", //ID
		"img/cardimg/VB02-046.png", //SRC
		"トライ・アンド・エラー", //NAME
		"UC", //RARE
		"ミッションカード", //TYPE
		"", //COST
		"", //COSTDOWN
		"", //POWER
		"D", //MISSION
		"サイバー", //FEATURE
		"まりあ", //ACCOUNT
		"", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《チェック》 《有効》 《自分ターン》 《条件》 ①このターンに、あなたが 《スカウト》 で「突然のハプニング！」を2回プレイする。<br><br>《クリア》 《有効》 《スリープ》 《条件》 ❶このカードがあるレーンに相手のキャラがない。❷あなたのエリアにある 《まりあ》 に 《EXP》 【「突然のハプニング！」】が合計2枚以上ある。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB02-047", //ID
		"img/cardimg/VB02-047.png", //SRC
		"ランチャーデビュー まりあ", //NAME
		"C", //RARE
		"キャラカード", //TYPE
		"0", //COST
		"0", //COSTDOWN
		"500", //POWER
		"E", //MISSION
		"サイバー", //FEATURE
		"まりあ", //ACCOUNT
		"1", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《起》 《有効》 《EXP》 《コスト》 なし 《効果》 あなたのトラッシュを1枚選び、このカードを 《EXP》 に持つキャラの 《EXP》 にする。このカードをデッキの下に置く。ミッションフェイズ終了時まで、あなたは 《同名》 のこの能力をプレイできない。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB02-048", //ID
		"img/cardimg/VB02-048.png", //SRC
		"パワーエクステンション まりあ", //NAME
		"C", //RARE
		"キャラカード", //TYPE
		"3", //COST
		"0", //COSTDOWN
		"2000", //POWER
		"E", //MISSION
		"サイバー", //FEATURE
		"まりあ", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《起》 《有効》 《自分ターン》 《EXP》 《コスト》 なし 《効果》 あなたのデッキの上から2枚このカードを 《EXP》 に持つキャラの 《EXP》 にする。このカードをトラッシュに置く。ミッションフェイズ終了時まで、あなたは 《同名》 のこの能力をプレイできない。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB02-049", //ID
		"img/cardimg/VB02-049.png", //SRC
		"バーストミサイル まりあ", //NAME
		"UC", //RARE
		"キャラカード", //TYPE
		"4", //COST
		"1", //COSTDOWN
		"2000", //POWER
		"E", //MISSION
		"サイバー", //FEATURE
		"まりあ", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《常》 《有効》 《自分ターン》 《EXP》 《効果》 このカードを 《EXP》 に持つキャラが 《まりあ》 の場合、パワーを＋1000する。<br><br>《起》 《有効》 《自分ターン1》 エリア 《コスト》 あなたの手札を1枚デッキの下に置く。 《効果》 手札かキープにある、あなたの「イノセントコマンドー まりあ」を1枚選び、このカードがあるエリアに 《リブート》 で登場させてよい。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB02-050", //ID
		"img/cardimg/VB02-050.png", //SRC
		"パーフェクトソルジャー", //NAME
		"UC", //RARE
		"ミッションカード", //TYPE
		"", //COST
		"", //COSTDOWN
		"", //POWER
		"E", //MISSION
		"サイバー", //FEATURE
		"まりあ", //ACCOUNT
		"", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《チェック》 《有効》 《自分ターン》 《条件》 ①あなたのエリアに 《EXP》 が5枚以上あるキャラが2枚以上ある時、あなたの 《サイバー》 を持つ 《まりあ》 が 《アタック成功》 する。<br><br>《クリア》 《有効》 《スリープ》 《条件》 ❶このカードがあるレーンに相手のキャラがない。❷あなたのエリアに 《EXP》 が5枚以上ある 《サイバー》 を持つキャラが2枚以上ある。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB02-051", //ID
		"img/cardimg/VB02-051.png", //SRC
		"ともだちとの出会い まりあ", //NAME
		"C", //RARE
		"キャラカード", //TYPE
		"1", //COST
		"0", //COSTDOWN
		"1000", //POWER
		"F", //MISSION
		"サイバー", //FEATURE
		"まりあ", //ACCOUNT
		"1", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《起》 《有効》 《自分ターン1》 エリア 《コスト》 《スリープ》 する。 《効果》 あなたの手札にある「アクセルアーツ 星海の旅路」を1枚選び、公開し、デッキの下に置いてよい。置いたならば、あなたのデッキの上から2枚エネルギーに置く。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB02-052", //ID
		"img/cardimg/VB02-052.png", //SRC
		"ともだち空中遊泳 まりあ", //NAME
		"R", //RARE
		"キャラカード", //TYPE
		"4", //COST
		"1", //COSTDOWN
		"1000", //POWER
		"F", //MISSION
		"サイバー", //FEATURE
		"まりあ", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《起》 《有効》 《自分ターン1》 エリア 《コスト》 なし 《効果》 あなたのデッキの上から5枚公開し、その中にある「アクセルアーツ 星海の旅路」を1枚選び、デッキの上に置いてよい。置いたならば、あなたの手札を1枚選び、トラッシュに置き、あなたのアカウントを 《リブート》 する。残りを好きな順番でデッキの下に置く。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB02-053", //ID
		"img/cardimg/VB02-053.png", //SRC
		"ともだちと一緒に！ まりあ", //NAME
		"C", //RARE
		"キャラカード", //TYPE
		"6", //COST
		"1", //COSTDOWN
		"4000", //POWER
		"F", //MISSION
		"サイバー", //FEATURE
		"まりあ", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エリア 《誘発》 《アタック成功》 《効果》 あなたのトラッシュにある「ともだち空中遊泳 まりあ」を1枚選び、手札に戻してよい。<br><br>《起》 《有効》 《自分ターン1》 エリア 《コスト》 なし 《効果》 あなたのデッキの上から1枚エネルギーに置く。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB02-054", //ID
		"img/cardimg/VB02-054.png", //SRC
		"わたしのベストフレンド", //NAME
		"UC", //RARE
		"ミッションカード", //TYPE
		"", //COST
		"", //COSTDOWN
		"", //POWER
		"F", //MISSION
		"サイバー", //FEATURE
		"まりあ", //ACCOUNT
		"", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《チェック》 《有効》 《自分ターン》 《条件》 ①あなたが「アクセルアーツ 星海の旅路」をプレイする。<br><br>《クリア》 《有効》 《スリープ》 《条件》 ❶このカードがあるレーンに相手のキャラがない。❷あなたのすべてのエリアに 《まりあ》 がある。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB02-055", //ID
		"img/cardimg/VB02-055.png", //SRC
		"イノセントコマンドー まりあ", //NAME
		"SR", //RARE
		"キャラカード", //TYPE
		"8", //COST
		"1", //COSTDOWN
		"9000", //POWER
		"☆", //MISSION
		"サイバー", //FEATURE
		"まりあ", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《常》 《有効》 エリア 《効果》 このカードの 《EXP》 が6枚以上ある場合、このカードのパワーを＋5000する。<br><br>《起》 《有効》 《自分ターン1》 エリア 《コスト》 あなたのエネルギーを1枚トラッシュに置く。 《効果》 あなたのエリアにある 《サイバー》 のキャラを1枚選び、あなたのデッキの上から3枚をそのキャラの 《EXP》 にする。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB02-056", //ID
		"img/cardimg/VB02-056.png", //SRC
		"アクセルアーツ 星海の旅路", //NAME
		"R", //RARE
		"イベントカード", //TYPE
		"10", //COST
		"", //COSTDOWN
		"", //POWER
		"☆", //MISSION
		"サイバー", //FEATURE
		"まりあ", //ACCOUNT
		"", //BAN
		"0", //SCOUT
		"", //MAINTENANCE
		"《イベント》 《効果》 あなたのデッキの上から5枚公開し、その中にあるコストの1番高い 《まりあ》 のキャラを1枚選んでよい。選んだならば、そのキャラを 《リブート》 で登場させ、残りをそのキャラの 《EXP》 にする。選ばなかったならば、公開したカードを好きな順番でデッキの下に置く。<br><br>《起》 《有効》 《自分ターン1》 トラッシュ 《コスト》 なし 《効果》 あなたのトラッシュにある 《同名》 を2枚選ぶ。2枚選んだならば、選んだカードをデッキに戻し、シャッフルする。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB02-057", //ID
		"img/cardimg/VB02-057.png", //SRC
		"リッパーダガー", //NAME
		"UC", //RARE
		"イベントカード", //TYPE
		"1", //COST
		"", //COSTDOWN
		"", //POWER
		"D", //MISSION
		"サイバー", //FEATURE
		"シェリー", //ACCOUNT
		"", //BAN
		"1", //SCOUT
		"", //MAINTENANCE
		"《イベント》 《効果》 あなたのキープを1枚選び、エネルギーに置く。このカードをキープに置く。<br><br>《自》 《有効》 キープ 《誘発》 あなたの 《シェリー》 が 《アタック成功》 する。 《効果》 このカードをエネルギーに置いてよい。置いたならば、相手は自分の手札を1枚選び、トラッシュに置く。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB02-058", //ID
		"img/cardimg/VB02-058.png", //SRC
		"ガンビットダガー シェリー", //NAME
		"C", //RARE
		"キャラカード", //TYPE
		"2", //COST
		"0", //COSTDOWN
		"3000", //POWER
		"D", //MISSION
		"サイバー", //FEATURE
		"シェリー", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エリア 《誘発》 《登場時》 《効果》 あなたのキープが1枚もない場合、あなたのトラッシュにある「リッパーダガー」を1枚選び、キープに置いてよい。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB02-059", //ID
		"img/cardimg/VB02-059.png", //SRC
		"スキュアダガー シェリー", //NAME
		"C", //RARE
		"キャラカード", //TYPE
		"3", //COST
		"0", //COSTDOWN
		"5000", //POWER
		"D", //MISSION
		"サイバー", //FEATURE
		"シェリー", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エリア 《誘発》 《アタック成功》 《効果》 あなたのキープに「リッパーダガー」がある場合、あなたのエネルギーを1枚選び、トラッシュに置いてよい。置いたならば、相手は自分の手札を1枚選び、トラッシュに置く。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB02-060", //ID
		"img/cardimg/VB02-060.png", //SRC
		"フォースフルチューニング", //NAME
		"UC", //RARE
		"ミッションカード", //TYPE
		"", //COST
		"", //COSTDOWN
		"", //POWER
		"D", //MISSION
		"サイバー", //FEATURE
		"シェリー", //ACCOUNT
		"", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《チェック》 《有効》 《自分ターン》 《条件》 ①このターンに、このカードがあるレーンであなたの 《サイバー》 を持つ 《シェリー》 が2回 《アタック成功》 する。<br><br>《クリア》 《有効》 《スリープ》 《条件》 ❶このカードがあるレーンに相手のキャラがない。❷お互いの手札の枚数が同じである。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB02-061", //ID
		"img/cardimg/VB02-061.png", //SRC
		"バインドコード シェリー", //NAME
		"C", //RARE
		"キャラカード", //TYPE
		"0", //COST
		"0", //COSTDOWN
		"500", //POWER
		"E", //MISSION
		"サイバー", //FEATURE
		"シェリー", //ACCOUNT
		"1", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エリア 《誘発》 このカードがエリアから 《シェリー》 の 《EXP》 になる。 《効果》 あなたのデッキの上から4枚トラッシュに置く。 《シェリー》 を3枚以上置いた場合、相手のエリアにあるコスト1以下のキャラを1枚選び、退場させてよい。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB02-062", //ID
		"img/cardimg/VB02-062.png", //SRC
		"ディフェンスコード シェリー", //NAME
		"C", //RARE
		"キャラカード", //TYPE
		"3", //COST
		"0", //COSTDOWN
		"4000", //POWER
		"E", //MISSION
		"サイバー", //FEATURE
		"シェリー", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エリア 《誘発》 《アタック成功》 《効果》 あなたのデッキの上から4枚トラッシュに置く。 《シェリー》 を3枚以上置いた場合、このカードをトラッシュに置き、あなたのトラッシュにある 《同名》 以外のコスト4以下の 《サイバー》 を持つ 《シェリー》 を1枚選び、このカードがあったエリアに、 《リブート》 で登場させてよい。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB02-063", //ID
		"img/cardimg/VB02-063.png", //SRC
		"マルチプルコード シェリー", //NAME
		"UC", //RARE
		"キャラカード", //TYPE
		"4", //COST
		"1", //COSTDOWN
		"4000", //POWER
		"E", //MISSION
		"サイバー", //FEATURE
		"シェリー", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エリア 《誘発》 《アタック成功》 《効果》 あなたのデッキの上から4枚トラッシュに置く。 《シェリー》 を3枚以上置いた場合、手札かキープにある、あなたの「スタンピードブリンガー シェリー」を1枚選び、このカードがあるエリアに 《リブート》 で登場させてよい。<br><br>《自》 《有効》 《EXP》 《誘発》 このカードがエリアから「スタンピードブリンガー シェリー」の 《EXP》 になる。 《効果》 あなたのキープを1枚選び、エネルギーに置く。あなたのエネルギーを1枚選び、キープに置く。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB03-001", //ID
		"img/cardimg/VB03-001.png", //SRC
		"これなんの珠？ キョウカ", //NAME
		"C", //RARE
		"キャラカード", //TYPE
		"0", //COST
		"0", //COSTDOWN
		"500", //POWER
		"A", //MISSION
		"ファンタジー", //FEATURE
		"キョウカ", //ACCOUNT
		"1", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エリア 《誘発》 《登場時》 《効果》 あなたのリムーブに 《魔法》 を持つ 《キョウカ》 がある場合、あなたのエリアにあるキャラを1枚選び、ミッションフェイズ終了時まで、パワーを＋2000する。<br><br>《自》 《有効》 《EXP》 《誘発》 このカードがエリアからキャラの 《EXP》 になる。 《効果》 あなたのトラッシュを1枚選び、除外してよい。除外したならば、1枚引き、あなたの手札を1枚選び、トラッシュに置く。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB03-002", //ID
		"img/cardimg/VB03-002.png", //SRC
		"集中！集中！ キョウカ", //NAME
		"C", //RARE
		"キャラカード", //TYPE
		"4", //COST
		"1", //COSTDOWN
		"4000", //POWER
		"A", //MISSION
		"ファンタジー", //FEATURE
		"キョウカ", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エリア 《誘発》 《アタック成功》 《効果》 2枚引き、あなたの手札を2枚選び、トラッシュに置く。<br><br>《自》 《有効》 エリア 《誘発》 このカードが退場する。 《効果》 あなたのトラッシュを2枚選び、除外してよい。2枚除外したならば、あなたの手札にあるコスト3以下のキャラを1枚選び、 《スリープ》 で登場させてよい。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB03-003", //ID
		"img/cardimg/VB03-003.png", //SRC
		"スフィアマスター キョウカ", //NAME
		"UC", //RARE
		"キャラカード", //TYPE
		"6", //COST
		"1", //COSTDOWN
		"9000", //POWER
		"A", //MISSION
		"ファンタジー", //FEATURE
		"キョウカ", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エリア 《誘発》 《LvUP》 《効果》 あなたのトラッシュを5枚選び、除外してよい。5枚除外したならば、ミッションフェイズ終了時まで、このカードのパワーを＋3000する。<br><br>《自》 《有効》 エリア 《誘発》 あなたが「赫灼爆炎蹴球」をプレイする。 《効果》 あなたのエリアにあるキャラを1枚選び、ミッションフェイズ終了時まで、パワーを＋3000する。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB03-004", //ID
		"img/cardimg/VB03-004.png", //SRC
		"アタシ、魔法デビュー！", //NAME
		"UC", //RARE
		"ミッションカード", //TYPE
		"", //COST
		"", //COSTDOWN
		"", //POWER
		"A", //MISSION
		"ファンタジー", //FEATURE
		"キョウカ", //ACCOUNT
		"", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《チェック》 《有効》 《自分ターン》 《条件》 ①あなたのエリアでカード名に「マスター」を含む 《キョウカ》 が 《アタック成功》 した時、 《魔法》 を持つ 《キョウカ》 をプレイする。<br><br>《クリア》 《有効》 《スリープ》 《条件》 ❶相手のすべてのエリアにキャラが1枚もない。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB03-005", //ID
		"img/cardimg/VB03-005.png", //SRC
		"青空の乱入者 キョウカ", //NAME
		"C", //RARE
		"キャラカード", //TYPE
		"1", //COST
		"0", //COSTDOWN
		"500", //POWER
		"B", //MISSION
		"ファンタジー", //FEATURE
		"キョウカ", //ACCOUNT
		"1", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エリア 《誘発》 《登場時》 《効果》 ミッションフェイズ終了時まで、このカードのパワーを＋4000する。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB03-006", //ID
		"img/cardimg/VB03-006.png", //SRC
		"ランサースキル キョウカ", //NAME
		"C", //RARE
		"キャラカード", //TYPE
		"3", //COST
		"0", //COSTDOWN
		"4000", //POWER
		"B", //MISSION
		"ファンタジー", //FEATURE
		"キョウカ", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《常》 《有効》 手札 《効果》 あなたのエリアにパワーが元々の数値よりも増えている 《キョウカ》 がある場合、このカードのコストを－1する。<br><br>《自》 《有効》 エリア 《誘発》 《LvUP》 《効果》 1枚引き、ミッションフェイズ終了時まで、このカードのパワーを＋2000する。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB03-007", //ID
		"img/cardimg/VB03-007.png", //SRC
		"マスターランサー キョウカ", //NAME
		"UC", //RARE
		"キャラカード", //TYPE
		"7", //COST
		"1", //COSTDOWN
		"10000", //POWER
		"B", //MISSION
		"ファンタジー", //FEATURE
		"キョウカ", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《常》 《有効》 手札 《効果》 あなたのエリアにパワーが元々の数値よりも増えている 《キョウカ》 がある場合、このカードのコストを－1する。<br><br>《自》 《有効》 エリア 《誘発》 このカードがアタックする。 《効果》 あなたのトラッシュを1枚選び、除外してよい。除外したならば、ミッションフェイズ終了時まで、そのカードのパワー分、このカードのパワーを増やす。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB03-008", //ID
		"img/cardimg/VB03-008.png", //SRC
		"闘技場ハイスコア達成！", //NAME
		"UC", //RARE
		"ミッションカード", //TYPE
		"", //COST
		"", //COSTDOWN
		"", //POWER
		"B", //MISSION
		"ファンタジー", //FEATURE
		"キョウカ", //ACCOUNT
		"", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《チェック》 《有効》 《自分ターン》 《条件》 ①あなたのエリアでパワーが20000以上の「マスターランサー キョウカ」が 《アタック成功》 する。<br><br>《クリア》 《有効》 《スリープ》 《条件》 ❶このカードがあるレーンに相手のキャラがない。❷あなたのエリアにパワーが元々の数値よりも増えているキャラが2枚以上ある。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB03-009", //ID
		"img/cardimg/VB03-009.png", //SRC
		"願いの結晶 キョウカ", //NAME
		"SR", //RARE
		"キャラカード", //TYPE
		"3", //COST
		"0", //COSTDOWN
		"5000", //POWER
		"☆", //MISSION
		"ファンタジー", //FEATURE
		"キョウカ", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エリア 《誘発》 《アタック成功》 《効果》 ミッションフェイズ終了時まで、現在あなたのすべてのエリアにあるキャラのパワーを＋2000する。<br><br>《起》 《有効》 《自分ターン1》 エリア 《コスト》 あなたの手札を2枚トラッシュに置く。 《効果》 あなたのデッキの上から7枚公開する。その中にあるカード名に「マスター」を含む 《キョウカ》 のキャラを1枚選び、このカードがあるエリアに 《リブート》 で登場させてよい。残りを好きな順番でデッキの下に置く。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB03-010", //ID
		"img/cardimg/VB03-010.png", //SRC
		"赫灼爆炎蹴球", //NAME
		"R", //RARE
		"イベントカード", //TYPE
		"5", //COST
		"", //COSTDOWN
		"", //POWER
		"☆", //MISSION
		"ファンタジー/魔法", //FEATURE
		"キョウカ", //ACCOUNT
		"", //BAN
		"1", //SCOUT
		"", //MAINTENANCE
		"《イベント》 《効果》 相手のエリアにあるキャラを1枚選び、あなたのリムーブ1枚につき、1000ダメージを与える。あなたのリムーブにあるキャラを5枚選び、トラッシュに置く。<br><br>《自》 詠唱：カード名に「マスター」を含む 《キョウカ》<br>（ 《有効》 リムーブ 《誘発》 あなたのカード名に「マスター」を含む 《キョウカ》 が 《アタック成功》 する。 《効果》 このカードをコストを支払わずにプレイしてよい。）", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB03-011", //ID
		"img/cardimg/VB03-011.png", //SRC
		"魔導書勉強中 玲", //NAME
		"C", //RARE
		"キャラカード", //TYPE
		"1", //COST
		"0", //COSTDOWN
		"1000", //POWER
		"A", //MISSION
		"ファンタジー", //FEATURE
		"玲", //ACCOUNT
		"1", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エリア 《誘発》 《登場時》 《効果》 あなたのリムーブに 《魔法》 を持つ 《玲》 がある場合、相手のエリアにあるキャラを0～2枚選び、1000ダメージを与える。<br><br>《自》 《有効》 《EXP》 《誘発》 このカードがエリアからキャラの 《EXP》 になる。 《効果》 あなたのトラッシュを1枚選び、除外してよい。除外したならば、あなたのデッキの上から1枚見て、そのカードをデッキの上か下に置く。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB03-012", //ID
		"img/cardimg/VB03-012.png", //SRC
		"可憐なる氷華 玲", //NAME
		"C", //RARE
		"キャラカード", //TYPE
		"3", //COST
		"0", //COSTDOWN
		"4000", //POWER
		"A", //MISSION
		"ファンタジー", //FEATURE
		"玲", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エリア 《誘発》 《アタック成功》 《効果》 あなたのトラッシュを2枚選び、除外してよい。2枚除外したならば、2枚引き、あなたの手札を1枚選び、トラッシュに置く。<br><br>《自》 《有効》 エリア 《誘発》 バトルをせず 《アタック成功》 《効果》 あなたのデッキの上から1枚見て、そのカードをデッキの上か下に置く。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB03-013", //ID
		"img/cardimg/VB03-013.png", //SRC
		"スペルマスター 玲", //NAME
		"UC", //RARE
		"キャラカード", //TYPE
		"7", //COST
		"1", //COSTDOWN
		"10000", //POWER
		"A", //MISSION
		"ファンタジー", //FEATURE
		"玲", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エリア 《誘発》 《LvUP》 《効果》 あなたのトラッシュを5枚選び、除外してよい。5枚除外したならば、相手のエリアにあるキャラを1枚選び、4000ダメージを与える。<br><br>《自》 《有効》 《自分ターン》 エリア 《誘発》 あなたが「雪華・蒼破氷連撃」をプレイする。 《効果》 相手のエリアにあるキャラを1枚選び、2000ダメージを与える。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB03-014", //ID
		"img/cardimg/VB03-014.png", //SRC
		"氷結の魔導士", //NAME
		"UC", //RARE
		"ミッションカード", //TYPE
		"", //COST
		"", //COSTDOWN
		"", //POWER
		"A", //MISSION
		"ファンタジー", //FEATURE
		"玲", //ACCOUNT
		"", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《チェック》 《有効》 《自分ターン》 《条件》 ①あなたのエリアでカード名に「マスター」を含む 《玲》 が 《アタック成功》 した時、 《魔法》 を持つ 《玲》 をプレイする。<br><br>《クリア》 《有効》 《スリープ》 《条件》 ❶相手のすべてのエリアにキャラが1枚もない。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB03-015", //ID
		"img/cardimg/VB03-015.png", //SRC
		"夜空の乱入者 玲", //NAME
		"C", //RARE
		"キャラカード", //TYPE
		"0", //COST
		"0", //COSTDOWN
		"500", //POWER
		"B", //MISSION
		"ファンタジー", //FEATURE
		"玲", //ACCOUNT
		"1", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《起》 《有効》 《自分ターン》 手札 《コスト》 このカードを公開する。 《効果》 このカードをあなたのデッキの下に置き、1枚引く。ミッションフェイズ終了時まで、あなたは 《同名》 のこの能力をプレイできない。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB03-016", //ID
		"img/cardimg/VB03-016.png", //SRC
		"スラッシュエッジ 玲", //NAME
		"C", //RARE
		"キャラカード", //TYPE
		"2", //COST
		"0", //COSTDOWN
		"3000", //POWER
		"B", //MISSION
		"ファンタジー", //FEATURE
		"玲", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エネルギー 《誘発》 このカードが 《スカウト》 によってエネルギーに置かれる。 《効果》 このカードをトラッシュに置いてよい。置いたならば、1枚引く。<br><br>《起》 《有効》 《自分ターン》 手札 《コスト》 このカードを公開する。 《効果》 このカードをあなたのデッキの上に置く。ミッションフェイズ終了時まで、あなたは 《同名》 のこの能力をプレイできない。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB03-017", //ID
		"img/cardimg/VB03-017.png", //SRC
		"マスターウォーリアー 玲", //NAME
		"UC", //RARE
		"キャラカード", //TYPE
		"6", //COST
		"1", //COSTDOWN
		"9000", //POWER
		"B", //MISSION
		"ファンタジー", //FEATURE
		"玲", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エリア 《誘発》 《登場時》 《効果》 あなたのエネルギーを1枚選び、トラッシュに置いてよい。置いたならば、1枚引く。<br><br>《自》 《有効》 エリア 《誘発》 《アタック成功》 《効果》 あなたの手札にあるコスト5以下の 《ファンタジー》 を持つカードを1枚選び、公開してよい。公開したならば、1枚引き、公開したカードをデッキの上に置く。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB03-018", //ID
		"img/cardimg/VB03-018.png", //SRC
		"瞬閃の剣闘士", //NAME
		"UC", //RARE
		"ミッションカード", //TYPE
		"", //COST
		"", //COSTDOWN
		"", //POWER
		"B", //MISSION
		"ファンタジー", //FEATURE
		"玲", //ACCOUNT
		"", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《チェック》 《有効》 《自分ターン》 《条件》 ①このカードがあるレーンで「マスターウォーリアー 玲」が 《アタック成功》 する。<br><br>《クリア》 《有効》 《スリープ》 《条件》 ❶このカードがあるレーンに相手のキャラがない。❷このターンに、あなたの 《玲》 の能力で4枚以上引いている。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB03-019", //ID
		"img/cardimg/VB03-019.png", //SRC
		"願いの結晶 玲", //NAME
		"SR", //RARE
		"キャラカード", //TYPE
		"3", //COST
		"0", //COSTDOWN
		"5000", //POWER
		"☆", //MISSION
		"ファンタジー", //FEATURE
		"玲", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エリア 《誘発》 このカードがデッキから登場する。 《効果》 相手のすべてのエリアにあるキャラに2000ダメージを与える。<br><br>《起》 《有効》 《自分ターン1》 エリア 《コスト》 あなたの手札を2枚トラッシュに置く。 《効果》 あなたのデッキの上から7枚公開する。その中にあるカード名に「マスター」を含む 《玲》 のキャラを1枚選び、このカードがあるエリアに 《リブート》 で登場させてよい。残りを好きな順番でデッキの下に置く。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB03-020", //ID
		"img/cardimg/VB03-020.png", //SRC
		"雪華・蒼破氷連撃", //NAME
		"R", //RARE
		"イベントカード", //TYPE
		"5", //COST
		"", //COSTDOWN
		"", //POWER
		"☆", //MISSION
		"ファンタジー/魔法", //FEATURE
		"玲", //ACCOUNT
		"", //BAN
		"1", //SCOUT
		"", //MAINTENANCE
		"《イベント》 《効果》 あなたの手札を1枚選び、トラッシュに置き、あなたのデッキの上から1枚公開する。そのカードがコスト5以下の場合、コストを支払わずにプレイしてよい。プレイしなかったならば、元に戻し、1枚引く。<br><br>《自》 詠唱：カード名に「マスター」を含む 《玲》<br>（ 《有効》 リムーブ 《誘発》 あなたのカード名に「マスター」を含む 《玲》 が 《アタック成功》 する。 《効果》 このカードをコストを支払わずにプレイしてよい。）", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB03-021", //ID
		"img/cardimg/VB03-021.png", //SRC
		"星空の使者 らぶり", //NAME
		"C", //RARE
		"キャラカード", //TYPE
		"1", //COST
		"0", //COSTDOWN
		"1000", //POWER
		"A", //MISSION
		"ファンタジー", //FEATURE
		"らぶり", //ACCOUNT
		"1", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 センター 《誘発》 《登場時》 《効果》 あなたのトラッシュを2枚選び、除外してよい。2枚除外したならば、以下の効果から1つ選び、解決する。▶あなたのデッキの上から5枚公開し、その中から「チャーミング☆マギア」を1枚選び、手札に加えてよい。残りを元に戻し、シャッフルする。▶あなたのトラッシュにある「チャーミング☆マギア」を1枚選び、手札に戻してよい。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB03-022", //ID
		"img/cardimg/VB03-022.png", //SRC
		"チャーミング☆マギア", //NAME
		"C", //RARE
		"イベントカード", //TYPE
		"1", //COST
		"", //COSTDOWN
		"", //POWER
		"A", //MISSION
		"ファンタジー", //FEATURE
		"らぶり", //ACCOUNT
		"", //BAN
		"1", //SCOUT
		"", //MAINTENANCE
		"《イベント》 《効果》 あなたのデッキの上から5枚公開し、その中にあるコスト1以下の 《らぶり》 のキャラを1枚選び、 《リブート》 で登場させてよい。残りを好きな順番でデッキの下に置く。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB03-023", //ID
		"img/cardimg/VB03-023.png", //SRC
		"チャームマスター らぶり", //NAME
		"UC", //RARE
		"キャラカード", //TYPE
		"5", //COST
		"1", //COSTDOWN
		"7000", //POWER
		"A", //MISSION
		"ファンタジー", //FEATURE
		"らぶり", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エリア 《誘発》 《LvUP》 《効果》 あなたのトラッシュを5枚選び、除外してよい。5枚除外したならば、ミッションフェイズ終了時まで、あなたのリムーブにある 《らぶり》 のイベント3枚につき、現在あなたのすべてのエリアにあるキャラのパワーを＋1000する。<br><br>《自》 《有効》 センター 《誘発》 あなたが 《ファンタジー》 を持つ 《らぶり》 のイベントをプレイする。 《効果》 あなたのリムーブにある 《らぶり》 を1枚選びデッキに戻し、シャッフルしてよい。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB03-024", //ID
		"img/cardimg/VB03-024.png", //SRC
		"#☽と♥の魔法少女", //NAME
		"UC", //RARE
		"ミッションカード", //TYPE
		"", //COST
		"", //COSTDOWN
		"", //POWER
		"A", //MISSION
		"ファンタジー", //FEATURE
		"らぶり", //ACCOUNT
		"", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《チェック》 《有効》 《自分ターン》 《条件》 ①あなたのエリアでカード名に「マスター」を含む 《らぶり》 が 《アタック成功》 した時、 《魔法》 を持つ 《らぶり》 をプレイする。<br><br>《クリア》 《有効》 《スリープ》 《条件》 ❶このカードがあるレーンに相手のキャラがない。❷あなたのセンターに 《スリープ》 のカード名に「マスター」を含む 《らぶり》 がある。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB03-025", //ID
		"img/cardimg/VB03-025.png", //SRC
		"ウィンディーガール らぶり", //NAME
		"C", //RARE
		"キャラカード", //TYPE
		"0", //COST
		"0", //COSTDOWN
		"500", //POWER
		"B", //MISSION
		"ファンタジー", //FEATURE
		"らぶり", //ACCOUNT
		"1", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エリア 《誘発》 《登場時》 《効果》 以下の効果を2回解決する。“エリアにあるキャラを1枚選び、スライドさせてよい。”", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB03-026", //ID
		"img/cardimg/VB03-026.png", //SRC
		"メイド イン らぶり♪", //NAME
		"C", //RARE
		"イベントカード", //TYPE
		"0", //COST
		"", //COSTDOWN
		"", //POWER
		"B", //MISSION
		"ファンタジー", //FEATURE
		"らぶり", //ACCOUNT
		"", //BAN
		"1", //SCOUT
		"", //MAINTENANCE
		"《イベント》 《効果》 《リロード》<br>（あなたのトラッシュにあるすべてのキャラをデッキに戻し、シャッフルする。）<br><br>《自》 《有効》 トラッシュ 《誘発》 あなたのセンターに「マスターシュヴァリエ らぶり」が登場する。 《効果》 このカードを手札に戻してよい。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB03-027", //ID
		"img/cardimg/VB03-027.png", //SRC
		"マスターシュヴァリエ らぶり", //NAME
		"UC", //RARE
		"キャラカード", //TYPE
		"6", //COST
		"1", //COSTDOWN
		"5000", //POWER
		"B", //MISSION
		"ファンタジー", //FEATURE
		"らぶり", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《起》 《有効》 《自分ターン1》 センター 《コスト》 なし 《効果》 あなたの手札にあるイベントを好きな枚数選び、トラッシュに置く。置いたイベント1枚につき、以下の効果を解決する。“相手のエリアにあるキャラを1枚選び、ミッションフェイズ終了時まで、パワーを－1000する。”", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB03-028", //ID
		"img/cardimg/VB03-028.png", //SRC
		"#アリーナの女神♥", //NAME
		"UC", //RARE
		"ミッションカード", //TYPE
		"", //COST
		"", //COSTDOWN
		"", //POWER
		"B", //MISSION
		"ファンタジー", //FEATURE
		"らぶり", //ACCOUNT
		"", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《チェック》 《有効》 《自分ターン》 《条件》 ①トラッシュとリムーブに、あなたの 《らぶり》 のイベントが合計8枚以上ある時、このカードがあるレーンで、あなたの「マスターシュヴァリエ らぶり」が 《アタック成功》 する。<br><br>《クリア》 《有効》 《スリープ》 《条件》 ❶このカードがあるレーンに相手のキャラがない。❷あなたのすべてのエリアにキャラがある。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB03-029", //ID
		"img/cardimg/VB03-029.png", //SRC
		"願いの結晶 らぶり", //NAME
		"SR", //RARE
		"キャラカード", //TYPE
		"2", //COST
		"0", //COSTDOWN
		"3000", //POWER
		"☆", //MISSION
		"ファンタジー", //FEATURE
		"らぶり", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 センター 《誘発》 《登場時》 《効果》 あなたのトラッシュにある 《らぶり》 のイベントを1枚選び、手札に戻す。<br><br>《起》 《有効》 《自分ターン1》 センター 《コスト》 あなたの手札を2枚トラッシュに置く。 《効果》 あなたのデッキの上から7枚公開する。その中にあるカード名に「マスター」を含む 《らぶり》 のキャラを1枚選び、このカードがあるエリアに 《リブート》 で登場させてよい。残りを好きな順番でデッキの下に置く。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB03-030", //ID
		"img/cardimg/VB03-030.png", //SRC
		"メロメロキューティボルト♡", //NAME
		"R", //RARE
		"イベントカード", //TYPE
		"5", //COST
		"", //COSTDOWN
		"", //POWER
		"☆", //MISSION
		"ファンタジー/魔法", //FEATURE
		"らぶり", //ACCOUNT
		"", //BAN
		"1", //SCOUT
		"", //MAINTENANCE
		"《イベント》 《効果》 あなたのセンターにある 《らぶり》 を1枚選び、ミッションフェイズ終了時まで、パワーを＋3000する。相手のセンターにあるキャラを1枚選び、ミッションフェイズ終了時まで、パワーを－3000する。<br><br>《自》 詠唱：カード名に「マスター」を含む 《らぶり》<br>（ 《有効》 リムーブ 《誘発》 あなたのカード名に「マスター」を含む 《らぶり》 が 《アタック成功》 する。 《効果》 このカードをコストを支払わずにプレイしてよい。）", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB03-031", //ID
		"img/cardimg/VB03-031.png", //SRC
		"不思議なランプ まりあ", //NAME
		"C", //RARE
		"キャラカード", //TYPE
		"2", //COST
		"0", //COSTDOWN
		"2000", //POWER
		"A", //MISSION
		"ファンタジー", //FEATURE
		"まりあ", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《常》 《有効》 エリア 《効果》 あなたのリムーブに 《魔法》 を持つ 《まりあ》 がある場合、このカードのパワーを＋2000する。<br><br>《起》 《有効》 《自分ターン1》 エリア 《コスト》 あなたのデッキの上から5枚除外する。 《効果》 あなたのリムーブにあるキャラを1枚選びデッキに戻し、シャッフルする。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB03-032", //ID
		"img/cardimg/VB03-032.png", //SRC
		"大自然の息吹 まりあ", //NAME
		"C", //RARE
		"キャラカード", //TYPE
		"3", //COST
		"0", //COSTDOWN
		"4000", //POWER
		"A", //MISSION
		"ファンタジー", //FEATURE
		"まりあ", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《常》 《有効》 エリア 《効果》 あなたのリムーブに 《魔法》 を持つ 《まりあ》 がある場合、このカードのパワーを＋2000する。<br><br>《起》 《有効》 《自分ターン1》 エリア 《コスト》 あなたのデッキの上から5枚除外する。 《効果》 あなたの手札を1枚選び、デッキの下に置いてよい。置いたならば、あなたのリムーブにある 《まりあ》 を2枚選び、このカードの 《EXP》 にする。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB03-033", //ID
		"img/cardimg/VB03-033.png", //SRC
		"サモンマスター まりあ", //NAME
		"UC", //RARE
		"キャラカード", //TYPE
		"6", //COST
		"1", //COSTDOWN
		"7000", //POWER
		"A", //MISSION
		"ファンタジー", //FEATURE
		"まりあ", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エリア 《誘発》 あなたが「ガーディアン・オブ・メイド」をプレイする。 《効果》 あなたのトラッシュを1枚選び、このカードの 《EXP》 にしてよい。<br><br>《起》 《有効》 《ターン2》 エリア 《コスト》 あなたのトラッシュを3枚除外する。 《効果》 あなたのリムーブにあるキャラを0～3枚選びデッキに戻し、シャッフルする。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB03-034", //ID
		"img/cardimg/VB03-034.png", //SRC
		"ハイタッチ・フレンズ", //NAME
		"UC", //RARE
		"ミッションカード", //TYPE
		"", //COST
		"", //COSTDOWN
		"", //POWER
		"A", //MISSION
		"ファンタジー", //FEATURE
		"まりあ", //ACCOUNT
		"", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《チェック》 《有効》 《自分ターン》 《条件》 ①あなたのエリアでカード名に「マスター」を含む 《まりあ》 が 《アタック成功》 した時、 《魔法》 を持つ 《まりあ》 をプレイする。<br><br>《クリア》 《有効》 《スリープ》 《条件》 ❶このカードがあるレーンに相手のキャラがない。❷相手のエリアにあるキャラの枚数より、あなたのエリアにあるキャラの枚数が多い。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB03-035", //ID
		"img/cardimg/VB03-035.png", //SRC
		"勇者の試練 まりあ", //NAME
		"C", //RARE
		"キャラカード", //TYPE
		"1", //COST
		"0", //COSTDOWN
		"1000", //POWER
		"B", //MISSION
		"ファンタジー", //FEATURE
		"まりあ", //ACCOUNT
		"1", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エリア 《誘発》 このカードが退場する。 《効果》 あなたのリムーブにある 《同名》 以外のコスト5以下の 《ファンタジー》 を持つ 《まりあ》 のキャラを1枚選び、コストを支払いこのカードがあったエリアにプレイしてよい。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB03-036", //ID
		"img/cardimg/VB03-036.png", //SRC
		"剣の勇者 まりあ", //NAME
		"C", //RARE
		"キャラカード", //TYPE
		"4", //COST
		"1", //COSTDOWN
		"2000", //POWER
		"B", //MISSION
		"ファンタジー", //FEATURE
		"まりあ", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《常》 《有効》 《自分ターン》 《EXP》 《効果》 このカードを 《EXP》 に持つキャラが 《まりあ》 の場合、パワーを＋1000する。<br><br>《起》 《有効》 《自分ターン1》 エリア 《コスト》 あなたの手札にある 《まりあ》 を1枚このカードの 《EXP》 にする。 《効果》 2枚引く。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB03-037", //ID
		"img/cardimg/VB03-037.png", //SRC
		"マスターブレイバー まりあ", //NAME
		"UC", //RARE
		"キャラカード", //TYPE
		"8", //COST
		"1", //COSTDOWN
		"11000", //POWER
		"B", //MISSION
		"ファンタジー", //FEATURE
		"まりあ", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エリア 《誘発》 このカードが退場する。 《効果》 あなたのリムーブにあるコスト5以下の 《まりあ》 のキャラを1枚選び、あなたのキャラがないエリアに 《リブート》 で登場させてよい。<br><br>《起》 《有効》 《自分ターン1》 エリア 《コスト》 あなたのエリアにある 《ファンタジー》 を持つ 《まりあ》 を1枚このカードの 《EXP》 にする。 《効果》 相手のエリアにあるキャラを1枚選び、3000ダメージを与える。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB03-038", //ID
		"img/cardimg/VB03-038.png", //SRC
		"テイル・オブ・リトルブレイバー", //NAME
		"UC", //RARE
		"ミッションカード", //TYPE
		"", //COST
		"", //COSTDOWN
		"", //POWER
		"B", //MISSION
		"ファンタジー", //FEATURE
		"まりあ", //ACCOUNT
		"", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《チェック》 《有効》 《自分ターン》 《条件》 ①あなたのエリアでパワーが＋2000以上されている「マスターブレイバー まりあ」で 《アタック成功》 する。<br><br>《クリア》 《有効》 《スリープ》 《条件》 ❶このカードがあるレーンに相手のキャラがない。❷あなたのエリアにパワー13000以上の 《まりあ》 がある。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB03-039", //ID
		"img/cardimg/VB03-039.png", //SRC
		"ガーディアン・オブ・メイド", //NAME
		"R", //RARE
		"イベントカード", //TYPE
		"5", //COST
		"", //COSTDOWN
		"", //POWER
		"☆", //MISSION
		"ファンタジー/魔法", //FEATURE
		"まりあ", //ACCOUNT
		"", //BAN
		"1", //SCOUT
		"", //MAINTENANCE
		"《イベント》 《効果》 あなたのエリアにある 《まりあ》 を1枚選び、以下の効果から1つ選び、解決する。▶あなたのデッキの上から2枚そのキャラの 《EXP》 にする。▶ミッションフェイズ終了時まで、そのキャラの 《EXP》 1枚につき、パワーを＋1000する。<br><br>《自》 詠唱：カード名に「マスター」を含む 《まりあ》<br>（ 《有効》 リムーブ 《誘発》 あなたのカード名に「マスター」を含む 《まりあ》 が 《アタック成功》 する。 《効果》 このカードをコストを支払わずにプレイしてよい。）", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB03-040", //ID
		"img/cardimg/VB03-040.png", //SRC
		"願いの結晶 まりあ", //NAME
		"SR", //RARE
		"キャラカード", //TYPE
		"5", //COST
		"1", //COSTDOWN
		"4000", //POWER
		"☆", //MISSION
		"ファンタジー", //FEATURE
		"まりあ", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《常》 《有効》 《自分ターン》 《EXP》 《効果》 このカードを 《EXP》 に持つキャラが 《まりあ》 の場合、パワーを＋1000する。<br><br>《起》 《有効》 《自分ターン1》 エリア 《コスト》 あなたの手札を2枚トラッシュに置く。 《効果》 あなたのデッキの上から7枚公開する。その中にあるカード名に「マスター」を含む 《まりあ》 のキャラを1枚選び、このカードがあるエリアに 《リブート》 で登場させてよい。残りを好きな順番でデッキの下に置く。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB03-041", //ID
		"img/cardimg/VB03-041.png", //SRC
		"ソーサラーロッド シェリー", //NAME
		"C", //RARE
		"キャラカード", //TYPE
		"0", //COST
		"0", //COSTDOWN
		"500", //POWER
		"A", //MISSION
		"ファンタジー", //FEATURE
		"シェリー", //ACCOUNT
		"1", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 《EXP》 《誘発》 このカードがエリアからキャラの 《EXP》 になる。 《効果》 あなたのトラッシュを3枚選び、除外してよい。3枚除外したならば、キープを1枚選び、エネルギーに置いてよい。<br><br>《起》 《有効》 《自分ターン》 トラッシュ 《コスト》 あなたの手札を1枚トラッシュに置く。 《効果》 あなたのキープが1枚もない場合、このカードをキープに置く。ミッションフェイズ終了時まで、あなたは 《同名》 のこの能力をプレイできない。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB03-042", //ID
		"img/cardimg/VB03-042.png", //SRC
		"スペルウィークネス シェリー", //NAME
		"C", //RARE
		"キャラカード", //TYPE
		"3", //COST
		"0", //COSTDOWN
		"1000", //POWER
		"A", //MISSION
		"ファンタジー", //FEATURE
		"シェリー", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エリア 《誘発》 《アタック成功》 《効果》 あなたのリムーブに 《魔法》 を持つ 《シェリー》 がある場合、相手のエリアにあるキャラを1枚選び、ミッションフェイズ終了時まで、パワーを－1000する。<br><br>《起》 《有効》 《自分ターン1》 エリア 《コスト》 あなたのトラッシュを2枚除外する。 《効果》 相手のエリアにあるキャラを1枚選び、ミッションフェイズ終了時まで、コストを－2する。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB03-043", //ID
		"img/cardimg/VB03-043.png", //SRC
		"ロッドマスター シェリー", //NAME
		"UC", //RARE
		"キャラカード", //TYPE
		"5", //COST
		"1", //COSTDOWN
		"7000", //POWER
		"A", //MISSION
		"ファンタジー", //FEATURE
		"シェリー", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エリア 《誘発》 あなたが「ヘルズ・クラッシュ」をプレイする。 《効果》 キープを1枚選び、手札に戻すかトラッシュに置いてよい。<br><br>《自》 《有効》 エリア 《誘発》 このカードがアタックする。 《効果》 あなたのトラッシュを5枚選び、除外してよい。5枚除外したならば、ミッションフェイズ終了時まで、現在相手のすべてのエリアにあるキャラのコストを－5する。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB03-044", //ID
		"img/cardimg/VB03-044.png", //SRC
		"プログレッシブソーサラー", //NAME
		"UC", //RARE
		"ミッションカード", //TYPE
		"", //COST
		"", //COSTDOWN
		"", //POWER
		"A", //MISSION
		"ファンタジー", //FEATURE
		"シェリー", //ACCOUNT
		"", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《チェック》 《有効》 《自分ターン》 《条件》 ①あなたのエリアでカード名に「マスター」を含む 《シェリー》 が 《アタック成功》 した時、 《魔法》 を持つ 《シェリー》 をプレイする。<br><br>《クリア》 《有効》 《スリープ》 《条件》 ❶相手のすべてのエリアにキャラが1枚もない。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB03-045", //ID
		"img/cardimg/VB03-045.png", //SRC
		"ハンマーソング シェリー", //NAME
		"C", //RARE
		"キャラカード", //TYPE
		"1", //COST
		"0", //COSTDOWN
		"1000", //POWER
		"B", //MISSION
		"ファンタジー", //FEATURE
		"シェリー", //ACCOUNT
		"1", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エリア 《誘発》 《登場時》 《効果》 あなたのキープが1枚もない場合、このカードの 《EXP》 をすべてトラッシュに置き、このカードをキープに置く。<br><br>《起》 《有効》 《自分ターン》 キープ 《コスト》 このカードをデッキの下に置く。 《効果》 あなたのトラッシュにある 《ファンタジー》 を持つキャラを1枚選び、キープに置く。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB03-046", //ID
		"img/cardimg/VB03-046.png", //SRC
		"ブレイクアラウンド シェリー", //NAME
		"C", //RARE
		"キャラカード", //TYPE
		"2", //COST
		"0", //COSTDOWN
		"4000", //POWER
		"B", //MISSION
		"ファンタジー", //FEATURE
		"シェリー", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エリア 《誘発》 《登場時》 《効果》 あなたのキープが1枚もない場合、このカードの 《EXP》 をすべてトラッシュに置き、このカードをキープに置く。<br><br>《起》 《有効》 キープ 《コスト》 このカードをデッキの下に置く。 《効果》 あなたの手札にあるコスト1以下の 《ファンタジー》 を持つキャラを1枚選び、 《リブート》 で登場させてよい。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB03-047", //ID
		"img/cardimg/VB03-047.png", //SRC
		"マスターブレイカー シェリー", //NAME
		"UC", //RARE
		"キャラカード", //TYPE
		"4", //COST
		"1", //COSTDOWN
		"8000", //POWER
		"B", //MISSION
		"ファンタジー", //FEATURE
		"シェリー", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エリア 《誘発》 《登場時》 《効果》 あなたのキープが1枚もない場合、このカードの 《EXP》 をすべてトラッシュに置き、このカードをキープに置く。<br><br>《自》 《有効》 エリア 《誘発》 このカードがアタックする。 《効果》 あなたのエリアにあるこのカード以外のキャラを1枚選びデッキに戻し、シャッフルしてよい。戻さなかったならば、このカードをデッキに戻し、シャッフルする。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB03-048", //ID
		"img/cardimg/VB03-048.png", //SRC
		"アンビエントスマッシャー", //NAME
		"UC", //RARE
		"ミッションカード", //TYPE
		"", //COST
		"", //COSTDOWN
		"", //POWER
		"B", //MISSION
		"ファンタジー", //FEATURE
		"シェリー", //ACCOUNT
		"", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《チェック》 《有効》 《自分ターン》 《条件》 ①あなたのエリアで「マスターブレイカー シェリー」が 《アタック成功》 する。<br><br>《クリア》 《有効》 《スリープ》 《条件》 ❶このカードがあるレーンに相手のキャラがない。❷あなたのエリアにキャラが「マスターブレイカー シェリー」1枚しかない。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB03-049", //ID
		"img/cardimg/VB03-049.png", //SRC
		"願いの結晶 シェリー", //NAME
		"SR", //RARE
		"キャラカード", //TYPE
		"2", //COST
		"0", //COSTDOWN
		"3000", //POWER
		"☆", //MISSION
		"ファンタジー", //FEATURE
		"シェリー", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エリア 《誘発》 《登場時》 《効果》 あなたのキープを1枚選び、除外する。あなたのリムーブにある 《シェリー》 を1枚選び、キープに置いてよい。<br><br>《起》 《有効》 《自分ターン1》 エリア 《コスト》 あなたの手札を2枚トラッシュに置く。 《効果》 あなたのデッキの上から7枚公開する。その中にあるカード名に「マスター」を含む 《シェリー》 のキャラを1枚選び、このカードがあるエリアに 《リブート》 で登場させてよい。残りを好きな順番でデッキの下に置く。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB03-050", //ID
		"img/cardimg/VB03-050.png", //SRC
		"ヘルズ・クラッシュ", //NAME
		"R", //RARE
		"イベントカード", //TYPE
		"5", //COST
		"", //COSTDOWN
		"", //POWER
		"☆", //MISSION
		"ファンタジー/魔法", //FEATURE
		"シェリー", //ACCOUNT
		"", //BAN
		"1", //SCOUT
		"", //MAINTENANCE
		"《イベント》 《効果》 以下の効果から1つ選び、解決する。▶あなたのキープを1枚選び、手札に戻し、1枚引く。あなたの手札を1枚選び、キープに置く。▶相手のエリアにあるコスト1以下のキャラを1枚選び、退場させる。<br><br>《自》 詠唱：カード名に「マスター」を含む 《シェリー》<br>（ 《有効》 リムーブ 《誘発》 あなたのカード名に「マスター」を含む 《シェリー》 が 《アタック成功》 する。 《効果》 このカードをコストを支払わずにプレイしてよい。）", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB03-051", //ID
		"img/cardimg/VB03-051.png", //SRC
		"イタズラな微笑み ノイ", //NAME
		"C", //RARE
		"キャラカード", //TYPE
		"1", //COST
		"0", //COSTDOWN
		"1000", //POWER
		"A", //MISSION
		"ファンタジー", //FEATURE
		"ノイ", //ACCOUNT
		"1", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エリア 《誘発》 《登場時》 《効果》 あなたのトラッシュを1枚選び、除外してよい。除外したならば、相手のエリアにあるキャラを1枚選ぶ。相手はそのキャラの 《EXP》 を1枚選び、エネルギーに置く。<br><br>《自》 《有効》 《自分ターン》 《EXP》 《誘発》 このカードがエリアからキャラの 《EXP》 になる。 《効果》 あなたのエネルギーを1枚選び、トラッシュに置いてよい。置いたならば、このカードをキャラがないエリアに 《スリープ》 で登場させる。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB03-052", //ID
		"img/cardimg/VB03-052.png", //SRC
		"小生意気な魔法使い ノイ", //NAME
		"C", //RARE
		"キャラカード", //TYPE
		"3", //COST
		"0", //COSTDOWN
		"4000", //POWER
		"A", //MISSION
		"ファンタジー", //FEATURE
		"ノイ", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エリア 《誘発》 《登場時》 《効果》 あなたのトラッシュを1枚選び、除外してよい。除外したならば、相手のエリアにある 《EXP》 がないキャラを1枚選び、2000ダメージを与える。<br><br>《自》 《有効》 《自分ターン》 《EXP》 《誘発》 このカードがエリアからキャラの 《EXP》 になる。 《効果》 あなたのエネルギーを1枚選び、トラッシュに置いてよい。置いたならば、このカードをキャラがないエリアに 《スリープ》 で登場させる。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB03-053", //ID
		"img/cardimg/VB03-053.png", //SRC
		"ウィッチマスター ノイ", //NAME
		"UC", //RARE
		"キャラカード", //TYPE
		"6", //COST
		"0", //COSTDOWN
		"7000", //POWER
		"A", //MISSION
		"ファンタジー", //FEATURE
		"ノイ", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《常》 《有効》 手札かキープ 《効果》 あなたのエリアにあるキャラ1枚につき、このカードのコストを－1する。<br><br>《自》 《有効》 エリア 《誘発》 《LvUP》 《効果》 あなたのトラッシュを5枚選び、除外してよい。5枚除外したならば、相手は自分の手札とエネルギーから1枚ずつ選び、そのカードをトラッシュに置く。<br><br>《自》 《有効》 エリア 《誘発》 あなたが「バイバイ☆さいくろん」をプレイする。 《効果》 1枚引き、あなたの手札を1枚選び、デッキの下に置く。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB03-054", //ID
		"img/cardimg/VB03-054.png", //SRC
		"ボクの魔法強すぎない？", //NAME
		"UC", //RARE
		"ミッションカード", //TYPE
		"", //COST
		"", //COSTDOWN
		"", //POWER
		"A", //MISSION
		"ファンタジー", //FEATURE
		"ノイ", //ACCOUNT
		"", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《チェック》 《有効》 《自分ターン》 《条件》 ①あなたのエリアでカード名に「マスター」を含む 《ノイ》 が 《アタック成功》 した時、 《魔法》 を持つ 《ノイ》 をプレイする。<br><br>《クリア》 《有効》 《スリープ》 《条件》 ❶このカードがあるレーンに相手のキャラがない。❷あなたのすべてのエリアにキャラがある。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB03-055", //ID
		"img/cardimg/VB03-055.png", //SRC
		"サプライズシューター ノイ", //NAME
		"C", //RARE
		"キャラカード", //TYPE
		"0", //COST
		"0", //COSTDOWN
		"500", //POWER
		"B", //MISSION
		"ファンタジー", //FEATURE
		"ノイ", //ACCOUNT
		"1", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 《自分ターン》 《EXP》 《誘発》 このカードがエリアからキャラの 《EXP》 になる。 《効果》 あなたのエネルギーを1枚選び、トラッシュに置いてよい。置いたならば、このカードをキャラがないエリアに 《スリープ》 で登場させる。<br><br>《起》 《有効》 エリア 《コスト》 このカードをトラッシュに置く。 《効果》 相手のエリアにあるバトル中でないキャラを1枚選び、スライドさせてよい。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB03-056", //ID
		"img/cardimg/VB03-056.png", //SRC
		"ドッジダンシング ノイ", //NAME
		"C", //RARE
		"キャラカード", //TYPE
		"2", //COST
		"0", //COSTDOWN
		"3000", //POWER
		"B", //MISSION
		"ファンタジー", //FEATURE
		"ノイ", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エリア 《誘発》 《登場時》 《効果》 あなたのすべてのエリアにキャラがある場合、1枚引いてよい。<br><br>《自》 《有効》 《自分ターン》 《EXP》 《誘発》 このカードがエリアからキャラの 《EXP》 になる。 《効果》 あなたのエネルギーを1枚選び、トラッシュに置いてよい。置いたならば、このカードをキャラがないエリアに 《スリープ》 で登場させる。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB03-057", //ID
		"img/cardimg/VB03-057.png", //SRC
		"マスターガンスリンガー ノイ", //NAME
		"UC", //RARE
		"キャラカード", //TYPE
		"7", //COST
		"0", //COSTDOWN
		"8000", //POWER
		"B", //MISSION
		"ファンタジー", //FEATURE
		"ノイ", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《常》 《有効》 手札かキープ 《効果》 あなたのエリアにあるキャラ1枚につき、このカードのコストを－1する。<br><br>《常》 《有効》 エリア 《効果》 このカードはカードの能力でダメージを受けない。<br><br>《常》 《有効》 エリア 《効果》 あなたのエリアにあるこのカード以外の 《ノイ》 1枚につき、このカードのパワーを＋2000する。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB03-058", //ID
		"img/cardimg/VB03-058.png", //SRC
		"射撃の天才ってことぉ？", //NAME
		"UC", //RARE
		"ミッションカード", //TYPE
		"", //COST
		"", //COSTDOWN
		"", //POWER
		"B", //MISSION
		"ファンタジー", //FEATURE
		"ノイ", //ACCOUNT
		"", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《チェック》 《有効》 《自分ターン》 《条件》 ①あなたのすべてのエリアに 《ノイ》 がある時、あなたのエリアで「マスターガンスリンガー ノイ」が 《アタック成功》 する。<br><br>《クリア》 《有効》 《スリープ》 《条件》 ❶相手のエリアにキャラが1枚もない。❷あなたのすべてのエリアに 《ノイ》 がある。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB03-059", //ID
		"img/cardimg/VB03-059.png", //SRC
		"願いの結晶 ノイ", //NAME
		"SR", //RARE
		"キャラカード", //TYPE
		"5", //COST
		"0", //COSTDOWN
		"5000", //POWER
		"☆", //MISSION
		"ファンタジー", //FEATURE
		"ノイ", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《常》 《有効》 手札かキープ 《効果》 あなたのエリアにあるキャラ1枚につき、このカードのコストを－1する。<br><br>《常》 《有効》 エリア 《効果》 あなたのすべてのエリアにキャラがある場合、相手はコスト1以下のイベントをプレイできない。<br><br>《起》 《有効》 《自分ターン1》 エリア 《コスト》 あなたの手札を2枚トラッシュに置く。 《効果》 あなたのデッキの上から7枚公開する。その中にあるカード名に「マスター」を含む 《ノイ》 のキャラを1枚選び、 《リブート》 で登場させてよい。残りを好きな順番でデッキの下に置く。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB03-060", //ID
		"img/cardimg/VB03-060.png", //SRC
		"バイバイ☆さいくろん", //NAME
		"R", //RARE
		"イベントカード", //TYPE
		"5", //COST
		"", //COSTDOWN
		"", //POWER
		"☆", //MISSION
		"ファンタジー/魔法", //FEATURE
		"ノイ", //ACCOUNT
		"", //BAN
		"1", //SCOUT
		"", //MAINTENANCE
		"《イベント》 《効果》 以下の効果から1つ選び、解決する。▶相手のエリアにある 《EXP》 を持つキャラを1枚選び、そのキャラの 《EXP》 をすべてエネルギーに置く。▶あなたのターンの場合、相手のエリアにある 《EXP》 がないキャラを1枚選び、デッキの上から2番目に置く。<br>（デッキが1枚もない場合、1番目に置く。）<br><br>《自》 詠唱：カード名に「マスター」を含む 《ノイ》<br>（ 《有効》 リムーブ 《誘発》 あなたのカード名に「マスター」を含む 《ノイ》 が 《アタック成功》 する。 《効果》 このカードをコストを支払わずにプレイしてよい。）", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB03-061", //ID
		"img/cardimg/VB03-061.png", //SRC
		"菅城 ノイ", //NAME
		"UC", //RARE
		"アカウントカード", //TYPE
		"", //COST
		"", //COSTDOWN
		"", //POWER
		"", //MISSION
		"", //FEATURE
		"ノイ", //ACCOUNT
		"", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《起》 《アクセル》 《ノイ》 《ストリーマー》<br>（ 《有効》 アカウント 《コスト》 《スリープ》 する。 《効果》 あなたのデッキの上から1枚公開し、そのカードが 《ノイ》 か 《ストリーマー》 の場合、コストを支払わずにプレイしてよい。プレイしなかったならば、エネルギーに置く。）", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB03-062", //ID
		"img/cardimg/VB03-062.png", //SRC
		"世界を我が手に マオ・ユニバース", //NAME
		"C", //RARE
		"キャラカード", //TYPE
		"5", //COST
		"1", //COSTDOWN
		"7000", //POWER
		"A", //MISSION
		"ファンタジー", //FEATURE
		"ストリーマー", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エリア 《誘発》 《LvUP》 《効果》 あなたのトラッシュを0～3枚選び、除外する。あなたのリムーブに 《ファンタジー》 を持つイベントが4枚以上ある場合、2枚引く。<br><br>《自》 《有効》 エリア 《誘発》 《アタック成功》 《効果》 このカードに 《EXP》 が2枚以上ある場合、あなたのリムーブにあるコスト5の 《ファンタジー》 を持つイベントを1枚選び、コストを支払わずにプレイしてよい。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB03-063", //ID
		"img/cardimg/VB03-063.png", //SRC
		"エンシェント†ファンタジー", //NAME
		"UC", //RARE
		"ミッションカード", //TYPE
		"", //COST
		"", //COSTDOWN
		"", //POWER
		"A", //MISSION
		"ファンタジー", //FEATURE
		"ストリーマー", //ACCOUNT
		"", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《チェック》 《有効》 《自分ターン》 《条件》 ①このカードがあるレーンであなたの「世界を我が手に マオ・ユニバース」が 《アタック成功》 する。<br><br>《クリア》 《有効》 《スリープ》 《条件》 ❶このカードがあるレーンに相手のキャラがない。❷このターンに、あなたがコスト5以上の 《ファンタジー》 を持つイベントを2回以上プレイしている。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB03-064", //ID
		"img/cardimg/VB03-064.png", //SRC
		"Δシスターズ のんびり勇者ラミ", //NAME
		"C", //RARE
		"キャラカード", //TYPE
		"2", //COST
		"0", //COSTDOWN
		"1000", //POWER
		"B", //MISSION
		"ファンタジー", //FEATURE
		"ストリーマー", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エリア 《誘発》 《アタック成功》 《効果》 このターンに、このカードの 《アタック成功》 が2回目の場合、1枚引いてよい。3回目の場合、あなたのエネルギーを2枚選び、トラッシュに置いてよい。2枚置いたならば、相手のエリアにあるコスト5以下のキャラを1枚選び、退場させる。<br><br>《起》 《有効》 《自分ターン2》 エリア 《コスト》 あなたの手札にあるカード名に「Δシスターズ」を含むキャラを1枚このカードの 《EXP》 にする。 《効果》 このカードを 《リブート》 する。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB03-065", //ID
		"img/cardimg/VB03-065.png", //SRC
		"三女の快進撃", //NAME
		"UC", //RARE
		"ミッションカード", //TYPE
		"", //COST
		"", //COSTDOWN
		"", //POWER
		"B", //MISSION
		"ファンタジー", //FEATURE
		"ストリーマー", //ACCOUNT
		"", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《チェック》 《有効》 《自分ターン》 《条件》 ①このターンに、あなたのエリアで「Δシスターズ のんびり勇者ラミ」が3回 《アタック成功》 する。<br><br>《クリア》 《有効》 《スリープ》 《条件》 ❶このカードがあるレーンに相手のキャラがない。❷あなたのエリアにあるカード名に「Δシスターズ」を含むキャラに 《EXP》 【カード名に「Δシスターズ」を含むキャラが2枚以上】ある。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB03-066", //ID
		"img/cardimg/VB03-066.png", //SRC
		"えとセトラ調査班 ラティ", //NAME
		"UC", //RARE
		"キャラカード", //TYPE
		"0", //COST
		"0", //COSTDOWN
		"500", //POWER
		"☆", //MISSION
		"ファンタジー", //FEATURE
		"ストリーマー", //ACCOUNT
		"1", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エリア 《誘発》 このカードがスライドする。 《効果》 このカードがあるレーンにある相手のキャラを1枚選び、2000ダメージを与えてよい。<br><br>《起》 《有効》 《ターン1》 エリア 《コスト》 なし 《効果》 このカードをスライドする。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB03-067", //ID
		"img/cardimg/VB03-067.png", //SRC
		"哨戒任務中 天使パトラ", //NAME
		"R", //RARE
		"キャラカード", //TYPE
		"0", //COST
		"0", //COSTDOWN
		"500", //POWER
		"☆", //MISSION
		"ファンタジー", //FEATURE
		"ストリーマー", //ACCOUNT
		"1", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《常》 《有効》 エリア 《効果》 このカードはカードの能力でダメージを受けない。<br><br>《常》 《有効》 エリア 《効果》 このカードのパワーはカードの能力で減らない。<br><br>《自》 《有効》 エリア 《誘発》 このカードがエリアからキャラの 《EXP》 になるか退場する。 《効果》 あなたのデッキの上から1枚見て、そのカードを除外するかデッキの下に置く。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB03-068", //ID
		"img/cardimg/VB03-068.png", //SRC
		"ミステリーポット", //NAME
		"SR", //RARE
		"イベントカード", //TYPE
		"0", //COST
		"", //COSTDOWN
		"", //POWER
		"☆", //MISSION
		"ファンタジー", //FEATURE
		"ストリーマー", //ACCOUNT
		"", //BAN
		"1", //SCOUT
		"", //MAINTENANCE
		"《イベント》 《効果》 あなたのデッキの上から3枚公開し、その中から1枚選び、手札に加え、残りを好きな順番でデッキの下に置く。<br><br>《起》 《有効》 《自分ターン》 トラッシュ 《コスト》 あなたの手札にある 《ファンタジー》 を持つカードを2枚除外する。 《効果》 このカードを除外し、2枚引く。ミッションフェイズ終了時まで、あなたは手札からイベントをプレイできず、 《同名》 のこの能力をプレイできない。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB03-069", //ID
		"img/cardimg/VB03-069.png", //SRC
		"ギルド〝えとセトラ〟募集中！", //NAME
		"C", //RARE
		"イベントカード", //TYPE
		"1", //COST
		"", //COSTDOWN
		"", //POWER
		"☆", //MISSION
		"ファンタジー", //FEATURE
		"ストリーマー", //ACCOUNT
		"", //BAN
		"1", //SCOUT
		"", //MAINTENANCE
		"《イベント》 《効果》 以下の効果から1つ選び、解決する。▶あなたの手札を2枚選び、除外し、2枚引く。▶ 《リロード》<br>（あなたのトラッシュにあるすべてのキャラをデッキに戻し、シャッフルする。）<br><br>《起》 《有効》 キープ 《コスト》 このカードを除外する。 《効果》 あなたの手札にあるカード名に「えとセトラ」を含むコスト7以下のキャラを1枚選び、 《リブート》 で登場させてよい。ミッションフェイズ開始時、そのキャラを除外する。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB03-070", //ID
		"img/cardimg/VB03-070.png", //SRC
		"デビルバットレクイエム", //NAME
		"R", //RARE
		"イベントカード", //TYPE
		"2", //COST
		"", //COSTDOWN
		"", //POWER
		"☆", //MISSION
		"ファンタジー", //FEATURE
		"ストリーマー", //ACCOUNT
		"", //BAN
		"1", //SCOUT
		"", //MAINTENANCE
		"《イベント》 《効果》 あなたのデッキの上から3枚公開する。その中から1枚を手札に加え、1枚をエネルギーに置き、残りを除外する。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB03-071", //ID
		"img/cardimg/VB03-071.png", //SRC
		"不屈の騎士 リリア・オルレリア", //NAME
		"UC", //RARE
		"キャラカード", //TYPE
		"2", //COST
		"0", //COSTDOWN
		"2000", //POWER
		"☆", //MISSION
		"ファンタジー", //FEATURE
		"ストリーマー", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エリア 《誘発》 《アタック成功》 《効果》 このカードを除外する。<br><br>《自》 《有効》 リムーブ 《誘発》 メインフェイズ開始時。 《効果》 あなたのエリアに 《同名》 がない場合、このカードをキャラがないエリアに 《リブート》 で登場させてよい。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB03-072", //ID
		"img/cardimg/VB03-072.png", //SRC
		"えとセトラ戦闘班 ウルス", //NAME
		"C", //RARE
		"キャラカード", //TYPE
		"3", //COST
		"0", //COSTDOWN
		"1000", //POWER
		"☆", //MISSION
		"ファンタジー", //FEATURE
		"ストリーマー", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エリア 《誘発》 このカードがアタックする。 《効果》 このカードがあるレーンにある相手のキャラを1枚選び、アタック終了時まで、そのキャラのパワー分、このカードのパワーを増やす。<br><br>《自》 《有効》 《EXP》 《誘発》 このカードを 《EXP》 に持つ 《ストリーマー》 がアタックする。 《効果》 ミッションフェイズ終了時まで、そのカードのパワーを＋2000する。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB03-073", //ID
		"img/cardimg/VB03-073.png", //SRC
		"えとセトラ戦闘班 蘭虎", //NAME
		"R", //RARE
		"キャラカード", //TYPE
		"4", //COST
		"1", //COSTDOWN
		"4000", //POWER
		"☆", //MISSION
		"ファンタジー", //FEATURE
		"ストリーマー", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エリア 《誘発》 《登場時》 《効果》 このカードを 《スリープ》 してよい。 《スリープ》 したならば、相手のエリアにあるキャラを1枚選び、1000ダメージを与え、相手のエリアにあるキャラを1枚選び、2000ダメージを与え、相手のエリアにあるキャラを1枚選び、3000ダメージを与える。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB03-074", //ID
		"img/cardimg/VB03-074.png", //SRC
		"えとセトラ調査班 キャローラ", //NAME
		"C", //RARE
		"キャラカード", //TYPE
		"4", //COST
		"1", //COSTDOWN
		"3000", //POWER
		"☆", //MISSION
		"ファンタジー", //FEATURE
		"ストリーマー", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エネルギー 《誘発》 このカードが 《スカウト》 によってエネルギーに置かれる。 《効果》 あなたのキープが1枚もない場合、このカードをキープに置いてよい。<br><br>《起》 《有効》 《相手ターン》 キープ 《コスト》 あなたのトラッシュを3枚除外する。 《効果》 あなたのエリアに 《同名》 がない場合、このカードをコストを支払いプレイする。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB03-075", //ID
		"img/cardimg/VB03-075.png", //SRC
		"シークレット・サンクチュアリ", //NAME
		"SR", //RARE
		"イベントカード", //TYPE
		"5", //COST
		"", //COSTDOWN
		"", //POWER
		"☆", //MISSION
		"ファンタジー", //FEATURE
		"ストリーマー", //ACCOUNT
		"", //BAN
		"1", //SCOUT
		"", //MAINTENANCE
		"《イベント》 《効果》 あなたのデッキを見て、その中にある 《ファンタジー》 を持つカードを1枚選び、公開し、手札に加えるか除外してよい。残りを元に戻し、シャッフルする。ミッションフェイズ終了時まで、あなたは 《同名》 のこの能力をプレイできない。<br><br>《自》 詠唱：コスト5以上のキャラ<br>（ 《有効》 リムーブ 《誘発》 あなたのコスト5以上のキャラが 《アタック成功》 する。 《効果》 このカードをコストを支払わずにプレイしてよい。）", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB03-076", //ID
		"img/cardimg/VB03-076.png", //SRC
		"シール・アロー", //NAME
		"C", //RARE
		"イベントカード", //TYPE
		"5", //COST
		"", //COSTDOWN
		"", //POWER
		"☆", //MISSION
		"ファンタジー", //FEATURE
		"ストリーマー", //ACCOUNT
		"", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《常》 《有効》 キープ 《効果》 すべてのイベントに以下の能力を与える。“ 《イベント》 《効果》 ミッションフェイズ終了時まで、あなたは 《同名》 のカードをプレイできない。”<br><br>《自》 《有効》 エネルギー 《誘発》 このカードがカードの能力か 《スカウト》 によってエネルギーに置かれる。 《効果》 あなたのキープをすべてトラッシュに置き、このカードをキープに置く。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB03-077", //ID
		"img/cardimg/VB03-077.png", //SRC
		"制圧者 ブラウ・バレット", //NAME
		"UC", //RARE
		"キャラカード", //TYPE
		"6", //COST
		"1", //COSTDOWN
		"9000", //POWER
		"☆", //MISSION
		"ファンタジー", //FEATURE
		"ストリーマー", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《起》 《有効》 《ターン1》 エリア 《コスト》 あなたのエネルギーを2枚除外する。 《効果》 相手のすべてのエリアにあるキャラに4000ダメージを与える。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB03-078", //ID
		"img/cardimg/VB03-078.png", //SRC
		"見切りの剣技", //NAME
		"R", //RARE
		"イベントカード", //TYPE
		"8", //COST
		"", //COSTDOWN
		"", //POWER
		"☆", //MISSION
		"ファンタジー", //FEATURE
		"ストリーマー", //ACCOUNT
		"", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《常》 《有効》 キープ 《効果》 あなたのエリアにあるキャラはカードの能力でダメージを受けない。<br><br>《常》 《有効》 キープ 《効果》 あなたのエリアにあるキャラのパワーはカードの能力で減らない。<br><br>《常》 《有効》 キープ 《効果》 あなたのエリアにあるキャラはスライドできない。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB03-079", //ID
		"img/cardimg/VB03-079.png", //SRC
		"ラストパレード", //NAME
		"R", //RARE
		"イベントカード", //TYPE
		"12", //COST
		"", //COSTDOWN
		"", //POWER
		"☆", //MISSION
		"ファンタジー", //FEATURE
		"ストリーマー", //ACCOUNT
		"", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《イベント》 《効果》 ミッションフェイズ終了時まで、お互いにカードのプレイと 《起》 能力のプレイ、キャラのアタックをすることはできない。<br><br>《自》 《有効》 エネルギー 《誘発》 このカードが 《スカウト》 によってエネルギーに置かれる。 《効果》 このカードをコストを支払わずにプレイする。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB03-080", //ID
		"img/cardimg/VB03-080.png", //SRC
		"Vividz Star F", //NAME
		"R", //RARE
		"イベントカード", //TYPE
		"1000", //COST
		"", //COSTDOWN
		"", //POWER
		"☆", //MISSION
		"ファンタジー", //FEATURE
		"ストリーマー", //ACCOUNT
		"", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《イベント》 《有効》 《自分ターン》 《効果》 あなたの 《ファンタジー》 を持つミッションを1枚選び、クリアする。<br><br>《常》 《有効》 すべて 《効果》 デッキを構築する際、このカードをデッキに1枚まで入れることができる。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB04-001", //ID
		"img/cardimg/VB04-001.png", //SRC
		"トレジャークエスト！ キョウカ", //NAME
		"UC", //RARE
		"キャラカード", //TYPE
		"1", //COST
		"0", //COSTDOWN
		"1000", //POWER
		"C", //MISSION
		"ファンタジー", //FEATURE
		"キョウカ", //ACCOUNT
		"1", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 《EXP》 《誘発》 このカードがエリアからキャラの 《EXP》 になる。 《効果》 あなたの手札にある 《エネミー》 を1枚選び、公開してよい。公開したならば、1枚引き、公開したカードをデッキに戻し、シャッフルする。<br><br>《起》 《有効》 エリア 《コスト》 《スリープ》 する。 《効果》 あなたのトラッシュを2枚選び、除外してよい。2枚除外したならば、1枚引き、あなたの手札を1枚選び、トラッシュに置く。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB04-002", //ID
		"img/cardimg/VB04-002.png", //SRC
		"ウルトラスイング キョウカ", //NAME
		"C", //RARE
		"キャラカード", //TYPE
		"4", //COST
		"1", //COSTDOWN
		"4000", //POWER
		"C", //MISSION
		"ファンタジー", //FEATURE
		"キョウカ", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エリア 《誘発》 《LvUP》 《効果》 あなたのトラッシュを2枚選び、除外してよい。2枚除外したならば、あなたのエリアを1つ選び、ミッションフェイズ終了時まで、以下の能力を与える。“ 《常》 《有効》 エリア 《効果》 このエリアにある 《キョウカ》 のパワーを＋2000する。”<br><br>《自》 《有効》 エリア 《誘発》 《アタック成功》 《効果》 トラッシュかリムーブにある、あなたの 《魔法》 を持つイベントを1枚選び、手札に戻してよい。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB04-003", //ID
		"img/cardimg/VB04-003.png", //SRC
		"遺跡内部を全力踏破！", //NAME
		"UC", //RARE
		"ミッションカード", //TYPE
		"", //COST
		"", //COSTDOWN
		"", //POWER
		"C", //MISSION
		"ファンタジー", //FEATURE
		"キョウカ", //ACCOUNT
		"", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《チェック》 《有効》 《自分ターン》 《条件》 ①このターンに、あなたのエリアで 《キョウカ》 が 《アタック成功》 した時、あなたの 《エネミー》 が“ 《自》 討伐”によって2回退場する。<br><br>《クリア》 《有効》 《スリープ》 《条件》 ①このカードがあるレーンに相手のキャラがない。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB04-004", //ID
		"img/cardimg/VB04-004.png", //SRC
		"火山を大捜索 キョウカ", //NAME
		"C", //RARE
		"キャラカード", //TYPE
		"0", //COST
		"0", //COSTDOWN
		"500", //POWER
		"D", //MISSION
		"ファンタジー", //FEATURE
		"キョウカ", //ACCOUNT
		"1", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エリア 《誘発》 《登場時》 《効果》 あなたの手札が3枚以下の場合、あなたのエネルギーを1枚選び、トラッシュに置いてよい。置いたならば、1回 《スカウト》 する。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB04-005", //ID
		"img/cardimg/VB04-005.png", //SRC
		"火炎旋風 キョウカ", //NAME
		"C", //RARE
		"キャラカード", //TYPE
		"2", //COST
		"0", //COSTDOWN
		"3000", //POWER
		"D", //MISSION
		"ファンタジー", //FEATURE
		"キョウカ", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エリア 《誘発》 《アタック成功》 《効果》 あなたのデッキの上から5枚公開し、その中にある 《キョウカ》 を1枚選び、手札に加えてよい。残りを好きな順番でデッキの下に置く。加えたならば、あなたの手札を1枚選び、トラッシュに置く。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB04-006", //ID
		"img/cardimg/VB04-006.png", //SRC
		"高難度討伐クエストクリア！", //NAME
		"UC", //RARE
		"ミッションカード", //TYPE
		"", //COST
		"", //COSTDOWN
		"", //POWER
		"D", //MISSION
		"ファンタジー", //FEATURE
		"キョウカ", //ACCOUNT
		"", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《チェック》 《有効》 《自分ターン》 《条件》 ①あなたのエリアでカード名に「マスター」を含む 《キョウカ》 が 《アタック成功》 した時、あなたのカード名に「ボス」を含む 《エネミー》 が“ 《自》 討伐”によって退場する。<br><br>《クリア》 《有効》 《スリープ》 《条件》 ①このカードがあるレーンに相手のキャラがない。②あなたのエリアに、このターンに 《アタック成功》 しているカード名に「マスター」を含む 《キョウカ》 がある。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB04-007", //ID
		"img/cardimg/VB04-007.png", //SRC
		"爆進轟々速", //NAME
		"R", //RARE
		"イベントカード", //TYPE
		"1", //COST
		"", //COSTDOWN
		"", //POWER
		"☆", //MISSION
		"ファンタジー/魔法", //FEATURE
		"キョウカ", //ACCOUNT
		"", //BAN
		"1", //SCOUT
		"", //MAINTENANCE
		"《イベント》 《効果》 あなたの手札を0～2枚選び、トラッシュに置く。あなたの手札が3枚になるまで引く。<br><br>《自》 詠唱： 《ファンタジー》 を持つ 《キョウカ》 <br>（ 《有効》 リムーブ 《誘発》 あなたの 《ファンタジー》 を持つ 《キョウカ》 が 《アタック成功》 する。 《効果》 このカードをコストを支払わずにプレイしてよい。）<br><br>《起》 《有効》 《自分ターン》 手札 《コスト》 このカードを除外する。 《効果》 あなたのデッキの上から5枚公開し、その中にある 《エネミー》 のキャラを1枚選び、デッキの上に置く。残りを好きな順番でデッキの下に置く。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB04-008", //ID
		"img/cardimg/VB04-008.png", //SRC
		"ドラゴニックマスター キョウカ", //NAME
		"SR", //RARE
		"キャラカード", //TYPE
		"8", //COST
		"0", //COSTDOWN
		"11000", //POWER
		"☆", //MISSION
		"ファンタジー", //FEATURE
		"キョウカ", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《常》 《有効》 エリア 《効果》 相手のエリアにあるキャラはスライドできない。<br><br>《起》 《有効》 《自分ターン》 トラッシュ 《コスト》 あなたのトラッシュにある 《エネミー》 を2枚除外する。 《効果》 この能力はあなたのエリアに 《エネミー》 があり、 《同名》 がない場合にしかプレイできない。手札とエネルギーにある、あなたのカードを1枚ずつ選び、トラッシュに置き、このカードを 《リブート》 で登場させる。あなたのリムーブが8枚未満の場合、このカードを除外する。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB04-009", //ID
		"img/cardimg/VB04-009.png", //SRC
		"トレジャークエスト！ 玲", //NAME
		"UC", //RARE
		"キャラカード", //TYPE
		"2", //COST
		"0", //COSTDOWN
		"3000", //POWER
		"C", //MISSION
		"ファンタジー", //FEATURE
		"玲", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エリア 《誘発》 バトルをせず 《アタック成功》 《効果》 あなたのトラッシュを1枚選び、除外してよい。除外したならば、1枚引く。<br><br>《起》 《有効》 《ターン1》 エリア 《コスト》 あなたのエネルギーを1枚トラッシュに置く。 《効果》 あなたの手札にある 《エネミー》 を1枚選び、公開してよい。公開したならば、1枚引き、公開したカードをデッキに戻し、シャッフルする。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB04-010", //ID
		"img/cardimg/VB04-010.png", //SRC
		"華麗な槍捌き 玲", //NAME
		"C", //RARE
		"キャラカード", //TYPE
		"4", //COST
		"1", //COSTDOWN
		"4000", //POWER
		"C", //MISSION
		"ファンタジー", //FEATURE
		"玲", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エリア 《誘発》 《LvUP》 《効果》 あなたのトラッシュを1枚選び、除外してよい。除外したならば、2枚引き、あなたの手札を2枚選びデッキに戻し、シャッフルする。<br><br>《自》 《有効》 エリア 《誘発》 《アタック成功》 《効果》 トラッシュかリムーブにある、あなたの 《魔法》 を持つイベントを1枚選び、手札に戻してよい。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB04-011", //ID
		"img/cardimg/VB04-011.png", //SRC
		"王宮の秘宝", //NAME
		"UC", //RARE
		"ミッションカード", //TYPE
		"", //COST
		"", //COSTDOWN
		"", //POWER
		"C", //MISSION
		"ファンタジー", //FEATURE
		"玲", //ACCOUNT
		"", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《チェック》 《有効》 《自分ターン》 《条件》 ①このターンに、あなたのエリアで 《玲》 が 《アタック成功》 した時、あなたの 《エネミー》 が“ 《自》 討伐”によって2回退場する。<br><br>《クリア》 《有効》 《スリープ》 《条件》 ①このカードがあるレーンに相手のキャラがない。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB04-012", //ID
		"img/cardimg/VB04-012.png", //SRC
		"フロートスペル 玲", //NAME
		"C", //RARE
		"キャラカード", //TYPE
		"0", //COST
		"0", //COSTDOWN
		"500", //POWER
		"D", //MISSION
		"ファンタジー", //FEATURE
		"玲", //ACCOUNT
		"1", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エネルギー 《誘発》 このカードがデッキからエネルギーに置かれる。 《効果》 相手のエリアにあるキャラを1枚選び、2000ダメージを与える。<br><br>《自》 《有効》 《EXP》 《誘発》 このカードがエリアから 《玲》 の 《EXP》 になる。 《効果》 あなたのデッキの上から1枚見て、そのカードをデッキの上か下に置く。あなたの手札が4枚以上ある場合、1枚引いてよい。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB04-013", //ID
		"img/cardimg/VB04-013.png", //SRC
		"リフレクトスペル 玲", //NAME
		"C", //RARE
		"キャラカード", //TYPE
		"5", //COST
		"1", //COSTDOWN
		"7000", //POWER
		"D", //MISSION
		"ファンタジー", //FEATURE
		"玲", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エリア 《誘発》 《登場時》 《効果》 あなたの手札を1枚選び、除外してよい。除外したならば、あなたのデッキの上から5枚公開し、その中にある 《玲》 を1枚選び、手札に加えてよい。残りを好きな順番でデッキの下に置く。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB04-014", //ID
		"img/cardimg/VB04-014.png", //SRC
		"魔杖の討伐者", //NAME
		"UC", //RARE
		"ミッションカード", //TYPE
		"", //COST
		"", //COSTDOWN
		"", //POWER
		"D", //MISSION
		"ファンタジー", //FEATURE
		"玲", //ACCOUNT
		"", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《チェック》 《有効》 《自分ターン》 《条件》 ①あなたのエリアでカード名に「マスター」を含む 《玲》 が 《アタック成功》 した時、あなたのカード名に「ボス」を含む 《エネミー》 が“ 《自》 討伐”によって退場する。<br><br>《クリア》 《有効》 《スリープ》 《条件》 ①このカードがあるレーンに相手のキャラがない。②あなたのエリアに、このターンに 《アタック成功》 しているカード名に「マスター」を含む 《玲》 がある。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB04-015", //ID
		"img/cardimg/VB04-015.png", //SRC
		"刹華・槍破飛連突", //NAME
		"R", //RARE
		"イベントカード", //TYPE
		"1", //COST
		"", //COSTDOWN
		"", //POWER
		"☆", //MISSION
		"ファンタジー/魔法", //FEATURE
		"玲", //ACCOUNT
		"", //BAN
		"1", //SCOUT
		"", //MAINTENANCE
		"《イベント》 《効果》 相手のエリアにあるダメージを受けているキャラを1枚選び、3000ダメージを与える。<br><br>《自》 詠唱： 《ファンタジー》 を持つ 《玲》 <br>（ 《有効》 リムーブ 《誘発》 あなたの 《ファンタジー》 を持つ 《玲》 が 《アタック成功》 する。 《効果》 このカードをコストを支払わずにプレイしてよい。）<br><br>《起》 《有効》 《自分ターン》 手札 《コスト》 このカードを除外する。 《効果》 あなたのデッキの上から5枚公開し、その中にある 《エネミー》 のキャラを1枚選び、デッキの上に置く。残りを好きな順番でデッキの下に置く。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB04-016", //ID
		"img/cardimg/VB04-016.png", //SRC
		"ドラゴニックマスター 玲", //NAME
		"SR", //RARE
		"キャラカード", //TYPE
		"8", //COST
		"0", //COSTDOWN
		"11000", //POWER
		"☆", //MISSION
		"ファンタジー", //FEATURE
		"玲", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エリア 《誘発》 《アタック成功》 《効果》 相手は自分のエネルギーを1枚選び、トラッシュに置く。相手のエネルギーが6枚以上ある場合、相手は自分のエネルギーを1枚選び、トラッシュに置く。<br><br>《起》 《有効》 《自分ターン》 手札 《コスト》 あなたのトラッシュにある 《エネミー》 を2枚除外する。 《効果》 この能力はあなたのエリアに 《エネミー》 があり、 《同名》 がない場合にしかプレイできない。あなたのエネルギーを1枚選び、トラッシュに置き、このカードを 《リブート》 で登場させる。あなたのリムーブが8枚未満の場合、このカードをトラッシュに置く。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB04-017", //ID
		"img/cardimg/VB04-017.png", //SRC
		"トレジャークエスト！ らぶり", //NAME
		"UC", //RARE
		"キャラカード", //TYPE
		"2", //COST
		"0", //COSTDOWN
		"3000", //POWER
		"C", //MISSION
		"ファンタジー", //FEATURE
		"らぶり", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 センター 《誘発》 《登場時》 《効果》 あなたの手札にある 《エネミー》 を1枚選び、公開してよい。公開したならば、1枚引き、公開したカードをデッキに戻し、シャッフルする。<br><br>《自》 《有効》 センター 《誘発》 《アタック成功》 《効果》 あなたのトラッシュを2枚選び、除外してよい。2枚除外したならば、あなたのデッキの上から1枚をエネルギーに置き、あなたのエネルギーを1枚選び、デッキの下に置く。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB04-018", //ID
		"img/cardimg/VB04-018.png", //SRC
		"熱烈な歓迎", //NAME
		"C", //RARE
		"イベントカード", //TYPE
		"2", //COST
		"", //COSTDOWN
		"", //POWER
		"C", //MISSION
		"ファンタジー", //FEATURE
		"らぶり", //ACCOUNT
		"", //BAN
		"1", //SCOUT
		"", //MAINTENANCE
		"《イベント》 《効果》 あなたのトラッシュを1枚選び、除外してよい。除外したならば、トラッシュかリムーブにある、あなたの 《魔法》 を持つイベントを1枚選び、手札に戻してよい。<br><br>《起》 《有効》 エネルギー 《コスト》 このカード以外のあなたのエネルギーを1枚トラッシュに置く。 《効果》 このカードを手札に戻す。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB04-019", //ID
		"img/cardimg/VB04-019.png", //SRC
		"#らぶりと永遠の輝き☆", //NAME
		"UC", //RARE
		"ミッションカード", //TYPE
		"", //COST
		"", //COSTDOWN
		"", //POWER
		"C", //MISSION
		"ファンタジー", //FEATURE
		"らぶり", //ACCOUNT
		"", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《チェック》 《有効》 《自分ターン》 《条件》 ①このターンに、あなたのエリアで 《らぶり》 が 《アタック成功》 した時、あなたの 《エネミー》 が“ 《自》 討伐”によって2回退場する。<br><br>《クリア》 《有効》 《スリープ》 《条件》 ①このカードがあるレーンに相手のキャラがない。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB04-020", //ID
		"img/cardimg/VB04-020.png", //SRC
		"ラブリー☆チャージ", //NAME
		"C", //RARE
		"イベントカード", //TYPE
		"1", //COST
		"", //COSTDOWN
		"", //POWER
		"D", //MISSION
		"ファンタジー", //FEATURE
		"らぶり", //ACCOUNT
		"", //BAN
		"1", //SCOUT
		"", //MAINTENANCE
		"《イベント》 《効果》 あなたのデッキの上から2枚公開し、その中から1枚選び、手札に加え、残りをトラッシュに置く。<br><br>《起》 《有効》 《自分ターン》 トラッシュ 《コスト》 あなたのエネルギーを1枚トラッシュに置く。 《効果》 あなたのセンターにある 《らぶり》 を1枚選び、このカードをそのキャラの 《EXP》 にする。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB04-021", //ID
		"img/cardimg/VB04-021.png", //SRC
		"フォーリンミーティア らぶり", //NAME
		"C", //RARE
		"キャラカード", //TYPE
		"4", //COST
		"1", //COSTDOWN
		"4000", //POWER
		"D", //MISSION
		"ファンタジー", //FEATURE
		"らぶり", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エリア 《誘発》 《アタック成功》 《効果》 あなたのエネルギーを1枚選び、除外してよい。除外したならば、あなたのデッキの上から5枚公開し、その中にある 《らぶり》 を1枚選び、エネルギーに置いてよい。残りを好きな順番でデッキの下に置く。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB04-022", //ID
		"img/cardimg/VB04-022.png", //SRC
		"#今日からお友達♥", //NAME
		"UC", //RARE
		"ミッションカード", //TYPE
		"", //COST
		"", //COSTDOWN
		"", //POWER
		"D", //MISSION
		"ファンタジー", //FEATURE
		"らぶり", //ACCOUNT
		"", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《チェック》 《有効》 《自分ターン》 《条件》 ①あなたのエリアでカード名に「マスター」を含む 《らぶり》 が 《アタック成功》 した時、あなたのカード名に「ボス」を含む 《エネミー》 が“ 《自》 討伐”によって退場する。<br><br>《クリア》 《有効》 《スリープ》 《条件》 ①このカードがあるレーンに相手のキャラがない。②あなたのエリアに、このターンに 《アタック成功》 しているカード名に「マスター」を含む 《らぶり》 がある。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB04-023", //ID
		"img/cardimg/VB04-023.png", //SRC
		"マシュマロ♥ワンダフル", //NAME
		"R", //RARE
		"イベントカード", //TYPE
		"1", //COST
		"", //COSTDOWN
		"", //POWER
		"☆", //MISSION
		"ファンタジー/魔法", //FEATURE
		"らぶり", //ACCOUNT
		"", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《イベント》 《効果》 あなたのトラッシュにあるイベントを1枚選び、あなたのセンターにあるキャラの 《EXP》 にする。<br><br>《自》 詠唱： 《ファンタジー》 を持つ 《らぶり》 <br>（ 《有効》 リムーブ 《誘発》 あなたの 《ファンタジー》 を持つ 《らぶり》 が 《アタック成功》 する。 《効果》 このカードをコストを支払わずにプレイしてよい。）<br><br>《起》 《有効》 《自分ターン》 手札 《コスト》 このカードを除外する。 《効果》 あなたのデッキの上から5枚公開し、その中にある 《エネミー》 のキャラを1枚選び、デッキの上に置く。残りを好きな順番でデッキの下に置く。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB04-024", //ID
		"img/cardimg/VB04-024.png", //SRC
		"サーベラスマスター らぶり", //NAME
		"SR", //RARE
		"キャラカード", //TYPE
		"8", //COST
		"0", //COSTDOWN
		"10000", //POWER
		"☆", //MISSION
		"ファンタジー", //FEATURE
		"らぶり", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《常》 《有効》 センター 《効果》 相手はこのカードをカードの能力で選ぶことができない。<br><br>《起》 《有効》 《自分ターン》 エネルギー 《コスト》 あなたのトラッシュにある 《エネミー》 を2枚除外する。 《効果》 この能力はあなたのエリアに 《エネミー》 があり、 《同名》 がない場合にしかプレイできない。あなたの手札を2枚選び、トラッシュに置き、このカードを 《リブート》 で登場させる。あなたのリムーブが8枚未満の場合、このカードをトラッシュに置く。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB04-025", //ID
		"img/cardimg/VB04-025.png", //SRC
		"トレジャークエスト！ まりあ", //NAME
		"UC", //RARE
		"キャラカード", //TYPE
		"0", //COST
		"0", //COSTDOWN
		"500", //POWER
		"C", //MISSION
		"ファンタジー", //FEATURE
		"まりあ", //ACCOUNT
		"1", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 《EXP》 《誘発》 このカードがエリアからキャラの 《EXP》 になる。 《効果》 あなたの手札にある 《エネミー》 を1枚選び、公開してよい。公開したならば、1枚引き、公開したカードをデッキに戻し、シャッフルする。<br><br>《起》 《有効》 エリア 《コスト》 あなたのトラッシュを2枚除外する。 《効果》 あなたのエリアにあるこのカード以外のキャラを1枚選び、このカードをそのキャラの 《EXP》 にする。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB04-026", //ID
		"img/cardimg/VB04-026.png", //SRC
		"庭仕事も大得意 まりあ", //NAME
		"C", //RARE
		"キャラカード", //TYPE
		"2", //COST
		"0", //COSTDOWN
		"2000", //POWER
		"C", //MISSION
		"ファンタジー", //FEATURE
		"まりあ", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《起》 《有効》 《自分ターン1》 エリア 《コスト》 あなたのトラッシュを2枚除外する。 《効果》 トラッシュかリムーブにある、あなたの 《魔法》 を持つイベントを1枚選び、手札に戻してよい。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB04-027", //ID
		"img/cardimg/VB04-027.png", //SRC
		"ガーデン・プリンセス", //NAME
		"UC", //RARE
		"ミッションカード", //TYPE
		"", //COST
		"", //COSTDOWN
		"", //POWER
		"C", //MISSION
		"ファンタジー", //FEATURE
		"まりあ", //ACCOUNT
		"", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《チェック》 《有効》 《自分ターン》 《条件》 ①このターンに、あなたのエリアで 《まりあ》 が 《アタック成功》 した時、あなたの 《エネミー》 が“ 《自》 討伐”によって2回退場する。<br><br>《クリア》 《有効》 《スリープ》 《条件》 ①このカードがあるレーンに相手のキャラがない。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB04-028", //ID
		"img/cardimg/VB04-028.png", //SRC
		"咆哮から逃れて まりあ", //NAME
		"C", //RARE
		"キャラカード", //TYPE
		"0", //COST
		"0", //COSTDOWN
		"500", //POWER
		"D", //MISSION
		"ファンタジー", //FEATURE
		"まりあ", //ACCOUNT
		"1", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《常》 《有効》 《自分ターン》 《EXP》 《効果》 このカードを 《EXP》 に持つキャラが 《まりあ》 の場合、パワーを＋1000する。<br><br>《自》 《有効》 《EXP》 《誘発》 このカードがエリアからキャラの 《EXP》 になる。 《効果》 あなたのエリアにあるキャラを1枚選び、あなたのデッキの上から1枚をそのキャラの 《EXP》 にしてよい。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB04-029", //ID
		"img/cardimg/VB04-029.png", //SRC
		"揺るがぬ信念 まりあ", //NAME
		"C", //RARE
		"キャラカード", //TYPE
		"4", //COST
		"1", //COSTDOWN
		"3000", //POWER
		"D", //MISSION
		"ファンタジー", //FEATURE
		"まりあ", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エリア 《誘発》 《アタック成功》 《効果》 このカードの 《EXP》 を1枚選び、除外してよい。除外したならば、あなたのデッキの上から5枚公開し、その中にある 《まりあ》 を1枚選び、このカードの 《EXP》 にしてよい。残りを好きな順番でデッキの下に置く。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB04-030", //ID
		"img/cardimg/VB04-030.png", //SRC
		"仲直りディナーパーティ", //NAME
		"UC", //RARE
		"ミッションカード", //TYPE
		"", //COST
		"", //COSTDOWN
		"", //POWER
		"D", //MISSION
		"ファンタジー", //FEATURE
		"まりあ", //ACCOUNT
		"", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《チェック》 《有効》 《自分ターン》 《条件》 ①あなたのエリアでカード名に「マスター」を含む 《まりあ》 が 《アタック成功》 した時、あなたのカード名に「ボス」を含む 《エネミー》 が“ 《自》 討伐”によって退場する。<br><br>《クリア》 《有効》 《スリープ》 《条件》 ①このカードがあるレーンに相手のキャラがない。②あなたのエリアに、このターンに 《アタック成功》 しているカード名に「マスター」を含む 《まりあ》 がある。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB04-031", //ID
		"img/cardimg/VB04-031.png", //SRC
		"やすらぎのひかり", //NAME
		"R", //RARE
		"イベントカード", //TYPE
		"1", //COST
		"", //COSTDOWN
		"", //POWER
		"☆", //MISSION
		"ファンタジー/魔法", //FEATURE
		"まりあ", //ACCOUNT
		"", //BAN
		"1", //SCOUT
		"", //MAINTENANCE
		"《イベント》 《効果》 あなたの手札を2枚選び、好きな順番でデッキの下に置き、2枚引く。<br><br>《自》 詠唱： 《ファンタジー》 を持つ 《まりあ》 <br>（ 《有効》 リムーブ 《誘発》 あなたの 《ファンタジー》 を持つ 《まりあ》 が 《アタック成功》 する。 《効果》 このカードをコストを支払わずにプレイしてよい。）<br><br>《起》 《有効》 《自分ターン》 手札 《コスト》 このカードを除外する。 《効果》 あなたのデッキの上から5枚公開し、その中にある 《エネミー》 のキャラを1枚選び、デッキの上に置く。残りを好きな順番でデッキの下に置く。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB04-032", //ID
		"img/cardimg/VB04-032.png", //SRC
		"サーベラスマスター まりあ", //NAME
		"SR", //RARE
		"キャラカード", //TYPE
		"8", //COST
		"0", //COSTDOWN
		"10000", //POWER
		"☆", //MISSION
		"ファンタジー", //FEATURE
		"まりあ", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エリア 《誘発》 《登場時》 《効果》 手札、トラッシュ、リムーブにある、あなたのカードをそれぞれ1枚ずつ選び、このカードの 《EXP》 にしてよい。<br><br>《起》 《有効》 《自分ターン》 《EXP》 《コスト》 あなたのトラッシュにある 《エネミー》 を2枚除外する。 《効果》 この能力はあなたのエリアに 《エネミー》 があり、 《同名》 がない場合にしかプレイできない。あなたの手札を1枚選び、トラッシュに置き、このカードを 《リブート》 で登場させる。あなたのリムーブが8枚未満の場合、このカードをトラッシュに置く。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB04-033", //ID
		"img/cardimg/VB04-033.png", //SRC
		"トレジャークエスト！ シェリー", //NAME
		"UC", //RARE
		"キャラカード", //TYPE
		"2", //COST
		"0", //COSTDOWN
		"2000", //POWER
		"C", //MISSION
		"ファンタジー", //FEATURE
		"シェリー", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《常》 《有効》 エリア 《効果》 あなたのキープがある場合、このカードのパワーを＋2000する。<br><br>《起》 《有効》 《自分ターン1》 エリア 《コスト》 あなたのトラッシュを2枚除外する。 《効果》 あなたの手札にある 《エネミー》 を1枚選び、公開してよい。公開したならば、1枚引き、公開したカードをデッキに戻し、シャッフルする。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB04-034", //ID
		"img/cardimg/VB04-034.png", //SRC
		"もふもふの協力者 シェリー", //NAME
		"C", //RARE
		"キャラカード", //TYPE
		"5", //COST
		"1", //COSTDOWN
		"6000", //POWER
		"C", //MISSION
		"ファンタジー", //FEATURE
		"シェリー", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《常》 《有効》 キープ 《効果》 このカードのコストを－2する。<br><br>《自》 《有効》 エリア 《誘発》 このカードがキープから登場する。 《効果》 あなたのトラッシュを3枚選び、除外してよい。3枚除外したならば、あなたのデッキの上から1枚をキープに置く。<br><br>《自》 《有効》 エリア 《誘発》 《アタック成功》 《効果》 トラッシュかリムーブにある、あなたの 《魔法》 を持つイベントを1枚選び、手札に戻してよい。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB04-035", //ID
		"img/cardimg/VB04-035.png", //SRC
		"ヘヴンリーセッション", //NAME
		"UC", //RARE
		"ミッションカード", //TYPE
		"", //COST
		"", //COSTDOWN
		"", //POWER
		"C", //MISSION
		"ファンタジー", //FEATURE
		"シェリー", //ACCOUNT
		"", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《チェック》 《有効》 《自分ターン》 《条件》 ①このターンに、あなたのエリアで 《シェリー》 が 《アタック成功》 した時、あなたの 《エネミー》 が“ 《自》 討伐”によって2回退場する。<br><br>《クリア》 《有効》 《スリープ》 《条件》 ①このカードがあるレーンに相手のキャラがない。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB04-036", //ID
		"img/cardimg/VB04-036.png", //SRC
		"ソードパリィ シェリー", //NAME
		"C", //RARE
		"キャラカード", //TYPE
		"1", //COST
		"0", //COSTDOWN
		"1000", //POWER
		"D", //MISSION
		"ファンタジー", //FEATURE
		"シェリー", //ACCOUNT
		"1", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《常》 《有効》 エリア 《効果》 あなたのキープに 《シェリー》 がある場合、相手のすべてのエリアにあるキャラのパワーを－1000する。<br><br>《自》 《有効》 エリア 《誘発》 相手のキャラが退場する。 《効果》 ミッションフェイズ終了時まで、このカードのパワーを－500する。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB04-037", //ID
		"img/cardimg/VB04-037.png", //SRC
		"ソードスラッシュ シェリー", //NAME
		"C", //RARE
		"キャラカード", //TYPE
		"3", //COST
		"0", //COSTDOWN
		"5000", //POWER
		"D", //MISSION
		"ファンタジー", //FEATURE
		"シェリー", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エリア 《誘発》 《アタック成功》 《効果》 あなたのキープを1枚選び、除外してよい。除外したならば、あなたのデッキの上から5枚公開し、その中にある 《シェリー》 を1枚選び、キープに置く。残りを好きな順番でデッキの下に置く。<br><br>《起》 《有効》 《自分ターン》 トラッシュ 《コスト》 あなたの手札を1枚トラッシュに置く。 《効果》 あなたのキープが1枚もない場合、このカードをキープに置く。ミッションフェイズ終了時まで、あなたは 《同名》 のこの能力をプレイできない。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB04-038", //ID
		"img/cardimg/VB04-038.png", //SRC
		"ディストーションメサイア", //NAME
		"UC", //RARE
		"ミッションカード", //TYPE
		"", //COST
		"", //COSTDOWN
		"", //POWER
		"D", //MISSION
		"ファンタジー", //FEATURE
		"シェリー", //ACCOUNT
		"", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《チェック》 《有効》 《自分ターン》 《条件》 ①あなたのエリアでカード名に「マスター」を含む 《シェリー》 が 《アタック成功》 した時、あなたのカード名に「ボス」を含む 《エネミー》 が“ 《自》 討伐”によって退場する。<br><br>《クリア》 《有効》 《スリープ》 《条件》 ①このカードがあるレーンに相手のキャラがない。②あなたのエリアに、このターンに 《アタック成功》 しているカード名に「マスター」を含む 《シェリー》 がある。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB04-039", //ID
		"img/cardimg/VB04-039.png", //SRC
		"ファンシータイラント", //NAME
		"R", //RARE
		"イベントカード", //TYPE
		"1", //COST
		"", //COSTDOWN
		"", //POWER
		"☆", //MISSION
		"ファンタジー/魔法", //FEATURE
		"シェリー", //ACCOUNT
		"", //BAN
		"1", //SCOUT
		"", //MAINTENANCE
		"《イベント》 《効果》 あなたのキープか相手のエリアにある、キャラを1枚選び、ミッションフェイズ終了時まで、コストを－2する。<br><br>《自》 詠唱： 《ファンタジー》 を持つ 《シェリー》 <br>（ 《有効》 リムーブ 《誘発》 あなたの 《ファンタジー》 を持つ 《シェリー》 が 《アタック成功》 する。 《効果》 このカードをコストを支払わずにプレイしてよい。）<br><br>《起》 《有効》 《自分ターン》 手札 《コスト》 このカードを除外する。 《効果》 あなたのデッキの上から5枚公開し、その中にある 《エネミー》 のキャラを1枚選び、デッキの上に置く。残りを好きな順番でデッキの下に置く。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB04-040", //ID
		"img/cardimg/VB04-040.png", //SRC
		"サタニックマスター シェリー", //NAME
		"SR", //RARE
		"キャラカード", //TYPE
		"7", //COST
		"0", //COSTDOWN
		"13000", //POWER
		"☆", //MISSION
		"ファンタジー", //FEATURE
		"シェリー", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エリア 《誘発》 ミッションフェイズ終了時。 《効果》 このカードの 《EXP》 をすべてエネルギーに置き、あなたのキープを1枚選び、エネルギーに置く。このカードをキープに置く。<br><br>《起》 《有効》 《自分ターン》 キープ 《コスト》 あなたのトラッシュにある 《エネミー》 を2枚除外する。 《効果》 この能力はあなたのエリアに 《エネミー》 があり、 《同名》 がない場合にしかプレイできない。このカードを 《リブート》 で登場させる。あなたのリムーブが8枚未満の場合、このカードをトラッシュに置く。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB04-041", //ID
		"img/cardimg/VB04-041.png", //SRC
		"トレジャークエスト！ ノイ", //NAME
		"UC", //RARE
		"キャラカード", //TYPE
		"0", //COST
		"0", //COSTDOWN
		"500", //POWER
		"C", //MISSION
		"ファンタジー", //FEATURE
		"ノイ", //ACCOUNT
		"1", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 《自分ターン》 《EXP》 《誘発》 このカードがエリアからキャラの 《EXP》 になる。 《効果》 あなたのエネルギーを1枚選び、トラッシュに置いてよい。置いたならば、このカードをキャラがないエリアに 《スリープ》 で登場させる。<br><br>《起》 《有効》 《自分ターン1》 エリア 《コスト》 あなたのトラッシュを2枚除外する。 《効果》 あなたの手札にある 《エネミー》 を1枚選び、公開してよい。公開したならば、1枚引き、公開したカードをデッキに戻し、シャッフルする。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB04-042", //ID
		"img/cardimg/VB04-042.png", //SRC
		"チャクラムダンサー ノイ", //NAME
		"C", //RARE
		"キャラカード", //TYPE
		"4", //COST
		"1", //COSTDOWN
		"4000", //POWER
		"C", //MISSION
		"ファンタジー", //FEATURE
		"ノイ", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エリア 《誘発》 このカードがアタックする。 《効果》 あなたのトラッシュを2枚選び、除外してよい。2枚除外したならば、あなたのキープを1枚選び、手札に戻し、あなたのエリアにある 《ノイ》 を1枚選び、そのキャラの 《EXP》 をすべて除外し、キープに置く。<br><br>《自》 《有効》 エリア 《誘発》 《アタック成功》 《効果》 トラッシュかリムーブにある、あなたの 《魔法》 を持つイベントを1枚選び、手札に戻してよい。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB04-043", //ID
		"img/cardimg/VB04-043.png", //SRC
		"おっきい方はいただきっす♪", //NAME
		"UC", //RARE
		"ミッションカード", //TYPE
		"", //COST
		"", //COSTDOWN
		"", //POWER
		"C", //MISSION
		"ファンタジー", //FEATURE
		"ノイ", //ACCOUNT
		"", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《チェック》 《有効》 《自分ターン》 《条件》 ①このターンに、あなたのエリアで 《ノイ》 が 《アタック成功》 した時、あなたの 《エネミー》 が“ 《自》 討伐”によって2回退場する。<br><br>《クリア》 《有効》 《スリープ》 《条件》 ①このカードがあるレーンに相手のキャラがない。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB04-044", //ID
		"img/cardimg/VB04-044.png", //SRC
		"強敵との遭遇 ノイ", //NAME
		"C", //RARE
		"キャラカード", //TYPE
		"1", //COST
		"0", //COSTDOWN
		"1000", //POWER
		"D", //MISSION
		"ファンタジー", //FEATURE
		"ノイ", //ACCOUNT
		"1", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エリア 《誘発》 《登場時》 《効果》 あなたのすべてのエリアにキャラがある場合、あなたの手札を1枚選び、除外してよい。除外したならば、2枚引く。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB04-045", //ID
		"img/cardimg/VB04-045.png", //SRC
		"双剣の使い手 ノイ", //NAME
		"C", //RARE
		"キャラカード", //TYPE
		"2", //COST
		"0", //COSTDOWN
		"2000", //POWER
		"D", //MISSION
		"ファンタジー", //FEATURE
		"ノイ", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エリア 《誘発》 《登場時》 《効果》 あなたのデッキの上から5枚公開し、その中にある 《ノイ》 を1枚選び、除外する。残りを好きな順番でデッキの下に置く。<br><br>《自》 《有効》 《自分ターン》 《EXP》 《誘発》 このカードがエリアからキャラの 《EXP》 になる。 《効果》 あなたのエネルギーを1枚選び、トラッシュに置いてよい。置いたならば、このカードをキャラがないエリアに 《スリープ》 で登場させる。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB04-046", //ID
		"img/cardimg/VB04-046.png", //SRC
		"最後に勝つのはボク！", //NAME
		"UC", //RARE
		"ミッションカード", //TYPE
		"", //COST
		"", //COSTDOWN
		"", //POWER
		"D", //MISSION
		"ファンタジー", //FEATURE
		"ノイ", //ACCOUNT
		"", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《チェック》 《有効》 《自分ターン》 《条件》 ①あなたのエリアでカード名に「マスター」を含む 《ノイ》 が 《アタック成功》 した時、あなたのカード名に「ボス」を含む 《エネミー》 が“ 《自》 討伐”によって退場する。<br><br>《クリア》 《有効》 《スリープ》 《条件》 ①このカードがあるレーンに相手のキャラがない。②あなたのエリアに、このターンに 《アタック成功》 しているカード名に「マスター」を含む 《ノイ》 がある。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB04-047", //ID
		"img/cardimg/VB04-047.png", //SRC
		"ザクザク☆てんぺすと", //NAME
		"R", //RARE
		"イベントカード", //TYPE
		"1", //COST
		"", //COSTDOWN
		"", //POWER
		"☆", //MISSION
		"ファンタジー/魔法", //FEATURE
		"ノイ", //ACCOUNT
		"", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《イベント》 《効果》 あなたのキープを1枚選び、手札に戻す。あなたのエリアにある 《ノイ》 を1枚選び、そのキャラの 《EXP》 をすべて除外し、キープに置く。<br><br>《自》 詠唱： 《ファンタジー》 を持つ 《ノイ》 <br>（ 《有効》 リムーブ 《誘発》 あなたの 《ファンタジー》 を持つ 《ノイ》 が 《アタック成功》 する。 《効果》 このカードをコストを支払わずにプレイしてよい。）<br><br>《起》 《有効》 《自分ターン》 手札 《コスト》 このカードを除外する。 《効果》 あなたのデッキの上から5枚公開し、その中にある 《エネミー》 のキャラを1枚選び、デッキの上に置く。残りを好きな順番でデッキの下に置く。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB04-048", //ID
		"img/cardimg/VB04-048.png", //SRC
		"サタニックマスター ノイ", //NAME
		"SR", //RARE
		"キャラカード", //TYPE
		"8", //COST
		"0", //COSTDOWN
		"11000", //POWER
		"☆", //MISSION
		"ファンタジー", //FEATURE
		"ノイ", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《常》 《有効》 エリア 《効果》 あなたのすべてのエリアにキャラがある場合、相手は元々のコストが1以下のカードをプレイできない。<br><br>《起》 《有効》 《自分ターン》 リムーブ 《コスト》 あなたのトラッシュにある 《エネミー》 を2枚除外する。 《効果》 この能力はあなたのエリアに 《エネミー》 があり、 《同名》 がない場合にしかプレイできない。あなたの手札を1枚選び、トラッシュに置き、このカードを 《リブート》 で登場させる。あなたのリムーブが8枚未満の場合、このカードをトラッシュに置く。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB04-049", //ID
		"img/cardimg/VB04-049.png", //SRC
		"魔法の才能 ルミナ・マーリン", //NAME
		"C", //RARE
		"キャラカード", //TYPE
		"10", //COST
		"0", //COSTDOWN
		"3000", //POWER
		"C", //MISSION
		"ファンタジー", //FEATURE
		"ストリーマー", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 リムーブ 《誘発》 あなたのコスト6以上の 《ファンタジー》 を持つキャラが 《アタック成功》 する。 《効果》 あなたのエネルギーを3枚選び、トラッシュに置いてよい。3枚置いたならば、このカードを 《リブート》 で登場させる。ミッションフェイズ終了時まで、あなたは 《同名》 のこの能力をプレイできない。<br><br>《自》 《有効》 エリア 《誘発》 《アタック成功》 《効果》 以下の効果を0～2回解決する。“あなたのリムーブにあるコスト5以下の 《ファンタジー》 を持つイベントを1枚選び、コストを支払わずにプレイする。”", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB04-050", //ID
		"img/cardimg/VB04-050.png", //SRC
		"小さな大魔導士", //NAME
		"UC", //RARE
		"ミッションカード", //TYPE
		"", //COST
		"", //COSTDOWN
		"", //POWER
		"C", //MISSION
		"ファンタジー", //FEATURE
		"ストリーマー", //ACCOUNT
		"", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《チェック》 《有効》 《自分ターン》 《条件》 ①このカードがあるレーンでこのターンに、リムーブから登場したあなたの「魔法の才能 ルミナ・マーリン」が 《アタック成功》 する。<br><br>《クリア》 《有効》 《スリープ》 《条件》 ❶このカードがあるレーンに相手のキャラがない。❷このターンに、あなたがリムーブから異なるカード名のイベントを4回以上プレイしている。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB04-051", //ID
		"img/cardimg/VB04-051.png", //SRC
		"リヴィングテイマー 煌凛香", //NAME
		"C", //RARE
		"キャラカード", //TYPE
		"2", //COST
		"0", //COSTDOWN
		"1000", //POWER
		"D", //MISSION
		"ファンタジー", //FEATURE
		"ストリーマー", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《常》 《有効》 エリア 《効果》 あなたの 《エネミー》 は“ 《自》 討伐”によって退場しない。<br><br>《起》 《有効》 エリア 《コスト》 このカードを除外する。 《効果》 あなたのデッキの上から4枚公開し、その中にある 《エネミー》 のキャラを0～3枚選び、それぞれ別々のキャラがないエリアに 《リブート》 で登場させる。残りを元に戻し、シャッフルする。<br><br>《起》 《有効》 《自分ターン》 リムーブ 《コスト》 トラッシュかリムーブにある、あなたの 《エネミー》 を3枚好きな順番でデッキの下に置く。 《効果》 このカードを手札に戻し、あなたのデッキをシャッフルする。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB04-052", //ID
		"img/cardimg/VB04-052.png", //SRC
		"生命即我隷也", //NAME
		"UC", //RARE
		"ミッションカード", //TYPE
		"", //COST
		"", //COSTDOWN
		"", //POWER
		"D", //MISSION
		"ファンタジー", //FEATURE
		"ストリーマー", //ACCOUNT
		"", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《チェック》 《有効》 《自分ターン》 《条件》 ①このターンに、あなたのエリアで異なるカード名の 《エネミー》 が2回 《アタック成功》 する。<br><br>《クリア》 《有効》 《スリープ》 《条件》 ❶このカードがあるレーンに相手のキャラがない。❷あなたのエリアに「リヴィングテイマー 煌凛香」と 《エネミー》 がある。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB04-053", //ID
		"img/cardimg/VB04-053.png", //SRC
		"えとセトラ戦闘班 ライラ", //NAME
		"UC", //RARE
		"キャラカード", //TYPE
		"0", //COST
		"0", //COSTDOWN
		"500", //POWER
		"☆", //MISSION
		"ファンタジー", //FEATURE
		"ストリーマー", //ACCOUNT
		"1", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《常》 《有効》 《自分ターン》 《EXP》 《効果》 このカードを 《EXP》 に持つキャラがカード名に「えとセトラ」を含む場合、パワーを＋2000する。 《同名》 のこの能力は重複しない。<br><br>《自》 《有効》 エリア 《誘発》 《登場時》 《効果》 エリアにこのカードよりもコストが高いキャラがある場合、以下の効果から1つ選び、解決する。▶相手のエリアにあるキャラを1枚選び、2000ダメージを与える。▶1枚引く。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB04-054", //ID
		"img/cardimg/VB04-054.png", //SRC
		"えとセトラ調査班 ククル", //NAME
		"UC", //RARE
		"キャラカード", //TYPE
		"0", //COST
		"0", //COSTDOWN
		"500", //POWER
		"☆", //MISSION
		"ファンタジー", //FEATURE
		"ストリーマー", //ACCOUNT
		"1", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《常》 《有効》 センター 《効果》 相手のサイドにあるキャラはスライドできない。<br><br>《常》 《有効》 《自分ターン》 《EXP》 《効果》 このカードを 《EXP》 に持つキャラが 《ストリーマー》 の場合、そのキャラに以下の能力を与える。“ 《常》 《有効》 エリア 《効果》 相手はこのカードをこのカードの元々のコスト以下のカードの能力で選ぶことができない。”", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB04-055", //ID
		"img/cardimg/VB04-055.png", //SRC
		"看板娘のオススメ！", //NAME
		"R", //RARE
		"イベントカード", //TYPE
		"1", //COST
		"", //COSTDOWN
		"", //POWER
		"☆", //MISSION
		"ファンタジー", //FEATURE
		"ストリーマー", //ACCOUNT
		"", //BAN
		"1", //SCOUT
		"", //MAINTENANCE
		"《イベント》 《効果》 あなたのエリアにあるキャラを1枚選び、トラッシュに置く。置いたならば、以下の効果から1つ選び、解決する。▶1枚引く。▶あなたのトラッシュを0～5枚選び、除外する。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB04-056", //ID
		"img/cardimg/VB04-056.png", //SRC
		"シャイニング・エレメント", //NAME
		"UC", //RARE
		"イベントカード", //TYPE
		"1", //COST
		"", //COSTDOWN
		"", //POWER
		"☆", //MISSION
		"ファンタジー", //FEATURE
		"ストリーマー", //ACCOUNT
		"", //BAN
		"1", //SCOUT
		"", //MAINTENANCE
		"《イベント》 《効果》 あなたのキープを1枚選び、エネルギーに置く。このカードをキープに置く。<br><br>《自》 《有効》 《相手ターン》 キープ 《誘発》 スタートドローフェイズ開始時。 《効果》 お互いに手札をすべてトラッシュに置く。<br><br>《自》 《有効》 《相手ターン》 キープ 《誘発》 メインフェイズ開始時。 《効果》 このカードをトラッシュに置き、2枚引く。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB04-057", //ID
		"img/cardimg/VB04-057.png", //SRC
		"Δシスターズ 切れ者術士ルト", //NAME
		"UC", //RARE
		"キャラカード", //TYPE
		"1", //COST
		"0", //COSTDOWN
		"1000", //POWER
		"☆", //MISSION
		"ファンタジー", //FEATURE
		"ストリーマー", //ACCOUNT
		"1", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《起》 《有効》 エリア 《コスト》 《スリープ》 する。 《効果》 1枚引き、あなたの手札にあるコスト3以下のカードを1枚選び、公開してよい。公開したならば、そのカードをデッキの上に置く。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB04-058", //ID
		"img/cardimg/VB04-058.png", //SRC
		"ホーリー・サークル", //NAME
		"C", //RARE
		"イベントカード", //TYPE
		"1", //COST
		"", //COSTDOWN
		"", //POWER
		"☆", //MISSION
		"ファンタジー", //FEATURE
		"ストリーマー", //ACCOUNT
		"", //BAN
		"1", //SCOUT
		"", //MAINTENANCE
		"《イベント》 《効果》 相手のキープを1枚選び、トラッシュに置く。 《リロード》<br>（あなたのトラッシュにあるすべてのキャラをデッキに戻し、シャッフルする。）", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB04-059", //ID
		"img/cardimg/VB04-059.png", //SRC
		"えとセトラ調査班 パロメ", //NAME
		"UC", //RARE
		"キャラカード", //TYPE
		"2", //COST
		"0", //COSTDOWN
		"3000", //POWER
		"☆", //MISSION
		"ファンタジー", //FEATURE
		"ストリーマー", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《常》 《有効》 《自分ターン》 《EXP》 《効果》 このカードを 《EXP》 に持つキャラがカード名に「えとセトラ」を含む場合、パワーを＋2000する。 《同名》 のこの能力は重複しない。<br><br>《自》 《有効》 《相手ターン》 エリア 《誘発》 キャラがアタックする。 《効果》 あなたのキープが1枚もない場合、このカードを除外してよい。除外したならば、あなたのトラッシュにあるコスト3以上の 《ストリーマー》 を1枚選び、キープに置く。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB04-060", //ID
		"img/cardimg/VB04-060.png", //SRC
		"ビブリヨテック", //NAME
		"SR", //RARE
		"イベントカード", //TYPE
		"2", //COST
		"", //COSTDOWN
		"", //POWER
		"☆", //MISSION
		"ファンタジー", //FEATURE
		"ストリーマー", //ACCOUNT
		"", //BAN
		"1", //SCOUT
		"", //MAINTENANCE
		"《イベント》 《効果》 あなたの手札をすべてデッキに戻し、シャッフルする。7枚引く。ミッションフェイズ終了時まで、あなたはカードの能力で引くことはできない。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB04-061", //ID
		"img/cardimg/VB04-061.png", //SRC
		"ボルテックバースト", //NAME
		"C", //RARE
		"イベントカード", //TYPE
		"2", //COST
		"", //COSTDOWN
		"", //POWER
		"☆", //MISSION
		"ファンタジー", //FEATURE
		"ストリーマー", //ACCOUNT
		"", //BAN
		"1", //SCOUT
		"", //MAINTENANCE
		"《イベント》 《効果》 あなたのデッキの上から1枚公開する。相手のエリアにある公開したカードのコスト以下のキャラを1枚選び、退場させる。公開したカードを除外する。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB04-062", //ID
		"img/cardimg/VB04-062.png", //SRC
		"分かち合いの契約", //NAME
		"R", //RARE
		"イベントカード", //TYPE
		"2", //COST
		"", //COSTDOWN
		"", //POWER
		"☆", //MISSION
		"ファンタジー", //FEATURE
		"ストリーマー", //ACCOUNT
		"", //BAN
		"1", //SCOUT
		"", //MAINTENANCE
		"《イベント》 《効果》 あなたのキープを1枚選び、エネルギーに置く。このカードをキープに置く。<br><br>《自》 《有効》 キープ 《誘発》 相手がカードの能力で引く。 《効果》 あなたのデッキの上から1枚見て、そのカードを手札に加えるかデッキの上に置く。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB04-063", //ID
		"img/cardimg/VB04-063.png", //SRC
		"えとセトラ戦闘班 プルスティ", //NAME
		"C", //RARE
		"キャラカード", //TYPE
		"3", //COST
		"0", //COSTDOWN
		"5000", //POWER
		"☆", //MISSION
		"ファンタジー", //FEATURE
		"ストリーマー", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《常》 《有効》 手札かキープ 《効果》 あなたのすべてのエリアにキャラがある場合、このカードのコストを－3する。<br><br>《常》 《有効》 《自分ターン》 《EXP》 《効果》 このカードを 《EXP》 に持つキャラのパワーを＋1000する。<br><br>《自》 《有効》 エリア 《誘発》 このカードが退場する。 《効果》 2枚引き、あなたの手札を2枚選び、デッキに戻し、シャッフルする。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB04-064", //ID
		"img/cardimg/VB04-064.png", //SRC
		"サドンエンカウント", //NAME
		"UC", //RARE
		"イベントカード", //TYPE
		"3", //COST
		"", //COSTDOWN
		"", //POWER
		"☆", //MISSION
		"ファンタジー", //FEATURE
		"ストリーマー", //ACCOUNT
		"", //BAN
		"1", //SCOUT
		"", //MAINTENANCE
		"《イベント》 《効果》 あなたのデッキを見て、その中にある 《エネミー》 のキャラを1枚選び、キャラがないエリアに 《スリープ》 で登場させてよい。残りを元に戻し、シャッフルする。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB04-065", //ID
		"img/cardimg/VB04-065.png", //SRC
		"ハッピーワークス", //NAME
		"C", //RARE
		"イベントカード", //TYPE
		"3", //COST
		"", //COSTDOWN
		"", //POWER
		"☆", //MISSION
		"ファンタジー", //FEATURE
		"ストリーマー", //ACCOUNT
		"", //BAN
		"1", //SCOUT
		"", //MAINTENANCE
		"《イベント》 《有効》 《自分ターン》 《効果》 あなたのデッキを見て、その中にあるカードを0～3枚選び、公開し、手札に加える。残りを元に戻し、シャッフルする。ミッションフェイズ終了時まで、あなたはカードのプレイと 《起》 能力のプレイ、キャラのアタックをすることはできない。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB04-066", //ID
		"img/cardimg/VB04-066.png", //SRC
		"ホスピタリティアフェクション", //NAME
		"UC", //RARE
		"イベントカード", //TYPE
		"3", //COST
		"", //COSTDOWN
		"", //POWER
		"☆", //MISSION
		"ファンタジー", //FEATURE
		"ストリーマー", //ACCOUNT
		"", //BAN
		"1", //SCOUT
		"", //MAINTENANCE
		"《イベント》 《効果》 あなたのキープを1枚選び、エネルギーに置く。このカードをキープに置く。<br><br>《自》 《有効》 《相手ターン》 キープ 《誘発》 キャラが登場する。 《効果》 このカードをトラッシュに置き、相手のエリアにあるこのターンに登場したキャラを1枚選び、 《スリープ》 する。ミッションフェイズ開始時、この能力で 《スリープ》 したキャラを 《リブート》 する。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB04-067", //ID
		"img/cardimg/VB04-067.png", //SRC
		"キューブアルケミー プルア・ハイン", //NAME
		"SR", //RARE
		"キャラカード", //TYPE
		"4", //COST
		"1", //COSTDOWN
		"4000", //POWER
		"☆", //MISSION
		"ファンタジー", //FEATURE
		"ストリーマー", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《常》 《有効》 エリア 《効果》 相手はこのカードの 《EXP》 にあるカードのコストと、元々のコストが同じコストのイベントをプレイできない。<br><br>《自》 《有効》 エリア 《誘発》 《登場時》 《効果》 このカードの 《EXP》 を1枚選び、トラッシュに置く。あなたのトラッシュにあるカードを1枚選び、このカードの 《EXP》 にする。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB04-068", //ID
		"img/cardimg/VB04-068.png", //SRC
		"Δシスターズ 本気の拳士アト", //NAME
		"C", //RARE
		"キャラカード", //TYPE
		"5", //COST
		"1", //COSTDOWN
		"7000", //POWER
		"☆", //MISSION
		"ファンタジー", //FEATURE
		"ストリーマー", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エリア 《誘発》 このカードが退場する。 《効果》 1枚引く。 《リロード》<br>（あなたのトラッシュにあるすべてのキャラをデッキに戻し、シャッフルする。）<br><br>《起》 《有効》 《ターン1》 エリア 《コスト》 このカードの 《EXP》 を1枚トラッシュに置く。 《効果》 相手のエリアにあるキャラを1枚選び、4000ダメージを与える。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB04-069", //ID
		"img/cardimg/VB04-069.png", //SRC
		"えとセトラ調査班 スレイ", //NAME
		"C", //RARE
		"キャラカード", //TYPE
		"5", //COST
		"1", //COSTDOWN
		"5000", //POWER
		"☆", //MISSION
		"ファンタジー", //FEATURE
		"ストリーマー", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《常》 《有効》 《自分ターン》 《EXP》 《効果》 このカードを 《EXP》 に持つキャラがカード名に「えとセトラ」を含む場合、パワーを＋2000する。 《同名》 のこの能力は重複しない。<br><br>《自》 《有効》 《相手ターン》 キープ 《誘発》 あなたのキャラが退場する。 《効果》 このカードを 《スリープ》 で登場させてよい。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB04-070", //ID
		"img/cardimg/VB04-070.png", //SRC
		"決死の反撃", //NAME
		"R", //RARE
		"イベントカード", //TYPE
		"5", //COST
		"", //COSTDOWN
		"", //POWER
		"☆", //MISSION
		"ファンタジー", //FEATURE
		"ストリーマー", //ACCOUNT
		"", //BAN
		"1", //SCOUT
		"", //MAINTENANCE
		"《イベント》 《有効》 《相手ターン》 《効果》 あなたのエリアにあるキャラを1枚選び、手札に戻してよい。戻したならば、相手のエリアにあるキャラを1枚選び、退場させる。<br><br>《起》 《有効》 《相手ターン》 キープ 《コスト》 このカードをトラッシュに置く。 《効果》 あなたのエリアにあるキャラを1枚選び、手札に戻してよい。戻したならば、相手のエリアにあるコスト5以下のキャラを1枚選び、退場させる。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB04-071", //ID
		"img/cardimg/VB04-071.png", //SRC
		"魔女の大鍋", //NAME
		"C", //RARE
		"イベントカード", //TYPE
		"6", //COST
		"", //COSTDOWN
		"", //POWER
		"☆", //MISSION
		"ファンタジー", //FEATURE
		"ストリーマー", //ACCOUNT
		"", //BAN
		"1", //SCOUT
		"", //MAINTENANCE
		"《イベント》 《有効》 《相手ターン》 《効果》 相手の手札とエネルギーをすべて入れ替える。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB04-072", //ID
		"img/cardimg/VB04-072.png", //SRC
		"えとセトラ調査班 ハニュマ", //NAME
		"UC", //RARE
		"キャラカード", //TYPE
		"7", //COST
		"1", //COSTDOWN
		"9000", //POWER
		"☆", //MISSION
		"ファンタジー", //FEATURE
		"ストリーマー", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エリア 《誘発》 《登場時》 《効果》 相手のキープを1枚選び、トラッシュに置く。<br><br>《自》 《有効》 エリア 《誘発》 《アタック成功》 《効果》 相手のキープが1枚もない場合、1枚引く。<br><br>《起》 《有効》 手札 《コスト》 なし 《効果》 あなたのエリアにあるカード名に「えとセトラ」を含むキャラを1枚選び、このカードをそのキャラの 《EXP》 にする。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB04-073", //ID
		"img/cardimg/VB04-073.png", //SRC
		"我、天啓を得たり", //NAME
		"UC", //RARE
		"イベントカード", //TYPE
		"7", //COST
		"", //COSTDOWN
		"", //POWER
		"☆", //MISSION
		"ファンタジー", //FEATURE
		"ストリーマー", //ACCOUNT
		"", //BAN
		"1", //SCOUT
		"", //MAINTENANCE
		"《イベント》 《効果》 ミッションフェイズ終了時まで、次に相手がプレイするイベントの“ 《効果》 ”を無視する。<br><br>《起》 《有効》 《相手ターン》 キープ 《コスト》 このカードをトラッシュに置く。 《効果》 ミッションフェイズ終了時まで、次に相手がリムーブ以外からプレイするイベントの“ 《効果》 ”を無視する。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB04-074", //ID
		"img/cardimg/VB04-074.png", //SRC
		"大空舞う妖鳥 ハーピィ", //NAME
		"UC", //RARE
		"キャラカード", //TYPE
		"50", //COST
		"0", //COSTDOWN
		"4000", //POWER
		"☆", //MISSION
		"ファンタジー", //FEATURE
		"エネミー", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 エンカウント<br><br>《自》 討伐：コスト4以上の 《エネミー》 でないキャラ<br><br>《自》 《有効》 《自分ターン》 エリア 《誘発》 このカードが“ 《自》 討伐”によって退場する。 《効果》 あなたのエネルギーを2枚選び、除外してよい。2枚除外したならば、あなたのデッキの上から10枚見て、その中にある 《同名》 以外のキャラを1枚選び、エネルギーに置き、残りを元に戻し、シャッフルする。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB04-075", //ID
		"img/cardimg/VB04-075.png", //SRC
		"誑かす妖花 アルラウネ", //NAME
		"C", //RARE
		"キャラカード", //TYPE
		"70", //COST
		"0", //COSTDOWN
		"8000", //POWER
		"☆", //MISSION
		"ファンタジー", //FEATURE
		"エネミー", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 エンカウント<br>（ 《有効》 エネルギー 《誘発》 このカードがデッキからエネルギーに置かれる。 《効果》 このカードをキャラがないエリアに 《スリープ》 で登場させる。）<br><br>《自》 討伐：コスト3の 《エネミー》 でないキャラ<br>（ 《有効》 エリア 《誘発》 コスト3の 《エネミー》 でないキャラが 《アタック成功》 する。 《効果》 このカードを退場させる。）<br><br>《自》 《有効》 《自分ターン》 エリア 《誘発》 このカードが“ 《自》 討伐”によって退場する。 《効果》 1回 《スカウト》 する。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB04-076", //ID
		"img/cardimg/VB04-076.png", //SRC
		"絡みつく妖蛇 ラミア", //NAME
		"C", //RARE
		"キャラカード", //TYPE
		"80", //COST
		"0", //COSTDOWN
		"9500", //POWER
		"☆", //MISSION
		"ファンタジー", //FEATURE
		"エネミー", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 エンカウント<br>（ 《有効》 エネルギー 《誘発》 このカードがデッキからエネルギーに置かれる。 《効果》 このカードをキャラがないエリアに 《スリープ》 で登場させる。）<br><br>《自》 討伐：コスト3以下の 《エネミー》 でないキャラ<br>（ 《有効》 エリア 《誘発》 コスト3以下の 《エネミー》 でないキャラが 《アタック成功》 する。 《効果》 このカードを退場させる。）<br><br>《自》 《有効》 《自分ターン》 エリア 《誘発》 このカードが“ 《自》 討伐”によって退場する。 《効果》 1枚引く。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB04-077", //ID
		"img/cardimg/VB04-077.png", //SRC
		"疾駆する鎧斧 アガレス", //NAME
		"C", //RARE
		"キャラカード", //TYPE
		"90", //COST
		"0", //COSTDOWN
		"10000", //POWER
		"☆", //MISSION
		"ファンタジー", //FEATURE
		"エネミー", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 エンカウント<br>（ 《有効》 エネルギー 《誘発》 このカードがデッキからエネルギーに置かれる。 《効果》 このカードをキャラがないエリアに 《スリープ》 で登場させる。）<br><br>《自》 討伐：コスト4以上の 《エネミー》 でないキャラ<br>（ 《有効》 エリア 《誘発》 コスト4以上の 《エネミー》 でないキャラが 《アタック成功》 する。 《効果》 このカードを退場させる。）<br><br>《自》 《有効》 《自分ターン》 エリア 《誘発》 このカードが“ 《自》 討伐”によって退場する。 《効果》 ミッションフェイズ終了時まで、現在相手のすべてのエリアにあるキャラのパワーを－2000する。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB04-078", //ID
		"img/cardimg/VB04-078.png", //SRC
		"紅き夜に嗤うボス 魔王", //NAME
		"R", //RARE
		"キャラカード", //TYPE
		"130", //COST
		"0", //COSTDOWN
		"15000", //POWER
		"☆", //MISSION
		"ファンタジー", //FEATURE
		"エネミー", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《常》 《有効》 エリア 《効果》 このカードはスライドできない。<br><br>《自》 エンカウント<br><br>《自》 討伐：カード名に「マスター」を含む 《エネミー》 でないキャラ<br><br>《自》 《有効》 《自分ターン》 エリア 《誘発》 このカードが“ 《自》 討伐”によって退場する。 《効果》 相手は自分の手札にあるカードを1枚選び、選ばなかったカードをすべてトラッシュに置く。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB04-079", //ID
		"img/cardimg/VB04-079.png", //SRC
		"火山揺るがすボス ドラゴン", //NAME
		"R", //RARE
		"キャラカード", //TYPE
		"130", //COST
		"0", //COSTDOWN
		"15000", //POWER
		"☆", //MISSION
		"ファンタジー", //FEATURE
		"エネミー", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《常》 《有効》 エリア 《効果》 このカードはスライドできない。<br><br>《自》 エンカウント<br><br>《自》 討伐：パワーが11000以上のコスト7以上の 《エネミー》 でないキャラ<br><br>《自》 《有効》 《自分ターン》 エリア 《誘発》 このカードが“ 《自》 討伐”によって退場する。 《効果》 相手のエリアにあるキャラを1枚選び、8000ダメージを与える。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VB04-080", //ID
		"img/cardimg/VB04-080.png", //SRC
		"荒野踏み鳴らすボス ケルベロス", //NAME
		"R", //RARE
		"キャラカード", //TYPE
		"130", //COST
		"0", //COSTDOWN
		"15000", //POWER
		"☆", //MISSION
		"ファンタジー", //FEATURE
		"エネミー", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《常》 《有効》 エリア 《効果》 このカードはスライドできない。<br><br>《自》 エンカウント<br><br>《自》 討伐： 《EXP》 が4枚以上あるコスト6以上の 《エネミー》 でないキャラ<br><br>《自》 《有効》 《自分ターン》 エリア 《誘発》 このカードが“ 《自》 討伐”によって退場する。 《効果》 0～3枚引く。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VE01-001", //ID
		"img/cardimg/VE01-001.png", //SRC
		"ホーリープレゼント キョウカ", //NAME
		"R", //RARE
		"キャラカード", //TYPE
		"0", //COST
		"0", //COSTDOWN
		"500", //POWER
		"A", //MISSION
		"サイバー", //FEATURE
		"キョウカ/クリスマス", //ACCOUNT
		"1", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 《EXP》 《誘発》 このカードがエリアから 《キョウカ》 か 《クリスマス》 の 《EXP》 になる。 《効果》 相手のセンターにあるキャラを1枚選び、ミッションフェイズ終了時まで、相手はそのキャラをスライドできない。あなたは「クリスマス」カウンターを1個得る。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VE01-002", //ID
		"img/cardimg/VE01-002.png", //SRC
		"ホーリーブレイク キョウカ", //NAME
		"R", //RARE
		"キャラカード", //TYPE
		"2", //COST
		"0", //COSTDOWN
		"3000", //POWER
		"A", //MISSION
		"サイバー", //FEATURE
		"キョウカ/クリスマス", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エリア 《誘発》 《アタック成功》 《効果》 あなたは「クリスマス」カウンターを1個得る。このカードに 《EXP》 【「ホーリープレゼント キョウカ」】がある場合、あなたは「クリスマス」カウンターを1個得る。<br><br>《自》 《有効》 エリア 《誘発》 このカードがバトルによって相手のキャラを退場させる。 《効果》 あなたのトラッシュにある「アタシのクリスマス キョウカ」を1枚選び、手札に戻してよい。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VE01-003", //ID
		"img/cardimg/VE01-003.png", //SRC
		"ホーリークラッシュ！", //NAME
		"R", //RARE
		"イベントカード", //TYPE
		"3", //COST
		"", //COSTDOWN
		"", //POWER
		"A", //MISSION
		"サイバー", //FEATURE
		"キョウカ/クリスマス", //ACCOUNT
		"", //BAN
		"1", //SCOUT
		"", //MAINTENANCE
		"《イベント》 《効果》 相手のエリアにあるキャラを1枚選び、あなたのエリアにあるパワーの1番高い 《クリスマス》 のキャラのパワーと等しいダメージを与える。<br><br>《常》 《有効》 手札かキープ 《効果》 このカードをプレイする際、コストを支払うかわりにあなたの「クリスマス」カウンターを2個消費してよい。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VE01-004", //ID
		"img/cardimg/VE01-004.png", //SRC
		"最強サンタ、ミッション完了！", //NAME
		"R", //RARE
		"ミッションカード", //TYPE
		"", //COST
		"", //COSTDOWN
		"", //POWER
		"A", //MISSION
		"サイバー", //FEATURE
		"キョウカ/クリスマス", //ACCOUNT
		"", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 《相手ターン》 ミッション 《誘発》 ミッションフェイズ終了時。 《効果》 あなたは「クリスマス」カウンターを1個得る。<br><br>《チェック》 《有効》 《自分ターン》 《条件》 ①あなたのエリアでパワーが＋12125以上されている「アタシのクリスマス キョウカ」が 《アタック成功》 する。<br><br>《クリア》 《有効》 《スリープ》 《条件》 ❶このカードがあるレーンに相手のキャラがない。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VE01-005", //ID
		"img/cardimg/VE01-005.png", //SRC
		"アタシのクリスマス キョウカ", //NAME
		"SR", //RARE
		"キャラカード", //TYPE
		"4", //COST
		"1", //COSTDOWN
		"3000", //POWER
		"☆", //MISSION
		"サイバー", //FEATURE
		"キョウカ/クリスマス", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《起》 《有効》 《自分ターン》 エリア 《コスト》 あなたの「クリスマス」カウンターを3個消費する。 《効果》 ミッションフェイズ終了時まで、このカードのパワーを＋12125する。<br><br>《起》 《有効》 《自分ターン》 手札 《コスト》 このカードをトラッシュに置く。 《効果》 あなたのエリアにある 《クリスマス》 か 《サイバー》 を持つキャラを1枚選び、ミッションフェイズ終了時まで、パワーを＋2000する。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VE01-006", //ID
		"img/cardimg/VE01-006.png", //SRC
		"フルーツを求めて 玲", //NAME
		"R", //RARE
		"キャラカード", //TYPE
		"0", //COST
		"0", //COSTDOWN
		"500", //POWER
		"A", //MISSION
		"サイバー", //FEATURE
		"玲/クリスマス", //ACCOUNT
		"1", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 《EXP》 《誘発》 このカードがエリアから 《玲》 か 《クリスマス》 の 《EXP》 になる。 《効果》 相手のエリアにあるキャラを1枚選び、スライドしてよい。あなたは「クリスマス」カウンターを1個得る。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VE01-007", //ID
		"img/cardimg/VE01-007.png", //SRC
		"全力クッキング 玲", //NAME
		"R", //RARE
		"キャラカード", //TYPE
		"2", //COST
		"0", //COSTDOWN
		"3000", //POWER
		"A", //MISSION
		"サイバー", //FEATURE
		"玲/クリスマス", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エリア 《誘発》 《アタック成功》 《効果》 あなたは「クリスマス」カウンターを1個得る。このカードに 《EXP》 【「フルーツを求めて 玲」】がある場合、あなたは「クリスマス」カウンターを1個得る。<br><br>《自》 《有効》 エリア 《誘発》 バトルをせず 《アタック成功》 《効果》 あなたのトラッシュにある「私のクリスマス 玲」を1枚選び、手札に戻してよい。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VE01-008", //ID
		"img/cardimg/VE01-008.png", //SRC
		"レシピに忠実、完璧に", //NAME
		"R", //RARE
		"イベントカード", //TYPE
		"2", //COST
		"", //COSTDOWN
		"", //POWER
		"A", //MISSION
		"サイバー", //FEATURE
		"玲/クリスマス", //ACCOUNT
		"", //BAN
		"1", //SCOUT
		"", //MAINTENANCE
		"《イベント》 《効果》 相手のエリアにあるコスト2以下のキャラを1枚選び、手札に戻す。<br><br>《常》 《有効》 手札かキープ 《効果》 このカードをプレイする際、コストを支払うかわりにあなたの「クリスマス」カウンターを1個消費してよい。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VE01-009", //ID
		"img/cardimg/VE01-009.png", //SRC
		"絢爛の聖夜", //NAME
		"R", //RARE
		"ミッションカード", //TYPE
		"", //COST
		"", //COSTDOWN
		"", //POWER
		"A", //MISSION
		"サイバー", //FEATURE
		"玲/クリスマス", //ACCOUNT
		"", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 《相手ターン》 ミッション 《誘発》 ミッションフェイズ終了時。 《効果》 あなたは「クリスマス」カウンターを1個得る。<br><br>《チェック》 《有効》 《自分ターン》 《条件》 ①このターンに、あなたのエリアで「私のクリスマス 玲」が2回 《アタック成功》 する。<br><br>《クリア》 《有効》 《スリープ》 《条件》 ❶このカードがあるレーンに相手のキャラがない。❷このターンに、あなたのエリアにある「私のクリスマス 玲」が 《玲》 の能力で1回以上手札に戻っている。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VE01-010", //ID
		"img/cardimg/VE01-010.png", //SRC
		"私のクリスマス 玲", //NAME
		"SR", //RARE
		"キャラカード", //TYPE
		"4", //COST
		"1", //COSTDOWN
		"4000", //POWER
		"☆", //MISSION
		"サイバー", //FEATURE
		"玲/クリスマス", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エリア 《誘発》 《アタック成功》 《効果》 あなたの「クリスマス」カウンターを3個消費してよい。3個消費したならば、このカードを手札に戻す。ミッションフェイズ終了時まで、あなたは 《同名》 のこの能力をプレイできない。<br><br>《起》 《有効》 《自分ターン》 手札 《コスト》 このカードをトラッシュに置く。 《効果》 相手のエリアにある 《スリープ》 のキャラを1枚選び、2000ダメージを与える。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VE01-011", //ID
		"img/cardimg/VE01-011.png", //SRC
		"キューティーウェイトレス らぶり", //NAME
		"R", //RARE
		"キャラカード", //TYPE
		"0", //COST
		"0", //COSTDOWN
		"500", //POWER
		"A", //MISSION
		"サイバー", //FEATURE
		"らぶり/クリスマス", //ACCOUNT
		"1", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 《EXP》 《誘発》 このカードがエリアから 《らぶり》 か 《クリスマス》 の 《EXP》 になる。 《効果》 あなたのエリアにあるキャラを1枚選び、スライドしてよい。あなたは「クリスマス」カウンターを1個得る。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VE01-012", //ID
		"img/cardimg/VE01-012.png", //SRC
		"キラキラデコレーション らぶり", //NAME
		"R", //RARE
		"キャラカード", //TYPE
		"3", //COST
		"0", //COSTDOWN
		"5000", //POWER
		"A", //MISSION
		"サイバー", //FEATURE
		"らぶり/クリスマス", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エリア 《誘発》 このカードが手札から登場する。 《効果》 あなたのデッキの上から3枚公開し、その中から 《クリスマス》 のイベント1枚と 《サイバー》 を持つ 《らぶり》 のイベントを1枚ずつ選び、選んだカードを手札に加え、残りを好きな順番でデッキの下に置く。<br><br>《自》 《有効》 センター 《誘発》 《アタック成功》 《効果》 あなたの手札を1枚選び、トラッシュに置いてよい。置いたならば、あなたのトラッシュにある「らぶりのクリスマス らぶり」を1枚選び、手札に戻す。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VE01-013", //ID
		"img/cardimg/VE01-013.png", //SRC
		"クラッカー☆セレブレーション", //NAME
		"R", //RARE
		"イベントカード", //TYPE
		"2", //COST
		"", //COSTDOWN
		"", //POWER
		"A", //MISSION
		"サイバー", //FEATURE
		"らぶり/クリスマス", //ACCOUNT
		"", //BAN
		"1", //SCOUT
		"", //MAINTENANCE
		"《イベント》 《効果》 あなたの「クリスマス」カウンターを3個消費してよい。3個消費したならば、あなたの手札にある「らぶりのクリスマス らぶり」を1枚選び、アタック中のキャラがないエリアに 《リブート》 で登場させてよい。<br><br>《起》 《有効》 《自分ターン》 手札 《コスト》 あなたのエネルギーを1枚トラッシュに置く。 《効果》 このカードをエネルギーに置き、あなたは「クリスマス」カウンターを1個得る。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VE01-014", //ID
		"img/cardimg/VE01-014.png", //SRC
		"#みんなとお祈りタイム♪", //NAME
		"R", //RARE
		"ミッションカード", //TYPE
		"", //COST
		"", //COSTDOWN
		"", //POWER
		"A", //MISSION
		"サイバー", //FEATURE
		"らぶり/クリスマス", //ACCOUNT
		"", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 《相手ターン》 ミッション 《誘発》 ミッションフェイズ終了時。 《効果》 あなたは「クリスマス」カウンターを1個得る。<br><br>《チェック》 《有効》 《自分ターン》 《条件》 ①あなたのエリアで「らぶりのクリスマス らぶり」が 《アタック成功》 する。<br><br>《クリア》 《有効》 《スリープ》 《条件》 ❶このカードがあるレーンに相手のキャラがない。❷あなたのエリアに「らぶりのクリスマス らぶり」が3枚ある。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VE01-015", //ID
		"img/cardimg/VE01-015.png", //SRC
		"らぶりのクリスマス らぶり", //NAME
		"SR", //RARE
		"キャラカード", //TYPE
		"6", //COST
		"1", //COSTDOWN
		"4000", //POWER
		"☆", //MISSION
		"サイバー", //FEATURE
		"らぶり/クリスマス", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《常》 《有効》 センター 《効果》 あなたのエリアに 《同名》 が3枚ある場合、このカードのパワーを＋8000する。<br><br>《自》 《有効》 センター 《誘発》 このカードが 《らぶり》 のイベントの能力で登場する。 《効果》 エネルギーかトラッシュにある、あなたの 《同名》 を0～2枚選び、サイドに 《リブート》 で登場させる。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VE01-016", //ID
		"img/cardimg/VE01-016.png", //SRC
		"ツリーメーカー まりあ", //NAME
		"R", //RARE
		"キャラカード", //TYPE
		"0", //COST
		"0", //COSTDOWN
		"500", //POWER
		"A", //MISSION
		"サイバー", //FEATURE
		"まりあ/クリスマス", //ACCOUNT
		"1", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《起》 《有効》 《自分ターン1》 エリア 《コスト》 あなたの手札にある 《まりあ》 か 《クリスマス》 を1枚このカードの 《EXP》 にする。 《効果》 あなたは「クリスマス」カウンターを1個得る。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VE01-017", //ID
		"img/cardimg/VE01-017.png", //SRC
		"デンジャースライド まりあ", //NAME
		"R", //RARE
		"キャラカード", //TYPE
		"2", //COST
		"0", //COSTDOWN
		"1000", //POWER
		"A", //MISSION
		"サイバー", //FEATURE
		"まりあ/クリスマス", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《起》 《有効》 《自分ターン1》 エリア 《コスト》 あなたの手札を1枚デッキの下に置く。 《効果》 あなたのデッキを見て、その中にある「星をのせたらできあがり まりあ」を1枚選び、公開し、手札に加えてよい。残りを元に戻し、シャッフルする。<br><br>《起》 《有効》 《自分ターン1》 《EXP》 《コスト》 あなたのエネルギーを3枚トラッシュに置く。 《効果》 このカードを 《EXP》 に持つキャラが 《クリスマス》 のキャラの場合、このカードを 《リブート》 で登場させる。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VE01-018", //ID
		"img/cardimg/VE01-018.png", //SRC
		"星をのせたらできあがり まりあ", //NAME
		"R", //RARE
		"キャラカード", //TYPE
		"4", //COST
		"1", //COSTDOWN
		"2000", //POWER
		"A", //MISSION
		"サイバー", //FEATURE
		"まりあ/クリスマス", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《起》 《有効》 《自分ターン》 手札かキープ 《コスト》 あなたの「クリスマス」カウンターを3個消費する。 《効果》 あなたのエリアにあるコスト4以上の 《まりあ》 を1枚選ぶ。選んだならば、このカードをそのキャラの 《EXP》 にし、あなたの手札から「わたしのクリスマス まりあ」を1枚選び、 《リブート》 で登場させてよい。<br><br>《起》 《有効》 《自分ターン1》 エリア 《コスト》 なし 《効果》 このカードが 《スリープ》 の場合、あなたのトラッシュにある「わたしのクリスマス まりあ」を1枚選び、手札に戻す。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VE01-019", //ID
		"img/cardimg/VE01-019.png", //SRC
		"ハートフル・ホーリーナイト", //NAME
		"R", //RARE
		"ミッションカード", //TYPE
		"", //COST
		"", //COSTDOWN
		"", //POWER
		"A", //MISSION
		"サイバー", //FEATURE
		"まりあ/クリスマス", //ACCOUNT
		"", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 《相手ターン》 ミッション 《誘発》 ミッションフェイズ終了時。 《効果》 あなたは「クリスマス」カウンターを1個得る。<br><br>《チェック》 《有効》 《自分ターン》 《条件》 ①あなたの「星をのせたらできあがり まりあ」の能力で「わたしのクリスマス まりあ」が登場する。<br><br>《クリア》 《有効》 《スリープ》 《条件》 ❶このカードがあるレーンに相手のキャラがない。❷このターンに、あなたのエリアで「わたしのクリスマス まりあ」が 《アタック成功》 している。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VE01-020", //ID
		"img/cardimg/VE01-020.png", //SRC
		"わたしのクリスマス まりあ", //NAME
		"SR", //RARE
		"キャラカード", //TYPE
		"8", //COST
		"1", //COSTDOWN
		"10000", //POWER
		"☆", //MISSION
		"サイバー", //FEATURE
		"まりあ/クリスマス", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《起》 《有効》 《自分ターン1》 エリア 《コスト》 あなたのエネルギーを1枚このカードの 《EXP》 にする。 《効果》 このターンに、このカードが 《アタック成功》 している場合、相手のすべてのエリアにあるキャラにこのカードの 《EXP》 2枚につき1000ダメージを与える。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VE01-021", //ID
		"img/cardimg/VE01-021.png", //SRC
		"スノー・ナイト シェリー", //NAME
		"R", //RARE
		"キャラカード", //TYPE
		"0", //COST
		"0", //COSTDOWN
		"500", //POWER
		"A", //MISSION
		"サイバー", //FEATURE
		"シェリー/クリスマス", //ACCOUNT
		"1", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 《EXP》 《誘発》 このカードがエリアから 《シェリー》 か 《クリスマス》 の 《EXP》 になる。 《効果》 あなたのキープを1枚選び、手札に戻し、あなたの手札を1枚選び、キープに置く。あなたは「クリスマス」カウンターを1個得る。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VE01-022", //ID
		"img/cardimg/VE01-022.png", //SRC
		"エモーション・ナイト シェリー", //NAME
		"R", //RARE
		"キャラカード", //TYPE
		"3", //COST
		"0", //COSTDOWN
		"5000", //POWER
		"A", //MISSION
		"サイバー", //FEATURE
		"シェリー/クリスマス", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エリア 《誘発》 《アタック成功》 《効果》 あなたは「クリスマス」カウンターを1個得る。<br><br>《起》 《有効》 エリア 《コスト》 あなたのキープを1枚トラッシュに置く。 《効果》 あなたのトラッシュにある「ウチのクリスマス シェリー」を1枚選び、手札に戻す。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VE01-023", //ID
		"img/cardimg/VE01-023.png", //SRC
		"ジングル・ナイト シェリー", //NAME
		"R", //RARE
		"キャラカード", //TYPE
		"5", //COST
		"1", //COSTDOWN
		"7000", //POWER
		"A", //MISSION
		"サイバー", //FEATURE
		"シェリー/クリスマス", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エリア 《誘発》 《アタック成功》 《効果》 あなたは「クリスマス」カウンターを1個得る。あなたのキープを1枚選び、トラッシュに置いてよい。置いたならば、このカードの 《EXP》 をすべてトラッシュに置き、このカードをキープに置く。<br><br>《起》 《有効》 《自分ターン》 キープ 《コスト》 あなたの「クリスマス」カウンターを3個消費する。 《効果》 あなたの手札にある「ウチのクリスマス シェリー」を1枚選び、 《リブート》 で登場させてよい。登場させたならば、このカードをそのキャラの 《EXP》 にする。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VE01-024", //ID
		"img/cardimg/VE01-024.png", //SRC
		"ミッドナイトファンタジア", //NAME
		"R", //RARE
		"ミッションカード", //TYPE
		"", //COST
		"", //COSTDOWN
		"", //POWER
		"A", //MISSION
		"サイバー", //FEATURE
		"シェリー/クリスマス", //ACCOUNT
		"", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 《相手ターン》 ミッション 《誘発》 ミッションフェイズ終了時。 《効果》 あなたは「クリスマス」カウンターを1個得る。<br><br>《チェック》 《有効》 《自分ターン》 《条件》 ①あなたのエリアで「ウチのクリスマス シェリー」に 《EXP》 【「ジングル・ナイト シェリー」】があり、そのキャラが 《アタック成功》 する。<br><br>《クリア》 《有効》 《スリープ》 《条件》 ❶このカードがあるレーンに相手のキャラがない。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VE01-025", //ID
		"img/cardimg/VE01-025.png", //SRC
		"ウチのクリスマス シェリー", //NAME
		"SR", //RARE
		"キャラカード", //TYPE
		"12", //COST
		"0", //COSTDOWN
		"25000", //POWER
		"☆", //MISSION
		"サイバー", //FEATURE
		"シェリー/クリスマス", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エリア 《誘発》 相手のキャラが 《アタック成功》 する。 《効果》 このカードがバトルをしていた場合、このカードを退場させる。<br><br>《自》 《有効》 エリア 《誘発》 このカードが退場する。 《効果》 あなたの手札を2枚選び、トラッシュに置いてよい。2枚置いたならば、相手のエリアにあるキャラを1枚選び、ミッションフェイズ終了時まで、パワーを－10000する。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VE01-026", //ID
		"img/cardimg/VE01-026.png", //SRC
		"雪だるま職人 リベル・ネージュ", //NAME
		"R", //RARE
		"キャラカード", //TYPE
		"3", //COST
		"0", //COSTDOWN
		"5000", //POWER
		"A", //MISSION
		"サイバー", //FEATURE
		"ストリーマー/クリスマス", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エリア 《誘発》 《アタック成功》 《効果》 このカードの隣のエリアにある、あなたの 《EXP》 を持たない、 《クリスマス》 か 《サイバー》 を持つキャラを1枚選び、このカードの 《EXP》 にしてよい。そうしたならば、選んだキャラがあったエリアにこのカードをスライドさせ、このカードを 《リブート》 し、ミッションフェイズ終了時まで、このカードのアタックであなたは 《スカウト》 できない。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VE01-027", //ID
		"img/cardimg/VE01-027.png", //SRC
		"スノーマン・ワールド", //NAME
		"R", //RARE
		"ミッションカード", //TYPE
		"", //COST
		"", //COSTDOWN
		"", //POWER
		"A", //MISSION
		"サイバー", //FEATURE
		"ストリーマー/クリスマス", //ACCOUNT
		"", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 《相手ターン》 ミッション 《誘発》 ミッションフェイズ終了時。 《効果》 あなたは「クリスマス」カウンターを1個得る。<br><br>《チェック》 《有効》 《自分ターン》 《条件》 ①このターンに、あなたのエリアで「雪だるま職人 リベル・ネージュ」が4回 《アタック成功》 する。<br><br>《クリア》 《有効》 《スリープ》 《条件》 ❶このカードがあるレーンに相手のキャラがない。❷あなたのエリアに「雪だるま職人 リベル・ネージュ」がある。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VE01-028", //ID
		"img/cardimg/VE01-028.png", //SRC
		"癒しの瞬間 シスター・シュトレ", //NAME
		"R", //RARE
		"キャラカード", //TYPE
		"0", //COST
		"0", //COSTDOWN
		"500", //POWER
		"B", //MISSION
		"サイバー", //FEATURE
		"ストリーマー/クリスマス", //ACCOUNT
		"1", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 《EXP》 《誘発》 このカードがエリアから 《クリスマス》 の 《EXP》 になる。 《効果》 あなたの「クリスマス」カウンターが1個以上ある場合、1枚引いてよい。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VE01-029", //ID
		"img/cardimg/VE01-029.png", //SRC
		"新たな季節へ シスター・パネット", //NAME
		"R", //RARE
		"キャラカード", //TYPE
		"3", //COST
		"0", //COSTDOWN
		"4000", //POWER
		"B", //MISSION
		"サイバー", //FEATURE
		"ストリーマー/クリスマス", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エリア 《誘発》 《登場時》 《効果》 あなたの「クリスマス」カウンターが1個以上ある場合、1枚引き、あなたのトラッシュにある 《クリスマス》 を1枚選び、デッキの下に置く。<br><br>《自》 《有効》 エリア 《誘発》 《アタック成功》 《効果》 このカードに 《EXP》 【カード名に「シスター」を含むカード】がある場合、あなたのデッキの上から7枚公開し、その中にあるカード名に「シスター」を含むカードを1枚選び、手札に加え、残りを好きな順番でデッキの下に置く。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VE01-030", //ID
		"img/cardimg/VE01-030.png", //SRC
		"想いを乗せて シスター・ルポロ", //NAME
		"R", //RARE
		"キャラカード", //TYPE
		"4", //COST
		"1", //COSTDOWN
		"4000", //POWER
		"B", //MISSION
		"サイバー", //FEATURE
		"ストリーマー/クリスマス", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エリア 《誘発》 《登場時》 《効果》 あなたの「クリスマス」カウンターが2個以上ある場合、1枚引いてよい。<br><br>《自》 《有効》 エリア 《誘発》 《アタック成功》 《効果》 このカードに 《EXP》 【カード名に「シスター」を含むカードが2枚以上】ある場合、あなたのデッキを見て、その中にある 《クリスマス》 のイベントを1枚選び、公開し、手札に加えてよい。残りを元に戻し、シャッフルする。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VE01-031", //ID
		"img/cardimg/VE01-031.png", //SRC
		"エターナルキャロル", //NAME
		"R", //RARE
		"ミッションカード", //TYPE
		"", //COST
		"", //COSTDOWN
		"", //POWER
		"B", //MISSION
		"サイバー", //FEATURE
		"ストリーマー/クリスマス", //ACCOUNT
		"", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 《相手ターン》 ミッション 《誘発》 ミッションフェイズ終了時。 《効果》 あなたは「クリスマス」カウンターを1個得る。<br><br>《チェック》 《有効》 《自分ターン》 《条件》 ①このカードがあるレーンで、あなたの「想いを乗せて シスター・ルポロ」に 《EXP》 【「癒しの瞬間 シスター・シュトレ」と「新たな季節へ シスター・パネット」】があり、そのキャラが 《アタック成功》 する。<br><br>《クリア》 《有効》 《スリープ》 《条件》 ❶このカードがあるレーンに相手のキャラがない。❷このターンに、あなたが「調和への道のり」をプレイしている。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VE01-032", //ID
		"img/cardimg/VE01-032.png", //SRC
		"海賊の矜持", //NAME
		"SR", //RARE
		"イベントカード", //TYPE
		"0", //COST
		"", //COSTDOWN
		"", //POWER
		"☆", //MISSION
		"サイバー", //FEATURE
		"ストリーマー/クリスマス", //ACCOUNT
		"", //BAN
		"1", //SCOUT
		"", //MAINTENANCE
		"《イベント》 《効果》 このカードをエネルギーに置き、以下の効果を2回解決する。“お互いのデッキの上から1枚公開する。公開したカードのコストが高い方のカードをエネルギーに置く。公開したカードのコストが同じ場合、両方のカードをエネルギーに置く。残りをデッキの下に置く。”", //JP_TEXT
		""	//TW_TEXT
		],[
		"VE01-033", //ID
		"img/cardimg/VE01-033.png", //SRC
		"コインにゆだねて 千川ヒョウリ", //NAME
		"R", //RARE
		"キャラカード", //TYPE
		"0", //COST
		"0", //COSTDOWN
		"500", //POWER
		"☆", //MISSION
		"サイバー", //FEATURE
		"ストリーマー/クリスマス", //ACCOUNT
		"1", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 《ターン1》 エリア 《誘発》 このカード以外のキャラが登場する。 《効果》 相手は自分のデッキの上から1枚公開する。あなたは公開されたカードをデッキの上か下に置く。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VE01-034", //ID
		"img/cardimg/VE01-034.png", //SRC
		"ターキーリベンジ", //NAME
		"SR", //RARE
		"イベントカード", //TYPE
		"0", //COST
		"", //COSTDOWN
		"", //POWER
		"☆", //MISSION
		"サイバー", //FEATURE
		"ストリーマー/クリスマス", //ACCOUNT
		"", //BAN
		"1", //SCOUT
		"", //MAINTENANCE
		"《イベント》 《効果》 1枚引く。 《リロード》 （あなたのトラッシュにあるすべてのキャラをデッキに戻し、シャッフルする。）あなたのエネルギーを3枚選び、トラッシュに置いてよい。3枚置いたならば、相手のエリアにあるキャラをコストの合計が5以下になるように0～2枚選び、退場させる。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VE01-035", //ID
		"img/cardimg/VE01-035.png", //SRC
		"ローズホスピタリティ 花守イバラ", //NAME
		"R", //RARE
		"キャラカード", //TYPE
		"0", //COST
		"0", //COSTDOWN
		"500", //POWER
		"☆", //MISSION
		"サイバー", //FEATURE
		"ストリーマー/クリスマス", //ACCOUNT
		"1", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 《自分ターン》 エリア 《誘発》 メインフェイズ開始時。 《効果》 1枚引き、あなたは「クリスマス」カウンターを1個得る。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VE01-036", //ID
		"img/cardimg/VE01-036.png", //SRC
		"ファニーギフト", //NAME
		"R", //RARE
		"イベントカード", //TYPE
		"1", //COST
		"", //COSTDOWN
		"", //POWER
		"☆", //MISSION
		"サイバー", //FEATURE
		"ストリーマー/クリスマス", //ACCOUNT
		"", //BAN
		"1", //SCOUT
		"", //MAINTENANCE
		"《イベント》 《効果》 あなたは「クリスマス」カウンターを1個得る。あなたのトラッシュにある 《クリスマス》 のキャラをランダムに2枚選び、手札に戻す。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VE01-037", //ID
		"img/cardimg/VE01-037.png", //SRC
		"強襲射撃 マキナ・アルクス", //NAME
		"R", //RARE
		"キャラカード", //TYPE
		"2", //COST
		"0", //COSTDOWN
		"3000", //POWER
		"☆", //MISSION
		"サイバー", //FEATURE
		"ストリーマー/クリスマス", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エリア 《誘発》 このカードが手札以外から登場する。 《効果》 相手のエリアにあるキャラを1枚選び、2000ダメージを与える。<br><br>《起》 《有効》 《自分ターン》 トラッシュ 《コスト》 あなたのエネルギーを3枚トラッシュに置く。 《効果》 このカードを 《リブート》 で登場させる。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VE01-038", //ID
		"img/cardimg/VE01-038.png", //SRC
		"祝祭旋風 マーリー・フェアリース", //NAME
		"R", //RARE
		"キャラカード", //TYPE
		"2", //COST
		"0", //COSTDOWN
		"2000", //POWER
		"☆", //MISSION
		"サイバー", //FEATURE
		"ストリーマー/クリスマス", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エリア 《誘発》 《アタック成功》 《効果》 あなたは「クリスマス」カウンターを1個得る。<br><br>《自》 《有効》 エリア 《誘発》 このカードが退場する。 《効果》 あなたは「クリスマス」カウンターを1個得る。以下の効果を3回解決する。“相手のエリアにあるキャラを1枚選び、1000ダメージを与える。”", //JP_TEXT
		""	//TW_TEXT
		],[
		"VE01-039", //ID
		"img/cardimg/VE01-039.png", //SRC
		"流転の使者 神代狐狗狸", //NAME
		"R", //RARE
		"キャラカード", //TYPE
		"2", //COST
		"0", //COSTDOWN
		"3000", //POWER
		"☆", //MISSION
		"サイバー", //FEATURE
		"ストリーマー/クリスマス", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エネルギー 《誘発》 このカードが 《スカウト》 によってエネルギーに置かれる。 《効果》 以下の効果を解決してよい。“ 《リロード》 （あなたのトラッシュにあるすべてのキャラをデッキに戻し、シャッフルする。）”", //JP_TEXT
		""	//TW_TEXT
		],[
		"VE01-040", //ID
		"img/cardimg/VE01-040.png", //SRC
		"オーバーアナライズ", //NAME
		"SR", //RARE
		"イベントカード", //TYPE
		"3", //COST
		"", //COSTDOWN
		"", //POWER
		"☆", //MISSION
		"サイバー", //FEATURE
		"ストリーマー/クリスマス", //ACCOUNT
		"", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《イベント》 《効果》 あなたの「クリスマス」カウンターが1個以上ある場合、1枚引く。3個以上ある場合、3枚引く。6個以上ある場合、3枚引く。9個以上ある場合、3枚引く。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VE01-041", //ID
		"img/cardimg/VE01-041.png", //SRC
		"調和への道のり", //NAME
		"SR", //RARE
		"イベントカード", //TYPE
		"3", //COST
		"", //COSTDOWN
		"", //POWER
		"☆", //MISSION
		"サイバー", //FEATURE
		"ストリーマー/クリスマス", //ACCOUNT
		"", //BAN
		"1", //SCOUT
		"", //MAINTENANCE
		"《イベント》 《効果》 あなたのデッキの上から3枚公開する。その中にある 《クリスマス》 か 《サイバー》 を持つカードを1枚選び、手札に加え、残りの中から 《クリスマス》 のキャラを1枚選び、デッキの上に置く。残りを好きな順番でデッキの下に置く。<br><br>《常》 《有効》 手札かキープ 《効果》 このカードをプレイする際、あなたの「クリスマス」カウンターを0～3個消費する。消費した「クリスマス」カウンター1個につき、このカードのコストを－1する。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VE01-042", //ID
		"img/cardimg/VE01-042.png", //SRC
		"聖夜の守護者 星影アカリ", //NAME
		"R", //RARE
		"キャラカード", //TYPE
		"4", //COST
		"1", //COSTDOWN
		"4000", //POWER
		"☆", //MISSION
		"サイバー", //FEATURE
		"ストリーマー/クリスマス", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《起》 《有効》 キープ 《コスト》 あなたの「クリスマス」カウンターを3個消費する。 《効果》 このカードを 《リブート》 で登場させる。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VE01-043", //ID
		"img/cardimg/VE01-043.png", //SRC
		"カモンアシスト 扶翼イクミ", //NAME
		"R", //RARE
		"キャラカード", //TYPE
		"6", //COST
		"1", //COSTDOWN
		"8000", //POWER
		"☆", //MISSION
		"サイバー", //FEATURE
		"ストリーマー/クリスマス", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エリア 《誘発》 《登場時》 《効果》 あなたのトラッシュにあるコスト2のカードを1枚選び、デッキの上に置いてよい。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VE01-044", //ID
		"img/cardimg/VE01-044.png", //SRC
		"慎重派スナイパー 天手湖マイ", //NAME
		"R", //RARE
		"キャラカード", //TYPE
		"7", //COST
		"1", //COSTDOWN
		"10000", //POWER
		"☆", //MISSION
		"サイバー", //FEATURE
		"ストリーマー/クリスマス", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エネルギー 《誘発》 このカードが 《スカウト》 によってエネルギーに置かれる。 《効果》 このカードを除外してよい。除外したならば、ミッションフェイズ終了時、相手のエリアにあるコスト7以下のキャラを1枚選び、退場させる。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VE01-045", //ID
		"img/cardimg/VE01-045.png", //SRC
		"氷華反衝", //NAME
		"SR", //RARE
		"イベントカード", //TYPE
		"7", //COST
		"", //COSTDOWN
		"", //POWER
		"☆", //MISSION
		"サイバー", //FEATURE
		"ストリーマー/クリスマス", //ACCOUNT
		"", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《イベント》 《効果》 相手のエリアにあるキャラを1枚選び、退場させる。<br><br>《自》 《有効》 《相手ターン》 キープ 《誘発》 あなたのキャラが退場する。 《効果》 あなたのエリアにキャラが1枚もない場合、このカードをコストを支払わずにプレイしてよい。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VE01-046", //ID
		"img/cardimg/VE01-046.png", //SRC
		"フロートボマー ブリッツ・コメット", //NAME
		"R", //RARE
		"キャラカード", //TYPE
		"12", //COST
		"1", //COSTDOWN
		"2500", //POWER
		"☆", //MISSION
		"サイバー", //FEATURE
		"ストリーマー/クリスマス", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《常》 《有効》 手札 《効果》 このカードをプレイする際、あなたの「クリスマス」カウンター1個につき、このカードのコストを－1する。<br><br>《自》 《有効》 エリア 《誘発》 《登場時》 《効果》 あなたの「クリスマス」カウンターをすべて消費してよい。3個以上消費したならば、あなたの手札から 《クリスマス》 のイベントを1枚選び、コストを支払わずにプレイしてよい。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VE01-047", //ID
		"img/cardimg/VE01-047.png", //SRC
		"ワンダフルプレゼント", //NAME
		"R", //RARE
		"イベントカード", //TYPE
		"25", //COST
		"", //COSTDOWN
		"", //POWER
		"☆", //MISSION
		"サイバー", //FEATURE
		"ストリーマー/クリスマス", //ACCOUNT
		"", //BAN
		"1", //SCOUT
		"", //MAINTENANCE
		"《イベント》 《効果》 あなたは「クリスマス」カウンターを9個得る。あなたのアカウントが「Vividzクリスマス」の場合、すべてのエリアにあるキャラをデッキに戻し、シャッフルし、お互いにデッキの上から3枚公開し、あなたはその中にあるキャラをすべて選び、それぞれ別々のエリアに 《リブート》 で登場させる。残りを好きな順番で、デッキの下に置く。<br><br>《起》 《有効》 《自分ターン》 トラッシュ 《コスト》 あなたのトラッシュにあるこのカード以外の 《同名》 を2枚好きな順番でデッキの下に置く。 《効果》 このカードを手札に戻す。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VE01-048", //ID
		"img/cardimg/VE01-048.png", //SRC
		"Vividzクリスマス", //NAME
		"R", //RARE
		"アカウントカード", //TYPE
		"", //COST
		"", //COSTDOWN
		"", //POWER
		"", //MISSION
		"", //FEATURE
		"Vividzクリスマス", //ACCOUNT
		"", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《起》 《アクセル》 《ストリーマー》 《クリスマス》<br>（ 《有効》 アカウント 《コスト》 《スリープ》 する。 《効果》 あなたのデッキの上から1枚公開し、そのカードが 《ストリーマー》 か 《クリスマス》 の場合、コストを支払わずにプレイしてよい。プレイしなかったならば、エネルギーに置く。）", //JP_TEXT
		""	//TW_TEXT
		],[
		"VE01-049", //ID
		"img/cardimg/VE01-049.png", //SRC
		"クリスマス", //NAME
		"R", //RARE
		"カウンターカード", //TYPE
		"", //COST
		"", //COSTDOWN
		"", //POWER
		"", //MISSION
		"", //FEATURE
		"", //ACCOUNT
		"", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"", //JP_TEXT
		""	//TW_TEXT
		],[
		"VE01-050", //ID
		"img/cardimg/VE01-050.png", //SRC
		"クリスマス", //NAME
		"R", //RARE
		"カウンターカード", //TYPE
		"", //COST
		"", //COSTDOWN
		"", //POWER
		"", //MISSION
		"", //FEATURE
		"", //ACCOUNT
		"", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"", //JP_TEXT
		""	//TW_TEXT
		],[
		"VE01-074", //ID
		"img/cardimg/VE01-074.png", //SRC
		"アクロバットストリンガー", //NAME
		"SEC", //RARE
		"ミッションカード", //TYPE
		"", //COST
		"", //COSTDOWN
		"", //POWER
		"E", //MISSION
		"サイバー", //FEATURE
		"シェリー", //ACCOUNT
		"", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《チェック》 《有効》 《自分ターン》 《条件》 ①このターンに、あなたの 《シェリー》 の能力であなたのデッキから8枚以上トラッシュに置かれる。<br><br>《クリア》 《有効》 《スリープ》 《条件》 ❶このカードがあるレーンに相手のキャラがない。❷あなたのトラッシュに 《シェリー》 が1枚もない。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VE02-001", //ID
		"img/cardimg/VE02-001.png", //SRC
		"BBQガーディアン キョウカ", //NAME
		"R", //RARE
		"キャラカード", //TYPE
		"3", //COST
		"0", //COSTDOWN
		"5000", //POWER
		"☆", //MISSION
		"ファンタジー", //FEATURE
		"キョウカ/夏休み", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エリア 《誘発》 《アタック成功》 《効果》 あなたの手札をすべて除外してよい。除外したならば、0～3枚引く。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VE02-002", //ID
		"img/cardimg/VE02-002.png", //SRC
		"チャンバラブシドー キョウカ", //NAME
		"R", //RARE
		"キャラカード", //TYPE
		"4", //COST
		"1", //COSTDOWN
		"4000", //POWER
		"☆", //MISSION
		"ファンタジー", //FEATURE
		"キョウカ/夏休み", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エリア 《誘発》 《LvUP》 《効果》 このカードの 《EXP》 を1枚選び、除外してよい。除外したならば、あなたの手札にあるコスト3以下の 《キョウカ》 でないキャラを1枚選び、 《リブート》 で登場させてよい。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VE02-003", //ID
		"img/cardimg/VE02-003.png", //SRC
		"オーシャンマスター キョウカ", //NAME
		"SR", //RARE
		"キャラカード", //TYPE
		"6", //COST
		"1", //COSTDOWN
		"9000", //POWER
		"☆", //MISSION
		"ファンタジー", //FEATURE
		"キョウカ/夏休み", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エリア 《誘発》 《LvUP》 《効果》 このカードに 《EXP》 【 《キョウカ》 でないカード】がある場合、あなたのデッキの上から0～3枚除外する。3枚除外したならば、あなたのすべてのエリアにミッションフェイズ終了時まで、以下の能力を与える。“ 《常》 《有効》 エリア 《効果》 このエリアにある 《キョウカ》 か 《夏休み》 のパワーを＋4000する。”<br><br>《自》 《有効》 エリア 《誘発》 《アタック成功》 《効果》 あなたの手札が3枚以下の場合、1枚引いてよい。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VE02-004", //ID
		"img/cardimg/VE02-004.png", //SRC
		"入念な準備体操 玲", //NAME
		"R", //RARE
		"キャラカード", //TYPE
		"1", //COST
		"0", //COSTDOWN
		"1000", //POWER
		"☆", //MISSION
		"ファンタジー", //FEATURE
		"玲/夏休み", //ACCOUNT
		"1", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《起》 《有効》 エリア 《コスト》 《スリープ》 する。 《効果》 あなたのトラッシュを2枚選び、除外してよい。2枚除外したならば、相手のエリアにあるダメージを受けているキャラを1枚選び、4000ダメージを与える。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VE02-005", //ID
		"img/cardimg/VE02-005.png", //SRC
		"流刃剣舞 玲", //NAME
		"R", //RARE
		"キャラカード", //TYPE
		"4", //COST
		"1", //COSTDOWN
		"4000", //POWER
		"☆", //MISSION
		"ファンタジー", //FEATURE
		"玲/夏休み", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エリア 《誘発》 《LvUP》 《効果》 あなたの手札を1枚選び、除外してよい。除外したならば、このカードの 《EXP》 【コスト2以下の 《玲》 でないキャラ】を1枚選び、 《リブート》 で登場させる。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VE02-006", //ID
		"img/cardimg/VE02-006.png", //SRC
		"マリンマスター 玲", //NAME
		"SR", //RARE
		"キャラカード", //TYPE
		"6", //COST
		"1", //COSTDOWN
		"9000", //POWER
		"☆", //MISSION
		"ファンタジー", //FEATURE
		"玲/夏休み", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エリア 《誘発》 《LvUP》 《効果》 このカードに 《EXP》 【 《玲》 でないカード】がある場合、あなたのデッキの上から0～3枚除外する。3枚除外したならば、あなたのデッキの上から3枚見て、その中にあるカードを0～3枚選び、好きな順番でデッキの上に戻し、残りを好きな順番でデッキの下に置く。<br><br>《起》 《有効》 《ターン1》 エリア 《コスト》 あなたのリムーブにある 《玲》 か 《夏休み》 のキャラを2枚好きな順番でデッキの下に置く。 《効果》 相手のすべてのエリアにあるキャラに2000ダメージを与える。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VE02-007", //ID
		"img/cardimg/VE02-007.png", //SRC
		"サマーハーモニー らぶり", //NAME
		"R", //RARE
		"キャラカード", //TYPE
		"1", //COST
		"0", //COSTDOWN
		"1000", //POWER
		"☆", //MISSION
		"ファンタジー", //FEATURE
		"らぶり/夏休み", //ACCOUNT
		"1", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エリア 《誘発》 《登場時》 《効果》 あなたのトラッシュを2枚選び、除外してよい。2枚除外したならば、ミッションフェイズ終了時まで、このカードは以下の能力を得る。“ 《常》 《有効》 エリア 《効果》 このカードの隣のエリアにあるキャラのパワーを＋2000する。”", //JP_TEXT
		""	//TW_TEXT
		],[
		"VE02-008", //ID
		"img/cardimg/VE02-008.png", //SRC
		"バカンスの女神 らぶり", //NAME
		"R", //RARE
		"キャラカード", //TYPE
		"2", //COST
		"0", //COSTDOWN
		"2000", //POWER
		"☆", //MISSION
		"ファンタジー", //FEATURE
		"らぶり/夏休み", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 センター 《誘発》 《登場時》 《効果》 あなたのトラッシュを2枚選び、除外してよい。2枚除外したならば、あなたのエネルギーにあるキャラを0～2枚選び、手札に戻す。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VE02-009", //ID
		"img/cardimg/VE02-009.png", //SRC
		"シーサイドマスター らぶり", //NAME
		"SR", //RARE
		"キャラカード", //TYPE
		"5", //COST
		"1", //COSTDOWN
		"7000", //POWER
		"☆", //MISSION
		"ファンタジー", //FEATURE
		"らぶり/夏休み", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エリア 《誘発》 《LvUP》 《効果》 このカードに 《EXP》 【 《らぶり》 でないカード】がある場合、あなたのデッキの上から0～3枚除外する。3枚除外したならば、あなたのトラッシュにある 《ファンタジー》 を持つ 《らぶり》 か 《夏休み》 を1枚選び、手札に戻す。<br><br>《自》 《有効》 エリア 《誘発》 このカードがアタックする。 《効果》 相手のエリアにあるキャラを1枚選び、スライドさせてよい。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VE02-010", //ID
		"img/cardimg/VE02-010.png", //SRC
		"フルーツ探検隊 まりあ", //NAME
		"R", //RARE
		"キャラカード", //TYPE
		"0", //COST
		"0", //COSTDOWN
		"500", //POWER
		"☆", //MISSION
		"ファンタジー", //FEATURE
		"まりあ/夏休み", //ACCOUNT
		"1", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《起》 《有効》 《自分ターン》 《EXP》 《コスト》 あなたのデッキの上から1枚除外する。 《効果》 1枚引く。ミッションフェイズ終了時まで、あなたは 《同名》 のこの能力をプレイできない。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VE02-011", //ID
		"img/cardimg/VE02-011.png", //SRC
		"スイーツ・バケーション まりあ", //NAME
		"R", //RARE
		"キャラカード", //TYPE
		"3", //COST
		"0", //COSTDOWN
		"4000", //POWER
		"☆", //MISSION
		"ファンタジー", //FEATURE
		"まりあ/夏休み", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《起》 《有効》 《自分ターン1》 エリア 《コスト》 あなたのトラッシュを2枚除外する。 《効果》 あなたの手札を0～2枚選び、このカードの 《EXP》 にしてよい。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VE02-012", //ID
		"img/cardimg/VE02-012.png", //SRC
		"ビーチマスター まりあ", //NAME
		"SR", //RARE
		"キャラカード", //TYPE
		"6", //COST
		"1", //COSTDOWN
		"9000", //POWER
		"☆", //MISSION
		"ファンタジー", //FEATURE
		"まりあ/夏休み", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《常》 《有効》 エリア 《効果》 このカードに 《EXP》 【 《まりあ》 でないカード】があり、あなたのリムーブが3枚以上ある場合、このカードの隣のエリアにあるキャラに以下の能力を与える。“ 《常》 《有効》 エリア 《効果》 カードの効果でこのカードを選べる場合、相手はこのカードを選ばなければならない。”<br><br>《起》 《有効》 《自分ターン1》 エリア 《コスト》 あなたのトラッシュを2枚除外する。 《効果》 あなたのトラッシュにある 《まりあ》 か 《夏休み》 を2枚選び、このカードの 《EXP》 にする。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VE02-013", //ID
		"img/cardimg/VE02-013.png", //SRC
		"サマービート シェリー", //NAME
		"R", //RARE
		"キャラカード", //TYPE
		"2", //COST
		"0", //COSTDOWN
		"3000", //POWER
		"☆", //MISSION
		"ファンタジー", //FEATURE
		"シェリー/夏休み", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エリア 《誘発》 《登場時》 《効果》 キープを1枚選び、手札に戻してよい。あなたのキープを戻したならば、1枚引き、あなたの手札を2枚選び、1枚をキープに置き、残りを除外する。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VE02-014", //ID
		"img/cardimg/VE02-014.png", //SRC
		"サンタナ・スマッシュ シェリー", //NAME
		"R", //RARE
		"キャラカード", //TYPE
		"4", //COST
		"1", //COSTDOWN
		"8000", //POWER
		"☆", //MISSION
		"ファンタジー", //FEATURE
		"シェリー/夏休み", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 《自分ターン》 エリア 《誘発》 《登場時》 《効果》 あなたのエリアに 《シェリー》 しかない場合、このカードをトラッシュに置く。<br><br>《自》 《有効》 エリア 《誘発》 《アタック成功》 《効果》 あなたのトラッシュを3枚選び、除外してよい。3枚除外したならば、相手は自分の手札をすべてデッキに戻し、シャッフルし、相手は3枚引く。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VE02-015", //ID
		"img/cardimg/VE02-015.png", //SRC
		"フロートマスター シェリー", //NAME
		"SR", //RARE
		"キャラカード", //TYPE
		"5", //COST
		"1", //COSTDOWN
		"7000", //POWER
		"☆", //MISSION
		"ファンタジー", //FEATURE
		"シェリー/夏休み", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《常》 《有効》 《自分ターン》 エリア 《効果》 相手のすべてのエリアにあるキャラのコストを－2する。<br><br>《自》 《有効》 エリア 《誘発》 《LvUP》 《効果》 このカードに 《EXP》 【 《シェリー》 でないカード】がある場合、あなたのデッキの上から0～3枚除外する。3枚除外したならば、あなたのキープを1枚選び、エネルギーに置き、あなたのデッキの上から5枚公開し、その中にある 《シェリー》 か 《夏休み》 を1枚選び、キープに置く。残りを好きな順番でデッキの下に置く。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VE02-016", //ID
		"img/cardimg/VE02-016.png", //SRC
		"浜辺のランチタイム ノイ", //NAME
		"R", //RARE
		"キャラカード", //TYPE
		"0", //COST
		"0", //COSTDOWN
		"500", //POWER
		"☆", //MISSION
		"ファンタジー", //FEATURE
		"ノイ/夏休み", //ACCOUNT
		"1", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 《EXP》 《誘発》 このカードがエリアからキャラの 《EXP》 になる。 《効果》 あなたのエネルギーを1枚選び、除外してよい。除外したならば、このカードをキャラがないエリアに 《スリープ》 で登場させる。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VE02-017", //ID
		"img/cardimg/VE02-017.png", //SRC
		"スプラッシュブラスター ノイ", //NAME
		"R", //RARE
		"キャラカード", //TYPE
		"2", //COST
		"0", //COSTDOWN
		"2000", //POWER
		"☆", //MISSION
		"ファンタジー", //FEATURE
		"ノイ/夏休み", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《起》 《有効》 《自分ターン》 リムーブ 《コスト》 あなたのトラッシュを2枚除外する。 《効果》 あなたのエリアにキャラが2枚以上あり、あなたのキープが1枚もない場合、このカードをキャラがないエリアに 《スリープ》 で登場させる。ミッションフェイズ終了時まで、あなたは 《同名》 のこの能力をプレイできない。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VE02-018", //ID
		"img/cardimg/VE02-018.png", //SRC
		"リゾートマスター ノイ", //NAME
		"SR", //RARE
		"キャラカード", //TYPE
		"6", //COST
		"1", //COSTDOWN
		"9000", //POWER
		"☆", //MISSION
		"ファンタジー", //FEATURE
		"ノイ/夏休み", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エリア 《誘発》 《LvUP》 《効果》 このカードに 《EXP》 【 《ノイ》 でないカード】がある場合、あなたのデッキの上から0～3枚除外する。3枚除外したならば、相手のエリアにあるキャラを1枚選ぶ。相手はそのキャラの 《EXP》 を2枚選び、トラッシュに置く。<br><br>《起》 《有効》 《自分ターン1》 エリア 《コスト》 あなたのリムーブにある 《ノイ》 か 《夏休み》 のキャラを2枚好きな順番でデッキの下に置く。 《効果》 あなたのトラッシュにあるコスト2以下のキャラを1枚選び、キャラがないエリアに 《リブート》 で登場させる。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VE02-019", //ID
		"img/cardimg/VE02-019.png", //SRC
		"サマーメモリー らぶり&ノイ", //NAME
		"R", //RARE
		"ミッションカード", //TYPE
		"", //COST
		"", //COSTDOWN
		"", //POWER
		"A", //MISSION
		"ファンタジー", //FEATURE
		"夏休み", //ACCOUNT
		"", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 《自分ターン》 ミッション 《誘発》 このカードがあるレーンであなたのコスト5以上の 《夏休み》 が 《アタック成功》 する。 《効果》 このカードがあるレーンに相手のキャラがなく、あなたのリムーブに 《夏休み》 が10種類以上ある場合、あなたは「マップ L」カウンターを1個得る。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VE02-020", //ID
		"img/cardimg/VE02-020.png", //SRC
		"サマーメモリー 玲&キョウカ", //NAME
		"R", //RARE
		"ミッションカード", //TYPE
		"", //COST
		"", //COSTDOWN
		"", //POWER
		"B", //MISSION
		"ファンタジー", //FEATURE
		"夏休み", //ACCOUNT
		"", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 《自分ターン》 ミッション 《誘発》 あなたの「マップ L」カウンターと「マップ R」カウンターがあり、このカードがあるレーンであなたのコスト5以上の 《夏休み》 が 《アタック成功》 する。 《効果》 あなたのすべてのエリアにキャラがあり、このカードがあるレーンに相手のキャラがない場合、あなたのカード名に「サマーメモリー」を含むミッションをすべてクリアする。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VE02-021", //ID
		"img/cardimg/VE02-021.png", //SRC
		"サマーメモリー まりあ&シェリー", //NAME
		"R", //RARE
		"ミッションカード", //TYPE
		"", //COST
		"", //COSTDOWN
		"", //POWER
		"C", //MISSION
		"ファンタジー", //FEATURE
		"夏休み", //ACCOUNT
		"", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 《自分ターン》 ミッション 《誘発》 このカードがあるレーンであなたのコスト5以上の 《夏休み》 が 《アタック成功》 する。 《効果》 このカードがあるレーンに相手のキャラがなく、あなたのすべてのエリアにアカウント情報がそれぞれ異なるキャラがある場合、あなたは「マップ R」カウンターを1個得る。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VE02-022", //ID
		"img/cardimg/VE02-022.png", //SRC
		"えとセトラ期待の新人 マヤー", //NAME
		"R", //RARE
		"キャラカード", //TYPE
		"13", //COST
		"0", //COSTDOWN
		"222", //POWER
		"A", //MISSION
		"ファンタジー", //FEATURE
		"ストリーマー/夏休み", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《常》 《有効》 手札かキープ 《効果》 あなたのリムーブにある、カード名に「えとセトラ」を含むカード1種類につき、このカードのコストを－1する。<br><br>《自》 《有効》 エリア 《誘発》 《登場時》 《効果》 あなたのリムーブにある、カード名の異なるカード名に「えとセトラ」を含むキャラを12枚選び、このカードの 《EXP》 にしてよい。<br><br>《起》 《有効》 手札 《コスト》 このカードをデッキの下に置く。 《効果》 あなたのデッキを見て、カード名に「えとセトラ」を含むカードを0～3枚選び、除外する。残りを元に戻し、シャッフルする。3枚除外したならば、1枚引く。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VE02-023", //ID
		"img/cardimg/VE02-023.png", //SRC
		"えとセトラサマーキャンプ", //NAME
		"R", //RARE
		"ミッションカード", //TYPE
		"", //COST
		"", //COSTDOWN
		"", //POWER
		"A", //MISSION
		"ファンタジー", //FEATURE
		"ストリーマー/夏休み", //ACCOUNT
		"", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《チェック》 《有効》 《自分ターン》 《条件》 ①あなたのエリアで「えとセトラ期待の新人 マヤー」に 《EXP》 【カード名に「えとセトラ」を含むキャラが12種類以上】あり、そのキャラが 《アタック成功》 する。<br><br>《クリア》 《有効》 《スリープ》 《条件》 ❶このカードがあるレーンに相手のキャラがない。❷あなたのエリアにある「えとセトラ期待の新人 マヤー」に 《EXP》 【カード名に「えとセトラ」を含むキャラが12種類以上】ある。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VE02-024", //ID
		"img/cardimg/VE02-024.png", //SRC
		"紅焔拳 マリィ・メイメイ", //NAME
		"R", //RARE
		"キャラカード", //TYPE
		"2", //COST
		"0", //COSTDOWN
		"2000", //POWER
		"B", //MISSION
		"ファンタジー", //FEATURE
		"ストリーマー/夏休み", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《常》 《有効》 《自分ターン》 エリア 《効果》 あなたのすべてのエリアにキャラがある場合、あなたのすべてのエリアにあるキャラのパワーを＋2000する。<br><br>《自》 《有効》 エリア 《誘発》 《登場時》 《効果》 あなたの手札を1枚選び、トラッシュに置いてよい。置いたならば、あなたのデッキを見て、その中にある「翠炎拳 ルイ・メイメイ」を1枚選び、公開し、手札に加えてよい。残りを元に戻し、シャッフルする。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VE02-025", //ID
		"img/cardimg/VE02-025.png", //SRC
		"翠炎拳 ルイ・メイメイ", //NAME
		"R", //RARE
		"キャラカード", //TYPE
		"2", //COST
		"0", //COSTDOWN
		"3000", //POWER
		"B", //MISSION
		"ファンタジー", //FEATURE
		"ストリーマー/夏休み", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エリア 《誘発》 《登場時》 《効果》 あなたの手札を1枚選び、トラッシュに置いてよい。置いたならば、あなたのデッキを見て、その中にある「紅焔拳 マリィ・メイメイ」を1枚選び、公開し、手札に加えてよい。残りを元に戻し、シャッフルする。<br><br>《自》 《有効》 エリア 《誘発》 《アタック成功》 《効果》 あなたのエリアに「紅焔拳 マリィ・メイメイ」があり、あなたのキープが1枚もない場合、あなたのデッキを見て、その中にある 《ファンタジー》 を持つカードを1枚選び、キープに置いてよい。残りを元に戻し、シャッフルする。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VE02-026", //ID
		"img/cardimg/VE02-026.png", //SRC
		"双星拳姫", //NAME
		"R", //RARE
		"ミッションカード", //TYPE
		"", //COST
		"", //COSTDOWN
		"", //POWER
		"B", //MISSION
		"ファンタジー", //FEATURE
		"ストリーマー/夏休み", //ACCOUNT
		"", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《チェック》 《有効》 《自分ターン》 《条件》 ①あなたのエリアに「紅焔拳 マリィ・メイメイ」がある時、このカードがあるレーンであなたの「翠炎拳 ルイ・メイメイ」が 《アタック成功》 する。<br><br>《クリア》 《有効》 《スリープ》 《条件》 ❶このカードがあるレーンに相手のキャラがない。❷あなたのキープにコスト100以上のカードがある。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VE02-027", //ID
		"img/cardimg/VE02-027.png", //SRC
		"九死に一生 有部でるち", //NAME
		"R", //RARE
		"キャラカード", //TYPE
		"0", //COST
		"0", //COSTDOWN
		"500", //POWER
		"☆", //MISSION
		"ファンタジー", //FEATURE
		"ストリーマー/夏休み", //ACCOUNT
		"1", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 《EXP》 《誘発》 このカードがエリアから 《ファンタジー》 を持つキャラの 《EXP》 になる。 《効果》 あなたの手札を0～2枚選び、トラッシュに置く。置いた枚数1枚につき、1枚引く。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VE02-028", //ID
		"img/cardimg/VE02-028.png", //SRC
		"旋風天射", //NAME
		"R", //RARE
		"イベントカード", //TYPE
		"1", //COST
		"", //COSTDOWN
		"", //POWER
		"☆", //MISSION
		"ファンタジー", //FEATURE
		"ストリーマー/夏休み", //ACCOUNT
		"", //BAN
		"1", //SCOUT
		"", //MAINTENANCE
		"《イベント》 《効果》 お互いに自分のリムーブを3枚選び、それ以外のリムーブをデッキに戻し、シャッフルする。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VE02-029", //ID
		"img/cardimg/VE02-029.png", //SRC
		"ナイトメア・イレイザー", //NAME
		"SR", //RARE
		"イベントカード", //TYPE
		"1", //COST
		"", //COSTDOWN
		"", //POWER
		"☆", //MISSION
		"ファンタジー", //FEATURE
		"ストリーマー/夏休み", //ACCOUNT
		"", //BAN
		"1", //SCOUT
		"", //MAINTENANCE
		"《イベント》 《効果》 相手は自分の手札にあるカードをすべて公開し、あなたはその中にあるカードを0～2枚選び、相手は選ばれたカードを好きな順番でデッキの下に置く。公開した残りのカードを元に戻す。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VE02-030", //ID
		"img/cardimg/VE02-030.png", //SRC
		"パッションサマー 夏島リッカ", //NAME
		"R", //RARE
		"キャラカード", //TYPE
		"1", //COST
		"0", //COSTDOWN
		"1000", //POWER
		"☆", //MISSION
		"ファンタジー", //FEATURE
		"ストリーマー/夏休み", //ACCOUNT
		"1", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《起》 《有効》 《自分ターン》 リムーブ 《コスト》 あなたのトラッシュを2枚除外する。 《効果》 この能力はあなたのエリアにコスト3以下の 《ファンタジー》 を持つキャラがある場合にしかプレイできない。あなたのエリアにあるコスト3以下の 《ファンタジー》 を持つキャラを1枚選び、このカードをそのキャラの 《EXP》 にする。ミッションフェイズ終了時まで、あなたは 《同名》 のこの能力をプレイできない。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VE02-031", //ID
		"img/cardimg/VE02-031.png", //SRC
		"閃き策士 ハイリ・アンダーソン", //NAME
		"R", //RARE
		"キャラカード", //TYPE
		"1", //COST
		"0", //COSTDOWN
		"1000", //POWER
		"☆", //MISSION
		"ファンタジー", //FEATURE
		"ストリーマー/夏休み", //ACCOUNT
		"1", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エリア 《誘発》 《登場時》 《効果》 あなたのデッキを見て、その中にあるカード名に「ハイリ・アンダーソン」を含むカードを好きな枚数選び、トラッシュに置く。残りを元に戻し、シャッフルする。<br><br>《起》 《有効》 《自分ターン》 エリア 《コスト》 《スリープ》 する。 《効果》 あなたの手札にある「大胆策士 ハイリ・アンダーソン」を1枚選び、このカードがあるエリアに 《リブート》 で登場させてよい。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VE02-032", //ID
		"img/cardimg/VE02-032.png", //SRC
		"お騒がせ乙女 姫川ペスカ", //NAME
		"R", //RARE
		"キャラカード", //TYPE
		"2", //COST
		"0", //COSTDOWN
		"500", //POWER
		"☆", //MISSION
		"ファンタジー", //FEATURE
		"ストリーマー/夏休み", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《常》 《有効》 エリア 《効果》 カードの効果でこのカードを選べる場合、相手はこのカードを選ばなければならない。<br>（選ばなければならないキャラが複数ある場合、それらのうちの1枚を選ぶ。）<br><br>《自》 《有効》 エリアかトラッシュ 《誘発》 《エネミー》 が登場する。 《効果》 このカードを除外する。<br><br>《自》 《有効》 リムーブ 《誘発》 《エネミー》 が退場する。 《効果》 あなたのエリアに 《同名》 がない場合、このカードを 《スリープ》 で登場させてよい。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VE02-033", //ID
		"img/cardimg/VE02-033.png", //SRC
		"シスター・シュトレの輪舞曲", //NAME
		"R", //RARE
		"イベントカード", //TYPE
		"2", //COST
		"", //COSTDOWN
		"", //POWER
		"☆", //MISSION
		"ファンタジー", //FEATURE
		"ストリーマー/夏休み", //ACCOUNT
		"", //BAN
		"1", //SCOUT
		"", //MAINTENANCE
		"《イベント》 《効果》 1枚引く。あなたの手札にあるカード名に「ルポロ」を含むカードを1枚選び、コストを支払わずにプレイしてよい。<br><br>《自》 詠唱： 《ストリーマー》 （ 《有効》 リムーブ 《誘発》 あなたの 《ストリーマー》 が 《アタック成功》 する。 《効果》 このカードをコストを支払わずにプレイしてよい。）", //JP_TEXT
		""	//TW_TEXT
		],[
		"VE02-034", //ID
		"img/cardimg/VE02-034.png", //SRC
		"シスター・パネットの輪舞曲", //NAME
		"R", //RARE
		"イベントカード", //TYPE
		"2", //COST
		"", //COSTDOWN
		"", //POWER
		"☆", //MISSION
		"ファンタジー", //FEATURE
		"ストリーマー/夏休み", //ACCOUNT
		"", //BAN
		"1", //SCOUT
		"", //MAINTENANCE
		"《イベント》 《効果》 相手のキープを1枚選び、トラッシュに置く。あなたの手札にあるカード名に「シュトレ」を含むカードを1枚選び、コストを支払わずにプレイしてよい。<br><br>《自》 詠唱： 《ストリーマー》 （ 《有効》 リムーブ 《誘発》 あなたの 《ストリーマー》 が 《アタック成功》 する。 《効果》 このカードをコストを支払わずにプレイしてよい。）", //JP_TEXT
		""	//TW_TEXT
		],[
		"VE02-035", //ID
		"img/cardimg/VE02-035.png", //SRC
		"ビルド名人 エメス・マルクト", //NAME
		"SR", //RARE
		"キャラカード", //TYPE
		"2", //COST
		"0", //COSTDOWN
		"2000", //POWER
		"☆", //MISSION
		"ファンタジー", //FEATURE
		"ストリーマー/夏休み", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エリア 《誘発》 《アタック成功》 《効果》 2枚引く。あなたの手札を1枚選び、デッキの下に置く。<br><br>《起》 《有効》 リムーブ 《コスト》 あなたのキャラが持つ 《EXP》 を1枚トラッシュに置く。 《効果》 このカードを 《リブート》 で登場させる。ミッションフェイズ終了時まで、あなたは 《同名》 のこの能力をプレイできない。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VE02-036", //ID
		"img/cardimg/VE02-036.png", //SRC
		"密林ガイド クロコ・アリエッタ", //NAME
		"R", //RARE
		"キャラカード", //TYPE
		"2", //COST
		"0", //COSTDOWN
		"3000", //POWER
		"☆", //MISSION
		"ファンタジー", //FEATURE
		"ストリーマー/夏休み", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《起》 《有効》 手札 《コスト》 このカードを除外する。 《効果》 あなたのデッキの上から3枚公開し、その中にある 《夏休み》 を1枚選び、手札に加え、残りを除外する。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VE02-037", //ID
		"img/cardimg/VE02-037.png", //SRC
		"シスター・ルポロの輪舞曲", //NAME
		"R", //RARE
		"イベントカード", //TYPE
		"3", //COST
		"", //COSTDOWN
		"", //POWER
		"☆", //MISSION
		"ファンタジー", //FEATURE
		"ストリーマー/夏休み", //ACCOUNT
		"", //BAN
		"1", //SCOUT
		"", //MAINTENANCE
		"《イベント》 《効果》 あなたのデッキを見て、その中にあるカード名に「シスター」を含むカードを1枚選び、公開し、手札に加えてよい。残りを元に戻し、シャッフルする。あなたの手札にあるカード名に「パネット」を含むカードを1枚選び、コストを支払わずにプレイしてよい。<br><br>《自》 詠唱： 《ストリーマー》 （ 《有効》 リムーブ 《誘発》 あなたの 《ストリーマー》 が 《アタック成功》 する。 《効果》 このカードをコストを支払わずにプレイしてよい。）", //JP_TEXT
		""	//TW_TEXT
		],[
		"VE02-038", //ID
		"img/cardimg/VE02-038.png", //SRC
		"静かなる襲撃 マキナ・アルクス", //NAME
		"R", //RARE
		"キャラカード", //TYPE
		"3", //COST
		"0", //COSTDOWN
		"5000", //POWER
		"☆", //MISSION
		"ファンタジー", //FEATURE
		"ストリーマー/夏休み", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エリア 《誘発》 《登場時》 《効果》 ミッションフェイズ終了時まで、このカードのパワーを＋3000する。<br><br>《起》 《有効》 キープ 《コスト》 あなたの手札を3枚除外する。 《効果》 このカードを 《リブート》 で登場させる。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VE02-039", //ID
		"img/cardimg/VE02-039.png", //SRC
		"ターゲットブレイク 穿光ライ", //NAME
		"R", //RARE
		"キャラカード", //TYPE
		"3", //COST
		"0", //COSTDOWN
		"5000", //POWER
		"☆", //MISSION
		"ファンタジー", //FEATURE
		"ストリーマー/夏休み", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《起》 《有効》 《相手ターン1》 エリア 《コスト》 あなたの手札にあるイベントを1枚除外する。 《効果》 相手のエリアにあるコスト5以下のキャラを1枚選び、退場させる。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VE02-040", //ID
		"img/cardimg/VE02-040.png", //SRC
		"フレイム・ドレス", //NAME
		"SR", //RARE
		"イベントカード", //TYPE
		"4", //COST
		"", //COSTDOWN
		"", //POWER
		"☆", //MISSION
		"ファンタジー", //FEATURE
		"ストリーマー/夏休み", //ACCOUNT
		"", //BAN
		"1", //SCOUT
		"", //MAINTENANCE
		"《イベント》 《効果》 このカードを除外し、相手のエリアにあるキャラを1枚選び、10000ダメージを与える。あなたのトラッシュにあるすべてのコスト4以下のイベントをデッキに戻し、シャッフルする。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VE02-041", //ID
		"img/cardimg/VE02-041.png", //SRC
		"緊急オペ？ 久留宮フロレンス", //NAME
		"R", //RARE
		"キャラカード", //TYPE
		"4", //COST
		"1", //COSTDOWN
		"4000", //POWER
		"☆", //MISSION
		"ファンタジー", //FEATURE
		"ストリーマー/夏休み", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《起》 《有効》 リムーブ 《コスト》 あなたのトラッシュを2枚除外する。 《効果》 この能力はあなたのキープが1枚もない場合にしかプレイできない。このカードをデッキに戻し、シャッフルする。あなたの手札にある 《ファンタジー》 を持つカードを1枚選び、キープに置いてよい。ミッションフェイズ終了時まで、あなたは 《同名》 のこの能力をプレイできない。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VE02-042", //ID
		"img/cardimg/VE02-042.png", //SRC
		"慈愛の旋律", //NAME
		"R", //RARE
		"イベントカード", //TYPE
		"4", //COST
		"", //COSTDOWN
		"", //POWER
		"☆", //MISSION
		"ファンタジー", //FEATURE
		"ストリーマー/夏休み", //ACCOUNT
		"", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《イベント》 《効果》 あなたのキープを1枚選び、エネルギーに置く。このカードをキープに置き、1回 《スカウト》 する。<br><br>《起》 《有効》 《相手ターン》 キープ 《コスト》 あなたのエネルギーにあるキャラを1枚トラッシュに置く。 《効果》 1回 《スカウト》 する。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VE02-043", //ID
		"img/cardimg/VE02-043.png", //SRC
		"アドベントヴィーナス", //NAME
		"SR", //RARE
		"イベントカード", //TYPE
		"5", //COST
		"", //COSTDOWN
		"", //POWER
		"☆", //MISSION
		"ファンタジー", //FEATURE
		"ストリーマー/夏休み", //ACCOUNT
		"", //BAN
		"1", //SCOUT
		"", //MAINTENANCE
		"《イベント》 《効果》 相手は自分の手札をすべてランダムな順番でデッキの下に置き、相手は2枚引く。<br><br>《起》 《有効》 《自分ターン》 トラッシュ 《コスト》 このカードを除外する。 《効果》 あなたのトラッシュにあるキャラを1枚選び、あなたのセンターにある 《ストリーマー》 の 《EXP》 にする。ミッションフェイズ終了時まで、あなたは 《同名》 のこの能力をプレイできない。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VE02-044", //ID
		"img/cardimg/VE02-044.png", //SRC
		"ドミネイツ・サマーオーシャン", //NAME
		"R", //RARE
		"イベントカード", //TYPE
		"5", //COST
		"", //COSTDOWN
		"", //POWER
		"☆", //MISSION
		"ファンタジー", //FEATURE
		"ストリーマー/夏休み", //ACCOUNT
		"", //BAN
		"1", //SCOUT
		"", //MAINTENANCE
		"《イベント》 《効果》 あなたのデッキの上から3枚公開し、その中にあるカード名に「ドミネイツ」を含むキャラを0～3枚選び、それぞれ別々のアタック中のキャラがないエリアに 《リブート》 で登場させる。残りを好きな順番でデッキの下に置く。<br><br>《自》 詠唱：カード名に「ドミネイツ」を含むキャラ<br>（ 《有効》 リムーブ 《誘発》 あなたのカード名に「ドミネイツ」を含むキャラが 《アタック成功》 する。 《効果》 このカードをコストを支払わずにプレイしてよい。）", //JP_TEXT
		""	//TW_TEXT
		],[
		"VE02-045", //ID
		"img/cardimg/VE02-045.png", //SRC
		"ドミネイツ モルガナイト", //NAME
		"R", //RARE
		"キャラカード", //TYPE
		"6", //COST
		"1", //COSTDOWN
		"10000", //POWER
		"☆", //MISSION
		"ファンタジー", //FEATURE
		"ストリーマー/夏休み", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"", //JP_TEXT
		""	//TW_TEXT
		],[
		"VE02-046", //ID
		"img/cardimg/VE02-046.png", //SRC
		"禁忌 ルネールルネ・クランシエ", //NAME
		"R", //RARE
		"キャラカード", //TYPE
		"10", //COST
		"0", //COSTDOWN
		"10000", //POWER
		"☆", //MISSION
		"ファンタジー", //FEATURE
		"ストリーマー/夏休み", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エリア 《誘発》 このカードがプレイされて登場する。 《効果》 あなたのデッキとトラッシュをすべて除外する。あなたのリムーブにある 《ファンタジー》 を持つカードを3枚選び、好きな順番でデッキに戻す。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VE02-047", //ID
		"img/cardimg/VE02-047.png", //SRC
		"上陸する波濤 ヨルム", //NAME
		"R", //RARE
		"キャラカード", //TYPE
		"100", //COST
		"0", //COSTDOWN
		"6000", //POWER
		"☆", //MISSION
		"ファンタジー", //FEATURE
		"エネミー/夏休み", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 エンカウント<br>（ 《有効》 エネルギー 《誘発》 このカードがデッキからエネルギーに置かれる。 《効果》 このカードをキャラがないエリアに 《スリープ》 で登場させる。）<br><br>《自》 討伐： 《エネミー》 でない 《夏休み》<br>（ 《有効》 エリア 《誘発》 《エネミー》 でない 《夏休み》 が 《アタック成功》 する。 《効果》 このカードを退場させる。）<br><br>《起》 《有効》 《相手ターン》 キープ 《コスト》 あなたのエリアにあるコスト2以上のキャラを1枚手札に戻す。 《効果》 このカードをキャラがないエリアに 《スリープ》 で登場させる。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VE02-048", //ID
		"img/cardimg/VE02-048.png", //SRC
		"Vividzバケーション", //NAME
		"R", //RARE
		"アカウントカード", //TYPE
		"", //COST
		"", //COSTDOWN
		"", //POWER
		"", //MISSION
		"", //FEATURE
		"Vividzバケーション", //ACCOUNT
		"", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《起》 《アクセル》 《ストリーマー》 《夏休み》<br>（ 《有効》 アカウント 《コスト》 《スリープ》 する。 《効果》 あなたのデッキの上から1枚公開し、そのカードが 《ストリーマー》 か 《夏休み》 の場合、コストを支払わずにプレイしてよい。プレイしなかったならば、エネルギーに置く。）", //JP_TEXT
		""	//TW_TEXT
		],[
		"VE02-049", //ID
		"img/cardimg/VE02-049.png", //SRC
		"マップ L", //NAME
		"R", //RARE
		"カウンターカード", //TYPE
		"", //COST
		"", //COSTDOWN
		"", //POWER
		"", //MISSION
		"", //FEATURE
		"", //ACCOUNT
		"", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"", //JP_TEXT
		""	//TW_TEXT
		],[
		"VE02-050", //ID
		"img/cardimg/VE02-050.png", //SRC
		"マップ R", //NAME
		"R", //RARE
		"カウンターカード", //TYPE
		"", //COST
		"", //COSTDOWN
		"", //POWER
		"", //MISSION
		"", //FEATURE
		"", //ACCOUNT
		"", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"", //JP_TEXT
		""	//TW_TEXT
		],[
		"VE03-001", //ID
		"img/cardimg/VE03-001.png", //SRC
		"夢描く筆 犬山たまき", //NAME
		"R", //RARE
		"キャラカード", //TYPE
		"61", //COST
		"0", //COSTDOWN
		"18000", //POWER
		"A", //MISSION
		"リーダー", //FEATURE
		"のりプロ/たまき", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エリア 《誘発》 《登場時》 《効果》 このカードに 《EXP》 【 《みしろ》 と 《みるく》 と 《タクマ》 と 《ゆずる》 と 《わらべ》 と 《いろは》 と 《レグルシュ》 と 《しん》 がそれぞれ1枚以上】ない場合、このカードをトラッシュに置く。<br><br>《起》 《有効》 手札かキープ 《コスト》 このカード以外のエネルギーと手札にあるあなたのカードを合計8枚トラッシュに置く。 《効果》 このカードを 《リブート》 で登場させ、あなたのトラッシュにある 《みしろ》 と 《みるく》 と 《タクマ》 と 《ゆずる》 と 《わらべ》 と 《いろは》 と 《レグルシュ》 と 《しん》 を1枚ずつ選び、このカードの 《EXP》 にする。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VE03-002", //ID
		"img/cardimg/VE03-002.png", //SRC
		"みんなの夢を叶える場所", //NAME
		"R", //RARE
		"ミッションカード", //TYPE
		"", //COST
		"", //COSTDOWN
		"", //POWER
		"A", //MISSION
		"リーダー", //FEATURE
		"のりプロ/たまき", //ACCOUNT
		"", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《チェック》 《有効》 《自分ターン》 《条件》 ①あなたのエリアで「夢描く筆 犬山たまき」が 《アタック成功》 する。<br><br>《クリア》 《有効》 《スリープ》 《条件》 ❶このカードがあるレーンに相手のキャラがない。❷このターンに、あなたの「夢描く筆 犬山たまき」の能力で「夢描く筆 犬山たまき」が登場している。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VE03-003", //ID
		"img/cardimg/VE03-003.png", //SRC
		"夏の日の思い出 犬山たまき", //NAME
		"R", //RARE
		"キャラカード", //TYPE
		"0", //COST
		"0", //COSTDOWN
		"500", //POWER
		"☆", //MISSION
		"リーダー", //FEATURE
		"のりプロ/たまき", //ACCOUNT
		"1", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エリア 《誘発》 メインフェイズ開始時。 《効果》 1枚引き、あなたの手札を1枚選び、デッキの下に置く。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VE03-004", //ID
		"img/cardimg/VE03-004.png", //SRC
		"はじまりのうた 犬山たまき", //NAME
		"SR", //RARE
		"キャラカード", //TYPE
		"2", //COST
		"0", //COSTDOWN
		"1000", //POWER
		"☆", //MISSION
		"リーダー", //FEATURE
		"のりプロ/たまき", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《起》 《有効》 《自分ターン》 エリア 《コスト》 《スリープ》 する。 《効果》 あなたの手札を1枚選び、トラッシュに置く。あなたの手札にある 《たまき》 以外のコスト5以下の 《のりプロ》 のキャラを1枚選び、 《リブート》 で登場させてよい。この能力で 《タクマ》 をトラッシュに置いたならば、1枚引く。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VE03-005", //ID
		"img/cardimg/VE03-005.png", //SRC
		"誕生祭2022 犬山たまき", //NAME
		"R", //RARE
		"エンゲージカード", //TYPE
		"2", //COST
		"0", //COSTDOWN
		"", //POWER
		"☆", //MISSION
		"リーダー", //FEATURE
		"のりプロ/たまき", //ACCOUNT
		"", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《エンゲージ》 【デッキエンゲージ】コスト0の 《のりプロ》 のキャラ1枚<br>（ 《有効》 すべて 《効果》 このカードがプレイされた場合、あなたのデッキを見て、その中にあるコスト0の 《のりプロ》 のキャラを1枚選び、このカードとコネクトし、 《リブート》 で登場させてよい。残りを元に戻し、シャッフルする。）<br><br>《起》 《有効》 《自分ターン》 手札かキープ 《コスト》 あなたのエネルギーを1枚トラッシュに置く。 《効果》 あなたのエリアにあるコネクトしてない 《のりプロ》 を1枚選び、このカードとコネクトする。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VE03-006", //ID
		"img/cardimg/VE03-006.png", //SRC
		"DRAW A DREAM 犬山たまき", //NAME
		"R", //RARE
		"エンゲージカード", //TYPE
		"3", //COST
		"0", //COSTDOWN
		"", //POWER
		"☆", //MISSION
		"リーダー", //FEATURE
		"のりプロ/たまき", //ACCOUNT
		"", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《エンゲージ》 【デッキエンゲージ】コスト2以下の 《のりプロ》 のキャラ1枚<br>（ 《有効》 すべて 《効果》 このカードがプレイされた場合、あなたのデッキを見て、その中にあるコスト2以下の 《のりプロ》 のキャラを1枚選び、このカードとコネクトし、 《リブート》 で登場させてよい。残りを元に戻し、シャッフルする。）<br><br>《常》 《有効》 コネクト 《効果》 このカードとコネクトしているキャラのパワーを＋2000する。<br><br>《起》 《有効》 手札かキープ 《コスト》 あなたのエネルギーを2枚トラッシュに置く。 《効果》 あなたのエリアにあるコネクトしてない 《のりプロ》 を1枚選び、このカードとコネクトする。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VE03-007", //ID
		"img/cardimg/VE03-007.png", //SRC
		"Dream Custom Made 犬山たまき", //NAME
		"R", //RARE
		"キャラカード", //TYPE
		"4", //COST
		"1", //COSTDOWN
		"4000", //POWER
		"☆", //MISSION
		"リーダー", //FEATURE
		"のりプロ/たまき", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エリア 《誘発》 《登場時》 《効果》 あなたのデッキの上から1枚公開し、そのカードが 《のりプロ》 の場合、エネルギーに置き、あなたのエネルギーにある 《のりプロ》 のキャラを1枚選び、手札に戻し、あなたのキープが1枚もない場合、あなたの手札を1枚選び、キープに置く。残りを元に戻す。<br><br>《自》 《有効》 エリア 《誘発》 バトルをせず 《アタック成功》 《効果》 あなたのトラッシュにある 《のりプロ》 のキャラを1枚選び、手札に戻してよい。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VE03-008", //ID
		"img/cardimg/VE03-008.png", //SRC
		"いつでもこの場所で 犬山たまき", //NAME
		"SR", //RARE
		"キャラカード", //TYPE
		"5", //COST
		"1", //COSTDOWN
		"7000", //POWER
		"☆", //MISSION
		"リーダー", //FEATURE
		"のりプロ/たまき", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エリア 《誘発》 《登場時》 《効果》 あなたのエネルギーにある 《のりプロ》 を3枚選び、トラッシュに置いてよい。3枚置いたならば、あなたのデッキを見て、その中にあるコスト5以下の 《のりプロ》 のキャラを1枚選び、このカードの隣のエリアに 《リブート》 で登場させてよい。残りを元に戻し、シャッフルする。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VE03-009", //ID
		"img/cardimg/VE03-009.png", //SRC
		"またいつか 犬山たまき", //NAME
		"R", //RARE
		"イベントカード", //TYPE
		"5", //COST
		"", //COSTDOWN
		"", //POWER
		"☆", //MISSION
		"リーダー", //FEATURE
		"のりプロ/たまき", //ACCOUNT
		"", //BAN
		"1", //SCOUT
		"", //MAINTENANCE
		"《イベント》 《効果》 あなたのすべてのエリアに 《のりプロ》 がある場合、相手のエリアにあるキャラを1枚選び、手札に戻す。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VE03-010", //ID
		"img/cardimg/VE03-010.png", //SRC
		"ViVidオリジン 犬山たまき", //NAME
		"SSR", //RARE
		"エンゲージカード", //TYPE
		"6", //COST
		"0", //COSTDOWN
		"", //POWER
		"☆", //MISSION
		"リーダー", //FEATURE
		"のりプロ/たまき", //ACCOUNT
		"", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《エンゲージ》 【デッキエンゲージ】コスト5以下の 《のりプロ》 のキャラ1枚<br>（ 《有効》 すべて 《効果》 このカードがプレイされた場合、あなたのデッキを見て、その中にあるコスト5以下の 《のりプロ》 のキャラを1枚選び、このカードとコネクトし、 《リブート》 で登場させてよい。残りを元に戻し、シャッフルする。）<br><br>《常》 《有効》 手札かキープ 《効果》 あなたのエリアにある 《のりプロ》 のキャラ1枚につき、このカードのコストを－1する。<br><br>《常》 《有効》 コネクト 《効果》 相手はこのカードとコネクトしているキャラをカードの能力で選ぶことができない。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VE03-011", //ID
		"img/cardimg/VE03-011.png", //SRC
		"追想の愛 犬山たまき", //NAME
		"R", //RARE
		"イベントカード", //TYPE
		"6", //COST
		"", //COSTDOWN
		"", //POWER
		"☆", //MISSION
		"リーダー", //FEATURE
		"のりプロ/たまき", //ACCOUNT
		"", //BAN
		"1", //SCOUT
		"", //MAINTENANCE
		"《イベント》 《効果》 あなたのデッキの上から3枚公開し、その中にある 《みしろ》 のキャラと 《みるく》 のキャラと 《ゆずる》 のキャラを1枚ずつ選び、それぞれ別々のエリアに 《リブート》 で登場させてよい。残りを好きな順番でデッキの下に置く。ミッションフェイズ終了時まで、あなたは 《同名》 のこの能力をプレイできない。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VE03-012", //ID
		"img/cardimg/VE03-012.png", //SRC
		"First Cover Song 白雪みしろ", //NAME
		"R", //RARE
		"キャラカード", //TYPE
		"0", //COST
		"0", //COSTDOWN
		"500", //POWER
		"☆", //MISSION
		"1期生", //FEATURE
		"のりプロ/みしろ", //ACCOUNT
		"1", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《起》 《有効》 手札 《コスト》 あなたのエネルギーを1枚トラッシュに置く。 《効果》 このカードをエネルギーに置き、あなたのトラッシュにあるすべての 《のりプロ》 をデッキに戻し、シャッフルする。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VE03-013", //ID
		"img/cardimg/VE03-013.png", //SRC
		"佳麗な果実 白雪みしろ", //NAME
		"SR", //RARE
		"キャラカード", //TYPE
		"2", //COST
		"0", //COSTDOWN
		"3000", //POWER
		"☆", //MISSION
		"1期生", //FEATURE
		"のりプロ/みしろ", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 《ターン1》 エリア 《誘発》 このカードがあるエリア以外にあなたの 《のりプロ》 のキャラが登場する。 《効果》 1枚引いてよい。<br><br>《自》 《有効》 エリア 《誘発》 《アタック成功》 《効果》 あなたのキープが1枚もない場合、あなたのデッキを見て、その中にある 《たまき》 を1枚選び、キープに置いてよい。残りを元に戻し、シャッフルする。置いたならば、あなたの手札を1枚選び、トラッシュに置く。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VE03-014", //ID
		"img/cardimg/VE03-014.png", //SRC
		"ViVidセラピスト 白雪みしろ", //NAME
		"SSR", //RARE
		"キャラカード", //TYPE
		"3", //COST
		"0", //COSTDOWN
		"2000", //POWER
		"☆", //MISSION
		"1期生", //FEATURE
		"のりプロ/みしろ", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《起》 《有効》 《自分ターン》 エリア 《コスト》 《スリープ》 する。 《効果》 あなたのトラッシュにある 《同名》 以外のコスト7以下の 《のりプロ》 のキャラを1枚選び、 《リブート》 で登場させ、以下の能力を与える。“ 《常》 《有効》 エリア 《効果》 このカードのアタックであなたは 《スカウト》 できない。”“ 《自》 《有効》 エリア 《誘発》 《アタック成功》 かミッションフェイズ開始時。 《効果》 このカードをトラッシュに置く。”", //JP_TEXT
		""	//TW_TEXT
		],[
		"VE03-015", //ID
		"img/cardimg/VE03-015.png", //SRC
		"のりプロの歌姫 白雪みしろ", //NAME
		"R", //RARE
		"キャラカード", //TYPE
		"4", //COST
		"1", //COSTDOWN
		"4000", //POWER
		"☆", //MISSION
		"1期生", //FEATURE
		"のりプロ/みしろ", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《常》 《有効》 エリア 《効果》 あなたのすべてのエリアにキャラがある場合、あなたのエリアにあるキャラはカードの能力でダメージを受けず、パワーはカードの能力で減らない。<br><br>《自》 《有効》 エリア 《誘発》 《登場時》 《効果》 あなたのキープを1枚選び、トラッシュに置いてよい。置いたならば、あなたのトラッシュにある 《のりプロ》 を1枚選び、キープに置く。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VE03-016", //ID
		"img/cardimg/VE03-016.png", //SRC
		"1周年記念 白雪みしろ", //NAME
		"R", //RARE
		"キャラカード", //TYPE
		"5", //COST
		"1", //COSTDOWN
		"7000", //POWER
		"☆", //MISSION
		"1期生", //FEATURE
		"のりプロ/みしろ", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《常》 《有効》 エリア 《効果》 このカードと 《たまき》 がコネクトしている場合、あなたのエリアにある 《のりプロ》 のパワーを＋2000する。<br><br>《自》 《有効》 《ターン1》 エリア 《誘発》 《アタック成功》 《効果》 このカードを 《リブート》 する。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VE03-017", //ID
		"img/cardimg/VE03-017.png", //SRC
		"花紅柳緑 白雪みしろ", //NAME
		"R", //RARE
		"イベントカード", //TYPE
		"6", //COST
		"", //COSTDOWN
		"", //POWER
		"☆", //MISSION
		"1期生", //FEATURE
		"のりプロ/みしろ", //ACCOUNT
		"", //BAN
		"1", //SCOUT
		"", //MAINTENANCE
		"《イベント》 《有効》 《相手ターン》 《効果》 あなたの 《のりプロ》 のキャラがあるレーンでアタック中の相手のキャラをすべて退場させる。ミッションフェイズ終了時まで、あなたは 《同名》 のこの能力をプレイできない。<br><br>《起》 《有効》 《相手ターン》 手札とキープ 《コスト》 あなたのエネルギーにある 《のりプロ》 を3枚トラッシュに置く。 《効果》 このカードをコストを支払わずにプレイする。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VE03-018", //ID
		"img/cardimg/VE03-018.png", //SRC
		"バーチャルメイド 白雪みしろ", //NAME
		"R", //RARE
		"イベントカード", //TYPE
		"8", //COST
		"", //COSTDOWN
		"", //POWER
		"☆", //MISSION
		"1期生", //FEATURE
		"のりプロ/みしろ", //ACCOUNT
		"", //BAN
		"1", //SCOUT
		"", //MAINTENANCE
		"《イベント》 《効果》 あなたのキープを1枚選び、エネルギーに置く。このカードをキープに置き、1回 《スカウト》 する。<br><br>《起》 《有効》 《ターン1》 キープ 《コスト》 なし 《効果》 あなたのデッキを見て、その中にある 《のりプロ》 を1枚選び、トラッシュに置いてよい。残りを元に戻し、シャッフルする。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VE03-019", //ID
		"img/cardimg/VE03-019.png", //SRC
		"Mishiro in Wonderland 白雪みしろ", //NAME
		"R", //RARE
		"キャラカード", //TYPE
		"333", //COST
		"0", //COSTDOWN
		"11000", //POWER
		"☆", //MISSION
		"1期生", //FEATURE
		"のりプロ/みしろ", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エリア 《誘発》 《アタック成功》 《効果》 このカードの 《EXP》 【 《みしろ》 のキャラ】を1枚選び、このカードがあるエリアに 《リブート》 で登場させる。<br><br>《起》 《有効》 手札かキープ 《コスト》 あなたのエネルギーを2枚トラッシュに置く。 《効果》 あなたのエリアにあるこのターンに 《アタック成功》 している 《みしろ》 を1枚選び、そのキャラがあるエリアにこのカードを 《リブート》 で登場させる。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VE03-020", //ID
		"img/cardimg/VE03-020.png", //SRC
		"がってんしょうち!? 愛宮みるく", //NAME
		"R", //RARE
		"キャラカード", //TYPE
		"0", //COST
		"0", //COSTDOWN
		"500", //POWER
		"☆", //MISSION
		"1期生", //FEATURE
		"のりプロ/みるく", //ACCOUNT
		"1", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 《EXP》 《誘発》 このカードがエリアからキャラの 《EXP》 になる。 《効果》 1枚引いてよい。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VE03-021", //ID
		"img/cardimg/VE03-021.png", //SRC
		"見習いバーチャルアイドル 愛宮みるく", //NAME
		"R", //RARE
		"キャラカード", //TYPE
		"2", //COST
		"0", //COSTDOWN
		"5000", //POWER
		"☆", //MISSION
		"1期生", //FEATURE
		"のりプロ/みるく", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《常》 《有効》 エリア 《効果》 あなたのエリアに 《みしろ》 と 《みるく》 と 《ゆずる》 がある場合、相手は 《スカウト》 でカードをプレイできない。<br><br>《自》 《有効》 エリア 《誘発》 このカードがリムーブ以外から登場する。 《効果》 このカードを除外する。<br><br>《自》 《有効》 リムーブ 《誘発》 キャラがアタックする。 《効果》 あなたのエリアに 《同名》 がない場合、このカードをアタック中のキャラがないエリアに 《リブート》 で登場させてよい。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VE03-022", //ID
		"img/cardimg/VE03-022.png", //SRC
		"胸いっぱいの想い 愛宮みるく", //NAME
		"SR", //RARE
		"キャラカード", //TYPE
		"4", //COST
		"1", //COSTDOWN
		"4000", //POWER
		"☆", //MISSION
		"1期生", //FEATURE
		"のりプロ/みるく", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《常》 《有効》 エリア 《効果》 このカードと 《たまき》 がコネクトしている場合、あなたのエリアにある 《のりプロ》 のパワーを＋2000する。<br><br>《起》 《有効》 《自分ターン1》 エリア 《コスト》 トラッシュか手札かキープにある、あなたの 《タクマ》 を1枚除外する。 《効果》 相手のエリアにあるコスト3以下のキャラを1枚選び、退場させる。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VE03-023", //ID
		"img/cardimg/VE03-023.png", //SRC
		"誕生日ディナー 愛宮みるく", //NAME
		"R", //RARE
		"キャラカード", //TYPE
		"6", //COST
		"1", //COSTDOWN
		"9000", //POWER
		"☆", //MISSION
		"1期生", //FEATURE
		"のりプロ/みるく", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《起》 《有効》 《自分ターン》 手札 《コスト》 あなたのエネルギーを1枚トラッシュに置く。 《効果》 あなたのエリアにある 《たまき》 とコネクトしているキャラを1枚選ぶ。選んだならば、このカードをそのキャラがないエリアに 《リブート》 で登場させ、選んだキャラとコネクトしている 《たまき》 を1枚選び、このカードにコネクトする。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VE03-024", //ID
		"img/cardimg/VE03-024.png", //SRC
		"こんくまの秘密？ 熊谷タクマ", //NAME
		"SR", //RARE
		"イベントカード", //TYPE
		"1", //COST
		"", //COSTDOWN
		"", //POWER
		"☆", //MISSION
		"1期生", //FEATURE
		"のりプロ/タクマ", //ACCOUNT
		"", //BAN
		"1", //SCOUT
		"", //MAINTENANCE
		"《イベント》 《効果》 あなたの手札にある 《のりプロ》 を2枚選び、公開してよい。2枚公開したならば、4枚引き、公開したカードを好きな順番でデッキの下に置く。ミッションフェイズ終了時まで、あなたは 《同名》 のこの能力をプレイできない。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VE03-025", //ID
		"img/cardimg/VE03-025.png", //SRC
		"ViVidクリエイター 姫咲ゆずる", //NAME
		"SSR", //RARE
		"キャラカード", //TYPE
		"1", //COST
		"0", //COSTDOWN
		"1000", //POWER
		"☆", //MISSION
		"1期生", //FEATURE
		"のりプロ/ゆずる", //ACCOUNT
		"1", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エリア 《誘発》 《登場時》 《効果》 あなたのデッキの上から3枚公開し、その中にある 《のりプロ》 のキャラを1枚選び、手札に加える。残りを好きな順番でデッキの下に置く。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VE03-026", //ID
		"img/cardimg/VE03-026.png", //SRC
		"学園のマドンナ 姫咲ゆずる", //NAME
		"SR", //RARE
		"キャラカード", //TYPE
		"2", //COST
		"0", //COSTDOWN
		"3000", //POWER
		"☆", //MISSION
		"1期生", //FEATURE
		"のりプロ/ゆずる", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《常》 《有効》 エリア 《効果》 このカードと 《たまき》 がコネクトしている場合、あなたのエリアにある 《のりプロ》 のパワーを＋2000する。<br><br>《自》 《有効》 エリア 《誘発》 《アタック成功》 《効果》 あなたのキープが1枚もない場合、あなたの手札にある 《たまき》 を1枚選び、公開してよい。公開したならば、あなたのトラッシュにある 《タクマ》 を1枚選び、キープに置く。公開したカードを元に戻す。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VE03-027", //ID
		"img/cardimg/VE03-027.png", //SRC
		"アーティストアイドル 姫咲ゆずる", //NAME
		"R", //RARE
		"イベントカード", //TYPE
		"3", //COST
		"", //COSTDOWN
		"", //POWER
		"☆", //MISSION
		"1期生", //FEATURE
		"のりプロ/ゆずる", //ACCOUNT
		"", //BAN
		"1", //SCOUT
		"", //MAINTENANCE
		"《イベント》 《効果》 あなたのトラッシュにある 《同名》 以外の 《のりプロ》 のイベントを1枚選び、コストを支払わずにプレイする。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VE03-028", //ID
		"img/cardimg/VE03-028.png", //SRC
		"ホラーメイド 姫咲ゆずる", //NAME
		"R", //RARE
		"キャラカード", //TYPE
		"5", //COST
		"1", //COSTDOWN
		"7000", //POWER
		"☆", //MISSION
		"1期生", //FEATURE
		"のりプロ/ゆずる", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エリア 《誘発》 《登場時》 《効果》 キープを1枚選び、手札に戻す。あなたのキープを戻したならば、あなたのトラッシュにある 《のりプロ》 を1枚選び、キープに置く。<br><br>《起》 《有効》 エリア 《コスト》 あなたの手札を2枚トラッシュに置く。 《効果》 ミッションフェイズ終了時まで、このキャラが次にバトルする際、バトルによるダメージを受けない。ミッションフェイズ終了時まで、あなたは 《同名》 のこの能力をプレイできない。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VE03-029", //ID
		"img/cardimg/VE03-029.png", //SRC
		"情緒纏綿 鬼灯わらべ", //NAME
		"R", //RARE
		"キャラカード", //TYPE
		"0", //COST
		"0", //COSTDOWN
		"500", //POWER
		"☆", //MISSION
		"ゲーマーズ/リーダー", //FEATURE
		"のりプロ/わらべ", //ACCOUNT
		"1", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《常》 《有効》 《自分ターン》 《EXP》 《効果》 このカードを 《EXP》 に持つキャラが 《のりプロ》 の場合、パワーを＋2000する。<br><br>《起》 《有効》 手札 《コスト》 このカードをトラッシュに置く。 《効果》 あなたのエリアにある 《のりプロ》 を1枚選び、ミッションフェイズ終了時まで、パワーを＋2000する。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VE03-030", //ID
		"img/cardimg/VE03-030.png", //SRC
		"鬼斧神工 鬼灯わらべ", //NAME
		"R", //RARE
		"キャラカード", //TYPE
		"3", //COST
		"0", //COSTDOWN
		"1000", //POWER
		"☆", //MISSION
		"ゲーマーズ/リーダー", //FEATURE
		"のりプロ/わらべ", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エリア 《誘発》 《アタック成功》 《効果》 このカードの 《EXP》 をすべてトラッシュに置き、あなたのトラッシュにある 《のりプロ》 を0～3枚選び、このカードの 《EXP》 にする。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VE03-031", //ID
		"img/cardimg/VE03-031.png", //SRC
		"徹底調査 鬼灯わらべ", //NAME
		"R", //RARE
		"キャラカード", //TYPE
		"4", //COST
		"1", //COSTDOWN
		"4000", //POWER
		"☆", //MISSION
		"ゲーマーズ/リーダー", //FEATURE
		"のりプロ/わらべ", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《常》 《有効》 エリア 《効果》 このカードと 《たまき》 がコネクトしている場合、あなたのエリアにある 《のりプロ》 のパワーを＋2000する。<br><br>《起》 《有効》 エリア 《コスト》 あなたのエネルギーを1枚トラッシュに置く。 《効果》 このカードがコネクトしてない場合、あなたのトラッシュにある 《たまき》 のエンゲージを1枚選び、このカードとコネクトする。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VE03-032", //ID
		"img/cardimg/VE03-032.png", //SRC
		"ゲーマーズリーダー 鬼灯わらべ", //NAME
		"R", //RARE
		"エンゲージカード", //TYPE
		"4", //COST
		"0", //COSTDOWN
		"", //POWER
		"☆", //MISSION
		"ゲーマーズ/リーダー", //FEATURE
		"のりプロ/わらべ", //ACCOUNT
		"", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《エンゲージ》 【デッキエンゲージ】 《いろは》 か 《レグルシュ》 か 《しん》 のキャラ1枚<br>（ 《有効》 すべて 《効果》 このカードがプレイされた場合、あなたのデッキを見て、その中にある 《いろは》 か 《レグルシュ》 か 《しん》 のキャラを1枚選び、このカードとコネクトし、 《リブート》 で登場させてよい。残りを元に戻し、シャッフルする。）<br><br>《起》 《有効》 手札かキープ 《コスト》 あなたのエネルギーを1枚トラッシュに置く。 《効果》 あなたのエリアにあるコネクトしてない 《のりプロ》 を1枚選び、このカードとコネクトする。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VE03-033", //ID
		"img/cardimg/VE03-033.png", //SRC
		"感謝を込めて！ 鬼灯わらべ", //NAME
		"SR", //RARE
		"キャラカード", //TYPE
		"7", //COST
		"1", //COSTDOWN
		"10000", //POWER
		"☆", //MISSION
		"ゲーマーズ/リーダー", //FEATURE
		"のりプロ/わらべ", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《起》 《有効》 《自分ターン》 エリア 《コスト》 あなたのエリアにあるキャラを3枚トラッシュに置く。 《効果》 あなたのエネルギーを3枚選び、トラッシュに置いてよい。3枚トラッシュに置いたならば、あなたのデッキを見て、その中にある 《いろは》 のキャラと 《レグルシュ》 のキャラと 《しん》 のキャラを1枚ずつ選び、それぞれ別々のエリアに 《リブート》 で登場させてよい。残りを元に戻し、シャッフルする。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VE03-034", //ID
		"img/cardimg/VE03-034.png", //SRC
		"ViVidフォクシー 稲荷いろは", //NAME
		"SSR", //RARE
		"キャラカード", //TYPE
		"1", //COST
		"0", //COSTDOWN
		"1000", //POWER
		"☆", //MISSION
		"ゲーマーズ", //FEATURE
		"のりプロ/いろは", //ACCOUNT
		"1", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エリア 《誘発》 《登場時》 《効果》 あなたのデッキを見て、その中にある 《レグルシュ》 か 《しん》 を1枚選び、公開し、手札に加えてよい。残りを元に戻し、シャッフルする。加えたならば、あなたの手札を1枚選び、トラッシュに置く。<br><br>《起》 《有効》 エリア 《コスト》 《スリープ》 する。 《効果》 あなたのデッキの上から2枚見て、好きな順番でデッキの上に置く。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VE03-035", //ID
		"img/cardimg/VE03-035.png", //SRC
		"大切なものに囲まれて 稲荷いろは", //NAME
		"SR", //RARE
		"イベントカード", //TYPE
		"1", //COST
		"", //COSTDOWN
		"", //POWER
		"☆", //MISSION
		"ゲーマーズ", //FEATURE
		"のりプロ/いろは", //ACCOUNT
		"", //BAN
		"1", //SCOUT
		"", //MAINTENANCE
		"《イベント》 《効果》 1枚引く。<br><br>《自》 《有効》 キープ 《誘発》 あなたの 《のりプロ》 のキャラが退場する。 《効果》 このカードをトラッシュに置いてよい。置いたならば、あなたのエネルギーにある退場したキャラと同じカード名のキャラを1枚選び、 《リブート》 で登場させる。ミッションフェイズ終了時まで、あなたは 《同名》 のこの能力をプレイできない。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VE03-036", //ID
		"img/cardimg/VE03-036.png", //SRC
		"九尾の瑞獣 稲荷いろは", //NAME
		"R", //RARE
		"キャラカード", //TYPE
		"2", //COST
		"0", //COSTDOWN
		"2000", //POWER
		"☆", //MISSION
		"ゲーマーズ", //FEATURE
		"のりプロ/いろは", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《常》 《有効》 エリア 《効果》 カードの効果でこのカードを選べる場合、相手はこのカードを選ばなければならない。<br>（選ばなければならないキャラが複数ある場合、それらのうちの1枚を選ぶ。）<br><br>《起》 《有効》 手札かキープ 《コスト》 あなたのエネルギーを1枚トラッシュに置く。 《効果》 あなたのエリアにある 《わらべ》 を1枚選ぶ。選んだならば、このカードをそのキャラの隣のエリアに 《リブート》 で登場させる。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VE03-037", //ID
		"img/cardimg/VE03-037.png", //SRC
		"のりプロゲーマーズ 稲荷いろは", //NAME
		"R", //RARE
		"キャラカード", //TYPE
		"3", //COST
		"0", //COSTDOWN
		"5000", //POWER
		"☆", //MISSION
		"ゲーマーズ", //FEATURE
		"のりプロ/いろは", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エリア 《誘発》 《アタック成功》 《効果》 あなたのキープを1枚選び、手札に戻し、あなたのデッキを見て、その中にある 《わらべ》 を1枚選び、キープに置いてよい。残りを元に戻し、シャッフルする。置いたならば、あなたの手札を1枚選び、トラッシュに置く。<br><br>《自》 《有効》 エリア 《誘発》 このカードが 《わらべ》 の能力で登場する。 《効果》 1枚引いてよい。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VE03-038", //ID
		"img/cardimg/VE03-038.png", //SRC
		"ViVidブレイブ レグルシュ", //NAME
		"SSR", //RARE
		"キャラカード", //TYPE
		"1", //COST
		"0", //COSTDOWN
		"1000", //POWER
		"☆", //MISSION
		"ゲーマーズ", //FEATURE
		"のりプロ/レグルシュ", //ACCOUNT
		"1", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エリア 《誘発》 《登場時》 《効果》 あなたのデッキを見て、その中にある 《いろは》 か 《しん》 を1枚選び、公開し、手札に加えてよい。残りを元に戻し、シャッフルする。加えたならば、あなたの手札を1枚選び、トラッシュに置く。<br><br>《起》 《有効》 《ターン1》 エリア 《コスト》 あなたのエネルギーを1枚トラッシュに置く。 《効果》 《リロード》<br>（あなたのトラッシュにあるすべてのキャラをデッキに戻し、シャッフルする。）", //JP_TEXT
		""	//TW_TEXT
		],[
		"VE03-039", //ID
		"img/cardimg/VE03-039.png", //SRC
		"大人なレディ レグルシュ", //NAME
		"SR", //RARE
		"イベントカード", //TYPE
		"2", //COST
		"", //COSTDOWN
		"", //POWER
		"☆", //MISSION
		"ゲーマーズ", //FEATURE
		"のりプロ/レグルシュ", //ACCOUNT
		"", //BAN
		"1", //SCOUT
		"", //MAINTENANCE
		"《イベント》 《効果》 お互いにキープを1枚選び、エネルギーに置く。あなたのエネルギーにある 《のりプロ》 を1枚選び、キープに置いてよい。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VE03-040", //ID
		"img/cardimg/VE03-040.png", //SRC
		"のりプロゲーマーズ レグルシュ", //NAME
		"R", //RARE
		"キャラカード", //TYPE
		"2", //COST
		"0", //COSTDOWN
		"3000", //POWER
		"☆", //MISSION
		"ゲーマーズ", //FEATURE
		"のりプロ/レグルシュ", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エリア 《誘発》 このカードが 《わらべ》 の能力で登場する。 《効果》 あなたのエリアに 《いろは》 と 《レグルシュ》 と 《しん》 がある場合、相手のエリアにあるキャラを1枚選び、退場させる。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VE03-041", //ID
		"img/cardimg/VE03-041.png", //SRC
		"ゆきんこですどうも レグルシュ", //NAME
		"R", //RARE
		"キャラカード", //TYPE
		"4", //COST
		"1", //COSTDOWN
		"4000", //POWER
		"☆", //MISSION
		"ゲーマーズ", //FEATURE
		"のりプロ/レグルシュ", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《常》 《有効》 エリア 《効果》 あなたのエリアに 《みしろ》 がある場合、このカードのパワーを＋10000する。<br><br>《起》 《有効》 手札かキープ 《コスト》 あなたのエネルギーを1枚トラッシュに置く。 《効果》 あなたのエリアにある 《みしろ》 を1枚選ぶ。選んだならば、このカードをそのキャラの隣のエリアに 《リブート》 で登場させる。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VE03-042", //ID
		"img/cardimg/VE03-042.png", //SRC
		"感涙にむせぶ 猫瀬乃しん", //NAME
		"SR", //RARE
		"キャラカード", //TYPE
		"1", //COST
		"0", //COSTDOWN
		"1000", //POWER
		"☆", //MISSION
		"ゲーマーズ", //FEATURE
		"のりプロ/しん", //ACCOUNT
		"1", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エリア 《誘発》 《登場時》 《効果》 あなたのデッキを見て、その中にある 《いろは》 か 《レグルシュ》 を1枚選び、公開し、手札に加えてよい。残りを元に戻し、シャッフルする。加えたならば、あなたの手札を1枚選び、トラッシュに置く。<br><br>《起》 《有効》 エリア 《コスト》 あなたのエネルギーを1枚トラッシュに置く。 《効果》 あなたのエリアにある 《いろは》 と 《レグルシュ》 と 《しん》 を1枚ずつトラッシュに置いてよい。1枚ずつ置いたならば、あなたの手札かトラッシュにある 《わらべ》 のキャラを1枚選び、 《リブート》 で登場させてよい。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VE03-043", //ID
		"img/cardimg/VE03-043.png", //SRC
		"のりプロゲーマーズ 猫瀬乃しん", //NAME
		"R", //RARE
		"キャラカード", //TYPE
		"4", //COST
		"1", //COSTDOWN
		"4000", //POWER
		"☆", //MISSION
		"ゲーマーズ", //FEATURE
		"のりプロ/しん", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《常》 《有効》 エリア 《効果》 あなたのエリアに 《いろは》 と 《レグルシュ》 と 《しん》 がある場合、相手はあなたのエリアにあるキャラをカードの能力で選ぶことができない。<br><br>《自》 《有効》 エリア 《誘発》 このカードが 《わらべ》 の能力で登場する。 《効果》 1回 《スカウト》 する。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VE03-044", //ID
		"img/cardimg/VE03-044.png", //SRC
		"魅惑の怪盗 猫瀬乃しん", //NAME
		"R", //RARE
		"キャラカード", //TYPE
		"5", //COST
		"1", //COSTDOWN
		"7000", //POWER
		"☆", //MISSION
		"ゲーマーズ", //FEATURE
		"のりプロ/しん", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《起》 《有効》 手札かキープ 《コスト》 あなたのエネルギーを2枚トラッシュに置く。 《効果》 相手のキープにあるコスト2以上のカードを1枚選び、トラッシュに置く。置いたならば、このカードを 《リブート》 で登場させる。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VE03-045", //ID
		"img/cardimg/VE03-045.png", //SRC
		"のりプロ1期生大集合", //NAME
		"R", //RARE
		"ミッションカード", //TYPE
		"", //COST
		"", //COSTDOWN
		"", //POWER
		"B", //MISSION
		"1期生", //FEATURE
		"のりプロ", //ACCOUNT
		"", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《チェック》 《有効》 《自分ターン》 《条件》 ①あなたのエリアに 《みしろ》 と 《みるく》 と 《ゆずる》 があり、あなたのキープに 《タクマ》 がある時、 《たまき》 とコネクトしている 《のりプロ》 のキャラが 《アタック成功》 する。<br><br>《クリア》 《有効》 《スリープ》 《条件》 ❶このカードがあるレーンに相手のキャラがない。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VE03-046", //ID
		"img/cardimg/VE03-046.png", //SRC
		"のりのりらじお！", //NAME
		"R", //RARE
		"ミッションカード", //TYPE
		"", //COST
		"", //COSTDOWN
		"", //POWER
		"C", //MISSION
		"リーダー/1期生", //FEATURE
		"のりプロ", //ACCOUNT
		"", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《チェック》 《有効》 《自分ターン》 《条件》 ①あなたのエリアに 《たまき》 と 《みしろ》 と 《みるく》 がある時、 《のりプロ》 のキャラが 《アタック成功》 する。<br><br>《クリア》 《有効》 《スリープ》 《条件》 ❶このカードがあるレーンに相手のキャラがない。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VE03-047", //ID
		"img/cardimg/VE03-047.png", //SRC
		"夢色パレット", //NAME
		"R", //RARE
		"ミッションカード", //TYPE
		"", //COST
		"", //COSTDOWN
		"", //POWER
		"D", //MISSION
		"リーダー/1期生", //FEATURE
		"のりプロ", //ACCOUNT
		"", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《チェック》 《有効》 《自分ターン》 《条件》 ①あなたのエリアに 《みしろ》 と 《みるく》 と 《ゆずる》 がある時、 《たまき》 とコネクトしている 《のりプロ》 のキャラが 《アタック成功》 する。<br><br>《クリア》 《有効》 《スリープ》 《条件》 ❶このカードがあるレーンに相手のキャラがない。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VE03-048", //ID
		"img/cardimg/VE03-048.png", //SRC
		"#わらたま", //NAME
		"R", //RARE
		"ミッションカード", //TYPE
		"", //COST
		"", //COSTDOWN
		"", //POWER
		"E", //MISSION
		"リーダー", //FEATURE
		"のりプロ", //ACCOUNT
		"", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《チェック》 《有効》 《自分ターン》 《条件》 ①このカードがあるレーンで、以下のいずれかをする。▶ 《たまき》 とコネクトしている 《わらべ》 が 《アタック成功》 する。▶ 《わらべ》 とコネクトしている 《たまき》 が 《アタック成功》 する。<br><br>《クリア》 《有効》 《スリープ》 《条件》 ❶このカードがあるレーンに相手のキャラがない。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VE03-049", //ID
		"img/cardimg/VE03-049.png", //SRC
		"『のりプロゲーマーズ』始動！", //NAME
		"R", //RARE
		"ミッションカード", //TYPE
		"", //COST
		"", //COSTDOWN
		"", //POWER
		"F", //MISSION
		"ゲーマーズ", //FEATURE
		"のりプロ", //ACCOUNT
		"", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《チェック》 《有効》 《自分ターン》 《条件》 ①あなたのエリアに 《いろは》 と 《レグルシュ》 と 《しん》 があり、あなたのキープに 《わらべ》 がある時、 《のりプロ》 のキャラが 《アタック成功》 する。<br><br>《クリア》 《有効》 《スリープ》 《条件》 ❶このカードがあるレーンに相手のキャラがない。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VE03-050", //ID
		"img/cardimg/VE03-050.png", //SRC
		"犬山たまき", //NAME
		"R", //RARE
		"アカウントカード", //TYPE
		"", //COST
		"", //COSTDOWN
		"", //POWER
		"", //MISSION
		"", //FEATURE
		"のりプロ", //ACCOUNT
		"", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《起》 《アクセル》 《ストリーマー》 《のりプロ》<br>（ 《有効》 アカウント 《コスト》 《スリープ》 する。 《効果》 あなたのデッキの上から1枚公開し、そのカードが 《ストリーマー》 か 《のりプロ》 の場合、コストを支払わずにプレイしてよい。プレイしなかったならば、エネルギーに置く。）", //JP_TEXT
		""	//TW_TEXT
		],[
		"VE03-072", //ID
		"img/cardimg/VE03-072.png", //SRC
		"白雪みしろ", //NAME
		"SIGN", //RARE
		"アカウントカード", //TYPE
		"", //COST
		"", //COSTDOWN
		"", //POWER
		"", //MISSION
		"", //FEATURE
		"のりプロ", //ACCOUNT
		"", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《起》 《アクセル》 《ストリーマー》 《のりプロ》", //JP_TEXT
		""	//TW_TEXT
		],[
		"VE03-073", //ID
		"img/cardimg/VE03-073.png", //SRC
		"愛宮みるく", //NAME
		"SIGN", //RARE
		"アカウントカード", //TYPE
		"", //COST
		"", //COSTDOWN
		"", //POWER
		"", //MISSION
		"", //FEATURE
		"のりプロ", //ACCOUNT
		"", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《起》 《アクセル》 《ストリーマー》 《のりプロ》", //JP_TEXT
		""	//TW_TEXT
		],[
		"VE03-074", //ID
		"img/cardimg/VE03-074.png", //SRC
		"熊谷タクマ", //NAME
		"SIGN", //RARE
		"アカウントカード", //TYPE
		"", //COST
		"", //COSTDOWN
		"", //POWER
		"", //MISSION
		"", //FEATURE
		"のりプロ", //ACCOUNT
		"", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《起》 《アクセル》 《ストリーマー》 《のりプロ》", //JP_TEXT
		""	//TW_TEXT
		],[
		"VE03-075", //ID
		"img/cardimg/VE03-075.png", //SRC
		"姫咲ゆずる", //NAME
		"SIGN", //RARE
		"アカウントカード", //TYPE
		"", //COST
		"", //COSTDOWN
		"", //POWER
		"", //MISSION
		"", //FEATURE
		"のりプロ", //ACCOUNT
		"", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《起》 《アクセル》 《ストリーマー》 《のりプロ》", //JP_TEXT
		""	//TW_TEXT
		],[
		"VE03-076", //ID
		"img/cardimg/VE03-076.png", //SRC
		"鬼灯わらべ", //NAME
		"SIGN", //RARE
		"アカウントカード", //TYPE
		"", //COST
		"", //COSTDOWN
		"", //POWER
		"", //MISSION
		"", //FEATURE
		"のりプロ", //ACCOUNT
		"", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《起》 《アクセル》 《ストリーマー》 《のりプロ》", //JP_TEXT
		""	//TW_TEXT
		],[
		"VE03-077", //ID
		"img/cardimg/VE03-077.png", //SRC
		"稲荷いろは", //NAME
		"SIGN", //RARE
		"アカウントカード", //TYPE
		"", //COST
		"", //COSTDOWN
		"", //POWER
		"", //MISSION
		"", //FEATURE
		"のりプロ", //ACCOUNT
		"", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《起》 《アクセル》 《ストリーマー》 《のりプロ》", //JP_TEXT
		""	//TW_TEXT
		],[
		"VE03-078", //ID
		"img/cardimg/VE03-078.png", //SRC
		"レグルシュ・ライオンハート", //NAME
		"SIGN", //RARE
		"アカウントカード", //TYPE
		"", //COST
		"", //COSTDOWN
		"", //POWER
		"", //MISSION
		"", //FEATURE
		"のりプロ", //ACCOUNT
		"", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《起》 《アクセル》 《ストリーマー》 《のりプロ》", //JP_TEXT
		""	//TW_TEXT
		],[
		"VE03-079", //ID
		"img/cardimg/VE03-079.png", //SRC
		"猫瀬乃しん", //NAME
		"SIGN", //RARE
		"アカウントカード", //TYPE
		"", //COST
		"", //COSTDOWN
		"", //POWER
		"", //MISSION
		"", //FEATURE
		"のりプロ", //ACCOUNT
		"", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《起》 《アクセル》 《ストリーマー》 《のりプロ》", //JP_TEXT
		""	//TW_TEXT
		],[
		"VSD01-001", //ID
		"img/cardimg/VSD01-001.png", //SRC
		"大胆策士 ハイリ・アンダーソン", //NAME
		"D", //RARE
		"キャラカード", //TYPE
		"7", //COST
		"1", //COSTDOWN
		"11000", //POWER
		"C", //MISSION
		"サイバー", //FEATURE
		"ストリーマー", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エリア 《誘発》 《登場時》 《効果》 あなたのデッキの上から5枚公開し、その中に同じカード名のカードがある場合、このカードの 《EXP》 をすべてトラッシュに置き、このカードを手札に戻す。公開したカードを好きな順番でデッキの下に置く。<br><br>《自》 《有効》 エリア 《誘発》 《アタック成功》 《効果》 あなたの手札にあるコスト6以下の 《ストリーマー》 のキャラを1枚選び、 《リブート》 で登場させてよい。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VSD01-002", //ID
		"img/cardimg/VSD01-002.png", //SRC
		"奇策の担い手", //NAME
		"D", //RARE
		"ミッションカード", //TYPE
		"", //COST
		"", //COSTDOWN
		"", //POWER
		"C", //MISSION
		"サイバー", //FEATURE
		"ストリーマー", //ACCOUNT
		"", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《チェック》 《有効》 《自分ターン》 《条件》 ①このカードがあるレーンで、あなたの「大胆策士 ハイリ・アンダーソン」が 《アタック成功》 する。<br><br>《クリア》 《有効》 《スリープ》 《条件》 ❶このカードがあるレーンに相手のキャラがない。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VSD01-003", //ID
		"img/cardimg/VSD01-003.png", //SRC
		"響かす銃声 ベル・カナリー", //NAME
		"D", //RARE
		"キャラカード", //TYPE
		"3", //COST
		"0", //COSTDOWN
		"5000", //POWER
		"E", //MISSION
		"ファンタジー", //FEATURE
		"ストリーマー", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《常》 《有効》 エリア 《効果》 このカードがあるレーンに相手のキャラがある場合、このカードはアタックできない。<br><br>《自》 《有効》 エリア 《誘発》 《アタック成功》 《効果》 あなたのデッキの上から7枚公開し、その中にある 《同名》 以外のコスト6以下の 《ストリーマー》 のキャラを1枚選び、キャラがないエリアに 《リブート》 で登場させてよい。残りを元に戻し、シャッフルする。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VSD01-004", //ID
		"img/cardimg/VSD01-004.png", //SRC
		"トリガー・オブ・ストライブ", //NAME
		"D", //RARE
		"ミッションカード", //TYPE
		"", //COST
		"", //COSTDOWN
		"", //POWER
		"E", //MISSION
		"ファンタジー", //FEATURE
		"ストリーマー", //ACCOUNT
		"", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《チェック》 《有効》 《自分ターン》 《条件》 ①あなたのすべてのエリアにコスト3以上の 《ストリーマー》 がある時、コスト6以上の 《ストリーマー》 が 《アタック成功》 する。<br><br>《クリア》 《有効》 《スリープ》 《条件》 ❶このカードがあるレーンに相手のキャラがない。❷あなたのエリアに、このターンに 《アタック成功》 している「響かす銃声 ベル・カナリー」がある。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VSD01-005", //ID
		"img/cardimg/VSD01-005.png", //SRC
		"研究の成果 櫛名田ナギ", //NAME
		"D", //RARE
		"キャラカード", //TYPE
		"6", //COST
		"1", //COSTDOWN
		"9000", //POWER
		"F", //MISSION
		"ファンタジー", //FEATURE
		"ストリーマー", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 《自分ターン》 エリア 《誘発》 《登場時》 《効果》 あなたのアカウントが「天乃 ムラクモ」の場合、あなたのアカウントを 《リブート》 する。<br><br>《起》 《有効》 手札かキープ 《コスト》 あなたのエネルギーを3枚トラッシュに置く。 《効果》 この能力はこのターンに、あなたの「天乃 ムラクモ」の能力で相手のキャラを退場させていた場合にしかプレイできない。このカードを 《リブート》 で登場させる。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VSD01-006", //ID
		"img/cardimg/VSD01-006.png", //SRC
		"憧れを力に変えて", //NAME
		"D", //RARE
		"ミッションカード", //TYPE
		"", //COST
		"", //COSTDOWN
		"", //POWER
		"F", //MISSION
		"ファンタジー", //FEATURE
		"ストリーマー", //ACCOUNT
		"", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《チェック》 《有効》 《自分ターン》 《条件》 ①このターンに、あなたのエリアでコスト6以上の 《ストリーマー》 が2回 《アタック成功》 する。<br><br>《クリア》 《有効》 《スリープ》 《条件》 ❶相手のすべてのエリアにキャラが1枚もない。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VSD01-007", //ID
		"img/cardimg/VSD01-007.png", //SRC
		"奇術師 ナーニャ・マギカ", //NAME
		"D", //RARE
		"キャラカード", //TYPE
		"0", //COST
		"0", //COSTDOWN
		"500", //POWER
		"☆", //MISSION
		"サイバー", //FEATURE
		"ストリーマー/クリスマス", //ACCOUNT
		"1", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エリア 《誘発》 《登場時》 《効果》 相手のミッションを2枚選び、それぞれのミッションを入れ替えて置く。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VSD01-008", //ID
		"img/cardimg/VSD01-008.png", //SRC
		"コインにゆだねて 千川ヒヨウリ", //NAME
		"D", //RARE
		"キャラカード", //TYPE
		"0", //COST
		"0", //COSTDOWN
		"500", //POWER
		"☆", //MISSION
		"サイバー", //FEATURE
		"ストリーマー/クリスマス", //ACCOUNT
		"1", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 《ターン1》 エリア 《誘発》 このカード以外のキャラが登場する。 《効果》 相手は自分のデッキの上から1枚公開する。あなたは公開されたカードをデッキの上か下に置く。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VSD01-009", //ID
		"img/cardimg/VSD01-009.png", //SRC
		"ターキーリベンジ", //NAME
		"D", //RARE
		"イベントカード", //TYPE
		"0", //COST
		"", //COSTDOWN
		"", //POWER
		"☆", //MISSION
		"サイバー", //FEATURE
		"ストリーマー/クリスマス", //ACCOUNT
		"", //BAN
		"1", //SCOUT
		"", //MAINTENANCE
		"《イベント》 《効果》 1枚引く。 《リロード》 （あなたのトラッシュにあるすべてのキャラをデッキに戻し、シャッフルする。）あなたのエネルギーを3枚選び、トラッシュに置いてよい。3枚置いたならば、相手のエリアにあるキャラをコストの合計が5以下になるように0～2枚選び、退場させる。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VSD01-010", //ID
		"img/cardimg/VSD01-010.png", //SRC
		"電子の散歩道 砂時ケイ", //NAME
		"D", //RARE
		"キャラカード", //TYPE
		"0", //COST
		"0", //COSTDOWN
		"500", //POWER
		"☆", //MISSION
		"サイバー", //FEATURE
		"ストリーマー", //ACCOUNT
		"1", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《起》 《有効》 エリア 《コスト》 《スリープ》 する。 《効果》 相手のエリアにキャラが1枚もない場合、あなたのデッキの上から1枚エネルギーに置く。ミッションフェイズ終了時、あなたのエネルギーを1枚選び、トラッシュに置く。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VSD01-011", //ID
		"img/cardimg/VSD01-011.png", //SRC
		"バタフライエフェクト", //NAME
		"D", //RARE
		"イベントカード", //TYPE
		"0", //COST
		"", //COSTDOWN
		"", //POWER
		"☆", //MISSION
		"サイバー", //FEATURE
		"ストリーマー", //ACCOUNT
		"", //BAN
		"1", //SCOUT
		"", //MAINTENANCE
		"《イベント》 《効果》 あなたのデッキを見て、その中にあるカードを0～3枚選び、トラッシュに置く。残りを元に戻し、シャッフルする。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VSD01-012", //ID
		"img/cardimg/VSD01-012.png", //SRC
		"鷹の目 高遠ミハル", //NAME
		"D", //RARE
		"キャラカード", //TYPE
		"0", //COST
		"0", //COSTDOWN
		"500", //POWER
		"☆", //MISSION
		"サイバー", //FEATURE
		"ストリーマー", //ACCOUNT
		"1", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《起》 《有効》 エリア 《コスト》 《スリープ》 する。 《効果》 相手のエリアにキャラが1枚もない場合、1枚引き、あなたの手札を1枚選び、トラッシュに置く。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VSD01-013", //ID
		"img/cardimg/VSD01-013.png", //SRC
		"トレジャーサーチ 宝場サチ", //NAME
		"D", //RARE
		"キャラカード", //TYPE
		"1", //COST
		"0", //COSTDOWN
		"1000", //POWER
		"☆", //MISSION
		"サイバー", //FEATURE
		"ストリーマー", //ACCOUNT
		"1", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エリア 《誘発》 《登場時》 《効果》 このカードをトラッシュに置いてよい。置いたならば、あなたのデッキの上から3枚公開し、その中にある 《サイバー》 を持つカードを1枚選び、手札に加える。残りを好きな順番でデッキの下に置く。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VSD01-014", //ID
		"img/cardimg/VSD01-014.png", //SRC
		"海賊の心得", //NAME
		"D", //RARE
		"イベントカード", //TYPE
		"1", //COST
		"", //COSTDOWN
		"", //POWER
		"☆", //MISSION
		"サイバー", //FEATURE
		"ストリーマー", //ACCOUNT
		"", //BAN
		"1", //SCOUT
		"", //MAINTENANCE
		"《イベント》 《効果》 あなたのデッキの上から2枚エネルギーに置く。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VSD01-015", //ID
		"img/cardimg/VSD01-015.png", //SRC
		"ハイパーアナライズ", //NAME
		"D", //RARE
		"イベントカード", //TYPE
		"1", //COST
		"", //COSTDOWN
		"", //POWER
		"☆", //MISSION
		"サイバー", //FEATURE
		"ストリーマー", //ACCOUNT
		"", //BAN
		"1", //SCOUT
		"", //MAINTENANCE
		"《イベント》 《効果》 3枚引く。ミッションフェイズ終了時まで、あなたは 《同名》 のこの能力をプレイできない。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VSD01-016", //ID
		"img/cardimg/VSD01-016.png", //SRC
		"ミッション スタート", //NAME
		"D", //RARE
		"イベントカード", //TYPE
		"1", //COST
		"", //COSTDOWN
		"", //POWER
		"☆", //MISSION
		"サイバー", //FEATURE
		"ストリーマー", //ACCOUNT
		"", //BAN
		"1", //SCOUT
		"", //MAINTENANCE
		"《イベント》 《効果》 5枚引く。あなたの手札を4枚選び、デッキに戻し、シャッフルする。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VSD01-017", //ID
		"img/cardimg/VSD01-017.png", //SRC
		"救護系女子 リサ・レク・シオン", //NAME
		"D", //RARE
		"キャラカード", //TYPE
		"2", //COST
		"0", //COSTDOWN
		"2000", //POWER
		"☆", //MISSION
		"サイバー", //FEATURE
		"ストリーマー", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エリア 《誘発》 《アタック成功》 《効果》 あなたの手札を1枚選び、トラッシュに置いてよい。置いたならば、あなたのトラッシュにある 《サイバー》 を持つキャラを1枚選び、手札に戻す。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VSD01-018", //ID
		"img/cardimg/VSD01-018.png", //SRC
		"蒐穫者 メリッサ・カラミティ", //NAME
		"D", //RARE
		"キャラカード", //TYPE
		"3", //COST
		"0", //COSTDOWN
		"5000", //POWER
		"☆", //MISSION
		"サイバー", //FEATURE
		"ストリーマー", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《常》 《有効》 エリア 《効果》 あなたのエリアにあるキャラはカードの能力でダメージを受けない。<br><br>《自》 《有効》 エリア 《誘発》 《登場時》 《効果》 あなたのデッキの上から4枚公開する。その中から1枚を手札に加え、1枚をエネルギーに置き、あなたのキープが1枚もない場合、1枚をキープに置き、残りをトラッシュに置く。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VSD01-019", //ID
		"img/cardimg/VSD01-019.png", //SRC
		"ライトニングシュート", //NAME
		"D", //RARE
		"イベントカード", //TYPE
		"3", //COST
		"", //COSTDOWN
		"", //POWER
		"☆", //MISSION
		"サイバー", //FEATURE
		"ストリーマー", //ACCOUNT
		"", //BAN
		"1", //SCOUT
		"", //MAINTENANCE
		"《イベント》 《効果》 相手のエリアにあるコスト5以下のキャラを1枚選び、退場させる。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VSD01-020", //ID
		"img/cardimg/VSD01-020.png", //SRC
		"無茶な要求", //NAME
		"D", //RARE
		"イベントカード", //TYPE
		"3", //COST
		"", //COSTDOWN
		"", //POWER
		"☆", //MISSION
		"サイバー", //FEATURE
		"ストリーマー/クリスマス", //ACCOUNT
		"", //BAN
		"1", //SCOUT
		"", //MAINTENANCE
		"《イベント》 《効果》 相手のキープを1枚選び、トラッシュに置く。相手は自分の手札をランダムに2枚選び、トラッシュに置く。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VSD01-021", //ID
		"img/cardimg/VSD01-021.png", //SRC
		"ボムサイクロン", //NAME
		"D", //RARE
		"イベントカード", //TYPE
		"4", //COST
		"", //COSTDOWN
		"", //POWER
		"☆", //MISSION
		"サイバー", //FEATURE
		"ストリーマー", //ACCOUNT
		"", //BAN
		"1", //SCOUT
		"", //MAINTENANCE
		"《イベント》 《効果》 このカードをエネルギーに置き、相手のエリアにあるキャラを1枚選び、5000ダメージを与える。 《リロード》<br>（あなたのトラッシュにあるすべてのキャラをデッキに戻し、シャッフルする。）", //JP_TEXT
		""	//TW_TEXT
		],[
		"VSD01-022", //ID
		"img/cardimg/VSD01-022.png", //SRC
		"滑空少女 服部シノブ", //NAME
		"D", //RARE
		"キャラカード", //TYPE
		"5", //COST
		"1", //COSTDOWN
		"6000", //POWER
		"☆", //MISSION
		"サイバー", //FEATURE
		"ストリーマー", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エネルギー 《誘発》 このカードが 《スカウト》 によってエネルギーに置かれる。 《効果》 このカード以外のあなたのエネルギーを2枚選び、トラッシュに置いてよい。2枚置いたならば、このカードをアタック中のキャラがないエリアに 《リブート》 で登場させる。ミッションフェイズ終了時、このカードをトラッシュに置く。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VSD01-023", //ID
		"img/cardimg/VSD01-023.png", //SRC
		"虚実一閃", //NAME
		"D", //RARE
		"イベントカード", //TYPE
		"5", //COST
		"", //COSTDOWN
		"", //POWER
		"☆", //MISSION
		"サイバー", //FEATURE
		"ストリーマー", //ACCOUNT
		"", //BAN
		"1", //SCOUT
		"", //MAINTENANCE
		"《イベント》 《効果》 相手のエリアにあるキャラを1枚選び、退場させる。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VSD01-024", //ID
		"img/cardimg/VSD01-024.png", //SRC
		"氷華反衝", //NAME
		"D", //RARE
		"イベントカード", //TYPE
		"7", //COST
		"", //COSTDOWN
		"", //POWER
		"☆", //MISSION
		"サイバー", //FEATURE
		"ストリーマー/クリスマス", //ACCOUNT
		"", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《イベント》 《効果》 相手のエリアにあるキャラを1枚選び、退場させる。<br><br>《自》 《有効》 《相手ターン》 キープ 《誘発》 あなたのキャラが退場する。 《効果》 あなたのエリアにキャラが1枚もない場合、このカードをコストを支払わずにプレイしてよい。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VSD01-025", //ID
		"img/cardimg/VSD01-025.png", //SRC
		"天乃 ムラクモ", //NAME
		"D", //RARE
		"アカウントカード", //TYPE
		"", //COST
		"", //COSTDOWN
		"", //POWER
		"", //MISSION
		"", //FEATURE
		"ムラクモ", //ACCOUNT
		"", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《起》 《一閃》<br>（ 《有効》 アカウント 《コスト》 《スリープ》 する。 《効果》 相手のエリアにあるキャラを1枚選び、退場させる。）", //JP_TEXT
		""	//TW_TEXT
		],[
		"VP01-002", //ID
		"img/cardimg/VP01-002.png", //SRC
		"スーパーダッシュ", //NAME
		"PR", //RARE
		"イベントカード", //TYPE
		"2", //COST
		"", //COSTDOWN
		"", //POWER
		"☆", //MISSION
		"サイバー", //FEATURE
		"キョウカ", //ACCOUNT
		"", //BAN
		"1", //SCOUT
		"", //MAINTENANCE
		"《イベント》 《効果》 ミッションフェイズ終了時まで、現在あなたのすべてのエリアにある 《サイバー》 を持つキャラのパワーを＋2000する。あなたの手札が3枚以下の場合、このカードをエネルギーに置く。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VP01-003", //ID
		"img/cardimg/VP01-003.png", //SRC
		"インサイトセンス", //NAME
		"PR", //RARE
		"イベントカード", //TYPE
		"0", //COST
		"", //COSTDOWN
		"", //POWER
		"☆", //MISSION
		"サイバー", //FEATURE
		"玲", //ACCOUNT
		"", //BAN
		"1", //SCOUT
		"", //MAINTENANCE
		"《イベント》 《効果》 あなたのデッキの上から1枚見て、そのカードを手札に加えるかデッキの上に置く。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VP01-004", //ID
		"img/cardimg/VP01-004.png", //SRC
		"うさらびぴょんぴょん", //NAME
		"PR", //RARE
		"イベントカード", //TYPE
		"1", //COST
		"", //COSTDOWN
		"", //POWER
		"☆", //MISSION
		"サイバー", //FEATURE
		"らぶり", //ACCOUNT
		"", //BAN
		"1", //SCOUT
		"", //MAINTENANCE
		"《イベント》 《効果》 あなたの手札を1枚選び、エネルギーに置いてよい。置いたならば、あなたのエネルギーにあるコスト4以下のキャラを1枚選び、手札に戻す。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VP01-005", //ID
		"img/cardimg/VP01-005.png", //SRC
		"無垢なる献身", //NAME
		"PR", //RARE
		"イベントカード", //TYPE
		"0", //COST
		"", //COSTDOWN
		"", //POWER
		"☆", //MISSION
		"サイバー", //FEATURE
		"まりあ", //ACCOUNT
		"", //BAN
		"1", //SCOUT
		"", //MAINTENANCE
		"《イベント》 《効果》 あなたのエリアにあるキャラを1枚選び、このカードをそのキャラの 《EXP》 にする。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VP01-006", //ID
		"img/cardimg/VP01-006.png", //SRC
		"サンダーピック", //NAME
		"PR", //RARE
		"イベントカード", //TYPE
		"1", //COST
		"", //COSTDOWN
		"", //POWER
		"☆", //MISSION
		"サイバー", //FEATURE
		"シェリー", //ACCOUNT
		"", //BAN
		"1", //SCOUT
		"", //MAINTENANCE
		"《イベント》 《効果》 あなたのキープを1枚選び、エネルギーに置く。このカードをキープに置く。<br><br>《起》 《有効》 キープ 《コスト》 このカードをトラッシュに置く。 《効果》 あなたの手札を1枚選び、トラッシュに置く。あなたのトラッシュにある 《サイバー》 のキャラを1枚選び、キープに置く。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VP01-007", //ID
		"img/cardimg/VP01-007.png", //SRC
		"小悪魔的発想", //NAME
		"PR", //RARE
		"イベントカード", //TYPE
		"0", //COST
		"", //COSTDOWN
		"", //POWER
		"☆", //MISSION
		"サイバー", //FEATURE
		"ストリーマー", //ACCOUNT
		"", //BAN
		"1", //SCOUT
		"", //MAINTENANCE
		"《イベント》 《効果》 3枚引く。あなたの手札を2枚選び、トラッシュに置く。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VP02-001", //ID
		"img/cardimg/VP02-001.png", //SRC
		"ハロー ビビッヅ", //NAME
		"PR", //RARE
		"イベントカード", //TYPE
		"0", //COST
		"", //COSTDOWN
		"", //POWER
		"☆", //MISSION
		"サイバー", //FEATURE
		"ストリーマー", //ACCOUNT
		"", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《イベント》 《効果》 あなたのエネルギーを2枚選び、トラッシュに置く。2枚置いたならば、3回 《スカウト》 する。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VP02-003", //ID
		"img/cardimg/VP02-003.png", //SRC
		"狙い済ました射撃", //NAME
		"PR", //RARE
		"イベントカード", //TYPE
		"2", //COST
		"", //COSTDOWN
		"", //POWER
		"☆", //MISSION
		"サイバー", //FEATURE
		"ストリーマー", //ACCOUNT
		"", //BAN
		"1", //SCOUT
		"", //MAINTENANCE
		"《イベント》 《効果》 相手のエリアにある、相手のキープにあるカードのコスト以下のキャラを1枚選び、退場させる。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VP02-004", //ID
		"img/cardimg/VP02-004.png", //SRC
		"大物ゲット 川海釣果", //NAME
		"PR", //RARE
		"キャラカード", //TYPE
		"4", //COST
		"1", //COSTDOWN
		"4000", //POWER
		"☆", //MISSION
		"サイバー", //FEATURE
		"ストリーマー", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エリア 《誘発》 《登場時》 《効果》 以下の効果から1つ選び、解決する。▶あなたの手札が1枚もない場合、2枚引く。▶あなたのエネルギーが2枚以下の場合、トラッシュを0～2枚選び、エネルギーに置く。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VP02-006", //ID
		"img/cardimg/VP02-006.png", //SRC
		"不屈の精神 ララ・ランジュ", //NAME
		"PR", //RARE
		"キャラカード", //TYPE
		"6", //COST
		"1", //COSTDOWN
		"9000", //POWER
		"☆", //MISSION
		"サイバー", //FEATURE
		"ストリーマー", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エリア 《誘発》 《登場時》 《効果》 あなたの手札にある 《サイバー》 を持つキャラを1枚選び、公開してよい。公開したならば、そのカードをデッキの上に置く。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VP02-007", //ID
		"img/cardimg/VP02-007.png", //SRC
		"可能性の目覚め 時渡ヒナ", //NAME
		"PR", //RARE
		"キャラカード", //TYPE
		"2", //COST
		"0", //COSTDOWN
		"3000", //POWER
		"☆", //MISSION
		"サイバー", //FEATURE
		"ストリーマー/クリスマス", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《起》 《有効》 エリア 《コスト》 《スリープ》 する。 《効果》 あなたのエリアにあるキャラを1枚選び、トラッシュに置いてよい。置いたならば、あなたのデッキを見て、トラッシュに置いたキャラのコストより1高いコストのキャラを1枚選び、キャラのないエリアに 《リブート》 で登場させてよい。残りを元に戻し、シャッフルする。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VP03-001", //ID
		"img/cardimg/VP03-001.png", //SRC
		"ミミックパニック！", //NAME
		"PR", //RARE
		"イベントカード", //TYPE
		"5", //COST
		"", //COSTDOWN
		"", //POWER
		"☆", //MISSION
		"ファンタジー", //FEATURE
		"ノイ", //ACCOUNT
		"", //BAN
		"1", //SCOUT
		"", //MAINTENANCE
		"《イベント》 《効果》 あなたのトラッシュにあるコスト7以下のキャラを1枚選び、キャラがないエリアに 《リブート》 で登場させる。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VP03-002", //ID
		"img/cardimg/VP03-002.png", //SRC
		"トレジャーゲット！", //NAME
		"PR", //RARE
		"イベントカード", //TYPE
		"3", //COST
		"", //COSTDOWN
		"", //POWER
		"☆", //MISSION
		"ファンタジー", //FEATURE
		"キョウカ", //ACCOUNT
		"", //BAN
		"1", //SCOUT
		"", //MAINTENANCE
		"《イベント》 《効果》 あなたのエリアにあるキャラを1枚選び、ミッションフェイズ終了時まで、パワーを＋8000する。<br><br>《常》 《有効》 手札かキープ 《効果》 あなたのリムーブが3枚以上ある場合、このカードのコストを－1する。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VP03-003", //ID
		"img/cardimg/VP03-003.png", //SRC
		"ブライトネス・スター", //NAME
		"PR", //RARE
		"イベントカード", //TYPE
		"1", //COST
		"", //COSTDOWN
		"", //POWER
		"☆", //MISSION
		"ファンタジー", //FEATURE
		"玲", //ACCOUNT
		"", //BAN
		"1", //SCOUT
		"", //MAINTENANCE
		"《イベント》 《効果》 あなたのデッキの上から2枚見て、好きな順番でデッキの上に置く。<br><br>《常》 《有効》 手札かキープ 《効果》 あなたのリムーブが3枚以上ある場合、このカードのコストを－1する。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VP03-004", //ID
		"img/cardimg/VP03-004.png", //SRC
		"ミラクルイリュージョン", //NAME
		"PR", //RARE
		"イベントカード", //TYPE
		"2", //COST
		"", //COSTDOWN
		"", //POWER
		"☆", //MISSION
		"ファンタジー", //FEATURE
		"らぶり", //ACCOUNT
		"", //BAN
		"1", //SCOUT
		"", //MAINTENANCE
		"《イベント》 《効果》 あなたのトラッシュにある 《同名》 以外の 《ファンタジー》 を持つイベントを1枚選び、手札に戻す。<br><br>《常》 《有効》 手札かキープ 《効果》 あなたのリムーブが3枚以上ある場合、このカードのコストを－1する。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VP03-005", //ID
		"img/cardimg/VP03-005.png", //SRC
		"新しい世界、素敵な体験", //NAME
		"PR", //RARE
		"イベントカード", //TYPE
		"2", //COST
		"", //COSTDOWN
		"", //POWER
		"☆", //MISSION
		"ファンタジー", //FEATURE
		"まりあ", //ACCOUNT
		"", //BAN
		"1", //SCOUT
		"", //MAINTENANCE
		"《イベント》 《効果》 あなたのリムーブにあるキャラを1枚選び、手札に戻す。<br><br>《常》 《有効》 手札かキープ 《効果》 あなたのリムーブが3枚以上ある場合、このカードのコストを－1する。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VP03-006", //ID
		"img/cardimg/VP03-006.png", //SRC
		"グラス・セイレーン", //NAME
		"PR", //RARE
		"イベントカード", //TYPE
		"1", //COST
		"", //COSTDOWN
		"", //POWER
		"☆", //MISSION
		"ファンタジー", //FEATURE
		"シェリー", //ACCOUNT
		"", //BAN
		"1", //SCOUT
		"", //MAINTENANCE
		"《イベント》 《効果》 あなたのキープを1枚選び、除外する。あなたのデッキの上から2枚公開し、その中から1枚選び、あなたのキープに置き、残りをトラッシュに置く。<br><br>《常》 《有効》 手札かキープ 《効果》 あなたのリムーブが3枚以上ある場合、このカードのコストを－1する。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VP04-001", //ID
		"img/cardimg/VP04-001.png", //SRC
		"空からの悪戯", //NAME
		"PR", //RARE
		"イベントカード", //TYPE
		"4", //COST
		"", //COSTDOWN
		"", //POWER
		"☆", //MISSION
		"ファンタジー", //FEATURE
		"ストリーマー", //ACCOUNT
		"", //BAN
		"1", //SCOUT
		"", //MAINTENANCE
		"《イベント》 《効果》 相手のエリアにある 《EXP》 がないキャラを0～2枚選び、退場させる。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VP04-002", //ID
		"img/cardimg/VP04-002.png", //SRC
		"記念に1枚！", //NAME
		"PR", //RARE
		"イベントカード", //TYPE
		"3", //COST
		"", //COSTDOWN
		"", //POWER
		"☆", //MISSION
		"ファンタジー", //FEATURE
		"ストリーマー/夏休み", //ACCOUNT
		"", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《イベント》 《効果》 トラッシュとリムーブにある、あなたのカードをすべてデッキに戻し、シャッフルする。あなたのデッキの上から1枚公開し、そのカードをコストを支払わずにプレイする。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VP04-003", //ID
		"img/cardimg/VP04-003.png", //SRC
		"えとセトラ戦闘班 ケイラ", //NAME
		"PR", //RARE
		"キャラカード", //TYPE
		"4", //COST
		"1", //COSTDOWN
		"2000", //POWER
		"☆", //MISSION
		"ファンタジー", //FEATURE
		"ストリーマー", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エリア 《誘発》 《アタック成功》 《効果》 あなたの手札をすべてデッキに戻し、シャッフルし、3枚引く。<br><br>《起》 《有効》 エリア 《コスト》 あなたの手札を1枚トラッシュに置く。 《効果》 相手のエリアにある 《スリープ》 のキャラを1枚選び、ミッションフェイズ終了時まで、パワーを－1000する。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VP04-004", //ID
		"img/cardimg/VP04-004.png", //SRC
		"バーガータイム", //NAME
		"PR", //RARE
		"イベントカード", //TYPE
		"4", //COST
		"", //COSTDOWN
		"", //POWER
		"☆", //MISSION
		"ファンタジー", //FEATURE
		"ストリーマー/夏休み", //ACCOUNT
		"", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《常》 《有効》 キープ 《効果》 お互いにカードの能力でカードを引くことはできない。<br><br>《自》 《有効》 《相手ターン》 キープ 《誘発》 ミッションフェイズ開始時。 《効果》 このカードをトラッシュに置く。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VP04-005", //ID
		"img/cardimg/VP04-005.png", //SRC
		"えとセトラ戦闘班 ヴィヴル", //NAME
		"PR", //RARE
		"キャラカード", //TYPE
		"5", //COST
		"1", //COSTDOWN
		"7000", //POWER
		"☆", //MISSION
		"ファンタジー", //FEATURE
		"ストリーマー", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《常》 《有効》 《自分ターン》 《EXP》 《効果》 このカードを 《EXP》 に持つキャラがカード名に「えとセトラ」を含む場合、パワーを＋2000する。 《同名》 のこの能力は重複しない。<br><br>《自》 《有効》 《相手ターン》 エリアかキープ 《誘発》 センターでキャラがアタックする。 《効果》 相手のセンターにあるキャラを1枚選び、手札に戻す。このカードを除外する。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VP04-006", //ID
		"img/cardimg/VP04-006.png", //SRC
		"深海へ誘う調べ マーメイド", //NAME
		"PR", //RARE
		"キャラカード", //TYPE
		"100", //COST
		"0", //COSTDOWN
		"10000", //POWER
		"☆", //MISSION
		"ファンタジー", //FEATURE
		"エネミー", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エネルギー 《誘発》 このカードがデッキからエネルギーに置かれる。 《効果》 あなたのエリアにあるキャラを1枚選び手札に戻してよい。戻したならば、このカードをキャラがないエリアに 《スリープ》 で登場させる。<br><br>《自》 討伐：コスト5以上の 《エネミー》 でないキャラ<br>（ 《有効》 エリア 《誘発》 コスト5以上の 《エネミー》 でないキャラが 《アタック成功》 する。 《効果》 このカードを退場させる。）", //JP_TEXT
		""	//TW_TEXT
		],[
		"VP04-007", //ID
		"img/cardimg/VP04-007.png", //SRC
		"レジャーエントリー", //NAME
		"PR", //RARE
		"イベントカード", //TYPE
		"3", //COST
		"", //COSTDOWN
		"", //POWER
		"☆", //MISSION
		"ファンタジー", //FEATURE
		"ストリーマー/夏休み", //ACCOUNT
		"", //BAN
		"1", //SCOUT
		"", //MAINTENANCE
		"《イベント》 《効果》 あなたのエリアにあるキャラを1枚選び、ミッションフェイズ終了時まで、そのキャラが次にバトルする際、バトルによるダメージを受けない。<br><br>《起》 《有効》 手札 《コスト》 なし 《効果》 このカードをコストを支払いプレイする。ミッションフェイズ終了時まで、あなたは 《同名》 のこの能力をプレイできない。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VP04-008", //ID
		"img/cardimg/VP04-008.png", //SRC
		"月光の待ち人 やむ", //NAME
		"PR", //RARE
		"キャラカード", //TYPE
		"2", //COST
		"0", //COSTDOWN
		"3000", //POWER
		"A", //MISSION
		"花鳥風月", //FEATURE
		"やむ", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 《ターン1》 エリア 《誘発》 《アタック成功》 《効果》 あなたのデッキを見て、その中にある「至上のヨロコビ やむ」を1枚選び、公開し、残りを元に戻し、シャッフルしてよい。公開したカードをデッキの上に置く。<br><br>《起》 《有効》 《自分ターン1》 エリア 《コスト》 あなたの手札を1枚トラッシュに置く。 《効果》 ミッションフェイズ終了時、1枚引く。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VP04-009", //ID
		"img/cardimg/VP04-009.png", //SRC
		"あたしに任せて やむ", //NAME
		"PR", //RARE
		"キャラカード", //TYPE
		"3", //COST
		"0", //COSTDOWN
		"5000", //POWER
		"A", //MISSION
		"花鳥風月", //FEATURE
		"やむ", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《常》 《有効》 すべて 《効果》 あなたの手札が1枚もない場合、あなたのエリアに 《同名》 がないならば、このカードはスカウトアイコンを得る。<br><br>《自》 《有効》 《ターン1》 エリア 《誘発》 《アタック成功》 《効果》 あなたの手札が1枚もない場合、あなたのエネルギーを1枚選び、トラッシュに置いてよい。置いたならば、このカードを 《リブート》 する。<br><br>《起》 《有効》 《自分ターン1》 エリア 《コスト》 あなたの手札を1枚トラッシュに置く。 《効果》 ミッションフェイズ終了時、1枚引く。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VP04-010", //ID
		"img/cardimg/VP04-010.png", //SRC
		"キミたちのお役に立てるなら", //NAME
		"PR", //RARE
		"ミッションカード", //TYPE
		"", //COST
		"", //COSTDOWN
		"", //POWER
		"A", //MISSION
		"花鳥風月", //FEATURE
		"やむ", //ACCOUNT
		"", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《チェック》 《有効》 《自分ターン》 《条件》 ①あなたのすべてのエリアにキャラがある時、このカードがあるレーンで「至上のヨロコビ やむ」が 《アタック成功》 する。<br><br>《クリア》 《有効》 《スリープ》 《条件》 ❶このカードがあるレーンに相手のキャラがない。❷あなたのすべてのエリアに 《スリープ》 の 《花鳥風月》 を持つキャラがある。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VP04-011", //ID
		"img/cardimg/VP04-011.png", //SRC
		"朝陽は苦手？ やむ", //NAME
		"PR", //RARE
		"キャラカード", //TYPE
		"2", //COST
		"0", //COSTDOWN
		"5000", //POWER
		"B", //MISSION
		"花鳥風月", //FEATURE
		"やむ", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エリア 《誘発》 《アタック成功》 《効果》 お互いに自分の手札を1枚選び、トラッシュに置く。<br><br>《自》 《有効》 エリア 《誘発》 《アタック成功》 《効果》 あなたの手札がない場合、あなたのデッキを見て、その中にあるカード名に「やむドリ」を含むカードを1枚選び、公開し、手札に加えてよい。残りを元に戻し、シャッフルする。加えたならば、ミッションフェイズ終了時まで、あなたは 《同名》 のこの能力をプレイできない。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VP04-012", //ID
		"img/cardimg/VP04-012.png", //SRC
		"シアワセになれるから", //NAME
		"PR", //RARE
		"ミッションカード", //TYPE
		"", //COST
		"", //COSTDOWN
		"", //POWER
		"B", //MISSION
		"花鳥風月", //FEATURE
		"やむ", //ACCOUNT
		"", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《チェック》 《有効》 《自分ターン》 《条件》 ①このターンに、あなたの「やむドリ『Fast!』」の能力で、あなたのエリアにある 《やむ》 が4回リブートする。<br><br>《クリア》 《有効》 《スリープ》 《条件》 ❶相手のすべてのエリアにキャラが1枚もない。❷あなたの手札が1枚もない。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VP04-013", //ID
		"img/cardimg/VP04-013.png", //SRC
		"やむドリ『Fast!』", //NAME
		"PR", //RARE
		"イベントカード", //TYPE
		"0", //COST
		"", //COSTDOWN
		"", //POWER
		"☆", //MISSION
		"花鳥風月", //FEATURE
		"やむ", //ACCOUNT
		"", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《イベント》 《効果》 以下の効果から1つ選び、解決する。▶あなたの手札を好きな枚数選び、トラッシュに置く。▶あなたの手札が1枚もない場合、あなたのエネルギーを2枚選び、トラッシュに置いてよい。2枚置いたならば、あなたのエリアにある 《やむ》 を0～2枚選び、 《リブート》 する。<br><br>《自》 《有効》 《自分ターン》 トラッシュ 《誘発》 ミッションフェイズ終了時。 《効果》 あなたの手札が1枚もない場合、このカードを手札に戻してよい。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VP04-014", //ID
		"img/cardimg/VP04-014.png", //SRC
		"至上のヨロコビ やむ", //NAME
		"PR", //RARE
		"キャラカード", //TYPE
		"5", //COST
		"1", //COSTDOWN
		"7000", //POWER
		"☆", //MISSION
		"花鳥風月", //FEATURE
		"やむ", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《常》 《有効》 すべて 《効果》 あなたの手札が1枚もない場合、あなたのエリアに 《同名》 がないならば、このカードはスカウトアイコンを得る。<br><br>《常》 《有効》 《自分ターン》 エリア 《効果》 あなたの手札が1枚もない場合、相手は元々のコストが4以下のイベントをプレイできない。<br><br>《起》 《有効》 《ターン1》 エリア 《コスト》 なし 《効果》 このターンに、このカードが 《アタック成功》 している場合、あなたのキープを1枚選び、トラッシュに置き、あなたのトラッシュにあるカード名に「やむドリ」を含む 《やむ》 を1枚選び、キープに置く。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VP04-015", //ID
		"img/cardimg/VP04-015.png", //SRC
		"闇雲 やむ", //NAME
		"PR", //RARE
		"アカウントカード", //TYPE
		"", //COST
		"", //COSTDOWN
		"", //POWER
		"", //MISSION
		"", //FEATURE
		"やむ", //ACCOUNT
		"", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《起》 《アクセル》 《やむ》 《ストリーマー》<br>（ 《有効》 アカウント 《コスト》 《スリープ》 する。 《効果》 あなたのデッキの上から1枚公開し、そのカードが 《やむ》 か 《ストリーマー》 の場合、コストを支払わずにプレイしてよい。プレイしなかったならば、エネルギーに置く。）", //JP_TEXT
		""	//TW_TEXT
		],[
		"VP05-001", //ID
		"img/cardimg/VP05-001.png", //SRC
		"永遠の17歳 犬山たまき", //NAME
		"PR", //RARE
		"エンゲージカード", //TYPE
		"4", //COST
		"0", //COSTDOWN
		"", //POWER
		"☆", //MISSION
		"リーダー", //FEATURE
		"のりプロ/たまき", //ACCOUNT
		"", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《エンゲージ》 【デッキエンゲージ】コスト3以下の 《のりプロ》 のキャラ1枚<br>（ 《有効》 すべて 《効果》 このカードがプレイされた場合、あなたのデッキを見て、その中にあるコスト3以下の 《のりプロ》 のキャラを1枚選び、このカードとコネクトし、 《リブート》 で登場させてよい。残りを元に戻し、シャッフルする。）<br><br>《起》 《有効》 トラッシュ 《コスト》 あなたのトラッシュにある 《同名》 以外の 《のりプロ》 を2枚好きな順番でデッキの下に置く。 《効果》 このカードを手札に戻す。ミッションフェイズ終了時まで、あなたは 《同名》 のこの能力をプレイできない。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VP05-002", //ID
		"img/cardimg/VP05-002.png", //SRC
		"たまきの妹 白雪みしろ", //NAME
		"PR", //RARE
		"キャラカード", //TYPE
		"5", //COST
		"0", //COSTDOWN
		"514", //POWER
		"☆", //MISSION
		"1期生", //FEATURE
		"のりプロ/みしろ", //ACCOUNT
		"1", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エネルギー 《誘発》 このカードが 《スカウト》 によってエネルギーに置かれる。 《効果》 相手のエリアにあるコスト5以下のキャラを1枚選び、退場させてよい。退場させたならば、ミッションフェイズ終了時まで、あなたは 《同名》 のこの能力をプレイできない。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VP05-003", //ID
		"img/cardimg/VP05-003.png", //SRC
		"みしろの妹 愛宮みるく", //NAME
		"PR", //RARE
		"キャラカード", //TYPE
		"1", //COST
		"0", //COSTDOWN
		"1126", //POWER
		"☆", //MISSION
		"1期生", //FEATURE
		"のりプロ/みるく", //ACCOUNT
		"1", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エネルギー 《誘発》 このカードが 《スカウト》 によってエネルギーに置かれる。 《効果》 2枚引いてよい。引いたならば、ミッションフェイズ終了時まで、あなたは 《同名》 のこの能力をプレイできない。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VP05-004", //ID
		"img/cardimg/VP05-004.png", //SRC
		"みるくの妹 姫咲ゆずる", //NAME
		"PR", //RARE
		"キャラカード", //TYPE
		"1", //COST
		"0", //COSTDOWN
		"925", //POWER
		"☆", //MISSION
		"1期生", //FEATURE
		"のりプロ/ゆずる", //ACCOUNT
		"1", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エネルギー 《誘発》 このカードが 《スカウト》 によってエネルギーに置かれる。 《効果》 あなたのデッキの上から1枚エネルギーに置いてよい。置いたならば、ミッションフェイズ終了時まで、あなたは 《同名》 のこの能力をプレイできない。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VP05-005", //ID
		"img/cardimg/VP05-005.png", //SRC
		"ヒーローファン 鬼灯わらべ", //NAME
		"PR", //RARE
		"キャラカード", //TYPE
		"1", //COST
		"0", //COSTDOWN
		"500", //POWER
		"☆", //MISSION
		"ゲーマーズ/リーダー", //FEATURE
		"のりプロ/わらべ", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"", //JP_TEXT
		""	//TW_TEXT
		],[
		"VP05-006", //ID
		"img/cardimg/VP05-006.png", //SRC
		"小っちゃな 稲荷いろは", //NAME
		"PR", //RARE
		"キャラカード", //TYPE
		"3", //COST
		"0", //COSTDOWN
		"5000", //POWER
		"☆", //MISSION
		"ゲーマーズ", //FEATURE
		"のりプロ/いろは", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《起》 《有効》 《自分ターン》 手札 《コスト》 あなたのエリアにある 《同名》 以外の 《EXP》 を持たない 《リブート》 のキャラを2枚好きな順番でデッキの下に置く。 《効果》 このカードを 《リブート》 で登場させる。ミッションフェイズ終了時まで、あなたは 《同名》 のこの能力をプレイできない。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VP05-007", //ID
		"img/cardimg/VP05-007.png", //SRC
		"獅子の元王女 レグルシュ", //NAME
		"PR", //RARE
		"キャラカード", //TYPE
		"2", //COST
		"0", //COSTDOWN
		"3000", //POWER
		"☆", //MISSION
		"ゲーマーズ", //FEATURE
		"のりプロ/レグルシュ", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《起》 《有効》 《自分ターン》 エリア 《コスト》 《スリープ》 する。 《効果》 1回 《スカウト》 し、このカードがあるレーンにある相手のキャラを1枚選び、9000ダメージを与える。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VP05-008", //ID
		"img/cardimg/VP05-008.png", //SRC
		"無限の声色 猫瀬乃しん", //NAME
		"PR", //RARE
		"キャラカード", //TYPE
		"0", //COST
		"0", //COSTDOWN
		"500", //POWER
		"☆", //MISSION
		"ゲーマーズ", //FEATURE
		"のりプロ/しん", //ACCOUNT
		"1", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 《自分ターン》 《EXP》 《誘発》 メインフェイズ終了時。 《効果》 このカードを 《EXP》 に持つキャラをトラッシュに置く。<br><br>《起》 《有効》 《自分ターン1》 エリア 《コスト》 あなたのエネルギーを1枚トラッシュに置く。 《効果》 あなたのデッキの上から2枚公開し、その中にあるコスト1～3のキャラを1枚選び、このカードがあるエリアに 《リブート》 で登場させてよい。残りを好きな順番でデッキの下に置く。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VP05-014", //ID
		"img/cardimg/VP05-014.png", //SRC
		"橋の上の決闘 ルイン", //NAME
		"PR", //RARE
		"キャラカード", //TYPE
		"0", //COST
		"0", //COSTDOWN
		"4000", //POWER
		"A", //MISSION
		"花鳥風月", //FEATURE
		"ルイン", //ACCOUNT
		"1", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 サイド 《誘発》 ミッションフェイズ終了時。 《効果》 このカードを退場させる。<br><br>《起》 《有効》 《自分ターン1》 エリア 《コスト》 あなたのトラッシュにある 《ルイン》 を2枚好きな順番でデッキの下に置く。 《効果》 あなたのデッキの上から1枚公開する。そのカードがこのカードよりもコストが高い場合、手札に加える。そうでないならば、デッキの下に置く。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VP05-015", //ID
		"img/cardimg/VP05-015.png", //SRC
		"高潔なる薙刀術 ルイン", //NAME
		"PR", //RARE
		"キャラカード", //TYPE
		"2", //COST
		"0", //COSTDOWN
		"5000", //POWER
		"A", //MISSION
		"花鳥風月", //FEATURE
		"ルイン", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 サイド 《誘発》 ミッションフェイズ終了時。 《効果》 このカードを退場させる。<br><br>《起》 《有効》 《自分ターン1》 エリア 《コスト》 あなたのトラッシュにある 《ルイン》 を1枚デッキの下に置く。 《効果》 あなたのデッキの上から1枚公開する。そのカードがこのカードよりもコストが高い場合、手札に加える。そうでないならば、デッキの下に置く。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VP05-016", //ID
		"img/cardimg/VP05-016.png", //SRC
		"勝利者に煌めきの祝福を", //NAME
		"PR", //RARE
		"ミッションカード", //TYPE
		"", //COST
		"", //COSTDOWN
		"", //POWER
		"A", //MISSION
		"花鳥風月", //FEATURE
		"ルイン", //ACCOUNT
		"", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《チェック》 《有効》 《自分ターン》 《条件》 ①このカードがあるレーンで、あなたの「勝負師の才覚 ルイン」が 《アタック成功》 する。<br><br>《クリア》 《有効》 《スリープ》 《条件》 ❶このカードのあるレーンに相手のキャラがない。❷あなたのトラッシュが1枚もない。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VP05-017", //ID
		"img/cardimg/VP05-017.png", //SRC
		"突然の乱入者 ルイン", //NAME
		"PR", //RARE
		"キャラカード", //TYPE
		"5", //COST
		"0", //COSTDOWN
		"7000", //POWER
		"B", //MISSION
		"花鳥風月", //FEATURE
		"ルイン", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エリア 《誘発》 《登場時》 《効果》 あなたのデッキを見て、その中にある「一流の直感」を1枚選び、公開し、手札に加えてよい。残りを元に戻し、シャッフルする。<br><br>《起》 《有効》 《ターン1》 エリア 《コスト》 あなたの手札を1枚デッキの下に置く。 《効果》 あなたのデッキの上から1枚公開する。そのカードがこのカードよりもコストが低い場合、エネルギーに置く。そうでないならば、デッキの下に置く。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VP05-018", //ID
		"img/cardimg/VP05-018.png", //SRC
		"ウィナー・テイク・オール", //NAME
		"PR", //RARE
		"ミッションカード", //TYPE
		"", //COST
		"", //COSTDOWN
		"", //POWER
		"B", //MISSION
		"花鳥風月", //FEATURE
		"ルイン", //ACCOUNT
		"", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《チェック》 《有効》 《自分ターン》 《条件》 ①このターンに、あなたが 《アクセル》 でコスト5以上の 《花鳥風月》 を持つ 《ルイン》 をプレイする。<br><br>《クリア》 《有効》 《スリープ》 《条件》 ❶このカードがあるレーンに相手のキャラがない。❷このターンに、あなたが「一流の直感」を2回以上プレイしている。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VP05-019", //ID
		"img/cardimg/VP05-019.png", //SRC
		"一流の直感", //NAME
		"PR", //RARE
		"イベントカード", //TYPE
		"1", //COST
		"", //COSTDOWN
		"", //POWER
		"☆", //MISSION
		"花鳥風月", //FEATURE
		"ルイン", //ACCOUNT
		"", //BAN
		"1", //SCOUT
		"", //MAINTENANCE
		"《イベント》 《効果》 好きな数字を1つ選び、デッキの上から5枚公開する。その中にある選んだ数字と同じコストの 《ルイン》 を1枚選び、デッキの上に置く。残りをトラッシュに置く。<br><br>《起》 《有効》 《自分ターン》 トラッシュ 《コスト》 このカード以外のあなたのトラッシュにある 《ルイン》 を2枚好きな順番でデッキの下に置く。 《効果》 このカードをデッキに戻し、シャッフルする。ミッションフェイズ終了時まで、あなたは 《同名》 のこの能力をプレイできない。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VP05-020", //ID
		"img/cardimg/VP05-020.png", //SRC
		"勝負師の才覚 ルイン", //NAME
		"PR", //RARE
		"キャラカード", //TYPE
		"12", //COST
		"0", //COSTDOWN
		"12000", //POWER
		"☆", //MISSION
		"花鳥風月", //FEATURE
		"ルイン", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エリア 《誘発》 《登場時》 《効果》 あなたのトラッシュをすべてこのカードの 《EXP》 にする。ミッションフェイズ終了時まで、このカードはカードの能力で選ぶことができない。<br><br>《自》 《有効》 エリア 《誘発》 ミッションフェイズ終了時。 《効果》 このカードの 《EXP》 をすべてデッキに戻し、シャッフルする。<br><br>《起》 《有効》 《自分ターン1》 エリア 《コスト》 このカードの 《EXP》 を5枚以上すべてデッキに戻し、シャッフルする。 《効果》 あなたのエリアにある 《ルイン》 を1枚選び、 《リブート》 し、あなたのアカウントを 《リブート》 する。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VP05-021", //ID
		"img/cardimg/VP05-021.png", //SRC
		"賭賭神 ルイン", //NAME
		"PR", //RARE
		"アカウントカード", //TYPE
		"", //COST
		"", //COSTDOWN
		"", //POWER
		"", //MISSION
		"", //FEATURE
		"ルイン", //ACCOUNT
		"", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《起》 《アクセル》 《ルイン》 《ストリーマー》<br>（ 《有効》 アカウント 《コスト》 《スリープ》 する。 《効果》 あなたのデッキの上から1枚公開し、そのカードが 《ルイン》 か 《ストリーマー》 の場合、コストを支払わずにプレイしてよい。プレイしなかったならば、エネルギーに置く。）", //JP_TEXT
		""	//TW_TEXT
		],[
		"VP05-022", //ID
		"img/cardimg/VP05-022.png", //SRC
		"紅華舞踊 夕霧", //NAME
		"PR", //RARE
		"キャラカード", //TYPE
		"3", //COST
		"0", //COSTDOWN
		"4000", //POWER
		"A", //MISSION
		"花鳥風月", //FEATURE
		"ストリーマー", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《常》 《有効》 エリア 《効果》 このカードに 《EXP》 【「白華舞踊 夕霧」】がある場合、このカードのパワーを＋2000する。<br><br>《自》 《有効》 トラッシュ 《誘発》 あなたの「白華舞踊 夕霧」が 《アタック成功》 する。 《効果》 あなたのエリアに「白華舞踊 夕霧」がある場合、手札とエネルギーにある、あなたのカードを1枚ずつ選び、トラッシュに置いてよい。1枚ずつ置いたならば、このカードを 《リブート》 で登場させ、あなたのエリアにある「白華舞踊 夕霧」を1枚選び、このカードの 《EXP》 にする。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VP05-023", //ID
		"img/cardimg/VP05-023.png", //SRC
		"白華舞踊 夕霧", //NAME
		"PR", //RARE
		"キャラカード", //TYPE
		"3", //COST
		"0", //COSTDOWN
		"4000", //POWER
		"A", //MISSION
		"花鳥風月", //FEATURE
		"ストリーマー", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エリア 《誘発》 《登場時》 《効果》 このカードに 《EXP》 【「紅華舞踊 夕霧」】がある場合、相手のエリアにあるキャラを1枚選び、2000ダメージを与える。<br><br>《自》 《有効》 トラッシュ 《誘発》 あなたの「紅華舞踊 夕霧」が 《アタック成功》 する。 《効果》 あなたのエリアに「紅華舞踊 夕霧」がある場合、手札とエネルギーにある、あなたのカードを1枚ずつ選び、トラッシュに置いてよい。1枚ずつ置いたならば、このカードを 《リブート》 で登場させ、あなたのエリアにある「紅華舞踊 夕霧」を1枚選び、このカードの 《EXP》 にする。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VP05-024", //ID
		"img/cardimg/VP05-024.png", //SRC
		"紅白纏いし華乙女", //NAME
		"PR", //RARE
		"ミッションカード", //TYPE
		"", //COST
		"", //COSTDOWN
		"", //POWER
		"A", //MISSION
		"花鳥風月", //FEATURE
		"ストリーマー", //ACCOUNT
		"", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《チェック》 《有効》 《自分ターン》 《条件》 ①このターンに、あなたのエリアで以下のいずれかを合計3回する。▶「紅華舞踊 夕霧」が 《アタック成功》 する。▶「白華舞踊 夕霧」が 《アタック成功》 する。<br><br>《クリア》 《有効》 《スリープ》 《条件》 ❶このカードがあるレーンに相手のキャラがない。❷以下のいずれかである。▶あなたのエリアにある「紅華舞踊 夕霧」に 《EXP》 【「白華舞踊 夕霧」】がある。▶あなたのエリアにある「白華舞踊 夕霧」に 《EXP》 【「紅華舞踊 夕霧」】がある。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VP05-025", //ID
		"img/cardimg/VP05-025.png", //SRC
		"大漁の秘訣 北河岸雫", //NAME
		"PR", //RARE
		"キャラカード", //TYPE
		"0", //COST
		"0", //COSTDOWN
		"500", //POWER
		"☆", //MISSION
		"花鳥風月", //FEATURE
		"ストリーマー", //ACCOUNT
		"1", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エネルギー 《誘発》 このカードが 《スカウト》 によってエネルギーに置かれる。 《効果》 このカードとあなたのエネルギーを1枚選び、トラッシュに置いてよい。2枚置いたならば、相手のエリアにあるコスト4以下のキャラを1枚選び、退場させる。<br><br>《起》 《有効》 エリア 《コスト》 このカードを除外する。 《効果》 《リロード》<br>（あなたのトラッシュにあるすべてのキャラをデッキに戻し、シャッフルする。）", //JP_TEXT
		""	//TW_TEXT
		],[
		"VP05-026", //ID
		"img/cardimg/VP05-026.png", //SRC
		"魅惑の投擲者 リリン・アルムス", //NAME
		"PR", //RARE
		"キャラカード", //TYPE
		"2", //COST
		"0", //COSTDOWN
		"2000", //POWER
		"☆", //MISSION
		"花鳥風月", //FEATURE
		"ストリーマー", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エリア 《誘発》 《登場時》 《効果》 あなたのトラッシュにあるコスト4以下のキャラを1枚選び、手札に戻してよい。戻したならば、あなたの手札を1枚選び、デッキの下に置く。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VP05-036", //ID
		"img/cardimg/VP05-036.png", //SRC
		"貫く電子 冴葉ネティック", //NAME
		"PR", //RARE
		"キャラカード", //TYPE
		"2", //COST
		"0", //COSTDOWN
		"3000", //POWER
		"☆", //MISSION
		"サイバー", //FEATURE
		"ストリーマー", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エリア 《誘発》 《登場時》 《効果》 このカードがコネクトしてない場合、あなたのデッキの上から5枚公開し、その中にある 《サイバー》 を持つエンゲージを1枚選び、手札に加えてよい。残りを好きな順番でデッキの下に置く。<br><br>《自》 《有効》 エリア 《誘発》 《アタック成功》 《効果》 このカードがコネクトしてる場合、あなたの手札にある 《サイバー》 を持つカードを2枚選び、トラッシュに置いてよい。2枚置いたならば、あなたのトラッシュにあるカード名に「疾走」を含むキャラを1枚選び、 《リブート》 で登場させる。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VP05-037", //ID
		"img/cardimg/VP05-037.png", //SRC
		"電脳稀有『ペネトレーション』", //NAME
		"PR", //RARE
		"エンゲージカード", //TYPE
		"3", //COST
		"0", //COSTDOWN
		"", //POWER
		"☆", //MISSION
		"サイバー", //FEATURE
		"ストリーマー", //ACCOUNT
		"", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《エンゲージ》 【デッキエンゲージ】コスト2以下の 《サイバー》 を持つキャラ1枚<br>（ 《有効》 すべて 《効果》 このカードがプレイされた場合、あなたのデッキを見て、その中にあるコスト2以下の 《サイバー》 を持つキャラを1枚選び、このカードとコネクトし、 《リブート》 で登場させてよい。残りを元に戻し、シャッフルする。）", //JP_TEXT
		""	//TW_TEXT
		],[
		"VP05-038", //ID
		"img/cardimg/VP05-038.png", //SRC
		"古城の黒騎士 ノックス・アルマ", //NAME
		"PR", //RARE
		"キャラカード", //TYPE
		"2", //COST
		"0", //COSTDOWN
		"3000", //POWER
		"☆", //MISSION
		"ファンタジー", //FEATURE
		"ストリーマー", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エリア 《誘発》 《登場時》 《効果》 このカードがコネクトしてない場合、あなたのデッキの上から5枚公開し、その中にある 《ファンタジー》 を持つエンゲージを1枚選び、手札に加えてよい。残りを好きな順番でデッキの下に置く。<br><br>《自》 《有効》 エリア 《誘発》 《アタック成功》 《効果》 このカードがコネクトしてる場合、あなたの手札にある 《ファンタジー》 を持つカードを2枚選び、除外してよい。2枚除外したならば、あなたのトラッシュにある 《エネミー》 を持つキャラを1枚選び、 《リブート》 で登場させる。", //JP_TEXT
		""	//TW_TEXT
		],[
		"VP05-039", //ID
		"img/cardimg/VP05-039.png", //SRC
		"幻想稀有『アズラエル』", //NAME
		"PR", //RARE
		"エンゲージカード", //TYPE
		"3", //COST
		"0", //COSTDOWN
		"", //POWER
		"☆", //MISSION
		"ファンタジー", //FEATURE
		"ストリーマー", //ACCOUNT
		"", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《エンゲージ》 【デッキエンゲージ】コスト2以下の 《ファンタジー》 を持つキャラ1枚<br>（ 《有効》 すべて 《効果》 このカードがプレイされた場合、あなたのデッキを見て、その中にあるコスト2以下の 《ファンタジー》 を持つキャラを1枚選び、このカードとコネクトし、 《リブート》 で登場させてよい。残りを元に戻し、シャッフルする。）", //JP_TEXT
		""	//TW_TEXT
		],[
		"VP05-040", //ID
		"img/cardimg/VP05-040.png", //SRC
		"ドミネイツ ブロンド", //NAME
		"PR", //RARE
		"キャラカード", //TYPE
		"0", //COST
		"0", //COSTDOWN
		"2500", //POWER
		"☆", //MISSION
		"サイバー", //FEATURE
		"ストリーマー", //ACCOUNT
		"1", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"", //JP_TEXT
		""	//TW_TEXT
		],[
		"F07-001", //ID
		"img/cardimg/F07-001.png", //SRC
		"万里一空 キョウカ", //NAME
		"D", //RARE
		"キャラカード", //TYPE
		"3", //COST
		"0", //COSTDOWN
		"5000", //POWER
		"A", //MISSION
		"花鳥風月/サムライ/剣術", //FEATURE
		"キョウカ", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エリア 《誘発》 《アタック成功》 《効果》 あなたの手札にある「燕頷虎頭 キョウカ」を1枚選び、このカードがあるエリアに 《スリープ》 で登場させてよい。<br><br>《起》 《有効》 《自分ターン》 トラッシュ 《コスト》 あなたのトラッシュにあるカード名の異なる 《剣術》 を持つキャラを2枚好きな順番でデッキの下に置く。 《効果》 このカードをデッキに戻し、シャッフルする。2枚引く。ミッションフェイズ終了時まで、あなたは 《同名》 のこの能力をプレイできない。", //JP_TEXT
		""	//TW_TEXT
		],[
		"F07-002", //ID
		"img/cardimg/F07-002.png", //SRC
		"燕頷虎頭 キョウカ", //NAME
		"D", //RARE
		"キャラカード", //TYPE
		"4", //COST
		"1", //COSTDOWN
		"4000", //POWER
		"A", //MISSION
		"花鳥風月/サムライ/剣術", //FEATURE
		"キョウカ", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エリア 《誘発》 《登場時》 《効果》 あなたの手札が3枚以下の場合、1枚引く。<br><br>《自》 《有効》 エリア 《誘発》 《LvUP》 《効果》 このカードに 《EXP》 【「万里一空 キョウカ」】がある場合、あなたの手札にある 《奥義》 を持つ 《キョウカ》 を1枚選び、このカードがあるエリアに 《リブート》 で登場させてよい。", //JP_TEXT
		""	//TW_TEXT
		],[
		"F07-003", //ID
		"img/cardimg/F07-003.png", //SRC
		"船上！晴天！大勝利！", //NAME
		"D", //RARE
		"ミッションカード", //TYPE
		"", //COST
		"", //COSTDOWN
		"", //POWER
		"A", //MISSION
		"花鳥風月/サムライ/剣術", //FEATURE
		"キョウカ", //ACCOUNT
		"", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《チェック》 《有効》 《自分ターン》 《条件》 ①このカードがあるレーンに「燕頷虎頭 キョウカ」の能力によってあなたの 《奥義》 を持つ 《キョウカ》 が登場する。<br><br>《クリア》 《有効》 《スリープ》 《条件》 ❶このカードがあるレーンに相手のキャラがない。❷あなたのエリアに、このターンに 《アタック成功》 している 《奥義》 を持つ 《キョウカ》 がある。", //JP_TEXT
		""	//TW_TEXT
		],[
		"F07-004", //ID
		"img/cardimg/F07-004.png", //SRC
		"いきなり団子 キョウカ", //NAME
		"D", //RARE
		"キャラカード", //TYPE
		"0", //COST
		"0", //COSTDOWN
		"500", //POWER
		"B", //MISSION
		"花鳥風月/サムライ/修行", //FEATURE
		"キョウカ", //ACCOUNT
		"1", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《常》 《有効》 すべて 《効果》 デッキを構築する際、このカードをデッキに8枚まで入れることができる。<br><br>《起》 《有効》 手札 《コスト》 このカードをトラッシュに置く。 《効果》 あなたのエリアを1つ選び、ミッションフェイズ終了時まで、以下の能力を与える。“ 《常》 《有効》 エリア 《効果》 このエリアにある 《キョウカ》 のパワーを＋2000する。”", //JP_TEXT
		""	//TW_TEXT
		],[
		"F07-005", //ID
		"img/cardimg/F07-005.png", //SRC
		"つみあげ団子 キョウカ", //NAME
		"D", //RARE
		"キャラカード", //TYPE
		"5", //COST
		"1", //COSTDOWN
		"7000", //POWER
		"B", //MISSION
		"花鳥風月/サムライ/修行", //FEATURE
		"キョウカ", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 《ターン2》 エリア 《誘発》 《アタック成功》 《効果》 あなたのエリアに 《頭領》 を持つキャラがある場合、あなたのトラッシュにある「いきなり団子 キョウカ」を1枚選び、このカードの 《EXP》 にしてよい。そうした場合、このカードを 《リブート》 する。<br><br>《起》 《有効》 《自分ターン》 エリア 《コスト》 このカードの 《EXP》 【「いきなり団子 キョウカ」】を3枚トラッシュに置く。 《効果》 あなたのエリアに 《頭領》 を持つキャラがある場合、あなたの「出迎え準備完了！」を1枚選び、 《スリープ》 する。", //JP_TEXT
		""	//TW_TEXT
		],[
		"F07-006", //ID
		"img/cardimg/F07-006.png", //SRC
		"出迎え準備完了！", //NAME
		"D", //RARE
		"ミッションカード", //TYPE
		"", //COST
		"", //COSTDOWN
		"", //POWER
		"B", //MISSION
		"花鳥風月/サムライ/修行", //FEATURE
		"キョウカ", //ACCOUNT
		"", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《クリア》 《有効》 《スリープ》 《条件》 ❶このカードがあるレーンに相手のキャラがない。❷あなたのエリアに、このターンに 《アタック成功》 している「つみあげ団子 キョウカ」がある。", //JP_TEXT
		""	//TW_TEXT
		],[
		"F07-007", //ID
		"img/cardimg/F07-007.png", //SRC
		"勾玉に込められたもの キョウカ", //NAME
		"D", //RARE
		"キャラカード", //TYPE
		"2", //COST
		"0", //COSTDOWN
		"2000", //POWER
		"C", //MISSION
		"花鳥風月/サムライ/剣術", //FEATURE
		"キョウカ", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エリア 《誘発》 《アタック成功》 《効果》 このカードと【 《花鳥風月》 を持つエンゲージ】がコネクトしている場合、あなたのデッキを見て、その中にある 《奥義》 を持つ 《キョウカ》 を1枚選び、手札に加えてよい。残りをデッキに戻し、シャッフルする。<br><br>《起》 《有効》 《ターン1》 エリア 《コスト》 あなたのトラッシュにある 《花鳥風月》 を持つエンゲージを2枚デッキに戻し、シャッフルする。 《効果》 あなたのエネルギーにある 《キョウカ》 を1枚選び、デッキの下に置いてよい。置いたならば、1回 《スカウト》 する。", //JP_TEXT
		""	//TW_TEXT
		],[
		"F07-008", //ID
		"img/cardimg/F07-008.png", //SRC
		"終幕 -天真と無双の物語-", //NAME
		"D", //RARE
		"ミッションカード", //TYPE
		"", //COST
		"", //COSTDOWN
		"", //POWER
		"C", //MISSION
		"花鳥風月/サムライ/剣術", //FEATURE
		"キョウカ", //ACCOUNT
		"", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《チェック》 《有効》 《自分ターン》 《条件》 ①あなたのエリアにある「天真と無双の象徴 キョウカ」の能力で「天真と無双の象徴 キョウカ」が 《花鳥風月》 を持つエンゲージとコネクトする。<br><br>《クリア》 《有効》 《スリープ》 《条件》 ❶このカードがあるレーンに相手のキャラがない。❷あなたのエリアに、このターンに 《アタック成功》 している 《奥義》 を持つ 《キョウカ》 がある。", //JP_TEXT
		""	//TW_TEXT
		],[
		"F07-009", //ID
		"img/cardimg/F07-009.png", //SRC
		"真剣勝負！ キョウカ", //NAME
		"D", //RARE
		"キャラカード", //TYPE
		"1", //COST
		"0", //COSTDOWN
		"1000", //POWER
		"D", //MISSION
		"花鳥風月/サムライ/修行", //FEATURE
		"キョウカ", //ACCOUNT
		"1", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 《自分ターン》 エリア 《誘発》 《登場時》 《効果》 あなたの手札を1枚選び、トラッシュに置く。あなたのデッキの上から3枚公開し、その中にある 《修行》 を持つカードを好きな枚数選び、手札に加え、残りを好きな順番でデッキの下に置く。2枚以上加えたならば、ミッションフェイズ終了時まで、あなたは 《修行》 を持たないミッションをクリアできない。", //JP_TEXT
		""	//TW_TEXT
		],[
		"F07-010", //ID
		"img/cardimg/F07-010.png", //SRC
		"乱れつっぱり キョウカ", //NAME
		"D", //RARE
		"キャラカード", //TYPE
		"3", //COST
		"0", //COSTDOWN
		"5000", //POWER
		"D", //MISSION
		"花鳥風月/サムライ/修行", //FEATURE
		"キョウカ", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エリア 《誘発》 《アタック成功》 《効果》 あなたの手札にある 《修行》 を持つ 《キョウカ》 のキャラを1枚選び、 《リブート》 で登場させてよい。登場させたならば、あなたのエネルギーを3枚選び、トラッシュに置き、あなたのトラッシュにある 《修行》 を持つキャラを1枚選び、この能力で登場させたキャラの 《EXP》 にする。", //JP_TEXT
		""	//TW_TEXT
		],[
		"F07-011", //ID
		"img/cardimg/F07-011.png", //SRC
		"戦友と共に キョウカ", //NAME
		"D", //RARE
		"キャラカード", //TYPE
		"9", //COST
		"0", //COSTDOWN
		"10000", //POWER
		"D", //MISSION
		"花鳥風月/サムライ/修行", //FEATURE
		"キョウカ", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《常》 《有効》 エリア 《効果》 あなたのエリアにあるキャラはカードの能力でダメージを受けない。<br><br>《自》 《有効》 エリア 《誘発》 《アタック成功》 《効果》 あなたの「即興コラボ大成功！」を1枚選び、 《スリープ》 する。<br><br>《起》 《有効》 手札 《コスト》 あなたのエネルギーを3枚トラッシュに置く。 《効果》 この能力はこのターンに、コスト5以上の 《修行》 を持つキャラが2回以上 《アタック成功》 している場合にしかプレイできない。このカードを 《リブート》 で登場させる。", //JP_TEXT
		""	//TW_TEXT
		],[
		"F07-012", //ID
		"img/cardimg/F07-012.png", //SRC
		"即興コラボ大成功！", //NAME
		"D", //RARE
		"ミッションカード", //TYPE
		"", //COST
		"", //COSTDOWN
		"", //POWER
		"D", //MISSION
		"花鳥風月/サムライ/修行", //FEATURE
		"キョウカ", //ACCOUNT
		"", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《クリア》 《有効》 《スリープ》 《条件》 ❶このカードがあるレーンに相手のキャラがない。❷このターンに、あなたのエリアで 《花鳥風月》 を持つ 《キョウカ》 が3回以上 《アタック成功》 している。", //JP_TEXT
		""	//TW_TEXT
		],[
		"F07-013", //ID
		"img/cardimg/F07-013.png", //SRC
		"天真と無双の象徴 キョウカ", //NAME
		"D", //RARE
		"キャラカード", //TYPE
		"5", //COST
		"1", //COSTDOWN
		"7000", //POWER
		"☆", //MISSION
		"花鳥風月/サムライ/剣術/奥義", //FEATURE
		"キョウカ", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エリア 《誘発》 《LvUP》 《効果》 このカードがコネクトしてない場合、このカードの 《EXP》 にある 《花鳥風月》 を持つエンゲージを1枚選び、このカードとコネクトする。<br><br>《自》 《有効》 エリア 《誘発》 ミッションが 《スリープ》 する。 《効果》 あなたのエネルギーを0～2枚選び、トラッシュに置いてよい。置いた枚数1枚につき、1回 《スカウト》 する。", //JP_TEXT
		""	//TW_TEXT
		],[
		"F07-014", //ID
		"img/cardimg/F07-014.png", //SRC
		"炎炎鬼花火 キョウカ", //NAME
		"D", //RARE
		"キャラカード", //TYPE
		"7", //COST
		"1", //COSTDOWN
		"11000", //POWER
		"☆", //MISSION
		"花鳥風月/サムライ/剣術/奥義", //FEATURE
		"キョウカ", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《常》 《有効》 《相手ターン》 エリア 《効果》 裏向きか 《スリープ》 の相手のミッションがある場合、相手はこのカードを元々のコストが5以下のカードの能力で選ぶことができない。<br><br>《自》 《有効》 エリア 《誘発》 このカードがあるレーンにあるミッションが 《スリープ》 する。 《効果》 ミッションフェイズ終了時まで、あなたのすべてのエリアに以下の能力を与える。“ 《常》 《有効》 エリア 《効果》 このエリアにある 《キョウカ》 のパワーを＋5000する。”", //JP_TEXT
		""	//TW_TEXT
		],[
		"F07-015", //ID
		"img/cardimg/F07-015.png", //SRC
		"天香桂花 玲", //NAME
		"D", //RARE
		"キャラカード", //TYPE
		"3", //COST
		"0", //COSTDOWN
		"5000", //POWER
		"A", //MISSION
		"花鳥風月/サムライ/剣術", //FEATURE
		"玲", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エリア 《誘発》 《アタック成功》 《効果》 あなたの手札にある「刀光剣影 玲」を1枚選び、このカードがあるエリアに 《スリープ》 で登場させてよい。<br><br>《起》 《有効》 《自分ターン》 トラッシュ 《コスト》 あなたのトラッシュにあるカード名の異なる 《剣術》 を持つキャラを2枚好きな順番でデッキの下に置く。 《効果》 このカードをデッキに戻し、シャッフルする。2枚引く。ミッションフェイズ終了時まで、あなたは 《同名》 のこの能力をプレイできない。", //JP_TEXT
		""	//TW_TEXT
		],[
		"F07-016", //ID
		"img/cardimg/F07-016.png", //SRC
		"刀光剣影 玲", //NAME
		"D", //RARE
		"キャラカード", //TYPE
		"4", //COST
		"1", //COSTDOWN
		"4000", //POWER
		"A", //MISSION
		"花鳥風月/サムライ/剣術", //FEATURE
		"玲", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エリア 《誘発》 《登場時》 《効果》 あなたのデッキの上から1枚見て、そのカードをデッキの上か下に置く。<br><br>《自》 《有効》 エリア 《誘発》 《LvUP》 《効果》 このカードに 《EXP》 【「天香桂花 玲」】がある場合、あなたの手札にある 《奥義》 を持つ 《玲》 を1枚選び、このカードがあるエリアに 《リブート》 で登場させてよい。", //JP_TEXT
		""	//TW_TEXT
		],[
		"F07-017", //ID
		"img/cardimg/F07-017.png", //SRC
		"海栢榴の守護者", //NAME
		"D", //RARE
		"ミッションカード", //TYPE
		"", //COST
		"", //COSTDOWN
		"", //POWER
		"A", //MISSION
		"花鳥風月/サムライ/剣術", //FEATURE
		"玲", //ACCOUNT
		"", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《チェック》 《有効》 《自分ターン》 《条件》 ①このカードがあるレーンに「刀光剣影 玲」の能力によってあなたの 《奥義》 を持つ 《玲》 が登場する。<br><br>《クリア》 《有効》 《スリープ》 《条件》 ❶このカードがあるレーンに相手のキャラがない。❷あなたのエリアに、このターンに 《アタック成功》 している 《奥義》 を持つ 《玲》 がある。", //JP_TEXT
		""	//TW_TEXT
		],[
		"F07-018", //ID
		"img/cardimg/F07-018.png", //SRC
		"緊急板前 玲", //NAME
		"D", //RARE
		"キャラカード", //TYPE
		"1", //COST
		"0", //COSTDOWN
		"1000", //POWER
		"B", //MISSION
		"花鳥風月/サムライ/修行", //FEATURE
		"玲", //ACCOUNT
		"1", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《起》 《有効》 エリア 《コスト》 《スリープ》 する。 《効果》 あなたのデッキの上から3枚公開する。その中から 《玲》 を1枚選び、手札に加え、1枚をトラッシュに置き、残りをデッキの下に置く。<br><br>《起》 《有効》 手札 《コスト》 このカードをトラッシュに置く。 《効果》 相手のエリアにあるキャラを1枚選び、2000ダメージを与える。", //JP_TEXT
		""	//TW_TEXT
		],[
		"F07-019", //ID
		"img/cardimg/F07-019.png", //SRC
		"一丁上がり 玲", //NAME
		"D", //RARE
		"キャラカード", //TYPE
		"5", //COST
		"0", //COSTDOWN
		"8000", //POWER
		"B", //MISSION
		"花鳥風月/サムライ/修行", //FEATURE
		"玲", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エリア 《誘発》 《アタック成功》 《効果》 このカードに 《EXP》 が2枚以上ある場合、あなたのエリアにある 《頭領》 を持つキャラを 《スリープ》 してよい。 《スリープ》 したならば、あなたの「食卓の救済者」を1枚選び、 《スリープ》 する。<br><br>《起》 《有効》 《自分ターン》 手札 《コスト》 あなたのエネルギーを3枚トラッシュに置く。 《効果》 あなたのエリアにある 《スリープ》 の「緊急板前 玲」を1枚選び、あなたのデッキの上から1枚をそのキャラの 《EXP》 にし、このカードを 《リブート》 で登場させる。", //JP_TEXT
		""	//TW_TEXT
		],[
		"F07-020", //ID
		"img/cardimg/F07-020.png", //SRC
		"食卓の救済者", //NAME
		"D", //RARE
		"ミッションカード", //TYPE
		"", //COST
		"", //COSTDOWN
		"", //POWER
		"B", //MISSION
		"花鳥風月/サムライ/修行", //FEATURE
		"玲", //ACCOUNT
		"", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《クリア》 《有効》 《スリープ》 《条件》 ❶このカードがあるレーンに相手のキャラがない。❷あなたのエリアに「一丁上がり 玲」がある。", //JP_TEXT
		""	//TW_TEXT
		],[
		"F07-021", //ID
		"img/cardimg/F07-021.png", //SRC
		"勾玉に込められたもの 玲", //NAME
		"D", //RARE
		"キャラカード", //TYPE
		"2", //COST
		"0", //COSTDOWN
		"2000", //POWER
		"C", //MISSION
		"花鳥風月/サムライ/剣術", //FEATURE
		"玲", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エリア 《誘発》 《アタック成功》 《効果》 このカードと【 《花鳥風月》 を持つエンゲージ】がコネクトしている場合、あなたのデッキを見て、その中にある 《奥義》 を持つ 《玲》 を1枚選び、手札に加えてよい。残りをデッキに戻し、シャッフルする。<br><br>《起》 《有効》 《ターン1》 エリア 《コスト》 あなたのトラッシュに 《花鳥風月》 を持つエンゲージを2枚デッキに戻し、シャッフルする。 《効果》 相手のエリアにあるキャラを1枚選び、3000ダメージを与える。", //JP_TEXT
		""	//TW_TEXT
		],[
		"F07-022", //ID
		"img/cardimg/F07-022.png", //SRC
		"終幕 -天賦と無欠の物語-", //NAME
		"D", //RARE
		"ミッションカード", //TYPE
		"", //COST
		"", //COSTDOWN
		"", //POWER
		"C", //MISSION
		"花鳥風月/サムライ/剣術", //FEATURE
		"玲", //ACCOUNT
		"", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《チェック》 《有効》 《自分ターン》 《条件》 ①あなたのエリアにある「天賦と無欠の象徴 玲」の能力で「天賦と無欠の象徴 玲」が 《花鳥風月》 を持つエンゲージとコネクトする。<br><br>《クリア》 《有効》 《スリープ》 《条件》 ❶このカードがあるレーンに相手のキャラがない。❷あなたのエリアに、このターンに 《アタック成功》 している 《奥義》 を持つ 《玲》 がある。", //JP_TEXT
		""	//TW_TEXT
		],[
		"F07-023", //ID
		"img/cardimg/F07-023.png", //SRC
		"山での鍛錬 玲", //NAME
		"D", //RARE
		"キャラカード", //TYPE
		"0", //COST
		"0", //COSTDOWN
		"500", //POWER
		"D", //MISSION
		"花鳥風月/サムライ/修行", //FEATURE
		"玲", //ACCOUNT
		"1", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エリア 《誘発》 あなたの手札から 《修行》 を持つキャラが登場する。 《効果》 相手のエリアにあるキャラを1枚選び、2000ダメージを与えてよい。", //JP_TEXT
		""	//TW_TEXT
		],[
		"F07-024", //ID
		"img/cardimg/F07-024.png", //SRC
		"涼やかな剣士 玲", //NAME
		"D", //RARE
		"キャラカード", //TYPE
		"3", //COST
		"0", //COSTDOWN
		"5000", //POWER
		"D", //MISSION
		"花鳥風月/サムライ/修行", //FEATURE
		"玲", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エリア 《誘発》 《アタック成功》 《効果》 あなたのデッキの上から5枚公開し、その中にある 《修行》 を持つキャラを好きな枚数選び、手札に加え、残りを好きな順番でデッキの下に置く。2枚以上加えたならば、ミッションフェイズ終了時まで、あなたは 《修行》 を持たないミッションをクリアできない。", //JP_TEXT
		""	//TW_TEXT
		],[
		"F07-025", //ID
		"img/cardimg/F07-025.png", //SRC
		"反撃の機運 玲", //NAME
		"D", //RARE
		"キャラカード", //TYPE
		"4", //COST
		"1", //COSTDOWN
		"4000", //POWER
		"D", //MISSION
		"花鳥風月/サムライ/修行", //FEATURE
		"玲", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《常》 《有効》 エリア 《効果》 あなたのエリアにあるキャラのパワーはカードの能力で減らない。<br><br>《自》 《有効》 エリア 《誘発》 《アタック成功》 《効果》 このターンに、 《同名》 が2回以上 《アタック成功》 している場合、あなたのエネルギーを2枚選び、トラッシュに置いてよい。2枚置いたならば、あなたの「橋上の勝利者」を1枚選び、 《スリープ》 する。<br><br>《起》 《有効》 エリア 《コスト》 あなたの手札を3枚トラッシュに置く。 《効果》 このカードの 《EXP》 をすべてトラッシュに置き、このカードを手札に戻す。あなたの手札にある 《同名》 を1枚選び、 《リブート》 で登場させてよい。", //JP_TEXT
		""	//TW_TEXT
		],[
		"F07-026", //ID
		"img/cardimg/F07-026.png", //SRC
		"橋上の勝利者", //NAME
		"D", //RARE
		"ミッションカード", //TYPE
		"", //COST
		"", //COSTDOWN
		"", //POWER
		"D", //MISSION
		"花鳥風月/サムライ/修行", //FEATURE
		"玲", //ACCOUNT
		"", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《クリア》 《有効》 《スリープ》 《条件》 ❶このカードがあるレーンに相手のキャラがない。❷このターンに、あなたのエリアで 《花鳥風月》 を持つ 《玲》 がバトルをせず2回以上 《アタック成功》 している。", //JP_TEXT
		""	//TW_TEXT
		],[
		"F07-027", //ID
		"img/cardimg/F07-027.png", //SRC
		"天賦と無欠の象徴 玲", //NAME
		"D", //RARE
		"キャラカード", //TYPE
		"5", //COST
		"1", //COSTDOWN
		"7000", //POWER
		"☆", //MISSION
		"花鳥風月/サムライ/剣術/奥義", //FEATURE
		"玲", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エリア 《誘発》 《LvUP》 《効果》 このカードがコネクトしてない場合、このカードの 《EXP》 にある 《花鳥風月》 を持つエンゲージを1枚選び、このカードとコネクトする。<br><br>《自》 《有効》 エリア 《誘発》 ミッションが 《スリープ》 する。 《効果》 あなたのデッキの上から3枚見て、その中から好きな枚数選び、好きな順番でデッキの上に置き、残りを好きな順番でデッキの下に置く。", //JP_TEXT
		""	//TW_TEXT
		],[
		"F07-028", //ID
		"img/cardimg/F07-028.png", //SRC
		"真・龍華三詠 玲", //NAME
		"D", //RARE
		"キャラカード", //TYPE
		"7", //COST
		"1", //COSTDOWN
		"10000", //POWER
		"☆", //MISSION
		"花鳥風月/サムライ/剣術/奥義", //FEATURE
		"玲", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《常》 《有効》 《相手ターン》 エリア 《効果》 裏向きか 《スリープ》 の相手のミッションがある場合、相手はこのカードを元々のコストが5以下のカードの能力で選ぶことができない。<br><br>《自》 《有効》 エリア 《誘発》 このカードがあるレーンにあるミッションが 《スリープ》 する。 《効果》 相手のエリアにあるコスト4以下のキャラを0～3枚選び、手札に戻してよい。", //JP_TEXT
		""	//TW_TEXT
		],[
		"F07-029", //ID
		"img/cardimg/F07-029.png", //SRC
		"夜駆ける桜風 らぶり", //NAME
		"D", //RARE
		"キャラカード", //TYPE
		"3", //COST
		"0", //COSTDOWN
		"4000", //POWER
		"A", //MISSION
		"花鳥風月/シノビ/忍術", //FEATURE
		"らぶり", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エリア 《誘発》 《アタック成功》 《効果》 あなたのデッキの上から5枚公開し、その中にある 《忍術》 を持つキャラ1枚選び、トラッシュに置いてよい。残りを好きな順番でデッキの下に置く。<br><br>《起》 《有効》 《ターン1》 エリア 《コスト》 あなたのエリアにあるこのカード以外のキャラを1枚デッキに戻し、シャッフルする。 《効果》 あなたのトラッシュにある「愛遁の開祖 らぶり」を1枚選び、キャラがないエリアに 《リブート》 で登場させる。", //JP_TEXT
		""	//TW_TEXT
		],[
		"F07-030", //ID
		"img/cardimg/F07-030.png", //SRC
		"愛遁の開祖 らぶり", //NAME
		"D", //RARE
		"キャラカード", //TYPE
		"4", //COST
		"1", //COSTDOWN
		"2000", //POWER
		"A", //MISSION
		"花鳥風月/シノビ/忍術", //FEATURE
		"らぶり", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《常》 《有効》 《相手ターン》 エリア 《効果》 このカードがあるレーンにある相手のキャラに以下の能力を与える。“ 《自》 《有効》 エリア 《誘発》 キャラが登場する。 《効果》 あなたはエネルギーを1枚選び、トラッシュに置く。”<br><br>《起》 《有効》 《ターン1》 エリア 《コスト》 このカードとあなたのエリアにある「夜駆ける桜風 らぶり」を1枚デッキに戻し、シャッフルする。 《効果》 あなたのトラッシュにある 《奥義》 を持つ 《らぶり》 を1枚選び、キャラがないエリアに 《リブート》 で登場させる。", //JP_TEXT
		""	//TW_TEXT
		],[
		"F07-031", //ID
		"img/cardimg/F07-031.png", //SRC
		"#絶景☆映えスポット", //NAME
		"D", //RARE
		"ミッションカード", //TYPE
		"", //COST
		"", //COSTDOWN
		"", //POWER
		"A", //MISSION
		"花鳥風月/シノビ/忍術", //FEATURE
		"らぶり", //ACCOUNT
		"", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《チェック》 《有効》 《自分ターン》 《条件》 ①このカードがあるレーンに「愛遁の開祖 らぶり」の能力によってあなたの 《奥義》 を持つ 《らぶり》 が登場する。<br><br>《クリア》 《有効》 《スリープ》 《条件》 ❶このカードがあるレーンに相手のキャラがない。❷あなたのエリアに、このターンに 《アタック成功》 している 《奥義》 を持つ 《らぶり》 がある。", //JP_TEXT
		""	//TW_TEXT
		],[
		"F07-032", //ID
		"img/cardimg/F07-032.png", //SRC
		"生まれて飛び出て らぶり", //NAME
		"D", //RARE
		"キャラカード", //TYPE
		"0", //COST
		"0", //COSTDOWN
		"500", //POWER
		"B", //MISSION
		"花鳥風月/シノビ/修行", //FEATURE
		"らぶり", //ACCOUNT
		"1", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《起》 《有効》 《自分ターン1》 エリア 《コスト》 あなたのエネルギーを1枚トラッシュに置く。 《効果》 このカードが 《スリープ》 の場合、あなたのトラッシュにある「一緒に冒険しよ？ らぶり」を1枚選び、このカードがあるエリアに 《リブート》 で登場させてよい。<br><br>《起》 《有効》 手札 《コスト》 あなたのエネルギーを1枚トラッシュに置く。 《効果》 このカードをキャラがないエリアに 《スリープ》 で登場させる。", //JP_TEXT
		""	//TW_TEXT
		],[
		"F07-033", //ID
		"img/cardimg/F07-033.png", //SRC
		"一緒に冒険しよ？ らぶり", //NAME
		"D", //RARE
		"キャラカード", //TYPE
		"5", //COST
		"1", //COSTDOWN
		"7000", //POWER
		"B", //MISSION
		"花鳥風月/シノビ/修行", //FEATURE
		"らぶり", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エリア 《誘発》 《LvUP》 《効果》 あなたのトラッシュにある 《頭領》 を持つキャラを1枚選び、手札に戻してよい。戻したならば、このカードの 《EXP》 を1枚選び、手札に戻してよい。<br><br>《自》 《有効》 エリア 《誘発》 《アタック成功》 《効果》 あなたの手札にある 《頭領》 を持つキャラを1枚選び、トラッシュに置いてよい。置いたならば、あなたのエリアにあるこのカード以外の 《同名》 を1枚選び、このカードの 《EXP》 にする。このカードに 《EXP》 【 《同名》 】が2枚以上あるならば、あなたの「#レッツゴー鬼ヶ島♪」を1枚選び、 《スリープ》 する。", //JP_TEXT
		""	//TW_TEXT
		],[
		"F07-034", //ID
		"img/cardimg/F07-034.png", //SRC
		"#レッツゴー鬼ヶ島♪", //NAME
		"D", //RARE
		"ミッションカード", //TYPE
		"", //COST
		"", //COSTDOWN
		"", //POWER
		"B", //MISSION
		"花鳥風月/シノビ/修行", //FEATURE
		"らぶり", //ACCOUNT
		"", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《クリア》 《有効》 《スリープ》 《条件》 ❶このカードがあるレーンに相手のキャラがない。❷あなたのエリアに「一緒に冒険しよ？ らぶり」がある。", //JP_TEXT
		""	//TW_TEXT
		],[
		"F07-035", //ID
		"img/cardimg/F07-035.png", //SRC
		"勾玉に込められたもの らぶり", //NAME
		"D", //RARE
		"キャラカード", //TYPE
		"2", //COST
		"0", //COSTDOWN
		"2000", //POWER
		"C", //MISSION
		"花鳥風月/シノビ/忍術", //FEATURE
		"らぶり", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エリア 《誘発》 《アタック成功》 《効果》 このカードと【 《花鳥風月》 を持つエンゲージ】がコネクトしている場合、このカードをエネルギーに置いてよい。置いたならば、あなたのトラッシュにある 《奥義》 を持つ 《らぶり》 を1枚選び、コストを支払いプレイする。<br><br>《起》 《有効》 《ターン1》 エリア 《コスト》 あなたのトラッシュにある 《花鳥風月》 を持つエンゲージを2枚デッキに戻し、シャッフルする。 《効果》 あなたのエネルギーにある 《花鳥風月》 を持つ 《らぶり》 を1枚選び、手札に戻してよい。", //JP_TEXT
		""	//TW_TEXT
		],[
		"F07-036", //ID
		"img/cardimg/F07-036.png", //SRC
		"終幕 -キュートとプリティの物語-", //NAME
		"D", //RARE
		"ミッションカード", //TYPE
		"", //COST
		"", //COSTDOWN
		"", //POWER
		"C", //MISSION
		"花鳥風月/シノビ/忍術", //FEATURE
		"らぶり", //ACCOUNT
		"", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《チェック》 《有効》 《自分ターン》 《条件》 ①あなたのエリアにある「キュートとプリティの象徴 らぶり」の能力で「キュートとプリティの象徴 らぶり」が 《花鳥風月》 を持つエンゲージとコネクトする。<br><br>《クリア》 《有効》 《スリープ》 《条件》 ❶このカードがあるレーンに相手のキャラがない。❷あなたのエリアに、このターンに 《アタック成功》 している 《奥義》 を持つ 《らぶり》 がある。", //JP_TEXT
		""	//TW_TEXT
		],[
		"F07-037", //ID
		"img/cardimg/F07-037.png", //SRC
		"輝く竹からカワイイお姫様 らぶり", //NAME
		"D", //RARE
		"キャラカード", //TYPE
		"2", //COST
		"0", //COSTDOWN
		"2000", //POWER
		"D", //MISSION
		"花鳥風月/シノビ/修行", //FEATURE
		"らぶり", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 《自分ターン》 エリア 《誘発》 《登場時》 《効果》 あなたのトラッシュに 《修行》 を持つカードが4枚以上ある場合、あなたのエネルギーにある 《修行》 を持つカードを0～2枚選び、手札に戻してよい。戻したカード1枚につき、あなたのデッキの上から1枚をエネルギーに置く。あなたはミッションフェイズ終了時まで、 《修行》 を持たないミッションをクリアできない。", //JP_TEXT
		""	//TW_TEXT
		],[
		"F07-038", //ID
		"img/cardimg/F07-038.png", //SRC
		"退屈からの卒業 らぶり", //NAME
		"D", //RARE
		"キャラカード", //TYPE
		"3", //COST
		"0", //COSTDOWN
		"3000", //POWER
		"D", //MISSION
		"花鳥風月/シノビ/修行", //FEATURE
		"らぶり", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《起》 《有効》 手札かキープ 《コスト》 このカードをトラッシュに置く。 《効果》 あなたのデッキの上から3枚公開し、その中にある 《シノビ》 を持つカードを1枚選び、トラッシュに置いてもよい。残りを好きな順番でデッキの下に置く。あなたのエネルギーを2枚選び、トラッシュに置いてよい。2枚置いたならば、あなたのトラッシュにある 《同名》 以外の 《修行》 を持つ 《らぶり》 を1枚選び、手札に戻す。<br><br>《起》 《有効》 《自分ターン》 トラッシュ 《コスト》 あなたのリムーブにある「涙のお別れ らぶり」を1枚デッキの下に置く。 《効果》 このカードを 《リブート》 で登場させる。", //JP_TEXT
		""	//TW_TEXT
		],[
		"F07-039", //ID
		"img/cardimg/F07-039.png", //SRC
		"涙のお別れ らぶり", //NAME
		"D", //RARE
		"キャラカード", //TYPE
		"6", //COST
		"1", //COSTDOWN
		"9000", //POWER
		"D", //MISSION
		"花鳥風月/シノビ/修行", //FEATURE
		"らぶり", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《常》 《有効》 エリア 《効果》 あなたのエリアにあるキャラはカードの能力でダメージを受けない。<br><br>《常》 《有効》 《自分ターン》 リムーブ 《効果》 あなたのセンターにある 《修行》 を持つキャラのパワーを＋2000する。<br><br>《自》 《有効》 センター 《誘発》 《アタック成功》 《効果》 このカードの 《EXP》 をすべてデッキに戻し、シャッフルし、このカードを除外してよい。除外したならば、あなたの「#ただいま♥お月様」を1枚選び、 《スリープ》 する。", //JP_TEXT
		""	//TW_TEXT
		],[
		"F07-040", //ID
		"img/cardimg/F07-040.png", //SRC
		"#ただいま♥お月様", //NAME
		"D", //RARE
		"ミッションカード", //TYPE
		"", //COST
		"", //COSTDOWN
		"", //POWER
		"D", //MISSION
		"花鳥風月/シノビ/修行", //FEATURE
		"らぶり", //ACCOUNT
		"", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《クリア》 《有効》 《スリープ》 《条件》 ❶このカードがあるレーンに相手のキャラがない。❷あなたのセンターに 《スリープ》 の 《修行》 を持つ 《らぶり》 がある。", //JP_TEXT
		""	//TW_TEXT
		],[
		"F07-041", //ID
		"img/cardimg/F07-041.png", //SRC
		"キュートとプリティの象徴 らぶり", //NAME
		"D", //RARE
		"キャラカード", //TYPE
		"5", //COST
		"1", //COSTDOWN
		"7000", //POWER
		"☆", //MISSION
		"花鳥風月/シノビ/忍術/奥義", //FEATURE
		"らぶり", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エリア 《誘発》 《登場時》 《効果》 このカードがコネクトしてない場合、あなたのエリアにあるこのカード以外のキャラを1枚選び、トラッシュに置いてよい。置いたならば、あなたのトラッシュにある 《花鳥風月》 を持つエンゲージを1枚選び、このカードとコネクトする。<br><br>《自》 《有効》 エリア 《誘発》 ミッションが 《スリープ》 する。 《効果》 エリアにあるキャラを1枚選び、キャラのないエリアに移動させる。", //JP_TEXT
		""	//TW_TEXT
		],[
		"F07-042", //ID
		"img/cardimg/F07-042.png", //SRC
		"風魔手裏剣恋竜巻 らぶり", //NAME
		"D", //RARE
		"キャラカード", //TYPE
		"7", //COST
		"1", //COSTDOWN
		"9000", //POWER
		"☆", //MISSION
		"花鳥風月/シノビ/忍術/奥義", //FEATURE
		"らぶり", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《常》 《有効》 《相手ターン》 エリア 《効果》 裏向きか 《スリープ》 の相手のミッションがある場合、相手はこのカードを元々のコストが5以下のカードの能力で選ぶことができない。<br><br>《自》 《有効》 エリア 《誘発》 このカードがあるレーンにあるミッションが 《スリープ》 する。 《効果》 ミッションフェイズ終了時まで、このカードは以下の能力を得る。“ 《常》 《有効》 エリア 《効果》 相手はイベントをプレイできない。”", //JP_TEXT
		""	//TW_TEXT
		],[
		"F07-043", //ID
		"img/cardimg/F07-043.png", //SRC
		"溢れる自信 まりあ", //NAME
		"D", //RARE
		"キャラカード", //TYPE
		"3", //COST
		"0", //COSTDOWN
		"4000", //POWER
		"A", //MISSION
		"花鳥風月/シノビ/忍術", //FEATURE
		"まりあ", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エリア 《誘発》 《アタック成功》 《効果》 あなたのデッキの上から5枚公開し、その中にある 《忍術》 を持つキャラを1枚選び、トラッシュに置いてよい。残りを好きな順番でデッキの下に置く。<br><br>《起》 《有効》 《ターン1》 エリア 《コスト》 あなたのエリアにあるこのカード以外のキャラを1枚デッキに戻し、シャッフルする。 《効果》 あなたのトラッシュにある「全力の火遁 まりあ」を1枚選び、キャラがないエリアに 《リブート》 で登場させる。", //JP_TEXT
		""	//TW_TEXT
		],[
		"F07-044", //ID
		"img/cardimg/F07-044.png", //SRC
		"全力の火遁 まりあ", //NAME
		"D", //RARE
		"キャラカード", //TYPE
		"4", //COST
		"1", //COSTDOWN
		"2000", //POWER
		"A", //MISSION
		"花鳥風月/シノビ/忍術", //FEATURE
		"まりあ", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《常》 《有効》 エリア 《効果》 このカードがあるレーンにある相手のキャラに以下の能力を与える。“ 《常》 《有効》 エリア 《効果》 このカードはキャラの 《EXP》 にできない。”<br><br>《起》 《有効》 《ターン1》 エリア 《コスト》 このカードとあなたのエリアにある「溢れる自信 まりあ」を1枚デッキに戻し、シャッフルする。 《効果》 あなたのトラッシュにある 《奥義》 を持つ 《まりあ》 を1枚選び、キャラがないエリアに 《リブート》 で登場させる。", //JP_TEXT
		""	//TW_TEXT
		],[
		"F07-045", //ID
		"img/cardimg/F07-045.png", //SRC
		"フレイム・アクシデント", //NAME
		"D", //RARE
		"ミッションカード", //TYPE
		"", //COST
		"", //COSTDOWN
		"", //POWER
		"A", //MISSION
		"花鳥風月/シノビ/忍術", //FEATURE
		"まりあ", //ACCOUNT
		"", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《チェック》 《有効》 《自分ターン》 《条件》 ①このカードがあるレーンに「全力の火遁 まりあ」の能力によってあなたの 《奥義》 を持つ 《まりあ》 が登場する。<br><br>《クリア》 《有効》 《スリープ》 《条件》 ❶このカードがあるレーンに相手のキャラがない。❷あなたのエリアに、このターンに 《アタック成功》 している 《奥義》 を持つ 《まりあ》 がある。", //JP_TEXT
		""	//TW_TEXT
		],[
		"F07-046", //ID
		"img/cardimg/F07-046.png", //SRC
		"初めての相棒 まりあ", //NAME
		"D", //RARE
		"キャラカード", //TYPE
		"0", //COST
		"0", //COSTDOWN
		"500", //POWER
		"B", //MISSION
		"花鳥風月/シノビ/修行", //FEATURE
		"まりあ", //ACCOUNT
		"1", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《起》 《有効》 手札 《コスト》 あなたのエネルギーを1枚トラッシュに置く。 《効果》 このカードをキャラがないエリアに 《スリープ》 で登場させる。<br><br>《起》 《有効》 《ターン1》 サイド 《コスト》 なし 《効果》 このカードをこのカードがないサイドに置く。このカードがあるエリアにこのカード以外のキャラがある場合、このカード以外のキャラをすべてこのカードの 《EXP》 にする。", //JP_TEXT
		""	//TW_TEXT
		],[
		"F07-047", //ID
		"img/cardimg/F07-047.png", //SRC
		"良師益犬 まりあ", //NAME
		"D", //RARE
		"キャラカード", //TYPE
		"5", //COST
		"1", //COSTDOWN
		"4000", //POWER
		"B", //MISSION
		"花鳥風月/シノビ/修行", //FEATURE
		"まりあ", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《起》 《有効》 《自分ターン1》 トラッシュ 《コスト》 あなたの手札を2枚トラッシュに置く。 《効果》 あなたのエリアにある 《EXP》 を1枚以上持つ「初めての相棒 まりあ」を1枚選び、そのキャラがあるエリアに 《リブート》 で登場させる。<br><br>《自》 《有効》 エリア 《誘発》 《アタック成功》 《効果》 あなたのエリアに 《頭領》 を持つキャラがある場合、このカードの 《EXP》 をすべてエネルギーに置いてよい。「初めての相棒 まりあ」を1枚以上エネルギーに置いたならば、あなたの「ベストバディーズ」を1枚選び、 《スリープ》 する。", //JP_TEXT
		""	//TW_TEXT
		],[
		"F07-048", //ID
		"img/cardimg/F07-048.png", //SRC
		"ベストバディーズ", //NAME
		"D", //RARE
		"ミッションカード", //TYPE
		"", //COST
		"", //COSTDOWN
		"", //POWER
		"B", //MISSION
		"花鳥風月/シノビ/修行", //FEATURE
		"まりあ", //ACCOUNT
		"", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《クリア》 《有効》 《スリープ》 《条件》 ❶このカードがあるレーンに相手のキャラがない。❷あなたのエリアに「良師益犬 まりあ」がある。", //JP_TEXT
		""	//TW_TEXT
		],[
		"F07-049", //ID
		"img/cardimg/F07-049.png", //SRC
		"勾玉に込められたもの まりあ", //NAME
		"D", //RARE
		"キャラカード", //TYPE
		"2", //COST
		"0", //COSTDOWN
		"2000", //POWER
		"C", //MISSION
		"花鳥風月/シノビ/忍術", //FEATURE
		"まりあ", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エリア 《誘発》 《アタック成功》 《効果》 このカードと【 《花鳥風月》 を持つエンゲージ】がコネクトしている場合、このカードをエネルギーに置いてよい。置いたならば、あなたのトラッシュにある 《奥義》 を持つ 《まりあ》 を1枚選び、コストを支払いプレイする。<br><br>《起》 《有効》 《ターン1》 エリア 《コスト》 あなたのトラッシュに 《花鳥風月》 を持つエンゲージを2枚デッキに戻し、シャッフルする。 《効果》 あなたのトラッシュにある 《まりあ》 を1枚選び、このカードの 《EXP》 にする。", //JP_TEXT
		""	//TW_TEXT
		],[
		"F07-050", //ID
		"img/cardimg/F07-050.png", //SRC
		"終幕 -慈愛と一心の物語-", //NAME
		"D", //RARE
		"ミッションカード", //TYPE
		"", //COST
		"", //COSTDOWN
		"", //POWER
		"C", //MISSION
		"花鳥風月/シノビ/忍術", //FEATURE
		"まりあ", //ACCOUNT
		"", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《チェック》 《有効》 《自分ターン》 《条件》 ①あなたのエリアにある「慈愛と一心の象徴 まりあ」の能力で「慈愛と一心の象徴 まりあ」が 《花鳥風月》 を持つエンゲージとコネクトする。<br><br>《クリア》 《有効》 《スリープ》 《条件》 ❶このカードがあるレーンに相手のキャラがない。❷あなたのエリアに、このターンに 《アタック成功》 している 《奥義》 を持つ 《まりあ》 がある。", //JP_TEXT
		""	//TW_TEXT
		],[
		"F07-051", //ID
		"img/cardimg/F07-051.png", //SRC
		"一寸の世界 まりあ", //NAME
		"D", //RARE
		"キャラカード", //TYPE
		"1", //COST
		"0", //COSTDOWN
		"1000", //POWER
		"D", //MISSION
		"花鳥風月/シノビ/修行", //FEATURE
		"まりあ", //ACCOUNT
		"1", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エリア 《誘発》 《登場時》 《効果》 あなたのデッキの上から3枚公開し、その中にある 《修行》 を持つ 《まりあ》 を1枚選び、手札に加えてよい。残りを好きな順番でデッキの下に置く。加えたならば、あなたの手札を1枚選び、トラッシュに置く。<br><br>《自》 《有効》 エリア 《誘発》 このカードがバトルによって退場する。 《効果》 あなたのエネルギーを3枚選び、トラッシュに置いてよい。3枚置いたならば、このカードを退場させたキャラを1枚選び、退場させてよい。", //JP_TEXT
		""	//TW_TEXT
		],[
		"F07-052", //ID
		"img/cardimg/F07-052.png", //SRC
		"そよ風に流されて まりあ", //NAME
		"D", //RARE
		"キャラカード", //TYPE
		"2", //COST
		"0", //COSTDOWN
		"2000", //POWER
		"D", //MISSION
		"花鳥風月/シノビ/修行", //FEATURE
		"まりあ", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《起》 《有効》 《自分ターン》 手札かキープ 《コスト》 なし 《効果》 あなたのエリアにある「一寸の世界 まりあ」を1枚選び、このカードとすべてのあなたのエネルギーを 《EXP》 にしてよい。そうしたならば、あなたのトラッシュにある「打ち出の小づち まりあ」を1枚選び、手札に戻してよい。あなたはミッションフェイズ終了時まで、 《修行》 を持たないミッションをクリアできない。", //JP_TEXT
		""	//TW_TEXT
		],[
		"F07-053", //ID
		"img/cardimg/F07-053.png", //SRC
		"打ち出の小づち まりあ", //NAME
		"D", //RARE
		"キャラカード", //TYPE
		"8", //COST
		"1", //COSTDOWN
		"6000", //POWER
		"D", //MISSION
		"花鳥風月/シノビ/修行", //FEATURE
		"まりあ", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《常》 《有効》 エリア 《効果》 あなたのエリアにあるキャラはカードの能力でダメージを受けない。<br><br>《常》 《有効》 エリア 《効果》 このカードの 《EXP》 が8枚以上ある場合、このカードのパワーを＋10000する。<br><br>《自》 《有効》 エリア 《誘発》 《アタック成功》 《効果》 このカードに 《EXP》 【「一寸の世界 まりあ」と「そよ風に流されて まりあ」】がある場合、あなたの「パワフルカーペンター」を1枚選び、 《スリープ》 する。", //JP_TEXT
		""	//TW_TEXT
		],[
		"F07-054", //ID
		"img/cardimg/F07-054.png", //SRC
		"パワフルカーペンター", //NAME
		"D", //RARE
		"ミッションカード", //TYPE
		"", //COST
		"", //COSTDOWN
		"", //POWER
		"D", //MISSION
		"花鳥風月/シノビ/修行", //FEATURE
		"まりあ", //ACCOUNT
		"", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《クリア》 《有効》 《スリープ》 《条件》 ❶このカードがあるレーンに相手のキャラがない。❷このターンに、あなたが「打ち出の小づち まりあ」をプレイしている。", //JP_TEXT
		""	//TW_TEXT
		],[
		"F07-055", //ID
		"img/cardimg/F07-055.png", //SRC
		"慈愛と一心の象徴 まりあ", //NAME
		"D", //RARE
		"キャラカード", //TYPE
		"5", //COST
		"1", //COSTDOWN
		"7000", //POWER
		"☆", //MISSION
		"花鳥風月/シノビ/忍術/奥義", //FEATURE
		"まりあ", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エリア 《誘発》 《登場時》 《効果》 このカードがコネクトしてない場合、あなたのエリアにあるこのカード以外のキャラを1枚選び、トラッシュに置いてよい。置いたならば、あなたのトラッシュにある 《花鳥風月》 を持つエンゲージを1枚選び、このカードとコネクトする。<br><br>《自》 《有効》 エリア 《誘発》 ミッションが 《スリープ》 する。 《効果》 このカードがコネクトしている 《花鳥風月》 を持つエンゲージを1枚選び、そのカードをコストを支払いプレイしてよい。", //JP_TEXT
		""	//TW_TEXT
		],[
		"F07-056", //ID
		"img/cardimg/F07-056.png", //SRC
		"睡蓮のくノ一 まりあ", //NAME
		"D", //RARE
		"キャラカード", //TYPE
		"8", //COST
		"1", //COSTDOWN
		"11000", //POWER
		"☆", //MISSION
		"花鳥風月/シノビ/忍術/奥義", //FEATURE
		"まりあ", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《常》 《有効》 《相手ターン》 エリア 《効果》 裏向きか 《スリープ》 の相手のミッションがある場合、相手はこのカードを元々のコストが5以下のカードの能力で選ぶことができない。<br><br>《自》 《有効》 エリア 《誘発》 このカードがあるレーンにあるミッションが 《スリープ》 する。 《効果》 あなたのデッキの上から0～2枚をこのカードの 《EXP》 にする。このカードの 《EXP》 にあるコスト5以下のカードを1枚選び、コストを支払わずにプレイしてよい。", //JP_TEXT
		""	//TW_TEXT
		],[
		"F07-057", //ID
		"img/cardimg/F07-057.png", //SRC
		"進取果敢な挑戦 シェリー", //NAME
		"D", //RARE
		"キャラカード", //TYPE
		"2", //COST
		"0", //COSTDOWN
		"3000", //POWER
		"A", //MISSION
		"花鳥風月/サムライ/剣術", //FEATURE
		"シェリー", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エリア 《誘発》 《アタック成功》 《効果》 あなたのエネルギーを1枚選び、トラッシュに置いてよい。置いたならば、あなたの手札かキープにある「打開の一手 シェリー」を1枚選び、このカードがあるエリアに 《スリープ》 で登場させてよい。<br><br>《起》 《有効》 《自分ターン》 トラッシュ 《コスト》 あなたのトラッシュにあるカード名の異なる 《剣術》 を持つキャラを2枚好きな順番でデッキの下に置く。 《効果》 このカードをデッキに戻し、シャッフルする。2枚引く。ミッションフェイズ終了時まで、あなたは 《同名》 のこの能力をプレイできない。", //JP_TEXT
		""	//TW_TEXT
		],[
		"F07-058", //ID
		"img/cardimg/F07-058.png", //SRC
		"打開の一手 シェリー", //NAME
		"D", //RARE
		"キャラカード", //TYPE
		"4", //COST
		"1", //COSTDOWN
		"4000", //POWER
		"A", //MISSION
		"花鳥風月/サムライ/剣術", //FEATURE
		"シェリー", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エリア 《誘発》 《登場時》 《効果》 あなたのキープを1枚選び、エネルギーに置く。あなたのエネルギーにある 《シェリー》 を1枚選び、キープに置く。<br><br>《自》 《有効》 エリア 《誘発》 《LvUP》 《効果》 このカードの 《EXP》 に「進取果敢な挑戦 シェリー」がある場合、あなたのエネルギーを1枚選び、トラッシュに置いてよい。置いたならば、手札かキープにある、あなたの 《奥義》 を持つ 《シェリー》 を1枚選び、このカードがあるエリアに 《リブート》 で登場させてよい。", //JP_TEXT
		""	//TW_TEXT
		],[
		"F07-059", //ID
		"img/cardimg/F07-059.png", //SRC
		"ラジカルシンパサイザー", //NAME
		"D", //RARE
		"ミッションカード", //TYPE
		"", //COST
		"", //COSTDOWN
		"", //POWER
		"A", //MISSION
		"花鳥風月/サムライ/剣術", //FEATURE
		"シェリー", //ACCOUNT
		"", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《チェック》 《有効》 《自分ターン》 《条件》 ①このカードがあるレーンに「打開の一手 シェリー」の能力によってあなたの 《奥義》 を持つ 《シェリー》 が登場する。<br><br>《クリア》 《有効》 《スリープ》 《条件》 ❶このカードがあるレーンに相手のキャラがない。❷あなたのエリアに、このターンに 《アタック成功》 している 《奥義》 を持つ 《シェリー》 がある。", //JP_TEXT
		""	//TW_TEXT
		],[
		"F07-060", //ID
		"img/cardimg/F07-060.png", //SRC
		"奮い立つ音響 シェリー", //NAME
		"D", //RARE
		"キャラカード", //TYPE
		"2", //COST
		"0", //COSTDOWN
		"2000", //POWER
		"B", //MISSION
		"花鳥風月/サムライ/修行", //FEATURE
		"シェリー", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エリア 《誘発》 《アタック成功》 《効果》 あなたのエリアに 《頭領》 を持つキャラがある場合、あなたのエネルギーを2枚選び、トラッシュに置いてよい。2枚置いたならば、あなたのトラッシュにある「大地震わす鼓動 シェリー」を1枚選び、このカードがあるエリアに 《リブート》 で登場させてよい。<br><br>《起》 《有効》 手札 《コスト》 このカードをトラッシュに置く。 《効果》 あなたのキープを1枚選び、トラッシュに置く。あなたのエネルギーにある 《シェリー》 を1枚選び、キープに置く。", //JP_TEXT
		""	//TW_TEXT
		],[
		"F07-061", //ID
		"img/cardimg/F07-061.png", //SRC
		"大地震わす鼓動 シェリー", //NAME
		"D", //RARE
		"キャラカード", //TYPE
		"10", //COST
		"0", //COSTDOWN
		"7000", //POWER
		"B", //MISSION
		"花鳥風月/サムライ/修行", //FEATURE
		"シェリー", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エリア 《誘発》 《アタック成功》 《効果》 このカードに 《EXP》 【「奮い立つ音響 シェリー」】がある場合、あなたの「ユニオンフェスティバル」を1枚選び、 《スリープ》 する。<br><br>《自》 《有効》 エリア 《誘発》 《アタック成功》 《効果》 あなたのエリアに 《頭領》 を持つキャラがある場合、このカードの 《EXP》 をすべてエネルギーに置いてよい。置いたならば、あなたのキープを1枚選び、トラッシュに置き、このカードをキープに置く。<br><br>《自》 《有効》 キープ 《誘発》 あなたのキャラがアタックする。 《効果》 アタック終了時まで、そのキャラのパワーを＋2000する。", //JP_TEXT
		""	//TW_TEXT
		],[
		"F07-062", //ID
		"img/cardimg/F07-062.png", //SRC
		"ユニオンフェスティバル", //NAME
		"D", //RARE
		"ミッションカード", //TYPE
		"", //COST
		"", //COSTDOWN
		"", //POWER
		"B", //MISSION
		"花鳥風月/サムライ/修行", //FEATURE
		"シェリー", //ACCOUNT
		"", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《クリア》 《有効》 《スリープ》 《条件》 ❶このカードがあるレーンに相手のキャラがない。❷あなたのキープに「大地震わす鼓動 シェリー」がある。", //JP_TEXT
		""	//TW_TEXT
		],[
		"F07-063", //ID
		"img/cardimg/F07-063.png", //SRC
		"勾玉に込められたもの シェリー", //NAME
		"D", //RARE
		"キャラカード", //TYPE
		"2", //COST
		"0", //COSTDOWN
		"2000", //POWER
		"C", //MISSION
		"花鳥風月/サムライ/剣術", //FEATURE
		"シェリー", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エリア 《誘発》 《アタック成功》 《効果》 このカードと【 《花鳥風月》 を持つエンゲージ】がコネクトしている場合、あなたのデッキを見て、その中にある 《奥義》 を持つ 《シェリー》 を1枚選び、手札に加えてよい。残りをデッキに戻し、シャッフルする。<br><br>《起》 《有効》 《ターン1》 エリア 《コスト》 あなたのトラッシュに 《花鳥風月》 を持つエンゲージを2枚デッキに戻し、シャッフルする。 《効果》 あなたのキープを1枚選び、エネルギーに置き、あなたのエネルギーにある 《花鳥風月》 を持つ 《シェリー》 を1枚選び、キープに置く。", //JP_TEXT
		""	//TW_TEXT
		],[
		"F07-064", //ID
		"img/cardimg/F07-064.png", //SRC
		"終幕 -熱狂と奔放の物語-", //NAME
		"D", //RARE
		"ミッションカード", //TYPE
		"", //COST
		"", //COSTDOWN
		"", //POWER
		"C", //MISSION
		"花鳥風月/サムライ/剣術", //FEATURE
		"シェリー", //ACCOUNT
		"", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《チェック》 《有効》 《自分ターン》 《条件》 ①あなたのエリアにある「熱狂と奔放の象徴 シェリー」の能力で「熱狂と奔放の象徴 シェリー」が 《花鳥風月》 を持つエンゲージとコネクトする。<br><br>《クリア》 《有効》 《スリープ》 《条件》 ❶このカードがあるレーンに相手のキャラがない。❷あなたのエリアに、このターンに 《アタック成功》 している 《奥義》 を持つ 《シェリー》 がある。", //JP_TEXT
		""	//TW_TEXT
		],[
		"F07-065", //ID
		"img/cardimg/F07-065.png", //SRC
		"浜辺の守り手 シェリー", //NAME
		"D", //RARE
		"キャラカード", //TYPE
		"0", //COST
		"0", //COSTDOWN
		"500", //POWER
		"D", //MISSION
		"花鳥風月/サムライ/修行", //FEATURE
		"シェリー", //ACCOUNT
		"1", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《起》 《有効》 エリア 《コスト》 なし 《効果》 あなたのキープを1枚選び、エネルギーに置く。このカードをキープに置く。<br><br>《起》 《有効》 手札かキープ 《コスト》 あなたのエリアにあるダメージを受けたキャラを1枚デッキに戻し、シャッフルする。 《効果》 このカードを 《リブート》 で登場させる。", //JP_TEXT
		""	//TW_TEXT
		],[
		"F07-066", //ID
		"img/cardimg/F07-066.png", //SRC
		"インヴァイトシー シェリー", //NAME
		"D", //RARE
		"キャラカード", //TYPE
		"3", //COST
		"0", //COSTDOWN
		"3000", //POWER
		"D", //MISSION
		"花鳥風月/サムライ/修行", //FEATURE
		"シェリー", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エリア 《誘発》 《アタック成功》 《効果》 このカードとあなたのエネルギーを2枚選び、トラッシュに置いてよい。合計3枚置いたならば、あなたのデッキの上から5枚公開し、その中にある 《修行》 を持つキャラを0～1選び、 《リブート》 で登場させる。残りを好きな順番でデッキの下に置く。登場させたならば、あなたはミッションフェイズ終了時まで、 《修行》 を持たないミッションをクリアできない。", //JP_TEXT
		""	//TW_TEXT
		],[
		"F07-067", //ID
		"img/cardimg/F07-067.png", //SRC
		"海底のジャムセッション シェリー", //NAME
		"D", //RARE
		"キャラカード", //TYPE
		"4", //COST
		"1", //COSTDOWN
		"8000", //POWER
		"D", //MISSION
		"花鳥風月/サムライ/修行", //FEATURE
		"シェリー", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《常》 《有効》 エリア 《効果》 あなたのエリアにあるキャラのパワーはカードの能力で減らない。<br><br>《自》 《有効》 エリア 《誘発》 《登場時》 《効果》 あなたのエリアにこのカードしかない場合、このカードをデッキに戻し、シャッフルする。<br><br>《自》 《有効》 エリア 《誘発》 《アタック成功》 《効果》 相手のエリアにあるキャラの枚数より、あなたのエリアにあるキャラの枚数が2枚以上多い場合、あなたのエネルギーを1枚選び、トラッシュに置いてよい。置いたならば、あなたの「ブルーマリンメモワール」を1枚選び、 《スリープ》 する。", //JP_TEXT
		""	//TW_TEXT
		],[
		"F07-068", //ID
		"img/cardimg/F07-068.png", //SRC
		"ブルーマリンメモワール", //NAME
		"D", //RARE
		"ミッションカード", //TYPE
		"", //COST
		"", //COSTDOWN
		"", //POWER
		"D", //MISSION
		"花鳥風月/サムライ/修行", //FEATURE
		"シェリー", //ACCOUNT
		"", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《クリア》 《有効》 《スリープ》 《条件》 ❶このカードがあるレーンに相手のキャラがない。❷このターンに、あなたのエリアで 《花鳥風月》 を持つ 《シェリー》 が3回以上 《アタック成功》 している。", //JP_TEXT
		""	//TW_TEXT
		],[
		"F07-069", //ID
		"img/cardimg/F07-069.png", //SRC
		"熱狂と奔放の象徴 シェリー", //NAME
		"D", //RARE
		"キャラカード", //TYPE
		"5", //COST
		"1", //COSTDOWN
		"7000", //POWER
		"☆", //MISSION
		"花鳥風月/サムライ/剣術/奥義", //FEATURE
		"シェリー", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エリア 《誘発》 《LvUP》 《効果》 このカードがコネクトしてない場合、このカードの 《EXP》 にある 《花鳥風月》 を持つエンゲージを1枚選び、このカードとコネクトする。<br><br>《自》 《有効》 エリア 《誘発》 ミッションが 《スリープ》 する。 《効果》 相手のエリアにあるコスト3以下のキャラを1枚選び、退場させてよい。あなたのキープに 《花鳥風月》 を持つ 《シェリー》 がある場合、かわりに相手のエリアにあるコスト5以下のキャラを1枚選び、退場させてよい。", //JP_TEXT
		""	//TW_TEXT
		],[
		"F07-070", //ID
		"img/cardimg/F07-070.png", //SRC
		"デアデビルオーバー シェリー", //NAME
		"D", //RARE
		"キャラカード", //TYPE
		"7", //COST
		"1", //COSTDOWN
		"10000", //POWER
		"☆", //MISSION
		"花鳥風月/サムライ/剣術/奥義", //FEATURE
		"シェリー", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《常》 《有効》 《相手ターン》 エリア 《効果》 裏向きか 《スリープ》 の相手のミッションがある場合、相手はこのカードを元々のコストが5以下のカードの能力で選ぶことができない。<br><br>《自》 《有効》 エリア 《誘発》 このカードがあるレーンにあるミッションが 《スリープ》 する。 《効果》 ミッションフェイズ終了時まで、このカードは以下の能力を得る。“ 《常》 《有効》 エリア 《効果》 相手のエリアにある元々のパワーが5000以上のキャラのパワーを－5000する。”", //JP_TEXT
		""	//TW_TEXT
		],[
		"F07-071", //ID
		"img/cardimg/F07-071.png", //SRC
		"隠密の潜入者 ノイ", //NAME
		"D", //RARE
		"キャラカード", //TYPE
		"3", //COST
		"0", //COSTDOWN
		"4000", //POWER
		"A", //MISSION
		"花鳥風月/シノビ/忍術", //FEATURE
		"ノイ", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エリア 《誘発》 《アタック成功》 《効果》 あなたのデッキの上から5枚公開し、その中にある 《忍術》 を持つキャラ1枚選び、トラッシュに置いてよい。残りを好きな順番でデッキの下に置く。<br><br>《起》 《有効》 《ターン1》 エリア 《コスト》 あなたのエリアにあるこのカード以外のキャラを1枚デッキに戻し、シャッフルする。 《効果》 あなたのトラッシュにある「城内大立ち回り ノイ」を1枚選び、キャラがないエリアに 《リブート》 で登場させる。", //JP_TEXT
		""	//TW_TEXT
		],[
		"F07-072", //ID
		"img/cardimg/F07-072.png", //SRC
		"城内大立ち回り ノイ", //NAME
		"D", //RARE
		"キャラカード", //TYPE
		"4", //COST
		"0", //COSTDOWN
		"2000", //POWER
		"A", //MISSION
		"花鳥風月/シノビ/忍術", //FEATURE
		"ノイ", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《常》 《有効》 手札とキープ 《効果》 あなたのエリアにあるキャラ1枚につき、このカードのコストを－1する。<br><br>《常》 《有効》 エリア 《効果》 このカードは 《EXP》 を持たない相手のキャラからバトルによるダメージを受けない。<br><br>《起》 《有効》 《ターン1》 エリア 《コスト》 このカードとあなたのエリアにある「隠密の潜入者 ノイ」を1枚デッキに戻し、シャッフルする。 《効果》 あなたのトラッシュにある 《奥義》 を持つ 《ノイ》 を1枚選び、キャラがないエリアに 《リブート》 で登場させる。", //JP_TEXT
		""	//TW_TEXT
		],[
		"F07-073", //ID
		"img/cardimg/F07-073.png", //SRC
		"黄金色の慈雨", //NAME
		"D", //RARE
		"ミッションカード", //TYPE
		"", //COST
		"", //COSTDOWN
		"", //POWER
		"A", //MISSION
		"花鳥風月/シノビ/忍術", //FEATURE
		"ノイ", //ACCOUNT
		"", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《チェック》 《有効》 《自分ターン》 《条件》 ①このカードがあるレーンに「城内大立ち回り ノイ」の能力によってあなたの 《奥義》 を持つ 《ノイ》 が登場する。<br><br>《クリア》 《有効》 《スリープ》 《条件》 ❶このカードがあるレーンに相手のキャラがない。❷あなたのエリアに、このターンに 《アタック成功》 している 《奥義》 を持つ 《ノイ》 がある。", //JP_TEXT
		""	//TW_TEXT
		],[
		"F07-074", //ID
		"img/cardimg/F07-074.png", //SRC
		"春空に浮かばせて ノイ", //NAME
		"D", //RARE
		"キャラカード", //TYPE
		"1", //COST
		"0", //COSTDOWN
		"1000", //POWER
		"B", //MISSION
		"花鳥風月/シノビ/修行", //FEATURE
		"ノイ", //ACCOUNT
		"1", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 《EXP》 《誘発》 このカードがサイドから 《ノイ》 の 《EXP》 になる。 《効果》 このカードをキャラのないサイドに 《スリープ》 で登場させてよい。<br><br>《自》 《有効》 エリア 《誘発》 このカードがカードの能力で登場する。 《効果》 あなたのサイドにあるコスト5以上の 《ノイ》 を手札に戻してよい。戻したならば、2枚引く。ミッションフェイズ終了時まで、あなたは 《同名》 のこの能力をプレイできない。<br><br>《起》 《有効》 手札 《コスト》 あなたのエネルギーを1枚トラッシュに置く。 《効果》 このカードをキャラがないエリアに 《スリープ》 で登場させる。", //JP_TEXT
		""	//TW_TEXT
		],[
		"F07-075", //ID
		"img/cardimg/F07-075.png", //SRC
		"独楽は打つもの ノイ", //NAME
		"D", //RARE
		"キャラカード", //TYPE
		"5", //COST
		"1", //COSTDOWN
		"3000", //POWER
		"B", //MISSION
		"花鳥風月/シノビ/修行", //FEATURE
		"ノイ", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 《自分ターン》 エリア 《誘発》 《登場時》 《効果》 手札とエネルギーにある、あなたのカードを好きな枚数選び、トラッシュに置いてよい。置いた枚数1枚につき、以下の効果を1つ選び、解決する。“このカードを 《スリープ》 してよい。 《スリープ》 したならば、相手のすべてのキャラに1000ダメージを与える。”“このカードを 《リブート》 する。このターンに、このカードが3回以上 《リブート》 している場合、あなたのエリアにある 《頭領》 を持つキャラを1枚選び、 《スリープ》 してよい。 《スリープ》 したならば、あなたの「遊びのセンスじゃ負けないっす♪」を1枚選び、 《スリープ》 する。”", //JP_TEXT
		""	//TW_TEXT
		],[
		"F07-076", //ID
		"img/cardimg/F07-076.png", //SRC
		"遊びのセンスじゃ負けないっす♪", //NAME
		"D", //RARE
		"ミッションカード", //TYPE
		"", //COST
		"", //COSTDOWN
		"", //POWER
		"B", //MISSION
		"花鳥風月/シノビ/修行", //FEATURE
		"ノイ", //ACCOUNT
		"", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《クリア》 《有効》 《スリープ》 《条件》 ❶このカードがあるレーンに相手のキャラがない。❷あなたのエリアに、このターンに 《アタック成功》 している「独楽は打つもの ノイ」がある。", //JP_TEXT
		""	//TW_TEXT
		],[
		"F07-077", //ID
		"img/cardimg/F07-077.png", //SRC
		"特製！ハム尺玉！ ノイ", //NAME
		"D", //RARE
		"キャラカード", //TYPE
		"2", //COST
		"0", //COSTDOWN
		"3000", //POWER
		"C", //MISSION
		"花鳥風月/シノビ", //FEATURE
		"ノイ", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エリア 《誘発》 《登場時》 《効果》 相手のキープを1枚選び、デッキの下に置き、相手のデッキの上から1枚をキープに置く。<br><br>《自》 《有効》 《自分ターン》 《EXP》 《誘発》 このカードがエリアからキャラの 《EXP》 になる。 《効果》 あなたのエネルギーを1枚選び、トラッシュに置いてよい。置いたならば、このカードをキャラがないエリアに 《スリープ》 で登場させる。", //JP_TEXT
		""	//TW_TEXT
		],[
		"F07-078", //ID
		"img/cardimg/F07-078.png", //SRC
		"想いを打ち上げて ノイ", //NAME
		"D", //RARE
		"キャラカード", //TYPE
		"6", //COST
		"0", //COSTDOWN
		"8000", //POWER
		"C", //MISSION
		"花鳥風月/シノビ", //FEATURE
		"ノイ", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《常》 《有効》 手札とキープ 《効果》 あなたのエリアにあるキャラ1枚につき、このカードのコストを－1する。<br><br>《起》 《有効》 《ターン1》 エリア 《コスト》 あなたのエリアにあるこのカード以外のキャラを1枚デッキに戻し、シャッフルする。 《効果》 相手のキープを1枚選び、手札に戻し、相手のエリアにある 《EXP》 を持たないコスト5以下のキャラを1枚選び、相手のキープに置く。", //JP_TEXT
		""	//TW_TEXT
		],[
		"F07-079", //ID
		"img/cardimg/F07-079.png", //SRC
		"夜空に咲かせた満天星", //NAME
		"D", //RARE
		"ミッションカード", //TYPE
		"", //COST
		"", //COSTDOWN
		"", //POWER
		"C", //MISSION
		"花鳥風月/シノビ", //FEATURE
		"ノイ", //ACCOUNT
		"", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《チェック》 《有効》 《自分ターン》 《条件》 ①このターンに、あなたの 《花鳥風月》 を持つ 《ノイ》 の能力で相手のキープにカードを3回置く。<br><br>《クリア》 《有効》 《スリープ》 《条件》 ❶このカードがあるレーンに相手のキャラがない。❷このターンに、このカードがあるレーンで 《ノイ》 が2回以上 《アタック成功》 している。", //JP_TEXT
		""	//TW_TEXT
		],[
		"F07-080", //ID
		"img/cardimg/F07-080.png", //SRC
		"勾玉に込められたもの ノイ", //NAME
		"D", //RARE
		"キャラカード", //TYPE
		"2", //COST
		"0", //COSTDOWN
		"2000", //POWER
		"D", //MISSION
		"花鳥風月/シノビ/忍術", //FEATURE
		"ノイ", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エリア 《誘発》 《アタック成功》 《効果》 このカードと【 《花鳥風月》 を持つエンゲージ】がコネクトしている場合、このカードをエネルギーに置いてよい。置いたならば、あなたのトラッシュにある 《奥義》 を持つ 《ノイ》 を1枚選び、コストを支払いプレイする。<br><br>《起》 《有効》 《ターン1》 エリア 《コスト》 あなたのトラッシュに 《花鳥風月》 を持つエンゲージを2枚デッキに戻し、シャッフルする。 《効果》 あなたのエリアにこのカードしかない場合、あなたのトラッシュにあるコスト0のキャラを1枚選び、 《スリープ》 で登場させてよい。", //JP_TEXT
		""	//TW_TEXT
		],[
		"F07-081", //ID
		"img/cardimg/F07-081.png", //SRC
		"終幕 -奇策とイタズラの物語-", //NAME
		"D", //RARE
		"ミッションカード", //TYPE
		"", //COST
		"", //COSTDOWN
		"", //POWER
		"D", //MISSION
		"花鳥風月/シノビ/忍術", //FEATURE
		"ノイ", //ACCOUNT
		"", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《チェック》 《有効》 《自分ターン》 《条件》 ①あなたのエリアにある「奇策とイタズラの象徴 ノイ」の能力で「奇策とイタズラの象徴 ノイ」が 《花鳥風月》 を持つエンゲージとコネクトする。<br><br>《クリア》 《有効》 《スリープ》 《条件》 ❶このカードがあるレーンに相手のキャラがない。❷あなたのエリアに、このターンに 《アタック成功》 している 《奥義》 を持つ 《ノイ》 がある。", //JP_TEXT
		""	//TW_TEXT
		],[
		"F07-082", //ID
		"img/cardimg/F07-082.png", //SRC
		"ここ掘れハムハム ノイ", //NAME
		"D", //RARE
		"キャラカード", //TYPE
		"0", //COST
		"0", //COSTDOWN
		"500", //POWER
		"E", //MISSION
		"花鳥風月/シノビ/修行", //FEATURE
		"ノイ", //ACCOUNT
		"1", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 《自分ターン》 エリア 《誘発》 《登場時》 《効果》 あなたのデッキの上から3枚をトラッシュに置く。あなたのトラッシュにある 《同名》 以外の 《花鳥風月》 を持つキャラを1枚選び、手札に戻してよい。戻したならば、あなたはミッションフェイズ終了時まで、 《修行》 を持たないミッションをクリアできない。", //JP_TEXT
		""	//TW_TEXT
		],[
		"F07-083", //ID
		"img/cardimg/F07-083.png", //SRC
		"穴の中に眠るもの ノイ", //NAME
		"D", //RARE
		"キャラカード", //TYPE
		"4", //COST
		"0", //COSTDOWN
		"3000", //POWER
		"E", //MISSION
		"花鳥風月/シノビ/修行", //FEATURE
		"ノイ", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《常》 《有効》 手札とキープ 《効果》 あなたのエリアにあるキャラ1枚につき、このカードのコストを－1する。<br><br>《自》 《有効》 エリア 《誘発》 《LvUP》 《効果》 このカードの 《EXP》 【 《ノイ》 のキャラ】を1枚選び、 《スリープ》 で登場させてよい。<br><br>《起》 《有効》 手札 《コスト》 このカードをトラッシュに置く。 《効果》 あなたのエリアにコスト5以上の 《修行》 を持つ 《ノイ》 がある場合、相手のエリアにあるキャラを1枚選び、4000ダメージを与える。", //JP_TEXT
		""	//TW_TEXT
		],[
		"F07-084", //ID
		"img/cardimg/F07-084.png", //SRC
		"枯れ木に花を咲かせるっす！ ノイ", //NAME
		"D", //RARE
		"キャラカード", //TYPE
		"6", //COST
		"0", //COSTDOWN
		"4000", //POWER
		"E", //MISSION
		"花鳥風月/シノビ/修行", //FEATURE
		"ノイ", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《常》 《有効》 エリア 《効果》 あなたのエリアにあるキャラのパワーはカードの能力で減らない。<br><br>《常》 《有効》 手札とキープ 《効果》 あなたのエリアにあるキャラ1枚につき、このカードのコストを－1する。<br><br>《自》 《有効》 エリア 《誘発》 《アタック成功》 《効果》 あなたのトラッシュにある「穴の中に眠るもの ノイ」を好きな枚数選び、手札に戻す。3枚以上戻したならば、あなたの「吹き荒れる虹色の粒子」を1枚選び、 《スリープ》 する。", //JP_TEXT
		""	//TW_TEXT
		],[
		"F07-085", //ID
		"img/cardimg/F07-085.png", //SRC
		"吹き荒れる虹色の粒子", //NAME
		"D", //RARE
		"ミッションカード", //TYPE
		"", //COST
		"", //COSTDOWN
		"", //POWER
		"E", //MISSION
		"花鳥風月/シノビ/修行", //FEATURE
		"ノイ", //ACCOUNT
		"", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《クリア》 《有効》 《スリープ》 《条件》 ❶このカードがあるレーンに相手のキャラがない。❷相手のエリアにあるキャラの枚数より、あなたのエリアにあるキャラの枚数が3枚以上多い。", //JP_TEXT
		""	//TW_TEXT
		],[
		"F07-086", //ID
		"img/cardimg/F07-086.png", //SRC
		"奇策とイタズラの象徴 ノイ", //NAME
		"D", //RARE
		"キャラカード", //TYPE
		"5", //COST
		"0", //COSTDOWN
		"7000", //POWER
		"☆", //MISSION
		"花鳥風月/シノビ/忍術/奥義", //FEATURE
		"ノイ", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《常》 《有効》 手札かキープ 《効果》 あなたのエリアにあるキャラ1枚につき、このカードのコストを－1する。<br><br>《自》 《有効》 エリア 《誘発》 《登場時》 《効果》 このカードがコネクトしてない場合、あなたのエリアにあるこのカード以外のキャラを1枚選び、トラッシュに置いてよい。置いたならば、あなたのトラッシュにある 《花鳥風月》 を持つエンゲージを1枚選び、このカードとコネクトする。<br><br>《自》 《有効》 エリア 《誘発》 ミッションが 《スリープ》 する。 《効果》 相手のエリアにあるキャラを1枚選び、そのキャラが持つ 《EXP》 とコネクトしているエンゲージをすべてトラッシュに置く。", //JP_TEXT
		""	//TW_TEXT
		],[
		"F07-087", //ID
		"img/cardimg/F07-087.png", //SRC
		"どきどき☆エクスプロード ノイ", //NAME
		"D", //RARE
		"キャラカード", //TYPE
		"7", //COST
		"0", //COSTDOWN
		"10000", //POWER
		"☆", //MISSION
		"花鳥風月/シノビ/忍術/奥義", //FEATURE
		"ノイ", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《常》 《有効》 手札とキープ 《効果》 あなたのエリアにあるキャラ1枚につき、このカードのコストを－1する。<br><br>《常》 《有効》 《相手ターン》 エリア 《効果》 裏向きか 《スリープ》 の相手のミッションがある場合、相手はこのカードを元々のコストが5以下のカードの能力で選ぶことができない。<br><br>《自》 《有効》 エリア 《誘発》 このカードがあるレーンにあるミッションが 《スリープ》 する。 《効果》 あなたの手札にある 《ノイ》 のキャラを1枚選び、 《スリープ》 で登場させてよい。", //JP_TEXT
		""	//TW_TEXT
		],[
		"F07-088", //ID
		"img/cardimg/F07-088.png", //SRC
		"傘から覗く刃 ルイン", //NAME
		"D", //RARE
		"キャラカード", //TYPE
		"3", //COST
		"0", //COSTDOWN
		"5000", //POWER
		"C", //MISSION
		"花鳥風月/サムライ/剣術", //FEATURE
		"ルイン", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エリア 《誘発》 《アタック成功》 《効果》 あなたの手札にある「見切れぬ一刀 ルイン」を1枚選び、このカードがあるエリアに 《スリープ》 で登場させてよい。<br><br>《起》 《有効》 《自分ターン》 トラッシュ 《コスト》 あなたのトラッシュにあるカード名の異なる 《剣術》 を持つキャラを2枚好きな順番でデッキの下に置く。 《効果》 このカードをデッキに戻し、シャッフルする。2枚引く。ミッションフェイズ終了時まで、あなたは 《同名》 のこの能力をプレイできない。", //JP_TEXT
		""	//TW_TEXT
		],[
		"F07-089", //ID
		"img/cardimg/F07-089.png", //SRC
		"見切れぬ一刀 ルイン", //NAME
		"D", //RARE
		"キャラカード", //TYPE
		"4", //COST
		"1", //COSTDOWN
		"4000", //POWER
		"C", //MISSION
		"花鳥風月/サムライ/剣術", //FEATURE
		"ルイン", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エリア 《誘発》 《登場時》 《効果》 あなたの手札を1枚選び、デッキの下に置いてよい。置いたならば、1枚引く。<br><br>《自》 《有効》 エリア 《誘発》 《LvUP》 《効果》 このカードに 《EXP》 【「傘から覗く刃 ルイン」】がある場合、あなたのデッキの下から1枚をトラッシュに置く。トラッシュに置いたカードが 《奥義》 を持つ 《ルイン》 ならば、このカードがあるエリアに 《リブート》 で登場させてよい。", //JP_TEXT
		""	//TW_TEXT
		],[
		"F07-090", //ID
		"img/cardimg/F07-090.png", //SRC
		"一流たるもの油断なし！", //NAME
		"D", //RARE
		"ミッションカード", //TYPE
		"", //COST
		"", //COSTDOWN
		"", //POWER
		"C", //MISSION
		"花鳥風月/サムライ/剣術", //FEATURE
		"ルイン", //ACCOUNT
		"", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《チェック》 《有効》 《自分ターン》 《条件》 ①このカードがあるレーンに「見切れぬ一刀 ルイン」の能力によってあなたの 《奥義》 を持つ 《ルイン》 が登場する。<br><br>《クリア》 《有効》 《スリープ》 《条件》 ❶このカードがあるレーンに相手のキャラがない。❷あなたのエリアに、このターンに 《アタック成功》 している 《奥義》 を持つ 《ルイン》 がある。", //JP_TEXT
		""	//TW_TEXT
		],[
		"F07-091", //ID
		"img/cardimg/F07-091.png", //SRC
		"風の音響かせて ルイン", //NAME
		"D", //RARE
		"キャラカード", //TYPE
		"1", //COST
		"0", //COSTDOWN
		"1000", //POWER
		"D", //MISSION
		"花鳥風月/サムライ/修行", //FEATURE
		"ルイン", //ACCOUNT
		"1", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エリア 《誘発》 《登場時》 《効果》 あなたの手札を1枚選び、公開してよい。公開したならば、あなたのデッキの上から1枚公開し、そのカードのコストが手札から公開したカードのコストよりも低い場合、手札に加える。公開したカードを元に戻す。<br><br>《起》 《有効》 《相手ターン》 手札 《コスト》 あなたのエネルギーを1枚デッキの下に置く。 《効果》 このカードを 《スリープ》 で登場させる。", //JP_TEXT
		""	//TW_TEXT
		],[
		"F07-092", //ID
		"img/cardimg/F07-092.png", //SRC
		"夕暮れとそよ風と ルイン", //NAME
		"D", //RARE
		"キャラカード", //TYPE
		"7", //COST
		"1", //COSTDOWN
		"9000", //POWER
		"D", //MISSION
		"花鳥風月/サムライ/修行", //FEATURE
		"ルイン", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エリア 《誘発》 《登場時》 《効果》 あなたの手札を1枚選び、トラッシュに置いてよい。置いたならば、相手のエリアにあるコストの1番低いキャラを1枚選び、退場させる。<br><br>《自》 《有効》 エリア 《誘発》 《LvUP》 《効果》 このカードがプレイされて登場していた場合、このカードに 《EXP》 【 《頭領》 を持つカード】があるならば、あなたの「真夜中に秘密の場所で」を1枚選び、 《スリープ》 する。<br><br>《自》 《有効》 エリア 《誘発》 《アタック成功》 《効果》 あなたのトラッシュにある 《奥義》 を持つ 《ルイン》 を1枚選び、手札に戻してよい。", //JP_TEXT
		""	//TW_TEXT
		],[
		"F07-093", //ID
		"img/cardimg/F07-093.png", //SRC
		"真夜中に秘密の場所で", //NAME
		"D", //RARE
		"ミッションカード", //TYPE
		"", //COST
		"", //COSTDOWN
		"", //POWER
		"D", //MISSION
		"花鳥風月/サムライ/修行", //FEATURE
		"ルイン", //ACCOUNT
		"", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《クリア》 《有効》 《スリープ》 《条件》 ❶このカードがあるレーンに相手のキャラがない。❷このターンに、あなたのエリアでコスト7以上の 《サムライ》 を持つ 《ルイン》 に 《EXP》 【 《頭領》 を持つカード】があり、そのキャラが2回以上 《アタック成功》 している。", //JP_TEXT
		""	//TW_TEXT
		],[
		"F07-094", //ID
		"img/cardimg/F07-094.png", //SRC
		"勾玉に込められたもの ルイン", //NAME
		"D", //RARE
		"キャラカード", //TYPE
		"2", //COST
		"0", //COSTDOWN
		"2000", //POWER
		"E", //MISSION
		"花鳥風月/サムライ/剣術", //FEATURE
		"ルイン", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エリア 《誘発》 《アタック成功》 《効果》 このカードと【 《花鳥風月》 を持つエンゲージ】がコネクトしている場合、あなたのデッキを見て、その中にある 《奥義》 を持つ 《ルイン》 を1枚選び、手札に加えてよい。残りをデッキに戻し、シャッフルする。<br><br>《起》 《有効》 《ターン1》 エリア 《コスト》 あなたのトラッシュに 《花鳥風月》 を持つエンゲージを2枚デッキに戻し、シャッフルする。 《効果》 あなたのデッキの上から2枚公開し、その中にあるこのカードよりコストが高いカードを1枚選び、手札に加える。残りをデッキの下に置く。", //JP_TEXT
		""	//TW_TEXT
		],[
		"F07-095", //ID
		"img/cardimg/F07-095.png", //SRC
		"終幕 -煌めきと眩さの物語-", //NAME
		"D", //RARE
		"ミッションカード", //TYPE
		"", //COST
		"", //COSTDOWN
		"", //POWER
		"E", //MISSION
		"花鳥風月/サムライ/剣術", //FEATURE
		"ルイン", //ACCOUNT
		"", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《チェック》 《有効》 《自分ターン》 《条件》 ①あなたのエリアにある「煌めきと眩さの象徴 ルイン」の能力で「煌めきと眩さの象徴 ルイン」が 《花鳥風月》 を持つエンゲージとコネクトする。<br><br>《クリア》 《有効》 《スリープ》 《条件》 ❶このカードがあるレーンに相手のキャラがない。❷あなたのエリアに、このターンに 《アタック成功》 している 《奥義》 を持つ 《ルイン》 がある。", //JP_TEXT
		""	//TW_TEXT
		],[
		"F07-096", //ID
		"img/cardimg/F07-096.png", //SRC
		"一流の処置術 ルイン", //NAME
		"D", //RARE
		"キャラカード", //TYPE
		"3", //COST
		"0", //COSTDOWN
		"5000", //POWER
		"F", //MISSION
		"花鳥風月/サムライ/修行", //FEATURE
		"ルイン", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 《自分ターン》 エリア 《誘発》 《登場時》 《効果》 あなたのデッキを見て、その中にある 《同名》 以外の 《修行》 を持つカードを1枚選び、公開し、手札に加えてよい。残りを元に戻し、シャッフルする。ミッションフェイズ終了時まで、あなたは 《修行》 を持たないミッションをクリアできない。<br><br>《起》 《有効》 《相手ターン》 手札 《コスト》 あなたのエリアにあるキャラを1枚デッキに戻し、シャッフルする。 《効果》 このカードを 《リブート》 で登場させる。ミッションフェイズ終了時まで、このカードのパワーを＋5000する。", //JP_TEXT
		""	//TW_TEXT
		],[
		"F07-097", //ID
		"img/cardimg/F07-097.png", //SRC
		"深夜の物音に誘われて", //NAME
		"D", //RARE
		"イベントカード", //TYPE
		"3", //COST
		"", //COSTDOWN
		"", //POWER
		"F", //MISSION
		"花鳥風月/サムライ/修行", //FEATURE
		"ルイン", //ACCOUNT
		"", //BAN
		"1", //SCOUT
		"", //MAINTENANCE
		"《イベント》 《効果》 あなたのデッキの上から1枚をトラッシュに置いてよい。置いたならば、ミッションフェイズ終了時まで、あなたが次に手札からプレイする 《花鳥風月》 を持つ 《ルイン》 のキャラのコストをトラッシュに置いたカードの元々のコスト1につき、－1する。", //JP_TEXT
		""	//TW_TEXT
		],[
		"F07-098", //ID
		"img/cardimg/F07-098.png", //SRC
		"鶴と恩返し ルイン", //NAME
		"D", //RARE
		"キャラカード", //TYPE
		"9", //COST
		"1", //COSTDOWN
		"9000", //POWER
		"F", //MISSION
		"花鳥風月/サムライ/修行", //FEATURE
		"ルイン", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《常》 《有効》 エリア 《効果》 あなたのエリアにあるキャラのパワーはカードの能力で減らない。<br><br>《自》 《有効》 エリア 《誘発》 《アタック成功》 《効果》 あなたの「最高の贈り物」を1枚選び、 《スリープ》 する。<br><br>《起》 《有効》 《自分ターン》 手札 《コスト》 このカードをデッキの下に置く。 《効果》 あなたのデッキの上から3枚を公開し、その中にある 《修行》 を持つカードを1枚選び、手札に加える。残りを好きな順番でデッキの下に置く。ミッションフェイズ終了時まで、あなたはの 《同名》 この能力をプレイできない。", //JP_TEXT
		""	//TW_TEXT
		],[
		"F07-099", //ID
		"img/cardimg/F07-099.png", //SRC
		"最高の贈り物", //NAME
		"D", //RARE
		"ミッションカード", //TYPE
		"", //COST
		"", //COSTDOWN
		"", //POWER
		"F", //MISSION
		"花鳥風月/サムライ/修行", //FEATURE
		"ルイン", //ACCOUNT
		"", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《クリア》 《有効》 《スリープ》 《条件》 ❶このカードがあるレーンに相手のキャラがない。❷このターンに、あなたのエリアで 《花鳥風月》 を持つ 《ルイン》 が3回以上 《アタック成功》 している。", //JP_TEXT
		""	//TW_TEXT
		],[
		"F07-100", //ID
		"img/cardimg/F07-100.png", //SRC
		"煌めきと眩さの象徴 ルイン", //NAME
		"D", //RARE
		"キャラカード", //TYPE
		"5", //COST
		"1", //COSTDOWN
		"7000", //POWER
		"☆", //MISSION
		"花鳥風月/サムライ/剣術/奥義", //FEATURE
		"ルイン", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エリア 《誘発》 《LvUP》 《効果》 このカードがコネクトしてない場合、このカードの 《EXP》 にある 《花鳥風月》 を持つエンゲージを1枚選び、このカードとコネクトする。<br><br>《自》 《有効》 エリア 《誘発》 ミッションが 《スリープ》 する。 《効果》 エリアにあるキャラを1枚選び、あなたのデッキの上から1枚公開する。公開したカードのコストが選んだキャラのコストより高い場合、1枚引く。そうでない場合、公開したカードをトラッシュに置き、相手のキープを1枚選び、トラッシュに置く。", //JP_TEXT
		""	//TW_TEXT
		],[
		"F07-101", //ID
		"img/cardimg/F07-101.png", //SRC
		"賭賭神流剣技-霧雪- ルイン", //NAME
		"D", //RARE
		"キャラカード", //TYPE
		"13", //COST
		"1", //COSTDOWN
		"11000", //POWER
		"☆", //MISSION
		"花鳥風月/サムライ/剣術/奥義", //FEATURE
		"ルイン", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《常》 《有効》 《相手ターン》 エリア 《効果》 裏向きか 《スリープ》 の相手のミッションがある場合、相手はこのカードを元々のコストが5以下のカードの能力で選ぶことができない。<br><br>《自》 《有効》 エリア 《誘発》 このカードがあるレーンにあるミッションが 《スリープ》 する。 《効果》 あなたのデッキをシャッフルし、デッキの上から1枚を公開する。そのカードをコストを支払わずにプレイする。プレイしなかったならば、そのカードをデッキの下に置く。", //JP_TEXT
		""	//TW_TEXT
		],[
		"F07-102", //ID
		"img/cardimg/F07-102.png", //SRC
		"夜の墓地にて やむ", //NAME
		"D", //RARE
		"キャラカード", //TYPE
		"3", //COST
		"0", //COSTDOWN
		"4000", //POWER
		"C", //MISSION
		"花鳥風月/シノビ/忍術", //FEATURE
		"やむ", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エリア 《誘発》 《アタック成功》 《効果》 あなたのデッキの上から5枚公開し、その中にある 《忍術》 を持つキャラ1枚選び、トラッシュに置いてよい。残りを好きな順番でデッキの下に置く。<br><br>《起》 《有効》 《ターン1》 エリア 《コスト》 あなたのエリアにあるこのカード以外のキャラを1枚デッキに戻し、シャッフルする。 《効果》 あなたのトラッシュにある「縛り上げる鎖使い やむ」を1枚選び、キャラがないエリアに 《リブート》 で登場させる。", //JP_TEXT
		""	//TW_TEXT
		],[
		"F07-103", //ID
		"img/cardimg/F07-103.png", //SRC
		"縛り上げる鎖使い やむ", //NAME
		"D", //RARE
		"キャラカード", //TYPE
		"6", //COST
		"1", //COSTDOWN
		"5000", //POWER
		"C", //MISSION
		"花鳥風月/シノビ/忍術", //FEATURE
		"やむ", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《常》 《有効》 すべて 《効果》 あなたの手札が1枚もない場合、このカードはスカウトアイコンを得る。<br><br>《自》 《有効》 エリア 《誘発》 このカードが 《スカウト》 で登場する。 《効果》 あなたのエネルギーを1枚選び、トラッシュに置いてよい。置いたならば、1回 《スカウト》 する。<br><br>《起》 《有効》 《ターン1》 エリア 《コスト》 このカードとあなたのエリアにある「夜の墓地にて やむ」を1枚デッキに戻し、シャッフルする。 《効果》 あなたのトラッシュにある 《奥義》 を持つ 《やむ》 を1枚選び、キャラがないエリアに 《リブート》 で登場させる。", //JP_TEXT
		""	//TW_TEXT
		],[
		"F07-104", //ID
		"img/cardimg/F07-104.png", //SRC
		"朝日が昇るまでは", //NAME
		"D", //RARE
		"ミッションカード", //TYPE
		"", //COST
		"", //COSTDOWN
		"", //POWER
		"C", //MISSION
		"花鳥風月/シノビ/忍術", //FEATURE
		"やむ", //ACCOUNT
		"", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《チェック》 《有効》 《自分ターン》 《条件》 ①このカードがあるレーンに「縛り上げる鎖使い やむ」の能力によってあなたの 《奥義》 を持つ 《やむ》 が登場する。<br><br>《クリア》 《有効》 《スリープ》 《条件》 ❶このカードがあるレーンに相手のキャラがない。❷あなたのエリアに、このターンに 《アタック成功》 している 《奥義》 を持つ 《やむ》 がある。", //JP_TEXT
		""	//TW_TEXT
		],[
		"F07-105", //ID
		"img/cardimg/F07-105.png", //SRC
		"新製品開発中 やむ", //NAME
		"D", //RARE
		"キャラカード", //TYPE
		"4", //COST
		"1", //COSTDOWN
		"4000", //POWER
		"D", //MISSION
		"花鳥風月/シノビ/修行", //FEATURE
		"やむ", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《常》 《有効》 すべて 《効果》 あなたのエリアに 《頭領》 を持つキャラがある場合、このカードはスカウトアイコンを得る。<br><br>《常》 《有効》 エリア 《効果》 このターンに、あなたが「やむドリ『わびさび』」をプレイしてない場合、このカードはアタックできない。<br><br>《自》 《有効》 エリア 《誘発》 《アタック成功》 《効果》 このターンに、あなたのエリアで 《同名》 が2回以上 《アタック成功》 している場合、あなたの「アナタ専用のドリンク」を1枚選び、 《スリープ》 する。", //JP_TEXT
		""	//TW_TEXT
		],[
		"F07-106", //ID
		"img/cardimg/F07-106.png", //SRC
		"やむドリ『わびさび』", //NAME
		"D", //RARE
		"イベントカード", //TYPE
		"0", //COST
		"", //COSTDOWN
		"", //POWER
		"D", //MISSION
		"花鳥風月/シノビ/修行", //FEATURE
		"やむ", //ACCOUNT
		"", //BAN
		"1", //SCOUT
		"", //MAINTENANCE
		"《イベント》 《効果》 このカードはあなたのエリアに 《頭領》 を持つキャラがある場合にしかプレイできない。あなたの手札をすべてトラッシュに置き、あなたのエネルギーを2枚選び、トラッシュに置き、2回 《スカウト》 する。<br><br>《起》 《有効》 トラッシュ 《コスト》 あなたのエリアにある 《やむ》 を1枚デッキに戻し、シャッフルする。 《効果》 このカードをコストを支払わずにプレイし、このカードをあなたのデッキの下に置く。ミッションフェイズ終了時まで、あなたは 《同名》 のこの能力をプレイできない。", //JP_TEXT
		""	//TW_TEXT
		],[
		"F07-107", //ID
		"img/cardimg/F07-107.png", //SRC
		"アナタ専用のドリンク", //NAME
		"D", //RARE
		"ミッションカード", //TYPE
		"", //COST
		"", //COSTDOWN
		"", //POWER
		"D", //MISSION
		"花鳥風月/シノビ/修行", //FEATURE
		"やむ", //ACCOUNT
		"", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《クリア》 《有効》 《スリープ》 《条件》 ❶このカードがあるレーンに相手のキャラがない。❷あなたのエリアに「新製品開発中 やむ」がある。", //JP_TEXT
		""	//TW_TEXT
		],[
		"F07-108", //ID
		"img/cardimg/F07-108.png", //SRC
		"勾玉に込められたもの やむ", //NAME
		"D", //RARE
		"キャラカード", //TYPE
		"2", //COST
		"0", //COSTDOWN
		"2000", //POWER
		"E", //MISSION
		"花鳥風月/シノビ/忍術", //FEATURE
		"やむ", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エリア 《誘発》 《アタック成功》 《効果》 このカードと【 《花鳥風月》 を持つエンゲージ】がコネクトしている場合、このカードをエネルギーに置いてよい。置いたならば、あなたのトラッシュにある 《奥義》 を持つ 《やむ》 を1枚選び、コストを支払いプレイする。<br><br>《起》 《有効》 《ターン1》 エリア 《コスト》 あなたのトラッシュに 《花鳥風月》 を持つエンゲージを2枚デッキに戻し、シャッフルする。 《効果》 あなたの手札が1枚もない場合、あなたのエリアにあるキャラとコネクトしている 《花鳥風月》 を持つエンゲージを1枚選び、手札に戻す。", //JP_TEXT
		""	//TW_TEXT
		],[
		"F07-109", //ID
		"img/cardimg/F07-109.png", //SRC
		"終幕 -アイとキズナの物語-", //NAME
		"D", //RARE
		"ミッションカード", //TYPE
		"", //COST
		"", //COSTDOWN
		"", //POWER
		"E", //MISSION
		"花鳥風月/シノビ/忍術", //FEATURE
		"やむ", //ACCOUNT
		"", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《チェック》 《有効》 《自分ターン》 《条件》 ①あなたのエリアにある「アイとキズナの象徴 やむ」の能力で「アイとキズナの象徴 やむ」が 《花鳥風月》 を持つエンゲージとコネクトする。<br><br>《クリア》 《有効》 《スリープ》 《条件》 ❶このカードがあるレーンに相手のキャラがない。❷あなたのエリアに、このターンに 《アタック成功》 している 《奥義》 を持つ 《やむ》 がある。", //JP_TEXT
		""	//TW_TEXT
		],[
		"F07-110", //ID
		"img/cardimg/F07-110.png", //SRC
		"わらしべ長者ってなに？ やむ", //NAME
		"D", //RARE
		"キャラカード", //TYPE
		"2", //COST
		"0", //COSTDOWN
		"2000", //POWER
		"F", //MISSION
		"花鳥風月/シノビ/修行", //FEATURE
		"やむ", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エリア 《誘発》 《アタック成功》 《効果》 あなたのデッキの上から5枚公開し、その中にある 《修行》 を持つカードを1枚選び、手札に加え、残りをトラッシュに置く。加えたカードが「圧倒的ひらめき」の場合、そのカードをコストを支払わずにプレイしてよい。あなたはミッションフェイズ終了時まで、 《修行》 を持たないミッションをクリアできない。", //JP_TEXT
		""	//TW_TEXT
		],[
		"F07-111", //ID
		"img/cardimg/F07-111.png", //SRC
		"圧倒的ひらめき", //NAME
		"D", //RARE
		"イベントカード", //TYPE
		"3", //COST
		"", //COSTDOWN
		"", //POWER
		"F", //MISSION
		"花鳥風月/シノビ/修行", //FEATURE
		"やむ", //ACCOUNT
		"", //BAN
		"1", //SCOUT
		"", //MAINTENANCE
		"《イベント》 《効果》 あなたのデッキの上から4枚公開し、その中にあるコスト2以下の 《修行》 を持つキャラを1枚選び、 《リブート》 で登場させてよい。このカードが「わらしべ長者ってなに？ やむ」の能力でプレイされた場合、かわりにあなたのデッキを見て、その中にある「神速行脚 やむ」を1枚選び、 《リブート》 で登場させてよい。残りを元に戻し、シャッフルする。", //JP_TEXT
		""	//TW_TEXT
		],[
		"F07-112", //ID
		"img/cardimg/F07-112.png", //SRC
		"神速行脚 やむ", //NAME
		"D", //RARE
		"キャラカード", //TYPE
		"4", //COST
		"0", //COSTDOWN
		"6000", //POWER
		"F", //MISSION
		"花鳥風月/シノビ/修行", //FEATURE
		"やむ", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《常》 《有効》 エリア 《効果》 あなたのエリアにあるキャラはカードの能力でダメージを受けない。<br><br>《自》 《有効》 エリア 《誘発》 《アタック成功》 《効果》 あなたの「大活躍！みんなの人気者？」を1枚選び、 《スリープ》 する。<br><br>《起》 《有効》 トラッシュ 《コスト》 あなたのトラッシュにある 《修行》 を持つカードを2枚好きな順番でデッキの下に置く。 《効果》 このカードをデッキに戻し、シャッフルする。ミッションフェイズ終了時まで、あなたは 《同名》 のこの能力をプレイできない。", //JP_TEXT
		""	//TW_TEXT
		],[
		"F07-113", //ID
		"img/cardimg/F07-113.png", //SRC
		"大活躍！みんなの人気者？", //NAME
		"D", //RARE
		"ミッションカード", //TYPE
		"", //COST
		"", //COSTDOWN
		"", //POWER
		"F", //MISSION
		"花鳥風月/シノビ/修行", //FEATURE
		"やむ", //ACCOUNT
		"", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《クリア》 《有効》 《スリープ》 《条件》 ❶このカードがあるレーンに相手のキャラがない。❷このターンに、あなたの 《やむ》 のキャラがデッキから3回以上登場している。", //JP_TEXT
		""	//TW_TEXT
		],[
		"F07-114", //ID
		"img/cardimg/F07-114.png", //SRC
		"アイとキズナの象徴 やむ", //NAME
		"D", //RARE
		"キャラカード", //TYPE
		"5", //COST
		"1", //COSTDOWN
		"7000", //POWER
		"☆", //MISSION
		"花鳥風月/シノビ/忍術/奥義", //FEATURE
		"やむ", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エリア 《誘発》 《登場時》 《効果》 このカードがコネクトしてない場合、あなたのエリアにあるこのカード以外のキャラを1枚選び、トラッシュに置いてよい。置いたならば、あなたのトラッシュにある 《花鳥風月》 を持つエンゲージを選び、このカードとコネクトする。<br><br>《自》 《有効》 エリア 《誘発》 ミッションが 《スリープ》 する。 《効果》 ミッションフェイズ終了時まで、このカードは以下の能力を得る。“ 《常》 《有効》 エリア 《効果》 手札が1枚以上あるプレイヤーは 《スカウト》 でカードをプレイすることができない。”", //JP_TEXT
		""	//TW_TEXT
		],[
		"F07-115", //ID
		"img/cardimg/F07-115.png", //SRC
		"旋鎖重縛 やむ", //NAME
		"D", //RARE
		"キャラカード", //TYPE
		"7", //COST
		"1", //COSTDOWN
		"9000", //POWER
		"☆", //MISSION
		"花鳥風月/シノビ/忍術/奥義", //FEATURE
		"やむ", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《常》 《有効》 《相手ターン》 エリア 《効果》 裏向きか 《スリープ》 の相手のミッションがある場合、相手はこのカードを元々のコストが5以下のカードの能力で選ぶことができない。<br><br>《自》 《有効》 エリア 《誘発》 このカードがあるレーンにあるミッションが 《スリープ》 する。 《効果》 相手は自分の手札を2枚選び、トラッシュに置く。あなたの手札を好きな枚数選び、トラッシュに置き、1回 《スカウト》 する。", //JP_TEXT
		""	//TW_TEXT
		],[
		"F07-116", //ID
		"img/cardimg/F07-116.png", //SRC
		"シノビ改方 十手トウカ", //NAME
		"D", //RARE
		"キャラカード", //TYPE
		"4", //COST
		"1", //COSTDOWN
		"4000", //POWER
		"B", //MISSION
		"花鳥風月/サムライ/剣術", //FEATURE
		"ストリーマー", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《常》 《有効》 すべて 《効果》 デッキを構築する際、このカードをデッキに8枚まで入れることができる。<br><br>《自》 《有効》 エリア 《誘発》 《アタック成功》 《効果》 キープを1枚選び、手札に戻してよい。戻したならば、このカードの 《EXP》 をすべてトラッシュに置き、このカードを手札に戻し、あなたの手札にある 《同名》 以外の 《剣術》 を持つキャラを1枚選び、キャラがないエリアに 《リブート》 で登場させてよい。", //JP_TEXT
		""	//TW_TEXT
		],[
		"F07-117", //ID
		"img/cardimg/F07-117.png", //SRC
		"同心捕物劇", //NAME
		"D", //RARE
		"ミッションカード", //TYPE
		"", //COST
		"", //COSTDOWN
		"", //POWER
		"B", //MISSION
		"花鳥風月/サムライ/剣術", //FEATURE
		"ストリーマー", //ACCOUNT
		"", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《起》 《有効》 《自分ターン1》 ミッション 《コスト》 なし 《効果》 あなたの手札にある同じカード名のカードを4枚選び、公開する。4枚公開したならば、このカードを 《スリープ》 し、公開したカードをデッキに戻し、シャッフルし、4枚引く。<br><br>《クリア》 《有効》 《スリープ》 《条件》 ❶このカードがあるレーンに相手のキャラがない。❷あなたのエリアに、このターンに 《アタック成功》 している 《ストリーマー》 がある。", //JP_TEXT
		""	//TW_TEXT
		],[
		"F07-118", //ID
		"img/cardimg/F07-118.png", //SRC
		"因果は巡る糸車", //NAME
		"D", //RARE
		"ミッションカード", //TYPE
		"", //COST
		"", //COSTDOWN
		"", //POWER
		"C", //MISSION
		"花鳥風月/シノビ/忍術", //FEATURE
		"ストリーマー", //ACCOUNT
		"", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《チェック》 《有効》 《自分ターン》 《条件》 ①あなたのトラッシュが50枚以上ある時に、あなたのエリアでコスト7以上のキャラが 《アタック成功》 する。<br><br>《クリア》 《有効》 《スリープ》 《条件》 ❶このカードがあるレーンに相手のキャラがない。❷このカードがあるレーンに 《スリープ》 のあなたのコスト7以上のキャラがある。", //JP_TEXT
		""	//TW_TEXT
		],[
		"F07-119", //ID
		"img/cardimg/F07-119.png", //SRC
		"サムライ陣営頭領 天乃ムラクモ", //NAME
		"D", //RARE
		"キャラカード", //TYPE
		"0", //COST
		"0", //COSTDOWN
		"500", //POWER
		"☆", //MISSION
		"花鳥風月/サムライ/頭領", //FEATURE
		"ストリーマー", //ACCOUNT
		"1", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《常》 《有効》 エリア 《効果》 相手はこのカードをカードの能力で選ぶことができない。<br><br>《常》 《有効》 《自分ターン》 エリア 《効果》 あなたのエリアにある 《剣術》 を持つキャラのパワーを＋2000する。<br><br>《自》 《有効》 エリア 《誘発》 《登場時》 《効果》 あなたのデッキの上から3枚公開し、その中にある 《サムライ》 を持つキャラを1枚選び、手札に加え、残りを好きな順番でデッキの下に置く。", //JP_TEXT
		""	//TW_TEXT
		],[
		"F07-120", //ID
		"img/cardimg/F07-120.png", //SRC
		"シノビ陣営頭領 忍足アヤメ", //NAME
		"D", //RARE
		"キャラカード", //TYPE
		"0", //COST
		"0", //COSTDOWN
		"500", //POWER
		"☆", //MISSION
		"花鳥風月/シノビ/頭領", //FEATURE
		"ストリーマー", //ACCOUNT
		"1", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《常》 《有効》 エリア 《効果》 相手はこのカードをカードの能力で選ぶことができない。<br><br>《自》 《有効》 エリア 《誘発》 《登場時》 《効果》 あなたのデッキの上から3枚公開し、その中にある 《シノビ》 を持つキャラを1枚選び、手札に加え、残りを好きな順番でデッキの下に置く。<br><br>《自》 《有効》 エリア 《誘発》 あなたの 《忍術》 を持つキャラが登場する。 《効果》 あなたのデッキの上から1枚をトラッシュに置いてよい。", //JP_TEXT
		""	//TW_TEXT
		],[
		"F07-121", //ID
		"img/cardimg/F07-121.png", //SRC
		"姫様のわがまま", //NAME
		"D", //RARE
		"イベントカード", //TYPE
		"0", //COST
		"", //COSTDOWN
		"", //POWER
		"☆", //MISSION
		"花鳥風月", //FEATURE
		"ストリーマー", //ACCOUNT
		"", //BAN
		"1", //SCOUT
		"", //MAINTENANCE
		"《イベント》 《効果》 以下の効果から1～2つ選び、それぞれ好きな順番で解決してよい。▶あなたの手札が3枚以下の場合、1枚引く。▶相手のキープを1枚選び、手札に戻す。▶ 《リロード》 （あなたのトラッシュにあるすべてのキャラをデッキに戻し、シャッフルする。）▶あなたのデッキの上から10枚トラッシュに置く。▶あなたのエネルギーを4枚選び、トラッシュに置いてよい。4枚置いたならば、相手のエリアにあるコスト6以上のキャラを1枚選び、手札に戻す。", //JP_TEXT
		""	//TW_TEXT
		],[
		"F07-122", //ID
		"img/cardimg/F07-122.png", //SRC
		"加護の片鱗", //NAME
		"D", //RARE
		"イベントカード", //TYPE
		"0", //COST
		"", //COSTDOWN
		"", //POWER
		"☆", //MISSION
		"花鳥風月", //FEATURE
		"ストリーマー", //ACCOUNT
		"", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《イベント》 《効果》 あなたのデッキを見て、その中にある 《花鳥風月》 を持つエンゲージを1枚選び、公開し、手札に加えてよい。残りを元に戻し、シャッフルする。ミッションフェイズ終了時まで、あなたはこの能力で手札に加えたカードと同じカード名を持つカードをプレイできない。", //JP_TEXT
		""	//TW_TEXT
		],[
		"F07-123", //ID
		"img/cardimg/F07-123.png", //SRC
		"真なる狙い", //NAME
		"D", //RARE
		"イベントカード", //TYPE
		"1", //COST
		"", //COSTDOWN
		"", //POWER
		"☆", //MISSION
		"花鳥風月", //FEATURE
		"ストリーマー", //ACCOUNT
		"", //BAN
		"1", //SCOUT
		"", //MAINTENANCE
		"《イベント》 《効果》 相手は自分のエネルギーを3枚選び、トラッシュに置いてよい。3枚置かなかったならば、あなたのキープを1枚選び、手札に戻し、あなたのデッキを見て、その中にあるイベントを1枚選び、キープに置いてよい。残りを元に戻し、シャッフルする。", //JP_TEXT
		""	//TW_TEXT
		],[
		"F07-124", //ID
		"img/cardimg/F07-124.png", //SRC
		"士気あふれる号令 武田ハル", //NAME
		"D", //RARE
		"キャラカード", //TYPE
		"1", //COST
		"0", //COSTDOWN
		"1000", //POWER
		"☆", //MISSION
		"花鳥風月/サムライ", //FEATURE
		"ストリーマー", //ACCOUNT
		"1", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エリア 《誘発》 《登場時》 《効果》 あなたの手札にある 《サムライ》 を持つカードを好きな枚数選び、公開する。公開したカードの枚数分引く。公開したカードをすべてデッキに戻し、シャッフルする。3枚以上戻したならば、1枚引く。", //JP_TEXT
		""	//TW_TEXT
		],[
		"F07-125", //ID
		"img/cardimg/F07-125.png", //SRC
		"神秘の音色", //NAME
		"D", //RARE
		"イベントカード", //TYPE
		"1", //COST
		"", //COSTDOWN
		"", //POWER
		"☆", //MISSION
		"花鳥風月", //FEATURE
		"ストリーマー", //ACCOUNT
		"", //BAN
		"1", //SCOUT
		"", //MAINTENANCE
		"《イベント》 《効果》 あなたのキープを1枚選び、エネルギーに置く。このカードをキープに置く。<br><br>《自》 《有効》 キープ 《誘発》 あなたのキャラが退場する。 《効果》 このカードをトラッシュに置いてよい。置いたならば、あなたの手札にある退場したキャラよりコストが低い 《花鳥風月》 を持つキャラを1枚選び、 《スリープ》 で登場させてよい。", //JP_TEXT
		""	//TW_TEXT
		],[
		"F07-126", //ID
		"img/cardimg/F07-126.png", //SRC
		"城下の散策者 見当サラ", //NAME
		"D", //RARE
		"キャラカード", //TYPE
		"1", //COST
		"0", //COSTDOWN
		"1000", //POWER
		"☆", //MISSION
		"花鳥風月", //FEATURE
		"ストリーマー", //ACCOUNT
		"1", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エネルギー 《誘発》 ミッションが 《スリープ》 する。 《効果》 このカードをキャラがないエリアに 《リブート》 で登場させてよい。ミッションフェイズ終了時まで、あなたは 《同名》 のこの能力をプレイできない。<br><br>《起》 《有効》 エリア 《コスト》 《スリープ》 《効果》 あなたのデッキの上から1枚見て、そのカードをデッキの上か下に置く。", //JP_TEXT
		""	//TW_TEXT
		],[
		"F07-127", //ID
		"img/cardimg/F07-127.png", //SRC
		"放たれる銃弾 坂本キザクラ", //NAME
		"D", //RARE
		"キャラカード", //TYPE
		"2", //COST
		"0", //COSTDOWN
		"500", //POWER
		"☆", //MISSION
		"花鳥風月/剣術/忍術", //FEATURE
		"ストリーマー", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《起》 《有効》 《相手ターン1》 エリア 《コスト》 なし 《効果》 相手のエリアにあるキャラを1枚選び、キープに置く。", //JP_TEXT
		""	//TW_TEXT
		],[
		"F07-128", //ID
		"img/cardimg/F07-128.png", //SRC
		"慰労稀有『猫又』", //NAME
		"D", //RARE
		"エンゲージカード", //TYPE
		"2", //COST
		"0", //COSTDOWN
		"", //POWER
		"☆", //MISSION
		"花鳥風月/剣術/忍術", //FEATURE
		"ストリーマー", //ACCOUNT
		"", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《エンゲージ》 【デッキエンゲージ】 《頭領》 を持つキャラ1枚<br><br>《常》 《有効》 コネクト 《効果》 このカードとコネクトしているキャラはカードの能力でダメージを受けない。<br><br>《常》 《有効》 コネクト 《効果》 このカードとコネクトしているキャラのパワーはカードの能力で減らない。", //JP_TEXT
		""	//TW_TEXT
		],[
		"F07-129", //ID
		"img/cardimg/F07-129.png", //SRC
		"渦巻く炎 草薙ミコト", //NAME
		"D", //RARE
		"キャラカード", //TYPE
		"3", //COST
		"0", //COSTDOWN
		"5000", //POWER
		"☆", //MISSION
		"花鳥風月/サムライ/剣術/頭領", //FEATURE
		"ストリーマー", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エリア 《誘発》 《アタック成功》 《効果》 このカードと【 《花鳥風月》 を持つエンゲージ】がコネクトしている場合、あなたのデッキを見て、その中にある 《同名》 以外の 《サムライ》 を持つキャラを1枚選び、公開し、手札に加えてよい。残りを元に戻し、シャッフルする。<br><br>《起》 《有効》 トラッシュ 《コスト》 このカード以外のあなたのトラッシュにある 《サムライ》 を持つカードを3枚好きな順番でデッキの下に置く。 《効果》 このカードをデッキに戻し、シャッフルする。1枚引く。ミッションフェイズ終了時まで、あなたは 《同名》 のこの能力をプレイできない。", //JP_TEXT
		""	//TW_TEXT
		],[
		"F07-130", //ID
		"img/cardimg/F07-130.png", //SRC
		"鎌鎖領域 忍足アヤメ", //NAME
		"D", //RARE
		"キャラカード", //TYPE
		"3", //COST
		"0", //COSTDOWN
		"5000", //POWER
		"☆", //MISSION
		"花鳥風月/シノビ/忍術/頭領", //FEATURE
		"ストリーマー", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エリア 《誘発》 《アタック成功》 《効果》 このカードと【 《花鳥風月》 を持つエンゲージ】がコネクトしている場合、あなたのトラッシュにある 《同名》 以外の 《シノビ》 を持つキャラを1枚選び、手札に戻してよい。<br><br>《起》 《有効》 トラッシュ 《コスト》 このカード以外のあなたのトラッシュにある 《シノビ》 を持つカードを3枚好きな順番でデッキの下に置く。 《効果》 このカードをデッキに戻し、シャッフルする。1枚引く。ミッションフェイズ終了時まで、あなたは 《同名》 のこの能力をプレイできない。", //JP_TEXT
		""	//TW_TEXT
		],[
		"F07-131", //ID
		"img/cardimg/F07-131.png", //SRC
		"苦無飛沫の陣", //NAME
		"D", //RARE
		"イベントカード", //TYPE
		"3", //COST
		"", //COSTDOWN
		"", //POWER
		"☆", //MISSION
		"花鳥風月", //FEATURE
		"ストリーマー", //ACCOUNT
		"", //BAN
		"1", //SCOUT
		"", //MAINTENANCE
		"《イベント》 《効果》 ミッションフェイズ終了時まで、あなたのすべてのエリアに以下の能力を与える。“ 《常》 《有効》 エリア 《効果》 このエリアにある 《忍術》 を持つキャラのパワーを＋3000する。”<br><br>《常》 《有効》 手札かキープ 《効果》 このカードをプレイする際、コストを支払うかわりにあなたのトラッシュにある 《忍術》 を持つカードを2枚選び、好きな順番でデッキの下に置いてよい。", //JP_TEXT
		""	//TW_TEXT
		],[
		"F07-132", //ID
		"img/cardimg/F07-132.png", //SRC
		"御伽稀有『弁財天』", //NAME
		"D", //RARE
		"エンゲージカード", //TYPE
		"3", //COST
		"0", //COSTDOWN
		"", //POWER
		"☆", //MISSION
		"花鳥風月/修行", //FEATURE
		"ストリーマー", //ACCOUNT
		"", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《エンゲージ》 【デッキエンゲージ】コスト3以下の 《修行》 を持つキャラ1枚<br><br>《自》 《有効》 コネクト 《誘発》 このカードとコネクトする。 《効果》 あなたのデッキの上から1枚見て、そのカードをデッキの上か下に置く。", //JP_TEXT
		""	//TW_TEXT
		],[
		"F07-133", //ID
		"img/cardimg/F07-133.png", //SRC
		"修験稀有『烏天狗』", //NAME
		"D", //RARE
		"エンゲージカード", //TYPE
		"3", //COST
		"0", //COSTDOWN
		"", //POWER
		"☆", //MISSION
		"花鳥風月/剣術/忍術", //FEATURE
		"ストリーマー", //ACCOUNT
		"", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《エンゲージ》 【デッキエンゲージ】 《剣術》 か 《忍術》 を持つコスト3以下のキャラ1枚<br><br>《自》 《有効》 コネクト 《誘発》 このカードとコネクトする。 《効果》 あなたの手札を1枚選び、トラッシュに置く。<br><br>《自》 《有効》 コネクト 《誘発》 このカードとコネクトしているキャラが 《アタック成功》 する。 《効果》 1枚引く。", //JP_TEXT
		""	//TW_TEXT
		],[
		"F07-134", //ID
		"img/cardimg/F07-134.png", //SRC
		"無垢なる誘い 華祭ヨミチ", //NAME
		"D", //RARE
		"キャラカード", //TYPE
		"3", //COST
		"0", //COSTDOWN
		"3000", //POWER
		"☆", //MISSION
		"花鳥風月/サムライ/シノビ", //FEATURE
		"ストリーマー", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エリア 《誘発》 《アタック成功》 《効果》 あなたの手札を1枚選び、トラッシュに置いてよい。置いたならば、あなたのトラッシュにある 《同名》 以外のコスト4以下の 《花鳥風月》 を持つキャラを1枚選び、 《リブート》 で登場させる。", //JP_TEXT
		""	//TW_TEXT
		],[
		"F07-135", //ID
		"img/cardimg/F07-135.png", //SRC
		"真の忠義者", //NAME
		"D", //RARE
		"イベントカード", //TYPE
		"4", //COST
		"", //COSTDOWN
		"", //POWER
		"☆", //MISSION
		"花鳥風月", //FEATURE
		"ストリーマー", //ACCOUNT
		"", //BAN
		"1", //SCOUT
		"", //MAINTENANCE
		"《イベント》 《効果》 あなたのトラッシュにあるコスト3以下の 《剣術》 を持つキャラを1枚選び、キャラがないエリアに 《リブート》 で登場させる。<br><br>《常》 《有効》 手札かキープ 《効果》 このカードをプレイする際、コストを支払うかわりにあなたのトラッシュにある 《剣術》 を持つカードを4枚選び、好きな順番でデッキの下に置いてよい。", //JP_TEXT
		""	//TW_TEXT
		],[
		"F07-136", //ID
		"img/cardimg/F07-136.png", //SRC
		"回し回して太神楽", //NAME
		"D", //RARE
		"イベントカード", //TYPE
		"4", //COST
		"", //COSTDOWN
		"", //POWER
		"☆", //MISSION
		"花鳥風月", //FEATURE
		"ストリーマー", //ACCOUNT
		"", //BAN
		"1", //SCOUT
		"", //MAINTENANCE
		"《イベント》 《効果》 相手のエリアにあるコスト5以下のキャラを1枚選び、退場させる。<br><br>《常》 《有効》 手札かキープ 《効果》 このカードをプレイする際、コストを支払うかわりにあなたのトラッシュにある 《修行》 を持つカードを4枚選び、好きな順番でデッキの下に置いてよい。", //JP_TEXT
		""	//TW_TEXT
		],[
		"F07-137", //ID
		"img/cardimg/F07-137.png", //SRC
		"鬼気稀有『茨木童子』", //NAME
		"D", //RARE
		"エンゲージカード", //TYPE
		"4", //COST
		"0", //COSTDOWN
		"", //POWER
		"☆", //MISSION
		"花鳥風月/サムライ", //FEATURE
		"ストリーマー", //ACCOUNT
		"", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《エンゲージ》 【デッキエンゲージ】コスト4以下の 《サムライ》 を持つキャラ1枚<br><br>《常》 《有効》 手札かキープ 《効果》 あなたのエリアにあるキャラ1枚につき、このカードのコストを－1する。<br><br>《自》 《有効》 コネクト 《誘発》 このカードとコネクトする。 《効果》 ミッションフェイズ終了時まで、このカードとコネクトしているキャラのパワーを＋4000する。", //JP_TEXT
		""	//TW_TEXT
		],[
		"F07-138", //ID
		"img/cardimg/F07-138.png", //SRC
		"閃忍稀有『摩利支天』", //NAME
		"D", //RARE
		"エンゲージカード", //TYPE
		"5", //COST
		"0", //COSTDOWN
		"", //POWER
		"☆", //MISSION
		"花鳥風月/シノビ", //FEATURE
		"ストリーマー", //ACCOUNT
		"", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《エンゲージ》 【デッキエンゲージ】コスト4以下の 《シノビ》 を持つキャラ1枚<br><br>《常》 《有効》 手札かキープ 《効果》 あなたのエリアにあるキャラ1枚につき、このカードのコストを－1する。<br><br>《自》 《有効》 コネクト 《誘発》 このカードとコネクトする。 《効果》 相手のキャラを1枚選び、4000ダメージを与える。", //JP_TEXT
		""	//TW_TEXT
		],[
		"F07-139", //ID
		"img/cardimg/F07-139.png", //SRC
		"一件落着", //NAME
		"D", //RARE
		"イベントカード", //TYPE
		"5", //COST
		"", //COSTDOWN
		"", //POWER
		"☆", //MISSION
		"花鳥風月", //FEATURE
		"ストリーマー", //ACCOUNT
		"", //BAN
		"1", //SCOUT
		"", //MAINTENANCE
		"《イベント》 《効果》 相手のエリアにあるキャラを1枚選び、退場させる。ミッションフェイズ終了時まで、あなたはイベントをプレイできない。<br><br>《起》 《有効》 《相手ターン》 手札 《コスト》 あなたのエネルギーを3枚トラッシュに置く。 《効果》 この能力は相手の表向きで 《スリープ》 のミッションがある場合にしかプレイできない。このカードをコストを支払わずにプレイする。", //JP_TEXT
		""	//TW_TEXT
		],[
		"F07-140", //ID
		"img/cardimg/F07-140.png", //SRC
		"傀儡稀有『伊吹童子』", //NAME
		"D", //RARE
		"エンゲージカード", //TYPE
		"6", //COST
		"0", //COSTDOWN
		"", //POWER
		"☆", //MISSION
		"花鳥風月", //FEATURE
		"ストリーマー", //ACCOUNT
		"", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《エンゲージ》 【デッキエンゲージ】 《花鳥風月》 を持つ 《ストリーマー》 のキャラ1枚<br>（ 《有効》 すべて 《効果》 このカードがプレイされた場合、あなたのデッキを見て、その中にある 《花鳥風月》 を持つ 《ストリーマー》 のキャラを1枚選び、このカードとコネクトし、 《リブート》 で登場させてよい。残りをデッキに戻し、シャッフルする。）<br><br>《常》 《有効》 手札かキープ 《効果》 あなたのエリアにあるキャラ1枚につき、このカードのコストを－1する。", //JP_TEXT
		""	//TW_TEXT
		],[
		"F07-141", //ID
		"img/cardimg/F07-141.png", //SRC
		"大太刀用心棒 小鳥遊蛍", //NAME
		"D", //RARE
		"キャラカード", //TYPE
		"7", //COST
		"1", //COSTDOWN
		"10000", //POWER
		"☆", //MISSION
		"花鳥風月/サムライ/剣術", //FEATURE
		"ストリーマー", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《自》 《有効》 エリア 《誘発》 《登場時》 《効果》 あなたのトラッシュにある、 《剣術》 を持つキャラを1枚選び、手札に戻してよい。<br><br>《起》 《有効》 《ターン1》 キープ 《コスト》 あなたの手札を1枚トラッシュに置く。 《効果》 あなたのトラッシュにある、 《剣術》 を持つキャラを1枚選び、手札に戻す。", //JP_TEXT
		""	//TW_TEXT
		],[
		"F07-142", //ID
		"img/cardimg/F07-142.png", //SRC
		"自由自在な体捌き 月見里かりん", //NAME
		"D", //RARE
		"キャラカード", //TYPE
		"7", //COST
		"1", //COSTDOWN
		"0", //POWER
		"☆", //MISSION
		"花鳥風月/シノビ", //FEATURE
		"ストリーマー", //ACCOUNT
		"0", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《常》 《有効》 エリア 《効果》 あなたのトラッシュ2枚につき、このカードのパワーを＋1000する。<br><br>《常》 《有効》 エリア 《効果》 あなたのトラッシュが30枚以上ある場合、このカードは相手のコスト4以下のカードの能力で選ばれない。<br><br>《起》 《有効》 《ターン2》 エリア 《コスト》 あなたのデッキの上から4枚トラッシュに置く。 《効果》 このカードをスライドする。あなたのデッキが0枚の場合、このカードを退場させる。", //JP_TEXT
		""	//TW_TEXT
		],[
		"F07-143", //ID
		"img/cardimg/F07-143.png", //SRC
		"轟雷の太刀", //NAME
		"D", //RARE
		"イベントカード", //TYPE
		"12", //COST
		"", //COSTDOWN
		"", //POWER
		"☆", //MISSION
		"花鳥風月", //FEATURE
		"ストリーマー", //ACCOUNT
		"", //BAN
		"1", //SCOUT
		"", //MAINTENANCE
		"《イベント》 《効果》 あなたのエリアにある 《奥義》 を持つキャラを1枚選ぶ。相手のエリアにあるそのキャラのパワー以下のキャラをすべて退場させる。", //JP_TEXT
		""	//TW_TEXT
		],[
		"F07-144", //ID
		"img/cardimg/F07-144.png", //SRC
		"Vividz Star 風雅", //NAME
		"D", //RARE
		"イベントカード", //TYPE
		"1000", //COST
		"", //COSTDOWN
		"", //POWER
		"☆", //MISSION
		"花鳥風月", //FEATURE
		"ストリーマー", //ACCOUNT
		"", //BAN
		"", //SCOUT
		"", //MAINTENANCE
		"《イベント》 《有効》 《自分ターン》 《効果》 あなたの 《花鳥風月》 を持つミッションを1枚選び、クリアする。<br><br>《常》 《有効》 すべて 《効果》 デッキを構築する際、このカードをデッキに1枚まで入れることができる。", //JP_TEXT
		""	//TW_TEXT
		],[
		"F07-145", //ID
		"img/cardimg/F07-145.png", //SRC
		"力強い踏み込み", //NAME
		"D", //RARE
		"イベントカード", //TYPE
		"6", //COST
		"", //COSTDOWN
		"", //POWER
		"☆", //MISSION
		"花鳥風月", //FEATURE
		"キョウカ", //ACCOUNT
		"", //BAN
		"1", //SCOUT
		"", //MAINTENANCE
		"《イベント》 《効果》 あなたのデッキを見て、その中にあるキャラを1枚選び、センターに 《リブート》 で登場させてよい。残りを元に戻し、シャッフルする。相手は自分のデッキを見て、その中にあるキャラを1枚選び、センターに 《リブート》 で登場させてよい。残りを元に戻し、シャッフルする。<br><br>《イベント》 《効果》 お互いのセンターにキャラがある場合、お互いに自分のセンターにあるキャラを1枚選ぶ。選んだキャラの中でパワーが1番高いキャラ以外のお互いのセンターにあるすべてのキャラをトラッシュに置く。", //JP_TEXT
		""	//TW_TEXT
		],[
		"F07-146", //ID
		"img/cardimg/F07-146.png", //SRC
		"雅なる迎撃", //NAME
		"D", //RARE
		"イベントカード", //TYPE
		"6", //COST
		"", //COSTDOWN
		"", //POWER
		"☆", //MISSION
		"花鳥風月", //FEATURE
		"玲", //ACCOUNT
		"", //BAN
		"1", //SCOUT
		"", //MAINTENANCE
		"《イベント》 《効果》 相手のエリアを1つ選び、ミッションフェイズ終了時まで、以下の能力を与える。“ 《自》 《有効》 《ターン1》 エリア 《誘発》 このエリアにキャラが登場する。 《効果》 登場したキャラを退場させる。”", //JP_TEXT
		""	//TW_TEXT
		],[
		"F07-147", //ID
		"img/cardimg/F07-147.png", //SRC
		"素敵なお便り", //NAME
		"D", //RARE
		"イベントカード", //TYPE
		"1", //COST
		"", //COSTDOWN
		"", //POWER
		"☆", //MISSION
		"花鳥風月", //FEATURE
		"らぶり", //ACCOUNT
		"", //BAN
		"1", //SCOUT
		"", //MAINTENANCE
		"《イベント》 《効果》 あなたのエリアにあるコスト1以下のキャラを1枚選び、トラッシュに置いてよい。置いたならば、あなたのデッキを見て、その中にあるトラッシュに置いたキャラと同じカード名のキャラを0～3枚選び、それぞれ別々のエリアに 《リブート》 で登場させる。残りを元に戻し、シャッフルする。", //JP_TEXT
		""	//TW_TEXT
		],[
		"F07-148", //ID
		"img/cardimg/F07-148.png", //SRC
		"不思議な巻物", //NAME
		"D", //RARE
		"イベントカード", //TYPE
		"4", //COST
		"", //COSTDOWN
		"", //POWER
		"☆", //MISSION
		"花鳥風月", //FEATURE
		"まりあ", //ACCOUNT
		"", //BAN
		"1", //SCOUT
		"", //MAINTENANCE
		"《イベント》 《効果》 あなたのトラッシュにある 《同名》 以外のスカウトアイコンを持つカードを1枚選び、デッキの上に置く。", //JP_TEXT
		""	//TW_TEXT
		],[
		"F07-149", //ID
		"img/cardimg/F07-149.png", //SRC
		"臨戦！抜刀！", //NAME
		"D", //RARE
		"イベントカード", //TYPE
		"1", //COST
		"", //COSTDOWN
		"", //POWER
		"☆", //MISSION
		"花鳥風月", //FEATURE
		"シェリー", //ACCOUNT
		"", //BAN
		"1", //SCOUT
		"", //MAINTENANCE
		"《イベント》 《効果》 あなたのトラッシュにあるキャラを3枚選ぶ。3枚選んだならば、相手はその中から1枚選び、選ばれたカードをあなたの手札に戻し、残りを好きな順番でデッキの下に置く。", //JP_TEXT
		""	//TW_TEXT
		],[
		"F07-150", //ID
		"img/cardimg/F07-150.png", //SRC
		"先輩へのお土産", //NAME
		"D", //RARE
		"イベントカード", //TYPE
		"0", //COST
		"", //COSTDOWN
		"", //POWER
		"☆", //MISSION
		"花鳥風月", //FEATURE
		"ノイ", //ACCOUNT
		"", //BAN
		"1", //SCOUT
		"", //MAINTENANCE
		"《イベント》 《効果》 あなたのエリアにあるキャラを1枚選び、トラッシュに置いてよい。置いたならば、あなたのトラッシュにあるトラッシュに置いたキャラと同じコストでカード名の異なる 《ストリーマー》 を1枚選び、 《スリープ》 で登場させる。", //JP_TEXT
		""	//TW_TEXT
		]
	];
