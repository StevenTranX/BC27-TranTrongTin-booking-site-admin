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
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
// Scss
import './content.scss';
// Redux
import { useSelector, useDispatch } from 'react-redux';
import { getMovies, deleteMovies } from '../../../../slices/movieListSlice';
// router-dom
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
// Main
// Global Variable

const columns = [
  { id: 'name', label: 'ID', minWidth: 120 },
  { id: 'code', label: 'Name', minWidth: 170 },
  {
    id: 'image',
    label: 'Image',
    minWidth: 200,
    align: 'left',
  },
  {
    id: 'description',
    label: 'Description',
    minWidth: 300,
    align: 'center',
  },
  {
    id: 'action',
    label: 'Action',
    minWidth: 100,
    align: 'center',
  },
];

export default function Content() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const handleDeleteMovie = (movieID) => {
    dispatch(deleteMovies(movieID));
  };
  const { movies, isLoading, error } = useSelector((state) => state.movieList);

  React.useEffect(() => {
    dispatch(getMovies());
  }, []);
  return (
    <Paper sx={{ maxWidth: 1170, margin: 'auto', overflow: 'hidden' }}>
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
              <Button
                onClick={() => {
                  navigate('admin/addMovie');
                }}
                variant="contained"
                sx={{ mr: 1 }}
              >
                Add Movie
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
      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {movies
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((movie) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={movie.maPhim}
                    >
                      <TableCell sx={{ fontWeight: 'bold' }}>
                        {movie.maPhim}
                      </TableCell>
                      <TableCell sx={{ fontWeight: 'bold' }}>
                        {movie.tenPhim}
                      </TableCell>
                      <TableCell align="center">
                        <img
                          className="content__img"
                          src={movie.hinhAnh}
                          alt={movie.tenPhim}
                        />
                      </TableCell>
                      <TableCell align="left">
                        {movie.moTa.length > 50
                          ? movie.moTa.substr(0, 60) + '...'
                          : movie.moTa}
                      </TableCell>
                      <TableCell align="center">
                        <Link to={`admin/updateMovie/${movie.maPhim}`}>
                          <EditIcon
                            className="mr-2 cursor-pointer"
                            sx={{ color: 'blue' }}
                          />
                        </Link>
                        <DeleteIcon
                          className="ml-2 cursor-pointer"
                          sx={{ color: 'red' }}
                          onClick={() => {
                            handleDeleteMovie(movie.maPhim);
                          }}
                        />
                      </TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={movies.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Paper>
  );
}
