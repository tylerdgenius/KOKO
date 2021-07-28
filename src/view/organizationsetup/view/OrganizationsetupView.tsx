import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';

function OrganizationsetupView(props) {
  const renderView = () => {
    const { record } = props;

    return (
      <div>
        <TextViewItem
          label={i18n("entities.organizationsetup.fields.name")}
          value={record.name}
        />
        <TextViewItem
          label={i18n("entities.organizationsetup.fields.email")}
          value={record.email}
        />
        <TextViewItem
          label={i18n("entities.organizationsetup.fields.logo")}
          value={record.logo}
        />
        <TextViewItem
          label={i18n("entities.organizationsetup.fields.description")}
          value={record.description}
        />
        <TextViewItem
          label={i18n("entities.organizationsetup.fields.domain")}
          value={record.domain}
        />
        <TextViewItem
          label={i18n("entities.organizationsetup.fields.address1")}
          value={record.address1}
        />
        <TextViewItem
          label={i18n("entities.organizationsetup.fields.address2")}
          value={record.address2}
        />
        <TextViewItem
          label={i18n("entities.organizationsetup.fields.phoneno")}
          value={record.phoneno}
        />
        <TextViewItem
          label={i18n("entities.organizationsetup.fields.Regno")}
          value={record.Regno}
        />

        <TextViewItem
          label={i18n("entities.organizationsetup.fields.dateofestablishment")}
          value={record.dateofestablishment}
        />

        <TextViewItem
          label={i18n("entities.organizationsetup.fields.organisation_type")}
          value={
            record.organisation_type &&
            i18n(
              `entities.organizationsetup.enumerators.organisation_type.${record.organisation_type}`
            )
          }
        />
        <TextViewItem
          label={i18n("entities.organizationsetup.fields.status")}
          value={
            record.status &&
            i18n(
              `entities.organizationsetup.enumerators.status.${record.status}`
            )
          }
        />
        <TextViewItem
          label={i18n("entities.organizationsetup.fields.country_code")}
          value={
            record.country_code &&
            i18n(
              `entities.organizationsetup.enumerators.country_code.${record.country_code}`
            )
          }
        />
        <TextViewItem
          label={i18n("entities.organizationsetup.fields.state_code")}
          value={
            record.state_code &&
            i18n(
              `entities.organizationsetup.enumerators.state_code.${record.state_code}`
            )
          }
        />
        <TextViewItem
          label={i18n("entities.organizationsetup.fields.lga_code")}
          value={
            record.lga_code &&
            i18n(
              `entities.organizationsetup.enumerators.lga_code.${record.lga_code}`
            )
          }
        />
      </div>
    );
  };

  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return renderView();
}

export default OrganizationsetupView;
