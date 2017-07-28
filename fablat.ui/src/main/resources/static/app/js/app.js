var app = angular.module('FabLatApp', [ 'ui.router', 'ngMaterial', 'ng.group', 'ngMessages' ]);

app.config(function($mdThemingProvider, $mdIconProvider, $urlRouterProvider, $stateProvider) {

	$mdThemingProvider.theme('default')
		.primaryPalette('cyan', {
			'default': '500',
			'hue-1': '300', 
			'hue-2': '700',
			'hue-3': '800' 
		})
		.accentPalette('light-blue', {
			'default': '500',
			'hue-1': '300', 
			'hue-2': '700',
			'hue-3': '900' 
		})
		.warnPalette('deep-orange', { 
			
		});
	
	// Neutral theme 
	$mdThemingProvider.theme('neutral').primaryPalette('grey', {
		'default': '500',
		'hue-1': '50', 
		'hue-2': '100',
		'hue-3': '200' 
	});
	
	// Palettes for playing with colors
	$mdThemingProvider.theme('darkRed').backgroundPalette('red').dark();
	$mdThemingProvider.theme('darkPink').backgroundPalette('pink').dark();
	$mdThemingProvider.theme('darkPurple').backgroundPalette('purple').dark();
	$mdThemingProvider.theme('darkDeepPurple').backgroundPalette('deep-purple').dark();
	$mdThemingProvider.theme('darkIndigo').backgroundPalette('indigo').dark();
	$mdThemingProvider.theme('darkBlue').backgroundPalette('blue').dark();
	$mdThemingProvider.theme('darkLightBlue').backgroundPalette('light-blue').dark();
	$mdThemingProvider.theme('darkCyan').backgroundPalette('cyan').dark();
	$mdThemingProvider.theme('darkTeal').backgroundPalette('teal').dark();
	$mdThemingProvider.theme('darkGreen').backgroundPalette('green').dark();
	$mdThemingProvider.theme('darkLightGreen').backgroundPalette('light-green').dark();
	$mdThemingProvider.theme('darkLime').backgroundPalette('lime').dark();
	$mdThemingProvider.theme('darkYellow').backgroundPalette('yellow').dark();
	$mdThemingProvider.theme('darkAmber').backgroundPalette('amber').dark();
	$mdThemingProvider.theme('darkOrange').backgroundPalette('orange').dark();
	$mdThemingProvider.theme('darkDeepOrange').backgroundPalette('deep-orange').dark();
	$mdThemingProvider.theme('darkBrown').backgroundPalette('brown').dark();
	$mdThemingProvider.theme('darkGrey').backgroundPalette('grey').dark();
	$mdThemingProvider.theme('darkBlueGrey').backgroundPalette('blue-grey').dark();
    
	// Iconset
	$mdIconProvider.defaultIconSet('images/mdi.svg');
    
    // Routes config
    $urlRouterProvider.otherwise(function() {
        return '/';
    });

    $stateProvider.state({
        name: 'dashboard',
        url: '/',
        templateUrl: 'dashboard.html'
    });
    
    $stateProvider.state({
        name: 'groups',
        url: '/groups',
        templateUrl: 'groups.html'
    });
    
    $stateProvider.state({
        name: 'workshops',
        url: '/workshops',
        templateUrl: 'workshops.html'
    });
    
    $stateProvider.state({
        name: 'settings',
        abstract: true,
        url: '/settings',
        templateUrl: 'settings.html'
    });
    
    $stateProvider.state({
        name: 'settings.profile',
        url: '/profile',
        templateUrl: 'settings.profile.html'
    });
    
    $stateProvider.state({
        name: 'settings.password',
        url: '/password',
        templateUrl: 'settings.password.html'
    });
    
    $stateProvider.state({
        name: 'group-out',
        url: '/group-out/:idGroup',
        templateUrl: 'group-out.html'
    });
    
    $stateProvider.state({
        name: 'subgroup-out',
        url: '/subgroup-out/:idSubgroup',
        templateUrl: 'subgroup-out.html'
    });
    
    
    /*========== group states ==========*/
    $stateProvider.state({
        name: 'group',
        abstract: true,
        url: '/group/:idGroup',
        templateUrl: 'group.html'
    });
    
    $stateProvider.state({
        name: 'group.general',
        url: '/general',
        templateUrl: 'group.general.html'
    });
    
    $stateProvider.state({
        name: 'group.discussion',
        url: '/discussion',
        templateUrl: 'group.discussion.html'
    });
    
    $stateProvider.state({
        name: 'group.activity',
        url: '/activity',
        templateUrl: 'group.activity.html'
    });
    
    $stateProvider.state({
        name: 'group.management',
        abstract: true,
        url: '/management',
        templateUrl: 'group.management.html'
    });
    
    $stateProvider.state({
        name: 'group.management.general',
        url: '/general',
        templateUrl: 'group.management.general.html'
    });
    
    $stateProvider.state({
        name: 'group.management.members',
        url: '/members',
        templateUrl: 'group.management.members.html'
    });
    
    $stateProvider.state({
        name: 'group.management.subgroups',
        url: '/subgroups',
        templateUrl: 'group.management.subgroups.html'
    });
    
    
    /*=========== subgroup states ===========*/
    $stateProvider.state({
        name: 'subgroup',
        abstract: true,
        url: '/subgroup/:idSubgroup',
        templateUrl: 'subgroup.html'
    });
    
    $stateProvider.state({
        name: 'subgroup.general',
        url: '/general',
        templateUrl: 'subgroup.general.html'
    });
    
    $stateProvider.state({
        name: 'subgroup.discussion',
        url: '/discussion',
        templateUrl: 'subgroup.discussion.html'
    });
    
    $stateProvider.state({
        name: 'subgroup.ideas',
        url: '/ideas',
        templateUrl: 'subgroup.ideas.html'
    });
    
    $stateProvider.state({
        name: 'subgroup.activity',
        url: '/activity',
        templateUrl: 'subgroup.activity.html'
    });
    
    $stateProvider.state({
        name: 'subgroup.management',
        abstract: true,
        url: '/management',
        templateUrl: 'subgroup.management.html'
    });
    
    $stateProvider.state({
        name: 'subgroup.management.general',
        url: '/general',
        templateUrl: 'subgroup.management.general.html'
    });
    
    $stateProvider.state({
        name: 'subgroup.management.members',
        url: '/members',
        templateUrl: 'subgroup.management.members.html'
    });
    
    $stateProvider.state({
        name: 'subgroup.management.workshops',
        url: '/workshops',
        templateUrl: 'subgroup.management.workshops.html'
    });
    
    $stateProvider.state({
        name: 'subgroup.addWorkshop',
        url: '/addWorkshop',
        templateUrl: 'subgroup.add-workshop.html'
    });
    
    
    /*=========== workshop states ===========*/
    
    $stateProvider.state({
        name: 'workshop',
        abstract: true,
        url: '/workshop/:idWorkshop',
        templateUrl: 'workshop.html'
    });
    
    $stateProvider.state({
        name: 'workshop.general',
        url: '/general',
        templateUrl: 'workshop.general.html'
    });
    
    $stateProvider.state({
        name: 'workshop.management',
        abstract: true,
        url: '/management',
        templateUrl: 'workshop.management.html'
    });
    
    $stateProvider.state({
        name: 'workshop.management.general',
        url: '/general',
        templateUrl: 'workshop.management.general.html'
    });
    
    $stateProvider.state({
        name: 'workshop.management.tutors',
        url: '/tutors',
        templateUrl: 'workshop.management.tutors.html'
    });
    
    
    
    


    
    
    
    
    
    
    
    
    
    
    
    
    
    /******* old ********/
    
    $stateProvider.state({
        name: 'subgroups',
        url: '/subgroup-manager',
        templateUrl: 'subgroup-manager.html',
        controller: function ($rootScope) {
        	$rootScope.model = {
                title: 'SubGroups'
            };
        }
    });

    $stateProvider.state({
        name: 'events',
        url: '/event-manager',
        templateUrl: 'event-manager.html',
        controller: function ($rootScope) {
        	$rootScope.model = {
                title: 'Events'
            };
        }
    });
    
    $stateProvider.state({
        name: 'personalData',
        url: '/personal-data',
        templateUrl: 'personal-data.html',
        controller: function ($rootScope) {
        	$rootScope.model = {
                title: 'Personal Data'
            };
        }
    });
    
    $stateProvider.state({
        name: 'subgroupList',
        url: '/subgroup/list',
        templateUrl: 'subgroup-list.html',
        controller: function ($rootScope) {
        	$rootScope.model = {
                title: 'SubGroup List'
            };
        }
    });
    
    $stateProvider.state({
        name: 'subgroupDetail',
        url: '/subgroup/detail/:idSubGroup',
        templateUrl: 'subgroup-detail.html',
        controller: function ($rootScope) {
        	$rootScope.model = {
                title: 'SubGroup Detail'
            };
        }
    });
    
    $stateProvider.state({
        name: 'workshopDetail',
        url: '/workshop/detail/:idWorkshop',
        templateUrl: 'workshop-detail.html',
        controller: function ($rootScope) {
        	$rootScope.model = {
                title: 'Workshop Detail'
            };
        }
    });
    
    $stateProvider.state({
        name: 'fabberDetail',
        url: '/fabber/detail/:idFabber',
        templateUrl: 'fabber-detail.html',
        controller: function ($rootScope) {
        	$rootScope.model = {
                title: 'Fabber Detail'
            };
        }
    });
    
    $stateProvider.state({
        name: 'generalManagerLat',
        url: '/admin-lat/general-manager',
        templateUrl: 'admin-lat-general-manager.html',
        controller: function ($rootScope) {
        	$rootScope.model = {
                title: 'General Manager Lat'
            };
        }
    });
    
    $stateProvider.state({
        name: 'generalManagerLab',
        url: '/admin-lab/general-manager',
        templateUrl: 'admin-lab-general-manager.html',
        controller: function ($rootScope) {
        	$rootScope.model = {
                title: 'General Manager Lab'
            };
        }
    });
   
});

