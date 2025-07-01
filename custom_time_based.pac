function FindProxyForURL(url, host) {
  var now = new Date();
  var hour = now.getHours();
  var minute = now.getMinutes();

  if (dnsDomainIs(host, "my-cloudflare-pages-o2p.pages.dev")) {
    if (hour === 14 && minute >= 15 && minute < 45) {
      return "DIRECT"; // 指定時間だけバイパス
    }
    return "PROXY ${ZAPP_TUNNEL2}";
  }
  return "PROXY ${ZAPP_TUNNEL2}";
}
