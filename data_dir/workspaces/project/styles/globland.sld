<?xml version="1.0" ?>
<sld:StyledLayerDescriptor version="1.0.0" xmlns="http://www.opengis.net/sld" xmlns:gml="http://www.opengis.net/gml" xmlns:ogc="http://www.opengis.net/ogc" xmlns:sld="http://www.opengis.net/sld">
    <sld:UserLayer>
        <sld:LayerFeatureConstraints>
            <sld:FeatureTypeConstraint/>
        </sld:LayerFeatureConstraints>
        <sld:UserStyle>
            <sld:Name>GlobeLand30_MI</sld:Name>
            <sld:Title/>
            <sld:FeatureTypeStyle>
                <sld:Name/>
                <sld:Rule>
                    <sld:RasterSymbolizer>
                        <sld:Geometry>
                            <ogc:PropertyName>grid</ogc:PropertyName>
                        </sld:Geometry>
                        <sld:Opacity>1</sld:Opacity>
                        <sld:ColorMap>
                            <sld:ColorMapEntry color="#0d08d8" label="Cultivated_Land" opacity="1.0" quantity="10"/>
                            <sld:ColorMapEntry color="#7e03a8" label="Forest" opacity="1.0" quantity="27.5"/>
                            <sld:ColorMapEntry color="#cb4778" label="Water_Body" opacity="1.0" quantity="45"/>
                            <sld:ColorMapEntry color="#f89541" label="Grass_Land" opacity="1.0" quantity="62.5"/>
                            <sld:ColorMapEntry color="#f0f921" label="Artificial_Land" opacity="1.0" quantity="80"/>
                        </sld:ColorMap>
                    </sld:RasterSymbolizer>
                </sld:Rule>
            </sld:FeatureTypeStyle>
        </sld:UserStyle>
    </sld:UserLayer>
</sld:StyledLayerDescriptor>