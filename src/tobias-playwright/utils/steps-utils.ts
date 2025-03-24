type StepFn = (title: string, body: () => any) => Promise<any>;

export function withSteps<T extends object>(
  obj: T,
  stepOrLabel: StepFn | string,
  namePrefix?: string
): T {
  const stepFn: StepFn =
    typeof stepOrLabel === 'function'
      ? stepOrLabel
      : async (title, body) => {
          console.log(`[step] ${title}`);
          try {
            const result = await body();
            console.log(`[step:pass] ${title}`);
            return result;
          } catch (err) {
            console.log(`[step:fail] ${title}`);
            throw err;
          }
        };

  return new Proxy(obj, {
    get(target, prop, receiver) {
      const original = Reflect.get(target, prop, receiver);
      if (typeof original === 'function') {
        return async (...args: any[]) => {
          const label = `${namePrefix || target.constructor.name}.${String(prop)}(${args.map(a => JSON.stringify(a)).join(', ')})`;
          return stepFn(label, async () => original.apply(target, args));
        };
      }
      return original;
    },
  });
}
