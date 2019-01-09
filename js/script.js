$(document).ready( () => {
    $(".contact-modal").hide();
    $(".contact-button").on( 'click', () => {
        $(".contact-modal").show();
    });
    $(".close").on( 'click', () => {
        $(".contact-modal").hide();
    });
});

$(document).ready( () => {
    $('.main-content, .hero-section').on( 'click', () => {
        $(".contact-modal").hide();
    });
});