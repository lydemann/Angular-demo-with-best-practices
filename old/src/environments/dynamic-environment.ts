declare var window: any;

export class DynamicEnvironment {
    public get environment() {
        return window.config.environment;
    }

    public get feServerUrl() {
        return window.config.feServerUrl;
    }
}
