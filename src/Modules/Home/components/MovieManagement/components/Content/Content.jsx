// Material UI 5
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import RefreshIcon from '@mui/icons-material/Refresh';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
// Table
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
// Scss
import './content.scss';
// Redux
import { useSelector, useDispatch } from 'react-redux';
import { getMovies } from '../../../../slices/movieListSlice';
// Main
export default function Content() {
  const dispatch = useDispatch();
  const { movies, isLoading, error } = useSelector((state) => state.movieList);
  React.useEffect(() => {
    dispatch(getMovies());
  }, []);
  return (
    <Paper sx={{ maxWidth: 1100, margin: 'auto', overflow: 'hidden' }}>
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: '1px solid rgba(0, 0, 0, 0.12)' }}
      >
        <Toolbar>
          <Grid container spacing={2} alignItems="center">
            <Grid item>
              <SearchIcon color="inherit" sx={{ display: 'block' }} />
            </Grid>
            <Grid item xs>
              <TextField
                fullWidth
                placeholder="Search by email address, phone number, or user UID"
                InputProps={{
                  disableUnderline: true,
                  sx: { fontSize: 'default' },
                }}
                variant="standard"
              />
            </Grid>
            <Grid item>
              <Button variant="contained" sx={{ mr: 1 }}>
                Add movie
              </Button>
              <Tooltip title="Reload">
                <IconButton>
                  <RefreshIcon color="inherit" sx={{ display: 'block' }} />
                </IconButton>
              </Tooltip>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Typography
        className="content__table"
        sx={{ my: 5, mx: 2 }}
        color="text.secondary"
        align="center"
      >
        <TableContainer className="content__table" component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell align="center">Name</TableCell>
                <TableCell align="center">Image</TableCell>
                <TableCell align="center">Description</TableCell>
                <TableCell align="center"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {movies.map((movie) => (
                <TableRow
                  key={movie.maPhim}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell
                    component="th"
                    scope="row"
                    sx={{ fontSize: '1rem', fontWeight: '500' }}
                  >
                    {movie.maPhim}
                  </TableCell>
                  <TableCell
                    component="th"
                    scope="row"
                    sx={{ fontSize: '1rem', fontWeight: 'bold' }}
                  >
                    {movie.tenPhim}
                  </TableCell>
                  <img
                    className="content__img"
                    src={movie.hinhAnh}
                    alt={movie.tenPhim}
                    srcset=""
                  />
                  <TableCell align="left">{movie.moTa}</TableCell>
                  <TableCell align="left">
                    <Button variant="outlined">
                      <EditIcon></EditIcon>
                    </Button>
                    <Button
                      sx={{
                        color: 'red',
                        borderColor: 'red',
                        marginTop: '10px',
                      }}
                      variant="outlined"
                    >
                      <DeleteIcon />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Typography>
    </Paper>
  );
}
