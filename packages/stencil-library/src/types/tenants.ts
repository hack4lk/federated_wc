export enum Tenants {
  RUN = "RUN", // Tenant for the RUN application
  WFN = "WFN", // Tenant for Workforce Management
  ABC = "ABC", // Example of another tenant, you can add more as needed
}

export interface TenantConfig {
  navigationService?: any; // This can be a service or object used for navigation
  dataService?: any; // This can be a service or object used for data fetching or manipulation
}

export enum TenantURLS{
  RUN = "https://run.example.com", // URL for the RUN application
  WFN = "https://wfn.example.com", // URL for Workforce Management
  ABC = "https://abc.example.com", // Example of another tenant URL
  // Add more URLs as needed for other tenants
}
