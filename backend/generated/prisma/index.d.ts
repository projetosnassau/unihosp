
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
 * Model Admin
 * 
 */
export type Admin = $Result.DefaultSelection<Prisma.$AdminPayload>
/**
 * Model Casa
 * 
 */
export type Casa = $Result.DefaultSelection<Prisma.$CasaPayload>
/**
 * Model ImagemCasa
 * 
 */
export type ImagemCasa = $Result.DefaultSelection<Prisma.$ImagemCasaPayload>
/**
 * Model BloqueioDisponibilidade
 * 
 */
export type BloqueioDisponibilidade = $Result.DefaultSelection<Prisma.$BloqueioDisponibilidadePayload>
/**
 * Model Locador
 * 
 */
export type Locador = $Result.DefaultSelection<Prisma.$LocadorPayload>
/**
 * Model Hospede
 * 
 */
export type Hospede = $Result.DefaultSelection<Prisma.$HospedePayload>
/**
 * Model Reserva
 * 
 */
export type Reserva = $Result.DefaultSelection<Prisma.$ReservaPayload>
/**
 * Model Favorito
 * 
 */
export type Favorito = $Result.DefaultSelection<Prisma.$FavoritoPayload>
/**
 * Model Conversa
 * 
 */
export type Conversa = $Result.DefaultSelection<Prisma.$ConversaPayload>
/**
 * Model Mensagem
 * 
 */
export type Mensagem = $Result.DefaultSelection<Prisma.$MensagemPayload>
/**
 * Model Avaliacao
 * 
 */
export type Avaliacao = $Result.DefaultSelection<Prisma.$AvaliacaoPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Admins
 * const admins = await prisma.admin.findMany()
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
   * // Fetch zero or more Admins
   * const admins = await prisma.admin.findMany()
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
   * `prisma.admin`: Exposes CRUD operations for the **Admin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Admins
    * const admins = await prisma.admin.findMany()
    * ```
    */
  get admin(): Prisma.AdminDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.casa`: Exposes CRUD operations for the **Casa** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Casas
    * const casas = await prisma.casa.findMany()
    * ```
    */
  get casa(): Prisma.CasaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.imagemCasa`: Exposes CRUD operations for the **ImagemCasa** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ImagemCasas
    * const imagemCasas = await prisma.imagemCasa.findMany()
    * ```
    */
  get imagemCasa(): Prisma.ImagemCasaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bloqueioDisponibilidade`: Exposes CRUD operations for the **BloqueioDisponibilidade** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BloqueioDisponibilidades
    * const bloqueioDisponibilidades = await prisma.bloqueioDisponibilidade.findMany()
    * ```
    */
  get bloqueioDisponibilidade(): Prisma.BloqueioDisponibilidadeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.locador`: Exposes CRUD operations for the **Locador** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Locadors
    * const locadors = await prisma.locador.findMany()
    * ```
    */
  get locador(): Prisma.LocadorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.hospede`: Exposes CRUD operations for the **Hospede** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Hospedes
    * const hospedes = await prisma.hospede.findMany()
    * ```
    */
  get hospede(): Prisma.HospedeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.reserva`: Exposes CRUD operations for the **Reserva** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reservas
    * const reservas = await prisma.reserva.findMany()
    * ```
    */
  get reserva(): Prisma.ReservaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.favorito`: Exposes CRUD operations for the **Favorito** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Favoritos
    * const favoritos = await prisma.favorito.findMany()
    * ```
    */
  get favorito(): Prisma.FavoritoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.conversa`: Exposes CRUD operations for the **Conversa** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Conversas
    * const conversas = await prisma.conversa.findMany()
    * ```
    */
  get conversa(): Prisma.ConversaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mensagem`: Exposes CRUD operations for the **Mensagem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Mensagems
    * const mensagems = await prisma.mensagem.findMany()
    * ```
    */
  get mensagem(): Prisma.MensagemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.avaliacao`: Exposes CRUD operations for the **Avaliacao** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Avaliacaos
    * const avaliacaos = await prisma.avaliacao.findMany()
    * ```
    */
  get avaliacao(): Prisma.AvaliacaoDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
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
    Admin: 'Admin',
    Casa: 'Casa',
    ImagemCasa: 'ImagemCasa',
    BloqueioDisponibilidade: 'BloqueioDisponibilidade',
    Locador: 'Locador',
    Hospede: 'Hospede',
    Reserva: 'Reserva',
    Favorito: 'Favorito',
    Conversa: 'Conversa',
    Mensagem: 'Mensagem',
    Avaliacao: 'Avaliacao'
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
      modelProps: "admin" | "casa" | "imagemCasa" | "bloqueioDisponibilidade" | "locador" | "hospede" | "reserva" | "favorito" | "conversa" | "mensagem" | "avaliacao"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Admin: {
        payload: Prisma.$AdminPayload<ExtArgs>
        fields: Prisma.AdminFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdminFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdminFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findFirst: {
            args: Prisma.AdminFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdminFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findMany: {
            args: Prisma.AdminFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          create: {
            args: Prisma.AdminCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          createMany: {
            args: Prisma.AdminCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AdminCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          delete: {
            args: Prisma.AdminDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          update: {
            args: Prisma.AdminUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          deleteMany: {
            args: Prisma.AdminDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdminUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AdminUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          upsert: {
            args: Prisma.AdminUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          aggregate: {
            args: Prisma.AdminAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdmin>
          }
          groupBy: {
            args: Prisma.AdminGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdminCountArgs<ExtArgs>
            result: $Utils.Optional<AdminCountAggregateOutputType> | number
          }
        }
      }
      Casa: {
        payload: Prisma.$CasaPayload<ExtArgs>
        fields: Prisma.CasaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CasaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CasaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasaPayload>
          }
          findFirst: {
            args: Prisma.CasaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CasaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasaPayload>
          }
          findMany: {
            args: Prisma.CasaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasaPayload>[]
          }
          create: {
            args: Prisma.CasaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasaPayload>
          }
          createMany: {
            args: Prisma.CasaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CasaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasaPayload>[]
          }
          delete: {
            args: Prisma.CasaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasaPayload>
          }
          update: {
            args: Prisma.CasaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasaPayload>
          }
          deleteMany: {
            args: Prisma.CasaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CasaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CasaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasaPayload>[]
          }
          upsert: {
            args: Prisma.CasaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasaPayload>
          }
          aggregate: {
            args: Prisma.CasaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCasa>
          }
          groupBy: {
            args: Prisma.CasaGroupByArgs<ExtArgs>
            result: $Utils.Optional<CasaGroupByOutputType>[]
          }
          count: {
            args: Prisma.CasaCountArgs<ExtArgs>
            result: $Utils.Optional<CasaCountAggregateOutputType> | number
          }
        }
      }
      ImagemCasa: {
        payload: Prisma.$ImagemCasaPayload<ExtArgs>
        fields: Prisma.ImagemCasaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ImagemCasaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagemCasaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ImagemCasaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagemCasaPayload>
          }
          findFirst: {
            args: Prisma.ImagemCasaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagemCasaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ImagemCasaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagemCasaPayload>
          }
          findMany: {
            args: Prisma.ImagemCasaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagemCasaPayload>[]
          }
          create: {
            args: Prisma.ImagemCasaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagemCasaPayload>
          }
          createMany: {
            args: Prisma.ImagemCasaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ImagemCasaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagemCasaPayload>[]
          }
          delete: {
            args: Prisma.ImagemCasaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagemCasaPayload>
          }
          update: {
            args: Prisma.ImagemCasaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagemCasaPayload>
          }
          deleteMany: {
            args: Prisma.ImagemCasaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ImagemCasaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ImagemCasaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagemCasaPayload>[]
          }
          upsert: {
            args: Prisma.ImagemCasaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagemCasaPayload>
          }
          aggregate: {
            args: Prisma.ImagemCasaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateImagemCasa>
          }
          groupBy: {
            args: Prisma.ImagemCasaGroupByArgs<ExtArgs>
            result: $Utils.Optional<ImagemCasaGroupByOutputType>[]
          }
          count: {
            args: Prisma.ImagemCasaCountArgs<ExtArgs>
            result: $Utils.Optional<ImagemCasaCountAggregateOutputType> | number
          }
        }
      }
      BloqueioDisponibilidade: {
        payload: Prisma.$BloqueioDisponibilidadePayload<ExtArgs>
        fields: Prisma.BloqueioDisponibilidadeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BloqueioDisponibilidadeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BloqueioDisponibilidadePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BloqueioDisponibilidadeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BloqueioDisponibilidadePayload>
          }
          findFirst: {
            args: Prisma.BloqueioDisponibilidadeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BloqueioDisponibilidadePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BloqueioDisponibilidadeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BloqueioDisponibilidadePayload>
          }
          findMany: {
            args: Prisma.BloqueioDisponibilidadeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BloqueioDisponibilidadePayload>[]
          }
          create: {
            args: Prisma.BloqueioDisponibilidadeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BloqueioDisponibilidadePayload>
          }
          createMany: {
            args: Prisma.BloqueioDisponibilidadeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BloqueioDisponibilidadeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BloqueioDisponibilidadePayload>[]
          }
          delete: {
            args: Prisma.BloqueioDisponibilidadeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BloqueioDisponibilidadePayload>
          }
          update: {
            args: Prisma.BloqueioDisponibilidadeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BloqueioDisponibilidadePayload>
          }
          deleteMany: {
            args: Prisma.BloqueioDisponibilidadeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BloqueioDisponibilidadeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BloqueioDisponibilidadeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BloqueioDisponibilidadePayload>[]
          }
          upsert: {
            args: Prisma.BloqueioDisponibilidadeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BloqueioDisponibilidadePayload>
          }
          aggregate: {
            args: Prisma.BloqueioDisponibilidadeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBloqueioDisponibilidade>
          }
          groupBy: {
            args: Prisma.BloqueioDisponibilidadeGroupByArgs<ExtArgs>
            result: $Utils.Optional<BloqueioDisponibilidadeGroupByOutputType>[]
          }
          count: {
            args: Prisma.BloqueioDisponibilidadeCountArgs<ExtArgs>
            result: $Utils.Optional<BloqueioDisponibilidadeCountAggregateOutputType> | number
          }
        }
      }
      Locador: {
        payload: Prisma.$LocadorPayload<ExtArgs>
        fields: Prisma.LocadorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LocadorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocadorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LocadorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocadorPayload>
          }
          findFirst: {
            args: Prisma.LocadorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocadorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LocadorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocadorPayload>
          }
          findMany: {
            args: Prisma.LocadorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocadorPayload>[]
          }
          create: {
            args: Prisma.LocadorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocadorPayload>
          }
          createMany: {
            args: Prisma.LocadorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LocadorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocadorPayload>[]
          }
          delete: {
            args: Prisma.LocadorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocadorPayload>
          }
          update: {
            args: Prisma.LocadorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocadorPayload>
          }
          deleteMany: {
            args: Prisma.LocadorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LocadorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LocadorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocadorPayload>[]
          }
          upsert: {
            args: Prisma.LocadorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocadorPayload>
          }
          aggregate: {
            args: Prisma.LocadorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLocador>
          }
          groupBy: {
            args: Prisma.LocadorGroupByArgs<ExtArgs>
            result: $Utils.Optional<LocadorGroupByOutputType>[]
          }
          count: {
            args: Prisma.LocadorCountArgs<ExtArgs>
            result: $Utils.Optional<LocadorCountAggregateOutputType> | number
          }
        }
      }
      Hospede: {
        payload: Prisma.$HospedePayload<ExtArgs>
        fields: Prisma.HospedeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HospedeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HospedePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HospedeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HospedePayload>
          }
          findFirst: {
            args: Prisma.HospedeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HospedePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HospedeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HospedePayload>
          }
          findMany: {
            args: Prisma.HospedeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HospedePayload>[]
          }
          create: {
            args: Prisma.HospedeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HospedePayload>
          }
          createMany: {
            args: Prisma.HospedeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HospedeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HospedePayload>[]
          }
          delete: {
            args: Prisma.HospedeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HospedePayload>
          }
          update: {
            args: Prisma.HospedeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HospedePayload>
          }
          deleteMany: {
            args: Prisma.HospedeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HospedeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HospedeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HospedePayload>[]
          }
          upsert: {
            args: Prisma.HospedeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HospedePayload>
          }
          aggregate: {
            args: Prisma.HospedeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHospede>
          }
          groupBy: {
            args: Prisma.HospedeGroupByArgs<ExtArgs>
            result: $Utils.Optional<HospedeGroupByOutputType>[]
          }
          count: {
            args: Prisma.HospedeCountArgs<ExtArgs>
            result: $Utils.Optional<HospedeCountAggregateOutputType> | number
          }
        }
      }
      Reserva: {
        payload: Prisma.$ReservaPayload<ExtArgs>
        fields: Prisma.ReservaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReservaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReservaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservaPayload>
          }
          findFirst: {
            args: Prisma.ReservaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReservaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservaPayload>
          }
          findMany: {
            args: Prisma.ReservaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservaPayload>[]
          }
          create: {
            args: Prisma.ReservaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservaPayload>
          }
          createMany: {
            args: Prisma.ReservaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReservaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservaPayload>[]
          }
          delete: {
            args: Prisma.ReservaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservaPayload>
          }
          update: {
            args: Prisma.ReservaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservaPayload>
          }
          deleteMany: {
            args: Prisma.ReservaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReservaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReservaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservaPayload>[]
          }
          upsert: {
            args: Prisma.ReservaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservaPayload>
          }
          aggregate: {
            args: Prisma.ReservaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReserva>
          }
          groupBy: {
            args: Prisma.ReservaGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReservaGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReservaCountArgs<ExtArgs>
            result: $Utils.Optional<ReservaCountAggregateOutputType> | number
          }
        }
      }
      Favorito: {
        payload: Prisma.$FavoritoPayload<ExtArgs>
        fields: Prisma.FavoritoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FavoritoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FavoritoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritoPayload>
          }
          findFirst: {
            args: Prisma.FavoritoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FavoritoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritoPayload>
          }
          findMany: {
            args: Prisma.FavoritoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritoPayload>[]
          }
          create: {
            args: Prisma.FavoritoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritoPayload>
          }
          createMany: {
            args: Prisma.FavoritoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FavoritoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritoPayload>[]
          }
          delete: {
            args: Prisma.FavoritoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritoPayload>
          }
          update: {
            args: Prisma.FavoritoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritoPayload>
          }
          deleteMany: {
            args: Prisma.FavoritoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FavoritoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FavoritoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritoPayload>[]
          }
          upsert: {
            args: Prisma.FavoritoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritoPayload>
          }
          aggregate: {
            args: Prisma.FavoritoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFavorito>
          }
          groupBy: {
            args: Prisma.FavoritoGroupByArgs<ExtArgs>
            result: $Utils.Optional<FavoritoGroupByOutputType>[]
          }
          count: {
            args: Prisma.FavoritoCountArgs<ExtArgs>
            result: $Utils.Optional<FavoritoCountAggregateOutputType> | number
          }
        }
      }
      Conversa: {
        payload: Prisma.$ConversaPayload<ExtArgs>
        fields: Prisma.ConversaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ConversaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ConversaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversaPayload>
          }
          findFirst: {
            args: Prisma.ConversaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ConversaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversaPayload>
          }
          findMany: {
            args: Prisma.ConversaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversaPayload>[]
          }
          create: {
            args: Prisma.ConversaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversaPayload>
          }
          createMany: {
            args: Prisma.ConversaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ConversaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversaPayload>[]
          }
          delete: {
            args: Prisma.ConversaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversaPayload>
          }
          update: {
            args: Prisma.ConversaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversaPayload>
          }
          deleteMany: {
            args: Prisma.ConversaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ConversaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ConversaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversaPayload>[]
          }
          upsert: {
            args: Prisma.ConversaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversaPayload>
          }
          aggregate: {
            args: Prisma.ConversaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateConversa>
          }
          groupBy: {
            args: Prisma.ConversaGroupByArgs<ExtArgs>
            result: $Utils.Optional<ConversaGroupByOutputType>[]
          }
          count: {
            args: Prisma.ConversaCountArgs<ExtArgs>
            result: $Utils.Optional<ConversaCountAggregateOutputType> | number
          }
        }
      }
      Mensagem: {
        payload: Prisma.$MensagemPayload<ExtArgs>
        fields: Prisma.MensagemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MensagemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensagemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MensagemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensagemPayload>
          }
          findFirst: {
            args: Prisma.MensagemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensagemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MensagemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensagemPayload>
          }
          findMany: {
            args: Prisma.MensagemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensagemPayload>[]
          }
          create: {
            args: Prisma.MensagemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensagemPayload>
          }
          createMany: {
            args: Prisma.MensagemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MensagemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensagemPayload>[]
          }
          delete: {
            args: Prisma.MensagemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensagemPayload>
          }
          update: {
            args: Prisma.MensagemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensagemPayload>
          }
          deleteMany: {
            args: Prisma.MensagemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MensagemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MensagemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensagemPayload>[]
          }
          upsert: {
            args: Prisma.MensagemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensagemPayload>
          }
          aggregate: {
            args: Prisma.MensagemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMensagem>
          }
          groupBy: {
            args: Prisma.MensagemGroupByArgs<ExtArgs>
            result: $Utils.Optional<MensagemGroupByOutputType>[]
          }
          count: {
            args: Prisma.MensagemCountArgs<ExtArgs>
            result: $Utils.Optional<MensagemCountAggregateOutputType> | number
          }
        }
      }
      Avaliacao: {
        payload: Prisma.$AvaliacaoPayload<ExtArgs>
        fields: Prisma.AvaliacaoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AvaliacaoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvaliacaoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AvaliacaoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvaliacaoPayload>
          }
          findFirst: {
            args: Prisma.AvaliacaoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvaliacaoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AvaliacaoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvaliacaoPayload>
          }
          findMany: {
            args: Prisma.AvaliacaoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvaliacaoPayload>[]
          }
          create: {
            args: Prisma.AvaliacaoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvaliacaoPayload>
          }
          createMany: {
            args: Prisma.AvaliacaoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AvaliacaoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvaliacaoPayload>[]
          }
          delete: {
            args: Prisma.AvaliacaoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvaliacaoPayload>
          }
          update: {
            args: Prisma.AvaliacaoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvaliacaoPayload>
          }
          deleteMany: {
            args: Prisma.AvaliacaoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AvaliacaoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AvaliacaoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvaliacaoPayload>[]
          }
          upsert: {
            args: Prisma.AvaliacaoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvaliacaoPayload>
          }
          aggregate: {
            args: Prisma.AvaliacaoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAvaliacao>
          }
          groupBy: {
            args: Prisma.AvaliacaoGroupByArgs<ExtArgs>
            result: $Utils.Optional<AvaliacaoGroupByOutputType>[]
          }
          count: {
            args: Prisma.AvaliacaoCountArgs<ExtArgs>
            result: $Utils.Optional<AvaliacaoCountAggregateOutputType> | number
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
    admin?: AdminOmit
    casa?: CasaOmit
    imagemCasa?: ImagemCasaOmit
    bloqueioDisponibilidade?: BloqueioDisponibilidadeOmit
    locador?: LocadorOmit
    hospede?: HospedeOmit
    reserva?: ReservaOmit
    favorito?: FavoritoOmit
    conversa?: ConversaOmit
    mensagem?: MensagemOmit
    avaliacao?: AvaliacaoOmit
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
   * Count Type CasaCountOutputType
   */

  export type CasaCountOutputType = {
    reservas: number
    favoritos: number
    imagens: number
    conversas: number
    bloqueiosDisponibilidade: number
    avaliacoes: number
  }

  export type CasaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reservas?: boolean | CasaCountOutputTypeCountReservasArgs
    favoritos?: boolean | CasaCountOutputTypeCountFavoritosArgs
    imagens?: boolean | CasaCountOutputTypeCountImagensArgs
    conversas?: boolean | CasaCountOutputTypeCountConversasArgs
    bloqueiosDisponibilidade?: boolean | CasaCountOutputTypeCountBloqueiosDisponibilidadeArgs
    avaliacoes?: boolean | CasaCountOutputTypeCountAvaliacoesArgs
  }

  // Custom InputTypes
  /**
   * CasaCountOutputType without action
   */
  export type CasaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CasaCountOutputType
     */
    select?: CasaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CasaCountOutputType without action
   */
  export type CasaCountOutputTypeCountReservasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReservaWhereInput
  }

  /**
   * CasaCountOutputType without action
   */
  export type CasaCountOutputTypeCountFavoritosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FavoritoWhereInput
  }

  /**
   * CasaCountOutputType without action
   */
  export type CasaCountOutputTypeCountImagensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImagemCasaWhereInput
  }

  /**
   * CasaCountOutputType without action
   */
  export type CasaCountOutputTypeCountConversasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConversaWhereInput
  }

  /**
   * CasaCountOutputType without action
   */
  export type CasaCountOutputTypeCountBloqueiosDisponibilidadeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BloqueioDisponibilidadeWhereInput
  }

  /**
   * CasaCountOutputType without action
   */
  export type CasaCountOutputTypeCountAvaliacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AvaliacaoWhereInput
  }


  /**
   * Count Type LocadorCountOutputType
   */

  export type LocadorCountOutputType = {
    casas: number
    reservas: number
    conversas: number
    mensagens: number
  }

  export type LocadorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    casas?: boolean | LocadorCountOutputTypeCountCasasArgs
    reservas?: boolean | LocadorCountOutputTypeCountReservasArgs
    conversas?: boolean | LocadorCountOutputTypeCountConversasArgs
    mensagens?: boolean | LocadorCountOutputTypeCountMensagensArgs
  }

  // Custom InputTypes
  /**
   * LocadorCountOutputType without action
   */
  export type LocadorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocadorCountOutputType
     */
    select?: LocadorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LocadorCountOutputType without action
   */
  export type LocadorCountOutputTypeCountCasasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CasaWhereInput
  }

  /**
   * LocadorCountOutputType without action
   */
  export type LocadorCountOutputTypeCountReservasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReservaWhereInput
  }

  /**
   * LocadorCountOutputType without action
   */
  export type LocadorCountOutputTypeCountConversasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConversaWhereInput
  }

  /**
   * LocadorCountOutputType without action
   */
  export type LocadorCountOutputTypeCountMensagensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MensagemWhereInput
  }


  /**
   * Count Type HospedeCountOutputType
   */

  export type HospedeCountOutputType = {
    reservas: number
    favoritos: number
    conversas: number
    mensagens: number
    avaliacoesFeitas: number
  }

  export type HospedeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reservas?: boolean | HospedeCountOutputTypeCountReservasArgs
    favoritos?: boolean | HospedeCountOutputTypeCountFavoritosArgs
    conversas?: boolean | HospedeCountOutputTypeCountConversasArgs
    mensagens?: boolean | HospedeCountOutputTypeCountMensagensArgs
    avaliacoesFeitas?: boolean | HospedeCountOutputTypeCountAvaliacoesFeitasArgs
  }

  // Custom InputTypes
  /**
   * HospedeCountOutputType without action
   */
  export type HospedeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HospedeCountOutputType
     */
    select?: HospedeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * HospedeCountOutputType without action
   */
  export type HospedeCountOutputTypeCountReservasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReservaWhereInput
  }

  /**
   * HospedeCountOutputType without action
   */
  export type HospedeCountOutputTypeCountFavoritosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FavoritoWhereInput
  }

  /**
   * HospedeCountOutputType without action
   */
  export type HospedeCountOutputTypeCountConversasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConversaWhereInput
  }

  /**
   * HospedeCountOutputType without action
   */
  export type HospedeCountOutputTypeCountMensagensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MensagemWhereInput
  }

  /**
   * HospedeCountOutputType without action
   */
  export type HospedeCountOutputTypeCountAvaliacoesFeitasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AvaliacaoWhereInput
  }


  /**
   * Count Type ConversaCountOutputType
   */

  export type ConversaCountOutputType = {
    mensagens: number
  }

  export type ConversaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mensagens?: boolean | ConversaCountOutputTypeCountMensagensArgs
  }

  // Custom InputTypes
  /**
   * ConversaCountOutputType without action
   */
  export type ConversaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversaCountOutputType
     */
    select?: ConversaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ConversaCountOutputType without action
   */
  export type ConversaCountOutputTypeCountMensagensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MensagemWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Admin
   */

  export type AggregateAdmin = {
    _count: AdminCountAggregateOutputType | null
    _avg: AdminAvgAggregateOutputType | null
    _sum: AdminSumAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  export type AdminAvgAggregateOutputType = {
    id: number | null
  }

  export type AdminSumAggregateOutputType = {
    id: number | null
  }

  export type AdminMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    senha: string | null
  }

  export type AdminMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    senha: string | null
  }

  export type AdminCountAggregateOutputType = {
    id: number
    name: number
    email: number
    senha: number
    _all: number
  }


  export type AdminAvgAggregateInputType = {
    id?: true
  }

  export type AdminSumAggregateInputType = {
    id?: true
  }

  export type AdminMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    senha?: true
  }

  export type AdminMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    senha?: true
  }

  export type AdminCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    senha?: true
    _all?: true
  }

  export type AdminAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admin to aggregate.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Admins
    **/
    _count?: true | AdminCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AdminAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AdminSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminMaxAggregateInputType
  }

  export type GetAdminAggregateType<T extends AdminAggregateArgs> = {
        [P in keyof T & keyof AggregateAdmin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmin[P]>
      : GetScalarType<T[P], AggregateAdmin[P]>
  }




  export type AdminGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminWhereInput
    orderBy?: AdminOrderByWithAggregationInput | AdminOrderByWithAggregationInput[]
    by: AdminScalarFieldEnum[] | AdminScalarFieldEnum
    having?: AdminScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminCountAggregateInputType | true
    _avg?: AdminAvgAggregateInputType
    _sum?: AdminSumAggregateInputType
    _min?: AdminMinAggregateInputType
    _max?: AdminMaxAggregateInputType
  }

  export type AdminGroupByOutputType = {
    id: number
    name: string | null
    email: string
    senha: string
    _count: AdminCountAggregateOutputType | null
    _avg: AdminAvgAggregateOutputType | null
    _sum: AdminSumAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  type GetAdminGroupByPayload<T extends AdminGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminGroupByOutputType[P]>
            : GetScalarType<T[P], AdminGroupByOutputType[P]>
        }
      >
    >


  export type AdminSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    senha?: boolean
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    senha?: boolean
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    senha?: boolean
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    senha?: boolean
  }

  export type AdminOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "senha", ExtArgs["result"]["admin"]>

  export type $AdminPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Admin"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string | null
      email: string
      senha: string
    }, ExtArgs["result"]["admin"]>
    composites: {}
  }

  type AdminGetPayload<S extends boolean | null | undefined | AdminDefaultArgs> = $Result.GetResult<Prisma.$AdminPayload, S>

  type AdminCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdminFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdminCountAggregateInputType | true
    }

  export interface AdminDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Admin'], meta: { name: 'Admin' } }
    /**
     * Find zero or one Admin that matches the filter.
     * @param {AdminFindUniqueArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdminFindUniqueArgs>(args: SelectSubset<T, AdminFindUniqueArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Admin that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdminFindUniqueOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdminFindUniqueOrThrowArgs>(args: SelectSubset<T, AdminFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdminFindFirstArgs>(args?: SelectSubset<T, AdminFindFirstArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdminFindFirstOrThrowArgs>(args?: SelectSubset<T, AdminFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Admins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Admins
     * const admins = await prisma.admin.findMany()
     * 
     * // Get first 10 Admins
     * const admins = await prisma.admin.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminWithIdOnly = await prisma.admin.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdminFindManyArgs>(args?: SelectSubset<T, AdminFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Admin.
     * @param {AdminCreateArgs} args - Arguments to create a Admin.
     * @example
     * // Create one Admin
     * const Admin = await prisma.admin.create({
     *   data: {
     *     // ... data to create a Admin
     *   }
     * })
     * 
     */
    create<T extends AdminCreateArgs>(args: SelectSubset<T, AdminCreateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Admins.
     * @param {AdminCreateManyArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdminCreateManyArgs>(args?: SelectSubset<T, AdminCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Admins and returns the data saved in the database.
     * @param {AdminCreateManyAndReturnArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Admins and only return the `id`
     * const adminWithIdOnly = await prisma.admin.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AdminCreateManyAndReturnArgs>(args?: SelectSubset<T, AdminCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Admin.
     * @param {AdminDeleteArgs} args - Arguments to delete one Admin.
     * @example
     * // Delete one Admin
     * const Admin = await prisma.admin.delete({
     *   where: {
     *     // ... filter to delete one Admin
     *   }
     * })
     * 
     */
    delete<T extends AdminDeleteArgs>(args: SelectSubset<T, AdminDeleteArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Admin.
     * @param {AdminUpdateArgs} args - Arguments to update one Admin.
     * @example
     * // Update one Admin
     * const admin = await prisma.admin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdminUpdateArgs>(args: SelectSubset<T, AdminUpdateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Admins.
     * @param {AdminDeleteManyArgs} args - Arguments to filter Admins to delete.
     * @example
     * // Delete a few Admins
     * const { count } = await prisma.admin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdminDeleteManyArgs>(args?: SelectSubset<T, AdminDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdminUpdateManyArgs>(args: SelectSubset<T, AdminUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins and returns the data updated in the database.
     * @param {AdminUpdateManyAndReturnArgs} args - Arguments to update many Admins.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Admins and only return the `id`
     * const adminWithIdOnly = await prisma.admin.updateManyAndReturn({
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
    updateManyAndReturn<T extends AdminUpdateManyAndReturnArgs>(args: SelectSubset<T, AdminUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Admin.
     * @param {AdminUpsertArgs} args - Arguments to update or create a Admin.
     * @example
     * // Update or create a Admin
     * const admin = await prisma.admin.upsert({
     *   create: {
     *     // ... data to create a Admin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Admin we want to update
     *   }
     * })
     */
    upsert<T extends AdminUpsertArgs>(args: SelectSubset<T, AdminUpsertArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminCountArgs} args - Arguments to filter Admins to count.
     * @example
     * // Count the number of Admins
     * const count = await prisma.admin.count({
     *   where: {
     *     // ... the filter for the Admins we want to count
     *   }
     * })
    **/
    count<T extends AdminCountArgs>(
      args?: Subset<T, AdminCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AdminAggregateArgs>(args: Subset<T, AdminAggregateArgs>): Prisma.PrismaPromise<GetAdminAggregateType<T>>

    /**
     * Group by Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminGroupByArgs} args - Group by arguments.
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
      T extends AdminGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminGroupByArgs['orderBy'] }
        : { orderBy?: AdminGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AdminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Admin model
   */
  readonly fields: AdminFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Admin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Admin model
   */
  interface AdminFieldRefs {
    readonly id: FieldRef<"Admin", 'Int'>
    readonly name: FieldRef<"Admin", 'String'>
    readonly email: FieldRef<"Admin", 'String'>
    readonly senha: FieldRef<"Admin", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Admin findUnique
   */
  export type AdminFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findUniqueOrThrow
   */
  export type AdminFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findFirst
   */
  export type AdminFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findFirstOrThrow
   */
  export type AdminFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findMany
   */
  export type AdminFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter, which Admins to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin create
   */
  export type AdminCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data needed to create a Admin.
     */
    data: XOR<AdminCreateInput, AdminUncheckedCreateInput>
  }

  /**
   * Admin createMany
   */
  export type AdminCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Admins.
     */
    data: AdminCreateManyInput | AdminCreateManyInput[]
  }

  /**
   * Admin createManyAndReturn
   */
  export type AdminCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data used to create many Admins.
     */
    data: AdminCreateManyInput | AdminCreateManyInput[]
  }

  /**
   * Admin update
   */
  export type AdminUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data needed to update a Admin.
     */
    data: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
    /**
     * Choose, which Admin to update.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin updateMany
   */
  export type AdminUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Admins.
     */
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyInput>
    /**
     * Filter which Admins to update
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to update.
     */
    limit?: number
  }

  /**
   * Admin updateManyAndReturn
   */
  export type AdminUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data used to update Admins.
     */
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyInput>
    /**
     * Filter which Admins to update
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to update.
     */
    limit?: number
  }

  /**
   * Admin upsert
   */
  export type AdminUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The filter to search for the Admin to update in case it exists.
     */
    where: AdminWhereUniqueInput
    /**
     * In case the Admin found by the `where` argument doesn't exist, create a new Admin with this data.
     */
    create: XOR<AdminCreateInput, AdminUncheckedCreateInput>
    /**
     * In case the Admin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
  }

  /**
   * Admin delete
   */
  export type AdminDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter which Admin to delete.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin deleteMany
   */
  export type AdminDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admins to delete
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to delete.
     */
    limit?: number
  }

  /**
   * Admin without action
   */
  export type AdminDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
  }


  /**
   * Model Casa
   */

  export type AggregateCasa = {
    _count: CasaCountAggregateOutputType | null
    _avg: CasaAvgAggregateOutputType | null
    _sum: CasaSumAggregateOutputType | null
    _min: CasaMinAggregateOutputType | null
    _max: CasaMaxAggregateOutputType | null
  }

  export type CasaAvgAggregateOutputType = {
    id: number | null
    numero: number | null
    precoPorNoite: number | null
    locadorId: number | null
  }

  export type CasaSumAggregateOutputType = {
    id: number | null
    numero: number | null
    precoPorNoite: number | null
    locadorId: number | null
  }

  export type CasaMinAggregateOutputType = {
    id: number | null
    endereco: string | null
    numero: number | null
    cep: string | null
    cidade: string | null
    estado: string | null
    diretrizes: string | null
    complemento: string | null
    precoPorNoite: number | null
    locadorId: number | null
  }

  export type CasaMaxAggregateOutputType = {
    id: number | null
    endereco: string | null
    numero: number | null
    cep: string | null
    cidade: string | null
    estado: string | null
    diretrizes: string | null
    complemento: string | null
    precoPorNoite: number | null
    locadorId: number | null
  }

  export type CasaCountAggregateOutputType = {
    id: number
    endereco: number
    numero: number
    cep: number
    cidade: number
    estado: number
    diretrizes: number
    complemento: number
    precoPorNoite: number
    locadorId: number
    _all: number
  }


  export type CasaAvgAggregateInputType = {
    id?: true
    numero?: true
    precoPorNoite?: true
    locadorId?: true
  }

  export type CasaSumAggregateInputType = {
    id?: true
    numero?: true
    precoPorNoite?: true
    locadorId?: true
  }

  export type CasaMinAggregateInputType = {
    id?: true
    endereco?: true
    numero?: true
    cep?: true
    cidade?: true
    estado?: true
    diretrizes?: true
    complemento?: true
    precoPorNoite?: true
    locadorId?: true
  }

  export type CasaMaxAggregateInputType = {
    id?: true
    endereco?: true
    numero?: true
    cep?: true
    cidade?: true
    estado?: true
    diretrizes?: true
    complemento?: true
    precoPorNoite?: true
    locadorId?: true
  }

  export type CasaCountAggregateInputType = {
    id?: true
    endereco?: true
    numero?: true
    cep?: true
    cidade?: true
    estado?: true
    diretrizes?: true
    complemento?: true
    precoPorNoite?: true
    locadorId?: true
    _all?: true
  }

  export type CasaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Casa to aggregate.
     */
    where?: CasaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Casas to fetch.
     */
    orderBy?: CasaOrderByWithRelationInput | CasaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CasaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Casas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Casas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Casas
    **/
    _count?: true | CasaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CasaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CasaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CasaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CasaMaxAggregateInputType
  }

  export type GetCasaAggregateType<T extends CasaAggregateArgs> = {
        [P in keyof T & keyof AggregateCasa]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCasa[P]>
      : GetScalarType<T[P], AggregateCasa[P]>
  }




  export type CasaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CasaWhereInput
    orderBy?: CasaOrderByWithAggregationInput | CasaOrderByWithAggregationInput[]
    by: CasaScalarFieldEnum[] | CasaScalarFieldEnum
    having?: CasaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CasaCountAggregateInputType | true
    _avg?: CasaAvgAggregateInputType
    _sum?: CasaSumAggregateInputType
    _min?: CasaMinAggregateInputType
    _max?: CasaMaxAggregateInputType
  }

  export type CasaGroupByOutputType = {
    id: number
    endereco: string
    numero: number
    cep: string | null
    cidade: string | null
    estado: string | null
    diretrizes: string
    complemento: string | null
    precoPorNoite: number | null
    locadorId: number
    _count: CasaCountAggregateOutputType | null
    _avg: CasaAvgAggregateOutputType | null
    _sum: CasaSumAggregateOutputType | null
    _min: CasaMinAggregateOutputType | null
    _max: CasaMaxAggregateOutputType | null
  }

  type GetCasaGroupByPayload<T extends CasaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CasaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CasaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CasaGroupByOutputType[P]>
            : GetScalarType<T[P], CasaGroupByOutputType[P]>
        }
      >
    >


  export type CasaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    endereco?: boolean
    numero?: boolean
    cep?: boolean
    cidade?: boolean
    estado?: boolean
    diretrizes?: boolean
    complemento?: boolean
    precoPorNoite?: boolean
    locadorId?: boolean
    locador?: boolean | LocadorDefaultArgs<ExtArgs>
    reservas?: boolean | Casa$reservasArgs<ExtArgs>
    favoritos?: boolean | Casa$favoritosArgs<ExtArgs>
    imagens?: boolean | Casa$imagensArgs<ExtArgs>
    conversas?: boolean | Casa$conversasArgs<ExtArgs>
    bloqueiosDisponibilidade?: boolean | Casa$bloqueiosDisponibilidadeArgs<ExtArgs>
    avaliacoes?: boolean | Casa$avaliacoesArgs<ExtArgs>
    _count?: boolean | CasaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["casa"]>

  export type CasaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    endereco?: boolean
    numero?: boolean
    cep?: boolean
    cidade?: boolean
    estado?: boolean
    diretrizes?: boolean
    complemento?: boolean
    precoPorNoite?: boolean
    locadorId?: boolean
    locador?: boolean | LocadorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["casa"]>

  export type CasaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    endereco?: boolean
    numero?: boolean
    cep?: boolean
    cidade?: boolean
    estado?: boolean
    diretrizes?: boolean
    complemento?: boolean
    precoPorNoite?: boolean
    locadorId?: boolean
    locador?: boolean | LocadorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["casa"]>

  export type CasaSelectScalar = {
    id?: boolean
    endereco?: boolean
    numero?: boolean
    cep?: boolean
    cidade?: boolean
    estado?: boolean
    diretrizes?: boolean
    complemento?: boolean
    precoPorNoite?: boolean
    locadorId?: boolean
  }

  export type CasaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "endereco" | "numero" | "cep" | "cidade" | "estado" | "diretrizes" | "complemento" | "precoPorNoite" | "locadorId", ExtArgs["result"]["casa"]>
  export type CasaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    locador?: boolean | LocadorDefaultArgs<ExtArgs>
    reservas?: boolean | Casa$reservasArgs<ExtArgs>
    favoritos?: boolean | Casa$favoritosArgs<ExtArgs>
    imagens?: boolean | Casa$imagensArgs<ExtArgs>
    conversas?: boolean | Casa$conversasArgs<ExtArgs>
    bloqueiosDisponibilidade?: boolean | Casa$bloqueiosDisponibilidadeArgs<ExtArgs>
    avaliacoes?: boolean | Casa$avaliacoesArgs<ExtArgs>
    _count?: boolean | CasaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CasaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    locador?: boolean | LocadorDefaultArgs<ExtArgs>
  }
  export type CasaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    locador?: boolean | LocadorDefaultArgs<ExtArgs>
  }

  export type $CasaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Casa"
    objects: {
      locador: Prisma.$LocadorPayload<ExtArgs>
      reservas: Prisma.$ReservaPayload<ExtArgs>[]
      favoritos: Prisma.$FavoritoPayload<ExtArgs>[]
      imagens: Prisma.$ImagemCasaPayload<ExtArgs>[]
      conversas: Prisma.$ConversaPayload<ExtArgs>[]
      bloqueiosDisponibilidade: Prisma.$BloqueioDisponibilidadePayload<ExtArgs>[]
      avaliacoes: Prisma.$AvaliacaoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      endereco: string
      numero: number
      cep: string | null
      cidade: string | null
      estado: string | null
      diretrizes: string
      complemento: string | null
      precoPorNoite: number | null
      locadorId: number
    }, ExtArgs["result"]["casa"]>
    composites: {}
  }

  type CasaGetPayload<S extends boolean | null | undefined | CasaDefaultArgs> = $Result.GetResult<Prisma.$CasaPayload, S>

  type CasaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CasaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CasaCountAggregateInputType | true
    }

  export interface CasaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Casa'], meta: { name: 'Casa' } }
    /**
     * Find zero or one Casa that matches the filter.
     * @param {CasaFindUniqueArgs} args - Arguments to find a Casa
     * @example
     * // Get one Casa
     * const casa = await prisma.casa.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CasaFindUniqueArgs>(args: SelectSubset<T, CasaFindUniqueArgs<ExtArgs>>): Prisma__CasaClient<$Result.GetResult<Prisma.$CasaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Casa that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CasaFindUniqueOrThrowArgs} args - Arguments to find a Casa
     * @example
     * // Get one Casa
     * const casa = await prisma.casa.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CasaFindUniqueOrThrowArgs>(args: SelectSubset<T, CasaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CasaClient<$Result.GetResult<Prisma.$CasaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Casa that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CasaFindFirstArgs} args - Arguments to find a Casa
     * @example
     * // Get one Casa
     * const casa = await prisma.casa.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CasaFindFirstArgs>(args?: SelectSubset<T, CasaFindFirstArgs<ExtArgs>>): Prisma__CasaClient<$Result.GetResult<Prisma.$CasaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Casa that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CasaFindFirstOrThrowArgs} args - Arguments to find a Casa
     * @example
     * // Get one Casa
     * const casa = await prisma.casa.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CasaFindFirstOrThrowArgs>(args?: SelectSubset<T, CasaFindFirstOrThrowArgs<ExtArgs>>): Prisma__CasaClient<$Result.GetResult<Prisma.$CasaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Casas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CasaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Casas
     * const casas = await prisma.casa.findMany()
     * 
     * // Get first 10 Casas
     * const casas = await prisma.casa.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const casaWithIdOnly = await prisma.casa.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CasaFindManyArgs>(args?: SelectSubset<T, CasaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CasaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Casa.
     * @param {CasaCreateArgs} args - Arguments to create a Casa.
     * @example
     * // Create one Casa
     * const Casa = await prisma.casa.create({
     *   data: {
     *     // ... data to create a Casa
     *   }
     * })
     * 
     */
    create<T extends CasaCreateArgs>(args: SelectSubset<T, CasaCreateArgs<ExtArgs>>): Prisma__CasaClient<$Result.GetResult<Prisma.$CasaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Casas.
     * @param {CasaCreateManyArgs} args - Arguments to create many Casas.
     * @example
     * // Create many Casas
     * const casa = await prisma.casa.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CasaCreateManyArgs>(args?: SelectSubset<T, CasaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Casas and returns the data saved in the database.
     * @param {CasaCreateManyAndReturnArgs} args - Arguments to create many Casas.
     * @example
     * // Create many Casas
     * const casa = await prisma.casa.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Casas and only return the `id`
     * const casaWithIdOnly = await prisma.casa.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CasaCreateManyAndReturnArgs>(args?: SelectSubset<T, CasaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CasaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Casa.
     * @param {CasaDeleteArgs} args - Arguments to delete one Casa.
     * @example
     * // Delete one Casa
     * const Casa = await prisma.casa.delete({
     *   where: {
     *     // ... filter to delete one Casa
     *   }
     * })
     * 
     */
    delete<T extends CasaDeleteArgs>(args: SelectSubset<T, CasaDeleteArgs<ExtArgs>>): Prisma__CasaClient<$Result.GetResult<Prisma.$CasaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Casa.
     * @param {CasaUpdateArgs} args - Arguments to update one Casa.
     * @example
     * // Update one Casa
     * const casa = await prisma.casa.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CasaUpdateArgs>(args: SelectSubset<T, CasaUpdateArgs<ExtArgs>>): Prisma__CasaClient<$Result.GetResult<Prisma.$CasaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Casas.
     * @param {CasaDeleteManyArgs} args - Arguments to filter Casas to delete.
     * @example
     * // Delete a few Casas
     * const { count } = await prisma.casa.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CasaDeleteManyArgs>(args?: SelectSubset<T, CasaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Casas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CasaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Casas
     * const casa = await prisma.casa.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CasaUpdateManyArgs>(args: SelectSubset<T, CasaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Casas and returns the data updated in the database.
     * @param {CasaUpdateManyAndReturnArgs} args - Arguments to update many Casas.
     * @example
     * // Update many Casas
     * const casa = await prisma.casa.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Casas and only return the `id`
     * const casaWithIdOnly = await prisma.casa.updateManyAndReturn({
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
    updateManyAndReturn<T extends CasaUpdateManyAndReturnArgs>(args: SelectSubset<T, CasaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CasaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Casa.
     * @param {CasaUpsertArgs} args - Arguments to update or create a Casa.
     * @example
     * // Update or create a Casa
     * const casa = await prisma.casa.upsert({
     *   create: {
     *     // ... data to create a Casa
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Casa we want to update
     *   }
     * })
     */
    upsert<T extends CasaUpsertArgs>(args: SelectSubset<T, CasaUpsertArgs<ExtArgs>>): Prisma__CasaClient<$Result.GetResult<Prisma.$CasaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Casas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CasaCountArgs} args - Arguments to filter Casas to count.
     * @example
     * // Count the number of Casas
     * const count = await prisma.casa.count({
     *   where: {
     *     // ... the filter for the Casas we want to count
     *   }
     * })
    **/
    count<T extends CasaCountArgs>(
      args?: Subset<T, CasaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CasaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Casa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CasaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CasaAggregateArgs>(args: Subset<T, CasaAggregateArgs>): Prisma.PrismaPromise<GetCasaAggregateType<T>>

    /**
     * Group by Casa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CasaGroupByArgs} args - Group by arguments.
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
      T extends CasaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CasaGroupByArgs['orderBy'] }
        : { orderBy?: CasaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CasaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCasaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Casa model
   */
  readonly fields: CasaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Casa.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CasaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    locador<T extends LocadorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LocadorDefaultArgs<ExtArgs>>): Prisma__LocadorClient<$Result.GetResult<Prisma.$LocadorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    reservas<T extends Casa$reservasArgs<ExtArgs> = {}>(args?: Subset<T, Casa$reservasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    favoritos<T extends Casa$favoritosArgs<ExtArgs> = {}>(args?: Subset<T, Casa$favoritosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoritoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    imagens<T extends Casa$imagensArgs<ExtArgs> = {}>(args?: Subset<T, Casa$imagensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagemCasaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    conversas<T extends Casa$conversasArgs<ExtArgs> = {}>(args?: Subset<T, Casa$conversasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConversaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    bloqueiosDisponibilidade<T extends Casa$bloqueiosDisponibilidadeArgs<ExtArgs> = {}>(args?: Subset<T, Casa$bloqueiosDisponibilidadeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BloqueioDisponibilidadePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    avaliacoes<T extends Casa$avaliacoesArgs<ExtArgs> = {}>(args?: Subset<T, Casa$avaliacoesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Casa model
   */
  interface CasaFieldRefs {
    readonly id: FieldRef<"Casa", 'Int'>
    readonly endereco: FieldRef<"Casa", 'String'>
    readonly numero: FieldRef<"Casa", 'Int'>
    readonly cep: FieldRef<"Casa", 'String'>
    readonly cidade: FieldRef<"Casa", 'String'>
    readonly estado: FieldRef<"Casa", 'String'>
    readonly diretrizes: FieldRef<"Casa", 'String'>
    readonly complemento: FieldRef<"Casa", 'String'>
    readonly precoPorNoite: FieldRef<"Casa", 'Float'>
    readonly locadorId: FieldRef<"Casa", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Casa findUnique
   */
  export type CasaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Casa
     */
    select?: CasaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Casa
     */
    omit?: CasaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CasaInclude<ExtArgs> | null
    /**
     * Filter, which Casa to fetch.
     */
    where: CasaWhereUniqueInput
  }

  /**
   * Casa findUniqueOrThrow
   */
  export type CasaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Casa
     */
    select?: CasaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Casa
     */
    omit?: CasaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CasaInclude<ExtArgs> | null
    /**
     * Filter, which Casa to fetch.
     */
    where: CasaWhereUniqueInput
  }

  /**
   * Casa findFirst
   */
  export type CasaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Casa
     */
    select?: CasaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Casa
     */
    omit?: CasaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CasaInclude<ExtArgs> | null
    /**
     * Filter, which Casa to fetch.
     */
    where?: CasaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Casas to fetch.
     */
    orderBy?: CasaOrderByWithRelationInput | CasaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Casas.
     */
    cursor?: CasaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Casas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Casas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Casas.
     */
    distinct?: CasaScalarFieldEnum | CasaScalarFieldEnum[]
  }

  /**
   * Casa findFirstOrThrow
   */
  export type CasaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Casa
     */
    select?: CasaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Casa
     */
    omit?: CasaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CasaInclude<ExtArgs> | null
    /**
     * Filter, which Casa to fetch.
     */
    where?: CasaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Casas to fetch.
     */
    orderBy?: CasaOrderByWithRelationInput | CasaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Casas.
     */
    cursor?: CasaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Casas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Casas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Casas.
     */
    distinct?: CasaScalarFieldEnum | CasaScalarFieldEnum[]
  }

  /**
   * Casa findMany
   */
  export type CasaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Casa
     */
    select?: CasaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Casa
     */
    omit?: CasaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CasaInclude<ExtArgs> | null
    /**
     * Filter, which Casas to fetch.
     */
    where?: CasaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Casas to fetch.
     */
    orderBy?: CasaOrderByWithRelationInput | CasaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Casas.
     */
    cursor?: CasaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Casas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Casas.
     */
    skip?: number
    distinct?: CasaScalarFieldEnum | CasaScalarFieldEnum[]
  }

  /**
   * Casa create
   */
  export type CasaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Casa
     */
    select?: CasaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Casa
     */
    omit?: CasaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CasaInclude<ExtArgs> | null
    /**
     * The data needed to create a Casa.
     */
    data: XOR<CasaCreateInput, CasaUncheckedCreateInput>
  }

  /**
   * Casa createMany
   */
  export type CasaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Casas.
     */
    data: CasaCreateManyInput | CasaCreateManyInput[]
  }

  /**
   * Casa createManyAndReturn
   */
  export type CasaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Casa
     */
    select?: CasaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Casa
     */
    omit?: CasaOmit<ExtArgs> | null
    /**
     * The data used to create many Casas.
     */
    data: CasaCreateManyInput | CasaCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CasaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Casa update
   */
  export type CasaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Casa
     */
    select?: CasaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Casa
     */
    omit?: CasaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CasaInclude<ExtArgs> | null
    /**
     * The data needed to update a Casa.
     */
    data: XOR<CasaUpdateInput, CasaUncheckedUpdateInput>
    /**
     * Choose, which Casa to update.
     */
    where: CasaWhereUniqueInput
  }

  /**
   * Casa updateMany
   */
  export type CasaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Casas.
     */
    data: XOR<CasaUpdateManyMutationInput, CasaUncheckedUpdateManyInput>
    /**
     * Filter which Casas to update
     */
    where?: CasaWhereInput
    /**
     * Limit how many Casas to update.
     */
    limit?: number
  }

  /**
   * Casa updateManyAndReturn
   */
  export type CasaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Casa
     */
    select?: CasaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Casa
     */
    omit?: CasaOmit<ExtArgs> | null
    /**
     * The data used to update Casas.
     */
    data: XOR<CasaUpdateManyMutationInput, CasaUncheckedUpdateManyInput>
    /**
     * Filter which Casas to update
     */
    where?: CasaWhereInput
    /**
     * Limit how many Casas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CasaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Casa upsert
   */
  export type CasaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Casa
     */
    select?: CasaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Casa
     */
    omit?: CasaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CasaInclude<ExtArgs> | null
    /**
     * The filter to search for the Casa to update in case it exists.
     */
    where: CasaWhereUniqueInput
    /**
     * In case the Casa found by the `where` argument doesn't exist, create a new Casa with this data.
     */
    create: XOR<CasaCreateInput, CasaUncheckedCreateInput>
    /**
     * In case the Casa was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CasaUpdateInput, CasaUncheckedUpdateInput>
  }

  /**
   * Casa delete
   */
  export type CasaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Casa
     */
    select?: CasaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Casa
     */
    omit?: CasaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CasaInclude<ExtArgs> | null
    /**
     * Filter which Casa to delete.
     */
    where: CasaWhereUniqueInput
  }

  /**
   * Casa deleteMany
   */
  export type CasaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Casas to delete
     */
    where?: CasaWhereInput
    /**
     * Limit how many Casas to delete.
     */
    limit?: number
  }

  /**
   * Casa.reservas
   */
  export type Casa$reservasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reserva
     */
    select?: ReservaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reserva
     */
    omit?: ReservaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservaInclude<ExtArgs> | null
    where?: ReservaWhereInput
    orderBy?: ReservaOrderByWithRelationInput | ReservaOrderByWithRelationInput[]
    cursor?: ReservaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReservaScalarFieldEnum | ReservaScalarFieldEnum[]
  }

  /**
   * Casa.favoritos
   */
  export type Casa$favoritosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorito
     */
    select?: FavoritoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorito
     */
    omit?: FavoritoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoritoInclude<ExtArgs> | null
    where?: FavoritoWhereInput
    orderBy?: FavoritoOrderByWithRelationInput | FavoritoOrderByWithRelationInput[]
    cursor?: FavoritoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FavoritoScalarFieldEnum | FavoritoScalarFieldEnum[]
  }

  /**
   * Casa.imagens
   */
  export type Casa$imagensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImagemCasa
     */
    select?: ImagemCasaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImagemCasa
     */
    omit?: ImagemCasaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImagemCasaInclude<ExtArgs> | null
    where?: ImagemCasaWhereInput
    orderBy?: ImagemCasaOrderByWithRelationInput | ImagemCasaOrderByWithRelationInput[]
    cursor?: ImagemCasaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ImagemCasaScalarFieldEnum | ImagemCasaScalarFieldEnum[]
  }

  /**
   * Casa.conversas
   */
  export type Casa$conversasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversa
     */
    select?: ConversaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversa
     */
    omit?: ConversaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversaInclude<ExtArgs> | null
    where?: ConversaWhereInput
    orderBy?: ConversaOrderByWithRelationInput | ConversaOrderByWithRelationInput[]
    cursor?: ConversaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConversaScalarFieldEnum | ConversaScalarFieldEnum[]
  }

  /**
   * Casa.bloqueiosDisponibilidade
   */
  export type Casa$bloqueiosDisponibilidadeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BloqueioDisponibilidade
     */
    select?: BloqueioDisponibilidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BloqueioDisponibilidade
     */
    omit?: BloqueioDisponibilidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BloqueioDisponibilidadeInclude<ExtArgs> | null
    where?: BloqueioDisponibilidadeWhereInput
    orderBy?: BloqueioDisponibilidadeOrderByWithRelationInput | BloqueioDisponibilidadeOrderByWithRelationInput[]
    cursor?: BloqueioDisponibilidadeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BloqueioDisponibilidadeScalarFieldEnum | BloqueioDisponibilidadeScalarFieldEnum[]
  }

  /**
   * Casa.avaliacoes
   */
  export type Casa$avaliacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avaliacao
     */
    omit?: AvaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoInclude<ExtArgs> | null
    where?: AvaliacaoWhereInput
    orderBy?: AvaliacaoOrderByWithRelationInput | AvaliacaoOrderByWithRelationInput[]
    cursor?: AvaliacaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AvaliacaoScalarFieldEnum | AvaliacaoScalarFieldEnum[]
  }

  /**
   * Casa without action
   */
  export type CasaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Casa
     */
    select?: CasaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Casa
     */
    omit?: CasaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CasaInclude<ExtArgs> | null
  }


  /**
   * Model ImagemCasa
   */

  export type AggregateImagemCasa = {
    _count: ImagemCasaCountAggregateOutputType | null
    _avg: ImagemCasaAvgAggregateOutputType | null
    _sum: ImagemCasaSumAggregateOutputType | null
    _min: ImagemCasaMinAggregateOutputType | null
    _max: ImagemCasaMaxAggregateOutputType | null
  }

  export type ImagemCasaAvgAggregateOutputType = {
    id: number | null
    casaId: number | null
  }

  export type ImagemCasaSumAggregateOutputType = {
    id: number | null
    casaId: number | null
  }

  export type ImagemCasaMinAggregateOutputType = {
    id: number | null
    url: string | null
    casaId: number | null
    createdAt: Date | null
  }

  export type ImagemCasaMaxAggregateOutputType = {
    id: number | null
    url: string | null
    casaId: number | null
    createdAt: Date | null
  }

  export type ImagemCasaCountAggregateOutputType = {
    id: number
    url: number
    casaId: number
    createdAt: number
    _all: number
  }


  export type ImagemCasaAvgAggregateInputType = {
    id?: true
    casaId?: true
  }

  export type ImagemCasaSumAggregateInputType = {
    id?: true
    casaId?: true
  }

  export type ImagemCasaMinAggregateInputType = {
    id?: true
    url?: true
    casaId?: true
    createdAt?: true
  }

  export type ImagemCasaMaxAggregateInputType = {
    id?: true
    url?: true
    casaId?: true
    createdAt?: true
  }

  export type ImagemCasaCountAggregateInputType = {
    id?: true
    url?: true
    casaId?: true
    createdAt?: true
    _all?: true
  }

  export type ImagemCasaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ImagemCasa to aggregate.
     */
    where?: ImagemCasaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ImagemCasas to fetch.
     */
    orderBy?: ImagemCasaOrderByWithRelationInput | ImagemCasaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ImagemCasaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ImagemCasas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ImagemCasas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ImagemCasas
    **/
    _count?: true | ImagemCasaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ImagemCasaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ImagemCasaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ImagemCasaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ImagemCasaMaxAggregateInputType
  }

  export type GetImagemCasaAggregateType<T extends ImagemCasaAggregateArgs> = {
        [P in keyof T & keyof AggregateImagemCasa]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateImagemCasa[P]>
      : GetScalarType<T[P], AggregateImagemCasa[P]>
  }




  export type ImagemCasaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImagemCasaWhereInput
    orderBy?: ImagemCasaOrderByWithAggregationInput | ImagemCasaOrderByWithAggregationInput[]
    by: ImagemCasaScalarFieldEnum[] | ImagemCasaScalarFieldEnum
    having?: ImagemCasaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ImagemCasaCountAggregateInputType | true
    _avg?: ImagemCasaAvgAggregateInputType
    _sum?: ImagemCasaSumAggregateInputType
    _min?: ImagemCasaMinAggregateInputType
    _max?: ImagemCasaMaxAggregateInputType
  }

  export type ImagemCasaGroupByOutputType = {
    id: number
    url: string
    casaId: number
    createdAt: Date
    _count: ImagemCasaCountAggregateOutputType | null
    _avg: ImagemCasaAvgAggregateOutputType | null
    _sum: ImagemCasaSumAggregateOutputType | null
    _min: ImagemCasaMinAggregateOutputType | null
    _max: ImagemCasaMaxAggregateOutputType | null
  }

  type GetImagemCasaGroupByPayload<T extends ImagemCasaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ImagemCasaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ImagemCasaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ImagemCasaGroupByOutputType[P]>
            : GetScalarType<T[P], ImagemCasaGroupByOutputType[P]>
        }
      >
    >


  export type ImagemCasaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    casaId?: boolean
    createdAt?: boolean
    casa?: boolean | CasaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["imagemCasa"]>

  export type ImagemCasaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    casaId?: boolean
    createdAt?: boolean
    casa?: boolean | CasaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["imagemCasa"]>

  export type ImagemCasaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    casaId?: boolean
    createdAt?: boolean
    casa?: boolean | CasaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["imagemCasa"]>

  export type ImagemCasaSelectScalar = {
    id?: boolean
    url?: boolean
    casaId?: boolean
    createdAt?: boolean
  }

  export type ImagemCasaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "url" | "casaId" | "createdAt", ExtArgs["result"]["imagemCasa"]>
  export type ImagemCasaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    casa?: boolean | CasaDefaultArgs<ExtArgs>
  }
  export type ImagemCasaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    casa?: boolean | CasaDefaultArgs<ExtArgs>
  }
  export type ImagemCasaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    casa?: boolean | CasaDefaultArgs<ExtArgs>
  }

  export type $ImagemCasaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ImagemCasa"
    objects: {
      casa: Prisma.$CasaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      url: string
      casaId: number
      createdAt: Date
    }, ExtArgs["result"]["imagemCasa"]>
    composites: {}
  }

  type ImagemCasaGetPayload<S extends boolean | null | undefined | ImagemCasaDefaultArgs> = $Result.GetResult<Prisma.$ImagemCasaPayload, S>

  type ImagemCasaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ImagemCasaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ImagemCasaCountAggregateInputType | true
    }

  export interface ImagemCasaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ImagemCasa'], meta: { name: 'ImagemCasa' } }
    /**
     * Find zero or one ImagemCasa that matches the filter.
     * @param {ImagemCasaFindUniqueArgs} args - Arguments to find a ImagemCasa
     * @example
     * // Get one ImagemCasa
     * const imagemCasa = await prisma.imagemCasa.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ImagemCasaFindUniqueArgs>(args: SelectSubset<T, ImagemCasaFindUniqueArgs<ExtArgs>>): Prisma__ImagemCasaClient<$Result.GetResult<Prisma.$ImagemCasaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ImagemCasa that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ImagemCasaFindUniqueOrThrowArgs} args - Arguments to find a ImagemCasa
     * @example
     * // Get one ImagemCasa
     * const imagemCasa = await prisma.imagemCasa.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ImagemCasaFindUniqueOrThrowArgs>(args: SelectSubset<T, ImagemCasaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ImagemCasaClient<$Result.GetResult<Prisma.$ImagemCasaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ImagemCasa that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImagemCasaFindFirstArgs} args - Arguments to find a ImagemCasa
     * @example
     * // Get one ImagemCasa
     * const imagemCasa = await prisma.imagemCasa.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ImagemCasaFindFirstArgs>(args?: SelectSubset<T, ImagemCasaFindFirstArgs<ExtArgs>>): Prisma__ImagemCasaClient<$Result.GetResult<Prisma.$ImagemCasaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ImagemCasa that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImagemCasaFindFirstOrThrowArgs} args - Arguments to find a ImagemCasa
     * @example
     * // Get one ImagemCasa
     * const imagemCasa = await prisma.imagemCasa.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ImagemCasaFindFirstOrThrowArgs>(args?: SelectSubset<T, ImagemCasaFindFirstOrThrowArgs<ExtArgs>>): Prisma__ImagemCasaClient<$Result.GetResult<Prisma.$ImagemCasaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ImagemCasas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImagemCasaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ImagemCasas
     * const imagemCasas = await prisma.imagemCasa.findMany()
     * 
     * // Get first 10 ImagemCasas
     * const imagemCasas = await prisma.imagemCasa.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const imagemCasaWithIdOnly = await prisma.imagemCasa.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ImagemCasaFindManyArgs>(args?: SelectSubset<T, ImagemCasaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagemCasaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ImagemCasa.
     * @param {ImagemCasaCreateArgs} args - Arguments to create a ImagemCasa.
     * @example
     * // Create one ImagemCasa
     * const ImagemCasa = await prisma.imagemCasa.create({
     *   data: {
     *     // ... data to create a ImagemCasa
     *   }
     * })
     * 
     */
    create<T extends ImagemCasaCreateArgs>(args: SelectSubset<T, ImagemCasaCreateArgs<ExtArgs>>): Prisma__ImagemCasaClient<$Result.GetResult<Prisma.$ImagemCasaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ImagemCasas.
     * @param {ImagemCasaCreateManyArgs} args - Arguments to create many ImagemCasas.
     * @example
     * // Create many ImagemCasas
     * const imagemCasa = await prisma.imagemCasa.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ImagemCasaCreateManyArgs>(args?: SelectSubset<T, ImagemCasaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ImagemCasas and returns the data saved in the database.
     * @param {ImagemCasaCreateManyAndReturnArgs} args - Arguments to create many ImagemCasas.
     * @example
     * // Create many ImagemCasas
     * const imagemCasa = await prisma.imagemCasa.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ImagemCasas and only return the `id`
     * const imagemCasaWithIdOnly = await prisma.imagemCasa.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ImagemCasaCreateManyAndReturnArgs>(args?: SelectSubset<T, ImagemCasaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagemCasaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ImagemCasa.
     * @param {ImagemCasaDeleteArgs} args - Arguments to delete one ImagemCasa.
     * @example
     * // Delete one ImagemCasa
     * const ImagemCasa = await prisma.imagemCasa.delete({
     *   where: {
     *     // ... filter to delete one ImagemCasa
     *   }
     * })
     * 
     */
    delete<T extends ImagemCasaDeleteArgs>(args: SelectSubset<T, ImagemCasaDeleteArgs<ExtArgs>>): Prisma__ImagemCasaClient<$Result.GetResult<Prisma.$ImagemCasaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ImagemCasa.
     * @param {ImagemCasaUpdateArgs} args - Arguments to update one ImagemCasa.
     * @example
     * // Update one ImagemCasa
     * const imagemCasa = await prisma.imagemCasa.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ImagemCasaUpdateArgs>(args: SelectSubset<T, ImagemCasaUpdateArgs<ExtArgs>>): Prisma__ImagemCasaClient<$Result.GetResult<Prisma.$ImagemCasaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ImagemCasas.
     * @param {ImagemCasaDeleteManyArgs} args - Arguments to filter ImagemCasas to delete.
     * @example
     * // Delete a few ImagemCasas
     * const { count } = await prisma.imagemCasa.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ImagemCasaDeleteManyArgs>(args?: SelectSubset<T, ImagemCasaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ImagemCasas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImagemCasaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ImagemCasas
     * const imagemCasa = await prisma.imagemCasa.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ImagemCasaUpdateManyArgs>(args: SelectSubset<T, ImagemCasaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ImagemCasas and returns the data updated in the database.
     * @param {ImagemCasaUpdateManyAndReturnArgs} args - Arguments to update many ImagemCasas.
     * @example
     * // Update many ImagemCasas
     * const imagemCasa = await prisma.imagemCasa.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ImagemCasas and only return the `id`
     * const imagemCasaWithIdOnly = await prisma.imagemCasa.updateManyAndReturn({
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
    updateManyAndReturn<T extends ImagemCasaUpdateManyAndReturnArgs>(args: SelectSubset<T, ImagemCasaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagemCasaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ImagemCasa.
     * @param {ImagemCasaUpsertArgs} args - Arguments to update or create a ImagemCasa.
     * @example
     * // Update or create a ImagemCasa
     * const imagemCasa = await prisma.imagemCasa.upsert({
     *   create: {
     *     // ... data to create a ImagemCasa
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ImagemCasa we want to update
     *   }
     * })
     */
    upsert<T extends ImagemCasaUpsertArgs>(args: SelectSubset<T, ImagemCasaUpsertArgs<ExtArgs>>): Prisma__ImagemCasaClient<$Result.GetResult<Prisma.$ImagemCasaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ImagemCasas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImagemCasaCountArgs} args - Arguments to filter ImagemCasas to count.
     * @example
     * // Count the number of ImagemCasas
     * const count = await prisma.imagemCasa.count({
     *   where: {
     *     // ... the filter for the ImagemCasas we want to count
     *   }
     * })
    **/
    count<T extends ImagemCasaCountArgs>(
      args?: Subset<T, ImagemCasaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ImagemCasaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ImagemCasa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImagemCasaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ImagemCasaAggregateArgs>(args: Subset<T, ImagemCasaAggregateArgs>): Prisma.PrismaPromise<GetImagemCasaAggregateType<T>>

    /**
     * Group by ImagemCasa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImagemCasaGroupByArgs} args - Group by arguments.
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
      T extends ImagemCasaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ImagemCasaGroupByArgs['orderBy'] }
        : { orderBy?: ImagemCasaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ImagemCasaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetImagemCasaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ImagemCasa model
   */
  readonly fields: ImagemCasaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ImagemCasa.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ImagemCasaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    casa<T extends CasaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CasaDefaultArgs<ExtArgs>>): Prisma__CasaClient<$Result.GetResult<Prisma.$CasaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ImagemCasa model
   */
  interface ImagemCasaFieldRefs {
    readonly id: FieldRef<"ImagemCasa", 'Int'>
    readonly url: FieldRef<"ImagemCasa", 'String'>
    readonly casaId: FieldRef<"ImagemCasa", 'Int'>
    readonly createdAt: FieldRef<"ImagemCasa", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ImagemCasa findUnique
   */
  export type ImagemCasaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImagemCasa
     */
    select?: ImagemCasaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImagemCasa
     */
    omit?: ImagemCasaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImagemCasaInclude<ExtArgs> | null
    /**
     * Filter, which ImagemCasa to fetch.
     */
    where: ImagemCasaWhereUniqueInput
  }

  /**
   * ImagemCasa findUniqueOrThrow
   */
  export type ImagemCasaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImagemCasa
     */
    select?: ImagemCasaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImagemCasa
     */
    omit?: ImagemCasaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImagemCasaInclude<ExtArgs> | null
    /**
     * Filter, which ImagemCasa to fetch.
     */
    where: ImagemCasaWhereUniqueInput
  }

  /**
   * ImagemCasa findFirst
   */
  export type ImagemCasaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImagemCasa
     */
    select?: ImagemCasaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImagemCasa
     */
    omit?: ImagemCasaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImagemCasaInclude<ExtArgs> | null
    /**
     * Filter, which ImagemCasa to fetch.
     */
    where?: ImagemCasaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ImagemCasas to fetch.
     */
    orderBy?: ImagemCasaOrderByWithRelationInput | ImagemCasaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ImagemCasas.
     */
    cursor?: ImagemCasaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ImagemCasas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ImagemCasas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ImagemCasas.
     */
    distinct?: ImagemCasaScalarFieldEnum | ImagemCasaScalarFieldEnum[]
  }

  /**
   * ImagemCasa findFirstOrThrow
   */
  export type ImagemCasaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImagemCasa
     */
    select?: ImagemCasaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImagemCasa
     */
    omit?: ImagemCasaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImagemCasaInclude<ExtArgs> | null
    /**
     * Filter, which ImagemCasa to fetch.
     */
    where?: ImagemCasaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ImagemCasas to fetch.
     */
    orderBy?: ImagemCasaOrderByWithRelationInput | ImagemCasaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ImagemCasas.
     */
    cursor?: ImagemCasaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ImagemCasas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ImagemCasas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ImagemCasas.
     */
    distinct?: ImagemCasaScalarFieldEnum | ImagemCasaScalarFieldEnum[]
  }

  /**
   * ImagemCasa findMany
   */
  export type ImagemCasaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImagemCasa
     */
    select?: ImagemCasaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImagemCasa
     */
    omit?: ImagemCasaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImagemCasaInclude<ExtArgs> | null
    /**
     * Filter, which ImagemCasas to fetch.
     */
    where?: ImagemCasaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ImagemCasas to fetch.
     */
    orderBy?: ImagemCasaOrderByWithRelationInput | ImagemCasaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ImagemCasas.
     */
    cursor?: ImagemCasaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ImagemCasas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ImagemCasas.
     */
    skip?: number
    distinct?: ImagemCasaScalarFieldEnum | ImagemCasaScalarFieldEnum[]
  }

  /**
   * ImagemCasa create
   */
  export type ImagemCasaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImagemCasa
     */
    select?: ImagemCasaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImagemCasa
     */
    omit?: ImagemCasaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImagemCasaInclude<ExtArgs> | null
    /**
     * The data needed to create a ImagemCasa.
     */
    data: XOR<ImagemCasaCreateInput, ImagemCasaUncheckedCreateInput>
  }

  /**
   * ImagemCasa createMany
   */
  export type ImagemCasaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ImagemCasas.
     */
    data: ImagemCasaCreateManyInput | ImagemCasaCreateManyInput[]
  }

  /**
   * ImagemCasa createManyAndReturn
   */
  export type ImagemCasaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImagemCasa
     */
    select?: ImagemCasaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ImagemCasa
     */
    omit?: ImagemCasaOmit<ExtArgs> | null
    /**
     * The data used to create many ImagemCasas.
     */
    data: ImagemCasaCreateManyInput | ImagemCasaCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImagemCasaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ImagemCasa update
   */
  export type ImagemCasaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImagemCasa
     */
    select?: ImagemCasaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImagemCasa
     */
    omit?: ImagemCasaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImagemCasaInclude<ExtArgs> | null
    /**
     * The data needed to update a ImagemCasa.
     */
    data: XOR<ImagemCasaUpdateInput, ImagemCasaUncheckedUpdateInput>
    /**
     * Choose, which ImagemCasa to update.
     */
    where: ImagemCasaWhereUniqueInput
  }

  /**
   * ImagemCasa updateMany
   */
  export type ImagemCasaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ImagemCasas.
     */
    data: XOR<ImagemCasaUpdateManyMutationInput, ImagemCasaUncheckedUpdateManyInput>
    /**
     * Filter which ImagemCasas to update
     */
    where?: ImagemCasaWhereInput
    /**
     * Limit how many ImagemCasas to update.
     */
    limit?: number
  }

  /**
   * ImagemCasa updateManyAndReturn
   */
  export type ImagemCasaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImagemCasa
     */
    select?: ImagemCasaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ImagemCasa
     */
    omit?: ImagemCasaOmit<ExtArgs> | null
    /**
     * The data used to update ImagemCasas.
     */
    data: XOR<ImagemCasaUpdateManyMutationInput, ImagemCasaUncheckedUpdateManyInput>
    /**
     * Filter which ImagemCasas to update
     */
    where?: ImagemCasaWhereInput
    /**
     * Limit how many ImagemCasas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImagemCasaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ImagemCasa upsert
   */
  export type ImagemCasaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImagemCasa
     */
    select?: ImagemCasaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImagemCasa
     */
    omit?: ImagemCasaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImagemCasaInclude<ExtArgs> | null
    /**
     * The filter to search for the ImagemCasa to update in case it exists.
     */
    where: ImagemCasaWhereUniqueInput
    /**
     * In case the ImagemCasa found by the `where` argument doesn't exist, create a new ImagemCasa with this data.
     */
    create: XOR<ImagemCasaCreateInput, ImagemCasaUncheckedCreateInput>
    /**
     * In case the ImagemCasa was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ImagemCasaUpdateInput, ImagemCasaUncheckedUpdateInput>
  }

  /**
   * ImagemCasa delete
   */
  export type ImagemCasaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImagemCasa
     */
    select?: ImagemCasaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImagemCasa
     */
    omit?: ImagemCasaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImagemCasaInclude<ExtArgs> | null
    /**
     * Filter which ImagemCasa to delete.
     */
    where: ImagemCasaWhereUniqueInput
  }

  /**
   * ImagemCasa deleteMany
   */
  export type ImagemCasaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ImagemCasas to delete
     */
    where?: ImagemCasaWhereInput
    /**
     * Limit how many ImagemCasas to delete.
     */
    limit?: number
  }

  /**
   * ImagemCasa without action
   */
  export type ImagemCasaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImagemCasa
     */
    select?: ImagemCasaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImagemCasa
     */
    omit?: ImagemCasaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImagemCasaInclude<ExtArgs> | null
  }


  /**
   * Model BloqueioDisponibilidade
   */

  export type AggregateBloqueioDisponibilidade = {
    _count: BloqueioDisponibilidadeCountAggregateOutputType | null
    _avg: BloqueioDisponibilidadeAvgAggregateOutputType | null
    _sum: BloqueioDisponibilidadeSumAggregateOutputType | null
    _min: BloqueioDisponibilidadeMinAggregateOutputType | null
    _max: BloqueioDisponibilidadeMaxAggregateOutputType | null
  }

  export type BloqueioDisponibilidadeAvgAggregateOutputType = {
    id: number | null
    casaId: number | null
  }

  export type BloqueioDisponibilidadeSumAggregateOutputType = {
    id: number | null
    casaId: number | null
  }

  export type BloqueioDisponibilidadeMinAggregateOutputType = {
    id: number | null
    dataInicio: Date | null
    dataFim: Date | null
    motivo: string | null
    casaId: number | null
    createdAt: Date | null
  }

  export type BloqueioDisponibilidadeMaxAggregateOutputType = {
    id: number | null
    dataInicio: Date | null
    dataFim: Date | null
    motivo: string | null
    casaId: number | null
    createdAt: Date | null
  }

  export type BloqueioDisponibilidadeCountAggregateOutputType = {
    id: number
    dataInicio: number
    dataFim: number
    motivo: number
    casaId: number
    createdAt: number
    _all: number
  }


  export type BloqueioDisponibilidadeAvgAggregateInputType = {
    id?: true
    casaId?: true
  }

  export type BloqueioDisponibilidadeSumAggregateInputType = {
    id?: true
    casaId?: true
  }

  export type BloqueioDisponibilidadeMinAggregateInputType = {
    id?: true
    dataInicio?: true
    dataFim?: true
    motivo?: true
    casaId?: true
    createdAt?: true
  }

  export type BloqueioDisponibilidadeMaxAggregateInputType = {
    id?: true
    dataInicio?: true
    dataFim?: true
    motivo?: true
    casaId?: true
    createdAt?: true
  }

  export type BloqueioDisponibilidadeCountAggregateInputType = {
    id?: true
    dataInicio?: true
    dataFim?: true
    motivo?: true
    casaId?: true
    createdAt?: true
    _all?: true
  }

  export type BloqueioDisponibilidadeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BloqueioDisponibilidade to aggregate.
     */
    where?: BloqueioDisponibilidadeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BloqueioDisponibilidades to fetch.
     */
    orderBy?: BloqueioDisponibilidadeOrderByWithRelationInput | BloqueioDisponibilidadeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BloqueioDisponibilidadeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BloqueioDisponibilidades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BloqueioDisponibilidades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BloqueioDisponibilidades
    **/
    _count?: true | BloqueioDisponibilidadeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BloqueioDisponibilidadeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BloqueioDisponibilidadeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BloqueioDisponibilidadeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BloqueioDisponibilidadeMaxAggregateInputType
  }

  export type GetBloqueioDisponibilidadeAggregateType<T extends BloqueioDisponibilidadeAggregateArgs> = {
        [P in keyof T & keyof AggregateBloqueioDisponibilidade]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBloqueioDisponibilidade[P]>
      : GetScalarType<T[P], AggregateBloqueioDisponibilidade[P]>
  }




  export type BloqueioDisponibilidadeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BloqueioDisponibilidadeWhereInput
    orderBy?: BloqueioDisponibilidadeOrderByWithAggregationInput | BloqueioDisponibilidadeOrderByWithAggregationInput[]
    by: BloqueioDisponibilidadeScalarFieldEnum[] | BloqueioDisponibilidadeScalarFieldEnum
    having?: BloqueioDisponibilidadeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BloqueioDisponibilidadeCountAggregateInputType | true
    _avg?: BloqueioDisponibilidadeAvgAggregateInputType
    _sum?: BloqueioDisponibilidadeSumAggregateInputType
    _min?: BloqueioDisponibilidadeMinAggregateInputType
    _max?: BloqueioDisponibilidadeMaxAggregateInputType
  }

  export type BloqueioDisponibilidadeGroupByOutputType = {
    id: number
    dataInicio: Date
    dataFim: Date
    motivo: string | null
    casaId: number
    createdAt: Date
    _count: BloqueioDisponibilidadeCountAggregateOutputType | null
    _avg: BloqueioDisponibilidadeAvgAggregateOutputType | null
    _sum: BloqueioDisponibilidadeSumAggregateOutputType | null
    _min: BloqueioDisponibilidadeMinAggregateOutputType | null
    _max: BloqueioDisponibilidadeMaxAggregateOutputType | null
  }

  type GetBloqueioDisponibilidadeGroupByPayload<T extends BloqueioDisponibilidadeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BloqueioDisponibilidadeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BloqueioDisponibilidadeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BloqueioDisponibilidadeGroupByOutputType[P]>
            : GetScalarType<T[P], BloqueioDisponibilidadeGroupByOutputType[P]>
        }
      >
    >


  export type BloqueioDisponibilidadeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dataInicio?: boolean
    dataFim?: boolean
    motivo?: boolean
    casaId?: boolean
    createdAt?: boolean
    casa?: boolean | CasaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bloqueioDisponibilidade"]>

  export type BloqueioDisponibilidadeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dataInicio?: boolean
    dataFim?: boolean
    motivo?: boolean
    casaId?: boolean
    createdAt?: boolean
    casa?: boolean | CasaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bloqueioDisponibilidade"]>

  export type BloqueioDisponibilidadeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dataInicio?: boolean
    dataFim?: boolean
    motivo?: boolean
    casaId?: boolean
    createdAt?: boolean
    casa?: boolean | CasaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bloqueioDisponibilidade"]>

  export type BloqueioDisponibilidadeSelectScalar = {
    id?: boolean
    dataInicio?: boolean
    dataFim?: boolean
    motivo?: boolean
    casaId?: boolean
    createdAt?: boolean
  }

  export type BloqueioDisponibilidadeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "dataInicio" | "dataFim" | "motivo" | "casaId" | "createdAt", ExtArgs["result"]["bloqueioDisponibilidade"]>
  export type BloqueioDisponibilidadeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    casa?: boolean | CasaDefaultArgs<ExtArgs>
  }
  export type BloqueioDisponibilidadeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    casa?: boolean | CasaDefaultArgs<ExtArgs>
  }
  export type BloqueioDisponibilidadeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    casa?: boolean | CasaDefaultArgs<ExtArgs>
  }

  export type $BloqueioDisponibilidadePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BloqueioDisponibilidade"
    objects: {
      casa: Prisma.$CasaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      dataInicio: Date
      dataFim: Date
      motivo: string | null
      casaId: number
      createdAt: Date
    }, ExtArgs["result"]["bloqueioDisponibilidade"]>
    composites: {}
  }

  type BloqueioDisponibilidadeGetPayload<S extends boolean | null | undefined | BloqueioDisponibilidadeDefaultArgs> = $Result.GetResult<Prisma.$BloqueioDisponibilidadePayload, S>

  type BloqueioDisponibilidadeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BloqueioDisponibilidadeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BloqueioDisponibilidadeCountAggregateInputType | true
    }

  export interface BloqueioDisponibilidadeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BloqueioDisponibilidade'], meta: { name: 'BloqueioDisponibilidade' } }
    /**
     * Find zero or one BloqueioDisponibilidade that matches the filter.
     * @param {BloqueioDisponibilidadeFindUniqueArgs} args - Arguments to find a BloqueioDisponibilidade
     * @example
     * // Get one BloqueioDisponibilidade
     * const bloqueioDisponibilidade = await prisma.bloqueioDisponibilidade.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BloqueioDisponibilidadeFindUniqueArgs>(args: SelectSubset<T, BloqueioDisponibilidadeFindUniqueArgs<ExtArgs>>): Prisma__BloqueioDisponibilidadeClient<$Result.GetResult<Prisma.$BloqueioDisponibilidadePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BloqueioDisponibilidade that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BloqueioDisponibilidadeFindUniqueOrThrowArgs} args - Arguments to find a BloqueioDisponibilidade
     * @example
     * // Get one BloqueioDisponibilidade
     * const bloqueioDisponibilidade = await prisma.bloqueioDisponibilidade.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BloqueioDisponibilidadeFindUniqueOrThrowArgs>(args: SelectSubset<T, BloqueioDisponibilidadeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BloqueioDisponibilidadeClient<$Result.GetResult<Prisma.$BloqueioDisponibilidadePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BloqueioDisponibilidade that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BloqueioDisponibilidadeFindFirstArgs} args - Arguments to find a BloqueioDisponibilidade
     * @example
     * // Get one BloqueioDisponibilidade
     * const bloqueioDisponibilidade = await prisma.bloqueioDisponibilidade.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BloqueioDisponibilidadeFindFirstArgs>(args?: SelectSubset<T, BloqueioDisponibilidadeFindFirstArgs<ExtArgs>>): Prisma__BloqueioDisponibilidadeClient<$Result.GetResult<Prisma.$BloqueioDisponibilidadePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BloqueioDisponibilidade that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BloqueioDisponibilidadeFindFirstOrThrowArgs} args - Arguments to find a BloqueioDisponibilidade
     * @example
     * // Get one BloqueioDisponibilidade
     * const bloqueioDisponibilidade = await prisma.bloqueioDisponibilidade.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BloqueioDisponibilidadeFindFirstOrThrowArgs>(args?: SelectSubset<T, BloqueioDisponibilidadeFindFirstOrThrowArgs<ExtArgs>>): Prisma__BloqueioDisponibilidadeClient<$Result.GetResult<Prisma.$BloqueioDisponibilidadePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BloqueioDisponibilidades that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BloqueioDisponibilidadeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BloqueioDisponibilidades
     * const bloqueioDisponibilidades = await prisma.bloqueioDisponibilidade.findMany()
     * 
     * // Get first 10 BloqueioDisponibilidades
     * const bloqueioDisponibilidades = await prisma.bloqueioDisponibilidade.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bloqueioDisponibilidadeWithIdOnly = await prisma.bloqueioDisponibilidade.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BloqueioDisponibilidadeFindManyArgs>(args?: SelectSubset<T, BloqueioDisponibilidadeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BloqueioDisponibilidadePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BloqueioDisponibilidade.
     * @param {BloqueioDisponibilidadeCreateArgs} args - Arguments to create a BloqueioDisponibilidade.
     * @example
     * // Create one BloqueioDisponibilidade
     * const BloqueioDisponibilidade = await prisma.bloqueioDisponibilidade.create({
     *   data: {
     *     // ... data to create a BloqueioDisponibilidade
     *   }
     * })
     * 
     */
    create<T extends BloqueioDisponibilidadeCreateArgs>(args: SelectSubset<T, BloqueioDisponibilidadeCreateArgs<ExtArgs>>): Prisma__BloqueioDisponibilidadeClient<$Result.GetResult<Prisma.$BloqueioDisponibilidadePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BloqueioDisponibilidades.
     * @param {BloqueioDisponibilidadeCreateManyArgs} args - Arguments to create many BloqueioDisponibilidades.
     * @example
     * // Create many BloqueioDisponibilidades
     * const bloqueioDisponibilidade = await prisma.bloqueioDisponibilidade.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BloqueioDisponibilidadeCreateManyArgs>(args?: SelectSubset<T, BloqueioDisponibilidadeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BloqueioDisponibilidades and returns the data saved in the database.
     * @param {BloqueioDisponibilidadeCreateManyAndReturnArgs} args - Arguments to create many BloqueioDisponibilidades.
     * @example
     * // Create many BloqueioDisponibilidades
     * const bloqueioDisponibilidade = await prisma.bloqueioDisponibilidade.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BloqueioDisponibilidades and only return the `id`
     * const bloqueioDisponibilidadeWithIdOnly = await prisma.bloqueioDisponibilidade.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BloqueioDisponibilidadeCreateManyAndReturnArgs>(args?: SelectSubset<T, BloqueioDisponibilidadeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BloqueioDisponibilidadePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BloqueioDisponibilidade.
     * @param {BloqueioDisponibilidadeDeleteArgs} args - Arguments to delete one BloqueioDisponibilidade.
     * @example
     * // Delete one BloqueioDisponibilidade
     * const BloqueioDisponibilidade = await prisma.bloqueioDisponibilidade.delete({
     *   where: {
     *     // ... filter to delete one BloqueioDisponibilidade
     *   }
     * })
     * 
     */
    delete<T extends BloqueioDisponibilidadeDeleteArgs>(args: SelectSubset<T, BloqueioDisponibilidadeDeleteArgs<ExtArgs>>): Prisma__BloqueioDisponibilidadeClient<$Result.GetResult<Prisma.$BloqueioDisponibilidadePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BloqueioDisponibilidade.
     * @param {BloqueioDisponibilidadeUpdateArgs} args - Arguments to update one BloqueioDisponibilidade.
     * @example
     * // Update one BloqueioDisponibilidade
     * const bloqueioDisponibilidade = await prisma.bloqueioDisponibilidade.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BloqueioDisponibilidadeUpdateArgs>(args: SelectSubset<T, BloqueioDisponibilidadeUpdateArgs<ExtArgs>>): Prisma__BloqueioDisponibilidadeClient<$Result.GetResult<Prisma.$BloqueioDisponibilidadePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BloqueioDisponibilidades.
     * @param {BloqueioDisponibilidadeDeleteManyArgs} args - Arguments to filter BloqueioDisponibilidades to delete.
     * @example
     * // Delete a few BloqueioDisponibilidades
     * const { count } = await prisma.bloqueioDisponibilidade.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BloqueioDisponibilidadeDeleteManyArgs>(args?: SelectSubset<T, BloqueioDisponibilidadeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BloqueioDisponibilidades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BloqueioDisponibilidadeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BloqueioDisponibilidades
     * const bloqueioDisponibilidade = await prisma.bloqueioDisponibilidade.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BloqueioDisponibilidadeUpdateManyArgs>(args: SelectSubset<T, BloqueioDisponibilidadeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BloqueioDisponibilidades and returns the data updated in the database.
     * @param {BloqueioDisponibilidadeUpdateManyAndReturnArgs} args - Arguments to update many BloqueioDisponibilidades.
     * @example
     * // Update many BloqueioDisponibilidades
     * const bloqueioDisponibilidade = await prisma.bloqueioDisponibilidade.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BloqueioDisponibilidades and only return the `id`
     * const bloqueioDisponibilidadeWithIdOnly = await prisma.bloqueioDisponibilidade.updateManyAndReturn({
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
    updateManyAndReturn<T extends BloqueioDisponibilidadeUpdateManyAndReturnArgs>(args: SelectSubset<T, BloqueioDisponibilidadeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BloqueioDisponibilidadePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BloqueioDisponibilidade.
     * @param {BloqueioDisponibilidadeUpsertArgs} args - Arguments to update or create a BloqueioDisponibilidade.
     * @example
     * // Update or create a BloqueioDisponibilidade
     * const bloqueioDisponibilidade = await prisma.bloqueioDisponibilidade.upsert({
     *   create: {
     *     // ... data to create a BloqueioDisponibilidade
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BloqueioDisponibilidade we want to update
     *   }
     * })
     */
    upsert<T extends BloqueioDisponibilidadeUpsertArgs>(args: SelectSubset<T, BloqueioDisponibilidadeUpsertArgs<ExtArgs>>): Prisma__BloqueioDisponibilidadeClient<$Result.GetResult<Prisma.$BloqueioDisponibilidadePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BloqueioDisponibilidades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BloqueioDisponibilidadeCountArgs} args - Arguments to filter BloqueioDisponibilidades to count.
     * @example
     * // Count the number of BloqueioDisponibilidades
     * const count = await prisma.bloqueioDisponibilidade.count({
     *   where: {
     *     // ... the filter for the BloqueioDisponibilidades we want to count
     *   }
     * })
    **/
    count<T extends BloqueioDisponibilidadeCountArgs>(
      args?: Subset<T, BloqueioDisponibilidadeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BloqueioDisponibilidadeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BloqueioDisponibilidade.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BloqueioDisponibilidadeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BloqueioDisponibilidadeAggregateArgs>(args: Subset<T, BloqueioDisponibilidadeAggregateArgs>): Prisma.PrismaPromise<GetBloqueioDisponibilidadeAggregateType<T>>

    /**
     * Group by BloqueioDisponibilidade.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BloqueioDisponibilidadeGroupByArgs} args - Group by arguments.
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
      T extends BloqueioDisponibilidadeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BloqueioDisponibilidadeGroupByArgs['orderBy'] }
        : { orderBy?: BloqueioDisponibilidadeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BloqueioDisponibilidadeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBloqueioDisponibilidadeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BloqueioDisponibilidade model
   */
  readonly fields: BloqueioDisponibilidadeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BloqueioDisponibilidade.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BloqueioDisponibilidadeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    casa<T extends CasaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CasaDefaultArgs<ExtArgs>>): Prisma__CasaClient<$Result.GetResult<Prisma.$CasaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the BloqueioDisponibilidade model
   */
  interface BloqueioDisponibilidadeFieldRefs {
    readonly id: FieldRef<"BloqueioDisponibilidade", 'Int'>
    readonly dataInicio: FieldRef<"BloqueioDisponibilidade", 'DateTime'>
    readonly dataFim: FieldRef<"BloqueioDisponibilidade", 'DateTime'>
    readonly motivo: FieldRef<"BloqueioDisponibilidade", 'String'>
    readonly casaId: FieldRef<"BloqueioDisponibilidade", 'Int'>
    readonly createdAt: FieldRef<"BloqueioDisponibilidade", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BloqueioDisponibilidade findUnique
   */
  export type BloqueioDisponibilidadeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BloqueioDisponibilidade
     */
    select?: BloqueioDisponibilidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BloqueioDisponibilidade
     */
    omit?: BloqueioDisponibilidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BloqueioDisponibilidadeInclude<ExtArgs> | null
    /**
     * Filter, which BloqueioDisponibilidade to fetch.
     */
    where: BloqueioDisponibilidadeWhereUniqueInput
  }

  /**
   * BloqueioDisponibilidade findUniqueOrThrow
   */
  export type BloqueioDisponibilidadeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BloqueioDisponibilidade
     */
    select?: BloqueioDisponibilidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BloqueioDisponibilidade
     */
    omit?: BloqueioDisponibilidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BloqueioDisponibilidadeInclude<ExtArgs> | null
    /**
     * Filter, which BloqueioDisponibilidade to fetch.
     */
    where: BloqueioDisponibilidadeWhereUniqueInput
  }

  /**
   * BloqueioDisponibilidade findFirst
   */
  export type BloqueioDisponibilidadeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BloqueioDisponibilidade
     */
    select?: BloqueioDisponibilidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BloqueioDisponibilidade
     */
    omit?: BloqueioDisponibilidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BloqueioDisponibilidadeInclude<ExtArgs> | null
    /**
     * Filter, which BloqueioDisponibilidade to fetch.
     */
    where?: BloqueioDisponibilidadeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BloqueioDisponibilidades to fetch.
     */
    orderBy?: BloqueioDisponibilidadeOrderByWithRelationInput | BloqueioDisponibilidadeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BloqueioDisponibilidades.
     */
    cursor?: BloqueioDisponibilidadeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BloqueioDisponibilidades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BloqueioDisponibilidades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BloqueioDisponibilidades.
     */
    distinct?: BloqueioDisponibilidadeScalarFieldEnum | BloqueioDisponibilidadeScalarFieldEnum[]
  }

  /**
   * BloqueioDisponibilidade findFirstOrThrow
   */
  export type BloqueioDisponibilidadeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BloqueioDisponibilidade
     */
    select?: BloqueioDisponibilidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BloqueioDisponibilidade
     */
    omit?: BloqueioDisponibilidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BloqueioDisponibilidadeInclude<ExtArgs> | null
    /**
     * Filter, which BloqueioDisponibilidade to fetch.
     */
    where?: BloqueioDisponibilidadeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BloqueioDisponibilidades to fetch.
     */
    orderBy?: BloqueioDisponibilidadeOrderByWithRelationInput | BloqueioDisponibilidadeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BloqueioDisponibilidades.
     */
    cursor?: BloqueioDisponibilidadeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BloqueioDisponibilidades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BloqueioDisponibilidades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BloqueioDisponibilidades.
     */
    distinct?: BloqueioDisponibilidadeScalarFieldEnum | BloqueioDisponibilidadeScalarFieldEnum[]
  }

  /**
   * BloqueioDisponibilidade findMany
   */
  export type BloqueioDisponibilidadeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BloqueioDisponibilidade
     */
    select?: BloqueioDisponibilidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BloqueioDisponibilidade
     */
    omit?: BloqueioDisponibilidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BloqueioDisponibilidadeInclude<ExtArgs> | null
    /**
     * Filter, which BloqueioDisponibilidades to fetch.
     */
    where?: BloqueioDisponibilidadeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BloqueioDisponibilidades to fetch.
     */
    orderBy?: BloqueioDisponibilidadeOrderByWithRelationInput | BloqueioDisponibilidadeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BloqueioDisponibilidades.
     */
    cursor?: BloqueioDisponibilidadeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BloqueioDisponibilidades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BloqueioDisponibilidades.
     */
    skip?: number
    distinct?: BloqueioDisponibilidadeScalarFieldEnum | BloqueioDisponibilidadeScalarFieldEnum[]
  }

  /**
   * BloqueioDisponibilidade create
   */
  export type BloqueioDisponibilidadeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BloqueioDisponibilidade
     */
    select?: BloqueioDisponibilidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BloqueioDisponibilidade
     */
    omit?: BloqueioDisponibilidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BloqueioDisponibilidadeInclude<ExtArgs> | null
    /**
     * The data needed to create a BloqueioDisponibilidade.
     */
    data: XOR<BloqueioDisponibilidadeCreateInput, BloqueioDisponibilidadeUncheckedCreateInput>
  }

  /**
   * BloqueioDisponibilidade createMany
   */
  export type BloqueioDisponibilidadeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BloqueioDisponibilidades.
     */
    data: BloqueioDisponibilidadeCreateManyInput | BloqueioDisponibilidadeCreateManyInput[]
  }

  /**
   * BloqueioDisponibilidade createManyAndReturn
   */
  export type BloqueioDisponibilidadeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BloqueioDisponibilidade
     */
    select?: BloqueioDisponibilidadeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BloqueioDisponibilidade
     */
    omit?: BloqueioDisponibilidadeOmit<ExtArgs> | null
    /**
     * The data used to create many BloqueioDisponibilidades.
     */
    data: BloqueioDisponibilidadeCreateManyInput | BloqueioDisponibilidadeCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BloqueioDisponibilidadeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BloqueioDisponibilidade update
   */
  export type BloqueioDisponibilidadeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BloqueioDisponibilidade
     */
    select?: BloqueioDisponibilidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BloqueioDisponibilidade
     */
    omit?: BloqueioDisponibilidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BloqueioDisponibilidadeInclude<ExtArgs> | null
    /**
     * The data needed to update a BloqueioDisponibilidade.
     */
    data: XOR<BloqueioDisponibilidadeUpdateInput, BloqueioDisponibilidadeUncheckedUpdateInput>
    /**
     * Choose, which BloqueioDisponibilidade to update.
     */
    where: BloqueioDisponibilidadeWhereUniqueInput
  }

  /**
   * BloqueioDisponibilidade updateMany
   */
  export type BloqueioDisponibilidadeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BloqueioDisponibilidades.
     */
    data: XOR<BloqueioDisponibilidadeUpdateManyMutationInput, BloqueioDisponibilidadeUncheckedUpdateManyInput>
    /**
     * Filter which BloqueioDisponibilidades to update
     */
    where?: BloqueioDisponibilidadeWhereInput
    /**
     * Limit how many BloqueioDisponibilidades to update.
     */
    limit?: number
  }

  /**
   * BloqueioDisponibilidade updateManyAndReturn
   */
  export type BloqueioDisponibilidadeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BloqueioDisponibilidade
     */
    select?: BloqueioDisponibilidadeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BloqueioDisponibilidade
     */
    omit?: BloqueioDisponibilidadeOmit<ExtArgs> | null
    /**
     * The data used to update BloqueioDisponibilidades.
     */
    data: XOR<BloqueioDisponibilidadeUpdateManyMutationInput, BloqueioDisponibilidadeUncheckedUpdateManyInput>
    /**
     * Filter which BloqueioDisponibilidades to update
     */
    where?: BloqueioDisponibilidadeWhereInput
    /**
     * Limit how many BloqueioDisponibilidades to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BloqueioDisponibilidadeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BloqueioDisponibilidade upsert
   */
  export type BloqueioDisponibilidadeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BloqueioDisponibilidade
     */
    select?: BloqueioDisponibilidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BloqueioDisponibilidade
     */
    omit?: BloqueioDisponibilidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BloqueioDisponibilidadeInclude<ExtArgs> | null
    /**
     * The filter to search for the BloqueioDisponibilidade to update in case it exists.
     */
    where: BloqueioDisponibilidadeWhereUniqueInput
    /**
     * In case the BloqueioDisponibilidade found by the `where` argument doesn't exist, create a new BloqueioDisponibilidade with this data.
     */
    create: XOR<BloqueioDisponibilidadeCreateInput, BloqueioDisponibilidadeUncheckedCreateInput>
    /**
     * In case the BloqueioDisponibilidade was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BloqueioDisponibilidadeUpdateInput, BloqueioDisponibilidadeUncheckedUpdateInput>
  }

  /**
   * BloqueioDisponibilidade delete
   */
  export type BloqueioDisponibilidadeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BloqueioDisponibilidade
     */
    select?: BloqueioDisponibilidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BloqueioDisponibilidade
     */
    omit?: BloqueioDisponibilidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BloqueioDisponibilidadeInclude<ExtArgs> | null
    /**
     * Filter which BloqueioDisponibilidade to delete.
     */
    where: BloqueioDisponibilidadeWhereUniqueInput
  }

  /**
   * BloqueioDisponibilidade deleteMany
   */
  export type BloqueioDisponibilidadeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BloqueioDisponibilidades to delete
     */
    where?: BloqueioDisponibilidadeWhereInput
    /**
     * Limit how many BloqueioDisponibilidades to delete.
     */
    limit?: number
  }

  /**
   * BloqueioDisponibilidade without action
   */
  export type BloqueioDisponibilidadeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BloqueioDisponibilidade
     */
    select?: BloqueioDisponibilidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BloqueioDisponibilidade
     */
    omit?: BloqueioDisponibilidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BloqueioDisponibilidadeInclude<ExtArgs> | null
  }


  /**
   * Model Locador
   */

  export type AggregateLocador = {
    _count: LocadorCountAggregateOutputType | null
    _avg: LocadorAvgAggregateOutputType | null
    _sum: LocadorSumAggregateOutputType | null
    _min: LocadorMinAggregateOutputType | null
    _max: LocadorMaxAggregateOutputType | null
  }

  export type LocadorAvgAggregateOutputType = {
    id: number | null
  }

  export type LocadorSumAggregateOutputType = {
    id: number | null
  }

  export type LocadorMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    senha: string | null
    cpf: string | null
    endereco: string | null
    cep: string | null
    cidade: string | null
    estado: string | null
  }

  export type LocadorMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    senha: string | null
    cpf: string | null
    endereco: string | null
    cep: string | null
    cidade: string | null
    estado: string | null
  }

  export type LocadorCountAggregateOutputType = {
    id: number
    name: number
    email: number
    senha: number
    cpf: number
    endereco: number
    cep: number
    cidade: number
    estado: number
    _all: number
  }


  export type LocadorAvgAggregateInputType = {
    id?: true
  }

  export type LocadorSumAggregateInputType = {
    id?: true
  }

  export type LocadorMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    senha?: true
    cpf?: true
    endereco?: true
    cep?: true
    cidade?: true
    estado?: true
  }

  export type LocadorMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    senha?: true
    cpf?: true
    endereco?: true
    cep?: true
    cidade?: true
    estado?: true
  }

  export type LocadorCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    senha?: true
    cpf?: true
    endereco?: true
    cep?: true
    cidade?: true
    estado?: true
    _all?: true
  }

  export type LocadorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Locador to aggregate.
     */
    where?: LocadorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locadors to fetch.
     */
    orderBy?: LocadorOrderByWithRelationInput | LocadorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LocadorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locadors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locadors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Locadors
    **/
    _count?: true | LocadorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LocadorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LocadorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LocadorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LocadorMaxAggregateInputType
  }

  export type GetLocadorAggregateType<T extends LocadorAggregateArgs> = {
        [P in keyof T & keyof AggregateLocador]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLocador[P]>
      : GetScalarType<T[P], AggregateLocador[P]>
  }




  export type LocadorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LocadorWhereInput
    orderBy?: LocadorOrderByWithAggregationInput | LocadorOrderByWithAggregationInput[]
    by: LocadorScalarFieldEnum[] | LocadorScalarFieldEnum
    having?: LocadorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LocadorCountAggregateInputType | true
    _avg?: LocadorAvgAggregateInputType
    _sum?: LocadorSumAggregateInputType
    _min?: LocadorMinAggregateInputType
    _max?: LocadorMaxAggregateInputType
  }

  export type LocadorGroupByOutputType = {
    id: number
    name: string
    email: string
    senha: string
    cpf: string
    endereco: string
    cep: string | null
    cidade: string | null
    estado: string | null
    _count: LocadorCountAggregateOutputType | null
    _avg: LocadorAvgAggregateOutputType | null
    _sum: LocadorSumAggregateOutputType | null
    _min: LocadorMinAggregateOutputType | null
    _max: LocadorMaxAggregateOutputType | null
  }

  type GetLocadorGroupByPayload<T extends LocadorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LocadorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LocadorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LocadorGroupByOutputType[P]>
            : GetScalarType<T[P], LocadorGroupByOutputType[P]>
        }
      >
    >


  export type LocadorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    senha?: boolean
    cpf?: boolean
    endereco?: boolean
    cep?: boolean
    cidade?: boolean
    estado?: boolean
    casas?: boolean | Locador$casasArgs<ExtArgs>
    reservas?: boolean | Locador$reservasArgs<ExtArgs>
    conversas?: boolean | Locador$conversasArgs<ExtArgs>
    mensagens?: boolean | Locador$mensagensArgs<ExtArgs>
    _count?: boolean | LocadorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["locador"]>

  export type LocadorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    senha?: boolean
    cpf?: boolean
    endereco?: boolean
    cep?: boolean
    cidade?: boolean
    estado?: boolean
  }, ExtArgs["result"]["locador"]>

  export type LocadorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    senha?: boolean
    cpf?: boolean
    endereco?: boolean
    cep?: boolean
    cidade?: boolean
    estado?: boolean
  }, ExtArgs["result"]["locador"]>

  export type LocadorSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    senha?: boolean
    cpf?: boolean
    endereco?: boolean
    cep?: boolean
    cidade?: boolean
    estado?: boolean
  }

  export type LocadorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "senha" | "cpf" | "endereco" | "cep" | "cidade" | "estado", ExtArgs["result"]["locador"]>
  export type LocadorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    casas?: boolean | Locador$casasArgs<ExtArgs>
    reservas?: boolean | Locador$reservasArgs<ExtArgs>
    conversas?: boolean | Locador$conversasArgs<ExtArgs>
    mensagens?: boolean | Locador$mensagensArgs<ExtArgs>
    _count?: boolean | LocadorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LocadorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type LocadorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $LocadorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Locador"
    objects: {
      casas: Prisma.$CasaPayload<ExtArgs>[]
      reservas: Prisma.$ReservaPayload<ExtArgs>[]
      conversas: Prisma.$ConversaPayload<ExtArgs>[]
      mensagens: Prisma.$MensagemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      senha: string
      cpf: string
      endereco: string
      cep: string | null
      cidade: string | null
      estado: string | null
    }, ExtArgs["result"]["locador"]>
    composites: {}
  }

  type LocadorGetPayload<S extends boolean | null | undefined | LocadorDefaultArgs> = $Result.GetResult<Prisma.$LocadorPayload, S>

  type LocadorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LocadorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LocadorCountAggregateInputType | true
    }

  export interface LocadorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Locador'], meta: { name: 'Locador' } }
    /**
     * Find zero or one Locador that matches the filter.
     * @param {LocadorFindUniqueArgs} args - Arguments to find a Locador
     * @example
     * // Get one Locador
     * const locador = await prisma.locador.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LocadorFindUniqueArgs>(args: SelectSubset<T, LocadorFindUniqueArgs<ExtArgs>>): Prisma__LocadorClient<$Result.GetResult<Prisma.$LocadorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Locador that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LocadorFindUniqueOrThrowArgs} args - Arguments to find a Locador
     * @example
     * // Get one Locador
     * const locador = await prisma.locador.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LocadorFindUniqueOrThrowArgs>(args: SelectSubset<T, LocadorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LocadorClient<$Result.GetResult<Prisma.$LocadorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Locador that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocadorFindFirstArgs} args - Arguments to find a Locador
     * @example
     * // Get one Locador
     * const locador = await prisma.locador.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LocadorFindFirstArgs>(args?: SelectSubset<T, LocadorFindFirstArgs<ExtArgs>>): Prisma__LocadorClient<$Result.GetResult<Prisma.$LocadorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Locador that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocadorFindFirstOrThrowArgs} args - Arguments to find a Locador
     * @example
     * // Get one Locador
     * const locador = await prisma.locador.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LocadorFindFirstOrThrowArgs>(args?: SelectSubset<T, LocadorFindFirstOrThrowArgs<ExtArgs>>): Prisma__LocadorClient<$Result.GetResult<Prisma.$LocadorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Locadors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocadorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Locadors
     * const locadors = await prisma.locador.findMany()
     * 
     * // Get first 10 Locadors
     * const locadors = await prisma.locador.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const locadorWithIdOnly = await prisma.locador.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LocadorFindManyArgs>(args?: SelectSubset<T, LocadorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocadorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Locador.
     * @param {LocadorCreateArgs} args - Arguments to create a Locador.
     * @example
     * // Create one Locador
     * const Locador = await prisma.locador.create({
     *   data: {
     *     // ... data to create a Locador
     *   }
     * })
     * 
     */
    create<T extends LocadorCreateArgs>(args: SelectSubset<T, LocadorCreateArgs<ExtArgs>>): Prisma__LocadorClient<$Result.GetResult<Prisma.$LocadorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Locadors.
     * @param {LocadorCreateManyArgs} args - Arguments to create many Locadors.
     * @example
     * // Create many Locadors
     * const locador = await prisma.locador.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LocadorCreateManyArgs>(args?: SelectSubset<T, LocadorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Locadors and returns the data saved in the database.
     * @param {LocadorCreateManyAndReturnArgs} args - Arguments to create many Locadors.
     * @example
     * // Create many Locadors
     * const locador = await prisma.locador.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Locadors and only return the `id`
     * const locadorWithIdOnly = await prisma.locador.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LocadorCreateManyAndReturnArgs>(args?: SelectSubset<T, LocadorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocadorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Locador.
     * @param {LocadorDeleteArgs} args - Arguments to delete one Locador.
     * @example
     * // Delete one Locador
     * const Locador = await prisma.locador.delete({
     *   where: {
     *     // ... filter to delete one Locador
     *   }
     * })
     * 
     */
    delete<T extends LocadorDeleteArgs>(args: SelectSubset<T, LocadorDeleteArgs<ExtArgs>>): Prisma__LocadorClient<$Result.GetResult<Prisma.$LocadorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Locador.
     * @param {LocadorUpdateArgs} args - Arguments to update one Locador.
     * @example
     * // Update one Locador
     * const locador = await prisma.locador.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LocadorUpdateArgs>(args: SelectSubset<T, LocadorUpdateArgs<ExtArgs>>): Prisma__LocadorClient<$Result.GetResult<Prisma.$LocadorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Locadors.
     * @param {LocadorDeleteManyArgs} args - Arguments to filter Locadors to delete.
     * @example
     * // Delete a few Locadors
     * const { count } = await prisma.locador.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LocadorDeleteManyArgs>(args?: SelectSubset<T, LocadorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Locadors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocadorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Locadors
     * const locador = await prisma.locador.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LocadorUpdateManyArgs>(args: SelectSubset<T, LocadorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Locadors and returns the data updated in the database.
     * @param {LocadorUpdateManyAndReturnArgs} args - Arguments to update many Locadors.
     * @example
     * // Update many Locadors
     * const locador = await prisma.locador.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Locadors and only return the `id`
     * const locadorWithIdOnly = await prisma.locador.updateManyAndReturn({
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
    updateManyAndReturn<T extends LocadorUpdateManyAndReturnArgs>(args: SelectSubset<T, LocadorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocadorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Locador.
     * @param {LocadorUpsertArgs} args - Arguments to update or create a Locador.
     * @example
     * // Update or create a Locador
     * const locador = await prisma.locador.upsert({
     *   create: {
     *     // ... data to create a Locador
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Locador we want to update
     *   }
     * })
     */
    upsert<T extends LocadorUpsertArgs>(args: SelectSubset<T, LocadorUpsertArgs<ExtArgs>>): Prisma__LocadorClient<$Result.GetResult<Prisma.$LocadorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Locadors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocadorCountArgs} args - Arguments to filter Locadors to count.
     * @example
     * // Count the number of Locadors
     * const count = await prisma.locador.count({
     *   where: {
     *     // ... the filter for the Locadors we want to count
     *   }
     * })
    **/
    count<T extends LocadorCountArgs>(
      args?: Subset<T, LocadorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LocadorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Locador.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocadorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LocadorAggregateArgs>(args: Subset<T, LocadorAggregateArgs>): Prisma.PrismaPromise<GetLocadorAggregateType<T>>

    /**
     * Group by Locador.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocadorGroupByArgs} args - Group by arguments.
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
      T extends LocadorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LocadorGroupByArgs['orderBy'] }
        : { orderBy?: LocadorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LocadorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLocadorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Locador model
   */
  readonly fields: LocadorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Locador.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LocadorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    casas<T extends Locador$casasArgs<ExtArgs> = {}>(args?: Subset<T, Locador$casasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CasaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reservas<T extends Locador$reservasArgs<ExtArgs> = {}>(args?: Subset<T, Locador$reservasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    conversas<T extends Locador$conversasArgs<ExtArgs> = {}>(args?: Subset<T, Locador$conversasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConversaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    mensagens<T extends Locador$mensagensArgs<ExtArgs> = {}>(args?: Subset<T, Locador$mensagensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MensagemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Locador model
   */
  interface LocadorFieldRefs {
    readonly id: FieldRef<"Locador", 'Int'>
    readonly name: FieldRef<"Locador", 'String'>
    readonly email: FieldRef<"Locador", 'String'>
    readonly senha: FieldRef<"Locador", 'String'>
    readonly cpf: FieldRef<"Locador", 'String'>
    readonly endereco: FieldRef<"Locador", 'String'>
    readonly cep: FieldRef<"Locador", 'String'>
    readonly cidade: FieldRef<"Locador", 'String'>
    readonly estado: FieldRef<"Locador", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Locador findUnique
   */
  export type LocadorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Locador
     */
    select?: LocadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Locador
     */
    omit?: LocadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocadorInclude<ExtArgs> | null
    /**
     * Filter, which Locador to fetch.
     */
    where: LocadorWhereUniqueInput
  }

  /**
   * Locador findUniqueOrThrow
   */
  export type LocadorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Locador
     */
    select?: LocadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Locador
     */
    omit?: LocadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocadorInclude<ExtArgs> | null
    /**
     * Filter, which Locador to fetch.
     */
    where: LocadorWhereUniqueInput
  }

  /**
   * Locador findFirst
   */
  export type LocadorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Locador
     */
    select?: LocadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Locador
     */
    omit?: LocadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocadorInclude<ExtArgs> | null
    /**
     * Filter, which Locador to fetch.
     */
    where?: LocadorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locadors to fetch.
     */
    orderBy?: LocadorOrderByWithRelationInput | LocadorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Locadors.
     */
    cursor?: LocadorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locadors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locadors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Locadors.
     */
    distinct?: LocadorScalarFieldEnum | LocadorScalarFieldEnum[]
  }

  /**
   * Locador findFirstOrThrow
   */
  export type LocadorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Locador
     */
    select?: LocadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Locador
     */
    omit?: LocadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocadorInclude<ExtArgs> | null
    /**
     * Filter, which Locador to fetch.
     */
    where?: LocadorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locadors to fetch.
     */
    orderBy?: LocadorOrderByWithRelationInput | LocadorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Locadors.
     */
    cursor?: LocadorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locadors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locadors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Locadors.
     */
    distinct?: LocadorScalarFieldEnum | LocadorScalarFieldEnum[]
  }

  /**
   * Locador findMany
   */
  export type LocadorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Locador
     */
    select?: LocadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Locador
     */
    omit?: LocadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocadorInclude<ExtArgs> | null
    /**
     * Filter, which Locadors to fetch.
     */
    where?: LocadorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locadors to fetch.
     */
    orderBy?: LocadorOrderByWithRelationInput | LocadorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Locadors.
     */
    cursor?: LocadorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locadors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locadors.
     */
    skip?: number
    distinct?: LocadorScalarFieldEnum | LocadorScalarFieldEnum[]
  }

  /**
   * Locador create
   */
  export type LocadorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Locador
     */
    select?: LocadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Locador
     */
    omit?: LocadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocadorInclude<ExtArgs> | null
    /**
     * The data needed to create a Locador.
     */
    data: XOR<LocadorCreateInput, LocadorUncheckedCreateInput>
  }

  /**
   * Locador createMany
   */
  export type LocadorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Locadors.
     */
    data: LocadorCreateManyInput | LocadorCreateManyInput[]
  }

  /**
   * Locador createManyAndReturn
   */
  export type LocadorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Locador
     */
    select?: LocadorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Locador
     */
    omit?: LocadorOmit<ExtArgs> | null
    /**
     * The data used to create many Locadors.
     */
    data: LocadorCreateManyInput | LocadorCreateManyInput[]
  }

  /**
   * Locador update
   */
  export type LocadorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Locador
     */
    select?: LocadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Locador
     */
    omit?: LocadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocadorInclude<ExtArgs> | null
    /**
     * The data needed to update a Locador.
     */
    data: XOR<LocadorUpdateInput, LocadorUncheckedUpdateInput>
    /**
     * Choose, which Locador to update.
     */
    where: LocadorWhereUniqueInput
  }

  /**
   * Locador updateMany
   */
  export type LocadorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Locadors.
     */
    data: XOR<LocadorUpdateManyMutationInput, LocadorUncheckedUpdateManyInput>
    /**
     * Filter which Locadors to update
     */
    where?: LocadorWhereInput
    /**
     * Limit how many Locadors to update.
     */
    limit?: number
  }

  /**
   * Locador updateManyAndReturn
   */
  export type LocadorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Locador
     */
    select?: LocadorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Locador
     */
    omit?: LocadorOmit<ExtArgs> | null
    /**
     * The data used to update Locadors.
     */
    data: XOR<LocadorUpdateManyMutationInput, LocadorUncheckedUpdateManyInput>
    /**
     * Filter which Locadors to update
     */
    where?: LocadorWhereInput
    /**
     * Limit how many Locadors to update.
     */
    limit?: number
  }

  /**
   * Locador upsert
   */
  export type LocadorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Locador
     */
    select?: LocadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Locador
     */
    omit?: LocadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocadorInclude<ExtArgs> | null
    /**
     * The filter to search for the Locador to update in case it exists.
     */
    where: LocadorWhereUniqueInput
    /**
     * In case the Locador found by the `where` argument doesn't exist, create a new Locador with this data.
     */
    create: XOR<LocadorCreateInput, LocadorUncheckedCreateInput>
    /**
     * In case the Locador was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LocadorUpdateInput, LocadorUncheckedUpdateInput>
  }

  /**
   * Locador delete
   */
  export type LocadorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Locador
     */
    select?: LocadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Locador
     */
    omit?: LocadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocadorInclude<ExtArgs> | null
    /**
     * Filter which Locador to delete.
     */
    where: LocadorWhereUniqueInput
  }

  /**
   * Locador deleteMany
   */
  export type LocadorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Locadors to delete
     */
    where?: LocadorWhereInput
    /**
     * Limit how many Locadors to delete.
     */
    limit?: number
  }

  /**
   * Locador.casas
   */
  export type Locador$casasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Casa
     */
    select?: CasaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Casa
     */
    omit?: CasaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CasaInclude<ExtArgs> | null
    where?: CasaWhereInput
    orderBy?: CasaOrderByWithRelationInput | CasaOrderByWithRelationInput[]
    cursor?: CasaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CasaScalarFieldEnum | CasaScalarFieldEnum[]
  }

  /**
   * Locador.reservas
   */
  export type Locador$reservasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reserva
     */
    select?: ReservaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reserva
     */
    omit?: ReservaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservaInclude<ExtArgs> | null
    where?: ReservaWhereInput
    orderBy?: ReservaOrderByWithRelationInput | ReservaOrderByWithRelationInput[]
    cursor?: ReservaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReservaScalarFieldEnum | ReservaScalarFieldEnum[]
  }

  /**
   * Locador.conversas
   */
  export type Locador$conversasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversa
     */
    select?: ConversaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversa
     */
    omit?: ConversaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversaInclude<ExtArgs> | null
    where?: ConversaWhereInput
    orderBy?: ConversaOrderByWithRelationInput | ConversaOrderByWithRelationInput[]
    cursor?: ConversaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConversaScalarFieldEnum | ConversaScalarFieldEnum[]
  }

  /**
   * Locador.mensagens
   */
  export type Locador$mensagensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensagem
     */
    select?: MensagemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mensagem
     */
    omit?: MensagemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensagemInclude<ExtArgs> | null
    where?: MensagemWhereInput
    orderBy?: MensagemOrderByWithRelationInput | MensagemOrderByWithRelationInput[]
    cursor?: MensagemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MensagemScalarFieldEnum | MensagemScalarFieldEnum[]
  }

  /**
   * Locador without action
   */
  export type LocadorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Locador
     */
    select?: LocadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Locador
     */
    omit?: LocadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocadorInclude<ExtArgs> | null
  }


  /**
   * Model Hospede
   */

  export type AggregateHospede = {
    _count: HospedeCountAggregateOutputType | null
    _avg: HospedeAvgAggregateOutputType | null
    _sum: HospedeSumAggregateOutputType | null
    _min: HospedeMinAggregateOutputType | null
    _max: HospedeMaxAggregateOutputType | null
  }

  export type HospedeAvgAggregateOutputType = {
    id: number | null
  }

  export type HospedeSumAggregateOutputType = {
    id: number | null
  }

  export type HospedeMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    senha: string | null
    cpf: string | null
    cep: string | null
    cidade: string | null
    estado: string | null
    matricula: string | null
    universidade: string | null
  }

  export type HospedeMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    senha: string | null
    cpf: string | null
    cep: string | null
    cidade: string | null
    estado: string | null
    matricula: string | null
    universidade: string | null
  }

  export type HospedeCountAggregateOutputType = {
    id: number
    name: number
    email: number
    senha: number
    cpf: number
    cep: number
    cidade: number
    estado: number
    matricula: number
    universidade: number
    _all: number
  }


  export type HospedeAvgAggregateInputType = {
    id?: true
  }

  export type HospedeSumAggregateInputType = {
    id?: true
  }

  export type HospedeMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    senha?: true
    cpf?: true
    cep?: true
    cidade?: true
    estado?: true
    matricula?: true
    universidade?: true
  }

  export type HospedeMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    senha?: true
    cpf?: true
    cep?: true
    cidade?: true
    estado?: true
    matricula?: true
    universidade?: true
  }

  export type HospedeCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    senha?: true
    cpf?: true
    cep?: true
    cidade?: true
    estado?: true
    matricula?: true
    universidade?: true
    _all?: true
  }

  export type HospedeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Hospede to aggregate.
     */
    where?: HospedeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hospedes to fetch.
     */
    orderBy?: HospedeOrderByWithRelationInput | HospedeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HospedeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hospedes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hospedes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Hospedes
    **/
    _count?: true | HospedeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HospedeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HospedeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HospedeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HospedeMaxAggregateInputType
  }

  export type GetHospedeAggregateType<T extends HospedeAggregateArgs> = {
        [P in keyof T & keyof AggregateHospede]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHospede[P]>
      : GetScalarType<T[P], AggregateHospede[P]>
  }




  export type HospedeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HospedeWhereInput
    orderBy?: HospedeOrderByWithAggregationInput | HospedeOrderByWithAggregationInput[]
    by: HospedeScalarFieldEnum[] | HospedeScalarFieldEnum
    having?: HospedeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HospedeCountAggregateInputType | true
    _avg?: HospedeAvgAggregateInputType
    _sum?: HospedeSumAggregateInputType
    _min?: HospedeMinAggregateInputType
    _max?: HospedeMaxAggregateInputType
  }

  export type HospedeGroupByOutputType = {
    id: number
    name: string
    email: string
    senha: string
    cpf: string
    cep: string | null
    cidade: string | null
    estado: string | null
    matricula: string
    universidade: string | null
    _count: HospedeCountAggregateOutputType | null
    _avg: HospedeAvgAggregateOutputType | null
    _sum: HospedeSumAggregateOutputType | null
    _min: HospedeMinAggregateOutputType | null
    _max: HospedeMaxAggregateOutputType | null
  }

  type GetHospedeGroupByPayload<T extends HospedeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HospedeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HospedeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HospedeGroupByOutputType[P]>
            : GetScalarType<T[P], HospedeGroupByOutputType[P]>
        }
      >
    >


  export type HospedeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    senha?: boolean
    cpf?: boolean
    cep?: boolean
    cidade?: boolean
    estado?: boolean
    matricula?: boolean
    universidade?: boolean
    reservas?: boolean | Hospede$reservasArgs<ExtArgs>
    favoritos?: boolean | Hospede$favoritosArgs<ExtArgs>
    conversas?: boolean | Hospede$conversasArgs<ExtArgs>
    mensagens?: boolean | Hospede$mensagensArgs<ExtArgs>
    avaliacoesFeitas?: boolean | Hospede$avaliacoesFeitasArgs<ExtArgs>
    _count?: boolean | HospedeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["hospede"]>

  export type HospedeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    senha?: boolean
    cpf?: boolean
    cep?: boolean
    cidade?: boolean
    estado?: boolean
    matricula?: boolean
    universidade?: boolean
  }, ExtArgs["result"]["hospede"]>

  export type HospedeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    senha?: boolean
    cpf?: boolean
    cep?: boolean
    cidade?: boolean
    estado?: boolean
    matricula?: boolean
    universidade?: boolean
  }, ExtArgs["result"]["hospede"]>

  export type HospedeSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    senha?: boolean
    cpf?: boolean
    cep?: boolean
    cidade?: boolean
    estado?: boolean
    matricula?: boolean
    universidade?: boolean
  }

  export type HospedeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "senha" | "cpf" | "cep" | "cidade" | "estado" | "matricula" | "universidade", ExtArgs["result"]["hospede"]>
  export type HospedeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reservas?: boolean | Hospede$reservasArgs<ExtArgs>
    favoritos?: boolean | Hospede$favoritosArgs<ExtArgs>
    conversas?: boolean | Hospede$conversasArgs<ExtArgs>
    mensagens?: boolean | Hospede$mensagensArgs<ExtArgs>
    avaliacoesFeitas?: boolean | Hospede$avaliacoesFeitasArgs<ExtArgs>
    _count?: boolean | HospedeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type HospedeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type HospedeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $HospedePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Hospede"
    objects: {
      reservas: Prisma.$ReservaPayload<ExtArgs>[]
      favoritos: Prisma.$FavoritoPayload<ExtArgs>[]
      conversas: Prisma.$ConversaPayload<ExtArgs>[]
      mensagens: Prisma.$MensagemPayload<ExtArgs>[]
      avaliacoesFeitas: Prisma.$AvaliacaoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      senha: string
      cpf: string
      cep: string | null
      cidade: string | null
      estado: string | null
      matricula: string
      universidade: string | null
    }, ExtArgs["result"]["hospede"]>
    composites: {}
  }

  type HospedeGetPayload<S extends boolean | null | undefined | HospedeDefaultArgs> = $Result.GetResult<Prisma.$HospedePayload, S>

  type HospedeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HospedeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HospedeCountAggregateInputType | true
    }

  export interface HospedeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Hospede'], meta: { name: 'Hospede' } }
    /**
     * Find zero or one Hospede that matches the filter.
     * @param {HospedeFindUniqueArgs} args - Arguments to find a Hospede
     * @example
     * // Get one Hospede
     * const hospede = await prisma.hospede.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HospedeFindUniqueArgs>(args: SelectSubset<T, HospedeFindUniqueArgs<ExtArgs>>): Prisma__HospedeClient<$Result.GetResult<Prisma.$HospedePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Hospede that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HospedeFindUniqueOrThrowArgs} args - Arguments to find a Hospede
     * @example
     * // Get one Hospede
     * const hospede = await prisma.hospede.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HospedeFindUniqueOrThrowArgs>(args: SelectSubset<T, HospedeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HospedeClient<$Result.GetResult<Prisma.$HospedePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Hospede that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HospedeFindFirstArgs} args - Arguments to find a Hospede
     * @example
     * // Get one Hospede
     * const hospede = await prisma.hospede.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HospedeFindFirstArgs>(args?: SelectSubset<T, HospedeFindFirstArgs<ExtArgs>>): Prisma__HospedeClient<$Result.GetResult<Prisma.$HospedePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Hospede that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HospedeFindFirstOrThrowArgs} args - Arguments to find a Hospede
     * @example
     * // Get one Hospede
     * const hospede = await prisma.hospede.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HospedeFindFirstOrThrowArgs>(args?: SelectSubset<T, HospedeFindFirstOrThrowArgs<ExtArgs>>): Prisma__HospedeClient<$Result.GetResult<Prisma.$HospedePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Hospedes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HospedeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Hospedes
     * const hospedes = await prisma.hospede.findMany()
     * 
     * // Get first 10 Hospedes
     * const hospedes = await prisma.hospede.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const hospedeWithIdOnly = await prisma.hospede.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HospedeFindManyArgs>(args?: SelectSubset<T, HospedeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HospedePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Hospede.
     * @param {HospedeCreateArgs} args - Arguments to create a Hospede.
     * @example
     * // Create one Hospede
     * const Hospede = await prisma.hospede.create({
     *   data: {
     *     // ... data to create a Hospede
     *   }
     * })
     * 
     */
    create<T extends HospedeCreateArgs>(args: SelectSubset<T, HospedeCreateArgs<ExtArgs>>): Prisma__HospedeClient<$Result.GetResult<Prisma.$HospedePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Hospedes.
     * @param {HospedeCreateManyArgs} args - Arguments to create many Hospedes.
     * @example
     * // Create many Hospedes
     * const hospede = await prisma.hospede.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HospedeCreateManyArgs>(args?: SelectSubset<T, HospedeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Hospedes and returns the data saved in the database.
     * @param {HospedeCreateManyAndReturnArgs} args - Arguments to create many Hospedes.
     * @example
     * // Create many Hospedes
     * const hospede = await prisma.hospede.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Hospedes and only return the `id`
     * const hospedeWithIdOnly = await prisma.hospede.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HospedeCreateManyAndReturnArgs>(args?: SelectSubset<T, HospedeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HospedePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Hospede.
     * @param {HospedeDeleteArgs} args - Arguments to delete one Hospede.
     * @example
     * // Delete one Hospede
     * const Hospede = await prisma.hospede.delete({
     *   where: {
     *     // ... filter to delete one Hospede
     *   }
     * })
     * 
     */
    delete<T extends HospedeDeleteArgs>(args: SelectSubset<T, HospedeDeleteArgs<ExtArgs>>): Prisma__HospedeClient<$Result.GetResult<Prisma.$HospedePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Hospede.
     * @param {HospedeUpdateArgs} args - Arguments to update one Hospede.
     * @example
     * // Update one Hospede
     * const hospede = await prisma.hospede.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HospedeUpdateArgs>(args: SelectSubset<T, HospedeUpdateArgs<ExtArgs>>): Prisma__HospedeClient<$Result.GetResult<Prisma.$HospedePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Hospedes.
     * @param {HospedeDeleteManyArgs} args - Arguments to filter Hospedes to delete.
     * @example
     * // Delete a few Hospedes
     * const { count } = await prisma.hospede.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HospedeDeleteManyArgs>(args?: SelectSubset<T, HospedeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Hospedes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HospedeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Hospedes
     * const hospede = await prisma.hospede.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HospedeUpdateManyArgs>(args: SelectSubset<T, HospedeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Hospedes and returns the data updated in the database.
     * @param {HospedeUpdateManyAndReturnArgs} args - Arguments to update many Hospedes.
     * @example
     * // Update many Hospedes
     * const hospede = await prisma.hospede.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Hospedes and only return the `id`
     * const hospedeWithIdOnly = await prisma.hospede.updateManyAndReturn({
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
    updateManyAndReturn<T extends HospedeUpdateManyAndReturnArgs>(args: SelectSubset<T, HospedeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HospedePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Hospede.
     * @param {HospedeUpsertArgs} args - Arguments to update or create a Hospede.
     * @example
     * // Update or create a Hospede
     * const hospede = await prisma.hospede.upsert({
     *   create: {
     *     // ... data to create a Hospede
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Hospede we want to update
     *   }
     * })
     */
    upsert<T extends HospedeUpsertArgs>(args: SelectSubset<T, HospedeUpsertArgs<ExtArgs>>): Prisma__HospedeClient<$Result.GetResult<Prisma.$HospedePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Hospedes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HospedeCountArgs} args - Arguments to filter Hospedes to count.
     * @example
     * // Count the number of Hospedes
     * const count = await prisma.hospede.count({
     *   where: {
     *     // ... the filter for the Hospedes we want to count
     *   }
     * })
    **/
    count<T extends HospedeCountArgs>(
      args?: Subset<T, HospedeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HospedeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Hospede.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HospedeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HospedeAggregateArgs>(args: Subset<T, HospedeAggregateArgs>): Prisma.PrismaPromise<GetHospedeAggregateType<T>>

    /**
     * Group by Hospede.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HospedeGroupByArgs} args - Group by arguments.
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
      T extends HospedeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HospedeGroupByArgs['orderBy'] }
        : { orderBy?: HospedeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, HospedeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHospedeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Hospede model
   */
  readonly fields: HospedeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Hospede.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HospedeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    reservas<T extends Hospede$reservasArgs<ExtArgs> = {}>(args?: Subset<T, Hospede$reservasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    favoritos<T extends Hospede$favoritosArgs<ExtArgs> = {}>(args?: Subset<T, Hospede$favoritosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoritoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    conversas<T extends Hospede$conversasArgs<ExtArgs> = {}>(args?: Subset<T, Hospede$conversasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConversaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    mensagens<T extends Hospede$mensagensArgs<ExtArgs> = {}>(args?: Subset<T, Hospede$mensagensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MensagemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    avaliacoesFeitas<T extends Hospede$avaliacoesFeitasArgs<ExtArgs> = {}>(args?: Subset<T, Hospede$avaliacoesFeitasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Hospede model
   */
  interface HospedeFieldRefs {
    readonly id: FieldRef<"Hospede", 'Int'>
    readonly name: FieldRef<"Hospede", 'String'>
    readonly email: FieldRef<"Hospede", 'String'>
    readonly senha: FieldRef<"Hospede", 'String'>
    readonly cpf: FieldRef<"Hospede", 'String'>
    readonly cep: FieldRef<"Hospede", 'String'>
    readonly cidade: FieldRef<"Hospede", 'String'>
    readonly estado: FieldRef<"Hospede", 'String'>
    readonly matricula: FieldRef<"Hospede", 'String'>
    readonly universidade: FieldRef<"Hospede", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Hospede findUnique
   */
  export type HospedeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hospede
     */
    select?: HospedeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hospede
     */
    omit?: HospedeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HospedeInclude<ExtArgs> | null
    /**
     * Filter, which Hospede to fetch.
     */
    where: HospedeWhereUniqueInput
  }

  /**
   * Hospede findUniqueOrThrow
   */
  export type HospedeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hospede
     */
    select?: HospedeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hospede
     */
    omit?: HospedeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HospedeInclude<ExtArgs> | null
    /**
     * Filter, which Hospede to fetch.
     */
    where: HospedeWhereUniqueInput
  }

  /**
   * Hospede findFirst
   */
  export type HospedeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hospede
     */
    select?: HospedeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hospede
     */
    omit?: HospedeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HospedeInclude<ExtArgs> | null
    /**
     * Filter, which Hospede to fetch.
     */
    where?: HospedeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hospedes to fetch.
     */
    orderBy?: HospedeOrderByWithRelationInput | HospedeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Hospedes.
     */
    cursor?: HospedeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hospedes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hospedes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Hospedes.
     */
    distinct?: HospedeScalarFieldEnum | HospedeScalarFieldEnum[]
  }

  /**
   * Hospede findFirstOrThrow
   */
  export type HospedeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hospede
     */
    select?: HospedeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hospede
     */
    omit?: HospedeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HospedeInclude<ExtArgs> | null
    /**
     * Filter, which Hospede to fetch.
     */
    where?: HospedeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hospedes to fetch.
     */
    orderBy?: HospedeOrderByWithRelationInput | HospedeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Hospedes.
     */
    cursor?: HospedeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hospedes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hospedes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Hospedes.
     */
    distinct?: HospedeScalarFieldEnum | HospedeScalarFieldEnum[]
  }

  /**
   * Hospede findMany
   */
  export type HospedeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hospede
     */
    select?: HospedeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hospede
     */
    omit?: HospedeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HospedeInclude<ExtArgs> | null
    /**
     * Filter, which Hospedes to fetch.
     */
    where?: HospedeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hospedes to fetch.
     */
    orderBy?: HospedeOrderByWithRelationInput | HospedeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Hospedes.
     */
    cursor?: HospedeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hospedes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hospedes.
     */
    skip?: number
    distinct?: HospedeScalarFieldEnum | HospedeScalarFieldEnum[]
  }

  /**
   * Hospede create
   */
  export type HospedeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hospede
     */
    select?: HospedeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hospede
     */
    omit?: HospedeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HospedeInclude<ExtArgs> | null
    /**
     * The data needed to create a Hospede.
     */
    data: XOR<HospedeCreateInput, HospedeUncheckedCreateInput>
  }

  /**
   * Hospede createMany
   */
  export type HospedeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Hospedes.
     */
    data: HospedeCreateManyInput | HospedeCreateManyInput[]
  }

  /**
   * Hospede createManyAndReturn
   */
  export type HospedeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hospede
     */
    select?: HospedeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Hospede
     */
    omit?: HospedeOmit<ExtArgs> | null
    /**
     * The data used to create many Hospedes.
     */
    data: HospedeCreateManyInput | HospedeCreateManyInput[]
  }

  /**
   * Hospede update
   */
  export type HospedeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hospede
     */
    select?: HospedeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hospede
     */
    omit?: HospedeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HospedeInclude<ExtArgs> | null
    /**
     * The data needed to update a Hospede.
     */
    data: XOR<HospedeUpdateInput, HospedeUncheckedUpdateInput>
    /**
     * Choose, which Hospede to update.
     */
    where: HospedeWhereUniqueInput
  }

  /**
   * Hospede updateMany
   */
  export type HospedeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Hospedes.
     */
    data: XOR<HospedeUpdateManyMutationInput, HospedeUncheckedUpdateManyInput>
    /**
     * Filter which Hospedes to update
     */
    where?: HospedeWhereInput
    /**
     * Limit how many Hospedes to update.
     */
    limit?: number
  }

  /**
   * Hospede updateManyAndReturn
   */
  export type HospedeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hospede
     */
    select?: HospedeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Hospede
     */
    omit?: HospedeOmit<ExtArgs> | null
    /**
     * The data used to update Hospedes.
     */
    data: XOR<HospedeUpdateManyMutationInput, HospedeUncheckedUpdateManyInput>
    /**
     * Filter which Hospedes to update
     */
    where?: HospedeWhereInput
    /**
     * Limit how many Hospedes to update.
     */
    limit?: number
  }

  /**
   * Hospede upsert
   */
  export type HospedeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hospede
     */
    select?: HospedeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hospede
     */
    omit?: HospedeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HospedeInclude<ExtArgs> | null
    /**
     * The filter to search for the Hospede to update in case it exists.
     */
    where: HospedeWhereUniqueInput
    /**
     * In case the Hospede found by the `where` argument doesn't exist, create a new Hospede with this data.
     */
    create: XOR<HospedeCreateInput, HospedeUncheckedCreateInput>
    /**
     * In case the Hospede was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HospedeUpdateInput, HospedeUncheckedUpdateInput>
  }

  /**
   * Hospede delete
   */
  export type HospedeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hospede
     */
    select?: HospedeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hospede
     */
    omit?: HospedeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HospedeInclude<ExtArgs> | null
    /**
     * Filter which Hospede to delete.
     */
    where: HospedeWhereUniqueInput
  }

  /**
   * Hospede deleteMany
   */
  export type HospedeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Hospedes to delete
     */
    where?: HospedeWhereInput
    /**
     * Limit how many Hospedes to delete.
     */
    limit?: number
  }

  /**
   * Hospede.reservas
   */
  export type Hospede$reservasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reserva
     */
    select?: ReservaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reserva
     */
    omit?: ReservaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservaInclude<ExtArgs> | null
    where?: ReservaWhereInput
    orderBy?: ReservaOrderByWithRelationInput | ReservaOrderByWithRelationInput[]
    cursor?: ReservaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReservaScalarFieldEnum | ReservaScalarFieldEnum[]
  }

  /**
   * Hospede.favoritos
   */
  export type Hospede$favoritosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorito
     */
    select?: FavoritoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorito
     */
    omit?: FavoritoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoritoInclude<ExtArgs> | null
    where?: FavoritoWhereInput
    orderBy?: FavoritoOrderByWithRelationInput | FavoritoOrderByWithRelationInput[]
    cursor?: FavoritoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FavoritoScalarFieldEnum | FavoritoScalarFieldEnum[]
  }

  /**
   * Hospede.conversas
   */
  export type Hospede$conversasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversa
     */
    select?: ConversaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversa
     */
    omit?: ConversaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversaInclude<ExtArgs> | null
    where?: ConversaWhereInput
    orderBy?: ConversaOrderByWithRelationInput | ConversaOrderByWithRelationInput[]
    cursor?: ConversaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConversaScalarFieldEnum | ConversaScalarFieldEnum[]
  }

  /**
   * Hospede.mensagens
   */
  export type Hospede$mensagensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensagem
     */
    select?: MensagemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mensagem
     */
    omit?: MensagemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensagemInclude<ExtArgs> | null
    where?: MensagemWhereInput
    orderBy?: MensagemOrderByWithRelationInput | MensagemOrderByWithRelationInput[]
    cursor?: MensagemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MensagemScalarFieldEnum | MensagemScalarFieldEnum[]
  }

  /**
   * Hospede.avaliacoesFeitas
   */
  export type Hospede$avaliacoesFeitasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avaliacao
     */
    omit?: AvaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoInclude<ExtArgs> | null
    where?: AvaliacaoWhereInput
    orderBy?: AvaliacaoOrderByWithRelationInput | AvaliacaoOrderByWithRelationInput[]
    cursor?: AvaliacaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AvaliacaoScalarFieldEnum | AvaliacaoScalarFieldEnum[]
  }

  /**
   * Hospede without action
   */
  export type HospedeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hospede
     */
    select?: HospedeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hospede
     */
    omit?: HospedeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HospedeInclude<ExtArgs> | null
  }


  /**
   * Model Reserva
   */

  export type AggregateReserva = {
    _count: ReservaCountAggregateOutputType | null
    _avg: ReservaAvgAggregateOutputType | null
    _sum: ReservaSumAggregateOutputType | null
    _min: ReservaMinAggregateOutputType | null
    _max: ReservaMaxAggregateOutputType | null
  }

  export type ReservaAvgAggregateOutputType = {
    id: number | null
    numeroHospedes: number | null
    valorTotal: number | null
    valorTotalCalculado: number | null
    hospedeId: number | null
    casaId: number | null
    locadorId: number | null
  }

  export type ReservaSumAggregateOutputType = {
    id: number | null
    numeroHospedes: number | null
    valorTotal: number | null
    valorTotalCalculado: number | null
    hospedeId: number | null
    casaId: number | null
    locadorId: number | null
  }

  export type ReservaMinAggregateOutputType = {
    id: number | null
    dataCheckIn: Date | null
    dataCheckOut: Date | null
    status: string | null
    numeroHospedes: number | null
    valorTotal: number | null
    observacoes: string | null
    valorTotalCalculado: number | null
    statusPagamento: string | null
    hospedeId: number | null
    casaId: number | null
    locadorId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReservaMaxAggregateOutputType = {
    id: number | null
    dataCheckIn: Date | null
    dataCheckOut: Date | null
    status: string | null
    numeroHospedes: number | null
    valorTotal: number | null
    observacoes: string | null
    valorTotalCalculado: number | null
    statusPagamento: string | null
    hospedeId: number | null
    casaId: number | null
    locadorId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReservaCountAggregateOutputType = {
    id: number
    dataCheckIn: number
    dataCheckOut: number
    status: number
    numeroHospedes: number
    valorTotal: number
    observacoes: number
    valorTotalCalculado: number
    statusPagamento: number
    hospedeId: number
    casaId: number
    locadorId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ReservaAvgAggregateInputType = {
    id?: true
    numeroHospedes?: true
    valorTotal?: true
    valorTotalCalculado?: true
    hospedeId?: true
    casaId?: true
    locadorId?: true
  }

  export type ReservaSumAggregateInputType = {
    id?: true
    numeroHospedes?: true
    valorTotal?: true
    valorTotalCalculado?: true
    hospedeId?: true
    casaId?: true
    locadorId?: true
  }

  export type ReservaMinAggregateInputType = {
    id?: true
    dataCheckIn?: true
    dataCheckOut?: true
    status?: true
    numeroHospedes?: true
    valorTotal?: true
    observacoes?: true
    valorTotalCalculado?: true
    statusPagamento?: true
    hospedeId?: true
    casaId?: true
    locadorId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReservaMaxAggregateInputType = {
    id?: true
    dataCheckIn?: true
    dataCheckOut?: true
    status?: true
    numeroHospedes?: true
    valorTotal?: true
    observacoes?: true
    valorTotalCalculado?: true
    statusPagamento?: true
    hospedeId?: true
    casaId?: true
    locadorId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReservaCountAggregateInputType = {
    id?: true
    dataCheckIn?: true
    dataCheckOut?: true
    status?: true
    numeroHospedes?: true
    valorTotal?: true
    observacoes?: true
    valorTotalCalculado?: true
    statusPagamento?: true
    hospedeId?: true
    casaId?: true
    locadorId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ReservaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reserva to aggregate.
     */
    where?: ReservaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reservas to fetch.
     */
    orderBy?: ReservaOrderByWithRelationInput | ReservaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReservaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reservas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reservas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reservas
    **/
    _count?: true | ReservaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReservaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReservaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReservaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReservaMaxAggregateInputType
  }

  export type GetReservaAggregateType<T extends ReservaAggregateArgs> = {
        [P in keyof T & keyof AggregateReserva]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReserva[P]>
      : GetScalarType<T[P], AggregateReserva[P]>
  }




  export type ReservaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReservaWhereInput
    orderBy?: ReservaOrderByWithAggregationInput | ReservaOrderByWithAggregationInput[]
    by: ReservaScalarFieldEnum[] | ReservaScalarFieldEnum
    having?: ReservaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReservaCountAggregateInputType | true
    _avg?: ReservaAvgAggregateInputType
    _sum?: ReservaSumAggregateInputType
    _min?: ReservaMinAggregateInputType
    _max?: ReservaMaxAggregateInputType
  }

  export type ReservaGroupByOutputType = {
    id: number
    dataCheckIn: Date
    dataCheckOut: Date
    status: string
    numeroHospedes: number | null
    valorTotal: number | null
    observacoes: string | null
    valorTotalCalculado: number | null
    statusPagamento: string | null
    hospedeId: number
    casaId: number
    locadorId: number
    createdAt: Date
    updatedAt: Date
    _count: ReservaCountAggregateOutputType | null
    _avg: ReservaAvgAggregateOutputType | null
    _sum: ReservaSumAggregateOutputType | null
    _min: ReservaMinAggregateOutputType | null
    _max: ReservaMaxAggregateOutputType | null
  }

  type GetReservaGroupByPayload<T extends ReservaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReservaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReservaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReservaGroupByOutputType[P]>
            : GetScalarType<T[P], ReservaGroupByOutputType[P]>
        }
      >
    >


  export type ReservaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dataCheckIn?: boolean
    dataCheckOut?: boolean
    status?: boolean
    numeroHospedes?: boolean
    valorTotal?: boolean
    observacoes?: boolean
    valorTotalCalculado?: boolean
    statusPagamento?: boolean
    hospedeId?: boolean
    casaId?: boolean
    locadorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    hospede?: boolean | HospedeDefaultArgs<ExtArgs>
    casa?: boolean | CasaDefaultArgs<ExtArgs>
    locador?: boolean | LocadorDefaultArgs<ExtArgs>
    avaliacao?: boolean | Reserva$avaliacaoArgs<ExtArgs>
  }, ExtArgs["result"]["reserva"]>

  export type ReservaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dataCheckIn?: boolean
    dataCheckOut?: boolean
    status?: boolean
    numeroHospedes?: boolean
    valorTotal?: boolean
    observacoes?: boolean
    valorTotalCalculado?: boolean
    statusPagamento?: boolean
    hospedeId?: boolean
    casaId?: boolean
    locadorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    hospede?: boolean | HospedeDefaultArgs<ExtArgs>
    casa?: boolean | CasaDefaultArgs<ExtArgs>
    locador?: boolean | LocadorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reserva"]>

  export type ReservaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dataCheckIn?: boolean
    dataCheckOut?: boolean
    status?: boolean
    numeroHospedes?: boolean
    valorTotal?: boolean
    observacoes?: boolean
    valorTotalCalculado?: boolean
    statusPagamento?: boolean
    hospedeId?: boolean
    casaId?: boolean
    locadorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    hospede?: boolean | HospedeDefaultArgs<ExtArgs>
    casa?: boolean | CasaDefaultArgs<ExtArgs>
    locador?: boolean | LocadorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reserva"]>

  export type ReservaSelectScalar = {
    id?: boolean
    dataCheckIn?: boolean
    dataCheckOut?: boolean
    status?: boolean
    numeroHospedes?: boolean
    valorTotal?: boolean
    observacoes?: boolean
    valorTotalCalculado?: boolean
    statusPagamento?: boolean
    hospedeId?: boolean
    casaId?: boolean
    locadorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ReservaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "dataCheckIn" | "dataCheckOut" | "status" | "numeroHospedes" | "valorTotal" | "observacoes" | "valorTotalCalculado" | "statusPagamento" | "hospedeId" | "casaId" | "locadorId" | "createdAt" | "updatedAt", ExtArgs["result"]["reserva"]>
  export type ReservaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hospede?: boolean | HospedeDefaultArgs<ExtArgs>
    casa?: boolean | CasaDefaultArgs<ExtArgs>
    locador?: boolean | LocadorDefaultArgs<ExtArgs>
    avaliacao?: boolean | Reserva$avaliacaoArgs<ExtArgs>
  }
  export type ReservaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hospede?: boolean | HospedeDefaultArgs<ExtArgs>
    casa?: boolean | CasaDefaultArgs<ExtArgs>
    locador?: boolean | LocadorDefaultArgs<ExtArgs>
  }
  export type ReservaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hospede?: boolean | HospedeDefaultArgs<ExtArgs>
    casa?: boolean | CasaDefaultArgs<ExtArgs>
    locador?: boolean | LocadorDefaultArgs<ExtArgs>
  }

  export type $ReservaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Reserva"
    objects: {
      hospede: Prisma.$HospedePayload<ExtArgs>
      casa: Prisma.$CasaPayload<ExtArgs>
      locador: Prisma.$LocadorPayload<ExtArgs>
      avaliacao: Prisma.$AvaliacaoPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      dataCheckIn: Date
      dataCheckOut: Date
      status: string
      numeroHospedes: number | null
      valorTotal: number | null
      observacoes: string | null
      valorTotalCalculado: number | null
      statusPagamento: string | null
      hospedeId: number
      casaId: number
      locadorId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["reserva"]>
    composites: {}
  }

  type ReservaGetPayload<S extends boolean | null | undefined | ReservaDefaultArgs> = $Result.GetResult<Prisma.$ReservaPayload, S>

  type ReservaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReservaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReservaCountAggregateInputType | true
    }

  export interface ReservaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Reserva'], meta: { name: 'Reserva' } }
    /**
     * Find zero or one Reserva that matches the filter.
     * @param {ReservaFindUniqueArgs} args - Arguments to find a Reserva
     * @example
     * // Get one Reserva
     * const reserva = await prisma.reserva.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReservaFindUniqueArgs>(args: SelectSubset<T, ReservaFindUniqueArgs<ExtArgs>>): Prisma__ReservaClient<$Result.GetResult<Prisma.$ReservaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Reserva that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReservaFindUniqueOrThrowArgs} args - Arguments to find a Reserva
     * @example
     * // Get one Reserva
     * const reserva = await prisma.reserva.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReservaFindUniqueOrThrowArgs>(args: SelectSubset<T, ReservaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReservaClient<$Result.GetResult<Prisma.$ReservaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reserva that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservaFindFirstArgs} args - Arguments to find a Reserva
     * @example
     * // Get one Reserva
     * const reserva = await prisma.reserva.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReservaFindFirstArgs>(args?: SelectSubset<T, ReservaFindFirstArgs<ExtArgs>>): Prisma__ReservaClient<$Result.GetResult<Prisma.$ReservaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reserva that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservaFindFirstOrThrowArgs} args - Arguments to find a Reserva
     * @example
     * // Get one Reserva
     * const reserva = await prisma.reserva.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReservaFindFirstOrThrowArgs>(args?: SelectSubset<T, ReservaFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReservaClient<$Result.GetResult<Prisma.$ReservaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reservas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reservas
     * const reservas = await prisma.reserva.findMany()
     * 
     * // Get first 10 Reservas
     * const reservas = await prisma.reserva.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reservaWithIdOnly = await prisma.reserva.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReservaFindManyArgs>(args?: SelectSubset<T, ReservaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Reserva.
     * @param {ReservaCreateArgs} args - Arguments to create a Reserva.
     * @example
     * // Create one Reserva
     * const Reserva = await prisma.reserva.create({
     *   data: {
     *     // ... data to create a Reserva
     *   }
     * })
     * 
     */
    create<T extends ReservaCreateArgs>(args: SelectSubset<T, ReservaCreateArgs<ExtArgs>>): Prisma__ReservaClient<$Result.GetResult<Prisma.$ReservaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reservas.
     * @param {ReservaCreateManyArgs} args - Arguments to create many Reservas.
     * @example
     * // Create many Reservas
     * const reserva = await prisma.reserva.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReservaCreateManyArgs>(args?: SelectSubset<T, ReservaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reservas and returns the data saved in the database.
     * @param {ReservaCreateManyAndReturnArgs} args - Arguments to create many Reservas.
     * @example
     * // Create many Reservas
     * const reserva = await prisma.reserva.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reservas and only return the `id`
     * const reservaWithIdOnly = await prisma.reserva.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReservaCreateManyAndReturnArgs>(args?: SelectSubset<T, ReservaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Reserva.
     * @param {ReservaDeleteArgs} args - Arguments to delete one Reserva.
     * @example
     * // Delete one Reserva
     * const Reserva = await prisma.reserva.delete({
     *   where: {
     *     // ... filter to delete one Reserva
     *   }
     * })
     * 
     */
    delete<T extends ReservaDeleteArgs>(args: SelectSubset<T, ReservaDeleteArgs<ExtArgs>>): Prisma__ReservaClient<$Result.GetResult<Prisma.$ReservaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Reserva.
     * @param {ReservaUpdateArgs} args - Arguments to update one Reserva.
     * @example
     * // Update one Reserva
     * const reserva = await prisma.reserva.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReservaUpdateArgs>(args: SelectSubset<T, ReservaUpdateArgs<ExtArgs>>): Prisma__ReservaClient<$Result.GetResult<Prisma.$ReservaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reservas.
     * @param {ReservaDeleteManyArgs} args - Arguments to filter Reservas to delete.
     * @example
     * // Delete a few Reservas
     * const { count } = await prisma.reserva.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReservaDeleteManyArgs>(args?: SelectSubset<T, ReservaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reservas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reservas
     * const reserva = await prisma.reserva.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReservaUpdateManyArgs>(args: SelectSubset<T, ReservaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reservas and returns the data updated in the database.
     * @param {ReservaUpdateManyAndReturnArgs} args - Arguments to update many Reservas.
     * @example
     * // Update many Reservas
     * const reserva = await prisma.reserva.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reservas and only return the `id`
     * const reservaWithIdOnly = await prisma.reserva.updateManyAndReturn({
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
    updateManyAndReturn<T extends ReservaUpdateManyAndReturnArgs>(args: SelectSubset<T, ReservaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Reserva.
     * @param {ReservaUpsertArgs} args - Arguments to update or create a Reserva.
     * @example
     * // Update or create a Reserva
     * const reserva = await prisma.reserva.upsert({
     *   create: {
     *     // ... data to create a Reserva
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reserva we want to update
     *   }
     * })
     */
    upsert<T extends ReservaUpsertArgs>(args: SelectSubset<T, ReservaUpsertArgs<ExtArgs>>): Prisma__ReservaClient<$Result.GetResult<Prisma.$ReservaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reservas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservaCountArgs} args - Arguments to filter Reservas to count.
     * @example
     * // Count the number of Reservas
     * const count = await prisma.reserva.count({
     *   where: {
     *     // ... the filter for the Reservas we want to count
     *   }
     * })
    **/
    count<T extends ReservaCountArgs>(
      args?: Subset<T, ReservaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReservaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Reserva.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReservaAggregateArgs>(args: Subset<T, ReservaAggregateArgs>): Prisma.PrismaPromise<GetReservaAggregateType<T>>

    /**
     * Group by Reserva.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservaGroupByArgs} args - Group by arguments.
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
      T extends ReservaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReservaGroupByArgs['orderBy'] }
        : { orderBy?: ReservaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReservaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReservaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Reserva model
   */
  readonly fields: ReservaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Reserva.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReservaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    hospede<T extends HospedeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, HospedeDefaultArgs<ExtArgs>>): Prisma__HospedeClient<$Result.GetResult<Prisma.$HospedePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    casa<T extends CasaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CasaDefaultArgs<ExtArgs>>): Prisma__CasaClient<$Result.GetResult<Prisma.$CasaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    locador<T extends LocadorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LocadorDefaultArgs<ExtArgs>>): Prisma__LocadorClient<$Result.GetResult<Prisma.$LocadorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    avaliacao<T extends Reserva$avaliacaoArgs<ExtArgs> = {}>(args?: Subset<T, Reserva$avaliacaoArgs<ExtArgs>>): Prisma__AvaliacaoClient<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Reserva model
   */
  interface ReservaFieldRefs {
    readonly id: FieldRef<"Reserva", 'Int'>
    readonly dataCheckIn: FieldRef<"Reserva", 'DateTime'>
    readonly dataCheckOut: FieldRef<"Reserva", 'DateTime'>
    readonly status: FieldRef<"Reserva", 'String'>
    readonly numeroHospedes: FieldRef<"Reserva", 'Int'>
    readonly valorTotal: FieldRef<"Reserva", 'Float'>
    readonly observacoes: FieldRef<"Reserva", 'String'>
    readonly valorTotalCalculado: FieldRef<"Reserva", 'Float'>
    readonly statusPagamento: FieldRef<"Reserva", 'String'>
    readonly hospedeId: FieldRef<"Reserva", 'Int'>
    readonly casaId: FieldRef<"Reserva", 'Int'>
    readonly locadorId: FieldRef<"Reserva", 'Int'>
    readonly createdAt: FieldRef<"Reserva", 'DateTime'>
    readonly updatedAt: FieldRef<"Reserva", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Reserva findUnique
   */
  export type ReservaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reserva
     */
    select?: ReservaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reserva
     */
    omit?: ReservaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservaInclude<ExtArgs> | null
    /**
     * Filter, which Reserva to fetch.
     */
    where: ReservaWhereUniqueInput
  }

  /**
   * Reserva findUniqueOrThrow
   */
  export type ReservaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reserva
     */
    select?: ReservaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reserva
     */
    omit?: ReservaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservaInclude<ExtArgs> | null
    /**
     * Filter, which Reserva to fetch.
     */
    where: ReservaWhereUniqueInput
  }

  /**
   * Reserva findFirst
   */
  export type ReservaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reserva
     */
    select?: ReservaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reserva
     */
    omit?: ReservaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservaInclude<ExtArgs> | null
    /**
     * Filter, which Reserva to fetch.
     */
    where?: ReservaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reservas to fetch.
     */
    orderBy?: ReservaOrderByWithRelationInput | ReservaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reservas.
     */
    cursor?: ReservaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reservas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reservas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reservas.
     */
    distinct?: ReservaScalarFieldEnum | ReservaScalarFieldEnum[]
  }

  /**
   * Reserva findFirstOrThrow
   */
  export type ReservaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reserva
     */
    select?: ReservaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reserva
     */
    omit?: ReservaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservaInclude<ExtArgs> | null
    /**
     * Filter, which Reserva to fetch.
     */
    where?: ReservaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reservas to fetch.
     */
    orderBy?: ReservaOrderByWithRelationInput | ReservaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reservas.
     */
    cursor?: ReservaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reservas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reservas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reservas.
     */
    distinct?: ReservaScalarFieldEnum | ReservaScalarFieldEnum[]
  }

  /**
   * Reserva findMany
   */
  export type ReservaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reserva
     */
    select?: ReservaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reserva
     */
    omit?: ReservaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservaInclude<ExtArgs> | null
    /**
     * Filter, which Reservas to fetch.
     */
    where?: ReservaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reservas to fetch.
     */
    orderBy?: ReservaOrderByWithRelationInput | ReservaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reservas.
     */
    cursor?: ReservaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reservas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reservas.
     */
    skip?: number
    distinct?: ReservaScalarFieldEnum | ReservaScalarFieldEnum[]
  }

  /**
   * Reserva create
   */
  export type ReservaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reserva
     */
    select?: ReservaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reserva
     */
    omit?: ReservaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservaInclude<ExtArgs> | null
    /**
     * The data needed to create a Reserva.
     */
    data: XOR<ReservaCreateInput, ReservaUncheckedCreateInput>
  }

  /**
   * Reserva createMany
   */
  export type ReservaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reservas.
     */
    data: ReservaCreateManyInput | ReservaCreateManyInput[]
  }

  /**
   * Reserva createManyAndReturn
   */
  export type ReservaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reserva
     */
    select?: ReservaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Reserva
     */
    omit?: ReservaOmit<ExtArgs> | null
    /**
     * The data used to create many Reservas.
     */
    data: ReservaCreateManyInput | ReservaCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Reserva update
   */
  export type ReservaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reserva
     */
    select?: ReservaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reserva
     */
    omit?: ReservaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservaInclude<ExtArgs> | null
    /**
     * The data needed to update a Reserva.
     */
    data: XOR<ReservaUpdateInput, ReservaUncheckedUpdateInput>
    /**
     * Choose, which Reserva to update.
     */
    where: ReservaWhereUniqueInput
  }

  /**
   * Reserva updateMany
   */
  export type ReservaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reservas.
     */
    data: XOR<ReservaUpdateManyMutationInput, ReservaUncheckedUpdateManyInput>
    /**
     * Filter which Reservas to update
     */
    where?: ReservaWhereInput
    /**
     * Limit how many Reservas to update.
     */
    limit?: number
  }

  /**
   * Reserva updateManyAndReturn
   */
  export type ReservaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reserva
     */
    select?: ReservaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Reserva
     */
    omit?: ReservaOmit<ExtArgs> | null
    /**
     * The data used to update Reservas.
     */
    data: XOR<ReservaUpdateManyMutationInput, ReservaUncheckedUpdateManyInput>
    /**
     * Filter which Reservas to update
     */
    where?: ReservaWhereInput
    /**
     * Limit how many Reservas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Reserva upsert
   */
  export type ReservaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reserva
     */
    select?: ReservaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reserva
     */
    omit?: ReservaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservaInclude<ExtArgs> | null
    /**
     * The filter to search for the Reserva to update in case it exists.
     */
    where: ReservaWhereUniqueInput
    /**
     * In case the Reserva found by the `where` argument doesn't exist, create a new Reserva with this data.
     */
    create: XOR<ReservaCreateInput, ReservaUncheckedCreateInput>
    /**
     * In case the Reserva was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReservaUpdateInput, ReservaUncheckedUpdateInput>
  }

  /**
   * Reserva delete
   */
  export type ReservaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reserva
     */
    select?: ReservaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reserva
     */
    omit?: ReservaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservaInclude<ExtArgs> | null
    /**
     * Filter which Reserva to delete.
     */
    where: ReservaWhereUniqueInput
  }

  /**
   * Reserva deleteMany
   */
  export type ReservaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reservas to delete
     */
    where?: ReservaWhereInput
    /**
     * Limit how many Reservas to delete.
     */
    limit?: number
  }

  /**
   * Reserva.avaliacao
   */
  export type Reserva$avaliacaoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avaliacao
     */
    omit?: AvaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoInclude<ExtArgs> | null
    where?: AvaliacaoWhereInput
  }

  /**
   * Reserva without action
   */
  export type ReservaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reserva
     */
    select?: ReservaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reserva
     */
    omit?: ReservaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservaInclude<ExtArgs> | null
  }


  /**
   * Model Favorito
   */

  export type AggregateFavorito = {
    _count: FavoritoCountAggregateOutputType | null
    _avg: FavoritoAvgAggregateOutputType | null
    _sum: FavoritoSumAggregateOutputType | null
    _min: FavoritoMinAggregateOutputType | null
    _max: FavoritoMaxAggregateOutputType | null
  }

  export type FavoritoAvgAggregateOutputType = {
    id: number | null
    hospedeId: number | null
    casaId: number | null
  }

  export type FavoritoSumAggregateOutputType = {
    id: number | null
    hospedeId: number | null
    casaId: number | null
  }

  export type FavoritoMinAggregateOutputType = {
    id: number | null
    hospedeId: number | null
    casaId: number | null
    createdAt: Date | null
  }

  export type FavoritoMaxAggregateOutputType = {
    id: number | null
    hospedeId: number | null
    casaId: number | null
    createdAt: Date | null
  }

  export type FavoritoCountAggregateOutputType = {
    id: number
    hospedeId: number
    casaId: number
    createdAt: number
    _all: number
  }


  export type FavoritoAvgAggregateInputType = {
    id?: true
    hospedeId?: true
    casaId?: true
  }

  export type FavoritoSumAggregateInputType = {
    id?: true
    hospedeId?: true
    casaId?: true
  }

  export type FavoritoMinAggregateInputType = {
    id?: true
    hospedeId?: true
    casaId?: true
    createdAt?: true
  }

  export type FavoritoMaxAggregateInputType = {
    id?: true
    hospedeId?: true
    casaId?: true
    createdAt?: true
  }

  export type FavoritoCountAggregateInputType = {
    id?: true
    hospedeId?: true
    casaId?: true
    createdAt?: true
    _all?: true
  }

  export type FavoritoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Favorito to aggregate.
     */
    where?: FavoritoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Favoritos to fetch.
     */
    orderBy?: FavoritoOrderByWithRelationInput | FavoritoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FavoritoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Favoritos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Favoritos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Favoritos
    **/
    _count?: true | FavoritoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FavoritoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FavoritoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FavoritoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FavoritoMaxAggregateInputType
  }

  export type GetFavoritoAggregateType<T extends FavoritoAggregateArgs> = {
        [P in keyof T & keyof AggregateFavorito]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFavorito[P]>
      : GetScalarType<T[P], AggregateFavorito[P]>
  }




  export type FavoritoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FavoritoWhereInput
    orderBy?: FavoritoOrderByWithAggregationInput | FavoritoOrderByWithAggregationInput[]
    by: FavoritoScalarFieldEnum[] | FavoritoScalarFieldEnum
    having?: FavoritoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FavoritoCountAggregateInputType | true
    _avg?: FavoritoAvgAggregateInputType
    _sum?: FavoritoSumAggregateInputType
    _min?: FavoritoMinAggregateInputType
    _max?: FavoritoMaxAggregateInputType
  }

  export type FavoritoGroupByOutputType = {
    id: number
    hospedeId: number
    casaId: number
    createdAt: Date
    _count: FavoritoCountAggregateOutputType | null
    _avg: FavoritoAvgAggregateOutputType | null
    _sum: FavoritoSumAggregateOutputType | null
    _min: FavoritoMinAggregateOutputType | null
    _max: FavoritoMaxAggregateOutputType | null
  }

  type GetFavoritoGroupByPayload<T extends FavoritoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FavoritoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FavoritoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FavoritoGroupByOutputType[P]>
            : GetScalarType<T[P], FavoritoGroupByOutputType[P]>
        }
      >
    >


  export type FavoritoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    hospedeId?: boolean
    casaId?: boolean
    createdAt?: boolean
    hospede?: boolean | HospedeDefaultArgs<ExtArgs>
    casa?: boolean | CasaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["favorito"]>

  export type FavoritoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    hospedeId?: boolean
    casaId?: boolean
    createdAt?: boolean
    hospede?: boolean | HospedeDefaultArgs<ExtArgs>
    casa?: boolean | CasaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["favorito"]>

  export type FavoritoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    hospedeId?: boolean
    casaId?: boolean
    createdAt?: boolean
    hospede?: boolean | HospedeDefaultArgs<ExtArgs>
    casa?: boolean | CasaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["favorito"]>

  export type FavoritoSelectScalar = {
    id?: boolean
    hospedeId?: boolean
    casaId?: boolean
    createdAt?: boolean
  }

  export type FavoritoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "hospedeId" | "casaId" | "createdAt", ExtArgs["result"]["favorito"]>
  export type FavoritoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hospede?: boolean | HospedeDefaultArgs<ExtArgs>
    casa?: boolean | CasaDefaultArgs<ExtArgs>
  }
  export type FavoritoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hospede?: boolean | HospedeDefaultArgs<ExtArgs>
    casa?: boolean | CasaDefaultArgs<ExtArgs>
  }
  export type FavoritoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hospede?: boolean | HospedeDefaultArgs<ExtArgs>
    casa?: boolean | CasaDefaultArgs<ExtArgs>
  }

  export type $FavoritoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Favorito"
    objects: {
      hospede: Prisma.$HospedePayload<ExtArgs>
      casa: Prisma.$CasaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      hospedeId: number
      casaId: number
      createdAt: Date
    }, ExtArgs["result"]["favorito"]>
    composites: {}
  }

  type FavoritoGetPayload<S extends boolean | null | undefined | FavoritoDefaultArgs> = $Result.GetResult<Prisma.$FavoritoPayload, S>

  type FavoritoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FavoritoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FavoritoCountAggregateInputType | true
    }

  export interface FavoritoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Favorito'], meta: { name: 'Favorito' } }
    /**
     * Find zero or one Favorito that matches the filter.
     * @param {FavoritoFindUniqueArgs} args - Arguments to find a Favorito
     * @example
     * // Get one Favorito
     * const favorito = await prisma.favorito.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FavoritoFindUniqueArgs>(args: SelectSubset<T, FavoritoFindUniqueArgs<ExtArgs>>): Prisma__FavoritoClient<$Result.GetResult<Prisma.$FavoritoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Favorito that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FavoritoFindUniqueOrThrowArgs} args - Arguments to find a Favorito
     * @example
     * // Get one Favorito
     * const favorito = await prisma.favorito.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FavoritoFindUniqueOrThrowArgs>(args: SelectSubset<T, FavoritoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FavoritoClient<$Result.GetResult<Prisma.$FavoritoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Favorito that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoritoFindFirstArgs} args - Arguments to find a Favorito
     * @example
     * // Get one Favorito
     * const favorito = await prisma.favorito.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FavoritoFindFirstArgs>(args?: SelectSubset<T, FavoritoFindFirstArgs<ExtArgs>>): Prisma__FavoritoClient<$Result.GetResult<Prisma.$FavoritoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Favorito that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoritoFindFirstOrThrowArgs} args - Arguments to find a Favorito
     * @example
     * // Get one Favorito
     * const favorito = await prisma.favorito.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FavoritoFindFirstOrThrowArgs>(args?: SelectSubset<T, FavoritoFindFirstOrThrowArgs<ExtArgs>>): Prisma__FavoritoClient<$Result.GetResult<Prisma.$FavoritoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Favoritos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoritoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Favoritos
     * const favoritos = await prisma.favorito.findMany()
     * 
     * // Get first 10 Favoritos
     * const favoritos = await prisma.favorito.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const favoritoWithIdOnly = await prisma.favorito.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FavoritoFindManyArgs>(args?: SelectSubset<T, FavoritoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoritoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Favorito.
     * @param {FavoritoCreateArgs} args - Arguments to create a Favorito.
     * @example
     * // Create one Favorito
     * const Favorito = await prisma.favorito.create({
     *   data: {
     *     // ... data to create a Favorito
     *   }
     * })
     * 
     */
    create<T extends FavoritoCreateArgs>(args: SelectSubset<T, FavoritoCreateArgs<ExtArgs>>): Prisma__FavoritoClient<$Result.GetResult<Prisma.$FavoritoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Favoritos.
     * @param {FavoritoCreateManyArgs} args - Arguments to create many Favoritos.
     * @example
     * // Create many Favoritos
     * const favorito = await prisma.favorito.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FavoritoCreateManyArgs>(args?: SelectSubset<T, FavoritoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Favoritos and returns the data saved in the database.
     * @param {FavoritoCreateManyAndReturnArgs} args - Arguments to create many Favoritos.
     * @example
     * // Create many Favoritos
     * const favorito = await prisma.favorito.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Favoritos and only return the `id`
     * const favoritoWithIdOnly = await prisma.favorito.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FavoritoCreateManyAndReturnArgs>(args?: SelectSubset<T, FavoritoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoritoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Favorito.
     * @param {FavoritoDeleteArgs} args - Arguments to delete one Favorito.
     * @example
     * // Delete one Favorito
     * const Favorito = await prisma.favorito.delete({
     *   where: {
     *     // ... filter to delete one Favorito
     *   }
     * })
     * 
     */
    delete<T extends FavoritoDeleteArgs>(args: SelectSubset<T, FavoritoDeleteArgs<ExtArgs>>): Prisma__FavoritoClient<$Result.GetResult<Prisma.$FavoritoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Favorito.
     * @param {FavoritoUpdateArgs} args - Arguments to update one Favorito.
     * @example
     * // Update one Favorito
     * const favorito = await prisma.favorito.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FavoritoUpdateArgs>(args: SelectSubset<T, FavoritoUpdateArgs<ExtArgs>>): Prisma__FavoritoClient<$Result.GetResult<Prisma.$FavoritoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Favoritos.
     * @param {FavoritoDeleteManyArgs} args - Arguments to filter Favoritos to delete.
     * @example
     * // Delete a few Favoritos
     * const { count } = await prisma.favorito.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FavoritoDeleteManyArgs>(args?: SelectSubset<T, FavoritoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Favoritos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoritoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Favoritos
     * const favorito = await prisma.favorito.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FavoritoUpdateManyArgs>(args: SelectSubset<T, FavoritoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Favoritos and returns the data updated in the database.
     * @param {FavoritoUpdateManyAndReturnArgs} args - Arguments to update many Favoritos.
     * @example
     * // Update many Favoritos
     * const favorito = await prisma.favorito.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Favoritos and only return the `id`
     * const favoritoWithIdOnly = await prisma.favorito.updateManyAndReturn({
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
    updateManyAndReturn<T extends FavoritoUpdateManyAndReturnArgs>(args: SelectSubset<T, FavoritoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoritoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Favorito.
     * @param {FavoritoUpsertArgs} args - Arguments to update or create a Favorito.
     * @example
     * // Update or create a Favorito
     * const favorito = await prisma.favorito.upsert({
     *   create: {
     *     // ... data to create a Favorito
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Favorito we want to update
     *   }
     * })
     */
    upsert<T extends FavoritoUpsertArgs>(args: SelectSubset<T, FavoritoUpsertArgs<ExtArgs>>): Prisma__FavoritoClient<$Result.GetResult<Prisma.$FavoritoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Favoritos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoritoCountArgs} args - Arguments to filter Favoritos to count.
     * @example
     * // Count the number of Favoritos
     * const count = await prisma.favorito.count({
     *   where: {
     *     // ... the filter for the Favoritos we want to count
     *   }
     * })
    **/
    count<T extends FavoritoCountArgs>(
      args?: Subset<T, FavoritoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FavoritoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Favorito.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoritoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FavoritoAggregateArgs>(args: Subset<T, FavoritoAggregateArgs>): Prisma.PrismaPromise<GetFavoritoAggregateType<T>>

    /**
     * Group by Favorito.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoritoGroupByArgs} args - Group by arguments.
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
      T extends FavoritoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FavoritoGroupByArgs['orderBy'] }
        : { orderBy?: FavoritoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FavoritoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFavoritoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Favorito model
   */
  readonly fields: FavoritoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Favorito.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FavoritoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    hospede<T extends HospedeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, HospedeDefaultArgs<ExtArgs>>): Prisma__HospedeClient<$Result.GetResult<Prisma.$HospedePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    casa<T extends CasaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CasaDefaultArgs<ExtArgs>>): Prisma__CasaClient<$Result.GetResult<Prisma.$CasaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Favorito model
   */
  interface FavoritoFieldRefs {
    readonly id: FieldRef<"Favorito", 'Int'>
    readonly hospedeId: FieldRef<"Favorito", 'Int'>
    readonly casaId: FieldRef<"Favorito", 'Int'>
    readonly createdAt: FieldRef<"Favorito", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Favorito findUnique
   */
  export type FavoritoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorito
     */
    select?: FavoritoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorito
     */
    omit?: FavoritoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoritoInclude<ExtArgs> | null
    /**
     * Filter, which Favorito to fetch.
     */
    where: FavoritoWhereUniqueInput
  }

  /**
   * Favorito findUniqueOrThrow
   */
  export type FavoritoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorito
     */
    select?: FavoritoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorito
     */
    omit?: FavoritoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoritoInclude<ExtArgs> | null
    /**
     * Filter, which Favorito to fetch.
     */
    where: FavoritoWhereUniqueInput
  }

  /**
   * Favorito findFirst
   */
  export type FavoritoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorito
     */
    select?: FavoritoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorito
     */
    omit?: FavoritoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoritoInclude<ExtArgs> | null
    /**
     * Filter, which Favorito to fetch.
     */
    where?: FavoritoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Favoritos to fetch.
     */
    orderBy?: FavoritoOrderByWithRelationInput | FavoritoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Favoritos.
     */
    cursor?: FavoritoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Favoritos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Favoritos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Favoritos.
     */
    distinct?: FavoritoScalarFieldEnum | FavoritoScalarFieldEnum[]
  }

  /**
   * Favorito findFirstOrThrow
   */
  export type FavoritoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorito
     */
    select?: FavoritoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorito
     */
    omit?: FavoritoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoritoInclude<ExtArgs> | null
    /**
     * Filter, which Favorito to fetch.
     */
    where?: FavoritoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Favoritos to fetch.
     */
    orderBy?: FavoritoOrderByWithRelationInput | FavoritoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Favoritos.
     */
    cursor?: FavoritoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Favoritos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Favoritos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Favoritos.
     */
    distinct?: FavoritoScalarFieldEnum | FavoritoScalarFieldEnum[]
  }

  /**
   * Favorito findMany
   */
  export type FavoritoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorito
     */
    select?: FavoritoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorito
     */
    omit?: FavoritoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoritoInclude<ExtArgs> | null
    /**
     * Filter, which Favoritos to fetch.
     */
    where?: FavoritoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Favoritos to fetch.
     */
    orderBy?: FavoritoOrderByWithRelationInput | FavoritoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Favoritos.
     */
    cursor?: FavoritoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Favoritos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Favoritos.
     */
    skip?: number
    distinct?: FavoritoScalarFieldEnum | FavoritoScalarFieldEnum[]
  }

  /**
   * Favorito create
   */
  export type FavoritoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorito
     */
    select?: FavoritoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorito
     */
    omit?: FavoritoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoritoInclude<ExtArgs> | null
    /**
     * The data needed to create a Favorito.
     */
    data: XOR<FavoritoCreateInput, FavoritoUncheckedCreateInput>
  }

  /**
   * Favorito createMany
   */
  export type FavoritoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Favoritos.
     */
    data: FavoritoCreateManyInput | FavoritoCreateManyInput[]
  }

  /**
   * Favorito createManyAndReturn
   */
  export type FavoritoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorito
     */
    select?: FavoritoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Favorito
     */
    omit?: FavoritoOmit<ExtArgs> | null
    /**
     * The data used to create many Favoritos.
     */
    data: FavoritoCreateManyInput | FavoritoCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoritoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Favorito update
   */
  export type FavoritoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorito
     */
    select?: FavoritoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorito
     */
    omit?: FavoritoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoritoInclude<ExtArgs> | null
    /**
     * The data needed to update a Favorito.
     */
    data: XOR<FavoritoUpdateInput, FavoritoUncheckedUpdateInput>
    /**
     * Choose, which Favorito to update.
     */
    where: FavoritoWhereUniqueInput
  }

  /**
   * Favorito updateMany
   */
  export type FavoritoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Favoritos.
     */
    data: XOR<FavoritoUpdateManyMutationInput, FavoritoUncheckedUpdateManyInput>
    /**
     * Filter which Favoritos to update
     */
    where?: FavoritoWhereInput
    /**
     * Limit how many Favoritos to update.
     */
    limit?: number
  }

  /**
   * Favorito updateManyAndReturn
   */
  export type FavoritoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorito
     */
    select?: FavoritoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Favorito
     */
    omit?: FavoritoOmit<ExtArgs> | null
    /**
     * The data used to update Favoritos.
     */
    data: XOR<FavoritoUpdateManyMutationInput, FavoritoUncheckedUpdateManyInput>
    /**
     * Filter which Favoritos to update
     */
    where?: FavoritoWhereInput
    /**
     * Limit how many Favoritos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoritoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Favorito upsert
   */
  export type FavoritoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorito
     */
    select?: FavoritoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorito
     */
    omit?: FavoritoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoritoInclude<ExtArgs> | null
    /**
     * The filter to search for the Favorito to update in case it exists.
     */
    where: FavoritoWhereUniqueInput
    /**
     * In case the Favorito found by the `where` argument doesn't exist, create a new Favorito with this data.
     */
    create: XOR<FavoritoCreateInput, FavoritoUncheckedCreateInput>
    /**
     * In case the Favorito was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FavoritoUpdateInput, FavoritoUncheckedUpdateInput>
  }

  /**
   * Favorito delete
   */
  export type FavoritoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorito
     */
    select?: FavoritoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorito
     */
    omit?: FavoritoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoritoInclude<ExtArgs> | null
    /**
     * Filter which Favorito to delete.
     */
    where: FavoritoWhereUniqueInput
  }

  /**
   * Favorito deleteMany
   */
  export type FavoritoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Favoritos to delete
     */
    where?: FavoritoWhereInput
    /**
     * Limit how many Favoritos to delete.
     */
    limit?: number
  }

  /**
   * Favorito without action
   */
  export type FavoritoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorito
     */
    select?: FavoritoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorito
     */
    omit?: FavoritoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoritoInclude<ExtArgs> | null
  }


  /**
   * Model Conversa
   */

  export type AggregateConversa = {
    _count: ConversaCountAggregateOutputType | null
    _avg: ConversaAvgAggregateOutputType | null
    _sum: ConversaSumAggregateOutputType | null
    _min: ConversaMinAggregateOutputType | null
    _max: ConversaMaxAggregateOutputType | null
  }

  export type ConversaAvgAggregateOutputType = {
    id: number | null
    hospedeId: number | null
    locadorId: number | null
    casaId: number | null
  }

  export type ConversaSumAggregateOutputType = {
    id: number | null
    hospedeId: number | null
    locadorId: number | null
    casaId: number | null
  }

  export type ConversaMinAggregateOutputType = {
    id: number | null
    hospedeId: number | null
    locadorId: number | null
    casaId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ConversaMaxAggregateOutputType = {
    id: number | null
    hospedeId: number | null
    locadorId: number | null
    casaId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ConversaCountAggregateOutputType = {
    id: number
    hospedeId: number
    locadorId: number
    casaId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ConversaAvgAggregateInputType = {
    id?: true
    hospedeId?: true
    locadorId?: true
    casaId?: true
  }

  export type ConversaSumAggregateInputType = {
    id?: true
    hospedeId?: true
    locadorId?: true
    casaId?: true
  }

  export type ConversaMinAggregateInputType = {
    id?: true
    hospedeId?: true
    locadorId?: true
    casaId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ConversaMaxAggregateInputType = {
    id?: true
    hospedeId?: true
    locadorId?: true
    casaId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ConversaCountAggregateInputType = {
    id?: true
    hospedeId?: true
    locadorId?: true
    casaId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ConversaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Conversa to aggregate.
     */
    where?: ConversaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conversas to fetch.
     */
    orderBy?: ConversaOrderByWithRelationInput | ConversaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ConversaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conversas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conversas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Conversas
    **/
    _count?: true | ConversaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ConversaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ConversaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConversaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConversaMaxAggregateInputType
  }

  export type GetConversaAggregateType<T extends ConversaAggregateArgs> = {
        [P in keyof T & keyof AggregateConversa]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConversa[P]>
      : GetScalarType<T[P], AggregateConversa[P]>
  }




  export type ConversaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConversaWhereInput
    orderBy?: ConversaOrderByWithAggregationInput | ConversaOrderByWithAggregationInput[]
    by: ConversaScalarFieldEnum[] | ConversaScalarFieldEnum
    having?: ConversaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConversaCountAggregateInputType | true
    _avg?: ConversaAvgAggregateInputType
    _sum?: ConversaSumAggregateInputType
    _min?: ConversaMinAggregateInputType
    _max?: ConversaMaxAggregateInputType
  }

  export type ConversaGroupByOutputType = {
    id: number
    hospedeId: number
    locadorId: number
    casaId: number | null
    createdAt: Date
    updatedAt: Date
    _count: ConversaCountAggregateOutputType | null
    _avg: ConversaAvgAggregateOutputType | null
    _sum: ConversaSumAggregateOutputType | null
    _min: ConversaMinAggregateOutputType | null
    _max: ConversaMaxAggregateOutputType | null
  }

  type GetConversaGroupByPayload<T extends ConversaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConversaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConversaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConversaGroupByOutputType[P]>
            : GetScalarType<T[P], ConversaGroupByOutputType[P]>
        }
      >
    >


  export type ConversaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    hospedeId?: boolean
    locadorId?: boolean
    casaId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    hospede?: boolean | HospedeDefaultArgs<ExtArgs>
    locador?: boolean | LocadorDefaultArgs<ExtArgs>
    casa?: boolean | Conversa$casaArgs<ExtArgs>
    mensagens?: boolean | Conversa$mensagensArgs<ExtArgs>
    _count?: boolean | ConversaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["conversa"]>

  export type ConversaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    hospedeId?: boolean
    locadorId?: boolean
    casaId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    hospede?: boolean | HospedeDefaultArgs<ExtArgs>
    locador?: boolean | LocadorDefaultArgs<ExtArgs>
    casa?: boolean | Conversa$casaArgs<ExtArgs>
  }, ExtArgs["result"]["conversa"]>

  export type ConversaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    hospedeId?: boolean
    locadorId?: boolean
    casaId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    hospede?: boolean | HospedeDefaultArgs<ExtArgs>
    locador?: boolean | LocadorDefaultArgs<ExtArgs>
    casa?: boolean | Conversa$casaArgs<ExtArgs>
  }, ExtArgs["result"]["conversa"]>

  export type ConversaSelectScalar = {
    id?: boolean
    hospedeId?: boolean
    locadorId?: boolean
    casaId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ConversaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "hospedeId" | "locadorId" | "casaId" | "createdAt" | "updatedAt", ExtArgs["result"]["conversa"]>
  export type ConversaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hospede?: boolean | HospedeDefaultArgs<ExtArgs>
    locador?: boolean | LocadorDefaultArgs<ExtArgs>
    casa?: boolean | Conversa$casaArgs<ExtArgs>
    mensagens?: boolean | Conversa$mensagensArgs<ExtArgs>
    _count?: boolean | ConversaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ConversaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hospede?: boolean | HospedeDefaultArgs<ExtArgs>
    locador?: boolean | LocadorDefaultArgs<ExtArgs>
    casa?: boolean | Conversa$casaArgs<ExtArgs>
  }
  export type ConversaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hospede?: boolean | HospedeDefaultArgs<ExtArgs>
    locador?: boolean | LocadorDefaultArgs<ExtArgs>
    casa?: boolean | Conversa$casaArgs<ExtArgs>
  }

  export type $ConversaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Conversa"
    objects: {
      hospede: Prisma.$HospedePayload<ExtArgs>
      locador: Prisma.$LocadorPayload<ExtArgs>
      casa: Prisma.$CasaPayload<ExtArgs> | null
      mensagens: Prisma.$MensagemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      hospedeId: number
      locadorId: number
      casaId: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["conversa"]>
    composites: {}
  }

  type ConversaGetPayload<S extends boolean | null | undefined | ConversaDefaultArgs> = $Result.GetResult<Prisma.$ConversaPayload, S>

  type ConversaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ConversaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ConversaCountAggregateInputType | true
    }

  export interface ConversaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Conversa'], meta: { name: 'Conversa' } }
    /**
     * Find zero or one Conversa that matches the filter.
     * @param {ConversaFindUniqueArgs} args - Arguments to find a Conversa
     * @example
     * // Get one Conversa
     * const conversa = await prisma.conversa.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ConversaFindUniqueArgs>(args: SelectSubset<T, ConversaFindUniqueArgs<ExtArgs>>): Prisma__ConversaClient<$Result.GetResult<Prisma.$ConversaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Conversa that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ConversaFindUniqueOrThrowArgs} args - Arguments to find a Conversa
     * @example
     * // Get one Conversa
     * const conversa = await prisma.conversa.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ConversaFindUniqueOrThrowArgs>(args: SelectSubset<T, ConversaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ConversaClient<$Result.GetResult<Prisma.$ConversaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Conversa that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversaFindFirstArgs} args - Arguments to find a Conversa
     * @example
     * // Get one Conversa
     * const conversa = await prisma.conversa.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ConversaFindFirstArgs>(args?: SelectSubset<T, ConversaFindFirstArgs<ExtArgs>>): Prisma__ConversaClient<$Result.GetResult<Prisma.$ConversaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Conversa that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversaFindFirstOrThrowArgs} args - Arguments to find a Conversa
     * @example
     * // Get one Conversa
     * const conversa = await prisma.conversa.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ConversaFindFirstOrThrowArgs>(args?: SelectSubset<T, ConversaFindFirstOrThrowArgs<ExtArgs>>): Prisma__ConversaClient<$Result.GetResult<Prisma.$ConversaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Conversas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Conversas
     * const conversas = await prisma.conversa.findMany()
     * 
     * // Get first 10 Conversas
     * const conversas = await prisma.conversa.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const conversaWithIdOnly = await prisma.conversa.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ConversaFindManyArgs>(args?: SelectSubset<T, ConversaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConversaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Conversa.
     * @param {ConversaCreateArgs} args - Arguments to create a Conversa.
     * @example
     * // Create one Conversa
     * const Conversa = await prisma.conversa.create({
     *   data: {
     *     // ... data to create a Conversa
     *   }
     * })
     * 
     */
    create<T extends ConversaCreateArgs>(args: SelectSubset<T, ConversaCreateArgs<ExtArgs>>): Prisma__ConversaClient<$Result.GetResult<Prisma.$ConversaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Conversas.
     * @param {ConversaCreateManyArgs} args - Arguments to create many Conversas.
     * @example
     * // Create many Conversas
     * const conversa = await prisma.conversa.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ConversaCreateManyArgs>(args?: SelectSubset<T, ConversaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Conversas and returns the data saved in the database.
     * @param {ConversaCreateManyAndReturnArgs} args - Arguments to create many Conversas.
     * @example
     * // Create many Conversas
     * const conversa = await prisma.conversa.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Conversas and only return the `id`
     * const conversaWithIdOnly = await prisma.conversa.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ConversaCreateManyAndReturnArgs>(args?: SelectSubset<T, ConversaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConversaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Conversa.
     * @param {ConversaDeleteArgs} args - Arguments to delete one Conversa.
     * @example
     * // Delete one Conversa
     * const Conversa = await prisma.conversa.delete({
     *   where: {
     *     // ... filter to delete one Conversa
     *   }
     * })
     * 
     */
    delete<T extends ConversaDeleteArgs>(args: SelectSubset<T, ConversaDeleteArgs<ExtArgs>>): Prisma__ConversaClient<$Result.GetResult<Prisma.$ConversaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Conversa.
     * @param {ConversaUpdateArgs} args - Arguments to update one Conversa.
     * @example
     * // Update one Conversa
     * const conversa = await prisma.conversa.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ConversaUpdateArgs>(args: SelectSubset<T, ConversaUpdateArgs<ExtArgs>>): Prisma__ConversaClient<$Result.GetResult<Prisma.$ConversaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Conversas.
     * @param {ConversaDeleteManyArgs} args - Arguments to filter Conversas to delete.
     * @example
     * // Delete a few Conversas
     * const { count } = await prisma.conversa.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ConversaDeleteManyArgs>(args?: SelectSubset<T, ConversaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Conversas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Conversas
     * const conversa = await prisma.conversa.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ConversaUpdateManyArgs>(args: SelectSubset<T, ConversaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Conversas and returns the data updated in the database.
     * @param {ConversaUpdateManyAndReturnArgs} args - Arguments to update many Conversas.
     * @example
     * // Update many Conversas
     * const conversa = await prisma.conversa.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Conversas and only return the `id`
     * const conversaWithIdOnly = await prisma.conversa.updateManyAndReturn({
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
    updateManyAndReturn<T extends ConversaUpdateManyAndReturnArgs>(args: SelectSubset<T, ConversaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConversaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Conversa.
     * @param {ConversaUpsertArgs} args - Arguments to update or create a Conversa.
     * @example
     * // Update or create a Conversa
     * const conversa = await prisma.conversa.upsert({
     *   create: {
     *     // ... data to create a Conversa
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Conversa we want to update
     *   }
     * })
     */
    upsert<T extends ConversaUpsertArgs>(args: SelectSubset<T, ConversaUpsertArgs<ExtArgs>>): Prisma__ConversaClient<$Result.GetResult<Prisma.$ConversaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Conversas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversaCountArgs} args - Arguments to filter Conversas to count.
     * @example
     * // Count the number of Conversas
     * const count = await prisma.conversa.count({
     *   where: {
     *     // ... the filter for the Conversas we want to count
     *   }
     * })
    **/
    count<T extends ConversaCountArgs>(
      args?: Subset<T, ConversaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConversaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Conversa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ConversaAggregateArgs>(args: Subset<T, ConversaAggregateArgs>): Prisma.PrismaPromise<GetConversaAggregateType<T>>

    /**
     * Group by Conversa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversaGroupByArgs} args - Group by arguments.
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
      T extends ConversaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ConversaGroupByArgs['orderBy'] }
        : { orderBy?: ConversaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ConversaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConversaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Conversa model
   */
  readonly fields: ConversaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Conversa.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ConversaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    hospede<T extends HospedeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, HospedeDefaultArgs<ExtArgs>>): Prisma__HospedeClient<$Result.GetResult<Prisma.$HospedePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    locador<T extends LocadorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LocadorDefaultArgs<ExtArgs>>): Prisma__LocadorClient<$Result.GetResult<Prisma.$LocadorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    casa<T extends Conversa$casaArgs<ExtArgs> = {}>(args?: Subset<T, Conversa$casaArgs<ExtArgs>>): Prisma__CasaClient<$Result.GetResult<Prisma.$CasaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    mensagens<T extends Conversa$mensagensArgs<ExtArgs> = {}>(args?: Subset<T, Conversa$mensagensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MensagemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Conversa model
   */
  interface ConversaFieldRefs {
    readonly id: FieldRef<"Conversa", 'Int'>
    readonly hospedeId: FieldRef<"Conversa", 'Int'>
    readonly locadorId: FieldRef<"Conversa", 'Int'>
    readonly casaId: FieldRef<"Conversa", 'Int'>
    readonly createdAt: FieldRef<"Conversa", 'DateTime'>
    readonly updatedAt: FieldRef<"Conversa", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Conversa findUnique
   */
  export type ConversaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversa
     */
    select?: ConversaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversa
     */
    omit?: ConversaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversaInclude<ExtArgs> | null
    /**
     * Filter, which Conversa to fetch.
     */
    where: ConversaWhereUniqueInput
  }

  /**
   * Conversa findUniqueOrThrow
   */
  export type ConversaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversa
     */
    select?: ConversaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversa
     */
    omit?: ConversaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversaInclude<ExtArgs> | null
    /**
     * Filter, which Conversa to fetch.
     */
    where: ConversaWhereUniqueInput
  }

  /**
   * Conversa findFirst
   */
  export type ConversaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversa
     */
    select?: ConversaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversa
     */
    omit?: ConversaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversaInclude<ExtArgs> | null
    /**
     * Filter, which Conversa to fetch.
     */
    where?: ConversaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conversas to fetch.
     */
    orderBy?: ConversaOrderByWithRelationInput | ConversaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Conversas.
     */
    cursor?: ConversaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conversas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conversas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Conversas.
     */
    distinct?: ConversaScalarFieldEnum | ConversaScalarFieldEnum[]
  }

  /**
   * Conversa findFirstOrThrow
   */
  export type ConversaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversa
     */
    select?: ConversaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversa
     */
    omit?: ConversaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversaInclude<ExtArgs> | null
    /**
     * Filter, which Conversa to fetch.
     */
    where?: ConversaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conversas to fetch.
     */
    orderBy?: ConversaOrderByWithRelationInput | ConversaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Conversas.
     */
    cursor?: ConversaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conversas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conversas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Conversas.
     */
    distinct?: ConversaScalarFieldEnum | ConversaScalarFieldEnum[]
  }

  /**
   * Conversa findMany
   */
  export type ConversaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversa
     */
    select?: ConversaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversa
     */
    omit?: ConversaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversaInclude<ExtArgs> | null
    /**
     * Filter, which Conversas to fetch.
     */
    where?: ConversaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conversas to fetch.
     */
    orderBy?: ConversaOrderByWithRelationInput | ConversaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Conversas.
     */
    cursor?: ConversaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conversas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conversas.
     */
    skip?: number
    distinct?: ConversaScalarFieldEnum | ConversaScalarFieldEnum[]
  }

  /**
   * Conversa create
   */
  export type ConversaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversa
     */
    select?: ConversaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversa
     */
    omit?: ConversaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversaInclude<ExtArgs> | null
    /**
     * The data needed to create a Conversa.
     */
    data: XOR<ConversaCreateInput, ConversaUncheckedCreateInput>
  }

  /**
   * Conversa createMany
   */
  export type ConversaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Conversas.
     */
    data: ConversaCreateManyInput | ConversaCreateManyInput[]
  }

  /**
   * Conversa createManyAndReturn
   */
  export type ConversaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversa
     */
    select?: ConversaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Conversa
     */
    omit?: ConversaOmit<ExtArgs> | null
    /**
     * The data used to create many Conversas.
     */
    data: ConversaCreateManyInput | ConversaCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Conversa update
   */
  export type ConversaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversa
     */
    select?: ConversaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversa
     */
    omit?: ConversaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversaInclude<ExtArgs> | null
    /**
     * The data needed to update a Conversa.
     */
    data: XOR<ConversaUpdateInput, ConversaUncheckedUpdateInput>
    /**
     * Choose, which Conversa to update.
     */
    where: ConversaWhereUniqueInput
  }

  /**
   * Conversa updateMany
   */
  export type ConversaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Conversas.
     */
    data: XOR<ConversaUpdateManyMutationInput, ConversaUncheckedUpdateManyInput>
    /**
     * Filter which Conversas to update
     */
    where?: ConversaWhereInput
    /**
     * Limit how many Conversas to update.
     */
    limit?: number
  }

  /**
   * Conversa updateManyAndReturn
   */
  export type ConversaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversa
     */
    select?: ConversaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Conversa
     */
    omit?: ConversaOmit<ExtArgs> | null
    /**
     * The data used to update Conversas.
     */
    data: XOR<ConversaUpdateManyMutationInput, ConversaUncheckedUpdateManyInput>
    /**
     * Filter which Conversas to update
     */
    where?: ConversaWhereInput
    /**
     * Limit how many Conversas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Conversa upsert
   */
  export type ConversaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversa
     */
    select?: ConversaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversa
     */
    omit?: ConversaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversaInclude<ExtArgs> | null
    /**
     * The filter to search for the Conversa to update in case it exists.
     */
    where: ConversaWhereUniqueInput
    /**
     * In case the Conversa found by the `where` argument doesn't exist, create a new Conversa with this data.
     */
    create: XOR<ConversaCreateInput, ConversaUncheckedCreateInput>
    /**
     * In case the Conversa was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ConversaUpdateInput, ConversaUncheckedUpdateInput>
  }

  /**
   * Conversa delete
   */
  export type ConversaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversa
     */
    select?: ConversaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversa
     */
    omit?: ConversaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversaInclude<ExtArgs> | null
    /**
     * Filter which Conversa to delete.
     */
    where: ConversaWhereUniqueInput
  }

  /**
   * Conversa deleteMany
   */
  export type ConversaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Conversas to delete
     */
    where?: ConversaWhereInput
    /**
     * Limit how many Conversas to delete.
     */
    limit?: number
  }

  /**
   * Conversa.casa
   */
  export type Conversa$casaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Casa
     */
    select?: CasaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Casa
     */
    omit?: CasaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CasaInclude<ExtArgs> | null
    where?: CasaWhereInput
  }

  /**
   * Conversa.mensagens
   */
  export type Conversa$mensagensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensagem
     */
    select?: MensagemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mensagem
     */
    omit?: MensagemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensagemInclude<ExtArgs> | null
    where?: MensagemWhereInput
    orderBy?: MensagemOrderByWithRelationInput | MensagemOrderByWithRelationInput[]
    cursor?: MensagemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MensagemScalarFieldEnum | MensagemScalarFieldEnum[]
  }

  /**
   * Conversa without action
   */
  export type ConversaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversa
     */
    select?: ConversaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversa
     */
    omit?: ConversaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversaInclude<ExtArgs> | null
  }


  /**
   * Model Mensagem
   */

  export type AggregateMensagem = {
    _count: MensagemCountAggregateOutputType | null
    _avg: MensagemAvgAggregateOutputType | null
    _sum: MensagemSumAggregateOutputType | null
    _min: MensagemMinAggregateOutputType | null
    _max: MensagemMaxAggregateOutputType | null
  }

  export type MensagemAvgAggregateOutputType = {
    id: number | null
    conversaId: number | null
    remetenteHospedeId: number | null
    remetenteLocadorId: number | null
  }

  export type MensagemSumAggregateOutputType = {
    id: number | null
    conversaId: number | null
    remetenteHospedeId: number | null
    remetenteLocadorId: number | null
  }

  export type MensagemMinAggregateOutputType = {
    id: number | null
    conteudo: string | null
    createdAt: Date | null
    conversaId: number | null
    remetenteHospedeId: number | null
    remetenteLocadorId: number | null
    lidaPeloHospede: boolean | null
    lidaPeloLocador: boolean | null
  }

  export type MensagemMaxAggregateOutputType = {
    id: number | null
    conteudo: string | null
    createdAt: Date | null
    conversaId: number | null
    remetenteHospedeId: number | null
    remetenteLocadorId: number | null
    lidaPeloHospede: boolean | null
    lidaPeloLocador: boolean | null
  }

  export type MensagemCountAggregateOutputType = {
    id: number
    conteudo: number
    createdAt: number
    conversaId: number
    remetenteHospedeId: number
    remetenteLocadorId: number
    lidaPeloHospede: number
    lidaPeloLocador: number
    _all: number
  }


  export type MensagemAvgAggregateInputType = {
    id?: true
    conversaId?: true
    remetenteHospedeId?: true
    remetenteLocadorId?: true
  }

  export type MensagemSumAggregateInputType = {
    id?: true
    conversaId?: true
    remetenteHospedeId?: true
    remetenteLocadorId?: true
  }

  export type MensagemMinAggregateInputType = {
    id?: true
    conteudo?: true
    createdAt?: true
    conversaId?: true
    remetenteHospedeId?: true
    remetenteLocadorId?: true
    lidaPeloHospede?: true
    lidaPeloLocador?: true
  }

  export type MensagemMaxAggregateInputType = {
    id?: true
    conteudo?: true
    createdAt?: true
    conversaId?: true
    remetenteHospedeId?: true
    remetenteLocadorId?: true
    lidaPeloHospede?: true
    lidaPeloLocador?: true
  }

  export type MensagemCountAggregateInputType = {
    id?: true
    conteudo?: true
    createdAt?: true
    conversaId?: true
    remetenteHospedeId?: true
    remetenteLocadorId?: true
    lidaPeloHospede?: true
    lidaPeloLocador?: true
    _all?: true
  }

  export type MensagemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Mensagem to aggregate.
     */
    where?: MensagemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mensagems to fetch.
     */
    orderBy?: MensagemOrderByWithRelationInput | MensagemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MensagemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mensagems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mensagems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Mensagems
    **/
    _count?: true | MensagemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MensagemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MensagemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MensagemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MensagemMaxAggregateInputType
  }

  export type GetMensagemAggregateType<T extends MensagemAggregateArgs> = {
        [P in keyof T & keyof AggregateMensagem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMensagem[P]>
      : GetScalarType<T[P], AggregateMensagem[P]>
  }




  export type MensagemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MensagemWhereInput
    orderBy?: MensagemOrderByWithAggregationInput | MensagemOrderByWithAggregationInput[]
    by: MensagemScalarFieldEnum[] | MensagemScalarFieldEnum
    having?: MensagemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MensagemCountAggregateInputType | true
    _avg?: MensagemAvgAggregateInputType
    _sum?: MensagemSumAggregateInputType
    _min?: MensagemMinAggregateInputType
    _max?: MensagemMaxAggregateInputType
  }

  export type MensagemGroupByOutputType = {
    id: number
    conteudo: string
    createdAt: Date
    conversaId: number
    remetenteHospedeId: number | null
    remetenteLocadorId: number | null
    lidaPeloHospede: boolean
    lidaPeloLocador: boolean
    _count: MensagemCountAggregateOutputType | null
    _avg: MensagemAvgAggregateOutputType | null
    _sum: MensagemSumAggregateOutputType | null
    _min: MensagemMinAggregateOutputType | null
    _max: MensagemMaxAggregateOutputType | null
  }

  type GetMensagemGroupByPayload<T extends MensagemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MensagemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MensagemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MensagemGroupByOutputType[P]>
            : GetScalarType<T[P], MensagemGroupByOutputType[P]>
        }
      >
    >


  export type MensagemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    conteudo?: boolean
    createdAt?: boolean
    conversaId?: boolean
    remetenteHospedeId?: boolean
    remetenteLocadorId?: boolean
    lidaPeloHospede?: boolean
    lidaPeloLocador?: boolean
    conversa?: boolean | ConversaDefaultArgs<ExtArgs>
    remetenteHospede?: boolean | Mensagem$remetenteHospedeArgs<ExtArgs>
    remetenteLocador?: boolean | Mensagem$remetenteLocadorArgs<ExtArgs>
  }, ExtArgs["result"]["mensagem"]>

  export type MensagemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    conteudo?: boolean
    createdAt?: boolean
    conversaId?: boolean
    remetenteHospedeId?: boolean
    remetenteLocadorId?: boolean
    lidaPeloHospede?: boolean
    lidaPeloLocador?: boolean
    conversa?: boolean | ConversaDefaultArgs<ExtArgs>
    remetenteHospede?: boolean | Mensagem$remetenteHospedeArgs<ExtArgs>
    remetenteLocador?: boolean | Mensagem$remetenteLocadorArgs<ExtArgs>
  }, ExtArgs["result"]["mensagem"]>

  export type MensagemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    conteudo?: boolean
    createdAt?: boolean
    conversaId?: boolean
    remetenteHospedeId?: boolean
    remetenteLocadorId?: boolean
    lidaPeloHospede?: boolean
    lidaPeloLocador?: boolean
    conversa?: boolean | ConversaDefaultArgs<ExtArgs>
    remetenteHospede?: boolean | Mensagem$remetenteHospedeArgs<ExtArgs>
    remetenteLocador?: boolean | Mensagem$remetenteLocadorArgs<ExtArgs>
  }, ExtArgs["result"]["mensagem"]>

  export type MensagemSelectScalar = {
    id?: boolean
    conteudo?: boolean
    createdAt?: boolean
    conversaId?: boolean
    remetenteHospedeId?: boolean
    remetenteLocadorId?: boolean
    lidaPeloHospede?: boolean
    lidaPeloLocador?: boolean
  }

  export type MensagemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "conteudo" | "createdAt" | "conversaId" | "remetenteHospedeId" | "remetenteLocadorId" | "lidaPeloHospede" | "lidaPeloLocador", ExtArgs["result"]["mensagem"]>
  export type MensagemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    conversa?: boolean | ConversaDefaultArgs<ExtArgs>
    remetenteHospede?: boolean | Mensagem$remetenteHospedeArgs<ExtArgs>
    remetenteLocador?: boolean | Mensagem$remetenteLocadorArgs<ExtArgs>
  }
  export type MensagemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    conversa?: boolean | ConversaDefaultArgs<ExtArgs>
    remetenteHospede?: boolean | Mensagem$remetenteHospedeArgs<ExtArgs>
    remetenteLocador?: boolean | Mensagem$remetenteLocadorArgs<ExtArgs>
  }
  export type MensagemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    conversa?: boolean | ConversaDefaultArgs<ExtArgs>
    remetenteHospede?: boolean | Mensagem$remetenteHospedeArgs<ExtArgs>
    remetenteLocador?: boolean | Mensagem$remetenteLocadorArgs<ExtArgs>
  }

  export type $MensagemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Mensagem"
    objects: {
      conversa: Prisma.$ConversaPayload<ExtArgs>
      remetenteHospede: Prisma.$HospedePayload<ExtArgs> | null
      remetenteLocador: Prisma.$LocadorPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      conteudo: string
      createdAt: Date
      conversaId: number
      remetenteHospedeId: number | null
      remetenteLocadorId: number | null
      lidaPeloHospede: boolean
      lidaPeloLocador: boolean
    }, ExtArgs["result"]["mensagem"]>
    composites: {}
  }

  type MensagemGetPayload<S extends boolean | null | undefined | MensagemDefaultArgs> = $Result.GetResult<Prisma.$MensagemPayload, S>

  type MensagemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MensagemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MensagemCountAggregateInputType | true
    }

  export interface MensagemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Mensagem'], meta: { name: 'Mensagem' } }
    /**
     * Find zero or one Mensagem that matches the filter.
     * @param {MensagemFindUniqueArgs} args - Arguments to find a Mensagem
     * @example
     * // Get one Mensagem
     * const mensagem = await prisma.mensagem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MensagemFindUniqueArgs>(args: SelectSubset<T, MensagemFindUniqueArgs<ExtArgs>>): Prisma__MensagemClient<$Result.GetResult<Prisma.$MensagemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Mensagem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MensagemFindUniqueOrThrowArgs} args - Arguments to find a Mensagem
     * @example
     * // Get one Mensagem
     * const mensagem = await prisma.mensagem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MensagemFindUniqueOrThrowArgs>(args: SelectSubset<T, MensagemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MensagemClient<$Result.GetResult<Prisma.$MensagemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mensagem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MensagemFindFirstArgs} args - Arguments to find a Mensagem
     * @example
     * // Get one Mensagem
     * const mensagem = await prisma.mensagem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MensagemFindFirstArgs>(args?: SelectSubset<T, MensagemFindFirstArgs<ExtArgs>>): Prisma__MensagemClient<$Result.GetResult<Prisma.$MensagemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mensagem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MensagemFindFirstOrThrowArgs} args - Arguments to find a Mensagem
     * @example
     * // Get one Mensagem
     * const mensagem = await prisma.mensagem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MensagemFindFirstOrThrowArgs>(args?: SelectSubset<T, MensagemFindFirstOrThrowArgs<ExtArgs>>): Prisma__MensagemClient<$Result.GetResult<Prisma.$MensagemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Mensagems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MensagemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Mensagems
     * const mensagems = await prisma.mensagem.findMany()
     * 
     * // Get first 10 Mensagems
     * const mensagems = await prisma.mensagem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mensagemWithIdOnly = await prisma.mensagem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MensagemFindManyArgs>(args?: SelectSubset<T, MensagemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MensagemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Mensagem.
     * @param {MensagemCreateArgs} args - Arguments to create a Mensagem.
     * @example
     * // Create one Mensagem
     * const Mensagem = await prisma.mensagem.create({
     *   data: {
     *     // ... data to create a Mensagem
     *   }
     * })
     * 
     */
    create<T extends MensagemCreateArgs>(args: SelectSubset<T, MensagemCreateArgs<ExtArgs>>): Prisma__MensagemClient<$Result.GetResult<Prisma.$MensagemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Mensagems.
     * @param {MensagemCreateManyArgs} args - Arguments to create many Mensagems.
     * @example
     * // Create many Mensagems
     * const mensagem = await prisma.mensagem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MensagemCreateManyArgs>(args?: SelectSubset<T, MensagemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Mensagems and returns the data saved in the database.
     * @param {MensagemCreateManyAndReturnArgs} args - Arguments to create many Mensagems.
     * @example
     * // Create many Mensagems
     * const mensagem = await prisma.mensagem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Mensagems and only return the `id`
     * const mensagemWithIdOnly = await prisma.mensagem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MensagemCreateManyAndReturnArgs>(args?: SelectSubset<T, MensagemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MensagemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Mensagem.
     * @param {MensagemDeleteArgs} args - Arguments to delete one Mensagem.
     * @example
     * // Delete one Mensagem
     * const Mensagem = await prisma.mensagem.delete({
     *   where: {
     *     // ... filter to delete one Mensagem
     *   }
     * })
     * 
     */
    delete<T extends MensagemDeleteArgs>(args: SelectSubset<T, MensagemDeleteArgs<ExtArgs>>): Prisma__MensagemClient<$Result.GetResult<Prisma.$MensagemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Mensagem.
     * @param {MensagemUpdateArgs} args - Arguments to update one Mensagem.
     * @example
     * // Update one Mensagem
     * const mensagem = await prisma.mensagem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MensagemUpdateArgs>(args: SelectSubset<T, MensagemUpdateArgs<ExtArgs>>): Prisma__MensagemClient<$Result.GetResult<Prisma.$MensagemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Mensagems.
     * @param {MensagemDeleteManyArgs} args - Arguments to filter Mensagems to delete.
     * @example
     * // Delete a few Mensagems
     * const { count } = await prisma.mensagem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MensagemDeleteManyArgs>(args?: SelectSubset<T, MensagemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mensagems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MensagemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Mensagems
     * const mensagem = await prisma.mensagem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MensagemUpdateManyArgs>(args: SelectSubset<T, MensagemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mensagems and returns the data updated in the database.
     * @param {MensagemUpdateManyAndReturnArgs} args - Arguments to update many Mensagems.
     * @example
     * // Update many Mensagems
     * const mensagem = await prisma.mensagem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Mensagems and only return the `id`
     * const mensagemWithIdOnly = await prisma.mensagem.updateManyAndReturn({
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
    updateManyAndReturn<T extends MensagemUpdateManyAndReturnArgs>(args: SelectSubset<T, MensagemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MensagemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Mensagem.
     * @param {MensagemUpsertArgs} args - Arguments to update or create a Mensagem.
     * @example
     * // Update or create a Mensagem
     * const mensagem = await prisma.mensagem.upsert({
     *   create: {
     *     // ... data to create a Mensagem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Mensagem we want to update
     *   }
     * })
     */
    upsert<T extends MensagemUpsertArgs>(args: SelectSubset<T, MensagemUpsertArgs<ExtArgs>>): Prisma__MensagemClient<$Result.GetResult<Prisma.$MensagemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Mensagems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MensagemCountArgs} args - Arguments to filter Mensagems to count.
     * @example
     * // Count the number of Mensagems
     * const count = await prisma.mensagem.count({
     *   where: {
     *     // ... the filter for the Mensagems we want to count
     *   }
     * })
    **/
    count<T extends MensagemCountArgs>(
      args?: Subset<T, MensagemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MensagemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Mensagem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MensagemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MensagemAggregateArgs>(args: Subset<T, MensagemAggregateArgs>): Prisma.PrismaPromise<GetMensagemAggregateType<T>>

    /**
     * Group by Mensagem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MensagemGroupByArgs} args - Group by arguments.
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
      T extends MensagemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MensagemGroupByArgs['orderBy'] }
        : { orderBy?: MensagemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MensagemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMensagemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Mensagem model
   */
  readonly fields: MensagemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Mensagem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MensagemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    conversa<T extends ConversaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ConversaDefaultArgs<ExtArgs>>): Prisma__ConversaClient<$Result.GetResult<Prisma.$ConversaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    remetenteHospede<T extends Mensagem$remetenteHospedeArgs<ExtArgs> = {}>(args?: Subset<T, Mensagem$remetenteHospedeArgs<ExtArgs>>): Prisma__HospedeClient<$Result.GetResult<Prisma.$HospedePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    remetenteLocador<T extends Mensagem$remetenteLocadorArgs<ExtArgs> = {}>(args?: Subset<T, Mensagem$remetenteLocadorArgs<ExtArgs>>): Prisma__LocadorClient<$Result.GetResult<Prisma.$LocadorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Mensagem model
   */
  interface MensagemFieldRefs {
    readonly id: FieldRef<"Mensagem", 'Int'>
    readonly conteudo: FieldRef<"Mensagem", 'String'>
    readonly createdAt: FieldRef<"Mensagem", 'DateTime'>
    readonly conversaId: FieldRef<"Mensagem", 'Int'>
    readonly remetenteHospedeId: FieldRef<"Mensagem", 'Int'>
    readonly remetenteLocadorId: FieldRef<"Mensagem", 'Int'>
    readonly lidaPeloHospede: FieldRef<"Mensagem", 'Boolean'>
    readonly lidaPeloLocador: FieldRef<"Mensagem", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Mensagem findUnique
   */
  export type MensagemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensagem
     */
    select?: MensagemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mensagem
     */
    omit?: MensagemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensagemInclude<ExtArgs> | null
    /**
     * Filter, which Mensagem to fetch.
     */
    where: MensagemWhereUniqueInput
  }

  /**
   * Mensagem findUniqueOrThrow
   */
  export type MensagemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensagem
     */
    select?: MensagemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mensagem
     */
    omit?: MensagemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensagemInclude<ExtArgs> | null
    /**
     * Filter, which Mensagem to fetch.
     */
    where: MensagemWhereUniqueInput
  }

  /**
   * Mensagem findFirst
   */
  export type MensagemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensagem
     */
    select?: MensagemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mensagem
     */
    omit?: MensagemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensagemInclude<ExtArgs> | null
    /**
     * Filter, which Mensagem to fetch.
     */
    where?: MensagemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mensagems to fetch.
     */
    orderBy?: MensagemOrderByWithRelationInput | MensagemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Mensagems.
     */
    cursor?: MensagemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mensagems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mensagems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Mensagems.
     */
    distinct?: MensagemScalarFieldEnum | MensagemScalarFieldEnum[]
  }

  /**
   * Mensagem findFirstOrThrow
   */
  export type MensagemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensagem
     */
    select?: MensagemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mensagem
     */
    omit?: MensagemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensagemInclude<ExtArgs> | null
    /**
     * Filter, which Mensagem to fetch.
     */
    where?: MensagemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mensagems to fetch.
     */
    orderBy?: MensagemOrderByWithRelationInput | MensagemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Mensagems.
     */
    cursor?: MensagemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mensagems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mensagems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Mensagems.
     */
    distinct?: MensagemScalarFieldEnum | MensagemScalarFieldEnum[]
  }

  /**
   * Mensagem findMany
   */
  export type MensagemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensagem
     */
    select?: MensagemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mensagem
     */
    omit?: MensagemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensagemInclude<ExtArgs> | null
    /**
     * Filter, which Mensagems to fetch.
     */
    where?: MensagemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mensagems to fetch.
     */
    orderBy?: MensagemOrderByWithRelationInput | MensagemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Mensagems.
     */
    cursor?: MensagemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mensagems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mensagems.
     */
    skip?: number
    distinct?: MensagemScalarFieldEnum | MensagemScalarFieldEnum[]
  }

  /**
   * Mensagem create
   */
  export type MensagemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensagem
     */
    select?: MensagemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mensagem
     */
    omit?: MensagemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensagemInclude<ExtArgs> | null
    /**
     * The data needed to create a Mensagem.
     */
    data: XOR<MensagemCreateInput, MensagemUncheckedCreateInput>
  }

  /**
   * Mensagem createMany
   */
  export type MensagemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Mensagems.
     */
    data: MensagemCreateManyInput | MensagemCreateManyInput[]
  }

  /**
   * Mensagem createManyAndReturn
   */
  export type MensagemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensagem
     */
    select?: MensagemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Mensagem
     */
    omit?: MensagemOmit<ExtArgs> | null
    /**
     * The data used to create many Mensagems.
     */
    data: MensagemCreateManyInput | MensagemCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensagemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Mensagem update
   */
  export type MensagemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensagem
     */
    select?: MensagemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mensagem
     */
    omit?: MensagemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensagemInclude<ExtArgs> | null
    /**
     * The data needed to update a Mensagem.
     */
    data: XOR<MensagemUpdateInput, MensagemUncheckedUpdateInput>
    /**
     * Choose, which Mensagem to update.
     */
    where: MensagemWhereUniqueInput
  }

  /**
   * Mensagem updateMany
   */
  export type MensagemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Mensagems.
     */
    data: XOR<MensagemUpdateManyMutationInput, MensagemUncheckedUpdateManyInput>
    /**
     * Filter which Mensagems to update
     */
    where?: MensagemWhereInput
    /**
     * Limit how many Mensagems to update.
     */
    limit?: number
  }

  /**
   * Mensagem updateManyAndReturn
   */
  export type MensagemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensagem
     */
    select?: MensagemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Mensagem
     */
    omit?: MensagemOmit<ExtArgs> | null
    /**
     * The data used to update Mensagems.
     */
    data: XOR<MensagemUpdateManyMutationInput, MensagemUncheckedUpdateManyInput>
    /**
     * Filter which Mensagems to update
     */
    where?: MensagemWhereInput
    /**
     * Limit how many Mensagems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensagemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Mensagem upsert
   */
  export type MensagemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensagem
     */
    select?: MensagemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mensagem
     */
    omit?: MensagemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensagemInclude<ExtArgs> | null
    /**
     * The filter to search for the Mensagem to update in case it exists.
     */
    where: MensagemWhereUniqueInput
    /**
     * In case the Mensagem found by the `where` argument doesn't exist, create a new Mensagem with this data.
     */
    create: XOR<MensagemCreateInput, MensagemUncheckedCreateInput>
    /**
     * In case the Mensagem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MensagemUpdateInput, MensagemUncheckedUpdateInput>
  }

  /**
   * Mensagem delete
   */
  export type MensagemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensagem
     */
    select?: MensagemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mensagem
     */
    omit?: MensagemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensagemInclude<ExtArgs> | null
    /**
     * Filter which Mensagem to delete.
     */
    where: MensagemWhereUniqueInput
  }

  /**
   * Mensagem deleteMany
   */
  export type MensagemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Mensagems to delete
     */
    where?: MensagemWhereInput
    /**
     * Limit how many Mensagems to delete.
     */
    limit?: number
  }

  /**
   * Mensagem.remetenteHospede
   */
  export type Mensagem$remetenteHospedeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hospede
     */
    select?: HospedeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hospede
     */
    omit?: HospedeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HospedeInclude<ExtArgs> | null
    where?: HospedeWhereInput
  }

  /**
   * Mensagem.remetenteLocador
   */
  export type Mensagem$remetenteLocadorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Locador
     */
    select?: LocadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Locador
     */
    omit?: LocadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocadorInclude<ExtArgs> | null
    where?: LocadorWhereInput
  }

  /**
   * Mensagem without action
   */
  export type MensagemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensagem
     */
    select?: MensagemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mensagem
     */
    omit?: MensagemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensagemInclude<ExtArgs> | null
  }


  /**
   * Model Avaliacao
   */

  export type AggregateAvaliacao = {
    _count: AvaliacaoCountAggregateOutputType | null
    _avg: AvaliacaoAvgAggregateOutputType | null
    _sum: AvaliacaoSumAggregateOutputType | null
    _min: AvaliacaoMinAggregateOutputType | null
    _max: AvaliacaoMaxAggregateOutputType | null
  }

  export type AvaliacaoAvgAggregateOutputType = {
    id: number | null
    nota: number | null
    reservaId: number | null
    hospedeId: number | null
    casaId: number | null
  }

  export type AvaliacaoSumAggregateOutputType = {
    id: number | null
    nota: number | null
    reservaId: number | null
    hospedeId: number | null
    casaId: number | null
  }

  export type AvaliacaoMinAggregateOutputType = {
    id: number | null
    nota: number | null
    comentario: string | null
    reservaId: number | null
    hospedeId: number | null
    casaId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AvaliacaoMaxAggregateOutputType = {
    id: number | null
    nota: number | null
    comentario: string | null
    reservaId: number | null
    hospedeId: number | null
    casaId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AvaliacaoCountAggregateOutputType = {
    id: number
    nota: number
    comentario: number
    reservaId: number
    hospedeId: number
    casaId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AvaliacaoAvgAggregateInputType = {
    id?: true
    nota?: true
    reservaId?: true
    hospedeId?: true
    casaId?: true
  }

  export type AvaliacaoSumAggregateInputType = {
    id?: true
    nota?: true
    reservaId?: true
    hospedeId?: true
    casaId?: true
  }

  export type AvaliacaoMinAggregateInputType = {
    id?: true
    nota?: true
    comentario?: true
    reservaId?: true
    hospedeId?: true
    casaId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AvaliacaoMaxAggregateInputType = {
    id?: true
    nota?: true
    comentario?: true
    reservaId?: true
    hospedeId?: true
    casaId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AvaliacaoCountAggregateInputType = {
    id?: true
    nota?: true
    comentario?: true
    reservaId?: true
    hospedeId?: true
    casaId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AvaliacaoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Avaliacao to aggregate.
     */
    where?: AvaliacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Avaliacaos to fetch.
     */
    orderBy?: AvaliacaoOrderByWithRelationInput | AvaliacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AvaliacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Avaliacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Avaliacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Avaliacaos
    **/
    _count?: true | AvaliacaoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AvaliacaoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AvaliacaoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AvaliacaoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AvaliacaoMaxAggregateInputType
  }

  export type GetAvaliacaoAggregateType<T extends AvaliacaoAggregateArgs> = {
        [P in keyof T & keyof AggregateAvaliacao]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAvaliacao[P]>
      : GetScalarType<T[P], AggregateAvaliacao[P]>
  }




  export type AvaliacaoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AvaliacaoWhereInput
    orderBy?: AvaliacaoOrderByWithAggregationInput | AvaliacaoOrderByWithAggregationInput[]
    by: AvaliacaoScalarFieldEnum[] | AvaliacaoScalarFieldEnum
    having?: AvaliacaoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AvaliacaoCountAggregateInputType | true
    _avg?: AvaliacaoAvgAggregateInputType
    _sum?: AvaliacaoSumAggregateInputType
    _min?: AvaliacaoMinAggregateInputType
    _max?: AvaliacaoMaxAggregateInputType
  }

  export type AvaliacaoGroupByOutputType = {
    id: number
    nota: number
    comentario: string | null
    reservaId: number
    hospedeId: number
    casaId: number
    createdAt: Date
    updatedAt: Date
    _count: AvaliacaoCountAggregateOutputType | null
    _avg: AvaliacaoAvgAggregateOutputType | null
    _sum: AvaliacaoSumAggregateOutputType | null
    _min: AvaliacaoMinAggregateOutputType | null
    _max: AvaliacaoMaxAggregateOutputType | null
  }

  type GetAvaliacaoGroupByPayload<T extends AvaliacaoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AvaliacaoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AvaliacaoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AvaliacaoGroupByOutputType[P]>
            : GetScalarType<T[P], AvaliacaoGroupByOutputType[P]>
        }
      >
    >


  export type AvaliacaoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nota?: boolean
    comentario?: boolean
    reservaId?: boolean
    hospedeId?: boolean
    casaId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    reserva?: boolean | ReservaDefaultArgs<ExtArgs>
    hospede?: boolean | HospedeDefaultArgs<ExtArgs>
    casa?: boolean | CasaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["avaliacao"]>

  export type AvaliacaoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nota?: boolean
    comentario?: boolean
    reservaId?: boolean
    hospedeId?: boolean
    casaId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    reserva?: boolean | ReservaDefaultArgs<ExtArgs>
    hospede?: boolean | HospedeDefaultArgs<ExtArgs>
    casa?: boolean | CasaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["avaliacao"]>

  export type AvaliacaoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nota?: boolean
    comentario?: boolean
    reservaId?: boolean
    hospedeId?: boolean
    casaId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    reserva?: boolean | ReservaDefaultArgs<ExtArgs>
    hospede?: boolean | HospedeDefaultArgs<ExtArgs>
    casa?: boolean | CasaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["avaliacao"]>

  export type AvaliacaoSelectScalar = {
    id?: boolean
    nota?: boolean
    comentario?: boolean
    reservaId?: boolean
    hospedeId?: boolean
    casaId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AvaliacaoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nota" | "comentario" | "reservaId" | "hospedeId" | "casaId" | "createdAt" | "updatedAt", ExtArgs["result"]["avaliacao"]>
  export type AvaliacaoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reserva?: boolean | ReservaDefaultArgs<ExtArgs>
    hospede?: boolean | HospedeDefaultArgs<ExtArgs>
    casa?: boolean | CasaDefaultArgs<ExtArgs>
  }
  export type AvaliacaoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reserva?: boolean | ReservaDefaultArgs<ExtArgs>
    hospede?: boolean | HospedeDefaultArgs<ExtArgs>
    casa?: boolean | CasaDefaultArgs<ExtArgs>
  }
  export type AvaliacaoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reserva?: boolean | ReservaDefaultArgs<ExtArgs>
    hospede?: boolean | HospedeDefaultArgs<ExtArgs>
    casa?: boolean | CasaDefaultArgs<ExtArgs>
  }

  export type $AvaliacaoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Avaliacao"
    objects: {
      reserva: Prisma.$ReservaPayload<ExtArgs>
      hospede: Prisma.$HospedePayload<ExtArgs>
      casa: Prisma.$CasaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nota: number
      comentario: string | null
      reservaId: number
      hospedeId: number
      casaId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["avaliacao"]>
    composites: {}
  }

  type AvaliacaoGetPayload<S extends boolean | null | undefined | AvaliacaoDefaultArgs> = $Result.GetResult<Prisma.$AvaliacaoPayload, S>

  type AvaliacaoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AvaliacaoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AvaliacaoCountAggregateInputType | true
    }

  export interface AvaliacaoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Avaliacao'], meta: { name: 'Avaliacao' } }
    /**
     * Find zero or one Avaliacao that matches the filter.
     * @param {AvaliacaoFindUniqueArgs} args - Arguments to find a Avaliacao
     * @example
     * // Get one Avaliacao
     * const avaliacao = await prisma.avaliacao.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AvaliacaoFindUniqueArgs>(args: SelectSubset<T, AvaliacaoFindUniqueArgs<ExtArgs>>): Prisma__AvaliacaoClient<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Avaliacao that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AvaliacaoFindUniqueOrThrowArgs} args - Arguments to find a Avaliacao
     * @example
     * // Get one Avaliacao
     * const avaliacao = await prisma.avaliacao.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AvaliacaoFindUniqueOrThrowArgs>(args: SelectSubset<T, AvaliacaoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AvaliacaoClient<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Avaliacao that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvaliacaoFindFirstArgs} args - Arguments to find a Avaliacao
     * @example
     * // Get one Avaliacao
     * const avaliacao = await prisma.avaliacao.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AvaliacaoFindFirstArgs>(args?: SelectSubset<T, AvaliacaoFindFirstArgs<ExtArgs>>): Prisma__AvaliacaoClient<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Avaliacao that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvaliacaoFindFirstOrThrowArgs} args - Arguments to find a Avaliacao
     * @example
     * // Get one Avaliacao
     * const avaliacao = await prisma.avaliacao.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AvaliacaoFindFirstOrThrowArgs>(args?: SelectSubset<T, AvaliacaoFindFirstOrThrowArgs<ExtArgs>>): Prisma__AvaliacaoClient<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Avaliacaos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvaliacaoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Avaliacaos
     * const avaliacaos = await prisma.avaliacao.findMany()
     * 
     * // Get first 10 Avaliacaos
     * const avaliacaos = await prisma.avaliacao.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const avaliacaoWithIdOnly = await prisma.avaliacao.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AvaliacaoFindManyArgs>(args?: SelectSubset<T, AvaliacaoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Avaliacao.
     * @param {AvaliacaoCreateArgs} args - Arguments to create a Avaliacao.
     * @example
     * // Create one Avaliacao
     * const Avaliacao = await prisma.avaliacao.create({
     *   data: {
     *     // ... data to create a Avaliacao
     *   }
     * })
     * 
     */
    create<T extends AvaliacaoCreateArgs>(args: SelectSubset<T, AvaliacaoCreateArgs<ExtArgs>>): Prisma__AvaliacaoClient<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Avaliacaos.
     * @param {AvaliacaoCreateManyArgs} args - Arguments to create many Avaliacaos.
     * @example
     * // Create many Avaliacaos
     * const avaliacao = await prisma.avaliacao.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AvaliacaoCreateManyArgs>(args?: SelectSubset<T, AvaliacaoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Avaliacaos and returns the data saved in the database.
     * @param {AvaliacaoCreateManyAndReturnArgs} args - Arguments to create many Avaliacaos.
     * @example
     * // Create many Avaliacaos
     * const avaliacao = await prisma.avaliacao.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Avaliacaos and only return the `id`
     * const avaliacaoWithIdOnly = await prisma.avaliacao.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AvaliacaoCreateManyAndReturnArgs>(args?: SelectSubset<T, AvaliacaoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Avaliacao.
     * @param {AvaliacaoDeleteArgs} args - Arguments to delete one Avaliacao.
     * @example
     * // Delete one Avaliacao
     * const Avaliacao = await prisma.avaliacao.delete({
     *   where: {
     *     // ... filter to delete one Avaliacao
     *   }
     * })
     * 
     */
    delete<T extends AvaliacaoDeleteArgs>(args: SelectSubset<T, AvaliacaoDeleteArgs<ExtArgs>>): Prisma__AvaliacaoClient<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Avaliacao.
     * @param {AvaliacaoUpdateArgs} args - Arguments to update one Avaliacao.
     * @example
     * // Update one Avaliacao
     * const avaliacao = await prisma.avaliacao.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AvaliacaoUpdateArgs>(args: SelectSubset<T, AvaliacaoUpdateArgs<ExtArgs>>): Prisma__AvaliacaoClient<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Avaliacaos.
     * @param {AvaliacaoDeleteManyArgs} args - Arguments to filter Avaliacaos to delete.
     * @example
     * // Delete a few Avaliacaos
     * const { count } = await prisma.avaliacao.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AvaliacaoDeleteManyArgs>(args?: SelectSubset<T, AvaliacaoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Avaliacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvaliacaoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Avaliacaos
     * const avaliacao = await prisma.avaliacao.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AvaliacaoUpdateManyArgs>(args: SelectSubset<T, AvaliacaoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Avaliacaos and returns the data updated in the database.
     * @param {AvaliacaoUpdateManyAndReturnArgs} args - Arguments to update many Avaliacaos.
     * @example
     * // Update many Avaliacaos
     * const avaliacao = await prisma.avaliacao.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Avaliacaos and only return the `id`
     * const avaliacaoWithIdOnly = await prisma.avaliacao.updateManyAndReturn({
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
    updateManyAndReturn<T extends AvaliacaoUpdateManyAndReturnArgs>(args: SelectSubset<T, AvaliacaoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Avaliacao.
     * @param {AvaliacaoUpsertArgs} args - Arguments to update or create a Avaliacao.
     * @example
     * // Update or create a Avaliacao
     * const avaliacao = await prisma.avaliacao.upsert({
     *   create: {
     *     // ... data to create a Avaliacao
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Avaliacao we want to update
     *   }
     * })
     */
    upsert<T extends AvaliacaoUpsertArgs>(args: SelectSubset<T, AvaliacaoUpsertArgs<ExtArgs>>): Prisma__AvaliacaoClient<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Avaliacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvaliacaoCountArgs} args - Arguments to filter Avaliacaos to count.
     * @example
     * // Count the number of Avaliacaos
     * const count = await prisma.avaliacao.count({
     *   where: {
     *     // ... the filter for the Avaliacaos we want to count
     *   }
     * })
    **/
    count<T extends AvaliacaoCountArgs>(
      args?: Subset<T, AvaliacaoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AvaliacaoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Avaliacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvaliacaoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AvaliacaoAggregateArgs>(args: Subset<T, AvaliacaoAggregateArgs>): Prisma.PrismaPromise<GetAvaliacaoAggregateType<T>>

    /**
     * Group by Avaliacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvaliacaoGroupByArgs} args - Group by arguments.
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
      T extends AvaliacaoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AvaliacaoGroupByArgs['orderBy'] }
        : { orderBy?: AvaliacaoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AvaliacaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAvaliacaoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Avaliacao model
   */
  readonly fields: AvaliacaoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Avaliacao.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AvaliacaoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    reserva<T extends ReservaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ReservaDefaultArgs<ExtArgs>>): Prisma__ReservaClient<$Result.GetResult<Prisma.$ReservaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    hospede<T extends HospedeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, HospedeDefaultArgs<ExtArgs>>): Prisma__HospedeClient<$Result.GetResult<Prisma.$HospedePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    casa<T extends CasaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CasaDefaultArgs<ExtArgs>>): Prisma__CasaClient<$Result.GetResult<Prisma.$CasaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Avaliacao model
   */
  interface AvaliacaoFieldRefs {
    readonly id: FieldRef<"Avaliacao", 'Int'>
    readonly nota: FieldRef<"Avaliacao", 'Int'>
    readonly comentario: FieldRef<"Avaliacao", 'String'>
    readonly reservaId: FieldRef<"Avaliacao", 'Int'>
    readonly hospedeId: FieldRef<"Avaliacao", 'Int'>
    readonly casaId: FieldRef<"Avaliacao", 'Int'>
    readonly createdAt: FieldRef<"Avaliacao", 'DateTime'>
    readonly updatedAt: FieldRef<"Avaliacao", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Avaliacao findUnique
   */
  export type AvaliacaoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avaliacao
     */
    omit?: AvaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoInclude<ExtArgs> | null
    /**
     * Filter, which Avaliacao to fetch.
     */
    where: AvaliacaoWhereUniqueInput
  }

  /**
   * Avaliacao findUniqueOrThrow
   */
  export type AvaliacaoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avaliacao
     */
    omit?: AvaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoInclude<ExtArgs> | null
    /**
     * Filter, which Avaliacao to fetch.
     */
    where: AvaliacaoWhereUniqueInput
  }

  /**
   * Avaliacao findFirst
   */
  export type AvaliacaoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avaliacao
     */
    omit?: AvaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoInclude<ExtArgs> | null
    /**
     * Filter, which Avaliacao to fetch.
     */
    where?: AvaliacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Avaliacaos to fetch.
     */
    orderBy?: AvaliacaoOrderByWithRelationInput | AvaliacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Avaliacaos.
     */
    cursor?: AvaliacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Avaliacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Avaliacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Avaliacaos.
     */
    distinct?: AvaliacaoScalarFieldEnum | AvaliacaoScalarFieldEnum[]
  }

  /**
   * Avaliacao findFirstOrThrow
   */
  export type AvaliacaoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avaliacao
     */
    omit?: AvaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoInclude<ExtArgs> | null
    /**
     * Filter, which Avaliacao to fetch.
     */
    where?: AvaliacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Avaliacaos to fetch.
     */
    orderBy?: AvaliacaoOrderByWithRelationInput | AvaliacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Avaliacaos.
     */
    cursor?: AvaliacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Avaliacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Avaliacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Avaliacaos.
     */
    distinct?: AvaliacaoScalarFieldEnum | AvaliacaoScalarFieldEnum[]
  }

  /**
   * Avaliacao findMany
   */
  export type AvaliacaoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avaliacao
     */
    omit?: AvaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoInclude<ExtArgs> | null
    /**
     * Filter, which Avaliacaos to fetch.
     */
    where?: AvaliacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Avaliacaos to fetch.
     */
    orderBy?: AvaliacaoOrderByWithRelationInput | AvaliacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Avaliacaos.
     */
    cursor?: AvaliacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Avaliacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Avaliacaos.
     */
    skip?: number
    distinct?: AvaliacaoScalarFieldEnum | AvaliacaoScalarFieldEnum[]
  }

  /**
   * Avaliacao create
   */
  export type AvaliacaoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avaliacao
     */
    omit?: AvaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoInclude<ExtArgs> | null
    /**
     * The data needed to create a Avaliacao.
     */
    data: XOR<AvaliacaoCreateInput, AvaliacaoUncheckedCreateInput>
  }

  /**
   * Avaliacao createMany
   */
  export type AvaliacaoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Avaliacaos.
     */
    data: AvaliacaoCreateManyInput | AvaliacaoCreateManyInput[]
  }

  /**
   * Avaliacao createManyAndReturn
   */
  export type AvaliacaoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Avaliacao
     */
    omit?: AvaliacaoOmit<ExtArgs> | null
    /**
     * The data used to create many Avaliacaos.
     */
    data: AvaliacaoCreateManyInput | AvaliacaoCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Avaliacao update
   */
  export type AvaliacaoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avaliacao
     */
    omit?: AvaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoInclude<ExtArgs> | null
    /**
     * The data needed to update a Avaliacao.
     */
    data: XOR<AvaliacaoUpdateInput, AvaliacaoUncheckedUpdateInput>
    /**
     * Choose, which Avaliacao to update.
     */
    where: AvaliacaoWhereUniqueInput
  }

  /**
   * Avaliacao updateMany
   */
  export type AvaliacaoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Avaliacaos.
     */
    data: XOR<AvaliacaoUpdateManyMutationInput, AvaliacaoUncheckedUpdateManyInput>
    /**
     * Filter which Avaliacaos to update
     */
    where?: AvaliacaoWhereInput
    /**
     * Limit how many Avaliacaos to update.
     */
    limit?: number
  }

  /**
   * Avaliacao updateManyAndReturn
   */
  export type AvaliacaoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Avaliacao
     */
    omit?: AvaliacaoOmit<ExtArgs> | null
    /**
     * The data used to update Avaliacaos.
     */
    data: XOR<AvaliacaoUpdateManyMutationInput, AvaliacaoUncheckedUpdateManyInput>
    /**
     * Filter which Avaliacaos to update
     */
    where?: AvaliacaoWhereInput
    /**
     * Limit how many Avaliacaos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Avaliacao upsert
   */
  export type AvaliacaoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avaliacao
     */
    omit?: AvaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoInclude<ExtArgs> | null
    /**
     * The filter to search for the Avaliacao to update in case it exists.
     */
    where: AvaliacaoWhereUniqueInput
    /**
     * In case the Avaliacao found by the `where` argument doesn't exist, create a new Avaliacao with this data.
     */
    create: XOR<AvaliacaoCreateInput, AvaliacaoUncheckedCreateInput>
    /**
     * In case the Avaliacao was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AvaliacaoUpdateInput, AvaliacaoUncheckedUpdateInput>
  }

  /**
   * Avaliacao delete
   */
  export type AvaliacaoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avaliacao
     */
    omit?: AvaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoInclude<ExtArgs> | null
    /**
     * Filter which Avaliacao to delete.
     */
    where: AvaliacaoWhereUniqueInput
  }

  /**
   * Avaliacao deleteMany
   */
  export type AvaliacaoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Avaliacaos to delete
     */
    where?: AvaliacaoWhereInput
    /**
     * Limit how many Avaliacaos to delete.
     */
    limit?: number
  }

  /**
   * Avaliacao without action
   */
  export type AvaliacaoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avaliacao
     */
    omit?: AvaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AdminScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    senha: 'senha'
  };

  export type AdminScalarFieldEnum = (typeof AdminScalarFieldEnum)[keyof typeof AdminScalarFieldEnum]


  export const CasaScalarFieldEnum: {
    id: 'id',
    endereco: 'endereco',
    numero: 'numero',
    cep: 'cep',
    cidade: 'cidade',
    estado: 'estado',
    diretrizes: 'diretrizes',
    complemento: 'complemento',
    precoPorNoite: 'precoPorNoite',
    locadorId: 'locadorId'
  };

  export type CasaScalarFieldEnum = (typeof CasaScalarFieldEnum)[keyof typeof CasaScalarFieldEnum]


  export const ImagemCasaScalarFieldEnum: {
    id: 'id',
    url: 'url',
    casaId: 'casaId',
    createdAt: 'createdAt'
  };

  export type ImagemCasaScalarFieldEnum = (typeof ImagemCasaScalarFieldEnum)[keyof typeof ImagemCasaScalarFieldEnum]


  export const BloqueioDisponibilidadeScalarFieldEnum: {
    id: 'id',
    dataInicio: 'dataInicio',
    dataFim: 'dataFim',
    motivo: 'motivo',
    casaId: 'casaId',
    createdAt: 'createdAt'
  };

  export type BloqueioDisponibilidadeScalarFieldEnum = (typeof BloqueioDisponibilidadeScalarFieldEnum)[keyof typeof BloqueioDisponibilidadeScalarFieldEnum]


  export const LocadorScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    senha: 'senha',
    cpf: 'cpf',
    endereco: 'endereco',
    cep: 'cep',
    cidade: 'cidade',
    estado: 'estado'
  };

  export type LocadorScalarFieldEnum = (typeof LocadorScalarFieldEnum)[keyof typeof LocadorScalarFieldEnum]


  export const HospedeScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    senha: 'senha',
    cpf: 'cpf',
    cep: 'cep',
    cidade: 'cidade',
    estado: 'estado',
    matricula: 'matricula',
    universidade: 'universidade'
  };

  export type HospedeScalarFieldEnum = (typeof HospedeScalarFieldEnum)[keyof typeof HospedeScalarFieldEnum]


  export const ReservaScalarFieldEnum: {
    id: 'id',
    dataCheckIn: 'dataCheckIn',
    dataCheckOut: 'dataCheckOut',
    status: 'status',
    numeroHospedes: 'numeroHospedes',
    valorTotal: 'valorTotal',
    observacoes: 'observacoes',
    valorTotalCalculado: 'valorTotalCalculado',
    statusPagamento: 'statusPagamento',
    hospedeId: 'hospedeId',
    casaId: 'casaId',
    locadorId: 'locadorId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ReservaScalarFieldEnum = (typeof ReservaScalarFieldEnum)[keyof typeof ReservaScalarFieldEnum]


  export const FavoritoScalarFieldEnum: {
    id: 'id',
    hospedeId: 'hospedeId',
    casaId: 'casaId',
    createdAt: 'createdAt'
  };

  export type FavoritoScalarFieldEnum = (typeof FavoritoScalarFieldEnum)[keyof typeof FavoritoScalarFieldEnum]


  export const ConversaScalarFieldEnum: {
    id: 'id',
    hospedeId: 'hospedeId',
    locadorId: 'locadorId',
    casaId: 'casaId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ConversaScalarFieldEnum = (typeof ConversaScalarFieldEnum)[keyof typeof ConversaScalarFieldEnum]


  export const MensagemScalarFieldEnum: {
    id: 'id',
    conteudo: 'conteudo',
    createdAt: 'createdAt',
    conversaId: 'conversaId',
    remetenteHospedeId: 'remetenteHospedeId',
    remetenteLocadorId: 'remetenteLocadorId',
    lidaPeloHospede: 'lidaPeloHospede',
    lidaPeloLocador: 'lidaPeloLocador'
  };

  export type MensagemScalarFieldEnum = (typeof MensagemScalarFieldEnum)[keyof typeof MensagemScalarFieldEnum]


  export const AvaliacaoScalarFieldEnum: {
    id: 'id',
    nota: 'nota',
    comentario: 'comentario',
    reservaId: 'reservaId',
    hospedeId: 'hospedeId',
    casaId: 'casaId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AvaliacaoScalarFieldEnum = (typeof AvaliacaoScalarFieldEnum)[keyof typeof AvaliacaoScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type AdminWhereInput = {
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    id?: IntFilter<"Admin"> | number
    name?: StringNullableFilter<"Admin"> | string | null
    email?: StringFilter<"Admin"> | string
    senha?: StringFilter<"Admin"> | string
  }

  export type AdminOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
    senha?: SortOrder
  }

  export type AdminWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    name?: StringNullableFilter<"Admin"> | string | null
    senha?: StringFilter<"Admin"> | string
  }, "id" | "email">

  export type AdminOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
    senha?: SortOrder
    _count?: AdminCountOrderByAggregateInput
    _avg?: AdminAvgOrderByAggregateInput
    _max?: AdminMaxOrderByAggregateInput
    _min?: AdminMinOrderByAggregateInput
    _sum?: AdminSumOrderByAggregateInput
  }

  export type AdminScalarWhereWithAggregatesInput = {
    AND?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    OR?: AdminScalarWhereWithAggregatesInput[]
    NOT?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Admin"> | number
    name?: StringNullableWithAggregatesFilter<"Admin"> | string | null
    email?: StringWithAggregatesFilter<"Admin"> | string
    senha?: StringWithAggregatesFilter<"Admin"> | string
  }

  export type CasaWhereInput = {
    AND?: CasaWhereInput | CasaWhereInput[]
    OR?: CasaWhereInput[]
    NOT?: CasaWhereInput | CasaWhereInput[]
    id?: IntFilter<"Casa"> | number
    endereco?: StringFilter<"Casa"> | string
    numero?: IntFilter<"Casa"> | number
    cep?: StringNullableFilter<"Casa"> | string | null
    cidade?: StringNullableFilter<"Casa"> | string | null
    estado?: StringNullableFilter<"Casa"> | string | null
    diretrizes?: StringFilter<"Casa"> | string
    complemento?: StringNullableFilter<"Casa"> | string | null
    precoPorNoite?: FloatNullableFilter<"Casa"> | number | null
    locadorId?: IntFilter<"Casa"> | number
    locador?: XOR<LocadorScalarRelationFilter, LocadorWhereInput>
    reservas?: ReservaListRelationFilter
    favoritos?: FavoritoListRelationFilter
    imagens?: ImagemCasaListRelationFilter
    conversas?: ConversaListRelationFilter
    bloqueiosDisponibilidade?: BloqueioDisponibilidadeListRelationFilter
    avaliacoes?: AvaliacaoListRelationFilter
  }

  export type CasaOrderByWithRelationInput = {
    id?: SortOrder
    endereco?: SortOrder
    numero?: SortOrder
    cep?: SortOrderInput | SortOrder
    cidade?: SortOrderInput | SortOrder
    estado?: SortOrderInput | SortOrder
    diretrizes?: SortOrder
    complemento?: SortOrderInput | SortOrder
    precoPorNoite?: SortOrderInput | SortOrder
    locadorId?: SortOrder
    locador?: LocadorOrderByWithRelationInput
    reservas?: ReservaOrderByRelationAggregateInput
    favoritos?: FavoritoOrderByRelationAggregateInput
    imagens?: ImagemCasaOrderByRelationAggregateInput
    conversas?: ConversaOrderByRelationAggregateInput
    bloqueiosDisponibilidade?: BloqueioDisponibilidadeOrderByRelationAggregateInput
    avaliacoes?: AvaliacaoOrderByRelationAggregateInput
  }

  export type CasaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CasaWhereInput | CasaWhereInput[]
    OR?: CasaWhereInput[]
    NOT?: CasaWhereInput | CasaWhereInput[]
    endereco?: StringFilter<"Casa"> | string
    numero?: IntFilter<"Casa"> | number
    cep?: StringNullableFilter<"Casa"> | string | null
    cidade?: StringNullableFilter<"Casa"> | string | null
    estado?: StringNullableFilter<"Casa"> | string | null
    diretrizes?: StringFilter<"Casa"> | string
    complemento?: StringNullableFilter<"Casa"> | string | null
    precoPorNoite?: FloatNullableFilter<"Casa"> | number | null
    locadorId?: IntFilter<"Casa"> | number
    locador?: XOR<LocadorScalarRelationFilter, LocadorWhereInput>
    reservas?: ReservaListRelationFilter
    favoritos?: FavoritoListRelationFilter
    imagens?: ImagemCasaListRelationFilter
    conversas?: ConversaListRelationFilter
    bloqueiosDisponibilidade?: BloqueioDisponibilidadeListRelationFilter
    avaliacoes?: AvaliacaoListRelationFilter
  }, "id">

  export type CasaOrderByWithAggregationInput = {
    id?: SortOrder
    endereco?: SortOrder
    numero?: SortOrder
    cep?: SortOrderInput | SortOrder
    cidade?: SortOrderInput | SortOrder
    estado?: SortOrderInput | SortOrder
    diretrizes?: SortOrder
    complemento?: SortOrderInput | SortOrder
    precoPorNoite?: SortOrderInput | SortOrder
    locadorId?: SortOrder
    _count?: CasaCountOrderByAggregateInput
    _avg?: CasaAvgOrderByAggregateInput
    _max?: CasaMaxOrderByAggregateInput
    _min?: CasaMinOrderByAggregateInput
    _sum?: CasaSumOrderByAggregateInput
  }

  export type CasaScalarWhereWithAggregatesInput = {
    AND?: CasaScalarWhereWithAggregatesInput | CasaScalarWhereWithAggregatesInput[]
    OR?: CasaScalarWhereWithAggregatesInput[]
    NOT?: CasaScalarWhereWithAggregatesInput | CasaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Casa"> | number
    endereco?: StringWithAggregatesFilter<"Casa"> | string
    numero?: IntWithAggregatesFilter<"Casa"> | number
    cep?: StringNullableWithAggregatesFilter<"Casa"> | string | null
    cidade?: StringNullableWithAggregatesFilter<"Casa"> | string | null
    estado?: StringNullableWithAggregatesFilter<"Casa"> | string | null
    diretrizes?: StringWithAggregatesFilter<"Casa"> | string
    complemento?: StringNullableWithAggregatesFilter<"Casa"> | string | null
    precoPorNoite?: FloatNullableWithAggregatesFilter<"Casa"> | number | null
    locadorId?: IntWithAggregatesFilter<"Casa"> | number
  }

  export type ImagemCasaWhereInput = {
    AND?: ImagemCasaWhereInput | ImagemCasaWhereInput[]
    OR?: ImagemCasaWhereInput[]
    NOT?: ImagemCasaWhereInput | ImagemCasaWhereInput[]
    id?: IntFilter<"ImagemCasa"> | number
    url?: StringFilter<"ImagemCasa"> | string
    casaId?: IntFilter<"ImagemCasa"> | number
    createdAt?: DateTimeFilter<"ImagemCasa"> | Date | string
    casa?: XOR<CasaScalarRelationFilter, CasaWhereInput>
  }

  export type ImagemCasaOrderByWithRelationInput = {
    id?: SortOrder
    url?: SortOrder
    casaId?: SortOrder
    createdAt?: SortOrder
    casa?: CasaOrderByWithRelationInput
  }

  export type ImagemCasaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ImagemCasaWhereInput | ImagemCasaWhereInput[]
    OR?: ImagemCasaWhereInput[]
    NOT?: ImagemCasaWhereInput | ImagemCasaWhereInput[]
    url?: StringFilter<"ImagemCasa"> | string
    casaId?: IntFilter<"ImagemCasa"> | number
    createdAt?: DateTimeFilter<"ImagemCasa"> | Date | string
    casa?: XOR<CasaScalarRelationFilter, CasaWhereInput>
  }, "id">

  export type ImagemCasaOrderByWithAggregationInput = {
    id?: SortOrder
    url?: SortOrder
    casaId?: SortOrder
    createdAt?: SortOrder
    _count?: ImagemCasaCountOrderByAggregateInput
    _avg?: ImagemCasaAvgOrderByAggregateInput
    _max?: ImagemCasaMaxOrderByAggregateInput
    _min?: ImagemCasaMinOrderByAggregateInput
    _sum?: ImagemCasaSumOrderByAggregateInput
  }

  export type ImagemCasaScalarWhereWithAggregatesInput = {
    AND?: ImagemCasaScalarWhereWithAggregatesInput | ImagemCasaScalarWhereWithAggregatesInput[]
    OR?: ImagemCasaScalarWhereWithAggregatesInput[]
    NOT?: ImagemCasaScalarWhereWithAggregatesInput | ImagemCasaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ImagemCasa"> | number
    url?: StringWithAggregatesFilter<"ImagemCasa"> | string
    casaId?: IntWithAggregatesFilter<"ImagemCasa"> | number
    createdAt?: DateTimeWithAggregatesFilter<"ImagemCasa"> | Date | string
  }

  export type BloqueioDisponibilidadeWhereInput = {
    AND?: BloqueioDisponibilidadeWhereInput | BloqueioDisponibilidadeWhereInput[]
    OR?: BloqueioDisponibilidadeWhereInput[]
    NOT?: BloqueioDisponibilidadeWhereInput | BloqueioDisponibilidadeWhereInput[]
    id?: IntFilter<"BloqueioDisponibilidade"> | number
    dataInicio?: DateTimeFilter<"BloqueioDisponibilidade"> | Date | string
    dataFim?: DateTimeFilter<"BloqueioDisponibilidade"> | Date | string
    motivo?: StringNullableFilter<"BloqueioDisponibilidade"> | string | null
    casaId?: IntFilter<"BloqueioDisponibilidade"> | number
    createdAt?: DateTimeFilter<"BloqueioDisponibilidade"> | Date | string
    casa?: XOR<CasaScalarRelationFilter, CasaWhereInput>
  }

  export type BloqueioDisponibilidadeOrderByWithRelationInput = {
    id?: SortOrder
    dataInicio?: SortOrder
    dataFim?: SortOrder
    motivo?: SortOrderInput | SortOrder
    casaId?: SortOrder
    createdAt?: SortOrder
    casa?: CasaOrderByWithRelationInput
  }

  export type BloqueioDisponibilidadeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BloqueioDisponibilidadeWhereInput | BloqueioDisponibilidadeWhereInput[]
    OR?: BloqueioDisponibilidadeWhereInput[]
    NOT?: BloqueioDisponibilidadeWhereInput | BloqueioDisponibilidadeWhereInput[]
    dataInicio?: DateTimeFilter<"BloqueioDisponibilidade"> | Date | string
    dataFim?: DateTimeFilter<"BloqueioDisponibilidade"> | Date | string
    motivo?: StringNullableFilter<"BloqueioDisponibilidade"> | string | null
    casaId?: IntFilter<"BloqueioDisponibilidade"> | number
    createdAt?: DateTimeFilter<"BloqueioDisponibilidade"> | Date | string
    casa?: XOR<CasaScalarRelationFilter, CasaWhereInput>
  }, "id">

  export type BloqueioDisponibilidadeOrderByWithAggregationInput = {
    id?: SortOrder
    dataInicio?: SortOrder
    dataFim?: SortOrder
    motivo?: SortOrderInput | SortOrder
    casaId?: SortOrder
    createdAt?: SortOrder
    _count?: BloqueioDisponibilidadeCountOrderByAggregateInput
    _avg?: BloqueioDisponibilidadeAvgOrderByAggregateInput
    _max?: BloqueioDisponibilidadeMaxOrderByAggregateInput
    _min?: BloqueioDisponibilidadeMinOrderByAggregateInput
    _sum?: BloqueioDisponibilidadeSumOrderByAggregateInput
  }

  export type BloqueioDisponibilidadeScalarWhereWithAggregatesInput = {
    AND?: BloqueioDisponibilidadeScalarWhereWithAggregatesInput | BloqueioDisponibilidadeScalarWhereWithAggregatesInput[]
    OR?: BloqueioDisponibilidadeScalarWhereWithAggregatesInput[]
    NOT?: BloqueioDisponibilidadeScalarWhereWithAggregatesInput | BloqueioDisponibilidadeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"BloqueioDisponibilidade"> | number
    dataInicio?: DateTimeWithAggregatesFilter<"BloqueioDisponibilidade"> | Date | string
    dataFim?: DateTimeWithAggregatesFilter<"BloqueioDisponibilidade"> | Date | string
    motivo?: StringNullableWithAggregatesFilter<"BloqueioDisponibilidade"> | string | null
    casaId?: IntWithAggregatesFilter<"BloqueioDisponibilidade"> | number
    createdAt?: DateTimeWithAggregatesFilter<"BloqueioDisponibilidade"> | Date | string
  }

  export type LocadorWhereInput = {
    AND?: LocadorWhereInput | LocadorWhereInput[]
    OR?: LocadorWhereInput[]
    NOT?: LocadorWhereInput | LocadorWhereInput[]
    id?: IntFilter<"Locador"> | number
    name?: StringFilter<"Locador"> | string
    email?: StringFilter<"Locador"> | string
    senha?: StringFilter<"Locador"> | string
    cpf?: StringFilter<"Locador"> | string
    endereco?: StringFilter<"Locador"> | string
    cep?: StringNullableFilter<"Locador"> | string | null
    cidade?: StringNullableFilter<"Locador"> | string | null
    estado?: StringNullableFilter<"Locador"> | string | null
    casas?: CasaListRelationFilter
    reservas?: ReservaListRelationFilter
    conversas?: ConversaListRelationFilter
    mensagens?: MensagemListRelationFilter
  }

  export type LocadorOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    cpf?: SortOrder
    endereco?: SortOrder
    cep?: SortOrderInput | SortOrder
    cidade?: SortOrderInput | SortOrder
    estado?: SortOrderInput | SortOrder
    casas?: CasaOrderByRelationAggregateInput
    reservas?: ReservaOrderByRelationAggregateInput
    conversas?: ConversaOrderByRelationAggregateInput
    mensagens?: MensagemOrderByRelationAggregateInput
  }

  export type LocadorWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    cpf?: string
    AND?: LocadorWhereInput | LocadorWhereInput[]
    OR?: LocadorWhereInput[]
    NOT?: LocadorWhereInput | LocadorWhereInput[]
    name?: StringFilter<"Locador"> | string
    senha?: StringFilter<"Locador"> | string
    endereco?: StringFilter<"Locador"> | string
    cep?: StringNullableFilter<"Locador"> | string | null
    cidade?: StringNullableFilter<"Locador"> | string | null
    estado?: StringNullableFilter<"Locador"> | string | null
    casas?: CasaListRelationFilter
    reservas?: ReservaListRelationFilter
    conversas?: ConversaListRelationFilter
    mensagens?: MensagemListRelationFilter
  }, "id" | "email" | "cpf">

  export type LocadorOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    cpf?: SortOrder
    endereco?: SortOrder
    cep?: SortOrderInput | SortOrder
    cidade?: SortOrderInput | SortOrder
    estado?: SortOrderInput | SortOrder
    _count?: LocadorCountOrderByAggregateInput
    _avg?: LocadorAvgOrderByAggregateInput
    _max?: LocadorMaxOrderByAggregateInput
    _min?: LocadorMinOrderByAggregateInput
    _sum?: LocadorSumOrderByAggregateInput
  }

  export type LocadorScalarWhereWithAggregatesInput = {
    AND?: LocadorScalarWhereWithAggregatesInput | LocadorScalarWhereWithAggregatesInput[]
    OR?: LocadorScalarWhereWithAggregatesInput[]
    NOT?: LocadorScalarWhereWithAggregatesInput | LocadorScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Locador"> | number
    name?: StringWithAggregatesFilter<"Locador"> | string
    email?: StringWithAggregatesFilter<"Locador"> | string
    senha?: StringWithAggregatesFilter<"Locador"> | string
    cpf?: StringWithAggregatesFilter<"Locador"> | string
    endereco?: StringWithAggregatesFilter<"Locador"> | string
    cep?: StringNullableWithAggregatesFilter<"Locador"> | string | null
    cidade?: StringNullableWithAggregatesFilter<"Locador"> | string | null
    estado?: StringNullableWithAggregatesFilter<"Locador"> | string | null
  }

  export type HospedeWhereInput = {
    AND?: HospedeWhereInput | HospedeWhereInput[]
    OR?: HospedeWhereInput[]
    NOT?: HospedeWhereInput | HospedeWhereInput[]
    id?: IntFilter<"Hospede"> | number
    name?: StringFilter<"Hospede"> | string
    email?: StringFilter<"Hospede"> | string
    senha?: StringFilter<"Hospede"> | string
    cpf?: StringFilter<"Hospede"> | string
    cep?: StringNullableFilter<"Hospede"> | string | null
    cidade?: StringNullableFilter<"Hospede"> | string | null
    estado?: StringNullableFilter<"Hospede"> | string | null
    matricula?: StringFilter<"Hospede"> | string
    universidade?: StringNullableFilter<"Hospede"> | string | null
    reservas?: ReservaListRelationFilter
    favoritos?: FavoritoListRelationFilter
    conversas?: ConversaListRelationFilter
    mensagens?: MensagemListRelationFilter
    avaliacoesFeitas?: AvaliacaoListRelationFilter
  }

  export type HospedeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    cpf?: SortOrder
    cep?: SortOrderInput | SortOrder
    cidade?: SortOrderInput | SortOrder
    estado?: SortOrderInput | SortOrder
    matricula?: SortOrder
    universidade?: SortOrderInput | SortOrder
    reservas?: ReservaOrderByRelationAggregateInput
    favoritos?: FavoritoOrderByRelationAggregateInput
    conversas?: ConversaOrderByRelationAggregateInput
    mensagens?: MensagemOrderByRelationAggregateInput
    avaliacoesFeitas?: AvaliacaoOrderByRelationAggregateInput
  }

  export type HospedeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    cpf?: string
    matricula?: string
    AND?: HospedeWhereInput | HospedeWhereInput[]
    OR?: HospedeWhereInput[]
    NOT?: HospedeWhereInput | HospedeWhereInput[]
    name?: StringFilter<"Hospede"> | string
    senha?: StringFilter<"Hospede"> | string
    cep?: StringNullableFilter<"Hospede"> | string | null
    cidade?: StringNullableFilter<"Hospede"> | string | null
    estado?: StringNullableFilter<"Hospede"> | string | null
    universidade?: StringNullableFilter<"Hospede"> | string | null
    reservas?: ReservaListRelationFilter
    favoritos?: FavoritoListRelationFilter
    conversas?: ConversaListRelationFilter
    mensagens?: MensagemListRelationFilter
    avaliacoesFeitas?: AvaliacaoListRelationFilter
  }, "id" | "email" | "cpf" | "matricula">

  export type HospedeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    cpf?: SortOrder
    cep?: SortOrderInput | SortOrder
    cidade?: SortOrderInput | SortOrder
    estado?: SortOrderInput | SortOrder
    matricula?: SortOrder
    universidade?: SortOrderInput | SortOrder
    _count?: HospedeCountOrderByAggregateInput
    _avg?: HospedeAvgOrderByAggregateInput
    _max?: HospedeMaxOrderByAggregateInput
    _min?: HospedeMinOrderByAggregateInput
    _sum?: HospedeSumOrderByAggregateInput
  }

  export type HospedeScalarWhereWithAggregatesInput = {
    AND?: HospedeScalarWhereWithAggregatesInput | HospedeScalarWhereWithAggregatesInput[]
    OR?: HospedeScalarWhereWithAggregatesInput[]
    NOT?: HospedeScalarWhereWithAggregatesInput | HospedeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Hospede"> | number
    name?: StringWithAggregatesFilter<"Hospede"> | string
    email?: StringWithAggregatesFilter<"Hospede"> | string
    senha?: StringWithAggregatesFilter<"Hospede"> | string
    cpf?: StringWithAggregatesFilter<"Hospede"> | string
    cep?: StringNullableWithAggregatesFilter<"Hospede"> | string | null
    cidade?: StringNullableWithAggregatesFilter<"Hospede"> | string | null
    estado?: StringNullableWithAggregatesFilter<"Hospede"> | string | null
    matricula?: StringWithAggregatesFilter<"Hospede"> | string
    universidade?: StringNullableWithAggregatesFilter<"Hospede"> | string | null
  }

  export type ReservaWhereInput = {
    AND?: ReservaWhereInput | ReservaWhereInput[]
    OR?: ReservaWhereInput[]
    NOT?: ReservaWhereInput | ReservaWhereInput[]
    id?: IntFilter<"Reserva"> | number
    dataCheckIn?: DateTimeFilter<"Reserva"> | Date | string
    dataCheckOut?: DateTimeFilter<"Reserva"> | Date | string
    status?: StringFilter<"Reserva"> | string
    numeroHospedes?: IntNullableFilter<"Reserva"> | number | null
    valorTotal?: FloatNullableFilter<"Reserva"> | number | null
    observacoes?: StringNullableFilter<"Reserva"> | string | null
    valorTotalCalculado?: FloatNullableFilter<"Reserva"> | number | null
    statusPagamento?: StringNullableFilter<"Reserva"> | string | null
    hospedeId?: IntFilter<"Reserva"> | number
    casaId?: IntFilter<"Reserva"> | number
    locadorId?: IntFilter<"Reserva"> | number
    createdAt?: DateTimeFilter<"Reserva"> | Date | string
    updatedAt?: DateTimeFilter<"Reserva"> | Date | string
    hospede?: XOR<HospedeScalarRelationFilter, HospedeWhereInput>
    casa?: XOR<CasaScalarRelationFilter, CasaWhereInput>
    locador?: XOR<LocadorScalarRelationFilter, LocadorWhereInput>
    avaliacao?: XOR<AvaliacaoNullableScalarRelationFilter, AvaliacaoWhereInput> | null
  }

  export type ReservaOrderByWithRelationInput = {
    id?: SortOrder
    dataCheckIn?: SortOrder
    dataCheckOut?: SortOrder
    status?: SortOrder
    numeroHospedes?: SortOrderInput | SortOrder
    valorTotal?: SortOrderInput | SortOrder
    observacoes?: SortOrderInput | SortOrder
    valorTotalCalculado?: SortOrderInput | SortOrder
    statusPagamento?: SortOrderInput | SortOrder
    hospedeId?: SortOrder
    casaId?: SortOrder
    locadorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    hospede?: HospedeOrderByWithRelationInput
    casa?: CasaOrderByWithRelationInput
    locador?: LocadorOrderByWithRelationInput
    avaliacao?: AvaliacaoOrderByWithRelationInput
  }

  export type ReservaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ReservaWhereInput | ReservaWhereInput[]
    OR?: ReservaWhereInput[]
    NOT?: ReservaWhereInput | ReservaWhereInput[]
    dataCheckIn?: DateTimeFilter<"Reserva"> | Date | string
    dataCheckOut?: DateTimeFilter<"Reserva"> | Date | string
    status?: StringFilter<"Reserva"> | string
    numeroHospedes?: IntNullableFilter<"Reserva"> | number | null
    valorTotal?: FloatNullableFilter<"Reserva"> | number | null
    observacoes?: StringNullableFilter<"Reserva"> | string | null
    valorTotalCalculado?: FloatNullableFilter<"Reserva"> | number | null
    statusPagamento?: StringNullableFilter<"Reserva"> | string | null
    hospedeId?: IntFilter<"Reserva"> | number
    casaId?: IntFilter<"Reserva"> | number
    locadorId?: IntFilter<"Reserva"> | number
    createdAt?: DateTimeFilter<"Reserva"> | Date | string
    updatedAt?: DateTimeFilter<"Reserva"> | Date | string
    hospede?: XOR<HospedeScalarRelationFilter, HospedeWhereInput>
    casa?: XOR<CasaScalarRelationFilter, CasaWhereInput>
    locador?: XOR<LocadorScalarRelationFilter, LocadorWhereInput>
    avaliacao?: XOR<AvaliacaoNullableScalarRelationFilter, AvaliacaoWhereInput> | null
  }, "id">

  export type ReservaOrderByWithAggregationInput = {
    id?: SortOrder
    dataCheckIn?: SortOrder
    dataCheckOut?: SortOrder
    status?: SortOrder
    numeroHospedes?: SortOrderInput | SortOrder
    valorTotal?: SortOrderInput | SortOrder
    observacoes?: SortOrderInput | SortOrder
    valorTotalCalculado?: SortOrderInput | SortOrder
    statusPagamento?: SortOrderInput | SortOrder
    hospedeId?: SortOrder
    casaId?: SortOrder
    locadorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ReservaCountOrderByAggregateInput
    _avg?: ReservaAvgOrderByAggregateInput
    _max?: ReservaMaxOrderByAggregateInput
    _min?: ReservaMinOrderByAggregateInput
    _sum?: ReservaSumOrderByAggregateInput
  }

  export type ReservaScalarWhereWithAggregatesInput = {
    AND?: ReservaScalarWhereWithAggregatesInput | ReservaScalarWhereWithAggregatesInput[]
    OR?: ReservaScalarWhereWithAggregatesInput[]
    NOT?: ReservaScalarWhereWithAggregatesInput | ReservaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Reserva"> | number
    dataCheckIn?: DateTimeWithAggregatesFilter<"Reserva"> | Date | string
    dataCheckOut?: DateTimeWithAggregatesFilter<"Reserva"> | Date | string
    status?: StringWithAggregatesFilter<"Reserva"> | string
    numeroHospedes?: IntNullableWithAggregatesFilter<"Reserva"> | number | null
    valorTotal?: FloatNullableWithAggregatesFilter<"Reserva"> | number | null
    observacoes?: StringNullableWithAggregatesFilter<"Reserva"> | string | null
    valorTotalCalculado?: FloatNullableWithAggregatesFilter<"Reserva"> | number | null
    statusPagamento?: StringNullableWithAggregatesFilter<"Reserva"> | string | null
    hospedeId?: IntWithAggregatesFilter<"Reserva"> | number
    casaId?: IntWithAggregatesFilter<"Reserva"> | number
    locadorId?: IntWithAggregatesFilter<"Reserva"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Reserva"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Reserva"> | Date | string
  }

  export type FavoritoWhereInput = {
    AND?: FavoritoWhereInput | FavoritoWhereInput[]
    OR?: FavoritoWhereInput[]
    NOT?: FavoritoWhereInput | FavoritoWhereInput[]
    id?: IntFilter<"Favorito"> | number
    hospedeId?: IntFilter<"Favorito"> | number
    casaId?: IntFilter<"Favorito"> | number
    createdAt?: DateTimeFilter<"Favorito"> | Date | string
    hospede?: XOR<HospedeScalarRelationFilter, HospedeWhereInput>
    casa?: XOR<CasaScalarRelationFilter, CasaWhereInput>
  }

  export type FavoritoOrderByWithRelationInput = {
    id?: SortOrder
    hospedeId?: SortOrder
    casaId?: SortOrder
    createdAt?: SortOrder
    hospede?: HospedeOrderByWithRelationInput
    casa?: CasaOrderByWithRelationInput
  }

  export type FavoritoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    hospede_casa_favorito_unique?: FavoritoHospede_casa_favorito_uniqueCompoundUniqueInput
    AND?: FavoritoWhereInput | FavoritoWhereInput[]
    OR?: FavoritoWhereInput[]
    NOT?: FavoritoWhereInput | FavoritoWhereInput[]
    hospedeId?: IntFilter<"Favorito"> | number
    casaId?: IntFilter<"Favorito"> | number
    createdAt?: DateTimeFilter<"Favorito"> | Date | string
    hospede?: XOR<HospedeScalarRelationFilter, HospedeWhereInput>
    casa?: XOR<CasaScalarRelationFilter, CasaWhereInput>
  }, "id" | "hospede_casa_favorito_unique">

  export type FavoritoOrderByWithAggregationInput = {
    id?: SortOrder
    hospedeId?: SortOrder
    casaId?: SortOrder
    createdAt?: SortOrder
    _count?: FavoritoCountOrderByAggregateInput
    _avg?: FavoritoAvgOrderByAggregateInput
    _max?: FavoritoMaxOrderByAggregateInput
    _min?: FavoritoMinOrderByAggregateInput
    _sum?: FavoritoSumOrderByAggregateInput
  }

  export type FavoritoScalarWhereWithAggregatesInput = {
    AND?: FavoritoScalarWhereWithAggregatesInput | FavoritoScalarWhereWithAggregatesInput[]
    OR?: FavoritoScalarWhereWithAggregatesInput[]
    NOT?: FavoritoScalarWhereWithAggregatesInput | FavoritoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Favorito"> | number
    hospedeId?: IntWithAggregatesFilter<"Favorito"> | number
    casaId?: IntWithAggregatesFilter<"Favorito"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Favorito"> | Date | string
  }

  export type ConversaWhereInput = {
    AND?: ConversaWhereInput | ConversaWhereInput[]
    OR?: ConversaWhereInput[]
    NOT?: ConversaWhereInput | ConversaWhereInput[]
    id?: IntFilter<"Conversa"> | number
    hospedeId?: IntFilter<"Conversa"> | number
    locadorId?: IntFilter<"Conversa"> | number
    casaId?: IntNullableFilter<"Conversa"> | number | null
    createdAt?: DateTimeFilter<"Conversa"> | Date | string
    updatedAt?: DateTimeFilter<"Conversa"> | Date | string
    hospede?: XOR<HospedeScalarRelationFilter, HospedeWhereInput>
    locador?: XOR<LocadorScalarRelationFilter, LocadorWhereInput>
    casa?: XOR<CasaNullableScalarRelationFilter, CasaWhereInput> | null
    mensagens?: MensagemListRelationFilter
  }

  export type ConversaOrderByWithRelationInput = {
    id?: SortOrder
    hospedeId?: SortOrder
    locadorId?: SortOrder
    casaId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    hospede?: HospedeOrderByWithRelationInput
    locador?: LocadorOrderByWithRelationInput
    casa?: CasaOrderByWithRelationInput
    mensagens?: MensagemOrderByRelationAggregateInput
  }

  export type ConversaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    hospedeId_locadorId_casaId?: ConversaHospedeIdLocadorIdCasaIdCompoundUniqueInput
    AND?: ConversaWhereInput | ConversaWhereInput[]
    OR?: ConversaWhereInput[]
    NOT?: ConversaWhereInput | ConversaWhereInput[]
    hospedeId?: IntFilter<"Conversa"> | number
    locadorId?: IntFilter<"Conversa"> | number
    casaId?: IntNullableFilter<"Conversa"> | number | null
    createdAt?: DateTimeFilter<"Conversa"> | Date | string
    updatedAt?: DateTimeFilter<"Conversa"> | Date | string
    hospede?: XOR<HospedeScalarRelationFilter, HospedeWhereInput>
    locador?: XOR<LocadorScalarRelationFilter, LocadorWhereInput>
    casa?: XOR<CasaNullableScalarRelationFilter, CasaWhereInput> | null
    mensagens?: MensagemListRelationFilter
  }, "id" | "hospedeId_locadorId_casaId">

  export type ConversaOrderByWithAggregationInput = {
    id?: SortOrder
    hospedeId?: SortOrder
    locadorId?: SortOrder
    casaId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ConversaCountOrderByAggregateInput
    _avg?: ConversaAvgOrderByAggregateInput
    _max?: ConversaMaxOrderByAggregateInput
    _min?: ConversaMinOrderByAggregateInput
    _sum?: ConversaSumOrderByAggregateInput
  }

  export type ConversaScalarWhereWithAggregatesInput = {
    AND?: ConversaScalarWhereWithAggregatesInput | ConversaScalarWhereWithAggregatesInput[]
    OR?: ConversaScalarWhereWithAggregatesInput[]
    NOT?: ConversaScalarWhereWithAggregatesInput | ConversaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Conversa"> | number
    hospedeId?: IntWithAggregatesFilter<"Conversa"> | number
    locadorId?: IntWithAggregatesFilter<"Conversa"> | number
    casaId?: IntNullableWithAggregatesFilter<"Conversa"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Conversa"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Conversa"> | Date | string
  }

  export type MensagemWhereInput = {
    AND?: MensagemWhereInput | MensagemWhereInput[]
    OR?: MensagemWhereInput[]
    NOT?: MensagemWhereInput | MensagemWhereInput[]
    id?: IntFilter<"Mensagem"> | number
    conteudo?: StringFilter<"Mensagem"> | string
    createdAt?: DateTimeFilter<"Mensagem"> | Date | string
    conversaId?: IntFilter<"Mensagem"> | number
    remetenteHospedeId?: IntNullableFilter<"Mensagem"> | number | null
    remetenteLocadorId?: IntNullableFilter<"Mensagem"> | number | null
    lidaPeloHospede?: BoolFilter<"Mensagem"> | boolean
    lidaPeloLocador?: BoolFilter<"Mensagem"> | boolean
    conversa?: XOR<ConversaScalarRelationFilter, ConversaWhereInput>
    remetenteHospede?: XOR<HospedeNullableScalarRelationFilter, HospedeWhereInput> | null
    remetenteLocador?: XOR<LocadorNullableScalarRelationFilter, LocadorWhereInput> | null
  }

  export type MensagemOrderByWithRelationInput = {
    id?: SortOrder
    conteudo?: SortOrder
    createdAt?: SortOrder
    conversaId?: SortOrder
    remetenteHospedeId?: SortOrderInput | SortOrder
    remetenteLocadorId?: SortOrderInput | SortOrder
    lidaPeloHospede?: SortOrder
    lidaPeloLocador?: SortOrder
    conversa?: ConversaOrderByWithRelationInput
    remetenteHospede?: HospedeOrderByWithRelationInput
    remetenteLocador?: LocadorOrderByWithRelationInput
  }

  export type MensagemWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MensagemWhereInput | MensagemWhereInput[]
    OR?: MensagemWhereInput[]
    NOT?: MensagemWhereInput | MensagemWhereInput[]
    conteudo?: StringFilter<"Mensagem"> | string
    createdAt?: DateTimeFilter<"Mensagem"> | Date | string
    conversaId?: IntFilter<"Mensagem"> | number
    remetenteHospedeId?: IntNullableFilter<"Mensagem"> | number | null
    remetenteLocadorId?: IntNullableFilter<"Mensagem"> | number | null
    lidaPeloHospede?: BoolFilter<"Mensagem"> | boolean
    lidaPeloLocador?: BoolFilter<"Mensagem"> | boolean
    conversa?: XOR<ConversaScalarRelationFilter, ConversaWhereInput>
    remetenteHospede?: XOR<HospedeNullableScalarRelationFilter, HospedeWhereInput> | null
    remetenteLocador?: XOR<LocadorNullableScalarRelationFilter, LocadorWhereInput> | null
  }, "id">

  export type MensagemOrderByWithAggregationInput = {
    id?: SortOrder
    conteudo?: SortOrder
    createdAt?: SortOrder
    conversaId?: SortOrder
    remetenteHospedeId?: SortOrderInput | SortOrder
    remetenteLocadorId?: SortOrderInput | SortOrder
    lidaPeloHospede?: SortOrder
    lidaPeloLocador?: SortOrder
    _count?: MensagemCountOrderByAggregateInput
    _avg?: MensagemAvgOrderByAggregateInput
    _max?: MensagemMaxOrderByAggregateInput
    _min?: MensagemMinOrderByAggregateInput
    _sum?: MensagemSumOrderByAggregateInput
  }

  export type MensagemScalarWhereWithAggregatesInput = {
    AND?: MensagemScalarWhereWithAggregatesInput | MensagemScalarWhereWithAggregatesInput[]
    OR?: MensagemScalarWhereWithAggregatesInput[]
    NOT?: MensagemScalarWhereWithAggregatesInput | MensagemScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Mensagem"> | number
    conteudo?: StringWithAggregatesFilter<"Mensagem"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Mensagem"> | Date | string
    conversaId?: IntWithAggregatesFilter<"Mensagem"> | number
    remetenteHospedeId?: IntNullableWithAggregatesFilter<"Mensagem"> | number | null
    remetenteLocadorId?: IntNullableWithAggregatesFilter<"Mensagem"> | number | null
    lidaPeloHospede?: BoolWithAggregatesFilter<"Mensagem"> | boolean
    lidaPeloLocador?: BoolWithAggregatesFilter<"Mensagem"> | boolean
  }

  export type AvaliacaoWhereInput = {
    AND?: AvaliacaoWhereInput | AvaliacaoWhereInput[]
    OR?: AvaliacaoWhereInput[]
    NOT?: AvaliacaoWhereInput | AvaliacaoWhereInput[]
    id?: IntFilter<"Avaliacao"> | number
    nota?: IntFilter<"Avaliacao"> | number
    comentario?: StringNullableFilter<"Avaliacao"> | string | null
    reservaId?: IntFilter<"Avaliacao"> | number
    hospedeId?: IntFilter<"Avaliacao"> | number
    casaId?: IntFilter<"Avaliacao"> | number
    createdAt?: DateTimeFilter<"Avaliacao"> | Date | string
    updatedAt?: DateTimeFilter<"Avaliacao"> | Date | string
    reserva?: XOR<ReservaScalarRelationFilter, ReservaWhereInput>
    hospede?: XOR<HospedeScalarRelationFilter, HospedeWhereInput>
    casa?: XOR<CasaScalarRelationFilter, CasaWhereInput>
  }

  export type AvaliacaoOrderByWithRelationInput = {
    id?: SortOrder
    nota?: SortOrder
    comentario?: SortOrderInput | SortOrder
    reservaId?: SortOrder
    hospedeId?: SortOrder
    casaId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    reserva?: ReservaOrderByWithRelationInput
    hospede?: HospedeOrderByWithRelationInput
    casa?: CasaOrderByWithRelationInput
  }

  export type AvaliacaoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    reservaId?: number
    AND?: AvaliacaoWhereInput | AvaliacaoWhereInput[]
    OR?: AvaliacaoWhereInput[]
    NOT?: AvaliacaoWhereInput | AvaliacaoWhereInput[]
    nota?: IntFilter<"Avaliacao"> | number
    comentario?: StringNullableFilter<"Avaliacao"> | string | null
    hospedeId?: IntFilter<"Avaliacao"> | number
    casaId?: IntFilter<"Avaliacao"> | number
    createdAt?: DateTimeFilter<"Avaliacao"> | Date | string
    updatedAt?: DateTimeFilter<"Avaliacao"> | Date | string
    reserva?: XOR<ReservaScalarRelationFilter, ReservaWhereInput>
    hospede?: XOR<HospedeScalarRelationFilter, HospedeWhereInput>
    casa?: XOR<CasaScalarRelationFilter, CasaWhereInput>
  }, "id" | "reservaId">

  export type AvaliacaoOrderByWithAggregationInput = {
    id?: SortOrder
    nota?: SortOrder
    comentario?: SortOrderInput | SortOrder
    reservaId?: SortOrder
    hospedeId?: SortOrder
    casaId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AvaliacaoCountOrderByAggregateInput
    _avg?: AvaliacaoAvgOrderByAggregateInput
    _max?: AvaliacaoMaxOrderByAggregateInput
    _min?: AvaliacaoMinOrderByAggregateInput
    _sum?: AvaliacaoSumOrderByAggregateInput
  }

  export type AvaliacaoScalarWhereWithAggregatesInput = {
    AND?: AvaliacaoScalarWhereWithAggregatesInput | AvaliacaoScalarWhereWithAggregatesInput[]
    OR?: AvaliacaoScalarWhereWithAggregatesInput[]
    NOT?: AvaliacaoScalarWhereWithAggregatesInput | AvaliacaoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Avaliacao"> | number
    nota?: IntWithAggregatesFilter<"Avaliacao"> | number
    comentario?: StringNullableWithAggregatesFilter<"Avaliacao"> | string | null
    reservaId?: IntWithAggregatesFilter<"Avaliacao"> | number
    hospedeId?: IntWithAggregatesFilter<"Avaliacao"> | number
    casaId?: IntWithAggregatesFilter<"Avaliacao"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Avaliacao"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Avaliacao"> | Date | string
  }

  export type AdminCreateInput = {
    name?: string | null
    email: string
    senha: string
  }

  export type AdminUncheckedCreateInput = {
    id?: number
    name?: string | null
    email: string
    senha: string
  }

  export type AdminUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
  }

  export type AdminUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
  }

  export type AdminCreateManyInput = {
    id?: number
    name?: string | null
    email: string
    senha: string
  }

  export type AdminUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
  }

  export type AdminUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
  }

  export type CasaCreateInput = {
    endereco: string
    numero: number
    cep?: string | null
    cidade?: string | null
    estado?: string | null
    diretrizes: string
    complemento?: string | null
    precoPorNoite?: number | null
    locador: LocadorCreateNestedOneWithoutCasasInput
    reservas?: ReservaCreateNestedManyWithoutCasaInput
    favoritos?: FavoritoCreateNestedManyWithoutCasaInput
    imagens?: ImagemCasaCreateNestedManyWithoutCasaInput
    conversas?: ConversaCreateNestedManyWithoutCasaInput
    bloqueiosDisponibilidade?: BloqueioDisponibilidadeCreateNestedManyWithoutCasaInput
    avaliacoes?: AvaliacaoCreateNestedManyWithoutCasaInput
  }

  export type CasaUncheckedCreateInput = {
    id?: number
    endereco: string
    numero: number
    cep?: string | null
    cidade?: string | null
    estado?: string | null
    diretrizes: string
    complemento?: string | null
    precoPorNoite?: number | null
    locadorId: number
    reservas?: ReservaUncheckedCreateNestedManyWithoutCasaInput
    favoritos?: FavoritoUncheckedCreateNestedManyWithoutCasaInput
    imagens?: ImagemCasaUncheckedCreateNestedManyWithoutCasaInput
    conversas?: ConversaUncheckedCreateNestedManyWithoutCasaInput
    bloqueiosDisponibilidade?: BloqueioDisponibilidadeUncheckedCreateNestedManyWithoutCasaInput
    avaliacoes?: AvaliacaoUncheckedCreateNestedManyWithoutCasaInput
  }

  export type CasaUpdateInput = {
    endereco?: StringFieldUpdateOperationsInput | string
    numero?: IntFieldUpdateOperationsInput | number
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    cidade?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    diretrizes?: StringFieldUpdateOperationsInput | string
    complemento?: NullableStringFieldUpdateOperationsInput | string | null
    precoPorNoite?: NullableFloatFieldUpdateOperationsInput | number | null
    locador?: LocadorUpdateOneRequiredWithoutCasasNestedInput
    reservas?: ReservaUpdateManyWithoutCasaNestedInput
    favoritos?: FavoritoUpdateManyWithoutCasaNestedInput
    imagens?: ImagemCasaUpdateManyWithoutCasaNestedInput
    conversas?: ConversaUpdateManyWithoutCasaNestedInput
    bloqueiosDisponibilidade?: BloqueioDisponibilidadeUpdateManyWithoutCasaNestedInput
    avaliacoes?: AvaliacaoUpdateManyWithoutCasaNestedInput
  }

  export type CasaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    endereco?: StringFieldUpdateOperationsInput | string
    numero?: IntFieldUpdateOperationsInput | number
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    cidade?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    diretrizes?: StringFieldUpdateOperationsInput | string
    complemento?: NullableStringFieldUpdateOperationsInput | string | null
    precoPorNoite?: NullableFloatFieldUpdateOperationsInput | number | null
    locadorId?: IntFieldUpdateOperationsInput | number
    reservas?: ReservaUncheckedUpdateManyWithoutCasaNestedInput
    favoritos?: FavoritoUncheckedUpdateManyWithoutCasaNestedInput
    imagens?: ImagemCasaUncheckedUpdateManyWithoutCasaNestedInput
    conversas?: ConversaUncheckedUpdateManyWithoutCasaNestedInput
    bloqueiosDisponibilidade?: BloqueioDisponibilidadeUncheckedUpdateManyWithoutCasaNestedInput
    avaliacoes?: AvaliacaoUncheckedUpdateManyWithoutCasaNestedInput
  }

  export type CasaCreateManyInput = {
    id?: number
    endereco: string
    numero: number
    cep?: string | null
    cidade?: string | null
    estado?: string | null
    diretrizes: string
    complemento?: string | null
    precoPorNoite?: number | null
    locadorId: number
  }

  export type CasaUpdateManyMutationInput = {
    endereco?: StringFieldUpdateOperationsInput | string
    numero?: IntFieldUpdateOperationsInput | number
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    cidade?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    diretrizes?: StringFieldUpdateOperationsInput | string
    complemento?: NullableStringFieldUpdateOperationsInput | string | null
    precoPorNoite?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type CasaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    endereco?: StringFieldUpdateOperationsInput | string
    numero?: IntFieldUpdateOperationsInput | number
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    cidade?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    diretrizes?: StringFieldUpdateOperationsInput | string
    complemento?: NullableStringFieldUpdateOperationsInput | string | null
    precoPorNoite?: NullableFloatFieldUpdateOperationsInput | number | null
    locadorId?: IntFieldUpdateOperationsInput | number
  }

  export type ImagemCasaCreateInput = {
    url: string
    createdAt?: Date | string
    casa: CasaCreateNestedOneWithoutImagensInput
  }

  export type ImagemCasaUncheckedCreateInput = {
    id?: number
    url: string
    casaId: number
    createdAt?: Date | string
  }

  export type ImagemCasaUpdateInput = {
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    casa?: CasaUpdateOneRequiredWithoutImagensNestedInput
  }

  export type ImagemCasaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    casaId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImagemCasaCreateManyInput = {
    id?: number
    url: string
    casaId: number
    createdAt?: Date | string
  }

  export type ImagemCasaUpdateManyMutationInput = {
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImagemCasaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    casaId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BloqueioDisponibilidadeCreateInput = {
    dataInicio: Date | string
    dataFim: Date | string
    motivo?: string | null
    createdAt?: Date | string
    casa: CasaCreateNestedOneWithoutBloqueiosDisponibilidadeInput
  }

  export type BloqueioDisponibilidadeUncheckedCreateInput = {
    id?: number
    dataInicio: Date | string
    dataFim: Date | string
    motivo?: string | null
    casaId: number
    createdAt?: Date | string
  }

  export type BloqueioDisponibilidadeUpdateInput = {
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: DateTimeFieldUpdateOperationsInput | Date | string
    motivo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    casa?: CasaUpdateOneRequiredWithoutBloqueiosDisponibilidadeNestedInput
  }

  export type BloqueioDisponibilidadeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: DateTimeFieldUpdateOperationsInput | Date | string
    motivo?: NullableStringFieldUpdateOperationsInput | string | null
    casaId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BloqueioDisponibilidadeCreateManyInput = {
    id?: number
    dataInicio: Date | string
    dataFim: Date | string
    motivo?: string | null
    casaId: number
    createdAt?: Date | string
  }

  export type BloqueioDisponibilidadeUpdateManyMutationInput = {
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: DateTimeFieldUpdateOperationsInput | Date | string
    motivo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BloqueioDisponibilidadeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: DateTimeFieldUpdateOperationsInput | Date | string
    motivo?: NullableStringFieldUpdateOperationsInput | string | null
    casaId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LocadorCreateInput = {
    name: string
    email: string
    senha: string
    cpf: string
    endereco: string
    cep?: string | null
    cidade?: string | null
    estado?: string | null
    casas?: CasaCreateNestedManyWithoutLocadorInput
    reservas?: ReservaCreateNestedManyWithoutLocadorInput
    conversas?: ConversaCreateNestedManyWithoutLocadorInput
    mensagens?: MensagemCreateNestedManyWithoutRemetenteLocadorInput
  }

  export type LocadorUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    senha: string
    cpf: string
    endereco: string
    cep?: string | null
    cidade?: string | null
    estado?: string | null
    casas?: CasaUncheckedCreateNestedManyWithoutLocadorInput
    reservas?: ReservaUncheckedCreateNestedManyWithoutLocadorInput
    conversas?: ConversaUncheckedCreateNestedManyWithoutLocadorInput
    mensagens?: MensagemUncheckedCreateNestedManyWithoutRemetenteLocadorInput
  }

  export type LocadorUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    cidade?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    casas?: CasaUpdateManyWithoutLocadorNestedInput
    reservas?: ReservaUpdateManyWithoutLocadorNestedInput
    conversas?: ConversaUpdateManyWithoutLocadorNestedInput
    mensagens?: MensagemUpdateManyWithoutRemetenteLocadorNestedInput
  }

  export type LocadorUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    cidade?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    casas?: CasaUncheckedUpdateManyWithoutLocadorNestedInput
    reservas?: ReservaUncheckedUpdateManyWithoutLocadorNestedInput
    conversas?: ConversaUncheckedUpdateManyWithoutLocadorNestedInput
    mensagens?: MensagemUncheckedUpdateManyWithoutRemetenteLocadorNestedInput
  }

  export type LocadorCreateManyInput = {
    id?: number
    name: string
    email: string
    senha: string
    cpf: string
    endereco: string
    cep?: string | null
    cidade?: string | null
    estado?: string | null
  }

  export type LocadorUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    cidade?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LocadorUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    cidade?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type HospedeCreateInput = {
    name: string
    email: string
    senha: string
    cpf: string
    cep?: string | null
    cidade?: string | null
    estado?: string | null
    matricula: string
    universidade?: string | null
    reservas?: ReservaCreateNestedManyWithoutHospedeInput
    favoritos?: FavoritoCreateNestedManyWithoutHospedeInput
    conversas?: ConversaCreateNestedManyWithoutHospedeInput
    mensagens?: MensagemCreateNestedManyWithoutRemetenteHospedeInput
    avaliacoesFeitas?: AvaliacaoCreateNestedManyWithoutHospedeInput
  }

  export type HospedeUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    senha: string
    cpf: string
    cep?: string | null
    cidade?: string | null
    estado?: string | null
    matricula: string
    universidade?: string | null
    reservas?: ReservaUncheckedCreateNestedManyWithoutHospedeInput
    favoritos?: FavoritoUncheckedCreateNestedManyWithoutHospedeInput
    conversas?: ConversaUncheckedCreateNestedManyWithoutHospedeInput
    mensagens?: MensagemUncheckedCreateNestedManyWithoutRemetenteHospedeInput
    avaliacoesFeitas?: AvaliacaoUncheckedCreateNestedManyWithoutHospedeInput
  }

  export type HospedeUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    cidade?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    matricula?: StringFieldUpdateOperationsInput | string
    universidade?: NullableStringFieldUpdateOperationsInput | string | null
    reservas?: ReservaUpdateManyWithoutHospedeNestedInput
    favoritos?: FavoritoUpdateManyWithoutHospedeNestedInput
    conversas?: ConversaUpdateManyWithoutHospedeNestedInput
    mensagens?: MensagemUpdateManyWithoutRemetenteHospedeNestedInput
    avaliacoesFeitas?: AvaliacaoUpdateManyWithoutHospedeNestedInput
  }

  export type HospedeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    cidade?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    matricula?: StringFieldUpdateOperationsInput | string
    universidade?: NullableStringFieldUpdateOperationsInput | string | null
    reservas?: ReservaUncheckedUpdateManyWithoutHospedeNestedInput
    favoritos?: FavoritoUncheckedUpdateManyWithoutHospedeNestedInput
    conversas?: ConversaUncheckedUpdateManyWithoutHospedeNestedInput
    mensagens?: MensagemUncheckedUpdateManyWithoutRemetenteHospedeNestedInput
    avaliacoesFeitas?: AvaliacaoUncheckedUpdateManyWithoutHospedeNestedInput
  }

  export type HospedeCreateManyInput = {
    id?: number
    name: string
    email: string
    senha: string
    cpf: string
    cep?: string | null
    cidade?: string | null
    estado?: string | null
    matricula: string
    universidade?: string | null
  }

  export type HospedeUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    cidade?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    matricula?: StringFieldUpdateOperationsInput | string
    universidade?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type HospedeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    cidade?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    matricula?: StringFieldUpdateOperationsInput | string
    universidade?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ReservaCreateInput = {
    dataCheckIn: Date | string
    dataCheckOut: Date | string
    status: string
    numeroHospedes?: number | null
    valorTotal?: number | null
    observacoes?: string | null
    valorTotalCalculado?: number | null
    statusPagamento?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    hospede: HospedeCreateNestedOneWithoutReservasInput
    casa: CasaCreateNestedOneWithoutReservasInput
    locador: LocadorCreateNestedOneWithoutReservasInput
    avaliacao?: AvaliacaoCreateNestedOneWithoutReservaInput
  }

  export type ReservaUncheckedCreateInput = {
    id?: number
    dataCheckIn: Date | string
    dataCheckOut: Date | string
    status: string
    numeroHospedes?: number | null
    valorTotal?: number | null
    observacoes?: string | null
    valorTotalCalculado?: number | null
    statusPagamento?: string | null
    hospedeId: number
    casaId: number
    locadorId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    avaliacao?: AvaliacaoUncheckedCreateNestedOneWithoutReservaInput
  }

  export type ReservaUpdateInput = {
    dataCheckIn?: DateTimeFieldUpdateOperationsInput | Date | string
    dataCheckOut?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    numeroHospedes?: NullableIntFieldUpdateOperationsInput | number | null
    valorTotal?: NullableFloatFieldUpdateOperationsInput | number | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    valorTotalCalculado?: NullableFloatFieldUpdateOperationsInput | number | null
    statusPagamento?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hospede?: HospedeUpdateOneRequiredWithoutReservasNestedInput
    casa?: CasaUpdateOneRequiredWithoutReservasNestedInput
    locador?: LocadorUpdateOneRequiredWithoutReservasNestedInput
    avaliacao?: AvaliacaoUpdateOneWithoutReservaNestedInput
  }

  export type ReservaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    dataCheckIn?: DateTimeFieldUpdateOperationsInput | Date | string
    dataCheckOut?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    numeroHospedes?: NullableIntFieldUpdateOperationsInput | number | null
    valorTotal?: NullableFloatFieldUpdateOperationsInput | number | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    valorTotalCalculado?: NullableFloatFieldUpdateOperationsInput | number | null
    statusPagamento?: NullableStringFieldUpdateOperationsInput | string | null
    hospedeId?: IntFieldUpdateOperationsInput | number
    casaId?: IntFieldUpdateOperationsInput | number
    locadorId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    avaliacao?: AvaliacaoUncheckedUpdateOneWithoutReservaNestedInput
  }

  export type ReservaCreateManyInput = {
    id?: number
    dataCheckIn: Date | string
    dataCheckOut: Date | string
    status: string
    numeroHospedes?: number | null
    valorTotal?: number | null
    observacoes?: string | null
    valorTotalCalculado?: number | null
    statusPagamento?: string | null
    hospedeId: number
    casaId: number
    locadorId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReservaUpdateManyMutationInput = {
    dataCheckIn?: DateTimeFieldUpdateOperationsInput | Date | string
    dataCheckOut?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    numeroHospedes?: NullableIntFieldUpdateOperationsInput | number | null
    valorTotal?: NullableFloatFieldUpdateOperationsInput | number | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    valorTotalCalculado?: NullableFloatFieldUpdateOperationsInput | number | null
    statusPagamento?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    dataCheckIn?: DateTimeFieldUpdateOperationsInput | Date | string
    dataCheckOut?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    numeroHospedes?: NullableIntFieldUpdateOperationsInput | number | null
    valorTotal?: NullableFloatFieldUpdateOperationsInput | number | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    valorTotalCalculado?: NullableFloatFieldUpdateOperationsInput | number | null
    statusPagamento?: NullableStringFieldUpdateOperationsInput | string | null
    hospedeId?: IntFieldUpdateOperationsInput | number
    casaId?: IntFieldUpdateOperationsInput | number
    locadorId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoritoCreateInput = {
    createdAt?: Date | string
    hospede: HospedeCreateNestedOneWithoutFavoritosInput
    casa: CasaCreateNestedOneWithoutFavoritosInput
  }

  export type FavoritoUncheckedCreateInput = {
    id?: number
    hospedeId: number
    casaId: number
    createdAt?: Date | string
  }

  export type FavoritoUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hospede?: HospedeUpdateOneRequiredWithoutFavoritosNestedInput
    casa?: CasaUpdateOneRequiredWithoutFavoritosNestedInput
  }

  export type FavoritoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    hospedeId?: IntFieldUpdateOperationsInput | number
    casaId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoritoCreateManyInput = {
    id?: number
    hospedeId: number
    casaId: number
    createdAt?: Date | string
  }

  export type FavoritoUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoritoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    hospedeId?: IntFieldUpdateOperationsInput | number
    casaId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConversaCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    hospede: HospedeCreateNestedOneWithoutConversasInput
    locador: LocadorCreateNestedOneWithoutConversasInput
    casa?: CasaCreateNestedOneWithoutConversasInput
    mensagens?: MensagemCreateNestedManyWithoutConversaInput
  }

  export type ConversaUncheckedCreateInput = {
    id?: number
    hospedeId: number
    locadorId: number
    casaId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    mensagens?: MensagemUncheckedCreateNestedManyWithoutConversaInput
  }

  export type ConversaUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hospede?: HospedeUpdateOneRequiredWithoutConversasNestedInput
    locador?: LocadorUpdateOneRequiredWithoutConversasNestedInput
    casa?: CasaUpdateOneWithoutConversasNestedInput
    mensagens?: MensagemUpdateManyWithoutConversaNestedInput
  }

  export type ConversaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    hospedeId?: IntFieldUpdateOperationsInput | number
    locadorId?: IntFieldUpdateOperationsInput | number
    casaId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mensagens?: MensagemUncheckedUpdateManyWithoutConversaNestedInput
  }

  export type ConversaCreateManyInput = {
    id?: number
    hospedeId: number
    locadorId: number
    casaId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ConversaUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConversaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    hospedeId?: IntFieldUpdateOperationsInput | number
    locadorId?: IntFieldUpdateOperationsInput | number
    casaId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MensagemCreateInput = {
    conteudo: string
    createdAt?: Date | string
    lidaPeloHospede?: boolean
    lidaPeloLocador?: boolean
    conversa: ConversaCreateNestedOneWithoutMensagensInput
    remetenteHospede?: HospedeCreateNestedOneWithoutMensagensInput
    remetenteLocador?: LocadorCreateNestedOneWithoutMensagensInput
  }

  export type MensagemUncheckedCreateInput = {
    id?: number
    conteudo: string
    createdAt?: Date | string
    conversaId: number
    remetenteHospedeId?: number | null
    remetenteLocadorId?: number | null
    lidaPeloHospede?: boolean
    lidaPeloLocador?: boolean
  }

  export type MensagemUpdateInput = {
    conteudo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lidaPeloHospede?: BoolFieldUpdateOperationsInput | boolean
    lidaPeloLocador?: BoolFieldUpdateOperationsInput | boolean
    conversa?: ConversaUpdateOneRequiredWithoutMensagensNestedInput
    remetenteHospede?: HospedeUpdateOneWithoutMensagensNestedInput
    remetenteLocador?: LocadorUpdateOneWithoutMensagensNestedInput
  }

  export type MensagemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    conteudo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conversaId?: IntFieldUpdateOperationsInput | number
    remetenteHospedeId?: NullableIntFieldUpdateOperationsInput | number | null
    remetenteLocadorId?: NullableIntFieldUpdateOperationsInput | number | null
    lidaPeloHospede?: BoolFieldUpdateOperationsInput | boolean
    lidaPeloLocador?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MensagemCreateManyInput = {
    id?: number
    conteudo: string
    createdAt?: Date | string
    conversaId: number
    remetenteHospedeId?: number | null
    remetenteLocadorId?: number | null
    lidaPeloHospede?: boolean
    lidaPeloLocador?: boolean
  }

  export type MensagemUpdateManyMutationInput = {
    conteudo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lidaPeloHospede?: BoolFieldUpdateOperationsInput | boolean
    lidaPeloLocador?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MensagemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    conteudo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conversaId?: IntFieldUpdateOperationsInput | number
    remetenteHospedeId?: NullableIntFieldUpdateOperationsInput | number | null
    remetenteLocadorId?: NullableIntFieldUpdateOperationsInput | number | null
    lidaPeloHospede?: BoolFieldUpdateOperationsInput | boolean
    lidaPeloLocador?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AvaliacaoCreateInput = {
    nota: number
    comentario?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    reserva: ReservaCreateNestedOneWithoutAvaliacaoInput
    hospede: HospedeCreateNestedOneWithoutAvaliacoesFeitasInput
    casa: CasaCreateNestedOneWithoutAvaliacoesInput
  }

  export type AvaliacaoUncheckedCreateInput = {
    id?: number
    nota: number
    comentario?: string | null
    reservaId: number
    hospedeId: number
    casaId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AvaliacaoUpdateInput = {
    nota?: IntFieldUpdateOperationsInput | number
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reserva?: ReservaUpdateOneRequiredWithoutAvaliacaoNestedInput
    hospede?: HospedeUpdateOneRequiredWithoutAvaliacoesFeitasNestedInput
    casa?: CasaUpdateOneRequiredWithoutAvaliacoesNestedInput
  }

  export type AvaliacaoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nota?: IntFieldUpdateOperationsInput | number
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    reservaId?: IntFieldUpdateOperationsInput | number
    hospedeId?: IntFieldUpdateOperationsInput | number
    casaId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AvaliacaoCreateManyInput = {
    id?: number
    nota: number
    comentario?: string | null
    reservaId: number
    hospedeId: number
    casaId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AvaliacaoUpdateManyMutationInput = {
    nota?: IntFieldUpdateOperationsInput | number
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AvaliacaoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nota?: IntFieldUpdateOperationsInput | number
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    reservaId?: IntFieldUpdateOperationsInput | number
    hospedeId?: IntFieldUpdateOperationsInput | number
    casaId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AdminCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    senha?: SortOrder
  }

  export type AdminAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AdminMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    senha?: SortOrder
  }

  export type AdminMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    senha?: SortOrder
  }

  export type AdminSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type LocadorScalarRelationFilter = {
    is?: LocadorWhereInput
    isNot?: LocadorWhereInput
  }

  export type ReservaListRelationFilter = {
    every?: ReservaWhereInput
    some?: ReservaWhereInput
    none?: ReservaWhereInput
  }

  export type FavoritoListRelationFilter = {
    every?: FavoritoWhereInput
    some?: FavoritoWhereInput
    none?: FavoritoWhereInput
  }

  export type ImagemCasaListRelationFilter = {
    every?: ImagemCasaWhereInput
    some?: ImagemCasaWhereInput
    none?: ImagemCasaWhereInput
  }

  export type ConversaListRelationFilter = {
    every?: ConversaWhereInput
    some?: ConversaWhereInput
    none?: ConversaWhereInput
  }

  export type BloqueioDisponibilidadeListRelationFilter = {
    every?: BloqueioDisponibilidadeWhereInput
    some?: BloqueioDisponibilidadeWhereInput
    none?: BloqueioDisponibilidadeWhereInput
  }

  export type AvaliacaoListRelationFilter = {
    every?: AvaliacaoWhereInput
    some?: AvaliacaoWhereInput
    none?: AvaliacaoWhereInput
  }

  export type ReservaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FavoritoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ImagemCasaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ConversaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BloqueioDisponibilidadeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AvaliacaoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CasaCountOrderByAggregateInput = {
    id?: SortOrder
    endereco?: SortOrder
    numero?: SortOrder
    cep?: SortOrder
    cidade?: SortOrder
    estado?: SortOrder
    diretrizes?: SortOrder
    complemento?: SortOrder
    precoPorNoite?: SortOrder
    locadorId?: SortOrder
  }

  export type CasaAvgOrderByAggregateInput = {
    id?: SortOrder
    numero?: SortOrder
    precoPorNoite?: SortOrder
    locadorId?: SortOrder
  }

  export type CasaMaxOrderByAggregateInput = {
    id?: SortOrder
    endereco?: SortOrder
    numero?: SortOrder
    cep?: SortOrder
    cidade?: SortOrder
    estado?: SortOrder
    diretrizes?: SortOrder
    complemento?: SortOrder
    precoPorNoite?: SortOrder
    locadorId?: SortOrder
  }

  export type CasaMinOrderByAggregateInput = {
    id?: SortOrder
    endereco?: SortOrder
    numero?: SortOrder
    cep?: SortOrder
    cidade?: SortOrder
    estado?: SortOrder
    diretrizes?: SortOrder
    complemento?: SortOrder
    precoPorNoite?: SortOrder
    locadorId?: SortOrder
  }

  export type CasaSumOrderByAggregateInput = {
    id?: SortOrder
    numero?: SortOrder
    precoPorNoite?: SortOrder
    locadorId?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type CasaScalarRelationFilter = {
    is?: CasaWhereInput
    isNot?: CasaWhereInput
  }

  export type ImagemCasaCountOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    casaId?: SortOrder
    createdAt?: SortOrder
  }

  export type ImagemCasaAvgOrderByAggregateInput = {
    id?: SortOrder
    casaId?: SortOrder
  }

  export type ImagemCasaMaxOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    casaId?: SortOrder
    createdAt?: SortOrder
  }

  export type ImagemCasaMinOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    casaId?: SortOrder
    createdAt?: SortOrder
  }

  export type ImagemCasaSumOrderByAggregateInput = {
    id?: SortOrder
    casaId?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BloqueioDisponibilidadeCountOrderByAggregateInput = {
    id?: SortOrder
    dataInicio?: SortOrder
    dataFim?: SortOrder
    motivo?: SortOrder
    casaId?: SortOrder
    createdAt?: SortOrder
  }

  export type BloqueioDisponibilidadeAvgOrderByAggregateInput = {
    id?: SortOrder
    casaId?: SortOrder
  }

  export type BloqueioDisponibilidadeMaxOrderByAggregateInput = {
    id?: SortOrder
    dataInicio?: SortOrder
    dataFim?: SortOrder
    motivo?: SortOrder
    casaId?: SortOrder
    createdAt?: SortOrder
  }

  export type BloqueioDisponibilidadeMinOrderByAggregateInput = {
    id?: SortOrder
    dataInicio?: SortOrder
    dataFim?: SortOrder
    motivo?: SortOrder
    casaId?: SortOrder
    createdAt?: SortOrder
  }

  export type BloqueioDisponibilidadeSumOrderByAggregateInput = {
    id?: SortOrder
    casaId?: SortOrder
  }

  export type CasaListRelationFilter = {
    every?: CasaWhereInput
    some?: CasaWhereInput
    none?: CasaWhereInput
  }

  export type MensagemListRelationFilter = {
    every?: MensagemWhereInput
    some?: MensagemWhereInput
    none?: MensagemWhereInput
  }

  export type CasaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MensagemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LocadorCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    cpf?: SortOrder
    endereco?: SortOrder
    cep?: SortOrder
    cidade?: SortOrder
    estado?: SortOrder
  }

  export type LocadorAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type LocadorMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    cpf?: SortOrder
    endereco?: SortOrder
    cep?: SortOrder
    cidade?: SortOrder
    estado?: SortOrder
  }

  export type LocadorMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    cpf?: SortOrder
    endereco?: SortOrder
    cep?: SortOrder
    cidade?: SortOrder
    estado?: SortOrder
  }

  export type LocadorSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type HospedeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    cpf?: SortOrder
    cep?: SortOrder
    cidade?: SortOrder
    estado?: SortOrder
    matricula?: SortOrder
    universidade?: SortOrder
  }

  export type HospedeAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type HospedeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    cpf?: SortOrder
    cep?: SortOrder
    cidade?: SortOrder
    estado?: SortOrder
    matricula?: SortOrder
    universidade?: SortOrder
  }

  export type HospedeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    cpf?: SortOrder
    cep?: SortOrder
    cidade?: SortOrder
    estado?: SortOrder
    matricula?: SortOrder
    universidade?: SortOrder
  }

  export type HospedeSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type HospedeScalarRelationFilter = {
    is?: HospedeWhereInput
    isNot?: HospedeWhereInput
  }

  export type AvaliacaoNullableScalarRelationFilter = {
    is?: AvaliacaoWhereInput | null
    isNot?: AvaliacaoWhereInput | null
  }

  export type ReservaCountOrderByAggregateInput = {
    id?: SortOrder
    dataCheckIn?: SortOrder
    dataCheckOut?: SortOrder
    status?: SortOrder
    numeroHospedes?: SortOrder
    valorTotal?: SortOrder
    observacoes?: SortOrder
    valorTotalCalculado?: SortOrder
    statusPagamento?: SortOrder
    hospedeId?: SortOrder
    casaId?: SortOrder
    locadorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReservaAvgOrderByAggregateInput = {
    id?: SortOrder
    numeroHospedes?: SortOrder
    valorTotal?: SortOrder
    valorTotalCalculado?: SortOrder
    hospedeId?: SortOrder
    casaId?: SortOrder
    locadorId?: SortOrder
  }

  export type ReservaMaxOrderByAggregateInput = {
    id?: SortOrder
    dataCheckIn?: SortOrder
    dataCheckOut?: SortOrder
    status?: SortOrder
    numeroHospedes?: SortOrder
    valorTotal?: SortOrder
    observacoes?: SortOrder
    valorTotalCalculado?: SortOrder
    statusPagamento?: SortOrder
    hospedeId?: SortOrder
    casaId?: SortOrder
    locadorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReservaMinOrderByAggregateInput = {
    id?: SortOrder
    dataCheckIn?: SortOrder
    dataCheckOut?: SortOrder
    status?: SortOrder
    numeroHospedes?: SortOrder
    valorTotal?: SortOrder
    observacoes?: SortOrder
    valorTotalCalculado?: SortOrder
    statusPagamento?: SortOrder
    hospedeId?: SortOrder
    casaId?: SortOrder
    locadorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReservaSumOrderByAggregateInput = {
    id?: SortOrder
    numeroHospedes?: SortOrder
    valorTotal?: SortOrder
    valorTotalCalculado?: SortOrder
    hospedeId?: SortOrder
    casaId?: SortOrder
    locadorId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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

  export type FavoritoHospede_casa_favorito_uniqueCompoundUniqueInput = {
    hospedeId: number
    casaId: number
  }

  export type FavoritoCountOrderByAggregateInput = {
    id?: SortOrder
    hospedeId?: SortOrder
    casaId?: SortOrder
    createdAt?: SortOrder
  }

  export type FavoritoAvgOrderByAggregateInput = {
    id?: SortOrder
    hospedeId?: SortOrder
    casaId?: SortOrder
  }

  export type FavoritoMaxOrderByAggregateInput = {
    id?: SortOrder
    hospedeId?: SortOrder
    casaId?: SortOrder
    createdAt?: SortOrder
  }

  export type FavoritoMinOrderByAggregateInput = {
    id?: SortOrder
    hospedeId?: SortOrder
    casaId?: SortOrder
    createdAt?: SortOrder
  }

  export type FavoritoSumOrderByAggregateInput = {
    id?: SortOrder
    hospedeId?: SortOrder
    casaId?: SortOrder
  }

  export type CasaNullableScalarRelationFilter = {
    is?: CasaWhereInput | null
    isNot?: CasaWhereInput | null
  }

  export type ConversaHospedeIdLocadorIdCasaIdCompoundUniqueInput = {
    hospedeId: number
    locadorId: number
    casaId: number
  }

  export type ConversaCountOrderByAggregateInput = {
    id?: SortOrder
    hospedeId?: SortOrder
    locadorId?: SortOrder
    casaId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ConversaAvgOrderByAggregateInput = {
    id?: SortOrder
    hospedeId?: SortOrder
    locadorId?: SortOrder
    casaId?: SortOrder
  }

  export type ConversaMaxOrderByAggregateInput = {
    id?: SortOrder
    hospedeId?: SortOrder
    locadorId?: SortOrder
    casaId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ConversaMinOrderByAggregateInput = {
    id?: SortOrder
    hospedeId?: SortOrder
    locadorId?: SortOrder
    casaId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ConversaSumOrderByAggregateInput = {
    id?: SortOrder
    hospedeId?: SortOrder
    locadorId?: SortOrder
    casaId?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ConversaScalarRelationFilter = {
    is?: ConversaWhereInput
    isNot?: ConversaWhereInput
  }

  export type HospedeNullableScalarRelationFilter = {
    is?: HospedeWhereInput | null
    isNot?: HospedeWhereInput | null
  }

  export type LocadorNullableScalarRelationFilter = {
    is?: LocadorWhereInput | null
    isNot?: LocadorWhereInput | null
  }

  export type MensagemCountOrderByAggregateInput = {
    id?: SortOrder
    conteudo?: SortOrder
    createdAt?: SortOrder
    conversaId?: SortOrder
    remetenteHospedeId?: SortOrder
    remetenteLocadorId?: SortOrder
    lidaPeloHospede?: SortOrder
    lidaPeloLocador?: SortOrder
  }

  export type MensagemAvgOrderByAggregateInput = {
    id?: SortOrder
    conversaId?: SortOrder
    remetenteHospedeId?: SortOrder
    remetenteLocadorId?: SortOrder
  }

  export type MensagemMaxOrderByAggregateInput = {
    id?: SortOrder
    conteudo?: SortOrder
    createdAt?: SortOrder
    conversaId?: SortOrder
    remetenteHospedeId?: SortOrder
    remetenteLocadorId?: SortOrder
    lidaPeloHospede?: SortOrder
    lidaPeloLocador?: SortOrder
  }

  export type MensagemMinOrderByAggregateInput = {
    id?: SortOrder
    conteudo?: SortOrder
    createdAt?: SortOrder
    conversaId?: SortOrder
    remetenteHospedeId?: SortOrder
    remetenteLocadorId?: SortOrder
    lidaPeloHospede?: SortOrder
    lidaPeloLocador?: SortOrder
  }

  export type MensagemSumOrderByAggregateInput = {
    id?: SortOrder
    conversaId?: SortOrder
    remetenteHospedeId?: SortOrder
    remetenteLocadorId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ReservaScalarRelationFilter = {
    is?: ReservaWhereInput
    isNot?: ReservaWhereInput
  }

  export type AvaliacaoCountOrderByAggregateInput = {
    id?: SortOrder
    nota?: SortOrder
    comentario?: SortOrder
    reservaId?: SortOrder
    hospedeId?: SortOrder
    casaId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AvaliacaoAvgOrderByAggregateInput = {
    id?: SortOrder
    nota?: SortOrder
    reservaId?: SortOrder
    hospedeId?: SortOrder
    casaId?: SortOrder
  }

  export type AvaliacaoMaxOrderByAggregateInput = {
    id?: SortOrder
    nota?: SortOrder
    comentario?: SortOrder
    reservaId?: SortOrder
    hospedeId?: SortOrder
    casaId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AvaliacaoMinOrderByAggregateInput = {
    id?: SortOrder
    nota?: SortOrder
    comentario?: SortOrder
    reservaId?: SortOrder
    hospedeId?: SortOrder
    casaId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AvaliacaoSumOrderByAggregateInput = {
    id?: SortOrder
    nota?: SortOrder
    reservaId?: SortOrder
    hospedeId?: SortOrder
    casaId?: SortOrder
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type LocadorCreateNestedOneWithoutCasasInput = {
    create?: XOR<LocadorCreateWithoutCasasInput, LocadorUncheckedCreateWithoutCasasInput>
    connectOrCreate?: LocadorCreateOrConnectWithoutCasasInput
    connect?: LocadorWhereUniqueInput
  }

  export type ReservaCreateNestedManyWithoutCasaInput = {
    create?: XOR<ReservaCreateWithoutCasaInput, ReservaUncheckedCreateWithoutCasaInput> | ReservaCreateWithoutCasaInput[] | ReservaUncheckedCreateWithoutCasaInput[]
    connectOrCreate?: ReservaCreateOrConnectWithoutCasaInput | ReservaCreateOrConnectWithoutCasaInput[]
    createMany?: ReservaCreateManyCasaInputEnvelope
    connect?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
  }

  export type FavoritoCreateNestedManyWithoutCasaInput = {
    create?: XOR<FavoritoCreateWithoutCasaInput, FavoritoUncheckedCreateWithoutCasaInput> | FavoritoCreateWithoutCasaInput[] | FavoritoUncheckedCreateWithoutCasaInput[]
    connectOrCreate?: FavoritoCreateOrConnectWithoutCasaInput | FavoritoCreateOrConnectWithoutCasaInput[]
    createMany?: FavoritoCreateManyCasaInputEnvelope
    connect?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
  }

  export type ImagemCasaCreateNestedManyWithoutCasaInput = {
    create?: XOR<ImagemCasaCreateWithoutCasaInput, ImagemCasaUncheckedCreateWithoutCasaInput> | ImagemCasaCreateWithoutCasaInput[] | ImagemCasaUncheckedCreateWithoutCasaInput[]
    connectOrCreate?: ImagemCasaCreateOrConnectWithoutCasaInput | ImagemCasaCreateOrConnectWithoutCasaInput[]
    createMany?: ImagemCasaCreateManyCasaInputEnvelope
    connect?: ImagemCasaWhereUniqueInput | ImagemCasaWhereUniqueInput[]
  }

  export type ConversaCreateNestedManyWithoutCasaInput = {
    create?: XOR<ConversaCreateWithoutCasaInput, ConversaUncheckedCreateWithoutCasaInput> | ConversaCreateWithoutCasaInput[] | ConversaUncheckedCreateWithoutCasaInput[]
    connectOrCreate?: ConversaCreateOrConnectWithoutCasaInput | ConversaCreateOrConnectWithoutCasaInput[]
    createMany?: ConversaCreateManyCasaInputEnvelope
    connect?: ConversaWhereUniqueInput | ConversaWhereUniqueInput[]
  }

  export type BloqueioDisponibilidadeCreateNestedManyWithoutCasaInput = {
    create?: XOR<BloqueioDisponibilidadeCreateWithoutCasaInput, BloqueioDisponibilidadeUncheckedCreateWithoutCasaInput> | BloqueioDisponibilidadeCreateWithoutCasaInput[] | BloqueioDisponibilidadeUncheckedCreateWithoutCasaInput[]
    connectOrCreate?: BloqueioDisponibilidadeCreateOrConnectWithoutCasaInput | BloqueioDisponibilidadeCreateOrConnectWithoutCasaInput[]
    createMany?: BloqueioDisponibilidadeCreateManyCasaInputEnvelope
    connect?: BloqueioDisponibilidadeWhereUniqueInput | BloqueioDisponibilidadeWhereUniqueInput[]
  }

  export type AvaliacaoCreateNestedManyWithoutCasaInput = {
    create?: XOR<AvaliacaoCreateWithoutCasaInput, AvaliacaoUncheckedCreateWithoutCasaInput> | AvaliacaoCreateWithoutCasaInput[] | AvaliacaoUncheckedCreateWithoutCasaInput[]
    connectOrCreate?: AvaliacaoCreateOrConnectWithoutCasaInput | AvaliacaoCreateOrConnectWithoutCasaInput[]
    createMany?: AvaliacaoCreateManyCasaInputEnvelope
    connect?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
  }

  export type ReservaUncheckedCreateNestedManyWithoutCasaInput = {
    create?: XOR<ReservaCreateWithoutCasaInput, ReservaUncheckedCreateWithoutCasaInput> | ReservaCreateWithoutCasaInput[] | ReservaUncheckedCreateWithoutCasaInput[]
    connectOrCreate?: ReservaCreateOrConnectWithoutCasaInput | ReservaCreateOrConnectWithoutCasaInput[]
    createMany?: ReservaCreateManyCasaInputEnvelope
    connect?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
  }

  export type FavoritoUncheckedCreateNestedManyWithoutCasaInput = {
    create?: XOR<FavoritoCreateWithoutCasaInput, FavoritoUncheckedCreateWithoutCasaInput> | FavoritoCreateWithoutCasaInput[] | FavoritoUncheckedCreateWithoutCasaInput[]
    connectOrCreate?: FavoritoCreateOrConnectWithoutCasaInput | FavoritoCreateOrConnectWithoutCasaInput[]
    createMany?: FavoritoCreateManyCasaInputEnvelope
    connect?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
  }

  export type ImagemCasaUncheckedCreateNestedManyWithoutCasaInput = {
    create?: XOR<ImagemCasaCreateWithoutCasaInput, ImagemCasaUncheckedCreateWithoutCasaInput> | ImagemCasaCreateWithoutCasaInput[] | ImagemCasaUncheckedCreateWithoutCasaInput[]
    connectOrCreate?: ImagemCasaCreateOrConnectWithoutCasaInput | ImagemCasaCreateOrConnectWithoutCasaInput[]
    createMany?: ImagemCasaCreateManyCasaInputEnvelope
    connect?: ImagemCasaWhereUniqueInput | ImagemCasaWhereUniqueInput[]
  }

  export type ConversaUncheckedCreateNestedManyWithoutCasaInput = {
    create?: XOR<ConversaCreateWithoutCasaInput, ConversaUncheckedCreateWithoutCasaInput> | ConversaCreateWithoutCasaInput[] | ConversaUncheckedCreateWithoutCasaInput[]
    connectOrCreate?: ConversaCreateOrConnectWithoutCasaInput | ConversaCreateOrConnectWithoutCasaInput[]
    createMany?: ConversaCreateManyCasaInputEnvelope
    connect?: ConversaWhereUniqueInput | ConversaWhereUniqueInput[]
  }

  export type BloqueioDisponibilidadeUncheckedCreateNestedManyWithoutCasaInput = {
    create?: XOR<BloqueioDisponibilidadeCreateWithoutCasaInput, BloqueioDisponibilidadeUncheckedCreateWithoutCasaInput> | BloqueioDisponibilidadeCreateWithoutCasaInput[] | BloqueioDisponibilidadeUncheckedCreateWithoutCasaInput[]
    connectOrCreate?: BloqueioDisponibilidadeCreateOrConnectWithoutCasaInput | BloqueioDisponibilidadeCreateOrConnectWithoutCasaInput[]
    createMany?: BloqueioDisponibilidadeCreateManyCasaInputEnvelope
    connect?: BloqueioDisponibilidadeWhereUniqueInput | BloqueioDisponibilidadeWhereUniqueInput[]
  }

  export type AvaliacaoUncheckedCreateNestedManyWithoutCasaInput = {
    create?: XOR<AvaliacaoCreateWithoutCasaInput, AvaliacaoUncheckedCreateWithoutCasaInput> | AvaliacaoCreateWithoutCasaInput[] | AvaliacaoUncheckedCreateWithoutCasaInput[]
    connectOrCreate?: AvaliacaoCreateOrConnectWithoutCasaInput | AvaliacaoCreateOrConnectWithoutCasaInput[]
    createMany?: AvaliacaoCreateManyCasaInputEnvelope
    connect?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type LocadorUpdateOneRequiredWithoutCasasNestedInput = {
    create?: XOR<LocadorCreateWithoutCasasInput, LocadorUncheckedCreateWithoutCasasInput>
    connectOrCreate?: LocadorCreateOrConnectWithoutCasasInput
    upsert?: LocadorUpsertWithoutCasasInput
    connect?: LocadorWhereUniqueInput
    update?: XOR<XOR<LocadorUpdateToOneWithWhereWithoutCasasInput, LocadorUpdateWithoutCasasInput>, LocadorUncheckedUpdateWithoutCasasInput>
  }

  export type ReservaUpdateManyWithoutCasaNestedInput = {
    create?: XOR<ReservaCreateWithoutCasaInput, ReservaUncheckedCreateWithoutCasaInput> | ReservaCreateWithoutCasaInput[] | ReservaUncheckedCreateWithoutCasaInput[]
    connectOrCreate?: ReservaCreateOrConnectWithoutCasaInput | ReservaCreateOrConnectWithoutCasaInput[]
    upsert?: ReservaUpsertWithWhereUniqueWithoutCasaInput | ReservaUpsertWithWhereUniqueWithoutCasaInput[]
    createMany?: ReservaCreateManyCasaInputEnvelope
    set?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    disconnect?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    delete?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    connect?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    update?: ReservaUpdateWithWhereUniqueWithoutCasaInput | ReservaUpdateWithWhereUniqueWithoutCasaInput[]
    updateMany?: ReservaUpdateManyWithWhereWithoutCasaInput | ReservaUpdateManyWithWhereWithoutCasaInput[]
    deleteMany?: ReservaScalarWhereInput | ReservaScalarWhereInput[]
  }

  export type FavoritoUpdateManyWithoutCasaNestedInput = {
    create?: XOR<FavoritoCreateWithoutCasaInput, FavoritoUncheckedCreateWithoutCasaInput> | FavoritoCreateWithoutCasaInput[] | FavoritoUncheckedCreateWithoutCasaInput[]
    connectOrCreate?: FavoritoCreateOrConnectWithoutCasaInput | FavoritoCreateOrConnectWithoutCasaInput[]
    upsert?: FavoritoUpsertWithWhereUniqueWithoutCasaInput | FavoritoUpsertWithWhereUniqueWithoutCasaInput[]
    createMany?: FavoritoCreateManyCasaInputEnvelope
    set?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
    disconnect?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
    delete?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
    connect?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
    update?: FavoritoUpdateWithWhereUniqueWithoutCasaInput | FavoritoUpdateWithWhereUniqueWithoutCasaInput[]
    updateMany?: FavoritoUpdateManyWithWhereWithoutCasaInput | FavoritoUpdateManyWithWhereWithoutCasaInput[]
    deleteMany?: FavoritoScalarWhereInput | FavoritoScalarWhereInput[]
  }

  export type ImagemCasaUpdateManyWithoutCasaNestedInput = {
    create?: XOR<ImagemCasaCreateWithoutCasaInput, ImagemCasaUncheckedCreateWithoutCasaInput> | ImagemCasaCreateWithoutCasaInput[] | ImagemCasaUncheckedCreateWithoutCasaInput[]
    connectOrCreate?: ImagemCasaCreateOrConnectWithoutCasaInput | ImagemCasaCreateOrConnectWithoutCasaInput[]
    upsert?: ImagemCasaUpsertWithWhereUniqueWithoutCasaInput | ImagemCasaUpsertWithWhereUniqueWithoutCasaInput[]
    createMany?: ImagemCasaCreateManyCasaInputEnvelope
    set?: ImagemCasaWhereUniqueInput | ImagemCasaWhereUniqueInput[]
    disconnect?: ImagemCasaWhereUniqueInput | ImagemCasaWhereUniqueInput[]
    delete?: ImagemCasaWhereUniqueInput | ImagemCasaWhereUniqueInput[]
    connect?: ImagemCasaWhereUniqueInput | ImagemCasaWhereUniqueInput[]
    update?: ImagemCasaUpdateWithWhereUniqueWithoutCasaInput | ImagemCasaUpdateWithWhereUniqueWithoutCasaInput[]
    updateMany?: ImagemCasaUpdateManyWithWhereWithoutCasaInput | ImagemCasaUpdateManyWithWhereWithoutCasaInput[]
    deleteMany?: ImagemCasaScalarWhereInput | ImagemCasaScalarWhereInput[]
  }

  export type ConversaUpdateManyWithoutCasaNestedInput = {
    create?: XOR<ConversaCreateWithoutCasaInput, ConversaUncheckedCreateWithoutCasaInput> | ConversaCreateWithoutCasaInput[] | ConversaUncheckedCreateWithoutCasaInput[]
    connectOrCreate?: ConversaCreateOrConnectWithoutCasaInput | ConversaCreateOrConnectWithoutCasaInput[]
    upsert?: ConversaUpsertWithWhereUniqueWithoutCasaInput | ConversaUpsertWithWhereUniqueWithoutCasaInput[]
    createMany?: ConversaCreateManyCasaInputEnvelope
    set?: ConversaWhereUniqueInput | ConversaWhereUniqueInput[]
    disconnect?: ConversaWhereUniqueInput | ConversaWhereUniqueInput[]
    delete?: ConversaWhereUniqueInput | ConversaWhereUniqueInput[]
    connect?: ConversaWhereUniqueInput | ConversaWhereUniqueInput[]
    update?: ConversaUpdateWithWhereUniqueWithoutCasaInput | ConversaUpdateWithWhereUniqueWithoutCasaInput[]
    updateMany?: ConversaUpdateManyWithWhereWithoutCasaInput | ConversaUpdateManyWithWhereWithoutCasaInput[]
    deleteMany?: ConversaScalarWhereInput | ConversaScalarWhereInput[]
  }

  export type BloqueioDisponibilidadeUpdateManyWithoutCasaNestedInput = {
    create?: XOR<BloqueioDisponibilidadeCreateWithoutCasaInput, BloqueioDisponibilidadeUncheckedCreateWithoutCasaInput> | BloqueioDisponibilidadeCreateWithoutCasaInput[] | BloqueioDisponibilidadeUncheckedCreateWithoutCasaInput[]
    connectOrCreate?: BloqueioDisponibilidadeCreateOrConnectWithoutCasaInput | BloqueioDisponibilidadeCreateOrConnectWithoutCasaInput[]
    upsert?: BloqueioDisponibilidadeUpsertWithWhereUniqueWithoutCasaInput | BloqueioDisponibilidadeUpsertWithWhereUniqueWithoutCasaInput[]
    createMany?: BloqueioDisponibilidadeCreateManyCasaInputEnvelope
    set?: BloqueioDisponibilidadeWhereUniqueInput | BloqueioDisponibilidadeWhereUniqueInput[]
    disconnect?: BloqueioDisponibilidadeWhereUniqueInput | BloqueioDisponibilidadeWhereUniqueInput[]
    delete?: BloqueioDisponibilidadeWhereUniqueInput | BloqueioDisponibilidadeWhereUniqueInput[]
    connect?: BloqueioDisponibilidadeWhereUniqueInput | BloqueioDisponibilidadeWhereUniqueInput[]
    update?: BloqueioDisponibilidadeUpdateWithWhereUniqueWithoutCasaInput | BloqueioDisponibilidadeUpdateWithWhereUniqueWithoutCasaInput[]
    updateMany?: BloqueioDisponibilidadeUpdateManyWithWhereWithoutCasaInput | BloqueioDisponibilidadeUpdateManyWithWhereWithoutCasaInput[]
    deleteMany?: BloqueioDisponibilidadeScalarWhereInput | BloqueioDisponibilidadeScalarWhereInput[]
  }

  export type AvaliacaoUpdateManyWithoutCasaNestedInput = {
    create?: XOR<AvaliacaoCreateWithoutCasaInput, AvaliacaoUncheckedCreateWithoutCasaInput> | AvaliacaoCreateWithoutCasaInput[] | AvaliacaoUncheckedCreateWithoutCasaInput[]
    connectOrCreate?: AvaliacaoCreateOrConnectWithoutCasaInput | AvaliacaoCreateOrConnectWithoutCasaInput[]
    upsert?: AvaliacaoUpsertWithWhereUniqueWithoutCasaInput | AvaliacaoUpsertWithWhereUniqueWithoutCasaInput[]
    createMany?: AvaliacaoCreateManyCasaInputEnvelope
    set?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
    disconnect?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
    delete?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
    connect?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
    update?: AvaliacaoUpdateWithWhereUniqueWithoutCasaInput | AvaliacaoUpdateWithWhereUniqueWithoutCasaInput[]
    updateMany?: AvaliacaoUpdateManyWithWhereWithoutCasaInput | AvaliacaoUpdateManyWithWhereWithoutCasaInput[]
    deleteMany?: AvaliacaoScalarWhereInput | AvaliacaoScalarWhereInput[]
  }

  export type ReservaUncheckedUpdateManyWithoutCasaNestedInput = {
    create?: XOR<ReservaCreateWithoutCasaInput, ReservaUncheckedCreateWithoutCasaInput> | ReservaCreateWithoutCasaInput[] | ReservaUncheckedCreateWithoutCasaInput[]
    connectOrCreate?: ReservaCreateOrConnectWithoutCasaInput | ReservaCreateOrConnectWithoutCasaInput[]
    upsert?: ReservaUpsertWithWhereUniqueWithoutCasaInput | ReservaUpsertWithWhereUniqueWithoutCasaInput[]
    createMany?: ReservaCreateManyCasaInputEnvelope
    set?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    disconnect?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    delete?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    connect?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    update?: ReservaUpdateWithWhereUniqueWithoutCasaInput | ReservaUpdateWithWhereUniqueWithoutCasaInput[]
    updateMany?: ReservaUpdateManyWithWhereWithoutCasaInput | ReservaUpdateManyWithWhereWithoutCasaInput[]
    deleteMany?: ReservaScalarWhereInput | ReservaScalarWhereInput[]
  }

  export type FavoritoUncheckedUpdateManyWithoutCasaNestedInput = {
    create?: XOR<FavoritoCreateWithoutCasaInput, FavoritoUncheckedCreateWithoutCasaInput> | FavoritoCreateWithoutCasaInput[] | FavoritoUncheckedCreateWithoutCasaInput[]
    connectOrCreate?: FavoritoCreateOrConnectWithoutCasaInput | FavoritoCreateOrConnectWithoutCasaInput[]
    upsert?: FavoritoUpsertWithWhereUniqueWithoutCasaInput | FavoritoUpsertWithWhereUniqueWithoutCasaInput[]
    createMany?: FavoritoCreateManyCasaInputEnvelope
    set?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
    disconnect?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
    delete?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
    connect?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
    update?: FavoritoUpdateWithWhereUniqueWithoutCasaInput | FavoritoUpdateWithWhereUniqueWithoutCasaInput[]
    updateMany?: FavoritoUpdateManyWithWhereWithoutCasaInput | FavoritoUpdateManyWithWhereWithoutCasaInput[]
    deleteMany?: FavoritoScalarWhereInput | FavoritoScalarWhereInput[]
  }

  export type ImagemCasaUncheckedUpdateManyWithoutCasaNestedInput = {
    create?: XOR<ImagemCasaCreateWithoutCasaInput, ImagemCasaUncheckedCreateWithoutCasaInput> | ImagemCasaCreateWithoutCasaInput[] | ImagemCasaUncheckedCreateWithoutCasaInput[]
    connectOrCreate?: ImagemCasaCreateOrConnectWithoutCasaInput | ImagemCasaCreateOrConnectWithoutCasaInput[]
    upsert?: ImagemCasaUpsertWithWhereUniqueWithoutCasaInput | ImagemCasaUpsertWithWhereUniqueWithoutCasaInput[]
    createMany?: ImagemCasaCreateManyCasaInputEnvelope
    set?: ImagemCasaWhereUniqueInput | ImagemCasaWhereUniqueInput[]
    disconnect?: ImagemCasaWhereUniqueInput | ImagemCasaWhereUniqueInput[]
    delete?: ImagemCasaWhereUniqueInput | ImagemCasaWhereUniqueInput[]
    connect?: ImagemCasaWhereUniqueInput | ImagemCasaWhereUniqueInput[]
    update?: ImagemCasaUpdateWithWhereUniqueWithoutCasaInput | ImagemCasaUpdateWithWhereUniqueWithoutCasaInput[]
    updateMany?: ImagemCasaUpdateManyWithWhereWithoutCasaInput | ImagemCasaUpdateManyWithWhereWithoutCasaInput[]
    deleteMany?: ImagemCasaScalarWhereInput | ImagemCasaScalarWhereInput[]
  }

  export type ConversaUncheckedUpdateManyWithoutCasaNestedInput = {
    create?: XOR<ConversaCreateWithoutCasaInput, ConversaUncheckedCreateWithoutCasaInput> | ConversaCreateWithoutCasaInput[] | ConversaUncheckedCreateWithoutCasaInput[]
    connectOrCreate?: ConversaCreateOrConnectWithoutCasaInput | ConversaCreateOrConnectWithoutCasaInput[]
    upsert?: ConversaUpsertWithWhereUniqueWithoutCasaInput | ConversaUpsertWithWhereUniqueWithoutCasaInput[]
    createMany?: ConversaCreateManyCasaInputEnvelope
    set?: ConversaWhereUniqueInput | ConversaWhereUniqueInput[]
    disconnect?: ConversaWhereUniqueInput | ConversaWhereUniqueInput[]
    delete?: ConversaWhereUniqueInput | ConversaWhereUniqueInput[]
    connect?: ConversaWhereUniqueInput | ConversaWhereUniqueInput[]
    update?: ConversaUpdateWithWhereUniqueWithoutCasaInput | ConversaUpdateWithWhereUniqueWithoutCasaInput[]
    updateMany?: ConversaUpdateManyWithWhereWithoutCasaInput | ConversaUpdateManyWithWhereWithoutCasaInput[]
    deleteMany?: ConversaScalarWhereInput | ConversaScalarWhereInput[]
  }

  export type BloqueioDisponibilidadeUncheckedUpdateManyWithoutCasaNestedInput = {
    create?: XOR<BloqueioDisponibilidadeCreateWithoutCasaInput, BloqueioDisponibilidadeUncheckedCreateWithoutCasaInput> | BloqueioDisponibilidadeCreateWithoutCasaInput[] | BloqueioDisponibilidadeUncheckedCreateWithoutCasaInput[]
    connectOrCreate?: BloqueioDisponibilidadeCreateOrConnectWithoutCasaInput | BloqueioDisponibilidadeCreateOrConnectWithoutCasaInput[]
    upsert?: BloqueioDisponibilidadeUpsertWithWhereUniqueWithoutCasaInput | BloqueioDisponibilidadeUpsertWithWhereUniqueWithoutCasaInput[]
    createMany?: BloqueioDisponibilidadeCreateManyCasaInputEnvelope
    set?: BloqueioDisponibilidadeWhereUniqueInput | BloqueioDisponibilidadeWhereUniqueInput[]
    disconnect?: BloqueioDisponibilidadeWhereUniqueInput | BloqueioDisponibilidadeWhereUniqueInput[]
    delete?: BloqueioDisponibilidadeWhereUniqueInput | BloqueioDisponibilidadeWhereUniqueInput[]
    connect?: BloqueioDisponibilidadeWhereUniqueInput | BloqueioDisponibilidadeWhereUniqueInput[]
    update?: BloqueioDisponibilidadeUpdateWithWhereUniqueWithoutCasaInput | BloqueioDisponibilidadeUpdateWithWhereUniqueWithoutCasaInput[]
    updateMany?: BloqueioDisponibilidadeUpdateManyWithWhereWithoutCasaInput | BloqueioDisponibilidadeUpdateManyWithWhereWithoutCasaInput[]
    deleteMany?: BloqueioDisponibilidadeScalarWhereInput | BloqueioDisponibilidadeScalarWhereInput[]
  }

  export type AvaliacaoUncheckedUpdateManyWithoutCasaNestedInput = {
    create?: XOR<AvaliacaoCreateWithoutCasaInput, AvaliacaoUncheckedCreateWithoutCasaInput> | AvaliacaoCreateWithoutCasaInput[] | AvaliacaoUncheckedCreateWithoutCasaInput[]
    connectOrCreate?: AvaliacaoCreateOrConnectWithoutCasaInput | AvaliacaoCreateOrConnectWithoutCasaInput[]
    upsert?: AvaliacaoUpsertWithWhereUniqueWithoutCasaInput | AvaliacaoUpsertWithWhereUniqueWithoutCasaInput[]
    createMany?: AvaliacaoCreateManyCasaInputEnvelope
    set?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
    disconnect?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
    delete?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
    connect?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
    update?: AvaliacaoUpdateWithWhereUniqueWithoutCasaInput | AvaliacaoUpdateWithWhereUniqueWithoutCasaInput[]
    updateMany?: AvaliacaoUpdateManyWithWhereWithoutCasaInput | AvaliacaoUpdateManyWithWhereWithoutCasaInput[]
    deleteMany?: AvaliacaoScalarWhereInput | AvaliacaoScalarWhereInput[]
  }

  export type CasaCreateNestedOneWithoutImagensInput = {
    create?: XOR<CasaCreateWithoutImagensInput, CasaUncheckedCreateWithoutImagensInput>
    connectOrCreate?: CasaCreateOrConnectWithoutImagensInput
    connect?: CasaWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type CasaUpdateOneRequiredWithoutImagensNestedInput = {
    create?: XOR<CasaCreateWithoutImagensInput, CasaUncheckedCreateWithoutImagensInput>
    connectOrCreate?: CasaCreateOrConnectWithoutImagensInput
    upsert?: CasaUpsertWithoutImagensInput
    connect?: CasaWhereUniqueInput
    update?: XOR<XOR<CasaUpdateToOneWithWhereWithoutImagensInput, CasaUpdateWithoutImagensInput>, CasaUncheckedUpdateWithoutImagensInput>
  }

  export type CasaCreateNestedOneWithoutBloqueiosDisponibilidadeInput = {
    create?: XOR<CasaCreateWithoutBloqueiosDisponibilidadeInput, CasaUncheckedCreateWithoutBloqueiosDisponibilidadeInput>
    connectOrCreate?: CasaCreateOrConnectWithoutBloqueiosDisponibilidadeInput
    connect?: CasaWhereUniqueInput
  }

  export type CasaUpdateOneRequiredWithoutBloqueiosDisponibilidadeNestedInput = {
    create?: XOR<CasaCreateWithoutBloqueiosDisponibilidadeInput, CasaUncheckedCreateWithoutBloqueiosDisponibilidadeInput>
    connectOrCreate?: CasaCreateOrConnectWithoutBloqueiosDisponibilidadeInput
    upsert?: CasaUpsertWithoutBloqueiosDisponibilidadeInput
    connect?: CasaWhereUniqueInput
    update?: XOR<XOR<CasaUpdateToOneWithWhereWithoutBloqueiosDisponibilidadeInput, CasaUpdateWithoutBloqueiosDisponibilidadeInput>, CasaUncheckedUpdateWithoutBloqueiosDisponibilidadeInput>
  }

  export type CasaCreateNestedManyWithoutLocadorInput = {
    create?: XOR<CasaCreateWithoutLocadorInput, CasaUncheckedCreateWithoutLocadorInput> | CasaCreateWithoutLocadorInput[] | CasaUncheckedCreateWithoutLocadorInput[]
    connectOrCreate?: CasaCreateOrConnectWithoutLocadorInput | CasaCreateOrConnectWithoutLocadorInput[]
    createMany?: CasaCreateManyLocadorInputEnvelope
    connect?: CasaWhereUniqueInput | CasaWhereUniqueInput[]
  }

  export type ReservaCreateNestedManyWithoutLocadorInput = {
    create?: XOR<ReservaCreateWithoutLocadorInput, ReservaUncheckedCreateWithoutLocadorInput> | ReservaCreateWithoutLocadorInput[] | ReservaUncheckedCreateWithoutLocadorInput[]
    connectOrCreate?: ReservaCreateOrConnectWithoutLocadorInput | ReservaCreateOrConnectWithoutLocadorInput[]
    createMany?: ReservaCreateManyLocadorInputEnvelope
    connect?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
  }

  export type ConversaCreateNestedManyWithoutLocadorInput = {
    create?: XOR<ConversaCreateWithoutLocadorInput, ConversaUncheckedCreateWithoutLocadorInput> | ConversaCreateWithoutLocadorInput[] | ConversaUncheckedCreateWithoutLocadorInput[]
    connectOrCreate?: ConversaCreateOrConnectWithoutLocadorInput | ConversaCreateOrConnectWithoutLocadorInput[]
    createMany?: ConversaCreateManyLocadorInputEnvelope
    connect?: ConversaWhereUniqueInput | ConversaWhereUniqueInput[]
  }

  export type MensagemCreateNestedManyWithoutRemetenteLocadorInput = {
    create?: XOR<MensagemCreateWithoutRemetenteLocadorInput, MensagemUncheckedCreateWithoutRemetenteLocadorInput> | MensagemCreateWithoutRemetenteLocadorInput[] | MensagemUncheckedCreateWithoutRemetenteLocadorInput[]
    connectOrCreate?: MensagemCreateOrConnectWithoutRemetenteLocadorInput | MensagemCreateOrConnectWithoutRemetenteLocadorInput[]
    createMany?: MensagemCreateManyRemetenteLocadorInputEnvelope
    connect?: MensagemWhereUniqueInput | MensagemWhereUniqueInput[]
  }

  export type CasaUncheckedCreateNestedManyWithoutLocadorInput = {
    create?: XOR<CasaCreateWithoutLocadorInput, CasaUncheckedCreateWithoutLocadorInput> | CasaCreateWithoutLocadorInput[] | CasaUncheckedCreateWithoutLocadorInput[]
    connectOrCreate?: CasaCreateOrConnectWithoutLocadorInput | CasaCreateOrConnectWithoutLocadorInput[]
    createMany?: CasaCreateManyLocadorInputEnvelope
    connect?: CasaWhereUniqueInput | CasaWhereUniqueInput[]
  }

  export type ReservaUncheckedCreateNestedManyWithoutLocadorInput = {
    create?: XOR<ReservaCreateWithoutLocadorInput, ReservaUncheckedCreateWithoutLocadorInput> | ReservaCreateWithoutLocadorInput[] | ReservaUncheckedCreateWithoutLocadorInput[]
    connectOrCreate?: ReservaCreateOrConnectWithoutLocadorInput | ReservaCreateOrConnectWithoutLocadorInput[]
    createMany?: ReservaCreateManyLocadorInputEnvelope
    connect?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
  }

  export type ConversaUncheckedCreateNestedManyWithoutLocadorInput = {
    create?: XOR<ConversaCreateWithoutLocadorInput, ConversaUncheckedCreateWithoutLocadorInput> | ConversaCreateWithoutLocadorInput[] | ConversaUncheckedCreateWithoutLocadorInput[]
    connectOrCreate?: ConversaCreateOrConnectWithoutLocadorInput | ConversaCreateOrConnectWithoutLocadorInput[]
    createMany?: ConversaCreateManyLocadorInputEnvelope
    connect?: ConversaWhereUniqueInput | ConversaWhereUniqueInput[]
  }

  export type MensagemUncheckedCreateNestedManyWithoutRemetenteLocadorInput = {
    create?: XOR<MensagemCreateWithoutRemetenteLocadorInput, MensagemUncheckedCreateWithoutRemetenteLocadorInput> | MensagemCreateWithoutRemetenteLocadorInput[] | MensagemUncheckedCreateWithoutRemetenteLocadorInput[]
    connectOrCreate?: MensagemCreateOrConnectWithoutRemetenteLocadorInput | MensagemCreateOrConnectWithoutRemetenteLocadorInput[]
    createMany?: MensagemCreateManyRemetenteLocadorInputEnvelope
    connect?: MensagemWhereUniqueInput | MensagemWhereUniqueInput[]
  }

  export type CasaUpdateManyWithoutLocadorNestedInput = {
    create?: XOR<CasaCreateWithoutLocadorInput, CasaUncheckedCreateWithoutLocadorInput> | CasaCreateWithoutLocadorInput[] | CasaUncheckedCreateWithoutLocadorInput[]
    connectOrCreate?: CasaCreateOrConnectWithoutLocadorInput | CasaCreateOrConnectWithoutLocadorInput[]
    upsert?: CasaUpsertWithWhereUniqueWithoutLocadorInput | CasaUpsertWithWhereUniqueWithoutLocadorInput[]
    createMany?: CasaCreateManyLocadorInputEnvelope
    set?: CasaWhereUniqueInput | CasaWhereUniqueInput[]
    disconnect?: CasaWhereUniqueInput | CasaWhereUniqueInput[]
    delete?: CasaWhereUniqueInput | CasaWhereUniqueInput[]
    connect?: CasaWhereUniqueInput | CasaWhereUniqueInput[]
    update?: CasaUpdateWithWhereUniqueWithoutLocadorInput | CasaUpdateWithWhereUniqueWithoutLocadorInput[]
    updateMany?: CasaUpdateManyWithWhereWithoutLocadorInput | CasaUpdateManyWithWhereWithoutLocadorInput[]
    deleteMany?: CasaScalarWhereInput | CasaScalarWhereInput[]
  }

  export type ReservaUpdateManyWithoutLocadorNestedInput = {
    create?: XOR<ReservaCreateWithoutLocadorInput, ReservaUncheckedCreateWithoutLocadorInput> | ReservaCreateWithoutLocadorInput[] | ReservaUncheckedCreateWithoutLocadorInput[]
    connectOrCreate?: ReservaCreateOrConnectWithoutLocadorInput | ReservaCreateOrConnectWithoutLocadorInput[]
    upsert?: ReservaUpsertWithWhereUniqueWithoutLocadorInput | ReservaUpsertWithWhereUniqueWithoutLocadorInput[]
    createMany?: ReservaCreateManyLocadorInputEnvelope
    set?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    disconnect?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    delete?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    connect?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    update?: ReservaUpdateWithWhereUniqueWithoutLocadorInput | ReservaUpdateWithWhereUniqueWithoutLocadorInput[]
    updateMany?: ReservaUpdateManyWithWhereWithoutLocadorInput | ReservaUpdateManyWithWhereWithoutLocadorInput[]
    deleteMany?: ReservaScalarWhereInput | ReservaScalarWhereInput[]
  }

  export type ConversaUpdateManyWithoutLocadorNestedInput = {
    create?: XOR<ConversaCreateWithoutLocadorInput, ConversaUncheckedCreateWithoutLocadorInput> | ConversaCreateWithoutLocadorInput[] | ConversaUncheckedCreateWithoutLocadorInput[]
    connectOrCreate?: ConversaCreateOrConnectWithoutLocadorInput | ConversaCreateOrConnectWithoutLocadorInput[]
    upsert?: ConversaUpsertWithWhereUniqueWithoutLocadorInput | ConversaUpsertWithWhereUniqueWithoutLocadorInput[]
    createMany?: ConversaCreateManyLocadorInputEnvelope
    set?: ConversaWhereUniqueInput | ConversaWhereUniqueInput[]
    disconnect?: ConversaWhereUniqueInput | ConversaWhereUniqueInput[]
    delete?: ConversaWhereUniqueInput | ConversaWhereUniqueInput[]
    connect?: ConversaWhereUniqueInput | ConversaWhereUniqueInput[]
    update?: ConversaUpdateWithWhereUniqueWithoutLocadorInput | ConversaUpdateWithWhereUniqueWithoutLocadorInput[]
    updateMany?: ConversaUpdateManyWithWhereWithoutLocadorInput | ConversaUpdateManyWithWhereWithoutLocadorInput[]
    deleteMany?: ConversaScalarWhereInput | ConversaScalarWhereInput[]
  }

  export type MensagemUpdateManyWithoutRemetenteLocadorNestedInput = {
    create?: XOR<MensagemCreateWithoutRemetenteLocadorInput, MensagemUncheckedCreateWithoutRemetenteLocadorInput> | MensagemCreateWithoutRemetenteLocadorInput[] | MensagemUncheckedCreateWithoutRemetenteLocadorInput[]
    connectOrCreate?: MensagemCreateOrConnectWithoutRemetenteLocadorInput | MensagemCreateOrConnectWithoutRemetenteLocadorInput[]
    upsert?: MensagemUpsertWithWhereUniqueWithoutRemetenteLocadorInput | MensagemUpsertWithWhereUniqueWithoutRemetenteLocadorInput[]
    createMany?: MensagemCreateManyRemetenteLocadorInputEnvelope
    set?: MensagemWhereUniqueInput | MensagemWhereUniqueInput[]
    disconnect?: MensagemWhereUniqueInput | MensagemWhereUniqueInput[]
    delete?: MensagemWhereUniqueInput | MensagemWhereUniqueInput[]
    connect?: MensagemWhereUniqueInput | MensagemWhereUniqueInput[]
    update?: MensagemUpdateWithWhereUniqueWithoutRemetenteLocadorInput | MensagemUpdateWithWhereUniqueWithoutRemetenteLocadorInput[]
    updateMany?: MensagemUpdateManyWithWhereWithoutRemetenteLocadorInput | MensagemUpdateManyWithWhereWithoutRemetenteLocadorInput[]
    deleteMany?: MensagemScalarWhereInput | MensagemScalarWhereInput[]
  }

  export type CasaUncheckedUpdateManyWithoutLocadorNestedInput = {
    create?: XOR<CasaCreateWithoutLocadorInput, CasaUncheckedCreateWithoutLocadorInput> | CasaCreateWithoutLocadorInput[] | CasaUncheckedCreateWithoutLocadorInput[]
    connectOrCreate?: CasaCreateOrConnectWithoutLocadorInput | CasaCreateOrConnectWithoutLocadorInput[]
    upsert?: CasaUpsertWithWhereUniqueWithoutLocadorInput | CasaUpsertWithWhereUniqueWithoutLocadorInput[]
    createMany?: CasaCreateManyLocadorInputEnvelope
    set?: CasaWhereUniqueInput | CasaWhereUniqueInput[]
    disconnect?: CasaWhereUniqueInput | CasaWhereUniqueInput[]
    delete?: CasaWhereUniqueInput | CasaWhereUniqueInput[]
    connect?: CasaWhereUniqueInput | CasaWhereUniqueInput[]
    update?: CasaUpdateWithWhereUniqueWithoutLocadorInput | CasaUpdateWithWhereUniqueWithoutLocadorInput[]
    updateMany?: CasaUpdateManyWithWhereWithoutLocadorInput | CasaUpdateManyWithWhereWithoutLocadorInput[]
    deleteMany?: CasaScalarWhereInput | CasaScalarWhereInput[]
  }

  export type ReservaUncheckedUpdateManyWithoutLocadorNestedInput = {
    create?: XOR<ReservaCreateWithoutLocadorInput, ReservaUncheckedCreateWithoutLocadorInput> | ReservaCreateWithoutLocadorInput[] | ReservaUncheckedCreateWithoutLocadorInput[]
    connectOrCreate?: ReservaCreateOrConnectWithoutLocadorInput | ReservaCreateOrConnectWithoutLocadorInput[]
    upsert?: ReservaUpsertWithWhereUniqueWithoutLocadorInput | ReservaUpsertWithWhereUniqueWithoutLocadorInput[]
    createMany?: ReservaCreateManyLocadorInputEnvelope
    set?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    disconnect?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    delete?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    connect?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    update?: ReservaUpdateWithWhereUniqueWithoutLocadorInput | ReservaUpdateWithWhereUniqueWithoutLocadorInput[]
    updateMany?: ReservaUpdateManyWithWhereWithoutLocadorInput | ReservaUpdateManyWithWhereWithoutLocadorInput[]
    deleteMany?: ReservaScalarWhereInput | ReservaScalarWhereInput[]
  }

  export type ConversaUncheckedUpdateManyWithoutLocadorNestedInput = {
    create?: XOR<ConversaCreateWithoutLocadorInput, ConversaUncheckedCreateWithoutLocadorInput> | ConversaCreateWithoutLocadorInput[] | ConversaUncheckedCreateWithoutLocadorInput[]
    connectOrCreate?: ConversaCreateOrConnectWithoutLocadorInput | ConversaCreateOrConnectWithoutLocadorInput[]
    upsert?: ConversaUpsertWithWhereUniqueWithoutLocadorInput | ConversaUpsertWithWhereUniqueWithoutLocadorInput[]
    createMany?: ConversaCreateManyLocadorInputEnvelope
    set?: ConversaWhereUniqueInput | ConversaWhereUniqueInput[]
    disconnect?: ConversaWhereUniqueInput | ConversaWhereUniqueInput[]
    delete?: ConversaWhereUniqueInput | ConversaWhereUniqueInput[]
    connect?: ConversaWhereUniqueInput | ConversaWhereUniqueInput[]
    update?: ConversaUpdateWithWhereUniqueWithoutLocadorInput | ConversaUpdateWithWhereUniqueWithoutLocadorInput[]
    updateMany?: ConversaUpdateManyWithWhereWithoutLocadorInput | ConversaUpdateManyWithWhereWithoutLocadorInput[]
    deleteMany?: ConversaScalarWhereInput | ConversaScalarWhereInput[]
  }

  export type MensagemUncheckedUpdateManyWithoutRemetenteLocadorNestedInput = {
    create?: XOR<MensagemCreateWithoutRemetenteLocadorInput, MensagemUncheckedCreateWithoutRemetenteLocadorInput> | MensagemCreateWithoutRemetenteLocadorInput[] | MensagemUncheckedCreateWithoutRemetenteLocadorInput[]
    connectOrCreate?: MensagemCreateOrConnectWithoutRemetenteLocadorInput | MensagemCreateOrConnectWithoutRemetenteLocadorInput[]
    upsert?: MensagemUpsertWithWhereUniqueWithoutRemetenteLocadorInput | MensagemUpsertWithWhereUniqueWithoutRemetenteLocadorInput[]
    createMany?: MensagemCreateManyRemetenteLocadorInputEnvelope
    set?: MensagemWhereUniqueInput | MensagemWhereUniqueInput[]
    disconnect?: MensagemWhereUniqueInput | MensagemWhereUniqueInput[]
    delete?: MensagemWhereUniqueInput | MensagemWhereUniqueInput[]
    connect?: MensagemWhereUniqueInput | MensagemWhereUniqueInput[]
    update?: MensagemUpdateWithWhereUniqueWithoutRemetenteLocadorInput | MensagemUpdateWithWhereUniqueWithoutRemetenteLocadorInput[]
    updateMany?: MensagemUpdateManyWithWhereWithoutRemetenteLocadorInput | MensagemUpdateManyWithWhereWithoutRemetenteLocadorInput[]
    deleteMany?: MensagemScalarWhereInput | MensagemScalarWhereInput[]
  }

  export type ReservaCreateNestedManyWithoutHospedeInput = {
    create?: XOR<ReservaCreateWithoutHospedeInput, ReservaUncheckedCreateWithoutHospedeInput> | ReservaCreateWithoutHospedeInput[] | ReservaUncheckedCreateWithoutHospedeInput[]
    connectOrCreate?: ReservaCreateOrConnectWithoutHospedeInput | ReservaCreateOrConnectWithoutHospedeInput[]
    createMany?: ReservaCreateManyHospedeInputEnvelope
    connect?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
  }

  export type FavoritoCreateNestedManyWithoutHospedeInput = {
    create?: XOR<FavoritoCreateWithoutHospedeInput, FavoritoUncheckedCreateWithoutHospedeInput> | FavoritoCreateWithoutHospedeInput[] | FavoritoUncheckedCreateWithoutHospedeInput[]
    connectOrCreate?: FavoritoCreateOrConnectWithoutHospedeInput | FavoritoCreateOrConnectWithoutHospedeInput[]
    createMany?: FavoritoCreateManyHospedeInputEnvelope
    connect?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
  }

  export type ConversaCreateNestedManyWithoutHospedeInput = {
    create?: XOR<ConversaCreateWithoutHospedeInput, ConversaUncheckedCreateWithoutHospedeInput> | ConversaCreateWithoutHospedeInput[] | ConversaUncheckedCreateWithoutHospedeInput[]
    connectOrCreate?: ConversaCreateOrConnectWithoutHospedeInput | ConversaCreateOrConnectWithoutHospedeInput[]
    createMany?: ConversaCreateManyHospedeInputEnvelope
    connect?: ConversaWhereUniqueInput | ConversaWhereUniqueInput[]
  }

  export type MensagemCreateNestedManyWithoutRemetenteHospedeInput = {
    create?: XOR<MensagemCreateWithoutRemetenteHospedeInput, MensagemUncheckedCreateWithoutRemetenteHospedeInput> | MensagemCreateWithoutRemetenteHospedeInput[] | MensagemUncheckedCreateWithoutRemetenteHospedeInput[]
    connectOrCreate?: MensagemCreateOrConnectWithoutRemetenteHospedeInput | MensagemCreateOrConnectWithoutRemetenteHospedeInput[]
    createMany?: MensagemCreateManyRemetenteHospedeInputEnvelope
    connect?: MensagemWhereUniqueInput | MensagemWhereUniqueInput[]
  }

  export type AvaliacaoCreateNestedManyWithoutHospedeInput = {
    create?: XOR<AvaliacaoCreateWithoutHospedeInput, AvaliacaoUncheckedCreateWithoutHospedeInput> | AvaliacaoCreateWithoutHospedeInput[] | AvaliacaoUncheckedCreateWithoutHospedeInput[]
    connectOrCreate?: AvaliacaoCreateOrConnectWithoutHospedeInput | AvaliacaoCreateOrConnectWithoutHospedeInput[]
    createMany?: AvaliacaoCreateManyHospedeInputEnvelope
    connect?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
  }

  export type ReservaUncheckedCreateNestedManyWithoutHospedeInput = {
    create?: XOR<ReservaCreateWithoutHospedeInput, ReservaUncheckedCreateWithoutHospedeInput> | ReservaCreateWithoutHospedeInput[] | ReservaUncheckedCreateWithoutHospedeInput[]
    connectOrCreate?: ReservaCreateOrConnectWithoutHospedeInput | ReservaCreateOrConnectWithoutHospedeInput[]
    createMany?: ReservaCreateManyHospedeInputEnvelope
    connect?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
  }

  export type FavoritoUncheckedCreateNestedManyWithoutHospedeInput = {
    create?: XOR<FavoritoCreateWithoutHospedeInput, FavoritoUncheckedCreateWithoutHospedeInput> | FavoritoCreateWithoutHospedeInput[] | FavoritoUncheckedCreateWithoutHospedeInput[]
    connectOrCreate?: FavoritoCreateOrConnectWithoutHospedeInput | FavoritoCreateOrConnectWithoutHospedeInput[]
    createMany?: FavoritoCreateManyHospedeInputEnvelope
    connect?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
  }

  export type ConversaUncheckedCreateNestedManyWithoutHospedeInput = {
    create?: XOR<ConversaCreateWithoutHospedeInput, ConversaUncheckedCreateWithoutHospedeInput> | ConversaCreateWithoutHospedeInput[] | ConversaUncheckedCreateWithoutHospedeInput[]
    connectOrCreate?: ConversaCreateOrConnectWithoutHospedeInput | ConversaCreateOrConnectWithoutHospedeInput[]
    createMany?: ConversaCreateManyHospedeInputEnvelope
    connect?: ConversaWhereUniqueInput | ConversaWhereUniqueInput[]
  }

  export type MensagemUncheckedCreateNestedManyWithoutRemetenteHospedeInput = {
    create?: XOR<MensagemCreateWithoutRemetenteHospedeInput, MensagemUncheckedCreateWithoutRemetenteHospedeInput> | MensagemCreateWithoutRemetenteHospedeInput[] | MensagemUncheckedCreateWithoutRemetenteHospedeInput[]
    connectOrCreate?: MensagemCreateOrConnectWithoutRemetenteHospedeInput | MensagemCreateOrConnectWithoutRemetenteHospedeInput[]
    createMany?: MensagemCreateManyRemetenteHospedeInputEnvelope
    connect?: MensagemWhereUniqueInput | MensagemWhereUniqueInput[]
  }

  export type AvaliacaoUncheckedCreateNestedManyWithoutHospedeInput = {
    create?: XOR<AvaliacaoCreateWithoutHospedeInput, AvaliacaoUncheckedCreateWithoutHospedeInput> | AvaliacaoCreateWithoutHospedeInput[] | AvaliacaoUncheckedCreateWithoutHospedeInput[]
    connectOrCreate?: AvaliacaoCreateOrConnectWithoutHospedeInput | AvaliacaoCreateOrConnectWithoutHospedeInput[]
    createMany?: AvaliacaoCreateManyHospedeInputEnvelope
    connect?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
  }

  export type ReservaUpdateManyWithoutHospedeNestedInput = {
    create?: XOR<ReservaCreateWithoutHospedeInput, ReservaUncheckedCreateWithoutHospedeInput> | ReservaCreateWithoutHospedeInput[] | ReservaUncheckedCreateWithoutHospedeInput[]
    connectOrCreate?: ReservaCreateOrConnectWithoutHospedeInput | ReservaCreateOrConnectWithoutHospedeInput[]
    upsert?: ReservaUpsertWithWhereUniqueWithoutHospedeInput | ReservaUpsertWithWhereUniqueWithoutHospedeInput[]
    createMany?: ReservaCreateManyHospedeInputEnvelope
    set?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    disconnect?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    delete?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    connect?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    update?: ReservaUpdateWithWhereUniqueWithoutHospedeInput | ReservaUpdateWithWhereUniqueWithoutHospedeInput[]
    updateMany?: ReservaUpdateManyWithWhereWithoutHospedeInput | ReservaUpdateManyWithWhereWithoutHospedeInput[]
    deleteMany?: ReservaScalarWhereInput | ReservaScalarWhereInput[]
  }

  export type FavoritoUpdateManyWithoutHospedeNestedInput = {
    create?: XOR<FavoritoCreateWithoutHospedeInput, FavoritoUncheckedCreateWithoutHospedeInput> | FavoritoCreateWithoutHospedeInput[] | FavoritoUncheckedCreateWithoutHospedeInput[]
    connectOrCreate?: FavoritoCreateOrConnectWithoutHospedeInput | FavoritoCreateOrConnectWithoutHospedeInput[]
    upsert?: FavoritoUpsertWithWhereUniqueWithoutHospedeInput | FavoritoUpsertWithWhereUniqueWithoutHospedeInput[]
    createMany?: FavoritoCreateManyHospedeInputEnvelope
    set?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
    disconnect?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
    delete?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
    connect?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
    update?: FavoritoUpdateWithWhereUniqueWithoutHospedeInput | FavoritoUpdateWithWhereUniqueWithoutHospedeInput[]
    updateMany?: FavoritoUpdateManyWithWhereWithoutHospedeInput | FavoritoUpdateManyWithWhereWithoutHospedeInput[]
    deleteMany?: FavoritoScalarWhereInput | FavoritoScalarWhereInput[]
  }

  export type ConversaUpdateManyWithoutHospedeNestedInput = {
    create?: XOR<ConversaCreateWithoutHospedeInput, ConversaUncheckedCreateWithoutHospedeInput> | ConversaCreateWithoutHospedeInput[] | ConversaUncheckedCreateWithoutHospedeInput[]
    connectOrCreate?: ConversaCreateOrConnectWithoutHospedeInput | ConversaCreateOrConnectWithoutHospedeInput[]
    upsert?: ConversaUpsertWithWhereUniqueWithoutHospedeInput | ConversaUpsertWithWhereUniqueWithoutHospedeInput[]
    createMany?: ConversaCreateManyHospedeInputEnvelope
    set?: ConversaWhereUniqueInput | ConversaWhereUniqueInput[]
    disconnect?: ConversaWhereUniqueInput | ConversaWhereUniqueInput[]
    delete?: ConversaWhereUniqueInput | ConversaWhereUniqueInput[]
    connect?: ConversaWhereUniqueInput | ConversaWhereUniqueInput[]
    update?: ConversaUpdateWithWhereUniqueWithoutHospedeInput | ConversaUpdateWithWhereUniqueWithoutHospedeInput[]
    updateMany?: ConversaUpdateManyWithWhereWithoutHospedeInput | ConversaUpdateManyWithWhereWithoutHospedeInput[]
    deleteMany?: ConversaScalarWhereInput | ConversaScalarWhereInput[]
  }

  export type MensagemUpdateManyWithoutRemetenteHospedeNestedInput = {
    create?: XOR<MensagemCreateWithoutRemetenteHospedeInput, MensagemUncheckedCreateWithoutRemetenteHospedeInput> | MensagemCreateWithoutRemetenteHospedeInput[] | MensagemUncheckedCreateWithoutRemetenteHospedeInput[]
    connectOrCreate?: MensagemCreateOrConnectWithoutRemetenteHospedeInput | MensagemCreateOrConnectWithoutRemetenteHospedeInput[]
    upsert?: MensagemUpsertWithWhereUniqueWithoutRemetenteHospedeInput | MensagemUpsertWithWhereUniqueWithoutRemetenteHospedeInput[]
    createMany?: MensagemCreateManyRemetenteHospedeInputEnvelope
    set?: MensagemWhereUniqueInput | MensagemWhereUniqueInput[]
    disconnect?: MensagemWhereUniqueInput | MensagemWhereUniqueInput[]
    delete?: MensagemWhereUniqueInput | MensagemWhereUniqueInput[]
    connect?: MensagemWhereUniqueInput | MensagemWhereUniqueInput[]
    update?: MensagemUpdateWithWhereUniqueWithoutRemetenteHospedeInput | MensagemUpdateWithWhereUniqueWithoutRemetenteHospedeInput[]
    updateMany?: MensagemUpdateManyWithWhereWithoutRemetenteHospedeInput | MensagemUpdateManyWithWhereWithoutRemetenteHospedeInput[]
    deleteMany?: MensagemScalarWhereInput | MensagemScalarWhereInput[]
  }

  export type AvaliacaoUpdateManyWithoutHospedeNestedInput = {
    create?: XOR<AvaliacaoCreateWithoutHospedeInput, AvaliacaoUncheckedCreateWithoutHospedeInput> | AvaliacaoCreateWithoutHospedeInput[] | AvaliacaoUncheckedCreateWithoutHospedeInput[]
    connectOrCreate?: AvaliacaoCreateOrConnectWithoutHospedeInput | AvaliacaoCreateOrConnectWithoutHospedeInput[]
    upsert?: AvaliacaoUpsertWithWhereUniqueWithoutHospedeInput | AvaliacaoUpsertWithWhereUniqueWithoutHospedeInput[]
    createMany?: AvaliacaoCreateManyHospedeInputEnvelope
    set?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
    disconnect?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
    delete?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
    connect?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
    update?: AvaliacaoUpdateWithWhereUniqueWithoutHospedeInput | AvaliacaoUpdateWithWhereUniqueWithoutHospedeInput[]
    updateMany?: AvaliacaoUpdateManyWithWhereWithoutHospedeInput | AvaliacaoUpdateManyWithWhereWithoutHospedeInput[]
    deleteMany?: AvaliacaoScalarWhereInput | AvaliacaoScalarWhereInput[]
  }

  export type ReservaUncheckedUpdateManyWithoutHospedeNestedInput = {
    create?: XOR<ReservaCreateWithoutHospedeInput, ReservaUncheckedCreateWithoutHospedeInput> | ReservaCreateWithoutHospedeInput[] | ReservaUncheckedCreateWithoutHospedeInput[]
    connectOrCreate?: ReservaCreateOrConnectWithoutHospedeInput | ReservaCreateOrConnectWithoutHospedeInput[]
    upsert?: ReservaUpsertWithWhereUniqueWithoutHospedeInput | ReservaUpsertWithWhereUniqueWithoutHospedeInput[]
    createMany?: ReservaCreateManyHospedeInputEnvelope
    set?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    disconnect?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    delete?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    connect?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    update?: ReservaUpdateWithWhereUniqueWithoutHospedeInput | ReservaUpdateWithWhereUniqueWithoutHospedeInput[]
    updateMany?: ReservaUpdateManyWithWhereWithoutHospedeInput | ReservaUpdateManyWithWhereWithoutHospedeInput[]
    deleteMany?: ReservaScalarWhereInput | ReservaScalarWhereInput[]
  }

  export type FavoritoUncheckedUpdateManyWithoutHospedeNestedInput = {
    create?: XOR<FavoritoCreateWithoutHospedeInput, FavoritoUncheckedCreateWithoutHospedeInput> | FavoritoCreateWithoutHospedeInput[] | FavoritoUncheckedCreateWithoutHospedeInput[]
    connectOrCreate?: FavoritoCreateOrConnectWithoutHospedeInput | FavoritoCreateOrConnectWithoutHospedeInput[]
    upsert?: FavoritoUpsertWithWhereUniqueWithoutHospedeInput | FavoritoUpsertWithWhereUniqueWithoutHospedeInput[]
    createMany?: FavoritoCreateManyHospedeInputEnvelope
    set?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
    disconnect?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
    delete?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
    connect?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
    update?: FavoritoUpdateWithWhereUniqueWithoutHospedeInput | FavoritoUpdateWithWhereUniqueWithoutHospedeInput[]
    updateMany?: FavoritoUpdateManyWithWhereWithoutHospedeInput | FavoritoUpdateManyWithWhereWithoutHospedeInput[]
    deleteMany?: FavoritoScalarWhereInput | FavoritoScalarWhereInput[]
  }

  export type ConversaUncheckedUpdateManyWithoutHospedeNestedInput = {
    create?: XOR<ConversaCreateWithoutHospedeInput, ConversaUncheckedCreateWithoutHospedeInput> | ConversaCreateWithoutHospedeInput[] | ConversaUncheckedCreateWithoutHospedeInput[]
    connectOrCreate?: ConversaCreateOrConnectWithoutHospedeInput | ConversaCreateOrConnectWithoutHospedeInput[]
    upsert?: ConversaUpsertWithWhereUniqueWithoutHospedeInput | ConversaUpsertWithWhereUniqueWithoutHospedeInput[]
    createMany?: ConversaCreateManyHospedeInputEnvelope
    set?: ConversaWhereUniqueInput | ConversaWhereUniqueInput[]
    disconnect?: ConversaWhereUniqueInput | ConversaWhereUniqueInput[]
    delete?: ConversaWhereUniqueInput | ConversaWhereUniqueInput[]
    connect?: ConversaWhereUniqueInput | ConversaWhereUniqueInput[]
    update?: ConversaUpdateWithWhereUniqueWithoutHospedeInput | ConversaUpdateWithWhereUniqueWithoutHospedeInput[]
    updateMany?: ConversaUpdateManyWithWhereWithoutHospedeInput | ConversaUpdateManyWithWhereWithoutHospedeInput[]
    deleteMany?: ConversaScalarWhereInput | ConversaScalarWhereInput[]
  }

  export type MensagemUncheckedUpdateManyWithoutRemetenteHospedeNestedInput = {
    create?: XOR<MensagemCreateWithoutRemetenteHospedeInput, MensagemUncheckedCreateWithoutRemetenteHospedeInput> | MensagemCreateWithoutRemetenteHospedeInput[] | MensagemUncheckedCreateWithoutRemetenteHospedeInput[]
    connectOrCreate?: MensagemCreateOrConnectWithoutRemetenteHospedeInput | MensagemCreateOrConnectWithoutRemetenteHospedeInput[]
    upsert?: MensagemUpsertWithWhereUniqueWithoutRemetenteHospedeInput | MensagemUpsertWithWhereUniqueWithoutRemetenteHospedeInput[]
    createMany?: MensagemCreateManyRemetenteHospedeInputEnvelope
    set?: MensagemWhereUniqueInput | MensagemWhereUniqueInput[]
    disconnect?: MensagemWhereUniqueInput | MensagemWhereUniqueInput[]
    delete?: MensagemWhereUniqueInput | MensagemWhereUniqueInput[]
    connect?: MensagemWhereUniqueInput | MensagemWhereUniqueInput[]
    update?: MensagemUpdateWithWhereUniqueWithoutRemetenteHospedeInput | MensagemUpdateWithWhereUniqueWithoutRemetenteHospedeInput[]
    updateMany?: MensagemUpdateManyWithWhereWithoutRemetenteHospedeInput | MensagemUpdateManyWithWhereWithoutRemetenteHospedeInput[]
    deleteMany?: MensagemScalarWhereInput | MensagemScalarWhereInput[]
  }

  export type AvaliacaoUncheckedUpdateManyWithoutHospedeNestedInput = {
    create?: XOR<AvaliacaoCreateWithoutHospedeInput, AvaliacaoUncheckedCreateWithoutHospedeInput> | AvaliacaoCreateWithoutHospedeInput[] | AvaliacaoUncheckedCreateWithoutHospedeInput[]
    connectOrCreate?: AvaliacaoCreateOrConnectWithoutHospedeInput | AvaliacaoCreateOrConnectWithoutHospedeInput[]
    upsert?: AvaliacaoUpsertWithWhereUniqueWithoutHospedeInput | AvaliacaoUpsertWithWhereUniqueWithoutHospedeInput[]
    createMany?: AvaliacaoCreateManyHospedeInputEnvelope
    set?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
    disconnect?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
    delete?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
    connect?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
    update?: AvaliacaoUpdateWithWhereUniqueWithoutHospedeInput | AvaliacaoUpdateWithWhereUniqueWithoutHospedeInput[]
    updateMany?: AvaliacaoUpdateManyWithWhereWithoutHospedeInput | AvaliacaoUpdateManyWithWhereWithoutHospedeInput[]
    deleteMany?: AvaliacaoScalarWhereInput | AvaliacaoScalarWhereInput[]
  }

  export type HospedeCreateNestedOneWithoutReservasInput = {
    create?: XOR<HospedeCreateWithoutReservasInput, HospedeUncheckedCreateWithoutReservasInput>
    connectOrCreate?: HospedeCreateOrConnectWithoutReservasInput
    connect?: HospedeWhereUniqueInput
  }

  export type CasaCreateNestedOneWithoutReservasInput = {
    create?: XOR<CasaCreateWithoutReservasInput, CasaUncheckedCreateWithoutReservasInput>
    connectOrCreate?: CasaCreateOrConnectWithoutReservasInput
    connect?: CasaWhereUniqueInput
  }

  export type LocadorCreateNestedOneWithoutReservasInput = {
    create?: XOR<LocadorCreateWithoutReservasInput, LocadorUncheckedCreateWithoutReservasInput>
    connectOrCreate?: LocadorCreateOrConnectWithoutReservasInput
    connect?: LocadorWhereUniqueInput
  }

  export type AvaliacaoCreateNestedOneWithoutReservaInput = {
    create?: XOR<AvaliacaoCreateWithoutReservaInput, AvaliacaoUncheckedCreateWithoutReservaInput>
    connectOrCreate?: AvaliacaoCreateOrConnectWithoutReservaInput
    connect?: AvaliacaoWhereUniqueInput
  }

  export type AvaliacaoUncheckedCreateNestedOneWithoutReservaInput = {
    create?: XOR<AvaliacaoCreateWithoutReservaInput, AvaliacaoUncheckedCreateWithoutReservaInput>
    connectOrCreate?: AvaliacaoCreateOrConnectWithoutReservaInput
    connect?: AvaliacaoWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type HospedeUpdateOneRequiredWithoutReservasNestedInput = {
    create?: XOR<HospedeCreateWithoutReservasInput, HospedeUncheckedCreateWithoutReservasInput>
    connectOrCreate?: HospedeCreateOrConnectWithoutReservasInput
    upsert?: HospedeUpsertWithoutReservasInput
    connect?: HospedeWhereUniqueInput
    update?: XOR<XOR<HospedeUpdateToOneWithWhereWithoutReservasInput, HospedeUpdateWithoutReservasInput>, HospedeUncheckedUpdateWithoutReservasInput>
  }

  export type CasaUpdateOneRequiredWithoutReservasNestedInput = {
    create?: XOR<CasaCreateWithoutReservasInput, CasaUncheckedCreateWithoutReservasInput>
    connectOrCreate?: CasaCreateOrConnectWithoutReservasInput
    upsert?: CasaUpsertWithoutReservasInput
    connect?: CasaWhereUniqueInput
    update?: XOR<XOR<CasaUpdateToOneWithWhereWithoutReservasInput, CasaUpdateWithoutReservasInput>, CasaUncheckedUpdateWithoutReservasInput>
  }

  export type LocadorUpdateOneRequiredWithoutReservasNestedInput = {
    create?: XOR<LocadorCreateWithoutReservasInput, LocadorUncheckedCreateWithoutReservasInput>
    connectOrCreate?: LocadorCreateOrConnectWithoutReservasInput
    upsert?: LocadorUpsertWithoutReservasInput
    connect?: LocadorWhereUniqueInput
    update?: XOR<XOR<LocadorUpdateToOneWithWhereWithoutReservasInput, LocadorUpdateWithoutReservasInput>, LocadorUncheckedUpdateWithoutReservasInput>
  }

  export type AvaliacaoUpdateOneWithoutReservaNestedInput = {
    create?: XOR<AvaliacaoCreateWithoutReservaInput, AvaliacaoUncheckedCreateWithoutReservaInput>
    connectOrCreate?: AvaliacaoCreateOrConnectWithoutReservaInput
    upsert?: AvaliacaoUpsertWithoutReservaInput
    disconnect?: AvaliacaoWhereInput | boolean
    delete?: AvaliacaoWhereInput | boolean
    connect?: AvaliacaoWhereUniqueInput
    update?: XOR<XOR<AvaliacaoUpdateToOneWithWhereWithoutReservaInput, AvaliacaoUpdateWithoutReservaInput>, AvaliacaoUncheckedUpdateWithoutReservaInput>
  }

  export type AvaliacaoUncheckedUpdateOneWithoutReservaNestedInput = {
    create?: XOR<AvaliacaoCreateWithoutReservaInput, AvaliacaoUncheckedCreateWithoutReservaInput>
    connectOrCreate?: AvaliacaoCreateOrConnectWithoutReservaInput
    upsert?: AvaliacaoUpsertWithoutReservaInput
    disconnect?: AvaliacaoWhereInput | boolean
    delete?: AvaliacaoWhereInput | boolean
    connect?: AvaliacaoWhereUniqueInput
    update?: XOR<XOR<AvaliacaoUpdateToOneWithWhereWithoutReservaInput, AvaliacaoUpdateWithoutReservaInput>, AvaliacaoUncheckedUpdateWithoutReservaInput>
  }

  export type HospedeCreateNestedOneWithoutFavoritosInput = {
    create?: XOR<HospedeCreateWithoutFavoritosInput, HospedeUncheckedCreateWithoutFavoritosInput>
    connectOrCreate?: HospedeCreateOrConnectWithoutFavoritosInput
    connect?: HospedeWhereUniqueInput
  }

  export type CasaCreateNestedOneWithoutFavoritosInput = {
    create?: XOR<CasaCreateWithoutFavoritosInput, CasaUncheckedCreateWithoutFavoritosInput>
    connectOrCreate?: CasaCreateOrConnectWithoutFavoritosInput
    connect?: CasaWhereUniqueInput
  }

  export type HospedeUpdateOneRequiredWithoutFavoritosNestedInput = {
    create?: XOR<HospedeCreateWithoutFavoritosInput, HospedeUncheckedCreateWithoutFavoritosInput>
    connectOrCreate?: HospedeCreateOrConnectWithoutFavoritosInput
    upsert?: HospedeUpsertWithoutFavoritosInput
    connect?: HospedeWhereUniqueInput
    update?: XOR<XOR<HospedeUpdateToOneWithWhereWithoutFavoritosInput, HospedeUpdateWithoutFavoritosInput>, HospedeUncheckedUpdateWithoutFavoritosInput>
  }

  export type CasaUpdateOneRequiredWithoutFavoritosNestedInput = {
    create?: XOR<CasaCreateWithoutFavoritosInput, CasaUncheckedCreateWithoutFavoritosInput>
    connectOrCreate?: CasaCreateOrConnectWithoutFavoritosInput
    upsert?: CasaUpsertWithoutFavoritosInput
    connect?: CasaWhereUniqueInput
    update?: XOR<XOR<CasaUpdateToOneWithWhereWithoutFavoritosInput, CasaUpdateWithoutFavoritosInput>, CasaUncheckedUpdateWithoutFavoritosInput>
  }

  export type HospedeCreateNestedOneWithoutConversasInput = {
    create?: XOR<HospedeCreateWithoutConversasInput, HospedeUncheckedCreateWithoutConversasInput>
    connectOrCreate?: HospedeCreateOrConnectWithoutConversasInput
    connect?: HospedeWhereUniqueInput
  }

  export type LocadorCreateNestedOneWithoutConversasInput = {
    create?: XOR<LocadorCreateWithoutConversasInput, LocadorUncheckedCreateWithoutConversasInput>
    connectOrCreate?: LocadorCreateOrConnectWithoutConversasInput
    connect?: LocadorWhereUniqueInput
  }

  export type CasaCreateNestedOneWithoutConversasInput = {
    create?: XOR<CasaCreateWithoutConversasInput, CasaUncheckedCreateWithoutConversasInput>
    connectOrCreate?: CasaCreateOrConnectWithoutConversasInput
    connect?: CasaWhereUniqueInput
  }

  export type MensagemCreateNestedManyWithoutConversaInput = {
    create?: XOR<MensagemCreateWithoutConversaInput, MensagemUncheckedCreateWithoutConversaInput> | MensagemCreateWithoutConversaInput[] | MensagemUncheckedCreateWithoutConversaInput[]
    connectOrCreate?: MensagemCreateOrConnectWithoutConversaInput | MensagemCreateOrConnectWithoutConversaInput[]
    createMany?: MensagemCreateManyConversaInputEnvelope
    connect?: MensagemWhereUniqueInput | MensagemWhereUniqueInput[]
  }

  export type MensagemUncheckedCreateNestedManyWithoutConversaInput = {
    create?: XOR<MensagemCreateWithoutConversaInput, MensagemUncheckedCreateWithoutConversaInput> | MensagemCreateWithoutConversaInput[] | MensagemUncheckedCreateWithoutConversaInput[]
    connectOrCreate?: MensagemCreateOrConnectWithoutConversaInput | MensagemCreateOrConnectWithoutConversaInput[]
    createMany?: MensagemCreateManyConversaInputEnvelope
    connect?: MensagemWhereUniqueInput | MensagemWhereUniqueInput[]
  }

  export type HospedeUpdateOneRequiredWithoutConversasNestedInput = {
    create?: XOR<HospedeCreateWithoutConversasInput, HospedeUncheckedCreateWithoutConversasInput>
    connectOrCreate?: HospedeCreateOrConnectWithoutConversasInput
    upsert?: HospedeUpsertWithoutConversasInput
    connect?: HospedeWhereUniqueInput
    update?: XOR<XOR<HospedeUpdateToOneWithWhereWithoutConversasInput, HospedeUpdateWithoutConversasInput>, HospedeUncheckedUpdateWithoutConversasInput>
  }

  export type LocadorUpdateOneRequiredWithoutConversasNestedInput = {
    create?: XOR<LocadorCreateWithoutConversasInput, LocadorUncheckedCreateWithoutConversasInput>
    connectOrCreate?: LocadorCreateOrConnectWithoutConversasInput
    upsert?: LocadorUpsertWithoutConversasInput
    connect?: LocadorWhereUniqueInput
    update?: XOR<XOR<LocadorUpdateToOneWithWhereWithoutConversasInput, LocadorUpdateWithoutConversasInput>, LocadorUncheckedUpdateWithoutConversasInput>
  }

  export type CasaUpdateOneWithoutConversasNestedInput = {
    create?: XOR<CasaCreateWithoutConversasInput, CasaUncheckedCreateWithoutConversasInput>
    connectOrCreate?: CasaCreateOrConnectWithoutConversasInput
    upsert?: CasaUpsertWithoutConversasInput
    disconnect?: CasaWhereInput | boolean
    delete?: CasaWhereInput | boolean
    connect?: CasaWhereUniqueInput
    update?: XOR<XOR<CasaUpdateToOneWithWhereWithoutConversasInput, CasaUpdateWithoutConversasInput>, CasaUncheckedUpdateWithoutConversasInput>
  }

  export type MensagemUpdateManyWithoutConversaNestedInput = {
    create?: XOR<MensagemCreateWithoutConversaInput, MensagemUncheckedCreateWithoutConversaInput> | MensagemCreateWithoutConversaInput[] | MensagemUncheckedCreateWithoutConversaInput[]
    connectOrCreate?: MensagemCreateOrConnectWithoutConversaInput | MensagemCreateOrConnectWithoutConversaInput[]
    upsert?: MensagemUpsertWithWhereUniqueWithoutConversaInput | MensagemUpsertWithWhereUniqueWithoutConversaInput[]
    createMany?: MensagemCreateManyConversaInputEnvelope
    set?: MensagemWhereUniqueInput | MensagemWhereUniqueInput[]
    disconnect?: MensagemWhereUniqueInput | MensagemWhereUniqueInput[]
    delete?: MensagemWhereUniqueInput | MensagemWhereUniqueInput[]
    connect?: MensagemWhereUniqueInput | MensagemWhereUniqueInput[]
    update?: MensagemUpdateWithWhereUniqueWithoutConversaInput | MensagemUpdateWithWhereUniqueWithoutConversaInput[]
    updateMany?: MensagemUpdateManyWithWhereWithoutConversaInput | MensagemUpdateManyWithWhereWithoutConversaInput[]
    deleteMany?: MensagemScalarWhereInput | MensagemScalarWhereInput[]
  }

  export type MensagemUncheckedUpdateManyWithoutConversaNestedInput = {
    create?: XOR<MensagemCreateWithoutConversaInput, MensagemUncheckedCreateWithoutConversaInput> | MensagemCreateWithoutConversaInput[] | MensagemUncheckedCreateWithoutConversaInput[]
    connectOrCreate?: MensagemCreateOrConnectWithoutConversaInput | MensagemCreateOrConnectWithoutConversaInput[]
    upsert?: MensagemUpsertWithWhereUniqueWithoutConversaInput | MensagemUpsertWithWhereUniqueWithoutConversaInput[]
    createMany?: MensagemCreateManyConversaInputEnvelope
    set?: MensagemWhereUniqueInput | MensagemWhereUniqueInput[]
    disconnect?: MensagemWhereUniqueInput | MensagemWhereUniqueInput[]
    delete?: MensagemWhereUniqueInput | MensagemWhereUniqueInput[]
    connect?: MensagemWhereUniqueInput | MensagemWhereUniqueInput[]
    update?: MensagemUpdateWithWhereUniqueWithoutConversaInput | MensagemUpdateWithWhereUniqueWithoutConversaInput[]
    updateMany?: MensagemUpdateManyWithWhereWithoutConversaInput | MensagemUpdateManyWithWhereWithoutConversaInput[]
    deleteMany?: MensagemScalarWhereInput | MensagemScalarWhereInput[]
  }

  export type ConversaCreateNestedOneWithoutMensagensInput = {
    create?: XOR<ConversaCreateWithoutMensagensInput, ConversaUncheckedCreateWithoutMensagensInput>
    connectOrCreate?: ConversaCreateOrConnectWithoutMensagensInput
    connect?: ConversaWhereUniqueInput
  }

  export type HospedeCreateNestedOneWithoutMensagensInput = {
    create?: XOR<HospedeCreateWithoutMensagensInput, HospedeUncheckedCreateWithoutMensagensInput>
    connectOrCreate?: HospedeCreateOrConnectWithoutMensagensInput
    connect?: HospedeWhereUniqueInput
  }

  export type LocadorCreateNestedOneWithoutMensagensInput = {
    create?: XOR<LocadorCreateWithoutMensagensInput, LocadorUncheckedCreateWithoutMensagensInput>
    connectOrCreate?: LocadorCreateOrConnectWithoutMensagensInput
    connect?: LocadorWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type ConversaUpdateOneRequiredWithoutMensagensNestedInput = {
    create?: XOR<ConversaCreateWithoutMensagensInput, ConversaUncheckedCreateWithoutMensagensInput>
    connectOrCreate?: ConversaCreateOrConnectWithoutMensagensInput
    upsert?: ConversaUpsertWithoutMensagensInput
    connect?: ConversaWhereUniqueInput
    update?: XOR<XOR<ConversaUpdateToOneWithWhereWithoutMensagensInput, ConversaUpdateWithoutMensagensInput>, ConversaUncheckedUpdateWithoutMensagensInput>
  }

  export type HospedeUpdateOneWithoutMensagensNestedInput = {
    create?: XOR<HospedeCreateWithoutMensagensInput, HospedeUncheckedCreateWithoutMensagensInput>
    connectOrCreate?: HospedeCreateOrConnectWithoutMensagensInput
    upsert?: HospedeUpsertWithoutMensagensInput
    disconnect?: HospedeWhereInput | boolean
    delete?: HospedeWhereInput | boolean
    connect?: HospedeWhereUniqueInput
    update?: XOR<XOR<HospedeUpdateToOneWithWhereWithoutMensagensInput, HospedeUpdateWithoutMensagensInput>, HospedeUncheckedUpdateWithoutMensagensInput>
  }

  export type LocadorUpdateOneWithoutMensagensNestedInput = {
    create?: XOR<LocadorCreateWithoutMensagensInput, LocadorUncheckedCreateWithoutMensagensInput>
    connectOrCreate?: LocadorCreateOrConnectWithoutMensagensInput
    upsert?: LocadorUpsertWithoutMensagensInput
    disconnect?: LocadorWhereInput | boolean
    delete?: LocadorWhereInput | boolean
    connect?: LocadorWhereUniqueInput
    update?: XOR<XOR<LocadorUpdateToOneWithWhereWithoutMensagensInput, LocadorUpdateWithoutMensagensInput>, LocadorUncheckedUpdateWithoutMensagensInput>
  }

  export type ReservaCreateNestedOneWithoutAvaliacaoInput = {
    create?: XOR<ReservaCreateWithoutAvaliacaoInput, ReservaUncheckedCreateWithoutAvaliacaoInput>
    connectOrCreate?: ReservaCreateOrConnectWithoutAvaliacaoInput
    connect?: ReservaWhereUniqueInput
  }

  export type HospedeCreateNestedOneWithoutAvaliacoesFeitasInput = {
    create?: XOR<HospedeCreateWithoutAvaliacoesFeitasInput, HospedeUncheckedCreateWithoutAvaliacoesFeitasInput>
    connectOrCreate?: HospedeCreateOrConnectWithoutAvaliacoesFeitasInput
    connect?: HospedeWhereUniqueInput
  }

  export type CasaCreateNestedOneWithoutAvaliacoesInput = {
    create?: XOR<CasaCreateWithoutAvaliacoesInput, CasaUncheckedCreateWithoutAvaliacoesInput>
    connectOrCreate?: CasaCreateOrConnectWithoutAvaliacoesInput
    connect?: CasaWhereUniqueInput
  }

  export type ReservaUpdateOneRequiredWithoutAvaliacaoNestedInput = {
    create?: XOR<ReservaCreateWithoutAvaliacaoInput, ReservaUncheckedCreateWithoutAvaliacaoInput>
    connectOrCreate?: ReservaCreateOrConnectWithoutAvaliacaoInput
    upsert?: ReservaUpsertWithoutAvaliacaoInput
    connect?: ReservaWhereUniqueInput
    update?: XOR<XOR<ReservaUpdateToOneWithWhereWithoutAvaliacaoInput, ReservaUpdateWithoutAvaliacaoInput>, ReservaUncheckedUpdateWithoutAvaliacaoInput>
  }

  export type HospedeUpdateOneRequiredWithoutAvaliacoesFeitasNestedInput = {
    create?: XOR<HospedeCreateWithoutAvaliacoesFeitasInput, HospedeUncheckedCreateWithoutAvaliacoesFeitasInput>
    connectOrCreate?: HospedeCreateOrConnectWithoutAvaliacoesFeitasInput
    upsert?: HospedeUpsertWithoutAvaliacoesFeitasInput
    connect?: HospedeWhereUniqueInput
    update?: XOR<XOR<HospedeUpdateToOneWithWhereWithoutAvaliacoesFeitasInput, HospedeUpdateWithoutAvaliacoesFeitasInput>, HospedeUncheckedUpdateWithoutAvaliacoesFeitasInput>
  }

  export type CasaUpdateOneRequiredWithoutAvaliacoesNestedInput = {
    create?: XOR<CasaCreateWithoutAvaliacoesInput, CasaUncheckedCreateWithoutAvaliacoesInput>
    connectOrCreate?: CasaCreateOrConnectWithoutAvaliacoesInput
    upsert?: CasaUpsertWithoutAvaliacoesInput
    connect?: CasaWhereUniqueInput
    update?: XOR<XOR<CasaUpdateToOneWithWhereWithoutAvaliacoesInput, CasaUpdateWithoutAvaliacoesInput>, CasaUncheckedUpdateWithoutAvaliacoesInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type LocadorCreateWithoutCasasInput = {
    name: string
    email: string
    senha: string
    cpf: string
    endereco: string
    cep?: string | null
    cidade?: string | null
    estado?: string | null
    reservas?: ReservaCreateNestedManyWithoutLocadorInput
    conversas?: ConversaCreateNestedManyWithoutLocadorInput
    mensagens?: MensagemCreateNestedManyWithoutRemetenteLocadorInput
  }

  export type LocadorUncheckedCreateWithoutCasasInput = {
    id?: number
    name: string
    email: string
    senha: string
    cpf: string
    endereco: string
    cep?: string | null
    cidade?: string | null
    estado?: string | null
    reservas?: ReservaUncheckedCreateNestedManyWithoutLocadorInput
    conversas?: ConversaUncheckedCreateNestedManyWithoutLocadorInput
    mensagens?: MensagemUncheckedCreateNestedManyWithoutRemetenteLocadorInput
  }

  export type LocadorCreateOrConnectWithoutCasasInput = {
    where: LocadorWhereUniqueInput
    create: XOR<LocadorCreateWithoutCasasInput, LocadorUncheckedCreateWithoutCasasInput>
  }

  export type ReservaCreateWithoutCasaInput = {
    dataCheckIn: Date | string
    dataCheckOut: Date | string
    status: string
    numeroHospedes?: number | null
    valorTotal?: number | null
    observacoes?: string | null
    valorTotalCalculado?: number | null
    statusPagamento?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    hospede: HospedeCreateNestedOneWithoutReservasInput
    locador: LocadorCreateNestedOneWithoutReservasInput
    avaliacao?: AvaliacaoCreateNestedOneWithoutReservaInput
  }

  export type ReservaUncheckedCreateWithoutCasaInput = {
    id?: number
    dataCheckIn: Date | string
    dataCheckOut: Date | string
    status: string
    numeroHospedes?: number | null
    valorTotal?: number | null
    observacoes?: string | null
    valorTotalCalculado?: number | null
    statusPagamento?: string | null
    hospedeId: number
    locadorId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    avaliacao?: AvaliacaoUncheckedCreateNestedOneWithoutReservaInput
  }

  export type ReservaCreateOrConnectWithoutCasaInput = {
    where: ReservaWhereUniqueInput
    create: XOR<ReservaCreateWithoutCasaInput, ReservaUncheckedCreateWithoutCasaInput>
  }

  export type ReservaCreateManyCasaInputEnvelope = {
    data: ReservaCreateManyCasaInput | ReservaCreateManyCasaInput[]
  }

  export type FavoritoCreateWithoutCasaInput = {
    createdAt?: Date | string
    hospede: HospedeCreateNestedOneWithoutFavoritosInput
  }

  export type FavoritoUncheckedCreateWithoutCasaInput = {
    id?: number
    hospedeId: number
    createdAt?: Date | string
  }

  export type FavoritoCreateOrConnectWithoutCasaInput = {
    where: FavoritoWhereUniqueInput
    create: XOR<FavoritoCreateWithoutCasaInput, FavoritoUncheckedCreateWithoutCasaInput>
  }

  export type FavoritoCreateManyCasaInputEnvelope = {
    data: FavoritoCreateManyCasaInput | FavoritoCreateManyCasaInput[]
  }

  export type ImagemCasaCreateWithoutCasaInput = {
    url: string
    createdAt?: Date | string
  }

  export type ImagemCasaUncheckedCreateWithoutCasaInput = {
    id?: number
    url: string
    createdAt?: Date | string
  }

  export type ImagemCasaCreateOrConnectWithoutCasaInput = {
    where: ImagemCasaWhereUniqueInput
    create: XOR<ImagemCasaCreateWithoutCasaInput, ImagemCasaUncheckedCreateWithoutCasaInput>
  }

  export type ImagemCasaCreateManyCasaInputEnvelope = {
    data: ImagemCasaCreateManyCasaInput | ImagemCasaCreateManyCasaInput[]
  }

  export type ConversaCreateWithoutCasaInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    hospede: HospedeCreateNestedOneWithoutConversasInput
    locador: LocadorCreateNestedOneWithoutConversasInput
    mensagens?: MensagemCreateNestedManyWithoutConversaInput
  }

  export type ConversaUncheckedCreateWithoutCasaInput = {
    id?: number
    hospedeId: number
    locadorId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    mensagens?: MensagemUncheckedCreateNestedManyWithoutConversaInput
  }

  export type ConversaCreateOrConnectWithoutCasaInput = {
    where: ConversaWhereUniqueInput
    create: XOR<ConversaCreateWithoutCasaInput, ConversaUncheckedCreateWithoutCasaInput>
  }

  export type ConversaCreateManyCasaInputEnvelope = {
    data: ConversaCreateManyCasaInput | ConversaCreateManyCasaInput[]
  }

  export type BloqueioDisponibilidadeCreateWithoutCasaInput = {
    dataInicio: Date | string
    dataFim: Date | string
    motivo?: string | null
    createdAt?: Date | string
  }

  export type BloqueioDisponibilidadeUncheckedCreateWithoutCasaInput = {
    id?: number
    dataInicio: Date | string
    dataFim: Date | string
    motivo?: string | null
    createdAt?: Date | string
  }

  export type BloqueioDisponibilidadeCreateOrConnectWithoutCasaInput = {
    where: BloqueioDisponibilidadeWhereUniqueInput
    create: XOR<BloqueioDisponibilidadeCreateWithoutCasaInput, BloqueioDisponibilidadeUncheckedCreateWithoutCasaInput>
  }

  export type BloqueioDisponibilidadeCreateManyCasaInputEnvelope = {
    data: BloqueioDisponibilidadeCreateManyCasaInput | BloqueioDisponibilidadeCreateManyCasaInput[]
  }

  export type AvaliacaoCreateWithoutCasaInput = {
    nota: number
    comentario?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    reserva: ReservaCreateNestedOneWithoutAvaliacaoInput
    hospede: HospedeCreateNestedOneWithoutAvaliacoesFeitasInput
  }

  export type AvaliacaoUncheckedCreateWithoutCasaInput = {
    id?: number
    nota: number
    comentario?: string | null
    reservaId: number
    hospedeId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AvaliacaoCreateOrConnectWithoutCasaInput = {
    where: AvaliacaoWhereUniqueInput
    create: XOR<AvaliacaoCreateWithoutCasaInput, AvaliacaoUncheckedCreateWithoutCasaInput>
  }

  export type AvaliacaoCreateManyCasaInputEnvelope = {
    data: AvaliacaoCreateManyCasaInput | AvaliacaoCreateManyCasaInput[]
  }

  export type LocadorUpsertWithoutCasasInput = {
    update: XOR<LocadorUpdateWithoutCasasInput, LocadorUncheckedUpdateWithoutCasasInput>
    create: XOR<LocadorCreateWithoutCasasInput, LocadorUncheckedCreateWithoutCasasInput>
    where?: LocadorWhereInput
  }

  export type LocadorUpdateToOneWithWhereWithoutCasasInput = {
    where?: LocadorWhereInput
    data: XOR<LocadorUpdateWithoutCasasInput, LocadorUncheckedUpdateWithoutCasasInput>
  }

  export type LocadorUpdateWithoutCasasInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    cidade?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    reservas?: ReservaUpdateManyWithoutLocadorNestedInput
    conversas?: ConversaUpdateManyWithoutLocadorNestedInput
    mensagens?: MensagemUpdateManyWithoutRemetenteLocadorNestedInput
  }

  export type LocadorUncheckedUpdateWithoutCasasInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    cidade?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    reservas?: ReservaUncheckedUpdateManyWithoutLocadorNestedInput
    conversas?: ConversaUncheckedUpdateManyWithoutLocadorNestedInput
    mensagens?: MensagemUncheckedUpdateManyWithoutRemetenteLocadorNestedInput
  }

  export type ReservaUpsertWithWhereUniqueWithoutCasaInput = {
    where: ReservaWhereUniqueInput
    update: XOR<ReservaUpdateWithoutCasaInput, ReservaUncheckedUpdateWithoutCasaInput>
    create: XOR<ReservaCreateWithoutCasaInput, ReservaUncheckedCreateWithoutCasaInput>
  }

  export type ReservaUpdateWithWhereUniqueWithoutCasaInput = {
    where: ReservaWhereUniqueInput
    data: XOR<ReservaUpdateWithoutCasaInput, ReservaUncheckedUpdateWithoutCasaInput>
  }

  export type ReservaUpdateManyWithWhereWithoutCasaInput = {
    where: ReservaScalarWhereInput
    data: XOR<ReservaUpdateManyMutationInput, ReservaUncheckedUpdateManyWithoutCasaInput>
  }

  export type ReservaScalarWhereInput = {
    AND?: ReservaScalarWhereInput | ReservaScalarWhereInput[]
    OR?: ReservaScalarWhereInput[]
    NOT?: ReservaScalarWhereInput | ReservaScalarWhereInput[]
    id?: IntFilter<"Reserva"> | number
    dataCheckIn?: DateTimeFilter<"Reserva"> | Date | string
    dataCheckOut?: DateTimeFilter<"Reserva"> | Date | string
    status?: StringFilter<"Reserva"> | string
    numeroHospedes?: IntNullableFilter<"Reserva"> | number | null
    valorTotal?: FloatNullableFilter<"Reserva"> | number | null
    observacoes?: StringNullableFilter<"Reserva"> | string | null
    valorTotalCalculado?: FloatNullableFilter<"Reserva"> | number | null
    statusPagamento?: StringNullableFilter<"Reserva"> | string | null
    hospedeId?: IntFilter<"Reserva"> | number
    casaId?: IntFilter<"Reserva"> | number
    locadorId?: IntFilter<"Reserva"> | number
    createdAt?: DateTimeFilter<"Reserva"> | Date | string
    updatedAt?: DateTimeFilter<"Reserva"> | Date | string
  }

  export type FavoritoUpsertWithWhereUniqueWithoutCasaInput = {
    where: FavoritoWhereUniqueInput
    update: XOR<FavoritoUpdateWithoutCasaInput, FavoritoUncheckedUpdateWithoutCasaInput>
    create: XOR<FavoritoCreateWithoutCasaInput, FavoritoUncheckedCreateWithoutCasaInput>
  }

  export type FavoritoUpdateWithWhereUniqueWithoutCasaInput = {
    where: FavoritoWhereUniqueInput
    data: XOR<FavoritoUpdateWithoutCasaInput, FavoritoUncheckedUpdateWithoutCasaInput>
  }

  export type FavoritoUpdateManyWithWhereWithoutCasaInput = {
    where: FavoritoScalarWhereInput
    data: XOR<FavoritoUpdateManyMutationInput, FavoritoUncheckedUpdateManyWithoutCasaInput>
  }

  export type FavoritoScalarWhereInput = {
    AND?: FavoritoScalarWhereInput | FavoritoScalarWhereInput[]
    OR?: FavoritoScalarWhereInput[]
    NOT?: FavoritoScalarWhereInput | FavoritoScalarWhereInput[]
    id?: IntFilter<"Favorito"> | number
    hospedeId?: IntFilter<"Favorito"> | number
    casaId?: IntFilter<"Favorito"> | number
    createdAt?: DateTimeFilter<"Favorito"> | Date | string
  }

  export type ImagemCasaUpsertWithWhereUniqueWithoutCasaInput = {
    where: ImagemCasaWhereUniqueInput
    update: XOR<ImagemCasaUpdateWithoutCasaInput, ImagemCasaUncheckedUpdateWithoutCasaInput>
    create: XOR<ImagemCasaCreateWithoutCasaInput, ImagemCasaUncheckedCreateWithoutCasaInput>
  }

  export type ImagemCasaUpdateWithWhereUniqueWithoutCasaInput = {
    where: ImagemCasaWhereUniqueInput
    data: XOR<ImagemCasaUpdateWithoutCasaInput, ImagemCasaUncheckedUpdateWithoutCasaInput>
  }

  export type ImagemCasaUpdateManyWithWhereWithoutCasaInput = {
    where: ImagemCasaScalarWhereInput
    data: XOR<ImagemCasaUpdateManyMutationInput, ImagemCasaUncheckedUpdateManyWithoutCasaInput>
  }

  export type ImagemCasaScalarWhereInput = {
    AND?: ImagemCasaScalarWhereInput | ImagemCasaScalarWhereInput[]
    OR?: ImagemCasaScalarWhereInput[]
    NOT?: ImagemCasaScalarWhereInput | ImagemCasaScalarWhereInput[]
    id?: IntFilter<"ImagemCasa"> | number
    url?: StringFilter<"ImagemCasa"> | string
    casaId?: IntFilter<"ImagemCasa"> | number
    createdAt?: DateTimeFilter<"ImagemCasa"> | Date | string
  }

  export type ConversaUpsertWithWhereUniqueWithoutCasaInput = {
    where: ConversaWhereUniqueInput
    update: XOR<ConversaUpdateWithoutCasaInput, ConversaUncheckedUpdateWithoutCasaInput>
    create: XOR<ConversaCreateWithoutCasaInput, ConversaUncheckedCreateWithoutCasaInput>
  }

  export type ConversaUpdateWithWhereUniqueWithoutCasaInput = {
    where: ConversaWhereUniqueInput
    data: XOR<ConversaUpdateWithoutCasaInput, ConversaUncheckedUpdateWithoutCasaInput>
  }

  export type ConversaUpdateManyWithWhereWithoutCasaInput = {
    where: ConversaScalarWhereInput
    data: XOR<ConversaUpdateManyMutationInput, ConversaUncheckedUpdateManyWithoutCasaInput>
  }

  export type ConversaScalarWhereInput = {
    AND?: ConversaScalarWhereInput | ConversaScalarWhereInput[]
    OR?: ConversaScalarWhereInput[]
    NOT?: ConversaScalarWhereInput | ConversaScalarWhereInput[]
    id?: IntFilter<"Conversa"> | number
    hospedeId?: IntFilter<"Conversa"> | number
    locadorId?: IntFilter<"Conversa"> | number
    casaId?: IntNullableFilter<"Conversa"> | number | null
    createdAt?: DateTimeFilter<"Conversa"> | Date | string
    updatedAt?: DateTimeFilter<"Conversa"> | Date | string
  }

  export type BloqueioDisponibilidadeUpsertWithWhereUniqueWithoutCasaInput = {
    where: BloqueioDisponibilidadeWhereUniqueInput
    update: XOR<BloqueioDisponibilidadeUpdateWithoutCasaInput, BloqueioDisponibilidadeUncheckedUpdateWithoutCasaInput>
    create: XOR<BloqueioDisponibilidadeCreateWithoutCasaInput, BloqueioDisponibilidadeUncheckedCreateWithoutCasaInput>
  }

  export type BloqueioDisponibilidadeUpdateWithWhereUniqueWithoutCasaInput = {
    where: BloqueioDisponibilidadeWhereUniqueInput
    data: XOR<BloqueioDisponibilidadeUpdateWithoutCasaInput, BloqueioDisponibilidadeUncheckedUpdateWithoutCasaInput>
  }

  export type BloqueioDisponibilidadeUpdateManyWithWhereWithoutCasaInput = {
    where: BloqueioDisponibilidadeScalarWhereInput
    data: XOR<BloqueioDisponibilidadeUpdateManyMutationInput, BloqueioDisponibilidadeUncheckedUpdateManyWithoutCasaInput>
  }

  export type BloqueioDisponibilidadeScalarWhereInput = {
    AND?: BloqueioDisponibilidadeScalarWhereInput | BloqueioDisponibilidadeScalarWhereInput[]
    OR?: BloqueioDisponibilidadeScalarWhereInput[]
    NOT?: BloqueioDisponibilidadeScalarWhereInput | BloqueioDisponibilidadeScalarWhereInput[]
    id?: IntFilter<"BloqueioDisponibilidade"> | number
    dataInicio?: DateTimeFilter<"BloqueioDisponibilidade"> | Date | string
    dataFim?: DateTimeFilter<"BloqueioDisponibilidade"> | Date | string
    motivo?: StringNullableFilter<"BloqueioDisponibilidade"> | string | null
    casaId?: IntFilter<"BloqueioDisponibilidade"> | number
    createdAt?: DateTimeFilter<"BloqueioDisponibilidade"> | Date | string
  }

  export type AvaliacaoUpsertWithWhereUniqueWithoutCasaInput = {
    where: AvaliacaoWhereUniqueInput
    update: XOR<AvaliacaoUpdateWithoutCasaInput, AvaliacaoUncheckedUpdateWithoutCasaInput>
    create: XOR<AvaliacaoCreateWithoutCasaInput, AvaliacaoUncheckedCreateWithoutCasaInput>
  }

  export type AvaliacaoUpdateWithWhereUniqueWithoutCasaInput = {
    where: AvaliacaoWhereUniqueInput
    data: XOR<AvaliacaoUpdateWithoutCasaInput, AvaliacaoUncheckedUpdateWithoutCasaInput>
  }

  export type AvaliacaoUpdateManyWithWhereWithoutCasaInput = {
    where: AvaliacaoScalarWhereInput
    data: XOR<AvaliacaoUpdateManyMutationInput, AvaliacaoUncheckedUpdateManyWithoutCasaInput>
  }

  export type AvaliacaoScalarWhereInput = {
    AND?: AvaliacaoScalarWhereInput | AvaliacaoScalarWhereInput[]
    OR?: AvaliacaoScalarWhereInput[]
    NOT?: AvaliacaoScalarWhereInput | AvaliacaoScalarWhereInput[]
    id?: IntFilter<"Avaliacao"> | number
    nota?: IntFilter<"Avaliacao"> | number
    comentario?: StringNullableFilter<"Avaliacao"> | string | null
    reservaId?: IntFilter<"Avaliacao"> | number
    hospedeId?: IntFilter<"Avaliacao"> | number
    casaId?: IntFilter<"Avaliacao"> | number
    createdAt?: DateTimeFilter<"Avaliacao"> | Date | string
    updatedAt?: DateTimeFilter<"Avaliacao"> | Date | string
  }

  export type CasaCreateWithoutImagensInput = {
    endereco: string
    numero: number
    cep?: string | null
    cidade?: string | null
    estado?: string | null
    diretrizes: string
    complemento?: string | null
    precoPorNoite?: number | null
    locador: LocadorCreateNestedOneWithoutCasasInput
    reservas?: ReservaCreateNestedManyWithoutCasaInput
    favoritos?: FavoritoCreateNestedManyWithoutCasaInput
    conversas?: ConversaCreateNestedManyWithoutCasaInput
    bloqueiosDisponibilidade?: BloqueioDisponibilidadeCreateNestedManyWithoutCasaInput
    avaliacoes?: AvaliacaoCreateNestedManyWithoutCasaInput
  }

  export type CasaUncheckedCreateWithoutImagensInput = {
    id?: number
    endereco: string
    numero: number
    cep?: string | null
    cidade?: string | null
    estado?: string | null
    diretrizes: string
    complemento?: string | null
    precoPorNoite?: number | null
    locadorId: number
    reservas?: ReservaUncheckedCreateNestedManyWithoutCasaInput
    favoritos?: FavoritoUncheckedCreateNestedManyWithoutCasaInput
    conversas?: ConversaUncheckedCreateNestedManyWithoutCasaInput
    bloqueiosDisponibilidade?: BloqueioDisponibilidadeUncheckedCreateNestedManyWithoutCasaInput
    avaliacoes?: AvaliacaoUncheckedCreateNestedManyWithoutCasaInput
  }

  export type CasaCreateOrConnectWithoutImagensInput = {
    where: CasaWhereUniqueInput
    create: XOR<CasaCreateWithoutImagensInput, CasaUncheckedCreateWithoutImagensInput>
  }

  export type CasaUpsertWithoutImagensInput = {
    update: XOR<CasaUpdateWithoutImagensInput, CasaUncheckedUpdateWithoutImagensInput>
    create: XOR<CasaCreateWithoutImagensInput, CasaUncheckedCreateWithoutImagensInput>
    where?: CasaWhereInput
  }

  export type CasaUpdateToOneWithWhereWithoutImagensInput = {
    where?: CasaWhereInput
    data: XOR<CasaUpdateWithoutImagensInput, CasaUncheckedUpdateWithoutImagensInput>
  }

  export type CasaUpdateWithoutImagensInput = {
    endereco?: StringFieldUpdateOperationsInput | string
    numero?: IntFieldUpdateOperationsInput | number
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    cidade?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    diretrizes?: StringFieldUpdateOperationsInput | string
    complemento?: NullableStringFieldUpdateOperationsInput | string | null
    precoPorNoite?: NullableFloatFieldUpdateOperationsInput | number | null
    locador?: LocadorUpdateOneRequiredWithoutCasasNestedInput
    reservas?: ReservaUpdateManyWithoutCasaNestedInput
    favoritos?: FavoritoUpdateManyWithoutCasaNestedInput
    conversas?: ConversaUpdateManyWithoutCasaNestedInput
    bloqueiosDisponibilidade?: BloqueioDisponibilidadeUpdateManyWithoutCasaNestedInput
    avaliacoes?: AvaliacaoUpdateManyWithoutCasaNestedInput
  }

  export type CasaUncheckedUpdateWithoutImagensInput = {
    id?: IntFieldUpdateOperationsInput | number
    endereco?: StringFieldUpdateOperationsInput | string
    numero?: IntFieldUpdateOperationsInput | number
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    cidade?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    diretrizes?: StringFieldUpdateOperationsInput | string
    complemento?: NullableStringFieldUpdateOperationsInput | string | null
    precoPorNoite?: NullableFloatFieldUpdateOperationsInput | number | null
    locadorId?: IntFieldUpdateOperationsInput | number
    reservas?: ReservaUncheckedUpdateManyWithoutCasaNestedInput
    favoritos?: FavoritoUncheckedUpdateManyWithoutCasaNestedInput
    conversas?: ConversaUncheckedUpdateManyWithoutCasaNestedInput
    bloqueiosDisponibilidade?: BloqueioDisponibilidadeUncheckedUpdateManyWithoutCasaNestedInput
    avaliacoes?: AvaliacaoUncheckedUpdateManyWithoutCasaNestedInput
  }

  export type CasaCreateWithoutBloqueiosDisponibilidadeInput = {
    endereco: string
    numero: number
    cep?: string | null
    cidade?: string | null
    estado?: string | null
    diretrizes: string
    complemento?: string | null
    precoPorNoite?: number | null
    locador: LocadorCreateNestedOneWithoutCasasInput
    reservas?: ReservaCreateNestedManyWithoutCasaInput
    favoritos?: FavoritoCreateNestedManyWithoutCasaInput
    imagens?: ImagemCasaCreateNestedManyWithoutCasaInput
    conversas?: ConversaCreateNestedManyWithoutCasaInput
    avaliacoes?: AvaliacaoCreateNestedManyWithoutCasaInput
  }

  export type CasaUncheckedCreateWithoutBloqueiosDisponibilidadeInput = {
    id?: number
    endereco: string
    numero: number
    cep?: string | null
    cidade?: string | null
    estado?: string | null
    diretrizes: string
    complemento?: string | null
    precoPorNoite?: number | null
    locadorId: number
    reservas?: ReservaUncheckedCreateNestedManyWithoutCasaInput
    favoritos?: FavoritoUncheckedCreateNestedManyWithoutCasaInput
    imagens?: ImagemCasaUncheckedCreateNestedManyWithoutCasaInput
    conversas?: ConversaUncheckedCreateNestedManyWithoutCasaInput
    avaliacoes?: AvaliacaoUncheckedCreateNestedManyWithoutCasaInput
  }

  export type CasaCreateOrConnectWithoutBloqueiosDisponibilidadeInput = {
    where: CasaWhereUniqueInput
    create: XOR<CasaCreateWithoutBloqueiosDisponibilidadeInput, CasaUncheckedCreateWithoutBloqueiosDisponibilidadeInput>
  }

  export type CasaUpsertWithoutBloqueiosDisponibilidadeInput = {
    update: XOR<CasaUpdateWithoutBloqueiosDisponibilidadeInput, CasaUncheckedUpdateWithoutBloqueiosDisponibilidadeInput>
    create: XOR<CasaCreateWithoutBloqueiosDisponibilidadeInput, CasaUncheckedCreateWithoutBloqueiosDisponibilidadeInput>
    where?: CasaWhereInput
  }

  export type CasaUpdateToOneWithWhereWithoutBloqueiosDisponibilidadeInput = {
    where?: CasaWhereInput
    data: XOR<CasaUpdateWithoutBloqueiosDisponibilidadeInput, CasaUncheckedUpdateWithoutBloqueiosDisponibilidadeInput>
  }

  export type CasaUpdateWithoutBloqueiosDisponibilidadeInput = {
    endereco?: StringFieldUpdateOperationsInput | string
    numero?: IntFieldUpdateOperationsInput | number
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    cidade?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    diretrizes?: StringFieldUpdateOperationsInput | string
    complemento?: NullableStringFieldUpdateOperationsInput | string | null
    precoPorNoite?: NullableFloatFieldUpdateOperationsInput | number | null
    locador?: LocadorUpdateOneRequiredWithoutCasasNestedInput
    reservas?: ReservaUpdateManyWithoutCasaNestedInput
    favoritos?: FavoritoUpdateManyWithoutCasaNestedInput
    imagens?: ImagemCasaUpdateManyWithoutCasaNestedInput
    conversas?: ConversaUpdateManyWithoutCasaNestedInput
    avaliacoes?: AvaliacaoUpdateManyWithoutCasaNestedInput
  }

  export type CasaUncheckedUpdateWithoutBloqueiosDisponibilidadeInput = {
    id?: IntFieldUpdateOperationsInput | number
    endereco?: StringFieldUpdateOperationsInput | string
    numero?: IntFieldUpdateOperationsInput | number
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    cidade?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    diretrizes?: StringFieldUpdateOperationsInput | string
    complemento?: NullableStringFieldUpdateOperationsInput | string | null
    precoPorNoite?: NullableFloatFieldUpdateOperationsInput | number | null
    locadorId?: IntFieldUpdateOperationsInput | number
    reservas?: ReservaUncheckedUpdateManyWithoutCasaNestedInput
    favoritos?: FavoritoUncheckedUpdateManyWithoutCasaNestedInput
    imagens?: ImagemCasaUncheckedUpdateManyWithoutCasaNestedInput
    conversas?: ConversaUncheckedUpdateManyWithoutCasaNestedInput
    avaliacoes?: AvaliacaoUncheckedUpdateManyWithoutCasaNestedInput
  }

  export type CasaCreateWithoutLocadorInput = {
    endereco: string
    numero: number
    cep?: string | null
    cidade?: string | null
    estado?: string | null
    diretrizes: string
    complemento?: string | null
    precoPorNoite?: number | null
    reservas?: ReservaCreateNestedManyWithoutCasaInput
    favoritos?: FavoritoCreateNestedManyWithoutCasaInput
    imagens?: ImagemCasaCreateNestedManyWithoutCasaInput
    conversas?: ConversaCreateNestedManyWithoutCasaInput
    bloqueiosDisponibilidade?: BloqueioDisponibilidadeCreateNestedManyWithoutCasaInput
    avaliacoes?: AvaliacaoCreateNestedManyWithoutCasaInput
  }

  export type CasaUncheckedCreateWithoutLocadorInput = {
    id?: number
    endereco: string
    numero: number
    cep?: string | null
    cidade?: string | null
    estado?: string | null
    diretrizes: string
    complemento?: string | null
    precoPorNoite?: number | null
    reservas?: ReservaUncheckedCreateNestedManyWithoutCasaInput
    favoritos?: FavoritoUncheckedCreateNestedManyWithoutCasaInput
    imagens?: ImagemCasaUncheckedCreateNestedManyWithoutCasaInput
    conversas?: ConversaUncheckedCreateNestedManyWithoutCasaInput
    bloqueiosDisponibilidade?: BloqueioDisponibilidadeUncheckedCreateNestedManyWithoutCasaInput
    avaliacoes?: AvaliacaoUncheckedCreateNestedManyWithoutCasaInput
  }

  export type CasaCreateOrConnectWithoutLocadorInput = {
    where: CasaWhereUniqueInput
    create: XOR<CasaCreateWithoutLocadorInput, CasaUncheckedCreateWithoutLocadorInput>
  }

  export type CasaCreateManyLocadorInputEnvelope = {
    data: CasaCreateManyLocadorInput | CasaCreateManyLocadorInput[]
  }

  export type ReservaCreateWithoutLocadorInput = {
    dataCheckIn: Date | string
    dataCheckOut: Date | string
    status: string
    numeroHospedes?: number | null
    valorTotal?: number | null
    observacoes?: string | null
    valorTotalCalculado?: number | null
    statusPagamento?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    hospede: HospedeCreateNestedOneWithoutReservasInput
    casa: CasaCreateNestedOneWithoutReservasInput
    avaliacao?: AvaliacaoCreateNestedOneWithoutReservaInput
  }

  export type ReservaUncheckedCreateWithoutLocadorInput = {
    id?: number
    dataCheckIn: Date | string
    dataCheckOut: Date | string
    status: string
    numeroHospedes?: number | null
    valorTotal?: number | null
    observacoes?: string | null
    valorTotalCalculado?: number | null
    statusPagamento?: string | null
    hospedeId: number
    casaId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    avaliacao?: AvaliacaoUncheckedCreateNestedOneWithoutReservaInput
  }

  export type ReservaCreateOrConnectWithoutLocadorInput = {
    where: ReservaWhereUniqueInput
    create: XOR<ReservaCreateWithoutLocadorInput, ReservaUncheckedCreateWithoutLocadorInput>
  }

  export type ReservaCreateManyLocadorInputEnvelope = {
    data: ReservaCreateManyLocadorInput | ReservaCreateManyLocadorInput[]
  }

  export type ConversaCreateWithoutLocadorInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    hospede: HospedeCreateNestedOneWithoutConversasInput
    casa?: CasaCreateNestedOneWithoutConversasInput
    mensagens?: MensagemCreateNestedManyWithoutConversaInput
  }

  export type ConversaUncheckedCreateWithoutLocadorInput = {
    id?: number
    hospedeId: number
    casaId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    mensagens?: MensagemUncheckedCreateNestedManyWithoutConversaInput
  }

  export type ConversaCreateOrConnectWithoutLocadorInput = {
    where: ConversaWhereUniqueInput
    create: XOR<ConversaCreateWithoutLocadorInput, ConversaUncheckedCreateWithoutLocadorInput>
  }

  export type ConversaCreateManyLocadorInputEnvelope = {
    data: ConversaCreateManyLocadorInput | ConversaCreateManyLocadorInput[]
  }

  export type MensagemCreateWithoutRemetenteLocadorInput = {
    conteudo: string
    createdAt?: Date | string
    lidaPeloHospede?: boolean
    lidaPeloLocador?: boolean
    conversa: ConversaCreateNestedOneWithoutMensagensInput
    remetenteHospede?: HospedeCreateNestedOneWithoutMensagensInput
  }

  export type MensagemUncheckedCreateWithoutRemetenteLocadorInput = {
    id?: number
    conteudo: string
    createdAt?: Date | string
    conversaId: number
    remetenteHospedeId?: number | null
    lidaPeloHospede?: boolean
    lidaPeloLocador?: boolean
  }

  export type MensagemCreateOrConnectWithoutRemetenteLocadorInput = {
    where: MensagemWhereUniqueInput
    create: XOR<MensagemCreateWithoutRemetenteLocadorInput, MensagemUncheckedCreateWithoutRemetenteLocadorInput>
  }

  export type MensagemCreateManyRemetenteLocadorInputEnvelope = {
    data: MensagemCreateManyRemetenteLocadorInput | MensagemCreateManyRemetenteLocadorInput[]
  }

  export type CasaUpsertWithWhereUniqueWithoutLocadorInput = {
    where: CasaWhereUniqueInput
    update: XOR<CasaUpdateWithoutLocadorInput, CasaUncheckedUpdateWithoutLocadorInput>
    create: XOR<CasaCreateWithoutLocadorInput, CasaUncheckedCreateWithoutLocadorInput>
  }

  export type CasaUpdateWithWhereUniqueWithoutLocadorInput = {
    where: CasaWhereUniqueInput
    data: XOR<CasaUpdateWithoutLocadorInput, CasaUncheckedUpdateWithoutLocadorInput>
  }

  export type CasaUpdateManyWithWhereWithoutLocadorInput = {
    where: CasaScalarWhereInput
    data: XOR<CasaUpdateManyMutationInput, CasaUncheckedUpdateManyWithoutLocadorInput>
  }

  export type CasaScalarWhereInput = {
    AND?: CasaScalarWhereInput | CasaScalarWhereInput[]
    OR?: CasaScalarWhereInput[]
    NOT?: CasaScalarWhereInput | CasaScalarWhereInput[]
    id?: IntFilter<"Casa"> | number
    endereco?: StringFilter<"Casa"> | string
    numero?: IntFilter<"Casa"> | number
    cep?: StringNullableFilter<"Casa"> | string | null
    cidade?: StringNullableFilter<"Casa"> | string | null
    estado?: StringNullableFilter<"Casa"> | string | null
    diretrizes?: StringFilter<"Casa"> | string
    complemento?: StringNullableFilter<"Casa"> | string | null
    precoPorNoite?: FloatNullableFilter<"Casa"> | number | null
    locadorId?: IntFilter<"Casa"> | number
  }

  export type ReservaUpsertWithWhereUniqueWithoutLocadorInput = {
    where: ReservaWhereUniqueInput
    update: XOR<ReservaUpdateWithoutLocadorInput, ReservaUncheckedUpdateWithoutLocadorInput>
    create: XOR<ReservaCreateWithoutLocadorInput, ReservaUncheckedCreateWithoutLocadorInput>
  }

  export type ReservaUpdateWithWhereUniqueWithoutLocadorInput = {
    where: ReservaWhereUniqueInput
    data: XOR<ReservaUpdateWithoutLocadorInput, ReservaUncheckedUpdateWithoutLocadorInput>
  }

  export type ReservaUpdateManyWithWhereWithoutLocadorInput = {
    where: ReservaScalarWhereInput
    data: XOR<ReservaUpdateManyMutationInput, ReservaUncheckedUpdateManyWithoutLocadorInput>
  }

  export type ConversaUpsertWithWhereUniqueWithoutLocadorInput = {
    where: ConversaWhereUniqueInput
    update: XOR<ConversaUpdateWithoutLocadorInput, ConversaUncheckedUpdateWithoutLocadorInput>
    create: XOR<ConversaCreateWithoutLocadorInput, ConversaUncheckedCreateWithoutLocadorInput>
  }

  export type ConversaUpdateWithWhereUniqueWithoutLocadorInput = {
    where: ConversaWhereUniqueInput
    data: XOR<ConversaUpdateWithoutLocadorInput, ConversaUncheckedUpdateWithoutLocadorInput>
  }

  export type ConversaUpdateManyWithWhereWithoutLocadorInput = {
    where: ConversaScalarWhereInput
    data: XOR<ConversaUpdateManyMutationInput, ConversaUncheckedUpdateManyWithoutLocadorInput>
  }

  export type MensagemUpsertWithWhereUniqueWithoutRemetenteLocadorInput = {
    where: MensagemWhereUniqueInput
    update: XOR<MensagemUpdateWithoutRemetenteLocadorInput, MensagemUncheckedUpdateWithoutRemetenteLocadorInput>
    create: XOR<MensagemCreateWithoutRemetenteLocadorInput, MensagemUncheckedCreateWithoutRemetenteLocadorInput>
  }

  export type MensagemUpdateWithWhereUniqueWithoutRemetenteLocadorInput = {
    where: MensagemWhereUniqueInput
    data: XOR<MensagemUpdateWithoutRemetenteLocadorInput, MensagemUncheckedUpdateWithoutRemetenteLocadorInput>
  }

  export type MensagemUpdateManyWithWhereWithoutRemetenteLocadorInput = {
    where: MensagemScalarWhereInput
    data: XOR<MensagemUpdateManyMutationInput, MensagemUncheckedUpdateManyWithoutRemetenteLocadorInput>
  }

  export type MensagemScalarWhereInput = {
    AND?: MensagemScalarWhereInput | MensagemScalarWhereInput[]
    OR?: MensagemScalarWhereInput[]
    NOT?: MensagemScalarWhereInput | MensagemScalarWhereInput[]
    id?: IntFilter<"Mensagem"> | number
    conteudo?: StringFilter<"Mensagem"> | string
    createdAt?: DateTimeFilter<"Mensagem"> | Date | string
    conversaId?: IntFilter<"Mensagem"> | number
    remetenteHospedeId?: IntNullableFilter<"Mensagem"> | number | null
    remetenteLocadorId?: IntNullableFilter<"Mensagem"> | number | null
    lidaPeloHospede?: BoolFilter<"Mensagem"> | boolean
    lidaPeloLocador?: BoolFilter<"Mensagem"> | boolean
  }

  export type ReservaCreateWithoutHospedeInput = {
    dataCheckIn: Date | string
    dataCheckOut: Date | string
    status: string
    numeroHospedes?: number | null
    valorTotal?: number | null
    observacoes?: string | null
    valorTotalCalculado?: number | null
    statusPagamento?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    casa: CasaCreateNestedOneWithoutReservasInput
    locador: LocadorCreateNestedOneWithoutReservasInput
    avaliacao?: AvaliacaoCreateNestedOneWithoutReservaInput
  }

  export type ReservaUncheckedCreateWithoutHospedeInput = {
    id?: number
    dataCheckIn: Date | string
    dataCheckOut: Date | string
    status: string
    numeroHospedes?: number | null
    valorTotal?: number | null
    observacoes?: string | null
    valorTotalCalculado?: number | null
    statusPagamento?: string | null
    casaId: number
    locadorId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    avaliacao?: AvaliacaoUncheckedCreateNestedOneWithoutReservaInput
  }

  export type ReservaCreateOrConnectWithoutHospedeInput = {
    where: ReservaWhereUniqueInput
    create: XOR<ReservaCreateWithoutHospedeInput, ReservaUncheckedCreateWithoutHospedeInput>
  }

  export type ReservaCreateManyHospedeInputEnvelope = {
    data: ReservaCreateManyHospedeInput | ReservaCreateManyHospedeInput[]
  }

  export type FavoritoCreateWithoutHospedeInput = {
    createdAt?: Date | string
    casa: CasaCreateNestedOneWithoutFavoritosInput
  }

  export type FavoritoUncheckedCreateWithoutHospedeInput = {
    id?: number
    casaId: number
    createdAt?: Date | string
  }

  export type FavoritoCreateOrConnectWithoutHospedeInput = {
    where: FavoritoWhereUniqueInput
    create: XOR<FavoritoCreateWithoutHospedeInput, FavoritoUncheckedCreateWithoutHospedeInput>
  }

  export type FavoritoCreateManyHospedeInputEnvelope = {
    data: FavoritoCreateManyHospedeInput | FavoritoCreateManyHospedeInput[]
  }

  export type ConversaCreateWithoutHospedeInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    locador: LocadorCreateNestedOneWithoutConversasInput
    casa?: CasaCreateNestedOneWithoutConversasInput
    mensagens?: MensagemCreateNestedManyWithoutConversaInput
  }

  export type ConversaUncheckedCreateWithoutHospedeInput = {
    id?: number
    locadorId: number
    casaId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    mensagens?: MensagemUncheckedCreateNestedManyWithoutConversaInput
  }

  export type ConversaCreateOrConnectWithoutHospedeInput = {
    where: ConversaWhereUniqueInput
    create: XOR<ConversaCreateWithoutHospedeInput, ConversaUncheckedCreateWithoutHospedeInput>
  }

  export type ConversaCreateManyHospedeInputEnvelope = {
    data: ConversaCreateManyHospedeInput | ConversaCreateManyHospedeInput[]
  }

  export type MensagemCreateWithoutRemetenteHospedeInput = {
    conteudo: string
    createdAt?: Date | string
    lidaPeloHospede?: boolean
    lidaPeloLocador?: boolean
    conversa: ConversaCreateNestedOneWithoutMensagensInput
    remetenteLocador?: LocadorCreateNestedOneWithoutMensagensInput
  }

  export type MensagemUncheckedCreateWithoutRemetenteHospedeInput = {
    id?: number
    conteudo: string
    createdAt?: Date | string
    conversaId: number
    remetenteLocadorId?: number | null
    lidaPeloHospede?: boolean
    lidaPeloLocador?: boolean
  }

  export type MensagemCreateOrConnectWithoutRemetenteHospedeInput = {
    where: MensagemWhereUniqueInput
    create: XOR<MensagemCreateWithoutRemetenteHospedeInput, MensagemUncheckedCreateWithoutRemetenteHospedeInput>
  }

  export type MensagemCreateManyRemetenteHospedeInputEnvelope = {
    data: MensagemCreateManyRemetenteHospedeInput | MensagemCreateManyRemetenteHospedeInput[]
  }

  export type AvaliacaoCreateWithoutHospedeInput = {
    nota: number
    comentario?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    reserva: ReservaCreateNestedOneWithoutAvaliacaoInput
    casa: CasaCreateNestedOneWithoutAvaliacoesInput
  }

  export type AvaliacaoUncheckedCreateWithoutHospedeInput = {
    id?: number
    nota: number
    comentario?: string | null
    reservaId: number
    casaId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AvaliacaoCreateOrConnectWithoutHospedeInput = {
    where: AvaliacaoWhereUniqueInput
    create: XOR<AvaliacaoCreateWithoutHospedeInput, AvaliacaoUncheckedCreateWithoutHospedeInput>
  }

  export type AvaliacaoCreateManyHospedeInputEnvelope = {
    data: AvaliacaoCreateManyHospedeInput | AvaliacaoCreateManyHospedeInput[]
  }

  export type ReservaUpsertWithWhereUniqueWithoutHospedeInput = {
    where: ReservaWhereUniqueInput
    update: XOR<ReservaUpdateWithoutHospedeInput, ReservaUncheckedUpdateWithoutHospedeInput>
    create: XOR<ReservaCreateWithoutHospedeInput, ReservaUncheckedCreateWithoutHospedeInput>
  }

  export type ReservaUpdateWithWhereUniqueWithoutHospedeInput = {
    where: ReservaWhereUniqueInput
    data: XOR<ReservaUpdateWithoutHospedeInput, ReservaUncheckedUpdateWithoutHospedeInput>
  }

  export type ReservaUpdateManyWithWhereWithoutHospedeInput = {
    where: ReservaScalarWhereInput
    data: XOR<ReservaUpdateManyMutationInput, ReservaUncheckedUpdateManyWithoutHospedeInput>
  }

  export type FavoritoUpsertWithWhereUniqueWithoutHospedeInput = {
    where: FavoritoWhereUniqueInput
    update: XOR<FavoritoUpdateWithoutHospedeInput, FavoritoUncheckedUpdateWithoutHospedeInput>
    create: XOR<FavoritoCreateWithoutHospedeInput, FavoritoUncheckedCreateWithoutHospedeInput>
  }

  export type FavoritoUpdateWithWhereUniqueWithoutHospedeInput = {
    where: FavoritoWhereUniqueInput
    data: XOR<FavoritoUpdateWithoutHospedeInput, FavoritoUncheckedUpdateWithoutHospedeInput>
  }

  export type FavoritoUpdateManyWithWhereWithoutHospedeInput = {
    where: FavoritoScalarWhereInput
    data: XOR<FavoritoUpdateManyMutationInput, FavoritoUncheckedUpdateManyWithoutHospedeInput>
  }

  export type ConversaUpsertWithWhereUniqueWithoutHospedeInput = {
    where: ConversaWhereUniqueInput
    update: XOR<ConversaUpdateWithoutHospedeInput, ConversaUncheckedUpdateWithoutHospedeInput>
    create: XOR<ConversaCreateWithoutHospedeInput, ConversaUncheckedCreateWithoutHospedeInput>
  }

  export type ConversaUpdateWithWhereUniqueWithoutHospedeInput = {
    where: ConversaWhereUniqueInput
    data: XOR<ConversaUpdateWithoutHospedeInput, ConversaUncheckedUpdateWithoutHospedeInput>
  }

  export type ConversaUpdateManyWithWhereWithoutHospedeInput = {
    where: ConversaScalarWhereInput
    data: XOR<ConversaUpdateManyMutationInput, ConversaUncheckedUpdateManyWithoutHospedeInput>
  }

  export type MensagemUpsertWithWhereUniqueWithoutRemetenteHospedeInput = {
    where: MensagemWhereUniqueInput
    update: XOR<MensagemUpdateWithoutRemetenteHospedeInput, MensagemUncheckedUpdateWithoutRemetenteHospedeInput>
    create: XOR<MensagemCreateWithoutRemetenteHospedeInput, MensagemUncheckedCreateWithoutRemetenteHospedeInput>
  }

  export type MensagemUpdateWithWhereUniqueWithoutRemetenteHospedeInput = {
    where: MensagemWhereUniqueInput
    data: XOR<MensagemUpdateWithoutRemetenteHospedeInput, MensagemUncheckedUpdateWithoutRemetenteHospedeInput>
  }

  export type MensagemUpdateManyWithWhereWithoutRemetenteHospedeInput = {
    where: MensagemScalarWhereInput
    data: XOR<MensagemUpdateManyMutationInput, MensagemUncheckedUpdateManyWithoutRemetenteHospedeInput>
  }

  export type AvaliacaoUpsertWithWhereUniqueWithoutHospedeInput = {
    where: AvaliacaoWhereUniqueInput
    update: XOR<AvaliacaoUpdateWithoutHospedeInput, AvaliacaoUncheckedUpdateWithoutHospedeInput>
    create: XOR<AvaliacaoCreateWithoutHospedeInput, AvaliacaoUncheckedCreateWithoutHospedeInput>
  }

  export type AvaliacaoUpdateWithWhereUniqueWithoutHospedeInput = {
    where: AvaliacaoWhereUniqueInput
    data: XOR<AvaliacaoUpdateWithoutHospedeInput, AvaliacaoUncheckedUpdateWithoutHospedeInput>
  }

  export type AvaliacaoUpdateManyWithWhereWithoutHospedeInput = {
    where: AvaliacaoScalarWhereInput
    data: XOR<AvaliacaoUpdateManyMutationInput, AvaliacaoUncheckedUpdateManyWithoutHospedeInput>
  }

  export type HospedeCreateWithoutReservasInput = {
    name: string
    email: string
    senha: string
    cpf: string
    cep?: string | null
    cidade?: string | null
    estado?: string | null
    matricula: string
    universidade?: string | null
    favoritos?: FavoritoCreateNestedManyWithoutHospedeInput
    conversas?: ConversaCreateNestedManyWithoutHospedeInput
    mensagens?: MensagemCreateNestedManyWithoutRemetenteHospedeInput
    avaliacoesFeitas?: AvaliacaoCreateNestedManyWithoutHospedeInput
  }

  export type HospedeUncheckedCreateWithoutReservasInput = {
    id?: number
    name: string
    email: string
    senha: string
    cpf: string
    cep?: string | null
    cidade?: string | null
    estado?: string | null
    matricula: string
    universidade?: string | null
    favoritos?: FavoritoUncheckedCreateNestedManyWithoutHospedeInput
    conversas?: ConversaUncheckedCreateNestedManyWithoutHospedeInput
    mensagens?: MensagemUncheckedCreateNestedManyWithoutRemetenteHospedeInput
    avaliacoesFeitas?: AvaliacaoUncheckedCreateNestedManyWithoutHospedeInput
  }

  export type HospedeCreateOrConnectWithoutReservasInput = {
    where: HospedeWhereUniqueInput
    create: XOR<HospedeCreateWithoutReservasInput, HospedeUncheckedCreateWithoutReservasInput>
  }

  export type CasaCreateWithoutReservasInput = {
    endereco: string
    numero: number
    cep?: string | null
    cidade?: string | null
    estado?: string | null
    diretrizes: string
    complemento?: string | null
    precoPorNoite?: number | null
    locador: LocadorCreateNestedOneWithoutCasasInput
    favoritos?: FavoritoCreateNestedManyWithoutCasaInput
    imagens?: ImagemCasaCreateNestedManyWithoutCasaInput
    conversas?: ConversaCreateNestedManyWithoutCasaInput
    bloqueiosDisponibilidade?: BloqueioDisponibilidadeCreateNestedManyWithoutCasaInput
    avaliacoes?: AvaliacaoCreateNestedManyWithoutCasaInput
  }

  export type CasaUncheckedCreateWithoutReservasInput = {
    id?: number
    endereco: string
    numero: number
    cep?: string | null
    cidade?: string | null
    estado?: string | null
    diretrizes: string
    complemento?: string | null
    precoPorNoite?: number | null
    locadorId: number
    favoritos?: FavoritoUncheckedCreateNestedManyWithoutCasaInput
    imagens?: ImagemCasaUncheckedCreateNestedManyWithoutCasaInput
    conversas?: ConversaUncheckedCreateNestedManyWithoutCasaInput
    bloqueiosDisponibilidade?: BloqueioDisponibilidadeUncheckedCreateNestedManyWithoutCasaInput
    avaliacoes?: AvaliacaoUncheckedCreateNestedManyWithoutCasaInput
  }

  export type CasaCreateOrConnectWithoutReservasInput = {
    where: CasaWhereUniqueInput
    create: XOR<CasaCreateWithoutReservasInput, CasaUncheckedCreateWithoutReservasInput>
  }

  export type LocadorCreateWithoutReservasInput = {
    name: string
    email: string
    senha: string
    cpf: string
    endereco: string
    cep?: string | null
    cidade?: string | null
    estado?: string | null
    casas?: CasaCreateNestedManyWithoutLocadorInput
    conversas?: ConversaCreateNestedManyWithoutLocadorInput
    mensagens?: MensagemCreateNestedManyWithoutRemetenteLocadorInput
  }

  export type LocadorUncheckedCreateWithoutReservasInput = {
    id?: number
    name: string
    email: string
    senha: string
    cpf: string
    endereco: string
    cep?: string | null
    cidade?: string | null
    estado?: string | null
    casas?: CasaUncheckedCreateNestedManyWithoutLocadorInput
    conversas?: ConversaUncheckedCreateNestedManyWithoutLocadorInput
    mensagens?: MensagemUncheckedCreateNestedManyWithoutRemetenteLocadorInput
  }

  export type LocadorCreateOrConnectWithoutReservasInput = {
    where: LocadorWhereUniqueInput
    create: XOR<LocadorCreateWithoutReservasInput, LocadorUncheckedCreateWithoutReservasInput>
  }

  export type AvaliacaoCreateWithoutReservaInput = {
    nota: number
    comentario?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    hospede: HospedeCreateNestedOneWithoutAvaliacoesFeitasInput
    casa: CasaCreateNestedOneWithoutAvaliacoesInput
  }

  export type AvaliacaoUncheckedCreateWithoutReservaInput = {
    id?: number
    nota: number
    comentario?: string | null
    hospedeId: number
    casaId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AvaliacaoCreateOrConnectWithoutReservaInput = {
    where: AvaliacaoWhereUniqueInput
    create: XOR<AvaliacaoCreateWithoutReservaInput, AvaliacaoUncheckedCreateWithoutReservaInput>
  }

  export type HospedeUpsertWithoutReservasInput = {
    update: XOR<HospedeUpdateWithoutReservasInput, HospedeUncheckedUpdateWithoutReservasInput>
    create: XOR<HospedeCreateWithoutReservasInput, HospedeUncheckedCreateWithoutReservasInput>
    where?: HospedeWhereInput
  }

  export type HospedeUpdateToOneWithWhereWithoutReservasInput = {
    where?: HospedeWhereInput
    data: XOR<HospedeUpdateWithoutReservasInput, HospedeUncheckedUpdateWithoutReservasInput>
  }

  export type HospedeUpdateWithoutReservasInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    cidade?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    matricula?: StringFieldUpdateOperationsInput | string
    universidade?: NullableStringFieldUpdateOperationsInput | string | null
    favoritos?: FavoritoUpdateManyWithoutHospedeNestedInput
    conversas?: ConversaUpdateManyWithoutHospedeNestedInput
    mensagens?: MensagemUpdateManyWithoutRemetenteHospedeNestedInput
    avaliacoesFeitas?: AvaliacaoUpdateManyWithoutHospedeNestedInput
  }

  export type HospedeUncheckedUpdateWithoutReservasInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    cidade?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    matricula?: StringFieldUpdateOperationsInput | string
    universidade?: NullableStringFieldUpdateOperationsInput | string | null
    favoritos?: FavoritoUncheckedUpdateManyWithoutHospedeNestedInput
    conversas?: ConversaUncheckedUpdateManyWithoutHospedeNestedInput
    mensagens?: MensagemUncheckedUpdateManyWithoutRemetenteHospedeNestedInput
    avaliacoesFeitas?: AvaliacaoUncheckedUpdateManyWithoutHospedeNestedInput
  }

  export type CasaUpsertWithoutReservasInput = {
    update: XOR<CasaUpdateWithoutReservasInput, CasaUncheckedUpdateWithoutReservasInput>
    create: XOR<CasaCreateWithoutReservasInput, CasaUncheckedCreateWithoutReservasInput>
    where?: CasaWhereInput
  }

  export type CasaUpdateToOneWithWhereWithoutReservasInput = {
    where?: CasaWhereInput
    data: XOR<CasaUpdateWithoutReservasInput, CasaUncheckedUpdateWithoutReservasInput>
  }

  export type CasaUpdateWithoutReservasInput = {
    endereco?: StringFieldUpdateOperationsInput | string
    numero?: IntFieldUpdateOperationsInput | number
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    cidade?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    diretrizes?: StringFieldUpdateOperationsInput | string
    complemento?: NullableStringFieldUpdateOperationsInput | string | null
    precoPorNoite?: NullableFloatFieldUpdateOperationsInput | number | null
    locador?: LocadorUpdateOneRequiredWithoutCasasNestedInput
    favoritos?: FavoritoUpdateManyWithoutCasaNestedInput
    imagens?: ImagemCasaUpdateManyWithoutCasaNestedInput
    conversas?: ConversaUpdateManyWithoutCasaNestedInput
    bloqueiosDisponibilidade?: BloqueioDisponibilidadeUpdateManyWithoutCasaNestedInput
    avaliacoes?: AvaliacaoUpdateManyWithoutCasaNestedInput
  }

  export type CasaUncheckedUpdateWithoutReservasInput = {
    id?: IntFieldUpdateOperationsInput | number
    endereco?: StringFieldUpdateOperationsInput | string
    numero?: IntFieldUpdateOperationsInput | number
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    cidade?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    diretrizes?: StringFieldUpdateOperationsInput | string
    complemento?: NullableStringFieldUpdateOperationsInput | string | null
    precoPorNoite?: NullableFloatFieldUpdateOperationsInput | number | null
    locadorId?: IntFieldUpdateOperationsInput | number
    favoritos?: FavoritoUncheckedUpdateManyWithoutCasaNestedInput
    imagens?: ImagemCasaUncheckedUpdateManyWithoutCasaNestedInput
    conversas?: ConversaUncheckedUpdateManyWithoutCasaNestedInput
    bloqueiosDisponibilidade?: BloqueioDisponibilidadeUncheckedUpdateManyWithoutCasaNestedInput
    avaliacoes?: AvaliacaoUncheckedUpdateManyWithoutCasaNestedInput
  }

  export type LocadorUpsertWithoutReservasInput = {
    update: XOR<LocadorUpdateWithoutReservasInput, LocadorUncheckedUpdateWithoutReservasInput>
    create: XOR<LocadorCreateWithoutReservasInput, LocadorUncheckedCreateWithoutReservasInput>
    where?: LocadorWhereInput
  }

  export type LocadorUpdateToOneWithWhereWithoutReservasInput = {
    where?: LocadorWhereInput
    data: XOR<LocadorUpdateWithoutReservasInput, LocadorUncheckedUpdateWithoutReservasInput>
  }

  export type LocadorUpdateWithoutReservasInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    cidade?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    casas?: CasaUpdateManyWithoutLocadorNestedInput
    conversas?: ConversaUpdateManyWithoutLocadorNestedInput
    mensagens?: MensagemUpdateManyWithoutRemetenteLocadorNestedInput
  }

  export type LocadorUncheckedUpdateWithoutReservasInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    cidade?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    casas?: CasaUncheckedUpdateManyWithoutLocadorNestedInput
    conversas?: ConversaUncheckedUpdateManyWithoutLocadorNestedInput
    mensagens?: MensagemUncheckedUpdateManyWithoutRemetenteLocadorNestedInput
  }

  export type AvaliacaoUpsertWithoutReservaInput = {
    update: XOR<AvaliacaoUpdateWithoutReservaInput, AvaliacaoUncheckedUpdateWithoutReservaInput>
    create: XOR<AvaliacaoCreateWithoutReservaInput, AvaliacaoUncheckedCreateWithoutReservaInput>
    where?: AvaliacaoWhereInput
  }

  export type AvaliacaoUpdateToOneWithWhereWithoutReservaInput = {
    where?: AvaliacaoWhereInput
    data: XOR<AvaliacaoUpdateWithoutReservaInput, AvaliacaoUncheckedUpdateWithoutReservaInput>
  }

  export type AvaliacaoUpdateWithoutReservaInput = {
    nota?: IntFieldUpdateOperationsInput | number
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hospede?: HospedeUpdateOneRequiredWithoutAvaliacoesFeitasNestedInput
    casa?: CasaUpdateOneRequiredWithoutAvaliacoesNestedInput
  }

  export type AvaliacaoUncheckedUpdateWithoutReservaInput = {
    id?: IntFieldUpdateOperationsInput | number
    nota?: IntFieldUpdateOperationsInput | number
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    hospedeId?: IntFieldUpdateOperationsInput | number
    casaId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HospedeCreateWithoutFavoritosInput = {
    name: string
    email: string
    senha: string
    cpf: string
    cep?: string | null
    cidade?: string | null
    estado?: string | null
    matricula: string
    universidade?: string | null
    reservas?: ReservaCreateNestedManyWithoutHospedeInput
    conversas?: ConversaCreateNestedManyWithoutHospedeInput
    mensagens?: MensagemCreateNestedManyWithoutRemetenteHospedeInput
    avaliacoesFeitas?: AvaliacaoCreateNestedManyWithoutHospedeInput
  }

  export type HospedeUncheckedCreateWithoutFavoritosInput = {
    id?: number
    name: string
    email: string
    senha: string
    cpf: string
    cep?: string | null
    cidade?: string | null
    estado?: string | null
    matricula: string
    universidade?: string | null
    reservas?: ReservaUncheckedCreateNestedManyWithoutHospedeInput
    conversas?: ConversaUncheckedCreateNestedManyWithoutHospedeInput
    mensagens?: MensagemUncheckedCreateNestedManyWithoutRemetenteHospedeInput
    avaliacoesFeitas?: AvaliacaoUncheckedCreateNestedManyWithoutHospedeInput
  }

  export type HospedeCreateOrConnectWithoutFavoritosInput = {
    where: HospedeWhereUniqueInput
    create: XOR<HospedeCreateWithoutFavoritosInput, HospedeUncheckedCreateWithoutFavoritosInput>
  }

  export type CasaCreateWithoutFavoritosInput = {
    endereco: string
    numero: number
    cep?: string | null
    cidade?: string | null
    estado?: string | null
    diretrizes: string
    complemento?: string | null
    precoPorNoite?: number | null
    locador: LocadorCreateNestedOneWithoutCasasInput
    reservas?: ReservaCreateNestedManyWithoutCasaInput
    imagens?: ImagemCasaCreateNestedManyWithoutCasaInput
    conversas?: ConversaCreateNestedManyWithoutCasaInput
    bloqueiosDisponibilidade?: BloqueioDisponibilidadeCreateNestedManyWithoutCasaInput
    avaliacoes?: AvaliacaoCreateNestedManyWithoutCasaInput
  }

  export type CasaUncheckedCreateWithoutFavoritosInput = {
    id?: number
    endereco: string
    numero: number
    cep?: string | null
    cidade?: string | null
    estado?: string | null
    diretrizes: string
    complemento?: string | null
    precoPorNoite?: number | null
    locadorId: number
    reservas?: ReservaUncheckedCreateNestedManyWithoutCasaInput
    imagens?: ImagemCasaUncheckedCreateNestedManyWithoutCasaInput
    conversas?: ConversaUncheckedCreateNestedManyWithoutCasaInput
    bloqueiosDisponibilidade?: BloqueioDisponibilidadeUncheckedCreateNestedManyWithoutCasaInput
    avaliacoes?: AvaliacaoUncheckedCreateNestedManyWithoutCasaInput
  }

  export type CasaCreateOrConnectWithoutFavoritosInput = {
    where: CasaWhereUniqueInput
    create: XOR<CasaCreateWithoutFavoritosInput, CasaUncheckedCreateWithoutFavoritosInput>
  }

  export type HospedeUpsertWithoutFavoritosInput = {
    update: XOR<HospedeUpdateWithoutFavoritosInput, HospedeUncheckedUpdateWithoutFavoritosInput>
    create: XOR<HospedeCreateWithoutFavoritosInput, HospedeUncheckedCreateWithoutFavoritosInput>
    where?: HospedeWhereInput
  }

  export type HospedeUpdateToOneWithWhereWithoutFavoritosInput = {
    where?: HospedeWhereInput
    data: XOR<HospedeUpdateWithoutFavoritosInput, HospedeUncheckedUpdateWithoutFavoritosInput>
  }

  export type HospedeUpdateWithoutFavoritosInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    cidade?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    matricula?: StringFieldUpdateOperationsInput | string
    universidade?: NullableStringFieldUpdateOperationsInput | string | null
    reservas?: ReservaUpdateManyWithoutHospedeNestedInput
    conversas?: ConversaUpdateManyWithoutHospedeNestedInput
    mensagens?: MensagemUpdateManyWithoutRemetenteHospedeNestedInput
    avaliacoesFeitas?: AvaliacaoUpdateManyWithoutHospedeNestedInput
  }

  export type HospedeUncheckedUpdateWithoutFavoritosInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    cidade?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    matricula?: StringFieldUpdateOperationsInput | string
    universidade?: NullableStringFieldUpdateOperationsInput | string | null
    reservas?: ReservaUncheckedUpdateManyWithoutHospedeNestedInput
    conversas?: ConversaUncheckedUpdateManyWithoutHospedeNestedInput
    mensagens?: MensagemUncheckedUpdateManyWithoutRemetenteHospedeNestedInput
    avaliacoesFeitas?: AvaliacaoUncheckedUpdateManyWithoutHospedeNestedInput
  }

  export type CasaUpsertWithoutFavoritosInput = {
    update: XOR<CasaUpdateWithoutFavoritosInput, CasaUncheckedUpdateWithoutFavoritosInput>
    create: XOR<CasaCreateWithoutFavoritosInput, CasaUncheckedCreateWithoutFavoritosInput>
    where?: CasaWhereInput
  }

  export type CasaUpdateToOneWithWhereWithoutFavoritosInput = {
    where?: CasaWhereInput
    data: XOR<CasaUpdateWithoutFavoritosInput, CasaUncheckedUpdateWithoutFavoritosInput>
  }

  export type CasaUpdateWithoutFavoritosInput = {
    endereco?: StringFieldUpdateOperationsInput | string
    numero?: IntFieldUpdateOperationsInput | number
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    cidade?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    diretrizes?: StringFieldUpdateOperationsInput | string
    complemento?: NullableStringFieldUpdateOperationsInput | string | null
    precoPorNoite?: NullableFloatFieldUpdateOperationsInput | number | null
    locador?: LocadorUpdateOneRequiredWithoutCasasNestedInput
    reservas?: ReservaUpdateManyWithoutCasaNestedInput
    imagens?: ImagemCasaUpdateManyWithoutCasaNestedInput
    conversas?: ConversaUpdateManyWithoutCasaNestedInput
    bloqueiosDisponibilidade?: BloqueioDisponibilidadeUpdateManyWithoutCasaNestedInput
    avaliacoes?: AvaliacaoUpdateManyWithoutCasaNestedInput
  }

  export type CasaUncheckedUpdateWithoutFavoritosInput = {
    id?: IntFieldUpdateOperationsInput | number
    endereco?: StringFieldUpdateOperationsInput | string
    numero?: IntFieldUpdateOperationsInput | number
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    cidade?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    diretrizes?: StringFieldUpdateOperationsInput | string
    complemento?: NullableStringFieldUpdateOperationsInput | string | null
    precoPorNoite?: NullableFloatFieldUpdateOperationsInput | number | null
    locadorId?: IntFieldUpdateOperationsInput | number
    reservas?: ReservaUncheckedUpdateManyWithoutCasaNestedInput
    imagens?: ImagemCasaUncheckedUpdateManyWithoutCasaNestedInput
    conversas?: ConversaUncheckedUpdateManyWithoutCasaNestedInput
    bloqueiosDisponibilidade?: BloqueioDisponibilidadeUncheckedUpdateManyWithoutCasaNestedInput
    avaliacoes?: AvaliacaoUncheckedUpdateManyWithoutCasaNestedInput
  }

  export type HospedeCreateWithoutConversasInput = {
    name: string
    email: string
    senha: string
    cpf: string
    cep?: string | null
    cidade?: string | null
    estado?: string | null
    matricula: string
    universidade?: string | null
    reservas?: ReservaCreateNestedManyWithoutHospedeInput
    favoritos?: FavoritoCreateNestedManyWithoutHospedeInput
    mensagens?: MensagemCreateNestedManyWithoutRemetenteHospedeInput
    avaliacoesFeitas?: AvaliacaoCreateNestedManyWithoutHospedeInput
  }

  export type HospedeUncheckedCreateWithoutConversasInput = {
    id?: number
    name: string
    email: string
    senha: string
    cpf: string
    cep?: string | null
    cidade?: string | null
    estado?: string | null
    matricula: string
    universidade?: string | null
    reservas?: ReservaUncheckedCreateNestedManyWithoutHospedeInput
    favoritos?: FavoritoUncheckedCreateNestedManyWithoutHospedeInput
    mensagens?: MensagemUncheckedCreateNestedManyWithoutRemetenteHospedeInput
    avaliacoesFeitas?: AvaliacaoUncheckedCreateNestedManyWithoutHospedeInput
  }

  export type HospedeCreateOrConnectWithoutConversasInput = {
    where: HospedeWhereUniqueInput
    create: XOR<HospedeCreateWithoutConversasInput, HospedeUncheckedCreateWithoutConversasInput>
  }

  export type LocadorCreateWithoutConversasInput = {
    name: string
    email: string
    senha: string
    cpf: string
    endereco: string
    cep?: string | null
    cidade?: string | null
    estado?: string | null
    casas?: CasaCreateNestedManyWithoutLocadorInput
    reservas?: ReservaCreateNestedManyWithoutLocadorInput
    mensagens?: MensagemCreateNestedManyWithoutRemetenteLocadorInput
  }

  export type LocadorUncheckedCreateWithoutConversasInput = {
    id?: number
    name: string
    email: string
    senha: string
    cpf: string
    endereco: string
    cep?: string | null
    cidade?: string | null
    estado?: string | null
    casas?: CasaUncheckedCreateNestedManyWithoutLocadorInput
    reservas?: ReservaUncheckedCreateNestedManyWithoutLocadorInput
    mensagens?: MensagemUncheckedCreateNestedManyWithoutRemetenteLocadorInput
  }

  export type LocadorCreateOrConnectWithoutConversasInput = {
    where: LocadorWhereUniqueInput
    create: XOR<LocadorCreateWithoutConversasInput, LocadorUncheckedCreateWithoutConversasInput>
  }

  export type CasaCreateWithoutConversasInput = {
    endereco: string
    numero: number
    cep?: string | null
    cidade?: string | null
    estado?: string | null
    diretrizes: string
    complemento?: string | null
    precoPorNoite?: number | null
    locador: LocadorCreateNestedOneWithoutCasasInput
    reservas?: ReservaCreateNestedManyWithoutCasaInput
    favoritos?: FavoritoCreateNestedManyWithoutCasaInput
    imagens?: ImagemCasaCreateNestedManyWithoutCasaInput
    bloqueiosDisponibilidade?: BloqueioDisponibilidadeCreateNestedManyWithoutCasaInput
    avaliacoes?: AvaliacaoCreateNestedManyWithoutCasaInput
  }

  export type CasaUncheckedCreateWithoutConversasInput = {
    id?: number
    endereco: string
    numero: number
    cep?: string | null
    cidade?: string | null
    estado?: string | null
    diretrizes: string
    complemento?: string | null
    precoPorNoite?: number | null
    locadorId: number
    reservas?: ReservaUncheckedCreateNestedManyWithoutCasaInput
    favoritos?: FavoritoUncheckedCreateNestedManyWithoutCasaInput
    imagens?: ImagemCasaUncheckedCreateNestedManyWithoutCasaInput
    bloqueiosDisponibilidade?: BloqueioDisponibilidadeUncheckedCreateNestedManyWithoutCasaInput
    avaliacoes?: AvaliacaoUncheckedCreateNestedManyWithoutCasaInput
  }

  export type CasaCreateOrConnectWithoutConversasInput = {
    where: CasaWhereUniqueInput
    create: XOR<CasaCreateWithoutConversasInput, CasaUncheckedCreateWithoutConversasInput>
  }

  export type MensagemCreateWithoutConversaInput = {
    conteudo: string
    createdAt?: Date | string
    lidaPeloHospede?: boolean
    lidaPeloLocador?: boolean
    remetenteHospede?: HospedeCreateNestedOneWithoutMensagensInput
    remetenteLocador?: LocadorCreateNestedOneWithoutMensagensInput
  }

  export type MensagemUncheckedCreateWithoutConversaInput = {
    id?: number
    conteudo: string
    createdAt?: Date | string
    remetenteHospedeId?: number | null
    remetenteLocadorId?: number | null
    lidaPeloHospede?: boolean
    lidaPeloLocador?: boolean
  }

  export type MensagemCreateOrConnectWithoutConversaInput = {
    where: MensagemWhereUniqueInput
    create: XOR<MensagemCreateWithoutConversaInput, MensagemUncheckedCreateWithoutConversaInput>
  }

  export type MensagemCreateManyConversaInputEnvelope = {
    data: MensagemCreateManyConversaInput | MensagemCreateManyConversaInput[]
  }

  export type HospedeUpsertWithoutConversasInput = {
    update: XOR<HospedeUpdateWithoutConversasInput, HospedeUncheckedUpdateWithoutConversasInput>
    create: XOR<HospedeCreateWithoutConversasInput, HospedeUncheckedCreateWithoutConversasInput>
    where?: HospedeWhereInput
  }

  export type HospedeUpdateToOneWithWhereWithoutConversasInput = {
    where?: HospedeWhereInput
    data: XOR<HospedeUpdateWithoutConversasInput, HospedeUncheckedUpdateWithoutConversasInput>
  }

  export type HospedeUpdateWithoutConversasInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    cidade?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    matricula?: StringFieldUpdateOperationsInput | string
    universidade?: NullableStringFieldUpdateOperationsInput | string | null
    reservas?: ReservaUpdateManyWithoutHospedeNestedInput
    favoritos?: FavoritoUpdateManyWithoutHospedeNestedInput
    mensagens?: MensagemUpdateManyWithoutRemetenteHospedeNestedInput
    avaliacoesFeitas?: AvaliacaoUpdateManyWithoutHospedeNestedInput
  }

  export type HospedeUncheckedUpdateWithoutConversasInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    cidade?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    matricula?: StringFieldUpdateOperationsInput | string
    universidade?: NullableStringFieldUpdateOperationsInput | string | null
    reservas?: ReservaUncheckedUpdateManyWithoutHospedeNestedInput
    favoritos?: FavoritoUncheckedUpdateManyWithoutHospedeNestedInput
    mensagens?: MensagemUncheckedUpdateManyWithoutRemetenteHospedeNestedInput
    avaliacoesFeitas?: AvaliacaoUncheckedUpdateManyWithoutHospedeNestedInput
  }

  export type LocadorUpsertWithoutConversasInput = {
    update: XOR<LocadorUpdateWithoutConversasInput, LocadorUncheckedUpdateWithoutConversasInput>
    create: XOR<LocadorCreateWithoutConversasInput, LocadorUncheckedCreateWithoutConversasInput>
    where?: LocadorWhereInput
  }

  export type LocadorUpdateToOneWithWhereWithoutConversasInput = {
    where?: LocadorWhereInput
    data: XOR<LocadorUpdateWithoutConversasInput, LocadorUncheckedUpdateWithoutConversasInput>
  }

  export type LocadorUpdateWithoutConversasInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    cidade?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    casas?: CasaUpdateManyWithoutLocadorNestedInput
    reservas?: ReservaUpdateManyWithoutLocadorNestedInput
    mensagens?: MensagemUpdateManyWithoutRemetenteLocadorNestedInput
  }

  export type LocadorUncheckedUpdateWithoutConversasInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    cidade?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    casas?: CasaUncheckedUpdateManyWithoutLocadorNestedInput
    reservas?: ReservaUncheckedUpdateManyWithoutLocadorNestedInput
    mensagens?: MensagemUncheckedUpdateManyWithoutRemetenteLocadorNestedInput
  }

  export type CasaUpsertWithoutConversasInput = {
    update: XOR<CasaUpdateWithoutConversasInput, CasaUncheckedUpdateWithoutConversasInput>
    create: XOR<CasaCreateWithoutConversasInput, CasaUncheckedCreateWithoutConversasInput>
    where?: CasaWhereInput
  }

  export type CasaUpdateToOneWithWhereWithoutConversasInput = {
    where?: CasaWhereInput
    data: XOR<CasaUpdateWithoutConversasInput, CasaUncheckedUpdateWithoutConversasInput>
  }

  export type CasaUpdateWithoutConversasInput = {
    endereco?: StringFieldUpdateOperationsInput | string
    numero?: IntFieldUpdateOperationsInput | number
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    cidade?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    diretrizes?: StringFieldUpdateOperationsInput | string
    complemento?: NullableStringFieldUpdateOperationsInput | string | null
    precoPorNoite?: NullableFloatFieldUpdateOperationsInput | number | null
    locador?: LocadorUpdateOneRequiredWithoutCasasNestedInput
    reservas?: ReservaUpdateManyWithoutCasaNestedInput
    favoritos?: FavoritoUpdateManyWithoutCasaNestedInput
    imagens?: ImagemCasaUpdateManyWithoutCasaNestedInput
    bloqueiosDisponibilidade?: BloqueioDisponibilidadeUpdateManyWithoutCasaNestedInput
    avaliacoes?: AvaliacaoUpdateManyWithoutCasaNestedInput
  }

  export type CasaUncheckedUpdateWithoutConversasInput = {
    id?: IntFieldUpdateOperationsInput | number
    endereco?: StringFieldUpdateOperationsInput | string
    numero?: IntFieldUpdateOperationsInput | number
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    cidade?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    diretrizes?: StringFieldUpdateOperationsInput | string
    complemento?: NullableStringFieldUpdateOperationsInput | string | null
    precoPorNoite?: NullableFloatFieldUpdateOperationsInput | number | null
    locadorId?: IntFieldUpdateOperationsInput | number
    reservas?: ReservaUncheckedUpdateManyWithoutCasaNestedInput
    favoritos?: FavoritoUncheckedUpdateManyWithoutCasaNestedInput
    imagens?: ImagemCasaUncheckedUpdateManyWithoutCasaNestedInput
    bloqueiosDisponibilidade?: BloqueioDisponibilidadeUncheckedUpdateManyWithoutCasaNestedInput
    avaliacoes?: AvaliacaoUncheckedUpdateManyWithoutCasaNestedInput
  }

  export type MensagemUpsertWithWhereUniqueWithoutConversaInput = {
    where: MensagemWhereUniqueInput
    update: XOR<MensagemUpdateWithoutConversaInput, MensagemUncheckedUpdateWithoutConversaInput>
    create: XOR<MensagemCreateWithoutConversaInput, MensagemUncheckedCreateWithoutConversaInput>
  }

  export type MensagemUpdateWithWhereUniqueWithoutConversaInput = {
    where: MensagemWhereUniqueInput
    data: XOR<MensagemUpdateWithoutConversaInput, MensagemUncheckedUpdateWithoutConversaInput>
  }

  export type MensagemUpdateManyWithWhereWithoutConversaInput = {
    where: MensagemScalarWhereInput
    data: XOR<MensagemUpdateManyMutationInput, MensagemUncheckedUpdateManyWithoutConversaInput>
  }

  export type ConversaCreateWithoutMensagensInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    hospede: HospedeCreateNestedOneWithoutConversasInput
    locador: LocadorCreateNestedOneWithoutConversasInput
    casa?: CasaCreateNestedOneWithoutConversasInput
  }

  export type ConversaUncheckedCreateWithoutMensagensInput = {
    id?: number
    hospedeId: number
    locadorId: number
    casaId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ConversaCreateOrConnectWithoutMensagensInput = {
    where: ConversaWhereUniqueInput
    create: XOR<ConversaCreateWithoutMensagensInput, ConversaUncheckedCreateWithoutMensagensInput>
  }

  export type HospedeCreateWithoutMensagensInput = {
    name: string
    email: string
    senha: string
    cpf: string
    cep?: string | null
    cidade?: string | null
    estado?: string | null
    matricula: string
    universidade?: string | null
    reservas?: ReservaCreateNestedManyWithoutHospedeInput
    favoritos?: FavoritoCreateNestedManyWithoutHospedeInput
    conversas?: ConversaCreateNestedManyWithoutHospedeInput
    avaliacoesFeitas?: AvaliacaoCreateNestedManyWithoutHospedeInput
  }

  export type HospedeUncheckedCreateWithoutMensagensInput = {
    id?: number
    name: string
    email: string
    senha: string
    cpf: string
    cep?: string | null
    cidade?: string | null
    estado?: string | null
    matricula: string
    universidade?: string | null
    reservas?: ReservaUncheckedCreateNestedManyWithoutHospedeInput
    favoritos?: FavoritoUncheckedCreateNestedManyWithoutHospedeInput
    conversas?: ConversaUncheckedCreateNestedManyWithoutHospedeInput
    avaliacoesFeitas?: AvaliacaoUncheckedCreateNestedManyWithoutHospedeInput
  }

  export type HospedeCreateOrConnectWithoutMensagensInput = {
    where: HospedeWhereUniqueInput
    create: XOR<HospedeCreateWithoutMensagensInput, HospedeUncheckedCreateWithoutMensagensInput>
  }

  export type LocadorCreateWithoutMensagensInput = {
    name: string
    email: string
    senha: string
    cpf: string
    endereco: string
    cep?: string | null
    cidade?: string | null
    estado?: string | null
    casas?: CasaCreateNestedManyWithoutLocadorInput
    reservas?: ReservaCreateNestedManyWithoutLocadorInput
    conversas?: ConversaCreateNestedManyWithoutLocadorInput
  }

  export type LocadorUncheckedCreateWithoutMensagensInput = {
    id?: number
    name: string
    email: string
    senha: string
    cpf: string
    endereco: string
    cep?: string | null
    cidade?: string | null
    estado?: string | null
    casas?: CasaUncheckedCreateNestedManyWithoutLocadorInput
    reservas?: ReservaUncheckedCreateNestedManyWithoutLocadorInput
    conversas?: ConversaUncheckedCreateNestedManyWithoutLocadorInput
  }

  export type LocadorCreateOrConnectWithoutMensagensInput = {
    where: LocadorWhereUniqueInput
    create: XOR<LocadorCreateWithoutMensagensInput, LocadorUncheckedCreateWithoutMensagensInput>
  }

  export type ConversaUpsertWithoutMensagensInput = {
    update: XOR<ConversaUpdateWithoutMensagensInput, ConversaUncheckedUpdateWithoutMensagensInput>
    create: XOR<ConversaCreateWithoutMensagensInput, ConversaUncheckedCreateWithoutMensagensInput>
    where?: ConversaWhereInput
  }

  export type ConversaUpdateToOneWithWhereWithoutMensagensInput = {
    where?: ConversaWhereInput
    data: XOR<ConversaUpdateWithoutMensagensInput, ConversaUncheckedUpdateWithoutMensagensInput>
  }

  export type ConversaUpdateWithoutMensagensInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hospede?: HospedeUpdateOneRequiredWithoutConversasNestedInput
    locador?: LocadorUpdateOneRequiredWithoutConversasNestedInput
    casa?: CasaUpdateOneWithoutConversasNestedInput
  }

  export type ConversaUncheckedUpdateWithoutMensagensInput = {
    id?: IntFieldUpdateOperationsInput | number
    hospedeId?: IntFieldUpdateOperationsInput | number
    locadorId?: IntFieldUpdateOperationsInput | number
    casaId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HospedeUpsertWithoutMensagensInput = {
    update: XOR<HospedeUpdateWithoutMensagensInput, HospedeUncheckedUpdateWithoutMensagensInput>
    create: XOR<HospedeCreateWithoutMensagensInput, HospedeUncheckedCreateWithoutMensagensInput>
    where?: HospedeWhereInput
  }

  export type HospedeUpdateToOneWithWhereWithoutMensagensInput = {
    where?: HospedeWhereInput
    data: XOR<HospedeUpdateWithoutMensagensInput, HospedeUncheckedUpdateWithoutMensagensInput>
  }

  export type HospedeUpdateWithoutMensagensInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    cidade?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    matricula?: StringFieldUpdateOperationsInput | string
    universidade?: NullableStringFieldUpdateOperationsInput | string | null
    reservas?: ReservaUpdateManyWithoutHospedeNestedInput
    favoritos?: FavoritoUpdateManyWithoutHospedeNestedInput
    conversas?: ConversaUpdateManyWithoutHospedeNestedInput
    avaliacoesFeitas?: AvaliacaoUpdateManyWithoutHospedeNestedInput
  }

  export type HospedeUncheckedUpdateWithoutMensagensInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    cidade?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    matricula?: StringFieldUpdateOperationsInput | string
    universidade?: NullableStringFieldUpdateOperationsInput | string | null
    reservas?: ReservaUncheckedUpdateManyWithoutHospedeNestedInput
    favoritos?: FavoritoUncheckedUpdateManyWithoutHospedeNestedInput
    conversas?: ConversaUncheckedUpdateManyWithoutHospedeNestedInput
    avaliacoesFeitas?: AvaliacaoUncheckedUpdateManyWithoutHospedeNestedInput
  }

  export type LocadorUpsertWithoutMensagensInput = {
    update: XOR<LocadorUpdateWithoutMensagensInput, LocadorUncheckedUpdateWithoutMensagensInput>
    create: XOR<LocadorCreateWithoutMensagensInput, LocadorUncheckedCreateWithoutMensagensInput>
    where?: LocadorWhereInput
  }

  export type LocadorUpdateToOneWithWhereWithoutMensagensInput = {
    where?: LocadorWhereInput
    data: XOR<LocadorUpdateWithoutMensagensInput, LocadorUncheckedUpdateWithoutMensagensInput>
  }

  export type LocadorUpdateWithoutMensagensInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    cidade?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    casas?: CasaUpdateManyWithoutLocadorNestedInput
    reservas?: ReservaUpdateManyWithoutLocadorNestedInput
    conversas?: ConversaUpdateManyWithoutLocadorNestedInput
  }

  export type LocadorUncheckedUpdateWithoutMensagensInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    cidade?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    casas?: CasaUncheckedUpdateManyWithoutLocadorNestedInput
    reservas?: ReservaUncheckedUpdateManyWithoutLocadorNestedInput
    conversas?: ConversaUncheckedUpdateManyWithoutLocadorNestedInput
  }

  export type ReservaCreateWithoutAvaliacaoInput = {
    dataCheckIn: Date | string
    dataCheckOut: Date | string
    status: string
    numeroHospedes?: number | null
    valorTotal?: number | null
    observacoes?: string | null
    valorTotalCalculado?: number | null
    statusPagamento?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    hospede: HospedeCreateNestedOneWithoutReservasInput
    casa: CasaCreateNestedOneWithoutReservasInput
    locador: LocadorCreateNestedOneWithoutReservasInput
  }

  export type ReservaUncheckedCreateWithoutAvaliacaoInput = {
    id?: number
    dataCheckIn: Date | string
    dataCheckOut: Date | string
    status: string
    numeroHospedes?: number | null
    valorTotal?: number | null
    observacoes?: string | null
    valorTotalCalculado?: number | null
    statusPagamento?: string | null
    hospedeId: number
    casaId: number
    locadorId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReservaCreateOrConnectWithoutAvaliacaoInput = {
    where: ReservaWhereUniqueInput
    create: XOR<ReservaCreateWithoutAvaliacaoInput, ReservaUncheckedCreateWithoutAvaliacaoInput>
  }

  export type HospedeCreateWithoutAvaliacoesFeitasInput = {
    name: string
    email: string
    senha: string
    cpf: string
    cep?: string | null
    cidade?: string | null
    estado?: string | null
    matricula: string
    universidade?: string | null
    reservas?: ReservaCreateNestedManyWithoutHospedeInput
    favoritos?: FavoritoCreateNestedManyWithoutHospedeInput
    conversas?: ConversaCreateNestedManyWithoutHospedeInput
    mensagens?: MensagemCreateNestedManyWithoutRemetenteHospedeInput
  }

  export type HospedeUncheckedCreateWithoutAvaliacoesFeitasInput = {
    id?: number
    name: string
    email: string
    senha: string
    cpf: string
    cep?: string | null
    cidade?: string | null
    estado?: string | null
    matricula: string
    universidade?: string | null
    reservas?: ReservaUncheckedCreateNestedManyWithoutHospedeInput
    favoritos?: FavoritoUncheckedCreateNestedManyWithoutHospedeInput
    conversas?: ConversaUncheckedCreateNestedManyWithoutHospedeInput
    mensagens?: MensagemUncheckedCreateNestedManyWithoutRemetenteHospedeInput
  }

  export type HospedeCreateOrConnectWithoutAvaliacoesFeitasInput = {
    where: HospedeWhereUniqueInput
    create: XOR<HospedeCreateWithoutAvaliacoesFeitasInput, HospedeUncheckedCreateWithoutAvaliacoesFeitasInput>
  }

  export type CasaCreateWithoutAvaliacoesInput = {
    endereco: string
    numero: number
    cep?: string | null
    cidade?: string | null
    estado?: string | null
    diretrizes: string
    complemento?: string | null
    precoPorNoite?: number | null
    locador: LocadorCreateNestedOneWithoutCasasInput
    reservas?: ReservaCreateNestedManyWithoutCasaInput
    favoritos?: FavoritoCreateNestedManyWithoutCasaInput
    imagens?: ImagemCasaCreateNestedManyWithoutCasaInput
    conversas?: ConversaCreateNestedManyWithoutCasaInput
    bloqueiosDisponibilidade?: BloqueioDisponibilidadeCreateNestedManyWithoutCasaInput
  }

  export type CasaUncheckedCreateWithoutAvaliacoesInput = {
    id?: number
    endereco: string
    numero: number
    cep?: string | null
    cidade?: string | null
    estado?: string | null
    diretrizes: string
    complemento?: string | null
    precoPorNoite?: number | null
    locadorId: number
    reservas?: ReservaUncheckedCreateNestedManyWithoutCasaInput
    favoritos?: FavoritoUncheckedCreateNestedManyWithoutCasaInput
    imagens?: ImagemCasaUncheckedCreateNestedManyWithoutCasaInput
    conversas?: ConversaUncheckedCreateNestedManyWithoutCasaInput
    bloqueiosDisponibilidade?: BloqueioDisponibilidadeUncheckedCreateNestedManyWithoutCasaInput
  }

  export type CasaCreateOrConnectWithoutAvaliacoesInput = {
    where: CasaWhereUniqueInput
    create: XOR<CasaCreateWithoutAvaliacoesInput, CasaUncheckedCreateWithoutAvaliacoesInput>
  }

  export type ReservaUpsertWithoutAvaliacaoInput = {
    update: XOR<ReservaUpdateWithoutAvaliacaoInput, ReservaUncheckedUpdateWithoutAvaliacaoInput>
    create: XOR<ReservaCreateWithoutAvaliacaoInput, ReservaUncheckedCreateWithoutAvaliacaoInput>
    where?: ReservaWhereInput
  }

  export type ReservaUpdateToOneWithWhereWithoutAvaliacaoInput = {
    where?: ReservaWhereInput
    data: XOR<ReservaUpdateWithoutAvaliacaoInput, ReservaUncheckedUpdateWithoutAvaliacaoInput>
  }

  export type ReservaUpdateWithoutAvaliacaoInput = {
    dataCheckIn?: DateTimeFieldUpdateOperationsInput | Date | string
    dataCheckOut?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    numeroHospedes?: NullableIntFieldUpdateOperationsInput | number | null
    valorTotal?: NullableFloatFieldUpdateOperationsInput | number | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    valorTotalCalculado?: NullableFloatFieldUpdateOperationsInput | number | null
    statusPagamento?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hospede?: HospedeUpdateOneRequiredWithoutReservasNestedInput
    casa?: CasaUpdateOneRequiredWithoutReservasNestedInput
    locador?: LocadorUpdateOneRequiredWithoutReservasNestedInput
  }

  export type ReservaUncheckedUpdateWithoutAvaliacaoInput = {
    id?: IntFieldUpdateOperationsInput | number
    dataCheckIn?: DateTimeFieldUpdateOperationsInput | Date | string
    dataCheckOut?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    numeroHospedes?: NullableIntFieldUpdateOperationsInput | number | null
    valorTotal?: NullableFloatFieldUpdateOperationsInput | number | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    valorTotalCalculado?: NullableFloatFieldUpdateOperationsInput | number | null
    statusPagamento?: NullableStringFieldUpdateOperationsInput | string | null
    hospedeId?: IntFieldUpdateOperationsInput | number
    casaId?: IntFieldUpdateOperationsInput | number
    locadorId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HospedeUpsertWithoutAvaliacoesFeitasInput = {
    update: XOR<HospedeUpdateWithoutAvaliacoesFeitasInput, HospedeUncheckedUpdateWithoutAvaliacoesFeitasInput>
    create: XOR<HospedeCreateWithoutAvaliacoesFeitasInput, HospedeUncheckedCreateWithoutAvaliacoesFeitasInput>
    where?: HospedeWhereInput
  }

  export type HospedeUpdateToOneWithWhereWithoutAvaliacoesFeitasInput = {
    where?: HospedeWhereInput
    data: XOR<HospedeUpdateWithoutAvaliacoesFeitasInput, HospedeUncheckedUpdateWithoutAvaliacoesFeitasInput>
  }

  export type HospedeUpdateWithoutAvaliacoesFeitasInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    cidade?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    matricula?: StringFieldUpdateOperationsInput | string
    universidade?: NullableStringFieldUpdateOperationsInput | string | null
    reservas?: ReservaUpdateManyWithoutHospedeNestedInput
    favoritos?: FavoritoUpdateManyWithoutHospedeNestedInput
    conversas?: ConversaUpdateManyWithoutHospedeNestedInput
    mensagens?: MensagemUpdateManyWithoutRemetenteHospedeNestedInput
  }

  export type HospedeUncheckedUpdateWithoutAvaliacoesFeitasInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    cidade?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    matricula?: StringFieldUpdateOperationsInput | string
    universidade?: NullableStringFieldUpdateOperationsInput | string | null
    reservas?: ReservaUncheckedUpdateManyWithoutHospedeNestedInput
    favoritos?: FavoritoUncheckedUpdateManyWithoutHospedeNestedInput
    conversas?: ConversaUncheckedUpdateManyWithoutHospedeNestedInput
    mensagens?: MensagemUncheckedUpdateManyWithoutRemetenteHospedeNestedInput
  }

  export type CasaUpsertWithoutAvaliacoesInput = {
    update: XOR<CasaUpdateWithoutAvaliacoesInput, CasaUncheckedUpdateWithoutAvaliacoesInput>
    create: XOR<CasaCreateWithoutAvaliacoesInput, CasaUncheckedCreateWithoutAvaliacoesInput>
    where?: CasaWhereInput
  }

  export type CasaUpdateToOneWithWhereWithoutAvaliacoesInput = {
    where?: CasaWhereInput
    data: XOR<CasaUpdateWithoutAvaliacoesInput, CasaUncheckedUpdateWithoutAvaliacoesInput>
  }

  export type CasaUpdateWithoutAvaliacoesInput = {
    endereco?: StringFieldUpdateOperationsInput | string
    numero?: IntFieldUpdateOperationsInput | number
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    cidade?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    diretrizes?: StringFieldUpdateOperationsInput | string
    complemento?: NullableStringFieldUpdateOperationsInput | string | null
    precoPorNoite?: NullableFloatFieldUpdateOperationsInput | number | null
    locador?: LocadorUpdateOneRequiredWithoutCasasNestedInput
    reservas?: ReservaUpdateManyWithoutCasaNestedInput
    favoritos?: FavoritoUpdateManyWithoutCasaNestedInput
    imagens?: ImagemCasaUpdateManyWithoutCasaNestedInput
    conversas?: ConversaUpdateManyWithoutCasaNestedInput
    bloqueiosDisponibilidade?: BloqueioDisponibilidadeUpdateManyWithoutCasaNestedInput
  }

  export type CasaUncheckedUpdateWithoutAvaliacoesInput = {
    id?: IntFieldUpdateOperationsInput | number
    endereco?: StringFieldUpdateOperationsInput | string
    numero?: IntFieldUpdateOperationsInput | number
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    cidade?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    diretrizes?: StringFieldUpdateOperationsInput | string
    complemento?: NullableStringFieldUpdateOperationsInput | string | null
    precoPorNoite?: NullableFloatFieldUpdateOperationsInput | number | null
    locadorId?: IntFieldUpdateOperationsInput | number
    reservas?: ReservaUncheckedUpdateManyWithoutCasaNestedInput
    favoritos?: FavoritoUncheckedUpdateManyWithoutCasaNestedInput
    imagens?: ImagemCasaUncheckedUpdateManyWithoutCasaNestedInput
    conversas?: ConversaUncheckedUpdateManyWithoutCasaNestedInput
    bloqueiosDisponibilidade?: BloqueioDisponibilidadeUncheckedUpdateManyWithoutCasaNestedInput
  }

  export type ReservaCreateManyCasaInput = {
    id?: number
    dataCheckIn: Date | string
    dataCheckOut: Date | string
    status: string
    numeroHospedes?: number | null
    valorTotal?: number | null
    observacoes?: string | null
    valorTotalCalculado?: number | null
    statusPagamento?: string | null
    hospedeId: number
    locadorId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FavoritoCreateManyCasaInput = {
    id?: number
    hospedeId: number
    createdAt?: Date | string
  }

  export type ImagemCasaCreateManyCasaInput = {
    id?: number
    url: string
    createdAt?: Date | string
  }

  export type ConversaCreateManyCasaInput = {
    id?: number
    hospedeId: number
    locadorId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BloqueioDisponibilidadeCreateManyCasaInput = {
    id?: number
    dataInicio: Date | string
    dataFim: Date | string
    motivo?: string | null
    createdAt?: Date | string
  }

  export type AvaliacaoCreateManyCasaInput = {
    id?: number
    nota: number
    comentario?: string | null
    reservaId: number
    hospedeId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReservaUpdateWithoutCasaInput = {
    dataCheckIn?: DateTimeFieldUpdateOperationsInput | Date | string
    dataCheckOut?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    numeroHospedes?: NullableIntFieldUpdateOperationsInput | number | null
    valorTotal?: NullableFloatFieldUpdateOperationsInput | number | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    valorTotalCalculado?: NullableFloatFieldUpdateOperationsInput | number | null
    statusPagamento?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hospede?: HospedeUpdateOneRequiredWithoutReservasNestedInput
    locador?: LocadorUpdateOneRequiredWithoutReservasNestedInput
    avaliacao?: AvaliacaoUpdateOneWithoutReservaNestedInput
  }

  export type ReservaUncheckedUpdateWithoutCasaInput = {
    id?: IntFieldUpdateOperationsInput | number
    dataCheckIn?: DateTimeFieldUpdateOperationsInput | Date | string
    dataCheckOut?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    numeroHospedes?: NullableIntFieldUpdateOperationsInput | number | null
    valorTotal?: NullableFloatFieldUpdateOperationsInput | number | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    valorTotalCalculado?: NullableFloatFieldUpdateOperationsInput | number | null
    statusPagamento?: NullableStringFieldUpdateOperationsInput | string | null
    hospedeId?: IntFieldUpdateOperationsInput | number
    locadorId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    avaliacao?: AvaliacaoUncheckedUpdateOneWithoutReservaNestedInput
  }

  export type ReservaUncheckedUpdateManyWithoutCasaInput = {
    id?: IntFieldUpdateOperationsInput | number
    dataCheckIn?: DateTimeFieldUpdateOperationsInput | Date | string
    dataCheckOut?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    numeroHospedes?: NullableIntFieldUpdateOperationsInput | number | null
    valorTotal?: NullableFloatFieldUpdateOperationsInput | number | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    valorTotalCalculado?: NullableFloatFieldUpdateOperationsInput | number | null
    statusPagamento?: NullableStringFieldUpdateOperationsInput | string | null
    hospedeId?: IntFieldUpdateOperationsInput | number
    locadorId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoritoUpdateWithoutCasaInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hospede?: HospedeUpdateOneRequiredWithoutFavoritosNestedInput
  }

  export type FavoritoUncheckedUpdateWithoutCasaInput = {
    id?: IntFieldUpdateOperationsInput | number
    hospedeId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoritoUncheckedUpdateManyWithoutCasaInput = {
    id?: IntFieldUpdateOperationsInput | number
    hospedeId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImagemCasaUpdateWithoutCasaInput = {
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImagemCasaUncheckedUpdateWithoutCasaInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImagemCasaUncheckedUpdateManyWithoutCasaInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConversaUpdateWithoutCasaInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hospede?: HospedeUpdateOneRequiredWithoutConversasNestedInput
    locador?: LocadorUpdateOneRequiredWithoutConversasNestedInput
    mensagens?: MensagemUpdateManyWithoutConversaNestedInput
  }

  export type ConversaUncheckedUpdateWithoutCasaInput = {
    id?: IntFieldUpdateOperationsInput | number
    hospedeId?: IntFieldUpdateOperationsInput | number
    locadorId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mensagens?: MensagemUncheckedUpdateManyWithoutConversaNestedInput
  }

  export type ConversaUncheckedUpdateManyWithoutCasaInput = {
    id?: IntFieldUpdateOperationsInput | number
    hospedeId?: IntFieldUpdateOperationsInput | number
    locadorId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BloqueioDisponibilidadeUpdateWithoutCasaInput = {
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: DateTimeFieldUpdateOperationsInput | Date | string
    motivo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BloqueioDisponibilidadeUncheckedUpdateWithoutCasaInput = {
    id?: IntFieldUpdateOperationsInput | number
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: DateTimeFieldUpdateOperationsInput | Date | string
    motivo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BloqueioDisponibilidadeUncheckedUpdateManyWithoutCasaInput = {
    id?: IntFieldUpdateOperationsInput | number
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: DateTimeFieldUpdateOperationsInput | Date | string
    motivo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AvaliacaoUpdateWithoutCasaInput = {
    nota?: IntFieldUpdateOperationsInput | number
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reserva?: ReservaUpdateOneRequiredWithoutAvaliacaoNestedInput
    hospede?: HospedeUpdateOneRequiredWithoutAvaliacoesFeitasNestedInput
  }

  export type AvaliacaoUncheckedUpdateWithoutCasaInput = {
    id?: IntFieldUpdateOperationsInput | number
    nota?: IntFieldUpdateOperationsInput | number
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    reservaId?: IntFieldUpdateOperationsInput | number
    hospedeId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AvaliacaoUncheckedUpdateManyWithoutCasaInput = {
    id?: IntFieldUpdateOperationsInput | number
    nota?: IntFieldUpdateOperationsInput | number
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    reservaId?: IntFieldUpdateOperationsInput | number
    hospedeId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CasaCreateManyLocadorInput = {
    id?: number
    endereco: string
    numero: number
    cep?: string | null
    cidade?: string | null
    estado?: string | null
    diretrizes: string
    complemento?: string | null
    precoPorNoite?: number | null
  }

  export type ReservaCreateManyLocadorInput = {
    id?: number
    dataCheckIn: Date | string
    dataCheckOut: Date | string
    status: string
    numeroHospedes?: number | null
    valorTotal?: number | null
    observacoes?: string | null
    valorTotalCalculado?: number | null
    statusPagamento?: string | null
    hospedeId: number
    casaId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ConversaCreateManyLocadorInput = {
    id?: number
    hospedeId: number
    casaId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MensagemCreateManyRemetenteLocadorInput = {
    id?: number
    conteudo: string
    createdAt?: Date | string
    conversaId: number
    remetenteHospedeId?: number | null
    lidaPeloHospede?: boolean
    lidaPeloLocador?: boolean
  }

  export type CasaUpdateWithoutLocadorInput = {
    endereco?: StringFieldUpdateOperationsInput | string
    numero?: IntFieldUpdateOperationsInput | number
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    cidade?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    diretrizes?: StringFieldUpdateOperationsInput | string
    complemento?: NullableStringFieldUpdateOperationsInput | string | null
    precoPorNoite?: NullableFloatFieldUpdateOperationsInput | number | null
    reservas?: ReservaUpdateManyWithoutCasaNestedInput
    favoritos?: FavoritoUpdateManyWithoutCasaNestedInput
    imagens?: ImagemCasaUpdateManyWithoutCasaNestedInput
    conversas?: ConversaUpdateManyWithoutCasaNestedInput
    bloqueiosDisponibilidade?: BloqueioDisponibilidadeUpdateManyWithoutCasaNestedInput
    avaliacoes?: AvaliacaoUpdateManyWithoutCasaNestedInput
  }

  export type CasaUncheckedUpdateWithoutLocadorInput = {
    id?: IntFieldUpdateOperationsInput | number
    endereco?: StringFieldUpdateOperationsInput | string
    numero?: IntFieldUpdateOperationsInput | number
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    cidade?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    diretrizes?: StringFieldUpdateOperationsInput | string
    complemento?: NullableStringFieldUpdateOperationsInput | string | null
    precoPorNoite?: NullableFloatFieldUpdateOperationsInput | number | null
    reservas?: ReservaUncheckedUpdateManyWithoutCasaNestedInput
    favoritos?: FavoritoUncheckedUpdateManyWithoutCasaNestedInput
    imagens?: ImagemCasaUncheckedUpdateManyWithoutCasaNestedInput
    conversas?: ConversaUncheckedUpdateManyWithoutCasaNestedInput
    bloqueiosDisponibilidade?: BloqueioDisponibilidadeUncheckedUpdateManyWithoutCasaNestedInput
    avaliacoes?: AvaliacaoUncheckedUpdateManyWithoutCasaNestedInput
  }

  export type CasaUncheckedUpdateManyWithoutLocadorInput = {
    id?: IntFieldUpdateOperationsInput | number
    endereco?: StringFieldUpdateOperationsInput | string
    numero?: IntFieldUpdateOperationsInput | number
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    cidade?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    diretrizes?: StringFieldUpdateOperationsInput | string
    complemento?: NullableStringFieldUpdateOperationsInput | string | null
    precoPorNoite?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type ReservaUpdateWithoutLocadorInput = {
    dataCheckIn?: DateTimeFieldUpdateOperationsInput | Date | string
    dataCheckOut?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    numeroHospedes?: NullableIntFieldUpdateOperationsInput | number | null
    valorTotal?: NullableFloatFieldUpdateOperationsInput | number | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    valorTotalCalculado?: NullableFloatFieldUpdateOperationsInput | number | null
    statusPagamento?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hospede?: HospedeUpdateOneRequiredWithoutReservasNestedInput
    casa?: CasaUpdateOneRequiredWithoutReservasNestedInput
    avaliacao?: AvaliacaoUpdateOneWithoutReservaNestedInput
  }

  export type ReservaUncheckedUpdateWithoutLocadorInput = {
    id?: IntFieldUpdateOperationsInput | number
    dataCheckIn?: DateTimeFieldUpdateOperationsInput | Date | string
    dataCheckOut?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    numeroHospedes?: NullableIntFieldUpdateOperationsInput | number | null
    valorTotal?: NullableFloatFieldUpdateOperationsInput | number | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    valorTotalCalculado?: NullableFloatFieldUpdateOperationsInput | number | null
    statusPagamento?: NullableStringFieldUpdateOperationsInput | string | null
    hospedeId?: IntFieldUpdateOperationsInput | number
    casaId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    avaliacao?: AvaliacaoUncheckedUpdateOneWithoutReservaNestedInput
  }

  export type ReservaUncheckedUpdateManyWithoutLocadorInput = {
    id?: IntFieldUpdateOperationsInput | number
    dataCheckIn?: DateTimeFieldUpdateOperationsInput | Date | string
    dataCheckOut?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    numeroHospedes?: NullableIntFieldUpdateOperationsInput | number | null
    valorTotal?: NullableFloatFieldUpdateOperationsInput | number | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    valorTotalCalculado?: NullableFloatFieldUpdateOperationsInput | number | null
    statusPagamento?: NullableStringFieldUpdateOperationsInput | string | null
    hospedeId?: IntFieldUpdateOperationsInput | number
    casaId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConversaUpdateWithoutLocadorInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hospede?: HospedeUpdateOneRequiredWithoutConversasNestedInput
    casa?: CasaUpdateOneWithoutConversasNestedInput
    mensagens?: MensagemUpdateManyWithoutConversaNestedInput
  }

  export type ConversaUncheckedUpdateWithoutLocadorInput = {
    id?: IntFieldUpdateOperationsInput | number
    hospedeId?: IntFieldUpdateOperationsInput | number
    casaId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mensagens?: MensagemUncheckedUpdateManyWithoutConversaNestedInput
  }

  export type ConversaUncheckedUpdateManyWithoutLocadorInput = {
    id?: IntFieldUpdateOperationsInput | number
    hospedeId?: IntFieldUpdateOperationsInput | number
    casaId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MensagemUpdateWithoutRemetenteLocadorInput = {
    conteudo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lidaPeloHospede?: BoolFieldUpdateOperationsInput | boolean
    lidaPeloLocador?: BoolFieldUpdateOperationsInput | boolean
    conversa?: ConversaUpdateOneRequiredWithoutMensagensNestedInput
    remetenteHospede?: HospedeUpdateOneWithoutMensagensNestedInput
  }

  export type MensagemUncheckedUpdateWithoutRemetenteLocadorInput = {
    id?: IntFieldUpdateOperationsInput | number
    conteudo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conversaId?: IntFieldUpdateOperationsInput | number
    remetenteHospedeId?: NullableIntFieldUpdateOperationsInput | number | null
    lidaPeloHospede?: BoolFieldUpdateOperationsInput | boolean
    lidaPeloLocador?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MensagemUncheckedUpdateManyWithoutRemetenteLocadorInput = {
    id?: IntFieldUpdateOperationsInput | number
    conteudo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conversaId?: IntFieldUpdateOperationsInput | number
    remetenteHospedeId?: NullableIntFieldUpdateOperationsInput | number | null
    lidaPeloHospede?: BoolFieldUpdateOperationsInput | boolean
    lidaPeloLocador?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ReservaCreateManyHospedeInput = {
    id?: number
    dataCheckIn: Date | string
    dataCheckOut: Date | string
    status: string
    numeroHospedes?: number | null
    valorTotal?: number | null
    observacoes?: string | null
    valorTotalCalculado?: number | null
    statusPagamento?: string | null
    casaId: number
    locadorId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FavoritoCreateManyHospedeInput = {
    id?: number
    casaId: number
    createdAt?: Date | string
  }

  export type ConversaCreateManyHospedeInput = {
    id?: number
    locadorId: number
    casaId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MensagemCreateManyRemetenteHospedeInput = {
    id?: number
    conteudo: string
    createdAt?: Date | string
    conversaId: number
    remetenteLocadorId?: number | null
    lidaPeloHospede?: boolean
    lidaPeloLocador?: boolean
  }

  export type AvaliacaoCreateManyHospedeInput = {
    id?: number
    nota: number
    comentario?: string | null
    reservaId: number
    casaId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReservaUpdateWithoutHospedeInput = {
    dataCheckIn?: DateTimeFieldUpdateOperationsInput | Date | string
    dataCheckOut?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    numeroHospedes?: NullableIntFieldUpdateOperationsInput | number | null
    valorTotal?: NullableFloatFieldUpdateOperationsInput | number | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    valorTotalCalculado?: NullableFloatFieldUpdateOperationsInput | number | null
    statusPagamento?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    casa?: CasaUpdateOneRequiredWithoutReservasNestedInput
    locador?: LocadorUpdateOneRequiredWithoutReservasNestedInput
    avaliacao?: AvaliacaoUpdateOneWithoutReservaNestedInput
  }

  export type ReservaUncheckedUpdateWithoutHospedeInput = {
    id?: IntFieldUpdateOperationsInput | number
    dataCheckIn?: DateTimeFieldUpdateOperationsInput | Date | string
    dataCheckOut?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    numeroHospedes?: NullableIntFieldUpdateOperationsInput | number | null
    valorTotal?: NullableFloatFieldUpdateOperationsInput | number | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    valorTotalCalculado?: NullableFloatFieldUpdateOperationsInput | number | null
    statusPagamento?: NullableStringFieldUpdateOperationsInput | string | null
    casaId?: IntFieldUpdateOperationsInput | number
    locadorId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    avaliacao?: AvaliacaoUncheckedUpdateOneWithoutReservaNestedInput
  }

  export type ReservaUncheckedUpdateManyWithoutHospedeInput = {
    id?: IntFieldUpdateOperationsInput | number
    dataCheckIn?: DateTimeFieldUpdateOperationsInput | Date | string
    dataCheckOut?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    numeroHospedes?: NullableIntFieldUpdateOperationsInput | number | null
    valorTotal?: NullableFloatFieldUpdateOperationsInput | number | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    valorTotalCalculado?: NullableFloatFieldUpdateOperationsInput | number | null
    statusPagamento?: NullableStringFieldUpdateOperationsInput | string | null
    casaId?: IntFieldUpdateOperationsInput | number
    locadorId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoritoUpdateWithoutHospedeInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    casa?: CasaUpdateOneRequiredWithoutFavoritosNestedInput
  }

  export type FavoritoUncheckedUpdateWithoutHospedeInput = {
    id?: IntFieldUpdateOperationsInput | number
    casaId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoritoUncheckedUpdateManyWithoutHospedeInput = {
    id?: IntFieldUpdateOperationsInput | number
    casaId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConversaUpdateWithoutHospedeInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    locador?: LocadorUpdateOneRequiredWithoutConversasNestedInput
    casa?: CasaUpdateOneWithoutConversasNestedInput
    mensagens?: MensagemUpdateManyWithoutConversaNestedInput
  }

  export type ConversaUncheckedUpdateWithoutHospedeInput = {
    id?: IntFieldUpdateOperationsInput | number
    locadorId?: IntFieldUpdateOperationsInput | number
    casaId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mensagens?: MensagemUncheckedUpdateManyWithoutConversaNestedInput
  }

  export type ConversaUncheckedUpdateManyWithoutHospedeInput = {
    id?: IntFieldUpdateOperationsInput | number
    locadorId?: IntFieldUpdateOperationsInput | number
    casaId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MensagemUpdateWithoutRemetenteHospedeInput = {
    conteudo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lidaPeloHospede?: BoolFieldUpdateOperationsInput | boolean
    lidaPeloLocador?: BoolFieldUpdateOperationsInput | boolean
    conversa?: ConversaUpdateOneRequiredWithoutMensagensNestedInput
    remetenteLocador?: LocadorUpdateOneWithoutMensagensNestedInput
  }

  export type MensagemUncheckedUpdateWithoutRemetenteHospedeInput = {
    id?: IntFieldUpdateOperationsInput | number
    conteudo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conversaId?: IntFieldUpdateOperationsInput | number
    remetenteLocadorId?: NullableIntFieldUpdateOperationsInput | number | null
    lidaPeloHospede?: BoolFieldUpdateOperationsInput | boolean
    lidaPeloLocador?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MensagemUncheckedUpdateManyWithoutRemetenteHospedeInput = {
    id?: IntFieldUpdateOperationsInput | number
    conteudo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conversaId?: IntFieldUpdateOperationsInput | number
    remetenteLocadorId?: NullableIntFieldUpdateOperationsInput | number | null
    lidaPeloHospede?: BoolFieldUpdateOperationsInput | boolean
    lidaPeloLocador?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AvaliacaoUpdateWithoutHospedeInput = {
    nota?: IntFieldUpdateOperationsInput | number
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reserva?: ReservaUpdateOneRequiredWithoutAvaliacaoNestedInput
    casa?: CasaUpdateOneRequiredWithoutAvaliacoesNestedInput
  }

  export type AvaliacaoUncheckedUpdateWithoutHospedeInput = {
    id?: IntFieldUpdateOperationsInput | number
    nota?: IntFieldUpdateOperationsInput | number
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    reservaId?: IntFieldUpdateOperationsInput | number
    casaId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AvaliacaoUncheckedUpdateManyWithoutHospedeInput = {
    id?: IntFieldUpdateOperationsInput | number
    nota?: IntFieldUpdateOperationsInput | number
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    reservaId?: IntFieldUpdateOperationsInput | number
    casaId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MensagemCreateManyConversaInput = {
    id?: number
    conteudo: string
    createdAt?: Date | string
    remetenteHospedeId?: number | null
    remetenteLocadorId?: number | null
    lidaPeloHospede?: boolean
    lidaPeloLocador?: boolean
  }

  export type MensagemUpdateWithoutConversaInput = {
    conteudo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lidaPeloHospede?: BoolFieldUpdateOperationsInput | boolean
    lidaPeloLocador?: BoolFieldUpdateOperationsInput | boolean
    remetenteHospede?: HospedeUpdateOneWithoutMensagensNestedInput
    remetenteLocador?: LocadorUpdateOneWithoutMensagensNestedInput
  }

  export type MensagemUncheckedUpdateWithoutConversaInput = {
    id?: IntFieldUpdateOperationsInput | number
    conteudo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    remetenteHospedeId?: NullableIntFieldUpdateOperationsInput | number | null
    remetenteLocadorId?: NullableIntFieldUpdateOperationsInput | number | null
    lidaPeloHospede?: BoolFieldUpdateOperationsInput | boolean
    lidaPeloLocador?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MensagemUncheckedUpdateManyWithoutConversaInput = {
    id?: IntFieldUpdateOperationsInput | number
    conteudo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    remetenteHospedeId?: NullableIntFieldUpdateOperationsInput | number | null
    remetenteLocadorId?: NullableIntFieldUpdateOperationsInput | number | null
    lidaPeloHospede?: BoolFieldUpdateOperationsInput | boolean
    lidaPeloLocador?: BoolFieldUpdateOperationsInput | boolean
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