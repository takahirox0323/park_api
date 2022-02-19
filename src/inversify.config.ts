import { Container } from "inversify";

import BranchController from "@controllers/BranchController";
import BranchService from "@services/BranchService";
import BranchRepository from "@repositories/BranchRepository";
import BranchRepositoryImpl from "@repositories/BranchRepositoryImpl";
import ParkRepository from "./repositories/ParkRepository";
import ParkService from "./services/ParkService";
import ParkController from "./controllers/ParkController";
import UserRepository from "./repositories/UserRepository";
import ParkRepositoryImpl from "./repositories/ParkRepositoryImpl";
import UserRepositoryImpl from "./repositories/LikeRepositoryImpl";

// DIコンテナ
const container = new Container();

container.bind<BranchRepository>("BranchRepository").to(BranchRepositoryImpl);
container.bind<BranchService>("BranchService").to(BranchService);
container.bind<BranchController>("BranchController").to(BranchController);

container.bind<ParkRepository>("ParkRepository").to(ParkRepositoryImpl);
container.bind<ParkService>("ParkService").to(ParkService);
container.bind<ParkController>("ParkController").to(ParkController);

// container.bind<UserRepository>("UserRepository").to(UserRepositoryImpl);
// container.bind<ParkService>("ParkService").to(ParkService);
// container.bind<ParkController>("ParkController").to(ParkController);

export default container;
