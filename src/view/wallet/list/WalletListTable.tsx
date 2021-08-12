import { Box, Button } from '@material-ui/core';

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

import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import walletSelectors from 'src/modules/wallet/walletSelectors';
import destroyActions from 'src/modules/wallet/destroy/walletDestroyActions';
import destroySelectors from 'src/modules/wallet/destroy/walletDestroySelectors';
import actions from 'src/modules/wallet/list/walletListActions';
import selectors from 'src/modules/wallet/list/walletListSelectors';
import ConfirmModal from 'src/view/shared/modals/ConfirmModal';
import Pagination from 'src/view/shared/table/Pagination';
import Spinner from 'src/view/shared/Spinner';
import TableCellCustom from 'src/view/shared/table/TableCellCustom';
import Typography from '@material-ui/core/Typography';



function WalletListTable(props) {
  const [
    recordIdToDestroy,
    setRecordIdToDestroy,
  ] = useState(null);
  const dispatch = useDispatch();

  const findLoading = useSelector(selectors.selectLoading);

  const destroyLoading = useSelector(
    destroySelectors.selectLoading,
  );

  const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
      textAlign: 'center',
    },
    pos: {
      marginBottom: 12,
    },
  
      moveText: {
        textAlign: 'left',
      }
    
  
  });
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

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
    walletSelectors.selectPermissionToEdit,
  );
  const hasPermissionToDestroy = useSelector(
    walletSelectors.selectPermissionToDestroy,
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
          display: 'block',
          width: '100%',
          overflowX: 'auto',
        }}
      >
        <Table
          style={{
            borderRadius: '5px',
            border: '1px solid rgb(224, 224, 224)',
            borderCollapse: 'initial',
          }}
        >
          <TableHead>
            <TableRow>
            

              <TableCellCustom
                onSort={doChangeSort}
                hasRows={hasRows}
                sorter={sorter}
                name={'datetimerange'}
                label={i18n(
                  'entities.wallet.fields.datetimerange',
                )}
              />

              <TableCellCustom
                onSort={doChangeSort}
                hasRows={hasRows}
                sorter={sorter}
                name={'name'}
                label={i18n(
                  'entities.wallet.fields.name',
                )}
              />


              <TableCellCustom
                onSort={doChangeSort}
                hasRows={hasRows}
                sorter={sorter}
                name={'birthdate'}
                label={i18n(
                  'entities.wallet.fields.walletbalance',
                )}
              />
              

<TableCellCustom
                onSort={doChangeSort}
                hasRows={hasRows}
                sorter={sorter}
                name={'status'}
                label={i18n(
                  'entities.wallet.fields.status',
                )}
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
                      display: 'flex',
                      justifyContent: 'center',
                    }}
                  >
                    {i18n('table.noData')}
                  </div>
                </TableCell>
              </TableRow>
            )}
            {!loading &&
              rows.map((row) => (
                <TableRow key={row.id}>
                 
               
                  <TableCell>{row.datetimerange}</TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.walletbalance}</TableCell>
                
                <TableCell>{row.status}</TableCell>             
                
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </Box>


      

      <Pagination
        onChange={doChangePagination}
        pagination={pagination}
      />

      

<Box
        style={{
          display: 'block',
          width: '100%',
          overflowX: 'auto',
        }}
      >
        <Table
          style={{
            borderRadius: '5px',
            border: '1px solid rgb(224, 224, 224)',
            borderCollapse: 'initial',
          }}
        >
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
                      display: 'flex',
                      justifyContent: 'center',
                    }}
                  >
                    {i18n('table.noData')}
                  </div>
                </TableCell>
              </TableRow>
            )}
            {!loading &&
              rows.map((row) => (
                <TableRow key={row.id}>
                 
               
                  <TableCell>&nbsp;</TableCell>
                  <TableCell>
                  <Typography color="secondary" gutterBottom>
                &nbsp;&nbsp; <label htmlFor="">Start a chance to win koko fp points</label>
              
              </Typography>
                    
                     
                  
                  </TableCell>
                  <TableCell>   <Button
                  variant="contained"
                  color="secondary"
                  type="submit"
                  disabled={props.loading}
                
                  size="small"
                  component={Link}
                  to=""
                >
                  {i18n('common.playgame')}
                </Button></TableCell>
                
                <TableCell> <Button
                  variant="contained"
                  color="secondary"
                  type="submit"
                  disabled={props.loading}
               
                  size="small"
                  component={Link}
                  to=""
                >
                  {i18n('common.watchgame')}
                </Button></TableCell>             
                
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </Box>
 
        
      {recordIdToDestroy && (
        <ConfirmModal
          title={i18n('common.areYouSure')}
          onConfirm={() => doDestroy(recordIdToDestroy)}
          onClose={() => doCloseDestroyConfirmModal()}
          okText={i18n('common.yes')}
          cancelText={i18n('common.no')}
        />
      )}
    </>
  );
}

export default WalletListTable;



