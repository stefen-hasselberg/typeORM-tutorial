import { createConnection } from "typeorm";

export const dbconn = async () => {
  try {
    const conn = await createConnection({
      type: "mssql",
      host: "eal-sql01.database.windows.net",
      port: 1433,
      username: process.env["DB_USER"],
      password: process.env["DB_PASSWORD"],
      database: "pocAdventureWorksForLearning",
    });

    console.log("Connect to Azure SQL");

  } catch (error) {
    console.log("error conenct to db ", error);
  }
};
