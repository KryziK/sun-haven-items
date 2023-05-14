import { Search } from "@mui/icons-material";
import { Container, FormControlLabel, Grid, InputAdornment, Switch, TextField, Theme, Typography, useMediaQuery } from "@mui/material";
import { useEffect, useState } from "react";

const SearchIcon = () => <InputAdornment position="start"><Search /></InputAdornment>;

const MainToolbar = ({ shown, updateQuery, compact, setCompact }: {
  shown: number,
  updateQuery: React.Dispatch<React.SetStateAction<string>>,
  compact: boolean,
  setCompact: (compact: boolean) => void;
}) => {
  const [searchText, setSearchText] = useState("");
  const isSmallScreen = useMediaQuery<Theme>(theme => theme.breakpoints.down("sm"));

  useEffect(() => {
    updateQuery(searchText);
  }, [searchText, updateQuery]);

  return (
    <Container maxWidth="xl" sx={{ flexGrow: 1, paddingY: 2 }}>
      <Grid container spacing={isSmallScreen ? 1 : 2} width="100%">
        <Grid item xs={12} md={6}>
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
        {isSmallScreen && <Grid item xs={1} />}
        <Grid item xs>
          <FormControlLabel control={<Switch checked={compact} onChange={e => setCompact(e.target.checked)} />} label="Compact" />
        </Grid>
        {!isSmallScreen && <Grid item xs />}
        <Grid item xs={1} display="flex" alignItems="center" justifyContent="end">
          <Typography variant={isSmallScreen ? "body1" : "h6"}>{shown}</Typography>
        </Grid>
        {isSmallScreen && <Grid item xs={1} />}
      </Grid>
    </Container>
  );
};

export default MainToolbar;