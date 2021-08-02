import { Avatar, Badge, Card, CardHeader, createStyles, FormControl, Grid, IconButton, InputLabel, makeStyles, MenuItem, TextField, Theme } from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import { Link } from 'react-router-dom';
import { FormProvider, useForm } from 'react-hook-form';
import Person from 'src/view/consultations/Person';
import yupFormSchemas from 'src/modules/shared/yup/yupFormSchemas';
import { i18n } from 'src/i18n';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import React, { useState } from 'react';
import Select from '@material-ui/core/Select';
import { InputFormItem } from '../shared/form/items/InputFormItem';

const useStyles = makeStyles({
    root: {
        width: "100%",
        minHeight: "100vh",
        transition: "0.3s",
        margin: "0 auto",
        borderRadius: "16px",
        cursor: "pointer",
        boxShadow: "0 4px 20px -12px rgba(0,0,0,0.3)",
        "&:hover": {
            boxShadow: "0 8px 40px -12.125px rgba(0,0,0,0.3)",
            transform: "scale(1)",
        },
        padding: '40px'
    },
    jss28: {
        flexGrow: 1,
        width: '100%',
        cursor: 'pointer',
        margin: '0 auto',
        borderRadius: '16px',
        boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
        transition: 'all 0.3s cubic-bezier(.25,.8,.25,1)',
        ' &:hover': {
            boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
        }
    },
    title: {
        fontWeight: "bold",
    },
    sub: {
        lineHeight: 1.8,
        fontSize: 12,
    },
    large: {
        width: '25px',
        height: '30px',
    },
    avatar: {
        backgroundColor: red[500],
        width: '60px',
        height: '60px'
    },
    si: {
        width: '200px',
    }

});



const handleSubmit = ({});

function AvailableConsultantPage(props) {
    const classes = useStyles();
    var hospitals = [
        { name: 'Dr. Goodness Ezeani', image: '/images/1.jpg', status: 'Available', Qualification: 'General Practitioner' },
        { name: 'Professor Tina Onyinye', image: '/images/1.jpg', status: 'Available', Qualification: 'ENT Specialist' },
        { name: 'Dr. Doyin ', image: '/images/1.jpg', status: 'Available', Qualification: 'General Practitioner' },
        { name: 'Dr. Tolu Awobayo', image: '/images/1.jpg', status: 'Available', Qualification: 'Consultant, Gynacologist' },

    ]
    const form = useForm({
        mode: 'all',
    });

    const onSubmit = (values) => {
        props.onSubmit(props.record?.id, values);
    };


    return (
        <>


            <div className="mt-2">
                <Card className={`${classes.root} fade-in-bck`}>
                    <Grid item lg={12}>

                        <Grid spacing={2} container>
                            <Grid item xl={4} lg={4} md={12} sm={12} xs={12}>

                                <FormProvider {...form}>
                                    <form onSubmit={form.handleSubmit(onSubmit)}>

                                        <Card elevation={10} style={{
                                            padding: 20,
                                            marginTop: 5,
                                        }}>
                                            <h2>{i18n('entities.search.name')} </h2>
                                            <Grid spacing={2} container>
                                                <Grid item md={6} sm={12} xs={12}>
                                                    <InputFormItem
                                                        name="specialization"
                                                        label={i18n('entities.search.fields.specialization')}
                                                        required={true}
                                                    />
                                                </Grid>
                                                <Grid item md={6} sm={12} xs={12}>
                                                    <InputFormItem
                                                        name="country"
                                                        label={i18n('entities.search.fields.country')}
                                                        required={true}
                                                    />
                                                </Grid>
                                                <Grid item md={6} sm={12} xs={12}>
                                                    <InputFormItem
                                                        name="hospital"
                                                        label={i18n('entities.search.fields.hospital')}
                                                        required={true}
                                                    />
                                                </Grid>


                                                <Grid item md={6} sm={12} xs={12}>
                                                    <InputFormItem
                                                        name="city"
                                                        label={i18n('entities.search.fields.city')}
                                                        required={true}
                                                    />
                                                </Grid>
                                                <Grid item md={6} sm={12} xs={12}>
                                                    <InputLabel id="demo-simple-select-label">{i18n('entities.search.fields.status')} </InputLabel>
                                                    <Select
                                                        labelId="demo-simple-select-label"
                                                        id="demo-simple-select"
                                                        name="status"
                                                        className={classes.si}
                                                    >

                                                        <MenuItem value="1">Online</MenuItem>
                                                        <MenuItem value="0">Offline</MenuItem>
                                                    </Select>
                                                </Grid>

                                                <Grid item md={6} sm={12} xs={12}>
                                                    <InputLabel id="demo-simple-select-label">{i18n('entities.search.fields.km')} </InputLabel>
                                                    <Select
                                                        labelId="demo-simple-select-label"
                                                        id="demo-simple-select"
                                                        name="km"
                                                        className={classes.si}
                                                    >

                                                        <MenuItem value="1">Online</MenuItem>
                                                        <MenuItem value="0">Offline</MenuItem>
                                                    </Select>
                                                </Grid>

                                            </Grid>


                                        </Card>
                                    </form>
                                </FormProvider>

                            </Grid>

                            <Grid item xl={8} lg={8} md={12} sm={12} xs={12}>



                                <Card elevation={10} style={{
                                    padding: 20,
                                    marginTop: 5,
                                }}>
                                    <Grid spacing={2}>
                                        <Grid container alignItems="center" item spacing={2} sm={12} md={12} xs={12} lg={12}>
                                            <h3>Available Doctors in ABCD Hospital  </h3>
                                        </Grid>
                                    </Grid>
                                    <Grid container alignItems="center" spacing={2}>
                                        {hospitals.map((row) => (
                                            <Grid item spacing={2} sm={6} md={4} xs={12} lg={3}>

                                                <Card className={classes.jss28}>
                                                    <CardHeader
                                                        avatar={
                                                            <Person />
                                                        }

                                                        title={row.name}
                                                        subheader={row.status + "  " + row.Qualification}
                                                    />
                                                </Card>




                                            </Grid>
                                        ))}
                                    </Grid>
                                </Card>

                            </Grid>

                        </Grid>









                    </Grid>
                </Card>
            </div>
        </>)
}



export default AvailableConsultantPage;
