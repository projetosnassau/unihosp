
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
    Locador: 'Locador',
    Hospede: 'Hospede',
    Reserva: 'Reserva',
    Favorito: 'Favorito'
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
      modelProps: "admin" | "casa" | "locador" | "hospede" | "reserva" | "favorito"
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
    locador?: LocadorOmit
    hospede?: HospedeOmit
    reserva?: ReservaOmit
    favorito?: FavoritoOmit
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
  }

  export type CasaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reservas?: boolean | CasaCountOutputTypeCountReservasArgs
    favoritos?: boolean | CasaCountOutputTypeCountFavoritosArgs
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
   * Count Type LocadorCountOutputType
   */

  export type LocadorCountOutputType = {
    casas: number
    reservas: number
  }

  export type LocadorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    casas?: boolean | LocadorCountOutputTypeCountCasasArgs
    reservas?: boolean | LocadorCountOutputTypeCountReservasArgs
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
   * Count Type HospedeCountOutputType
   */

  export type HospedeCountOutputType = {
    reservas: number
    favoritos: number
  }

  export type HospedeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reservas?: boolean | HospedeCountOutputTypeCountReservasArgs
    favoritos?: boolean | HospedeCountOutputTypeCountFavoritosArgs
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
    _count?: boolean | LocadorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LocadorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type LocadorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $LocadorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Locador"
    objects: {
      casas: Prisma.$CasaPayload<ExtArgs>[]
      reservas: Prisma.$ReservaPayload<ExtArgs>[]
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
    _count?: boolean | HospedeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type HospedeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type HospedeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $HospedePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Hospede"
    objects: {
      reservas: Prisma.$ReservaPayload<ExtArgs>[]
      favoritos: Prisma.$FavoritoPayload<ExtArgs>[]
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

  export type ReservaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FavoritoOrderByRelationAggregateInput = {
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

  export type CasaListRelationFilter = {
    every?: CasaWhereInput
    some?: CasaWhereInput
    none?: CasaWhereInput
  }

  export type CasaOrderByRelationAggregateInput = {
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

  export type CasaScalarRelationFilter = {
    is?: CasaWhereInput
    isNot?: CasaWhereInput
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

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
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
  }

  export type ReservaCreateOrConnectWithoutLocadorInput = {
    where: ReservaWhereUniqueInput
    create: XOR<ReservaCreateWithoutLocadorInput, ReservaUncheckedCreateWithoutLocadorInput>
  }

  export type ReservaCreateManyLocadorInputEnvelope = {
    data: ReservaCreateManyLocadorInput | ReservaCreateManyLocadorInput[]
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
  }

  export type LocadorCreateOrConnectWithoutReservasInput = {
    where: LocadorWhereUniqueInput
    create: XOR<LocadorCreateWithoutReservasInput, LocadorUncheckedCreateWithoutReservasInput>
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