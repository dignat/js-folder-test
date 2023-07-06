type SerializeOptions = {
    formating? : {
        getIndent?: () => number;
    }
}

function serializeJSON(value: any, options?: SerializeOptions): string {
    const indent = options?.formating?.getIndent?.() ?? 2;
    return JSON.stringify(value, null, indent);
}

const user = {
    name: 'Denise',
    twitter: "Bla bla"
}

const json = serializeJSON(user, {
    formating: {
        getIndent: () => 0
    }
});

console.log(json);