(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{311:function(e,t,o){"use strict";o.r(t);var n,r,i,a=o(3),l=o(2),c=o(41),y=o(98),w=o(162),g=o(49),s=o(22),u=o(15),p=o(47),d=o(20),m=o(16),P=o(25),f=(n={},r=new p.a({radius:5,fill:null,stroke:new d.a({color:"orange",width:2})}),n.Point=new m.c({image:r}),n.Polygon=new m.c({stroke:new d.a({color:"blue",width:3}),fill:new P.a({color:"rgba(0, 0, 255, 0.1)"})}),n.MultiLineString=new m.c({stroke:new d.a({color:"green",width:3})}),n.MultiPolygon=new m.c({stroke:new d.a({color:"yellow",width:1}),fill:new P.a({color:"rgba(255, 255, 0, 0.1)"})}),n.default=new m.c({stroke:new d.a({color:"red",width:3}),fill:new P.a({color:"rgba(255, 0, 0, 0.1)"}),image:r}),function(e){return n[e.getGeometry().getType()]||n.default}),h=new u.a({features:(new c.a).readFeatures({type:"FeatureCollection",crs:{type:"name",properties:{name:"EPSG:3857"}},features:[{type:"Feature",geometry:{type:"Point",coordinates:[0,0]}},{type:"Feature",geometry:{type:"MultiPoint",coordinates:[[-2e6,0],[0,-2e6]]}},{type:"Feature",geometry:{type:"LineString",coordinates:[[4e6,-2e6],[8e6,2e6],[9e6,2e6]]}},{type:"Feature",geometry:{type:"LineString",coordinates:[[4e6,-2e6],[8e6,2e6],[8e6,3e6]]}},{type:"Feature",geometry:{type:"Polygon",coordinates:[[[-5e6,-1e6],[-4e6,1e6],[-3e6,-1e6],[-5e6,-1e6]],[[-45e5,-5e5],[-35e5,-5e5],[-4e6,5e5],[-45e5,-5e5]]]}},{type:"Feature",geometry:{type:"MultiLineString",coordinates:[[[-1e6,-75e4],[-1e6,75e4]],[[-1e6,-75e4],[-1e6,75e4],[-5e5,0],[-1e6,-75e4]],[[1e6,-75e4],[15e5,0],[15e5,0],[1e6,75e4]],[[-75e4,-1e6],[75e4,-1e6]],[[-75e4,1e6],[75e4,1e6]]]}},{type:"Feature",geometry:{type:"MultiPolygon",coordinates:[[[[-5e6,6e6],[-5e6,8e6],[-3e6,8e6],[-3e6,6e6],[-5e6,6e6]]],[[[-3e6,6e6],[-2e6,8e6],[0,8e6],[0,6e6],[-3e6,6e6]]],[[[1e6,6e6],[1e6,8e6],[3e6,8e6],[3e6,6e6],[1e6,6e6]]]]}},{type:"Feature",geometry:{type:"GeometryCollection",geometries:[{type:"LineString",coordinates:[[-5e6,-5e6],[0,-5e6]]},{type:"Point",coordinates:[4e6,-5e6]},{type:"Polygon",coordinates:[[[1e6,-6e6],[2e6,-4e6],[3e6,-6e6],[1e6,-6e6]]]}]}}]})}),k=new s.a({source:h,style:f}),F=((i={}).Polygon=[new m.c({fill:new P.a({color:[255,255,255,.5]})}),new m.c({stroke:new d.a({color:[255,255,255,1],width:5})}),new m.c({stroke:new d.a({color:[0,153,255,1],width:3})})],i.MultiPolygon=i.Polygon,i.LineString=[new m.c({stroke:new d.a({color:[255,255,255,1],width:5})}),new m.c({stroke:new d.a({color:[0,153,255,1],width:3})})],i.MultiLineString=i.LineString,i.Point=[new m.c({image:new p.a({radius:7,fill:new P.a({color:[0,153,255,1]}),stroke:new d.a({color:[255,255,255,.75],width:1.5})}),zIndex:1e5})],i.MultiPoint=i.Point,i.GeometryCollection=i.Polygon.concat(i.Point),function(e){return i[e.getGeometry().getType()]}),S=new y.a({style:F}),L=new w.a({features:S.getFeatures(),style:F,insertVertexCondition:function(){return!S.getFeatures().getArray().every(function(e){return e.getGeometry().getType().match(/Polygon/)})}});new a.a({interactions:Object(g.a)().extend([S,L]),layers:[k],target:"map",view:new l.a({center:[0,1e6],zoom:2})})}},[[311,0]]]);
//# sourceMappingURL=modify-test.js.map