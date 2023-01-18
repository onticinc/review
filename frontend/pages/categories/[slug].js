import React from 'react';
import { Box, Card, CardContent, Grid, Link, Typography, makeStyles } from "@material-ui/core";
import Layout from '../../components/Layout';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '85px',
    maxWidth: '95vw'
  },
  subtitle: {
    color: 'grey'
  },
  card: {
    cursor: 'pointer'
  }
}))

const Category = ({ category }) => {
  const classes = useStyles()
  return (
    <Layout>
      <Grid container className={classes.root}>
        <Grid item xs={12} md={3}>
          Todo Filters
        </Grid>
        <Grid item xs={12} md={9}>
          {category.business.map(business => (
            <Card className={classes.card}>
              <Box>
                <CardContent>
                  <Grid container>
                    <Grid item xs={6}>
                      <Typography variant='h5'>Business Name</Typography>
                      <Typography variant='subtitle1'>$$$</Typography>
                      <Link variant='subtitle1' href='http://localhost:3000'>Business Website</Link>
                      <Typography variant="subtitle1">Business Phone</Typography>
                      <Typography variant="subtitle1" className={classes.subtitle}>Description</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant='h5'>Todo Reviews</Typography>
                      <Typography variant='subtitle1'>Business Hours</Typography>
                      <Typography variant='subtitle1'>Address</Typography>
                    </Grid>
                  </Grid>
                </CardContent>
              </Box>
            </Card>
          ))}
        </Grid>
      </Grid>
    </Layout>
  )
}

export async function getServerSideProps({ query: { slug } }) {
  const { data } = await axios.get('http://127.0.0.1:8000/categories?slug=${slug}')

  return {
    props: {
      category: data.results[0] || null
    }
  }
}

export default Category;