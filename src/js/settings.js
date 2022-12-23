export class Settings {
  static settings = {
    theme: { dark: 'dark', light: 'light', gray: 'gray' },
    music: {
      trance: 'trance',
      pop: 'pop',
      rock: 'rock',
      chillout: 'chillout',
      off: 'off',
    },
    difficulty: {
      easy: 'easy',
      normal: 'normal',
      hard: 'hard',
      nightmare: 'nightmare',
    },
  };

  static defaultSetting = {
    theme: 'dark',
    music: 'trance',
    difficulty: 'easy',
  };

  constructor() {
    this._settings = new Map(Object.entries(Settings.defaultSetting));
  }

  setSetting(setting, value) {
    this._settings.set(setting, value);
  }

  get settings() {
    return Object.fromEntries(this._settings.entries());
  }
}
