import * as React from "react";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";

export default function CircularColorProgress() {
  return (
    <Stack
      sx={{
        color: "grey.500",
      }}
      spacing={2}
      direction="row"
    >
      CARREGANDO... <CircularProgress size={25} color="primary" />
    </Stack>
  );
}
