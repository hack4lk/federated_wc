import { Component, Prop, h, State } from '@stencil/core';
import { format } from '../../utils/utils';
import { Tenants } from '../../types/tenants';
import { RunTemplate } from './templates/run';
import { WfmTemplate } from './templates/wfm';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;

  private getText(): string {
    return format(this.first, this.middle, this.last);
  }

  /**
   * The loading state indicates whether the component is still loading data
   * This is used to show a loading message until the component is fully initialized
   */
  @State() loading: boolean = true; // State to track loading status
  /**
   * The tenant for which this component is being rendered.
   */
  private tenant: Tenants;

  componentDidLoad() {
    setTimeout(() => {
      this.tenant = this.tenant || Tenants.WFM; // Default to WFM if tenant is not provided - later we might want to throw an error....
      // in production, this would be a call to the service to fetch tenant-specific data or configurations

      this.loading = false; // Simulate loading completion
    }, 1000); // Simulate async loading of tenant information
  }

  render() {
    if (this.loading) {
      return <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" height={60} />;
    }
    return (
      <div>
        {(() => {
          switch (this.tenant) {
            case Tenants.RUN:
              return <RunTemplate output={this.getText()} />;
            case Tenants.WFM:
              return <WfmTemplate output={this.getText()} age={99} />;
            default:
              // Fallback case if needed
              return <p>Error...invalid tenant.</p>;
          }
        })()}
      </div>
    );
  }
}
