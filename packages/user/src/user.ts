'use strict';

import { core } from "@billl/action-test-core";

export function user() {
  console.log(core());
  return 'Hello from user!!!!!';
}
