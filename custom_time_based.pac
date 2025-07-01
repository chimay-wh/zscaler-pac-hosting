function FindProxyForURL(url, host) {
  var now = new Date();
  var hour = now.getHours();
  var minute = now.getMinutes();

  if (dnsDomainIs(host, "*.hatenablog.*")) {
    if (hour === 16 && minute >= 10 && minute < 15) {
      return "DIRECT"; // 指定時間だけバイパス
    }
    return "PROXY ${ZAPP_TUNNEL2}";
  }
  return "PROXY ${ZAPP_TUNNEL2}";
}
