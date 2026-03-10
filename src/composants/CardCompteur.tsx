import {useState} from "react";
import {Button, Card, Stack, Typography} from "@mui/material";

export const CardCompteur = () => {
    const [count, setCount] = useState<number>(()=>Math.floor(Math.random()*101))

  return(
        <Card elevation={8} sx={{witht: "100%", maxWidth:250, height: "auto", borderRadius:4}}>
            <Stack spacing={2} direction="row" justifyContent="center">
                <Button
                    variant="contained"
                    onClick={() => setCount((count) => count + 1)}
                >
                    Incrementer
                </Button>
                <Typography variant="h1">
                    {count}
                </Typography>
            </Stack>

        </Card>

      )


}