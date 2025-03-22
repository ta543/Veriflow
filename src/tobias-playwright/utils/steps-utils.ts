import { test } from '@playwright/test';
import type { AllureTestInfo } from '@playwright/test';

export function withSteps<T extends object>(
  obj: T,
  stepFn: (title: string, body: () => any) => Promise<any>,
  namePrefix?: string
): T {
  return new Proxy(obj, {
    get(target, prop, receiver) {
      const original = Reflect.get(target, prop, receiver);

      if (typeof original === 'function') {
        return async (...args: any[]) => {
          const label = `${namePrefix || target.constructor.name}.${String(prop)}(${args.map(a => JSON.stringify(a)).join(', ')})`;
          
          // ✅ Print step label to stdout
          console.log(`[step] ${label}`);

          try {
            const result = await stepFn(label, async () => {
              return await original.apply(target, args);
            });
            console.log(`[step:pass] ${label}`);
            return result;
          } catch (err) {
            console.log(`[step:fail] ${label}`);
            throw err;
          }
        };
      }

      return original;
    }
  });
}

