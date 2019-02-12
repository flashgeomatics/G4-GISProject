var osm = new ol.layer.Tile({
	title: 'OpenStreetMap',
	type: 'base',
	visible: true,
	source: new ol.source.OSM()
});
var bingRoads = new ol.layer.Tile({
	title: 'Bing Maps—Roads',
	type: 'base',
	visible: false,
	source: new ol.source.BingMaps({
		key: 'Ap7MOhgpT_QdGLAgZBR8UD947vI7sRU4gUmPxcz9s6PIUhIVbgRGVDJ2MRdkMv1e',
		imagerySet: 'Road'
	})
});
var bingAerial = new ol.layer.Tile({
	title: 'Bing Maps—Aerial',
	type: 'base',
	visible: false,
	source: new ol.source.BingMaps({
		key: 'Ap7MOhgpT_QdGLAgZBR8UD947vI7sRU4gUmPxcz9s6PIUhIVbgRGVDJ2MRdkMv1e',
		imagerySet: 'Aerial'
	})
});
var bingAerialWithLabels = new ol.layer.Tile({
	title: 'Bing Maps—Aerial with Labels',
	type: 'base',
	visible: false,
	source: new ol.source.BingMaps({
		key: 'Ap7MOhgpT_QdGLAgZBR8UD947vI7sRU4gUmPxcz9s6PIUhIVbgRGVDJ2MRdkMv1e',
		imagerySet: 'AerialWithLabels'
	})
});
var stamenWatercolor = new ol.layer.Tile({
	title: 'Stamen Watercolor',
	type: 'base',
	visible: false,
	source: new ol.source.Stamen({
		layer: 'watercolor'
	})
});
var stamenToner = new ol.layer.Tile({
	title: 'Stamen Toner',
	type: 'base',
	visible: false,
	source: new ol.source.Stamen({
		layer: 'toner'
	})
});
var globalland = new ol.layer.Image({
	title: 'GlobeLand30 <p><img src="https://cdn1.imggmi.com/uploads/2019/1/31/7a0685c2848dca0b78cd426e3b13f1d3-full.png" style="width:148px;height="auto"></p>',
	source: new ol.source.ImageWMS({
		url: 'http://localhost:8082/geoserver/wms',
		params: {'LAYERS': 'project:globaland'}
	}),
	visible: false,
	opacity: 0.6
});
var geojsonFormat = new ol.format.GeoJSON();
function loadFeatures1(response) {
	vectorArtificial_surface.addFeatures(geojsonFormat.readFeatures(response));
}
var vectorArtificial_surface = new ol.source.Vector({
	loader: function(extent, resolution, projection) {
		var url = 'http://localhost:8082/geoserver/project/ows?service=WFS&' +
		'version=2.0.0&request=GetFeature&typeName=project:Artificial_surface &' +
		'outputFormat=text/javascript&srsname=EPSG:3857&' +
		'format_options=callback:loadFeatures1';
		$.ajax({url: url, dataType: 'jsonp'});
	}
});
var Artificial_surface = new ol.layer.Vector({
	title: 'Artificial_surface <p><img src="https://cdn1.imggmi.com/uploads/2019/2/1/29959a62855461de466f29e8e85e4929-full.png" style="width:13px;height:auto;"></p>',
	source: vectorArtificial_surface,
	visible: false,
	style: new ol.style.Style({
		image: new ol.style.Circle({
			radius: 5.0 ,
			stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)',
				lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 3}), 
			fill: new ol.style.Fill({color: 'rgba(225,0,0,1.0)'})})

	})	
});
var geojsonFormat = new ol.format.GeoJSON();
function loadFeatures2(response) {
	vectorBare_land.addFeatures(geojsonFormat.readFeatures(response));
}
var vectorBare_land = new ol.source.Vector({
	loader: function(extent, resolution, projection) {
		var url = 'http://localhost:8082/geoserver/project/ows?service=WFS&' +
		'version=2.0.0&request=GetFeature&typeName=project:Bare_land&' +
		'outputFormat=text/javascript&srsname=EPSG:3857&' +
		'format_options=callback:loadFeatures2';
		$.ajax({url: url, dataType: 'jsonp'});
	}
});
var Bare_land = new ol.layer.Vector({
	title: 'Bare_land <p><img src="https://cdn1.imggmi.com/uploads/2019/2/1/ba12f9853dd89dd76a9f78f35e876c13-full.png" style="width:13px;height:auto;"></p> ' ,
	source:vectorBare_land,
	visible: false,
	style: new ol.style.Style({
		image: new ol.style.Circle({
			radius: 5.0 ,
			stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)',
				lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 3}), 
			fill: new ol.style.Fill({color: 'rgba(145,82,45,1.0)'})})

	})	
});
var geojsonFormat = new ol.format.GeoJSON();
function loadFeatures3(response) {
	vectorForest.addFeatures(geojsonFormat.readFeatures(response));
}
var vectorForest = new ol.source.Vector({
	loader: function(extent, resolution, projection) {
		var url = 'http://localhost:8082/geoserver/project/ows?service=WFS&' +
		'version=2.0.0&request=GetFeature&typeName=project:Forest &' +
		'outputFormat=text/javascript&srsname=EPSG:3857&' +
		'format_options=callback:loadFeatures3';
		$.ajax({url: url, dataType: 'jsonp'});
	}
});
var Forest = new ol.layer.Vector({
	title: 'Forest <p><img src="https://cdn1.imggmi.com/uploads/2019/2/1/179791cc5ccaf4a6e05acca1aa0bcc55-full.png" style="width:13px;height:auto;"></p>',
	source:vectorForest,
	visible: false,
	style: new ol.style.Style({
		image: new ol.style.Circle({
			radius: 5.0 ,
			stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)',
				lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 3}), 
			fill: new ol.style.Fill({color: 'rgba(51,160,44,1.0)'})})

	})	
});
var geojsonFormat = new ol.format.GeoJSON();
function loadFeatures4(response) {
	vectorCultivated_land.addFeatures(geojsonFormat.readFeatures(response));
}
var vectorCultivated_land = new ol.source.Vector({
	loader: function(extent, resolution, projection) {
		var url = 'http://localhost:8082/geoserver/project/ows?service=WFS&' +
		'version=2.0.0&request=GetFeature&typeName=project:Cultivated _land&' +
		'outputFormat=text/javascript&srsname=EPSG:3857&' +
		'format_options=callback:loadFeatures4';
		$.ajax({url: url, dataType: 'jsonp'});
	}
});
var Cultivated_land = new ol.layer.Vector({
	title: 'Cultivated_land <p><img src="https://cdn1.imggmi.com/uploads/2019/2/1/152289505ce699f58266970ac91263d6-full.png" style="width:13px;height:auto;"></p>',
	source: vectorCultivated_land,
	visible: false,
	style: new ol.style.Style({
		image: new ol.style.Circle({
			radius: 5.0 ,
			stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)',
				lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 3}), 
			fill: new ol.style.Fill({color: 'rgba(32,93,58,1.0)'})})

	})	
});
var geojsonFormat = new ol.format.GeoJSON();
function loadFeatures5(response) {
	vectorGrass_land.addFeatures(geojsonFormat.readFeatures(response));
}
var vectorGrass_land= new ol.source.Vector({
	loader: function(extent, resolution, projection) {
		var url = 'http://localhost:8082/geoserver/project/ows?service=WFS&' +
		'version=2.0.0&request=GetFeature&typeName=	project:Grass_land&' +
		'outputFormat=text/javascript&srsname=EPSG:3857&' +
		'format_options=callback:loadFeatures5';
		$.ajax({url: url, dataType: 'jsonp'});
	}
});
var Grass_land = new ol.layer.Vector({
	title: 'Grass_land <p><img src="https://cdn1.imggmi.com/uploads/2019/2/1/70e752f9ac64e358cbed6406acd66955-full.png" style="width:13px;height:auto;"></p>',
	source: vectorGrass_land,
	visible: false,
	style: new ol.style.Style({
		image: new ol.style.Circle({
			radius: 5.0 ,
			stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)',
				lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 3}), 
			fill: new ol.style.Fill({color: 'rgba(53,200,87,1.0)'})})

	})	
});
var geojsonFormat = new ol.format.GeoJSON();
function loadFeatures6(response) {
	vectorShrub_land.addFeatures(geojsonFormat.readFeatures(response));
}
var vectorShrub_land= new ol.source.Vector({
	loader: function(extent, resolution, projection) {
		var url = 'http://localhost:8082/geoserver/project/ows?service=WFS&' +
		'version=2.0.0&request=GetFeature&typeName=	project:Shrub_land&' +
		'outputFormat=text/javascript&srsname=EPSG:3857&' +
		'format_options=callback:loadFeatures6';
		$.ajax({url: url, dataType: 'jsonp'});
	}
});
var Shrub_land = new ol.layer.Vector({
	title: 'Shrub_land <p><img src="https://cdn1.imggmi.com/uploads/2019/2/1/423a2ac9b963ac1774781ee0e11f2760-full.png" style="width:13px;height:auto;"></p>',
	source:vectorShrub_land,
	visible: false,
	style: new ol.style.Style({
		image: new ol.style.Circle({
			radius: 5.0 ,
			stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)',
				lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 3}), 
			fill: new ol.style.Fill({color: 'rgba(255,127,0,1.0)'})})

	})	
});
var geojsonFormat = new ol.format.GeoJSON();
function loadFeatures7(response) {
	vectorWater_body.addFeatures(geojsonFormat.readFeatures(response));
}
var vectorWater_body= new ol.source.Vector({
	loader: function(extent, resolution, projection) {
		var url = 'http://localhost:8082/geoserver/project/ows?service=WFS&' +
		'version=2.0.0&request=GetFeature&typeName=	project:Water_body&' +
		'outputFormat=text/javascript&srsname=EPSG:3857&' +
		'format_options=callback:loadFeatures7';
		$.ajax({url: url, dataType: 'jsonp'});
	}
});
var Water_body = new ol.layer.Vector({
	title: 'Water_body <p><img src="https://cdn1.imggmi.com/uploads/2019/2/1/d8a08dad70aa2bad1bee59ee3b541933-full.png" style="width:13px;height:auto;"></p>',
	source:vectorWater_body,
	visible: false,
	style: new ol.style.Style({
		image: new ol.style.Circle({
			radius: 5.0 ,
			stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)',
				lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 3}), 
			fill: new ol.style.Fill({color: 'rgba(25,161,219,1.0)'})})

	})	
});
var geojsonFormat = new ol.format.GeoJSON();
function loadFeatures8(response) {
	vectorWet_land.addFeatures(geojsonFormat.readFeatures(response));
}
var vectorWet_land= new ol.source.Vector({
	loader: function(extent, resolution, projection) {
		var url = 'http://localhost:8082/geoserver/project/ows?service=WFS&' +
		'version=2.0.0&request=GetFeature&typeName=	project:Wet_land&' +
		'outputFormat=text/javascript&srsname=EPSG:3857&' +
		'format_options=callback:loadFeatures8';
		$.ajax({url: url, dataType: 'jsonp'});
	}
});
var Wet_land = new ol.layer.Vector({
	title: 'Wet_land <p><img src="https://cdn1.imggmi.com/uploads/2019/2/1/528469425be14cc3b75157150497c3af-full.png" style="width:13px;height:auto;"></p>',
	source:vectorWet_land,
	visible: false,
	style: new ol.style.Style({
		image: new ol.style.Circle({
			radius: 5.0 ,
			stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)',
				lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 3}), 
			fill: new ol.style.Fill({color: 'rgba(31,120,180,1.0)'})})

	})	
});

