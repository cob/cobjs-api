import path from "path";
import {defineConfig} from "vite";
import {createRequire} from "module";

// https://www.stefanjudis.com/snippets/how-to-import-json-files-in-es-modules-node-js/#option-2%3A-leverage-the-commonjs-%60require%60-function-to-load-json-files
const require = createRequire(import.meta.url);
const workingDir = path.resolve("./")
const workspacePackageJson = require(`${workingDir}/package.json`)

const getWorkspacePackageName = (): string => {
    return workspacePackageJson.name
};

const getPackageNameCamelCase = () => {
    try {
        return getWorkspacePackageName()
    } catch (err) {
        throw new Error("Name property in package.json is missing.");
    }
};

const fileName = {
    es: `${getPackageNameCamelCase()}.mjs`,
    cjs: `${getPackageNameCamelCase()}.cjs`
};

export default defineConfig({
    base: "./",
    build: {
        // https://github.com/vitejs/vite/issues/8910
        rollupOptions: {
            external: ['axios']
        },
        minify: true,
        sourcemap: true,
        lib: {
            entry: path.resolve("./", "src/index.ts"),
            name: getPackageNameCamelCase(),
            formats: ["es", "cjs"],
            fileName: (format) => {
                // @ts-ignore
                return fileName[format];
            }
        }
    }
})
