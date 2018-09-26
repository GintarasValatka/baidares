jQuery(document).ready(function () {
    jQuery("#my_nanogallery2").nanogallery2({
        items:[
            {
                src:   'images/g1.jpg',		        
                srct:  'images/g1.jpg'	      
            },
            { src: 'images/g2.jpg', srct: 'images/g2.jpg' },
            { src: 'images/g3.jpg', srct: 'images/g3.jpg' },
            { src: 'images/g4.jpg', srct: 'images/g4.jpg' },
            { src: 'images/g5.jpg', srct: 'images/g5.jpg' },
            { src: 'images/g6.jpg', srct: 'images/g6.jpg' },
            { src: 'images/g7.jpg', srct: 'images/g7.jpg' },
            { src: 'images/g8.jpg', srct: 'images/g8.jpg' },
            { src: 'images/g9.jpg', srct: 'images/g9.jpg' },
            { src: 'images/g10.jpg', srct: 'images/g10.jpg' },
            { src: 'images/g11.jpg', srct: 'images/g11.jpg' },
            { src: 'images/g12.jpg', srct: 'images/g12.jpg' },
            { src: 'images/g13.jpg', srct: 'images/g13.jpg' },
            { src: 'images/g14.jpg', srct: 'images/g14.jpg' },
            { src: 'images/g15.jpg', srct: 'images/g15.jpg' },
            { src: 'images/g16.jpg', srct: 'images/g16.jpg' },
            { src: 'images/g17.jpg', srct: 'images/g17.jpg' },
            { src: 'images/g18.jpg', srct: 'images/g18.jpg' },
            { src: 'images/g19.jpg', srct: 'images/g19.jpg' },
            { src: 'images/g20.jpg', srct: 'images/g20.jpg' },
            { src: 'images/g21.jpg', srct: 'images/g21.jpg' },
            { src: 'images/g22.jpg', srct: 'images/g22.jpg' },
            { src: 'images/g23.jpg', srct: 'images/g23.jpg' },
            { src: 'images/g24.jpg', srct: 'images/g24.jpg' },
            { src: 'images/g25.jpg', srct: 'images/g25.jpg' },
            { src: 'images/g26.jpg', srct: 'images/g26.jpg' },
            { src: 'images/g27.jpg', srct: 'images/g27.jpg' },
            { src: 'images/g28.jpg', srct: 'images/g28.jpg' },
            { src: 'images/g29.jpg', srct: 'images/g29.jpg' },
            { src: 'images/g30.jpg', srct: 'images/g30.jpg' },
            { src: 'images/g31.jpg', srct: 'images/g31.jpg' },
            { src: 'images/g32.jpg', srct: 'images/g32.jpg' },
            { src: 'images/g33.jpg', srct: 'images/g33.jpg' },
            { src: 'images/g34.jpg', srct: 'images/g34.jpg' },
            { src: 'images/g35.jpg', srct: 'images/g35.jpg' },
            { src: 'images/g36.jpg', srct: 'images/g36.jpg' },
            { src: 'images/g37.jpg', srct: 'images/g37.jpg' },
            { src: 'images/g38.jpg', srct: 'images/g38.jpg' }
        ],
        thumbnailWidth:  'auto',
        thumbnailHeight: 200,
        locationHash:    false,
        thumbnailHoverEffect2: 'imageGrayOn|scale120'
    });
});

function initMap() {
    var vieta = {lat: 54.574941, lng: 24.215754};
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 12, center: vieta});
    var marker = new google.maps.Marker({position: vieta, map: map});
}


