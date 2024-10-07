import React, { useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, Typography, Box } from '@mui/material';
import logo from '../../assets/images/home/mainlogo.png';

const PermissionBox = () => {
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box>
      <Box sx={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f4f4f4' }}>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          maxWidth="sm"
          fullWidth
          sx={{ '& .MuiDialog-paper': { padding: '20px', borderRadius: '8px' } }}
        >
          <DialogTitle id="alert-dialog-title" sx={{ backgroundColor: '#DF3E26', color: '#21324D', marginBottom: "20px", borderRadius: "10px" }}>
            {"Welcome to Our Website"}
          </DialogTitle>
          <DialogContent>
            <Typography variant='h4' align="center">
              {/* <img src={logo} alt='' style={{ width: '100%', maxWidth: '200px', height: 'auto' }} /> */}
              "<span className='ieri' style={{ color: '#DF3E26' }}>S</span>wift<span className='ieri' style={{ color: '#DF3E26' }}>E</span>x"
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} sx={{ bgcolor: '#DF3E26', fontSize: '20px', fontWeight: '700' }} color="inherit" variant="contained">
              OK
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </Box>
  );
};

export default PermissionBox;