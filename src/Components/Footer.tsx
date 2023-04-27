import { Container, Divider, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Container maxWidth="xl" sx={{ display: "flex", flexDirection: "column", alignItems: "center", flexGrow: 1, paddingTop: 5 }}>
      <Divider flexItem variant="middle" />
      <Typography align="center" color="text.secondary" maxWidth="lg">
        This website and its contents are neither endorsed nor affiliated with Sun Haven or its creator, Pixel Sprout Studios.<br />
        This is purely a third-party convenience tool and hobby project.
      </Typography>
    </Container>
  );
};

export default Footer;