var map = new ol.Map({
	target: document.getElementById('map'),
	layers: [
	new ol.layer.Group({
		title: 'Basemaps',
		layers: [bingAerial,bingRoads,stamenWatercolor,stamenToner,osm]
	}),
	new ol.layer.Group({
		title: 'layers',
		layers: [globalland, Water_body, Wet_land, Shrub_land, Forest, Grass_land,Bare_land, Cultivated_land, Artificial_surface]
	})
	],
	view: new ol.View({
		center: ol.proj.fromLonLat([9.1791, 45.4883]),
		zoom: 12,
		minZoom:12,
		maxZoom: 20
	}),
	controls: ol.control.defaults().extend([
		new ol.control.ScaleLine(),
		new ol.control.FullScreen(),
		new ol.control.OverviewMap(),
		new ol.control.MousePosition({
			coordinateFormat: ol.coordinate.createStringXY(4),
			projection: 'EPSG:4326'
		})
		]),
	interactions: ol.interaction.defaults({pinchZoom: false}).extend([
		new ol.interaction.PinchZoom({
            constrainResolution: true // force zooming to a integer zoom
        })
		])
});
var layerSwitcher = new ol.control.LayerSwitcher({});
map.addControl(layerSwitcher);
//adding popup
var elementPopup = document.getElementById('popup');
var popup = new ol.Overlay({
	element: elementPopup
});
map.addOverlay(popup);
map.on('click', function(event) {
	var feature = map.forEachFeatureAtPixel(event.pixel, function(feature, layer) {
		return feature;
	});
	if (feature != null) {
		var pixel = event.pixel;
		var coord = map.getCoordinateFromPixel(pixel);
		popup.setPosition(coord);
		$(elementPopup).attr('title', '<b>Point_Attributes</b>');
		$(elementPopup).attr('data-content', '<b>Id: </b>' + feature.get('id') +
			'</br></br><b>Class: </b>' + feature.get('class')+
			'</br><b>Certainty: </b>' + feature.get('Certainty') +
			'</br><b>Time: </b>' + feature.get('time') +
			'</br></br><b>North Image: </b>' + '<img id="north" alt="North Image" width="25" height="20" onclick="window.open(this.src)" onmouseover="" style="cursor: pointer;" />' +
			'</br></br><b>East Image: </b>' + '<img id="east" alt="East Image" width="25" height="20" onclick="window.open(this.src)" onmouseover="" style="cursor: pointer;" />' +
			'</br></br><b>South Image: </b>' + '<img id="south" alt="South Image" width="25" height="20" onclick="window.open(this.src)" onmouseover="" style="cursor: pointer;" />' +
			'</br></br><b>West Image: </b>' + '<img id="west" alt="West Image" width="25" height="20" onclick="window.open(this.src)" onmouseover="" style="cursor: pointer;" />'
			);
		$(elementPopup).popover({'placement': 'top', 'html': true});
		$(elementPopup).popover('show');
		document.getElementById('north').src = feature.get('link_n');
		document.getElementById('east').src = feature.get('link_e');
		document.getElementById('south').src = feature.get('link_s');
		document.getElementById('west').src = feature.get('link_w');
	}
});
map.on('pointermove', function(e) {
if (e.dragging) {
$(elementPopup).popover('destroy');
return;
}
var pixel = map.getEventPixel(e.originalEvent);
var hit = map.hasFeatureAtPixel(pixel);
map.getTarget().style.cursor = hit ? 'pointer' : '';
});
//wms info
map.on('click', function(event) {
document.getElementById('get-feature-info').innerHTML = '';
var viewResolution = (map.getView().getResolution());
var url = globalland.getSource().getGetFeatureInfoUrl(event.coordinate,viewResolution, 'EPSG:3857', {'INFO_FORMAT': 'text/html'});
if (url)document.getElementById('get-feature-info').innerHTML = '<iframe seamless src="' + url + '"></iframe>';
});
