(function(g){var window=this;var Q5=function(a,b){var c="ytp-miniplayer-button-bottom-right";var d=g.X?{D:"div",W:["ytp-icon","ytp-icon-expand-watch-page"]}:{D:"svg",N:{height:"18px",version:"1.1",viewBox:"0 0 22 18",width:"22px"},K:[{D:"g",N:{fill:"none","fill-rule":"evenodd",stroke:"none","stroke-width":"1"},K:[{D:"g",N:{transform:"translate(-1.000000, -3.000000)"},K:[{D:"polygon",N:{points:"0 0 24 0 24 24 0 24"}},{D:"path",N:{d:"M19,7 L5,7 L5,17 L19,17 L19,7 Z M23,19 L23,4.98 C23,3.88 22.1,3 21,3 L3,3 C1.9,3 1,3.88 1,4.98 L1,19 C1,20.1 1.9,21 3,21 L21,21 C22.1,21 23,20.1 23,19 Z M21,19.02 L3,19.02 L3,4.97 L21,4.97 L21,19.02 Z",
fill:"#fff","fill-rule":"nonzero"}}]}]}]};var e="Open video page";g.R(a.P().experiments,"kevlar_miniplayer_expand_top")&&(c="ytp-miniplayer-button-top-left",d=g.X?{D:"div",W:["ytp-icon","ytp-icon-expand-miniplayer"]}:{D:"svg",N:{height:"24px",version:"1.1",viewBox:"0 0 24 24",width:"24px"},K:[{D:"g",N:{fill:"none","fill-rule":"evenodd",stroke:"none","stroke-width":"1"},K:[{D:"g",N:{transform:"translate(12.000000, 12.000000) scale(-1, 1) translate(-12.000000, -12.000000) "},K:[{D:"path",N:{d:"M19,19 L5,19 L5,5 L12,5 L12,3 L5,3 C3.89,3 3,3.9 3,5 L3,19 C3,20.1 3.89,21 5,21 L19,21 C20.1,21 21,20.1 21,19 L21,12 L19,12 L19,19 Z M14,3 L14,5 L17.59,5 L7.76,14.83 L9.17,16.24 L19,6.41 L19,10 L21,10 L21,3 L14,3 Z",
fill:"#fff","fill-rule":"nonzero"}}]}]}]},e="Expand");g.V.call(this,{D:"button",W:["ytp-miniplayer-expand-watch-page-button","ytp-button",c],N:{title:"{{title}}","data-tooltip-target-id":"ytp-miniplayer-expand-watch-page-button"},K:[d]});this.u=a;this.ga("click",this.w,this);this.ha("title",g.lM(a,e,"i"));g.be(this,g.wM(b.Wa(),this.element))},R5=function(a){g.V.call(this,{D:"div",
I:"ytp-miniplayer-ui"});this.player=a;this.H=!1;this.G=this.B=this.u=void 0;this.L(a,"minimized",this.cH);this.L(a,"onStateChange",this.NN)},S5=function(a){g.UO.call(this,a);
this.o=new R5(this.player);this.o.hide();g.aL(this.player,this.o.element,4);a.app.H.o&&(this.load(),g.L(g.HK(a),"ytp-player-minimized",!0))};
g.r(Q5,g.V);Q5.prototype.w=function(){this.u.la("onExpandMiniplayer")};g.r(R5,g.V);g.h=R5.prototype;
g.h.show=function(){this.u=new g.Rm(this.bH,null,this);this.u.start();if(!this.H){this.C=new g.nQ(this.player,this);g.C(this,this.C);g.aL(this.player,this.C.element,4);this.C.B=.6;this.S=new g.nP(this.player);g.C(this,this.S);this.w=new g.V({D:"div",I:"ytp-miniplayer-scrim"});g.C(this,this.w);this.w.ba(this.element);this.L(this.w.element,"click",this.Jz);var a=new g.V({D:"button",W:["ytp-miniplayer-close-button","ytp-button"],N:{"aria-label":"Close"},K:[g.DL()]});g.C(this,a);a.ba(this.w.element);
this.L(a.element,"click",this.gy);a=new Q5(this.player,this);g.C(this,a);a.ba(this.w.element);this.A=new g.V({D:"div",I:"ytp-miniplayer-controls"});g.C(this,this.A);this.A.ba(this.w.element);this.L(this.A.element,"click",this.Jz);var b=new g.V({D:"div",I:"ytp-miniplayer-button-container"});g.C(this,b);b.ba(this.A.element);a=new g.V({D:"div",I:"ytp-miniplayer-play-button-container"});g.C(this,a);a.ba(this.A.element);var c=new g.V({D:"div",I:"ytp-miniplayer-button-container"});g.C(this,c);c.ba(this.A.element);
this.O=new g.dN(this.player,this,!1);g.C(this,this.O);this.O.ba(b.element);b=new g.$M(this.player,this);g.C(this,b);b.ba(a.element);this.J=new g.dN(this.player,this,!0);g.C(this,this.J);this.J.ba(c.element);this.G=new g.AO(this.player,this);g.C(this,this.G);this.G.ba(this.w.element);this.B=new g.mN(this.player,this);g.C(this,this.B);g.aL(this.player,this.B.element,4);this.F=new g.V({D:"div",I:"ytp-miniplayer-buttons"});g.C(this,this.F);g.aL(this.player,this.F.element,4);a=new g.V({D:"button",W:["ytp-miniplayer-close-button",
"ytp-button"],N:{"aria-label":"Close"},K:[g.DL()]});g.C(this,a);a.ba(this.F.element);this.L(a.element,"click",this.gy);a=new g.V({D:"button",W:["ytp-miniplayer-replay-button","ytp-button"],N:{"aria-label":"Close"},K:[g.SL()]});g.C(this,a);a.ba(this.F.element);this.L(a.element,"click",this.JL);this.L(this.player,"presentingplayerstatechange",this.dH);this.L(this.player,"appresize",this.Jr);this.L(this.player,"fullscreentoggled",this.Jr);this.Jr();this.H=!0}0!=this.player.getPlayerState()&&g.V.prototype.show.call(this);
this.B.show();this.player.unloadModule("annotations_module")};
g.h.hide=function(){this.u&&(this.u.dispose(),this.u=void 0);g.V.prototype.hide.call(this);this.player.app.H.o||(this.H&&this.B.hide(),this.player.loadModule("annotations_module"))};
g.h.X=function(){this.u&&(this.u.dispose(),this.u=void 0);g.V.prototype.X.call(this)};
g.h.gy=function(){this.player.stopVideo();this.player.la("onCloseMiniplayer")};
g.h.JL=function(){this.player.playVideo()};
g.h.Jz=function(a){if(a.target==this.w.element||a.target==this.A.element)g.R(this.player.P().experiments,"kevlar_miniplayer_play_pause_on_scrim")?g.vD(g.JK(this.player))?this.player.pauseVideo():this.player.playVideo():this.player.la("onExpandMiniplayer")};
g.h.cH=function(){g.L(g.HK(this.player),"ytp-player-minimized",this.player.app.H.o)};
g.h.bH=function(){g.oN(this.B);this.G.w();this.u&&this.u.start()};
g.h.dH=function(a){g.W(a.state,32)&&this.C.hide()};
g.h.Jr=function(){var a=this.B,b=g.GK(this.player).getPlayerSize().width;a.za=0;a.B=b;a.F=!1;g.qN(a)};
g.h.NN=function(a){this.player.app.H.o&&(0==a?this.hide():this.show())};
g.h.Wa=function(){return this.C};
g.h.Xb=function(){return!1};
g.h.Wd=function(){return!1};
g.h.Ii=function(){return!1};
g.h.nt=function(){};
g.h.ih=function(){};
g.h.Qj=function(){};
g.h.Jk=function(){return null};
g.h.Ir=function(){return new g.eh(0,0,0,0)};
g.h.handleGlobalKeyDown=function(){return!1};
g.h.handleGlobalKeyUp=function(){return!1};
g.h.ej=function(a,b,c,d,e){var f=0,k=d=0,l=g.Ah(a);if(b){c=g.dn(b,"ytp-prev-button")||g.dn(b,"ytp-next-button");var m=g.dn(b,"ytp-play-button"),n=g.dn(b,"ytp-miniplayer-expand-watch-page-button");c?f=k=12:m?(b=g.xh(b,this.element),k=b.x,f=b.y-12):n&&(k=g.dn(b,"ytp-miniplayer-button-top-left"),f=g.xh(b,this.element),b=g.Ah(b),k?(k=8,f=f.y+40):(k=f.x-l.width+b.width,f=f.y-20))}else k=c-l.width/2,d=25+(e||0);b=g.GK(this.player).getPlayerSize().width;e=f+(e||0);l=g.id(k,0,b-l.width);e?(a.style.top=e+
"px",a.style.bottom=""):(a.style.top="",a.style.bottom=d+"px");a.style.left=l+"px"};
g.h.showControls=function(){};
g.h.Kr=function(){};
g.h.Gf=function(){};g.r(S5,g.UO);S5.prototype.create=function(){};
S5.prototype.lf=function(){return!1};
S5.prototype.load=function(){this.player.hideControls();this.o.show()};
S5.prototype.unload=function(){this.player.showControls();this.o.hide()};g.iP.miniplayer=S5;})(_yt_player);
