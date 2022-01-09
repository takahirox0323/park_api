import dotenv from "dotenv";
import log4js from "log4js";
dotenv.config();

export const logger = log4js.getLogger();

logger.level = "info";

export const TEST_ENV = process.env.TEST_ENV;
