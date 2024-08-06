import { Box } from "@mui/material";
import Product from "./Products";

function Home(props) {
    const { productData } = props;

    return (
        <Box
            sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: "15px",
                marginTop: "20px",
            }}
        >
            {
            productData.map((value, index) => (
                <Product data={value}/>
            ))
            }
        </Box>
    );
}

export default Home;
