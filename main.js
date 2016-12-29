
var outfiles = ["bower_components/visavail/visavail/js/visavail.js",
                "https://use.fontawesome.com/8321cacbf6.js",
                "https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js",
                "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js",
                "bower_components/visavail/vendors/moment/moment-with-locales.min.js"
                ];

requirejs(outfiles, function(util) { });