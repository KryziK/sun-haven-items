import { GameItemProp } from "../Hooks/useItems";
import { Box, Card, Chip, Stack, Typography } from "@mui/material";

const GameItemImage = ({ url, name, rarity }: { url: string | undefined, name: string, rarity: string }) => {
  return (
    <Stack direction="column" spacing={1} alignItems="center" width={100} flexShrink={0}>
      {url
        ? <img loading="lazy" src={url} alt={name} style={{ maxWidth: "100%", minWidth: 48, maxHeight: 60 }} />
        : <Box height={48} width={48} sx={{ backgroundColor: "dimgrey", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Typography variant="h4">?</Typography>
        </Box>
      }
      <Chip
        variant="outlined"
        size="small"
        label={rarity}
        color={(rarity === "Uncommon" ? "success" : rarity === "Rare" ? "primary" : rarity === "Epic" ? "secondary" : rarity === "Legendary" ? "warning" : "default")}
      />
    </Stack>
  );
};

export const GameItem = ({ id, hasIcon, name, location, rarity, description, tags }: GameItemProp) => {
  return (
    <Card sx={{ display: "flex", alignItems: "center", p: "10px", height: "107px" }}>
      <GameItemImage
        url={hasIcon ? `extracted_items/${id}.png` : undefined}
        name={name}
        rarity={rarity}
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
  );
};