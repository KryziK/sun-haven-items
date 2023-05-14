import { GameItemProp } from "../Hooks/useItems";
import { Box, Card, Chip, Grid, Stack, Theme, Typography, useMediaQuery } from "@mui/material";

const GameItemImage = ({ compact, id, url, name, rarity }: { compact: boolean, id: number, url: string | undefined, name: string, rarity: string }) => {
  return (
    <Stack direction="column" spacing={1} alignItems="center" width={86} flexShrink={0}>
      {url
        ? <img loading="lazy" src={url} alt={name} style={{ maxWidth: "100%", minWidth: 48, maxHeight: !compact ? 60 : 48, imageRendering: "pixelated" }} />
        : <Box height={48} width={48} sx={{ backgroundColor: "dimgrey", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Typography variant="h4">?</Typography>
        </Box>
      }
      <Chip
        variant="outlined"
        size="small"
        label={!compact ? rarity : `ID: ${id}`}
        color={(rarity === "Uncommon" ? "success" : rarity === "Rare" ? "primary" : rarity === "Epic" ? "secondary" : rarity === "Legendary" ? "warning" : "default")}
      />
    </Stack>
  );
};

export const GameItem = ({ compact, id, hasIcon, name, location, rarity, description, tags }: GameItemProp & { compact: boolean }) => {
  const isSmallScreen = useMediaQuery<Theme>(theme => theme.breakpoints.down("sm"));

  if (compact)
    return (
      <Grid item xs={4} sm="auto">
        <Card sx={{ display: "flex", alignItems: "center", p: "6px", height: "107px" }}>
          <Stack>
            <GameItemImage
              id={id}
              url={hasIcon ? `extracted_items/${id}.png` : undefined}
              name={name}
              rarity={rarity}
              compact={compact}
            />
          </Stack>
        </Card>
      </Grid >
    );

  return (
    <Grid item xs={12} md={6} lg={4}>
      <Card sx={{ display: "flex", alignItems: "center", p: "10px", }}>
        <GameItemImage
          id={id}
          url={hasIcon ? `extracted_items/${id}.png` : undefined}
          name={name}
          rarity={rarity}
          compact={compact}
        />
        <Box display="flex" flexDirection="column" pl={isSmallScreen ? "4px" : "10px"} flexGrow={0}>
          <Typography component="div" variant="subtitle1" noWrap>
            {name}
          </Typography>

          <Grid container direction="row" spacing={1} alignItems="center" pb={1}>
            <Grid item> <Chip size="small" {...isSmallScreen && { ...{ sx: { fontSize: ".64rem" } } }} label={`ID: ${id}`} /></Grid>
            {location && <Grid item> <Chip variant="outlined" size="small" {...isSmallScreen && { ...{ sx: { fontSize: ".64rem" } } }} label={location} /></Grid>}
            {tags.map(t => <Grid item key={t}><Chip variant="outlined" size="small" {...isSmallScreen && { ...{ sx: { fontSize: ".64rem" } } }} label={t} /></Grid>)}
          </Grid>

          <Typography component="span" variant="caption" color="text.secondary" maxWidth={350} height="3em" textOverflow="ellipsis" overflow="hidden" flexShrink={1}>
            {description.replace(/<\/?color[^>]*?>/g, "")}
          </Typography>
        </Box>
      </Card>
    </Grid>
  );
};