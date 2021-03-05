export var kana = {
	convertCharToKana: function (c) {
		switch (c) {
			case 'あ':
			case 'ぁ':
			case 'ア':
			case 'ァ':
			case 'ｱ':
			case 'ｧ':
				return "ｱ";
			case 'い':
			case 'ぃ':
			case 'イ':
			case 'ィ':
			case 'ｨ':
			case 'ｲ':
			case 'ゐ':
			case 'ヰ':
				return "ｲ";
			case 'う':
			case 'ぅ':
			case 'ウ':
			case 'ゥ':
			case 'ｩ':
			case 'ｳ':
				return "ｳ";
			case 'え':
			case 'ぇ':
			case 'エ':
			case 'ェ':
			case 'ｴ':
			case 'ｪ':
			case 'ゑ':
			case 'ヱ':
				return "ｴ";
			case 'お':
			case 'ぉ':
			case 'オ':
			case 'ォ':
			case 'ｫ':
			case 'ｵ':
				return "ｵ";
			case 'か':
			case 'カ':
			case 'ｶ':
				return "ｶ";
			case 'き':
			case 'キ':
			case 'ｷ':
				return "ｷ";
			case 'く':
			case 'ク':
			case 'ｸ':
				return "ｸ";
			case 'け':
			case 'ケ':
			case 'ｹ':
				return "ｹ";
			case 'こ':
			case 'コ':
			case 'ｺ':
				return "ｺ";
			case 'さ':
			case 'サ':
			case 'ｻ':
				return "ｻ";
			case 'し':
			case 'シ':
			case 'ｼ':
				return "ｼ";
			case 'す':
			case 'ス':
			case 'ｽ':
				return "ｽ";
			case 'せ':
			case 'セ':
			case 'ｾ':
				return "ｾ";
			case 'そ':
			case 'ソ':
			case 'ｿ':
				return "ｿ";
			case 'た':
			case 'タ':
			case 'ﾀ':
				return "ﾀ";
			case 'ち':
			case 'チ':
			case 'ﾁ':
				return "ﾁ";
			case 'つ':
			case 'っ':
			case 'ツ':
			case 'ッ':
			case 'ﾂ':
			case 'ｯ':
				return "ﾂ";
			case 'て':
			case 'テ':
			case 'ﾃ':
				return "ﾃ";
			case 'と':
			case 'ト':
			case 'ﾄ':
				return "ﾄ";
			case 'な':
			case 'ナ':
			case 'ﾅ':
				return "ﾅ";
			case 'に':
			case 'ニ':
			case 'ﾆ':
				return "ﾆ";
			case 'ぬ':
			case 'ヌ':
			case 'ﾇ':
				return "ﾇ";
			case 'ね':
			case 'ネ':
			case 'ﾈ':
				return "ﾈ";
			case 'の':
			case 'ノ':
			case 'ﾉ':
				return "ﾉ";
			case 'は':
			case 'ハ':
			case 'ﾊ':
				return "ﾊ";
			case 'ひ':
			case 'ヒ':
			case 'ﾋ':
				return "ﾋ";
			case 'ふ':
			case 'フ':
			case 'ﾌ':
				return "ﾌ";
			case 'へ':
			case 'ヘ':
			case 'ﾍ':
				return "ﾍ";
			case 'ほ':
			case 'ホ':
			case 'ﾎ':
				return "ﾎ";
			case 'ま':
			case 'マ':
			case 'ﾏ':
				return "ﾏ";
			case 'み':
			case 'ミ':
			case 'ﾐ':
				return "ﾐ";
			case 'む':
			case 'ム':
			case 'ﾑ':
				return "ﾑ";
			case 'め':
			case 'メ':
			case 'ﾒ':
				return "ﾒ";
			case 'も':
			case 'モ':
			case 'ﾓ':
				return "ﾓ";
			case 'や':
			case 'ゃ':
			case 'ヤ':
			case 'ャ':
			case 'ｬ':
			case 'ﾔ':
				return "ﾔ";
			case 'ゆ':
			case 'ゅ':
			case 'ユ':
			case 'ュ':
			case 'ｭ':
			case 'ﾕ':
				return "ﾕ";
			case 'よ':
			case 'ょ':
			case 'ヨ':
			case 'ョ':
			case 'ｮ':
			case 'ﾖ':
				return "ﾖ";
			case 'ら':
			case 'ラ':
			case 'ㇻ':
			case 'ﾗ':
				return "ﾗ";
			case 'り':
			case 'リ':
			case 'ㇼ':
			case 'ﾘ':
				return "ﾘ";
			case 'る':
			case 'ル':
			case 'ㇽ':
			case 'ﾙ':
				return "ﾙ";
			case 'れ':
			case 'レ':
			case 'ﾚ':
				return "ﾚ";
			case 'ろ':
			case 'ロ':
			case 'ﾛ':
				return "ﾛ";
			case 'わ':
			case 'ゎ':
			case 'ワ':
			case 'ﾜ':
			case 'ヮ':
				return "ﾜ";
			case 'を':
			case 'ヲ':
			case 'ｦ':
				return "ｦ";
			case 'ん':
			case 'ン':
			case 'ﾝ':
				return "ﾝ";
			case 'が':
			case 'ガ':
			case 'ｶﾞ':
				return "ｶﾞ";
			case 'ヴ':
			case 'ｳﾞ':
				return "ｳﾞ";
			case 'ぎ':
			case 'ギ':
			case 'ｷﾞ':
				return "ｷﾞ";
			case 'ぐ':
			case 'グ':
			case 'ｸﾞ':
				return "ｸﾞ";
			case 'げ':
			case 'ゲ':
			case 'ｹﾞ':
				return "ｹﾞ";
			case 'ご':
			case 'ゴ':
			case 'ｺﾞ':
				return "ｺﾞ";
			case 'ざ':
			case 'ザ':
			case 'ｻﾞ':
				return "ｻﾞ";
			case 'じ':
			case 'ジ':
			case 'ｼﾞ':
				return "ｼﾞ";
			case 'ず':
			case 'ズ':
			case 'ｽﾞ':
				return "ｽﾞ";
			case 'ぜ':
			case 'ゼ':
			case 'ｾﾞ':
				return "ｾﾞ";
			case 'ぞ':
			case 'ゾ':
			case 'ｿﾞ':
				return "ｿﾞ";
			case 'だ':
			case 'ダ':
			case 'ﾀﾞ':
				return "ﾀﾞ";
			case 'ぢ':
			case 'ヂ':
			case 'ﾁﾞ':
				return "ﾁﾞ";
			case 'づ':
			case 'ヅ':
			case 'ﾂﾞ':
				return "ﾂﾞ";
			case 'で':
			case 'デ':
			case 'ﾃﾞ':
				return "ﾃﾞ";
			case 'ど':
			case 'ド':
			case 'ﾄﾞ':
				return "ﾄﾞ";
			case 'ば':
			case 'バ':
			case 'ﾊﾞ':
				return "ﾊﾞ";
			case 'び':
			case 'ビ':
			case 'ﾋﾞ':
				return "ﾋﾞ";
			case 'ぶ':
			case 'ブ':
			case 'ﾌﾞ':
				return "ﾌﾞ";
			case 'べ':
			case 'ベ':
			case 'ﾍﾞ':
				return "ﾍﾞ";
			case 'ぼ':
			case 'ボ':
			case 'ﾎﾞ':
				return "ﾎﾞ";
			case 'ぱ':
			case 'パ':
			case 'ﾊﾟ':
				return "ﾊﾟ";
			case 'ぴ':
			case 'ピ':
			case 'ﾋﾟ':
				return "ﾋﾟ";
			case 'ぷ':
			case 'プ':
			case 'ﾌﾟ':
				return "ﾌﾟ";
			case 'ぺ':
			case 'ペ':
			case 'ﾍﾟ':
				return "ﾍﾟ";
			case 'ぽ':
			case 'ポ':
			case 'ﾎﾟ':
				return "ﾎﾟ";
			case 'ﾞ':
				return "ﾞ";
			case 'ﾟ':
				return "ﾟ";
			case '　':
			case ' ':
				return "";
			case '（':
			case '(':
				return "(";
			case '）':
			case ')':
				return ")";
			case '－':
			case 'ー':
			case '―':
			case '‐':
			case '-':
			case 'ｰ':
				return "ｰ";
			default:
			return null
		}
	}
}

export default kana