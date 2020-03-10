import { AppBar as MUIAppBar, IconButton, Typography, Button, makeStyles } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'

export function AppBar () {
  const styles = useStyles()

  return (
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
        <Button size="medium" variant="outlined" color="secondary">Say to the team</Button>
      </div>
    </MUIAppBar>
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
