import { PORT } from "./config/envs";
import app from "./server";
import "reflect-metadata"
import { AppDataSource } from "./config/dataSource";
import { preLoadCategories } from "./helpers/preLoadCategories";
import { preLoadProducts } from "./helpers/preLoadProducts";

const initialize = async () => {
    try {
        console.log("Initializing server");
        await AppDataSource.initialize();
        console.log("Database initialized");
        await preLoadCategories();
        await preLoadProducts();

        const port = process.env.PORT || PORT || 3000;

        app.listen(port, () => {
            console.log(`Server running on port ${port}`);
        });
    } catch (error) {
        console.error("Error during initialization:", error);
        process.exit(1);
    }
}

process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled Rejection at:', promise, 'reason:', reason);
    // Application specific logging, throwing an error, or other logic here
});

initialize();

