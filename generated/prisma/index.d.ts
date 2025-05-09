
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
 * Model Host
 * 
 */
export type Host = $Result.DefaultSelection<Prisma.$HostPayload>
/**
 * Model Morador
 * 
 */
export type Morador = $Result.DefaultSelection<Prisma.$MoradorPayload>

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
   * `prisma.host`: Exposes CRUD operations for the **Host** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Hosts
    * const hosts = await prisma.host.findMany()
    * ```
    */
  get host(): Prisma.HostDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.morador`: Exposes CRUD operations for the **Morador** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Moradors
    * const moradors = await prisma.morador.findMany()
    * ```
    */
  get morador(): Prisma.MoradorDelegate<ExtArgs, ClientOptions>;
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
    Host: 'Host',
    Morador: 'Morador'
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
      modelProps: "admin" | "casa" | "host" | "morador"
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
      Host: {
        payload: Prisma.$HostPayload<ExtArgs>
        fields: Prisma.HostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HostFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HostFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HostPayload>
          }
          findFirst: {
            args: Prisma.HostFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HostFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HostPayload>
          }
          findMany: {
            args: Prisma.HostFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HostPayload>[]
          }
          create: {
            args: Prisma.HostCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HostPayload>
          }
          createMany: {
            args: Prisma.HostCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HostCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HostPayload>[]
          }
          delete: {
            args: Prisma.HostDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HostPayload>
          }
          update: {
            args: Prisma.HostUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HostPayload>
          }
          deleteMany: {
            args: Prisma.HostDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HostUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HostUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HostPayload>[]
          }
          upsert: {
            args: Prisma.HostUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HostPayload>
          }
          aggregate: {
            args: Prisma.HostAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHost>
          }
          groupBy: {
            args: Prisma.HostGroupByArgs<ExtArgs>
            result: $Utils.Optional<HostGroupByOutputType>[]
          }
          count: {
            args: Prisma.HostCountArgs<ExtArgs>
            result: $Utils.Optional<HostCountAggregateOutputType> | number
          }
        }
      }
      Morador: {
        payload: Prisma.$MoradorPayload<ExtArgs>
        fields: Prisma.MoradorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MoradorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoradorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MoradorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoradorPayload>
          }
          findFirst: {
            args: Prisma.MoradorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoradorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MoradorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoradorPayload>
          }
          findMany: {
            args: Prisma.MoradorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoradorPayload>[]
          }
          create: {
            args: Prisma.MoradorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoradorPayload>
          }
          createMany: {
            args: Prisma.MoradorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MoradorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoradorPayload>[]
          }
          delete: {
            args: Prisma.MoradorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoradorPayload>
          }
          update: {
            args: Prisma.MoradorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoradorPayload>
          }
          deleteMany: {
            args: Prisma.MoradorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MoradorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MoradorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoradorPayload>[]
          }
          upsert: {
            args: Prisma.MoradorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoradorPayload>
          }
          aggregate: {
            args: Prisma.MoradorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMorador>
          }
          groupBy: {
            args: Prisma.MoradorGroupByArgs<ExtArgs>
            result: $Utils.Optional<MoradorGroupByOutputType>[]
          }
          count: {
            args: Prisma.MoradorCountArgs<ExtArgs>
            result: $Utils.Optional<MoradorCountAggregateOutputType> | number
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
    host?: HostOmit
    morador?: MoradorOmit
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
    email: string | null
    senha: string | null
  }

  export type AdminMaxAggregateOutputType = {
    id: number | null
    email: string | null
    senha: string | null
  }

  export type AdminCountAggregateOutputType = {
    id: number
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
    email?: true
    senha?: true
  }

  export type AdminMaxAggregateInputType = {
    id?: true
    email?: true
    senha?: true
  }

  export type AdminCountAggregateInputType = {
    id?: true
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
    email?: boolean
    senha?: boolean
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    senha?: boolean
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    senha?: boolean
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectScalar = {
    id?: boolean
    email?: boolean
    senha?: boolean
  }

  export type AdminOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "senha", ExtArgs["result"]["admin"]>

  export type $AdminPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Admin"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
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
    qnt_tot: number | null
  }

  export type CasaSumAggregateOutputType = {
    id: number | null
    numero: number | null
    qnt_tot: number | null
  }

  export type CasaMinAggregateOutputType = {
    id: number | null
    endereco: string | null
    numero: number | null
    qnt_tot: number | null
    diretrizes: string | null
  }

  export type CasaMaxAggregateOutputType = {
    id: number | null
    endereco: string | null
    numero: number | null
    qnt_tot: number | null
    diretrizes: string | null
  }

  export type CasaCountAggregateOutputType = {
    id: number
    endereco: number
    numero: number
    qnt_tot: number
    diretrizes: number
    _all: number
  }


  export type CasaAvgAggregateInputType = {
    id?: true
    numero?: true
    qnt_tot?: true
  }

  export type CasaSumAggregateInputType = {
    id?: true
    numero?: true
    qnt_tot?: true
  }

  export type CasaMinAggregateInputType = {
    id?: true
    endereco?: true
    numero?: true
    qnt_tot?: true
    diretrizes?: true
  }

  export type CasaMaxAggregateInputType = {
    id?: true
    endereco?: true
    numero?: true
    qnt_tot?: true
    diretrizes?: true
  }

  export type CasaCountAggregateInputType = {
    id?: true
    endereco?: true
    numero?: true
    qnt_tot?: true
    diretrizes?: true
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
    qnt_tot: number
    diretrizes: string
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
    qnt_tot?: boolean
    diretrizes?: boolean
  }, ExtArgs["result"]["casa"]>

  export type CasaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    endereco?: boolean
    numero?: boolean
    qnt_tot?: boolean
    diretrizes?: boolean
  }, ExtArgs["result"]["casa"]>

  export type CasaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    endereco?: boolean
    numero?: boolean
    qnt_tot?: boolean
    diretrizes?: boolean
  }, ExtArgs["result"]["casa"]>

  export type CasaSelectScalar = {
    id?: boolean
    endereco?: boolean
    numero?: boolean
    qnt_tot?: boolean
    diretrizes?: boolean
  }

  export type CasaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "endereco" | "numero" | "qnt_tot" | "diretrizes", ExtArgs["result"]["casa"]>

  export type $CasaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Casa"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      endereco: string
      numero: number
      qnt_tot: number
      diretrizes: string
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
    readonly qnt_tot: FieldRef<"Casa", 'Int'>
    readonly diretrizes: FieldRef<"Casa", 'String'>
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
  }


  /**
   * Model Host
   */

  export type AggregateHost = {
    _count: HostCountAggregateOutputType | null
    _avg: HostAvgAggregateOutputType | null
    _sum: HostSumAggregateOutputType | null
    _min: HostMinAggregateOutputType | null
    _max: HostMaxAggregateOutputType | null
  }

  export type HostAvgAggregateOutputType = {
    id: number | null
  }

  export type HostSumAggregateOutputType = {
    id: number | null
  }

  export type HostMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    senha: string | null
    cpf: string | null
    endereco: string | null
  }

  export type HostMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    senha: string | null
    cpf: string | null
    endereco: string | null
  }

  export type HostCountAggregateOutputType = {
    id: number
    name: number
    email: number
    senha: number
    cpf: number
    endereco: number
    _all: number
  }


  export type HostAvgAggregateInputType = {
    id?: true
  }

  export type HostSumAggregateInputType = {
    id?: true
  }

  export type HostMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    senha?: true
    cpf?: true
    endereco?: true
  }

  export type HostMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    senha?: true
    cpf?: true
    endereco?: true
  }

  export type HostCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    senha?: true
    cpf?: true
    endereco?: true
    _all?: true
  }

  export type HostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Host to aggregate.
     */
    where?: HostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hosts to fetch.
     */
    orderBy?: HostOrderByWithRelationInput | HostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Hosts
    **/
    _count?: true | HostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HostAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HostSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HostMaxAggregateInputType
  }

  export type GetHostAggregateType<T extends HostAggregateArgs> = {
        [P in keyof T & keyof AggregateHost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHost[P]>
      : GetScalarType<T[P], AggregateHost[P]>
  }




  export type HostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HostWhereInput
    orderBy?: HostOrderByWithAggregationInput | HostOrderByWithAggregationInput[]
    by: HostScalarFieldEnum[] | HostScalarFieldEnum
    having?: HostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HostCountAggregateInputType | true
    _avg?: HostAvgAggregateInputType
    _sum?: HostSumAggregateInputType
    _min?: HostMinAggregateInputType
    _max?: HostMaxAggregateInputType
  }

  export type HostGroupByOutputType = {
    id: number
    name: string
    email: string
    senha: string
    cpf: string
    endereco: string
    _count: HostCountAggregateOutputType | null
    _avg: HostAvgAggregateOutputType | null
    _sum: HostSumAggregateOutputType | null
    _min: HostMinAggregateOutputType | null
    _max: HostMaxAggregateOutputType | null
  }

  type GetHostGroupByPayload<T extends HostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HostGroupByOutputType[P]>
            : GetScalarType<T[P], HostGroupByOutputType[P]>
        }
      >
    >


  export type HostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    senha?: boolean
    cpf?: boolean
    endereco?: boolean
  }, ExtArgs["result"]["host"]>

  export type HostSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    senha?: boolean
    cpf?: boolean
    endereco?: boolean
  }, ExtArgs["result"]["host"]>

  export type HostSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    senha?: boolean
    cpf?: boolean
    endereco?: boolean
  }, ExtArgs["result"]["host"]>

  export type HostSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    senha?: boolean
    cpf?: boolean
    endereco?: boolean
  }

  export type HostOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "senha" | "cpf" | "endereco", ExtArgs["result"]["host"]>

  export type $HostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Host"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      senha: string
      cpf: string
      endereco: string
    }, ExtArgs["result"]["host"]>
    composites: {}
  }

  type HostGetPayload<S extends boolean | null | undefined | HostDefaultArgs> = $Result.GetResult<Prisma.$HostPayload, S>

  type HostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HostFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HostCountAggregateInputType | true
    }

  export interface HostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Host'], meta: { name: 'Host' } }
    /**
     * Find zero or one Host that matches the filter.
     * @param {HostFindUniqueArgs} args - Arguments to find a Host
     * @example
     * // Get one Host
     * const host = await prisma.host.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HostFindUniqueArgs>(args: SelectSubset<T, HostFindUniqueArgs<ExtArgs>>): Prisma__HostClient<$Result.GetResult<Prisma.$HostPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Host that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HostFindUniqueOrThrowArgs} args - Arguments to find a Host
     * @example
     * // Get one Host
     * const host = await prisma.host.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HostFindUniqueOrThrowArgs>(args: SelectSubset<T, HostFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HostClient<$Result.GetResult<Prisma.$HostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Host that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HostFindFirstArgs} args - Arguments to find a Host
     * @example
     * // Get one Host
     * const host = await prisma.host.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HostFindFirstArgs>(args?: SelectSubset<T, HostFindFirstArgs<ExtArgs>>): Prisma__HostClient<$Result.GetResult<Prisma.$HostPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Host that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HostFindFirstOrThrowArgs} args - Arguments to find a Host
     * @example
     * // Get one Host
     * const host = await prisma.host.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HostFindFirstOrThrowArgs>(args?: SelectSubset<T, HostFindFirstOrThrowArgs<ExtArgs>>): Prisma__HostClient<$Result.GetResult<Prisma.$HostPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Hosts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Hosts
     * const hosts = await prisma.host.findMany()
     * 
     * // Get first 10 Hosts
     * const hosts = await prisma.host.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const hostWithIdOnly = await prisma.host.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HostFindManyArgs>(args?: SelectSubset<T, HostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Host.
     * @param {HostCreateArgs} args - Arguments to create a Host.
     * @example
     * // Create one Host
     * const Host = await prisma.host.create({
     *   data: {
     *     // ... data to create a Host
     *   }
     * })
     * 
     */
    create<T extends HostCreateArgs>(args: SelectSubset<T, HostCreateArgs<ExtArgs>>): Prisma__HostClient<$Result.GetResult<Prisma.$HostPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Hosts.
     * @param {HostCreateManyArgs} args - Arguments to create many Hosts.
     * @example
     * // Create many Hosts
     * const host = await prisma.host.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HostCreateManyArgs>(args?: SelectSubset<T, HostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Hosts and returns the data saved in the database.
     * @param {HostCreateManyAndReturnArgs} args - Arguments to create many Hosts.
     * @example
     * // Create many Hosts
     * const host = await prisma.host.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Hosts and only return the `id`
     * const hostWithIdOnly = await prisma.host.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HostCreateManyAndReturnArgs>(args?: SelectSubset<T, HostCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HostPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Host.
     * @param {HostDeleteArgs} args - Arguments to delete one Host.
     * @example
     * // Delete one Host
     * const Host = await prisma.host.delete({
     *   where: {
     *     // ... filter to delete one Host
     *   }
     * })
     * 
     */
    delete<T extends HostDeleteArgs>(args: SelectSubset<T, HostDeleteArgs<ExtArgs>>): Prisma__HostClient<$Result.GetResult<Prisma.$HostPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Host.
     * @param {HostUpdateArgs} args - Arguments to update one Host.
     * @example
     * // Update one Host
     * const host = await prisma.host.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HostUpdateArgs>(args: SelectSubset<T, HostUpdateArgs<ExtArgs>>): Prisma__HostClient<$Result.GetResult<Prisma.$HostPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Hosts.
     * @param {HostDeleteManyArgs} args - Arguments to filter Hosts to delete.
     * @example
     * // Delete a few Hosts
     * const { count } = await prisma.host.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HostDeleteManyArgs>(args?: SelectSubset<T, HostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Hosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Hosts
     * const host = await prisma.host.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HostUpdateManyArgs>(args: SelectSubset<T, HostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Hosts and returns the data updated in the database.
     * @param {HostUpdateManyAndReturnArgs} args - Arguments to update many Hosts.
     * @example
     * // Update many Hosts
     * const host = await prisma.host.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Hosts and only return the `id`
     * const hostWithIdOnly = await prisma.host.updateManyAndReturn({
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
    updateManyAndReturn<T extends HostUpdateManyAndReturnArgs>(args: SelectSubset<T, HostUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HostPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Host.
     * @param {HostUpsertArgs} args - Arguments to update or create a Host.
     * @example
     * // Update or create a Host
     * const host = await prisma.host.upsert({
     *   create: {
     *     // ... data to create a Host
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Host we want to update
     *   }
     * })
     */
    upsert<T extends HostUpsertArgs>(args: SelectSubset<T, HostUpsertArgs<ExtArgs>>): Prisma__HostClient<$Result.GetResult<Prisma.$HostPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Hosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HostCountArgs} args - Arguments to filter Hosts to count.
     * @example
     * // Count the number of Hosts
     * const count = await prisma.host.count({
     *   where: {
     *     // ... the filter for the Hosts we want to count
     *   }
     * })
    **/
    count<T extends HostCountArgs>(
      args?: Subset<T, HostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Host.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HostAggregateArgs>(args: Subset<T, HostAggregateArgs>): Prisma.PrismaPromise<GetHostAggregateType<T>>

    /**
     * Group by Host.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HostGroupByArgs} args - Group by arguments.
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
      T extends HostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HostGroupByArgs['orderBy'] }
        : { orderBy?: HostGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, HostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Host model
   */
  readonly fields: HostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Host.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Host model
   */
  interface HostFieldRefs {
    readonly id: FieldRef<"Host", 'Int'>
    readonly name: FieldRef<"Host", 'String'>
    readonly email: FieldRef<"Host", 'String'>
    readonly senha: FieldRef<"Host", 'String'>
    readonly cpf: FieldRef<"Host", 'String'>
    readonly endereco: FieldRef<"Host", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Host findUnique
   */
  export type HostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Host
     */
    select?: HostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Host
     */
    omit?: HostOmit<ExtArgs> | null
    /**
     * Filter, which Host to fetch.
     */
    where: HostWhereUniqueInput
  }

  /**
   * Host findUniqueOrThrow
   */
  export type HostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Host
     */
    select?: HostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Host
     */
    omit?: HostOmit<ExtArgs> | null
    /**
     * Filter, which Host to fetch.
     */
    where: HostWhereUniqueInput
  }

  /**
   * Host findFirst
   */
  export type HostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Host
     */
    select?: HostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Host
     */
    omit?: HostOmit<ExtArgs> | null
    /**
     * Filter, which Host to fetch.
     */
    where?: HostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hosts to fetch.
     */
    orderBy?: HostOrderByWithRelationInput | HostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Hosts.
     */
    cursor?: HostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Hosts.
     */
    distinct?: HostScalarFieldEnum | HostScalarFieldEnum[]
  }

  /**
   * Host findFirstOrThrow
   */
  export type HostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Host
     */
    select?: HostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Host
     */
    omit?: HostOmit<ExtArgs> | null
    /**
     * Filter, which Host to fetch.
     */
    where?: HostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hosts to fetch.
     */
    orderBy?: HostOrderByWithRelationInput | HostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Hosts.
     */
    cursor?: HostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Hosts.
     */
    distinct?: HostScalarFieldEnum | HostScalarFieldEnum[]
  }

  /**
   * Host findMany
   */
  export type HostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Host
     */
    select?: HostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Host
     */
    omit?: HostOmit<ExtArgs> | null
    /**
     * Filter, which Hosts to fetch.
     */
    where?: HostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hosts to fetch.
     */
    orderBy?: HostOrderByWithRelationInput | HostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Hosts.
     */
    cursor?: HostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hosts.
     */
    skip?: number
    distinct?: HostScalarFieldEnum | HostScalarFieldEnum[]
  }

  /**
   * Host create
   */
  export type HostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Host
     */
    select?: HostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Host
     */
    omit?: HostOmit<ExtArgs> | null
    /**
     * The data needed to create a Host.
     */
    data: XOR<HostCreateInput, HostUncheckedCreateInput>
  }

  /**
   * Host createMany
   */
  export type HostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Hosts.
     */
    data: HostCreateManyInput | HostCreateManyInput[]
  }

  /**
   * Host createManyAndReturn
   */
  export type HostCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Host
     */
    select?: HostSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Host
     */
    omit?: HostOmit<ExtArgs> | null
    /**
     * The data used to create many Hosts.
     */
    data: HostCreateManyInput | HostCreateManyInput[]
  }

  /**
   * Host update
   */
  export type HostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Host
     */
    select?: HostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Host
     */
    omit?: HostOmit<ExtArgs> | null
    /**
     * The data needed to update a Host.
     */
    data: XOR<HostUpdateInput, HostUncheckedUpdateInput>
    /**
     * Choose, which Host to update.
     */
    where: HostWhereUniqueInput
  }

  /**
   * Host updateMany
   */
  export type HostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Hosts.
     */
    data: XOR<HostUpdateManyMutationInput, HostUncheckedUpdateManyInput>
    /**
     * Filter which Hosts to update
     */
    where?: HostWhereInput
    /**
     * Limit how many Hosts to update.
     */
    limit?: number
  }

  /**
   * Host updateManyAndReturn
   */
  export type HostUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Host
     */
    select?: HostSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Host
     */
    omit?: HostOmit<ExtArgs> | null
    /**
     * The data used to update Hosts.
     */
    data: XOR<HostUpdateManyMutationInput, HostUncheckedUpdateManyInput>
    /**
     * Filter which Hosts to update
     */
    where?: HostWhereInput
    /**
     * Limit how many Hosts to update.
     */
    limit?: number
  }

  /**
   * Host upsert
   */
  export type HostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Host
     */
    select?: HostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Host
     */
    omit?: HostOmit<ExtArgs> | null
    /**
     * The filter to search for the Host to update in case it exists.
     */
    where: HostWhereUniqueInput
    /**
     * In case the Host found by the `where` argument doesn't exist, create a new Host with this data.
     */
    create: XOR<HostCreateInput, HostUncheckedCreateInput>
    /**
     * In case the Host was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HostUpdateInput, HostUncheckedUpdateInput>
  }

  /**
   * Host delete
   */
  export type HostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Host
     */
    select?: HostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Host
     */
    omit?: HostOmit<ExtArgs> | null
    /**
     * Filter which Host to delete.
     */
    where: HostWhereUniqueInput
  }

  /**
   * Host deleteMany
   */
  export type HostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Hosts to delete
     */
    where?: HostWhereInput
    /**
     * Limit how many Hosts to delete.
     */
    limit?: number
  }

  /**
   * Host without action
   */
  export type HostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Host
     */
    select?: HostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Host
     */
    omit?: HostOmit<ExtArgs> | null
  }


  /**
   * Model Morador
   */

  export type AggregateMorador = {
    _count: MoradorCountAggregateOutputType | null
    _avg: MoradorAvgAggregateOutputType | null
    _sum: MoradorSumAggregateOutputType | null
    _min: MoradorMinAggregateOutputType | null
    _max: MoradorMaxAggregateOutputType | null
  }

  export type MoradorAvgAggregateOutputType = {
    id: number | null
  }

  export type MoradorSumAggregateOutputType = {
    id: number | null
  }

  export type MoradorMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    senha: string | null
    cpf: string | null
    endereco: string | null
    matricula: string | null
  }

  export type MoradorMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    senha: string | null
    cpf: string | null
    endereco: string | null
    matricula: string | null
  }

  export type MoradorCountAggregateOutputType = {
    id: number
    name: number
    email: number
    senha: number
    cpf: number
    endereco: number
    matricula: number
    _all: number
  }


  export type MoradorAvgAggregateInputType = {
    id?: true
  }

  export type MoradorSumAggregateInputType = {
    id?: true
  }

  export type MoradorMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    senha?: true
    cpf?: true
    endereco?: true
    matricula?: true
  }

  export type MoradorMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    senha?: true
    cpf?: true
    endereco?: true
    matricula?: true
  }

  export type MoradorCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    senha?: true
    cpf?: true
    endereco?: true
    matricula?: true
    _all?: true
  }

  export type MoradorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Morador to aggregate.
     */
    where?: MoradorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Moradors to fetch.
     */
    orderBy?: MoradorOrderByWithRelationInput | MoradorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MoradorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Moradors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Moradors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Moradors
    **/
    _count?: true | MoradorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MoradorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MoradorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MoradorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MoradorMaxAggregateInputType
  }

  export type GetMoradorAggregateType<T extends MoradorAggregateArgs> = {
        [P in keyof T & keyof AggregateMorador]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMorador[P]>
      : GetScalarType<T[P], AggregateMorador[P]>
  }




  export type MoradorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MoradorWhereInput
    orderBy?: MoradorOrderByWithAggregationInput | MoradorOrderByWithAggregationInput[]
    by: MoradorScalarFieldEnum[] | MoradorScalarFieldEnum
    having?: MoradorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MoradorCountAggregateInputType | true
    _avg?: MoradorAvgAggregateInputType
    _sum?: MoradorSumAggregateInputType
    _min?: MoradorMinAggregateInputType
    _max?: MoradorMaxAggregateInputType
  }

  export type MoradorGroupByOutputType = {
    id: number
    name: string
    email: string
    senha: string
    cpf: string
    endereco: string
    matricula: string
    _count: MoradorCountAggregateOutputType | null
    _avg: MoradorAvgAggregateOutputType | null
    _sum: MoradorSumAggregateOutputType | null
    _min: MoradorMinAggregateOutputType | null
    _max: MoradorMaxAggregateOutputType | null
  }

  type GetMoradorGroupByPayload<T extends MoradorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MoradorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MoradorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MoradorGroupByOutputType[P]>
            : GetScalarType<T[P], MoradorGroupByOutputType[P]>
        }
      >
    >


  export type MoradorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    senha?: boolean
    cpf?: boolean
    endereco?: boolean
    matricula?: boolean
  }, ExtArgs["result"]["morador"]>

  export type MoradorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    senha?: boolean
    cpf?: boolean
    endereco?: boolean
    matricula?: boolean
  }, ExtArgs["result"]["morador"]>

  export type MoradorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    senha?: boolean
    cpf?: boolean
    endereco?: boolean
    matricula?: boolean
  }, ExtArgs["result"]["morador"]>

  export type MoradorSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    senha?: boolean
    cpf?: boolean
    endereco?: boolean
    matricula?: boolean
  }

  export type MoradorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "senha" | "cpf" | "endereco" | "matricula", ExtArgs["result"]["morador"]>

  export type $MoradorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Morador"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      senha: string
      cpf: string
      endereco: string
      matricula: string
    }, ExtArgs["result"]["morador"]>
    composites: {}
  }

  type MoradorGetPayload<S extends boolean | null | undefined | MoradorDefaultArgs> = $Result.GetResult<Prisma.$MoradorPayload, S>

  type MoradorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MoradorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MoradorCountAggregateInputType | true
    }

  export interface MoradorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Morador'], meta: { name: 'Morador' } }
    /**
     * Find zero or one Morador that matches the filter.
     * @param {MoradorFindUniqueArgs} args - Arguments to find a Morador
     * @example
     * // Get one Morador
     * const morador = await prisma.morador.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MoradorFindUniqueArgs>(args: SelectSubset<T, MoradorFindUniqueArgs<ExtArgs>>): Prisma__MoradorClient<$Result.GetResult<Prisma.$MoradorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Morador that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MoradorFindUniqueOrThrowArgs} args - Arguments to find a Morador
     * @example
     * // Get one Morador
     * const morador = await prisma.morador.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MoradorFindUniqueOrThrowArgs>(args: SelectSubset<T, MoradorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MoradorClient<$Result.GetResult<Prisma.$MoradorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Morador that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoradorFindFirstArgs} args - Arguments to find a Morador
     * @example
     * // Get one Morador
     * const morador = await prisma.morador.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MoradorFindFirstArgs>(args?: SelectSubset<T, MoradorFindFirstArgs<ExtArgs>>): Prisma__MoradorClient<$Result.GetResult<Prisma.$MoradorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Morador that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoradorFindFirstOrThrowArgs} args - Arguments to find a Morador
     * @example
     * // Get one Morador
     * const morador = await prisma.morador.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MoradorFindFirstOrThrowArgs>(args?: SelectSubset<T, MoradorFindFirstOrThrowArgs<ExtArgs>>): Prisma__MoradorClient<$Result.GetResult<Prisma.$MoradorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Moradors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoradorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Moradors
     * const moradors = await prisma.morador.findMany()
     * 
     * // Get first 10 Moradors
     * const moradors = await prisma.morador.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const moradorWithIdOnly = await prisma.morador.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MoradorFindManyArgs>(args?: SelectSubset<T, MoradorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MoradorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Morador.
     * @param {MoradorCreateArgs} args - Arguments to create a Morador.
     * @example
     * // Create one Morador
     * const Morador = await prisma.morador.create({
     *   data: {
     *     // ... data to create a Morador
     *   }
     * })
     * 
     */
    create<T extends MoradorCreateArgs>(args: SelectSubset<T, MoradorCreateArgs<ExtArgs>>): Prisma__MoradorClient<$Result.GetResult<Prisma.$MoradorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Moradors.
     * @param {MoradorCreateManyArgs} args - Arguments to create many Moradors.
     * @example
     * // Create many Moradors
     * const morador = await prisma.morador.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MoradorCreateManyArgs>(args?: SelectSubset<T, MoradorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Moradors and returns the data saved in the database.
     * @param {MoradorCreateManyAndReturnArgs} args - Arguments to create many Moradors.
     * @example
     * // Create many Moradors
     * const morador = await prisma.morador.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Moradors and only return the `id`
     * const moradorWithIdOnly = await prisma.morador.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MoradorCreateManyAndReturnArgs>(args?: SelectSubset<T, MoradorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MoradorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Morador.
     * @param {MoradorDeleteArgs} args - Arguments to delete one Morador.
     * @example
     * // Delete one Morador
     * const Morador = await prisma.morador.delete({
     *   where: {
     *     // ... filter to delete one Morador
     *   }
     * })
     * 
     */
    delete<T extends MoradorDeleteArgs>(args: SelectSubset<T, MoradorDeleteArgs<ExtArgs>>): Prisma__MoradorClient<$Result.GetResult<Prisma.$MoradorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Morador.
     * @param {MoradorUpdateArgs} args - Arguments to update one Morador.
     * @example
     * // Update one Morador
     * const morador = await prisma.morador.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MoradorUpdateArgs>(args: SelectSubset<T, MoradorUpdateArgs<ExtArgs>>): Prisma__MoradorClient<$Result.GetResult<Prisma.$MoradorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Moradors.
     * @param {MoradorDeleteManyArgs} args - Arguments to filter Moradors to delete.
     * @example
     * // Delete a few Moradors
     * const { count } = await prisma.morador.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MoradorDeleteManyArgs>(args?: SelectSubset<T, MoradorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Moradors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoradorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Moradors
     * const morador = await prisma.morador.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MoradorUpdateManyArgs>(args: SelectSubset<T, MoradorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Moradors and returns the data updated in the database.
     * @param {MoradorUpdateManyAndReturnArgs} args - Arguments to update many Moradors.
     * @example
     * // Update many Moradors
     * const morador = await prisma.morador.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Moradors and only return the `id`
     * const moradorWithIdOnly = await prisma.morador.updateManyAndReturn({
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
    updateManyAndReturn<T extends MoradorUpdateManyAndReturnArgs>(args: SelectSubset<T, MoradorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MoradorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Morador.
     * @param {MoradorUpsertArgs} args - Arguments to update or create a Morador.
     * @example
     * // Update or create a Morador
     * const morador = await prisma.morador.upsert({
     *   create: {
     *     // ... data to create a Morador
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Morador we want to update
     *   }
     * })
     */
    upsert<T extends MoradorUpsertArgs>(args: SelectSubset<T, MoradorUpsertArgs<ExtArgs>>): Prisma__MoradorClient<$Result.GetResult<Prisma.$MoradorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Moradors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoradorCountArgs} args - Arguments to filter Moradors to count.
     * @example
     * // Count the number of Moradors
     * const count = await prisma.morador.count({
     *   where: {
     *     // ... the filter for the Moradors we want to count
     *   }
     * })
    **/
    count<T extends MoradorCountArgs>(
      args?: Subset<T, MoradorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MoradorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Morador.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoradorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MoradorAggregateArgs>(args: Subset<T, MoradorAggregateArgs>): Prisma.PrismaPromise<GetMoradorAggregateType<T>>

    /**
     * Group by Morador.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoradorGroupByArgs} args - Group by arguments.
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
      T extends MoradorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MoradorGroupByArgs['orderBy'] }
        : { orderBy?: MoradorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MoradorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMoradorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Morador model
   */
  readonly fields: MoradorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Morador.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MoradorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Morador model
   */
  interface MoradorFieldRefs {
    readonly id: FieldRef<"Morador", 'Int'>
    readonly name: FieldRef<"Morador", 'String'>
    readonly email: FieldRef<"Morador", 'String'>
    readonly senha: FieldRef<"Morador", 'String'>
    readonly cpf: FieldRef<"Morador", 'String'>
    readonly endereco: FieldRef<"Morador", 'String'>
    readonly matricula: FieldRef<"Morador", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Morador findUnique
   */
  export type MoradorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Morador
     */
    select?: MoradorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Morador
     */
    omit?: MoradorOmit<ExtArgs> | null
    /**
     * Filter, which Morador to fetch.
     */
    where: MoradorWhereUniqueInput
  }

  /**
   * Morador findUniqueOrThrow
   */
  export type MoradorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Morador
     */
    select?: MoradorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Morador
     */
    omit?: MoradorOmit<ExtArgs> | null
    /**
     * Filter, which Morador to fetch.
     */
    where: MoradorWhereUniqueInput
  }

  /**
   * Morador findFirst
   */
  export type MoradorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Morador
     */
    select?: MoradorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Morador
     */
    omit?: MoradorOmit<ExtArgs> | null
    /**
     * Filter, which Morador to fetch.
     */
    where?: MoradorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Moradors to fetch.
     */
    orderBy?: MoradorOrderByWithRelationInput | MoradorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Moradors.
     */
    cursor?: MoradorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Moradors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Moradors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Moradors.
     */
    distinct?: MoradorScalarFieldEnum | MoradorScalarFieldEnum[]
  }

  /**
   * Morador findFirstOrThrow
   */
  export type MoradorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Morador
     */
    select?: MoradorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Morador
     */
    omit?: MoradorOmit<ExtArgs> | null
    /**
     * Filter, which Morador to fetch.
     */
    where?: MoradorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Moradors to fetch.
     */
    orderBy?: MoradorOrderByWithRelationInput | MoradorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Moradors.
     */
    cursor?: MoradorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Moradors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Moradors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Moradors.
     */
    distinct?: MoradorScalarFieldEnum | MoradorScalarFieldEnum[]
  }

  /**
   * Morador findMany
   */
  export type MoradorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Morador
     */
    select?: MoradorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Morador
     */
    omit?: MoradorOmit<ExtArgs> | null
    /**
     * Filter, which Moradors to fetch.
     */
    where?: MoradorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Moradors to fetch.
     */
    orderBy?: MoradorOrderByWithRelationInput | MoradorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Moradors.
     */
    cursor?: MoradorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Moradors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Moradors.
     */
    skip?: number
    distinct?: MoradorScalarFieldEnum | MoradorScalarFieldEnum[]
  }

  /**
   * Morador create
   */
  export type MoradorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Morador
     */
    select?: MoradorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Morador
     */
    omit?: MoradorOmit<ExtArgs> | null
    /**
     * The data needed to create a Morador.
     */
    data: XOR<MoradorCreateInput, MoradorUncheckedCreateInput>
  }

  /**
   * Morador createMany
   */
  export type MoradorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Moradors.
     */
    data: MoradorCreateManyInput | MoradorCreateManyInput[]
  }

  /**
   * Morador createManyAndReturn
   */
  export type MoradorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Morador
     */
    select?: MoradorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Morador
     */
    omit?: MoradorOmit<ExtArgs> | null
    /**
     * The data used to create many Moradors.
     */
    data: MoradorCreateManyInput | MoradorCreateManyInput[]
  }

  /**
   * Morador update
   */
  export type MoradorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Morador
     */
    select?: MoradorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Morador
     */
    omit?: MoradorOmit<ExtArgs> | null
    /**
     * The data needed to update a Morador.
     */
    data: XOR<MoradorUpdateInput, MoradorUncheckedUpdateInput>
    /**
     * Choose, which Morador to update.
     */
    where: MoradorWhereUniqueInput
  }

  /**
   * Morador updateMany
   */
  export type MoradorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Moradors.
     */
    data: XOR<MoradorUpdateManyMutationInput, MoradorUncheckedUpdateManyInput>
    /**
     * Filter which Moradors to update
     */
    where?: MoradorWhereInput
    /**
     * Limit how many Moradors to update.
     */
    limit?: number
  }

  /**
   * Morador updateManyAndReturn
   */
  export type MoradorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Morador
     */
    select?: MoradorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Morador
     */
    omit?: MoradorOmit<ExtArgs> | null
    /**
     * The data used to update Moradors.
     */
    data: XOR<MoradorUpdateManyMutationInput, MoradorUncheckedUpdateManyInput>
    /**
     * Filter which Moradors to update
     */
    where?: MoradorWhereInput
    /**
     * Limit how many Moradors to update.
     */
    limit?: number
  }

  /**
   * Morador upsert
   */
  export type MoradorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Morador
     */
    select?: MoradorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Morador
     */
    omit?: MoradorOmit<ExtArgs> | null
    /**
     * The filter to search for the Morador to update in case it exists.
     */
    where: MoradorWhereUniqueInput
    /**
     * In case the Morador found by the `where` argument doesn't exist, create a new Morador with this data.
     */
    create: XOR<MoradorCreateInput, MoradorUncheckedCreateInput>
    /**
     * In case the Morador was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MoradorUpdateInput, MoradorUncheckedUpdateInput>
  }

  /**
   * Morador delete
   */
  export type MoradorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Morador
     */
    select?: MoradorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Morador
     */
    omit?: MoradorOmit<ExtArgs> | null
    /**
     * Filter which Morador to delete.
     */
    where: MoradorWhereUniqueInput
  }

  /**
   * Morador deleteMany
   */
  export type MoradorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Moradors to delete
     */
    where?: MoradorWhereInput
    /**
     * Limit how many Moradors to delete.
     */
    limit?: number
  }

  /**
   * Morador without action
   */
  export type MoradorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Morador
     */
    select?: MoradorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Morador
     */
    omit?: MoradorOmit<ExtArgs> | null
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
    email: 'email',
    senha: 'senha'
  };

  export type AdminScalarFieldEnum = (typeof AdminScalarFieldEnum)[keyof typeof AdminScalarFieldEnum]


  export const CasaScalarFieldEnum: {
    id: 'id',
    endereco: 'endereco',
    numero: 'numero',
    qnt_tot: 'qnt_tot',
    diretrizes: 'diretrizes'
  };

  export type CasaScalarFieldEnum = (typeof CasaScalarFieldEnum)[keyof typeof CasaScalarFieldEnum]


  export const HostScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    senha: 'senha',
    cpf: 'cpf',
    endereco: 'endereco'
  };

  export type HostScalarFieldEnum = (typeof HostScalarFieldEnum)[keyof typeof HostScalarFieldEnum]


  export const MoradorScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    senha: 'senha',
    cpf: 'cpf',
    endereco: 'endereco',
    matricula: 'matricula'
  };

  export type MoradorScalarFieldEnum = (typeof MoradorScalarFieldEnum)[keyof typeof MoradorScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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
   * Deep Input Types
   */


  export type AdminWhereInput = {
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    id?: IntFilter<"Admin"> | number
    email?: StringFilter<"Admin"> | string
    senha?: StringFilter<"Admin"> | string
  }

  export type AdminOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    senha?: SortOrder
  }

  export type AdminWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    senha?: StringFilter<"Admin"> | string
  }, "id" | "email">

  export type AdminOrderByWithAggregationInput = {
    id?: SortOrder
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
    qnt_tot?: IntFilter<"Casa"> | number
    diretrizes?: StringFilter<"Casa"> | string
  }

  export type CasaOrderByWithRelationInput = {
    id?: SortOrder
    endereco?: SortOrder
    numero?: SortOrder
    qnt_tot?: SortOrder
    diretrizes?: SortOrder
  }

  export type CasaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CasaWhereInput | CasaWhereInput[]
    OR?: CasaWhereInput[]
    NOT?: CasaWhereInput | CasaWhereInput[]
    endereco?: StringFilter<"Casa"> | string
    numero?: IntFilter<"Casa"> | number
    qnt_tot?: IntFilter<"Casa"> | number
    diretrizes?: StringFilter<"Casa"> | string
  }, "id">

  export type CasaOrderByWithAggregationInput = {
    id?: SortOrder
    endereco?: SortOrder
    numero?: SortOrder
    qnt_tot?: SortOrder
    diretrizes?: SortOrder
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
    qnt_tot?: IntWithAggregatesFilter<"Casa"> | number
    diretrizes?: StringWithAggregatesFilter<"Casa"> | string
  }

  export type HostWhereInput = {
    AND?: HostWhereInput | HostWhereInput[]
    OR?: HostWhereInput[]
    NOT?: HostWhereInput | HostWhereInput[]
    id?: IntFilter<"Host"> | number
    name?: StringFilter<"Host"> | string
    email?: StringFilter<"Host"> | string
    senha?: StringFilter<"Host"> | string
    cpf?: StringFilter<"Host"> | string
    endereco?: StringFilter<"Host"> | string
  }

  export type HostOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    cpf?: SortOrder
    endereco?: SortOrder
  }

  export type HostWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    cpf?: string
    AND?: HostWhereInput | HostWhereInput[]
    OR?: HostWhereInput[]
    NOT?: HostWhereInput | HostWhereInput[]
    name?: StringFilter<"Host"> | string
    senha?: StringFilter<"Host"> | string
    endereco?: StringFilter<"Host"> | string
  }, "id" | "email" | "cpf">

  export type HostOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    cpf?: SortOrder
    endereco?: SortOrder
    _count?: HostCountOrderByAggregateInput
    _avg?: HostAvgOrderByAggregateInput
    _max?: HostMaxOrderByAggregateInput
    _min?: HostMinOrderByAggregateInput
    _sum?: HostSumOrderByAggregateInput
  }

  export type HostScalarWhereWithAggregatesInput = {
    AND?: HostScalarWhereWithAggregatesInput | HostScalarWhereWithAggregatesInput[]
    OR?: HostScalarWhereWithAggregatesInput[]
    NOT?: HostScalarWhereWithAggregatesInput | HostScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Host"> | number
    name?: StringWithAggregatesFilter<"Host"> | string
    email?: StringWithAggregatesFilter<"Host"> | string
    senha?: StringWithAggregatesFilter<"Host"> | string
    cpf?: StringWithAggregatesFilter<"Host"> | string
    endereco?: StringWithAggregatesFilter<"Host"> | string
  }

  export type MoradorWhereInput = {
    AND?: MoradorWhereInput | MoradorWhereInput[]
    OR?: MoradorWhereInput[]
    NOT?: MoradorWhereInput | MoradorWhereInput[]
    id?: IntFilter<"Morador"> | number
    name?: StringFilter<"Morador"> | string
    email?: StringFilter<"Morador"> | string
    senha?: StringFilter<"Morador"> | string
    cpf?: StringFilter<"Morador"> | string
    endereco?: StringFilter<"Morador"> | string
    matricula?: StringFilter<"Morador"> | string
  }

  export type MoradorOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    cpf?: SortOrder
    endereco?: SortOrder
    matricula?: SortOrder
  }

  export type MoradorWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    cpf?: string
    matricula?: string
    AND?: MoradorWhereInput | MoradorWhereInput[]
    OR?: MoradorWhereInput[]
    NOT?: MoradorWhereInput | MoradorWhereInput[]
    name?: StringFilter<"Morador"> | string
    senha?: StringFilter<"Morador"> | string
    endereco?: StringFilter<"Morador"> | string
  }, "id" | "email" | "cpf" | "matricula">

  export type MoradorOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    cpf?: SortOrder
    endereco?: SortOrder
    matricula?: SortOrder
    _count?: MoradorCountOrderByAggregateInput
    _avg?: MoradorAvgOrderByAggregateInput
    _max?: MoradorMaxOrderByAggregateInput
    _min?: MoradorMinOrderByAggregateInput
    _sum?: MoradorSumOrderByAggregateInput
  }

  export type MoradorScalarWhereWithAggregatesInput = {
    AND?: MoradorScalarWhereWithAggregatesInput | MoradorScalarWhereWithAggregatesInput[]
    OR?: MoradorScalarWhereWithAggregatesInput[]
    NOT?: MoradorScalarWhereWithAggregatesInput | MoradorScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Morador"> | number
    name?: StringWithAggregatesFilter<"Morador"> | string
    email?: StringWithAggregatesFilter<"Morador"> | string
    senha?: StringWithAggregatesFilter<"Morador"> | string
    cpf?: StringWithAggregatesFilter<"Morador"> | string
    endereco?: StringWithAggregatesFilter<"Morador"> | string
    matricula?: StringWithAggregatesFilter<"Morador"> | string
  }

  export type AdminCreateInput = {
    email: string
    senha: string
  }

  export type AdminUncheckedCreateInput = {
    id?: number
    email: string
    senha: string
  }

  export type AdminUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
  }

  export type AdminUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
  }

  export type AdminCreateManyInput = {
    id?: number
    email: string
    senha: string
  }

  export type AdminUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
  }

  export type AdminUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
  }

  export type CasaCreateInput = {
    endereco: string
    numero: number
    qnt_tot: number
    diretrizes: string
  }

  export type CasaUncheckedCreateInput = {
    id?: number
    endereco: string
    numero: number
    qnt_tot: number
    diretrizes: string
  }

  export type CasaUpdateInput = {
    endereco?: StringFieldUpdateOperationsInput | string
    numero?: IntFieldUpdateOperationsInput | number
    qnt_tot?: IntFieldUpdateOperationsInput | number
    diretrizes?: StringFieldUpdateOperationsInput | string
  }

  export type CasaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    endereco?: StringFieldUpdateOperationsInput | string
    numero?: IntFieldUpdateOperationsInput | number
    qnt_tot?: IntFieldUpdateOperationsInput | number
    diretrizes?: StringFieldUpdateOperationsInput | string
  }

  export type CasaCreateManyInput = {
    id?: number
    endereco: string
    numero: number
    qnt_tot: number
    diretrizes: string
  }

  export type CasaUpdateManyMutationInput = {
    endereco?: StringFieldUpdateOperationsInput | string
    numero?: IntFieldUpdateOperationsInput | number
    qnt_tot?: IntFieldUpdateOperationsInput | number
    diretrizes?: StringFieldUpdateOperationsInput | string
  }

  export type CasaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    endereco?: StringFieldUpdateOperationsInput | string
    numero?: IntFieldUpdateOperationsInput | number
    qnt_tot?: IntFieldUpdateOperationsInput | number
    diretrizes?: StringFieldUpdateOperationsInput | string
  }

  export type HostCreateInput = {
    name: string
    email: string
    senha: string
    cpf: string
    endereco: string
  }

  export type HostUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    senha: string
    cpf: string
    endereco: string
  }

  export type HostUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
  }

  export type HostUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
  }

  export type HostCreateManyInput = {
    id?: number
    name: string
    email: string
    senha: string
    cpf: string
    endereco: string
  }

  export type HostUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
  }

  export type HostUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
  }

  export type MoradorCreateInput = {
    name: string
    email: string
    senha: string
    cpf: string
    endereco: string
    matricula: string
  }

  export type MoradorUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    senha: string
    cpf: string
    endereco: string
    matricula: string
  }

  export type MoradorUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    matricula?: StringFieldUpdateOperationsInput | string
  }

  export type MoradorUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    matricula?: StringFieldUpdateOperationsInput | string
  }

  export type MoradorCreateManyInput = {
    id?: number
    name: string
    email: string
    senha: string
    cpf: string
    endereco: string
    matricula: string
  }

  export type MoradorUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    matricula?: StringFieldUpdateOperationsInput | string
  }

  export type MoradorUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    matricula?: StringFieldUpdateOperationsInput | string
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

  export type AdminCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    senha?: SortOrder
  }

  export type AdminAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AdminMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    senha?: SortOrder
  }

  export type AdminMinOrderByAggregateInput = {
    id?: SortOrder
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

  export type CasaCountOrderByAggregateInput = {
    id?: SortOrder
    endereco?: SortOrder
    numero?: SortOrder
    qnt_tot?: SortOrder
    diretrizes?: SortOrder
  }

  export type CasaAvgOrderByAggregateInput = {
    id?: SortOrder
    numero?: SortOrder
    qnt_tot?: SortOrder
  }

  export type CasaMaxOrderByAggregateInput = {
    id?: SortOrder
    endereco?: SortOrder
    numero?: SortOrder
    qnt_tot?: SortOrder
    diretrizes?: SortOrder
  }

  export type CasaMinOrderByAggregateInput = {
    id?: SortOrder
    endereco?: SortOrder
    numero?: SortOrder
    qnt_tot?: SortOrder
    diretrizes?: SortOrder
  }

  export type CasaSumOrderByAggregateInput = {
    id?: SortOrder
    numero?: SortOrder
    qnt_tot?: SortOrder
  }

  export type HostCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    cpf?: SortOrder
    endereco?: SortOrder
  }

  export type HostAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type HostMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    cpf?: SortOrder
    endereco?: SortOrder
  }

  export type HostMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    cpf?: SortOrder
    endereco?: SortOrder
  }

  export type HostSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type MoradorCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    cpf?: SortOrder
    endereco?: SortOrder
    matricula?: SortOrder
  }

  export type MoradorAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type MoradorMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    cpf?: SortOrder
    endereco?: SortOrder
    matricula?: SortOrder
  }

  export type MoradorMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    cpf?: SortOrder
    endereco?: SortOrder
    matricula?: SortOrder
  }

  export type MoradorSumOrderByAggregateInput = {
    id?: SortOrder
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