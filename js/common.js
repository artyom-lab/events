$(function() {

$(document).on('click.bs.dropdown.data-api', '.dropdown-menu', function (e) { 
		e.stopPropagation();
	});

var start = moment("03/23/2020");
var end = moment("03/29/2020");

function cb(start, end) {
    $('#date').html(start.format('ddd, MMMM D') + ' - ' + end.format('ddd, MMMM D'));
}

$('#reportrange').daterangepicker({
    startDate: start,
    endDate: end,
}, cb);

cb(start, end);

});


