import { environment } from "../../config/config";
import { DEVELOPMENT } from "../misc/consts";

export const URL_API = environment === DEVELOPMENT ? "https://terminalkiller.fly.dev":"https://terminalkiller.fly.dev"
