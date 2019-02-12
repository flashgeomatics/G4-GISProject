<?xml version="1.0" encoding="UTF-8"?>
<StyledLayerDescriptor version="1.0.0" xmlns="http://www.opengis.net/sld" xmlns:ogc="http://www.opengis.net/ogc"
  xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://www.opengis.net/sld http://schemas.opengis.net/sld/1.0.0/StyledLayerDescriptor.xsd">
  <NamedLayer>
    <Name>custom_dtm</Name>
    <UserStyle>
      <Name>custom_dtm</Name>
      <Title>custom dtm style</Title>
      <Abstract>Elevation color progression in blue scale</Abstract>
      <FeatureTypeStyle>
        <Rule>
          <RasterSymbolizer>
            <Opacity>1.0</Opacity>
            <ColorMap>
              <ColorMapEntry color="#000000" quantity="-500" label="values" opacity="0.0" />
              <ColorMapEntry color="#B3FFFF" quantity="0" label="values" />
              <ColorMapEntry color="#80AAFF" quantity="1000" label="values" />
              <ColorMapEntry color="#0040FF" quantity="2000" label="values"/>
            </ColorMap>
          </RasterSymbolizer>
        </Rule>
      </FeatureTypeStyle>
    </UserStyle>
  </NamedLayer>
</StyledLayerDescriptor>