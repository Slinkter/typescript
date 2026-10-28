type Extraer<T> = T extends Promise<infer U> ? U : T;
type User = {
  name: string;
  age: number;
  height: number;
};

type Result = Promise<User[]>;
type Users = Extraer<Result>;
