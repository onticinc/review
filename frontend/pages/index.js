import { Grid, Card, CardHeader, Avatar, makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '25px auto', 
    maxWidth: '95vw'
  }
}))


export default function Home() {
  const classes = useStyles()
  return (
    <Grid container className={classes.root} spacing={3}>
      <Grid item xs={12} md={4}>
        <Card>
          <CardHeader
            Avatar={
              <Avatar areia-label='category'>
                Category
              </Avatar>
            }
            title='Category'
            subheader='See all'
          />
        </Card>
      </Grid>
      <Grid item xs={12} md={4}>
        <Card>
          <CardHeader
            Avatar={
              <Avatar areia-label='category'>
                Category
              </Avatar>
            }
            title='Category'
            subheader='See all'
          />
        </Card>
      </Grid>
      <Grid item xs={12} md={4}>
        <Card>
          <CardHeader
            Avatar={
              <Avatar areia-label='category'>
                Category
              </Avatar>
            }
            title='Category'
            subheader='See all'
          />
        </Card>
      </Grid>
    </Grid>
  )
}
