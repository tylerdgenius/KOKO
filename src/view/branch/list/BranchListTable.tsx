import { Box } from '@material-ui/core';
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
import VisibilityIcon from "@material-ui/icons/Visibility";
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { i18n } from 'src/i18n';
import branchSelectors from 'src/modules/branch/branchSelectors';
import destroyActions from 'src/modules/branch/destroy/branchDestroyActions';
import destroySelectors from 'src/modules/branch/destroy/branchDestroySelectors';
import actions from 'src/modules/branch/list/branchListActions';
import selectors from 'src/modules/branch/list/branchListSelectors';
import ConfirmModal from 'src/view/shared/modals/ConfirmModal';
import Pagination from 'src/view/shared/table/Pagination';
import Spinner from 'src/view/shared/Spinner';
import TableCellCustom from 'src/view/shared/table/TableCellCustom';


function BranchListTable(props) {
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
    branchSelectors.selectPermissionToEdit,
  );
  const hasPermissionToDestroy = useSelector(
    branchSelectors.selectPermissionToDestroy,
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
              {/* <TableCellCustom padding="checkbox">
                {hasRows && (
                  <Checkbox
                    checked={Boolean(isAllSelected)}
                    onChange={() => doToggleAllSelected()}
                    size="small"
                  />
                )}
              </TableCellCustom> */}
              <TableCellCustom size="md" />
              <TableCellCustom
                onSort={doChangeSort}
                hasRows={hasRows}
                sorter={sorter}
                name={"organizationid"}
                label={i18n("entities.branch.fields.organizationid")}
              />
              <TableCellCustom
                onSort={doChangeSort}
                hasRows={hasRows}
                sorter={sorter}
                name={"branchcode"}
                label={i18n("entities.branch.fields.branchcode")}
              />
              {/* <TableCellCustom
                onSort={doChangeSort}
                hasRows={hasRows}
                sorter={sorter}
                name={"branchkind"}
                label={i18n("entities.branch.fields.branchkind")}
              />
              <TableCellCustom
                onSort={doChangeSort}
                hasRows={hasRows}
                sorter={sorter}
                name={"branchcategory"}
                label={i18n("entities.branch.fields.branchcategory")}
              /> */}
              <TableCellCustom
                onSort={doChangeSort}
                hasRows={hasRows}
                sorter={sorter}
                name={"description"}
                label={i18n("entities.branch.fields.description")}
              />
              <TableCellCustom
                onSort={doChangeSort}
                hasRows={hasRows}
                sorter={sorter}
                name={"status"}
                label={i18n("entities.branch.fields.status")}
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
                  {/* <TableCell padding="checkbox">
                    <Checkbox
                      checked={selectedKeys.includes(row.id)}
                      onChange={() => doToggleOneSelected(row.id)}
                      size="small"
                    />
                  </TableCell> */}
                  <TableCell>
                    <Box display="flex" justifyContent="flex-start">
                      <Tooltip title={i18n("common.view")}>
                        <IconButton
                          component={Link}
                          color="primary"
                          to={`/branch/${row.id}`}
                        >
                          <VisibilityIcon />
                        </IconButton>
                      </Tooltip>
                      {hasPermissionToEdit && (
                        <Tooltip title={i18n("common.edit")}>
                          <IconButton
                            color="primary"
                            component={Link}
                            to={`/branch/${row.id}/edit`}
                          >
                            <EditIcon />
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
                  <TableCell>{row.organizationid}</TableCell>
                  <TableCell>{row.branchcode}</TableCell>
                  {/* <TableCell>{row.branchkind}</TableCell>
                  <TableCell>
                    {row.branchcategory
                      ? i18n(
                          `entities.branch.enumerators.branchcategory.${row.branchcategory}`
                        )
                      : null}
                  </TableCell> */}
                  <TableCell>{row.description}</TableCell>
                  <TableCell>
                    {row.status
                      ? i18n(`entities.branch.enumerators.status.${row.status}`)
                      : null}
                  </TableCell>
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

export default BranchListTable;
