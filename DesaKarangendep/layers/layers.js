var wms_layers = [];


        var lyr_GoogleTerrainHybrid_0 = new ol.layer.Tile({
            'title': 'Google Terrain Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}'
            })
        });
var format_Karangendep_1 = new ol.format.GeoJSON();
var features_Karangendep_1 = format_Karangendep_1.readFeatures(json_Karangendep_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Karangendep_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Karangendep_1.addFeatures(features_Karangendep_1);
var lyr_Karangendep_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Karangendep_1, 
                style: style_Karangendep_1,
                popuplayertitle: 'Karangendep',
                interactive: true,
                title: '<img src="styles/legend/Karangendep_1.png" /> Karangendep'
            });
var format_BalaiDesaKarangendep_2 = new ol.format.GeoJSON();
var features_BalaiDesaKarangendep_2 = format_BalaiDesaKarangendep_2.readFeatures(json_BalaiDesaKarangendep_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BalaiDesaKarangendep_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BalaiDesaKarangendep_2.addFeatures(features_BalaiDesaKarangendep_2);
var lyr_BalaiDesaKarangendep_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BalaiDesaKarangendep_2, 
                style: style_BalaiDesaKarangendep_2,
                popuplayertitle: 'Balai Desa Karangendep',
                interactive: true,
                title: '<img src="styles/legend/BalaiDesaKarangendep_2.png" /> Balai Desa Karangendep'
            });

lyr_GoogleTerrainHybrid_0.setVisible(true);lyr_Karangendep_1.setVisible(true);lyr_BalaiDesaKarangendep_2.setVisible(true);
var layersList = [lyr_GoogleTerrainHybrid_0,lyr_Karangendep_1,lyr_BalaiDesaKarangendep_2];
lyr_Karangendep_1.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Luas': 'Luas', 'Juml RT': 'Juml RT', 'Juml RW': 'Juml RW', });
lyr_BalaiDesaKarangendep_2.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_Karangendep_1.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'Luas': 'TextEdit', 'Juml RT': 'TextEdit', 'Juml RW': 'TextEdit', });
lyr_BalaiDesaKarangendep_2.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_Karangendep_1.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'Luas': 'no label', 'Juml RT': 'no label', 'Juml RW': 'no label', });
lyr_BalaiDesaKarangendep_2.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_BalaiDesaKarangendep_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});