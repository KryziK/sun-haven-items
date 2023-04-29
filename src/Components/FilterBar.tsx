import { Box, Checkbox, Container, FormControl, FormControlLabel, FormGroup, Paper, Radio, RadioGroup, Typography } from "@mui/material";

const tags = (await (await fetch("extracted_items/tags.txt")).text()).split("\n");

const FilterBar = () => {
    return (
        <Container maxWidth="sm">
            <Box position="absolute" left={0}>
                <Paper elevation={6} sx={{ paddingY: 2, paddingX: 2, minHeight: 300, boxShadow: "inset 0px 1px 2px 0px rgba(0, 0, 0, 0.5)" }}>
                    <Typography variant="h6">Filters</Typography>
                    <FormControl>
                        <RadioGroup row>
                            <FormControlLabel value="OR" control={<Radio />} label="OR" checked />
                            <FormControlLabel value="AND" control={<Radio />} label="AND" />
                        </RadioGroup>
                    </FormControl>
                    <Typography fontWeight="bold">Location</Typography>
                    <FormGroup sx={{ marginLeft: 2 }}>
                        <FormControlLabel control={<Checkbox />} label="Sun Haven" />
                        <FormControlLabel control={<Checkbox />} label="Nel'Vari" />
                        <FormControlLabel control={<Checkbox />} label="Withergate" />
                    </FormGroup>
                    <Typography fontWeight="bold">Tags</Typography>
                    <FormGroup sx={{ marginLeft: 2 }}>
                        {tags.map(t => <FormControlLabel control={<Checkbox />} label={t} />)}
                    </FormGroup>
                </Paper>
            </Box>
        </Container>
    );
};

export default FilterBar;