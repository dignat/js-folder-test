function serializeJSON(value, options) {
    var _a, _b, _c;
    var indent = (_c = (_b = (_a = options === null || options === void 0 ? void 0 : options.formating) === null || _a === void 0 ? void 0 : _a.getIndent) === null || _b === void 0 ? void 0 : _b.call(_a)) !== null && _c !== void 0 ? _c : 2;
    return JSON.stringify(value, null, indent);
}
var user = {
    name: 'Denise',
    twitter: "Bla bla"
};
var json = serializeJSON(user, {
    formating: {
        getIndent: function () { return 0; }
    }
});
console.log(json);
