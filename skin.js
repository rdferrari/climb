// Garden Gnome Software - Skin
// Pano2VR 5.0.1/15068
// Filename: Topos-9too.ggsk
// Generated dom mar 26 12:30:31 2017

function pano2vrSkin(player,base) {
	var ggSkinVars = [];
	var me=this;
	var flag=false;
	this.player=player;
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=me.player.userdata;
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown=[];
	this.elementMouseOver=[];
	var cssPrefix='';
	var domTransition='transition';
	var domTransform='transform';
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	var i;
	if (typeof document.body.style['transform'] == 'undefined') {
		for(var i=0;i<prefixes.length;i++) {
			if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
				cssPrefix='-' + prefixes[i].toLowerCase() + '-';
				domTransition=prefixes[i] + 'Transition';
				domTransform=prefixes[i] + 'Transform';
			}
		}
	}
	
	this.player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	parameterToTransform=function(p) {
		var hs='translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
		return hs;
	}
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		this.divSkin.ggUpdateSize=function(w,h) {
			me.updateSize(me.divSkin);
		}
		this.divSkin.ggViewerInit=function() {
		}
		this.divSkin.ggLoaded=function() {
		}
		this.divSkin.ggReLoaded=function() {
		}
		this.divSkin.ggLoadedLevels=function() {
		}
		this.divSkin.ggReLoadedLevels=function() {
		}
		this.divSkin.ggEnterFullscreen=function() {
		}
		this.divSkin.ggExitFullscreen=function() {
		}
		this.skinTimerEvent();
	};
	this.hotspotProxyClick=function(id) {
	}
	this.hotspotProxyOver=function(id) {
	}
	this.hotspotProxyOut=function(id) {
	}
	this.changeActiveNode=function(id) {
		me.ggUserdata=me.player.userdata;
	}
	this.skinTimerEvent=function() {
		setTimeout(function() { me.skinTimerEvent(); }, 10);
		me.ggCurrentTime=new Date().getTime();
	};
	function SkinHotspotClass(skinObj,hotspot) {
		var me=this;
		var flag=false;
		this.player=skinObj.player;
		this.skin=skinObj;
		this.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):'';
		this.ggUserdata=this.skin.player.getNodeUserdata(nodeId);
		this.elementMouseDown=[];
		this.elementMouseOver=[];
		
		this.findElements=function(id,regex) {
			return me.skin.findElements(id,regex);
		}
		
		if (hotspot.skinid=='Hotspot-logo+tag') {
			this.__div=document.createElement('div');
			this.__div.ggId="Hotspot-logo+tag";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : 186px;';
			hs+='position : absolute;';
			hs+='top : 113px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function () {
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.setActiveHotspot(me.hotspot);
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.setActiveHotspot(null);
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ggUpdatePosition=function () {
			}
			this._logotag=document.createElement('div');
			this._logotag__img=document.createElement('img');
			this._logotag__img.className='ggskin ggskin_svg';
			this._logotag__img.setAttribute('src',basePath + 'images/logotag.svg');
			this._logotag__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._logotag__img['ondragstart']=function() { return false; };
			this._logotag.appendChild(this._logotag__img);
			this._logotag.ggId="logo+tag";
			this._logotag.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._logotag.ggVisible=true;
			this._logotag.className='ggskin ggskin_svg ';
			this._logotag.ggType='svg';
			hs ='';
			hs+='height : 89px;';
			hs+='left : -99px;';
			hs+='position : absolute;';
			hs+='top : -86px;';
			hs+='visibility : inherit;';
			hs+='width : 205px;';
			this._logotag.setAttribute('style',hs);
			this._logotag.style[domTransform + 'Origin']='50% 50%';
			me._logotag.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._logotag.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._logotag.ggUpdatePosition=function () {
			}
			this.__div.appendChild(this._logotag);
		} else
		if (hotspot.skinid=='setor-MorroCruz') {
			this.__div=document.createElement('div');
			this.__div.ggId="setor-MorroCruz";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : 277px;';
			hs+='position : absolute;';
			hs+='top : 244px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function () {
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.setActiveHotspot(me.hotspot);
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.setActiveHotspot(null);
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ggUpdatePosition=function () {
			}
			this._svg_2=document.createElement('div');
			this._svg_2__img=document.createElement('img');
			this._svg_2__img.className='ggskin ggskin_svg';
			this._svg_2__img.setAttribute('src',basePath + 'images/svg_2.svg');
			this._svg_2__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._svg_2__img['ondragstart']=function() { return false; };
			this._svg_2.appendChild(this._svg_2__img);
			this._svg_2.ggId="Svg 2";
			this._svg_2.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._svg_2.ggVisible=true;
			this._svg_2.className='ggskin ggskin_svg ';
			this._svg_2.ggType='svg';
			hs ='';
			hs+='cursor : pointer;';
			hs+='height : 24px;';
			hs+='left : -102px;';
			hs+='position : absolute;';
			hs+='top : -21px;';
			hs+='visibility : inherit;';
			hs+='width : 209px;';
			this._svg_2.setAttribute('style',hs);
			this._svg_2.style[domTransform + 'Origin']='50% 50%';
			me._svg_2.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._svg_2.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._svg_2.onclick=function () {
				me.player.changePanLog(-27,true);
			}
			this._svg_2.ggUpdatePosition=function () {
			}
			this.__div.appendChild(this._svg_2);
		} else
		if (hotspot.skinid=='Hot-trilha') {
			this.__div=document.createElement('div');
			this.__div.ggId="Hot-trilha";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : 260px;';
			hs+='position : absolute;';
			hs+='top : 428px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function () {
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.setActiveHotspot(me.hotspot);
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.setActiveHotspot(null);
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ggUpdatePosition=function () {
			}
			this._pulsebrancotourcoroa=document.createElement('div');
			this._pulsebrancotourcoroa__img=document.createElement('img');
			this._pulsebrancotourcoroa__img.className='ggskin ggskin_svg';
			this._pulsebrancotourcoroa__img.setAttribute('src',basePath + 'images/pulsebrancotourcoroa.svg');
			this._pulsebrancotourcoroa__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._pulsebrancotourcoroa__img['ondragstart']=function() { return false; };
			this._pulsebrancotourcoroa.appendChild(this._pulsebrancotourcoroa__img);
			this._pulsebrancotourcoroa.ggId="pulse-branco-tourCoroa";
			this._pulsebrancotourcoroa.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._pulsebrancotourcoroa.ggVisible=true;
			this._pulsebrancotourcoroa.className='ggskin ggskin_svg ';
			this._pulsebrancotourcoroa.ggType='svg';
			hs ='';
			hs+='height : 50px;';
			hs+='left : -24px;';
			hs+='position : absolute;';
			hs+='top : -86px;';
			hs+='visibility : inherit;';
			hs+='width : 50px;';
			this._pulsebrancotourcoroa.setAttribute('style',hs);
			this._pulsebrancotourcoroa.style[domTransform + 'Origin']='50% 50%';
			me._pulsebrancotourcoroa.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._pulsebrancotourcoroa.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._pulsebrancotourcoroa.ggUpdatePosition=function () {
			}
			this.__div.appendChild(this._pulsebrancotourcoroa);
			this._bttour=document.createElement('div');
			this._bttour__img=document.createElement('img');
			this._bttour__img.className='ggskin ggskin_svg';
			this._bttour__img.setAttribute('src',basePath + 'images/bttour.svg');
			this._bttour__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._bttour__img['ondragstart']=function() { return false; };
			this._bttour.appendChild(this._bttour__img);
			this._bttour.ggId="bt-tour";
			this._bttour.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._bttour.ggVisible=true;
			this._bttour.className='ggskin ggskin_svg ';
			this._bttour.ggType='svg';
			hs ='';
			hs+='cursor : pointer;';
			hs+='height : 85px;';
			hs+='left : -23px;';
			hs+='position : absolute;';
			hs+='top : -83px;';
			hs+='visibility : inherit;';
			hs+='width : 48px;';
			this._bttour.setAttribute('style',hs);
			this._bttour.style[domTransform + 'Origin']='50% 50%';
			me._bttour.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._bttour.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._bttour.onclick=function () {
				me.player.openNext("{node2}","");
			}
			this._bttour.ggUpdatePosition=function () {
			}
			this.__div.appendChild(this._bttour);
		} else
		if (hotspot.skinid=='Hot-trilha-0') {
			this.__div=document.createElement('div');
			this.__div.ggId="Hot-trilha-0";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : 260px;';
			hs+='position : absolute;';
			hs+='top : 428px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function () {
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.setActiveHotspot(me.hotspot);
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.setActiveHotspot(null);
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ggUpdatePosition=function () {
			}
			this._pulsebranco0=document.createElement('div');
			this._pulsebranco0__img=document.createElement('img');
			this._pulsebranco0__img.className='ggskin ggskin_svg';
			this._pulsebranco0__img.setAttribute('src',basePath + 'images/pulsebranco0.svg');
			this._pulsebranco0__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._pulsebranco0__img['ondragstart']=function() { return false; };
			this._pulsebranco0.appendChild(this._pulsebranco0__img);
			this._pulsebranco0.ggId="pulse-branco-0";
			this._pulsebranco0.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._pulsebranco0.ggVisible=true;
			this._pulsebranco0.className='ggskin ggskin_svg ';
			this._pulsebranco0.ggType='svg';
			hs ='';
			hs+='height : 50px;';
			hs+='left : -24px;';
			hs+='position : absolute;';
			hs+='top : -86px;';
			hs+='visibility : inherit;';
			hs+='width : 50px;';
			this._pulsebranco0.setAttribute('style',hs);
			this._pulsebranco0.style[domTransform + 'Origin']='50% 50%';
			me._pulsebranco0.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._pulsebranco0.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._pulsebranco0.ggUpdatePosition=function () {
			}
			this.__div.appendChild(this._pulsebranco0);
			this._bttour0=document.createElement('div');
			this._bttour0__img=document.createElement('img');
			this._bttour0__img.className='ggskin ggskin_svg';
			this._bttour0__img.setAttribute('src',basePath + 'images/bttour0.svg');
			this._bttour0__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._bttour0__img['ondragstart']=function() { return false; };
			this._bttour0.appendChild(this._bttour0__img);
			this._bttour0.ggId="bt-tour-0";
			this._bttour0.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._bttour0.ggVisible=true;
			this._bttour0.className='ggskin ggskin_svg ';
			this._bttour0.ggType='svg';
			hs ='';
			hs+='cursor : pointer;';
			hs+='height : 85px;';
			hs+='left : -23px;';
			hs+='position : absolute;';
			hs+='top : -83px;';
			hs+='visibility : inherit;';
			hs+='width : 48px;';
			this._bttour0.setAttribute('style',hs);
			this._bttour0.style[domTransform + 'Origin']='50% 50%';
			me._bttour0.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._bttour0.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._bttour0.onclick=function () {
				me.player.openNext("{node3}","");
			}
			this._bttour0.ggUpdatePosition=function () {
			}
			this.__div.appendChild(this._bttour0);
		} else
		if (hotspot.skinid=='Hot-trilha-1') {
			this.__div=document.createElement('div');
			this.__div.ggId="Hot-trilha-1";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : 260px;';
			hs+='position : absolute;';
			hs+='top : 428px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function () {
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.setActiveHotspot(me.hotspot);
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.setActiveHotspot(null);
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ggUpdatePosition=function () {
			}
			this._pulsebranco1=document.createElement('div');
			this._pulsebranco1__img=document.createElement('img');
			this._pulsebranco1__img.className='ggskin ggskin_svg';
			this._pulsebranco1__img.setAttribute('src',basePath + 'images/pulsebranco1.svg');
			this._pulsebranco1__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._pulsebranco1__img['ondragstart']=function() { return false; };
			this._pulsebranco1.appendChild(this._pulsebranco1__img);
			this._pulsebranco1.ggId="pulse-branco-1";
			this._pulsebranco1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._pulsebranco1.ggVisible=true;
			this._pulsebranco1.className='ggskin ggskin_svg ';
			this._pulsebranco1.ggType='svg';
			hs ='';
			hs+='height : 50px;';
			hs+='left : -24px;';
			hs+='position : absolute;';
			hs+='top : -86px;';
			hs+='visibility : inherit;';
			hs+='width : 50px;';
			this._pulsebranco1.setAttribute('style',hs);
			this._pulsebranco1.style[domTransform + 'Origin']='50% 50%';
			me._pulsebranco1.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._pulsebranco1.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._pulsebranco1.ggUpdatePosition=function () {
			}
			this.__div.appendChild(this._pulsebranco1);
			this._bttour1=document.createElement('div');
			this._bttour1__img=document.createElement('img');
			this._bttour1__img.className='ggskin ggskin_svg';
			this._bttour1__img.setAttribute('src',basePath + 'images/bttour1.svg');
			this._bttour1__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._bttour1__img['ondragstart']=function() { return false; };
			this._bttour1.appendChild(this._bttour1__img);
			this._bttour1.ggId="bt-tour-1";
			this._bttour1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._bttour1.ggVisible=true;
			this._bttour1.className='ggskin ggskin_svg ';
			this._bttour1.ggType='svg';
			hs ='';
			hs+='cursor : pointer;';
			hs+='height : 85px;';
			hs+='left : -23px;';
			hs+='position : absolute;';
			hs+='top : -83px;';
			hs+='visibility : inherit;';
			hs+='width : 48px;';
			this._bttour1.setAttribute('style',hs);
			this._bttour1.style[domTransform + 'Origin']='50% 50%';
			me._bttour1.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._bttour1.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._bttour1.onclick=function () {
				me.player.openNext("{node4}","");
			}
			this._bttour1.ggUpdatePosition=function () {
			}
			this.__div.appendChild(this._bttour1);
		} else
		if (hotspot.skinid=='Hot-trilha-2') {
			this.__div=document.createElement('div');
			this.__div.ggId="Hot-trilha-2";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : 260px;';
			hs+='position : absolute;';
			hs+='top : 428px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function () {
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.setActiveHotspot(me.hotspot);
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.setActiveHotspot(null);
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ggUpdatePosition=function () {
			}
			this._pulsebranco2=document.createElement('div');
			this._pulsebranco2__img=document.createElement('img');
			this._pulsebranco2__img.className='ggskin ggskin_svg';
			this._pulsebranco2__img.setAttribute('src',basePath + 'images/pulsebranco2.svg');
			this._pulsebranco2__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._pulsebranco2__img['ondragstart']=function() { return false; };
			this._pulsebranco2.appendChild(this._pulsebranco2__img);
			this._pulsebranco2.ggId="pulse-branco-2";
			this._pulsebranco2.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._pulsebranco2.ggVisible=true;
			this._pulsebranco2.className='ggskin ggskin_svg ';
			this._pulsebranco2.ggType='svg';
			hs ='';
			hs+='height : 50px;';
			hs+='left : -24px;';
			hs+='position : absolute;';
			hs+='top : -86px;';
			hs+='visibility : inherit;';
			hs+='width : 50px;';
			this._pulsebranco2.setAttribute('style',hs);
			this._pulsebranco2.style[domTransform + 'Origin']='50% 50%';
			me._pulsebranco2.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._pulsebranco2.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._pulsebranco2.ggUpdatePosition=function () {
			}
			this.__div.appendChild(this._pulsebranco2);
			this._bttour2=document.createElement('div');
			this._bttour2__img=document.createElement('img');
			this._bttour2__img.className='ggskin ggskin_svg';
			this._bttour2__img.setAttribute('src',basePath + 'images/bttour2.svg');
			this._bttour2__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._bttour2__img['ondragstart']=function() { return false; };
			this._bttour2.appendChild(this._bttour2__img);
			this._bttour2.ggId="bt-tour-2";
			this._bttour2.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._bttour2.ggVisible=true;
			this._bttour2.className='ggskin ggskin_svg ';
			this._bttour2.ggType='svg';
			hs ='';
			hs+='cursor : pointer;';
			hs+='height : 85px;';
			hs+='left : -23px;';
			hs+='position : absolute;';
			hs+='top : -83px;';
			hs+='visibility : inherit;';
			hs+='width : 48px;';
			this._bttour2.setAttribute('style',hs);
			this._bttour2.style[domTransform + 'Origin']='50% 50%';
			me._bttour2.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._bttour2.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._bttour2.onclick=function () {
				me.player.openNext("{node5}","");
			}
			this._bttour2.ggUpdatePosition=function () {
			}
			this.__div.appendChild(this._bttour2);
		} else
		if (hotspot.skinid=='Hot-trilha-3') {
			this.__div=document.createElement('div');
			this.__div.ggId="Hot-trilha-3";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : 260px;';
			hs+='position : absolute;';
			hs+='top : 428px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function () {
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.setActiveHotspot(me.hotspot);
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.setActiveHotspot(null);
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ggUpdatePosition=function () {
			}
			this._pulsebranco345=document.createElement('div');
			this._pulsebranco345__img=document.createElement('img');
			this._pulsebranco345__img.className='ggskin ggskin_svg';
			this._pulsebranco345__img.setAttribute('src',basePath + 'images/pulsebranco345.svg');
			this._pulsebranco345__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._pulsebranco345__img['ondragstart']=function() { return false; };
			this._pulsebranco345.appendChild(this._pulsebranco345__img);
			this._pulsebranco345.ggId="pulse-branco-3";
			this._pulsebranco345.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._pulsebranco345.ggVisible=true;
			this._pulsebranco345.className='ggskin ggskin_svg ';
			this._pulsebranco345.ggType='svg';
			hs ='';
			hs+='height : 50px;';
			hs+='left : -24px;';
			hs+='position : absolute;';
			hs+='top : -86px;';
			hs+='visibility : inherit;';
			hs+='width : 50px;';
			this._pulsebranco345.setAttribute('style',hs);
			this._pulsebranco345.style[domTransform + 'Origin']='50% 50%';
			me._pulsebranco345.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._pulsebranco345.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._pulsebranco345.ggUpdatePosition=function () {
			}
			this.__div.appendChild(this._pulsebranco345);
			this._bttour3=document.createElement('div');
			this._bttour3__img=document.createElement('img');
			this._bttour3__img.className='ggskin ggskin_svg';
			this._bttour3__img.setAttribute('src',basePath + 'images/bttour3.svg');
			this._bttour3__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._bttour3__img['ondragstart']=function() { return false; };
			this._bttour3.appendChild(this._bttour3__img);
			this._bttour3.ggId="bt-tour-3";
			this._bttour3.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._bttour3.ggVisible=true;
			this._bttour3.className='ggskin ggskin_svg ';
			this._bttour3.ggType='svg';
			hs ='';
			hs+='cursor : pointer;';
			hs+='height : 85px;';
			hs+='left : -23px;';
			hs+='position : absolute;';
			hs+='top : -83px;';
			hs+='visibility : inherit;';
			hs+='width : 48px;';
			this._bttour3.setAttribute('style',hs);
			this._bttour3.style[domTransform + 'Origin']='50% 50%';
			me._bttour3.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._bttour3.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._bttour3.onclick=function () {
				me.player.openNext("{node6}","");
			}
			this._bttour3.ggUpdatePosition=function () {
			}
			this.__div.appendChild(this._bttour3);
		} else
		if (hotspot.skinid=='SetorAbelhas') {
			this.__div=document.createElement('div');
			this.__div.ggId="SetorAbelhas";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : 256px;';
			hs+='position : absolute;';
			hs+='top : 271px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function () {
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.setActiveHotspot(me.hotspot);
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.setActiveHotspot(null);
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ggUpdatePosition=function () {
			}
			this._setorabelhasicon=document.createElement('div');
			this._setorabelhasicon__img=document.createElement('img');
			this._setorabelhasicon__img.className='ggskin ggskin_svg';
			this._setorabelhasicon__img.setAttribute('src',basePath + 'images/setorabelhasicon.svg');
			this._setorabelhasicon__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._setorabelhasicon__img['ondragstart']=function() { return false; };
			this._setorabelhasicon.appendChild(this._setorabelhasicon__img);
			this._setorabelhasicon.ggId="SetorAbelhas-icon";
			this._setorabelhasicon.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._setorabelhasicon.ggVisible=true;
			this._setorabelhasicon.className='ggskin ggskin_svg ';
			this._setorabelhasicon.ggType='svg';
			hs ='';
			hs+='cursor : pointer;';
			hs+='height : 61px;';
			hs+='left : -72px;';
			hs+='position : absolute;';
			hs+='top : -59px;';
			hs+='visibility : inherit;';
			hs+='width : 145px;';
			this._setorabelhasicon.setAttribute('style',hs);
			this._setorabelhasicon.style[domTransform + 'Origin']='50% 50%';
			me._setorabelhasicon.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._setorabelhasicon.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._setorabelhasicon.onclick=function () {
				me.player.openNext("{node28}","");
			}
			this._setorabelhasicon.ggUpdatePosition=function () {
			}
			this.__div.appendChild(this._setorabelhasicon);
		} else
		if (hotspot.skinid=='SetorPrincipal') {
			this.__div=document.createElement('div');
			this.__div.ggId="SetorPrincipal";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : 255px;';
			hs+='position : absolute;';
			hs+='top : 241px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function () {
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.setActiveHotspot(me.hotspot);
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.setActiveHotspot(null);
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ggUpdatePosition=function () {
			}
			this._svg_3=document.createElement('div');
			this._svg_3__img=document.createElement('img');
			this._svg_3__img.className='ggskin ggskin_svg';
			this._svg_3__img.setAttribute('src',basePath + 'images/svg_3.svg');
			this._svg_3__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._svg_3__img['ondragstart']=function() { return false; };
			this._svg_3.appendChild(this._svg_3__img);
			this._svg_3.ggId="Svg 3";
			this._svg_3.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._svg_3.ggVisible=true;
			this._svg_3.className='ggskin ggskin_svg ';
			this._svg_3.ggType='svg';
			hs ='';
			hs+='cursor : pointer;';
			hs+='height : 61px;';
			hs+='left : -72px;';
			hs+='position : absolute;';
			hs+='top : -58px;';
			hs+='visibility : inherit;';
			hs+='width : 141px;';
			this._svg_3.setAttribute('style',hs);
			this._svg_3.style[domTransform + 'Origin']='50% 50%';
			me._svg_3.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._svg_3.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._svg_3.onclick=function () {
				me.player.openNext("{node29}","");
			}
			this._svg_3.ggUpdatePosition=function () {
			}
			this.__div.appendChild(this._svg_3);
		} else
		if (hotspot.skinid=='SetorOrquidea') {
			this.__div=document.createElement('div');
			this.__div.ggId="SetorOrquidea";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : 261px;';
			hs+='position : absolute;';
			hs+='top : 298px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function () {
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.setActiveHotspot(me.hotspot);
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.setActiveHotspot(null);
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ggUpdatePosition=function () {
			}
			this._svg_4=document.createElement('div');
			this._svg_4__img=document.createElement('img');
			this._svg_4__img.className='ggskin ggskin_svg';
			this._svg_4__img.setAttribute('src',basePath + 'images/svg_4.svg');
			this._svg_4__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._svg_4__img['ondragstart']=function() { return false; };
			this._svg_4.appendChild(this._svg_4__img);
			this._svg_4.ggId="Svg 4";
			this._svg_4.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._svg_4.ggVisible=true;
			this._svg_4.className='ggskin ggskin_svg ';
			this._svg_4.ggType='svg';
			hs ='';
			hs+='cursor : pointer;';
			hs+='height : 61px;';
			hs+='left : -73px;';
			hs+='position : absolute;';
			hs+='top : -60px;';
			hs+='visibility : inherit;';
			hs+='width : 145px;';
			this._svg_4.setAttribute('style',hs);
			this._svg_4.style[domTransform + 'Origin']='50% 50%';
			me._svg_4.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._svg_4.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._svg_4.onclick=function () {
				me.player.openNext("{node30}","");
			}
			this._svg_4.ggUpdatePosition=function () {
			}
			this.__div.appendChild(this._svg_4);
		} else
		if (hotspot.skinid=='ComoChegar-1') {
			this.__div=document.createElement('div');
			this.__div.ggId="ComoChegar-1";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : 288px;';
			hs+='position : absolute;';
			hs+='top : 386px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function () {
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.setActiveHotspot(me.hotspot);
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.setActiveHotspot(null);
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ggUpdatePosition=function () {
			}
			this._svg_5=document.createElement('div');
			this._svg_5__img=document.createElement('img');
			this._svg_5__img.className='ggskin ggskin_svg';
			this._svg_5__img.setAttribute('src',basePath + 'images/svg_5.svg');
			this._svg_5__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._svg_5__img['ondragstart']=function() { return false; };
			this._svg_5.appendChild(this._svg_5__img);
			this._svg_5.ggId="Svg 5";
			this._svg_5.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._svg_5.ggVisible=true;
			this._svg_5.className='ggskin ggskin_svg ';
			this._svg_5.ggType='svg';
			hs ='';
			hs+='height : 237px;';
			hs+='left : -142px;';
			hs+='position : absolute;';
			hs+='top : -232px;';
			hs+='visibility : inherit;';
			hs+='width : 284px;';
			this._svg_5.setAttribute('style',hs);
			this._svg_5.style[domTransform + 'Origin']='50% 50%';
			me._svg_5.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._svg_5.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._svg_5.ggUpdatePosition=function () {
			}
			this.__div.appendChild(this._svg_5);
		} else
		if (hotspot.skinid=='Hot-setor-1') {
			this.__div=document.createElement('div');
			this.__div.ggId="Hot-setor-1";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : 260px;';
			hs+='position : absolute;';
			hs+='top : 428px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function () {
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.setActiveHotspot(me.hotspot);
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.setActiveHotspot(null);
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ggUpdatePosition=function () {
			}
			this._pulsebranco344=document.createElement('div');
			this._pulsebranco344__img=document.createElement('img');
			this._pulsebranco344__img.className='ggskin ggskin_svg';
			this._pulsebranco344__img.setAttribute('src',basePath + 'images/pulsebranco344.svg');
			this._pulsebranco344__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._pulsebranco344__img['ondragstart']=function() { return false; };
			this._pulsebranco344.appendChild(this._pulsebranco344__img);
			this._pulsebranco344.ggId="pulse-branco-3";
			this._pulsebranco344.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._pulsebranco344.ggVisible=true;
			this._pulsebranco344.className='ggskin ggskin_svg ';
			this._pulsebranco344.ggType='svg';
			hs ='';
			hs+='height : 50px;';
			hs+='left : -24px;';
			hs+='position : absolute;';
			hs+='top : -86px;';
			hs+='visibility : inherit;';
			hs+='width : 50px;';
			this._pulsebranco344.setAttribute('style',hs);
			this._pulsebranco344.style[domTransform + 'Origin']='50% 50%';
			me._pulsebranco344.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._pulsebranco344.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._pulsebranco344.ggUpdatePosition=function () {
			}
			this.__div.appendChild(this._pulsebranco344);
			this._btsetor1=document.createElement('div');
			this._btsetor1__img=document.createElement('img');
			this._btsetor1__img.className='ggskin ggskin_svg';
			this._btsetor1__img.setAttribute('src',basePath + 'images/btsetor1.svg');
			this._btsetor1__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._btsetor1__img['ondragstart']=function() { return false; };
			this._btsetor1.appendChild(this._btsetor1__img);
			this._btsetor1.ggId="bt-setor-1";
			this._btsetor1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._btsetor1.ggVisible=true;
			this._btsetor1.className='ggskin ggskin_svg ';
			this._btsetor1.ggType='svg';
			hs ='';
			hs+='cursor : pointer;';
			hs+='height : 85px;';
			hs+='left : -23px;';
			hs+='position : absolute;';
			hs+='top : -83px;';
			hs+='visibility : inherit;';
			hs+='width : 48px;';
			this._btsetor1.setAttribute('style',hs);
			this._btsetor1.style[domTransform + 'Origin']='50% 50%';
			me._btsetor1.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._btsetor1.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._btsetor1.onclick=function () {
				me.player.openNext("{node19}","");
			}
			this._btsetor1.ggUpdatePosition=function () {
			}
			this.__div.appendChild(this._btsetor1);
		} else
		if (hotspot.skinid=='Hot-setor-2') {
			this.__div=document.createElement('div');
			this.__div.ggId="Hot-setor-2";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : 260px;';
			hs+='position : absolute;';
			hs+='top : 428px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function () {
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.setActiveHotspot(me.hotspot);
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.setActiveHotspot(null);
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ggUpdatePosition=function () {
			}
			this._pulsebranco343=document.createElement('div');
			this._pulsebranco343__img=document.createElement('img');
			this._pulsebranco343__img.className='ggskin ggskin_svg';
			this._pulsebranco343__img.setAttribute('src',basePath + 'images/pulsebranco343.svg');
			this._pulsebranco343__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._pulsebranco343__img['ondragstart']=function() { return false; };
			this._pulsebranco343.appendChild(this._pulsebranco343__img);
			this._pulsebranco343.ggId="pulse-branco-3";
			this._pulsebranco343.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._pulsebranco343.ggVisible=true;
			this._pulsebranco343.className='ggskin ggskin_svg ';
			this._pulsebranco343.ggType='svg';
			hs ='';
			hs+='height : 50px;';
			hs+='left : -24px;';
			hs+='position : absolute;';
			hs+='top : -86px;';
			hs+='visibility : inherit;';
			hs+='width : 50px;';
			this._pulsebranco343.setAttribute('style',hs);
			this._pulsebranco343.style[domTransform + 'Origin']='50% 50%';
			me._pulsebranco343.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._pulsebranco343.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._pulsebranco343.ggUpdatePosition=function () {
			}
			this.__div.appendChild(this._pulsebranco343);
			this._btsetor=document.createElement('div');
			this._btsetor__img=document.createElement('img');
			this._btsetor__img.className='ggskin ggskin_svg';
			this._btsetor__img.setAttribute('src',basePath + 'images/btsetor.svg');
			this._btsetor__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._btsetor__img['ondragstart']=function() { return false; };
			this._btsetor.appendChild(this._btsetor__img);
			this._btsetor.ggId="bt-setor";
			this._btsetor.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._btsetor.ggVisible=true;
			this._btsetor.className='ggskin ggskin_svg ';
			this._btsetor.ggType='svg';
			hs ='';
			hs+='cursor : pointer;';
			hs+='height : 85px;';
			hs+='left : -23px;';
			hs+='position : absolute;';
			hs+='top : -83px;';
			hs+='visibility : inherit;';
			hs+='width : 48px;';
			this._btsetor.setAttribute('style',hs);
			this._btsetor.style[domTransform + 'Origin']='50% 50%';
			me._btsetor.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._btsetor.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._btsetor.onclick=function () {
				me.player.openNext("{node20}","");
			}
			this._btsetor.ggUpdatePosition=function () {
			}
			this.__div.appendChild(this._btsetor);
		} else
		if (hotspot.skinid=='Hot-setor-3') {
			this.__div=document.createElement('div');
			this.__div.ggId="Hot-setor-3";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : 260px;';
			hs+='position : absolute;';
			hs+='top : 428px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function () {
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.setActiveHotspot(me.hotspot);
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.setActiveHotspot(null);
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ggUpdatePosition=function () {
			}
			this._pulsebranco342=document.createElement('div');
			this._pulsebranco342__img=document.createElement('img');
			this._pulsebranco342__img.className='ggskin ggskin_svg';
			this._pulsebranco342__img.setAttribute('src',basePath + 'images/pulsebranco342.svg');
			this._pulsebranco342__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._pulsebranco342__img['ondragstart']=function() { return false; };
			this._pulsebranco342.appendChild(this._pulsebranco342__img);
			this._pulsebranco342.ggId="pulse-branco-3";
			this._pulsebranco342.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._pulsebranco342.ggVisible=true;
			this._pulsebranco342.className='ggskin ggskin_svg ';
			this._pulsebranco342.ggType='svg';
			hs ='';
			hs+='height : 50px;';
			hs+='left : -24px;';
			hs+='position : absolute;';
			hs+='top : -86px;';
			hs+='visibility : inherit;';
			hs+='width : 50px;';
			this._pulsebranco342.setAttribute('style',hs);
			this._pulsebranco342.style[domTransform + 'Origin']='50% 50%';
			me._pulsebranco342.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._pulsebranco342.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._pulsebranco342.ggUpdatePosition=function () {
			}
			this.__div.appendChild(this._pulsebranco342);
			this._btsetor3=document.createElement('div');
			this._btsetor3__img=document.createElement('img');
			this._btsetor3__img.className='ggskin ggskin_svg';
			this._btsetor3__img.setAttribute('src',basePath + 'images/btsetor3.svg');
			this._btsetor3__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._btsetor3__img['ondragstart']=function() { return false; };
			this._btsetor3.appendChild(this._btsetor3__img);
			this._btsetor3.ggId="bt-setor-3";
			this._btsetor3.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._btsetor3.ggVisible=true;
			this._btsetor3.className='ggskin ggskin_svg ';
			this._btsetor3.ggType='svg';
			hs ='';
			hs+='cursor : pointer;';
			hs+='height : 85px;';
			hs+='left : -23px;';
			hs+='position : absolute;';
			hs+='top : -83px;';
			hs+='visibility : inherit;';
			hs+='width : 48px;';
			this._btsetor3.setAttribute('style',hs);
			this._btsetor3.style[domTransform + 'Origin']='50% 50%';
			me._btsetor3.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._btsetor3.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._btsetor3.onclick=function () {
				me.player.openNext("{node21}","");
			}
			this._btsetor3.ggUpdatePosition=function () {
			}
			this.__div.appendChild(this._btsetor3);
		} else
		if (hotspot.skinid=='Hot-setor-4') {
			this.__div=document.createElement('div');
			this.__div.ggId="Hot-setor-4";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : 260px;';
			hs+='position : absolute;';
			hs+='top : 428px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function () {
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.setActiveHotspot(me.hotspot);
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.setActiveHotspot(null);
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ggUpdatePosition=function () {
			}
			this._pulsebranco341=document.createElement('div');
			this._pulsebranco341__img=document.createElement('img');
			this._pulsebranco341__img.className='ggskin ggskin_svg';
			this._pulsebranco341__img.setAttribute('src',basePath + 'images/pulsebranco341.svg');
			this._pulsebranco341__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._pulsebranco341__img['ondragstart']=function() { return false; };
			this._pulsebranco341.appendChild(this._pulsebranco341__img);
			this._pulsebranco341.ggId="pulse-branco-3";
			this._pulsebranco341.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._pulsebranco341.ggVisible=true;
			this._pulsebranco341.className='ggskin ggskin_svg ';
			this._pulsebranco341.ggType='svg';
			hs ='';
			hs+='height : 50px;';
			hs+='left : -24px;';
			hs+='position : absolute;';
			hs+='top : -86px;';
			hs+='visibility : inherit;';
			hs+='width : 50px;';
			this._pulsebranco341.setAttribute('style',hs);
			this._pulsebranco341.style[domTransform + 'Origin']='50% 50%';
			me._pulsebranco341.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._pulsebranco341.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._pulsebranco341.ggUpdatePosition=function () {
			}
			this.__div.appendChild(this._pulsebranco341);
			this._btsetor4=document.createElement('div');
			this._btsetor4__img=document.createElement('img');
			this._btsetor4__img.className='ggskin ggskin_svg';
			this._btsetor4__img.setAttribute('src',basePath + 'images/btsetor4.svg');
			this._btsetor4__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._btsetor4__img['ondragstart']=function() { return false; };
			this._btsetor4.appendChild(this._btsetor4__img);
			this._btsetor4.ggId="bt-setor-4";
			this._btsetor4.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._btsetor4.ggVisible=true;
			this._btsetor4.className='ggskin ggskin_svg ';
			this._btsetor4.ggType='svg';
			hs ='';
			hs+='cursor : pointer;';
			hs+='height : 85px;';
			hs+='left : -23px;';
			hs+='position : absolute;';
			hs+='top : -83px;';
			hs+='visibility : inherit;';
			hs+='width : 48px;';
			this._btsetor4.setAttribute('style',hs);
			this._btsetor4.style[domTransform + 'Origin']='50% 50%';
			me._btsetor4.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._btsetor4.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._btsetor4.onclick=function () {
				me.player.openNext("{node7}","");
			}
			this._btsetor4.ggUpdatePosition=function () {
			}
			this.__div.appendChild(this._btsetor4);
		} else
		if (hotspot.skinid=='Hot-setor-5') {
			this.__div=document.createElement('div');
			this.__div.ggId="Hot-setor-5";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : 260px;';
			hs+='position : absolute;';
			hs+='top : 428px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function () {
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.setActiveHotspot(me.hotspot);
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.setActiveHotspot(null);
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ggUpdatePosition=function () {
			}
			this._pulsebranco340=document.createElement('div');
			this._pulsebranco340__img=document.createElement('img');
			this._pulsebranco340__img.className='ggskin ggskin_svg';
			this._pulsebranco340__img.setAttribute('src',basePath + 'images/pulsebranco340.svg');
			this._pulsebranco340__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._pulsebranco340__img['ondragstart']=function() { return false; };
			this._pulsebranco340.appendChild(this._pulsebranco340__img);
			this._pulsebranco340.ggId="pulse-branco-3";
			this._pulsebranco340.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._pulsebranco340.ggVisible=true;
			this._pulsebranco340.className='ggskin ggskin_svg ';
			this._pulsebranco340.ggType='svg';
			hs ='';
			hs+='height : 50px;';
			hs+='left : -24px;';
			hs+='position : absolute;';
			hs+='top : -86px;';
			hs+='visibility : inherit;';
			hs+='width : 50px;';
			this._pulsebranco340.setAttribute('style',hs);
			this._pulsebranco340.style[domTransform + 'Origin']='50% 50%';
			me._pulsebranco340.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._pulsebranco340.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._pulsebranco340.ggUpdatePosition=function () {
			}
			this.__div.appendChild(this._pulsebranco340);
			this._btsetor5=document.createElement('div');
			this._btsetor5__img=document.createElement('img');
			this._btsetor5__img.className='ggskin ggskin_svg';
			this._btsetor5__img.setAttribute('src',basePath + 'images/btsetor5.svg');
			this._btsetor5__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._btsetor5__img['ondragstart']=function() { return false; };
			this._btsetor5.appendChild(this._btsetor5__img);
			this._btsetor5.ggId="bt-setor-5";
			this._btsetor5.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._btsetor5.ggVisible=true;
			this._btsetor5.className='ggskin ggskin_svg ';
			this._btsetor5.ggType='svg';
			hs ='';
			hs+='cursor : pointer;';
			hs+='height : 85px;';
			hs+='left : -23px;';
			hs+='position : absolute;';
			hs+='top : -83px;';
			hs+='visibility : inherit;';
			hs+='width : 48px;';
			this._btsetor5.setAttribute('style',hs);
			this._btsetor5.style[domTransform + 'Origin']='50% 50%';
			me._btsetor5.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._btsetor5.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._btsetor5.onclick=function () {
				me.player.openNext("{node8}","");
			}
			this._btsetor5.ggUpdatePosition=function () {
			}
			this.__div.appendChild(this._btsetor5);
		} else
		if (hotspot.skinid=='Hot-setor-6') {
			this.__div=document.createElement('div');
			this.__div.ggId="Hot-setor-6";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : 260px;';
			hs+='position : absolute;';
			hs+='top : 428px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function () {
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.setActiveHotspot(me.hotspot);
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.setActiveHotspot(null);
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ggUpdatePosition=function () {
			}
			this._pulsebranco339=document.createElement('div');
			this._pulsebranco339__img=document.createElement('img');
			this._pulsebranco339__img.className='ggskin ggskin_svg';
			this._pulsebranco339__img.setAttribute('src',basePath + 'images/pulsebranco339.svg');
			this._pulsebranco339__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._pulsebranco339__img['ondragstart']=function() { return false; };
			this._pulsebranco339.appendChild(this._pulsebranco339__img);
			this._pulsebranco339.ggId="pulse-branco-3";
			this._pulsebranco339.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._pulsebranco339.ggVisible=true;
			this._pulsebranco339.className='ggskin ggskin_svg ';
			this._pulsebranco339.ggType='svg';
			hs ='';
			hs+='height : 50px;';
			hs+='left : -24px;';
			hs+='position : absolute;';
			hs+='top : -86px;';
			hs+='visibility : inherit;';
			hs+='width : 50px;';
			this._pulsebranco339.setAttribute('style',hs);
			this._pulsebranco339.style[domTransform + 'Origin']='50% 50%';
			me._pulsebranco339.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._pulsebranco339.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._pulsebranco339.ggUpdatePosition=function () {
			}
			this.__div.appendChild(this._pulsebranco339);
			this._btsetor6=document.createElement('div');
			this._btsetor6__img=document.createElement('img');
			this._btsetor6__img.className='ggskin ggskin_svg';
			this._btsetor6__img.setAttribute('src',basePath + 'images/btsetor6.svg');
			this._btsetor6__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._btsetor6__img['ondragstart']=function() { return false; };
			this._btsetor6.appendChild(this._btsetor6__img);
			this._btsetor6.ggId="bt-setor-6";
			this._btsetor6.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._btsetor6.ggVisible=true;
			this._btsetor6.className='ggskin ggskin_svg ';
			this._btsetor6.ggType='svg';
			hs ='';
			hs+='cursor : pointer;';
			hs+='height : 85px;';
			hs+='left : -23px;';
			hs+='position : absolute;';
			hs+='top : -83px;';
			hs+='visibility : inherit;';
			hs+='width : 48px;';
			this._btsetor6.setAttribute('style',hs);
			this._btsetor6.style[domTransform + 'Origin']='50% 50%';
			me._btsetor6.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._btsetor6.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._btsetor6.onclick=function () {
				me.player.openNext("{node9}","");
			}
			this._btsetor6.ggUpdatePosition=function () {
			}
			this.__div.appendChild(this._btsetor6);
		} else
		if (hotspot.skinid=='Hot-setor-7') {
			this.__div=document.createElement('div');
			this.__div.ggId="Hot-setor-7";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : 260px;';
			hs+='position : absolute;';
			hs+='top : 428px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function () {
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.setActiveHotspot(me.hotspot);
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.setActiveHotspot(null);
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ggUpdatePosition=function () {
			}
			this._pulsebranco338=document.createElement('div');
			this._pulsebranco338__img=document.createElement('img');
			this._pulsebranco338__img.className='ggskin ggskin_svg';
			this._pulsebranco338__img.setAttribute('src',basePath + 'images/pulsebranco338.svg');
			this._pulsebranco338__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._pulsebranco338__img['ondragstart']=function() { return false; };
			this._pulsebranco338.appendChild(this._pulsebranco338__img);
			this._pulsebranco338.ggId="pulse-branco-3";
			this._pulsebranco338.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._pulsebranco338.ggVisible=true;
			this._pulsebranco338.className='ggskin ggskin_svg ';
			this._pulsebranco338.ggType='svg';
			hs ='';
			hs+='height : 50px;';
			hs+='left : -24px;';
			hs+='position : absolute;';
			hs+='top : -86px;';
			hs+='visibility : inherit;';
			hs+='width : 50px;';
			this._pulsebranco338.setAttribute('style',hs);
			this._pulsebranco338.style[domTransform + 'Origin']='50% 50%';
			me._pulsebranco338.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._pulsebranco338.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._pulsebranco338.ggUpdatePosition=function () {
			}
			this.__div.appendChild(this._pulsebranco338);
			this._btsetor7=document.createElement('div');
			this._btsetor7__img=document.createElement('img');
			this._btsetor7__img.className='ggskin ggskin_svg';
			this._btsetor7__img.setAttribute('src',basePath + 'images/btsetor7.svg');
			this._btsetor7__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._btsetor7__img['ondragstart']=function() { return false; };
			this._btsetor7.appendChild(this._btsetor7__img);
			this._btsetor7.ggId="bt-setor-7";
			this._btsetor7.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._btsetor7.ggVisible=true;
			this._btsetor7.className='ggskin ggskin_svg ';
			this._btsetor7.ggType='svg';
			hs ='';
			hs+='cursor : pointer;';
			hs+='height : 85px;';
			hs+='left : -23px;';
			hs+='position : absolute;';
			hs+='top : -83px;';
			hs+='visibility : inherit;';
			hs+='width : 48px;';
			this._btsetor7.setAttribute('style',hs);
			this._btsetor7.style[domTransform + 'Origin']='50% 50%';
			me._btsetor7.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._btsetor7.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._btsetor7.onclick=function () {
				me.player.openNext("{node10}","");
			}
			this._btsetor7.ggUpdatePosition=function () {
			}
			this.__div.appendChild(this._btsetor7);
		} else
		if (hotspot.skinid=='Hot-setor-8') {
			this.__div=document.createElement('div');
			this.__div.ggId="Hot-setor-8";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : 260px;';
			hs+='position : absolute;';
			hs+='top : 428px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function () {
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.setActiveHotspot(me.hotspot);
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.setActiveHotspot(null);
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ggUpdatePosition=function () {
			}
			this._pulsebranco337=document.createElement('div');
			this._pulsebranco337__img=document.createElement('img');
			this._pulsebranco337__img.className='ggskin ggskin_svg';
			this._pulsebranco337__img.setAttribute('src',basePath + 'images/pulsebranco337.svg');
			this._pulsebranco337__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._pulsebranco337__img['ondragstart']=function() { return false; };
			this._pulsebranco337.appendChild(this._pulsebranco337__img);
			this._pulsebranco337.ggId="pulse-branco-3";
			this._pulsebranco337.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._pulsebranco337.ggVisible=true;
			this._pulsebranco337.className='ggskin ggskin_svg ';
			this._pulsebranco337.ggType='svg';
			hs ='';
			hs+='height : 50px;';
			hs+='left : -24px;';
			hs+='position : absolute;';
			hs+='top : -86px;';
			hs+='visibility : inherit;';
			hs+='width : 50px;';
			this._pulsebranco337.setAttribute('style',hs);
			this._pulsebranco337.style[domTransform + 'Origin']='50% 50%';
			me._pulsebranco337.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._pulsebranco337.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._pulsebranco337.ggUpdatePosition=function () {
			}
			this.__div.appendChild(this._pulsebranco337);
			this._btsetor8=document.createElement('div');
			this._btsetor8__img=document.createElement('img');
			this._btsetor8__img.className='ggskin ggskin_svg';
			this._btsetor8__img.setAttribute('src',basePath + 'images/btsetor8.svg');
			this._btsetor8__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._btsetor8__img['ondragstart']=function() { return false; };
			this._btsetor8.appendChild(this._btsetor8__img);
			this._btsetor8.ggId="bt-setor-8";
			this._btsetor8.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._btsetor8.ggVisible=true;
			this._btsetor8.className='ggskin ggskin_svg ';
			this._btsetor8.ggType='svg';
			hs ='';
			hs+='cursor : pointer;';
			hs+='height : 85px;';
			hs+='left : -23px;';
			hs+='position : absolute;';
			hs+='top : -83px;';
			hs+='visibility : inherit;';
			hs+='width : 48px;';
			this._btsetor8.setAttribute('style',hs);
			this._btsetor8.style[domTransform + 'Origin']='50% 50%';
			me._btsetor8.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._btsetor8.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._btsetor8.onclick=function () {
				me.player.openNext("{node11}","");
			}
			this._btsetor8.ggUpdatePosition=function () {
			}
			this.__div.appendChild(this._btsetor8);
		} else
		if (hotspot.skinid=='Hot-setor-9') {
			this.__div=document.createElement('div');
			this.__div.ggId="Hot-setor-9";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : 260px;';
			hs+='position : absolute;';
			hs+='top : 428px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function () {
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.setActiveHotspot(me.hotspot);
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.setActiveHotspot(null);
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ggUpdatePosition=function () {
			}
			this._pulsebranco336=document.createElement('div');
			this._pulsebranco336__img=document.createElement('img');
			this._pulsebranco336__img.className='ggskin ggskin_svg';
			this._pulsebranco336__img.setAttribute('src',basePath + 'images/pulsebranco336.svg');
			this._pulsebranco336__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._pulsebranco336__img['ondragstart']=function() { return false; };
			this._pulsebranco336.appendChild(this._pulsebranco336__img);
			this._pulsebranco336.ggId="pulse-branco-3";
			this._pulsebranco336.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._pulsebranco336.ggVisible=true;
			this._pulsebranco336.className='ggskin ggskin_svg ';
			this._pulsebranco336.ggType='svg';
			hs ='';
			hs+='height : 50px;';
			hs+='left : -24px;';
			hs+='position : absolute;';
			hs+='top : -86px;';
			hs+='visibility : inherit;';
			hs+='width : 50px;';
			this._pulsebranco336.setAttribute('style',hs);
			this._pulsebranco336.style[domTransform + 'Origin']='50% 50%';
			me._pulsebranco336.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._pulsebranco336.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._pulsebranco336.ggUpdatePosition=function () {
			}
			this.__div.appendChild(this._pulsebranco336);
			this._btsetor9=document.createElement('div');
			this._btsetor9__img=document.createElement('img');
			this._btsetor9__img.className='ggskin ggskin_svg';
			this._btsetor9__img.setAttribute('src',basePath + 'images/btsetor9.svg');
			this._btsetor9__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._btsetor9__img['ondragstart']=function() { return false; };
			this._btsetor9.appendChild(this._btsetor9__img);
			this._btsetor9.ggId="bt-setor-9";
			this._btsetor9.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._btsetor9.ggVisible=true;
			this._btsetor9.className='ggskin ggskin_svg ';
			this._btsetor9.ggType='svg';
			hs ='';
			hs+='cursor : pointer;';
			hs+='height : 85px;';
			hs+='left : -23px;';
			hs+='position : absolute;';
			hs+='top : -83px;';
			hs+='visibility : inherit;';
			hs+='width : 48px;';
			this._btsetor9.setAttribute('style',hs);
			this._btsetor9.style[domTransform + 'Origin']='50% 50%';
			me._btsetor9.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._btsetor9.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._btsetor9.onclick=function () {
				me.player.openNext("{node12}","");
			}
			this._btsetor9.ggUpdatePosition=function () {
			}
			this.__div.appendChild(this._btsetor9);
		} else
		if (hotspot.skinid=='Hot-setor-10') {
			this.__div=document.createElement('div');
			this.__div.ggId="Hot-setor-10";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : 260px;';
			hs+='position : absolute;';
			hs+='top : 428px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function () {
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.setActiveHotspot(me.hotspot);
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.setActiveHotspot(null);
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ggUpdatePosition=function () {
			}
			this._pulsebranco335=document.createElement('div');
			this._pulsebranco335__img=document.createElement('img');
			this._pulsebranco335__img.className='ggskin ggskin_svg';
			this._pulsebranco335__img.setAttribute('src',basePath + 'images/pulsebranco335.svg');
			this._pulsebranco335__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._pulsebranco335__img['ondragstart']=function() { return false; };
			this._pulsebranco335.appendChild(this._pulsebranco335__img);
			this._pulsebranco335.ggId="pulse-branco-3";
			this._pulsebranco335.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._pulsebranco335.ggVisible=true;
			this._pulsebranco335.className='ggskin ggskin_svg ';
			this._pulsebranco335.ggType='svg';
			hs ='';
			hs+='height : 50px;';
			hs+='left : -24px;';
			hs+='position : absolute;';
			hs+='top : -86px;';
			hs+='visibility : inherit;';
			hs+='width : 50px;';
			this._pulsebranco335.setAttribute('style',hs);
			this._pulsebranco335.style[domTransform + 'Origin']='50% 50%';
			me._pulsebranco335.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._pulsebranco335.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._pulsebranco335.ggUpdatePosition=function () {
			}
			this.__div.appendChild(this._pulsebranco335);
			this._btsetor10=document.createElement('div');
			this._btsetor10__img=document.createElement('img');
			this._btsetor10__img.className='ggskin ggskin_svg';
			this._btsetor10__img.setAttribute('src',basePath + 'images/btsetor10.svg');
			this._btsetor10__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._btsetor10__img['ondragstart']=function() { return false; };
			this._btsetor10.appendChild(this._btsetor10__img);
			this._btsetor10.ggId="bt-setor-10";
			this._btsetor10.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._btsetor10.ggVisible=true;
			this._btsetor10.className='ggskin ggskin_svg ';
			this._btsetor10.ggType='svg';
			hs ='';
			hs+='cursor : pointer;';
			hs+='height : 85px;';
			hs+='left : -23px;';
			hs+='position : absolute;';
			hs+='top : -83px;';
			hs+='visibility : inherit;';
			hs+='width : 48px;';
			this._btsetor10.setAttribute('style',hs);
			this._btsetor10.style[domTransform + 'Origin']='50% 50%';
			me._btsetor10.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._btsetor10.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._btsetor10.onclick=function () {
				me.player.openNext("{node13}","");
			}
			this._btsetor10.ggUpdatePosition=function () {
			}
			this.__div.appendChild(this._btsetor10);
		} else
		if (hotspot.skinid=='Hot-setor-11') {
			this.__div=document.createElement('div');
			this.__div.ggId="Hot-setor-11";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : 260px;';
			hs+='position : absolute;';
			hs+='top : 428px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function () {
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.setActiveHotspot(me.hotspot);
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.setActiveHotspot(null);
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ggUpdatePosition=function () {
			}
			this._pulsebranco334=document.createElement('div');
			this._pulsebranco334__img=document.createElement('img');
			this._pulsebranco334__img.className='ggskin ggskin_svg';
			this._pulsebranco334__img.setAttribute('src',basePath + 'images/pulsebranco334.svg');
			this._pulsebranco334__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._pulsebranco334__img['ondragstart']=function() { return false; };
			this._pulsebranco334.appendChild(this._pulsebranco334__img);
			this._pulsebranco334.ggId="pulse-branco-3";
			this._pulsebranco334.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._pulsebranco334.ggVisible=true;
			this._pulsebranco334.className='ggskin ggskin_svg ';
			this._pulsebranco334.ggType='svg';
			hs ='';
			hs+='height : 50px;';
			hs+='left : -24px;';
			hs+='position : absolute;';
			hs+='top : -86px;';
			hs+='visibility : inherit;';
			hs+='width : 50px;';
			this._pulsebranco334.setAttribute('style',hs);
			this._pulsebranco334.style[domTransform + 'Origin']='50% 50%';
			me._pulsebranco334.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._pulsebranco334.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._pulsebranco334.ggUpdatePosition=function () {
			}
			this.__div.appendChild(this._pulsebranco334);
			this._btsetor11=document.createElement('div');
			this._btsetor11__img=document.createElement('img');
			this._btsetor11__img.className='ggskin ggskin_svg';
			this._btsetor11__img.setAttribute('src',basePath + 'images/btsetor11.svg');
			this._btsetor11__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._btsetor11__img['ondragstart']=function() { return false; };
			this._btsetor11.appendChild(this._btsetor11__img);
			this._btsetor11.ggId="bt-setor-11";
			this._btsetor11.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._btsetor11.ggVisible=true;
			this._btsetor11.className='ggskin ggskin_svg ';
			this._btsetor11.ggType='svg';
			hs ='';
			hs+='cursor : pointer;';
			hs+='height : 85px;';
			hs+='left : -23px;';
			hs+='position : absolute;';
			hs+='top : -83px;';
			hs+='visibility : inherit;';
			hs+='width : 48px;';
			this._btsetor11.setAttribute('style',hs);
			this._btsetor11.style[domTransform + 'Origin']='50% 50%';
			me._btsetor11.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._btsetor11.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._btsetor11.onclick=function () {
				me.player.openNext("{node14}","");
			}
			this._btsetor11.ggUpdatePosition=function () {
			}
			this.__div.appendChild(this._btsetor11);
		} else
		if (hotspot.skinid=='Hot-setor-12') {
			this.__div=document.createElement('div');
			this.__div.ggId="Hot-setor-12";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : 260px;';
			hs+='position : absolute;';
			hs+='top : 428px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function () {
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.setActiveHotspot(me.hotspot);
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.setActiveHotspot(null);
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ggUpdatePosition=function () {
			}
			this._pulsebranco333=document.createElement('div');
			this._pulsebranco333__img=document.createElement('img');
			this._pulsebranco333__img.className='ggskin ggskin_svg';
			this._pulsebranco333__img.setAttribute('src',basePath + 'images/pulsebranco333.svg');
			this._pulsebranco333__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._pulsebranco333__img['ondragstart']=function() { return false; };
			this._pulsebranco333.appendChild(this._pulsebranco333__img);
			this._pulsebranco333.ggId="pulse-branco-3";
			this._pulsebranco333.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._pulsebranco333.ggVisible=true;
			this._pulsebranco333.className='ggskin ggskin_svg ';
			this._pulsebranco333.ggType='svg';
			hs ='';
			hs+='height : 50px;';
			hs+='left : -24px;';
			hs+='position : absolute;';
			hs+='top : -86px;';
			hs+='visibility : inherit;';
			hs+='width : 50px;';
			this._pulsebranco333.setAttribute('style',hs);
			this._pulsebranco333.style[domTransform + 'Origin']='50% 50%';
			me._pulsebranco333.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._pulsebranco333.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._pulsebranco333.ggUpdatePosition=function () {
			}
			this.__div.appendChild(this._pulsebranco333);
			this._btsetor12=document.createElement('div');
			this._btsetor12__img=document.createElement('img');
			this._btsetor12__img.className='ggskin ggskin_svg';
			this._btsetor12__img.setAttribute('src',basePath + 'images/btsetor12.svg');
			this._btsetor12__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._btsetor12__img['ondragstart']=function() { return false; };
			this._btsetor12.appendChild(this._btsetor12__img);
			this._btsetor12.ggId="bt-setor-12";
			this._btsetor12.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._btsetor12.ggVisible=true;
			this._btsetor12.className='ggskin ggskin_svg ';
			this._btsetor12.ggType='svg';
			hs ='';
			hs+='cursor : pointer;';
			hs+='height : 85px;';
			hs+='left : -23px;';
			hs+='position : absolute;';
			hs+='top : -83px;';
			hs+='visibility : inherit;';
			hs+='width : 48px;';
			this._btsetor12.setAttribute('style',hs);
			this._btsetor12.style[domTransform + 'Origin']='50% 50%';
			me._btsetor12.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._btsetor12.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._btsetor12.onclick=function () {
				me.player.openNext("{node15}","");
			}
			this._btsetor12.ggUpdatePosition=function () {
			}
			this.__div.appendChild(this._btsetor12);
		} else
		if (hotspot.skinid=='Hot-setor-13') {
			this.__div=document.createElement('div');
			this.__div.ggId="Hot-setor-13";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : 260px;';
			hs+='position : absolute;';
			hs+='top : 428px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function () {
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.setActiveHotspot(me.hotspot);
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.setActiveHotspot(null);
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ggUpdatePosition=function () {
			}
			this._pulsebranco332=document.createElement('div');
			this._pulsebranco332__img=document.createElement('img');
			this._pulsebranco332__img.className='ggskin ggskin_svg';
			this._pulsebranco332__img.setAttribute('src',basePath + 'images/pulsebranco332.svg');
			this._pulsebranco332__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._pulsebranco332__img['ondragstart']=function() { return false; };
			this._pulsebranco332.appendChild(this._pulsebranco332__img);
			this._pulsebranco332.ggId="pulse-branco-3";
			this._pulsebranco332.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._pulsebranco332.ggVisible=true;
			this._pulsebranco332.className='ggskin ggskin_svg ';
			this._pulsebranco332.ggType='svg';
			hs ='';
			hs+='height : 50px;';
			hs+='left : -24px;';
			hs+='position : absolute;';
			hs+='top : -86px;';
			hs+='visibility : inherit;';
			hs+='width : 50px;';
			this._pulsebranco332.setAttribute('style',hs);
			this._pulsebranco332.style[domTransform + 'Origin']='50% 50%';
			me._pulsebranco332.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._pulsebranco332.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._pulsebranco332.ggUpdatePosition=function () {
			}
			this.__div.appendChild(this._pulsebranco332);
			this._btsetor13=document.createElement('div');
			this._btsetor13__img=document.createElement('img');
			this._btsetor13__img.className='ggskin ggskin_svg';
			this._btsetor13__img.setAttribute('src',basePath + 'images/btsetor13.svg');
			this._btsetor13__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._btsetor13__img['ondragstart']=function() { return false; };
			this._btsetor13.appendChild(this._btsetor13__img);
			this._btsetor13.ggId="bt-setor-13";
			this._btsetor13.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._btsetor13.ggVisible=true;
			this._btsetor13.className='ggskin ggskin_svg ';
			this._btsetor13.ggType='svg';
			hs ='';
			hs+='cursor : pointer;';
			hs+='height : 85px;';
			hs+='left : -23px;';
			hs+='position : absolute;';
			hs+='top : -83px;';
			hs+='visibility : inherit;';
			hs+='width : 48px;';
			this._btsetor13.setAttribute('style',hs);
			this._btsetor13.style[domTransform + 'Origin']='50% 50%';
			me._btsetor13.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._btsetor13.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._btsetor13.onclick=function () {
				me.player.openNext("{node16}","");
			}
			this._btsetor13.ggUpdatePosition=function () {
			}
			this.__div.appendChild(this._btsetor13);
		} else
		if (hotspot.skinid=='Hot-setor-14') {
			this.__div=document.createElement('div');
			this.__div.ggId="Hot-setor-14";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : 260px;';
			hs+='position : absolute;';
			hs+='top : 428px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function () {
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.setActiveHotspot(me.hotspot);
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.setActiveHotspot(null);
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ggUpdatePosition=function () {
			}
			this._pulsebranco331=document.createElement('div');
			this._pulsebranco331__img=document.createElement('img');
			this._pulsebranco331__img.className='ggskin ggskin_svg';
			this._pulsebranco331__img.setAttribute('src',basePath + 'images/pulsebranco331.svg');
			this._pulsebranco331__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._pulsebranco331__img['ondragstart']=function() { return false; };
			this._pulsebranco331.appendChild(this._pulsebranco331__img);
			this._pulsebranco331.ggId="pulse-branco-3";
			this._pulsebranco331.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._pulsebranco331.ggVisible=true;
			this._pulsebranco331.className='ggskin ggskin_svg ';
			this._pulsebranco331.ggType='svg';
			hs ='';
			hs+='height : 50px;';
			hs+='left : -24px;';
			hs+='position : absolute;';
			hs+='top : -86px;';
			hs+='visibility : inherit;';
			hs+='width : 50px;';
			this._pulsebranco331.setAttribute('style',hs);
			this._pulsebranco331.style[domTransform + 'Origin']='50% 50%';
			me._pulsebranco331.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._pulsebranco331.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._pulsebranco331.ggUpdatePosition=function () {
			}
			this.__div.appendChild(this._pulsebranco331);
			this._btsetor14=document.createElement('div');
			this._btsetor14__img=document.createElement('img');
			this._btsetor14__img.className='ggskin ggskin_svg';
			this._btsetor14__img.setAttribute('src',basePath + 'images/btsetor14.svg');
			this._btsetor14__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._btsetor14__img['ondragstart']=function() { return false; };
			this._btsetor14.appendChild(this._btsetor14__img);
			this._btsetor14.ggId="bt-setor-14";
			this._btsetor14.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._btsetor14.ggVisible=true;
			this._btsetor14.className='ggskin ggskin_svg ';
			this._btsetor14.ggType='svg';
			hs ='';
			hs+='cursor : pointer;';
			hs+='height : 85px;';
			hs+='left : -23px;';
			hs+='position : absolute;';
			hs+='top : -83px;';
			hs+='visibility : inherit;';
			hs+='width : 48px;';
			this._btsetor14.setAttribute('style',hs);
			this._btsetor14.style[domTransform + 'Origin']='50% 50%';
			me._btsetor14.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._btsetor14.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._btsetor14.onclick=function () {
				me.player.openNext("{node18}","");
			}
			this._btsetor14.ggUpdatePosition=function () {
			}
			this.__div.appendChild(this._btsetor14);
		} else
		if (hotspot.skinid=='Hot-setor-15') {
			this.__div=document.createElement('div');
			this.__div.ggId="Hot-setor-15";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : 260px;';
			hs+='position : absolute;';
			hs+='top : 428px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function () {
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.setActiveHotspot(me.hotspot);
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.setActiveHotspot(null);
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ggUpdatePosition=function () {
			}
			this._pulsebranco330=document.createElement('div');
			this._pulsebranco330__img=document.createElement('img');
			this._pulsebranco330__img.className='ggskin ggskin_svg';
			this._pulsebranco330__img.setAttribute('src',basePath + 'images/pulsebranco330.svg');
			this._pulsebranco330__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._pulsebranco330__img['ondragstart']=function() { return false; };
			this._pulsebranco330.appendChild(this._pulsebranco330__img);
			this._pulsebranco330.ggId="pulse-branco-3";
			this._pulsebranco330.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._pulsebranco330.ggVisible=true;
			this._pulsebranco330.className='ggskin ggskin_svg ';
			this._pulsebranco330.ggType='svg';
			hs ='';
			hs+='height : 50px;';
			hs+='left : -24px;';
			hs+='position : absolute;';
			hs+='top : -86px;';
			hs+='visibility : inherit;';
			hs+='width : 50px;';
			this._pulsebranco330.setAttribute('style',hs);
			this._pulsebranco330.style[domTransform + 'Origin']='50% 50%';
			me._pulsebranco330.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._pulsebranco330.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._pulsebranco330.ggUpdatePosition=function () {
			}
			this.__div.appendChild(this._pulsebranco330);
			this._btsetor15=document.createElement('div');
			this._btsetor15__img=document.createElement('img');
			this._btsetor15__img.className='ggskin ggskin_svg';
			this._btsetor15__img.setAttribute('src',basePath + 'images/btsetor15.svg');
			this._btsetor15__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._btsetor15__img['ondragstart']=function() { return false; };
			this._btsetor15.appendChild(this._btsetor15__img);
			this._btsetor15.ggId="bt-setor-15";
			this._btsetor15.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._btsetor15.ggVisible=true;
			this._btsetor15.className='ggskin ggskin_svg ';
			this._btsetor15.ggType='svg';
			hs ='';
			hs+='cursor : pointer;';
			hs+='height : 85px;';
			hs+='left : -23px;';
			hs+='position : absolute;';
			hs+='top : -83px;';
			hs+='visibility : inherit;';
			hs+='width : 48px;';
			this._btsetor15.setAttribute('style',hs);
			this._btsetor15.style[domTransform + 'Origin']='50% 50%';
			me._btsetor15.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._btsetor15.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._btsetor15.onclick=function () {
				me.player.openNext("{node22}","");
			}
			this._btsetor15.ggUpdatePosition=function () {
			}
			this.__div.appendChild(this._btsetor15);
		} else
		if (hotspot.skinid=='Hot-setor-16') {
			this.__div=document.createElement('div');
			this.__div.ggId="Hot-setor-16";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : 260px;';
			hs+='position : absolute;';
			hs+='top : 428px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function () {
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.setActiveHotspot(me.hotspot);
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.setActiveHotspot(null);
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ggUpdatePosition=function () {
			}
			this._pulsebranco329=document.createElement('div');
			this._pulsebranco329__img=document.createElement('img');
			this._pulsebranco329__img.className='ggskin ggskin_svg';
			this._pulsebranco329__img.setAttribute('src',basePath + 'images/pulsebranco329.svg');
			this._pulsebranco329__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._pulsebranco329__img['ondragstart']=function() { return false; };
			this._pulsebranco329.appendChild(this._pulsebranco329__img);
			this._pulsebranco329.ggId="pulse-branco-3";
			this._pulsebranco329.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._pulsebranco329.ggVisible=true;
			this._pulsebranco329.className='ggskin ggskin_svg ';
			this._pulsebranco329.ggType='svg';
			hs ='';
			hs+='height : 50px;';
			hs+='left : -24px;';
			hs+='position : absolute;';
			hs+='top : -86px;';
			hs+='visibility : inherit;';
			hs+='width : 50px;';
			this._pulsebranco329.setAttribute('style',hs);
			this._pulsebranco329.style[domTransform + 'Origin']='50% 50%';
			me._pulsebranco329.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._pulsebranco329.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._pulsebranco329.ggUpdatePosition=function () {
			}
			this.__div.appendChild(this._pulsebranco329);
			this._btsetor16=document.createElement('div');
			this._btsetor16__img=document.createElement('img');
			this._btsetor16__img.className='ggskin ggskin_svg';
			this._btsetor16__img.setAttribute('src',basePath + 'images/btsetor16.svg');
			this._btsetor16__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._btsetor16__img['ondragstart']=function() { return false; };
			this._btsetor16.appendChild(this._btsetor16__img);
			this._btsetor16.ggId="bt-setor-16";
			this._btsetor16.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._btsetor16.ggVisible=true;
			this._btsetor16.className='ggskin ggskin_svg ';
			this._btsetor16.ggType='svg';
			hs ='';
			hs+='cursor : pointer;';
			hs+='height : 85px;';
			hs+='left : -23px;';
			hs+='position : absolute;';
			hs+='top : -83px;';
			hs+='visibility : inherit;';
			hs+='width : 48px;';
			this._btsetor16.setAttribute('style',hs);
			this._btsetor16.style[domTransform + 'Origin']='50% 50%';
			me._btsetor16.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._btsetor16.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._btsetor16.onclick=function () {
				me.player.openNext("{node23}","");
			}
			this._btsetor16.ggUpdatePosition=function () {
			}
			this.__div.appendChild(this._btsetor16);
		} else
		if (hotspot.skinid=='Hot-setor-17') {
			this.__div=document.createElement('div');
			this.__div.ggId="Hot-setor-17";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : 260px;';
			hs+='position : absolute;';
			hs+='top : 428px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function () {
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.setActiveHotspot(me.hotspot);
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.setActiveHotspot(null);
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ggUpdatePosition=function () {
			}
			this._pulsebranco328=document.createElement('div');
			this._pulsebranco328__img=document.createElement('img');
			this._pulsebranco328__img.className='ggskin ggskin_svg';
			this._pulsebranco328__img.setAttribute('src',basePath + 'images/pulsebranco328.svg');
			this._pulsebranco328__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._pulsebranco328__img['ondragstart']=function() { return false; };
			this._pulsebranco328.appendChild(this._pulsebranco328__img);
			this._pulsebranco328.ggId="pulse-branco-3";
			this._pulsebranco328.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._pulsebranco328.ggVisible=true;
			this._pulsebranco328.className='ggskin ggskin_svg ';
			this._pulsebranco328.ggType='svg';
			hs ='';
			hs+='height : 50px;';
			hs+='left : -24px;';
			hs+='position : absolute;';
			hs+='top : -86px;';
			hs+='visibility : inherit;';
			hs+='width : 50px;';
			this._pulsebranco328.setAttribute('style',hs);
			this._pulsebranco328.style[domTransform + 'Origin']='50% 50%';
			me._pulsebranco328.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._pulsebranco328.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._pulsebranco328.ggUpdatePosition=function () {
			}
			this.__div.appendChild(this._pulsebranco328);
			this._btsetor17=document.createElement('div');
			this._btsetor17__img=document.createElement('img');
			this._btsetor17__img.className='ggskin ggskin_svg';
			this._btsetor17__img.setAttribute('src',basePath + 'images/btsetor17.svg');
			this._btsetor17__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._btsetor17__img['ondragstart']=function() { return false; };
			this._btsetor17.appendChild(this._btsetor17__img);
			this._btsetor17.ggId="bt-setor-17";
			this._btsetor17.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._btsetor17.ggVisible=true;
			this._btsetor17.className='ggskin ggskin_svg ';
			this._btsetor17.ggType='svg';
			hs ='';
			hs+='cursor : pointer;';
			hs+='height : 85px;';
			hs+='left : -23px;';
			hs+='position : absolute;';
			hs+='top : -83px;';
			hs+='visibility : inherit;';
			hs+='width : 48px;';
			this._btsetor17.setAttribute('style',hs);
			this._btsetor17.style[domTransform + 'Origin']='50% 50%';
			me._btsetor17.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._btsetor17.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._btsetor17.onclick=function () {
				me.player.openNext("{node24}","");
			}
			this._btsetor17.ggUpdatePosition=function () {
			}
			this.__div.appendChild(this._btsetor17);
		} else
		if (hotspot.skinid=='Hot-setor-18') {
			this.__div=document.createElement('div');
			this.__div.ggId="Hot-setor-18";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : 260px;';
			hs+='position : absolute;';
			hs+='top : 428px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function () {
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.setActiveHotspot(me.hotspot);
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.setActiveHotspot(null);
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ggUpdatePosition=function () {
			}
			this._pulsebranco327=document.createElement('div');
			this._pulsebranco327__img=document.createElement('img');
			this._pulsebranco327__img.className='ggskin ggskin_svg';
			this._pulsebranco327__img.setAttribute('src',basePath + 'images/pulsebranco327.svg');
			this._pulsebranco327__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._pulsebranco327__img['ondragstart']=function() { return false; };
			this._pulsebranco327.appendChild(this._pulsebranco327__img);
			this._pulsebranco327.ggId="pulse-branco-3";
			this._pulsebranco327.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._pulsebranco327.ggVisible=true;
			this._pulsebranco327.className='ggskin ggskin_svg ';
			this._pulsebranco327.ggType='svg';
			hs ='';
			hs+='height : 50px;';
			hs+='left : -24px;';
			hs+='position : absolute;';
			hs+='top : -86px;';
			hs+='visibility : inherit;';
			hs+='width : 50px;';
			this._pulsebranco327.setAttribute('style',hs);
			this._pulsebranco327.style[domTransform + 'Origin']='50% 50%';
			me._pulsebranco327.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._pulsebranco327.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._pulsebranco327.ggUpdatePosition=function () {
			}
			this.__div.appendChild(this._pulsebranco327);
			this._btsetor18=document.createElement('div');
			this._btsetor18__img=document.createElement('img');
			this._btsetor18__img.className='ggskin ggskin_svg';
			this._btsetor18__img.setAttribute('src',basePath + 'images/btsetor18.svg');
			this._btsetor18__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._btsetor18__img['ondragstart']=function() { return false; };
			this._btsetor18.appendChild(this._btsetor18__img);
			this._btsetor18.ggId="bt-setor-18";
			this._btsetor18.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._btsetor18.ggVisible=true;
			this._btsetor18.className='ggskin ggskin_svg ';
			this._btsetor18.ggType='svg';
			hs ='';
			hs+='cursor : pointer;';
			hs+='height : 85px;';
			hs+='left : -23px;';
			hs+='position : absolute;';
			hs+='top : -83px;';
			hs+='visibility : inherit;';
			hs+='width : 48px;';
			this._btsetor18.setAttribute('style',hs);
			this._btsetor18.style[domTransform + 'Origin']='50% 50%';
			me._btsetor18.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._btsetor18.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._btsetor18.onclick=function () {
				me.player.openNext("{node25}","");
			}
			this._btsetor18.ggUpdatePosition=function () {
			}
			this.__div.appendChild(this._btsetor18);
		} else
		if (hotspot.skinid=='Hot-setor-19') {
			this.__div=document.createElement('div');
			this.__div.ggId="Hot-setor-19";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : 260px;';
			hs+='position : absolute;';
			hs+='top : 428px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function () {
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.setActiveHotspot(me.hotspot);
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.setActiveHotspot(null);
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ggUpdatePosition=function () {
			}
			this._pulsebranco326=document.createElement('div');
			this._pulsebranco326__img=document.createElement('img');
			this._pulsebranco326__img.className='ggskin ggskin_svg';
			this._pulsebranco326__img.setAttribute('src',basePath + 'images/pulsebranco326.svg');
			this._pulsebranco326__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._pulsebranco326__img['ondragstart']=function() { return false; };
			this._pulsebranco326.appendChild(this._pulsebranco326__img);
			this._pulsebranco326.ggId="pulse-branco-3";
			this._pulsebranco326.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._pulsebranco326.ggVisible=true;
			this._pulsebranco326.className='ggskin ggskin_svg ';
			this._pulsebranco326.ggType='svg';
			hs ='';
			hs+='height : 50px;';
			hs+='left : -24px;';
			hs+='position : absolute;';
			hs+='top : -86px;';
			hs+='visibility : inherit;';
			hs+='width : 50px;';
			this._pulsebranco326.setAttribute('style',hs);
			this._pulsebranco326.style[domTransform + 'Origin']='50% 50%';
			me._pulsebranco326.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._pulsebranco326.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._pulsebranco326.ggUpdatePosition=function () {
			}
			this.__div.appendChild(this._pulsebranco326);
			this._btsetor19=document.createElement('div');
			this._btsetor19__img=document.createElement('img');
			this._btsetor19__img.className='ggskin ggskin_svg';
			this._btsetor19__img.setAttribute('src',basePath + 'images/btsetor19.svg');
			this._btsetor19__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._btsetor19__img['ondragstart']=function() { return false; };
			this._btsetor19.appendChild(this._btsetor19__img);
			this._btsetor19.ggId="bt-setor-19";
			this._btsetor19.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._btsetor19.ggVisible=true;
			this._btsetor19.className='ggskin ggskin_svg ';
			this._btsetor19.ggType='svg';
			hs ='';
			hs+='cursor : pointer;';
			hs+='height : 85px;';
			hs+='left : -23px;';
			hs+='position : absolute;';
			hs+='top : -83px;';
			hs+='visibility : inherit;';
			hs+='width : 48px;';
			this._btsetor19.setAttribute('style',hs);
			this._btsetor19.style[domTransform + 'Origin']='50% 50%';
			me._btsetor19.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._btsetor19.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._btsetor19.onclick=function () {
				me.player.openNext("{node26}","");
			}
			this._btsetor19.ggUpdatePosition=function () {
			}
			this.__div.appendChild(this._btsetor19);
		} else
		if (hotspot.skinid=='Hot-setor-20') {
			this.__div=document.createElement('div');
			this.__div.ggId="Hot-setor-20";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : 260px;';
			hs+='position : absolute;';
			hs+='top : 428px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function () {
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.setActiveHotspot(me.hotspot);
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.setActiveHotspot(null);
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ggUpdatePosition=function () {
			}
			this._pulsebranco325=document.createElement('div');
			this._pulsebranco325__img=document.createElement('img');
			this._pulsebranco325__img.className='ggskin ggskin_svg';
			this._pulsebranco325__img.setAttribute('src',basePath + 'images/pulsebranco325.svg');
			this._pulsebranco325__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._pulsebranco325__img['ondragstart']=function() { return false; };
			this._pulsebranco325.appendChild(this._pulsebranco325__img);
			this._pulsebranco325.ggId="pulse-branco-3";
			this._pulsebranco325.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._pulsebranco325.ggVisible=true;
			this._pulsebranco325.className='ggskin ggskin_svg ';
			this._pulsebranco325.ggType='svg';
			hs ='';
			hs+='height : 50px;';
			hs+='left : -24px;';
			hs+='position : absolute;';
			hs+='top : -86px;';
			hs+='visibility : inherit;';
			hs+='width : 50px;';
			this._pulsebranco325.setAttribute('style',hs);
			this._pulsebranco325.style[domTransform + 'Origin']='50% 50%';
			me._pulsebranco325.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._pulsebranco325.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._pulsebranco325.ggUpdatePosition=function () {
			}
			this.__div.appendChild(this._pulsebranco325);
			this._btsetor20=document.createElement('div');
			this._btsetor20__img=document.createElement('img');
			this._btsetor20__img.className='ggskin ggskin_svg';
			this._btsetor20__img.setAttribute('src',basePath + 'images/btsetor20.svg');
			this._btsetor20__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._btsetor20__img['ondragstart']=function() { return false; };
			this._btsetor20.appendChild(this._btsetor20__img);
			this._btsetor20.ggId="bt-setor-20";
			this._btsetor20.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._btsetor20.ggVisible=true;
			this._btsetor20.className='ggskin ggskin_svg ';
			this._btsetor20.ggType='svg';
			hs ='';
			hs+='cursor : pointer;';
			hs+='height : 85px;';
			hs+='left : -23px;';
			hs+='position : absolute;';
			hs+='top : -83px;';
			hs+='visibility : inherit;';
			hs+='width : 48px;';
			this._btsetor20.setAttribute('style',hs);
			this._btsetor20.style[domTransform + 'Origin']='50% 50%';
			me._btsetor20.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._btsetor20.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._btsetor20.onclick=function () {
				me.player.openNext("{node27}","");
			}
			this._btsetor20.ggUpdatePosition=function () {
			}
			this.__div.appendChild(this._btsetor20);
		} else
		if (hotspot.skinid=='via-1') {
			this.__div=document.createElement('div');
			this.__div.ggId="via-1";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : 236px;';
			hs+='position : absolute;';
			hs+='top : 249px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function () {
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.setActiveHotspot(me.hotspot);
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.setActiveHotspot(null);
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ggUpdatePosition=function () {
			}
			this._pulsebranco324=document.createElement('div');
			this._pulsebranco324__img=document.createElement('img');
			this._pulsebranco324__img.className='ggskin ggskin_svg';
			this._pulsebranco324__img.setAttribute('src',basePath + 'images/pulsebranco324.svg');
			this._pulsebranco324__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._pulsebranco324__img['ondragstart']=function() { return false; };
			this._pulsebranco324.appendChild(this._pulsebranco324__img);
			this._pulsebranco324.ggId="pulse-branco-3";
			this._pulsebranco324.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._pulsebranco324.ggVisible=true;
			this._pulsebranco324.className='ggskin ggskin_svg ';
			this._pulsebranco324.ggType='svg';
			hs ='';
			hs+='height : 50px;';
			hs+='left : -25px;';
			hs+='position : absolute;';
			hs+='top : -25px;';
			hs+='visibility : inherit;';
			hs+='width : 50px;';
			this._pulsebranco324.setAttribute('style',hs);
			this._pulsebranco324.style[domTransform + 'Origin']='50% 50%';
			me._pulsebranco324.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._pulsebranco324.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._pulsebranco324.ggUpdatePosition=function () {
			}
			this.__div.appendChild(this._pulsebranco324);
			this._svg_6=document.createElement('div');
			this._svg_6__img=document.createElement('img');
			this._svg_6__img.className='ggskin ggskin_svg';
			this._svg_6__img.setAttribute('src',basePath + 'images/svg_6.svg');
			this._svg_6__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._svg_6__img['ondragstart']=function() { return false; };
			this._svg_6.appendChild(this._svg_6__img);
			this._svg_6.ggId="Svg 6";
			this._svg_6.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._svg_6.ggVisible=true;
			this._svg_6.className='ggskin ggskin_svg ';
			this._svg_6.ggType='svg';
			hs ='';
			hs+='cursor : pointer;';
			hs+='height : 60px;';
			hs+='left : -48px;';
			hs+='position : absolute;';
			hs+='top : -22px;';
			hs+='visibility : inherit;';
			hs+='width : 108px;';
			this._svg_6.setAttribute('style',hs);
			this._svg_6.style[domTransform + 'Origin']='50% 50%';
			me._svg_6.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._svg_6.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._svg_6.onclick=function () {
				me.player.openNext("{node19}","");
			}
			this._svg_6.ggUpdatePosition=function () {
			}
			this.__div.appendChild(this._svg_6);
		} else
		if (hotspot.skinid=='via-2') {
			this.__div=document.createElement('div');
			this.__div.ggId="via-2";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : 236px;';
			hs+='position : absolute;';
			hs+='top : 249px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function () {
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.setActiveHotspot(me.hotspot);
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.setActiveHotspot(null);
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ggUpdatePosition=function () {
			}
			this._pulsebranco323=document.createElement('div');
			this._pulsebranco323__img=document.createElement('img');
			this._pulsebranco323__img.className='ggskin ggskin_svg';
			this._pulsebranco323__img.setAttribute('src',basePath + 'images/pulsebranco323.svg');
			this._pulsebranco323__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._pulsebranco323__img['ondragstart']=function() { return false; };
			this._pulsebranco323.appendChild(this._pulsebranco323__img);
			this._pulsebranco323.ggId="pulse-branco-3";
			this._pulsebranco323.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._pulsebranco323.ggVisible=true;
			this._pulsebranco323.className='ggskin ggskin_svg ';
			this._pulsebranco323.ggType='svg';
			hs ='';
			hs+='height : 50px;';
			hs+='left : -25px;';
			hs+='position : absolute;';
			hs+='top : -25px;';
			hs+='visibility : inherit;';
			hs+='width : 50px;';
			this._pulsebranco323.setAttribute('style',hs);
			this._pulsebranco323.style[domTransform + 'Origin']='50% 50%';
			me._pulsebranco323.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._pulsebranco323.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._pulsebranco323.ggUpdatePosition=function () {
			}
			this.__div.appendChild(this._pulsebranco323);
			this._svg_7=document.createElement('div');
			this._svg_7__img=document.createElement('img');
			this._svg_7__img.className='ggskin ggskin_svg';
			this._svg_7__img.setAttribute('src',basePath + 'images/svg_7.svg');
			this._svg_7__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._svg_7__img['ondragstart']=function() { return false; };
			this._svg_7.appendChild(this._svg_7__img);
			this._svg_7.ggId="Svg 7";
			this._svg_7.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._svg_7.ggVisible=true;
			this._svg_7.className='ggskin ggskin_svg ';
			this._svg_7.ggType='svg';
			hs ='';
			hs+='cursor : pointer;';
			hs+='height : 61px;';
			hs+='left : -51px;';
			hs+='position : absolute;';
			hs+='top : -22px;';
			hs+='visibility : inherit;';
			hs+='width : 111px;';
			this._svg_7.setAttribute('style',hs);
			this._svg_7.style[domTransform + 'Origin']='50% 50%';
			me._svg_7.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._svg_7.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._svg_7.onclick=function () {
				me.player.openNext("{node19}","");
			}
			this._svg_7.ggUpdatePosition=function () {
			}
			this.__div.appendChild(this._svg_7);
		} else
		if (hotspot.skinid=='via-3') {
			this.__div=document.createElement('div');
			this.__div.ggId="via-3";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : 236px;';
			hs+='position : absolute;';
			hs+='top : 249px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function () {
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.setActiveHotspot(me.hotspot);
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.setActiveHotspot(null);
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ggUpdatePosition=function () {
			}
			this._pulsebranco322=document.createElement('div');
			this._pulsebranco322__img=document.createElement('img');
			this._pulsebranco322__img.className='ggskin ggskin_svg';
			this._pulsebranco322__img.setAttribute('src',basePath + 'images/pulsebranco322.svg');
			this._pulsebranco322__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._pulsebranco322__img['ondragstart']=function() { return false; };
			this._pulsebranco322.appendChild(this._pulsebranco322__img);
			this._pulsebranco322.ggId="pulse-branco-3";
			this._pulsebranco322.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._pulsebranco322.ggVisible=true;
			this._pulsebranco322.className='ggskin ggskin_svg ';
			this._pulsebranco322.ggType='svg';
			hs ='';
			hs+='height : 50px;';
			hs+='left : -25px;';
			hs+='position : absolute;';
			hs+='top : -25px;';
			hs+='visibility : inherit;';
			hs+='width : 50px;';
			this._pulsebranco322.setAttribute('style',hs);
			this._pulsebranco322.style[domTransform + 'Origin']='50% 50%';
			me._pulsebranco322.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._pulsebranco322.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._pulsebranco322.ggUpdatePosition=function () {
			}
			this.__div.appendChild(this._pulsebranco322);
			this._svg_8=document.createElement('div');
			this._svg_8__img=document.createElement('img');
			this._svg_8__img.className='ggskin ggskin_svg';
			this._svg_8__img.setAttribute('src',basePath + 'images/svg_8.svg');
			this._svg_8__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._svg_8__img['ondragstart']=function() { return false; };
			this._svg_8.appendChild(this._svg_8__img);
			this._svg_8.ggId="Svg 8";
			this._svg_8.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._svg_8.ggVisible=true;
			this._svg_8.className='ggskin ggskin_svg ';
			this._svg_8.ggType='svg';
			hs ='';
			hs+='cursor : pointer;';
			hs+='height : 72px;';
			hs+='left : -48px;';
			hs+='position : absolute;';
			hs+='top : -22px;';
			hs+='visibility : inherit;';
			hs+='width : 98px;';
			this._svg_8.setAttribute('style',hs);
			this._svg_8.style[domTransform + 'Origin']='50% 50%';
			me._svg_8.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._svg_8.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._svg_8.onclick=function () {
				me.player.openNext("{node20}","");
			}
			this._svg_8.ggUpdatePosition=function () {
			}
			this.__div.appendChild(this._svg_8);
		} else
		if (hotspot.skinid=='via-4') {
			this.__div=document.createElement('div');
			this.__div.ggId="via-4";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : 236px;';
			hs+='position : absolute;';
			hs+='top : 249px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function () {
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.setActiveHotspot(me.hotspot);
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.setActiveHotspot(null);
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ggUpdatePosition=function () {
			}
			this._pulsebranco321=document.createElement('div');
			this._pulsebranco321__img=document.createElement('img');
			this._pulsebranco321__img.className='ggskin ggskin_svg';
			this._pulsebranco321__img.setAttribute('src',basePath + 'images/pulsebranco321.svg');
			this._pulsebranco321__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._pulsebranco321__img['ondragstart']=function() { return false; };
			this._pulsebranco321.appendChild(this._pulsebranco321__img);
			this._pulsebranco321.ggId="pulse-branco-3";
			this._pulsebranco321.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._pulsebranco321.ggVisible=true;
			this._pulsebranco321.className='ggskin ggskin_svg ';
			this._pulsebranco321.ggType='svg';
			hs ='';
			hs+='height : 50px;';
			hs+='left : -25px;';
			hs+='position : absolute;';
			hs+='top : -25px;';
			hs+='visibility : inherit;';
			hs+='width : 50px;';
			this._pulsebranco321.setAttribute('style',hs);
			this._pulsebranco321.style[domTransform + 'Origin']='50% 50%';
			me._pulsebranco321.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._pulsebranco321.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._pulsebranco321.ggUpdatePosition=function () {
			}
			this.__div.appendChild(this._pulsebranco321);
			this._svg_9=document.createElement('div');
			this._svg_9__img=document.createElement('img');
			this._svg_9__img.className='ggskin ggskin_svg';
			this._svg_9__img.setAttribute('src',basePath + 'images/svg_9.svg');
			this._svg_9__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._svg_9__img['ondragstart']=function() { return false; };
			this._svg_9.appendChild(this._svg_9__img);
			this._svg_9.ggId="Svg 9";
			this._svg_9.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._svg_9.ggVisible=true;
			this._svg_9.className='ggskin ggskin_svg ';
			this._svg_9.ggType='svg';
			hs ='';
			hs+='cursor : pointer;';
			hs+='height : 74px;';
			hs+='left : -31px;';
			hs+='position : absolute;';
			hs+='top : -22px;';
			hs+='visibility : inherit;';
			hs+='width : 66px;';
			this._svg_9.setAttribute('style',hs);
			this._svg_9.style[domTransform + 'Origin']='50% 50%';
			me._svg_9.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._svg_9.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._svg_9.onclick=function () {
				me.player.openNext("{node20}","");
			}
			this._svg_9.ggUpdatePosition=function () {
			}
			this.__div.appendChild(this._svg_9);
		} else
		if (hotspot.skinid=='via-5') {
			this.__div=document.createElement('div');
			this.__div.ggId="via-5";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : 236px;';
			hs+='position : absolute;';
			hs+='top : 249px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function () {
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.setActiveHotspot(me.hotspot);
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.setActiveHotspot(null);
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ggUpdatePosition=function () {
			}
			this._pulsebranco320=document.createElement('div');
			this._pulsebranco320__img=document.createElement('img');
			this._pulsebranco320__img.className='ggskin ggskin_svg';
			this._pulsebranco320__img.setAttribute('src',basePath + 'images/pulsebranco320.svg');
			this._pulsebranco320__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._pulsebranco320__img['ondragstart']=function() { return false; };
			this._pulsebranco320.appendChild(this._pulsebranco320__img);
			this._pulsebranco320.ggId="pulse-branco-3";
			this._pulsebranco320.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._pulsebranco320.ggVisible=true;
			this._pulsebranco320.className='ggskin ggskin_svg ';
			this._pulsebranco320.ggType='svg';
			hs ='';
			hs+='height : 50px;';
			hs+='left : -25px;';
			hs+='position : absolute;';
			hs+='top : -25px;';
			hs+='visibility : inherit;';
			hs+='width : 50px;';
			this._pulsebranco320.setAttribute('style',hs);
			this._pulsebranco320.style[domTransform + 'Origin']='50% 50%';
			me._pulsebranco320.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._pulsebranco320.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._pulsebranco320.ggUpdatePosition=function () {
			}
			this.__div.appendChild(this._pulsebranco320);
			this._svg_10=document.createElement('div');
			this._svg_10__img=document.createElement('img');
			this._svg_10__img.className='ggskin ggskin_svg';
			this._svg_10__img.setAttribute('src',basePath + 'images/svg_10.svg');
			this._svg_10__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._svg_10__img['ondragstart']=function() { return false; };
			this._svg_10.appendChild(this._svg_10__img);
			this._svg_10.ggId="Svg 10";
			this._svg_10.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._svg_10.ggVisible=true;
			this._svg_10.className='ggskin ggskin_svg ';
			this._svg_10.ggType='svg';
			hs ='';
			hs+='cursor : pointer;';
			hs+='height : 77px;';
			hs+='left : -30px;';
			hs+='position : absolute;';
			hs+='top : -22px;';
			hs+='visibility : inherit;';
			hs+='width : 69px;';
			this._svg_10.setAttribute('style',hs);
			this._svg_10.style[domTransform + 'Origin']='50% 50%';
			me._svg_10.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._svg_10.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._svg_10.onclick=function () {
				me.player.openNext("{node20}","");
			}
			this._svg_10.ggUpdatePosition=function () {
			}
			this.__div.appendChild(this._svg_10);
		} else
		if (hotspot.skinid=='via-6') {
			this.__div=document.createElement('div');
			this.__div.ggId="via-6";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : 236px;';
			hs+='position : absolute;';
			hs+='top : 249px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function () {
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.setActiveHotspot(me.hotspot);
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.setActiveHotspot(null);
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ggUpdatePosition=function () {
			}
			this._pulsebranco319=document.createElement('div');
			this._pulsebranco319__img=document.createElement('img');
			this._pulsebranco319__img.className='ggskin ggskin_svg';
			this._pulsebranco319__img.setAttribute('src',basePath + 'images/pulsebranco319.svg');
			this._pulsebranco319__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._pulsebranco319__img['ondragstart']=function() { return false; };
			this._pulsebranco319.appendChild(this._pulsebranco319__img);
			this._pulsebranco319.ggId="pulse-branco-3";
			this._pulsebranco319.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._pulsebranco319.ggVisible=true;
			this._pulsebranco319.className='ggskin ggskin_svg ';
			this._pulsebranco319.ggType='svg';
			hs ='';
			hs+='height : 50px;';
			hs+='left : -25px;';
			hs+='position : absolute;';
			hs+='top : -25px;';
			hs+='visibility : inherit;';
			hs+='width : 50px;';
			this._pulsebranco319.setAttribute('style',hs);
			this._pulsebranco319.style[domTransform + 'Origin']='50% 50%';
			me._pulsebranco319.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._pulsebranco319.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._pulsebranco319.ggUpdatePosition=function () {
			}
			this.__div.appendChild(this._pulsebranco319);
			this._svg_11=document.createElement('div');
			this._svg_11__img=document.createElement('img');
			this._svg_11__img.className='ggskin ggskin_svg';
			this._svg_11__img.setAttribute('src',basePath + 'images/svg_11.svg');
			this._svg_11__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._svg_11__img['ondragstart']=function() { return false; };
			this._svg_11.appendChild(this._svg_11__img);
			this._svg_11.ggId="Svg 11";
			this._svg_11.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._svg_11.ggVisible=true;
			this._svg_11.className='ggskin ggskin_svg ';
			this._svg_11.ggType='svg';
			hs ='';
			hs+='cursor : pointer;';
			hs+='height : 74px;';
			hs+='left : -32px;';
			hs+='position : absolute;';
			hs+='top : -22px;';
			hs+='visibility : inherit;';
			hs+='width : 62px;';
			this._svg_11.setAttribute('style',hs);
			this._svg_11.style[domTransform + 'Origin']='50% 50%';
			me._svg_11.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._svg_11.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._svg_11.onclick=function () {
				me.player.openNext("{node21}","");
			}
			this._svg_11.ggUpdatePosition=function () {
			}
			this.__div.appendChild(this._svg_11);
		} else
		if (hotspot.skinid=='via-7') {
			this.__div=document.createElement('div');
			this.__div.ggId="via-7";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : 236px;';
			hs+='position : absolute;';
			hs+='top : 249px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function () {
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.setActiveHotspot(me.hotspot);
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.setActiveHotspot(null);
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ggUpdatePosition=function () {
			}
			this._pulsebranco318=document.createElement('div');
			this._pulsebranco318__img=document.createElement('img');
			this._pulsebranco318__img.className='ggskin ggskin_svg';
			this._pulsebranco318__img.setAttribute('src',basePath + 'images/pulsebranco318.svg');
			this._pulsebranco318__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._pulsebranco318__img['ondragstart']=function() { return false; };
			this._pulsebranco318.appendChild(this._pulsebranco318__img);
			this._pulsebranco318.ggId="pulse-branco-3";
			this._pulsebranco318.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._pulsebranco318.ggVisible=true;
			this._pulsebranco318.className='ggskin ggskin_svg ';
			this._pulsebranco318.ggType='svg';
			hs ='';
			hs+='height : 50px;';
			hs+='left : -25px;';
			hs+='position : absolute;';
			hs+='top : -25px;';
			hs+='visibility : inherit;';
			hs+='width : 50px;';
			this._pulsebranco318.setAttribute('style',hs);
			this._pulsebranco318.style[domTransform + 'Origin']='50% 50%';
			me._pulsebranco318.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._pulsebranco318.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._pulsebranco318.ggUpdatePosition=function () {
			}
			this.__div.appendChild(this._pulsebranco318);
			this._svg_12=document.createElement('div');
			this._svg_12__img=document.createElement('img');
			this._svg_12__img.className='ggskin ggskin_svg';
			this._svg_12__img.setAttribute('src',basePath + 'images/svg_12.svg');
			this._svg_12__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._svg_12__img['ondragstart']=function() { return false; };
			this._svg_12.appendChild(this._svg_12__img);
			this._svg_12.ggId="Svg 12";
			this._svg_12.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._svg_12.ggVisible=true;
			this._svg_12.className='ggskin ggskin_svg ';
			this._svg_12.ggType='svg';
			hs ='';
			hs+='cursor : pointer;';
			hs+='height : 77px;';
			hs+='left : -33px;';
			hs+='position : absolute;';
			hs+='top : -22px;';
			hs+='visibility : inherit;';
			hs+='width : 75px;';
			this._svg_12.setAttribute('style',hs);
			this._svg_12.style[domTransform + 'Origin']='50% 50%';
			me._svg_12.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._svg_12.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._svg_12.onclick=function () {
				me.player.openNext("{node21}","");
			}
			this._svg_12.ggUpdatePosition=function () {
			}
			this.__div.appendChild(this._svg_12);
		} else
		if (hotspot.skinid=='via-8') {
			this.__div=document.createElement('div');
			this.__div.ggId="via-8";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : 236px;';
			hs+='position : absolute;';
			hs+='top : 249px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function () {
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.setActiveHotspot(me.hotspot);
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.setActiveHotspot(null);
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ggUpdatePosition=function () {
			}
			this._pulsebranco317=document.createElement('div');
			this._pulsebranco317__img=document.createElement('img');
			this._pulsebranco317__img.className='ggskin ggskin_svg';
			this._pulsebranco317__img.setAttribute('src',basePath + 'images/pulsebranco317.svg');
			this._pulsebranco317__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._pulsebranco317__img['ondragstart']=function() { return false; };
			this._pulsebranco317.appendChild(this._pulsebranco317__img);
			this._pulsebranco317.ggId="pulse-branco-3";
			this._pulsebranco317.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._pulsebranco317.ggVisible=true;
			this._pulsebranco317.className='ggskin ggskin_svg ';
			this._pulsebranco317.ggType='svg';
			hs ='';
			hs+='height : 50px;';
			hs+='left : -25px;';
			hs+='position : absolute;';
			hs+='top : -25px;';
			hs+='visibility : inherit;';
			hs+='width : 50px;';
			this._pulsebranco317.setAttribute('style',hs);
			this._pulsebranco317.style[domTransform + 'Origin']='50% 50%';
			me._pulsebranco317.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._pulsebranco317.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._pulsebranco317.ggUpdatePosition=function () {
			}
			this.__div.appendChild(this._pulsebranco317);
			this._svg_1=document.createElement('div');
			this._svg_1__img=document.createElement('img');
			this._svg_1__img.className='ggskin ggskin_svg';
			this._svg_1__img.setAttribute('src',basePath + 'images/svg_1.svg');
			this._svg_1__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._svg_1__img['ondragstart']=function() { return false; };
			this._svg_1.appendChild(this._svg_1__img);
			this._svg_1.ggId="Svg 1";
			this._svg_1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._svg_1.ggVisible=true;
			this._svg_1.className='ggskin ggskin_svg ';
			this._svg_1.ggType='svg';
			hs ='';
			hs+='cursor : pointer;';
			hs+='height : 74px;';
			hs+='left : -44px;';
			hs+='position : absolute;';
			hs+='top : -22px;';
			hs+='visibility : inherit;';
			hs+='width : 88px;';
			this._svg_1.setAttribute('style',hs);
			this._svg_1.style[domTransform + 'Origin']='50% 50%';
			me._svg_1.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._svg_1.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._svg_1.onclick=function () {
				me.player.openNext("{node7}","");
			}
			this._svg_1.ggUpdatePosition=function () {
			}
			this.__div.appendChild(this._svg_1);
		} else
		if (hotspot.skinid=='via-9') {
			this.__div=document.createElement('div');
			this.__div.ggId="via-9";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : 236px;';
			hs+='position : absolute;';
			hs+='top : 249px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function () {
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.setActiveHotspot(me.hotspot);
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.setActiveHotspot(null);
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ggUpdatePosition=function () {
			}
			this._pulsebranco316=document.createElement('div');
			this._pulsebranco316__img=document.createElement('img');
			this._pulsebranco316__img.className='ggskin ggskin_svg';
			this._pulsebranco316__img.setAttribute('src',basePath + 'images/pulsebranco316.svg');
			this._pulsebranco316__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._pulsebranco316__img['ondragstart']=function() { return false; };
			this._pulsebranco316.appendChild(this._pulsebranco316__img);
			this._pulsebranco316.ggId="pulse-branco-3";
			this._pulsebranco316.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._pulsebranco316.ggVisible=true;
			this._pulsebranco316.className='ggskin ggskin_svg ';
			this._pulsebranco316.ggType='svg';
			hs ='';
			hs+='height : 50px;';
			hs+='left : -25px;';
			hs+='position : absolute;';
			hs+='top : -25px;';
			hs+='visibility : inherit;';
			hs+='width : 50px;';
			this._pulsebranco316.setAttribute('style',hs);
			this._pulsebranco316.style[domTransform + 'Origin']='50% 50%';
			me._pulsebranco316.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._pulsebranco316.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._pulsebranco316.ggUpdatePosition=function () {
			}
			this.__div.appendChild(this._pulsebranco316);
			this._svg_13=document.createElement('div');
			this._svg_13__img=document.createElement('img');
			this._svg_13__img.className='ggskin ggskin_svg';
			this._svg_13__img.setAttribute('src',basePath + 'images/svg_13.svg');
			this._svg_13__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._svg_13__img['ondragstart']=function() { return false; };
			this._svg_13.appendChild(this._svg_13__img);
			this._svg_13.ggId="Svg 13";
			this._svg_13.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._svg_13.ggVisible=true;
			this._svg_13.className='ggskin ggskin_svg ';
			this._svg_13.ggType='svg';
			hs ='';
			hs+='cursor : pointer;';
			hs+='height : 73px;';
			hs+='left : -40px;';
			hs+='position : absolute;';
			hs+='top : -22px;';
			hs+='visibility : inherit;';
			hs+='width : 81px;';
			this._svg_13.setAttribute('style',hs);
			this._svg_13.style[domTransform + 'Origin']='50% 50%';
			me._svg_13.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._svg_13.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._svg_13.onclick=function () {
				me.player.openNext("{node8}","");
			}
			this._svg_13.ggUpdatePosition=function () {
			}
			this.__div.appendChild(this._svg_13);
		} else
		if (hotspot.skinid=='via-10') {
			this.__div=document.createElement('div');
			this.__div.ggId="via-10";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : 236px;';
			hs+='position : absolute;';
			hs+='top : 249px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function () {
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.setActiveHotspot(me.hotspot);
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.setActiveHotspot(null);
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ggUpdatePosition=function () {
			}
			this._pulsebranco315=document.createElement('div');
			this._pulsebranco315__img=document.createElement('img');
			this._pulsebranco315__img.className='ggskin ggskin_svg';
			this._pulsebranco315__img.setAttribute('src',basePath + 'images/pulsebranco315.svg');
			this._pulsebranco315__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._pulsebranco315__img['ondragstart']=function() { return false; };
			this._pulsebranco315.appendChild(this._pulsebranco315__img);
			this._pulsebranco315.ggId="pulse-branco-3";
			this._pulsebranco315.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._pulsebranco315.ggVisible=true;
			this._pulsebranco315.className='ggskin ggskin_svg ';
			this._pulsebranco315.ggType='svg';
			hs ='';
			hs+='height : 50px;';
			hs+='left : -25px;';
			hs+='position : absolute;';
			hs+='top : -25px;';
			hs+='visibility : inherit;';
			hs+='width : 50px;';
			this._pulsebranco315.setAttribute('style',hs);
			this._pulsebranco315.style[domTransform + 'Origin']='50% 50%';
			me._pulsebranco315.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._pulsebranco315.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._pulsebranco315.ggUpdatePosition=function () {
			}
			this.__div.appendChild(this._pulsebranco315);
			this._svg_14=document.createElement('div');
			this._svg_14__img=document.createElement('img');
			this._svg_14__img.className='ggskin ggskin_svg';
			this._svg_14__img.setAttribute('src',basePath + 'images/svg_14.svg');
			this._svg_14__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._svg_14__img['ondragstart']=function() { return false; };
			this._svg_14.appendChild(this._svg_14__img);
			this._svg_14.ggId="Svg 14";
			this._svg_14.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._svg_14.ggVisible=true;
			this._svg_14.className='ggskin ggskin_svg ';
			this._svg_14.ggType='svg';
			hs ='';
			hs+='cursor : pointer;';
			hs+='height : 60px;';
			hs+='left : -42px;';
			hs+='position : absolute;';
			hs+='top : -22px;';
			hs+='visibility : inherit;';
			hs+='width : 85px;';
			this._svg_14.setAttribute('style',hs);
			this._svg_14.style[domTransform + 'Origin']='50% 50%';
			me._svg_14.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._svg_14.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._svg_14.onclick=function () {
				me.player.openNext("{node9}","");
			}
			this._svg_14.ggUpdatePosition=function () {
			}
			this.__div.appendChild(this._svg_14);
		} else
		if (hotspot.skinid=='via-11') {
			this.__div=document.createElement('div');
			this.__div.ggId="via-11";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : 236px;';
			hs+='position : absolute;';
			hs+='top : 249px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function () {
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.setActiveHotspot(me.hotspot);
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.setActiveHotspot(null);
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ggUpdatePosition=function () {
			}
			this._pulsebranco314=document.createElement('div');
			this._pulsebranco314__img=document.createElement('img');
			this._pulsebranco314__img.className='ggskin ggskin_svg';
			this._pulsebranco314__img.setAttribute('src',basePath + 'images/pulsebranco314.svg');
			this._pulsebranco314__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._pulsebranco314__img['ondragstart']=function() { return false; };
			this._pulsebranco314.appendChild(this._pulsebranco314__img);
			this._pulsebranco314.ggId="pulse-branco-3";
			this._pulsebranco314.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._pulsebranco314.ggVisible=true;
			this._pulsebranco314.className='ggskin ggskin_svg ';
			this._pulsebranco314.ggType='svg';
			hs ='';
			hs+='height : 50px;';
			hs+='left : -25px;';
			hs+='position : absolute;';
			hs+='top : -25px;';
			hs+='visibility : inherit;';
			hs+='width : 50px;';
			this._pulsebranco314.setAttribute('style',hs);
			this._pulsebranco314.style[domTransform + 'Origin']='50% 50%';
			me._pulsebranco314.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._pulsebranco314.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._pulsebranco314.ggUpdatePosition=function () {
			}
			this.__div.appendChild(this._pulsebranco314);
			this._svg_15=document.createElement('div');
			this._svg_15__img=document.createElement('img');
			this._svg_15__img.className='ggskin ggskin_svg';
			this._svg_15__img.setAttribute('src',basePath + 'images/svg_15.svg');
			this._svg_15__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._svg_15__img['ondragstart']=function() { return false; };
			this._svg_15.appendChild(this._svg_15__img);
			this._svg_15.ggId="Svg 15";
			this._svg_15.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._svg_15.ggVisible=true;
			this._svg_15.className='ggskin ggskin_svg ';
			this._svg_15.ggType='svg';
			hs ='';
			hs+='height : 59px;';
			hs+='left : -38px;';
			hs+='position : absolute;';
			hs+='top : -22px;';
			hs+='visibility : inherit;';
			hs+='width : 78px;';
			this._svg_15.setAttribute('style',hs);
			this._svg_15.style[domTransform + 'Origin']='50% 50%';
			me._svg_15.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._svg_15.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._svg_15.onclick=function () {
				me.player.openNext("{node10}","");
			}
			this._svg_15.ggUpdatePosition=function () {
			}
			this.__div.appendChild(this._svg_15);
		} else
		if (hotspot.skinid=='via-12') {
			this.__div=document.createElement('div');
			this.__div.ggId="via-12";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : 236px;';
			hs+='position : absolute;';
			hs+='top : 249px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function () {
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.setActiveHotspot(me.hotspot);
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.setActiveHotspot(null);
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ggUpdatePosition=function () {
			}
			this._pulsebranco313=document.createElement('div');
			this._pulsebranco313__img=document.createElement('img');
			this._pulsebranco313__img.className='ggskin ggskin_svg';
			this._pulsebranco313__img.setAttribute('src',basePath + 'images/pulsebranco313.svg');
			this._pulsebranco313__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._pulsebranco313__img['ondragstart']=function() { return false; };
			this._pulsebranco313.appendChild(this._pulsebranco313__img);
			this._pulsebranco313.ggId="pulse-branco-3";
			this._pulsebranco313.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._pulsebranco313.ggVisible=true;
			this._pulsebranco313.className='ggskin ggskin_svg ';
			this._pulsebranco313.ggType='svg';
			hs ='';
			hs+='height : 50px;';
			hs+='left : -25px;';
			hs+='position : absolute;';
			hs+='top : -25px;';
			hs+='visibility : inherit;';
			hs+='width : 50px;';
			this._pulsebranco313.setAttribute('style',hs);
			this._pulsebranco313.style[domTransform + 'Origin']='50% 50%';
			me._pulsebranco313.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._pulsebranco313.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._pulsebranco313.ggUpdatePosition=function () {
			}
			this.__div.appendChild(this._pulsebranco313);
			this._svg_16=document.createElement('div');
			this._svg_16__img=document.createElement('img');
			this._svg_16__img.className='ggskin ggskin_svg';
			this._svg_16__img.setAttribute('src',basePath + 'images/svg_16.svg');
			this._svg_16__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._svg_16__img['ondragstart']=function() { return false; };
			this._svg_16.appendChild(this._svg_16__img);
			this._svg_16.ggId="Svg 16";
			this._svg_16.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._svg_16.ggVisible=true;
			this._svg_16.className='ggskin ggskin_svg ';
			this._svg_16.ggType='svg';
			hs ='';
			hs+='height : 73px;';
			hs+='left : -34px;';
			hs+='position : absolute;';
			hs+='top : -22px;';
			hs+='visibility : inherit;';
			hs+='width : 70px;';
			this._svg_16.setAttribute('style',hs);
			this._svg_16.style[domTransform + 'Origin']='50% 50%';
			me._svg_16.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._svg_16.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._svg_16.onclick=function () {
				me.player.openNext("{node11}","");
			}
			this._svg_16.ggUpdatePosition=function () {
			}
			this.__div.appendChild(this._svg_16);
		} else
		if (hotspot.skinid=='via-13') {
			this.__div=document.createElement('div');
			this.__div.ggId="via-13";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : 236px;';
			hs+='position : absolute;';
			hs+='top : 249px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function () {
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.setActiveHotspot(me.hotspot);
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.setActiveHotspot(null);
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ggUpdatePosition=function () {
			}
			this._pulsebranco312=document.createElement('div');
			this._pulsebranco312__img=document.createElement('img');
			this._pulsebranco312__img.className='ggskin ggskin_svg';
			this._pulsebranco312__img.setAttribute('src',basePath + 'images/pulsebranco312.svg');
			this._pulsebranco312__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._pulsebranco312__img['ondragstart']=function() { return false; };
			this._pulsebranco312.appendChild(this._pulsebranco312__img);
			this._pulsebranco312.ggId="pulse-branco-3";
			this._pulsebranco312.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._pulsebranco312.ggVisible=true;
			this._pulsebranco312.className='ggskin ggskin_svg ';
			this._pulsebranco312.ggType='svg';
			hs ='';
			hs+='height : 50px;';
			hs+='left : -25px;';
			hs+='position : absolute;';
			hs+='top : -25px;';
			hs+='visibility : inherit;';
			hs+='width : 50px;';
			this._pulsebranco312.setAttribute('style',hs);
			this._pulsebranco312.style[domTransform + 'Origin']='50% 50%';
			me._pulsebranco312.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._pulsebranco312.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._pulsebranco312.ggUpdatePosition=function () {
			}
			this.__div.appendChild(this._pulsebranco312);
			this._svg_17=document.createElement('div');
			this._svg_17__img=document.createElement('img');
			this._svg_17__img.className='ggskin ggskin_svg';
			this._svg_17__img.setAttribute('src',basePath + 'images/svg_17.svg');
			this._svg_17__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._svg_17__img['ondragstart']=function() { return false; };
			this._svg_17.appendChild(this._svg_17__img);
			this._svg_17.ggId="Svg 17";
			this._svg_17.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._svg_17.ggVisible=true;
			this._svg_17.className='ggskin ggskin_svg ';
			this._svg_17.ggType='svg';
			hs ='';
			hs+='cursor : pointer;';
			hs+='height : 74px;';
			hs+='left : -37px;';
			hs+='position : absolute;';
			hs+='top : -22px;';
			hs+='visibility : inherit;';
			hs+='width : 78px;';
			this._svg_17.setAttribute('style',hs);
			this._svg_17.style[domTransform + 'Origin']='50% 50%';
			me._svg_17.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._svg_17.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._svg_17.onclick=function () {
				me.player.openNext("{node11}","");
			}
			this._svg_17.ggUpdatePosition=function () {
			}
			this.__div.appendChild(this._svg_17);
		} else
		if (hotspot.skinid=='via-14') {
			this.__div=document.createElement('div');
			this.__div.ggId="via-14";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : 236px;';
			hs+='position : absolute;';
			hs+='top : 249px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function () {
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.setActiveHotspot(me.hotspot);
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.setActiveHotspot(null);
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ggUpdatePosition=function () {
			}
			this._pulsebranco311=document.createElement('div');
			this._pulsebranco311__img=document.createElement('img');
			this._pulsebranco311__img.className='ggskin ggskin_svg';
			this._pulsebranco311__img.setAttribute('src',basePath + 'images/pulsebranco311.svg');
			this._pulsebranco311__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._pulsebranco311__img['ondragstart']=function() { return false; };
			this._pulsebranco311.appendChild(this._pulsebranco311__img);
			this._pulsebranco311.ggId="pulse-branco-3";
			this._pulsebranco311.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._pulsebranco311.ggVisible=true;
			this._pulsebranco311.className='ggskin ggskin_svg ';
			this._pulsebranco311.ggType='svg';
			hs ='';
			hs+='height : 50px;';
			hs+='left : -25px;';
			hs+='position : absolute;';
			hs+='top : -25px;';
			hs+='visibility : inherit;';
			hs+='width : 50px;';
			this._pulsebranco311.setAttribute('style',hs);
			this._pulsebranco311.style[domTransform + 'Origin']='50% 50%';
			me._pulsebranco311.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._pulsebranco311.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._pulsebranco311.ggUpdatePosition=function () {
			}
			this.__div.appendChild(this._pulsebranco311);
			this._svg_18=document.createElement('div');
			this._svg_18__img=document.createElement('img');
			this._svg_18__img.className='ggskin ggskin_svg';
			this._svg_18__img.setAttribute('src',basePath + 'images/svg_18.svg');
			this._svg_18__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._svg_18__img['ondragstart']=function() { return false; };
			this._svg_18.appendChild(this._svg_18__img);
			this._svg_18.ggId="Svg 18";
			this._svg_18.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._svg_18.ggVisible=true;
			this._svg_18.className='ggskin ggskin_svg ';
			this._svg_18.ggType='svg';
			hs ='';
			hs+='cursor : pointer;';
			hs+='height : 73px;';
			hs+='left : -32px;';
			hs+='position : absolute;';
			hs+='top : -22px;';
			hs+='visibility : inherit;';
			hs+='width : 68px;';
			this._svg_18.setAttribute('style',hs);
			this._svg_18.style[domTransform + 'Origin']='50% 50%';
			me._svg_18.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._svg_18.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._svg_18.ondblclick=function () {
				me.player.openNext("{node13}","");
			}
			this._svg_18.ggUpdatePosition=function () {
			}
			this.__div.appendChild(this._svg_18);
		} else
		if (hotspot.skinid=='via-15') {
			this.__div=document.createElement('div');
			this.__div.ggId="via-15";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : 236px;';
			hs+='position : absolute;';
			hs+='top : 249px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function () {
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.setActiveHotspot(me.hotspot);
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.setActiveHotspot(null);
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ggUpdatePosition=function () {
			}
			this._pulsebranco310=document.createElement('div');
			this._pulsebranco310__img=document.createElement('img');
			this._pulsebranco310__img.className='ggskin ggskin_svg';
			this._pulsebranco310__img.setAttribute('src',basePath + 'images/pulsebranco310.svg');
			this._pulsebranco310__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._pulsebranco310__img['ondragstart']=function() { return false; };
			this._pulsebranco310.appendChild(this._pulsebranco310__img);
			this._pulsebranco310.ggId="pulse-branco-3";
			this._pulsebranco310.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._pulsebranco310.ggVisible=true;
			this._pulsebranco310.className='ggskin ggskin_svg ';
			this._pulsebranco310.ggType='svg';
			hs ='';
			hs+='height : 50px;';
			hs+='left : -25px;';
			hs+='position : absolute;';
			hs+='top : -25px;';
			hs+='visibility : inherit;';
			hs+='width : 50px;';
			this._pulsebranco310.setAttribute('style',hs);
			this._pulsebranco310.style[domTransform + 'Origin']='50% 50%';
			me._pulsebranco310.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._pulsebranco310.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._pulsebranco310.ggUpdatePosition=function () {
			}
			this.__div.appendChild(this._pulsebranco310);
			this._svg_19=document.createElement('div');
			this._svg_19__img=document.createElement('img');
			this._svg_19__img.className='ggskin ggskin_svg';
			this._svg_19__img.setAttribute('src',basePath + 'images/svg_19.svg');
			this._svg_19__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._svg_19__img['ondragstart']=function() { return false; };
			this._svg_19.appendChild(this._svg_19__img);
			this._svg_19.ggId="Svg 19";
			this._svg_19.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._svg_19.ggVisible=true;
			this._svg_19.className='ggskin ggskin_svg ';
			this._svg_19.ggType='svg';
			hs ='';
			hs+='cursor : pointer;';
			hs+='height : 73px;';
			hs+='left : -24px;';
			hs+='position : absolute;';
			hs+='top : -22px;';
			hs+='visibility : inherit;';
			hs+='width : 48px;';
			this._svg_19.setAttribute('style',hs);
			this._svg_19.style[domTransform + 'Origin']='50% 50%';
			me._svg_19.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._svg_19.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._svg_19.onclick=function () {
				me.player.openNext("{node14}","");
			}
			this._svg_19.ggUpdatePosition=function () {
			}
			this.__div.appendChild(this._svg_19);
		} else
		if (hotspot.skinid=='via-16') {
			this.__div=document.createElement('div');
			this.__div.ggId="via-16";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : 236px;';
			hs+='position : absolute;';
			hs+='top : 249px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function () {
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.setActiveHotspot(me.hotspot);
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.setActiveHotspot(null);
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ggUpdatePosition=function () {
			}
			this._pulsebranco39=document.createElement('div');
			this._pulsebranco39__img=document.createElement('img');
			this._pulsebranco39__img.className='ggskin ggskin_svg';
			this._pulsebranco39__img.setAttribute('src',basePath + 'images/pulsebranco39.svg');
			this._pulsebranco39__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._pulsebranco39__img['ondragstart']=function() { return false; };
			this._pulsebranco39.appendChild(this._pulsebranco39__img);
			this._pulsebranco39.ggId="pulse-branco-3";
			this._pulsebranco39.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._pulsebranco39.ggVisible=true;
			this._pulsebranco39.className='ggskin ggskin_svg ';
			this._pulsebranco39.ggType='svg';
			hs ='';
			hs+='height : 50px;';
			hs+='left : -25px;';
			hs+='position : absolute;';
			hs+='top : -25px;';
			hs+='visibility : inherit;';
			hs+='width : 50px;';
			this._pulsebranco39.setAttribute('style',hs);
			this._pulsebranco39.style[domTransform + 'Origin']='50% 50%';
			me._pulsebranco39.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._pulsebranco39.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._pulsebranco39.ggUpdatePosition=function () {
			}
			this.__div.appendChild(this._pulsebranco39);
			this._svg_20=document.createElement('div');
			this._svg_20__img=document.createElement('img');
			this._svg_20__img.className='ggskin ggskin_svg';
			this._svg_20__img.setAttribute('src',basePath + 'images/svg_20.svg');
			this._svg_20__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._svg_20__img['ondragstart']=function() { return false; };
			this._svg_20.appendChild(this._svg_20__img);
			this._svg_20.ggId="Svg 20";
			this._svg_20.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._svg_20.ggVisible=true;
			this._svg_20.className='ggskin ggskin_svg ';
			this._svg_20.ggType='svg';
			hs ='';
			hs+='height : 73px;';
			hs+='left : -35px;';
			hs+='position : absolute;';
			hs+='top : -22px;';
			hs+='visibility : inherit;';
			hs+='width : 72px;';
			this._svg_20.setAttribute('style',hs);
			this._svg_20.style[domTransform + 'Origin']='50% 50%';
			me._svg_20.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._svg_20.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._svg_20.onclick=function () {
				me.player.openNext("{node14}","");
			}
			this._svg_20.ggUpdatePosition=function () {
			}
			this.__div.appendChild(this._svg_20);
		} else
		if (hotspot.skinid=='via-17') {
			this.__div=document.createElement('div');
			this.__div.ggId="via-17";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : 236px;';
			hs+='position : absolute;';
			hs+='top : 249px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function () {
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.setActiveHotspot(me.hotspot);
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.setActiveHotspot(null);
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ggUpdatePosition=function () {
			}
			this._pulsebranco38=document.createElement('div');
			this._pulsebranco38__img=document.createElement('img');
			this._pulsebranco38__img.className='ggskin ggskin_svg';
			this._pulsebranco38__img.setAttribute('src',basePath + 'images/pulsebranco38.svg');
			this._pulsebranco38__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._pulsebranco38__img['ondragstart']=function() { return false; };
			this._pulsebranco38.appendChild(this._pulsebranco38__img);
			this._pulsebranco38.ggId="pulse-branco-3";
			this._pulsebranco38.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._pulsebranco38.ggVisible=true;
			this._pulsebranco38.className='ggskin ggskin_svg ';
			this._pulsebranco38.ggType='svg';
			hs ='';
			hs+='height : 50px;';
			hs+='left : -25px;';
			hs+='position : absolute;';
			hs+='top : -25px;';
			hs+='visibility : inherit;';
			hs+='width : 50px;';
			this._pulsebranco38.setAttribute('style',hs);
			this._pulsebranco38.style[domTransform + 'Origin']='50% 50%';
			me._pulsebranco38.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._pulsebranco38.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._pulsebranco38.ggUpdatePosition=function () {
			}
			this.__div.appendChild(this._pulsebranco38);
			this._svg_21=document.createElement('div');
			this._svg_21__img=document.createElement('img');
			this._svg_21__img.className='ggskin ggskin_svg';
			this._svg_21__img.setAttribute('src',basePath + 'images/svg_21.svg');
			this._svg_21__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._svg_21__img['ondragstart']=function() { return false; };
			this._svg_21.appendChild(this._svg_21__img);
			this._svg_21.ggId="Svg 21";
			this._svg_21.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._svg_21.ggVisible=true;
			this._svg_21.className='ggskin ggskin_svg ';
			this._svg_21.ggType='svg';
			hs ='';
			hs+='cursor : pointer;';
			hs+='height : 73px;';
			hs+='left : -28px;';
			hs+='position : absolute;';
			hs+='top : -22px;';
			hs+='visibility : inherit;';
			hs+='width : 57px;';
			this._svg_21.setAttribute('style',hs);
			this._svg_21.style[domTransform + 'Origin']='50% 50%';
			me._svg_21.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._svg_21.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._svg_21.onclick=function () {
				me.player.openNext("{node15}","");
			}
			this._svg_21.ggUpdatePosition=function () {
			}
			this.__div.appendChild(this._svg_21);
		} else
		if (hotspot.skinid=='via-18') {
			this.__div=document.createElement('div');
			this.__div.ggId="via-18";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : 236px;';
			hs+='position : absolute;';
			hs+='top : 249px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function () {
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.setActiveHotspot(me.hotspot);
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.setActiveHotspot(null);
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ggUpdatePosition=function () {
			}
			this._pulsebranco37=document.createElement('div');
			this._pulsebranco37__img=document.createElement('img');
			this._pulsebranco37__img.className='ggskin ggskin_svg';
			this._pulsebranco37__img.setAttribute('src',basePath + 'images/pulsebranco37.svg');
			this._pulsebranco37__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._pulsebranco37__img['ondragstart']=function() { return false; };
			this._pulsebranco37.appendChild(this._pulsebranco37__img);
			this._pulsebranco37.ggId="pulse-branco-3";
			this._pulsebranco37.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._pulsebranco37.ggVisible=true;
			this._pulsebranco37.className='ggskin ggskin_svg ';
			this._pulsebranco37.ggType='svg';
			hs ='';
			hs+='height : 50px;';
			hs+='left : -25px;';
			hs+='position : absolute;';
			hs+='top : -25px;';
			hs+='visibility : inherit;';
			hs+='width : 50px;';
			this._pulsebranco37.setAttribute('style',hs);
			this._pulsebranco37.style[domTransform + 'Origin']='50% 50%';
			me._pulsebranco37.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._pulsebranco37.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._pulsebranco37.ggUpdatePosition=function () {
			}
			this.__div.appendChild(this._pulsebranco37);
			this._svg_22=document.createElement('div');
			this._svg_22__img=document.createElement('img');
			this._svg_22__img.className='ggskin ggskin_svg';
			this._svg_22__img.setAttribute('src',basePath + 'images/svg_22.svg');
			this._svg_22__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._svg_22__img['ondragstart']=function() { return false; };
			this._svg_22.appendChild(this._svg_22__img);
			this._svg_22.ggId="Svg 22";
			this._svg_22.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._svg_22.ggVisible=true;
			this._svg_22.className='ggskin ggskin_svg ';
			this._svg_22.ggType='svg';
			hs ='';
			hs+='cursor : pointer;';
			hs+='height : 74px;';
			hs+='left : -38px;';
			hs+='position : absolute;';
			hs+='top : -22px;';
			hs+='visibility : inherit;';
			hs+='width : 76px;';
			this._svg_22.setAttribute('style',hs);
			this._svg_22.style[domTransform + 'Origin']='50% 50%';
			me._svg_22.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._svg_22.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._svg_22.onclick=function () {
				me.player.openNext("{node16}","");
			}
			this._svg_22.ggUpdatePosition=function () {
			}
			this.__div.appendChild(this._svg_22);
		} else
		if (hotspot.skinid=='via-19') {
			this.__div=document.createElement('div');
			this.__div.ggId="via-19";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : 236px;';
			hs+='position : absolute;';
			hs+='top : 249px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function () {
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.setActiveHotspot(me.hotspot);
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.setActiveHotspot(null);
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ggUpdatePosition=function () {
			}
			this._pulsebranco36=document.createElement('div');
			this._pulsebranco36__img=document.createElement('img');
			this._pulsebranco36__img.className='ggskin ggskin_svg';
			this._pulsebranco36__img.setAttribute('src',basePath + 'images/pulsebranco36.svg');
			this._pulsebranco36__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._pulsebranco36__img['ondragstart']=function() { return false; };
			this._pulsebranco36.appendChild(this._pulsebranco36__img);
			this._pulsebranco36.ggId="pulse-branco-3";
			this._pulsebranco36.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._pulsebranco36.ggVisible=true;
			this._pulsebranco36.className='ggskin ggskin_svg ';
			this._pulsebranco36.ggType='svg';
			hs ='';
			hs+='height : 50px;';
			hs+='left : -25px;';
			hs+='position : absolute;';
			hs+='top : -25px;';
			hs+='visibility : inherit;';
			hs+='width : 50px;';
			this._pulsebranco36.setAttribute('style',hs);
			this._pulsebranco36.style[domTransform + 'Origin']='50% 50%';
			me._pulsebranco36.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._pulsebranco36.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._pulsebranco36.ggUpdatePosition=function () {
			}
			this.__div.appendChild(this._pulsebranco36);
			this._svg_23=document.createElement('div');
			this._svg_23__img=document.createElement('img');
			this._svg_23__img.className='ggskin ggskin_svg';
			this._svg_23__img.setAttribute('src',basePath + 'images/svg_23.svg');
			this._svg_23__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._svg_23__img['ondragstart']=function() { return false; };
			this._svg_23.appendChild(this._svg_23__img);
			this._svg_23.ggId="Svg 23";
			this._svg_23.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._svg_23.ggVisible=true;
			this._svg_23.className='ggskin ggskin_svg ';
			this._svg_23.ggType='svg';
			hs ='';
			hs+='cursor : pointer;';
			hs+='height : 73px;';
			hs+='left : -27px;';
			hs+='position : absolute;';
			hs+='top : -22px;';
			hs+='visibility : inherit;';
			hs+='width : 54px;';
			this._svg_23.setAttribute('style',hs);
			this._svg_23.style[domTransform + 'Origin']='50% 50%';
			me._svg_23.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._svg_23.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._svg_23.onclick=function () {
				me.player.openNext("{node17}","");
			}
			this._svg_23.ggUpdatePosition=function () {
			}
			this.__div.appendChild(this._svg_23);
		} else
		if (hotspot.skinid=='via-20') {
			this.__div=document.createElement('div');
			this.__div.ggId="via-20";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : 236px;';
			hs+='position : absolute;';
			hs+='top : 249px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function () {
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.setActiveHotspot(me.hotspot);
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.setActiveHotspot(null);
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ggUpdatePosition=function () {
			}
			this._pulsebranco35=document.createElement('div');
			this._pulsebranco35__img=document.createElement('img');
			this._pulsebranco35__img.className='ggskin ggskin_svg';
			this._pulsebranco35__img.setAttribute('src',basePath + 'images/pulsebranco35.svg');
			this._pulsebranco35__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._pulsebranco35__img['ondragstart']=function() { return false; };
			this._pulsebranco35.appendChild(this._pulsebranco35__img);
			this._pulsebranco35.ggId="pulse-branco-3";
			this._pulsebranco35.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._pulsebranco35.ggVisible=true;
			this._pulsebranco35.className='ggskin ggskin_svg ';
			this._pulsebranco35.ggType='svg';
			hs ='';
			hs+='height : 50px;';
			hs+='left : -25px;';
			hs+='position : absolute;';
			hs+='top : -25px;';
			hs+='visibility : inherit;';
			hs+='width : 50px;';
			this._pulsebranco35.setAttribute('style',hs);
			this._pulsebranco35.style[domTransform + 'Origin']='50% 50%';
			me._pulsebranco35.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._pulsebranco35.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._pulsebranco35.ggUpdatePosition=function () {
			}
			this.__div.appendChild(this._pulsebranco35);
			this._svg_24=document.createElement('div');
			this._svg_24__img=document.createElement('img');
			this._svg_24__img.className='ggskin ggskin_svg';
			this._svg_24__img.setAttribute('src',basePath + 'images/svg_24.svg');
			this._svg_24__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._svg_24__img['ondragstart']=function() { return false; };
			this._svg_24.appendChild(this._svg_24__img);
			this._svg_24.ggId="Svg 24";
			this._svg_24.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._svg_24.ggVisible=true;
			this._svg_24.className='ggskin ggskin_svg ';
			this._svg_24.ggType='svg';
			hs ='';
			hs+='cursor : pointer;';
			hs+='height : 73px;';
			hs+='left : -24px;';
			hs+='position : absolute;';
			hs+='top : -22px;';
			hs+='visibility : inherit;';
			hs+='width : 48px;';
			this._svg_24.setAttribute('style',hs);
			this._svg_24.style[domTransform + 'Origin']='50% 50%';
			me._svg_24.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._svg_24.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._svg_24.onclick=function () {
				me.player.openNext("{node18}","");
			}
			this._svg_24.ggUpdatePosition=function () {
			}
			this.__div.appendChild(this._svg_24);
		} else
		if (hotspot.skinid=='via-21') {
			this.__div=document.createElement('div');
			this.__div.ggId="via-21";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : 236px;';
			hs+='position : absolute;';
			hs+='top : 249px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function () {
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.setActiveHotspot(me.hotspot);
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.setActiveHotspot(null);
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ggUpdatePosition=function () {
			}
			this._pulsebranco34=document.createElement('div');
			this._pulsebranco34__img=document.createElement('img');
			this._pulsebranco34__img.className='ggskin ggskin_svg';
			this._pulsebranco34__img.setAttribute('src',basePath + 'images/pulsebranco34.svg');
			this._pulsebranco34__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._pulsebranco34__img['ondragstart']=function() { return false; };
			this._pulsebranco34.appendChild(this._pulsebranco34__img);
			this._pulsebranco34.ggId="pulse-branco-3";
			this._pulsebranco34.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._pulsebranco34.ggVisible=true;
			this._pulsebranco34.className='ggskin ggskin_svg ';
			this._pulsebranco34.ggType='svg';
			hs ='';
			hs+='height : 50px;';
			hs+='left : -25px;';
			hs+='position : absolute;';
			hs+='top : -25px;';
			hs+='visibility : inherit;';
			hs+='width : 50px;';
			this._pulsebranco34.setAttribute('style',hs);
			this._pulsebranco34.style[domTransform + 'Origin']='50% 50%';
			me._pulsebranco34.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._pulsebranco34.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._pulsebranco34.ggUpdatePosition=function () {
			}
			this.__div.appendChild(this._pulsebranco34);
			this._svg_25=document.createElement('div');
			this._svg_25__img=document.createElement('img');
			this._svg_25__img.className='ggskin ggskin_svg';
			this._svg_25__img.setAttribute('src',basePath + 'images/svg_25.svg');
			this._svg_25__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._svg_25__img['ondragstart']=function() { return false; };
			this._svg_25.appendChild(this._svg_25__img);
			this._svg_25.ggId="Svg 25";
			this._svg_25.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._svg_25.ggVisible=true;
			this._svg_25.className='ggskin ggskin_svg ';
			this._svg_25.ggType='svg';
			hs ='';
			hs+='cursor : pointer;';
			hs+='height : 73px;';
			hs+='left : -40px;';
			hs+='position : absolute;';
			hs+='top : -22px;';
			hs+='visibility : inherit;';
			hs+='width : 82px;';
			this._svg_25.setAttribute('style',hs);
			this._svg_25.style[domTransform + 'Origin']='50% 50%';
			me._svg_25.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._svg_25.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._svg_25.onclick=function () {
				me.player.openNext("{node22}","");
			}
			this._svg_25.ggUpdatePosition=function () {
			}
			this.__div.appendChild(this._svg_25);
		} else
		if (hotspot.skinid=='via-22') {
			this.__div=document.createElement('div');
			this.__div.ggId="via-22";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : 236px;';
			hs+='position : absolute;';
			hs+='top : 249px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function () {
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.setActiveHotspot(me.hotspot);
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.setActiveHotspot(null);
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ggUpdatePosition=function () {
			}
			this._pulsebranco33=document.createElement('div');
			this._pulsebranco33__img=document.createElement('img');
			this._pulsebranco33__img.className='ggskin ggskin_svg';
			this._pulsebranco33__img.setAttribute('src',basePath + 'images/pulsebranco33.svg');
			this._pulsebranco33__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._pulsebranco33__img['ondragstart']=function() { return false; };
			this._pulsebranco33.appendChild(this._pulsebranco33__img);
			this._pulsebranco33.ggId="pulse-branco-3";
			this._pulsebranco33.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._pulsebranco33.ggVisible=true;
			this._pulsebranco33.className='ggskin ggskin_svg ';
			this._pulsebranco33.ggType='svg';
			hs ='';
			hs+='height : 50px;';
			hs+='left : -25px;';
			hs+='position : absolute;';
			hs+='top : -25px;';
			hs+='visibility : inherit;';
			hs+='width : 50px;';
			this._pulsebranco33.setAttribute('style',hs);
			this._pulsebranco33.style[domTransform + 'Origin']='50% 50%';
			me._pulsebranco33.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._pulsebranco33.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._pulsebranco33.ggUpdatePosition=function () {
			}
			this.__div.appendChild(this._pulsebranco33);
			this._svg_26=document.createElement('div');
			this._svg_26__img=document.createElement('img');
			this._svg_26__img.className='ggskin ggskin_svg';
			this._svg_26__img.setAttribute('src',basePath + 'images/svg_26.svg');
			this._svg_26__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._svg_26__img['ondragstart']=function() { return false; };
			this._svg_26.appendChild(this._svg_26__img);
			this._svg_26.ggId="Svg 26";
			this._svg_26.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._svg_26.ggVisible=true;
			this._svg_26.className='ggskin ggskin_svg ';
			this._svg_26.ggType='svg';
			hs ='';
			hs+='height : 74px;';
			hs+='left : -24px;';
			hs+='position : absolute;';
			hs+='top : -22px;';
			hs+='visibility : inherit;';
			hs+='width : 48px;';
			this._svg_26.setAttribute('style',hs);
			this._svg_26.style[domTransform + 'Origin']='50% 50%';
			me._svg_26.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._svg_26.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._svg_26.onclick=function () {
				me.player.openNext("{node23}","");
			}
			this._svg_26.ggUpdatePosition=function () {
			}
			this.__div.appendChild(this._svg_26);
		} else
		if (hotspot.skinid=='via-23') {
			this.__div=document.createElement('div');
			this.__div.ggId="via-23";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : 236px;';
			hs+='position : absolute;';
			hs+='top : 249px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function () {
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.setActiveHotspot(me.hotspot);
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.setActiveHotspot(null);
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ggUpdatePosition=function () {
			}
			this._pulsebranco32=document.createElement('div');
			this._pulsebranco32__img=document.createElement('img');
			this._pulsebranco32__img.className='ggskin ggskin_svg';
			this._pulsebranco32__img.setAttribute('src',basePath + 'images/pulsebranco32.svg');
			this._pulsebranco32__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._pulsebranco32__img['ondragstart']=function() { return false; };
			this._pulsebranco32.appendChild(this._pulsebranco32__img);
			this._pulsebranco32.ggId="pulse-branco-3";
			this._pulsebranco32.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._pulsebranco32.ggVisible=true;
			this._pulsebranco32.className='ggskin ggskin_svg ';
			this._pulsebranco32.ggType='svg';
			hs ='';
			hs+='height : 50px;';
			hs+='left : -25px;';
			hs+='position : absolute;';
			hs+='top : -25px;';
			hs+='visibility : inherit;';
			hs+='width : 50px;';
			this._pulsebranco32.setAttribute('style',hs);
			this._pulsebranco32.style[domTransform + 'Origin']='50% 50%';
			me._pulsebranco32.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._pulsebranco32.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._pulsebranco32.ggUpdatePosition=function () {
			}
			this.__div.appendChild(this._pulsebranco32);
			this._svg_27=document.createElement('div');
			this._svg_27__img=document.createElement('img');
			this._svg_27__img.className='ggskin ggskin_svg';
			this._svg_27__img.setAttribute('src',basePath + 'images/svg_27.svg');
			this._svg_27__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._svg_27__img['ondragstart']=function() { return false; };
			this._svg_27.appendChild(this._svg_27__img);
			this._svg_27.ggId="Svg 27";
			this._svg_27.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._svg_27.ggVisible=true;
			this._svg_27.className='ggskin ggskin_svg ';
			this._svg_27.ggType='svg';
			hs ='';
			hs+='cursor : pointer;';
			hs+='height : 74px;';
			hs+='left : -33px;';
			hs+='position : absolute;';
			hs+='top : -22px;';
			hs+='visibility : inherit;';
			hs+='width : 65px;';
			this._svg_27.setAttribute('style',hs);
			this._svg_27.style[domTransform + 'Origin']='50% 50%';
			me._svg_27.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._svg_27.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._svg_27.onclick=function () {
				me.player.openNext("{node24}","");
			}
			this._svg_27.ggUpdatePosition=function () {
			}
			this.__div.appendChild(this._svg_27);
		} else
		if (hotspot.skinid=='via-24') {
			this.__div=document.createElement('div');
			this.__div.ggId="via-24";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : 236px;';
			hs+='position : absolute;';
			hs+='top : 249px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function () {
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.setActiveHotspot(me.hotspot);
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.setActiveHotspot(null);
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ggUpdatePosition=function () {
			}
			this._pulsebranco31=document.createElement('div');
			this._pulsebranco31__img=document.createElement('img');
			this._pulsebranco31__img.className='ggskin ggskin_svg';
			this._pulsebranco31__img.setAttribute('src',basePath + 'images/pulsebranco31.svg');
			this._pulsebranco31__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._pulsebranco31__img['ondragstart']=function() { return false; };
			this._pulsebranco31.appendChild(this._pulsebranco31__img);
			this._pulsebranco31.ggId="pulse-branco-3";
			this._pulsebranco31.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._pulsebranco31.ggVisible=true;
			this._pulsebranco31.className='ggskin ggskin_svg ';
			this._pulsebranco31.ggType='svg';
			hs ='';
			hs+='height : 50px;';
			hs+='left : -25px;';
			hs+='position : absolute;';
			hs+='top : -25px;';
			hs+='visibility : inherit;';
			hs+='width : 50px;';
			this._pulsebranco31.setAttribute('style',hs);
			this._pulsebranco31.style[domTransform + 'Origin']='50% 50%';
			me._pulsebranco31.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._pulsebranco31.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._pulsebranco31.ggUpdatePosition=function () {
			}
			this.__div.appendChild(this._pulsebranco31);
			this._svg_28=document.createElement('div');
			this._svg_28__img=document.createElement('img');
			this._svg_28__img.className='ggskin ggskin_svg';
			this._svg_28__img.setAttribute('src',basePath + 'images/svg_28.svg');
			this._svg_28__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._svg_28__img['ondragstart']=function() { return false; };
			this._svg_28.appendChild(this._svg_28__img);
			this._svg_28.ggId="Svg 28";
			this._svg_28.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._svg_28.ggVisible=true;
			this._svg_28.className='ggskin ggskin_svg ';
			this._svg_28.ggType='svg';
			hs ='';
			hs+='height : 74px;';
			hs+='left : -43px;';
			hs+='position : absolute;';
			hs+='top : -22px;';
			hs+='visibility : inherit;';
			hs+='width : 83px;';
			this._svg_28.setAttribute('style',hs);
			this._svg_28.style[domTransform + 'Origin']='50% 50%';
			me._svg_28.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._svg_28.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._svg_28.onclick=function () {
				me.player.openNext("{node24}","");
			}
			this._svg_28.ggUpdatePosition=function () {
			}
			this.__div.appendChild(this._svg_28);
		} else
		if (hotspot.skinid=='via-25') {
			this.__div=document.createElement('div');
			this.__div.ggId="via-25";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : 236px;';
			hs+='position : absolute;';
			hs+='top : 249px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function () {
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.setActiveHotspot(me.hotspot);
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.setActiveHotspot(null);
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ggUpdatePosition=function () {
			}
			this._pulsebranco30=document.createElement('div');
			this._pulsebranco30__img=document.createElement('img');
			this._pulsebranco30__img.className='ggskin ggskin_svg';
			this._pulsebranco30__img.setAttribute('src',basePath + 'images/pulsebranco30.svg');
			this._pulsebranco30__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._pulsebranco30__img['ondragstart']=function() { return false; };
			this._pulsebranco30.appendChild(this._pulsebranco30__img);
			this._pulsebranco30.ggId="pulse-branco-3";
			this._pulsebranco30.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._pulsebranco30.ggVisible=true;
			this._pulsebranco30.className='ggskin ggskin_svg ';
			this._pulsebranco30.ggType='svg';
			hs ='';
			hs+='height : 50px;';
			hs+='left : -25px;';
			hs+='position : absolute;';
			hs+='top : -25px;';
			hs+='visibility : inherit;';
			hs+='width : 50px;';
			this._pulsebranco30.setAttribute('style',hs);
			this._pulsebranco30.style[domTransform + 'Origin']='50% 50%';
			me._pulsebranco30.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._pulsebranco30.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._pulsebranco30.ggUpdatePosition=function () {
			}
			this.__div.appendChild(this._pulsebranco30);
			this._svg_29=document.createElement('div');
			this._svg_29__img=document.createElement('img');
			this._svg_29__img.className='ggskin ggskin_svg';
			this._svg_29__img.setAttribute('src',basePath + 'images/svg_29.svg');
			this._svg_29__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._svg_29__img['ondragstart']=function() { return false; };
			this._svg_29.appendChild(this._svg_29__img);
			this._svg_29.ggId="Svg 29";
			this._svg_29.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._svg_29.ggVisible=true;
			this._svg_29.className='ggskin ggskin_svg ';
			this._svg_29.ggType='svg';
			hs ='';
			hs+='height : 59px;';
			hs+='left : -31px;';
			hs+='position : absolute;';
			hs+='top : -22px;';
			hs+='visibility : inherit;';
			hs+='width : 58px;';
			this._svg_29.setAttribute('style',hs);
			this._svg_29.style[domTransform + 'Origin']='50% 50%';
			me._svg_29.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._svg_29.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._svg_29.onclick=function () {
				me.player.openNext("{node25}","");
			}
			this._svg_29.ggUpdatePosition=function () {
			}
			this.__div.appendChild(this._svg_29);
		} else
		{
			this.__div=document.createElement('div');
			this.__div.ggId="via-26";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : 236px;';
			hs+='position : absolute;';
			hs+='top : 249px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function () {
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.setActiveHotspot(me.hotspot);
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.setActiveHotspot(null);
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ggUpdatePosition=function () {
			}
			this._pulsebranco3=document.createElement('div');
			this._pulsebranco3__img=document.createElement('img');
			this._pulsebranco3__img.className='ggskin ggskin_svg';
			this._pulsebranco3__img.setAttribute('src',basePath + 'images/pulsebranco3.svg');
			this._pulsebranco3__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._pulsebranco3__img['ondragstart']=function() { return false; };
			this._pulsebranco3.appendChild(this._pulsebranco3__img);
			this._pulsebranco3.ggId="pulse-branco-3";
			this._pulsebranco3.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._pulsebranco3.ggVisible=true;
			this._pulsebranco3.className='ggskin ggskin_svg ';
			this._pulsebranco3.ggType='svg';
			hs ='';
			hs+='height : 50px;';
			hs+='left : -25px;';
			hs+='position : absolute;';
			hs+='top : -25px;';
			hs+='visibility : inherit;';
			hs+='width : 50px;';
			this._pulsebranco3.setAttribute('style',hs);
			this._pulsebranco3.style[domTransform + 'Origin']='50% 50%';
			me._pulsebranco3.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._pulsebranco3.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._pulsebranco3.ggUpdatePosition=function () {
			}
			this.__div.appendChild(this._pulsebranco3);
			this._svg_30=document.createElement('div');
			this._svg_30__img=document.createElement('img');
			this._svg_30__img.className='ggskin ggskin_svg';
			this._svg_30__img.setAttribute('src',basePath + 'images/svg_30.svg');
			this._svg_30__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._svg_30__img['ondragstart']=function() { return false; };
			this._svg_30.appendChild(this._svg_30__img);
			this._svg_30.ggId="Svg 30";
			this._svg_30.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._svg_30.ggVisible=true;
			this._svg_30.className='ggskin ggskin_svg ';
			this._svg_30.ggType='svg';
			hs ='';
			hs+='height : 74px;';
			hs+='left : -39px;';
			hs+='position : absolute;';
			hs+='top : -22px;';
			hs+='visibility : inherit;';
			hs+='width : 75px;';
			this._svg_30.setAttribute('style',hs);
			this._svg_30.style[domTransform + 'Origin']='50% 50%';
			me._svg_30.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._svg_30.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._svg_30.onclick=function () {
				me.player.openNext("{node26}","");
			}
			this._svg_30.ggUpdatePosition=function () {
			}
			this.__div.appendChild(this._svg_30);
		}
	};
	this.addSkinHotspot=function(hotspot) {
		return new SkinHotspotClass(me,hotspot);
	}
	this.addSkin();
};