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
import UserRepositoryImpl from "./repositories/UserRepositoryImpl";
import UserService from "./services/UserService";
import UserController from "./controllers/UserController";
import LikeRepository from "./repositories/LikeRepository";
import LikeService from "./services/LikeService";
import likeController from "./controllers/LikeController";
import LikeRepositoryImpl from "./repositories/LikeRepositoryImpl";
import TagRepository from "./repositories/TagRepository";
import TagRepositoryImpl from "./repositories/TagRepositoryImpl";
import TagService from "./services/TagService";
import TagController from "./controllers/TagController";
import CommentRepository from "./repositories/CommentRepository";
import CommentRepositoryImpl from "./repositories/CommentRepositoryImpl";
import CommentService from "./services/CommentService";
import CommentController from "./controllers/CommonController";
import UserSettingRepository from "./repositories/UserSettingRepository";
import UserSettingRepositoryImpl from "./repositories/UserSettingRepositoryImpl";
import UserSettingService from "./services/UserSettingService";
import UserSettingController from "./controllers/UserSettingController";

// DIコンテナ
const container = new Container();

container.bind<BranchRepository>("BranchRepository").to(BranchRepositoryImpl);
container.bind<BranchService>("BranchService").to(BranchService);
container.bind<BranchController>("BranchController").to(BranchController);

container.bind<ParkRepository>("ParkRepository").to(ParkRepositoryImpl);
container.bind<ParkService>("ParkService").to(ParkService);
container.bind<ParkController>("ParkController").to(ParkController);

container.bind<UserRepository>("UserRepository").to(UserRepositoryImpl);
container.bind<UserService>("UserService").to(UserService);
container.bind<UserController>("UserController").to(UserController);

container.bind<LikeRepository>("LikeRepository").to(LikeRepositoryImpl);
container.bind<LikeService>("LikeService").to(LikeService);
container.bind<likeController>("LikeController").to(likeController);

container.bind<TagRepository>("TagRepository").to(TagRepositoryImpl);
container.bind<TagService>("TagService").to(TagService);
container.bind<TagController>("TagController").to(TagController);

container
  .bind<CommentRepository>("CommentRepository")
  .to(CommentRepositoryImpl);
container.bind<CommentService>("CommentService").to(CommentService);
container.bind<CommentController>("CommentController").to(CommentController);

container
  .bind<UserSettingRepository>("UserSettingRepository")
  .to(UserSettingRepositoryImpl);
container.bind<UserSettingService>("UserSettingService").to(UserSettingService);
container
  .bind<UserSettingController>("UserSettingController")
  .to(UserSettingController);

export default container;
