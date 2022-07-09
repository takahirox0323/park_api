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
import PrefectureRepository from "./domain/repository/PrefectureRepository";
import PrefectureService from "./use-case/PrefectureService";
import PrefectureRepositoryImpl from "./infra/repositories/PrefectureRepositoryImpl";
import PrefectureController from "./controllers/PrefectureController";
import AreaController from "./controllers/AreaController";
import AreaRepository from "./domain/repository/AreaRepositoryRepository";
import AreaService from "./use-case/AreaService";

import AreaRepositoryImpl from "./infra/repositories/AreaRepositoryImpl";
import ParkTypeRepository from "./domain/repository/ParkTypeRepository";
import ParkTypeRepositoryImpl from "./infra/repositories/ParkTypeRepositoryImpl";
import ParkTypeController from "./controllers/ParkTypeController";
import ParkTypeService from "./use-case/ParkTypeService";
import PhotoService from "./use-case/PhotoService";
import PhotoRepositoryImpl from "./infra/repositories/PhotoRepositoryImpl";
import PhotoRepository from "./domain/repository/PhotoRepository";
import PhotoController from "./controllers/PhotoController";

// DIコンテナ
const container = new Container();

container.bind<AreaRepository>("AreaRepository").to(AreaRepositoryImpl);
container.bind<AreaService>("AreaService").to(AreaService);
container.bind<AreaController>("AreaController").to(AreaController);

container
  .bind<ParkTypeRepository>("ParkTypeRepository")
  .to(ParkTypeRepositoryImpl);
container.bind<ParkTypeService>("ParkTypeService").to(ParkTypeService);
container.bind<ParkTypeController>("ParkTypeController").to(ParkTypeController);

container
  .bind<PrefectureRepository>("PrefectureRepository")
  .to(PrefectureRepositoryImpl);
container.bind<PrefectureService>("PrefectureService").to(PrefectureService);
container
  .bind<PrefectureController>("PrefectureController")
  .to(PrefectureController);

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

container.bind<PhotoRepository>("PhotoRepository").to(PhotoRepositoryImpl);
container.bind<PhotoService>("PhotoService").to(PhotoService);
container.bind<PhotoController>("PhotoController").to(PhotoController);

export default container;
