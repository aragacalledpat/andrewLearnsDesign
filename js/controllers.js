var TypographyApp = angular.module('TypographyApp', []);

TypographyApp.controller('mainCtrl', function($scope) {
    $scope.totalGuesses = 0;
    $scope.correctGuesses = 0;
    $scope.typefaces = {
        "Old Style": ["EB Garamond",
            "Crimson Text",
            "Lusitana",
            "Cardo",
            "Alegreya"
        ],
        "Transitional": ["Libre Baskerville",
            "Source Serif Pro",
            "Playfair Display",
            "Merriweather",
            "PT Serif"
        ],
        "Modern": ["Vidaloka",
            "Cantata One",
            "Abril Fatface",
            "Prata",
            "Rufina"
        ],

        "Slab-Serif": ["Josefin Slab",
            "Lora",
            "Rokkitt",
            "Roboto Slab",
            "Arvo"
        ]
    };

    $scope.hideAnswer = true;

    $scope.toggleShowAnswer = function() {
        $scope.hideAnswer = !$scope.hideAnswer;
    };

    $scope.guess = function() {
        if ($scope.currentGuess == $scope.currentFamily) {
            $scope.totalGuesses += 1;
            $scope.correctGuesses += 1;
            $scope.setNewRandomTypeface();
        } else {
            $scope.totalGuesses += 1;
            $scope.hideAnswer = false;
        }

    };

    function pickRandomProperty(obj) {
        var result;
        var count = 0;
        for (var prop in obj)
            if (Math.random() < 1 / ++count)
                result = prop;
        return result;
    }

    function randomTypeface() {
        var randomFamily = pickRandomProperty($scope.typefaces);
        $scope.currentFamily = randomFamily;
        console.log($scope.currentFamily);
        var selection = $scope.typefaces[randomFamily][Math.floor(Math.random() * 5)];
        return selection;
    }

    $scope.setNewRandomTypeface = function() {
        $scope.currentSelection = randomTypeface();
        $("#testText").css("font-family", $scope.currentSelection + ", serif");
        $scope.hideAnswer = true;
    };

    $scope.setNewRandomTypeface();
});
