/**
 * Created by marcin on 18.01.15.
 */

var tuPila = angular.module("tuPila.services", []);

tuPila.factory("Event", function () {

    function Event(data) {
        this.setData(data);
    }
    Event.prototype.setData = function (data) {
        angular.extend(this, data);
    };

    return Event;
});


tuPila.factory('eventsManager', ['$http', '$q', 'Event', function ($http, $q, Event) {

    var manager;
    manager = {
        hasMoreEvents:true,
        _page: 1,
        _pool: {},
        _retrieveInstance: function (eventId, eventData) {
            var instance = this._pool[eventId];

            if (instance) {
                instance.setData(eventData);
            } else {
                instance = new Event(eventData);
                this._pool[eventId] = instance;
            }

            return instance;
        },
        _search: function (eventId) {
            return this._pool[eventId];
        },

        getEvent: function (eventId) {

            return this._search(eventId);

        },

           loadAllEvents: function () {

         var that = this;
         var deferred = $q.defer();

         var data = [
         {
         "image": {
         "image": {
         "url": "/media/events/basket-pila-logo.jpg"
         },
         "thumbnail": {
         "url": "/media/cache/ec/75/ec75a22669f4a9ba92306e0a09c59638.jpg"
         }
         },
         "user": {
         "organization": "Miasto Pi\u0142a i RCK",
         "id": 1
         },
         "owner": "Miasto Pi\u0142a i RCK",
         "tickets": [
         {
         "id": 95,
         "created_at": "2014-03-14T08:05:21.339Z",
         "updated_at": "2014-03-14T08:05:21.339Z",
         "updated_by": 1,
         "is_deleted": false,
         "type": "normalny",
         "price": "5.00"
         },
         {
         "id": 101,
         "created_at": "2014-03-18T10:33:35.989Z",
         "updated_at": "2014-03-18T10:33:35.989Z",
         "updated_by": 1,
         "is_deleted": false,
         "type": "ulgowy",
         "price": "2.00"
         },
         {
         "id": 102,
         "created_at": "2014-03-18T10:33:35.996Z",
         "updated_at": "2014-03-18T10:33:35.996Z",
         "updated_by": 1,
         "is_deleted": false,
         "type": "rodzinny",
         "price": "10.00"
         }
         ],
         "target": {
         "id": 11,
         "created_at": "2014-02-23T23:00:00Z",
         "updated_at": "2014-02-23T23:00:00Z",
         "updated_by": 1,
         "is_deleted": false,
         "name": "Bez ogranicze\u0144",
         "btn_style": "btn-default",
         "is_show": false
         },
         "images": [
         {
         "id": 1044,
         "created_at": "2015-01-16T08:13:00.164Z",
         "updated_at": "2015-01-16T08:13:00.164Z",
         "updated_by": 1,
         "is_deleted": false,
         "image": "events/basket-pila-logo.jpg"
         }
         ],
         "category": {
         "id": 1,
         "created_at": "2013-10-06T22:00:00Z",
         "updated_at": "2013-10-06T22:00:00Z",
         "updated_by": 1,
         "is_deleted": false,
         "name": "Sport i Rekreacja",
         "url": "sport_i_reakracja",
         "btn_style": "btn-info"
         },
         "id": 956,
         "created_at": "2015-01-16T08:07:54.747Z",
         "updated_at": "2015-01-16T08:32:32.643Z",
         "updated_by": 1,
         "is_deleted": false,
         "title": "KS Basket Pi\u0142a - Asseco II Gdynia",
         "description": "Kolejny mecz KS  Basket Pi\u0142a. Tym razem klub podejmuje u siebie Asseco II Gdynia. Tradycyjnie przygotowano konkursy z nagrodami dla najm\u0142odszych (McDonalds, Helios, Moona, Mi\u015b Bar-Anna \u015aledzik, Colos) natomiast dla os\u00f3b pe\u0142noletnich ca\u0142osezonowa kumulacja nagrody finansowej za trafienie z po\u0142owy 350 z\u0142!!!",
         "tickets_points": null,
         "link": "KS Basket Pi\u0142a",
         "location": "Hala Sportowo-Widowiskowa MOSiR w Pile, ul. \u017beromskiego 90",
         "organiser": "KS Basket Pi\u0142a",
         "start": "2015-01-18T13:00:00Z",
         "end": "2015-01-18T16:00:00Z",
         "url": "KS-Basket-Pila---Asseco-II-Gdynia-956",
         "is_active": true
         },
         {
         "image": {
         "image": {
         "url": "/media/events/credo-mosina.jpg"
         },
         "thumbnail": {
         "url": "/media/cache/6d/03/6d03eead798d16dfc6fa60fa16174fee.jpg"
         }
         },
         "user": {
         "organization": "Miasto Pi\u0142a i RCK",
         "id": 1
         },
         "owner": "Miasto Pi\u0142a i RCK",
         "tickets": [
         {
         "id": 62,
         "created_at": "2014-03-05T08:04:44.402Z",
         "updated_at": "2014-03-05T08:04:44.402Z",
         "updated_by": 1,
         "is_deleted": false,
         "type": "Normalny",
         "price": "5.00"
         },
         {
         "id": 244,
         "created_at": "2015-01-16T07:59:30.729Z",
         "updated_at": "2015-01-16T07:59:30.729Z",
         "updated_by": 1,
         "is_deleted": false,
         "type": "karnet (szalik klubowy) oraz poni\u017cej 13 roku \u017cycia \u2013 wst\u0119p bezp\u0142atny.",
         "price": "0.00"
         }
         ],
         "target": {
         "id": 11,
         "created_at": "2014-02-23T23:00:00Z",
         "updated_at": "2014-02-23T23:00:00Z",
         "updated_by": 1,
         "is_deleted": false,
         "name": "Bez ogranicze\u0144",
         "btn_style": "btn-default",
         "is_show": false
         },
         "images": [
         {
         "id": 1043,
         "created_at": "2015-01-16T07:46:32.929Z",
         "updated_at": "2015-01-16T07:46:32.929Z",
         "updated_by": 1,
         "is_deleted": false,
         "image": "events/credo-mosina.jpg"
         }
         ],
         "category": {
         "id": 1,
         "created_at": "2013-10-06T22:00:00Z",
         "updated_at": "2013-10-06T22:00:00Z",
         "updated_by": 1,
         "is_deleted": false,
         "name": "Sport i Rekreacja",
         "url": "sport_i_reakracja",
         "btn_style": "btn-info"
         },
         "id": 955,
         "created_at": "2015-01-16T07:52:12.771Z",
         "updated_at": "2015-01-16T07:59:48.820Z",
         "updated_by": 1,
         "is_deleted": false,
         "title": "K. S. Credo Futsal Pi\u0142a - UKS Orlik Mosina",
         "description": "Zapraszamy wszystkich serdecznie. W niedzielny wiecz\u00f3r kolejne futsalowe emocje, kt\u00f3re z pewno\u015bci\u0105 zagwarantuj\u0105 nam zawodnicy obu dru\u017cyn!",
         "tickets_points": null,
         "link": "K.S. Credo Futsal Pi\u0142a",
         "location": "Pi\u0142a, Hala PWSZ, Podchor\u0105\u017cych 10",
         "organiser": "K.S. Credo Futsal Pi\u0142a",
         "start": "2015-01-18T16:00:00Z",
         "end": "2015-01-18T16:00:00Z",
         "url": "K.-S.-Credo-Futsal-Pila---UKS-Orlik-Mosina-955",
         "is_active": true
         },
         {
         "image": {
         "image": {
         "url": "/media/events/grazyna_auguscik.jpg"
         },
         "thumbnail": {
         "url": "/media/cache/4c/02/4c02e69d20ab4c7726dec71551b3a122.jpg"
         }
         },
         "user": {
         "organization": "Miasto Pi\u0142a i RCK",
         "id": 1
         },
         "owner": "Miasto Pi\u0142a i RCK",
         "tickets": [
         {
         "id": 58,
         "created_at": "2014-02-28T10:45:19.198Z",
         "updated_at": "2014-02-28T10:45:19.198Z",
         "updated_by": 1,
         "is_deleted": false,
         "type": "normalny",
         "price": "25.00"
         }
         ],
         "target": {
         "id": 3,
         "created_at": "2013-10-06T22:00:00Z",
         "updated_at": "2013-10-06T22:00:00Z",
         "updated_by": 1,
         "is_deleted": false,
         "name": "Doro\u015bli",
         "btn_style": "btn-default",
         "is_show": true
         },
         "images": [
         {
         "id": 1025,
         "created_at": "2014-12-26T17:34:40.747Z",
         "updated_at": "2014-12-26T17:34:40.747Z",
         "updated_by": 1,
         "is_deleted": false,
         "image": "events/grazyna_auguscik.jpg"
         }
         ],
         "category": {
         "id": 3,
         "created_at": "2013-10-06T22:00:00Z",
         "updated_at": "2013-10-06T22:00:00Z",
         "updated_by": 1,
         "is_deleted": false,
         "name": "Koncerty",
         "url": "koncerty",
         "btn_style": "btn-warning"
         },
         "id": 939,
         "created_at": "2014-12-26T17:35:50.731Z",
         "updated_at": "2014-12-26T17:40:16.091Z",
         "updated_by": 1,
         "is_deleted": false,
         "title": "koncert duetu GRA\u017bYNA AUGU\u015aCIK & JAROS\u0141AW BESTER",
         "description": "Duet Gra\u017cyna Augu\u015bcik i Jaros\u0142aw Bester to fuzja dw\u00f3ch niezwyk\u0142ych osobowo\u015bci na \u015bwiatowym rynku muzycznym. Czerpi\u0105c inspiracj\u0119 z tradycji muzyki jazzowej, awangardowej, folkowej, ale tak\u017ce z dokona\u0144 szeroko rozumianej muzyki klasycznej tworz\u0105 subteln\u0105, a zarazem niezwykle precyzyjn\u0105 i wirtuozowsk\u0105 opowie\u015b\u0107 muzyczn\u0105. Kompozycje kt\u00f3re wykonuj\u0105 s\u0105 zbudowane cz\u0119sto klasycznie, ale okraszone s\u0105 improwizacjami, kt\u00f3re tworz\u0105 pewnego rodzaju wewn\u0119trzn\u0105 i niezale\u017cn\u0105 form\u0119, powoduj\u0105c, \u017ce ka\u017cde wykonanie tego samego utworu charakteryzuje si\u0119 wielk\u0105 \u015bwie\u017co\u015bci\u0105 i inwencj\u0105 tw\u00f3rcz\u0105 artyst\u00f3w. Duet Gra\u017cyna i Jarek jest to spotkanie dw\u00f3ch bliskich sobie \u015bwiat\u00f3w muzycznych, mimo i\u017c ka\u017cdy z nich na co dzie\u0144 wykonuj\u0119 odmienn\u0105 stylistycznie muzyk\u0119. Dzi\u0119ki wieloletniej wsp\u00f3\u0142pracy artyst\u00f3w przy wielu wspania\u0142ych projektach muzycznych udaje im si\u0119 wypracowa\u0107 wsp\u00f3lny i niezwykle oryginalny j\u0119zyk muzyczny nie daj\u0105cy si\u0119 por\u00f3wna\u0107 z innymi tego typu duetami.",
         "tickets_points": "Informacje: 67 210 5007, e-mail: teatr@rck.pila.pl\nKasa: 602 252 675, e-mail: kasa@rck.pila.pl,",
         "link": "rck.pila.pl",
         "location": "INWEST-PARK, SALA MIEJSKA, UL. D\u0104BROWSKIEGO 8",
         "organiser": "RCK",
         "start": "2015-01-18T16:00:00Z",
         "end": "2015-01-18T18:00:00Z",
         "url": "koncert-duetu-GRAZYNA-AUGUSCIK-&-JAROSLAW-BESTER-939",
         "is_active": true
         },
         {
         "image": {
         "image": {
         "url": "/media/events/gongi_styczen_2015.jpg"
         },
         "thumbnail": {
         "url": "/media/cache/56/7d/567d9b132029b70086edc3dbd2fff54a.jpg"
         }
         },
         "user": {
         "organization": "Miasto Pi\u0142a i RCK",
         "id": 1
         },
         "owner": "Miasto Pi\u0142a i RCK",
         "tickets": [
         {
         "id": 44,
         "created_at": "2014-02-28T09:37:22.579Z",
         "updated_at": "2014-02-28T09:37:22.579Z",
         "updated_by": 1,
         "is_deleted": false,
         "type": "normalny",
         "price": "10.00"
         }
         ],
         "target": {
         "id": 3,
         "created_at": "2013-10-06T22:00:00Z",
         "updated_at": "2013-10-06T22:00:00Z",
         "updated_by": 1,
         "is_deleted": false,
         "name": "Doro\u015bli",
         "btn_style": "btn-default",
         "is_show": true
         },
         "images": [
         {
         "id": 1030,
         "created_at": "2015-01-05T12:48:35.402Z",
         "updated_at": "2015-01-05T12:48:35.402Z",
         "updated_by": 1,
         "is_deleted": false,
         "image": "events/gongi_styczen_2015.jpg"
         }
         ],
         "category": {
         "id": 5,
         "created_at": "2013-10-06T22:00:00Z",
         "updated_at": "2013-10-06T22:00:00Z",
         "updated_by": 1,
         "is_deleted": false,
         "name": "Wystawy i Warsztaty",
         "url": "wystawy_i_warsztaty",
         "btn_style": "btn-danger"
         },
         "id": 944,
         "created_at": "2015-01-05T12:54:13.908Z",
         "updated_at": "2015-01-05T12:54:27.415Z",
         "updated_by": 1,
         "is_deleted": false,
         "title": "Gongi i misy tybeta\u0144skie",
         "description": "Terapia wykorzystuj\u0105ca d\u017awi\u0119ki i drgania specjalnych mis i gong\u00f3w, znana jest w Tybecie od wiek\u00f3w. <br>\nDo kraj\u00f3w europejskich trafi\u0142a za spraw\u0105 Niemca Petera Hessa, <br>\nkt\u00f3ry, na bazie swoich do\u015bwiadcze\u0144 i bada\u0144 prowadzonych podczas wielokrotnych pobyt\u00f3w w Nepalu i Tybecie, \n<br>stworzy\u0142 metod\u0119 terapeutyczn\u0105 masa\u017cu d\u017awi\u0119kiem",
         "tickets_points": null,
         "link": "RCK",
         "location": "Pi\u0142a, RCK, Sala Kameralna",
         "organiser": "RCK",
         "start": "2015-01-18T17:00:00Z",
         "end": "2015-01-18T19:00:00Z",
         "url": "Gongi-i-misy-tybetanskie-944",
         "is_active": true
         },
         {
         "image": {
         "image": {
         "url": "/media/events/magia_kobiecosci_2.jpg"
         },
         "thumbnail": {
         "url": "/media/cache/bb/5c/bb5c39857679edaf46fc7d7f08f467e7.jpg"
         }
         },
         "user": {
         "organization": "Miasto Pi\u0142a i RCK",
         "id": 1
         },
         "owner": "Miasto Pi\u0142a i RCK",
         "tickets": [
         {
         "id": 178,
         "created_at": "2014-09-03T06:17:40.834Z",
         "updated_at": "2014-09-03T06:17:40.834Z",
         "updated_by": 1,
         "is_deleted": false,
         "type": "przedsprzeda\u017c",
         "price": "30.00"
         },
         {
         "id": 239,
         "created_at": "2015-01-05T13:01:15.798Z",
         "updated_at": "2015-01-05T13:01:15.798Z",
         "updated_by": 1,
         "is_deleted": false,
         "type": "w dniu wydarzenia",
         "price": "35.00"
         }
         ],
         "target": {
         "id": 3,
         "created_at": "2013-10-06T22:00:00Z",
         "updated_at": "2013-10-06T22:00:00Z",
         "updated_by": 1,
         "is_deleted": false,
         "name": "Doro\u015bli",
         "btn_style": "btn-default",
         "is_show": true
         },
         "images": [
         {
         "id": 1031,
         "created_at": "2015-01-05T12:55:28.989Z",
         "updated_at": "2015-01-05T12:55:28.989Z",
         "updated_by": 1,
         "is_deleted": false,
         "image": "events/magia_kobiecosci_2.jpg"
         }
         ],
         "category": {
         "id": 5,
         "created_at": "2013-10-06T22:00:00Z",
         "updated_at": "2013-10-06T22:00:00Z",
         "updated_by": 1,
         "is_deleted": false,
         "name": "Wystawy i Warsztaty",
         "url": "wystawy_i_warsztaty",
         "btn_style": "btn-danger"
         },
         "id": 945,
         "created_at": "2015-01-05T13:01:15.830Z",
         "updated_at": "2015-01-08T09:06:08.066Z",
         "updated_by": 1,
         "is_deleted": false,
         "title": "Magia kobieco\u015bci - coaching cia\u0142a",
         "description": "Magia kobieco\u015bci - coaching cia\u0142a<br>\nCykl warsztat\u00f3w rozwojowych z elementami life-coachingu",
         "tickets_points": "zapisy:\n602-252-675\n67 210 5015\nrozrywka@rck.pila.pl",
         "link": "RCK",
         "location": "Pi\u0142a, RCK",
         "organiser": "RCK",
         "start": "2015-01-19T17:00:00Z",
         "end": "2015-01-19T19:30:00Z",
         "url": "Magia-kobiecosci---coaching-caial-945",
         "is_active": true
         }
         ];
         data.forEach(function (eventData) {
         that._retrieveInstance(eventData.id, eventData);
         });


         deferred.resolve(data);
         return deferred.promise;
         },
       /* loadAllEvents: function () {
            var that = this;
            var url = 'http://tu.pila.pl/api/events/';
            var dateFrom = moment().format("YYYY-MM-DD HH:mm");

            var deferred = $q.defer();

            $http.get(url + "?page=" + this._page + "&to=" + dateFrom)
                .success(function (data) {
                    var events = [];
                    if (data.next) {
                        that._page = that._page + 1;

                    }
                    data.results.forEach(function (eventData) {
                        var event = that._retrieveInstance(eventData.id, eventData);
                        events.push(event);
                    });

                    that.hasMoreEvents = data.next? true:false;
                    deferred.resolve(events);
                })
                .error(function () {
                    deferred.resolve([]);
                });


            return deferred.promise;
        },
*/
        doRefresh: function () {
            this._page = 1;
            return this.loadAllEvents();
        }


    };

    return manager;
}]);

tuPila.factory('commonServices', ['$cordovaCalendar', '$cordovaSocialSharing', '$ionicPlatform', function ($cordovaCalendar, $cordovaSocialSharing, $ionicPlatform) {

    return {
        setReminder: function (event) {
            $ionicPlatform.ready(function () {

                $cordovaCalendar.createEventInteractively({
                    title: event.title,
                    location: event.location,
                    notes: "",
                    startDate: new Date(event.start),
                    endDate: new Date(event.end)
                }).then(function (result) {
                    // success
                }, function (err) {
                    // error
                });
            });
        },
        share: function (event) {
            $ionicPlatform.ready(function () {


                $cordovaSocialSharing
                    .share(event.title, "hej na tu.pila.pl znalazłem ciekawe wydarzenie", null, "http://tu.pila.pl/wszystkie_wydarzenia/"+event.url);
            });
        }
    }

}]);
