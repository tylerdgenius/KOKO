import React, { useEffect } from 'react';
import { i18n } from 'src/i18n';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import PageTitle from 'src/view/shared/styles/PageTitle';
import Spinner from '../shared/Spinner';
import actions from 'src/modules/settings/settingsActions';
import selectors from 'src/modules/settings/settingsSelectors';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import CardActionArea from '@material-ui/core/CardActionArea';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom';
import PermissionChecker from 'src/modules/auth/permissionChecker';
import authSelectors from 'src/modules/auth/authSelectors';
import report from '../report';
import CardHeader from '@material-ui/core/CardHeader';
import ReportHistory from '../report/component/ReportHistory';

// const useStyles = makeStyles({
//   root: {
//     maxWidth: 345,
//   },
//   media: {
//     height: 140,
//   },
  
// });
const useStyles = makeStyles((theme) => ({
  
 
}));
const ReportListPage = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(actions.doInit());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
    
      <ContentWrapper>
        <PageTitle>
          {/* {i18n('entities.setup.title')} */}
        </PageTitle>
     
        <Grid spacing={2} container>
    
    <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
      <Card  style={{
        minHeight: "500px",
      }}>
          <CardHeader title="Reports">
    </CardHeader>
          <CardContent>
               <ReportHistory />
          </CardContent>
      </Card>
           

        </Grid>

     
</Grid>
      
    
      </ContentWrapper>
    </>
  );
};

export default ReportListPage;
