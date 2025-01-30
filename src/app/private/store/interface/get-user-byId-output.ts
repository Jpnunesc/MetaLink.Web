import { StatusEnum } from "../../../shared/Enums/status.enum";
import { UserRuleEnum } from "../../../shared/Enums/user-rule.enum";
import { UserTypeEnum } from "../../../shared/Enums/user-type.enum";

export interface GetUserByIdOutput {
  idUser: number;
  fullName: string;
  email: string;
  phoneNumber?: string;
  userType: UserTypeEnum;
  status: StatusEnum;
  dateRegister: Date;
  dateUpdate?: Date;
  role?: UserRuleEnum[];
}
