import { Search } from "@mui/icons-material";
import { Container, FormControlLabel, Grid, InputAdornment, Switch, TextField, Theme, Typography, useMediaQuery } from "@mui/material";
import { useEffect, useState } from "react";

const SearchIcon = () => <InputAdornment position="start"><Search /></InputAdornment>;

const MainToolbar = ({ shown, results, updateQuery, compact, setCompact }: {
  shown: number,
  results: number,
  updateQuery: React.Dispatch<React.SetStateAction<string>>,
  compact: boolean,
  setCompact: React.Dispatch<React.SetStateAction<boolean>>
}) => {
  const [searchText, setSearchText] = useState("");
  const isSmallScreen = useMediaQuery<Theme>(theme => theme.breakpoints.down("sm"));

  useEffect(() => {
    updateQuery(searchText);
  }, [searchText, updateQuery]);

  return (
    <Container maxWidth="xl" sx={{ flexGrow: 1, paddingY: 2 }}>
      <Grid container spacing={isSmallScreen ? 1 : 2} width="100%">
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
        <Grid item xs>
          <FormControlLabel control={<Switch checked={compact} onChange={e => setCompact(e.target.checked)} />} label="Compact" />
        </Grid>
        {!isSmallScreen && <Grid item xs></Grid>}
        <Grid item xs={"auto"} display="flex" alignItems="center" justifyContent="end">
          <Typography variant={isSmallScreen ? "body1" : "h6"}>{shown}</Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default MainToolbar;