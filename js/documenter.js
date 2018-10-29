/*
 * Part of Documenter.jl
 *     https://github.com/JuliaDocs/Documenter.jl
 *
 * License: MIT
 */
requirejs.config({
    baseUrl: '/js/',
    paths: {
        'jquery': 'jquery-3.3.1',
        'jqueryui': 'jqueryui',
        'mathjax': 'MathJax/MathJax.js?config=TeX-AMS_HTML',
        'elasticlunr': 'elasticlunr',
        'highlight': 'highlight',
        'highlight-julia': 'julia',
        'highlight-julia-repl': 'julia-repl',
    },
    shim: {
        'mathjax': {
            exports: "MathJax",

        },
        'highlight-julia': ['highlight'],
        'highlight-julia-repl': ['highlight'],
    }
});


require(['mathjax'], function(MathJax) {
    MathJax.Hub.Config({
        "tex2jax": {
            inlineMath: [
                ['$', '$'],
                ['\\(', '\\)']
            ],
            processEscapes: true
        }
    });
    MathJax.Hub.Config({
        config: ["MMLorHTML.js"],
        jax: [
            "input/TeX",
            "output/HTML-CSS",
            "output/NativeMML"
        ],
        extensions: [
            "MathMenu.js",
            "MathZoom.js",
            "TeX/AMSmath.js",
            "TeX/AMSsymbols.js",
            "TeX/autobold.js",
            "TeX/autoload-all.js"
        ]
    });
    MathJax.Hub.Config({
        TeX: {
            equationNumbers: {
                autoNumber: "AMS"
            }
        }
    });
})


require(['jquery', 'elasticlunr'], function($, elasticlunr) {
    $(document).ready(function() {


        elasticlunr.tokenizer.separator = /[\s\-\.]+/

        elasticlunr.trimmer = function (token) {
                return token.update(function (s) {
                    return s.replace(/^[^a-zA-Z0-9@!]+/, '').replace(/[^a-zA-Z0-9@!]+$/, '')
                })
        }

        elasticlunr.Pipeline.registerFunction(elasticlunr.stopWordFilter, 'juliaStopWordFilter')
        elasticlunr.Pipeline.registerFunction(elasticlunr.trimmer, 'juliaTrimmer')


        var index;
        $.getJSON("/js/si3.json", function(json) {

            index = elasticlunr.Index.load(json)
            $('#search-query').on("keyup", function(e) {
                if (e.keyCode == 13) {
                    var value = $(this).val();
                    alert(this.value);

                    var results = index.search(value, {
                        fields: {
                            location: {
                                boost: 3
                            },
                            title: {
                                boost: 2
                            },
                            text: {
                                boost: 1
                            }
                        }
                    });

                    if (results.length > 0) {
                        $("#docs").html("");                  
                        $("#docs").html('<p id="search-info">Number of results: <span id="search-results-number">' + results.length + '</span></p><ul id="search-results"></ul>');
                        var documenterBaseURL = ".";
                    } else {
                        $("#docs").html("");
                        $("#docs").html('<p id="search-info">Number of results: <span id="search-results-number">' + results.length + '</span></p>');
                    }

                    var inhtml = "";
                    $.each(results, function(key, val) {
                        var doc = val.doc
                        link = $('<a>')
                        link.text(doc.title)
                        link.attr('href', doc.location)
                        cat = $('<span class="category">(' + doc.category + ')</span>')
                        li = $('<li>').append(link).append(" ").append(cat)
                        $('#search-results').append(li)
                    });
                }
            });
        });
    });
});



require(['jquery', 'highlight', 'highlight-julia', 'highlight-julia-repl'], function($, hljs) {
    $(document).ready(function() {
        hljs.initHighlighting();
    })

})
