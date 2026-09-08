
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Usuario
 * 
 */
export type Usuario = $Result.DefaultSelection<Prisma.$UsuarioPayload>
/**
 * Model Endereco
 * 
 */
export type Endereco = $Result.DefaultSelection<Prisma.$EnderecoPayload>
/**
 * Model Categoria
 * 
 */
export type Categoria = $Result.DefaultSelection<Prisma.$CategoriaPayload>
/**
 * Model Produto
 * 
 */
export type Produto = $Result.DefaultSelection<Prisma.$ProdutoPayload>
/**
 * Model Pedido
 * 
 */
export type Pedido = $Result.DefaultSelection<Prisma.$PedidoPayload>
/**
 * Model ItemPedido
 * 
 */
export type ItemPedido = $Result.DefaultSelection<Prisma.$ItemPedidoPayload>
/**
 * Model Pagamento
 * 
 */
export type Pagamento = $Result.DefaultSelection<Prisma.$PagamentoPayload>
/**
 * Model Entrega
 * 
 */
export type Entrega = $Result.DefaultSelection<Prisma.$EntregaPayload>
/**
 * Model Carrinho
 * 
 */
export type Carrinho = $Result.DefaultSelection<Prisma.$CarrinhoPayload>
/**
 * Model ItemCarrinho
 * 
 */
export type ItemCarrinho = $Result.DefaultSelection<Prisma.$ItemCarrinhoPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  CLIENTE: 'CLIENTE',
  ADMIN: 'ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]


export const StatusPedido: {
  AGUARDANDO: 'AGUARDANDO',
  EM_PREPARO: 'EM_PREPARO',
  PRONTO: 'PRONTO',
  ENTREGUE: 'ENTREGUE',
  CANCELADO: 'CANCELADO'
};

export type StatusPedido = (typeof StatusPedido)[keyof typeof StatusPedido]


export const TipoPedido: {
  ENTREGA: 'ENTREGA',
  PRESENCIAL: 'PRESENCIAL'
};

export type TipoPedido = (typeof TipoPedido)[keyof typeof TipoPedido]


export const FormaPagamento: {
  PIX: 'PIX',
  CARTAO: 'CARTAO',
  DINHEIRO: 'DINHEIRO'
};

export type FormaPagamento = (typeof FormaPagamento)[keyof typeof FormaPagamento]


export const StatusPagamento: {
  PENDENTE: 'PENDENTE',
  PAGO: 'PAGO',
  RECUSADO: 'RECUSADO',
  ESTORNADO: 'ESTORNADO'
};

export type StatusPagamento = (typeof StatusPagamento)[keyof typeof StatusPagamento]


export const StatusEntrega: {
  AGUARDANDO: 'AGUARDANDO',
  SAIU_PARA_ENTREGA: 'SAIU_PARA_ENTREGA',
  ENTREGUE: 'ENTREGUE'
};

export type StatusEntrega = (typeof StatusEntrega)[keyof typeof StatusEntrega]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type StatusPedido = $Enums.StatusPedido

export const StatusPedido: typeof $Enums.StatusPedido

export type TipoPedido = $Enums.TipoPedido

export const TipoPedido: typeof $Enums.TipoPedido

export type FormaPagamento = $Enums.FormaPagamento

export const FormaPagamento: typeof $Enums.FormaPagamento

export type StatusPagamento = $Enums.StatusPagamento

export const StatusPagamento: typeof $Enums.StatusPagamento

export type StatusEntrega = $Enums.StatusEntrega

export const StatusEntrega: typeof $Enums.StatusEntrega

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Usuarios
 * const usuarios = await prisma.usuario.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Usuarios
   * const usuarios = await prisma.usuario.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.usuario`: Exposes CRUD operations for the **Usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.UsuarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.endereco`: Exposes CRUD operations for the **Endereco** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Enderecos
    * const enderecos = await prisma.endereco.findMany()
    * ```
    */
  get endereco(): Prisma.EnderecoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.categoria`: Exposes CRUD operations for the **Categoria** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categorias
    * const categorias = await prisma.categoria.findMany()
    * ```
    */
  get categoria(): Prisma.CategoriaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.produto`: Exposes CRUD operations for the **Produto** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Produtos
    * const produtos = await prisma.produto.findMany()
    * ```
    */
  get produto(): Prisma.ProdutoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pedido`: Exposes CRUD operations for the **Pedido** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pedidos
    * const pedidos = await prisma.pedido.findMany()
    * ```
    */
  get pedido(): Prisma.PedidoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.itemPedido`: Exposes CRUD operations for the **ItemPedido** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ItemPedidos
    * const itemPedidos = await prisma.itemPedido.findMany()
    * ```
    */
  get itemPedido(): Prisma.ItemPedidoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pagamento`: Exposes CRUD operations for the **Pagamento** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pagamentos
    * const pagamentos = await prisma.pagamento.findMany()
    * ```
    */
  get pagamento(): Prisma.PagamentoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.entrega`: Exposes CRUD operations for the **Entrega** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Entregas
    * const entregas = await prisma.entrega.findMany()
    * ```
    */
  get entrega(): Prisma.EntregaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.carrinho`: Exposes CRUD operations for the **Carrinho** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Carrinhos
    * const carrinhos = await prisma.carrinho.findMany()
    * ```
    */
  get carrinho(): Prisma.CarrinhoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.itemCarrinho`: Exposes CRUD operations for the **ItemCarrinho** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ItemCarrinhos
    * const itemCarrinhos = await prisma.itemCarrinho.findMany()
    * ```
    */
  get itemCarrinho(): Prisma.ItemCarrinhoDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.12.0
   * Query Engine version: 8047c96bbd92db98a2abc7c9323ce77c02c89dbc
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Usuario: 'Usuario',
    Endereco: 'Endereco',
    Categoria: 'Categoria',
    Produto: 'Produto',
    Pedido: 'Pedido',
    ItemPedido: 'ItemPedido',
    Pagamento: 'Pagamento',
    Entrega: 'Entrega',
    Carrinho: 'Carrinho',
    ItemCarrinho: 'ItemCarrinho'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "usuario" | "endereco" | "categoria" | "produto" | "pedido" | "itemPedido" | "pagamento" | "entrega" | "carrinho" | "itemCarrinho"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Usuario: {
        payload: Prisma.$UsuarioPayload<ExtArgs>
        fields: Prisma.UsuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findFirst: {
            args: Prisma.UsuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findMany: {
            args: Prisma.UsuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          create: {
            args: Prisma.UsuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          createMany: {
            args: Prisma.UsuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsuarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          delete: {
            args: Prisma.UsuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          update: {
            args: Prisma.UsuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          deleteMany: {
            args: Prisma.UsuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsuarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          upsert: {
            args: Prisma.UsuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.UsuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuarioCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
          }
        }
      }
      Endereco: {
        payload: Prisma.$EnderecoPayload<ExtArgs>
        fields: Prisma.EnderecoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EnderecoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnderecoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EnderecoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnderecoPayload>
          }
          findFirst: {
            args: Prisma.EnderecoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnderecoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EnderecoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnderecoPayload>
          }
          findMany: {
            args: Prisma.EnderecoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnderecoPayload>[]
          }
          create: {
            args: Prisma.EnderecoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnderecoPayload>
          }
          createMany: {
            args: Prisma.EnderecoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EnderecoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnderecoPayload>[]
          }
          delete: {
            args: Prisma.EnderecoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnderecoPayload>
          }
          update: {
            args: Prisma.EnderecoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnderecoPayload>
          }
          deleteMany: {
            args: Prisma.EnderecoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EnderecoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EnderecoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnderecoPayload>[]
          }
          upsert: {
            args: Prisma.EnderecoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnderecoPayload>
          }
          aggregate: {
            args: Prisma.EnderecoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEndereco>
          }
          groupBy: {
            args: Prisma.EnderecoGroupByArgs<ExtArgs>
            result: $Utils.Optional<EnderecoGroupByOutputType>[]
          }
          count: {
            args: Prisma.EnderecoCountArgs<ExtArgs>
            result: $Utils.Optional<EnderecoCountAggregateOutputType> | number
          }
        }
      }
      Categoria: {
        payload: Prisma.$CategoriaPayload<ExtArgs>
        fields: Prisma.CategoriaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoriaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoriaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          findFirst: {
            args: Prisma.CategoriaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoriaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          findMany: {
            args: Prisma.CategoriaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>[]
          }
          create: {
            args: Prisma.CategoriaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          createMany: {
            args: Prisma.CategoriaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoriaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>[]
          }
          delete: {
            args: Prisma.CategoriaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          update: {
            args: Prisma.CategoriaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          deleteMany: {
            args: Prisma.CategoriaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoriaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CategoriaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>[]
          }
          upsert: {
            args: Prisma.CategoriaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          aggregate: {
            args: Prisma.CategoriaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategoria>
          }
          groupBy: {
            args: Prisma.CategoriaGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoriaGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoriaCountArgs<ExtArgs>
            result: $Utils.Optional<CategoriaCountAggregateOutputType> | number
          }
        }
      }
      Produto: {
        payload: Prisma.$ProdutoPayload<ExtArgs>
        fields: Prisma.ProdutoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProdutoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProdutoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload>
          }
          findFirst: {
            args: Prisma.ProdutoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProdutoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload>
          }
          findMany: {
            args: Prisma.ProdutoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload>[]
          }
          create: {
            args: Prisma.ProdutoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload>
          }
          createMany: {
            args: Prisma.ProdutoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProdutoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload>[]
          }
          delete: {
            args: Prisma.ProdutoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload>
          }
          update: {
            args: Prisma.ProdutoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload>
          }
          deleteMany: {
            args: Prisma.ProdutoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProdutoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProdutoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload>[]
          }
          upsert: {
            args: Prisma.ProdutoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload>
          }
          aggregate: {
            args: Prisma.ProdutoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduto>
          }
          groupBy: {
            args: Prisma.ProdutoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProdutoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProdutoCountArgs<ExtArgs>
            result: $Utils.Optional<ProdutoCountAggregateOutputType> | number
          }
        }
      }
      Pedido: {
        payload: Prisma.$PedidoPayload<ExtArgs>
        fields: Prisma.PedidoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PedidoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PedidoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>
          }
          findFirst: {
            args: Prisma.PedidoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PedidoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>
          }
          findMany: {
            args: Prisma.PedidoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>[]
          }
          create: {
            args: Prisma.PedidoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>
          }
          createMany: {
            args: Prisma.PedidoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PedidoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>[]
          }
          delete: {
            args: Prisma.PedidoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>
          }
          update: {
            args: Prisma.PedidoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>
          }
          deleteMany: {
            args: Prisma.PedidoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PedidoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PedidoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>[]
          }
          upsert: {
            args: Prisma.PedidoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>
          }
          aggregate: {
            args: Prisma.PedidoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePedido>
          }
          groupBy: {
            args: Prisma.PedidoGroupByArgs<ExtArgs>
            result: $Utils.Optional<PedidoGroupByOutputType>[]
          }
          count: {
            args: Prisma.PedidoCountArgs<ExtArgs>
            result: $Utils.Optional<PedidoCountAggregateOutputType> | number
          }
        }
      }
      ItemPedido: {
        payload: Prisma.$ItemPedidoPayload<ExtArgs>
        fields: Prisma.ItemPedidoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ItemPedidoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPedidoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ItemPedidoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPedidoPayload>
          }
          findFirst: {
            args: Prisma.ItemPedidoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPedidoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ItemPedidoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPedidoPayload>
          }
          findMany: {
            args: Prisma.ItemPedidoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPedidoPayload>[]
          }
          create: {
            args: Prisma.ItemPedidoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPedidoPayload>
          }
          createMany: {
            args: Prisma.ItemPedidoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ItemPedidoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPedidoPayload>[]
          }
          delete: {
            args: Prisma.ItemPedidoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPedidoPayload>
          }
          update: {
            args: Prisma.ItemPedidoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPedidoPayload>
          }
          deleteMany: {
            args: Prisma.ItemPedidoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ItemPedidoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ItemPedidoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPedidoPayload>[]
          }
          upsert: {
            args: Prisma.ItemPedidoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPedidoPayload>
          }
          aggregate: {
            args: Prisma.ItemPedidoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateItemPedido>
          }
          groupBy: {
            args: Prisma.ItemPedidoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ItemPedidoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ItemPedidoCountArgs<ExtArgs>
            result: $Utils.Optional<ItemPedidoCountAggregateOutputType> | number
          }
        }
      }
      Pagamento: {
        payload: Prisma.$PagamentoPayload<ExtArgs>
        fields: Prisma.PagamentoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PagamentoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagamentoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PagamentoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagamentoPayload>
          }
          findFirst: {
            args: Prisma.PagamentoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagamentoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PagamentoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagamentoPayload>
          }
          findMany: {
            args: Prisma.PagamentoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagamentoPayload>[]
          }
          create: {
            args: Prisma.PagamentoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagamentoPayload>
          }
          createMany: {
            args: Prisma.PagamentoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PagamentoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagamentoPayload>[]
          }
          delete: {
            args: Prisma.PagamentoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagamentoPayload>
          }
          update: {
            args: Prisma.PagamentoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagamentoPayload>
          }
          deleteMany: {
            args: Prisma.PagamentoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PagamentoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PagamentoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagamentoPayload>[]
          }
          upsert: {
            args: Prisma.PagamentoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagamentoPayload>
          }
          aggregate: {
            args: Prisma.PagamentoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePagamento>
          }
          groupBy: {
            args: Prisma.PagamentoGroupByArgs<ExtArgs>
            result: $Utils.Optional<PagamentoGroupByOutputType>[]
          }
          count: {
            args: Prisma.PagamentoCountArgs<ExtArgs>
            result: $Utils.Optional<PagamentoCountAggregateOutputType> | number
          }
        }
      }
      Entrega: {
        payload: Prisma.$EntregaPayload<ExtArgs>
        fields: Prisma.EntregaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EntregaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntregaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EntregaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntregaPayload>
          }
          findFirst: {
            args: Prisma.EntregaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntregaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EntregaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntregaPayload>
          }
          findMany: {
            args: Prisma.EntregaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntregaPayload>[]
          }
          create: {
            args: Prisma.EntregaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntregaPayload>
          }
          createMany: {
            args: Prisma.EntregaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EntregaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntregaPayload>[]
          }
          delete: {
            args: Prisma.EntregaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntregaPayload>
          }
          update: {
            args: Prisma.EntregaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntregaPayload>
          }
          deleteMany: {
            args: Prisma.EntregaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EntregaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EntregaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntregaPayload>[]
          }
          upsert: {
            args: Prisma.EntregaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntregaPayload>
          }
          aggregate: {
            args: Prisma.EntregaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEntrega>
          }
          groupBy: {
            args: Prisma.EntregaGroupByArgs<ExtArgs>
            result: $Utils.Optional<EntregaGroupByOutputType>[]
          }
          count: {
            args: Prisma.EntregaCountArgs<ExtArgs>
            result: $Utils.Optional<EntregaCountAggregateOutputType> | number
          }
        }
      }
      Carrinho: {
        payload: Prisma.$CarrinhoPayload<ExtArgs>
        fields: Prisma.CarrinhoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CarrinhoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarrinhoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CarrinhoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarrinhoPayload>
          }
          findFirst: {
            args: Prisma.CarrinhoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarrinhoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CarrinhoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarrinhoPayload>
          }
          findMany: {
            args: Prisma.CarrinhoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarrinhoPayload>[]
          }
          create: {
            args: Prisma.CarrinhoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarrinhoPayload>
          }
          createMany: {
            args: Prisma.CarrinhoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CarrinhoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarrinhoPayload>[]
          }
          delete: {
            args: Prisma.CarrinhoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarrinhoPayload>
          }
          update: {
            args: Prisma.CarrinhoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarrinhoPayload>
          }
          deleteMany: {
            args: Prisma.CarrinhoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CarrinhoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CarrinhoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarrinhoPayload>[]
          }
          upsert: {
            args: Prisma.CarrinhoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarrinhoPayload>
          }
          aggregate: {
            args: Prisma.CarrinhoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCarrinho>
          }
          groupBy: {
            args: Prisma.CarrinhoGroupByArgs<ExtArgs>
            result: $Utils.Optional<CarrinhoGroupByOutputType>[]
          }
          count: {
            args: Prisma.CarrinhoCountArgs<ExtArgs>
            result: $Utils.Optional<CarrinhoCountAggregateOutputType> | number
          }
        }
      }
      ItemCarrinho: {
        payload: Prisma.$ItemCarrinhoPayload<ExtArgs>
        fields: Prisma.ItemCarrinhoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ItemCarrinhoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemCarrinhoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ItemCarrinhoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemCarrinhoPayload>
          }
          findFirst: {
            args: Prisma.ItemCarrinhoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemCarrinhoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ItemCarrinhoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemCarrinhoPayload>
          }
          findMany: {
            args: Prisma.ItemCarrinhoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemCarrinhoPayload>[]
          }
          create: {
            args: Prisma.ItemCarrinhoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemCarrinhoPayload>
          }
          createMany: {
            args: Prisma.ItemCarrinhoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ItemCarrinhoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemCarrinhoPayload>[]
          }
          delete: {
            args: Prisma.ItemCarrinhoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemCarrinhoPayload>
          }
          update: {
            args: Prisma.ItemCarrinhoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemCarrinhoPayload>
          }
          deleteMany: {
            args: Prisma.ItemCarrinhoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ItemCarrinhoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ItemCarrinhoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemCarrinhoPayload>[]
          }
          upsert: {
            args: Prisma.ItemCarrinhoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemCarrinhoPayload>
          }
          aggregate: {
            args: Prisma.ItemCarrinhoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateItemCarrinho>
          }
          groupBy: {
            args: Prisma.ItemCarrinhoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ItemCarrinhoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ItemCarrinhoCountArgs<ExtArgs>
            result: $Utils.Optional<ItemCarrinhoCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    usuario?: UsuarioOmit
    endereco?: EnderecoOmit
    categoria?: CategoriaOmit
    produto?: ProdutoOmit
    pedido?: PedidoOmit
    itemPedido?: ItemPedidoOmit
    pagamento?: PagamentoOmit
    entrega?: EntregaOmit
    carrinho?: CarrinhoOmit
    itemCarrinho?: ItemCarrinhoOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UsuarioCountOutputType
   */

  export type UsuarioCountOutputType = {
    enderecos: number
    pedidos: number
  }

  export type UsuarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    enderecos?: boolean | UsuarioCountOutputTypeCountEnderecosArgs
    pedidos?: boolean | UsuarioCountOutputTypeCountPedidosArgs
  }

  // Custom InputTypes
  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioCountOutputType
     */
    select?: UsuarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountEnderecosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EnderecoWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountPedidosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PedidoWhereInput
  }


  /**
   * Count Type EnderecoCountOutputType
   */

  export type EnderecoCountOutputType = {
    pedidos: number
  }

  export type EnderecoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pedidos?: boolean | EnderecoCountOutputTypeCountPedidosArgs
  }

  // Custom InputTypes
  /**
   * EnderecoCountOutputType without action
   */
  export type EnderecoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnderecoCountOutputType
     */
    select?: EnderecoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EnderecoCountOutputType without action
   */
  export type EnderecoCountOutputTypeCountPedidosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PedidoWhereInput
  }


  /**
   * Count Type CategoriaCountOutputType
   */

  export type CategoriaCountOutputType = {
    produtos: number
  }

  export type CategoriaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    produtos?: boolean | CategoriaCountOutputTypeCountProdutosArgs
  }

  // Custom InputTypes
  /**
   * CategoriaCountOutputType without action
   */
  export type CategoriaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriaCountOutputType
     */
    select?: CategoriaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoriaCountOutputType without action
   */
  export type CategoriaCountOutputTypeCountProdutosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProdutoWhereInput
  }


  /**
   * Count Type ProdutoCountOutputType
   */

  export type ProdutoCountOutputType = {
    itensPedido: number
    itensCarrinho: number
  }

  export type ProdutoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    itensPedido?: boolean | ProdutoCountOutputTypeCountItensPedidoArgs
    itensCarrinho?: boolean | ProdutoCountOutputTypeCountItensCarrinhoArgs
  }

  // Custom InputTypes
  /**
   * ProdutoCountOutputType without action
   */
  export type ProdutoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProdutoCountOutputType
     */
    select?: ProdutoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProdutoCountOutputType without action
   */
  export type ProdutoCountOutputTypeCountItensPedidoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemPedidoWhereInput
  }

  /**
   * ProdutoCountOutputType without action
   */
  export type ProdutoCountOutputTypeCountItensCarrinhoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemCarrinhoWhereInput
  }


  /**
   * Count Type PedidoCountOutputType
   */

  export type PedidoCountOutputType = {
    itens: number
  }

  export type PedidoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    itens?: boolean | PedidoCountOutputTypeCountItensArgs
  }

  // Custom InputTypes
  /**
   * PedidoCountOutputType without action
   */
  export type PedidoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedidoCountOutputType
     */
    select?: PedidoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PedidoCountOutputType without action
   */
  export type PedidoCountOutputTypeCountItensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemPedidoWhereInput
  }


  /**
   * Count Type CarrinhoCountOutputType
   */

  export type CarrinhoCountOutputType = {
    itens: number
  }

  export type CarrinhoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    itens?: boolean | CarrinhoCountOutputTypeCountItensArgs
  }

  // Custom InputTypes
  /**
   * CarrinhoCountOutputType without action
   */
  export type CarrinhoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarrinhoCountOutputType
     */
    select?: CarrinhoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CarrinhoCountOutputType without action
   */
  export type CarrinhoCountOutputTypeCountItensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemCarrinhoWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioAvgAggregateOutputType = {
    id: number | null
  }

  export type UsuarioSumAggregateOutputType = {
    id: number | null
  }

  export type UsuarioMinAggregateOutputType = {
    id: number | null
    nome: string | null
    email: string | null
    senha: string | null
    telefone: string | null
    role: $Enums.Role | null
    criadoEm: Date | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    email: string | null
    senha: string | null
    telefone: string | null
    role: $Enums.Role | null
    criadoEm: Date | null
  }

  export type UsuarioCountAggregateOutputType = {
    id: number
    nome: number
    email: number
    senha: number
    telefone: number
    role: number
    criadoEm: number
    _all: number
  }


  export type UsuarioAvgAggregateInputType = {
    id?: true
  }

  export type UsuarioSumAggregateInputType = {
    id?: true
  }

  export type UsuarioMinAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    senha?: true
    telefone?: true
    role?: true
    criadoEm?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    senha?: true
    telefone?: true
    role?: true
    criadoEm?: true
  }

  export type UsuarioCountAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    senha?: true
    telefone?: true
    role?: true
    criadoEm?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuario to aggregate.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type UsuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithAggregationInput | UsuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: UsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _avg?: UsuarioAvgAggregateInputType
    _sum?: UsuarioSumAggregateInputType
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    id: number
    nome: string
    email: string
    senha: string
    telefone: string | null
    role: $Enums.Role
    criadoEm: Date
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends UsuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type UsuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    senha?: boolean
    telefone?: boolean
    role?: boolean
    criadoEm?: boolean
    enderecos?: boolean | Usuario$enderecosArgs<ExtArgs>
    pedidos?: boolean | Usuario$pedidosArgs<ExtArgs>
    carrinho?: boolean | Usuario$carrinhoArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    senha?: boolean
    telefone?: boolean
    role?: boolean
    criadoEm?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    senha?: boolean
    telefone?: boolean
    role?: boolean
    criadoEm?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectScalar = {
    id?: boolean
    nome?: boolean
    email?: boolean
    senha?: boolean
    telefone?: boolean
    role?: boolean
    criadoEm?: boolean
  }

  export type UsuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "email" | "senha" | "telefone" | "role" | "criadoEm", ExtArgs["result"]["usuario"]>
  export type UsuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    enderecos?: boolean | Usuario$enderecosArgs<ExtArgs>
    pedidos?: boolean | Usuario$pedidosArgs<ExtArgs>
    carrinho?: boolean | Usuario$carrinhoArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsuarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UsuarioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuario"
    objects: {
      enderecos: Prisma.$EnderecoPayload<ExtArgs>[]
      pedidos: Prisma.$PedidoPayload<ExtArgs>[]
      carrinho: Prisma.$CarrinhoPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      email: string
      senha: string
      telefone: string | null
      role: $Enums.Role
      criadoEm: Date
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }

  type UsuarioGetPayload<S extends boolean | null | undefined | UsuarioDefaultArgs> = $Result.GetResult<Prisma.$UsuarioPayload, S>

  type UsuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface UsuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuario'], meta: { name: 'Usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {UsuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuarioFindUniqueArgs>(args: SelectSubset<T, UsuarioFindUniqueArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuarioFindFirstArgs>(args?: SelectSubset<T, UsuarioFindFirstArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuarioWithIdOnly = await prisma.usuario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsuarioFindManyArgs>(args?: SelectSubset<T, UsuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuario.
     * @param {UsuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
     */
    create<T extends UsuarioCreateArgs>(args: SelectSubset<T, UsuarioCreateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {UsuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuarioCreateManyArgs>(args?: SelectSubset<T, UsuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Usuarios and returns the data saved in the database.
     * @param {UsuarioCreateManyAndReturnArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsuarioCreateManyAndReturnArgs>(args?: SelectSubset<T, UsuarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Usuario.
     * @param {UsuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
     */
    delete<T extends UsuarioDeleteArgs>(args: SelectSubset<T, UsuarioDeleteArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuario.
     * @param {UsuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuarioUpdateArgs>(args: SelectSubset<T, UsuarioUpdateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuarioDeleteManyArgs>(args?: SelectSubset<T, UsuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuarioUpdateManyArgs>(args: SelectSubset<T, UsuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios and returns the data updated in the database.
     * @param {UsuarioUpdateManyAndReturnArgs} args - Arguments to update many Usuarios.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UsuarioUpdateManyAndReturnArgs>(args: SelectSubset<T, UsuarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Usuario.
     * @param {UsuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
     */
    upsert<T extends UsuarioUpsertArgs>(args: SelectSubset<T, UsuarioUpsertArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuarioCountArgs>(
      args?: Subset<T, UsuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuarioGroupByArgs['orderBy'] }
        : { orderBy?: UsuarioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuario model
   */
  readonly fields: UsuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    enderecos<T extends Usuario$enderecosArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$enderecosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnderecoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    pedidos<T extends Usuario$pedidosArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$pedidosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    carrinho<T extends Usuario$carrinhoArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$carrinhoArgs<ExtArgs>>): Prisma__CarrinhoClient<$Result.GetResult<Prisma.$CarrinhoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Usuario model
   */
  interface UsuarioFieldRefs {
    readonly id: FieldRef<"Usuario", 'Int'>
    readonly nome: FieldRef<"Usuario", 'String'>
    readonly email: FieldRef<"Usuario", 'String'>
    readonly senha: FieldRef<"Usuario", 'String'>
    readonly telefone: FieldRef<"Usuario", 'String'>
    readonly role: FieldRef<"Usuario", 'Role'>
    readonly criadoEm: FieldRef<"Usuario", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Usuario findUnique
   */
  export type UsuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findUniqueOrThrow
   */
  export type UsuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findFirst
   */
  export type UsuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findFirstOrThrow
   */
  export type UsuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findMany
   */
  export type UsuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario create
   */
  export type UsuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Usuario.
     */
    data: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
  }

  /**
   * Usuario createMany
   */
  export type UsuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario createManyAndReturn
   */
  export type UsuarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario update
   */
  export type UsuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Usuario.
     */
    data: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
    /**
     * Choose, which Usuario to update.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario updateMany
   */
  export type UsuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario updateManyAndReturn
   */
  export type UsuarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario upsert
   */
  export type UsuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Usuario to update in case it exists.
     */
    where: UsuarioWhereUniqueInput
    /**
     * In case the Usuario found by the `where` argument doesn't exist, create a new Usuario with this data.
     */
    create: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
    /**
     * In case the Usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
  }

  /**
   * Usuario delete
   */
  export type UsuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter which Usuario to delete.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario deleteMany
   */
  export type UsuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to delete
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to delete.
     */
    limit?: number
  }

  /**
   * Usuario.enderecos
   */
  export type Usuario$enderecosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Endereco
     */
    select?: EnderecoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Endereco
     */
    omit?: EnderecoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnderecoInclude<ExtArgs> | null
    where?: EnderecoWhereInput
    orderBy?: EnderecoOrderByWithRelationInput | EnderecoOrderByWithRelationInput[]
    cursor?: EnderecoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EnderecoScalarFieldEnum | EnderecoScalarFieldEnum[]
  }

  /**
   * Usuario.pedidos
   */
  export type Usuario$pedidosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    where?: PedidoWhereInput
    orderBy?: PedidoOrderByWithRelationInput | PedidoOrderByWithRelationInput[]
    cursor?: PedidoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PedidoScalarFieldEnum | PedidoScalarFieldEnum[]
  }

  /**
   * Usuario.carrinho
   */
  export type Usuario$carrinhoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carrinho
     */
    select?: CarrinhoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carrinho
     */
    omit?: CarrinhoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarrinhoInclude<ExtArgs> | null
    where?: CarrinhoWhereInput
  }

  /**
   * Usuario without action
   */
  export type UsuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
  }


  /**
   * Model Endereco
   */

  export type AggregateEndereco = {
    _count: EnderecoCountAggregateOutputType | null
    _avg: EnderecoAvgAggregateOutputType | null
    _sum: EnderecoSumAggregateOutputType | null
    _min: EnderecoMinAggregateOutputType | null
    _max: EnderecoMaxAggregateOutputType | null
  }

  export type EnderecoAvgAggregateOutputType = {
    id: number | null
    usuarioId: number | null
  }

  export type EnderecoSumAggregateOutputType = {
    id: number | null
    usuarioId: number | null
  }

  export type EnderecoMinAggregateOutputType = {
    id: number | null
    rua: string | null
    numero: string | null
    bairro: string | null
    cidade: string | null
    estado: string | null
    cep: string | null
    usuarioId: number | null
  }

  export type EnderecoMaxAggregateOutputType = {
    id: number | null
    rua: string | null
    numero: string | null
    bairro: string | null
    cidade: string | null
    estado: string | null
    cep: string | null
    usuarioId: number | null
  }

  export type EnderecoCountAggregateOutputType = {
    id: number
    rua: number
    numero: number
    bairro: number
    cidade: number
    estado: number
    cep: number
    usuarioId: number
    _all: number
  }


  export type EnderecoAvgAggregateInputType = {
    id?: true
    usuarioId?: true
  }

  export type EnderecoSumAggregateInputType = {
    id?: true
    usuarioId?: true
  }

  export type EnderecoMinAggregateInputType = {
    id?: true
    rua?: true
    numero?: true
    bairro?: true
    cidade?: true
    estado?: true
    cep?: true
    usuarioId?: true
  }

  export type EnderecoMaxAggregateInputType = {
    id?: true
    rua?: true
    numero?: true
    bairro?: true
    cidade?: true
    estado?: true
    cep?: true
    usuarioId?: true
  }

  export type EnderecoCountAggregateInputType = {
    id?: true
    rua?: true
    numero?: true
    bairro?: true
    cidade?: true
    estado?: true
    cep?: true
    usuarioId?: true
    _all?: true
  }

  export type EnderecoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Endereco to aggregate.
     */
    where?: EnderecoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Enderecos to fetch.
     */
    orderBy?: EnderecoOrderByWithRelationInput | EnderecoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EnderecoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Enderecos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Enderecos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Enderecos
    **/
    _count?: true | EnderecoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EnderecoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EnderecoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EnderecoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EnderecoMaxAggregateInputType
  }

  export type GetEnderecoAggregateType<T extends EnderecoAggregateArgs> = {
        [P in keyof T & keyof AggregateEndereco]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEndereco[P]>
      : GetScalarType<T[P], AggregateEndereco[P]>
  }




  export type EnderecoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EnderecoWhereInput
    orderBy?: EnderecoOrderByWithAggregationInput | EnderecoOrderByWithAggregationInput[]
    by: EnderecoScalarFieldEnum[] | EnderecoScalarFieldEnum
    having?: EnderecoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EnderecoCountAggregateInputType | true
    _avg?: EnderecoAvgAggregateInputType
    _sum?: EnderecoSumAggregateInputType
    _min?: EnderecoMinAggregateInputType
    _max?: EnderecoMaxAggregateInputType
  }

  export type EnderecoGroupByOutputType = {
    id: number
    rua: string
    numero: string
    bairro: string
    cidade: string
    estado: string
    cep: string
    usuarioId: number
    _count: EnderecoCountAggregateOutputType | null
    _avg: EnderecoAvgAggregateOutputType | null
    _sum: EnderecoSumAggregateOutputType | null
    _min: EnderecoMinAggregateOutputType | null
    _max: EnderecoMaxAggregateOutputType | null
  }

  type GetEnderecoGroupByPayload<T extends EnderecoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EnderecoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EnderecoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EnderecoGroupByOutputType[P]>
            : GetScalarType<T[P], EnderecoGroupByOutputType[P]>
        }
      >
    >


  export type EnderecoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rua?: boolean
    numero?: boolean
    bairro?: boolean
    cidade?: boolean
    estado?: boolean
    cep?: boolean
    usuarioId?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    pedidos?: boolean | Endereco$pedidosArgs<ExtArgs>
    _count?: boolean | EnderecoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["endereco"]>

  export type EnderecoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rua?: boolean
    numero?: boolean
    bairro?: boolean
    cidade?: boolean
    estado?: boolean
    cep?: boolean
    usuarioId?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["endereco"]>

  export type EnderecoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rua?: boolean
    numero?: boolean
    bairro?: boolean
    cidade?: boolean
    estado?: boolean
    cep?: boolean
    usuarioId?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["endereco"]>

  export type EnderecoSelectScalar = {
    id?: boolean
    rua?: boolean
    numero?: boolean
    bairro?: boolean
    cidade?: boolean
    estado?: boolean
    cep?: boolean
    usuarioId?: boolean
  }

  export type EnderecoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "rua" | "numero" | "bairro" | "cidade" | "estado" | "cep" | "usuarioId", ExtArgs["result"]["endereco"]>
  export type EnderecoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    pedidos?: boolean | Endereco$pedidosArgs<ExtArgs>
    _count?: boolean | EnderecoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EnderecoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type EnderecoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $EnderecoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Endereco"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs>
      pedidos: Prisma.$PedidoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      rua: string
      numero: string
      bairro: string
      cidade: string
      estado: string
      cep: string
      usuarioId: number
    }, ExtArgs["result"]["endereco"]>
    composites: {}
  }

  type EnderecoGetPayload<S extends boolean | null | undefined | EnderecoDefaultArgs> = $Result.GetResult<Prisma.$EnderecoPayload, S>

  type EnderecoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EnderecoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EnderecoCountAggregateInputType | true
    }

  export interface EnderecoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Endereco'], meta: { name: 'Endereco' } }
    /**
     * Find zero or one Endereco that matches the filter.
     * @param {EnderecoFindUniqueArgs} args - Arguments to find a Endereco
     * @example
     * // Get one Endereco
     * const endereco = await prisma.endereco.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EnderecoFindUniqueArgs>(args: SelectSubset<T, EnderecoFindUniqueArgs<ExtArgs>>): Prisma__EnderecoClient<$Result.GetResult<Prisma.$EnderecoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Endereco that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EnderecoFindUniqueOrThrowArgs} args - Arguments to find a Endereco
     * @example
     * // Get one Endereco
     * const endereco = await prisma.endereco.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EnderecoFindUniqueOrThrowArgs>(args: SelectSubset<T, EnderecoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EnderecoClient<$Result.GetResult<Prisma.$EnderecoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Endereco that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnderecoFindFirstArgs} args - Arguments to find a Endereco
     * @example
     * // Get one Endereco
     * const endereco = await prisma.endereco.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EnderecoFindFirstArgs>(args?: SelectSubset<T, EnderecoFindFirstArgs<ExtArgs>>): Prisma__EnderecoClient<$Result.GetResult<Prisma.$EnderecoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Endereco that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnderecoFindFirstOrThrowArgs} args - Arguments to find a Endereco
     * @example
     * // Get one Endereco
     * const endereco = await prisma.endereco.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EnderecoFindFirstOrThrowArgs>(args?: SelectSubset<T, EnderecoFindFirstOrThrowArgs<ExtArgs>>): Prisma__EnderecoClient<$Result.GetResult<Prisma.$EnderecoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Enderecos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnderecoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Enderecos
     * const enderecos = await prisma.endereco.findMany()
     * 
     * // Get first 10 Enderecos
     * const enderecos = await prisma.endereco.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const enderecoWithIdOnly = await prisma.endereco.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EnderecoFindManyArgs>(args?: SelectSubset<T, EnderecoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnderecoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Endereco.
     * @param {EnderecoCreateArgs} args - Arguments to create a Endereco.
     * @example
     * // Create one Endereco
     * const Endereco = await prisma.endereco.create({
     *   data: {
     *     // ... data to create a Endereco
     *   }
     * })
     * 
     */
    create<T extends EnderecoCreateArgs>(args: SelectSubset<T, EnderecoCreateArgs<ExtArgs>>): Prisma__EnderecoClient<$Result.GetResult<Prisma.$EnderecoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Enderecos.
     * @param {EnderecoCreateManyArgs} args - Arguments to create many Enderecos.
     * @example
     * // Create many Enderecos
     * const endereco = await prisma.endereco.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EnderecoCreateManyArgs>(args?: SelectSubset<T, EnderecoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Enderecos and returns the data saved in the database.
     * @param {EnderecoCreateManyAndReturnArgs} args - Arguments to create many Enderecos.
     * @example
     * // Create many Enderecos
     * const endereco = await prisma.endereco.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Enderecos and only return the `id`
     * const enderecoWithIdOnly = await prisma.endereco.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EnderecoCreateManyAndReturnArgs>(args?: SelectSubset<T, EnderecoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnderecoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Endereco.
     * @param {EnderecoDeleteArgs} args - Arguments to delete one Endereco.
     * @example
     * // Delete one Endereco
     * const Endereco = await prisma.endereco.delete({
     *   where: {
     *     // ... filter to delete one Endereco
     *   }
     * })
     * 
     */
    delete<T extends EnderecoDeleteArgs>(args: SelectSubset<T, EnderecoDeleteArgs<ExtArgs>>): Prisma__EnderecoClient<$Result.GetResult<Prisma.$EnderecoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Endereco.
     * @param {EnderecoUpdateArgs} args - Arguments to update one Endereco.
     * @example
     * // Update one Endereco
     * const endereco = await prisma.endereco.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EnderecoUpdateArgs>(args: SelectSubset<T, EnderecoUpdateArgs<ExtArgs>>): Prisma__EnderecoClient<$Result.GetResult<Prisma.$EnderecoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Enderecos.
     * @param {EnderecoDeleteManyArgs} args - Arguments to filter Enderecos to delete.
     * @example
     * // Delete a few Enderecos
     * const { count } = await prisma.endereco.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EnderecoDeleteManyArgs>(args?: SelectSubset<T, EnderecoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Enderecos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnderecoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Enderecos
     * const endereco = await prisma.endereco.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EnderecoUpdateManyArgs>(args: SelectSubset<T, EnderecoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Enderecos and returns the data updated in the database.
     * @param {EnderecoUpdateManyAndReturnArgs} args - Arguments to update many Enderecos.
     * @example
     * // Update many Enderecos
     * const endereco = await prisma.endereco.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Enderecos and only return the `id`
     * const enderecoWithIdOnly = await prisma.endereco.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EnderecoUpdateManyAndReturnArgs>(args: SelectSubset<T, EnderecoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnderecoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Endereco.
     * @param {EnderecoUpsertArgs} args - Arguments to update or create a Endereco.
     * @example
     * // Update or create a Endereco
     * const endereco = await prisma.endereco.upsert({
     *   create: {
     *     // ... data to create a Endereco
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Endereco we want to update
     *   }
     * })
     */
    upsert<T extends EnderecoUpsertArgs>(args: SelectSubset<T, EnderecoUpsertArgs<ExtArgs>>): Prisma__EnderecoClient<$Result.GetResult<Prisma.$EnderecoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Enderecos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnderecoCountArgs} args - Arguments to filter Enderecos to count.
     * @example
     * // Count the number of Enderecos
     * const count = await prisma.endereco.count({
     *   where: {
     *     // ... the filter for the Enderecos we want to count
     *   }
     * })
    **/
    count<T extends EnderecoCountArgs>(
      args?: Subset<T, EnderecoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EnderecoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Endereco.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnderecoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EnderecoAggregateArgs>(args: Subset<T, EnderecoAggregateArgs>): Prisma.PrismaPromise<GetEnderecoAggregateType<T>>

    /**
     * Group by Endereco.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnderecoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EnderecoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EnderecoGroupByArgs['orderBy'] }
        : { orderBy?: EnderecoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EnderecoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEnderecoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Endereco model
   */
  readonly fields: EnderecoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Endereco.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EnderecoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    pedidos<T extends Endereco$pedidosArgs<ExtArgs> = {}>(args?: Subset<T, Endereco$pedidosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Endereco model
   */
  interface EnderecoFieldRefs {
    readonly id: FieldRef<"Endereco", 'Int'>
    readonly rua: FieldRef<"Endereco", 'String'>
    readonly numero: FieldRef<"Endereco", 'String'>
    readonly bairro: FieldRef<"Endereco", 'String'>
    readonly cidade: FieldRef<"Endereco", 'String'>
    readonly estado: FieldRef<"Endereco", 'String'>
    readonly cep: FieldRef<"Endereco", 'String'>
    readonly usuarioId: FieldRef<"Endereco", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Endereco findUnique
   */
  export type EnderecoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Endereco
     */
    select?: EnderecoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Endereco
     */
    omit?: EnderecoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnderecoInclude<ExtArgs> | null
    /**
     * Filter, which Endereco to fetch.
     */
    where: EnderecoWhereUniqueInput
  }

  /**
   * Endereco findUniqueOrThrow
   */
  export type EnderecoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Endereco
     */
    select?: EnderecoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Endereco
     */
    omit?: EnderecoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnderecoInclude<ExtArgs> | null
    /**
     * Filter, which Endereco to fetch.
     */
    where: EnderecoWhereUniqueInput
  }

  /**
   * Endereco findFirst
   */
  export type EnderecoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Endereco
     */
    select?: EnderecoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Endereco
     */
    omit?: EnderecoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnderecoInclude<ExtArgs> | null
    /**
     * Filter, which Endereco to fetch.
     */
    where?: EnderecoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Enderecos to fetch.
     */
    orderBy?: EnderecoOrderByWithRelationInput | EnderecoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Enderecos.
     */
    cursor?: EnderecoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Enderecos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Enderecos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Enderecos.
     */
    distinct?: EnderecoScalarFieldEnum | EnderecoScalarFieldEnum[]
  }

  /**
   * Endereco findFirstOrThrow
   */
  export type EnderecoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Endereco
     */
    select?: EnderecoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Endereco
     */
    omit?: EnderecoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnderecoInclude<ExtArgs> | null
    /**
     * Filter, which Endereco to fetch.
     */
    where?: EnderecoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Enderecos to fetch.
     */
    orderBy?: EnderecoOrderByWithRelationInput | EnderecoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Enderecos.
     */
    cursor?: EnderecoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Enderecos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Enderecos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Enderecos.
     */
    distinct?: EnderecoScalarFieldEnum | EnderecoScalarFieldEnum[]
  }

  /**
   * Endereco findMany
   */
  export type EnderecoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Endereco
     */
    select?: EnderecoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Endereco
     */
    omit?: EnderecoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnderecoInclude<ExtArgs> | null
    /**
     * Filter, which Enderecos to fetch.
     */
    where?: EnderecoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Enderecos to fetch.
     */
    orderBy?: EnderecoOrderByWithRelationInput | EnderecoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Enderecos.
     */
    cursor?: EnderecoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Enderecos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Enderecos.
     */
    skip?: number
    distinct?: EnderecoScalarFieldEnum | EnderecoScalarFieldEnum[]
  }

  /**
   * Endereco create
   */
  export type EnderecoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Endereco
     */
    select?: EnderecoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Endereco
     */
    omit?: EnderecoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnderecoInclude<ExtArgs> | null
    /**
     * The data needed to create a Endereco.
     */
    data: XOR<EnderecoCreateInput, EnderecoUncheckedCreateInput>
  }

  /**
   * Endereco createMany
   */
  export type EnderecoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Enderecos.
     */
    data: EnderecoCreateManyInput | EnderecoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Endereco createManyAndReturn
   */
  export type EnderecoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Endereco
     */
    select?: EnderecoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Endereco
     */
    omit?: EnderecoOmit<ExtArgs> | null
    /**
     * The data used to create many Enderecos.
     */
    data: EnderecoCreateManyInput | EnderecoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnderecoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Endereco update
   */
  export type EnderecoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Endereco
     */
    select?: EnderecoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Endereco
     */
    omit?: EnderecoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnderecoInclude<ExtArgs> | null
    /**
     * The data needed to update a Endereco.
     */
    data: XOR<EnderecoUpdateInput, EnderecoUncheckedUpdateInput>
    /**
     * Choose, which Endereco to update.
     */
    where: EnderecoWhereUniqueInput
  }

  /**
   * Endereco updateMany
   */
  export type EnderecoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Enderecos.
     */
    data: XOR<EnderecoUpdateManyMutationInput, EnderecoUncheckedUpdateManyInput>
    /**
     * Filter which Enderecos to update
     */
    where?: EnderecoWhereInput
    /**
     * Limit how many Enderecos to update.
     */
    limit?: number
  }

  /**
   * Endereco updateManyAndReturn
   */
  export type EnderecoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Endereco
     */
    select?: EnderecoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Endereco
     */
    omit?: EnderecoOmit<ExtArgs> | null
    /**
     * The data used to update Enderecos.
     */
    data: XOR<EnderecoUpdateManyMutationInput, EnderecoUncheckedUpdateManyInput>
    /**
     * Filter which Enderecos to update
     */
    where?: EnderecoWhereInput
    /**
     * Limit how many Enderecos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnderecoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Endereco upsert
   */
  export type EnderecoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Endereco
     */
    select?: EnderecoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Endereco
     */
    omit?: EnderecoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnderecoInclude<ExtArgs> | null
    /**
     * The filter to search for the Endereco to update in case it exists.
     */
    where: EnderecoWhereUniqueInput
    /**
     * In case the Endereco found by the `where` argument doesn't exist, create a new Endereco with this data.
     */
    create: XOR<EnderecoCreateInput, EnderecoUncheckedCreateInput>
    /**
     * In case the Endereco was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EnderecoUpdateInput, EnderecoUncheckedUpdateInput>
  }

  /**
   * Endereco delete
   */
  export type EnderecoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Endereco
     */
    select?: EnderecoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Endereco
     */
    omit?: EnderecoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnderecoInclude<ExtArgs> | null
    /**
     * Filter which Endereco to delete.
     */
    where: EnderecoWhereUniqueInput
  }

  /**
   * Endereco deleteMany
   */
  export type EnderecoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Enderecos to delete
     */
    where?: EnderecoWhereInput
    /**
     * Limit how many Enderecos to delete.
     */
    limit?: number
  }

  /**
   * Endereco.pedidos
   */
  export type Endereco$pedidosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    where?: PedidoWhereInput
    orderBy?: PedidoOrderByWithRelationInput | PedidoOrderByWithRelationInput[]
    cursor?: PedidoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PedidoScalarFieldEnum | PedidoScalarFieldEnum[]
  }

  /**
   * Endereco without action
   */
  export type EnderecoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Endereco
     */
    select?: EnderecoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Endereco
     */
    omit?: EnderecoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnderecoInclude<ExtArgs> | null
  }


  /**
   * Model Categoria
   */

  export type AggregateCategoria = {
    _count: CategoriaCountAggregateOutputType | null
    _avg: CategoriaAvgAggregateOutputType | null
    _sum: CategoriaSumAggregateOutputType | null
    _min: CategoriaMinAggregateOutputType | null
    _max: CategoriaMaxAggregateOutputType | null
  }

  export type CategoriaAvgAggregateOutputType = {
    id: number | null
  }

  export type CategoriaSumAggregateOutputType = {
    id: number | null
  }

  export type CategoriaMinAggregateOutputType = {
    id: number | null
    nome: string | null
    descricao: string | null
  }

  export type CategoriaMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    descricao: string | null
  }

  export type CategoriaCountAggregateOutputType = {
    id: number
    nome: number
    descricao: number
    _all: number
  }


  export type CategoriaAvgAggregateInputType = {
    id?: true
  }

  export type CategoriaSumAggregateInputType = {
    id?: true
  }

  export type CategoriaMinAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
  }

  export type CategoriaMaxAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
  }

  export type CategoriaCountAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    _all?: true
  }

  export type CategoriaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categoria to aggregate.
     */
    where?: CategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categorias to fetch.
     */
    orderBy?: CategoriaOrderByWithRelationInput | CategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categorias
    **/
    _count?: true | CategoriaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoriaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategoriaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoriaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoriaMaxAggregateInputType
  }

  export type GetCategoriaAggregateType<T extends CategoriaAggregateArgs> = {
        [P in keyof T & keyof AggregateCategoria]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategoria[P]>
      : GetScalarType<T[P], AggregateCategoria[P]>
  }




  export type CategoriaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoriaWhereInput
    orderBy?: CategoriaOrderByWithAggregationInput | CategoriaOrderByWithAggregationInput[]
    by: CategoriaScalarFieldEnum[] | CategoriaScalarFieldEnum
    having?: CategoriaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoriaCountAggregateInputType | true
    _avg?: CategoriaAvgAggregateInputType
    _sum?: CategoriaSumAggregateInputType
    _min?: CategoriaMinAggregateInputType
    _max?: CategoriaMaxAggregateInputType
  }

  export type CategoriaGroupByOutputType = {
    id: number
    nome: string
    descricao: string | null
    _count: CategoriaCountAggregateOutputType | null
    _avg: CategoriaAvgAggregateOutputType | null
    _sum: CategoriaSumAggregateOutputType | null
    _min: CategoriaMinAggregateOutputType | null
    _max: CategoriaMaxAggregateOutputType | null
  }

  type GetCategoriaGroupByPayload<T extends CategoriaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoriaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoriaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoriaGroupByOutputType[P]>
            : GetScalarType<T[P], CategoriaGroupByOutputType[P]>
        }
      >
    >


  export type CategoriaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    descricao?: boolean
    produtos?: boolean | Categoria$produtosArgs<ExtArgs>
    _count?: boolean | CategoriaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categoria"]>

  export type CategoriaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    descricao?: boolean
  }, ExtArgs["result"]["categoria"]>

  export type CategoriaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    descricao?: boolean
  }, ExtArgs["result"]["categoria"]>

  export type CategoriaSelectScalar = {
    id?: boolean
    nome?: boolean
    descricao?: boolean
  }

  export type CategoriaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "descricao", ExtArgs["result"]["categoria"]>
  export type CategoriaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    produtos?: boolean | Categoria$produtosArgs<ExtArgs>
    _count?: boolean | CategoriaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategoriaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CategoriaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CategoriaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Categoria"
    objects: {
      produtos: Prisma.$ProdutoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      descricao: string | null
    }, ExtArgs["result"]["categoria"]>
    composites: {}
  }

  type CategoriaGetPayload<S extends boolean | null | undefined | CategoriaDefaultArgs> = $Result.GetResult<Prisma.$CategoriaPayload, S>

  type CategoriaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoriaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoriaCountAggregateInputType | true
    }

  export interface CategoriaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Categoria'], meta: { name: 'Categoria' } }
    /**
     * Find zero or one Categoria that matches the filter.
     * @param {CategoriaFindUniqueArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoriaFindUniqueArgs>(args: SelectSubset<T, CategoriaFindUniqueArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Categoria that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoriaFindUniqueOrThrowArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoriaFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoriaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categoria that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaFindFirstArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoriaFindFirstArgs>(args?: SelectSubset<T, CategoriaFindFirstArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categoria that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaFindFirstOrThrowArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoriaFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoriaFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categorias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categorias
     * const categorias = await prisma.categoria.findMany()
     * 
     * // Get first 10 Categorias
     * const categorias = await prisma.categoria.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoriaWithIdOnly = await prisma.categoria.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoriaFindManyArgs>(args?: SelectSubset<T, CategoriaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Categoria.
     * @param {CategoriaCreateArgs} args - Arguments to create a Categoria.
     * @example
     * // Create one Categoria
     * const Categoria = await prisma.categoria.create({
     *   data: {
     *     // ... data to create a Categoria
     *   }
     * })
     * 
     */
    create<T extends CategoriaCreateArgs>(args: SelectSubset<T, CategoriaCreateArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categorias.
     * @param {CategoriaCreateManyArgs} args - Arguments to create many Categorias.
     * @example
     * // Create many Categorias
     * const categoria = await prisma.categoria.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoriaCreateManyArgs>(args?: SelectSubset<T, CategoriaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categorias and returns the data saved in the database.
     * @param {CategoriaCreateManyAndReturnArgs} args - Arguments to create many Categorias.
     * @example
     * // Create many Categorias
     * const categoria = await prisma.categoria.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categorias and only return the `id`
     * const categoriaWithIdOnly = await prisma.categoria.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoriaCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoriaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Categoria.
     * @param {CategoriaDeleteArgs} args - Arguments to delete one Categoria.
     * @example
     * // Delete one Categoria
     * const Categoria = await prisma.categoria.delete({
     *   where: {
     *     // ... filter to delete one Categoria
     *   }
     * })
     * 
     */
    delete<T extends CategoriaDeleteArgs>(args: SelectSubset<T, CategoriaDeleteArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Categoria.
     * @param {CategoriaUpdateArgs} args - Arguments to update one Categoria.
     * @example
     * // Update one Categoria
     * const categoria = await prisma.categoria.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoriaUpdateArgs>(args: SelectSubset<T, CategoriaUpdateArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categorias.
     * @param {CategoriaDeleteManyArgs} args - Arguments to filter Categorias to delete.
     * @example
     * // Delete a few Categorias
     * const { count } = await prisma.categoria.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoriaDeleteManyArgs>(args?: SelectSubset<T, CategoriaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categorias
     * const categoria = await prisma.categoria.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoriaUpdateManyArgs>(args: SelectSubset<T, CategoriaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categorias and returns the data updated in the database.
     * @param {CategoriaUpdateManyAndReturnArgs} args - Arguments to update many Categorias.
     * @example
     * // Update many Categorias
     * const categoria = await prisma.categoria.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categorias and only return the `id`
     * const categoriaWithIdOnly = await prisma.categoria.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CategoriaUpdateManyAndReturnArgs>(args: SelectSubset<T, CategoriaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Categoria.
     * @param {CategoriaUpsertArgs} args - Arguments to update or create a Categoria.
     * @example
     * // Update or create a Categoria
     * const categoria = await prisma.categoria.upsert({
     *   create: {
     *     // ... data to create a Categoria
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Categoria we want to update
     *   }
     * })
     */
    upsert<T extends CategoriaUpsertArgs>(args: SelectSubset<T, CategoriaUpsertArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaCountArgs} args - Arguments to filter Categorias to count.
     * @example
     * // Count the number of Categorias
     * const count = await prisma.categoria.count({
     *   where: {
     *     // ... the filter for the Categorias we want to count
     *   }
     * })
    **/
    count<T extends CategoriaCountArgs>(
      args?: Subset<T, CategoriaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoriaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Categoria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoriaAggregateArgs>(args: Subset<T, CategoriaAggregateArgs>): Prisma.PrismaPromise<GetCategoriaAggregateType<T>>

    /**
     * Group by Categoria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CategoriaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoriaGroupByArgs['orderBy'] }
        : { orderBy?: CategoriaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CategoriaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoriaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Categoria model
   */
  readonly fields: CategoriaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Categoria.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoriaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    produtos<T extends Categoria$produtosArgs<ExtArgs> = {}>(args?: Subset<T, Categoria$produtosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Categoria model
   */
  interface CategoriaFieldRefs {
    readonly id: FieldRef<"Categoria", 'Int'>
    readonly nome: FieldRef<"Categoria", 'String'>
    readonly descricao: FieldRef<"Categoria", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Categoria findUnique
   */
  export type CategoriaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categoria to fetch.
     */
    where: CategoriaWhereUniqueInput
  }

  /**
   * Categoria findUniqueOrThrow
   */
  export type CategoriaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categoria to fetch.
     */
    where: CategoriaWhereUniqueInput
  }

  /**
   * Categoria findFirst
   */
  export type CategoriaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categoria to fetch.
     */
    where?: CategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categorias to fetch.
     */
    orderBy?: CategoriaOrderByWithRelationInput | CategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categorias.
     */
    cursor?: CategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categorias.
     */
    distinct?: CategoriaScalarFieldEnum | CategoriaScalarFieldEnum[]
  }

  /**
   * Categoria findFirstOrThrow
   */
  export type CategoriaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categoria to fetch.
     */
    where?: CategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categorias to fetch.
     */
    orderBy?: CategoriaOrderByWithRelationInput | CategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categorias.
     */
    cursor?: CategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categorias.
     */
    distinct?: CategoriaScalarFieldEnum | CategoriaScalarFieldEnum[]
  }

  /**
   * Categoria findMany
   */
  export type CategoriaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categorias to fetch.
     */
    where?: CategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categorias to fetch.
     */
    orderBy?: CategoriaOrderByWithRelationInput | CategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categorias.
     */
    cursor?: CategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categorias.
     */
    skip?: number
    distinct?: CategoriaScalarFieldEnum | CategoriaScalarFieldEnum[]
  }

  /**
   * Categoria create
   */
  export type CategoriaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * The data needed to create a Categoria.
     */
    data: XOR<CategoriaCreateInput, CategoriaUncheckedCreateInput>
  }

  /**
   * Categoria createMany
   */
  export type CategoriaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categorias.
     */
    data: CategoriaCreateManyInput | CategoriaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Categoria createManyAndReturn
   */
  export type CategoriaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * The data used to create many Categorias.
     */
    data: CategoriaCreateManyInput | CategoriaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Categoria update
   */
  export type CategoriaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * The data needed to update a Categoria.
     */
    data: XOR<CategoriaUpdateInput, CategoriaUncheckedUpdateInput>
    /**
     * Choose, which Categoria to update.
     */
    where: CategoriaWhereUniqueInput
  }

  /**
   * Categoria updateMany
   */
  export type CategoriaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categorias.
     */
    data: XOR<CategoriaUpdateManyMutationInput, CategoriaUncheckedUpdateManyInput>
    /**
     * Filter which Categorias to update
     */
    where?: CategoriaWhereInput
    /**
     * Limit how many Categorias to update.
     */
    limit?: number
  }

  /**
   * Categoria updateManyAndReturn
   */
  export type CategoriaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * The data used to update Categorias.
     */
    data: XOR<CategoriaUpdateManyMutationInput, CategoriaUncheckedUpdateManyInput>
    /**
     * Filter which Categorias to update
     */
    where?: CategoriaWhereInput
    /**
     * Limit how many Categorias to update.
     */
    limit?: number
  }

  /**
   * Categoria upsert
   */
  export type CategoriaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * The filter to search for the Categoria to update in case it exists.
     */
    where: CategoriaWhereUniqueInput
    /**
     * In case the Categoria found by the `where` argument doesn't exist, create a new Categoria with this data.
     */
    create: XOR<CategoriaCreateInput, CategoriaUncheckedCreateInput>
    /**
     * In case the Categoria was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoriaUpdateInput, CategoriaUncheckedUpdateInput>
  }

  /**
   * Categoria delete
   */
  export type CategoriaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter which Categoria to delete.
     */
    where: CategoriaWhereUniqueInput
  }

  /**
   * Categoria deleteMany
   */
  export type CategoriaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categorias to delete
     */
    where?: CategoriaWhereInput
    /**
     * Limit how many Categorias to delete.
     */
    limit?: number
  }

  /**
   * Categoria.produtos
   */
  export type Categoria$produtosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    where?: ProdutoWhereInput
    orderBy?: ProdutoOrderByWithRelationInput | ProdutoOrderByWithRelationInput[]
    cursor?: ProdutoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProdutoScalarFieldEnum | ProdutoScalarFieldEnum[]
  }

  /**
   * Categoria without action
   */
  export type CategoriaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
  }


  /**
   * Model Produto
   */

  export type AggregateProduto = {
    _count: ProdutoCountAggregateOutputType | null
    _avg: ProdutoAvgAggregateOutputType | null
    _sum: ProdutoSumAggregateOutputType | null
    _min: ProdutoMinAggregateOutputType | null
    _max: ProdutoMaxAggregateOutputType | null
  }

  export type ProdutoAvgAggregateOutputType = {
    id: number | null
    preco: Decimal | null
    categoriaId: number | null
  }

  export type ProdutoSumAggregateOutputType = {
    id: number | null
    preco: Decimal | null
    categoriaId: number | null
  }

  export type ProdutoMinAggregateOutputType = {
    id: number | null
    nome: string | null
    descricao: string | null
    preco: Decimal | null
    imagemUrl: string | null
    disponivel: boolean | null
    categoriaId: number | null
  }

  export type ProdutoMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    descricao: string | null
    preco: Decimal | null
    imagemUrl: string | null
    disponivel: boolean | null
    categoriaId: number | null
  }

  export type ProdutoCountAggregateOutputType = {
    id: number
    nome: number
    descricao: number
    preco: number
    imagemUrl: number
    disponivel: number
    categoriaId: number
    _all: number
  }


  export type ProdutoAvgAggregateInputType = {
    id?: true
    preco?: true
    categoriaId?: true
  }

  export type ProdutoSumAggregateInputType = {
    id?: true
    preco?: true
    categoriaId?: true
  }

  export type ProdutoMinAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    preco?: true
    imagemUrl?: true
    disponivel?: true
    categoriaId?: true
  }

  export type ProdutoMaxAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    preco?: true
    imagemUrl?: true
    disponivel?: true
    categoriaId?: true
  }

  export type ProdutoCountAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    preco?: true
    imagemUrl?: true
    disponivel?: true
    categoriaId?: true
    _all?: true
  }

  export type ProdutoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Produto to aggregate.
     */
    where?: ProdutoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Produtos to fetch.
     */
    orderBy?: ProdutoOrderByWithRelationInput | ProdutoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProdutoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Produtos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Produtos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Produtos
    **/
    _count?: true | ProdutoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProdutoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProdutoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProdutoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProdutoMaxAggregateInputType
  }

  export type GetProdutoAggregateType<T extends ProdutoAggregateArgs> = {
        [P in keyof T & keyof AggregateProduto]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduto[P]>
      : GetScalarType<T[P], AggregateProduto[P]>
  }




  export type ProdutoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProdutoWhereInput
    orderBy?: ProdutoOrderByWithAggregationInput | ProdutoOrderByWithAggregationInput[]
    by: ProdutoScalarFieldEnum[] | ProdutoScalarFieldEnum
    having?: ProdutoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProdutoCountAggregateInputType | true
    _avg?: ProdutoAvgAggregateInputType
    _sum?: ProdutoSumAggregateInputType
    _min?: ProdutoMinAggregateInputType
    _max?: ProdutoMaxAggregateInputType
  }

  export type ProdutoGroupByOutputType = {
    id: number
    nome: string
    descricao: string | null
    preco: Decimal
    imagemUrl: string | null
    disponivel: boolean
    categoriaId: number
    _count: ProdutoCountAggregateOutputType | null
    _avg: ProdutoAvgAggregateOutputType | null
    _sum: ProdutoSumAggregateOutputType | null
    _min: ProdutoMinAggregateOutputType | null
    _max: ProdutoMaxAggregateOutputType | null
  }

  type GetProdutoGroupByPayload<T extends ProdutoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProdutoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProdutoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProdutoGroupByOutputType[P]>
            : GetScalarType<T[P], ProdutoGroupByOutputType[P]>
        }
      >
    >


  export type ProdutoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    descricao?: boolean
    preco?: boolean
    imagemUrl?: boolean
    disponivel?: boolean
    categoriaId?: boolean
    categoria?: boolean | CategoriaDefaultArgs<ExtArgs>
    itensPedido?: boolean | Produto$itensPedidoArgs<ExtArgs>
    itensCarrinho?: boolean | Produto$itensCarrinhoArgs<ExtArgs>
    _count?: boolean | ProdutoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["produto"]>

  export type ProdutoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    descricao?: boolean
    preco?: boolean
    imagemUrl?: boolean
    disponivel?: boolean
    categoriaId?: boolean
    categoria?: boolean | CategoriaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["produto"]>

  export type ProdutoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    descricao?: boolean
    preco?: boolean
    imagemUrl?: boolean
    disponivel?: boolean
    categoriaId?: boolean
    categoria?: boolean | CategoriaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["produto"]>

  export type ProdutoSelectScalar = {
    id?: boolean
    nome?: boolean
    descricao?: boolean
    preco?: boolean
    imagemUrl?: boolean
    disponivel?: boolean
    categoriaId?: boolean
  }

  export type ProdutoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "descricao" | "preco" | "imagemUrl" | "disponivel" | "categoriaId", ExtArgs["result"]["produto"]>
  export type ProdutoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categoria?: boolean | CategoriaDefaultArgs<ExtArgs>
    itensPedido?: boolean | Produto$itensPedidoArgs<ExtArgs>
    itensCarrinho?: boolean | Produto$itensCarrinhoArgs<ExtArgs>
    _count?: boolean | ProdutoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProdutoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categoria?: boolean | CategoriaDefaultArgs<ExtArgs>
  }
  export type ProdutoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categoria?: boolean | CategoriaDefaultArgs<ExtArgs>
  }

  export type $ProdutoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Produto"
    objects: {
      categoria: Prisma.$CategoriaPayload<ExtArgs>
      itensPedido: Prisma.$ItemPedidoPayload<ExtArgs>[]
      itensCarrinho: Prisma.$ItemCarrinhoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      descricao: string | null
      preco: Prisma.Decimal
      imagemUrl: string | null
      disponivel: boolean
      categoriaId: number
    }, ExtArgs["result"]["produto"]>
    composites: {}
  }

  type ProdutoGetPayload<S extends boolean | null | undefined | ProdutoDefaultArgs> = $Result.GetResult<Prisma.$ProdutoPayload, S>

  type ProdutoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProdutoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProdutoCountAggregateInputType | true
    }

  export interface ProdutoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Produto'], meta: { name: 'Produto' } }
    /**
     * Find zero or one Produto that matches the filter.
     * @param {ProdutoFindUniqueArgs} args - Arguments to find a Produto
     * @example
     * // Get one Produto
     * const produto = await prisma.produto.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProdutoFindUniqueArgs>(args: SelectSubset<T, ProdutoFindUniqueArgs<ExtArgs>>): Prisma__ProdutoClient<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Produto that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProdutoFindUniqueOrThrowArgs} args - Arguments to find a Produto
     * @example
     * // Get one Produto
     * const produto = await prisma.produto.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProdutoFindUniqueOrThrowArgs>(args: SelectSubset<T, ProdutoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProdutoClient<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Produto that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutoFindFirstArgs} args - Arguments to find a Produto
     * @example
     * // Get one Produto
     * const produto = await prisma.produto.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProdutoFindFirstArgs>(args?: SelectSubset<T, ProdutoFindFirstArgs<ExtArgs>>): Prisma__ProdutoClient<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Produto that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutoFindFirstOrThrowArgs} args - Arguments to find a Produto
     * @example
     * // Get one Produto
     * const produto = await prisma.produto.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProdutoFindFirstOrThrowArgs>(args?: SelectSubset<T, ProdutoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProdutoClient<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Produtos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Produtos
     * const produtos = await prisma.produto.findMany()
     * 
     * // Get first 10 Produtos
     * const produtos = await prisma.produto.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const produtoWithIdOnly = await prisma.produto.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProdutoFindManyArgs>(args?: SelectSubset<T, ProdutoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Produto.
     * @param {ProdutoCreateArgs} args - Arguments to create a Produto.
     * @example
     * // Create one Produto
     * const Produto = await prisma.produto.create({
     *   data: {
     *     // ... data to create a Produto
     *   }
     * })
     * 
     */
    create<T extends ProdutoCreateArgs>(args: SelectSubset<T, ProdutoCreateArgs<ExtArgs>>): Prisma__ProdutoClient<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Produtos.
     * @param {ProdutoCreateManyArgs} args - Arguments to create many Produtos.
     * @example
     * // Create many Produtos
     * const produto = await prisma.produto.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProdutoCreateManyArgs>(args?: SelectSubset<T, ProdutoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Produtos and returns the data saved in the database.
     * @param {ProdutoCreateManyAndReturnArgs} args - Arguments to create many Produtos.
     * @example
     * // Create many Produtos
     * const produto = await prisma.produto.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Produtos and only return the `id`
     * const produtoWithIdOnly = await prisma.produto.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProdutoCreateManyAndReturnArgs>(args?: SelectSubset<T, ProdutoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Produto.
     * @param {ProdutoDeleteArgs} args - Arguments to delete one Produto.
     * @example
     * // Delete one Produto
     * const Produto = await prisma.produto.delete({
     *   where: {
     *     // ... filter to delete one Produto
     *   }
     * })
     * 
     */
    delete<T extends ProdutoDeleteArgs>(args: SelectSubset<T, ProdutoDeleteArgs<ExtArgs>>): Prisma__ProdutoClient<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Produto.
     * @param {ProdutoUpdateArgs} args - Arguments to update one Produto.
     * @example
     * // Update one Produto
     * const produto = await prisma.produto.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProdutoUpdateArgs>(args: SelectSubset<T, ProdutoUpdateArgs<ExtArgs>>): Prisma__ProdutoClient<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Produtos.
     * @param {ProdutoDeleteManyArgs} args - Arguments to filter Produtos to delete.
     * @example
     * // Delete a few Produtos
     * const { count } = await prisma.produto.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProdutoDeleteManyArgs>(args?: SelectSubset<T, ProdutoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Produtos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Produtos
     * const produto = await prisma.produto.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProdutoUpdateManyArgs>(args: SelectSubset<T, ProdutoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Produtos and returns the data updated in the database.
     * @param {ProdutoUpdateManyAndReturnArgs} args - Arguments to update many Produtos.
     * @example
     * // Update many Produtos
     * const produto = await prisma.produto.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Produtos and only return the `id`
     * const produtoWithIdOnly = await prisma.produto.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProdutoUpdateManyAndReturnArgs>(args: SelectSubset<T, ProdutoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Produto.
     * @param {ProdutoUpsertArgs} args - Arguments to update or create a Produto.
     * @example
     * // Update or create a Produto
     * const produto = await prisma.produto.upsert({
     *   create: {
     *     // ... data to create a Produto
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Produto we want to update
     *   }
     * })
     */
    upsert<T extends ProdutoUpsertArgs>(args: SelectSubset<T, ProdutoUpsertArgs<ExtArgs>>): Prisma__ProdutoClient<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Produtos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutoCountArgs} args - Arguments to filter Produtos to count.
     * @example
     * // Count the number of Produtos
     * const count = await prisma.produto.count({
     *   where: {
     *     // ... the filter for the Produtos we want to count
     *   }
     * })
    **/
    count<T extends ProdutoCountArgs>(
      args?: Subset<T, ProdutoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProdutoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Produto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProdutoAggregateArgs>(args: Subset<T, ProdutoAggregateArgs>): Prisma.PrismaPromise<GetProdutoAggregateType<T>>

    /**
     * Group by Produto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProdutoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProdutoGroupByArgs['orderBy'] }
        : { orderBy?: ProdutoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProdutoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProdutoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Produto model
   */
  readonly fields: ProdutoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Produto.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProdutoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    categoria<T extends CategoriaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoriaDefaultArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    itensPedido<T extends Produto$itensPedidoArgs<ExtArgs> = {}>(args?: Subset<T, Produto$itensPedidoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPedidoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    itensCarrinho<T extends Produto$itensCarrinhoArgs<ExtArgs> = {}>(args?: Subset<T, Produto$itensCarrinhoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemCarrinhoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Produto model
   */
  interface ProdutoFieldRefs {
    readonly id: FieldRef<"Produto", 'Int'>
    readonly nome: FieldRef<"Produto", 'String'>
    readonly descricao: FieldRef<"Produto", 'String'>
    readonly preco: FieldRef<"Produto", 'Decimal'>
    readonly imagemUrl: FieldRef<"Produto", 'String'>
    readonly disponivel: FieldRef<"Produto", 'Boolean'>
    readonly categoriaId: FieldRef<"Produto", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Produto findUnique
   */
  export type ProdutoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    /**
     * Filter, which Produto to fetch.
     */
    where: ProdutoWhereUniqueInput
  }

  /**
   * Produto findUniqueOrThrow
   */
  export type ProdutoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    /**
     * Filter, which Produto to fetch.
     */
    where: ProdutoWhereUniqueInput
  }

  /**
   * Produto findFirst
   */
  export type ProdutoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    /**
     * Filter, which Produto to fetch.
     */
    where?: ProdutoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Produtos to fetch.
     */
    orderBy?: ProdutoOrderByWithRelationInput | ProdutoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Produtos.
     */
    cursor?: ProdutoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Produtos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Produtos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Produtos.
     */
    distinct?: ProdutoScalarFieldEnum | ProdutoScalarFieldEnum[]
  }

  /**
   * Produto findFirstOrThrow
   */
  export type ProdutoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    /**
     * Filter, which Produto to fetch.
     */
    where?: ProdutoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Produtos to fetch.
     */
    orderBy?: ProdutoOrderByWithRelationInput | ProdutoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Produtos.
     */
    cursor?: ProdutoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Produtos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Produtos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Produtos.
     */
    distinct?: ProdutoScalarFieldEnum | ProdutoScalarFieldEnum[]
  }

  /**
   * Produto findMany
   */
  export type ProdutoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    /**
     * Filter, which Produtos to fetch.
     */
    where?: ProdutoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Produtos to fetch.
     */
    orderBy?: ProdutoOrderByWithRelationInput | ProdutoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Produtos.
     */
    cursor?: ProdutoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Produtos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Produtos.
     */
    skip?: number
    distinct?: ProdutoScalarFieldEnum | ProdutoScalarFieldEnum[]
  }

  /**
   * Produto create
   */
  export type ProdutoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    /**
     * The data needed to create a Produto.
     */
    data: XOR<ProdutoCreateInput, ProdutoUncheckedCreateInput>
  }

  /**
   * Produto createMany
   */
  export type ProdutoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Produtos.
     */
    data: ProdutoCreateManyInput | ProdutoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Produto createManyAndReturn
   */
  export type ProdutoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * The data used to create many Produtos.
     */
    data: ProdutoCreateManyInput | ProdutoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Produto update
   */
  export type ProdutoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    /**
     * The data needed to update a Produto.
     */
    data: XOR<ProdutoUpdateInput, ProdutoUncheckedUpdateInput>
    /**
     * Choose, which Produto to update.
     */
    where: ProdutoWhereUniqueInput
  }

  /**
   * Produto updateMany
   */
  export type ProdutoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Produtos.
     */
    data: XOR<ProdutoUpdateManyMutationInput, ProdutoUncheckedUpdateManyInput>
    /**
     * Filter which Produtos to update
     */
    where?: ProdutoWhereInput
    /**
     * Limit how many Produtos to update.
     */
    limit?: number
  }

  /**
   * Produto updateManyAndReturn
   */
  export type ProdutoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * The data used to update Produtos.
     */
    data: XOR<ProdutoUpdateManyMutationInput, ProdutoUncheckedUpdateManyInput>
    /**
     * Filter which Produtos to update
     */
    where?: ProdutoWhereInput
    /**
     * Limit how many Produtos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Produto upsert
   */
  export type ProdutoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    /**
     * The filter to search for the Produto to update in case it exists.
     */
    where: ProdutoWhereUniqueInput
    /**
     * In case the Produto found by the `where` argument doesn't exist, create a new Produto with this data.
     */
    create: XOR<ProdutoCreateInput, ProdutoUncheckedCreateInput>
    /**
     * In case the Produto was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProdutoUpdateInput, ProdutoUncheckedUpdateInput>
  }

  /**
   * Produto delete
   */
  export type ProdutoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    /**
     * Filter which Produto to delete.
     */
    where: ProdutoWhereUniqueInput
  }

  /**
   * Produto deleteMany
   */
  export type ProdutoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Produtos to delete
     */
    where?: ProdutoWhereInput
    /**
     * Limit how many Produtos to delete.
     */
    limit?: number
  }

  /**
   * Produto.itensPedido
   */
  export type Produto$itensPedidoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemPedido
     */
    select?: ItemPedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemPedido
     */
    omit?: ItemPedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemPedidoInclude<ExtArgs> | null
    where?: ItemPedidoWhereInput
    orderBy?: ItemPedidoOrderByWithRelationInput | ItemPedidoOrderByWithRelationInput[]
    cursor?: ItemPedidoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ItemPedidoScalarFieldEnum | ItemPedidoScalarFieldEnum[]
  }

  /**
   * Produto.itensCarrinho
   */
  export type Produto$itensCarrinhoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemCarrinho
     */
    select?: ItemCarrinhoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemCarrinho
     */
    omit?: ItemCarrinhoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemCarrinhoInclude<ExtArgs> | null
    where?: ItemCarrinhoWhereInput
    orderBy?: ItemCarrinhoOrderByWithRelationInput | ItemCarrinhoOrderByWithRelationInput[]
    cursor?: ItemCarrinhoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ItemCarrinhoScalarFieldEnum | ItemCarrinhoScalarFieldEnum[]
  }

  /**
   * Produto without action
   */
  export type ProdutoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
  }


  /**
   * Model Pedido
   */

  export type AggregatePedido = {
    _count: PedidoCountAggregateOutputType | null
    _avg: PedidoAvgAggregateOutputType | null
    _sum: PedidoSumAggregateOutputType | null
    _min: PedidoMinAggregateOutputType | null
    _max: PedidoMaxAggregateOutputType | null
  }

  export type PedidoAvgAggregateOutputType = {
    id: number | null
    total: Decimal | null
    usuarioId: number | null
    enderecoId: number | null
  }

  export type PedidoSumAggregateOutputType = {
    id: number | null
    total: Decimal | null
    usuarioId: number | null
    enderecoId: number | null
  }

  export type PedidoMinAggregateOutputType = {
    id: number | null
    status: $Enums.StatusPedido | null
    tipo: $Enums.TipoPedido | null
    total: Decimal | null
    criadoEm: Date | null
    usuarioId: number | null
    enderecoId: number | null
  }

  export type PedidoMaxAggregateOutputType = {
    id: number | null
    status: $Enums.StatusPedido | null
    tipo: $Enums.TipoPedido | null
    total: Decimal | null
    criadoEm: Date | null
    usuarioId: number | null
    enderecoId: number | null
  }

  export type PedidoCountAggregateOutputType = {
    id: number
    status: number
    tipo: number
    total: number
    criadoEm: number
    usuarioId: number
    enderecoId: number
    _all: number
  }


  export type PedidoAvgAggregateInputType = {
    id?: true
    total?: true
    usuarioId?: true
    enderecoId?: true
  }

  export type PedidoSumAggregateInputType = {
    id?: true
    total?: true
    usuarioId?: true
    enderecoId?: true
  }

  export type PedidoMinAggregateInputType = {
    id?: true
    status?: true
    tipo?: true
    total?: true
    criadoEm?: true
    usuarioId?: true
    enderecoId?: true
  }

  export type PedidoMaxAggregateInputType = {
    id?: true
    status?: true
    tipo?: true
    total?: true
    criadoEm?: true
    usuarioId?: true
    enderecoId?: true
  }

  export type PedidoCountAggregateInputType = {
    id?: true
    status?: true
    tipo?: true
    total?: true
    criadoEm?: true
    usuarioId?: true
    enderecoId?: true
    _all?: true
  }

  export type PedidoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pedido to aggregate.
     */
    where?: PedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pedidos to fetch.
     */
    orderBy?: PedidoOrderByWithRelationInput | PedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pedidos
    **/
    _count?: true | PedidoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PedidoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PedidoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PedidoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PedidoMaxAggregateInputType
  }

  export type GetPedidoAggregateType<T extends PedidoAggregateArgs> = {
        [P in keyof T & keyof AggregatePedido]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePedido[P]>
      : GetScalarType<T[P], AggregatePedido[P]>
  }




  export type PedidoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PedidoWhereInput
    orderBy?: PedidoOrderByWithAggregationInput | PedidoOrderByWithAggregationInput[]
    by: PedidoScalarFieldEnum[] | PedidoScalarFieldEnum
    having?: PedidoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PedidoCountAggregateInputType | true
    _avg?: PedidoAvgAggregateInputType
    _sum?: PedidoSumAggregateInputType
    _min?: PedidoMinAggregateInputType
    _max?: PedidoMaxAggregateInputType
  }

  export type PedidoGroupByOutputType = {
    id: number
    status: $Enums.StatusPedido
    tipo: $Enums.TipoPedido
    total: Decimal
    criadoEm: Date
    usuarioId: number
    enderecoId: number | null
    _count: PedidoCountAggregateOutputType | null
    _avg: PedidoAvgAggregateOutputType | null
    _sum: PedidoSumAggregateOutputType | null
    _min: PedidoMinAggregateOutputType | null
    _max: PedidoMaxAggregateOutputType | null
  }

  type GetPedidoGroupByPayload<T extends PedidoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PedidoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PedidoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PedidoGroupByOutputType[P]>
            : GetScalarType<T[P], PedidoGroupByOutputType[P]>
        }
      >
    >


  export type PedidoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    tipo?: boolean
    total?: boolean
    criadoEm?: boolean
    usuarioId?: boolean
    enderecoId?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    endereco?: boolean | Pedido$enderecoArgs<ExtArgs>
    itens?: boolean | Pedido$itensArgs<ExtArgs>
    pagamento?: boolean | Pedido$pagamentoArgs<ExtArgs>
    entrega?: boolean | Pedido$entregaArgs<ExtArgs>
    _count?: boolean | PedidoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pedido"]>

  export type PedidoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    tipo?: boolean
    total?: boolean
    criadoEm?: boolean
    usuarioId?: boolean
    enderecoId?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    endereco?: boolean | Pedido$enderecoArgs<ExtArgs>
  }, ExtArgs["result"]["pedido"]>

  export type PedidoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    tipo?: boolean
    total?: boolean
    criadoEm?: boolean
    usuarioId?: boolean
    enderecoId?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    endereco?: boolean | Pedido$enderecoArgs<ExtArgs>
  }, ExtArgs["result"]["pedido"]>

  export type PedidoSelectScalar = {
    id?: boolean
    status?: boolean
    tipo?: boolean
    total?: boolean
    criadoEm?: boolean
    usuarioId?: boolean
    enderecoId?: boolean
  }

  export type PedidoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "status" | "tipo" | "total" | "criadoEm" | "usuarioId" | "enderecoId", ExtArgs["result"]["pedido"]>
  export type PedidoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    endereco?: boolean | Pedido$enderecoArgs<ExtArgs>
    itens?: boolean | Pedido$itensArgs<ExtArgs>
    pagamento?: boolean | Pedido$pagamentoArgs<ExtArgs>
    entrega?: boolean | Pedido$entregaArgs<ExtArgs>
    _count?: boolean | PedidoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PedidoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    endereco?: boolean | Pedido$enderecoArgs<ExtArgs>
  }
  export type PedidoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    endereco?: boolean | Pedido$enderecoArgs<ExtArgs>
  }

  export type $PedidoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Pedido"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs>
      endereco: Prisma.$EnderecoPayload<ExtArgs> | null
      itens: Prisma.$ItemPedidoPayload<ExtArgs>[]
      pagamento: Prisma.$PagamentoPayload<ExtArgs> | null
      entrega: Prisma.$EntregaPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      status: $Enums.StatusPedido
      tipo: $Enums.TipoPedido
      total: Prisma.Decimal
      criadoEm: Date
      usuarioId: number
      enderecoId: number | null
    }, ExtArgs["result"]["pedido"]>
    composites: {}
  }

  type PedidoGetPayload<S extends boolean | null | undefined | PedidoDefaultArgs> = $Result.GetResult<Prisma.$PedidoPayload, S>

  type PedidoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PedidoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PedidoCountAggregateInputType | true
    }

  export interface PedidoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Pedido'], meta: { name: 'Pedido' } }
    /**
     * Find zero or one Pedido that matches the filter.
     * @param {PedidoFindUniqueArgs} args - Arguments to find a Pedido
     * @example
     * // Get one Pedido
     * const pedido = await prisma.pedido.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PedidoFindUniqueArgs>(args: SelectSubset<T, PedidoFindUniqueArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pedido that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PedidoFindUniqueOrThrowArgs} args - Arguments to find a Pedido
     * @example
     * // Get one Pedido
     * const pedido = await prisma.pedido.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PedidoFindUniqueOrThrowArgs>(args: SelectSubset<T, PedidoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pedido that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoFindFirstArgs} args - Arguments to find a Pedido
     * @example
     * // Get one Pedido
     * const pedido = await prisma.pedido.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PedidoFindFirstArgs>(args?: SelectSubset<T, PedidoFindFirstArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pedido that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoFindFirstOrThrowArgs} args - Arguments to find a Pedido
     * @example
     * // Get one Pedido
     * const pedido = await prisma.pedido.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PedidoFindFirstOrThrowArgs>(args?: SelectSubset<T, PedidoFindFirstOrThrowArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pedidos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pedidos
     * const pedidos = await prisma.pedido.findMany()
     * 
     * // Get first 10 Pedidos
     * const pedidos = await prisma.pedido.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pedidoWithIdOnly = await prisma.pedido.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PedidoFindManyArgs>(args?: SelectSubset<T, PedidoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pedido.
     * @param {PedidoCreateArgs} args - Arguments to create a Pedido.
     * @example
     * // Create one Pedido
     * const Pedido = await prisma.pedido.create({
     *   data: {
     *     // ... data to create a Pedido
     *   }
     * })
     * 
     */
    create<T extends PedidoCreateArgs>(args: SelectSubset<T, PedidoCreateArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pedidos.
     * @param {PedidoCreateManyArgs} args - Arguments to create many Pedidos.
     * @example
     * // Create many Pedidos
     * const pedido = await prisma.pedido.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PedidoCreateManyArgs>(args?: SelectSubset<T, PedidoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pedidos and returns the data saved in the database.
     * @param {PedidoCreateManyAndReturnArgs} args - Arguments to create many Pedidos.
     * @example
     * // Create many Pedidos
     * const pedido = await prisma.pedido.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pedidos and only return the `id`
     * const pedidoWithIdOnly = await prisma.pedido.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PedidoCreateManyAndReturnArgs>(args?: SelectSubset<T, PedidoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Pedido.
     * @param {PedidoDeleteArgs} args - Arguments to delete one Pedido.
     * @example
     * // Delete one Pedido
     * const Pedido = await prisma.pedido.delete({
     *   where: {
     *     // ... filter to delete one Pedido
     *   }
     * })
     * 
     */
    delete<T extends PedidoDeleteArgs>(args: SelectSubset<T, PedidoDeleteArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pedido.
     * @param {PedidoUpdateArgs} args - Arguments to update one Pedido.
     * @example
     * // Update one Pedido
     * const pedido = await prisma.pedido.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PedidoUpdateArgs>(args: SelectSubset<T, PedidoUpdateArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pedidos.
     * @param {PedidoDeleteManyArgs} args - Arguments to filter Pedidos to delete.
     * @example
     * // Delete a few Pedidos
     * const { count } = await prisma.pedido.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PedidoDeleteManyArgs>(args?: SelectSubset<T, PedidoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pedidos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pedidos
     * const pedido = await prisma.pedido.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PedidoUpdateManyArgs>(args: SelectSubset<T, PedidoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pedidos and returns the data updated in the database.
     * @param {PedidoUpdateManyAndReturnArgs} args - Arguments to update many Pedidos.
     * @example
     * // Update many Pedidos
     * const pedido = await prisma.pedido.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pedidos and only return the `id`
     * const pedidoWithIdOnly = await prisma.pedido.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PedidoUpdateManyAndReturnArgs>(args: SelectSubset<T, PedidoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Pedido.
     * @param {PedidoUpsertArgs} args - Arguments to update or create a Pedido.
     * @example
     * // Update or create a Pedido
     * const pedido = await prisma.pedido.upsert({
     *   create: {
     *     // ... data to create a Pedido
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pedido we want to update
     *   }
     * })
     */
    upsert<T extends PedidoUpsertArgs>(args: SelectSubset<T, PedidoUpsertArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pedidos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoCountArgs} args - Arguments to filter Pedidos to count.
     * @example
     * // Count the number of Pedidos
     * const count = await prisma.pedido.count({
     *   where: {
     *     // ... the filter for the Pedidos we want to count
     *   }
     * })
    **/
    count<T extends PedidoCountArgs>(
      args?: Subset<T, PedidoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PedidoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pedido.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PedidoAggregateArgs>(args: Subset<T, PedidoAggregateArgs>): Prisma.PrismaPromise<GetPedidoAggregateType<T>>

    /**
     * Group by Pedido.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PedidoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PedidoGroupByArgs['orderBy'] }
        : { orderBy?: PedidoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PedidoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPedidoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Pedido model
   */
  readonly fields: PedidoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Pedido.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PedidoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    endereco<T extends Pedido$enderecoArgs<ExtArgs> = {}>(args?: Subset<T, Pedido$enderecoArgs<ExtArgs>>): Prisma__EnderecoClient<$Result.GetResult<Prisma.$EnderecoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    itens<T extends Pedido$itensArgs<ExtArgs> = {}>(args?: Subset<T, Pedido$itensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPedidoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    pagamento<T extends Pedido$pagamentoArgs<ExtArgs> = {}>(args?: Subset<T, Pedido$pagamentoArgs<ExtArgs>>): Prisma__PagamentoClient<$Result.GetResult<Prisma.$PagamentoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    entrega<T extends Pedido$entregaArgs<ExtArgs> = {}>(args?: Subset<T, Pedido$entregaArgs<ExtArgs>>): Prisma__EntregaClient<$Result.GetResult<Prisma.$EntregaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Pedido model
   */
  interface PedidoFieldRefs {
    readonly id: FieldRef<"Pedido", 'Int'>
    readonly status: FieldRef<"Pedido", 'StatusPedido'>
    readonly tipo: FieldRef<"Pedido", 'TipoPedido'>
    readonly total: FieldRef<"Pedido", 'Decimal'>
    readonly criadoEm: FieldRef<"Pedido", 'DateTime'>
    readonly usuarioId: FieldRef<"Pedido", 'Int'>
    readonly enderecoId: FieldRef<"Pedido", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Pedido findUnique
   */
  export type PedidoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * Filter, which Pedido to fetch.
     */
    where: PedidoWhereUniqueInput
  }

  /**
   * Pedido findUniqueOrThrow
   */
  export type PedidoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * Filter, which Pedido to fetch.
     */
    where: PedidoWhereUniqueInput
  }

  /**
   * Pedido findFirst
   */
  export type PedidoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * Filter, which Pedido to fetch.
     */
    where?: PedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pedidos to fetch.
     */
    orderBy?: PedidoOrderByWithRelationInput | PedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pedidos.
     */
    cursor?: PedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pedidos.
     */
    distinct?: PedidoScalarFieldEnum | PedidoScalarFieldEnum[]
  }

  /**
   * Pedido findFirstOrThrow
   */
  export type PedidoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * Filter, which Pedido to fetch.
     */
    where?: PedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pedidos to fetch.
     */
    orderBy?: PedidoOrderByWithRelationInput | PedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pedidos.
     */
    cursor?: PedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pedidos.
     */
    distinct?: PedidoScalarFieldEnum | PedidoScalarFieldEnum[]
  }

  /**
   * Pedido findMany
   */
  export type PedidoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * Filter, which Pedidos to fetch.
     */
    where?: PedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pedidos to fetch.
     */
    orderBy?: PedidoOrderByWithRelationInput | PedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pedidos.
     */
    cursor?: PedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pedidos.
     */
    skip?: number
    distinct?: PedidoScalarFieldEnum | PedidoScalarFieldEnum[]
  }

  /**
   * Pedido create
   */
  export type PedidoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * The data needed to create a Pedido.
     */
    data: XOR<PedidoCreateInput, PedidoUncheckedCreateInput>
  }

  /**
   * Pedido createMany
   */
  export type PedidoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pedidos.
     */
    data: PedidoCreateManyInput | PedidoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Pedido createManyAndReturn
   */
  export type PedidoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * The data used to create many Pedidos.
     */
    data: PedidoCreateManyInput | PedidoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Pedido update
   */
  export type PedidoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * The data needed to update a Pedido.
     */
    data: XOR<PedidoUpdateInput, PedidoUncheckedUpdateInput>
    /**
     * Choose, which Pedido to update.
     */
    where: PedidoWhereUniqueInput
  }

  /**
   * Pedido updateMany
   */
  export type PedidoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pedidos.
     */
    data: XOR<PedidoUpdateManyMutationInput, PedidoUncheckedUpdateManyInput>
    /**
     * Filter which Pedidos to update
     */
    where?: PedidoWhereInput
    /**
     * Limit how many Pedidos to update.
     */
    limit?: number
  }

  /**
   * Pedido updateManyAndReturn
   */
  export type PedidoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * The data used to update Pedidos.
     */
    data: XOR<PedidoUpdateManyMutationInput, PedidoUncheckedUpdateManyInput>
    /**
     * Filter which Pedidos to update
     */
    where?: PedidoWhereInput
    /**
     * Limit how many Pedidos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Pedido upsert
   */
  export type PedidoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * The filter to search for the Pedido to update in case it exists.
     */
    where: PedidoWhereUniqueInput
    /**
     * In case the Pedido found by the `where` argument doesn't exist, create a new Pedido with this data.
     */
    create: XOR<PedidoCreateInput, PedidoUncheckedCreateInput>
    /**
     * In case the Pedido was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PedidoUpdateInput, PedidoUncheckedUpdateInput>
  }

  /**
   * Pedido delete
   */
  export type PedidoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * Filter which Pedido to delete.
     */
    where: PedidoWhereUniqueInput
  }

  /**
   * Pedido deleteMany
   */
  export type PedidoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pedidos to delete
     */
    where?: PedidoWhereInput
    /**
     * Limit how many Pedidos to delete.
     */
    limit?: number
  }

  /**
   * Pedido.endereco
   */
  export type Pedido$enderecoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Endereco
     */
    select?: EnderecoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Endereco
     */
    omit?: EnderecoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnderecoInclude<ExtArgs> | null
    where?: EnderecoWhereInput
  }

  /**
   * Pedido.itens
   */
  export type Pedido$itensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemPedido
     */
    select?: ItemPedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemPedido
     */
    omit?: ItemPedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemPedidoInclude<ExtArgs> | null
    where?: ItemPedidoWhereInput
    orderBy?: ItemPedidoOrderByWithRelationInput | ItemPedidoOrderByWithRelationInput[]
    cursor?: ItemPedidoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ItemPedidoScalarFieldEnum | ItemPedidoScalarFieldEnum[]
  }

  /**
   * Pedido.pagamento
   */
  export type Pedido$pagamentoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pagamento
     */
    select?: PagamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pagamento
     */
    omit?: PagamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagamentoInclude<ExtArgs> | null
    where?: PagamentoWhereInput
  }

  /**
   * Pedido.entrega
   */
  export type Pedido$entregaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entrega
     */
    select?: EntregaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entrega
     */
    omit?: EntregaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntregaInclude<ExtArgs> | null
    where?: EntregaWhereInput
  }

  /**
   * Pedido without action
   */
  export type PedidoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
  }


  /**
   * Model ItemPedido
   */

  export type AggregateItemPedido = {
    _count: ItemPedidoCountAggregateOutputType | null
    _avg: ItemPedidoAvgAggregateOutputType | null
    _sum: ItemPedidoSumAggregateOutputType | null
    _min: ItemPedidoMinAggregateOutputType | null
    _max: ItemPedidoMaxAggregateOutputType | null
  }

  export type ItemPedidoAvgAggregateOutputType = {
    id: number | null
    quantidade: number | null
    precoUnitario: Decimal | null
    pedidoId: number | null
    produtoId: number | null
  }

  export type ItemPedidoSumAggregateOutputType = {
    id: number | null
    quantidade: number | null
    precoUnitario: Decimal | null
    pedidoId: number | null
    produtoId: number | null
  }

  export type ItemPedidoMinAggregateOutputType = {
    id: number | null
    quantidade: number | null
    precoUnitario: Decimal | null
    pedidoId: number | null
    produtoId: number | null
  }

  export type ItemPedidoMaxAggregateOutputType = {
    id: number | null
    quantidade: number | null
    precoUnitario: Decimal | null
    pedidoId: number | null
    produtoId: number | null
  }

  export type ItemPedidoCountAggregateOutputType = {
    id: number
    quantidade: number
    precoUnitario: number
    pedidoId: number
    produtoId: number
    _all: number
  }


  export type ItemPedidoAvgAggregateInputType = {
    id?: true
    quantidade?: true
    precoUnitario?: true
    pedidoId?: true
    produtoId?: true
  }

  export type ItemPedidoSumAggregateInputType = {
    id?: true
    quantidade?: true
    precoUnitario?: true
    pedidoId?: true
    produtoId?: true
  }

  export type ItemPedidoMinAggregateInputType = {
    id?: true
    quantidade?: true
    precoUnitario?: true
    pedidoId?: true
    produtoId?: true
  }

  export type ItemPedidoMaxAggregateInputType = {
    id?: true
    quantidade?: true
    precoUnitario?: true
    pedidoId?: true
    produtoId?: true
  }

  export type ItemPedidoCountAggregateInputType = {
    id?: true
    quantidade?: true
    precoUnitario?: true
    pedidoId?: true
    produtoId?: true
    _all?: true
  }

  export type ItemPedidoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ItemPedido to aggregate.
     */
    where?: ItemPedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemPedidos to fetch.
     */
    orderBy?: ItemPedidoOrderByWithRelationInput | ItemPedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ItemPedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemPedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemPedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ItemPedidos
    **/
    _count?: true | ItemPedidoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ItemPedidoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ItemPedidoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ItemPedidoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ItemPedidoMaxAggregateInputType
  }

  export type GetItemPedidoAggregateType<T extends ItemPedidoAggregateArgs> = {
        [P in keyof T & keyof AggregateItemPedido]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateItemPedido[P]>
      : GetScalarType<T[P], AggregateItemPedido[P]>
  }




  export type ItemPedidoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemPedidoWhereInput
    orderBy?: ItemPedidoOrderByWithAggregationInput | ItemPedidoOrderByWithAggregationInput[]
    by: ItemPedidoScalarFieldEnum[] | ItemPedidoScalarFieldEnum
    having?: ItemPedidoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ItemPedidoCountAggregateInputType | true
    _avg?: ItemPedidoAvgAggregateInputType
    _sum?: ItemPedidoSumAggregateInputType
    _min?: ItemPedidoMinAggregateInputType
    _max?: ItemPedidoMaxAggregateInputType
  }

  export type ItemPedidoGroupByOutputType = {
    id: number
    quantidade: number
    precoUnitario: Decimal
    pedidoId: number
    produtoId: number
    _count: ItemPedidoCountAggregateOutputType | null
    _avg: ItemPedidoAvgAggregateOutputType | null
    _sum: ItemPedidoSumAggregateOutputType | null
    _min: ItemPedidoMinAggregateOutputType | null
    _max: ItemPedidoMaxAggregateOutputType | null
  }

  type GetItemPedidoGroupByPayload<T extends ItemPedidoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ItemPedidoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ItemPedidoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ItemPedidoGroupByOutputType[P]>
            : GetScalarType<T[P], ItemPedidoGroupByOutputType[P]>
        }
      >
    >


  export type ItemPedidoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quantidade?: boolean
    precoUnitario?: boolean
    pedidoId?: boolean
    produtoId?: boolean
    pedido?: boolean | PedidoDefaultArgs<ExtArgs>
    produto?: boolean | ProdutoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["itemPedido"]>

  export type ItemPedidoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quantidade?: boolean
    precoUnitario?: boolean
    pedidoId?: boolean
    produtoId?: boolean
    pedido?: boolean | PedidoDefaultArgs<ExtArgs>
    produto?: boolean | ProdutoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["itemPedido"]>

  export type ItemPedidoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quantidade?: boolean
    precoUnitario?: boolean
    pedidoId?: boolean
    produtoId?: boolean
    pedido?: boolean | PedidoDefaultArgs<ExtArgs>
    produto?: boolean | ProdutoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["itemPedido"]>

  export type ItemPedidoSelectScalar = {
    id?: boolean
    quantidade?: boolean
    precoUnitario?: boolean
    pedidoId?: boolean
    produtoId?: boolean
  }

  export type ItemPedidoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "quantidade" | "precoUnitario" | "pedidoId" | "produtoId", ExtArgs["result"]["itemPedido"]>
  export type ItemPedidoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pedido?: boolean | PedidoDefaultArgs<ExtArgs>
    produto?: boolean | ProdutoDefaultArgs<ExtArgs>
  }
  export type ItemPedidoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pedido?: boolean | PedidoDefaultArgs<ExtArgs>
    produto?: boolean | ProdutoDefaultArgs<ExtArgs>
  }
  export type ItemPedidoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pedido?: boolean | PedidoDefaultArgs<ExtArgs>
    produto?: boolean | ProdutoDefaultArgs<ExtArgs>
  }

  export type $ItemPedidoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ItemPedido"
    objects: {
      pedido: Prisma.$PedidoPayload<ExtArgs>
      produto: Prisma.$ProdutoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      quantidade: number
      precoUnitario: Prisma.Decimal
      pedidoId: number
      produtoId: number
    }, ExtArgs["result"]["itemPedido"]>
    composites: {}
  }

  type ItemPedidoGetPayload<S extends boolean | null | undefined | ItemPedidoDefaultArgs> = $Result.GetResult<Prisma.$ItemPedidoPayload, S>

  type ItemPedidoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ItemPedidoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ItemPedidoCountAggregateInputType | true
    }

  export interface ItemPedidoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ItemPedido'], meta: { name: 'ItemPedido' } }
    /**
     * Find zero or one ItemPedido that matches the filter.
     * @param {ItemPedidoFindUniqueArgs} args - Arguments to find a ItemPedido
     * @example
     * // Get one ItemPedido
     * const itemPedido = await prisma.itemPedido.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ItemPedidoFindUniqueArgs>(args: SelectSubset<T, ItemPedidoFindUniqueArgs<ExtArgs>>): Prisma__ItemPedidoClient<$Result.GetResult<Prisma.$ItemPedidoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ItemPedido that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ItemPedidoFindUniqueOrThrowArgs} args - Arguments to find a ItemPedido
     * @example
     * // Get one ItemPedido
     * const itemPedido = await prisma.itemPedido.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ItemPedidoFindUniqueOrThrowArgs>(args: SelectSubset<T, ItemPedidoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ItemPedidoClient<$Result.GetResult<Prisma.$ItemPedidoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ItemPedido that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemPedidoFindFirstArgs} args - Arguments to find a ItemPedido
     * @example
     * // Get one ItemPedido
     * const itemPedido = await prisma.itemPedido.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ItemPedidoFindFirstArgs>(args?: SelectSubset<T, ItemPedidoFindFirstArgs<ExtArgs>>): Prisma__ItemPedidoClient<$Result.GetResult<Prisma.$ItemPedidoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ItemPedido that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemPedidoFindFirstOrThrowArgs} args - Arguments to find a ItemPedido
     * @example
     * // Get one ItemPedido
     * const itemPedido = await prisma.itemPedido.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ItemPedidoFindFirstOrThrowArgs>(args?: SelectSubset<T, ItemPedidoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ItemPedidoClient<$Result.GetResult<Prisma.$ItemPedidoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ItemPedidos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemPedidoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ItemPedidos
     * const itemPedidos = await prisma.itemPedido.findMany()
     * 
     * // Get first 10 ItemPedidos
     * const itemPedidos = await prisma.itemPedido.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const itemPedidoWithIdOnly = await prisma.itemPedido.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ItemPedidoFindManyArgs>(args?: SelectSubset<T, ItemPedidoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPedidoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ItemPedido.
     * @param {ItemPedidoCreateArgs} args - Arguments to create a ItemPedido.
     * @example
     * // Create one ItemPedido
     * const ItemPedido = await prisma.itemPedido.create({
     *   data: {
     *     // ... data to create a ItemPedido
     *   }
     * })
     * 
     */
    create<T extends ItemPedidoCreateArgs>(args: SelectSubset<T, ItemPedidoCreateArgs<ExtArgs>>): Prisma__ItemPedidoClient<$Result.GetResult<Prisma.$ItemPedidoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ItemPedidos.
     * @param {ItemPedidoCreateManyArgs} args - Arguments to create many ItemPedidos.
     * @example
     * // Create many ItemPedidos
     * const itemPedido = await prisma.itemPedido.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ItemPedidoCreateManyArgs>(args?: SelectSubset<T, ItemPedidoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ItemPedidos and returns the data saved in the database.
     * @param {ItemPedidoCreateManyAndReturnArgs} args - Arguments to create many ItemPedidos.
     * @example
     * // Create many ItemPedidos
     * const itemPedido = await prisma.itemPedido.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ItemPedidos and only return the `id`
     * const itemPedidoWithIdOnly = await prisma.itemPedido.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ItemPedidoCreateManyAndReturnArgs>(args?: SelectSubset<T, ItemPedidoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPedidoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ItemPedido.
     * @param {ItemPedidoDeleteArgs} args - Arguments to delete one ItemPedido.
     * @example
     * // Delete one ItemPedido
     * const ItemPedido = await prisma.itemPedido.delete({
     *   where: {
     *     // ... filter to delete one ItemPedido
     *   }
     * })
     * 
     */
    delete<T extends ItemPedidoDeleteArgs>(args: SelectSubset<T, ItemPedidoDeleteArgs<ExtArgs>>): Prisma__ItemPedidoClient<$Result.GetResult<Prisma.$ItemPedidoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ItemPedido.
     * @param {ItemPedidoUpdateArgs} args - Arguments to update one ItemPedido.
     * @example
     * // Update one ItemPedido
     * const itemPedido = await prisma.itemPedido.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ItemPedidoUpdateArgs>(args: SelectSubset<T, ItemPedidoUpdateArgs<ExtArgs>>): Prisma__ItemPedidoClient<$Result.GetResult<Prisma.$ItemPedidoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ItemPedidos.
     * @param {ItemPedidoDeleteManyArgs} args - Arguments to filter ItemPedidos to delete.
     * @example
     * // Delete a few ItemPedidos
     * const { count } = await prisma.itemPedido.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ItemPedidoDeleteManyArgs>(args?: SelectSubset<T, ItemPedidoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ItemPedidos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemPedidoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ItemPedidos
     * const itemPedido = await prisma.itemPedido.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ItemPedidoUpdateManyArgs>(args: SelectSubset<T, ItemPedidoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ItemPedidos and returns the data updated in the database.
     * @param {ItemPedidoUpdateManyAndReturnArgs} args - Arguments to update many ItemPedidos.
     * @example
     * // Update many ItemPedidos
     * const itemPedido = await prisma.itemPedido.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ItemPedidos and only return the `id`
     * const itemPedidoWithIdOnly = await prisma.itemPedido.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ItemPedidoUpdateManyAndReturnArgs>(args: SelectSubset<T, ItemPedidoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPedidoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ItemPedido.
     * @param {ItemPedidoUpsertArgs} args - Arguments to update or create a ItemPedido.
     * @example
     * // Update or create a ItemPedido
     * const itemPedido = await prisma.itemPedido.upsert({
     *   create: {
     *     // ... data to create a ItemPedido
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ItemPedido we want to update
     *   }
     * })
     */
    upsert<T extends ItemPedidoUpsertArgs>(args: SelectSubset<T, ItemPedidoUpsertArgs<ExtArgs>>): Prisma__ItemPedidoClient<$Result.GetResult<Prisma.$ItemPedidoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ItemPedidos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemPedidoCountArgs} args - Arguments to filter ItemPedidos to count.
     * @example
     * // Count the number of ItemPedidos
     * const count = await prisma.itemPedido.count({
     *   where: {
     *     // ... the filter for the ItemPedidos we want to count
     *   }
     * })
    **/
    count<T extends ItemPedidoCountArgs>(
      args?: Subset<T, ItemPedidoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ItemPedidoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ItemPedido.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemPedidoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ItemPedidoAggregateArgs>(args: Subset<T, ItemPedidoAggregateArgs>): Prisma.PrismaPromise<GetItemPedidoAggregateType<T>>

    /**
     * Group by ItemPedido.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemPedidoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ItemPedidoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ItemPedidoGroupByArgs['orderBy'] }
        : { orderBy?: ItemPedidoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ItemPedidoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetItemPedidoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ItemPedido model
   */
  readonly fields: ItemPedidoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ItemPedido.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ItemPedidoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pedido<T extends PedidoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PedidoDefaultArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    produto<T extends ProdutoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProdutoDefaultArgs<ExtArgs>>): Prisma__ProdutoClient<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ItemPedido model
   */
  interface ItemPedidoFieldRefs {
    readonly id: FieldRef<"ItemPedido", 'Int'>
    readonly quantidade: FieldRef<"ItemPedido", 'Int'>
    readonly precoUnitario: FieldRef<"ItemPedido", 'Decimal'>
    readonly pedidoId: FieldRef<"ItemPedido", 'Int'>
    readonly produtoId: FieldRef<"ItemPedido", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ItemPedido findUnique
   */
  export type ItemPedidoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemPedido
     */
    select?: ItemPedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemPedido
     */
    omit?: ItemPedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemPedidoInclude<ExtArgs> | null
    /**
     * Filter, which ItemPedido to fetch.
     */
    where: ItemPedidoWhereUniqueInput
  }

  /**
   * ItemPedido findUniqueOrThrow
   */
  export type ItemPedidoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemPedido
     */
    select?: ItemPedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemPedido
     */
    omit?: ItemPedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemPedidoInclude<ExtArgs> | null
    /**
     * Filter, which ItemPedido to fetch.
     */
    where: ItemPedidoWhereUniqueInput
  }

  /**
   * ItemPedido findFirst
   */
  export type ItemPedidoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemPedido
     */
    select?: ItemPedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemPedido
     */
    omit?: ItemPedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemPedidoInclude<ExtArgs> | null
    /**
     * Filter, which ItemPedido to fetch.
     */
    where?: ItemPedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemPedidos to fetch.
     */
    orderBy?: ItemPedidoOrderByWithRelationInput | ItemPedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ItemPedidos.
     */
    cursor?: ItemPedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemPedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemPedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ItemPedidos.
     */
    distinct?: ItemPedidoScalarFieldEnum | ItemPedidoScalarFieldEnum[]
  }

  /**
   * ItemPedido findFirstOrThrow
   */
  export type ItemPedidoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemPedido
     */
    select?: ItemPedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemPedido
     */
    omit?: ItemPedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemPedidoInclude<ExtArgs> | null
    /**
     * Filter, which ItemPedido to fetch.
     */
    where?: ItemPedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemPedidos to fetch.
     */
    orderBy?: ItemPedidoOrderByWithRelationInput | ItemPedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ItemPedidos.
     */
    cursor?: ItemPedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemPedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemPedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ItemPedidos.
     */
    distinct?: ItemPedidoScalarFieldEnum | ItemPedidoScalarFieldEnum[]
  }

  /**
   * ItemPedido findMany
   */
  export type ItemPedidoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemPedido
     */
    select?: ItemPedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemPedido
     */
    omit?: ItemPedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemPedidoInclude<ExtArgs> | null
    /**
     * Filter, which ItemPedidos to fetch.
     */
    where?: ItemPedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemPedidos to fetch.
     */
    orderBy?: ItemPedidoOrderByWithRelationInput | ItemPedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ItemPedidos.
     */
    cursor?: ItemPedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemPedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemPedidos.
     */
    skip?: number
    distinct?: ItemPedidoScalarFieldEnum | ItemPedidoScalarFieldEnum[]
  }

  /**
   * ItemPedido create
   */
  export type ItemPedidoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemPedido
     */
    select?: ItemPedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemPedido
     */
    omit?: ItemPedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemPedidoInclude<ExtArgs> | null
    /**
     * The data needed to create a ItemPedido.
     */
    data: XOR<ItemPedidoCreateInput, ItemPedidoUncheckedCreateInput>
  }

  /**
   * ItemPedido createMany
   */
  export type ItemPedidoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ItemPedidos.
     */
    data: ItemPedidoCreateManyInput | ItemPedidoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ItemPedido createManyAndReturn
   */
  export type ItemPedidoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemPedido
     */
    select?: ItemPedidoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ItemPedido
     */
    omit?: ItemPedidoOmit<ExtArgs> | null
    /**
     * The data used to create many ItemPedidos.
     */
    data: ItemPedidoCreateManyInput | ItemPedidoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemPedidoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ItemPedido update
   */
  export type ItemPedidoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemPedido
     */
    select?: ItemPedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemPedido
     */
    omit?: ItemPedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemPedidoInclude<ExtArgs> | null
    /**
     * The data needed to update a ItemPedido.
     */
    data: XOR<ItemPedidoUpdateInput, ItemPedidoUncheckedUpdateInput>
    /**
     * Choose, which ItemPedido to update.
     */
    where: ItemPedidoWhereUniqueInput
  }

  /**
   * ItemPedido updateMany
   */
  export type ItemPedidoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ItemPedidos.
     */
    data: XOR<ItemPedidoUpdateManyMutationInput, ItemPedidoUncheckedUpdateManyInput>
    /**
     * Filter which ItemPedidos to update
     */
    where?: ItemPedidoWhereInput
    /**
     * Limit how many ItemPedidos to update.
     */
    limit?: number
  }

  /**
   * ItemPedido updateManyAndReturn
   */
  export type ItemPedidoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemPedido
     */
    select?: ItemPedidoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ItemPedido
     */
    omit?: ItemPedidoOmit<ExtArgs> | null
    /**
     * The data used to update ItemPedidos.
     */
    data: XOR<ItemPedidoUpdateManyMutationInput, ItemPedidoUncheckedUpdateManyInput>
    /**
     * Filter which ItemPedidos to update
     */
    where?: ItemPedidoWhereInput
    /**
     * Limit how many ItemPedidos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemPedidoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ItemPedido upsert
   */
  export type ItemPedidoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemPedido
     */
    select?: ItemPedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemPedido
     */
    omit?: ItemPedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemPedidoInclude<ExtArgs> | null
    /**
     * The filter to search for the ItemPedido to update in case it exists.
     */
    where: ItemPedidoWhereUniqueInput
    /**
     * In case the ItemPedido found by the `where` argument doesn't exist, create a new ItemPedido with this data.
     */
    create: XOR<ItemPedidoCreateInput, ItemPedidoUncheckedCreateInput>
    /**
     * In case the ItemPedido was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ItemPedidoUpdateInput, ItemPedidoUncheckedUpdateInput>
  }

  /**
   * ItemPedido delete
   */
  export type ItemPedidoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemPedido
     */
    select?: ItemPedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemPedido
     */
    omit?: ItemPedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemPedidoInclude<ExtArgs> | null
    /**
     * Filter which ItemPedido to delete.
     */
    where: ItemPedidoWhereUniqueInput
  }

  /**
   * ItemPedido deleteMany
   */
  export type ItemPedidoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ItemPedidos to delete
     */
    where?: ItemPedidoWhereInput
    /**
     * Limit how many ItemPedidos to delete.
     */
    limit?: number
  }

  /**
   * ItemPedido without action
   */
  export type ItemPedidoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemPedido
     */
    select?: ItemPedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemPedido
     */
    omit?: ItemPedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemPedidoInclude<ExtArgs> | null
  }


  /**
   * Model Pagamento
   */

  export type AggregatePagamento = {
    _count: PagamentoCountAggregateOutputType | null
    _avg: PagamentoAvgAggregateOutputType | null
    _sum: PagamentoSumAggregateOutputType | null
    _min: PagamentoMinAggregateOutputType | null
    _max: PagamentoMaxAggregateOutputType | null
  }

  export type PagamentoAvgAggregateOutputType = {
    id: number | null
    valor: Decimal | null
    pedidoId: number | null
  }

  export type PagamentoSumAggregateOutputType = {
    id: number | null
    valor: Decimal | null
    pedidoId: number | null
  }

  export type PagamentoMinAggregateOutputType = {
    id: number | null
    forma: $Enums.FormaPagamento | null
    status: $Enums.StatusPagamento | null
    valor: Decimal | null
    externalId: string | null
    pedidoId: number | null
  }

  export type PagamentoMaxAggregateOutputType = {
    id: number | null
    forma: $Enums.FormaPagamento | null
    status: $Enums.StatusPagamento | null
    valor: Decimal | null
    externalId: string | null
    pedidoId: number | null
  }

  export type PagamentoCountAggregateOutputType = {
    id: number
    forma: number
    status: number
    valor: number
    externalId: number
    pedidoId: number
    _all: number
  }


  export type PagamentoAvgAggregateInputType = {
    id?: true
    valor?: true
    pedidoId?: true
  }

  export type PagamentoSumAggregateInputType = {
    id?: true
    valor?: true
    pedidoId?: true
  }

  export type PagamentoMinAggregateInputType = {
    id?: true
    forma?: true
    status?: true
    valor?: true
    externalId?: true
    pedidoId?: true
  }

  export type PagamentoMaxAggregateInputType = {
    id?: true
    forma?: true
    status?: true
    valor?: true
    externalId?: true
    pedidoId?: true
  }

  export type PagamentoCountAggregateInputType = {
    id?: true
    forma?: true
    status?: true
    valor?: true
    externalId?: true
    pedidoId?: true
    _all?: true
  }

  export type PagamentoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pagamento to aggregate.
     */
    where?: PagamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pagamentos to fetch.
     */
    orderBy?: PagamentoOrderByWithRelationInput | PagamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PagamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pagamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pagamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pagamentos
    **/
    _count?: true | PagamentoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PagamentoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PagamentoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PagamentoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PagamentoMaxAggregateInputType
  }

  export type GetPagamentoAggregateType<T extends PagamentoAggregateArgs> = {
        [P in keyof T & keyof AggregatePagamento]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePagamento[P]>
      : GetScalarType<T[P], AggregatePagamento[P]>
  }




  export type PagamentoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PagamentoWhereInput
    orderBy?: PagamentoOrderByWithAggregationInput | PagamentoOrderByWithAggregationInput[]
    by: PagamentoScalarFieldEnum[] | PagamentoScalarFieldEnum
    having?: PagamentoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PagamentoCountAggregateInputType | true
    _avg?: PagamentoAvgAggregateInputType
    _sum?: PagamentoSumAggregateInputType
    _min?: PagamentoMinAggregateInputType
    _max?: PagamentoMaxAggregateInputType
  }

  export type PagamentoGroupByOutputType = {
    id: number
    forma: $Enums.FormaPagamento
    status: $Enums.StatusPagamento
    valor: Decimal
    externalId: string | null
    pedidoId: number
    _count: PagamentoCountAggregateOutputType | null
    _avg: PagamentoAvgAggregateOutputType | null
    _sum: PagamentoSumAggregateOutputType | null
    _min: PagamentoMinAggregateOutputType | null
    _max: PagamentoMaxAggregateOutputType | null
  }

  type GetPagamentoGroupByPayload<T extends PagamentoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PagamentoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PagamentoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PagamentoGroupByOutputType[P]>
            : GetScalarType<T[P], PagamentoGroupByOutputType[P]>
        }
      >
    >


  export type PagamentoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    forma?: boolean
    status?: boolean
    valor?: boolean
    externalId?: boolean
    pedidoId?: boolean
    pedido?: boolean | PedidoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pagamento"]>

  export type PagamentoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    forma?: boolean
    status?: boolean
    valor?: boolean
    externalId?: boolean
    pedidoId?: boolean
    pedido?: boolean | PedidoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pagamento"]>

  export type PagamentoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    forma?: boolean
    status?: boolean
    valor?: boolean
    externalId?: boolean
    pedidoId?: boolean
    pedido?: boolean | PedidoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pagamento"]>

  export type PagamentoSelectScalar = {
    id?: boolean
    forma?: boolean
    status?: boolean
    valor?: boolean
    externalId?: boolean
    pedidoId?: boolean
  }

  export type PagamentoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "forma" | "status" | "valor" | "externalId" | "pedidoId", ExtArgs["result"]["pagamento"]>
  export type PagamentoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pedido?: boolean | PedidoDefaultArgs<ExtArgs>
  }
  export type PagamentoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pedido?: boolean | PedidoDefaultArgs<ExtArgs>
  }
  export type PagamentoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pedido?: boolean | PedidoDefaultArgs<ExtArgs>
  }

  export type $PagamentoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Pagamento"
    objects: {
      pedido: Prisma.$PedidoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      forma: $Enums.FormaPagamento
      status: $Enums.StatusPagamento
      valor: Prisma.Decimal
      externalId: string | null
      pedidoId: number
    }, ExtArgs["result"]["pagamento"]>
    composites: {}
  }

  type PagamentoGetPayload<S extends boolean | null | undefined | PagamentoDefaultArgs> = $Result.GetResult<Prisma.$PagamentoPayload, S>

  type PagamentoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PagamentoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PagamentoCountAggregateInputType | true
    }

  export interface PagamentoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Pagamento'], meta: { name: 'Pagamento' } }
    /**
     * Find zero or one Pagamento that matches the filter.
     * @param {PagamentoFindUniqueArgs} args - Arguments to find a Pagamento
     * @example
     * // Get one Pagamento
     * const pagamento = await prisma.pagamento.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PagamentoFindUniqueArgs>(args: SelectSubset<T, PagamentoFindUniqueArgs<ExtArgs>>): Prisma__PagamentoClient<$Result.GetResult<Prisma.$PagamentoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pagamento that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PagamentoFindUniqueOrThrowArgs} args - Arguments to find a Pagamento
     * @example
     * // Get one Pagamento
     * const pagamento = await prisma.pagamento.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PagamentoFindUniqueOrThrowArgs>(args: SelectSubset<T, PagamentoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PagamentoClient<$Result.GetResult<Prisma.$PagamentoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pagamento that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagamentoFindFirstArgs} args - Arguments to find a Pagamento
     * @example
     * // Get one Pagamento
     * const pagamento = await prisma.pagamento.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PagamentoFindFirstArgs>(args?: SelectSubset<T, PagamentoFindFirstArgs<ExtArgs>>): Prisma__PagamentoClient<$Result.GetResult<Prisma.$PagamentoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pagamento that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagamentoFindFirstOrThrowArgs} args - Arguments to find a Pagamento
     * @example
     * // Get one Pagamento
     * const pagamento = await prisma.pagamento.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PagamentoFindFirstOrThrowArgs>(args?: SelectSubset<T, PagamentoFindFirstOrThrowArgs<ExtArgs>>): Prisma__PagamentoClient<$Result.GetResult<Prisma.$PagamentoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pagamentos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagamentoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pagamentos
     * const pagamentos = await prisma.pagamento.findMany()
     * 
     * // Get first 10 Pagamentos
     * const pagamentos = await prisma.pagamento.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pagamentoWithIdOnly = await prisma.pagamento.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PagamentoFindManyArgs>(args?: SelectSubset<T, PagamentoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PagamentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pagamento.
     * @param {PagamentoCreateArgs} args - Arguments to create a Pagamento.
     * @example
     * // Create one Pagamento
     * const Pagamento = await prisma.pagamento.create({
     *   data: {
     *     // ... data to create a Pagamento
     *   }
     * })
     * 
     */
    create<T extends PagamentoCreateArgs>(args: SelectSubset<T, PagamentoCreateArgs<ExtArgs>>): Prisma__PagamentoClient<$Result.GetResult<Prisma.$PagamentoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pagamentos.
     * @param {PagamentoCreateManyArgs} args - Arguments to create many Pagamentos.
     * @example
     * // Create many Pagamentos
     * const pagamento = await prisma.pagamento.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PagamentoCreateManyArgs>(args?: SelectSubset<T, PagamentoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pagamentos and returns the data saved in the database.
     * @param {PagamentoCreateManyAndReturnArgs} args - Arguments to create many Pagamentos.
     * @example
     * // Create many Pagamentos
     * const pagamento = await prisma.pagamento.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pagamentos and only return the `id`
     * const pagamentoWithIdOnly = await prisma.pagamento.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PagamentoCreateManyAndReturnArgs>(args?: SelectSubset<T, PagamentoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PagamentoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Pagamento.
     * @param {PagamentoDeleteArgs} args - Arguments to delete one Pagamento.
     * @example
     * // Delete one Pagamento
     * const Pagamento = await prisma.pagamento.delete({
     *   where: {
     *     // ... filter to delete one Pagamento
     *   }
     * })
     * 
     */
    delete<T extends PagamentoDeleteArgs>(args: SelectSubset<T, PagamentoDeleteArgs<ExtArgs>>): Prisma__PagamentoClient<$Result.GetResult<Prisma.$PagamentoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pagamento.
     * @param {PagamentoUpdateArgs} args - Arguments to update one Pagamento.
     * @example
     * // Update one Pagamento
     * const pagamento = await prisma.pagamento.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PagamentoUpdateArgs>(args: SelectSubset<T, PagamentoUpdateArgs<ExtArgs>>): Prisma__PagamentoClient<$Result.GetResult<Prisma.$PagamentoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pagamentos.
     * @param {PagamentoDeleteManyArgs} args - Arguments to filter Pagamentos to delete.
     * @example
     * // Delete a few Pagamentos
     * const { count } = await prisma.pagamento.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PagamentoDeleteManyArgs>(args?: SelectSubset<T, PagamentoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pagamentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagamentoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pagamentos
     * const pagamento = await prisma.pagamento.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PagamentoUpdateManyArgs>(args: SelectSubset<T, PagamentoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pagamentos and returns the data updated in the database.
     * @param {PagamentoUpdateManyAndReturnArgs} args - Arguments to update many Pagamentos.
     * @example
     * // Update many Pagamentos
     * const pagamento = await prisma.pagamento.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pagamentos and only return the `id`
     * const pagamentoWithIdOnly = await prisma.pagamento.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PagamentoUpdateManyAndReturnArgs>(args: SelectSubset<T, PagamentoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PagamentoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Pagamento.
     * @param {PagamentoUpsertArgs} args - Arguments to update or create a Pagamento.
     * @example
     * // Update or create a Pagamento
     * const pagamento = await prisma.pagamento.upsert({
     *   create: {
     *     // ... data to create a Pagamento
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pagamento we want to update
     *   }
     * })
     */
    upsert<T extends PagamentoUpsertArgs>(args: SelectSubset<T, PagamentoUpsertArgs<ExtArgs>>): Prisma__PagamentoClient<$Result.GetResult<Prisma.$PagamentoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pagamentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagamentoCountArgs} args - Arguments to filter Pagamentos to count.
     * @example
     * // Count the number of Pagamentos
     * const count = await prisma.pagamento.count({
     *   where: {
     *     // ... the filter for the Pagamentos we want to count
     *   }
     * })
    **/
    count<T extends PagamentoCountArgs>(
      args?: Subset<T, PagamentoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PagamentoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pagamento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagamentoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PagamentoAggregateArgs>(args: Subset<T, PagamentoAggregateArgs>): Prisma.PrismaPromise<GetPagamentoAggregateType<T>>

    /**
     * Group by Pagamento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagamentoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PagamentoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PagamentoGroupByArgs['orderBy'] }
        : { orderBy?: PagamentoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PagamentoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPagamentoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Pagamento model
   */
  readonly fields: PagamentoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Pagamento.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PagamentoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pedido<T extends PedidoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PedidoDefaultArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Pagamento model
   */
  interface PagamentoFieldRefs {
    readonly id: FieldRef<"Pagamento", 'Int'>
    readonly forma: FieldRef<"Pagamento", 'FormaPagamento'>
    readonly status: FieldRef<"Pagamento", 'StatusPagamento'>
    readonly valor: FieldRef<"Pagamento", 'Decimal'>
    readonly externalId: FieldRef<"Pagamento", 'String'>
    readonly pedidoId: FieldRef<"Pagamento", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Pagamento findUnique
   */
  export type PagamentoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pagamento
     */
    select?: PagamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pagamento
     */
    omit?: PagamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagamentoInclude<ExtArgs> | null
    /**
     * Filter, which Pagamento to fetch.
     */
    where: PagamentoWhereUniqueInput
  }

  /**
   * Pagamento findUniqueOrThrow
   */
  export type PagamentoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pagamento
     */
    select?: PagamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pagamento
     */
    omit?: PagamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagamentoInclude<ExtArgs> | null
    /**
     * Filter, which Pagamento to fetch.
     */
    where: PagamentoWhereUniqueInput
  }

  /**
   * Pagamento findFirst
   */
  export type PagamentoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pagamento
     */
    select?: PagamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pagamento
     */
    omit?: PagamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagamentoInclude<ExtArgs> | null
    /**
     * Filter, which Pagamento to fetch.
     */
    where?: PagamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pagamentos to fetch.
     */
    orderBy?: PagamentoOrderByWithRelationInput | PagamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pagamentos.
     */
    cursor?: PagamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pagamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pagamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pagamentos.
     */
    distinct?: PagamentoScalarFieldEnum | PagamentoScalarFieldEnum[]
  }

  /**
   * Pagamento findFirstOrThrow
   */
  export type PagamentoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pagamento
     */
    select?: PagamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pagamento
     */
    omit?: PagamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagamentoInclude<ExtArgs> | null
    /**
     * Filter, which Pagamento to fetch.
     */
    where?: PagamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pagamentos to fetch.
     */
    orderBy?: PagamentoOrderByWithRelationInput | PagamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pagamentos.
     */
    cursor?: PagamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pagamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pagamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pagamentos.
     */
    distinct?: PagamentoScalarFieldEnum | PagamentoScalarFieldEnum[]
  }

  /**
   * Pagamento findMany
   */
  export type PagamentoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pagamento
     */
    select?: PagamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pagamento
     */
    omit?: PagamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagamentoInclude<ExtArgs> | null
    /**
     * Filter, which Pagamentos to fetch.
     */
    where?: PagamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pagamentos to fetch.
     */
    orderBy?: PagamentoOrderByWithRelationInput | PagamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pagamentos.
     */
    cursor?: PagamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pagamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pagamentos.
     */
    skip?: number
    distinct?: PagamentoScalarFieldEnum | PagamentoScalarFieldEnum[]
  }

  /**
   * Pagamento create
   */
  export type PagamentoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pagamento
     */
    select?: PagamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pagamento
     */
    omit?: PagamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagamentoInclude<ExtArgs> | null
    /**
     * The data needed to create a Pagamento.
     */
    data: XOR<PagamentoCreateInput, PagamentoUncheckedCreateInput>
  }

  /**
   * Pagamento createMany
   */
  export type PagamentoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pagamentos.
     */
    data: PagamentoCreateManyInput | PagamentoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Pagamento createManyAndReturn
   */
  export type PagamentoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pagamento
     */
    select?: PagamentoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pagamento
     */
    omit?: PagamentoOmit<ExtArgs> | null
    /**
     * The data used to create many Pagamentos.
     */
    data: PagamentoCreateManyInput | PagamentoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagamentoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Pagamento update
   */
  export type PagamentoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pagamento
     */
    select?: PagamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pagamento
     */
    omit?: PagamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagamentoInclude<ExtArgs> | null
    /**
     * The data needed to update a Pagamento.
     */
    data: XOR<PagamentoUpdateInput, PagamentoUncheckedUpdateInput>
    /**
     * Choose, which Pagamento to update.
     */
    where: PagamentoWhereUniqueInput
  }

  /**
   * Pagamento updateMany
   */
  export type PagamentoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pagamentos.
     */
    data: XOR<PagamentoUpdateManyMutationInput, PagamentoUncheckedUpdateManyInput>
    /**
     * Filter which Pagamentos to update
     */
    where?: PagamentoWhereInput
    /**
     * Limit how many Pagamentos to update.
     */
    limit?: number
  }

  /**
   * Pagamento updateManyAndReturn
   */
  export type PagamentoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pagamento
     */
    select?: PagamentoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pagamento
     */
    omit?: PagamentoOmit<ExtArgs> | null
    /**
     * The data used to update Pagamentos.
     */
    data: XOR<PagamentoUpdateManyMutationInput, PagamentoUncheckedUpdateManyInput>
    /**
     * Filter which Pagamentos to update
     */
    where?: PagamentoWhereInput
    /**
     * Limit how many Pagamentos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagamentoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Pagamento upsert
   */
  export type PagamentoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pagamento
     */
    select?: PagamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pagamento
     */
    omit?: PagamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagamentoInclude<ExtArgs> | null
    /**
     * The filter to search for the Pagamento to update in case it exists.
     */
    where: PagamentoWhereUniqueInput
    /**
     * In case the Pagamento found by the `where` argument doesn't exist, create a new Pagamento with this data.
     */
    create: XOR<PagamentoCreateInput, PagamentoUncheckedCreateInput>
    /**
     * In case the Pagamento was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PagamentoUpdateInput, PagamentoUncheckedUpdateInput>
  }

  /**
   * Pagamento delete
   */
  export type PagamentoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pagamento
     */
    select?: PagamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pagamento
     */
    omit?: PagamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagamentoInclude<ExtArgs> | null
    /**
     * Filter which Pagamento to delete.
     */
    where: PagamentoWhereUniqueInput
  }

  /**
   * Pagamento deleteMany
   */
  export type PagamentoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pagamentos to delete
     */
    where?: PagamentoWhereInput
    /**
     * Limit how many Pagamentos to delete.
     */
    limit?: number
  }

  /**
   * Pagamento without action
   */
  export type PagamentoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pagamento
     */
    select?: PagamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pagamento
     */
    omit?: PagamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagamentoInclude<ExtArgs> | null
  }


  /**
   * Model Entrega
   */

  export type AggregateEntrega = {
    _count: EntregaCountAggregateOutputType | null
    _avg: EntregaAvgAggregateOutputType | null
    _sum: EntregaSumAggregateOutputType | null
    _min: EntregaMinAggregateOutputType | null
    _max: EntregaMaxAggregateOutputType | null
  }

  export type EntregaAvgAggregateOutputType = {
    id: number | null
    pedidoId: number | null
  }

  export type EntregaSumAggregateOutputType = {
    id: number | null
    pedidoId: number | null
  }

  export type EntregaMinAggregateOutputType = {
    id: number | null
    status: $Enums.StatusEntrega | null
    previsao: Date | null
    codigoRastreio: string | null
    pedidoId: number | null
  }

  export type EntregaMaxAggregateOutputType = {
    id: number | null
    status: $Enums.StatusEntrega | null
    previsao: Date | null
    codigoRastreio: string | null
    pedidoId: number | null
  }

  export type EntregaCountAggregateOutputType = {
    id: number
    status: number
    previsao: number
    codigoRastreio: number
    pedidoId: number
    _all: number
  }


  export type EntregaAvgAggregateInputType = {
    id?: true
    pedidoId?: true
  }

  export type EntregaSumAggregateInputType = {
    id?: true
    pedidoId?: true
  }

  export type EntregaMinAggregateInputType = {
    id?: true
    status?: true
    previsao?: true
    codigoRastreio?: true
    pedidoId?: true
  }

  export type EntregaMaxAggregateInputType = {
    id?: true
    status?: true
    previsao?: true
    codigoRastreio?: true
    pedidoId?: true
  }

  export type EntregaCountAggregateInputType = {
    id?: true
    status?: true
    previsao?: true
    codigoRastreio?: true
    pedidoId?: true
    _all?: true
  }

  export type EntregaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Entrega to aggregate.
     */
    where?: EntregaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Entregas to fetch.
     */
    orderBy?: EntregaOrderByWithRelationInput | EntregaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EntregaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Entregas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Entregas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Entregas
    **/
    _count?: true | EntregaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EntregaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EntregaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EntregaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EntregaMaxAggregateInputType
  }

  export type GetEntregaAggregateType<T extends EntregaAggregateArgs> = {
        [P in keyof T & keyof AggregateEntrega]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEntrega[P]>
      : GetScalarType<T[P], AggregateEntrega[P]>
  }




  export type EntregaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EntregaWhereInput
    orderBy?: EntregaOrderByWithAggregationInput | EntregaOrderByWithAggregationInput[]
    by: EntregaScalarFieldEnum[] | EntregaScalarFieldEnum
    having?: EntregaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EntregaCountAggregateInputType | true
    _avg?: EntregaAvgAggregateInputType
    _sum?: EntregaSumAggregateInputType
    _min?: EntregaMinAggregateInputType
    _max?: EntregaMaxAggregateInputType
  }

  export type EntregaGroupByOutputType = {
    id: number
    status: $Enums.StatusEntrega
    previsao: Date | null
    codigoRastreio: string | null
    pedidoId: number
    _count: EntregaCountAggregateOutputType | null
    _avg: EntregaAvgAggregateOutputType | null
    _sum: EntregaSumAggregateOutputType | null
    _min: EntregaMinAggregateOutputType | null
    _max: EntregaMaxAggregateOutputType | null
  }

  type GetEntregaGroupByPayload<T extends EntregaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EntregaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EntregaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EntregaGroupByOutputType[P]>
            : GetScalarType<T[P], EntregaGroupByOutputType[P]>
        }
      >
    >


  export type EntregaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    previsao?: boolean
    codigoRastreio?: boolean
    pedidoId?: boolean
    pedido?: boolean | PedidoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["entrega"]>

  export type EntregaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    previsao?: boolean
    codigoRastreio?: boolean
    pedidoId?: boolean
    pedido?: boolean | PedidoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["entrega"]>

  export type EntregaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    previsao?: boolean
    codigoRastreio?: boolean
    pedidoId?: boolean
    pedido?: boolean | PedidoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["entrega"]>

  export type EntregaSelectScalar = {
    id?: boolean
    status?: boolean
    previsao?: boolean
    codigoRastreio?: boolean
    pedidoId?: boolean
  }

  export type EntregaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "status" | "previsao" | "codigoRastreio" | "pedidoId", ExtArgs["result"]["entrega"]>
  export type EntregaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pedido?: boolean | PedidoDefaultArgs<ExtArgs>
  }
  export type EntregaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pedido?: boolean | PedidoDefaultArgs<ExtArgs>
  }
  export type EntregaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pedido?: boolean | PedidoDefaultArgs<ExtArgs>
  }

  export type $EntregaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Entrega"
    objects: {
      pedido: Prisma.$PedidoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      status: $Enums.StatusEntrega
      previsao: Date | null
      codigoRastreio: string | null
      pedidoId: number
    }, ExtArgs["result"]["entrega"]>
    composites: {}
  }

  type EntregaGetPayload<S extends boolean | null | undefined | EntregaDefaultArgs> = $Result.GetResult<Prisma.$EntregaPayload, S>

  type EntregaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EntregaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EntregaCountAggregateInputType | true
    }

  export interface EntregaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Entrega'], meta: { name: 'Entrega' } }
    /**
     * Find zero or one Entrega that matches the filter.
     * @param {EntregaFindUniqueArgs} args - Arguments to find a Entrega
     * @example
     * // Get one Entrega
     * const entrega = await prisma.entrega.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EntregaFindUniqueArgs>(args: SelectSubset<T, EntregaFindUniqueArgs<ExtArgs>>): Prisma__EntregaClient<$Result.GetResult<Prisma.$EntregaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Entrega that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EntregaFindUniqueOrThrowArgs} args - Arguments to find a Entrega
     * @example
     * // Get one Entrega
     * const entrega = await prisma.entrega.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EntregaFindUniqueOrThrowArgs>(args: SelectSubset<T, EntregaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EntregaClient<$Result.GetResult<Prisma.$EntregaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Entrega that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntregaFindFirstArgs} args - Arguments to find a Entrega
     * @example
     * // Get one Entrega
     * const entrega = await prisma.entrega.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EntregaFindFirstArgs>(args?: SelectSubset<T, EntregaFindFirstArgs<ExtArgs>>): Prisma__EntregaClient<$Result.GetResult<Prisma.$EntregaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Entrega that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntregaFindFirstOrThrowArgs} args - Arguments to find a Entrega
     * @example
     * // Get one Entrega
     * const entrega = await prisma.entrega.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EntregaFindFirstOrThrowArgs>(args?: SelectSubset<T, EntregaFindFirstOrThrowArgs<ExtArgs>>): Prisma__EntregaClient<$Result.GetResult<Prisma.$EntregaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Entregas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntregaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Entregas
     * const entregas = await prisma.entrega.findMany()
     * 
     * // Get first 10 Entregas
     * const entregas = await prisma.entrega.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const entregaWithIdOnly = await prisma.entrega.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EntregaFindManyArgs>(args?: SelectSubset<T, EntregaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EntregaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Entrega.
     * @param {EntregaCreateArgs} args - Arguments to create a Entrega.
     * @example
     * // Create one Entrega
     * const Entrega = await prisma.entrega.create({
     *   data: {
     *     // ... data to create a Entrega
     *   }
     * })
     * 
     */
    create<T extends EntregaCreateArgs>(args: SelectSubset<T, EntregaCreateArgs<ExtArgs>>): Prisma__EntregaClient<$Result.GetResult<Prisma.$EntregaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Entregas.
     * @param {EntregaCreateManyArgs} args - Arguments to create many Entregas.
     * @example
     * // Create many Entregas
     * const entrega = await prisma.entrega.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EntregaCreateManyArgs>(args?: SelectSubset<T, EntregaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Entregas and returns the data saved in the database.
     * @param {EntregaCreateManyAndReturnArgs} args - Arguments to create many Entregas.
     * @example
     * // Create many Entregas
     * const entrega = await prisma.entrega.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Entregas and only return the `id`
     * const entregaWithIdOnly = await prisma.entrega.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EntregaCreateManyAndReturnArgs>(args?: SelectSubset<T, EntregaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EntregaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Entrega.
     * @param {EntregaDeleteArgs} args - Arguments to delete one Entrega.
     * @example
     * // Delete one Entrega
     * const Entrega = await prisma.entrega.delete({
     *   where: {
     *     // ... filter to delete one Entrega
     *   }
     * })
     * 
     */
    delete<T extends EntregaDeleteArgs>(args: SelectSubset<T, EntregaDeleteArgs<ExtArgs>>): Prisma__EntregaClient<$Result.GetResult<Prisma.$EntregaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Entrega.
     * @param {EntregaUpdateArgs} args - Arguments to update one Entrega.
     * @example
     * // Update one Entrega
     * const entrega = await prisma.entrega.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EntregaUpdateArgs>(args: SelectSubset<T, EntregaUpdateArgs<ExtArgs>>): Prisma__EntregaClient<$Result.GetResult<Prisma.$EntregaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Entregas.
     * @param {EntregaDeleteManyArgs} args - Arguments to filter Entregas to delete.
     * @example
     * // Delete a few Entregas
     * const { count } = await prisma.entrega.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EntregaDeleteManyArgs>(args?: SelectSubset<T, EntregaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Entregas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntregaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Entregas
     * const entrega = await prisma.entrega.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EntregaUpdateManyArgs>(args: SelectSubset<T, EntregaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Entregas and returns the data updated in the database.
     * @param {EntregaUpdateManyAndReturnArgs} args - Arguments to update many Entregas.
     * @example
     * // Update many Entregas
     * const entrega = await prisma.entrega.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Entregas and only return the `id`
     * const entregaWithIdOnly = await prisma.entrega.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EntregaUpdateManyAndReturnArgs>(args: SelectSubset<T, EntregaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EntregaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Entrega.
     * @param {EntregaUpsertArgs} args - Arguments to update or create a Entrega.
     * @example
     * // Update or create a Entrega
     * const entrega = await prisma.entrega.upsert({
     *   create: {
     *     // ... data to create a Entrega
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Entrega we want to update
     *   }
     * })
     */
    upsert<T extends EntregaUpsertArgs>(args: SelectSubset<T, EntregaUpsertArgs<ExtArgs>>): Prisma__EntregaClient<$Result.GetResult<Prisma.$EntregaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Entregas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntregaCountArgs} args - Arguments to filter Entregas to count.
     * @example
     * // Count the number of Entregas
     * const count = await prisma.entrega.count({
     *   where: {
     *     // ... the filter for the Entregas we want to count
     *   }
     * })
    **/
    count<T extends EntregaCountArgs>(
      args?: Subset<T, EntregaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EntregaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Entrega.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntregaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EntregaAggregateArgs>(args: Subset<T, EntregaAggregateArgs>): Prisma.PrismaPromise<GetEntregaAggregateType<T>>

    /**
     * Group by Entrega.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntregaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EntregaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EntregaGroupByArgs['orderBy'] }
        : { orderBy?: EntregaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EntregaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEntregaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Entrega model
   */
  readonly fields: EntregaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Entrega.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EntregaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pedido<T extends PedidoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PedidoDefaultArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Entrega model
   */
  interface EntregaFieldRefs {
    readonly id: FieldRef<"Entrega", 'Int'>
    readonly status: FieldRef<"Entrega", 'StatusEntrega'>
    readonly previsao: FieldRef<"Entrega", 'DateTime'>
    readonly codigoRastreio: FieldRef<"Entrega", 'String'>
    readonly pedidoId: FieldRef<"Entrega", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Entrega findUnique
   */
  export type EntregaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entrega
     */
    select?: EntregaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entrega
     */
    omit?: EntregaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntregaInclude<ExtArgs> | null
    /**
     * Filter, which Entrega to fetch.
     */
    where: EntregaWhereUniqueInput
  }

  /**
   * Entrega findUniqueOrThrow
   */
  export type EntregaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entrega
     */
    select?: EntregaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entrega
     */
    omit?: EntregaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntregaInclude<ExtArgs> | null
    /**
     * Filter, which Entrega to fetch.
     */
    where: EntregaWhereUniqueInput
  }

  /**
   * Entrega findFirst
   */
  export type EntregaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entrega
     */
    select?: EntregaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entrega
     */
    omit?: EntregaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntregaInclude<ExtArgs> | null
    /**
     * Filter, which Entrega to fetch.
     */
    where?: EntregaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Entregas to fetch.
     */
    orderBy?: EntregaOrderByWithRelationInput | EntregaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Entregas.
     */
    cursor?: EntregaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Entregas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Entregas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Entregas.
     */
    distinct?: EntregaScalarFieldEnum | EntregaScalarFieldEnum[]
  }

  /**
   * Entrega findFirstOrThrow
   */
  export type EntregaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entrega
     */
    select?: EntregaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entrega
     */
    omit?: EntregaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntregaInclude<ExtArgs> | null
    /**
     * Filter, which Entrega to fetch.
     */
    where?: EntregaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Entregas to fetch.
     */
    orderBy?: EntregaOrderByWithRelationInput | EntregaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Entregas.
     */
    cursor?: EntregaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Entregas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Entregas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Entregas.
     */
    distinct?: EntregaScalarFieldEnum | EntregaScalarFieldEnum[]
  }

  /**
   * Entrega findMany
   */
  export type EntregaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entrega
     */
    select?: EntregaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entrega
     */
    omit?: EntregaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntregaInclude<ExtArgs> | null
    /**
     * Filter, which Entregas to fetch.
     */
    where?: EntregaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Entregas to fetch.
     */
    orderBy?: EntregaOrderByWithRelationInput | EntregaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Entregas.
     */
    cursor?: EntregaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Entregas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Entregas.
     */
    skip?: number
    distinct?: EntregaScalarFieldEnum | EntregaScalarFieldEnum[]
  }

  /**
   * Entrega create
   */
  export type EntregaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entrega
     */
    select?: EntregaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entrega
     */
    omit?: EntregaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntregaInclude<ExtArgs> | null
    /**
     * The data needed to create a Entrega.
     */
    data: XOR<EntregaCreateInput, EntregaUncheckedCreateInput>
  }

  /**
   * Entrega createMany
   */
  export type EntregaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Entregas.
     */
    data: EntregaCreateManyInput | EntregaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Entrega createManyAndReturn
   */
  export type EntregaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entrega
     */
    select?: EntregaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Entrega
     */
    omit?: EntregaOmit<ExtArgs> | null
    /**
     * The data used to create many Entregas.
     */
    data: EntregaCreateManyInput | EntregaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntregaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Entrega update
   */
  export type EntregaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entrega
     */
    select?: EntregaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entrega
     */
    omit?: EntregaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntregaInclude<ExtArgs> | null
    /**
     * The data needed to update a Entrega.
     */
    data: XOR<EntregaUpdateInput, EntregaUncheckedUpdateInput>
    /**
     * Choose, which Entrega to update.
     */
    where: EntregaWhereUniqueInput
  }

  /**
   * Entrega updateMany
   */
  export type EntregaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Entregas.
     */
    data: XOR<EntregaUpdateManyMutationInput, EntregaUncheckedUpdateManyInput>
    /**
     * Filter which Entregas to update
     */
    where?: EntregaWhereInput
    /**
     * Limit how many Entregas to update.
     */
    limit?: number
  }

  /**
   * Entrega updateManyAndReturn
   */
  export type EntregaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entrega
     */
    select?: EntregaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Entrega
     */
    omit?: EntregaOmit<ExtArgs> | null
    /**
     * The data used to update Entregas.
     */
    data: XOR<EntregaUpdateManyMutationInput, EntregaUncheckedUpdateManyInput>
    /**
     * Filter which Entregas to update
     */
    where?: EntregaWhereInput
    /**
     * Limit how many Entregas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntregaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Entrega upsert
   */
  export type EntregaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entrega
     */
    select?: EntregaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entrega
     */
    omit?: EntregaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntregaInclude<ExtArgs> | null
    /**
     * The filter to search for the Entrega to update in case it exists.
     */
    where: EntregaWhereUniqueInput
    /**
     * In case the Entrega found by the `where` argument doesn't exist, create a new Entrega with this data.
     */
    create: XOR<EntregaCreateInput, EntregaUncheckedCreateInput>
    /**
     * In case the Entrega was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EntregaUpdateInput, EntregaUncheckedUpdateInput>
  }

  /**
   * Entrega delete
   */
  export type EntregaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entrega
     */
    select?: EntregaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entrega
     */
    omit?: EntregaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntregaInclude<ExtArgs> | null
    /**
     * Filter which Entrega to delete.
     */
    where: EntregaWhereUniqueInput
  }

  /**
   * Entrega deleteMany
   */
  export type EntregaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Entregas to delete
     */
    where?: EntregaWhereInput
    /**
     * Limit how many Entregas to delete.
     */
    limit?: number
  }

  /**
   * Entrega without action
   */
  export type EntregaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entrega
     */
    select?: EntregaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entrega
     */
    omit?: EntregaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntregaInclude<ExtArgs> | null
  }


  /**
   * Model Carrinho
   */

  export type AggregateCarrinho = {
    _count: CarrinhoCountAggregateOutputType | null
    _avg: CarrinhoAvgAggregateOutputType | null
    _sum: CarrinhoSumAggregateOutputType | null
    _min: CarrinhoMinAggregateOutputType | null
    _max: CarrinhoMaxAggregateOutputType | null
  }

  export type CarrinhoAvgAggregateOutputType = {
    id: number | null
    usuarioId: number | null
  }

  export type CarrinhoSumAggregateOutputType = {
    id: number | null
    usuarioId: number | null
  }

  export type CarrinhoMinAggregateOutputType = {
    id: number | null
    usuarioId: number | null
  }

  export type CarrinhoMaxAggregateOutputType = {
    id: number | null
    usuarioId: number | null
  }

  export type CarrinhoCountAggregateOutputType = {
    id: number
    usuarioId: number
    _all: number
  }


  export type CarrinhoAvgAggregateInputType = {
    id?: true
    usuarioId?: true
  }

  export type CarrinhoSumAggregateInputType = {
    id?: true
    usuarioId?: true
  }

  export type CarrinhoMinAggregateInputType = {
    id?: true
    usuarioId?: true
  }

  export type CarrinhoMaxAggregateInputType = {
    id?: true
    usuarioId?: true
  }

  export type CarrinhoCountAggregateInputType = {
    id?: true
    usuarioId?: true
    _all?: true
  }

  export type CarrinhoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Carrinho to aggregate.
     */
    where?: CarrinhoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Carrinhos to fetch.
     */
    orderBy?: CarrinhoOrderByWithRelationInput | CarrinhoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CarrinhoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Carrinhos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Carrinhos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Carrinhos
    **/
    _count?: true | CarrinhoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CarrinhoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CarrinhoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CarrinhoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CarrinhoMaxAggregateInputType
  }

  export type GetCarrinhoAggregateType<T extends CarrinhoAggregateArgs> = {
        [P in keyof T & keyof AggregateCarrinho]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCarrinho[P]>
      : GetScalarType<T[P], AggregateCarrinho[P]>
  }




  export type CarrinhoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CarrinhoWhereInput
    orderBy?: CarrinhoOrderByWithAggregationInput | CarrinhoOrderByWithAggregationInput[]
    by: CarrinhoScalarFieldEnum[] | CarrinhoScalarFieldEnum
    having?: CarrinhoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CarrinhoCountAggregateInputType | true
    _avg?: CarrinhoAvgAggregateInputType
    _sum?: CarrinhoSumAggregateInputType
    _min?: CarrinhoMinAggregateInputType
    _max?: CarrinhoMaxAggregateInputType
  }

  export type CarrinhoGroupByOutputType = {
    id: number
    usuarioId: number
    _count: CarrinhoCountAggregateOutputType | null
    _avg: CarrinhoAvgAggregateOutputType | null
    _sum: CarrinhoSumAggregateOutputType | null
    _min: CarrinhoMinAggregateOutputType | null
    _max: CarrinhoMaxAggregateOutputType | null
  }

  type GetCarrinhoGroupByPayload<T extends CarrinhoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CarrinhoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CarrinhoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CarrinhoGroupByOutputType[P]>
            : GetScalarType<T[P], CarrinhoGroupByOutputType[P]>
        }
      >
    >


  export type CarrinhoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuarioId?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    itens?: boolean | Carrinho$itensArgs<ExtArgs>
    _count?: boolean | CarrinhoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["carrinho"]>

  export type CarrinhoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuarioId?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["carrinho"]>

  export type CarrinhoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuarioId?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["carrinho"]>

  export type CarrinhoSelectScalar = {
    id?: boolean
    usuarioId?: boolean
  }

  export type CarrinhoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "usuarioId", ExtArgs["result"]["carrinho"]>
  export type CarrinhoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    itens?: boolean | Carrinho$itensArgs<ExtArgs>
    _count?: boolean | CarrinhoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CarrinhoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type CarrinhoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $CarrinhoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Carrinho"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs>
      itens: Prisma.$ItemCarrinhoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      usuarioId: number
    }, ExtArgs["result"]["carrinho"]>
    composites: {}
  }

  type CarrinhoGetPayload<S extends boolean | null | undefined | CarrinhoDefaultArgs> = $Result.GetResult<Prisma.$CarrinhoPayload, S>

  type CarrinhoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CarrinhoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CarrinhoCountAggregateInputType | true
    }

  export interface CarrinhoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Carrinho'], meta: { name: 'Carrinho' } }
    /**
     * Find zero or one Carrinho that matches the filter.
     * @param {CarrinhoFindUniqueArgs} args - Arguments to find a Carrinho
     * @example
     * // Get one Carrinho
     * const carrinho = await prisma.carrinho.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CarrinhoFindUniqueArgs>(args: SelectSubset<T, CarrinhoFindUniqueArgs<ExtArgs>>): Prisma__CarrinhoClient<$Result.GetResult<Prisma.$CarrinhoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Carrinho that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CarrinhoFindUniqueOrThrowArgs} args - Arguments to find a Carrinho
     * @example
     * // Get one Carrinho
     * const carrinho = await prisma.carrinho.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CarrinhoFindUniqueOrThrowArgs>(args: SelectSubset<T, CarrinhoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CarrinhoClient<$Result.GetResult<Prisma.$CarrinhoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Carrinho that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarrinhoFindFirstArgs} args - Arguments to find a Carrinho
     * @example
     * // Get one Carrinho
     * const carrinho = await prisma.carrinho.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CarrinhoFindFirstArgs>(args?: SelectSubset<T, CarrinhoFindFirstArgs<ExtArgs>>): Prisma__CarrinhoClient<$Result.GetResult<Prisma.$CarrinhoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Carrinho that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarrinhoFindFirstOrThrowArgs} args - Arguments to find a Carrinho
     * @example
     * // Get one Carrinho
     * const carrinho = await prisma.carrinho.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CarrinhoFindFirstOrThrowArgs>(args?: SelectSubset<T, CarrinhoFindFirstOrThrowArgs<ExtArgs>>): Prisma__CarrinhoClient<$Result.GetResult<Prisma.$CarrinhoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Carrinhos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarrinhoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Carrinhos
     * const carrinhos = await prisma.carrinho.findMany()
     * 
     * // Get first 10 Carrinhos
     * const carrinhos = await prisma.carrinho.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const carrinhoWithIdOnly = await prisma.carrinho.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CarrinhoFindManyArgs>(args?: SelectSubset<T, CarrinhoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarrinhoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Carrinho.
     * @param {CarrinhoCreateArgs} args - Arguments to create a Carrinho.
     * @example
     * // Create one Carrinho
     * const Carrinho = await prisma.carrinho.create({
     *   data: {
     *     // ... data to create a Carrinho
     *   }
     * })
     * 
     */
    create<T extends CarrinhoCreateArgs>(args: SelectSubset<T, CarrinhoCreateArgs<ExtArgs>>): Prisma__CarrinhoClient<$Result.GetResult<Prisma.$CarrinhoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Carrinhos.
     * @param {CarrinhoCreateManyArgs} args - Arguments to create many Carrinhos.
     * @example
     * // Create many Carrinhos
     * const carrinho = await prisma.carrinho.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CarrinhoCreateManyArgs>(args?: SelectSubset<T, CarrinhoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Carrinhos and returns the data saved in the database.
     * @param {CarrinhoCreateManyAndReturnArgs} args - Arguments to create many Carrinhos.
     * @example
     * // Create many Carrinhos
     * const carrinho = await prisma.carrinho.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Carrinhos and only return the `id`
     * const carrinhoWithIdOnly = await prisma.carrinho.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CarrinhoCreateManyAndReturnArgs>(args?: SelectSubset<T, CarrinhoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarrinhoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Carrinho.
     * @param {CarrinhoDeleteArgs} args - Arguments to delete one Carrinho.
     * @example
     * // Delete one Carrinho
     * const Carrinho = await prisma.carrinho.delete({
     *   where: {
     *     // ... filter to delete one Carrinho
     *   }
     * })
     * 
     */
    delete<T extends CarrinhoDeleteArgs>(args: SelectSubset<T, CarrinhoDeleteArgs<ExtArgs>>): Prisma__CarrinhoClient<$Result.GetResult<Prisma.$CarrinhoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Carrinho.
     * @param {CarrinhoUpdateArgs} args - Arguments to update one Carrinho.
     * @example
     * // Update one Carrinho
     * const carrinho = await prisma.carrinho.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CarrinhoUpdateArgs>(args: SelectSubset<T, CarrinhoUpdateArgs<ExtArgs>>): Prisma__CarrinhoClient<$Result.GetResult<Prisma.$CarrinhoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Carrinhos.
     * @param {CarrinhoDeleteManyArgs} args - Arguments to filter Carrinhos to delete.
     * @example
     * // Delete a few Carrinhos
     * const { count } = await prisma.carrinho.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CarrinhoDeleteManyArgs>(args?: SelectSubset<T, CarrinhoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Carrinhos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarrinhoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Carrinhos
     * const carrinho = await prisma.carrinho.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CarrinhoUpdateManyArgs>(args: SelectSubset<T, CarrinhoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Carrinhos and returns the data updated in the database.
     * @param {CarrinhoUpdateManyAndReturnArgs} args - Arguments to update many Carrinhos.
     * @example
     * // Update many Carrinhos
     * const carrinho = await prisma.carrinho.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Carrinhos and only return the `id`
     * const carrinhoWithIdOnly = await prisma.carrinho.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CarrinhoUpdateManyAndReturnArgs>(args: SelectSubset<T, CarrinhoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarrinhoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Carrinho.
     * @param {CarrinhoUpsertArgs} args - Arguments to update or create a Carrinho.
     * @example
     * // Update or create a Carrinho
     * const carrinho = await prisma.carrinho.upsert({
     *   create: {
     *     // ... data to create a Carrinho
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Carrinho we want to update
     *   }
     * })
     */
    upsert<T extends CarrinhoUpsertArgs>(args: SelectSubset<T, CarrinhoUpsertArgs<ExtArgs>>): Prisma__CarrinhoClient<$Result.GetResult<Prisma.$CarrinhoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Carrinhos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarrinhoCountArgs} args - Arguments to filter Carrinhos to count.
     * @example
     * // Count the number of Carrinhos
     * const count = await prisma.carrinho.count({
     *   where: {
     *     // ... the filter for the Carrinhos we want to count
     *   }
     * })
    **/
    count<T extends CarrinhoCountArgs>(
      args?: Subset<T, CarrinhoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CarrinhoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Carrinho.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarrinhoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CarrinhoAggregateArgs>(args: Subset<T, CarrinhoAggregateArgs>): Prisma.PrismaPromise<GetCarrinhoAggregateType<T>>

    /**
     * Group by Carrinho.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarrinhoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CarrinhoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CarrinhoGroupByArgs['orderBy'] }
        : { orderBy?: CarrinhoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CarrinhoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCarrinhoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Carrinho model
   */
  readonly fields: CarrinhoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Carrinho.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CarrinhoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    itens<T extends Carrinho$itensArgs<ExtArgs> = {}>(args?: Subset<T, Carrinho$itensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemCarrinhoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Carrinho model
   */
  interface CarrinhoFieldRefs {
    readonly id: FieldRef<"Carrinho", 'Int'>
    readonly usuarioId: FieldRef<"Carrinho", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Carrinho findUnique
   */
  export type CarrinhoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carrinho
     */
    select?: CarrinhoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carrinho
     */
    omit?: CarrinhoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarrinhoInclude<ExtArgs> | null
    /**
     * Filter, which Carrinho to fetch.
     */
    where: CarrinhoWhereUniqueInput
  }

  /**
   * Carrinho findUniqueOrThrow
   */
  export type CarrinhoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carrinho
     */
    select?: CarrinhoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carrinho
     */
    omit?: CarrinhoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarrinhoInclude<ExtArgs> | null
    /**
     * Filter, which Carrinho to fetch.
     */
    where: CarrinhoWhereUniqueInput
  }

  /**
   * Carrinho findFirst
   */
  export type CarrinhoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carrinho
     */
    select?: CarrinhoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carrinho
     */
    omit?: CarrinhoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarrinhoInclude<ExtArgs> | null
    /**
     * Filter, which Carrinho to fetch.
     */
    where?: CarrinhoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Carrinhos to fetch.
     */
    orderBy?: CarrinhoOrderByWithRelationInput | CarrinhoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Carrinhos.
     */
    cursor?: CarrinhoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Carrinhos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Carrinhos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Carrinhos.
     */
    distinct?: CarrinhoScalarFieldEnum | CarrinhoScalarFieldEnum[]
  }

  /**
   * Carrinho findFirstOrThrow
   */
  export type CarrinhoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carrinho
     */
    select?: CarrinhoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carrinho
     */
    omit?: CarrinhoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarrinhoInclude<ExtArgs> | null
    /**
     * Filter, which Carrinho to fetch.
     */
    where?: CarrinhoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Carrinhos to fetch.
     */
    orderBy?: CarrinhoOrderByWithRelationInput | CarrinhoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Carrinhos.
     */
    cursor?: CarrinhoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Carrinhos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Carrinhos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Carrinhos.
     */
    distinct?: CarrinhoScalarFieldEnum | CarrinhoScalarFieldEnum[]
  }

  /**
   * Carrinho findMany
   */
  export type CarrinhoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carrinho
     */
    select?: CarrinhoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carrinho
     */
    omit?: CarrinhoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarrinhoInclude<ExtArgs> | null
    /**
     * Filter, which Carrinhos to fetch.
     */
    where?: CarrinhoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Carrinhos to fetch.
     */
    orderBy?: CarrinhoOrderByWithRelationInput | CarrinhoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Carrinhos.
     */
    cursor?: CarrinhoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Carrinhos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Carrinhos.
     */
    skip?: number
    distinct?: CarrinhoScalarFieldEnum | CarrinhoScalarFieldEnum[]
  }

  /**
   * Carrinho create
   */
  export type CarrinhoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carrinho
     */
    select?: CarrinhoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carrinho
     */
    omit?: CarrinhoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarrinhoInclude<ExtArgs> | null
    /**
     * The data needed to create a Carrinho.
     */
    data: XOR<CarrinhoCreateInput, CarrinhoUncheckedCreateInput>
  }

  /**
   * Carrinho createMany
   */
  export type CarrinhoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Carrinhos.
     */
    data: CarrinhoCreateManyInput | CarrinhoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Carrinho createManyAndReturn
   */
  export type CarrinhoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carrinho
     */
    select?: CarrinhoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Carrinho
     */
    omit?: CarrinhoOmit<ExtArgs> | null
    /**
     * The data used to create many Carrinhos.
     */
    data: CarrinhoCreateManyInput | CarrinhoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarrinhoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Carrinho update
   */
  export type CarrinhoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carrinho
     */
    select?: CarrinhoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carrinho
     */
    omit?: CarrinhoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarrinhoInclude<ExtArgs> | null
    /**
     * The data needed to update a Carrinho.
     */
    data: XOR<CarrinhoUpdateInput, CarrinhoUncheckedUpdateInput>
    /**
     * Choose, which Carrinho to update.
     */
    where: CarrinhoWhereUniqueInput
  }

  /**
   * Carrinho updateMany
   */
  export type CarrinhoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Carrinhos.
     */
    data: XOR<CarrinhoUpdateManyMutationInput, CarrinhoUncheckedUpdateManyInput>
    /**
     * Filter which Carrinhos to update
     */
    where?: CarrinhoWhereInput
    /**
     * Limit how many Carrinhos to update.
     */
    limit?: number
  }

  /**
   * Carrinho updateManyAndReturn
   */
  export type CarrinhoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carrinho
     */
    select?: CarrinhoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Carrinho
     */
    omit?: CarrinhoOmit<ExtArgs> | null
    /**
     * The data used to update Carrinhos.
     */
    data: XOR<CarrinhoUpdateManyMutationInput, CarrinhoUncheckedUpdateManyInput>
    /**
     * Filter which Carrinhos to update
     */
    where?: CarrinhoWhereInput
    /**
     * Limit how many Carrinhos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarrinhoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Carrinho upsert
   */
  export type CarrinhoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carrinho
     */
    select?: CarrinhoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carrinho
     */
    omit?: CarrinhoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarrinhoInclude<ExtArgs> | null
    /**
     * The filter to search for the Carrinho to update in case it exists.
     */
    where: CarrinhoWhereUniqueInput
    /**
     * In case the Carrinho found by the `where` argument doesn't exist, create a new Carrinho with this data.
     */
    create: XOR<CarrinhoCreateInput, CarrinhoUncheckedCreateInput>
    /**
     * In case the Carrinho was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CarrinhoUpdateInput, CarrinhoUncheckedUpdateInput>
  }

  /**
   * Carrinho delete
   */
  export type CarrinhoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carrinho
     */
    select?: CarrinhoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carrinho
     */
    omit?: CarrinhoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarrinhoInclude<ExtArgs> | null
    /**
     * Filter which Carrinho to delete.
     */
    where: CarrinhoWhereUniqueInput
  }

  /**
   * Carrinho deleteMany
   */
  export type CarrinhoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Carrinhos to delete
     */
    where?: CarrinhoWhereInput
    /**
     * Limit how many Carrinhos to delete.
     */
    limit?: number
  }

  /**
   * Carrinho.itens
   */
  export type Carrinho$itensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemCarrinho
     */
    select?: ItemCarrinhoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemCarrinho
     */
    omit?: ItemCarrinhoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemCarrinhoInclude<ExtArgs> | null
    where?: ItemCarrinhoWhereInput
    orderBy?: ItemCarrinhoOrderByWithRelationInput | ItemCarrinhoOrderByWithRelationInput[]
    cursor?: ItemCarrinhoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ItemCarrinhoScalarFieldEnum | ItemCarrinhoScalarFieldEnum[]
  }

  /**
   * Carrinho without action
   */
  export type CarrinhoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carrinho
     */
    select?: CarrinhoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carrinho
     */
    omit?: CarrinhoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarrinhoInclude<ExtArgs> | null
  }


  /**
   * Model ItemCarrinho
   */

  export type AggregateItemCarrinho = {
    _count: ItemCarrinhoCountAggregateOutputType | null
    _avg: ItemCarrinhoAvgAggregateOutputType | null
    _sum: ItemCarrinhoSumAggregateOutputType | null
    _min: ItemCarrinhoMinAggregateOutputType | null
    _max: ItemCarrinhoMaxAggregateOutputType | null
  }

  export type ItemCarrinhoAvgAggregateOutputType = {
    id: number | null
    quantidade: number | null
    carrinhoId: number | null
    produtoId: number | null
  }

  export type ItemCarrinhoSumAggregateOutputType = {
    id: number | null
    quantidade: number | null
    carrinhoId: number | null
    produtoId: number | null
  }

  export type ItemCarrinhoMinAggregateOutputType = {
    id: number | null
    quantidade: number | null
    carrinhoId: number | null
    produtoId: number | null
  }

  export type ItemCarrinhoMaxAggregateOutputType = {
    id: number | null
    quantidade: number | null
    carrinhoId: number | null
    produtoId: number | null
  }

  export type ItemCarrinhoCountAggregateOutputType = {
    id: number
    quantidade: number
    carrinhoId: number
    produtoId: number
    _all: number
  }


  export type ItemCarrinhoAvgAggregateInputType = {
    id?: true
    quantidade?: true
    carrinhoId?: true
    produtoId?: true
  }

  export type ItemCarrinhoSumAggregateInputType = {
    id?: true
    quantidade?: true
    carrinhoId?: true
    produtoId?: true
  }

  export type ItemCarrinhoMinAggregateInputType = {
    id?: true
    quantidade?: true
    carrinhoId?: true
    produtoId?: true
  }

  export type ItemCarrinhoMaxAggregateInputType = {
    id?: true
    quantidade?: true
    carrinhoId?: true
    produtoId?: true
  }

  export type ItemCarrinhoCountAggregateInputType = {
    id?: true
    quantidade?: true
    carrinhoId?: true
    produtoId?: true
    _all?: true
  }

  export type ItemCarrinhoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ItemCarrinho to aggregate.
     */
    where?: ItemCarrinhoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemCarrinhos to fetch.
     */
    orderBy?: ItemCarrinhoOrderByWithRelationInput | ItemCarrinhoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ItemCarrinhoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemCarrinhos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemCarrinhos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ItemCarrinhos
    **/
    _count?: true | ItemCarrinhoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ItemCarrinhoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ItemCarrinhoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ItemCarrinhoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ItemCarrinhoMaxAggregateInputType
  }

  export type GetItemCarrinhoAggregateType<T extends ItemCarrinhoAggregateArgs> = {
        [P in keyof T & keyof AggregateItemCarrinho]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateItemCarrinho[P]>
      : GetScalarType<T[P], AggregateItemCarrinho[P]>
  }




  export type ItemCarrinhoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemCarrinhoWhereInput
    orderBy?: ItemCarrinhoOrderByWithAggregationInput | ItemCarrinhoOrderByWithAggregationInput[]
    by: ItemCarrinhoScalarFieldEnum[] | ItemCarrinhoScalarFieldEnum
    having?: ItemCarrinhoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ItemCarrinhoCountAggregateInputType | true
    _avg?: ItemCarrinhoAvgAggregateInputType
    _sum?: ItemCarrinhoSumAggregateInputType
    _min?: ItemCarrinhoMinAggregateInputType
    _max?: ItemCarrinhoMaxAggregateInputType
  }

  export type ItemCarrinhoGroupByOutputType = {
    id: number
    quantidade: number
    carrinhoId: number
    produtoId: number
    _count: ItemCarrinhoCountAggregateOutputType | null
    _avg: ItemCarrinhoAvgAggregateOutputType | null
    _sum: ItemCarrinhoSumAggregateOutputType | null
    _min: ItemCarrinhoMinAggregateOutputType | null
    _max: ItemCarrinhoMaxAggregateOutputType | null
  }

  type GetItemCarrinhoGroupByPayload<T extends ItemCarrinhoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ItemCarrinhoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ItemCarrinhoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ItemCarrinhoGroupByOutputType[P]>
            : GetScalarType<T[P], ItemCarrinhoGroupByOutputType[P]>
        }
      >
    >


  export type ItemCarrinhoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quantidade?: boolean
    carrinhoId?: boolean
    produtoId?: boolean
    carrinho?: boolean | CarrinhoDefaultArgs<ExtArgs>
    produto?: boolean | ProdutoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["itemCarrinho"]>

  export type ItemCarrinhoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quantidade?: boolean
    carrinhoId?: boolean
    produtoId?: boolean
    carrinho?: boolean | CarrinhoDefaultArgs<ExtArgs>
    produto?: boolean | ProdutoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["itemCarrinho"]>

  export type ItemCarrinhoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quantidade?: boolean
    carrinhoId?: boolean
    produtoId?: boolean
    carrinho?: boolean | CarrinhoDefaultArgs<ExtArgs>
    produto?: boolean | ProdutoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["itemCarrinho"]>

  export type ItemCarrinhoSelectScalar = {
    id?: boolean
    quantidade?: boolean
    carrinhoId?: boolean
    produtoId?: boolean
  }

  export type ItemCarrinhoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "quantidade" | "carrinhoId" | "produtoId", ExtArgs["result"]["itemCarrinho"]>
  export type ItemCarrinhoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    carrinho?: boolean | CarrinhoDefaultArgs<ExtArgs>
    produto?: boolean | ProdutoDefaultArgs<ExtArgs>
  }
  export type ItemCarrinhoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    carrinho?: boolean | CarrinhoDefaultArgs<ExtArgs>
    produto?: boolean | ProdutoDefaultArgs<ExtArgs>
  }
  export type ItemCarrinhoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    carrinho?: boolean | CarrinhoDefaultArgs<ExtArgs>
    produto?: boolean | ProdutoDefaultArgs<ExtArgs>
  }

  export type $ItemCarrinhoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ItemCarrinho"
    objects: {
      carrinho: Prisma.$CarrinhoPayload<ExtArgs>
      produto: Prisma.$ProdutoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      quantidade: number
      carrinhoId: number
      produtoId: number
    }, ExtArgs["result"]["itemCarrinho"]>
    composites: {}
  }

  type ItemCarrinhoGetPayload<S extends boolean | null | undefined | ItemCarrinhoDefaultArgs> = $Result.GetResult<Prisma.$ItemCarrinhoPayload, S>

  type ItemCarrinhoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ItemCarrinhoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ItemCarrinhoCountAggregateInputType | true
    }

  export interface ItemCarrinhoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ItemCarrinho'], meta: { name: 'ItemCarrinho' } }
    /**
     * Find zero or one ItemCarrinho that matches the filter.
     * @param {ItemCarrinhoFindUniqueArgs} args - Arguments to find a ItemCarrinho
     * @example
     * // Get one ItemCarrinho
     * const itemCarrinho = await prisma.itemCarrinho.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ItemCarrinhoFindUniqueArgs>(args: SelectSubset<T, ItemCarrinhoFindUniqueArgs<ExtArgs>>): Prisma__ItemCarrinhoClient<$Result.GetResult<Prisma.$ItemCarrinhoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ItemCarrinho that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ItemCarrinhoFindUniqueOrThrowArgs} args - Arguments to find a ItemCarrinho
     * @example
     * // Get one ItemCarrinho
     * const itemCarrinho = await prisma.itemCarrinho.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ItemCarrinhoFindUniqueOrThrowArgs>(args: SelectSubset<T, ItemCarrinhoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ItemCarrinhoClient<$Result.GetResult<Prisma.$ItemCarrinhoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ItemCarrinho that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemCarrinhoFindFirstArgs} args - Arguments to find a ItemCarrinho
     * @example
     * // Get one ItemCarrinho
     * const itemCarrinho = await prisma.itemCarrinho.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ItemCarrinhoFindFirstArgs>(args?: SelectSubset<T, ItemCarrinhoFindFirstArgs<ExtArgs>>): Prisma__ItemCarrinhoClient<$Result.GetResult<Prisma.$ItemCarrinhoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ItemCarrinho that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemCarrinhoFindFirstOrThrowArgs} args - Arguments to find a ItemCarrinho
     * @example
     * // Get one ItemCarrinho
     * const itemCarrinho = await prisma.itemCarrinho.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ItemCarrinhoFindFirstOrThrowArgs>(args?: SelectSubset<T, ItemCarrinhoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ItemCarrinhoClient<$Result.GetResult<Prisma.$ItemCarrinhoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ItemCarrinhos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemCarrinhoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ItemCarrinhos
     * const itemCarrinhos = await prisma.itemCarrinho.findMany()
     * 
     * // Get first 10 ItemCarrinhos
     * const itemCarrinhos = await prisma.itemCarrinho.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const itemCarrinhoWithIdOnly = await prisma.itemCarrinho.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ItemCarrinhoFindManyArgs>(args?: SelectSubset<T, ItemCarrinhoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemCarrinhoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ItemCarrinho.
     * @param {ItemCarrinhoCreateArgs} args - Arguments to create a ItemCarrinho.
     * @example
     * // Create one ItemCarrinho
     * const ItemCarrinho = await prisma.itemCarrinho.create({
     *   data: {
     *     // ... data to create a ItemCarrinho
     *   }
     * })
     * 
     */
    create<T extends ItemCarrinhoCreateArgs>(args: SelectSubset<T, ItemCarrinhoCreateArgs<ExtArgs>>): Prisma__ItemCarrinhoClient<$Result.GetResult<Prisma.$ItemCarrinhoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ItemCarrinhos.
     * @param {ItemCarrinhoCreateManyArgs} args - Arguments to create many ItemCarrinhos.
     * @example
     * // Create many ItemCarrinhos
     * const itemCarrinho = await prisma.itemCarrinho.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ItemCarrinhoCreateManyArgs>(args?: SelectSubset<T, ItemCarrinhoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ItemCarrinhos and returns the data saved in the database.
     * @param {ItemCarrinhoCreateManyAndReturnArgs} args - Arguments to create many ItemCarrinhos.
     * @example
     * // Create many ItemCarrinhos
     * const itemCarrinho = await prisma.itemCarrinho.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ItemCarrinhos and only return the `id`
     * const itemCarrinhoWithIdOnly = await prisma.itemCarrinho.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ItemCarrinhoCreateManyAndReturnArgs>(args?: SelectSubset<T, ItemCarrinhoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemCarrinhoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ItemCarrinho.
     * @param {ItemCarrinhoDeleteArgs} args - Arguments to delete one ItemCarrinho.
     * @example
     * // Delete one ItemCarrinho
     * const ItemCarrinho = await prisma.itemCarrinho.delete({
     *   where: {
     *     // ... filter to delete one ItemCarrinho
     *   }
     * })
     * 
     */
    delete<T extends ItemCarrinhoDeleteArgs>(args: SelectSubset<T, ItemCarrinhoDeleteArgs<ExtArgs>>): Prisma__ItemCarrinhoClient<$Result.GetResult<Prisma.$ItemCarrinhoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ItemCarrinho.
     * @param {ItemCarrinhoUpdateArgs} args - Arguments to update one ItemCarrinho.
     * @example
     * // Update one ItemCarrinho
     * const itemCarrinho = await prisma.itemCarrinho.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ItemCarrinhoUpdateArgs>(args: SelectSubset<T, ItemCarrinhoUpdateArgs<ExtArgs>>): Prisma__ItemCarrinhoClient<$Result.GetResult<Prisma.$ItemCarrinhoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ItemCarrinhos.
     * @param {ItemCarrinhoDeleteManyArgs} args - Arguments to filter ItemCarrinhos to delete.
     * @example
     * // Delete a few ItemCarrinhos
     * const { count } = await prisma.itemCarrinho.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ItemCarrinhoDeleteManyArgs>(args?: SelectSubset<T, ItemCarrinhoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ItemCarrinhos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemCarrinhoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ItemCarrinhos
     * const itemCarrinho = await prisma.itemCarrinho.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ItemCarrinhoUpdateManyArgs>(args: SelectSubset<T, ItemCarrinhoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ItemCarrinhos and returns the data updated in the database.
     * @param {ItemCarrinhoUpdateManyAndReturnArgs} args - Arguments to update many ItemCarrinhos.
     * @example
     * // Update many ItemCarrinhos
     * const itemCarrinho = await prisma.itemCarrinho.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ItemCarrinhos and only return the `id`
     * const itemCarrinhoWithIdOnly = await prisma.itemCarrinho.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ItemCarrinhoUpdateManyAndReturnArgs>(args: SelectSubset<T, ItemCarrinhoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemCarrinhoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ItemCarrinho.
     * @param {ItemCarrinhoUpsertArgs} args - Arguments to update or create a ItemCarrinho.
     * @example
     * // Update or create a ItemCarrinho
     * const itemCarrinho = await prisma.itemCarrinho.upsert({
     *   create: {
     *     // ... data to create a ItemCarrinho
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ItemCarrinho we want to update
     *   }
     * })
     */
    upsert<T extends ItemCarrinhoUpsertArgs>(args: SelectSubset<T, ItemCarrinhoUpsertArgs<ExtArgs>>): Prisma__ItemCarrinhoClient<$Result.GetResult<Prisma.$ItemCarrinhoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ItemCarrinhos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemCarrinhoCountArgs} args - Arguments to filter ItemCarrinhos to count.
     * @example
     * // Count the number of ItemCarrinhos
     * const count = await prisma.itemCarrinho.count({
     *   where: {
     *     // ... the filter for the ItemCarrinhos we want to count
     *   }
     * })
    **/
    count<T extends ItemCarrinhoCountArgs>(
      args?: Subset<T, ItemCarrinhoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ItemCarrinhoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ItemCarrinho.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemCarrinhoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ItemCarrinhoAggregateArgs>(args: Subset<T, ItemCarrinhoAggregateArgs>): Prisma.PrismaPromise<GetItemCarrinhoAggregateType<T>>

    /**
     * Group by ItemCarrinho.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemCarrinhoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ItemCarrinhoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ItemCarrinhoGroupByArgs['orderBy'] }
        : { orderBy?: ItemCarrinhoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ItemCarrinhoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetItemCarrinhoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ItemCarrinho model
   */
  readonly fields: ItemCarrinhoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ItemCarrinho.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ItemCarrinhoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    carrinho<T extends CarrinhoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CarrinhoDefaultArgs<ExtArgs>>): Prisma__CarrinhoClient<$Result.GetResult<Prisma.$CarrinhoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    produto<T extends ProdutoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProdutoDefaultArgs<ExtArgs>>): Prisma__ProdutoClient<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ItemCarrinho model
   */
  interface ItemCarrinhoFieldRefs {
    readonly id: FieldRef<"ItemCarrinho", 'Int'>
    readonly quantidade: FieldRef<"ItemCarrinho", 'Int'>
    readonly carrinhoId: FieldRef<"ItemCarrinho", 'Int'>
    readonly produtoId: FieldRef<"ItemCarrinho", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ItemCarrinho findUnique
   */
  export type ItemCarrinhoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemCarrinho
     */
    select?: ItemCarrinhoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemCarrinho
     */
    omit?: ItemCarrinhoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemCarrinhoInclude<ExtArgs> | null
    /**
     * Filter, which ItemCarrinho to fetch.
     */
    where: ItemCarrinhoWhereUniqueInput
  }

  /**
   * ItemCarrinho findUniqueOrThrow
   */
  export type ItemCarrinhoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemCarrinho
     */
    select?: ItemCarrinhoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemCarrinho
     */
    omit?: ItemCarrinhoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemCarrinhoInclude<ExtArgs> | null
    /**
     * Filter, which ItemCarrinho to fetch.
     */
    where: ItemCarrinhoWhereUniqueInput
  }

  /**
   * ItemCarrinho findFirst
   */
  export type ItemCarrinhoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemCarrinho
     */
    select?: ItemCarrinhoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemCarrinho
     */
    omit?: ItemCarrinhoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemCarrinhoInclude<ExtArgs> | null
    /**
     * Filter, which ItemCarrinho to fetch.
     */
    where?: ItemCarrinhoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemCarrinhos to fetch.
     */
    orderBy?: ItemCarrinhoOrderByWithRelationInput | ItemCarrinhoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ItemCarrinhos.
     */
    cursor?: ItemCarrinhoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemCarrinhos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemCarrinhos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ItemCarrinhos.
     */
    distinct?: ItemCarrinhoScalarFieldEnum | ItemCarrinhoScalarFieldEnum[]
  }

  /**
   * ItemCarrinho findFirstOrThrow
   */
  export type ItemCarrinhoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemCarrinho
     */
    select?: ItemCarrinhoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemCarrinho
     */
    omit?: ItemCarrinhoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemCarrinhoInclude<ExtArgs> | null
    /**
     * Filter, which ItemCarrinho to fetch.
     */
    where?: ItemCarrinhoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemCarrinhos to fetch.
     */
    orderBy?: ItemCarrinhoOrderByWithRelationInput | ItemCarrinhoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ItemCarrinhos.
     */
    cursor?: ItemCarrinhoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemCarrinhos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemCarrinhos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ItemCarrinhos.
     */
    distinct?: ItemCarrinhoScalarFieldEnum | ItemCarrinhoScalarFieldEnum[]
  }

  /**
   * ItemCarrinho findMany
   */
  export type ItemCarrinhoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemCarrinho
     */
    select?: ItemCarrinhoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemCarrinho
     */
    omit?: ItemCarrinhoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemCarrinhoInclude<ExtArgs> | null
    /**
     * Filter, which ItemCarrinhos to fetch.
     */
    where?: ItemCarrinhoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemCarrinhos to fetch.
     */
    orderBy?: ItemCarrinhoOrderByWithRelationInput | ItemCarrinhoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ItemCarrinhos.
     */
    cursor?: ItemCarrinhoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemCarrinhos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemCarrinhos.
     */
    skip?: number
    distinct?: ItemCarrinhoScalarFieldEnum | ItemCarrinhoScalarFieldEnum[]
  }

  /**
   * ItemCarrinho create
   */
  export type ItemCarrinhoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemCarrinho
     */
    select?: ItemCarrinhoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemCarrinho
     */
    omit?: ItemCarrinhoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemCarrinhoInclude<ExtArgs> | null
    /**
     * The data needed to create a ItemCarrinho.
     */
    data: XOR<ItemCarrinhoCreateInput, ItemCarrinhoUncheckedCreateInput>
  }

  /**
   * ItemCarrinho createMany
   */
  export type ItemCarrinhoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ItemCarrinhos.
     */
    data: ItemCarrinhoCreateManyInput | ItemCarrinhoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ItemCarrinho createManyAndReturn
   */
  export type ItemCarrinhoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemCarrinho
     */
    select?: ItemCarrinhoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ItemCarrinho
     */
    omit?: ItemCarrinhoOmit<ExtArgs> | null
    /**
     * The data used to create many ItemCarrinhos.
     */
    data: ItemCarrinhoCreateManyInput | ItemCarrinhoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemCarrinhoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ItemCarrinho update
   */
  export type ItemCarrinhoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemCarrinho
     */
    select?: ItemCarrinhoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemCarrinho
     */
    omit?: ItemCarrinhoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemCarrinhoInclude<ExtArgs> | null
    /**
     * The data needed to update a ItemCarrinho.
     */
    data: XOR<ItemCarrinhoUpdateInput, ItemCarrinhoUncheckedUpdateInput>
    /**
     * Choose, which ItemCarrinho to update.
     */
    where: ItemCarrinhoWhereUniqueInput
  }

  /**
   * ItemCarrinho updateMany
   */
  export type ItemCarrinhoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ItemCarrinhos.
     */
    data: XOR<ItemCarrinhoUpdateManyMutationInput, ItemCarrinhoUncheckedUpdateManyInput>
    /**
     * Filter which ItemCarrinhos to update
     */
    where?: ItemCarrinhoWhereInput
    /**
     * Limit how many ItemCarrinhos to update.
     */
    limit?: number
  }

  /**
   * ItemCarrinho updateManyAndReturn
   */
  export type ItemCarrinhoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemCarrinho
     */
    select?: ItemCarrinhoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ItemCarrinho
     */
    omit?: ItemCarrinhoOmit<ExtArgs> | null
    /**
     * The data used to update ItemCarrinhos.
     */
    data: XOR<ItemCarrinhoUpdateManyMutationInput, ItemCarrinhoUncheckedUpdateManyInput>
    /**
     * Filter which ItemCarrinhos to update
     */
    where?: ItemCarrinhoWhereInput
    /**
     * Limit how many ItemCarrinhos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemCarrinhoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ItemCarrinho upsert
   */
  export type ItemCarrinhoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemCarrinho
     */
    select?: ItemCarrinhoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemCarrinho
     */
    omit?: ItemCarrinhoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemCarrinhoInclude<ExtArgs> | null
    /**
     * The filter to search for the ItemCarrinho to update in case it exists.
     */
    where: ItemCarrinhoWhereUniqueInput
    /**
     * In case the ItemCarrinho found by the `where` argument doesn't exist, create a new ItemCarrinho with this data.
     */
    create: XOR<ItemCarrinhoCreateInput, ItemCarrinhoUncheckedCreateInput>
    /**
     * In case the ItemCarrinho was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ItemCarrinhoUpdateInput, ItemCarrinhoUncheckedUpdateInput>
  }

  /**
   * ItemCarrinho delete
   */
  export type ItemCarrinhoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemCarrinho
     */
    select?: ItemCarrinhoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemCarrinho
     */
    omit?: ItemCarrinhoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemCarrinhoInclude<ExtArgs> | null
    /**
     * Filter which ItemCarrinho to delete.
     */
    where: ItemCarrinhoWhereUniqueInput
  }

  /**
   * ItemCarrinho deleteMany
   */
  export type ItemCarrinhoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ItemCarrinhos to delete
     */
    where?: ItemCarrinhoWhereInput
    /**
     * Limit how many ItemCarrinhos to delete.
     */
    limit?: number
  }

  /**
   * ItemCarrinho without action
   */
  export type ItemCarrinhoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemCarrinho
     */
    select?: ItemCarrinhoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemCarrinho
     */
    omit?: ItemCarrinhoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemCarrinhoInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UsuarioScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    email: 'email',
    senha: 'senha',
    telefone: 'telefone',
    role: 'role',
    criadoEm: 'criadoEm'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const EnderecoScalarFieldEnum: {
    id: 'id',
    rua: 'rua',
    numero: 'numero',
    bairro: 'bairro',
    cidade: 'cidade',
    estado: 'estado',
    cep: 'cep',
    usuarioId: 'usuarioId'
  };

  export type EnderecoScalarFieldEnum = (typeof EnderecoScalarFieldEnum)[keyof typeof EnderecoScalarFieldEnum]


  export const CategoriaScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    descricao: 'descricao'
  };

  export type CategoriaScalarFieldEnum = (typeof CategoriaScalarFieldEnum)[keyof typeof CategoriaScalarFieldEnum]


  export const ProdutoScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    descricao: 'descricao',
    preco: 'preco',
    imagemUrl: 'imagemUrl',
    disponivel: 'disponivel',
    categoriaId: 'categoriaId'
  };

  export type ProdutoScalarFieldEnum = (typeof ProdutoScalarFieldEnum)[keyof typeof ProdutoScalarFieldEnum]


  export const PedidoScalarFieldEnum: {
    id: 'id',
    status: 'status',
    tipo: 'tipo',
    total: 'total',
    criadoEm: 'criadoEm',
    usuarioId: 'usuarioId',
    enderecoId: 'enderecoId'
  };

  export type PedidoScalarFieldEnum = (typeof PedidoScalarFieldEnum)[keyof typeof PedidoScalarFieldEnum]


  export const ItemPedidoScalarFieldEnum: {
    id: 'id',
    quantidade: 'quantidade',
    precoUnitario: 'precoUnitario',
    pedidoId: 'pedidoId',
    produtoId: 'produtoId'
  };

  export type ItemPedidoScalarFieldEnum = (typeof ItemPedidoScalarFieldEnum)[keyof typeof ItemPedidoScalarFieldEnum]


  export const PagamentoScalarFieldEnum: {
    id: 'id',
    forma: 'forma',
    status: 'status',
    valor: 'valor',
    externalId: 'externalId',
    pedidoId: 'pedidoId'
  };

  export type PagamentoScalarFieldEnum = (typeof PagamentoScalarFieldEnum)[keyof typeof PagamentoScalarFieldEnum]


  export const EntregaScalarFieldEnum: {
    id: 'id',
    status: 'status',
    previsao: 'previsao',
    codigoRastreio: 'codigoRastreio',
    pedidoId: 'pedidoId'
  };

  export type EntregaScalarFieldEnum = (typeof EntregaScalarFieldEnum)[keyof typeof EntregaScalarFieldEnum]


  export const CarrinhoScalarFieldEnum: {
    id: 'id',
    usuarioId: 'usuarioId'
  };

  export type CarrinhoScalarFieldEnum = (typeof CarrinhoScalarFieldEnum)[keyof typeof CarrinhoScalarFieldEnum]


  export const ItemCarrinhoScalarFieldEnum: {
    id: 'id',
    quantidade: 'quantidade',
    carrinhoId: 'carrinhoId',
    produtoId: 'produtoId'
  };

  export type ItemCarrinhoScalarFieldEnum = (typeof ItemCarrinhoScalarFieldEnum)[keyof typeof ItemCarrinhoScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'StatusPedido'
   */
  export type EnumStatusPedidoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusPedido'>
    


  /**
   * Reference to a field of type 'StatusPedido[]'
   */
  export type ListEnumStatusPedidoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusPedido[]'>
    


  /**
   * Reference to a field of type 'TipoPedido'
   */
  export type EnumTipoPedidoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoPedido'>
    


  /**
   * Reference to a field of type 'TipoPedido[]'
   */
  export type ListEnumTipoPedidoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoPedido[]'>
    


  /**
   * Reference to a field of type 'FormaPagamento'
   */
  export type EnumFormaPagamentoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FormaPagamento'>
    


  /**
   * Reference to a field of type 'FormaPagamento[]'
   */
  export type ListEnumFormaPagamentoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FormaPagamento[]'>
    


  /**
   * Reference to a field of type 'StatusPagamento'
   */
  export type EnumStatusPagamentoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusPagamento'>
    


  /**
   * Reference to a field of type 'StatusPagamento[]'
   */
  export type ListEnumStatusPagamentoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusPagamento[]'>
    


  /**
   * Reference to a field of type 'StatusEntrega'
   */
  export type EnumStatusEntregaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusEntrega'>
    


  /**
   * Reference to a field of type 'StatusEntrega[]'
   */
  export type ListEnumStatusEntregaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusEntrega[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UsuarioWhereInput = {
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    id?: IntFilter<"Usuario"> | number
    nome?: StringFilter<"Usuario"> | string
    email?: StringFilter<"Usuario"> | string
    senha?: StringFilter<"Usuario"> | string
    telefone?: StringNullableFilter<"Usuario"> | string | null
    role?: EnumRoleFilter<"Usuario"> | $Enums.Role
    criadoEm?: DateTimeFilter<"Usuario"> | Date | string
    enderecos?: EnderecoListRelationFilter
    pedidos?: PedidoListRelationFilter
    carrinho?: XOR<CarrinhoNullableScalarRelationFilter, CarrinhoWhereInput> | null
  }

  export type UsuarioOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    telefone?: SortOrderInput | SortOrder
    role?: SortOrder
    criadoEm?: SortOrder
    enderecos?: EnderecoOrderByRelationAggregateInput
    pedidos?: PedidoOrderByRelationAggregateInput
    carrinho?: CarrinhoOrderByWithRelationInput
  }

  export type UsuarioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    nome?: StringFilter<"Usuario"> | string
    senha?: StringFilter<"Usuario"> | string
    telefone?: StringNullableFilter<"Usuario"> | string | null
    role?: EnumRoleFilter<"Usuario"> | $Enums.Role
    criadoEm?: DateTimeFilter<"Usuario"> | Date | string
    enderecos?: EnderecoListRelationFilter
    pedidos?: PedidoListRelationFilter
    carrinho?: XOR<CarrinhoNullableScalarRelationFilter, CarrinhoWhereInput> | null
  }, "id" | "email">

  export type UsuarioOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    telefone?: SortOrderInput | SortOrder
    role?: SortOrder
    criadoEm?: SortOrder
    _count?: UsuarioCountOrderByAggregateInput
    _avg?: UsuarioAvgOrderByAggregateInput
    _max?: UsuarioMaxOrderByAggregateInput
    _min?: UsuarioMinOrderByAggregateInput
    _sum?: UsuarioSumOrderByAggregateInput
  }

  export type UsuarioScalarWhereWithAggregatesInput = {
    AND?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    OR?: UsuarioScalarWhereWithAggregatesInput[]
    NOT?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Usuario"> | number
    nome?: StringWithAggregatesFilter<"Usuario"> | string
    email?: StringWithAggregatesFilter<"Usuario"> | string
    senha?: StringWithAggregatesFilter<"Usuario"> | string
    telefone?: StringNullableWithAggregatesFilter<"Usuario"> | string | null
    role?: EnumRoleWithAggregatesFilter<"Usuario"> | $Enums.Role
    criadoEm?: DateTimeWithAggregatesFilter<"Usuario"> | Date | string
  }

  export type EnderecoWhereInput = {
    AND?: EnderecoWhereInput | EnderecoWhereInput[]
    OR?: EnderecoWhereInput[]
    NOT?: EnderecoWhereInput | EnderecoWhereInput[]
    id?: IntFilter<"Endereco"> | number
    rua?: StringFilter<"Endereco"> | string
    numero?: StringFilter<"Endereco"> | string
    bairro?: StringFilter<"Endereco"> | string
    cidade?: StringFilter<"Endereco"> | string
    estado?: StringFilter<"Endereco"> | string
    cep?: StringFilter<"Endereco"> | string
    usuarioId?: IntFilter<"Endereco"> | number
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    pedidos?: PedidoListRelationFilter
  }

  export type EnderecoOrderByWithRelationInput = {
    id?: SortOrder
    rua?: SortOrder
    numero?: SortOrder
    bairro?: SortOrder
    cidade?: SortOrder
    estado?: SortOrder
    cep?: SortOrder
    usuarioId?: SortOrder
    usuario?: UsuarioOrderByWithRelationInput
    pedidos?: PedidoOrderByRelationAggregateInput
  }

  export type EnderecoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EnderecoWhereInput | EnderecoWhereInput[]
    OR?: EnderecoWhereInput[]
    NOT?: EnderecoWhereInput | EnderecoWhereInput[]
    rua?: StringFilter<"Endereco"> | string
    numero?: StringFilter<"Endereco"> | string
    bairro?: StringFilter<"Endereco"> | string
    cidade?: StringFilter<"Endereco"> | string
    estado?: StringFilter<"Endereco"> | string
    cep?: StringFilter<"Endereco"> | string
    usuarioId?: IntFilter<"Endereco"> | number
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    pedidos?: PedidoListRelationFilter
  }, "id">

  export type EnderecoOrderByWithAggregationInput = {
    id?: SortOrder
    rua?: SortOrder
    numero?: SortOrder
    bairro?: SortOrder
    cidade?: SortOrder
    estado?: SortOrder
    cep?: SortOrder
    usuarioId?: SortOrder
    _count?: EnderecoCountOrderByAggregateInput
    _avg?: EnderecoAvgOrderByAggregateInput
    _max?: EnderecoMaxOrderByAggregateInput
    _min?: EnderecoMinOrderByAggregateInput
    _sum?: EnderecoSumOrderByAggregateInput
  }

  export type EnderecoScalarWhereWithAggregatesInput = {
    AND?: EnderecoScalarWhereWithAggregatesInput | EnderecoScalarWhereWithAggregatesInput[]
    OR?: EnderecoScalarWhereWithAggregatesInput[]
    NOT?: EnderecoScalarWhereWithAggregatesInput | EnderecoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Endereco"> | number
    rua?: StringWithAggregatesFilter<"Endereco"> | string
    numero?: StringWithAggregatesFilter<"Endereco"> | string
    bairro?: StringWithAggregatesFilter<"Endereco"> | string
    cidade?: StringWithAggregatesFilter<"Endereco"> | string
    estado?: StringWithAggregatesFilter<"Endereco"> | string
    cep?: StringWithAggregatesFilter<"Endereco"> | string
    usuarioId?: IntWithAggregatesFilter<"Endereco"> | number
  }

  export type CategoriaWhereInput = {
    AND?: CategoriaWhereInput | CategoriaWhereInput[]
    OR?: CategoriaWhereInput[]
    NOT?: CategoriaWhereInput | CategoriaWhereInput[]
    id?: IntFilter<"Categoria"> | number
    nome?: StringFilter<"Categoria"> | string
    descricao?: StringNullableFilter<"Categoria"> | string | null
    produtos?: ProdutoListRelationFilter
  }

  export type CategoriaOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrderInput | SortOrder
    produtos?: ProdutoOrderByRelationAggregateInput
  }

  export type CategoriaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CategoriaWhereInput | CategoriaWhereInput[]
    OR?: CategoriaWhereInput[]
    NOT?: CategoriaWhereInput | CategoriaWhereInput[]
    nome?: StringFilter<"Categoria"> | string
    descricao?: StringNullableFilter<"Categoria"> | string | null
    produtos?: ProdutoListRelationFilter
  }, "id">

  export type CategoriaOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrderInput | SortOrder
    _count?: CategoriaCountOrderByAggregateInput
    _avg?: CategoriaAvgOrderByAggregateInput
    _max?: CategoriaMaxOrderByAggregateInput
    _min?: CategoriaMinOrderByAggregateInput
    _sum?: CategoriaSumOrderByAggregateInput
  }

  export type CategoriaScalarWhereWithAggregatesInput = {
    AND?: CategoriaScalarWhereWithAggregatesInput | CategoriaScalarWhereWithAggregatesInput[]
    OR?: CategoriaScalarWhereWithAggregatesInput[]
    NOT?: CategoriaScalarWhereWithAggregatesInput | CategoriaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Categoria"> | number
    nome?: StringWithAggregatesFilter<"Categoria"> | string
    descricao?: StringNullableWithAggregatesFilter<"Categoria"> | string | null
  }

  export type ProdutoWhereInput = {
    AND?: ProdutoWhereInput | ProdutoWhereInput[]
    OR?: ProdutoWhereInput[]
    NOT?: ProdutoWhereInput | ProdutoWhereInput[]
    id?: IntFilter<"Produto"> | number
    nome?: StringFilter<"Produto"> | string
    descricao?: StringNullableFilter<"Produto"> | string | null
    preco?: DecimalFilter<"Produto"> | Decimal | DecimalJsLike | number | string
    imagemUrl?: StringNullableFilter<"Produto"> | string | null
    disponivel?: BoolFilter<"Produto"> | boolean
    categoriaId?: IntFilter<"Produto"> | number
    categoria?: XOR<CategoriaScalarRelationFilter, CategoriaWhereInput>
    itensPedido?: ItemPedidoListRelationFilter
    itensCarrinho?: ItemCarrinhoListRelationFilter
  }

  export type ProdutoOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrderInput | SortOrder
    preco?: SortOrder
    imagemUrl?: SortOrderInput | SortOrder
    disponivel?: SortOrder
    categoriaId?: SortOrder
    categoria?: CategoriaOrderByWithRelationInput
    itensPedido?: ItemPedidoOrderByRelationAggregateInput
    itensCarrinho?: ItemCarrinhoOrderByRelationAggregateInput
  }

  export type ProdutoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProdutoWhereInput | ProdutoWhereInput[]
    OR?: ProdutoWhereInput[]
    NOT?: ProdutoWhereInput | ProdutoWhereInput[]
    nome?: StringFilter<"Produto"> | string
    descricao?: StringNullableFilter<"Produto"> | string | null
    preco?: DecimalFilter<"Produto"> | Decimal | DecimalJsLike | number | string
    imagemUrl?: StringNullableFilter<"Produto"> | string | null
    disponivel?: BoolFilter<"Produto"> | boolean
    categoriaId?: IntFilter<"Produto"> | number
    categoria?: XOR<CategoriaScalarRelationFilter, CategoriaWhereInput>
    itensPedido?: ItemPedidoListRelationFilter
    itensCarrinho?: ItemCarrinhoListRelationFilter
  }, "id">

  export type ProdutoOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrderInput | SortOrder
    preco?: SortOrder
    imagemUrl?: SortOrderInput | SortOrder
    disponivel?: SortOrder
    categoriaId?: SortOrder
    _count?: ProdutoCountOrderByAggregateInput
    _avg?: ProdutoAvgOrderByAggregateInput
    _max?: ProdutoMaxOrderByAggregateInput
    _min?: ProdutoMinOrderByAggregateInput
    _sum?: ProdutoSumOrderByAggregateInput
  }

  export type ProdutoScalarWhereWithAggregatesInput = {
    AND?: ProdutoScalarWhereWithAggregatesInput | ProdutoScalarWhereWithAggregatesInput[]
    OR?: ProdutoScalarWhereWithAggregatesInput[]
    NOT?: ProdutoScalarWhereWithAggregatesInput | ProdutoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Produto"> | number
    nome?: StringWithAggregatesFilter<"Produto"> | string
    descricao?: StringNullableWithAggregatesFilter<"Produto"> | string | null
    preco?: DecimalWithAggregatesFilter<"Produto"> | Decimal | DecimalJsLike | number | string
    imagemUrl?: StringNullableWithAggregatesFilter<"Produto"> | string | null
    disponivel?: BoolWithAggregatesFilter<"Produto"> | boolean
    categoriaId?: IntWithAggregatesFilter<"Produto"> | number
  }

  export type PedidoWhereInput = {
    AND?: PedidoWhereInput | PedidoWhereInput[]
    OR?: PedidoWhereInput[]
    NOT?: PedidoWhereInput | PedidoWhereInput[]
    id?: IntFilter<"Pedido"> | number
    status?: EnumStatusPedidoFilter<"Pedido"> | $Enums.StatusPedido
    tipo?: EnumTipoPedidoFilter<"Pedido"> | $Enums.TipoPedido
    total?: DecimalFilter<"Pedido"> | Decimal | DecimalJsLike | number | string
    criadoEm?: DateTimeFilter<"Pedido"> | Date | string
    usuarioId?: IntFilter<"Pedido"> | number
    enderecoId?: IntNullableFilter<"Pedido"> | number | null
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    endereco?: XOR<EnderecoNullableScalarRelationFilter, EnderecoWhereInput> | null
    itens?: ItemPedidoListRelationFilter
    pagamento?: XOR<PagamentoNullableScalarRelationFilter, PagamentoWhereInput> | null
    entrega?: XOR<EntregaNullableScalarRelationFilter, EntregaWhereInput> | null
  }

  export type PedidoOrderByWithRelationInput = {
    id?: SortOrder
    status?: SortOrder
    tipo?: SortOrder
    total?: SortOrder
    criadoEm?: SortOrder
    usuarioId?: SortOrder
    enderecoId?: SortOrderInput | SortOrder
    usuario?: UsuarioOrderByWithRelationInput
    endereco?: EnderecoOrderByWithRelationInput
    itens?: ItemPedidoOrderByRelationAggregateInput
    pagamento?: PagamentoOrderByWithRelationInput
    entrega?: EntregaOrderByWithRelationInput
  }

  export type PedidoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PedidoWhereInput | PedidoWhereInput[]
    OR?: PedidoWhereInput[]
    NOT?: PedidoWhereInput | PedidoWhereInput[]
    status?: EnumStatusPedidoFilter<"Pedido"> | $Enums.StatusPedido
    tipo?: EnumTipoPedidoFilter<"Pedido"> | $Enums.TipoPedido
    total?: DecimalFilter<"Pedido"> | Decimal | DecimalJsLike | number | string
    criadoEm?: DateTimeFilter<"Pedido"> | Date | string
    usuarioId?: IntFilter<"Pedido"> | number
    enderecoId?: IntNullableFilter<"Pedido"> | number | null
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    endereco?: XOR<EnderecoNullableScalarRelationFilter, EnderecoWhereInput> | null
    itens?: ItemPedidoListRelationFilter
    pagamento?: XOR<PagamentoNullableScalarRelationFilter, PagamentoWhereInput> | null
    entrega?: XOR<EntregaNullableScalarRelationFilter, EntregaWhereInput> | null
  }, "id">

  export type PedidoOrderByWithAggregationInput = {
    id?: SortOrder
    status?: SortOrder
    tipo?: SortOrder
    total?: SortOrder
    criadoEm?: SortOrder
    usuarioId?: SortOrder
    enderecoId?: SortOrderInput | SortOrder
    _count?: PedidoCountOrderByAggregateInput
    _avg?: PedidoAvgOrderByAggregateInput
    _max?: PedidoMaxOrderByAggregateInput
    _min?: PedidoMinOrderByAggregateInput
    _sum?: PedidoSumOrderByAggregateInput
  }

  export type PedidoScalarWhereWithAggregatesInput = {
    AND?: PedidoScalarWhereWithAggregatesInput | PedidoScalarWhereWithAggregatesInput[]
    OR?: PedidoScalarWhereWithAggregatesInput[]
    NOT?: PedidoScalarWhereWithAggregatesInput | PedidoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Pedido"> | number
    status?: EnumStatusPedidoWithAggregatesFilter<"Pedido"> | $Enums.StatusPedido
    tipo?: EnumTipoPedidoWithAggregatesFilter<"Pedido"> | $Enums.TipoPedido
    total?: DecimalWithAggregatesFilter<"Pedido"> | Decimal | DecimalJsLike | number | string
    criadoEm?: DateTimeWithAggregatesFilter<"Pedido"> | Date | string
    usuarioId?: IntWithAggregatesFilter<"Pedido"> | number
    enderecoId?: IntNullableWithAggregatesFilter<"Pedido"> | number | null
  }

  export type ItemPedidoWhereInput = {
    AND?: ItemPedidoWhereInput | ItemPedidoWhereInput[]
    OR?: ItemPedidoWhereInput[]
    NOT?: ItemPedidoWhereInput | ItemPedidoWhereInput[]
    id?: IntFilter<"ItemPedido"> | number
    quantidade?: IntFilter<"ItemPedido"> | number
    precoUnitario?: DecimalFilter<"ItemPedido"> | Decimal | DecimalJsLike | number | string
    pedidoId?: IntFilter<"ItemPedido"> | number
    produtoId?: IntFilter<"ItemPedido"> | number
    pedido?: XOR<PedidoScalarRelationFilter, PedidoWhereInput>
    produto?: XOR<ProdutoScalarRelationFilter, ProdutoWhereInput>
  }

  export type ItemPedidoOrderByWithRelationInput = {
    id?: SortOrder
    quantidade?: SortOrder
    precoUnitario?: SortOrder
    pedidoId?: SortOrder
    produtoId?: SortOrder
    pedido?: PedidoOrderByWithRelationInput
    produto?: ProdutoOrderByWithRelationInput
  }

  export type ItemPedidoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ItemPedidoWhereInput | ItemPedidoWhereInput[]
    OR?: ItemPedidoWhereInput[]
    NOT?: ItemPedidoWhereInput | ItemPedidoWhereInput[]
    quantidade?: IntFilter<"ItemPedido"> | number
    precoUnitario?: DecimalFilter<"ItemPedido"> | Decimal | DecimalJsLike | number | string
    pedidoId?: IntFilter<"ItemPedido"> | number
    produtoId?: IntFilter<"ItemPedido"> | number
    pedido?: XOR<PedidoScalarRelationFilter, PedidoWhereInput>
    produto?: XOR<ProdutoScalarRelationFilter, ProdutoWhereInput>
  }, "id">

  export type ItemPedidoOrderByWithAggregationInput = {
    id?: SortOrder
    quantidade?: SortOrder
    precoUnitario?: SortOrder
    pedidoId?: SortOrder
    produtoId?: SortOrder
    _count?: ItemPedidoCountOrderByAggregateInput
    _avg?: ItemPedidoAvgOrderByAggregateInput
    _max?: ItemPedidoMaxOrderByAggregateInput
    _min?: ItemPedidoMinOrderByAggregateInput
    _sum?: ItemPedidoSumOrderByAggregateInput
  }

  export type ItemPedidoScalarWhereWithAggregatesInput = {
    AND?: ItemPedidoScalarWhereWithAggregatesInput | ItemPedidoScalarWhereWithAggregatesInput[]
    OR?: ItemPedidoScalarWhereWithAggregatesInput[]
    NOT?: ItemPedidoScalarWhereWithAggregatesInput | ItemPedidoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ItemPedido"> | number
    quantidade?: IntWithAggregatesFilter<"ItemPedido"> | number
    precoUnitario?: DecimalWithAggregatesFilter<"ItemPedido"> | Decimal | DecimalJsLike | number | string
    pedidoId?: IntWithAggregatesFilter<"ItemPedido"> | number
    produtoId?: IntWithAggregatesFilter<"ItemPedido"> | number
  }

  export type PagamentoWhereInput = {
    AND?: PagamentoWhereInput | PagamentoWhereInput[]
    OR?: PagamentoWhereInput[]
    NOT?: PagamentoWhereInput | PagamentoWhereInput[]
    id?: IntFilter<"Pagamento"> | number
    forma?: EnumFormaPagamentoFilter<"Pagamento"> | $Enums.FormaPagamento
    status?: EnumStatusPagamentoFilter<"Pagamento"> | $Enums.StatusPagamento
    valor?: DecimalFilter<"Pagamento"> | Decimal | DecimalJsLike | number | string
    externalId?: StringNullableFilter<"Pagamento"> | string | null
    pedidoId?: IntFilter<"Pagamento"> | number
    pedido?: XOR<PedidoScalarRelationFilter, PedidoWhereInput>
  }

  export type PagamentoOrderByWithRelationInput = {
    id?: SortOrder
    forma?: SortOrder
    status?: SortOrder
    valor?: SortOrder
    externalId?: SortOrderInput | SortOrder
    pedidoId?: SortOrder
    pedido?: PedidoOrderByWithRelationInput
  }

  export type PagamentoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    pedidoId?: number
    AND?: PagamentoWhereInput | PagamentoWhereInput[]
    OR?: PagamentoWhereInput[]
    NOT?: PagamentoWhereInput | PagamentoWhereInput[]
    forma?: EnumFormaPagamentoFilter<"Pagamento"> | $Enums.FormaPagamento
    status?: EnumStatusPagamentoFilter<"Pagamento"> | $Enums.StatusPagamento
    valor?: DecimalFilter<"Pagamento"> | Decimal | DecimalJsLike | number | string
    externalId?: StringNullableFilter<"Pagamento"> | string | null
    pedido?: XOR<PedidoScalarRelationFilter, PedidoWhereInput>
  }, "id" | "pedidoId">

  export type PagamentoOrderByWithAggregationInput = {
    id?: SortOrder
    forma?: SortOrder
    status?: SortOrder
    valor?: SortOrder
    externalId?: SortOrderInput | SortOrder
    pedidoId?: SortOrder
    _count?: PagamentoCountOrderByAggregateInput
    _avg?: PagamentoAvgOrderByAggregateInput
    _max?: PagamentoMaxOrderByAggregateInput
    _min?: PagamentoMinOrderByAggregateInput
    _sum?: PagamentoSumOrderByAggregateInput
  }

  export type PagamentoScalarWhereWithAggregatesInput = {
    AND?: PagamentoScalarWhereWithAggregatesInput | PagamentoScalarWhereWithAggregatesInput[]
    OR?: PagamentoScalarWhereWithAggregatesInput[]
    NOT?: PagamentoScalarWhereWithAggregatesInput | PagamentoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Pagamento"> | number
    forma?: EnumFormaPagamentoWithAggregatesFilter<"Pagamento"> | $Enums.FormaPagamento
    status?: EnumStatusPagamentoWithAggregatesFilter<"Pagamento"> | $Enums.StatusPagamento
    valor?: DecimalWithAggregatesFilter<"Pagamento"> | Decimal | DecimalJsLike | number | string
    externalId?: StringNullableWithAggregatesFilter<"Pagamento"> | string | null
    pedidoId?: IntWithAggregatesFilter<"Pagamento"> | number
  }

  export type EntregaWhereInput = {
    AND?: EntregaWhereInput | EntregaWhereInput[]
    OR?: EntregaWhereInput[]
    NOT?: EntregaWhereInput | EntregaWhereInput[]
    id?: IntFilter<"Entrega"> | number
    status?: EnumStatusEntregaFilter<"Entrega"> | $Enums.StatusEntrega
    previsao?: DateTimeNullableFilter<"Entrega"> | Date | string | null
    codigoRastreio?: StringNullableFilter<"Entrega"> | string | null
    pedidoId?: IntFilter<"Entrega"> | number
    pedido?: XOR<PedidoScalarRelationFilter, PedidoWhereInput>
  }

  export type EntregaOrderByWithRelationInput = {
    id?: SortOrder
    status?: SortOrder
    previsao?: SortOrderInput | SortOrder
    codigoRastreio?: SortOrderInput | SortOrder
    pedidoId?: SortOrder
    pedido?: PedidoOrderByWithRelationInput
  }

  export type EntregaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    pedidoId?: number
    AND?: EntregaWhereInput | EntregaWhereInput[]
    OR?: EntregaWhereInput[]
    NOT?: EntregaWhereInput | EntregaWhereInput[]
    status?: EnumStatusEntregaFilter<"Entrega"> | $Enums.StatusEntrega
    previsao?: DateTimeNullableFilter<"Entrega"> | Date | string | null
    codigoRastreio?: StringNullableFilter<"Entrega"> | string | null
    pedido?: XOR<PedidoScalarRelationFilter, PedidoWhereInput>
  }, "id" | "pedidoId">

  export type EntregaOrderByWithAggregationInput = {
    id?: SortOrder
    status?: SortOrder
    previsao?: SortOrderInput | SortOrder
    codigoRastreio?: SortOrderInput | SortOrder
    pedidoId?: SortOrder
    _count?: EntregaCountOrderByAggregateInput
    _avg?: EntregaAvgOrderByAggregateInput
    _max?: EntregaMaxOrderByAggregateInput
    _min?: EntregaMinOrderByAggregateInput
    _sum?: EntregaSumOrderByAggregateInput
  }

  export type EntregaScalarWhereWithAggregatesInput = {
    AND?: EntregaScalarWhereWithAggregatesInput | EntregaScalarWhereWithAggregatesInput[]
    OR?: EntregaScalarWhereWithAggregatesInput[]
    NOT?: EntregaScalarWhereWithAggregatesInput | EntregaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Entrega"> | number
    status?: EnumStatusEntregaWithAggregatesFilter<"Entrega"> | $Enums.StatusEntrega
    previsao?: DateTimeNullableWithAggregatesFilter<"Entrega"> | Date | string | null
    codigoRastreio?: StringNullableWithAggregatesFilter<"Entrega"> | string | null
    pedidoId?: IntWithAggregatesFilter<"Entrega"> | number
  }

  export type CarrinhoWhereInput = {
    AND?: CarrinhoWhereInput | CarrinhoWhereInput[]
    OR?: CarrinhoWhereInput[]
    NOT?: CarrinhoWhereInput | CarrinhoWhereInput[]
    id?: IntFilter<"Carrinho"> | number
    usuarioId?: IntFilter<"Carrinho"> | number
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    itens?: ItemCarrinhoListRelationFilter
  }

  export type CarrinhoOrderByWithRelationInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    usuario?: UsuarioOrderByWithRelationInput
    itens?: ItemCarrinhoOrderByRelationAggregateInput
  }

  export type CarrinhoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    usuarioId?: number
    AND?: CarrinhoWhereInput | CarrinhoWhereInput[]
    OR?: CarrinhoWhereInput[]
    NOT?: CarrinhoWhereInput | CarrinhoWhereInput[]
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    itens?: ItemCarrinhoListRelationFilter
  }, "id" | "usuarioId">

  export type CarrinhoOrderByWithAggregationInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    _count?: CarrinhoCountOrderByAggregateInput
    _avg?: CarrinhoAvgOrderByAggregateInput
    _max?: CarrinhoMaxOrderByAggregateInput
    _min?: CarrinhoMinOrderByAggregateInput
    _sum?: CarrinhoSumOrderByAggregateInput
  }

  export type CarrinhoScalarWhereWithAggregatesInput = {
    AND?: CarrinhoScalarWhereWithAggregatesInput | CarrinhoScalarWhereWithAggregatesInput[]
    OR?: CarrinhoScalarWhereWithAggregatesInput[]
    NOT?: CarrinhoScalarWhereWithAggregatesInput | CarrinhoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Carrinho"> | number
    usuarioId?: IntWithAggregatesFilter<"Carrinho"> | number
  }

  export type ItemCarrinhoWhereInput = {
    AND?: ItemCarrinhoWhereInput | ItemCarrinhoWhereInput[]
    OR?: ItemCarrinhoWhereInput[]
    NOT?: ItemCarrinhoWhereInput | ItemCarrinhoWhereInput[]
    id?: IntFilter<"ItemCarrinho"> | number
    quantidade?: IntFilter<"ItemCarrinho"> | number
    carrinhoId?: IntFilter<"ItemCarrinho"> | number
    produtoId?: IntFilter<"ItemCarrinho"> | number
    carrinho?: XOR<CarrinhoScalarRelationFilter, CarrinhoWhereInput>
    produto?: XOR<ProdutoScalarRelationFilter, ProdutoWhereInput>
  }

  export type ItemCarrinhoOrderByWithRelationInput = {
    id?: SortOrder
    quantidade?: SortOrder
    carrinhoId?: SortOrder
    produtoId?: SortOrder
    carrinho?: CarrinhoOrderByWithRelationInput
    produto?: ProdutoOrderByWithRelationInput
  }

  export type ItemCarrinhoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    carrinhoId_produtoId?: ItemCarrinhoCarrinhoIdProdutoIdCompoundUniqueInput
    AND?: ItemCarrinhoWhereInput | ItemCarrinhoWhereInput[]
    OR?: ItemCarrinhoWhereInput[]
    NOT?: ItemCarrinhoWhereInput | ItemCarrinhoWhereInput[]
    quantidade?: IntFilter<"ItemCarrinho"> | number
    carrinhoId?: IntFilter<"ItemCarrinho"> | number
    produtoId?: IntFilter<"ItemCarrinho"> | number
    carrinho?: XOR<CarrinhoScalarRelationFilter, CarrinhoWhereInput>
    produto?: XOR<ProdutoScalarRelationFilter, ProdutoWhereInput>
  }, "id" | "carrinhoId_produtoId">

  export type ItemCarrinhoOrderByWithAggregationInput = {
    id?: SortOrder
    quantidade?: SortOrder
    carrinhoId?: SortOrder
    produtoId?: SortOrder
    _count?: ItemCarrinhoCountOrderByAggregateInput
    _avg?: ItemCarrinhoAvgOrderByAggregateInput
    _max?: ItemCarrinhoMaxOrderByAggregateInput
    _min?: ItemCarrinhoMinOrderByAggregateInput
    _sum?: ItemCarrinhoSumOrderByAggregateInput
  }

  export type ItemCarrinhoScalarWhereWithAggregatesInput = {
    AND?: ItemCarrinhoScalarWhereWithAggregatesInput | ItemCarrinhoScalarWhereWithAggregatesInput[]
    OR?: ItemCarrinhoScalarWhereWithAggregatesInput[]
    NOT?: ItemCarrinhoScalarWhereWithAggregatesInput | ItemCarrinhoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ItemCarrinho"> | number
    quantidade?: IntWithAggregatesFilter<"ItemCarrinho"> | number
    carrinhoId?: IntWithAggregatesFilter<"ItemCarrinho"> | number
    produtoId?: IntWithAggregatesFilter<"ItemCarrinho"> | number
  }

  export type UsuarioCreateInput = {
    nome: string
    email: string
    senha: string
    telefone?: string | null
    role?: $Enums.Role
    criadoEm?: Date | string
    enderecos?: EnderecoCreateNestedManyWithoutUsuarioInput
    pedidos?: PedidoCreateNestedManyWithoutUsuarioInput
    carrinho?: CarrinhoCreateNestedOneWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateInput = {
    id?: number
    nome: string
    email: string
    senha: string
    telefone?: string | null
    role?: $Enums.Role
    criadoEm?: Date | string
    enderecos?: EnderecoUncheckedCreateNestedManyWithoutUsuarioInput
    pedidos?: PedidoUncheckedCreateNestedManyWithoutUsuarioInput
    carrinho?: CarrinhoUncheckedCreateNestedOneWithoutUsuarioInput
  }

  export type UsuarioUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    enderecos?: EnderecoUpdateManyWithoutUsuarioNestedInput
    pedidos?: PedidoUpdateManyWithoutUsuarioNestedInput
    carrinho?: CarrinhoUpdateOneWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    enderecos?: EnderecoUncheckedUpdateManyWithoutUsuarioNestedInput
    pedidos?: PedidoUncheckedUpdateManyWithoutUsuarioNestedInput
    carrinho?: CarrinhoUncheckedUpdateOneWithoutUsuarioNestedInput
  }

  export type UsuarioCreateManyInput = {
    id?: number
    nome: string
    email: string
    senha: string
    telefone?: string | null
    role?: $Enums.Role
    criadoEm?: Date | string
  }

  export type UsuarioUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnderecoCreateInput = {
    rua: string
    numero: string
    bairro: string
    cidade: string
    estado: string
    cep: string
    usuario: UsuarioCreateNestedOneWithoutEnderecosInput
    pedidos?: PedidoCreateNestedManyWithoutEnderecoInput
  }

  export type EnderecoUncheckedCreateInput = {
    id?: number
    rua: string
    numero: string
    bairro: string
    cidade: string
    estado: string
    cep: string
    usuarioId: number
    pedidos?: PedidoUncheckedCreateNestedManyWithoutEnderecoInput
  }

  export type EnderecoUpdateInput = {
    rua?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    bairro?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    cep?: StringFieldUpdateOperationsInput | string
    usuario?: UsuarioUpdateOneRequiredWithoutEnderecosNestedInput
    pedidos?: PedidoUpdateManyWithoutEnderecoNestedInput
  }

  export type EnderecoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    rua?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    bairro?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    cep?: StringFieldUpdateOperationsInput | string
    usuarioId?: IntFieldUpdateOperationsInput | number
    pedidos?: PedidoUncheckedUpdateManyWithoutEnderecoNestedInput
  }

  export type EnderecoCreateManyInput = {
    id?: number
    rua: string
    numero: string
    bairro: string
    cidade: string
    estado: string
    cep: string
    usuarioId: number
  }

  export type EnderecoUpdateManyMutationInput = {
    rua?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    bairro?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    cep?: StringFieldUpdateOperationsInput | string
  }

  export type EnderecoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    rua?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    bairro?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    cep?: StringFieldUpdateOperationsInput | string
    usuarioId?: IntFieldUpdateOperationsInput | number
  }

  export type CategoriaCreateInput = {
    nome: string
    descricao?: string | null
    produtos?: ProdutoCreateNestedManyWithoutCategoriaInput
  }

  export type CategoriaUncheckedCreateInput = {
    id?: number
    nome: string
    descricao?: string | null
    produtos?: ProdutoUncheckedCreateNestedManyWithoutCategoriaInput
  }

  export type CategoriaUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    produtos?: ProdutoUpdateManyWithoutCategoriaNestedInput
  }

  export type CategoriaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    produtos?: ProdutoUncheckedUpdateManyWithoutCategoriaNestedInput
  }

  export type CategoriaCreateManyInput = {
    id?: number
    nome: string
    descricao?: string | null
  }

  export type CategoriaUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CategoriaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProdutoCreateInput = {
    nome: string
    descricao?: string | null
    preco: Decimal | DecimalJsLike | number | string
    imagemUrl?: string | null
    disponivel?: boolean
    categoria: CategoriaCreateNestedOneWithoutProdutosInput
    itensPedido?: ItemPedidoCreateNestedManyWithoutProdutoInput
    itensCarrinho?: ItemCarrinhoCreateNestedManyWithoutProdutoInput
  }

  export type ProdutoUncheckedCreateInput = {
    id?: number
    nome: string
    descricao?: string | null
    preco: Decimal | DecimalJsLike | number | string
    imagemUrl?: string | null
    disponivel?: boolean
    categoriaId: number
    itensPedido?: ItemPedidoUncheckedCreateNestedManyWithoutProdutoInput
    itensCarrinho?: ItemCarrinhoUncheckedCreateNestedManyWithoutProdutoInput
  }

  export type ProdutoUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    preco?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    imagemUrl?: NullableStringFieldUpdateOperationsInput | string | null
    disponivel?: BoolFieldUpdateOperationsInput | boolean
    categoria?: CategoriaUpdateOneRequiredWithoutProdutosNestedInput
    itensPedido?: ItemPedidoUpdateManyWithoutProdutoNestedInput
    itensCarrinho?: ItemCarrinhoUpdateManyWithoutProdutoNestedInput
  }

  export type ProdutoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    preco?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    imagemUrl?: NullableStringFieldUpdateOperationsInput | string | null
    disponivel?: BoolFieldUpdateOperationsInput | boolean
    categoriaId?: IntFieldUpdateOperationsInput | number
    itensPedido?: ItemPedidoUncheckedUpdateManyWithoutProdutoNestedInput
    itensCarrinho?: ItemCarrinhoUncheckedUpdateManyWithoutProdutoNestedInput
  }

  export type ProdutoCreateManyInput = {
    id?: number
    nome: string
    descricao?: string | null
    preco: Decimal | DecimalJsLike | number | string
    imagemUrl?: string | null
    disponivel?: boolean
    categoriaId: number
  }

  export type ProdutoUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    preco?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    imagemUrl?: NullableStringFieldUpdateOperationsInput | string | null
    disponivel?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ProdutoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    preco?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    imagemUrl?: NullableStringFieldUpdateOperationsInput | string | null
    disponivel?: BoolFieldUpdateOperationsInput | boolean
    categoriaId?: IntFieldUpdateOperationsInput | number
  }

  export type PedidoCreateInput = {
    status?: $Enums.StatusPedido
    tipo: $Enums.TipoPedido
    total: Decimal | DecimalJsLike | number | string
    criadoEm?: Date | string
    usuario: UsuarioCreateNestedOneWithoutPedidosInput
    endereco?: EnderecoCreateNestedOneWithoutPedidosInput
    itens?: ItemPedidoCreateNestedManyWithoutPedidoInput
    pagamento?: PagamentoCreateNestedOneWithoutPedidoInput
    entrega?: EntregaCreateNestedOneWithoutPedidoInput
  }

  export type PedidoUncheckedCreateInput = {
    id?: number
    status?: $Enums.StatusPedido
    tipo: $Enums.TipoPedido
    total: Decimal | DecimalJsLike | number | string
    criadoEm?: Date | string
    usuarioId: number
    enderecoId?: number | null
    itens?: ItemPedidoUncheckedCreateNestedManyWithoutPedidoInput
    pagamento?: PagamentoUncheckedCreateNestedOneWithoutPedidoInput
    entrega?: EntregaUncheckedCreateNestedOneWithoutPedidoInput
  }

  export type PedidoUpdateInput = {
    status?: EnumStatusPedidoFieldUpdateOperationsInput | $Enums.StatusPedido
    tipo?: EnumTipoPedidoFieldUpdateOperationsInput | $Enums.TipoPedido
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutPedidosNestedInput
    endereco?: EnderecoUpdateOneWithoutPedidosNestedInput
    itens?: ItemPedidoUpdateManyWithoutPedidoNestedInput
    pagamento?: PagamentoUpdateOneWithoutPedidoNestedInput
    entrega?: EntregaUpdateOneWithoutPedidoNestedInput
  }

  export type PedidoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusPedidoFieldUpdateOperationsInput | $Enums.StatusPedido
    tipo?: EnumTipoPedidoFieldUpdateOperationsInput | $Enums.TipoPedido
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioId?: IntFieldUpdateOperationsInput | number
    enderecoId?: NullableIntFieldUpdateOperationsInput | number | null
    itens?: ItemPedidoUncheckedUpdateManyWithoutPedidoNestedInput
    pagamento?: PagamentoUncheckedUpdateOneWithoutPedidoNestedInput
    entrega?: EntregaUncheckedUpdateOneWithoutPedidoNestedInput
  }

  export type PedidoCreateManyInput = {
    id?: number
    status?: $Enums.StatusPedido
    tipo: $Enums.TipoPedido
    total: Decimal | DecimalJsLike | number | string
    criadoEm?: Date | string
    usuarioId: number
    enderecoId?: number | null
  }

  export type PedidoUpdateManyMutationInput = {
    status?: EnumStatusPedidoFieldUpdateOperationsInput | $Enums.StatusPedido
    tipo?: EnumTipoPedidoFieldUpdateOperationsInput | $Enums.TipoPedido
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PedidoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusPedidoFieldUpdateOperationsInput | $Enums.StatusPedido
    tipo?: EnumTipoPedidoFieldUpdateOperationsInput | $Enums.TipoPedido
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioId?: IntFieldUpdateOperationsInput | number
    enderecoId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ItemPedidoCreateInput = {
    quantidade: number
    precoUnitario: Decimal | DecimalJsLike | number | string
    pedido: PedidoCreateNestedOneWithoutItensInput
    produto: ProdutoCreateNestedOneWithoutItensPedidoInput
  }

  export type ItemPedidoUncheckedCreateInput = {
    id?: number
    quantidade: number
    precoUnitario: Decimal | DecimalJsLike | number | string
    pedidoId: number
    produtoId: number
  }

  export type ItemPedidoUpdateInput = {
    quantidade?: IntFieldUpdateOperationsInput | number
    precoUnitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    pedido?: PedidoUpdateOneRequiredWithoutItensNestedInput
    produto?: ProdutoUpdateOneRequiredWithoutItensPedidoNestedInput
  }

  export type ItemPedidoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantidade?: IntFieldUpdateOperationsInput | number
    precoUnitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    pedidoId?: IntFieldUpdateOperationsInput | number
    produtoId?: IntFieldUpdateOperationsInput | number
  }

  export type ItemPedidoCreateManyInput = {
    id?: number
    quantidade: number
    precoUnitario: Decimal | DecimalJsLike | number | string
    pedidoId: number
    produtoId: number
  }

  export type ItemPedidoUpdateManyMutationInput = {
    quantidade?: IntFieldUpdateOperationsInput | number
    precoUnitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type ItemPedidoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantidade?: IntFieldUpdateOperationsInput | number
    precoUnitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    pedidoId?: IntFieldUpdateOperationsInput | number
    produtoId?: IntFieldUpdateOperationsInput | number
  }

  export type PagamentoCreateInput = {
    forma: $Enums.FormaPagamento
    status?: $Enums.StatusPagamento
    valor: Decimal | DecimalJsLike | number | string
    externalId?: string | null
    pedido: PedidoCreateNestedOneWithoutPagamentoInput
  }

  export type PagamentoUncheckedCreateInput = {
    id?: number
    forma: $Enums.FormaPagamento
    status?: $Enums.StatusPagamento
    valor: Decimal | DecimalJsLike | number | string
    externalId?: string | null
    pedidoId: number
  }

  export type PagamentoUpdateInput = {
    forma?: EnumFormaPagamentoFieldUpdateOperationsInput | $Enums.FormaPagamento
    status?: EnumStatusPagamentoFieldUpdateOperationsInput | $Enums.StatusPagamento
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    pedido?: PedidoUpdateOneRequiredWithoutPagamentoNestedInput
  }

  export type PagamentoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    forma?: EnumFormaPagamentoFieldUpdateOperationsInput | $Enums.FormaPagamento
    status?: EnumStatusPagamentoFieldUpdateOperationsInput | $Enums.StatusPagamento
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    pedidoId?: IntFieldUpdateOperationsInput | number
  }

  export type PagamentoCreateManyInput = {
    id?: number
    forma: $Enums.FormaPagamento
    status?: $Enums.StatusPagamento
    valor: Decimal | DecimalJsLike | number | string
    externalId?: string | null
    pedidoId: number
  }

  export type PagamentoUpdateManyMutationInput = {
    forma?: EnumFormaPagamentoFieldUpdateOperationsInput | $Enums.FormaPagamento
    status?: EnumStatusPagamentoFieldUpdateOperationsInput | $Enums.StatusPagamento
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PagamentoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    forma?: EnumFormaPagamentoFieldUpdateOperationsInput | $Enums.FormaPagamento
    status?: EnumStatusPagamentoFieldUpdateOperationsInput | $Enums.StatusPagamento
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    pedidoId?: IntFieldUpdateOperationsInput | number
  }

  export type EntregaCreateInput = {
    status?: $Enums.StatusEntrega
    previsao?: Date | string | null
    codigoRastreio?: string | null
    pedido: PedidoCreateNestedOneWithoutEntregaInput
  }

  export type EntregaUncheckedCreateInput = {
    id?: number
    status?: $Enums.StatusEntrega
    previsao?: Date | string | null
    codigoRastreio?: string | null
    pedidoId: number
  }

  export type EntregaUpdateInput = {
    status?: EnumStatusEntregaFieldUpdateOperationsInput | $Enums.StatusEntrega
    previsao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    codigoRastreio?: NullableStringFieldUpdateOperationsInput | string | null
    pedido?: PedidoUpdateOneRequiredWithoutEntregaNestedInput
  }

  export type EntregaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusEntregaFieldUpdateOperationsInput | $Enums.StatusEntrega
    previsao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    codigoRastreio?: NullableStringFieldUpdateOperationsInput | string | null
    pedidoId?: IntFieldUpdateOperationsInput | number
  }

  export type EntregaCreateManyInput = {
    id?: number
    status?: $Enums.StatusEntrega
    previsao?: Date | string | null
    codigoRastreio?: string | null
    pedidoId: number
  }

  export type EntregaUpdateManyMutationInput = {
    status?: EnumStatusEntregaFieldUpdateOperationsInput | $Enums.StatusEntrega
    previsao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    codigoRastreio?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EntregaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusEntregaFieldUpdateOperationsInput | $Enums.StatusEntrega
    previsao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    codigoRastreio?: NullableStringFieldUpdateOperationsInput | string | null
    pedidoId?: IntFieldUpdateOperationsInput | number
  }

  export type CarrinhoCreateInput = {
    usuario: UsuarioCreateNestedOneWithoutCarrinhoInput
    itens?: ItemCarrinhoCreateNestedManyWithoutCarrinhoInput
  }

  export type CarrinhoUncheckedCreateInput = {
    id?: number
    usuarioId: number
    itens?: ItemCarrinhoUncheckedCreateNestedManyWithoutCarrinhoInput
  }

  export type CarrinhoUpdateInput = {
    usuario?: UsuarioUpdateOneRequiredWithoutCarrinhoNestedInput
    itens?: ItemCarrinhoUpdateManyWithoutCarrinhoNestedInput
  }

  export type CarrinhoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    itens?: ItemCarrinhoUncheckedUpdateManyWithoutCarrinhoNestedInput
  }

  export type CarrinhoCreateManyInput = {
    id?: number
    usuarioId: number
  }

  export type CarrinhoUpdateManyMutationInput = {

  }

  export type CarrinhoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
  }

  export type ItemCarrinhoCreateInput = {
    quantidade: number
    carrinho: CarrinhoCreateNestedOneWithoutItensInput
    produto: ProdutoCreateNestedOneWithoutItensCarrinhoInput
  }

  export type ItemCarrinhoUncheckedCreateInput = {
    id?: number
    quantidade: number
    carrinhoId: number
    produtoId: number
  }

  export type ItemCarrinhoUpdateInput = {
    quantidade?: IntFieldUpdateOperationsInput | number
    carrinho?: CarrinhoUpdateOneRequiredWithoutItensNestedInput
    produto?: ProdutoUpdateOneRequiredWithoutItensCarrinhoNestedInput
  }

  export type ItemCarrinhoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantidade?: IntFieldUpdateOperationsInput | number
    carrinhoId?: IntFieldUpdateOperationsInput | number
    produtoId?: IntFieldUpdateOperationsInput | number
  }

  export type ItemCarrinhoCreateManyInput = {
    id?: number
    quantidade: number
    carrinhoId: number
    produtoId: number
  }

  export type ItemCarrinhoUpdateManyMutationInput = {
    quantidade?: IntFieldUpdateOperationsInput | number
  }

  export type ItemCarrinhoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantidade?: IntFieldUpdateOperationsInput | number
    carrinhoId?: IntFieldUpdateOperationsInput | number
    produtoId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type EnderecoListRelationFilter = {
    every?: EnderecoWhereInput
    some?: EnderecoWhereInput
    none?: EnderecoWhereInput
  }

  export type PedidoListRelationFilter = {
    every?: PedidoWhereInput
    some?: PedidoWhereInput
    none?: PedidoWhereInput
  }

  export type CarrinhoNullableScalarRelationFilter = {
    is?: CarrinhoWhereInput | null
    isNot?: CarrinhoWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type EnderecoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PedidoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsuarioCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    telefone?: SortOrder
    role?: SortOrder
    criadoEm?: SortOrder
  }

  export type UsuarioAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UsuarioMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    telefone?: SortOrder
    role?: SortOrder
    criadoEm?: SortOrder
  }

  export type UsuarioMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    telefone?: SortOrder
    role?: SortOrder
    criadoEm?: SortOrder
  }

  export type UsuarioSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UsuarioScalarRelationFilter = {
    is?: UsuarioWhereInput
    isNot?: UsuarioWhereInput
  }

  export type EnderecoCountOrderByAggregateInput = {
    id?: SortOrder
    rua?: SortOrder
    numero?: SortOrder
    bairro?: SortOrder
    cidade?: SortOrder
    estado?: SortOrder
    cep?: SortOrder
    usuarioId?: SortOrder
  }

  export type EnderecoAvgOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
  }

  export type EnderecoMaxOrderByAggregateInput = {
    id?: SortOrder
    rua?: SortOrder
    numero?: SortOrder
    bairro?: SortOrder
    cidade?: SortOrder
    estado?: SortOrder
    cep?: SortOrder
    usuarioId?: SortOrder
  }

  export type EnderecoMinOrderByAggregateInput = {
    id?: SortOrder
    rua?: SortOrder
    numero?: SortOrder
    bairro?: SortOrder
    cidade?: SortOrder
    estado?: SortOrder
    cep?: SortOrder
    usuarioId?: SortOrder
  }

  export type EnderecoSumOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
  }

  export type ProdutoListRelationFilter = {
    every?: ProdutoWhereInput
    some?: ProdutoWhereInput
    none?: ProdutoWhereInput
  }

  export type ProdutoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoriaCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
  }

  export type CategoriaAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CategoriaMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
  }

  export type CategoriaMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
  }

  export type CategoriaSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type CategoriaScalarRelationFilter = {
    is?: CategoriaWhereInput
    isNot?: CategoriaWhereInput
  }

  export type ItemPedidoListRelationFilter = {
    every?: ItemPedidoWhereInput
    some?: ItemPedidoWhereInput
    none?: ItemPedidoWhereInput
  }

  export type ItemCarrinhoListRelationFilter = {
    every?: ItemCarrinhoWhereInput
    some?: ItemCarrinhoWhereInput
    none?: ItemCarrinhoWhereInput
  }

  export type ItemPedidoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ItemCarrinhoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProdutoCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    preco?: SortOrder
    imagemUrl?: SortOrder
    disponivel?: SortOrder
    categoriaId?: SortOrder
  }

  export type ProdutoAvgOrderByAggregateInput = {
    id?: SortOrder
    preco?: SortOrder
    categoriaId?: SortOrder
  }

  export type ProdutoMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    preco?: SortOrder
    imagemUrl?: SortOrder
    disponivel?: SortOrder
    categoriaId?: SortOrder
  }

  export type ProdutoMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    preco?: SortOrder
    imagemUrl?: SortOrder
    disponivel?: SortOrder
    categoriaId?: SortOrder
  }

  export type ProdutoSumOrderByAggregateInput = {
    id?: SortOrder
    preco?: SortOrder
    categoriaId?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumStatusPedidoFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusPedido | EnumStatusPedidoFieldRefInput<$PrismaModel>
    in?: $Enums.StatusPedido[] | ListEnumStatusPedidoFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusPedido[] | ListEnumStatusPedidoFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusPedidoFilter<$PrismaModel> | $Enums.StatusPedido
  }

  export type EnumTipoPedidoFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoPedido | EnumTipoPedidoFieldRefInput<$PrismaModel>
    in?: $Enums.TipoPedido[] | ListEnumTipoPedidoFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoPedido[] | ListEnumTipoPedidoFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoPedidoFilter<$PrismaModel> | $Enums.TipoPedido
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type EnderecoNullableScalarRelationFilter = {
    is?: EnderecoWhereInput | null
    isNot?: EnderecoWhereInput | null
  }

  export type PagamentoNullableScalarRelationFilter = {
    is?: PagamentoWhereInput | null
    isNot?: PagamentoWhereInput | null
  }

  export type EntregaNullableScalarRelationFilter = {
    is?: EntregaWhereInput | null
    isNot?: EntregaWhereInput | null
  }

  export type PedidoCountOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    tipo?: SortOrder
    total?: SortOrder
    criadoEm?: SortOrder
    usuarioId?: SortOrder
    enderecoId?: SortOrder
  }

  export type PedidoAvgOrderByAggregateInput = {
    id?: SortOrder
    total?: SortOrder
    usuarioId?: SortOrder
    enderecoId?: SortOrder
  }

  export type PedidoMaxOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    tipo?: SortOrder
    total?: SortOrder
    criadoEm?: SortOrder
    usuarioId?: SortOrder
    enderecoId?: SortOrder
  }

  export type PedidoMinOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    tipo?: SortOrder
    total?: SortOrder
    criadoEm?: SortOrder
    usuarioId?: SortOrder
    enderecoId?: SortOrder
  }

  export type PedidoSumOrderByAggregateInput = {
    id?: SortOrder
    total?: SortOrder
    usuarioId?: SortOrder
    enderecoId?: SortOrder
  }

  export type EnumStatusPedidoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusPedido | EnumStatusPedidoFieldRefInput<$PrismaModel>
    in?: $Enums.StatusPedido[] | ListEnumStatusPedidoFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusPedido[] | ListEnumStatusPedidoFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusPedidoWithAggregatesFilter<$PrismaModel> | $Enums.StatusPedido
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusPedidoFilter<$PrismaModel>
    _max?: NestedEnumStatusPedidoFilter<$PrismaModel>
  }

  export type EnumTipoPedidoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoPedido | EnumTipoPedidoFieldRefInput<$PrismaModel>
    in?: $Enums.TipoPedido[] | ListEnumTipoPedidoFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoPedido[] | ListEnumTipoPedidoFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoPedidoWithAggregatesFilter<$PrismaModel> | $Enums.TipoPedido
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoPedidoFilter<$PrismaModel>
    _max?: NestedEnumTipoPedidoFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type PedidoScalarRelationFilter = {
    is?: PedidoWhereInput
    isNot?: PedidoWhereInput
  }

  export type ProdutoScalarRelationFilter = {
    is?: ProdutoWhereInput
    isNot?: ProdutoWhereInput
  }

  export type ItemPedidoCountOrderByAggregateInput = {
    id?: SortOrder
    quantidade?: SortOrder
    precoUnitario?: SortOrder
    pedidoId?: SortOrder
    produtoId?: SortOrder
  }

  export type ItemPedidoAvgOrderByAggregateInput = {
    id?: SortOrder
    quantidade?: SortOrder
    precoUnitario?: SortOrder
    pedidoId?: SortOrder
    produtoId?: SortOrder
  }

  export type ItemPedidoMaxOrderByAggregateInput = {
    id?: SortOrder
    quantidade?: SortOrder
    precoUnitario?: SortOrder
    pedidoId?: SortOrder
    produtoId?: SortOrder
  }

  export type ItemPedidoMinOrderByAggregateInput = {
    id?: SortOrder
    quantidade?: SortOrder
    precoUnitario?: SortOrder
    pedidoId?: SortOrder
    produtoId?: SortOrder
  }

  export type ItemPedidoSumOrderByAggregateInput = {
    id?: SortOrder
    quantidade?: SortOrder
    precoUnitario?: SortOrder
    pedidoId?: SortOrder
    produtoId?: SortOrder
  }

  export type EnumFormaPagamentoFilter<$PrismaModel = never> = {
    equals?: $Enums.FormaPagamento | EnumFormaPagamentoFieldRefInput<$PrismaModel>
    in?: $Enums.FormaPagamento[] | ListEnumFormaPagamentoFieldRefInput<$PrismaModel>
    notIn?: $Enums.FormaPagamento[] | ListEnumFormaPagamentoFieldRefInput<$PrismaModel>
    not?: NestedEnumFormaPagamentoFilter<$PrismaModel> | $Enums.FormaPagamento
  }

  export type EnumStatusPagamentoFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusPagamento | EnumStatusPagamentoFieldRefInput<$PrismaModel>
    in?: $Enums.StatusPagamento[] | ListEnumStatusPagamentoFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusPagamento[] | ListEnumStatusPagamentoFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusPagamentoFilter<$PrismaModel> | $Enums.StatusPagamento
  }

  export type PagamentoCountOrderByAggregateInput = {
    id?: SortOrder
    forma?: SortOrder
    status?: SortOrder
    valor?: SortOrder
    externalId?: SortOrder
    pedidoId?: SortOrder
  }

  export type PagamentoAvgOrderByAggregateInput = {
    id?: SortOrder
    valor?: SortOrder
    pedidoId?: SortOrder
  }

  export type PagamentoMaxOrderByAggregateInput = {
    id?: SortOrder
    forma?: SortOrder
    status?: SortOrder
    valor?: SortOrder
    externalId?: SortOrder
    pedidoId?: SortOrder
  }

  export type PagamentoMinOrderByAggregateInput = {
    id?: SortOrder
    forma?: SortOrder
    status?: SortOrder
    valor?: SortOrder
    externalId?: SortOrder
    pedidoId?: SortOrder
  }

  export type PagamentoSumOrderByAggregateInput = {
    id?: SortOrder
    valor?: SortOrder
    pedidoId?: SortOrder
  }

  export type EnumFormaPagamentoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FormaPagamento | EnumFormaPagamentoFieldRefInput<$PrismaModel>
    in?: $Enums.FormaPagamento[] | ListEnumFormaPagamentoFieldRefInput<$PrismaModel>
    notIn?: $Enums.FormaPagamento[] | ListEnumFormaPagamentoFieldRefInput<$PrismaModel>
    not?: NestedEnumFormaPagamentoWithAggregatesFilter<$PrismaModel> | $Enums.FormaPagamento
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFormaPagamentoFilter<$PrismaModel>
    _max?: NestedEnumFormaPagamentoFilter<$PrismaModel>
  }

  export type EnumStatusPagamentoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusPagamento | EnumStatusPagamentoFieldRefInput<$PrismaModel>
    in?: $Enums.StatusPagamento[] | ListEnumStatusPagamentoFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusPagamento[] | ListEnumStatusPagamentoFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusPagamentoWithAggregatesFilter<$PrismaModel> | $Enums.StatusPagamento
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusPagamentoFilter<$PrismaModel>
    _max?: NestedEnumStatusPagamentoFilter<$PrismaModel>
  }

  export type EnumStatusEntregaFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusEntrega | EnumStatusEntregaFieldRefInput<$PrismaModel>
    in?: $Enums.StatusEntrega[] | ListEnumStatusEntregaFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusEntrega[] | ListEnumStatusEntregaFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusEntregaFilter<$PrismaModel> | $Enums.StatusEntrega
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type EntregaCountOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    previsao?: SortOrder
    codigoRastreio?: SortOrder
    pedidoId?: SortOrder
  }

  export type EntregaAvgOrderByAggregateInput = {
    id?: SortOrder
    pedidoId?: SortOrder
  }

  export type EntregaMaxOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    previsao?: SortOrder
    codigoRastreio?: SortOrder
    pedidoId?: SortOrder
  }

  export type EntregaMinOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    previsao?: SortOrder
    codigoRastreio?: SortOrder
    pedidoId?: SortOrder
  }

  export type EntregaSumOrderByAggregateInput = {
    id?: SortOrder
    pedidoId?: SortOrder
  }

  export type EnumStatusEntregaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusEntrega | EnumStatusEntregaFieldRefInput<$PrismaModel>
    in?: $Enums.StatusEntrega[] | ListEnumStatusEntregaFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusEntrega[] | ListEnumStatusEntregaFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusEntregaWithAggregatesFilter<$PrismaModel> | $Enums.StatusEntrega
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusEntregaFilter<$PrismaModel>
    _max?: NestedEnumStatusEntregaFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type CarrinhoCountOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
  }

  export type CarrinhoAvgOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
  }

  export type CarrinhoMaxOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
  }

  export type CarrinhoMinOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
  }

  export type CarrinhoSumOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
  }

  export type CarrinhoScalarRelationFilter = {
    is?: CarrinhoWhereInput
    isNot?: CarrinhoWhereInput
  }

  export type ItemCarrinhoCarrinhoIdProdutoIdCompoundUniqueInput = {
    carrinhoId: number
    produtoId: number
  }

  export type ItemCarrinhoCountOrderByAggregateInput = {
    id?: SortOrder
    quantidade?: SortOrder
    carrinhoId?: SortOrder
    produtoId?: SortOrder
  }

  export type ItemCarrinhoAvgOrderByAggregateInput = {
    id?: SortOrder
    quantidade?: SortOrder
    carrinhoId?: SortOrder
    produtoId?: SortOrder
  }

  export type ItemCarrinhoMaxOrderByAggregateInput = {
    id?: SortOrder
    quantidade?: SortOrder
    carrinhoId?: SortOrder
    produtoId?: SortOrder
  }

  export type ItemCarrinhoMinOrderByAggregateInput = {
    id?: SortOrder
    quantidade?: SortOrder
    carrinhoId?: SortOrder
    produtoId?: SortOrder
  }

  export type ItemCarrinhoSumOrderByAggregateInput = {
    id?: SortOrder
    quantidade?: SortOrder
    carrinhoId?: SortOrder
    produtoId?: SortOrder
  }

  export type EnderecoCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<EnderecoCreateWithoutUsuarioInput, EnderecoUncheckedCreateWithoutUsuarioInput> | EnderecoCreateWithoutUsuarioInput[] | EnderecoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: EnderecoCreateOrConnectWithoutUsuarioInput | EnderecoCreateOrConnectWithoutUsuarioInput[]
    createMany?: EnderecoCreateManyUsuarioInputEnvelope
    connect?: EnderecoWhereUniqueInput | EnderecoWhereUniqueInput[]
  }

  export type PedidoCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<PedidoCreateWithoutUsuarioInput, PedidoUncheckedCreateWithoutUsuarioInput> | PedidoCreateWithoutUsuarioInput[] | PedidoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: PedidoCreateOrConnectWithoutUsuarioInput | PedidoCreateOrConnectWithoutUsuarioInput[]
    createMany?: PedidoCreateManyUsuarioInputEnvelope
    connect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
  }

  export type CarrinhoCreateNestedOneWithoutUsuarioInput = {
    create?: XOR<CarrinhoCreateWithoutUsuarioInput, CarrinhoUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: CarrinhoCreateOrConnectWithoutUsuarioInput
    connect?: CarrinhoWhereUniqueInput
  }

  export type EnderecoUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<EnderecoCreateWithoutUsuarioInput, EnderecoUncheckedCreateWithoutUsuarioInput> | EnderecoCreateWithoutUsuarioInput[] | EnderecoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: EnderecoCreateOrConnectWithoutUsuarioInput | EnderecoCreateOrConnectWithoutUsuarioInput[]
    createMany?: EnderecoCreateManyUsuarioInputEnvelope
    connect?: EnderecoWhereUniqueInput | EnderecoWhereUniqueInput[]
  }

  export type PedidoUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<PedidoCreateWithoutUsuarioInput, PedidoUncheckedCreateWithoutUsuarioInput> | PedidoCreateWithoutUsuarioInput[] | PedidoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: PedidoCreateOrConnectWithoutUsuarioInput | PedidoCreateOrConnectWithoutUsuarioInput[]
    createMany?: PedidoCreateManyUsuarioInputEnvelope
    connect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
  }

  export type CarrinhoUncheckedCreateNestedOneWithoutUsuarioInput = {
    create?: XOR<CarrinhoCreateWithoutUsuarioInput, CarrinhoUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: CarrinhoCreateOrConnectWithoutUsuarioInput
    connect?: CarrinhoWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EnderecoUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<EnderecoCreateWithoutUsuarioInput, EnderecoUncheckedCreateWithoutUsuarioInput> | EnderecoCreateWithoutUsuarioInput[] | EnderecoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: EnderecoCreateOrConnectWithoutUsuarioInput | EnderecoCreateOrConnectWithoutUsuarioInput[]
    upsert?: EnderecoUpsertWithWhereUniqueWithoutUsuarioInput | EnderecoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: EnderecoCreateManyUsuarioInputEnvelope
    set?: EnderecoWhereUniqueInput | EnderecoWhereUniqueInput[]
    disconnect?: EnderecoWhereUniqueInput | EnderecoWhereUniqueInput[]
    delete?: EnderecoWhereUniqueInput | EnderecoWhereUniqueInput[]
    connect?: EnderecoWhereUniqueInput | EnderecoWhereUniqueInput[]
    update?: EnderecoUpdateWithWhereUniqueWithoutUsuarioInput | EnderecoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: EnderecoUpdateManyWithWhereWithoutUsuarioInput | EnderecoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: EnderecoScalarWhereInput | EnderecoScalarWhereInput[]
  }

  export type PedidoUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<PedidoCreateWithoutUsuarioInput, PedidoUncheckedCreateWithoutUsuarioInput> | PedidoCreateWithoutUsuarioInput[] | PedidoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: PedidoCreateOrConnectWithoutUsuarioInput | PedidoCreateOrConnectWithoutUsuarioInput[]
    upsert?: PedidoUpsertWithWhereUniqueWithoutUsuarioInput | PedidoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: PedidoCreateManyUsuarioInputEnvelope
    set?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    disconnect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    delete?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    connect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    update?: PedidoUpdateWithWhereUniqueWithoutUsuarioInput | PedidoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: PedidoUpdateManyWithWhereWithoutUsuarioInput | PedidoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: PedidoScalarWhereInput | PedidoScalarWhereInput[]
  }

  export type CarrinhoUpdateOneWithoutUsuarioNestedInput = {
    create?: XOR<CarrinhoCreateWithoutUsuarioInput, CarrinhoUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: CarrinhoCreateOrConnectWithoutUsuarioInput
    upsert?: CarrinhoUpsertWithoutUsuarioInput
    disconnect?: CarrinhoWhereInput | boolean
    delete?: CarrinhoWhereInput | boolean
    connect?: CarrinhoWhereUniqueInput
    update?: XOR<XOR<CarrinhoUpdateToOneWithWhereWithoutUsuarioInput, CarrinhoUpdateWithoutUsuarioInput>, CarrinhoUncheckedUpdateWithoutUsuarioInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnderecoUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<EnderecoCreateWithoutUsuarioInput, EnderecoUncheckedCreateWithoutUsuarioInput> | EnderecoCreateWithoutUsuarioInput[] | EnderecoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: EnderecoCreateOrConnectWithoutUsuarioInput | EnderecoCreateOrConnectWithoutUsuarioInput[]
    upsert?: EnderecoUpsertWithWhereUniqueWithoutUsuarioInput | EnderecoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: EnderecoCreateManyUsuarioInputEnvelope
    set?: EnderecoWhereUniqueInput | EnderecoWhereUniqueInput[]
    disconnect?: EnderecoWhereUniqueInput | EnderecoWhereUniqueInput[]
    delete?: EnderecoWhereUniqueInput | EnderecoWhereUniqueInput[]
    connect?: EnderecoWhereUniqueInput | EnderecoWhereUniqueInput[]
    update?: EnderecoUpdateWithWhereUniqueWithoutUsuarioInput | EnderecoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: EnderecoUpdateManyWithWhereWithoutUsuarioInput | EnderecoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: EnderecoScalarWhereInput | EnderecoScalarWhereInput[]
  }

  export type PedidoUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<PedidoCreateWithoutUsuarioInput, PedidoUncheckedCreateWithoutUsuarioInput> | PedidoCreateWithoutUsuarioInput[] | PedidoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: PedidoCreateOrConnectWithoutUsuarioInput | PedidoCreateOrConnectWithoutUsuarioInput[]
    upsert?: PedidoUpsertWithWhereUniqueWithoutUsuarioInput | PedidoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: PedidoCreateManyUsuarioInputEnvelope
    set?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    disconnect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    delete?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    connect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    update?: PedidoUpdateWithWhereUniqueWithoutUsuarioInput | PedidoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: PedidoUpdateManyWithWhereWithoutUsuarioInput | PedidoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: PedidoScalarWhereInput | PedidoScalarWhereInput[]
  }

  export type CarrinhoUncheckedUpdateOneWithoutUsuarioNestedInput = {
    create?: XOR<CarrinhoCreateWithoutUsuarioInput, CarrinhoUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: CarrinhoCreateOrConnectWithoutUsuarioInput
    upsert?: CarrinhoUpsertWithoutUsuarioInput
    disconnect?: CarrinhoWhereInput | boolean
    delete?: CarrinhoWhereInput | boolean
    connect?: CarrinhoWhereUniqueInput
    update?: XOR<XOR<CarrinhoUpdateToOneWithWhereWithoutUsuarioInput, CarrinhoUpdateWithoutUsuarioInput>, CarrinhoUncheckedUpdateWithoutUsuarioInput>
  }

  export type UsuarioCreateNestedOneWithoutEnderecosInput = {
    create?: XOR<UsuarioCreateWithoutEnderecosInput, UsuarioUncheckedCreateWithoutEnderecosInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutEnderecosInput
    connect?: UsuarioWhereUniqueInput
  }

  export type PedidoCreateNestedManyWithoutEnderecoInput = {
    create?: XOR<PedidoCreateWithoutEnderecoInput, PedidoUncheckedCreateWithoutEnderecoInput> | PedidoCreateWithoutEnderecoInput[] | PedidoUncheckedCreateWithoutEnderecoInput[]
    connectOrCreate?: PedidoCreateOrConnectWithoutEnderecoInput | PedidoCreateOrConnectWithoutEnderecoInput[]
    createMany?: PedidoCreateManyEnderecoInputEnvelope
    connect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
  }

  export type PedidoUncheckedCreateNestedManyWithoutEnderecoInput = {
    create?: XOR<PedidoCreateWithoutEnderecoInput, PedidoUncheckedCreateWithoutEnderecoInput> | PedidoCreateWithoutEnderecoInput[] | PedidoUncheckedCreateWithoutEnderecoInput[]
    connectOrCreate?: PedidoCreateOrConnectWithoutEnderecoInput | PedidoCreateOrConnectWithoutEnderecoInput[]
    createMany?: PedidoCreateManyEnderecoInputEnvelope
    connect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
  }

  export type UsuarioUpdateOneRequiredWithoutEnderecosNestedInput = {
    create?: XOR<UsuarioCreateWithoutEnderecosInput, UsuarioUncheckedCreateWithoutEnderecosInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutEnderecosInput
    upsert?: UsuarioUpsertWithoutEnderecosInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutEnderecosInput, UsuarioUpdateWithoutEnderecosInput>, UsuarioUncheckedUpdateWithoutEnderecosInput>
  }

  export type PedidoUpdateManyWithoutEnderecoNestedInput = {
    create?: XOR<PedidoCreateWithoutEnderecoInput, PedidoUncheckedCreateWithoutEnderecoInput> | PedidoCreateWithoutEnderecoInput[] | PedidoUncheckedCreateWithoutEnderecoInput[]
    connectOrCreate?: PedidoCreateOrConnectWithoutEnderecoInput | PedidoCreateOrConnectWithoutEnderecoInput[]
    upsert?: PedidoUpsertWithWhereUniqueWithoutEnderecoInput | PedidoUpsertWithWhereUniqueWithoutEnderecoInput[]
    createMany?: PedidoCreateManyEnderecoInputEnvelope
    set?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    disconnect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    delete?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    connect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    update?: PedidoUpdateWithWhereUniqueWithoutEnderecoInput | PedidoUpdateWithWhereUniqueWithoutEnderecoInput[]
    updateMany?: PedidoUpdateManyWithWhereWithoutEnderecoInput | PedidoUpdateManyWithWhereWithoutEnderecoInput[]
    deleteMany?: PedidoScalarWhereInput | PedidoScalarWhereInput[]
  }

  export type PedidoUncheckedUpdateManyWithoutEnderecoNestedInput = {
    create?: XOR<PedidoCreateWithoutEnderecoInput, PedidoUncheckedCreateWithoutEnderecoInput> | PedidoCreateWithoutEnderecoInput[] | PedidoUncheckedCreateWithoutEnderecoInput[]
    connectOrCreate?: PedidoCreateOrConnectWithoutEnderecoInput | PedidoCreateOrConnectWithoutEnderecoInput[]
    upsert?: PedidoUpsertWithWhereUniqueWithoutEnderecoInput | PedidoUpsertWithWhereUniqueWithoutEnderecoInput[]
    createMany?: PedidoCreateManyEnderecoInputEnvelope
    set?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    disconnect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    delete?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    connect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    update?: PedidoUpdateWithWhereUniqueWithoutEnderecoInput | PedidoUpdateWithWhereUniqueWithoutEnderecoInput[]
    updateMany?: PedidoUpdateManyWithWhereWithoutEnderecoInput | PedidoUpdateManyWithWhereWithoutEnderecoInput[]
    deleteMany?: PedidoScalarWhereInput | PedidoScalarWhereInput[]
  }

  export type ProdutoCreateNestedManyWithoutCategoriaInput = {
    create?: XOR<ProdutoCreateWithoutCategoriaInput, ProdutoUncheckedCreateWithoutCategoriaInput> | ProdutoCreateWithoutCategoriaInput[] | ProdutoUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: ProdutoCreateOrConnectWithoutCategoriaInput | ProdutoCreateOrConnectWithoutCategoriaInput[]
    createMany?: ProdutoCreateManyCategoriaInputEnvelope
    connect?: ProdutoWhereUniqueInput | ProdutoWhereUniqueInput[]
  }

  export type ProdutoUncheckedCreateNestedManyWithoutCategoriaInput = {
    create?: XOR<ProdutoCreateWithoutCategoriaInput, ProdutoUncheckedCreateWithoutCategoriaInput> | ProdutoCreateWithoutCategoriaInput[] | ProdutoUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: ProdutoCreateOrConnectWithoutCategoriaInput | ProdutoCreateOrConnectWithoutCategoriaInput[]
    createMany?: ProdutoCreateManyCategoriaInputEnvelope
    connect?: ProdutoWhereUniqueInput | ProdutoWhereUniqueInput[]
  }

  export type ProdutoUpdateManyWithoutCategoriaNestedInput = {
    create?: XOR<ProdutoCreateWithoutCategoriaInput, ProdutoUncheckedCreateWithoutCategoriaInput> | ProdutoCreateWithoutCategoriaInput[] | ProdutoUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: ProdutoCreateOrConnectWithoutCategoriaInput | ProdutoCreateOrConnectWithoutCategoriaInput[]
    upsert?: ProdutoUpsertWithWhereUniqueWithoutCategoriaInput | ProdutoUpsertWithWhereUniqueWithoutCategoriaInput[]
    createMany?: ProdutoCreateManyCategoriaInputEnvelope
    set?: ProdutoWhereUniqueInput | ProdutoWhereUniqueInput[]
    disconnect?: ProdutoWhereUniqueInput | ProdutoWhereUniqueInput[]
    delete?: ProdutoWhereUniqueInput | ProdutoWhereUniqueInput[]
    connect?: ProdutoWhereUniqueInput | ProdutoWhereUniqueInput[]
    update?: ProdutoUpdateWithWhereUniqueWithoutCategoriaInput | ProdutoUpdateWithWhereUniqueWithoutCategoriaInput[]
    updateMany?: ProdutoUpdateManyWithWhereWithoutCategoriaInput | ProdutoUpdateManyWithWhereWithoutCategoriaInput[]
    deleteMany?: ProdutoScalarWhereInput | ProdutoScalarWhereInput[]
  }

  export type ProdutoUncheckedUpdateManyWithoutCategoriaNestedInput = {
    create?: XOR<ProdutoCreateWithoutCategoriaInput, ProdutoUncheckedCreateWithoutCategoriaInput> | ProdutoCreateWithoutCategoriaInput[] | ProdutoUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: ProdutoCreateOrConnectWithoutCategoriaInput | ProdutoCreateOrConnectWithoutCategoriaInput[]
    upsert?: ProdutoUpsertWithWhereUniqueWithoutCategoriaInput | ProdutoUpsertWithWhereUniqueWithoutCategoriaInput[]
    createMany?: ProdutoCreateManyCategoriaInputEnvelope
    set?: ProdutoWhereUniqueInput | ProdutoWhereUniqueInput[]
    disconnect?: ProdutoWhereUniqueInput | ProdutoWhereUniqueInput[]
    delete?: ProdutoWhereUniqueInput | ProdutoWhereUniqueInput[]
    connect?: ProdutoWhereUniqueInput | ProdutoWhereUniqueInput[]
    update?: ProdutoUpdateWithWhereUniqueWithoutCategoriaInput | ProdutoUpdateWithWhereUniqueWithoutCategoriaInput[]
    updateMany?: ProdutoUpdateManyWithWhereWithoutCategoriaInput | ProdutoUpdateManyWithWhereWithoutCategoriaInput[]
    deleteMany?: ProdutoScalarWhereInput | ProdutoScalarWhereInput[]
  }

  export type CategoriaCreateNestedOneWithoutProdutosInput = {
    create?: XOR<CategoriaCreateWithoutProdutosInput, CategoriaUncheckedCreateWithoutProdutosInput>
    connectOrCreate?: CategoriaCreateOrConnectWithoutProdutosInput
    connect?: CategoriaWhereUniqueInput
  }

  export type ItemPedidoCreateNestedManyWithoutProdutoInput = {
    create?: XOR<ItemPedidoCreateWithoutProdutoInput, ItemPedidoUncheckedCreateWithoutProdutoInput> | ItemPedidoCreateWithoutProdutoInput[] | ItemPedidoUncheckedCreateWithoutProdutoInput[]
    connectOrCreate?: ItemPedidoCreateOrConnectWithoutProdutoInput | ItemPedidoCreateOrConnectWithoutProdutoInput[]
    createMany?: ItemPedidoCreateManyProdutoInputEnvelope
    connect?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
  }

  export type ItemCarrinhoCreateNestedManyWithoutProdutoInput = {
    create?: XOR<ItemCarrinhoCreateWithoutProdutoInput, ItemCarrinhoUncheckedCreateWithoutProdutoInput> | ItemCarrinhoCreateWithoutProdutoInput[] | ItemCarrinhoUncheckedCreateWithoutProdutoInput[]
    connectOrCreate?: ItemCarrinhoCreateOrConnectWithoutProdutoInput | ItemCarrinhoCreateOrConnectWithoutProdutoInput[]
    createMany?: ItemCarrinhoCreateManyProdutoInputEnvelope
    connect?: ItemCarrinhoWhereUniqueInput | ItemCarrinhoWhereUniqueInput[]
  }

  export type ItemPedidoUncheckedCreateNestedManyWithoutProdutoInput = {
    create?: XOR<ItemPedidoCreateWithoutProdutoInput, ItemPedidoUncheckedCreateWithoutProdutoInput> | ItemPedidoCreateWithoutProdutoInput[] | ItemPedidoUncheckedCreateWithoutProdutoInput[]
    connectOrCreate?: ItemPedidoCreateOrConnectWithoutProdutoInput | ItemPedidoCreateOrConnectWithoutProdutoInput[]
    createMany?: ItemPedidoCreateManyProdutoInputEnvelope
    connect?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
  }

  export type ItemCarrinhoUncheckedCreateNestedManyWithoutProdutoInput = {
    create?: XOR<ItemCarrinhoCreateWithoutProdutoInput, ItemCarrinhoUncheckedCreateWithoutProdutoInput> | ItemCarrinhoCreateWithoutProdutoInput[] | ItemCarrinhoUncheckedCreateWithoutProdutoInput[]
    connectOrCreate?: ItemCarrinhoCreateOrConnectWithoutProdutoInput | ItemCarrinhoCreateOrConnectWithoutProdutoInput[]
    createMany?: ItemCarrinhoCreateManyProdutoInputEnvelope
    connect?: ItemCarrinhoWhereUniqueInput | ItemCarrinhoWhereUniqueInput[]
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type CategoriaUpdateOneRequiredWithoutProdutosNestedInput = {
    create?: XOR<CategoriaCreateWithoutProdutosInput, CategoriaUncheckedCreateWithoutProdutosInput>
    connectOrCreate?: CategoriaCreateOrConnectWithoutProdutosInput
    upsert?: CategoriaUpsertWithoutProdutosInput
    connect?: CategoriaWhereUniqueInput
    update?: XOR<XOR<CategoriaUpdateToOneWithWhereWithoutProdutosInput, CategoriaUpdateWithoutProdutosInput>, CategoriaUncheckedUpdateWithoutProdutosInput>
  }

  export type ItemPedidoUpdateManyWithoutProdutoNestedInput = {
    create?: XOR<ItemPedidoCreateWithoutProdutoInput, ItemPedidoUncheckedCreateWithoutProdutoInput> | ItemPedidoCreateWithoutProdutoInput[] | ItemPedidoUncheckedCreateWithoutProdutoInput[]
    connectOrCreate?: ItemPedidoCreateOrConnectWithoutProdutoInput | ItemPedidoCreateOrConnectWithoutProdutoInput[]
    upsert?: ItemPedidoUpsertWithWhereUniqueWithoutProdutoInput | ItemPedidoUpsertWithWhereUniqueWithoutProdutoInput[]
    createMany?: ItemPedidoCreateManyProdutoInputEnvelope
    set?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
    disconnect?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
    delete?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
    connect?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
    update?: ItemPedidoUpdateWithWhereUniqueWithoutProdutoInput | ItemPedidoUpdateWithWhereUniqueWithoutProdutoInput[]
    updateMany?: ItemPedidoUpdateManyWithWhereWithoutProdutoInput | ItemPedidoUpdateManyWithWhereWithoutProdutoInput[]
    deleteMany?: ItemPedidoScalarWhereInput | ItemPedidoScalarWhereInput[]
  }

  export type ItemCarrinhoUpdateManyWithoutProdutoNestedInput = {
    create?: XOR<ItemCarrinhoCreateWithoutProdutoInput, ItemCarrinhoUncheckedCreateWithoutProdutoInput> | ItemCarrinhoCreateWithoutProdutoInput[] | ItemCarrinhoUncheckedCreateWithoutProdutoInput[]
    connectOrCreate?: ItemCarrinhoCreateOrConnectWithoutProdutoInput | ItemCarrinhoCreateOrConnectWithoutProdutoInput[]
    upsert?: ItemCarrinhoUpsertWithWhereUniqueWithoutProdutoInput | ItemCarrinhoUpsertWithWhereUniqueWithoutProdutoInput[]
    createMany?: ItemCarrinhoCreateManyProdutoInputEnvelope
    set?: ItemCarrinhoWhereUniqueInput | ItemCarrinhoWhereUniqueInput[]
    disconnect?: ItemCarrinhoWhereUniqueInput | ItemCarrinhoWhereUniqueInput[]
    delete?: ItemCarrinhoWhereUniqueInput | ItemCarrinhoWhereUniqueInput[]
    connect?: ItemCarrinhoWhereUniqueInput | ItemCarrinhoWhereUniqueInput[]
    update?: ItemCarrinhoUpdateWithWhereUniqueWithoutProdutoInput | ItemCarrinhoUpdateWithWhereUniqueWithoutProdutoInput[]
    updateMany?: ItemCarrinhoUpdateManyWithWhereWithoutProdutoInput | ItemCarrinhoUpdateManyWithWhereWithoutProdutoInput[]
    deleteMany?: ItemCarrinhoScalarWhereInput | ItemCarrinhoScalarWhereInput[]
  }

  export type ItemPedidoUncheckedUpdateManyWithoutProdutoNestedInput = {
    create?: XOR<ItemPedidoCreateWithoutProdutoInput, ItemPedidoUncheckedCreateWithoutProdutoInput> | ItemPedidoCreateWithoutProdutoInput[] | ItemPedidoUncheckedCreateWithoutProdutoInput[]
    connectOrCreate?: ItemPedidoCreateOrConnectWithoutProdutoInput | ItemPedidoCreateOrConnectWithoutProdutoInput[]
    upsert?: ItemPedidoUpsertWithWhereUniqueWithoutProdutoInput | ItemPedidoUpsertWithWhereUniqueWithoutProdutoInput[]
    createMany?: ItemPedidoCreateManyProdutoInputEnvelope
    set?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
    disconnect?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
    delete?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
    connect?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
    update?: ItemPedidoUpdateWithWhereUniqueWithoutProdutoInput | ItemPedidoUpdateWithWhereUniqueWithoutProdutoInput[]
    updateMany?: ItemPedidoUpdateManyWithWhereWithoutProdutoInput | ItemPedidoUpdateManyWithWhereWithoutProdutoInput[]
    deleteMany?: ItemPedidoScalarWhereInput | ItemPedidoScalarWhereInput[]
  }

  export type ItemCarrinhoUncheckedUpdateManyWithoutProdutoNestedInput = {
    create?: XOR<ItemCarrinhoCreateWithoutProdutoInput, ItemCarrinhoUncheckedCreateWithoutProdutoInput> | ItemCarrinhoCreateWithoutProdutoInput[] | ItemCarrinhoUncheckedCreateWithoutProdutoInput[]
    connectOrCreate?: ItemCarrinhoCreateOrConnectWithoutProdutoInput | ItemCarrinhoCreateOrConnectWithoutProdutoInput[]
    upsert?: ItemCarrinhoUpsertWithWhereUniqueWithoutProdutoInput | ItemCarrinhoUpsertWithWhereUniqueWithoutProdutoInput[]
    createMany?: ItemCarrinhoCreateManyProdutoInputEnvelope
    set?: ItemCarrinhoWhereUniqueInput | ItemCarrinhoWhereUniqueInput[]
    disconnect?: ItemCarrinhoWhereUniqueInput | ItemCarrinhoWhereUniqueInput[]
    delete?: ItemCarrinhoWhereUniqueInput | ItemCarrinhoWhereUniqueInput[]
    connect?: ItemCarrinhoWhereUniqueInput | ItemCarrinhoWhereUniqueInput[]
    update?: ItemCarrinhoUpdateWithWhereUniqueWithoutProdutoInput | ItemCarrinhoUpdateWithWhereUniqueWithoutProdutoInput[]
    updateMany?: ItemCarrinhoUpdateManyWithWhereWithoutProdutoInput | ItemCarrinhoUpdateManyWithWhereWithoutProdutoInput[]
    deleteMany?: ItemCarrinhoScalarWhereInput | ItemCarrinhoScalarWhereInput[]
  }

  export type UsuarioCreateNestedOneWithoutPedidosInput = {
    create?: XOR<UsuarioCreateWithoutPedidosInput, UsuarioUncheckedCreateWithoutPedidosInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutPedidosInput
    connect?: UsuarioWhereUniqueInput
  }

  export type EnderecoCreateNestedOneWithoutPedidosInput = {
    create?: XOR<EnderecoCreateWithoutPedidosInput, EnderecoUncheckedCreateWithoutPedidosInput>
    connectOrCreate?: EnderecoCreateOrConnectWithoutPedidosInput
    connect?: EnderecoWhereUniqueInput
  }

  export type ItemPedidoCreateNestedManyWithoutPedidoInput = {
    create?: XOR<ItemPedidoCreateWithoutPedidoInput, ItemPedidoUncheckedCreateWithoutPedidoInput> | ItemPedidoCreateWithoutPedidoInput[] | ItemPedidoUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: ItemPedidoCreateOrConnectWithoutPedidoInput | ItemPedidoCreateOrConnectWithoutPedidoInput[]
    createMany?: ItemPedidoCreateManyPedidoInputEnvelope
    connect?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
  }

  export type PagamentoCreateNestedOneWithoutPedidoInput = {
    create?: XOR<PagamentoCreateWithoutPedidoInput, PagamentoUncheckedCreateWithoutPedidoInput>
    connectOrCreate?: PagamentoCreateOrConnectWithoutPedidoInput
    connect?: PagamentoWhereUniqueInput
  }

  export type EntregaCreateNestedOneWithoutPedidoInput = {
    create?: XOR<EntregaCreateWithoutPedidoInput, EntregaUncheckedCreateWithoutPedidoInput>
    connectOrCreate?: EntregaCreateOrConnectWithoutPedidoInput
    connect?: EntregaWhereUniqueInput
  }

  export type ItemPedidoUncheckedCreateNestedManyWithoutPedidoInput = {
    create?: XOR<ItemPedidoCreateWithoutPedidoInput, ItemPedidoUncheckedCreateWithoutPedidoInput> | ItemPedidoCreateWithoutPedidoInput[] | ItemPedidoUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: ItemPedidoCreateOrConnectWithoutPedidoInput | ItemPedidoCreateOrConnectWithoutPedidoInput[]
    createMany?: ItemPedidoCreateManyPedidoInputEnvelope
    connect?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
  }

  export type PagamentoUncheckedCreateNestedOneWithoutPedidoInput = {
    create?: XOR<PagamentoCreateWithoutPedidoInput, PagamentoUncheckedCreateWithoutPedidoInput>
    connectOrCreate?: PagamentoCreateOrConnectWithoutPedidoInput
    connect?: PagamentoWhereUniqueInput
  }

  export type EntregaUncheckedCreateNestedOneWithoutPedidoInput = {
    create?: XOR<EntregaCreateWithoutPedidoInput, EntregaUncheckedCreateWithoutPedidoInput>
    connectOrCreate?: EntregaCreateOrConnectWithoutPedidoInput
    connect?: EntregaWhereUniqueInput
  }

  export type EnumStatusPedidoFieldUpdateOperationsInput = {
    set?: $Enums.StatusPedido
  }

  export type EnumTipoPedidoFieldUpdateOperationsInput = {
    set?: $Enums.TipoPedido
  }

  export type UsuarioUpdateOneRequiredWithoutPedidosNestedInput = {
    create?: XOR<UsuarioCreateWithoutPedidosInput, UsuarioUncheckedCreateWithoutPedidosInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutPedidosInput
    upsert?: UsuarioUpsertWithoutPedidosInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutPedidosInput, UsuarioUpdateWithoutPedidosInput>, UsuarioUncheckedUpdateWithoutPedidosInput>
  }

  export type EnderecoUpdateOneWithoutPedidosNestedInput = {
    create?: XOR<EnderecoCreateWithoutPedidosInput, EnderecoUncheckedCreateWithoutPedidosInput>
    connectOrCreate?: EnderecoCreateOrConnectWithoutPedidosInput
    upsert?: EnderecoUpsertWithoutPedidosInput
    disconnect?: EnderecoWhereInput | boolean
    delete?: EnderecoWhereInput | boolean
    connect?: EnderecoWhereUniqueInput
    update?: XOR<XOR<EnderecoUpdateToOneWithWhereWithoutPedidosInput, EnderecoUpdateWithoutPedidosInput>, EnderecoUncheckedUpdateWithoutPedidosInput>
  }

  export type ItemPedidoUpdateManyWithoutPedidoNestedInput = {
    create?: XOR<ItemPedidoCreateWithoutPedidoInput, ItemPedidoUncheckedCreateWithoutPedidoInput> | ItemPedidoCreateWithoutPedidoInput[] | ItemPedidoUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: ItemPedidoCreateOrConnectWithoutPedidoInput | ItemPedidoCreateOrConnectWithoutPedidoInput[]
    upsert?: ItemPedidoUpsertWithWhereUniqueWithoutPedidoInput | ItemPedidoUpsertWithWhereUniqueWithoutPedidoInput[]
    createMany?: ItemPedidoCreateManyPedidoInputEnvelope
    set?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
    disconnect?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
    delete?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
    connect?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
    update?: ItemPedidoUpdateWithWhereUniqueWithoutPedidoInput | ItemPedidoUpdateWithWhereUniqueWithoutPedidoInput[]
    updateMany?: ItemPedidoUpdateManyWithWhereWithoutPedidoInput | ItemPedidoUpdateManyWithWhereWithoutPedidoInput[]
    deleteMany?: ItemPedidoScalarWhereInput | ItemPedidoScalarWhereInput[]
  }

  export type PagamentoUpdateOneWithoutPedidoNestedInput = {
    create?: XOR<PagamentoCreateWithoutPedidoInput, PagamentoUncheckedCreateWithoutPedidoInput>
    connectOrCreate?: PagamentoCreateOrConnectWithoutPedidoInput
    upsert?: PagamentoUpsertWithoutPedidoInput
    disconnect?: PagamentoWhereInput | boolean
    delete?: PagamentoWhereInput | boolean
    connect?: PagamentoWhereUniqueInput
    update?: XOR<XOR<PagamentoUpdateToOneWithWhereWithoutPedidoInput, PagamentoUpdateWithoutPedidoInput>, PagamentoUncheckedUpdateWithoutPedidoInput>
  }

  export type EntregaUpdateOneWithoutPedidoNestedInput = {
    create?: XOR<EntregaCreateWithoutPedidoInput, EntregaUncheckedCreateWithoutPedidoInput>
    connectOrCreate?: EntregaCreateOrConnectWithoutPedidoInput
    upsert?: EntregaUpsertWithoutPedidoInput
    disconnect?: EntregaWhereInput | boolean
    delete?: EntregaWhereInput | boolean
    connect?: EntregaWhereUniqueInput
    update?: XOR<XOR<EntregaUpdateToOneWithWhereWithoutPedidoInput, EntregaUpdateWithoutPedidoInput>, EntregaUncheckedUpdateWithoutPedidoInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ItemPedidoUncheckedUpdateManyWithoutPedidoNestedInput = {
    create?: XOR<ItemPedidoCreateWithoutPedidoInput, ItemPedidoUncheckedCreateWithoutPedidoInput> | ItemPedidoCreateWithoutPedidoInput[] | ItemPedidoUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: ItemPedidoCreateOrConnectWithoutPedidoInput | ItemPedidoCreateOrConnectWithoutPedidoInput[]
    upsert?: ItemPedidoUpsertWithWhereUniqueWithoutPedidoInput | ItemPedidoUpsertWithWhereUniqueWithoutPedidoInput[]
    createMany?: ItemPedidoCreateManyPedidoInputEnvelope
    set?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
    disconnect?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
    delete?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
    connect?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
    update?: ItemPedidoUpdateWithWhereUniqueWithoutPedidoInput | ItemPedidoUpdateWithWhereUniqueWithoutPedidoInput[]
    updateMany?: ItemPedidoUpdateManyWithWhereWithoutPedidoInput | ItemPedidoUpdateManyWithWhereWithoutPedidoInput[]
    deleteMany?: ItemPedidoScalarWhereInput | ItemPedidoScalarWhereInput[]
  }

  export type PagamentoUncheckedUpdateOneWithoutPedidoNestedInput = {
    create?: XOR<PagamentoCreateWithoutPedidoInput, PagamentoUncheckedCreateWithoutPedidoInput>
    connectOrCreate?: PagamentoCreateOrConnectWithoutPedidoInput
    upsert?: PagamentoUpsertWithoutPedidoInput
    disconnect?: PagamentoWhereInput | boolean
    delete?: PagamentoWhereInput | boolean
    connect?: PagamentoWhereUniqueInput
    update?: XOR<XOR<PagamentoUpdateToOneWithWhereWithoutPedidoInput, PagamentoUpdateWithoutPedidoInput>, PagamentoUncheckedUpdateWithoutPedidoInput>
  }

  export type EntregaUncheckedUpdateOneWithoutPedidoNestedInput = {
    create?: XOR<EntregaCreateWithoutPedidoInput, EntregaUncheckedCreateWithoutPedidoInput>
    connectOrCreate?: EntregaCreateOrConnectWithoutPedidoInput
    upsert?: EntregaUpsertWithoutPedidoInput
    disconnect?: EntregaWhereInput | boolean
    delete?: EntregaWhereInput | boolean
    connect?: EntregaWhereUniqueInput
    update?: XOR<XOR<EntregaUpdateToOneWithWhereWithoutPedidoInput, EntregaUpdateWithoutPedidoInput>, EntregaUncheckedUpdateWithoutPedidoInput>
  }

  export type PedidoCreateNestedOneWithoutItensInput = {
    create?: XOR<PedidoCreateWithoutItensInput, PedidoUncheckedCreateWithoutItensInput>
    connectOrCreate?: PedidoCreateOrConnectWithoutItensInput
    connect?: PedidoWhereUniqueInput
  }

  export type ProdutoCreateNestedOneWithoutItensPedidoInput = {
    create?: XOR<ProdutoCreateWithoutItensPedidoInput, ProdutoUncheckedCreateWithoutItensPedidoInput>
    connectOrCreate?: ProdutoCreateOrConnectWithoutItensPedidoInput
    connect?: ProdutoWhereUniqueInput
  }

  export type PedidoUpdateOneRequiredWithoutItensNestedInput = {
    create?: XOR<PedidoCreateWithoutItensInput, PedidoUncheckedCreateWithoutItensInput>
    connectOrCreate?: PedidoCreateOrConnectWithoutItensInput
    upsert?: PedidoUpsertWithoutItensInput
    connect?: PedidoWhereUniqueInput
    update?: XOR<XOR<PedidoUpdateToOneWithWhereWithoutItensInput, PedidoUpdateWithoutItensInput>, PedidoUncheckedUpdateWithoutItensInput>
  }

  export type ProdutoUpdateOneRequiredWithoutItensPedidoNestedInput = {
    create?: XOR<ProdutoCreateWithoutItensPedidoInput, ProdutoUncheckedCreateWithoutItensPedidoInput>
    connectOrCreate?: ProdutoCreateOrConnectWithoutItensPedidoInput
    upsert?: ProdutoUpsertWithoutItensPedidoInput
    connect?: ProdutoWhereUniqueInput
    update?: XOR<XOR<ProdutoUpdateToOneWithWhereWithoutItensPedidoInput, ProdutoUpdateWithoutItensPedidoInput>, ProdutoUncheckedUpdateWithoutItensPedidoInput>
  }

  export type PedidoCreateNestedOneWithoutPagamentoInput = {
    create?: XOR<PedidoCreateWithoutPagamentoInput, PedidoUncheckedCreateWithoutPagamentoInput>
    connectOrCreate?: PedidoCreateOrConnectWithoutPagamentoInput
    connect?: PedidoWhereUniqueInput
  }

  export type EnumFormaPagamentoFieldUpdateOperationsInput = {
    set?: $Enums.FormaPagamento
  }

  export type EnumStatusPagamentoFieldUpdateOperationsInput = {
    set?: $Enums.StatusPagamento
  }

  export type PedidoUpdateOneRequiredWithoutPagamentoNestedInput = {
    create?: XOR<PedidoCreateWithoutPagamentoInput, PedidoUncheckedCreateWithoutPagamentoInput>
    connectOrCreate?: PedidoCreateOrConnectWithoutPagamentoInput
    upsert?: PedidoUpsertWithoutPagamentoInput
    connect?: PedidoWhereUniqueInput
    update?: XOR<XOR<PedidoUpdateToOneWithWhereWithoutPagamentoInput, PedidoUpdateWithoutPagamentoInput>, PedidoUncheckedUpdateWithoutPagamentoInput>
  }

  export type PedidoCreateNestedOneWithoutEntregaInput = {
    create?: XOR<PedidoCreateWithoutEntregaInput, PedidoUncheckedCreateWithoutEntregaInput>
    connectOrCreate?: PedidoCreateOrConnectWithoutEntregaInput
    connect?: PedidoWhereUniqueInput
  }

  export type EnumStatusEntregaFieldUpdateOperationsInput = {
    set?: $Enums.StatusEntrega
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type PedidoUpdateOneRequiredWithoutEntregaNestedInput = {
    create?: XOR<PedidoCreateWithoutEntregaInput, PedidoUncheckedCreateWithoutEntregaInput>
    connectOrCreate?: PedidoCreateOrConnectWithoutEntregaInput
    upsert?: PedidoUpsertWithoutEntregaInput
    connect?: PedidoWhereUniqueInput
    update?: XOR<XOR<PedidoUpdateToOneWithWhereWithoutEntregaInput, PedidoUpdateWithoutEntregaInput>, PedidoUncheckedUpdateWithoutEntregaInput>
  }

  export type UsuarioCreateNestedOneWithoutCarrinhoInput = {
    create?: XOR<UsuarioCreateWithoutCarrinhoInput, UsuarioUncheckedCreateWithoutCarrinhoInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutCarrinhoInput
    connect?: UsuarioWhereUniqueInput
  }

  export type ItemCarrinhoCreateNestedManyWithoutCarrinhoInput = {
    create?: XOR<ItemCarrinhoCreateWithoutCarrinhoInput, ItemCarrinhoUncheckedCreateWithoutCarrinhoInput> | ItemCarrinhoCreateWithoutCarrinhoInput[] | ItemCarrinhoUncheckedCreateWithoutCarrinhoInput[]
    connectOrCreate?: ItemCarrinhoCreateOrConnectWithoutCarrinhoInput | ItemCarrinhoCreateOrConnectWithoutCarrinhoInput[]
    createMany?: ItemCarrinhoCreateManyCarrinhoInputEnvelope
    connect?: ItemCarrinhoWhereUniqueInput | ItemCarrinhoWhereUniqueInput[]
  }

  export type ItemCarrinhoUncheckedCreateNestedManyWithoutCarrinhoInput = {
    create?: XOR<ItemCarrinhoCreateWithoutCarrinhoInput, ItemCarrinhoUncheckedCreateWithoutCarrinhoInput> | ItemCarrinhoCreateWithoutCarrinhoInput[] | ItemCarrinhoUncheckedCreateWithoutCarrinhoInput[]
    connectOrCreate?: ItemCarrinhoCreateOrConnectWithoutCarrinhoInput | ItemCarrinhoCreateOrConnectWithoutCarrinhoInput[]
    createMany?: ItemCarrinhoCreateManyCarrinhoInputEnvelope
    connect?: ItemCarrinhoWhereUniqueInput | ItemCarrinhoWhereUniqueInput[]
  }

  export type UsuarioUpdateOneRequiredWithoutCarrinhoNestedInput = {
    create?: XOR<UsuarioCreateWithoutCarrinhoInput, UsuarioUncheckedCreateWithoutCarrinhoInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutCarrinhoInput
    upsert?: UsuarioUpsertWithoutCarrinhoInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutCarrinhoInput, UsuarioUpdateWithoutCarrinhoInput>, UsuarioUncheckedUpdateWithoutCarrinhoInput>
  }

  export type ItemCarrinhoUpdateManyWithoutCarrinhoNestedInput = {
    create?: XOR<ItemCarrinhoCreateWithoutCarrinhoInput, ItemCarrinhoUncheckedCreateWithoutCarrinhoInput> | ItemCarrinhoCreateWithoutCarrinhoInput[] | ItemCarrinhoUncheckedCreateWithoutCarrinhoInput[]
    connectOrCreate?: ItemCarrinhoCreateOrConnectWithoutCarrinhoInput | ItemCarrinhoCreateOrConnectWithoutCarrinhoInput[]
    upsert?: ItemCarrinhoUpsertWithWhereUniqueWithoutCarrinhoInput | ItemCarrinhoUpsertWithWhereUniqueWithoutCarrinhoInput[]
    createMany?: ItemCarrinhoCreateManyCarrinhoInputEnvelope
    set?: ItemCarrinhoWhereUniqueInput | ItemCarrinhoWhereUniqueInput[]
    disconnect?: ItemCarrinhoWhereUniqueInput | ItemCarrinhoWhereUniqueInput[]
    delete?: ItemCarrinhoWhereUniqueInput | ItemCarrinhoWhereUniqueInput[]
    connect?: ItemCarrinhoWhereUniqueInput | ItemCarrinhoWhereUniqueInput[]
    update?: ItemCarrinhoUpdateWithWhereUniqueWithoutCarrinhoInput | ItemCarrinhoUpdateWithWhereUniqueWithoutCarrinhoInput[]
    updateMany?: ItemCarrinhoUpdateManyWithWhereWithoutCarrinhoInput | ItemCarrinhoUpdateManyWithWhereWithoutCarrinhoInput[]
    deleteMany?: ItemCarrinhoScalarWhereInput | ItemCarrinhoScalarWhereInput[]
  }

  export type ItemCarrinhoUncheckedUpdateManyWithoutCarrinhoNestedInput = {
    create?: XOR<ItemCarrinhoCreateWithoutCarrinhoInput, ItemCarrinhoUncheckedCreateWithoutCarrinhoInput> | ItemCarrinhoCreateWithoutCarrinhoInput[] | ItemCarrinhoUncheckedCreateWithoutCarrinhoInput[]
    connectOrCreate?: ItemCarrinhoCreateOrConnectWithoutCarrinhoInput | ItemCarrinhoCreateOrConnectWithoutCarrinhoInput[]
    upsert?: ItemCarrinhoUpsertWithWhereUniqueWithoutCarrinhoInput | ItemCarrinhoUpsertWithWhereUniqueWithoutCarrinhoInput[]
    createMany?: ItemCarrinhoCreateManyCarrinhoInputEnvelope
    set?: ItemCarrinhoWhereUniqueInput | ItemCarrinhoWhereUniqueInput[]
    disconnect?: ItemCarrinhoWhereUniqueInput | ItemCarrinhoWhereUniqueInput[]
    delete?: ItemCarrinhoWhereUniqueInput | ItemCarrinhoWhereUniqueInput[]
    connect?: ItemCarrinhoWhereUniqueInput | ItemCarrinhoWhereUniqueInput[]
    update?: ItemCarrinhoUpdateWithWhereUniqueWithoutCarrinhoInput | ItemCarrinhoUpdateWithWhereUniqueWithoutCarrinhoInput[]
    updateMany?: ItemCarrinhoUpdateManyWithWhereWithoutCarrinhoInput | ItemCarrinhoUpdateManyWithWhereWithoutCarrinhoInput[]
    deleteMany?: ItemCarrinhoScalarWhereInput | ItemCarrinhoScalarWhereInput[]
  }

  export type CarrinhoCreateNestedOneWithoutItensInput = {
    create?: XOR<CarrinhoCreateWithoutItensInput, CarrinhoUncheckedCreateWithoutItensInput>
    connectOrCreate?: CarrinhoCreateOrConnectWithoutItensInput
    connect?: CarrinhoWhereUniqueInput
  }

  export type ProdutoCreateNestedOneWithoutItensCarrinhoInput = {
    create?: XOR<ProdutoCreateWithoutItensCarrinhoInput, ProdutoUncheckedCreateWithoutItensCarrinhoInput>
    connectOrCreate?: ProdutoCreateOrConnectWithoutItensCarrinhoInput
    connect?: ProdutoWhereUniqueInput
  }

  export type CarrinhoUpdateOneRequiredWithoutItensNestedInput = {
    create?: XOR<CarrinhoCreateWithoutItensInput, CarrinhoUncheckedCreateWithoutItensInput>
    connectOrCreate?: CarrinhoCreateOrConnectWithoutItensInput
    upsert?: CarrinhoUpsertWithoutItensInput
    connect?: CarrinhoWhereUniqueInput
    update?: XOR<XOR<CarrinhoUpdateToOneWithWhereWithoutItensInput, CarrinhoUpdateWithoutItensInput>, CarrinhoUncheckedUpdateWithoutItensInput>
  }

  export type ProdutoUpdateOneRequiredWithoutItensCarrinhoNestedInput = {
    create?: XOR<ProdutoCreateWithoutItensCarrinhoInput, ProdutoUncheckedCreateWithoutItensCarrinhoInput>
    connectOrCreate?: ProdutoCreateOrConnectWithoutItensCarrinhoInput
    upsert?: ProdutoUpsertWithoutItensCarrinhoInput
    connect?: ProdutoWhereUniqueInput
    update?: XOR<XOR<ProdutoUpdateToOneWithWhereWithoutItensCarrinhoInput, ProdutoUpdateWithoutItensCarrinhoInput>, ProdutoUncheckedUpdateWithoutItensCarrinhoInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumStatusPedidoFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusPedido | EnumStatusPedidoFieldRefInput<$PrismaModel>
    in?: $Enums.StatusPedido[] | ListEnumStatusPedidoFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusPedido[] | ListEnumStatusPedidoFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusPedidoFilter<$PrismaModel> | $Enums.StatusPedido
  }

  export type NestedEnumTipoPedidoFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoPedido | EnumTipoPedidoFieldRefInput<$PrismaModel>
    in?: $Enums.TipoPedido[] | ListEnumTipoPedidoFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoPedido[] | ListEnumTipoPedidoFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoPedidoFilter<$PrismaModel> | $Enums.TipoPedido
  }

  export type NestedEnumStatusPedidoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusPedido | EnumStatusPedidoFieldRefInput<$PrismaModel>
    in?: $Enums.StatusPedido[] | ListEnumStatusPedidoFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusPedido[] | ListEnumStatusPedidoFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusPedidoWithAggregatesFilter<$PrismaModel> | $Enums.StatusPedido
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusPedidoFilter<$PrismaModel>
    _max?: NestedEnumStatusPedidoFilter<$PrismaModel>
  }

  export type NestedEnumTipoPedidoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoPedido | EnumTipoPedidoFieldRefInput<$PrismaModel>
    in?: $Enums.TipoPedido[] | ListEnumTipoPedidoFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoPedido[] | ListEnumTipoPedidoFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoPedidoWithAggregatesFilter<$PrismaModel> | $Enums.TipoPedido
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoPedidoFilter<$PrismaModel>
    _max?: NestedEnumTipoPedidoFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumFormaPagamentoFilter<$PrismaModel = never> = {
    equals?: $Enums.FormaPagamento | EnumFormaPagamentoFieldRefInput<$PrismaModel>
    in?: $Enums.FormaPagamento[] | ListEnumFormaPagamentoFieldRefInput<$PrismaModel>
    notIn?: $Enums.FormaPagamento[] | ListEnumFormaPagamentoFieldRefInput<$PrismaModel>
    not?: NestedEnumFormaPagamentoFilter<$PrismaModel> | $Enums.FormaPagamento
  }

  export type NestedEnumStatusPagamentoFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusPagamento | EnumStatusPagamentoFieldRefInput<$PrismaModel>
    in?: $Enums.StatusPagamento[] | ListEnumStatusPagamentoFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusPagamento[] | ListEnumStatusPagamentoFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusPagamentoFilter<$PrismaModel> | $Enums.StatusPagamento
  }

  export type NestedEnumFormaPagamentoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FormaPagamento | EnumFormaPagamentoFieldRefInput<$PrismaModel>
    in?: $Enums.FormaPagamento[] | ListEnumFormaPagamentoFieldRefInput<$PrismaModel>
    notIn?: $Enums.FormaPagamento[] | ListEnumFormaPagamentoFieldRefInput<$PrismaModel>
    not?: NestedEnumFormaPagamentoWithAggregatesFilter<$PrismaModel> | $Enums.FormaPagamento
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFormaPagamentoFilter<$PrismaModel>
    _max?: NestedEnumFormaPagamentoFilter<$PrismaModel>
  }

  export type NestedEnumStatusPagamentoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusPagamento | EnumStatusPagamentoFieldRefInput<$PrismaModel>
    in?: $Enums.StatusPagamento[] | ListEnumStatusPagamentoFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusPagamento[] | ListEnumStatusPagamentoFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusPagamentoWithAggregatesFilter<$PrismaModel> | $Enums.StatusPagamento
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusPagamentoFilter<$PrismaModel>
    _max?: NestedEnumStatusPagamentoFilter<$PrismaModel>
  }

  export type NestedEnumStatusEntregaFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusEntrega | EnumStatusEntregaFieldRefInput<$PrismaModel>
    in?: $Enums.StatusEntrega[] | ListEnumStatusEntregaFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusEntrega[] | ListEnumStatusEntregaFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusEntregaFilter<$PrismaModel> | $Enums.StatusEntrega
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumStatusEntregaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusEntrega | EnumStatusEntregaFieldRefInput<$PrismaModel>
    in?: $Enums.StatusEntrega[] | ListEnumStatusEntregaFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusEntrega[] | ListEnumStatusEntregaFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusEntregaWithAggregatesFilter<$PrismaModel> | $Enums.StatusEntrega
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusEntregaFilter<$PrismaModel>
    _max?: NestedEnumStatusEntregaFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnderecoCreateWithoutUsuarioInput = {
    rua: string
    numero: string
    bairro: string
    cidade: string
    estado: string
    cep: string
    pedidos?: PedidoCreateNestedManyWithoutEnderecoInput
  }

  export type EnderecoUncheckedCreateWithoutUsuarioInput = {
    id?: number
    rua: string
    numero: string
    bairro: string
    cidade: string
    estado: string
    cep: string
    pedidos?: PedidoUncheckedCreateNestedManyWithoutEnderecoInput
  }

  export type EnderecoCreateOrConnectWithoutUsuarioInput = {
    where: EnderecoWhereUniqueInput
    create: XOR<EnderecoCreateWithoutUsuarioInput, EnderecoUncheckedCreateWithoutUsuarioInput>
  }

  export type EnderecoCreateManyUsuarioInputEnvelope = {
    data: EnderecoCreateManyUsuarioInput | EnderecoCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type PedidoCreateWithoutUsuarioInput = {
    status?: $Enums.StatusPedido
    tipo: $Enums.TipoPedido
    total: Decimal | DecimalJsLike | number | string
    criadoEm?: Date | string
    endereco?: EnderecoCreateNestedOneWithoutPedidosInput
    itens?: ItemPedidoCreateNestedManyWithoutPedidoInput
    pagamento?: PagamentoCreateNestedOneWithoutPedidoInput
    entrega?: EntregaCreateNestedOneWithoutPedidoInput
  }

  export type PedidoUncheckedCreateWithoutUsuarioInput = {
    id?: number
    status?: $Enums.StatusPedido
    tipo: $Enums.TipoPedido
    total: Decimal | DecimalJsLike | number | string
    criadoEm?: Date | string
    enderecoId?: number | null
    itens?: ItemPedidoUncheckedCreateNestedManyWithoutPedidoInput
    pagamento?: PagamentoUncheckedCreateNestedOneWithoutPedidoInput
    entrega?: EntregaUncheckedCreateNestedOneWithoutPedidoInput
  }

  export type PedidoCreateOrConnectWithoutUsuarioInput = {
    where: PedidoWhereUniqueInput
    create: XOR<PedidoCreateWithoutUsuarioInput, PedidoUncheckedCreateWithoutUsuarioInput>
  }

  export type PedidoCreateManyUsuarioInputEnvelope = {
    data: PedidoCreateManyUsuarioInput | PedidoCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type CarrinhoCreateWithoutUsuarioInput = {
    itens?: ItemCarrinhoCreateNestedManyWithoutCarrinhoInput
  }

  export type CarrinhoUncheckedCreateWithoutUsuarioInput = {
    id?: number
    itens?: ItemCarrinhoUncheckedCreateNestedManyWithoutCarrinhoInput
  }

  export type CarrinhoCreateOrConnectWithoutUsuarioInput = {
    where: CarrinhoWhereUniqueInput
    create: XOR<CarrinhoCreateWithoutUsuarioInput, CarrinhoUncheckedCreateWithoutUsuarioInput>
  }

  export type EnderecoUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: EnderecoWhereUniqueInput
    update: XOR<EnderecoUpdateWithoutUsuarioInput, EnderecoUncheckedUpdateWithoutUsuarioInput>
    create: XOR<EnderecoCreateWithoutUsuarioInput, EnderecoUncheckedCreateWithoutUsuarioInput>
  }

  export type EnderecoUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: EnderecoWhereUniqueInput
    data: XOR<EnderecoUpdateWithoutUsuarioInput, EnderecoUncheckedUpdateWithoutUsuarioInput>
  }

  export type EnderecoUpdateManyWithWhereWithoutUsuarioInput = {
    where: EnderecoScalarWhereInput
    data: XOR<EnderecoUpdateManyMutationInput, EnderecoUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type EnderecoScalarWhereInput = {
    AND?: EnderecoScalarWhereInput | EnderecoScalarWhereInput[]
    OR?: EnderecoScalarWhereInput[]
    NOT?: EnderecoScalarWhereInput | EnderecoScalarWhereInput[]
    id?: IntFilter<"Endereco"> | number
    rua?: StringFilter<"Endereco"> | string
    numero?: StringFilter<"Endereco"> | string
    bairro?: StringFilter<"Endereco"> | string
    cidade?: StringFilter<"Endereco"> | string
    estado?: StringFilter<"Endereco"> | string
    cep?: StringFilter<"Endereco"> | string
    usuarioId?: IntFilter<"Endereco"> | number
  }

  export type PedidoUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: PedidoWhereUniqueInput
    update: XOR<PedidoUpdateWithoutUsuarioInput, PedidoUncheckedUpdateWithoutUsuarioInput>
    create: XOR<PedidoCreateWithoutUsuarioInput, PedidoUncheckedCreateWithoutUsuarioInput>
  }

  export type PedidoUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: PedidoWhereUniqueInput
    data: XOR<PedidoUpdateWithoutUsuarioInput, PedidoUncheckedUpdateWithoutUsuarioInput>
  }

  export type PedidoUpdateManyWithWhereWithoutUsuarioInput = {
    where: PedidoScalarWhereInput
    data: XOR<PedidoUpdateManyMutationInput, PedidoUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type PedidoScalarWhereInput = {
    AND?: PedidoScalarWhereInput | PedidoScalarWhereInput[]
    OR?: PedidoScalarWhereInput[]
    NOT?: PedidoScalarWhereInput | PedidoScalarWhereInput[]
    id?: IntFilter<"Pedido"> | number
    status?: EnumStatusPedidoFilter<"Pedido"> | $Enums.StatusPedido
    tipo?: EnumTipoPedidoFilter<"Pedido"> | $Enums.TipoPedido
    total?: DecimalFilter<"Pedido"> | Decimal | DecimalJsLike | number | string
    criadoEm?: DateTimeFilter<"Pedido"> | Date | string
    usuarioId?: IntFilter<"Pedido"> | number
    enderecoId?: IntNullableFilter<"Pedido"> | number | null
  }

  export type CarrinhoUpsertWithoutUsuarioInput = {
    update: XOR<CarrinhoUpdateWithoutUsuarioInput, CarrinhoUncheckedUpdateWithoutUsuarioInput>
    create: XOR<CarrinhoCreateWithoutUsuarioInput, CarrinhoUncheckedCreateWithoutUsuarioInput>
    where?: CarrinhoWhereInput
  }

  export type CarrinhoUpdateToOneWithWhereWithoutUsuarioInput = {
    where?: CarrinhoWhereInput
    data: XOR<CarrinhoUpdateWithoutUsuarioInput, CarrinhoUncheckedUpdateWithoutUsuarioInput>
  }

  export type CarrinhoUpdateWithoutUsuarioInput = {
    itens?: ItemCarrinhoUpdateManyWithoutCarrinhoNestedInput
  }

  export type CarrinhoUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    itens?: ItemCarrinhoUncheckedUpdateManyWithoutCarrinhoNestedInput
  }

  export type UsuarioCreateWithoutEnderecosInput = {
    nome: string
    email: string
    senha: string
    telefone?: string | null
    role?: $Enums.Role
    criadoEm?: Date | string
    pedidos?: PedidoCreateNestedManyWithoutUsuarioInput
    carrinho?: CarrinhoCreateNestedOneWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutEnderecosInput = {
    id?: number
    nome: string
    email: string
    senha: string
    telefone?: string | null
    role?: $Enums.Role
    criadoEm?: Date | string
    pedidos?: PedidoUncheckedCreateNestedManyWithoutUsuarioInput
    carrinho?: CarrinhoUncheckedCreateNestedOneWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutEnderecosInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutEnderecosInput, UsuarioUncheckedCreateWithoutEnderecosInput>
  }

  export type PedidoCreateWithoutEnderecoInput = {
    status?: $Enums.StatusPedido
    tipo: $Enums.TipoPedido
    total: Decimal | DecimalJsLike | number | string
    criadoEm?: Date | string
    usuario: UsuarioCreateNestedOneWithoutPedidosInput
    itens?: ItemPedidoCreateNestedManyWithoutPedidoInput
    pagamento?: PagamentoCreateNestedOneWithoutPedidoInput
    entrega?: EntregaCreateNestedOneWithoutPedidoInput
  }

  export type PedidoUncheckedCreateWithoutEnderecoInput = {
    id?: number
    status?: $Enums.StatusPedido
    tipo: $Enums.TipoPedido
    total: Decimal | DecimalJsLike | number | string
    criadoEm?: Date | string
    usuarioId: number
    itens?: ItemPedidoUncheckedCreateNestedManyWithoutPedidoInput
    pagamento?: PagamentoUncheckedCreateNestedOneWithoutPedidoInput
    entrega?: EntregaUncheckedCreateNestedOneWithoutPedidoInput
  }

  export type PedidoCreateOrConnectWithoutEnderecoInput = {
    where: PedidoWhereUniqueInput
    create: XOR<PedidoCreateWithoutEnderecoInput, PedidoUncheckedCreateWithoutEnderecoInput>
  }

  export type PedidoCreateManyEnderecoInputEnvelope = {
    data: PedidoCreateManyEnderecoInput | PedidoCreateManyEnderecoInput[]
    skipDuplicates?: boolean
  }

  export type UsuarioUpsertWithoutEnderecosInput = {
    update: XOR<UsuarioUpdateWithoutEnderecosInput, UsuarioUncheckedUpdateWithoutEnderecosInput>
    create: XOR<UsuarioCreateWithoutEnderecosInput, UsuarioUncheckedCreateWithoutEnderecosInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutEnderecosInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutEnderecosInput, UsuarioUncheckedUpdateWithoutEnderecosInput>
  }

  export type UsuarioUpdateWithoutEnderecosInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    pedidos?: PedidoUpdateManyWithoutUsuarioNestedInput
    carrinho?: CarrinhoUpdateOneWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutEnderecosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    pedidos?: PedidoUncheckedUpdateManyWithoutUsuarioNestedInput
    carrinho?: CarrinhoUncheckedUpdateOneWithoutUsuarioNestedInput
  }

  export type PedidoUpsertWithWhereUniqueWithoutEnderecoInput = {
    where: PedidoWhereUniqueInput
    update: XOR<PedidoUpdateWithoutEnderecoInput, PedidoUncheckedUpdateWithoutEnderecoInput>
    create: XOR<PedidoCreateWithoutEnderecoInput, PedidoUncheckedCreateWithoutEnderecoInput>
  }

  export type PedidoUpdateWithWhereUniqueWithoutEnderecoInput = {
    where: PedidoWhereUniqueInput
    data: XOR<PedidoUpdateWithoutEnderecoInput, PedidoUncheckedUpdateWithoutEnderecoInput>
  }

  export type PedidoUpdateManyWithWhereWithoutEnderecoInput = {
    where: PedidoScalarWhereInput
    data: XOR<PedidoUpdateManyMutationInput, PedidoUncheckedUpdateManyWithoutEnderecoInput>
  }

  export type ProdutoCreateWithoutCategoriaInput = {
    nome: string
    descricao?: string | null
    preco: Decimal | DecimalJsLike | number | string
    imagemUrl?: string | null
    disponivel?: boolean
    itensPedido?: ItemPedidoCreateNestedManyWithoutProdutoInput
    itensCarrinho?: ItemCarrinhoCreateNestedManyWithoutProdutoInput
  }

  export type ProdutoUncheckedCreateWithoutCategoriaInput = {
    id?: number
    nome: string
    descricao?: string | null
    preco: Decimal | DecimalJsLike | number | string
    imagemUrl?: string | null
    disponivel?: boolean
    itensPedido?: ItemPedidoUncheckedCreateNestedManyWithoutProdutoInput
    itensCarrinho?: ItemCarrinhoUncheckedCreateNestedManyWithoutProdutoInput
  }

  export type ProdutoCreateOrConnectWithoutCategoriaInput = {
    where: ProdutoWhereUniqueInput
    create: XOR<ProdutoCreateWithoutCategoriaInput, ProdutoUncheckedCreateWithoutCategoriaInput>
  }

  export type ProdutoCreateManyCategoriaInputEnvelope = {
    data: ProdutoCreateManyCategoriaInput | ProdutoCreateManyCategoriaInput[]
    skipDuplicates?: boolean
  }

  export type ProdutoUpsertWithWhereUniqueWithoutCategoriaInput = {
    where: ProdutoWhereUniqueInput
    update: XOR<ProdutoUpdateWithoutCategoriaInput, ProdutoUncheckedUpdateWithoutCategoriaInput>
    create: XOR<ProdutoCreateWithoutCategoriaInput, ProdutoUncheckedCreateWithoutCategoriaInput>
  }

  export type ProdutoUpdateWithWhereUniqueWithoutCategoriaInput = {
    where: ProdutoWhereUniqueInput
    data: XOR<ProdutoUpdateWithoutCategoriaInput, ProdutoUncheckedUpdateWithoutCategoriaInput>
  }

  export type ProdutoUpdateManyWithWhereWithoutCategoriaInput = {
    where: ProdutoScalarWhereInput
    data: XOR<ProdutoUpdateManyMutationInput, ProdutoUncheckedUpdateManyWithoutCategoriaInput>
  }

  export type ProdutoScalarWhereInput = {
    AND?: ProdutoScalarWhereInput | ProdutoScalarWhereInput[]
    OR?: ProdutoScalarWhereInput[]
    NOT?: ProdutoScalarWhereInput | ProdutoScalarWhereInput[]
    id?: IntFilter<"Produto"> | number
    nome?: StringFilter<"Produto"> | string
    descricao?: StringNullableFilter<"Produto"> | string | null
    preco?: DecimalFilter<"Produto"> | Decimal | DecimalJsLike | number | string
    imagemUrl?: StringNullableFilter<"Produto"> | string | null
    disponivel?: BoolFilter<"Produto"> | boolean
    categoriaId?: IntFilter<"Produto"> | number
  }

  export type CategoriaCreateWithoutProdutosInput = {
    nome: string
    descricao?: string | null
  }

  export type CategoriaUncheckedCreateWithoutProdutosInput = {
    id?: number
    nome: string
    descricao?: string | null
  }

  export type CategoriaCreateOrConnectWithoutProdutosInput = {
    where: CategoriaWhereUniqueInput
    create: XOR<CategoriaCreateWithoutProdutosInput, CategoriaUncheckedCreateWithoutProdutosInput>
  }

  export type ItemPedidoCreateWithoutProdutoInput = {
    quantidade: number
    precoUnitario: Decimal | DecimalJsLike | number | string
    pedido: PedidoCreateNestedOneWithoutItensInput
  }

  export type ItemPedidoUncheckedCreateWithoutProdutoInput = {
    id?: number
    quantidade: number
    precoUnitario: Decimal | DecimalJsLike | number | string
    pedidoId: number
  }

  export type ItemPedidoCreateOrConnectWithoutProdutoInput = {
    where: ItemPedidoWhereUniqueInput
    create: XOR<ItemPedidoCreateWithoutProdutoInput, ItemPedidoUncheckedCreateWithoutProdutoInput>
  }

  export type ItemPedidoCreateManyProdutoInputEnvelope = {
    data: ItemPedidoCreateManyProdutoInput | ItemPedidoCreateManyProdutoInput[]
    skipDuplicates?: boolean
  }

  export type ItemCarrinhoCreateWithoutProdutoInput = {
    quantidade: number
    carrinho: CarrinhoCreateNestedOneWithoutItensInput
  }

  export type ItemCarrinhoUncheckedCreateWithoutProdutoInput = {
    id?: number
    quantidade: number
    carrinhoId: number
  }

  export type ItemCarrinhoCreateOrConnectWithoutProdutoInput = {
    where: ItemCarrinhoWhereUniqueInput
    create: XOR<ItemCarrinhoCreateWithoutProdutoInput, ItemCarrinhoUncheckedCreateWithoutProdutoInput>
  }

  export type ItemCarrinhoCreateManyProdutoInputEnvelope = {
    data: ItemCarrinhoCreateManyProdutoInput | ItemCarrinhoCreateManyProdutoInput[]
    skipDuplicates?: boolean
  }

  export type CategoriaUpsertWithoutProdutosInput = {
    update: XOR<CategoriaUpdateWithoutProdutosInput, CategoriaUncheckedUpdateWithoutProdutosInput>
    create: XOR<CategoriaCreateWithoutProdutosInput, CategoriaUncheckedCreateWithoutProdutosInput>
    where?: CategoriaWhereInput
  }

  export type CategoriaUpdateToOneWithWhereWithoutProdutosInput = {
    where?: CategoriaWhereInput
    data: XOR<CategoriaUpdateWithoutProdutosInput, CategoriaUncheckedUpdateWithoutProdutosInput>
  }

  export type CategoriaUpdateWithoutProdutosInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CategoriaUncheckedUpdateWithoutProdutosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ItemPedidoUpsertWithWhereUniqueWithoutProdutoInput = {
    where: ItemPedidoWhereUniqueInput
    update: XOR<ItemPedidoUpdateWithoutProdutoInput, ItemPedidoUncheckedUpdateWithoutProdutoInput>
    create: XOR<ItemPedidoCreateWithoutProdutoInput, ItemPedidoUncheckedCreateWithoutProdutoInput>
  }

  export type ItemPedidoUpdateWithWhereUniqueWithoutProdutoInput = {
    where: ItemPedidoWhereUniqueInput
    data: XOR<ItemPedidoUpdateWithoutProdutoInput, ItemPedidoUncheckedUpdateWithoutProdutoInput>
  }

  export type ItemPedidoUpdateManyWithWhereWithoutProdutoInput = {
    where: ItemPedidoScalarWhereInput
    data: XOR<ItemPedidoUpdateManyMutationInput, ItemPedidoUncheckedUpdateManyWithoutProdutoInput>
  }

  export type ItemPedidoScalarWhereInput = {
    AND?: ItemPedidoScalarWhereInput | ItemPedidoScalarWhereInput[]
    OR?: ItemPedidoScalarWhereInput[]
    NOT?: ItemPedidoScalarWhereInput | ItemPedidoScalarWhereInput[]
    id?: IntFilter<"ItemPedido"> | number
    quantidade?: IntFilter<"ItemPedido"> | number
    precoUnitario?: DecimalFilter<"ItemPedido"> | Decimal | DecimalJsLike | number | string
    pedidoId?: IntFilter<"ItemPedido"> | number
    produtoId?: IntFilter<"ItemPedido"> | number
  }

  export type ItemCarrinhoUpsertWithWhereUniqueWithoutProdutoInput = {
    where: ItemCarrinhoWhereUniqueInput
    update: XOR<ItemCarrinhoUpdateWithoutProdutoInput, ItemCarrinhoUncheckedUpdateWithoutProdutoInput>
    create: XOR<ItemCarrinhoCreateWithoutProdutoInput, ItemCarrinhoUncheckedCreateWithoutProdutoInput>
  }

  export type ItemCarrinhoUpdateWithWhereUniqueWithoutProdutoInput = {
    where: ItemCarrinhoWhereUniqueInput
    data: XOR<ItemCarrinhoUpdateWithoutProdutoInput, ItemCarrinhoUncheckedUpdateWithoutProdutoInput>
  }

  export type ItemCarrinhoUpdateManyWithWhereWithoutProdutoInput = {
    where: ItemCarrinhoScalarWhereInput
    data: XOR<ItemCarrinhoUpdateManyMutationInput, ItemCarrinhoUncheckedUpdateManyWithoutProdutoInput>
  }

  export type ItemCarrinhoScalarWhereInput = {
    AND?: ItemCarrinhoScalarWhereInput | ItemCarrinhoScalarWhereInput[]
    OR?: ItemCarrinhoScalarWhereInput[]
    NOT?: ItemCarrinhoScalarWhereInput | ItemCarrinhoScalarWhereInput[]
    id?: IntFilter<"ItemCarrinho"> | number
    quantidade?: IntFilter<"ItemCarrinho"> | number
    carrinhoId?: IntFilter<"ItemCarrinho"> | number
    produtoId?: IntFilter<"ItemCarrinho"> | number
  }

  export type UsuarioCreateWithoutPedidosInput = {
    nome: string
    email: string
    senha: string
    telefone?: string | null
    role?: $Enums.Role
    criadoEm?: Date | string
    enderecos?: EnderecoCreateNestedManyWithoutUsuarioInput
    carrinho?: CarrinhoCreateNestedOneWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutPedidosInput = {
    id?: number
    nome: string
    email: string
    senha: string
    telefone?: string | null
    role?: $Enums.Role
    criadoEm?: Date | string
    enderecos?: EnderecoUncheckedCreateNestedManyWithoutUsuarioInput
    carrinho?: CarrinhoUncheckedCreateNestedOneWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutPedidosInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutPedidosInput, UsuarioUncheckedCreateWithoutPedidosInput>
  }

  export type EnderecoCreateWithoutPedidosInput = {
    rua: string
    numero: string
    bairro: string
    cidade: string
    estado: string
    cep: string
    usuario: UsuarioCreateNestedOneWithoutEnderecosInput
  }

  export type EnderecoUncheckedCreateWithoutPedidosInput = {
    id?: number
    rua: string
    numero: string
    bairro: string
    cidade: string
    estado: string
    cep: string
    usuarioId: number
  }

  export type EnderecoCreateOrConnectWithoutPedidosInput = {
    where: EnderecoWhereUniqueInput
    create: XOR<EnderecoCreateWithoutPedidosInput, EnderecoUncheckedCreateWithoutPedidosInput>
  }

  export type ItemPedidoCreateWithoutPedidoInput = {
    quantidade: number
    precoUnitario: Decimal | DecimalJsLike | number | string
    produto: ProdutoCreateNestedOneWithoutItensPedidoInput
  }

  export type ItemPedidoUncheckedCreateWithoutPedidoInput = {
    id?: number
    quantidade: number
    precoUnitario: Decimal | DecimalJsLike | number | string
    produtoId: number
  }

  export type ItemPedidoCreateOrConnectWithoutPedidoInput = {
    where: ItemPedidoWhereUniqueInput
    create: XOR<ItemPedidoCreateWithoutPedidoInput, ItemPedidoUncheckedCreateWithoutPedidoInput>
  }

  export type ItemPedidoCreateManyPedidoInputEnvelope = {
    data: ItemPedidoCreateManyPedidoInput | ItemPedidoCreateManyPedidoInput[]
    skipDuplicates?: boolean
  }

  export type PagamentoCreateWithoutPedidoInput = {
    forma: $Enums.FormaPagamento
    status?: $Enums.StatusPagamento
    valor: Decimal | DecimalJsLike | number | string
    externalId?: string | null
  }

  export type PagamentoUncheckedCreateWithoutPedidoInput = {
    id?: number
    forma: $Enums.FormaPagamento
    status?: $Enums.StatusPagamento
    valor: Decimal | DecimalJsLike | number | string
    externalId?: string | null
  }

  export type PagamentoCreateOrConnectWithoutPedidoInput = {
    where: PagamentoWhereUniqueInput
    create: XOR<PagamentoCreateWithoutPedidoInput, PagamentoUncheckedCreateWithoutPedidoInput>
  }

  export type EntregaCreateWithoutPedidoInput = {
    status?: $Enums.StatusEntrega
    previsao?: Date | string | null
    codigoRastreio?: string | null
  }

  export type EntregaUncheckedCreateWithoutPedidoInput = {
    id?: number
    status?: $Enums.StatusEntrega
    previsao?: Date | string | null
    codigoRastreio?: string | null
  }

  export type EntregaCreateOrConnectWithoutPedidoInput = {
    where: EntregaWhereUniqueInput
    create: XOR<EntregaCreateWithoutPedidoInput, EntregaUncheckedCreateWithoutPedidoInput>
  }

  export type UsuarioUpsertWithoutPedidosInput = {
    update: XOR<UsuarioUpdateWithoutPedidosInput, UsuarioUncheckedUpdateWithoutPedidosInput>
    create: XOR<UsuarioCreateWithoutPedidosInput, UsuarioUncheckedCreateWithoutPedidosInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutPedidosInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutPedidosInput, UsuarioUncheckedUpdateWithoutPedidosInput>
  }

  export type UsuarioUpdateWithoutPedidosInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    enderecos?: EnderecoUpdateManyWithoutUsuarioNestedInput
    carrinho?: CarrinhoUpdateOneWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutPedidosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    enderecos?: EnderecoUncheckedUpdateManyWithoutUsuarioNestedInput
    carrinho?: CarrinhoUncheckedUpdateOneWithoutUsuarioNestedInput
  }

  export type EnderecoUpsertWithoutPedidosInput = {
    update: XOR<EnderecoUpdateWithoutPedidosInput, EnderecoUncheckedUpdateWithoutPedidosInput>
    create: XOR<EnderecoCreateWithoutPedidosInput, EnderecoUncheckedCreateWithoutPedidosInput>
    where?: EnderecoWhereInput
  }

  export type EnderecoUpdateToOneWithWhereWithoutPedidosInput = {
    where?: EnderecoWhereInput
    data: XOR<EnderecoUpdateWithoutPedidosInput, EnderecoUncheckedUpdateWithoutPedidosInput>
  }

  export type EnderecoUpdateWithoutPedidosInput = {
    rua?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    bairro?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    cep?: StringFieldUpdateOperationsInput | string
    usuario?: UsuarioUpdateOneRequiredWithoutEnderecosNestedInput
  }

  export type EnderecoUncheckedUpdateWithoutPedidosInput = {
    id?: IntFieldUpdateOperationsInput | number
    rua?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    bairro?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    cep?: StringFieldUpdateOperationsInput | string
    usuarioId?: IntFieldUpdateOperationsInput | number
  }

  export type ItemPedidoUpsertWithWhereUniqueWithoutPedidoInput = {
    where: ItemPedidoWhereUniqueInput
    update: XOR<ItemPedidoUpdateWithoutPedidoInput, ItemPedidoUncheckedUpdateWithoutPedidoInput>
    create: XOR<ItemPedidoCreateWithoutPedidoInput, ItemPedidoUncheckedCreateWithoutPedidoInput>
  }

  export type ItemPedidoUpdateWithWhereUniqueWithoutPedidoInput = {
    where: ItemPedidoWhereUniqueInput
    data: XOR<ItemPedidoUpdateWithoutPedidoInput, ItemPedidoUncheckedUpdateWithoutPedidoInput>
  }

  export type ItemPedidoUpdateManyWithWhereWithoutPedidoInput = {
    where: ItemPedidoScalarWhereInput
    data: XOR<ItemPedidoUpdateManyMutationInput, ItemPedidoUncheckedUpdateManyWithoutPedidoInput>
  }

  export type PagamentoUpsertWithoutPedidoInput = {
    update: XOR<PagamentoUpdateWithoutPedidoInput, PagamentoUncheckedUpdateWithoutPedidoInput>
    create: XOR<PagamentoCreateWithoutPedidoInput, PagamentoUncheckedCreateWithoutPedidoInput>
    where?: PagamentoWhereInput
  }

  export type PagamentoUpdateToOneWithWhereWithoutPedidoInput = {
    where?: PagamentoWhereInput
    data: XOR<PagamentoUpdateWithoutPedidoInput, PagamentoUncheckedUpdateWithoutPedidoInput>
  }

  export type PagamentoUpdateWithoutPedidoInput = {
    forma?: EnumFormaPagamentoFieldUpdateOperationsInput | $Enums.FormaPagamento
    status?: EnumStatusPagamentoFieldUpdateOperationsInput | $Enums.StatusPagamento
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PagamentoUncheckedUpdateWithoutPedidoInput = {
    id?: IntFieldUpdateOperationsInput | number
    forma?: EnumFormaPagamentoFieldUpdateOperationsInput | $Enums.FormaPagamento
    status?: EnumStatusPagamentoFieldUpdateOperationsInput | $Enums.StatusPagamento
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EntregaUpsertWithoutPedidoInput = {
    update: XOR<EntregaUpdateWithoutPedidoInput, EntregaUncheckedUpdateWithoutPedidoInput>
    create: XOR<EntregaCreateWithoutPedidoInput, EntregaUncheckedCreateWithoutPedidoInput>
    where?: EntregaWhereInput
  }

  export type EntregaUpdateToOneWithWhereWithoutPedidoInput = {
    where?: EntregaWhereInput
    data: XOR<EntregaUpdateWithoutPedidoInput, EntregaUncheckedUpdateWithoutPedidoInput>
  }

  export type EntregaUpdateWithoutPedidoInput = {
    status?: EnumStatusEntregaFieldUpdateOperationsInput | $Enums.StatusEntrega
    previsao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    codigoRastreio?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EntregaUncheckedUpdateWithoutPedidoInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusEntregaFieldUpdateOperationsInput | $Enums.StatusEntrega
    previsao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    codigoRastreio?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PedidoCreateWithoutItensInput = {
    status?: $Enums.StatusPedido
    tipo: $Enums.TipoPedido
    total: Decimal | DecimalJsLike | number | string
    criadoEm?: Date | string
    usuario: UsuarioCreateNestedOneWithoutPedidosInput
    endereco?: EnderecoCreateNestedOneWithoutPedidosInput
    pagamento?: PagamentoCreateNestedOneWithoutPedidoInput
    entrega?: EntregaCreateNestedOneWithoutPedidoInput
  }

  export type PedidoUncheckedCreateWithoutItensInput = {
    id?: number
    status?: $Enums.StatusPedido
    tipo: $Enums.TipoPedido
    total: Decimal | DecimalJsLike | number | string
    criadoEm?: Date | string
    usuarioId: number
    enderecoId?: number | null
    pagamento?: PagamentoUncheckedCreateNestedOneWithoutPedidoInput
    entrega?: EntregaUncheckedCreateNestedOneWithoutPedidoInput
  }

  export type PedidoCreateOrConnectWithoutItensInput = {
    where: PedidoWhereUniqueInput
    create: XOR<PedidoCreateWithoutItensInput, PedidoUncheckedCreateWithoutItensInput>
  }

  export type ProdutoCreateWithoutItensPedidoInput = {
    nome: string
    descricao?: string | null
    preco: Decimal | DecimalJsLike | number | string
    imagemUrl?: string | null
    disponivel?: boolean
    categoria: CategoriaCreateNestedOneWithoutProdutosInput
    itensCarrinho?: ItemCarrinhoCreateNestedManyWithoutProdutoInput
  }

  export type ProdutoUncheckedCreateWithoutItensPedidoInput = {
    id?: number
    nome: string
    descricao?: string | null
    preco: Decimal | DecimalJsLike | number | string
    imagemUrl?: string | null
    disponivel?: boolean
    categoriaId: number
    itensCarrinho?: ItemCarrinhoUncheckedCreateNestedManyWithoutProdutoInput
  }

  export type ProdutoCreateOrConnectWithoutItensPedidoInput = {
    where: ProdutoWhereUniqueInput
    create: XOR<ProdutoCreateWithoutItensPedidoInput, ProdutoUncheckedCreateWithoutItensPedidoInput>
  }

  export type PedidoUpsertWithoutItensInput = {
    update: XOR<PedidoUpdateWithoutItensInput, PedidoUncheckedUpdateWithoutItensInput>
    create: XOR<PedidoCreateWithoutItensInput, PedidoUncheckedCreateWithoutItensInput>
    where?: PedidoWhereInput
  }

  export type PedidoUpdateToOneWithWhereWithoutItensInput = {
    where?: PedidoWhereInput
    data: XOR<PedidoUpdateWithoutItensInput, PedidoUncheckedUpdateWithoutItensInput>
  }

  export type PedidoUpdateWithoutItensInput = {
    status?: EnumStatusPedidoFieldUpdateOperationsInput | $Enums.StatusPedido
    tipo?: EnumTipoPedidoFieldUpdateOperationsInput | $Enums.TipoPedido
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutPedidosNestedInput
    endereco?: EnderecoUpdateOneWithoutPedidosNestedInput
    pagamento?: PagamentoUpdateOneWithoutPedidoNestedInput
    entrega?: EntregaUpdateOneWithoutPedidoNestedInput
  }

  export type PedidoUncheckedUpdateWithoutItensInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusPedidoFieldUpdateOperationsInput | $Enums.StatusPedido
    tipo?: EnumTipoPedidoFieldUpdateOperationsInput | $Enums.TipoPedido
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioId?: IntFieldUpdateOperationsInput | number
    enderecoId?: NullableIntFieldUpdateOperationsInput | number | null
    pagamento?: PagamentoUncheckedUpdateOneWithoutPedidoNestedInput
    entrega?: EntregaUncheckedUpdateOneWithoutPedidoNestedInput
  }

  export type ProdutoUpsertWithoutItensPedidoInput = {
    update: XOR<ProdutoUpdateWithoutItensPedidoInput, ProdutoUncheckedUpdateWithoutItensPedidoInput>
    create: XOR<ProdutoCreateWithoutItensPedidoInput, ProdutoUncheckedCreateWithoutItensPedidoInput>
    where?: ProdutoWhereInput
  }

  export type ProdutoUpdateToOneWithWhereWithoutItensPedidoInput = {
    where?: ProdutoWhereInput
    data: XOR<ProdutoUpdateWithoutItensPedidoInput, ProdutoUncheckedUpdateWithoutItensPedidoInput>
  }

  export type ProdutoUpdateWithoutItensPedidoInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    preco?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    imagemUrl?: NullableStringFieldUpdateOperationsInput | string | null
    disponivel?: BoolFieldUpdateOperationsInput | boolean
    categoria?: CategoriaUpdateOneRequiredWithoutProdutosNestedInput
    itensCarrinho?: ItemCarrinhoUpdateManyWithoutProdutoNestedInput
  }

  export type ProdutoUncheckedUpdateWithoutItensPedidoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    preco?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    imagemUrl?: NullableStringFieldUpdateOperationsInput | string | null
    disponivel?: BoolFieldUpdateOperationsInput | boolean
    categoriaId?: IntFieldUpdateOperationsInput | number
    itensCarrinho?: ItemCarrinhoUncheckedUpdateManyWithoutProdutoNestedInput
  }

  export type PedidoCreateWithoutPagamentoInput = {
    status?: $Enums.StatusPedido
    tipo: $Enums.TipoPedido
    total: Decimal | DecimalJsLike | number | string
    criadoEm?: Date | string
    usuario: UsuarioCreateNestedOneWithoutPedidosInput
    endereco?: EnderecoCreateNestedOneWithoutPedidosInput
    itens?: ItemPedidoCreateNestedManyWithoutPedidoInput
    entrega?: EntregaCreateNestedOneWithoutPedidoInput
  }

  export type PedidoUncheckedCreateWithoutPagamentoInput = {
    id?: number
    status?: $Enums.StatusPedido
    tipo: $Enums.TipoPedido
    total: Decimal | DecimalJsLike | number | string
    criadoEm?: Date | string
    usuarioId: number
    enderecoId?: number | null
    itens?: ItemPedidoUncheckedCreateNestedManyWithoutPedidoInput
    entrega?: EntregaUncheckedCreateNestedOneWithoutPedidoInput
  }

  export type PedidoCreateOrConnectWithoutPagamentoInput = {
    where: PedidoWhereUniqueInput
    create: XOR<PedidoCreateWithoutPagamentoInput, PedidoUncheckedCreateWithoutPagamentoInput>
  }

  export type PedidoUpsertWithoutPagamentoInput = {
    update: XOR<PedidoUpdateWithoutPagamentoInput, PedidoUncheckedUpdateWithoutPagamentoInput>
    create: XOR<PedidoCreateWithoutPagamentoInput, PedidoUncheckedCreateWithoutPagamentoInput>
    where?: PedidoWhereInput
  }

  export type PedidoUpdateToOneWithWhereWithoutPagamentoInput = {
    where?: PedidoWhereInput
    data: XOR<PedidoUpdateWithoutPagamentoInput, PedidoUncheckedUpdateWithoutPagamentoInput>
  }

  export type PedidoUpdateWithoutPagamentoInput = {
    status?: EnumStatusPedidoFieldUpdateOperationsInput | $Enums.StatusPedido
    tipo?: EnumTipoPedidoFieldUpdateOperationsInput | $Enums.TipoPedido
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutPedidosNestedInput
    endereco?: EnderecoUpdateOneWithoutPedidosNestedInput
    itens?: ItemPedidoUpdateManyWithoutPedidoNestedInput
    entrega?: EntregaUpdateOneWithoutPedidoNestedInput
  }

  export type PedidoUncheckedUpdateWithoutPagamentoInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusPedidoFieldUpdateOperationsInput | $Enums.StatusPedido
    tipo?: EnumTipoPedidoFieldUpdateOperationsInput | $Enums.TipoPedido
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioId?: IntFieldUpdateOperationsInput | number
    enderecoId?: NullableIntFieldUpdateOperationsInput | number | null
    itens?: ItemPedidoUncheckedUpdateManyWithoutPedidoNestedInput
    entrega?: EntregaUncheckedUpdateOneWithoutPedidoNestedInput
  }

  export type PedidoCreateWithoutEntregaInput = {
    status?: $Enums.StatusPedido
    tipo: $Enums.TipoPedido
    total: Decimal | DecimalJsLike | number | string
    criadoEm?: Date | string
    usuario: UsuarioCreateNestedOneWithoutPedidosInput
    endereco?: EnderecoCreateNestedOneWithoutPedidosInput
    itens?: ItemPedidoCreateNestedManyWithoutPedidoInput
    pagamento?: PagamentoCreateNestedOneWithoutPedidoInput
  }

  export type PedidoUncheckedCreateWithoutEntregaInput = {
    id?: number
    status?: $Enums.StatusPedido
    tipo: $Enums.TipoPedido
    total: Decimal | DecimalJsLike | number | string
    criadoEm?: Date | string
    usuarioId: number
    enderecoId?: number | null
    itens?: ItemPedidoUncheckedCreateNestedManyWithoutPedidoInput
    pagamento?: PagamentoUncheckedCreateNestedOneWithoutPedidoInput
  }

  export type PedidoCreateOrConnectWithoutEntregaInput = {
    where: PedidoWhereUniqueInput
    create: XOR<PedidoCreateWithoutEntregaInput, PedidoUncheckedCreateWithoutEntregaInput>
  }

  export type PedidoUpsertWithoutEntregaInput = {
    update: XOR<PedidoUpdateWithoutEntregaInput, PedidoUncheckedUpdateWithoutEntregaInput>
    create: XOR<PedidoCreateWithoutEntregaInput, PedidoUncheckedCreateWithoutEntregaInput>
    where?: PedidoWhereInput
  }

  export type PedidoUpdateToOneWithWhereWithoutEntregaInput = {
    where?: PedidoWhereInput
    data: XOR<PedidoUpdateWithoutEntregaInput, PedidoUncheckedUpdateWithoutEntregaInput>
  }

  export type PedidoUpdateWithoutEntregaInput = {
    status?: EnumStatusPedidoFieldUpdateOperationsInput | $Enums.StatusPedido
    tipo?: EnumTipoPedidoFieldUpdateOperationsInput | $Enums.TipoPedido
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutPedidosNestedInput
    endereco?: EnderecoUpdateOneWithoutPedidosNestedInput
    itens?: ItemPedidoUpdateManyWithoutPedidoNestedInput
    pagamento?: PagamentoUpdateOneWithoutPedidoNestedInput
  }

  export type PedidoUncheckedUpdateWithoutEntregaInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusPedidoFieldUpdateOperationsInput | $Enums.StatusPedido
    tipo?: EnumTipoPedidoFieldUpdateOperationsInput | $Enums.TipoPedido
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioId?: IntFieldUpdateOperationsInput | number
    enderecoId?: NullableIntFieldUpdateOperationsInput | number | null
    itens?: ItemPedidoUncheckedUpdateManyWithoutPedidoNestedInput
    pagamento?: PagamentoUncheckedUpdateOneWithoutPedidoNestedInput
  }

  export type UsuarioCreateWithoutCarrinhoInput = {
    nome: string
    email: string
    senha: string
    telefone?: string | null
    role?: $Enums.Role
    criadoEm?: Date | string
    enderecos?: EnderecoCreateNestedManyWithoutUsuarioInput
    pedidos?: PedidoCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutCarrinhoInput = {
    id?: number
    nome: string
    email: string
    senha: string
    telefone?: string | null
    role?: $Enums.Role
    criadoEm?: Date | string
    enderecos?: EnderecoUncheckedCreateNestedManyWithoutUsuarioInput
    pedidos?: PedidoUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutCarrinhoInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutCarrinhoInput, UsuarioUncheckedCreateWithoutCarrinhoInput>
  }

  export type ItemCarrinhoCreateWithoutCarrinhoInput = {
    quantidade: number
    produto: ProdutoCreateNestedOneWithoutItensCarrinhoInput
  }

  export type ItemCarrinhoUncheckedCreateWithoutCarrinhoInput = {
    id?: number
    quantidade: number
    produtoId: number
  }

  export type ItemCarrinhoCreateOrConnectWithoutCarrinhoInput = {
    where: ItemCarrinhoWhereUniqueInput
    create: XOR<ItemCarrinhoCreateWithoutCarrinhoInput, ItemCarrinhoUncheckedCreateWithoutCarrinhoInput>
  }

  export type ItemCarrinhoCreateManyCarrinhoInputEnvelope = {
    data: ItemCarrinhoCreateManyCarrinhoInput | ItemCarrinhoCreateManyCarrinhoInput[]
    skipDuplicates?: boolean
  }

  export type UsuarioUpsertWithoutCarrinhoInput = {
    update: XOR<UsuarioUpdateWithoutCarrinhoInput, UsuarioUncheckedUpdateWithoutCarrinhoInput>
    create: XOR<UsuarioCreateWithoutCarrinhoInput, UsuarioUncheckedCreateWithoutCarrinhoInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutCarrinhoInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutCarrinhoInput, UsuarioUncheckedUpdateWithoutCarrinhoInput>
  }

  export type UsuarioUpdateWithoutCarrinhoInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    enderecos?: EnderecoUpdateManyWithoutUsuarioNestedInput
    pedidos?: PedidoUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutCarrinhoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    enderecos?: EnderecoUncheckedUpdateManyWithoutUsuarioNestedInput
    pedidos?: PedidoUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type ItemCarrinhoUpsertWithWhereUniqueWithoutCarrinhoInput = {
    where: ItemCarrinhoWhereUniqueInput
    update: XOR<ItemCarrinhoUpdateWithoutCarrinhoInput, ItemCarrinhoUncheckedUpdateWithoutCarrinhoInput>
    create: XOR<ItemCarrinhoCreateWithoutCarrinhoInput, ItemCarrinhoUncheckedCreateWithoutCarrinhoInput>
  }

  export type ItemCarrinhoUpdateWithWhereUniqueWithoutCarrinhoInput = {
    where: ItemCarrinhoWhereUniqueInput
    data: XOR<ItemCarrinhoUpdateWithoutCarrinhoInput, ItemCarrinhoUncheckedUpdateWithoutCarrinhoInput>
  }

  export type ItemCarrinhoUpdateManyWithWhereWithoutCarrinhoInput = {
    where: ItemCarrinhoScalarWhereInput
    data: XOR<ItemCarrinhoUpdateManyMutationInput, ItemCarrinhoUncheckedUpdateManyWithoutCarrinhoInput>
  }

  export type CarrinhoCreateWithoutItensInput = {
    usuario: UsuarioCreateNestedOneWithoutCarrinhoInput
  }

  export type CarrinhoUncheckedCreateWithoutItensInput = {
    id?: number
    usuarioId: number
  }

  export type CarrinhoCreateOrConnectWithoutItensInput = {
    where: CarrinhoWhereUniqueInput
    create: XOR<CarrinhoCreateWithoutItensInput, CarrinhoUncheckedCreateWithoutItensInput>
  }

  export type ProdutoCreateWithoutItensCarrinhoInput = {
    nome: string
    descricao?: string | null
    preco: Decimal | DecimalJsLike | number | string
    imagemUrl?: string | null
    disponivel?: boolean
    categoria: CategoriaCreateNestedOneWithoutProdutosInput
    itensPedido?: ItemPedidoCreateNestedManyWithoutProdutoInput
  }

  export type ProdutoUncheckedCreateWithoutItensCarrinhoInput = {
    id?: number
    nome: string
    descricao?: string | null
    preco: Decimal | DecimalJsLike | number | string
    imagemUrl?: string | null
    disponivel?: boolean
    categoriaId: number
    itensPedido?: ItemPedidoUncheckedCreateNestedManyWithoutProdutoInput
  }

  export type ProdutoCreateOrConnectWithoutItensCarrinhoInput = {
    where: ProdutoWhereUniqueInput
    create: XOR<ProdutoCreateWithoutItensCarrinhoInput, ProdutoUncheckedCreateWithoutItensCarrinhoInput>
  }

  export type CarrinhoUpsertWithoutItensInput = {
    update: XOR<CarrinhoUpdateWithoutItensInput, CarrinhoUncheckedUpdateWithoutItensInput>
    create: XOR<CarrinhoCreateWithoutItensInput, CarrinhoUncheckedCreateWithoutItensInput>
    where?: CarrinhoWhereInput
  }

  export type CarrinhoUpdateToOneWithWhereWithoutItensInput = {
    where?: CarrinhoWhereInput
    data: XOR<CarrinhoUpdateWithoutItensInput, CarrinhoUncheckedUpdateWithoutItensInput>
  }

  export type CarrinhoUpdateWithoutItensInput = {
    usuario?: UsuarioUpdateOneRequiredWithoutCarrinhoNestedInput
  }

  export type CarrinhoUncheckedUpdateWithoutItensInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
  }

  export type ProdutoUpsertWithoutItensCarrinhoInput = {
    update: XOR<ProdutoUpdateWithoutItensCarrinhoInput, ProdutoUncheckedUpdateWithoutItensCarrinhoInput>
    create: XOR<ProdutoCreateWithoutItensCarrinhoInput, ProdutoUncheckedCreateWithoutItensCarrinhoInput>
    where?: ProdutoWhereInput
  }

  export type ProdutoUpdateToOneWithWhereWithoutItensCarrinhoInput = {
    where?: ProdutoWhereInput
    data: XOR<ProdutoUpdateWithoutItensCarrinhoInput, ProdutoUncheckedUpdateWithoutItensCarrinhoInput>
  }

  export type ProdutoUpdateWithoutItensCarrinhoInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    preco?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    imagemUrl?: NullableStringFieldUpdateOperationsInput | string | null
    disponivel?: BoolFieldUpdateOperationsInput | boolean
    categoria?: CategoriaUpdateOneRequiredWithoutProdutosNestedInput
    itensPedido?: ItemPedidoUpdateManyWithoutProdutoNestedInput
  }

  export type ProdutoUncheckedUpdateWithoutItensCarrinhoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    preco?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    imagemUrl?: NullableStringFieldUpdateOperationsInput | string | null
    disponivel?: BoolFieldUpdateOperationsInput | boolean
    categoriaId?: IntFieldUpdateOperationsInput | number
    itensPedido?: ItemPedidoUncheckedUpdateManyWithoutProdutoNestedInput
  }

  export type EnderecoCreateManyUsuarioInput = {
    id?: number
    rua: string
    numero: string
    bairro: string
    cidade: string
    estado: string
    cep: string
  }

  export type PedidoCreateManyUsuarioInput = {
    id?: number
    status?: $Enums.StatusPedido
    tipo: $Enums.TipoPedido
    total: Decimal | DecimalJsLike | number | string
    criadoEm?: Date | string
    enderecoId?: number | null
  }

  export type EnderecoUpdateWithoutUsuarioInput = {
    rua?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    bairro?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    cep?: StringFieldUpdateOperationsInput | string
    pedidos?: PedidoUpdateManyWithoutEnderecoNestedInput
  }

  export type EnderecoUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    rua?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    bairro?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    cep?: StringFieldUpdateOperationsInput | string
    pedidos?: PedidoUncheckedUpdateManyWithoutEnderecoNestedInput
  }

  export type EnderecoUncheckedUpdateManyWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    rua?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    bairro?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    cep?: StringFieldUpdateOperationsInput | string
  }

  export type PedidoUpdateWithoutUsuarioInput = {
    status?: EnumStatusPedidoFieldUpdateOperationsInput | $Enums.StatusPedido
    tipo?: EnumTipoPedidoFieldUpdateOperationsInput | $Enums.TipoPedido
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    endereco?: EnderecoUpdateOneWithoutPedidosNestedInput
    itens?: ItemPedidoUpdateManyWithoutPedidoNestedInput
    pagamento?: PagamentoUpdateOneWithoutPedidoNestedInput
    entrega?: EntregaUpdateOneWithoutPedidoNestedInput
  }

  export type PedidoUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusPedidoFieldUpdateOperationsInput | $Enums.StatusPedido
    tipo?: EnumTipoPedidoFieldUpdateOperationsInput | $Enums.TipoPedido
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    enderecoId?: NullableIntFieldUpdateOperationsInput | number | null
    itens?: ItemPedidoUncheckedUpdateManyWithoutPedidoNestedInput
    pagamento?: PagamentoUncheckedUpdateOneWithoutPedidoNestedInput
    entrega?: EntregaUncheckedUpdateOneWithoutPedidoNestedInput
  }

  export type PedidoUncheckedUpdateManyWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusPedidoFieldUpdateOperationsInput | $Enums.StatusPedido
    tipo?: EnumTipoPedidoFieldUpdateOperationsInput | $Enums.TipoPedido
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    enderecoId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PedidoCreateManyEnderecoInput = {
    id?: number
    status?: $Enums.StatusPedido
    tipo: $Enums.TipoPedido
    total: Decimal | DecimalJsLike | number | string
    criadoEm?: Date | string
    usuarioId: number
  }

  export type PedidoUpdateWithoutEnderecoInput = {
    status?: EnumStatusPedidoFieldUpdateOperationsInput | $Enums.StatusPedido
    tipo?: EnumTipoPedidoFieldUpdateOperationsInput | $Enums.TipoPedido
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutPedidosNestedInput
    itens?: ItemPedidoUpdateManyWithoutPedidoNestedInput
    pagamento?: PagamentoUpdateOneWithoutPedidoNestedInput
    entrega?: EntregaUpdateOneWithoutPedidoNestedInput
  }

  export type PedidoUncheckedUpdateWithoutEnderecoInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusPedidoFieldUpdateOperationsInput | $Enums.StatusPedido
    tipo?: EnumTipoPedidoFieldUpdateOperationsInput | $Enums.TipoPedido
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioId?: IntFieldUpdateOperationsInput | number
    itens?: ItemPedidoUncheckedUpdateManyWithoutPedidoNestedInput
    pagamento?: PagamentoUncheckedUpdateOneWithoutPedidoNestedInput
    entrega?: EntregaUncheckedUpdateOneWithoutPedidoNestedInput
  }

  export type PedidoUncheckedUpdateManyWithoutEnderecoInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusPedidoFieldUpdateOperationsInput | $Enums.StatusPedido
    tipo?: EnumTipoPedidoFieldUpdateOperationsInput | $Enums.TipoPedido
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioId?: IntFieldUpdateOperationsInput | number
  }

  export type ProdutoCreateManyCategoriaInput = {
    id?: number
    nome: string
    descricao?: string | null
    preco: Decimal | DecimalJsLike | number | string
    imagemUrl?: string | null
    disponivel?: boolean
  }

  export type ProdutoUpdateWithoutCategoriaInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    preco?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    imagemUrl?: NullableStringFieldUpdateOperationsInput | string | null
    disponivel?: BoolFieldUpdateOperationsInput | boolean
    itensPedido?: ItemPedidoUpdateManyWithoutProdutoNestedInput
    itensCarrinho?: ItemCarrinhoUpdateManyWithoutProdutoNestedInput
  }

  export type ProdutoUncheckedUpdateWithoutCategoriaInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    preco?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    imagemUrl?: NullableStringFieldUpdateOperationsInput | string | null
    disponivel?: BoolFieldUpdateOperationsInput | boolean
    itensPedido?: ItemPedidoUncheckedUpdateManyWithoutProdutoNestedInput
    itensCarrinho?: ItemCarrinhoUncheckedUpdateManyWithoutProdutoNestedInput
  }

  export type ProdutoUncheckedUpdateManyWithoutCategoriaInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    preco?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    imagemUrl?: NullableStringFieldUpdateOperationsInput | string | null
    disponivel?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ItemPedidoCreateManyProdutoInput = {
    id?: number
    quantidade: number
    precoUnitario: Decimal | DecimalJsLike | number | string
    pedidoId: number
  }

  export type ItemCarrinhoCreateManyProdutoInput = {
    id?: number
    quantidade: number
    carrinhoId: number
  }

  export type ItemPedidoUpdateWithoutProdutoInput = {
    quantidade?: IntFieldUpdateOperationsInput | number
    precoUnitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    pedido?: PedidoUpdateOneRequiredWithoutItensNestedInput
  }

  export type ItemPedidoUncheckedUpdateWithoutProdutoInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantidade?: IntFieldUpdateOperationsInput | number
    precoUnitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    pedidoId?: IntFieldUpdateOperationsInput | number
  }

  export type ItemPedidoUncheckedUpdateManyWithoutProdutoInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantidade?: IntFieldUpdateOperationsInput | number
    precoUnitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    pedidoId?: IntFieldUpdateOperationsInput | number
  }

  export type ItemCarrinhoUpdateWithoutProdutoInput = {
    quantidade?: IntFieldUpdateOperationsInput | number
    carrinho?: CarrinhoUpdateOneRequiredWithoutItensNestedInput
  }

  export type ItemCarrinhoUncheckedUpdateWithoutProdutoInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantidade?: IntFieldUpdateOperationsInput | number
    carrinhoId?: IntFieldUpdateOperationsInput | number
  }

  export type ItemCarrinhoUncheckedUpdateManyWithoutProdutoInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantidade?: IntFieldUpdateOperationsInput | number
    carrinhoId?: IntFieldUpdateOperationsInput | number
  }

  export type ItemPedidoCreateManyPedidoInput = {
    id?: number
    quantidade: number
    precoUnitario: Decimal | DecimalJsLike | number | string
    produtoId: number
  }

  export type ItemPedidoUpdateWithoutPedidoInput = {
    quantidade?: IntFieldUpdateOperationsInput | number
    precoUnitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    produto?: ProdutoUpdateOneRequiredWithoutItensPedidoNestedInput
  }

  export type ItemPedidoUncheckedUpdateWithoutPedidoInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantidade?: IntFieldUpdateOperationsInput | number
    precoUnitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    produtoId?: IntFieldUpdateOperationsInput | number
  }

  export type ItemPedidoUncheckedUpdateManyWithoutPedidoInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantidade?: IntFieldUpdateOperationsInput | number
    precoUnitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    produtoId?: IntFieldUpdateOperationsInput | number
  }

  export type ItemCarrinhoCreateManyCarrinhoInput = {
    id?: number
    quantidade: number
    produtoId: number
  }

  export type ItemCarrinhoUpdateWithoutCarrinhoInput = {
    quantidade?: IntFieldUpdateOperationsInput | number
    produto?: ProdutoUpdateOneRequiredWithoutItensCarrinhoNestedInput
  }

  export type ItemCarrinhoUncheckedUpdateWithoutCarrinhoInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantidade?: IntFieldUpdateOperationsInput | number
    produtoId?: IntFieldUpdateOperationsInput | number
  }

  export type ItemCarrinhoUncheckedUpdateManyWithoutCarrinhoInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantidade?: IntFieldUpdateOperationsInput | number
    produtoId?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}