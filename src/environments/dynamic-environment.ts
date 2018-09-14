declare var window: any;

export class DynamicEnvironment {
    public get environment() {
        return window.config.environment;
    }
}
