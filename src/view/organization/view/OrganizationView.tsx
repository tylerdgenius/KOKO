import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import { Grid } from '@material-ui/core';

function OrganizationView(props) {
  const renderView = () => {
    const { record } = props;

    return (
      <div>
        <Grid spacing={2} container>
          <Grid item lg={6} md={8} sm={12} xs={12}>
            <TextViewItem
              label={i18n("entities.organization.fields.name")}
              value={record.name}
            />
          </Grid>
          <Grid item lg={6} md={8} sm={12} xs={12}>
            <TextViewItem
              label={i18n("entities.organization.fields.email")}
              value={record.email}
            />
          </Grid>
          <Grid item lg={6} md={8} sm={12} xs={12}>
            <TextViewItem
              label={i18n("entities.organization.fields.logo")}
              value={record.logo}
            />
          </Grid>
          <Grid item lg={6} md={8} sm={12} xs={12}>
            <TextViewItem
              label={i18n("entities.organization.fields.description")}
              value={record.description}
            />
          </Grid>
          <Grid item lg={6} md={8} sm={12} xs={12}>
            <TextViewItem
              label={i18n("entities.organization.fields.domain")}
              value={record.domain}
            />
          </Grid>
          <Grid item lg={6} md={8} sm={12} xs={12}>
            <TextViewItem
              label={i18n("entities.organization.fields.address1")}
              value={record.address1}
            />
          </Grid>
          <Grid item lg={6} md={8} sm={12} xs={12}>
            <TextViewItem
              label={i18n("entities.organization.fields.address2")}
              value={record.address2}
            />
          </Grid>
          <Grid item lg={6} md={8} sm={12} xs={12}>
            <TextViewItem
              label={i18n("entities.organization.fields.phoneno")}
              value={record.phoneno}
            />
          </Grid>
          <Grid item lg={6} md={8} sm={12} xs={12}>
            <TextViewItem
              label={i18n("entities.organization.fields.Regno")}
              value={record.Regno}
            />
          </Grid>
          <Grid item lg={6} md={8} sm={12} xs={12}>
            <TextViewItem
              label={i18n(
                "entities.organization.fields.dateofestablishment"
              )}
              value={record.dateofestablishment}
            />
          </Grid>
          <Grid item lg={6} md={8} sm={12} xs={12}>
            <TextViewItem
              label={i18n(
                "entities.organization.fields.organisation_type"
              )}
              value={
                record.organisation_type &&
                i18n(
                  `entities.organization.enumerators.organisation_type.${record.organisation_type}`
                )
              }
            />
          </Grid>
          <Grid item lg={6} md={8} sm={12} xs={12}>
            <TextViewItem
              label={i18n("entities.organization.fields.status")}
              value={
                record.status &&
                i18n(
                  `entities.organization.enumerators.status.${record.status}`
                )
              }
            />
          </Grid>
          <Grid item lg={6} md={8} sm={12} xs={12}>
            <TextViewItem
              label={i18n("entities.organization.fields.country_code")}
              value={
                record.country_code &&
                i18n(
                  `entities.organization.enumerators.country_code.${record.country_code}`
                )
              }
            />
          </Grid>
          <Grid item lg={6} md={8} sm={12} xs={12}>
            <TextViewItem
              label={i18n("entities.organization.fields.state_code")}
              value={
                record.state_code &&
                i18n(
                  `entities.organization.enumerators.state_code.${record.state_code}`
                )
              }
            />
          </Grid>
          <Grid item lg={6} md={8} sm={12} xs={12}>
            <TextViewItem
              label={i18n("entities.organization.fields.lga_code")}
              value={
                record.lga_code &&
                i18n(
                  `entities.organization.enumerators.lga_code.${record.lga_code}`
                )
              }
            />
          </Grid>
        </Grid>
      </div>
    );
  };

  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return renderView();
}

export default OrganizationView;