// General controller, runs on top of everything
app.controller('AppCtrl', ['$rootScope', '$http', '$state', '$location', '$window', '$scope', '$mdSidenav', '$mdDialog', function($rootScope, $http, $state, $location, $window, $scope, $mdSidenav, $mdDialog) { 
	
	$rootScope.user = {};
	
	$http.get('/user').then(function(response) {
		if (response.data) {
			$rootScope.authenticated = true;
			$rootScope.user.id = response.data.principal.id;
			$rootScope.user.email = response.data.principal.email;
			$rootScope.user.firstName = response.data.principal.firstName;
			$rootScope.user.lastName = response.data.principal.lastName;
			$rootScope.user.idLab = response.data.principal.idLab;
			// roles
			$rootScope.user.hasAdminGeneralRole = response.data.principal.authorities.find(x => x.authority === 'ROLE_ADMIN_GENERAL') ? true : false;
			$rootScope.user.hasAdminLabRole = response.data.principal.authorities.find(x => x.authority === 'ROLE_ADMIN_LAB') ? true : false;
			
			// redirect
			/*$http.get('/resource/first', {
				params: {
					idFabber: $rootScope.user.id
				}
			}).then(function(response) {
				var firstTime = response.data.firstTime;
				
				if (firstTime === "TRUE") {
					// redirect for completing user data
					$rootScope.hiddenSidenav = true;
					$location.path("/signup-user");
				}
			});*/
			
			
		    // Show or Hide menus by Roles
			/*if ($rootScope.user.roles.indexOf("ROLE_ADMIN_GENERAL") !== -1) {
				ssSideNav.setVisibleFor([{
					id: 'section3',
					value: true
				}, {
					id: 'general_admin',
					value: true
				}]);
			}
			
			if ($rootScope.user.roles.indexOf("ROLE_ADMIN_LAB") !== -1) {
				ssSideNav.setVisibleFor([{
					id: 'section3',
					value: true
				}, {
					id: 'lab_admin',
					value: true
				}]);
			} */
			
		} else {
			$rootScope.authenticated = false;
			console.log("not authenticated");
			// redirect to login page
			//$window.location.href = '/login';
		}
	}, function() {
		$rootScope.authenticated = false;
		console.log("error in authentication.");
		//$window.location.href = '/login'; // redirect to login page
	});

	$scope.logout = function() {
		$http.post('/login?logout', {}).finally(function() {
			$rootScope.authenticated = false;
			$rootScope.user = {};
			$window.location.href = '/';
			console.log("Logout successful.");
		});
	} 
	
	// Toolbar search toggle
	$scope.toggleSearch = function(element) {
	    $scope.showSearch = !$scope.showSearch;
	}; 

	// Sidenav toggle
	$scope.toggleSidenav = function(menuId) {
		$mdSidenav(menuId).toggle();
	};
	
	// Avatar menu
	$scope.openMenu = function($mdOpenMenu, ev) {
		$mdOpenMenu(ev);
	};

}]);


