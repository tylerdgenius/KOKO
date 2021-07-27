import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';

function PersonalvitalsView(props) {
  const renderView = () => {
    const { record } = props;

    return (
      <div>
        <TextViewItem
          label={i18n("entities.personalvitals.fields.temperature")}
          value={record.temperature}
        />

        <TextViewItem
          label={i18n("entities.personalvitals.fields.weight")}
          value={record.weight}
        />
        <TextViewItem
          label={i18n("entities.personalvitals.fields.height")}
          value={record.height}
        />
        <TextViewItem
          label={i18n("entities.personalvitals.fields.bloodpressure")}
          value={record.bloodpressure}
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

export default PersonalvitalsView;
