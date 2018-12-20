declare var window: any;

export const environment = {
  production: true,
  get environment() {
    return window.config.environment;
  },

  get feServerUrl() {
    return window.config.feServerUrl;
  }
};
