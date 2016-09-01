

$( document ).ready(function() {

	//plugin function, place inside DOM ready function
    outdatedBrowser({
        bgColor: '#f25648',
        color: '#ffffff',
        lowerThan: 'transform',
        languagePath: ''
    });
    ///////////////////////////		helpers		//////////////////////////////
    function getRandomIntInclusive(min, max) {
	  min = Math.ceil(min);
	  max = Math.floor(max);
	  return Math.floor(Math.random() * (max - min + 1)) + min;
	}
	Array.prototype.swap = function (x,y) {
	  var t = this[x];
	  this[x] = this[y];
	  this[y] = t;
	  t = null;
	  return this;
	}
	$.wait = function(delay, context){
	  var deferred = $.Deferred();
	  var timer = setTimeout(function(){
	    deferred.resolveWith(context || deferred);
	  }, delay);
	  deferred.fail(function(){
	    clearTimeout(timer);
	  });
	  return deferred;
	};

	//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	window.ra = [];
	for (var i = 0; i < 60; i++) {
		ra[i] = i+1;
		ra.swap(i,getRandomIntInclusive(0,i));
	}
	window.oa = []
	for (var i = 0; i < 60; i++) {
		oa[i] = i+1;
	}

	// console.log(ra);

    var ctx = $("#myChart");
	window.myChart = new Chart(ctx, {
	    type: 'bar',
	    data: {
	        labels: oa,
	        datasets: [{
	            data: ra,
	            borderWidth: 1,
	            backgroundColor: 'hsla(0,100%,85%,1)',
	            bordercolor: 'hsla(0,100%,55%,1)'
	        }]
	    },
	    options: {
	        scales: {
	            yAxes: [{
	                ticks: {
	                    beginAtZero:false
	                }
	            }]
	        }
	    }
	});

	$("table.sortable").tablesorter();
	$('td:first-child').prepend('<i class="fa fa-cog" aria-hidden="true"></i>');


	//quicksort.js from : https://github.com/benoitvallon/computer-science-in-javascript/blob/master/sorting-algorithms-in-javascript/quicksort.js


	$('td i.fa.fa-cog').on('click',function(){
		$(this).addClass('fa-spin');
		var type = $(this).next().text();

		if (type == 'Quicksort') {
			quicksortBasic(ra);
		} else if (type == 'Merge sort') {

		} else if (type == 'Heapsort') {

		} else if (type == 'Introsort') {

		} else if (type == 'Timsort') {

		} else if (type == 'Cubesort') {

		} else if (type == 'Binary tree sort') {

		} else if (type == 'Library sort') {

		} else if (type == 'Smoothsort') {

		} else if (type == 'Tournament sort') {

		} else if (type == "Franceschini's method[9]") {

		} else if (type == 'Block sort') {

		} else if (type == 'Shell sort') {

		} else if (type == 'Insertion sort') {

		} else if (type == 'Selection sort') {

		} else if (type == 'Bubble sort') {

		} else if (type == 'Cycle sort') {

		} else if (type == 'Strand sort') {

		} else if (type == 'Cocktail sort') {

		} else if (type == 'Comb sort') {

		} else if (type == 'Gnome sort') {

		} else if (type == 'Odd-even sort') {

		} else if (type == 'UnShuffle Sort[8]') {

		} else if (type == 'In-place merge sort') {

		} else if (type == 'Patience sorting') {

		} else {
			$.noop();
		}


	})
});

