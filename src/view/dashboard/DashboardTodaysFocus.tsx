import { Card, Grid, useTheme, CardContent, CardMedia, Typography, makeStyles } from "@material-ui/core";
import { useDispatch, useSelector } from 'react-redux';
import generalSelectors from "src/modules/general/generalSelectors";

const useStyles = makeStyles({
    root: {
        width: "100%",
        minHeight: '500px',
        transition: "0.3s",
        margin: "0 auto",
        borderRadius: "16px",
        cursor: "pointer",
        boxShadow: "0 4px 20px -12px rgba(0,0,0,0.3)",
        "&:hover": {
            boxShadow: "0 8px 40px -12.125px rgba(0,0,0,0.3)",
            transform: "scale(1)",
        },
    },
    title: {
        fontWeight: "bold",
    },
    sub: {
        lineHeight: 1.8,
        fontSize: 12,
    },
});

function TodaysFocus (props) {
    // local state
    const classes = useStyles();
    const theme = useTheme();
    const dispatch = useDispatch();

   // let DataRows = [] as Array<{PageName: string, PageTile: string, PageSubTitle: string, Image: string}> ;  // useSelector(selectors.selectLogoUrl);
   
   let _data = {} as {PageName: string, PageTile: string, PageSubTitle: string, Image: string} ;  // useSelector(selectors.selectLogoUrl);
    // let DataRows =  useSelector(generalSelectors.selectRows);


   
        return (
            <>
           {/*          {
              DataRows.map((_data) => ( */}
                   <div >
                <Card className={`${classes.root} fade-in-bck`}>
                    <CardMedia component="img" 
                    image="/images/usAsIS.png"
                    height="300" title={_data.PageName} />
                    <CardContent>
                        <Typography className={classes.title} variant="h5" component="h2" gutterBottom>
                            {_data.PageTile}
                        </Typography>
                        <Typography className={classes.sub} variant="body2" color="textSecondary" component="p">
                            {_data.PageSubTitle}
                        </Typography>
                    </CardContent>
                </Card>
                </div>
           {/*    ))} */}
             
                                       
            </>
        );
   

};

export default TodaysFocus;