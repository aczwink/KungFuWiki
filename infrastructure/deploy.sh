az group create --name kungfudoc --location westeurope
az deployment group create --resource-group kungfudoc --template-file deploy.bicep --parameters deployParams.json



https://lemon-water-0885c2a03.5.azurestaticapps.net