import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';

function BranchView(props) {
  const renderView = () => {
    const { record } = props;

    return (
      <div>
        <TextViewItem
          label={i18n("entities.branch.fields.organizationid")}
          value={record.organizationid}
        />
        <TextViewItem
          label={i18n("entities.branch.fields.branchcode")}
          value={record.branchcode}
        />
        <TextViewItem
          label={i18n("entities.branch.fields.branchkind")}
          value={record.branchkind}
        />
        <TextViewItem
          label={i18n("entities.branch.fields.branchcategory")}
          value={
            record.branchcategory &&
            i18n(`entities.branch.enumerators.gender.${record.branchcategory}`)
          }
        />
        <TextViewItem
          label={i18n("entities.branch.fields.description")}
          value={record.description}
        />

        <TextViewItem
          label={i18n("entities.branch.fields.status")}
          value={
            record.status &&
            i18n(`entities.branch.enumerators.gender.${record.status}`)
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

export default BranchView;
