import { GameItemProp } from "../Hooks/useItems";
import { Box, Card, Chip, Stack, Typography } from "@mui/material";

const GameItemImage = ({ url, name, rarity }: { url: string | undefined, name: string, rarity: string }) => {
  return (
    <Stack direction="column" spacing={1} alignItems="center" width={100} flexShrink={0}>
      {url
        ? <img loading="lazy" src={url} height={48} width={48} alt={name} />
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

export const GameItem = ({ id, hasIcon, name, category, rarity, description }: GameItemProp) => {
  return (
    <Card sx={{ display: "flex", alignItems: "center", p: "10px", height: "107px" }}>
      <GameItemImage
        url={hasIcon ? `extracted_items/${id}.png` : undefined}
        name={name}
        rarity={rarity}
      />
      <Box display="flex" flexDirection="column" pl="10px" flexGrow={0}>
        <Stack direction="row" spacing={1} alignItems="center">
          <Typography component="div" variant="subtitle1" noWrap>
            {name}
          </Typography>
          <Chip variant="outlined" size="small" label={category} />
        </Stack>
        <Typography component="div" variant="body2">
          ID: {id}
        </Typography>
        <Typography component="span" variant="caption" color="text.secondary" maxWidth={350} height="3em" textOverflow="ellipsis" overflow="hidden" flexShrink={1}>
          {description}
        </Typography>
      </Box>
    </Card>
  );
};