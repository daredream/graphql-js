/* @flow */
/**
 *  Copyright (c) 2015, Facebook, Inc.
 *  All rights reserved.
 *
 *  This source code is licensed under the BSD-style license found in the
 *  LICENSE file in the root directory of this source tree. An additional grant
 *  of patent rights can be found in the PATENTS file in the same directory.
 */

/**
 * A representation of source input to GraphQL. The name is optional,
 * but is mostly useful for clients who store GraphQL documents in
 * source files; for example, if the GraphQL input is in a file Foo.graphql,
 * it might be useful for name to be "Foo.graphql".
 */
export class Source {
  body: string;
  name: string;

  constructor(body: string, name?: string): void {
    this.body = body;
    this.name = name || 'GraphQL request';
  }
}
