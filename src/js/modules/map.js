const map = () => {
    ymaps.ready(init);

    function init() {
        let map = new ymaps.Map("map", {
            center: [55.67356422664926, 37.557227313491786], // ваши данные
            zoom: 15
        });
        let myPlacemark = new ymaps.Placemark([55.67356422664926, 37.557227313491786], {}, {

        });
        map.geoObjects.add(myPlacemark);
    }
}
export default map;