$( document ).ready(function() {
	//plugin function, place inside DOM ready function
    outdatedBrowser({
        bgColor: '#f25648',
        color: '#ffffff',
        lowerThan: 'transform',
        languagePath: ''
    });
    ///////////////////////////
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

	var ra = [];
	for (var i = 0; i < 100; i++) {
		ra[i] = i+1;
		ra.swap(i,getRandomIntInclusive(1,i));
	}
	var oa = []
	for (var i = 0; i < 100; i++) {
		oa[i] = i+1;
	}


    var ctx = $("#myChart");
	var myChart = new Chart(ctx, {
	    type: 'bar',
	    data: {
	        labels: oa,
	        datasets: [{
	            data: ra,
	            borderWidth: 1
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


});

