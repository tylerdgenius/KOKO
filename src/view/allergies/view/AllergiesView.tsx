import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';

function AllergiesView(props) {
  const renderView = () => {
    const { record } = props;

    return (
      <div>
        <TextViewItem
          label={i18n("entities.allergies.fields.name")}
          value={record.name}
        />
        <TextViewItem
          label={i18n("entities.allergies.fields.description")}
          value={record.description}
        />

        <TextViewItem
          label={i18n("entities.allergies.fields.status")}
          value={
            record.status &&
            i18n(`entities.allergies.enumerators.status.${record.status}`)
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

export default AllergiesView;
