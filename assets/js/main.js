jQuery(document).ready(function ($) {
    var $canvas = $('[data-hgm-canvas]'),
        $triggers = $('[data-hgm-change]'),
        addresses = $canvas.data('hgm-addresses');

    var defaults = {
        center: new google.maps.LatLng(44.5403, -78.5463),
        zoom: 8,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var options = $.extend( {}, defaults, $canvas.data('hgm-options') );

    var map = new google.maps.Map($canvas[0], options);

    var infos = [],
        markers = [];

    $.each(addresses, function (i, v) {
        var markerOptions = {
            position: new google.maps.LatLng(v.latitude, v.longitude),
            map: map
        };

        if (v.pin != undefined && v.pin != false) {
            markerOptions.icon = v.pin;
        }

        markers[i] = new google.maps.Marker(markerOptions);

        if (v.info != undefined) {
            var infoWindowOptions = { content: v.info, size: new google.maps.Size(50, 50) };
            infos[i] = new google.maps.InfoWindow(infoWindowOptions);
        }

        google.maps.event.addListener(markers[i], 'click', function () {
            map.setZoom(options.zoom);
            map.setCenter(markers[i].getPosition());

            if (infos[i] != undefined) {
                $.each(infos, function (_i, _v) { _v.close(); });
                infos[i].open(map, markers[i]);
            }

            if (v.callback != undefined) {
                eval('(' + v.callback + ')(i, markers[i])');
            }
        });
    });

    google.maps.event.trigger(markers[0], 'click');

    $triggers.each(function () {
        var data = $(this).data('hgm-change');

        if (data == '') {
            $(this).on('change', function () {
                google.maps.event.trigger(markers[$(this).val()], 'click');
            });
        } else {
            $(this).on('click', function () {
                google.maps.event.trigger(markers[data], 'click');
            });
        }
    });
    
    // colocamos em uma variavel global, pois, quando o mapa é carregado
    // escondido ele buga deixando somente parte do mapa visivel e o resto como
    // área cinza, desse modo quando o mapa for mostrado quem está mostrando
    // pode utilizar a váriavel global para acessar o mapa e triggar alguns
    // eventos que façam com que esse bug seja corrigido:
    //
    // google.maps.event.trigger(window.hgm.map, 'resize');
    // window.hgm.map.setZoom(window.hgm.map.getZoom());

    window.hgm = {};
    window.hgm.map = map;

});
