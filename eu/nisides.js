function _areEquals(a, b) {
    // Check if both values are identical (strict equality)
    if (a === b) {
        return true;
    }
    
    // Handle cases where either value is null or undefined
    if (a == null || b == null) {
        return a === b;
    }
    
    // Handle arrays
    if (Array.isArray(a) && Array.isArray(b)) {
        if (a.length !== b.length) {
            return false;
        }
        for (let i = 0; i < a.length; i++) {
            if (!_areEquals(a[i], b[i])) {
                return false;
            }
        }
        return true;
    }
    
    // Handle objects
    if (typeof a === 'object' && typeof b === 'object') {
        const keysA = Object.keys(a);
        const keysB = Object.keys(b);

        if (keysA.length !== keysB.length) {
            return false;
        }

        for (let key of keysA) {
            if (!_areEquals(a[key], b[key])) {
                return false;
            }
        }

        return true;
    }
    
    // If none of the above conditions match, values are not equal
    return false;
}

// Test cases
console.log(_areEquals(1, 1));                // true
console.log(_areEquals(1, '1'));              // false
console.log(_areEquals(null, null));          // true
console.log(_areEquals(undefined, undefined));// true
console.log(_areEquals([1, 2], [1, 2]));      // true
console.log(_areEquals({a: 1}, {a: 1}));      // true
console.log(_areEquals({a: 1}, {a: 2}));      // false
console.log(_areEquals({a: 1, b: 2}, {a: 1}));// false
console.log(_areEquals({a: {b: 2}}, {a: {b: 2}})); // true
console.log(_areEquals({a: {b: 2}}, {a: {b: 3}})); // false
