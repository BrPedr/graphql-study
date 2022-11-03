const template = (
  { imports, interfaces, componentName, props, jsx, exports },
  { tpl }
) => {
  return tpl`
${imports}
import React from 'react';
import Props from './types';

${interfaces}

const ${componentName} = (${props}: Props) => {
  const { color = 'currentColor', size = 24, ...props } = svgProps;
  return ${jsx}
}
 
${exports}
`
}

module.exports = template
