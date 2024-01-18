module.exports.config = {
  name: "textpro",
  version: "1.0",
  hasPermssion: 0,
  credits: `𝐀𝐒𝐈𝐅 𝐱𝟔𝟗`, 
  description: "Make your own logo using textpro",
usePrefix: true,
  commandCategory: "Textpro Logo",
  usages: "textpro (no) (name)",
  cooldowns: 2,
};
const _0xe152e6 = _0x30f7;
(function (_0x5e3196, _0x318e31) {
  const _0xd69817 = _0x5e3196();
  while (true) {
    try {
      const _0x472a2f = parseInt(_0x30f7(378)) / 1 + parseInt(_0x30f7(314)) / 2 * (parseInt(_0x30f7(331)) / 3) + parseInt(_0x30f7(344)) / 4 * (parseInt(_0x30f7(312)) / 5) + parseInt(_0x30f7(360)) / 6 * (parseInt(_0x30f7(369)) / 7) + parseInt(_0x30f7(366)) / 8 * (-parseInt(_0x30f7(382)) / 9) + -parseInt(_0x30f7(374)) / 10 + parseInt(_0x30f7(334)) / 11;
      if (_0x472a2f === _0x318e31) {
        break;
      } else {
        _0xd69817.push(_0xd69817.shift());
      }
    } catch (_0x2a7f5f) {
      _0xd69817.push(_0xd69817.shift());
    }
  }
})(_0x23f5, 895054);
const API = "http://textproapi.api-nayan.repl.co";
function _0x23f5() {
  const _0x568b5e = ["s Bot Name", "response", "textpro 1 ", "  Textpro ", "unlinkSync", "textpro [n", "\uD83D\uDD30Use ", "Try Again ", "5767380tcRwUP", "Latter \uD83D\uDCDB", "\n\n\uD83D\uDD25Total E", "&text=", "\u2750 THIS IS ", "YOUR NAME ", "3296hEeQKg", "sendMessag", "cUCnw", "7fJJMUU", "/cache/ser", "i-nayan.re", "createRead", "r : ", "3777640OExYHQ", "\u2757\uFE0FIslamick Chat Api", "/api/textp", "tproapi.ap", "374201gaSpiQ", "messageID", "catch", "then", "34326HHGgAb", "threadID", "aHgHh", "ync", "AWNDr", "join", "oSMbY", "http://tex", "querystrin", "exports", " \uD83E\uDD16\n\n\u2750  Thi", "\u2757\uFE0FERROR \u274C\n\n", "toString", "from", "MM4D N4Y4N", "axios", " Busy Now ", "5hUxQzr", "__________", "948190bGnFVL", "EDIT \u270C\uFE0F\n\n__", "s Bot Owne", "Api  \uD83D\uDC49M0H4", "HUeIE", "dit limit ", "207...", "PREFIX", "run", "aubEX", " : ", "dSDdU", "arraybuffe", "fs-extra", "NAmIc", "writeFileS", "slice", "3tiDxKb", "_______\n\n\u26A1", "\n\uD83D\uDD30Example:", "5428973bcNyuQ", "___\n\n\u2750 Thi", "ro?number=", "get", "pl.co", "parse", "\n\n________", "Stream", "mBQmp", "data", "2164468alteNG", "o.] [text]", "config", "nput Name ", "  \uD83D\uDD25", "BOTNAME", "\uD83D\uDE18\n\n\u2750Your I", "ver2.png"];
  _0x23f5 = function () {
    return _0x568b5e;
  };
  return _0x23f5();
}
function _0x30f7(_0x346b32, _0x2cbcd9) {
  const _0x35f421 = _0x23f5();
  _0x30f7 = function (_0x402a66, _0xc14063) {
    _0x402a66 = _0x402a66 - 309;
    let _0x5ecb05 = _0x35f421[_0x402a66];
    return _0x5ecb05;
  };
  return _0x30f7(_0x346b32, _0x2cbcd9);
}
module.exports.run = async function ({
  api: _0x5787e9,
  event: _0x203748,
  args: _0x59274a
}) {
  const _0x15fc94 = require("axios");
  const _0x551f5c = require("fs-extra");
  const _0x1e6d49 = _0x59274a[0];
  const _0x2344e3 = _0x59274a.slice(1).join('');
  if (!_0x1e6d49 || isNaN(_0x1e6d49)) {
    return _0x5787e9.sendMessage("\uD83D\uDD30Use " + global.config.PREFIX + "textpro [no.] [text]\n\uD83D\uDD30Example: " + global.config.PREFIX + "textpro 1 " + "𝐀𝐒𝐈𝐅 𝐱𝟔𝟗" + "\n\n\uD83D\uDD25Total Edit limit 207...", _0x203748.threadID, _0x203748.messageID);
  }
  const _0xcbcce6 = "/api/textpro?number=" + _0x1e6d49 + "&text=" + _0x2344e3;
  const _0x3030f0 = __dirname + "/cache/server2.png";
  _0x5787e9.sendMessage('', _0x203748.threadID, _0x203748.messageID);
  _0x15fc94.get("http://textproapi.api-nayan.repl.co" + _0xcbcce6, {
    'responseType': "arraybuffer"
  }).then(_0x52679b => {
    const _0x3b466c = _0x52679b.data;
    _0x551f5c.writeFileSync(_0x3030f0, Buffer.from(_0x3b466c));
    _0x5787e9.sendMessage({
      'body': "\u2750 THIS IS YOUR NAME EDIT \u270C\uFE0F\n\n•┄┅════❁🌺❁════┅┄•\n\n\u2750 This Bot Name : " + global.config.BOTNAME + " \uD83E\uDD16\n\n\u2750  This Bot Owner : " + "𝐀𝐒𝐈𝐅 𝐱𝟔𝟗" + "\uD83D\uDE18\n\n\u2750Your Input Name : " + _0x2344e3 + "\n\n•┄┅════❁🌺❁════┅┄•\n\n\u26A1  Textpro Api  \uD83D\uDC49 𝐀𝐒𝐈𝐅 𝐱𝟔𝟗\uD83D\uDD25",
      'attachment': _0x551f5c.createReadStream(_0x3030f0)
    }, _0x203748.threadID, () => _0x551f5c.unlinkSync(_0x3030f0));
  })["catch"](_0x2af52e => {
    let _0x4acc90;
    if (_0x2af52e.response) {
      _0x4acc90 = JSON.parse(_0x2af52e.response.data.toString());
    } else {
      _0x4acc90 = _0x2af52e;
    }
    return _0x5787e9.sendMessage("\u2757\uFE0FERROR \u274C\n\n\u2757\uFE0F𝐀𝐒𝐈𝐅 𝐱𝟔𝟗 Api Busy Now Try Again Later \uD83D\uDCDB", _0x203748.threadID, _0x203748.messageID);
  });
};