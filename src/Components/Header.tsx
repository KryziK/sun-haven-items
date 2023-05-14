import useItemMaster from "../Hooks/useItemMaster";
import { AppBar, Box, Container, LinearProgress, Link, Stack, Theme, Toolbar, Typography, useMediaQuery } from "@mui/material";

const Header = () => {
  const { isLoading, gameVersion, itemCount } = useItemMaster();
  const isSmallScreen = useMediaQuery<Theme>(theme => theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery<Theme>(theme => theme.breakpoints.down("lg"));

  return (
    <Container maxWidth="xl" sx={{ flexGrow: 1, paddingBottom: isMediumScreen ? 2 : 5 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography component="div" flexGrow={1} variant="h4" align={isSmallScreen ? "center" : "left"}>Sun Haven Items</Typography>
          {!isSmallScreen && !isMediumScreen &&
            <Stack direction="row" spacing={1} alignItems="center" height={48} maxHeight={48} >
              <Typography component="div" variant="body1" pr={1}>Find me on:</Typography>
              <Link href="https://www.nexusmods.com/sunhaven/users/31196780?tab=user+files" height="100%"><img src="nexus-mods.png" style={{ height: "100%" }} /></Link>
              <Link href="https://ko-fi.com/KryziK" height="100%" display="flex" alignItems="center"><img src="kofilogo.png" style={{ height: "80%" }} /></Link>
            </Stack>
          }

          {!isSmallScreen && <Box flexGrow={1} />}
          {!isSmallScreen &&
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
          }
        </Toolbar>
      </AppBar>

      {isMediumScreen &&
        <Stack direction="row" spacing={1} mt={1} alignItems="center" height={48} maxHeight={48} justifyContent="flex-end">
          {!isSmallScreen && <Typography component="div" variant="body1">Find me on:</Typography>}
          <Link href="https://www.nexusmods.com/sunhaven/users/31196780?tab=user+files" height="100%"><img src="nexus-mods.png" style={{ height: "100%" }} /></Link>
          <Link href="https://ko-fi.com/KryziK" height="100%" display="flex" alignItems="center"><img src="kofilogo.png" style={{ height: "80%" }} /></Link>
          {isSmallScreen && (
            <>
              <Box flexGrow={1} />
              <Stack>
                <Typography align="right" fontWeight="bold">Game Version</Typography>
                <Typography align="right" fontWeight="bold">Item Count</Typography>
              </Stack>
              <Stack width={50}>
                {isLoading ? <Box display="flex" flexDirection="column" justifyContent="center" sx={{ height: 24 }}><LinearProgress color="inherit" /></Box> : <Typography>{gameVersion}</Typography>}
                {isLoading ? <Box display="flex" flexDirection="column" justifyContent="center" sx={{ height: 24 }}><LinearProgress color="inherit" /></Box> : <Typography>{itemCount.toLocaleString()}</Typography>}
              </Stack>
            </>
          )}

        </Stack>}
    </Container>
  );
};

export default Header;