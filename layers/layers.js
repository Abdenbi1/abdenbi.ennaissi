var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Limitesdu_sidislimane_1 = new ol.format.GeoJSON();
var features_Limitesdu_sidislimane_1 = format_Limitesdu_sidislimane_1.readFeatures(json_Limitesdu_sidislimane_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Limitesdu_sidislimane_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Limitesdu_sidislimane_1.addFeatures(features_Limitesdu_sidislimane_1);
var lyr_Limitesdu_sidislimane_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Limitesdu_sidislimane_1, 
                style: style_Limitesdu_sidislimane_1,
                popuplayertitle: 'Limite.sdu_sidislimane',
                interactive: true,
                title: '<img src="styles/legend/Limitesdu_sidislimane_1.png" /> Limite.sdu_sidislimane'
            });
var format_Pharmaciesidislimane_2 = new ol.format.GeoJSON();
var features_Pharmaciesidislimane_2 = format_Pharmaciesidislimane_2.readFeatures(json_Pharmaciesidislimane_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pharmaciesidislimane_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pharmaciesidislimane_2.addFeatures(features_Pharmaciesidislimane_2);
var lyr_Pharmaciesidislimane_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pharmaciesidislimane_2, 
                style: style_Pharmaciesidislimane_2,
                popuplayertitle: 'Pharmacie.sidislimane',
                interactive: true,
                title: '<img src="styles/legend/Pharmaciesidislimane_2.png" /> Pharmacie.sidislimane'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_Limitesdu_sidislimane_1.setVisible(true);lyr_Pharmaciesidislimane_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Limitesdu_sidislimane_1,lyr_Pharmaciesidislimane_2];
lyr_Limitesdu_sidislimane_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ID': 'ID', 'NAME': 'NAME', 'POP': 'POP', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Pharmaciesidislimane_2.set('fieldAliases', {'Name': 'Name', });
lyr_Limitesdu_sidislimane_1.set('fieldImages', {'OBJECTID': 'Range', 'ID': 'TextEdit', 'NAME': 'TextEdit', 'POP': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Pharmaciesidislimane_2.set('fieldImages', {'Name': 'TextEdit', });
lyr_Limitesdu_sidislimane_1.set('fieldLabels', {'OBJECTID': 'no label', 'ID': 'no label', 'NAME': 'no label', 'POP': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Pharmaciesidislimane_2.set('fieldLabels', {'Name': 'no label', });
lyr_Pharmaciesidislimane_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});