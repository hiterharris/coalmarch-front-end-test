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
    $(".cta-button").on( 'click', () => {
        $(".contact-modal").show();
    });
    $(".close").on( 'click', () => {
        $(".contact-modal").hide();
    });
});