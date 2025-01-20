import { PaginationInput } from "../../../core/interface/pagination-Input";
import { StatusEnum } from "../../../shared/Enums/status.enum";
import { UserTypeEnum } from "../../../shared/Enums/user-type.enum";

/**
 * Interface representing the input for a paged user search, extending pagination properties.
 */
export interface SearchUserPagedInput extends PaginationInput {
  /**
   * Unique identifier for the user (optional).
   */
  idUser?: number;

  /**
   * Full name of the user (optional).
   */
  fullName?: string;

  /**
   * Email address of the user (optional).
   */
  email?: string;

  /**
   * Encrypted password of the user (optional).
   */
  password?: string;

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
   * Type of user, indicating their role or permissions in the system (optional).
   */
  userType?: UserTypeEnum;

  /**
   * Current status of the user (e.g., Active, Inactive) (optional).
   */
  status?: StatusEnum;

  /**
   * Date when the user was registered (optional).
   */
  dateRegister?: Date;

  /**
   * Date when the user was last updated (optional).
   */
  dateUpdate?: Date;

  /**
   * Date of the last payment made by the client, if applicable (optional).
   */
  lastPaymentDate?: Date;
}

