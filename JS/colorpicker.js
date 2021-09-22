$('#colorpicker').on('input', function () {
    $('#hexcolor').val(this.value);
});
$('#hexcolor').on('input', function () {
    $('#colorpicker').val(this.value);
});



$('#colorpickers').on('input', function () {
    $('#hexcolors').val(this.value);
});
$('#hexcolors').on('input', function () {
    $('#colorpickers').val(this.value);
});