import { StatusEnum } from "../../../shared/Enums/status.enum";
import { UserTypeEnum } from "../../../shared/Enums/user-type.enum";

/**
 * Represents the input for creating a user.
 */
export interface CreateUserInput {
  /**
   * Full name of the user.
   */
  fullName: string;

  /**
   * Email address of the user.
   */
  email: string;

  /**
   * Encrypted password of the user.
   */
  password: string;

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
  status?: StatusEnum;

  /**
   * Date of the last payment made by the client, if applicable (optional).
   */
  lastPaymentDate?: Date;
}