/*========== General controllers ==========*/

// Controller in: dashboard.html
app.controller('DashboardCtrl', function($rootScope, $scope, $http, $filter) {
	
	$scope.loadingRequests = true;
	$scope.groups1 = [];
	$scope.groups2 = [];
	$scope.groups3 = [];
	
	$http.get('/resource/auth/fabbers/me')
		.then(function(response) {
			$scope.fabber = response.data;
		}).finally(function() {
		    // called no matter success or failure
		    $scope.loading3 = false;
		});
	
	$http.get('/resource/auth/groups/findAllMine')
		.then(function(response) {
			// for displaying data in 3 columns
			for (i = 0; i < response.data.length; i++) {
				if (i % 3 == 0) {
					$scope.groups1.push(response.data[i]);
				} else if ((i + 2) % 3 == 0) {
					$scope.groups2.push(response.data[i]);
				} else {
					$scope.groups3.push(response.data[i]);
				}
			}
		}).finally(function() {
		    // called no matter success or failure
		    $scope.loading3 = false;
		});
	
	$http.get('/resource/auth/activity')
		.then(function(response) {
			$scope.workshops = response.data;
		}).finally(function() {
		    // called no matter success or failure
		    $scope.loading4 = false;
		});
	
});


// Controller in: groups.html
app.controller('GroupsCtrl', function($scope, $http, $mdDialog) {
	
	$scope.groups1 = [];
	$scope.groups2 = [];
	$scope.groups3 = [];
	
	$scope.query = function(searchText) {
	    return $http
	      .get(BACKEND_URL + '/items/' + searchText)
	      .then(function(data) {
	        // Map the response object to the data object.
	        return data;
	      });
	};
	
	$http.get('/resource/auth/groups')
		.then(function(response) {
			// for displaying data in 3 columns
			for (i = 0; i < response.data.length; i++) {
				if (i % 3 == 0) {
					$scope.groups1.push(response.data[i]);
				} else if ((i + 2) % 3 == 0) {
					$scope.groups2.push(response.data[i]);
				} else {
					$scope.groups3.push(response.data[i]);
				}
			}
		}).finally(function() {
		    // called no matter success or failure
		    $scope.loading3 = false;
		});
	
	// New group dialog
	$scope.addGroup = function(ev) {
	    $mdDialog.show({
	      controller: AddGroupDialogController,
	      templateUrl: 'add-group-dialog.tmpl.html',
	      parent: angular.element(document.body),
	      targetEvent: ev,
	      clickOutsideToClose: true,
	      fullscreen: true // Only for -xs, -sm breakpoints.
	    })
	    .then(function(answer) {
	      // ok
	    }, function() {
	      // cancel
	    });
	};
	
});

//Controller in: group-out.html
app.controller('GroupOutCtrl', function($scope, $http, $stateParams) {
	
	// Injects the group object in the parent scope
	$http.get('/resource/auth/groups/' + $stateParams.idGroup)
		.then(function(response) {
			$scope.group = response.data;			
		}).finally(function() {
		    // called no matter success or failure
		});
	
});


/*========== Group controllers ==========*/
// Controller in: group.html
app.controller('GroupCtrl', function($scope, $http, $stateParams, $state) {
	
	// Injects the group object in the parent scope
	$http.get('/resource/auth/groups/' + $stateParams.idGroup)
		.then(function(response) {
			// if user is not member redirect to external page
			if (!response.data.amIMember) {
				$state.go("group-out", { idGroup: $stateParams.idGroup }, {});
			}	
			$scope.group = response.data;	
		}).finally(function() {
		    // called no matter success or failure
		});
	
});

// Controller in: group.general.html
app.controller('GroupGeneralCtrl', function($scope, $http, $stateParams, $mdDialog) {

	// New subgroup dialog
	$scope.addSubgroup = function(ev) {
	    $mdDialog.show({
	      controller: AddSubgroupDialogController,
	      templateUrl: 'add-subgroup-dialog.tmpl.html',
	      parent: angular.element(document.body),
	      targetEvent: ev,
	      clickOutsideToClose: true,
	      fullscreen: true // Only for -xs, -sm breakpoints.
	    })
	    .then(function(answer) {
	      // ok
	    }, function() {
	      // cancel
	    });
	};
	
});




/*========== Subgroup controllers ==========*/

// Controller in: subgroup.html
app.controller('SubgroupCtrl', function($scope, $http, $stateParams, $state) {
	
	// Injects the subgroup object in the parent scope
	$http.get('/resource/auth/subgroups/' + $stateParams.idSubgroup)
		.then(function(response) {
			// if user is not member redirect to external page
			if (!response.data.amIMember) {
				$state.go("subgroup-out", { idSubgroup: $stateParams.idSubgroup }, {});
			}	
			$scope.subgroup = response.data;	
		}).finally(function() {
		    // called no matter success or failure
		});
	
});

// Controller in: subgroup.general.html
app.controller('SubgroupGeneralCtrl', function($scope, $http, $stateParams) {
	
	
	
});

//Controller in: subgroup.general.html
app.controller('SubgroupGeneralCtrl', function($scope, $http, $stateParams) {
	
	
	
});

