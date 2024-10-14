import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import { FieldPolicy, FieldReadFunction, TypePolicies, TypePolicy } from '@apollo/client/cache';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type LogoutResponse = {
  __typename?: 'LogoutResponse';
  loggedOut: Scalars['Boolean']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  getNewTokens: NewTokensResponse;
  logOut: LogoutResponse;
  signIn: SignResponse;
  signUp: SignResponse;
};


export type MutationLogOutArgs = {
  id: Scalars['Int']['input'];
};


export type MutationSignInArgs = {
  signInInput: SignInInput;
};


export type MutationSignUpArgs = {
  signUpInput: SignUpInput;
};

export type NewTokensResponse = {
  __typename?: 'NewTokensResponse';
  accessToken: Scalars['String']['output'];
  refreshToken: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  findAllUsers: Array<User>;
  hello: Scalars['String']['output'];
};

export type SignInInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type SignResponse = {
  __typename?: 'SignResponse';
  accessToken: Scalars['String']['output'];
  refreshToken: Scalars['String']['output'];
  user: User;
};

export type SignUpInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type User = {
  __typename?: 'User';
  email: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  username: Scalars['String']['output'];
};

export type GetHelloWorldQueryVariables = Exact<{ [key: string]: never; }>;


export type GetHelloWorldQuery = { __typename?: 'Query', hello: string };


export const GetHelloWorldDocument = gql`
    query getHelloWorld {
  hello
}
    `;

/**
 * __useGetHelloWorldQuery__
 *
 * To run a query within a React component, call `useGetHelloWorldQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetHelloWorldQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetHelloWorldQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetHelloWorldQuery(baseOptions?: Apollo.QueryHookOptions<GetHelloWorldQuery, GetHelloWorldQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetHelloWorldQuery, GetHelloWorldQueryVariables>(GetHelloWorldDocument, options);
      }
export function useGetHelloWorldLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetHelloWorldQuery, GetHelloWorldQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetHelloWorldQuery, GetHelloWorldQueryVariables>(GetHelloWorldDocument, options);
        }
export function useGetHelloWorldSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetHelloWorldQuery, GetHelloWorldQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetHelloWorldQuery, GetHelloWorldQueryVariables>(GetHelloWorldDocument, options);
        }
export type GetHelloWorldQueryHookResult = ReturnType<typeof useGetHelloWorldQuery>;
export type GetHelloWorldLazyQueryHookResult = ReturnType<typeof useGetHelloWorldLazyQuery>;
export type GetHelloWorldSuspenseQueryHookResult = ReturnType<typeof useGetHelloWorldSuspenseQuery>;
export type GetHelloWorldQueryResult = Apollo.QueryResult<GetHelloWorldQuery, GetHelloWorldQueryVariables>;
export type LogoutResponseKeySpecifier = ('loggedOut' | LogoutResponseKeySpecifier)[];
export type LogoutResponseFieldPolicy = {
	loggedOut?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MutationKeySpecifier = ('getNewTokens' | 'logOut' | 'signIn' | 'signUp' | MutationKeySpecifier)[];
export type MutationFieldPolicy = {
	getNewTokens?: FieldPolicy<any> | FieldReadFunction<any>,
	logOut?: FieldPolicy<any> | FieldReadFunction<any>,
	signIn?: FieldPolicy<any> | FieldReadFunction<any>,
	signUp?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NewTokensResponseKeySpecifier = ('accessToken' | 'refreshToken' | NewTokensResponseKeySpecifier)[];
export type NewTokensResponseFieldPolicy = {
	accessToken?: FieldPolicy<any> | FieldReadFunction<any>,
	refreshToken?: FieldPolicy<any> | FieldReadFunction<any>
};
export type QueryKeySpecifier = ('findAllUsers' | 'hello' | QueryKeySpecifier)[];
export type QueryFieldPolicy = {
	findAllUsers?: FieldPolicy<any> | FieldReadFunction<any>,
	hello?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SignResponseKeySpecifier = ('accessToken' | 'refreshToken' | 'user' | SignResponseKeySpecifier)[];
export type SignResponseFieldPolicy = {
	accessToken?: FieldPolicy<any> | FieldReadFunction<any>,
	refreshToken?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserKeySpecifier = ('email' | 'id' | 'username' | UserKeySpecifier)[];
export type UserFieldPolicy = {
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	username?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StrictTypedTypePolicies = {
	LogoutResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LogoutResponseKeySpecifier | (() => undefined | LogoutResponseKeySpecifier),
		fields?: LogoutResponseFieldPolicy,
	},
	Mutation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MutationKeySpecifier | (() => undefined | MutationKeySpecifier),
		fields?: MutationFieldPolicy,
	},
	NewTokensResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NewTokensResponseKeySpecifier | (() => undefined | NewTokensResponseKeySpecifier),
		fields?: NewTokensResponseFieldPolicy,
	},
	Query?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | QueryKeySpecifier | (() => undefined | QueryKeySpecifier),
		fields?: QueryFieldPolicy,
	},
	SignResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SignResponseKeySpecifier | (() => undefined | SignResponseKeySpecifier),
		fields?: SignResponseFieldPolicy,
	},
	User?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserKeySpecifier | (() => undefined | UserKeySpecifier),
		fields?: UserFieldPolicy,
	}
};
export type TypedTypePolicies = StrictTypedTypePolicies & TypePolicies;