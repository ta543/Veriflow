"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.withSteps = void 0;
const tslib_1 = require("tslib");
function withSteps(obj, stepOrLabel, namePrefix) {
    const stepFn = typeof stepOrLabel === 'function'
        ? stepOrLabel
        : (title, body) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            console.log(`[step] ${title}`);
            try {
                const result = yield body();
                console.log(`[step:pass] ${title}`);
                return result;
            }
            catch (err) {
                console.log(`[step:fail] ${title}`);
                throw err;
            }
        });
    return new Proxy(obj, {
        get(target, prop, receiver) {
            const original = Reflect.get(target, prop, receiver);
            if (typeof original === 'function') {
                return (...args) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                    const label = `${namePrefix || target.constructor.name}.${String(prop)}(${args.map(a => JSON.stringify(a)).join(', ')})`;
                    return stepFn(label, () => tslib_1.__awaiter(this, void 0, void 0, function* () { return original.apply(target, args); }));
                });
            }
            return original;
        },
    });
}
exports.withSteps = withSteps;
//# sourceMappingURL=steps-utils.js.map