// Controller in: subgroup.add-workshop.html
app.controller('SubgroupAddWorkshopCtrl', function($scope, $http, $stateParams) {
	
	// initialize checkbox attributes
	$scope._workshop = {};
	$scope._workshop.isPaid = false;
	
	// restrict min-date for date pickers
	$scope.today = new Date();
	
	$scope.submit = function() {	
		$scope.actionsDisabled = true;
		//TODO: validate fields
		
		
		 	
		console.log($scope._group);
		// submit data
		$http.post('/resource/auth/workshops/', {
			name: $scope._workshop.name,
			description: $scope._workshop.description,
			startDate: $scope._workshop.startDate.getDate() + "-" + $scope._workshop.startDate.getMonth() + "-" + $scope._workshop.startDate.getFullYear(),
			startTime: $scope._workshop.startTimeHours + ":" + $scope._workshop.startTimeMinutes + " " + $scope._workshop.startTimeMeridian,  // time format for api
			endDate: $scope._workshop.endDate.getDate() + "-" + $scope._workshop.endDate.getMonth() + "-" + $scope._workshop.endDate.getFullYear(),
			endTime: $scope._workshop.endTimeHours + ":" + $scope._workshop.endTimeMinutes + " " + $scope._workshop.endTimeMeridian, 
			isPaid: $scope._workshop.isPaid,
			price: $scope._workshop.isPaid ? $scope._workshop.price : null,
			currency: $scope._workshop.isPaid ? $scope._workshop.currency : null,
			facebookUrl: "",
			ticketsUrl: "",
			// dependencies
			subGroupId: $stateParams.idSubgroup, // parent
			locationId: 62, // id location
			locationAddress: null,
			locationCity: null,
			locationCountry: null,
			locationLatitude: null,
			locationLongitude: null

		}).then(function(response) {	
			console.log("saved!");
		});	  
	  };
	
});




/*========== Workshop controllers ==========*/

// Controller in: workshop.html
app.controller('WorkshopCtrl', function($scope, $http, $stateParams, $state) {
	
	// Injects the workshop object in the parent scope
	$http.get('/resource/auth/workshops/' + $stateParams.idWorkshop)
		.then(function(response) {
			// if user is not member redirect to external page
			if (!response.data.amITutor) {
				$state.go("workshop-out", { idWorkshop: $stateParams.idWorkshop }, {});
			}	
			$scope.workshop = response.data;
		}).finally(function() {
		    // called no matter success or failure
		});
	
});

// Controller in: workshop.general.html
app.controller('WorkshopGeneralCtrl', function($scope, $http, $stateParams) {
	
	
	
});




/*========== Dialog controllers ==========*/

// Controller for: add-group-dialog.tmpl.html
function AddGroupDialogController($scope, $mdDialog, $http) {
	 
	$scope.actionsDisabled = false;
	
	$scope.hide = function() {
	    $mdDialog.hide();
	};
	
	$scope.cancel = function() {
	    $mdDialog.cancel();
	};
	
	$scope.submit = function() {	
		$scope.actionsDisabled = true;
		//TODO: validate fields
		 	
		console.log($scope._group);
		// submit data
		$http.post('/resource/auth/groups/', {
			name: $scope._group.name,
			description: $scope._group.description
		}).then(function(response) {	
			console.log("saved!");
			// pass data retrieved to parent controller
			$mdDialog.hide(response.data);	
		});	  
	  };
};

// Controller for: add-subgroup-dialog.tmpl.html
function AddSubgroupDialogController($scope, $mdDialog, $http, $stateParams, $state) {
	 
	$scope.actionsDisabled = false;
	
	$scope.hide = function() {
	    $mdDialog.hide();
	};
	
	$scope.cancel = function() {
	    $mdDialog.cancel();
	};
	
	$scope.submit = function() {	
		$scope.actionsDisabled = true;
		//TODO: validate fields	 
		
		console.log($scope._subgroup);
		// submit data
		$http.post('/resource/auth/subgroups', {
			name: $scope._subgroup.name,
			description: $scope._subgroup.description,
			idGroup: $stateParams.idGroup // parent
		}).then(function(response) {	
			console.log("saved!");
			// pass data retrieved to parent controller
			$mdDialog.hide(response.data);	
			// reload current state
			$state.go($state.current, {}, {reload: true});
		});
	  };
};




































/* Olddddddddddddddddddd */ 

// Controller for subgroups list: subgroup-list.html
app.controller('SubGroupListCtrl', function($scope, $http, $mdDialog) {
	
	$scope.loading = true;
	
	$http.get('/resource/subgroup/list-all-user').then(function(response) {
		$scope.subgroups = response.data;
	}).finally(function() {
	    // called no matter success or failure
	    $scope.loading = false;
	});
	
	$scope.join = function(idSubGroup, $index) {
		$http.post('/resource/subgroup/join', {
			idSubGroup: idSubGroup
		}).then(function(response) {
			// toggle status
			$scope.subgroups[$index].currentUserStatus = "JOINED";
		});
	}
	
});


