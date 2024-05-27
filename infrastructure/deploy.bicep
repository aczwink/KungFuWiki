resource webApp 'Microsoft.Web/staticSites@2023-12-01' = {
  name: 'kungfudoc'
  location: resourceGroup().location

  properties: {
  }
  sku: {
    name: 'Free'
  }
}
