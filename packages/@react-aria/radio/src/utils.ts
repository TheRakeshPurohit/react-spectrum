/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

import {RadioGroupState} from '@react-stately/radio';

interface RadioGroupData {
  name: string,
  form: string | undefined,
  descriptionId: string | undefined,
  errorMessageId: string | undefined,
  validationBehavior: 'aria' | 'native'
}

export const radioGroupData: WeakMap<RadioGroupState, RadioGroupData> = new WeakMap<RadioGroupState, RadioGroupData>();
