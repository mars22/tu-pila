angular.module('tuPila.controllers', [])

    .controller('AppController', function ($scope, $ionicModal, $timeout) {
        // Form data for the login modal
        $scope.loginData = {};

        // Create the login modal that we will use later
        $ionicModal.fromTemplateUrl('templates/login.html', {
            scope: $scope
        }).then(function (modal) {
            $scope.modal = modal;
        });

        // Triggered in the login modal to close it
        $scope.closeLogin = function () {
            $scope.modal.hide();
        };

        // Open the login modal
        $scope.login = function () {
            $scope.modal.show();
        };

        // Perform the login action when the user submits the login form
        $scope.doLogin = function () {

            // Simulate a login delay. Remove this and replace with your login
            // code if using a login system
            $timeout(function () {
                $scope.closeLogin();
            }, 1000);
        };
    })

    .controller('EventListsController', function ($scope, eventsManager, commonServices) {
        /*
         */
        $scope.events = [];
        $scope.loadMore = function () {
            eventsManager.loadAllEvents().then(function (events) {

                events.forEach(function (event) {
                        $scope.events.push(event);


                });

                $scope.$broadcast('scroll.infiniteScrollComplete');
            });
        };



        $scope.setReminder = commonServices.setReminder;
        $scope.share = commonServices.share;


        $scope.hasMoreEvents = function(){ return eventsManager.hasMoreEvents;};

        $scope.doRefresh = function(){
            eventsManager.doRefresh().then(function(events){
                $scope.events = events;
                $scope.$broadcast('scroll.refreshComplete');

            });
        }

    })

    .controller('EventController', function ($scope,$sce, $stateParams, eventsManager, commonServices) {

        $scope.event = eventsManager.getEvent($stateParams.eventId);

        $scope.setReminder = commonServices.setReminder;
        $scope.share = commonServices.share;

        $scope.getSafeHtml = function(htmlString){
            return $sce.trustAsHtml(htmlString);
        }

    });
