import React, {PropsWithChildren} from 'react';
import {ApolloProvider} from '@apollo/client';
import {client} from '@shared/api/client';

interface GQLProviderProps extends PropsWithChildren {}

export const GQLProvider: React.FC<GQLProviderProps> = ({children}) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default GQLProvider;