// Controller for subgroup manager view: subgroup-manager.html
app.controller('SubGroupManagerCtrl', function($scope, $http, $mdDialog, $mdMedia) {
	
	$scope.loading1 = true;
	$scope.loading2 = true;
	$scope.customFullscreen = $mdMedia('xs') || $mdMedia('sm');
	
	$scope.openMenu = function($mdOpenMenu, ev) {
		$mdOpenMenu(ev);
	};
	
	$scope.newSubGroup = function(ev) {
	    var useFullScreen = ($mdMedia('sm') || $mdMedia('xs'))  && $scope.customFullscreen;
	    $mdDialog.show({
	      controller: NewSubGroupDialogController,
	      templateUrl: 'new-subgroup-dialog.tmpl.html',
	      parent: angular.element(document.body),
	      targetEvent: ev,
	      clickOutsideToClose:true,
	      fullscreen: useFullScreen
	    })
	    .then(function(model) {
	    	// alert("troll :D");
	    	console.log(model);
	    	$scope.subgroups1.push(model);
	    	
	    }, function() {
	      // cancelled dialog
	    });
	    
	    $scope.$watch(function() {
	      return $mdMedia('xs') || $mdMedia('sm');
	    }, function(wantsFullScreen) {
	      $scope.customFullscreen = (wantsFullScreen === true);
	    });
	};
	
	// get managed subgroups
	$http.get('/resource/subgroup/list-managed-user').then(function(response) {
		$scope.subgroups1 = response.data;
	}).finally(function() {
	    // called no matter success or failure
	    $scope.loading1 = false;
	});
	
	// get not managed subgroups
	$http.get('/resource/subgroup/list-not-managed-user').then(function(response) {
		$scope.subgroups2 = response.data;
	}).finally(function() {
	    // called no matter success or failure
	    $scope.loading2 = false;
	});
	
	$scope.leaveSubGroup = function(event, idSubGroup, $index) {
		
		$mdDialog.confirm()
	        .title('Are you sure you want to leave this subgroup?')
			.textContent('You can still join the subgroup later.')
			.ariaLabel('Leave confirmation')
			.targetEvent(event)
			.ok('Leave')
			.cancel('Cancel');
		$mdDialog.show(confirm).then(function() {
			$scope.status = 'You left the subgroup.';
			
			/*$http.post('resource/group/leave', {
				idGroup: idGroup
			}).then(function(response) {
				// delete item from ng model
				
			});*/
		
		  }, function() {
		    $scope.status = 'You canceled the action.';
		  });
	}
	
	$scope.toggleNotifications = function(idSubGroup, $index) {
		$http.post('/resource/subgroup/toggle-notifications', {
			idSubGroup: idSubGroup
		}).then(function(response) {
			
		
		});
	}
	
});


// Controller within: subgroup-manager.html
app.controller('SubGroupsAllCtrl', function($scope, $http) {
	
	$scope.loading = true;
	
	$http.get('/resource/subgroup/list-all-user').then(function(response) {
		
		$scope.subgroups = response.data;
		
	}).finally(function() {
	    // called no matter success or failure
	    $scope.loading = false;
	});
	
	$scope.join = function(idSubGroup, $index) {
		$http.post('/resource/subgroup/join', {
			idSubGroup: idSubGroup
		}).then(function(response) {
			// toggle status
			$scope.subgroups[$index].currentUserStatus = "JOINED";
		});
	}
	
});


// Controller for subgroup detail view: subgroup-detail.html
app.controller('SubGroupDetailCtrl', function($scope, $http, $stateParams, $state) {
	
	$scope.openMenu = function($mdOpenMenu, ev) {
		$mdOpenMenu(ev);
	};
	
	$scope.loading = true;
	
	$http.get('/resource/subgroup/detail', {
		params: {
			idSubGroup: $stateParams.idSubGroup
		}
	}).then(function(response) {		
		$scope.subgroup = response.data;		
	}).finally(function() {
	    // called no matter success or failure
	    $scope.loading = false;
	});
	
	// for getting current user status
	$http.get('/resource/subgroup/get-current-user-status', {
		params: {
			idSubGroup: $stateParams.idSubGroup
		}
	}).then(function(response) {
		
		$scope.isSubGroupMember = response.data.isSubGroupMember;
		$scope.isCoordinator = response.data.isCoordinator;
		
	});
	
	$scope.joinSubGroup = function() {
		$http.post('/resource/subgroup/join', {
			idSubGroup: $stateParams.idSubGroup
		}).then(function(response) {
			// reload state
			$state.go($state.current, {}, {reload: true});
		});
	}
	
	$scope.deleteFromSubGroup = function(idFabber, $index, isCoordinator) {
		$http.post('/resource/subgroup/delete-user', {
			idSubGroup: $stateParams.idSubGroup,
			idFabber: idFabber
		}).then(function(response) {
			if (isCoordinator) {
				$scope.subgroup.coordinators.splice($index, 1);
			} else {
				$scope.subgroup.collaborators.splice($index, 1);
			}			
		});
	}
	
	$scope.nameAsCoordinator = function(idFabber, $index) {
		$http.post('/resource/subgroup/name-coordinator', {
			idSubGroup: $stateParams.idSubGroup,
			idFabber: idFabber
		}).then(function(response) {
			// delete from view model
			$scope.subgroup.collaborators.splice($index, 1);
			$scope.subgroup.coordinators.push(response.data);
		});
	}
	
});


// Controller within: subgroup-detail.html
app.controller('SubGroupEventsCtrl', function($scope, $http, $stateParams, $mdDialog, $mdMedia) {
	
	$scope.loading = true;
	
	// Get subgroup's workshops
	$http.get('/resource/subgroup/list-upcoming-workshops', {
		params: {
			idSubGroup: $stateParams.idSubGroup
		}
	}).then(function(response) {
		
		$scope.workshops = response.data;
		
	}).finally(function() {
	    // called no matter success or failure
	    $scope.loading = false;
	});
	
	// For getting the current user state
	$http.get('/resource/subgroup/detail', {
		params: {
			idSubGroup: $stateParams.idSubGroup
		}
	}).then(function(response) {
		
		$scope.subgroup = response.data;
		
	}).finally(function() {
	    // called no matter success or failure
	    $scope.loading = false;
	});
	
	// Dialog 
	$scope.customFullscreen = $mdMedia('xs') || $mdMedia('sm');
	
	$scope.openMenu = function($mdOpenMenu, ev) {
		$mdOpenMenu(ev);
	};
	
	$scope.newWorkshop = function(ev) {
	    var useFullScreen = ($mdMedia('sm') || $mdMedia('xs'))  && $scope.customFullscreen;
	    $mdDialog.show({
	      controller: NewWorkshopDialogController,
	      templateUrl: 'new-workshop-dialog.tmpl.html',
	      parent: angular.element(document.body),
	      targetEvent: ev,
	      clickOutsideToClose:true,
	      fullscreen: useFullScreen
	    })
	    .then(function(model) {
	    	// alert("troll :D");
	    	console.log(model);
	    	$scope.workshops.push(model);
	    	
	    }, function() {
	      // cancelled dialog
	    });
	    
	    $scope.$watch(function() {
	      return $mdMedia('xs') || $mdMedia('sm');
	    }, function(wantsFullScreen) {
	      $scope.customFullscreen = (wantsFullScreen === true);
	    });
	};
	
});


