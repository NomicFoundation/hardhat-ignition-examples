# Ignition Usage Examples

This repository offers a variety of examples demonstrating how to utilize Ignition effectively.

## Getting Started

To set up the repository, clone it to your local machine and then run the following command:

```sh
npm install
```

## Structuring Ignition Modules

Ignition deployments rely on a modular approach. Each module specifies one or more related actions that Ignition will execute to deploy a set of contracts.

### Included Examples

The following examples are part of this repository. It's recommended to go through them sequentially for better understanding:

- **Basic Contract Deployments**

  - [`contracts/BasicDeployments.sol`](contracts/BasicDeployments.sol)
  - [`ignition/BasicDeploymentsModule.js`](ignition/BasicDeploymentsModule.js)
  - [`test/BasicDeployments.js`](test/BasicDeployments.js)

- **Deployment with Initialization**

  - [`contracts/DeploymentPlusInitialization.sol`](contracts/DeploymentPlusInitialization.sol)
  - [`ignition/DeploymentPlusInitializationModule.js`](ignition/DeploymentPlusInitializationModule.js)
  - [`test/DeploymentPlusInitialization.js`](test/DeploymentPlusInitialization.js)

- **Factory-Deployed Contract**

  - [`contracts/ContractFactory.sol`](contracts/ContractFactory.sol)
  - [`ignition/ContractFactoryModule.js`](ignition/ContractFactoryModule.js)
  - [`test/ContractFactory.js`](test/ContractFactory.js)

- **Contract Using a Library**

  - [`contracts/ContractWithLibrary.sol`](contracts/ContractWithLibrary.sol)
  - [`ignition/ContractWithLibraryModule.js`](ignition/ContractWithLibraryModule.js)
  - [`test/ContractWithLibrary.js`](test/ContractWithLibrary.js)

- **Contract Capable of Receiving ETH**

  - [`contracts/ReceivesEth.sol`](contracts/ReceivesEth.sol)
  - [`ignition/ReceivesEthModule.js`](ignition/ReceivesEthModule.js)
  - [`test/ReceivesEth.js`](test/ReceivesEth.js)

- **Using submodules**

  - [`ignition/SubmodulesExampleModule.js`](ignition/SubmodulesExampleModule.js)

## Deploying Modules

You can individually deploy each module by running the following command:

```shell
npx hardhat deploy ./ignition/<module_name>.js
```

Note: Deployments made using Hardhat Network's in-process version will not be stored persistently.

To persist your deployment data, utilize a separate network instance. For example, run `npx hardhat node` in one terminal, and execute deployments with `--network localhost` in another.

## Testing

Ignition modules are compatible with Hardhat tests.

To execute Hardhat tests using Ignition, run:

```shell
npm run test
```

## Learn more about Ignition

To learn more about how to use Ignition, please read [the `docs/` section in its repository](https://github.com/NomicFoundation/ignition/tree/main/docs).

## Support channels

If you want need help using Ignition, you can join [`#hardhat-ignition` our Discord server](https://hardhat.org/discord).
