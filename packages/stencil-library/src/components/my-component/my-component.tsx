import { Component, Prop, h, State } from '@stencil/core';
import { format } from '../../utils/utils';
import { Tenants, TenantConfig } from '../../types/tenants';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  @Prop() first: string;
  @Prop() middle: string;
  @Prop() last: string;

  private getText(): string {
    return format(this.first, this.middle, this.last);
  }

  /**
   * -------------------------------------------------
   * custom configuration for the component
   */
  private tenantConfig: TenantConfig = {};

  /**
   * The loading state indicates whether the component is still loading data
   * This is used to show a loading message until the component is fully initialized
   */
  @State() loading: boolean = true; // State to track loading status
  /**
   * The tenant for which this component is being rendered.
   */
  @Prop() tenant: Tenants;

  componentDidLoad() {
    this.tenant = this.tenant || Tenants.WFN; // Default to WFN if tenant is not provided - later we might want to throw an error....
    //we're using setTimeout to simulate an async operation to fetch tenant information
    switch (this.tenant) {
      case Tenants.RUN:
        // this.tenantConfig.navigationService = new RUNNaviagtionService();
        // this.tenantConfig.dataService = new RUNDataService();
        this.tenantConfig.navigationService = {};
        this.tenantConfig.dataService = {};
        this.tenantConfig.layout = <one-column-layout output={this.getText()}></one-column-layout>;
        break;
      case Tenants.WFN:
        // this.tenantConfig.navigationService = new WFNNaviagtionService(); // WfnShell
        // this.tenantConfig.dataService = new WFNataService(); // WfnShell / fetch
        this.tenantConfig.navigationService = {}; // WfnShell
        this.tenantConfig.dataService = {}; // WfnShell / fetch
        this.tenantConfig.layout = <two-column-layout output={this.getText()} age={99}></two-column-layout>;
        break;
      default:
        break;
      //do nothing for now...
    }
    this.loading = false; // Simulate loading completion
  }

  render() {
    if (this.loading) {
      return <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" height={60} />;
    }
    return <div>{this.tenantConfig?.layout || <div>error loading component</div>}</div>;
  }
}
