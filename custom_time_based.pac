function FindProxyForURL(url, host) {
  var now = new Date();
  var hour = now.getHours();
  var minute = now.getMinutes();

  if (dnsDomainIs(host, "chimay-wh.hatenablog.com")) {
    if (hour === 14 && minute >= 50 && minute < 55) {
      return "DIRECT"; // 指定時間だけバイパス
    }
    return "PROXY ${ZAPP_TUNNEL2}";
  }
  return "PROXY ${ZAPP_TUNNEL2}";
}