// Controller for event manager view: event-manager.html
app.controller('EventManagerCtrl', function($scope, $http) {
	
	$scope.openMenu = function($mdOpenMenu, ev) {
		$mdOpenMenu(ev);
	};
	
	$scope.loading = true;
	
	// Get all upcoming workshops
	$http.get('/resource/workshop/list-upcoming').then(function(response) {
		$scope.workshops = response.data;
	}).finally(function() {
	    // called no matter success or failure
	    $scope.loading = false;
	});
	
});


// Controller within: event-manager.html
app.controller('YourEventsCtrl', function($scope, $http) {
	
	$scope.openMenu = function($mdOpenMenu, ev) {
		$mdOpenMenu(ev);
	};
	
	$scope.loading1 = true;
	
	// Get your upcoming workshops
	$http.get('/resource/workshop/list-upcoming-user').then(function(response) {
		$scope.workshops = response.data;
	}).finally(function() {
	    // called no matter success or failure
	    $scope.loading1 = false;
	});
	
});


// Controller within: event-manager.html 
app.controller('YourPastEventsCtrl', function($scope, $http) {
	
	$scope.openMenu = function($mdOpenMenu, ev) {
		$mdOpenMenu(ev);
	};
	
	$scope.loading1 = true;
	
	// Get your upcoming workshops
	$http.get('/resource/workshop/list-past-user').then(function(response) {
		$scope.workshops = response.data;
	}).finally(function() {
	    // called no matter success or failure
	    $scope.loading1 = false;
	});
	
});


// Controller for workshop detail view: workshop-detail.html
app.controller('WorkshopDetailCtrl', function($scope, $http, $stateParams, $state) {
	
	$scope.openMenu = function($mdOpenMenu, ev) {
		$mdOpenMenu(ev);
	};
	
	$scope.loading = true;
	
	$http.get('/resource/workshop/detail', {
		params: {
			idWorkshop: $stateParams.idWorkshop
		}
	}).then(function(response) {
		
		$scope.workshop = response.data;
		
	}).finally(function() {
	    // called no matter success or failure
	    $scope.loading = false;
	});
	
	// for getting current user status
	$http.get('/resource/workshop/get-current-user-status', {
		params: {
			idWorkshop: $stateParams.idWorkshop
		}
	}).then(function(response) {
		
		$scope.isSubGroupMember = response.data.isSubGroupMember;
		$scope.isWorkshopMember = response.data.isWorkshopMember;
		$scope.isCoordinator = response.data.isCoordinator;
		
	});
	
	$scope.joinWorkshop = function() {
		$http.post('/resource/workshop/join', {
			idWorkshop: $stateParams.idWorkshop
		}).then(function(response) {
			// reload state
			$state.go($state.current, {}, {reload: true});
		});
	}
	
	$scope.leaveWorkshop = function() {
		$http.post('/resource/workshop/leave', {
			idWorkshop: $stateParams.idWorkshop
		}).then(function(response) {
			// reload state
			$state.go($state.current, {}, {reload: true});
		});
	}
	
	$scope.deleteFromWorkshop = function(idFabber, $index, isCoordinator) {
		$http.post('/resource/workshop/delete-user', {
			idWorkshop: $stateParams.idWorkshop,
			idFabber: idFabber
		}).then(function(response) {
			if (isCoordinator) {
				$scope.workshop.coordinators.splice($index, 1);
			} else {
				$scope.workshop.collaborators.splice($index, 1);
			}			
		});
	}
	
	$scope.nameAsCoordinator = function(idFabber, $index) {
		$http.post('/resource/workshop/name-coordinator', {
			idWorkshop: $stateParams.idWorkshop,
			idFabber: idFabber
		}).then(function(response) {
			// delete from view model
			$scope.workshop.collaborators.splice($index, 1);
			$scope.workshop.coordinators.push(response.data);
		});
	}
});


//Controller for fabber detail view: fabber-detail.html
app.controller('FabberDetailCtrl', function($rootScope, $scope, $http, $filter, $stateParams) {
	
	$scope.loading2 = true;
	
	$http.get('/resource/fabber/detail', {
		params: {
			idFabber: $stateParams.idFabber
		}
	}).then(function(response) {		
		$scope.fabber = response.data;		
	}).finally(function() {
	    // called no matter success or failure
	    //$scope.loading1 = false;
	});
	
	$http.get('/resource/fabber/stats', {
		params: {
			idFabber: $stateParams.idFabber
		}
	}).then(function(response) {		
		$scope.stats = response.data;		
	}).finally(function() {
	    // called no matter success or failure
	    $scope.loading2 = false;
	});
	
});


// Controller for Personal Data view: personal-data.html
app.controller('PersonalDataCtrl', function($rootScope, $scope, $http) {
	
	$scope.loading1 = true;
	$scope.loading2 = false;
	
	$http.get('/resource/fabber/current').then(function(response) {
		$scope.fabber = response.data;
	}).finally(function() {
	    // called no matter success or failure
	    $scope.loading1 = false;
	});
	
	$scope.updateData = function() {
		$scope.loading2 = true;
		
		
		// When updating personal data we also fetch the data from fablabs api in case that changes have been made
		/* $http.get('/user').then(function(response) {			
			$rootScope.user.id = response.data.id;
			$rootScope.user.username = response.data.login;
			$rootScope.user.email = response.data.email;
			// TODO: to be replaced by real values from fablabs.io API
			$rootScope.user.firstName = response.data.login;
			$rootScope.user.lastName = response.data.login;
			$rootScope.user.idLab = 62;			
		}).finally(function() {
			
		}); */	
		
		$http.post('/resource/fabber/update', {
			firstName: $scope.fabber.firstName,
			lastName: $scope.fabber.lastName,
			// idLab: $scope.fabber.idLab,
			isFabAcademyGrad: $scope.fabber.isFabAcademyGrad,
			fabAcademyGradYear: $scope.fabber.fabAcademyGradYear
		}).then(function(response) {
			$scope.loading2 = false;
			$scope.result = "Data updated correctly.";
		});
	}
	
});


