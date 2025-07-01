function FindProxyForURL(url, host) {
  var now = new Date();
  var hour = now.getHours();
  var minute = now.getMinutes();

  if (dnsDomainIs(host, "chimay-wh.hatenablog.com")) {
    if (hour === 15 && minute >= 01 && minute < 03) {
      return "DIRECT"; // 指定時間だけバイパス
    }
    return "PROXY ${ZAPP_TUNNEL2}";
  }
  return "PROXY ${ZAPP_TUNNEL2}";
}
