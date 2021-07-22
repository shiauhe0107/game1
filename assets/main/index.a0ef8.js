window.__require=function t(e,o,n){function c(r,a){if(!o[r]){if(!e[r]){var s=r.split("/");if(s=s[s.length-1],!e[s]){var p="function"==typeof __require&&__require;if(!a&&p)return p(s,!0);if(i)return i(s,!0);throw new Error("Cannot find module '"+r+"'")}r=s}var l=o[r]={exports:{}};e[r][0].call(l.exports,function(t){return c(e[r][1][t]||t)},l,l.exports,t,e,o,n)}return o[r].exports}for(var i="function"==typeof __require&&__require,r=0;r<n.length;r++)c(n[r]);return c}({collid:[function(t,e,o){"use strict";cc._RF.push(e,"301e58X9nhDGZoohi9QiWOM","collid");var n,c=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),i=this&&this.__decorate||function(t,e,o,n){var c,i=arguments.length,r=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,o,n);else for(var a=t.length-1;a>=0;a--)(c=t[a])&&(r=(i<3?c(r):i>3?c(e,o,r):c(e,o))||r);return i>3&&r&&Object.defineProperty(e,o,r),r};Object.defineProperty(o,"__esModule",{value:!0});var r=cc._decorator,a=r.ccclass,s=r.property,p=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.collidor=null,e}return c(e,t),e.prototype.onLoad=function(){cc.director.getPhysicsManager().enabled=!0,cc.director.getCollisionManager().enabled=!0,cc.director.getCollisionManager().enabledDebugDraw=!0},e.prototype.start=function(){},e.prototype.onBeginContact=function(){this.collidor.string="1"},i([s(cc.Label)],e.prototype,"collidor",void 0),i([a],e)}(cc.Component);o.default=p,cc._RF.pop()},{}],script:[function(t,e,o){"use strict";cc._RF.push(e,"4fa0bx3ciFPsYSXEr+a6cZR","script");var n,c=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),i=this&&this.__decorate||function(t,e,o,n){var c,i=arguments.length,r=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,o,n);else for(var a=t.length-1;a>=0;a--)(c=t[a])&&(r=(i<3?c(r):i>3?c(e,o,r):c(e,o))||r);return i>3&&r&&Object.defineProperty(e,o,r),r};Object.defineProperty(o,"__esModule",{value:!0});var r=cc._decorator,a=r.ccclass,s=r.property,p={},l=!1,u=!1,d=0,h=!0,y=!1,f=0,m=2,v=4,g=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.back1=null,e.back2=null,e.enemys=null,e.dina=null,e.rule=null,e.lab=null,e.power=null,e.collidor=null,e.over=null,e.jet=null,e.tank=null,e.yee=null,e.lose=null,e}return c(e,t),e.prototype.onLoad=function(){cc.systemEvent.on("keydown",this.onKeyDown,this),cc.systemEvent.on("keyup",this.onKeyup,this)},e.prototype.start=function(){this.back1.getComponent(cc.Animation).play(),this.back2.getComponent(cc.Animation).play(),this.dina.getComponent(cc.Animation).play(),cc.director.getScheduler().schedule(this.addpoint,this,.1,cc.macro.REPEAT_FOREVER,0,!1)},e.prototype.update=function(){if("1"==this.collidor.string&&0==y&&this.gameover(),h){if(y?f-=.11:f<=100&&(f+=.1),this.power.string="Energy:"+f.toFixed()+"%",this.getRandom(4e3)<v&&this.createEnemy(),this.lab.string="Score:"+d.toString(),p[cc.macro.KEY.a]&&(this.dina.x-=m),p[cc.macro.KEY.d]&&(this.dina.x+=m),p[cc.macro.KEY.w]&&(l||(this.createEnemy(),l=!0,this.dina.runAction(this.jumpAction()))),p[cc.macro.KEY.s]&&!u){u=!0,p[cc.macro.KEY.s]=0,this.dina.stopAllActions();var t=cc.moveTo(.1,cc.v2(this.dina.x,-265));this.dina.runAction(t),l=!1,u=!1}if(p[cc.macro.KEY.g]&&this.gameover(),p[cc.macro.KEY.space]&&f>5){var e=cc.director.getScheduler();m=20,f-=.2,e.schedule(this.stoprun,this,0,0,.1,!1)}p[cc.macro.KEY.b]&&(v=2e3),p[cc.macro.KEY.j]&&(f=100)}p[cc.macro.KEY.r]&&this.restart(),p[cc.macro.KEY.c]&&(this.rule.node.opacity=0),p[cc.macro.KEY.f]&&f>40&&this.befire()},e.prototype.stoprun=function(){m=2},e.prototype.onBeginContact=function(){console.log("onBeginContact")},e.prototype.befire=function(){y=!0,this.dina.scaleX=1.8,this.dina.getComponent(cc.Animation).play("fire run"),cc.director.getScheduler().schedule(this.benormal,this,0,0,3,!1)},e.prototype.benormal=function(){this.collidor.string="0",y=!1,this.dina.scaleX=1,this.dina.getComponent(cc.Animation).play("normal run")},e.prototype.addpoint=function(){d+=1},e.prototype.onKeyDown=function(t){p[t.keyCode]=1},e.prototype.onKeyup=function(t){p[t.keyCode]=0},e.prototype.jumpAction=function(){var t=cc.moveBy(.7,cc.v2(0,250)).easing(cc.easeSineOut()),e=cc.moveBy(.7,cc.v2(0,-250)).easing(cc.easeSineIn()),o=cc.callFunc(function(){l=!1},this,this);return cc.sequence(t,e,o)},e.prototype.createEnemy=function(){var t=null,e=this.getRandom(2);if(0==e){(t=cc.instantiate(this.jet)).parent=this.enemys.getChildByName("pool"),t.setPosition(600,-180+this.getRandom(50));var o=cc.moveBy(10,cc.v2(-3e3,0));t.runAction(o)}else 1==e&&((t=cc.instantiate(this.tank)).parent=this.enemys.getChildByName("pool"),t.setPosition(600,-275),o=cc.moveBy(20,cc.v2(-3e3,-0)),t.runAction(o))},e.prototype.createyee=function(){var t=null;(t=cc.instantiate(this.yee)).parent=this.enemys,t.setPosition(600,-150+this.getRandom(100));var e=cc.moveBy(10,cc.v2(-1200,-0));t.runAction(e)},e.prototype.getRandom=function(t){return Math.floor(Math.random()*t)},e.prototype.gameover=function(){l=!1,u=!1,h=!1,this.dina.stopAllActions(),this.dina.getComponent(cc.Animation).pause(),this.dina.scaleX=2.1,this.dina.scaleY=1.3,this.dina.getComponent(cc.Sprite).spriteFrame=this.lose,this.over.setPosition(0,30)},e.prototype.restart=function(){f=0,l=!1,u=!1,this.collidor.string="0",this.dina.stopAllActions(),this.dina.setPosition(-440,-265),this.over.setPosition(-1e3,30),d=0,h=!0,this.dina.scaleX=1,this.dina.scaleY=1,this.dina.getComponent(cc.Animation).play("normal run"),this.enemys.getChildByName("pool").destroy(),new cc.Node("pool").parent=this.enemys,v=4},i([s(cc.Node)],e.prototype,"back1",void 0),i([s(cc.Node)],e.prototype,"back2",void 0),i([s(cc.Node)],e.prototype,"enemys",void 0),i([s(cc.Node)],e.prototype,"dina",void 0),i([s(cc.Label)],e.prototype,"rule",void 0),i([s(cc.Label)],e.prototype,"lab",void 0),i([s(cc.Label)],e.prototype,"power",void 0),i([s(cc.Label)],e.prototype,"collidor",void 0),i([s(cc.Node)],e.prototype,"over",void 0),i([s(cc.Prefab)],e.prototype,"jet",void 0),i([s(cc.Prefab)],e.prototype,"tank",void 0),i([s(cc.Prefab)],e.prototype,"yee",void 0),i([s(cc.SpriteFrame)],e.prototype,"lose",void 0),i([a],e)}(cc.Component);o.default=g,cc._RF.pop()},{}]},{},["collid","script"]);