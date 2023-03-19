import { Grid } from '@mui/material';
import { MyAppLayout } from '../layout/MyAppLayout';

export const MyAppPage = () => {
  return (
    <>
      <MyAppLayout>
        <Grid
          container
          sx={{ display: 'flex', justifyContent: 'center' }}
          spacing={2}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <h2>REMOVE THIS CODE !</h2>
        </Grid>
      </MyAppLayout>
    </>
  );
};
