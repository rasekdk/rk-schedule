interface userInterface {
  name: string;
  email: emailSchemaInterface;
  password: string;
  repeatPassword: string;
  avatar?: string;
}
export default userInterface;

export interface emailSchemaInterface {
  type: string;
  lowercase: boolean;
  required: string;
  validate: Array<emailValidator>;
}

interface emailValidator {
  validator: boolean;
  message: "string";
}
