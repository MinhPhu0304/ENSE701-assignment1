import { AppBar as MUIAppBar, Typography, Button, 
  makeStyles, DialogContentText,
  Link as MUILink,
  Dialog, 
  DialogContent, DialogTitle } from '@material-ui/core'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export function AppBar () {
  const styles = useStyles()
  const [openModal, setOpenModal] = useState(false)

  const handleModalState = () => {
    setOpenModal(!openModal)
  }
  return (
    <>
    <MUIAppBar className={styles.container} position="relative">
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
        <Link to="/">
          <Typography className={styles.navLinks} variant="h4" >Post-it</Typography>
        </Link>
        <Link to="/board">
          <Button style={{ textTransform: 'none' }}>
            <Typography className={styles.navLinks} variant="h6" >Virtual Board</Typography>
          </Button>
        </Link>
      </div>
      <div>
        <Button size="medium" variant="outlined" color="secondary" onClick={handleModalState}>Say to the team</Button>
      </div>
    </MUIAppBar>

    <Dialog open={openModal} onClose={handleModalState}>
      <DialogTitle>Porfolio project built with 
        <span role="img" aria-label="heart">❤️</span>
      </DialogTitle>
      <DialogContent>
        <DialogContentText>Sites built by:</DialogContentText>
        <DialogContentText>
          <MUILink  style={{ color: '#90caf9'}} href="https://github.com/gogobebe2">William</MUILink>
        </DialogContentText>
        <DialogContentText>
          <MUILink style={{ color: '#90caf9'}} href="https://github.com/minhphu0304">Minh</MUILink>
        </DialogContentText>
      </DialogContent>
    </Dialog>
    </>
  )
}

function useStyles () {
  return makeStyles({
    container: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 8
    },
    navLinks: {
      paddingLeft: 16,
    }
  })()
}
