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
	Array.prototype.randomize = function (x,y) {
		for (var i = 0; i < this.length; i++) {
			this.swap(i,getRandomIntInclusive(0,i));
		}
	}
	Array.prototype.compare = function (a,b) {
		if (this[a] > this[b]) { return 1; }
		if (this[a] < this[b]) { return -1; }
		return 0;
	}

	//////////////	SA 	//////////////


	Array.prototype.bubbleSort = function () {
		var i = 0, j = 1;
		var max = ra.length - 1;
		var bubbleSortInterval = window.setInterval(function(){
			bg[j-1] = 'red';
			bg[j] = 'red';
			myChart.update();
			if (ra.compare(j - 1, j) > 0) {
					ra.swap(j, j - 1);
				}
			if (j==max-i) {
				if (i==max) {
					clearInterval( bubbleSortInterval );
				} else { i++ }
				j=1;
			} else { j++ }
			myChart.update();
			bg[j-2] = 'hsla(0,100%,85%,1)';
			bg[j-1] = 'hsla(0,100%,85%,1)';
		}, 0);
	}


	//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	var arrayLength = 100;
	window.ra = [];
	for (var i = 0; i < arrayLength; i++) {
		ra[i] = i+1;
		ra.swap(i,getRandomIntInclusive(0,i));
	}
	window.oa = [];
	for (var i = 0; i < arrayLength; i++) {
		oa[i] = i+1;
	}
	window.bg = [];
	for (var i = 0; i < arrayLength; i++) {
		bg[i] = 'hsla(0,100%,85%,1)';
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
	            backgroundColor: bg,
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
	        },
	        tooltips:{
	        	enabled:false
	        }
	    }
	});

	$("table.sortable").tablesorter();
	$('td:first-child').prepend('<i class="fa fa-cog" aria-hidden="true"></i>');
	$('.random.btn').on('click',function(){
		ra.randomize();
		myChart.update();
	});

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
			ra.bubbleSort();
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

// $(window).load(function(){
// 	ra.bubbleSort();
// })