import { Search } from "@mui/icons-material";
import { Container, Grid, InputAdornment, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";

const SearchIcon = () => <InputAdornment position="start"><Search /></InputAdornment>;

const MainToolbar = ({ shown, results, updateQuery }: { shown: number, results: number, updateQuery: React.Dispatch<React.SetStateAction<string>> }) => {
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    updateQuery(searchText);
  }, [searchText, updateQuery]);

  return (
    <Container maxWidth="xl" sx={{ flexGrow: 1, paddingY: 2 }}>
      <Grid container spacing={2} width="100%">
        <Grid item xs={6} ml={3}>
          <TextField
            autoFocus
            size="small"
            fullWidth
            placeholder="Search..."
            InputProps={{ startAdornment: <SearchIcon /> }}
            value={searchText}
            onChange={e => setSearchText(e.target.value)}
          />
        </Grid>
        <Grid item xs></Grid>
        <Grid item xs={2} display="flex" alignItems="center" justifyContent="end">
          <Typography variant="h6">{shown} / {results}</Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default MainToolbar;