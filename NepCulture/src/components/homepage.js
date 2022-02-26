import React from 'react';
// import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
// import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
// import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';


function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                NepCulture
      </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    icon: {
        marginRight: theme.spacing(0),
    },
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
        marginTop: theme.spacing(4),
    },
    cardGrid: {
        paddingTop: theme.spacing(0),
        paddingBottom: theme.spacing(4),
        paddingLeft: theme.spacing(0),
    },
    card: {
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '100%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    },
}));

const cards = [1, 2, 3, 4, 5];

export default function Homepage() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
            {/* <AppBar position="relative">
                <Toolbar>
                    <CameraIcon className={classes.icon} />
                    <Typography variant="h6" color="inherit" noWrap>
                        Album layout
          </Typography>
                </Toolbar>
            </AppBar> */}
            <main>
                <div className='recommend'>
                    <text>Recommended</text>
                </div>
                <Container className={classes.cardGrid} maxWidth="lg">
                    {/* End hero unit */}
                    <Grid container spacing={5}>
                        {cards.map((card) => (
                            <Grid item key={card} xs={12} sm={8} md={3}>
                                <Card className={classes.card}>
                                    <CardMedia
                                        className={classes.cardMedia}
                                        image="https://www.mona.com.np/get-image/art_media_main/Mukti-Singh-Thapa_1593932777.jpg"
                                        title="Bhairava"
                                    />
                                    <CardContent className={classes.cardContent}>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Bhairava
                                        </Typography>
                                        <Typography>
                                            The face of Bhairava with the standing figure.
                                        </Typography>
                                        <div className='artist'>
                                            <text>
                                                By: Mukti Singh Thapa
                                            </text>
                                        </div>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" color="primary">
                                            View
                                        </Button>
                                        <IconButton aria-label="share">
                                            <ShareIcon />
                                        </IconButton>
                                        <IconButton aria-label="add to favorites">
                                            <FavoriteIcon />
                                        </IconButton>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
                {/* another part */}
                <Container className={classes.cardGrid} maxWidth="lg">
                    <Grid container spacing={5}>
                        {cards.map((card) => (
                            <Grid item key={card} xs={12} sm={8} md={3}>
                                <Card className={classes.card}>
                                    <CardMedia
                                        className={classes.cardMedia}
                                        image="https://www.mona.com.np/get-image/art_media_main/04ST2020_1620035459.jpg"
                                        title="ARHAT BAKULA"
                                    />
                                    <CardContent className={classes.cardContent}>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Arhat Bakula
                        </Typography>
                                        <Typography>
                                            “Arhat” means the one who has attained enlightenment.
                                            Arhat Bakula
                                            has raised a pearl in his right hand,
                                            and in the left hand,
                                            he carries a mongoose.
                        </Typography>
                                        <div className='artist'>
                                            <text>
                                                By: Puran Sakya
                                            </text>
                                        </div>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" color="primary">
                                            View
                                        </Button>
                                        <IconButton aria-label="share">
                                            <ShareIcon />
                                        </IconButton>
                                        <IconButton aria-label="add to favorites">
                                            <FavoriteIcon />
                                        </IconButton>

                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
                {/* for Category */}
                <div className='recommend'>
                    <text>Category</text>
                </div>
                <div className='category'>
                    <ul className="catbuttons">
                        <li><Button color="primary" size="large">Canvas & Paintings</Button></li>
                        <li><Button color="primary" size="large">Handicraft Goods</Button></li>
                        <li><Button color="primary" size="large">Decorations Items</Button></li>
                        <li><Button color="primary" size="large">Puja Essentials</Button></li>
                        <li><Button color="primary" size="large">IDOL & FIGURINE</Button></li>
                    </ul>
                </div>
                <br></br>
                {/* For Culture */}
                <div className='recommend'>
                    <text>Culture</text>
                </div>
                <div className='category'>
                    <ul className="catbuttons">
                        <li><Button color="primary" size="large">Newari</Button></li>
                        <li><Button color="primary" size="large">Maithili</Button></li>
                        <li><Button color="primary" size="large">Sherpa</Button></li>
                        <li><Button color="primary" size="large">Tharu</Button></li>
                        <li><Button color="primary" size="large">...</Button></li>
                    </ul>
                </div>
            </main>
            {/* Footer */}
            <footer className={classes.footer}>
                <Typography variant="h6" align="center" gutterBottom>
                    <pre>
                        Terms of Use   ||   Privacy Policy
                    </pre>
                </Typography>
                <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                    Subscribe us at nepculture@gmail.com
                </Typography>
                <Copyright />
            </footer>
            {/* End footer */}
        </React.Fragment >

    );
}