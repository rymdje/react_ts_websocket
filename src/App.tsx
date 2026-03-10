
import './App.css'
import {CardCompteur} from "./composants/CardCompteur.tsx";
import {Box} from "@mui/material";
import {CardWebSocketBitCoin} from "./composants/ws/CardWebSocketBitCoin.tsx";
import {CardWebSocketTrade} from "./composants/ws/CardWebSocketTrade.tsx";
export const App = () => {


    return (
        <p>
            <h1>Vite + React</h1>
            <Box
                sx={{
                width: "100%",
                display: "grid",
                gap: { xs: 2, sm: 3, md: 4 },
                gridTemplateColumns: "repeat(auto-fit, minmax(250px, 5fr))",
                alignItems: "center",
            }}
                >
            <CardCompteur/>
           <CardWebSocketBitCoin/>
                <CardWebSocketTrade/>
        </Box>

        </p>
    )
}

