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
import SearchIcon from '@material-ui/icons/Search';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { i18n } from 'src/i18n';
import organizationsetupSelectors from 'src/modules/organizationsetup/organizationsetupSelectors';
import destroyActions from 'src/modules/organizationsetup/destroy/organizationsetupDestroyActions';
import destroySelectors from 'src/modules/organizationsetup/destroy/organizationsetupDestroySelectors';
import actions from 'src/modules/organizationsetup/list/organizationsetupListActions';
import selectors from 'src/modules/organizationsetup/list/organizationsetupListSelectors';
import ConfirmModal from 'src/view/shared/modals/ConfirmModal';
import Pagination from 'src/view/shared/table/Pagination';
import Spinner from 'src/view/shared/Spinner';
import TableCellCustom from 'src/view/shared/table/TableCellCustom';


function OrganizationsetupListTable(props) {
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
    organizationsetupSelectors.selectPermissionToEdit,
  );
  const hasPermissionToDestroy = useSelector(
    organizationsetupSelectors.selectPermissionToDestroy,
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
                name={"name"}
                label={i18n("entities.organizationsetup.fields.name")}
              />
              <TableCellCustom
                onSort={doChangeSort}
                hasRows={hasRows}
                sorter={sorter}
                name={"email"}
                label={i18n("entities.organizationsetup.fields.email")}
              />
              <TableCellCustom
                onSort={doChangeSort}
                hasRows={hasRows}
                sorter={sorter}
                name={"shortcode"}
                label={i18n("entities.organizationsetup.fields.shortcode")}
              />
              <TableCellCustom
                onSort={doChangeSort}
                hasRows={hasRows}
                sorter={sorter}
                name={"description"}
                label={i18n("entities.organizationsetup.fields.description")}
              />
              <TableCellCustom
                onSort={doChangeSort}
                hasRows={hasRows}
                sorter={sorter}
                name={"domain"}
                label={i18n("entities.organizationsetup.fields.domain")}
              />
              <TableCellCustom
                onSort={doChangeSort}
                hasRows={hasRows}
                sorter={sorter}
                name={"address1"}
                label={i18n("entities.organizationsetup.fields.address1")}
              />
              <TableCellCustom
                onSort={doChangeSort}
                hasRows={hasRows}
                sorter={sorter}
                name={"address2"}
                label={i18n("entities.organizationsetup.fields.address2")}
              />
              <TableCellCustom
                onSort={doChangeSort}
                hasRows={hasRows}
                sorter={sorter}
                name={"phoneno"}
                label={i18n("entities.organizationsetup.fields.phoneno")}
              />
              <TableCellCustom
                onSort={doChangeSort}
                hasRows={hasRows}
                sorter={sorter}
                name={"Regno"}
                label={i18n("entities.organizationsetup.fields.Regno")}
              />
              <TableCellCustom
                onSort={doChangeSort}
                hasRows={hasRows}
                sorter={sorter}
                name={"dateofestablishment"}
                label={i18n(
                  "entities.organizationsetup.fields.dateofestablishment"
                )}
              />
              <TableCellCustom
                onSort={doChangeSort}
                hasRows={hasRows}
                sorter={sorter}
                name={"logo"}
                label={i18n("entities.organizationsetup.fields.logo")}
              />
              <TableCellCustom
                onSort={doChangeSort}
                hasRows={hasRows}
                sorter={sorter}
                name={"organisation_type"}
                label={i18n(
                  "entities.organizationsetup.fields.organisation_type"
                )}
              />
              <TableCellCustom
                onSort={doChangeSort}
                hasRows={hasRows}
                sorter={sorter}
                name={"status"}
                label={i18n("entities.organizationsetup.fields.status")}
              />
              <TableCellCustom
                onSort={doChangeSort}
                hasRows={hasRows}
                sorter={sorter}
                name={"lga_code"}
                label={i18n("entities.organizationsetup.fields.lga_code")}
              />
              <TableCellCustom
                onSort={doChangeSort}
                hasRows={hasRows}
                sorter={sorter}
                name={"state_code"}
                label={i18n("entities.organizationsetup.fields.state_code")}
              />

              <TableCellCustom
                onSort={doChangeSort}
                hasRows={hasRows}
                sorter={sorter}
                name={"country_code"}
                label={i18n("entities.organizationsetup.fields.country_code")}
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
                          to={`/organizationsetup/${row.id}`}
                        >
                          <SearchIcon />
                        </IconButton>
                      </Tooltip>
                      {hasPermissionToEdit && (
                        <Tooltip title={i18n("common.edit")}>
                          <IconButton
                            color="primary"
                            component={Link}
                            to={`/organizationsetup/${row.id}/edit`}
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

                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.email}</TableCell>
                  <TableCell>{row.shortcode}</TableCell>
                  <TableCell>{row.description}</TableCell>
                  <TableCell>{row.domain}</TableCell>
                  <TableCell>{row.address1}</TableCell>
                  <TableCell>{row.address2}</TableCell>
                  <TableCell>{row.phoneno}</TableCell>
                  <TableCell>{row.Regno}</TableCell>
                  <TableCell>{row.dateofestablishment}</TableCell>
                  <TableCell>{row.logo}</TableCell>
                  <TableCell>
                    {row.organisation_type
                      ? i18n(
                          `entities.organizationsetup.enumerators.organisation_type.${row.organisation_type}`
                        )
                      : null}
                  </TableCell>
                  <TableCell>
                    {row.status
                      ? i18n(
                          `entities.organizationsetup.enumerators.status.${row.status}`
                        )
                      : null}
                  </TableCell>
                  <TableCell>
                    {row.lga_code
                      ? i18n(
                          `entities.organizationsetup.enumerators.lga_code.${row.lga_code}`
                        )
                      : null}
                  </TableCell>
                  <TableCell>
                    {row.state_code
                      ? i18n(
                          `entities.organizationsetup.enumerators.state_code.${row.state_code}`
                        )
                      : null}
                  </TableCell>
                  <TableCell>
                    {row.country_code
                      ? i18n(
                          `entities.organizationsetup.enumerators.country_code.${row.country_code}`
                        )
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

export default OrganizationsetupListTable;
