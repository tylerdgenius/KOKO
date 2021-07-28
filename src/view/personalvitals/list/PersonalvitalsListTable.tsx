import { Box, Modal } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Tooltip from '@material-ui/core/Tooltip';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import SearchIcon from '@material-ui/icons/Search';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { i18n } from 'src/i18n';
import personalvitalsSelectors from 'src/modules/personalvitals/personalvitalsSelectors';
import destroyActions from 'src/modules/personalvitals/destroy/personalvitalsDestroyActions';
import destroySelectors from 'src/modules/personalvitals/destroy/personalvitalsDestroySelectors';
import actions from 'src/modules/personalvitals/list/personalvitalsListActions';
import selectors from 'src/modules/personalvitals/list/personalvitalsListSelectors';
import ConfirmModal from 'src/view/shared/modals/ConfirmModal';
import Pagination from 'src/view/shared/table/Pagination';
import Spinner from 'src/view/shared/Spinner';
import TableCellCustom from 'src/view/shared/table/TableCellCustom';
import SimpleModal from './UpdateVitalModal';
import VisibilityIcon from '@material-ui/icons/Visibility';



function PersonalvitalsListTable(props) {
  const [
    recordIdToDestroy,
    setRecordIdToDestroy,
  ] = useState(null);
  const dispatch = useDispatch();

  const findLoading = useSelector(selectors.selectLoading);

  const destroyLoading = useSelector(
    destroySelectors.selectLoading,
  );

  const loading = findLoading || destroyLoading;

  const rows = useSelector(selectors.selectRows);
  const pagination = useSelector(
    selectors.selectPagination,
  );
  const selectedKeys = useSelector(
    selectors.selectSelectedKeys,
  );
  const hasRows = useSelector(selectors.selectHasRows);
  const sorter = useSelector(selectors.selectSorter);
  const isAllSelected = useSelector(
    selectors.selectIsAllSelected,
  );
  const hasPermissionToEdit = useSelector(
    personalvitalsSelectors.selectPermissionToEdit,
  );
  const hasPermissionToDestroy = useSelector(
    personalvitalsSelectors.selectPermissionToDestroy,
  );

  const doOpenDestroyConfirmModal = (id) => {
    setRecordIdToDestroy(id);
  };

  const doCloseDestroyConfirmModal = () => {
    setRecordIdToDestroy(null);
  };

  const doChangeSort = (field) => {
    const order =
      sorter.field === field && sorter.order === 'asc'
        ? 'desc'
        : 'asc';

    dispatch(
      actions.doChangeSort({
        field,
        order,
      }),
    );
  };

  const doChangePagination = (pagination) => {
    dispatch(actions.doChangePagination(pagination));
  };

  const doDestroy = (id) => {
    doCloseDestroyConfirmModal();

    dispatch(destroyActions.doDestroy(id));
  };

  const doToggleAllSelected = () => {
    dispatch(actions.doToggleAllSelected());
  };

  const doToggleOneSelected = (id) => {
    dispatch(actions.doToggleOneSelected(id));
  };

  return (
    <>
      <SimpleModal/>
      <br />
      <Box
        style={{
          display: "block",
          width: "100%",
          overflowX: "auto",
        }}
      >
        <Table
          style={{
            borderRadius: "5px",
            border: "1px solid rgb(224, 224, 224)",
            borderCollapse: "initial",
          }}
        >
          <TableHead>
            <TableRow>
              <TableCellCustom>
              </TableCellCustom>
              <TableCellCustom
                onSort={doChangeSort}
                hasRows={hasRows}
                sorter={sorter}
                name={"date"}
                label={i18n("entities.personalvitals.fields.date")}
              />
              <TableCellCustom
                onSort={doChangeSort}
                hasRows={hasRows}
                sorter={sorter}
                name={"temperature"}
                label={i18n("entities.personalvitals.fields.temperature")}
              />
              <TableCellCustom
                onSort={doChangeSort}
                hasRows={hasRows}
                sorter={sorter}
                name={"weight"}
                label={i18n("entities.personalvitals.fields.weight")}
              />
              <TableCellCustom
                onSort={doChangeSort}
                hasRows={hasRows}
                sorter={sorter}
                name={"height"}
                label={i18n("entities.personalvitals.fields.height")}
              />
              <TableCellCustom
                onSort={doChangeSort}
                hasRows={hasRows}
                sorter={sorter}
                name={"bmi"}
                label={i18n("entities.personalvitals.fields.bmi")}
              />
              <TableCellCustom
                onSort={doChangeSort}
                hasRows={hasRows}
                sorter={sorter}
                name={"bloodpressure"}
                label={i18n("entities.personalvitals.fields.bloodpressure")}
              />
              <TableCellCustom
                onSort={doChangeSort}
                hasRows={hasRows}
                sorter={sorter}
                name={"pulse"}
                label={i18n("entities.personalvitals.fields.pulse")}
              />
            </TableRow>
          </TableHead>
          <TableBody>
            {loading && (
              <TableRow>
                <TableCell colSpan={100}>
                  <Spinner />
                </TableCell>
              </TableRow>
            )}
            {!loading && !hasRows && (
              <TableRow>
                <TableCell colSpan={100}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    {i18n("table.noData")}
                  </div>
                </TableCell>
              </TableRow>
            )}
            {!loading &&
              rows.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>
                    <Box display="flex" justifyContent="flex-start">
                      {hasPermissionToEdit && (
                        <Tooltip title={i18n("common.edit")}>
                          <IconButton
                            color="primary"
                            component={Link}
                            to={`/personalvitals/${row.id}/edit`}
                          >
                            <VisibilityIcon />
                          </IconButton>
                        </Tooltip>
                      )}
                      {hasPermissionToDestroy && (
                        <Tooltip title={i18n("common.destroy")}>
                          <IconButton
                            color="primary"
                            onClick={() => doOpenDestroyConfirmModal(row.id)}
                          >
                            <DeleteIcon />
                          </IconButton>
                        </Tooltip>
                      )}
                    </Box>
                  </TableCell>
                  <TableCell>{row.date}</TableCell>
                  <TableCell>{row.temperature}</TableCell>
                  <TableCell>{row.weight}</TableCell>
                  <TableCell>{row.height}</TableCell>
                  <TableCell>{row.bmi}</TableCell>
                  <TableCell>{row.bloodpressure}</TableCell>
                  <TableCell>{row.pulse}</TableCell>

                  
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </Box>

      <Pagination onChange={doChangePagination} pagination={pagination} />

      {recordIdToDestroy && (
        <ConfirmModal
          title={i18n("common.areYouSure")}
          onConfirm={() => doDestroy(recordIdToDestroy)}
          onClose={() => doCloseDestroyConfirmModal()}
          okText={i18n("common.yes")}
          cancelText={i18n("common.no")}
        />
      )}
    </>
  );
}

export default PersonalvitalsListTable;
