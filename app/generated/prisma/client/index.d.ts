
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Workout
 * 
 */
export type Workout = $Result.DefaultSelection<Prisma.$WorkoutPayload>
/**
 * Model Exercise
 * 
 */
export type Exercise = $Result.DefaultSelection<Prisma.$ExercisePayload>
/**
 * Model ExerciseLog
 * 
 */
export type ExerciseLog = $Result.DefaultSelection<Prisma.$ExerciseLogPayload>
/**
 * Model ExerciseTime
 * 
 */
export type ExerciseTime = $Result.DefaultSelection<Prisma.$ExerciseTimePayload>
/**
 * Model WorkoutLog
 * 
 */
export type WorkoutLog = $Result.DefaultSelection<Prisma.$WorkoutLogPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.workout`: Exposes CRUD operations for the **Workout** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Workouts
    * const workouts = await prisma.workout.findMany()
    * ```
    */
  get workout(): Prisma.WorkoutDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.exercise`: Exposes CRUD operations for the **Exercise** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Exercises
    * const exercises = await prisma.exercise.findMany()
    * ```
    */
  get exercise(): Prisma.ExerciseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.exerciseLog`: Exposes CRUD operations for the **ExerciseLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ExerciseLogs
    * const exerciseLogs = await prisma.exerciseLog.findMany()
    * ```
    */
  get exerciseLog(): Prisma.ExerciseLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.exerciseTime`: Exposes CRUD operations for the **ExerciseTime** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ExerciseTimes
    * const exerciseTimes = await prisma.exerciseTime.findMany()
    * ```
    */
  get exerciseTime(): Prisma.ExerciseTimeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.workoutLog`: Exposes CRUD operations for the **WorkoutLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WorkoutLogs
    * const workoutLogs = await prisma.workoutLog.findMany()
    * ```
    */
  get workoutLog(): Prisma.WorkoutLogDelegate<ExtArgs, ClientOptions>;
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
    User: 'User',
    Workout: 'Workout',
    Exercise: 'Exercise',
    ExerciseLog: 'ExerciseLog',
    ExerciseTime: 'ExerciseTime',
    WorkoutLog: 'WorkoutLog'
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
      modelProps: "user" | "workout" | "exercise" | "exerciseLog" | "exerciseTime" | "workoutLog"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Workout: {
        payload: Prisma.$WorkoutPayload<ExtArgs>
        fields: Prisma.WorkoutFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorkoutFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorkoutFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutPayload>
          }
          findFirst: {
            args: Prisma.WorkoutFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorkoutFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutPayload>
          }
          findMany: {
            args: Prisma.WorkoutFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutPayload>[]
          }
          create: {
            args: Prisma.WorkoutCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutPayload>
          }
          createMany: {
            args: Prisma.WorkoutCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WorkoutCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutPayload>[]
          }
          delete: {
            args: Prisma.WorkoutDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutPayload>
          }
          update: {
            args: Prisma.WorkoutUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutPayload>
          }
          deleteMany: {
            args: Prisma.WorkoutDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorkoutUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WorkoutUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutPayload>[]
          }
          upsert: {
            args: Prisma.WorkoutUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutPayload>
          }
          aggregate: {
            args: Prisma.WorkoutAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkout>
          }
          groupBy: {
            args: Prisma.WorkoutGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkoutGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorkoutCountArgs<ExtArgs>
            result: $Utils.Optional<WorkoutCountAggregateOutputType> | number
          }
        }
      }
      Exercise: {
        payload: Prisma.$ExercisePayload<ExtArgs>
        fields: Prisma.ExerciseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExerciseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExerciseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>
          }
          findFirst: {
            args: Prisma.ExerciseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExerciseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>
          }
          findMany: {
            args: Prisma.ExerciseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>[]
          }
          create: {
            args: Prisma.ExerciseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>
          }
          createMany: {
            args: Prisma.ExerciseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExerciseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>[]
          }
          delete: {
            args: Prisma.ExerciseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>
          }
          update: {
            args: Prisma.ExerciseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>
          }
          deleteMany: {
            args: Prisma.ExerciseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExerciseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ExerciseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>[]
          }
          upsert: {
            args: Prisma.ExerciseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>
          }
          aggregate: {
            args: Prisma.ExerciseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExercise>
          }
          groupBy: {
            args: Prisma.ExerciseGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExerciseGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExerciseCountArgs<ExtArgs>
            result: $Utils.Optional<ExerciseCountAggregateOutputType> | number
          }
        }
      }
      ExerciseLog: {
        payload: Prisma.$ExerciseLogPayload<ExtArgs>
        fields: Prisma.ExerciseLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExerciseLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExerciseLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExerciseLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExerciseLogPayload>
          }
          findFirst: {
            args: Prisma.ExerciseLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExerciseLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExerciseLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExerciseLogPayload>
          }
          findMany: {
            args: Prisma.ExerciseLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExerciseLogPayload>[]
          }
          create: {
            args: Prisma.ExerciseLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExerciseLogPayload>
          }
          createMany: {
            args: Prisma.ExerciseLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExerciseLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExerciseLogPayload>[]
          }
          delete: {
            args: Prisma.ExerciseLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExerciseLogPayload>
          }
          update: {
            args: Prisma.ExerciseLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExerciseLogPayload>
          }
          deleteMany: {
            args: Prisma.ExerciseLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExerciseLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ExerciseLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExerciseLogPayload>[]
          }
          upsert: {
            args: Prisma.ExerciseLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExerciseLogPayload>
          }
          aggregate: {
            args: Prisma.ExerciseLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExerciseLog>
          }
          groupBy: {
            args: Prisma.ExerciseLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExerciseLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExerciseLogCountArgs<ExtArgs>
            result: $Utils.Optional<ExerciseLogCountAggregateOutputType> | number
          }
        }
      }
      ExerciseTime: {
        payload: Prisma.$ExerciseTimePayload<ExtArgs>
        fields: Prisma.ExerciseTimeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExerciseTimeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExerciseTimePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExerciseTimeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExerciseTimePayload>
          }
          findFirst: {
            args: Prisma.ExerciseTimeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExerciseTimePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExerciseTimeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExerciseTimePayload>
          }
          findMany: {
            args: Prisma.ExerciseTimeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExerciseTimePayload>[]
          }
          create: {
            args: Prisma.ExerciseTimeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExerciseTimePayload>
          }
          createMany: {
            args: Prisma.ExerciseTimeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExerciseTimeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExerciseTimePayload>[]
          }
          delete: {
            args: Prisma.ExerciseTimeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExerciseTimePayload>
          }
          update: {
            args: Prisma.ExerciseTimeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExerciseTimePayload>
          }
          deleteMany: {
            args: Prisma.ExerciseTimeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExerciseTimeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ExerciseTimeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExerciseTimePayload>[]
          }
          upsert: {
            args: Prisma.ExerciseTimeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExerciseTimePayload>
          }
          aggregate: {
            args: Prisma.ExerciseTimeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExerciseTime>
          }
          groupBy: {
            args: Prisma.ExerciseTimeGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExerciseTimeGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExerciseTimeCountArgs<ExtArgs>
            result: $Utils.Optional<ExerciseTimeCountAggregateOutputType> | number
          }
        }
      }
      WorkoutLog: {
        payload: Prisma.$WorkoutLogPayload<ExtArgs>
        fields: Prisma.WorkoutLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorkoutLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorkoutLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutLogPayload>
          }
          findFirst: {
            args: Prisma.WorkoutLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorkoutLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutLogPayload>
          }
          findMany: {
            args: Prisma.WorkoutLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutLogPayload>[]
          }
          create: {
            args: Prisma.WorkoutLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutLogPayload>
          }
          createMany: {
            args: Prisma.WorkoutLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WorkoutLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutLogPayload>[]
          }
          delete: {
            args: Prisma.WorkoutLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutLogPayload>
          }
          update: {
            args: Prisma.WorkoutLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutLogPayload>
          }
          deleteMany: {
            args: Prisma.WorkoutLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorkoutLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WorkoutLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutLogPayload>[]
          }
          upsert: {
            args: Prisma.WorkoutLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutLogPayload>
          }
          aggregate: {
            args: Prisma.WorkoutLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkoutLog>
          }
          groupBy: {
            args: Prisma.WorkoutLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkoutLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorkoutLogCountArgs<ExtArgs>
            result: $Utils.Optional<WorkoutLogCountAggregateOutputType> | number
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
    user?: UserOmit
    workout?: WorkoutOmit
    exercise?: ExerciseOmit
    exerciseLog?: ExerciseLogOmit
    exerciseTime?: ExerciseTimeOmit
    workoutLog?: WorkoutLogOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    exerciseLogs: number
    workoutLogs: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    exerciseLogs?: boolean | UserCountOutputTypeCountExerciseLogsArgs
    workoutLogs?: boolean | UserCountOutputTypeCountWorkoutLogsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountExerciseLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExerciseLogWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountWorkoutLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkoutLogWhereInput
  }


  /**
   * Count Type WorkoutCountOutputType
   */

  export type WorkoutCountOutputType = {
    exercises: number
    workoutLogs: number
  }

  export type WorkoutCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    exercises?: boolean | WorkoutCountOutputTypeCountExercisesArgs
    workoutLogs?: boolean | WorkoutCountOutputTypeCountWorkoutLogsArgs
  }

  // Custom InputTypes
  /**
   * WorkoutCountOutputType without action
   */
  export type WorkoutCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutCountOutputType
     */
    select?: WorkoutCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WorkoutCountOutputType without action
   */
  export type WorkoutCountOutputTypeCountExercisesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExerciseWhereInput
  }

  /**
   * WorkoutCountOutputType without action
   */
  export type WorkoutCountOutputTypeCountWorkoutLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkoutLogWhereInput
  }


  /**
   * Count Type ExerciseCountOutputType
   */

  export type ExerciseCountOutputType = {
    workouts: number
    exerciseLogs: number
  }

  export type ExerciseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workouts?: boolean | ExerciseCountOutputTypeCountWorkoutsArgs
    exerciseLogs?: boolean | ExerciseCountOutputTypeCountExerciseLogsArgs
  }

  // Custom InputTypes
  /**
   * ExerciseCountOutputType without action
   */
  export type ExerciseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseCountOutputType
     */
    select?: ExerciseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ExerciseCountOutputType without action
   */
  export type ExerciseCountOutputTypeCountWorkoutsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkoutWhereInput
  }

  /**
   * ExerciseCountOutputType without action
   */
  export type ExerciseCountOutputTypeCountExerciseLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExerciseLogWhereInput
  }


  /**
   * Count Type ExerciseLogCountOutputType
   */

  export type ExerciseLogCountOutputType = {
    times: number
  }

  export type ExerciseLogCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    times?: boolean | ExerciseLogCountOutputTypeCountTimesArgs
  }

  // Custom InputTypes
  /**
   * ExerciseLogCountOutputType without action
   */
  export type ExerciseLogCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseLogCountOutputType
     */
    select?: ExerciseLogCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ExerciseLogCountOutputType without action
   */
  export type ExerciseLogCountOutputTypeCountTimesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExerciseTimeWhereInput
  }


  /**
   * Count Type WorkoutLogCountOutputType
   */

  export type WorkoutLogCountOutputType = {
    exerciseLogs: number
  }

  export type WorkoutLogCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    exerciseLogs?: boolean | WorkoutLogCountOutputTypeCountExerciseLogsArgs
  }

  // Custom InputTypes
  /**
   * WorkoutLogCountOutputType without action
   */
  export type WorkoutLogCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutLogCountOutputType
     */
    select?: WorkoutLogCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WorkoutLogCountOutputType without action
   */
  export type WorkoutLogCountOutputTypeCountExerciseLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExerciseLogWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    email: string | null
    name: string | null
    password: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    email: string | null
    name: string | null
    password: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    email: number
    name: number
    password: number
    images: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    email?: true
    name?: true
    password?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    email?: true
    name?: true
    password?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    email?: true
    name?: true
    password?: true
    images?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    createdAt: Date
    updatedAt: Date
    email: string
    name: string
    password: string
    images: string[]
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    images?: boolean
    exerciseLogs?: boolean | User$exerciseLogsArgs<ExtArgs>
    workoutLogs?: boolean | User$workoutLogsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    images?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    images?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    images?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "email" | "name" | "password" | "images", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    exerciseLogs?: boolean | User$exerciseLogsArgs<ExtArgs>
    workoutLogs?: boolean | User$workoutLogsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      exerciseLogs: Prisma.$ExerciseLogPayload<ExtArgs>[]
      workoutLogs: Prisma.$WorkoutLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      createdAt: Date
      updatedAt: Date
      email: string
      name: string
      password: string
      images: string[]
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    exerciseLogs<T extends User$exerciseLogsArgs<ExtArgs> = {}>(args?: Subset<T, User$exerciseLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExerciseLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    workoutLogs<T extends User$workoutLogsArgs<ExtArgs> = {}>(args?: Subset<T, User$workoutLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkoutLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly images: FieldRef<"User", 'String[]'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.exerciseLogs
   */
  export type User$exerciseLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseLog
     */
    select?: ExerciseLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExerciseLog
     */
    omit?: ExerciseLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseLogInclude<ExtArgs> | null
    where?: ExerciseLogWhereInput
    orderBy?: ExerciseLogOrderByWithRelationInput | ExerciseLogOrderByWithRelationInput[]
    cursor?: ExerciseLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExerciseLogScalarFieldEnum | ExerciseLogScalarFieldEnum[]
  }

  /**
   * User.workoutLogs
   */
  export type User$workoutLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutLog
     */
    select?: WorkoutLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutLog
     */
    omit?: WorkoutLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutLogInclude<ExtArgs> | null
    where?: WorkoutLogWhereInput
    orderBy?: WorkoutLogOrderByWithRelationInput | WorkoutLogOrderByWithRelationInput[]
    cursor?: WorkoutLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkoutLogScalarFieldEnum | WorkoutLogScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Workout
   */

  export type AggregateWorkout = {
    _count: WorkoutCountAggregateOutputType | null
    _avg: WorkoutAvgAggregateOutputType | null
    _sum: WorkoutSumAggregateOutputType | null
    _min: WorkoutMinAggregateOutputType | null
    _max: WorkoutMaxAggregateOutputType | null
  }

  export type WorkoutAvgAggregateOutputType = {
    id: number | null
  }

  export type WorkoutSumAggregateOutputType = {
    id: number | null
  }

  export type WorkoutMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    name: string | null
  }

  export type WorkoutMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    name: string | null
  }

  export type WorkoutCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    name: number
    _all: number
  }


  export type WorkoutAvgAggregateInputType = {
    id?: true
  }

  export type WorkoutSumAggregateInputType = {
    id?: true
  }

  export type WorkoutMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
  }

  export type WorkoutMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
  }

  export type WorkoutCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    _all?: true
  }

  export type WorkoutAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Workout to aggregate.
     */
    where?: WorkoutWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workouts to fetch.
     */
    orderBy?: WorkoutOrderByWithRelationInput | WorkoutOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkoutWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workouts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workouts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Workouts
    **/
    _count?: true | WorkoutCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WorkoutAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WorkoutSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkoutMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkoutMaxAggregateInputType
  }

  export type GetWorkoutAggregateType<T extends WorkoutAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkout]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkout[P]>
      : GetScalarType<T[P], AggregateWorkout[P]>
  }




  export type WorkoutGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkoutWhereInput
    orderBy?: WorkoutOrderByWithAggregationInput | WorkoutOrderByWithAggregationInput[]
    by: WorkoutScalarFieldEnum[] | WorkoutScalarFieldEnum
    having?: WorkoutScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkoutCountAggregateInputType | true
    _avg?: WorkoutAvgAggregateInputType
    _sum?: WorkoutSumAggregateInputType
    _min?: WorkoutMinAggregateInputType
    _max?: WorkoutMaxAggregateInputType
  }

  export type WorkoutGroupByOutputType = {
    id: number
    createdAt: Date
    updatedAt: Date
    name: string
    _count: WorkoutCountAggregateOutputType | null
    _avg: WorkoutAvgAggregateOutputType | null
    _sum: WorkoutSumAggregateOutputType | null
    _min: WorkoutMinAggregateOutputType | null
    _max: WorkoutMaxAggregateOutputType | null
  }

  type GetWorkoutGroupByPayload<T extends WorkoutGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkoutGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkoutGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkoutGroupByOutputType[P]>
            : GetScalarType<T[P], WorkoutGroupByOutputType[P]>
        }
      >
    >


  export type WorkoutSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    exercises?: boolean | Workout$exercisesArgs<ExtArgs>
    workoutLogs?: boolean | Workout$workoutLogsArgs<ExtArgs>
    _count?: boolean | WorkoutCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workout"]>

  export type WorkoutSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
  }, ExtArgs["result"]["workout"]>

  export type WorkoutSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
  }, ExtArgs["result"]["workout"]>

  export type WorkoutSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
  }

  export type WorkoutOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "name", ExtArgs["result"]["workout"]>
  export type WorkoutInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    exercises?: boolean | Workout$exercisesArgs<ExtArgs>
    workoutLogs?: boolean | Workout$workoutLogsArgs<ExtArgs>
    _count?: boolean | WorkoutCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type WorkoutIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type WorkoutIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $WorkoutPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Workout"
    objects: {
      exercises: Prisma.$ExercisePayload<ExtArgs>[]
      workoutLogs: Prisma.$WorkoutLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      createdAt: Date
      updatedAt: Date
      name: string
    }, ExtArgs["result"]["workout"]>
    composites: {}
  }

  type WorkoutGetPayload<S extends boolean | null | undefined | WorkoutDefaultArgs> = $Result.GetResult<Prisma.$WorkoutPayload, S>

  type WorkoutCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WorkoutFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorkoutCountAggregateInputType | true
    }

  export interface WorkoutDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Workout'], meta: { name: 'Workout' } }
    /**
     * Find zero or one Workout that matches the filter.
     * @param {WorkoutFindUniqueArgs} args - Arguments to find a Workout
     * @example
     * // Get one Workout
     * const workout = await prisma.workout.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorkoutFindUniqueArgs>(args: SelectSubset<T, WorkoutFindUniqueArgs<ExtArgs>>): Prisma__WorkoutClient<$Result.GetResult<Prisma.$WorkoutPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Workout that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WorkoutFindUniqueOrThrowArgs} args - Arguments to find a Workout
     * @example
     * // Get one Workout
     * const workout = await prisma.workout.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorkoutFindUniqueOrThrowArgs>(args: SelectSubset<T, WorkoutFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorkoutClient<$Result.GetResult<Prisma.$WorkoutPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Workout that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutFindFirstArgs} args - Arguments to find a Workout
     * @example
     * // Get one Workout
     * const workout = await prisma.workout.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorkoutFindFirstArgs>(args?: SelectSubset<T, WorkoutFindFirstArgs<ExtArgs>>): Prisma__WorkoutClient<$Result.GetResult<Prisma.$WorkoutPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Workout that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutFindFirstOrThrowArgs} args - Arguments to find a Workout
     * @example
     * // Get one Workout
     * const workout = await prisma.workout.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorkoutFindFirstOrThrowArgs>(args?: SelectSubset<T, WorkoutFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorkoutClient<$Result.GetResult<Prisma.$WorkoutPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Workouts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Workouts
     * const workouts = await prisma.workout.findMany()
     * 
     * // Get first 10 Workouts
     * const workouts = await prisma.workout.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workoutWithIdOnly = await prisma.workout.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WorkoutFindManyArgs>(args?: SelectSubset<T, WorkoutFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkoutPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Workout.
     * @param {WorkoutCreateArgs} args - Arguments to create a Workout.
     * @example
     * // Create one Workout
     * const Workout = await prisma.workout.create({
     *   data: {
     *     // ... data to create a Workout
     *   }
     * })
     * 
     */
    create<T extends WorkoutCreateArgs>(args: SelectSubset<T, WorkoutCreateArgs<ExtArgs>>): Prisma__WorkoutClient<$Result.GetResult<Prisma.$WorkoutPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Workouts.
     * @param {WorkoutCreateManyArgs} args - Arguments to create many Workouts.
     * @example
     * // Create many Workouts
     * const workout = await prisma.workout.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorkoutCreateManyArgs>(args?: SelectSubset<T, WorkoutCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Workouts and returns the data saved in the database.
     * @param {WorkoutCreateManyAndReturnArgs} args - Arguments to create many Workouts.
     * @example
     * // Create many Workouts
     * const workout = await prisma.workout.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Workouts and only return the `id`
     * const workoutWithIdOnly = await prisma.workout.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WorkoutCreateManyAndReturnArgs>(args?: SelectSubset<T, WorkoutCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkoutPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Workout.
     * @param {WorkoutDeleteArgs} args - Arguments to delete one Workout.
     * @example
     * // Delete one Workout
     * const Workout = await prisma.workout.delete({
     *   where: {
     *     // ... filter to delete one Workout
     *   }
     * })
     * 
     */
    delete<T extends WorkoutDeleteArgs>(args: SelectSubset<T, WorkoutDeleteArgs<ExtArgs>>): Prisma__WorkoutClient<$Result.GetResult<Prisma.$WorkoutPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Workout.
     * @param {WorkoutUpdateArgs} args - Arguments to update one Workout.
     * @example
     * // Update one Workout
     * const workout = await prisma.workout.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorkoutUpdateArgs>(args: SelectSubset<T, WorkoutUpdateArgs<ExtArgs>>): Prisma__WorkoutClient<$Result.GetResult<Prisma.$WorkoutPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Workouts.
     * @param {WorkoutDeleteManyArgs} args - Arguments to filter Workouts to delete.
     * @example
     * // Delete a few Workouts
     * const { count } = await prisma.workout.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorkoutDeleteManyArgs>(args?: SelectSubset<T, WorkoutDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Workouts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Workouts
     * const workout = await prisma.workout.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorkoutUpdateManyArgs>(args: SelectSubset<T, WorkoutUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Workouts and returns the data updated in the database.
     * @param {WorkoutUpdateManyAndReturnArgs} args - Arguments to update many Workouts.
     * @example
     * // Update many Workouts
     * const workout = await prisma.workout.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Workouts and only return the `id`
     * const workoutWithIdOnly = await prisma.workout.updateManyAndReturn({
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
    updateManyAndReturn<T extends WorkoutUpdateManyAndReturnArgs>(args: SelectSubset<T, WorkoutUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkoutPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Workout.
     * @param {WorkoutUpsertArgs} args - Arguments to update or create a Workout.
     * @example
     * // Update or create a Workout
     * const workout = await prisma.workout.upsert({
     *   create: {
     *     // ... data to create a Workout
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Workout we want to update
     *   }
     * })
     */
    upsert<T extends WorkoutUpsertArgs>(args: SelectSubset<T, WorkoutUpsertArgs<ExtArgs>>): Prisma__WorkoutClient<$Result.GetResult<Prisma.$WorkoutPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Workouts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutCountArgs} args - Arguments to filter Workouts to count.
     * @example
     * // Count the number of Workouts
     * const count = await prisma.workout.count({
     *   where: {
     *     // ... the filter for the Workouts we want to count
     *   }
     * })
    **/
    count<T extends WorkoutCountArgs>(
      args?: Subset<T, WorkoutCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkoutCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Workout.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WorkoutAggregateArgs>(args: Subset<T, WorkoutAggregateArgs>): Prisma.PrismaPromise<GetWorkoutAggregateType<T>>

    /**
     * Group by Workout.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutGroupByArgs} args - Group by arguments.
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
      T extends WorkoutGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkoutGroupByArgs['orderBy'] }
        : { orderBy?: WorkoutGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WorkoutGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkoutGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Workout model
   */
  readonly fields: WorkoutFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Workout.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorkoutClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    exercises<T extends Workout$exercisesArgs<ExtArgs> = {}>(args?: Subset<T, Workout$exercisesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    workoutLogs<T extends Workout$workoutLogsArgs<ExtArgs> = {}>(args?: Subset<T, Workout$workoutLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkoutLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Workout model
   */
  interface WorkoutFieldRefs {
    readonly id: FieldRef<"Workout", 'Int'>
    readonly createdAt: FieldRef<"Workout", 'DateTime'>
    readonly updatedAt: FieldRef<"Workout", 'DateTime'>
    readonly name: FieldRef<"Workout", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Workout findUnique
   */
  export type WorkoutFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workout
     */
    select?: WorkoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workout
     */
    omit?: WorkoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutInclude<ExtArgs> | null
    /**
     * Filter, which Workout to fetch.
     */
    where: WorkoutWhereUniqueInput
  }

  /**
   * Workout findUniqueOrThrow
   */
  export type WorkoutFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workout
     */
    select?: WorkoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workout
     */
    omit?: WorkoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutInclude<ExtArgs> | null
    /**
     * Filter, which Workout to fetch.
     */
    where: WorkoutWhereUniqueInput
  }

  /**
   * Workout findFirst
   */
  export type WorkoutFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workout
     */
    select?: WorkoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workout
     */
    omit?: WorkoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutInclude<ExtArgs> | null
    /**
     * Filter, which Workout to fetch.
     */
    where?: WorkoutWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workouts to fetch.
     */
    orderBy?: WorkoutOrderByWithRelationInput | WorkoutOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Workouts.
     */
    cursor?: WorkoutWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workouts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workouts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Workouts.
     */
    distinct?: WorkoutScalarFieldEnum | WorkoutScalarFieldEnum[]
  }

  /**
   * Workout findFirstOrThrow
   */
  export type WorkoutFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workout
     */
    select?: WorkoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workout
     */
    omit?: WorkoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutInclude<ExtArgs> | null
    /**
     * Filter, which Workout to fetch.
     */
    where?: WorkoutWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workouts to fetch.
     */
    orderBy?: WorkoutOrderByWithRelationInput | WorkoutOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Workouts.
     */
    cursor?: WorkoutWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workouts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workouts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Workouts.
     */
    distinct?: WorkoutScalarFieldEnum | WorkoutScalarFieldEnum[]
  }

  /**
   * Workout findMany
   */
  export type WorkoutFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workout
     */
    select?: WorkoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workout
     */
    omit?: WorkoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutInclude<ExtArgs> | null
    /**
     * Filter, which Workouts to fetch.
     */
    where?: WorkoutWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workouts to fetch.
     */
    orderBy?: WorkoutOrderByWithRelationInput | WorkoutOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Workouts.
     */
    cursor?: WorkoutWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workouts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workouts.
     */
    skip?: number
    distinct?: WorkoutScalarFieldEnum | WorkoutScalarFieldEnum[]
  }

  /**
   * Workout create
   */
  export type WorkoutCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workout
     */
    select?: WorkoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workout
     */
    omit?: WorkoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutInclude<ExtArgs> | null
    /**
     * The data needed to create a Workout.
     */
    data: XOR<WorkoutCreateInput, WorkoutUncheckedCreateInput>
  }

  /**
   * Workout createMany
   */
  export type WorkoutCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Workouts.
     */
    data: WorkoutCreateManyInput | WorkoutCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Workout createManyAndReturn
   */
  export type WorkoutCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workout
     */
    select?: WorkoutSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Workout
     */
    omit?: WorkoutOmit<ExtArgs> | null
    /**
     * The data used to create many Workouts.
     */
    data: WorkoutCreateManyInput | WorkoutCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Workout update
   */
  export type WorkoutUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workout
     */
    select?: WorkoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workout
     */
    omit?: WorkoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutInclude<ExtArgs> | null
    /**
     * The data needed to update a Workout.
     */
    data: XOR<WorkoutUpdateInput, WorkoutUncheckedUpdateInput>
    /**
     * Choose, which Workout to update.
     */
    where: WorkoutWhereUniqueInput
  }

  /**
   * Workout updateMany
   */
  export type WorkoutUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Workouts.
     */
    data: XOR<WorkoutUpdateManyMutationInput, WorkoutUncheckedUpdateManyInput>
    /**
     * Filter which Workouts to update
     */
    where?: WorkoutWhereInput
    /**
     * Limit how many Workouts to update.
     */
    limit?: number
  }

  /**
   * Workout updateManyAndReturn
   */
  export type WorkoutUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workout
     */
    select?: WorkoutSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Workout
     */
    omit?: WorkoutOmit<ExtArgs> | null
    /**
     * The data used to update Workouts.
     */
    data: XOR<WorkoutUpdateManyMutationInput, WorkoutUncheckedUpdateManyInput>
    /**
     * Filter which Workouts to update
     */
    where?: WorkoutWhereInput
    /**
     * Limit how many Workouts to update.
     */
    limit?: number
  }

  /**
   * Workout upsert
   */
  export type WorkoutUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workout
     */
    select?: WorkoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workout
     */
    omit?: WorkoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutInclude<ExtArgs> | null
    /**
     * The filter to search for the Workout to update in case it exists.
     */
    where: WorkoutWhereUniqueInput
    /**
     * In case the Workout found by the `where` argument doesn't exist, create a new Workout with this data.
     */
    create: XOR<WorkoutCreateInput, WorkoutUncheckedCreateInput>
    /**
     * In case the Workout was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkoutUpdateInput, WorkoutUncheckedUpdateInput>
  }

  /**
   * Workout delete
   */
  export type WorkoutDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workout
     */
    select?: WorkoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workout
     */
    omit?: WorkoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutInclude<ExtArgs> | null
    /**
     * Filter which Workout to delete.
     */
    where: WorkoutWhereUniqueInput
  }

  /**
   * Workout deleteMany
   */
  export type WorkoutDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Workouts to delete
     */
    where?: WorkoutWhereInput
    /**
     * Limit how many Workouts to delete.
     */
    limit?: number
  }

  /**
   * Workout.exercises
   */
  export type Workout$exercisesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    where?: ExerciseWhereInput
    orderBy?: ExerciseOrderByWithRelationInput | ExerciseOrderByWithRelationInput[]
    cursor?: ExerciseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExerciseScalarFieldEnum | ExerciseScalarFieldEnum[]
  }

  /**
   * Workout.workoutLogs
   */
  export type Workout$workoutLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutLog
     */
    select?: WorkoutLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutLog
     */
    omit?: WorkoutLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutLogInclude<ExtArgs> | null
    where?: WorkoutLogWhereInput
    orderBy?: WorkoutLogOrderByWithRelationInput | WorkoutLogOrderByWithRelationInput[]
    cursor?: WorkoutLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkoutLogScalarFieldEnum | WorkoutLogScalarFieldEnum[]
  }

  /**
   * Workout without action
   */
  export type WorkoutDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workout
     */
    select?: WorkoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workout
     */
    omit?: WorkoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutInclude<ExtArgs> | null
  }


  /**
   * Model Exercise
   */

  export type AggregateExercise = {
    _count: ExerciseCountAggregateOutputType | null
    _avg: ExerciseAvgAggregateOutputType | null
    _sum: ExerciseSumAggregateOutputType | null
    _min: ExerciseMinAggregateOutputType | null
    _max: ExerciseMaxAggregateOutputType | null
  }

  export type ExerciseAvgAggregateOutputType = {
    id: number | null
    times: number | null
  }

  export type ExerciseSumAggregateOutputType = {
    id: number | null
    times: number | null
  }

  export type ExerciseMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    name: string | null
    times: number | null
    iconPath: string | null
  }

  export type ExerciseMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    name: string | null
    times: number | null
    iconPath: string | null
  }

  export type ExerciseCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    name: number
    times: number
    iconPath: number
    _all: number
  }


  export type ExerciseAvgAggregateInputType = {
    id?: true
    times?: true
  }

  export type ExerciseSumAggregateInputType = {
    id?: true
    times?: true
  }

  export type ExerciseMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    times?: true
    iconPath?: true
  }

  export type ExerciseMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    times?: true
    iconPath?: true
  }

  export type ExerciseCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    times?: true
    iconPath?: true
    _all?: true
  }

  export type ExerciseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Exercise to aggregate.
     */
    where?: ExerciseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exercises to fetch.
     */
    orderBy?: ExerciseOrderByWithRelationInput | ExerciseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExerciseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exercises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Exercises
    **/
    _count?: true | ExerciseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExerciseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExerciseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExerciseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExerciseMaxAggregateInputType
  }

  export type GetExerciseAggregateType<T extends ExerciseAggregateArgs> = {
        [P in keyof T & keyof AggregateExercise]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExercise[P]>
      : GetScalarType<T[P], AggregateExercise[P]>
  }




  export type ExerciseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExerciseWhereInput
    orderBy?: ExerciseOrderByWithAggregationInput | ExerciseOrderByWithAggregationInput[]
    by: ExerciseScalarFieldEnum[] | ExerciseScalarFieldEnum
    having?: ExerciseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExerciseCountAggregateInputType | true
    _avg?: ExerciseAvgAggregateInputType
    _sum?: ExerciseSumAggregateInputType
    _min?: ExerciseMinAggregateInputType
    _max?: ExerciseMaxAggregateInputType
  }

  export type ExerciseGroupByOutputType = {
    id: number
    createdAt: Date
    updatedAt: Date
    name: string
    times: number
    iconPath: string
    _count: ExerciseCountAggregateOutputType | null
    _avg: ExerciseAvgAggregateOutputType | null
    _sum: ExerciseSumAggregateOutputType | null
    _min: ExerciseMinAggregateOutputType | null
    _max: ExerciseMaxAggregateOutputType | null
  }

  type GetExerciseGroupByPayload<T extends ExerciseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExerciseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExerciseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExerciseGroupByOutputType[P]>
            : GetScalarType<T[P], ExerciseGroupByOutputType[P]>
        }
      >
    >


  export type ExerciseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    times?: boolean
    iconPath?: boolean
    workouts?: boolean | Exercise$workoutsArgs<ExtArgs>
    exerciseLogs?: boolean | Exercise$exerciseLogsArgs<ExtArgs>
    _count?: boolean | ExerciseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["exercise"]>

  export type ExerciseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    times?: boolean
    iconPath?: boolean
  }, ExtArgs["result"]["exercise"]>

  export type ExerciseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    times?: boolean
    iconPath?: boolean
  }, ExtArgs["result"]["exercise"]>

  export type ExerciseSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    times?: boolean
    iconPath?: boolean
  }

  export type ExerciseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "name" | "times" | "iconPath", ExtArgs["result"]["exercise"]>
  export type ExerciseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workouts?: boolean | Exercise$workoutsArgs<ExtArgs>
    exerciseLogs?: boolean | Exercise$exerciseLogsArgs<ExtArgs>
    _count?: boolean | ExerciseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ExerciseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ExerciseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ExercisePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Exercise"
    objects: {
      workouts: Prisma.$WorkoutPayload<ExtArgs>[]
      exerciseLogs: Prisma.$ExerciseLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      createdAt: Date
      updatedAt: Date
      name: string
      times: number
      iconPath: string
    }, ExtArgs["result"]["exercise"]>
    composites: {}
  }

  type ExerciseGetPayload<S extends boolean | null | undefined | ExerciseDefaultArgs> = $Result.GetResult<Prisma.$ExercisePayload, S>

  type ExerciseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExerciseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExerciseCountAggregateInputType | true
    }

  export interface ExerciseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Exercise'], meta: { name: 'Exercise' } }
    /**
     * Find zero or one Exercise that matches the filter.
     * @param {ExerciseFindUniqueArgs} args - Arguments to find a Exercise
     * @example
     * // Get one Exercise
     * const exercise = await prisma.exercise.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExerciseFindUniqueArgs>(args: SelectSubset<T, ExerciseFindUniqueArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Exercise that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExerciseFindUniqueOrThrowArgs} args - Arguments to find a Exercise
     * @example
     * // Get one Exercise
     * const exercise = await prisma.exercise.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExerciseFindUniqueOrThrowArgs>(args: SelectSubset<T, ExerciseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Exercise that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseFindFirstArgs} args - Arguments to find a Exercise
     * @example
     * // Get one Exercise
     * const exercise = await prisma.exercise.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExerciseFindFirstArgs>(args?: SelectSubset<T, ExerciseFindFirstArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Exercise that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseFindFirstOrThrowArgs} args - Arguments to find a Exercise
     * @example
     * // Get one Exercise
     * const exercise = await prisma.exercise.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExerciseFindFirstOrThrowArgs>(args?: SelectSubset<T, ExerciseFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Exercises that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Exercises
     * const exercises = await prisma.exercise.findMany()
     * 
     * // Get first 10 Exercises
     * const exercises = await prisma.exercise.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const exerciseWithIdOnly = await prisma.exercise.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExerciseFindManyArgs>(args?: SelectSubset<T, ExerciseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Exercise.
     * @param {ExerciseCreateArgs} args - Arguments to create a Exercise.
     * @example
     * // Create one Exercise
     * const Exercise = await prisma.exercise.create({
     *   data: {
     *     // ... data to create a Exercise
     *   }
     * })
     * 
     */
    create<T extends ExerciseCreateArgs>(args: SelectSubset<T, ExerciseCreateArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Exercises.
     * @param {ExerciseCreateManyArgs} args - Arguments to create many Exercises.
     * @example
     * // Create many Exercises
     * const exercise = await prisma.exercise.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExerciseCreateManyArgs>(args?: SelectSubset<T, ExerciseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Exercises and returns the data saved in the database.
     * @param {ExerciseCreateManyAndReturnArgs} args - Arguments to create many Exercises.
     * @example
     * // Create many Exercises
     * const exercise = await prisma.exercise.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Exercises and only return the `id`
     * const exerciseWithIdOnly = await prisma.exercise.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExerciseCreateManyAndReturnArgs>(args?: SelectSubset<T, ExerciseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Exercise.
     * @param {ExerciseDeleteArgs} args - Arguments to delete one Exercise.
     * @example
     * // Delete one Exercise
     * const Exercise = await prisma.exercise.delete({
     *   where: {
     *     // ... filter to delete one Exercise
     *   }
     * })
     * 
     */
    delete<T extends ExerciseDeleteArgs>(args: SelectSubset<T, ExerciseDeleteArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Exercise.
     * @param {ExerciseUpdateArgs} args - Arguments to update one Exercise.
     * @example
     * // Update one Exercise
     * const exercise = await prisma.exercise.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExerciseUpdateArgs>(args: SelectSubset<T, ExerciseUpdateArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Exercises.
     * @param {ExerciseDeleteManyArgs} args - Arguments to filter Exercises to delete.
     * @example
     * // Delete a few Exercises
     * const { count } = await prisma.exercise.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExerciseDeleteManyArgs>(args?: SelectSubset<T, ExerciseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Exercises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Exercises
     * const exercise = await prisma.exercise.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExerciseUpdateManyArgs>(args: SelectSubset<T, ExerciseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Exercises and returns the data updated in the database.
     * @param {ExerciseUpdateManyAndReturnArgs} args - Arguments to update many Exercises.
     * @example
     * // Update many Exercises
     * const exercise = await prisma.exercise.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Exercises and only return the `id`
     * const exerciseWithIdOnly = await prisma.exercise.updateManyAndReturn({
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
    updateManyAndReturn<T extends ExerciseUpdateManyAndReturnArgs>(args: SelectSubset<T, ExerciseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Exercise.
     * @param {ExerciseUpsertArgs} args - Arguments to update or create a Exercise.
     * @example
     * // Update or create a Exercise
     * const exercise = await prisma.exercise.upsert({
     *   create: {
     *     // ... data to create a Exercise
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Exercise we want to update
     *   }
     * })
     */
    upsert<T extends ExerciseUpsertArgs>(args: SelectSubset<T, ExerciseUpsertArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Exercises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseCountArgs} args - Arguments to filter Exercises to count.
     * @example
     * // Count the number of Exercises
     * const count = await prisma.exercise.count({
     *   where: {
     *     // ... the filter for the Exercises we want to count
     *   }
     * })
    **/
    count<T extends ExerciseCountArgs>(
      args?: Subset<T, ExerciseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExerciseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Exercise.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ExerciseAggregateArgs>(args: Subset<T, ExerciseAggregateArgs>): Prisma.PrismaPromise<GetExerciseAggregateType<T>>

    /**
     * Group by Exercise.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseGroupByArgs} args - Group by arguments.
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
      T extends ExerciseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExerciseGroupByArgs['orderBy'] }
        : { orderBy?: ExerciseGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ExerciseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExerciseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Exercise model
   */
  readonly fields: ExerciseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Exercise.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExerciseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    workouts<T extends Exercise$workoutsArgs<ExtArgs> = {}>(args?: Subset<T, Exercise$workoutsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkoutPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    exerciseLogs<T extends Exercise$exerciseLogsArgs<ExtArgs> = {}>(args?: Subset<T, Exercise$exerciseLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExerciseLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Exercise model
   */
  interface ExerciseFieldRefs {
    readonly id: FieldRef<"Exercise", 'Int'>
    readonly createdAt: FieldRef<"Exercise", 'DateTime'>
    readonly updatedAt: FieldRef<"Exercise", 'DateTime'>
    readonly name: FieldRef<"Exercise", 'String'>
    readonly times: FieldRef<"Exercise", 'Int'>
    readonly iconPath: FieldRef<"Exercise", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Exercise findUnique
   */
  export type ExerciseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * Filter, which Exercise to fetch.
     */
    where: ExerciseWhereUniqueInput
  }

  /**
   * Exercise findUniqueOrThrow
   */
  export type ExerciseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * Filter, which Exercise to fetch.
     */
    where: ExerciseWhereUniqueInput
  }

  /**
   * Exercise findFirst
   */
  export type ExerciseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * Filter, which Exercise to fetch.
     */
    where?: ExerciseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exercises to fetch.
     */
    orderBy?: ExerciseOrderByWithRelationInput | ExerciseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Exercises.
     */
    cursor?: ExerciseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exercises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Exercises.
     */
    distinct?: ExerciseScalarFieldEnum | ExerciseScalarFieldEnum[]
  }

  /**
   * Exercise findFirstOrThrow
   */
  export type ExerciseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * Filter, which Exercise to fetch.
     */
    where?: ExerciseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exercises to fetch.
     */
    orderBy?: ExerciseOrderByWithRelationInput | ExerciseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Exercises.
     */
    cursor?: ExerciseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exercises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Exercises.
     */
    distinct?: ExerciseScalarFieldEnum | ExerciseScalarFieldEnum[]
  }

  /**
   * Exercise findMany
   */
  export type ExerciseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * Filter, which Exercises to fetch.
     */
    where?: ExerciseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exercises to fetch.
     */
    orderBy?: ExerciseOrderByWithRelationInput | ExerciseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Exercises.
     */
    cursor?: ExerciseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exercises.
     */
    skip?: number
    distinct?: ExerciseScalarFieldEnum | ExerciseScalarFieldEnum[]
  }

  /**
   * Exercise create
   */
  export type ExerciseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * The data needed to create a Exercise.
     */
    data: XOR<ExerciseCreateInput, ExerciseUncheckedCreateInput>
  }

  /**
   * Exercise createMany
   */
  export type ExerciseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Exercises.
     */
    data: ExerciseCreateManyInput | ExerciseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Exercise createManyAndReturn
   */
  export type ExerciseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * The data used to create many Exercises.
     */
    data: ExerciseCreateManyInput | ExerciseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Exercise update
   */
  export type ExerciseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * The data needed to update a Exercise.
     */
    data: XOR<ExerciseUpdateInput, ExerciseUncheckedUpdateInput>
    /**
     * Choose, which Exercise to update.
     */
    where: ExerciseWhereUniqueInput
  }

  /**
   * Exercise updateMany
   */
  export type ExerciseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Exercises.
     */
    data: XOR<ExerciseUpdateManyMutationInput, ExerciseUncheckedUpdateManyInput>
    /**
     * Filter which Exercises to update
     */
    where?: ExerciseWhereInput
    /**
     * Limit how many Exercises to update.
     */
    limit?: number
  }

  /**
   * Exercise updateManyAndReturn
   */
  export type ExerciseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * The data used to update Exercises.
     */
    data: XOR<ExerciseUpdateManyMutationInput, ExerciseUncheckedUpdateManyInput>
    /**
     * Filter which Exercises to update
     */
    where?: ExerciseWhereInput
    /**
     * Limit how many Exercises to update.
     */
    limit?: number
  }

  /**
   * Exercise upsert
   */
  export type ExerciseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * The filter to search for the Exercise to update in case it exists.
     */
    where: ExerciseWhereUniqueInput
    /**
     * In case the Exercise found by the `where` argument doesn't exist, create a new Exercise with this data.
     */
    create: XOR<ExerciseCreateInput, ExerciseUncheckedCreateInput>
    /**
     * In case the Exercise was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExerciseUpdateInput, ExerciseUncheckedUpdateInput>
  }

  /**
   * Exercise delete
   */
  export type ExerciseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * Filter which Exercise to delete.
     */
    where: ExerciseWhereUniqueInput
  }

  /**
   * Exercise deleteMany
   */
  export type ExerciseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Exercises to delete
     */
    where?: ExerciseWhereInput
    /**
     * Limit how many Exercises to delete.
     */
    limit?: number
  }

  /**
   * Exercise.workouts
   */
  export type Exercise$workoutsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workout
     */
    select?: WorkoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workout
     */
    omit?: WorkoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutInclude<ExtArgs> | null
    where?: WorkoutWhereInput
    orderBy?: WorkoutOrderByWithRelationInput | WorkoutOrderByWithRelationInput[]
    cursor?: WorkoutWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkoutScalarFieldEnum | WorkoutScalarFieldEnum[]
  }

  /**
   * Exercise.exerciseLogs
   */
  export type Exercise$exerciseLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseLog
     */
    select?: ExerciseLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExerciseLog
     */
    omit?: ExerciseLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseLogInclude<ExtArgs> | null
    where?: ExerciseLogWhereInput
    orderBy?: ExerciseLogOrderByWithRelationInput | ExerciseLogOrderByWithRelationInput[]
    cursor?: ExerciseLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExerciseLogScalarFieldEnum | ExerciseLogScalarFieldEnum[]
  }

  /**
   * Exercise without action
   */
  export type ExerciseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
  }


  /**
   * Model ExerciseLog
   */

  export type AggregateExerciseLog = {
    _count: ExerciseLogCountAggregateOutputType | null
    _avg: ExerciseLogAvgAggregateOutputType | null
    _sum: ExerciseLogSumAggregateOutputType | null
    _min: ExerciseLogMinAggregateOutputType | null
    _max: ExerciseLogMaxAggregateOutputType | null
  }

  export type ExerciseLogAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    workoutLogId: number | null
    exerciseId: number | null
  }

  export type ExerciseLogSumAggregateOutputType = {
    id: number | null
    userId: number | null
    workoutLogId: number | null
    exerciseId: number | null
  }

  export type ExerciseLogMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    isCompleted: boolean | null
    userId: number | null
    workoutLogId: number | null
    exerciseId: number | null
  }

  export type ExerciseLogMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    isCompleted: boolean | null
    userId: number | null
    workoutLogId: number | null
    exerciseId: number | null
  }

  export type ExerciseLogCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    isCompleted: number
    userId: number
    workoutLogId: number
    exerciseId: number
    _all: number
  }


  export type ExerciseLogAvgAggregateInputType = {
    id?: true
    userId?: true
    workoutLogId?: true
    exerciseId?: true
  }

  export type ExerciseLogSumAggregateInputType = {
    id?: true
    userId?: true
    workoutLogId?: true
    exerciseId?: true
  }

  export type ExerciseLogMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    isCompleted?: true
    userId?: true
    workoutLogId?: true
    exerciseId?: true
  }

  export type ExerciseLogMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    isCompleted?: true
    userId?: true
    workoutLogId?: true
    exerciseId?: true
  }

  export type ExerciseLogCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    isCompleted?: true
    userId?: true
    workoutLogId?: true
    exerciseId?: true
    _all?: true
  }

  export type ExerciseLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExerciseLog to aggregate.
     */
    where?: ExerciseLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExerciseLogs to fetch.
     */
    orderBy?: ExerciseLogOrderByWithRelationInput | ExerciseLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExerciseLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExerciseLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExerciseLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ExerciseLogs
    **/
    _count?: true | ExerciseLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExerciseLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExerciseLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExerciseLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExerciseLogMaxAggregateInputType
  }

  export type GetExerciseLogAggregateType<T extends ExerciseLogAggregateArgs> = {
        [P in keyof T & keyof AggregateExerciseLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExerciseLog[P]>
      : GetScalarType<T[P], AggregateExerciseLog[P]>
  }




  export type ExerciseLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExerciseLogWhereInput
    orderBy?: ExerciseLogOrderByWithAggregationInput | ExerciseLogOrderByWithAggregationInput[]
    by: ExerciseLogScalarFieldEnum[] | ExerciseLogScalarFieldEnum
    having?: ExerciseLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExerciseLogCountAggregateInputType | true
    _avg?: ExerciseLogAvgAggregateInputType
    _sum?: ExerciseLogSumAggregateInputType
    _min?: ExerciseLogMinAggregateInputType
    _max?: ExerciseLogMaxAggregateInputType
  }

  export type ExerciseLogGroupByOutputType = {
    id: number
    createdAt: Date
    updatedAt: Date
    isCompleted: boolean
    userId: number | null
    workoutLogId: number | null
    exerciseId: number | null
    _count: ExerciseLogCountAggregateOutputType | null
    _avg: ExerciseLogAvgAggregateOutputType | null
    _sum: ExerciseLogSumAggregateOutputType | null
    _min: ExerciseLogMinAggregateOutputType | null
    _max: ExerciseLogMaxAggregateOutputType | null
  }

  type GetExerciseLogGroupByPayload<T extends ExerciseLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExerciseLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExerciseLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExerciseLogGroupByOutputType[P]>
            : GetScalarType<T[P], ExerciseLogGroupByOutputType[P]>
        }
      >
    >


  export type ExerciseLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isCompleted?: boolean
    userId?: boolean
    workoutLogId?: boolean
    exerciseId?: boolean
    times?: boolean | ExerciseLog$timesArgs<ExtArgs>
    user?: boolean | ExerciseLog$userArgs<ExtArgs>
    workoutLog?: boolean | ExerciseLog$workoutLogArgs<ExtArgs>
    exercise?: boolean | ExerciseLog$exerciseArgs<ExtArgs>
    _count?: boolean | ExerciseLogCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["exerciseLog"]>

  export type ExerciseLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isCompleted?: boolean
    userId?: boolean
    workoutLogId?: boolean
    exerciseId?: boolean
    user?: boolean | ExerciseLog$userArgs<ExtArgs>
    workoutLog?: boolean | ExerciseLog$workoutLogArgs<ExtArgs>
    exercise?: boolean | ExerciseLog$exerciseArgs<ExtArgs>
  }, ExtArgs["result"]["exerciseLog"]>

  export type ExerciseLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isCompleted?: boolean
    userId?: boolean
    workoutLogId?: boolean
    exerciseId?: boolean
    user?: boolean | ExerciseLog$userArgs<ExtArgs>
    workoutLog?: boolean | ExerciseLog$workoutLogArgs<ExtArgs>
    exercise?: boolean | ExerciseLog$exerciseArgs<ExtArgs>
  }, ExtArgs["result"]["exerciseLog"]>

  export type ExerciseLogSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isCompleted?: boolean
    userId?: boolean
    workoutLogId?: boolean
    exerciseId?: boolean
  }

  export type ExerciseLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "isCompleted" | "userId" | "workoutLogId" | "exerciseId", ExtArgs["result"]["exerciseLog"]>
  export type ExerciseLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    times?: boolean | ExerciseLog$timesArgs<ExtArgs>
    user?: boolean | ExerciseLog$userArgs<ExtArgs>
    workoutLog?: boolean | ExerciseLog$workoutLogArgs<ExtArgs>
    exercise?: boolean | ExerciseLog$exerciseArgs<ExtArgs>
    _count?: boolean | ExerciseLogCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ExerciseLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | ExerciseLog$userArgs<ExtArgs>
    workoutLog?: boolean | ExerciseLog$workoutLogArgs<ExtArgs>
    exercise?: boolean | ExerciseLog$exerciseArgs<ExtArgs>
  }
  export type ExerciseLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | ExerciseLog$userArgs<ExtArgs>
    workoutLog?: boolean | ExerciseLog$workoutLogArgs<ExtArgs>
    exercise?: boolean | ExerciseLog$exerciseArgs<ExtArgs>
  }

  export type $ExerciseLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ExerciseLog"
    objects: {
      times: Prisma.$ExerciseTimePayload<ExtArgs>[]
      user: Prisma.$UserPayload<ExtArgs> | null
      workoutLog: Prisma.$WorkoutLogPayload<ExtArgs> | null
      exercise: Prisma.$ExercisePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      createdAt: Date
      updatedAt: Date
      isCompleted: boolean
      userId: number | null
      workoutLogId: number | null
      exerciseId: number | null
    }, ExtArgs["result"]["exerciseLog"]>
    composites: {}
  }

  type ExerciseLogGetPayload<S extends boolean | null | undefined | ExerciseLogDefaultArgs> = $Result.GetResult<Prisma.$ExerciseLogPayload, S>

  type ExerciseLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExerciseLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExerciseLogCountAggregateInputType | true
    }

  export interface ExerciseLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ExerciseLog'], meta: { name: 'ExerciseLog' } }
    /**
     * Find zero or one ExerciseLog that matches the filter.
     * @param {ExerciseLogFindUniqueArgs} args - Arguments to find a ExerciseLog
     * @example
     * // Get one ExerciseLog
     * const exerciseLog = await prisma.exerciseLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExerciseLogFindUniqueArgs>(args: SelectSubset<T, ExerciseLogFindUniqueArgs<ExtArgs>>): Prisma__ExerciseLogClient<$Result.GetResult<Prisma.$ExerciseLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ExerciseLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExerciseLogFindUniqueOrThrowArgs} args - Arguments to find a ExerciseLog
     * @example
     * // Get one ExerciseLog
     * const exerciseLog = await prisma.exerciseLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExerciseLogFindUniqueOrThrowArgs>(args: SelectSubset<T, ExerciseLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExerciseLogClient<$Result.GetResult<Prisma.$ExerciseLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExerciseLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseLogFindFirstArgs} args - Arguments to find a ExerciseLog
     * @example
     * // Get one ExerciseLog
     * const exerciseLog = await prisma.exerciseLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExerciseLogFindFirstArgs>(args?: SelectSubset<T, ExerciseLogFindFirstArgs<ExtArgs>>): Prisma__ExerciseLogClient<$Result.GetResult<Prisma.$ExerciseLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExerciseLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseLogFindFirstOrThrowArgs} args - Arguments to find a ExerciseLog
     * @example
     * // Get one ExerciseLog
     * const exerciseLog = await prisma.exerciseLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExerciseLogFindFirstOrThrowArgs>(args?: SelectSubset<T, ExerciseLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExerciseLogClient<$Result.GetResult<Prisma.$ExerciseLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ExerciseLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ExerciseLogs
     * const exerciseLogs = await prisma.exerciseLog.findMany()
     * 
     * // Get first 10 ExerciseLogs
     * const exerciseLogs = await prisma.exerciseLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const exerciseLogWithIdOnly = await prisma.exerciseLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExerciseLogFindManyArgs>(args?: SelectSubset<T, ExerciseLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExerciseLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ExerciseLog.
     * @param {ExerciseLogCreateArgs} args - Arguments to create a ExerciseLog.
     * @example
     * // Create one ExerciseLog
     * const ExerciseLog = await prisma.exerciseLog.create({
     *   data: {
     *     // ... data to create a ExerciseLog
     *   }
     * })
     * 
     */
    create<T extends ExerciseLogCreateArgs>(args: SelectSubset<T, ExerciseLogCreateArgs<ExtArgs>>): Prisma__ExerciseLogClient<$Result.GetResult<Prisma.$ExerciseLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ExerciseLogs.
     * @param {ExerciseLogCreateManyArgs} args - Arguments to create many ExerciseLogs.
     * @example
     * // Create many ExerciseLogs
     * const exerciseLog = await prisma.exerciseLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExerciseLogCreateManyArgs>(args?: SelectSubset<T, ExerciseLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ExerciseLogs and returns the data saved in the database.
     * @param {ExerciseLogCreateManyAndReturnArgs} args - Arguments to create many ExerciseLogs.
     * @example
     * // Create many ExerciseLogs
     * const exerciseLog = await prisma.exerciseLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ExerciseLogs and only return the `id`
     * const exerciseLogWithIdOnly = await prisma.exerciseLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExerciseLogCreateManyAndReturnArgs>(args?: SelectSubset<T, ExerciseLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExerciseLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ExerciseLog.
     * @param {ExerciseLogDeleteArgs} args - Arguments to delete one ExerciseLog.
     * @example
     * // Delete one ExerciseLog
     * const ExerciseLog = await prisma.exerciseLog.delete({
     *   where: {
     *     // ... filter to delete one ExerciseLog
     *   }
     * })
     * 
     */
    delete<T extends ExerciseLogDeleteArgs>(args: SelectSubset<T, ExerciseLogDeleteArgs<ExtArgs>>): Prisma__ExerciseLogClient<$Result.GetResult<Prisma.$ExerciseLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ExerciseLog.
     * @param {ExerciseLogUpdateArgs} args - Arguments to update one ExerciseLog.
     * @example
     * // Update one ExerciseLog
     * const exerciseLog = await prisma.exerciseLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExerciseLogUpdateArgs>(args: SelectSubset<T, ExerciseLogUpdateArgs<ExtArgs>>): Prisma__ExerciseLogClient<$Result.GetResult<Prisma.$ExerciseLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ExerciseLogs.
     * @param {ExerciseLogDeleteManyArgs} args - Arguments to filter ExerciseLogs to delete.
     * @example
     * // Delete a few ExerciseLogs
     * const { count } = await prisma.exerciseLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExerciseLogDeleteManyArgs>(args?: SelectSubset<T, ExerciseLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExerciseLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ExerciseLogs
     * const exerciseLog = await prisma.exerciseLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExerciseLogUpdateManyArgs>(args: SelectSubset<T, ExerciseLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExerciseLogs and returns the data updated in the database.
     * @param {ExerciseLogUpdateManyAndReturnArgs} args - Arguments to update many ExerciseLogs.
     * @example
     * // Update many ExerciseLogs
     * const exerciseLog = await prisma.exerciseLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ExerciseLogs and only return the `id`
     * const exerciseLogWithIdOnly = await prisma.exerciseLog.updateManyAndReturn({
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
    updateManyAndReturn<T extends ExerciseLogUpdateManyAndReturnArgs>(args: SelectSubset<T, ExerciseLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExerciseLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ExerciseLog.
     * @param {ExerciseLogUpsertArgs} args - Arguments to update or create a ExerciseLog.
     * @example
     * // Update or create a ExerciseLog
     * const exerciseLog = await prisma.exerciseLog.upsert({
     *   create: {
     *     // ... data to create a ExerciseLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ExerciseLog we want to update
     *   }
     * })
     */
    upsert<T extends ExerciseLogUpsertArgs>(args: SelectSubset<T, ExerciseLogUpsertArgs<ExtArgs>>): Prisma__ExerciseLogClient<$Result.GetResult<Prisma.$ExerciseLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ExerciseLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseLogCountArgs} args - Arguments to filter ExerciseLogs to count.
     * @example
     * // Count the number of ExerciseLogs
     * const count = await prisma.exerciseLog.count({
     *   where: {
     *     // ... the filter for the ExerciseLogs we want to count
     *   }
     * })
    **/
    count<T extends ExerciseLogCountArgs>(
      args?: Subset<T, ExerciseLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExerciseLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ExerciseLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ExerciseLogAggregateArgs>(args: Subset<T, ExerciseLogAggregateArgs>): Prisma.PrismaPromise<GetExerciseLogAggregateType<T>>

    /**
     * Group by ExerciseLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseLogGroupByArgs} args - Group by arguments.
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
      T extends ExerciseLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExerciseLogGroupByArgs['orderBy'] }
        : { orderBy?: ExerciseLogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ExerciseLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExerciseLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ExerciseLog model
   */
  readonly fields: ExerciseLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ExerciseLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExerciseLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    times<T extends ExerciseLog$timesArgs<ExtArgs> = {}>(args?: Subset<T, ExerciseLog$timesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExerciseTimePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user<T extends ExerciseLog$userArgs<ExtArgs> = {}>(args?: Subset<T, ExerciseLog$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    workoutLog<T extends ExerciseLog$workoutLogArgs<ExtArgs> = {}>(args?: Subset<T, ExerciseLog$workoutLogArgs<ExtArgs>>): Prisma__WorkoutLogClient<$Result.GetResult<Prisma.$WorkoutLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    exercise<T extends ExerciseLog$exerciseArgs<ExtArgs> = {}>(args?: Subset<T, ExerciseLog$exerciseArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ExerciseLog model
   */
  interface ExerciseLogFieldRefs {
    readonly id: FieldRef<"ExerciseLog", 'Int'>
    readonly createdAt: FieldRef<"ExerciseLog", 'DateTime'>
    readonly updatedAt: FieldRef<"ExerciseLog", 'DateTime'>
    readonly isCompleted: FieldRef<"ExerciseLog", 'Boolean'>
    readonly userId: FieldRef<"ExerciseLog", 'Int'>
    readonly workoutLogId: FieldRef<"ExerciseLog", 'Int'>
    readonly exerciseId: FieldRef<"ExerciseLog", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ExerciseLog findUnique
   */
  export type ExerciseLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseLog
     */
    select?: ExerciseLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExerciseLog
     */
    omit?: ExerciseLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseLogInclude<ExtArgs> | null
    /**
     * Filter, which ExerciseLog to fetch.
     */
    where: ExerciseLogWhereUniqueInput
  }

  /**
   * ExerciseLog findUniqueOrThrow
   */
  export type ExerciseLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseLog
     */
    select?: ExerciseLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExerciseLog
     */
    omit?: ExerciseLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseLogInclude<ExtArgs> | null
    /**
     * Filter, which ExerciseLog to fetch.
     */
    where: ExerciseLogWhereUniqueInput
  }

  /**
   * ExerciseLog findFirst
   */
  export type ExerciseLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseLog
     */
    select?: ExerciseLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExerciseLog
     */
    omit?: ExerciseLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseLogInclude<ExtArgs> | null
    /**
     * Filter, which ExerciseLog to fetch.
     */
    where?: ExerciseLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExerciseLogs to fetch.
     */
    orderBy?: ExerciseLogOrderByWithRelationInput | ExerciseLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExerciseLogs.
     */
    cursor?: ExerciseLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExerciseLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExerciseLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExerciseLogs.
     */
    distinct?: ExerciseLogScalarFieldEnum | ExerciseLogScalarFieldEnum[]
  }

  /**
   * ExerciseLog findFirstOrThrow
   */
  export type ExerciseLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseLog
     */
    select?: ExerciseLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExerciseLog
     */
    omit?: ExerciseLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseLogInclude<ExtArgs> | null
    /**
     * Filter, which ExerciseLog to fetch.
     */
    where?: ExerciseLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExerciseLogs to fetch.
     */
    orderBy?: ExerciseLogOrderByWithRelationInput | ExerciseLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExerciseLogs.
     */
    cursor?: ExerciseLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExerciseLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExerciseLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExerciseLogs.
     */
    distinct?: ExerciseLogScalarFieldEnum | ExerciseLogScalarFieldEnum[]
  }

  /**
   * ExerciseLog findMany
   */
  export type ExerciseLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseLog
     */
    select?: ExerciseLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExerciseLog
     */
    omit?: ExerciseLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseLogInclude<ExtArgs> | null
    /**
     * Filter, which ExerciseLogs to fetch.
     */
    where?: ExerciseLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExerciseLogs to fetch.
     */
    orderBy?: ExerciseLogOrderByWithRelationInput | ExerciseLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ExerciseLogs.
     */
    cursor?: ExerciseLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExerciseLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExerciseLogs.
     */
    skip?: number
    distinct?: ExerciseLogScalarFieldEnum | ExerciseLogScalarFieldEnum[]
  }

  /**
   * ExerciseLog create
   */
  export type ExerciseLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseLog
     */
    select?: ExerciseLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExerciseLog
     */
    omit?: ExerciseLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseLogInclude<ExtArgs> | null
    /**
     * The data needed to create a ExerciseLog.
     */
    data: XOR<ExerciseLogCreateInput, ExerciseLogUncheckedCreateInput>
  }

  /**
   * ExerciseLog createMany
   */
  export type ExerciseLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ExerciseLogs.
     */
    data: ExerciseLogCreateManyInput | ExerciseLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ExerciseLog createManyAndReturn
   */
  export type ExerciseLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseLog
     */
    select?: ExerciseLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ExerciseLog
     */
    omit?: ExerciseLogOmit<ExtArgs> | null
    /**
     * The data used to create many ExerciseLogs.
     */
    data: ExerciseLogCreateManyInput | ExerciseLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ExerciseLog update
   */
  export type ExerciseLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseLog
     */
    select?: ExerciseLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExerciseLog
     */
    omit?: ExerciseLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseLogInclude<ExtArgs> | null
    /**
     * The data needed to update a ExerciseLog.
     */
    data: XOR<ExerciseLogUpdateInput, ExerciseLogUncheckedUpdateInput>
    /**
     * Choose, which ExerciseLog to update.
     */
    where: ExerciseLogWhereUniqueInput
  }

  /**
   * ExerciseLog updateMany
   */
  export type ExerciseLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ExerciseLogs.
     */
    data: XOR<ExerciseLogUpdateManyMutationInput, ExerciseLogUncheckedUpdateManyInput>
    /**
     * Filter which ExerciseLogs to update
     */
    where?: ExerciseLogWhereInput
    /**
     * Limit how many ExerciseLogs to update.
     */
    limit?: number
  }

  /**
   * ExerciseLog updateManyAndReturn
   */
  export type ExerciseLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseLog
     */
    select?: ExerciseLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ExerciseLog
     */
    omit?: ExerciseLogOmit<ExtArgs> | null
    /**
     * The data used to update ExerciseLogs.
     */
    data: XOR<ExerciseLogUpdateManyMutationInput, ExerciseLogUncheckedUpdateManyInput>
    /**
     * Filter which ExerciseLogs to update
     */
    where?: ExerciseLogWhereInput
    /**
     * Limit how many ExerciseLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ExerciseLog upsert
   */
  export type ExerciseLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseLog
     */
    select?: ExerciseLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExerciseLog
     */
    omit?: ExerciseLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseLogInclude<ExtArgs> | null
    /**
     * The filter to search for the ExerciseLog to update in case it exists.
     */
    where: ExerciseLogWhereUniqueInput
    /**
     * In case the ExerciseLog found by the `where` argument doesn't exist, create a new ExerciseLog with this data.
     */
    create: XOR<ExerciseLogCreateInput, ExerciseLogUncheckedCreateInput>
    /**
     * In case the ExerciseLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExerciseLogUpdateInput, ExerciseLogUncheckedUpdateInput>
  }

  /**
   * ExerciseLog delete
   */
  export type ExerciseLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseLog
     */
    select?: ExerciseLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExerciseLog
     */
    omit?: ExerciseLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseLogInclude<ExtArgs> | null
    /**
     * Filter which ExerciseLog to delete.
     */
    where: ExerciseLogWhereUniqueInput
  }

  /**
   * ExerciseLog deleteMany
   */
  export type ExerciseLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExerciseLogs to delete
     */
    where?: ExerciseLogWhereInput
    /**
     * Limit how many ExerciseLogs to delete.
     */
    limit?: number
  }

  /**
   * ExerciseLog.times
   */
  export type ExerciseLog$timesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseTime
     */
    select?: ExerciseTimeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExerciseTime
     */
    omit?: ExerciseTimeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseTimeInclude<ExtArgs> | null
    where?: ExerciseTimeWhereInput
    orderBy?: ExerciseTimeOrderByWithRelationInput | ExerciseTimeOrderByWithRelationInput[]
    cursor?: ExerciseTimeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExerciseTimeScalarFieldEnum | ExerciseTimeScalarFieldEnum[]
  }

  /**
   * ExerciseLog.user
   */
  export type ExerciseLog$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * ExerciseLog.workoutLog
   */
  export type ExerciseLog$workoutLogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutLog
     */
    select?: WorkoutLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutLog
     */
    omit?: WorkoutLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutLogInclude<ExtArgs> | null
    where?: WorkoutLogWhereInput
  }

  /**
   * ExerciseLog.exercise
   */
  export type ExerciseLog$exerciseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    where?: ExerciseWhereInput
  }

  /**
   * ExerciseLog without action
   */
  export type ExerciseLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseLog
     */
    select?: ExerciseLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExerciseLog
     */
    omit?: ExerciseLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseLogInclude<ExtArgs> | null
  }


  /**
   * Model ExerciseTime
   */

  export type AggregateExerciseTime = {
    _count: ExerciseTimeCountAggregateOutputType | null
    _avg: ExerciseTimeAvgAggregateOutputType | null
    _sum: ExerciseTimeSumAggregateOutputType | null
    _min: ExerciseTimeMinAggregateOutputType | null
    _max: ExerciseTimeMaxAggregateOutputType | null
  }

  export type ExerciseTimeAvgAggregateOutputType = {
    id: number | null
    weight: number | null
    repeat: number | null
    exerciseLogId: number | null
  }

  export type ExerciseTimeSumAggregateOutputType = {
    id: number | null
    weight: number | null
    repeat: number | null
    exerciseLogId: number | null
  }

  export type ExerciseTimeMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    weight: number | null
    repeat: number | null
    isCompleted: boolean | null
    exerciseLogId: number | null
  }

  export type ExerciseTimeMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    weight: number | null
    repeat: number | null
    isCompleted: boolean | null
    exerciseLogId: number | null
  }

  export type ExerciseTimeCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    weight: number
    repeat: number
    isCompleted: number
    exerciseLogId: number
    _all: number
  }


  export type ExerciseTimeAvgAggregateInputType = {
    id?: true
    weight?: true
    repeat?: true
    exerciseLogId?: true
  }

  export type ExerciseTimeSumAggregateInputType = {
    id?: true
    weight?: true
    repeat?: true
    exerciseLogId?: true
  }

  export type ExerciseTimeMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    weight?: true
    repeat?: true
    isCompleted?: true
    exerciseLogId?: true
  }

  export type ExerciseTimeMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    weight?: true
    repeat?: true
    isCompleted?: true
    exerciseLogId?: true
  }

  export type ExerciseTimeCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    weight?: true
    repeat?: true
    isCompleted?: true
    exerciseLogId?: true
    _all?: true
  }

  export type ExerciseTimeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExerciseTime to aggregate.
     */
    where?: ExerciseTimeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExerciseTimes to fetch.
     */
    orderBy?: ExerciseTimeOrderByWithRelationInput | ExerciseTimeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExerciseTimeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExerciseTimes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExerciseTimes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ExerciseTimes
    **/
    _count?: true | ExerciseTimeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExerciseTimeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExerciseTimeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExerciseTimeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExerciseTimeMaxAggregateInputType
  }

  export type GetExerciseTimeAggregateType<T extends ExerciseTimeAggregateArgs> = {
        [P in keyof T & keyof AggregateExerciseTime]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExerciseTime[P]>
      : GetScalarType<T[P], AggregateExerciseTime[P]>
  }




  export type ExerciseTimeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExerciseTimeWhereInput
    orderBy?: ExerciseTimeOrderByWithAggregationInput | ExerciseTimeOrderByWithAggregationInput[]
    by: ExerciseTimeScalarFieldEnum[] | ExerciseTimeScalarFieldEnum
    having?: ExerciseTimeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExerciseTimeCountAggregateInputType | true
    _avg?: ExerciseTimeAvgAggregateInputType
    _sum?: ExerciseTimeSumAggregateInputType
    _min?: ExerciseTimeMinAggregateInputType
    _max?: ExerciseTimeMaxAggregateInputType
  }

  export type ExerciseTimeGroupByOutputType = {
    id: number
    createdAt: Date
    updatedAt: Date
    weight: number
    repeat: number
    isCompleted: boolean
    exerciseLogId: number | null
    _count: ExerciseTimeCountAggregateOutputType | null
    _avg: ExerciseTimeAvgAggregateOutputType | null
    _sum: ExerciseTimeSumAggregateOutputType | null
    _min: ExerciseTimeMinAggregateOutputType | null
    _max: ExerciseTimeMaxAggregateOutputType | null
  }

  type GetExerciseTimeGroupByPayload<T extends ExerciseTimeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExerciseTimeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExerciseTimeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExerciseTimeGroupByOutputType[P]>
            : GetScalarType<T[P], ExerciseTimeGroupByOutputType[P]>
        }
      >
    >


  export type ExerciseTimeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    weight?: boolean
    repeat?: boolean
    isCompleted?: boolean
    exerciseLogId?: boolean
    exerciseLog?: boolean | ExerciseTime$exerciseLogArgs<ExtArgs>
  }, ExtArgs["result"]["exerciseTime"]>

  export type ExerciseTimeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    weight?: boolean
    repeat?: boolean
    isCompleted?: boolean
    exerciseLogId?: boolean
    exerciseLog?: boolean | ExerciseTime$exerciseLogArgs<ExtArgs>
  }, ExtArgs["result"]["exerciseTime"]>

  export type ExerciseTimeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    weight?: boolean
    repeat?: boolean
    isCompleted?: boolean
    exerciseLogId?: boolean
    exerciseLog?: boolean | ExerciseTime$exerciseLogArgs<ExtArgs>
  }, ExtArgs["result"]["exerciseTime"]>

  export type ExerciseTimeSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    weight?: boolean
    repeat?: boolean
    isCompleted?: boolean
    exerciseLogId?: boolean
  }

  export type ExerciseTimeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "weight" | "repeat" | "isCompleted" | "exerciseLogId", ExtArgs["result"]["exerciseTime"]>
  export type ExerciseTimeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    exerciseLog?: boolean | ExerciseTime$exerciseLogArgs<ExtArgs>
  }
  export type ExerciseTimeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    exerciseLog?: boolean | ExerciseTime$exerciseLogArgs<ExtArgs>
  }
  export type ExerciseTimeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    exerciseLog?: boolean | ExerciseTime$exerciseLogArgs<ExtArgs>
  }

  export type $ExerciseTimePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ExerciseTime"
    objects: {
      exerciseLog: Prisma.$ExerciseLogPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      createdAt: Date
      updatedAt: Date
      weight: number
      repeat: number
      isCompleted: boolean
      exerciseLogId: number | null
    }, ExtArgs["result"]["exerciseTime"]>
    composites: {}
  }

  type ExerciseTimeGetPayload<S extends boolean | null | undefined | ExerciseTimeDefaultArgs> = $Result.GetResult<Prisma.$ExerciseTimePayload, S>

  type ExerciseTimeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExerciseTimeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExerciseTimeCountAggregateInputType | true
    }

  export interface ExerciseTimeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ExerciseTime'], meta: { name: 'ExerciseTime' } }
    /**
     * Find zero or one ExerciseTime that matches the filter.
     * @param {ExerciseTimeFindUniqueArgs} args - Arguments to find a ExerciseTime
     * @example
     * // Get one ExerciseTime
     * const exerciseTime = await prisma.exerciseTime.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExerciseTimeFindUniqueArgs>(args: SelectSubset<T, ExerciseTimeFindUniqueArgs<ExtArgs>>): Prisma__ExerciseTimeClient<$Result.GetResult<Prisma.$ExerciseTimePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ExerciseTime that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExerciseTimeFindUniqueOrThrowArgs} args - Arguments to find a ExerciseTime
     * @example
     * // Get one ExerciseTime
     * const exerciseTime = await prisma.exerciseTime.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExerciseTimeFindUniqueOrThrowArgs>(args: SelectSubset<T, ExerciseTimeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExerciseTimeClient<$Result.GetResult<Prisma.$ExerciseTimePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExerciseTime that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseTimeFindFirstArgs} args - Arguments to find a ExerciseTime
     * @example
     * // Get one ExerciseTime
     * const exerciseTime = await prisma.exerciseTime.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExerciseTimeFindFirstArgs>(args?: SelectSubset<T, ExerciseTimeFindFirstArgs<ExtArgs>>): Prisma__ExerciseTimeClient<$Result.GetResult<Prisma.$ExerciseTimePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExerciseTime that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseTimeFindFirstOrThrowArgs} args - Arguments to find a ExerciseTime
     * @example
     * // Get one ExerciseTime
     * const exerciseTime = await prisma.exerciseTime.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExerciseTimeFindFirstOrThrowArgs>(args?: SelectSubset<T, ExerciseTimeFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExerciseTimeClient<$Result.GetResult<Prisma.$ExerciseTimePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ExerciseTimes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseTimeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ExerciseTimes
     * const exerciseTimes = await prisma.exerciseTime.findMany()
     * 
     * // Get first 10 ExerciseTimes
     * const exerciseTimes = await prisma.exerciseTime.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const exerciseTimeWithIdOnly = await prisma.exerciseTime.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExerciseTimeFindManyArgs>(args?: SelectSubset<T, ExerciseTimeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExerciseTimePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ExerciseTime.
     * @param {ExerciseTimeCreateArgs} args - Arguments to create a ExerciseTime.
     * @example
     * // Create one ExerciseTime
     * const ExerciseTime = await prisma.exerciseTime.create({
     *   data: {
     *     // ... data to create a ExerciseTime
     *   }
     * })
     * 
     */
    create<T extends ExerciseTimeCreateArgs>(args: SelectSubset<T, ExerciseTimeCreateArgs<ExtArgs>>): Prisma__ExerciseTimeClient<$Result.GetResult<Prisma.$ExerciseTimePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ExerciseTimes.
     * @param {ExerciseTimeCreateManyArgs} args - Arguments to create many ExerciseTimes.
     * @example
     * // Create many ExerciseTimes
     * const exerciseTime = await prisma.exerciseTime.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExerciseTimeCreateManyArgs>(args?: SelectSubset<T, ExerciseTimeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ExerciseTimes and returns the data saved in the database.
     * @param {ExerciseTimeCreateManyAndReturnArgs} args - Arguments to create many ExerciseTimes.
     * @example
     * // Create many ExerciseTimes
     * const exerciseTime = await prisma.exerciseTime.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ExerciseTimes and only return the `id`
     * const exerciseTimeWithIdOnly = await prisma.exerciseTime.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExerciseTimeCreateManyAndReturnArgs>(args?: SelectSubset<T, ExerciseTimeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExerciseTimePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ExerciseTime.
     * @param {ExerciseTimeDeleteArgs} args - Arguments to delete one ExerciseTime.
     * @example
     * // Delete one ExerciseTime
     * const ExerciseTime = await prisma.exerciseTime.delete({
     *   where: {
     *     // ... filter to delete one ExerciseTime
     *   }
     * })
     * 
     */
    delete<T extends ExerciseTimeDeleteArgs>(args: SelectSubset<T, ExerciseTimeDeleteArgs<ExtArgs>>): Prisma__ExerciseTimeClient<$Result.GetResult<Prisma.$ExerciseTimePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ExerciseTime.
     * @param {ExerciseTimeUpdateArgs} args - Arguments to update one ExerciseTime.
     * @example
     * // Update one ExerciseTime
     * const exerciseTime = await prisma.exerciseTime.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExerciseTimeUpdateArgs>(args: SelectSubset<T, ExerciseTimeUpdateArgs<ExtArgs>>): Prisma__ExerciseTimeClient<$Result.GetResult<Prisma.$ExerciseTimePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ExerciseTimes.
     * @param {ExerciseTimeDeleteManyArgs} args - Arguments to filter ExerciseTimes to delete.
     * @example
     * // Delete a few ExerciseTimes
     * const { count } = await prisma.exerciseTime.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExerciseTimeDeleteManyArgs>(args?: SelectSubset<T, ExerciseTimeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExerciseTimes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseTimeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ExerciseTimes
     * const exerciseTime = await prisma.exerciseTime.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExerciseTimeUpdateManyArgs>(args: SelectSubset<T, ExerciseTimeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExerciseTimes and returns the data updated in the database.
     * @param {ExerciseTimeUpdateManyAndReturnArgs} args - Arguments to update many ExerciseTimes.
     * @example
     * // Update many ExerciseTimes
     * const exerciseTime = await prisma.exerciseTime.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ExerciseTimes and only return the `id`
     * const exerciseTimeWithIdOnly = await prisma.exerciseTime.updateManyAndReturn({
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
    updateManyAndReturn<T extends ExerciseTimeUpdateManyAndReturnArgs>(args: SelectSubset<T, ExerciseTimeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExerciseTimePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ExerciseTime.
     * @param {ExerciseTimeUpsertArgs} args - Arguments to update or create a ExerciseTime.
     * @example
     * // Update or create a ExerciseTime
     * const exerciseTime = await prisma.exerciseTime.upsert({
     *   create: {
     *     // ... data to create a ExerciseTime
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ExerciseTime we want to update
     *   }
     * })
     */
    upsert<T extends ExerciseTimeUpsertArgs>(args: SelectSubset<T, ExerciseTimeUpsertArgs<ExtArgs>>): Prisma__ExerciseTimeClient<$Result.GetResult<Prisma.$ExerciseTimePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ExerciseTimes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseTimeCountArgs} args - Arguments to filter ExerciseTimes to count.
     * @example
     * // Count the number of ExerciseTimes
     * const count = await prisma.exerciseTime.count({
     *   where: {
     *     // ... the filter for the ExerciseTimes we want to count
     *   }
     * })
    **/
    count<T extends ExerciseTimeCountArgs>(
      args?: Subset<T, ExerciseTimeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExerciseTimeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ExerciseTime.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseTimeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ExerciseTimeAggregateArgs>(args: Subset<T, ExerciseTimeAggregateArgs>): Prisma.PrismaPromise<GetExerciseTimeAggregateType<T>>

    /**
     * Group by ExerciseTime.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseTimeGroupByArgs} args - Group by arguments.
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
      T extends ExerciseTimeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExerciseTimeGroupByArgs['orderBy'] }
        : { orderBy?: ExerciseTimeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ExerciseTimeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExerciseTimeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ExerciseTime model
   */
  readonly fields: ExerciseTimeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ExerciseTime.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExerciseTimeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    exerciseLog<T extends ExerciseTime$exerciseLogArgs<ExtArgs> = {}>(args?: Subset<T, ExerciseTime$exerciseLogArgs<ExtArgs>>): Prisma__ExerciseLogClient<$Result.GetResult<Prisma.$ExerciseLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ExerciseTime model
   */
  interface ExerciseTimeFieldRefs {
    readonly id: FieldRef<"ExerciseTime", 'Int'>
    readonly createdAt: FieldRef<"ExerciseTime", 'DateTime'>
    readonly updatedAt: FieldRef<"ExerciseTime", 'DateTime'>
    readonly weight: FieldRef<"ExerciseTime", 'Int'>
    readonly repeat: FieldRef<"ExerciseTime", 'Int'>
    readonly isCompleted: FieldRef<"ExerciseTime", 'Boolean'>
    readonly exerciseLogId: FieldRef<"ExerciseTime", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ExerciseTime findUnique
   */
  export type ExerciseTimeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseTime
     */
    select?: ExerciseTimeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExerciseTime
     */
    omit?: ExerciseTimeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseTimeInclude<ExtArgs> | null
    /**
     * Filter, which ExerciseTime to fetch.
     */
    where: ExerciseTimeWhereUniqueInput
  }

  /**
   * ExerciseTime findUniqueOrThrow
   */
  export type ExerciseTimeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseTime
     */
    select?: ExerciseTimeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExerciseTime
     */
    omit?: ExerciseTimeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseTimeInclude<ExtArgs> | null
    /**
     * Filter, which ExerciseTime to fetch.
     */
    where: ExerciseTimeWhereUniqueInput
  }

  /**
   * ExerciseTime findFirst
   */
  export type ExerciseTimeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseTime
     */
    select?: ExerciseTimeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExerciseTime
     */
    omit?: ExerciseTimeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseTimeInclude<ExtArgs> | null
    /**
     * Filter, which ExerciseTime to fetch.
     */
    where?: ExerciseTimeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExerciseTimes to fetch.
     */
    orderBy?: ExerciseTimeOrderByWithRelationInput | ExerciseTimeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExerciseTimes.
     */
    cursor?: ExerciseTimeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExerciseTimes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExerciseTimes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExerciseTimes.
     */
    distinct?: ExerciseTimeScalarFieldEnum | ExerciseTimeScalarFieldEnum[]
  }

  /**
   * ExerciseTime findFirstOrThrow
   */
  export type ExerciseTimeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseTime
     */
    select?: ExerciseTimeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExerciseTime
     */
    omit?: ExerciseTimeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseTimeInclude<ExtArgs> | null
    /**
     * Filter, which ExerciseTime to fetch.
     */
    where?: ExerciseTimeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExerciseTimes to fetch.
     */
    orderBy?: ExerciseTimeOrderByWithRelationInput | ExerciseTimeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExerciseTimes.
     */
    cursor?: ExerciseTimeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExerciseTimes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExerciseTimes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExerciseTimes.
     */
    distinct?: ExerciseTimeScalarFieldEnum | ExerciseTimeScalarFieldEnum[]
  }

  /**
   * ExerciseTime findMany
   */
  export type ExerciseTimeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseTime
     */
    select?: ExerciseTimeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExerciseTime
     */
    omit?: ExerciseTimeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseTimeInclude<ExtArgs> | null
    /**
     * Filter, which ExerciseTimes to fetch.
     */
    where?: ExerciseTimeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExerciseTimes to fetch.
     */
    orderBy?: ExerciseTimeOrderByWithRelationInput | ExerciseTimeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ExerciseTimes.
     */
    cursor?: ExerciseTimeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExerciseTimes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExerciseTimes.
     */
    skip?: number
    distinct?: ExerciseTimeScalarFieldEnum | ExerciseTimeScalarFieldEnum[]
  }

  /**
   * ExerciseTime create
   */
  export type ExerciseTimeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseTime
     */
    select?: ExerciseTimeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExerciseTime
     */
    omit?: ExerciseTimeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseTimeInclude<ExtArgs> | null
    /**
     * The data needed to create a ExerciseTime.
     */
    data: XOR<ExerciseTimeCreateInput, ExerciseTimeUncheckedCreateInput>
  }

  /**
   * ExerciseTime createMany
   */
  export type ExerciseTimeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ExerciseTimes.
     */
    data: ExerciseTimeCreateManyInput | ExerciseTimeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ExerciseTime createManyAndReturn
   */
  export type ExerciseTimeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseTime
     */
    select?: ExerciseTimeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ExerciseTime
     */
    omit?: ExerciseTimeOmit<ExtArgs> | null
    /**
     * The data used to create many ExerciseTimes.
     */
    data: ExerciseTimeCreateManyInput | ExerciseTimeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseTimeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ExerciseTime update
   */
  export type ExerciseTimeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseTime
     */
    select?: ExerciseTimeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExerciseTime
     */
    omit?: ExerciseTimeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseTimeInclude<ExtArgs> | null
    /**
     * The data needed to update a ExerciseTime.
     */
    data: XOR<ExerciseTimeUpdateInput, ExerciseTimeUncheckedUpdateInput>
    /**
     * Choose, which ExerciseTime to update.
     */
    where: ExerciseTimeWhereUniqueInput
  }

  /**
   * ExerciseTime updateMany
   */
  export type ExerciseTimeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ExerciseTimes.
     */
    data: XOR<ExerciseTimeUpdateManyMutationInput, ExerciseTimeUncheckedUpdateManyInput>
    /**
     * Filter which ExerciseTimes to update
     */
    where?: ExerciseTimeWhereInput
    /**
     * Limit how many ExerciseTimes to update.
     */
    limit?: number
  }

  /**
   * ExerciseTime updateManyAndReturn
   */
  export type ExerciseTimeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseTime
     */
    select?: ExerciseTimeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ExerciseTime
     */
    omit?: ExerciseTimeOmit<ExtArgs> | null
    /**
     * The data used to update ExerciseTimes.
     */
    data: XOR<ExerciseTimeUpdateManyMutationInput, ExerciseTimeUncheckedUpdateManyInput>
    /**
     * Filter which ExerciseTimes to update
     */
    where?: ExerciseTimeWhereInput
    /**
     * Limit how many ExerciseTimes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseTimeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ExerciseTime upsert
   */
  export type ExerciseTimeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseTime
     */
    select?: ExerciseTimeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExerciseTime
     */
    omit?: ExerciseTimeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseTimeInclude<ExtArgs> | null
    /**
     * The filter to search for the ExerciseTime to update in case it exists.
     */
    where: ExerciseTimeWhereUniqueInput
    /**
     * In case the ExerciseTime found by the `where` argument doesn't exist, create a new ExerciseTime with this data.
     */
    create: XOR<ExerciseTimeCreateInput, ExerciseTimeUncheckedCreateInput>
    /**
     * In case the ExerciseTime was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExerciseTimeUpdateInput, ExerciseTimeUncheckedUpdateInput>
  }

  /**
   * ExerciseTime delete
   */
  export type ExerciseTimeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseTime
     */
    select?: ExerciseTimeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExerciseTime
     */
    omit?: ExerciseTimeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseTimeInclude<ExtArgs> | null
    /**
     * Filter which ExerciseTime to delete.
     */
    where: ExerciseTimeWhereUniqueInput
  }

  /**
   * ExerciseTime deleteMany
   */
  export type ExerciseTimeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExerciseTimes to delete
     */
    where?: ExerciseTimeWhereInput
    /**
     * Limit how many ExerciseTimes to delete.
     */
    limit?: number
  }

  /**
   * ExerciseTime.exerciseLog
   */
  export type ExerciseTime$exerciseLogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseLog
     */
    select?: ExerciseLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExerciseLog
     */
    omit?: ExerciseLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseLogInclude<ExtArgs> | null
    where?: ExerciseLogWhereInput
  }

  /**
   * ExerciseTime without action
   */
  export type ExerciseTimeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseTime
     */
    select?: ExerciseTimeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExerciseTime
     */
    omit?: ExerciseTimeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseTimeInclude<ExtArgs> | null
  }


  /**
   * Model WorkoutLog
   */

  export type AggregateWorkoutLog = {
    _count: WorkoutLogCountAggregateOutputType | null
    _avg: WorkoutLogAvgAggregateOutputType | null
    _sum: WorkoutLogSumAggregateOutputType | null
    _min: WorkoutLogMinAggregateOutputType | null
    _max: WorkoutLogMaxAggregateOutputType | null
  }

  export type WorkoutLogAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    workoutId: number | null
  }

  export type WorkoutLogSumAggregateOutputType = {
    id: number | null
    userId: number | null
    workoutId: number | null
  }

  export type WorkoutLogMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    isCompleted: boolean | null
    userId: number | null
    workoutId: number | null
  }

  export type WorkoutLogMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    isCompleted: boolean | null
    userId: number | null
    workoutId: number | null
  }

  export type WorkoutLogCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    isCompleted: number
    userId: number
    workoutId: number
    _all: number
  }


  export type WorkoutLogAvgAggregateInputType = {
    id?: true
    userId?: true
    workoutId?: true
  }

  export type WorkoutLogSumAggregateInputType = {
    id?: true
    userId?: true
    workoutId?: true
  }

  export type WorkoutLogMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    isCompleted?: true
    userId?: true
    workoutId?: true
  }

  export type WorkoutLogMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    isCompleted?: true
    userId?: true
    workoutId?: true
  }

  export type WorkoutLogCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    isCompleted?: true
    userId?: true
    workoutId?: true
    _all?: true
  }

  export type WorkoutLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkoutLog to aggregate.
     */
    where?: WorkoutLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkoutLogs to fetch.
     */
    orderBy?: WorkoutLogOrderByWithRelationInput | WorkoutLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkoutLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkoutLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkoutLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WorkoutLogs
    **/
    _count?: true | WorkoutLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WorkoutLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WorkoutLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkoutLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkoutLogMaxAggregateInputType
  }

  export type GetWorkoutLogAggregateType<T extends WorkoutLogAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkoutLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkoutLog[P]>
      : GetScalarType<T[P], AggregateWorkoutLog[P]>
  }




  export type WorkoutLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkoutLogWhereInput
    orderBy?: WorkoutLogOrderByWithAggregationInput | WorkoutLogOrderByWithAggregationInput[]
    by: WorkoutLogScalarFieldEnum[] | WorkoutLogScalarFieldEnum
    having?: WorkoutLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkoutLogCountAggregateInputType | true
    _avg?: WorkoutLogAvgAggregateInputType
    _sum?: WorkoutLogSumAggregateInputType
    _min?: WorkoutLogMinAggregateInputType
    _max?: WorkoutLogMaxAggregateInputType
  }

  export type WorkoutLogGroupByOutputType = {
    id: number
    createdAt: Date
    updatedAt: Date
    isCompleted: boolean
    userId: number | null
    workoutId: number | null
    _count: WorkoutLogCountAggregateOutputType | null
    _avg: WorkoutLogAvgAggregateOutputType | null
    _sum: WorkoutLogSumAggregateOutputType | null
    _min: WorkoutLogMinAggregateOutputType | null
    _max: WorkoutLogMaxAggregateOutputType | null
  }

  type GetWorkoutLogGroupByPayload<T extends WorkoutLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkoutLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkoutLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkoutLogGroupByOutputType[P]>
            : GetScalarType<T[P], WorkoutLogGroupByOutputType[P]>
        }
      >
    >


  export type WorkoutLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isCompleted?: boolean
    userId?: boolean
    workoutId?: boolean
    exerciseLogs?: boolean | WorkoutLog$exerciseLogsArgs<ExtArgs>
    user?: boolean | WorkoutLog$userArgs<ExtArgs>
    workout?: boolean | WorkoutLog$workoutArgs<ExtArgs>
    _count?: boolean | WorkoutLogCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workoutLog"]>

  export type WorkoutLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isCompleted?: boolean
    userId?: boolean
    workoutId?: boolean
    user?: boolean | WorkoutLog$userArgs<ExtArgs>
    workout?: boolean | WorkoutLog$workoutArgs<ExtArgs>
  }, ExtArgs["result"]["workoutLog"]>

  export type WorkoutLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isCompleted?: boolean
    userId?: boolean
    workoutId?: boolean
    user?: boolean | WorkoutLog$userArgs<ExtArgs>
    workout?: boolean | WorkoutLog$workoutArgs<ExtArgs>
  }, ExtArgs["result"]["workoutLog"]>

  export type WorkoutLogSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isCompleted?: boolean
    userId?: boolean
    workoutId?: boolean
  }

  export type WorkoutLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "isCompleted" | "userId" | "workoutId", ExtArgs["result"]["workoutLog"]>
  export type WorkoutLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    exerciseLogs?: boolean | WorkoutLog$exerciseLogsArgs<ExtArgs>
    user?: boolean | WorkoutLog$userArgs<ExtArgs>
    workout?: boolean | WorkoutLog$workoutArgs<ExtArgs>
    _count?: boolean | WorkoutLogCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type WorkoutLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | WorkoutLog$userArgs<ExtArgs>
    workout?: boolean | WorkoutLog$workoutArgs<ExtArgs>
  }
  export type WorkoutLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | WorkoutLog$userArgs<ExtArgs>
    workout?: boolean | WorkoutLog$workoutArgs<ExtArgs>
  }

  export type $WorkoutLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WorkoutLog"
    objects: {
      exerciseLogs: Prisma.$ExerciseLogPayload<ExtArgs>[]
      user: Prisma.$UserPayload<ExtArgs> | null
      workout: Prisma.$WorkoutPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      createdAt: Date
      updatedAt: Date
      isCompleted: boolean
      userId: number | null
      workoutId: number | null
    }, ExtArgs["result"]["workoutLog"]>
    composites: {}
  }

  type WorkoutLogGetPayload<S extends boolean | null | undefined | WorkoutLogDefaultArgs> = $Result.GetResult<Prisma.$WorkoutLogPayload, S>

  type WorkoutLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WorkoutLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorkoutLogCountAggregateInputType | true
    }

  export interface WorkoutLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WorkoutLog'], meta: { name: 'WorkoutLog' } }
    /**
     * Find zero or one WorkoutLog that matches the filter.
     * @param {WorkoutLogFindUniqueArgs} args - Arguments to find a WorkoutLog
     * @example
     * // Get one WorkoutLog
     * const workoutLog = await prisma.workoutLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorkoutLogFindUniqueArgs>(args: SelectSubset<T, WorkoutLogFindUniqueArgs<ExtArgs>>): Prisma__WorkoutLogClient<$Result.GetResult<Prisma.$WorkoutLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WorkoutLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WorkoutLogFindUniqueOrThrowArgs} args - Arguments to find a WorkoutLog
     * @example
     * // Get one WorkoutLog
     * const workoutLog = await prisma.workoutLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorkoutLogFindUniqueOrThrowArgs>(args: SelectSubset<T, WorkoutLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorkoutLogClient<$Result.GetResult<Prisma.$WorkoutLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkoutLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutLogFindFirstArgs} args - Arguments to find a WorkoutLog
     * @example
     * // Get one WorkoutLog
     * const workoutLog = await prisma.workoutLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorkoutLogFindFirstArgs>(args?: SelectSubset<T, WorkoutLogFindFirstArgs<ExtArgs>>): Prisma__WorkoutLogClient<$Result.GetResult<Prisma.$WorkoutLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkoutLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutLogFindFirstOrThrowArgs} args - Arguments to find a WorkoutLog
     * @example
     * // Get one WorkoutLog
     * const workoutLog = await prisma.workoutLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorkoutLogFindFirstOrThrowArgs>(args?: SelectSubset<T, WorkoutLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorkoutLogClient<$Result.GetResult<Prisma.$WorkoutLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WorkoutLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WorkoutLogs
     * const workoutLogs = await prisma.workoutLog.findMany()
     * 
     * // Get first 10 WorkoutLogs
     * const workoutLogs = await prisma.workoutLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workoutLogWithIdOnly = await prisma.workoutLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WorkoutLogFindManyArgs>(args?: SelectSubset<T, WorkoutLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkoutLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WorkoutLog.
     * @param {WorkoutLogCreateArgs} args - Arguments to create a WorkoutLog.
     * @example
     * // Create one WorkoutLog
     * const WorkoutLog = await prisma.workoutLog.create({
     *   data: {
     *     // ... data to create a WorkoutLog
     *   }
     * })
     * 
     */
    create<T extends WorkoutLogCreateArgs>(args: SelectSubset<T, WorkoutLogCreateArgs<ExtArgs>>): Prisma__WorkoutLogClient<$Result.GetResult<Prisma.$WorkoutLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WorkoutLogs.
     * @param {WorkoutLogCreateManyArgs} args - Arguments to create many WorkoutLogs.
     * @example
     * // Create many WorkoutLogs
     * const workoutLog = await prisma.workoutLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorkoutLogCreateManyArgs>(args?: SelectSubset<T, WorkoutLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WorkoutLogs and returns the data saved in the database.
     * @param {WorkoutLogCreateManyAndReturnArgs} args - Arguments to create many WorkoutLogs.
     * @example
     * // Create many WorkoutLogs
     * const workoutLog = await prisma.workoutLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WorkoutLogs and only return the `id`
     * const workoutLogWithIdOnly = await prisma.workoutLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WorkoutLogCreateManyAndReturnArgs>(args?: SelectSubset<T, WorkoutLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkoutLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WorkoutLog.
     * @param {WorkoutLogDeleteArgs} args - Arguments to delete one WorkoutLog.
     * @example
     * // Delete one WorkoutLog
     * const WorkoutLog = await prisma.workoutLog.delete({
     *   where: {
     *     // ... filter to delete one WorkoutLog
     *   }
     * })
     * 
     */
    delete<T extends WorkoutLogDeleteArgs>(args: SelectSubset<T, WorkoutLogDeleteArgs<ExtArgs>>): Prisma__WorkoutLogClient<$Result.GetResult<Prisma.$WorkoutLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WorkoutLog.
     * @param {WorkoutLogUpdateArgs} args - Arguments to update one WorkoutLog.
     * @example
     * // Update one WorkoutLog
     * const workoutLog = await prisma.workoutLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorkoutLogUpdateArgs>(args: SelectSubset<T, WorkoutLogUpdateArgs<ExtArgs>>): Prisma__WorkoutLogClient<$Result.GetResult<Prisma.$WorkoutLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WorkoutLogs.
     * @param {WorkoutLogDeleteManyArgs} args - Arguments to filter WorkoutLogs to delete.
     * @example
     * // Delete a few WorkoutLogs
     * const { count } = await prisma.workoutLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorkoutLogDeleteManyArgs>(args?: SelectSubset<T, WorkoutLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkoutLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WorkoutLogs
     * const workoutLog = await prisma.workoutLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorkoutLogUpdateManyArgs>(args: SelectSubset<T, WorkoutLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkoutLogs and returns the data updated in the database.
     * @param {WorkoutLogUpdateManyAndReturnArgs} args - Arguments to update many WorkoutLogs.
     * @example
     * // Update many WorkoutLogs
     * const workoutLog = await prisma.workoutLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WorkoutLogs and only return the `id`
     * const workoutLogWithIdOnly = await prisma.workoutLog.updateManyAndReturn({
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
    updateManyAndReturn<T extends WorkoutLogUpdateManyAndReturnArgs>(args: SelectSubset<T, WorkoutLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkoutLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WorkoutLog.
     * @param {WorkoutLogUpsertArgs} args - Arguments to update or create a WorkoutLog.
     * @example
     * // Update or create a WorkoutLog
     * const workoutLog = await prisma.workoutLog.upsert({
     *   create: {
     *     // ... data to create a WorkoutLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WorkoutLog we want to update
     *   }
     * })
     */
    upsert<T extends WorkoutLogUpsertArgs>(args: SelectSubset<T, WorkoutLogUpsertArgs<ExtArgs>>): Prisma__WorkoutLogClient<$Result.GetResult<Prisma.$WorkoutLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WorkoutLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutLogCountArgs} args - Arguments to filter WorkoutLogs to count.
     * @example
     * // Count the number of WorkoutLogs
     * const count = await prisma.workoutLog.count({
     *   where: {
     *     // ... the filter for the WorkoutLogs we want to count
     *   }
     * })
    **/
    count<T extends WorkoutLogCountArgs>(
      args?: Subset<T, WorkoutLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkoutLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WorkoutLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WorkoutLogAggregateArgs>(args: Subset<T, WorkoutLogAggregateArgs>): Prisma.PrismaPromise<GetWorkoutLogAggregateType<T>>

    /**
     * Group by WorkoutLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutLogGroupByArgs} args - Group by arguments.
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
      T extends WorkoutLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkoutLogGroupByArgs['orderBy'] }
        : { orderBy?: WorkoutLogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WorkoutLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkoutLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WorkoutLog model
   */
  readonly fields: WorkoutLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WorkoutLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorkoutLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    exerciseLogs<T extends WorkoutLog$exerciseLogsArgs<ExtArgs> = {}>(args?: Subset<T, WorkoutLog$exerciseLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExerciseLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user<T extends WorkoutLog$userArgs<ExtArgs> = {}>(args?: Subset<T, WorkoutLog$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    workout<T extends WorkoutLog$workoutArgs<ExtArgs> = {}>(args?: Subset<T, WorkoutLog$workoutArgs<ExtArgs>>): Prisma__WorkoutClient<$Result.GetResult<Prisma.$WorkoutPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the WorkoutLog model
   */
  interface WorkoutLogFieldRefs {
    readonly id: FieldRef<"WorkoutLog", 'Int'>
    readonly createdAt: FieldRef<"WorkoutLog", 'DateTime'>
    readonly updatedAt: FieldRef<"WorkoutLog", 'DateTime'>
    readonly isCompleted: FieldRef<"WorkoutLog", 'Boolean'>
    readonly userId: FieldRef<"WorkoutLog", 'Int'>
    readonly workoutId: FieldRef<"WorkoutLog", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * WorkoutLog findUnique
   */
  export type WorkoutLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutLog
     */
    select?: WorkoutLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutLog
     */
    omit?: WorkoutLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutLogInclude<ExtArgs> | null
    /**
     * Filter, which WorkoutLog to fetch.
     */
    where: WorkoutLogWhereUniqueInput
  }

  /**
   * WorkoutLog findUniqueOrThrow
   */
  export type WorkoutLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutLog
     */
    select?: WorkoutLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutLog
     */
    omit?: WorkoutLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutLogInclude<ExtArgs> | null
    /**
     * Filter, which WorkoutLog to fetch.
     */
    where: WorkoutLogWhereUniqueInput
  }

  /**
   * WorkoutLog findFirst
   */
  export type WorkoutLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutLog
     */
    select?: WorkoutLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutLog
     */
    omit?: WorkoutLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutLogInclude<ExtArgs> | null
    /**
     * Filter, which WorkoutLog to fetch.
     */
    where?: WorkoutLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkoutLogs to fetch.
     */
    orderBy?: WorkoutLogOrderByWithRelationInput | WorkoutLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkoutLogs.
     */
    cursor?: WorkoutLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkoutLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkoutLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkoutLogs.
     */
    distinct?: WorkoutLogScalarFieldEnum | WorkoutLogScalarFieldEnum[]
  }

  /**
   * WorkoutLog findFirstOrThrow
   */
  export type WorkoutLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutLog
     */
    select?: WorkoutLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutLog
     */
    omit?: WorkoutLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutLogInclude<ExtArgs> | null
    /**
     * Filter, which WorkoutLog to fetch.
     */
    where?: WorkoutLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkoutLogs to fetch.
     */
    orderBy?: WorkoutLogOrderByWithRelationInput | WorkoutLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkoutLogs.
     */
    cursor?: WorkoutLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkoutLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkoutLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkoutLogs.
     */
    distinct?: WorkoutLogScalarFieldEnum | WorkoutLogScalarFieldEnum[]
  }

  /**
   * WorkoutLog findMany
   */
  export type WorkoutLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutLog
     */
    select?: WorkoutLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutLog
     */
    omit?: WorkoutLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutLogInclude<ExtArgs> | null
    /**
     * Filter, which WorkoutLogs to fetch.
     */
    where?: WorkoutLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkoutLogs to fetch.
     */
    orderBy?: WorkoutLogOrderByWithRelationInput | WorkoutLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WorkoutLogs.
     */
    cursor?: WorkoutLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkoutLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkoutLogs.
     */
    skip?: number
    distinct?: WorkoutLogScalarFieldEnum | WorkoutLogScalarFieldEnum[]
  }

  /**
   * WorkoutLog create
   */
  export type WorkoutLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutLog
     */
    select?: WorkoutLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutLog
     */
    omit?: WorkoutLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutLogInclude<ExtArgs> | null
    /**
     * The data needed to create a WorkoutLog.
     */
    data: XOR<WorkoutLogCreateInput, WorkoutLogUncheckedCreateInput>
  }

  /**
   * WorkoutLog createMany
   */
  export type WorkoutLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WorkoutLogs.
     */
    data: WorkoutLogCreateManyInput | WorkoutLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WorkoutLog createManyAndReturn
   */
  export type WorkoutLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutLog
     */
    select?: WorkoutLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutLog
     */
    omit?: WorkoutLogOmit<ExtArgs> | null
    /**
     * The data used to create many WorkoutLogs.
     */
    data: WorkoutLogCreateManyInput | WorkoutLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WorkoutLog update
   */
  export type WorkoutLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutLog
     */
    select?: WorkoutLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutLog
     */
    omit?: WorkoutLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutLogInclude<ExtArgs> | null
    /**
     * The data needed to update a WorkoutLog.
     */
    data: XOR<WorkoutLogUpdateInput, WorkoutLogUncheckedUpdateInput>
    /**
     * Choose, which WorkoutLog to update.
     */
    where: WorkoutLogWhereUniqueInput
  }

  /**
   * WorkoutLog updateMany
   */
  export type WorkoutLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WorkoutLogs.
     */
    data: XOR<WorkoutLogUpdateManyMutationInput, WorkoutLogUncheckedUpdateManyInput>
    /**
     * Filter which WorkoutLogs to update
     */
    where?: WorkoutLogWhereInput
    /**
     * Limit how many WorkoutLogs to update.
     */
    limit?: number
  }

  /**
   * WorkoutLog updateManyAndReturn
   */
  export type WorkoutLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutLog
     */
    select?: WorkoutLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutLog
     */
    omit?: WorkoutLogOmit<ExtArgs> | null
    /**
     * The data used to update WorkoutLogs.
     */
    data: XOR<WorkoutLogUpdateManyMutationInput, WorkoutLogUncheckedUpdateManyInput>
    /**
     * Filter which WorkoutLogs to update
     */
    where?: WorkoutLogWhereInput
    /**
     * Limit how many WorkoutLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * WorkoutLog upsert
   */
  export type WorkoutLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutLog
     */
    select?: WorkoutLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutLog
     */
    omit?: WorkoutLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutLogInclude<ExtArgs> | null
    /**
     * The filter to search for the WorkoutLog to update in case it exists.
     */
    where: WorkoutLogWhereUniqueInput
    /**
     * In case the WorkoutLog found by the `where` argument doesn't exist, create a new WorkoutLog with this data.
     */
    create: XOR<WorkoutLogCreateInput, WorkoutLogUncheckedCreateInput>
    /**
     * In case the WorkoutLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkoutLogUpdateInput, WorkoutLogUncheckedUpdateInput>
  }

  /**
   * WorkoutLog delete
   */
  export type WorkoutLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutLog
     */
    select?: WorkoutLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutLog
     */
    omit?: WorkoutLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutLogInclude<ExtArgs> | null
    /**
     * Filter which WorkoutLog to delete.
     */
    where: WorkoutLogWhereUniqueInput
  }

  /**
   * WorkoutLog deleteMany
   */
  export type WorkoutLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkoutLogs to delete
     */
    where?: WorkoutLogWhereInput
    /**
     * Limit how many WorkoutLogs to delete.
     */
    limit?: number
  }

  /**
   * WorkoutLog.exerciseLogs
   */
  export type WorkoutLog$exerciseLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseLog
     */
    select?: ExerciseLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExerciseLog
     */
    omit?: ExerciseLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseLogInclude<ExtArgs> | null
    where?: ExerciseLogWhereInput
    orderBy?: ExerciseLogOrderByWithRelationInput | ExerciseLogOrderByWithRelationInput[]
    cursor?: ExerciseLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExerciseLogScalarFieldEnum | ExerciseLogScalarFieldEnum[]
  }

  /**
   * WorkoutLog.user
   */
  export type WorkoutLog$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * WorkoutLog.workout
   */
  export type WorkoutLog$workoutArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workout
     */
    select?: WorkoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workout
     */
    omit?: WorkoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutInclude<ExtArgs> | null
    where?: WorkoutWhereInput
  }

  /**
   * WorkoutLog without action
   */
  export type WorkoutLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutLog
     */
    select?: WorkoutLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutLog
     */
    omit?: WorkoutLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutLogInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    email: 'email',
    name: 'name',
    password: 'password',
    images: 'images'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const WorkoutScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    name: 'name'
  };

  export type WorkoutScalarFieldEnum = (typeof WorkoutScalarFieldEnum)[keyof typeof WorkoutScalarFieldEnum]


  export const ExerciseScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    name: 'name',
    times: 'times',
    iconPath: 'iconPath'
  };

  export type ExerciseScalarFieldEnum = (typeof ExerciseScalarFieldEnum)[keyof typeof ExerciseScalarFieldEnum]


  export const ExerciseLogScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    isCompleted: 'isCompleted',
    userId: 'userId',
    workoutLogId: 'workoutLogId',
    exerciseId: 'exerciseId'
  };

  export type ExerciseLogScalarFieldEnum = (typeof ExerciseLogScalarFieldEnum)[keyof typeof ExerciseLogScalarFieldEnum]


  export const ExerciseTimeScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    weight: 'weight',
    repeat: 'repeat',
    isCompleted: 'isCompleted',
    exerciseLogId: 'exerciseLogId'
  };

  export type ExerciseTimeScalarFieldEnum = (typeof ExerciseTimeScalarFieldEnum)[keyof typeof ExerciseTimeScalarFieldEnum]


  export const WorkoutLogScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    isCompleted: 'isCompleted',
    userId: 'userId',
    workoutId: 'workoutId'
  };

  export type WorkoutLogScalarFieldEnum = (typeof WorkoutLogScalarFieldEnum)[keyof typeof WorkoutLogScalarFieldEnum]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


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


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    email?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    images?: StringNullableListFilter<"User">
    exerciseLogs?: ExerciseLogListRelationFilter
    workoutLogs?: WorkoutLogListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    images?: SortOrder
    exerciseLogs?: ExerciseLogOrderByRelationAggregateInput
    workoutLogs?: WorkoutLogOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    images?: StringNullableListFilter<"User">
    exerciseLogs?: ExerciseLogListRelationFilter
    workoutLogs?: WorkoutLogListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    images?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    images?: StringNullableListFilter<"User">
  }

  export type WorkoutWhereInput = {
    AND?: WorkoutWhereInput | WorkoutWhereInput[]
    OR?: WorkoutWhereInput[]
    NOT?: WorkoutWhereInput | WorkoutWhereInput[]
    id?: IntFilter<"Workout"> | number
    createdAt?: DateTimeFilter<"Workout"> | Date | string
    updatedAt?: DateTimeFilter<"Workout"> | Date | string
    name?: StringFilter<"Workout"> | string
    exercises?: ExerciseListRelationFilter
    workoutLogs?: WorkoutLogListRelationFilter
  }

  export type WorkoutOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    exercises?: ExerciseOrderByRelationAggregateInput
    workoutLogs?: WorkoutLogOrderByRelationAggregateInput
  }

  export type WorkoutWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: WorkoutWhereInput | WorkoutWhereInput[]
    OR?: WorkoutWhereInput[]
    NOT?: WorkoutWhereInput | WorkoutWhereInput[]
    createdAt?: DateTimeFilter<"Workout"> | Date | string
    updatedAt?: DateTimeFilter<"Workout"> | Date | string
    name?: StringFilter<"Workout"> | string
    exercises?: ExerciseListRelationFilter
    workoutLogs?: WorkoutLogListRelationFilter
  }, "id">

  export type WorkoutOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    _count?: WorkoutCountOrderByAggregateInput
    _avg?: WorkoutAvgOrderByAggregateInput
    _max?: WorkoutMaxOrderByAggregateInput
    _min?: WorkoutMinOrderByAggregateInput
    _sum?: WorkoutSumOrderByAggregateInput
  }

  export type WorkoutScalarWhereWithAggregatesInput = {
    AND?: WorkoutScalarWhereWithAggregatesInput | WorkoutScalarWhereWithAggregatesInput[]
    OR?: WorkoutScalarWhereWithAggregatesInput[]
    NOT?: WorkoutScalarWhereWithAggregatesInput | WorkoutScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Workout"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Workout"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Workout"> | Date | string
    name?: StringWithAggregatesFilter<"Workout"> | string
  }

  export type ExerciseWhereInput = {
    AND?: ExerciseWhereInput | ExerciseWhereInput[]
    OR?: ExerciseWhereInput[]
    NOT?: ExerciseWhereInput | ExerciseWhereInput[]
    id?: IntFilter<"Exercise"> | number
    createdAt?: DateTimeFilter<"Exercise"> | Date | string
    updatedAt?: DateTimeFilter<"Exercise"> | Date | string
    name?: StringFilter<"Exercise"> | string
    times?: IntFilter<"Exercise"> | number
    iconPath?: StringFilter<"Exercise"> | string
    workouts?: WorkoutListRelationFilter
    exerciseLogs?: ExerciseLogListRelationFilter
  }

  export type ExerciseOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    times?: SortOrder
    iconPath?: SortOrder
    workouts?: WorkoutOrderByRelationAggregateInput
    exerciseLogs?: ExerciseLogOrderByRelationAggregateInput
  }

  export type ExerciseWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ExerciseWhereInput | ExerciseWhereInput[]
    OR?: ExerciseWhereInput[]
    NOT?: ExerciseWhereInput | ExerciseWhereInput[]
    createdAt?: DateTimeFilter<"Exercise"> | Date | string
    updatedAt?: DateTimeFilter<"Exercise"> | Date | string
    name?: StringFilter<"Exercise"> | string
    times?: IntFilter<"Exercise"> | number
    iconPath?: StringFilter<"Exercise"> | string
    workouts?: WorkoutListRelationFilter
    exerciseLogs?: ExerciseLogListRelationFilter
  }, "id">

  export type ExerciseOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    times?: SortOrder
    iconPath?: SortOrder
    _count?: ExerciseCountOrderByAggregateInput
    _avg?: ExerciseAvgOrderByAggregateInput
    _max?: ExerciseMaxOrderByAggregateInput
    _min?: ExerciseMinOrderByAggregateInput
    _sum?: ExerciseSumOrderByAggregateInput
  }

  export type ExerciseScalarWhereWithAggregatesInput = {
    AND?: ExerciseScalarWhereWithAggregatesInput | ExerciseScalarWhereWithAggregatesInput[]
    OR?: ExerciseScalarWhereWithAggregatesInput[]
    NOT?: ExerciseScalarWhereWithAggregatesInput | ExerciseScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Exercise"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Exercise"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Exercise"> | Date | string
    name?: StringWithAggregatesFilter<"Exercise"> | string
    times?: IntWithAggregatesFilter<"Exercise"> | number
    iconPath?: StringWithAggregatesFilter<"Exercise"> | string
  }

  export type ExerciseLogWhereInput = {
    AND?: ExerciseLogWhereInput | ExerciseLogWhereInput[]
    OR?: ExerciseLogWhereInput[]
    NOT?: ExerciseLogWhereInput | ExerciseLogWhereInput[]
    id?: IntFilter<"ExerciseLog"> | number
    createdAt?: DateTimeFilter<"ExerciseLog"> | Date | string
    updatedAt?: DateTimeFilter<"ExerciseLog"> | Date | string
    isCompleted?: BoolFilter<"ExerciseLog"> | boolean
    userId?: IntNullableFilter<"ExerciseLog"> | number | null
    workoutLogId?: IntNullableFilter<"ExerciseLog"> | number | null
    exerciseId?: IntNullableFilter<"ExerciseLog"> | number | null
    times?: ExerciseTimeListRelationFilter
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    workoutLog?: XOR<WorkoutLogNullableScalarRelationFilter, WorkoutLogWhereInput> | null
    exercise?: XOR<ExerciseNullableScalarRelationFilter, ExerciseWhereInput> | null
  }

  export type ExerciseLogOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isCompleted?: SortOrder
    userId?: SortOrderInput | SortOrder
    workoutLogId?: SortOrderInput | SortOrder
    exerciseId?: SortOrderInput | SortOrder
    times?: ExerciseTimeOrderByRelationAggregateInput
    user?: UserOrderByWithRelationInput
    workoutLog?: WorkoutLogOrderByWithRelationInput
    exercise?: ExerciseOrderByWithRelationInput
  }

  export type ExerciseLogWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ExerciseLogWhereInput | ExerciseLogWhereInput[]
    OR?: ExerciseLogWhereInput[]
    NOT?: ExerciseLogWhereInput | ExerciseLogWhereInput[]
    createdAt?: DateTimeFilter<"ExerciseLog"> | Date | string
    updatedAt?: DateTimeFilter<"ExerciseLog"> | Date | string
    isCompleted?: BoolFilter<"ExerciseLog"> | boolean
    userId?: IntNullableFilter<"ExerciseLog"> | number | null
    workoutLogId?: IntNullableFilter<"ExerciseLog"> | number | null
    exerciseId?: IntNullableFilter<"ExerciseLog"> | number | null
    times?: ExerciseTimeListRelationFilter
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    workoutLog?: XOR<WorkoutLogNullableScalarRelationFilter, WorkoutLogWhereInput> | null
    exercise?: XOR<ExerciseNullableScalarRelationFilter, ExerciseWhereInput> | null
  }, "id">

  export type ExerciseLogOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isCompleted?: SortOrder
    userId?: SortOrderInput | SortOrder
    workoutLogId?: SortOrderInput | SortOrder
    exerciseId?: SortOrderInput | SortOrder
    _count?: ExerciseLogCountOrderByAggregateInput
    _avg?: ExerciseLogAvgOrderByAggregateInput
    _max?: ExerciseLogMaxOrderByAggregateInput
    _min?: ExerciseLogMinOrderByAggregateInput
    _sum?: ExerciseLogSumOrderByAggregateInput
  }

  export type ExerciseLogScalarWhereWithAggregatesInput = {
    AND?: ExerciseLogScalarWhereWithAggregatesInput | ExerciseLogScalarWhereWithAggregatesInput[]
    OR?: ExerciseLogScalarWhereWithAggregatesInput[]
    NOT?: ExerciseLogScalarWhereWithAggregatesInput | ExerciseLogScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ExerciseLog"> | number
    createdAt?: DateTimeWithAggregatesFilter<"ExerciseLog"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ExerciseLog"> | Date | string
    isCompleted?: BoolWithAggregatesFilter<"ExerciseLog"> | boolean
    userId?: IntNullableWithAggregatesFilter<"ExerciseLog"> | number | null
    workoutLogId?: IntNullableWithAggregatesFilter<"ExerciseLog"> | number | null
    exerciseId?: IntNullableWithAggregatesFilter<"ExerciseLog"> | number | null
  }

  export type ExerciseTimeWhereInput = {
    AND?: ExerciseTimeWhereInput | ExerciseTimeWhereInput[]
    OR?: ExerciseTimeWhereInput[]
    NOT?: ExerciseTimeWhereInput | ExerciseTimeWhereInput[]
    id?: IntFilter<"ExerciseTime"> | number
    createdAt?: DateTimeFilter<"ExerciseTime"> | Date | string
    updatedAt?: DateTimeFilter<"ExerciseTime"> | Date | string
    weight?: IntFilter<"ExerciseTime"> | number
    repeat?: IntFilter<"ExerciseTime"> | number
    isCompleted?: BoolFilter<"ExerciseTime"> | boolean
    exerciseLogId?: IntNullableFilter<"ExerciseTime"> | number | null
    exerciseLog?: XOR<ExerciseLogNullableScalarRelationFilter, ExerciseLogWhereInput> | null
  }

  export type ExerciseTimeOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    weight?: SortOrder
    repeat?: SortOrder
    isCompleted?: SortOrder
    exerciseLogId?: SortOrderInput | SortOrder
    exerciseLog?: ExerciseLogOrderByWithRelationInput
  }

  export type ExerciseTimeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ExerciseTimeWhereInput | ExerciseTimeWhereInput[]
    OR?: ExerciseTimeWhereInput[]
    NOT?: ExerciseTimeWhereInput | ExerciseTimeWhereInput[]
    createdAt?: DateTimeFilter<"ExerciseTime"> | Date | string
    updatedAt?: DateTimeFilter<"ExerciseTime"> | Date | string
    weight?: IntFilter<"ExerciseTime"> | number
    repeat?: IntFilter<"ExerciseTime"> | number
    isCompleted?: BoolFilter<"ExerciseTime"> | boolean
    exerciseLogId?: IntNullableFilter<"ExerciseTime"> | number | null
    exerciseLog?: XOR<ExerciseLogNullableScalarRelationFilter, ExerciseLogWhereInput> | null
  }, "id">

  export type ExerciseTimeOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    weight?: SortOrder
    repeat?: SortOrder
    isCompleted?: SortOrder
    exerciseLogId?: SortOrderInput | SortOrder
    _count?: ExerciseTimeCountOrderByAggregateInput
    _avg?: ExerciseTimeAvgOrderByAggregateInput
    _max?: ExerciseTimeMaxOrderByAggregateInput
    _min?: ExerciseTimeMinOrderByAggregateInput
    _sum?: ExerciseTimeSumOrderByAggregateInput
  }

  export type ExerciseTimeScalarWhereWithAggregatesInput = {
    AND?: ExerciseTimeScalarWhereWithAggregatesInput | ExerciseTimeScalarWhereWithAggregatesInput[]
    OR?: ExerciseTimeScalarWhereWithAggregatesInput[]
    NOT?: ExerciseTimeScalarWhereWithAggregatesInput | ExerciseTimeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ExerciseTime"> | number
    createdAt?: DateTimeWithAggregatesFilter<"ExerciseTime"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ExerciseTime"> | Date | string
    weight?: IntWithAggregatesFilter<"ExerciseTime"> | number
    repeat?: IntWithAggregatesFilter<"ExerciseTime"> | number
    isCompleted?: BoolWithAggregatesFilter<"ExerciseTime"> | boolean
    exerciseLogId?: IntNullableWithAggregatesFilter<"ExerciseTime"> | number | null
  }

  export type WorkoutLogWhereInput = {
    AND?: WorkoutLogWhereInput | WorkoutLogWhereInput[]
    OR?: WorkoutLogWhereInput[]
    NOT?: WorkoutLogWhereInput | WorkoutLogWhereInput[]
    id?: IntFilter<"WorkoutLog"> | number
    createdAt?: DateTimeFilter<"WorkoutLog"> | Date | string
    updatedAt?: DateTimeFilter<"WorkoutLog"> | Date | string
    isCompleted?: BoolFilter<"WorkoutLog"> | boolean
    userId?: IntNullableFilter<"WorkoutLog"> | number | null
    workoutId?: IntNullableFilter<"WorkoutLog"> | number | null
    exerciseLogs?: ExerciseLogListRelationFilter
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    workout?: XOR<WorkoutNullableScalarRelationFilter, WorkoutWhereInput> | null
  }

  export type WorkoutLogOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isCompleted?: SortOrder
    userId?: SortOrderInput | SortOrder
    workoutId?: SortOrderInput | SortOrder
    exerciseLogs?: ExerciseLogOrderByRelationAggregateInput
    user?: UserOrderByWithRelationInput
    workout?: WorkoutOrderByWithRelationInput
  }

  export type WorkoutLogWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: WorkoutLogWhereInput | WorkoutLogWhereInput[]
    OR?: WorkoutLogWhereInput[]
    NOT?: WorkoutLogWhereInput | WorkoutLogWhereInput[]
    createdAt?: DateTimeFilter<"WorkoutLog"> | Date | string
    updatedAt?: DateTimeFilter<"WorkoutLog"> | Date | string
    isCompleted?: BoolFilter<"WorkoutLog"> | boolean
    userId?: IntNullableFilter<"WorkoutLog"> | number | null
    workoutId?: IntNullableFilter<"WorkoutLog"> | number | null
    exerciseLogs?: ExerciseLogListRelationFilter
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    workout?: XOR<WorkoutNullableScalarRelationFilter, WorkoutWhereInput> | null
  }, "id">

  export type WorkoutLogOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isCompleted?: SortOrder
    userId?: SortOrderInput | SortOrder
    workoutId?: SortOrderInput | SortOrder
    _count?: WorkoutLogCountOrderByAggregateInput
    _avg?: WorkoutLogAvgOrderByAggregateInput
    _max?: WorkoutLogMaxOrderByAggregateInput
    _min?: WorkoutLogMinOrderByAggregateInput
    _sum?: WorkoutLogSumOrderByAggregateInput
  }

  export type WorkoutLogScalarWhereWithAggregatesInput = {
    AND?: WorkoutLogScalarWhereWithAggregatesInput | WorkoutLogScalarWhereWithAggregatesInput[]
    OR?: WorkoutLogScalarWhereWithAggregatesInput[]
    NOT?: WorkoutLogScalarWhereWithAggregatesInput | WorkoutLogScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"WorkoutLog"> | number
    createdAt?: DateTimeWithAggregatesFilter<"WorkoutLog"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"WorkoutLog"> | Date | string
    isCompleted?: BoolWithAggregatesFilter<"WorkoutLog"> | boolean
    userId?: IntNullableWithAggregatesFilter<"WorkoutLog"> | number | null
    workoutId?: IntNullableWithAggregatesFilter<"WorkoutLog"> | number | null
  }

  export type UserCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    name: string
    password: string
    images?: UserCreateimagesInput | string[]
    exerciseLogs?: ExerciseLogCreateNestedManyWithoutUserInput
    workoutLogs?: WorkoutLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    name: string
    password: string
    images?: UserCreateimagesInput | string[]
    exerciseLogs?: ExerciseLogUncheckedCreateNestedManyWithoutUserInput
    workoutLogs?: WorkoutLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    images?: UserUpdateimagesInput | string[]
    exerciseLogs?: ExerciseLogUpdateManyWithoutUserNestedInput
    workoutLogs?: WorkoutLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    images?: UserUpdateimagesInput | string[]
    exerciseLogs?: ExerciseLogUncheckedUpdateManyWithoutUserNestedInput
    workoutLogs?: WorkoutLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    name: string
    password: string
    images?: UserCreateimagesInput | string[]
  }

  export type UserUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    images?: UserUpdateimagesInput | string[]
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    images?: UserUpdateimagesInput | string[]
  }

  export type WorkoutCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    exercises?: ExerciseCreateNestedManyWithoutWorkoutsInput
    workoutLogs?: WorkoutLogCreateNestedManyWithoutWorkoutInput
  }

  export type WorkoutUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    exercises?: ExerciseUncheckedCreateNestedManyWithoutWorkoutsInput
    workoutLogs?: WorkoutLogUncheckedCreateNestedManyWithoutWorkoutInput
  }

  export type WorkoutUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    exercises?: ExerciseUpdateManyWithoutWorkoutsNestedInput
    workoutLogs?: WorkoutLogUpdateManyWithoutWorkoutNestedInput
  }

  export type WorkoutUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    exercises?: ExerciseUncheckedUpdateManyWithoutWorkoutsNestedInput
    workoutLogs?: WorkoutLogUncheckedUpdateManyWithoutWorkoutNestedInput
  }

  export type WorkoutCreateManyInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
  }

  export type WorkoutUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type WorkoutUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ExerciseCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    times: number
    iconPath: string
    workouts?: WorkoutCreateNestedManyWithoutExercisesInput
    exerciseLogs?: ExerciseLogCreateNestedManyWithoutExerciseInput
  }

  export type ExerciseUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    times: number
    iconPath: string
    workouts?: WorkoutUncheckedCreateNestedManyWithoutExercisesInput
    exerciseLogs?: ExerciseLogUncheckedCreateNestedManyWithoutExerciseInput
  }

  export type ExerciseUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    times?: IntFieldUpdateOperationsInput | number
    iconPath?: StringFieldUpdateOperationsInput | string
    workouts?: WorkoutUpdateManyWithoutExercisesNestedInput
    exerciseLogs?: ExerciseLogUpdateManyWithoutExerciseNestedInput
  }

  export type ExerciseUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    times?: IntFieldUpdateOperationsInput | number
    iconPath?: StringFieldUpdateOperationsInput | string
    workouts?: WorkoutUncheckedUpdateManyWithoutExercisesNestedInput
    exerciseLogs?: ExerciseLogUncheckedUpdateManyWithoutExerciseNestedInput
  }

  export type ExerciseCreateManyInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    times: number
    iconPath: string
  }

  export type ExerciseUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    times?: IntFieldUpdateOperationsInput | number
    iconPath?: StringFieldUpdateOperationsInput | string
  }

  export type ExerciseUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    times?: IntFieldUpdateOperationsInput | number
    iconPath?: StringFieldUpdateOperationsInput | string
  }

  export type ExerciseLogCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    isCompleted?: boolean
    times?: ExerciseTimeCreateNestedManyWithoutExerciseLogInput
    user?: UserCreateNestedOneWithoutExerciseLogsInput
    workoutLog?: WorkoutLogCreateNestedOneWithoutExerciseLogsInput
    exercise?: ExerciseCreateNestedOneWithoutExerciseLogsInput
  }

  export type ExerciseLogUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    isCompleted?: boolean
    userId?: number | null
    workoutLogId?: number | null
    exerciseId?: number | null
    times?: ExerciseTimeUncheckedCreateNestedManyWithoutExerciseLogInput
  }

  export type ExerciseLogUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    times?: ExerciseTimeUpdateManyWithoutExerciseLogNestedInput
    user?: UserUpdateOneWithoutExerciseLogsNestedInput
    workoutLog?: WorkoutLogUpdateOneWithoutExerciseLogsNestedInput
    exercise?: ExerciseUpdateOneWithoutExerciseLogsNestedInput
  }

  export type ExerciseLogUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    workoutLogId?: NullableIntFieldUpdateOperationsInput | number | null
    exerciseId?: NullableIntFieldUpdateOperationsInput | number | null
    times?: ExerciseTimeUncheckedUpdateManyWithoutExerciseLogNestedInput
  }

  export type ExerciseLogCreateManyInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    isCompleted?: boolean
    userId?: number | null
    workoutLogId?: number | null
    exerciseId?: number | null
  }

  export type ExerciseLogUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ExerciseLogUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    workoutLogId?: NullableIntFieldUpdateOperationsInput | number | null
    exerciseId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ExerciseTimeCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    weight?: number
    repeat?: number
    isCompleted?: boolean
    exerciseLog?: ExerciseLogCreateNestedOneWithoutTimesInput
  }

  export type ExerciseTimeUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    weight?: number
    repeat?: number
    isCompleted?: boolean
    exerciseLogId?: number | null
  }

  export type ExerciseTimeUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    weight?: IntFieldUpdateOperationsInput | number
    repeat?: IntFieldUpdateOperationsInput | number
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    exerciseLog?: ExerciseLogUpdateOneWithoutTimesNestedInput
  }

  export type ExerciseTimeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    weight?: IntFieldUpdateOperationsInput | number
    repeat?: IntFieldUpdateOperationsInput | number
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    exerciseLogId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ExerciseTimeCreateManyInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    weight?: number
    repeat?: number
    isCompleted?: boolean
    exerciseLogId?: number | null
  }

  export type ExerciseTimeUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    weight?: IntFieldUpdateOperationsInput | number
    repeat?: IntFieldUpdateOperationsInput | number
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ExerciseTimeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    weight?: IntFieldUpdateOperationsInput | number
    repeat?: IntFieldUpdateOperationsInput | number
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    exerciseLogId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type WorkoutLogCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    isCompleted?: boolean
    exerciseLogs?: ExerciseLogCreateNestedManyWithoutWorkoutLogInput
    user?: UserCreateNestedOneWithoutWorkoutLogsInput
    workout?: WorkoutCreateNestedOneWithoutWorkoutLogsInput
  }

  export type WorkoutLogUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    isCompleted?: boolean
    userId?: number | null
    workoutId?: number | null
    exerciseLogs?: ExerciseLogUncheckedCreateNestedManyWithoutWorkoutLogInput
  }

  export type WorkoutLogUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    exerciseLogs?: ExerciseLogUpdateManyWithoutWorkoutLogNestedInput
    user?: UserUpdateOneWithoutWorkoutLogsNestedInput
    workout?: WorkoutUpdateOneWithoutWorkoutLogsNestedInput
  }

  export type WorkoutLogUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    workoutId?: NullableIntFieldUpdateOperationsInput | number | null
    exerciseLogs?: ExerciseLogUncheckedUpdateManyWithoutWorkoutLogNestedInput
  }

  export type WorkoutLogCreateManyInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    isCompleted?: boolean
    userId?: number | null
    workoutId?: number | null
  }

  export type WorkoutLogUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type WorkoutLogUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    workoutId?: NullableIntFieldUpdateOperationsInput | number | null
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

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type ExerciseLogListRelationFilter = {
    every?: ExerciseLogWhereInput
    some?: ExerciseLogWhereInput
    none?: ExerciseLogWhereInput
  }

  export type WorkoutLogListRelationFilter = {
    every?: WorkoutLogWhereInput
    some?: WorkoutLogWhereInput
    none?: WorkoutLogWhereInput
  }

  export type ExerciseLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WorkoutLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    images?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
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

  export type ExerciseListRelationFilter = {
    every?: ExerciseWhereInput
    some?: ExerciseWhereInput
    none?: ExerciseWhereInput
  }

  export type ExerciseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WorkoutCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
  }

  export type WorkoutAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type WorkoutMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
  }

  export type WorkoutMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
  }

  export type WorkoutSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type WorkoutListRelationFilter = {
    every?: WorkoutWhereInput
    some?: WorkoutWhereInput
    none?: WorkoutWhereInput
  }

  export type WorkoutOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ExerciseCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    times?: SortOrder
    iconPath?: SortOrder
  }

  export type ExerciseAvgOrderByAggregateInput = {
    id?: SortOrder
    times?: SortOrder
  }

  export type ExerciseMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    times?: SortOrder
    iconPath?: SortOrder
  }

  export type ExerciseMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    times?: SortOrder
    iconPath?: SortOrder
  }

  export type ExerciseSumOrderByAggregateInput = {
    id?: SortOrder
    times?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type ExerciseTimeListRelationFilter = {
    every?: ExerciseTimeWhereInput
    some?: ExerciseTimeWhereInput
    none?: ExerciseTimeWhereInput
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type WorkoutLogNullableScalarRelationFilter = {
    is?: WorkoutLogWhereInput | null
    isNot?: WorkoutLogWhereInput | null
  }

  export type ExerciseNullableScalarRelationFilter = {
    is?: ExerciseWhereInput | null
    isNot?: ExerciseWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ExerciseTimeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ExerciseLogCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isCompleted?: SortOrder
    userId?: SortOrder
    workoutLogId?: SortOrder
    exerciseId?: SortOrder
  }

  export type ExerciseLogAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    workoutLogId?: SortOrder
    exerciseId?: SortOrder
  }

  export type ExerciseLogMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isCompleted?: SortOrder
    userId?: SortOrder
    workoutLogId?: SortOrder
    exerciseId?: SortOrder
  }

  export type ExerciseLogMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isCompleted?: SortOrder
    userId?: SortOrder
    workoutLogId?: SortOrder
    exerciseId?: SortOrder
  }

  export type ExerciseLogSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    workoutLogId?: SortOrder
    exerciseId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type ExerciseLogNullableScalarRelationFilter = {
    is?: ExerciseLogWhereInput | null
    isNot?: ExerciseLogWhereInput | null
  }

  export type ExerciseTimeCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    weight?: SortOrder
    repeat?: SortOrder
    isCompleted?: SortOrder
    exerciseLogId?: SortOrder
  }

  export type ExerciseTimeAvgOrderByAggregateInput = {
    id?: SortOrder
    weight?: SortOrder
    repeat?: SortOrder
    exerciseLogId?: SortOrder
  }

  export type ExerciseTimeMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    weight?: SortOrder
    repeat?: SortOrder
    isCompleted?: SortOrder
    exerciseLogId?: SortOrder
  }

  export type ExerciseTimeMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    weight?: SortOrder
    repeat?: SortOrder
    isCompleted?: SortOrder
    exerciseLogId?: SortOrder
  }

  export type ExerciseTimeSumOrderByAggregateInput = {
    id?: SortOrder
    weight?: SortOrder
    repeat?: SortOrder
    exerciseLogId?: SortOrder
  }

  export type WorkoutNullableScalarRelationFilter = {
    is?: WorkoutWhereInput | null
    isNot?: WorkoutWhereInput | null
  }

  export type WorkoutLogCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isCompleted?: SortOrder
    userId?: SortOrder
    workoutId?: SortOrder
  }

  export type WorkoutLogAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    workoutId?: SortOrder
  }

  export type WorkoutLogMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isCompleted?: SortOrder
    userId?: SortOrder
    workoutId?: SortOrder
  }

  export type WorkoutLogMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isCompleted?: SortOrder
    userId?: SortOrder
    workoutId?: SortOrder
  }

  export type WorkoutLogSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    workoutId?: SortOrder
  }

  export type UserCreateimagesInput = {
    set: string[]
  }

  export type ExerciseLogCreateNestedManyWithoutUserInput = {
    create?: XOR<ExerciseLogCreateWithoutUserInput, ExerciseLogUncheckedCreateWithoutUserInput> | ExerciseLogCreateWithoutUserInput[] | ExerciseLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ExerciseLogCreateOrConnectWithoutUserInput | ExerciseLogCreateOrConnectWithoutUserInput[]
    createMany?: ExerciseLogCreateManyUserInputEnvelope
    connect?: ExerciseLogWhereUniqueInput | ExerciseLogWhereUniqueInput[]
  }

  export type WorkoutLogCreateNestedManyWithoutUserInput = {
    create?: XOR<WorkoutLogCreateWithoutUserInput, WorkoutLogUncheckedCreateWithoutUserInput> | WorkoutLogCreateWithoutUserInput[] | WorkoutLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WorkoutLogCreateOrConnectWithoutUserInput | WorkoutLogCreateOrConnectWithoutUserInput[]
    createMany?: WorkoutLogCreateManyUserInputEnvelope
    connect?: WorkoutLogWhereUniqueInput | WorkoutLogWhereUniqueInput[]
  }

  export type ExerciseLogUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ExerciseLogCreateWithoutUserInput, ExerciseLogUncheckedCreateWithoutUserInput> | ExerciseLogCreateWithoutUserInput[] | ExerciseLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ExerciseLogCreateOrConnectWithoutUserInput | ExerciseLogCreateOrConnectWithoutUserInput[]
    createMany?: ExerciseLogCreateManyUserInputEnvelope
    connect?: ExerciseLogWhereUniqueInput | ExerciseLogWhereUniqueInput[]
  }

  export type WorkoutLogUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<WorkoutLogCreateWithoutUserInput, WorkoutLogUncheckedCreateWithoutUserInput> | WorkoutLogCreateWithoutUserInput[] | WorkoutLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WorkoutLogCreateOrConnectWithoutUserInput | WorkoutLogCreateOrConnectWithoutUserInput[]
    createMany?: WorkoutLogCreateManyUserInputEnvelope
    connect?: WorkoutLogWhereUniqueInput | WorkoutLogWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type UserUpdateimagesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type ExerciseLogUpdateManyWithoutUserNestedInput = {
    create?: XOR<ExerciseLogCreateWithoutUserInput, ExerciseLogUncheckedCreateWithoutUserInput> | ExerciseLogCreateWithoutUserInput[] | ExerciseLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ExerciseLogCreateOrConnectWithoutUserInput | ExerciseLogCreateOrConnectWithoutUserInput[]
    upsert?: ExerciseLogUpsertWithWhereUniqueWithoutUserInput | ExerciseLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ExerciseLogCreateManyUserInputEnvelope
    set?: ExerciseLogWhereUniqueInput | ExerciseLogWhereUniqueInput[]
    disconnect?: ExerciseLogWhereUniqueInput | ExerciseLogWhereUniqueInput[]
    delete?: ExerciseLogWhereUniqueInput | ExerciseLogWhereUniqueInput[]
    connect?: ExerciseLogWhereUniqueInput | ExerciseLogWhereUniqueInput[]
    update?: ExerciseLogUpdateWithWhereUniqueWithoutUserInput | ExerciseLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ExerciseLogUpdateManyWithWhereWithoutUserInput | ExerciseLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ExerciseLogScalarWhereInput | ExerciseLogScalarWhereInput[]
  }

  export type WorkoutLogUpdateManyWithoutUserNestedInput = {
    create?: XOR<WorkoutLogCreateWithoutUserInput, WorkoutLogUncheckedCreateWithoutUserInput> | WorkoutLogCreateWithoutUserInput[] | WorkoutLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WorkoutLogCreateOrConnectWithoutUserInput | WorkoutLogCreateOrConnectWithoutUserInput[]
    upsert?: WorkoutLogUpsertWithWhereUniqueWithoutUserInput | WorkoutLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WorkoutLogCreateManyUserInputEnvelope
    set?: WorkoutLogWhereUniqueInput | WorkoutLogWhereUniqueInput[]
    disconnect?: WorkoutLogWhereUniqueInput | WorkoutLogWhereUniqueInput[]
    delete?: WorkoutLogWhereUniqueInput | WorkoutLogWhereUniqueInput[]
    connect?: WorkoutLogWhereUniqueInput | WorkoutLogWhereUniqueInput[]
    update?: WorkoutLogUpdateWithWhereUniqueWithoutUserInput | WorkoutLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WorkoutLogUpdateManyWithWhereWithoutUserInput | WorkoutLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WorkoutLogScalarWhereInput | WorkoutLogScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ExerciseLogUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ExerciseLogCreateWithoutUserInput, ExerciseLogUncheckedCreateWithoutUserInput> | ExerciseLogCreateWithoutUserInput[] | ExerciseLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ExerciseLogCreateOrConnectWithoutUserInput | ExerciseLogCreateOrConnectWithoutUserInput[]
    upsert?: ExerciseLogUpsertWithWhereUniqueWithoutUserInput | ExerciseLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ExerciseLogCreateManyUserInputEnvelope
    set?: ExerciseLogWhereUniqueInput | ExerciseLogWhereUniqueInput[]
    disconnect?: ExerciseLogWhereUniqueInput | ExerciseLogWhereUniqueInput[]
    delete?: ExerciseLogWhereUniqueInput | ExerciseLogWhereUniqueInput[]
    connect?: ExerciseLogWhereUniqueInput | ExerciseLogWhereUniqueInput[]
    update?: ExerciseLogUpdateWithWhereUniqueWithoutUserInput | ExerciseLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ExerciseLogUpdateManyWithWhereWithoutUserInput | ExerciseLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ExerciseLogScalarWhereInput | ExerciseLogScalarWhereInput[]
  }

  export type WorkoutLogUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<WorkoutLogCreateWithoutUserInput, WorkoutLogUncheckedCreateWithoutUserInput> | WorkoutLogCreateWithoutUserInput[] | WorkoutLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WorkoutLogCreateOrConnectWithoutUserInput | WorkoutLogCreateOrConnectWithoutUserInput[]
    upsert?: WorkoutLogUpsertWithWhereUniqueWithoutUserInput | WorkoutLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WorkoutLogCreateManyUserInputEnvelope
    set?: WorkoutLogWhereUniqueInput | WorkoutLogWhereUniqueInput[]
    disconnect?: WorkoutLogWhereUniqueInput | WorkoutLogWhereUniqueInput[]
    delete?: WorkoutLogWhereUniqueInput | WorkoutLogWhereUniqueInput[]
    connect?: WorkoutLogWhereUniqueInput | WorkoutLogWhereUniqueInput[]
    update?: WorkoutLogUpdateWithWhereUniqueWithoutUserInput | WorkoutLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WorkoutLogUpdateManyWithWhereWithoutUserInput | WorkoutLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WorkoutLogScalarWhereInput | WorkoutLogScalarWhereInput[]
  }

  export type ExerciseCreateNestedManyWithoutWorkoutsInput = {
    create?: XOR<ExerciseCreateWithoutWorkoutsInput, ExerciseUncheckedCreateWithoutWorkoutsInput> | ExerciseCreateWithoutWorkoutsInput[] | ExerciseUncheckedCreateWithoutWorkoutsInput[]
    connectOrCreate?: ExerciseCreateOrConnectWithoutWorkoutsInput | ExerciseCreateOrConnectWithoutWorkoutsInput[]
    connect?: ExerciseWhereUniqueInput | ExerciseWhereUniqueInput[]
  }

  export type WorkoutLogCreateNestedManyWithoutWorkoutInput = {
    create?: XOR<WorkoutLogCreateWithoutWorkoutInput, WorkoutLogUncheckedCreateWithoutWorkoutInput> | WorkoutLogCreateWithoutWorkoutInput[] | WorkoutLogUncheckedCreateWithoutWorkoutInput[]
    connectOrCreate?: WorkoutLogCreateOrConnectWithoutWorkoutInput | WorkoutLogCreateOrConnectWithoutWorkoutInput[]
    createMany?: WorkoutLogCreateManyWorkoutInputEnvelope
    connect?: WorkoutLogWhereUniqueInput | WorkoutLogWhereUniqueInput[]
  }

  export type ExerciseUncheckedCreateNestedManyWithoutWorkoutsInput = {
    create?: XOR<ExerciseCreateWithoutWorkoutsInput, ExerciseUncheckedCreateWithoutWorkoutsInput> | ExerciseCreateWithoutWorkoutsInput[] | ExerciseUncheckedCreateWithoutWorkoutsInput[]
    connectOrCreate?: ExerciseCreateOrConnectWithoutWorkoutsInput | ExerciseCreateOrConnectWithoutWorkoutsInput[]
    connect?: ExerciseWhereUniqueInput | ExerciseWhereUniqueInput[]
  }

  export type WorkoutLogUncheckedCreateNestedManyWithoutWorkoutInput = {
    create?: XOR<WorkoutLogCreateWithoutWorkoutInput, WorkoutLogUncheckedCreateWithoutWorkoutInput> | WorkoutLogCreateWithoutWorkoutInput[] | WorkoutLogUncheckedCreateWithoutWorkoutInput[]
    connectOrCreate?: WorkoutLogCreateOrConnectWithoutWorkoutInput | WorkoutLogCreateOrConnectWithoutWorkoutInput[]
    createMany?: WorkoutLogCreateManyWorkoutInputEnvelope
    connect?: WorkoutLogWhereUniqueInput | WorkoutLogWhereUniqueInput[]
  }

  export type ExerciseUpdateManyWithoutWorkoutsNestedInput = {
    create?: XOR<ExerciseCreateWithoutWorkoutsInput, ExerciseUncheckedCreateWithoutWorkoutsInput> | ExerciseCreateWithoutWorkoutsInput[] | ExerciseUncheckedCreateWithoutWorkoutsInput[]
    connectOrCreate?: ExerciseCreateOrConnectWithoutWorkoutsInput | ExerciseCreateOrConnectWithoutWorkoutsInput[]
    upsert?: ExerciseUpsertWithWhereUniqueWithoutWorkoutsInput | ExerciseUpsertWithWhereUniqueWithoutWorkoutsInput[]
    set?: ExerciseWhereUniqueInput | ExerciseWhereUniqueInput[]
    disconnect?: ExerciseWhereUniqueInput | ExerciseWhereUniqueInput[]
    delete?: ExerciseWhereUniqueInput | ExerciseWhereUniqueInput[]
    connect?: ExerciseWhereUniqueInput | ExerciseWhereUniqueInput[]
    update?: ExerciseUpdateWithWhereUniqueWithoutWorkoutsInput | ExerciseUpdateWithWhereUniqueWithoutWorkoutsInput[]
    updateMany?: ExerciseUpdateManyWithWhereWithoutWorkoutsInput | ExerciseUpdateManyWithWhereWithoutWorkoutsInput[]
    deleteMany?: ExerciseScalarWhereInput | ExerciseScalarWhereInput[]
  }

  export type WorkoutLogUpdateManyWithoutWorkoutNestedInput = {
    create?: XOR<WorkoutLogCreateWithoutWorkoutInput, WorkoutLogUncheckedCreateWithoutWorkoutInput> | WorkoutLogCreateWithoutWorkoutInput[] | WorkoutLogUncheckedCreateWithoutWorkoutInput[]
    connectOrCreate?: WorkoutLogCreateOrConnectWithoutWorkoutInput | WorkoutLogCreateOrConnectWithoutWorkoutInput[]
    upsert?: WorkoutLogUpsertWithWhereUniqueWithoutWorkoutInput | WorkoutLogUpsertWithWhereUniqueWithoutWorkoutInput[]
    createMany?: WorkoutLogCreateManyWorkoutInputEnvelope
    set?: WorkoutLogWhereUniqueInput | WorkoutLogWhereUniqueInput[]
    disconnect?: WorkoutLogWhereUniqueInput | WorkoutLogWhereUniqueInput[]
    delete?: WorkoutLogWhereUniqueInput | WorkoutLogWhereUniqueInput[]
    connect?: WorkoutLogWhereUniqueInput | WorkoutLogWhereUniqueInput[]
    update?: WorkoutLogUpdateWithWhereUniqueWithoutWorkoutInput | WorkoutLogUpdateWithWhereUniqueWithoutWorkoutInput[]
    updateMany?: WorkoutLogUpdateManyWithWhereWithoutWorkoutInput | WorkoutLogUpdateManyWithWhereWithoutWorkoutInput[]
    deleteMany?: WorkoutLogScalarWhereInput | WorkoutLogScalarWhereInput[]
  }

  export type ExerciseUncheckedUpdateManyWithoutWorkoutsNestedInput = {
    create?: XOR<ExerciseCreateWithoutWorkoutsInput, ExerciseUncheckedCreateWithoutWorkoutsInput> | ExerciseCreateWithoutWorkoutsInput[] | ExerciseUncheckedCreateWithoutWorkoutsInput[]
    connectOrCreate?: ExerciseCreateOrConnectWithoutWorkoutsInput | ExerciseCreateOrConnectWithoutWorkoutsInput[]
    upsert?: ExerciseUpsertWithWhereUniqueWithoutWorkoutsInput | ExerciseUpsertWithWhereUniqueWithoutWorkoutsInput[]
    set?: ExerciseWhereUniqueInput | ExerciseWhereUniqueInput[]
    disconnect?: ExerciseWhereUniqueInput | ExerciseWhereUniqueInput[]
    delete?: ExerciseWhereUniqueInput | ExerciseWhereUniqueInput[]
    connect?: ExerciseWhereUniqueInput | ExerciseWhereUniqueInput[]
    update?: ExerciseUpdateWithWhereUniqueWithoutWorkoutsInput | ExerciseUpdateWithWhereUniqueWithoutWorkoutsInput[]
    updateMany?: ExerciseUpdateManyWithWhereWithoutWorkoutsInput | ExerciseUpdateManyWithWhereWithoutWorkoutsInput[]
    deleteMany?: ExerciseScalarWhereInput | ExerciseScalarWhereInput[]
  }

  export type WorkoutLogUncheckedUpdateManyWithoutWorkoutNestedInput = {
    create?: XOR<WorkoutLogCreateWithoutWorkoutInput, WorkoutLogUncheckedCreateWithoutWorkoutInput> | WorkoutLogCreateWithoutWorkoutInput[] | WorkoutLogUncheckedCreateWithoutWorkoutInput[]
    connectOrCreate?: WorkoutLogCreateOrConnectWithoutWorkoutInput | WorkoutLogCreateOrConnectWithoutWorkoutInput[]
    upsert?: WorkoutLogUpsertWithWhereUniqueWithoutWorkoutInput | WorkoutLogUpsertWithWhereUniqueWithoutWorkoutInput[]
    createMany?: WorkoutLogCreateManyWorkoutInputEnvelope
    set?: WorkoutLogWhereUniqueInput | WorkoutLogWhereUniqueInput[]
    disconnect?: WorkoutLogWhereUniqueInput | WorkoutLogWhereUniqueInput[]
    delete?: WorkoutLogWhereUniqueInput | WorkoutLogWhereUniqueInput[]
    connect?: WorkoutLogWhereUniqueInput | WorkoutLogWhereUniqueInput[]
    update?: WorkoutLogUpdateWithWhereUniqueWithoutWorkoutInput | WorkoutLogUpdateWithWhereUniqueWithoutWorkoutInput[]
    updateMany?: WorkoutLogUpdateManyWithWhereWithoutWorkoutInput | WorkoutLogUpdateManyWithWhereWithoutWorkoutInput[]
    deleteMany?: WorkoutLogScalarWhereInput | WorkoutLogScalarWhereInput[]
  }

  export type WorkoutCreateNestedManyWithoutExercisesInput = {
    create?: XOR<WorkoutCreateWithoutExercisesInput, WorkoutUncheckedCreateWithoutExercisesInput> | WorkoutCreateWithoutExercisesInput[] | WorkoutUncheckedCreateWithoutExercisesInput[]
    connectOrCreate?: WorkoutCreateOrConnectWithoutExercisesInput | WorkoutCreateOrConnectWithoutExercisesInput[]
    connect?: WorkoutWhereUniqueInput | WorkoutWhereUniqueInput[]
  }

  export type ExerciseLogCreateNestedManyWithoutExerciseInput = {
    create?: XOR<ExerciseLogCreateWithoutExerciseInput, ExerciseLogUncheckedCreateWithoutExerciseInput> | ExerciseLogCreateWithoutExerciseInput[] | ExerciseLogUncheckedCreateWithoutExerciseInput[]
    connectOrCreate?: ExerciseLogCreateOrConnectWithoutExerciseInput | ExerciseLogCreateOrConnectWithoutExerciseInput[]
    createMany?: ExerciseLogCreateManyExerciseInputEnvelope
    connect?: ExerciseLogWhereUniqueInput | ExerciseLogWhereUniqueInput[]
  }

  export type WorkoutUncheckedCreateNestedManyWithoutExercisesInput = {
    create?: XOR<WorkoutCreateWithoutExercisesInput, WorkoutUncheckedCreateWithoutExercisesInput> | WorkoutCreateWithoutExercisesInput[] | WorkoutUncheckedCreateWithoutExercisesInput[]
    connectOrCreate?: WorkoutCreateOrConnectWithoutExercisesInput | WorkoutCreateOrConnectWithoutExercisesInput[]
    connect?: WorkoutWhereUniqueInput | WorkoutWhereUniqueInput[]
  }

  export type ExerciseLogUncheckedCreateNestedManyWithoutExerciseInput = {
    create?: XOR<ExerciseLogCreateWithoutExerciseInput, ExerciseLogUncheckedCreateWithoutExerciseInput> | ExerciseLogCreateWithoutExerciseInput[] | ExerciseLogUncheckedCreateWithoutExerciseInput[]
    connectOrCreate?: ExerciseLogCreateOrConnectWithoutExerciseInput | ExerciseLogCreateOrConnectWithoutExerciseInput[]
    createMany?: ExerciseLogCreateManyExerciseInputEnvelope
    connect?: ExerciseLogWhereUniqueInput | ExerciseLogWhereUniqueInput[]
  }

  export type WorkoutUpdateManyWithoutExercisesNestedInput = {
    create?: XOR<WorkoutCreateWithoutExercisesInput, WorkoutUncheckedCreateWithoutExercisesInput> | WorkoutCreateWithoutExercisesInput[] | WorkoutUncheckedCreateWithoutExercisesInput[]
    connectOrCreate?: WorkoutCreateOrConnectWithoutExercisesInput | WorkoutCreateOrConnectWithoutExercisesInput[]
    upsert?: WorkoutUpsertWithWhereUniqueWithoutExercisesInput | WorkoutUpsertWithWhereUniqueWithoutExercisesInput[]
    set?: WorkoutWhereUniqueInput | WorkoutWhereUniqueInput[]
    disconnect?: WorkoutWhereUniqueInput | WorkoutWhereUniqueInput[]
    delete?: WorkoutWhereUniqueInput | WorkoutWhereUniqueInput[]
    connect?: WorkoutWhereUniqueInput | WorkoutWhereUniqueInput[]
    update?: WorkoutUpdateWithWhereUniqueWithoutExercisesInput | WorkoutUpdateWithWhereUniqueWithoutExercisesInput[]
    updateMany?: WorkoutUpdateManyWithWhereWithoutExercisesInput | WorkoutUpdateManyWithWhereWithoutExercisesInput[]
    deleteMany?: WorkoutScalarWhereInput | WorkoutScalarWhereInput[]
  }

  export type ExerciseLogUpdateManyWithoutExerciseNestedInput = {
    create?: XOR<ExerciseLogCreateWithoutExerciseInput, ExerciseLogUncheckedCreateWithoutExerciseInput> | ExerciseLogCreateWithoutExerciseInput[] | ExerciseLogUncheckedCreateWithoutExerciseInput[]
    connectOrCreate?: ExerciseLogCreateOrConnectWithoutExerciseInput | ExerciseLogCreateOrConnectWithoutExerciseInput[]
    upsert?: ExerciseLogUpsertWithWhereUniqueWithoutExerciseInput | ExerciseLogUpsertWithWhereUniqueWithoutExerciseInput[]
    createMany?: ExerciseLogCreateManyExerciseInputEnvelope
    set?: ExerciseLogWhereUniqueInput | ExerciseLogWhereUniqueInput[]
    disconnect?: ExerciseLogWhereUniqueInput | ExerciseLogWhereUniqueInput[]
    delete?: ExerciseLogWhereUniqueInput | ExerciseLogWhereUniqueInput[]
    connect?: ExerciseLogWhereUniqueInput | ExerciseLogWhereUniqueInput[]
    update?: ExerciseLogUpdateWithWhereUniqueWithoutExerciseInput | ExerciseLogUpdateWithWhereUniqueWithoutExerciseInput[]
    updateMany?: ExerciseLogUpdateManyWithWhereWithoutExerciseInput | ExerciseLogUpdateManyWithWhereWithoutExerciseInput[]
    deleteMany?: ExerciseLogScalarWhereInput | ExerciseLogScalarWhereInput[]
  }

  export type WorkoutUncheckedUpdateManyWithoutExercisesNestedInput = {
    create?: XOR<WorkoutCreateWithoutExercisesInput, WorkoutUncheckedCreateWithoutExercisesInput> | WorkoutCreateWithoutExercisesInput[] | WorkoutUncheckedCreateWithoutExercisesInput[]
    connectOrCreate?: WorkoutCreateOrConnectWithoutExercisesInput | WorkoutCreateOrConnectWithoutExercisesInput[]
    upsert?: WorkoutUpsertWithWhereUniqueWithoutExercisesInput | WorkoutUpsertWithWhereUniqueWithoutExercisesInput[]
    set?: WorkoutWhereUniqueInput | WorkoutWhereUniqueInput[]
    disconnect?: WorkoutWhereUniqueInput | WorkoutWhereUniqueInput[]
    delete?: WorkoutWhereUniqueInput | WorkoutWhereUniqueInput[]
    connect?: WorkoutWhereUniqueInput | WorkoutWhereUniqueInput[]
    update?: WorkoutUpdateWithWhereUniqueWithoutExercisesInput | WorkoutUpdateWithWhereUniqueWithoutExercisesInput[]
    updateMany?: WorkoutUpdateManyWithWhereWithoutExercisesInput | WorkoutUpdateManyWithWhereWithoutExercisesInput[]
    deleteMany?: WorkoutScalarWhereInput | WorkoutScalarWhereInput[]
  }

  export type ExerciseLogUncheckedUpdateManyWithoutExerciseNestedInput = {
    create?: XOR<ExerciseLogCreateWithoutExerciseInput, ExerciseLogUncheckedCreateWithoutExerciseInput> | ExerciseLogCreateWithoutExerciseInput[] | ExerciseLogUncheckedCreateWithoutExerciseInput[]
    connectOrCreate?: ExerciseLogCreateOrConnectWithoutExerciseInput | ExerciseLogCreateOrConnectWithoutExerciseInput[]
    upsert?: ExerciseLogUpsertWithWhereUniqueWithoutExerciseInput | ExerciseLogUpsertWithWhereUniqueWithoutExerciseInput[]
    createMany?: ExerciseLogCreateManyExerciseInputEnvelope
    set?: ExerciseLogWhereUniqueInput | ExerciseLogWhereUniqueInput[]
    disconnect?: ExerciseLogWhereUniqueInput | ExerciseLogWhereUniqueInput[]
    delete?: ExerciseLogWhereUniqueInput | ExerciseLogWhereUniqueInput[]
    connect?: ExerciseLogWhereUniqueInput | ExerciseLogWhereUniqueInput[]
    update?: ExerciseLogUpdateWithWhereUniqueWithoutExerciseInput | ExerciseLogUpdateWithWhereUniqueWithoutExerciseInput[]
    updateMany?: ExerciseLogUpdateManyWithWhereWithoutExerciseInput | ExerciseLogUpdateManyWithWhereWithoutExerciseInput[]
    deleteMany?: ExerciseLogScalarWhereInput | ExerciseLogScalarWhereInput[]
  }

  export type ExerciseTimeCreateNestedManyWithoutExerciseLogInput = {
    create?: XOR<ExerciseTimeCreateWithoutExerciseLogInput, ExerciseTimeUncheckedCreateWithoutExerciseLogInput> | ExerciseTimeCreateWithoutExerciseLogInput[] | ExerciseTimeUncheckedCreateWithoutExerciseLogInput[]
    connectOrCreate?: ExerciseTimeCreateOrConnectWithoutExerciseLogInput | ExerciseTimeCreateOrConnectWithoutExerciseLogInput[]
    createMany?: ExerciseTimeCreateManyExerciseLogInputEnvelope
    connect?: ExerciseTimeWhereUniqueInput | ExerciseTimeWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutExerciseLogsInput = {
    create?: XOR<UserCreateWithoutExerciseLogsInput, UserUncheckedCreateWithoutExerciseLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutExerciseLogsInput
    connect?: UserWhereUniqueInput
  }

  export type WorkoutLogCreateNestedOneWithoutExerciseLogsInput = {
    create?: XOR<WorkoutLogCreateWithoutExerciseLogsInput, WorkoutLogUncheckedCreateWithoutExerciseLogsInput>
    connectOrCreate?: WorkoutLogCreateOrConnectWithoutExerciseLogsInput
    connect?: WorkoutLogWhereUniqueInput
  }

  export type ExerciseCreateNestedOneWithoutExerciseLogsInput = {
    create?: XOR<ExerciseCreateWithoutExerciseLogsInput, ExerciseUncheckedCreateWithoutExerciseLogsInput>
    connectOrCreate?: ExerciseCreateOrConnectWithoutExerciseLogsInput
    connect?: ExerciseWhereUniqueInput
  }

  export type ExerciseTimeUncheckedCreateNestedManyWithoutExerciseLogInput = {
    create?: XOR<ExerciseTimeCreateWithoutExerciseLogInput, ExerciseTimeUncheckedCreateWithoutExerciseLogInput> | ExerciseTimeCreateWithoutExerciseLogInput[] | ExerciseTimeUncheckedCreateWithoutExerciseLogInput[]
    connectOrCreate?: ExerciseTimeCreateOrConnectWithoutExerciseLogInput | ExerciseTimeCreateOrConnectWithoutExerciseLogInput[]
    createMany?: ExerciseTimeCreateManyExerciseLogInputEnvelope
    connect?: ExerciseTimeWhereUniqueInput | ExerciseTimeWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type ExerciseTimeUpdateManyWithoutExerciseLogNestedInput = {
    create?: XOR<ExerciseTimeCreateWithoutExerciseLogInput, ExerciseTimeUncheckedCreateWithoutExerciseLogInput> | ExerciseTimeCreateWithoutExerciseLogInput[] | ExerciseTimeUncheckedCreateWithoutExerciseLogInput[]
    connectOrCreate?: ExerciseTimeCreateOrConnectWithoutExerciseLogInput | ExerciseTimeCreateOrConnectWithoutExerciseLogInput[]
    upsert?: ExerciseTimeUpsertWithWhereUniqueWithoutExerciseLogInput | ExerciseTimeUpsertWithWhereUniqueWithoutExerciseLogInput[]
    createMany?: ExerciseTimeCreateManyExerciseLogInputEnvelope
    set?: ExerciseTimeWhereUniqueInput | ExerciseTimeWhereUniqueInput[]
    disconnect?: ExerciseTimeWhereUniqueInput | ExerciseTimeWhereUniqueInput[]
    delete?: ExerciseTimeWhereUniqueInput | ExerciseTimeWhereUniqueInput[]
    connect?: ExerciseTimeWhereUniqueInput | ExerciseTimeWhereUniqueInput[]
    update?: ExerciseTimeUpdateWithWhereUniqueWithoutExerciseLogInput | ExerciseTimeUpdateWithWhereUniqueWithoutExerciseLogInput[]
    updateMany?: ExerciseTimeUpdateManyWithWhereWithoutExerciseLogInput | ExerciseTimeUpdateManyWithWhereWithoutExerciseLogInput[]
    deleteMany?: ExerciseTimeScalarWhereInput | ExerciseTimeScalarWhereInput[]
  }

  export type UserUpdateOneWithoutExerciseLogsNestedInput = {
    create?: XOR<UserCreateWithoutExerciseLogsInput, UserUncheckedCreateWithoutExerciseLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutExerciseLogsInput
    upsert?: UserUpsertWithoutExerciseLogsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutExerciseLogsInput, UserUpdateWithoutExerciseLogsInput>, UserUncheckedUpdateWithoutExerciseLogsInput>
  }

  export type WorkoutLogUpdateOneWithoutExerciseLogsNestedInput = {
    create?: XOR<WorkoutLogCreateWithoutExerciseLogsInput, WorkoutLogUncheckedCreateWithoutExerciseLogsInput>
    connectOrCreate?: WorkoutLogCreateOrConnectWithoutExerciseLogsInput
    upsert?: WorkoutLogUpsertWithoutExerciseLogsInput
    disconnect?: WorkoutLogWhereInput | boolean
    delete?: WorkoutLogWhereInput | boolean
    connect?: WorkoutLogWhereUniqueInput
    update?: XOR<XOR<WorkoutLogUpdateToOneWithWhereWithoutExerciseLogsInput, WorkoutLogUpdateWithoutExerciseLogsInput>, WorkoutLogUncheckedUpdateWithoutExerciseLogsInput>
  }

  export type ExerciseUpdateOneWithoutExerciseLogsNestedInput = {
    create?: XOR<ExerciseCreateWithoutExerciseLogsInput, ExerciseUncheckedCreateWithoutExerciseLogsInput>
    connectOrCreate?: ExerciseCreateOrConnectWithoutExerciseLogsInput
    upsert?: ExerciseUpsertWithoutExerciseLogsInput
    disconnect?: ExerciseWhereInput | boolean
    delete?: ExerciseWhereInput | boolean
    connect?: ExerciseWhereUniqueInput
    update?: XOR<XOR<ExerciseUpdateToOneWithWhereWithoutExerciseLogsInput, ExerciseUpdateWithoutExerciseLogsInput>, ExerciseUncheckedUpdateWithoutExerciseLogsInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ExerciseTimeUncheckedUpdateManyWithoutExerciseLogNestedInput = {
    create?: XOR<ExerciseTimeCreateWithoutExerciseLogInput, ExerciseTimeUncheckedCreateWithoutExerciseLogInput> | ExerciseTimeCreateWithoutExerciseLogInput[] | ExerciseTimeUncheckedCreateWithoutExerciseLogInput[]
    connectOrCreate?: ExerciseTimeCreateOrConnectWithoutExerciseLogInput | ExerciseTimeCreateOrConnectWithoutExerciseLogInput[]
    upsert?: ExerciseTimeUpsertWithWhereUniqueWithoutExerciseLogInput | ExerciseTimeUpsertWithWhereUniqueWithoutExerciseLogInput[]
    createMany?: ExerciseTimeCreateManyExerciseLogInputEnvelope
    set?: ExerciseTimeWhereUniqueInput | ExerciseTimeWhereUniqueInput[]
    disconnect?: ExerciseTimeWhereUniqueInput | ExerciseTimeWhereUniqueInput[]
    delete?: ExerciseTimeWhereUniqueInput | ExerciseTimeWhereUniqueInput[]
    connect?: ExerciseTimeWhereUniqueInput | ExerciseTimeWhereUniqueInput[]
    update?: ExerciseTimeUpdateWithWhereUniqueWithoutExerciseLogInput | ExerciseTimeUpdateWithWhereUniqueWithoutExerciseLogInput[]
    updateMany?: ExerciseTimeUpdateManyWithWhereWithoutExerciseLogInput | ExerciseTimeUpdateManyWithWhereWithoutExerciseLogInput[]
    deleteMany?: ExerciseTimeScalarWhereInput | ExerciseTimeScalarWhereInput[]
  }

  export type ExerciseLogCreateNestedOneWithoutTimesInput = {
    create?: XOR<ExerciseLogCreateWithoutTimesInput, ExerciseLogUncheckedCreateWithoutTimesInput>
    connectOrCreate?: ExerciseLogCreateOrConnectWithoutTimesInput
    connect?: ExerciseLogWhereUniqueInput
  }

  export type ExerciseLogUpdateOneWithoutTimesNestedInput = {
    create?: XOR<ExerciseLogCreateWithoutTimesInput, ExerciseLogUncheckedCreateWithoutTimesInput>
    connectOrCreate?: ExerciseLogCreateOrConnectWithoutTimesInput
    upsert?: ExerciseLogUpsertWithoutTimesInput
    disconnect?: ExerciseLogWhereInput | boolean
    delete?: ExerciseLogWhereInput | boolean
    connect?: ExerciseLogWhereUniqueInput
    update?: XOR<XOR<ExerciseLogUpdateToOneWithWhereWithoutTimesInput, ExerciseLogUpdateWithoutTimesInput>, ExerciseLogUncheckedUpdateWithoutTimesInput>
  }

  export type ExerciseLogCreateNestedManyWithoutWorkoutLogInput = {
    create?: XOR<ExerciseLogCreateWithoutWorkoutLogInput, ExerciseLogUncheckedCreateWithoutWorkoutLogInput> | ExerciseLogCreateWithoutWorkoutLogInput[] | ExerciseLogUncheckedCreateWithoutWorkoutLogInput[]
    connectOrCreate?: ExerciseLogCreateOrConnectWithoutWorkoutLogInput | ExerciseLogCreateOrConnectWithoutWorkoutLogInput[]
    createMany?: ExerciseLogCreateManyWorkoutLogInputEnvelope
    connect?: ExerciseLogWhereUniqueInput | ExerciseLogWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutWorkoutLogsInput = {
    create?: XOR<UserCreateWithoutWorkoutLogsInput, UserUncheckedCreateWithoutWorkoutLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutWorkoutLogsInput
    connect?: UserWhereUniqueInput
  }

  export type WorkoutCreateNestedOneWithoutWorkoutLogsInput = {
    create?: XOR<WorkoutCreateWithoutWorkoutLogsInput, WorkoutUncheckedCreateWithoutWorkoutLogsInput>
    connectOrCreate?: WorkoutCreateOrConnectWithoutWorkoutLogsInput
    connect?: WorkoutWhereUniqueInput
  }

  export type ExerciseLogUncheckedCreateNestedManyWithoutWorkoutLogInput = {
    create?: XOR<ExerciseLogCreateWithoutWorkoutLogInput, ExerciseLogUncheckedCreateWithoutWorkoutLogInput> | ExerciseLogCreateWithoutWorkoutLogInput[] | ExerciseLogUncheckedCreateWithoutWorkoutLogInput[]
    connectOrCreate?: ExerciseLogCreateOrConnectWithoutWorkoutLogInput | ExerciseLogCreateOrConnectWithoutWorkoutLogInput[]
    createMany?: ExerciseLogCreateManyWorkoutLogInputEnvelope
    connect?: ExerciseLogWhereUniqueInput | ExerciseLogWhereUniqueInput[]
  }

  export type ExerciseLogUpdateManyWithoutWorkoutLogNestedInput = {
    create?: XOR<ExerciseLogCreateWithoutWorkoutLogInput, ExerciseLogUncheckedCreateWithoutWorkoutLogInput> | ExerciseLogCreateWithoutWorkoutLogInput[] | ExerciseLogUncheckedCreateWithoutWorkoutLogInput[]
    connectOrCreate?: ExerciseLogCreateOrConnectWithoutWorkoutLogInput | ExerciseLogCreateOrConnectWithoutWorkoutLogInput[]
    upsert?: ExerciseLogUpsertWithWhereUniqueWithoutWorkoutLogInput | ExerciseLogUpsertWithWhereUniqueWithoutWorkoutLogInput[]
    createMany?: ExerciseLogCreateManyWorkoutLogInputEnvelope
    set?: ExerciseLogWhereUniqueInput | ExerciseLogWhereUniqueInput[]
    disconnect?: ExerciseLogWhereUniqueInput | ExerciseLogWhereUniqueInput[]
    delete?: ExerciseLogWhereUniqueInput | ExerciseLogWhereUniqueInput[]
    connect?: ExerciseLogWhereUniqueInput | ExerciseLogWhereUniqueInput[]
    update?: ExerciseLogUpdateWithWhereUniqueWithoutWorkoutLogInput | ExerciseLogUpdateWithWhereUniqueWithoutWorkoutLogInput[]
    updateMany?: ExerciseLogUpdateManyWithWhereWithoutWorkoutLogInput | ExerciseLogUpdateManyWithWhereWithoutWorkoutLogInput[]
    deleteMany?: ExerciseLogScalarWhereInput | ExerciseLogScalarWhereInput[]
  }

  export type UserUpdateOneWithoutWorkoutLogsNestedInput = {
    create?: XOR<UserCreateWithoutWorkoutLogsInput, UserUncheckedCreateWithoutWorkoutLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutWorkoutLogsInput
    upsert?: UserUpsertWithoutWorkoutLogsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutWorkoutLogsInput, UserUpdateWithoutWorkoutLogsInput>, UserUncheckedUpdateWithoutWorkoutLogsInput>
  }

  export type WorkoutUpdateOneWithoutWorkoutLogsNestedInput = {
    create?: XOR<WorkoutCreateWithoutWorkoutLogsInput, WorkoutUncheckedCreateWithoutWorkoutLogsInput>
    connectOrCreate?: WorkoutCreateOrConnectWithoutWorkoutLogsInput
    upsert?: WorkoutUpsertWithoutWorkoutLogsInput
    disconnect?: WorkoutWhereInput | boolean
    delete?: WorkoutWhereInput | boolean
    connect?: WorkoutWhereUniqueInput
    update?: XOR<XOR<WorkoutUpdateToOneWithWhereWithoutWorkoutLogsInput, WorkoutUpdateWithoutWorkoutLogsInput>, WorkoutUncheckedUpdateWithoutWorkoutLogsInput>
  }

  export type ExerciseLogUncheckedUpdateManyWithoutWorkoutLogNestedInput = {
    create?: XOR<ExerciseLogCreateWithoutWorkoutLogInput, ExerciseLogUncheckedCreateWithoutWorkoutLogInput> | ExerciseLogCreateWithoutWorkoutLogInput[] | ExerciseLogUncheckedCreateWithoutWorkoutLogInput[]
    connectOrCreate?: ExerciseLogCreateOrConnectWithoutWorkoutLogInput | ExerciseLogCreateOrConnectWithoutWorkoutLogInput[]
    upsert?: ExerciseLogUpsertWithWhereUniqueWithoutWorkoutLogInput | ExerciseLogUpsertWithWhereUniqueWithoutWorkoutLogInput[]
    createMany?: ExerciseLogCreateManyWorkoutLogInputEnvelope
    set?: ExerciseLogWhereUniqueInput | ExerciseLogWhereUniqueInput[]
    disconnect?: ExerciseLogWhereUniqueInput | ExerciseLogWhereUniqueInput[]
    delete?: ExerciseLogWhereUniqueInput | ExerciseLogWhereUniqueInput[]
    connect?: ExerciseLogWhereUniqueInput | ExerciseLogWhereUniqueInput[]
    update?: ExerciseLogUpdateWithWhereUniqueWithoutWorkoutLogInput | ExerciseLogUpdateWithWhereUniqueWithoutWorkoutLogInput[]
    updateMany?: ExerciseLogUpdateManyWithWhereWithoutWorkoutLogInput | ExerciseLogUpdateManyWithWhereWithoutWorkoutLogInput[]
    deleteMany?: ExerciseLogScalarWhereInput | ExerciseLogScalarWhereInput[]
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type ExerciseLogCreateWithoutUserInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    isCompleted?: boolean
    times?: ExerciseTimeCreateNestedManyWithoutExerciseLogInput
    workoutLog?: WorkoutLogCreateNestedOneWithoutExerciseLogsInput
    exercise?: ExerciseCreateNestedOneWithoutExerciseLogsInput
  }

  export type ExerciseLogUncheckedCreateWithoutUserInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    isCompleted?: boolean
    workoutLogId?: number | null
    exerciseId?: number | null
    times?: ExerciseTimeUncheckedCreateNestedManyWithoutExerciseLogInput
  }

  export type ExerciseLogCreateOrConnectWithoutUserInput = {
    where: ExerciseLogWhereUniqueInput
    create: XOR<ExerciseLogCreateWithoutUserInput, ExerciseLogUncheckedCreateWithoutUserInput>
  }

  export type ExerciseLogCreateManyUserInputEnvelope = {
    data: ExerciseLogCreateManyUserInput | ExerciseLogCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type WorkoutLogCreateWithoutUserInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    isCompleted?: boolean
    exerciseLogs?: ExerciseLogCreateNestedManyWithoutWorkoutLogInput
    workout?: WorkoutCreateNestedOneWithoutWorkoutLogsInput
  }

  export type WorkoutLogUncheckedCreateWithoutUserInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    isCompleted?: boolean
    workoutId?: number | null
    exerciseLogs?: ExerciseLogUncheckedCreateNestedManyWithoutWorkoutLogInput
  }

  export type WorkoutLogCreateOrConnectWithoutUserInput = {
    where: WorkoutLogWhereUniqueInput
    create: XOR<WorkoutLogCreateWithoutUserInput, WorkoutLogUncheckedCreateWithoutUserInput>
  }

  export type WorkoutLogCreateManyUserInputEnvelope = {
    data: WorkoutLogCreateManyUserInput | WorkoutLogCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ExerciseLogUpsertWithWhereUniqueWithoutUserInput = {
    where: ExerciseLogWhereUniqueInput
    update: XOR<ExerciseLogUpdateWithoutUserInput, ExerciseLogUncheckedUpdateWithoutUserInput>
    create: XOR<ExerciseLogCreateWithoutUserInput, ExerciseLogUncheckedCreateWithoutUserInput>
  }

  export type ExerciseLogUpdateWithWhereUniqueWithoutUserInput = {
    where: ExerciseLogWhereUniqueInput
    data: XOR<ExerciseLogUpdateWithoutUserInput, ExerciseLogUncheckedUpdateWithoutUserInput>
  }

  export type ExerciseLogUpdateManyWithWhereWithoutUserInput = {
    where: ExerciseLogScalarWhereInput
    data: XOR<ExerciseLogUpdateManyMutationInput, ExerciseLogUncheckedUpdateManyWithoutUserInput>
  }

  export type ExerciseLogScalarWhereInput = {
    AND?: ExerciseLogScalarWhereInput | ExerciseLogScalarWhereInput[]
    OR?: ExerciseLogScalarWhereInput[]
    NOT?: ExerciseLogScalarWhereInput | ExerciseLogScalarWhereInput[]
    id?: IntFilter<"ExerciseLog"> | number
    createdAt?: DateTimeFilter<"ExerciseLog"> | Date | string
    updatedAt?: DateTimeFilter<"ExerciseLog"> | Date | string
    isCompleted?: BoolFilter<"ExerciseLog"> | boolean
    userId?: IntNullableFilter<"ExerciseLog"> | number | null
    workoutLogId?: IntNullableFilter<"ExerciseLog"> | number | null
    exerciseId?: IntNullableFilter<"ExerciseLog"> | number | null
  }

  export type WorkoutLogUpsertWithWhereUniqueWithoutUserInput = {
    where: WorkoutLogWhereUniqueInput
    update: XOR<WorkoutLogUpdateWithoutUserInput, WorkoutLogUncheckedUpdateWithoutUserInput>
    create: XOR<WorkoutLogCreateWithoutUserInput, WorkoutLogUncheckedCreateWithoutUserInput>
  }

  export type WorkoutLogUpdateWithWhereUniqueWithoutUserInput = {
    where: WorkoutLogWhereUniqueInput
    data: XOR<WorkoutLogUpdateWithoutUserInput, WorkoutLogUncheckedUpdateWithoutUserInput>
  }

  export type WorkoutLogUpdateManyWithWhereWithoutUserInput = {
    where: WorkoutLogScalarWhereInput
    data: XOR<WorkoutLogUpdateManyMutationInput, WorkoutLogUncheckedUpdateManyWithoutUserInput>
  }

  export type WorkoutLogScalarWhereInput = {
    AND?: WorkoutLogScalarWhereInput | WorkoutLogScalarWhereInput[]
    OR?: WorkoutLogScalarWhereInput[]
    NOT?: WorkoutLogScalarWhereInput | WorkoutLogScalarWhereInput[]
    id?: IntFilter<"WorkoutLog"> | number
    createdAt?: DateTimeFilter<"WorkoutLog"> | Date | string
    updatedAt?: DateTimeFilter<"WorkoutLog"> | Date | string
    isCompleted?: BoolFilter<"WorkoutLog"> | boolean
    userId?: IntNullableFilter<"WorkoutLog"> | number | null
    workoutId?: IntNullableFilter<"WorkoutLog"> | number | null
  }

  export type ExerciseCreateWithoutWorkoutsInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    times: number
    iconPath: string
    exerciseLogs?: ExerciseLogCreateNestedManyWithoutExerciseInput
  }

  export type ExerciseUncheckedCreateWithoutWorkoutsInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    times: number
    iconPath: string
    exerciseLogs?: ExerciseLogUncheckedCreateNestedManyWithoutExerciseInput
  }

  export type ExerciseCreateOrConnectWithoutWorkoutsInput = {
    where: ExerciseWhereUniqueInput
    create: XOR<ExerciseCreateWithoutWorkoutsInput, ExerciseUncheckedCreateWithoutWorkoutsInput>
  }

  export type WorkoutLogCreateWithoutWorkoutInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    isCompleted?: boolean
    exerciseLogs?: ExerciseLogCreateNestedManyWithoutWorkoutLogInput
    user?: UserCreateNestedOneWithoutWorkoutLogsInput
  }

  export type WorkoutLogUncheckedCreateWithoutWorkoutInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    isCompleted?: boolean
    userId?: number | null
    exerciseLogs?: ExerciseLogUncheckedCreateNestedManyWithoutWorkoutLogInput
  }

  export type WorkoutLogCreateOrConnectWithoutWorkoutInput = {
    where: WorkoutLogWhereUniqueInput
    create: XOR<WorkoutLogCreateWithoutWorkoutInput, WorkoutLogUncheckedCreateWithoutWorkoutInput>
  }

  export type WorkoutLogCreateManyWorkoutInputEnvelope = {
    data: WorkoutLogCreateManyWorkoutInput | WorkoutLogCreateManyWorkoutInput[]
    skipDuplicates?: boolean
  }

  export type ExerciseUpsertWithWhereUniqueWithoutWorkoutsInput = {
    where: ExerciseWhereUniqueInput
    update: XOR<ExerciseUpdateWithoutWorkoutsInput, ExerciseUncheckedUpdateWithoutWorkoutsInput>
    create: XOR<ExerciseCreateWithoutWorkoutsInput, ExerciseUncheckedCreateWithoutWorkoutsInput>
  }

  export type ExerciseUpdateWithWhereUniqueWithoutWorkoutsInput = {
    where: ExerciseWhereUniqueInput
    data: XOR<ExerciseUpdateWithoutWorkoutsInput, ExerciseUncheckedUpdateWithoutWorkoutsInput>
  }

  export type ExerciseUpdateManyWithWhereWithoutWorkoutsInput = {
    where: ExerciseScalarWhereInput
    data: XOR<ExerciseUpdateManyMutationInput, ExerciseUncheckedUpdateManyWithoutWorkoutsInput>
  }

  export type ExerciseScalarWhereInput = {
    AND?: ExerciseScalarWhereInput | ExerciseScalarWhereInput[]
    OR?: ExerciseScalarWhereInput[]
    NOT?: ExerciseScalarWhereInput | ExerciseScalarWhereInput[]
    id?: IntFilter<"Exercise"> | number
    createdAt?: DateTimeFilter<"Exercise"> | Date | string
    updatedAt?: DateTimeFilter<"Exercise"> | Date | string
    name?: StringFilter<"Exercise"> | string
    times?: IntFilter<"Exercise"> | number
    iconPath?: StringFilter<"Exercise"> | string
  }

  export type WorkoutLogUpsertWithWhereUniqueWithoutWorkoutInput = {
    where: WorkoutLogWhereUniqueInput
    update: XOR<WorkoutLogUpdateWithoutWorkoutInput, WorkoutLogUncheckedUpdateWithoutWorkoutInput>
    create: XOR<WorkoutLogCreateWithoutWorkoutInput, WorkoutLogUncheckedCreateWithoutWorkoutInput>
  }

  export type WorkoutLogUpdateWithWhereUniqueWithoutWorkoutInput = {
    where: WorkoutLogWhereUniqueInput
    data: XOR<WorkoutLogUpdateWithoutWorkoutInput, WorkoutLogUncheckedUpdateWithoutWorkoutInput>
  }

  export type WorkoutLogUpdateManyWithWhereWithoutWorkoutInput = {
    where: WorkoutLogScalarWhereInput
    data: XOR<WorkoutLogUpdateManyMutationInput, WorkoutLogUncheckedUpdateManyWithoutWorkoutInput>
  }

  export type WorkoutCreateWithoutExercisesInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    workoutLogs?: WorkoutLogCreateNestedManyWithoutWorkoutInput
  }

  export type WorkoutUncheckedCreateWithoutExercisesInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    workoutLogs?: WorkoutLogUncheckedCreateNestedManyWithoutWorkoutInput
  }

  export type WorkoutCreateOrConnectWithoutExercisesInput = {
    where: WorkoutWhereUniqueInput
    create: XOR<WorkoutCreateWithoutExercisesInput, WorkoutUncheckedCreateWithoutExercisesInput>
  }

  export type ExerciseLogCreateWithoutExerciseInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    isCompleted?: boolean
    times?: ExerciseTimeCreateNestedManyWithoutExerciseLogInput
    user?: UserCreateNestedOneWithoutExerciseLogsInput
    workoutLog?: WorkoutLogCreateNestedOneWithoutExerciseLogsInput
  }

  export type ExerciseLogUncheckedCreateWithoutExerciseInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    isCompleted?: boolean
    userId?: number | null
    workoutLogId?: number | null
    times?: ExerciseTimeUncheckedCreateNestedManyWithoutExerciseLogInput
  }

  export type ExerciseLogCreateOrConnectWithoutExerciseInput = {
    where: ExerciseLogWhereUniqueInput
    create: XOR<ExerciseLogCreateWithoutExerciseInput, ExerciseLogUncheckedCreateWithoutExerciseInput>
  }

  export type ExerciseLogCreateManyExerciseInputEnvelope = {
    data: ExerciseLogCreateManyExerciseInput | ExerciseLogCreateManyExerciseInput[]
    skipDuplicates?: boolean
  }

  export type WorkoutUpsertWithWhereUniqueWithoutExercisesInput = {
    where: WorkoutWhereUniqueInput
    update: XOR<WorkoutUpdateWithoutExercisesInput, WorkoutUncheckedUpdateWithoutExercisesInput>
    create: XOR<WorkoutCreateWithoutExercisesInput, WorkoutUncheckedCreateWithoutExercisesInput>
  }

  export type WorkoutUpdateWithWhereUniqueWithoutExercisesInput = {
    where: WorkoutWhereUniqueInput
    data: XOR<WorkoutUpdateWithoutExercisesInput, WorkoutUncheckedUpdateWithoutExercisesInput>
  }

  export type WorkoutUpdateManyWithWhereWithoutExercisesInput = {
    where: WorkoutScalarWhereInput
    data: XOR<WorkoutUpdateManyMutationInput, WorkoutUncheckedUpdateManyWithoutExercisesInput>
  }

  export type WorkoutScalarWhereInput = {
    AND?: WorkoutScalarWhereInput | WorkoutScalarWhereInput[]
    OR?: WorkoutScalarWhereInput[]
    NOT?: WorkoutScalarWhereInput | WorkoutScalarWhereInput[]
    id?: IntFilter<"Workout"> | number
    createdAt?: DateTimeFilter<"Workout"> | Date | string
    updatedAt?: DateTimeFilter<"Workout"> | Date | string
    name?: StringFilter<"Workout"> | string
  }

  export type ExerciseLogUpsertWithWhereUniqueWithoutExerciseInput = {
    where: ExerciseLogWhereUniqueInput
    update: XOR<ExerciseLogUpdateWithoutExerciseInput, ExerciseLogUncheckedUpdateWithoutExerciseInput>
    create: XOR<ExerciseLogCreateWithoutExerciseInput, ExerciseLogUncheckedCreateWithoutExerciseInput>
  }

  export type ExerciseLogUpdateWithWhereUniqueWithoutExerciseInput = {
    where: ExerciseLogWhereUniqueInput
    data: XOR<ExerciseLogUpdateWithoutExerciseInput, ExerciseLogUncheckedUpdateWithoutExerciseInput>
  }

  export type ExerciseLogUpdateManyWithWhereWithoutExerciseInput = {
    where: ExerciseLogScalarWhereInput
    data: XOR<ExerciseLogUpdateManyMutationInput, ExerciseLogUncheckedUpdateManyWithoutExerciseInput>
  }

  export type ExerciseTimeCreateWithoutExerciseLogInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    weight?: number
    repeat?: number
    isCompleted?: boolean
  }

  export type ExerciseTimeUncheckedCreateWithoutExerciseLogInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    weight?: number
    repeat?: number
    isCompleted?: boolean
  }

  export type ExerciseTimeCreateOrConnectWithoutExerciseLogInput = {
    where: ExerciseTimeWhereUniqueInput
    create: XOR<ExerciseTimeCreateWithoutExerciseLogInput, ExerciseTimeUncheckedCreateWithoutExerciseLogInput>
  }

  export type ExerciseTimeCreateManyExerciseLogInputEnvelope = {
    data: ExerciseTimeCreateManyExerciseLogInput | ExerciseTimeCreateManyExerciseLogInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutExerciseLogsInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    name: string
    password: string
    images?: UserCreateimagesInput | string[]
    workoutLogs?: WorkoutLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutExerciseLogsInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    name: string
    password: string
    images?: UserCreateimagesInput | string[]
    workoutLogs?: WorkoutLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutExerciseLogsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutExerciseLogsInput, UserUncheckedCreateWithoutExerciseLogsInput>
  }

  export type WorkoutLogCreateWithoutExerciseLogsInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    isCompleted?: boolean
    user?: UserCreateNestedOneWithoutWorkoutLogsInput
    workout?: WorkoutCreateNestedOneWithoutWorkoutLogsInput
  }

  export type WorkoutLogUncheckedCreateWithoutExerciseLogsInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    isCompleted?: boolean
    userId?: number | null
    workoutId?: number | null
  }

  export type WorkoutLogCreateOrConnectWithoutExerciseLogsInput = {
    where: WorkoutLogWhereUniqueInput
    create: XOR<WorkoutLogCreateWithoutExerciseLogsInput, WorkoutLogUncheckedCreateWithoutExerciseLogsInput>
  }

  export type ExerciseCreateWithoutExerciseLogsInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    times: number
    iconPath: string
    workouts?: WorkoutCreateNestedManyWithoutExercisesInput
  }

  export type ExerciseUncheckedCreateWithoutExerciseLogsInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    times: number
    iconPath: string
    workouts?: WorkoutUncheckedCreateNestedManyWithoutExercisesInput
  }

  export type ExerciseCreateOrConnectWithoutExerciseLogsInput = {
    where: ExerciseWhereUniqueInput
    create: XOR<ExerciseCreateWithoutExerciseLogsInput, ExerciseUncheckedCreateWithoutExerciseLogsInput>
  }

  export type ExerciseTimeUpsertWithWhereUniqueWithoutExerciseLogInput = {
    where: ExerciseTimeWhereUniqueInput
    update: XOR<ExerciseTimeUpdateWithoutExerciseLogInput, ExerciseTimeUncheckedUpdateWithoutExerciseLogInput>
    create: XOR<ExerciseTimeCreateWithoutExerciseLogInput, ExerciseTimeUncheckedCreateWithoutExerciseLogInput>
  }

  export type ExerciseTimeUpdateWithWhereUniqueWithoutExerciseLogInput = {
    where: ExerciseTimeWhereUniqueInput
    data: XOR<ExerciseTimeUpdateWithoutExerciseLogInput, ExerciseTimeUncheckedUpdateWithoutExerciseLogInput>
  }

  export type ExerciseTimeUpdateManyWithWhereWithoutExerciseLogInput = {
    where: ExerciseTimeScalarWhereInput
    data: XOR<ExerciseTimeUpdateManyMutationInput, ExerciseTimeUncheckedUpdateManyWithoutExerciseLogInput>
  }

  export type ExerciseTimeScalarWhereInput = {
    AND?: ExerciseTimeScalarWhereInput | ExerciseTimeScalarWhereInput[]
    OR?: ExerciseTimeScalarWhereInput[]
    NOT?: ExerciseTimeScalarWhereInput | ExerciseTimeScalarWhereInput[]
    id?: IntFilter<"ExerciseTime"> | number
    createdAt?: DateTimeFilter<"ExerciseTime"> | Date | string
    updatedAt?: DateTimeFilter<"ExerciseTime"> | Date | string
    weight?: IntFilter<"ExerciseTime"> | number
    repeat?: IntFilter<"ExerciseTime"> | number
    isCompleted?: BoolFilter<"ExerciseTime"> | boolean
    exerciseLogId?: IntNullableFilter<"ExerciseTime"> | number | null
  }

  export type UserUpsertWithoutExerciseLogsInput = {
    update: XOR<UserUpdateWithoutExerciseLogsInput, UserUncheckedUpdateWithoutExerciseLogsInput>
    create: XOR<UserCreateWithoutExerciseLogsInput, UserUncheckedCreateWithoutExerciseLogsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutExerciseLogsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutExerciseLogsInput, UserUncheckedUpdateWithoutExerciseLogsInput>
  }

  export type UserUpdateWithoutExerciseLogsInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    images?: UserUpdateimagesInput | string[]
    workoutLogs?: WorkoutLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutExerciseLogsInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    images?: UserUpdateimagesInput | string[]
    workoutLogs?: WorkoutLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type WorkoutLogUpsertWithoutExerciseLogsInput = {
    update: XOR<WorkoutLogUpdateWithoutExerciseLogsInput, WorkoutLogUncheckedUpdateWithoutExerciseLogsInput>
    create: XOR<WorkoutLogCreateWithoutExerciseLogsInput, WorkoutLogUncheckedCreateWithoutExerciseLogsInput>
    where?: WorkoutLogWhereInput
  }

  export type WorkoutLogUpdateToOneWithWhereWithoutExerciseLogsInput = {
    where?: WorkoutLogWhereInput
    data: XOR<WorkoutLogUpdateWithoutExerciseLogsInput, WorkoutLogUncheckedUpdateWithoutExerciseLogsInput>
  }

  export type WorkoutLogUpdateWithoutExerciseLogsInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneWithoutWorkoutLogsNestedInput
    workout?: WorkoutUpdateOneWithoutWorkoutLogsNestedInput
  }

  export type WorkoutLogUncheckedUpdateWithoutExerciseLogsInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    workoutId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ExerciseUpsertWithoutExerciseLogsInput = {
    update: XOR<ExerciseUpdateWithoutExerciseLogsInput, ExerciseUncheckedUpdateWithoutExerciseLogsInput>
    create: XOR<ExerciseCreateWithoutExerciseLogsInput, ExerciseUncheckedCreateWithoutExerciseLogsInput>
    where?: ExerciseWhereInput
  }

  export type ExerciseUpdateToOneWithWhereWithoutExerciseLogsInput = {
    where?: ExerciseWhereInput
    data: XOR<ExerciseUpdateWithoutExerciseLogsInput, ExerciseUncheckedUpdateWithoutExerciseLogsInput>
  }

  export type ExerciseUpdateWithoutExerciseLogsInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    times?: IntFieldUpdateOperationsInput | number
    iconPath?: StringFieldUpdateOperationsInput | string
    workouts?: WorkoutUpdateManyWithoutExercisesNestedInput
  }

  export type ExerciseUncheckedUpdateWithoutExerciseLogsInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    times?: IntFieldUpdateOperationsInput | number
    iconPath?: StringFieldUpdateOperationsInput | string
    workouts?: WorkoutUncheckedUpdateManyWithoutExercisesNestedInput
  }

  export type ExerciseLogCreateWithoutTimesInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    isCompleted?: boolean
    user?: UserCreateNestedOneWithoutExerciseLogsInput
    workoutLog?: WorkoutLogCreateNestedOneWithoutExerciseLogsInput
    exercise?: ExerciseCreateNestedOneWithoutExerciseLogsInput
  }

  export type ExerciseLogUncheckedCreateWithoutTimesInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    isCompleted?: boolean
    userId?: number | null
    workoutLogId?: number | null
    exerciseId?: number | null
  }

  export type ExerciseLogCreateOrConnectWithoutTimesInput = {
    where: ExerciseLogWhereUniqueInput
    create: XOR<ExerciseLogCreateWithoutTimesInput, ExerciseLogUncheckedCreateWithoutTimesInput>
  }

  export type ExerciseLogUpsertWithoutTimesInput = {
    update: XOR<ExerciseLogUpdateWithoutTimesInput, ExerciseLogUncheckedUpdateWithoutTimesInput>
    create: XOR<ExerciseLogCreateWithoutTimesInput, ExerciseLogUncheckedCreateWithoutTimesInput>
    where?: ExerciseLogWhereInput
  }

  export type ExerciseLogUpdateToOneWithWhereWithoutTimesInput = {
    where?: ExerciseLogWhereInput
    data: XOR<ExerciseLogUpdateWithoutTimesInput, ExerciseLogUncheckedUpdateWithoutTimesInput>
  }

  export type ExerciseLogUpdateWithoutTimesInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneWithoutExerciseLogsNestedInput
    workoutLog?: WorkoutLogUpdateOneWithoutExerciseLogsNestedInput
    exercise?: ExerciseUpdateOneWithoutExerciseLogsNestedInput
  }

  export type ExerciseLogUncheckedUpdateWithoutTimesInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    workoutLogId?: NullableIntFieldUpdateOperationsInput | number | null
    exerciseId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ExerciseLogCreateWithoutWorkoutLogInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    isCompleted?: boolean
    times?: ExerciseTimeCreateNestedManyWithoutExerciseLogInput
    user?: UserCreateNestedOneWithoutExerciseLogsInput
    exercise?: ExerciseCreateNestedOneWithoutExerciseLogsInput
  }

  export type ExerciseLogUncheckedCreateWithoutWorkoutLogInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    isCompleted?: boolean
    userId?: number | null
    exerciseId?: number | null
    times?: ExerciseTimeUncheckedCreateNestedManyWithoutExerciseLogInput
  }

  export type ExerciseLogCreateOrConnectWithoutWorkoutLogInput = {
    where: ExerciseLogWhereUniqueInput
    create: XOR<ExerciseLogCreateWithoutWorkoutLogInput, ExerciseLogUncheckedCreateWithoutWorkoutLogInput>
  }

  export type ExerciseLogCreateManyWorkoutLogInputEnvelope = {
    data: ExerciseLogCreateManyWorkoutLogInput | ExerciseLogCreateManyWorkoutLogInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutWorkoutLogsInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    name: string
    password: string
    images?: UserCreateimagesInput | string[]
    exerciseLogs?: ExerciseLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutWorkoutLogsInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    name: string
    password: string
    images?: UserCreateimagesInput | string[]
    exerciseLogs?: ExerciseLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutWorkoutLogsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutWorkoutLogsInput, UserUncheckedCreateWithoutWorkoutLogsInput>
  }

  export type WorkoutCreateWithoutWorkoutLogsInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    exercises?: ExerciseCreateNestedManyWithoutWorkoutsInput
  }

  export type WorkoutUncheckedCreateWithoutWorkoutLogsInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    exercises?: ExerciseUncheckedCreateNestedManyWithoutWorkoutsInput
  }

  export type WorkoutCreateOrConnectWithoutWorkoutLogsInput = {
    where: WorkoutWhereUniqueInput
    create: XOR<WorkoutCreateWithoutWorkoutLogsInput, WorkoutUncheckedCreateWithoutWorkoutLogsInput>
  }

  export type ExerciseLogUpsertWithWhereUniqueWithoutWorkoutLogInput = {
    where: ExerciseLogWhereUniqueInput
    update: XOR<ExerciseLogUpdateWithoutWorkoutLogInput, ExerciseLogUncheckedUpdateWithoutWorkoutLogInput>
    create: XOR<ExerciseLogCreateWithoutWorkoutLogInput, ExerciseLogUncheckedCreateWithoutWorkoutLogInput>
  }

  export type ExerciseLogUpdateWithWhereUniqueWithoutWorkoutLogInput = {
    where: ExerciseLogWhereUniqueInput
    data: XOR<ExerciseLogUpdateWithoutWorkoutLogInput, ExerciseLogUncheckedUpdateWithoutWorkoutLogInput>
  }

  export type ExerciseLogUpdateManyWithWhereWithoutWorkoutLogInput = {
    where: ExerciseLogScalarWhereInput
    data: XOR<ExerciseLogUpdateManyMutationInput, ExerciseLogUncheckedUpdateManyWithoutWorkoutLogInput>
  }

  export type UserUpsertWithoutWorkoutLogsInput = {
    update: XOR<UserUpdateWithoutWorkoutLogsInput, UserUncheckedUpdateWithoutWorkoutLogsInput>
    create: XOR<UserCreateWithoutWorkoutLogsInput, UserUncheckedCreateWithoutWorkoutLogsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutWorkoutLogsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutWorkoutLogsInput, UserUncheckedUpdateWithoutWorkoutLogsInput>
  }

  export type UserUpdateWithoutWorkoutLogsInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    images?: UserUpdateimagesInput | string[]
    exerciseLogs?: ExerciseLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutWorkoutLogsInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    images?: UserUpdateimagesInput | string[]
    exerciseLogs?: ExerciseLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type WorkoutUpsertWithoutWorkoutLogsInput = {
    update: XOR<WorkoutUpdateWithoutWorkoutLogsInput, WorkoutUncheckedUpdateWithoutWorkoutLogsInput>
    create: XOR<WorkoutCreateWithoutWorkoutLogsInput, WorkoutUncheckedCreateWithoutWorkoutLogsInput>
    where?: WorkoutWhereInput
  }

  export type WorkoutUpdateToOneWithWhereWithoutWorkoutLogsInput = {
    where?: WorkoutWhereInput
    data: XOR<WorkoutUpdateWithoutWorkoutLogsInput, WorkoutUncheckedUpdateWithoutWorkoutLogsInput>
  }

  export type WorkoutUpdateWithoutWorkoutLogsInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    exercises?: ExerciseUpdateManyWithoutWorkoutsNestedInput
  }

  export type WorkoutUncheckedUpdateWithoutWorkoutLogsInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    exercises?: ExerciseUncheckedUpdateManyWithoutWorkoutsNestedInput
  }

  export type ExerciseLogCreateManyUserInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    isCompleted?: boolean
    workoutLogId?: number | null
    exerciseId?: number | null
  }

  export type WorkoutLogCreateManyUserInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    isCompleted?: boolean
    workoutId?: number | null
  }

  export type ExerciseLogUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    times?: ExerciseTimeUpdateManyWithoutExerciseLogNestedInput
    workoutLog?: WorkoutLogUpdateOneWithoutExerciseLogsNestedInput
    exercise?: ExerciseUpdateOneWithoutExerciseLogsNestedInput
  }

  export type ExerciseLogUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    workoutLogId?: NullableIntFieldUpdateOperationsInput | number | null
    exerciseId?: NullableIntFieldUpdateOperationsInput | number | null
    times?: ExerciseTimeUncheckedUpdateManyWithoutExerciseLogNestedInput
  }

  export type ExerciseLogUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    workoutLogId?: NullableIntFieldUpdateOperationsInput | number | null
    exerciseId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type WorkoutLogUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    exerciseLogs?: ExerciseLogUpdateManyWithoutWorkoutLogNestedInput
    workout?: WorkoutUpdateOneWithoutWorkoutLogsNestedInput
  }

  export type WorkoutLogUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    workoutId?: NullableIntFieldUpdateOperationsInput | number | null
    exerciseLogs?: ExerciseLogUncheckedUpdateManyWithoutWorkoutLogNestedInput
  }

  export type WorkoutLogUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    workoutId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type WorkoutLogCreateManyWorkoutInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    isCompleted?: boolean
    userId?: number | null
  }

  export type ExerciseUpdateWithoutWorkoutsInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    times?: IntFieldUpdateOperationsInput | number
    iconPath?: StringFieldUpdateOperationsInput | string
    exerciseLogs?: ExerciseLogUpdateManyWithoutExerciseNestedInput
  }

  export type ExerciseUncheckedUpdateWithoutWorkoutsInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    times?: IntFieldUpdateOperationsInput | number
    iconPath?: StringFieldUpdateOperationsInput | string
    exerciseLogs?: ExerciseLogUncheckedUpdateManyWithoutExerciseNestedInput
  }

  export type ExerciseUncheckedUpdateManyWithoutWorkoutsInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    times?: IntFieldUpdateOperationsInput | number
    iconPath?: StringFieldUpdateOperationsInput | string
  }

  export type WorkoutLogUpdateWithoutWorkoutInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    exerciseLogs?: ExerciseLogUpdateManyWithoutWorkoutLogNestedInput
    user?: UserUpdateOneWithoutWorkoutLogsNestedInput
  }

  export type WorkoutLogUncheckedUpdateWithoutWorkoutInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    exerciseLogs?: ExerciseLogUncheckedUpdateManyWithoutWorkoutLogNestedInput
  }

  export type WorkoutLogUncheckedUpdateManyWithoutWorkoutInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    userId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ExerciseLogCreateManyExerciseInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    isCompleted?: boolean
    userId?: number | null
    workoutLogId?: number | null
  }

  export type WorkoutUpdateWithoutExercisesInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    workoutLogs?: WorkoutLogUpdateManyWithoutWorkoutNestedInput
  }

  export type WorkoutUncheckedUpdateWithoutExercisesInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    workoutLogs?: WorkoutLogUncheckedUpdateManyWithoutWorkoutNestedInput
  }

  export type WorkoutUncheckedUpdateManyWithoutExercisesInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ExerciseLogUpdateWithoutExerciseInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    times?: ExerciseTimeUpdateManyWithoutExerciseLogNestedInput
    user?: UserUpdateOneWithoutExerciseLogsNestedInput
    workoutLog?: WorkoutLogUpdateOneWithoutExerciseLogsNestedInput
  }

  export type ExerciseLogUncheckedUpdateWithoutExerciseInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    workoutLogId?: NullableIntFieldUpdateOperationsInput | number | null
    times?: ExerciseTimeUncheckedUpdateManyWithoutExerciseLogNestedInput
  }

  export type ExerciseLogUncheckedUpdateManyWithoutExerciseInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    workoutLogId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ExerciseTimeCreateManyExerciseLogInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    weight?: number
    repeat?: number
    isCompleted?: boolean
  }

  export type ExerciseTimeUpdateWithoutExerciseLogInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    weight?: IntFieldUpdateOperationsInput | number
    repeat?: IntFieldUpdateOperationsInput | number
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ExerciseTimeUncheckedUpdateWithoutExerciseLogInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    weight?: IntFieldUpdateOperationsInput | number
    repeat?: IntFieldUpdateOperationsInput | number
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ExerciseTimeUncheckedUpdateManyWithoutExerciseLogInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    weight?: IntFieldUpdateOperationsInput | number
    repeat?: IntFieldUpdateOperationsInput | number
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ExerciseLogCreateManyWorkoutLogInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    isCompleted?: boolean
    userId?: number | null
    exerciseId?: number | null
  }

  export type ExerciseLogUpdateWithoutWorkoutLogInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    times?: ExerciseTimeUpdateManyWithoutExerciseLogNestedInput
    user?: UserUpdateOneWithoutExerciseLogsNestedInput
    exercise?: ExerciseUpdateOneWithoutExerciseLogsNestedInput
  }

  export type ExerciseLogUncheckedUpdateWithoutWorkoutLogInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    exerciseId?: NullableIntFieldUpdateOperationsInput | number | null
    times?: ExerciseTimeUncheckedUpdateManyWithoutExerciseLogNestedInput
  }

  export type ExerciseLogUncheckedUpdateManyWithoutWorkoutLogInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    exerciseId?: NullableIntFieldUpdateOperationsInput | number | null
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