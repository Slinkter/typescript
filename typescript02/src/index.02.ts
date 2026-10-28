type ObtenerRetorno<T> = T extends () => infer R ? R : never;
type ReturnType = ObtenerRetorno<() => Promise<number[]>>;
type ReturnType2 = ObtenerRetorno<() => string[]>;
type ReturnType3 = 1;
