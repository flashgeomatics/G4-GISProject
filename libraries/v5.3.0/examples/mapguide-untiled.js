(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{393:function(t,i,e){"use strict";e.r(i);var a=e(3),r=e(2),o=e(73),n=e(146),p=e(7),h=e(11),E=e(1),O=e(13),s=e(97),v=e(111);var c=function(i){function t(t){i.call(this,{projection:t.projection,resolutions:t.resolutions}),this.crossOrigin_=void 0!==t.crossOrigin?t.crossOrigin:null,this.displayDpi_=void 0!==t.displayDpi?t.displayDpi:96,this.params_=t.params||{},this.url_=t.url,this.imageLoadFunction_=void 0!==t.imageLoadFunction?t.imageLoadFunction:s.b,this.hidpi_=void 0===t.hidpi||t.hidpi,this.metersPerUnit_=void 0!==t.metersPerUnit?t.metersPerUnit:1,this.ratio_=void 0!==t.ratio?t.ratio:1,this.useOverlay_=void 0!==t.useOverlay&&t.useOverlay,this.image_=null,this.renderedRevision_=0}return i&&(t.__proto__=i),((t.prototype=Object.create(i&&i.prototype)).constructor=t).prototype.getParams=function(){return this.params_},t.prototype.getImageInternal=function(t,i,e,a){i=this.findNearestResolution(i),e=this.hidpi_?e:1;var r=this.image_;if(r&&this.renderedRevision_==this.getRevision()&&r.getResolution()==i&&r.getPixelRatio()==e&&Object(E.g)(r.getExtent(),t))return r;1!=this.ratio_&&(t=t.slice(),Object(E.J)(t,this.ratio_));var o=[Object(E.E)(t)/i*e,Object(E.A)(t)/i*e];if(void 0!==this.url_){var s=this.getUrl(this.url_,this.params_,t,o,a);r=new n.a(t,i,e,s,this.crossOrigin_,this.imageLoadFunction_),Object(p.a)(r,h.a.CHANGE,this.handleImageChange,this)}else r=null;return this.image_=r,this.renderedRevision_=this.getRevision(),r},t.prototype.getImageLoadFunction=function(){return this.imageLoadFunction_},t.prototype.updateParams=function(t){Object(O.a)(this.params_,t),this.changed()},t.prototype.getUrl=function(t,i,e,a,r){var o,s,n,p,h,c,u,d,g,l=(o=e,s=a,n=this.metersPerUnit_,p=this.displayDpi_,h=Object(E.E)(o),c=Object(E.A)(o),u=s[0],d=s[1],g=.0254/p,u*c<d*h?h*n/(u*g):c*n/(d*g)),_=Object(E.x)(e),m={OPERATION:this.useOverlay_?"GETDYNAMICMAPOVERLAYIMAGE":"GETMAPIMAGE",VERSION:"2.0.0",LOCALE:"en",CLIENTAGENT:"ol/source/ImageMapGuide source",CLIP:"1",SETDISPLAYDPI:this.displayDpi_,SETDISPLAYWIDTH:Math.round(a[0]),SETDISPLAYHEIGHT:Math.round(a[1]),SETVIEWSCALE:l,SETVIEWCENTERX:_[0],SETVIEWCENTERY:_[1]};return Object(O.a)(m,i),Object(v.a)(t,m)},t.prototype.setImageLoadFunction=function(t){this.image_=null,this.imageLoadFunction_=t,this.changed()},t}(s.a);new a.a({layers:[new o.a({extent:[-87.86511444236592,43.66506556483793,-87.59539405949707,43.82385256443007],source:new c({projection:"EPSG:4326",url:"http://www.buoyshark.com/mapguide/mapagent/mapagent.fcgi?",useOverlay:!1,metersPerUnit:111319.4908,params:{MAPDEFINITION:"Library://Public/Samples/Sheboygan/Maps/Sheboygan.MapDefinition",FORMAT:"PNG",USERNAME:"OpenLayers",PASSWORD:"OpenLayers"},ratio:2})})],target:"map",view:new r.a({center:[-87.7302542509315,43.744459064634],projection:"EPSG:4326",zoom:12})})}},[[393,0]]]);
//# sourceMappingURL=mapguide-untiled.js.map