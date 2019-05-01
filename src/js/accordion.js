$('#accordionFaq').on('shown.bs.collapse', function () {
    $(this).find('h5').removeClass('open');
    $(this).find('.collapse.show').closest('.card').find('h5').addClass('open');
});