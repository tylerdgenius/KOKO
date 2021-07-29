import * as React from 'react';
import {
    Avatar,
    Box,
    Button,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CustomerIcon from '@material-ui/icons/PersonAdd';
import { Link } from 'react-router-dom';


import CardWithIcon from 'src/view/components/CardWithIcon';
import { FC } from 'react';


interface Props {
    title: string,
    subtitle: string,
    link: string,
    baseNav: string
}



const GroupsOnline= (props) => {

    const classes = useStyles();

    const visitors = [{id: 10, avatar: '/images/1.jpg', first_name: 'Raleke', last_name: 'Obiora' },
    {id: 10, avatar: '/images/1.jpg', first_name: 'Adegoke', last_name: 'Doyin' },
    {id: 10, avatar: '/images/1.jpg', first_name: 'Goodness', last_name: 'Ezeani', appID: Number }]

    return (
        <CardWithIcon
            to={props.id}
            icon={CustomerIcon}
            title={props.title}
            subtitle={props.subtitle}
            
        >
            <List className={classes.DashboardCard}>
                {visitors
                    ? visitors.map((record: any) => (
                          <ListItem
                              button
                              to={`/customers/${record.id}`}
                              component={Link}
                              key={record.id}
                          >
                              <ListItemAvatar>
                                  <Avatar src={`${record.avatar}?size=32x32`} />
                              </ListItemAvatar>
                              <ListItemText
                                  primary={`${record.first_name} ${record.last_name}`}
                              />
                          </ListItem>
                      ))
                    : null}
            </List>
            <Box flexGrow="1">&nbsp;</Box>
            <Button
                className={classes.link}
                component={Link}
                to="/customers"
                size="small"
                color="primary"
            >
               
            </Button>
        </CardWithIcon>
    );
};

const useStyles = makeStyles(theme => ({
    link: {
        borderRadius: 0,
    },
    linkContent: {
        color: theme.palette.primary.main,
    },
    DashboardCard: {minHeight: '400px'}
}));

export default GroupsOnline;