import defaultConfig from './configs/default';
import merge from '../utils/merge-deep';

export default config =>
  karmaConfig => karmaConfig.set(
    merge(defaultConfig, require(`./configs/${config.toLowerCase()}`))
  );
