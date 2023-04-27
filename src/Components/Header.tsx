import useItemMaster from "../Hooks/useItemMaster";
import { AppBar, Box, Container, LinearProgress, Stack, Toolbar, Typography } from "@mui/material";

const Header = () => {
  const { isLoading, gameVersion, itemCount } = useItemMaster();

  return (
    <Container maxWidth="xl" sx={{ flexGrow: 1, paddingBottom: 5 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography component="div" variant="h4" flexGrow={1}>Sun Haven Items</Typography>

          <Stack direction="row" spacing={1}>
            <Stack>
              <Typography align="right" fontWeight="bold">Game Version</Typography>
              <Typography align="right" fontWeight="bold">Item Count</Typography>
            </Stack>

            <Stack width={50}>
              {isLoading ? <Box display="flex" flexDirection="column" justifyContent="center" sx={{ height: 24 }}><LinearProgress color="inherit" /></Box> : <Typography>{gameVersion}</Typography>}
              {isLoading ? <Box display="flex" flexDirection="column" justifyContent="center" sx={{ height: 24 }}><LinearProgress color="inherit" /></Box> : <Typography>{itemCount.toLocaleString()}</Typography>}
            </Stack>
          </Stack>
        </Toolbar>
      </AppBar>
    </Container>
  );
};

export default Header;