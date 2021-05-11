(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{535:function(n,i,l){"use strict";l.r(i);var s=l(31),t=Object(s.a)({},(function(){var n=this,i=n.$createElement,l=n._self._c||i;return l("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[l("div",{staticClass:"custom-block tip"},[l("p",[n._v("nginx 常用命令汇总")])]),n._v(" "),l("h1",{attrs:{id:"nginx-常用命令汇总"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#nginx-常用命令汇总"}},[n._v("#")]),n._v(" nginx 常用命令汇总")]),n._v(" "),l("ul",[l("li",[n._v("start nginx\n"),l("ul",[l("li",[n._v("windows 下再对应 nginx 目录下")]),n._v(" "),l("li",[n._v("CMD 启动 nginx")])])]),n._v(" "),l("li",[n._v("ps aux | grep nginx\n"),l("ul",[l("li",[n._v("查看 nginx 是否启动")])])]),n._v(" "),l("li",[n._v("systemctl start nginx.service\n"),l("ul",[l("li",[n._v("从新启动 nginx")])])]),n._v(" "),l("li",[n._v("nginx -s quit\n"),l("ul",[l("li",[n._v("从容停止 nginx")])])]),n._v(" "),l("li",[n._v("nginx -s stop\n"),l("ul",[l("li",[n._v("立即停止 nginx")])])]),n._v(" "),l("li",[n._v("killall nginx\n"),l("ul",[l("li",[n._v("杀死 nginx 进程")])])]),n._v(" "),l("li",[n._v("systemctl stop nginx.service\n"),l("ul",[l("li",[n._v("systemctl 关闭 nginx 进程(linux 通用关闭 nginx 方法)")])])]),n._v(" "),l("li",[n._v("systemctl restart nginx.service\n"),l("ul",[l("li",[n._v("重启 nginx")])])]),n._v(" "),l("li",[n._v("nginx -s reload\n"),l("ul",[l("li",[n._v("重载配置文件")]),n._v(" "),l("li",[n._v("注：每次修改完.conf 文件就需要重启 nginx")])])]),n._v(" "),l("li",[n._v("nginx -t\n"),l("ul",[l("li",[n._v("检查配置")]),n._v(" "),l("li",[n._v("检查修改的 nginx.conf 配置是否正确")]),n._v(" "),l("li",[n._v("如果出现下面 ok 和 successfull 就代表正确了，其他的都不对"),l("div",{staticClass:"language-bash line-numbers-mode"},[l("pre",{pre:!0,attrs:{class:"language-bash"}},[l("code",[n._v("  nginx: the configuration "),l("span",{pre:!0,attrs:{class:"token function"}},[n._v("file")]),n._v(" /usr/local/etc/nginx/nginx.conf syntax is ok\n  nginx: configuration "),l("span",{pre:!0,attrs:{class:"token function"}},[n._v("file")]),n._v(" /usr/local/etc/nginx/nginx.conf "),l("span",{pre:!0,attrs:{class:"token builtin class-name"}},[n._v("test")]),n._v(" is successful\n")])]),n._v(" "),l("div",{staticClass:"line-numbers-wrapper"},[l("span",{staticClass:"line-number"},[n._v("1")]),l("br"),l("span",{staticClass:"line-number"},[n._v("2")]),l("br")])])])])]),n._v(" "),l("li",[n._v('tasklist /fi "imagename eq nginx.exe"\n'),l("ul",[l("li",[n._v("查看 nginx 项目内启动配置")]),n._v(" "),l("li",[n._v("如果出现：信息：没有运行的任务匹配指定标准 说明没有启动 nginx 配置")])])]),n._v(" "),l("li",[n._v("netstat -tlnp\n"),l("ul",[l("li",[n._v("查看哪些端口号被占用了")])])]),n._v(" "),l("li",[n._v("netstat -aon | findstr :80\n"),l("ul",[l("li",[n._v("查看某端口号是否被占用，如果 nginx 启动不起来，可能是端口号被占用导致。")])])])]),n._v(" "),l("Valine")],1)}),[],!1,null,null,null);i.default=t.exports}}]);