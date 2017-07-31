
export const mbStyle = {
    padding: '10px',
    position: 'fixed',
    bottom: '0',
    left: '0',
    width: '100%',
    minWidth: '300px',
    whosTyping: {
        backgroundColor: '#f7f7f7',
        display: 'block',
        float: 'left',
        clear: 'both',
        padding: '5px 10px',
        color: '#000',
        margin: '5px',
        width: 'auto',
        borderRadius: '25px',
        fontSize: '12px'
    },
    form: {
        clear: 'both',
        border: '2px solid #444444',
        overflow: 'auto',
        borderRadius: '25px',
        backgroundColor: '#fff'
    },
    input: {
        height: '50px',
        border: '1px solid #fff',
        width: '80%',
        float: 'left',
        minWidth: '200px',
        paddingLeft: '20px'
    },
    button: {
        height: '35px',
        borderRadius: '50%',
        border: '1px solid #FFCA09',
        width: '35px',
        marginTop: '7.5px',
        marginRight: '10px',
        float: 'right',
        backgroundColor: '#FFCA09',
        color: '#fff',
        fontWeight: 'bold'
    }
};
export const sbStyle = {
    position: 'fixed',
    backgroundColor: 'rgba(0,0,0,0.5)',
    height: '100vh',
    width: '100%',
    zIndex: '2000',
    display: 'block',
    left:'0px',
    overflow:'hidden',
    side: {
        width: '50%',
        backgroundColor: '#fff',
        height: '100%',
        float:'left'
    },
        close: {
        width: '50%',
        height: '100%',
        float:'left'
    },
    off: {
        left:'-100%',
        display: 'block',
        position: 'fixed',
        backgroundColor: 'rgba(0,0,0,0.5)',
        height: '100vh',
        width: '100%',
        zIndex: '2000',
    }
}
export const mtStyle = {
    position: 'fixed',
    top: '50px',
    backgroundColor: '#f7f7f7',
    height: '80vh',
    width: '100%',
    overflow: 'auto',
    padding: '20px',

    mtList: {
        height: '100%',
        width: '100%',

        mtItem: {
            backgroundColor: '#fff',
            padding: '10px',
            width: 'auto',
            float: 'left',
            margin: '5px 0',
            clear: 'both',
            listStyle: 'none',
            borderRadius: '25px'

        }

    }

};

export const nbStyle = {
    width: '100%',
    position: 'fixed',
    height: '50px',
    backgroundColor: '#FFCA09',
    top: '0px',
    left: '0px',
    bar: {
        float: 'left',
        margin: '10px 30px 0 0',
        backgroundColor: '#FFCA09',
        border: '1px solid #FFCA09',
        color: '#fff',
        fontSize: '20px',
        height: '30px'
    },
    logo: {
        float: 'left',
        margin: '10px 30px 10px 0',
        height: '30px',
        verticalAlign: 'middle'

    },
    typing: {
        fontSize: '12px',
        float: 'left',
        p: {
            lineHeight: '50px',
            verticalAlign: 'middle'
        }
    },
    accActive: {
        float: 'right',
        lineHeight: '50px',
        fontWeight: 'bold',
        verticalAlign: 'middle',
        margin: '0 5px'
    },
    signOut: {
        float: 'right',
        height: '30px',
        margin: '10px 5px',
        verticalAlign: 'middle',
        backgroundColor: 'rgba(255,255,255,0.5)',
        padding: '5px 10px',
        border: '0px solid rgba(255,255,255,0.5)',
        borderRadius: '25px'
    }
};