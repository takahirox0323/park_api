import { Container } from "inversify";

import BranchController from "@controllers/BranchController";
import BranchService from "@services/BranchService";
import BranchRepository from "@repositories/BranchRepository";
import BranchRepositoryImpl from "@repositories/BranchRepositoryImpl";

// DIコンテナ
const container = new Container();

container.bind<BranchRepository>("BranchRepository").to(BranchRepositoryImpl);
container.bind<BranchService>("BranchService").to(BranchService);
container.bind<BranchController>("BranchController").to(BranchController);

export default container;
