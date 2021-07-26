import * as React from 'react';
import { Box, Card, CardActions, Button, Typography } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import CodeIcon from '@material-ui/icons/Code';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import WalletIcon from '@material-ui/icons/PersonAdd';

import publishArticleImage from './styles/welcome_illustration.svg';
import CardWithIcon from '../components/CardWithIcon';

const useStyles = makeStyles(theme => ({
    root: {
        background:
            theme.palette.type === 'dark'
                ? '#535353'
                : `linear-gradient(to right, #2196f3 0%, #2196f3 35%), linear-gradient(to bottom, #2196f3 0%, #2196f3 50%), #6f4ceb`,

        color: '#fff',
        padding: 20,
        marginTop: theme.spacing(2),
        marginBottom: '1em',
    },
    media: {
        background: `url(${publishArticleImage}) top right / cover`,
        marginLeft: 'auto',
    },
    actions: {
        [theme.breakpoints.down('md')]: {
            padding: 0,
            flexWrap: 'wrap',
            '& a': {
                marginTop: '1em',
                marginLeft: '0!important',
                marginRight: '1em',
            },
        },
    },
}));

function Welcome(props) {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <Box display="flex">
                <Box flex="1">
                    <Typography variant="h5" component="h2" gutterBottom>
                        Welcome {props.UserName}
                    </Typography>
                    <Box maxWidth="40em">
                        <Typography variant="body1" component="p" gutterBottom>
                            Complete you sign up
                        </Typography>
                    </Box>
                    <CardActions className={classes.actions}>
                        <Button
                            variant="contained"
                            startIcon={<HomeIcon />}
                        >
                            Complete Profile
                        </Button>
                        <Button
                            variant="contained"
                            startIcon={<CodeIcon />}
                        >
                            Update Vitals
                        </Button>
                    </CardActions>
                </Box>

                <Box
                    display={{ xs: 'none', sm: 'none', md: 'block' }}
                    width="22cm"
                    overflow="hidden" 
                />
                <CardWithIcon icon={WalletIcon} to={"userID"}  title={"Wallet"}
            subtitle={"N5,000"} />
            </Box>
        </Card>
    );
};

Welcome.propTypes ={
    UserName: PropTypes.string
};

export default Welcome;


// className={classes.media}