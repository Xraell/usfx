/**
 * Habilita el Botón para el Cambio de Carrera sólo cuando el select 
 * cambia de valor
 */
$('#selectCarreras').change(function(){
    $('#btnAplicar').prop('disabled',false);
});