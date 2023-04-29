import FilterBar from "./FilterBar";
import { GameItem } from "./GameItem";
import MainToolbar from "./MainToolbar";
import useItems from "../Hooks/useItems";
import { Box, Container, Grid, Paper } from "@mui/material";
import { useDeferredValue } from "react";

const ItemGrid = () => {
  const { hits, updateQuery } = useItems();
  const defItems = useDeferredValue(hits);

  return (
    <>
      <MainToolbar shown={hits.length} results={hits.length} updateQuery={updateQuery} />
      {/* <FilterBar /> */}
      <Container maxWidth="xl" sx={{ flexGrow: 1 }}>
        <Paper elevation={6} sx={{ paddingY: 2, paddingX: 2, minHeight: 300, boxShadow: "inset 0px 1px 2px 0px rgba(0, 0, 0, 0.5)" }}>
          <Box display="flex" justifyContent="center">
            <Grid container spacing={2}>
              {defItems.map(itm =>
                <Grid item key={itm.refIndex} sm={12} md={6} lg={4}>
                  <GameItem {...itm.item} />
                </Grid>)
              }
            </Grid>
          </Box>
        </Paper>
      </Container>
    </>
  );
};

export default ItemGrid;