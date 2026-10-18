import type { Context } from "./lib/typed-context.ts";

/**
 * Opt in to typed `createContext()` declarations on the stable module.
 *
 * Import this module for its type augmentation, then import `createContext`
 * from `effection` as usual:
 *
 * ```ts
 * import "effection/experimental/augment";
 * import { createContext } from "effection";
 *
 * let Database = createContext<Database, "database">("database");
 * ```
 *
 * The constructor includes the experimental `of()` and `from()` methods at
 * runtime; their types are enabled by this opt-in import.
 *
 * @experimental
 */
declare module "./lib/context.ts" {
  export function createContext<Value, const Name extends string = string>(
    name: Name,
  ): Context<Value, Name, false>;

  export function createContext<Value, const Name extends string = string>(
    name: Name,
    defaultValue: Value,
  ): Context<Value, Name, true>;
}

export {};
