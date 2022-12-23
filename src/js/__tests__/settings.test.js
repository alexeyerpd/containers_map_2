import { Settings } from '../settings';

const settings = new Settings();

test('Settings - get default setting', () => {
  expect(settings.settings).toEqual(Settings.defaultSetting);
});

test('Settings - change setting', () => {
  settings.setSetting('theme', Settings.settings.theme.light);
  expect(settings.settings).toEqual({
    ...Settings.defaultSetting,
    theme: Settings.settings.theme.light,
  });
});
