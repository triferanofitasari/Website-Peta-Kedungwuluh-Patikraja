var wms_layers = [];


        var lyr_GoogleTerrainHybrid_0 = new ol.layer.Tile({
            'title': 'Google Terrain Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}'
            })
        });
var format_Karanganyar_1 = new ol.format.GeoJSON();
var features_Karanganyar_1 = format_Karanganyar_1.readFeatures(json_Karanganyar_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Karanganyar_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Karanganyar_1.addFeatures(features_Karanganyar_1);
var lyr_Karanganyar_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Karanganyar_1, 
                style: style_Karanganyar_1,
                popuplayertitle: 'Karanganyar',
                interactive: true,
                title: '<img src="styles/legend/Karanganyar_1.png" /> Karanganyar'
            });
var format_KantorBalaiDesaKaranganyar_2 = new ol.format.GeoJSON();
var features_KantorBalaiDesaKaranganyar_2 = format_KantorBalaiDesaKaranganyar_2.readFeatures(json_KantorBalaiDesaKaranganyar_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KantorBalaiDesaKaranganyar_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KantorBalaiDesaKaranganyar_2.addFeatures(features_KantorBalaiDesaKaranganyar_2);
var lyr_KantorBalaiDesaKaranganyar_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KantorBalaiDesaKaranganyar_2, 
                style: style_KantorBalaiDesaKaranganyar_2,
                popuplayertitle: 'Kantor Balai Desa Karanganyar',
                interactive: true,
                title: '<img src="styles/legend/KantorBalaiDesaKaranganyar_2.png" /> Kantor Balai Desa Karanganyar'
            });

lyr_GoogleTerrainHybrid_0.setVisible(true);lyr_Karanganyar_1.setVisible(true);lyr_KantorBalaiDesaKaranganyar_2.setVisible(true);
var layersList = [lyr_GoogleTerrainHybrid_0,lyr_Karanganyar_1,lyr_KantorBalaiDesaKaranganyar_2];
lyr_Karanganyar_1.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Luas': 'Luas', 'Juml RT': 'Juml RT', 'Juml Rw': 'Juml Rw', });
lyr_KantorBalaiDesaKaranganyar_2.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_Karanganyar_1.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'Luas': 'TextEdit', 'Juml RT': 'TextEdit', 'Juml Rw': 'TextEdit', });
lyr_KantorBalaiDesaKaranganyar_2.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_Karanganyar_1.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'Luas': 'no label', 'Juml RT': 'no label', 'Juml Rw': 'no label', });
lyr_KantorBalaiDesaKaranganyar_2.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_KantorBalaiDesaKaranganyar_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});