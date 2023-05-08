import { GameItem } from "./GameItem";
import MainToolbar from "./MainToolbar";
import useItems from "../Hooks/useItems";
import { Box, Container, Grid, Paper } from "@mui/material";
import { useDeferredValue, useState } from "react";
// import FilterBar from "./FilterBar";

const ItemGrid = () => {
  const { hits, updateQuery } = useItems();
  const [compactMode, setCompactMode] = useState(false);
  const defItems = useDeferredValue(hits);

  return (
    <>
      <MainToolbar shown={hits.length} updateQuery={updateQuery} compact={compactMode} setCompact={setCompactMode} />
      {/* <FilterBar /> */}
      <Container maxWidth="xl" sx={{ flexGrow: 1 }}>
        <Paper elevation={6} sx={{ paddingY: 2, paddingX: 2, minHeight: 300, boxShadow: "inset 0px 1px 2px 0px rgba(0, 0, 0, 0.5)" }}>
          <Box display="flex" justifyContent="center">
            <Grid container spacing={2} justifyContent="space-evenly">
              {defItems.map(itm => <GameItem key={itm.refIndex} {...itm.item} compact={compactMode} />)}
            </Grid>
          </Box>
        </Paper>
      </Container>
    </>
  );
};

export default ItemGrid;