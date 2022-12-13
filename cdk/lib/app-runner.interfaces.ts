import * as imports from "./app-runner.imports";

export interface NetworkInterface {
  vpc: imports.Vpc;
  nlb: imports.NetworkLoadBalancer;
  appRunnerEndpoint: imports.InterfaceVpcEndpoint;
}

export interface ApiGatewayInterface {
  apiGW: imports.RestApi;
  link: imports.VpcLink;
}

export interface AppRunnerInterface {
  service: imports.CfnService;
}
