export function QRViewResolver(componentName: string | null) {
  // TODO: 区分 component 和 directives

  return resolveComponents(componentName)
}

function resolveComponents(componentName: string | null) {
  if (componentName && componentName.startsWith('ea')) {
    const name = componentName.split('-')[1].toUpperCase()
    return {
      name: componentName,
      from: `QRView/es/src/${name}`,
      sideEffects: [`QRView/es/src/${name}/style/index.css`]
    }
  }
}
