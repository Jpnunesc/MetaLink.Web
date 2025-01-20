import { StatusEnum } from "../../../shared/Enums/status.enum";
import { UserRuleEnum } from "../../../shared/Enums/user-rule.enum";
import { UserTypeEnum } from "../../../shared/Enums/user-type.enum";

/**
 * Interface representing the output of a create user operation.
 */
export interface CreateUserOutput {
  /**
   * Unique identifier for the user.
   */
  idUser: number;

  /**
   * Full name of the user.
   */
  fullName: string;

  /**
   * Email address of the user.
   */
  email: string;

  /**
   * Phone number of the user (optional).
   */
  phoneNumber?: string;

  /**
   * Type of document associated with the user (e.g., CPF or CNPJ) (optional).
   */
  documentType?: string;

  /**
   * CPF or CNPJ number of the user (optional).
   */
  cpfCnpj?: string;

  /**
   * Type of user, indicating their role or permissions in the system.
   */
  userType: UserTypeEnum;

  /**
   * Current status of the user (e.g., Active, Inactive).
   */
  status: StatusEnum;

  /**
   * Date when the user was registered.
   */
  dateRegister: Date;

  /**
   * Date when the user was last updated (optional).
   */
  dateUpdate?: Date;

  /**
   * List of roles or permissions assigned to the user (optional).
   */
  role?: UserRuleEnum[];

  /**
   * Date of the last payment made by the client, if applicable (optional).
   */
  lastPaymentDate?: Date;
}
