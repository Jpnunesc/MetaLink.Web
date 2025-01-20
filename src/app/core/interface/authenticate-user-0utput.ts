import { UserOutput } from "./user-output";

export interface AuthenticateUserOutput {
  user: UserOutput; // Contém os detalhes do usuário
  token: string; // Token de autenticação
}
export interface Perfil {
  nome: string;
  funcionalidades?: Funcionalidade[]
}
export interface Funcionalidade {
  nome: string;
  acoes: string[];
}
