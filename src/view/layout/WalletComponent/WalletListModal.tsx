
import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

import { Button } from '@material-ui/core';
import { i18n } from 'src/i18n';

import ColoredChip from 'src/view/shared/ColoredChip';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import TabsWrappedLabel from './TabsWrappedLabel';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,

    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      position: 'absolute',
      width: 300,
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),

      
    },
  }),
);

export function WalletListModal() {
  const classes = useStyles();
  // getModalStyle is not a pure function, 

  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
        <TabsWrappedLabel />
    </div>
  );

  return (
    <div>
                <Button
                   
                   startIcon={<AccountBalanceWalletIcon style={{ color: "white", fontSize: 50 }}/>}
                   
                  type="submit"
                  size="small" onClick={handleOpen}>
      </Button>
      <label> Top Up</label>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}

export default WalletListModal;
