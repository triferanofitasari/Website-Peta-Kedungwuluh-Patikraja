var wms_layers = [];


        var lyr_GoogleTerrainHybrid_0 = new ol.layer.Tile({
            'title': 'Google Terrain Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}'
            })
        });
var format_KedungwuluhKidul_1 = new ol.format.GeoJSON();
var features_KedungwuluhKidul_1 = format_KedungwuluhKidul_1.readFeatures(json_KedungwuluhKidul_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KedungwuluhKidul_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KedungwuluhKidul_1.addFeatures(features_KedungwuluhKidul_1);
var lyr_KedungwuluhKidul_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KedungwuluhKidul_1, 
                style: style_KedungwuluhKidul_1,
                popuplayertitle: 'Kedungwuluh Kidul',
                interactive: true,
                title: '<img src="styles/legend/KedungwuluhKidul_1.png" /> Kedungwuluh Kidul'
            });
var format_BalaiDesaKedungwuluhKidul_2 = new ol.format.GeoJSON();
var features_BalaiDesaKedungwuluhKidul_2 = format_BalaiDesaKedungwuluhKidul_2.readFeatures(json_BalaiDesaKedungwuluhKidul_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BalaiDesaKedungwuluhKidul_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BalaiDesaKedungwuluhKidul_2.addFeatures(features_BalaiDesaKedungwuluhKidul_2);
var lyr_BalaiDesaKedungwuluhKidul_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BalaiDesaKedungwuluhKidul_2, 
                style: style_BalaiDesaKedungwuluhKidul_2,
                popuplayertitle: 'Balai Desa Kedungwuluh Kidul',
                interactive: true,
                title: '<img src="styles/legend/BalaiDesaKedungwuluhKidul_2.png" /> Balai Desa Kedungwuluh Kidul'
            });

lyr_GoogleTerrainHybrid_0.setVisible(true);lyr_KedungwuluhKidul_1.setVisible(true);lyr_BalaiDesaKedungwuluhKidul_2.setVisible(true);
var layersList = [lyr_GoogleTerrainHybrid_0,lyr_KedungwuluhKidul_1,lyr_BalaiDesaKedungwuluhKidul_2];
lyr_KedungwuluhKidul_1.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Luas': 'Luas', 'Juml RT': 'Juml RT', 'Juml RW': 'Juml RW', });
lyr_BalaiDesaKedungwuluhKidul_2.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_KedungwuluhKidul_1.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'Luas': 'TextEdit', 'Juml RT': 'TextEdit', 'Juml RW': 'TextEdit', });
lyr_BalaiDesaKedungwuluhKidul_2.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_KedungwuluhKidul_1.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'Luas': 'no label', 'Juml RT': 'no label', 'Juml RW': 'no label', });
lyr_BalaiDesaKedungwuluhKidul_2.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_BalaiDesaKedungwuluhKidul_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});