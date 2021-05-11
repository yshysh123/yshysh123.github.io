/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "f5014f99906dbcf2013804301737b97e"
  },
  {
    "url": "about/index.html",
    "revision": "b9f641749c1104dd409f96289aebc541"
  },
  {
    "url": "algorithm/index.html",
    "revision": "86bd34ec1cc645b68b99599fc715af5e"
  },
  {
    "url": "algorithm/动态规划.html",
    "revision": "06305ab7091a147d2324f175fcc888c3"
  },
  {
    "url": "algorithm/回溯.html",
    "revision": "085929b1b4b7c1254b8046e30595dd8b"
  },
  {
    "url": "algorithm/字符串.html",
    "revision": "26f12fbe7e4f82c1913f514b34414a95"
  },
  {
    "url": "algorithm/数组.html",
    "revision": "d4a72bb6f7d243664f32ed284564ee65"
  },
  {
    "url": "algorithm/树.html",
    "revision": "3a65a4edcb3100d4622de20ccde00c1e"
  },
  {
    "url": "algorithm/贪心.html",
    "revision": "9e36ecdab52e6ff274b6fbaf3c8a711d"
  },
  {
    "url": "algorithm/链表.html",
    "revision": "0393ae1ffdc3c5249294db87c4fde5ec"
  },
  {
    "url": "assets/css/0.styles.68df58ae.css",
    "revision": "2ad78c3d4ab5bf6c74d334a5cc33bb16"
  },
  {
    "url": "assets/img/babel.a9766316.png",
    "revision": "a97663162a89cca23628607f1474e051"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/img/mobx.8dd180e2.png",
    "revision": "8dd180e21ab8be96330ca2ea0f8e507c"
  },
  {
    "url": "assets/img/mulu.2071a4ec.png",
    "revision": "2071a4ecdd6cca837d458296cf96f6c5"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/testPyramid.32b606f8.jpg",
    "revision": "32b606f8bbf1528cc868d7b5be7e16cd"
  },
  {
    "url": "assets/img/vue.8a6d7078.png",
    "revision": "8a6d70784ddf1330897261c34c3b7e13"
  },
  {
    "url": "assets/img/vue.ee7e8e35.png",
    "revision": "ee7e8e353ea3ca1a853fe933ab9987f0"
  },
  {
    "url": "assets/js/1.24c2df04.js",
    "revision": "f8b431383fe83690b939f6c8d9fb8806"
  },
  {
    "url": "assets/js/10.b6dccde6.js",
    "revision": "f0f84fa5affa2a1d77fd9f8b424c6db1"
  },
  {
    "url": "assets/js/11.74dcf060.js",
    "revision": "acb4ad4ef3151542a2d4fb17ee7739e3"
  },
  {
    "url": "assets/js/12.b71c4a1a.js",
    "revision": "f89638c6840a64da8d1191bfb5f4af3e"
  },
  {
    "url": "assets/js/13.e348d5a9.js",
    "revision": "8257d818d2d23f51ee65258fecc1a646"
  },
  {
    "url": "assets/js/14.8be279f6.js",
    "revision": "8ab5725cfc21245ec1a615b46af8910d"
  },
  {
    "url": "assets/js/15.8dcf05e7.js",
    "revision": "b008c77b23412d3f96e87a3f7d3ebc23"
  },
  {
    "url": "assets/js/16.d1eb4cfa.js",
    "revision": "b19d8361ddc41db4115f3082ef7d1c77"
  },
  {
    "url": "assets/js/17.4e7527b6.js",
    "revision": "2a37b2beff4839a209a281ca57c99625"
  },
  {
    "url": "assets/js/18.a32a440a.js",
    "revision": "99315a381ea231f1344411344e22907b"
  },
  {
    "url": "assets/js/19.4dfcc64b.js",
    "revision": "e1f56c9bf387ee9668fabc63b8c451e6"
  },
  {
    "url": "assets/js/20.3d69dfed.js",
    "revision": "ba70dffb35e492200e07ab83a2324543"
  },
  {
    "url": "assets/js/21.0ab54938.js",
    "revision": "ba9237b5b1c6f5ec46702a4b202d2d4a"
  },
  {
    "url": "assets/js/22.21a28097.js",
    "revision": "ec45e8d1e901c40b3a6b109028d99376"
  },
  {
    "url": "assets/js/23.b38b1633.js",
    "revision": "47ef768a3a20b9d19b1f3b1e7c87ae5b"
  },
  {
    "url": "assets/js/24.3daa16b3.js",
    "revision": "53c17905552cb5fa450151510455263b"
  },
  {
    "url": "assets/js/25.f361dda2.js",
    "revision": "1a26889982f28c6f6153b98a0cd3a91c"
  },
  {
    "url": "assets/js/26.358c51df.js",
    "revision": "bc1242852698762bf7524a57c0361654"
  },
  {
    "url": "assets/js/27.17391b8b.js",
    "revision": "dbe56179a2e9fdfa01ebf24756abadae"
  },
  {
    "url": "assets/js/28.17f1bfe7.js",
    "revision": "2f58e0b5b3dff36d08578da0ec0fc5c9"
  },
  {
    "url": "assets/js/29.ce9bb996.js",
    "revision": "fe6a9aef12f968ad5d7c4f21ad1de952"
  },
  {
    "url": "assets/js/3.44a36a04.js",
    "revision": "e1256a65a2ecf0749dfb2b4e585081d3"
  },
  {
    "url": "assets/js/30.0ac54006.js",
    "revision": "537c34e30f08ca5b39ffaf6132672736"
  },
  {
    "url": "assets/js/31.d0d78c74.js",
    "revision": "f66765e1d3843fd964c0e37b24b3cc94"
  },
  {
    "url": "assets/js/32.9bc0a52f.js",
    "revision": "2ed0593b34b69ec6a6e85902f6b7aa9d"
  },
  {
    "url": "assets/js/33.a6e768ec.js",
    "revision": "518532deaaf516e656107c6f5b4405fe"
  },
  {
    "url": "assets/js/34.bda0d72c.js",
    "revision": "11c3b2598b9ef0e43c250b3160d8e62b"
  },
  {
    "url": "assets/js/35.b93ee360.js",
    "revision": "57dae4b9c8a0cd0fdda6cb20dd73fa05"
  },
  {
    "url": "assets/js/36.792fa6fa.js",
    "revision": "d659c32e641a194a80388f7233bec3b8"
  },
  {
    "url": "assets/js/37.f2912fa4.js",
    "revision": "13fa614d7e3b3568f80914970dc48027"
  },
  {
    "url": "assets/js/38.3987166a.js",
    "revision": "c02c61eda441d2050507a2fa4300c942"
  },
  {
    "url": "assets/js/39.f8aabaa8.js",
    "revision": "6d3e0b653dadc809837f6f87f6293d13"
  },
  {
    "url": "assets/js/4.85a3213d.js",
    "revision": "e78e45bbdc4b8096269d23d182d4cdbd"
  },
  {
    "url": "assets/js/40.f062477f.js",
    "revision": "d136d79287f15dd8a3422d86a61f1eb4"
  },
  {
    "url": "assets/js/41.438a290d.js",
    "revision": "defae3d49e36c32f18aff15bbc653fa9"
  },
  {
    "url": "assets/js/42.aa480228.js",
    "revision": "e6288f0d6774f869321a829a4a3f953a"
  },
  {
    "url": "assets/js/43.8d645356.js",
    "revision": "f9077808f51dbcc22c158c7e7f23b601"
  },
  {
    "url": "assets/js/44.557796e0.js",
    "revision": "c0d35942c43b2362fadc502b2e6dc5c1"
  },
  {
    "url": "assets/js/45.ee96b0f9.js",
    "revision": "b86553258c8d4f32e4a14e5f9454730c"
  },
  {
    "url": "assets/js/46.f5de70e9.js",
    "revision": "0dafe16c76869b114cb331bd14c55f8c"
  },
  {
    "url": "assets/js/47.c23683d3.js",
    "revision": "9fb152db529387d41a578208bd0b69a4"
  },
  {
    "url": "assets/js/48.9e41c427.js",
    "revision": "e6703712239d8c42eedc04a7fa6d1e5b"
  },
  {
    "url": "assets/js/49.63e0bca4.js",
    "revision": "f246d9c89e54e8687d5c6148a186f9b7"
  },
  {
    "url": "assets/js/5.a7d20fa2.js",
    "revision": "cc40588a9b132e25ca0a26ab1987746b"
  },
  {
    "url": "assets/js/50.0e21fbbb.js",
    "revision": "7f100ca708746ff69548aafc62f4d6da"
  },
  {
    "url": "assets/js/51.e4ea4365.js",
    "revision": "930570e9ad1694f1824556ea59086854"
  },
  {
    "url": "assets/js/52.0c877828.js",
    "revision": "06951aff3b15227dcb379001455e04e6"
  },
  {
    "url": "assets/js/53.01fcca10.js",
    "revision": "7f1a7721558098578286620d64a010bd"
  },
  {
    "url": "assets/js/54.4ce292ec.js",
    "revision": "dbd7b8d1b77ef904327c540b2983f0d1"
  },
  {
    "url": "assets/js/55.63248268.js",
    "revision": "558080914d9fb5c5ec76a3952faa3a61"
  },
  {
    "url": "assets/js/56.d8a8884b.js",
    "revision": "73a36b9bfb2d596ab0df7192b5d7dff0"
  },
  {
    "url": "assets/js/57.b35f7bb6.js",
    "revision": "bb1de727fff80fd6f18ee92fe3a176bd"
  },
  {
    "url": "assets/js/58.26d702e5.js",
    "revision": "49c655c6d0afb0a5d49e1be9a9d92e9b"
  },
  {
    "url": "assets/js/59.c83e84ca.js",
    "revision": "34db00c70a4645736b4673aed4bdcdcf"
  },
  {
    "url": "assets/js/6.a02e4fe6.js",
    "revision": "41801bdf9af75e68395cb83240a8c139"
  },
  {
    "url": "assets/js/60.4c2d9b26.js",
    "revision": "072d76cf4a2944111470ac5d546ddeb0"
  },
  {
    "url": "assets/js/61.6bffb60a.js",
    "revision": "c5e30b4cfb4bab90f638b1287a576882"
  },
  {
    "url": "assets/js/62.1f1fb6ea.js",
    "revision": "8fef6522fe468896c6c1327adfb74810"
  },
  {
    "url": "assets/js/7.1597128b.js",
    "revision": "80357ce90d8cf3d674218be6eadb0180"
  },
  {
    "url": "assets/js/8.f1bad46e.js",
    "revision": "ca3cddb462bcfe5195a256ecad3ff144"
  },
  {
    "url": "assets/js/9.efaed7c2.js",
    "revision": "fb032b456adbcd54c2ec8e7bbb089a24"
  },
  {
    "url": "assets/js/app.bd4c16e3.js",
    "revision": "b1bb0c14f168997a2509e64116fee553"
  },
  {
    "url": "bg.jpg",
    "revision": "6a16cbae1c518fdfaf0edf253c0f8a37"
  },
  {
    "url": "blogs/vuePress.html",
    "revision": "3e1474c59b67e59f57e22a5a66c9d6a3"
  },
  {
    "url": "blogs/如何编写高质量代码.html",
    "revision": "6ae330db8cc7387e76bd4d6f467bca85"
  },
  {
    "url": "blogs/如何进行一场面试.html",
    "revision": "e3757f6c3d4eeb619e57418224d63230"
  },
  {
    "url": "category/index.html",
    "revision": "324a4b231de3e9c4cd2e6c21d34f4cc0"
  },
  {
    "url": "category/jsoc.html",
    "revision": "7c97a6c8cb29428f19ea01a696f4c3dc"
  },
  {
    "url": "category/learn.html",
    "revision": "4487fda67c43d5e50d99efa294aa0b99"
  },
  {
    "url": "category/Nginx 学习笔记.html",
    "revision": "cd51d58b27c1f17e0acc55e723d5dfbf"
  },
  {
    "url": "category/React 学习笔记.html",
    "revision": "47d6b36a3b6a26540992da0ef209b929"
  },
  {
    "url": "category/Vue学习汇总.html",
    "revision": "45ca704121566961adb7a798fe2b996a"
  },
  {
    "url": "category/数据结构.html",
    "revision": "de9cf7979b54245fad315ed616313f22"
  },
  {
    "url": "category/算法&数据结构.html",
    "revision": "12deeb4772dcd978b50c1c4d14b25d23"
  },
  {
    "url": "category/面试题汇总.html",
    "revision": "35d3861e62a585a2eefb49c9cf3c4eb3"
  },
  {
    "url": "dataStructure/栈.html",
    "revision": "bb9cf28fe4d4ce65e17179b88f9d3420"
  },
  {
    "url": "dataStructure/队列.html",
    "revision": "2b40a4ba94a950c3246b7e1938f66e7b"
  },
  {
    "url": "dataStructure/集合.html",
    "revision": "71a1304d380bde5004129eaa2ae9221f"
  },
  {
    "url": "index.html",
    "revision": "4e911edcf3e506f93012c7af753b86ed"
  },
  {
    "url": "Interview/algorithm.html",
    "revision": "0324c50de08f6235ce59ee1e5243cace"
  },
  {
    "url": "Interview/browser.html",
    "revision": "edfcbefe0b5658dda7a53f07481993c6"
  },
  {
    "url": "Interview/comparison.html",
    "revision": "e55e9c05a692a3df99d3f210c4aac620"
  },
  {
    "url": "Interview/DesignPatterns.html",
    "revision": "777432947122d10e889d39ecfe359a2a"
  },
  {
    "url": "Interview/error.html",
    "revision": "edfcbefe0b5658dda7a53f07481993c6"
  },
  {
    "url": "Interview/index.html",
    "revision": "47c1b0a902a8b4a92f2030a7c8086d84"
  },
  {
    "url": "Interview/tips.html",
    "revision": "edfcbefe0b5658dda7a53f07481993c6"
  },
  {
    "url": "Interview/继承.html",
    "revision": "937acdd47eaafa90a834317e4668226e"
  },
  {
    "url": "jsdoc/ast.html",
    "revision": "e1c0077a214d64c1e3365d0fa6c7369a"
  },
  {
    "url": "jsdoc/index.html",
    "revision": "f4956b85492a547f9c0f8e452017dd71"
  },
  {
    "url": "learn/2020-10-12.html",
    "revision": "55d5058e9f6af92e0156ccb0d5b1828f"
  },
  {
    "url": "learn/2020-10-14.html",
    "revision": "f0035b25be73a545059f477305f0495b"
  },
  {
    "url": "learn/2020-10-20.html",
    "revision": "0c0c1ce33c34d284e39a4cd7edca4feb"
  },
  {
    "url": "learn/2020-10-23.html",
    "revision": "83f2a67ad68fb352ce9956648930b8bd"
  },
  {
    "url": "learn/2020-10-26.html",
    "revision": "2ba0ef9e4eb3e4f517cc37626d546cba"
  },
  {
    "url": "learn/2020-11-03.html",
    "revision": "9ced42d3f0171efe2a3e2a53b4fe22a1"
  },
  {
    "url": "learn/2020-11-09.html",
    "revision": "f9229921f75d36db8cfce6eb325ca1d1"
  },
  {
    "url": "nginx/index.html",
    "revision": "a27c75854f54e622ee7b17977e06ed78"
  },
  {
    "url": "nginx/nginx介绍.html",
    "revision": "7c22613114981f1258c3a88e1c508d6d"
  },
  {
    "url": "nginx/nginx反向代理.html",
    "revision": "d195414fbe096c3d771787dfdf7142c2"
  },
  {
    "url": "nginx/nginx命令.html",
    "revision": "7a563177fd808e629630557841760e91"
  },
  {
    "url": "nginx/nginx常用配置.html",
    "revision": "62bcda876d631820ff92cce2aeca2d5e"
  },
  {
    "url": "nginx/nginx负载均衡.html",
    "revision": "1304f56b2295dcd61fe93577fd98ab4a"
  },
  {
    "url": "react/classnames.html",
    "revision": "31ff15e21b89ca453a06f364b9f1cdbd"
  },
  {
    "url": "react/fiber.html",
    "revision": "32a58688f8ee50f9468f07e3df2f525b"
  },
  {
    "url": "react/index.html",
    "revision": "c70f9cb258a3ba32491e2214ae330dae"
  },
  {
    "url": "react/propTypes.html",
    "revision": "8eb957872e0645cb5dd79f70df463a04"
  },
  {
    "url": "react/pwa.html",
    "revision": "61f730a36c09596b623a6da7d4b4f4be"
  },
  {
    "url": "react/react_comp.html",
    "revision": "aa30662c54029dcfee6dd7facd891130"
  },
  {
    "url": "react/react16-hooks.html",
    "revision": "603710f81ac0bda5c88cb3abfee73d9c"
  },
  {
    "url": "react/react生命周期.html",
    "revision": "c2617fc06fb0c9807f31746afbacf698"
  },
  {
    "url": "react/单元测试.html",
    "revision": "1046182922ca14b345ea01953a15d42d"
  },
  {
    "url": "tag/algorithm.html",
    "revision": "25c283635036d580f2173c1adf4b9e1c"
  },
  {
    "url": "tag/browser.html",
    "revision": "ba5393f26e7d027d6c76b0d49c30d5f8"
  },
  {
    "url": "tag/css.html",
    "revision": "4b50c2e22d5f939859d59dcceefd320b"
  },
  {
    "url": "tag/dataStructure.html",
    "revision": "8c491fe24ce232bb65196a5dd446338d"
  },
  {
    "url": "tag/index.html",
    "revision": "5a98003755820ce906bc4304accdc95d"
  },
  {
    "url": "tag/interview.html",
    "revision": "b1855ded99cf4e36a6fcc6801603bc59"
  },
  {
    "url": "tag/js.html",
    "revision": "670e7f9e8798b7056b25502c3a4b3f94"
  },
  {
    "url": "tag/nginx.html",
    "revision": "9ff5b24b295b257bb0d008c50459443c"
  },
  {
    "url": "tag/react.html",
    "revision": "0245059aba71e59ccdb3d0541ec5729b"
  },
  {
    "url": "tag/vue.html",
    "revision": "1d2b314af67bf12307a9003200187aa1"
  },
  {
    "url": "tag/vuepress.html",
    "revision": "ca361debf4b964b61f003a760305faf0"
  },
  {
    "url": "tag/单元测试.html",
    "revision": "e55835b853bb0ae5b3063b25d741e864"
  },
  {
    "url": "tag/工程化.html",
    "revision": "fbb39e57ac2dd4fb5748cb9a4ce51921"
  },
  {
    "url": "vue/index.html",
    "revision": "ef34c55521ce3110072e7eb44e24d353"
  },
  {
    "url": "vue/vue全局api.html",
    "revision": "75b7c20e50daf72fa2952ccab60a7856"
  },
  {
    "url": "vue/vue初始化.html",
    "revision": "29eed8fbf9fe678a73d5b319c463cc48"
  },
  {
    "url": "vue/vue响应式原理.html",
    "revision": "41af5af70b6edfaf3a94bd178d0f7ab6"
  },
  {
    "url": "vue/vue实例方法.html",
    "revision": "dbc660c7d0ccf7a4fb4aa7eae24fd3aa"
  },
  {
    "url": "vue/vue异步更新机制.html",
    "revision": "ce505a548587871cba6832c8be09f854"
  },
  {
    "url": "头像.png",
    "revision": "b55736c62a1c3d1f7ba1d27443a52c36"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
