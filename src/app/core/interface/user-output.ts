import { StatusEnum } from "../../shared/Enums/status.enum";
import { UserRuleEnum } from "../../shared/Enums/user-rule.enum";
import { UserTypeEnum } from "../../shared/Enums/user-type.enum";

export interface UserOutput {
  idUser: number;
  fullName: string;
  email: string;
  phoneNumber?: string;
  userType: UserTypeEnum;
  status: StatusEnum;
  dateRegister: string;
  dateUpdate?: string;
  role?: UserRuleEnum[];
}
export interface UserToken {
  email: string; // Email do usuário
  id: string; // Identificador único do usuário
  userType: UserType; // Tipo do usuário (Manage ou outro)
  exp: number; // Data de expiração do token (timestamp Unix)
  iat: number; // Data de emissão do token (timestamp Unix)
  nbf: number; // Data de validade inicial do token (timestamp Unix)
  role: number[]; // Lista de permissões do usuário
  uniqueName: string; // Nome único do usuário
}
export enum UserType {
  Manage = "Manage", // Administrador
  Client = "Client" // Cliente (se necessário)
}
