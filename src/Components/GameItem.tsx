import { GameItemProp } from "../Hooks/useItems";
import { Box, Card, Chip, Grid, Stack, Typography } from "@mui/material";

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
  if (compact)
    return (
      <Grid item>
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
      </Grid>
    );

  return (
    <Grid item sm={12} md={6} lg={4}>
      <Card sx={{ display: "flex", alignItems: "center", p: "10px", height: "107px" }}>
        <GameItemImage
          id={id}
          url={hasIcon ? `extracted_items/${id}.png` : undefined}
          name={name}
          rarity={rarity}
          compact={compact}
        />
        <Box display="flex" flexDirection="column" pl="10px" flexGrow={0}>
          <Typography component="div" variant="subtitle1" noWrap>
            {name}
          </Typography>

          <Stack direction="row" spacing={1} alignItems="center" pb={1}>
            <Chip size="small" label={`ID: ${id}`} />
            {location && <Chip variant="outlined" size="small" label={location} />}
            {tags.map(t => <Chip key={t} variant="outlined" size="small" label={t} />)}
          </Stack>

          <Typography component="span" variant="caption" color="text.secondary" maxWidth={350} height="3em" textOverflow="ellipsis" overflow="hidden" flexShrink={1}>
            {description}
          </Typography>
        </Box>
      </Card>
    </Grid>
  );
};