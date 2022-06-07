import { Container } from "inversify";

import BranchController from "@/controllers/BranchController";
import BranchService from "@/use-case/BranchService";
import BranchRepository from "@/domain/repository/BranchRepository";
import BranchRepositoryImpl from "@/infra/repositories/BranchRepositoryImpl";
import ParkRepository from "./domain/repository/ParkRepository";
import ParkService from "./use-case/ParkService";
import ParkController from "./controllers/ParkController";
import UserRepository from "./domain/repository/UserRepository";
import ParkRepositoryImpl from "./infra/repositories/ParkRepositoryImpl";
import UserRepositoryImpl from "./infra/repositories/UserRepositoryImpl";
import UserService from "./use-case/UserService";
import UserController from "./controllers/UserController";
import LikeRepository from "./domain/repository/LikeRepository";
import LikeService from "./use-case/LikeService";
import likeController from "./controllers/LikeController";
import LikeRepositoryImpl from "./infra/repositories/LikeRepositoryImpl";
import TagRepository from "./domain/repository/TagRepository";
import TagRepositoryImpl from "./infra/repositories/TagRepositoryImpl";
import TagService from "./use-case/TagService";
import TagController from "./controllers/TagController";
import CommentRepository from "./domain/repository/CommentRepository";
import CommentRepositoryImpl from "./infra/repositories/CommentRepositoryImpl";
import CommentService from "./use-case/CommentService";
import CommentController from "./controllers/CommonController";
import UserSettingRepository from "./domain/repository/UserSettingRepository";
import UserSettingRepositoryImpl from "./infra/repositories/UserSettingRepositoryImpl";
import UserSettingService from "./use-case/UserSettingService";
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
