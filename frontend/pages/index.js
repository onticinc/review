import { Grid, Card, CardHeader, Avatar, makeStyles } from '@material-ui/core'
import Layout from '../components/Layout'

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '50px auto', 
    maxWidth: '95vw'
  }
}))


export default function Home( {number} ) {
  const classes = useStyles()
  return (
    <Layout>
      <Grid container className={classes.root} spacing={3}>
        <Grid item xs={12} md={4}>
          <Card>
            <CardHeader
              Avatar={
                <Avatar areia-label='category'>
                  Category
                </Avatar>
              }
              title={`Category ${number}`} 
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
    </Layout>
  )
}


export async function getServerSideProps() {
  //fetch our data
  const number = 5;

  return {
    props: {
      number: number
    }
  }
}