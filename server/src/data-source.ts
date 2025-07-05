import "reflect-metadata"
import "dotenv/config"
import { DataSource } from "typeorm"
import { Profile } from "./entity/Profile"
import { Content } from "./entity/Content"
import { Progress } from "./entity/Progress"

const databaseUrl = process.env.DATABASE_URI

export const AppDataSource = new DataSource({
    type: "postgres",
    url: databaseUrl,
    synchronize: false,
    logging: false,
    entities: [Profile, Content, Progress],
    migrations: ["src/migration/*.ts"],
    subscribers: [],
})
