import { captureDocument, screenshotPathFromUrl, unslashit } from '../../helpers';

describe( 'VR Testing: index - welcoming', () => {
    let pages = [];

    it( 'Loads frontpage', () => {
        let url = "https://mwp-old.test/?wpnux_template_loader=1&template=index&style=welcoming&lang=en_US";

        cy.visit( url );
        captureDocument( screenshotPathFromUrl( url ) );

        cy.get( '#header__navigation' ).then( $headerNavigation => {
            [ ...$headerNavigation.find( '.menu-item a' ) ].forEach( $navLink => {
                pages.push( $navLink.href );
            } );
        } );
    } );

    it( 'Loads additional pages', () => {
        pages.forEach( page => {
            cy.visit( page );
            captureDocument( screenshotPathFromUrl( page ) );
        } );
    } );

} );
