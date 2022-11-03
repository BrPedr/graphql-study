export type Custom<T> = T | null
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}

export type Scalars = {
  Boolean: boolean
  Date: string
  Float: number
  ID: string
  Int: number
  String: string
}

export type Query = {
  __typename?: 'Query'
  users: Array<User>
}

export type User = {
  __typename?: 'User'
  avatar: Scalars['String']
  id: Scalars['ID']
  name: Scalars['String']
  dob: Scalars['String']
  address: Scalars['String']
  description: Scalars['String']
  createdAt: Scalars['String']
  updatedAt: Scalars['String']
}
