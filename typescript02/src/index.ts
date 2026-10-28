type Usuario = {
  nombre: string;
  edad: number;
  direccion: string;
  sexo: "masculino" | "feminio";
  cp: number;
};

/*  */
type UsuarioOptional = Partial<Usuario>;
type UsuarioRequired = Required<UsuarioOptional>;
type UsuarioReadOnly = Readonly<UsuarioOptional>;
type UsuarioPickDireccion = Pick<Usuario, "direccion">;
type UsuarioPickVarios = Pick<Usuario, "direccion" | "nombre">;
type UsuarioOmit = Omit<Usuario, "direccion" | "nombre">;
type Result = Promise<Usuario[]>;
// type A = Awaited<Promise<string>>;
type Users = Awaited<Result>;