// Controller within: admin-lat-general-manager.html
app.controller('AdminLabManagerCtrl', function($scope, $http, $state) {
	
	$scope.loading = false;
	$scope.loading1 = true;
	
	$scope.updateLabs = function() {		
		$scope.loading = true;
		
		$http.get('https://api.fablabs.io/v0/labs.json').then(function(response) {
			
			$http.post('/resource/lab/update-all', {
				labs: response.data.labs
			}).then(function(response) {
				$scope.loading = false;
				// reload state
				$state.go($state.current, {}, {reload: true});
			});
			
		}); 
	}	
	
	$http.get('/resource/lab/list').then(function(response) {
		$scope.labs = response.data;
	}).finally(function() {
	    // called no matter success or failure
	    $scope.loading1 = false;
	});
	
});


// Controller within: admin-lat-general-manager.html
app.controller('AdminSubGroupManagerCtrl', function($scope, $http) {
	
	$scope.loading = true;
	
	$scope.openMenu = function($mdOpenMenu, ev) {
		$mdOpenMenu(ev);
	};
	
	// get all subgroups
	$http.get('/resource/subgroup/list-all-admin').then(function(response) {
		$scope.subgroups = response.data;
	}).finally(function() {
	    // called no matter success or failure
	    $scope.loading = false;
	});
	
	$scope.deleteSubGroup = function(idSubGroup, $index) {		
		$http.post('/resource/subgroup/delete', {
			idSubGroup: idSubGroup
		}).then(function(response) {
			// update ui model
			$scope.subgroups.splice($index, 1);
		});
	}	
	
});


//Controller within: admin-lat-general-manager.html
app.controller('AdminEventManagerCtrl', function($scope, $http) {
	
	$scope.loading = true;
	
	$scope.openMenu = function($mdOpenMenu, ev) {
		$mdOpenMenu(ev);
	};
	
	// get all upcoming workshops
	$http.get('/resource/workshop/list-upcoming-admin').then(function(response) {
		$scope.workshops = response.data;
	}).finally(function() {
	    // called no matter success or failure
	    $scope.loading = false;
	});
	
	$scope.deleteWorkshop = function(idWorkshop, $index) {		
		$http.post('/resource/workshop/delete', {
			idWorkshop: idWorkshop
		}).then(function(response) {
			// update ui model
			$scope.workshops.splice($index, 1);
		});
	}	
	
});


// ================= Extra controllers =====================

function DialogController($scope, $mdDialog) {
	  $scope.hide = function() {
	    $mdDialog.hide();
	  };
	  $scope.cancel = function() {
	    $mdDialog.cancel();
	  };
	  $scope.answer = function(answer) {
	    $mdDialog.hide(answer);
	  };
};


// Controller for: new-subgroup-dialog.tmpl.html
function NewSubGroupDialogController($scope, $mdDialog, $http) {
	 
	$scope.actionsDisabled = false;
	
	$scope.hide = function() {
	    $mdDialog.hide();
	  };
	$scope.cancel = function() {
	    $mdDialog.cancel();
	  };
	$scope.submit = function() {	
		$scope.actionsDisabled = true;
		  //TODO: validate fields
		  
		
		  console.log($scope.subgroup);
		  // submit data
		  $http.post('/resource/subgroup/save', {
			name: $scope.subgroup.name,
			idGroup: $scope.subgroup.group.idGroup,
			description: $scope.subgroup.description,
			reunionDay: $scope.subgroup.reunionDay,
			reunionTime: $scope.subgroup.reunionTime
		}).then(function(response) {	
			console.log("saved!");
			// pass data retrieved to parent controller
			$mdDialog.hide(response.data);	
		});
				  
	  };
	  
	  // get groups
	  $http.get('/resource/group/list').then(function(response) {
			$scope.groups = response.data;
	  });
};


// Controller for: new-workshop-dialog.tmpl.html
function NewWorkshopDialogController($scope, $mdDialog, $http, $stateParams) {
	 
	$scope.actionsDisabled = false;
	$scope.workshop = {};
	$scope.workshop.isPaid = false;
	$scope.workshop.idSubGroup = $stateParams.idSubGroup;
	
	// for getting the subgroup name and the next replication number
	$http.get('/resource/subgroup/brief', {
		params: {
			idSubGroup: $stateParams.idSubGroup
		}
	}).then(function(response) {
		$scope.subgroup = response.data;
	});
	
	$scope.hide = function() {
	    $mdDialog.hide();
	  };
	$scope.cancel = function() {
	    $mdDialog.cancel();
	  };
	$scope.submit = function() {	
		$scope.actionsDisabled = true;
		
		var dateF = $scope.workshop.date.getDate() + "/" + ($scope.workshop.date.getMonth() + 1) + "/" + $scope.workshop.date.getFullYear();
		console.log(dateF);
		// submit data
		$http.post('/resource/workshop/save', {
			name: $scope.workshop.name,
			date: dateF,
			time: $scope.workshop.time,
			isPaid: $scope.workshop.isPaid,
			price: $scope.workshop.price,
			currency: $scope.workshop.currency,
			coordinators: $scope.coordinators,
			collaborators: $scope.collaborators,
			locations: $scope.locations,
			idSubGroup: $scope.workshop.idSubGroup
		}).then(function(response) {	
			console.log("saved!");
			// pass data retrieved to parent controller
			$mdDialog.hide(response.data);	
		});			  
	  };
	  
	  // Autocomplete functions	  
	  $scope.coordinators = [];
	  $scope.collaborators = [];
	  $scope.locations = [];
	  $scope.searchText = null;
	  $scope.selectedItem = null;
	  
	  $http.get('/resource/subgroup/list-members-not-me', {
			params: {
				idSubGroup: $stateParams.idSubGroup
			}
		}).then(function(response) {
		  $scope.members = response.data;
	  });
	  
	  //$http.get('/resource/lab/list').then(function(response) {
	  //		$scope.labs = response.data;
	  //});
	  
	  /**
	   * Return the proper object when the append is called.
	   */
	  function transformChip(chip) {
		  // If it is an object, it's already a known chip
		  if (angular.isObject(chip)) {
			  return chip;
      	  }
		  
		  // Otherwise, create a new one
	      return { name: chip, type: 'new' }
	  }
	    
	  $scope.querySearch = function querySearch(query) {		  
		  var results = query ? $scope.members.filter(createFilterFor(query)) : [];
		  return results;
	  }
	  
	  $scope.querySearch2 = function(query) {		  		  
		  
		  return $http.get('/resource/lab/find-by-term', {
			params: {
				term: query
			}
		  }).then(function(response) {
			  return response.data;
		  });
		  
	  }
	  
	  /**
	  * Create filter function for a query string
	  */
	  function createFilterFor(query) {
		  var lowercaseQuery = angular.lowercase(query);
		  return function filterFn(member) {
		    return (member.fullName.indexOf(lowercaseQuery) != -1);
		  };
	  }
	  
};



