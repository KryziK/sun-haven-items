import { Container, Divider, Link, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Container maxWidth="xl" sx={{ display: "flex", flexDirection: "column", alignItems: "center", flexGrow: 1, paddingTop: 5 }}>
      <Divider flexItem variant="middle" />
      <Typography>Check out my mods over at <Link color="#d98f40" href="https://www.nexusmods.com/sunhaven/users/31196780?tab=user+files">NexusMods (User 31196780)</Link>!</Typography>
      <Typography>Has my work been useful to you? Consider buying me a coffee by donating at <Link color="#d98f40" href="https://ko-fi.com/KryziK">Ko-fi (KryziK)</Link>!</Typography>
      <Typography align="center" color="text.secondary" variant="caption" maxWidth="lg" mt={1}>
        This website and its contents are neither endorsed nor affiliated with Sun Haven or its creator, Pixel Sprout Studios.<br />
        This is purely a third-party convenience tool and hobby project.
      </Typography>
    </Container>
  );
};

export default Footer;