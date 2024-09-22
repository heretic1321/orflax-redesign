declare namespace __WebpackModuleApi {
    interface RequireContext {
        keys(): string[];
        (id: string): string;
    }
}

declare const require: {
    context: (directory: string, useSubdirectories: boolean, regExp: RegExp) => any;
};

async function importAll(r: __WebpackModuleApi.RequireContext) {
    let images: { [key: string]: string } = {};
    r.keys().forEach((key: string) => (images[key] = r(key)));
    return images;
}

const images = await importAll(require.context('../assets/images/cables', false, /\.(png|jpe?g|svg)$/));

export default images;