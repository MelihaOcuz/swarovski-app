const styles = () => ({
    root: {
        background: 'transparent',
        boxShadow: 'none',
        height: 77,
    },
    navbarContainer: {
        height: 77,
        paddingLeft: 200,
        paddingRight: 200,
    },
    navbarLogo: {
        width: '20%',
    },
    navbarLinks: {
        width: '80%',
        textAlign: 'right',
    },
    container: {
        height: '100vh',
        backgroundImage: `url('background.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        overflow: 'hidden',
    },
    containerTitle: {
        height: 'calc(100% - 77px)',
        color: '#ffffff',
    },
    containerBody: {
        paddingLeft: 200,
        paddingRight: 200,
        marginTop: 150,
    },
    leftItemBody: {
        width: '50%',
    },
    rightItemBody: {
        width: '50%',
    },
    home: {
        width: '100%',
        paddingBottom: 50,
    },
    firstImage: {
        width: '50%',
    },
    secondImage: {
        width: '50%',
    },
    marginTop: {
        marginTop: 30,
    },
    logo: {
        width: 50,
    },
    navigationLinksContainer: {
        height: 'auto',
        position: 'relative',
        right: 'auto',
        top: 'auto',
        width: 'auto',
    },
    navigationLinksList: {
        background: 'none',
        display: 'flex',
        '-webkit-box-orient': 'horizontal',
        '-webkit-box-direction': '  normal',
        flexFlow: ['row', 'nowrap'],
        margin: 0,
        padding: 0,
        width: 'auto',
    },
    navigationLinkItem: {
        '-webkit-box-flex': 1,
        flex: '1 1 auto',
        margin: 0,
        textAlign: 'center',
        whiteSpace: 'nowrap',
    },
    route: {
        paddingLeft: 15,
    },
    link: {
        color: '#fff',
        fontWeight: 500,
        textDecoration: 'none !important',
    },
    image: {
        width: '100%',
    },
    textContainer: {
        marginTop: -80,
    },
    smartswarovski: {
        color: '#fff',
        fontSize: 25,
        fontWeight: 500,
        textDecoration: 'none !important'
    },
    justify: {
        textAlign: 'justify',
        padding: 16,
    },
});

export default styles;