//================= Custom directives =====================

// Defining a custom directive for handling the user avatar
// extracted from: http://plnkr.co/edit/UHq23coTUSrwnMKq1Itv?p=preview
app.directive('userAvatar', ["avatarService", function (avatarService) {
	var controller = function ($scope) {		
		$scope.$watch("mFabber", function(newValue, oldValue, scope) {
			if (newValue) {
				$scope.imageAvailable = false;
				if (!$scope.mFabber.avatar) {
					$scope.genericAvatar = avatarService.getAvatar($scope.mFabber);
				} else {
					$scope.imageAvailable = true;
				}	
			}
        });
	};
	return {
		restrict: 'E',
		scope: {
			mFabber: '=fabber',
			avatarWidth: '@avatarW',
			avatarHeight: '@avatarH',
			avatarFontSize: '@avatarFontSize'
		},
		template: '<div class="generic-avatar" style="width: {{avatarWidth}}px; height: {{avatarHeight}}px;">' +
			'<div class="avatar-circle" style="background-color: {{genericAvatar.background}};"></div>' +
			'<span class="name" style="font-size: {{avatarFontSize}}px;">{{genericAvatar.initials}}</span>' +
			'<div class="img-avatar" data-ng-if="imageAvailable" style="background-image: url({{mFabber.avatar}})"></div>' +
			'</div>',
		controller: controller
	};
}])
.factory("avatarService", function(){
    var avatarService = function(fabber) {
    	var colorCodes = ["#1abc9c", "#2ecc71", "#3498db", "#9b59b6", "#34495e", "#16a085", "#27ae60", 
    	                  "#2980b9", "#8e44ad", "#2c3e50", "#f1c40f", "#e67e22", "#e74c3c", "#95a5a6", 
    	                  "#f39c12", "#d35400", "#c0392b", "#bdc3c7", "#7f8c8d"];
      
		var i1 = "", i2 = "", nameArray = [];
		if (angular.isDefined(fabber.name)) {
			i1 = angular.uppercase(fabber.name.charAt(0));
			nameArray = fabber.name.split(" ");
			if (nameArray.length > 2) {
				i2 = angular.uppercase(nameArray[nameArray.length - 1].charAt(0));
			} else {
				i2 = angular.uppercase(nameArray[1].charAt(0));
			}
		} else {
			i1 = angular.uppercase(fabber.firstName.charAt(0));
			nameArray = fabber.lastName.split(" ");
			if (nameArray.length > 2) {
				i2 = nameArray[nameArray.length - 1].charAt(0);
			} else {
				i2 = angular.uppercase(nameArray[0].charAt(0));
			}
		}
		var initials = i1 + "" + i2;
		var charIndex = initials.charCodeAt(0) - 48,
	    	colourIndex = charIndex % 19;
		
		var background = colorCodes[colourIndex];
		return ({ "initials": initials, "background": background });
    }
    return {
      getAvatar: avatarService
    }
});

// Group avatar
app.directive('groupAvatar', ["groupAvatarService", function (groupAvatarService) {
	var controller = function ($scope) {		
		$scope.$watch("mGroup", function(newValue, oldValue, scope) {
			if (newValue) {
				$scope.imageAvailable = false;
				if (!$scope.mGroup.avatar) {
					$scope.genericAvatar = groupAvatarService.getAvatar($scope.mGroup);
				} else {
					$scope.imageAvailable = true;
				}	
			}
        });
	};
	return {
		restrict: 'E',
		scope: {
			mGroup: '=group',
			avatarWidth: '@avatarW',
			avatarHeight: '@avatarH',
			avatarFontSize: '@avatarFontSize'
		},
		template: '<div class="generic-avatar" style="width: {{avatarWidth}}px; height: {{avatarHeight}}px;">' +
			'<div class="avatar-circle" style="background-color: {{genericAvatar.background}};"></div>' +
			'<span class="name" style="font-size: {{avatarFontSize}}px;">{{genericAvatar.initials}}</span>' +
			'<div class="img-avatar" data-ng-if="imageAvailable" style="background-image:url({{mFabber.avatar}})"></div>' +
			'</div>',
		controller: controller
	};
}])
.factory("groupAvatarService", function() {
    var groupAvatarService = function(group) {
    	var colorCodes = ["#1abc9c", "#2ecc71", "#3498db", "#9b59b6", "#34495e", "#16a085", "#27ae60", 
    	                  "#2980b9", "#8e44ad", "#2c3e50", "#f1c40f", "#e67e22", "#e74c3c", "#95a5a6", 
    	                  "#f39c12", "#d35400", "#c0392b", "#bdc3c7", "#7f8c8d"];
      
		var i1 = "", nameArray = [];
		
		i1 = angular.uppercase(group.name.charAt(0));
		
		var initials = i1;
		var charIndex = initials.charCodeAt(0) - 48,
	    	colourIndex = charIndex % 19;
		
		var background = colorCodes[colourIndex];
		return ({ "initials": initials, "background": background });
    }
    return {
      getAvatar: groupAvatarService
    }
});
