import yaml from 'js-yaml';

const parse = (data, extname) => {
  switch (extname) {
    case '.json':
      return JSON.parse(data);
    case '.yml':
    case '.yaml':
      return yaml.load(data);
    default:
      throw new Error(`Unsupported file extention (${extname})! [Supported: .json, .yml, .yaml]`);
  }
};
export default parse;
