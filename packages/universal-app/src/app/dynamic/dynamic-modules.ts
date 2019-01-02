export enum DynamicModule {
  D3 = 'D3'
}

export const DynamicModules: { [key in keyof typeof DynamicModule]: string } = {
  [DynamicModule.D3]: 'src/app/dynamic/d3/d3.module#D3Module'
};
