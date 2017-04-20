//var proxy = "PROXY 你的 ip地址:25;";
var proxy = "PROXY 127.0.0.1:1080;";
var hasOwnProperty = Object.hasOwnProperty;

function FindProxyForURL(url, host) {
                return proxy;
}
